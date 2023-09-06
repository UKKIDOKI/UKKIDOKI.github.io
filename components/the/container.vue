<template>
  <div :class="`container size-${props.size}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "wide",
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  padding: 50px $container-padding-x-pc;
  box-sizing: content-box;
  @include pc {
    $header-height: 121px;
    min-height: calc(100vh - #{$header-height});
    &.size-narrow {
      width: $container-narrow-width;
      margin: 0 auto;
    }
  }
  @include mobile {
    $header-height: 112px;
    min-height: calc(100vh - #{$header-height});
    padding: 30px $container-padding-x-mo;
  }
}
</style>
