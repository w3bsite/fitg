<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          :cols="ccols"
          :sm="csm"
          :md="cmd"
          :lg="clg"
          class="d-flex flex-column"
          v-for="(g, i) in games.data"
          :key="i"
        >
          <v-card>
            <div>
              <v-card
                dark
                :elevation="0"
                class="rounded-0 deep-purple accent-4"
              >
                <div class="white">
                  <v-img
                    class="mx-auto"
                    :width="cwidth"
                    :aspect-ratio="cratio"
                    :src="`/img/1/` + g.title + `.jpg`"
                    alt="0"
                  />
                </div>
                <v-card-title>{{ g.title }}</v-card-title>
              </v-card>
              <v-card
                :elevation="0"
                class="rounded-0 text-body-1 darken-4 desc"
              >
                <v-card-text>{{
                  g.description.substring(0, 400) + "..."
                }}</v-card-text>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    ccols: { default: 12, type: Number },
    csm: { default: 6, type: Number },
    cmd: { default: 4, type: Number },
    clg: { default: 4, type: Number },
    cwidth: { default: 255, type: Number },
    cratio: { default: 5 / 7, type: Number },
  },
  beforeCreate() {},
  mounted() {
    // this.$vuetify.rtl = true;
  },
  chimera: {
    games: "https://corvirus.herokuapp.com/products",
  },

  data() {
    return {};
  },
};
</script>

<style>
.desc {
  direction: rtl;
}
</style>
