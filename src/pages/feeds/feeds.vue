<template>
  <div class="top">
    <top>
      <template v-slot:headline>
        <div class="logo">
          <logo logo="./assets/gitogram.png"></logo>
        </div>
        <div class="homeButtons">
          <homeButtons userpic="./assets/userpic.png"></homeButtons>
        </div>
      </template>
      <template v-slot:content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <userStories :avatar="story.avatar" :username="story.username" @onClick="handleClick(story.id)"></userStories>
          </li>
        </ul>
      </template>
    </top>
  </div>
  <div class="feed">
    <feed date="15 may">
      <template v-slot:vueJS>
        <div class="wrapper">
          <h1 class="title">Vue.js</h1>
          <div class="text"><b>JavaScript</b> framework for building interactive web applications ⚡</div>
          <ul class="reactions">
            <li class="reactions-item">
              <div class="icon">
                <icon name="star"></icon>
              </div>
              <reactionButtons text="Star"></reactionButtons>
            </li>
            <li class="reactions-item">
              <reactionButtons text="156k"></reactionButtons>
            </li>
            <li class="reactions-item">
              <div class="icon">
                <icon name="fork"></icon>
              </div>
              <reactionButtons text="Fork"></reactionButtons>
            </li>
            <li class="reactions-item">
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

export default {
  name: 'Feeds',
  components: {
    top,
    userStories,
    logo,
    feed,
    homeButtons,
    reactionButtons,
    icon
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
