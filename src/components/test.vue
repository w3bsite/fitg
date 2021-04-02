<template>
  <div>
    <v-container style="max-width: 350px">
      <v-tabs centered grow v-model="tab">
        <v-tab>register </v-tab>
        <v-tab> login</v-tab>
      </v-tabs>
      <v-tabs-items style="max-width: 350px" v-model="tab">
        <v-tab-item>
          <signup></signup>
        </v-tab-item>
        <v-tab-item>
          <signin></signin>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import Signin from "./signin.vue";
import signup from "./signup.vue";
export default {
  components: { signup, Signin },
  mounted() {},
  chimera: {
    signin() {
      return {
        url: this.$urlroot + `/auth/local`,
        method: "post",
        params: {
          identifier: this.username,
          password: this.password,
        },
      };
    },
  },
  computed: {
    jwt() {
      if (this.$chimera.signin.status == 200) {
        this.$cookies.set("jwt", this.$chimera.signin.data.jwt);
        console.log(this.$cookies.get("jwt"));
        return this.$chimera.signin.data.jwt;
      } else {
        return "";
      }
    },
  },
  watch: {},
  data() {
    return {
      tab: "",
      valid: false,
      username: "",
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+./.test(v) || "E-mail must be valid",
      ],
      Rules: [
        (v) => !!v || "Password is required",
        (value) =>
          (value && value.length >= 3) ||
          "Password must be at least 6 characters",
      ],
    };
  },
};
</script>

<style>
</style>