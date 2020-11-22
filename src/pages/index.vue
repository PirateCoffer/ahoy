<template>
  <component v-bind:is="currentTabComponent"></component>
</template>

<script>
import AnonPage from '~/components/pages/AnonPage'
import ChatApp from '~/components/pages/ChatApp'
export default {
  name: 'HomePage',
  computed: {
    currentTabComponent () {
      if (this.$store.getters.user.auth)
        return ChatApp
      return AnonPage
    }
  },
  data: () => ({
  }),
  methods: {
  },
}
</script>
