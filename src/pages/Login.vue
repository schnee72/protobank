<template>
  <div id="login">
    <transition name="fade">
      <div v-if="loaded">
        <p><input v-model="userName"
            placeholder=" -- user name -- "
            v-on:keyup.enter="$refs.next.focus"
            autofocus /></p>
        <p><input type="password"
            ref="next"
            v-model="password"
            v-on:keyup.enter="login"
            placeholder=" -- password -- " /></p>
        <p><button v-on:click="login">Login</button></p>
        <p class="error">{{ errorMessage }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      errorMessage: "",
      loaded: false
    };
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    ...mapMutations(["authenticate"]),
    login() {
      // TODO this is just to prove it works, make real auth!
      if (this.userName && this.password) {
        this.errorMessage = "";
        this.authenticate();
        this.$router.push("/");
      } else {
        this.errorMessage = "User name and/or password are incorrect.";
      }
    }
  }
};
</script>

<style lang="scss">
button {
  padding: 10px 30px;
  color: #caf6f0;
  background: #5f686b;
  border: none;

  &:hover {
    cursor: pointer;
  }
}

.error {
  color: #d81818;
}
</style>
