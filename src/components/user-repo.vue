<template id="">
  <div class="p-5">
    <h1 class="text-3xl">{{repo.name}}</h1>
    <p class="text-gray-800">{{repo.description}}</p>
    <FolderContentPage :username="username" :repo="repoName"></FolderContentPage>
  </div>
</template>
<script>
  import FolderContentPage from './folder-content.vue'
  export default {
    components: {
      FolderContentPage
    },
    beforeMount: function() {
      let url_link = 'repos/' + this.username + '/' + this.repoName
      this.$api.get(url_link).then(response => {
        this.repo = response.data
      })
    },
    data() {
      return {
        username: this.$route.params.username,
        repoName: this.$route.params.repo,
        repo: {}
      }
    }
  }
</script>
<style media="screen">

</style>
