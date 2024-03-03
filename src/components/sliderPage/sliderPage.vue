<template>
  <div class="c-slider-page-wrapper">
    <div class="slider-page-progress-bar">
      <progressBar></progressBar>
    </div>
    <div class="slider-page-user">
      <user avatar="https://i.pinimg.com/564x/cd/0f/93/cd0f939c801fc8dccb68b2b7fb19edb4.jpg" text="React.reposit"></user>
    </div>
    <div class="slider-page-content">
      <slot></slot>
    </div>
    <div class="slider-page-button">
      <mainButton>Following</mainButton>
    </div>
  </div>
</template>

<script>
import { progressBar } from '../../components/progressBar'
import { user } from '../../components/user'
import { mainButton } from '../../components/mainButton'

export default {
  title: 'sliderPage',
  components: {
    progressBar,
    user,
    mainButton
  }
}
</script>

<style lang="scss" src="./sliderPage.scss" scoped></style>
