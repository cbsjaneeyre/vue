import placeholder from './placeholder.vue'

export default {
  title: 'Placeholder',
  component: { placeholder }
}

export const Default = () => ({
  components: { placeholder },
  template: `
  <placeholder :paragraphs="4">
  </placeholder>
  `
})
