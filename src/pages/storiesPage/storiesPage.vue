<template>
  <div class="wrapper">
    <header class="header">
      <div class="g-container">
        <button class="logo-button" @click="goToFeeds">
          <logo logo="./assets/white.png"></logo>
        </button>
        <button class="close-button" @click="goToFeeds">
          <icon name="close"></icon>
        </button>
      </div>
    </header>
    <div class="content">
      <sliderPage :initialSlide="Number($route.params.initialSlide)"></sliderPage>
    </div>
  </div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { sliderPage } from '../../components/sliderPage'

export default {
  name: 'storiesPage',
  components: {
    logo,
    icon,
    sliderPage
  },
  methods: {
    goToFeeds () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" src="./storiesPage.scss" scoped></style>
