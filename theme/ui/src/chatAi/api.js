let streamController = null;
let suggestionController = null;

const fetchWithAbort = (url, options, controller) =>
  fetch(url, { ...options, signal: controller.signal });

export async function sendChatMessageStream(userMessage, _messages, onChunk) {
  if (streamController) streamController.abort();
  streamController = new AbortController();

  const response = await fetch('/engine/ai/message/stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage.content }),
    signal: streamController.signal,
  });

  if (!response.ok || !response.body) throw new Error('Network error');

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let buffer = '';
  let lastChunkTime = 0;
  const processInterval = 200;
  const delimiter = '\n\ndata:';

  const flush = (force = false) => {
    const now = Date.now();
    if (!force && now - lastChunkTime < processInterval) return;

    const last = buffer.lastIndexOf(delimiter);
    if (last !== -1) {
      const ready = buffer.slice(0, last);
      buffer = buffer.slice(last);
      const output = ready.replaceAll(delimiter, '').replace(/^data:\s*/, '');
      if (output) onChunk(output);
      lastChunkTime = now;
    }
  };

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    flush();
  }

  buffer += decoder.decode();
  flush(true);
}

export async function fetchSuggestions(partialMessage) {
  if (suggestionController) suggestionController.abort();
  suggestionController = new AbortController();

  const response = await fetchWithAbort(
    '/engine/ai/message/autocomplete',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: partialMessage }),
    },
    suggestionController
  );

  const data = await response.json();
  if (Array.isArray(data)) return data;
  if (data.options) return data.options;
  if (typeof data.message === 'string')
    return data.message
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
  return [];
}
