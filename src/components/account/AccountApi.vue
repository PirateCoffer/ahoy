<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h4 mb-1">API Key</div>
            <div class="body-1 mb-3">
              To be able to use private API endpoints, you have to set your API key as the "Authorization" header. The key expires in 5 years. Find more details in the API docs.
            </div>
            <div class="text-h5 mb-1 mt-4">
              Generate new API key
            </div>
            <div class="body-1 mb-3 mt-1">
              Generating a key will also invalidate the previously generated API key
            </div>
            <v-text-field
              v-model="pw"
              label="Password"
              hint="8-72 characters"
              persistent-hint
              :type="showPw ? 'text' : 'password'"
              :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPw = !showPw"
            ></v-text-field>
            <v-btn @click="genApiKey" color="primary" class="mt-5" :disabled="!valid">
              <v-icon left>mdi-api</v-icon>
              Generate
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AccountApi',
  data: () => ({
    pw: null,
    showPw: false,
  }),
  computed: {
    valid () {
      if (this.pw && this.pw.length > 7)
        return true
      return false
    },
  },
  methods: {
    async genApiKey () {
      this.notify('New API Key Generated')
    },
  },
}
</script>
