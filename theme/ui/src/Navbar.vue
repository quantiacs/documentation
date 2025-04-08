<template>
  <header>
    <div class="top_header">
      <div class="logoWrapper">
        <a class="logo quantiacs-logo" href="/">Home</a>
      </div>
      <nav class="dropdownmenu">
        <ul>
          <li><a class="nav-link" target="_self" href="/contest">About</a></li>
          <li><a class="nav-link" target="_self" href="/documentation/en/">Documentation</a></li>
          <li><a class="nav-link" rel="noopener noreferrer" href="/contacts" target="_self">Contact</a></li>
          <li><a class="nav-link" target="_self" href="/faq">FAQ</a></li>
          <li><a class="nav-link" target="_self" href="/leaderboard">Systems</a></li>
          <li><a class="nav-link quantiacs_community_link" target="_self" href="/community">Community</a></li>
          <li><a class="nav-link" href="https://legacy.quantiacs.com/Systems.aspx" target="_blank">Q1-Q14 Contests</a>
          </li>
        </ul>
      </nav>
      <div class="headerWrapper">
        <div id="wrapper">
          <label id="nav-icon3" class="menu-icon" for="toggle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="toggle"/>
          <nav>
            <ul>
              <li><a class="nav-link" href="/" target="_self">Home</a></li>
              <li><a class="nav-link" href="/contest" target="_self">About</a></li>
              <li><a class="nav-link" href="/documentation/en/" target="_self">Documentation</a></li>
              <li><a class="nav-link" rel="noopener noreferrer" href="/contacts" target="_self">Contact</a></li>
              <li><a class="nav-link" href="/faq" target="_self">FAQ</a></li>
              <li><a class="nav-link" target="_self" href="/leaderboard">Systems</a></li>
              <li><a class="nav-link quantiacs_community_link" target="_self" href="/community">Community</a></li>
              <li><a class="nav-link" href="https://legacy.quantiacs.com/Systems.aspx" target="_blank">Q1-Q14
                Contests</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="langWrapper">
        <div v-if="isAuthorizedUser" class="usernameLinkWrapper">
          <a rel="noopener noreferrer" href="/personalpage/homepage" target="_self" class="usernameLink">{{
              username
            }}</a>
          <span class="usernameIcon">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user"
                 class="svg-inline--fa fa-user fa-w-14 fa-fw fa-sm" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
              <path fill="currentColor"
                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
            </svg>
          </span>
          <span class="chevron"></span>
          <ul>
            <li class="usernameHeader">
              <a rel="noopener noreferrer" href="/personalpage/homepage" target="_self">{{ username }}</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/personalpage/homepage" target="_self">My account</a>
            </li>
            <li><span @click="logOut">Log out</span></li>
          </ul>
        </div>
        <div v-else>
          <a class="myAccountLink" rel="noopener noreferrer" href="/personalpage/login" target="_self">Sign up / Log
            in</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref, computed, onMounted, onBeforeUnmount} from 'vue'

function getCookie(cname) {
  const name = cname + "="
  const decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

function setCookie(cname, cvalue, exseconds) {
  const value = encodeURIComponent(cvalue)
  const d = new Date()
  d.setTime(d.getTime() + exseconds * 1000)
  const expires = `expires=${d.toUTCString()}`
  document.cookie = `${cname}=${value};${expires};path=/`
}

const accessToken = ref(getCookie("access_token"))
const refreshToken = ref(getCookie("refresh_token"))
const username = ref(getCookie("username"))
const authorities = ref([])
const signInDisplay = ref(getCookie("username") ? "none" : "block")
const usernameDisplay = ref(getCookie("username") ? "flex" : "none")
const intervalId = ref(null)
const MAX_ATTEMPTS = 3

const isAuthorizedUser = computed(() => accessToken.value && username.value)

if (accessToken.value || refreshToken.value) {
  checkAccess()
}

onMounted(() => {
  intervalId.value = setInterval(checkAccess, 5 * 60 * 1000)
})

onBeforeUnmount(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
})

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function clearAuth() {
  setCookie("access_token", "", 0)
  setCookie("refresh_token", "", 0)
  setCookie("username", "", 0)
  accessToken.value = ""
  refreshToken.value = ""
  username.value = ""
  authorities.value = []
  signInDisplay.value = "block"
  usernameDisplay.value = "none"
}

async function fetchAccountWithRetry(tokenData, rememberMe, attempt = 0) {
  if (!navigator.onLine) {
    await new Promise((resolve) => {
      window.addEventListener("online", resolve, {once: true})
    })
  }
  try {
    const response = await fetch("/auth/account/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
    if (response.status === 401 || response.status === 403) {
      throw new Error("Auth error")
    }
    if (!response.ok) {
      throw new Error("Server error")
    }
    const accountData = await response.json()
    setCookie("access_token", tokenData.access_token, tokenData.expires_in)
    setCookie("username", accountData.username, tokenData.expires_in)
    const tenDays = 10 * 24 * 60 * 60
    if (rememberMe && tokenData.refresh_token) {
      setCookie("refresh_token", tokenData.refresh_token, tenDays)
    }
    username.value = accountData.username
    authorities.value = accountData.authorities || []
    signInDisplay.value = "none"
    usernameDisplay.value = "flex"
    return accountData
  } catch (err) {
    if (err.name === "AbortError") return null
    if (err.message === "Auth error") {
      clearAuth()
      return null
    }
    if (attempt < MAX_ATTEMPTS) {
      await delay(2 ** attempt * 1000)
      return await fetchAccountWithRetry(tokenData, rememberMe, attempt + 1)
    }
  }
  return null
}

async function exchangeTokenWithRetry(rToken, attempt = 0) {
  if (!navigator.onLine) {
    await new Promise((resolve) => {
      window.addEventListener("online", resolve, {once: true})
    })
  }
  try {
    const response = await fetch("/oauth/token", {
      method: "POST",
      headers: {
        Authorization: "Basic Y2xpZW50OnNlY3JldA==",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(rToken)}&scope=read,write,trust`
    })
    if (response.status === 401 || response.status === 403) {
      throw new Error("Auth error")
    }
    if (!response.ok) {
      throw new Error("Server error")
    }
    const data = await response.json()
    await fetchAccountWithRetry(data, true)
  } catch (err) {
    if (err.name === "AbortError") return null
    if (err.message === "Auth error") {
      clearAuth()
      return null
    }
    if (attempt < MAX_ATTEMPTS) {
      await delay(2 ** attempt * 1000)
      return await exchangeTokenWithRetry(rToken, attempt + 1)
    }
  }
  return null
}

async function checkAccess() {
  const aToken = getCookie("access_token")
  const rToken = getCookie("refresh_token")
  if (!aToken && !rToken) {
    clearAuth()
    return
  }
  if (!navigator.onLine) return
  try {
    const response = await fetch("/auth/account/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${aToken}`,
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
    if (response.status === 401 || response.status === 403) {
      if (rToken) {
        await exchangeTokenWithRetry(rToken)
        return
      }
      throw new Error("Auth error")
    }
    if (!response.ok) {
      throw new Error("Server error")
    }
    const data = await response.json()
    if (data && data.username) {
      setCookie("username", data.username)
      username.value = data.username
      authorities.value = data.authorities || []
      signInDisplay.value = "none"
      usernameDisplay.value = "flex"
    }
  } catch (err) {
    if (err.name === "AbortError") return
    if (err.message === "Auth error") {
      clearAuth()
    }
  }
}

function logOut() {
  clearAuth()
}
</script>

<style lang="stylus">
@require './vuepress/styles/config';

$light_main_color = #ffffff;
$dark_main_color = #020202;
$middle_main_color = #f0f5f7;
$light_border = #cccccc;
$contrast_color = #d66d36;
$additional_color = #1395ba;
$light_font_color = #999999;

header
  width 100%
  position fixed
  top 0
  background-color $dark_main_color
  z-index 10

.top_header
  padding 10px 0
  line-height 30px
  display flex
  justify-content space-between
  align-items flex-start
  background-color $dark_main_color
  max-width 1180px
  margin 0 auto

  .logoWrapper
    width 25%

    .logo
      color $light_main_color
      display inline-block
      font-size 2em
      text-align left
      position relative
      background-size contain
      width 149px
      text-indent -9999px
      top 2px

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
    color $light_main_color
    display block
    font-family $header_font
    padding 0 2.5px
    text-align center
    text-decoration none
    font-size 14px
    transition all 0.25s ease
    white-space nowrap

  .quantiacs_community_link
    color #1bbafb

  li:hover
    .nav-link
      color $light_font_color

.headerWrapper
  text-align right
  display block
  position absolute
  left 40px
  padding 0

  #toggle
    display none

    &:not(:checked) + nav
      width 0
      overflow hidden

    &:checked + nav
      width 300px
      overflow visible

    &:checked + nav li
      opacity 1

  nav
    position fixed
    top 50px
    background $dark_main_color
    left 0
    z-index 10
    transition 0.5s
    height calc(100vh - 50px)
    width 300px

    ul
      padding 0

    li
      opacity 0
      transition opacity 0.4s ease
      list-style-type none

    .nav-link
      background inherit
      color #ffffff
      display block
      font-family $header_font
      padding 10px 25px
      text-align left
      text-transform uppercase
      text-decoration none
      font-size 14px
      transition all 0.25s ease
      height 50px
      line-height 50px
      padding-left 50px
      border-bottom 1px solid #383838
      padding-bottom 20px
      padding-top 0

    .quantiacs_community_link
      color #1bbafb

  .menu-icon
    cursor pointer
    float right
    padding 0
    user-select none

  #nav-icon3
    width 30px
    height 20px
    margin-top 5px
    position relative
    transform rotate(0deg)
    transition 0.5s ease-in-out
    cursor pointer

  #nav-icon3 span
    display block
    position absolute
    height 3px
    width 100%
    background $light_main_color
    border-radius 9px
    opacity 1
    left 0
    transform rotate(0deg)
    transition 0.25s ease-in-out

  #nav-icon3 span:nth-child(1)
    top 0px

  #nav-icon3:hover span
    background $light_font_color

  #nav-icon3 span:nth-child(2), #nav-icon3 span:nth-child(3)
    top 9px

  #nav-icon3 span:nth-child(4)
    top 18px

  #nav-icon3.open span:nth-child(1)
    top 9px
    width 0%
    left 50%

  #nav-icon3.open span:nth-child(2)
    transform rotate(45deg)

  #nav-icon3.open span:nth-child(3)
    transform rotate(-45deg)

  #nav-icon3.open span:nth-child(4)
    top 9px
    width 0%
    left 50%

.langWrapper
  max-width 150px

  .usernameHeader
    display none

  .myAccountLink
    color $light_main_color
    cursor pointer
    text-decoration none
    font-family $header_font
    font-size 14px
    transition all 300ms ease-in
    margin-left 20px
    white-space nowrap
    display block

  .usernameLinkWrapper
    position relative
    display flex
    align-items center
    background $dark_main_color
    transition all 300ms ease-in

    ul
      display none
      position absolute
      right -20px
      top 30px
      width 150px
      z-index 1000

    &:hover ul,
    ul:hover
      background-color: #000
      color: #fff
      display block
      margin 0
      padding 10px 5px 10px 10px

    .usernameLink
      color $light_main_color
      cursor pointer
      padding 0 0 0 10px
      max-width 150px
      text-decoration none
      font-family $average_font
      margin-left 10px
      text-overflow ellipsis
      white-space nowrap
      overflow hidden

    .usernameIcon
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
        pointer-events none

    ul li
      cursor pointer
      font-family "Gotham Pro Medium", sans-serif
      list-style-type none
      margin 5px
      text-align center

@media (max-width: 1200px)
  .top_header
    padding 10px 0px
    width 90%

  .usernameLink
    display none

  .usernameHeader
    display block !important

    span
      color $contrast_color
      word-break break-word

  .usernameIcon
    display block !important
    padding-bottom 3px

    path
      color $light_main_color !important

@media only screen and (min-width: 768px)
  .top_header
    .headerWrapper
      display none

    .dropdownmenu,
    .myAccountLink
      display block
      max-width 100%

@media only screen and (max-width: 768px)
  .dropdownmenu
    display none !important

  .headerWrapper
    display block !important

  .top_header
    padding 10px 30px

    .logoWrapper
      width 80%
      text-align center
      padding-left 20%

    .myAccountLink
      margin-left 0 !important

@media only screen and (max-width: 400px)
  .logoWrapper
    width 60% !important
    text-align center
    padding-left calc(50% - 30px) !important

    .logo
      min-width 30px !important
      max-width 30px !important
      background-size cover !important
</style>
