<template>
  <v-container fluid>
    <v-row>
      <v-card class="mx-auto pa-5 d-flex flex-column">
        <span v-if="signin.error" class="spinner">{{ signin.error }}</span>

        <v-form @submit="signin.send()">
          <v-col>
            <v-text-field
              v-model="username"
              :rules="Rules"
              label="username"
              append-icon="mdi-face"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              :rules="Rules"
              hide-details="auto"
              append-icon="mdi-lock"
              required
            >
              {{ email }}
            </v-text-field>
          </v-col>
          <v-card-actions dir="rtl">
            <v-btn type="submit">Submit</v-btn>
          </v-card-actions>
        </v-form>
        <v-divider></v-divider>
        <p class="mx-auto text-h6">OR</p>
        <v-btn class="" :href="this.$urllog" color="red"
          ><v-icon>mdi-google</v-icon>oogle Login
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
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