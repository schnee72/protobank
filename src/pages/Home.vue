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
    return { something: "This is the home of foobank." };
  },
  mounted() {
    console.log("Home");
  }
};
</script>

<style lang="scss">
</style>
