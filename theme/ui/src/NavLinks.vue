<template>
  <nav class="nav-links">
    <slot></slot>
  </nav>
</template>

<script setup>
</script>

<style lang="stylus">
@import './vuepress/styles/config.styl'

.nav-links
  display inline-block

  a
    line-height 1.4rem
    color inherit

    &:hover, &.router-link-active
      color $accentColor

  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem

  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $textColor

  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>
