<template>
  <div>
    <v-container class="" fluid>
      <v-row>
        <v-col v-for="(r, i) in related.data" :key="i" cols="3">
          <v-sheet elevation="5" class="mx-auto">
            <v-sheet>
              <!-- <v-img :src="`/img/1/` + r.title + `.jpg`"></v-img> -->
            </v-sheet>

            <span ref="re" @click="log(i)">{{ r.caption }}</span> <br />
            <!-- {{ r.title }} <br />
          
            {{ r.id }} -->
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "related-genre",
  data() {
    return { x: "" };
  },
  methods: {
    detect: function () {
      this.x = this.related.data.caption;
    },
    log: function (i) {
      let x = this.$refs.re[i].innerText;
      // let action = new RegExp(/، /, "uim");
      let y = x.split("،");
      y.forEach((element) => {
        console.log(element);
      });

      // console.log(x.includes(""));
    },
  },
  chimera: {
    related() {
      return this.$url;
    },
  },
};
</script>

<style>
</style>