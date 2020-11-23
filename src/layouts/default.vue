<template> 
  <v-app>
    <!-- App Bar -->
    <v-app-bar
      app
      clipped-right
      flat
      height="68"
      >
      <logo-btn class="pl-0 ml-0 mr-4"/>

      <v-app-bar-nav-icon @click.stop="leftNav = !leftNav" class="hidden-md-and-up" v-if="$auth"/>

      <v-divider vertical class="mr-6"></v-divider>

      <v-toolbar-title class="pl-0 d-flex align-center" v-if="$auth">
        {{user.name}}&nbsp;<v-icon small color="yellow darken-3">mdi-star</v-icon>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-responsive max-width="178" v-if="$auth">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo
          prepend-inner-icon="mdi-magnify"
          clearable
          @click:prepend-inner=""
        ></v-text-field>
      </v-responsive>
      <v-btn large icon class="mx-1" @click="rightNav = true" v-if="$auth">
        <v-avatar size="36" :color="account.color">
          {{account.avatar}}
        </v-avatar>
      </v-btn>
      <v-toolbar-items class="ml-3" v-else>
        <v-btn text to="/user/sign-up">Register</v-btn>
        <v-btn text to="/user/sign-in">Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- Left Nav -->
    <v-navigation-drawer
      app
      mobile-breakpoint="960"
      v-model="leftNav"
      v-if="$auth"
      >
      <template v-slot:prepend>
        <v-list-item>
          <v-responsive max-width="178">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo
              prepend-inner-icon="mdi-magnify"
              @click:prepend-inner=""
              clearable
            ></v-text-field>
          </v-responsive>
          <v-list-item-icon>
            <v-btn @click.stop="dialog.addContact = !dialog.addContact" icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list shaped dense>
        <v-list-item
          v-for="(fren, key) in channels"
          :key="fren.id"
          :input-value="channel === key"
          @click="channel = key"
          >
          <v-list-item-avatar size="42">
            <v-avatar :color="users[key].color" size="42">{{users[key].avatar}}</v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{users[key].name}}</v-list-item-title>
            <v-list-item-subtitle class="d-flex align-center">
              <v-avatar color="green" size="8" class=""></v-avatar>
              <span class="grey--text">&nbsp;active</span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar size="26">
            <v-avatar size="26" color="green" class="body-2">
              {{channels[key].unread}}
            </v-avatar>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Right Nav -->
    <v-navigation-drawer
      app
      right
      v-model="rightNav"
      temporary
      >
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-avatar size="45">
            <v-avatar :color="account.color" size="45">
              {{account.avatar}}
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{account.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list>
        <v-list-item @click="dialog.settings = true; rightNav = false">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item @click="onLogout">
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <v-dialog
      v-model="dialog.addContact"
      :fullscreen="$mobile"
      max-width="500"
      >
      <v-card flat tile>
        <v-card-title>
          <span>Add New Contact</span>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="dialog.addContact = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Name" hide-details v-model="form.addContact.name" />
              <v-text-field label="Username" hide-details v-model="form.addContact.username" />
              <v-text-field label="Avatar" hide-details v-model="form.addContact.avatar" />
              <v-text-field label="Color" hide-details v-model="form.addContact.color" />
            </v-col>
            <v-col cols="12">
              <v-btn block color="primary" @click="addContact">Submit</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog.settings"
      :fullscreen="$mobile"
      max-width="500"
      >
      <v-card flat tile>
        <v-card-title>
          <span>User Settings</span>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="dialog.settings = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Name" hide-details v-model="form.settings.name" />
              <v-text-field label="Username" hide-details v-model="form.settings.username" />
              <v-text-field label="Avatar" hide-details v-model="form.settings.avatar" />
              <v-text-field label="Color" hide-details v-model="form.settings.color" />
            </v-col>
            <v-col cols="12">
              <v-btn block color="primary" @click="saveSettings">Save</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import userMixin from '~/mixins/userMixins'
import LogoBtn from '~/components/theme/LogoBtn'

export default {
  name: 'ChatLayout',
  components: {
    LogoBtn,
  },
  mixins: [userMixin],
  data: () => ({
    form: {
      settings: {
        username: 'davy',
        name: 'Davy Jones',
        avatar: 'DJ',
        color: 'green',
      },
      addContact: {
        username: 'charlie',
        name: 'Charlie',
        avatar: 'C',
        color: 'orange',
      },
    },
    dialog: {
      addContact: false,
      settings: false,
    },
    files: [],
    message: '',
    number: 30,
    leftNav: null,
  }),
  computed: {
    account () {
      return this.$store.state.chat.account
    },
    user () {
      return this.users[this.channel]
    },
    channels () {
      return this.$store.state.chat.channels
    },
    channel: {
      get () {
        return this.$store.state.chat.channel
      },
      set (channel) {
        this.$store.dispatch('chat/setChannel', { channel })
      },
    },
    users () {
      return this.$store.state.chat.users
    },
    rightNav: {
      get () {
        return this.$store.state.rightNav
      },
      set (value) {
        this.$store.commit('SET_RIGHT_NAV', value)
      }
    },
  },
  created () {
    this.$vuetify.theme.dark = this.$store.getters['user/shade']
  },
  methods: {
    saveSettings () {
      this.dialog.settings = false
      this.$store.dispatch('chat/setAccount', this.form.settings)
    },
    addContact () {
      this.dialog.addContact = false
      this.$store.dispatch('chat/addUser', this.form.addContact)
    },
  },
}
</script>

<style lang="stylus">
  .clickable
    cursor pointer
  .text-no-break
    word-break normal
  .no-bg:before
    background none !important
  .home-btn
    text-transform none !important
    &:before
    &:hover:before
      background none !important

  .chat-field.v-textarea.v-text-field--solo .v-input__prepend-inner
    margin-top 0
    padding-top 0
    .v-file-input
      margin-top 0
      padding-top 0
</style>

