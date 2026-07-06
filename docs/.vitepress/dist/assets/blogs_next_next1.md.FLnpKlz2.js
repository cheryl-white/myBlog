import {
  _ as i,
  o as a,
  c as t,
  a6 as n,
} from "./chunks/framework.Dm7URc_W.js";
const E = JSON.parse(
    '{"title":"nextjs使用踩坑记录","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/next/next1.md","filePath":"blogs/next/next1.md","lastUpdated":1783346144000}',
  ),
  e = { name: "blogs/next/next1.md" };
function l(p, s, h, k, r, d) {
  return (
    a(),
    t(
      "div",
      { "data-pagefind-body": !0, "data-pagefind-meta": "date:1783346144000" },
      [
        ...(s[0] ||
          (s[0] = [
            n(
              `<h1 id="nextjs使用踩坑记录" tabindex="-1">nextjs使用踩坑记录 <a class="header-anchor" href="#nextjs使用踩坑记录" aria-label="Permalink to “nextjs使用踩坑记录”">​</a></h1><p>说一说在next使用--- title: Next.js全栈开发踩坑记录：antd样式闪烁与本地请求卡死排查 description: 记录使用Next.js + antd + Vercel + Neon开发小型全栈系统时遇到的两个典型问题——antd组件SSR水合样式闪烁偏移、本地请求pending卡死的排查与解决过程。 head:</p><ul><li><ul><li>meta</li><li>name: keywords content: Next.js,antd,SSR,水合,hydration,AntdRegistry,CSS-in-JS,Vercel,Neon,全栈开发,踩坑记录</li></ul></li><li><ul><li>meta</li><li>property: og:title content: Next.js全栈开发踩坑记录：antd样式闪烁与本地请求卡死排查</li></ul></li><li><ul><li>meta</li><li>property: og:description content: 记录使用Next.js + antd + Vercel + Neon开发小型全栈系统时遇到的两个典型问题及解决方案</li></ul></li><li><ul><li>meta - property: og:type content: article outline: deep</li></ul></li></ul><hr><p>next是一个基于react的全栈框架，Next.js 诞生于 2016年10月25日，由 Guillermo Rauch创立，可以直接在一个项目中写请求和页面代码，最后通过水合的方式渲染出界面。</p><p>在现代开发中，next算是前后端开发的一种融合，因为他支持ssr渲染的同时也支持界面的状态管理，无疑减少了页面首屏加载速度。在未来世界的开发中，next已经成为一种较为主流的全栈开发框架。</p><p>本人使用了vscode(IDE)+next(框架)+github(代码托管)+resend（邮件发送）+vercel（代码部署）+neon（数据库管理)+zustand（状态管理）开发了一个小型的系统。说一说大致的开发流程。</p><p>1.主要安装的库</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;@ant-design/nextjs-registry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^1.3.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//同步style渲染，这里也是一个坑点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;@neondatabase/serverless&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^1.1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//主要用在数据库连接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;@vercel/postgres&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^0.10.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//vercel连接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;antd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^6.4.5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//组件库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;bcryptjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^3.0.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//密码加密</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;jose&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^6.2.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//token生成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;next&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;16.2.9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;react&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;19.2.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;react-dom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;19.2.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;resend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^6.16.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//邮件发送 每天免费100次 </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;zustand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^5.0.14&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//状态管理</span></span></code></pre></div><p>上面就是我用到的库。因为Next内置了tailwind css支持 ，所以可以直接使用tailwind 样式。</p><p>说一说遇到的坑点。</p><h2 id="_1-页面进入时antd样式出现闪烁后偏移" tabindex="-1">1.页面进入时antd样式出现闪烁后偏移 <a class="header-anchor" href="#_1-页面进入时antd样式出现闪烁后偏移" aria-label="Permalink to “1.页面进入时antd样式出现闪烁后偏移”">​</a></h2><p>首先是我引入了antd的组件，我在next里面使用了items-center样式，但是我发现我引入的antd之中的Result组件在进入界面时从左边偏移到了右边，排除网络问题。</p><p>出现上述变化的原因和next的水合机制有关，antd 用的是 CSS-in-JS（@ant-design/cssinjs），它的样式是在组件渲染时通过 JS 动态计算并插入 <code>&lt;style&gt;</code> 标签的，如果没有配置 AntdRegistry，这个动态插入的过程在 SSR 阶段根本不会发生——因为 SSR 只是把组件&quot;渲染&quot;成 HTML，没有真正执行 antd 内部那套&quot;收集样式规则&quot;的逻辑、在水合阶段才会调用 就出现了延迟渲染 为了解决这个问题 ，所以用AntdRegistry 将js计算样式的时间提前。</p><p>笼统来说，是因为ssr渲染导致antd的样式插入还没执行就已经出现了界面，所以后续水合前端代码，就发现不对。使用AntdRegistry 将样式注入提前就解决了这个问题。</p><h2 id="_2-本地请求卡死" tabindex="-1">2.本地请求卡死 <a class="header-anchor" href="#_2-本地请求卡死" aria-label="Permalink to “2.本地请求卡死”">​</a></h2><p>这是困惑我最大的点，因为当时我的本地服务器请求一直是pending状态，控制台也没有任何报错，最开始以为是我连接的平台比如vercel,resend之类的环境变量过期了，但是检查了一遍发现并不是。是因为缓存问题，我的.next可能在编译过程中产生了错误文件，但是这个错误一直是卡死无法执行下去的，所以才会一直pending,而且这种错误在页面执行过程中不会被捕捉到。只需要删除旧的.next缓存文件然后重新run即可。 中遇到的坑点。</p>`,
              17,
            ),
          ])),
      ],
    )
  );
}
const g = i(e, [["render", l]]);
export { E as __pageData, g as default };
