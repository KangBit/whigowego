<template>
  <MainBanner></MainBanner>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainBanner from "../components/Main/MainBanner.vue";

export default defineComponent({
  name: "MainView",
  components: {
    MainBanner,
  },
});
</script>
