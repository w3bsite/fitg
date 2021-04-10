<template>
  <v-app>
    <AppBar :class="theme">
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <keep-alive include="">
            <router-view :jwt="jwt"></router-view>
          </keep-alive>
        </v-container>
      </v-main>
    </AppBar>
  </v-app>
</template>

<script>
import AppBar from "@/components/Globals/AppBar.vue";
import { EventBus } from "./main";

export default {
  name: "App",

  components: { AppBar },

  data: () => ({
    jwt: "",
  }),
  created() {
    EventBus.$on("jw", (e) => {
      this.jwt = e;
    });
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? " " : "grey lighten-2";
    },
  },
};
</script>
