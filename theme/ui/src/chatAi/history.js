const CHAT_HISTORY_KEY = 'chatHistory';
const CHAT_HISTORY_LIMIT = 10;

export const saveChatHistory = (messages) =>
  localStorage.setItem(
    CHAT_HISTORY_KEY,
    JSON.stringify(messages.slice(-CHAT_HISTORY_LIMIT))
  );

export const loadChatHistory = () => {
  const data = localStorage.getItem(CHAT_HISTORY_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data).slice(-CHAT_HISTORY_LIMIT);
  } catch {
    return [];
  }
};

export const clearChatHistory = () => localStorage.removeItem(CHAT_HISTORY_KEY);
