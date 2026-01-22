/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
        ? n[i.call(e)] || "object"
        : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ((ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return ((t.prevObject = this), t);
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          }),
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              ((r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                            ? n
                            : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r)));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
            ? e.documentElement.textContent
            : 3 === i || 4 === i
              ? e.nodeValue
              : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return ((e.length = i), e);
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      },
    ));
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return (e === t && (a = !0), 0);
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      (k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType);
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return (k.call(n, a), n);
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return (k.call(n, a), n);
          } else {
            if (u[2]) return (k.apply(n, e.getElementsByTagName(t)), n);
            if ((i = u[3]) && e.getElementsByClassName)
              return (k.apply(n, e.getElementsByClassName(i)), n);
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            (((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length));
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return (k.apply(n, f.querySelectorAll(c)), n);
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function F(e) {
      return ((e[S] = !0), e);
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        (t.parentNode && t.parentNode.removeChild(t), (t = null));
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return (T.querySelector(":has(*,:jqfake)"), !1);
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    ((i = t.getElementsByName(e)), (r = 0));
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            ((r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")"));
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return ((a = !0), 0);
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                    ? 1
                    : o
                      ? se.call(o, e) - se.call(o, t)
                      : 0
                : 4 & n
                  ? -1
                  : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return ((e.ownerDocument || e) != T && V(e), ce.contains(e, t));
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return ((o = null), e);
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                        ? t !== i
                        : "^=" === r
                          ? i && 0 === t.indexOf(i)
                          : "*=" === r
                            ? i && -1 < t.indexOf(i)
                            : "$=" === r
                              ? i && t.slice(-i.length) === i
                              : "~=" === r
                                ? -1 <
                                  (" " + t.replace(v, " ") + " ").indexOf(i)
                                : "|=" === r &&
                                  (t === i ||
                                    t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      ((p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]));
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? F(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (
                    (r[0] = e),
                    s(r, null, n, i),
                    (r[0] = null),
                    !i.pop()
                  );
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex,
              !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      ((a = e), (s = []), (u = b.preFilter));
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(ve, " ") }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            ((i = Z(s, l)), v(i, [], n, r), (o = i.length));
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                ((i = []), (o = s.length));
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else
            ((s = Z(s === t ? s.splice(c, s.length) : s)),
              y ? y(null, t, s, r) : k.apply(t, s));
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0,
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0,
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return ((i = null), r);
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" }),
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e),
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        (t || (t = Y(e)), (n = t.length));
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                ((a = 0), t || o.ownerDocument == T || (V(o), (n = !C)));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              (k.apply(r, f),
                i &&
                  !e &&
                  0 < f.length &&
                  1 < u + y.length &&
                  ce.uniqueSort(r));
            }
            return (i && ((E = h), (w = p)), c);
          }),
          m ? F(r) : r),
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          (l && (t = t.parentNode), (e = e.slice(o.shift().value.length)));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t,
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return (k.apply(n, r), n);
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
        n
      );
    }
    ((G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort));
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
        ? ce.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
          ? ce.grep(e, function (e) {
              return -1 < se.call(n, e) !== r;
            })
          : ce.filter(n, e, r);
  }
  ((ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1,
        ).length;
      },
    }));
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0),
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(ce)
        : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C)));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  (ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      },
    ));
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ((ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        (r.memory || (t = !1), (i = !1), a && (s = t ? [] : ""));
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                (s.splice(n, 1), n <= l && l--);
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return (s && (s = []), this);
        },
        disable: function () {
          return ((a = u = []), (s = t = ""), this);
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return ((a = u = []), t || i || (s = t = ""), this);
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return (f.fireWith(this, arguments), this);
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return (s.done(arguments).fail(arguments), this);
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  (ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null));
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        ((t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith),
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r)));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            (ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r)));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  (o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q)));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            ((a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock,
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments),
                  this
                );
              }),
              (s[t[0] + "With"] = n.fireWith));
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              ((r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i));
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    }));
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ((ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    }));
  var O = ce.Deferred();
  function P() {
    (C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready());
  }
  ((ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P)));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  ((B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
                ? [t]
                : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    }));
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                  ? +i
                  : X.test(i)
                    ? JSON.parse(i)
                    : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  (ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                      ? t
                      : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        ("inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o,
            )),
          !r && o && o.empty.fire());
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = ce.queue(this, t, n);
                  (ce._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t));
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        ("string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx"));
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return (s(), i.promise(t));
      },
    }));
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = { composed: !0 };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      ((u /= 2), (l = l || c[3]), (c = +u || 1));
      while (a--)
        (ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o));
      ((c *= 2), ce.style(e, t, c + l), (n = n || []));
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  ((xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild));
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  ((ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"]));
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          ((a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]));
          while (c--) a = a.lastChild;
          (ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = ""));
        } else p.push(t.createTextNode(o));
    ((f.textContent = ""), (d = 0));
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return (ce().off(e), a.apply(this, arguments));
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return (e.stopImmediatePropagation(), e.preventDefault(), t);
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  ((ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        (n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length));
        while (l--)
          ((d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o,
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0)));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            ((f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length));
            while (o--)
              ((c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c)));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        ((a = ce.event.handlers.call(this, u, l)), (t = 0));
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          ((u.currentTarget = i.elem), (n = 0));
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return (c.postDispatch && c.postDispatch.call(this, u), u.result);
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              (void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r));
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this),
        u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
        s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"),
            !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      (e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0));
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        ((this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault());
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        ((this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation());
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        ((this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation());
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp,
    ),
    ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e);
          ((n.type = "focusin" === e.type ? "focus" : "blur"),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n));
        } else ce.event.simulate(i, e.target, ce.event.fix(e));
      }
      ((ce.event.special[r] = {
        setup: function () {
          var e;
          if ((He(this, r, !0), !C.documentMode)) return !1;
          ((e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1));
        },
        trigger: function () {
          return (He(this, r), !0);
        },
        teardown: function () {
          var e;
          if (!C.documentMode) return !1;
          (e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i));
        },
        _default: function (e) {
          return _.get(e.target, r);
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i);
            (n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1));
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1;
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i));
          },
        }));
    }),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      },
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    }));
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    );
  }
  function Ie(e) {
    return ((e.type = (null !== e.getAttribute("type")) + "/" + e.type), e);
  }
  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        (h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o));
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        ((u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c));
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          ((u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l,
                  )
                : m(u.textContent.replace(Me, ""), u, l)));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      (n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r)));
    return e;
  }
  (ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          ((s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue));
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")),
        c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n,
        );
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            ((t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get()));
          return this.pushStack(n);
        };
      },
    ));
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return ((t && t.opener) || (t = ie), t.getComputedStyle(e));
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) ((o[i] = e.style[i]), (e.style[i] = t[i]));
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        ((u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l));
        var e = ie.getComputedStyle(l);
        ((n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null));
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return (e(), r);
        },
        pixelBoxStyles: function () {
          return (e(), o);
        },
        pixelPosition: function () {
          return (e(), n);
        },
        reliableMarginLeft: function () {
          return (e(), s);
        },
        scrollboxSize: function () {
          return (e(), i);
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      ("margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i))));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
            ),
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  (ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        ("string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n))));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5,
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      ((ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (ce.cssHooks[i + o].set = rt));
    }),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        ((this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px")));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {}));
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return (t && (i.opacity = i.width = e), i);
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          { specialEasing: {}, easing: ce.easing._default },
          t,
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing,
          );
          return (l.tweens.push(n), n);
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  ((ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return (te(n.elem, e, Y.exec(t), n), n);
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        ((n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t));
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              (a.unqueued--, ce.queue(e, "fx").length || a.empty.fire());
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              ((h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]));
            })),
          (u = !1),
          d))
            (u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0))));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          (v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue));
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          (delete e.stop, t(o));
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;
            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      },
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      (n.length || ce.fx.stop(), (st = void 0));
    }),
    (ce.fx.timer = function (e) {
      (ce.timers.push(e), ce.fx.start());
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value));
  var mt,
    xt = ce.expr.attrHandle;
  (ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = ce.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return (e.setAttribute("type", t), n && (e.value = n), t);
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return (!1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n);
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    }));
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  (ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (t && t.parentNode && t.parentNode.selectedIndex, null);
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      },
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++)
                    ((i = e[o]),
                      n.indexOf(" " + i + " ") < 0 && (n += i + " "));
                  ((a = Tt(n)), r !== a && this.setAttribute("class", a));
                }
              })
            : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
            ? (e = kt(t)).length
              ? this.each(function () {
                  if (
                    ((r = Ct(this)),
                    (n = 1 === this.nodeType && " " + Tt(r) + " "))
                  ) {
                    for (o = 0; o < e.length; o++) {
                      i = e[o];
                      while (-1 < n.indexOf(" " + i + " "))
                        n = n.replace(" " + i + " ", " ");
                    }
                    ((a = Tt(n)), r !== a && this.setAttribute("class", a));
                  }
                })
              : this
            : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
            ? n
              ? this.addClass(t)
              : this.removeClass(t)
            : ((e = kt(t)),
              this.each(function () {
                if (s)
                  for (o = ce(this), i = 0; i < e.length; i++)
                    ((r = e[i]),
                      o.hasClass(r) ? o.removeClass(r) : o.addClass(r));
                else
                  (void 0 !== t && "boolean" !== a) ||
                    ((r = Ct(this)) && _.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || !1 === t ? "" : _.get(this, "__className__") || "",
                      ));
              }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    }));
  var St = /\r/g;
  (ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = ce.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
          ? (r =
              ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
              ? e.replace(St, "")
              : null == e
                ? ""
                : e
          : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return (n || (e.selectedIndex = -1), o);
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      ((ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          }));
    }));
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e),
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  (ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            (p.push(o), (a = o));
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          ((f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault()));
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    }));
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i,
            );
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  ((ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? ce.map(n, function (e) {
                    return { name: t.name, value: e.replace(Lt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    }));
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return (r && ce.extend(!0, e, r), e);
  }
  ((Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        ("object" == typeof e && ((t = e), (e = void 0)), (t = t || {}));
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return (null == h && (v.mimeType = e), this);
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return (c && c.abort(t), l(0, t), this);
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//",
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            ((r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host));
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
            : v.accepts["*"],
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            ((h = !1), c.send(a, l));
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  (u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type")));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return (o !== u[0] && u.unshift(o), n[o]);
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ce.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    }));
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr();
  ((le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            ((o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          Yt[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders(),
                        ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort")));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return (ce.globalEval(e), e);
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      (void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET"));
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            ((r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  (r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type));
                }),
              )),
              C.head.appendChild(r[0]));
          },
          abort: function () {
            i && i();
          },
        };
    }));
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  (ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return ((this[e] = !0), e);
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              Zt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return (o || ce.error(r + " was not called"), o[0]);
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            (void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0));
          }),
          "script"
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              ((o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e));
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        ("static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f));
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            ((t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement));
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
          return M(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length,
          );
        };
      },
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return ((t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t);
      });
    }),
    ce.each({ Height: "height", Width: "width" }, function (a, s) {
      ce.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          ce.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return M(
              this,
              function (e, t, n) {
                var r;
                return y(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a],
                      ))
                    : void 0 === n
                      ? ce.css(e, t, i)
                      : ce.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
            );
          };
        },
      );
    }),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      },
    ));
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ((ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      }));
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});

(!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s,
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    ((a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return (h(this, t), this);
        }),
        o(a)));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return (o(e || t.jQuery), i);
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return (o.indexOf(e) == -1 && o.push(e), this);
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return ((o[e] = !0), this);
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return (o != -1 && i.splice(o, 1), this);
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          ((i = i.slice(0)), (e = e || []));
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            (r && (this.off(t, s), delete o[s]), s.apply(this, e));
          }
          return this;
        }
      }),
      (e.allOff = function () {
        (delete this._events, delete this._onceEvents);
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1",
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        ((e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box"));
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        ((s.isBoxSizeOuter = r = 200 == t(n.width)), i.removeChild(e));
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        ((a.width = e.offsetWidth), (a.height = e.offsetHeight));
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          I = a.borderTopWidth + a.borderBottomWidth,
          z = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (z ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (z ? 0 : y + I)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + I)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          },
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("desandro-matches-selector")))
        : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    ((i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          t && clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            (o.apply(s, e), delete s[n]);
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      }));
    var o = t.console;
    return (
      (i.htmlInit = function (e, n) {
        i.docReady(function () {
          var s = i.toDashed(n),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                o &&
                o.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, n, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e,
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("ev-emitter"), require("get-size")))
        : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return ((e = null), !0);
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    ((d.constructor = o),
      (d._create = function () {
        ((this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" }));
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = this.layout.size,
          r =
            o.indexOf("%") != -1
              ? (parseFloat(o) / 100) * s.width
              : parseInt(o, 10),
          a =
            n.indexOf("%") != -1
              ? (parseFloat(n) / 100) * s.height
              : parseInt(n, 10);
        ((r = isNaN(r) ? 0 : r),
          (a = isNaN(a) ? 0 : a),
          (r -= e ? s.paddingLeft : s.paddingRight),
          (a -= i ? s.paddingTop : s.paddingBottom),
          (this.position.x = r),
          (this.position.y = a));
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        ((e[s] = this.getXValue(a)), (e[r] = ""));
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        ((e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]));
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = parseInt(t, 10),
          s = parseInt(e, 10),
          r = n === this.position.x && s === this.position.y;
        if ((this.setPosition(t, e), r && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          u = e - o,
          h = {};
        ((h.transform = this.getTranslate(a, u)),
          this.transition({
            to: h,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          }));
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        (this.setPosition(t, e), this.layoutPosition());
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        ((this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10)));
      }),
      (d._nonTransition = function (t) {
        (this.css(t.to), t.isCleaning && this._removeStyles(t.to));
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          ((e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0));
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        (this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0));
      }));
    var l = "opacity," + n(a);
    ((d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        ((t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1));
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      }));
    var f = { "-webkit-transform": "transform" };
    ((d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          (n.call(this), delete e.onEnd[o]);
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        (this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1));
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      }));
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        ((t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms"));
      }),
      (d.removeElem = function () {
        (this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]));
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        (delete this.isHidden, this.css({ display: "" }));
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        ((e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          }));
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        ((this.isHidden = !0), this.css({ display: "" }));
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        ((e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          }));
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          },
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(
            t,
            require("ev-emitter"),
            require("get-size"),
            require("fizzy-ui-utils"),
            require("./item"),
          ))
        : (t.Outlayer = e(
            t,
            t.EvEmitter,
            t.getSize,
            t.fizzyUIUtils,
            t.Outlayer.Item,
          ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t),
          )
        );
      ((this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e));
      var n = ++l;
      ((this.element.outlayerGUID = n), (f[n] = this), this._create());
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    ((s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      }));
    var c = s.prototype;
    (o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        (this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle));
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        (this._resetLayout(), this._manageStamps());
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        (this.layoutItems(this.items, e), (this._isLayoutInited = !0));
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        ((t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout());
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          (t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            ((o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o));
          }, this),
            this._processLayoutQueue(i));
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        (this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this));
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          (i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px"));
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          (r++, r == s && i());
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            ((n.type = t), this.$element.trigger(n, i));
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        ((t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this)));
      }),
      (c.unstamp = function (t) {
        ((t = this._find(t)),
          t &&
            t.forEach(function (t) {
              (o.removeFrom(this.stamps, t), this.unignore(t));
            }, this));
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        (t.addEventListener("resize", this), (this.isResizeBound = !0));
      }),
      (c.unbindResize = function () {
        (t.removeEventListener("resize", this), (this.isResizeBound = !1));
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return (e.length && (this.items = this.items.concat(e)), e);
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          ((this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i));
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            (t.stagger(i * e), t.reveal());
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            (t.stagger(i * e), t.hide());
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        (this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              (t.remove(), o.removeFrom(this.items, t));
            }, this));
      }),
      (c.destroy = function () {
        var t = this.element.style;
        ((t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize());
        var e = this.element.outlayerGUID;
        (delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace));
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      }));
    var m = { ms: 1, s: 1e3 };
    return ((s.Item = n), s);
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("outlayer")))
        : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    ((i._create = function () {
      ((this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {}));
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          ((this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random()));
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      }));
    var n = i.destroy;
    return (
      (i.destroy = function () {
        (n.apply(this, arguments), this.css({ display: "" }));
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e,
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("get-size"), require("outlayer")))
        : ((t.Isotope = t.Isotope || {}),
          (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      ((this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size)));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        (this.isotope.getSize(), (this.size = this.isotope.size));
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e,
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("outlayer"), require("get-size")))
        : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        (this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []));
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        ((this.maxY = 0), (this.horizontalColIndex = 0));
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        ((s = Math[a](s)), (this.cols = Math.max(s, 1)));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        ((u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u)));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return (this.getContainerWidth(), t != this.containerWidth);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e,
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(
            require("../layout-mode"),
            require("masonry-layout"),
          ))
        : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      ((this.items = this.isotope.filteredItems), r.call(this));
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
        ? (module.exports = e(require("../layout-mode")))
        : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        ((this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth"));
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
        ? (module.exports = e(require("../layout-mode")))
        : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return ((this.y += t.size.outerHeight), { x: e, y: i });
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          },
        )
      : "object" == typeof module && module.exports
        ? (module.exports = e(
            t,
            require("outlayer"),
            require("get-size"),
            require("desandro-matches-selector"),
            require("fizzy-ui-utils"),
            require("isotope-layout/js/item"),
            require("isotope-layout/js/layout-mode"),
            require("isotope-layout/js/layout-modes/masonry"),
            require("isotope-layout/js/layout-modes/fit-rows"),
            require("isotope-layout/js/layout-modes/vertical"),
          ))
        : (t.Isotope = e(
            t,
            t.Outlayer,
            t.getSize,
            t.matchesSelector,
            t.fizzyUIUtils,
            t.Isotope.Item,
            t.Isotope.LayoutMode,
          ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    ((d.Item = s), (d.LayoutMode = r));
    var l = d.prototype;
    ((l._create = function () {
      ((this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]));
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        ((this.itemGUID = 0), e.prototype.reloadItems.call(this));
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return (this._updateItemsSortData(t), t);
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        ((this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this)));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        (this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0));
      }),
      (l.arrange = function (t) {
        (this.option(t), this._getIsInstant());
        var e = this._filter(this.items);
        ((this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout());
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        (this.reveal(t.needReveal), this.hide(t.needHide));
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return ((this._isInstant = e), e);
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        (this.once("layoutComplete", function () {
          ((e = !0), t());
        }),
          this.once("hideComplete", function () {
            ((i = !0), t());
          }),
          this.once("revealComplete", function () {
            ((o = !0), t());
          }));
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            (u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a));
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
            ? function (e) {
                return t(e.element);
              }
            : function (e) {
                return o(e.element, t);
              };
      }),
      (l.updateSortData = function (t) {
        var e;
        (t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e));
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      }));
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    ((d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return ((e.options = this.options[t]), e);
      }),
      (l._resetLayout = function () {
        (e.prototype._resetLayout.call(this), this._mode()._resetLayout());
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          (this._resetLayout(), this._manageStamps());
          var i = this._filterRevealAdded(e);
          (this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items)));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            ((o = e[i]), this.element.appendChild(o.element));
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      }));
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        ((this.options.sortBy = "random"), this._sort(), this._layout());
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return ((this.options.transitionDuration = i), o);
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  }));

/* wow */
(function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  ((b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) ((d = b[c]), null == a[c] && (a[c] = d));
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a,
        );
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
            ? a.attachEvent("on" + b, c)
            : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
            ? a.detachEvent("on" + b, c)
            : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          ((this.keys = []), (this.values = []));
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return (this.keys.push(a), this.values.push(b));
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          ("undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content.",
              ));
        }
        return (
          (a.notSupported = !0),
          (a.prototype.observe = function () {}),
          a
        );
      })())),
    (d =
      this.getComputedStyle ||
      function (a) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        (null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          (this.animationNameCache = new c()));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                ((b = d[a]), e.push(b));
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                ((b = d[a]), e.push(b));
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                ((b = e[c]), this.applyStyle(b, !0));
          return (
            this.disabled() ||
              (this.util().addEvent(window, "scroll", this.scrollHandler),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], e = 0, f = b.length; f > e; e++)
                        ((d = b[e]),
                          g.push(
                            function () {
                              var a, b, e, f;
                              for (
                                e = d.addedNodes || [],
                                  f = [],
                                  a = 0,
                                  b = e.length;
                                b > a;
                                a++
                              )
                                ((c = e[a]), f.push(this.doSync(c)));
                              return f;
                            }.call(a),
                          ));
                      return g;
                    };
                  })(this),
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function () {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              ((b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0));
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = "" + a.className + " " + this.config.animateClass),
            null != this.config.callback ? this.config.callback(a) : void 0
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this),
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            ((a = d[b]), e.push((a.style.visibility = "visible")));
          return e;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          f = [];
          for (c in b)
            ((d = b[c]),
              (a["" + c] = d),
              f.push(
                function () {
                  var b, f, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, f = g.length;
                    f > b;
                    b++
                  )
                    ((e = g[b]),
                      h.push(
                        (a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] =
                          d),
                      ));
                  return h;
                }.call(this),
              ));
          return f;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            e = d(a),
              c = e.getPropertyCSSValue(b),
              i = this.vendors,
              g = 0,
              h = i.length;
            h > g;
            g++
          )
            ((f = i[g]), (c = c || e.getPropertyCSSValue("-" + f + "-" + b)));
          return c;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                ((a = d[b]),
                  a && (this.isVisible(a) ? this.show(a) : e.push(a)));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f = window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })()));
}).call(this);

/* easing */
((jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
      return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
    },
    easeInQuad: function (a, b, c, d, e) {
      return d * (b /= e) * b + c;
    },
    easeOutQuad: function (a, b, c, d, e) {
      return -d * (b /= e) * (b - 2) + c;
    },
    easeInOutQuad: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b + c
        : (-d / 2) * (--b * (b - 2) - 1) + c;
    },
    easeInCubic: function (a, b, c, d, e) {
      return d * (b /= e) * b * b + c;
    },
    easeOutCubic: function (a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b + 1) + c;
    },
    easeInOutCubic: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b + c
        : (d / 2) * ((b -= 2) * b * b + 2) + c;
    },
    easeInQuart: function (a, b, c, d, e) {
      return d * (b /= e) * b * b * b + c;
    },
    easeOutQuart: function (a, b, c, d, e) {
      return -d * ((b = b / e - 1) * b * b * b - 1) + c;
    },
    easeInOutQuart: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b * b + c
        : (-d / 2) * ((b -= 2) * b * b * b - 2) + c;
    },
    easeInQuint: function (a, b, c, d, e) {
      return d * (b /= e) * b * b * b * b + c;
    },
    easeOutQuint: function (a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
    },
    easeInOutQuint: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (d / 2) * b * b * b * b * b + c
        : (d / 2) * ((b -= 2) * b * b * b * b + 2) + c;
    },
    easeInSine: function (a, b, c, d, e) {
      return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
    },
    easeOutSine: function (a, b, c, d, e) {
      return d * Math.sin((b / e) * (Math.PI / 2)) + c;
    },
    easeInOutSine: function (a, b, c, d, e) {
      return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c;
    },
    easeInExpo: function (a, b, c, d, e) {
      return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
    },
    easeOutExpo: function (a, b, c, d, e) {
      return b == e ? c + d : d * (-Math.pow(2, (-10 * b) / e) + 1) + c;
    },
    easeInOutExpo: function (a, b, c, d, e) {
      return 0 == b
        ? c
        : b == e
          ? c + d
          : (b /= e / 2) < 1
            ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c
            : (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c;
    },
    easeInCirc: function (a, b, c, d, e) {
      return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
    },
    easeOutCirc: function (a, b, c, d, e) {
      return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
    },
    easeInOutCirc: function (a, b, c, d, e) {
      return (b /= e / 2) < 1
        ? (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c
        : (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
    },
    easeInElastic: function (a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (1 == (b /= e)) return c + d;
      if ((g || (g = 0.3 * e), h < Math.abs(d))) {
        h = d;
        var f = g / 4;
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
      return (
        -(
          h *
          Math.pow(2, 10 * (b -= 1)) *
          Math.sin(((b * e - f) * (2 * Math.PI)) / g)
        ) + c
      );
    },
    easeOutElastic: function (a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (1 == (b /= e)) return c + d;
      if ((g || (g = 0.3 * e), h < Math.abs(d))) {
        h = d;
        var f = g / 4;
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
      return (
        h * Math.pow(2, -10 * b) * Math.sin(((b * e - f) * (2 * Math.PI)) / g) +
        d +
        c
      );
    },
    easeInOutElastic: function (a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (2 == (b /= e / 2)) return c + d;
      if ((g || (g = e * (0.3 * 1.5)), h < Math.abs(d))) {
        h = d;
        var f = g / 4;
      } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
      return b < 1
        ? -0.5 *
            (h *
              Math.pow(2, 10 * (b -= 1)) *
              Math.sin(((b * e - f) * (2 * Math.PI)) / g)) +
            c
        : h *
            Math.pow(2, -10 * (b -= 1)) *
            Math.sin(((b * e - f) * (2 * Math.PI)) / g) *
            0.5 +
            d +
            c;
    },
    easeInBack: function (a, b, c, d, e, f) {
      return (
        void 0 == f && (f = 1.70158),
        d * (b /= e) * b * ((f + 1) * b - f) + c
      );
    },
    easeOutBack: function (a, b, c, d, e, f) {
      return (
        void 0 == f && (f = 1.70158),
        d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
      );
    },
    easeInOutBack: function (a, b, c, d, e, f) {
      return (
        void 0 == f && (f = 1.70158),
        (b /= e / 2) < 1
          ? (d / 2) * (b * b * (((f *= 1.525) + 1) * b - f)) + c
          : (d / 2) * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
      );
    },
    easeInBounce: function (a, b, c, d, e) {
      return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
    },
    easeOutBounce: function (a, b, c, d, e) {
      return (b /= e) < 1 / 2.75
        ? d * (7.5625 * b * b) + c
        : b < 2 / 2.75
          ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
          : b < 2.5 / 2.75
            ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
            : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c;
    },
    easeInOutBounce: function (a, b, c, d, e) {
      return b < e / 2
        ? 0.5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c
        : 0.5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) +
            0.5 * d +
            c;
    },
  }));

/* owl-carousel */
(!(function (a, b, c, d) {
  function e(b, c) {
    ((this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this),
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this),
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this),
      ),
      this.setup(),
      this.initialize());
  }
  ((e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          (!c && this.$stage.children().css(e), (a.css = e));
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            ((c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width()));
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g > 0; )
            (b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1));
          ((this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage));
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;
          )
            ((d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a));
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              ((a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css));
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          ((a.current = a.current
            ? this.$stage.children().index(a.current)
            : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current),
            )),
            this.reset(a.current));
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            ((a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c));
          (this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      ((this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(a("<div>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent())));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      (this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass));
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var a, b, c;
        ((a = this.$element.find("img")),
          (b = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a));
      }
      (this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized"));
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      (c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g",
                  ),
                  "$1" + d,
                ),
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        }));
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + ">")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;
      )
        ((this._invalidated.all ||
          a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++);
      ((this._invalidated = {}), !this.is("valid") && this.enter("valid"));
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      (this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed"));
    }),
    (e.prototype.onThrottledResize = function () {
      (b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate,
        )));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      (a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this),
        ),
        !1 !== this.settings.responsive &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            },
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this),
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this),
          )));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type,
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this),
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            (a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this),
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag")));
          }, this),
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      (a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged")));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                "left" === c && b > i - f && b < i + f
                  ? (e = a)
                  : "right" === c && b > i - g - f && b < i - g + f
                    ? (e = a + 1)
                    : this.op(b, "<", i) &&
                      this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                      (e = "left" === c ? a + 1 : a),
                -1 === e
              );
            }, this),
          ),
        this.settings.loop ||
          (this.op(b, ">", h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      (this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : c
            ? this.$stage.animate(
                { left: b + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                a.proxy(this.onTransitionEnd, this),
              )
            : this.$stage.css({ left: b + "px" }));
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        (b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          }));
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return ((a -= this._clones.length / 2), this.normalize(a, !0));
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);
          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return (a && (f -= this._clones.length / 2), Math.max(f, 0));
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return (a !== d && (this._speed = a), this._speed);
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this),
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      (this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
          ? ((i += 1), (a = ((a % i) + i) % i))
          : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update());
    }),
    (e.prototype.next = function (a) {
      ((a = a || !1), this.to(this.relative(this.current()) + 1, a));
    }),
    (e.prototype.prev = function (a) {
      ((a = a || !1), this.to(this.relative(this.current()) - 1, a));
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      (this.leave("animating"), this.trigger("translated"));
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
            ? (d = b.innerWidth)
            : c.documentElement && c.documentElement.clientWidth
              ? (d = c.documentElement.clientWidth)
              : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      (this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              ((b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1,
                ));
            }, this),
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0,
        ),
        this.invalidate("items"));
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      ((c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1,
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1,
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c }));
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger("remove", { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          (this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  (c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh());
                }, this),
              )
              .attr(
                "src",
                c.attr("src") ||
                  c.attr("data-src") ||
                  c.attr("data-src-retina"),
              ));
        }, this),
      );
    }),
    (e.prototype.destroy = function () {
      (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize)));
      for (var d in this._plugins) this._plugins[d].destroy();
      (this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                "",
              ),
          )
          .removeData("owl.carousel"));
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase(),
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c),
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          (this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++);
        }, this),
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this),
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          ((a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0));
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags,
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this),
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this),
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this),
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
              ? a.changedTouches[0]
              : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        (f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              (f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f),
                ));
            },
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c));
      });
    }),
    (a.fn.owlCarousel.Constructor = e));
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ((this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers));
    };
    ((e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval,
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ((this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;
                )
                  (this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++);
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers));
    };
    ((e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src") ||
                  f.attr("data-srcset");
              (this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          (f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy",
                            ));
                        }, this),
                      )
                      .attr("src", g)
                  : f.is("source")
                    ? f
                        .one(
                          "load.owl.lazy",
                          a.proxy(function () {
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy",
                            );
                          }, this),
                        )
                        .attr("srcset", g)
                    : ((e = new Image()),
                      (e.onload = a.proxy(function () {
                        (f.css({
                          "background-image": 'url("' + g + '")',
                          opacity: "1",
                        }),
                          this._core.trigger(
                            "loaded",
                            { element: f, url: g },
                            "lazy",
                          ));
                      }, this)),
                      (e.src = g)));
            }, this),
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      ((this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a,
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" === a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null));
      var d = this;
      (a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        }));
    };
    ((e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        (a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ((this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this),
        ));
    };
    ((e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
                ? "vzaar"
                : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/,
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        ((d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]));
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? "width:" + c.width + "px;height:" + c.height + "px;"
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
            ((e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a("<div>", { class: "owl-video-tn " + j, srcType: c })
                : a("<div>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")",
                  })),
              b.after(d),
              b.after(e));
          };
        if (
          (b.wrap(a("<div>", { class: "owl-video-wrapper", style: g })),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return (l(h.attr(i)), h.remove(), !1);
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
            ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (a) {
                  ((f = a[0].thumbnail_large), l(f));
                },
              })
            : "vzaar" === c.type &&
              a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (a) {
                  ((f = a.framegrab_url), l(f));
                },
              });
      }),
      (e.prototype.stop = function () {
        (this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video"));
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>',
          )),
          c.attr("height", h),
          c.attr("width", g),
          "youtube" === f.type
            ? c.attr(
                "src",
                "//www.youtube.com/embed/" +
                  f.id +
                  "?autoplay=1&rel=0&v=" +
                  f.id,
              )
            : "vimeo" === f.type
              ? c.attr(
                  "src",
                  "//player.vimeo.com/video/" + f.id + "?autoplay=1",
                )
              : "vzaar" === f.type &&
                c.attr(
                  "src",
                  "//view.vzaar.com/" + f.id + "/player?autoplay=true",
                ),
          a(c)
            .wrap('<div class="owl-video-frame" >')
            .insertAfter(e.find(".owl-video")),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ((this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers));
    };
    ((e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        (a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd());
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ((this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)));
    };
    ((e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        ((this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read(),
        )),
          this._core.is("interacting") ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed));
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        (this._core.is("rotating") || this._core.enter("rotating"),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)));
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      ((this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>",
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers));
    };
    ((e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        ((this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this),
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this),
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "button",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              (b.preventDefault(), this.to(d, c.dotsSpeed));
            }, this),
          ));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          "$relative" === b && e.navContainer
            ? this._controls[b].html("")
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              ((b = 0), ++c);
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        (this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0),
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0),
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
                ? this._controls.$absolute.append(
                    new Array(b + 1).join(this._templates[0]),
                  )
                : b < 0 &&
                  this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active")));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this),
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c,
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      ((this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current()),
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this),
        ));
    };
    ((e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e));
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return ((e = !c || b), !1);
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    (j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d())));
  })(window.Zepto || window.jQuery, window, document));

/* magnific-popup */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto,
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      (b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose),
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  ((t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      ((b.isIE7 = -1 !== c.indexOf("MSIE 7.")),
        (b.isIE8 = -1 !== c.indexOf("MSIE 8.")),
        (b.isLowIE = b.isIE7 || b.isIE8),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent,
          )),
        (d = a(document)),
        (b.popupsCache = {}));
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        ((b.items = c.items.toArray()), (b.index = 0));
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        ((b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0));
      if (b.isOpen) return void b.updateItemHTML();
      ((b.types = []),
        (f = ""),
        (b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading)));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        ((j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b));
      }
      (y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.wrap.css(
          b.fixedContentPos
            ? {
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY,
              }
            : { top: v.scrollTop(), position: "absolute" },
        ),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f));
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          (b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn));
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        (b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e));
      }
      (d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j));
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        (b.wrap.css("height", d), (b.wH = d));
      } else b.wH = a || v.height();
      (b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize"));
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      (b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index)));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        (y("FirstMarkupParse", f), (b.currTemplate[d] = f ? a(f) : !0));
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d],
      );
      (b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange"));
    },
    appendContent: function (a, c) {
      ((b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content));
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        ((e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href")));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        ((d.mfpEl = this), b._openClick(d, a, c));
      };
      c || (c = {});
      var e = "click.magnificPopup";
      ((c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d))));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || (2 !== c.which && !c.ctrlKey && !c.metaKey)) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        (c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e));
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        (c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading));
        var e = { status: a, text: d };
        (y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a));
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      (b.bgOverlay.addClass(a), b.wrap.addClass(a));
    },
    _removeClassFromMFP: function (a) {
      (this.bgOverlay.removeClass(a), b.wrap.removeClass(a));
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      (d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (a, c) {
          if (void 0 === c || c === !1) return !0;
          if (((e = a.split("_")), e.length > 1)) {
            var d = b.find(p + "-" + e[0]);
            if (d.length > 0) {
              var f = e[1];
              "replaceWith" === f
                ? d[0] !== c[0] && d.replaceWith(c)
                : "img" === f
                  ? d.is("img")
                    ? d.attr("src", c)
                    : d.replaceWith(
                        '<img src="' +
                          c +
                          '" class="' +
                          d.attr("class") +
                          '" >',
                      )
                  : d.attr(e[1], c);
            }
          } else b.find(p + "-" + a).html(c);
        }));
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        ((a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a));
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        (c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b));
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&times;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          (f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f));
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        ((c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c));
      return d;
    }));
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        (b.types.push(F),
          w(h + "." + F, function () {
            G();
          }));
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            (g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready"));
          } else (b.updateStatus("error", e.tNotFound), (f = a("<div>")));
          return ((c.inlineElement = f), f);
        }
        return (b.updateStatus("ready"), b._parseMarkup(d, {}, c), d);
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      (J(), b.req && b.req.abort());
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        (b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K));
      },
      getAjax: function (c) {
        (H && a(document.body).addClass(H), b.updateStatus("loading"));
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              (y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded"));
            },
            error: function () {
              (J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src),
                ));
            },
          },
          b.st.ajax.settings,
        );
        return ((b.req = a.ajax(d)), "");
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        (b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            (c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p));
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage));
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          (b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c));
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            (L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                        ? e(50)
                        : 100 === c && e(500)));
              }, f)));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          ((j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0
              ? (c.hasSize = !0)
              : j.width || (c.hasSize = !1));
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          (w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              ((f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  (f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      (k(),
                        setTimeout(function () {
                          (f.remove(), (a = f = null), y("ZoomAnimationEnded"));
                        }, 16));
                    }, g)));
                }, 16)));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                (f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16));
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            }));
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        (b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          }));
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length,
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery",
          g = Boolean(a.fn.mfpFastClick);
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                (c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  }));
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d
                        .replace(/%title%/gi, c.tPrev)
                        .replace(/%dir%/gi, "left"),
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right"),
                    ).addClass(s)),
                    h = g ? "mfpFastClick" : "click";
                  (e[h](function () {
                    b.prev();
                  }),
                    f[h](function () {
                      b.next();
                    }),
                    b.isIE7 &&
                      (x("b", e[0], !1, !0),
                      x("a", e[0], !1, !0),
                      x("b", f[0], !1, !0),
                      x("a", f[0], !1, !0)),
                    b.container.append(e.add(f)));
                }
              }),
              w(n + e, function () {
                (b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    (b.preloadNearbyImages(), (b._preloadTimeout = null));
                  }, 16)));
              }),
              void w(h + e, function () {
                (d.off(e),
                  b.wrap.off("click" + e),
                  b.arrowLeft &&
                    g &&
                    b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),
                  (b.arrowRight = b.arrowLeft = null));
              }))
            : !1
        );
      },
      next: function () {
        ((b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML());
      },
      prev: function () {
        ((b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML());
      },
      goTo: function (a) {
        ((b.direction = a >= b.index), (b.index = a), b.updateItemHTML());
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          (d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" >')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  ((d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d));
                })
                .attr("src", d.src)),
            (d.preloaded = !0));
        }
      },
    },
  });
  var U = "retina";
  (a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          ((c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              })));
        }
      },
    },
  }),
    (function () {
      var b = 1e3,
        c = "ontouchstart" in window,
        d = function () {
          v.off("touchmove" + f + " touchend" + f);
        },
        e = "mfpFastClick",
        f = "." + e;
      ((a.fn.mfpFastClick = function (e) {
        return a(this).each(function () {
          var g,
            h = a(this);
          if (c) {
            var i, j, k, l, m, n;
            h.on("touchstart" + f, function (a) {
              ((l = !1),
                (n = 1),
                (m = a.originalEvent
                  ? a.originalEvent.touches[0]
                  : a.touches[0]),
                (j = m.clientX),
                (k = m.clientY),
                v
                  .on("touchmove" + f, function (a) {
                    ((m = a.originalEvent
                      ? a.originalEvent.touches
                      : a.touches),
                      (n = m.length),
                      (m = m[0]),
                      (Math.abs(m.clientX - j) > 10 ||
                        Math.abs(m.clientY - k) > 10) &&
                        ((l = !0), d()));
                  })
                  .on("touchend" + f, function (a) {
                    (d(),
                      l ||
                        n > 1 ||
                        ((g = !0),
                        a.preventDefault(),
                        clearTimeout(i),
                        (i = setTimeout(function () {
                          g = !1;
                        }, b)),
                        e()));
                  }));
            });
          }
          h.on("click" + f, function () {
            g || e();
          });
        });
      }),
        (a.fn.destroyMfpFastClick = function () {
          (a(this).off("touchstart" + f + " click" + f),
            c && v.off("touchmove" + f + " touchend" + f));
        }));
    })(),
    A());
});

/* enquire */
!(function (a, b, c) {
  var d = window.matchMedia;
  "undefined" != typeof module && module.exports
    ? (module.exports = c(d))
    : "function" == typeof define && define.amd
      ? define(function () {
          return (b[a] = c(d));
        })
      : (b[a] = c(d));
})("enquire", this, function (a) {
  "use strict";
  function b(a, b) {
    var c,
      d = 0,
      e = a.length;
    for (d; e > d && ((c = b(a[d], d)), c !== !1); d++);
  }
  function c(a) {
    return "[object Array]" === Object.prototype.toString.apply(a);
  }
  function d(a) {
    return "function" == typeof a;
  }
  function e(a) {
    ((this.options = a), !a.deferSetup && this.setup());
  }
  function f(b, c) {
    ((this.query = b),
      (this.isUnconditional = c),
      (this.handlers = []),
      (this.mql = a(b)));
    var d = this;
    ((this.listener = function (a) {
      ((d.mql = a), d.assess());
    }),
      this.mql.addListener(this.listener));
  }
  function g() {
    if (!a)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill",
      );
    ((this.queries = {}), (this.browserIsIncapable = !a("only all").matches));
  }
  return (
    (e.prototype = {
      setup: function () {
        (this.options.setup && this.options.setup(), (this.initialised = !0));
      },
      on: function () {
        (!this.initialised && this.setup(),
          this.options.match && this.options.match());
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (a) {
        return this.options === a || this.options.match === a;
      },
    }),
    (f.prototype = {
      addHandler: function (a) {
        var b = new e(a);
        (this.handlers.push(b), this.matches() && b.on());
      },
      removeHandler: function (a) {
        var c = this.handlers;
        b(c, function (b, d) {
          return b.equals(a) ? (b.destroy(), !c.splice(d, 1)) : void 0;
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        (b(this.handlers, function (a) {
          a.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0));
      },
      assess: function () {
        var a = this.matches() ? "on" : "off";
        b(this.handlers, function (b) {
          b[a]();
        });
      },
    }),
    (g.prototype = {
      register: function (a, e, g) {
        var h = this.queries,
          i = g && this.browserIsIncapable;
        return (
          h[a] || (h[a] = new f(a, i)),
          d(e) && (e = { match: e }),
          c(e) || (e = [e]),
          b(e, function (b) {
            (d(b) && (b = { match: b }), h[a].addHandler(b));
          }),
          this
        );
      },
      unregister: function (a, b) {
        var c = this.queries[a];
        return (
          c && (b ? c.removeHandler(b) : (c.clear(), delete this.queries[a])),
          this
        );
      },
    }),
    new g()
  );
});

/*!
 * Jarallax v2.0.2 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */

/* plugin */
(!(function () {
  var t = !1;
  ((window.JQClass = function () {}),
    (JQClass.classes = {}),
    (JQClass.extend = function e(n) {
      function a() {
        !t && this._init && this._init.apply(this, arguments);
      }
      var s = this.prototype;
      t = !0;
      var i = new this();
      t = !1;
      for (var r in n)
        i[r] =
          "function" == typeof n[r] && "function" == typeof s[r]
            ? (function (t, e) {
                return function () {
                  var n = this._super;
                  this._super = function (e) {
                    return s[t].apply(this, e || []);
                  };
                  var a = e.apply(this, arguments);
                  return ((this._super = n), a);
                };
              })(r, n[r])
            : n[r];
      return (
        (a.prototype = i),
        (a.prototype.constructor = a),
        (a.extend = e),
        a
      );
    }));
})(),
  (function ($) {
    function camelCase(t) {
      return t.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      });
    }
    ((JQClass.classes.JQPlugin = JQClass.extend({
      name: "plugin",
      defaultOptions: {},
      regionalOptions: {},
      _getters: [],
      _getMarker: function () {
        return "is-" + this.name;
      },
      _init: function () {
        $.extend(
          this.defaultOptions,
          (this.regionalOptions && this.regionalOptions[""]) || {},
        );
        var t = camelCase(this.name);
        (($[t] = this),
          ($.fn[t] = function (e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return $[t]._isNotChained(e, n)
              ? $[t][e].apply($[t], [this[0]].concat(n))
              : this.each(function () {
                  if ("string" == typeof e) {
                    if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
                    $[t][e].apply($[t], [this].concat(n));
                  } else $[t]._attach(this, e);
                });
          }));
      },
      setDefaults: function (t) {
        $.extend(this.defaultOptions, t || {});
      },
      _isNotChained: function (t, e) {
        return "option" === t &&
          (0 === e.length || (1 === e.length && "string" == typeof e[0]))
          ? !0
          : $.inArray(t, this._getters) > -1;
      },
      _attach: function (t, e) {
        if (((t = $(t)), !t.hasClass(this._getMarker()))) {
          (t.addClass(this._getMarker()),
            (e = $.extend(
              {},
              this.defaultOptions,
              this._getMetadata(t),
              e || {},
            )));
          var n = $.extend(
            { name: this.name, elem: t, options: e },
            this._instSettings(t, e),
          );
          (t.data(this.name, n), this._postAttach(t, n), this.option(t, e));
        }
      },
      _instSettings: function (t, e) {
        return {};
      },
      _postAttach: function (t, e) {},
      _getMetadata: function (elem) {
        try {
          var data = elem.data(this.name.toLowerCase()) || "";
          ((data = data.replace(/'/g, '"')),
            (data = data.replace(/([a-zA-Z0-9]+):/g, function (t, e, n) {
              var a = data.substring(0, n).match(/"/g);
              return a && a.length % 2 !== 0 ? e + ":" : '"' + e + '":';
            })),
            (data = $.parseJSON("{" + data + "}")));
          for (var name in data) {
            var value = data[name];
            "string" == typeof value &&
              value.match(/^new Date\((.*)\)$/) &&
              (data[name] = eval(value));
          }
          return data;
        } catch (e) {
          return {};
        }
      },
      _getInst: function (t) {
        return $(t).data(this.name) || {};
      },
      option: function (t, e, n) {
        t = $(t);
        var a = t.data(this.name);
        if (!e || ("string" == typeof e && null == n)) {
          var s = (a || {}).options;
          return s && e ? s[e] : s;
        }
        if (t.hasClass(this._getMarker())) {
          var s = e || {};
          ("string" == typeof e && ((s = {}), (s[e] = n)),
            this._optionsChanged(t, a, s),
            $.extend(a.options, s));
        }
      },
      _optionsChanged: function (t, e, n) {},
      destroy: function (t) {
        ((t = $(t)),
          t.hasClass(this._getMarker()) &&
            (this._preDestroy(t, this._getInst(t)),
            t.removeData(this.name).removeClass(this._getMarker())));
      },
      _preDestroy: function (t, e) {},
    })),
      ($.JQPlugin = {
        createPlugin: function (t, e) {
          ("object" == typeof t && ((e = t), (t = "JQPlugin")),
            (t = camelCase(t)));
          var n = camelCase(e.name);
          ((JQClass.classes[n] = JQClass.classes[t].extend(e)),
            new JQClass.classes[n]());
        },
      }));
  })(jQuery));

/* countTo */
!(function (t) {
  function e(t, e) {
    return t.toFixed(e.decimals);
  }
  ((t.fn.countTo = function (e) {
    return (
      (e = e || {}),
      t(this).each(function () {
        function a() {
          ((s += l),
            c++,
            n(s),
            "function" == typeof o.onUpdate && o.onUpdate.call(f, s),
            c >= r &&
              (i.removeData("countTo"),
              clearInterval(d.interval),
              (s = o.to),
              "function" == typeof o.onComplete && o.onComplete.call(f, s)));
        }
        function n(t) {
          var e = o.formatter.call(f, t, o);
          i.text(e);
        }
        var o = t.extend(
            {},
            t.fn.countTo.defaults,
            {
              from: t(this).data("from"),
              to: t(this).data("to"),
              speed: t(this).data("speed"),
              refreshInterval: t(this).data("refresh-interval"),
              decimals: t(this).data("decimals"),
            },
            e,
          ),
          r = Math.ceil(o.speed / o.refreshInterval),
          l = (o.to - o.from) / r,
          f = this,
          i = t(this),
          c = 0,
          s = o.from,
          d = i.data("countTo") || {};
        (i.data("countTo", d),
          d.interval && clearInterval(d.interval),
          (d.interval = setInterval(a, o.refreshInterval)),
          n(s));
      })
    );
  }),
    (t.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1e3,
      refreshInterval: 100,
      decimals: 0,
      formatter: e,
      onUpdate: null,
      onComplete: null,
    }));
})(jQuery);

/* countdown */
(function ($) {
  var pluginName = "countdown";
  var Y = 0;
  var O = 1;
  var W = 2;
  var D = 3;
  var H = 4;
  var M = 5;
  var S = 6;
  $.JQPlugin.createPlugin({
    name: pluginName,
    defaultOptions: {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: "dHMS",
      layout: "",
      compact: false,
      padZeroes: false,
      significant: 0,
      description: "",
      expiryUrl: "",
      expiryText: "",
      alwaysExpire: false,
      onExpiry: null,
      onTick: null,
      tickInterval: 1,
    },
    regionalOptions: {
      "": {
        labels: [
          "Years",
          "Months",
          "Weeks",
          "Days",
          "Hours",
          "Minutes",
          "Seconds",
        ],
        labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
        compactLabels: ["y", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: false,
      },
    },
    _getters: ["getTimes"],
    _rtlClass: pluginName + "-rtl",
    _sectionClass: pluginName + "-section",
    _amountClass: pluginName + "-amount",
    _periodClass: pluginName + "-period",
    _rowClass: pluginName + "-row",
    _holdingClass: pluginName + "-holding",
    _showClass: pluginName + "-show",
    _descrClass: pluginName + "-descr",
    _timerElems: [],
    _init: function () {
      var self = this;
      this._super();
      this._serverSyncs = [];
      var now =
        typeof Date.now == "function"
          ? Date.now
          : function () {
              return new Date().getTime();
            };
      var perfAvail =
        window.performance && typeof window.performance.now == "function";
      function timerCallBack(timestamp) {
        var drawStart =
          timestamp < 1e12
            ? perfAvail
              ? performance.now() + performance.timing.navigationStart
              : now()
            : timestamp || now();
        if (drawStart - animationStartTime >= 1000) {
          self._updateElems();
          animationStartTime = drawStart;
        }
        requestAnimationFrame(timerCallBack);
      }
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        null;
      var animationStartTime = 0;
      if (!requestAnimationFrame || $.noRequestAnimationFrame) {
        $.noRequestAnimationFrame = null;
        setInterval(function () {
          self._updateElems();
        }, 980);
      } else {
        animationStartTime =
          window.animationStartTime ||
          window.webkitAnimationStartTime ||
          window.mozAnimationStartTime ||
          window.oAnimationStartTime ||
          window.msAnimationStartTime ||
          now();
        requestAnimationFrame(timerCallBack);
      }
    },
    UTCDate: function (tz, year, month, day, hours, mins, secs, ms) {
      if (typeof year == "object" && year.constructor == Date) {
        ms = year.getMilliseconds();
        secs = year.getSeconds();
        mins = year.getMinutes();
        hours = year.getHours();
        day = year.getDate();
        month = year.getMonth();
        year = year.getFullYear();
      }
      var d = new Date();
      d.setUTCFullYear(year);
      d.setUTCDate(1);
      d.setUTCMonth(month || 0);
      d.setUTCDate(day || 1);
      d.setUTCHours(hours || 0);
      d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));
      d.setUTCSeconds(secs || 0);
      d.setUTCMilliseconds(ms || 0);
      return d;
    },
    periodsToSeconds: function (periods) {
      return (
        periods[0] * 31557600 +
        periods[1] * 2629800 +
        periods[2] * 604800 +
        periods[3] * 86400 +
        periods[4] * 3600 +
        periods[5] * 60 +
        periods[6]
      );
    },
    _instSettings: function (elem, options) {
      return { _periods: [0, 0, 0, 0, 0, 0, 0] };
    },
    _addElem: function (elem) {
      if (!this._hasElem(elem)) {
        this._timerElems.push(elem);
      }
    },
    _hasElem: function (elem) {
      return $.inArray(elem, this._timerElems) > -1;
    },
    _removeElem: function (elem) {
      this._timerElems = $.map(this._timerElems, function (value) {
        return value == elem ? null : value;
      });
    },
    _updateElems: function () {
      for (var i = this._timerElems.length - 1; i >= 0; i--) {
        this._updateCountdown(this._timerElems[i]);
      }
    },
    _optionsChanged: function (elem, inst, options) {
      if (options.layout) {
        options.layout = options.layout
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
      }
      this._resetExtraLabels(inst.options, options);
      var timezoneChanged = inst.options.timezone != options.timezone;
      $.extend(inst.options, options);
      this._adjustSettings(
        elem,
        inst,
        options.until != null || options.since != null || timezoneChanged,
      );
      var now = new Date();
      if (
        (inst._since && inst._since < now) ||
        (inst._until && inst._until > now)
      ) {
        this._addElem(elem[0]);
      }
      this._updateCountdown(elem, inst);
    },
    _updateCountdown: function (elem, inst) {
      elem = elem.jquery ? elem : $(elem);
      inst = inst || this._getInst(elem);
      if (!inst) {
        return;
      }
      elem
        .html(this._generateHTML(inst))
        .toggleClass(this._rtlClass, inst.options.isRTL);
      if ($.isFunction(inst.options.onTick)) {
        var periods =
          inst._hold != "lap"
            ? inst._periods
            : this._calculatePeriods(
                inst,
                inst._show,
                inst.options.significant,
                new Date(),
              );
        if (
          inst.options.tickInterval == 1 ||
          this.periodsToSeconds(periods) % inst.options.tickInterval == 0
        ) {
          inst.options.onTick.apply(elem[0], [periods]);
        }
      }
      var expired =
        inst._hold != "pause" &&
        (inst._since
          ? inst._now.getTime() < inst._since.getTime()
          : inst._now.getTime() >= inst._until.getTime());
      if (expired && !inst._expiring) {
        inst._expiring = true;
        if (this._hasElem(elem[0]) || inst.options.alwaysExpire) {
          this._removeElem(elem[0]);
          if ($.isFunction(inst.options.onExpiry)) {
            inst.options.onExpiry.apply(elem[0], []);
          }
          if (inst.options.expiryText) {
            var layout = inst.options.layout;
            inst.options.layout = inst.options.expiryText;
            this._updateCountdown(elem[0], inst);
            inst.options.layout = layout;
          }
          if (inst.options.expiryUrl) {
            window.location = inst.options.expiryUrl;
          }
        }
        inst._expiring = false;
      } else if (inst._hold == "pause") {
        this._removeElem(elem[0]);
      }
    },
    _resetExtraLabels: function (base, options) {
      for (var n in options) {
        if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
          base[n] = options[n];
        }
      }
      for (var n in base) {
        if (
          n.match(/[Ll]abels[02-9]|compactLabels1/) &&
          typeof options[n] === "undefined"
        ) {
          base[n] = null;
        }
      }
    },
    _adjustSettings: function (elem, inst, recalc) {
      var now;
      var serverOffset = 0;
      var serverEntry = null;
      for (var i = 0; i < this._serverSyncs.length; i++) {
        if (this._serverSyncs[i][0] == inst.options.serverSync) {
          serverEntry = this._serverSyncs[i][1];
          break;
        }
      }
      if (serverEntry != null) {
        serverOffset = inst.options.serverSync ? serverEntry : 0;
        now = new Date();
      } else {
        var serverResult = $.isFunction(inst.options.serverSync)
          ? inst.options.serverSync.apply(elem[0], [])
          : null;
        now = new Date();
        serverOffset = serverResult
          ? now.getTime() - serverResult.getTime()
          : 0;
        this._serverSyncs.push([inst.options.serverSync, serverOffset]);
      }
      var timezone = inst.options.timezone;
      timezone = timezone == null ? -now.getTimezoneOffset() : timezone;
      if (recalc || (!recalc && inst._until == null && inst._since == null)) {
        inst._since = inst.options.since;
        if (inst._since != null) {
          inst._since = this.UTCDate(
            timezone,
            this._determineTime(inst._since, null),
          );
          if (inst._since && serverOffset) {
            inst._since.setMilliseconds(
              inst._since.getMilliseconds() + serverOffset,
            );
          }
        }
        inst._until = this.UTCDate(
          timezone,
          this._determineTime(inst.options.until, now),
        );
        if (serverOffset) {
          inst._until.setMilliseconds(
            inst._until.getMilliseconds() + serverOffset,
          );
        }
      }
      inst._show = this._determineShow(inst);
    },
    _preDestroy: function (elem, inst) {
      this._removeElem(elem[0]);
      elem.empty();
    },
    pause: function (elem) {
      this._hold(elem, "pause");
    },
    lap: function (elem) {
      this._hold(elem, "lap");
    },
    resume: function (elem) {
      this._hold(elem, null);
    },
    toggle: function (elem) {
      var inst = $.data(elem, this.name) || {};
      this[!inst._hold ? "pause" : "resume"](elem);
    },
    toggleLap: function (elem) {
      var inst = $.data(elem, this.name) || {};
      this[!inst._hold ? "lap" : "resume"](elem);
    },
    _hold: function (elem, hold) {
      var inst = $.data(elem, this.name);
      if (inst) {
        if (inst._hold == "pause" && !hold) {
          inst._periods = inst._savePeriods;
          var sign = inst._since ? "-" : "+";
          inst[inst._since ? "_since" : "_until"] = this._determineTime(
            sign +
              inst._periods[0] +
              "y" +
              sign +
              inst._periods[1] +
              "o" +
              sign +
              inst._periods[2] +
              "w" +
              sign +
              inst._periods[3] +
              "d" +
              sign +
              inst._periods[4] +
              "h" +
              sign +
              inst._periods[5] +
              "m" +
              sign +
              inst._periods[6] +
              "s",
          );
          this._addElem(elem);
        }
        inst._hold = hold;
        inst._savePeriods = hold == "pause" ? inst._periods : null;
        $.data(elem, this.name, inst);
        this._updateCountdown(elem, inst);
      }
    },
    getTimes: function (elem) {
      var inst = $.data(elem, this.name);
      return !inst
        ? null
        : inst._hold == "pause"
          ? inst._savePeriods
          : !inst._hold
            ? inst._periods
            : this._calculatePeriods(
                inst,
                inst._show,
                inst.options.significant,
                new Date(),
              );
    },
    _determineTime: function (setting, defaultTime) {
      var self = this;
      var offsetNumeric = function (offset) {
        var time = new Date();
        time.setTime(time.getTime() + offset * 1000);
        return time;
      };
      var offsetString = function (offset) {
        offset = offset.toLowerCase();
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth();
        var day = time.getDate();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
        var matches = pattern.exec(offset);
        while (matches) {
          switch (matches[2] || "s") {
            case "s":
              second += parseInt(matches[1], 10);
              break;
            case "m":
              minute += parseInt(matches[1], 10);
              break;
            case "h":
              hour += parseInt(matches[1], 10);
              break;
            case "d":
              day += parseInt(matches[1], 10);
              break;
            case "w":
              day += parseInt(matches[1], 10) * 7;
              break;
            case "o":
              month += parseInt(matches[1], 10);
              day = Math.min(day, self._getDaysInMonth(year, month));
              break;
            case "y":
              year += parseInt(matches[1], 10);
              day = Math.min(day, self._getDaysInMonth(year, month));
              break;
          }
          matches = pattern.exec(offset);
        }
        return new Date(year, month, day, hour, minute, second, 0);
      };
      var time =
        setting == null
          ? defaultTime
          : typeof setting == "string"
            ? offsetString(setting)
            : typeof setting == "number"
              ? offsetNumeric(setting)
              : setting;
      if (time) time.setMilliseconds(0);
      return time;
    },
    _getDaysInMonth: function (year, month) {
      return 32 - new Date(year, month, 32).getDate();
    },
    _normalLabels: function (num) {
      return num;
    },
    _generateHTML: function (inst) {
      var self = this;
      inst._periods = inst._hold
        ? inst._periods
        : this._calculatePeriods(
            inst,
            inst._show,
            inst.options.significant,
            new Date(),
          );
      var shownNonZero = false;
      var showCount = 0;
      var sigCount = inst.options.significant;
      var show = $.extend({}, inst._show);
      for (var period = Y; period <= S; period++) {
        shownNonZero |= inst._show[period] == "?" && inst._periods[period] > 0;
        show[period] =
          inst._show[period] == "?" && !shownNonZero
            ? null
            : inst._show[period];
        showCount += show[period] ? 1 : 0;
        sigCount -= inst._periods[period] > 0 ? 1 : 0;
      }
      var showSignificant = [false, false, false, false, false, false, false];
      for (var period = S; period >= Y; period--) {
        if (inst._show[period]) {
          if (inst._periods[period]) {
            showSignificant[period] = true;
          } else {
            showSignificant[period] = sigCount > 0;
            sigCount--;
          }
        }
      }
      var labels = inst.options.compact
        ? inst.options.compactLabels
        : inst.options.labels;
      var whichLabels = inst.options.whichLabels || this._normalLabels;
      var showCompact = function (period) {
        var labelsNum =
          inst.options["compactLabels" + whichLabels(inst._periods[period])];
        return show[period]
          ? self._translateDigits(inst, inst._periods[period]) +
              (labelsNum ? labelsNum[period] : labels[period]) +
              " "
          : "";
      };
      var minDigits = inst.options.padZeroes ? 2 : 1;
      var showFull = function (period) {
        var labelsNum =
          inst.options["labels" + whichLabels(inst._periods[period])];
        return (!inst.options.significant && show[period]) ||
          (inst.options.significant && showSignificant[period])
          ? '<span class="' +
              self._sectionClass +
              '">' +
              '<span class="' +
              self._amountClass +
              '">' +
              self._minDigits(inst, inst._periods[period], minDigits) +
              "</span>" +
              '<span class="' +
              self._periodClass +
              '">' +
              (labelsNum ? labelsNum[period] : labels[period]) +
              "</span></span>"
          : "";
      };
      return inst.options.layout
        ? this._buildLayout(
            inst,
            show,
            inst.options.layout,
            inst.options.compact,
            inst.options.significant,
            showSignificant,
          )
        : (inst.options.compact
            ? '<span class="' +
              this._rowClass +
              " " +
              this._amountClass +
              (inst._hold ? " " + this._holdingClass : "") +
              '">' +
              showCompact(Y) +
              showCompact(O) +
              showCompact(W) +
              showCompact(D) +
              (show[H] ? this._minDigits(inst, inst._periods[H], 2) : "") +
              (show[M]
                ? (show[H] ? inst.options.timeSeparator : "") +
                  this._minDigits(inst, inst._periods[M], 2)
                : "") +
              (show[S]
                ? (show[H] || show[M] ? inst.options.timeSeparator : "") +
                  this._minDigits(inst, inst._periods[S], 2)
                : "")
            : '<span class="' +
              this._rowClass +
              " " +
              this._showClass +
              (inst.options.significant || showCount) +
              (inst._hold ? " " + this._holdingClass : "") +
              '">' +
              showFull(Y) +
              showFull(O) +
              showFull(W) +
              showFull(D) +
              showFull(H) +
              showFull(M) +
              showFull(S)) +
            "</span>" +
            (inst.options.description
              ? '<span class="' +
                this._rowClass +
                " " +
                this._descrClass +
                '">' +
                inst.options.description +
                "</span>"
              : "");
    },
    _buildLayout: function (
      inst,
      show,
      layout,
      compact,
      significant,
      showSignificant,
    ) {
      var labels = inst.options[compact ? "compactLabels" : "labels"];
      var whichLabels = inst.options.whichLabels || this._normalLabels;
      var labelFor = function (index) {
        return (inst.options[
          (compact ? "compactLabels" : "labels") +
            whichLabels(inst._periods[index])
        ] || labels)[index];
      };
      var digit = function (value, position) {
        return inst.options.digits[Math.floor(value / position) % 10];
      };
      var subs = {
        desc: inst.options.description,
        sep: inst.options.timeSeparator,
        yl: labelFor(Y),
        yn: this._minDigits(inst, inst._periods[Y], 1),
        ynn: this._minDigits(inst, inst._periods[Y], 2),
        ynnn: this._minDigits(inst, inst._periods[Y], 3),
        y1: digit(inst._periods[Y], 1),
        y10: digit(inst._periods[Y], 10),
        y100: digit(inst._periods[Y], 100),
        y1000: digit(inst._periods[Y], 1000),
        ol: labelFor(O),
        on: this._minDigits(inst, inst._periods[O], 1),
        onn: this._minDigits(inst, inst._periods[O], 2),
        onnn: this._minDigits(inst, inst._periods[O], 3),
        o1: digit(inst._periods[O], 1),
        o10: digit(inst._periods[O], 10),
        o100: digit(inst._periods[O], 100),
        o1000: digit(inst._periods[O], 1000),
        wl: labelFor(W),
        wn: this._minDigits(inst, inst._periods[W], 1),
        wnn: this._minDigits(inst, inst._periods[W], 2),
        wnnn: this._minDigits(inst, inst._periods[W], 3),
        w1: digit(inst._periods[W], 1),
        w10: digit(inst._periods[W], 10),
        w100: digit(inst._periods[W], 100),
        w1000: digit(inst._periods[W], 1000),
        dl: labelFor(D),
        dn: this._minDigits(inst, inst._periods[D], 1),
        dnn: this._minDigits(inst, inst._periods[D], 2),
        dnnn: this._minDigits(inst, inst._periods[D], 3),
        d1: digit(inst._periods[D], 1),
        d10: digit(inst._periods[D], 10),
        d100: digit(inst._periods[D], 100),
        d1000: digit(inst._periods[D], 1000),
        hl: labelFor(H),
        hn: this._minDigits(inst, inst._periods[H], 1),
        hnn: this._minDigits(inst, inst._periods[H], 2),
        hnnn: this._minDigits(inst, inst._periods[H], 3),
        h1: digit(inst._periods[H], 1),
        h10: digit(inst._periods[H], 10),
        h100: digit(inst._periods[H], 100),
        h1000: digit(inst._periods[H], 1000),
        ml: labelFor(M),
        mn: this._minDigits(inst, inst._periods[M], 1),
        mnn: this._minDigits(inst, inst._periods[M], 2),
        mnnn: this._minDigits(inst, inst._periods[M], 3),
        m1: digit(inst._periods[M], 1),
        m10: digit(inst._periods[M], 10),
        m100: digit(inst._periods[M], 100),
        m1000: digit(inst._periods[M], 1000),
        sl: labelFor(S),
        sn: this._minDigits(inst, inst._periods[S], 1),
        snn: this._minDigits(inst, inst._periods[S], 2),
        snnn: this._minDigits(inst, inst._periods[S], 3),
        s1: digit(inst._periods[S], 1),
        s10: digit(inst._periods[S], 10),
        s100: digit(inst._periods[S], 100),
        s1000: digit(inst._periods[S], 1000),
      };
      var html = layout;
      for (var i = Y; i <= S; i++) {
        var period = "yowdhms".charAt(i);
        var re = new RegExp(
          "\\{" + period + "<\\}([\\s\\S]*)\\{" + period + ">\\}",
          "g",
        );
        html = html.replace(
          re,
          (!significant && show[i]) || (significant && showSignificant[i])
            ? "$1"
            : "",
        );
      }
      $.each(subs, function (n, v) {
        var re = new RegExp("\\{" + n + "\\}", "g");
        html = html.replace(re, v);
      });
      return html;
    },
    _minDigits: function (inst, value, len) {
      value = "" + value;
      if (value.length >= len) {
        return this._translateDigits(inst, value);
      }
      value = "0000000000" + value;
      return this._translateDigits(inst, value.substr(value.length - len));
    },
    _translateDigits: function (inst, value) {
      return ("" + value).replace(/[0-9]/g, function (digit) {
        return inst.options.digits[digit];
      });
    },
    _determineShow: function (inst) {
      var format = inst.options.format;
      var show = [];
      show[Y] = format.match("y") ? "?" : format.match("Y") ? "!" : null;
      show[O] = format.match("o") ? "?" : format.match("O") ? "!" : null;
      show[W] = format.match("w") ? "?" : format.match("W") ? "!" : null;
      show[D] = format.match("d") ? "?" : format.match("D") ? "!" : null;
      show[H] = format.match("h") ? "?" : format.match("H") ? "!" : null;
      show[M] = format.match("m") ? "?" : format.match("M") ? "!" : null;
      show[S] = format.match("s") ? "?" : format.match("S") ? "!" : null;
      return show;
    },
    _calculatePeriods: function (inst, show, significant, now) {
      inst._now = now;
      inst._now.setMilliseconds(0);
      var until = new Date(inst._now.getTime());
      if (inst._since) {
        if (now.getTime() < inst._since.getTime()) {
          inst._now = now = until;
        } else {
          now = inst._since;
        }
      } else {
        until.setTime(inst._until.getTime());
        if (now.getTime() > inst._until.getTime()) {
          inst._now = now = until;
        }
      }
      var periods = [0, 0, 0, 0, 0, 0, 0];
      if (show[Y] || show[O]) {
        var lastNow = this._getDaysInMonth(now.getFullYear(), now.getMonth());
        var lastUntil = this._getDaysInMonth(
          until.getFullYear(),
          until.getMonth(),
        );
        var sameDay =
          until.getDate() == now.getDate() ||
          (until.getDate() >= Math.min(lastNow, lastUntil) &&
            now.getDate() >= Math.min(lastNow, lastUntil));
        var getSecs = function (date) {
          return (
            (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds()
          );
        };
        var months = Math.max(
          0,
          (until.getFullYear() - now.getFullYear()) * 12 +
            until.getMonth() -
            now.getMonth() +
            ((until.getDate() < now.getDate() && !sameDay) ||
            (sameDay && getSecs(until) < getSecs(now))
              ? -1
              : 0),
        );
        periods[Y] = show[Y] ? Math.floor(months / 12) : 0;
        periods[O] = show[O] ? months - periods[Y] * 12 : 0;
        now = new Date(now.getTime());
        var wasLastDay = now.getDate() == lastNow;
        var lastDay = this._getDaysInMonth(
          now.getFullYear() + periods[Y],
          now.getMonth() + periods[O],
        );
        if (now.getDate() > lastDay) {
          now.setDate(lastDay);
        }
        now.setFullYear(now.getFullYear() + periods[Y]);
        now.setMonth(now.getMonth() + periods[O]);
        if (wasLastDay) {
          now.setDate(lastDay);
        }
      }
      var diff = Math.floor((until.getTime() - now.getTime()) / 1000);
      var extractPeriod = function (period, numSecs) {
        periods[period] = show[period] ? Math.floor(diff / numSecs) : 0;
        diff -= periods[period] * numSecs;
      };
      extractPeriod(W, 604800);
      extractPeriod(D, 86400);
      extractPeriod(H, 3600);
      extractPeriod(M, 60);
      extractPeriod(S, 1);
      if (diff > 0 && !inst._since) {
        var multiplier = [1, 12, 4.3482, 7, 24, 60, 60];
        var lastShown = S;
        var max = 1;
        for (var period = S; period >= Y; period--) {
          if (show[period]) {
            if (periods[lastShown] >= max) {
              periods[lastShown] = 0;
              diff = 1;
            }
            if (diff > 0) {
              periods[period]++;
              diff = 0;
              lastShown = period;
              max = 1;
            }
          }
          max *= multiplier[period];
        }
      }
      if (significant) {
        for (var period = Y; period <= S; period++) {
          if (significant && periods[period]) {
            significant--;
          } else if (!significant) {
            periods[period] = 0;
          }
        }
      }
      return periods;
    },
  });
})(jQuery);

/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!(function (t, e) {
  "use strict";
  function r(r, a, i, u, l) {
    function f() {
      ((L = t.devicePixelRatio > 1),
        (i = c(i)),
        a.delay >= 0 &&
          setTimeout(function () {
            s(!0);
          }, a.delay),
        (a.delay < 0 || a.combined) &&
          ((u.e = v(a.throttle, function (t) {
            ("resize" === t.type && (w = B = -1), s(t.all));
          })),
          (u.a = function (t) {
            ((t = c(t)), i.push.apply(i, t));
          }),
          (u.g = function () {
            return (i = n(i).filter(function () {
              return !n(this).data(a.loadedName);
            }));
          }),
          (u.f = function (t) {
            for (var e = 0; e < t.length; e++) {
              var r = i.filter(function () {
                return this === t[e];
              });
              r.length && s(!1, r);
            }
          }),
          s(),
          n(a.appendScroll).on("scroll." + l + " resize." + l, u.e)));
    }
    function c(t) {
      var i = a.defaultImage,
        o = a.placeholder,
        u = a.imageBase,
        l = a.srcsetAttribute,
        f = a.loaderAttribute,
        c = a._f || {};
      t = n(t)
        .filter(function () {
          var t = n(this),
            r = m(this);
          return (
            !t.data(a.handledName) &&
            (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
          );
        })
        .data("plugin_" + a.name, r);
      for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
          g = m(t[s]),
          h = A.attr(a.imageBaseAttribute) || u;
        (g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)),
          c[g] === e || A.attr(f) || A.attr(f, c[g]),
          g === N && i && !A.attr(E)
            ? A.attr(E, i)
            : g === N ||
              !o ||
              (A.css(O) && "none" !== A.css(O)) ||
              A.css(O, "url('" + o + "')"));
      }
      return t;
    }
    function s(t, e) {
      if (!i.length) return void (a.autoDestroy && r.destroy());
      for (
        var o = e || i,
          u = !1,
          l = a.imageBase || "",
          f = a.srcsetAttribute,
          c = a.handledName,
          s = 0;
        s < o.length;
        s++
      )
        if (t || e || A(o[s])) {
          var g = n(o[s]),
            h = m(o[s]),
            b = g.attr(a.attribute),
            v = g.attr(a.imageBaseAttribute) || l,
            p = g.attr(a.loaderAttribute);
          g.data(c) ||
            (a.visibleOnly && !g.is(":visible")) ||
            !(
              ((b || g.attr(f)) &&
                ((h === N &&
                  (v + b !== g.attr(E) || g.attr(f) !== g.attr(F))) ||
                  (h !== N && v + b !== g.css(O)))) ||
              p
            ) ||
            ((u = !0), g.data(c, !0), d(g, h, v, p));
        }
      u &&
        (i = n(i).filter(function () {
          return !n(this).data(c);
        }));
    }
    function d(t, e, r, i) {
      ++z;
      var o = function () {
        (y("onError", t), p(), (o = n.noop));
      };
      y("beforeLoad", t);
      var u = a.attribute,
        l = a.srcsetAttribute,
        f = a.sizesAttribute,
        c = a.retinaAttribute,
        s = a.removeAttribute,
        d = a.loadedName,
        A = t.attr(c);
      if (i) {
        var g = function () {
          (s && t.removeAttr(a.loaderAttribute),
            t.data(d, !0),
            y(T, t),
            setTimeout(p, 1),
            (g = n.noop));
        };
        (t.off(I).one(I, o).one(D, g),
          y(i, t, function (e) {
            e ? (t.off(D), g()) : (t.off(I), o());
          }) || t.trigger(I));
      } else {
        var h = n(new Image());
        h.one(I, o).one(D, function () {
          (t.hide(),
            e === N
              ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E))
              : t.css(O, "url('" + h.attr(E) + "')"),
            t[a.effect](a.effectTime),
            s &&
              (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute),
              f !== C && t.removeAttr(f)),
            t.data(d, !0),
            y(T, t),
            h.remove(),
            p());
        });
        var m = (L && A ? A : t.attr(u)) || "";
        (h
          .attr(C, t.attr(f))
          .attr(F, t.attr(l))
          .attr(E, m ? r + m : null),
          h.complete && h.trigger(D));
      }
    }
    function A(t) {
      var e = t.getBoundingClientRect(),
        r = a.scrollDirection,
        n = a.threshold,
        i = h() + n > e.top && -n < e.bottom,
        o = g() + n > e.left && -n < e.right;
      return "vertical" === r ? i : "horizontal" === r ? o : i && o;
    }
    function g() {
      return w >= 0 ? w : (w = n(t).width());
    }
    function h() {
      return B >= 0 ? B : (B = n(t).height());
    }
    function m(t) {
      return t.tagName.toLowerCase();
    }
    function b(t, e) {
      if (e) {
        var r = t.split(",");
        t = "";
        for (var a = 0, n = r.length; a < n; a++)
          t += e + r[a].trim() + (a !== n - 1 ? "," : "");
      }
      return t;
    }
    function v(t, e) {
      var n,
        i = 0;
      return function (o, u) {
        function l() {
          ((i = +new Date()), e.call(r, o));
        }
        var f = +new Date() - i;
        (n && clearTimeout(n),
          f > t || !a.enableThrottle || u ? l() : (n = setTimeout(l, t - f)));
      };
    }
    function p() {
      (--z, i.length || z || y("onFinishedAll"));
    }
    function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0);
    }
    var z = 0,
      w = -1,
      B = -1,
      L = !1,
      T = "afterLoad",
      D = "load",
      I = "error",
      N = "img",
      E = "src",
      F = "srcset",
      C = "sizes",
      O = "background-image";
    "event" === a.bind || o ? f() : n(t).on(D + "." + l, f);
  }
  function a(a, o) {
    var u = this,
      l = n.extend({}, u.config, o),
      f = {},
      c = l.name + "-" + ++i;
    return (
      (u.config = function (t, r) {
        return r === e ? l[t] : ((l[t] = r), u);
      }),
      (u.addItems = function (t) {
        return (f.a && f.a("string" === n.type(t) ? n(t) : t), u);
      }),
      (u.getItems = function () {
        return f.g ? f.g() : {};
      }),
      (u.update = function (t) {
        return (f.e && f.e({}, !t), u);
      }),
      (u.force = function (t) {
        return (f.f && f.f("string" === n.type(t) ? n(t) : t), u);
      }),
      (u.loadAll = function () {
        return (f.e && f.e({ all: !0 }, !0), u);
      }),
      (u.destroy = function () {
        return (
          n(l.appendScroll).off("." + c, f.e),
          n(t).off("." + c),
          (f = {}),
          e
        );
      }),
      r(u, l, a, f, c),
      l.chainable ? a : u
    );
  }
  var n = t.jQuery || t.Zepto,
    i = 0,
    o = !1;
  ((n.fn.Lazy = n.fn.lazy =
    function (t) {
      return new a(this, t);
    }),
    (n.Lazy = n.lazy =
      function (t, r, i) {
        if ((n.isFunction(r) && ((i = r), (r = [])), n.isFunction(i))) {
          ((t = n.isArray(t) ? t : [t]), (r = n.isArray(r) ? r : [r]));
          for (
            var o = a.prototype.config,
              u = o._f || (o._f = {}),
              l = 0,
              f = t.length;
            l < f;
            l++
          )
            (o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
          for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0];
        }
      }),
    (a.prototype.config = {
      name: "lazy",
      chainable: !0,
      autoDestroy: !0,
      bind: "load",
      threshold: 500,
      visibleOnly: !1,
      appendScroll: t,
      scrollDirection: "both",
      imageBase: null,
      defaultImage:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      placeholder: null,
      delay: -1,
      combined: !1,
      attribute: "data-src",
      srcsetAttribute: "data-srcset",
      sizesAttribute: "data-sizes",
      retinaAttribute: "data-retina",
      loaderAttribute: "data-loader",
      imageBaseAttribute: "data-imagebase",
      removeAttribute: !0,
      handledName: "handled",
      loadedName: "loaded",
      effect: "show",
      effectTime: 0,
      enableThrottle: !0,
      throttle: 250,
      beforeLoad: e,
      afterLoad: e,
      onError: e,
      onFinishedAll: e,
    }),
    n(t).on("load", function () {
      o = !0;
    }));
})(window);

/*! jQuery & Zepto Lazy - All Plugins v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
(!(function (t) {
  function a(a, e, r, o) {
    o = o ? o.toUpperCase() : "GET";
    var i;
    (("POST" !== o && "PUT" !== o) ||
      !a.config("ajaxCreateData") ||
      (i = a.config("ajaxCreateData").apply(a, [e])),
      t.ajax({
        url: e.attr("data-src"),
        type: "POST" === o || "PUT" === o ? o : "GET",
        data: i,
        dataType: e.attr("data-type") || "html",
        success: function (t) {
          (e.html(t),
            r(!0),
            a.config("removeAttribute") &&
              e.removeAttr("data-src data-method data-type"));
        },
        error: function () {
          r(!1);
        },
      }));
  }
  (t.lazy("ajax", function (t, e) {
    a(this, t, e, t.attr("data-method"));
  }),
    t.lazy("get", function (t, e) {
      a(this, t, e, "GET");
    }),
    t.lazy("post", function (t, e) {
      a(this, t, e, "POST");
    }),
    t.lazy("put", function (t, e) {
      a(this, t, e, "PUT");
    }));
})(window.jQuery || window.Zepto),
  (function (t) {
    t.lazy(["av", "audio", "video"], ["audio", "video"], function (a, e) {
      var r = a[0].tagName.toLowerCase();
      if ("audio" === r || "video" === r) {
        var o = a.find("data-src"),
          i = a.find("data-track"),
          n = 0,
          c = function () {
            ++n === o.length && e(!1);
          },
          s = function () {
            var a = t(this),
              e = a[0].tagName.toLowerCase(),
              r = a.prop("attributes"),
              o = t("data-src" === e ? "<source>" : "<track>");
            ("data-src" === e && o.one("error", c),
              t.each(r, function (t, a) {
                o.attr(a.name, a.value);
              }),
              a.replaceWith(o));
          };
        (a
          .one("loadedmetadata", function () {
            e(!0);
          })
          .off("load error")
          .attr("poster", a.attr("data-poster")),
          o.length
            ? o.each(s)
            : a.attr("data-src")
              ? (t.each(a.attr("data-src").split(","), function (e, r) {
                  var o = r.split("|");
                  a.append(
                    t("<source>")
                      .one("error", c)
                      .attr({ src: o[0].trim(), type: o[1].trim() }),
                  );
                }),
                this.config("removeAttribute") && a.removeAttr("data-src"))
              : e(!1),
          i.length && i.each(s));
      } else e(!1);
    });
  })(window.jQuery || window.Zepto),
  (function (t) {
    t.lazy(["frame", "iframe"], "iframe", function (a, e) {
      var r = this;
      if ("iframe" === a[0].tagName.toLowerCase()) {
        var o = a.attr("data-error-detect");
        "true" !== o && "1" !== o
          ? (a.attr("src", a.attr("data-src")),
            r.config("removeAttribute") &&
              a.removeAttr("data-src data-error-detect"))
          : t.ajax({
              url: a.attr("data-src"),
              dataType: "html",
              crossDomain: !0,
              xhrFields: { withCredentials: !0 },
              success: function (t) {
                (a.html(t).attr("src", a.attr("data-src")),
                  r.config("removeAttribute") &&
                    a.removeAttr("data-src data-error-detect"));
              },
              error: function () {
                e(!1);
              },
            });
      } else e(!1);
    });
  })(window.jQuery || window.Zepto),
  (function (t) {
    (t.lazy("noop", function () {}),
      t.lazy("noop-success", function (t, a) {
        a(!0);
      }),
      t.lazy("noop-error", function (t, a) {
        a(!1);
      }));
  })(window.jQuery || window.Zepto),
  (function (t) {
    function a(a, e, i) {
      var n = a.prop("attributes"),
        c = t("<" + e + ">");
      return (
        t.each(n, function (t, a) {
          (("srcset" !== a.name && a.name !== o) || (a.value = r(a.value, i)),
            c.attr(a.name, a.value));
        }),
        a.replaceWith(c),
        c
      );
    }
    function e(a, e, r) {
      var o = t("<img>")
        .one("load", function () {
          r(!0);
        })
        .one("error", function () {
          r(!1);
        })
        .appendTo(a)
        .attr("src", e);
      o.complete && o.load();
    }
    function r(t, a) {
      if (a) {
        var e = t.split(",");
        t = "";
        for (var r = 0, o = e.length; r < o; r++)
          t += a + e[r].trim() + (r !== o - 1 ? "," : "");
      }
      return t;
    }
    var o = "data-src";
    t.lazy(["pic", "picture"], ["picture"], function (i, n) {
      if ("picture" === i[0].tagName.toLowerCase()) {
        var c = i.find(o),
          s = i.find("data-img"),
          d = this.config("imageBase") || "";
        c.length
          ? (c.each(function () {
              a(t(this), "source", d);
            }),
            1 === s.length
              ? ((s = a(s, "img", d)),
                s
                  .on("load", function () {
                    n(!0);
                  })
                  .on("error", function () {
                    n(!1);
                  }),
                s.attr("src", s.attr(o)),
                this.config("removeAttribute") && s.removeAttr(o))
              : i.attr(o)
                ? (e(i, d + i.attr(o), n),
                  this.config("removeAttribute") && i.removeAttr(o))
                : n(!1))
          : i.attr("data-srcset")
            ? (t("<source>")
                .attr({
                  media: i.attr("data-media"),
                  sizes: i.attr("data-sizes"),
                  type: i.attr("data-type"),
                  srcset: r(i.attr("data-srcset"), d),
                })
                .appendTo(i),
              e(i, d + i.attr(o), n),
              this.config("removeAttribute") &&
                i.removeAttr(
                  o + " data-srcset data-media data-sizes data-type",
                ))
            : n(!1);
      } else n(!1);
    });
  })(window.jQuery || window.Zepto),
  (function (t) {
    t.lazy(["js", "javascript", "script"], "script", function (t, a) {
      "script" === t[0].tagName.toLowerCase()
        ? (t.attr("src", t.attr("data-src")),
          this.config("removeAttribute") && t.removeAttr("data-src"))
        : a(!1);
    });
  })(window.jQuery || window.Zepto),
  (function (t) {
    t.lazy("vimeo", function (t, a) {
      "iframe" === t[0].tagName.toLowerCase()
        ? (t.attr(
            "src",
            "https://player.vimeo.com/video/" + t.attr("data-src"),
          ),
          this.config("removeAttribute") && t.removeAttr("data-src"))
        : a(!1);
    });
  })(window.jQuery || window.Zepto),
  (function (t) {
    t.lazy(["yt", "youtube"], function (t, a) {
      if ("iframe" === t[0].tagName.toLowerCase()) {
        var e = /1|true/.test(t.attr("data-nocookie"));
        (t.attr(
          "src",
          "https://www.youtube" +
            (e ? "-nocookie" : "") +
            ".com/embed/" +
            t.attr("data-src") +
            "?rel=0&amp;showinfo=0",
        ),
          this.config("removeAttribute") && t.removeAttr("data-src"));
      } else a(!1);
    });
  })(window.jQuery || window.Zepto));

/* jquery.cookie */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
      ? e(require("jquery"))
      : e(jQuery);
})(function (e) {
  var n = /\+/g;
  function o(e) {
    return t.raw ? e : encodeURIComponent(e);
  }
  function i(e) {
    return o(t.json ? JSON.stringify(e) : String(e));
  }
  function r(o, i) {
    var r = t.raw
      ? o
      : (function (e) {
          0 === e.indexOf('"') &&
            (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
          try {
            return (
              (e = decodeURIComponent(e.replace(n, " "))),
              t.json ? JSON.parse(e) : e
            );
          } catch (e) {}
        })(o);
    return e.isFunction(i) ? i(r) : r;
  }
  var t = (e.cookie = function (n, c, u) {
    if (void 0 !== c && !e.isFunction(c)) {
      if ("number" == typeof (u = e.extend({}, t.defaults, u)).expires) {
        var a = u.expires,
          d = (u.expires = new Date());
        d.setTime(+d + 864e5 * a);
      }
      return (document.cookie = [
        o(n),
        "=",
        i(c),
        u.expires ? "; expires=" + u.expires.toUTCString() : "",
        u.path ? "; path=" + u.path : "",
        u.domain ? "; domain=" + u.domain : "",
        u.secure ? "; secure" : "",
      ].join(""));
    }
    for (
      var f,
        p = n ? void 0 : {},
        s = document.cookie ? document.cookie.split("; ") : [],
        m = 0,
        v = s.length;
      m < v;
      m++
    ) {
      var x = s[m].split("="),
        k = ((f = x.shift()), t.raw ? f : decodeURIComponent(f)),
        l = x.join("=");
      if (n && n === k) {
        p = r(l, c);
        break;
      }
      n || void 0 === (l = r(l)) || (p[k] = l);
    }
    return p;
  });
  ((t.defaults = {}),
    (e.removeCookie = function (n, o) {
      return (
        void 0 !== e.cookie(n) &&
        (e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n))
      );
    }));
});

/* SmoothScroll */
!(function () {
  var s,
    i,
    c,
    a,
    o = {
      frameRate: 150,
      animationTime: 600,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      fixedBackground: !0,
      excluded: "",
    },
    p = o,
    u = !1,
    d = !1,
    n = { x: 0, y: 0 },
    f = !1,
    m = document.documentElement,
    l = [],
    h = /^Mac/.test(navigator.platform),
    w = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
    },
    v = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function y() {
    if (!f && document.body) {
      f = !0;
      var e = document.body,
        t = document.documentElement,
        o = window.innerHeight,
        n = e.scrollHeight;
      if (
        ((m = 0 <= document.compatMode.indexOf("CSS") ? t : e),
        (s = e),
        p.keyboardSupport && Y("keydown", x),
        top != self)
      )
        d = !0;
      else if (Q && o < n && (e.offsetHeight <= o || t.offsetHeight <= o)) {
        var r,
          a = document.createElement("div");
        ((a.style.cssText =
          "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
          m.scrollHeight +
          "px"),
          document.body.appendChild(a),
          (c = function () {
            r =
              r ||
              setTimeout(function () {
                u ||
                  ((a.style.height = "0"),
                  (a.style.height = m.scrollHeight + "px"),
                  (r = null));
              }, 500);
          }),
          setTimeout(c, 10),
          Y("resize", c));
        if (
          ((i = new R(c)).observe(e, {
            attributes: !0,
            childList: !0,
            characterData: !1,
          }),
          m.offsetHeight <= o)
        ) {
          var l = document.createElement("div");
          ((l.style.clear = "both"), e.appendChild(l));
        }
      }
      p.fixedBackground ||
        u ||
        ((e.style.backgroundAttachment = "scroll"),
        (t.style.backgroundAttachment = "scroll"));
    }
  }
  var b = [],
    g = !1,
    r = Date.now();
  function S(d, f, m) {
    if (
      ((function (e, t) {
        ((e = 0 < e ? 1 : -1),
          (t = 0 < t ? 1 : -1),
          (n.x === e && n.y === t) ||
            ((n.x = e), (n.y = t), (b = []), (r = 0)));
      })(f, m),
      1 != p.accelerationMax)
    ) {
      var e = Date.now() - r;
      if (e < p.accelerationDelta) {
        var t = (1 + 50 / e) / 2;
        1 < t && ((t = Math.min(t, p.accelerationMax)), (f *= t), (m *= t));
      }
      r = Date.now();
    }
    if (
      (b.push({
        x: f,
        y: m,
        lastX: f < 0 ? 0.99 : -0.99,
        lastY: m < 0 ? 0.99 : -0.99,
        start: Date.now(),
      }),
      !g)
    ) {
      var o = q(),
        h = d === o || d === document.body;
      null == d.$scrollBehavior &&
        (function (e) {
          var t = M(e);
          if (null == B[t]) {
            var o = getComputedStyle(e, "")["scroll-behavior"];
            B[t] = "smooth" == o;
          }
          return B[t];
        })(d) &&
        ((d.$scrollBehavior = d.style.scrollBehavior),
        (d.style.scrollBehavior = "auto"));
      var w = function (e) {
        for (var t = Date.now(), o = 0, n = 0, r = 0; r < b.length; r++) {
          var a = b[r],
            l = t - a.start,
            i = l >= p.animationTime,
            c = i ? 1 : l / p.animationTime;
          p.pulseAlgorithm && (c = F(c));
          var s = (a.x * c - a.lastX) >> 0,
            u = (a.y * c - a.lastY) >> 0;
          ((o += s),
            (n += u),
            (a.lastX += s),
            (a.lastY += u),
            i && (b.splice(r, 1), r--));
        }
        (h
          ? window.scrollBy(o, n)
          : (o && (d.scrollLeft += o), n && (d.scrollTop += n)),
          f || m || (b = []),
          b.length
            ? j(w, d, 1e3 / p.frameRate + 1)
            : ((g = !1),
              null != d.$scrollBehavior &&
                ((d.style.scrollBehavior = d.$scrollBehavior),
                (d.$scrollBehavior = null))));
      };
      (j(w, d, 0), (g = !0));
    }
  }
  function e(e) {
    f || y();
    var t = e.target;
    if (e.defaultPrevented || e.ctrlKey) return !0;
    if (
      N(s, "embed") ||
      (N(t, "embed") && /\.pdf/i.test(t.src)) ||
      N(s, "object") ||
      t.shadowRoot
    )
      return !0;
    var o = -e.wheelDeltaX || e.deltaX || 0,
      n = -e.wheelDeltaY || e.deltaY || 0;
    (h &&
      (e.wheelDeltaX &&
        K(e.wheelDeltaX, 120) &&
        (o = (e.wheelDeltaX / Math.abs(e.wheelDeltaX)) * -120),
      e.wheelDeltaY &&
        K(e.wheelDeltaY, 120) &&
        (n = (e.wheelDeltaY / Math.abs(e.wheelDeltaY)) * -120)),
      o || n || (n = -e.wheelDelta || 0),
      1 === e.deltaMode && ((o *= 40), (n *= 40)));
    var r = z(t);
    return r
      ? !!(function (e) {
          if (!e) return;
          l.length || (l = [e, e, e]);
          ((e = Math.abs(e)),
            l.push(e),
            l.shift(),
            clearTimeout(a),
            (a = setTimeout(function () {
              try {
                localStorage.SS_deltaBuffer = l.join(",");
              } catch (e) {}
            }, 1e3)));
          var t = 120 < e && P(e),
            o = !P(120) && !P(100) && !t;
          return e < 50 || o;
        })(n) ||
          (1.2 < Math.abs(o) && (o *= p.stepSize / 120),
          1.2 < Math.abs(n) && (n *= p.stepSize / 120),
          S(r, o, n),
          e.preventDefault(),
          void C())
      : !d ||
          !W ||
          (Object.defineProperty(e, "target", { value: window.frameElement }),
          parent.wheel(e));
  }
  function x(e) {
    var t = e.target,
      o =
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        (e.shiftKey && e.keyCode !== w.spacebar);
    document.body.contains(s) || (s = document.activeElement);
    var n = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      e.defaultPrevented ||
      /^(textarea|select|embed|object)$/i.test(t.nodeName) ||
      (N(t, "input") && !n.test(t.type)) ||
      N(s, "video") ||
      (function (e) {
        var t = e.target,
          o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do {
            if (
              (o = t.classList && t.classList.contains("html5-video-controls"))
            )
              break;
          } while ((t = t.parentNode));
        return o;
      })(e) ||
      t.isContentEditable ||
      o
    )
      return !0;
    if (
      (N(t, "button") || (N(t, "input") && n.test(t.type))) &&
      e.keyCode === w.spacebar
    )
      return !0;
    if (N(t, "input") && "radio" == t.type && v[e.keyCode]) return !0;
    var r = 0,
      a = 0,
      l = z(s);
    if (!l) return !d || !W || parent.keydown(e);
    var i = l.clientHeight;
    switch ((l == document.body && (i = window.innerHeight), e.keyCode)) {
      case w.up:
        a = -p.arrowScroll;
        break;
      case w.down:
        a = p.arrowScroll;
        break;
      case w.spacebar:
        a = -(e.shiftKey ? 1 : -1) * i * 0.9;
        break;
      case w.pageup:
        a = 0.9 * -i;
        break;
      case w.pagedown:
        a = 0.9 * i;
        break;
      case w.home:
        (l == document.body &&
          document.scrollingElement &&
          (l = document.scrollingElement),
          (a = -l.scrollTop));
        break;
      case w.end:
        var c = l.scrollHeight - l.scrollTop - i;
        a = 0 < c ? 10 + c : 0;
        break;
      case w.left:
        r = -p.arrowScroll;
        break;
      case w.right:
        r = p.arrowScroll;
        break;
      default:
        return !0;
    }
    (S(l, r, a), e.preventDefault(), C());
  }
  function t(e) {
    s = e.target;
  }
  var k,
    D,
    M =
      ((k = 0),
      function (e) {
        return e.uniqueID || (e.uniqueID = k++);
      }),
    E = {},
    T = {},
    B = {};
  function C() {
    (clearTimeout(D),
      (D = setInterval(function () {
        E = T = B = {};
      }, 1e3)));
  }
  function H(e, t, o) {
    for (var n = o ? E : T, r = e.length; r--; ) n[M(e[r])] = t;
    return t;
  }
  function z(e) {
    var t = [],
      o = document.body,
      n = m.scrollHeight;
    do {
      var r = (!1 ? E : T)[M(e)];
      if (r) return H(t, r);
      if ((t.push(e), n === e.scrollHeight)) {
        var a = (O(m) && O(o)) || X(m);
        if ((d && L(m)) || (!d && a)) return H(t, q());
      } else if (L(e) && X(e)) return H(t, e);
    } while ((e = e.parentElement));
  }
  function L(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function O(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }
  function X(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }
  function Y(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }
  function A(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }
  function N(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer)
    try {
      l = localStorage.SS_deltaBuffer.split(",");
    } catch (e) {}
  function K(e, t) {
    return Math.floor(e / t) == e / t;
  }
  function P(e) {
    return K(l[0], e) && K(l[1], e) && K(l[2], e);
  }
  var $,
    j =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60);
      },
    R =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
    q =
      (($ = document.scrollingElement),
      function () {
        if (!$) {
          var e = document.createElement("div");
          ((e.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(e));
          var t = document.body.scrollTop;
          (document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            ($ =
              document.body.scrollTop != t
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e));
        }
        return $;
      });
  function V(e) {
    var t;
    return (
      ((e *= p.pulseScale) < 1
        ? e - (1 - Math.exp(-e))
        : ((e -= 1), (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) *
      p.pulseNormalize
    );
  }
  function F(e) {
    return 1 <= e
      ? 1
      : e <= 0
        ? 0
        : (1 == p.pulseNormalize && (p.pulseNormalize /= V(1)), V(e));
  }
  var I = window.navigator.userAgent,
    _ = /Edge/.test(I),
    W = /chrome/i.test(I) && !_,
    U = /safari/i.test(I) && !_,
    G = /mobile/i.test(I),
    J = /Windows NT 6.1/i.test(I) && /rv:11/i.test(I),
    Q = U && (/Version\/8/i.test(I) || /Version\/9/i.test(I)),
    Z = (W || U || J) && !G,
    ee = !1;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          ee = !0;
        },
      }),
    );
  } catch (e) {}
  var te = !!ee && { passive: !1 },
    oe = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function ne(e) {
    for (var t in e) o.hasOwnProperty(t) && (p[t] = e[t]);
  }
  (oe && Z && (Y(oe, e, te), Y("mousedown", t), Y("load", y)),
    (ne.destroy = function () {
      (i && i.disconnect(),
        A(oe, e),
        A("mousedown", t),
        A("keydown", x),
        A("resize", c),
        A("load", y));
    }),
    window.SmoothScrollOptions && ne(window.SmoothScrollOptions),
    "function" == typeof define && define.amd
      ? define(function () {
          return ne;
        })
      : "object" == typeof exports
        ? (module.exports = ne)
        : (window.SmoothScroll = ne));
})();

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!(function (i) {
  if ("function" == typeof define && define.amd) define(["jquery"], i);
  else if ("object" == typeof module && module.exports) {
    var t = require("jquery");
    (i(t), (module.exports = t));
  } else i(jQuery);
})(function (i) {
  function t(i) {
    this.init(i);
  }
  ((t.prototype = {
    value: 0,
    size: 100,
    startAngle: -Math.PI,
    thickness: "auto",
    fill: { gradient: ["#3aeabb", "#fdd250"] },
    emptyFill: "rgba(0, 0, 0, .1)",
    animation: { duration: 1200, easing: "circleProgressEasing" },
    animationStartValue: 0,
    reverse: !1,
    lineCap: "butt",
    insertMode: "prepend",
    constructor: t,
    el: null,
    canvas: null,
    ctx: null,
    radius: 0,
    arcFill: null,
    lastFrameValue: 0,
    init: function (t) {
      (i.extend(this, t),
        (this.radius = this.size / 2),
        this.initWidget(),
        this.initFill(),
        this.draw(),
        this.el.trigger("circle-inited"));
    },
    initWidget: function () {
      this.canvas ||
        (this.canvas = i("<canvas>")[
          "prepend" == this.insertMode ? "prependTo" : "appendTo"
        ](this.el)[0]);
      var t = this.canvas;
      if (
        ((t.width = this.size),
        (t.height = this.size),
        (this.ctx = t.getContext("2d")),
        window.devicePixelRatio > 1)
      ) {
        var e = window.devicePixelRatio;
        ((t.style.width = t.style.height = this.size + "px"),
          (t.width = t.height = this.size * e),
          this.ctx.scale(e, e));
      }
    },
    initFill: function () {
      function t() {
        var t = i("<canvas>")[0];
        ((t.width = e.size),
          (t.height = e.size),
          t.getContext("2d").drawImage(g, 0, 0, r, r),
          (e.arcFill = e.ctx.createPattern(t, "no-repeat")),
          e.drawFrame(e.lastFrameValue));
      }
      var e = this,
        a = this.fill,
        n = this.ctx,
        r = this.size;
      if (!a) throw Error("The fill is not specified!");
      if (
        ("string" == typeof a && (a = { color: a }),
        a.color && (this.arcFill = a.color),
        a.gradient)
      ) {
        var s = a.gradient;
        if (1 == s.length) this.arcFill = s[0];
        else if (s.length > 1) {
          for (
            var l = a.gradientAngle || 0,
              o = a.gradientDirection || [
                (r / 2) * (1 - Math.cos(l)),
                (r / 2) * (1 + Math.sin(l)),
                (r / 2) * (1 + Math.cos(l)),
                (r / 2) * (1 - Math.sin(l)),
              ],
              h = n.createLinearGradient.apply(n, o),
              c = 0;
            c < s.length;
            c++
          ) {
            var d = s[c],
              u = c / (s.length - 1);
            (i.isArray(d) && ((u = d[1]), (d = d[0])), h.addColorStop(u, d));
          }
          this.arcFill = h;
        }
      }
      if (a.image) {
        var g;
        (a.image instanceof Image
          ? (g = a.image)
          : ((g = new Image()), (g.src = a.image)),
          g.complete ? t() : (g.onload = t));
      }
    },
    draw: function () {
      this.animation
        ? this.drawAnimated(this.value)
        : this.drawFrame(this.value);
    },
    drawFrame: function (i) {
      ((this.lastFrameValue = i),
        this.ctx.clearRect(0, 0, this.size, this.size),
        this.drawEmptyArc(i),
        this.drawArc(i));
    },
    drawArc: function (i) {
      if (0 !== i) {
        var t = this.ctx,
          e = this.radius,
          a = this.getThickness(),
          n = this.startAngle;
        (t.save(),
          t.beginPath(),
          this.reverse
            ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n)
            : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i),
          (t.lineWidth = a),
          (t.lineCap = this.lineCap),
          (t.strokeStyle = this.arcFill),
          t.stroke(),
          t.restore());
      }
    },
    drawEmptyArc: function (i) {
      var t = this.ctx,
        e = this.radius,
        a = this.getThickness(),
        n = this.startAngle;
      i < 1 &&
        (t.save(),
        t.beginPath(),
        i <= 0
          ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI)
          : this.reverse
            ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i)
            : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n),
        (t.lineWidth = a),
        (t.strokeStyle = this.emptyFill),
        t.stroke(),
        t.restore());
    },
    drawAnimated: function (t) {
      var e = this,
        a = this.el,
        n = i(this.canvas);
      (n.stop(!0, !1),
        a.trigger("circle-animation-start"),
        n
          .css({ animationProgress: 0 })
          .animate(
            { animationProgress: 1 },
            i.extend({}, this.animation, {
              step: function (i) {
                var n = e.animationStartValue * (1 - i) + t * i;
                (e.drawFrame(n),
                  a.trigger("circle-animation-progress", [i, n]));
              },
            }),
          )
          .promise()
          .always(function () {
            a.trigger("circle-animation-end");
          }));
    },
    getThickness: function () {
      return i.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },
    getValue: function () {
      return this.value;
    },
    setValue: function (i) {
      (this.animation && (this.animationStartValue = this.lastFrameValue),
        (this.value = i),
        this.draw());
    },
  }),
    (i.circleProgress = { defaults: t.prototype }),
    (i.easing.circleProgressEasing = function (i) {
      return i < 0.5
        ? ((i = 2 * i), 0.5 * i * i * i)
        : ((i = 2 - 2 * i), 1 - 0.5 * i * i * i);
    }),
    (i.fn.circleProgress = function (e, a) {
      var n = "circle-progress",
        r = this.data(n);
      if ("widget" == e) {
        if (!r)
          throw Error(
            'Calling "widget" method on not initialized instance is forbidden',
          );
        return r.canvas;
      }
      if ("value" == e) {
        if (!r)
          throw Error(
            'Calling "value" method on not initialized instance is forbidden',
          );
        if ("undefined" == typeof a) return r.getValue();
        var s = arguments[1];
        return this.each(function () {
          i(this).data(n).setValue(s);
        });
      }
      return this.each(function () {
        var a = i(this),
          r = a.data(n),
          s = i.isPlainObject(e) ? e : {};
        if (r) r.init(s);
        else {
          var l = i.extend({}, a.data());
          ("string" == typeof l.fill && (l.fill = JSON.parse(l.fill)),
            "string" == typeof l.animation &&
              (l.animation = JSON.parse(l.animation)),
            (s = i.extend(l, s)),
            (s.el = a),
            (r = new t(s)),
            a.data(n, r));
        }
      });
    }));
});

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).jarallax =
          t());
})(this, function () {
  "use strict";
  function e(e) {
    "complete" === document.readyState || "interactive" === document.readyState
      ? e()
      : document.addEventListener("DOMContentLoaded", e, {
          capture: !0,
          once: !0,
          passive: !0,
        });
  }
  let t;
  t =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
          ? self
          : {};
  var i = t;
  const { navigator: o } = i,
    n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      o.userAgent,
    );
  let a, s;
  function l() {
    n
      ? (!a &&
          document.body &&
          ((a = document.createElement("div")),
          (a.style.cssText =
            "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;"),
          document.body.appendChild(a)),
        (s =
          (a ? a.clientHeight : 0) ||
          i.innerHeight ||
          document.documentElement.clientHeight))
      : (s = i.innerHeight || document.documentElement.clientHeight);
  }
  (l(),
    i.addEventListener("resize", l),
    i.addEventListener("orientationchange", l),
    i.addEventListener("load", l),
    e(() => {
      l();
    }));
  const r = [];
  function m() {
    r.length &&
      (r.forEach((e, t) => {
        const { instance: o, oldData: n } = e,
          a = o.$item.getBoundingClientRect(),
          l = {
            width: a.width,
            height: a.height,
            top: a.top,
            bottom: a.bottom,
            wndW: i.innerWidth,
            wndH: s,
          },
          m =
            !n ||
            n.wndW !== l.wndW ||
            n.wndH !== l.wndH ||
            n.width !== l.width ||
            n.height !== l.height,
          c = m || !n || n.top !== l.top || n.bottom !== l.bottom;
        ((r[t].oldData = l), m && o.onResize(), c && o.onScroll());
      }),
      i.requestAnimationFrame(m));
  }
  let c = 0;
  class p {
    constructor(e, t) {
      const i = this;
      ((i.instanceID = c),
        (c += 1),
        (i.$item = e),
        (i.defaults = {
          type: "scroll",
          speed: 0.5,
          imgSrc: null,
          imgElement: ".jarallax-img",
          imgSize: "cover",
          imgPosition: "50% 50%",
          imgRepeat: "no-repeat",
          keepImg: !1,
          elementInViewport: null,
          zIndex: -100,
          disableParallax: !1,
          disableVideo: !1,
          videoSrc: null,
          videoStartTime: 0,
          videoEndTime: 0,
          videoVolume: 0,
          videoLoop: !0,
          videoPlayOnlyVisible: !0,
          videoLazyLoading: !0,
          onScroll: null,
          onInit: null,
          onDestroy: null,
          onCoverImage: null,
        }));
      const n = i.$item.dataset || {},
        a = {};
      if (
        (Object.keys(n).forEach((e) => {
          const t = e.substr(0, 1).toLowerCase() + e.substr(1);
          t && void 0 !== i.defaults[t] && (a[t] = n[e]);
        }),
        (i.options = i.extend({}, i.defaults, a, t)),
        (i.pureOptions = i.extend({}, i.options)),
        Object.keys(i.options).forEach((e) => {
          "true" === i.options[e]
            ? (i.options[e] = !0)
            : "false" === i.options[e] && (i.options[e] = !1);
        }),
        (i.options.speed = Math.min(
          2,
          Math.max(-1, parseFloat(i.options.speed)),
        )),
        "string" == typeof i.options.disableParallax &&
          (i.options.disableParallax = new RegExp(i.options.disableParallax)),
        i.options.disableParallax instanceof RegExp)
      ) {
        const e = i.options.disableParallax;
        i.options.disableParallax = () => e.test(o.userAgent);
      }
      if (
        ("function" != typeof i.options.disableParallax &&
          (i.options.disableParallax = () => !1),
        "string" == typeof i.options.disableVideo &&
          (i.options.disableVideo = new RegExp(i.options.disableVideo)),
        i.options.disableVideo instanceof RegExp)
      ) {
        const e = i.options.disableVideo;
        i.options.disableVideo = () => e.test(o.userAgent);
      }
      "function" != typeof i.options.disableVideo &&
        (i.options.disableVideo = () => !1);
      let s = i.options.elementInViewport;
      (s && "object" == typeof s && void 0 !== s.length && ([s] = s),
        s instanceof Element || (s = null),
        (i.options.elementInViewport = s),
        (i.image = {
          src: i.options.imgSrc || null,
          $container: null,
          useImgTag: !1,
          position: "fixed",
        }),
        i.initImg() && i.canInitParallax() && i.init());
    }
    css(e, t) {
      return "string" == typeof t
        ? i.getComputedStyle(e).getPropertyValue(t)
        : (Object.keys(t).forEach((i) => {
            e.style[i] = t[i];
          }),
          e);
    }
    extend(e, ...t) {
      return (
        (e = e || {}),
        Object.keys(t).forEach((i) => {
          t[i] &&
            Object.keys(t[i]).forEach((o) => {
              e[o] = t[i][o];
            });
        }),
        e
      );
    }
    getWindowData() {
      return {
        width: i.innerWidth || document.documentElement.clientWidth,
        height: s,
        y: document.documentElement.scrollTop,
      };
    }
    initImg() {
      const e = this;
      let t = e.options.imgElement;
      return (
        t && "string" == typeof t && (t = e.$item.querySelector(t)),
        t instanceof Element ||
          (e.options.imgSrc
            ? ((t = new Image()), (t.src = e.options.imgSrc))
            : (t = null)),
        t &&
          (e.options.keepImg
            ? (e.image.$item = t.cloneNode(!0))
            : ((e.image.$item = t), (e.image.$itemParent = t.parentNode)),
          (e.image.useImgTag = !0)),
        !!e.image.$item ||
          (null === e.image.src &&
            ((e.image.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
            (e.image.bgImage = e.css(e.$item, "background-image"))),
          !(!e.image.bgImage || "none" === e.image.bgImage))
      );
    }
    canInitParallax() {
      return !this.options.disableParallax();
    }
    init() {
      const e = this,
        t = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        };
      let o = {
        pointerEvents: "none",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform,opacity",
      };
      if (!e.options.keepImg) {
        const t = e.$item.getAttribute("style");
        if (
          (t && e.$item.setAttribute("data-jarallax-original-styles", t),
          e.image.useImgTag)
        ) {
          const t = e.image.$item.getAttribute("style");
          t && e.image.$item.setAttribute("data-jarallax-original-styles", t);
        }
      }
      if (
        ("static" === e.css(e.$item, "position") &&
          e.css(e.$item, { position: "relative" }),
        "auto" === e.css(e.$item, "z-index") && e.css(e.$item, { zIndex: 0 }),
        (e.image.$container = document.createElement("div")),
        e.css(e.image.$container, t),
        e.css(e.image.$container, { "z-index": e.options.zIndex }),
        "fixed" === this.image.position &&
          e.css(e.image.$container, {
            "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }),
        e.image.$container.setAttribute(
          "id",
          `jarallax-container-${e.instanceID}`,
        ),
        e.$item.appendChild(e.image.$container),
        e.image.useImgTag
          ? (o = e.extend(
              {
                "object-fit": e.options.imgSize,
                "object-position": e.options.imgPosition,
                "max-width": "none",
              },
              t,
              o,
            ))
          : ((e.image.$item = document.createElement("div")),
            e.image.src &&
              (o = e.extend(
                {
                  "background-position": e.options.imgPosition,
                  "background-size": e.options.imgSize,
                  "background-repeat": e.options.imgRepeat,
                  "background-image":
                    e.image.bgImage || `url("${e.image.src}")`,
                },
                t,
                o,
              ))),
        ("opacity" !== e.options.type &&
          "scale" !== e.options.type &&
          "scale-opacity" !== e.options.type &&
          1 !== e.options.speed) ||
          (e.image.position = "absolute"),
        "fixed" === e.image.position)
      ) {
        const t = (function (e) {
          const t = [];
          for (; null !== e.parentElement; )
            1 === (e = e.parentElement).nodeType && t.push(e);
          return t;
        })(e.$item).filter((e) => {
          const t = i.getComputedStyle(e),
            o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
          return (
            (o && "none" !== o) ||
            /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
          );
        });
        e.image.position = t.length ? "absolute" : "fixed";
      }
      ((o.position = e.image.position),
        e.css(e.image.$item, o),
        e.image.$container.appendChild(e.image.$item),
        e.onResize(),
        e.onScroll(!0),
        e.options.onInit && e.options.onInit.call(e),
        "none" !== e.css(e.$item, "background-image") &&
          e.css(e.$item, { "background-image": "none" }),
        e.addToParallaxList());
    }
    addToParallaxList() {
      (r.push({ instance: this }),
        1 === r.length && i.requestAnimationFrame(m));
    }
    removeFromParallaxList() {
      const e = this;
      r.forEach((t, i) => {
        t.instance.instanceID === e.instanceID && r.splice(i, 1);
      });
    }
    destroy() {
      const e = this;
      e.removeFromParallaxList();
      const t = e.$item.getAttribute("data-jarallax-original-styles");
      if (
        (e.$item.removeAttribute("data-jarallax-original-styles"),
        t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"),
        e.image.useImgTag)
      ) {
        const i = e.image.$item.getAttribute("data-jarallax-original-styles");
        (e.image.$item.removeAttribute("data-jarallax-original-styles"),
          i
            ? e.image.$item.setAttribute("style", t)
            : e.image.$item.removeAttribute("style"),
          e.image.$itemParent &&
            e.image.$itemParent.appendChild(e.image.$item));
      }
      (e.image.$container &&
        e.image.$container.parentNode.removeChild(e.image.$container),
        e.options.onDestroy && e.options.onDestroy.call(e),
        delete e.$item.jarallax);
    }
    clipContainer() {}
    coverImage() {
      const e = this,
        t = e.image.$container.getBoundingClientRect(),
        i = t.height,
        { speed: o } = e.options,
        n = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
      let a = 0,
        l = i,
        r = 0;
      return (
        n &&
          (0 > o
            ? ((a = o * Math.max(i, s)), s < i && (a -= o * (i - s)))
            : (a = o * (i + s)),
          1 < o
            ? (l = Math.abs(a - s))
            : 0 > o
              ? (l = a / o + Math.abs(a))
              : (l += (s - i) * (1 - o)),
          (a /= 2)),
        (e.parallaxScrollDistance = a),
        (r = n ? (s - l) / 2 : (i - l) / 2),
        e.css(e.image.$item, {
          height: `${l}px`,
          marginTop: `${r}px`,
          left: "fixed" === e.image.position ? `${t.left}px` : "0",
          width: `${t.width}px`,
        }),
        e.options.onCoverImage && e.options.onCoverImage.call(e),
        { image: { height: l, marginTop: r }, container: t }
      );
    }
    isVisible() {
      return this.isElementInViewport || !1;
    }
    onScroll(e) {
      const t = this,
        o = t.$item.getBoundingClientRect(),
        n = o.top,
        a = o.height,
        l = {};
      let r = o;
      if (
        (t.options.elementInViewport &&
          (r = t.options.elementInViewport.getBoundingClientRect()),
        (t.isElementInViewport =
          0 <= r.bottom &&
          0 <= r.right &&
          r.top <= s &&
          r.left <= i.innerWidth),
        !e && !t.isElementInViewport)
      )
        return;
      const m = Math.max(0, n),
        c = Math.max(0, a + n),
        p = Math.max(0, -n),
        d = Math.max(0, n + a - s),
        g = Math.max(0, a - (n + a - s)),
        u = Math.max(0, -n + s - a),
        f = 1 - ((s - n) / (s + a)) * 2;
      let h = 1;
      if (
        (a < s
          ? (h = 1 - (p || d) / a)
          : c <= s
            ? (h = c / s)
            : g <= s && (h = g / s),
        ("opacity" !== t.options.type &&
          "scale-opacity" !== t.options.type &&
          "scroll-opacity" !== t.options.type) ||
          ((l.transform = "translate3d(0,0,0)"), (l.opacity = h)),
        "scale" === t.options.type || "scale-opacity" === t.options.type)
      ) {
        let e = 1;
        (0 > t.options.speed
          ? (e -= t.options.speed * h)
          : (e += t.options.speed * (1 - h)),
          (l.transform = `scale(${e}) translate3d(0,0,0)`));
      }
      if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
        let e = t.parallaxScrollDistance * f;
        ("absolute" === t.image.position && (e -= n),
          (l.transform = `translate3d(0,${e}px,0)`));
      }
      (t.css(t.image.$item, l),
        t.options.onScroll &&
          t.options.onScroll.call(t, {
            section: o,
            beforeTop: m,
            beforeTopEnd: c,
            afterTop: p,
            beforeBottom: d,
            beforeBottomEnd: g,
            afterBottom: u,
            visiblePercent: h,
            fromViewportCenter: f,
          }));
    }
    onResize() {
      this.coverImage();
    }
  }
  const d = function (e, t, ...i) {
    ("object" == typeof HTMLElement
      ? e instanceof HTMLElement
      : e &&
        "object" == typeof e &&
        null !== e &&
        1 === e.nodeType &&
        "string" == typeof e.nodeName) && (e = [e]);
    const o = e.length;
    let n,
      a = 0;
    for (; a < o; a += 1)
      if (
        ("object" == typeof t || void 0 === t
          ? e[a].jarallax || (e[a].jarallax = new p(e[a], t))
          : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, i)),
        void 0 !== n)
      )
        return n;
    return e;
  };
  d.constructor = p;
  const g = i.jQuery;
  if (void 0 !== g) {
    const e = function (...e) {
      Array.prototype.unshift.call(e, this);
      const t = d.apply(i, e);
      return "object" != typeof t ? t : this;
    };
    e.constructor = d.constructor;
    const t = g.fn.jarallax;
    ((g.fn.jarallax = e),
      (g.fn.jarallax.noConflict = function () {
        return ((g.fn.jarallax = t), this);
      }));
  }
  return (
    e(() => {
      d(document.querySelectorAll("[data-jarallax]"));
    }),
    d
  );
});

/*!
 * Video Extension for Jarallax v2.0.2 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).jarallaxVideo = t());
})(this, function () {
  "use strict";
  /*!
   * Name    : Video Worker
   * Version : 2.0.0
   * Author  : nK <https://nkdev.info>
   * GitHub  : https://github.com/nk-o/video-worker
   */ let e;
  e =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
          ? self
          : {};
  var t = e;
  function o() {
    ((this.doneCallbacks = []), (this.failCallbacks = []));
  }
  o.prototype = {
    execute(e, t) {
      let o = e.length;
      for (t = Array.prototype.slice.call(t); o; )
        ((o -= 1), e[o].apply(null, t));
    },
    resolve(...e) {
      this.execute(this.doneCallbacks, e);
    },
    reject(...e) {
      this.execute(this.failCallbacks, e);
    },
    done(e) {
      this.doneCallbacks.push(e);
    },
    fail(e) {
      this.failCallbacks.push(e);
    },
  };
  let i = 0,
    a = 0,
    n = 0,
    s = 0,
    l = 0;
  const r = new o(),
    p = new o();
  class d {
    constructor(e, t) {
      const o = this;
      ((o.url = e),
        (o.options_default = {
          autoplay: !1,
          loop: !1,
          mute: !1,
          volume: 100,
          showControls: !0,
          accessibilityHidden: !1,
          startTime: 0,
          endTime: 0,
        }),
        (o.options = o.extend({}, o.options_default, t)),
        void 0 !== o.options.showContols &&
          ((o.options.showControls = o.options.showContols),
          delete o.options.showContols),
        (o.videoID = o.parseURL(e)),
        o.videoID && ((o.ID = i), (i += 1), o.loadAPI(), o.init()));
    }
    extend(...e) {
      const t = e[0] || {};
      return (
        Object.keys(e).forEach((o) => {
          e[o] &&
            Object.keys(e[o]).forEach((i) => {
              t[i] = e[o][i];
            });
        }),
        t
      );
    }
    parseURL(e) {
      const t = (function (e) {
          const t = e.match(
            /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
          );
          return !(!t || 11 !== t[1].length) && t[1];
        })(e),
        o = (function (e) {
          const t = e.match(
            /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
          );
          return !(!t || !t[3]) && t[3];
        })(e),
        i = (function (e) {
          const t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
            o = {};
          let i = 0;
          return (
            t.forEach((e) => {
              const t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
              t &&
                t[1] &&
                t[2] &&
                ((o["ogv" === t[1] ? "ogg" : t[1]] = t[2]), (i = 1));
            }),
            !!i && o
          );
        })(e);
      return t
        ? ((this.type = "youtube"), t)
        : o
          ? ((this.type = "vimeo"), o)
          : !!i && ((this.type = "local"), i);
    }
    isValid() {
      return !!this.videoID;
    }
    on(e, t) {
      ((this.userEventsList = this.userEventsList || []),
        (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t));
    }
    off(e, t) {
      this.userEventsList &&
        this.userEventsList[e] &&
        (t
          ? this.userEventsList[e].forEach((o, i) => {
              o === t && (this.userEventsList[e][i] = !1);
            })
          : delete this.userEventsList[e]);
    }
    fire(e, ...t) {
      this.userEventsList &&
        void 0 !== this.userEventsList[e] &&
        this.userEventsList[e].forEach((e) => {
          e && e.apply(this, t);
        });
    }
    play(e) {
      const o = this;
      o.player &&
        ("youtube" === o.type &&
          o.player.playVideo &&
          (void 0 !== e && o.player.seekTo(e || 0),
          t.YT.PlayerState.PLAYING !== o.player.getPlayerState() &&
            o.player.playVideo()),
        "vimeo" === o.type &&
          (void 0 !== e && o.player.setCurrentTime(e),
          o.player.getPaused().then((e) => {
            e && o.player.play();
          })),
        "local" === o.type &&
          (void 0 !== e && (o.player.currentTime = e),
          o.player.paused && o.player.play()));
    }
    pause() {
      const e = this;
      e.player &&
        ("youtube" === e.type &&
          e.player.pauseVideo &&
          t.YT.PlayerState.PLAYING === e.player.getPlayerState() &&
          e.player.pauseVideo(),
        "vimeo" === e.type &&
          e.player.getPaused().then((t) => {
            t || e.player.pause();
          }),
        "local" === e.type && (e.player.paused || e.player.pause()));
    }
    mute() {
      const e = this;
      e.player &&
        ("youtube" === e.type && e.player.mute && e.player.mute(),
        "vimeo" === e.type && e.player.setVolume && e.player.setVolume(0),
        "local" === e.type && (e.$video.muted = !0));
    }
    unmute() {
      const e = this;
      e.player &&
        ("youtube" === e.type && e.player.mute && e.player.unMute(),
        "vimeo" === e.type &&
          e.player.setVolume &&
          e.player.setVolume(e.options.volume),
        "local" === e.type && (e.$video.muted = !1));
    }
    setVolume(e = !1) {
      const t = this;
      t.player &&
        e &&
        ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e),
        "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e),
        "local" === t.type && (t.$video.volume = e / 100));
    }
    getVolume(e) {
      const t = this;
      t.player
        ? ("youtube" === t.type &&
            t.player.getVolume &&
            e(t.player.getVolume()),
          "vimeo" === t.type &&
            t.player.getVolume &&
            t.player.getVolume().then((t) => {
              e(t);
            }),
          "local" === t.type && e(100 * t.$video.volume))
        : e(!1);
    }
    getMuted(e) {
      const t = this;
      t.player
        ? ("youtube" === t.type && t.player.isMuted && e(t.player.isMuted()),
          "vimeo" === t.type &&
            t.player.getVolume &&
            t.player.getVolume().then((t) => {
              e(!!t);
            }),
          "local" === t.type && e(t.$video.muted))
        : e(null);
    }
    getImageURL(e) {
      const t = this;
      if (t.videoImage) e(t.videoImage);
      else {
        if ("youtube" === t.type) {
          const o = ["maxresdefault", "sddefault", "hqdefault", "0"];
          let i = 0;
          const a = new Image();
          ((a.onload = function () {
            120 !== (this.naturalWidth || this.width) || i === o.length - 1
              ? ((t.videoImage = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`),
                e(t.videoImage))
              : ((i += 1),
                (this.src = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`));
          }),
            (a.src = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`));
        }
        if ("vimeo" === t.type) {
          let o = new XMLHttpRequest();
          (o.open("GET", `https://vimeo.com/api/oembed.json?url=${t.url}`, !0),
            (o.onreadystatechange = function () {
              if (
                4 === this.readyState &&
                this.status >= 200 &&
                this.status < 400
              ) {
                const o = JSON.parse(this.responseText);
                o.thumbnail_url &&
                  ((t.videoImage = o.thumbnail_url), e(t.videoImage));
              }
            }),
            o.send(),
            (o = null));
        }
      }
    }
    getIframe(e) {
      this.getVideo(e);
    }
    getVideo(e) {
      const o = this;
      o.$video
        ? e(o.$video)
        : o.onAPIready(() => {
            let i;
            if (
              (o.$video ||
                ((i = document.createElement("div")),
                (i.style.display = "none")),
              "youtube" === o.type)
            ) {
              let e, a;
              ((o.playerOptions = {
                host: "https://www.youtube-nocookie.com",
                videoId: o.videoID,
                playerVars: {
                  autohide: 1,
                  rel: 0,
                  autoplay: 0,
                  playsinline: 1,
                },
              }),
                o.options.showControls ||
                  ((o.playerOptions.playerVars.iv_load_policy = 3),
                  (o.playerOptions.playerVars.modestbranding = 1),
                  (o.playerOptions.playerVars.controls = 0),
                  (o.playerOptions.playerVars.showinfo = 0),
                  (o.playerOptions.playerVars.disablekb = 1)),
                (o.playerOptions.events = {
                  onReady(e) {
                    if (
                      (o.options.mute
                        ? e.target.mute()
                        : o.options.volume &&
                          e.target.setVolume(o.options.volume),
                      o.options.autoplay && o.play(o.options.startTime),
                      o.fire("ready", e),
                      o.options.loop && !o.options.endTime)
                    ) {
                      const e = 0.1;
                      o.options.endTime = o.player.getDuration() - e;
                    }
                    setInterval(() => {
                      o.getVolume((t) => {
                        o.options.volume !== t &&
                          ((o.options.volume = t), o.fire("volumechange", e));
                      });
                    }, 150);
                  },
                  onStateChange(i) {
                    (o.options.loop &&
                      i.data === t.YT.PlayerState.ENDED &&
                      o.play(o.options.startTime),
                      e ||
                        i.data !== t.YT.PlayerState.PLAYING ||
                        ((e = 1), o.fire("started", i)),
                      i.data === t.YT.PlayerState.PLAYING && o.fire("play", i),
                      i.data === t.YT.PlayerState.PAUSED && o.fire("pause", i),
                      i.data === t.YT.PlayerState.ENDED && o.fire("ended", i),
                      i.data === t.YT.PlayerState.PLAYING
                        ? (a = setInterval(() => {
                            (o.fire("timeupdate", i),
                              o.options.endTime &&
                                o.player.getCurrentTime() >=
                                  o.options.endTime &&
                                (o.options.loop
                                  ? o.play(o.options.startTime)
                                  : o.pause()));
                          }, 150))
                        : clearInterval(a));
                  },
                  onError(e) {
                    o.fire("error", e);
                  },
                }));
              const n = !o.$video;
              if (n) {
                const e = document.createElement("div");
                (e.setAttribute("id", o.playerID),
                  i.appendChild(e),
                  document.body.appendChild(i));
              }
              ((o.player =
                o.player || new t.YT.Player(o.playerID, o.playerOptions)),
                n &&
                  ((o.$video = document.getElementById(o.playerID)),
                  o.options.accessibilityHidden &&
                    (o.$video.setAttribute("tabindex", "-1"),
                    o.$video.setAttribute("aria-hidden", "true")),
                  (o.videoWidth =
                    parseInt(o.$video.getAttribute("width"), 10) || 1280),
                  (o.videoHeight =
                    parseInt(o.$video.getAttribute("height"), 10) || 720)));
            }
            if ("vimeo" === o.type) {
              if (
                ((o.playerOptions = {
                  dnt: 1,
                  id: o.videoID,
                  autopause: 0,
                  transparent: 0,
                  autoplay: o.options.autoplay ? 1 : 0,
                  loop: o.options.loop ? 1 : 0,
                  muted: o.options.mute ? 1 : 0,
                }),
                o.options.volume && (o.playerOptions.volume = o.options.volume),
                o.options.showControls ||
                  ((o.playerOptions.badge = 0),
                  (o.playerOptions.byline = 0),
                  (o.playerOptions.portrait = 0),
                  (o.playerOptions.title = 0),
                  (o.playerOptions.background = 1)),
                !o.$video)
              ) {
                let e = "";
                (Object.keys(o.playerOptions).forEach((t) => {
                  ("" !== e && (e += "&"),
                    (e += `${t}=${encodeURIComponent(o.playerOptions[t])}`));
                }),
                  (o.$video = document.createElement("iframe")),
                  o.$video.setAttribute("id", o.playerID),
                  o.$video.setAttribute(
                    "src",
                    `https://player.vimeo.com/video/${o.videoID}?${e}`,
                  ),
                  o.$video.setAttribute("frameborder", "0"),
                  o.$video.setAttribute("mozallowfullscreen", ""),
                  o.$video.setAttribute("allowfullscreen", ""),
                  o.$video.setAttribute("title", "Vimeo video player"),
                  o.options.accessibilityHidden &&
                    (o.$video.setAttribute("tabindex", "-1"),
                    o.$video.setAttribute("aria-hidden", "true")),
                  i.appendChild(o.$video),
                  document.body.appendChild(i));
              }
              let e;
              ((o.player =
                o.player || new t.Vimeo.Player(o.$video, o.playerOptions)),
                o.options.startTime &&
                  o.options.autoplay &&
                  o.player.setCurrentTime(o.options.startTime),
                o.player.getVideoWidth().then((e) => {
                  o.videoWidth = e || 1280;
                }),
                o.player.getVideoHeight().then((e) => {
                  o.videoHeight = e || 720;
                }),
                o.player.on("timeupdate", (t) => {
                  (e || (o.fire("started", t), (e = 1)),
                    o.fire("timeupdate", t),
                    o.options.endTime &&
                      o.options.endTime &&
                      t.seconds >= o.options.endTime &&
                      (o.options.loop
                        ? o.play(o.options.startTime)
                        : o.pause()));
                }),
                o.player.on("play", (e) => {
                  (o.fire("play", e),
                    o.options.startTime &&
                      0 === e.seconds &&
                      o.play(o.options.startTime));
                }),
                o.player.on("pause", (e) => {
                  o.fire("pause", e);
                }),
                o.player.on("ended", (e) => {
                  o.fire("ended", e);
                }),
                o.player.on("loaded", (e) => {
                  o.fire("ready", e);
                }),
                o.player.on("volumechange", (e) => {
                  o.fire("volumechange", e);
                }),
                o.player.on("error", (e) => {
                  o.fire("error", e);
                }));
            }
            if ("local" === o.type) {
              let e;
              (o.$video ||
                ((o.$video = document.createElement("video")),
                o.options.showControls && (o.$video.controls = !0),
                o.options.mute
                  ? (o.$video.muted = !0)
                  : o.$video.volume &&
                    (o.$video.volume = o.options.volume / 100),
                o.options.loop && (o.$video.loop = !0),
                o.$video.setAttribute("playsinline", ""),
                o.$video.setAttribute("webkit-playsinline", ""),
                o.options.accessibilityHidden &&
                  (o.$video.setAttribute("tabindex", "-1"),
                  o.$video.setAttribute("aria-hidden", "true")),
                o.$video.setAttribute("id", o.playerID),
                i.appendChild(o.$video),
                document.body.appendChild(i),
                Object.keys(o.videoID).forEach((e) => {
                  !(function (e, t, o) {
                    const i = document.createElement("source");
                    ((i.src = t), (i.type = o), e.appendChild(i));
                  })(o.$video, o.videoID[e], `video/${e}`);
                })),
                (o.player = o.player || o.$video),
                o.player.addEventListener("playing", (t) => {
                  (e || o.fire("started", t), (e = 1));
                }),
                o.player.addEventListener("timeupdate", function (e) {
                  (o.fire("timeupdate", e),
                    o.options.endTime &&
                      o.options.endTime &&
                      this.currentTime >= o.options.endTime &&
                      (o.options.loop
                        ? o.play(o.options.startTime)
                        : o.pause()));
                }),
                o.player.addEventListener("play", (e) => {
                  o.fire("play", e);
                }),
                o.player.addEventListener("pause", (e) => {
                  o.fire("pause", e);
                }),
                o.player.addEventListener("ended", (e) => {
                  o.fire("ended", e);
                }),
                o.player.addEventListener("loadedmetadata", function () {
                  ((o.videoWidth = this.videoWidth || 1280),
                    (o.videoHeight = this.videoHeight || 720),
                    o.fire("ready"),
                    o.options.autoplay && o.play(o.options.startTime));
                }),
                o.player.addEventListener("volumechange", (e) => {
                  (o.getVolume((e) => {
                    o.options.volume = e;
                  }),
                    o.fire("volumechange", e));
                }),
                o.player.addEventListener("error", (e) => {
                  o.fire("error", e);
                }));
            }
            e(o.$video);
          });
    }
    init() {
      this.playerID = `VideoWorker-${this.ID}`;
    }
    loadAPI() {
      if (a && n) return;
      let e = "";
      if (
        ("youtube" !== this.type ||
          a ||
          ((a = 1), (e = "https://www.youtube.com/iframe_api")),
        "vimeo" === this.type && !n)
      ) {
        if (((n = 1), void 0 !== t.Vimeo)) return;
        e = "https://player.vimeo.com/api/player.js";
      }
      if (!e) return;
      let o = document.createElement("script"),
        i = document.getElementsByTagName("head")[0];
      ((o.src = e), i.appendChild(o), (i = null), (o = null));
    }
    onAPIready(e) {
      const o = this;
      if (
        ("youtube" === o.type &&
          ((void 0 !== t.YT && 0 !== t.YT.loaded) || s
            ? "object" == typeof t.YT && 1 === t.YT.loaded
              ? e()
              : r.done(() => {
                  e();
                })
            : ((s = 1),
              (t.onYouTubeIframeAPIReady = function () {
                ((t.onYouTubeIframeAPIReady = null), r.resolve("done"), e());
              }))),
        "vimeo" === o.type)
      )
        if (void 0 !== t.Vimeo || l)
          void 0 !== t.Vimeo
            ? e()
            : p.done(() => {
                e();
              });
        else {
          l = 1;
          const o = setInterval(() => {
            void 0 !== t.Vimeo && (clearInterval(o), p.resolve("done"), e());
          }, 20);
        }
      "local" === o.type && e();
    }
  }
  let u;
  u =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
          ? self
          : {};
  var y,
    m = u;
  function c(e = m.jarallax) {
    if (void 0 === e) return;
    const t = e.constructor,
      o = t.prototype.onScroll;
    t.prototype.onScroll = function () {
      const e = this;
      o.apply(e);
      !e.isVideoInserted &&
        e.video &&
        (!e.options.videoLazyLoading || e.isElementInViewport) &&
        !e.options.disableVideo() &&
        ((e.isVideoInserted = !0),
        e.video.getVideo((t) => {
          const o = t.parentNode;
          (e.css(t, {
            position: e.image.position,
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            pointerEvents: "none",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform,opacity",
            margin: 0,
            zIndex: -1,
          }),
            (e.$video = t),
            "local" === e.video.type &&
              (e.image.src
                ? e.$video.setAttribute("poster", e.image.src)
                : e.image.$item &&
                  "IMG" === e.image.$item.tagName &&
                  e.image.$item.src &&
                  e.$video.setAttribute("poster", e.image.$item.src)),
            e.image.$container.appendChild(t),
            o.parentNode.removeChild(o),
            e.options.onVideoInsert && e.options.onVideoInsert.call(e));
        }));
    };
    const i = t.prototype.coverImage;
    t.prototype.coverImage = function () {
      const e = this,
        t = i.apply(e),
        o = !!e.image.$item && e.image.$item.nodeName;
      if (t && e.video && o && ("IFRAME" === o || "VIDEO" === o)) {
        let i = t.image.height,
          a = (i * e.image.width) / e.image.height,
          n = (t.container.width - a) / 2,
          s = t.image.marginTop;
        (t.container.width > a &&
          ((a = t.container.width),
          (i = (a * e.image.height) / e.image.width),
          (n = 0),
          (s += (t.image.height - i) / 2)),
          "IFRAME" === o && ((i += 400), (s -= 200)),
          e.css(e.$video, {
            width: `${a}px`,
            marginLeft: `${n}px`,
            height: `${i}px`,
            marginTop: `${s}px`,
          }));
      }
      return t;
    };
    const a = t.prototype.initImg;
    t.prototype.initImg = function () {
      const e = this,
        t = a.apply(e);
      return (
        e.options.videoSrc ||
          (e.options.videoSrc =
            e.$item.getAttribute("data-jarallax-video") || null),
        e.options.videoSrc ? ((e.defaultInitImgResult = t), !0) : t
      );
    };
    const n = t.prototype.canInitParallax;
    t.prototype.canInitParallax = function () {
      const e = this;
      let t = n.apply(e);
      if (!e.options.videoSrc) return t;
      const o = new d(e.options.videoSrc, {
        autoplay: !0,
        loop: e.options.videoLoop,
        showControls: !1,
        accessibilityHidden: !0,
        startTime: e.options.videoStartTime || 0,
        endTime: e.options.videoEndTime || 0,
        mute: e.options.videoVolume ? 0 : 1,
        volume: e.options.videoVolume || 0,
      });
      function i() {
        e.image.$default_item &&
          ((e.image.$item = e.image.$default_item),
          (e.image.$item.style.display = "block"),
          e.coverImage(),
          e.onScroll());
      }
      if (
        (e.options.onVideoWorkerInit && e.options.onVideoWorkerInit.call(e, o),
        o.isValid())
      )
        if (
          (this.options.disableParallax() &&
            ((t = !0),
            (e.image.position = "absolute"),
            (e.options.type = "scroll"),
            (e.options.speed = 1)),
          t)
        ) {
          if (
            (o.on("ready", () => {
              if (e.options.videoPlayOnlyVisible) {
                const t = e.onScroll;
                e.onScroll = function () {
                  (t.apply(e),
                    e.videoError ||
                      (!e.options.videoLoop &&
                        (e.options.videoLoop || e.videoEnded)) ||
                      (e.isVisible() ? o.play() : o.pause()));
                };
              } else o.play();
            }),
            o.on("started", () => {
              ((e.image.$default_item = e.image.$item),
                (e.image.$item = e.$video),
                (e.image.width = e.video.videoWidth || 1280),
                (e.image.height = e.video.videoHeight || 720),
                e.coverImage(),
                e.onScroll(),
                e.image.$default_item &&
                  (e.image.$default_item.style.display = "none"));
            }),
            o.on("ended", () => {
              ((e.videoEnded = !0), e.options.videoLoop || i());
            }),
            o.on("error", () => {
              ((e.videoError = !0), i());
            }),
            (e.video = o),
            !e.defaultInitImgResult &&
              ((e.image.src =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
              "local" !== o.type))
          )
            return (
              o.getImageURL((t) => {
                ((e.image.bgImage = `url("${t}")`), e.init());
              }),
              !1
            );
        } else
          e.defaultInitImgResult ||
            o.getImageURL((t) => {
              const o = e.$item.getAttribute("style");
              (o && e.$item.setAttribute("data-jarallax-original-styles", o),
                e.css(e.$item, {
                  "background-image": `url("${t}")`,
                  "background-position": "center",
                  "background-size": "cover",
                }));
            });
      return t;
    };
    const s = t.prototype.destroy;
    t.prototype.destroy = function () {
      const e = this;
      (e.image.$default_item &&
        ((e.image.$item = e.image.$default_item), delete e.image.$default_item),
        s.apply(e));
    };
  }
  return (
    c(),
    (y = () => {
      void 0 !== m.jarallax &&
        m.jarallax(document.querySelectorAll("[data-jarallax-video]"));
    }),
    "complete" === document.readyState || "interactive" === document.readyState
      ? y()
      : document.addEventListener("DOMContentLoaded", y, {
          capture: !0,
          once: !0,
          passive: !0,
        }),
    m.VideoWorker || (m.VideoWorker = d),
    c
  );
});

/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */ !(function (n) {
  var o = {};
  function r(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return (n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports);
  }
  ((r.m = n),
    (r.c = o),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return (r.d(e, "a", e), e);
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 0)));
})([
  function (t, e, n) {
    t.exports = n(1);
  },
  function (t, e, n) {
    "use strict";
    var o = r(n(2));
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    ((0, r(n(3)).default)(),
      (0, o.default)(function () {
        "undefined" != typeof jarallax &&
          jarallax(document.querySelectorAll("[data-jarallax-element]"));
      }));
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      "complete" === document.readyState ||
      "interactive" === document.readyState
        ? t.call()
        : document.attachEvent
          ? document.attachEvent("onreadystatechange", function () {
              "interactive" === document.readyState && t.call();
            })
          : document.addEventListener &&
            document.addEventListener("DOMContentLoaded", t);
    };
  },
  function (t, e, n) {
    "use strict";
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : i.default.jarallax;
        if (void 0 === t) return;
        var e = t.constructor;
        [
          "initImg",
          "canInitParallax",
          "init",
          "destroy",
          "clipContainer",
          "coverImage",
          "isVisible",
          "onScroll",
          "onResize",
        ].forEach(function (p) {
          var f = e.prototype[p];
          e.prototype[p] = function () {
            var t = this,
              e = arguments || [];
            if (
              ("initImg" === p &&
                null !== t.$item.getAttribute("data-jarallax-element") &&
                ((t.options.type = "element"),
                (t.pureOptions.speed =
                  t.$item.getAttribute("data-jarallax-element") ||
                  t.pureOptions.speed)),
              "element" !== t.options.type)
            )
              return f.apply(t, e);
            switch (
              ((t.pureOptions.threshold =
                t.$item.getAttribute("data-threshold") || ""),
              p)
            ) {
              case "init":
                var n = t.pureOptions.speed.split(" ");
                ((t.options.speed = t.pureOptions.speed || 0),
                  (t.options.speedY = n[0] ? parseFloat(n[0]) : 0),
                  (t.options.speedX = n[1] ? parseFloat(n[1]) : 0));
                var o = t.pureOptions.threshold.split(" ");
                ((t.options.thresholdY = o[0] ? parseFloat(o[0]) : null),
                  (t.options.thresholdX = o[1] ? parseFloat(o[1]) : null));
                break;
              case "onResize":
                var r = t.css(t.$item, "transform");
                t.css(t.$item, { transform: "" });
                var i = t.$item.getBoundingClientRect();
                ((t.itemData = {
                  width: i.width,
                  height: i.height,
                  y: i.top + t.getWindowData().y,
                  x: i.left,
                }),
                  t.css(t.$item, { transform: r }));
                break;
              case "onScroll":
                var a = t.getWindowData(),
                  s =
                    (a.y +
                      a.height / 2 -
                      t.itemData.y -
                      t.itemData.height / 2) /
                    (a.height / 2),
                  l = s * t.options.speedY,
                  u = s * t.options.speedX,
                  c = l,
                  d = u;
                (null !== t.options.thresholdY &&
                  l > t.options.thresholdY &&
                  (c = 0),
                  null !== t.options.thresholdX &&
                    u > t.options.thresholdX &&
                    (d = 0),
                  t.css(t.$item, {
                    transform: "translate3d(" + d + "px," + c + "px,0)",
                  }));
                break;
              case "initImg":
              case "isVisible":
              case "clipContainer":
              case "coverImage":
                return !0;
            }
            return f.apply(t, e);
          };
        });
      }));
    var o,
      r = n(4),
      i = (o = r) && o.__esModule ? o : { default: o };
  },
  function (n, t, e) {
    "use strict";
    (function (t) {
      var e;
      ((e =
        "undefined" != typeof window
          ? window
          : void 0 !== t
            ? t
            : "undefined" != typeof self
              ? self
              : {}),
        (n.exports = e));
    }).call(this, e(5));
  },
  function (t, e, n) {
    "use strict";
    var o,
      r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
    o = (function () {
      return this;
    })();
    try {
      o = o || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" === ("undefined" == typeof window ? "undefined" : r(window)) &&
        (o = window);
    }
    t.exports = o;
  },
]);
//# sourceMappingURL=jarallax-element.min.js.map

/* typed */
!(function ($) {
  "use strict";
  var a = function (a, b) {
    ((this.el = $(a)),
      (this.options = $.extend({}, $.fn.typed.defaults, b)),
      (this.isInput = this.el.is("input")),
      (this.attr = this.options.attr),
      (this.showCursor = !this.isInput && this.options.showCursor),
      (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
      (this.contentType = this.options.contentType),
      (this.typeSpeed = this.options.typeSpeed),
      (this.startDelay = this.options.startDelay),
      (this.backSpeed = this.options.backSpeed),
      (this.backDelay = this.options.backDelay),
      (this.stringsElement = this.options.stringsElement),
      (this.strings = this.options.strings),
      (this.strPos = 0),
      (this.arrayPos = 0),
      (this.stopNum = 0),
      (this.loop = this.options.loop),
      (this.loopCount = this.options.loopCount),
      (this.curLoop = 0),
      (this.stop = !1),
      (this.cursorChar = this.options.cursorChar),
      (this.shuffle = this.options.shuffle),
      (this.sequence = []),
      this.build());
  };
  ((a.prototype = {
    constructor: a,
    init: function () {
      var a = this;
      a.timeout = setTimeout(function () {
        for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b;
        (a.shuffle && (a.sequence = a.shuffleArray(a.sequence)),
          a.typewrite(a.strings[a.sequence[a.arrayPos]], a.strPos));
      }, a.startDelay);
    },
    build: function () {
      var a = this;
      if (
        (!0 === this.showCursor &&
          ((this.cursor = $(
            '<span class="typed-cursor">' + this.cursorChar + "</span>",
          )),
          this.el.after(this.cursor)),
        this.stringsElement)
      ) {
        ((a.strings = []), this.stringsElement.hide());
        var b = this.stringsElement.find("p");
        $.each(b, function (c, b) {
          a.strings.push($(b).html());
        });
      }
      this.init();
    },
    typewrite: function (c, d) {
      if (!0 !== this.stop) {
        var a = Math.round(70 * Math.random()) + this.typeSpeed,
          b = this;
        b.timeout = setTimeout(function () {
          var g = 0,
            a = c.substr(d);
          if ("^" === a.charAt(0)) {
            var h = 1;
            (/^\^\d+/.test(a) &&
              ((h += (a = /\d+/.exec(a)[0]).length), (g = parseInt(a))),
              (c = c.substring(0, d) + c.substring(d + h)));
          }
          if ("html" === b.contentType) {
            var e = c.substr(d).charAt(0);
            if ("<" === e || "&" === e) {
              var i = "",
                f = "";
              for (f = "<" === e ? ">" : ";"; c.substr(d).charAt(0) !== f; )
                ((i += c.substr(d).charAt(0)), d++);
              (d++, (i += f));
            }
          }
          b.timeout = setTimeout(function () {
            if (d === c.length)
              (b.options.onStringTyped(b.arrayPos),
                (b.arrayPos !== b.strings.length - 1 ||
                  (b.options.callback(),
                  b.curLoop++,
                  !1 !== b.loop && b.curLoop !== b.loopCount)) &&
                  (b.timeout = setTimeout(function () {
                    b.backspace(c, d);
                  }, b.backDelay)));
            else {
              0 === d && b.options.preStringTyped(b.arrayPos);
              var a = c.substr(0, d + 1);
              (b.attr
                ? b.el.attr(b.attr, a)
                : b.isInput
                  ? b.el.val(a)
                  : "html" === b.contentType
                    ? b.el.html(a)
                    : b.el.text(a),
                d++,
                b.typewrite(c, d));
            }
          }, g);
        }, a);
      }
    },
    backspace: function (c, d) {
      if (!0 !== this.stop) {
        var a = Math.round(70 * Math.random()) + this.backSpeed,
          b = this;
        b.timeout = setTimeout(function () {
          if ("html" === b.contentType && ">" === c.substr(d).charAt(0)) {
            for (var e = ""; "<" !== c.substr(d).charAt(0); )
              ((e -= c.substr(d).charAt(0)), d--);
            (d--, (e += "<"));
          }
          var a = c.substr(0, d);
          (b.attr
            ? b.el.attr(b.attr, a)
            : b.isInput
              ? b.el.val(a)
              : "html" === b.contentType
                ? b.el.html(a)
                : b.el.text(a),
            d > b.stopNum
              ? (d--, b.backspace(c, d))
              : d <= b.stopNum &&
                (b.arrayPos++,
                b.arrayPos === b.strings.length
                  ? ((b.arrayPos = 0),
                    b.shuffle && (b.sequence = b.shuffleArray(b.sequence)),
                    b.init())
                  : b.typewrite(b.strings[b.sequence[b.arrayPos]], d)));
        }, a);
      }
    },
    shuffleArray: function (a) {
      var c,
        d,
        b = a.length;
      if (b)
        for (; --b; )
          ((c = a[(d = Math.floor(Math.random() * (b + 1)))]),
            (a[d] = a[b]),
            (a[b] = c));
      return a;
    },
    reset: function () {
      clearInterval(this.timeout);
      var a = this.el.attr("id");
      (this.el.after('<span id="' + a + '">'),
        this.el.remove(),
        void 0 !== this.cursor && this.cursor.remove(),
        this.options.resetCallback());
    },
  }),
    ($.fn.typed = function (b) {
      return this.each(function () {
        var d = $(this),
          c = d.data("typed");
        (c || d.data("typed", (c = new a(this, "object" == typeof b && b))),
          "string" == typeof b && c[b]());
      });
    }),
    ($.fn.typed.defaults = {
      strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!",
      ],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      shuffle: !1,
      backDelay: 500,
      loop: !1,
      loopCount: !1,
      showCursor: !0,
      cursorChar: "|",
      attr: null,
      contentType: "html",
      callback: function () {},
      preStringTyped: function () {},
      onStringTyped: function () {},
      resetCallback: function () {},
    }));
})(window.jQuery);

/* cookit js */
!(function (o) {
  o.cookit = function (t) {
    var n = o.extend(
      {
        backgroundColor: "#1c1c1c",
        messageColor: "#fff",
        linkColor: "#fad04c",
        buttonColor: "#fad04c",
        messageText:
          "<b>Do you hungry ?</b> 🍪 Pursuing navigation on this site, you accept the use of cookies.",
        linkText: "Learn more",
        linkUrl: "https://www.cookiesandyou.com",
        buttonText: "I accept",
      },
      t,
    );
    const e = o("<div id='cookit'></div>"),
      c = o("<div id='cookit-container'></div>");
    var i = (link = button = null);
    (function (o) {
      const t = decodeURIComponent(document.cookie).split(";");
      o += "=";
      for (let n = 0; n < t.length; n++) {
        let e = t[n];
        for (; " " === e.charAt(0); ) e = e.substring(1);
        if (0 === e.indexOf(o)) return e.substring(o.length, e.length);
      }
    })("cookies-consent") ||
      ((i = o("<p id='cookit-message'>" + n.messageText + "</p>")),
      (link = o(
        "<a id='cookit-link' href='" +
          n.linkUrl +
          "' target='_blank'>" +
          n.linkText +
          "</a>",
      )),
      (button = o("<a id='cookit-button' href='#'>" + n.buttonText + "</a>")),
      o("body").append(e),
      e.append(c),
      c.append(i),
      c.append(link),
      c.append(button),
      e.css({ "background-color": n.backgroundColor }),
      i.css({ color: n.messageColor }),
      link.css({ color: n.linkColor }),
      button.css({
        "background-color": n.buttonColor,
        color: n.backgroundColor,
      }),
      o("#cookit-button").on("click", () => {
        (o("#cookit").addClass("hidden"),
          (function (o, t, n) {
            const e = new Date();
            e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3);
            const c = "expires=" + e.toUTCString();
            document.cookie = o + "=" + t + ";" + c + ";path=/";
          })("cookies-consent", 1, 365));
      }));
  };
})(jQuery);

/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function (e, t, r) {
  "use strict";
  function n(r) {
    if (
      ((o = t.documentElement),
      (a = t.body),
      K(),
      (it = this),
      (r = r || {}),
      (ut = r.constants || {}),
      r.easing)
    )
      for (var n in r.easing) U[n] = r.easing[n];
    ((yt = r.edgeStrategy || "set"),
      (ct = {
        beforerender: r.beforerender,
        render: r.render,
        keyframe: r.keyframe,
      }),
      (ft = r.forceHeight !== !1),
      ft && (Vt = r.scale || 1),
      (mt = r.mobileDeceleration || x),
      (dt = r.smoothScrolling !== !1),
      (gt = r.smoothScrollingDuration || E),
      (vt = { targetTop: it.getScrollTop() }),
      (Gt = (
        r.mobileCheck ||
        function () {
          return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent || navigator.vendor || e.opera,
          );
        }
      )()),
      Gt
        ? ((st = t.getElementById("skrollr-body")),
          st && at(),
          X(),
          Dt(o, [y, S], [T]))
        : Dt(o, [y, b], [T]),
      it.refresh(),
      St(e, "resize orientationchange", function () {
        var e = o.clientWidth,
          t = o.clientHeight;
        (t !== $t || e !== Mt) && (($t = t), (Mt = e), (_t = !0));
      }));
    var i = Y();
    return (
      (function l() {
        (Z(), (bt = i(l)));
      })(),
      it
    );
  }
  var o,
    a,
    i = {
      get: function () {
        return it;
      },
      init: function (e) {
        return it || new n(e);
      },
      VERSION: "0.6.26",
    },
    l = Object.prototype.hasOwnProperty,
    s = e.Math,
    c = e.getComputedStyle,
    f = "touchstart",
    u = "touchmove",
    m = "touchcancel",
    p = "touchend",
    d = "skrollable",
    g = d + "-before",
    v = d + "-between",
    h = d + "-after",
    y = "skrollr",
    T = "no-" + y,
    b = y + "-desktop",
    S = y + "-mobile",
    k = "linear",
    w = 1e3,
    x = 0.004,
    E = 200,
    A = "start",
    F = "end",
    C = "center",
    D = "bottom",
    H = "___skrollable_id",
    I = /^(?:input|textarea|button|select)$/i,
    P = /^\s+|\s+$/g,
    N =
      /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    O = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    V = /^(@?[a-z\-]+)\[(\w+)\]$/,
    z = /-([a-z0-9_])/g,
    q = function (e, t) {
      return t.toUpperCase();
    },
    L = /[\-+]?[\d]*\.?[\d]+/g,
    M = /\{\?\}/g,
    $ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    _ = /[a-z\-]+-gradient/g,
    B = "",
    G = "",
    K = function () {
      var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (c) {
        var t = c(a, null);
        for (var n in t)
          if ((B = n.match(e) || (+n == n && t[n].match(e)))) break;
        if (!B) return ((B = G = ""), r);
        ((B = B[0]),
          "-" === B.slice(0, 1)
            ? ((G = B),
              (B = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O",
              }[B]))
            : (G = "-" + B.toLowerCase() + "-"));
      }
    },
    Y = function () {
      var t =
          e.requestAnimationFrame ||
          e[B.toLowerCase() + "RequestAnimationFrame"],
        r = Pt();
      return (
        (Gt || !t) &&
          (t = function (t) {
            var n = Pt() - r,
              o = s.max(0, 1e3 / 60 - n);
            return e.setTimeout(function () {
              ((r = Pt()), t());
            }, o);
          }),
        t
      );
    },
    R = function () {
      var t =
        e.cancelAnimationFrame || e[B.toLowerCase() + "CancelAnimationFrame"];
      return (
        (Gt || !t) &&
          (t = function (t) {
            return e.clearTimeout(t);
          }),
        t
      );
    },
    U = {
      begin: function () {
        return 0;
      },
      end: function () {
        return 1;
      },
      linear: function (e) {
        return e;
      },
      quadratic: function (e) {
        return e * e;
      },
      cubic: function (e) {
        return e * e * e;
      },
      swing: function (e) {
        return -s.cos(e * s.PI) / 2 + 0.5;
      },
      sqrt: function (e) {
        return s.sqrt(e);
      },
      outCubic: function (e) {
        return s.pow(e - 1, 3) + 1;
      },
      bounce: function (e) {
        var t;
        if (0.5083 >= e) t = 3;
        else if (0.8489 >= e) t = 9;
        else if (0.96208 >= e) t = 27;
        else {
          if (!(0.99981 >= e)) return 1;
          t = 91;
        }
        return 1 - s.abs((3 * s.cos(1.028 * e * t)) / t);
      },
    };
  ((n.prototype.refresh = function (e) {
    var n,
      o,
      a = !1;
    for (
      e === r
        ? ((a = !0), (lt = []), (Bt = 0), (e = t.getElementsByTagName("*")))
        : e.length === r && (e = [e]),
        n = 0,
        o = e.length;
      o > n;
      n++
    ) {
      var i = e[n],
        l = i,
        s = [],
        c = dt,
        f = yt,
        u = !1;
      if ((a && H in i && delete i[H], i.attributes)) {
        for (var m = 0, p = i.attributes.length; p > m; m++) {
          var g = i.attributes[m];
          if ("data-anchor-target" !== g.name)
            if ("data-smooth-scrolling" !== g.name)
              if ("data-edge-strategy" !== g.name)
                if ("data-emit-events" !== g.name) {
                  var v = g.name.match(N);
                  if (null !== v) {
                    var h = {
                      props: g.value,
                      element: i,
                      eventType: g.name.replace(z, q),
                    };
                    s.push(h);
                    var y = v[1];
                    y && (h.constant = y.substr(1));
                    var T = v[2];
                    /p$/.test(T)
                      ? ((h.isPercentage = !0),
                        (h.offset = (0 | T.slice(0, -1)) / 100))
                      : (h.offset = 0 | T);
                    var b = v[3],
                      S = v[4] || b;
                    b && b !== A && b !== F
                      ? ((h.mode = "relative"), (h.anchors = [b, S]))
                      : ((h.mode = "absolute"),
                        b === F
                          ? (h.isEnd = !0)
                          : h.isPercentage || (h.offset = h.offset * Vt));
                  }
                } else u = !0;
              else f = g.value;
            else c = "off" !== g.value;
          else if (((l = t.querySelector(g.value)), null === l))
            throw 'Unable to find anchor target "' + g.value + '"';
        }
        if (s.length) {
          var k, w, x;
          (!a && H in i
            ? ((x = i[H]), (k = lt[x].styleAttr), (w = lt[x].classAttr))
            : ((x = i[H] = Bt++), (k = i.style.cssText), (w = Ct(i))),
            (lt[x] = {
              element: i,
              styleAttr: k,
              classAttr: w,
              anchorTarget: l,
              keyFrames: s,
              smoothScrolling: c,
              edgeStrategy: f,
              emitEvents: u,
              lastFrameIndex: -1,
            }),
            Dt(i, [d], []));
        }
      }
    }
    for (Et(), n = 0, o = e.length; o > n; n++) {
      var E = lt[e[n][H]];
      E !== r && (J(E), et(E));
    }
    return it;
  }),
    (n.prototype.relativeToAbsolute = function (e, t, r) {
      var n = o.clientHeight,
        a = e.getBoundingClientRect(),
        i = a.top,
        l = a.bottom - a.top;
      return (
        t === D ? (i -= n) : t === C && (i -= n / 2),
        r === D ? (i += l) : r === C && (i += l / 2),
        (i += it.getScrollTop()),
        0 | (i + 0.5)
      );
    }),
    (n.prototype.animateTo = function (e, t) {
      t = t || {};
      var n = Pt(),
        o = it.getScrollTop();
      return (
        (pt = {
          startTop: o,
          topDiff: e - o,
          targetTop: e,
          duration: t.duration || w,
          startTime: n,
          endTime: n + (t.duration || w),
          easing: U[t.easing || k],
          done: t.done,
        }),
        pt.topDiff || (pt.done && pt.done.call(it, !1), (pt = r)),
        it
      );
    }),
    (n.prototype.stopAnimateTo = function () {
      (pt && pt.done && pt.done.call(it, !0), (pt = r));
    }),
    (n.prototype.isAnimatingTo = function () {
      return !!pt;
    }),
    (n.prototype.isMobile = function () {
      return Gt;
    }),
    (n.prototype.setScrollTop = function (t, r) {
      return (
        (ht = r === !0),
        Gt ? (Kt = s.min(s.max(t, 0), Ot)) : e.scrollTo(0, t),
        it
      );
    }),
    (n.prototype.getScrollTop = function () {
      return Gt ? Kt : e.pageYOffset || o.scrollTop || a.scrollTop || 0;
    }),
    (n.prototype.getMaxScrollTop = function () {
      return Ot;
    }),
    (n.prototype.on = function (e, t) {
      return ((ct[e] = t), it);
    }),
    (n.prototype.off = function (e) {
      return (delete ct[e], it);
    }),
    (n.prototype.destroy = function () {
      var e = R();
      (e(bt), wt(), Dt(o, [T], [y, b, S]));
      for (var t = 0, n = lt.length; n > t; t++) ot(lt[t].element);
      ((o.style.overflow = a.style.overflow = ""),
        (o.style.height = a.style.height = ""),
        st && i.setStyle(st, "transform", "none"),
        (it = r),
        (st = r),
        (ct = r),
        (ft = r),
        (Ot = 0),
        (Vt = 1),
        (ut = r),
        (mt = r),
        (zt = "down"),
        (qt = -1),
        (Mt = 0),
        ($t = 0),
        (_t = !1),
        (pt = r),
        (dt = r),
        (gt = r),
        (vt = r),
        (ht = r),
        (Bt = 0),
        (yt = r),
        (Gt = !1),
        (Kt = 0),
        (Tt = r));
    }));
  var X = function () {
      var n, i, l, c, d, g, v, h, y, T, b, S;
      (St(o, [f, u, m, p].join(" "), function (e) {
        var o = e.changedTouches[0];
        for (c = e.target; 3 === c.nodeType; ) c = c.parentNode;
        switch (
          ((d = o.clientY),
          (g = o.clientX),
          (T = e.timeStamp),
          I.test(c.tagName) || e.preventDefault(),
          e.type)
        ) {
          case f:
            (n && n.blur(),
              it.stopAnimateTo(),
              (n = c),
              (i = v = d),
              (l = g),
              (y = T));
            break;
          case u:
            (I.test(c.tagName) && t.activeElement !== c && e.preventDefault(),
              (h = d - v),
              (S = T - b),
              it.setScrollTop(Kt - h, !0),
              (v = d),
              (b = T));
            break;
          default:
          case m:
          case p:
            var a = i - d,
              k = l - g,
              w = k * k + a * a;
            if (49 > w) {
              if (!I.test(n.tagName)) {
                n.focus();
                var x = t.createEvent("MouseEvents");
                (x.initMouseEvent(
                  "click",
                  !0,
                  !0,
                  e.view,
                  1,
                  o.screenX,
                  o.screenY,
                  o.clientX,
                  o.clientY,
                  e.ctrlKey,
                  e.altKey,
                  e.shiftKey,
                  e.metaKey,
                  0,
                  null,
                ),
                  n.dispatchEvent(x));
              }
              return;
            }
            n = r;
            var E = h / S;
            E = s.max(s.min(E, 3), -3);
            var A = s.abs(E / mt),
              F = E * A + 0.5 * mt * A * A,
              C = it.getScrollTop() - F,
              D = 0;
            (C > Ot
              ? ((D = (Ot - C) / F), (C = Ot))
              : 0 > C && ((D = -C / F), (C = 0)),
              (A *= 1 - D),
              it.animateTo(0 | (C + 0.5), { easing: "outCubic", duration: A }));
        }
      }),
        e.scrollTo(0, 0),
        (o.style.overflow = a.style.overflow = "hidden"));
    },
    j = function () {
      var e,
        t,
        r,
        n,
        a,
        i,
        l,
        c,
        f,
        u,
        m,
        p = o.clientHeight,
        d = At();
      for (c = 0, f = lt.length; f > c; c++)
        for (
          e = lt[c],
            t = e.element,
            r = e.anchorTarget,
            n = e.keyFrames,
            a = 0,
            i = n.length;
          i > a;
          a++
        )
          ((l = n[a]),
            (u = l.offset),
            (m = d[l.constant] || 0),
            (l.frame = u),
            l.isPercentage && ((u *= p), (l.frame = u)),
            "relative" === l.mode &&
              (ot(t),
              (l.frame =
                it.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u),
              ot(t, !0)),
            (l.frame += m),
            ft && !l.isEnd && l.frame > Ot && (Ot = l.frame));
      for (Ot = s.max(Ot, Ft()), c = 0, f = lt.length; f > c; c++) {
        for (e = lt[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++)
          ((l = n[a]),
            (m = d[l.constant] || 0),
            l.isEnd && (l.frame = Ot - l.offset + m));
        e.keyFrames.sort(Nt);
      }
    },
    W = function (e, t) {
      for (var r = 0, n = lt.length; n > r; r++) {
        var o,
          a,
          s = lt[r],
          c = s.element,
          f = s.smoothScrolling ? e : t,
          u = s.keyFrames,
          m = u.length,
          p = u[0],
          y = u[u.length - 1],
          T = p.frame > f,
          b = f > y.frame,
          S = T ? p : y,
          k = s.emitEvents,
          w = s.lastFrameIndex;
        if (T || b) {
          if ((T && -1 === s.edge) || (b && 1 === s.edge)) continue;
          switch (
            (T
              ? (Dt(c, [g], [h, v]),
                k &&
                  w > -1 &&
                  (xt(c, p.eventType, zt), (s.lastFrameIndex = -1)))
              : (Dt(c, [h], [g, v]),
                k && m > w && (xt(c, y.eventType, zt), (s.lastFrameIndex = m))),
            (s.edge = T ? -1 : 1),
            s.edgeStrategy)
          ) {
            case "reset":
              ot(c);
              continue;
            case "ease":
              f = S.frame;
              break;
            default:
            case "set":
              var x = S.props;
              for (o in x)
                l.call(x, o) &&
                  ((a = nt(x[o].value)),
                  0 === o.indexOf("@")
                    ? c.setAttribute(o.substr(1), a)
                    : i.setStyle(c, o, a));
              continue;
          }
        } else 0 !== s.edge && (Dt(c, [d, v], [g, h]), (s.edge = 0));
        for (var E = 0; m - 1 > E; E++)
          if (f >= u[E].frame && u[E + 1].frame >= f) {
            var A = u[E],
              F = u[E + 1];
            for (o in A.props)
              if (l.call(A.props, o)) {
                var C = (f - A.frame) / (F.frame - A.frame);
                ((C = A.props[o].easing(C)),
                  (a = rt(A.props[o].value, F.props[o].value, C)),
                  (a = nt(a)),
                  0 === o.indexOf("@")
                    ? c.setAttribute(o.substr(1), a)
                    : i.setStyle(c, o, a));
              }
            k &&
              w !== E &&
              ("down" === zt ? xt(c, A.eventType, zt) : xt(c, F.eventType, zt),
              (s.lastFrameIndex = E));
            break;
          }
      }
    },
    Z = function () {
      _t && ((_t = !1), Et());
      var e,
        t,
        n = it.getScrollTop(),
        o = Pt();
      if (pt)
        (o >= pt.endTime
          ? ((n = pt.targetTop), (e = pt.done), (pt = r))
          : ((t = pt.easing((o - pt.startTime) / pt.duration)),
            (n = 0 | (pt.startTop + t * pt.topDiff))),
          it.setScrollTop(n, !0));
      else if (!ht) {
        var a = vt.targetTop - n;
        (a &&
          (vt = {
            startTop: qt,
            topDiff: n - qt,
            targetTop: n,
            startTime: Lt,
            endTime: Lt + gt,
          }),
          vt.endTime >= o &&
            ((t = U.sqrt((o - vt.startTime) / gt)),
            (n = 0 | (vt.startTop + t * vt.topDiff))));
      }
      if (
        (Gt &&
          st &&
          i.setStyle(st, "transform", "translate(0, " + -Kt + "px) " + Tt),
        ht || qt !== n)
      ) {
        ((zt = n > qt ? "down" : qt > n ? "up" : zt), (ht = !1));
        var l = { curTop: n, lastTop: qt, maxTop: Ot, direction: zt },
          s = ct.beforerender && ct.beforerender.call(it, l);
        (s !== !1 &&
          (W(n, it.getScrollTop()),
          (qt = n),
          ct.render && ct.render.call(it, l)),
          e && e.call(it, !1));
      }
      Lt = o;
    },
    J = function (e) {
      for (var t = 0, r = e.keyFrames.length; r > t; t++) {
        for (
          var n, o, a, i, l = e.keyFrames[t], s = {};
          null !== (i = O.exec(l.props));
        )
          ((a = i[1]),
            (o = i[2]),
            (n = a.match(V)),
            null !== n ? ((a = n[1]), (n = n[2])) : (n = k),
            (o = o.indexOf("!") ? Q(o) : [o.slice(1)]),
            (s[a] = { value: o, easing: U[n] }));
        l.props = s;
      }
    },
    Q = function (e) {
      var t = [];
      return (
        ($.lastIndex = 0),
        (e = e.replace($, function (e) {
          return e.replace(L, function (e) {
            return 100 * (e / 255) + "%";
          });
        })),
        G &&
          ((_.lastIndex = 0),
          (e = e.replace(_, function (e) {
            return G + e;
          }))),
        (e = e.replace(L, function (e) {
          return (t.push(+e), "{?}");
        })),
        t.unshift(e),
        t
      );
    },
    et = function (e) {
      var t,
        r,
        n = {};
      for (t = 0, r = e.keyFrames.length; r > t; t++) tt(e.keyFrames[t], n);
      for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--)
        tt(e.keyFrames[t], n);
    },
    tt = function (e, t) {
      var r;
      for (r in t) l.call(e.props, r) || (e.props[r] = t[r]);
      for (r in e.props) t[r] = e.props[r];
    },
    rt = function (e, t, r) {
      var n,
        o = e.length;
      if (o !== t.length)
        throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
      var a = [e[0]];
      for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r;
      return a;
    },
    nt = function (e) {
      var t = 1;
      return (
        (M.lastIndex = 0),
        e[0].replace(M, function () {
          return e[t++];
        })
      );
    },
    ot = function (e, t) {
      e = [].concat(e);
      for (var r, n, o = 0, a = e.length; a > o; o++)
        ((n = e[o]),
          (r = lt[n[H]]),
          r &&
            (t
              ? ((n.style.cssText = r.dirtyStyleAttr), Dt(n, r.dirtyClassAttr))
              : ((r.dirtyStyleAttr = n.style.cssText),
                (r.dirtyClassAttr = Ct(n)),
                (n.style.cssText = r.styleAttr),
                Dt(n, r.classAttr))));
    },
    at = function () {
      ((Tt = "translateZ(0)"), i.setStyle(st, "transform", Tt));
      var e = c(st),
        t = e.getPropertyValue("transform"),
        r = e.getPropertyValue(G + "transform"),
        n = (t && "none" !== t) || (r && "none" !== r);
      n || (Tt = "");
    };
  i.setStyle = function (e, t, r) {
    var n = e.style;
    if (((t = t.replace(z, q).replace("-", "")), "zIndex" === t))
      n[t] = isNaN(r) ? r : "" + (0 | r);
    else if ("float" === t) n.styleFloat = n.cssFloat = r;
    else
      try {
        (B && (n[B + t.slice(0, 1).toUpperCase() + t.slice(1)] = r),
          (n[t] = r));
      } catch (o) {}
  };
  var it,
    lt,
    st,
    ct,
    ft,
    ut,
    mt,
    pt,
    dt,
    gt,
    vt,
    ht,
    yt,
    Tt,
    bt,
    St = (i.addEvent = function (t, r, n) {
      var o = function (t) {
        return (
          (t = t || e.event),
          t.target || (t.target = t.srcElement),
          t.preventDefault ||
            (t.preventDefault = function () {
              ((t.returnValue = !1), (t.defaultPrevented = !0));
            }),
          n.call(this, t)
        );
      };
      r = r.split(" ");
      for (var a, i = 0, l = r.length; l > i; i++)
        ((a = r[i]),
          t.addEventListener
            ? t.addEventListener(a, n, !1)
            : t.attachEvent("on" + a, o),
          Yt.push({ element: t, name: a, listener: n }));
    }),
    kt = (i.removeEvent = function (e, t, r) {
      t = t.split(" ");
      for (var n = 0, o = t.length; o > n; n++)
        e.removeEventListener
          ? e.removeEventListener(t[n], r, !1)
          : e.detachEvent("on" + t[n], r);
    }),
    wt = function () {
      for (var e, t = 0, r = Yt.length; r > t; t++)
        ((e = Yt[t]), kt(e.element, e.name, e.listener));
      Yt = [];
    },
    xt = function (e, t, r) {
      ct.keyframe && ct.keyframe.call(it, e, t, r);
    },
    Et = function () {
      var e = it.getScrollTop();
      ((Ot = 0),
        ft && !Gt && (a.style.height = ""),
        j(),
        ft && !Gt && (a.style.height = Ot + o.clientHeight + "px"),
        Gt
          ? it.setScrollTop(s.min(it.getScrollTop(), Ot))
          : it.setScrollTop(e, !0),
        (ht = !0));
    },
    At = function () {
      var e,
        t,
        r = o.clientHeight,
        n = {};
      for (e in ut)
        ((t = ut[e]),
          "function" == typeof t
            ? (t = t.call(it))
            : /p$/.test(t) && (t = (t.slice(0, -1) / 100) * r),
          (n[e] = t));
      return n;
    },
    Ft = function () {
      var e = (st && st.offsetHeight) || 0,
        t = s.max(
          e,
          a.scrollHeight,
          a.offsetHeight,
          o.scrollHeight,
          o.offsetHeight,
          o.clientHeight,
        );
      return t - o.clientHeight;
    },
    Ct = function (t) {
      var r = "className";
      return (
        e.SVGElement &&
          t instanceof e.SVGElement &&
          ((t = t[r]), (r = "baseVal")),
        t[r]
      );
    },
    Dt = function (t, n, o) {
      var a = "className";
      if (
        (e.SVGElement &&
          t instanceof e.SVGElement &&
          ((t = t[a]), (a = "baseVal")),
        o === r)
      )
        return ((t[a] = n), r);
      for (var i = t[a], l = 0, s = o.length; s > l; l++)
        i = It(i).replace(It(o[l]), " ");
      i = Ht(i);
      for (var c = 0, f = n.length; f > c; c++)
        -1 === It(i).indexOf(It(n[c])) && (i += " " + n[c]);
      t[a] = Ht(i);
    },
    Ht = function (e) {
      return e.replace(P, "");
    },
    It = function (e) {
      return " " + e + " ";
    },
    Pt =
      Date.now ||
      function () {
        return +new Date();
      },
    Nt = function (e, t) {
      return e.frame - t.frame;
    },
    Ot = 0,
    Vt = 1,
    zt = "down",
    qt = -1,
    Lt = Pt(),
    Mt = 0,
    $t = 0,
    _t = !1,
    Bt = 0,
    Gt = !1,
    Kt = 0,
    Yt = [];
  "function" == typeof define && define.amd
    ? define("skrollr", function () {
        return i;
      })
    : "undefined" != typeof module && module.exports
      ? (module.exports = i)
      : (e.skrollr = i);
})(window, document);

/* marquee */
/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function (f) {
  f.fn.marquee = function (x) {
    return this.each(function () {
      var a = f.extend({}, f.fn.marquee.defaults, x),
        b = f(this),
        c,
        t,
        e = 3,
        y = "animation-play-state",
        p = !1,
        E = function (a, b, c) {
          for (
            var e = ["webkit", "moz", "MS", "o", ""], d = 0;
            d < e.length;
            d++
          )
            (e[d] || (b = b.toLowerCase()),
              a.addEventListener(e[d] + b, c, !1));
        },
        F = function (a) {
          var b = [],
            c;
          for (c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
          b.push();
          return "{" + b.join(",") + "}";
        },
        l = {
          pause: function () {
            p && a.allowCss3Support
              ? c.css(y, "paused")
              : f.fn.pause && c.pause();
            b.data("runningStatus", "paused");
            b.trigger("paused");
          },
          resume: function () {
            p && a.allowCss3Support
              ? c.css(y, "running")
              : f.fn.resume && c.resume();
            b.data("runningStatus", "resumed");
            b.trigger("resumed");
          },
          toggle: function () {
            l["resumed" == b.data("runningStatus") ? "pause" : "resume"]();
          },
          destroy: function () {
            clearTimeout(b.timer);
            b.find("*").addBack().unbind();
            b.html(b.find(".js-marquee:first").html());
          },
        };
      if ("string" === typeof x)
        f.isFunction(l[x]) &&
          (c || (c = b.find(".js-marquee-wrapper")),
          !0 === b.data("css3AnimationIsSupported") && (p = !0),
          l[x]());
      else {
        var u;
        f.each(a, function (c, d) {
          u = b.attr("data-" + c);
          if ("undefined" !== typeof u) {
            switch (u) {
              case "true":
                u = !0;
                break;
              case "false":
                u = !1;
            }
            a[c] = u;
          }
        });
        a.speed && (a.duration = (parseInt(b.width(), 10) / a.speed) * 1e3);
        var v = "up" == a.direction || "down" == a.direction;
        a.gap = a.duplicated ? parseInt(a.gap) : 0;
        b.wrapInner('<div class="js-marquee"></div>');
        var h = b
          .find(".js-marquee")
          .css({ "margin-right": a.gap, float: "left" });
        a.duplicated && h.clone(!0).appendTo(b);
        b.wrapInner(
          '<div style="width:100000px" class="js-marquee-wrapper"></div>',
        );
        c = b.find(".js-marquee-wrapper");
        if (v) {
          var k = b.height();
          c.removeAttr("style");
          b.height(k);
          b.find(".js-marquee").css({
            float: "none",
            "margin-bottom": a.gap,
            "margin-right": 0,
          });
          a.duplicated &&
            b.find(".js-marquee:last").css({ "margin-bottom": 0 });
          var q = b.find(".js-marquee:first").height() + a.gap;
          a.startVisible && !a.duplicated
            ? ((a._completeDuration =
                ((parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10)) *
                a.duration),
              (a.duration *= parseInt(q, 10) / parseInt(k, 10)))
            : (a.duration *=
                (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10));
        } else {
          var m = b.find(".js-marquee:first").width() + a.gap;
          var n = b.width();
          a.startVisible && !a.duplicated
            ? ((a._completeDuration =
                ((parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10)) *
                a.duration),
              (a.duration *= parseInt(m, 10) / parseInt(n, 10)))
            : (a.duration *=
                (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10));
        }
        a.duplicated && (a.duration /= 2);
        if (a.allowCss3Support) {
          h = document.body || document.createElement("div");
          var g = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
            A = ["Webkit", "Moz", "O", "ms", "Khtml"],
            B = "animation",
            d = "",
            r = "";
          h.style.animation && ((r = "@keyframes " + g + " "), (p = !0));
          if (!1 === p)
            for (var z = 0; z < A.length; z++)
              if (void 0 !== h.style[A[z] + "AnimationName"]) {
                h = "-" + A[z].toLowerCase() + "-";
                B = h + B;
                y = h + y;
                r = "@" + h + "keyframes " + g + " ";
                p = !0;
                break;
              }
          p &&
            ((d =
              g +
              " " +
              a.duration / 1e3 +
              "s " +
              a.delayBeforeStart / 1e3 +
              "s infinite " +
              a.css3easing),
            b.data("css3AnimationIsSupported", !0));
        }
        var C = function () {
            c.css(
              "transform",
              "translateY(" +
                ("up" == a.direction ? k + "px" : "-" + q + "px") +
                ")",
            );
          },
          D = function () {
            c.css(
              "transform",
              "translateX(" +
                ("left" == a.direction ? n + "px" : "-" + m + "px") +
                ")",
            );
          };
        a.duplicated
          ? (v
              ? a.startVisible
                ? c.css("transform", "translateY(0)")
                : c.css(
                    "transform",
                    "translateY(" +
                      ("up" == a.direction
                        ? k + "px"
                        : "-" + (2 * q - a.gap) + "px") +
                      ")",
                  )
              : a.startVisible
                ? c.css("transform", "translateX(0)")
                : c.css(
                    "transform",
                    "translateX(" +
                      ("left" == a.direction
                        ? n + "px"
                        : "-" + (2 * m - a.gap) + "px") +
                      ")",
                  ),
            a.startVisible || (e = 1))
          : a.startVisible
            ? (e = 2)
            : v
              ? C()
              : D();
        var w = function () {
          a.duplicated &&
            (1 === e
              ? ((a._originalDuration = a.duration),
                (a.duration = v
                  ? "up" == a.direction
                    ? a.duration + k / (q / a.duration)
                    : 2 * a.duration
                  : "left" == a.direction
                    ? a.duration + n / (m / a.duration)
                    : 2 * a.duration),
                d &&
                  (d =
                    g +
                    " " +
                    a.duration / 1e3 +
                    "s " +
                    a.delayBeforeStart / 1e3 +
                    "s " +
                    a.css3easing),
                e++)
              : 2 === e &&
                ((a.duration = a._originalDuration),
                d &&
                  ((g += "0"),
                  (r = f.trim(r) + "0 "),
                  (d =
                    g +
                    " " +
                    a.duration / 1e3 +
                    "s 0s infinite " +
                    a.css3easing)),
                e++));
          v
            ? a.duplicated
              ? (2 < e &&
                  c.css(
                    "transform",
                    "translateY(" +
                      ("up" == a.direction ? 0 : "-" + q + "px") +
                      ")",
                  ),
                (t = {
                  transform:
                    "translateY(" +
                    ("up" == a.direction ? "-" + q + "px" : 0) +
                    ")",
                }))
              : a.startVisible
                ? 2 === e
                  ? (d &&
                      (d =
                        g +
                        " " +
                        a.duration / 1e3 +
                        "s " +
                        a.delayBeforeStart / 1e3 +
                        "s " +
                        a.css3easing),
                    (t = {
                      transform:
                        "translateY(" +
                        ("up" == a.direction ? "-" + q + "px" : k + "px") +
                        ")",
                    }),
                    e++)
                  : 3 === e &&
                    ((a.duration = a._completeDuration),
                    d &&
                      ((g += "0"),
                      (r = f.trim(r) + "0 "),
                      (d =
                        g +
                        " " +
                        a.duration / 1e3 +
                        "s 0s infinite " +
                        a.css3easing)),
                    C())
                : (C(),
                  (t = {
                    transform:
                      "translateY(" +
                      ("up" == a.direction
                        ? "-" + c.height() + "px"
                        : k + "px") +
                      ")",
                  }))
            : a.duplicated
              ? (2 < e &&
                  c.css(
                    "transform",
                    "translateX(" +
                      ("left" == a.direction ? 0 : "-" + m + "px") +
                      ")",
                  ),
                (t = {
                  transform:
                    "translateX(" +
                    ("left" == a.direction ? "-" + m + "px" : 0) +
                    ")",
                }))
              : a.startVisible
                ? 2 === e
                  ? (d &&
                      (d =
                        g +
                        " " +
                        a.duration / 1e3 +
                        "s " +
                        a.delayBeforeStart / 1e3 +
                        "s " +
                        a.css3easing),
                    (t = {
                      transform:
                        "translateX(" +
                        ("left" == a.direction ? "-" + m + "px" : n + "px") +
                        ")",
                    }),
                    e++)
                  : 3 === e &&
                    ((a.duration = a._completeDuration),
                    d &&
                      ((g += "0"),
                      (r = f.trim(r) + "0 "),
                      (d =
                        g +
                        " " +
                        a.duration / 1e3 +
                        "s 0s infinite " +
                        a.css3easing)),
                    D())
                : (D(),
                  (t = {
                    transform:
                      "translateX(" +
                      ("left" == a.direction ? "-" + m + "px" : n + "px") +
                      ")",
                  }));
          b.trigger("beforeStarting");
          if (p) {
            c.css(B, d);
            var h = r + " { 100%  " + F(t) + "}",
              l = c.find("style");
            0 !== l.length
              ? l.filter(":last").html(h)
              : f("head").append("<style>" + h + "</style>");
            E(c[0], "AnimationIteration", function () {
              b.trigger("finished");
            });
            E(c[0], "AnimationEnd", function () {
              w();
              b.trigger("finished");
            });
          } else
            c.animate(t, a.duration, a.easing, function () {
              b.trigger("finished");
              a.pauseOnCycle
                ? (b.timer = setTimeout(w, a.delayBeforeStart))
                : w();
            });
          b.data("runningStatus", "resumed");
        };
        b.bind("pause", l.pause);
        b.bind("resume", l.resume);
        a.pauseOnHover &&
          (b.bind("mouseenter", l.pause), b.bind("mouseleave", l.resume));
        p && a.allowCss3Support
          ? w()
          : (b.timer = setTimeout(w, a.delayBeforeStart));
      }
    });
  };
  f.fn.marquee.defaults = {
    allowCss3Support: !0,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: !1,
    duration: 5e3,
    gap: 20,
    pauseOnCycle: !1,
    pauseOnHover: !1,
    startVisible: !1,
  };
})(jQuery);

/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], n)
    : "object" == typeof module && module.exports
      ? (module.exports = function (e, t) {
          return (
            void 0 === t &&
              (t =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(e)),
            n(t),
            t
          );
        })
      : n(jQuery);
})(function (t) {
  var e,
    n,
    s,
    p,
    r,
    o,
    h,
    f,
    g,
    m,
    y,
    v,
    i,
    a,
    _,
    s =
      (((u =
        t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : u) &&
        u.requirejs) ||
        (u ? (n = u) : (u = {}),
        (g = {}),
        (m = {}),
        (y = {}),
        (v = {}),
        (i = Object.prototype.hasOwnProperty),
        (a = [].slice),
        (_ = /\.js$/),
        (h = function (e, t) {
          var n,
            s,
            i = c(e),
            r = i[0],
            t = t[1];
          return (
            (e = i[1]),
            r && (n = x((r = l(r, t)))),
            r
              ? (e =
                  n && n.normalize
                    ? n.normalize(
                        e,
                        ((s = t),
                        function (e) {
                          return l(e, s);
                        }),
                      )
                    : l(e, t))
              : ((r = (i = c((e = l(e, t))))[0]), (e = i[1]), r && (n = x(r))),
            { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
          );
        }),
        (f = {
          require: function (e) {
            return w(e);
          },
          exports: function (e) {
            var t = g[e];
            return void 0 !== t ? t : (g[e] = {});
          },
          module: function (e) {
            return {
              id: e,
              uri: "",
              exports: g[e],
              config:
                ((t = e),
                function () {
                  return (y && y.config && y.config[t]) || {};
                }),
            };
            var t;
          },
        }),
        (r = function (e, t, n, s) {
          var i,
            r,
            o,
            a,
            l,
            c = [],
            u = typeof n,
            d = A((s = s || e));
          if ("undefined" == u || "function" == u) {
            for (
              t = !t.length && n.length ? ["require", "exports", "module"] : t,
                a = 0;
              a < t.length;
              a += 1
            )
              if ("require" === (r = (o = h(t[a], d)).f)) c[a] = f.require(e);
              else if ("exports" === r) ((c[a] = f.exports(e)), (l = !0));
              else if ("module" === r) i = c[a] = f.module(e);
              else if (b(g, r) || b(m, r) || b(v, r)) c[a] = x(r);
              else {
                if (!o.p) throw new Error(e + " missing " + r);
                (o.p.load(
                  o.n,
                  w(s, !0),
                  (function (t) {
                    return function (e) {
                      g[t] = e;
                    };
                  })(r),
                  {},
                ),
                  (c[a] = g[r]));
              }
            ((u = n ? n.apply(g[e], c) : void 0),
              e &&
                (i && i.exports !== p && i.exports !== g[e]
                  ? (g[e] = i.exports)
                  : (u === p && l) || (g[e] = u)));
          } else e && (g[e] = n);
        }),
        (e =
          n =
          o =
            function (e, t, n, s, i) {
              if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
              if (!e.splice) {
                if (((y = e).deps && o(y.deps, y.callback), !t)) return;
                t.splice ? ((e = t), (t = n), (n = null)) : (e = p);
              }
              return (
                (t = t || function () {}),
                "function" == typeof n && ((n = s), (s = i)),
                s
                  ? r(p, e, t, n)
                  : setTimeout(function () {
                      r(p, e, t, n);
                    }, 4),
                o
              );
            }),
        (o.config = function (e) {
          return o(e);
        }),
        (e._defined = g),
        ((s = function (e, t, n) {
          if ("string" != typeof e)
            throw new Error(
              "See almond README: incorrect module build, no module name",
            );
          (t.splice || ((n = t), (t = [])),
            b(g, e) || b(m, e) || (m[e] = [e, t, n]));
        }).amd = { jQuery: !0 }),
        (u.requirejs = e),
        (u.require = n),
        (u.define = s)),
      u.define("almond", function () {}),
      u.define("jquery", [], function () {
        var e = t || $;
        return (
          null == e &&
            console &&
            console.error &&
            console.error(
              "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.",
            ),
          e
        );
      }),
      u.define("select2/utils", ["jquery"], function (r) {
        var s = {};
        function c(e) {
          var t,
            n = e.prototype,
            s = [];
          for (t in n)
            "function" == typeof n[t] && "constructor" !== t && s.push(t);
          return s;
        }
        ((s.Extend = function (e, t) {
          var n,
            s = {}.hasOwnProperty;
          function i() {
            this.constructor = e;
          }
          for (n in t) s.call(t, n) && (e[n] = t[n]);
          return (
            (i.prototype = t.prototype),
            (e.prototype = new i()),
            (e.__super__ = t.prototype),
            e
          );
        }),
          (s.Decorate = function (s, i) {
            var e = c(i),
              t = c(s);
            function r() {
              var e = Array.prototype.unshift,
                t = i.prototype.constructor.length,
                n = s.prototype.constructor;
              (0 < t &&
                (e.call(arguments, s.prototype.constructor),
                (n = i.prototype.constructor)),
                n.apply(this, arguments));
            }
            ((i.displayName = s.displayName),
              (r.prototype = new (function () {
                this.constructor = r;
              })()));
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              r.prototype[o] = s.prototype[o];
            }
            for (var a = 0; a < e.length; a++) {
              var l = e[a];
              r.prototype[l] = (function (e) {
                var t = function () {};
                e in r.prototype && (t = r.prototype[e]);
                var n = i.prototype[e];
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, t),
                    n.apply(this, arguments)
                  );
                };
              })(l);
            }
            return r;
          }));
        function e() {
          this.listeners = {};
        }
        ((e.prototype.on = function (e, t) {
          ((this.listeners = this.listeners || {}),
            e in this.listeners
              ? this.listeners[e].push(t)
              : (this.listeners[e] = [t]));
        }),
          (e.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              n = t.call(arguments, 1);
            ((this.listeners = this.listeners || {}),
              0 === (n = null == n ? [] : n).length && n.push({}),
              (n[0]._type = e) in this.listeners &&
                this.invoke(this.listeners[e], t.call(arguments, 1)),
              "*" in this.listeners &&
                this.invoke(this.listeners["*"], arguments));
          }),
          (e.prototype.invoke = function (e, t) {
            for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
          }),
          (s.Observable = e),
          (s.generateChars = function (e) {
            for (var t = "", n = 0; n < e; n++)
              t += Math.floor(36 * Math.random()).toString(36);
            return t;
          }),
          (s.bind = function (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }),
          (s._convertData = function (e) {
            for (var t in e) {
              var n = t.split("-"),
                s = e;
              if (1 !== n.length) {
                for (var i = 0; i < n.length; i++) {
                  var r = n[i];
                  ((r = r.substring(0, 1).toLowerCase() + r.substring(1)) in
                    s || (s[r] = {}),
                    i == n.length - 1 && (s[r] = e[t]),
                    (s = s[r]));
                }
                delete e[t];
              }
            }
            return e;
          }),
          (s.hasScroll = function (e, t) {
            var n = r(t),
              s = t.style.overflowX,
              i = t.style.overflowY;
            return (
              (s !== i || ("hidden" !== i && "visible" !== i)) &&
              ("scroll" === s ||
                "scroll" === i ||
                n.innerHeight() < t.scrollHeight ||
                n.innerWidth() < t.scrollWidth)
            );
          }),
          (s.escapeMarkup = function (e) {
            var t = {
              "\\": "&#92;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#47;",
            };
            return "string" != typeof e
              ? e
              : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                  return t[e];
                });
          }),
          (s.__cache = {}));
        var n = 0;
        return (
          (s.GetUniqueElementId = function (e) {
            var t = e.getAttribute("data-select2-id");
            return (
              null != t ||
                ((t = e.id
                  ? "select2-data-" + e.id
                  : "select2-data-" +
                    (++n).toString() +
                    "-" +
                    s.generateChars(4)),
                e.setAttribute("data-select2-id", t)),
              t
            );
          }),
          (s.StoreData = function (e, t, n) {
            e = s.GetUniqueElementId(e);
            (s.__cache[e] || (s.__cache[e] = {}), (s.__cache[e][t] = n));
          }),
          (s.GetData = function (e, t) {
            var n = s.GetUniqueElementId(e);
            return t
              ? s.__cache[n] && null != s.__cache[n][t]
                ? s.__cache[n][t]
                : r(e).data(t)
              : s.__cache[n];
          }),
          (s.RemoveData = function (e) {
            var t = s.GetUniqueElementId(e);
            (null != s.__cache[t] && delete s.__cache[t],
              e.removeAttribute("data-select2-id"));
          }),
          (s.copyNonInternalCssClasses = function (e, t) {
            var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter(
                function (e) {
                  return 0 === e.indexOf("select2-");
                },
              ),
              t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(
                function (e) {
                  return 0 !== e.indexOf("select2-");
                },
              ),
              t = n.concat(t);
            e.setAttribute("class", t.join(" "));
          }),
          s
        );
      }),
      u.define("select2/results", ["jquery", "./utils"], function (d, p) {
        function s(e, t, n) {
          ((this.$element = e),
            (this.data = n),
            (this.options = t),
            s.__super__.constructor.call(this));
        }
        return (
          p.Extend(s, p.Observable),
          (s.prototype.render = function () {
            var e = d(
              '<ul class="select2-results__options" role="listbox"></ul>',
            );
            return (
              this.options.get("multiple") &&
                e.attr("aria-multiselectable", "true"),
              (this.$results = e)
            );
          }),
          (s.prototype.clear = function () {
            this.$results.empty();
          }),
          (s.prototype.displayMessage = function (e) {
            var t = this.options.get("escapeMarkup");
            (this.clear(), this.hideLoading());
            var n = d(
                '<li role="alert" aria-live="assertive" class="select2-results__option"></li>',
              ),
              s = this.options.get("translations").get(e.message);
            (n.append(t(s(e.args))),
              (n[0].className += " select2-results__message"),
              this.$results.append(n));
          }),
          (s.prototype.hideMessages = function () {
            this.$results.find(".select2-results__message").remove();
          }),
          (s.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
              e.results = this.sort(e.results);
              for (var n = 0; n < e.results.length; n++) {
                var s = e.results[n],
                  s = this.option(s);
                t.push(s);
              }
              this.$results.append(t);
            } else
              0 === this.$results.children().length &&
                this.trigger("results:message", { message: "noResults" });
          }),
          (s.prototype.position = function (e, t) {
            t.find(".select2-results").append(e);
          }),
          (s.prototype.sort = function (e) {
            return this.options.get("sorter")(e);
          }),
          (s.prototype.highlightFirstItem = function () {
            var e = this.$results.find(".select2-results__option--selectable"),
              t = e.filter(".select2-results__option--selected");
            ((0 < t.length ? t : e).first().trigger("mouseenter"),
              this.ensureHighlightVisible());
          }),
          (s.prototype.setClasses = function () {
            var t = this;
            this.data.current(function (e) {
              var s = e.map(function (e) {
                return e.id.toString();
              });
              t.$results
                .find(".select2-results__option--selectable")
                .each(function () {
                  var e = d(this),
                    t = p.GetData(this, "data"),
                    n = "" + t.id;
                  (null != t.element && t.element.selected) ||
                  (null == t.element && -1 < s.indexOf(n))
                    ? (this.classList.add("select2-results__option--selected"),
                      e.attr("aria-selected", "true"))
                    : (this.classList.remove(
                        "select2-results__option--selected",
                      ),
                      e.attr("aria-selected", "false"));
                });
            });
          }),
          (s.prototype.showLoading = function (e) {
            this.hideLoading();
            ((e = {
              disabled: !0,
              loading: !0,
              text: this.options.get("translations").get("searching")(e),
            }),
              (e = this.option(e)));
            ((e.className += " loading-results"), this.$results.prepend(e));
          }),
          (s.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove();
          }),
          (s.prototype.option = function (e) {
            var t = document.createElement("li");
            (t.classList.add("select2-results__option"),
              t.classList.add("select2-results__option--selectable"));
            var n,
              s = { role: "option" },
              i =
                window.Element.prototype.matches ||
                window.Element.prototype.msMatchesSelector ||
                window.Element.prototype.webkitMatchesSelector;
            for (n in (((null != e.element && i.call(e.element, ":disabled")) ||
              (null == e.element && e.disabled)) &&
              ((s["aria-disabled"] = "true"),
              t.classList.remove("select2-results__option--selectable"),
              t.classList.add("select2-results__option--disabled")),
            null == e.id &&
              t.classList.remove("select2-results__option--selectable"),
            null != e._resultId && (t.id = e._resultId),
            e.title && (t.title = e.title),
            e.children &&
              ((s.role = "group"),
              (s["aria-label"] = e.text),
              t.classList.remove("select2-results__option--selectable"),
              t.classList.add("select2-results__option--group")),
            s)) {
              var r = s[n];
              t.setAttribute(n, r);
            }
            if (e.children) {
              var o = d(t),
                a = document.createElement("strong");
              ((a.className = "select2-results__group"), this.template(e, a));
              for (var l = [], c = 0; c < e.children.length; c++) {
                var u = e.children[c],
                  u = this.option(u);
                l.push(u);
              }
              i = d("<ul></ul>", {
                class:
                  "select2-results__options select2-results__options--nested",
                role: "none",
              });
              (i.append(l), o.append(a), o.append(i));
            } else this.template(e, t);
            return (p.StoreData(t, "data", e), t);
          }),
          (s.prototype.bind = function (t, e) {
            var i = this,
              n = t.id + "-results";
            (this.$results.attr("id", n),
              t.on("results:all", function (e) {
                (i.clear(),
                  i.append(e.data),
                  t.isOpen() && (i.setClasses(), i.highlightFirstItem()));
              }),
              t.on("results:append", function (e) {
                (i.append(e.data), t.isOpen() && i.setClasses());
              }),
              t.on("query", function (e) {
                (i.hideMessages(), i.showLoading(e));
              }),
              t.on("select", function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get("scrollAfterSelect") && i.highlightFirstItem());
              }),
              t.on("unselect", function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get("scrollAfterSelect") && i.highlightFirstItem());
              }),
              t.on("open", function () {
                (i.$results.attr("aria-expanded", "true"),
                  i.$results.attr("aria-hidden", "false"),
                  i.setClasses(),
                  i.ensureHighlightVisible());
              }),
              t.on("close", function () {
                (i.$results.attr("aria-expanded", "false"),
                  i.$results.attr("aria-hidden", "true"),
                  i.$results.removeAttr("aria-activedescendant"));
              }),
              t.on("results:toggle", function () {
                var e = i.getHighlightedResults();
                0 !== e.length && e.trigger("mouseup");
              }),
              t.on("results:select", function () {
                var e,
                  t = i.getHighlightedResults();
                0 !== t.length &&
                  ((e = p.GetData(t[0], "data")),
                  t.hasClass("select2-results__option--selected")
                    ? i.trigger("close", {})
                    : i.trigger("select", { data: e }));
              }),
              t.on("results:previous", function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find(".select2-results__option--selectable"),
                  s = n.index(t);
                s <= 0 ||
                  ((e = s - 1),
                  0 === t.length && (e = 0),
                  (s = n.eq(e)).trigger("mouseenter"),
                  (t = i.$results.offset().top),
                  (n = s.offset().top),
                  (s = i.$results.scrollTop() + (n - t)),
                  0 === e
                    ? i.$results.scrollTop(0)
                    : n - t < 0 && i.$results.scrollTop(s));
              }),
              t.on("results:next", function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find(".select2-results__option--selectable"),
                  s = n.index(t) + 1;
                s >= n.length ||
                  ((e = n.eq(s)).trigger("mouseenter"),
                  (t = i.$results.offset().top + i.$results.outerHeight(!1)),
                  (n = e.offset().top + e.outerHeight(!1)),
                  (e = i.$results.scrollTop() + n - t),
                  0 === s
                    ? i.$results.scrollTop(0)
                    : t < n && i.$results.scrollTop(e));
              }),
              t.on("results:focus", function (e) {
                (e.element[0].classList.add(
                  "select2-results__option--highlighted",
                ),
                  e.element[0].setAttribute("aria-selected", "true"));
              }),
              t.on("results:message", function (e) {
                i.displayMessage(e);
              }),
              d.fn.mousewheel &&
                this.$results.on("mousewheel", function (e) {
                  var t = i.$results.scrollTop(),
                    n = i.$results.get(0).scrollHeight - t + e.deltaY,
                    t = 0 < e.deltaY && t - e.deltaY <= 0,
                    n = e.deltaY < 0 && n <= i.$results.height();
                  t
                    ? (i.$results.scrollTop(0),
                      e.preventDefault(),
                      e.stopPropagation())
                    : n &&
                      (i.$results.scrollTop(
                        i.$results.get(0).scrollHeight - i.$results.height(),
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                }),
              this.$results.on(
                "mouseup",
                ".select2-results__option--selectable",
                function (e) {
                  var t = d(this),
                    n = p.GetData(this, "data");
                  t.hasClass("select2-results__option--selected")
                    ? i.options.get("multiple")
                      ? i.trigger("unselect", { originalEvent: e, data: n })
                      : i.trigger("close", {})
                    : i.trigger("select", { originalEvent: e, data: n });
                },
              ),
              this.$results.on(
                "mouseenter",
                ".select2-results__option--selectable",
                function (e) {
                  var t = p.GetData(this, "data");
                  (i
                    .getHighlightedResults()
                    .removeClass("select2-results__option--highlighted")
                    .attr("aria-selected", "false"),
                    i.trigger("results:focus", { data: t, element: d(this) }));
                },
              ));
          }),
          (s.prototype.getHighlightedResults = function () {
            return this.$results.find(".select2-results__option--highlighted");
          }),
          (s.prototype.destroy = function () {
            this.$results.remove();
          }),
          (s.prototype.ensureHighlightVisible = function () {
            var e,
              t,
              n,
              s,
              i = this.getHighlightedResults();
            0 !== i.length &&
              ((e = this.$results
                .find(".select2-results__option--selectable")
                .index(i)),
              (s = this.$results.offset().top),
              (t = i.offset().top),
              (n = this.$results.scrollTop() + (t - s)),
              (s = t - s),
              (n -= 2 * i.outerHeight(!1)),
              e <= 2
                ? this.$results.scrollTop(0)
                : (s > this.$results.outerHeight() || s < 0) &&
                  this.$results.scrollTop(n));
          }),
          (s.prototype.template = function (e, t) {
            var n = this.options.get("templateResult"),
              s = this.options.get("escapeMarkup"),
              e = n(e, t);
            null == e
              ? (t.style.display = "none")
              : "string" == typeof e
                ? (t.innerHTML = s(e))
                : d(t).append(e);
          }),
          s
        );
      }),
      u.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        };
      }),
      u.define(
        "select2/selection/base",
        ["jquery", "../utils", "../keys"],
        function (n, s, i) {
          function r(e, t) {
            ((this.$element = e),
              (this.options = t),
              r.__super__.constructor.call(this));
          }
          return (
            s.Extend(r, s.Observable),
            (r.prototype.render = function () {
              var e = n(
                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>',
              );
              return (
                (this._tabindex = 0),
                null != s.GetData(this.$element[0], "old-tabindex")
                  ? (this._tabindex = s.GetData(
                      this.$element[0],
                      "old-tabindex",
                    ))
                  : null != this.$element.attr("tabindex") &&
                    (this._tabindex = this.$element.attr("tabindex")),
                e.attr("title", this.$element.attr("title")),
                e.attr("tabindex", this._tabindex),
                e.attr("aria-disabled", "false"),
                (this.$selection = e)
              );
            }),
            (r.prototype.bind = function (e, t) {
              var n = this,
                s = e.id + "-results";
              ((this.container = e),
                this.$selection.on("focus", function (e) {
                  n.trigger("focus", e);
                }),
                this.$selection.on("blur", function (e) {
                  n._handleBlur(e);
                }),
                this.$selection.on("keydown", function (e) {
                  (n.trigger("keypress", e),
                    e.which === i.SPACE && e.preventDefault());
                }),
                e.on("results:focus", function (e) {
                  n.$selection.attr("aria-activedescendant", e.data._resultId);
                }),
                e.on("selection:update", function (e) {
                  n.update(e.data);
                }),
                e.on("open", function () {
                  (n.$selection.attr("aria-expanded", "true"),
                    n.$selection.attr("aria-owns", s),
                    n._attachCloseHandler(e));
                }),
                e.on("close", function () {
                  (n.$selection.attr("aria-expanded", "false"),
                    n.$selection.removeAttr("aria-activedescendant"),
                    n.$selection.removeAttr("aria-owns"),
                    n.$selection.trigger("focus"),
                    n._detachCloseHandler(e));
                }),
                e.on("enable", function () {
                  (n.$selection.attr("tabindex", n._tabindex),
                    n.$selection.attr("aria-disabled", "false"));
                }),
                e.on("disable", function () {
                  (n.$selection.attr("tabindex", "-1"),
                    n.$selection.attr("aria-disabled", "true"));
                }));
            }),
            (r.prototype._handleBlur = function (e) {
              var t = this;
              window.setTimeout(function () {
                document.activeElement == t.$selection[0] ||
                  n.contains(t.$selection[0], document.activeElement) ||
                  t.trigger("blur", e);
              }, 1);
            }),
            (r.prototype._attachCloseHandler = function (e) {
              n(document.body).on("mousedown.select2." + e.id, function (e) {
                var t = n(e.target).closest(".select2");
                n(".select2.select2-container--open").each(function () {
                  this != t[0] && s.GetData(this, "element").select2("close");
                });
              });
            }),
            (r.prototype._detachCloseHandler = function (e) {
              n(document.body).off("mousedown.select2." + e.id);
            }),
            (r.prototype.position = function (e, t) {
              t.find(".selection").append(e);
            }),
            (r.prototype.destroy = function () {
              this._detachCloseHandler(this.container);
            }),
            (r.prototype.update = function (e) {
              throw new Error(
                "The `update` method must be defined in child classes.",
              );
            }),
            (r.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (r.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            r
          );
        },
      ),
      u.define(
        "select2/selection/single",
        ["jquery", "./base", "../utils", "../keys"],
        function (e, t, n, s) {
          function i() {
            i.__super__.constructor.apply(this, arguments);
          }
          return (
            n.Extend(i, t),
            (i.prototype.render = function () {
              var e = i.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--single"),
                e.html(
                  '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>',
                ),
                e
              );
            }),
            (i.prototype.bind = function (t, e) {
              var n = this;
              i.__super__.bind.apply(this, arguments);
              var s = t.id + "-container";
              (this.$selection
                .find(".select2-selection__rendered")
                .attr("id", s)
                .attr("role", "textbox")
                .attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", s),
                this.$selection.attr("aria-controls", s),
                this.$selection.on("mousedown", function (e) {
                  1 === e.which && n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on("focus", function (e) {}),
                this.$selection.on("blur", function (e) {}),
                t.on("focus", function (e) {
                  t.isOpen() || n.$selection.trigger("focus");
                }));
            }),
            (i.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              (e.empty(), e.removeAttr("title"));
            }),
            (i.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (i.prototype.selectionContainer = function () {
              return e("<span></span>");
            }),
            (i.prototype.update = function (e) {
              var t, n;
              0 !== e.length
                ? ((n = e[0]),
                  (t = this.$selection.find(".select2-selection__rendered")),
                  (e = this.display(n, t)),
                  t.empty().append(e),
                  (n = n.title || n.text)
                    ? t.attr("title", n)
                    : t.removeAttr("title"))
                : this.clear();
            }),
            i
          );
        },
      ),
      u.define(
        "select2/selection/multiple",
        ["jquery", "./base", "../utils"],
        function (i, e, c) {
          function r(e, t) {
            r.__super__.constructor.apply(this, arguments);
          }
          return (
            c.Extend(r, e),
            (r.prototype.render = function () {
              var e = r.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
              );
            }),
            (r.prototype.bind = function (e, t) {
              var n = this;
              r.__super__.bind.apply(this, arguments);
              var s = e.id + "-container";
              (this.$selection
                .find(".select2-selection__rendered")
                .attr("id", s),
                this.$selection.on("click", function (e) {
                  n.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on(
                  "click",
                  ".select2-selection__choice__remove",
                  function (e) {
                    var t;
                    n.isDisabled() ||
                      ((t = i(this).parent()),
                      (t = c.GetData(t[0], "data")),
                      n.trigger("unselect", { originalEvent: e, data: t }));
                  },
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-selection__choice__remove",
                  function (e) {
                    n.isDisabled() || e.stopPropagation();
                  },
                ));
            }),
            (r.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              (e.empty(), e.removeAttr("title"));
            }),
            (r.prototype.display = function (e, t) {
              var n = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(n(e, t));
            }),
            (r.prototype.selectionContainer = function () {
              return i(
                '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>',
              );
            }),
            (r.prototype.update = function (e) {
              if ((this.clear(), 0 !== e.length)) {
                for (
                  var t = [],
                    n =
                      this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id") + "-choice-",
                    s = 0;
                  s < e.length;
                  s++
                ) {
                  var i = e[s],
                    r = this.selectionContainer(),
                    o = this.display(i, r),
                    a = n + c.generateChars(4) + "-";
                  (i.id ? (a += i.id) : (a += c.generateChars(4)),
                    r
                      .find(".select2-selection__choice__display")
                      .append(o)
                      .attr("id", a));
                  var l = i.title || i.text;
                  l && r.attr("title", l);
                  ((o = this.options.get("translations").get("removeItem")),
                    (l = r.find(".select2-selection__choice__remove")));
                  (l.attr("title", o()),
                    l.attr("aria-label", o()),
                    l.attr("aria-describedby", a),
                    c.StoreData(r[0], "data", i),
                    t.push(r));
                }
                this.$selection.find(".select2-selection__rendered").append(t);
              }
            }),
            r
          );
        },
      ),
      u.define("select2/selection/placeholder", [], function () {
        function e(e, t, n) {
          ((this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n));
        }
        return (
          (e.prototype.normalizePlaceholder = function (e, t) {
            return (t = "string" == typeof t ? { id: "", text: t } : t);
          }),
          (e.prototype.createPlaceholder = function (e, t) {
            var n = this.selectionContainer();
            (n.html(this.display(t)),
              n[0].classList.add("select2-selection__placeholder"),
              n[0].classList.remove("select2-selection__choice"));
            t = t.title || t.text || n.text();
            return (
              this.$selection
                .find(".select2-selection__rendered")
                .attr("title", t),
              n
            );
          }),
          (e.prototype.update = function (e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n) return e.call(this, t);
            this.clear();
            t = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(t);
          }),
          e
        );
      }),
      u.define(
        "select2/selection/allowClear",
        ["jquery", "../keys", "../utils"],
        function (i, s, a) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              (e.call(this, t, n),
                null == this.placeholder &&
                  this.options.get("debug") &&
                  window.console &&
                  console.error &&
                  console.error(
                    "Select2: The `allowClear` option should be used in combination with the `placeholder` option.",
                  ),
                this.$selection.on(
                  "mousedown",
                  ".select2-selection__clear",
                  function (e) {
                    s._handleClear(e);
                  },
                ),
                t.on("keypress", function (e) {
                  s._handleKeyboardClear(e, t);
                }));
            }),
            (e.prototype._handleClear = function (e, t) {
              if (!this.isDisabled()) {
                var n = this.$selection.find(".select2-selection__clear");
                if (0 !== n.length) {
                  t.stopPropagation();
                  var s = a.GetData(n[0], "data"),
                    i = this.$element.val();
                  this.$element.val(this.placeholder.id);
                  var r = { data: s };
                  if ((this.trigger("clear", r), r.prevented))
                    this.$element.val(i);
                  else {
                    for (var o = 0; o < s.length; o++)
                      if (
                        ((r = { data: s[o] }),
                        this.trigger("unselect", r),
                        r.prevented)
                      )
                        return void this.$element.val(i);
                    (this.$element.trigger("input").trigger("change"),
                      this.trigger("toggle", {}));
                  }
                }
              }
            }),
            (e.prototype._handleKeyboardClear = function (e, t, n) {
              n.isOpen() ||
                (t.which != s.DELETE && t.which != s.BACKSPACE) ||
                this._handleClear(t);
            }),
            (e.prototype.update = function (e, t) {
              var n, s;
              (e.call(this, t),
                this.$selection.find(".select2-selection__clear").remove(),
                this.$selection[0].classList.remove(
                  "select2-selection--clearable",
                ),
                0 <
                  this.$selection.find(".select2-selection__placeholder")
                    .length ||
                  0 === t.length ||
                  ((n = this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id")),
                  (s = this.options.get("translations").get("removeAllItems")),
                  (e = i(
                    '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>',
                  )).attr("title", s()),
                  e.attr("aria-label", s()),
                  e.attr("aria-describedby", n),
                  a.StoreData(e[0], "data", t),
                  this.$selection.prepend(e),
                  this.$selection[0].classList.add(
                    "select2-selection--clearable",
                  )));
            }),
            e
          );
        },
      ),
      u.define(
        "select2/selection/search",
        ["jquery", "../utils", "../keys"],
        function (s, a, l) {
          function e(e, t, n) {
            e.call(this, t, n);
          }
          return (
            (e.prototype.render = function (e) {
              var t = this.options.get("translations").get("search"),
                n = s(
                  '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>',
                );
              ((this.$searchContainer = n),
                (this.$search = n.find("textarea")),
                this.$search.prop(
                  "autocomplete",
                  this.options.get("autocomplete"),
                ),
                this.$search.attr("aria-label", t()));
              e = e.call(this);
              return (
                this._transferTabIndex(),
                e.append(this.$searchContainer),
                e
              );
            }),
            (e.prototype.bind = function (e, t, n) {
              var s = this,
                i = t.id + "-results",
                r = t.id + "-container";
              (e.call(this, t, n),
                s.$search.attr("aria-describedby", r),
                t.on("open", function () {
                  (s.$search.attr("aria-controls", i),
                    s.$search.trigger("focus"));
                }),
                t.on("close", function () {
                  (s.$search.val(""),
                    s.resizeSearch(),
                    s.$search.removeAttr("aria-controls"),
                    s.$search.removeAttr("aria-activedescendant"),
                    s.$search.trigger("focus"));
                }),
                t.on("enable", function () {
                  (s.$search.prop("disabled", !1), s._transferTabIndex());
                }),
                t.on("disable", function () {
                  s.$search.prop("disabled", !0);
                }),
                t.on("focus", function (e) {
                  s.$search.trigger("focus");
                }),
                t.on("results:focus", function (e) {
                  e.data._resultId
                    ? s.$search.attr("aria-activedescendant", e.data._resultId)
                    : s.$search.removeAttr("aria-activedescendant");
                }),
                this.$selection.on(
                  "focusin",
                  ".select2-search--inline",
                  function (e) {
                    s.trigger("focus", e);
                  },
                ),
                this.$selection.on(
                  "focusout",
                  ".select2-search--inline",
                  function (e) {
                    s._handleBlur(e);
                  },
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    (e.stopPropagation(),
                      s.trigger("keypress", e),
                      (s._keyUpPrevented = e.isDefaultPrevented()),
                      e.which !== l.BACKSPACE ||
                        "" !== s.$search.val() ||
                        (0 <
                          (t = s.$selection
                            .find(".select2-selection__choice")
                            .last()).length &&
                          ((t = a.GetData(t[0], "data")),
                          s.searchRemoveChoice(t),
                          e.preventDefault())));
                  },
                ),
                this.$selection.on(
                  "click",
                  ".select2-search--inline",
                  function (e) {
                    s.$search.val() && e.stopPropagation();
                  },
                ));
              var t = document.documentMode,
                o = t && t <= 11;
              (this.$selection.on(
                "input.searchcheck",
                ".select2-search--inline",
                function (e) {
                  o
                    ? s.$selection.off("input.search input.searchcheck")
                    : s.$selection.off("keyup.search");
                },
              ),
                this.$selection.on(
                  "keyup.search input.search",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    o && "input" === e.type
                      ? s.$selection.off("input.search input.searchcheck")
                      : (t = e.which) != l.SHIFT &&
                        t != l.CTRL &&
                        t != l.ALT &&
                        t != l.TAB &&
                        s.handleSearch(e);
                  },
                ));
            }),
            (e.prototype._transferTabIndex = function (e) {
              (this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1"));
            }),
            (e.prototype.createPlaceholder = function (e, t) {
              this.$search.attr("placeholder", t.text);
            }),
            (e.prototype.update = function (e, t) {
              var n = this.$search[0] == document.activeElement;
              (this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.resizeSearch(),
                n && this.$search.trigger("focus"));
            }),
            (e.prototype.handleSearch = function () {
              var e;
              (this.resizeSearch(),
                this._keyUpPrevented ||
                  ((e = this.$search.val()),
                  this.trigger("query", { term: e })),
                (this._keyUpPrevented = !1));
            }),
            (e.prototype.searchRemoveChoice = function (e, t) {
              (this.trigger("unselect", { data: t }),
                this.$search.val(t.text),
                this.handleSearch());
            }),
            (e.prototype.resizeSearch = function () {
              this.$search.css("width", "25px");
              var e = "100%";
              ("" === this.$search.attr("placeholder") &&
                (e = 0.75 * (this.$search.val().length + 1) + "em"),
                this.$search.css("width", e));
            }),
            e
          );
        },
      ),
      u.define("select2/selection/selectionCss", ["../utils"], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get("selectionCssClass") || "";
            return (
              -1 !== e.indexOf(":all:") &&
                ((e = e.replace(":all:", "")),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define("select2/selection/eventRelay", ["jquery"], function (o) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = [
                "open",
                "opening",
                "close",
                "closing",
                "select",
                "selecting",
                "unselect",
                "unselecting",
                "clear",
                "clearing",
              ],
              r = [
                "opening",
                "closing",
                "selecting",
                "unselecting",
                "clearing",
              ];
            (e.call(this, t, n),
              t.on("*", function (e, t) {
                var n;
                -1 !== i.indexOf(e) &&
                  ((t = t || {}),
                  (n = o.Event("select2:" + e, { params: t })),
                  s.$element.trigger(n),
                  -1 !== r.indexOf(e) &&
                    (t.prevented = n.isDefaultPrevented()));
              }));
          }),
          e
        );
      }),
      u.define("select2/translation", ["jquery", "require"], function (t, n) {
        function s(e) {
          this.dict = e || {};
        }
        return (
          (s.prototype.all = function () {
            return this.dict;
          }),
          (s.prototype.get = function (e) {
            return this.dict[e];
          }),
          (s.prototype.extend = function (e) {
            this.dict = t.extend({}, e.all(), this.dict);
          }),
          (s._cache = {}),
          (s.loadPath = function (e) {
            var t;
            return (
              e in s._cache || ((t = n(e)), (s._cache[e] = t)),
              new s(s._cache[e])
            );
          }),
          s
        );
      }),
      u.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          Ａ: "A",
          À: "A",
          Á: "A",
          Â: "A",
          Ầ: "A",
          Ấ: "A",
          Ẫ: "A",
          Ẩ: "A",
          Ã: "A",
          Ā: "A",
          Ă: "A",
          Ằ: "A",
          Ắ: "A",
          Ẵ: "A",
          Ẳ: "A",
          Ȧ: "A",
          Ǡ: "A",
          Ä: "A",
          Ǟ: "A",
          Ả: "A",
          Å: "A",
          Ǻ: "A",
          Ǎ: "A",
          Ȁ: "A",
          Ȃ: "A",
          Ạ: "A",
          Ậ: "A",
          Ặ: "A",
          Ḁ: "A",
          Ą: "A",
          Ⱥ: "A",
          Ɐ: "A",
          Ꜳ: "AA",
          Æ: "AE",
          Ǽ: "AE",
          Ǣ: "AE",
          Ꜵ: "AO",
          Ꜷ: "AU",
          Ꜹ: "AV",
          Ꜻ: "AV",
          Ꜽ: "AY",
          "Ⓑ": "B",
          Ｂ: "B",
          Ḃ: "B",
          Ḅ: "B",
          Ḇ: "B",
          Ƀ: "B",
          Ƃ: "B",
          Ɓ: "B",
          "Ⓒ": "C",
          Ｃ: "C",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          Ç: "C",
          Ḉ: "C",
          Ƈ: "C",
          Ȼ: "C",
          Ꜿ: "C",
          "Ⓓ": "D",
          Ｄ: "D",
          Ḋ: "D",
          Ď: "D",
          Ḍ: "D",
          Ḑ: "D",
          Ḓ: "D",
          Ḏ: "D",
          Đ: "D",
          Ƌ: "D",
          Ɗ: "D",
          Ɖ: "D",
          Ꝺ: "D",
          Ǳ: "DZ",
          Ǆ: "DZ",
          ǲ: "Dz",
          ǅ: "Dz",
          "Ⓔ": "E",
          Ｅ: "E",
          È: "E",
          É: "E",
          Ê: "E",
          Ề: "E",
          Ế: "E",
          Ễ: "E",
          Ể: "E",
          Ẽ: "E",
          Ē: "E",
          Ḕ: "E",
          Ḗ: "E",
          Ĕ: "E",
          Ė: "E",
          Ë: "E",
          Ẻ: "E",
          Ě: "E",
          Ȅ: "E",
          Ȇ: "E",
          Ẹ: "E",
          Ệ: "E",
          Ȩ: "E",
          Ḝ: "E",
          Ę: "E",
          Ḙ: "E",
          Ḛ: "E",
          Ɛ: "E",
          Ǝ: "E",
          "Ⓕ": "F",
          Ｆ: "F",
          Ḟ: "F",
          Ƒ: "F",
          Ꝼ: "F",
          "Ⓖ": "G",
          Ｇ: "G",
          Ǵ: "G",
          Ĝ: "G",
          Ḡ: "G",
          Ğ: "G",
          Ġ: "G",
          Ǧ: "G",
          Ģ: "G",
          Ǥ: "G",
          Ɠ: "G",
          Ꞡ: "G",
          Ᵹ: "G",
          Ꝿ: "G",
          "Ⓗ": "H",
          Ｈ: "H",
          Ĥ: "H",
          Ḣ: "H",
          Ḧ: "H",
          Ȟ: "H",
          Ḥ: "H",
          Ḩ: "H",
          Ḫ: "H",
          Ħ: "H",
          Ⱨ: "H",
          Ⱶ: "H",
          Ɥ: "H",
          "Ⓘ": "I",
          Ｉ: "I",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          İ: "I",
          Ï: "I",
          Ḯ: "I",
          Ỉ: "I",
          Ǐ: "I",
          Ȉ: "I",
          Ȋ: "I",
          Ị: "I",
          Į: "I",
          Ḭ: "I",
          Ɨ: "I",
          "Ⓙ": "J",
          Ｊ: "J",
          Ĵ: "J",
          Ɉ: "J",
          "Ⓚ": "K",
          Ｋ: "K",
          Ḱ: "K",
          Ǩ: "K",
          Ḳ: "K",
          Ķ: "K",
          Ḵ: "K",
          Ƙ: "K",
          Ⱪ: "K",
          Ꝁ: "K",
          Ꝃ: "K",
          Ꝅ: "K",
          Ꞣ: "K",
          "Ⓛ": "L",
          Ｌ: "L",
          Ŀ: "L",
          Ĺ: "L",
          Ľ: "L",
          Ḷ: "L",
          Ḹ: "L",
          Ļ: "L",
          Ḽ: "L",
          Ḻ: "L",
          Ł: "L",
          Ƚ: "L",
          Ɫ: "L",
          Ⱡ: "L",
          Ꝉ: "L",
          Ꝇ: "L",
          Ꞁ: "L",
          Ǉ: "LJ",
          ǈ: "Lj",
          "Ⓜ": "M",
          Ｍ: "M",
          Ḿ: "M",
          Ṁ: "M",
          Ṃ: "M",
          Ɱ: "M",
          Ɯ: "M",
          "Ⓝ": "N",
          Ｎ: "N",
          Ǹ: "N",
          Ń: "N",
          Ñ: "N",
          Ṅ: "N",
          Ň: "N",
          Ṇ: "N",
          Ņ: "N",
          Ṋ: "N",
          Ṉ: "N",
          Ƞ: "N",
          Ɲ: "N",
          Ꞑ: "N",
          Ꞥ: "N",
          Ǌ: "NJ",
          ǋ: "Nj",
          "Ⓞ": "O",
          Ｏ: "O",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Ồ: "O",
          Ố: "O",
          Ỗ: "O",
          Ổ: "O",
          Õ: "O",
          Ṍ: "O",
          Ȭ: "O",
          Ṏ: "O",
          Ō: "O",
          Ṑ: "O",
          Ṓ: "O",
          Ŏ: "O",
          Ȯ: "O",
          Ȱ: "O",
          Ö: "O",
          Ȫ: "O",
          Ỏ: "O",
          Ő: "O",
          Ǒ: "O",
          Ȍ: "O",
          Ȏ: "O",
          Ơ: "O",
          Ờ: "O",
          Ớ: "O",
          Ỡ: "O",
          Ở: "O",
          Ợ: "O",
          Ọ: "O",
          Ộ: "O",
          Ǫ: "O",
          Ǭ: "O",
          Ø: "O",
          Ǿ: "O",
          Ɔ: "O",
          Ɵ: "O",
          Ꝋ: "O",
          Ꝍ: "O",
          Œ: "OE",
          Ƣ: "OI",
          Ꝏ: "OO",
          Ȣ: "OU",
          "Ⓟ": "P",
          Ｐ: "P",
          Ṕ: "P",
          Ṗ: "P",
          Ƥ: "P",
          Ᵽ: "P",
          Ꝑ: "P",
          Ꝓ: "P",
          Ꝕ: "P",
          "Ⓠ": "Q",
          Ｑ: "Q",
          Ꝗ: "Q",
          Ꝙ: "Q",
          Ɋ: "Q",
          "Ⓡ": "R",
          Ｒ: "R",
          Ŕ: "R",
          Ṙ: "R",
          Ř: "R",
          Ȑ: "R",
          Ȓ: "R",
          Ṛ: "R",
          Ṝ: "R",
          Ŗ: "R",
          Ṟ: "R",
          Ɍ: "R",
          Ɽ: "R",
          Ꝛ: "R",
          Ꞧ: "R",
          Ꞃ: "R",
          "Ⓢ": "S",
          Ｓ: "S",
          ẞ: "S",
          Ś: "S",
          Ṥ: "S",
          Ŝ: "S",
          Ṡ: "S",
          Š: "S",
          Ṧ: "S",
          Ṣ: "S",
          Ṩ: "S",
          Ș: "S",
          Ş: "S",
          Ȿ: "S",
          Ꞩ: "S",
          Ꞅ: "S",
          "Ⓣ": "T",
          Ｔ: "T",
          Ṫ: "T",
          Ť: "T",
          Ṭ: "T",
          Ț: "T",
          Ţ: "T",
          Ṱ: "T",
          Ṯ: "T",
          Ŧ: "T",
          Ƭ: "T",
          Ʈ: "T",
          Ⱦ: "T",
          Ꞇ: "T",
          Ꜩ: "TZ",
          "Ⓤ": "U",
          Ｕ: "U",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ũ: "U",
          Ṹ: "U",
          Ū: "U",
          Ṻ: "U",
          Ŭ: "U",
          Ü: "U",
          Ǜ: "U",
          Ǘ: "U",
          Ǖ: "U",
          Ǚ: "U",
          Ủ: "U",
          Ů: "U",
          Ű: "U",
          Ǔ: "U",
          Ȕ: "U",
          Ȗ: "U",
          Ư: "U",
          Ừ: "U",
          Ứ: "U",
          Ữ: "U",
          Ử: "U",
          Ự: "U",
          Ụ: "U",
          Ṳ: "U",
          Ų: "U",
          Ṷ: "U",
          Ṵ: "U",
          Ʉ: "U",
          "Ⓥ": "V",
          Ｖ: "V",
          Ṽ: "V",
          Ṿ: "V",
          Ʋ: "V",
          Ꝟ: "V",
          Ʌ: "V",
          Ꝡ: "VY",
          "Ⓦ": "W",
          Ｗ: "W",
          Ẁ: "W",
          Ẃ: "W",
          Ŵ: "W",
          Ẇ: "W",
          Ẅ: "W",
          Ẉ: "W",
          Ⱳ: "W",
          "Ⓧ": "X",
          Ｘ: "X",
          Ẋ: "X",
          Ẍ: "X",
          "Ⓨ": "Y",
          Ｙ: "Y",
          Ỳ: "Y",
          Ý: "Y",
          Ŷ: "Y",
          Ỹ: "Y",
          Ȳ: "Y",
          Ẏ: "Y",
          Ÿ: "Y",
          Ỷ: "Y",
          Ỵ: "Y",
          Ƴ: "Y",
          Ɏ: "Y",
          Ỿ: "Y",
          "Ⓩ": "Z",
          Ｚ: "Z",
          Ź: "Z",
          Ẑ: "Z",
          Ż: "Z",
          Ž: "Z",
          Ẓ: "Z",
          Ẕ: "Z",
          Ƶ: "Z",
          Ȥ: "Z",
          Ɀ: "Z",
          Ⱬ: "Z",
          Ꝣ: "Z",
          "ⓐ": "a",
          ａ: "a",
          ẚ: "a",
          à: "a",
          á: "a",
          â: "a",
          ầ: "a",
          ấ: "a",
          ẫ: "a",
          ẩ: "a",
          ã: "a",
          ā: "a",
          ă: "a",
          ằ: "a",
          ắ: "a",
          ẵ: "a",
          ẳ: "a",
          ȧ: "a",
          ǡ: "a",
          ä: "a",
          ǟ: "a",
          ả: "a",
          å: "a",
          ǻ: "a",
          ǎ: "a",
          ȁ: "a",
          ȃ: "a",
          ạ: "a",
          ậ: "a",
          ặ: "a",
          ḁ: "a",
          ą: "a",
          ⱥ: "a",
          ɐ: "a",
          ꜳ: "aa",
          æ: "ae",
          ǽ: "ae",
          ǣ: "ae",
          ꜵ: "ao",
          ꜷ: "au",
          ꜹ: "av",
          ꜻ: "av",
          ꜽ: "ay",
          "ⓑ": "b",
          ｂ: "b",
          ḃ: "b",
          ḅ: "b",
          ḇ: "b",
          ƀ: "b",
          ƃ: "b",
          ɓ: "b",
          "ⓒ": "c",
          ｃ: "c",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          ç: "c",
          ḉ: "c",
          ƈ: "c",
          ȼ: "c",
          ꜿ: "c",
          ↄ: "c",
          "ⓓ": "d",
          ｄ: "d",
          ḋ: "d",
          ď: "d",
          ḍ: "d",
          ḑ: "d",
          ḓ: "d",
          ḏ: "d",
          đ: "d",
          ƌ: "d",
          ɖ: "d",
          ɗ: "d",
          ꝺ: "d",
          ǳ: "dz",
          ǆ: "dz",
          "ⓔ": "e",
          ｅ: "e",
          è: "e",
          é: "e",
          ê: "e",
          ề: "e",
          ế: "e",
          ễ: "e",
          ể: "e",
          ẽ: "e",
          ē: "e",
          ḕ: "e",
          ḗ: "e",
          ĕ: "e",
          ė: "e",
          ë: "e",
          ẻ: "e",
          ě: "e",
          ȅ: "e",
          ȇ: "e",
          ẹ: "e",
          ệ: "e",
          ȩ: "e",
          ḝ: "e",
          ę: "e",
          ḙ: "e",
          ḛ: "e",
          ɇ: "e",
          ɛ: "e",
          ǝ: "e",
          "ⓕ": "f",
          ｆ: "f",
          ḟ: "f",
          ƒ: "f",
          ꝼ: "f",
          "ⓖ": "g",
          ｇ: "g",
          ǵ: "g",
          ĝ: "g",
          ḡ: "g",
          ğ: "g",
          ġ: "g",
          ǧ: "g",
          ģ: "g",
          ǥ: "g",
          ɠ: "g",
          ꞡ: "g",
          ᵹ: "g",
          ꝿ: "g",
          "ⓗ": "h",
          ｈ: "h",
          ĥ: "h",
          ḣ: "h",
          ḧ: "h",
          ȟ: "h",
          ḥ: "h",
          ḩ: "h",
          ḫ: "h",
          ẖ: "h",
          ħ: "h",
          ⱨ: "h",
          ⱶ: "h",
          ɥ: "h",
          ƕ: "hv",
          "ⓘ": "i",
          ｉ: "i",
          ì: "i",
          í: "i",
          î: "i",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          ï: "i",
          ḯ: "i",
          ỉ: "i",
          ǐ: "i",
          ȉ: "i",
          ȋ: "i",
          ị: "i",
          į: "i",
          ḭ: "i",
          ɨ: "i",
          ı: "i",
          "ⓙ": "j",
          ｊ: "j",
          ĵ: "j",
          ǰ: "j",
          ɉ: "j",
          "ⓚ": "k",
          ｋ: "k",
          ḱ: "k",
          ǩ: "k",
          ḳ: "k",
          ķ: "k",
          ḵ: "k",
          ƙ: "k",
          ⱪ: "k",
          ꝁ: "k",
          ꝃ: "k",
          ꝅ: "k",
          ꞣ: "k",
          "ⓛ": "l",
          ｌ: "l",
          ŀ: "l",
          ĺ: "l",
          ľ: "l",
          ḷ: "l",
          ḹ: "l",
          ļ: "l",
          ḽ: "l",
          ḻ: "l",
          ſ: "l",
          ł: "l",
          ƚ: "l",
          ɫ: "l",
          ⱡ: "l",
          ꝉ: "l",
          ꞁ: "l",
          ꝇ: "l",
          ǉ: "lj",
          "ⓜ": "m",
          ｍ: "m",
          ḿ: "m",
          ṁ: "m",
          ṃ: "m",
          ɱ: "m",
          ɯ: "m",
          "ⓝ": "n",
          ｎ: "n",
          ǹ: "n",
          ń: "n",
          ñ: "n",
          ṅ: "n",
          ň: "n",
          ṇ: "n",
          ņ: "n",
          ṋ: "n",
          ṉ: "n",
          ƞ: "n",
          ɲ: "n",
          ŉ: "n",
          ꞑ: "n",
          ꞥ: "n",
          ǌ: "nj",
          "ⓞ": "o",
          ｏ: "o",
          ò: "o",
          ó: "o",
          ô: "o",
          ồ: "o",
          ố: "o",
          ỗ: "o",
          ổ: "o",
          õ: "o",
          ṍ: "o",
          ȭ: "o",
          ṏ: "o",
          ō: "o",
          ṑ: "o",
          ṓ: "o",
          ŏ: "o",
          ȯ: "o",
          ȱ: "o",
          ö: "o",
          ȫ: "o",
          ỏ: "o",
          ő: "o",
          ǒ: "o",
          ȍ: "o",
          ȏ: "o",
          ơ: "o",
          ờ: "o",
          ớ: "o",
          ỡ: "o",
          ở: "o",
          ợ: "o",
          ọ: "o",
          ộ: "o",
          ǫ: "o",
          ǭ: "o",
          ø: "o",
          ǿ: "o",
          ɔ: "o",
          ꝋ: "o",
          ꝍ: "o",
          ɵ: "o",
          œ: "oe",
          ƣ: "oi",
          ȣ: "ou",
          ꝏ: "oo",
          "ⓟ": "p",
          ｐ: "p",
          ṕ: "p",
          ṗ: "p",
          ƥ: "p",
          ᵽ: "p",
          ꝑ: "p",
          ꝓ: "p",
          ꝕ: "p",
          "ⓠ": "q",
          ｑ: "q",
          ɋ: "q",
          ꝗ: "q",
          ꝙ: "q",
          "ⓡ": "r",
          ｒ: "r",
          ŕ: "r",
          ṙ: "r",
          ř: "r",
          ȑ: "r",
          ȓ: "r",
          ṛ: "r",
          ṝ: "r",
          ŗ: "r",
          ṟ: "r",
          ɍ: "r",
          ɽ: "r",
          ꝛ: "r",
          ꞧ: "r",
          ꞃ: "r",
          "ⓢ": "s",
          ｓ: "s",
          ß: "s",
          ś: "s",
          ṥ: "s",
          ŝ: "s",
          ṡ: "s",
          š: "s",
          ṧ: "s",
          ṣ: "s",
          ṩ: "s",
          ș: "s",
          ş: "s",
          ȿ: "s",
          ꞩ: "s",
          ꞅ: "s",
          ẛ: "s",
          "ⓣ": "t",
          ｔ: "t",
          ṫ: "t",
          ẗ: "t",
          ť: "t",
          ṭ: "t",
          ț: "t",
          ţ: "t",
          ṱ: "t",
          ṯ: "t",
          ŧ: "t",
          ƭ: "t",
          ʈ: "t",
          ⱦ: "t",
          ꞇ: "t",
          ꜩ: "tz",
          "ⓤ": "u",
          ｕ: "u",
          ù: "u",
          ú: "u",
          û: "u",
          ũ: "u",
          ṹ: "u",
          ū: "u",
          ṻ: "u",
          ŭ: "u",
          ü: "u",
          ǜ: "u",
          ǘ: "u",
          ǖ: "u",
          ǚ: "u",
          ủ: "u",
          ů: "u",
          ű: "u",
          ǔ: "u",
          ȕ: "u",
          ȗ: "u",
          ư: "u",
          ừ: "u",
          ứ: "u",
          ữ: "u",
          ử: "u",
          ự: "u",
          ụ: "u",
          ṳ: "u",
          ų: "u",
          ṷ: "u",
          ṵ: "u",
          ʉ: "u",
          "ⓥ": "v",
          ｖ: "v",
          ṽ: "v",
          ṿ: "v",
          ʋ: "v",
          ꝟ: "v",
          ʌ: "v",
          ꝡ: "vy",
          "ⓦ": "w",
          ｗ: "w",
          ẁ: "w",
          ẃ: "w",
          ŵ: "w",
          ẇ: "w",
          ẅ: "w",
          ẘ: "w",
          ẉ: "w",
          ⱳ: "w",
          "ⓧ": "x",
          ｘ: "x",
          ẋ: "x",
          ẍ: "x",
          "ⓨ": "y",
          ｙ: "y",
          ỳ: "y",
          ý: "y",
          ŷ: "y",
          ỹ: "y",
          ȳ: "y",
          ẏ: "y",
          ÿ: "y",
          ỷ: "y",
          ẙ: "y",
          ỵ: "y",
          ƴ: "y",
          ɏ: "y",
          ỿ: "y",
          "ⓩ": "z",
          ｚ: "z",
          ź: "z",
          ẑ: "z",
          ż: "z",
          ž: "z",
          ẓ: "z",
          ẕ: "z",
          ƶ: "z",
          ȥ: "z",
          ɀ: "z",
          ⱬ: "z",
          ꝣ: "z",
          Ά: "Α",
          Έ: "Ε",
          Ή: "Η",
          Ί: "Ι",
          Ϊ: "Ι",
          Ό: "Ο",
          Ύ: "Υ",
          Ϋ: "Υ",
          Ώ: "Ω",
          ά: "α",
          έ: "ε",
          ή: "η",
          ί: "ι",
          ϊ: "ι",
          ΐ: "ι",
          ό: "ο",
          ύ: "υ",
          ϋ: "υ",
          ΰ: "υ",
          ώ: "ω",
          ς: "σ",
          "’": "'",
        };
      }),
      u.define("select2/data/base", ["../utils"], function (n) {
        function s(e, t) {
          s.__super__.constructor.call(this);
        }
        return (
          n.Extend(s, n.Observable),
          (s.prototype.current = function (e) {
            throw new Error(
              "The `current` method must be defined in child classes.",
            );
          }),
          (s.prototype.query = function (e, t) {
            throw new Error(
              "The `query` method must be defined in child classes.",
            );
          }),
          (s.prototype.bind = function (e, t) {}),
          (s.prototype.destroy = function () {}),
          (s.prototype.generateResultId = function (e, t) {
            e = e.id + "-result-";
            return (
              (e += n.generateChars(4)),
              null != t.id
                ? (e += "-" + t.id.toString())
                : (e += "-" + n.generateChars(4)),
              e
            );
          }),
          s
        );
      }),
      u.define(
        "select2/data/select",
        ["./base", "../utils", "jquery"],
        function (e, a, l) {
          function n(e, t) {
            ((this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this));
          }
          return (
            a.Extend(n, e),
            (n.prototype.current = function (e) {
              var t = this;
              e(
                Array.prototype.map.call(
                  this.$element[0].querySelectorAll(":checked"),
                  function (e) {
                    return t.item(l(e));
                  },
                ),
              );
            }),
            (n.prototype.select = function (i) {
              var e,
                r = this;
              if (
                ((i.selected = !0),
                null != i.element &&
                  "option" === i.element.tagName.toLowerCase())
              )
                return (
                  (i.element.selected = !0),
                  void this.$element.trigger("input").trigger("change")
                );
              this.$element.prop("multiple")
                ? this.current(function (e) {
                    var t = [];
                    (i = [i]).push.apply(i, e);
                    for (var n = 0; n < i.length; n++) {
                      var s = i[n].id;
                      -1 === t.indexOf(s) && t.push(s);
                    }
                    (r.$element.val(t),
                      r.$element.trigger("input").trigger("change"));
                  })
                : ((e = i.id),
                  this.$element.val(e),
                  this.$element.trigger("input").trigger("change"));
            }),
            (n.prototype.unselect = function (i) {
              var r = this;
              if (this.$element.prop("multiple")) {
                if (
                  ((i.selected = !1),
                  null != i.element &&
                    "option" === i.element.tagName.toLowerCase())
                )
                  return (
                    (i.element.selected = !1),
                    void this.$element.trigger("input").trigger("change")
                  );
                this.current(function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var s = e[n].id;
                    s !== i.id && -1 === t.indexOf(s) && t.push(s);
                  }
                  (r.$element.val(t),
                    r.$element.trigger("input").trigger("change"));
                });
              }
            }),
            (n.prototype.bind = function (e, t) {
              var n = this;
              ((this.container = e).on("select", function (e) {
                n.select(e.data);
              }),
                e.on("unselect", function (e) {
                  n.unselect(e.data);
                }));
            }),
            (n.prototype.destroy = function () {
              this.$element.find("*").each(function () {
                a.RemoveData(this);
              });
            }),
            (n.prototype.query = function (t, e) {
              var n = [],
                s = this;
              (this.$element.children().each(function () {
                var e;
                ("option" !== this.tagName.toLowerCase() &&
                  "optgroup" !== this.tagName.toLowerCase()) ||
                  ((e = l(this)),
                  (e = s.item(e)),
                  null !== (e = s.matches(t, e)) && n.push(e));
              }),
                e({ results: n }));
            }),
            (n.prototype.addOptions = function (e) {
              this.$element.append(e);
            }),
            (n.prototype.option = function (e) {
              var t;
              (e.children
                ? ((t = document.createElement("optgroup")).label = e.text)
                : void 0 !== (t = document.createElement("option")).textContent
                  ? (t.textContent = e.text)
                  : (t.innerText = e.text),
                void 0 !== e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title));
              e = this._normalizeItem(e);
              return ((e.element = t), a.StoreData(t, "data", e), l(t));
            }),
            (n.prototype.item = function (e) {
              var t = {};
              if (null != (t = a.GetData(e[0], "data"))) return t;
              var n = e[0];
              if ("option" === n.tagName.toLowerCase())
                t = {
                  id: e.val(),
                  text: e.text(),
                  disabled: e.prop("disabled"),
                  selected: e.prop("selected"),
                  title: e.prop("title"),
                };
              else if ("optgroup" === n.tagName.toLowerCase()) {
                t = {
                  text: e.prop("label"),
                  children: [],
                  title: e.prop("title"),
                };
                for (
                  var s = e.children("option"), i = [], r = 0;
                  r < s.length;
                  r++
                ) {
                  var o = l(s[r]),
                    o = this.item(o);
                  i.push(o);
                }
                t.children = i;
              }
              return (
                ((t = this._normalizeItem(t)).element = e[0]),
                a.StoreData(e[0], "data", t),
                t
              );
            }),
            (n.prototype._normalizeItem = function (e) {
              e !== Object(e) && (e = { id: e, text: e });
              return (
                null != (e = l.extend({}, { text: "" }, e)).id &&
                  (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId &&
                  e.id &&
                  null != this.container &&
                  (e._resultId = this.generateResultId(this.container, e)),
                l.extend({}, { selected: !1, disabled: !1 }, e)
              );
            }),
            (n.prototype.matches = function (e, t) {
              return this.options.get("matcher")(e, t);
            }),
            n
          );
        },
      ),
      u.define(
        "select2/data/array",
        ["./select", "../utils", "jquery"],
        function (e, t, c) {
          function s(e, t) {
            ((this._dataToConvert = t.get("data") || []),
              s.__super__.constructor.call(this, e, t));
          }
          return (
            t.Extend(s, e),
            (s.prototype.bind = function (e, t) {
              (s.__super__.bind.call(this, e, t),
                this.addOptions(this.convertToOptions(this._dataToConvert)));
            }),
            (s.prototype.select = function (n) {
              var e = this.$element.find("option").filter(function (e, t) {
                return t.value == n.id.toString();
              });
              (0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                s.__super__.select.call(this, n));
            }),
            (s.prototype.convertToOptions = function (e) {
              var t = this,
                n = this.$element.find("option"),
                s = n
                  .map(function () {
                    return t.item(c(this)).id;
                  })
                  .get(),
                i = [];
              for (var r = 0; r < e.length; r++) {
                var o,
                  a,
                  l = this._normalizeItem(e[r]);
                0 <= s.indexOf(l.id)
                  ? ((o = n.filter(
                      (function (e) {
                        return function () {
                          return c(this).val() == e.id;
                        };
                      })(l),
                    )),
                    (a = this.item(o)),
                    (a = c.extend(!0, {}, l, a)),
                    (a = this.option(a)),
                    o.replaceWith(a))
                  : ((a = this.option(l)),
                    l.children &&
                      ((l = this.convertToOptions(l.children)), a.append(l)),
                    i.push(a));
              }
              return i;
            }),
            s
          );
        },
      ),
      u.define(
        "select2/data/ajax",
        ["./array", "../utils", "jquery"],
        function (e, t, r) {
          function n(e, t) {
            ((this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
              null != this.ajaxOptions.processResults &&
                (this.processResults = this.ajaxOptions.processResults),
              n.__super__.constructor.call(this, e, t));
          }
          return (
            t.Extend(n, e),
            (n.prototype._applyDefaults = function (e) {
              var t = {
                data: function (e) {
                  return r.extend({}, e, { q: e.term });
                },
                transport: function (e, t, n) {
                  e = r.ajax(e);
                  return (e.then(t), e.fail(n), e);
                },
              };
              return r.extend({}, t, e, !0);
            }),
            (n.prototype.processResults = function (e) {
              return e;
            }),
            (n.prototype.query = function (t, n) {
              var s = this;
              null != this._request &&
                ("function" == typeof this._request.abort &&
                  this._request.abort(),
                (this._request = null));
              var i = r.extend({ type: "GET" }, this.ajaxOptions);
              function e() {
                var e = i.transport(
                  i,
                  function (e) {
                    e = s.processResults(e, t);
                    (s.options.get("debug") &&
                      window.console &&
                      console.error &&
                      ((e && e.results && Array.isArray(e.results)) ||
                        console.error(
                          "Select2: The AJAX results did not return an array in the `results` key of the response.",
                        )),
                      n(e));
                  },
                  function () {
                    ("status" in e && (0 === e.status || "0" === e.status)) ||
                      s.trigger("results:message", { message: "errorLoading" });
                  },
                );
                s._request = e;
              }
              ("function" == typeof i.url &&
                (i.url = i.url.call(this.$element, t)),
                "function" == typeof i.data &&
                  (i.data = i.data.call(this.$element, t)),
                this.ajaxOptions.delay && null != t.term
                  ? (this._queryTimeout &&
                      window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(
                      e,
                      this.ajaxOptions.delay,
                    )))
                  : e());
            }),
            n
          );
        },
      ),
      u.define("select2/data/tags", ["jquery"], function (t) {
        function e(e, t, n) {
          var s = n.get("tags"),
            i = n.get("createTag");
          void 0 !== i && (this.createTag = i);
          i = n.get("insertTag");
          if (
            (void 0 !== i && (this.insertTag = i),
            e.call(this, t, n),
            Array.isArray(s))
          )
            for (var r = 0; r < s.length; r++) {
              var o = s[r],
                o = this._normalizeItem(o),
                o = this.option(o);
              this.$element.append(o);
            }
        }
        return (
          (e.prototype.query = function (e, c, u) {
            var d = this;
            (this._removeOldTags(),
              null != c.term && null == c.page
                ? e.call(this, c, function e(t, n) {
                    for (var s = t.results, i = 0; i < s.length; i++) {
                      var r = s[i],
                        o =
                          null != r.children && !e({ results: r.children }, !0);
                      if (
                        (r.text || "").toUpperCase() ===
                          (c.term || "").toUpperCase() ||
                        o
                      )
                        return !n && ((t.data = s), void u(t));
                    }
                    if (n) return !0;
                    var a,
                      l = d.createTag(c);
                    (null != l &&
                      ((a = d.option(l)).attr("data-select2-tag", "true"),
                      d.addOptions([a]),
                      d.insertTag(s, l)),
                      (t.results = s),
                      u(t));
                  })
                : e.call(this, c, u));
          }),
          (e.prototype.createTag = function (e, t) {
            if (null == t.term) return null;
            t = t.term.trim();
            return "" === t ? null : { id: t, text: t };
          }),
          (e.prototype.insertTag = function (e, t, n) {
            t.unshift(n);
          }),
          (e.prototype._removeOldTags = function (e) {
            this.$element.find("option[data-select2-tag]").each(function () {
              this.selected || t(this).remove();
            });
          }),
          e
        );
      }),
      u.define("select2/data/tokenizer", ["jquery"], function (c) {
        function e(e, t, n) {
          var s = n.get("tokenizer");
          (void 0 !== s && (this.tokenizer = s), e.call(this, t, n));
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            (e.call(this, t, n),
              (this.$search =
                t.dropdown.$search ||
                t.selection.$search ||
                n.find(".select2-search__field")));
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            t.term = t.term || "";
            var i = this.tokenizer(t, this.options, function (e) {
              var t,
                n = s._normalizeItem(e);
              (s.$element.find("option").filter(function () {
                return c(this).val() === n.id;
              }).length ||
                ((t = s.option(n)).attr("data-select2-tag", !0),
                s._removeOldTags(),
                s.addOptions([t])),
                (t = n),
                s.trigger("select", { data: t }));
            });
            (i.term !== t.term &&
              (this.$search.length &&
                (this.$search.val(i.term), this.$search.trigger("focus")),
              (t.term = i.term)),
              e.call(this, t, n));
          }),
          (e.prototype.tokenizer = function (e, t, n, s) {
            for (
              var i = n.get("tokenSeparators") || [],
                r = t.term,
                o = 0,
                a =
                  this.createTag ||
                  function (e) {
                    return { id: e.term, text: e.term };
                  };
              o < r.length;
            ) {
              var l = r[o];
              -1 !== i.indexOf(l)
                ? ((l = r.substr(0, o)),
                  null != (l = a(c.extend({}, t, { term: l })))
                    ? (s(l), (r = r.substr(o + 1) || ""), (o = 0))
                    : o++)
                : o++;
            }
            return { term: r };
          }),
          e
        );
      }),
      u.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          ((this.minimumInputLength = n.get("minimumInputLength")),
            e.call(this, t, n));
        }
        return (
          (e.prototype.query = function (e, t, n) {
            ((t.term = t.term || ""),
              t.term.length < this.minimumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                      minimum: this.minimumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n));
          }),
          e
        );
      }),
      u.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          ((this.maximumInputLength = n.get("maximumInputLength")),
            e.call(this, t, n));
        }
        return (
          (e.prototype.query = function (e, t, n) {
            ((t.term = t.term || ""),
              0 < this.maximumInputLength &&
              t.term.length > this.maximumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                      maximum: this.maximumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n));
          }),
          e
        );
      }),
      u.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          ((this.maximumSelectionLength = n.get("maximumSelectionLength")),
            e.call(this, t, n));
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            (e.call(this, t, n),
              t.on("select", function () {
                s._checkIfMaximumSelected();
              }));
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            this._checkIfMaximumSelected(function () {
              e.call(s, t, n);
            });
          }),
          (e.prototype._checkIfMaximumSelected = function (e, t) {
            var n = this;
            this.current(function (e) {
              e = null != e ? e.length : 0;
              0 < n.maximumSelectionLength && e >= n.maximumSelectionLength
                ? n.trigger("results:message", {
                    message: "maximumSelected",
                    args: { maximum: n.maximumSelectionLength },
                  })
                : t && t();
            });
          }),
          e
        );
      }),
      u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          ((this.$element = e),
            (this.options = t),
            n.__super__.constructor.call(this));
        }
        return (
          e.Extend(n, e.Observable),
          (n.prototype.render = function () {
            var e = t(
              '<span class="select2-dropdown"><span class="select2-results"></span></span>',
            );
            return (
              e.attr("dir", this.options.get("dir")),
              (this.$dropdown = e)
            );
          }),
          (n.prototype.bind = function () {}),
          (n.prototype.position = function (e, t) {}),
          (n.prototype.destroy = function () {
            this.$dropdown.remove();
          }),
          n
        );
      }),
      u.define("select2/dropdown/search", ["jquery"], function (r) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              n = this.options.get("translations").get("search"),
              e = r(
                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>',
              );
            return (
              (this.$searchContainer = e),
              (this.$search = e.find("input")),
              this.$search.prop(
                "autocomplete",
                this.options.get("autocomplete"),
              ),
              this.$search.attr("aria-label", n()),
              t.prepend(e),
              t
            );
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = t.id + "-results";
            (e.call(this, t, n),
              this.$search.on("keydown", function (e) {
                (s.trigger("keypress", e),
                  (s._keyUpPrevented = e.isDefaultPrevented()));
              }),
              this.$search.on("input", function (e) {
                r(this).off("keyup");
              }),
              this.$search.on("keyup input", function (e) {
                s.handleSearch(e);
              }),
              t.on("open", function () {
                (s.$search.attr("tabindex", 0),
                  s.$search.attr("aria-controls", i),
                  s.$search.trigger("focus"),
                  window.setTimeout(function () {
                    s.$search.trigger("focus");
                  }, 0));
              }),
              t.on("close", function () {
                (s.$search.attr("tabindex", -1),
                  s.$search.removeAttr("aria-controls"),
                  s.$search.removeAttr("aria-activedescendant"),
                  s.$search.val(""),
                  s.$search.trigger("blur"));
              }),
              t.on("focus", function () {
                t.isOpen() || s.$search.trigger("focus");
              }),
              t.on("results:all", function (e) {
                (null != e.query.term && "" !== e.query.term) ||
                  (s.showSearch(e)
                    ? s.$searchContainer[0].classList.remove(
                        "select2-search--hide",
                      )
                    : s.$searchContainer[0].classList.add(
                        "select2-search--hide",
                      ));
              }),
              t.on("results:focus", function (e) {
                e.data._resultId
                  ? s.$search.attr("aria-activedescendant", e.data._resultId)
                  : s.$search.removeAttr("aria-activedescendant");
              }));
          }),
          (e.prototype.handleSearch = function (e) {
            var t;
            (this._keyUpPrevented ||
              ((t = this.$search.val()), this.trigger("query", { term: t })),
              (this._keyUpPrevented = !1));
          }),
          (e.prototype.showSearch = function (e, t) {
            return !0;
          }),
          e
        );
      }),
      u.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, s) {
          ((this.placeholder = this.normalizePlaceholder(n.get("placeholder"))),
            e.call(this, t, n, s));
        }
        return (
          (e.prototype.append = function (e, t) {
            ((t.results = this.removePlaceholder(t.results)), e.call(this, t));
          }),
          (e.prototype.normalizePlaceholder = function (e, t) {
            return (t = "string" == typeof t ? { id: "", text: t } : t);
          }),
          (e.prototype.removePlaceholder = function (e, t) {
            for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
              var i = t[s];
              this.placeholder.id === i.id && n.splice(s, 1);
            }
            return n;
          }),
          e
        );
      }),
      u.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
        function e(e, t, n, s) {
          ((this.lastParams = {}),
            e.call(this, t, n, s),
            (this.$loadingMore = this.createLoadingMore()),
            (this.loading = !1));
        }
        return (
          (e.prototype.append = function (e, t) {
            (this.$loadingMore.remove(),
              (this.loading = !1),
              e.call(this, t),
              this.showLoadingMore(t) &&
                (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded()));
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            (e.call(this, t, n),
              t.on("query", function (e) {
                ((s.lastParams = e), (s.loading = !0));
              }),
              t.on("query:append", function (e) {
                ((s.lastParams = e), (s.loading = !0));
              }),
              this.$results.on("scroll", this.loadMoreIfNeeded.bind(this)));
          }),
          (e.prototype.loadMoreIfNeeded = function () {
            var e = n.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading &&
              e &&
              ((e = this.$results.offset().top + this.$results.outerHeight(!1)),
              this.$loadingMore.offset().top +
                this.$loadingMore.outerHeight(!1) <=
                e + 50 && this.loadMore());
          }),
          (e.prototype.loadMore = function () {
            this.loading = !0;
            var e = n.extend({}, { page: 1 }, this.lastParams);
            (e.page++, this.trigger("query:append", e));
          }),
          (e.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more;
          }),
          (e.prototype.createLoadingMore = function () {
            var e = n(
                '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>',
              ),
              t = this.options.get("translations").get("loadingMore");
            return (e.html(t(this.lastParams)), e);
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/attachBody",
        ["jquery", "../utils"],
        function (u, o) {
          function e(e, t, n) {
            ((this.$dropdownParent = u(
              n.get("dropdownParent") || document.body,
            )),
              e.call(this, t, n));
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              (e.call(this, t, n),
                t.on("open", function () {
                  (s._showDropdown(),
                    s._attachPositioningHandler(t),
                    s._bindContainerResultHandlers(t));
                }),
                t.on("close", function () {
                  (s._hideDropdown(), s._detachPositioningHandler(t));
                }),
                this.$dropdownContainer.on("mousedown", function (e) {
                  e.stopPropagation();
                }));
            }),
            (e.prototype.destroy = function (e) {
              (e.call(this), this.$dropdownContainer.remove());
            }),
            (e.prototype.position = function (e, t, n) {
              (t.attr("class", n.attr("class")),
                t[0].classList.remove("select2"),
                t[0].classList.add("select2-container--open"),
                t.css({ position: "absolute", top: -999999 }),
                (this.$container = n));
            }),
            (e.prototype.render = function (e) {
              var t = u("<span></span>"),
                e = e.call(this);
              return (t.append(e), (this.$dropdownContainer = t));
            }),
            (e.prototype._hideDropdown = function (e) {
              this.$dropdownContainer.detach();
            }),
            (e.prototype._bindContainerResultHandlers = function (e, t) {
              var n;
              this._containerResultsHandlersBound ||
                ((n = this),
                t.on("results:all", function () {
                  (n._positionDropdown(), n._resizeDropdown());
                }),
                t.on("results:append", function () {
                  (n._positionDropdown(), n._resizeDropdown());
                }),
                t.on("results:message", function () {
                  (n._positionDropdown(), n._resizeDropdown());
                }),
                t.on("select", function () {
                  (n._positionDropdown(), n._resizeDropdown());
                }),
                t.on("unselect", function () {
                  (n._positionDropdown(), n._resizeDropdown());
                }),
                (this._containerResultsHandlersBound = !0));
            }),
            (e.prototype._attachPositioningHandler = function (e, t) {
              var n = this,
                s = "scroll.select2." + t.id,
                i = "resize.select2." + t.id,
                r = "orientationchange.select2." + t.id,
                t = this.$container.parents().filter(o.hasScroll);
              (t.each(function () {
                o.StoreData(this, "select2-scroll-position", {
                  x: u(this).scrollLeft(),
                  y: u(this).scrollTop(),
                });
              }),
                t.on(s, function (e) {
                  var t = o.GetData(this, "select2-scroll-position");
                  u(this).scrollTop(t.y);
                }),
                u(window).on(s + " " + i + " " + r, function (e) {
                  (n._positionDropdown(), n._resizeDropdown());
                }));
            }),
            (e.prototype._detachPositioningHandler = function (e, t) {
              var n = "scroll.select2." + t.id,
                s = "resize.select2." + t.id,
                t = "orientationchange.select2." + t.id;
              (this.$container.parents().filter(o.hasScroll).off(n),
                u(window).off(n + " " + s + " " + t));
            }),
            (e.prototype._positionDropdown = function () {
              var e = u(window),
                t = this.$dropdown[0].classList.contains(
                  "select2-dropdown--above",
                ),
                n = this.$dropdown[0].classList.contains(
                  "select2-dropdown--below",
                ),
                s = null,
                i = this.$container.offset();
              i.bottom = i.top + this.$container.outerHeight(!1);
              var r = { height: this.$container.outerHeight(!1) };
              ((r.top = i.top), (r.bottom = i.top + r.height));
              var o = this.$dropdown.outerHeight(!1),
                a = e.scrollTop(),
                l = e.scrollTop() + e.height(),
                c = a < i.top - o,
                e = l > i.bottom + o,
                a = { left: i.left, top: r.bottom },
                l = this.$dropdownParent;
              "static" === l.css("position") && (l = l.offsetParent());
              i = { top: 0, left: 0 };
              ((u.contains(document.body, l[0]) || l[0].isConnected) &&
                (i = l.offset()),
                (a.top -= i.top),
                (a.left -= i.left),
                t || n || (s = "below"),
                e || !c || t ? !c && e && t && (s = "below") : (s = "above"),
                ("above" == s || (t && "below" !== s)) &&
                  (a.top = r.top - i.top - o),
                null != s &&
                  (this.$dropdown[0].classList.remove(
                    "select2-dropdown--below",
                  ),
                  this.$dropdown[0].classList.remove("select2-dropdown--above"),
                  this.$dropdown[0].classList.add("select2-dropdown--" + s),
                  this.$container[0].classList.remove(
                    "select2-container--below",
                  ),
                  this.$container[0].classList.remove(
                    "select2-container--above",
                  ),
                  this.$container[0].classList.add("select2-container--" + s)),
                this.$dropdownContainer.css(a));
            }),
            (e.prototype._resizeDropdown = function () {
              var e = { width: this.$container.outerWidth(!1) + "px" };
              (this.options.get("dropdownAutoWidth") &&
                ((e.minWidth = e.width),
                (e.position = "relative"),
                (e.width = "auto")),
                this.$dropdown.css(e));
            }),
            (e.prototype._showDropdown = function (e) {
              (this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown());
            }),
            e
          );
        },
      ),
      u.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, s) {
          ((this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
            this.minimumResultsForSearch < 0 &&
              (this.minimumResultsForSearch = 1 / 0),
            e.call(this, t, n, s));
        }
        return (
          (e.prototype.showSearch = function (e, t) {
            return (
              !(
                (function e(t) {
                  for (var n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.children ? (n += e(i.children)) : n++;
                  }
                  return n;
                })(t.data.results) < this.minimumResultsForSearch
              ) && e.call(this, t)
            );
          }),
          e
        );
      }),
      u.define("select2/dropdown/selectOnClose", ["../utils"], function (s) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            (e.call(this, t, n),
              t.on("close", function (e) {
                s._handleSelectOnClose(e);
              }));
          }),
          (e.prototype._handleSelectOnClose = function (e, t) {
            if (t && null != t.originalSelect2Event) {
              var n = t.originalSelect2Event;
              if ("select" === n._type || "unselect" === n._type) return;
            }
            n = this.getHighlightedResults();
            n.length < 1 ||
              (null != (n = s.GetData(n[0], "data")).element &&
                n.element.selected) ||
              (null == n.element && n.selected) ||
              this.trigger("select", { data: n });
          }),
          e
        );
      }),
      u.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            (e.call(this, t, n),
              t.on("select", function (e) {
                s._selectTriggered(e);
              }),
              t.on("unselect", function (e) {
                s._selectTriggered(e);
              }));
          }),
          (e.prototype._selectTriggered = function (e, t) {
            var n = t.originalEvent;
            (n && (n.ctrlKey || n.metaKey)) ||
              this.trigger("close", {
                originalEvent: n,
                originalSelect2Event: t,
              });
          }),
          e
        );
      }),
      u.define("select2/dropdown/dropdownCss", ["../utils"], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get("dropdownCssClass") || "";
            return (
              -1 !== e.indexOf(":all:") &&
                ((e = e.replace(":all:", "")),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define(
        "select2/dropdown/tagsSearchHighlight",
        ["../utils"],
        function (s) {
          function e() {}
          return (
            (e.prototype.highlightFirstItem = function (e) {
              var t = this.$results.find(
                ".select2-results__option--selectable:not(.select2-results__option--selected)",
              );
              if (0 < t.length) {
                var n = t.first(),
                  t = s.GetData(n[0], "data").element;
                if (
                  t &&
                  t.getAttribute &&
                  "true" === t.getAttribute("data-select2-tag")
                )
                  return void n.trigger("mouseenter");
              }
              e.call(this);
            }),
            e
          );
        },
      ),
      u.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function () {
            return "The results could not be loaded.";
          },
          inputTooLong: function (e) {
            var t = e.input.length - e.maximum,
              e = "Please delete " + t + " character";
            return (1 != t && (e += "s"), e);
          },
          inputTooShort: function (e) {
            return (
              "Please enter " +
              (e.minimum - e.input.length) +
              " or more characters"
            );
          },
          loadingMore: function () {
            return "Loading more results…";
          },
          maximumSelected: function (e) {
            var t = "You can only select " + e.maximum + " item";
            return (1 != e.maximum && (t += "s"), t);
          },
          noResults: function () {
            return "No results found";
          },
          searching: function () {
            return "Searching…";
          },
          removeAllItems: function () {
            return "Remove all items";
          },
          removeItem: function () {
            return "Remove item";
          },
          search: function () {
            return "Search";
          },
        };
      }),
      u.define(
        "select2/defaults",
        [
          "jquery",
          "./results",
          "./selection/single",
          "./selection/multiple",
          "./selection/placeholder",
          "./selection/allowClear",
          "./selection/search",
          "./selection/selectionCss",
          "./selection/eventRelay",
          "./utils",
          "./translation",
          "./diacritics",
          "./data/select",
          "./data/array",
          "./data/ajax",
          "./data/tags",
          "./data/tokenizer",
          "./data/minimumInputLength",
          "./data/maximumInputLength",
          "./data/maximumSelectionLength",
          "./dropdown",
          "./dropdown/search",
          "./dropdown/hidePlaceholder",
          "./dropdown/infiniteScroll",
          "./dropdown/attachBody",
          "./dropdown/minimumResultsForSearch",
          "./dropdown/selectOnClose",
          "./dropdown/closeOnSelect",
          "./dropdown/dropdownCss",
          "./dropdown/tagsSearchHighlight",
          "./i18n/en",
        ],
        function (
          l,
          r,
          o,
          a,
          c,
          u,
          d,
          p,
          h,
          f,
          g,
          t,
          m,
          y,
          v,
          _,
          b,
          $,
          w,
          x,
          A,
          D,
          S,
          E,
          O,
          C,
          L,
          T,
          q,
          I,
          e,
        ) {
          function n() {
            this.reset();
          }
          return (
            (n.prototype.apply = function (e) {
              var t;
              (null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                (null != e.ajax
                  ? (e.dataAdapter = v)
                  : null != e.data
                    ? (e.dataAdapter = y)
                    : (e.dataAdapter = m),
                0 < e.minimumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
                0 < e.maximumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
                0 < e.maximumSelectionLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
                e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
                (null == e.tokenSeparators && null == e.tokenizer) ||
                  (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
                null == e.resultsAdapter &&
                  ((e.resultsAdapter = r),
                  null != e.ajax &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)),
                  null != e.placeholder &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)),
                  e.selectOnClose &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)),
                  e.tags &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))),
                null == e.dropdownAdapter &&
                  (e.multiple
                    ? (e.dropdownAdapter = A)
                    : ((t = f.Decorate(A, D)), (e.dropdownAdapter = t)),
                  0 !== e.minimumResultsForSearch &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)),
                  e.closeOnSelect &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)),
                  null != e.dropdownCssClass &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)),
                  (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O))),
                null == e.selectionAdapter &&
                  (e.multiple
                    ? (e.selectionAdapter = a)
                    : (e.selectionAdapter = o),
                  null != e.placeholder &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)),
                  e.allowClear &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)),
                  e.multiple &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)),
                  null != e.selectionCssClass &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)),
                  (e.selectionAdapter = f.Decorate(e.selectionAdapter, h))),
                (e.language = this._resolveLanguage(e.language)),
                e.language.push("en"));
              for (var n = [], s = 0; s < e.language.length; s++) {
                var i = e.language[s];
                -1 === n.indexOf(i) && n.push(i);
              }
              return (
                (e.language = n),
                (e.translations = this._processTranslations(
                  e.language,
                  e.debug,
                )),
                e
              );
            }),
            (n.prototype.reset = function () {
              function a(e) {
                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                  return t[e] || e;
                });
              }
              this.defaults = {
                amdLanguageBase: "./i18n/",
                autocomplete: "off",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: f.escapeMarkup,
                language: {},
                matcher: function e(t, n) {
                  if (null == t.term || "" === t.term.trim()) return n;
                  if (n.children && 0 < n.children.length) {
                    for (
                      var s = l.extend(!0, {}, n), i = n.children.length - 1;
                      0 <= i;
                      i--
                    )
                      null == e(t, n.children[i]) && s.children.splice(i, 1);
                    return 0 < s.children.length ? s : e(t, s);
                  }
                  var r = a(n.text).toUpperCase(),
                    o = a(t.term).toUpperCase();
                  return -1 < r.indexOf(o) ? n : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                scrollAfterSelect: !1,
                sorter: function (e) {
                  return e;
                },
                templateResult: function (e) {
                  return e.text;
                },
                templateSelection: function (e) {
                  return e.text;
                },
                theme: "default",
                width: "resolve",
              };
            }),
            (n.prototype.applyFromElement = function (e, t) {
              var n = e.language,
                s = this.defaults.language,
                i = t.prop("lang"),
                t = t.closest("[lang]").prop("lang"),
                t = Array.prototype.concat.call(
                  this._resolveLanguage(i),
                  this._resolveLanguage(n),
                  this._resolveLanguage(s),
                  this._resolveLanguage(t),
                );
              return ((e.language = t), e);
            }),
            (n.prototype._resolveLanguage = function (e) {
              if (!e) return [];
              if (l.isEmptyObject(e)) return [];
              if (l.isPlainObject(e)) return [e];
              for (
                var t, n = Array.isArray(e) ? e : [e], s = [], i = 0;
                i < n.length;
                i++
              )
                (s.push(n[i]),
                  "string" == typeof n[i] &&
                    0 < n[i].indexOf("-") &&
                    ((t = n[i].split("-")[0]), s.push(t)));
              return s;
            }),
            (n.prototype._processTranslations = function (e, t) {
              for (var n = new g(), s = 0; s < e.length; s++) {
                var i = new g(),
                  r = e[s];
                if ("string" == typeof r)
                  try {
                    i = g.loadPath(r);
                  } catch (e) {
                    try {
                      ((r = this.defaults.amdLanguageBase + r),
                        (i = g.loadPath(r)));
                    } catch (e) {
                      t &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            r +
                            '" could not be automatically loaded. A fallback will be used instead.',
                        );
                    }
                  }
                else i = l.isPlainObject(r) ? new g(r) : r;
                n.extend(i);
              }
              return n;
            }),
            (n.prototype.set = function (e, t) {
              var n = {};
              n[l.camelCase(e)] = t;
              n = f._convertData(n);
              l.extend(!0, this.defaults, n);
            }),
            new n()
          );
        },
      ),
      u.define(
        "select2/options",
        ["jquery", "./defaults", "./utils"],
        function (c, n, u) {
          function e(e, t) {
            ((this.options = e),
              null != t && this.fromElement(t),
              null != t && (this.options = n.applyFromElement(this.options, t)),
              (this.options = n.apply(this.options)));
          }
          return (
            (e.prototype.fromElement = function (e) {
              var t = ["select2"];
              (null == this.options.multiple &&
                (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled &&
                  (this.options.disabled = e.prop("disabled")),
                null == this.options.autocomplete &&
                  e.prop("autocomplete") &&
                  (this.options.autocomplete = e.prop("autocomplete")),
                null == this.options.dir &&
                  (e.prop("dir")
                    ? (this.options.dir = e.prop("dir"))
                    : e.closest("[dir]").prop("dir")
                      ? (this.options.dir = e.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                u.GetData(e[0], "select2Tags") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.',
                    ),
                  u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")),
                  u.StoreData(e[0], "tags", !0)),
                u.GetData(e[0], "ajaxUrl") &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.",
                    ),
                  e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")),
                  u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl"))));
              var n = {};
              function s(e, t) {
                return t.toUpperCase();
              }
              for (var i = 0; i < e[0].attributes.length; i++) {
                var r = e[0].attributes[i].name,
                  o = "data-";
                r.substr(0, o.length) == o &&
                  ((r = r.substring(o.length)),
                  (o = u.GetData(e[0], r)),
                  (n[r.replace(/-([a-z])/g, s)] = o));
              }
              c.fn.jquery &&
                "1." == c.fn.jquery.substr(0, 2) &&
                e[0].dataset &&
                (n = c.extend(!0, {}, e[0].dataset, n));
              var a,
                l = c.extend(!0, {}, u.GetData(e[0]), n);
              for (a in (l = u._convertData(l)))
                -1 < t.indexOf(a) ||
                  (c.isPlainObject(this.options[a])
                    ? c.extend(this.options[a], l[a])
                    : (this.options[a] = l[a]));
              return this;
            }),
            (e.prototype.get = function (e) {
              return this.options[e];
            }),
            (e.prototype.set = function (e, t) {
              this.options[e] = t;
            }),
            e
          );
        },
      ),
      u.define(
        "select2/core",
        ["jquery", "./options", "./utils", "./keys"],
        function (t, i, r, s) {
          var o = function (e, t) {
            (null != r.GetData(e[0], "select2") &&
              r.GetData(e[0], "select2").destroy(),
              (this.$element = e),
              (this.id = this._generateId(e)),
              (t = t || {}),
              (this.options = new i(t, e)),
              o.__super__.constructor.call(this));
            var n = e.attr("tabindex") || 0;
            (r.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1"));
            t = this.options.get("dataAdapter");
            this.dataAdapter = new t(e, this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get("selectionAdapter");
            ((this.selection = new t(e, this.options)),
              (this.$selection = this.selection.render()),
              this.selection.position(this.$selection, n));
            t = this.options.get("dropdownAdapter");
            ((this.dropdown = new t(e, this.options)),
              (this.$dropdown = this.dropdown.render()),
              this.dropdown.position(this.$dropdown, n));
            n = this.options.get("resultsAdapter");
            ((this.results = new n(e, this.options, this.dataAdapter)),
              (this.$results = this.results.render()),
              this.results.position(this.$results, this.$dropdown));
            var s = this;
            (this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function (e) {
                s.trigger("selection:update", { data: e });
              }),
              e[0].classList.add("select2-hidden-accessible"),
              e.attr("aria-hidden", "true"),
              this._syncAttributes(),
              r.StoreData(e[0], "select2", this),
              e.data("select2", this));
          };
          return (
            r.Extend(o, r.Observable),
            (o.prototype._generateId = function (e) {
              return (
                "select2-" +
                (null != e.attr("id")
                  ? e.attr("id")
                  : null != e.attr("name")
                    ? e.attr("name") + "-" + r.generateChars(2)
                    : r.generateChars(4)
                ).replace(/(:|\.|\[|\]|,)/g, "")
              );
            }),
            (o.prototype._placeContainer = function (e) {
              e.insertAfter(this.$element);
              var t = this._resolveWidth(
                this.$element,
                this.options.get("width"),
              );
              null != t && e.css("width", t);
            }),
            (o.prototype._resolveWidth = function (e, t) {
              var n =
                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == t) {
                var s = this._resolveWidth(e, "style");
                return null != s ? s : this._resolveWidth(e, "element");
              }
              if ("element" == t) {
                s = e.outerWidth(!1);
                return s <= 0 ? "auto" : s + "px";
              }
              if ("style" != t)
                return "computedstyle" != t
                  ? t
                  : window.getComputedStyle(e[0]).width;
              e = e.attr("style");
              if ("string" != typeof e) return null;
              for (var i = e.split(";"), r = 0, o = i.length; r < o; r += 1) {
                var a = i[r].replace(/\s/g, "").match(n);
                if (null !== a && 1 <= a.length) return a[1];
              }
              return null;
            }),
            (o.prototype._bindAdapters = function () {
              (this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container));
            }),
            (o.prototype._registerDomEvents = function () {
              var t = this;
              (this.$element.on("change.select2", function () {
                t.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
              }),
                this.$element.on("focus.select2", function (e) {
                  t.trigger("focus", e);
                }),
                (this._syncA = r.bind(this._syncAttributes, this)),
                (this._syncS = r.bind(this._syncSubtree, this)),
                (this._observer = new window.MutationObserver(function (e) {
                  (t._syncA(), t._syncS(e));
                })),
                this._observer.observe(this.$element[0], {
                  attributes: !0,
                  childList: !0,
                  subtree: !1,
                }));
            }),
            (o.prototype._registerDataEvents = function () {
              var n = this;
              this.dataAdapter.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (o.prototype._registerSelectionEvents = function () {
              var n = this,
                s = ["toggle", "focus"];
              (this.selection.on("toggle", function () {
                n.toggleDropdown();
              }),
                this.selection.on("focus", function (e) {
                  n.focus(e);
                }),
                this.selection.on("*", function (e, t) {
                  -1 === s.indexOf(e) && n.trigger(e, t);
                }));
            }),
            (o.prototype._registerDropdownEvents = function () {
              var n = this;
              this.dropdown.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (o.prototype._registerResultsEvents = function () {
              var n = this;
              this.results.on("*", function (e, t) {
                n.trigger(e, t);
              });
            }),
            (o.prototype._registerEvents = function () {
              var n = this;
              (this.on("open", function () {
                n.$container[0].classList.add("select2-container--open");
              }),
                this.on("close", function () {
                  n.$container[0].classList.remove("select2-container--open");
                }),
                this.on("enable", function () {
                  n.$container[0].classList.remove(
                    "select2-container--disabled",
                  );
                }),
                this.on("disable", function () {
                  n.$container[0].classList.add("select2-container--disabled");
                }),
                this.on("blur", function () {
                  n.$container[0].classList.remove("select2-container--focus");
                }),
                this.on("query", function (t) {
                  (n.isOpen() || n.trigger("open", {}),
                    this.dataAdapter.query(t, function (e) {
                      n.trigger("results:all", { data: e, query: t });
                    }));
                }),
                this.on("query:append", function (t) {
                  this.dataAdapter.query(t, function (e) {
                    n.trigger("results:append", { data: e, query: t });
                  });
                }),
                this.on("keypress", function (e) {
                  var t = e.which;
                  n.isOpen()
                    ? t === s.ESC || (t === s.UP && e.altKey)
                      ? (n.close(e), e.preventDefault())
                      : t === s.ENTER || t === s.TAB
                        ? (n.trigger("results:select", {}), e.preventDefault())
                        : t === s.SPACE && e.ctrlKey
                          ? (n.trigger("results:toggle", {}),
                            e.preventDefault())
                          : t === s.UP
                            ? (n.trigger("results:previous", {}),
                              e.preventDefault())
                            : t === s.DOWN &&
                              (n.trigger("results:next", {}),
                              e.preventDefault())
                    : (t === s.ENTER ||
                        t === s.SPACE ||
                        (t === s.DOWN && e.altKey)) &&
                      (n.open(), e.preventDefault());
                }));
            }),
            (o.prototype._syncAttributes = function () {
              (this.options.set("disabled", this.$element.prop("disabled")),
                this.isDisabled()
                  ? (this.isOpen() && this.close(), this.trigger("disable", {}))
                  : this.trigger("enable", {}));
            }),
            (o.prototype._isChangeMutation = function (e) {
              var t = this;
              if (e.addedNodes && 0 < e.addedNodes.length) {
                for (var n = 0; n < e.addedNodes.length; n++)
                  if (e.addedNodes[n].selected) return !0;
              } else {
                if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                if (Array.isArray(e))
                  return e.some(function (e) {
                    return t._isChangeMutation(e);
                  });
              }
              return !1;
            }),
            (o.prototype._syncSubtree = function (e) {
              var e = this._isChangeMutation(e),
                t = this;
              e &&
                this.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
            }),
            (o.prototype.trigger = function (e, t) {
              var n = o.__super__.trigger,
                s = {
                  open: "opening",
                  close: "closing",
                  select: "selecting",
                  unselect: "unselecting",
                  clear: "clearing",
                };
              if ((void 0 === t && (t = {}), e in s)) {
                var i = s[e],
                  s = { prevented: !1, name: e, args: t };
                if ((n.call(this, i, s), s.prevented))
                  return void (t.prevented = !0);
              }
              n.call(this, e, t);
            }),
            (o.prototype.toggleDropdown = function () {
              this.isDisabled() || (this.isOpen() ? this.close() : this.open());
            }),
            (o.prototype.open = function () {
              this.isOpen() || this.isDisabled() || this.trigger("query", {});
            }),
            (o.prototype.close = function (e) {
              this.isOpen() && this.trigger("close", { originalEvent: e });
            }),
            (o.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (o.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            (o.prototype.isOpen = function () {
              return this.$container[0].classList.contains(
                "select2-container--open",
              );
            }),
            (o.prototype.hasFocus = function () {
              return this.$container[0].classList.contains(
                "select2-container--focus",
              );
            }),
            (o.prototype.focus = function (e) {
              this.hasFocus() ||
                (this.$container[0].classList.add("select2-container--focus"),
                this.trigger("focus", {}));
            }),
            (o.prototype.enable = function (e) {
              this.options.get("debug") &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.',
                );
              e = !(e = null == e || 0 === e.length ? [!0] : e)[0];
              this.$element.prop("disabled", e);
            }),
            (o.prototype.data = function () {
              this.options.get("debug") &&
                0 < arguments.length &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.',
                );
              var t = [];
              return (
                this.dataAdapter.current(function (e) {
                  t = e;
                }),
                t
              );
            }),
            (o.prototype.val = function (e) {
              if (
                (this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.',
                  ),
                null == e || 0 === e.length)
              )
                return this.$element.val();
              e = e[0];
              (Array.isArray(e) &&
                (e = e.map(function (e) {
                  return e.toString();
                })),
                this.$element.val(e).trigger("input").trigger("change"));
            }),
            (o.prototype.destroy = function () {
              (r.RemoveData(this.$container[0]),
                this.$container.remove(),
                this._observer.disconnect(),
                (this._observer = null),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off(".select2"),
                this.$element.attr(
                  "tabindex",
                  r.GetData(this.$element[0], "old-tabindex"),
                ),
                this.$element[0].classList.remove("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                r.RemoveData(this.$element[0]),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null));
            }),
            (o.prototype.render = function () {
              var e = t(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>',
              );
              return (
                e.attr("dir", this.options.get("dir")),
                (this.$container = e),
                this.$container[0].classList.add(
                  "select2-container--" + this.options.get("theme"),
                ),
                r.StoreData(e[0], "element", this.$element),
                e
              );
            }),
            o
          );
        },
      ),
      u.define("jquery-mousewheel", ["jquery"], function (e) {
        return e;
      }),
      u.define(
        "jquery.select2",
        [
          "jquery",
          "jquery-mousewheel",
          "./select2/core",
          "./select2/defaults",
          "./select2/utils",
        ],
        function (i, e, r, t, o) {
          var a;
          return (
            null == i.fn.select2 &&
              ((a = ["open", "close", "destroy"]),
              (i.fn.select2 = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var e = i.extend(!0, {}, t);
                      new r(i(this), e);
                    }),
                    this
                  );
                if ("string" != typeof t)
                  throw new Error("Invalid arguments for Select2: " + t);
                var n,
                  s = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function () {
                    var e = o.GetData(this, "select2");
                    (null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2.",
                      ),
                      (n = e[t].apply(e, s)));
                  }),
                  -1 < a.indexOf(t) ? this : n
                );
              })),
            null == i.fn.select2.defaults && (i.fn.select2.defaults = t),
            r
          );
        },
      ),
      { define: u.define, require: u.require });
  function b(e, t) {
    return i.call(e, t);
  }
  function l(e, t) {
    var n,
      s,
      i,
      r,
      o,
      a,
      l,
      c,
      u,
      d,
      p = t && t.split("/"),
      h = y.map,
      f = (h && h["*"]) || {};
    if (e) {
      for (
        t = (e = e.split("/")).length - 1,
          y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")),
          "." === e[0].charAt(0) &&
            p &&
            (e = p.slice(0, p.length - 1).concat(e)),
          c = 0;
        c < e.length;
        c++
      )
        "." === (d = e[c])
          ? (e.splice(c, 1), --c)
          : ".." === d &&
            (0 === c ||
              (1 === c && ".." === e[2]) ||
              ".." === e[c - 1] ||
              (0 < c && (e.splice(c - 1, 2), (c -= 2))));
      e = e.join("/");
    }
    if ((p || f) && h) {
      for (c = (n = e.split("/")).length; 0 < c; --c) {
        if (((s = n.slice(0, c).join("/")), p))
          for (u = p.length; 0 < u; --u)
            if (((i = h[p.slice(0, u).join("/")]), (i = i && i[s]))) {
              ((r = i), (o = c));
              break;
            }
        if (r) break;
        !a && f && f[s] && ((a = f[s]), (l = c));
      }
      (!r && a && ((r = a), (o = l)),
        r && (n.splice(0, o, r), (e = n.join("/"))));
    }
    return e;
  }
  function w(t, n) {
    return function () {
      var e = a.call(arguments, 0);
      return (
        "string" != typeof e[0] && 1 === e.length && e.push(null),
        o.apply(p, e.concat([t, n]))
      );
    };
  }
  function x(e) {
    var t;
    if (
      (b(m, e) && ((t = m[e]), delete m[e], (v[e] = !0), r.apply(p, t)),
      !b(g, e) && !b(v, e))
    )
      throw new Error("No " + e);
    return g[e];
  }
  function c(e) {
    var t,
      n = e ? e.indexOf("!") : -1;
    return (
      -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
      [t, e]
    );
  }
  function A(e) {
    return e ? c(e) : [];
  }
  var u = s.require("jquery.select2");
  return ((t.fn.select2.amd = s), u);
});

/*!
 * Datepicker for Bootstrap v1.10.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 */

!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a("object" == typeof exports ? require("jquery") : jQuery);
})(function (a, b) {
  function c() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function d() {
    var a = new Date();
    return c(a.getFullYear(), a.getMonth(), a.getDate());
  }
  function e(a, b) {
    return (
      a.getUTCFullYear() === b.getUTCFullYear() &&
      a.getUTCMonth() === b.getUTCMonth() &&
      a.getUTCDate() === b.getUTCDate()
    );
  }
  function f(c, d) {
    return function () {
      return (
        d !== b && a.fn.datepicker.deprecated(d),
        this[c].apply(this, arguments)
      );
    };
  }
  function g(a) {
    return a && !isNaN(a.getTime());
  }
  function h(b, c) {
    function d(a, b) {
      return b.toLowerCase();
    }
    var e,
      f = a(b).data(),
      g = {},
      h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
    c = new RegExp("^" + c.toLowerCase());
    for (var i in f) c.test(i) && ((e = i.replace(h, d)), (g[e] = f[i]));
    return g;
  }
  function i(b) {
    var c = {};
    if (q[b] || ((b = b.split("-")[0]), q[b])) {
      var d = q[b];
      return (
        a.each(p, function (a, b) {
          b in d && (c[b] = d[b]);
        }),
        c
      );
    }
  }
  var j = (function () {
      var b = {
        get: function (a) {
          return this.slice(a)[0];
        },
        contains: function (a) {
          for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++)
            if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5)
              return c;
          return -1;
        },
        remove: function (a) {
          this.splice(a, 1);
        },
        replace: function (a) {
          a &&
            (Array.isArray(a) || (a = [a]),
            this.clear(),
            this.push.apply(this, a));
        },
        clear: function () {
          this.length = 0;
        },
        copy: function () {
          var a = new j();
          return (a.replace(this), a);
        },
      };
      return function () {
        var c = [];
        return (c.push.apply(c, arguments), a.extend(c, b), c);
      };
    })(),
    k = function (b, c) {
      (a.data(b, "datepicker", this),
        (this._events = []),
        (this._secondaryEvents = []),
        this._process_options(c),
        (this.dates = new j()),
        (this.viewDate = this.o.defaultViewDate),
        (this.focusDate = null),
        (this.element = a(b)),
        (this.isInput = this.element.is("input")),
        (this.inputField = this.isInput
          ? this.element
          : this.element.find("input")),
        (this.component =
          !!this.element.hasClass("date") &&
          this.element.find(
            ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn",
          )),
        this.component && 0 === this.component.length && (this.component = !1),
        null === this.o.isInline
          ? (this.isInline = !this.component && !this.isInput)
          : (this.isInline = this.o.isInline),
        (this.picker = a(r.template)),
        this._check_template(this.o.templates.leftArrow) &&
          this.picker.find(".prev").html(this.o.templates.leftArrow),
        this._check_template(this.o.templates.rightArrow) &&
          this.picker.find(".next").html(this.o.templates.rightArrow),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline
          ? this.picker.addClass("datepicker-inline").appendTo(this.element)
          : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
        this.o.calendarWeeks &&
          this.picker
            .find(
              ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear",
            )
            .attr("colspan", function (a, b) {
              return Number(b) + 1;
            }),
        this._process_options({
          startDate: this._o.startDate,
          endDate: this._o.endDate,
          daysOfWeekDisabled: this.o.daysOfWeekDisabled,
          daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
          datesDisabled: this.o.datesDisabled,
        }),
        (this._allow_update = !1),
        this.setViewMode(this.o.startView),
        (this._allow_update = !0),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.isInline && this.show());
    };
  k.prototype = {
    constructor: k,
    _resolveViewName: function (b) {
      return (
        a.each(r.viewModes, function (c, d) {
          if (b === c || -1 !== a.inArray(b, d.names)) return ((b = c), !1);
        }),
        b
      );
    },
    _resolveDaysOfWeek: function (b) {
      return (Array.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number));
    },
    _check_template: function (c) {
      try {
        if (c === b || "" === c) return !1;
        if ((c.match(/[<>]/g) || []).length <= 0) return !0;
        return a(c).length > 0;
      } catch (a) {
        return !1;
      }
    },
    _process_options: function (b) {
      this._o = a.extend({}, this._o, b);
      var e = (this.o = a.extend({}, this._o)),
        f = e.language;
      (q[f] || ((f = f.split("-")[0]), q[f] || (f = o.language)),
        (e.language = f),
        (e.startView = this._resolveViewName(e.startView)),
        (e.minViewMode = this._resolveViewName(e.minViewMode)),
        (e.maxViewMode = this._resolveViewName(e.maxViewMode)),
        (e.startView = Math.max(
          this.o.minViewMode,
          Math.min(this.o.maxViewMode, e.startView),
        )),
        !0 !== e.multidate &&
          ((e.multidate = Number(e.multidate) || !1),
          !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate))),
        (e.multidateSeparator = String(e.multidateSeparator)),
        (e.weekStart %= 7),
        (e.weekEnd = (e.weekStart + 6) % 7));
      var g = r.parseFormat(e.format);
      (e.startDate !== -1 / 0 &&
        (e.startDate
          ? e.startDate instanceof Date
            ? (e.startDate = this._local_to_utc(this._zero_time(e.startDate)))
            : (e.startDate = r.parseDate(
                e.startDate,
                g,
                e.language,
                e.assumeNearbyYear,
              ))
          : (e.startDate = -1 / 0)),
        e.endDate !== 1 / 0 &&
          (e.endDate
            ? e.endDate instanceof Date
              ? (e.endDate = this._local_to_utc(this._zero_time(e.endDate)))
              : (e.endDate = r.parseDate(
                  e.endDate,
                  g,
                  e.language,
                  e.assumeNearbyYear,
                ))
            : (e.endDate = 1 / 0)),
        (e.daysOfWeekDisabled = this._resolveDaysOfWeek(
          e.daysOfWeekDisabled || [],
        )),
        (e.daysOfWeekHighlighted = this._resolveDaysOfWeek(
          e.daysOfWeekHighlighted || [],
        )),
        (e.datesDisabled = e.datesDisabled || []),
        Array.isArray(e.datesDisabled) ||
          (e.datesDisabled = e.datesDisabled.split(",")),
        (e.datesDisabled = a.map(e.datesDisabled, function (a) {
          return r.parseDate(a, g, e.language, e.assumeNearbyYear);
        })));
      var h = String(e.orientation).toLowerCase().split(/\s+/g),
        i = e.orientation.toLowerCase();
      if (
        ((h = a.grep(h, function (a) {
          return /^auto|left|right|top|bottom$/.test(a);
        })),
        (e.orientation = { x: "auto", y: "auto" }),
        i && "auto" !== i)
      )
        if (1 === h.length)
          switch (h[0]) {
            case "top":
            case "bottom":
              e.orientation.y = h[0];
              break;
            case "left":
            case "right":
              e.orientation.x = h[0];
          }
        else
          ((i = a.grep(h, function (a) {
            return /^left|right$/.test(a);
          })),
            (e.orientation.x = i[0] || "auto"),
            (i = a.grep(h, function (a) {
              return /^top|bottom$/.test(a);
            })),
            (e.orientation.y = i[0] || "auto"));
      else;
      if (
        e.defaultViewDate instanceof Date ||
        "string" == typeof e.defaultViewDate
      )
        e.defaultViewDate = r.parseDate(
          e.defaultViewDate,
          g,
          e.language,
          e.assumeNearbyYear,
        );
      else if (e.defaultViewDate) {
        var j = e.defaultViewDate.year || new Date().getFullYear(),
          k = e.defaultViewDate.month || 0,
          l = e.defaultViewDate.day || 1;
        e.defaultViewDate = c(j, k, l);
      } else e.defaultViewDate = d();
    },
    _applyEvents: function (a) {
      for (var c, d, e, f = 0; f < a.length; f++)
        ((c = a[f][0]),
          2 === a[f].length
            ? ((d = b), (e = a[f][1]))
            : 3 === a[f].length && ((d = a[f][1]), (e = a[f][2])),
          c.on(e, d));
    },
    _unapplyEvents: function (a) {
      for (var c, d, e, f = 0; f < a.length; f++)
        ((c = a[f][0]),
          2 === a[f].length
            ? ((e = b), (d = a[f][1]))
            : 3 === a[f].length && ((e = a[f][1]), (d = a[f][2])),
          c.off(d, e));
    },
    _buildEvents: function () {
      var b = {
        keyup: a.proxy(function (b) {
          -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
            this.update();
        }, this),
        keydown: a.proxy(this.keydown, this),
        paste: a.proxy(this.paste, this),
      };
      (!0 === this.o.showOnFocus && (b.focus = a.proxy(this.show, this)),
        this.isInput
          ? (this._events = [[this.element, b]])
          : this.component && this.inputField.length
            ? (this._events = [
                [this.inputField, b],
                [this.component, { click: a.proxy(this.show, this) }],
              ])
            : (this._events = [
                [
                  this.element,
                  {
                    click: a.proxy(this.show, this),
                    keydown: a.proxy(this.keydown, this),
                  },
                ],
              ]),
        this._events.push(
          [
            this.element,
            "*",
            {
              blur: a.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ],
          [
            this.element,
            {
              blur: a.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ],
        ),
        this.o.immediateUpdates &&
          this._events.push([
            this.element,
            {
              "changeYear changeMonth": a.proxy(function (a) {
                this.update(a.date);
              }, this),
            },
          ]),
        (this._secondaryEvents = [
          [this.picker, { click: a.proxy(this.click, this) }],
          [
            this.picker,
            ".prev, .next",
            { click: a.proxy(this.navArrowsClick, this) },
          ],
          [
            this.picker,
            ".day:not(.disabled)",
            { click: a.proxy(this.dayCellClick, this) },
          ],
          [a(window), { resize: a.proxy(this.place, this) }],
          [
            a(document),
            {
              "mousedown touchstart": a.proxy(function (a) {
                this.element.is(a.target) ||
                  this.element.find(a.target).length ||
                  this.picker.is(a.target) ||
                  this.picker.find(a.target).length ||
                  this.isInline ||
                  this.hide();
              }, this),
            },
          ],
        ]));
    },
    _attachEvents: function () {
      (this._detachEvents(), this._applyEvents(this._events));
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function () {
      (this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents));
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function (b, c) {
      var d = c || this.dates.get(-1),
        e = this._utc_to_local(d);
      this.element.trigger({
        type: b,
        date: e,
        viewMode: this.viewMode,
        dates: a.map(this.dates, this._utc_to_local),
        format: a.proxy(function (a, b) {
          (0 === arguments.length
            ? ((a = this.dates.length - 1), (b = this.o.format))
            : "string" == typeof a && ((b = a), (a = this.dates.length - 1)),
            (b = b || this.o.format));
          var c = this.dates.get(a);
          return r.formatDate(c, b, this.o.language);
        }, this),
      });
    },
    show: function () {
      if (
        !(
          this.inputField.is(":disabled") ||
          (this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)
        )
      )
        return (
          this.isInline || this.picker.appendTo(this.o.container),
          this.place(),
          this.picker.show(),
          this._attachSecondaryEvents(),
          this._trigger("show"),
          (window.navigator.msMaxTouchPoints || "ontouchstart" in document) &&
            this.o.disableTouchKeyboard &&
            a(this.element).blur(),
          this
        );
    },
    hide: function () {
      return this.isInline || !this.picker.is(":visible")
        ? this
        : ((this.focusDate = null),
          this.picker.hide().detach(),
          this._detachSecondaryEvents(),
          this.setViewMode(this.o.startView),
          this.o.forceParse && this.inputField.val() && this.setValue(),
          this._trigger("hide"),
          this);
    },
    destroy: function () {
      return (
        this.hide(),
        this._detachEvents(),
        this._detachSecondaryEvents(),
        this.picker.remove(),
        delete this.element.data().datepicker,
        this.isInput || delete this.element.data().date,
        this
      );
    },
    paste: function (b) {
      var c;
      if (
        b.originalEvent.clipboardData &&
        b.originalEvent.clipboardData.types &&
        -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types)
      )
        c = b.originalEvent.clipboardData.getData("text/plain");
      else {
        if (!window.clipboardData) return;
        c = window.clipboardData.getData("Text");
      }
      (this.setDate(c), this.update(), b.preventDefault());
    },
    _utc_to_local: function (a) {
      if (!a) return a;
      var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
      return (
        b.getTimezoneOffset() !== a.getTimezoneOffset() &&
          (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())),
        b
      );
    },
    _local_to_utc: function (a) {
      return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
    },
    _zero_time: function (a) {
      return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
    },
    _zero_utc_time: function (a) {
      return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    },
    getDates: function () {
      return a.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function () {
      return a.map(this.dates, function (a) {
        return new Date(a);
      });
    },
    getDate: function () {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function () {
      var a = this.dates.get(-1);
      return a !== b ? new Date(a) : null;
    },
    clearDates: function () {
      (this.inputField.val(""),
        this._trigger("changeDate"),
        this.update(),
        this.o.autoclose && this.hide());
    },
    setDates: function () {
      var a = Array.isArray(arguments[0]) ? arguments[0] : arguments;
      return (
        this.update.apply(this, a),
        this._trigger("changeDate"),
        this.setValue(),
        this
      );
    },
    setUTCDates: function () {
      var b = Array.isArray(arguments[0]) ? arguments[0] : arguments;
      return (this.setDates.apply(this, a.map(b, this._utc_to_local)), this);
    },
    setDate: f("setDates"),
    setUTCDate: f("setUTCDates"),
    remove: f(
      "destroy",
      "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead",
    ),
    setValue: function () {
      var a = this.getFormattedDate();
      return (this.inputField.val(a), this);
    },
    getFormattedDate: function (c) {
      c === b && (c = this.o.format);
      var d = this.o.language;
      return a
        .map(this.dates, function (a) {
          return r.formatDate(a, c, d);
        })
        .join(this.o.multidateSeparator);
    },
    getStartDate: function () {
      return this.o.startDate;
    },
    setStartDate: function (a) {
      return (
        this._process_options({ startDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    getEndDate: function () {
      return this.o.endDate;
    },
    setEndDate: function (a) {
      return (
        this._process_options({ endDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    setDaysOfWeekDisabled: function (a) {
      return (
        this._process_options({ daysOfWeekDisabled: a }),
        this.update(),
        this
      );
    },
    setDaysOfWeekHighlighted: function (a) {
      return (
        this._process_options({ daysOfWeekHighlighted: a }),
        this.update(),
        this
      );
    },
    setDatesDisabled: function (a) {
      return (this._process_options({ datesDisabled: a }), this.update(), this);
    },
    place: function () {
      if (this.isInline) return this;
      var b = this.picker.outerWidth(),
        c = this.picker.outerHeight(),
        d = a(this.o.container),
        e = d.width(),
        f =
          "body" === this.o.container ? a(document).scrollTop() : d.scrollTop(),
        g = d.offset(),
        h = [0];
      this.element.parents().each(function () {
        var b = a(this).css("z-index");
        "auto" !== b && 0 !== Number(b) && h.push(Number(b));
      });
      var i = Math.max.apply(Math, h) + this.o.zIndexOffset,
        j = this.component
          ? this.component.parent().offset()
          : this.element.offset(),
        k = this.component
          ? this.component.outerHeight(!0)
          : this.element.outerHeight(!1),
        l = this.component
          ? this.component.outerWidth(!0)
          : this.element.outerWidth(!1),
        m = j.left - g.left,
        n = j.top - g.top;
      ("body" !== this.o.container && (n += f),
        this.picker.removeClass(
          "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left",
        ),
        "auto" !== this.o.orientation.x
          ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
            "right" === this.o.orientation.x && (m -= b - l))
          : j.left < 0
            ? (this.picker.addClass("datepicker-orient-left"),
              (m -= j.left - 10))
            : m + b > e
              ? (this.picker.addClass("datepicker-orient-right"), (m += l - b))
              : this.o.rtl
                ? this.picker.addClass("datepicker-orient-right")
                : this.picker.addClass("datepicker-orient-left"));
      var o,
        p = this.o.orientation.y;
      if (
        ("auto" === p && ((o = -f + n - c), (p = o < 0 ? "bottom" : "top")),
        this.picker.addClass("datepicker-orient-" + p),
        "top" === p
          ? (n -= c + parseInt(this.picker.css("padding-top")))
          : (n += k),
        this.o.rtl)
      ) {
        var q = e - (m + l);
        this.picker.css({ top: n, right: q, zIndex: i });
      } else this.picker.css({ top: n, left: m, zIndex: i });
      return this;
    },
    _allow_update: !0,
    update: function () {
      if (!this._allow_update) return this;
      var b = this.dates.copy(),
        c = [],
        d = !1;
      return (
        arguments.length
          ? (a.each(
              arguments,
              a.proxy(function (a, b) {
                (b instanceof Date && (b = this._local_to_utc(b)), c.push(b));
              }, this),
            ),
            (d = !0))
          : ((c = this.isInput
              ? this.element.val()
              : this.element.data("date") || this.inputField.val()),
            (c =
              c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c]),
            delete this.element.data().date),
        (c = a.map(
          c,
          a.proxy(function (a) {
            return r.parseDate(
              a,
              this.o.format,
              this.o.language,
              this.o.assumeNearbyYear,
            );
          }, this),
        )),
        (c = a.grep(
          c,
          a.proxy(function (a) {
            return !this.dateWithinRange(a) || !a;
          }, this),
          !0,
        )),
        this.dates.replace(c),
        this.o.updateViewDate &&
          (this.dates.length
            ? (this.viewDate = new Date(this.dates.get(-1)))
            : this.viewDate < this.o.startDate
              ? (this.viewDate = new Date(this.o.startDate))
              : this.viewDate > this.o.endDate
                ? (this.viewDate = new Date(this.o.endDate))
                : (this.viewDate = this.o.defaultViewDate)),
        d
          ? (this.setValue(), this.element.change())
          : this.dates.length &&
            String(b) !== String(this.dates) &&
            d &&
            (this._trigger("changeDate"), this.element.change()),
        !this.dates.length &&
          b.length &&
          (this._trigger("clearDate"), this.element.change()),
        this.fill(),
        this
      );
    },
    fillDow: function () {
      if (this.o.showWeekDays) {
        var b = this.o.weekStart,
          c = "<tr>";
        for (
          this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>');
          b < this.o.weekStart + 7;
        )
          ((c += '<th class="dow'),
            -1 !== a.inArray(b, this.o.daysOfWeekDisabled) &&
              (c += " disabled"),
            (c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>"));
        ((c += "</tr>"), this.picker.find(".datepicker-days thead").append(c));
      }
    },
    fillMonths: function () {
      for (
        var a, b = this._utc_to_local(this.viewDate), c = "", d = 0;
        d < 12;
        d++
      )
        ((a = b && b.getMonth() === d ? " focused" : ""),
          (c +=
            '<span class="month' +
            a +
            '">' +
            q[this.o.language].monthsShort[d] +
            "</span>"));
      this.picker.find(".datepicker-months td").html(c);
    },
    setRange: function (b) {
      (b && b.length
        ? (this.range = a.map(b, function (a) {
            return a.valueOf();
          }))
        : delete this.range,
        this.fill());
    },
    getClassNames: function (b) {
      var c = [],
        f = this.viewDate.getUTCFullYear(),
        g = this.viewDate.getUTCMonth(),
        h = d();
      return (
        b.getUTCFullYear() < f ||
        (b.getUTCFullYear() === f && b.getUTCMonth() < g)
          ? c.push("old")
          : (b.getUTCFullYear() > f ||
              (b.getUTCFullYear() === f && b.getUTCMonth() > g)) &&
            c.push("new"),
        this.focusDate &&
          b.valueOf() === this.focusDate.valueOf() &&
          c.push("focused"),
        this.o.todayHighlight && e(b, h) && c.push("today"),
        -1 !== this.dates.contains(b) && c.push("active"),
        this.dateWithinRange(b) || c.push("disabled"),
        this.dateIsDisabled(b) && c.push("disabled", "disabled-date"),
        -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) &&
          c.push("highlighted"),
        this.range &&
          (b > this.range[0] &&
            b < this.range[this.range.length - 1] &&
            c.push("range"),
          -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"),
          b.valueOf() === this.range[0] && c.push("range-start"),
          b.valueOf() === this.range[this.range.length - 1] &&
            c.push("range-end")),
        c
      );
    },
    _fill_yearsView: function (c, d, e, f, g, h, i) {
      for (
        var j,
          k,
          l,
          m = "",
          n = e / 10,
          o = this.picker.find(c),
          p = Math.floor(f / e) * e,
          q = p + 9 * n,
          r = Math.floor(this.viewDate.getFullYear() / n) * n,
          s = a.map(this.dates, function (a) {
            return Math.floor(a.getUTCFullYear() / n) * n;
          }),
          t = p - n;
        t <= q + n;
        t += n
      )
        ((j = [d]),
          (k = null),
          t === p - n ? j.push("old") : t === q + n && j.push("new"),
          -1 !== a.inArray(t, s) && j.push("active"),
          (t < g || t > h) && j.push("disabled"),
          t === r && j.push("focused"),
          i !== a.noop &&
            ((l = i(new Date(t, 0, 1))),
            l === b
              ? (l = {})
              : "boolean" == typeof l
                ? (l = { enabled: l })
                : "string" == typeof l && (l = { classes: l }),
            !1 === l.enabled && j.push("disabled"),
            l.classes && (j = j.concat(l.classes.split(/\s+/))),
            l.tooltip && (k = l.tooltip)),
          (m +=
            '<span class="' +
            j.join(" ") +
            '"' +
            (k ? ' title="' + k + '"' : "") +
            ">" +
            t +
            "</span>"));
      (o.find(".datepicker-switch").text(p + "-" + q), o.find("td").html(m));
    },
    fill: function () {
      var e,
        f,
        g = new Date(this.viewDate),
        h = g.getUTCFullYear(),
        i = g.getUTCMonth(),
        j =
          this.o.startDate !== -1 / 0
            ? this.o.startDate.getUTCFullYear()
            : -1 / 0,
        k =
          this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        m = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        n = q[this.o.language].today || q.en.today || "",
        o = q[this.o.language].clear || q.en.clear || "",
        p = q[this.o.language].titleFormat || q.en.titleFormat,
        s = d(),
        t =
          (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) &&
          s >= this.o.startDate &&
          s <= this.o.endDate &&
          !this.weekOfDateIsDisabled(s);
      if (!isNaN(h) && !isNaN(i)) {
        (this.picker
          .find(".datepicker-days .datepicker-switch")
          .text(r.formatDate(g, p, this.o.language)),
          this.picker
            .find("tfoot .today")
            .text(n)
            .css("display", t ? "table-cell" : "none"),
          this.picker
            .find("tfoot .clear")
            .text(o)
            .css("display", !0 === this.o.clearBtn ? "table-cell" : "none"),
          this.picker
            .find("thead .datepicker-title")
            .text(this.o.title)
            .css(
              "display",
              "string" == typeof this.o.title && "" !== this.o.title
                ? "table-cell"
                : "none",
            ),
          this.updateNavArrows(),
          this.fillMonths());
        var u = c(h, i, 0),
          v = u.getUTCDate();
        u.setUTCDate(v - ((u.getUTCDay() - this.o.weekStart + 7) % 7));
        var w = new Date(u);
        (u.getUTCFullYear() < 100 && w.setUTCFullYear(u.getUTCFullYear()),
          w.setUTCDate(w.getUTCDate() + 42),
          (w = w.valueOf()));
        for (var x, y, z = []; u.valueOf() < w; ) {
          if (
            (x = u.getUTCDay()) === this.o.weekStart &&
            (z.push("<tr>"), this.o.calendarWeeks)
          ) {
            var A = new Date(+u + ((this.o.weekStart - x - 7) % 7) * 864e5),
              B = new Date(Number(A) + ((11 - A.getUTCDay()) % 7) * 864e5),
              C = new Date(
                Number((C = c(B.getUTCFullYear(), 0, 1))) +
                  ((11 - C.getUTCDay()) % 7) * 864e5,
              ),
              D = (B - C) / 864e5 / 7 + 1;
            z.push('<td class="cw">' + D + "</td>");
          }
          ((y = this.getClassNames(u)), y.push("day"));
          var E = u.getUTCDate();
          (this.o.beforeShowDay !== a.noop &&
            ((f = this.o.beforeShowDay(this._utc_to_local(u))),
            f === b
              ? (f = {})
              : "boolean" == typeof f
                ? (f = { enabled: f })
                : "string" == typeof f && (f = { classes: f }),
            !1 === f.enabled && y.push("disabled"),
            f.classes && (y = y.concat(f.classes.split(/\s+/))),
            f.tooltip && (e = f.tooltip),
            f.content && (E = f.content)),
            (y =
              "function" == typeof a.uniqueSort
                ? a.uniqueSort(y)
                : a.unique(y)),
            z.push(
              '<td class="' +
                y.join(" ") +
                '"' +
                (e ? ' title="' + e + '"' : "") +
                ' data-date="' +
                u.getTime().toString() +
                '">' +
                E +
                "</td>",
            ),
            (e = null),
            x === this.o.weekEnd && z.push("</tr>"),
            u.setUTCDate(u.getUTCDate() + 1));
        }
        this.picker.find(".datepicker-days tbody").html(z.join(""));
        var F = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
          G = this.picker
            .find(".datepicker-months")
            .find(".datepicker-switch")
            .text(this.o.maxViewMode < 2 ? F : h)
            .end()
            .find("tbody span")
            .removeClass("active");
        if (
          (a.each(this.dates, function (a, b) {
            b.getUTCFullYear() === h &&
              G.eq(b.getUTCMonth()).addClass("active");
          }),
          (h < j || h > l) && G.addClass("disabled"),
          h === j && G.slice(0, k).addClass("disabled"),
          h === l && G.slice(m + 1).addClass("disabled"),
          this.o.beforeShowMonth !== a.noop)
        ) {
          var H = this;
          a.each(G, function (c, d) {
            var e = new Date(h, c, 1),
              f = H.o.beforeShowMonth(e);
            (f === b
              ? (f = {})
              : "boolean" == typeof f
                ? (f = { enabled: f })
                : "string" == typeof f && (f = { classes: f }),
              !1 !== f.enabled ||
                a(d).hasClass("disabled") ||
                a(d).addClass("disabled"),
              f.classes && a(d).addClass(f.classes),
              f.tooltip && a(d).prop("title", f.tooltip));
          });
        }
        (this._fill_yearsView(
          ".datepicker-years",
          "year",
          10,
          h,
          j,
          l,
          this.o.beforeShowYear,
        ),
          this._fill_yearsView(
            ".datepicker-decades",
            "decade",
            100,
            h,
            j,
            l,
            this.o.beforeShowDecade,
          ),
          this._fill_yearsView(
            ".datepicker-centuries",
            "century",
            1e3,
            h,
            j,
            l,
            this.o.beforeShowCentury,
          ));
      }
    },
    updateNavArrows: function () {
      if (this._allow_update) {
        var a,
          b,
          c = new Date(this.viewDate),
          d = c.getUTCFullYear(),
          e = c.getUTCMonth(),
          f =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCFullYear()
              : -1 / 0,
          g =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCMonth()
              : -1 / 0,
          h =
            this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          j = 1;
        switch (this.viewMode) {
          case 4:
            j *= 10;
          case 3:
            j *= 10;
          case 2:
            j *= 10;
          case 1:
            ((a = Math.floor(d / j) * j <= f),
              (b = Math.floor(d / j) * j + j > h));
            break;
          case 0:
            ((a = d <= f && e <= g), (b = d >= h && e >= i));
        }
        (this.picker.find(".prev").toggleClass("disabled", a),
          this.picker.find(".next").toggleClass("disabled", b));
      }
    },
    click: function (b) {
      (b.preventDefault(), b.stopPropagation());
      var e, f, g, h;
      ((e = a(b.target)),
        e.hasClass("datepicker-switch") &&
          this.viewMode !== this.o.maxViewMode &&
          this.setViewMode(this.viewMode + 1),
        e.hasClass("today") &&
          !e.hasClass("day") &&
          (this.setViewMode(0),
          this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")),
        e.hasClass("clear") && this.clearDates(),
        e.hasClass("disabled") ||
          ((e.hasClass("month") ||
            e.hasClass("year") ||
            e.hasClass("decade") ||
            e.hasClass("century")) &&
            (this.viewDate.setUTCDate(1),
            (f = 1),
            1 === this.viewMode
              ? ((h = e.parent().find("span").index(e)),
                (g = this.viewDate.getUTCFullYear()),
                this.viewDate.setUTCMonth(h))
              : ((h = 0),
                (g = Number(e.text())),
                this.viewDate.setUTCFullYear(g)),
            this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate),
            this.viewMode === this.o.minViewMode
              ? this._setDate(c(g, h, f))
              : (this.setViewMode(this.viewMode - 1), this.fill()))),
        this.picker.is(":visible") &&
          this._focused_from &&
          this._focused_from.focus(),
        delete this._focused_from);
    },
    dayCellClick: function (b) {
      var c = a(b.currentTarget),
        d = c.data("date"),
        e = new Date(d);
      (this.o.updateViewDate &&
        (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
          this._trigger("changeYear", this.viewDate),
        e.getUTCMonth() !== this.viewDate.getUTCMonth() &&
          this._trigger("changeMonth", this.viewDate)),
        this._setDate(e));
    },
    navArrowsClick: function (b) {
      var c = a(b.currentTarget),
        d = c.hasClass("prev") ? -1 : 1;
      (0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep),
        (this.viewDate = this.moveMonth(this.viewDate, d)),
        this._trigger(r.viewModes[this.viewMode].e, this.viewDate),
        this.fill());
    },
    _toggle_multidate: function (a) {
      var b = this.dates.contains(a);
      if (
        (a || this.dates.clear(),
        -1 !== b
          ? (!0 === this.o.multidate ||
              this.o.multidate > 1 ||
              this.o.toggleActive) &&
            this.dates.remove(b)
          : !1 === this.o.multidate
            ? (this.dates.clear(), this.dates.push(a))
            : this.dates.push(a),
        "number" == typeof this.o.multidate)
      )
        for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
    },
    _setDate: function (a, b) {
      ((b && "date" !== b) || this._toggle_multidate(a && new Date(a)),
        ((!b && this.o.updateViewDate) || "view" === b) &&
          (this.viewDate = a && new Date(a)),
        this.fill(),
        this.setValue(),
        (b && "view" === b) || this._trigger("changeDate"),
        this.inputField.trigger("change"),
        !this.o.autoclose || (b && "date" !== b) || this.hide());
    },
    moveDay: function (a, b) {
      var c = new Date(a);
      return (c.setUTCDate(a.getUTCDate() + b), c);
    },
    moveWeek: function (a, b) {
      return this.moveDay(a, 7 * b);
    },
    moveMonth: function (a, b) {
      if (!g(a)) return this.o.defaultViewDate;
      if (!b) return a;
      var c,
        d,
        e = new Date(a.valueOf()),
        f = e.getUTCDate(),
        h = e.getUTCMonth(),
        i = Math.abs(b);
      if (((b = b > 0 ? 1 : -1), 1 === i))
        ((d =
          -1 === b
            ? function () {
                return e.getUTCMonth() === h;
              }
            : function () {
                return e.getUTCMonth() !== c;
              }),
          (c = h + b),
          e.setUTCMonth(c),
          (c = (c + 12) % 12));
      else {
        for (var j = 0; j < i; j++) e = this.moveMonth(e, b);
        ((c = e.getUTCMonth()),
          e.setUTCDate(f),
          (d = function () {
            return c !== e.getUTCMonth();
          }));
      }
      for (; d(); ) (e.setUTCDate(--f), e.setUTCMonth(c));
      return e;
    },
    moveYear: function (a, b) {
      return this.moveMonth(a, 12 * b);
    },
    moveAvailableDate: function (a, b, c) {
      do {
        if (((a = this[c](a, b)), !this.dateWithinRange(a))) return !1;
        c = "moveDay";
      } while (this.dateIsDisabled(a));
      return a;
    },
    weekOfDateIsDisabled: function (b) {
      return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled);
    },
    dateIsDisabled: function (b) {
      return (
        this.weekOfDateIsDisabled(b) ||
        a.grep(this.o.datesDisabled, function (a) {
          return e(b, a);
        }).length > 0
      );
    },
    dateWithinRange: function (a) {
      return a >= this.o.startDate && a <= this.o.endDate;
    },
    keydown: function (a) {
      if (!this.picker.is(":visible"))
        return void (
          (40 !== a.keyCode && 27 !== a.keyCode) ||
          (this.show(), a.stopPropagation())
        );
      var b,
        c,
        d = !1,
        e = this.focusDate || this.viewDate;
      switch (a.keyCode) {
        case 27:
          (this.focusDate
            ? ((this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill())
            : this.hide(),
            a.preventDefault(),
            a.stopPropagation());
          break;
        case 37:
        case 38:
        case 39:
        case 40:
          if (
            !this.o.keyboardNavigation ||
            7 === this.o.daysOfWeekDisabled.length
          )
            break;
          ((b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1),
            0 === this.viewMode
              ? a.ctrlKey
                ? (c = this.moveAvailableDate(e, b, "moveYear")) &&
                  this._trigger("changeYear", this.viewDate)
                : a.shiftKey
                  ? (c = this.moveAvailableDate(e, b, "moveMonth")) &&
                    this._trigger("changeMonth", this.viewDate)
                  : 37 === a.keyCode || 39 === a.keyCode
                    ? (c = this.moveAvailableDate(e, b, "moveDay"))
                    : this.weekOfDateIsDisabled(e) ||
                      (c = this.moveAvailableDate(e, b, "moveWeek"))
              : 1 === this.viewMode
                ? ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                  (c = this.moveAvailableDate(e, b, "moveMonth")))
                : 2 === this.viewMode &&
                  ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                  (c = this.moveAvailableDate(e, b, "moveYear"))),
            c &&
              ((this.focusDate = this.viewDate = c),
              this.setValue(),
              this.fill(),
              a.preventDefault()));
          break;
        case 13:
          if (!this.o.forceParse) break;
          ((e = this.focusDate || this.dates.get(-1) || this.viewDate),
            this.o.keyboardNavigation && (this._toggle_multidate(e), (d = !0)),
            (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.setValue(),
            this.fill(),
            this.picker.is(":visible") &&
              (a.preventDefault(),
              a.stopPropagation(),
              this.o.autoclose && this.hide()));
          break;
        case 9:
          ((this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.fill(),
            this.hide());
      }
      d &&
        (this.dates.length
          ? this._trigger("changeDate")
          : this._trigger("clearDate"),
        this.inputField.trigger("change"));
    },
    setViewMode: function (a) {
      ((this.viewMode = a),
        this.picker
          .children("div")
          .hide()
          .filter(".datepicker-" + r.viewModes[this.viewMode].clsName)
          .show(),
        this.updateNavArrows(),
        this._trigger("changeViewMode", new Date(this.viewDate)));
    },
  };
  var l = function (b, c) {
    (a.data(b, "datepicker", this),
      (this.element = a(b)),
      (this.inputs = a.map(c.inputs, function (a) {
        return a.jquery ? a[0] : a;
      })),
      delete c.inputs,
      (this.keepEmptyValues = c.keepEmptyValues),
      delete c.keepEmptyValues,
      n
        .call(a(this.inputs), c)
        .on("changeDate", a.proxy(this.dateUpdated, this)),
      (this.pickers = a.map(this.inputs, function (b) {
        return a.data(b, "datepicker");
      })),
      this.updateDates());
  };
  l.prototype = {
    updateDates: function () {
      ((this.dates = a.map(this.pickers, function (a) {
        return a.getUTCDate();
      })),
        this.updateRanges());
    },
    updateRanges: function () {
      var b = a.map(this.dates, function (a) {
        return a.valueOf();
      });
      a.each(this.pickers, function (a, c) {
        c.setRange(b);
      });
    },
    clearDates: function () {
      a.each(this.pickers, function (a, b) {
        b.clearDates();
      });
    },
    dateUpdated: function (c) {
      if (!this.updating) {
        this.updating = !0;
        var d = a.data(c.target, "datepicker");
        if (d !== b) {
          var e = d.getUTCDate(),
            f = this.keepEmptyValues,
            g = a.inArray(c.target, this.inputs),
            h = g - 1,
            i = g + 1,
            j = this.inputs.length;
          if (-1 !== g) {
            if (
              (a.each(this.pickers, function (a, b) {
                b.getUTCDate() || (b !== d && f) || b.setUTCDate(e);
              }),
              e < this.dates[h])
            )
              for (
                ;
                h >= 0 &&
                e < this.dates[h] &&
                (this.pickers[h].element.val() || "").length > 0;
              )
                this.pickers[h--].setUTCDate(e);
            else if (e > this.dates[i])
              for (
                ;
                i < j &&
                e > this.dates[i] &&
                (this.pickers[i].element.val() || "").length > 0;
              )
                this.pickers[i++].setUTCDate(e);
            (this.updateDates(), delete this.updating);
          }
        }
      }
    },
    destroy: function () {
      (a.map(this.pickers, function (a) {
        a.destroy();
      }),
        a(this.inputs).off("changeDate", this.dateUpdated),
        delete this.element.data().datepicker);
    },
    remove: f(
      "destroy",
      "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead",
    ),
  };
  var m = a.fn.datepicker,
    n = function (c) {
      var d = Array.apply(null, arguments);
      d.shift();
      var e;
      if (
        (this.each(function () {
          var b = a(this),
            f = b.data("datepicker"),
            g = "object" == typeof c && c;
          if (!f) {
            var j = h(this, "date"),
              m = a.extend({}, o, j, g),
              n = i(m.language),
              p = a.extend({}, o, n, j, g);
            (b.hasClass("input-daterange") || p.inputs
              ? (a.extend(p, { inputs: p.inputs || b.find("input").toArray() }),
                (f = new l(this, p)))
              : (f = new k(this, p)),
              b.data("datepicker", f));
          }
          "string" == typeof c &&
            "function" == typeof f[c] &&
            (e = f[c].apply(f, d));
        }),
        e === b || e instanceof k || e instanceof l)
      )
        return this;
      if (this.length > 1)
        throw new Error(
          "Using only allowed for the collection of a single element (" +
            c +
            " function)",
        );
      return e;
    };
  a.fn.datepicker = n;
  var o = (a.fn.datepicker.defaults = {
      assumeNearbyYear: !1,
      autoclose: !1,
      beforeShowDay: a.noop,
      beforeShowMonth: a.noop,
      beforeShowYear: a.noop,
      beforeShowDecade: a.noop,
      beforeShowCentury: a.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      toggleActive: !1,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: "mm/dd/yyyy",
      isInline: null,
      keepEmptyValues: !1,
      keyboardNavigation: !0,
      language: "en",
      minViewMode: 0,
      maxViewMode: 4,
      multidate: !1,
      multidateSeparator: ",",
      orientation: "auto",
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      updateViewDate: !0,
      weekStart: 0,
      disableTouchKeyboard: !1,
      enableOnReadonly: !0,
      showOnFocus: !0,
      zIndexOffset: 10,
      container: "body",
      immediateUpdates: !1,
      title: "",
      templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
      showWeekDays: !0,
    }),
    p = (a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]);
  a.fn.datepicker.Constructor = k;
  var q = (a.fn.datepicker.dates = {
      en: {
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM yyyy",
      },
    }),
    r = {
      viewModes: [
        { names: ["days", "month"], clsName: "days", e: "changeMonth" },
        {
          names: ["months", "year"],
          clsName: "months",
          e: "changeYear",
          navStep: 1,
        },
        {
          names: ["years", "decade"],
          clsName: "years",
          e: "changeDecade",
          navStep: 10,
        },
        {
          names: ["decades", "century"],
          clsName: "decades",
          e: "changeCentury",
          navStep: 100,
        },
        {
          names: ["centuries", "millennium"],
          clsName: "centuries",
          e: "changeMillennium",
          navStep: 1e3,
        },
      ],
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
      parseFormat: function (a) {
        if ("function" == typeof a.toValue && "function" == typeof a.toDisplay)
          return a;
        var b = a.replace(this.validParts, "\0").split("\0"),
          c = a.match(this.validParts);
        if (!b || !b.length || !c || 0 === c.length)
          throw new Error("Invalid date format.");
        return { separators: b, parts: c };
      },
      parseDate: function (c, e, f, g) {
        function h(a, b) {
          return (
            !0 === b && (b = 10),
            a < 100 && (a += 2e3) > new Date().getFullYear() + b && (a -= 100),
            a
          );
        }
        function i() {
          var a = this.slice(0, j[n].length),
            b = j[n].slice(0, a.length);
          return a.toLowerCase() === b.toLowerCase();
        }
        if (!c) return b;
        if (c instanceof Date) return c;
        if (("string" == typeof e && (e = r.parseFormat(e)), e.toValue))
          return e.toValue(c, e, f);
        var j,
          l,
          m,
          n,
          o,
          p = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
          s = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
        if (
          (c in s && (c = s[c]),
          /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c))
        ) {
          for (
            j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0;
            n < j.length;
            n++
          )
            ((l = j[n].match(/([\-+]\d+)([dmwy])/i)),
              (m = Number(l[1])),
              (o = p[l[2].toLowerCase()]),
              (c = k.prototype[o](c, m)));
          return k.prototype._zero_utc_time(c);
        }
        j = (c && c.match(this.nonpunctuation)) || [];
        var t,
          u,
          v = {},
          w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          x = {
            yyyy: function (a, b) {
              return a.setUTCFullYear(g ? h(b, g) : b);
            },
            m: function (a, b) {
              if (isNaN(a)) return a;
              for (b -= 1; b < 0; ) b += 12;
              for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b; )
                a.setUTCDate(a.getUTCDate() - 1);
              return a;
            },
            d: function (a, b) {
              return a.setUTCDate(b);
            },
          };
        ((x.yy = x.yyyy), (x.M = x.MM = x.mm = x.m), (x.dd = x.d), (c = d()));
        var y = e.parts.slice();
        if (
          (j.length !== y.length &&
            (y = a(y)
              .filter(function (b, c) {
                return -1 !== a.inArray(c, w);
              })
              .toArray()),
          j.length === y.length)
        ) {
          var z;
          for (n = 0, z = y.length; n < z; n++) {
            if (((t = parseInt(j[n], 10)), (l = y[n]), isNaN(t)))
              switch (l) {
                case "MM":
                  ((u = a(q[f].months).filter(i)),
                    (t = a.inArray(u[0], q[f].months) + 1));
                  break;
                case "M":
                  ((u = a(q[f].monthsShort).filter(i)),
                    (t = a.inArray(u[0], q[f].monthsShort) + 1));
              }
            v[l] = t;
          }
          var A, B;
          for (n = 0; n < w.length; n++)
            (B = w[n]) in v &&
              !isNaN(v[B]) &&
              ((A = new Date(c)), x[B](A, v[B]), isNaN(A) || (c = A));
        }
        return c;
      },
      formatDate: function (b, c, d) {
        if (!b) return "";
        if (("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay))
          return c.toDisplay(b, c, d);
        var e = {
          d: b.getUTCDate(),
          D: q[d].daysShort[b.getUTCDay()],
          DD: q[d].days[b.getUTCDay()],
          m: b.getUTCMonth() + 1,
          M: q[d].monthsShort[b.getUTCMonth()],
          MM: q[d].months[b.getUTCMonth()],
          yy: b.getUTCFullYear().toString().substring(2),
          yyyy: b.getUTCFullYear(),
        };
        ((e.dd = (e.d < 10 ? "0" : "") + e.d),
          (e.mm = (e.m < 10 ? "0" : "") + e.m),
          (b = []));
        for (
          var f = a.extend([], c.separators), g = 0, h = c.parts.length;
          g <= h;
          g++
        )
          (f.length && b.push(f.shift()), b.push(e[c.parts[g]]));
        return b.join("");
      },
      headTemplate:
        '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
        o.templates.leftArrow +
        '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
        o.templates.rightArrow +
        "</th></tr></thead>",
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate:
        '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
    };
  ((r.template =
    '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
    r.headTemplate +
    "<tbody></tbody>" +
    r.footTemplate +
    '</table></div><div class="datepicker-months"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-years"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    "</table></div></div>"),
    (a.fn.datepicker.DPGlobal = r),
    (a.fn.datepicker.noConflict = function () {
      return ((a.fn.datepicker = m), this);
    }),
    (a.fn.datepicker.version = "1.10.0"),
    (a.fn.datepicker.deprecated = function (a) {
      var b = window.console;
      b && b.warn && b.warn("DEPRECATED: " + a);
    }),
    a(document).on(
      "focus.datepicker.data-api click.datepicker.data-api",
      '[data-provide="datepicker"]',
      function (b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show"));
      },
    ),
    a(function () {
      n.call(a('[data-provide="datepicker-inline"]'));
    }));
});
