<template>
  <div>
    <v-container grid-list>
      <v-row v-for="(g, i) in games" :key="i">
        <v-card class="col">
          <v-banner class="purple">
            {{ g.title.rendered }}
            <br />
          </v-banner>
          <br />
          <v-btn block></v-btn>
          <h1 @click="fil(g.content.rendered)">
            {{ g.content.rendered }}
            <br />
          </h1>
          <v-banner v-html="g.content.rendered">
            <br />
          </v-banner>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.gt();
    });
  },
  filters: {},
  methods: {
    fil: function (g) {
      if (typeof g === "string" && g !== null) {
        let rg = /([٫۰۱۲۳۴۵۶۷۸۹]*) مگابایت|([٫۰۱۲۳۴۵۶۷۸۹]*) گیگابایت/giu;
        let x = rg.exec(g);
        console.log(x[0]);
        console.log(x[1]);
        console.log(x[2]);
        let tip = x[2] ? "gig" : x[1] ? "meg" : "I Dont Know";
        console.log(tip);
        console.log(x[0]);
      } else {
        console.log(g);
      }
    },
    gt: function () {
      this.$axios
        .get(this.url)
        .then((r) => (this.games = r.data))
        .then((e) => (this.er = e));
    },
  },
  data() {
    return {
      games: {},
      er: null,
      reg: [],
      url: "/https://www.dlfox.com/wp-json/wp/v2/posts",
      data: [],
      page: "GaMe1333s113",
      secret: "",
      id: "",
      fa: "سلام من ۱۰ هستم ۱۰",
      fox: `"<p><img class="aligncenter" src="https://cdn.dlfox.com/wp-content/uploads/2021/03/cover-winap.jpg" /></p> <p>Winamp یک رسانه پخش سریع ، انعطاف پذیر با اطمینان بالا برای ویندوز است. Winamp از پخش بسیاری فرمت های صوتی مانند: MP3 ، OGG ، AAC ، WAV ، MOD ، XM ، S3M ، IT ، MIDI و&#8230; و فرمت های ویدئو مانند: AVI ، ASF ، MPEG ، NSV و&#8230; پشتیبانی می کند، این نرم افزار از ظاهر سفارشی به نام skins پشتیبانی می کند. پوسته های x / 2.x و پوسته های فرم آزاد Winamp 3 ، پلاگین های تجسم صوتی و جلوه های صوتی (شامل دو افزونه ) ، کتابخانه رسانه پیشرفته ، پشتیبانی از رادیو و تلویزیون اینترنتی ، و رایت CD برخی از امکانات این نرم افزار پلیر می باشد.</p> <p style="text-align: center;"><span style="color: #008080;">| Winamp </span><span style="color: #008080;">– </span><span style="color: #008080;"><span style="color: #ff0000;">v5.8 <span style="color: #008000;">–</span> <span style="color: #0000ff;">۳۲&amp;64bit </span></span></span><span style="color: #008080;">|</span></p> <p style="text-align: center;"><span style="color: #008000;">| نسخه نهایی به صورت فشرده با حجم </span><span style="color: #008000;"><span style="color: #ff0000;">۱۰ مگابایت </span>|</span></p> <p><img src="https://www.dlfox.com/tools/img/money.jpg" /> قیمت نرم افزار: رایگان</p> "`,
    };
  },
};
</script>

<style>
</style>