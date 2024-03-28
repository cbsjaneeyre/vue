<template>
  <div class="c-feed">
    <div class="g-container">
      <div class="feed-user">
        <user :avatar="data.avatar" :username="data.username"></user>
      </div>
      <div class="feed-vueJS">
        <div class="feed_wrapper">
          <div class="feed_userPost">
            <userPost :title="data.title" :text="data.description"></userPost>
          </div>
          <ul class="feed_reactions">
            <li class="feed_reactions-item">
              <div class="feed_reactions-icon">
                <icon name="star"></icon>
              </div>
              <reactionButtons text="Star"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <reactionButtons :number="data.stars"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <div class="feed_reactions-icon">
                <icon name="fork"></icon>
              </div>
              <reactionButtons text="Fork"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <reactionButtons :number="data.forks"></reactionButtons>
            </li>
          </ul>
        </div>
      </div>
      <issues
      :issues="issues"
      :loading="issues?.loading"
      @loadContent="loadIssues()"
      ></issues>
      <span class="feed-date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { reactionButtons } from '../../components/reactionButtons'
import { icon } from '../../icons'
import { userPost } from '../../components/userPost'
import { issues } from '../../components/issues'

export default {
  name: 'Feed',
  components: {
    user,
    reactionButtons,
    icon,
    userPost,
    issues
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    },
    loadIssues () {
      this.$emit('getIssues')
    }
  },
  props: {
    data: {
      type: Object
    },
    date: {
      type: Date
    },
    issues: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  },
  emits: ['getIssues']
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
