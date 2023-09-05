<template>
  <TheContainer :size="'narrow'">
    <PostDetailSkeleton v-if="!articleReady" />
    <ContentDoc>
      <template #default="{ doc }">
        <BlogTableOfContents :links="doc.body?.toc?.links" />
        <article v-show="articleReady">
          <div class="wrap-info">
            <h2 class="title">{{ doc.headline }}</h2>
            <p class="date">{{ doc.date }}</p>
            <ul class="keywords">
              <li
                v-for="(keyword, keywordIndex) in doc.keywords"
                :key="`keyword${keywordIndex}`"
                class="keyword"
              >
                {{ keyword }}
              </li>
            </ul>
          </div>
          <div ref="article" class="article">
            <ContentRenderer :value="doc" />
          </div>
          <div class="article-bottom">
            <p class="text-ps">
              <strong>수정이 필요한 부분</strong> 혹은
              <strong>더 나은 방법</strong>을 알고계신가요? <br />
              댓글로 알려주시면 저에게 큰 도움이 됩니다! 😊💜
            </p>
          </div>
        </article>
        <!-- Content -->
        <!-- Scroll to top -->
        <NavScrollTopIcon />
      </template>
      <!-- Error in case not found -->
      <template #not-found>
        <SectionsError />
      </template>
    </ContentDoc>
  </TheContainer>
</template>

<script setup>
// const { $formatDate } = useNuxtApp();
// const { path } = useRoute();
// const cleanPath = path.replace(/\/+$/, "");
const articleReady = ref(false);
const contents = ref("");
onMounted(() => {
  articleReady.value = true;
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/scss/PostDetail.scss";
</style>
