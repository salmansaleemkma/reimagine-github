import {
  createLocalVue,
  mount
} from '@vue/test-utils'
import UserProfile from '../src/components/user-profile.vue'
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

describe('UserProfile', () => {
  const wrapper = mount(UserProfile, {
    localVue,
    router
  })
  wrapper.setData({
    user: {
      login: 'jonnysams',
      name: 'Jonny Sams',
      location: 'Bangalore. India.'

    },
    repos: [{
      name: 'ims',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
      name: 'logistics App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }]
  })
  it('has user profile displayed', () => {
    const h2 = wrapper.find('h2')
    expect(h2.html()).toBe('<h2><strong>Name: </strong>Jonny Sams</h2>')
    const p = wrapper.find('p')
    expect(p.html()).toBe('<p><strong>username: </strong>jonnysams</p>')
  })
  it('has a list of public repos', () => {
    const h1 = wrapper.findAll('h1')
    expect(h1.length).toBe(2)
  })
})
