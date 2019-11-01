import {
  createLocalVue,
  mount
} from '@vue/test-utils'
import UserRepo from '../src/components/user-repo.vue'
import axios from 'axios'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use({
  install(Vue) {
    localVue.prototype.$api = axios.create({
      baseURL: 'https://api.github.com/'
    })
  }
})

localVue.use(VueRouter)
const router = new VueRouter()

describe('UserRepo', () => {
  const wrapper = mount(UserRepo, {
    router,
    localVue
  })
  wrapper.setData({
    repo: {
      name: 'reimagine-github',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  })
  it('has repo name displayed', () => {
    const h1 = wrapper.find('h1')
    expect(h1.html()).toBe('<h1 class="text-3xl">reimagine-github</h1>')
  })
  it('has repo folders and files listed with links', () => {
    const div = wrapper.find('div')
    expect(div.html()).toBe(true)
  })
})
