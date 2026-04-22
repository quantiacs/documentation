<template>
  <header>
    <div class="top_header">
      <div class="logo_wrapper">
        <a class="logo quantiacs_logo" href="/">Home</a>
      </div>
      <nav class="dropdownmenu">
        <ul>
          <li>
            <a class="nav_link" href="/contest" target="_self">Contest</a>
          </li>
          <li>
            <a class="nav_link" href="/leaderboard" target="_self"
              >Leaderboard</a
            >
          </li>
          <li>
            <a
              class="nav_link"
              href="/documentation/en/user_guide/data.html"
              target="_self"
              >Data</a
            >
          </li>
          <li>
            <a class="nav_link" href="/documentation/en/" target="_self"
              >Docs</a
            >
          </li>
          <li>
            <a
              class="nav_link quantiacs_community_link"
              href="/community"
              target="_self"
              >Community</a
            >
          </li>
        </ul>
      </nav>
      <div class="header_wrapper">
        <div class="wrapper">
          <button
            id="nav_icon3"
            type="button"
            class="menu_icon"
            :class="{ open: isMobileOpen }"
            :aria-expanded="isMobileOpen"
            aria-controls="mobile_menu"
            aria-label="Toggle navigation menu"
            @click="toggleMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <input type="checkbox" id="toggle" :checked="isMobileOpen" readonly />
          <div class="mobile_overlay" @click="closeMobileMenu"></div>
          <nav id="mobile_menu" @click="closeMobileMenu">
            <ul>
              <li>
                <a class="nav_link" href="/"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Home</a
                >
              </li>
              <li>
                <a class="nav_link" href="/contest"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path
                      d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
                    />
                    <path
                      d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
                    />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  Contest</a
                >
              </li>
              <li>
                <a class="nav_link" href="/leaderboard"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  Leaderboard</a
                >
              </li>
              <li>
                <a
                  class="nav_link"
                  href="/documentation/en/user_guide/data.html"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                  Data</a
                >
              </li>
              <li>
                <a class="nav_link" href="/documentation/en/"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <path
                      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  Docs</a
                >
              </li>
              <li>
                <a class="nav_link" href="/community"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Community</a
                >
              </li>
              <li>
                <a class="nav_link" href="/faq"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  FAQ</a
                >
              </li>
              <li>
                <a class="nav_link" href="/contacts"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="menu_item_icon"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        class="lang_wrapper"
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <a
          class="my_account_link"
          rel="noopener noreferrer"
          :style="{ display: signInDisplay }"
          :href="`${origin}/personalpage/login`"
          target="_self"
          >Sign up / Log in</a
        >
        <div
          class="username_link_wrapper"
          :style="{ display: usernameDisplay }"
        >
          <span class="username_link">{{ username }}</span>
          <span class="username_icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="user"
              class="svg-inline--fa fa-user fa-w-14 fa-fw fa-sm"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
              ></path>
            </svg>
          </span>
          <span class="chevron"></span>
          <ul>
            <li class="username_header">
              <span style="color: #d66d36">{{ username }}</span>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                :href="`${origin}/personalpage/homepage`"
                target="_self"
                >My account</a
              >
            </li>
            <li v-if="isAdmin">
              <a
                rel="noopener noreferrer"
                :href="`${origin}/controlpanel/#statistics`"
                target="_self"
                >Admin panel</a
              >
            </li>
            <li>
              <button type="button" class="logout_button" @click="logOut">
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

function getCookie(cname) {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function setCookie(cname, cvalue, exseconds) {
  const value = encodeURIComponent(cvalue);
  const d = new Date();
  d.setTime(d.getTime() + exseconds * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${value};${expires};path=/`;
}

const accessToken = ref(getCookie('access_token'));
const refreshToken = ref(getCookie('refresh_token'));
const username = ref(getCookie('username'));
const authorities = ref([]);
const signInDisplay = ref(getCookie('username') ? 'none' : 'block');
const usernameDisplay = ref(getCookie('username') ? 'flex' : 'none');
const intervalId = ref(null);
const isMobileOpen = ref(false);
const MAX_ATTEMPTS = 3;
const origin = typeof window !== 'undefined' ? window.location.origin : '';

const isAdmin = computed(
  () =>
    authorities.value.includes('ADMIN') || authorities.value.includes('MANAGER')
);

if (accessToken.value || refreshToken.value) {
  checkAccess();
}

onMounted(() => {
  intervalId.value = setInterval(checkAccess, 5 * 60 * 1000);
});

onBeforeUnmount(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'unset';
  }
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clearAuth() {
  setCookie('access_token', '', 0);
  setCookie('refresh_token', '', 0);
  setCookie('username', '', 0);
  setCookie('color', '', 0);
  setCookie('qn_uid', '', 0);
  accessToken.value = '';
  refreshToken.value = '';
  username.value = '';
  authorities.value = [];
  signInDisplay.value = 'block';
  usernameDisplay.value = 'none';
}

async function fetchAccountWithRetry(tokenData, rememberMe, attempt = 0) {
  if (!navigator.onLine) {
    await new Promise((resolve) => {
      window.addEventListener('online', resolve, { once: true });
    });
  }
  try {
    const response = await fetch('/auth/account/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    if (response.status === 401 || response.status === 403) {
      throw new Error('Auth error');
    }
    if (!response.ok) {
      throw new Error('Server error');
    }
    const accountData = await response.json();
    setCookie('access_token', tokenData.access_token, tokenData.expires_in);
    setCookie('username', accountData.username, tokenData.expires_in);
    const tenDays = 10 * 24 * 60 * 60;
    if (rememberMe) {
      setCookie('refresh_token', tokenData.refresh_token, tenDays);
    }
    username.value = accountData.username;
    authorities.value = accountData.authorities || [];
    signInDisplay.value = 'none';
    usernameDisplay.value = 'flex';
    return accountData;
  } catch (err) {
    if (err.name === 'AbortError') return null;
    if (err.message === 'Auth error') {
      clearAuth();
      return null;
    }
    if (attempt < MAX_ATTEMPTS) {
      await delay(2 ** attempt * 1000);
      return await fetchAccountWithRetry(tokenData, rememberMe, attempt + 1);
    }
  }
  return null;
}

async function exchangeTokenWithRetry(rToken, attempt = 0) {
  if (!navigator.onLine) {
    await new Promise((resolve) => {
      window.addEventListener('online', resolve, { once: true });
    });
  }
  try {
    const response = await fetch('/oauth/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(rToken)}&scope=read,write,trust`,
    });
    if (response.status === 401 || response.status === 403) {
      throw new Error('Auth error');
    }
    if (!response.ok) {
      throw new Error('Server error');
    }
    const data = await response.json();
    await fetchAccountWithRetry(data, true);
  } catch (err) {
    if (err.name === 'AbortError') return null;
    if (err.message === 'Auth error') {
      clearAuth();
      return null;
    }
    if (attempt < MAX_ATTEMPTS) {
      await delay(2 ** attempt * 1000);
      return await exchangeTokenWithRetry(rToken, attempt + 1);
    }
  }
  return null;
}

async function checkAccess() {
  const aToken = getCookie('access_token');
  const rToken = getCookie('refresh_token');
  if (!aToken && !rToken) {
    clearAuth();
    return;
  }
  if (!navigator.onLine) return;
  try {
    const response = await fetch('/auth/account/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${aToken}`,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    if (response.status === 401 || response.status === 403) {
      if (rToken) {
        await exchangeTokenWithRetry(rToken);
        return;
      }
      throw new Error('Auth error');
    }
    if (!response.ok) {
      throw new Error('Server error');
    }
    const data = await response.json();
    if (data && data.username) {
      setCookie('username', data.username);
      username.value = data.username;
      authorities.value = data.authorities || [];
      signInDisplay.value = 'none';
      usernameDisplay.value = 'flex';
    }
  } catch (err) {
    if (err.name === 'AbortError') return;
    if (err.message === 'Auth error') {
      clearAuth();
    }
  }
}

function logOut() {
  clearAuth();
}

function toggleMobileMenu() {
  isMobileOpen.value = !isMobileOpen.value;
}

function closeMobileMenu() {
  isMobileOpen.value = false;
}

watch(isMobileOpen, (val) => {
  if (typeof document !== 'undefined') {
    if (val) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }
});
</script>

<style lang="stylus">
@require './vuepress/styles/config';
@import './vuepress/styles/imgGeneral.styl'

$light_main_color = #ffffff
$dark_main_color = #020202
$middle_main_color = #f0f5f7
$light_border = #cccccc
$contrast_color = #d66d36
$additional_color = #1395ba
$light_font_color = #999999
$global_p_color = rgb(210, 218, 230)
$transition_fast = 150ms ease
$transition_slow = 400ms ease
$radius_sm = 6px
$radius_md = 10px
$shadow_lg = 0 8px 30px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.15)

header
  display block
  width 100%
  position fixed
  top 0
  background-color #0b192b
  backdrop-filter blur(16px)
  -webkit-backdrop-filter blur(16px)
  z-index 10
  box-shadow 0 4px 30px rgba(0, 0, 0, 0.2)
  border-bottom 1px solid rgba(255, 255, 255, 0.08)

@media (max-width: 900px)
  header
    background-color rgba(8, 17, 28, 0.95)
    border-bottom 1px solid rgba(255, 255, 255, 0.1)

.top_header
  padding 10px 0
  line-height 30px
  display flex
  justify-content space-between
  align-items center
  max-width 1180px
  margin 0 auto
  box-sizing border-box

  .logo_wrapper
    padding-left 5px
    width 25%

    .logo
      color $light_main_color
      display inline-block
      font-size 2em
      text-align left
      position relative
      background-size contain
      width 149px
      overflow hidden
      text-indent -9999px

  .dropdownmenu
    width 55%
    display flex
    vertical-align middle
    justify-content space-between

    ul, li
      margin 0
      padding 0

    ul
      list-style none
      width 100%
      display flex
      justify-content space-around

    li
      float left
      position relative
      width auto

    a
      background inherit
      color #ffffffd9
      display block
      font-family $header_font, $header_font_fallback
      font-size 14px
      font-weight $header_font_weight
      padding 6px 12px
      text-align center
      text-decoration none
      border-radius 8px
      transition all .15s ease
      white-space nowrap

    .quantiacs_community_link
      color #7fd3ff

    li:hover
      .nav_link
        color #ffffff
        background rgba(255, 255, 255, 0.05)
        text-shadow 0 0 12px rgba(59, 130, 246, 0.5)

      .quantiacs_community_link
        color #ffffff
        background rgba(127, 211, 255, 0.1)
        text-shadow 0 0 12px rgba(127, 211, 255, 0.5)

  .header_wrapper
    text-align right
    display block
    position absolute
    left 40px
    padding 0

    #toggle
      display none

      &:not(:checked) + .mobile_overlay + nav
        width 0
        overflow hidden

      &:checked + .mobile_overlay + nav
        width 300px
        overflow visible

        @media (max-width: 400px)
          width 100%

      &:checked + .mobile_overlay + nav li
        opacity 1

      &:checked + .mobile_overlay
        display block

    .mobile_overlay
      position fixed
      top 0
      left 0
      width 100vw
      height 100vh
      background rgba(0, 0, 0, 0.5)
      z-index 9
      display none

    nav
      position fixed
      top 50px
      background rgba(8, 17, 28, 0.95)
      backdrop-filter blur(16px)
      -webkit-backdrop-filter blur(16px)
      left 0
      z-index 10
      transition width $transition_slow
      height calc(100vh - 50px)
      width 300px
      border-right 1px solid rgba(255, 255, 255, 0.08)

      @media (max-width: 400px)
        width 100%
        border-right none

      ul
        padding 0

      li
        opacity 0
        transition opacity 0.4s ease
        list-style-type none

      .nav_link
        background inherit
        color $global_p_color
        display flex
        align-items center
        gap 12px
        font-family $header_font, $header_font_fallback
        font-weight $header_font_weight
        text-align left
        text-transform uppercase
        text-decoration none
        font-size 15px
        transition all .15s ease
        height 50px
        line-height 50px
        border-bottom 1px solid rgba(255, 255, 255, 0.06)
        padding 0 25px 2px 30px

        &:hover
          color #ffffff
          background rgba(59, 130, 246, 0.1)
          text-shadow 0 0 8px rgba(59, 130, 246, 0.4)

      .quantiacs_community_link
        color #1bbafb

    .menu_icon
      cursor pointer
      float right
      padding 0
      user-select none
      background transparent
      border 0

    #nav_icon3
      width 30px
      height 20px
      margin-top 5px
      position relative
      transform rotate(0deg)
      transition 0.5s ease-in-out
      cursor pointer

    #nav_icon3 span
      display block
      position absolute
      height 2px
      width 100%
      background $global_p_color
      border-radius 9px
      opacity 1
      left 0
      transition 0.25s ease-in-out

    #nav_icon3 span:nth-child(1)
      top 0px

    #nav_icon3:hover
      span
        background $light_main_color

    #nav_icon3 span:nth-child(2),
    #nav_icon3 span:nth-child(3)
      top 9px

    #nav_icon3 span:nth-child(4)
      top 18px

    #nav_icon3.open span:nth-child(1)
      top 9px
      width 0%
      left 50%

    #nav_icon3.open span:nth-child(2)
      transform rotate(45deg)

    #nav_icon3.open span:nth-child(3)
      transform rotate(-45deg)

    #nav_icon3.open span:nth-child(4)
      top 9px
      width 0%
      left 50%

  .lang_wrapper
    max-width 150px
    display flex
    justify-content space-between
    align-items center

    .my_account_link
      color #cfe6ff
      cursor pointer
      text-decoration none
      font-family $header_font, $header_font_fallback
      font-size 14px
      font-weight $header_font_weight
      transition all .15s ease
      margin-left 20px
      white-space nowrap
      padding 8px 16px
      border-radius 8px
      background rgba(59, 130, 246, 0.1)
      border 1px solid rgba(59, 130, 246, 0.3)

      &:hover
        color #ffffff
        background rgba(59, 130, 246, 0.2)
        border-color rgba(59, 130, 246, 0.6)
        box-shadow 0 4px 12px rgba(59, 130, 246, 0.2)

    .username_link_wrapper
      align-items center
      justify-content flex-end
      position relative
      transition all $transition_fast
      padding 8px 16px 8px 0
      margin -8px -16px -8px 0

      &::after
        content ''
        position absolute
        top 100%
        right 0
        width 100%
        height 12px

      .username_header
        display none

      &:hover
        .chevron
          color $light_main_color
          cursor pointer
          width 20px

          &::after
            position absolute
            right 0
            top 30%
            content ''
            width 0
            height 0
            border-left 4px solid transparent
            border-right 4px solid transparent
            border-bottom 4px solid $light_main_color
            border-top 4px solid transparent
            display inline-block
            vertical-align middle
            margin-right 5px
            pointer-events none

        ul
          z-index 1000
          opacity 1
          visibility visible
          pointer-events auto
          transform translateY(0)

          li
            list-style-type none
            margin 2px 0
            cursor pointer
            font-family $header_font, $header_font_fallback
            font-weight $header_font_weight
            text-align center
            border-radius 8px
            transition background .15s ease, color .15s ease

            a,
            span,
            .logout_button
              color #cfe6ff
              font-family $header_font, $header_font_fallback
              font-weight $header_font_weight
              text-decoration none
              font-size 14px
              background transparent
              border 0
              padding 8px 12px
              display block
              width 100%
              box-sizing border-box
              text-align center

            &:hover
              background rgba(59, 130, 246, 0.1)

              a,
              span,
              .logout_button
                color #ffffff

      .username_link
        color $light_main_color
        cursor pointer
        width fit-content
        max-width 150px
        text-decoration none
        margin-left 10px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        padding 0 0 0 10px

      .username_icon
        display none

      .chevron
        color $light_main_color
        cursor pointer
        width 20px

        &::after
          position absolute
          right 0
          top 50%
          content ''
          width 0
          height 0
          border-left 4px solid transparent
          border-right 4px solid transparent
          border-top 4px solid $light_main_color
          display inline-block
          vertical-align middle
          margin-right 5px

      ul
        position absolute
        top calc(100% + 8px)
        right 0
        width 180px
        padding 8px
        margin 0
        background rgba(8, 17, 28, 0.95)
        backdrop-filter blur(16px)
        -webkit-backdrop-filter blur(16px)
        border 1px solid rgba(255, 255, 255, 0.08)
        border-radius 12px
        color $light_main_color
        box-shadow 0 10px 30px rgba(0, 0, 0, 0.3)
        opacity 0
        visibility hidden
        pointer-events none
        transform translateY(6px)
        transition opacity $transition_fast, transform $transition_fast, visibility $transition_fast

      .logout_button
        cursor pointer

@media (max-width: 650px)
  .top_header
    padding 10px 0px
    width 90%

  .username_link
    display none

  .username_header
    display block !important

    span
      color $contrast_color
      word-break break-word

  .username_icon
    display block !important
    padding-bottom 3px

    path
      fill $light_main_color !important

@media only screen and (min-width: 768px)
  .top_header
    .header_wrapper
      display none

    .lang_wrapper
      width 20%

    .dropdownmenu,
    .my_account_link
      display block
      max-width 100%

@media only screen and (max-width: 900px)
  .dropdownmenu
    display none !important

  .header_wrapper
    display block !important

  .top_header
    padding 10px 30px
    width 100%

    .logo_wrapper
      width 80%
      text-align center
      padding-left 20%

    .my_account_link
      margin-left 0 !important

@media only screen and (max-width: 450px)
  .top_header
    position relative
    padding 10px !important
    width 100% !important

    .logo_wrapper
      position absolute
      left 50%
      transform translateX(-50%)
      width auto !important
      padding-left 0 !important
      text-align center

      .logo
        min-width 30px !important
        max-width 30px !important
        background-size cover !important

    .header_wrapper
      left 10px !important

    .lang_wrapper
      width auto !important
      margin-left auto !important

      .my_account_link
        padding 6px 8px !important
        font-size 12px !important
        margin-left 5px !important
</style>
