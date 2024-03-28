<template>
  <div class="c-issues">
    <div class="toggler">
      <toggler @onToggle="handleToggle"></toggler>
    </div>
    <div class="content-loader" v-if="loading">
      <contentLoader></contentLoader>
    </div>
    <div class="comments" v-if="issues?.list?.length">
      <ul class="comments_list">
        <li class="comments_item" v-for="issue in issues.list" :key="issue.id">
          <comment :username="issue.user.login" :text="issue.title"></comment>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { contentLoader } from '../contentLoader'
import { comment } from '../comment'

export default {
  name: 'issues',
  components: {
    toggler,
    contentLoader,
    comment
  },
  emits: ['loadContent'],
  props: {
    loading: {
      type: Boolean
    },
    issues: {
      type: Object
    }
  },
  data () {
    return {
      opened: false
    }
  },
  methods: {
    handleToggle () {
      this.$emit('loadContent')
      // this.opened = isOpened
      // if (isOpened && this.issues.length === 0) {
      //   this.$emit('loadContent')
      // }
    }
  }
}
</script>

<style lang="scss" src="./issues.scss" scoped></style>
