<template>
  <nav>
      <div v-bind:class="{ showTheMenu: showMenu }">
        <router-link to="/">home</router-link>
        <router-link to="/accounts">accounts</router-link>
        <router-link to="/tools">tools</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link>
        <a href="javascript:void(0);" class="icon" v-on:click="showMenu = !showMenu">
          <div></div>
          <div></div>
          <div></div>
        </a>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return { showMenu: false };
  }
};
</script>

<style lang="scss">
nav {
  overflow: hidden;
  background: #5f686b;

  a {
    float: left;
    display: block;
    color: #caf6f0;
    text-align: center;
    text-decoration: none;
    padding: 17px 14px;

    @media screen and (max-width: 600px) {
      &:not(:first-child) {
        display: none;
      }
    }
  }

  .router-link-exact-active {
    background: #323b3e;
  }

  .icon {
    width: 30px;
    display: none;
    padding: 13px;

    @media screen and (max-width: 600px) {
      float: right;
      display: block !important;
    }

    div {
      width: 25px;
      height: 3px;
      background-color: #000000;
      margin: 4px 0;
    }
  }

  @media screen and (max-width: 600px) {
    .showTheMenu {
      position: relative;

      .icon {
        position: absolute;
        right: 0;
        top: 0;
      }

      a {
        float: none;
        display: block;
        text-align: left;
      }
    }
  }
}
</style>

