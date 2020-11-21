<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h4 mb-3">Basic user information</div>
    
            <div class="text-h5 mb-1">Avatar</div>
            <v-file-input
              v-model="avatarFile"
              ref="fileInput"
              style="display: none;"
            ></v-file-input>
            <div class="d-flex flex-column" style="width: 80px;">
              <v-hover v-slot:default="{ hover }">
                <v-avatar
                  size="80"
                  style="cursor: pointer;"
                  :class="{ fader: true, 'on-hover': hover }"
                  @click="editAvatar"
                  >
                  <v-img :src="avatarPath">
                    <div class="d-flex fill-height justify-center" style="width: 100%">
                      <div
                        :class="{ 'align-self-center': true, 'fader-btn': true, 'on-hover': hover }"
                        >
                        Edit
                      </div>
                    </div>
                  </v-img>
                </v-avatar>
              </v-hover>
              <v-btn small text @click="removeAvatar" class="mt-2">Remove</v-btn>
            </div>

            <div class="text-h5 mt-4">Vacation</div>
            <v-switch
              label="Buying Vacation"
              hint="Hides all your ads for purchase from public view and prevents other users from requesting a trade"
              persistent-hint
            ></v-switch>
            <v-switch
              label="Selling Vacation"
              hint="Hides all your ads for sale from public view and prevents other users from requesting a trade"
              persistent-hint
            ></v-switch>
            <div class="text-h5 mt-6">Personal Information</div>
            <v-textarea
              label="Personal introduction"
              rows="1"
              auto-grow
              hide-details
              append-outer-icon="mdi-content-save"
              @click:append-outer="saveIntroduction"
            ></v-textarea>
            <div class="caption mt-1">
              Shown on your public profile. Maximum 65536 characters. Can use markdown for styling. <n-link to="/guides/markdown">How to use markdown?</n-link>
            </div>
            <v-text-field
              label="Homepage"
              hint="Shown on your public profile. Only valid URL accepted (e.g. https://localcrypto.trade)"
              persistent-hint
              append-outer-icon="mdi-content-save"
              @click:append-outer="saveHomepage"
            ></v-text-field>
          </v-col>  
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AccountSettings',
  data: () => ({
    avatarFile: null,
    avatarPath: process.env.repopath + '/media/images/avatar.png',
    anonPath: process.env.repopath + '/media/images/avatar.png',
    // avatarPath: '/cdn/avatars/6bde892d-ffd4-4edf-a7ca-92d2ba231abf.jpg',
    // anonPath: '/media/images/anon.png',
  }),
  methods: {
    async editAvatar () {
      this.$refs.fileInput.$refs.input.click()
    },
    async removeAvatar () {
      this.avatarPath = this.anonPath
    },
    async saveIntroduction () {
      this.notify('Introduction Saved')
    },
    async saveHomepage () {
      this.notify('Homepage Saved')
    },
  },
}
</script>

<style lang="stylus" scoped>
  .fader
  .fader-btn
    transition: opacity .4s ease-in-out
  .fader-btn
    opacity 0
  .fader.on-hover
    opacity 0.7
  .fader-btn.on-hover
    opacity 1
</style>

