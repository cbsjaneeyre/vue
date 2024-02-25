<template>
  <div class="c-feed">
    <div class="g-container">
      <div class="user-post">
        <userPost avatar="../../assets/josh.png" username="joshua_l"></userPost>
      </div>
      <div class="vueJS">
        <slot name="vueJS"></slot>
      </div>
      <div class="toggler">
        <toggler @onToggle="toggle"></toggler>
      </div>
      <div class="comments" v-if="shown">
        <ul class="comments-list">
          <li class="comments-item" v-for="n in 3" :key="n">
            <comment text="some comment" username="joshua_l" date="15 may"></comment>
          </li>
        </ul>
      </div>
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import { userPost } from '../userPost'

export default {
  name: 'Feed',
  components: {
    toggler,
    comment,
    userPost
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
