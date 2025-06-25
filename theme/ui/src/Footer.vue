<template>
  <div>
    <footer>
      <div class="wrapper">
        <div class="main_footerWrapper">
          <div class="main_footer">
            <nav class="footerMenu">
              <ul>
                <li>
                  <a class="nav-link" target="_self" href="/documentation/ru/"
                    >Documentation</a
                  >
                </li>
                <li>
                  <a class="nav-link" target="_self" href="/contest">About</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="main_footer">
            <nav class="footerMenu">
              <ul>
                <li><a class="nav-link" href="/career">Career</a></li>
                <li>
                  <a
                    class="nav-link"
                    rel="noopener noreferrer"
                    href="/personalpage/login"
                    target="_self"
                    >My account</a
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="main_footer">
            <nav class="footerMenu">
              <ul>
                <li>
                  <a
                    class="nav-link"
                    rel="noopener noreferrer"
                    href="/personalinfo"
                    target="_self"
                    >Privacy policy</a
                  >
                </li>
                <li>
                  <a
                    class="nav-link"
                    rel="noopener noreferrer"
                    href="/termsofuse"
                    target="_self"
                    >Terms and Conditions</a
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="main_footer">
            <nav class="footerMenu">
              <ul>
                <li>
                  <a
                    class="nav-link"
                    rel="noopener noreferrer"
                    href="/cookies"
                    target="_self"
                    >Cookies policy</a
                  >
                </li>
                <li>
                  <div class="socButtonWrapper">
                    <a
                      rel="noopener noreferrer"
                      title="Facebook"
                      aria-label="Facebook"
                      href="https://www.facebook.com/quantiacs/"
                      target="_self"
                      class="FB"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook"
                        class="svg-inline--fa fa-facebook fa-w-16 fa-fw fa-2x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      title="Twitter"
                      aria-label="Twitter"
                      href="https://twitter.com/Quantiacs"
                      target="_self"
                      class="TW"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        class="svg-inline--fa fa-twitter fa-w-16 fa-fw fa-2x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      title="Linkedin"
                      aria-label="Linkedin"
                      href="https://www.linkedin.com/company/quantiacs"
                      target="_self"
                      class="Linkedin"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin"
                        class="svg-inline--fa fa-linkedin fa-w-14 fa-fw fa-2x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      title="Youtube"
                      aria-label="Youtube"
                      href="https://www.youtube.com/channel/UCS8bIV3uEJLIaA91s5uQzQw"
                      target="_self"
                      class="TW"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="youtube"
                        class="svg-inline--fa fa-youtube fa-w-18 fa-fw fa-2x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      title="Medium"
                      aria-label="Medium"
                      href="https://quantiacs.medium.com/"
                      target="_self"
                      class="TW"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="medium"
                        class="svg-inline--fa fa-medium fa-w-14 fa-fw fa-2x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="copywriteWrapper">
          <div class="main_footer"><a class="logo" href="/">Home</a></div>
          <span class="copywrite"
            >Copyright © {{ currentYear }} Quantiacs LLC.</span
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="stylus">
average_font = "Gotham Pro Regular"
light_font = 'Gotham Pro Light'
light_main_color = #ffffff
icons_vk = #44668d
icons_tg = #35ade1
dark_main_color = #020202
middle_main_color = #f0f5f7
light_border = #cccccc
contrast_color = #d66d36
light_font_color = #999999

footer
  background dark_main_color
  font-family average_font
  clear both
  position relative
  height auto
  padding 50px

  .wrapper
    max-width 1180px
    margin 0 auto

    .socButtonWrapper
      width 100%
      min-width 100px
      display inline-flex
      justify-content space-evenly

    .copywriteWrapper
      display flex
      flex-direction column
      align-items center
      margin-bottom 1rem
      padding-top 5px

      .copywrite
        color light_border !important
        font-size 16px
        font-family average_font !important

  .main_footerWrapper
    display flex
    align-items flex-start
    justify-content space-around

  .flex_rows_break
    flex-basis 100%
    height 0

    & + .main_footer
      width 100%

  .main_footer
    .logo
      color light_main_color
      display inline-block
      font-size 2em
      background-size contain
      width 10%
      min-width 145px
      height 30px
      text-indent -9999px
      margin 0 5% 3% 5%

    .footerMenu
      ul, li
        margin 0
        padding 0
        white-space nowrap
        text-align center
        margin-bottom 15px

        a
          text-align center
          font-size 16px
          font-family average_font

      ul
        list-style none
        width 100%
        display flex
        flex-direction column
        align-items flex-start
        justify-content flex-start
        background dark_main_color

      li
        margin 0 7% 0 0
        position relative
        width 100%

        .dropdown-item
          color middle_main_color

        &.copyrightWrap
          padding 6% 0
          color light_font_color
          font-size 0.8em
          width 100%
          white-space nowrap

          a
            margin-right 10%
            color light_border
            padding-top 0
            text-decoration none

            &:hover
              color light_main_color
              text-decoration underline

      a
        background inherit
        margin-bottom 15px
        display block
        font-family average_font
        padding 10px
        text-align left
        text-decoration none
        font-size 0.9em
        transition all 0.25s ease
        color light_border
        padding-top 0

        svg, path
          color icons_tg !important

      li:hover
        .nav-link
          color light_main_color
          text-decoration underline

      .submenu
        transition-delay 200ms
        left 0
        opacity 0
        position absolute
        top 20px
        visibility hidden
        z-index 5
        min-width 160px

      li:hover ul.submenu
        opacity 0.9
        color light_main_color
        top 40px
        visibility visible

      .submenu li
        float none
        width 100%

      .submenu a
        color light_main_color
        background-color dark_main_color
        text-align left
        font-size 0.8em

        &:hover
          color contrast_color

@media only screen and (max-width: 768px)
  footer
    height auto
    background dark_main_color

    .copywrite
      font-size 12px !important

    .wrapper
      .copywriteWrapper
        padding-top 30px

        .main_footer
          text-align center

          .logo
            margin-bottom 0

        .copywrite
          text-align center

    .main_footerWrapper
      flex-direction column

    .main_footer
      margin 0
      width 100%

      &:last-child
        margin 0

      .footerMenu
        ul, li
          margin 0

        li
          &.copyrightWrap
            white-space normal
            box-sizing border-box

          .socButtonWrapper
            justify-content center

            a
              padding 0

svg:not(:root).svg-inline--fa
  overflow visible

.svg-inline--fa
  display inline-block
  font-size inherit
  height 1em
  overflow visible
  vertical-align -0.125em

.svg-inline--fa.fa-lg
  vertical-align -0.225em

.svg-inline--fa.fa-w-1
  width 0.0625em

.svg-inline--fa.fa-w-2
  width 0.125em

.svg-inline--fa.fa-w-3
  width 0.1875em

.svg-inline--fa.fa-w-4
  width 0.25em

.svg-inline--fa.fa-w-5
  width 0.3125em

.svg-inline--fa.fa-w-6
  width 0.375em

.svg-inline--fa.fa-w-7
  width 0.4375em

.svg-inline--fa.fa-w-8
  width 0.5em

.svg-inline--fa.fa-w-9
  width 0.5625em

.svg-inline--fa.fa-w-10
  width 0.625em

.svg-inline--fa.fa-w-11
  width 0.6875em

.svg-inline--fa.fa-w-12
  width 0.75em

.svg-inline--fa.fa-w-13
  width 0.8125em

.svg-inline--fa.fa-w-14
  width 0.875em

.svg-inline--fa.fa-w-15
  width 0.9375em

.svg-inline--fa.fa-w-16
  width 1em

.svg-inline--fa.fa-w-17
  width 1.0625em

.svg-inline--fa.fa-w-18
  width 1.125em

.svg-inline--fa.fa-w-19
  width 1.1875em

.svg-inline--fa.fa-w-20
  width 1.25em

.svg-inline--fa.fa-pull-left
  margin-right 0.3em
  width auto

.svg-inline--fa.fa-pull-right
  margin-left 0.3em
  width auto

.svg-inline--fa.fa-border
  height 1.5em

.svg-inline--fa.fa-li
  width 2em

.svg-inline--fa.fa-fw
  width 1.25em

.fa-layers svg.svg-inline--fa
  bottom 0
  left 0
  margin auto
  position absolute
  right 0
  top 0

.fa-layers
  display inline-block
  height 1em
  position relative
  text-align center
  vertical-align -0.125em
  width 1em

.fa-layers svg.svg-inline--fa
  transform-origin center center

.fa-layers-counter,
.fa-layers-text
  display inline-block
  position absolute
  text-align center

.fa-layers-text
  left 50%
  top 50%
  transform translate(-50%, -50%)
  transform-origin center center

.fa-layers-counter
  background-color #ff253a
  border-radius 1em
  box-sizing border-box
  color #fff
  height 1.5em
  line-height 1
  max-width 5em
  min-width 1.5em
  overflow hidden
  padding 0.25em
  right 0
  text-overflow ellipsis
  top 0
  transform scale(0.25)
  transform-origin top right

.fa-layers-bottom-right
  bottom 0
  right 0
  top auto
  transform scale(0.25)
  transform-origin bottom right

.fa-layers-bottom-left
  bottom 0
  left 0
  right auto
  top auto
  transform scale(0.25)
  transform-origin bottom left

.fa-layers-top-right
  right 0
  top 0
  transform scale(0.25)
  transform-origin top right

.fa-layers-top-left
  left 0
  right auto
  top 0
  transform scale(0.25)
  transform-origin top left

.fa-lg
  font-size 1.3333333333em
  line-height 0.75em
  vertical-align -0.0667em

.fa-xs
  font-size 0.75em

.fa-sm
  font-size 0.875em

.fa-1x
  font-size 1em

.fa-2x
  font-size 2em

.fa-3x
  font-size 3em

.fa-4x
  font-size 4em

.fa-5x
  font-size 5em

.fa-6x
  font-size 6em

.fa-7x
  font-size 7em

.fa-8x
  font-size 8em

.fa-9x
  font-size 9em

.fa-10x
  font-size 10em

.fa-fw
  text-align center
  width 1.25em

.fa-ul
  list-style-type none
  margin-left 2.5em
  padding-left 0

.fa-ul > li
  position relative

.fa-li
  left -2em
  position absolute
  text-align center
  width 2em
  line-height inherit

.fa-border
  border solid 0.08em #eee
  border-radius 0.1em
  padding 0.2em 0.25em 0.15em

.fa-pull-left
  float left

.fa-pull-right
  float right

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left
  margin-right 0.3em

.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right
  margin-left 0.3em

.fa-spin
  animation fa-spin 2s infinite linear

.fa-pulse
  animation fa-spin 1s infinite steps(8)

@keyframes fa-spin
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)

.fa-rotate-90
  transform rotate(90deg)

.fa-rotate-180
  transform rotate(180deg)

.fa-rotate-270
  transform rotate(270deg)

.fa-flip-horizontal
  transform scale(-1, 1)

.fa-flip-vertical
  transform scale(1, -1)

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical
  transform scale(-1, -1)

.fa-stack
  display inline-block
  height 2em
  position relative
  width 2.5em

.fa-stack-1x,
.fa-stack-2x
  bottom 0
  left 0
  margin auto
  position absolute
  right 0
  top 0

.svg-inline--fa.fa-stack-1x
  height 1em
  width 1.25em

.svg-inline--fa.fa-stack-2x
  height 2em
  width 2.5em

.fa-inverse
  color #fff

.sr-only
  border 0
  clip rect(0, 0, 0, 0)
  height 1px
  margin -1px
  overflow hidden
  padding 0
  position absolute
  width 1px

.sr-only-focusable:active,
.sr-only-focusable:focus
  clip auto
  height auto
  margin 0
  overflow visible
  position static
  width auto

.svg-inline--fa .fa-primary
  fill var(--fa-primary-color, currentColor)
  opacity var(--fa-primary-opacity, 1)

.svg-inline--fa .fa-secondary
  fill var(--fa-secondary-color, currentColor)
  opacity var(--fa-secondary-opacity, 0.4)

.svg-inline--fa.fa-swap-opacity .fa-primary
  opacity var(--fa-secondary-opacity, 0.4)

.svg-inline--fa.fa-swap-opacity .fa-secondary
  opacity var(--fa-primary-opacity, 1)

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary
  fill black

.fad.fa-inverse
  color #fff
</style>
