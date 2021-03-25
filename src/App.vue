<template>
  <v-app>
    <AppBar>
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <keep-alive include="getgames">
            <router-view></router-view>
          </keep-alive>
        </v-container>
      </v-main>
    </AppBar>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "App",

  components: { AppBar },

  data: () => ({
    //
  }),
};
</script>
