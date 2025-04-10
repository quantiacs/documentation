import { createApp } from 'vue'
import './vuepress/styles/theme.styl'
import './sphinx-theme.styl'
import { utm } from './utm'
import * as tracker from './tracker'
import OutboundLink from './OutboundLink.vue'
import Navbar from './Navbar.vue'
import NavLinks from './NavLinks.vue'
import Sidebar from './Sidebar.vue'
import Page from './Page.vue'
import Footer from './Footer.vue'
import AboutFeedback from "./AboutFeedback"

const app = createApp({
    data() {
        return {
            swUpdateEvent: null
        }
    },
    methods: {
        addCopyButtons() {
            const codeBlocks = document.querySelectorAll('.highlight pre')
            codeBlocks.forEach(block => {
                const button = document.createElement('button')
                button.textContent = 'Copy'
                button.className = 'copy-button'
                button.addEventListener('click', () => {
                    const code = block.innerText
                    navigator.clipboard.writeText(code)
                        .then(() => {
                            button.textContent = 'Copied!'
                            setTimeout(() => button.textContent = 'Copy', 2000)
                        })
                        .catch(err => console.error('Copy error:', err))
                })
                const parent = block.parentElement
                if (parent) {
                    parent.style.position = 'relative'
                    button.style.position = 'absolute'
                    button.style.top = '5px'
                    button.style.right = '5px'
                    parent.appendChild(button)
                }
            })
        }
    },
    mounted() {
        this.addCopyButtons()
        const utmName = 'utm_is_exist'
        if (!isUtmExist(utmName)) {
            setUtmInCookie(utmName)
        }
        const qn_uid = getCookie('qn_uid')
        tracker.userInfo({ qntId: qn_uid })

        function isUtmExist(name) {
            const currentUtm = getCookie(name)
            return currentUtm !== ''
                && currentUtm !== undefined
                && currentUtm !== null
                && currentUtm !== 'undefined'
                && Object.keys(currentUtm).length !== 0
        }

        function setUtmInCookie(name) {
            const metrics = utm(window.location.href, '&')
            for (const [key, value] of Object.entries(metrics)) {
                document.cookie = `${key}=${value}`
            }
            document.cookie = `${name}=exist`
        }

        function getCookie(cname) {
            const name = cname + "="
            const decodedCookie = decodeURIComponent(document.cookie)
            let ca = decodedCookie.split(';')
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i]
                while (c.charAt(0) === ' ') {
                    c = c.substring(1)
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length)
                }
            }
            return ""
        }
    }
})

app.component('outboundlink', OutboundLink)
app.component('navbar', Navbar)
app.component('navlinks', NavLinks)
app.component('sidebar', Sidebar)
app.component('page', Page)
app.component('footer-quantiacs', Footer)
app.component('about-feedback', AboutFeedback)
app.component('router-link', {
    props: ['to'],
    template: '<a :href="to"><slot></slot></a>'
})

app.mount('#app', true)
