<template>
<button :class="['green', { disabled, loading }]">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'mainButton',
  props: {
    disabled: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    theme: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./mainButton.scss" scoped></style>
