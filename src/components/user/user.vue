<template>
  <div class="c-user">
    <div class="user-avatar">
      <img :src="avatar" class="user-avatar_image" alt="avatar">
    </div>
    <div class="user-info">
      <div class="user-username">{{ username }}</div>
      <div class="user-type">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./user.scss" scoped></style>
