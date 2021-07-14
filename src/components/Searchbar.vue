<template>
  <v-autocomplete
    v-model="searchTerm"
    :loading="isLoading"
    @change="query"
    item-text="name"
    item-value="uniqueName"
  ></v-autocomplete>
</template>

<script>
import ItemService from "@/services/Item";

export default {
  name: "Searchbar",

  data() {
    return {
      searchTerm: "",
      items: [],
      isLoading: false,
    };
  },

  methods: {
    async query() {
      console.log("QQ");
      this.toggleLoading();
      this.items = await ItemService.search(this.searchTerm);
      this.toggleLoading();
    },

    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
  },

  watch: {
    searchTerm() {
      this.query();
    },
  },
};
</script>