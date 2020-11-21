<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <logo />
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
      <v-col cols="12" sm="8" lg="6" class="mx-auto">
        <v-container>
          <v-row dense>
            <v-col cols="12" v-for="page in pages" :key="page.id">
              <v-card :to="`/article/${page.slug}`" hover>
                <v-card-title>
                  <span>{{page.title}}</span>
                  <v-spacer></v-spacer>
                  <span class="caption grey--text">{{page.updatedAt | datetime}}</span>
                </v-card-title>
                <v-card-text v-if="page.description" v-text="page.description" />
                <v-card-text v-else><nuxt-content :document="page.summary" /></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/theme/Logo'

export default {
  name: 'BlogPage',
  components: {
    Logo
  },
  methods: {
    onClick () {
      log('hello')
      this.notify('Arrr')
    },
  },
  async asyncData ({ $content }) {
    let content = await $content('articles').fetch()
    content = content.map(page => {
      page.summary = { body: { type: 'root', children: page.body.children.slice(0, 5) }}
      return page
    })
    // log({ content })
    return {
      pages: content,
    }
    // return $content('articles/article-1').fetch().then(page => ({ page }))
  },
}
</script>
