<template>
  <div class="placeholder-container">
    <div class="placeholder-big-box">
      <icon name="rectangle"></icon>
    </div>
    <div class="placeholder-small-box" v-for="paragraph in paragraphs" :key="paragraph">
      <icon name="textRectangles"></icon>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  title: 'placeholder',
  components: {
    icon
  },
  props: {
    paragraphs: {
      type: Number
    }
  }
}
</script>

<style lang="scss" src="./placeholder.scss" scoped></style>
