<template>
  <div>
    <div v-if="files != undefined">
      <h1 class="text-xl">{{this.repo}} / {{this.path}}</h1>
      <div class="border border-blue-500">
        <div class="bg-gray-100 border p-2 hover:bg-gray-300" v-for="file in files" v-bind:key='file.name'>
          <p @click="openContent(file)">
            <span class="inline-block w-5" v-if="file.type == 'file'"><img src="../assets/icon-file.png" alt=""></span>
            <span class="inline-block w-6" v-else><img src="../assets/icon-folder.png" alt=""></span>
            {{file.name}}
          </p>
        </div>
      </div>
    </div>
    <div v-if="files == undefined">
      <p class="p-5 text-lg">Empty Directory</p>
    </div>
  </div>
</template>
<script>
  export default {
    beforeMount: function() {
        this.getContent()
    },
    methods: {
      getContent: function() {
        if (this.$route.name == 'user-repo-page') {
          this.path = ''
        }
        this.$api.get('repos/' + this.username + '/' + this.repo + '/contents/' + this.path).then(response => {
          this.files = response.data
        })
      },
      openContent: function(file) {
        if (file.type == "dir") {
          this.$router.push({
            name: 'repo-folder-page',
            params: {
              username: this.$route.params.username,
              repo: this.$route.params.repo,
              folderPath: file.path
            }
          })
        } else if (file.type == "file") {
          this.$router.push({
            name: 'repo-file-page',
            params: {
              username: this.$route.params.username,
              repo: this.$route.params.repo,
              filePath: file.path
            }
          })
        }
      }
    },
    data() {
      return {
        path: this.$route.params.folderPath,
        username: this.$route.params.username,
        repo: this.$route.params.repo,
        files: ''
      }
    }
  }
</script>
