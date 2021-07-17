<template lang="pug">
v-app
  Navbar
  v-main
    Searchbar
</template>

<script>
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

export default {
  name: "App",
  components: {
    Navbar,
    Searchbar,
  },
};
</script>
