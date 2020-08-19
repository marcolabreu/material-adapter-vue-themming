<template>
  <div>
    <h2>Buttons</h2>
    <div>
      <mcw-button>Button</mcw-button>
      <mcw-button outlined>Button</mcw-button>
      <mcw-button raised>Button</mcw-button>
      <mcw-button raised disabled>Button</mcw-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons"
};
</script>

<!-- "scoped" limits the styles to this component -->
<style scoped lang="scss">
.mdc-button {
  margin: 0 5px 0;
}
</style>
