<template>
  <div class="chat-container">
    <div v-if="!messages.length" class="welcome">
      <div class="welcome-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-7.07 17.07L2.5 21.5l2.43-2.43A10 10 0 1 0 12 2Zm0 3a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 5Zm2.5 10h-5v-1a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2Z"
          />
        </svg>
      </div>
      <h2 class="welcome-title">Need help with&nbsp;Quantiacs?</h2>
      <p class="welcome-text">
        Ask any question and the assistant will answer using the documentation.
      </p>
    </div>

    <div class="messages" v-else>
      <div
        v-for="(msg, index) in messages"
        :key="msg.id"
        :class="{
          'user-msg': msg.sender === 'user',
          'ai-msg': msg.sender === 'assistant',
        }"
      >
        <div
          v-if="isMarkdown(msg.content)"
          class="markdown-body"
          v-html="parseMarkdown(msg.content)"
        ></div>
        <div v-else>{{ msg.content }}</div>
        <button class="copy-msg-btn" @click="copyMessage(msg.content, index)">
          {{ copiedIndex === index ? '✓' : '⧉' }}
        </button>
      </div>
    </div>

    <div class="controls" v-if="messages.length">
      <button class="clear-btn" @click="eraseHistory">
        Clear Conversation
      </button>
    </div>

    <div class="loading" v-if="loading">Loading…</div>

    <div class="input-area">
      <textarea
        v-model="userInput"
        @input="handleInput"
        @keydown.enter.exact.prevent="sendMessage"
        :maxlength="maxLength"
        placeholder="Type your question about Quantiacs…"
        rows="4"
      ></textarea>
      <button
        v-if="loading"
        class="stop-btn"
        title="Cancel request"
        @click="cancelRequest"
      >
        ⏹
      </button>
      <button :disabled="loading || !userInput.trim()" @click="sendMessage">
        Send
      </button>
    </div>

    <div class="suggestions" v-if="suggestions.length">
      <ul>
        <li
          v-for="(sug, index) in suggestions"
          :key="index"
          @click="selectSuggestion(sug)"
        >
          <span class="sug-icon">💡</span>
          <div
            class="sug-text"
            v-html="
              isMarkdown(sug) ? parseMarkdown(sug) : DOMPurify.sanitize(sug)
            "
          ></div>
        </li>
      </ul>
    </div>

    <div class="notice">
      Answers are AI-generated. Data shared here may be used to train models. Do
      not share sensitive data.
    </div>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onUnmounted, toRaw } from 'vue';
import {
  sendChatMessageStream,
  fetchSuggestions,
  cancelStream,
} from './api.js';
import {
  saveChatHistory,
  loadChatHistory,
  clearChatHistory,
} from './history.js';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import 'highlight.js/styles/atom-one-dark.css';

const RECAPTCHA_SITE_KEY = '6LemyjEmAAAAAKqajJUnxmhThU-svok6MxCcuZcP';
let recaptchaLoaded = false;

function ensureRecaptcha() {
  return new Promise((resolve) => {
    if (window.grecaptcha && recaptchaLoaded) return resolve();
    if (!document.getElementById('recaptcha-script')) {
      const s = document.createElement('script');
      s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      s.async = true;
      s.defer = true;
      s.id = 'recaptcha-script';
      document.head.appendChild(s);
    }
    const check = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          recaptchaLoaded = true;
          resolve();
        });
      } else {
        setTimeout(check, 50);
      }
    };
    check();
  });
}

const getRecaptchaToken = async (action) => {
  await ensureRecaptcha();
  return window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
};

const messages = ref([]);
const userInput = ref('');
const loading = ref(false);
const error = ref('');
const suggestions = ref([]);
const maxLength = 500;
let latestRequest = 0;
let debounceTimer = null;
let lastSendTime = 0;
const RATE_LIMIT = 1500;

marked.use(
  markedHighlight({
    highlight: (code, lang) =>
      lang && hljs.getLanguage(lang)
        ? hljs.highlight(code, { language: lang }).value
        : hljs.highlightAuto(code).value,
  })
);

const isMarkdown = (c) => /(```|[*_#~])/g.test(c);
const parseMarkdown = (c) => DOMPurify.sanitize(marked.parse(c));

const addCopyButtons = () => {
  const blocks = document.querySelectorAll('.markdown-body pre');
  blocks.forEach((b) => {
    if (b.querySelector('.copy-btn-inline')) return;
    const btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.className = 'copy-btn-inline';
    btn.onclick = () => {
      navigator.clipboard.writeText(b.innerText).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = 'Copy'), 2000);
      });
    };
    b.style.position = 'relative';
    btn.style.position = 'absolute';
    btn.style.top = '8px';
    btn.style.right = '8px';
    b.appendChild(btn);
  });
};

const copiedIndex = ref(null);
const copyMessage = (text, idx) =>
  navigator.clipboard.writeText(text).then(() => {
    copiedIndex.value = idx;
    setTimeout(() => {
      if (copiedIndex.value === idx) copiedIndex.value = null;
    }, 2000);
  });

const updateHistory = () => saveChatHistory(toRaw(messages.value));

const cancelRequest = () => {
  cancelStream();
  loading.value = false;
  error.value = 'Request cancelled';
  suggestions.value = [];
};

function simpleId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

const sendMessage = async () => {
  if (loading.value) return;
  if (Date.now() - lastSendTime < RATE_LIMIT) return;
  if (!userInput.value.trim() || userInput.value.length > maxLength) return;
  lastSendTime = Date.now();

  cancelStream();
  latestRequest++;
  suggestions.value = [];
  error.value = '';

  const userMsg = {
    id: simpleId(),
    sender: 'user',
    content: userInput.value,
  };
  messages.value = [...messages.value, userMsg];
  updateHistory();

  const formatted = messages.value.map((m) => ({
    role: m.sender === 'user' ? 'user' : 'assistant',
    content: m.content,
  }));

  loading.value = true;
  const assistantMessage = {
    id: simpleId(),
    sender: 'assistant',
    content: '',
  };
  messages.value = [...messages.value, assistantMessage];

  try {
    const token = await getRecaptchaToken('send_message');
    await sendChatMessageStream(
      { role: 'user', content: userInput.value },
      formatted,
      (chunk) => {
        assistantMessage.content += chunk;
        messages.value = [...messages.value];
      },
      token
    );
    updateHistory();
  } catch (err) {
    const msg = String(err && err.message ? err.message : '').trim();
    if (msg.includes('safety/relevance')) {
      error.value =
        'Sorry, your request must be related to developing trading strategies.';
    } else {
      error.value = 'Network error';
    }
  } finally {
    loading.value = false;
    userInput.value = '';
    suggestions.value = [];
    nextTick(addCopyButtons);
  }
};

const handleInput = () => {
  clearTimeout(debounceTimer);
  if (loading.value) {
    suggestions.value = [];
    return;
  }
  const words = userInput.value.trim().split(/\s+/);
  if (words.length > 10 || userInput.value.length <= 3) {
    suggestions.value = [];
    return;
  }
  debounceTimer = setTimeout(async () => {
    latestRequest++;
    const curr = latestRequest;
    try {
      const token = await getRecaptchaToken('autocomplete');
      const res = await fetchSuggestions(userInput.value, token);
      if (curr === latestRequest) suggestions.value = res;
    } catch {
      if (curr === latestRequest) suggestions.value = [];
    }
  }, 1000);
};

const selectSuggestion = (s) => {
  userInput.value = s;
  suggestions.value = [];
};

const eraseHistory = () => {
  messages.value = [];
  error.value = '';
  suggestions.value = [];
  copiedIndex.value = null;
  loading.value = false;
  clearChatHistory();
  nextTick(addCopyButtons);
};

onMounted(async () => {
  messages.value = loadChatHistory();
  await ensureRecaptcha();
  nextTick(addCopyButtons);
});

onUnmounted(() => {
  cancelStream();
  clearTimeout(debounceTimer);
});

watch(messages, async () => {
  await nextTick();
  addCopyButtons();
});
</script>

<style>
.input-area textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 3em;
  max-height: 10em;
  line-height: 1.4;
  font-family: inherit;
  height: 50px;
}

.chat-container {
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Roboto, sans-serif;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #555;
  text-align: center;
  padding: 40px 0;
}

.welcome-icon {
  color: #1976d2;
}

.welcome-title {
  font-size: 1.5rem;
  margin: 0;
}

.welcome-text {
  margin: 0;
  font-size: 1rem;
  max-width: 420px;
}

.messages {
  overflow-y: auto;
  margin-bottom: 16px;
  max-height: 60vh;
}

.user-msg,
.ai-msg {
  margin: 8px 0;
  padding: 12px;
  border-radius: 6px;
  position: relative;
  word-wrap: break-word;
}

.user-msg {
  background: #d0eaff;
  text-align: right;
}

.ai-msg {
  background: #f0f2f5;
  text-align: left;
}

.copy-msg-btn {
  position: absolute;
  right: 6px;
  bottom: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.user-msg:hover .copy-msg-btn,
.ai-msg:hover .copy-msg-btn {
  opacity: 1;
}

.copy-msg-btn:focus {
  outline: none;
}

.markdown-body pre {
  background-color: #333 !important;
  color: #f8f8f2 !important;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  font-family:
    Source Sans Pro,
    Helvetica Neue,
    Arial,
    sans-serif;
  margin: 1em 0;
}

.markdown-body pre code {
  font-family:
    Source Sans Pro,
    Helvetica Neue,
    Arial,
    sans-serif;
  line-height: 1.4;
  color: #f8f8f2;
}

.markdown-body pre code .hljs-params {
  color: #f8f8f2;
}

.copy-btn-inline {
  padding: 4px 8px;
  background: #dcdcdc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.copy-btn-inline:hover {
  background: #c8c8c8;
}

.controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.clear-btn {
  background: #e57373;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.clear-btn:hover {
  background: #d32f2f;
}

.loading {
  text-align: center;
  font-size: 1rem;
  color: #1976d2;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading:before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 2px solid transparent;
  border-top-color: #1976d2;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.input-area {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}

.input-area button {
  padding: 10px 16px;
  background: #1976d2;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}

.input-area button:disabled {
  background: #90caf9;
  cursor: not-allowed;
}

.stop-btn {
  background: #e57373;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stop-btn:hover {
  background: #d32f2f;
}

.suggestions {
  position: relative;
  margin-bottom: 12px;
}

.suggestions ul {
  position: absolute;
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  margin-top: 0;
  z-index: 10;
}

.suggestions ul::-webkit-scrollbar {
  width: 6px;
}

.suggestions ul::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.suggestions li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 14px;
  transition: background 0.2s;
  cursor: pointer;
}

.suggestions li:hover {
  background: #f5f7fa;
}

.sug-icon {
  flex-shrink: 0;
  font-size: 1.1rem;
  color: #1976d2;
  margin-top: 2px;
}

.sug-text {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.4;
}

.markdown-body {
  margin: 0;
}

.markdown-body p {
  margin: 0;
}

.notice {
  background: #e8f5ff;
  border: 1px solid #b3e5fc;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  text-align: center;
  font-size: 0.9rem;
  color: #055160;
}

.error {
  text-align: center;
  color: #f44336;
  font-size: 0.95rem;
  margin-top: 12px;
}

@media (max-width: 600px) {
  .chat-container {
    margin: 20px;
    padding: 12px;
  }

  .input-area textarea,
  .input-area button {
    font-size: 0.9rem;
  }
}
</style>
