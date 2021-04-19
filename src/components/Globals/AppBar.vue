<template>
  <v-app dark>
    <v-navigation-drawer
      style="height: 100% !important"
      v-model="drawer"
      :mini-variant="!miniVariant"
      :clipped="clipped"
      fixed
      bottom
      app
    >
      <v-list nav>
        <v-switch
          v-model="$vuetify.theme.dark"
          hint="Don't Touch!"
          inset
          persistent-hint
        ></v-switch>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "left" : "right"}` }}</v-icon>
      </v-btn>
      <v-img
        class="mx-2"
        src="@/assets/logo.png"
        max-height="55"
        max-width="55"
        contain
      ></v-img>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu
        v-model="crt"
        :close-on-click="true"
        :close-on-content-click="false"
        :nudge-width="300"
        offset-y
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="notif = 0" v-bind="attrs" v-on="on" icon>
            <v-badge
              :content="notif"
              :value="notif"
              color="indigo accent-4"
              overlap
            >
              <v-icon :large="notif ? true : false">mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <cartest></cartest>
        </v-list>
      </v-menu>

      <v-menu
        v-model="regist"
        :close-on-click="true"
        :close-on-content-click="false"
        :nudge-width="300"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-face</v-icon></v-btn
          >
        </template>
        <v-list>
          <Register></Register>
        </v-list>
      </v-menu>
    </v-app-bar>
    <slot> </slot>

    <!-- <v-footer absolute app>
      <span v-focus>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { EventBus } from "../../main";
import cartest from "../cartest.vue";
import Register from "../register.vue";
export default {
  components: { cartest, Register },

  data() {
    return {
      regist: false,
      notif: 0,
      crt: false,
      clipped: false,
      drawer: false,
      fixed: true,
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Fit Games",
      items: [
        {
          icon: "mdi-home",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-web",
          title: "Learn Web",
          to: "/Web",
        },
        {
          icon: "mdi-clipboard-list",
          title: "Game news",
          to: "/Cart",
        },

        {
          icon: "mdi-apps",
          title: "Articles",
          to: "/Articles",
        },
      ],
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      },
    },
  },
  computed: {
    mini() {
      if (this.$vuetify.breakpoint.mobile) {
        return true;
      } else {
        return false;
      }
    },
    signed() {
      return this.$cookies.get("jwt") ? true : false;
    },
  },

  // watch: {
  //   mini() {
  //     this.mini == true ? this.miniVariant == true : "";
  //   }
  // },
  created() {
    EventBus.$on("cl", () => {
      this.notif++;
    });
  },
  mounted() {
    setTimeout(() => {
      this.crt = true;
    }, 50);
    setTimeout(() => {
      this.crt = false;
    }, 100);

    if (this.$vuetify.breakpoint.mobile == true) {
      this.drawer = false;
      this.miniVariant = true;
    } else {
      this.drawer = true;
      this.miniVariant = false;
    }
  },
};
</script>
