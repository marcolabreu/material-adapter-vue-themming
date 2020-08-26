<template>
  <div>
    <h2>Text Fields</h2>

    <form>
      <p>Outlined data: {{ formData.outlined }}</p>
      <mcw-textfield
        outline
        v-model="formData.outlined"
        label="Outlined"
      ></mcw-textfield>
    </form>
  </div>
</template>

<script>
export default {
  name: "TextFields",
  data() {
    return {
      formData: {
        outlined: "",
      },
    };
  },
};
</script>

<!-- "scoped" limits the styles to this component -->
<style scoped lang="scss"></style>
