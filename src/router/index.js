import VueRouter from 'vue-router'
import LandingPage from '../components/landing-page.vue'
import UserProfilePage from '../components/user-profile.vue'
import UserRepoPage from '../components/user-repo.vue'
import FolderContentPage from '../components/folder-content.vue'
import FileContentPage from '../components/file-content.vue'

const routes = [{
    name: 'landing-page',
    path: '/',
    component: LandingPage
  },
  {
    name: 'user-profile-page',
    path: '/:username',
    component: UserProfilePage
  },
  {
    name: 'user-repo-page',
    path: '/:username/:repo',
    component: UserRepoPage,
  },
  {
    name: 'repo-folder-page',
    path: '/:username/:repo/folder/:folderPath*',
    component: FolderContentPage
  },
  {
    name: 'repo-file-page',
    path: '/:username/:repo/file/:filePath*',
    component: FileContentPage
  }
]

const router = new VueRouter({
  routes
})

export default router
