<template>
  <v-container
    fluid
    class=""
    :class="{
      ' ': theme,
      ' grey lighten-3': !theme,
    }"
  >
    <v-row>
      <v-container fluid>
        <v-pagination
          :color="theme ? 'indigo accent-4 ' : 'indigo accent-4 '"
          v-model="page"
          :length="itotalpages"
          class="mx-auto"
        ></v-pagination>

        <div class="d-flex flex-row-reverse my-0">
          <div class="col-md-3">
            <v-text-field
              v-model="term"
              :append-icon="term ? 'mdi-close' : ''"
              @click:append="term = ''"
            >
              <template v-slot:label>
                <v-icon style="vertical-align: middle"> mdi-magnify </v-icon>
                search games by title
              </template>
            </v-text-field>
          </div>
        </div>
        <v-row>
          <v-col cols="12" sm="2">
            <v-container fluid>
              <v-spacer></v-spacer>
              <div class="">
                <v-select v-model="assend" :items="assending"></v-select>
              </div>
              <div class="">
                <v-select v-model="sort" :items="sortitems"></v-select>
              </div>
              <v-row class="mt-1">
                <v-col cols="12">
                  <v-card outlined elevation="1">
                    <v-select
                      @input="page = 1"
                      v-model="genre"
                      :items="items"
                      :menu-props="{ down: true, offsetY: false }"
                      label="Genre"
                      outlined
                    ></v-select>

                    <v-alert color="indigo accent-4" outlined>Date</v-alert>
                    <v-range-slider
                      id="rang"
                      @input="page = 1"
                      :vertical="range"
                      v-model="value"
                      :tick-labels="label"
                      :max="2021"
                      :min="2016"
                      class="large-slider"
                    ></v-range-slider>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" sm="10">
            <v-container v-if="finalgames" fluid>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="(game, i) in finalgames"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="4"
                    :key="i"
                    :class="{
                      red: game.num1 < value[0] || game.num1 > value[1],
                    }"
                  >
                    <v-card style="direction: rtl" outlined elevation="1">
                      <div>
                        <v-card
                          :color="
                            theme ? 'deep-purple accent-4' : 'red  accent-4'
                          "
                          :elevation="0"
                          class="rounded-0"
                          dark
                        >
                          <div class="white">
                            <v-img
                              :eager="false"
                              class="mx-auto"
                              :width="cwidth"
                              :aspect-ratio="cratio"
                              :src="`/img/1/` + game.title + `.jpg`"
                              :lazy-src="`/img/1/` + game.title + `.jpg`"
                              alt="0"
                            />
                          </div>
                          <v-card-title>
                            <div
                              class="text-h6"
                              style="font-size: 18px !important"
                            >
                              {{
                                game.title.length > "29"
                                  ? game.title.substring(0, 29) + ".."
                                  : game.title
                              }}
                            </div>
                          </v-card-title>
                        </v-card>
                        <v-card
                          :elevation="0"
                          class="text-body-1 darken-4 desc"
                        >
                          <v-card-text
                            class="text-body-1 text-right"
                            :class="{
                              'white--text': theme,
                              'grey--text text--darken-4': !theme,
                            }"
                            style="font-size: 13px !important"
                          >
                            {{ game.description.substring(0, 422) + "..." }}
                          </v-card-text>
                          <v-card-actions style="direction: rtl">
                            <v-btn
                              large
                              :to="{
                                name: 'single',
                                params: { id: game.id, single: game },
                              }"
                              :color="
                                theme
                                  ? 'white  black--text'
                                  : 'red accent-4 white--text'
                              "
                              outlined
                              class="text-body-1 font-weight-normal"
                            >
                              بیشتر
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                              @click="buyg(game)"
                              :color="
                                theme
                                  ? 'white  black--text'
                                  : 'indigo accent-4 white--text'
                              "
                              class="text-body-1 font-weight-normal"
                              fab
                            >
                              <v-icon> mdi-cart </v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
            <v-sheet class="d-flex flex-column" width="" height="600" v-else>
              <v-progress-circular
                class="ma-auto"
                size="100"
                :width="3"
                indeterminate
              ></v-progress-circular>
            </v-sheet>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-pagination
            :color="theme ? 'indigo accent-4 ' : 'indigo accent-4 '"
            v-model="page"
            :length="itotalpages"
            class="my-2"
          ></v-pagination>
        </div>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import { EventBus } from "../main.js";
export default {
  props: {
    ccols: { default: 12, type: Number },
    csm: { default: 6, type: Number },
    cmd: { default: 4, type: Number },
    clg: { default: 4, type: Number },
    cwidth: { default: 255, type: Number },
    cratio: { default: 5 / 7, type: Number },
  },
  components: {},

  data() {
    return {
      value: [2016, 2021],
      label: [2016, 2017, 2018, 2019, 2020, 2021],
      genre: " ",
      yeara: 2019,
      yearb: 2021,
      sort: "created_at",
      assend: "desc",
      er: null,
      items: ["", "اکشن", "اول شخص", "شوتر", "ورزشی", "RPG"],
      sortitems: ["created_at", "updated_at"],
      assending: ["asc", "desc"],
      page: 1,
      limit: 6,
      term: "",
    };
  },
  chimera: {
    games() {
      return {
        prefetch: true,
        url: this.$url,
        headers: {
          Authorization: `${this.auth}`,
        },
        params: {
          // caption_contains: this.genre,
          _sort: this.sort + `:` + this.assend,
          // _start: (this.page - 1) * this.limit,
          // _limit: this.limit,
        },
      };
    },
  },
  methods: {
    buyg(e) {
      console.log(e);
      EventBus.change(e);
    },
  },
  mounted() {
    setInterval(() => this.games.reload(), 1000000);
  },
  computed: {
    range() {
      return this.$vuetify.breakpoint.xs == true ? false : true;
    },
    //check to see if user is already signedin
    auth() {
      return this.$cookies.get("jwt")
        ? `Bearer ${this.$cookies.get("jwt")}`
        : " ";
    },
    // calculating  the range of games to show in a page (ipage,ilimt)
    // first argument in the range - start
    ipage() {
      return (this.page - 1) * this.limit;
    },
    // secound argument in the range - end
    ilimit() {
      return this.ipage + this.limit;
    },
    // number of games
    itotal() {
      if (this.$chimera.games.data) {
        return this.filteredgames.length;
      } else {
        return null;
      }
    },
    // number of pages
    itotalpages() {
      return this.itotal ? Math.ceil(this.itotal / this.limit) : null;
    },
    // correct  games range  for any page
    finalgames() {
      if (this.$chimera.games.data) {
        return this.filteredgames.slice(this.ipage, this.ilimit);
      } else {
        return null;
      }
    },

    filteredgames() {
      if (this.$chimera.games.data) {
        let trm = new RegExp(this.term, "i");
        return this.$chimera.games.data.filter(
          (e) =>
            e.caption.includes([this.genre]) &&
            e.title.match(trm) &&
            (e.num1 > this.value[0] || e.num1 == this.value[0]) &&
            (e.num1 < this.value[1] || e.num1 == this.value[1])
        );
      } else {
        return null;
      }
    },
    theme() {
      return this.$vuetify.theme.dark ? true : false;
    },
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'

@media #{map-get($display-breakpoints, 'sm-and-up')}
  .v-slider
    height: 420px
@media #{map-get($display-breakpoints, 'sm-and-down')}
  .v-slider__tick-label
    font-size: 10px
</style>

