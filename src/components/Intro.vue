<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="wrapper" xs9 sm6 md8 lg8>
        <h1>{{ title }}</h1>
        <h2>{{ description }}</h2>
        <h2>{{ dynamicText }}<app-typer :skills="skills"></app-typer></h2>
        <h3>
          <span>{{ contactInfo }}</span>
          <span class="name">{{ contactName }}</span>
        </h3>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  props: {
    title: String,
    description: String,
    dynamicText: String,
    contactInfo: String,
    contactName: String,
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

  .name {
    color: #00ff00;
  }

  h1 {
    margin: 0;
    color: #fff;
    text-align: left;
    padding-left: 10px;
    font-size: 20px;
    @media screen and (min-width: 1024px) {
      font-size: 72px;
      padding-left: 50px;
    }
    @media screen and (max-width: 1023px) and (min-width: 768px) {
      font-size: 50px;
      padding-left: 30px;
    }
    @media screen and (max-width: 767px) and (min-width: 480px) {
      font-size: 40px;
      padding-left: 20px;
    }
  }
  h2 {
    margin: 40px 0;
    color: #fff;
    text-align: left;
    padding-left: 10px;
    font-size: 14px;
    @media screen and (min-width: 1024px) {
      font-size: 30px;
      padding-left: 50px;
    }
    @media screen and (max-width: 1023px) and (min-width: 768px) {
      font-size: 24px;
      padding-left: 30px;
    }
    @media screen and (max-width: 767px) and (min-width: 480px) {
      font-size: 20px;
      padding-left: 20px;
    }
  }
  h3 {
    margin: 40px 0;
    color: #fff;
    text-align: left;
    padding-left: 10px;
    font-size: 20px;
    @media screen and (min-width: 1024px) {
      font-size: 36px;
      padding-left: 50px;
    }
    @media screen and (max-width: 1023px) and (min-width: 768px) {
      font-size: 30px;
      padding-left: 30px;
    }
    @media screen and (max-width: 767px) and (min-width: 480px) {
      font-size: 24px;
      padding-left: 20px;
    }
  }
  ul {
    list-style-type: none;
    padding-left: 0px;
    text-align: left;
    @media screen and (min-width: 1024px) {
      padding-left: 40px;
    }
    @media screen and (max-width: 1023px) and (min-width: 768px) {
      padding-left: 20px;
    }
    @media screen and (max-width: 767px) and (min-width: 480px) {
      padding-left: 10px;
    }
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #00ff00;
    text-align: left;
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
}
</style>
