<template>
  <div :class={active} class="c-progress-bar">
    <div ref="indicator" class="c-progress-bar_indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  data () {
    return {
      active: false
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
      this.active = true
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" src="./progressBar.scss" scoped></style>
