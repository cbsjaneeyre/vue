<template>
  <button class="homeButtons">
    <div class="icon">
      <icon name="home"></icon>
    </div>
    <div class="avatar">
      <img :src="userpic" class="userpic_image" alt="userpic">
    </div>
    <div class="icon">
      <icon name="logout"></icon>
    </div>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'homeButtons',
  components: {
    icon
  },
  props: {
    userpic: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./homeButtons.scss" scoped></style>
