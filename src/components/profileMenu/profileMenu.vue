<template>
  <div class="c-wrapper">
    <div class="menu-button">
      <button class="button" @click="goToRepositories">{{ textone }}</button>
    </div>
    <div class="menu-button">
      <button class="button" @click="goToFollowing">{{ texttwo }}</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'profileMenu',
  props: {
    textone: {
      type: String,
      required: true
    },
    texttwo: {
      type: String,
      required: true
    }
  },
  setup () {
    const router = useRouter()
    const goToRepositories = () => { router.push('repositories') }
    const goToFollowing = () => { router.push('following') }

    return {
      goToRepositories,
      goToFollowing
    }
  }
  // methods: {
  //   goToRepositories () {
  //     this.$router.push('repositories')
  //   },
  //   goToFollowing () {
  //     this.$router.push('following')
  //   }
  // }
}
</script>

<style lang="scss" src="./profileMenu.scss" scoped></style>
