<template>
  <header>
    <h1 style="color: whitesmoke"><a @click="navigateTo('/')"> UKKIDOKI</a></h1>
    <div class="links">
      <LinkGithub />
    </div>
  </header>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px $container-padding-x-pc 30px;
  @include mobile {
    padding: 40px $container-padding-x-mo;
  }
}
nav {
  ul {
    display: flex;
    gap: 20px;
  }
}
</style>
