<template>
  <button class="c-story-button" @click="$emit('onClick')">
    <div class="avatar">
      <img :src="avatar" class="avatar_image" alt="avatar">
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  name: 'userStories',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./userStories.scss" scoped></style>
