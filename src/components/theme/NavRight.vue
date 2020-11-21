<template>
  <v-navigation-drawer fixed v-model="drawer" temporary right>
    <template v-slot:prepend>
      <v-list-item two-line to="/profile/jane" active-class="no-bg">
        <v-list-item-avatar>
          <img :src="repopath + '/media/images/avatar.png'">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Davy Jones</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.text" :to="item.path" exact>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="onShade">
        <v-list-item-icon>
          <v-icon>mdi-brightness-{{$shade ? '4' : '7'}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{$shade ? 'Dark' : 'Light'}} Theme</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="my-0">
          <v-switch
            @click="onShade"
            :value="$shade"
            inset
            >
          </v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="onLogout">
        <v-list-item-icon>
          <v-icon>mdi-logout-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import userMixins from '~/mixins/userMixins'

export default {
  name: 'NavRight',
  mixins: [ userMixins ],
  props: {
    items: {
      type: Array,
      default: [],
    }
  },
  data: () => ({
  }),
  computed: {
    drawer: {
      get () {
        return this.$store.state.rightNav
      },
      set (value) {
        this.$store.commit('SET_RIGHT_NAV', value)
      }
    }
  },
}
</script>
