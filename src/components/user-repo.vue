<template id="">
  <div class="p-5">
    <h1 class="text-3xl">{{repo.name}}</h1>
    <p class="text-gray-800">{{repo.description}}</p>
    <FolderContentPage :username="username" :repo="repo_name"></FolderContentPage>
  </div>
</template>
<script>
  import FolderContentPage from './folder-content.vue'
  import axios from 'axios'
  export default {
    components: {
      FolderContentPage
    },
    beforeMount: function() {
      let url_link = 'https://api.github.com/repos/' + this.username + '/' + this.repo_name
      axios.get(url_link).then(response => {
        this.repo = response.data
      })
    },
    data() {
      return {
        username: this.$route.params.username,
        repo_name: this.$route.params.repo,
        repo: {}
      }
    }
  }
</script>
<style media="screen">

</style>
