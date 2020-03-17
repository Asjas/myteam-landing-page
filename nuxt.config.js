export default {
  mode: "spa",
  head: {
    title: "Myteam Landing Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "The Myteam Landing Page project from frontendmentor.io"
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "favicon.png" },
      {
        rel: "preload",
        href:
          "https://fonts.googleapis.com/css?family=Livvic:400,600,700&display=swap",
        as: "style",
        crossorigin: "anonymous"
      }
    ]
  },
  loading: { color: "#F67E7E" },
  css: [],
  plugins: [],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/sentry", "@nuxtjs/pwa"],
  sentry: {
    dsn: "https://ecff7c1016f4432ea0947bef14c241e2@sentry.io/4994916",
    publishRelease: true,
    attachCommits: true,
    repo: "https://github.com/Asjas/myteam-landing-page"
  },
  pwa: {
    icons: {
      iconSrc: "favicon.png"
    }
  },
  build: {
    extend(config, ctx) {}
  }
};
