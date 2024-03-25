<template>
  <div class="homeButtons">
    <button class="homeButtons-icon">
      <icon name="home" @click="goToFeeds"></icon>
    </button>
    <button class="homeButtons-avatar" @click="isShown = !isShown">
      <img :src="avatar" class="userpic_image" alt="userpic">
    </button>
    <button class="homeButtons-icon" @click="logout">
      <icon name="logout"></icon>
    </button>
  </div>
  <div class="menu" v-if="isShown">
    <profileMenu textone="Repositories" texttwo="Following"></profileMenu>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { profileMenu } from '../../components/profileMenu'
import { mapActions } from 'vuex'

export default {
  name: 'homeButtons',
  components: {
    icon,
    profileMenu
  },
  data () {
    return {
      isShown: false
    }
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
