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
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./profileTitle.scss" scoped></style>
