<template>
  <div class="c-comment">
    <p>
      <span class="comment-username">{{ username }}</span>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    username: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
