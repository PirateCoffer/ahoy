<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-form ref="form" v-model="valid">
          <v-card tile flat>
            <v-card-title class="text-h5">Password Reset</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pt-3">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                >
                <template v-slot:label>
                  E-mail<sup>*</sup>
                </template>
              </v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block tile color="secondary" @click="onSubmit" :disabled="!valid">
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
   async onSubmit () {
      if (this.$refs.form.validate()) {
        this.$refs.form.reset()
        this.notify('A password reset was sent to your inbox')
        this.$router.push('/user/sign-in')
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
</style>
