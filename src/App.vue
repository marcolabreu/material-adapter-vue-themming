<template>
  <div id="app">
    <Main header="Material Components" />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
const state = { preferDark: false };

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", e => {
    state.preferDark = e.matches;
    // console.log("Dark mode is " + state.preferDark);
  });

export default {
  name: "App",
  data() {
    return {
      preferDark: state.preferDark
    };
  },
  components: {
    Main
  }
};
</script>

<style lang="scss">
@use "styles";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Roboto+Mono:wght@300;400;500&display=swap");

#app {
  font-family: Roboto Mono, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
