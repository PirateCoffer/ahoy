<template>
  <v-app>
    <!-- Left Nav Drawer -->
    <nav-left :items="menu.primary" :title="$store.state.title" :btnClass="btnClass"></nav-left>
    <!-- Right Nav Drawer -->
    <nav-right :items="menu.user"></nav-right>
    <!-- App Bar -->
    <app-bar></app-bar>
    <!-- Main Content -->
    <v-main><nuxt /></v-main>
    <!-- Footer -->
    <v-footer inset absolute app>
      <div class="mx-auto font-weight-medium">
        &copy;&nbsp;{{ copyDate }}&nbsp;&mdash;&nbsp;<strong>{{$store.state.title}}</strong>
      </div>
    </v-footer>
    <notify />
  </v-app>
</template>

<script>
import Notify from '~/components/theme/Notify.vue'
import NavRight from '~/components/theme/NavRight.vue'
import NavLeft from '~/components/theme/NavLeft.vue'
import AppBar from '~/components/theme/AppBar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Notify,
    NavRight,
    NavLeft,
    AppBar
  },
  head () {
    let name = this.$route.name
    let titleTemplate = `%s - ` + process.env.siteSubtitle
    if (name && name !== 'index') {
      name = name.split('-').map(word => word[0].toUpperCase() + word.slice(1))
      if (name.length > 1)
        name = name.slice(1)
      titleTemplate = `%s - ${name} - ` + process.env.siteSubtitle
    }
    return {
      titleTemplate
    }
  },
  data: () => ({
    // title: process.env.siteTitle,
    menu: {
      primary: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard', path: '/account/dashboard', access: 'auth' },
        { text: 'Buy', icon: 'mdi-bitcoin', path: '/buy' },
        { text: 'Sell', icon: 'mdi-cash-multiple', path: '/sell' },
        { text: 'Post an ad', icon: 'mdi-plus-circle', path: '/offer/new', access: 'auth' },
        { text: 'News', icon: 'mdi-newspaper', path: '/blog' },
        // { text: 'FAQ', icon: 'mdi-information-variant', path: '/faq' },
        // { text: 'Knowledge', icon: 'mdi-bookshelf', path: '/kb' },
        // { text: 'Forum', icon: 'mdi-forum', path: '/forum' },
        // { text: 'Support', icon: 'mdi-face-agent', path: '/support', access: 'auth' },
        { text: 'About', icon: 'mdi-coffee', path: '/about' },
        { text: 'Chat', icon: 'mdi-message', path: '/chat' },
        // { text: 'Blog', icon: 'mdi-post', path: '/blog' },
        // { text: 'New Offer', icon: 'mdi-plus-circle', path: '/offer/new' },
        // { text: 'Offer', icon: 'mdi-ticket', path: '/offer/1234' },
        // { text: 'Offers', icon: 'mdi-store', path: '/offers' },
        // { text: 'Trade', icon: 'mdi-ticket', path: '/trade/1234' },
      ],
      secondary: [
        { text: 'Bot', icon: 'mdi-robot', path: '/bot' },
        // { text: 'Wallet', icon: 'mdi-wallet', path: '/wallet' },
        // { text: 'Vote', icon: 'mdi-ballot', path: '/vote' },
        // { text: 'Social', icon: 'mdi-account-supervisor-circle', path: '/social' },
        // { text: 'P2P', icon: 'mdi-account-switch', path: '/p2p' },
        // { text: 'News', icon: 'mdi-newspaper', path: '/news' },
        // { text: 'Xper', icon: 'mdi-flask', path: '/xper' },
      ],
      user: [
        { text: 'Settings', icon: 'mdi-cog', path: '/account/settings' },
        { text: 'Wallet', icon: 'mdi-wallet', path: '/account/wallet' },
        { text: 'Open trades & ads', icon: 'mdi-briefcase', path: '/account/dashboard' },
        { text: 'Completed trades', icon: 'mdi-check-circle', path: '/account/completed' },
        { text: 'Cancelled trades', icon: 'mdi-close-box', path: '/account/cancelled' },
        { text: 'Affiliate program', icon: 'mdi-certificate', path: '/account/affiliate' },
        // { text: 'Trades', icon: 'mdi-receipt', path: '/account/trades' },
      ]
    },
    copyDate: new Date().getFullYear(),
  }),
  created () {
    this.$store.commit('user/INIT_USER')
    this.$vuetify.theme.dark = this.$store.getters['user/shade']
  },
  methods: {
    btnClass (item) {
      if (item.path !== '/blog')
        return {}
      if (this.$route.path.match(/^\/article/))
        return { 'v-btn--active': true }
      return {}
    },
  }
}
</script>

<style lang="stylus">
  .clickable
    cursor pointer
  .text-no-break
    word-break normal
  .no-bg:before
    background none !important
  .home-btn
    text-transform none !important
    &:before
    &:hover:before
      background none !important
</style>
