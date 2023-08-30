<template>
  <TheContainer>
    <article v-show="articleReady">
      <div class="wrap-info">
        <h2 class="title">{{ mdData[0].headline }}</h2>
        <p class="date">{{ mdData[0].date }}</p>
        <ul class="keywords">
          <li
            v-for="(keyword, keywordIndex) in mdData[0].keywords"
            :key="`keyword${keywordIndex}`"
            class="keyword"
          >
            {{ keyword }}
          </li>
        </ul>
      </div>
    </article>
    <div ref="article" class="article">
      <ContentDoc />
    </div>
    <div class="article-bottom">
      <p class="text-ps">
        <strong>수정이 필요한 부분</strong> 혹은 <strong>더 나은 방법</strong>을
        알고계신가요? <br />
        댓글로 알려주시면 저에게 큰 도움이 됩니다! 😊💜
      </p>
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { ref, useRoute } from "#imports";
import { useAsyncData } from "#imports";
import { queryContent } from "#imports";
const { $formatDate } = useNuxtApp();
const route = useRoute();
console.log(route.params.slug[0]);
const articleReady = ref(true);
const mdData = ref([] as any);
const { data } = await useAsyncData(`content-/blog`, async () => {
  return await queryContent(`/blog/${route.params.slug[0]}`).find();
});
mdData.value = data.value;
console.log(mdData.value[0]);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/PostDetail.scss";
</style>
