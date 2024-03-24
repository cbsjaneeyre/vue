<template>
  <div class="c-wrapper">
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
  </div>
</template>

<script>
import { reactionButtons } from '../../components/reactionButtons'
import { icon } from '../../icons'
import { userPost } from '../../components/userPost'

export default {
  name: 'reposPage',
  components: {
    reactionButtons,
    icon,
    userPost
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./reposPage.scss" scoped></style>
