import {
  u as n,
  I as o,
  o as r,
  c as d,
  j as e,
  a as s,
  J as l,
} from "./chunks/framework.CbRxUR4P.js";
const c = {
    style: {
      height: "100%",
      width: "100%",
      display: "flex",
      "justify-content": "start",
    },
  },
  j = JSON.parse(
    '{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"difficuties.md","filePath":"difficuties.md"}',
  ),
  f = { name: "difficuties.md" },
  b = Object.assign(f, {
    setup(u) {
      const { site: m, theme: p, page: _, frontmatter: h } = n(),
        a = [{ name: "nextjs使用", title: "nextjs使用" }];
      return (x, t) => {
        const i = o("List");
        return (
          r(),
          d(
            "div",
            {
              "data-pagefind-body": !0,
              "data-pagefind-meta": "date:1783243407482",
            },
            [
              t[0] ||
                (t[0] = e(
                  "h2",
                  { id: "results", tabindex: "-1" },
                  [
                    s("Results "),
                    e(
                      "a",
                      {
                        class: "header-anchor",
                        href: "#results",
                        "aria-label": "Permalink to “Results”",
                      },
                      "​",
                    ),
                  ],
                  -1,
                )),
              e("div", c, [l(i, { lists: a })]),
              t[1] || (t[1] = s(" ``` ", -1)),
            ],
          )
        );
      };
    },
  });
export { j as __pageData, b as default };
