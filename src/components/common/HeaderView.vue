<template>
  <div class="header-container">
    <div @click="goHome">WhiGoWeGo</div>
    <span @click="goVoc">고객의 소리</span>
    <span @click="goDrink">주류</span>
    <span @click="goStore">판매점</span>
    <div><span>Search Drink</span></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderView",
  components: {},
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goVoc() {
      this.$router.push("/voc");
    },
    goDrink() {
      this.$router.push("/drink");
    },
    goStore() {
      this.$router.push("/store");
    },
  },
});
</script>

<style lang="scss">
.header-container {
  display: flex;
}
</style>
