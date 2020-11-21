<template>
  <v-app>
    <v-navigation-drawer app>
    </v-navigation-drawer>
    <v-app-bar app>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app>
      &copy;&nbsp;{{ copyDate }}&nbsp;&mdash;&nbsp;<strong>{{title}}</strong>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: process.env.siteName,
    copyDate: new Date().getFullYear(),
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>
