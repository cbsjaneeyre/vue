<template>
  <div class="c-slider-page">
    <div class="c-slider-page-container">
      <ul class="stories" ref="slider">
        <li
        class="stories-item"
        v-for="(trending, ndx) in trendings"
        :key="trending.id"
        ref="item"
        >
          <sliderPageItem
          :data="getStoryData(trending)"
          :active="+slideNdx === +ndx"
          :loading="slideNdx === ndx && loading"
          :buttonsShown="activeButtons"
          @onNextSlide="handleSlide(ndx + 1)"
          @onPrevSlide="handleSlide(ndx - 1)"
          @onProgressFinish="handleSlide(ndx + 1)"
          ></sliderPageItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { sliderPageItem } from '../sliderPageItem'
import { mapState, mapActions } from 'vuex'

export default {
  title: 'sliderPage',
  components: {
    sliderPageItem
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      buttonsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeButtons () {
      if (this.buttonsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (object) {
      return {
        id: object.owner.id,
        avatar: object.owner?.avatar_url,
        username: object.owner?.login,
        content: object.readme
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(getComputedStyle(item[slideNdx]).getPropertyValue('width'), 10)

      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)

      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.buttonsShown = false

      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.buttonsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    await this.fetchTrendings()
    await this.loadReadme()
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
  }
}
</script>

<style lang="scss" src="./sliderPage.scss" scoped></style>
