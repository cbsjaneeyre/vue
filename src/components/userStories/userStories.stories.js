import userStories from './userStories.vue'

export default {
  title: 'userStories',
  component: { userStories }
}

export const Default = () => ({
  components: { userStories },
  template: `
  <userStories avatar="https://images6.fanpop.com/image/photos/42900000/Good-Omens-icon-good-omens-42907271-540-540.jpg" username="Crowley" @onClick="handleClick(story.id)"></userStories>
  `
})
