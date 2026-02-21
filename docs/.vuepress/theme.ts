import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://doc.emsrs.site",

  author: {
    name: "emsrs",
    url: "https://emsrs.site",
  },

  repo: "emersers/emsrs.doc",

  docsDir: "docs",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Search", "Repo", "Outlook"],
  },
  editLink: false,

  locales: {
    // Chinese locale config
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      // footer
      displayFooter: true,
      copyright: "copyright© <a href=\"https://emsrs.site\" target=\"_blank\">emsrs</a> 2024",
      footer: "<a href=\"/about/\">关于</a>",

      // page meta
      metaLocales: {
        editLink: "编辑",
      },
    },

    // English locale config
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      // footer
      displayFooter: true,
      copyright: "copyright© 2023 <a href=\"https://emsrs.site\" target=\"_blank\">emsrs</a>",
      footer: "<a href=\"/about/\">about</a>",

      metaLocales: {
        editLink: "Edit",
      },
    },

  },

  encrypt: {
    config: {
      "/theme/demo/encrypt.html": ["1234"],
      "/en/theme/demo/encrypt.html": ["1234"],
    },
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    math: {
      // install katex before enabling it
      type: "katex",
      // or install @mathjax/src before enabling it
      // type: "mathjax",
    },


    playground: {
      presets: ["ts", "vue"],
    },

    // install @vue/repl before enabling it
    vuePlayground: true,

    // install sandpack-vue3 before enabling it
    sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    revealjs: {
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },
  },

  plugins: {
    /* sitemap: {
      hostname: "doc.emsrs.site",
      changefreq: "daily",
    }, */
    components: {
      // 你想使用的组件
      components: [
        "BiliBili",
      ],
    },
      // iconPrefix: "iconfont icon-",
    icon: {
      assets: "fontawesome-with-brands",
    },

    /* shiki: {
      // ✅ 必须指定主题（推荐 dark-plus）
      theme: 'dark-plus',
      // ✅ 可选：指定支持的语言（减少 bundle 大小）
      langs: ['ts', 'vue', 'md', 'json', 'bash', 'yaml']
    }, */

    copyright: {
      author: "emsrs @2026",
      license: "MIT",
    },
    copyCode: {
      showInMobile: true,
    },
    // You should generate and use your own comment service
    /* comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    }, */

    // All features are enabled for demo, only preserve features you need here
  },
});