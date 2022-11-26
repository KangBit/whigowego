<template>
  <div class="navbar">
    <!-- <router-link to="/">Home</router-link> | -->
    <div class="navbar-brand" @click="goHome">WhiGoWeGo</div>
    <span class="navbar-item" @click="goVoc">고객의 소리</span>
    <span class="navbar-item" @click="goDrink">주류</span>
    <span class="navbar-item" @click="goStore">판매점</span>
    <input class="navbar-search" placeholder="Search Drink" />
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

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
}

.navbar-brand {
  margin-right: 1rem;
  color: #754ffe;
  font-weight: 400;
  cursor: pointer;
}

.navbar-item {
  padding: 0.3125rem 0.35rem;
  color: #18113c;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

.navbar-search {
  margin-left: 1rem;
  border: 1px solid #e8e7ed;
  padding: 0.75rem 1.25rem;
}
</style>
