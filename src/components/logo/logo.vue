<template>
  <img :src="logo" class="logo-image" alt="logo">
</template>

<script>
export default {
  name: 'Logo',
  props: {
    logo: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./logo.scss" scoped></style>
