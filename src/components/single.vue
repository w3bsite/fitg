<template>
  <div style="direction: rtl">
    <v-img :src="`/img/1/1big/` + game.title + `.jpg`">
      <div class="fill-height repeating-gradient"></div>
    </v-img>

    <singledata :game="game" />
  </div>
</template>

<script>
import singledata from "./singledata.vue";
export default {
  components: { singledata },
  props: { single: { type: Object } },
  name: "single",
  data() {
    return {};
  },
  computed: {
    singlegame() {
      return this.apig.data;
    },
    game() {
      if (!this.single) {
        return this.singlegame;
      } else {
        return this.single;
      }
    },
  },
  mounted() {
    if (!this.game) {
      this.singlegame = this.apig.data;
    } else {
      console.log(this.apig.data);
    }
  },
  chimera: {
    apig() {
      return this.$url + "/" + this.$route.params.id;
    },
  },
};
</script>

<style>
</style>