<template>
  <div class="page">
    <slot/>
    <slot name="bottom"/>
  </div>
</template>

<script setup>
</script>

<style lang="stylus">
@import './vuepress/styles/config.styl'
@require './vuepress/styles/wrapper.styl'

.page
  padding-bottom 0px
  padding-top 65px

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto

  .edit-link
    display inline-block

    a
      color lighten($textColor, 25%)
      margin-right 0.25rem

  .last-updated
    float right
    font-size 0.9em

    .prefix
      font-weight 500
      color lighten($textColor, 25%)

    .time
      font-weight 400
      color #aaa

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem

  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto

  .next
    float right

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem

    .last-updated
      font-size .8em
      float none
      text-align left

$mobileSidebarWidth = $sidebarWidth * 0.82

@media (max-width: $MQNarrow)
  .page
    padding-left $mobileSidebarWidth

@media (max-width: $MQMobile)
  .page
    padding-left 0
    padding-top 95px
</style>
