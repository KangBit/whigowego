<template>
  <table>
    <thead>
      <tr>
        <td>이름</td>
        <td>용량(ML)</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.capacity }}ML</td>
      </tr>
    </tbody>
  </table>
  <button class="btn btn-primary btn-more">More</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sampleData from "../sampleData";

export default defineComponent({
  name: "DrinkView",
  components: {},
  props: {},
  data() {
    return {
      list: sampleData,
    };
  },
});
</script>

<style lang="scss" scoped>
table {
  width: 80vw;
  margin-inline: auto;
  border-collapse: collapse;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
}

thead {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
}

tbody {
  font-size: 0.875rem;
  font-weight: 400;
}

tr {
  border-bottom: 1px solid #ecebf1;
}

td {
  &:nth-of-type(1) {
    width: 70%;
  }
  &:nth-of-type(2) {
    width: 30%;
  }
  text-align: left;
  padding: 0.75rem 1.5rem;
}
</style>
