<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-badge
        offset-y="14"
        offset-x="14"
        color="green"
        :content="notifications"
        left
        :value="notifications > 0"
        class="mr-2"
        style="cursor: pointer"
        >
        <v-icon size="28" v-bind="attrs" v-on="on">mdi-bell</v-icon>
      </v-badge>
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card-text>
        <v-switch v-model="message" color="purple" label="Enable messages" hide-details></v-switch>
        <v-switch v-model="hints" color="purple" label="Enable hints" hide-details></v-switch>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="menu = false">Cancel</v-btn>
        <v-btn color="primary" text @click="menu = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
      notifications: 3,
    }),
  }
</script>
