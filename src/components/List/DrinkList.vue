<template>
  <div class="list-container">
    <h2 class="list-title">{{ title }}</h2>
    <div class="drink-list">
      <DrinkListItem v-for="idx in 6" :key="idx"></DrinkListItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DrinkListItem from "../ListItem/DrinkListItem.vue";

export default defineComponent({
  name: "DrinkList",
  components: {
    DrinkListItem,
  },
  props: {
    title: {
      type: String,
      default: "최신 가격",
    },
  },
});
</script>

<style lang="scss" scoped>
.list-container {
  display: inline-block;
  width: 80vw;
}
.list-title {
  text-align: left;
}
.drink-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
