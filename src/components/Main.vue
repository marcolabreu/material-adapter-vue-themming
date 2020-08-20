<template>
  <div class="main">
    <img alt="Vue logo" width="200" src="../assets/logo.png" />
    <h1>{{ header }}</h1>
    <p>
      A CodeSandbox applying theming to Material Design Web Components in Vue
      using
      <a href="https://github.com/pgbross/vue-material-adapter"
        >vue-material-adapter</a
      >
      project.
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
    TextFields
  },
  props: {
    header: String
  }
};
</script>

<!-- "scoped" limits the styles to this component -->
<style scoped lang="scss">
.main {
  max-width: 700px;
  margin: auto;
  padding: 0 2em;
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

a {
  color: #42b983;
}
</style>
