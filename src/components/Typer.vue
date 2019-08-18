<template>
  <vue-typer :text="skills" :type-delay="300"></vue-typer>
</template>
<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Typer",
  components: {
    VueTyper
  },
  props: {
    skills: Array
  }
};
</script>

<style lang="scss">
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  .left {
    float: none !important;
  }
  .right {
    float: none !important;
  }
  .custom.char {
    &.typed {
      color: #00ff00;
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
    &.selected {
      color: #00ff00;
      background-color: transparent;
      font-size: 14px;
      @media screen and (max-width: 767px) and (min-width: 480px) {
        font-size: 20px;
      }
      @media screen and (max-width: 1023px) and (min-width: 768px) {
        font-size: 24px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 30px;
      }
    }
  }
  .custom.caret {
    &.typing {
      width: 10px;
      background-color: #00ff00;
    }
    &.selecting {
      background-color: #00ff00;
    }
    &.erasing {
      background-color: #00ff00;
    }
  }
}
</style>
