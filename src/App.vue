<template>
  <div class="bg-gray-500 flex flex-col min-h-screen">
    <Header /><!-- //height 32 -->
    <div class="flex-1 flex w-2/3 mx-auto p-4 text-lg bg-white h-full shadow-lg">
      <div class="content_main">
        <router-view :key="$route.fullPath" />
      </div>
      
    </div>
  </div>
</template>

<script>
import Header from "@/components/site/header/Header.vue";
export default {
  components: {
    Header,
    //LatestPosts
  },
};
</script>

<style>
.content_main {
  width: 100%;
}
</style>
