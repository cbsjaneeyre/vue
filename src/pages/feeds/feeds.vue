<template>
  <div class="top">
    <top>
      <template v-slot:headline>
        <button class="top_logo">
          <logo></logo>
        </button>
        <div class="top_homeButtons">
          <homeButtons></homeButtons>
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
    <feed date="15 may">
      <template v-slot:feed-vueJS>
        <div class="feed_wrapper">
          <div class="feed_userPost">
            <userPost title="Vue.js" text="JavaScript framework for building interactive web applications ⚡"></userPost>
          </div>
          <ul class="feed_reactions">
            <li class="feed_reactions-item">
              <div class="feed_reactions-icon">
                <icon name="star"></icon>
              </div>
              <reactionButtons text="Star"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <reactionButtons text="156k"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <div class="feed_reactions-icon">
                <icon name="fork"></icon>
              </div>
              <reactionButtons text="Fork"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <reactionButtons text="4"></reactionButtons>
            </li>
          </ul>
        </div>
      </template>
    </feed>
  </div>
  <div class="g-container">
    <ul class="git-list">
      <li class="git-item" v-for="item in items" :key="item.id">
        <gitComponent v-bind="gitComponentData(item)" dark></gitComponent>
      </li>
    </ul>
  </div>
</template>

<script>
import { top } from '../../components/top'
import { userStories } from '../../components/userStories'
import { logo } from '../../components/logo'
import { feed } from '../../components/feed'
import stories from './data.json'
import { homeButtons } from '../../components/homeButtons'
import { reactionButtons } from '../../components/reactionButtons'
import { icon } from '../../icons'
import { userPost } from '../../components/userPost'
import * as api from '../../api'
import { gitComponent } from '../../components/gitComponent'
import { mapGetters } from 'vuex'

export default {
  name: 'Feeds',
  components: {
    top,
    userStories,
    logo,
    feed,
    homeButtons,
    reactionButtons,
    icon,
    userPost,
    gitComponent
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  computed: {
    ...mapGetters(['getUnstarredRepos'])
  },
  methods: {
    gitComponentData (item) {
      return {
        title: item.name,
        username: item.owner.login,
        stars: item.stargazers_count,
        description: item.description
      }
    },
    async getUser () {
      try {
        const token = localStorage.getItem('token')

        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${token}`
          }
        })

        const data = await response.json()
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    goToFeeds () {
      this.$router.push('/')
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
