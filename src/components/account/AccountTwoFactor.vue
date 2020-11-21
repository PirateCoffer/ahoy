<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h4 mb-1">Two-factor authentication (2FA)</div>
            <div class="body-1 mb-3">
              When two-factor authentication is active you need to enter a one time code every time you log in or withdraw funds.
            </div>
            <div class="text-h5 mb-3 mt-4">
              <span>Your 2FA status:</span>
              <span class="error--text">
                <v-icon color="error" class="pb-1">mdi-lock-open-outline</v-icon>
                <span>DISABLED</span>
              </span>
            </div>

 
            <v-alert type="error" border="left"  class="px-6">
              <b>PLEASE NOTE:</b> if you lose your 2FA credentials (lose or break phone, delete your 2FA app and lose your backup code) you <b>will not be able to login into your account ever again.</b> LocalCrypto will not be able to help you. <b>Use at your own risk.</b>
              <template v-slot:prepend>
                <v-icon class="mr-4">mdi-alert-outline</v-icon>
              </template>
            </v-alert>
            <v-alert type="info" border="left" text icon="mdi-information-outline" class="px-6">
              <n-link to="/guides/2fa">Read the two-factor authentication activation guide</n-link>
            </v-alert>
        


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
              <v-icon left>mdi-cellphone-lock</v-icon>
              Enable 2FA
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AccountTwoFactor',
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
