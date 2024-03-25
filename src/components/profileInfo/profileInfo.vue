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
// import { mapActions, mapState } from 'vuex'
import { useStore } from 'vuex'
import { onMounted, computed, ref } from 'vue'

export default {
  name: 'profileInfo',
  components: {
    profileUser,
    profileTitle
  },
  setup () {
    const { dispatch, state } = useStore()
    const items = ref([])
    const gitComponentData = (item) => {
      return {
        title: item.name,
        username: item.owner.login,
        avatar: item.owner.avatar_url
      }
    }

    onMounted(() => {
      dispatch('auth/getUserInfo')
    })

    return {
      user: computed(() => state.auth.user),
      gitComponentData,
      items
    }
  }
  // data () {
  //   return {
  //     items: []
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     user: (state) => state.auth.user
  //   })
  // },
  // methods: {
  //   ...mapActions({
  //     getUserData: 'auth/getUserInfo'
  //   }),
  //   gitComponentData (item) {
  //     return {
  //       title: item.name,
  //       username: item.owner.login,
  //       avatar: item.owner.avatar_url
  //     }
  //   }
  // },
  // async created () {
  //   this.getUserData()
  // }
}
</script>

<style lang="scss" src="./profileInfo.scss" scoped></style>
