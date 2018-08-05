<template>
  <div id="about">
    <h2>about</h2>
    <p>{{ something }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return { something: "This is a prototype banking app." };
  },
  mounted() {
    console.log("about!");
  }
};
</script>

<style lang="scss">
</style>
