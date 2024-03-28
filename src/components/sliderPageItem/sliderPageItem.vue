<template>
  <div class="c-slider-page-wrapper" :class="{ active }">
    <div class="slider-page-progress-bar">
      <progressBar
      :active="active"
      @onFinish="$emit('onProgressFinish')"
      ></progressBar>
    </div>
    <div class="slider-page-user">
      <user
      :avatar="data.avatar"
      :username="data.username"
      ></user>
    </div>
    <div class="slider-page-content">
      <div class="slider-page-content-spinner" v-if="loading">
        <spinner></spinner>
      </div>
      <div class="slider-page-content-info" v-else>
        <div
        v-if="data.content?.length"
        class="slider-page-content-text"
        v-html="data.content"
        ></div>
        <placeholder v-else :paragraphs="2"></placeholder>
      </div>
    </div>
    <div class="slider-page-button">
      <mainButton class="slider-button"
      :theme="data.following.status ? 'grey' : 'green'"
      :loading="data.following.loading"
      @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)"
      >{{ data.following.status ? 'unfollow' : 'follow' }}</mainButton>
    </div>
    <template v-if="active">
      <button
      v-if="buttonsShown.includes('next')"
      class="slider-page-arrow slider-page-arrow-next"
      @click="$emit('onNextSlide')"
      >
        <span class="icon">
          <icon name="sliderArrow"></icon>
        </span>
      </button>
      <button
      v-if="buttonsShown.includes('prev')"
      class="slider-page-arrow slider-page-arrow-prev"
      @click="$emit('onPrevSlide')"
      >
        <span class="icon">
          <icon name="sliderArrow"></icon>
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { progressBar } from '../progressBar'
import { user } from '../user'
import { mainButton } from '../mainButton'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'
import { icon } from '../../icons'

export default {
  title: 'sliderPageItem',
  components: {
    progressBar,
    user,
    mainButton,
    placeholder,
    spinner,
    icon
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow', 'onUnFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    buttonsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" src="./sliderPageItem.scss" scoped></style>
