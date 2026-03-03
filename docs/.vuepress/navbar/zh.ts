import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // home
  "/",
  // notes
  {
    text: "笔记",
    icon: "font-awesome",
    link: "/notes/",
  },
  // docs
  {
    text: "docs",
    icon: "book",
    link: "/docs/",
  },
  // Pictures
  {
    text: "Pic",
    icon: "share-from-square",
    link: "/under-construction.md",
  },
  // sitenav
  {
    text: "站点导航",
    icon: "circle-nodes",
    link: "/sitenav/",
  },
  // blog
  {
    text: "博客",
    icon: "link",
    link: "/under-construction.md",
  },
  // apps
  {
    text: "APP",
    icon: "share-from-square",
    link: "https://emesrz-app.vercel.app/",
  },
]);
