# vitepress的md模式样式定义

## 1.直接在md文件使用style定义局部样式

因为在md里面是支持直接写html的，可以直接使用内置style定义样式，同时这里定义的样式是会应用在全局，提倡使用 `<style module>` 或者 `<style scoped>` 隔离样式，避免样式污染。

**【注意】** 这里使用的html标签都是编译为html之后的标签。

**【延伸】**：还有一个**值得注意**的点就是，当定义**body**的样式时，因为**body本身不存在于当前md的dom树**里面，所以即使在局内定义body样式，也不会生效，比如下面是docs/index.md

```md
<div>
content
</div>
<style scoped>
body {
  background-color: red;
}
</style>
```

会发现这里的样式完全没有被应用到body。

为了解决这个问题推荐使用**frontmatter**里面的**pageClass**，它是设计者**专门用在body的class**上的。

具体使用方法：

（1）在.vitepress/theme/style.css文件下添加样式定义。

比如 `.home-page { background-color: red; }`；因为样式覆盖的问题可能还是会存在不生效的问题，可以尝试添加`!important`直接提升优先级。

（2）同时在.vitepress/theme/index.js目录下面：

```js
import DefaultTheme from "vitepress/theme";
import "./style.css";
export default DefaultTheme;
```

（3）在最后需要的的index.md的frontmatter里面添加样式

```md
---
pageClass: home-page
---

<div>
content
</div>
```

## 2. 在./vitepress/theme里面新建自定义样式

这种常常用在修改一些**全局样式**。

（1）在.vitepress/theme/style.css文件下添加样式定义。

比如 `.classTest{ width:100%; }`；因为样式覆盖的问题可能还是会存在不生效的问题，可以尝试添加`!important`直接提升优先级。

（2）同时在.vitepress/theme/index.js目录下面：

```js
import DefaultTheme from "vitepress/theme";
import "./style.css";
export default DefaultTheme;
```

（3）直接在页面标签使用.classTest：

```md
<div class="classTest">content</div>
```

**【注】** 其实frontmatter里面的pageClass使用方式和全局样式是相同的，都是全局可访问。只是pageClass专门作用于页面的body。

详见：[官方链接](https://vitepress.dev/guide/extending-default-theme#customizing-css)
