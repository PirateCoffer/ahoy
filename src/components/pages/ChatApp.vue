<template>
  <div class="fill-height d-flex flex-column">
    <div class="flex-grow-1" style="position: relative;">
      <div
        style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;"
        class="d-flex flex-column justify-end"
        >
        <div ref="scroller" style="overflow: auto;">
          <div
            v-for="item in messages"
            :key="item.id"
            class="d-flex align-start"
            >
            <v-avatar
              v-if="!item.multi"
              :color="item.color"
              class="ma-2 ml-3"
              size="40"
              >
              {{item.avatar}}
            </v-avatar>
            <v-avatar v-else class="ma-2 ml-3" height="0" size="40"></v-avatar>
            <div :class="`flex-grow-1 d-flex flex-column pa-2 pb-1 ${!item.multi ? 'pt-3' : 'pt-0'}`">
              <div v-if="!item.multi" class="body-1">
                <span class="body-1 grey--text text--lighten-3">{{item.name}}</span>
                <span class="caption grey--text text--lighten-1">&nbsp;</span>
                <span class="caption grey--text text--darken-1">{{item.time | datetime}}</span>
              </div>
              <div class="body-2 text-justify grey--text" v-html="item.message"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pa-2 pb-4 grey darken-3">
      <v-text-field
        v-if="false"
        autofocus
        hide-details
        single-line
        label="Message"
        solo
        v-model="message"
        @keyup.enter.exact="onSend"
        append-icon="mdi-send"
        @click:append="onSend"
      ></v-text-field>
      <v-textarea
        v-if="true"
        rows="1"
        auto-grow
        autofocus
        hide-details
        single-line
        label="Message"
        solo
        v-model="message"
        ref="textform"
        class="chat-field"
        append-icon="mdi-send"
        @click:append="onSend"
        @keyup.stop.enter="updateScroll"
        @keyup.stop.enter.exact="onSend"
        >
        <template v-slot:prepend-inner>
          <v-file-input
            v-model="files"
            hide-input
            hide-details
            multiple
            accept="image/*"
            >
          </v-file-input>
        </template>
      </v-textarea>
    </div>
  </div>
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
    channelsComputed: {
      get () {
        return this.$store.getters['chat/channels']
        // return this.channels[this.channel].messages
      },
      set (val) {
        this.$store.dispatch('chat/setChannels')
        // this.channels[this.channel].messages.push(val)
      },
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
    this.updateScroll()
    this.updator = this.updateScroll.bind(this)
    this.addEvent(window, 'resize', this.updator)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.updator)
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
