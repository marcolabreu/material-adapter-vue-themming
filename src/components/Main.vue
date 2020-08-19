<template>
  <div class="hello">
    <img alt="Vue logo" width="200" src="../assets/logo.png" />
    <h1>{{ header }}</h1>
    <p>
      A CodeSandbox using components from
      <a href="https://github.com/matsp/material-components-vue"
        >material-components-vue</a
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
<style scoped>
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
