<template>
  <div class="bg-purple h-32 p-8 flex justify-around">
    <router-link to="/">
      <div class="text-4xl">
        <img :src="image" width="90" />
      </div>
    </router-link>
    <div class="grid grid-cols-3 divide-x-200 divide-green-500">
      <div class="text-white text-xl dv_height">
        <router-link to="/">Hjem</router-link>
      </div>
      <div class="text-white text-xl dv_height">
        <router-link to="/InkrementeltSok">Inkrementelt Søk</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import image from "@/assets/logo.png";
export default {
  data: function() {
    return {
      image: image,
    };
  },
};
</script>
<style>
.dv_height {
  margin-top: 20px;
}
.bg-purple {
  background: #4f2e90;
}
</style>
