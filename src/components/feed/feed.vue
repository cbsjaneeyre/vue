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
              <reactionButtons :text="data.stars"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <div class="feed_reactions-icon">
                <icon name="fork"></icon>
              </div>
              <reactionButtons text="Fork"></reactionButtons>
            </li>
            <li class="feed_reactions-item">
              <reactionButtons :text="data.forks"></reactionButtons>
            </li>
          </ul>
        </div>
      </div>
      <issues
      :issues="issues?.loading"
      :loading="issues?.loading"
      @loadContent="loadIssues({ id, owner: owner.login, repo: name })"
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
import { mapActions, mapState } from 'vuex'

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
  computed: {
    ...mapState({
      issueState: (state) => state.issues.repoIssues
    })
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    },
    ...mapActions({
      getRepoIssues: 'issues/getRepoIssues'
    }),
    loadIssues ({ id, owner, repo }) {
      this.getRepoIssues({ id, owner, repo })
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    date: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
