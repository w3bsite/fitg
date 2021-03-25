<template>
  <div class="home">
    <v-card class="">
      <v-card-actions>
        <h1>Home Page</h1>
        <h2></h2>
      </v-card-actions> </v-card
    ><br />
    <v-container>
      <v-row v-for="i in 3" :key="i">
        <div class="col">Game</div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
