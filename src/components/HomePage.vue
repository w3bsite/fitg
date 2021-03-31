<template>
  <div>
    <v-container class="" v-if="apig.data" fluid>
      <topslider :games="apig.data"></topslider>
    </v-container>

    <v-container fluid>
      <v-sheet outlined>
        <v-row align="center">
          <v-col class="mx-auto" cols="12" sm="12"> <Test></Test> </v-col
        ></v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import Test from "../views/Test.vue";
import topslider from "./HomePage/topslider.vue";
export default {
  data() {
    return { items: ["اکشن", "اول شخص", "شوتر", "ورزشی", "RPG"], genre: "ا" };
  },
  components: { topslider, Test },
  chimera: {
    apig() {
      return { url: this.$url };
    },
  },
};
</script>

<style></style>
