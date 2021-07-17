<template>
  <v-container>
    <v-text-field
      v-model="search"
      :loading="isLoading"
      @change="query"
    ></v-text-field>
    <Item v-for="item in items" :key="item.id" :item="item" />
  </v-container>
</template>

<script>
import ItemService from "@/services/Item";
import Item from "@/components/Item";

export default {
  name: "Searchbar",

  components: {
    Item,
  },

  data() {
    return {
      search: null,
      items: [],
      isLoading: false,
    };
  },

  methods: {
    async query() {
      const term = this.search;
      console.log("Loading Items for " + term);
      this.toggleLoading();

      const items = await ItemService.search(term);
      console.log(items);

      this.items = items;

      this.toggleLoading();
    },

    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
  },
};
</script>