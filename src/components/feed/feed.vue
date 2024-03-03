<template>
  <div class="c-feed">
    <div class="g-container">
      <div class="feed-user">
        <user avatar="./assets/josh.png" text="joshua_l"></user>
      </div>
      <div class="feed-vueJS">
        <slot name="feed-vueJS"></slot>
      </div>
      <div class="feed-toggler">
        <toggler @onToggle="toggle"></toggler>
      </div>
      <div class="feed-comments" v-if="shown">
        <ul class="feed-comments_list">
          <li class="feed-comments_item" v-for="n in 3" :key="n">
            <comment text="some comment" username="joshua_l" date="15 may"></comment>
          </li>
        </ul>
      </div>
      <span class="feed-date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import { user } from '../user'

export default {
  name: 'Feed',
  components: {
    toggler,
    comment,
    user
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  props: {
    date: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
