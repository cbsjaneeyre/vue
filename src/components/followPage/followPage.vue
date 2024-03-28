<template>
  <div class="c-wrapper">
    <div class="followers">
      <user :avatar="data.avatar" :username="data.username" :title="data.title"></user>
    </div>
    <div class="following-button">
      <mainButton>following</mainButton>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { mainButton } from '../mainButton'

export default {
  name: 'followPage',
  components: {
    user,
    mainButton
  },
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style lang="scss" src="./followPage.scss" scoped></style>
