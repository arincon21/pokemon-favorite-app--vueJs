import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../src/views/HomeView.vue'
import Button from '../src/components/Button.vue'

describe('HomeView.vue', () => {
    it('renders the welcome title', () => {
        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain('Welcome to Pokédex')
    })

    it('renders the description', () => {
        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain('The digital encyclopedia created by Professor Oak')
    })

    it('renders the Get started button', () => {
        const wrapper = mount(HomeView)
        const button = wrapper.findComponent(Button)
        expect(button.exists()).toBe(true)
        expect(button.props('text')).toBe('Get started')
        expect(button.props('to')).toBe('/load')
    })

    it('has background image in banner div', () => {
        const wrapper = mount(HomeView)
        const bannerDiv = wrapper.find('.banner')
        expect(bannerDiv.exists()).toBe(true)
        expect(bannerDiv.attributes('class')).toContain('banner')
    })
})
