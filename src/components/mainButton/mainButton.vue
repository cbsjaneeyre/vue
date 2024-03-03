<template>
<button :class="['c-main-button', {'hover-text': withHoverText}]" :data-hover-text="hoverText">
  <span class="c-main-button_text">
    <slot></slot>
  </span>
</button>
</template>

<script>
export default {
  name: 'mainButton',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText && this.hoverText.length
    }
  }
}
</script>

<style lang="scss" src="./mainButton.scss" scoped></style>
