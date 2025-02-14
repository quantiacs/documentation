import Vue from 'vue'

import './vuepress/styles/theme.styl'
import './sphinx-theme.styl'

import {utm} from 'url-utm-params';
import * as tracker from './tracker';

import OutboundLink from './OutboundLink.vue'
import Navbar from './Navbar.vue'
import NavLinks from './NavLinks.vue'
import Sidebar from './Sidebar.vue'
import Page from './Page.vue'
import Footer from './Footer.vue'
import AboutFeedback from "./AboutFeedback";


Vue.config.productionTip = false

Vue.component('outboundlink', OutboundLink)
Vue.component('navbar', Navbar)
Vue.component('navlinks', NavLinks)
Vue.component('sidebar', Sidebar)
Vue.component('page', Page)
Vue.component('footer-quantiacs', Footer)
Vue.component('about-feedback', AboutFeedback)


// fake router element
Vue.component('router-link', {
    props: ['to'],
    template: '<a :href="to"><slot></slot></a>',
})

new Vue({
    el: '#app',
    // taken from Layout.vue
    data: {
        isSidebarOpen: false,
        swUpdateEvent: null
    },
    computed: {
        pageClasses() {
            //const userPageClass = this.$page.frontmatter.pageClass
            return [
                {
                    // 'no-navbar': !this.shouldShowNavbar,
                    'sidebar-open': this.isSidebarOpen,
                    // 'no-sidebar': !this.shouldShowSidebar
                },
                // userPageClass
            ]
        }
    },
    methods: {
        toggleSidebar(to) {
            this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
        },
        addCopyButtons() {
            const codeBlocks = document.querySelectorAll('.highlight pre');
            codeBlocks.forEach(block => {
                const button = document.createElement('button');
                button.textContent = 'Copy';
                button.className = 'copy-button';

                button.addEventListener('click', () => {
                    const code = block.innerText;
                    navigator.clipboard.writeText(code)
                        .then(() => {
                            button.textContent = 'Copied!';
                            setTimeout(() => button.textContent = 'Copy', 2000);
                        })
                        .catch(err => console.error('Copy error:', err));
                });

                const parent = block.parentElement;
                if (parent) {
                    parent.style.position = 'relative';
                    button.style.position = 'absolute';
                    button.style.top = '5px';
                    button.style.right = '5px';
                    parent.appendChild(button);
                }
            });
        }
    },


    mounted: function () {
        this.addCopyButtons();
        const utmName = 'utm_is_exist';
        if (!isUtmExist(utmName)) {
            setUtmInCookie(utmName);
        }

        const qn_uid = getCookie('qn_uid');
        tracker.userInfo({qntId: qn_uid});

        function isUtmExist(utmName) {
            const currentUtm = getCookie(utmName);
            return currentUtm !== ''
                && currentUtm !== undefined
                && currentUtm !== null
                && currentUtm !== 'undefined'
                && Object.keys(currentUtm).length !== 0;
        }

        function setUtmInCookie(utmName) {
            const metrics = utm(window.location.href, '&');
            for (const [key, value] of Object.entries(metrics)) {
                const item = `${key}=${value}`;
                document.cookie = item;
            }
            document.cookie = `${utmName}=exist`;
        }

        function getCookie(cname) {
            const name = cname + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    }
})
