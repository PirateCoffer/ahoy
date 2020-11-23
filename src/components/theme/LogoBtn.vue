<template>
  <v-toolbar-items class="ml-3">
    <v-btn 
      text 
      to="/" 
      class="home-btn title font-weight-regular mr-0 pl-1" 
      :ripple="false" 
      >
      <v-avatar size="40" class="mr-2">
        <v-img :src="repopath + '/media/images/ahoy-logo.png'">
        </v-img>
      </v-avatar>
      {{$store.state.title}}!
    </v-btn>
  </v-toolbar-items>
</template>
