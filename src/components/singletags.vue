<template>
  <v-expand-transition>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <!-- col-right -->
          <v-card-actions>
            <v-chip outlined color="green" class="ml-8 text-body-1">
              <v-icon right>mdi-shape</v-icon>
              <span> سبک </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.data.caption }}</span>
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="ml-8 body-1">
              <v-icon right>mdi-robot</v-icon>
              <span> سازندگان </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.data.txt1 }}</span>
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="ml-8 body-1">
              <v-icon right>mdi-robot</v-icon>
              <span> منتشرکننده </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.data.txt2 }}</span>
            </v-chip>
          </v-card-actions>
        </v-col>
        <!-- col left -->
        <v-col cols="12">
          <v-card-actions>
            <v-chip outlined color="green" class="ml-8 text-body-1">
              <v-icon right>mdi-shape</v-icon>
              <span> سال تولید </span>
            </v-chip>

            <v-chip color="">
              <span class="text-body-2"> {{ game.data.num1 }}</span>
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="ml-8 body-1">
              <v-icon right>mdi-harddisk-plus </v-icon>
              <span> حجم بازی </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.data.number }}GB</span>
            </v-chip>
          </v-card-actions>
          <v-card-actions>
            <v-chip outlined color="deep-orange" class="ml-8 body-1">
              <v-icon right>mdi-currency-usd </v-icon>
              <span>قیمت بازی </span>
            </v-chip>

            <v-chip>
              <span class="text-body-2"> {{ game.data.number / 4 }}</span>
            </v-chip>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-expand-transition>
</template>

<script>
export default {
  props: { game: { type: Object } },
  mounted() {
    console.log(this.game.number / 4);
  },
};
</script>

<style>
</style>