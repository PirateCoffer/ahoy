<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            {{trade}}
            <v-spacer></v-spacer>
            <v-menu offset-y left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" @click="">
                  <v-list-item-icon><v-icon>mdi-{{ item.icon }}</v-icon></v-list-item-icon>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TradePage',
  validate ({ params }) {
    return true
  },
  data: () => ({
    items: [
      { title: 'Click Me', icon: 'coffee' },
      { title: 'Click Me', icon: 'coffee' },
      { title: 'Click Me', icon: 'coffee' },
      { title: 'Click Me', icon: 'coffee' },
    ],
    trade: '1234',
  }),
  computed: {
  },
  mounted () {
  },
  methods: {
  },
  // async asyncData({ params }) {
  //   return params
  // }
}
</script>

<style lang="stylus">
*:focus
  outline none
</style>
