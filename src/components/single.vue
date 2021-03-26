<template>
  <div v-if="this.game" style="direction: rtl">
    <div>
      <v-img eager :src="`/img/1/1big/` + game.title + `.jpg`">
        <div class="fill-height repeating-gradient"></div>
      </v-img>

      <singledata :game="this.game" />
      <div>
        <v-alert
          v-model="alert"
          border="right"
          close-text="Close Alert"
          color="deep-purple accent-4"
          dark
          dismissible
          class="text-body-1 font-weight-bold mt-6 mb-2"
          style="direction: rtl"
        >
          {{ ".." + game.title.substring(0, 15) }} را دوست داشتید؟ بازی های زیر
          را به شما پیشنهاد میکنیم.
        </v-alert>
        <div class="text-center"></div>
      </div>
      <relatedslide
        style="direction: ltr"
        :Genre="this.game.caption"
        :id="this.game.id"
      ></relatedslide>
    </div>
  </div>
</template>

<script>
import relatedslide from "./relatedslide.vue";
import singledata from "./singledata.vue";
export default {
  components: { singledata, relatedslide },
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