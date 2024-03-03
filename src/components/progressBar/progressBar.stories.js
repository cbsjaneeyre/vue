import progressBar from './progressBar.vue'

export default {
  title: 'progressBar',
  component: { progressBar },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'when the progress bar is fully loaded'
    }
  }
}

export const Default = (args) => ({
  components: { progressBar },
  data () {
    return { args }
  },
  template: `
  <progressBar @onFinish="args.onFinish"></progressBar>
  `
})
