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
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    theme: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./mainButton.scss" scoped></style>
