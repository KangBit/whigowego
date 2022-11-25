<template>
  <HeaderView />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderView from "../components/common/HeaderView.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderView,
  },
});
</script>
