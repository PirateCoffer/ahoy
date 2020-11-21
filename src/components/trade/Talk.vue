<template>
  <div>
    <v-card tile>
      <v-card-text class="">
          <!-- hide-input -->
          <!-- hide-details -->
          <!-- color="purple" -->
        <v-file-input
          block
          counter
          :show-size="1000"
          class="mb-1"
          background-color="grey darken-2"
          v-model="files"
          clearable
          multiple
          small-chips
          truncate-length="10"
          prepend-icon=""
          solo
          flat
          v-if="files.length"
          accept="image/png, image/jpeg, image/bmp"
          >
          <!-- accept="image/*" -->
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

        <v-textarea
          class="chat-field"
          solo
          v-model="message"
          hide-details
          rows="1"
          auto-grow
          autofocus
          counter
          append-icon="mdi-send"
          @click:append="sendMessage"
          @keydown.enter.exact="sendMessage"
          @focus="focused = true"
          @blur="focused = false"
          >
          <!-- prepend-inner-icon="mdi-paperclip" -->
          <!-- @click:prepend-inner="attachFiles" -->
          <template v-slot:prepend-inner>
            <v-file-input
              v-model="files"
              hide-input
              hide-details
              multiple
              accept="image/*"
              >
              <template v-slot:prepend-inner>
                <v-icon color="primary">mdi-coffee</v-icon>
              </template>
            </v-file-input>
          </template>
        </v-textarea>
      </v-card-text>
    </v-card>
    <v-card tile>
      <v-card-text>
        <p v-for="item in messages" :key="item.id" v-html="item" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// const moment = require('moment')
export default {
  name: 'TalkComponent',
  components: {
  },
  props: {
  },
  data: () => ({
    message: '',
    messages: [],
    files: [],
    focused: true,
  }),
  methods: {
    attachFiles () {
      let message = this.files.map(file => {
        let ellipse = file.name.length > 10 ? file.name.slice(0, 10) + '...' : file.name
        return `<a href="/media/images/${file.name}">${ellipse}</a>`
      }).join(', ')
      this.messages.push(message)
      this.files = []
    },
    addMessage(message) {
      message = this.message.replace(/\r?\n/g, '<br />')

      this.messages.push(message)

      // let obj = {
      //   // avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      //   avatar: this.avatar,
      //   name: this.self,
      //   time: moment().format('YYYY-MM-DD HH:mm'),
      //   message: this.message,
      // }
      // this.message = null
      // // this.items.push({ divider: true, inset: false })
      // // this.items.push(obj)
      // this.$emit('sendMessage', { divider: true, inset: false })
      // this.$emit('sendMessage', obj)
    },
    sendMessage () {
      if (this.files.length)
        this.attachFiles()
      if (!this.message || this.message === '')
        return
      this.addMessage(this.message)
      this.message = ''
      setTimeout(() => { this.message = '' }, 0)
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
