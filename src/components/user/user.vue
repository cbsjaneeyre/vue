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
      type: String
    },
    username: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./user.scss" scoped></style>
