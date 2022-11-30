<template>
  <h1>고객의 소리</h1>
  <table>
    <thead>
      <tr>
        <td>IP</td>
        <td>작성일</td>
        <td>내용</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>211.236.53.138</td>
        <td>2022-11-14</td>
        <td>ㅎㅇ</td>
      </tr>
      <tr>
        <td>116.122.149.2</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>121.141.166.185</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>
  <button class="btn btn-primary btn-more">More</button>
</template>

<style lang="scss" scoped>
table {
  width: 80vw;
  margin-inline: auto;
  border-collapse: collapse;
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
    width: 40%;
  }
  &:nth-of-type(2) {
    width: 30%;
  }
  &:nth-of-type(3) {
    width: 30%;
  }
  padding: 0.75rem 1.5rem;
}
</style>
