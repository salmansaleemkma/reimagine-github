<template>
  <div class="p-5 m-5">
    <div class="flex">
      <h1 class="w-5/6 text-xl">{{this.repo}} / {{this.file.path}}</h1>
      <a class="w-1/6 text-center bg-blue-800 font-bold text-white p-2 m-1 rounded" :href="file.download_url">Download</a>
    </div>
    <div class="border border-blue-500 p-5 bg-gray-100 overflow-scroll">
      <vue-markdown :source="fileContent"></vue-markdown>
    </div>
  </div>
</template>
<script>
  import {
    Base64
  } from 'js-base64';
  import VueMarkdown from 'vue-markdown'
  export default {
    components: {
      VueMarkdown
    },
    beforeMount: function() {
      this.getContent()
    },
    methods:{
      getContent: function(){
        this.$api.get('repos/' + this.username + '/' + this.repo + '/contents/' + this.path).then(response => {
          this.file = response.data
        })
      }
    },
    computed: {
      fileContent: function() {
        if (this.file.content) {
          return Base64.decode(this.file.content)
        }
        return ''
      }
    },
    data() {
      return {
        path: this.$route.params.filePath,
        username: this.$route.params.username,
        repo: this.$route.params.repo,
        file: ''
      }
    }
  }
</script>
