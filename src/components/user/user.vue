<template>
  <div class="c-user">
    <div class="user-avatar">
      <img :src="avatar" class="user-avatar_image" alt="avatar">
    </div>
    <div class="user-username">{{ text }}</div>
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
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./user.scss" scoped></style>
