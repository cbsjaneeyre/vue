<template>
  <div class="c-top">
    <div class="g-container">
      <div class="headline">
        <slot name="headline"></slot>
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./top.scss" scoped></style>
