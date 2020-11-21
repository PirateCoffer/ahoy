<template>
  <div>
    <v-card tile>
      <v-card-title>
        <v-icon left color="primary" size="20">mdi-message-text</v-icon>
        Send message to&nbsp;<user-link class="title" :username="username" :last-seen="lastSeen" :active="active" />
      </v-card-title>
      <v-card-text>
        <v-textarea
          v-model="message"
          label="Your message"
          hide-details
          rows="1"
          auto-grow
          @keydown.meta.enter="sendMessage"
          >
        </v-textarea>
        <div class="caption mt-2">
          Send message to {{username}}. Enter to start a new line, <b>Alt+Enter</b> to send a message. 65536 characters maximum. LocalCrypto encrypts and stores chat messages for 180 days for dispute mediation purposes.
        </div>
      </v-card-text>
      <v-card-actions class="pt-0 mb-1">
        <v-btn block color="primary" @click="sendMessage"><v-icon left>mdi-message-text</v-icon>Send Message</v-btn>
      </v-card-actions>
      <v-card-actions class="pb-0">
        <v-file-input
          block
          v-model="files"
          color="primary"
          counter
          label="Select Files"
          multiple
          placeholder="Select files..."
          prepend-icon="mdi-paperclip"
          outlined
          :show-size="1000"
          append-outer-icon="mdi-upload"
          @click:append-outer="upload"
          >
          <template v-slot:selection="{ index, text }">
            <v-chip
              v-if="index < 2"
              color="primary"
              dark
              label
              small
              >
              {{ text }}
            </v-chip>
            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
              >
              +{{ files.length - 2 }} File(s)
            </span>
          </template>
        </v-file-input>
      </v-card-actions>
      <div class="caption text-center pb-2">
        Accepted file types: .jpg, .png. 5MB maximum.
      </div>
      <v-divider></v-divider>
    </v-card>
    <v-card tile>
      <v-card-title>Chat with {{username}}</v-card-title>
      <!-- <v-divider></v-divider> -->
      <v-list three-line>
        <template v-for="(item, index) in messages">
          <v-divider
            v-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item
            v-else
            :key="item.id"
            @click=""
            >
            <v-list-item-avatar>
              <v-img v-if="item.avatar" :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                <template v-if="item.name">
                  {{item.name}}<span class="grey--text text--lighten-1 caption">&nbsp;&mdash;</span>
                </template>
                <span class="grey--text text--lighten-1 caption">{{item.time}}</span>
              </v-list-item-title>
              <!-- <v-list-item-title v-html="item.title"></v-list-item-title> -->
              <!-- <v-list-item-subtitle v-html="item.time"></v-list-item-subtitle> -->
              <v-list-item-subtitle v-html="item.message"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
// const moment = require('moment')
import UserLink from '~/components/p2p/UserLink'
export default {
  name: 'ChatComponent',
  components: {
    UserLink
  },
  props: {
    username: { type: String },
    lastSeen: { type: String },
    active: { type: Boolean },
    messages: { type: Array },
    self: { type: String },
    avatar: { type: String },
  },
  data: () => ({
    files: [],
    message: null,
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Bob',
        time: '2020-08-29 14:27',
        message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      { divider: true, inset: true },
      {
        // avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        // name: 'Ali Connors',
        time: '2020-08-29 14:28',
        message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out? And just to make this a much much longer run-on sentence I'll keep saying stuff here ya know what I'm saying?",
      },
      { divider: true, inset: false },
      {
        avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
        name: 'Alice',
        time: '2020-08-29 15:33',
        message: "Wish I could come, but I'm out of town this weekend.",
      },
    ],
  }),
  methods: {
    getKey (e) {
      log('got key', e)
    },
    upload () {
      log('uploading', this.files)
      this.notify('Uploading Files')
    },
    sendMessage () {
      if (!this.message)
        return
      let obj = {
        // avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        avatar: this.avatar,
        name: this.self,
        time: moment().format('YYYY-MM-DD HH:mm'),
        message: this.message,
      }
      this.message = null
      // this.items.push({ divider: true, inset: false })
      // this.items.push(obj)

      this.$emit('sendMessage', { divider: true, inset: false })
      this.$emit('sendMessage', obj)
    },
  },
}
</script>
