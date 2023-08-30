<template>
  <div :class="['wrap-list-post', `view-${isCardList ? 'card' : 'list'}`]">
    <div class="list-post">
      <div
        v-for="article in props.data as any"
        :key="article._path"
        class="post"
      >
        <NuxtLink :to="article._path + '/'" class="link-post">
          <p v-if="!isCardList" class="date">{{ article.date }}</p>
          <h3
            class="title"
            :style="
              isCardList
                ? `background-color:${$randomRgba(120, 180, 0.6)};`
                : ''
            "
          >
            <span class="title-text">{{ article.headline }}</span>
          </h3>
          <div class="wrap-info">
            <!-- <p class="description">{{ post.description }}</p> -->
            <ul class="keywords">
              <li
                v-for="(keyword, keywordIndex) in article.keywords"
                :key="`keyword${keywordIndex}`"
                class="keyword"
              >
                {{ keyword }}
              </li>
            </ul>
            <p v-if="isCardList" class="date">
              {{ article.date }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { ref } from "vue";
const isCardList = ref(true);
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    default:
      "There are no posts right now, but stay tuned for newer releases in the future.",
  },
});
const { $formatDate, $randomRgba } = useNuxtApp();
</script>
<style lang="scss" scoped>
@import "@/assets/styles/scss/PostList.scss";
</style>
