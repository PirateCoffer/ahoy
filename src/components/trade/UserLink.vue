<template>
  <span>
    <n-link :to="userpath" class="user-link">{{ username }}</n-link>
    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-if="active" color="green" :size="size">mdi-checkbox-blank-circle</v-icon>
        <v-icon v-on="on" v-else color="grey" :size="size">mdi-checkbox-blank-circle-outline</v-icon>
      </template>
      <span>Last seen {{lastSeen}}</span>
    </v-tooltip>
  </span>
</template>

<script>
export default {
  name: 'UserLinkComponent',
  props: {
    username: { type: String },
    active: { type: Boolean },
    lastSeen: { type: String },
    size: { type: [String, Number], default: 18 },
  },
  data: () => ({
  }),
  computed: {
    userpath () {
      return `/profile/${this.username}`
    },
  },
}
</script>

<style lang="stylus">
</style>
