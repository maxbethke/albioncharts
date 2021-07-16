<template>
  <v-text-field
    v-model="search"
    :loading="isLoading"
    @change="query"
  ></v-text-field>
</template>

<script>
import ItemService from "@/services/Item";

export default {
  name: "Searchbar",

  data() {
    return {
      search: null,
      items: [],
      isLoading: false,
    };
  },

  methods: {
    async query() {
      const term = this.search
      console.log('Loading Items for '+term)
      this.toggleLoading();

      const items = await ItemService.search(term);
      console.log(items)

      this.items = items

      this.toggleLoading();
    },

    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
  },
};
</script>