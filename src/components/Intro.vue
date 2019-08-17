<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="wrapper" xs9 sm6 md8 lg8>
        <h1>{{ title }}</h1>
        <h2>{{ description }}</h2>
        <h2>
          {{ dynamicText }}
          <vue-typer :text="skills" :type-delay="300"></vue-typer>
          <h3>$get-in-touch-with-me</h3>
          <ul>
            <li>
              <a href="mailto:diyana.dimitrova.1992@gmail.com">
                ContactMe/
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/diyana-dimitrova-9b950994"
                target="_blank"
                rel="noopener"
              >
                LinkedIn/
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DiyanaDimitrova"
                target="_blank"
                rel="noopener"
              >
                GitHub/
              </a>
            </li>
          </ul>
        </h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  components: {
    VueTyper
  },
  props: {
    title: String,
    description: String,
    dynamicText: String,
    skills: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 100%;
}
.wrapper {
  padding: 30px 0;
  @media screen and (min-width: 1024px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 767px) and (min-width: 480px) {
    padding: 40px 0;
  }
}
h1 {
  margin: 0;
  color: #fff;
  font-size: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 72px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 767px) and (min-width: 480px) {
    font-size: 40px;
  }
}
h2 {
  margin: 40px 0;
  color: #fff;
  font-size: 14px;
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 767px) and (min-width: 480px) {
    font-size: 20px;
  }
}
h3 {
  margin: 40px 0;
  color: #fff;
  font-size: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 767px) and (min-width: 480px) {
    font-size: 24px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00ff00;
  text-decoration: none;
  font-size: 12px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) and (min-width: 480px) {
    font-size: 14px;
  }
}
h1,
h2,
h3,
a {
  text-align: left;
}

h1,
h2 {
  padding-left: 50px;
}
</style>
