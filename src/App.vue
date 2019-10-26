<template>
  <div id="app" class="px-5 mt-1 shadow max-w-5xl mx-auto">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <div class="flex">
      <h1 class="w-3/4 p-5 font-bold text-2xl">Reimagine Github</h1>
      <div class="w-1/4 text-right" v-if="this.$route.fullPath != '/'">
        <router-link to='/'><button class="bg-blue-800 font-bold text-white p-3 rounded" type="button" name="button">Explore Another User</button></router-link>
      </div>
    </div>
    <router-view v-on:get-username="setUsername" v-bind:key="this.$route.fullPath">Loading...</router-view>
    <div v-if="showError">
      {{error}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    methods: {
      getUser: function() {
        return axios.get('https://api.github.com/users/' + this.username).then(() => {
          this.viewProfile()
        }).catch(error => this.catchError(error))
      },
      catchError: function(error) {
        this.error = error.response.statusText
        this.showError = true
      },
      setUsername: function(value) {
        this.showError = false
        this.username = value
        this.getUser()
      },
      viewProfile: function() {
        this.$router.push({
          name: 'user-profile-page',
          params: {
            username: this.username
          }
        })
      }
    },
    data() {
      return {
        username: '',
        showError: false,
        error: ''
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
*{
  font-family: 'Muli', sans-serif;
}
</style>
