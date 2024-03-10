import spinner from './spinner.vue'

export default {
  title: 'spinner',
  component: { spinner }
}

export const Default = () => ({
  components: { spinner },
  template: `
  <spinner>
  </spinner>
  `
})
