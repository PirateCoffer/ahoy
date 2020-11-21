export default {
  data: () => ({
    repopath: process.env.repopath,
  }),
  methods: {
    notify (payload, label = 'results') {
      this.$store.dispatch('notify/notify', payload)
    },
  },
  filters: {
    percent: (value, format = '0,0%') => numeral(value).format(format),
    number: (value, format = '0,0') => numeral(value).format(format),
    dollars: (value, format = '$0,0.00') => numeral(value).format(format),
    date: (value, format = 'MMMM Do, YYYY') => moment(value).format(format),
    time: (value, format = 'h:mm a') => moment(value).format(format),
    datetime: (value, format = 'MMMM Do, YYYY, h:mm a') => moment(value).format(format),
    // seconds: formatSeconds,
  },
  computed: {
    $auth () {
      return this.$store.state.user.auth
    },
    $shade () {
      return this.$store.state.user.shade
    },
    $bp () {
      return this.$vuetify.breakpoint
    },
    $mobile () {
      return this.$bp.xsOnly
    },
  },
}
