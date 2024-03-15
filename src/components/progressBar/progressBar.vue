<template>
  {{ active }}
  <div :class="['c-progress-bar', { 'active' : active }]">
    <div ref="indicator" class="c-progress-bar_indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      // setTimeout(() => {
      return this.active
      // }, 100)
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" src="./progressBar.scss" scoped></style>
