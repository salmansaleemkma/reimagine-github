import {
  createLocalVue,
  shallowMount
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
  const wrapper = shallowMount(UserRepo, {
    router,
    localVue
  })
  wrapper.setData({
    repo: {
      name: 'reimagine-github',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }
  })
  it('has repo name and discription displayed', () => {
    const h1 = wrapper.find('h1')
    expect(h1.html()).toBe('<h1 class="text-3xl">reimagine-github</h1>')

    const p = wrapper.find('p')
    expect(p.html()).toBe('<p class="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>')
  })
})
