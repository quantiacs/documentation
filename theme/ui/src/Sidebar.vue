<template>
  <div class="sidebar">
    <slot></slot>
    <!-- <slot name="top"/> -->
    <!-- <ul class="sidebar-links" v-if="items.length"> -->
    <!--   <li v-for="(item, i) in items" :key="i"> -->
    <!--     <SidebarGroup -->
    <!--       v-if="item.type === 'group'" -->
    <!--       :item="item" -->
    <!--       :first="i === 0" -->
    <!--       :open="i === openGroupIndex" -->
    <!--       :collapsable="item.collapsable" -->
    <!--       @toggle="toggleGroup(i)" -->
    <!--     /> -->
    <!--     <SidebarLink v-else :item="item"/> -->
    <!--   </li> -->
    <!-- </ul> -->
    <!-- <slot name="bottom"/> -->
  </div>
</template>

<script>
//import SidebarGroup from './SidebarGroup.vue'
//import SidebarLink from './SidebarLink.vue'
//import { isActive } from './vuepress/util'


export default {
  /*
  components: { SidebarGroup, SidebarLink },

  props: ['items'],

  data () {
    return {
      openGroupIndex: 0
    }
  },

  created () {
    this.refreshIndex()
  },

  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.path)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
*/
}
</script>

<style lang="stylus">
@import './vuepress/styles/config.styl'

.sidebar
  padding-left 25px
  padding-top 15px

  .caption-text
    font-size: 1.1em
    color #1F1F1F
    font-weight: bold
    &:hover
      cursor: pointer

  ul
    padding 0
    margin 0
    list-style-type none
  .ul_hide
    display none

  a
    display inline-block
    font-size: 1.1em;

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
  //.sidebar-links
  //  padding 1.5rem 0

  .sidebar_menu_button
    width: 20px
    height: 20px
    float: right
    border: solid 1px #cbd2da
    border-radius: 3px
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjExIgogICBoZWlnaHQ9IjcuMDYyNjYwMiIKICAgdmlld0JveD0iMCAwIDExIDcuMDYyNjYwMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZG93bmxvYWQgKDEpLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDE5IgogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJ0cnVlIgogICAgIGlua3NjYXBlOnpvb209IjY3LjQyODU3MSIKICAgICBpbmtzY2FwZTpjeD0iNS43Mjg4MzQ4IgogICAgIGlua3NjYXBlOmN5PSI0LjQwNDY2NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjQzMDYiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii0xNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPHBhdGgKICAgICBkPSJNIDAuMTI5NjUsMS4yNTU1OSAxLjI2MjQxLDAuMTI5NjYgUSAxLjM5MjA2LDAgMS41Njk0OCwwIDEuNzQ2OSwwIDEuODc2NTUsMC4xMjk2NiBMIDUuNSwzLjc1MzEgOS4xMjM0NSwwLjEyOTY2IFEgOS4yNTMxLDAgOS40MzA1MiwwIDkuNjA3OTQsMCA5LjczNzU5LDAuMTI5NjYgbCAxLjEzMjc2LDEuMTI1OTMgUSAxMSwxLjM4NTI0IDExLDEuNTY2MDcgMTEsMS43NDY5IDEwLjg3MDM1LDEuODc2NTUgTCA1LjgwNzA3LDYuOTMzIFEgNS42Nzc0Miw3LjA2MjY2IDUuNSw3LjA2MjY2IDUuMzIyNTgsNy4wNjI2NiA1LjE5MjkzLDYuOTMzIEwgMC4xMjk2NSwxLjg3NjU1IFEgMCwxLjc0NjkgMCwxLjU2NjA3IDAsMS4zODUyNCAwLjEyOTY1LDEuMjU1NTkgWiIKICAgICBpZD0icGF0aDIiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzdHlsZT0iZmlsbDojNzU4MDhmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjAwNjgyMzgyIiAvPgo8L3N2Zz4K') no-repeat center


  .sidebar_menu_button_close
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjExIgogICBoZWlnaHQ9IjcuMDYyNjYwMiIKICAgdmlld0JveD0iMCAwIDExIDcuMDYyNjYwMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZG93bmxvYWQgKDEpLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDE5IgogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJ0cnVlIgogICAgIGlua3NjYXBlOnpvb209IjY3LjQyODU3MSIKICAgICBpbmtzY2FwZTpjeD0iNS43Mjg4MzQ4IgogICAgIGlua3NjYXBlOmN5PSI0LjQwNDY2NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjQzMDYiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii0xNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPHBhdGgKICAgICBkPSJNIDAuMTI5NjUsMS4yNTU1OSAxLjI2MjQxLDAuMTI5NjYgUSAxLjM5MjA2LDAgMS41Njk0OCwwIDEuNzQ2OSwwIDEuODc2NTUsMC4xMjk2NiBMIDUuNSwzLjc1MzEgOS4xMjM0NSwwLjEyOTY2IFEgOS4yNTMxLDAgOS40MzA1MiwwIDkuNjA3OTQsMCA5LjczNzU5LDAuMTI5NjYgbCAxLjEzMjc2LDEuMTI1OTMgUSAxMSwxLjM4NTI0IDExLDEuNTY2MDcgMTEsMS43NDY5IDEwLjg3MDM1LDEuODc2NTUgTCA1LjgwNzA3LDYuOTMzIFEgNS42Nzc0Miw3LjA2MjY2IDUuNSw3LjA2MjY2IDUuMzIyNTgsNy4wNjI2NiA1LjE5MjkzLDYuOTMzIEwgMC4xMjk2NSwxLjg3NjU1IFEgMCwxLjc0NjkgMCwxLjU2NjA3IDAsMS4zODUyNCAwLjEyOTY1LDEuMjU1NTkgWiIKICAgICBpZD0icGF0aDIiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzdHlsZT0iZmlsbDojNzU4MDhmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjAwNjgyMzgyIiAvPgo8L3N2Zz4K') no-repeat center

  .sidebar_menu_button_open
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjExIgogICBoZWlnaHQ9IjcuMDYyNjYwMiIKICAgdmlld0JveD0iMCAwIDExIDcuMDYyNjYwMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZG93bmxvYWQgKDEpLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDE5IgogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJ0cnVlIgogICAgIGlua3NjYXBlOnpvb209IjY3LjQyODU3MSIKICAgICBpbmtzY2FwZTpjeD0iOC42NjUyNzU1IgogICAgIGlua3NjYXBlOmN5PSI0LjQwNDY2NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjQzMDYiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii0xNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPHBhdGgKICAgICBkPSJNIDEwLjg3MDM1LDUuODA3MDcgOS43Mzc1OSw2LjkzMyBRIDkuNjA3OTQsNy4wNjI2NiA5LjQzMDUyLDcuMDYyNjYgOS4yNTMxLDcuMDYyNjYgOS4xMjM0NSw2LjkzMyBMIDUuNSwzLjMwOTU2IDEuODc2NTUsNi45MzMgUSAxLjc0NjksNy4wNjI2NiAxLjU2OTQ4LDcuMDYyNjYgMS4zOTIwNiw3LjA2MjY2IDEuMjYyNDEsNi45MzMgTCAwLjEyOTY1LDUuODA3MDcgUSAwLDUuNjc3NDIgMCw1LjQ5NjU5IDAsNS4zMTU3NiAwLjEyOTY1LDUuMTg2MTEgTCA1LjE5MjkzLDAuMTI5NjYgUSA1LjMyMjU4LDAgNS41LDAgNS42Nzc0MiwwIDUuODA3MDcsMC4xMjk2NiBsIDUuMDYzMjgsNS4wNTY0NSBRIDExLDUuMzE1NzYgMTEsNS40OTY1OSAxMSw1LjY3NzQyIDEwLjg3MDM1LDUuODA3MDcgWiIKICAgICBpZD0icGF0aDIiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuMDA2ODIzODI7ZmlsbDojNzU4MDhmO2ZpbGwtb3BhY2l0eToxIiAvPgo8L3N2Zz4K') no-repeat center



@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    //.sidebar-links
    //  padding 1rem 0

/********************/

/* rename some classes as no control on what comes from sphinx:
  - sidebar-heading => caption
  - sidebar-link => reference
  - sidebar-sub-headers => toctree-l2
    Note: sidebar-sub-headers refers to ul in Vuepress
          while toctree-l2 referes to li in sphinx
  - active => current
*/

/**** SidebarGroup.vue  ***/
.sidebar-group
  margin-top 1em
  margin-bottom 1em

  &:not(.first)
    margin-top 1em
  .sidebar-group
    padding-left 0.5em
  //&:not(.collapsable)
  //  .caption
  //    cursor auto
  //    color inherit

.sidebar-group .caption
  color #999
  transition color .15s ease
  cursor pointer
  font-size 1.1em
  font-weight bold
  // text-transform uppercase
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


.sidebar-group-items /* FIXME sphinx toc equivalent */
  transition height .1s ease-out
  overflow hidden

/**** end: SidebarGroup.vue  ***/

/**** SidebarLink.vue  ***/
/*.sidebar .sidebar-sub-headers*/
.sidebar .toctree-l1 ul
  font-size 0.95em

.sidebar
  .toctree-l1 a, .toctree-l2 a
    font-weight 400
    display inline-block
    color $textColor
    line-height 1.4
    width: 100%
    box-sizing: border-box
    border-left 0.5rem solid transparent
    &.current
      color $accentColor
      font-weight 600
    &:hover
      color $accentColor

  // /* extra indication of current, since no support to hight current location */
  .toctree-l1.current a
    border-left: .5rem solid lighten($accentColor, 40%)
  .toctree-l1 a
    padding 0.35rem 1rem 0.35rem 1.25rem
    &.current
      border-left-color $accentColor
  .toctree-l2 a
    padding 0.25rem 1rem 0.25rem 1.75rem



/**** end: SidebarLink.vue  ***/


</style>
