export default {
  title: "SEP API",
  description: "An unofficial API for the Stanford Encyclopedia of Philosophy.",
  base: "/sep-api/",
  cleanUrls: "with-subfolders",

  themeConfig: {
    nav: [{ text: "API Reference", link: "/reference/what-is-the-sep-api" }],
    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is the SEP API?",
            link: "/reference/what-is-the-sep-api",
          },
        ],
      },
      {
        text: "API Reference",
        items: [
          { text: "Entries", link: "/reference/entries" },
          { text: "Archives", link: "/reference/archives" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/writeonlycode/sep-api" },
      { icon: "twitter", link: "https://twitter.com/writeonlycode" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Iago Bozza",
    },
  },

  // transformPageData(pageData) {
  //   return {
  //     apiBaseUrl: "https://s-xhpd.onrender.com/api/v1/",
  //   }
  // }
};
