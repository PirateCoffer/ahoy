<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col xs="12" sm="10" md="8" class="text-center">
        <v-form ref="form" v-model="valid">
          <v-card tile>
            <v-card-title class="text-h5">Sign Up</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                v-model="username"
                hint="3-16 characters. Allowed characters: a-z, A-Z, 0-9, -, _"
                persistent-hint
                :rules="[rules.required, rules.min.un, rules.max.un]"
                >
                <template v-slot:label>
                  Username<sup>*</sup>
                </template>
              </v-text-field>
              <v-text-field
                class="mt-3"
                v-model="email"
                :rules="rules.email"
                label="E-mail"
                hint="You don't have to enter your email to trade Pirate, but without it we won't be able to recover your password or send you email notifications. Your email will be checked against a third-party database of disposable email providers."
                persistent-hint
              ></v-text-field>
              <v-text-field
                class="mt-3"
                v-model="password"
                :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPw ? 'text' : 'password'"
                hint="8-72 characters."
                persistent-hint
                @click:append="showPw = !showPw"
                :rules="[rules.required, rules.min.pw, rules.max.pw]"
                >
                <template v-slot:label>
                  Password<sup>*</sup>
                </template>  
              </v-text-field>
              <v-text-field
                class="mt-3"
                v-model="confirmPassword"
                :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPw ? 'text' : 'password'"
                @click:append="showPw = !showPw"
                :rules="[rules.required, confirm]"
                >
                <template v-slot:label>
                  Confirm Password<sup>*</sup>
                </template>
              </v-text-field>
              <v-switch v-model="agreeTerms" :rules="[rules.required]">
                <template v-slot:label>
                  <span>I have read and agreed to the <a @click.stop="" href="/terms" target="_blank">
                  {{$store.state.title}} terms of service</a></span>
                </template>
              </v-switch>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block tile color="secondary" @click="onSubmit" :disabled="!valid">
                Sign Up
              </v-btn>
            </v-card-actions>
            <div class="pa-2 body-1">
              <div>Already have an account? <n-link to="/user/sign-in">Sign in.</n-link></div>
              <div>Forgot your password? <n-link to="/user/reset-password">Reset it here.</n-link></div>
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
  name: 'RegisterPage',
  mixins: [ userMixins ],
  middleware: 'anonymous',
  data: () => ({
    valid: false,
    showPw: false,
    agreeTerms: false,
    
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

    // username: 'alice',
    // email: 'alice@mail.com',
    // password: 'password123',
    // confirmPassword: 'password123',

    rules: {
      required: value => !!value || 'Required.',
      min: {
        un: v => v.length >= 3 || 'Min 3 characters',
        pw: v => v.length >= 8 || 'Min 8 characters',
      },
      max: {
        un: v => v.length <= 16 || 'Max 16 characters',
        pw: v => v.length >= 8 || 'Max 72 characters',
      },
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    },
  }),
  methods: {
    confirm (v) { return v === this.password || 'Passwords must match' },
    onSubmit () {
      this.notify('Signed Up')
      // let redirect
      // if (this.$route.query.redirect)
      //   redirect = JSON.parse(decodeURIComponent(this.$route.query.redirect))
      // this.onLogin(this.username, this.password, redirect)
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
