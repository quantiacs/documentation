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
          <li><a class="nav-link" target="_self" href="/leaderboard">Systems</a></li>
          <div class="quantiacs_legacy_link_container"><a class="nav-link"
                                                          href="https://legacy.quantiacs.com/Systems.aspx"
                                                          target="_blank">Q1-Q14 Contests</a>
            <ul class="ul_container">
              <li><a class="nav-link" href="https://legacy.quantiacs.com/" target="_blank">Legacy Version</a></li>
              <li><a class="nav-link" href="https://legacy.quantiacs.com/Competitions/Q14.aspx" target="_blank">Q14 Live
                Evaluation</a></li>
            </ul>
          </div>
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
              <li><a class="nav-link" target="_self" href="/leaderboard">Systems</a></li>
              <li><a class="nav-link" href="https://legacy.quantiacs.com/Systems.aspx" target="_blank">Q1-Q14 Contests</a></li>
              <li><a class="nav-link" href="https://legacy.quantiacs.com/Competitions/Q14.aspx" target="_blank">Q14 Live Evaluation</a></li>
              <li><a class="nav-link" href="https://legacy.quantiacs.com/" target="_blank">Legacy Version</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="langWrapper" style="display: flex; justify-content: space-between; align-items: center;"><a
          class="myAccountLink" rel="noopener noreferrer" href="/personalpage/login" target="_self"
          style="display: block;">Sign In</a>
        <div class="usernameLinkWrapper" style="display: none;"><span class="usernameLink"></span><span
            class="usernameIcon"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user"
                                      class="svg-inline--fa fa-user fa-w-14 fa-fw fa-sm " role="img"
                                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor"
                                                                                                     d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg></span><span
            class="chevron"></span>
          <ul>
            <li class="usernameHeader"><span style="color: rgb(214, 109, 54);"></span></li>
            <li><a rel="noopener noreferrer" href="/personalpage/homepage" target="_self">My
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
      background: url("data:image/png;base64,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") no-repeat
      background-size: contain;
      width: 149px;
      text-indent: -9999px;
      top: 2px;
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

.quantiacs_legacy_link_container {
  background: #020202;
  align-items: center;
  position: relative;
  transition: all .3s ease-in;

  .ul_container {
    display: none !important;
    flex-direction: column;
    position: absolute;
    background-color: #020202;
    color: #fff;
    width: 150px !important;
    top: 30px;
    right: -20px;

    li {
      list-style-type: none;
      margin: 5px;
      cursor: pointer;
      font-family: "Gotham Pro Medium";
      text-align: center;
    }
  }
}

.quantiacs_legacy_link_container:hover {
  .ul_container {
    display: flex !important;
  }
}

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