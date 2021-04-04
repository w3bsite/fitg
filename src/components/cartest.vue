<template>
  <v-btn @click="globalclick">button is {{ bt }}</v-btn>
</template>

<script>
import { EventBus } from "../main.js";
export default {
  data() {
    return { bt: 0 };
  },
  methods: {
    globalclick: function () {
      this.bt++;
      EventBus.change(this.bt);
    },
  },
};
</script>

<style>
</style>