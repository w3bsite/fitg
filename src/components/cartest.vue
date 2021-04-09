<template>
  <div>
    <div v-for="(game, i) in cart" :key="i">
      <v-divider inset />
      <v-list-item v-if="game.num2 > 0">
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
          <span class="text-body-2">
            {{ (game.number / 4) * 6000 * game.num2 }} T</span
          >
        </v-list-item-title>
        <v-list-item-title class="ml-8">
          <span class="text-body-2"> {{ game.number * game.num2 }} Gig</span>
        </v-list-item-title>
        <v-list-item-title class="ml-8">
          <span class="text-body-2">
            {{ Math.round(game.number / 4) * game.num2 }} DVD</span
          >
        </v-list-item-title>
        <v-list-item-title class="ml-8">
          <span v-if="game.num2 == 1" class="text-body-2"> 1 عدد</span>
          <v-text-field
            v-else
            type="number"
            v-model="game.num2"
            :min="1"
            style="vertical-align: middle; max-width: 50px"
          >
          </v-text-field>
        </v-list-item-title>
        <v-list-item-title>
          <v-btn icon @click="game.num2 = 0"> <v-icon>mdi-close</v-icon></v-btn>
        </v-list-item-title>
      </v-list-item>
    </div>
    <div v-if="sum">
      <v-divider />
      <v-spacer></v-spacer>

      <div class="d-flex flex-column">
        <v-spacer></v-spacer>
        <v-card-actions class="mr-16 justify-end">
          {{ num }} تعداد کل: عدد
        </v-card-actions>

        <v-card-actions class="mr-16 justify-end">
          {{ sum }} قیمت کل : تومان
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
        (sum, { number, num2 }) => sum + (number / 4) * 6000 * num2,
        0
      );
    },
    num() {
      return this.cart.reduce((num, { num2 }) => num + parseInt(num2), 0);
    },
  },
  created() {
    EventBus.$on("cl", (e) => {
      if (this.cart) {
        this.cart.includes(e)
          ? e.num2++
          : ((this.cart = [...this.cart, e]), (e.num2 = 1));
      } else {
        null;
      }
    });
  },
};
</script>

<style>
</style>