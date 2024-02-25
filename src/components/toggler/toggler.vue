<template>
  <button :class="['button', { active: isOpened }]" @click="toggle">
    <span class="text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="icon">
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
      this.isOpened = !this.isOpened // при клике изменяем значение на обратное
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
