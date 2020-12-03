<template>
  <header>
    <div class="top_header">
      <div class="logoWrapper"><a class="logo quantiacs-logo" href="/">Home</a></div>
      <nav class="dropdownmenu">
        <ul>
          <li><a class="nav-link" target="_self" href="/contest">About</a></li>
          <li><a class="nav-link" target="_self" href="/documentation/en/">Documentation</a></li>
          <li><a class="nav-link" rel="noopener noreferrer" href="/contacts" target="_self">Contact</a></li>
          <li><a class="nav-link" target="_self" href="/faq">FAQ</a></li>
          <li><a class="nav-link" href="https://www.quantiacs.com/" target="_blank">Legacy Version</a></li>
        </ul>
      </nav>
      <div class="headerWrapper">
        <div id="wrapper"><label id="nav-icon3" class="menu-icon"
                                 for="toggle"><span></span><span></span><span></span><span></span></label><input
            type="checkbox" id="toggle">
          <nav>
            <ul>
              <li><a class="nav-link" href="/" target="_self">Home</a></li>
              <li><a class="nav-link" href="/contest" target="_self">About</a></li>
              <li><a class="nav-link" href="/documentation/en/" target="_self">Documentation</a></li>
              <li><a class="nav-link" rel="noopener noreferrer" href="/contacts" target="_self">Contact</a></li>
              <li><a class="nav-link" href="/faq" target="_self">FAQ</a></li>
              <li><a class="nav-link" href="https://www.quantiacs.com/" target="_blank">Legacy Version</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="langWrapper" style="display: flex; justify-content: space-between; align-items: center;"><a
          class="myAccountLink" rel="noopener noreferrer" href="https://quantiacs.io/personalpage/login" target="_self"
          style="display: block;">Sign In</a>
        <div class="usernameLinkWrapper" style="display: none;"><span class="usernameLink"></span><span
            class="usernameIcon"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user"
                                      class="svg-inline--fa fa-user fa-w-14 fa-fw fa-sm " role="img"
                                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor"
                                                                                                     d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg></span><span
            class="chevron"></span>
          <ul>
            <li class="usernameHeader"><span style="color: rgb(214, 109, 54);"></span></li>
            <li><a rel="noopener noreferrer" href="https://quantiacs.io/personalpage/homepage" target="_self">My
              account</a></li>
            <li><span>Log out</span></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SidebarButton from './vuepress/SidebarButton.vue'


export default {
  components: {SidebarButton},
}
</script>
<style lang="stylus">
@require './vuepress/styles/config';
// Main colors
$light_main_color = #ffffff;
$dark_main_color = #020202;
$middle_main_color = #f0f5f7;
$light_border = #cccccc;
$contrast_color = #d66d36;
$additional_color = #1395ba;

$light_font_color = #999999;


header {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: $dark_main_color;
  z-index: 10;
}

.top_header {

  padding: 10px 0;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: $dark_main_color;
  max-width: 1180px;
  margin: 0 auto;

  .logoWrapper {
    width: 25%;

    .logo {
      color: $light_main_color;
      display: inline-block;
      font-size: 2em;
      //padding-top: 10px;
      text-align: left;
      position: relative;
      background: url('data:image/png;base64,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') no-repeat;
      background-size: contain;
      width: 149px;
      text-indent: -9999px;
    }
  }

  .dropdownmenu {
    width: 55%;
    display: flex;
    vertical-align: middle;
    justify-content: space-between;

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    li {
      float: left;
      position: relative;
      width: auto;

      .dropdown-item {
        color: $middle_main_color;
      }
    }

    a {
      background: inherit;
      color: $light_main_color;
      display: block;
      font-family: $header_font;
      padding: 0;
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      -webkit-transition: all 0.25s ease;
      -moz-transition: all 0.25s ease;
      -ms-transition: all 0.25s ease;
      -o-transition: all 0.25s ease;
      transition: all 0.25s ease;
      white-space: nowrap;
    }

    li:hover {
      .nav-link {
        color: $light_font_color;
      }
    }

    .submenu {
      transition-delay: 200ms;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 20px;
      visibility: hidden;
      z-index: 5;
      min-width: 160px;
    }

    li:hover ul.submenu {
      opacity: 0.9;
      color: $light_main_color;
      top: 40px; /* adjust this as per top nav padding top & bottom comes */
      visibility: visible;
    }

    .submenu li {
      float: none;
      width: 100%;
    }

    .submenu a {
      color: $light_main_color;
      background-color: $dark_main_color;
      text-align: left;
      font-size: 0.8em;

      &:hover {
        color: $contrast_color;
      }
    }
  }

  .headerWrapper {
    text-align: right;
    display: block;
    position: absolute;
    left: 40px;
    padding: 0;

    .mobileToggle {
      margin-top: 10px;
      font-family: $average_font;
      color: $light_main_color;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 5px;
      padding: 10px;
      padding-right: 45px;

      &:hover {
        color: $contrast_color;
      }
    }

    #toggle {
      display: none;

      &:not(:checked) + nav {
        width: 0;
        overflow: hidden;
      }

      &:checked + nav {
        width: 300px;
        overflow: visible;
      }

      &:checked + nav li {
        opacity: 1;
      }
    }

    nav {
      position: fixed;
      top: 50px;
      background: $dark_main_color;
      left: 0;
      z-index: 10;
      transition: 0.5s;
      height: calc(100vh - 50px);
      width: 300px;

      ul {
        padding: 0;
      }

      li {
        opacity: 0;
        transition: opacity 0.4s ease;
        list-style-type: none;
      }

      .nav-link {
        background: inherit;
        color: #ffffff;
        display: block;
        font-family: $header_font;
        padding: 10px 25px;
        text-align: left;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 14px;
        -webkit-transition: all 0.25s ease;
        height: 50px;
        line-height: 50px;
        padding-left: 50px;
        border-bottom: 1px solid #383838;
        padding-bottom: 20px;
        padding-top: 0;

        &:hover {
          color: $light_font_color;
        }
      }

      .submenu {
        width: fit-content;

        li {
          list-style-type: none;
          justify-content: center;

          a {
            background: inherit;
            color: $light_font_color;
            display: block;
            font-family: "Roboto", sans-serif;
            padding: 10px 5px;
            text-align: left;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 0.7em;
            font-weight: bold;
            -webkit-transition: all 0.25s ease;
            transition: all 0.25s ease;
          }
        }
      }

      .soc_buttons {
        justify-content: center;
      }
    }

    /* menu icon */

    .menu-icon {
      cursor: pointer;
      float: right;
      padding: 0;
      user-select: none;

      .navicon {
        background: $light_main_color;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 18px;

        &:before,
        &:after {
          content: "";
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
          background: $light_main_color;
          transition: all 0.2s ease-out;
        }

        &:before {
          top: 5px;
        }

        &:after {
          top: -5px;
        }
      }
    }

    #nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {
      width: 30px;
      height: 20px;
      margin-top: 5px;
      position: relative;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .5s ease-in-out;
      -moz-transition: .5s ease-in-out;
      -o-transition: .5s ease-in-out;
      transition: .5s ease-in-out;
      cursor: pointer;
    }

    #nav-icon1 span, #nav-icon3 span, #nav-icon4 span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: $light_main_color;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
    }


    /* Icon 3 */

    #nav-icon3 span:nth-child(1) {
      top: 0px;
    }

    #nav-icon3:hover {
      span {
        background: $light_font_color;
      }
    }

    #nav-icon3 span:nth-child(2), #nav-icon3 span:nth-child(3) {
      top: 9px;
    }

    #nav-icon3 span:nth-child(4) {
      top: 18px;
    }

    #nav-icon3.open span:nth-child(1) {
      top: 9px;
      width: 0%;
      left: 50%;
    }

    #nav-icon3.open span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    #nav-icon3.open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    #nav-icon3.open span:nth-child(4) {
      top: 9px;
      width: 0%;
      left: 50%;
    }

  }

  .langWrapper {
    min-width: 80px;
    max-width: 150px;

    .myAccountLink {
      color: $light_main_color;
      cursor: pointer;
      text-decoration: none;
      font-family: $header_font;
      font-size: 14px;
      transition: all 300ms ease-in;
      margin-left: 20px;
      white-space: nowrap;

      &:hover {
        color: $light_font_color;
      }
    }

    .languagePickerWrapper {
      position: relative;
      width: 40px;
      height: 30px;
      color: $light_main_color;
      padding-left: 5px;

      a {
        color: white;
        font-family: $header_font;
      }

      &::before {
        position: absolute;
        left: -5px;
        top: 50%;
        content: '';
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid $light_main_color;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;

      }

      &.ru {
        ul {
          display: flex;
          flex-direction: column;

          li:first-child {
            order: 1;
          }

          li:nth-child(2) {
            order: 2;
          }

          li.ru {
            visibility: visible !important;
          }
        }
      }

      &.en {
        ul {
          display: flex;
          flex-direction: column;

          li:first-child {

            order: 2;
          }

          li:nth-child(2) {
            order: 1;
          }

          li.en {
            visibility: visible !important;
          }
        }
      }

      &:hover {
        &::before {
          border-top: 4px solid $light_font_color;
        }

        li {
          visibility: visible !important;
        }
      }

      ul {
        color: white;
        margin: 0;
        padding: 0;
        align-items: center;


        &:hover {
          background-color: $dark_main_color;
        }

        li {
          cursor: pointer;
          list-style-type: none;
          font-family: $header_font;
          color: white;
          visibility: hidden;
          font-size: 14px;

          &:hover {
            color: $light_font_color;
          }

          &.ru {
            //background: url("../img/languageIcons/iconfinderRussia.png");
            background-size: contain;
          }

          &.en {
            //background: url("../img/languageIcons/iconfinderUK.png");
            background-size: contain;
          }
        }
      }
    }

    .usernameLinkWrapper {
      background: $dark_main_color;
      align-items: center;
      position: relative;
      transition: all ease-in 300ms;

      .usernameHeader {
        display: none;
      }

      &:hover {
        .chevron {
          color: $light_main_color;
          cursor: pointer;
          width: 20px;

          &::after {
            position: absolute;
            right: 0;
            top: 30%;
            content: '';
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 4px solid $light_main_color;
            border-top: 4px solid transparent;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
            pointer-events: none;
          }
        }

        ul {
          z-index: 1000;
          display: block;
          position: absolute;
          background-color: $dark_main_color;
          color: $light_main_color;
          padding: 10px 5px;
          width: 150px;
          top: 30px;
          right: -20px;
          padding-left: 10px;

          li {
            list-style-type: none;
            margin: 5px;
            cursor: pointer;
            font-family: $header_font;
            text-align: center;

            a, span {
              color: $light_main_color;
              font-family: $header_font;
              text-decoration: none;
              font-size: 14px;
            }

            &:hover {
              color: $light_font_color;

              a, span {
                color: $light_font_color;
              }
            }
          }
        }
      }

      .usernameLink {
        color: $light_main_color;
        cursor: pointer;
        padding: 0 10px;
        width: fit-content;
        max-width: 150px;
        text-decoration: none;
        font-family: $average_font;
        margin-left: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-right: 0;
      }

      .usernameIcon {
        display: none;
      }

      .chevron {
        color: $light_main_color;
        cursor: pointer;
        width: 20px;

        &::after {
          position: absolute;
          right: 0;
          top: 50%;
          content: '';
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid $light_main_color;
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;

        }
      }

      ul {
        display: none;
      }
    }
  }

  .languageSelect {
    font-family: $average_font;
    font-weight: bold;
    font-size: 1em;
    border: none;
    height: fit-content;
    width: 50px;
  }

  .soc_buttons {
    display: flex;
    margin-top: 30px;

    a {
      padding-top: 0;
      color: $light_main_color;
      text-decoration: none;
      margin-right: 20px;

      &:hover {
        .fa {
          color: $contrast_color;
        }
      }
    }

    .soc_buttons_vk,
    .soc_buttons_fb,
    .soc_buttons_in,
    .soc_buttons_tg,
    .soc_buttons_zen {
      height: 20px;
      width: 20px;
      padding: 0;
      //background: url("../img/soc_icons.png");
      background-repeat: no-repeat;
      display: inline-block;

      &:hover {
        opacity: 0.7;
      }
    }

    .soc_buttons_vk {
      background-position: -41px -9px;
    }

    .soc_buttons_fb {
      background-position: -74px -11px;
    }

    .soc_buttons_in {
      background-position: -75px -44px;
    }

    .soc_buttons_tg {
      background-position: -41px -43px;
    }

    .soc_buttons_zen {
      background-position: -9px -42px;
    }
  }

  .header_topline {
    background-color: $light_main_color;
    padding: 0;
    color: $dark_main_color;
    position: relative;
  }
}


/* menu */

.menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu btn */

.menu-btn {
  display: none;

  &:checked ~ .menu {
    max-height: 240px;
  }

  &:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  &:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  &:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  &:checked ~ .menu-icon:not(.steps) .navicon:before,
  &:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }


}

@media (max-width: 1200px) {
  .top_header {
    padding: 10px 0px;
    width: 80%;
  }

  .usernameLink {
    display: none;
  }

  .usernameHeader {
    display: block !important;

    span {
      color: $contrast_color;
      word-break: break-word;
    }
  }

  .usernameIcon {
    display: block !important;
    padding-bottom: 3px;

    path {
      color: $light_main_color !important;
    }
  }

}


@media only screen and (min-width: 768px) {
  .top_header {
    .headerWrapper {
      display: none;
    }

    .langWrapper {
      width: 20%;
    }

    .dropdownmenu,
    .myAccountLink {
      display: block;
      max-width: 100%;
    }
  }
}


@media only screen and (max-width: 768px) {
  .dropdownmenu {
    display: none !important;
  }

  .headerWrapper {
    display: block !important;
  }

  .top_header {
    padding: 10px 30px;
    //position: fixed;
    top: 0;
    //width: 100%;

    .logoWrapper {
      width: 80%;
      text-align: center;
      padding-left: 20%;
    }

    .languagePickerWrapper {
      width: 25px;

      &::before {
        display: none !important;

      }
    }

    .myAccountLink {
      margin-left: 0 !important;
    }
  }
}

@media only screen and (max-width: 400px) {
  .logoWrapper {
    width: 60% !important;
    text-align: center;
    padding-left: calc(50% - 30px) !important;

    .logo {
      min-width: 30px !important;
      max-width: 30px !important;
      background-size: cover !important;
    }
  }

  .languagePickerWrapper {
    width: 40px !important;
  }

}


/* for md style*/

</style>