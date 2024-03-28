<template>
  <div class="loader-container">
    <div class="loader-box-big">
      <icon name="big"></icon>
    </div>
    <div class="loader-box-medium">
      <icon name="medium"></icon>
    </div>
    <div class="loader-box-small">
      <icon name="smallBox"></icon>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  title: 'contentLoader',
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./contentLoader.scss" scoped></style>
