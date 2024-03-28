<template>
  <div class="wrapper">
    <h1 class="title">{{ text }}</h1>
    <div class="count">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: 'profileTitle',
  props: {
    text: {
      type: String
    },
    number: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./profileTitle.scss" scoped></style>
