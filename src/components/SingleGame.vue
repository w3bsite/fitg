<template>
  <v-expand-x-transition>
    <div v-if="game">
      <div>
        <v-img eager :src="`/img/1/1big/` + game.title + `.jpg`">
          <div class="fill-height repeating-gradient"></div>
        </v-img>

        <Singledata :game="game" />
        <Relatedalert :title="game.title" :id="game.id"></Relatedalert>
        <Relatedslide
          style="direction: ltr"
          :game="game"
          :Genre="this.game.caption"
          :id="this.game.id"
        ></Relatedslide>
      </div>
    </div>
  </v-expand-x-transition>
</template>

<script>
import Relatedalert from "./SingleGame/relatedalert.vue";
import Relatedslide from "./SingleGame/relatedslide.vue";
import Singledata from "./SingleGame/singledata.vue";
export default {
  components: { Singledata, Relatedslide, Relatedalert },
  props: { single: { type: Object } },
  name: "single",
  data() {
    return {};
  },
  //check for page refresh to see if it's needed to  fetch games again or not
  computed: {
    game() {
      if (!this.single) {
        return this.apig.data;
      } else {
        return this.single;
      }
    },
  },
  // check for games object so if it's not empty use the object in hand (passed from the parent component)
  mounted() {
    if (!this.game) {
      this.singlegame = this.apig.data;
    } else {
      console.log(this.apig.data);
    }
  },
  //fetch method for games if from above concluded we need another fetch (games object is empty for any reason)
  chimera() {
    return {
      apig: this.$url + "/" + this.$route.params.id,
    };
  },
};
</script>

<style></style>
