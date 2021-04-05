<template>
  <div>
    <h4>Users</h4>
    <v-card v-if="us">
      <v-list v-for="(u, i) in us" :key="i">
        <v-list-item>
          <v-list-item-title>{{ u.id }}</v-list-item-title>
          <v-list-item-title>{{ u.username }}</v-list-item-title>
          <v-list-item-title>{{ u.email }}</v-list-item-title>
          <v-list-item-title>{{ u.confirmed }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card v-if="er">
      {{ er }}
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      us: [],
      er: [],
    };
  },
  computed: {
    auth() {
      return this.$cookies.get("jwt")
        ? ` bearer ${this.$cookies.get("jwt")}`
        : " ";
    },
  },
  // chimera: { users: "https://corvirus.herokuapp.com/users" },
  created() {
    this.$axios
      .get("https://corvirus.herokuapp.com/users", {
        headers: {
          Authorization: `${this.auth}`,
        },
      })
      .then((r) => (this.us = r.data))
      .catch((e) => (this.er = e));
  },
};
</script>
