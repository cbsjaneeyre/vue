<template>
  <button class="c-reaction-button">
    <div class="reaction-button-text">{{ text }}</div>
    <div class="reaction-button-text">{{ number }}</div>
  </button>
</template>

<script>
export default {
  name: 'reactionButtons',
  props: {
    text: {
      type: String
    },
    number: {
      type: Number
    }
  }
}
</script>

<style lang="scss" src="./reactionButtons.scss" scoped></style>
