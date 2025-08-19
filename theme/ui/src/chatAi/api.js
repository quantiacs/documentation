let streamController = null;
let suggestionController = null;

const ai_url = '';

const fetchWithAbort = (url, options, controller) =>
  fetch(url, { ...options, signal: controller.signal });

export function cancelStream() {
  if (streamController) {
    streamController.abort();
    streamController = null;
  }
  if (suggestionController) {
    suggestionController.abort();
    suggestionController = null;
  }
}

export async function sendChatMessageStream(
  userMessage,
  messages,
  onChunk,
  recaptchaToken
) {
  if (streamController) streamController.abort();
  streamController = new AbortController();

  const text =
    messages && messages.length > 1
      ? messages.map((m) => `${m.role}: ${m.content}`).join('\n')
      : (messages?.[0]?.content ?? userMessage.content);

  const response = await fetch(ai_url + '/engine/ai/message/stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text, recaptchaToken }),
    signal: streamController.signal,
  });

  if (!response.ok) {
    let msg = 'Network error';
    try {
      msg = await response.text();
    } catch {}
    throw new Error(msg || 'Network error');
  }

  if (!response.body) throw new Error('Network error');

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

export async function fetchSuggestions(partialMessage, recaptchaToken) {
  if (suggestionController) suggestionController.abort();
  suggestionController = new AbortController();

  const response = await fetchWithAbort(
    ai_url + '/engine/ai/message/autocomplete',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: partialMessage, recaptchaToken }),
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
