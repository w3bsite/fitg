<template>
  <v-container field>
    <v-row class="">
      <v-card
        v-if="!this.$cookies.get('jwt')"
        class="d-flex flex-column mx-auto pa-5"
      >
        <v-form @submit.prevent="signin.fetch">
          <v-col>
            <v-text-field
              v-model="username"
              :rules="Rules"
              label="username"
              append-icon="mdi-face"
              required
            >
            </v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              :rules="Rules"
              hide-details="auto"
              append-icon="mdi-lock"
              required
            >
            </v-text-field>
          </v-col>
          <v-card-actions dir="rtl">
            <v-btn type="submit" block>Submit</v-btn>
          </v-card-actions>
        </v-form>
        <v-divider></v-divider>
        <p class="mx-auto text-h6">OR</p>
        <v-btn :href="$urllog" color="red"
          ><v-icon>mdi-google</v-icon>oogle Login
        </v-btn>
      </v-card>
      <v-card v-else class="d-flex flex-column mx-auto pa-5">
        <v-btn @click="signou">logout</v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { EventBus } from "../../main";
export default {
  chimera: {
    signin() {
      return {
        method: "post",
        url: this.$urlroot + `/auth/local`,
        params: {
          identifier: this.username,
          password: this.password,
        },
        on: {
          success() {
            let x = this.signin.data.jwt;
            this.$cookies.set("jwt", x);
            this.jwt = x;

            EventBus.signing(x);
          },
        },
      };
    },
  },
  methods: {
    signou: function () {
      this.$cookies.remove("jwt");
    },
    // signin: function () {
    //   this.$axios({
    //     method: "post",
    //     url: this.$urlroot + `/auth/local`,
    //     data: {
    //       identifier: this.username,
    //       password: this.password,
    //     },
    //   })
    //     .then((r) => {
    //       let x = r.data.jwt;
    //       this.$cookies.set("jwt", x);
    //       this.jwt = x;
    //     })
    //     .catch((e) => (this.e = e));
    // },
  },

  data() {
    return {
      e: null,
      jwt: null,
      valid: false,
      show: true,
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

<style></style>
