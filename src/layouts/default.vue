<template> 
  <v-app>
    <!-- App Bar -->
    <v-app-bar
      app
      clipped-right
      flat
      height="68"
      >
      <v-app-bar-nav-icon @click.stop="leftNav = !leftNav" class="hidden-md-and-up" v-if="$auth"/>
      <v-toolbar-title class="pl-0 d-flex align-center" v-if="$auth">
        {{user.name}}&nbsp;<v-icon small color="yellow darken-3">mdi-star</v-icon>
      </v-toolbar-title>
      <v-toolbar-items class="ml-3" v-else>
        <v-btn text to="/">Ahoy!</v-btn>
      </v-toolbar-items>
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
        <v-list-item @click="selectChan(key)" v-for="(fren, key) in channels" :key="fren.id" :input-value="channel === key">
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
              <v-text-field label="Username" hide-details></v-text-field>
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
              <v-text-field label="Name" hide-details v-model="account.name" />
              <v-text-field label="Username" hide-details v-model="account.username" />
              <v-text-field label="Avatar" hide-details v-model="account.avatar" />
              <v-text-field label="Color" hide-details v-model="account.color" />
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

export default {
  name: 'ChatLayout',
  components: {
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
    },
    account: {
      username: 'davy',
      name: 'Davy Jones',
      avatar: 'DJ',
      color: 'green',
    },
    channels: {
      alice: {
        recent: {},
        unread: 0,
        members: {
          davy: {},
          alice: {},
        },
        messages: [],
      },
      bob: {
        recent: {},
        unread: 0,
        members: {
          davy: {},
          bob: {},
        },
        messages: [],
      },
    },
    channel: 'alice',
    dialog: {
      addContact: false,
      settings: false,
    },
    files: [],
    message: '',
    number: 30,
    leftNav: null,
    // rightNav: false,
    users: {
      alice: { username: 'alice', name: 'Alice', avatar: 'A', color: 'pink' },
      bob: { username: 'bob', name: 'Bob', avatar: 'B', color: 'teal' },
    },
  }),
  computed: {
    user () {
      return this.users[this.channel]
    },
    messages: {
      get () {
        return this.channels[this.channel].messages
      },
      set (val) {
        this.channels[this.channel].messages.push(val)
      },
    },
    recent: {
      get () {
        return this.channels[this.channel].recent
      },
      set (val) {
        this.channels[this.channel].recent = val
      },
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
    this.channel = 'alice'
    for (let ii = 0; ii < this.number; ii++)
      this.addMessage(`Message ${ii + 1}`)
    this.channel = 'bob'
    for (let ii = 0; ii < this.number; ii++)
      this.addMessage(`Message ${ii + 1}`)
    this.channel = 'alice'

    this.$vuetify.theme.dark = true
  },
  mounted () {
    // if (this.$auth) {
    //   this.updateScroll()
    //   this.addEvent(window, 'resize', this.updateScroll.bind(this))
    // }
  },
  methods: {
    saveSettings () {
      this.dialog.settings = false
    },
    addContact () {
      this.dialog.addContact = false
    },
    selectChan (username) {
      this.channel = username
      setTimeout(() => {
        this.updateScroll()
      }, 0)
    },
    addEvent (object, type, callback) {
      if (object == null || typeof object === 'undefined')
        return
      if (object.addEventListener) {
        object.addEventListener(type, callback, false)
      } else if (object.attachEvent) {
        object.attachEvent(`on${type}`, callback)
      } else {
        object[`on${type}`] = callback
      }
    },
    updateScroll () {
      const scroller = this.$refs.scroller
      scroller.scrollTop = scroller.scrollHeight
    },
    addMessage (message) {
      message = message || this.message
      message = message.replace(/\r?\n/g, '<br />')
      const un = Math.random() > 0.5 ? 'me' : 'other'
      const user = un === 'me' ? this.account : this.user
      const msg = {
        user: user.username,
        name: user.name,
        avatar: user.avatar,
        color: user.color,
        time: Date.now(),
        message,
      }
      if (this.recent.user === msg.user)
        msg.multi = true
      else
        if (un === 'other')
          this.channels[user.username].unread++
      this.recent = msg
      this.messages = msg
    },
    onSend () {
      this.addMessage()
      this.message = ''
      setTimeout(() => {
        this.updateScroll()
      }, 0)
    },
  },
}
</script>

<style lang="stylus">
  .chat-field.v-textarea.v-text-field--solo .v-input__prepend-inner
    margin-top 0
    padding-top 0
    .v-file-input
      margin-top 0
      padding-top 0
</style>

