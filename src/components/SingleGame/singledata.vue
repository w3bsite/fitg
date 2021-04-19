<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div>
          <v-card v-if="game" class="pa-2 ma-0">
            <v-card-title>{{ game.title }}</v-card-title>
            <v-divider inset></v-divider>
            <Singletags :game="game" />
            <v-divider inset></v-divider>
            <v-row dir="rtl">
              <v-col cols="12" sm="3">
                <v-img
                  :aspect-ratio="5 / 7"
                  :src="`../img/1/` + game.title + `.jpg`"
                  :lazy-src="`../img/1/` + game.title + `.jpg`"
                >
                </v-img>
              </v-col>
              <v-col>
                <v-sheet>
                  {{ game.description }}
                </v-sheet>
              </v-col>
            </v-row>

            <v-img
              max-width="420"
              :src="`../img/1/` + game.title + `.gif`"
              class="mx-auto"
            >
            </v-img>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Singletags from "./singletags.vue";
export default {
  components: { Singletags },
  props: { game: { type: Object } },
};
</script>

<style></style>
