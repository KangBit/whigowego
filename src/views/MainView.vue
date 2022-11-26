<template>
  <MainBanner></MainBanner>
  <div class="container">
    <DrinkList></DrinkList>
  </div>
  <button class="btn btn-primary btn-more">More</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainBanner from "../components/Main/MainBanner.vue";
import DrinkList from "../components/List/DrinkList.vue";

export default defineComponent({
  name: "MainView",
  components: {
    MainBanner,
    DrinkList,
  },
});
</script>

<style lang="scss" scoped>
.btn-more {
  margin-bottom: 5.5rem;
  width: 80vw;
}

.container {
  text-align: center;
  padding-top: 6rem;
}
</style>
