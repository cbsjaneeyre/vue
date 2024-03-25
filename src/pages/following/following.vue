<template>
  <div class="wrapper">
    <top>
      <template v-slot:headline>
        <button class="top_logo" @click="goToFeeds">
          <logo></logo>
        </button>
        <div class="top_homeButtons">
          <homeButtons :avatar="user?.avatar_url"></homeButtons>
        </div>
      </template>
    </top>
    <div class="g-container">
      <div class="profile-info">
        <profileInfo></profileInfo>
      </div>
      <div class="repos">
        <div class="repos-info">
          <profileTitle text="Following" number="10"></profileTitle>
        </div>
        <followPage
        :data="gitComponentData(repoInfo)"
        v-for="repoInfo in repos"
        :key="repoInfo.id"
        ></followPage>
      </div>
    </div>
  </div>
</template>

<script>
import { top } from '@/components/top'
import { logo } from '@/components/logo'
import { homeButtons } from '@/components/homeButtons'
import { profileInfo } from '@/components/profileInfo'
import { profileTitle } from '@/components/profileTitle'
import { mapActions, mapState } from 'vuex'
import { followPage } from '@/components/followPage'

export default {
  name: 'following',
  components: {
    top,
    logo,
    homeButtons,
    profileInfo,
    profileTitle,
    followPage
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      repos: (state) => state.starred.starredRepos
    })
  },
  methods: {
    ...mapActions({
      getUserData: 'auth/getUserInfo',
      getUserStarredRepos: 'starred/getStarredRepo'
    }),
    gitComponentData (item) {
      return {
        title: item.name,
        username: item.owner.login,
        stars: item.stargazers_count,
        description: item.description,
        avatar: item.owner.avatar_url,
        forks: item.forks_count
      }
    },
    goToFeeds () {
      this.$router.push('/')
    }
  },
  async created () {
    this.getUserData()
  },
  mounted () {
    this.getUserStarredRepos({ limit: 10 })
  }
}
</script>

<style lang="scss" src="./following.scss" scoped></style>
