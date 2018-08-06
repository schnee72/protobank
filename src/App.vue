<template>
  <div id="app">
    <transition name="fade">
      <navigation v-if="this.$store.state.isAuthenticated" />
    </transition>
    <div id="main">
      <h1>protobank</h1>
      <transition name="route-fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: { Navigation }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: #3c474b;
  color: #dbddde;
  font-family: monospace;
  font-size: 16px;

  #app {
    .fade-enter-active,
    .fade-leave-active,
    .route-fade-enter-active {
      transition: opacity 500ms;
    }

    .fade-enter,
    .fade-leave-to,
    .route-fade-enter {
      opacity: 0;
    }

    #main {
      margin-left: 20px;
    }

    h1 {
      color: #aff1e9;
    }
  }
}
</style>
