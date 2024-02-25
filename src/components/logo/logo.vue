<template>
  <div class="logo">
    <img :src="logo" class="logo_image" alt="logo">
  </div>
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
