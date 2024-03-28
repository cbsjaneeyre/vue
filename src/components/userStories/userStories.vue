<template>
  <button class="c-story-button" @click="$emit('onPress')">
    <div class="story-avatar">
      <img :src="avatar" class="story-avatar_image" alt="story-avatar-image">
    </div>
    <div class="story-username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  name: 'userStories',
  props: {
    avatar: {
      type: String
    },
    username: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./userStories.scss" scoped></style>
