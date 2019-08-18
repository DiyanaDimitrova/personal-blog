<template>
  <div id="app">
    <div id="nav">
      <!-- <v-toolbar color="black">
        <v-toolbar-title class="title">DIYANA</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only navigation">
          <router-link to="/">HOME</router-link>
          <router-link to="/about">ABOUT МE</router-link>
          <router-link to="/skills">SKILLS</router-link>
          <router-link to="/projects">PROJECTS</router-link>
          <router-link to="/certificates">CERTIFICATES</router-link>
        </v-toolbar-items>
      </v-toolbar> -->
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
    padding: 20px 30px 0 30px;
    text-decoration: none;
    text-align: right;
    &.router-link-exact-active {
      color: #00ff00;
    }
  }
}
.title {
  color: #00ff00;
  font-weight: bold;
}
</style>
