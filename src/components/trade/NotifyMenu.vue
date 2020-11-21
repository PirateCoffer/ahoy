<template>
  <v-menu offset-y left v-model="open" min-width="333" v-if="$auth">
    <template v-slot:activator="{ on, attrs }">
      <v-badge
        top
        :content="unread"
        color="green"
        offset-y="21"
        offset-x="24"
        :value="unread"
        >
        <v-btn large icon v-bind="attrs" v-on="on" class="mr-2">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-badge>
    </template>
    <v-card tile>
      <v-card-title class="text-h5">New Notifications</v-card-title>
      <v-card-subtitle class="pink--text">{{items.length}} new notifications</v-card-subtitle>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" link>
          <v-list-item-icon class="d-flex flex-column mr-4 mb-1 text-center">
            <v-btn fab x-small depressed color="blue">AB</v-btn>
            <div style="font-size: 11px" class="pt-2">9:32</div>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn x-large rounded color="primary" class="px-7 mt-3 mb-4">
          Send New Message<v-icon right>mdi-send</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'NotifyMenu',
  data: () => ({
    open: false,
    unread: 4,
  }),
  computed: {
    items () {
      return this.$store.state.user.notif.items
    }
  },
  watch: {
    open (cur, pre) {
      if (cur)
        this.unread = 0
    },
  },
}
</script>
