<template>
  <main>
    <!-- <BlogHero /> -->
    <Section id="main" class="!pt-0">
      <ContentQuery
        v-slot="{ data }"
        path="/blog"
        :only="[
          'headline',
          'excerpt',
          'date',
          'tags',
          '_path',
          'image',
          'keywords',
        ]"
        :sort="{
          date: -1,
        }"
        :limit="blogCountLimit"
      >
        <BlogList :data="data" />
      </ContentQuery>
    </Section>
  </main>
</template>

<script setup lang="ts">
import { useAsyncData } from "#imports";
import { queryContent } from "#imports";
// Find the number of blogs present
const blogCountLimit = 6;
// const test = async () => {
//   await useAsyncData(`content-/blog`, async () => {
//     const _posts = await queryContent("/blog").only("headline").find();
//     console.log(Math.ceil(_posts.length / blogCountLimit));
//     return Math.ceil(_posts.length / blogCountLimit);
//   });
// };
// test();

const { data } = await useAsyncData(`content-/blog`, async () => {
  const _posts = await queryContent("/blog").only("headline").find();
  console.log(Math.ceil(_posts.length / blogCountLimit));
  return Math.ceil(_posts.length / blogCountLimit);
});
</script>
