<template>
  <div :class="['wrap-list-post', `view-${isCardList ? 'card' : 'list'}`]">
    <div class="list-top-area">
      <nav class="area-tag">
        <h2 class="ir">태그</h2>
        <ul class="tags">
          <li
            v-for="(tag, i) in tags"
            :key="`tag${i}`"
            :class="[{ selected: selectedTagIndex === i }, 'tag']"
          >
            <button class="btn-tag" @click="clickTag(i)">{{ tag }}</button>
          </li>
        </ul>
      </nav>

      <button
        class="toggle-list-type"
        :title="isCardList ? '리스트 스타일로 보기' : '카드 스타일로 보기'"
        @click="isCardList = !isCardList"
      >
        <Icon :type="isCardList ? 'list' : 'grid'" />
      </button>
    </div>
    <div class="list-post">
      <div
        v-for="(post, i) in selectedPostList()"
        :key="`post${i}`"
        class="post"
      >
        <router-link :to="post.name" class="link-post">
          <p v-if="!isCardList" class="date">{{ post.date }}</p>
          <h3
            class="title"
            :style="isCardList ? `background-color:${randomRgba()};` : ''"
          >
            <span class="title-text" v-html="post.title"></span>
          </h3>
          <div class="wrap-info">
            <ul class="keywords">
              <li
                v-for="(keyword, keywordIndex) in post.keywords"
                :key="`keyword${keywordIndex}`"
                class="keyword"
              >
                {{ keyword }}
              </li>
            </ul>
            <p v-if="isCardList" class="date">{{ post.date }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <!-- <div class="list-post">
      <div
        v-for="(post, i) in selectedPostList()"
        :key="`post${i}`"
        class="post"
      >
        <router-link :to="post.name" class="link-post">
          <p v-if="!isCardList" class="date">{{ post.date }}</p>
          <h3
            class="title"
            :style="isCardList ? `background-color:${randomRgba()};` : ''"
          >
            <span class="title-text" v-html="post.title"></span>
          </h3>
          <div class="wrap-info">
            <ul class="keywords">
              <li
                v-for="(keyword, keywordIndex) in post.keywords"
                :key="`keyword${keywordIndex}`"
                class="keyword"
              >
                {{ keyword }}
              </li>
            </ul>
            <p v-if="isCardList" class="date">{{ post.date }}</p>
          </div>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { randomRgba } from "@/utils";
import { ref, computed } from "vue";
const props = defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
});
const isCardList = ref(true);
const tags = ref([
  "javascript",
  "Vue",
  "Dart / Flutter",
  "HTML / CSS",
  "TIL",
  "개발기",
  "라이브러리",
  "번역",
  "접근성",
  "etc",
]);

const selectedTagIndex = ref(null);
// const selectedTag = computed(() => {
//   return tags.value[selectedTagIndex.value];
// });
const randomRgba = () => {
  return randomRgba(120, 180, 0.6);
};
const selectedPostList = () => {
  if (selectedTagIndex.value === null) return props.posts;

  // const result = props.posts.filter(({ tags }) =>
  //   tags.includes(selectedTag.value)
  // );

  // return result;
};
const clickTag = (i: any) => {
  if (selectedTagIndex.value === i) {
    selectedTagIndex.value = null;
    return;
  }
  selectedTagIndex.value = i;
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/PostList.scss";
</style>
