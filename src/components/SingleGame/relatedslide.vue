<template>
  <div>
    <v-container fluid>
      <v-slide-group
        v-model="model"
        active-class="activeitem"
        center-active
        class="pa-0"
        show-arrows="mobile"
      >
        <v-slide-item
          v-for="(r, i) in related.data"
          :key="i"
          v-slot="{ active, toggle }"
        >
          <v-card :color="active ? 'warning' : ''" class="mr-5" @click="toggle">
            <div
              :class="{
                'red d-none': hide == r.id,
                ' d-flex flex-column': hide != r.id,
              }"
            >
              <div>
                <v-img
                  class="col-12"
                  width="220px"
                  :src="`/img/1/` + r.title + `.jpg`"
                >
                  <v-expand-transition>
                    <v-overlay
                      v-if="active"
                      absolute
                      color="deep-purple accent-4"
                    >
                      <span class="font-weight-bold">
                        {{
                          r.title.length > "27"
                            ? r.title.substring(0, 26) + ".."
                            : r.title
                        }}
                      </span>
                      <v-btn
                        block
                        :to="{
                          name: 'single',
                          params: { id: r.id, single: r },
                        }"
                      >
                        Continue
                      </v-btn>
                    </v-overlay>
                  </v-expand-transition>
                </v-img>
              </div>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["Genre", "id", "game"],
  name: "relatedgenre",
  data() {
    return {
      model: 0,
      t: [],
      srch: null,
      hide: this.id,
      alert: true,
    };
  },
  created() {
    this.filter();
  },

  chimera: {
    related() {
      return { url: this.ur };
    },
  },

  computed: {
    ur() {
      return this.$url + "?" + this.qss;
    },

    qss() {
      let params = {
        _where: {
          _or: [
            [
              {
                caption_contains: (this.t[0], this.t[1], this.t[2], this.t[3]),
              },
            ],
            [{ caption_contains: (this.t[0], this.t[1]) }],
          ],
        },
      };
      return this.$qs.stringify(params);
    },
  },

  methods: {
    filter: function () {
      let x = this.game.caption;
      let query = x.split("،")[0];
      let query1 = x.split("،")[1];
      let query2 = x.split("،")[2];
      let query3 = x.split("،")[3];
      return (this.t = [query, query1, query2, query3]);
    },
  },
  watch: {
    game() {
      this.filter();
    },
  },
};
</script>

<style>
.v-slide-group__next,
.v-slide-group__prev {
  display: contents !important;
}
</style>
