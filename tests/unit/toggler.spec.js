import { shallowMount } from '@vue/test-utils'
import toggler from '@/components/toggler'

describe('toggler component', () => {
  it('changes the title on click', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.toggler-text').text()).toBe('Show issues')

    await wrapper.find('toggler-button').trigger('click')

    expect(wrapper.find('.toggler-text').text()).toBe('Hide issues')
  })
})
