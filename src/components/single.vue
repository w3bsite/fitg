<template>
  <div style="direction: rtl; height: 2000px">
    <v-img :src="`/img/1/1big/` + game.data.title + `.jpg`">
      <v-overlay opacity="0" absolute color="grey lighten-4 "> </v-overlay>
    </v-img>

    <singledata :game="game" />
  </div>
</template>

<script>
import singledata from "./singledata.vue";
export default {
  components: { singledata },
  name: "single",
  data() {
    return {};
  },
  chimera: {
    game() {
      return {
        url: this.$url + `/` + this.$route.params.id,
        method: "get",
      };
    },
  },
};
</script>

<style>
</style>