<template>
  <div>
    <v-container class="indigo accent-4 rounded" fluid>{{
      sample | fil
    }}</v-container>
  </div>
</template>

<script>
export default {
  filters: {
    fil: function (nu) {
      let po = new RegExp(/ch/, "uim");
      return nu.replace(po, "po");
    },
  },

  data() {
    return {
      num: "۲٫۵",
      sample:
        "salam oskole 1 cheshme 3 kale 2 roo 2bare salam baraye rooye shomare2 ye 1 cheshm",
    };
  },
};
</script>

<style>
</style>