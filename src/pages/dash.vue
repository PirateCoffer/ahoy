<template>
  <v-container fluid class="px-5">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-breadcrumbs large :items="breadcrumbs">
            <template v-slot:divider>
              <v-icon color="grey">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12" class="pt-0">
              <v-card>
                <v-card-text class="pa-5 pt-8">
                  <v-row>
                    <v-col cols="6" class="d-flex flex-column align-center">
                      <v-avatar color="amber darken-2" size="160">
                        <v-img src="https://templates-flatlogic.herokuapp.com/vue-material/img/photo.935dbda0.png"></v-img>
                      </v-avatar>
                      <v-chip color="purple" class="mt-5">Pro</v-chip>
                    </v-col>
                    <v-col cols="6" class="d-flex flex-column justify-space-between">
                      <div>
                        <div class="text-h4 mb-3">Alice Anon</div>
                        <div class="caption grey--text">Pirate Trader</div>
                        <div class="purple--text">LocalPirate.co</div>
                      </div>
                      <div>
                        <v-chip
                          v-for="ii in 5"
                          :key="ii.id"
                          label
                          small
                          class="font-weight-bold mr-2 mb-2 success--text"
                          color="rgba(60, 212, 160, 0.2)"
                        >Cert</v-chip>
                      </div>
                      <div>
                        <v-btn
                          v-for="ii in 3"
                          :key="ii.id"
                          small
                          icon
                          >
                          <v-icon  color="grey">mdi-twitter</v-icon>  
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card>
                <v-card-text>
                  [placeholder]
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card>
                <v-card-text>
                  [placeholder]
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card>
                <v-card-text>
                  [placeholder]
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="7">
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12" class="pt-0">
              <v-card class="pb-5">
                <v-card-title>Files</v-card-title>
                <v-card-text class="pt-3">
                  <v-tabs color="pink">
                    <v-tab>Work</v-tab>
                    <v-tab>Private</v-tab>
                    <v-tab>Social</v-tab>
                    <v-tab-item v-for="jj in 3" :key="jj.id">
                      <div class="py-5 px-2 d-flex justify-space-between">
                        <v-card
                          v-for="ii in 5"
                          :key="ii.id"
                          :color="jj === 1 ? 'blue' : (jj === 2 ? 'purple' : 'green')"
                          width="110"
                          height="90"
                          shaped
                          >
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn small icon><v-icon>mdi-file-document</v-icon></v-btn>
                          </v-card-actions>
                          <v-card-text class="pa-0 pl-2">
                            <div class="text-h5 font-weight-black white--text mt-n3">File</div>
                            <div class="body-2">178 files</div>
                          </v-card-text>
                        </v-card>
                      </div>
                    </v-tab-item>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="7">
              <v-card>
                <v-card-text>
                  [placeholder]
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="5">
              <v-container fluid class="pa-0">
                <v-row>
                  <v-col cols="12" class="pt-0">
                    <v-card>
                      <v-card-text>
                        [placeholder]
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        [placeholder]
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        [placeholder]
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  // layout: 'dash.tpl',
  // middleware: 'authenticated',
  data: () => ({
    breadcrumbs: [
      {
        text: 'App',
        disabled: false,
        to: '/',
        exact: true,
      },
      {
        text: 'User',
        disabled: false,
        to: '/account/settings',
        exact: true,
      },
      {
        text: 'Profile',
        disabled: true,
        to: '/trades',
      },
    ],
  }),
}
</script>
