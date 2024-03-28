<template>
  <div class="c-user">
    <div class="user-avatar">
      <img :src="avatar" class="user-avatar_image" alt="avatar">
    </div>
    <div class="user-info">
      <div class="user-username">{{ username }}</div>
      <ul class="user-statistics">
        <li class="user-statistics_item">{{ reposts }} reposts</li>
        <li class="user-statistics_item">{{ watchers }} watchers</li>
      </ul>
      <div class="user-name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileUser',
  props: {
    avatar: {
      type: String
    },
    username: {
      type: String
    },
    reposts: {
      type: String
    },
    watchers: {
      type: String
    },
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./profileUser.scss" scoped></style>
