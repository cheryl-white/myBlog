import { defineConfig } from "vitepress";
import {
  pagefindPlugin,
  chineseSearchOptimize,
} from "vitepress-plugin-pagefind";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/myBlog/", // 决定部署后的访问前缀  和项目路由无关
  title: "cheryl's blog",
  description: "This is my personal site",
  lastUpdated: true,
  sitemap: {
    hostname: "https://cheryl-white.github.io/myBlog/",
  },
  //重写路由路径  主要体现在路由访问
  rewrites: {
    // "packages/pkg-a/src/index.md": "pkg-a/index.md",
    // 'packages/:pkg/src/:slug*': ':pkg/:slug*'  动态重写
  },
  lang: "zh-cn", // 务必设置语言

  vite: {
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "个人博客", link: "/blogs/next/next1" },
      { text: "具体项目", link: "/projects/enterprise-manager" },
    ],
    lastUpdatedText: "最后更新于：",
    sidebar: {
      // 当用户在 /blogs/ 路径下时，显示这个侧边栏
      "/blogs/": [
        {
          text: "博客文章",
          items: [
            {
              text: "next踩坑记录",
              items: [
                {
                  text: "状态偏移和请求卡死",
                  link: "/blogs/next/next1",
                },
              ],
            },
            {
              text: "vitepress踩坑记录",
              items: [
                {
                  text: "vitepress内部样式使用总结",
                  link: "/blogs/vitepress/vitepress1",
                },
              ],
            },
            { text: "react", link: "/blogs/react" },
            // 你的博客文章列表
          ],
        },
      ],
      // 当用户在 /projects/ 路径下时，显示这个侧边栏
      "/projects/": [
        {
          text: "我的项目",
          items: [
            { text: "企业管理系统", link: "/projects/enterprise-manager" },
            { text: "其他项目", link: "/projects/other-project" },
          ],
        },
      ],
      // 可以保留一个“/”根路径的侧边栏作为首页或默认配置
      "/": [
        {
          text: "常用链接",
          items: [
            { text: "首页", link: "/" },
            { text: "API 示例", link: "/api-examples" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "http://cheryl-white.github.io/myBlog" },
    ],
  },
});
