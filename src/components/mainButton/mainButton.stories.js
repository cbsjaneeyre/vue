import mainButton from './mainButton.vue'

export default {
  title: 'mainButton',
  component: { mainButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { mainButton },
  data () {
    return { args }
  },
  template: `
  <mainButton v-bind="args">Following</mainButton>
  `
})

export const Default = template.bind({})

Default.args = {
  hoverText: 'Unfollow'
}
