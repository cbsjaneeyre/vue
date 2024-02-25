<template>
  <button class="c-reaction-button">
    <div class="text">{{ text }}</div>
  </button>
</template>

<script>
export default {
  name: 'reactionButtons',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./reactionButtons.scss" scoped></style>
