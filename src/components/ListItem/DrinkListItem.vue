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
// 'sm': '640px' // @media (min-width: 640px)
// 'md': '768px' // @media (min-width: 768px)
// 'lg': '1024px' // @media (min-width: 1024px)
// 'xl': '1280px' // @media (min-width: 1280px)
// '2xl': '1536px' // @media (min-width: 1536px)

// mobile: '360px' // @media (min-width: 360px)
// foldable: '523px' // @media (min-width: 523px)
// tablet: '768px' // @media (min-width: 768px)
// 'under-foldable': { max: '522px' } // @media (max-width: 522px)
// 'under-tablet': { max: '767px' } // @media (max-width: 767px)
// 'under-mobile': { max: '359px' } // @media (max-width: 359px)

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .card {
    width: 48%;
  }
}
@media (min-width: 1024px) {
  .card {
    width: 31%;
  }
}

.card {
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
  line-height: 1.4;
  font-weight: 500;
  p {
    font-size: 1rem;
    margin-block: 0;
    margin-bottom: 0.5rem;

    &:first-of-type {
      font-size: 1.25rem;
    }
  }
}
</style>
