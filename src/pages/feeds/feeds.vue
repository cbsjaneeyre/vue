<template>
  <div class="top">
    <top>
      <template v-slot:headline>
        <button class="top_logo">
          <logo></logo>
        </button>
        <div class="top_homeButtons">
          <homeButtons :avatar="user?.avatar_url"></homeButtons>
        </div>
      </template>
      <template v-slot:content>
        <ul class="top_stories">
          <!-- getUnstarredRepos instead of items -->
          <li class="top_stories-item" v-for="{ id, owner } in items" :key="id">
            <userStories
            :avatar="owner.avatar_url"
            :username="owner?.login"
            @onPress="$router.push({ name: 'storiesPage', params: { initialSlide: id } })"
            ></userStories>
          </li>
        </ul>
      </template>
    </top>
  </div>
  <div class="feed">
    <feed
    :data="gitComponentData(repoInfo)"
    v-for="repoInfo in repos"
    :key="repoInfo.id"
    :date="new Date(repoInfo.date)"
    :issues="repoInfo?.issues"
    @getIssues="loadIssues({ id: repoInfo.id, owner: repoInfo.owner.login, repo: repoInfo.name })"
    ></feed>
  </div>
</template>

<script>
import { top } from '../../components/top'
import { userStories } from '../../components/userStories'
import { logo } from '../../components/logo'
import { feed } from '../../components/feed'
import stories from './data.json'
import { homeButtons } from '../../components/homeButtons'
import { mapGetters, mapActions, mapState } from 'vuex'
import * as api from '../../api'

export default {
  name: 'Feeds',
  components: {
    top,
    userStories,
    logo,
    feed,
    homeButtons
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      user: (state) => state.auth.user,
      repos: (state) => state.starred.starredRepos,
      issue: (state) => state.issues.repoIssues
    }),
    ...mapGetters(['getUnstarredRepos'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      getUserData: 'auth/getUserInfo',
      getUserStarredRepos: 'starred/getStarredRepo',
      getRepoIssues: 'starred/getRepoIssues'
    }),
    loadIssues ({ id, owner, repo }) {
      this.getRepoIssues({ id, owner, repo })
    },
    gitComponentData (item) {
      return {
        title: item.name,
        username: item.owner.login,
        stars: item.stargazers_count,
        description: item.description,
        avatar: item.owner.avatar_url,
        forks: item.forks_count,
        date: item.created_at
      }
    },
    goToFeeds () {
      this.$router.push('/')
    }
  },
  async created () {
    this.getUserData()
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  mounted () {
    this.fetchTrendings()
    this.getUserStarredRepos({ limit: 10 })
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
