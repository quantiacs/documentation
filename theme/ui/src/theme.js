import { computed, ref } from 'vue';

export const THEME_STORAGE_KEY = 'doc-ai-theme';
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const currentTheme = ref('dark');

function getStoredTheme() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'dark' || storedTheme === 'light'
      ? storedTheme
      : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  if (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(DARK_MEDIA_QUERY).matches
  ) {
    return 'dark';
  }

  return 'dark';
}

function applyTheme(theme) {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function syncTheme() {
  const nextTheme = getStoredTheme() || getSystemTheme();
  currentTheme.value = nextTheme;
  applyTheme(nextTheme);
}

let isInitialized = false;

export function initTheme() {
  if (isInitialized) {
    syncTheme();
    return;
  }

  isInitialized = true;
  syncTheme();

  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.matchMedia === 'function') {
    const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);
    const handleThemePreferenceChange = (event) => {
      if (getStoredTheme()) {
        return;
      }

      const nextTheme = event.matches ? 'dark' : 'light';
      currentTheme.value = nextTheme;
      applyTheme(nextTheme);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleThemePreferenceChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleThemePreferenceChange);
    }
  }

  window.addEventListener('storage', (event) => {
    if (event.key !== THEME_STORAGE_KEY) {
      return;
    }

    syncTheme();
  });
}

export function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') {
    return;
  }

  currentTheme.value = theme;
  applyTheme(theme);

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      return;
    }
  }
}

export function toggleTheme() {
  setTheme(currentTheme.value === 'dark' ? 'light' : 'dark');
}

export const isDarkTheme = computed(() => currentTheme.value === 'dark');
