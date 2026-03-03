import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from 'vuepress-plugin-search-pro'

export default defineUserConfig({
  base: "/",

  /* head: [
    [
      "script",
      {},
      `\
        // 监听页面可见性变化事件
        document.addEventListener("visibilitychange", () => {
          const prefix = "多看一眼就会 | ";
          const CurrentTitle = document.title;
          let isHidden = false;
          if (document.hidden) {
            document.title = prefix + CurrentTitle;
            console.log(document.title);
            isHidden = true;
          } else {
            if (CurrentTitle.startsWith(prefix)) {
              isHidden = false;
            }
            if(!isHidden)
              document.title = CurrentTitle.substring(prefix.length);
          }
        });
      `,
    ],    
  ], */

  locales: {
    "/": {
      lang: "zh-CN",
      title: "doc.emesrz",
    },

    "/en/": {
      lang: "en-US",
      title: "doc.emesrz",
    },
  },

  theme,

  plugins: [
    // ✅ 顶级配置（不是 theme.plugins）
    searchProPlugin({
      indexContent: true, // 启用正文搜索
      autoSuggestions: true,
    }),
    
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});