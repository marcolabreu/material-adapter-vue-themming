<template>
  <div id="app">
    <Main header="Material Components" />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style lang="scss">
@forward 'styles';
</style>
