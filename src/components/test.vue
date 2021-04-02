<template>
  <div>
    <v-container>
      <v-row>
        <v-card>{{ jwt }}</v-card>
        <v-card class="mx-auto pa-5">
          <span v-if="signup.error" class="spinner">{{ signup.error }}</span>
          <span v-else-if="signup.data">
            {{ signup.data }}
          </span>
          <v-form @submit="signup.send()">
            <v-col>
              <v-text-field
                v-model="username"
                :rules="Rules"
                label="username"
                append-icon="mdi-face"
                required
              ></v-text-field>
              {{ username }}
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                append-icon="mdi-at"
                required
              ></v-text-field>
              {{ password }}
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
        </v-card>
        <v-card>
          <v-btn :href="this.$urllog">google</v-btn>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {},
  chimera: {
    signup() {
      return {
        url: this.$urlroot + `/auth/local/register`,
        method: "post",
        params: {
          username: this.username,
          password: this.password,
          email: this.email,
        },
      };
    },
  },
  computed: {
    jwt() {
      if (this.$chimera.signup.status == 200) {
        this.$cookies.set("jwt", this.$chimera.signup.data.jwt);
        console.log(this.$cookies.get("jwt"));
        return this.$chimera.signup.data.jwt;
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