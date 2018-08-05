<template>
  <div id="home">
    <h2>home</h2>
    <p>{{something}}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { something: "this is the home of protobank" };
  },
  mounted() {
    console.log("Home");
  }
};
</script>

<style lang="scss">
</style>
