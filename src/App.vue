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
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? " " : "amber lighten-5";
    },
  },
};
</script>
