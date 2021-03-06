import App from './App.vue'
import './assets/tailwind.css'
import './assets/modernizr-webp.js'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"

const messages = {
    'en': {
        title: {
            swiftui: 'Built with SwiftUI & Combine',
            cat_browse: 'Browse',
            cat_retrieve: 'Retrieve',
            cat_customize: 'Customize',
            cat_network: 'Network',
            cat_ele_category: 'Category',
            cat_ele_detail: 'Detail',
            cat_ele_comment: 'Comment',
            cat_ele_hath_archive: 'Hath Archive',
            cat_ele_torrent: 'Torrent',
            cat_ele_ehSetting: 'E-Hentai Setting',
            cat_ele_filter: 'Filter',
            cat_ele_setting: 'Setting',
            cat_ele_domainFronting: 'Bypass SNI Filtering'
        },
        desc: {
            app: 'An unofficial E-Hentai app for iOS.',
            system: 'Requires iOS / iPadOS 15.0 or later.',
            swiftui: 'Smooth, elegant, powerful.',
            cat_ele_category: 'EhPanda supports almost every E-Hentai categories. Download feature is not available at present though.',
            cat_ele_detail: 'Help you know more about this gallery and find more associated contents.',
            cat_ele_comment: 'You can join the discussion by posting / editing a comment, or giving a reaction to it.',
            cat_ele_hath_archive: 'Happen to own a Hath client? Thanks for your contribution! Here\'s a feature for you.',
            cat_ele_torrent_s1: 'Save your best memory,',
            cat_ele_torrent_s2: 'once and for all.',
            cat_ele_ehSetting: 'Handy, native, fully localized. The best way to configure your E-Hentai account on mobile devices.',
            cat_ele_filter: 'Filter settings will be automatically applied and eventually affect the search result.',
            cat_ele_setting: 'You can login, turn on optional features or modify the app icon, tint color here.',
            cat_ele_domainFronting: 'Hentai contents are fantastic. We believe watching them should be a fundamental right for any adults. We noticed there are people who cannot access E-Hentai due to a limited network. Hey, we here to help, turn it on and EhPanda will handle everything.'
        }
    },
    'de': {
        title: {
            swiftui: 'Mit SwiftUI & Combine erstellt',
            cat_browse: 'Finde was du willst',
            cat_retrieve: 'Herunterladen',
            cat_customize: 'Anpassbar',
            cat_network: 'Network',
            cat_ele_category: 'Kategorien',
            cat_ele_detail: 'Detaillierte Beschreibungen',
            cat_ele_comment: 'Kommentiere',
            cat_ele_hath_archive: 'Hath Archiv',
            cat_ele_torrent: 'Torrent',
            cat_ele_ehSetting: 'E-Hentai Setting',
            cat_ele_filter: 'Filtern',
            cat_ele_setting: 'Einstellungen',
            cat_ele_domainFronting: 'Bypass SNI Filtering'
        },
        desc: {
            app: 'Eine inoffizielle E-Hentai app f??r iOS.',
            system: 'Erfordert iOS / iPadOS 15.0 oder neuer.',
            swiftui: 'Einfach, Elegant, M??chtig.',
            cat_ele_category: 'EhPanda unterst??tzt fast alle E-Hentai Kategorien.',
            cat_ele_detail: 'helfen dir, mehr ??ber Galerien zu erfahren und ??hnliche zu finden',
            cat_ele_comment: 'Nimm an der Diskussion teil, indem du Kommentare verfasst oder bearbeitest und auf andere reagierst',
            cat_ele_hath_archive: 'Hast du einen Hath client? Danke f??r deine Unterst??tzung, diese Funktion ist f??r dich',
            cat_ele_torrent_s1: 'Speichere deine besten Erinnerungen,',
            cat_ele_torrent_s2: 'ein f??r alle Mal.',
            cat_ele_ehSetting: 'Handy, native, fully localized. The best way to configure your E-Hentai account on mobile devices.', 
            cat_ele_filter: 'Filter-Einstellungen werden automatisch angewendet und helfen dir genau das zu finden nach dem du suchst.',
            cat_ele_setting: 'Hier kannst du dich einloggen und die App an deinen Geschmack anpassen',
            cat_ele_domainFronting: 'Hentai contents are fantastic. We believe watching them should be a fundamental right for any adults. We noticed there are people who cannot access E-Hentai due to a limited network. Hey, we here to help, turn it on and EhPanda will handle everything.' 
         }
    },
    'ko': {
        title: {
            swiftui: 'SwiftUI & Combine ?????? ????????????',
            cat_browse: '??????',
            cat_retrieve: '??????',
            cat_customize: '?????? ??????',
            cat_network: '????????????',
            cat_ele_category: '????????????',
            cat_ele_detail: '????????????',
            cat_ele_comment: '??????',
            cat_ele_hath_archive: 'Hath ??????',
            cat_ele_torrent: '?????????',
            cat_ele_ehSetting: 'E-Hentai ??????',
            cat_ele_filter: '??????',
            cat_ele_setting: '??????',
            cat_ele_domainFronting: 'SNI?????? ??????'
        },
        desc: {
            app: 'iOS??? ????????? E-Hentai ??????????????????',
            system: 'iOS / iPadOS 15.0 ??????',
            swiftui: 'Smooth, elegant, powerful.',
            cat_ele_category: 'EhPanda??? ?????? ?????? E-Hentai??? ??????????????? ???????????????. ???????????? ?????? ???????????? ???????????? ??? ?????????.',
            cat_ele_detail: '??? ???????????? ??????????????? ????????? ????????? ??????????????? ????????? ?????????????????????.',
            cat_ele_comment: '?????? ?????????, ??????, ????????? ????????? ????????? Hentai?????? ????????? ???????????????.',
            cat_ele_hath_archive: 'Hath??????????????? ????????????? E-Hentai??? ?????? ????????? ???????????????! ??? ?????? ????????? ?????? ????????? ???????????????.',
            cat_ele_torrent_s1: '?????? ?????? ?????????',
            cat_ele_torrent_s2: '????????? ???????????????.',
            cat_ele_ehSetting: '??????, ????????????, ?????? ?????????????????????. ????????? ???????????? E-Hentai ????????? ???????????? ?????? ?????? ???????????????.',
            cat_ele_filter: '?????? ????????? ???????????? ????????????, ?????? ????????? ????????? ????????????.',
            cat_ele_setting: '????????? ??????????????? ????????? ????????? ???????????? ???????????? ????????? ????????? ??? ?????????.',
            cat_ele_domainFronting: 'Hentai??? ???????????? ???????????????. ????????? ????????? ?????? ?????? ?????? ??????????????? ???????????? ????????? ????????? ????????????. ????????? ??????????????? ????????? E-Hentai??? ????????? ??? ?????? ???????????? ????????? ?????? ?????? ???????????????. ?????????, ????????? ???????????? ????????????! ?????? ?????? EhPanda??? ??? ????????? ??? ?????????.'
        }
    },
    'ja': {
        title: {
            swiftui: 'SwiftUI & Combine ?????????',
            cat_browse: '??????',
            cat_retrieve: '??????',
            cat_customize: '??????????????????',
            cat_network: '??????????????????',
            cat_ele_category: '???????????????',
            cat_ele_detail: '??????',
            cat_ele_comment: '????????????',
            cat_ele_hath_archive: 'Hath ???????????????',
            cat_ele_torrent: '????????????',
            cat_ele_ehSetting: 'E-Hentai ??????',
            cat_ele_filter: '???????????????',
            cat_ele_setting: '??????',
            cat_ele_domainFronting: 'SNI ???????????????????????????'
        },
        desc: {
            app: 'iOS ???????????? E-Hentai ?????????',
            system: 'iOS???iPadOS 15.0 ???????????????????????????????????????',
            swiftui: '???????????????????????????????????????',
            cat_ele_category: 'EhPanda ????????????????????? E-Hentai ????????????????????????????????????????????????????????????????????????????????????',
            cat_ele_detail: '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
            cat_ele_comment: '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
            cat_ele_hath_archive: 'Hath ???????????????????????????????????????????????????????????????????????????????????????????????? Hath ????????????????????????????????????????????????',
            cat_ele_torrent_s1: '????????????????????????',
            cat_ele_torrent_s2: '??????????????????',
            cat_ele_ehSetting: '???????????????????????????????????????????????????????????????????????????????????????????????? E-Hentai ????????????????????????',
            cat_ele_filter: '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
            cat_ele_setting: '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
            cat_ele_domainFronting: '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????E-Hentai ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'
        }
    },
    'zh': {
        title: {
            swiftui: '??? SwiftUI & Combine ??????',
            cat_browse: '??????',
            cat_retrieve: '??????',
            cat_customize: '??????',
            cat_network: '??????',
            cat_ele_category: '??????',
            cat_ele_detail: '??????',
            cat_ele_comment: '??????',
            cat_ele_hath_archive: 'Hath ??????',
            cat_ele_torrent: '??????',
            cat_ele_ehSetting: 'E-Hentai ??????',
            cat_ele_filter: '?????????',
            cat_ele_setting: '??????',
            cat_ele_domainFronting: '?????? SNI ??????'
        },
        desc: {
            app: 'iOS ???????????? E-Hentai ????????????',
            system: '????????? iOS / iPadOS 15.0 ????????????',
            swiftui: '???????????????????????????',
            cat_ele_category: 'EhPanda ?????????????????? E-Hentai ????????????????????????????????????????????????',
            cat_ele_detail: '?????????????????????????????????????????????????????????',
            cat_ele_comment: '?????????????????????????????????????????????????????????????????????',
            cat_ele_hath_archive: '??????????????? Hath ??????????????????????????? E-Hentai ?????????????????????????????????????????????',
            cat_ele_torrent_s1: '??????????????????',
            cat_ele_torrent_s2: '??????????????????',
            cat_ele_ehSetting: '????????????????????????????????????????????????????????? E-Hentai ????????????????????????',
            cat_ele_filter: '????????????????????????????????????????????????????????????',
            cat_ele_setting: '?????????????????????????????????????????????????????? App ?????????????????????',
            cat_ele_domainFronting: '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? E-Hentai??????????????????????????????????????????????????????????????????????????? EhPanda ??????'
        }
    },
    'zh-CN': {
        title: {
            swiftui: '??? SwiftUI & Combine ??????',
            cat_browse: '??????',
            cat_retrieve: '??????',
            cat_customize: '?????????',
            cat_network: '??????',
            cat_ele_category: '??????',
            cat_ele_detail: '??????',
            cat_ele_comment: '??????',
            cat_ele_hath_archive: 'Hath ??????',
            cat_ele_torrent: '??????',
            cat_ele_ehSetting: 'E-Hentai ??????',
            cat_ele_filter: '?????????',
            cat_ele_setting: '??????',
            cat_ele_domainFronting: '?????? SNI ??????'
        },
        desc: {
            app: 'iOS ???????????? E-Hentai ????????????',
            system: '??????iOS / iPadOS 15.0 ????????????',
            swiftui: '???????????????????????????',
            cat_ele_category: 'EhPanda ??? E-Hentai ????????????????????????????????????????????????????????????????????????',
            cat_ele_detail: '?????????????????????????????????????????????????????????',
            cat_ele_comment: '?????????????????????????????????????????????????????????????????????',
            cat_ele_hath_archive: '??????????????? Hath ??????????????????????????? E-Hentai ?????????????????????????????????????????????',
            cat_ele_torrent_s1: '??????????????????',
            cat_ele_torrent_s2: '??????????????????',
            cat_ele_ehSetting: '????????????????????????????????????????????????????????? E-Hentai ????????????????????????',
            cat_ele_filter: '?????????????????????????????????????????????????????????????????????',
            cat_ele_setting: '?????????????????????????????????????????????????????? App ?????????????????????',
            cat_ele_domainFronting: '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? E-Hentai??????????????????????????????????????????????????????????????????????????? EhPanda ??????'
        }
    }
}

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages,
})

library.add(faGithub)
library.add(faDiscord)
library.add(faTelegram)
library.add(faEnvelope)

createApp(App).use(i18n)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')