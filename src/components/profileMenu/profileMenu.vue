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
  methods: {
    goToRepositories () {
      this.$router.push('repositories')
    },
    goToFollowing () {
      this.$router.push('following')
    }
  }
}
</script>

<style lang="scss" src="./profileMenu.scss" scoped></style>
