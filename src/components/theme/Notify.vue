<template>
  <v-snackbar
    v-model="notifyActive"
    :top="$store.state.notify.top"
    :bottom="$store.state.notify.bottom"
    :left="$store.state.notify.left"
    :right="$store.state.notify.right"
    :timeout="$store.state.notify.timeout"
    :color="$store.state.notify.color"
    multi-line
    class="pb-6"
    app
    >
    <span>{{ $store.state.notify.msg }}</span>
    <template v-slot:action="{ attrs }">
      <v-btn v-bind="attrs" icon @click.native="notifyActive = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Notify',
  data: () => ({
  }),
  computed: {
    notifyActive: {
      get () {
        return this.$store.state.notify.active
      },
      set (val) {
        this.$store.commit('notify/active', val)
      }
    }
  }
}
</script>
