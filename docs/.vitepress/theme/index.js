import DefaultTheme from "vitepress/theme";
import "./custom.css";
import FadeContent from "../componments/FadeContent.vue";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("FadeContent", FadeContent);
  },
};
