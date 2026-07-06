<script setup>
import { ref } from "vue";

// 控制显示的文字索引，0 显示第一段，1 显示第二段
const currentIndex = ref(0);

// 要切换的两段文字（每段之间只留一个换行，不空行）
const texts = [
  `Hi, I'm Cheryl-White 👋
I'm a front-end engineer with broad interests and a habit of thinking things through to the core.
I enjoy exploring all kinds of new things—whether it's the latest framework in the tech world, or design, tools, and languages from outside of it.
Curiosity pulls me in, but simply "knowing" is never enough. I always try to follow up with a deep review: What problem does this solve? Is there a better way? Can I explain it clearly enough for someone else to understand?
This blog is where I document the rivers I've actually crossed and the holes I've actually fallen into. I don't aim for quantity—I just hope every post is worth your time.
If you also enjoy mastering technology and diving deep into problems, feel free to hang around. The comment section is always open for a good debate. 🚀`,

  `我是 Chery-White 👋
一名前端工程师，兴趣广泛，习惯把问题想透。
我喜欢探索各种新鲜事物——无论是技术领域的最新框架，还是圈外的设计、工具、语言。
好奇心把我拉进去，但光"知道"远远不够。我总会跟着做一次深度复盘：这个问题解决了什么？有没有更好的方式？我能不能讲清楚，让别人也能听懂？
这个博客记录的是我真正蹚过的河、真正踩过的坑。我不追求数量，只希望每篇文章都值得你花时间看。
如果你也喜欢钻研技术、深挖问题，欢迎常来逛逛。评论区随时欢迎理性讨论。🚀`,
];

const headers = ["cheryl's introduction", "cheryl的自我介绍"];

// 鼠标移入：切换到第二段
const showSecond = () => {
  currentIndex.value = 1;
};

// 鼠标移出：切换回第一段
const showFirst = () => {
  currentIndex.value = 0;
};
</script>

<template>
  <div
    class="text-switch-container"
    @mouseenter="showSecond"
    @mouseleave="showFirst"
    style="max-width: 720px; text-align: left; margin: 0 auto; line-height: 1.8"
  >
    <transition name="fade" mode="out-in">
      <div :key="currentIndex">
        <h1>{{ headers[currentIndex] }}</h1>
        <p class="switch-text" style="white-space: pre-wrap">
          {{ texts[currentIndex] }}
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.text-switch-container {
  cursor: pointer;
  padding: 10px 0;
}

.switch-text {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.8;
}

/* 过渡动画：淡入淡出 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
