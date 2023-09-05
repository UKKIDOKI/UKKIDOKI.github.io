<template>
  <nav class="outLiner">
    <h2 class="ir">글 목차 (클릭하여 바로가기)</h2>
    <ul>
      <li
        v-for="(title, i) in props.outlines as any"
        :key="`outline${i}`"
        :class="[
          { active: activeIndex === i },
          { 'title-sub': title.isSubIndex },
        ]"
      >
        <a :href="`#${title.id}`">
          {{ title.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  outlines: {
    type: Array,
    default: () => [],
  },
});
const activeIndex = ref(-1);
const scrolling = ref(false);
onMounted(() => {
  document.addEventListener("scroll", scrollHandler);
});
onBeforeUnmount(() => {
  document.removeEventListener("scroll", scrollHandler);
});
const scrollHandler = () => {
  if (scrolling.value) return;
  scrolling.value = true;
  setActiveTitle();
  setTimeout(() => {
    scrolling.value = false;
  }, 200);
};
const setActiveTitle = () => {
  const titleEls = document.querySelectorAll("h3, h4") as any;
  if (!titleEls) return;
  const articleEl = document.querySelector(".article") as any;
  const articleOffsetBottom = articleEl.offsetTop + articleEl.offsetHeight;
  const windowScrY = window.scrollY + 100;

  titleEls.forEach((titleEl: any, i: any) => {
    const isLastIndex = titleEls.length === i + 1;
    const nextOffset = isLastIndex
      ? articleOffsetBottom
      : titleEls[i + 1].offsetTop;
    const isTitleOnScroll =
      titleEl.offsetTop <= windowScrY && windowScrY < nextOffset;
    const isScrollArticleOut =
      windowScrY < titleEls[0].offsetTop || articleOffsetBottom < windowScrY;

    activeIndex.value = isScrollArticleOut
      ? -1
      : isTitleOnScroll
      ? i
      : activeIndex.value;
  });
};
</script>

<style lang="scss">
$top: 120px;
.outLiner {
  overflow-y: auto;
  position: fixed;
  top: $top;
  left: calc(50% + ($container-narrow-width / 2) + 20px);
  max-height: calc(100vh - $top - 35px);
  margin-left: 10px;
  padding: 0 5px 0 15px;
  border-left: 1px solid var(--line-light-gray);
  font-weight: var(--font-light);
  font-size: 14px;
  @include scrollDesign;
  ul {
    li {
      opacity: 0.5;
      transition: 0.2s opacity;
      &.active {
        font-weight: var(--font-medium);
        opacity: 1;
      }
      &:nth-child(n + 2) {
        margin-top: 0.6em;
        &.title-sub {
          margin-top: 0.35em;
        }
      }
      &.title-sub {
        padding-left: 1em;
      }
    }
  }
}
</style>
