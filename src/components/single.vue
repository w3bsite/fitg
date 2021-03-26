<template>
  <div v-if="this.game" style="direction: rtl">
    <div>
      <v-img :src="`/img/1/1big/` + game.title + `.jpg`">
        <div class="fill-height repeating-gradient"></div>
      </v-img>

      <singledata :game="this.game" />
      <related-genre
        :Genre="this.game.caption"
        :id="this.game.id"
      ></related-genre>
    </div>
  </div>
</template>

<script>
import RelatedGenre from "./related-genre.vue";
import singledata from "./singledata.vue";
export default {
  components: { singledata, RelatedGenre },
  props: { single: { type: Object } },
  name: "single",
  data() {
    return {};
  },
  computed: {
    game() {
      if (!this.single) {
        return this.apig.data;
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
  chimera() {
    return {
      apig: this.$url + "/" + this.$route.params.id,
    };
  },
};
</script>

<style>
</style>