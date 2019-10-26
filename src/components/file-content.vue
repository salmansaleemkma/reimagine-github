<template>
  <div class="p-5 m-5">
    <h1 class="text-xl">{{this.repo}} / {{this.file.path}}</h1>
    <div class="border border-blue-500 p-5 bg-gray-100">
      <vue-markdown :source="fileContent"></vue-markdown>
    </div>
  </div>
</template>
<script>
  import {
    Base64
  } from 'js-base64';
  import VueMarkdown from 'vue-markdown'
  import axios from 'axios'
  export default {
    components: {
      VueMarkdown
    },
    beforeMount: function() {
      this.getContent()
    },
    methods:{
      getContent: function(){
        axios.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/contents/' + this.path).then(response => {
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
