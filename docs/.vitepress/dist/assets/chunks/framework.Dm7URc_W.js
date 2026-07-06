function Xs(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const se = {},
  Nt = [],
  Je = () => {},
  fi = () => !1,
  fn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Vn = (e) => e.startsWith("onUpdate:"),
  he = Object.assign,
  Js = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  el = Object.prototype.hasOwnProperty,
  te = (e, t) => el.call(e, t),
  q = Array.isArray,
  Dt = (e) => un(e) === "[object Map]",
  ui = (e) => un(e) === "[object Set]",
  vr = (e) => un(e) === "[object Date]",
  J = (e) => typeof e == "function",
  ce = (e) => typeof e == "string",
  Ie = (e) => typeof e == "symbol",
  ee = (e) => e !== null && typeof e == "object",
  di = (e) => (ee(e) || J(e)) && J(e.then) && J(e.catch),
  hi = Object.prototype.toString,
  un = (e) => hi.call(e),
  tl = (e) => un(e).slice(8, -1),
  pi = (e) => un(e) === "[object Object]",
  Wn = (e) =>
    ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Tt = Xs(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Un = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  nl = /-\w/g,
  xe = Un((e) => e.replace(nl, (t) => t.slice(1).toUpperCase())),
  sl = /\B([A-Z])/g,
  pt = Un((e) => e.replace(sl, "-$1").toLowerCase()),
  Kn = Un((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Cn = Un((e) => (e ? `on${Kn(e)}` : "")),
  Xe = (e, t) => !Object.is(e, t),
  us = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  gi = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  rl = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  il = (e) => {
    const t = ce(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let yr;
const Bn = () =>
  yr ||
  (yr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Ys(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ce(s) ? al(s) : Ys(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (ce(e) || ee(e)) return e;
}
const ol = /;(?![^(]*\))/g,
  ll = /:([^]+)/,
  cl = /\/\*[^]*?\*\//g;
function al(e) {
  const t = {};
  return (
    e
      .replace(cl, "")
      .split(ol)
      .forEach((n) => {
        if (n) {
          const s = n.split(ll);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function zs(e) {
  let t = "";
  if (ce(e)) t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const s = zs(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const fl =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ul = Xs(fl);
function mi(e) {
  return !!e || e === "";
}
function dl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = Qs(e[s], t[s]);
  return n;
}
function Qs(e, t) {
  if (e === t) return !0;
  let n = vr(e),
    s = vr(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = Ie(e)), (s = Ie(t)), n || s)) return e === t;
  if (((n = q(e)), (s = q(t)), n || s)) return n && s ? dl(e, t) : !1;
  if (((n = ee(e)), (s = ee(t)), n || s)) {
    if (!n || !s) return !1;
    const r = Object.keys(e).length,
      i = Object.keys(t).length;
    if (r !== i) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        c = t.hasOwnProperty(o);
      if ((l && !c) || (!l && c) || !Qs(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
const vi = (e) => !!(e && e.__v_isRef === !0),
  hl = (e) =>
    ce(e)
      ? e
      : e == null
        ? ""
        : q(e) || (ee(e) && (e.toString === hi || !J(e.toString)))
          ? vi(e)
            ? hl(e.value)
            : JSON.stringify(e, yi, 2)
          : String(e),
  yi = (e, t) =>
    vi(t)
      ? yi(e, t.value)
      : Dt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[ds(s, i) + " =>"] = r), n),
              {},
            ),
          }
        : ui(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ds(n)) }
          : Ie(t)
            ? ds(t)
            : ee(t) && !q(t) && !pi(t)
              ? String(t)
              : t,
  ds = (e, t = "") => {
    var n;
    return Ie(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let de;
class pl {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this._warnOnRun = !0),
      (this.__v_skip = !0),
      !t &&
        de &&
        (de.active
          ? ((this.parent = de),
            (this.index = (de.scopes || (de.scopes = [])).push(this) - 1))
          : ((this._active = !1), (this._warnOnRun = !1))));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return ((de = this), t());
      } finally {
        de = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = de), (de = this));
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (de === this) de = this.prevScope;
      else {
        let t = de;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Zs() {
  return de;
}
function gl(e, t = !1) {
  de && de.cleanups.push(e);
}
let ie;
const hs = new WeakSet();
class _i {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      de && (de.active ? de.effects.push(this) : (this.flags &= -2)));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), hs.has(this) && (hs.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || wi(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), _r(this), Si(this));
    const t = ie,
      n = ke;
    ((ie = this), (ke = !0));
    try {
      return this.fn();
    } finally {
      (Ti(this), (ie = t), (ke = n), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) nr(t);
      ((this.deps = this.depsTail = void 0),
        _r(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? hs.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    Os(this) && this.run();
  }
  get dirty() {
    return Os(this);
  }
}
let bi = 0,
  Jt,
  Yt;
function wi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = Yt), (Yt = e));
    return;
  }
  ((e.next = Jt), (Jt = e));
}
function er() {
  bi++;
}
function tr() {
  if (--bi > 0) return;
  if (Yt) {
    let t = Yt;
    for (Yt = void 0; t; ) {
      const n = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = n));
    }
  }
  let e;
  for (; Jt; ) {
    let t = Jt;
    for (Jt = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function Ti(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    (s.version === -1 ? (s === n && (n = r), nr(s), ml(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r));
  }
  ((e.deps = t), (e.depsTail = n));
}
function Os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Ei(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Ei(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === en) ||
    ((e.globalVersion = en),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Os(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = ie,
    s = ke;
  ((ie = e), (ke = !0));
  try {
    Si(e);
    const r = e.fn(e._value);
    (t.version === 0 || Xe(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    ((ie = n), (ke = s), Ti(e), (e.flags &= -3));
  }
}
function nr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) nr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ml(e) {
  const { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let ke = !0;
const xi = [];
function nt() {
  (xi.push(ke), (ke = !1));
}
function st() {
  const e = xi.pop();
  ke = e === void 0 ? !0 : e;
}
function _r(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = ie;
    ie = void 0;
    try {
      t();
    } finally {
      ie = n;
    }
  }
}
let en = 0;
class vl {
  constructor(t, n) {
    ((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class qn {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(t) {
    if (!ie || !ke || ie === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ie)
      ((n = this.activeLink = new vl(ie, this)),
        ie.deps
          ? ((n.prevDep = ie.depsTail),
            (ie.depsTail.nextDep = n),
            (ie.depsTail = n))
          : (ie.deps = ie.depsTail = n),
        Ci(n));
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      ((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ie.depsTail),
        (n.nextDep = void 0),
        (ie.depsTail.nextDep = n),
        (ie.depsTail = n),
        ie.deps === n && (ie.deps = s));
    }
    return n;
  }
  trigger(t) {
    (this.version++, en++, this.notify(t));
  }
  notify(t) {
    er();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      tr();
    }
  }
}
function Ci(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) Ci(s);
    }
    const n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
const Ln = new WeakMap(),
  Et = Symbol(""),
  Ls = Symbol(""),
  tn = Symbol("");
function ye(e, t, n) {
  if (ke && ie) {
    let s = Ln.get(e);
    s || Ln.set(e, (s = new Map()));
    let r = s.get(n);
    (r || (s.set(n, (r = new qn())), (r.map = s), (r.key = n)), r.track());
  }
}
function et(e, t, n, s, r, i) {
  const o = Ln.get(e);
  if (!o) {
    en++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((er(), t === "clear")) o.forEach(l);
  else {
    const c = q(e),
      f = c && Wn(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((d, m) => {
        (m === "length" || m === tn || (!Ie(m) && m >= a)) && l(d);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(tn)), t)
      ) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Et)), Dt(e) && l(o.get(Ls)));
          break;
        case "delete":
          c || (l(o.get(Et)), Dt(e) && l(o.get(Ls)));
          break;
        case "set":
          Dt(e) && l(o.get(Et));
          break;
      }
  }
  tr();
}
function yl(e, t) {
  const n = Ln.get(e);
  return n && n.get(t);
}
function Lt(e) {
  const t = Z(e);
  return t === e ? t : (ye(t, "iterate", tn), Le(e) ? t : t.map(Ve));
}
function Gn(e) {
  return (ye((e = Z(e)), "iterate", tn), e);
}
function Ge(e, t) {
  return rt(e) ? $t(ft(e) ? Ve(t) : t) : Ve(t);
}
const _l = {
  __proto__: null,
  [Symbol.iterator]() {
    return ps(this, Symbol.iterator, (e) => Ge(this, e));
  },
  concat(...e) {
    return Lt(this).concat(...e.map((t) => (q(t) ? Lt(t) : t)));
  },
  entries() {
    return ps(this, "entries", (e) => ((e[1] = Ge(this, e[1])), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ge(this, s)),
      arguments,
    );
  },
  find(e, t) {
    return Ye(this, "find", e, t, (n) => Ge(this, n), arguments);
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(this, "findLast", e, t, (n) => Ge(this, n), arguments);
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gs(this, "includes", e);
  },
  indexOf(...e) {
    return gs(this, "indexOf", e);
  },
  join(e) {
    return Lt(this).join(e);
  },
  lastIndexOf(...e) {
    return gs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wt(this, "pop");
  },
  push(...e) {
    return Wt(this, "push", e);
  },
  reduce(e, ...t) {
    return br(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return br(this, "reduceRight", e, t);
  },
  shift() {
    return Wt(this, "shift");
  },
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wt(this, "splice", e);
  },
  toReversed() {
    return Lt(this).toReversed();
  },
  toSorted(e) {
    return Lt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Lt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wt(this, "unshift", e);
  },
  values() {
    return ps(this, "values", (e) => Ge(this, e));
  },
};
function ps(e, t, n) {
  const s = Gn(e),
    r = s[t]();
  return (
    s !== e &&
      !Le(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return (i.done || (i.value = n(i.value)), i);
      })),
    r
  );
}
const bl = Array.prototype;
function Ye(e, t, n, s, r, i) {
  const o = Gn(e),
    l = o !== e && !Le(e),
    c = o[t];
  if (c !== bl[t]) {
    const d = c.apply(e, i);
    return l ? Ve(d) : d;
  }
  let f = n;
  o !== e &&
    (l
      ? (f = function (d, m) {
          return n.call(this, Ge(e, d), m, e);
        })
      : n.length > 2 &&
        (f = function (d, m) {
          return n.call(this, d, m, e);
        }));
  const a = c.call(o, f, s);
  return l && r ? r(a) : a;
}
function br(e, t, n, s) {
  const r = Gn(e),
    i = r !== e && !Le(e);
  let o = n,
    l = !1;
  r !== e &&
    (i
      ? ((l = s.length === 0),
        (o = function (f, a, d) {
          return (
            l && ((l = !1), (f = Ge(e, f))),
            n.call(this, f, Ge(e, a), d, e)
          );
        }))
      : n.length > 3 &&
        (o = function (f, a, d) {
          return n.call(this, f, a, d, e);
        }));
  const c = r[t](o, ...s);
  return l ? Ge(e, c) : c;
}
function gs(e, t, n) {
  const s = Z(e);
  ye(s, "iterate", tn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Yn(n[0])
    ? ((n[0] = Z(n[0])), s[t](...n))
    : r;
}
function Wt(e, t, n = []) {
  (nt(), er());
  const s = Z(e)[t].apply(e, n);
  return (tr(), st(), s);
}
const wl = Xs("__proto__,__v_isRef,__isVue"),
  Ai = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ie),
  );
function Sl(e) {
  Ie(e) || (e = String(e));
  const t = Z(this);
  return (ye(t, "has", e), t.hasOwnProperty(e));
}
class Mi {
  constructor(t = !1, n = !1) {
    ((this._isReadonly = t), (this._isShallow = n));
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? Ni : Ii) : i ? Pi : Li).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = q(t);
    if (!r) {
      let c;
      if (o && (c = _l[n])) return c;
      if (n === "hasOwnProperty") return Sl;
    }
    const l = Reflect.get(t, n, fe(t) ? t : s);
    if ((Ie(n) ? Ai.has(n) : wl(n)) || (r || ye(t, "get", n), i)) return l;
    if (fe(l)) {
      const c = o && Wn(n) ? l : l.value;
      return r && ee(c) ? nn(c) : c;
    }
    return ee(l) ? (r ? nn(l) : ut(l)) : l;
  }
}
class Ri extends Mi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = q(t) && Wn(n);
    if (!this._isShallow) {
      const f = rt(i);
      if ((!Le(s) && !rt(s) && ((i = Z(i)), (s = Z(s))), !o && fe(i) && !fe(s)))
        return (f || (i.value = s), !0);
    }
    const l = o ? Number(n) < t.length : te(t, n),
      c = Reflect.set(t, n, s, fe(t) ? t : r);
    return (
      t === Z(r) && (l ? Xe(s, i) && et(t, "set", n, s) : et(t, "add", n, s)),
      c
    );
  }
  deleteProperty(t, n) {
    const s = te(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return (r && s && et(t, "delete", n, void 0), r);
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return ((!Ie(n) || !Ai.has(n)) && ye(t, "has", n), s);
  }
  ownKeys(t) {
    return (ye(t, "iterate", q(t) ? "length" : Et), Reflect.ownKeys(t));
  }
}
class Oi extends Mi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Tl = new Ri(),
  El = new Oi(),
  xl = new Ri(!0),
  Cl = new Oi(!0),
  Ps = (e) => e,
  gn = (e) => Reflect.getPrototypeOf(e);
function Al(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Z(r),
      o = Dt(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      c = e === "keys" && o,
      f = r[e](...s),
      a = n ? Ps : t ? $t : Ve;
    return (
      !t && ye(i, "iterate", c ? Ls : Et),
      he(Object.create(f), {
        next() {
          const { value: d, done: m } = f.next();
          return m
            ? { value: d, done: m }
            : { value: l ? [a(d[0]), a(d[1])] : a(d), done: m };
        },
      })
    );
  };
}
function mn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ml(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = Z(i),
        l = Z(r);
      e || (Xe(r, l) && ye(o, "get", r), ye(o, "get", l));
      const { has: c } = gn(o),
        f = t ? Ps : e ? $t : Ve;
      if (c.call(o, r)) return f(i.get(r));
      if (c.call(o, l)) return f(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return (!e && ye(Z(r), "iterate", Et), r.size);
    },
    has(r) {
      const i = this.__v_raw,
        o = Z(i),
        l = Z(r);
      return (
        e || (Xe(r, l) && ye(o, "has", r), ye(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = Z(l),
        f = t ? Ps : e ? $t : Ve;
      return (
        !e && ye(c, "iterate", Et),
        l.forEach((a, d) => r.call(i, f(a), f(d), o))
      );
    },
  };
  return (
    he(
      n,
      e
        ? {
            add: mn("add"),
            set: mn("set"),
            delete: mn("delete"),
            clear: mn("clear"),
          }
        : {
            add(r) {
              const i = Z(this),
                o = gn(i),
                l = Z(r),
                c = !t && !Le(r) && !rt(r) ? l : r;
              return (
                o.has.call(i, c) ||
                  (Xe(r, c) && o.has.call(i, r)) ||
                  (Xe(l, c) && o.has.call(i, l)) ||
                  (i.add(c), et(i, "add", c, c)),
                this
              );
            },
            set(r, i) {
              !t && !Le(i) && !rt(i) && (i = Z(i));
              const o = Z(this),
                { has: l, get: c } = gn(o);
              let f = l.call(o, r);
              f || ((r = Z(r)), (f = l.call(o, r)));
              const a = c.call(o, r);
              return (
                o.set(r, i),
                f ? Xe(i, a) && et(o, "set", r, i) : et(o, "add", r, i),
                this
              );
            },
            delete(r) {
              const i = Z(this),
                { has: o, get: l } = gn(i);
              let c = o.call(i, r);
              (c || ((r = Z(r)), (c = o.call(i, r))), l && l.call(i, r));
              const f = i.delete(r);
              return (c && et(i, "delete", r, void 0), f);
            },
            clear() {
              const r = Z(this),
                i = r.size !== 0,
                o = r.clear();
              return (i && et(r, "clear", void 0, void 0), o);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = Al(r, e, t);
    }),
    n
  );
}
function Xn(e, t) {
  const n = Ml(e, t);
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(te(n, r) && r in s ? n : s, r, i);
}
const Rl = { get: Xn(!1, !1) },
  Ol = { get: Xn(!1, !0) },
  Ll = { get: Xn(!0, !1) },
  Pl = { get: Xn(!0, !0) },
  Li = new WeakMap(),
  Pi = new WeakMap(),
  Ii = new WeakMap(),
  Ni = new WeakMap();
function Il(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ut(e) {
  return rt(e) ? e : Jn(e, !1, Tl, Rl, Li);
}
function Nl(e) {
  return Jn(e, !1, xl, Ol, Pi);
}
function nn(e) {
  return Jn(e, !0, El, Ll, Ii);
}
function Dl(e) {
  return Jn(e, !0, Cl, Pl, Ni);
}
function Jn(e, t, n, s, r) {
  if (
    !ee(e) ||
    (e.__v_raw && !(t && e.__v_isReactive)) ||
    e.__v_skip ||
    !Object.isExtensible(e)
  )
    return e;
  const i = r.get(e);
  if (i) return i;
  const o = Il(tl(e));
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return (r.set(e, l), l);
}
function ft(e) {
  return rt(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Le(e) {
  return !!(e && e.__v_isShallow);
}
function Yn(e) {
  return e ? !!e.__v_raw : !1;
}
function Z(e) {
  const t = e && e.__v_raw;
  return t ? Z(t) : e;
}
function An(e) {
  return (
    !te(e, "__v_skip") && Object.isExtensible(e) && gi(e, "__v_skip", !0),
    e
  );
}
const Ve = (e) => (ee(e) ? ut(e) : e),
  $t = (e) => (ee(e) ? nn(e) : e);
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function xt(e) {
  return Di(e, !1);
}
function Ce(e) {
  return Di(e, !0);
}
function Di(e, t) {
  return fe(e) ? e : new Fl(e, t);
}
class Fl {
  constructor(t, n) {
    ((this.dep = new qn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Z(t)),
      (this._value = n ? t : Ve(t)),
      (this.__v_isShallow = n));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Le(t) || rt(t);
    ((t = s ? t : Z(t)),
      Xe(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ve(t)),
        this.dep.trigger()));
  }
}
function zn(e) {
  return fe(e) ? e.value : e;
}
function le(e) {
  return J(e) ? e() : zn(e);
}
const Hl = {
  get: (e, t, n) => (t === "__v_raw" ? e : zn(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Fi(e) {
  return ft(e) ? e : new Proxy(e, Hl);
}
class $l {
  constructor(t) {
    ((this.__v_isRef = !0), (this._value = void 0));
    const n = (this.dep = new qn()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    ((this._get = s), (this._set = r));
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function jl(e) {
  return new $l(e);
}
function Jf(e) {
  const t = q(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Hi(e, n);
  return t;
}
class kl {
  constructor(t, n, s) {
    ((this._object = t),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0),
      (this._key = Ie(n) ? n : String(n)),
      (this._raw = Z(t)));
    let r = !0,
      i = t;
    if (!q(t) || Ie(this._key) || !Wn(this._key))
      do r = !Yn(i) || Le(i);
      while (r && (i = i.__v_raw));
    this._shallow = r;
  }
  get value() {
    let t = this._object[this._key];
    return (
      this._shallow && (t = zn(t)),
      (this._value = t === void 0 ? this._defaultValue : t)
    );
  }
  set value(t) {
    if (this._shallow && fe(this._raw[this._key])) {
      const n = this._object[this._key];
      if (fe(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return yl(this._raw, this._key);
  }
}
class Vl {
  constructor(t) {
    ((this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0));
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Wl(e, t, n) {
  return fe(e)
    ? e
    : J(e)
      ? new Vl(e)
      : ee(e) && arguments.length > 1
        ? Hi(e, t, n)
        : xt(e);
}
function Hi(e, t, n) {
  return new kl(e, t, n);
}
class Ul {
  constructor(t, n, s) {
    ((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new qn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = en - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ie !== this))
      return (wi(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (Ei(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Kl(e, t, n = !1) {
  let s, r;
  return (J(e) ? (s = e) : ((s = e.get), (r = e.set)), new Ul(s, r, n));
}
const vn = {},
  Pn = new WeakMap();
let bt;
function Bl(e, t = !1, n = bt) {
  if (n) {
    let s = Pn.get(n);
    (s || Pn.set(n, (s = [])), s.push(e));
  }
}
function ql(e, t, n = se) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: l,
      call: c,
    } = n,
    f = (g) => (r ? g : Le(g) || r === !1 || r === 0 ? tt(g, 1) : tt(g));
  let a,
    d,
    m,
    _,
    M = !1,
    R = !1;
  if (
    (fe(e)
      ? ((d = () => e.value), (M = Le(e)))
      : ft(e)
        ? ((d = () => f(e)), (M = !0))
        : q(e)
          ? ((R = !0),
            (M = e.some((g) => ft(g) || Le(g))),
            (d = () =>
              e.map((g) => {
                if (fe(g)) return g.value;
                if (ft(g)) return f(g);
                if (J(g)) return c ? c(g, 2) : g();
              })))
          : J(e)
            ? t
              ? (d = c ? () => c(e, 2) : e)
              : (d = () => {
                  if (m) {
                    nt();
                    try {
                      m();
                    } finally {
                      st();
                    }
                  }
                  const g = bt;
                  bt = a;
                  try {
                    return c ? c(e, 3, [_]) : e(_);
                  } finally {
                    bt = g;
                  }
                })
            : (d = Je),
    t && r)
  ) {
    const g = d,
      x = r === !0 ? 1 / 0 : r;
    d = () => tt(g(), x);
  }
  const H = Zs(),
    U = () => {
      (a.stop(), H && H.active && Js(H.effects, a));
    };
  if (i && t) {
    const g = t;
    t = (...x) => {
      (g(...x), U());
    };
  }
  let C = R ? new Array(e.length).fill(vn) : vn;
  const p = (g) => {
    if (!(!(a.flags & 1) || (!a.dirty && !g)))
      if (t) {
        const x = a.run();
        if (r || M || (R ? x.some((F, A) => Xe(F, C[A])) : Xe(x, C))) {
          m && m();
          const F = bt;
          bt = a;
          try {
            const A = [x, C === vn ? void 0 : R && C[0] === vn ? [] : C, _];
            ((C = x), c ? c(t, 3, A) : t(...A));
          } finally {
            bt = F;
          }
        }
      } else a.run();
  };
  return (
    l && l(p),
    (a = new _i(d)),
    (a.scheduler = o ? () => o(p, !1) : p),
    (_ = (g) => Bl(g, !1, a)),
    (m = a.onStop =
      () => {
        const g = Pn.get(a);
        if (g) {
          if (c) c(g, 4);
          else for (const x of g) x();
          Pn.delete(a);
        }
      }),
    t ? (s ? p(!0) : (C = a.run())) : o ? o(p.bind(null, !0), !0) : a.run(),
    (U.pause = a.pause.bind(a)),
    (U.resume = a.resume.bind(a)),
    (U.stop = U),
    U
  );
}
function tt(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !ee(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, fe(e))) tt(e.value, t, n);
  else if (q(e)) for (let s = 0; s < e.length; s++) tt(e[s], t, n);
  else if (ui(e) || Dt(e))
    e.forEach((s) => {
      tt(s, t, n);
    });
  else if (pi(e)) {
    for (const s in e) tt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && tt(e[s], t, n);
  }
  return e;
}
function dn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Qn(r, t, n);
  }
}
function $e(e, t, n, s) {
  if (J(e)) {
    const r = dn(e, t, n, s);
    return (
      r &&
        di(r) &&
        r.catch((i) => {
          Qn(i, t, n);
        }),
      r
    );
  }
  if (q(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push($e(e[i], t, n, s));
    return r;
  }
}
function Qn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || se;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, c, f) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      (nt(), dn(i, null, 10, [e, c, f]), st());
      return;
    }
  }
  Gl(e, n, r, s, o);
}
function Gl(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Se = [];
let Be = -1;
const Ft = [];
let ct = null,
  It = 0;
const $i = Promise.resolve();
let In = null;
function Zn(e) {
  const t = In || $i;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xl(e) {
  let t = Be + 1,
    n = Se.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Se[s],
      i = sn(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function sr(e) {
  if (!(e.flags & 1)) {
    const t = sn(e),
      n = Se[Se.length - 1];
    (!n || (!(e.flags & 2) && t >= sn(n)) ? Se.push(e) : Se.splice(Xl(t), 0, e),
      (e.flags |= 1),
      ji());
  }
}
function ji() {
  In || (In = $i.then(ki));
}
function Jl(e) {
  (q(e)
    ? Ft.push(...e)
    : ct && e.id === -1
      ? ct.splice(It + 1, 0, e)
      : e.flags & 1 || (Ft.push(e), (e.flags |= 1)),
    ji());
}
function wr(e, t, n = Be + 1) {
  for (; n < Se.length; n++) {
    const s = Se[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      (Se.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2));
    }
  }
}
function Nn(e) {
  if (Ft.length) {
    const t = [...new Set(Ft)].sort((n, s) => sn(n) - sn(s));
    if (((Ft.length = 0), ct)) {
      ct.push(...t);
      return;
    }
    for (ct = t, It = 0; It < ct.length; It++) {
      const n = ct[It];
      (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2));
    }
    ((ct = null), (It = 0));
  }
}
const sn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ki(e) {
  try {
    for (Be = 0; Be < Se.length; Be++) {
      const t = Se[Be];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        dn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < Se.length; Be++) {
      const t = Se[Be];
      t && (t.flags &= -2);
    }
    ((Be = -1),
      (Se.length = 0),
      Nn(),
      (In = null),
      (Se.length || Ft.length) && ki());
  }
}
let me = null,
  Vi = null;
function Dn(e) {
  const t = me;
  return ((me = e), (Vi = (e && e.type.__scopeId) || null), t);
}
function Yl(e, t = me, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && $n(-1);
    const i = Dn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      (Dn(i), s._d && $n(1));
    }
    return o;
  };
  return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function Yf(e, t) {
  if (me === null) return e;
  const n = is(me),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = se] = t[r];
    i &&
      (J(i) && (i = { mounted: i, updated: i }),
      i.deep && tt(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function qe(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (nt(), $e(c, n, 8, [e.el, l, e, t]), st());
  }
}
function zl(e, t) {
  if (_e) {
    let n = _e.provides;
    const s = _e.parent && _e.parent.provides;
    (s === n && (n = _e.provides = Object.create(s)), (n[e] = t));
  }
}
function Ct(e, t, n = !1) {
  const s = gt();
  if (s || Mt) {
    let r = Mt
      ? Mt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && J(t) ? t.call(s && s.proxy) : t;
  }
}
function Wi() {
  return !!(gt() || Mt);
}
const Ql = Symbol.for("v-scx"),
  Zl = () => Ct(Ql);
function Ui(e, t) {
  return es(e, null, t);
}
function zf(e, t) {
  return es(e, null, { flush: "post" });
}
function Pe(e, t, n) {
  return es(e, t, n);
}
function es(e, t, n = se) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = he({}, n),
    c = (t && s) || (!t && i !== "post");
  let f;
  if (cn) {
    if (i === "sync") {
      const _ = Zl();
      f = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {};
      return ((_.stop = Je), (_.resume = Je), (_.pause = Je), _);
    }
  }
  const a = _e;
  l.call = (_, M, R) => $e(_, a, M, R);
  let d = !1;
  (i === "post"
    ? (l.scheduler = (_) => {
        we(_, a && a.suspense);
      })
    : i !== "sync" &&
      ((d = !0),
      (l.scheduler = (_, M) => {
        M ? _() : sr(_);
      })),
    (l.augmentJob = (_) => {
      (t && (_.flags |= 4),
        d && ((_.flags |= 2), a && ((_.id = a.uid), (_.i = a))));
    }));
  const m = ql(e, t, l);
  return (cn && (f ? f.push(m) : c && m()), m);
}
function ec(e, t, n) {
  const s = this.proxy,
    r = ce(e) ? (e.includes(".") ? Ki(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  J(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = hn(this),
    l = es(r, i.bind(s), n);
  return (o(), l);
}
function Ki(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const lt = new WeakMap(),
  Bi = Symbol("_vte"),
  qi = (e) => e.__isTeleport,
  wt = (e) => e && (e.disabled || e.disabled === ""),
  tc = (e) => e && (e.defer || e.defer === ""),
  Sr = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  Tr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Is = (e, t) => {
    const n = e && e.to;
    return ce(n) ? (t ? t(n) : null) : n;
  },
  nc = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, s, r, i, o, l, c, f) {
      const {
          mc: a,
          pc: d,
          pbc: m,
          o: {
            insert: _,
            querySelector: M,
            createText: R,
            createComment: H,
            parentNode: U,
          },
        } = f,
        C = wt(t.props);
      let { dynamicChildren: p } = t;
      const g = (A, j, y) => {
          A.shapeFlag & 16 && a(A.children, j, y, r, i, o, l, c);
        },
        x = (A = t) => {
          const j = wt(A.props),
            y = (A.target = Is(A.props, M)),
            O = Ns(y, A, R, _);
          y &&
            (o !== "svg" && Sr(y)
              ? (o = "svg")
              : o !== "mathml" && Tr(y) && (o = "mathml"),
            r &&
              r.isCE &&
              (
                r.ce._teleportTargets || (r.ce._teleportTargets = new Set())
              ).add(y),
            j || (g(A, y, O), qt(A, !1)));
        },
        F = (A) => {
          const j = () => {
            if (lt.get(A) === j) {
              if ((lt.delete(A), wt(A.props))) {
                const y = U(A.el) || n;
                (g(A, y, A.anchor), qt(A, !0));
              }
              x(A);
            }
          };
          (lt.set(A, j), we(j, i));
        };
      if (e == null) {
        const A = (t.el = R("")),
          j = (t.anchor = R(""));
        if ((_(A, n, s), _(j, n, s), tc(t.props) || (i && i.pendingBranch))) {
          F(t);
          return;
        }
        (C && (g(t, n, j), qt(t, !0)), x());
      } else {
        t.el = e.el;
        const A = (t.anchor = e.anchor),
          j = lt.get(e);
        if (j) {
          ((j.flags |= 8), lt.delete(e), F(t));
          return;
        }
        t.targetStart = e.targetStart;
        const y = (t.target = e.target),
          O = (t.targetAnchor = e.targetAnchor),
          k = wt(e.props),
          T = k ? n : y,
          W = k ? A : O;
        if (
          (o === "svg" || Sr(y)
            ? (o = "svg")
            : (o === "mathml" || Tr(y)) && (o = "mathml"),
          p
            ? (m(e.dynamicChildren, p, T, r, i, o, l), or(e, t, !0))
            : c || d(e, t, T, W, r, i, o, l, !1),
          C)
        )
          k
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : yn(t, n, A, f, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const I = (t.target = Is(t.props, M));
          I && yn(t, I, null, f, 0);
        } else k && yn(t, y, O, f, 1);
        qt(t, C);
      }
    },
    remove(e, t, n, { um: s, o: { remove: r } }, i) {
      const {
          shapeFlag: o,
          children: l,
          anchor: c,
          targetStart: f,
          targetAnchor: a,
          target: d,
          props: m,
        } = e,
        _ = i || !wt(m),
        M = lt.get(e);
      if (
        (M && ((M.flags |= 8), lt.delete(e)),
        d && (r(f), r(a)),
        i && r(c),
        !M && o & 16)
      )
        for (let R = 0; R < l.length; R++) {
          const H = l[R];
          s(H, t, n, _, !!H.dynamicChildren);
        }
    },
    move: yn,
    hydrate: sc,
  };
function yn(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: f, props: a } = e,
    d = i === 2;
  if ((d && s(o, t, n), !lt.has(e) && (!d || wt(a)) && c & 16))
    for (let m = 0; m < f.length; m++) r(f[m], t, n, 2);
  d && s(l, t, n);
}
function sc(
  e,
  t,
  n,
  s,
  r,
  i,
  {
    o: {
      nextSibling: o,
      parentNode: l,
      querySelector: c,
      insert: f,
      createText: a,
    },
  },
  d,
) {
  function m(H, U) {
    let C = U;
    for (; C; ) {
      if (C && C.nodeType === 8) {
        if (C.data === "teleport start anchor") t.targetStart = C;
        else if (C.data === "teleport anchor") {
          ((t.targetAnchor = C),
            (H._lpa = t.targetAnchor && o(t.targetAnchor)));
          break;
        }
      }
      C = o(C);
    }
  }
  function _(H, U) {
    U.anchor = d(o(H), U, l(H), n, s, r, i);
  }
  const M = (t.target = Is(t.props, c)),
    R = wt(t.props);
  if (M) {
    const H = M._lpa || M.firstChild;
    (t.shapeFlag & 16 &&
      (R
        ? (_(e, t),
          m(M, H),
          t.targetAnchor || Ns(M, t, a, f, l(e) === M ? e : null))
        : ((t.anchor = o(e)),
          m(M, H),
          t.targetAnchor || Ns(M, t, a, f),
          d(H && o(H), t, M, n, s, r, i))),
      qt(t, R));
  } else
    R &&
      t.shapeFlag & 16 &&
      (_(e, t), (t.targetStart = e), (t.targetAnchor = o(e)));
  return t.anchor && o(t.anchor);
}
const Qf = nc;
function qt(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, r;
    for (
      t
        ? ((s = e.el), (r = e.anchor))
        : ((s = e.targetStart), (r = e.targetAnchor));
      s && s !== r;
    )
      (s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid),
        (s = s.nextSibling));
    n.ut();
  }
}
function Ns(e, t, n, s, r = null) {
  const i = (t.targetStart = n("")),
    o = (t.targetAnchor = n(""));
  return ((i[Bi] = o), e && (s(i, e, r), s(o, e, r)), o);
}
const Fe = Symbol("_leaveCb"),
  Ut = Symbol("_enterCb");
function rc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    jt(() => {
      e.isMounted = !0;
    }),
    to(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Ne = [Function, Array],
  Gi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ne,
    onEnter: Ne,
    onAfterEnter: Ne,
    onEnterCancelled: Ne,
    onBeforeLeave: Ne,
    onLeave: Ne,
    onAfterLeave: Ne,
    onLeaveCancelled: Ne,
    onBeforeAppear: Ne,
    onAppear: Ne,
    onAfterAppear: Ne,
    onAppearCancelled: Ne,
  },
  Xi = (e) => {
    const t = e.subTree;
    return t.component ? Xi(t.component) : t;
  },
  ic = {
    name: "BaseTransition",
    props: Gi,
    setup(e, { slots: t }) {
      const n = gt(),
        s = rc();
      return () => {
        const r = t.default && zi(t.default(), !0),
          i = r && r.length ? Ji(r) : n.subTree ? Xc() : void 0;
        if (!i) return;
        const o = Z(e),
          { mode: l } = o;
        if (s.isLeaving) return ms(i);
        const c = Er(i);
        if (!c) return ms(i);
        let f = Ds(c, o, s, n, (d) => (f = d));
        c.type !== ge && rn(c, f);
        let a = n.subTree && Er(n.subTree);
        if (a && a.type !== ge && !St(a, c) && Xi(n).type !== ge) {
          let d = Ds(a, o, s, n);
          if ((rn(a, d), l === "out-in" && c.type !== ge))
            return (
              (s.isLeaving = !0),
              (d.afterLeave = () => {
                ((s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete d.afterLeave,
                  (a = void 0));
              }),
              ms(i)
            );
          l === "in-out" && c.type !== ge
            ? (d.delayLeave = (m, _, M) => {
                const R = Yi(s, a);
                ((R[String(a.key)] = a),
                  (m[Fe] = () => {
                    (_(),
                      (m[Fe] = void 0),
                      delete f.delayedLeave,
                      (a = void 0));
                  }),
                  (f.delayedLeave = () => {
                    (M(), delete f.delayedLeave, (a = void 0));
                  }));
              })
            : (a = void 0);
        } else a && (a = void 0);
        return i;
      };
    },
  };
function Ji(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ge) {
        t = n;
        break;
      }
  }
  return t;
}
const oc = ic;
function Yi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return (s || ((s = Object.create(null)), n.set(t.type, s)), s);
}
function Ds(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: f,
      onAfterEnter: a,
      onEnterCancelled: d,
      onBeforeLeave: m,
      onLeave: _,
      onAfterLeave: M,
      onLeaveCancelled: R,
      onBeforeAppear: H,
      onAppear: U,
      onAfterAppear: C,
      onAppearCancelled: p,
    } = t,
    g = String(e.key),
    x = Yi(n, e),
    F = (y, O) => {
      y && $e(y, s, 9, O);
    },
    A = (y, O) => {
      const k = O[1];
      (F(y, O),
        q(y) ? y.every((T) => T.length <= 1) && k() : y.length <= 1 && k());
    },
    j = {
      mode: o,
      persisted: l,
      beforeEnter(y) {
        let O = c;
        if (!n.isMounted)
          if (i) O = H || c;
          else return;
        y[Fe] && y[Fe](!0);
        const k = x[g];
        (k && St(e, k) && k.el[Fe] && k.el[Fe](), F(O, [y]));
      },
      enter(y) {
        if (x[g] === e) return;
        let O = f,
          k = a,
          T = d;
        if (!n.isMounted)
          if (i) ((O = U || f), (k = C || a), (T = p || d));
          else return;
        let W = !1;
        y[Ut] = (K) => {
          W ||
            ((W = !0),
            K ? F(T, [y]) : F(k, [y]),
            j.delayedLeave && j.delayedLeave(),
            (y[Ut] = void 0));
        };
        const I = y[Ut].bind(null, !1);
        O ? A(O, [y, I]) : I();
      },
      leave(y, O) {
        const k = String(e.key);
        if ((y[Ut] && y[Ut](!0), n.isUnmounting)) return O();
        F(m, [y]);
        let T = !1;
        y[Fe] = (I) => {
          T ||
            ((T = !0),
            O(),
            I ? F(R, [y]) : F(M, [y]),
            (y[Fe] = void 0),
            x[k] === e && delete x[k]);
        };
        const W = y[Fe].bind(null, !1);
        ((x[k] = e), _ ? A(_, [y, W]) : W());
      },
      clone(y) {
        const O = Ds(y, t, n, s, r);
        return (r && r(O), O);
      },
    };
  return j;
}
function ms(e) {
  if (ts(e)) return ((e = dt(e)), (e.children = null), e);
}
function Er(e) {
  if (!ts(e)) return qi(e.type) && e.children ? Ji(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && J(n.default)) return n.default();
  }
}
function rn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), rn(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function zi(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Te
      ? (o.patchFlag & 128 && r++, (s = s.concat(zi(o.children, t, l))))
      : (t || o.type !== ge) && s.push(l != null ? dt(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
function Qi(e, t) {
  return J(e) ? he({ name: e.name }, t, { setup: e }) : e;
}
function Zi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Zf(e) {
  const t = gt(),
    n = Ce(null);
  if (t) {
    const r = t.refs === se ? (t.refs = {}) : t.refs;
    Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => (n.value = i),
    });
  }
  return n;
}
function xr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fn = new WeakMap();
function Ht(e, t, n, s, r = !1) {
  if (q(e)) {
    e.forEach((R, H) => Ht(R, t && (q(t) ? t[H] : t), n, s, r));
    return;
  }
  if (At(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Ht(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? is(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    f = t && t.r,
    a = l.refs === se ? (l.refs = {}) : l.refs,
    d = l.setupState,
    m = Z(d),
    _ = d === se ? fi : (R) => (xr(a, R) ? !1 : te(m, R)),
    M = (R, H) => !(H && xr(a, H));
  if (f != null && f !== c) {
    if ((Cr(t), ce(f))) ((a[f] = null), _(f) && (d[f] = null));
    else if (fe(f)) {
      const R = t;
      (M(f, R.k) && (f.value = null), R.k && (a[R.k] = null));
    }
  }
  if (J(c)) dn(c, l, 12, [o, a]);
  else {
    const R = ce(c),
      H = fe(c);
    if (R || H) {
      const U = () => {
        if (e.f) {
          const C = R ? (_(c) ? d[c] : a[c]) : M() || !e.k ? c.value : a[e.k];
          if (r) q(C) && Js(C, i);
          else if (q(C)) C.includes(i) || C.push(i);
          else if (R) ((a[c] = [i]), _(c) && (d[c] = a[c]));
          else {
            const p = [i];
            (M(c, e.k) && (c.value = p), e.k && (a[e.k] = p));
          }
        } else
          R
            ? ((a[c] = o), _(c) && (d[c] = o))
            : H && (M(c, e.k) && (c.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const C = () => {
          (U(), Fn.delete(e));
        };
        ((C.id = -1), Fn.set(e, C), we(C, n));
      } else (Cr(e), U());
    }
  }
}
function Cr(e) {
  const t = Fn.get(e);
  t && ((t.flags |= 8), Fn.delete(e));
}
let Ar = !1;
const Pt = () => {
    Ar ||
      (console.error("Hydration completed but contains mismatches."),
      (Ar = !0));
  },
  lc = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  cc = (e) => e.namespaceURI.includes("MathML"),
  _n = (e) => {
    if (e.nodeType === 1) {
      if (lc(e)) return "svg";
      if (cc(e)) return "mathml";
    }
  },
  bn = (e) => e.nodeType === 8;
function ac(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: f,
      },
    } = e,
    a = (p, g) => {
      if (!g.hasChildNodes()) {
        (n(null, p, g), Nn(), (g._vnode = p));
        return;
      }
      (d(g.firstChild, p, null, null, null), Nn(), (g._vnode = p));
    },
    d = (p, g, x, F, A, j = !1) => {
      j = j || !!g.dynamicChildren;
      const y = bn(p) && p.data === "[",
        O = () => R(p, g, x, F, A, y),
        { type: k, ref: T, shapeFlag: W, patchFlag: I } = g;
      let K = p.nodeType;
      ((g.el = p), I === -2 && ((j = !1), (g.dynamicChildren = null)));
      let N = null;
      switch (k) {
        case Rt:
          K !== 3
            ? g.children === ""
              ? (c((g.el = r("")), o(p), p), (N = p))
              : (N = O())
            : (p.data !== g.children && (Pt(), (p.data = g.children)),
              (N = i(p)));
          break;
        case ge:
          C(p)
            ? ((N = i(p)), U((g.el = p.content.firstChild), p, x))
            : K !== 8 || y
              ? (N = O())
              : (N = i(p));
          break;
        case Qt:
          if ((y && ((p = i(p)), (K = p.nodeType)), K === 1 || K === 3)) {
            N = p;
            const Y = !g.children.length;
            for (let V = 0; V < g.staticCount; V++)
              (Y && (g.children += N.nodeType === 1 ? N.outerHTML : N.data),
                V === g.staticCount - 1 && (g.anchor = N),
                (N = i(N)));
            return y ? i(N) : N;
          } else O();
          break;
        case Te:
          y ? (N = M(p, g, x, F, A, j)) : (N = O());
          break;
        default:
          if (W & 1)
            (K !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) &&
            !C(p)
              ? (N = O())
              : (N = m(p, g, x, F, A, j));
          else if (W & 6) {
            g.slotScopeIds = A;
            const Y = o(p);
            if (
              (y
                ? (N = H(p))
                : bn(p) && p.data === "teleport start"
                  ? (N = H(p, p.data, "teleport end"))
                  : (N = i(p)),
              t(g, Y, null, x, F, _n(Y), j),
              At(g) && !g.type.__asyncResolved)
            ) {
              let V;
              (y
                ? ((V = ve(Te)),
                  (V.anchor = N ? N.previousSibling : Y.lastChild))
                : (V = p.nodeType === 3 ? Ro("") : ve("div")),
                (V.el = p),
                (g.component.subTree = V));
            }
          } else
            W & 64
              ? K !== 8
                ? (N = O())
                : (N = g.type.hydrate(p, g, x, F, A, j, e, _))
              : W & 128 &&
                (N = g.type.hydrate(p, g, x, F, _n(o(p)), A, j, e, d));
      }
      return (T != null && Ht(T, null, F, g), N);
    },
    m = (p, g, x, F, A, j) => {
      j = j || !!g.dynamicChildren;
      const {
          type: y,
          props: O,
          patchFlag: k,
          shapeFlag: T,
          dirs: W,
          transition: I,
        } = g,
        K = y === "input" || y === "option";
      if (K || k !== -1) {
        W && qe(g, null, x, "created");
        let N = !1;
        if (C(p)) {
          N = wo(null, I) && x && x.vnode.props && x.vnode.props.appear;
          const V = p.content.firstChild;
          if (N) {
            const Q = V.getAttribute("class");
            (Q && (V.$cls = Q), I.beforeEnter(V));
          }
          (U(V, p, x), (g.el = p = V));
        }
        if (T & 16 && !(O && (O.innerHTML || O.textContent))) {
          let V = _(p.firstChild, g, p, x, F, A, j);
          for (V && !wn(p, 1) && Pt(); V; ) {
            const Q = V;
            ((V = V.nextSibling), l(Q));
          }
        } else if (T & 8) {
          let V = g.children;
          V[0] ===
            `
` &&
            (p.tagName === "PRE" || p.tagName === "TEXTAREA") &&
            (V = V.slice(1));
          const { textContent: Q } = p;
          Q !== V &&
            Q !==
              V.replace(
                /\r\n|\r/g,
                `
`,
              ) &&
            (wn(p, 0) || Pt(), (p.textContent = g.children));
        }
        if (O) {
          if (K || !j || k & 48) {
            const V = p.tagName.includes("-");
            for (const Q in O)
              ((K && (Q.endsWith("value") || Q === "indeterminate")) ||
                (fn(Q) && !Tt(Q)) ||
                Q[0] === "." ||
                (V && !Tt(Q))) &&
                s(p, Q, null, O[Q], void 0, x);
          } else if (O.onClick) s(p, "onClick", null, O.onClick, void 0, x);
          else if (k & 4 && ft(O.style)) for (const V in O.style) O.style[V];
        }
        let Y;
        ((Y = O && O.onVnodeBeforeMount) && De(Y, x, g),
          W && qe(g, null, x, "beforeMount"),
          ((Y = O && O.onVnodeMounted) || W || N) &&
            xo(() => {
              (Y && De(Y, x, g),
                N && I.enter(p),
                W && qe(g, null, x, "mounted"));
            }, F));
      }
      return p.nextSibling;
    },
    _ = (p, g, x, F, A, j, y) => {
      y = y || !!g.dynamicChildren;
      const O = g.children,
        k = O.length;
      let T = !1;
      for (let W = 0; W < k; W++) {
        const I = y ? O[W] : (O[W] = He(O[W])),
          K = I.type === Rt;
        p
          ? (K &&
              !y &&
              W + 1 < k &&
              He(O[W + 1]).type === Rt &&
              (c(r(p.data.slice(I.children.length)), x, i(p)),
              (p.data = I.children)),
            (p = d(p, I, F, A, j, y)))
          : K && !I.children
            ? c((I.el = r("")), x)
            : (T || ((T = !0), wn(x, 1) || Pt()),
              n(null, I, x, null, F, A, _n(x), j));
      }
      return p;
    },
    M = (p, g, x, F, A, j) => {
      const { slotScopeIds: y } = g;
      y && (A = A ? A.concat(y) : y);
      const O = o(p),
        k = _(i(p), g, O, x, F, A, j);
      return k && bn(k) && k.data === "]"
        ? i((g.anchor = k))
        : (Pt(), c((g.anchor = f("]")), O, k), k);
    },
    R = (p, g, x, F, A, j) => {
      if ((wn(p.parentElement, 1) || Pt(), (g.el = null), j)) {
        const k = H(p);
        for (;;) {
          const T = i(p);
          if (T && T !== k) l(T);
          else break;
        }
      }
      const y = i(p),
        O = o(p);
      return (
        l(p),
        n(null, g, O, y, x, F, _n(O), A),
        x && ((x.vnode.el = g.el), uo(x, g.el)),
        y
      );
    },
    H = (p, g = "[", x = "]") => {
      let F = 0;
      for (; p; )
        if (((p = i(p)), p && bn(p) && (p.data === g && F++, p.data === x))) {
          if (F === 0) return i(p);
          F--;
        }
      return p;
    },
    U = (p, g, x) => {
      const F = g.parentNode;
      F && F.replaceChild(p, g);
      let A = x;
      for (; A; )
        (A.vnode.el === g && (A.vnode.el = A.subTree.el = p), (A = A.parent));
    },
    C = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [a, d];
}
const Mr = "data-allow-mismatch",
  fc = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
function wn(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Mr); ) e = e.parentElement;
  const n = e && e.getAttribute(Mr);
  if (n == null) return !1;
  if (n === "") return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(fc[t]);
  }
}
Bn().requestIdleCallback;
Bn().cancelIdleCallback;
const At = (e) => !!e.type.__asyncLoader,
  ts = (e) => e.type.__isKeepAlive;
function uc(e, t) {
  eo(e, "a", t);
}
function dc(e, t) {
  eo(e, "da", t);
}
function eo(e, t, n = _e) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((ns(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      (ts(r.parent.vnode) && hc(s, t, n, r), (r = r.parent));
  }
}
function hc(e, t, n, s) {
  const r = ns(t, e, s, !0);
  ss(() => {
    Js(s[t], r);
  }, n);
}
function ns(e, t, n = _e, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          nt();
          const l = hn(n),
            c = $e(t, n, e, o);
          return (l(), st(), c);
        });
    return (s ? r.unshift(i) : r.push(i), i);
  }
}
const it =
    (e) =>
    (t, n = _e) => {
      (!cn || e === "sp") && ns(e, (...s) => t(...s), n);
    },
  pc = it("bm"),
  jt = it("m"),
  gc = it("bu"),
  mc = it("u"),
  to = it("bum"),
  ss = it("um"),
  vc = it("sp"),
  yc = it("rtg"),
  _c = it("rtc");
function bc(e, t = _e) {
  ns("ec", e, t);
}
const no = "components";
function eu(e, t) {
  return ro(no, e, !0, t) || e;
}
const so = Symbol.for("v-ndc");
function tu(e) {
  return ce(e) ? ro(no, e, !1) || e : e || so;
}
function ro(e, t, n = !0, s = !1) {
  const r = me || _e;
  if (r) {
    const i = r.type;
    {
      const l = na(i, !1);
      if (l && (l === t || l === xe(t) || l === Kn(xe(t)))) return i;
    }
    const o = Rr(r[e] || i[e], t) || Rr(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function Rr(e, t) {
  return e && (e[t] || e[xe(t)] || e[Kn(xe(t))]);
}
function nu(e, t, n, s) {
  let r;
  const i = n,
    o = q(e);
  if (o || ce(e)) {
    const l = o && ft(e);
    let c = !1,
      f = !1;
    (l && ((c = !Le(e)), (f = rt(e)), (e = Gn(e))), (r = new Array(e.length)));
    for (let a = 0, d = e.length; a < d; a++)
      r[a] = t(c ? (f ? $t(Ve(e[a])) : Ve(e[a])) : e[a], a, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (ee(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, f = l.length; c < f; c++) {
        const a = l[c];
        r[c] = t(e[a], a, c, i);
      }
    }
  else r = [];
  return r;
}
function su(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (q(s)) for (let r = 0; r < s.length; r++) e[s[r].name] = s[r].fn;
    else
      s &&
        (e[s.name] = s.key
          ? (...r) => {
              const i = s.fn(...r);
              return (i && (i.key = s.key), i);
            }
          : s.fn);
  }
  return e;
}
function ru(e, t, n = {}, s, r) {
  if (me.ce || (me.parent && At(me.parent) && me.parent.ce)) {
    const f = Object.keys(n).length > 0;
    return (
      t !== "default" && (n.name = t),
      ks(),
      Vs(Te, null, [ve("slot", n, s && s())], f ? -2 : 64)
    );
  }
  let i = e[t];
  (i && i._c && (i._d = !1), ks());
  const o = i && io(i(n)),
    l = n.key || (o && o.key),
    c = Vs(
      Te,
      { key: (l && !Ie(l) ? l : `_${t}`) + (!o && s ? "_fb" : "") },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    );
  return (
    !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    c
  );
}
function io(e) {
  return e.some((t) =>
    ln(t) ? !(t.type === ge || (t.type === Te && !io(t.children))) : !0,
  )
    ? e
    : null;
}
function iu(e, t) {
  const n = {};
  for (const s in e) n[/[A-Z]/.test(s) ? `on:${s}` : Cn(s)] = e[s];
  return n;
}
const Fs = (e) => (e ? (Oo(e) ? is(e) : Fs(e.parent)) : null),
  zt = he(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fs(e.parent),
    $root: (e) => Fs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => lo(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        sr(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => ec.bind(e),
  }),
  vs = (e, t) => e !== se && !e.__isScriptSetup && te(e, t),
  wc = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e;
      if (t[0] !== "$") {
        const m = o[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (vs(s, t)) return ((o[t] = 1), s[t]);
          if (r !== se && te(r, t)) return ((o[t] = 2), r[t]);
          if (te(i, t)) return ((o[t] = 3), i[t]);
          if (n !== se && te(n, t)) return ((o[t] = 4), n[t]);
          Hs && (o[t] = 0);
        }
      }
      const f = zt[t];
      let a, d;
      if (f) return (t === "$attrs" && ye(e.attrs, "get", ""), f(e));
      if ((a = l.__cssModules) && (a = a[t])) return a;
      if (n !== se && te(n, t)) return ((o[t] = 4), n[t]);
      if (((d = c.config.globalProperties), te(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return vs(r, t)
        ? ((r[t] = n), !0)
        : s !== se && te(s, t)
          ? ((s[t] = n), !0)
          : te(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          props: i,
          type: o,
        },
      },
      l,
    ) {
      let c;
      return !!(
        n[l] ||
        (e !== se && l[0] !== "$" && te(e, l)) ||
        vs(t, l) ||
        te(i, l) ||
        te(s, l) ||
        te(zt, l) ||
        te(r.config.globalProperties, l) ||
        ((c = o.__cssModules) && c[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : te(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function ou() {
  return Sc().slots;
}
function Sc(e) {
  const t = gt();
  return t.setupContext || (t.setupContext = Po(t));
}
function Or(e) {
  return q(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Hs = !0;
function Tc(e) {
  const t = lo(e),
    n = e.proxy,
    s = e.ctx;
  ((Hs = !1), t.beforeCreate && Lr(t.beforeCreate, e, "bc"));
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: f,
    created: a,
    beforeMount: d,
    mounted: m,
    beforeUpdate: _,
    updated: M,
    activated: R,
    deactivated: H,
    beforeDestroy: U,
    beforeUnmount: C,
    destroyed: p,
    unmounted: g,
    render: x,
    renderTracked: F,
    renderTriggered: A,
    errorCaptured: j,
    serverPrefetch: y,
    expose: O,
    inheritAttrs: k,
    components: T,
    directives: W,
    filters: I,
  } = t;
  if ((f && Ec(f, s, null), o))
    for (const Y in o) {
      const V = o[Y];
      J(V) && (s[Y] = V.bind(n));
    }
  if (r) {
    const Y = r.call(n, n);
    ee(Y) && (e.data = ut(Y));
  }
  if (((Hs = !0), i))
    for (const Y in i) {
      const V = i[Y],
        Q = J(V) ? V.bind(n, n) : J(V.get) ? V.get.bind(n, n) : Je,
        mt = !J(V) && J(V.set) ? V.set.bind(n) : Je,
        We = oe({ get: Q, set: mt });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (Ue) => (We.value = Ue),
      });
    }
  if (l) for (const Y in l) oo(l[Y], s, n, Y);
  if (c) {
    const Y = J(c) ? c.call(n) : c;
    Reflect.ownKeys(Y).forEach((V) => {
      zl(V, Y[V]);
    });
  }
  a && Lr(a, e, "c");
  function N(Y, V) {
    q(V) ? V.forEach((Q) => Y(Q.bind(n))) : V && Y(V.bind(n));
  }
  if (
    (N(pc, d),
    N(jt, m),
    N(gc, _),
    N(mc, M),
    N(uc, R),
    N(dc, H),
    N(bc, j),
    N(_c, F),
    N(yc, A),
    N(to, C),
    N(ss, g),
    N(vc, y),
    q(O))
  )
    if (O.length) {
      const Y = e.exposed || (e.exposed = {});
      O.forEach((V) => {
        Object.defineProperty(Y, V, {
          get: () => n[V],
          set: (Q) => (n[V] = Q),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (x && e.render === Je && (e.render = x),
    k != null && (e.inheritAttrs = k),
    T && (e.components = T),
    W && (e.directives = W),
    y && Zi(e));
}
function Ec(e, t, n = Je) {
  q(e) && (e = $s(e));
  for (const s in e) {
    const r = e[s];
    let i;
    (ee(r)
      ? "default" in r
        ? (i = Ct(r.from || s, r.default, !0))
        : (i = Ct(r.from || s))
      : (i = Ct(r)),
      fe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i));
  }
}
function Lr(e, t, n) {
  $e(q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function oo(e, t, n, s) {
  let r = s.includes(".") ? Ki(n, s) : () => n[s];
  if (ce(e)) {
    const i = t[e];
    J(i) && Pe(r, i);
  } else if (J(e)) Pe(r, e.bind(n));
  else if (ee(e))
    if (q(e)) e.forEach((i) => oo(i, t, n, s));
    else {
      const i = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(i) && Pe(r, i, e);
    }
}
function lo(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((f) => Hn(c, f, o, !0)),
          Hn(c, t, o)),
    ee(t) && i.set(t, c),
    c
  );
}
function Hn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  (i && Hn(e, i, n, !0), r && r.forEach((o) => Hn(e, o, n, !0)));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = xc[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const xc = {
  data: Pr,
  props: Ir,
  emits: Ir,
  methods: Gt,
  computed: Gt,
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  components: Gt,
  directives: Gt,
  watch: Ac,
  provide: Pr,
  inject: Cc,
};
function Pr(e, t) {
  return t
    ? e
      ? function () {
          return he(
            J(e) ? e.call(this, this) : e,
            J(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Cc(e, t) {
  return Gt($s(e), $s(t));
}
function $s(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gt(e, t) {
  return e ? he(Object.create(null), e, t) : t;
}
function Ir(e, t) {
  return e
    ? q(e) && q(t)
      ? [...new Set([...e, ...t])]
      : he(Object.create(null), Or(e), Or(t ?? {}))
    : t;
}
function Ac(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = he(Object.create(null), e);
  for (const s in t) n[s] = be(e[s], t[s]);
  return n;
}
function co() {
  return {
    app: null,
    config: {
      isNativeTag: fi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Mc = 0;
function Rc(e, t) {
  return function (s, r = null) {
    (J(s) || (s = he({}, s)), r != null && !ee(r) && (r = null));
    const i = co(),
      o = new WeakSet(),
      l = [];
    let c = !1;
    const f = (i.app = {
      _uid: Mc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: ra,
      get config() {
        return i.config;
      },
      set config(a) {},
      use(a, ...d) {
        return (
          o.has(a) ||
            (a && J(a.install)
              ? (o.add(a), a.install(f, ...d))
              : J(a) && (o.add(a), a(f, ...d))),
          f
        );
      },
      mixin(a) {
        return (i.mixins.includes(a) || i.mixins.push(a), f);
      },
      component(a, d) {
        return d ? ((i.components[a] = d), f) : i.components[a];
      },
      directive(a, d) {
        return d ? ((i.directives[a] = d), f) : i.directives[a];
      },
      mount(a, d, m) {
        if (!c) {
          const _ = f._ceVNode || ve(s, r);
          return (
            (_.appContext = i),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            d && t ? t(_, a) : e(_, a, m),
            (c = !0),
            (f._container = a),
            (a.__vue_app__ = f),
            is(_.component)
          );
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c &&
          ($e(l, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__);
      },
      provide(a, d) {
        return ((i.provides[a] = d), f);
      },
      runWithContext(a) {
        const d = Mt;
        Mt = f;
        try {
          return a();
        } finally {
          Mt = d;
        }
      },
    });
    return f;
  };
}
let Mt = null;
const Oc = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${xe(t)}Modifiers`] || e[`${pt(t)}Modifiers`];
function Lc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || se;
  let r = n;
  const i = t.startsWith("update:"),
    o = i && Oc(s, t.slice(7));
  o &&
    (o.trim && (r = n.map((a) => (ce(a) ? a.trim() : a))),
    o.number && (r = n.map(rl)));
  let l,
    c = s[(l = Cn(t))] || s[(l = Cn(xe(t)))];
  (!c && i && (c = s[(l = Cn(pt(t)))]), c && $e(c, e, 6, r));
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    ((e.emitted[l] = !0), $e(f, e, 6, r));
  }
}
const Pc = new WeakMap();
function ao(e, t, n = !1) {
  const s = n ? Pc : t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!J(e)) {
    const c = (f) => {
      const a = ao(f, t, !0);
      a && ((l = !0), he(o, a));
    };
    (!n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c));
  }
  return !i && !l
    ? (ee(e) && s.set(e, null), null)
    : (q(i) ? i.forEach((c) => (o[c] = null)) : he(o, i),
      ee(e) && s.set(e, o),
      o);
}
function rs(e, t) {
  return !e || !fn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      te(e, t[0].toLowerCase() + t.slice(1)) || te(e, pt(t)) || te(e, t));
}
function ys(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: f,
      renderCache: a,
      props: d,
      data: m,
      setupState: _,
      ctx: M,
      inheritAttrs: R,
    } = e,
    H = Dn(e);
  let U, C;
  try {
    if (n.shapeFlag & 4) {
      const g = r || s,
        x = g;
      ((U = He(f.call(x, g, a, d, _, m, M))), (C = l));
    } else {
      const g = t;
      ((U = He(
        g.length > 1 ? g(d, { attrs: l, slots: o, emit: c }) : g(d, null),
      )),
        (C = t.props ? l : Ic(l)));
    }
  } catch (g) {
    ((Zt.length = 0), Qn(g, e, 1), (U = ve(ge)));
  }
  let p = U;
  if (C && R !== !1) {
    const g = Object.keys(C),
      { shapeFlag: x } = p;
    g.length &&
      x & 7 &&
      (i && g.some(Vn) && (C = Nc(C, i)), (p = dt(p, C, !1, !0)));
  }
  return (
    n.dirs &&
      ((p = dt(p, null, !1, !0)),
      (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && rn(p, n.transition),
    (U = p),
    Dn(H),
    U
  );
}
const Ic = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || fn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Nc = (e, t) => {
    const n = {};
    for (const s in e) (!Vn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Dc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    f = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Nr(s, o, f) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const m = a[d];
        if (fo(o, s, m) && !rs(f, m)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? Nr(s, o, f)
            : !0
          : !!o;
  return !1;
}
function Nr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (fo(t, e, i) && !rs(n, i)) return !0;
  }
  return !1;
}
function fo(e, t, n) {
  const s = e[n],
    r = t[n];
  return n === "style" && ee(s) && ee(r) ? !Qs(s, r) : s !== r;
}
function uo({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (
      (r.suspense &&
        r.suspense.activeBranch === e &&
        ((r.suspense.vnode.el = r.el = s), (e = r)),
      r === e)
    )
      (((e = t.vnode).el = s), (t = t.parent));
    else break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const ho = {},
  po = () => Object.create(ho),
  go = (e) => Object.getPrototypeOf(e) === ho;
function Fc(e, t, n, s = !1) {
  const r = {},
    i = po();
  ((e.propsDefaults = Object.create(null)), mo(e, t, r, i));
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  (n ? (e.props = s ? r : Nl(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i));
}
function Hc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = Z(r),
    [c] = e.propsOptions;
  let f = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let m = a[d];
        if (rs(e.emitsOptions, m)) continue;
        const _ = t[m];
        if (c)
          if (te(i, m)) _ !== i[m] && ((i[m] = _), (f = !0));
          else {
            const M = xe(m);
            r[M] = js(c, l, M, _, e, !1);
          }
        else _ !== i[m] && ((i[m] = _), (f = !0));
      }
    }
  } else {
    mo(e, t, r, i) && (f = !0);
    let a;
    for (const d in l)
      (!t || (!te(t, d) && ((a = pt(d)) === d || !te(t, a)))) &&
        (c
          ? n &&
            (n[d] !== void 0 || n[a] !== void 0) &&
            (r[d] = js(c, l, d, void 0, e, !0))
          : delete r[d]);
    if (i !== l)
      for (const d in i) (!t || !te(t, d)) && (delete i[d], (f = !0));
  }
  f && et(e.attrs, "set", "");
}
function mo(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let c in t) {
      if (Tt(c)) continue;
      const f = t[c];
      let a;
      r && te(r, (a = xe(c)))
        ? !i || !i.includes(a)
          ? (n[a] = f)
          : ((l || (l = {}))[a] = f)
        : rs(e.emitsOptions, c) ||
          ((!(c in s) || f !== s[c]) && ((s[c] = f), (o = !0)));
    }
  if (i) {
    const c = Z(n),
      f = l || se;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      n[d] = js(r, c, d, f[d], e, !te(f, d));
    }
  }
  return o;
}
function js(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = te(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && J(c)) {
        const { propsDefaults: f } = r;
        if (n in f) s = f[n];
        else {
          const a = hn(r);
          ((s = f[n] = c.call(null, t)), a());
        }
      } else s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] &&
      (i && !l ? (s = !1) : o[1] && (s === "" || s === pt(n)) && (s = !0));
  }
  return s;
}
const $c = new WeakMap();
function vo(e, t, n = !1) {
  const s = n ? $c : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let c = !1;
  if (!J(e)) {
    const a = (d) => {
      c = !0;
      const [m, _] = vo(d, t, !0);
      (he(o, m), _ && l.push(..._));
    };
    (!n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a));
  }
  if (!i && !c) return (ee(e) && s.set(e, Nt), Nt);
  if (q(i))
    for (let a = 0; a < i.length; a++) {
      const d = xe(i[a]);
      Dr(d) && (o[d] = se);
    }
  else if (i)
    for (const a in i) {
      const d = xe(a);
      if (Dr(d)) {
        const m = i[a],
          _ = (o[d] = q(m) || J(m) ? { type: m } : he({}, m)),
          M = _.type;
        let R = !1,
          H = !0;
        if (q(M))
          for (let U = 0; U < M.length; ++U) {
            const C = M[U],
              p = J(C) && C.name;
            if (p === "Boolean") {
              R = !0;
              break;
            } else p === "String" && (H = !1);
          }
        else R = J(M) && M.name === "Boolean";
        ((_[0] = R), (_[1] = H), (R || te(_, "default")) && l.push(d));
      }
    }
  const f = [o, l];
  return (ee(e) && s.set(e, f), f);
}
function Dr(e) {
  return e[0] !== "$" && !Tt(e);
}
const rr = (e) => e === "_" || e === "_ctx" || e === "$stable",
  ir = (e) => (q(e) ? e.map(He) : [He(e)]),
  jc = (e, t, n) => {
    if (t._n) return t;
    const s = Yl((...r) => ir(t(...r)), n);
    return ((s._c = !1), s);
  },
  yo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (rr(r)) continue;
      const i = e[r];
      if (J(i)) t[r] = jc(r, i, s);
      else if (i != null) {
        const o = ir(i);
        t[r] = () => o;
      }
    }
  },
  _o = (e, t) => {
    const n = ir(t);
    e.slots.default = () => n;
  },
  bo = (e, t, n) => {
    for (const s in t) (n || !rr(s)) && (e[s] = t[s]);
  },
  kc = (e, t, n) => {
    const s = (e.slots = po());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (bo(s, t, n), n && gi(s, "_", r, !0)) : yo(t, s);
    } else t && _o(e, t);
  },
  Vc = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = se;
    if (s.shapeFlag & 32) {
      const l = t._;
      (l
        ? n && l === 1
          ? (i = !1)
          : bo(r, t, n)
        : ((i = !t.$stable), yo(t, r)),
        (o = t));
    } else t && (_o(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !rr(l) && o[l] == null && delete r[l];
  },
  we = xo;
function Wc(e) {
  return Uc(e, ac);
}
function Uc(e, t) {
  const n = Bn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: a,
      parentNode: d,
      nextSibling: m,
      setScopeId: _ = Je,
      insertStaticContent: M,
    } = e,
    R = (
      u,
      h,
      v,
      E = null,
      w = null,
      b = null,
      D = void 0,
      P = null,
      L = !!h.dynamicChildren,
    ) => {
      if (u === h) return;
      (u && !St(u, h) && ((E = pn(u)), Ue(u, w, b, !0), (u = null)),
        h.patchFlag === -2 && ((L = !1), (h.dynamicChildren = null)));
      const { type: S, ref: G, shapeFlag: $ } = h;
      switch (S) {
        case Rt:
          H(u, h, v, E);
          break;
        case ge:
          U(u, h, v, E);
          break;
        case Qt:
          u == null && C(h, v, E, D);
          break;
        case Te:
          T(u, h, v, E, w, b, D, P, L);
          break;
        default:
          $ & 1
            ? x(u, h, v, E, w, b, D, P, L)
            : $ & 6
              ? W(u, h, v, E, w, b, D, P, L)
              : ($ & 64 || $ & 128) && S.process(u, h, v, E, w, b, D, P, L, Ot);
      }
      G != null && w
        ? Ht(G, u && u.ref, b, h || u, !h)
        : G == null && u && u.ref != null && Ht(u.ref, null, b, u, !0);
    },
    H = (u, h, v, E) => {
      if (u == null) s((h.el = l(h.children)), v, E);
      else {
        const w = (h.el = u.el);
        h.children !== u.children && f(w, h.children);
      }
    },
    U = (u, h, v, E) => {
      u == null ? s((h.el = c(h.children || "")), v, E) : (h.el = u.el);
    },
    C = (u, h, v, E) => {
      [u.el, u.anchor] = M(u.children, h, v, E, u.el, u.anchor);
    },
    p = ({ el: u, anchor: h }, v, E) => {
      let w;
      for (; u && u !== h; ) ((w = m(u)), s(u, v, E), (u = w));
      s(h, v, E);
    },
    g = ({ el: u, anchor: h }) => {
      let v;
      for (; u && u !== h; ) ((v = m(u)), r(u), (u = v));
      r(h);
    },
    x = (u, h, v, E, w, b, D, P, L) => {
      if (
        (h.type === "svg" ? (D = "svg") : h.type === "math" && (D = "mathml"),
        u == null)
      )
        F(h, v, E, w, b, D, P, L);
      else {
        const S = u.el && u.el._isVueCE ? u.el : null;
        try {
          (S && S._beginPatch(), y(u, h, w, b, D, P, L));
        } finally {
          S && S._endPatch();
        }
      }
    },
    F = (u, h, v, E, w, b, D, P) => {
      let L, S;
      const { props: G, shapeFlag: $, transition: B, dirs: X } = u;
      if (
        ((L = u.el = o(u.type, b, G && G.is, G)),
        $ & 8
          ? a(L, u.children)
          : $ & 16 && j(u.children, L, null, E, w, _s(u, b), D, P),
        X && qe(u, null, E, "created"),
        A(L, u, u.scopeId, D, E),
        G)
      ) {
        for (const re in G)
          re !== "value" && !Tt(re) && i(L, re, null, G[re], b, E);
        ("value" in G && i(L, "value", null, G.value, b),
          (S = G.onVnodeBeforeMount) && De(S, E, u));
      }
      X && qe(u, null, E, "beforeMount");
      const z = wo(w, B);
      (z && B.beforeEnter(L),
        s(L, h, v),
        ((S = G && G.onVnodeMounted) || z || X) &&
          we(() => {
            (S && De(S, E, u), z && B.enter(L), X && qe(u, null, E, "mounted"));
          }, w));
    },
    A = (u, h, v, E, w) => {
      if ((v && _(u, v), E)) for (let b = 0; b < E.length; b++) _(u, E[b]);
      if (w) {
        let b = w.subTree;
        if (
          h === b ||
          (Eo(b.type) && (b.ssContent === h || b.ssFallback === h))
        ) {
          const D = w.vnode;
          A(u, D, D.scopeId, D.slotScopeIds, w.parent);
        }
      }
    },
    j = (u, h, v, E, w, b, D, P, L = 0) => {
      for (let S = L; S < u.length; S++) {
        const G = (u[S] = P ? Ze(u[S]) : He(u[S]));
        R(null, G, h, v, E, w, b, D, P);
      }
    },
    y = (u, h, v, E, w, b, D) => {
      const P = (h.el = u.el);
      let { patchFlag: L, dynamicChildren: S, dirs: G } = h;
      L |= u.patchFlag & 16;
      const $ = u.props || se,
        B = h.props || se;
      let X;
      if (
        (v && vt(v, !1),
        (X = B.onVnodeBeforeUpdate) && De(X, v, h, u),
        G && qe(h, u, v, "beforeUpdate"),
        v && vt(v, !0),
        (($.innerHTML && B.innerHTML == null) ||
          ($.textContent && B.textContent == null)) &&
          a(P, ""),
        S
          ? O(u.dynamicChildren, S, P, v, E, _s(h, w), b)
          : D || V(u, h, P, null, v, E, _s(h, w), b, !1),
        L > 0)
      ) {
        if (L & 16) k(P, $, B, v, w);
        else if (
          (L & 2 && $.class !== B.class && i(P, "class", null, B.class, w),
          L & 4 && i(P, "style", $.style, B.style, w),
          L & 8)
        ) {
          const z = h.dynamicProps;
          for (let re = 0; re < z.length; re++) {
            const ne = z[re],
              ae = $[ne],
              ue = B[ne];
            (ue !== ae || ne === "value") && i(P, ne, ae, ue, w, v);
          }
        }
        L & 1 && u.children !== h.children && a(P, h.children);
      } else !D && S == null && k(P, $, B, v, w);
      ((X = B.onVnodeUpdated) || G) &&
        we(() => {
          (X && De(X, v, h, u), G && qe(h, u, v, "updated"));
        }, E);
    },
    O = (u, h, v, E, w, b, D) => {
      for (let P = 0; P < h.length; P++) {
        const L = u[P],
          S = h[P],
          G =
            L.el && (L.type === Te || !St(L, S) || L.shapeFlag & 198)
              ? d(L.el)
              : v;
        R(L, S, G, null, E, w, b, D, !0);
      }
    },
    k = (u, h, v, E, w) => {
      if (h !== v) {
        if (h !== se)
          for (const b in h) !Tt(b) && !(b in v) && i(u, b, h[b], null, w, E);
        for (const b in v) {
          if (Tt(b)) continue;
          const D = v[b],
            P = h[b];
          D !== P && b !== "value" && i(u, b, P, D, w, E);
        }
        "value" in v && i(u, "value", h.value, v.value, w);
      }
    },
    T = (u, h, v, E, w, b, D, P, L) => {
      const S = (h.el = u ? u.el : l("")),
        G = (h.anchor = u ? u.anchor : l(""));
      let { patchFlag: $, dynamicChildren: B, slotScopeIds: X } = h;
      (X && (P = P ? P.concat(X) : X),
        u == null
          ? (s(S, v, E), s(G, v, E), j(h.children || [], v, G, w, b, D, P, L))
          : $ > 0 &&
              $ & 64 &&
              B &&
              u.dynamicChildren &&
              u.dynamicChildren.length === B.length
            ? (O(u.dynamicChildren, B, v, w, b, D, P),
              (h.key != null || (w && h === w.subTree)) && or(u, h, !0))
            : V(u, h, v, G, w, b, D, P, L));
    },
    W = (u, h, v, E, w, b, D, P, L) => {
      ((h.slotScopeIds = P),
        u == null
          ? h.shapeFlag & 512
            ? w.ctx.activate(h, v, E, D, L)
            : I(h, v, E, w, b, D, L)
          : K(u, h, L));
    },
    I = (u, h, v, E, w, b, D) => {
      const P = (u.component = Qc(u, E, w));
      if ((ts(u) && (P.ctx.renderer = Ot), Zc(P, !1, D), P.asyncDep)) {
        if ((w && w.registerDep(P, N, D), !u.el)) {
          const L = (P.subTree = ve(ge));
          (U(null, L, h, v), (u.placeholder = L.el));
        }
      } else N(P, u, h, v, w, b, D);
    },
    K = (u, h, v) => {
      const E = (h.component = u.component);
      if (Dc(u, h, v))
        if (E.asyncDep && !E.asyncResolved) {
          Y(E, h, v);
          return;
        } else ((E.next = h), E.update());
      else ((h.el = u.el), (E.vnode = h));
    },
    N = (u, h, v, E, w, b, D) => {
      const P = () => {
        if (u.isMounted) {
          let { next: $, bu: B, u: X, parent: z, vnode: re } = u;
          {
            const Me = So(u);
            if (Me) {
              ($ && (($.el = re.el), Y(u, $, D)),
                Me.asyncDep.then(() => {
                  we(() => {
                    u.isUnmounted || S();
                  }, w);
                }));
              return;
            }
          }
          let ne = $,
            ae;
          (vt(u, !1),
            $ ? (($.el = re.el), Y(u, $, D)) : ($ = re),
            B && us(B),
            (ae = $.props && $.props.onVnodeBeforeUpdate) && De(ae, z, $, re),
            vt(u, !0));
          const ue = ys(u),
            je = u.subTree;
          ((u.subTree = ue),
            R(je, ue, d(je.el), pn(je), u, w, b),
            ($.el = ue.el),
            ne === null && uo(u, ue.el),
            X && we(X, w),
            (ae = $.props && $.props.onVnodeUpdated) &&
              we(() => De(ae, z, $, re), w));
        } else {
          let $;
          const { el: B, props: X } = h,
            { bm: z, m: re, parent: ne, root: ae, type: ue } = u,
            je = At(h);
          if (
            (vt(u, !1),
            z && us(z),
            !je && ($ = X && X.onVnodeBeforeMount) && De($, ne, h),
            vt(u, !0),
            B && fs)
          ) {
            const Me = () => {
              ((u.subTree = ys(u)), fs(B, u.subTree, u, w, null));
            };
            je && ue.__asyncHydrate ? ue.__asyncHydrate(B, u, Me) : Me();
          } else {
            ae.ce &&
              ae.ce._hasShadowRoot() &&
              ae.ce._injectChildStyle(ue, u.parent ? u.parent.type : void 0);
            const Me = (u.subTree = ys(u));
            (R(null, Me, v, E, u, w, b), (h.el = Me.el));
          }
          if ((re && we(re, w), !je && ($ = X && X.onVnodeMounted))) {
            const Me = h;
            we(() => De($, ne, Me), w);
          }
          ((h.shapeFlag & 256 ||
            (ne && At(ne.vnode) && ne.vnode.shapeFlag & 256)) &&
            u.a &&
            we(u.a, w),
            (u.isMounted = !0),
            (h = v = E = null));
        }
      };
      u.scope.on();
      const L = (u.effect = new _i(P));
      u.scope.off();
      const S = (u.update = L.run.bind(L)),
        G = (u.job = L.runIfDirty.bind(L));
      ((G.i = u), (G.id = u.uid), (L.scheduler = () => sr(G)), vt(u, !0), S());
    },
    Y = (u, h, v) => {
      h.component = u;
      const E = u.vnode.props;
      ((u.vnode = h),
        (u.next = null),
        Hc(u, h.props, E, v),
        Vc(u, h.children, v),
        nt(),
        wr(u),
        st());
    },
    V = (u, h, v, E, w, b, D, P, L = !1) => {
      const S = u && u.children,
        G = u ? u.shapeFlag : 0,
        $ = h.children,
        { patchFlag: B, shapeFlag: X } = h;
      if (B > 0) {
        if (B & 128) {
          mt(S, $, v, E, w, b, D, P, L);
          return;
        } else if (B & 256) {
          Q(S, $, v, E, w, b, D, P, L);
          return;
        }
      }
      X & 8
        ? (G & 16 && kt(S, w, b), $ !== S && a(v, $))
        : G & 16
          ? X & 16
            ? mt(S, $, v, E, w, b, D, P, L)
            : kt(S, w, b, !0)
          : (G & 8 && a(v, ""), X & 16 && j($, v, E, w, b, D, P, L));
    },
    Q = (u, h, v, E, w, b, D, P, L) => {
      ((u = u || Nt), (h = h || Nt));
      const S = u.length,
        G = h.length,
        $ = Math.min(S, G);
      let B;
      for (B = 0; B < $; B++) {
        const X = (h[B] = L ? Ze(h[B]) : He(h[B]));
        R(u[B], X, v, null, w, b, D, P, L);
      }
      S > G ? kt(u, w, b, !0, !1, $) : j(h, v, E, w, b, D, P, L, $);
    },
    mt = (u, h, v, E, w, b, D, P, L) => {
      let S = 0;
      const G = h.length;
      let $ = u.length - 1,
        B = G - 1;
      for (; S <= $ && S <= B; ) {
        const X = u[S],
          z = (h[S] = L ? Ze(h[S]) : He(h[S]));
        if (St(X, z)) R(X, z, v, null, w, b, D, P, L);
        else break;
        S++;
      }
      for (; S <= $ && S <= B; ) {
        const X = u[$],
          z = (h[B] = L ? Ze(h[B]) : He(h[B]));
        if (St(X, z)) R(X, z, v, null, w, b, D, P, L);
        else break;
        ($--, B--);
      }
      if (S > $) {
        if (S <= B) {
          const X = B + 1,
            z = X < G ? h[X].el : E;
          for (; S <= B; )
            (R(null, (h[S] = L ? Ze(h[S]) : He(h[S])), v, z, w, b, D, P, L),
              S++);
        }
      } else if (S > B) for (; S <= $; ) (Ue(u[S], w, b, !0), S++);
      else {
        const X = S,
          z = S,
          re = new Map();
        for (S = z; S <= B; S++) {
          const Re = (h[S] = L ? Ze(h[S]) : He(h[S]));
          Re.key != null && re.set(Re.key, S);
        }
        let ne,
          ae = 0;
        const ue = B - z + 1;
        let je = !1,
          Me = 0;
        const Vt = new Array(ue);
        for (S = 0; S < ue; S++) Vt[S] = 0;
        for (S = X; S <= $; S++) {
          const Re = u[S];
          if (ae >= ue) {
            Ue(Re, w, b, !0);
            continue;
          }
          let Ke;
          if (Re.key != null) Ke = re.get(Re.key);
          else
            for (ne = z; ne <= B; ne++)
              if (Vt[ne - z] === 0 && St(Re, h[ne])) {
                Ke = ne;
                break;
              }
          Ke === void 0
            ? Ue(Re, w, b, !0)
            : ((Vt[Ke - z] = S + 1),
              Ke >= Me ? (Me = Ke) : (je = !0),
              R(Re, h[Ke], v, null, w, b, D, P, L),
              ae++);
        }
        const pr = je ? Kc(Vt) : Nt;
        for (ne = pr.length - 1, S = ue - 1; S >= 0; S--) {
          const Re = z + S,
            Ke = h[Re],
            gr = h[Re + 1],
            mr = Re + 1 < G ? gr.el || To(gr) : E;
          Vt[S] === 0
            ? R(null, Ke, v, mr, w, b, D, P, L)
            : je && (ne < 0 || S !== pr[ne] ? We(Ke, v, mr, 2) : ne--);
        }
      }
    },
    We = (u, h, v, E, w = null) => {
      const { el: b, type: D, transition: P, children: L, shapeFlag: S } = u;
      if (S & 6) {
        We(u.component.subTree, h, v, E);
        return;
      }
      if (S & 128) {
        u.suspense.move(h, v, E);
        return;
      }
      if (S & 64) {
        D.move(u, h, v, Ot);
        return;
      }
      if (D === Te) {
        s(b, h, v);
        for (let $ = 0; $ < L.length; $++) We(L[$], h, v, E);
        s(u.anchor, h, v);
        return;
      }
      if (D === Qt) {
        p(u, h, v);
        return;
      }
      if (E !== 2 && S & 1 && P)
        if (E === 0)
          P.persisted && !b[Fe]
            ? s(b, h, v)
            : (P.beforeEnter(b), s(b, h, v), we(() => P.enter(b), w));
        else {
          const { leave: $, delayLeave: B, afterLeave: X } = P,
            z = () => {
              u.ctx.isUnmounted ? r(b) : s(b, h, v);
            },
            re = () => {
              const ne = b._isLeaving || !!b[Fe];
              (b._isLeaving && b[Fe](!0),
                P.persisted && !ne
                  ? z()
                  : $(b, () => {
                      (z(), X && X());
                    }));
            };
          B ? B(b, z, re) : re();
        }
      else s(b, h, v);
    },
    Ue = (u, h, v, E = !1, w = !1) => {
      const {
        type: b,
        props: D,
        ref: P,
        children: L,
        dynamicChildren: S,
        shapeFlag: G,
        patchFlag: $,
        dirs: B,
        cacheIndex: X,
        memo: z,
      } = u;
      if (
        ($ === -2 && (w = !1),
        P != null && (nt(), Ht(P, null, v, u, !0), st()),
        X != null && (h.renderCache[X] = void 0),
        G & 256)
      ) {
        h.ctx.deactivate(u);
        return;
      }
      const re = G & 1 && B,
        ne = !At(u);
      let ae;
      if ((ne && (ae = D && D.onVnodeBeforeUnmount) && De(ae, h, u), G & 6))
        Zo(u.component, v, E);
      else {
        if (G & 128) {
          u.suspense.unmount(v, E);
          return;
        }
        (re && qe(u, null, h, "beforeUnmount"),
          G & 64
            ? u.type.remove(u, h, v, Ot, E)
            : S && !S.hasOnce && (b !== Te || ($ > 0 && $ & 64))
              ? kt(S, h, v, !1, !0)
              : ((b === Te && $ & 384) || (!w && G & 16)) && kt(L, h, v),
          E && dr(u));
      }
      const ue = z != null && X == null;
      ((ne && (ae = D && D.onVnodeUnmounted)) || re || ue) &&
        we(() => {
          (ae && De(ae, h, u),
            re && qe(u, null, h, "unmounted"),
            ue && (u.el = null));
        }, v);
    },
    dr = (u) => {
      const { type: h, el: v, anchor: E, transition: w } = u;
      if (h === Te) {
        Qo(v, E);
        return;
      }
      if (h === Qt) {
        g(u);
        return;
      }
      const b = () => {
        (r(v), w && !w.persisted && w.afterLeave && w.afterLeave());
      };
      if (u.shapeFlag & 1 && w && !w.persisted) {
        const { leave: D, delayLeave: P } = w,
          L = () => D(v, b);
        P ? P(u.el, b, L) : L();
      } else b();
    },
    Qo = (u, h) => {
      let v;
      for (; u !== h; ) ((v = m(u)), r(u), (u = v));
      r(h);
    },
    Zo = (u, h, v) => {
      const { bum: E, scope: w, job: b, subTree: D, um: P, m: L, a: S } = u;
      (Fr(L),
        Fr(S),
        E && us(E),
        w.stop(),
        b && ((b.flags |= 8), Ue(D, u, h, v)),
        P && we(P, h),
        we(() => {
          u.isUnmounted = !0;
        }, h));
    },
    kt = (u, h, v, E = !1, w = !1, b = 0) => {
      for (let D = b; D < u.length; D++) Ue(u[D], h, v, E, w);
    },
    pn = (u) => {
      if (u.shapeFlag & 6) return pn(u.component.subTree);
      if (u.shapeFlag & 128) return u.suspense.next();
      const h = m(u.anchor || u.el),
        v = h && h[Bi];
      return v ? m(v) : h;
    };
  let cs = !1;
  const hr = (u, h, v) => {
      let E;
      (u == null
        ? h._vnode && (Ue(h._vnode, null, null, !0), (E = h._vnode.component))
        : R(h._vnode || null, u, h, null, null, null, v),
        (h._vnode = u),
        cs || ((cs = !0), wr(E), Nn(), (cs = !1)));
    },
    Ot = {
      p: R,
      um: Ue,
      m: We,
      r: dr,
      mt: I,
      mc: j,
      pc: V,
      pbc: O,
      n: pn,
      o: e,
    };
  let as, fs;
  return (
    t && ([as, fs] = t(Ot)),
    { render: hr, hydrate: as, createApp: Rc(hr, as) }
  );
}
function _s({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function vt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function wo(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function or(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (q(s) && q(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      (l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Ze(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && or(o, l)),
        l.type === Rt &&
          (l.patchFlag === -1 && (l = r[i] = Ze(l)), (l.el = o.el)),
        l.type === ge && !l.el && (l.el = o.el));
    }
}
function Kc(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const f = e[s];
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ((t[s] = r), n.push(s));
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        ((l = (i + o) >> 1), e[n[l]] < f ? (i = l + 1) : (o = l));
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) ((n[i] = o), (o = t[o]));
  return n;
}
function So(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : So(t);
}
function Fr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function To(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? To(t.subTree) : null;
}
const Eo = (e) => e.__isSuspense;
function xo(e, t) {
  t && t.pendingBranch
    ? q(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Jl(e);
}
const Te = Symbol.for("v-fgt"),
  Rt = Symbol.for("v-txt"),
  ge = Symbol.for("v-cmt"),
  Qt = Symbol.for("v-stc"),
  Zt = [];
let Oe = null;
function ks(e = !1) {
  Zt.push((Oe = e ? null : []));
}
function Bc() {
  (Zt.pop(), (Oe = Zt[Zt.length - 1] || null));
}
let on = 1;
function $n(e, t = !1) {
  ((on += e), e < 0 && Oe && t && (Oe.hasOnce = !0));
}
function Co(e) {
  return (
    (e.dynamicChildren = on > 0 ? Oe || Nt : null),
    Bc(),
    on > 0 && Oe && Oe.push(e),
    e
  );
}
function lu(e, t, n, s, r, i) {
  return Co(Mo(e, t, n, s, r, i, !0));
}
function Vs(e, t, n, s, r) {
  return Co(ve(e, t, n, s, r, !0));
}
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ao = ({ key: e }) => e ?? null,
  Mn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ce(e) || fe(e) || J(e)
        ? { i: me, r: e, k: t, f: !!n }
        : e
      : null
  );
function Mo(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Te ? 0 : 1,
  o = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ao(t),
    ref: t && Mn(t),
    scopeId: Vi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: me,
  };
  return (
    l
      ? (lr(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ce(n) ? 8 : 16),
    on > 0 &&
      !o &&
      Oe &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Oe.push(c),
    c
  );
}
const ve = qc;
function qc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === so) && (e = ge), ln(e))) {
    const l = dt(e, t, !0);
    return (
      n && lr(l, n),
      on > 0 &&
        !i &&
        Oe &&
        (l.shapeFlag & 6 ? (Oe[Oe.indexOf(e)] = l) : Oe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((sa(e) && (e = e.__vccOpts), t)) {
    t = Gc(t);
    let { class: l, style: c } = t;
    (l && !ce(l) && (t.class = zs(l)),
      ee(c) && (Yn(c) && !q(c) && (c = he({}, c)), (t.style = Ys(c))));
  }
  const o = ce(e) ? 1 : Eo(e) ? 128 : qi(e) ? 64 : ee(e) ? 4 : J(e) ? 2 : 0;
  return Mo(e, t, n, s, r, o, i, !0);
}
function Gc(e) {
  return e ? (Yn(e) || go(e) ? he({}, e) : e) : null;
}
function dt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    f = t ? Jc(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && Ao(f),
      ref:
        t && t.ref
          ? n && i
            ? q(i)
              ? i.concat(Mn(t))
              : [i, Mn(t)]
            : Mn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Te ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && dt(e.ssContent),
      ssFallback: e.ssFallback && dt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (c && s && rn(a, c.clone(a)), a);
}
function Ro(e = " ", t = 0) {
  return ve(Rt, null, e, t);
}
function cu(e, t) {
  const n = ve(Qt, null, e);
  return ((n.staticCount = t), n);
}
function Xc(e = "", t = !1) {
  return t ? (ks(), Vs(ge, null, e)) : ve(ge, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean"
    ? ve(ge)
    : q(e)
      ? ve(Te, null, e.slice())
      : ln(e)
        ? Ze(e)
        : ve(Rt, null, String(e));
}
function Ze(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : dt(e);
}
function lr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (q(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), lr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !go(t)
        ? (t._ctx = me)
        : r === 3 &&
          me &&
          (me.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    J(t)
      ? ((t = { default: t, _ctx: me }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ro(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function Jc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = zs([t.class, s.class]));
      else if (r === "style") t.style = Ys([t.style, s.style]);
      else if (fn(r)) {
        const i = t[r],
          o = s[r];
        o && i !== o && !(q(i) && i.includes(o))
          ? (t[r] = i ? [].concat(i, o) : o)
          : o == null && i == null && !Vn(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function De(e, t, n, s = null) {
  $e(e, t, 7, [n, s]);
}
const Yc = co();
let zc = 0;
function Qc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Yc,
    i = {
      uid: zc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new pl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: vo(s, r),
      emitsOptions: ao(s, r),
      emit: null,
      emitted: null,
      propsDefaults: se,
      inheritAttrs: s.inheritAttrs,
      ctx: se,
      data: se,
      props: se,
      attrs: se,
      slots: se,
      refs: se,
      setupState: se,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Lc.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let _e = null;
const gt = () => _e || me;
let jn, Ws;
{
  const e = Bn(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  ((jn = t("__VUE_INSTANCE_SETTERS__", (n) => (_e = n))),
    (Ws = t("__VUE_SSR_SETTERS__", (n) => (cn = n))));
}
const hn = (e) => {
    const t = _e;
    return (
      jn(e),
      e.scope.on(),
      () => {
        (e.scope.off(), jn(t));
      }
    );
  },
  Hr = () => {
    (_e && _e.scope.off(), jn(null));
  };
function Oo(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function Zc(e, t = !1, n = !1) {
  t && Ws(t);
  const { props: s, children: r } = e.vnode,
    i = Oo(e);
  (Fc(e, s, i, t), kc(e, r, n || t));
  const o = i ? ea(e, t) : void 0;
  return (t && Ws(!1), o);
}
function ea(e, t) {
  const n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, wc)));
  const { setup: s } = n;
  if (s) {
    nt();
    const r = (e.setupContext = s.length > 1 ? Po(e) : null),
      i = hn(e),
      o = dn(s, e, 0, [e.props, r]),
      l = di(o);
    if ((st(), i(), (l || e.sp) && !At(e) && Zi(e), l)) {
      if ((o.then(Hr, Hr), t))
        return o
          .then((c) => {
            $r(e, c);
          })
          .catch((c) => {
            Qn(c, e, 0);
          });
      e.asyncDep = o;
    } else $r(e, o);
  } else Lo(e);
}
function $r(e, t, n) {
  (J(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ee(t) && (e.setupState = Fi(t)),
    Lo(e));
}
function Lo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Je);
  {
    const r = hn(e);
    nt();
    try {
      Tc(e);
    } finally {
      (st(), r());
    }
  }
}
const ta = {
  get(e, t) {
    return (ye(e, "get", ""), e[t]);
  },
};
function Po(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ta),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function is(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Fi(An(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in zt) return zt[n](e);
          },
          has(t, n) {
            return n in t || n in zt;
          },
        }))
    : e.proxy;
}
function na(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function sa(e) {
  return J(e) && "__vccOpts" in e;
}
const oe = (e, t) => Kl(e, t, cn);
function Us(e, t, n) {
  try {
    $n(-1);
    const s = arguments.length;
    return s === 2
      ? ee(t) && !q(t)
        ? ln(t)
          ? ve(e, null, [t])
          : ve(e, t)
        : ve(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && ln(n) && (n = [n]),
        ve(e, t, n));
  } finally {
    $n(1);
  }
}
const ra = "3.5.35";
let Ks;
const jr = typeof window < "u" && window.trustedTypes;
if (jr)
  try {
    Ks = jr.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Io = Ks ? (e) => Ks.createHTML(e) : (e) => e,
  ia = "http://www.w3.org/2000/svg",
  oa = "http://www.w3.org/1998/Math/MathML",
  Qe = typeof document < "u" ? document : null,
  kr = Qe && Qe.createElement("template"),
  la = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? Qe.createElementNS(ia, e)
          : t === "mathml"
            ? Qe.createElementNS(oa, e)
            : n
              ? Qe.createElement(e, { is: n })
              : Qe.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => Qe.createTextNode(e),
    createComment: (e) => Qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));
        );
      else {
        kr.innerHTML = Io(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = kr.content;
        if (s === "svg" || s === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  ot = "transition",
  Kt = "animation",
  an = Symbol("_vtc"),
  No = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  ca = he({}, Gi, No),
  aa = (e) => ((e.displayName = "Transition"), (e.props = ca), e),
  au = aa((e, { slots: t }) => Us(oc, fa(e), t)),
  yt = (e, t = []) => {
    q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Vr = (e) => (e ? (q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function fa(e) {
  const t = {};
  for (const T in e) T in No || (t[T] = e[T]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: f = o,
      appearToClass: a = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: m = `${n}-leave-active`,
      leaveToClass: _ = `${n}-leave-to`,
    } = e,
    M = ua(r),
    R = M && M[0],
    H = M && M[1],
    {
      onBeforeEnter: U,
      onEnter: C,
      onEnterCancelled: p,
      onLeave: g,
      onLeaveCancelled: x,
      onBeforeAppear: F = U,
      onAppear: A = C,
      onAppearCancelled: j = p,
    } = t,
    y = (T, W, I, K) => {
      ((T._enterCancelled = K), _t(T, W ? a : l), _t(T, W ? f : o), I && I());
    },
    O = (T, W) => {
      ((T._isLeaving = !1), _t(T, d), _t(T, _), _t(T, m), W && W());
    },
    k = (T) => (W, I) => {
      const K = T ? A : C,
        N = () => y(W, T, I);
      (yt(K, [W, N]),
        Wr(() => {
          (_t(W, T ? c : i), ze(W, T ? a : l), Vr(K) || Ur(W, s, R, N));
        }));
    };
  return he(t, {
    onBeforeEnter(T) {
      (yt(U, [T]), ze(T, i), ze(T, o));
    },
    onBeforeAppear(T) {
      (yt(F, [T]), ze(T, c), ze(T, f));
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(T, W) {
      T._isLeaving = !0;
      const I = () => O(T, W);
      (ze(T, d),
        T._enterCancelled ? (ze(T, m), qr(T)) : (qr(T), ze(T, m)),
        Wr(() => {
          T._isLeaving && (_t(T, d), ze(T, _), Vr(g) || Ur(T, s, H, I));
        }),
        yt(g, [T, I]));
    },
    onEnterCancelled(T) {
      (y(T, !1, void 0, !0), yt(p, [T]));
    },
    onAppearCancelled(T) {
      (y(T, !0, void 0, !0), yt(j, [T]));
    },
    onLeaveCancelled(T) {
      (O(T), yt(x, [T]));
    },
  });
}
function ua(e) {
  if (e == null) return null;
  if (ee(e)) return [bs(e.enter), bs(e.leave)];
  {
    const t = bs(e);
    return [t, t];
  }
}
function bs(e) {
  return il(e);
}
function ze(e, t) {
  (t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[an] || (e[an] = new Set())).add(t));
}
function _t(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[an];
  n && (n.delete(t), n.size || (e[an] = void 0));
}
function Wr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let da = 0;
function Ur(e, t, n, s) {
  const r = (e._endId = ++da),
    i = () => {
      r === e._endId && s();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = ha(e, t);
  if (!o) return s();
  const f = o + "end";
  let a = 0;
  const d = () => {
      (e.removeEventListener(f, m), i());
    },
    m = (_) => {
      _.target === e && ++a >= c && d();
    };
  (setTimeout(() => {
    a < c && d();
  }, l + 1),
    e.addEventListener(f, m));
}
function ha(e, t) {
  const n = window.getComputedStyle(e),
    s = (M) => (n[M] || "").split(", "),
    r = s(`${ot}Delay`),
    i = s(`${ot}Duration`),
    o = Kr(r, i),
    l = s(`${Kt}Delay`),
    c = s(`${Kt}Duration`),
    f = Kr(l, c);
  let a = null,
    d = 0,
    m = 0;
  t === ot
    ? o > 0 && ((a = ot), (d = o), (m = i.length))
    : t === Kt
      ? f > 0 && ((a = Kt), (d = f), (m = c.length))
      : ((d = Math.max(o, f)),
        (a = d > 0 ? (o > f ? ot : Kt) : null),
        (m = a ? (a === ot ? i.length : c.length) : 0));
  const _ =
    a === ot &&
    /\b(?:transform|all)(?:,|$)/.test(s(`${ot}Property`).toString());
  return { type: a, timeout: d, propCount: m, hasTransform: _ };
}
function Kr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Br(n) + Br(e[s])));
}
function Br(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function qr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function pa(e, t, n) {
  const s = e[an];
  (s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const kn = Symbol("_vod"),
  Do = Symbol("_vsh"),
  fu = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[kn] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Bt(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Bt(e, !0), s.enter(e))
            : s.leave(e, () => {
                Bt(e, !1);
              })
          : Bt(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Bt(e, t);
    },
  };
function Bt(e, t) {
  ((e.style.display = t ? e[kn] : "none"), (e[Do] = !t));
}
const ga = Symbol(""),
  ma = /(?:^|;)\s*display\s*:/;
function va(e, t, n) {
  const s = e.style,
    r = ce(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ce(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Xt(s, l, "");
        }
      else for (const o in t) n[o] == null && Xt(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null
        ? _a(e, o, !ce(t) && t ? t[o] : void 0, l) || Xt(s, o, l)
        : Xt(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[ga];
      (o && (n += ";" + o), (s.cssText = n), (i = ma.test(n)));
    }
  } else t && e.removeAttribute("style");
  kn in e && ((e[kn] = i ? s.display : ""), e[Do] && (s.display = "none"));
}
const Gr = /\s*!important$/;
function Xt(e, t, n) {
  if (q(n)) n.forEach((s) => Xt(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = ya(e, t);
    Gr.test(n)
      ? e.setProperty(pt(s), n.replace(Gr, ""), "important")
      : (e[s] = n);
  }
}
const Xr = ["Webkit", "Moz", "ms"],
  ws = {};
function ya(e, t) {
  const n = ws[t];
  if (n) return n;
  let s = xe(t);
  if (s !== "filter" && s in e) return (ws[t] = s);
  s = Kn(s);
  for (let r = 0; r < Xr.length; r++) {
    const i = Xr[r] + s;
    if (i in e) return (ws[t] = i);
  }
  return t;
}
function _a(e, t, n, s) {
  return (
    e.tagName === "TEXTAREA" &&
    (t === "width" || t === "height") &&
    ce(s) &&
    n === s
  );
}
const Jr = "http://www.w3.org/1999/xlink";
function Yr(e, t, n, s, r, i = ul(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Jr, t.slice(6, t.length))
      : e.setAttributeNS(Jr, t, n)
    : n == null || (i && !mi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : Ie(n) ? String(n) : n);
}
function zr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Io(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    ((l !== c || !("_value" in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n));
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = mi(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function ba(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function wa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Qr = Symbol("_vei");
function Sa(e, t, n, s, r = null) {
  const i = e[Qr] || (e[Qr] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, c] = Ta(t);
    if (s) {
      const f = (i[t] = Ca(s, r));
      ba(e, l, f, c);
    } else o && (wa(e, l, o, c), (i[t] = void 0));
  }
}
const Zr = /(?:Once|Passive|Capture)$/;
function Ta(e) {
  let t;
  if (Zr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Zr)); )
      ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0));
  }
  return [e[2] === ":" ? e.slice(3) : pt(e.slice(2)), t];
}
let Ss = 0;
const Ea = Promise.resolve(),
  xa = () => Ss || (Ea.then(() => (Ss = 0)), (Ss = Date.now()));
function Ca(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    const r = n.value;
    if (q(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        (i.call(s), (s._stopped = !0));
      };
      const o = r.slice(),
        l = [s];
      for (let c = 0; c < o.length && !s._stopped; c++) {
        const f = o[c];
        f && $e(f, t, 5, l);
      }
    } else $e(r, t, 5, [s]);
  };
  return ((n.value = e), (n.attached = xa()), n);
}
const ei = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Aa = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class"
      ? pa(e, s, o)
      : t === "style"
        ? va(e, n, s)
        : fn(t)
          ? Vn(t) || Sa(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Ma(e, t, s, o)
              )
            ? (zr(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Yr(e, t, s, o, i, t !== "value"))
            : e._isVueCE &&
                (Ra(e, t) ||
                  (e._def.__asyncLoader && (/[A-Z]/.test(t) || !ce(s))))
              ? zr(e, xe(t), s, i, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Yr(e, t, s, o));
  };
function Ma(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && ei(t) && J(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ei(t) && ce(n) ? !1 : t in e;
}
function Ra(e, t) {
  const n = e._def.props;
  if (!n) return !1;
  const s = xe(t);
  return Array.isArray(n)
    ? n.some((r) => xe(r) === s)
    : Object.keys(n).some((r) => xe(r) === s);
}
const Oa = ["ctrl", "shift", "alt", "meta"],
  La = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Oa.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  uu = (e, t) => {
    if (!e) return e;
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = La[t[o]];
          if (l && l(r, t)) return;
        }
        return e(r, ...i);
      })
    );
  },
  Pa = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  du = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!("key" in r)) return;
        const i = pt(r.key);
        if (t.some((o) => o === i || Pa[o] === i)) return e(r);
      })
    );
  },
  Ia = he({ patchProp: Aa }, la);
let Ts,
  ti = !1;
function Na() {
  return ((Ts = ti ? Ts : Wc(Ia)), (ti = !0), Ts);
}
const hu = (...e) => {
  const t = Na().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Fa(s);
      if (r) return n(r, !0, Da(r));
    }),
    t
  );
};
function Da(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Fa(e) {
  return ce(e) ? document.querySelector(e) : e;
}
const pu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  Ha = window.__VP_SITE_DATA__;
function Fo(e, t) {
  return Zs() ? (gl(e, t), !0) : !1;
}
const Es = new WeakMap(),
  $a = (...e) => {
    var t;
    const n = e[0],
      s = (t = gt()) === null || t === void 0 ? void 0 : t.proxy,
      r = s ?? Zs();
    if (r == null && !Wi())
      throw new Error("injectLocal must be called in setup");
    return r && Es.has(r) && n in Es.get(r) ? Es.get(r)[n] : Ct(...e);
  },
  Ho = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ja = (e) => e != null,
  ka = Object.prototype.toString,
  Va = (e) => ka.call(e) === "[object Object]",
  ht = () => {},
  ni = Wa();
function Wa() {
  var e, t, n;
  return (
    Ho &&
    !!(
      !(
        (e = window) === null ||
        e === void 0 ||
        (e = e.navigator) === null ||
        e === void 0
      ) && e.userAgent
    ) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window) === null ||
      t === void 0 ||
      (t = t.navigator) === null ||
      t === void 0
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          (n = window) === null || n === void 0
            ? void 0
            : n.navigator.userAgent,
        )))
  );
}
function cr(...e) {
  if (e.length !== 1) return Wl(...e);
  const t = e[0];
  return typeof t == "function" ? nn(jl(() => ({ get: t, set: ht }))) : xt(t);
}
function ar(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
      )
        .then(r)
        .catch(i);
    });
  }
  return n;
}
const $o = (e) => e();
function Ua(e, t = {}) {
  let n,
    s,
    r = ht;
  const i = (c) => {
    (clearTimeout(c), r(), (r = ht));
  };
  let o;
  return (c) => {
    const f = le(e),
      a = le(t.maxWait);
    return (
      n && i(n),
      f <= 0 || (a !== void 0 && a <= 0)
        ? (s && (i(s), (s = void 0)), Promise.resolve(c()))
        : new Promise((d, m) => {
            ((r = t.rejectOnCancel ? m : d),
              (o = c),
              a &&
                !s &&
                (s = setTimeout(() => {
                  (n && i(n), (s = void 0), d(o()));
                }, a)),
              (n = setTimeout(() => {
                (s && i(s), (s = void 0), d(c()));
              }, f)));
          })
    );
  };
}
function Ka(...e) {
  let t = 0,
    n,
    s = !0,
    r = ht,
    i,
    o,
    l,
    c,
    f;
  !fe(e[0]) && typeof e[0] == "object"
    ? ({
        delay: o,
        trailing: l = !0,
        leading: c = !0,
        rejectOnCancel: f = !1,
      } = e[0])
    : ([o, l = !0, c = !0, f = !1] = e);
  const a = () => {
    n && (clearTimeout(n), (n = void 0), r(), (r = ht));
  };
  return (m) => {
    const _ = le(o),
      M = Date.now() - t,
      R = () => (i = m());
    return (
      a(),
      _ <= 0
        ? ((t = Date.now()), R())
        : (M > _
            ? ((t = Date.now()), (c || !s) && R())
            : l &&
              (i = new Promise((H, U) => {
                ((r = f ? U : H),
                  (n = setTimeout(
                    () => {
                      ((t = Date.now()), (s = !0), H(R()), a());
                    },
                    Math.max(0, _ - M),
                  )));
              })),
          !c && !n && (n = setTimeout(() => (s = !0), _)),
          (s = !1),
          i)
    );
  };
}
function Ba(e = $o, t = {}) {
  const { initialState: n = "active" } = t,
    s = cr(n === "active");
  function r() {
    s.value = !1;
  }
  function i() {
    s.value = !0;
  }
  return {
    isActive: Dl(s),
    pause: r,
    resume: i,
    eventFilter: (...l) => {
      s.value && e(...l);
    },
  };
}
function si(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Rn(e) {
  return Array.isArray(e) ? e : [e];
}
function jo(e) {
  return gt();
}
function qa(e, t = 200, n = {}) {
  return ar(Ua(t, n), e);
}
function Ga(e, t = 200, n = !1, s = !0, r = !1) {
  return ar(Ka(t, n, s, r), e);
}
function Xa(e, t, n = {}) {
  const { eventFilter: s = $o, ...r } = n;
  return Pe(e, ar(s, t), r);
}
function Ja(e, t, n = {}) {
  const { eventFilter: s, initialState: r = "active", ...i } = n,
    {
      eventFilter: o,
      pause: l,
      resume: c,
      isActive: f,
    } = Ba(s, { initialState: r });
  return {
    stop: Xa(e, t, { ...i, eventFilter: o }),
    pause: l,
    resume: c,
    isActive: f,
  };
}
function os(e, t = !0, n) {
  jo() ? jt(e, n) : t ? e() : Zn(e);
}
function Ya(e, t) {
  jo() && ss(e, t);
}
function za(e, t, n) {
  return Pe(e, t, { ...n, immediate: !0 });
}
const Ee = Ho ? window : void 0;
function ls(e) {
  var t;
  const n = le(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ae(...e) {
  const t = (s, r, i, o) => (
      s.addEventListener(r, i, o),
      () => s.removeEventListener(r, i, o)
    ),
    n = oe(() => {
      const s = Rn(le(e[0])).filter((r) => r != null);
      return s.every((r) => typeof r != "string") ? s : void 0;
    });
  return za(
    () => {
      var s, r;
      return [
        (s =
          (r = n.value) === null || r === void 0
            ? void 0
            : r.map((i) => ls(i))) !== null && s !== void 0
          ? s
          : [Ee].filter((i) => i != null),
        Rn(le(n.value ? e[1] : e[0])),
        Rn(zn(n.value ? e[2] : e[1])),
        le(n.value ? e[3] : e[2]),
      ];
    },
    ([s, r, i, o], l, c) => {
      if (!s?.length || !r?.length || !i?.length) return;
      const f = Va(o) ? { ...o } : o,
        a = s.flatMap((d) => r.flatMap((m) => i.map((_) => t(d, m, _, f))));
      c(() => {
        a.forEach((d) => d());
      });
    },
    { flush: "post" },
  );
}
function Qa() {
  const e = Ce(!1),
    t = gt();
  return (
    t &&
      jt(() => {
        e.value = !0;
      }, t),
    e
  );
}
function fr(e) {
  const t = Qa();
  return oe(() => (t.value, !!e()));
}
function Za(e, t, n = {}) {
  const { window: s = Ee, ...r } = n;
  let i;
  const o = fr(() => s && "MutationObserver" in s),
    l = () => {
      i && (i.disconnect(), (i = void 0));
    },
    c = Pe(
      oe(() => {
        const d = Rn(le(e)).map(ls).filter(ja);
        return new Set(d);
      }),
      (d) => {
        (l(),
          o.value &&
            d.size &&
            ((i = new MutationObserver(t)), d.forEach((m) => i.observe(m, r))));
      },
      { immediate: !0, flush: "post" },
    ),
    f = () => i?.takeRecords(),
    a = () => {
      (c(), l());
    };
  return (Fo(a), { isSupported: o, stop: a, takeRecords: f });
}
function ef(e) {
  return typeof e == "function"
    ? e
    : typeof e == "string"
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0;
}
function gu(...e) {
  let t,
    n,
    s = {};
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == "object"
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]));
  const {
      target: r = Ee,
      eventName: i = "keydown",
      passive: o = !1,
      dedupe: l = !1,
    } = s,
    c = ef(t);
  return Ae(
    r,
    i,
    (a) => {
      (a.repeat && le(l)) || (c(a) && n(a));
    },
    o,
  );
}
const tf = Symbol("vueuse-ssr-width");
function nf() {
  const e = Wi() ? $a(tf, null) : null;
  return typeof e == "number" ? e : void 0;
}
function ko(e, t = {}) {
  const { window: n = Ee, ssrWidth: s = nf() } = t,
    r = fr(() => n && "matchMedia" in n && typeof n.matchMedia == "function"),
    i = Ce(typeof s == "number"),
    o = Ce(),
    l = Ce(!1),
    c = (f) => {
      l.value = f.matches;
    };
  return (
    Ui(() => {
      if (i.value) {
        ((i.value = !r.value),
          (l.value = le(e)
            .split(",")
            .some((f) => {
              const a = f.includes("not all"),
                d = f.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
                m = f.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
              let _ = !!(d || m);
              return (
                d && _ && (_ = s >= si(d[1])),
                m && _ && (_ = s <= si(m[1])),
                a ? !_ : _
              );
            })));
        return;
      }
      r.value && ((o.value = n.matchMedia(le(e))), (l.value = o.value.matches));
    }),
    Ae(o, "change", c, { passive: !0 }),
    oe(() => l.value)
  );
}
const Sn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  Tn = "__vueuse_ssr_handlers__",
  sf = rf();
function rf() {
  return (Tn in Sn || (Sn[Tn] = Sn[Tn] || {}), Sn[Tn]);
}
function Vo(e, t) {
  return sf[e] || t;
}
function Wo(e) {
  return ko("(prefers-color-scheme: dark)", e);
}
function of(e) {
  return e == null
    ? "any"
    : e instanceof Set
      ? "set"
      : e instanceof Map
        ? "map"
        : e instanceof Date
          ? "date"
          : typeof e == "boolean"
            ? "boolean"
            : typeof e == "string"
              ? "string"
              : typeof e == "object"
                ? "object"
                : Number.isNaN(e)
                  ? "any"
                  : "number";
}
const lf = {
    boolean: { read: (e) => e === "true", write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  ri = "vueuse-storage";
function Uo(e, t, n, s = {}) {
  var r;
  const {
      flush: i = "pre",
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: f = !1,
      shallow: a,
      window: d = Ee,
      eventFilter: m,
      onError: _ = (I) => {
        console.error(I);
      },
      initOnMounted: M,
    } = s,
    R = (a ? Ce : xt)(typeof t == "function" ? t() : t),
    H = oe(() => le(e));
  if (!n)
    try {
      n = Vo("getDefaultStorage", () => Ee?.localStorage)();
    } catch (I) {
      _(I);
    }
  if (!n) return R;
  const U = le(t),
    C = of(U),
    p = (r = s.serializer) !== null && r !== void 0 ? r : lf[C],
    { pause: g, resume: x } = Ja(R, (I) => O(I), {
      flush: i,
      deep: o,
      eventFilter: m,
    });
  Pe(H, () => T(), { flush: i });
  let F = !1;
  const A = (I) => {
      (M && !F) || T(I);
    },
    j = (I) => {
      (M && !F) || W(I);
    };
  (d &&
    l &&
    (n instanceof Storage
      ? Ae(d, "storage", A, { passive: !0 })
      : Ae(d, ri, j)),
    M
      ? os(() => {
          ((F = !0), T());
        })
      : T());
  function y(I, K) {
    if (d) {
      const N = { key: H.value, oldValue: I, newValue: K, storageArea: n };
      d.dispatchEvent(
        n instanceof Storage
          ? new StorageEvent("storage", N)
          : new CustomEvent(ri, { detail: N }),
      );
    }
  }
  function O(I) {
    try {
      const K = n.getItem(H.value);
      if (I == null) (y(K, null), n.removeItem(H.value));
      else {
        const N = p.write(I);
        K !== N && (n.setItem(H.value, N), y(K, N));
      }
    } catch (K) {
      _(K);
    }
  }
  function k(I) {
    const K = I ? I.newValue : n.getItem(H.value);
    if (K == null) return (c && U != null && n.setItem(H.value, p.write(U)), U);
    if (!I && f) {
      const N = p.read(K);
      return typeof f == "function"
        ? f(N, U)
        : C === "object" && !Array.isArray(N)
          ? { ...U, ...N }
          : N;
    } else return typeof K != "string" ? K : p.read(K);
  }
  function T(I) {
    if (!(I && I.storageArea !== n)) {
      if (I && I.key == null) {
        R.value = U;
        return;
      }
      if (!(I && I.key !== H.value)) {
        g();
        try {
          const K = p.write(R.value);
          (I === void 0 || I?.newValue !== K) && (R.value = k(I));
        } catch (K) {
          _(K);
        } finally {
          I ? Zn(x) : x();
        }
      }
    }
  }
  function W(I) {
    T(I.detail);
  }
  return R;
}
const cf =
  "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function af(e = {}) {
  const {
      selector: t = "html",
      attribute: n = "class",
      initialValue: s = "auto",
      window: r = Ee,
      storage: i,
      storageKey: o = "vueuse-color-scheme",
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: f,
      disableTransition: a = !0,
    } = e,
    d = { auto: "", light: "light", dark: "dark", ...(e.modes || {}) },
    m = Wo({ window: r }),
    _ = oe(() => (m.value ? "dark" : "light")),
    M =
      c ||
      (o == null
        ? cr(s)
        : Uo(o, s, i, { window: r, listenToStorageChanges: l })),
    R = oe(() => (M.value === "auto" ? _.value : M.value)),
    H = Vo("updateHTMLAttrs", (g, x, F) => {
      const A = typeof g == "string" ? r?.document.querySelector(g) : ls(g);
      if (!A) return;
      const j = new Set(),
        y = new Set();
      let O = null;
      if (x === "class") {
        const T = F.split(/\s/g);
        Object.values(d)
          .flatMap((W) => (W || "").split(/\s/g))
          .filter(Boolean)
          .forEach((W) => {
            T.includes(W) ? j.add(W) : y.add(W);
          });
      } else O = { key: x, value: F };
      if (j.size === 0 && y.size === 0 && O === null) return;
      let k;
      a &&
        ((k = r.document.createElement("style")),
        k.appendChild(document.createTextNode(cf)),
        r.document.head.appendChild(k));
      for (const T of j) A.classList.add(T);
      for (const T of y) A.classList.remove(T);
      (O && A.setAttribute(O.key, O.value),
        a && (r.getComputedStyle(k).opacity, document.head.removeChild(k)));
    });
  function U(g) {
    var x;
    H(t, n, (x = d[g]) !== null && x !== void 0 ? x : g);
  }
  function C(g) {
    e.onChanged ? e.onChanged(g, U) : U(g);
  }
  (Pe(R, C, { flush: "post", immediate: !0 }), os(() => C(R.value)));
  const p = oe({
    get() {
      return f ? M.value : R.value;
    },
    set(g) {
      M.value = g;
    },
  });
  return Object.assign(p, { store: M, system: _, state: R });
}
function ff(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "" } = e,
    s = af({
      ...e,
      onChanged: (i, o) => {
        var l;
        e.onChanged
          ? (l = e.onChanged) === null ||
            l === void 0 ||
            l.call(e, i === "dark", o, i)
          : o(i);
      },
      modes: { dark: t, light: n },
    }),
    r = oe(() => s.system.value);
  return oe({
    get() {
      return s.value === "dark";
    },
    set(i) {
      const o = i ? "dark" : "light";
      r.value === o ? (s.value = "auto") : (s.value = o);
    },
  });
}
function xs(e) {
  return typeof Window < "u" && e instanceof Window
    ? e.document.documentElement
    : typeof Document < "u" && e instanceof Document
      ? e.documentElement
      : e;
}
const ii = 1;
function uf(e, t = {}) {
  const {
      throttle: n = 0,
      idle: s = 200,
      onStop: r = ht,
      onScroll: i = ht,
      offset: o = { left: 0, right: 0, top: 0, bottom: 0 },
      observe: l = { mutation: !1 },
      eventListenerOptions: c = { capture: !1, passive: !0 },
      behavior: f = "auto",
      window: a = Ee,
      onError: d = (y) => {
        console.error(y);
      },
    } = t,
    m = typeof l == "boolean" ? { mutation: l } : l,
    _ = Ce(0),
    M = Ce(0),
    R = oe({
      get() {
        return _.value;
      },
      set(y) {
        U(y, void 0);
      },
    }),
    H = oe({
      get() {
        return M.value;
      },
      set(y) {
        U(void 0, y);
      },
    });
  function U(y, O) {
    var k, T, W, I;
    if (!a) return;
    const K = le(e);
    if (!K) return;
    (k = K instanceof Document ? a.document.body : K) === null ||
      k === void 0 ||
      k.scrollTo({
        top: (T = le(O)) !== null && T !== void 0 ? T : H.value,
        left: (W = le(y)) !== null && W !== void 0 ? W : R.value,
        behavior: le(f),
      });
    const N =
      (K == null || (I = K.document) === null || I === void 0
        ? void 0
        : I.documentElement) ||
      K?.documentElement ||
      K;
    (R != null && (_.value = N.scrollLeft),
      H != null && (M.value = N.scrollTop));
  }
  const C = Ce(!1),
    p = ut({ left: !0, right: !1, top: !0, bottom: !1 }),
    g = ut({ left: !1, right: !1, top: !1, bottom: !1 }),
    x = (y) => {
      C.value &&
        ((C.value = !1),
        (g.left = !1),
        (g.right = !1),
        (g.top = !1),
        (g.bottom = !1),
        r(y));
    },
    F = qa(x, n + s),
    A = (y) => {
      var O;
      if (!a) return;
      const k =
          (y == null || (O = y.document) === null || O === void 0
            ? void 0
            : O.documentElement) ||
          y?.documentElement ||
          ls(y),
        { display: T, flexDirection: W, direction: I } = a.getComputedStyle(k),
        K = I === "rtl" ? -1 : 1,
        N = k.scrollLeft;
      ((g.left = N < _.value), (g.right = N > _.value));
      const Y = Math.abs(N * K) <= (o.left || 0),
        V =
          Math.abs(N * K) + k.clientWidth >=
          k.scrollWidth - (o.right || 0) - ii;
      (T === "flex" && W === "row-reverse"
        ? ((p.left = V), (p.right = Y))
        : ((p.left = Y), (p.right = V)),
        (_.value = N));
      let Q = k.scrollTop;
      (y === a.document && !Q && (Q = a.document.body.scrollTop),
        (g.top = Q < M.value),
        (g.bottom = Q > M.value));
      const mt = Math.abs(Q) <= (o.top || 0),
        We =
          Math.abs(Q) + k.clientHeight >= k.scrollHeight - (o.bottom || 0) - ii;
      (T === "flex" && W === "column-reverse"
        ? ((p.top = We), (p.bottom = mt))
        : ((p.top = mt), (p.bottom = We)),
        (M.value = Q));
    },
    j = (y) => {
      var O;
      a &&
        (A(
          (O = y.target.documentElement) !== null && O !== void 0
            ? O
            : y.target,
        ),
        (C.value = !0),
        F(y),
        i(y));
    };
  return (
    Ae(e, "scroll", n ? Ga(j, n, !0, !1) : j, c),
    os(() => {
      try {
        const y = le(e);
        if (!y) return;
        A(y);
      } catch (y) {
        d(y);
      }
    }),
    m?.mutation &&
      e != null &&
      e !== a &&
      e !== document &&
      Za(
        e,
        () => {
          const y = le(e);
          y && A(y);
        },
        { attributes: !0, childList: !0, subtree: !0 },
      ),
    Ae(e, "scrollend", x, c),
    {
      x: R,
      y: H,
      isScrolling: C,
      arrivedState: p,
      directions: g,
      measure() {
        const y = le(e);
        a && y && A(y);
      },
    }
  );
}
function mu(e, t, n = {}) {
  const { window: s = Ee } = n;
  return Uo(e, t, s?.localStorage, n);
}
const df = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright",
};
function vu(e = {}) {
  const {
      reactive: t = !1,
      target: n = Ee,
      aliasMap: s = df,
      passive: r = !0,
      onEventFired: i = ht,
    } = e,
    o = ut(new Set()),
    l = {
      toJSON() {
        return {};
      },
      current: o,
    },
    c = t ? ut(l) : l,
    f = new Set(),
    a = new Map([
      ["Meta", f],
      ["Shift", new Set()],
      ["Alt", new Set()],
    ]),
    d = new Set();
  function m(C, p) {
    C in c && (t ? (c[C] = p) : (c[C].value = p));
  }
  function _() {
    o.clear();
    for (const C of d) m(C, !1);
  }
  function M(C, p, g) {
    if (!(!C || typeof p.getModifierState != "function")) {
      for (const [x, F] of a)
        if (p.getModifierState(x)) {
          g.forEach((A) => F.add(A));
          break;
        }
    }
  }
  function R(C, p) {
    if (C) return;
    const g = `${p[0].toUpperCase()}${p.slice(1)}`,
      x = a.get(g);
    if (!["shift", "alt"].includes(p) || !x) return;
    const F = Array.from(x),
      A = F.indexOf(p);
    (F.forEach((j, y) => {
      y >= A && (o.delete(j), m(j, !1));
    }),
      x.clear());
  }
  function H(C, p) {
    var g, x;
    const F = (g = C.key) === null || g === void 0 ? void 0 : g.toLowerCase(),
      A = [
        (x = C.code) === null || x === void 0 ? void 0 : x.toLowerCase(),
        F,
      ].filter(Boolean);
    if (F) {
      F && (p ? o.add(F) : o.delete(F));
      for (const j of A) (d.add(j), m(j, p));
      (M(p, C, [...o, ...A]),
        R(p, F),
        F === "meta" &&
          !p &&
          (f.forEach((j) => {
            (o.delete(j), m(j, !1));
          }),
          f.clear()));
    }
  }
  (Ae(n, "keydown", (C) => (H(C, !0), i(C)), { passive: r }),
    Ae(n, "keyup", (C) => (H(C, !1), i(C)), { passive: r }),
    Ae("blur", _, { passive: r }),
    Ae("focus", _, { passive: r }));
  const U = new Proxy(c, {
    get(C, p, g) {
      if (typeof p != "string") return Reflect.get(C, p, g);
      if (((p = p.toLowerCase()), p in s && (p = s[p]), !(p in c)))
        if (/[+_-]/.test(p)) {
          const F = p.split(/[+_-]/g).map((A) => A.trim());
          c[p] = oe(() => F.map((A) => le(U[A])).every(Boolean));
        } else c[p] = Ce(!1);
      const x = Reflect.get(C, p, g);
      return t ? le(x) : x;
    },
  });
  return U;
}
function yu(e = {}) {
  const { window: t = Ee } = e,
    n = t?.navigator,
    s = fr(() => n && "language" in n),
    r = Ce(n?.language);
  return (
    Ae(
      t,
      "languagechange",
      () => {
        n && (r.value = n.language);
      },
      { passive: !0 },
    ),
    { isSupported: s, language: r }
  );
}
function Ko(e) {
  const t = window.getComputedStyle(e);
  if (
    t.overflowX === "scroll" ||
    t.overflowY === "scroll" ||
    (t.overflowX === "auto" && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
  )
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : Ko(n);
  }
}
function hf(e) {
  const t = e || window.event,
    n = t.target;
  return Ko(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1);
}
const Cs = new WeakMap();
function _u(e, t = !1) {
  const n = Ce(t);
  let s = null,
    r = "";
  Pe(
    cr(e),
    (l) => {
      const c = xs(le(l));
      if (c) {
        const f = c;
        if (
          (Cs.get(f) || Cs.set(f, f.style.overflow),
          f.style.overflow !== "hidden" && (r = f.style.overflow),
          f.style.overflow === "hidden")
        )
          return (n.value = !0);
        if (n.value) return (f.style.overflow = "hidden");
      }
    },
    { immediate: !0 },
  );
  const i = () => {
      const l = xs(le(e));
      !l ||
        n.value ||
        (ni &&
          (s = Ae(
            l,
            "touchmove",
            (c) => {
              hf(c);
            },
            { passive: !1 },
          )),
        (l.style.overflow = "hidden"),
        (n.value = !0));
    },
    o = () => {
      const l = xs(le(e));
      !l ||
        !n.value ||
        (ni && s?.(), (l.style.overflow = r), Cs.delete(l), (n.value = !1));
    };
  return (
    Fo(o),
    oe({
      get() {
        return n.value;
      },
      set(l) {
        l ? i() : o();
      },
    })
  );
}
function bu(e = {}) {
  const { window: t = Ee, ...n } = e;
  return uf(t, n);
}
function wu(e = {}) {
  const {
      window: t = Ee,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = "inner",
    } = e,
    l = Ce(n),
    c = Ce(s),
    f = () => {
      if (t)
        if (o === "outer")
          ((l.value = t.outerWidth), (c.value = t.outerHeight));
        else if (o === "visual" && t.visualViewport) {
          const { width: d, height: m, scale: _ } = t.visualViewport;
          ((l.value = Math.round(d * _)), (c.value = Math.round(m * _)));
        } else
          i
            ? ((l.value = t.innerWidth), (c.value = t.innerHeight))
            : ((l.value = t.document.documentElement.clientWidth),
              (c.value = t.document.documentElement.clientHeight));
    };
  (f(), os(f));
  const a = { passive: !0 };
  return (
    Ae("resize", f, a),
    t &&
      o === "visual" &&
      t.visualViewport &&
      Ae(t.visualViewport, "resize", f, a),
    r && Pe(ko("(orientation: portrait)"), () => f()),
    { width: l, height: c }
  );
}
const pf = {};
var gf = {};
const Bo = /^(?:[a-z]+:|\/\/)/i,
  mf = "vitepress-theme-appearance",
  qo = Symbol("stack-view:unpack"),
  vf = /#.*?(?=:~:|$)/,
  yf = /[?#].*$/,
  _f = /(?:(^|\/)index)?\.(?:md|html)$/,
  pe = typeof document < "u",
  Go = {
    relativePath: "404.md",
    filePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: { sidebar: !1, layout: "page" },
    lastUpdated: 0,
    isNotFound: !0,
  };
function bf(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = oi(`/${e}`)), n)) return new RegExp(t).test(e);
  if (oi(t) !== e) return !1;
  const s = t.match(vf);
  return s ? (pe ? location.hash : "") === s[0] : !0;
}
function oi(e) {
  return decodeURI(e).replace(yf, "").replace(_f, "$1");
}
function wf(e) {
  return Bo.test(e);
}
function Sf(e, t) {
  return (
    Object.keys(e?.locales || {}).find(
      (n) => n !== "root" && !wf(n) && bf(t, `^/${n}/`, !0),
    ) || "root"
  );
}
function Tf(e, t) {
  const n = Sf(e, t),
    { label: s, link: r, ...i } = e.locales[n] ?? {};
  Object.assign(i, { localeIndex: n });
  const o = Mf(e, t),
    l = {
      head: Jo(
        e.head ?? [],
        i.head ?? [],
        ...o.map((c) => c.head ?? []).reverse(),
      ),
    };
  return ur(l, ...o, i, e);
}
function Xo(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate;
  if (typeof s == "string" && s.includes(":title"))
    return s.replace(/:title/g, n);
  const r = Ef(e.title, s);
  return n === r.slice(3) ? n : `${n}${r}`;
}
function Ef(e, t) {
  return t === !1
    ? ""
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ""
        : ` | ${t}`;
}
function Jo(...e) {
  const t = [],
    n = new Map();
  for (const s of e)
    for (const r of s) {
      const [i, o] = r,
        l = Object.entries(o)[0];
      if (i !== "meta" || !l) {
        t.push(r);
        continue;
      }
      const c = `${l[0]}=${l[1]}`,
        f = n.get(c);
      f != null ? (t[f] = r) : (n.set(c, t.length), t.push(r));
    }
  return t;
}
const xf = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  Cf = /^[a-z]:/i;
function li(e) {
  const t = Cf.exec(e),
    n = t ? t[0] : "";
  return (
    n +
    e
      .slice(n.length)
      .replace(xf, "_")
      .replace(/(^|\/)_+(?=[^/]*$)/, "$1")
  );
}
const As = new Set();
function Af(e) {
  if (As.size === 0) {
    const n =
      (typeof process == "object" && gf?.VITE_EXTRA_EXTENSIONS) ||
      pf?.VITE_EXTRA_EXTENSIONS ||
      "";
    (
      "3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" +
      (n && typeof n == "string" ? "," + n : "")
    )
      .split(",")
      .forEach((s) => As.add(s));
  }
  const t = e.split(".").pop();
  return t == null || !As.has(t.toLowerCase());
}
function Mf({ additionalConfig: e }, t) {
  if (e === void 0) return [];
  if (typeof e == "function") return e(t) ?? [];
  const n = [],
    s = t.split("/").slice(0, -1);
  for (; s.length; ) {
    const r = `/${s.join("/")}/`;
    (n.push(e[r]), s.pop());
  }
  return (n.push(e["/"]), n.filter((r) => r !== void 0));
}
function ur(...e) {
  const t = e.filter((r) => Rf(r));
  if (t.length <= 1) return e[0];
  const n = new Set(t.flatMap((r) => Reflect.ownKeys(r))),
    s = [...n];
  return new Proxy(
    {},
    {
      get(r, i) {
        return i === qo
          ? t
          : ur(...t.map((o) => o[i]).filter((o) => o !== void 0));
      },
      set() {
        throw new Error("StackView is read-only and cannot be mutated.");
      },
      has(r, i) {
        return n.has(i);
      },
      ownKeys() {
        return s;
      },
      getOwnPropertyDescriptor(r, i) {
        for (const o of t) {
          const l = Object.getOwnPropertyDescriptor(o, i);
          if (l) return l;
        }
      },
    },
  );
}
ur.unpack = function (e) {
  return e?.[qo];
};
function Rf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
const Of = ["shellscript", "shell", "bash", "sh", "zsh"];
function Lf(e) {
  return Of.includes(e);
}
const Pf = Symbol(),
  at = Ce(nn(Ha));
function Su(e) {
  const t = oe(() => Tf(at.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === "force-dark"
        ? xt(!0)
        : n === "force-auto"
          ? Wo()
          : n
            ? ff({
                storageKey: mf,
                initialValue: () => (n === "dark" ? "dark" : "auto"),
                ...(typeof n == "object" ? n : {}),
              })
            : xt(!1),
    r = xt(pe ? location.hash : "");
  return (
    pe &&
      window.addEventListener("hashchange", () => {
        r.value = location.hash;
      }),
    Pe(
      () => e.data,
      () => {
        r.value = pe ? location.hash : "";
      },
    ),
    {
      site: t,
      theme: oe(() => t.value.themeConfig),
      page: oe(() => e.data),
      frontmatter: oe(() => e.data.frontmatter),
      params: oe(() => e.data.params),
      lang: oe(() => t.value.lang),
      dir: oe(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: oe(() => t.value.localeIndex || "root"),
      title: oe(() => Xo(t.value, e.data)),
      description: oe(() => e.data.description || t.value.description),
      isDark: s,
      hash: oe(() => r.value),
    }
  );
}
function If() {
  const e = Ct(Pf);
  if (!e) throw new Error("vitepress data not properly injected in app");
  return e;
}
function Nf(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/");
}
function ci(e) {
  return Bo.test(e) || !e.startsWith("/") ? e : Nf(at.value.base, e);
}
function Df(e) {
  let t = e.replace(/\.html$/, "");
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, "/index")), pe)) {
    const n = "/myBlog/";
    t = li(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
    let s = __VP_HASH_MAP__[t.toLowerCase()];
    if (
      (s ||
        ((t = t.endsWith("_index.md")
          ? t.slice(0, -9) + ".md"
          : t.slice(0, -3) + "_index.md"),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null;
    t = `${n}assets/${t}.${s}.js`;
  } else t = `./${li(t.slice(1).replace(/\//g, "_"))}.md.js`;
  return t;
}
let On = [];
function Tu(e) {
  (On.push(e),
    Ya(() => {
      On = On.filter((t) => t !== e);
    }));
}
function Ff() {
  let e = at.value.scrollOffset,
    t = 0,
    n = 24;
  if (
    (typeof e == "object" &&
      "padding" in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == "number")
  )
    t = e;
  else if (typeof e == "string") t = ai(e, n);
  else if (Array.isArray(e))
    for (const s of e) {
      const r = ai(s, n);
      if (r) {
        t = r;
        break;
      }
    }
  return t;
}
function ai(e, t) {
  const n = document.querySelector(e);
  if (!n) return 0;
  const s = n.getBoundingClientRect().bottom;
  return s < 0 ? 0 : s + t;
}
const Hf = Symbol(),
  Bs = "http://a.com",
  $f = () => ({ path: "/", hash: "", query: "", component: null, data: Go });
function Eu(e, t) {
  const n = ut($f()),
    s = {
      route: n,
      async go(l, c) {
        const { hash: f } = new URL(l, Bs),
          a = pe && document.fragmentDirective && f.includes(":~:");
        ((l = Gs(l)),
          (await s.onBeforeRouteChange?.(l)) !== !1 &&
            ((!pe || (await kf(l, { ...c, hasTextFragment: a }))) &&
              (await i(l, { initialLoad: !!c?.initialLoad })),
            a && (location.hash = f),
            o(),
            await s.onAfterRouteChange?.(l)));
      },
    };
  let r = null;
  async function i(
    l,
    { scrollPosition: c = 0, isRetry: f = !1, initialLoad: a = !1 } = {},
  ) {
    if ((await s.onBeforePageLoad?.(l)) === !1) return;
    const d = new URL(l, Bs),
      m = (r = d.pathname);
    try {
      let _ = await e(m);
      if (!_) throw new Error(`Page not found: ${m}`);
      if (r === m) {
        r = null;
        const { default: M, __pageData: R } = _;
        if (!M) throw new Error(`Invalid route component: ${M}`);
        (await s.onAfterPageLoad?.(l),
          (n.path = pe ? m : ci(m)),
          (n.component = An(M)),
          (n.data = An(R)),
          o(d),
          pe &&
            Zn(() => {
              let H =
                at.value.base +
                R.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
              (!at.value.cleanUrls && !H.endsWith("/") && (H += ".html"),
                H !== d.pathname &&
                  ((d.pathname = H),
                  (l = H + d.search + d.hash),
                  history.replaceState({}, "", l)),
                a || qs(d.hash, !1, c));
            }));
      }
    } catch (_) {
      if (
        (!/fetch|Page not found/.test(_.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(_),
        !f)
      )
        try {
          const M = await fetch(at.value.base + "hashmap.json");
          ((window.__VP_HASH_MAP__ = await M.json()),
            await i(l, { scrollPosition: c, isRetry: !0, initialLoad: a }));
          return;
        } catch {}
      if (r === m) {
        ((r = null),
          (n.path = pe ? m : ci(m)),
          (n.component = t ? An(t) : null));
        const M = pe
          ? n.path
              .replace(/(^|\/)$/, "$1index")
              .replace(/(\.html)?$/, ".md")
              .slice(at.value.base.length)
          : "404.md";
        ((n.data = { ...Go, relativePath: M }), o(d));
      }
    }
  }
  function o(l = pe ? location : { search: "", hash: "" }) {
    ((n.query = l.search), (n.hash = decodeURIComponent(l.hash)));
  }
  return (
    pe &&
      (history.state === null && history.replaceState({}, ""),
      window.addEventListener(
        "click",
        (l) => {
          if (
            l.defaultPrevented ||
            !(l.target instanceof Element) ||
            l.target.closest("button") ||
            l.button !== 0 ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            l.metaKey
          )
            return;
          const c = l.target.closest("a");
          if (
            !c ||
            c.closest(".vp-raw") ||
            c.hasAttribute("download") ||
            c.hasAttribute("target")
          )
            return;
          const f =
            c.getAttribute("href") ??
            (c instanceof SVGAElement ? c.getAttribute("xlink:href") : null);
          if (f == null) return;
          const { href: a, origin: d, pathname: m } = new URL(f, c.baseURI),
            _ = new URL(location.href);
          d === _.origin &&
            Af(m) &&
            (l.preventDefault(),
            s.go(a, { smoothScroll: c.classList.contains("header-anchor") }));
        },
        { capture: !0 },
      ),
      window.addEventListener("popstate", async (l) => {
        if (l.state === null) return;
        const c = Gs(location.href);
        (await i(c, { scrollPosition: l.state.scrollPosition || 0 }),
          o(),
          await s.onAfterRouteChange?.(c));
      }),
      window.addEventListener("hashchange", (l) => {
        (l.preventDefault(), o());
      })),
    s
  );
}
function jf() {
  const e = Ct(Hf);
  if (!e) throw new Error("useRouter() is called without provider.");
  return e;
}
function Yo() {
  return jf().route;
}
function qs(e, t = !1, n = 0) {
  if (!e || n) {
    window.scrollTo(0, n);
    return;
  }
  let s = null;
  try {
    s = document.getElementById(decodeURIComponent(e).slice(1));
  } catch (l) {
    console.warn(l);
  }
  if (!s) return;
  const r =
      window.scrollY +
        s.getBoundingClientRect().top -
        Ff() +
        Number.parseInt(window.getComputedStyle(s).paddingTop, 10) || 0,
    i = window.matchMedia("(prefers-reduced-motion)").matches
      ? "instant"
      : t && Math.abs(r - window.scrollY) <= window.innerHeight
        ? "smooth"
        : "auto";
  requestAnimationFrame(() => {
    if (
      (window.scrollTo({ left: 0, top: r, behavior: i }),
      s.focus({ preventScroll: !0 }),
      document.activeElement === s || s.hasAttribute("tabindex"))
    )
      return;
    const l = () => {
      (s.removeAttribute("tabindex"), s.removeEventListener("blur", l));
    };
    (s.setAttribute("tabindex", "-1"),
      s.addEventListener("blur", l),
      s.focus({ preventScroll: !0 }),
      document.activeElement !== s && l());
  });
}
function Gs(e) {
  const t = new URL(e, Bs);
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, "$1")),
    at.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ""))
      : !t.pathname.endsWith("/") &&
        !t.pathname.endsWith(".html") &&
        (t.pathname += ".html"),
    t.pathname + t.search + t.hash.split(":~:")[0]
  );
}
async function kf(
  e,
  {
    smoothScroll: t = !1,
    initialLoad: n = !1,
    replace: s = !1,
    hasTextFragment: r = !1,
  } = {},
) {
  const i = Gs(location.href),
    o = new URL(e, location.origin),
    l = new URL(i, location.origin);
  if (e === i) {
    if (!n) return (r || qs(o.hash, t), !1);
  } else if (
    (s
      ? history.replaceState({}, "", e)
      : (history.replaceState({ scrollPosition: window.scrollY }, ""),
        history.pushState({}, "", e)),
    o.pathname === l.pathname)
  )
    return (
      o.hash !== l.hash &&
        (window.dispatchEvent(
          new HashChangeEvent("hashchange", { oldURL: l.href, newURL: o.href }),
        ),
        r || qs(o.hash, t)),
      !1
    );
  return !0;
}
const En = () => On.forEach((e) => e()),
  xu = Qi({
    name: "VitePressContent",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e) {
      const t = Yo(),
        { frontmatter: n, site: s } = If();
      return (
        Pe(n, En, { deep: !0, flush: "post" }),
        () =>
          Us(
            e.as,
            s.value.contentProps ?? { style: { position: "relative" } },
            [
              t.component
                ? Us(t.component, {
                    onVnodeMounted: En,
                    onVnodeUpdated: En,
                    onVnodeUnmounted: En,
                  })
                : "404 Page Not Found",
            ],
          )
      );
    },
  }),
  Cu = Qi({
    setup(e, { slots: t }) {
      const n = xt(!1);
      return (
        jt(() => {
          n.value = !0;
        }),
        () => (n.value && t.default ? t.default() : null)
      );
    },
  });
function Au() {
  pe &&
    window.addEventListener("click", (e) => {
      const t = e.target;
      if (t.matches(".vp-code-group input")) {
        const n = t.parentElement?.parentElement;
        if (!n) return;
        const s = Array.from(n.querySelectorAll("input")).indexOf(t);
        if (s < 0) return;
        const r = n.querySelector(".blocks");
        if (!r) return;
        const i = Array.from(r.children).find((c) =>
          c.classList.contains("active"),
        );
        if (!i) return;
        const o = r.children[s];
        if (!o || i === o) return;
        (i.classList.remove("active"),
          Vf(o),
          n
            ?.querySelector(`label[for="${t.id}"]`)
            ?.scrollIntoView({ block: "nearest" }));
      }
    });
}
function Vf(e) {
  (e.classList.add("active"),
    window.dispatchEvent(
      new CustomEvent("vitepress:codeGroupTabActivate", { detail: e }),
    ));
}
const Wf = [".vp-copy-ignore", ".diff.remove"].join(", ");
function Mu() {
  if (pe) {
    const e = new WeakMap();
    window.addEventListener("click", (t) => {
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const s = n.parentElement,
          r = n.nextElementSibling?.nextElementSibling;
        if (!s || !r) return;
        const i = r.cloneNode(!0);
        (i.querySelectorAll(Wf).forEach((c) => c.remove()),
          (i.innerHTML = i.innerHTML.replace(
            /\n+/g,
            `
`,
          )));
        let o = i.textContent || "";
        const l = /language-(\w+)/.exec(s.className)?.[1] || "";
        (Lf(l) && (o = o.replace(/^ *(\$|>) /gm, "").trim()),
          Uf(o).then(() => {
            (n.classList.add("copied"), clearTimeout(e.get(n)));
            const c = setTimeout(() => {
              (n.classList.remove("copied"), n.blur(), e.delete(n));
            }, 2e3);
            e.set(n, c);
          }));
      }
    });
  }
}
async function Uf(e) {
  try {
    await navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement("textarea"),
      n = document.activeElement;
    ((t.value = e),
      t.setAttribute("readonly", ""),
      (t.style.contain = "strict"),
      (t.style.position = "absolute"),
      (t.style.left = "-9999px"),
      (t.style.fontSize = "12pt"));
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    (document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand("copy"),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus());
  }
}
function Ru(e, t) {
  let n = !0,
    s = [];
  const r = (i) => {
    if (n) {
      ((n = !1),
        i.forEach((l) => {
          const c = Ms(l);
          for (const f of document.head.children)
            if (f.isEqualNode(c)) {
              s.push(f);
              return;
            }
        }));
      return;
    }
    const o = i.map(Ms);
    (s.forEach((l, c) => {
      const f = o.findIndex((a) => a?.isEqualNode(l ?? null));
      f !== -1 ? delete o[f] : (l?.remove(), delete s[c]);
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean)));
  };
  Ui(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      f = Xo(o, i);
    f !== document.title && (document.title = f);
    const a = l || o.description;
    let d = document.querySelector("meta[name=description]");
    (d
      ? d.getAttribute("content") !== a && d.setAttribute("content", a)
      : Ms(["meta", { name: "description", content: a }]),
      r(Jo(o.head, Bf(c))));
  });
}
function Ms([e, t, n]) {
  const s = document.createElement(e);
  for (const r in t) s.setAttribute(r, t[r]);
  return (
    n && (s.innerHTML = n),
    e === "script" && t.async == null && (s.async = !1),
    s
  );
}
function Kf(e) {
  return e[0] === "meta" && e[1] && e[1].name === "description";
}
function Bf(e) {
  return e.filter((t) => !Kf(t));
}
const Rs = new Set(),
  zo = () => document.createElement("link"),
  qf = (e) => {
    const t = zo();
    ((t.rel = "prefetch"), (t.href = e), document.head.appendChild(t));
  },
  Gf = (e) => {
    const t = new XMLHttpRequest();
    (t.open("GET", e, (t.withCredentials = !0)), t.send());
  };
let xn;
const Xf =
  pe &&
  (xn = zo()) &&
  xn.relList &&
  xn.relList.supports &&
  xn.relList.supports("prefetch")
    ? qf
    : Gf;
function Ou() {
  if (!pe || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    (n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target;
            n.unobserve(l);
            const { pathname: c } = l;
            if (!Rs.has(c)) {
              Rs.add(c);
              const f = Df(c);
              f && Xf(f);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll("#app a").forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI,
            ),
            c = l.match(/\.\w+$/);
          (c && c[0] !== ".html") ||
            (i.target !== "_blank" &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : Rs.add(l)));
        });
      }));
  };
  jt(s);
  const r = Yo();
  (Pe(() => r.path, s),
    ss(() => {
      n && n.disconnect();
    }));
}
export {
  to as $,
  xt as A,
  Tu as B,
  pe as C,
  Yo as D,
  Dl as E,
  Ce as F,
  Te as G,
  nu as H,
  eu as I,
  ve as J,
  tu as K,
  Bo as L,
  Zf as M,
  yu as N,
  Jc as O,
  Ct as P,
  Ys as Q,
  wu as R,
  gu as S,
  au as T,
  Zn as U,
  bu as V,
  nn as W,
  Us as X,
  Jf as Y,
  zl as Z,
  pu as _,
  Ro as a,
  Qf as a0,
  Yf as a1,
  fu as a2,
  ut as a3,
  Zs as a4,
  gl as a5,
  cu as a6,
  vu as a7,
  jf as a8,
  mu as a9,
  su as aa,
  _u as ab,
  iu as ac,
  du as ad,
  uu as ae,
  ou as af,
  Ru as ag,
  Hf as ah,
  Su as ai,
  Pf as aj,
  xu as ak,
  Cu as al,
  at as am,
  Eu as an,
  Df as ao,
  hu as ap,
  Ou as aq,
  Mu as ar,
  Au as as,
  Vs as b,
  lu as c,
  Qi as d,
  Xc as e,
  Af as f,
  ci as g,
  oe as h,
  wf as i,
  Mo as j,
  zn as k,
  bf as l,
  ko as m,
  zs as n,
  ks as o,
  jt as p,
  mc as q,
  ru as r,
  ss as s,
  hl as t,
  If as u,
  Ff as v,
  Yl as w,
  Ui as x,
  Pe as y,
  zf as z,
};
