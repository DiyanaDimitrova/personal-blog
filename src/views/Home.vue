<template>
  <div class="home">
    <Intro
      class="container-background"
      title="Hi! I'm Diyana."
      description="Experienced Full-Stack Engineer located in Sofia."
      dynamicText="Spacialized in "
      contactInfo="get-in-touch-with-me "
      contactName="diyana.dimitrova$"
      :skills="skills"
    />
    <!-- <div>test</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  components: {
    Intro
  },
  data() {
    return {
      skills: [
        "React.",
        "Redux.",
        "Node.",
        "Express.",
        "GraphQL.",
        "Java.",
        "Rails."
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container-background {
  background-image: url("../assets/photo.jpg");
  height: calc(100vh - 100px);
  min-height: 500px;
  background-repeat: no-repeat;
  @media screen and (min-width: 1024px) {
    background-position-x: 700px;
  }
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    background-position-x: 500px;
  }
  @media screen and (max-width: 767px) and (min-width: 668px) {
    background-position-x: 350px;
  }
  @media screen and (max-width: 667px) and (min-width: 480px) {
    background-position-x: 200px;
  }
  @media screen and (max-width: 479px) and (min-width: 375px) {
    background-position-x: 100px;
  }
  @media screen and (max-width: 374px) and (min-width: 320px) {
    background-position-x: 30px;
  }
}
</style>
