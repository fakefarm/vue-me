import Vue from 'vue'
import Navigation from '@/components/Navigation'

describe('Navigation.vue', () => {
  it('holds links for navigation', () => {
    const Constructor = Vue.extend(Navigation)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('nav li')[0].textContent).to.equal('God')
    expect(vm.$el.querySelectorAll('nav li')[1].textContent).to.equal('Code')
    expect(vm.$el.querySelectorAll('nav li')[2].textContent).to.equal('Music')
  })
})
