<template id="">
  <div class="">
    <div v-if="showProfile" class="flex">
      <div class="w-1/4">
        <img class="h-64" :src="user.avatar_url" alt="">
        <h2><strong>Name: </strong>{{user.name}}</h2>
        <p><strong>username: </strong>{{user.login}}</p>
        <p><strong>Location: </strong>{{user.location}}</p>
      </div>
      <div class="w-3/4">
        <div class="p-5 border border-blue-200 m-2" v-for="repo in this.repos" v-bind:key="repo.id">
          <router-link :to="{name: 'user-repo-page', params: {username: user.login, repo: repo.name}}">
            <h1 class="text-xl hover:text-blue-700 font-bold">{{repo.name}}</h1>
          </router-link>
          <p class="text-gray-800">{{repo.description}}</p>
        </div>
      </div>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    beforeMount: function() {
      axios.get('https://api.github.com/users/' + this.$route.params.username).then(response => {
        this.user = response.data
      })
      axios.get('https://api.github.com/users/' + this.$route.params.username + '/repos').then(response => {
        this.repos = response.data
      })
      this.showProfile = true
    },
    data() {
      return {
        repos: {},
        user: {},
        showProfile: false
      }
    }
  }
</script>
