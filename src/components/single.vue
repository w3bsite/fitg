<template>
  <div style="direction: rtl; height: 2000px">
    <v-container class="pt-16" fluid>
      <v-parallax
        class="blue"
        height="450"
        :src="`/img/1/1big/` + game.data.title + `.jpg`"
      >
        <v-container class="">
          <v-row class="d-block">
            <v-col style="direction: rtl">
              <div>
                <v-card v-if="game.data">
                  <v-card-title>{{ game.data.title }}</v-card-title>
                  <v-card-text class="text-body-1">
                    {{ game.data.description }}
                  </v-card-text>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-btn outlined color="primary">
                            <v-icon>mdi-clock</v-icon>
                            {{ game.data.num1 }}
                          </v-btn>
                        </v-list-item-title>
                        <v-list-item-title>
                          <v-btn color="pink" outlined class="text-black">
                            <v-icon>mdi-weight</v-icon>
                            {{ game.data.number }}
                          </v-btn>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "single",
  data() {
    return {};
  },
  chimera: {
    game() {
      return {
        url: this.$url + `/` + this.$route.params.id,
        method: "get",
      };
    },
  },
};
</script>

<style>
</style>