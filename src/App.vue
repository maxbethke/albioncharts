<template lang="pug">
v-app
  Navbar
  v-main
    v-container
      Searchbar(:bus="itemBus")
      Item(v-if="selectedItemId", :itemId="selectedItemId")
</template>

<script>
import Vue from "vue";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Item from "./components/Item";

export default {
  name: "App",

  components: {
    Navbar,
    Searchbar,
    Item,
  },

  data() {
    return {
      selectedItemId: null,
      itemBus: new Vue(),
    };
  },

  methods: {
    selectItem(item) {
      this.selectedItemId = item;
    },
  },

  mounted() {
    this.itemBus.$on("select-item", this.selectItem);
  },
};
</script>
