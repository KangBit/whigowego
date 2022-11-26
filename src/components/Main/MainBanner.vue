<template>
  <div class="main-banner">
    <div class="banner-content">
      <h1>위고위고(WhiGo WeGo)</h1>
      <p>위스키를 중심으로 술의 가격 정보를 알려주는 서비스입니다.</p>
      <p>술 이름 또는 상점명을 클릭하시면 상세 페이지로 이동 합니다.</p>
      <a href="/drink" class="btn btn-success mr-2">술 목록</a>
      <a href="/voc" class="btn btn-white">의견 남기기</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainBanner",
});
</script>

<style lang="scss" scoped>
.main-banner {
  width: 100%;
  background-color: rgb(117, 79, 254);
  text-align: center;
  padding-block: 2rem;
}

.banner-content {
  display: inline-block;
  width: 80%;
  text-align: left;

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #fff;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: rgba($color: #fff, $alpha: 0.5);
    margin-top: 0;
  }

  p:nth-of-type(1) {
    margin-bottom: 1.5rem;
  }

  p:nth-of-type(2) {
    margin-bottom: 3.5rem;
  }
}

.mr-2 {
  margin-right: 0.2rem;
}
</style>
