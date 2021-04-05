<template>
  <v-app>
    <AppBar :class="theme">
      <v-main>
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

export default {
  name: "App",

  components: { AppBar },

  data: () => ({
    buss: [2],
  }),
  created() {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? " " : "grey lighten-2";
    },
  },
};
</script>
