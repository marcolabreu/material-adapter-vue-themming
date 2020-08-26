<template>
  <div class="main">
    <img alt="Vue logo" width="200" src="../assets/logo.svg" />
    <h1>{{ header }}</h1>
    <p>
      Material Design Web Components themed for
      <a href="https://www.mixvoip.com">MIXvoip</a>, the fastest growing VoIP provider in Luxembourg.
      To speed-up development we adopted
      <a href="https://github.com/pgbross/vue-material-adapter"
        >vue-material-adapter</a
      >
      as our component wrapper.
    </p>

    <Buttons />

    <TextFields />
  </div>
</template>

<script>
import Buttons from "./Buttons";
import TextFields from "./TextFields";

export default {
  name: "Main",
  components: {
    Buttons,
    TextFields,
  },
  props: {
    header: String,
  },
};
</script>

<!-- "scoped" limits the styles to this component -->
<style scoped lang="scss">
.main {
  margin: 40px auto;
  max-width: 700px;
  min-width: 468px;
  padding: 0 2em;
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
