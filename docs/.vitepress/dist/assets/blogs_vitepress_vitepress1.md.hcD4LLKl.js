import {
  _ as i,
  o as e,
  c as t,
  a6 as a,
} from "./chunks/framework.Dm7URc_W.js";
const g = JSON.parse(
    '{"title":"vitepress的md模式样式定义","description":"详解VitePress中pageClass与body样式的绑定原理，以及全局样式的正确写法","frontmatter":{"title":"vitepress的md模式样式定义","description":"详解VitePress中pageClass与body样式的绑定原理，以及全局样式的正确写法","head":[["meta",{"name":"keywords","content":"vitepress,pageClass,body样式,前端"}]]},"headers":[],"relativePath":"blogs/vitepress/vitepress1.md","filePath":"blogs/vitepress/vitepress1.md","lastUpdated":1783346144000}',
  ),
  n = { name: "blogs/vitepress/vitepress1.md" };
function l(p, s, h, d, r, k) {
  return (
    e(),
    t(
      "div",
      { "data-pagefind-body": !0, "data-pagefind-meta": "date:1783346144000" },
      [
        ...(s[0] ||
          (s[0] = [
            a(
              `<h1 id="vitepress的md模式样式定义" tabindex="-1">vitepress的md模式样式定义 <a class="header-anchor" href="#vitepress的md模式样式定义" aria-label="Permalink to “vitepress的md模式样式定义”">​</a></h1><h2 id="_1-直接在md文件使用style定义局部样式" tabindex="-1">1.直接在md文件使用style定义局部样式 <a class="header-anchor" href="#_1-直接在md文件使用style定义局部样式" aria-label="Permalink to “1.直接在md文件使用style定义局部样式”">​</a></h2><p>因为在md里面是支持直接写html的，可以直接使用内置style定义样式，同时这里定义的样式是会应用在全局，提倡使用 <code>&lt;style module&gt;</code> 或者 <code>&lt;style scoped&gt;</code> 隔离样式，避免样式污染。</p><p><strong>【注意】</strong> 这里使用的html标签都是编译为html之后的标签。</p><p><strong>【延伸】</strong>：还有一个<strong>值得注意</strong>的点就是，当定义<strong>body</strong>的样式时，因为<strong>body本身不存在于当前md的dom树</strong>里面，所以即使在局内定义body样式，也不会生效，比如下面是docs/index.md</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  background-color: red;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/style&gt;</span></span></code></pre></div><p>会发现这里的样式完全没有被应用到body。</p><p>为了解决这个问题推荐使用<strong>frontmatter</strong>里面的<strong>pageClass</strong>，它是设计者<strong>专门用在body的class</strong>上的。</p><p>具体使用方法：</p><p>（1）在.vitepress/theme/style.css文件下添加样式定义。</p><p>比如 <code>.home-page { background-color: red; }</code>；因为样式覆盖的问题可能还是会存在不生效的问题，可以尝试添加<code>!important</code>直接提升优先级。</p><p>（2）同时在.vitepress/theme/index.js目录下面：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vitepress/theme&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme;</span></span></code></pre></div><p>（3）在最后需要的的index.md的frontmatter里面添加样式</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pageClass: home-page</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/div&gt;</span></span></code></pre></div><h2 id="_2-在-vitepress-theme里面新建自定义样式" tabindex="-1">2. 在./vitepress/theme里面新建自定义样式 <a class="header-anchor" href="#_2-在-vitepress-theme里面新建自定义样式" aria-label="Permalink to “2. 在./vitepress/theme里面新建自定义样式”">​</a></h2><p>这种常常用在修改一些<strong>全局样式</strong>。</p><p>（1）在.vitepress/theme/style.css文件下添加样式定义。</p><p>比如 <code>.classTest{ width:100%; }</code>；因为样式覆盖的问题可能还是会存在不生效的问题，可以尝试添加<code>!important</code>直接提升优先级。</p><p>（2）同时在.vitepress/theme/index.js目录下面：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vitepress/theme&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme;</span></span></code></pre></div><p>（3）直接在页面标签使用.classTest：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;div class=&quot;classTest&quot;&gt;content&lt;/div&gt;</span></span></code></pre></div><p><strong>【注】</strong> 其实frontmatter里面的pageClass使用方式和全局样式是相同的，都是全局可访问。只是pageClass专门作用于页面的body。</p><p>详见：<a href="https://vitepress.dev/guide/extending-default-theme#customizing-css" target="_blank" rel="noreferrer">官方链接</a></p>`,
              25,
            ),
          ])),
      ],
    )
  );
}
const c = i(n, [["render", l]]);
export { g as __pageData, c as default };
