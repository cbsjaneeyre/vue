import user from './user.vue'

export default {
  title: 'user',
  component: { user }
}

export const Default = () => ({
  components: { user },
  template: `
  <user avatar="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" text="React.reposit"></user>
  `
})
