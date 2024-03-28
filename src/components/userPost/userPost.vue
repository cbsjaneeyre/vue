<template>
  <h1 class="user-post-title">{{ title }}</h1>
  <div class="user-post-text"> {{ text }}</div>
</template>

<script>
export default {
  name: 'userPost',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<!-- <style lang="scss" src="./userPost.scss" scoped></style> -->
