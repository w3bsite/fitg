<template>
  <v-app>
    <AppBar :class="theme">
      <v-main>
        <h1>bus: {{ buss }}</h1>
        <cartest></cartest>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <keep-alive include="">
            <router-view></router-view>
          </keep-alive>
        </v-container>
      </v-main>
    </AppBar>
  </v-app>
</template>

<script>
import AppBar from "@/components/Globals/AppBar.vue";
import Cartest from "./components/cartest.vue";
import { EventBus } from "./main.js";

export default {
  name: "App",

  components: { AppBar, Cartest },

  data: () => ({
    buss: 2,
  }),
  created() {
    EventBus.$on("cl", (bt) => {
      this.buss = bt;
    });
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? " " : "grey lighten-2";
    },
  },
};
</script>
