<template>
  <div>
    <transition name="fade">
      <button
        v-if="!isOpen"
        @click="toggleSidebar"
        class="mobile-menu-button-open"
      >
        Open Menu
      </button>
    </transition>
    <div class="sidebar" :class="{ 'mobile-sidebar-open': isOpen }">
      <transition name="fade">
        <button
          v-if="isOpen"
          @click="toggleSidebar"
          class="mobile-close-button"
        >
          Close Menu
        </button>
      </transition>
      <div class="sidebar-content">
        <slot></slot>
      </div>
      <div class="sidebar-theme">
        <button
          type="button"
          class="theme-toggle"
          role="switch"
          :aria-checked="isDarkTheme"
          :aria-label="
            isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'
          "
          @click="toggleTheme"
        >
          <span class="theme-toggle__copy">
            <span class="theme-toggle__eyebrow">Appearance</span>
            <span class="theme-toggle__value">
              {{ isDarkTheme ? 'Dark theme' : 'Light theme' }}
            </span>
          </span>
          <span
            class="theme-toggle__track"
            :class="{ 'theme-toggle__track--active': isDarkTheme }"
          >
            <span class="theme-toggle__thumb">
              <svg
                v-if="!isDarkTheme"
                class="theme-toggle__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F59E0B"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <svg
                v-else
                class="theme-toggle__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B82F6"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { initTheme, isDarkTheme, toggleTheme } from './theme';

const isOpen = ref(false);

initTheme();

function toggleSidebar() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="stylus">
@import './vuepress/styles/config.styl'
@import './vuepress/styles/imgMenu.styl'
$mobileSidebarWidth = $sidebarWidth * 0.82

.sidebar
  position fixed
  top ($navbarHeight + 10px)
  left 0
  bottom 0
  display flex
  flex-direction column
  width $sidebarWidth
  z-index 10
  box-sizing border-box
  padding-left 25px
  padding-top 15px
  overflow hidden
  font-family $average_font, $average_font_fallback
  font-weight $average_font_weight

  .caption-text
    font-family $header_font, $header_font_fallback
    font-size 1.1em
    color var(--theme-sidebar-heading)
    font-weight $header_font_weight

    &:hover
      cursor pointer

  ul
    padding 0
    margin 0
    list-style-type none

  .ul_hide
    display none

  a
    display inline-block
    font-size 1.1em
    font-family inherit

  .nav-links
    display none
    border-bottom 1px solid var(--theme-border)
    padding 0.5rem 0 0.75rem 0

    a
      font-family $header_font, $header_font_fallback
      font-weight $header_font_weight

    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem

  .searchbox
    font-family $header_font, $header_font_fallback
    font-weight $header_font_weight
    font-size 1.05em
    line-height 1.5rem
    padding 1.25rem 1.25rem 1.5rem 1.25rem
    border-bottom 1px solid var(--theme-border)

    input[type='text']
      width 100%
      box-sizing border-box
      padding 0.65rem 1rem
      border 1px solid var(--theme-border)
      border-radius 10px
      background-color var(--theme-surface)
      color var(--theme-text)
      transition all 0.2s cubic-bezier(0.4, 0, 0.2, 1)

      &::placeholder
        color var(--theme-text-soft)
        transition color 0.2s ease

      &:hover
        border-color rgba(148, 163, 184, 0.5)

      &:focus
        outline none
        border-color var(--theme-accent)
        box-shadow 0 0 0 3px rgba(59, 130, 246, 0.15)
        &::placeholder
          color transparent

    input[type='submit']
      margin-top 0.8rem
      padding 0.55rem 0.9rem
      border none
      border-radius 8px
      background-color var(--theme-accent)
      color #ffffff
      font-weight 500
      cursor pointer
      transition transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease, background-color 0.2s ease

      &:hover
        transform translateY(-1px)
        background-color lighten(#3B82F6, 10%)
        box-shadow 0 4px 12px rgba(37, 99, 235, 0.25)

      &:active
        transform translateY(0)
        box-shadow none

  .sidebar_menu_button
    width 20px
    height 20px
    float right
    border solid 1px var(--theme-border)
    border-radius 3px

.sidebar-content
  flex 1
  min-height 0
  overflow-y auto
  padding-right 1rem

.sidebar-theme
  padding 1rem 1rem 1rem 0
  margin-top auto
  border-top 1px solid var(--theme-border)
  background-color var(--theme-sidebar-footer-bg)

.theme-toggle
  width 100%
  display flex
  align-items center
  justify-content space-between
  gap 0.75rem
  padding 0.9rem 1rem
  border 1px solid var(--theme-border)
  border-radius 14px
  background-color var(--theme-surface)
  color var(--theme-text)
  cursor pointer
  transition border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease

  &:hover
    transform translateY(-1px)
    border-color rgba(37, 99, 235, 0.45)

.theme-toggle__copy
  display flex
  flex-direction column
  align-items flex-start
  text-align left

.theme-toggle__eyebrow
  font-size 0.8rem
  color var(--theme-text-soft)

.theme-toggle__value
  font-family $header_font, $header_font_fallback
  font-weight $header_font_weight
  font-size 0.98rem

.theme-toggle__track
  position relative
  flex-shrink 0
  width 3.5rem
  height 2rem
  border-radius 999px
  background-color rgba(148, 163, 184, 0.35)
  transition background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)

  &.theme-toggle__track--active
    background-color rgba(37, 99, 235, 0.4)

.theme-toggle__thumb
  position absolute
  top 0.2rem
  left 0.2rem
  width 1.6rem
  height 1.6rem
  border-radius 50%
  background-color #ffffff
  box-shadow 0 2px 10px rgba(15, 23, 42, 0.18)
  transition transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease
  display flex
  align-items center
  justify-content center

.theme-toggle__track--active .theme-toggle__thumb
  transform translateX(1.5rem)
  background-color #dbeafe

.theme-toggle__icon
  animation fade-in 0.3s ease-out

.sidebar-group
  margin-top 1em
  margin-bottom 1em

  &:not(.first)
    margin-top 1em

  .sidebar-group
    padding-left 0.5em

.sidebar-group .caption
  color var(--theme-sidebar-caption)
  transition color .2s ease
  cursor pointer
  font-family $header_font, $header_font_fallback
  font-size 0.75rem
  font-weight 700
  text-transform uppercase
  letter-spacing 0.05em
  padding 0.75rem 1.25rem 0.5rem 1.25rem
  margin-top 0.5rem
  margin-bottom 0.25rem

  &.open, &:hover
    color var(--theme-text)
    background transparent

  .arrow
    position relative
    top -0.12em
    left 0.5em

.sidebar-group-items
  transition height .2s ease-out
  overflow hidden

.sidebar .toctree-l1 ul
  font-size 0.95em

.sidebar
  .toctree-l1 a, .toctree-l2 a
    font-family $average_font, $average_font_fallback
    font-weight 500
    display inline-block
    color var(--theme-text-soft)
    line-height 1.4
    width 100%
    box-sizing border-box
    border-left 0.25rem solid transparent
    border-radius 6px
    margin-bottom 2px
    transition all 0.2s cubic-bezier(0.4, 0, 0.2, 1)

    &.current
      color var(--theme-accent)
      font-weight 600
      background-color var(--theme-sidebar-current-bg)

    &:hover
      color var(--theme-accent)
      background-color var(--theme-sidebar-hover-bg)

  .toctree-l1.current a
    border-left 0.25rem solid lighten($accentColor, 40%)

  .toctree-l1 a
    padding 0.4rem 1rem 0.4rem 1.1rem

    &.current
      border-left-color $accentColor

  .toctree-l2 a
    padding 0.3rem 1rem 0.3rem 1.75rem

@media (max-width: $MQNarrow)
  .sidebar
    font-size 15px
    width $mobileSidebarWidth


.mobile-menu-button-open
  display none
  background-color $accentColor
  border none
  color white
  font-family $header_font, $header_font_fallback
  font-weight $header_font_weight
  padding 0.6rem 1.25rem
  font-size 0.85em
  border-radius 10px
  box-shadow 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
  cursor pointer
  transition all 0.25s cubic-bezier(0.4, 0, 0.2, 1)

.mobile-menu-button-open:hover
  background-color lighten($accentColor, 10%)
  transform translateY(-1px)
  box-shadow 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)

.mobile-menu-button-open:active
  transform scale(0.97)

.mobile-close-button
  display none
  background-color $accentColor
  border none
  color white
  font-family $header_font, $header_font_fallback
  font-weight $header_font_weight
  padding 0.6rem 1.25rem
  font-size 0.85em
  border-radius 10px
  box-shadow 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
  cursor pointer
  transition all 0.25s cubic-bezier(0.4, 0, 0.2, 1)
  width 90%
  margin 1rem auto 0 auto

.mobile-close-button:hover
  background-color lighten($accentColor, 10%)
  transform translateY(-1px)
  box-shadow 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)

.mobile-close-button:active
  transform scale(0.97)

@media (max-width: $MQMobile)
  .sidebar
    position fixed
    top 65px
    left 0
    width $mobileSidebarWidth
    height 'calc(100% - %s)' % ($navbarHeight + 0.5rem)
    transform translateX(-100%)
    transition transform .2s ease
    background-color var(--theme-sidebar-panel-bg)
    box-shadow 2px 0 8px rgba(0, 0, 0, 0.1)
    z-index 21

  .sidebar.mobile-sidebar-open
    transform translateX(0)

  .mobile-menu-button-open
    display block
    position fixed
    top $navbarHeight
    left 1rem
    width auto
    z-index 15

  .mobile-close-button
    display block

@media (max-width: $MQMobileNarrow)
  h1
    font-size 1.9rem

  .content
    div[class*="language-"]
      margin 0.85rem -1.5rem
      border-radius 0

.fade-enter-active, .fade-leave-active
  transition opacity 0.3s ease

.fade-enter, .fade-leave-to
  opacity 0
</style>
