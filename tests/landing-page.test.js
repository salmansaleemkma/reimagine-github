import {
  mount
} from '@vue/test-utils'
import LandingPage from '../src/components/landing-page.vue'

describe('LandingPage', () => {

  const wrapper = mount(LandingPage)

  it('has an input field', () => {
    const input = wrapper.find('input')
    expect(input.is('input')).toBe(true)
  })

  it('has a button', () => {
    const button = wrapper.find('button')
    expect(button.is('button')).toBe(true)
  })
})
