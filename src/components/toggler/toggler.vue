<template>
  <button :class="['toggler-button', { active: isOpened }]" @click="toggle">
    <span class="toggler-text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="toggler-icon">
      <icon name="arrow"></icon>
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'Toggler',
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      if (!this.isOpened) {
        this.$emit('onToggle', this.isOpened)
      }
      this.isOpened = !this.isOpened // при клике изменяем значение на обратное
    }
  },
  emits: ['onToggle']
}
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
