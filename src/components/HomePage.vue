<template>
  <div>
    <v-container class="" v-if="apig.data" fluid>
      <topslider :games="apig.data"></topslider>
    </v-container>

    <v-container fluid>
      <v-sheet outlined>
        <v-row align="center">
          <v-col class="mx-auto" cols="12" sm="3">
            <v-select
              v-model="genre"
              :items="items"
              label=""
            ></v-select> </v-col
        ></v-row>
        <GetGames :genre="genre"></GetGames>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import GetGames from "./GetGames.vue";
import topslider from "./HomePage/topslider.vue";
export default {
  data() {
    return { items: ["اکشن", "اول شخص", "شوتر", "ورزشی", "RPG"], genre: "ا" };
  },
  components: { topslider, GetGames },
  chimera: {
    apig() {
      return { url: this.$url };
    },
  },
};
</script>

<style></style>
