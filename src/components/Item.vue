<template lang="pug">
v-card
  span Quality
  v-select(
    v-model="quality",
    label="Quality",
    :items="qualities",
    item-color="color",
    @change="setQualitySelectColor",
    ref="qualitySelect"
  )
</template>

<script>
import ItemService from "@/services/Item";

export default {
  name: "Item",

  props: ["itemId"],

  data() {
    return {
      item: null,
      isLoading: false,
      quality: 1,
      qualities: [
        {
          name: "Special",
          color: "cyan",
        },
        {
          name: "Rare",
          color: "lightblue",
        },
        {
          name: "Rare",
          color: "purple",
        },
      ],
    };
  },

  methods: {
    async loadItemDetails() {
      this.toggleLoading();

      this.item = await ItemService.details(this.itemId);
      console.log(this.item);

      this.toggleLoading();
    },

    toggleLoading() {
      this.isLoading = !this.isLoading;
    },

    setQualitySelectColor() {
      this.$refs.qualitySelect.color = this.qualities[this.quality].color;
    },
  },

  mounted() {
    this.loadItemDetails();
  },
};
</script>

<style lang="sass" scoped>

</style>