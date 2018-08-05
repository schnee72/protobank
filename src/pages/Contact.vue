<template>
  <div id="contact">
    <h2>contact</h2>
    <p>{{ something }}</p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return { something: "There will be contact." };
  },
  mounted() {
    console.log("counter!");
  }
};
</script>

<style lang="scss">
</style>
