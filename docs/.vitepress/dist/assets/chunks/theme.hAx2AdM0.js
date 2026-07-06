import {
  d as y,
  c as f,
  r as h,
  n as H,
  a as ce,
  t as T,
  o as l,
  b as M,
  w as v,
  T as Re,
  e as $,
  _ as S,
  u as Tt,
  i as fn,
  f as vn,
  g as je,
  h as b,
  j as d,
  k as c,
  l as ue,
  m as bt,
  p as he,
  q as mn,
  s as dt,
  v as pn,
  x as be,
  y as j,
  z as Et,
  A,
  B as Ht,
  C as Pe,
  D as Ve,
  E as _t,
  F as Ge,
  G as R,
  H as z,
  I as me,
  J as L,
  K as oe,
  L as Ot,
  M as gn,
  N as kn,
  O as le,
  P as We,
  Q as Dt,
  R as yn,
  S as bn,
  U as ne,
  V as Ft,
  W as _n,
  X as De,
  Y as $n,
  Z as ht,
  $ as Ue,
  a0 as Ln,
  a1 as Bt,
  a2 as Rt,
  a3 as Ye,
  a4 as wn,
  a5 as Mn,
  a6 as Sn,
  a7 as Cn,
  a8 as Pn,
  a9 as Vn,
  aa as xn,
  ab as jt,
  ac as In,
  ad as An,
  ae as Nn,
  af as Tn,
} from "./framework.CbRxUR4P.js";
const En = y({
    __name: "VPBadge",
    props: { text: {}, type: { default: "tip" } },
    setup(t) {
      return (e, n) => (
        l(),
        f(
          "span",
          { class: H(["VPBadge", t.type]) },
          [h(e.$slots, "default", {}, () => [ce(T(t.text), 1)])],
          2,
        )
      );
    },
  }),
  Hn = { key: 0, class: "VPBackdrop" },
  On = y({
    __name: "VPBackdrop",
    props: { show: { type: Boolean } },
    setup(t) {
      return (e, n) => (
        l(),
        M(
          Re,
          { name: "fade" },
          {
            default: v(() => [t.show ? (l(), f("div", Hn)) : $("", !0)]),
            _: 1,
          },
        )
      );
    },
  }),
  Dn = S(On, [["__scopeId", "data-v-c79a1216"]]),
  N = Tt;
function Fn(t, e) {
  let n,
    s = !1;
  return () => {
    (n && clearTimeout(n),
      s
        ? (n = setTimeout(t, e))
        : (t(), (s = !0) && setTimeout(() => (s = !1), e)));
  };
}
function Xe(t) {
  return t.startsWith("/") ? t : `/${t}`;
}
function ft(t) {
  const {
    pathname: e,
    search: n,
    hash: s,
    protocol: o,
  } = new URL(t, "http://a.com");
  if (fn(t) || t.startsWith("#") || !o.startsWith("http") || !vn(e)) return t;
  const { site: a } = N(),
    r =
      e.endsWith("/") || e.endsWith(".html")
        ? t
        : t.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(/(\.md)?$/, a.value.cleanUrls ? "" : ".html")}${n}${s}`,
          );
  return je(r);
}
function xe({ correspondingLink: t = !1 } = {}) {
  const { site: e, localeIndex: n, page: s, theme: o, hash: a } = N(),
    r = b(() => ({
      label: e.value.locales[n.value]?.label,
      link:
        e.value.locales[n.value]?.link ||
        (n.value === "root" ? "/" : `/${n.value}/`),
    }));
  return {
    localeLinks: b(() =>
      Object.entries(e.value.locales).flatMap(([u, m]) =>
        r.value.label === m.label
          ? []
          : {
              text: m.label,
              link:
                Bn(
                  m.link || (u === "root" ? "/" : `/${u}/`),
                  o.value.i18nRouting !== !1 && t,
                  s.value.relativePath.slice(r.value.link.length - 1),
                  !e.value.cleanUrls,
                ) + a.value,
              lang: m.lang,
              dir: m.dir,
            },
      ),
    ),
    currentLang: r,
  };
}
function Bn(t, e, n, s) {
  return e
    ? t.replace(/\/$/, "") +
        Xe(
          n
            .replace(/(^|\/)index\.md$/, "$1")
            .replace(/\.md$/, s ? ".html" : ""),
        )
    : t;
}
const Rn = { class: "NotFound" },
  jn = { class: "code" },
  Gn = { class: "title" },
  Wn = { class: "quote" },
  Un = { class: "action" },
  zn = ["href", "aria-label"],
  qn = y({
    __name: "NotFound",
    setup(t) {
      const { theme: e } = N(),
        { currentLang: n } = xe();
      return (s, o) => (
        l(),
        f("div", Rn, [
          d("p", jn, T(c(e).notFound?.code ?? "404"), 1),
          d("h1", Gn, T(c(e).notFound?.title ?? "PAGE NOT FOUND"), 1),
          o[0] || (o[0] = d("div", { class: "divider" }, null, -1)),
          d(
            "blockquote",
            Wn,
            T(
              c(e).notFound?.quote ??
                "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
            ),
            1,
          ),
          d("div", Un, [
            d(
              "a",
              {
                class: "link",
                href: c(je)(c(e).notFound?.link ?? c(n).link),
                "aria-label": c(e).notFound?.linkLabel ?? "go to home",
              },
              T(c(e).notFound?.linkText ?? "Take me home"),
              9,
              zn,
            ),
          ]),
        ])
      );
    },
  }),
  Kn = S(qn, [["__scopeId", "data-v-829df670"]]);
function Gt(t, e) {
  if (Array.isArray(t)) return Ee(t);
  if (t == null) return [];
  e = Xe(e);
  const n = Object.keys(t)
      .sort((o, a) => a.split("/").length - o.split("/").length)
      .find((o) => e.startsWith(Xe(o))),
    s = n ? t[n] : [];
  return Array.isArray(s) ? Ee(s) : Ee(s.items, s.base);
}
function Zn(t) {
  const e = [];
  let n = 0;
  for (const s in t) {
    const o = t[s];
    if (o.items) {
      n = e.push(o);
      continue;
    }
    (e[n] || e.push({ items: [] }), e[n].items.push(o));
  }
  return e;
}
function Jn(t) {
  const e = [];
  function n(s) {
    for (const o of s)
      (o.text &&
        o.link &&
        e.push({ text: o.text, link: o.link, docFooterText: o.docFooterText }),
        o.items && n(o.items));
  }
  return (n(t), e);
}
function et(t, e) {
  return Array.isArray(e)
    ? e.some((n) => et(t, n))
    : ue(t, e.link)
      ? !0
      : e.items
        ? et(t, e.items)
        : !1;
}
function Ee(t, e) {
  return [...t].map((n) => {
    const s = { ...n },
      o = s.base || e;
    return (
      o &&
        s.link &&
        (s.link = o + s.link.replace(/^\//, o.endsWith("/") ? "" : "/")),
      s.items && (s.items = Ee(s.items, o)),
      s
    );
  });
}
function Qn() {
  const { hasSidebar: t } = fe(),
    e = bt("(min-width: 960px)"),
    n = bt("(min-width: 1280px)");
  return {
    isAsideEnabled: b(() =>
      !n.value && !e.value ? !1 : t.value ? n.value : e.value,
    ),
  };
}
const Yn = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,
  tt = [];
function Wt(t) {
  return (
    (typeof t.outline == "object" &&
      !Array.isArray(t.outline) &&
      t.outline.label) ||
    t.outlineTitle ||
    "On this page"
  );
}
function Xn(t) {
  const e = [
    ...document.querySelectorAll(
      ".VPDoc h1, .VPDoc h2, .VPDoc h3, .VPDoc h4, .VPDoc h5, .VPDoc h6",
    ),
  ]
    .filter((n) => n.id && n.hasChildNodes())
    .map((n) => {
      const s = Number(n.tagName[1]);
      return { element: n, title: es(n), link: "#" + n.id, level: s };
    });
  return ts(e, t);
}
function es(t) {
  let e = "";
  for (const n of t.childNodes)
    if (n.nodeType === 1) {
      if (Yn.test(n.className)) continue;
      e += n.textContent;
    } else n.nodeType === 3 && (e += n.textContent);
  return e.trim();
}
function ts(t, e) {
  if (e === !1) return [];
  const n = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2,
    [s, o] = typeof n == "number" ? [n, n] : n === "deep" ? [2, 6] : n;
  return os(t, s, o);
}
function ns(t, e) {
  const { isAsideEnabled: n } = Qn(),
    s = Fn(a, 100);
  let o = null;
  (he(() => {
    (requestAnimationFrame(a), window.addEventListener("scroll", s));
  }),
    mn(() => {
      r(location.hash);
    }),
    dt(() => {
      window.removeEventListener("scroll", s);
    }));
  function a() {
    if (!n.value) return;
    const i = window.scrollY,
      u = window.innerHeight,
      m = document.body.offsetHeight,
      p = Math.abs(i + u - m) < 1,
      g = tt
        .map(({ element: C, link: P }) => ({ link: P, top: ss(C) }))
        .filter(({ top: C }) => !Number.isNaN(C))
        .sort((C, P) => C.top - P.top);
    if (!g.length) {
      r(null);
      return;
    }
    if (i < 1) {
      r(null);
      return;
    }
    if (p) {
      r(g[g.length - 1].link);
      return;
    }
    let _ = null;
    for (const { link: C, top: P } of g) {
      if (P > i + pn() + 4) break;
      _ = C;
    }
    r(_);
  }
  function r(i) {
    (o && o.classList.remove("active"),
      i == null
        ? (o = null)
        : (o = t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`)));
    const u = o;
    u
      ? (u.classList.add("active"),
        (e.value.style.top = u.offsetTop + 39 + "px"),
        (e.value.style.opacity = "1"))
      : ((e.value.style.top = "33px"), (e.value.style.opacity = "0"));
  }
}
function ss(t) {
  let e = 0;
  for (; t !== document.body; ) {
    if (t === null) return NaN;
    ((e += t.offsetTop), (t = t.offsetParent));
  }
  return e;
}
function os(t, e, n) {
  tt.length = 0;
  const s = [],
    o = [];
  return (
    t.forEach((a) => {
      const r = { ...a, children: [] };
      let i = o[o.length - 1];
      for (; i && i.level >= r.level; ) (o.pop(), (i = o[o.length - 1]));
      if (
        r.element.classList.contains("ignore-header") ||
        (i && "shouldIgnore" in i)
      ) {
        o.push({ level: r.level, shouldIgnore: !0 });
        return;
      }
      r.level > n ||
        r.level < e ||
        (tt.push({ element: r.element, link: r.link }),
        i ? i.children.push(r) : s.push(r),
        o.push(r));
    }),
    s
  );
}
const we = A(!1);
function as(t) {
  let e;
  (be(() => {
    e = we.value ? document.activeElement : void 0;
  }),
    he(() => {
      window.addEventListener("keyup", n);
    }),
    dt(() => {
      window.removeEventListener("keyup", n);
    }));
  function n(s) {
    s.key === "Escape" && we.value && (t(), e?.focus());
  }
}
function rs() {
  function t() {
    we.value = !0;
  }
  function e() {
    we.value = !1;
  }
  function n() {
    we.value ? e() : t();
  }
  return { isOpen: we, open: t, close: e, toggle: n };
}
function is(t) {
  const { page: e, hash: n } = N(),
    s = A(!1),
    o = b(() => t.value.collapsed != null),
    a = b(() => !!t.value.link),
    r = A(!1),
    i = () => {
      r.value = ue(e.value.relativePath, t.value.link);
    };
  (j([e, t, n], i), he(i));
  const u = b(() =>
      r.value
        ? !0
        : t.value.items
          ? et(e.value.relativePath, t.value.items)
          : !1,
    ),
    m = b(() => !!(t.value.items && t.value.items.length));
  (be(() => {
    s.value = !!(o.value && t.value.collapsed);
  }),
    Et(() => {
      (r.value || u.value) && (s.value = !1);
    }));
  function p() {
    o.value && (s.value = !s.value);
  }
  return {
    collapsed: s,
    collapsible: o,
    isLink: a,
    isActiveLink: r,
    hasActiveLink: u,
    hasChildren: m,
    toggle: p,
  };
}
const nt = Ge([]),
  Ce = Ge([]),
  He = Ge(!1);
function fe() {
  const { frontmatter: t, theme: e } = N(),
    n = b(() => !!(t.value.isHome ?? t.value.layout === "home")),
    s = b(() => t.value.sidebar !== !1 && Ce.value.length > 0 && !n.value),
    o = b(() => s.value && He.value),
    a = b(() => (s.value ? Zn(Ce.value) : [])),
    r = b(() =>
      n.value
        ? !1
        : t.value.aside != null
          ? !!t.value.aside
          : e.value.aside !== !1,
    ),
    i = b(() =>
      r.value
        ? t.value.aside == null
          ? e.value.aside === "left"
          : t.value.aside === "left"
        : !1,
    ),
    u = b(() => nt.value.length > 0);
  return {
    isHome: n,
    sidebar: _t(Ce),
    sidebarGroups: a,
    hasSidebar: s,
    isSidebarEnabled: o,
    hasAside: r,
    leftAside: i,
    headers: _t(nt),
    hasLocalNav: u,
  };
}
function ls({ closeSidebar: t }) {
  const { frontmatter: e, page: n, theme: s } = N();
  (j(
    () => [n.value.relativePath, s.value.sidebar],
    ([a, r]) => {
      const i = r ? Gt(r, a) : [];
      JSON.stringify(i) !== JSON.stringify(Ce.value) && (Ce.value = i);
    },
    { immediate: !0, deep: !0, flush: "sync" },
  ),
    Ht(() => {
      nt.value = Xn(e.value.outline ?? s.value.outline);
    }),
    Pe &&
      ((He.value = window.innerWidth >= 960),
      window.addEventListener(
        "resize",
        () => {
          He.value = window.innerWidth >= 960;
        },
        { passive: !0 },
      )));
  const o = Ve();
  (j(() => o.path, t), j(He, t), as(t));
}
const Ut = Symbol("layout-info"),
  cs = ["href", "title"],
  us = y({
    __name: "VPDocOutlineItem",
    props: { headers: {}, root: { type: Boolean } },
    setup(t) {
      return (e, n) => {
        const s = me("VPDocOutlineItem", !0);
        return (
          l(),
          f(
            "ul",
            { class: H(["VPDocOutlineItem", t.root ? "root" : "nested"]) },
            [
              (l(!0),
              f(
                R,
                null,
                z(
                  t.headers,
                  ({ children: o, link: a, title: r }) => (
                    l(),
                    f("li", null, [
                      d(
                        "a",
                        { class: "outline-link", href: a, title: r },
                        T(r),
                        9,
                        cs,
                      ),
                      o?.length
                        ? (l(),
                          M(s, { key: 0, headers: o }, null, 8, ["headers"]))
                        : $("", !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        );
      };
    },
  }),
  zt = S(us, [["__scopeId", "data-v-1ce71065"]]),
  ds = { class: "content" },
  hs = {
    "aria-level": "2",
    class: "outline-title",
    id: "doc-outline-aria-label",
    role: "heading",
  },
  fs = y({
    __name: "VPDocAsideOutline",
    setup(t) {
      const { theme: e } = N(),
        n = A(),
        s = A(),
        { headers: o, hasLocalNav: a } = fe();
      return (
        ns(n, s),
        (r, i) => (
          l(),
          f(
            "nav",
            {
              "aria-labelledby": "doc-outline-aria-label",
              class: H(["VPDocAsideOutline", { "has-outline": c(a) }]),
              ref_key: "container",
              ref: n,
            },
            [
              d("div", ds, [
                d(
                  "div",
                  { class: "outline-marker", ref_key: "marker", ref: s },
                  null,
                  512,
                ),
                d("div", hs, T(c(Wt)(c(e))), 1),
                L(zt, { headers: c(o), root: !0 }, null, 8, ["headers"]),
              ]),
            ],
            2,
          )
        )
      );
    },
  }),
  vs = S(fs, [["__scopeId", "data-v-60d5052e"]]),
  ms = { class: "VPDocAsideCarbonAds" },
  ps = y({
    __name: "VPDocAsideCarbonAds",
    props: { carbonAds: {} },
    setup(t) {
      const e = () => null;
      return (n, s) => (
        l(),
        f("div", ms, [
          L(c(e), { "carbon-ads": t.carbonAds }, null, 8, ["carbon-ads"]),
        ])
      );
    },
  }),
  gs = { class: "VPDocAside" },
  ks = y({
    __name: "VPDocAside",
    setup(t) {
      const { theme: e } = N();
      return (n, s) => (
        l(),
        f("div", gs, [
          h(n.$slots, "aside-top", {}, void 0, !0),
          h(n.$slots, "aside-outline-before", {}, void 0, !0),
          L(vs),
          h(n.$slots, "aside-outline-after", {}, void 0, !0),
          s[0] || (s[0] = d("div", { class: "spacer" }, null, -1)),
          h(n.$slots, "aside-ads-before", {}, void 0, !0),
          c(e).carbonAds
            ? (l(),
              M(ps, { key: 0, "carbon-ads": c(e).carbonAds }, null, 8, [
                "carbon-ads",
              ]))
            : $("", !0),
          h(n.$slots, "aside-ads-after", {}, void 0, !0),
          h(n.$slots, "aside-bottom", {}, void 0, !0),
        ])
      );
    },
  }),
  ys = S(ks, [["__scopeId", "data-v-3f215769"]]);
function bs() {
  const { theme: t, page: e } = N();
  return b(() => {
    const { text: n = "Edit this page", pattern: s = "" } =
      t.value.editLink || {};
    let o;
    return (
      typeof s == "function"
        ? (o = s(e.value))
        : (o = s.replace(/:path/g, e.value.filePath)),
      { url: o, text: n }
    );
  });
}
function _s() {
  const { page: t, theme: e, frontmatter: n } = N();
  return b(() => {
    const s = Gt(e.value.sidebar, t.value.relativePath),
      o = Jn(s),
      a = $s(o, (m) => m.link.replace(/[?#].*$/, "")),
      r = a.findIndex((m) => ue(t.value.relativePath, m.link)),
      i =
        (e.value.docFooter?.prev === !1 && !n.value.prev) ||
        n.value.prev === !1,
      u =
        (e.value.docFooter?.next === !1 && !n.value.next) ||
        n.value.next === !1;
    return {
      prev: i
        ? void 0
        : {
            text:
              (typeof n.value.prev == "string"
                ? n.value.prev
                : typeof n.value.prev == "object"
                  ? n.value.prev.text
                  : void 0) ??
              a[r - 1]?.docFooterText ??
              a[r - 1]?.text,
            link:
              (typeof n.value.prev == "object" ? n.value.prev.link : void 0) ??
              a[r - 1]?.link,
          },
      next: u
        ? void 0
        : {
            text:
              (typeof n.value.next == "string"
                ? n.value.next
                : typeof n.value.next == "object"
                  ? n.value.next.text
                  : void 0) ??
              a[r + 1]?.docFooterText ??
              a[r + 1]?.text,
            link:
              (typeof n.value.next == "object" ? n.value.next.link : void 0) ??
              a[r + 1]?.link,
          },
    };
  });
}
function $s(t, e) {
  const n = new Set();
  return t.filter((s) => {
    const o = e(s);
    return n.has(o) ? !1 : n.add(o);
  });
}
const ae = y({
    __name: "VPLink",
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(t) {
      const e = t,
        n = b(() => e.tag ?? (e.href ? "a" : "span")),
        s = b(() => (e.href && Ot.test(e.href)) || e.target === "_blank");
      return (o, a) => (
        l(),
        M(
          oe(n.value),
          {
            class: H([
              "VPLink",
              {
                link: t.href,
                "vp-external-link-icon": s.value,
                "no-icon": t.noIcon,
              },
            ]),
            href: t.href ? c(ft)(t.href) : void 0,
            target: t.target ?? (s.value ? "_blank" : void 0),
            rel: t.rel ?? (s.value ? "noreferrer" : void 0),
          },
          { default: v(() => [h(o.$slots, "default")]), _: 3 },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  }),
  Ls = { class: "VPLastUpdated" },
  ws = ["datetime"],
  Ms = y({
    __name: "VPDocFooterLastUpdated",
    setup(t) {
      const { theme: e, page: n, lang: s } = N(),
        { language: o } = kn(),
        a = gn("timeRef"),
        r = b(() => new Date(n.value.lastUpdated)),
        i = b(() => r.value.toISOString()),
        u = Ge("");
      return (
        he(() => {
          be(() => {
            const m = e.value.lastUpdated?.formatOptions?.forceLocale
              ? s.value
              : o.value;
            ((u.value = new Intl.DateTimeFormat(
              m,
              e.value.lastUpdated?.formatOptions ?? {
                dateStyle: "medium",
                timeStyle: "medium",
              },
            ).format(r.value)),
              m && s.value !== m
                ? a.value?.setAttribute("lang", m)
                : a.value?.removeAttribute("lang"));
          });
        }),
        (m, p) => (
          l(),
          f("p", Ls, [
            ce(
              T(
                c(e).lastUpdated?.text ||
                  c(e).lastUpdatedText ||
                  "Last updated",
              ) + ": ",
              1,
            ),
            d(
              "time",
              { ref_key: "timeRef", ref: a, datetime: i.value },
              T(u.value),
              9,
              ws,
            ),
          ])
        )
      );
    },
  }),
  Ss = S(Ms, [["__scopeId", "data-v-3c637f39"]]),
  Cs = { key: 0, class: "VPDocFooter" },
  Ps = { key: 0, class: "edit-info" },
  Vs = { key: 0, class: "edit-link" },
  xs = { key: 1, class: "last-updated" },
  Is = {
    key: 1,
    class: "prev-next",
    "aria-labelledby": "doc-footer-aria-label",
  },
  As = { class: "pager" },
  Ns = ["innerHTML"],
  Ts = ["innerHTML"],
  Es = { class: "pager" },
  Hs = ["innerHTML"],
  Os = ["innerHTML"],
  Ds = y({
    __name: "VPDocFooter",
    setup(t) {
      const { theme: e, page: n, frontmatter: s } = N(),
        o = bs(),
        a = _s(),
        r = b(() => e.value.editLink && s.value.editLink !== !1),
        i = b(() => n.value.lastUpdated),
        u = b(() => r.value || i.value || a.value.prev || a.value.next);
      return (m, p) =>
        u.value
          ? (l(),
            f("footer", Cs, [
              h(m.$slots, "doc-footer-before", {}, void 0, !0),
              r.value || i.value
                ? (l(),
                  f("div", Ps, [
                    r.value
                      ? (l(),
                        f("div", Vs, [
                          L(
                            ae,
                            {
                              class: "edit-link-button",
                              href: c(o).url,
                              "no-icon": !0,
                            },
                            {
                              default: v(() => [
                                p[0] ||
                                  (p[0] = d(
                                    "span",
                                    { class: "vpi-square-pen edit-link-icon" },
                                    null,
                                    -1,
                                  )),
                                ce(" " + T(c(o).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ),
                        ]))
                      : $("", !0),
                    i.value ? (l(), f("div", xs, [L(Ss)])) : $("", !0),
                  ]))
                : $("", !0),
              c(a).prev?.link || c(a).next?.link
                ? (l(),
                  f("nav", Is, [
                    p[1] ||
                      (p[1] = d(
                        "span",
                        {
                          class: "visually-hidden",
                          id: "doc-footer-aria-label",
                        },
                        "Pager",
                        -1,
                      )),
                    d("div", As, [
                      c(a).prev?.link
                        ? (l(),
                          M(
                            ae,
                            {
                              key: 0,
                              class: "pager-link prev",
                              href: c(a).prev.link,
                            },
                            {
                              default: v(() => [
                                d(
                                  "span",
                                  {
                                    class: "desc",
                                    innerHTML:
                                      c(e).docFooter?.prev || "Previous page",
                                  },
                                  null,
                                  8,
                                  Ns,
                                ),
                                d(
                                  "span",
                                  { class: "title", innerHTML: c(a).prev.text },
                                  null,
                                  8,
                                  Ts,
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ))
                        : $("", !0),
                    ]),
                    d("div", Es, [
                      c(a).next?.link
                        ? (l(),
                          M(
                            ae,
                            {
                              key: 0,
                              class: "pager-link next",
                              href: c(a).next.link,
                            },
                            {
                              default: v(() => [
                                d(
                                  "span",
                                  {
                                    class: "desc",
                                    innerHTML:
                                      c(e).docFooter?.next || "Next page",
                                  },
                                  null,
                                  8,
                                  Hs,
                                ),
                                d(
                                  "span",
                                  { class: "title", innerHTML: c(a).next.text },
                                  null,
                                  8,
                                  Os,
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["href"],
                          ))
                        : $("", !0),
                    ]),
                  ]))
                : $("", !0),
            ]))
          : $("", !0);
    },
  }),
  Fs = S(Ds, [["__scopeId", "data-v-e257564d"]]),
  Bs = { class: "container" },
  Rs = { class: "aside-container" },
  js = { class: "aside-content" },
  Gs = { class: "content" },
  Ws = { class: "content-container" },
  Us = { class: "main" },
  zs = y({
    __name: "VPDoc",
    setup(t) {
      const { theme: e } = N(),
        n = Ve(),
        { hasSidebar: s, hasAside: o, leftAside: a } = fe(),
        r = b(() => n.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
      return (i, u) => {
        const m = me("Content");
        return (
          l(),
          f(
            "div",
            { class: H(["VPDoc", { "has-sidebar": c(s), "has-aside": c(o) }]) },
            [
              h(i.$slots, "doc-top", {}, void 0, !0),
              d("div", Bs, [
                c(o)
                  ? (l(),
                    f(
                      "div",
                      { key: 0, class: H(["aside", { "left-aside": c(a) }]) },
                      [
                        u[0] ||
                          (u[0] = d(
                            "div",
                            { class: "aside-curtain" },
                            null,
                            -1,
                          )),
                        d("div", Rs, [
                          d("div", js, [
                            L(ys, null, {
                              "aside-top": v(() => [
                                h(i.$slots, "aside-top", {}, void 0, !0),
                              ]),
                              "aside-bottom": v(() => [
                                h(i.$slots, "aside-bottom", {}, void 0, !0),
                              ]),
                              "aside-outline-before": v(() => [
                                h(
                                  i.$slots,
                                  "aside-outline-before",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              "aside-outline-after": v(() => [
                                h(
                                  i.$slots,
                                  "aside-outline-after",
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              "aside-ads-before": v(() => [
                                h(i.$slots, "aside-ads-before", {}, void 0, !0),
                              ]),
                              "aside-ads-after": v(() => [
                                h(i.$slots, "aside-ads-after", {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : $("", !0),
                d("div", Gs, [
                  d("div", Ws, [
                    h(i.$slots, "doc-before", {}, void 0, !0),
                    d("main", Us, [
                      L(
                        m,
                        {
                          class: H([
                            "vp-doc",
                            [
                              r.value,
                              c(e).externalLinkIcon &&
                                "external-link-icon-enabled",
                            ],
                          ]),
                        },
                        null,
                        8,
                        ["class"],
                      ),
                    ]),
                    L(Fs, null, {
                      "doc-footer-before": v(() => [
                        h(i.$slots, "doc-footer-before", {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    h(i.$slots, "doc-after", {}, void 0, !0),
                  ]),
                ]),
              ]),
              h(i.$slots, "doc-bottom", {}, void 0, !0),
            ],
            2,
          )
        );
      };
    },
  }),
  qs = S(zs, [["__scopeId", "data-v-7011f0d8"]]),
  Ks = y({
    __name: "VPButton",
    props: {
      tag: {},
      size: { default: "medium" },
      theme: { default: "brand" },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(t) {
      const e = t,
        n = b(() => e.href && Ot.test(e.href)),
        s = b(() => e.tag || (e.href ? "a" : "button"));
      return (o, a) => (
        l(),
        M(
          oe(s.value),
          {
            class: H(["VPButton", [t.size, t.theme]]),
            href: t.href ? c(ft)(t.href) : void 0,
            target: e.target ?? (n.value ? "_blank" : void 0),
            rel: e.rel ?? (n.value ? "noreferrer" : void 0),
          },
          {
            default: v(() => [
              h(o.$slots, "default", {}, () => [ce(T(t.text), 1)], !0),
            ]),
            _: 3,
          },
          8,
          ["class", "href", "target", "rel"],
        )
      );
    },
  }),
  Zs = S(Ks, [["__scopeId", "data-v-01bff58b"]]),
  Js = ["src", "alt"],
  Qs = y({
    inheritAttrs: !1,
    __name: "VPImage",
    props: { image: {}, alt: {} },
    setup(t) {
      return (e, n) => {
        const s = me("VPImage", !0);
        return t.image
          ? (l(),
            f(
              R,
              { key: 0 },
              [
                typeof t.image == "string" || "src" in t.image
                  ? (l(),
                    f(
                      "img",
                      le(
                        { key: 0, class: "VPImage" },
                        typeof t.image == "string"
                          ? e.$attrs
                          : { ...t.image, ...e.$attrs },
                        {
                          src: c(je)(
                            typeof t.image == "string" ? t.image : t.image.src,
                          ),
                          alt:
                            t.alt ??
                            (typeof t.image == "string"
                              ? ""
                              : t.image.alt || ""),
                        },
                      ),
                      null,
                      16,
                      Js,
                    ))
                  : (l(),
                    f(
                      R,
                      { key: 1 },
                      [
                        L(
                          s,
                          le(
                            {
                              class: "dark",
                              image: t.image.dark,
                              alt: t.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                        L(
                          s,
                          le(
                            {
                              class: "light",
                              image: t.image.light,
                              alt: t.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ["image", "alt"],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : $("", !0);
      };
    },
  }),
  Fe = S(Qs, [["__scopeId", "data-v-8426fc1a"]]),
  Ys = { class: "container" },
  Xs = { class: "main" },
  eo = { class: "heading" },
  to = ["innerHTML"],
  no = ["innerHTML"],
  so = ["innerHTML"],
  oo = { key: 0, class: "actions" },
  ao = { key: 0, class: "image" },
  ro = { class: "image-container" },
  io = y({
    __name: "VPHero",
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(t) {
      const { heroImageSlotExists: e } = We(Ut, {
        heroImageSlotExists: b(() => !1),
      });
      return (n, s) => (
        l(),
        f(
          "div",
          { class: H(["VPHero", { "has-image": t.image || c(e) }]) },
          [
            d("div", Ys, [
              d("div", Xs, [
                h(n.$slots, "home-hero-info-before", {}, void 0, !0),
                h(
                  n.$slots,
                  "home-hero-info",
                  {},
                  () => [
                    d("h1", eo, [
                      t.name
                        ? (l(),
                          f(
                            "span",
                            { key: 0, innerHTML: t.name, class: "name clip" },
                            null,
                            8,
                            to,
                          ))
                        : $("", !0),
                      t.text
                        ? (l(),
                          f(
                            "span",
                            { key: 1, innerHTML: t.text, class: "text" },
                            null,
                            8,
                            no,
                          ))
                        : $("", !0),
                    ]),
                    t.tagline
                      ? (l(),
                        f(
                          "p",
                          { key: 0, innerHTML: t.tagline, class: "tagline" },
                          null,
                          8,
                          so,
                        ))
                      : $("", !0),
                  ],
                  !0,
                ),
                h(n.$slots, "home-hero-info-after", {}, void 0, !0),
                t.actions
                  ? (l(),
                    f("div", oo, [
                      h(
                        n.$slots,
                        "home-hero-actions-before-actions",
                        {},
                        void 0,
                        !0,
                      ),
                      (l(!0),
                      f(
                        R,
                        null,
                        z(
                          t.actions,
                          (o) => (
                            l(),
                            f("div", { key: o.link, class: "action" }, [
                              L(
                                Zs,
                                {
                                  tag: "a",
                                  size: "medium",
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                  target: o.target,
                                  rel: o.rel,
                                },
                                null,
                                8,
                                ["theme", "text", "href", "target", "rel"],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : $("", !0),
                h(n.$slots, "home-hero-actions-after", {}, void 0, !0),
              ]),
              t.image || c(e)
                ? (l(),
                  f("div", ao, [
                    d("div", ro, [
                      s[0] ||
                        (s[0] = d("div", { class: "image-bg" }, null, -1)),
                      h(
                        n.$slots,
                        "home-hero-image",
                        {},
                        () => [
                          t.image
                            ? (l(),
                              M(
                                Fe,
                                { key: 0, class: "image-src", image: t.image },
                                null,
                                8,
                                ["image"],
                              ))
                            : $("", !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : $("", !0),
            ]),
          ],
          2,
        )
      );
    },
  }),
  lo = S(io, [["__scopeId", "data-v-e62e4946"]]),
  co = y({
    __name: "VPHomeHero",
    setup(t) {
      const { frontmatter: e } = N();
      return (n, s) =>
        c(e).hero
          ? (l(),
            M(
              lo,
              {
                key: 0,
                class: "VPHomeHero",
                name: c(e).hero.name,
                text: c(e).hero.text,
                tagline: c(e).hero.tagline,
                image: c(e).hero.image,
                actions: c(e).hero.actions,
              },
              {
                "home-hero-info-before": v(() => [
                  h(n.$slots, "home-hero-info-before"),
                ]),
                "home-hero-info": v(() => [h(n.$slots, "home-hero-info")]),
                "home-hero-info-after": v(() => [
                  h(n.$slots, "home-hero-info-after"),
                ]),
                "home-hero-actions-after": v(() => [
                  h(n.$slots, "home-hero-actions-after"),
                ]),
                "home-hero-actions-before-actions": v(() => [
                  h(n.$slots, "home-hero-actions-before-actions"),
                ]),
                "home-hero-image": v(() => [h(n.$slots, "home-hero-image")]),
                _: 3,
              },
              8,
              ["name", "text", "tagline", "image", "actions"],
            ))
          : $("", !0);
    },
  }),
  uo = { class: "box" },
  ho = { key: 0, class: "icon" },
  fo = ["innerHTML"],
  vo = ["innerHTML"],
  mo = { key: 3, class: "details" },
  po = ["innerHTML"],
  go = ["innerHTML"],
  ko = { key: 5, class: "link-text" },
  yo = { class: "link-text-value" },
  bo = y({
    __name: "VPFeature",
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(t) {
      return (e, n) => (
        l(),
        M(
          ae,
          {
            class: "VPFeature",
            href: t.link,
            rel: t.rel,
            target: t.target,
            "no-icon": !0,
            tag: t.link ? "a" : "div",
          },
          {
            default: v(() => [
              d("article", uo, [
                typeof t.icon == "object" && t.icon.wrap
                  ? (l(),
                    f("div", ho, [
                      L(
                        Fe,
                        {
                          image: t.icon,
                          alt: t.icon.alt,
                          height: t.icon.height || 48,
                          width: t.icon.width || 48,
                        },
                        null,
                        8,
                        ["image", "alt", "height", "width"],
                      ),
                    ]))
                  : typeof t.icon == "object"
                    ? (l(),
                      M(
                        Fe,
                        {
                          key: 1,
                          image: t.icon,
                          alt: t.icon.alt,
                          height: t.icon.height || 48,
                          width: t.icon.width || 48,
                        },
                        null,
                        8,
                        ["image", "alt", "height", "width"],
                      ))
                    : t.icon
                      ? (l(),
                        f(
                          "div",
                          { key: 2, class: "icon", innerHTML: t.icon },
                          null,
                          8,
                          fo,
                        ))
                      : $("", !0),
                d("h2", { class: "title", innerHTML: t.title }, null, 8, vo),
                Array.isArray(t.details)
                  ? (l(),
                    f("ul", mo, [
                      (l(!0),
                      f(
                        R,
                        null,
                        z(
                          t.details,
                          (s) => (
                            l(),
                            f("li", { key: s, innerHTML: s }, null, 8, po)
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : t.details
                    ? (l(),
                      f(
                        "p",
                        { key: 4, class: "details", innerHTML: t.details },
                        null,
                        8,
                        go,
                      ))
                    : $("", !0),
                t.linkText
                  ? (l(),
                    f("div", ko, [
                      d("p", yo, [
                        ce(T(t.linkText) + " ", 1),
                        n[0] ||
                          (n[0] = d(
                            "span",
                            { class: "vpi-arrow-right link-text-icon" },
                            null,
                            -1,
                          )),
                      ]),
                    ]))
                  : $("", !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ["href", "rel", "target", "tag"],
        )
      );
    },
  }),
  _o = S(bo, [["__scopeId", "data-v-e5511d04"]]),
  $o = { key: 0, class: "VPFeatures" },
  Lo = { class: "container" },
  wo = { class: "items" },
  Mo = y({
    __name: "VPFeatures",
    props: { features: {} },
    setup(t) {
      const e = t,
        n = b(() => {
          const s = e.features.length;
          if (s) {
            if (s === 2) return "grid-2";
            if (s === 3) return "grid-3";
            if (s % 3 === 0) return "grid-6";
            if (s > 3) return "grid-4";
          } else return;
        });
      return (s, o) =>
        t.features
          ? (l(),
            f("div", $o, [
              d("div", Lo, [
                d("div", wo, [
                  (l(!0),
                  f(
                    R,
                    null,
                    z(
                      t.features,
                      (a) => (
                        l(),
                        f(
                          "div",
                          { key: a.title, class: H(["item", [n.value]]) },
                          [
                            L(
                              _o,
                              {
                                icon: a.icon,
                                title: a.title,
                                details: a.details,
                                link: a.link,
                                "link-text": a.linkText,
                                rel: a.rel,
                                target: a.target,
                              },
                              null,
                              8,
                              [
                                "icon",
                                "title",
                                "details",
                                "link",
                                "link-text",
                                "rel",
                                "target",
                              ],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : $("", !0);
    },
  }),
  So = S(Mo, [["__scopeId", "data-v-a6181336"]]),
  Co = y({
    __name: "VPHomeFeatures",
    setup(t) {
      const { frontmatter: e } = N();
      return (n, s) =>
        c(e).features
          ? (l(),
            M(
              So,
              { key: 0, class: "VPHomeFeatures", features: c(e).features },
              null,
              8,
              ["features"],
            ))
          : $("", !0);
    },
  }),
  Po = y({
    __name: "VPHomeContent",
    setup(t) {
      const { width: e } = yn({ initialWidth: 0, includeScrollbar: !1 });
      return (n, s) => (
        l(),
        f(
          "div",
          {
            class: "vp-doc container",
            style: Dt(
              c(e) ? { "--vp-offset": `calc(50% - ${c(e) / 2}px)` } : {},
            ),
          },
          [h(n.$slots, "default", {}, void 0, !0)],
          4,
        )
      );
    },
  }),
  Vo = S(Po, [["__scopeId", "data-v-8e2d4988"]]),
  xo = y({
    __name: "VPHome",
    setup(t) {
      const { frontmatter: e, theme: n } = N();
      return (s, o) => {
        const a = me("Content");
        return (
          l(),
          f(
            "div",
            {
              class: H([
                "VPHome",
                { "external-link-icon-enabled": c(n).externalLinkIcon },
              ]),
            },
            [
              h(s.$slots, "home-hero-before", {}, void 0, !0),
              L(co, null, {
                "home-hero-info-before": v(() => [
                  h(s.$slots, "home-hero-info-before", {}, void 0, !0),
                ]),
                "home-hero-info": v(() => [
                  h(s.$slots, "home-hero-info", {}, void 0, !0),
                ]),
                "home-hero-info-after": v(() => [
                  h(s.$slots, "home-hero-info-after", {}, void 0, !0),
                ]),
                "home-hero-actions-after": v(() => [
                  h(s.$slots, "home-hero-actions-after", {}, void 0, !0),
                ]),
                "home-hero-actions-before-actions": v(() => [
                  h(
                    s.$slots,
                    "home-hero-actions-before-actions",
                    {},
                    void 0,
                    !0,
                  ),
                ]),
                "home-hero-image": v(() => [
                  h(s.$slots, "home-hero-image", {}, void 0, !0),
                ]),
                _: 3,
              }),
              h(s.$slots, "home-hero-after", {}, void 0, !0),
              h(s.$slots, "home-features-before", {}, void 0, !0),
              L(Co),
              h(s.$slots, "home-features-after", {}, void 0, !0),
              c(e).markdownStyles !== !1
                ? (l(), M(Vo, { key: 0 }, { default: v(() => [L(a)]), _: 1 }))
                : (l(), M(a, { key: 1 })),
            ],
            2,
          )
        );
      };
    },
  }),
  Io = S(xo, [["__scopeId", "data-v-bb6342a6"]]),
  Ao = {},
  No = { class: "VPPage" };
function To(t, e) {
  const n = me("Content");
  return (
    l(),
    f("div", No, [h(t.$slots, "page-top"), L(n), h(t.$slots, "page-bottom")])
  );
}
const Eo = S(Ao, [["render", To]]),
  Ho = y({
    __name: "VPContent",
    setup(t) {
      const { page: e, frontmatter: n } = N(),
        { isHome: s, hasSidebar: o } = fe();
      return (a, r) => (
        l(),
        f(
          "div",
          {
            class: H(["VPContent", { "has-sidebar": c(o), "is-home": c(s) }]),
            id: "VPContent",
          },
          [
            c(e).isNotFound
              ? h(a.$slots, "not-found", { key: 0 }, () => [L(Kn)], !0)
              : c(n).layout === "page"
                ? (l(),
                  M(
                    Eo,
                    { key: 1 },
                    {
                      "page-top": v(() => [
                        h(a.$slots, "page-top", {}, void 0, !0),
                      ]),
                      "page-bottom": v(() => [
                        h(a.$slots, "page-bottom", {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                  ))
                : c(n).layout === "home"
                  ? (l(),
                    M(
                      Io,
                      { key: 2 },
                      {
                        "home-hero-before": v(() => [
                          h(a.$slots, "home-hero-before", {}, void 0, !0),
                        ]),
                        "home-hero-info-before": v(() => [
                          h(a.$slots, "home-hero-info-before", {}, void 0, !0),
                        ]),
                        "home-hero-info": v(() => [
                          h(a.$slots, "home-hero-info", {}, void 0, !0),
                        ]),
                        "home-hero-info-after": v(() => [
                          h(a.$slots, "home-hero-info-after", {}, void 0, !0),
                        ]),
                        "home-hero-actions-after": v(() => [
                          h(
                            a.$slots,
                            "home-hero-actions-after",
                            {},
                            void 0,
                            !0,
                          ),
                        ]),
                        "home-hero-actions-before-actions": v(() => [
                          h(
                            a.$slots,
                            "home-hero-actions-before-actions",
                            {},
                            void 0,
                            !0,
                          ),
                        ]),
                        "home-hero-image": v(() => [
                          h(a.$slots, "home-hero-image", {}, void 0, !0),
                        ]),
                        "home-hero-after": v(() => [
                          h(a.$slots, "home-hero-after", {}, void 0, !0),
                        ]),
                        "home-features-before": v(() => [
                          h(a.$slots, "home-features-before", {}, void 0, !0),
                        ]),
                        "home-features-after": v(() => [
                          h(a.$slots, "home-features-after", {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ))
                  : c(n).layout && c(n).layout !== "doc"
                    ? (l(), M(oe(c(n).layout), { key: 3 }))
                    : (l(),
                      M(
                        qs,
                        { key: 4 },
                        {
                          "doc-top": v(() => [
                            h(a.$slots, "doc-top", {}, void 0, !0),
                          ]),
                          "doc-bottom": v(() => [
                            h(a.$slots, "doc-bottom", {}, void 0, !0),
                          ]),
                          "doc-footer-before": v(() => [
                            h(a.$slots, "doc-footer-before", {}, void 0, !0),
                          ]),
                          "doc-before": v(() => [
                            h(a.$slots, "doc-before", {}, void 0, !0),
                          ]),
                          "doc-after": v(() => [
                            h(a.$slots, "doc-after", {}, void 0, !0),
                          ]),
                          "aside-top": v(() => [
                            h(a.$slots, "aside-top", {}, void 0, !0),
                          ]),
                          "aside-outline-before": v(() => [
                            h(a.$slots, "aside-outline-before", {}, void 0, !0),
                          ]),
                          "aside-outline-after": v(() => [
                            h(a.$slots, "aside-outline-after", {}, void 0, !0),
                          ]),
                          "aside-ads-before": v(() => [
                            h(a.$slots, "aside-ads-before", {}, void 0, !0),
                          ]),
                          "aside-ads-after": v(() => [
                            h(a.$slots, "aside-ads-after", {}, void 0, !0),
                          ]),
                          "aside-bottom": v(() => [
                            h(a.$slots, "aside-bottom", {}, void 0, !0),
                          ]),
                          _: 3,
                        },
                      )),
          ],
          2,
        )
      );
    },
  }),
  Oo = S(Ho, [["__scopeId", "data-v-9dc86fcc"]]),
  Do = { class: "container" },
  Fo = ["innerHTML"],
  Bo = ["innerHTML"],
  Ro = y({
    __name: "VPFooter",
    setup(t) {
      const { theme: e, frontmatter: n } = N(),
        { hasSidebar: s } = fe();
      return (o, a) =>
        c(e).footer && c(n).footer !== !1
          ? (l(),
            f(
              "footer",
              { key: 0, class: H(["VPFooter", { "has-sidebar": c(s) }]) },
              [
                d("div", Do, [
                  c(e).footer.message
                    ? (l(),
                      f(
                        "p",
                        {
                          key: 0,
                          class: "message",
                          innerHTML: c(e).footer.message,
                        },
                        null,
                        8,
                        Fo,
                      ))
                    : $("", !0),
                  c(e).footer.copyright
                    ? (l(),
                      f(
                        "p",
                        {
                          key: 1,
                          class: "copyright",
                          innerHTML: c(e).footer.copyright,
                        },
                        null,
                        8,
                        Bo,
                      ))
                    : $("", !0),
                ]),
              ],
              2,
            ))
          : $("", !0);
    },
  }),
  jo = S(Ro, [["__scopeId", "data-v-c3855bb3"]]),
  Go = { class: "menu-text" },
  Wo = { class: "header" },
  Uo = { class: "outline" },
  zo = y({
    __name: "VPLocalNavOutlineDropdown",
    props: { headers: {}, navHeight: {} },
    setup(t) {
      const e = t,
        { theme: n } = N(),
        s = A(!1),
        o = A(0),
        a = A(),
        r = A();
      function i(g) {
        a.value?.contains(g.target) || (s.value = !1);
      }
      (j(s, (g) => {
        if (g) {
          document.addEventListener("click", i);
          return;
        }
        document.removeEventListener("click", i);
      }),
        bn("Escape", () => {
          s.value = !1;
        }),
        Ht(() => {
          s.value = !1;
        }));
      function u() {
        ((s.value = !s.value),
          (o.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0)));
      }
      function m(g) {
        g.target.classList.contains("outline-link") &&
          (r.value && (r.value.style.transition = "none"),
          ne(() => {
            s.value = !1;
          }));
      }
      function p() {
        ((s.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" }));
      }
      return (g, _) => (
        l(),
        f(
          "div",
          {
            class: "VPLocalNavOutlineDropdown",
            style: Dt({ "--vp-vh": o.value + "px" }),
            ref_key: "main",
            ref: a,
          },
          [
            t.headers.length > 0
              ? (l(),
                f(
                  "button",
                  { key: 0, onClick: u, class: H({ open: s.value }) },
                  [
                    d("span", Go, T(c(Wt)(c(n))), 1),
                    _[0] ||
                      (_[0] = d(
                        "span",
                        { class: "vpi-chevron-right icon" },
                        null,
                        -1,
                      )),
                  ],
                  2,
                ))
              : (l(),
                f(
                  "button",
                  { key: 1, onClick: p },
                  T(c(n).returnToTopLabel || "Return to top"),
                  1,
                )),
            L(
              Re,
              { name: "flyout" },
              {
                default: v(() => [
                  s.value
                    ? (l(),
                      f(
                        "div",
                        {
                          key: 0,
                          ref_key: "items",
                          ref: r,
                          class: "items",
                          onClick: m,
                        },
                        [
                          d("div", Wo, [
                            d(
                              "a",
                              { class: "top-link", href: "#", onClick: p },
                              T(c(n).returnToTopLabel || "Return to top"),
                              1,
                            ),
                          ]),
                          d("div", Uo, [
                            L(zt, { headers: t.headers }, null, 8, ["headers"]),
                          ]),
                        ],
                        512,
                      ))
                    : $("", !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      );
    },
  }),
  qo = S(zo, [["__scopeId", "data-v-0bf0e06f"]]),
  Ko = { class: "container" },
  Zo = ["aria-expanded"],
  Jo = { class: "menu-text" },
  Qo = y({
    __name: "VPLocalNav",
    props: { open: { type: Boolean } },
    emits: ["open-menu"],
    setup(t) {
      const { theme: e } = N(),
        { isHome: n, hasSidebar: s, headers: o, hasLocalNav: a } = fe(),
        { y: r } = Ft(),
        i = A(0);
      he(() => {
        i.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--vp-nav-height",
          ),
        );
      });
      const u = b(() => ({
        VPLocalNav: !0,
        "has-sidebar": s.value,
        empty: !a.value,
        fixed: !a.value && !s.value,
      }));
      return (m, p) =>
        !c(n) && (c(a) || c(s) || c(r) >= i.value)
          ? (l(),
            f(
              "div",
              { key: 0, class: H(u.value) },
              [
                d("div", Ko, [
                  c(s)
                    ? (l(),
                      f(
                        "button",
                        {
                          key: 0,
                          class: "menu",
                          "aria-expanded": t.open,
                          "aria-controls": "VPSidebarNav",
                          onClick: p[0] || (p[0] = (g) => m.$emit("open-menu")),
                        },
                        [
                          p[1] ||
                            (p[1] = d(
                              "span",
                              { class: "vpi-align-left menu-icon" },
                              null,
                              -1,
                            )),
                          d("span", Jo, T(c(e).sidebarMenuLabel || "Menu"), 1),
                        ],
                        8,
                        Zo,
                      ))
                    : $("", !0),
                  L(qo, { headers: c(o), navHeight: i.value }, null, 8, [
                    "headers",
                    "navHeight",
                  ]),
                ]),
              ],
              2,
            ))
          : $("", !0);
    },
  }),
  Yo = S(Qo, [["__scopeId", "data-v-db738f89"]]);
function Xo() {
  const t = A(!1);
  function e() {
    ((t.value = !0), window.addEventListener("resize", o));
  }
  function n() {
    ((t.value = !1), window.removeEventListener("resize", o));
  }
  function s() {
    t.value ? n() : e();
  }
  function o() {
    window.outerWidth >= 768 && n();
  }
  const a = Ve();
  return (
    j(() => a.path, n),
    { isScreenOpen: t, openScreen: e, closeScreen: n, toggleScreen: s }
  );
}
const vt = Symbol("nav"),
  ea = {},
  ta = { class: "VPSwitch", type: "button", role: "switch" },
  na = { class: "check" },
  sa = { key: 0, class: "icon" };
function oa(t, e) {
  return (
    l(),
    f("button", ta, [
      d("span", na, [
        t.$slots.default
          ? (l(), f("span", sa, [h(t.$slots, "default", {}, void 0, !0)]))
          : $("", !0),
      ]),
    ])
  );
}
const aa = S(ea, [
    ["render", oa],
    ["__scopeId", "data-v-1d5665e3"],
  ]),
  ra = y({
    __name: "VPSwitchAppearance",
    setup(t) {
      const { isDark: e, theme: n } = N(),
        s = We("toggle-appearance", () => {
          e.value = !e.value;
        }),
        o = A("");
      return (
        Et(() => {
          o.value = e.value
            ? n.value.lightModeSwitchTitle || "Switch to light theme"
            : n.value.darkModeSwitchTitle || "Switch to dark theme";
        }),
        (a, r) => (
          l(),
          M(
            aa,
            {
              title: o.value,
              class: "VPSwitchAppearance",
              "aria-checked": c(e),
              onClick: c(s),
            },
            {
              default: v(() => [
                ...(r[0] ||
                  (r[0] = [
                    d("span", { class: "vpi-sun sun" }, null, -1),
                    d("span", { class: "vpi-moon moon" }, null, -1),
                  ])),
              ]),
              _: 1,
            },
            8,
            ["title", "aria-checked", "onClick"],
          )
        )
      );
    },
  }),
  mt = S(ra, [["__scopeId", "data-v-5337faa4"]]),
  ia = { key: 0, class: "VPNavBarAppearance" },
  la = y({
    __name: "VPNavBarAppearance",
    setup(t) {
      const { site: e } = N();
      return (n, s) =>
        c(e).appearance &&
        c(e).appearance !== "force-dark" &&
        c(e).appearance !== "force-auto"
          ? (l(), f("div", ia, [L(mt)]))
          : $("", !0);
    },
  }),
  ca = S(la, [["__scopeId", "data-v-6c893767"]]),
  pt = A();
let qt = !1,
  Ze = 0;
function ua(t) {
  const e = A(!1);
  if (Pe) {
    (!qt && da(), Ze++);
    const n = j(pt, (s) => {
      s === t.el.value || t.el.value?.contains(s)
        ? ((e.value = !0), t.onFocus?.())
        : ((e.value = !1), t.onBlur?.());
    });
    dt(() => {
      (n(), Ze--, Ze || ha());
    });
  }
  return _n(e);
}
function da() {
  (document.addEventListener("focusin", Kt),
    (qt = !0),
    (pt.value = document.activeElement));
}
function ha() {
  document.removeEventListener("focusin", Kt);
}
function Kt() {
  pt.value = document.activeElement;
}
const fa = { class: "VPMenuLink" },
  va = ["innerHTML"],
  ma = y({
    inheritAttrs: !1,
    __name: "VPMenuLink",
    props: { item: {}, rel: {} },
    setup(t) {
      const e = t,
        { page: n } = N(),
        s = b(() =>
          typeof e.item.link == "function" ? e.item.link(n.value) : e.item.link,
        ),
        o = b(() =>
          ue(
            n.value.relativePath,
            e.item.activeMatch || s.value,
            !!e.item.activeMatch,
          ),
        );
      return (a, r) => (
        l(),
        f("div", fa, [
          L(
            ae,
            le(a.$attrs, {
              class: { active: o.value },
              href: s.value,
              target: t.item.target,
              rel: e.rel ?? t.item.rel,
              "no-icon": t.item.noIcon,
            }),
            {
              default: v(() => [
                d("span", { innerHTML: t.item.text }, null, 8, va),
              ]),
              _: 1,
            },
            16,
            ["class", "href", "target", "rel", "no-icon"],
          ),
        ])
      );
    },
  }),
  ze = S(ma, [["__scopeId", "data-v-867c295f"]]),
  pa = { class: "VPMenuGroup" },
  ga = { key: 0, class: "title" },
  ka = y({
    __name: "VPMenuGroup",
    props: { text: {}, items: {} },
    setup(t) {
      return (e, n) => (
        l(),
        f("div", pa, [
          t.text ? (l(), f("p", ga, T(t.text), 1)) : $("", !0),
          (l(!0),
          f(
            R,
            null,
            z(
              t.items,
              (s) => (
                l(),
                f(
                  R,
                  { key: JSON.stringify(s) },
                  [
                    "link" in s
                      ? (l(), M(ze, { key: 0, item: s }, null, 8, ["item"]))
                      : $("", !0),
                  ],
                  64,
                )
              ),
            ),
            128,
          )),
        ])
      );
    },
  }),
  ya = S(ka, [["__scopeId", "data-v-1963e1bb"]]),
  ba = { class: "VPMenu" },
  _a = { key: 0, class: "items" },
  $a = y({
    __name: "VPMenu",
    props: { items: {} },
    setup(t) {
      return (e, n) => (
        l(),
        f("div", ba, [
          t.items
            ? (l(),
              f("div", _a, [
                (l(!0),
                f(
                  R,
                  null,
                  z(
                    t.items,
                    (s) => (
                      l(),
                      f(
                        R,
                        { key: JSON.stringify(s) },
                        [
                          "link" in s
                            ? (l(),
                              M(ze, { key: 0, item: s }, null, 8, ["item"]))
                            : "component" in s
                              ? (l(),
                                M(
                                  oe(s.component),
                                  le({ key: 1, ref_for: !0 }, s.props),
                                  null,
                                  16,
                                ))
                              : (l(),
                                M(
                                  ya,
                                  { key: 2, text: s.text, items: s.items },
                                  null,
                                  8,
                                  ["text", "items"],
                                )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : $("", !0),
          h(e.$slots, "default", {}, void 0, !0),
        ])
      );
    },
  }),
  La = S($a, [["__scopeId", "data-v-25a6cce8"]]),
  wa = ["aria-expanded", "aria-label"],
  Ma = { key: 0, class: "text" },
  Sa = ["innerHTML"],
  Ca = { key: 1, class: "vpi-more-horizontal icon" },
  Pa = { class: "menu" },
  Va = y({
    __name: "VPFlyout",
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(t) {
      const e = A(!1),
        n = A();
      ua({ el: n, onBlur: s });
      function s() {
        e.value = !1;
      }
      return (o, a) => (
        l(),
        f(
          "div",
          {
            class: "VPFlyout",
            ref_key: "el",
            ref: n,
            onMouseenter: a[1] || (a[1] = (r) => (e.value = !0)),
            onMouseleave: a[2] || (a[2] = (r) => (e.value = !1)),
          },
          [
            d(
              "button",
              {
                type: "button",
                class: "button",
                "aria-haspopup": "true",
                "aria-expanded": e.value,
                "aria-label": t.label,
                onClick: a[0] || (a[0] = (r) => (e.value = !e.value)),
              },
              [
                t.button || t.icon
                  ? (l(),
                    f("span", Ma, [
                      t.icon
                        ? (l(),
                          f(
                            "span",
                            { key: 0, class: H([t.icon, "option-icon"]) },
                            null,
                            2,
                          ))
                        : $("", !0),
                      t.button
                        ? (l(),
                          f(
                            "span",
                            { key: 1, innerHTML: t.button },
                            null,
                            8,
                            Sa,
                          ))
                        : $("", !0),
                      a[3] ||
                        (a[3] = d(
                          "span",
                          { class: "vpi-chevron-down text-icon" },
                          null,
                          -1,
                        )),
                    ]))
                  : (l(), f("span", Ca)),
              ],
              8,
              wa,
            ),
            d("div", Pa, [
              L(
                La,
                { items: t.items },
                {
                  default: v(() => [h(o.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["items"],
              ),
            ]),
          ],
          544,
        )
      );
    },
  }),
  gt = S(Va, [["__scopeId", "data-v-42cb505d"]]),
  xa = ["href", "aria-label", "rel", "innerHTML"],
  Ia = y({
    __name: "VPSocialLink",
    props: { icon: {}, link: {}, ariaLabel: {}, me: { type: Boolean } },
    setup(t) {
      const e = t,
        n = A();
      he(async () => {
        await ne();
        const o = n.value?.children[0];
        o instanceof HTMLElement &&
          o.className.startsWith("vpi-social-") &&
          (getComputedStyle(o).maskImage ||
            getComputedStyle(o).webkitMaskImage) === "none" &&
          o.style.setProperty(
            "--icon",
            `url('https://api.iconify.design/simple-icons/${e.icon}.svg')`,
          );
      });
      const s = b(() =>
        typeof e.icon == "object"
          ? e.icon.svg
          : `<span class="vpi-social-${e.icon}"></span>`,
      );
      return (o, a) => (
        l(),
        f(
          "a",
          {
            ref_key: "el",
            ref: n,
            class: "VPSocialLink no-icon",
            href: t.link,
            "aria-label":
              t.ariaLabel ?? (typeof t.icon == "string" ? t.icon : ""),
            target: "_blank",
            rel: t.me ? "me noopener" : "noopener",
            innerHTML: s.value,
          },
          null,
          8,
          xa,
        )
      );
    },
  }),
  Aa = S(Ia, [["__scopeId", "data-v-591a6b30"]]),
  Na = { class: "VPSocialLinks" },
  Ta = y({
    __name: "VPSocialLinks",
    props: { links: {}, me: { type: Boolean, default: !0 } },
    setup(t) {
      return (e, n) => (
        l(),
        f("div", Na, [
          (l(!0),
          f(
            R,
            null,
            z(
              t.links,
              ({ link: s, icon: o, ariaLabel: a }) => (
                l(),
                M(
                  Aa,
                  { key: s, icon: o, link: s, ariaLabel: a, me: t.me },
                  null,
                  8,
                  ["icon", "link", "ariaLabel", "me"],
                )
              ),
            ),
            128,
          )),
        ])
      );
    },
  }),
  kt = S(Ta, [["__scopeId", "data-v-d07f11e6"]]),
  Ea = { key: 0, class: "group translations" },
  Ha = { class: "trans-title" },
  Oa = { key: 1, class: "group" },
  Da = { class: "item appearance" },
  Fa = { class: "label" },
  Ba = { class: "appearance-action" },
  Ra = { key: 2, class: "group" },
  ja = { class: "item social-links" },
  Ga = y({
    __name: "VPNavBarExtra",
    setup(t) {
      const { site: e, theme: n } = N(),
        { localeLinks: s, currentLang: o } = xe({ correspondingLink: !0 }),
        a = b(
          () =>
            (s.value.length && o.value.label) ||
            e.value.appearance ||
            n.value.socialLinks,
        );
      return (r, i) =>
        a.value
          ? (l(),
            M(
              gt,
              { key: 0, class: "VPNavBarExtra", label: "extra navigation" },
              {
                default: v(() => [
                  c(s).length && c(o).label
                    ? (l(),
                      f("div", Ea, [
                        d("p", Ha, T(c(o).label), 1),
                        (l(!0),
                        f(
                          R,
                          null,
                          z(
                            c(s),
                            (u) => (
                              l(),
                              M(
                                ze,
                                {
                                  key: u.link,
                                  item: u,
                                  lang: u.lang,
                                  hreflang: u.lang,
                                  rel: "alternate",
                                  dir: u.dir,
                                },
                                null,
                                8,
                                ["item", "lang", "hreflang", "dir"],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : $("", !0),
                  c(e).appearance &&
                  c(e).appearance !== "force-dark" &&
                  c(e).appearance !== "force-auto"
                    ? (l(),
                      f("div", Oa, [
                        d("div", Da, [
                          d(
                            "p",
                            Fa,
                            T(c(n).darkModeSwitchLabel || "Appearance"),
                            1,
                          ),
                          d("div", Ba, [L(mt)]),
                        ]),
                      ]))
                    : $("", !0),
                  c(n).socialLinks
                    ? (l(),
                      f("div", Ra, [
                        d("div", ja, [
                          L(
                            kt,
                            {
                              class: "social-links-list",
                              links: c(n).socialLinks,
                            },
                            null,
                            8,
                            ["links"],
                          ),
                        ]),
                      ]))
                    : $("", !0),
                ]),
                _: 1,
              },
            ))
          : $("", !0);
    },
  }),
  Wa = S(Ga, [["__scopeId", "data-v-562c832a"]]),
  Ua = ["aria-expanded"],
  za = y({
    __name: "VPNavBarHamburger",
    props: { active: { type: Boolean } },
    emits: ["click"],
    setup(t) {
      return (e, n) => (
        l(),
        f(
          "button",
          {
            type: "button",
            class: H(["VPNavBarHamburger", { active: t.active }]),
            "aria-label": "mobile navigation",
            "aria-expanded": t.active,
            "aria-controls": "VPNavScreen",
            onClick: n[0] || (n[0] = (s) => e.$emit("click")),
          },
          [
            ...(n[1] ||
              (n[1] = [
                d(
                  "span",
                  { class: "container" },
                  [
                    d("span", { class: "top" }),
                    d("span", { class: "middle" }),
                    d("span", { class: "bottom" }),
                  ],
                  -1,
                ),
              ])),
          ],
          10,
          Ua,
        )
      );
    },
  }),
  qa = S(za, [["__scopeId", "data-v-e5dd9c1c"]]),
  Ka = ["innerHTML"],
  Za = y({
    __name: "VPNavBarMenuLink",
    props: { item: {} },
    setup(t) {
      const e = t,
        { page: n } = N(),
        s = b(() =>
          typeof e.item.link == "function" ? e.item.link(n.value) : e.item.link,
        ),
        o = b(() =>
          ue(
            n.value.relativePath,
            e.item.activeMatch || s.value,
            !!e.item.activeMatch,
          ),
        );
      return (a, r) => (
        l(),
        M(
          ae,
          {
            class: H({ VPNavBarMenuLink: !0, active: o.value }),
            href: s.value,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            tabindex: "0",
          },
          {
            default: v(() => [
              d("span", { innerHTML: t.item.text }, null, 8, Ka),
            ]),
            _: 1,
          },
          8,
          ["class", "href", "target", "rel", "no-icon"],
        )
      );
    },
  }),
  Ja = S(Za, [["__scopeId", "data-v-6dd25bb8"]]),
  Qa = y({
    __name: "VPNavBarMenuGroup",
    props: { item: {} },
    setup(t) {
      const e = t,
        { page: n } = N(),
        s = b(() =>
          e.item.activeMatch
            ? ue(n.value.relativePath, e.item.activeMatch, !0)
            : o(e.item),
        );
      function o(a) {
        if ("component" in a) return !1;
        if ("link" in a) {
          const r = typeof a.link == "function" ? a.link(n.value) : a.link;
          return ue(n.value.relativePath, a.activeMatch || r, !!a.activeMatch);
        }
        return a.items.some(o);
      }
      return (a, r) => (
        l(),
        M(
          gt,
          {
            class: H({ VPNavBarMenuGroup: !0, active: s.value }),
            button: t.item.text,
            items: t.item.items,
          },
          null,
          8,
          ["class", "button", "items"],
        )
      );
    },
  }),
  Ya = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu",
  },
  Xa = y({
    __name: "VPNavBarMenu",
    setup(t) {
      const { theme: e } = N();
      return (n, s) =>
        c(e).nav
          ? (l(),
            f("nav", Ya, [
              s[0] ||
                (s[0] = d(
                  "span",
                  { id: "main-nav-aria-label", class: "visually-hidden" },
                  " Main Navigation ",
                  -1,
                )),
              (l(!0),
              f(
                R,
                null,
                z(
                  c(e).nav,
                  (o) => (
                    l(),
                    f(
                      R,
                      { key: JSON.stringify(o) },
                      [
                        "link" in o
                          ? (l(), M(Ja, { key: 0, item: o }, null, 8, ["item"]))
                          : "component" in o
                            ? (l(),
                              M(
                                oe(o.component),
                                le({ key: 1, ref_for: !0 }, o.props),
                                null,
                                16,
                              ))
                            : (l(),
                              M(Qa, { key: 2, item: o }, null, 8, ["item"])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : $("", !0);
    },
  }),
  er = S(Xa, [["__scopeId", "data-v-39714824"]]);
var $t;
const Zt = typeof window < "u",
  tr = (t) => typeof t == "string",
  Oe = () => {};
Zt &&
  ($t = window?.navigator) != null &&
  $t.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function st(t) {
  return typeof t == "function" ? t() : c(t);
}
function nr(t, e) {
  function n(...s) {
    t(() => e.apply(this, s), { fn: e, thisArg: this, args: s });
  }
  return n;
}
function sr(t, e = {}) {
  let n, s;
  return (o) => {
    const a = st(t),
      r = st(e.maxWait);
    if ((n && clearTimeout(n), a <= 0 || (r !== void 0 && r <= 0)))
      return (s && (clearTimeout(s), (s = null)), o());
    (r &&
      !s &&
      (s = setTimeout(() => {
        (n && clearTimeout(n), (s = null), o());
      }, r)),
      (n = setTimeout(() => {
        (s && clearTimeout(s), (s = null), o());
      }, a)));
  };
}
function or(t) {
  return t;
}
function ar(t) {
  return wn() ? (Mn(t), !0) : !1;
}
function Jt(t, e = 200, n = {}) {
  return nr(sr(e, n), t);
}
function Je(t, e = 200, n = {}) {
  if (e <= 0) return t;
  const s = A(t.value),
    o = Jt(
      () => {
        s.value = t.value;
      },
      e,
      n,
    );
  return (j(t, () => o()), s);
}
function Qt(t, e, n) {
  return j(
    t,
    (s, o, a) => {
      s && e(s, o, a);
    },
    n,
  );
}
function rr(t) {
  var e;
  const n = st(t);
  return (e = n?.$el) != null ? e : n;
}
const Yt = Zt ? window : void 0;
function Ne(...t) {
  let e, n, s, o;
  if ((tr(t[0]) ? (([n, s, o] = t), (e = Yt)) : ([e, n, s, o] = t), !e))
    return Oe;
  let a = Oe;
  const r = j(
      () => rr(e),
      (u) => {
        (a(),
          u &&
            (u.addEventListener(n, s, o),
            (a = () => {
              (u.removeEventListener(n, s, o), (a = Oe));
            })));
      },
      { immediate: !0, flush: "post" },
    ),
    i = () => {
      (r(), a());
    };
  return (ar(i), i);
}
const Lt =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  wt = "__vueuse_ssr_handlers__";
Lt[wt] = Lt[wt] || {};
const ir = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright",
};
function lr(t = {}) {
  const {
      reactive: e = !1,
      target: n = Yt,
      aliasMap: s = ir,
      passive: o = !0,
      onEventFired: a = Oe,
    } = t,
    r = Ye(new Set()),
    i = {
      toJSON() {
        return {};
      },
      current: r,
    },
    u = e ? Ye(i) : i,
    m = new Set(),
    p = new Set();
  function g(w, V) {
    w in u && (e ? (u[w] = V) : (u[w].value = V));
  }
  function _() {
    for (const w of p) g(w, !1);
  }
  function C(w, V) {
    var B, G;
    const E = (B = w.key) == null ? void 0 : B.toLowerCase(),
      q = [(G = w.code) == null ? void 0 : G.toLowerCase(), E].filter(Boolean);
    E && (V ? r.add(E) : r.delete(E));
    for (const Z of q) (p.add(Z), g(Z, V));
    E === "meta" && !V
      ? (m.forEach((Z) => {
          (r.delete(Z), g(Z, !1));
        }),
        m.clear())
      : typeof w.getModifierState == "function" &&
        w.getModifierState("Meta") &&
        V &&
        [...r, ...q].forEach((Z) => m.add(Z));
  }
  (Ne(n, "keydown", (w) => (C(w, !0), a(w)), { passive: o }),
    Ne(n, "keyup", (w) => (C(w, !1), a(w)), { passive: o }),
    Ne("blur", _, { passive: !0 }),
    Ne("focus", _, { passive: !0 }));
  const P = new Proxy(u, {
    get(w, V, B) {
      if (typeof V != "string") return Reflect.get(w, V, B);
      if (((V = V.toLowerCase()), V in s && (V = s[V]), !(V in u)))
        if (/[+_-]/.test(V)) {
          const E = V.split(/[+_-]/g).map((q) => q.trim());
          u[V] = b(() => E.every((q) => c(P[q])));
        } else u[V] = A(!1);
      const G = Reflect.get(w, V, B);
      return e ? c(G) : G;
    },
  });
  return P;
}
var Mt;
(function (t) {
  ((t.UP = "UP"),
    (t.RIGHT = "RIGHT"),
    (t.DOWN = "DOWN"),
    (t.LEFT = "LEFT"),
    (t.NONE = "NONE"));
})(Mt || (Mt = {}));
var cr = Object.defineProperty,
  St = Object.getOwnPropertySymbols,
  ur = Object.prototype.hasOwnProperty,
  dr = Object.prototype.propertyIsEnumerable,
  Ct = (t, e, n) =>
    e in t
      ? cr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  hr = (t, e) => {
    for (var n in e || (e = {})) ur.call(e, n) && Ct(t, n, e[n]);
    if (St) for (var n of St(e)) dr.call(e, n) && Ct(t, n, e[n]);
    return t;
  };
const fr = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
hr({ linear: or }, fr);
function de(t) {
  return Array.isArray ? Array.isArray(t) : tn(t) === "[object Array]";
}
function vr(t) {
  if (typeof t == "string") return t;
  let e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function mr(t) {
  return t == null ? "" : vr(t);
}
function se(t) {
  return typeof t == "string";
}
function Xt(t) {
  return typeof t == "number";
}
function pr(t) {
  return t === !0 || t === !1 || (gr(t) && tn(t) == "[object Boolean]");
}
function en(t) {
  return typeof t == "object";
}
function gr(t) {
  return en(t) && t !== null;
}
function Q(t) {
  return t != null;
}
function Qe(t) {
  return !t.trim().length;
}
function tn(t) {
  return t == null
    ? t === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(t);
}
const kr = "Incorrect 'index' type",
  yr = (t) => `Invalid value for key ${t}`,
  br = (t) => `Pattern length exceeds max of ${t}.`,
  _r = (t) => `Missing ${t} property in key`,
  $r = (t) => `Property 'weight' in key '${t}' must be a positive integer`,
  Pt = Object.prototype.hasOwnProperty;
class Lr {
  constructor(e) {
    ((this._keys = []), (this._keyMap = {}));
    let n = 0;
    (e.forEach((s) => {
      let o = nn(s);
      ((n += o.weight),
        this._keys.push(o),
        (this._keyMap[o.id] = o),
        (n += o.weight));
    }),
      this._keys.forEach((s) => {
        s.weight /= n;
      }));
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function nn(t) {
  let e = null,
    n = null,
    s = null,
    o = 1,
    a = null;
  if (se(t) || de(t)) ((s = t), (e = Vt(t)), (n = ot(t)));
  else {
    if (!Pt.call(t, "name")) throw new Error(_r("name"));
    const r = t.name;
    if (((s = r), Pt.call(t, "weight") && ((o = t.weight), o <= 0)))
      throw new Error($r(r));
    ((e = Vt(r)), (n = ot(r)), (a = t.getFn));
  }
  return { path: e, id: n, weight: o, src: s, getFn: a };
}
function Vt(t) {
  return de(t) ? t : t.split(".");
}
function ot(t) {
  return de(t) ? t.join(".") : t;
}
function wr(t, e) {
  let n = [],
    s = !1;
  const o = (a, r, i) => {
    if (Q(a))
      if (!r[i]) n.push(a);
      else {
        let u = r[i];
        const m = a[u];
        if (!Q(m)) return;
        if (i === r.length - 1 && (se(m) || Xt(m) || pr(m))) n.push(mr(m));
        else if (de(m)) {
          s = !0;
          for (let p = 0, g = m.length; p < g; p += 1) o(m[p], r, i + 1);
        } else r.length && o(m, r, i + 1);
      }
  };
  return (o(t, se(e) ? e.split(".") : e, 0), s ? n : n[0]);
}
const Mr = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  Sr = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (t, e) =>
      t.score === e.score
        ? t.idx < e.idx
          ? -1
          : 1
        : t.score < e.score
          ? -1
          : 1,
  },
  Cr = { location: 0, threshold: 0.6, distance: 100 },
  Pr = {
    useExtendedSearch: !1,
    getFn: wr,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var x = { ...Sr, ...Mr, ...Cr, ...Pr };
const Vr = /[^ ]+/g;
function xr(t = 1, e = 3) {
  const n = new Map(),
    s = Math.pow(10, e);
  return {
    get(o) {
      const a = o.match(Vr).length;
      if (n.has(a)) return n.get(a);
      const r = 1 / Math.pow(a, 0.5 * t),
        i = parseFloat(Math.round(r * s) / s);
      return (n.set(a, i), i);
    },
    clear() {
      n.clear();
    },
  };
}
class yt {
  constructor({
    getFn: e = x.getFn,
    fieldNormWeight: n = x.fieldNormWeight,
  } = {}) {
    ((this.norm = xr(n, 3)),
      (this.getFn = e),
      (this.isCreated = !1),
      this.setIndexRecords());
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    ((this.keys = e),
      (this._keysMap = {}),
      e.forEach((n, s) => {
        this._keysMap[n.id] = s;
      }));
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      se(this.docs[0])
        ? this.docs.forEach((e, n) => {
            this._addString(e, n);
          })
        : this.docs.forEach((e, n) => {
            this._addObject(e, n);
          }),
      this.norm.clear());
  }
  add(e) {
    const n = this.size();
    se(e) ? this._addString(e, n) : this._addObject(e, n);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let n = e, s = this.size(); n < s; n += 1) this.records[n].i -= 1;
  }
  getValueForItemAtKeyId(e, n) {
    return e[this._keysMap[n]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, n) {
    if (!Q(e) || Qe(e)) return;
    let s = { v: e, i: n, n: this.norm.get(e) };
    this.records.push(s);
  }
  _addObject(e, n) {
    let s = { i: n, $: {} };
    (this.keys.forEach((o, a) => {
      let r = o.getFn ? o.getFn(e) : this.getFn(e, o.path);
      if (Q(r)) {
        if (de(r)) {
          let i = [];
          const u = [{ nestedArrIndex: -1, value: r }];
          for (; u.length; ) {
            const { nestedArrIndex: m, value: p } = u.pop();
            if (Q(p))
              if (se(p) && !Qe(p)) {
                let g = { v: p, i: m, n: this.norm.get(p) };
                i.push(g);
              } else
                de(p) &&
                  p.forEach((g, _) => {
                    u.push({ nestedArrIndex: _, value: g });
                  });
          }
          s.$[a] = i;
        } else if (se(r) && !Qe(r)) {
          let i = { v: r, n: this.norm.get(r) };
          s.$[a] = i;
        }
      }
    }),
      this.records.push(s));
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function sn(
  t,
  e,
  { getFn: n = x.getFn, fieldNormWeight: s = x.fieldNormWeight } = {},
) {
  const o = new yt({ getFn: n, fieldNormWeight: s });
  return (o.setKeys(t.map(nn)), o.setSources(e), o.create(), o);
}
function Ir(
  t,
  { getFn: e = x.getFn, fieldNormWeight: n = x.fieldNormWeight } = {},
) {
  const { keys: s, records: o } = t,
    a = new yt({ getFn: e, fieldNormWeight: n });
  return (a.setKeys(s), a.setIndexRecords(o), a);
}
function Te(
  t,
  {
    errors: e = 0,
    currentLocation: n = 0,
    expectedLocation: s = 0,
    distance: o = x.distance,
    ignoreLocation: a = x.ignoreLocation,
  } = {},
) {
  const r = e / t.length;
  if (a) return r;
  const i = Math.abs(s - n);
  return o ? r + i / o : i ? 1 : r;
}
function Ar(t = [], e = x.minMatchCharLength) {
  let n = [],
    s = -1,
    o = -1,
    a = 0;
  for (let r = t.length; a < r; a += 1) {
    let i = t[a];
    i && s === -1
      ? (s = a)
      : !i &&
        s !== -1 &&
        ((o = a - 1), o - s + 1 >= e && n.push([s, o]), (s = -1));
  }
  return (t[a - 1] && a - s >= e && n.push([s, a - 1]), n);
}
const ke = 32;
function Nr(
  t,
  e,
  n,
  {
    location: s = x.location,
    distance: o = x.distance,
    threshold: a = x.threshold,
    findAllMatches: r = x.findAllMatches,
    minMatchCharLength: i = x.minMatchCharLength,
    includeMatches: u = x.includeMatches,
    ignoreLocation: m = x.ignoreLocation,
  } = {},
) {
  if (e.length > ke) throw new Error(br(ke));
  const p = e.length,
    g = t.length,
    _ = Math.max(0, Math.min(s, g));
  let C = a,
    P = _;
  const w = i > 1 || u,
    V = w ? Array(g) : [];
  let B;
  for (; (B = t.indexOf(e, P)) > -1; ) {
    let W = Te(e, {
      currentLocation: B,
      expectedLocation: _,
      distance: o,
      ignoreLocation: m,
    });
    if (((C = Math.min(W, C)), (P = B + p), w)) {
      let U = 0;
      for (; U < p; ) ((V[B + U] = 1), (U += 1));
    }
  }
  P = -1;
  let G = [],
    E = 1,
    q = p + g;
  const Z = 1 << (p - 1);
  for (let W = 0; W < p; W += 1) {
    let U = 0,
      J = q;
    for (; U < J; )
      (Te(e, {
        errors: W,
        currentLocation: _ + J,
        expectedLocation: _,
        distance: o,
        ignoreLocation: m,
      }) <= C
        ? (U = J)
        : (q = J),
        (J = Math.floor((q - U) / 2 + U)));
    q = J;
    let X = Math.max(1, _ - J + 1),
      ee = r ? g : Math.min(_ + J, g) + p,
      Y = Array(ee + 2);
    Y[ee + 1] = (1 << W) - 1;
    for (let K = ee; K >= X; K -= 1) {
      let re = K - 1,
        ge = n[t.charAt(re)];
      if (
        (w && (V[re] = +!!ge),
        (Y[K] = ((Y[K + 1] << 1) | 1) & ge),
        W && (Y[K] |= ((G[K + 1] | G[K]) << 1) | 1 | G[K + 1]),
        Y[K] & Z &&
          ((E = Te(e, {
            errors: W,
            currentLocation: re,
            expectedLocation: _,
            distance: o,
            ignoreLocation: m,
          })),
          E <= C))
      ) {
        if (((C = E), (P = re), P <= _)) break;
        X = Math.max(1, 2 * _ - P);
      }
    }
    if (
      Te(e, {
        errors: W + 1,
        currentLocation: _,
        expectedLocation: _,
        distance: o,
        ignoreLocation: m,
      }) > C
    )
      break;
    G = Y;
  }
  const ve = { isMatch: P >= 0, score: Math.max(0.001, E) };
  if (w) {
    const W = Ar(V, i);
    W.length ? u && (ve.indices = W) : (ve.isMatch = !1);
  }
  return ve;
}
function Tr(t) {
  let e = {};
  for (let n = 0, s = t.length; n < s; n += 1) {
    const o = t.charAt(n);
    e[o] = (e[o] || 0) | (1 << (s - n - 1));
  }
  return e;
}
class on {
  constructor(
    e,
    {
      location: n = x.location,
      threshold: s = x.threshold,
      distance: o = x.distance,
      includeMatches: a = x.includeMatches,
      findAllMatches: r = x.findAllMatches,
      minMatchCharLength: i = x.minMatchCharLength,
      isCaseSensitive: u = x.isCaseSensitive,
      ignoreLocation: m = x.ignoreLocation,
    } = {},
  ) {
    if (
      ((this.options = {
        location: n,
        threshold: s,
        distance: o,
        includeMatches: a,
        findAllMatches: r,
        minMatchCharLength: i,
        isCaseSensitive: u,
        ignoreLocation: m,
      }),
      (this.pattern = u ? e : e.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const p = (_, C) => {
        this.chunks.push({ pattern: _, alphabet: Tr(_), startIndex: C });
      },
      g = this.pattern.length;
    if (g > ke) {
      let _ = 0;
      const C = g % ke,
        P = g - C;
      for (; _ < P; ) (p(this.pattern.substr(_, ke), _), (_ += ke));
      if (C) {
        const w = g - ke;
        p(this.pattern.substr(w), w);
      }
    } else p(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: n, includeMatches: s } = this.options;
    if ((n || (e = e.toLowerCase()), this.pattern === e)) {
      let P = { isMatch: !0, score: 0 };
      return (s && (P.indices = [[0, e.length - 1]]), P);
    }
    const {
      location: o,
      distance: a,
      threshold: r,
      findAllMatches: i,
      minMatchCharLength: u,
      ignoreLocation: m,
    } = this.options;
    let p = [],
      g = 0,
      _ = !1;
    this.chunks.forEach(({ pattern: P, alphabet: w, startIndex: V }) => {
      const {
        isMatch: B,
        score: G,
        indices: E,
      } = Nr(e, P, w, {
        location: o + V,
        distance: a,
        threshold: r,
        findAllMatches: i,
        minMatchCharLength: u,
        includeMatches: s,
        ignoreLocation: m,
      });
      (B && (_ = !0), (g += G), B && E && (p = [...p, ...E]));
    });
    let C = { isMatch: _, score: _ ? g / this.chunks.length : 1 };
    return (_ && s && (C.indices = p), C);
  }
}
class pe {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return xt(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return xt(e, this.singleRegex);
  }
  search() {}
}
function xt(t, e) {
  const n = t.match(e);
  return n ? n[1] : null;
}
class Er extends pe {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const n = e === this.pattern;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class Hr extends pe {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const n = e.indexOf(this.pattern) === -1;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Or extends pe {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const n = e.startsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class Dr extends pe {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const n = !e.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Fr extends pe {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const n = e.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1],
    };
  }
}
class Br extends pe {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const n = !e.endsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class an extends pe {
  constructor(
    e,
    {
      location: n = x.location,
      threshold: s = x.threshold,
      distance: o = x.distance,
      includeMatches: a = x.includeMatches,
      findAllMatches: r = x.findAllMatches,
      minMatchCharLength: i = x.minMatchCharLength,
      isCaseSensitive: u = x.isCaseSensitive,
      ignoreLocation: m = x.ignoreLocation,
    } = {},
  ) {
    (super(e),
      (this._bitapSearch = new on(e, {
        location: n,
        threshold: s,
        distance: o,
        includeMatches: a,
        findAllMatches: r,
        minMatchCharLength: i,
        isCaseSensitive: u,
        ignoreLocation: m,
      })));
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class rn extends pe {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let n = 0,
      s;
    const o = [],
      a = this.pattern.length;
    for (; (s = e.indexOf(this.pattern, n)) > -1; )
      ((n = s + a), o.push([s, n - 1]));
    const r = !!o.length;
    return { isMatch: r, score: r ? 0 : 1, indices: o };
  }
}
const at = [Er, rn, Or, Dr, Br, Fr, Hr, an],
  It = at.length,
  Rr = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  jr = "|";
function Gr(t, e = {}) {
  return t.split(jr).map((n) => {
    let s = n
        .trim()
        .split(Rr)
        .filter((a) => a && !!a.trim()),
      o = [];
    for (let a = 0, r = s.length; a < r; a += 1) {
      const i = s[a];
      let u = !1,
        m = -1;
      for (; !u && ++m < It; ) {
        const p = at[m];
        let g = p.isMultiMatch(i);
        g && (o.push(new p(g, e)), (u = !0));
      }
      if (!u)
        for (m = -1; ++m < It; ) {
          const p = at[m];
          let g = p.isSingleMatch(i);
          if (g) {
            o.push(new p(g, e));
            break;
          }
        }
    }
    return o;
  });
}
const Wr = new Set([an.type, rn.type]);
class Ur {
  constructor(
    e,
    {
      isCaseSensitive: n = x.isCaseSensitive,
      includeMatches: s = x.includeMatches,
      minMatchCharLength: o = x.minMatchCharLength,
      ignoreLocation: a = x.ignoreLocation,
      findAllMatches: r = x.findAllMatches,
      location: i = x.location,
      threshold: u = x.threshold,
      distance: m = x.distance,
    } = {},
  ) {
    ((this.query = null),
      (this.options = {
        isCaseSensitive: n,
        includeMatches: s,
        minMatchCharLength: o,
        findAllMatches: r,
        ignoreLocation: a,
        location: i,
        threshold: u,
        distance: m,
      }),
      (this.pattern = n ? e : e.toLowerCase()),
      (this.query = Gr(this.pattern, this.options)));
  }
  static condition(e, n) {
    return n.useExtendedSearch;
  }
  searchIn(e) {
    const n = this.query;
    if (!n) return { isMatch: !1, score: 1 };
    const { includeMatches: s, isCaseSensitive: o } = this.options;
    e = o ? e : e.toLowerCase();
    let a = 0,
      r = [],
      i = 0;
    for (let u = 0, m = n.length; u < m; u += 1) {
      const p = n[u];
      ((r.length = 0), (a = 0));
      for (let g = 0, _ = p.length; g < _; g += 1) {
        const C = p[g],
          { isMatch: P, indices: w, score: V } = C.search(e);
        if (P) {
          if (((a += 1), (i += V), s)) {
            const B = C.constructor.type;
            Wr.has(B) ? (r = [...r, ...w]) : r.push(w);
          }
        } else {
          ((i = 0), (a = 0), (r.length = 0));
          break;
        }
      }
      if (a) {
        let g = { isMatch: !0, score: i / a };
        return (s && (g.indices = r), g);
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const rt = [];
function zr(...t) {
  rt.push(...t);
}
function it(t, e) {
  for (let n = 0, s = rt.length; n < s; n += 1) {
    let o = rt[n];
    if (o.condition(t, e)) return new o(t, e);
  }
  return new on(t, e);
}
const Be = { AND: "$and", OR: "$or" },
  lt = { PATH: "$path", PATTERN: "$val" },
  ct = (t) => !!(t[Be.AND] || t[Be.OR]),
  qr = (t) => !!t[lt.PATH],
  Kr = (t) => !de(t) && en(t) && !ct(t),
  At = (t) => ({ [Be.AND]: Object.keys(t).map((e) => ({ [e]: t[e] })) });
function ln(t, e, { auto: n = !0 } = {}) {
  const s = (o) => {
    let a = Object.keys(o);
    const r = qr(o);
    if (!r && a.length > 1 && !ct(o)) return s(At(o));
    if (Kr(o)) {
      const u = r ? o[lt.PATH] : a[0],
        m = r ? o[lt.PATTERN] : o[u];
      if (!se(m)) throw new Error(yr(u));
      const p = { keyId: ot(u), pattern: m };
      return (n && (p.searcher = it(m, e)), p);
    }
    let i = { children: [], operator: a[0] };
    return (
      a.forEach((u) => {
        const m = o[u];
        de(m) &&
          m.forEach((p) => {
            i.children.push(s(p));
          });
      }),
      i
    );
  };
  return (ct(t) || (t = At(t)), s(t));
}
function Zr(t, { ignoreFieldNorm: e = x.ignoreFieldNorm }) {
  t.forEach((n) => {
    let s = 1;
    (n.matches.forEach(({ key: o, norm: a, score: r }) => {
      const i = o ? o.weight : null;
      s *= Math.pow(r === 0 && i ? Number.EPSILON : r, (i || 1) * (e ? 1 : a));
    }),
      (n.score = s));
  });
}
function Jr(t, e) {
  const n = t.matches;
  ((e.matches = []),
    Q(n) &&
      n.forEach((s) => {
        if (!Q(s.indices) || !s.indices.length) return;
        const { indices: o, value: a } = s;
        let r = { indices: o, value: a };
        (s.key && (r.key = s.key.src),
          s.idx > -1 && (r.refIndex = s.idx),
          e.matches.push(r));
      }));
}
function Qr(t, e) {
  e.score = t.score;
}
function Yr(
  t,
  e,
  {
    includeMatches: n = x.includeMatches,
    includeScore: s = x.includeScore,
  } = {},
) {
  const o = [];
  return (
    n && o.push(Jr),
    s && o.push(Qr),
    t.map((a) => {
      const { idx: r } = a,
        i = { item: e[r], refIndex: r };
      return (
        o.length &&
          o.forEach((u) => {
            u(a, i);
          }),
        i
      );
    })
  );
}
class ye {
  constructor(e, n = {}, s) {
    ((this.options = { ...x, ...n }),
      this.options.useExtendedSearch,
      (this._keyStore = new Lr(this.options.keys)),
      this.setCollection(e, s));
  }
  setCollection(e, n) {
    if (((this._docs = e), n && !(n instanceof yt))) throw new Error(kr);
    this._myIndex =
      n ||
      sn(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(e) {
    !Q(e) || (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const n = [];
    for (let s = 0, o = this._docs.length; s < o; s += 1) {
      const a = this._docs[s];
      e(a, s) && (this.removeAt(s), (s -= 1), (o -= 1), n.push(a));
    }
    return n;
  }
  removeAt(e) {
    (this._docs.splice(e, 1), this._myIndex.removeAt(e));
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: n = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: o,
      shouldSort: a,
      sortFn: r,
      ignoreFieldNorm: i,
    } = this.options;
    let u = se(e)
      ? se(this._docs[0])
        ? this._searchStringList(e)
        : this._searchObjectList(e)
      : this._searchLogical(e);
    return (
      Zr(u, { ignoreFieldNorm: i }),
      a && u.sort(r),
      Xt(n) && n > -1 && (u = u.slice(0, n)),
      Yr(u, this._docs, { includeMatches: s, includeScore: o })
    );
  }
  _searchStringList(e) {
    const n = it(e, this.options),
      { records: s } = this._myIndex,
      o = [];
    return (
      s.forEach(({ v: a, i: r, n: i }) => {
        if (!Q(a)) return;
        const { isMatch: u, score: m, indices: p } = n.searchIn(a);
        u &&
          o.push({
            item: a,
            idx: r,
            matches: [{ score: m, value: a, norm: i, indices: p }],
          });
      }),
      o
    );
  }
  _searchLogical(e) {
    const n = ln(e, this.options),
      s = (i, u, m) => {
        if (!i.children) {
          const { keyId: g, searcher: _ } = i,
            C = this._findMatches({
              key: this._keyStore.get(g),
              value: this._myIndex.getValueForItemAtKeyId(u, g),
              searcher: _,
            });
          return C && C.length ? [{ idx: m, item: u, matches: C }] : [];
        }
        const p = [];
        for (let g = 0, _ = i.children.length; g < _; g += 1) {
          const C = i.children[g],
            P = s(C, u, m);
          if (P.length) p.push(...P);
          else if (i.operator === Be.AND) return [];
        }
        return p;
      },
      o = this._myIndex.records,
      a = {},
      r = [];
    return (
      o.forEach(({ $: i, i: u }) => {
        if (Q(i)) {
          let m = s(n, i, u);
          m.length &&
            (a[u] || ((a[u] = { idx: u, item: i, matches: [] }), r.push(a[u])),
            m.forEach(({ matches: p }) => {
              a[u].matches.push(...p);
            }));
        }
      }),
      r
    );
  }
  _searchObjectList(e) {
    const n = it(e, this.options),
      { keys: s, records: o } = this._myIndex,
      a = [];
    return (
      o.forEach(({ $: r, i }) => {
        if (!Q(r)) return;
        let u = [];
        (s.forEach((m, p) => {
          u.push(...this._findMatches({ key: m, value: r[p], searcher: n }));
        }),
          u.length && a.push({ idx: i, item: r, matches: u }));
      }),
      a
    );
  }
  _findMatches({ key: e, value: n, searcher: s }) {
    if (!Q(n)) return [];
    let o = [];
    if (de(n))
      n.forEach(({ v: a, i: r, n: i }) => {
        if (!Q(a)) return;
        const { isMatch: u, score: m, indices: p } = s.searchIn(a);
        u &&
          o.push({ score: m, key: e, value: a, idx: r, norm: i, indices: p });
      });
    else {
      const { v: a, n: r } = n,
        { isMatch: i, score: u, indices: m } = s.searchIn(a);
      i && o.push({ score: u, key: e, value: a, norm: r, indices: m });
    }
    return o;
  }
}
ye.version = "6.6.2";
ye.createIndex = sn;
ye.parseIndex = Ir;
ye.config = x;
ye.parseQuery = ln;
zr(Ur);
const Nt = Ye({
    selectedNode: "",
    selectedGroup: "",
    search: "",
    dataValue: "",
    filtered: { count: 0, items: new Map(), groups: new Set() },
  }),
  Me = () => ({ isSearching: b(() => Nt.search !== ""), ...$n(Nt) });
function Xr(t) {
  return {
    all: (t = t || new Map()),
    on: function (e, n) {
      var s = t.get(e);
      s ? s.push(n) : t.set(e, [n]);
    },
    off: function (e, n) {
      var s = t.get(e);
      s && (n ? s.splice(s.indexOf(n) >>> 0, 1) : t.set(e, []));
    },
    emit: function (e, n) {
      var s = t.get(e);
      (s &&
        s.slice().map(function (o) {
          o(n);
        }),
        (s = t.get("*")) &&
          s.slice().map(function (o) {
            o(e, n);
          }));
    },
  };
}
const ei = Xr(),
  qe = () => ({ emitter: ei });
function ti(t, e) {
  let n = t.nextElementSibling;
  for (; n; ) {
    if (n.matches(e)) return n;
    n = n.nextElementSibling;
  }
}
function ni(t, e) {
  let n = t.previousElementSibling;
  for (; n; ) {
    if (n.matches(e)) return n;
    n = n.previousElementSibling;
  }
}
const si = ["command-theme"],
  oi = { "command-root": "" },
  ai = y({ name: "Command" }),
  ri = y({
    ...ai,
    props: {
      theme: { type: String, default: "default" },
      fuseOptions: {
        type: Object,
        default: () => ({ threshold: 0.2, keys: ["label"] }),
      },
    },
    emits: ["select-item"],
    setup(t, { emit: e }) {
      const n = t,
        s = '[command-item=""]',
        o = "command-item-key",
        a = '[command-group=""]',
        r = "command-group-key",
        i = '[command-group-heading=""]',
        u = `${s}:not([aria-disabled="true"])`,
        m = `${s}[aria-selected="true"]`,
        p = "command-item-select",
        g = "data-value";
      ht("theme", n.theme || "default");
      const { selectedNode: _, search: C, filtered: P } = Me(),
        { emitter: w } = qe(),
        V = A(),
        B = Je(A(new Map()), 333),
        G = Je(A(new Set()), 333),
        E = Je(A(new Map())),
        q = b(() => {
          const k = [];
          for (const [O, I] of B.value.entries()) k.push({ key: O, label: I });
          return k;
        }),
        Z = b(() => {
          const k = ye.createIndex(n.fuseOptions.keys, q.value);
          return new ye(q.value, n.fuseOptions, k);
        }),
        ve = () => {
          var k, O, I;
          const F = W();
          F &&
            (((k = F.parentElement) == null ? void 0 : k.firstElementChild) ===
              F &&
              ((I = (O = F.closest(a)) == null ? void 0 : O.querySelector(i)) ==
                null ||
                I.scrollIntoView({ block: "nearest" })),
            F.scrollIntoView({ block: "nearest" }));
        },
        W = () => {
          var k;
          return (k = V.value) == null ? void 0 : k.querySelector(m);
        },
        U = (k = V.value) => {
          const O = k?.querySelectorAll(u);
          return O ? Array.from(O) : [];
        },
        J = () => {
          var k;
          const O = (k = V.value) == null ? void 0 : k.querySelectorAll(a);
          return O ? Array.from(O) : [];
        },
        X = () => {
          const [k] = U();
          k && k.getAttribute(o) && (_.value = k.getAttribute(o) || "");
        },
        ee = (k) => {
          const O = U()[k];
          O && (_.value = O.getAttribute(o) || "");
        },
        Y = (k) => {
          const O = W(),
            I = U(),
            F = I.findIndex((te) => te === O),
            ie = I[F + k];
          ie
            ? (_.value = ie.getAttribute(o) || "")
            : k > 0
              ? ee(0)
              : ee(I.length - 1);
        },
        K = (k) => {
          const O = W();
          let I = O?.closest(a),
            F = null;
          for (; I && !F; )
            ((I = k > 0 ? ti(I, a) : ni(I, a)), (F = I?.querySelector(u)));
          F ? (_.value = F.getAttribute(o) || "") : Y(k);
        },
        re = () => ee(0),
        ge = () => ee(U().length - 1),
        Ie = (k) => {
          (k.preventDefault(), k.metaKey ? ge() : k.altKey ? K(1) : Y(1));
        },
        _e = (k) => {
          (k.preventDefault(), k.metaKey ? re() : k.altKey ? K(-1) : Y(-1));
        },
        Ke = (k) => {
          switch (k.key) {
            case "n":
            case "j": {
              k.ctrlKey && Ie(k);
              break;
            }
            case "ArrowDown": {
              Ie(k);
              break;
            }
            case "p":
            case "k": {
              k.ctrlKey && _e(k);
              break;
            }
            case "ArrowUp": {
              _e(k);
              break;
            }
            case "Home": {
              re();
              break;
            }
            case "End": {
              ge();
              break;
            }
            case "Enter": {
              const O = W();
              if (O) {
                const I = new Event(p);
                O.dispatchEvent(I);
              }
            }
          }
        },
        $e = () => {
          if (!C.value) {
            P.value.count = G.value.size;
            return;
          }
          P.value.groups = new Set("");
          const k = new Map(),
            O = Z.value.search(C.value).map((I) => I.item);
          for (const { key: I, label: F } of O) k.set(I, F);
          for (const [I, F] of E.value)
            for (const ie of F) k.get(ie) && P.value.groups.add(I);
          ne(() => {
            ((P.value.count = k.size), (P.value.items = k));
          });
        },
        Ae = () => {
          const k = U(),
            O = J();
          for (const I of k) {
            const F = I.getAttribute(o) || "",
              ie = I.getAttribute(g) || "";
            (G.value.add(F),
              B.value.set(F, ie),
              (P.value.count = B.value.size));
          }
          for (const I of O) {
            const F = U(I),
              ie = I.getAttribute(r) || "",
              te = new Set("");
            for (const dn of F) {
              const hn = dn.getAttribute(o) || "";
              te.add(hn);
            }
            E.value.set(ie, te);
          }
        };
      (j(
        () => _.value,
        (k) => {
          k && ne(ve);
        },
        { deep: !0 },
      ),
        j(
          () => C.value,
          (k) => {
            ($e(), ne(X));
          },
        ),
        w.on("selectItem", (k) => {
          e("select-item", k);
        }));
      const D = Jt((k) => {
        k && (Ae(), ne(X));
      }, 100);
      return (
        w.on("rerenderList", D),
        he(() => {
          (Ae(), X());
        }),
        (k, O) => (
          l(),
          f(
            "div",
            {
              class: H(t.theme),
              onKeydown: Ke,
              ref_key: "commandRef",
              ref: V,
              "command-theme": t.theme,
            },
            [d("div", oi, [h(k.$slots, "default")])],
            42,
            si,
          )
        )
      );
    },
  }),
  Se = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [s, o] of e) n[s] = o;
    return n;
  },
  ut = Se(ri, [
    [
      "__file",
      "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue",
    ],
  ]),
  ii = { "command-dialog": "" },
  li = { "command-dialog-mask": "" },
  ci = { "command-dialog-wrapper": "" },
  ui = { "command-dialog-header": "" },
  di = { "command-dialog-body": "" },
  hi = { key: 0, "command-dialog-footer": "" },
  fi = y({ name: "Command.Dialog" }),
  vi = y({
    ...fi,
    props: {
      visible: { type: Boolean, required: !0 },
      theme: { type: String, required: !0 },
    },
    emits: ["select-item"],
    setup(t, { emit: e }) {
      const n = t,
        { search: s, filtered: o } = Me(),
        { emitter: a } = qe(),
        r = A();
      a.on("selectItem", (u) => {
        e("select-item", u);
      });
      const i = () => {
        ((s.value = ""),
          (o.value.count = 0),
          (o.value.items = new Map()),
          (o.value.groups = new Set()));
      };
      return (
        Qt(() => n.visible, i),
        Ue(i),
        (u, m) => (
          l(),
          M(
            Ln,
            { to: "body", ref_key: "dialogRef", ref: r },
            [
              L(
                Re,
                { name: "command-dialog", appear: "" },
                {
                  default: v(() => [
                    t.visible
                      ? (l(),
                        M(
                          ut,
                          { key: 0, theme: t.theme },
                          {
                            default: v(() => [
                              d("div", ii, [
                                d("div", li, [
                                  d("div", ci, [
                                    d("div", ui, [h(u.$slots, "header")]),
                                    d("div", di, [h(u.$slots, "body")]),
                                    u.$slots.footer
                                      ? (l(),
                                        f("div", hi, [h(u.$slots, "footer")]))
                                      : $("v-if", !0),
                                  ]),
                                ]),
                              ]),
                            ]),
                            _: 3,
                          },
                          8,
                          ["theme"],
                        ))
                      : $("v-if", !0),
                  ]),
                  _: 3,
                },
              ),
            ],
            512,
          )
        )
      );
    },
  }),
  mi = Se(vi, [
    [
      "__file",
      "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue",
    ],
  ]);
let cn = (t = 21) =>
  crypto
    .getRandomValues(new Uint8Array(t))
    .reduce(
      (e, n) => (
        (n &= 63),
        n < 36
          ? (e += n.toString(36))
          : n < 62
            ? (e += (n - 26).toString(36).toUpperCase())
            : n > 62
              ? (e += "-")
              : (e += "_"),
        e
      ),
      "",
    );
const pi = ["command-group-key", "data-value"],
  gi = { key: 0, "command-group-heading": "" },
  ki = { "command-group-items": "", role: "group" },
  yi = y({ name: "Command.Group" }),
  bi = y({
    ...yi,
    props: { heading: { type: String, required: !0 } },
    setup(t) {
      const e = b(() => `command-group-${cn()}`),
        { filtered: n, isSearching: s } = Me(),
        o = b(() => (s.value ? n.value.groups.has(e.value) : !0));
      return (a, r) =>
        Bt(
          (l(),
          f(
            "div",
            {
              "command-group": "",
              role: "presentation",
              key: c(e),
              "command-group-key": c(e),
              "data-value": t.heading,
            },
            [
              t.heading ? (l(), f("div", gi, T(t.heading), 1)) : $("v-if", !0),
              d("div", ki, [h(a.$slots, "default")]),
            ],
            8,
            pi,
          )),
          [[Rt, c(o)]],
        );
    },
  }),
  _i = Se(bi, [
    [
      "__file",
      "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue",
    ],
  ]),
  $i = ["placeholder", "value"],
  Li = y({ name: "Command.Input" }),
  wi = y({
    ...Li,
    props: {
      placeholder: { type: String, required: !0 },
      value: { type: String, required: !1 },
    },
    emits: ["input", "update:value"],
    setup(t, { emit: e }) {
      const n = A(null),
        { search: s } = Me(),
        o = b(() => s.value),
        a = (r) => {
          const i = r,
            u = r.target;
          ((s.value = u?.value), e("input", i), e("update:value", s.value));
        };
      return (
        be(() => {
          var r;
          (r = n.value) == null || r.focus();
        }),
        (r, i) => (
          l(),
          f(
            "input",
            {
              ref_key: "inputRef",
              ref: n,
              "command-input": "",
              "auto-focus": "",
              "auto-complete": "off",
              "auto-correct": "off",
              "spell-check": !1,
              "aria-autocomplete": "list",
              role: "combobox",
              "aria-expanded": !0,
              placeholder: t.placeholder,
              value: c(o),
              onInput: a,
            },
            null,
            40,
            $i,
          )
        )
      );
    },
  }),
  Mi = Se(wi, [
    [
      "__file",
      "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue",
    ],
  ]),
  Si = ["aria-selected", "aria-disabled", "command-item-key"],
  Ci = y({ name: "Command.Item" }),
  Pi = y({
    ...Ci,
    props: {
      shortcut: { type: Array, required: !1 },
      perform: { type: null, required: !1 },
    },
    emits: ["select"],
    setup(t, { emit: e }) {
      const n = t,
        s = "command-item-select",
        o = "data-value",
        { current: a } = lr(),
        { selectedNode: r, filtered: i, isSearching: u } = Me(),
        { emitter: m } = qe(),
        p = A(),
        g = b(() => `command-item-${cn()}`),
        _ = b(() => {
          const w = i.value.items.get(g.value);
          return u.value ? w !== void 0 : !0;
        }),
        C = b(() => Array.from(a)),
        P = () => {
          var w;
          const V = {
            key: g.value,
            value: ((w = p.value) == null ? void 0 : w.getAttribute(o)) || "",
          };
          (e("select", V), m.emit("selectItem", V));
        };
      return (
        Qt(C, (w) => {
          n.shortcut &&
            n.shortcut.length > 0 &&
            n.shortcut.every((V) => a.has(V.toLowerCase())) &&
            n.perform &&
            n.perform();
        }),
        be(() => {
          var w;
          (w = p.value) == null || w.addEventListener(s, P);
        }),
        Ue(() => {
          var w;
          (w = p.value) == null || w.removeEventListener(s, P);
        }),
        (w, V) =>
          Bt(
            (l(),
            f(
              "div",
              {
                ref_key: "itemRef",
                ref: p,
                "command-item": "",
                role: "option",
                "aria-selected": c(r) === c(g),
                "aria-disabled": !c(_),
                key: c(g),
                "command-item-key": c(g),
                onClick: P,
              },
              [h(w.$slots, "default")],
              8,
              Si,
            )),
            [[Rt, c(_)]],
          )
      );
    },
  }),
  Vi = Se(Pi, [
    [
      "__file",
      "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue",
    ],
  ]),
  xi = y({ name: "Command.List" }),
  Ii = y({
    ...xi,
    setup(t) {
      const { emitter: e } = qe(),
        n = A(),
        s = A();
      let o = null,
        a;
      return (
        be(() => {
          a = s.value;
          const r = n.value;
          a &&
            r &&
            ((o = new ResizeObserver((i) => {
              ne(() => {
                const u = a?.offsetHeight;
                (r?.style.setProperty(
                  "--command-list-height",
                  `${u?.toFixed(1)}px`,
                ),
                  e.emit("rerenderList", !0));
              });
            })),
            o.observe(a));
        }),
        Ue(() => {
          o !== null && a && o.unobserve(a);
        }),
        (r, i) => (
          l(),
          f(
            "div",
            {
              "command-list": "",
              role: "listbox",
              "aria-label": "Suggestions",
              ref_key: "listRef",
              ref: n,
            },
            [
              d(
                "div",
                { "command-list-sizer": "", ref_key: "heightRef", ref: s },
                [h(r.$slots, "default")],
                512,
              ),
            ],
            512,
          )
        )
      );
    },
  }),
  Ai = Se(Ii, [
    [
      "__file",
      "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue",
    ],
  ]),
  Ni = y({
    name: "Command.Empty",
    setup(t, { attrs: e, slots: n }) {
      const { filtered: s } = Me(),
        o = b(() => s.value.count === 0);
      return () =>
        o.value
          ? De("div", { "command-empty": "", role: "presentation", ...e }, n)
          : De("div", {
              "command-empty": "hidden",
              role: "presentation",
              style: { display: "none" },
              ...e,
            });
    },
  }),
  Ti = y({
    name: "Command.Loading",
    setup(t, { attrs: e, slots: n }) {
      return () =>
        De("div", { "command-loading": "", role: "progressbar", ...e }, n);
    },
  }),
  Ei = y({
    name: "Command.Separator",
    setup(t, { attrs: e, slots: n }) {
      return () =>
        De("div", { "command-separator": "", role: "separator", ...e });
    },
  }),
  Le = Object.assign(ut, {
    Dialog: mi,
    Empty: Ni,
    Group: _i,
    Input: Mi,
    Item: Vi,
    List: Ai,
    Loading: Ti,
    Separator: Ei,
    Root: ut,
  }),
  Hi = {
    customSearchQuery: function (e) {
      const n = new Intl.Segmenter("zh-CN", { granularity: "word" }),
        s = [];
      for (const o of n.segment(e)) o.isWordLike && s.push(o.segment);
      return s.join(" ");
    },
  },
  Oi = {},
  Di = {
    width: "594",
    height: "112",
    viewBox: "0 0 594 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function Fi(t, e) {
  return (
    l(),
    f("svg", Di, [
      ...(e[0] ||
        (e[0] = [
          Sn(
            '<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',
            11,
          ),
        ])),
    ])
  );
}
const Bi = S(Oi, [["render", Fi]]);
function Ri(t) {
  if (!t) return {};
  try {
    const e = decodeURIComponent(atob(t));
    return JSON.parse(e);
  } catch {
    return {};
  }
}
function ji(t, e = 1) {
  const { sub_results: n, anchors: s, weighted_locations: o } = t;
  o.sort((i, u) =>
    u.weight === i.weight ? i.location - u.location : u.weight - i.weight,
  );
  const a = [];
  for (const { location: i } of o) {
    const m = n
      .filter((p) => {
        const { locations: g } = p,
          [_] = g || [];
        if (typeof _ != "number") return !1;
        const C = g.length === 1 ? Number.POSITIVE_INFINITY : g[g.length - 1];
        return _ <= i && i <= C;
      })
      .reduce(
        (p, g) => (p && p.locations.length > g.locations.length ? p : g),
        null,
      );
    if (m && (a.push(m), a.length >= e)) break;
  }
  a.sort((i, u) => {
    const [m] = i.locations || [],
      [p] = u.locations || [];
    return !m || !p ? 0 : m - p;
  });
  const r = new Map();
  return a
    .map((i) => Gi(i, s, t))
    .filter((i) => (r.has(i.meta.title) ? !1 : (r.set(i.meta.title, i), !0)));
}
function Gi(t, e, n) {
  const s = t?.url || n?.url,
    o = t?.excerpt || n?.excerpt,
    a =
      e?.filter((g) => {
        if (!t) return !1;
        try {
          return (
            g.location <= t.anchor.location && g.element <= t.anchor.element
          );
        } catch {
          return !1;
        }
      }) || [];
  a.reverse();
  const r = a.reduce(
      (g, _) => (g.some((P) => P.element === _.element) || g.unshift(_), g),
      [],
    ),
    i = r.length
      ? r
          .map((g) => g.text.trim())
          .filter((g) => !!g)
          .join(" > ")
      : n.meta.title,
    { base64: u, date: m, ...p } = n.meta;
  return {
    route: s,
    meta: { date: m ? +m : void 0, ...Ri(u), ...p, title: i, description: o },
    result: n,
  };
}
function Wi(t, e = "yyyy-MM-dd hh:mm:ss") {
  t instanceof Date || (t = new Date(t));
  const n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "q+": Math.floor((t.getMonth() + 3) / 3),
    S: t.getMilliseconds(),
  };
  /(y+)/.test(e) &&
    (e = e.replace(
      RegExp.$1,
      `${t.getFullYear()}`.substr(4 - RegExp.$1.length),
    ));
  for (const s in n)
    new RegExp(`(${s})`).test(e) &&
      (e = e.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? n[s] : `00${n[s]}`.substr(`${n[s]}`.length),
      ));
  return e;
}
function Ui(t, e) {
  const n = +new Date(t),
    o = +new Date() - n,
    a = 1e3,
    r = a * 60,
    i = r * 60,
    u = i * 24,
    m = u * 7,
    p = {
      "zh-cn": {
        justNow: "刚刚",
        secondsAgo: "秒前",
        minutesAgo: "分钟前",
        hoursAgo: "小时前",
        daysAgo: "天前",
        weeksAgo: "周前",
      },
      "en-us": {
        justNow: " just now",
        secondsAgo: " seconds ago",
        minutesAgo: " minutes ago",
        hoursAgo: " hours ago",
        daysAgo: " days ago",
        weeksAgo: " weeks ago",
      },
    },
    g = p[e.toLowerCase()] || p["en-us"];
  return o < 10
    ? g.justNow
    : o < r
      ? `${Math.floor(o / a)}${g.secondsAgo}`
      : o < i
        ? `${Math.floor(o / r)}${g.minutesAgo}`
        : o < u
          ? `${Math.floor(o / i)}${g.hoursAgo}`
          : o < m
            ? `${Math.floor(o / u)}${g.daysAgo}`
            : Wi(new Date(t), "yyyy-MM-dd");
}
const zi = { class: "blog-search", "data-pagefind-ignore": "all" },
  qi = { class: "search-tip" },
  Ki = { class: "metaKey" },
  Zi = { class: "search-bar" },
  Ji = { class: "search-actions before" },
  Qi = { class: "search-actions" },
  Yi = ["disabled"],
  Xi = { class: "link" },
  el = { class: "title" },
  tl = { class: "headings" },
  nl = { key: 0, class: "prefix" },
  sl = { key: 0, class: "date" },
  ol = ["innerHTML"],
  al = { class: "command-palette-logo" },
  rl = {
    href: "https://github.com/cloudcannon/pagefind",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  il = { class: "command-palette-Label" },
  ll = { class: "command-palette-commands" },
  cl = { class: "command-palette-Label" },
  ul = { class: "command-palette-Label" },
  dl = { class: "command-palette-Label" },
  hl = y({
    __name: "Search",
    setup(t) {
      const e = A([]),
        n = Hi,
        { localeIndex: s, site: o, lang: a } = Tt(),
        r = b(() => ({ ...n, ...(n?.locales?.[s.value] || {}) })),
        i = b(() => r.value?.ignorePublish ?? !1),
        u = b(() => r.value?.showDate ?? !1),
        m = b(() =>
          typeof r.value.showDate == "function" ? r.value.showDate : Ui,
        ),
        p = b(() =>
          r.value?.heading
            ? r.value.heading.replace(
                /\{\{searchResult\}\}/,
                `${e.value.length}`,
              )
            : `Total: ${e.value.length} search results.`,
        ),
        g = A("");
      he(() => {
        g.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator?.platform)
          ? "⌘"
          : "Ctrl";
      });
      const _ = A(!1);
      function C() {
        _.value = !0;
      }
      function P() {
        _.value = !1;
      }
      const w = Cn({
          passive: !1,
          onEventFired(D) {
            D.ctrlKey &&
              D.key === "k" &&
              D.type === "keydown" &&
              D.preventDefault();
          },
        }),
        V = w["Meta+K"],
        B = w["Ctrl+K"],
        G = w.Escape;
      (j(V, (D) => {
        D && C();
      }),
        j(B, (D) => {
          D && C();
        }),
        j(G, (D) => {
          D && P();
        }));
      const E = A("");
      function q() {
        if (!E.value) {
          e.value = [];
          return;
        }
        e.value = [
          {
            route: "#",
            meta: {
              title: "只在构建后才生效",
              description:
                "<mark>only support after build</mark>, only support after build",
            },
          },
        ];
      }
      const Z = /[\u4E00-\u9FA5]/g,
        ve =
          Intl?.Segmenter &&
          new Intl.Segmenter("zh-CN", { granularity: "word" });
      function W(D) {
        return ve
          ? Array.from(ve?.segment(D))
              .map((O) => O.segment)
              .join(" ")
          : D.replace(Z, " $& ").replace(/\s+/g, " ").trim();
      }
      const U = b(() => r.value?.delay ?? 300);
      j(
        () => E.value,
        async () => {
          if (!window?.__pagefind__?.search) {
            q();
            return;
          }
          const D =
            typeof r.value.customSearchQuery == "function"
              ? r.value.customSearchQuery(E.value)
              : Z.test(E.value)
                ? W(E.value)
                : E.value;
          (await window?.__pagefind__
            ?.debouncedSearch?.(D, {}, U.value)
            .then(async (k) => {
              if (k === null) return;
              const I = (await Promise.all(k.results.map((F) => F.data())))
                .map((F) =>
                  ji(F, r.value.pageResultCount || 1).map(
                    (te) => (
                      (te.route = te.route.startsWith(o.value.base)
                        ? te.route
                        : je(te.route)),
                      te
                    ),
                  ),
                )
                .flat()
                .filter((F) => i.value || F.meta.publish !== !1);
              (r.value.sort && I.sort(r.value.sort),
                (e.value = I.filter(r.value.filter ?? (() => !0))));
            }),
            ne(() => {
              document
                .querySelectorAll('div[aria-disabled="true"]')
                .forEach((k) => {
                  k.setAttribute("aria-disabled", "false");
                });
            }));
        },
      );
      function J(D) {
        D.target === D.currentTarget && P();
      }
      j(
        () => _.value,
        (D) => {
          D
            ? ((document.body.style.overflow = "hidden"),
              ne(() => {
                document
                  .querySelector("div[command-dialog-mask]")
                  ?.addEventListener("click", J);
              }))
            : ((document.body.style.overflow = ""),
              document
                .querySelector("div[command-dialog-mask]")
                ?.removeEventListener("click", J));
        },
      );
      const X = A(999),
        ee = A(0),
        Y = b(() => {
          const k = (ee.value % Math.ceil(e.value.length / X.value)) * X.value;
          return e.value.slice(k, k + X.value);
        }),
        K = Pn(),
        re = Ve();
      function ge(D) {
        (P(), re.path !== D.value && K.go(D.value));
      }
      const Ie = b(() => r.value.langReload ?? !0);
      j(
        () => a.value,
        () => {
          Ie.value && window.location.reload();
        },
      );
      const _e = A();
      function Ke() {
        ((E.value = ""),
          ne(() => {
            _e.value && (_e.value.$el.value = "");
          }));
      }
      const $e = Vn("pagefind-search-showDetail", !1);
      function Ae() {
        $e.value = !$e.value;
      }
      return (D, k) => {
        const O = me("ClientOnly");
        return (
          l(),
          f("div", zi, [
            d(
              "div",
              {
                class: "nav-search-btn-wait",
                onClick: k[0] || (k[0] = (I) => (_.value = !0)),
              },
              [
                k[3] ||
                  (k[3] = d(
                    "span",
                    null,
                    [
                      d(
                        "svg",
                        { width: "14", height: "14", viewBox: "0 0 20 20" },
                        [
                          d("path", {
                            d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
                            stroke: "currentColor",
                            fill: "none",
                            "fill-rule": "evenodd",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          }),
                        ],
                      ),
                    ],
                    -1,
                  )),
                d("span", qi, T(r.value?.btnPlaceholder || "Search"), 1),
                d("span", Ki, T(g.value) + " K ", 1),
              ],
            ),
            L(O, null, {
              default: v(() => [
                L(
                  c(Le).Dialog,
                  { visible: _.value, theme: "algolia" },
                  xn(
                    {
                      header: v(() => [
                        d("div", Zi, [
                          d("div", Ji, [
                            d(
                              "button",
                              {
                                class: "back-button",
                                title: "Close search",
                                onClick: k[1] || (k[1] = (I) => (_.value = !1)),
                              },
                              [
                                ...(k[4] ||
                                  (k[4] = [
                                    d(
                                      "span",
                                      {
                                        class:
                                          "vpi-arrow-left local-search-icon",
                                      },
                                      null,
                                      -1,
                                    ),
                                  ])),
                              ],
                            ),
                          ]),
                          L(
                            c(Le).Input,
                            {
                              ref_key: "searchInput",
                              ref: _e,
                              value: E.value,
                              "onUpdate:value":
                                k[2] || (k[2] = (I) => (E.value = I)),
                              placeholder:
                                r.value?.placeholder || "Search Docs",
                            },
                            null,
                            8,
                            ["value", "placeholder"],
                          ),
                          d("div", Qi, [
                            d(
                              "button",
                              {
                                class: H([
                                  { active: c($e) },
                                  "toggle-layout-button",
                                ]),
                                type: "button",
                                title: "Display detailed list",
                                onClick: Ae,
                              },
                              [
                                ...(k[5] ||
                                  (k[5] = [
                                    d(
                                      "span",
                                      {
                                        class:
                                          "vpi-layout-list local-search-icon",
                                      },
                                      null,
                                      -1,
                                    ),
                                  ])),
                              ],
                              2,
                            ),
                            d(
                              "button",
                              {
                                disabled: !E.value,
                                class: "clear-button",
                                type: "reset",
                                title: "Reset search",
                                onClick: Ke,
                              },
                              [
                                ...(k[6] ||
                                  (k[6] = [
                                    d(
                                      "span",
                                      { class: "vpi-delete local-search-icon" },
                                      null,
                                      -1,
                                    ),
                                  ])),
                              ],
                              8,
                              Yi,
                            ),
                          ]),
                        ]),
                      ]),
                      body: v(() => [
                        d(
                          "div",
                          {
                            class: H([
                              "search-dialog",
                              { "detail-list": c($e) },
                            ]),
                          },
                          [
                            L(c(Le).List, null, {
                              default: v(() => [
                                e.value.length
                                  ? (l(),
                                    M(
                                      c(Le).Group,
                                      { key: 1, heading: p.value },
                                      {
                                        default: v(() => [
                                          (l(!0),
                                          f(
                                            R,
                                            null,
                                            z(
                                              Y.value,
                                              (I) => (
                                                l(),
                                                M(
                                                  c(Le).Item,
                                                  {
                                                    key: I.route,
                                                    "data-value": I.route,
                                                    onSelect: ge,
                                                  },
                                                  {
                                                    default: v(() => [
                                                      d("div", Xi, [
                                                        d("div", el, [
                                                          d("span", tl, [
                                                            I.meta.title
                                                              ? (l(),
                                                                f(
                                                                  "i",
                                                                  nl,
                                                                  "# ",
                                                                ))
                                                              : $("", !0),
                                                            ce(
                                                              T(I.meta.title),
                                                              1,
                                                            ),
                                                          ]),
                                                          u.value && I.meta.date
                                                            ? (l(),
                                                              f(
                                                                "span",
                                                                sl,
                                                                T(
                                                                  m.value(
                                                                    I.meta.date,
                                                                    c(a),
                                                                  ),
                                                                ),
                                                                1,
                                                              ))
                                                            : $("", !0),
                                                        ]),
                                                        d(
                                                          "div",
                                                          {
                                                            class: "des",
                                                            innerHTML:
                                                              I.meta
                                                                .description,
                                                          },
                                                          null,
                                                          8,
                                                          ol,
                                                        ),
                                                      ]),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["data-value"],
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["heading"],
                                    ))
                                  : (l(),
                                    M(
                                      c(Le).Empty,
                                      { key: 0 },
                                      {
                                        default: v(() => [
                                          ce(
                                            T(
                                              r.value?.emptyText ||
                                                "No results found.",
                                            ),
                                            1,
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                    )),
                              ]),
                              _: 1,
                            }),
                          ],
                          2,
                        ),
                      ]),
                      _: 2,
                    },
                    [
                      e.value.length
                        ? {
                            name: "footer",
                            fn: v(() => [
                              d("div", al, [
                                d("a", rl, [
                                  d(
                                    "span",
                                    il,
                                    T(r.value?.searchBy || "Search by"),
                                    1,
                                  ),
                                  L(Bi, { style: { width: "77px" } }),
                                ]),
                              ]),
                              d("ul", ll, [
                                d("li", null, [
                                  k[7] ||
                                    (k[7] = d(
                                      "kbd",
                                      { class: "command-palette-commands-key" },
                                      [
                                        d(
                                          "svg",
                                          {
                                            width: "15",
                                            height: "15",
                                            "aria-label": "Enter key",
                                            role: "img",
                                          },
                                          [
                                            d(
                                              "g",
                                              {
                                                fill: "none",
                                                stroke: "currentColor",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "1.2",
                                              },
                                              [
                                                d("path", {
                                                  d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3",
                                                }),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                      -1,
                                    )),
                                  d(
                                    "span",
                                    cl,
                                    T(r.value?.toSelect || "to select"),
                                    1,
                                  ),
                                ]),
                                d("li", null, [
                                  k[8] ||
                                    (k[8] = d(
                                      "kbd",
                                      { class: "command-palette-commands-key" },
                                      [
                                        d(
                                          "svg",
                                          {
                                            width: "15",
                                            height: "15",
                                            "aria-label": "Arrow down",
                                            role: "img",
                                          },
                                          [
                                            d(
                                              "g",
                                              {
                                                fill: "none",
                                                stroke: "currentColor",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "1.2",
                                              },
                                              [
                                                d("path", {
                                                  d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3",
                                                }),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                      -1,
                                    )),
                                  k[9] ||
                                    (k[9] = d(
                                      "kbd",
                                      { class: "command-palette-commands-key" },
                                      [
                                        d(
                                          "svg",
                                          {
                                            width: "15",
                                            height: "15",
                                            "aria-label": "Arrow up",
                                            role: "img",
                                          },
                                          [
                                            d(
                                              "g",
                                              {
                                                fill: "none",
                                                stroke: "currentColor",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "1.2",
                                              },
                                              [
                                                d("path", {
                                                  d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3",
                                                }),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                      -1,
                                    )),
                                  d(
                                    "span",
                                    ul,
                                    T(r.value?.toNavigate || "to navigate"),
                                    1,
                                  ),
                                ]),
                                d("li", null, [
                                  k[10] ||
                                    (k[10] = d(
                                      "kbd",
                                      { class: "command-palette-commands-key" },
                                      [
                                        d(
                                          "svg",
                                          {
                                            width: "15",
                                            height: "15",
                                            "aria-label": "Escape key",
                                            role: "img",
                                          },
                                          [
                                            d(
                                              "g",
                                              {
                                                fill: "none",
                                                stroke: "currentColor",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "1.2",
                                              },
                                              [
                                                d("path", {
                                                  d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956",
                                                }),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                      -1,
                                    )),
                                  d(
                                    "span",
                                    dl,
                                    T(r.value?.toClose || "to close"),
                                    1,
                                  ),
                                ]),
                              ]),
                            ]),
                            key: "0",
                          }
                        : void 0,
                    ],
                  ),
                  1032,
                  ["visible"],
                ),
              ]),
              _: 1,
            }),
          ])
        );
      };
    },
  }),
  fl = S(hl, [["__scopeId", "data-v-7152e00d"]]),
  vl = y({
    __name: "VPNavBarSocialLinks",
    setup(t) {
      const { theme: e } = N();
      return (n, s) =>
        c(e).socialLinks
          ? (l(),
            M(
              kt,
              { key: 0, class: "VPNavBarSocialLinks", links: c(e).socialLinks },
              null,
              8,
              ["links"],
            ))
          : $("", !0);
    },
  }),
  ml = S(vl, [["__scopeId", "data-v-0394ad82"]]),
  pl = ["href", "rel", "target"],
  gl = ["innerHTML"],
  kl = { key: 2 },
  yl = y({
    __name: "VPNavBarTitle",
    setup(t) {
      const { site: e, theme: n } = N(),
        { hasSidebar: s } = fe(),
        { currentLang: o } = xe(),
        a = b(() =>
          typeof n.value.logoLink == "string"
            ? n.value.logoLink
            : n.value.logoLink?.link,
        ),
        r = b(() =>
          typeof n.value.logoLink == "string" ? void 0 : n.value.logoLink?.rel,
        ),
        i = b(() =>
          typeof n.value.logoLink == "string"
            ? void 0
            : n.value.logoLink?.target,
        );
      return (u, m) => (
        l(),
        f(
          "div",
          { class: H(["VPNavBarTitle", { "has-sidebar": c(s) }]) },
          [
            d(
              "a",
              {
                class: "title",
                href: a.value ?? c(ft)(c(o).link),
                rel: r.value,
                target: i.value,
              },
              [
                h(u.$slots, "nav-bar-title-before", {}, void 0, !0),
                c(n).logo
                  ? (l(),
                    M(
                      Fe,
                      { key: 0, class: "logo", image: c(n).logo },
                      null,
                      8,
                      ["image"],
                    ))
                  : $("", !0),
                c(n).siteTitle
                  ? (l(),
                    f(
                      "span",
                      { key: 1, innerHTML: c(n).siteTitle },
                      null,
                      8,
                      gl,
                    ))
                  : c(n).siteTitle === void 0
                    ? (l(), f("span", kl, T(c(e).title), 1))
                    : $("", !0),
                h(u.$slots, "nav-bar-title-after", {}, void 0, !0),
              ],
              8,
              pl,
            ),
          ],
          2,
        )
      );
    },
  }),
  bl = S(yl, [["__scopeId", "data-v-1e38c6bc"]]),
  _l = { class: "items" },
  $l = { class: "title" },
  Ll = y({
    __name: "VPNavBarTranslations",
    setup(t) {
      const { theme: e } = N(),
        { localeLinks: n, currentLang: s } = xe({ correspondingLink: !0 });
      return (o, a) =>
        c(n).length && c(s).label
          ? (l(),
            M(
              gt,
              {
                key: 0,
                class: "VPNavBarTranslations",
                icon: "vpi-languages",
                label: c(e).langMenuLabel || "Change language",
              },
              {
                default: v(() => [
                  d("div", _l, [
                    d("p", $l, T(c(s).label), 1),
                    (l(!0),
                    f(
                      R,
                      null,
                      z(
                        c(n),
                        (r) => (
                          l(),
                          M(
                            ze,
                            {
                              key: r.link,
                              item: r,
                              lang: r.lang,
                              hreflang: r.lang,
                              rel: "alternate",
                              dir: r.dir,
                            },
                            null,
                            8,
                            ["item", "lang", "hreflang", "dir"],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["label"],
            ))
          : $("", !0);
    },
  }),
  wl = S(Ll, [["__scopeId", "data-v-fafa8c23"]]),
  Ml = { class: "wrapper" },
  Sl = { class: "container" },
  Cl = { class: "title" },
  Pl = { class: "content" },
  Vl = { class: "content-body" },
  xl = y({
    __name: "VPNavBar",
    props: { isScreenOpen: { type: Boolean } },
    emits: ["toggle-screen"],
    setup(t) {
      const { y: e } = Ft(),
        { isHome: n, hasSidebar: s } = fe();
      return (o, a) => (
        l(),
        f(
          "div",
          {
            class: H([
              "VPNavBar",
              {
                "has-sidebar": c(s),
                home: c(n),
                top: c(e) === 0,
                "screen-open": t.isScreenOpen,
              },
            ]),
          },
          [
            d("div", Ml, [
              d("div", Sl, [
                d("div", Cl, [
                  L(bl, null, {
                    "nav-bar-title-before": v(() => [
                      h(o.$slots, "nav-bar-title-before", {}, void 0, !0),
                    ]),
                    "nav-bar-title-after": v(() => [
                      h(o.$slots, "nav-bar-title-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                ]),
                d("div", Pl, [
                  d("div", Vl, [
                    h(o.$slots, "nav-bar-content-before", {}, void 0, !0),
                    L(fl, { class: "search" }),
                    L(er, { class: "menu" }),
                    L(wl, { class: "translations" }),
                    L(ca, { class: "appearance" }),
                    L(ml, { class: "social-links" }),
                    L(Wa, { class: "extra" }),
                    h(o.$slots, "nav-bar-content-after", {}, void 0, !0),
                    L(
                      qa,
                      {
                        class: "hamburger",
                        active: t.isScreenOpen,
                        onClick:
                          a[0] || (a[0] = (r) => o.$emit("toggle-screen")),
                      },
                      null,
                      8,
                      ["active"],
                    ),
                  ]),
                ]),
              ]),
            ]),
            a[1] ||
              (a[1] = d(
                "div",
                { class: "divider" },
                [d("div", { class: "divider-line" })],
                -1,
              )),
          ],
          2,
        )
      );
    },
  }),
  Il = S(xl, [["__scopeId", "data-v-9ca1369d"]]),
  Al = { key: 0, class: "VPNavScreenAppearance" },
  Nl = { class: "text" },
  Tl = y({
    __name: "VPNavScreenAppearance",
    setup(t) {
      const { site: e, theme: n } = N();
      return (s, o) =>
        c(e).appearance &&
        c(e).appearance !== "force-dark" &&
        c(e).appearance !== "force-auto"
          ? (l(),
            f("div", Al, [
              d("p", Nl, T(c(n).darkModeSwitchLabel || "Appearance"), 1),
              L(mt),
            ]))
          : $("", !0);
    },
  }),
  El = S(Tl, [["__scopeId", "data-v-b44890b2"]]),
  Hl = ["innerHTML"],
  Ol = y({
    __name: "VPNavScreenMenuLink",
    props: { item: {} },
    setup(t) {
      const e = t,
        { page: n } = N(),
        s = b(() =>
          typeof e.item.link == "function" ? e.item.link(n.value) : e.item.link,
        ),
        o = b(() =>
          ue(
            n.value.relativePath,
            e.item.activeMatch || s.value,
            !!e.item.activeMatch,
          ),
        ),
        { closeScreen: a } = We(vt);
      return (r, i) => (
        l(),
        M(
          ae,
          {
            class: H({ VPNavScreenMenuLink: !0, active: o.value }),
            href: s.value,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            onClick: c(a),
          },
          {
            default: v(() => [
              d("span", { innerHTML: t.item.text }, null, 8, Hl),
            ]),
            _: 1,
          },
          8,
          ["class", "href", "target", "rel", "no-icon", "onClick"],
        )
      );
    },
  }),
  Dl = S(Ol, [["__scopeId", "data-v-b924ab8a"]]),
  Fl = ["innerHTML"],
  Bl = y({
    __name: "VPNavScreenMenuGroupLink",
    props: { item: {} },
    setup(t) {
      const e = t,
        { page: n } = N(),
        s = b(() =>
          typeof e.item.link == "function" ? e.item.link(n.value) : e.item.link,
        ),
        o = b(() =>
          ue(
            n.value.relativePath,
            e.item.activeMatch || s.value,
            !!e.item.activeMatch,
          ),
        ),
        { closeScreen: a } = We(vt);
      return (r, i) => (
        l(),
        M(
          ae,
          {
            class: H({ VPNavScreenMenuGroupLink: !0, active: o.value }),
            href: s.value,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            onClick: c(a),
          },
          {
            default: v(() => [
              d("span", { innerHTML: t.item.text }, null, 8, Fl),
            ]),
            _: 1,
          },
          8,
          ["class", "href", "target", "rel", "no-icon", "onClick"],
        )
      );
    },
  }),
  un = S(Bl, [["__scopeId", "data-v-ecf4b472"]]),
  Rl = { class: "VPNavScreenMenuGroupSection" },
  jl = { key: 0, class: "title" },
  Gl = y({
    __name: "VPNavScreenMenuGroupSection",
    props: { text: {}, items: {} },
    setup(t) {
      return (e, n) => (
        l(),
        f("div", Rl, [
          t.text ? (l(), f("p", jl, T(t.text), 1)) : $("", !0),
          (l(!0),
          f(
            R,
            null,
            z(
              t.items,
              (s) => (l(), M(un, { key: s.text, item: s }, null, 8, ["item"])),
            ),
            128,
          )),
        ])
      );
    },
  }),
  Wl = S(Gl, [["__scopeId", "data-v-4b7a798b"]]),
  Ul = ["aria-controls", "aria-expanded"],
  zl = ["innerHTML"],
  ql = ["id"],
  Kl = { key: 0, class: "item" },
  Zl = { key: 1, class: "item" },
  Jl = { key: 2, class: "group" },
  Ql = y({
    __name: "VPNavScreenMenuGroup",
    props: { text: {}, items: {} },
    setup(t) {
      const e = t,
        n = A(!1),
        s = b(() => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`);
      function o() {
        n.value = !n.value;
      }
      return (a, r) => (
        l(),
        f(
          "div",
          { class: H(["VPNavScreenMenuGroup", { open: n.value }]) },
          [
            d(
              "button",
              {
                class: "button",
                "aria-controls": s.value,
                "aria-expanded": n.value,
                onClick: o,
              },
              [
                d(
                  "span",
                  { class: "button-text", innerHTML: t.text },
                  null,
                  8,
                  zl,
                ),
                r[0] ||
                  (r[0] = d(
                    "span",
                    { class: "vpi-plus button-icon" },
                    null,
                    -1,
                  )),
              ],
              8,
              Ul,
            ),
            d(
              "div",
              { id: s.value, class: "items" },
              [
                (l(!0),
                f(
                  R,
                  null,
                  z(
                    t.items,
                    (i) => (
                      l(),
                      f(
                        R,
                        { key: JSON.stringify(i) },
                        [
                          "link" in i
                            ? (l(),
                              f("div", Kl, [
                                L(un, { item: i }, null, 8, ["item"]),
                              ]))
                            : "component" in i
                              ? (l(),
                                f("div", Zl, [
                                  (l(),
                                  M(
                                    oe(i.component),
                                    le({ ref_for: !0 }, i.props, {
                                      "screen-menu": "",
                                    }),
                                    null,
                                    16,
                                  )),
                                ]))
                              : (l(),
                                f("div", Jl, [
                                  L(
                                    Wl,
                                    { text: i.text, items: i.items },
                                    null,
                                    8,
                                    ["text", "items"],
                                  ),
                                ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              ql,
            ),
          ],
          2,
        )
      );
    },
  }),
  Yl = S(Ql, [["__scopeId", "data-v-956364f9"]]),
  Xl = { key: 0, class: "VPNavScreenMenu" },
  ec = y({
    __name: "VPNavScreenMenu",
    setup(t) {
      const { theme: e } = N();
      return (n, s) =>
        c(e).nav
          ? (l(),
            f("nav", Xl, [
              (l(!0),
              f(
                R,
                null,
                z(
                  c(e).nav,
                  (o) => (
                    l(),
                    f(
                      R,
                      { key: JSON.stringify(o) },
                      [
                        "link" in o
                          ? (l(), M(Dl, { key: 0, item: o }, null, 8, ["item"]))
                          : "component" in o
                            ? (l(),
                              M(
                                oe(o.component),
                                le({ key: 1, ref_for: !0 }, o.props, {
                                  "screen-menu": "",
                                }),
                                null,
                                16,
                              ))
                            : (l(),
                              M(
                                Yl,
                                { key: 2, text: o.text || "", items: o.items },
                                null,
                                8,
                                ["text", "items"],
                              )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : $("", !0);
    },
  }),
  tc = y({
    __name: "VPNavScreenSocialLinks",
    setup(t) {
      const { theme: e } = N();
      return (n, s) =>
        c(e).socialLinks
          ? (l(),
            M(
              kt,
              {
                key: 0,
                class: "VPNavScreenSocialLinks",
                links: c(e).socialLinks,
              },
              null,
              8,
              ["links"],
            ))
          : $("", !0);
    },
  }),
  nc = { class: "list" },
  sc = y({
    __name: "VPNavScreenTranslations",
    setup(t) {
      const { localeLinks: e, currentLang: n } = xe({ correspondingLink: !0 }),
        s = A(!1);
      function o() {
        s.value = !s.value;
      }
      return (a, r) =>
        c(e).length && c(n).label
          ? (l(),
            f(
              "div",
              {
                key: 0,
                class: H(["VPNavScreenTranslations", { open: s.value }]),
              },
              [
                d("button", { class: "title", onClick: o }, [
                  r[0] ||
                    (r[0] = d(
                      "span",
                      { class: "vpi-languages icon lang" },
                      null,
                      -1,
                    )),
                  ce(" " + T(c(n).label) + " ", 1),
                  r[1] ||
                    (r[1] = d(
                      "span",
                      { class: "vpi-chevron-down icon chevron" },
                      null,
                      -1,
                    )),
                ]),
                d("ul", nc, [
                  (l(!0),
                  f(
                    R,
                    null,
                    z(
                      c(e),
                      (i) => (
                        l(),
                        f("li", { key: i.link, class: "item" }, [
                          L(
                            ae,
                            {
                              class: "link",
                              href: i.link,
                              lang: i.lang,
                              dir: i.dir,
                            },
                            { default: v(() => [ce(T(i.text), 1)]), _: 2 },
                            1032,
                            ["href", "lang", "dir"],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : $("", !0);
    },
  }),
  oc = S(sc, [["__scopeId", "data-v-a4d9b172"]]),
  ac = { key: 0, class: "VPNavScreen", id: "VPNavScreen" },
  rc = { class: "container" },
  ic = y({
    __name: "VPNavScreen",
    props: { open: { type: Boolean } },
    setup(t) {
      const e = jt(Pe ? document.body : null);
      return (n, s) => (
        l(),
        M(
          Re,
          {
            name: "fade",
            onEnter: s[0] || (s[0] = (o) => (e.value = !0)),
            onAfterLeave: s[1] || (s[1] = (o) => (e.value = !1)),
          },
          {
            default: v(() => [
              t.open
                ? (l(),
                  f("div", ac, [
                    d("div", rc, [
                      h(n.$slots, "nav-screen-content-before", {}, void 0, !0),
                      L(ec, { class: "menu" }),
                      L(oc, { class: "translations" }),
                      L(El, { class: "appearance" }),
                      L(tc, { class: "social-links" }),
                      h(n.$slots, "nav-screen-content-after", {}, void 0, !0),
                    ]),
                  ]))
                : $("", !0),
            ]),
            _: 3,
          },
        )
      );
    },
  }),
  lc = S(ic, [["__scopeId", "data-v-05f3d7bc"]]),
  cc = { key: 0, class: "VPNav" },
  uc = y({
    __name: "VPNav",
    setup(t) {
      const { isScreenOpen: e, closeScreen: n, toggleScreen: s } = Xo(),
        { frontmatter: o } = N(),
        a = b(() => o.value.navbar !== !1);
      return (
        ht(vt, { closeScreen: n }),
        be(() => {
          Pe && document.documentElement.classList.toggle("hide-nav", !a.value);
        }),
        (r, i) =>
          a.value
            ? (l(),
              f("header", cc, [
                L(
                  Il,
                  { "is-screen-open": c(e), onToggleScreen: c(s) },
                  {
                    "nav-bar-title-before": v(() => [
                      h(r.$slots, "nav-bar-title-before", {}, void 0, !0),
                    ]),
                    "nav-bar-title-after": v(() => [
                      h(r.$slots, "nav-bar-title-after", {}, void 0, !0),
                    ]),
                    "nav-bar-content-before": v(() => [
                      h(r.$slots, "nav-bar-content-before", {}, void 0, !0),
                    ]),
                    "nav-bar-content-after": v(() => [
                      h(r.$slots, "nav-bar-content-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ["is-screen-open", "onToggleScreen"],
                ),
                L(
                  lc,
                  { open: c(e) },
                  {
                    "nav-screen-content-before": v(() => [
                      h(r.$slots, "nav-screen-content-before", {}, void 0, !0),
                    ]),
                    "nav-screen-content-after": v(() => [
                      h(r.$slots, "nav-screen-content-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ["open"],
                ),
              ]))
            : $("", !0)
      );
    },
  }),
  dc = S(uc, [["__scopeId", "data-v-9f75dce3"]]),
  hc = ["role", "tabindex"],
  fc = { key: 1, class: "items" },
  vc = y({
    __name: "VPSidebarItem",
    props: { item: {}, depth: {} },
    setup(t) {
      const e = t,
        {
          collapsed: n,
          collapsible: s,
          isLink: o,
          isActiveLink: a,
          hasActiveLink: r,
          hasChildren: i,
          toggle: u,
        } = is(b(() => e.item)),
        m = b(() => (i.value ? "section" : "div")),
        p = b(() => (o.value ? "a" : "div")),
        g = b(() =>
          i.value ? (e.depth + 2 === 7 ? "p" : `h${e.depth + 2}`) : "p",
        ),
        _ = b(() => (o.value ? void 0 : "button")),
        C = b(() => [
          [`level-${e.depth}`],
          { collapsible: s.value },
          { collapsed: n.value },
          { "is-link": o.value },
          { "is-active": a.value },
          { "has-active": r.value },
        ]);
      function P(V) {
        ("key" in V && V.key !== "Enter") || (!e.item.link && u());
      }
      function w() {
        e.item.link && u();
      }
      return (V, B) => {
        const G = me("VPSidebarItem", !0);
        return (
          l(),
          M(
            oe(m.value),
            { class: H(["VPSidebarItem", C.value]) },
            {
              default: v(() => [
                t.item.text
                  ? (l(),
                    f(
                      "div",
                      le(
                        { key: 0, class: "item", role: _.value },
                        In(t.item.items ? { click: P, keydown: P } : {}, !0),
                        { tabindex: t.item.items && 0 },
                      ),
                      [
                        B[1] ||
                          (B[1] = d("div", { class: "indicator" }, null, -1)),
                        t.item.link
                          ? (l(),
                            M(
                              ae,
                              {
                                key: 0,
                                tag: p.value,
                                class: "link",
                                href: t.item.link,
                                rel: t.item.rel,
                                target: t.item.target,
                              },
                              {
                                default: v(() => [
                                  (l(),
                                  M(
                                    oe(g.value),
                                    { class: "text", innerHTML: t.item.text },
                                    null,
                                    8,
                                    ["innerHTML"],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ["tag", "href", "rel", "target"],
                            ))
                          : (l(),
                            M(
                              oe(g.value),
                              { key: 1, class: "text", innerHTML: t.item.text },
                              null,
                              8,
                              ["innerHTML"],
                            )),
                        t.item.collapsed != null &&
                        t.item.items &&
                        t.item.items.length
                          ? (l(),
                            f(
                              "div",
                              {
                                key: 2,
                                class: "caret",
                                role: "button",
                                "aria-label": "toggle section",
                                onClick: w,
                                onKeydown: An(w, ["enter"]),
                                tabindex: "0",
                              },
                              [
                                ...(B[0] ||
                                  (B[0] = [
                                    d(
                                      "span",
                                      { class: "vpi-chevron-right caret-icon" },
                                      null,
                                      -1,
                                    ),
                                  ])),
                              ],
                              32,
                            ))
                          : $("", !0),
                      ],
                      16,
                      hc,
                    ))
                  : $("", !0),
                t.item.items && t.item.items.length
                  ? (l(),
                    f("div", fc, [
                      t.depth < 5
                        ? (l(!0),
                          f(
                            R,
                            { key: 0 },
                            z(
                              t.item.items,
                              (E) => (
                                l(),
                                M(
                                  G,
                                  { key: E.text, item: E, depth: t.depth + 1 },
                                  null,
                                  8,
                                  ["item", "depth"],
                                )
                              ),
                            ),
                            128,
                          ))
                        : $("", !0),
                    ]))
                  : $("", !0),
              ]),
              _: 1,
            },
            8,
            ["class"],
          )
        );
      };
    },
  }),
  mc = S(vc, [["__scopeId", "data-v-d81de50c"]]),
  pc = y({
    __name: "VPSidebarGroup",
    props: { items: {} },
    setup(t) {
      const e = A(!0);
      let n = null;
      return (
        he(() => {
          n = setTimeout(() => {
            ((n = null), (e.value = !1));
          }, 300);
        }),
        Ue(() => {
          n != null && (clearTimeout(n), (n = null));
        }),
        (s, o) => (
          l(!0),
          f(
            R,
            null,
            z(
              t.items,
              (a) => (
                l(),
                f(
                  "div",
                  {
                    key: a.text,
                    class: H(["group", { "no-transition": e.value }]),
                  },
                  [L(mc, { item: a, depth: 0 }, null, 8, ["item"])],
                  2,
                )
              ),
            ),
            128,
          )
        )
      );
    },
  }),
  gc = S(pc, [["__scopeId", "data-v-8d50c081"]]),
  kc = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1",
  },
  yc = y({
    __name: "VPSidebar",
    props: { open: { type: Boolean } },
    setup(t) {
      const { sidebarGroups: e, hasSidebar: n } = fe(),
        s = t,
        o = A(null),
        a = jt(Pe ? document.body : null);
      j(
        [s, o],
        () => {
          s.open ? ((a.value = !0), o.value?.focus()) : (a.value = !1);
        },
        { immediate: !0, flush: "post" },
      );
      const r = A(0);
      return (
        j(
          e,
          () => {
            r.value += 1;
          },
          { deep: !0 },
        ),
        (i, u) =>
          c(n)
            ? (l(),
              f(
                "aside",
                {
                  key: 0,
                  class: H(["VPSidebar", { open: t.open }]),
                  ref_key: "navEl",
                  ref: o,
                  onClick: u[0] || (u[0] = Nn(() => {}, ["stop"])),
                },
                [
                  u[2] || (u[2] = d("div", { class: "curtain" }, null, -1)),
                  d("nav", kc, [
                    u[1] ||
                      (u[1] = d(
                        "span",
                        { class: "visually-hidden", id: "sidebar-aria-label" },
                        " Sidebar Navigation ",
                        -1,
                      )),
                    h(i.$slots, "sidebar-nav-before", {}, void 0, !0),
                    (l(),
                    M(gc, { items: c(e), key: r.value }, null, 8, ["items"])),
                    h(i.$slots, "sidebar-nav-after", {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : $("", !0)
      );
    },
  }),
  bc = S(yc, [["__scopeId", "data-v-af661f50"]]),
  _c = { href: "#VPContent", class: "VPSkipLink visually-hidden" },
  $c = y({
    __name: "VPSkipLink",
    setup(t) {
      const { theme: e } = N(),
        n = Ve(),
        s = A();
      return (
        j(
          () => n.path,
          () => s.value.focus(),
        ),
        (o, a) => (
          l(),
          f(
            R,
            null,
            [
              d(
                "span",
                { ref_key: "backToTop", ref: s, tabindex: "-1" },
                null,
                512,
              ),
              d("a", _c, T(c(e).skipToContentLabel || "Skip to content"), 1),
            ],
            64,
          )
        )
      );
    },
  }),
  Lc = S($c, [["__scopeId", "data-v-331ec75c"]]),
  wc = y({
    __name: "Layout",
    setup(t) {
      const { isOpen: e, open: n, close: s } = rs();
      ls({ closeSidebar: s });
      const { frontmatter: o } = N(),
        a = Tn(),
        r = b(() => !!a["home-hero-image"]);
      return (
        ht(Ut, { heroImageSlotExists: r }),
        (i, u) => {
          const m = me("Content");
          return c(o).layout !== !1
            ? (l(),
              f(
                "div",
                { key: 0, class: H(["Layout", c(o).pageClass]) },
                [
                  h(i.$slots, "layout-top", {}, void 0, !0),
                  L(Lc),
                  L(
                    Dn,
                    { class: "backdrop", show: c(e), onClick: c(s) },
                    null,
                    8,
                    ["show", "onClick"],
                  ),
                  L(dc, null, {
                    "nav-bar-title-before": v(() => [
                      h(i.$slots, "nav-bar-title-before", {}, void 0, !0),
                    ]),
                    "nav-bar-title-after": v(() => [
                      h(i.$slots, "nav-bar-title-after", {}, void 0, !0),
                    ]),
                    "nav-bar-content-before": v(() => [
                      h(i.$slots, "nav-bar-content-before", {}, void 0, !0),
                    ]),
                    "nav-bar-content-after": v(() => [
                      h(i.$slots, "nav-bar-content-after", {}, void 0, !0),
                    ]),
                    "nav-screen-content-before": v(() => [
                      h(i.$slots, "nav-screen-content-before", {}, void 0, !0),
                    ]),
                    "nav-screen-content-after": v(() => [
                      h(i.$slots, "nav-screen-content-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  L(Yo, { open: c(e), onOpenMenu: c(n) }, null, 8, [
                    "open",
                    "onOpenMenu",
                  ]),
                  L(
                    bc,
                    { open: c(e) },
                    {
                      "sidebar-nav-before": v(() => [
                        h(i.$slots, "sidebar-nav-before", {}, void 0, !0),
                      ]),
                      "sidebar-nav-after": v(() => [
                        h(i.$slots, "sidebar-nav-after", {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ["open"],
                  ),
                  L(Oo, null, {
                    "page-top": v(() => [
                      h(i.$slots, "page-top", {}, void 0, !0),
                    ]),
                    "page-bottom": v(() => [
                      h(i.$slots, "page-bottom", {}, void 0, !0),
                    ]),
                    "not-found": v(() => [
                      h(i.$slots, "not-found", {}, void 0, !0),
                    ]),
                    "home-hero-before": v(() => [
                      h(i.$slots, "home-hero-before", {}, void 0, !0),
                    ]),
                    "home-hero-info-before": v(() => [
                      h(i.$slots, "home-hero-info-before", {}, void 0, !0),
                    ]),
                    "home-hero-info": v(() => [
                      h(i.$slots, "home-hero-info", {}, void 0, !0),
                    ]),
                    "home-hero-info-after": v(() => [
                      h(i.$slots, "home-hero-info-after", {}, void 0, !0),
                    ]),
                    "home-hero-actions-after": v(() => [
                      h(i.$slots, "home-hero-actions-after", {}, void 0, !0),
                    ]),
                    "home-hero-actions-before-actions": v(() => [
                      h(
                        i.$slots,
                        "home-hero-actions-before-actions",
                        {},
                        void 0,
                        !0,
                      ),
                    ]),
                    "home-hero-image": v(() => [
                      h(i.$slots, "home-hero-image", {}, void 0, !0),
                    ]),
                    "home-hero-after": v(() => [
                      h(i.$slots, "home-hero-after", {}, void 0, !0),
                    ]),
                    "home-features-before": v(() => [
                      h(i.$slots, "home-features-before", {}, void 0, !0),
                    ]),
                    "home-features-after": v(() => [
                      h(i.$slots, "home-features-after", {}, void 0, !0),
                    ]),
                    "doc-footer-before": v(() => [
                      h(i.$slots, "doc-footer-before", {}, void 0, !0),
                    ]),
                    "doc-before": v(() => [
                      h(i.$slots, "doc-before", {}, void 0, !0),
                    ]),
                    "doc-after": v(() => [
                      h(i.$slots, "doc-after", {}, void 0, !0),
                    ]),
                    "doc-top": v(() => [
                      h(i.$slots, "doc-top", {}, void 0, !0),
                    ]),
                    "doc-bottom": v(() => [
                      h(i.$slots, "doc-bottom", {}, void 0, !0),
                    ]),
                    "aside-top": v(() => [
                      h(i.$slots, "aside-top", {}, void 0, !0),
                    ]),
                    "aside-bottom": v(() => [
                      h(i.$slots, "aside-bottom", {}, void 0, !0),
                    ]),
                    "aside-outline-before": v(() => [
                      h(i.$slots, "aside-outline-before", {}, void 0, !0),
                    ]),
                    "aside-outline-after": v(() => [
                      h(i.$slots, "aside-outline-after", {}, void 0, !0),
                    ]),
                    "aside-ads-before": v(() => [
                      h(i.$slots, "aside-ads-before", {}, void 0, !0),
                    ]),
                    "aside-ads-after": v(() => [
                      h(i.$slots, "aside-ads-after", {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  L(jo),
                  h(i.$slots, "layout-bottom", {}, void 0, !0),
                ],
                2,
              ))
            : (l(), M(m, { key: 1 }));
        }
      );
    },
  }),
  Mc = S(wc, [["__scopeId", "data-v-0cf61682"]]),
  Cc = {
    Layout: Mc,
    enhanceApp: ({ app: t }) => {
      t.component("Badge", En);
    },
  };
export { Cc as t };
