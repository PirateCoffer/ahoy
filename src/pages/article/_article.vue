<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            {{title}}
          </v-card-title>
          <v-card-text>
            <nuxt-content :document="body" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ArticlePage',
  validate ({ params, $content }) {
    // log({ $content })
    return true
  },
  data: () => ({
  }),
  computed: {
  },
  mounted () {
  },
  methods: {
  },
  async asyncData ({ params, $content }) {
    let content = await $content(`articles/${params.article}`).fetch()
    return {
      body: content,
      title: content.title,
    }
  },
}
</script>

<style lang="stylus">
*:focus
  outline none
</style>
