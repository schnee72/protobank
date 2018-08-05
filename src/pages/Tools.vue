<template>
  <div id="tools">
    <h2>tools</h2>
    <p>{{ something }}</p>
  </div>
</template>

<script>
export default {
  name: "Tools",
  data() {
    return { something: "Tools are helpful." };
  },
  mounted() {
    console.log("tools!");
  }
};
</script>

<style lang="scss">
</style>
