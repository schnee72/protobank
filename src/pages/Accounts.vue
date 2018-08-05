<template>
  <div id="accounts">
    <h2>accounts</h2>
    <p>{{ something }}</p>
  </div>
</template>

<script>
export default {
  name: "Accounts",
  data() {
    return { something: "there are accounts" };
  },
  mounted() {
    console.log("accounts!");
  }
};
</script>

<style lang="scss">
</style>
