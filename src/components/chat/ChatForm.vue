<template>
  <v-textarea
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

</template>
<script>
export default {
  name: 'ChatForm',
  components: {},
  data: () => ({
    files: [],
    message: '',
  }),
  methods: {
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
