<template>
    <button class="homeButtons-icon">
      <icon name="home"></icon>
    </button>
    <button class="homeButtons-avatar">
      <img :src="userpic" class="userpic_image" alt="userpic">
    </button>
    <button class="homeButtons-icon">
      <icon name="logout"></icon>
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
