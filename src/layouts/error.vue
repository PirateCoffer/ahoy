<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col sm="8" md="6">
        <v-card>
          <v-card-title class="text-h4">{{ code }} Error</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-3"><h2 class="text-h5">{{ message }}</h2></v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn v-if="button" color="primary" nuxt to="/">Return Home</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ['error'],
  data: () => ({
    messages: {
      'DEF': { title: 'Error', body: 'An error occurred' },
      '404': { title: 'Not Found', body: 'Page not found' },
      '403': { title: 'Access Denied', body: 'Access is forbidden' },
      '500': { title: 'Server Error', body: 'A server error has occured' },
    },
  }),
  computed: {
    message () {
      return _.get(this.messages, [ this.code, 'body' ], this.messages.DEF.body)
    },
    code () {
      return this.error.statusCode
    },
    button () {
      return !!this.code.toString().match(/(403|404|500)/)
    },
  },
  head () {
    const errCode = _.get(this.messages, [ this.code, 'title' ], this.messages.DEF.title)
    return {
      titleTemplate: `%s - [${errCode}] - ${process.env.siteTitle}`,
    }
  },
  created () {
  },
  mounted () {
    if (process.env.dev) {
      log(`System Error :: ${this.error.statusCode} :: ${this.error.message}`)
    }
  }
}
</script>

<style scoped>
</style>
