<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Ме</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/certificates">Certificates</router-link>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
body {
  background-color: #000;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00ff00;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    padding: 0 30px;
    text-decoration: none;
    text-align: right;
    &.router-link-exact-active {
      color: #00ff00;
    }
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  .custom.char {
    &.typed {
      color: #fff;
    }
    &.selected {
      color: #fff;
      background-color: transparent;
    }
  }
  .custom.caret {
    &.typing {
      width: 10px;
      background-color: #00ff00;
    }
    &.selecting {
      display: inline-block;
      background-color: #00ff00;
    }
    &.erasing {
      background-color: #00ff00;
    }
  }
}
</style>
