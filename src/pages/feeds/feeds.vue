<template>
  <div class="top">
    <top>
      <template v-slot:headline>
        <div class="top_logo">
          <logo logo="./assets/gitogram.png"></logo>
        </div>
        <div class="top_homeButtons">
          <homeButtons userpic="./assets/userpic.png"></homeButtons>
        </div>
      </template>
      <template v-slot:content>
        <ul class="top_stories">
          <li class="top_stories-item" v-for="story in stories" :key="story.id">
            <userStories :avatar="story.avatar" :username="story.username" @onClick="handleClick(story.id)"></userStories>
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
    userPost
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
