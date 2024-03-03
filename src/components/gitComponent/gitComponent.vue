<template>
  <div class="c-git-component" :class="{ dark }">
    <h1>title: {{ title }}</h1>
    <h2>owner: {{ username }}</h2>
    <h3>stars: {{ stars }}</h3>
    <p v-if="description">description: {{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'gitComponent',
  props: {
    title: String,
    owner: String,
    stars: String,
    description: String,
    dark: Boolean
  }
}
</script>

<style lang="scss" src="./gitComponent.scss" scoped></style>
