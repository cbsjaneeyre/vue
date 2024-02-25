<template>
  <div class="c-user-post">
    <div class="avatar">
      <img :src="avatar" class="avatar_image" alt="avatar">
    </div>
    <div class="username">{{ username }}</div>
  </div>
</template>

<script>
export default {
  name: 'userPost',
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

<style lang="scss" src="./userPost.scss" scoped></style>
