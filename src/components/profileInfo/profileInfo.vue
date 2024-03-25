<template>
  <div class="c-wrapper">
    <div class="profile-title">
      <profileTitle text="My profile"></profileTitle>
    </div>
    <div class="profile-user">
      <profileUser
      :avatar="user?.avatar_url"
      :username="user?.login"
      :name="user?.name"
      reposts="10"
      watchers="10"
      ></profileUser>
    </div>
  </div>
</template>

<script>
import { profileUser } from '../profileUser'
import { profileTitle } from '@/components/profileTitle'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'profileInfo',
  components: {
    profileUser,
    profileTitle
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user
    })
  },
  methods: {
    ...mapActions({
      getUserData: 'auth/getUserInfo'
    }),
    gitComponentData (item) {
      return {
        title: item.name,
        username: item.owner.login,
        stars: item.stargazers_count,
        description: item.description,
        avatar: item.owner.avatar_url,
        forks: item.forks_count,
        watchers: item.watchers_count
      }
    }
  },
  async created () {
    this.getUserData()
  }
}
</script>

<style lang="scss" src="./profileInfo.scss" scoped></style>
