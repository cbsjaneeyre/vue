import { mount } from '@vue/test-utils'
import issues from '@/components/issues/issues.vue'

describe('issues component', () => {
  it('does emit of loadContent', async () => {
    const wrapper = mount(issues)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent.length).toBe(1)
  })

  it('shows elements', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Object.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.find('comments').exists()).toBe(false)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.find('comments_item').length).toBe(6)
  })

  it('does not show content-loader when issues are there', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Object.from({ length: 6 }).map(x => issue)
      }
    })

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
