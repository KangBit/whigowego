<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background-color: #f5f4f8;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button:not(:disabled) {
  cursor: pointer;
}

.btn {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #5c5776;
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.6;
  padding: 0.75rem 1.25rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
}

.btn-white {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}

.btn-primary {
  background-color: #754ffe;
  border-color: #754ffe;
  color: #fff;
}

.btn-success {
  background-color: #19cb98;
  border-color: #19cb98;
  color: #fff;
}
</style>
