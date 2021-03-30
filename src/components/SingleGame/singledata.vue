<template>
  <v-container fluid>
    <v-row class="">
      <v-col style="direction: rtl">
        <div>
          <v-card v-if="game" class="pa-2 ma-0">
            <v-card-title>{{ game.title }}</v-card-title>
            <v-divider inset></v-divider>
            <singletags :game="game" />
            <v-divider inset></v-divider>

            <v-sheet>
              <v-avatar
                tile
                size="100%"
                height="auto"
                class="my-5 d-flex flex-column flex-sm-row"
              >
                <div class="text-right">{{ game.description }}</div>

                <v-img
                  max-width="255"
                  :aspect-ratio="5 / 7"
                  :src="`../img/1/` + game.title + `.jpg`"
                >
                </v-img>
              </v-avatar>

              <v-img
                max-width="420"
                :src="`../img/1/` + game.title + `.gif`"
                class="mx-auto my-5 col-12"
              >
              </v-img>
            </v-sheet>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-sheet> </v-sheet>
  </v-container>
</template>

<script>
import singletags from "./singletags.vue";
export default {
  components: { singletags },
  props: { game: { type: Object } },
};
</script>

<style>
</style>