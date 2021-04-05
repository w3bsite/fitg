<template>
  <div>
    <div v-for="(game, i) in cart" :key="i">
      <v-divider inset />
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            :src="`/img/1/` + game.title + `.jpg`"
            :lazy-src="`/img/1/` + game.title + `.jpg`"
            alt="0"
          />
        </v-list-item-avatar>
        <v-list-item-title>
          {{ game.title }}
        </v-list-item-title>
        <v-list-item-title class="ml-8">
          <span class="text-body-2"> {{ (game.number / 4) * 6000 }} T</span>
        </v-list-item-title>
      </v-list-item>
    </div>
    <div v-if="sum">
      <v-divider />
      <v-spacer></v-spacer>

      <div class="d-flex flex-column">
        <v-spacer></v-spacer>
        <v-card-actions class="mr-16 justify-end"
          >{{ sum }} تعداد کل: عدد
        </v-card-actions>

        <v-card-actions class="mr-16 justify-end"
          >{{ sum }} قیمت کل : تومان
        </v-card-actions>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main.js";
export default {
  data() {
    return { cart: [] };
  },
  computed: {
    sum() {
      return this.cart.reduce(
        (sum, { number }) => sum + (number / 4) * 6000,
        0
      );
    },
  },
  created() {
    EventBus.$on("cl", (e) => {
      this.cart = [...this.cart, e];
    });
  },
};
</script>

<style>
</style>