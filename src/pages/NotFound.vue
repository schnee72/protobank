<template>
  <div id="notfound">
    <h2>404</h2>
    <p>¯\_(ツ)_/¯</p>
    <p>{{something}}</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return { something: "not found" };
  },
  mounted() {
    console.log("not found!");
  }
};
</script>

<style lang="scss">
</style>
