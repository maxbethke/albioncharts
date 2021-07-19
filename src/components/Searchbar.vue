<template>
  <v-container>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      item-text="name"
      item-value="uniqueName"
      placeholder="Search for an item"
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
            <strong>Item</strong>
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:item="{ item }">
        <v-img
          :src="
            'https://render.albiononline.com/v1/item/' +
            item.uniqueName +
            '.png?size=' +
            imgWidth
          "
          :max-width="imgWidth"
        ></v-img>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.uniqueName"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-autocomplete>
  </v-container>
</template>

<script>
import ItemService from "@/services/Item";

export default {
  name: "Searchbar",

  props: ["bus"],

  data() {
    return {
      search: null,
      model: null,
      items: [],
      isLoading: false,
      imgWidth: "100",
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

  watch: {
    model(val) {
      console.log("Selected " + this.model);
      this.bus.$emit("select-item", this.model);
    },
    search(val) {
      if (this.items.length > 0) return;

      this.query();
    },
  },
};
</script>