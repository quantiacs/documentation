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
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleSidebar() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="stylus">
@import './vuepress/styles/config.styl'
@import './vuepress/styles/imgMenu.styl'
$mobileSidebarWidth = $sidebarWidth * 0.82

.sidebar
  padding-left 25px
  padding-top 15px

  .caption-text
    font-size 1.1em
    color #1F1F1F
    font-weight bold

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

  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0

    a
      font-weight 600

    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem

  .searchbox
    font-weight 600
    font-size 1.1em
    line-height 1.5rem
    padding 1rem 0 1.5rem 1.5rem
    border-bottom 1px solid $borderColor

  .sidebar_menu_button
    width 20px
    height 20px
    float right
    border solid 1px #cbd2da
    border-radius 3px

.sidebar-group
  margin-top 1em
  margin-bottom 1em

  &:not(.first)
    margin-top 1em

  .sidebar-group
    padding-left 0.5em

.sidebar-group .caption
  color #999
  transition color .15s ease
  cursor pointer
  font-size 1.1em
  font-weight bold
  padding 0 1.1rem
  padding-top 5px
  padding-bottom 5px
  margin-top 0
  margin-bottom 0.5rem

  &.open, &:hover
    color inherit
    background #cec7c7

  .arrow
    position relative
    top -0.12em
    left 0.5em

.sidebar-group-items
  transition height .1s ease-out
  overflow hidden

.sidebar .toctree-l1 ul
  font-size 0.95em

.sidebar
  .toctree-l1 a, .toctree-l2 a
    font-weight 400
    display inline-block
    color $textColor
    line-height 1.4
    width 100%
    box-sizing border-box
    border-left 0.5rem solid transparent

    &.current
      color $accentColor
      font-weight 600

    &:hover
      color $accentColor

  .toctree-l1.current a
    border-left 0.5rem solid lighten($accentColor, 40%)

  .toctree-l1 a
    padding 0.35rem 1rem 0.35rem 1.25rem

    &.current
      border-left-color $accentColor

  .toctree-l2 a
    padding 0.25rem 1rem 0.25rem 1.75rem

@media (max-width: $MQNarrow)
  .sidebar
    font-size 15px
    width $mobileSidebarWidth


@media (max-width: $MQMobile)
  .sidebar
    position fixed
    top $navbarHeight
    left 0
    width $mobileSidebarWidth
    height 100%
    transform translateX(-100%)
    transition transform .2s ease

  .sidebar.mobile-sidebar-open
    transform translateX(0)


  .mobile-menu-button-open
    display block
    position absolute
    top 56px
    left 0
    width 100%
    z-index 5

@media (max-width: $MQMobileNarrow)
  h1
    font-size 1.9rem

  .content
    div[class*="language-"]
      margin 0.85rem -1.5rem
      border-radius 0

.mobile-menu-button-open
  background-color $accentColor
  border none
  color white
  padding 0.75rem 1.5rem
  font-size 0.9em
  border-radius 5px
  box-shadow 0 2px 4px rgba(0, 0, 0, 0.1)
  cursor pointer
  transition background-color 0.3s ease, transform 0.3s ease
  position absolute

.mobile-menu-button-open:hover
  background-color lighten($accentColor, 10%)
  transform scale(1.05)

.mobile-close-button
  background-color $accentColor
  border none
  color white
  padding 0.75rem 1.5rem
  font-size 0.9em
  border-radius 5px
  box-shadow 0 2px 4px rgba(0, 0, 0, 0.1)
  cursor pointer
  transition background-color 0.3s ease, transform 0.3s ease
  width 90%
  margin 1rem auto 0 auto

.mobile-close-button:hover
  background-color lighten($accentColor, 10%)
  transform scale(1.05)

.fade-enter-active, .fade-leave-active
  transition opacity 0.3s ease

.fade-enter, .fade-leave-to
  opacity 0
</style>
