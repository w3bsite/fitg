<template>
  <div>
    <div><h1>news</h1></div>
    <v-container v-if="articles.data">
      <v-row>
        <v-card
          dir="rtl"
          v-for="(article, i) in games"
          :key="i"
          v-html="article.excerpt.rendered"
          class="mx-auto my-5 pa-16 col-4"
        >
        </v-card>

        <br />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: this.$chimera.articles.data,
    };
  },
  chimera: {
    articles() {
      return { url: this.$prnews };
    },
  },
};
</script>

<style>
</style>