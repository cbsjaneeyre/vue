<template>
    <button class="homeButtons-icon" >
      <icon name="home" @click="goToFeeds"></icon>
    </button>
    <button class="homeButtons-avatar" @click="goToUser">
      <img :src="avatar" class="userpic_image" alt="userpic">
    </button>
    <button class="homeButtons-icon" @click="logout">
      <icon name="logout"></icon>
    </button>
</template>

<script>
import { icon } from '../../icons'
import { mapActions } from 'vuex'

export default {
  name: 'homeButtons',
  components: {
    icon
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    goToFeeds () {
      this.$router.push('/')
    },
    goToUser () {
      this.$router.push('profile')
    }
  },
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./homeButtons.scss" scoped></style>
