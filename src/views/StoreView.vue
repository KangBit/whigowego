<template>
  <h1>판매처 목록</h1>
  <table>
    <thead>
      <tr>
        <td>판매처</td>
        <td>주소</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>이마트 트레이더스</td>
        <td></td>
      </tr>
      <tr>
        <td>홈플러스</td>
        <td>서울특별시 강서구 화곡로 398</td>
      </tr>
      <tr>
        <td>우주식품 가락지점</td>
        <td>서울 송파구 양재대로 932 가락몰3관 1층 1-1호</td>
      </tr>
    </tbody>
  </table>
</template>

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
    width: 30%;
  }
  &:nth-of-type(2) {
    width: 70%;
  }
  padding: 0.75rem 1.5rem;
}
</style>
