export default {
  methods: {
    onLogin (username, password, path = '/') {
      try {
        this.$store.dispatch('user/login', { username, password })
        // this.$router.go() // reload
        this.$router.push(path)
        this.notify('Logged In')
      } catch (err) {
        this.notify(err)
      }
    },
    onLogout () {
      this.$store.dispatch('user/logout')
      this.$store.commit('SET_RIGHT_NAV', false)
      // this.$router.go() // reload
      this.$router.push('/')
      this.notify('Logged Out')
    },
    onShade () {
      this.$store.dispatch('user/toggleShade').then(shade => {
        this.$vuetify.theme.dark = shade
        // this.notify(`${shade ? 'Dark' : 'Light'} Theme Enabled`)
      })
    },
  },
}
