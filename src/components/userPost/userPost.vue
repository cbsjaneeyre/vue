<template>
  <h1 class="user-post-title">{{ title }}</h1>
  <div class="user-post-text"> {{ text }}</div>
</template>

<script>
export default {
  name: 'userPost',
  props: {
    title: {
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

<style lang="scss" src="./userPost.scss" scoped></style>
