<template>
  <div class="card">
    <div class="card-body">
      <p>{{ item.name }}</p>
      <p>{{ item.manufacturer }}</p>
      <p>{{ item.kind }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DrinkListItem",
  props: {
    item: {
      default() {
        return {
          id: 0,
          alcoholVolume: 0,
          capacity: 0,
          kind: "블랜디드 위스키",
          manufacturer: "디아지오",
          name: "조니워커 블루 레이블",
        };
      },
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
.card {
  width: 30%;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgb(3 0 71 / 9%);
  margin-bottom: 1.5rem;
  background-color: #fff;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.5rem;
  text-align: left;
}
</style>
