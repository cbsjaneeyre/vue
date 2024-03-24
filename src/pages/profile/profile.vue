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
          <!-- <profileTitle text="Repositories" number="10"></profileTitle> -->
          <profileTitle text="Following" number="10"></profileTitle>
        </div>
        <!-- <reposPage
        :data="gitComponentData(repoInfo)"
        v-for="repoInfo in repos"
        :key="repoInfo.id"
        ></reposPage> -->
        <following
        :data="gitComponentData(repoInfo)"
        v-for="repoInfo in repos"
        :key="repoInfo.id"
        ></following>
      </div>
    </div>
  </div>
</template>

<script>
import { top } from '@/components/top'
import { logo } from '@/components/logo'
import { homeButtons } from '@/components/homeButtons'
import { profileInfo } from '@/components/profileInfo'
// import { reposPage } from '@/components/reposPage'
import { profileTitle } from '@/components/profileTitle'
import { mapActions, mapState } from 'vuex'
import { following } from '@/components/following'

export default {
  name: 'profile',
  components: {
    top,
    logo,
    homeButtons,
    profileInfo,
    // reposPage,
    profileTitle,
    following
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

<style lang="scss" src="./profile.scss" scoped></style>
