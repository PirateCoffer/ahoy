<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h4 mb-3">Change password</div>
            <div class="body-1 mb-3 mt-2">
              After changing the password you will have to log in again using your new password
            </div>
            <v-text-field
              v-model="oldPw"
              label="Old Password"
              hint="Please enter your current password to proceed"
              persistent-hint
              :type="showPw ? 'text' : 'password'"
              :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPw = !showPw"
            ></v-text-field>
            <v-text-field
              v-model="newPw"
              label="New Password"
              hint="8-72 characters"
              persistent-hint
              :type="showPw ? 'text' : 'password'"
              :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPw = !showPw"
            ></v-text-field>
            <v-text-field
              v-model="confirmPw"
              label="Confirm New Password"
              hint="Please confirm your new password"
              persistent-hint
              :type="showPw ? 'text' : 'password'"
              :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPw = !showPw"
            ></v-text-field>
            <v-btn :disabled="!valid" @click="changePassword" color="primary" class="mt-5">Change Password</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AccountPassword',
  data: () => ({
    showPw: false,
    oldPw: '',
    newPw: '',
    confirmPw: '',
  }),
  computed: {
    valid () {
      let password = 'password'
      if (this.oldPw === password && this.newPw.length > 7 && this.newPw === this.confirmPw)
        return true
      return false
    }
  },
  methods: {
    async changePassword () {
      this.notify('Password Changed')
    },
  },
}
</script>
