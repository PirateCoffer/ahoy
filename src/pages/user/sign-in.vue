<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" class="text-center">
        <v-form ref="form" v-model="valid">
          <v-card tile>
            <v-card-title class="text-h5">Sign In</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field v-model="username" required :rules="[passwordRules.required]">
                <template v-slot:label>
                  Username<sup>*</sup>
                </template>  
              </v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPw ? 'text' : 'password'"
                name="input-10-2"
                hint="At least 8 characters"
                class="input-group--focused"
                @click:append="showPw = !showPw"
                :rules="[passwordRules.required, passwordRules.min]"
                >
                <template v-slot:label>
                  Password<sup>*</sup>
                </template>  
              </v-text-field>
              <v-row align="center" no-gutters>
                <v-col cols="6">
                  <v-checkbox v-model="remember" label="Remember me"></v-checkbox>
                </v-col>
                <v-col cols="6">
                  <n-link to="/user/reset-password" class="body-1">Forgot your password?</n-link>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block tile color="secondary" @click="onSubmit" :disabled="!valid">
                Sign In
              </v-btn>
            </v-card-actions>
            <div class="pa-2 body-1">
              Don't have an account yet? <n-link to="/user/sign-up">Sign up.</n-link>
            </div>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import userMixins from '~/mixins/userMixins'
export default {
  name: 'LoginPage',
  mixins: [ userMixins ],
  middleware: 'anonymous',
  data: () => ({
    valid: false,
    showPw: false,
    username: '',
    password: '',
    username: 'alice',
    password: 'password123',
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
    },
    remember: false,
  }),
  methods: {
    onSubmit () {
      let redirect
      if (this.$route.query.redirect)
        redirect = JSON.parse(decodeURIComponent(this.$route.query.redirect))
      this.onLogin(this.username, this.password, redirect)
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
