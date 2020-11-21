<template>
  <div>
    <v-avatar :color="users[msg.user].color" size="40" class="flex-grow-0">{{users[msg.user].avatar}}</v-avatar>
    <div class="d-flex flex-column flex-grow-1 pa-3 pt-0 pb-0">
      <div class="d-flex justify-space-between">
        <span>{{users[msg.user].name}}</span>
        <span class="grey--text">{{msg.time}}</span>
      </div>
      <div class="grey--text text--lighten-1" v-html="msg.message">
        <!-- Here is my message and other stuff<br>and the next line too<br>and one more line -->
      </div>
    </div>
  </div>
</template>

