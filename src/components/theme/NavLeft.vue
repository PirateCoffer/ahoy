<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    mobile-breakpoint="600"
    :mini-variant="!$mobile"
    >
    <v-list class="pt-0">
      <v-list-item link to="/" class="px-2 px-sm-0">
        <v-list-item-avatar size="40" class="mr-6 mx-sm-auto">
          <v-img :src="repopath + '/media/images/logo.png'"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h5">{{title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      
      <v-tooltip right v-for="item in computedItems" :key="item.id" transition="scroll-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-list-item link v-bind="attrs" v-on="$mobile ? {} : on" :to="item.path" :class="btnClass(item)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <span>{{item.text}}</span>
      </v-tooltip>

      <v-divider v-if="false"></v-divider>
      <v-list-item v-if="false" link @click.stop="mini = !mini">
        <v-list-item-icon>
          <v-icon v-if="mini">mdi-chevron-right</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>&nbsp;</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider v-if="false"></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavLeft',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: [],
    },
    btnClass: {
      type: Function,
      default (item) {
        return {}
      },
    }
  },
  data: () => ({
  }),
  computed: {
    computedItems () {
      return this.items.filter(item => {
        if (item.access) {
          if (this.$auth)
            return true
          return false
        }
        return true
      })
    },
    drawer: {
      get () {
        return this.$store.state.leftNav
      },
      set (value) {
        this.$store.commit('SET_LEFT_NAV', value)
      }
    },
  },
  methods: {
  },
}
</script>
