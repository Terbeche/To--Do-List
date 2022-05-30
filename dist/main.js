"use strict";
(self.webpackChunkset_up_webpack = self.webpackChunkset_up_webpack || []).push([
  [179], {
    426: (e, n, t) => {
      t.d(n, {
        Z: () => i
      });
      var r = t(81),
        o = t.n(r),
        a = t(645),
        c = t.n(a)()(o());
      c.push([e.id, "* {\r\n  box-sizing: border-box;\r\n  background: #ddd;\r\n}\r\n\r\n.to-do-list {\r\n  background-color: white;\r\n  padding: 1rem;\r\n  margin: 2rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  background-color: white;\r\n}\r\n\r\n.task {\r\n  margin-bottom: 1rem;\r\n  background-color: white;\r\n}\r\n\r\n.task-completed {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.task-description {\r\n  background-color: white;\r\n}\r\n\r\n#to-do-add {\r\n  color: #aaa;\r\n}\r\n\r\n#to-do-clear {\r\n  text-align: center;\r\n}\r\n", ""]);
      const i = c
    },
    645: e => {
      e.exports = function(e) {
        var n = [];
        return n.toString = function() {
          return this.map((function(n) {
            var t = "",
              r = void 0 !== n[5];
            return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), r && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
          })).join("")
        }, n.i = function(e, t, r, o, a) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var c = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var s = this[i][0];
              null != s && (c[s] = !0)
            }
          for (var d = 0; d < e.length; d++) {
            var l = [].concat(e[d]);
            r && c[l[0]] || (void 0 !== a && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = a), t && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = t) : l[2] = t), o && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = o) : l[4] = "".concat(o)), n.push(l))
          }
        }, n
      }
    },
    81: e => {
      e.exports = function(e) {
        return e[1]
      }
    },
    379: e => {
      var n = [];

      function t(e) {
        for (var t = -1, r = 0; r < n.length; r++)
          if (n[r].identifier === e) {
            t = r;
            break
          } return t
      }

      function r(e, r) {
        for (var a = {}, c = [], i = 0; i < e.length; i++) {
          var s = e[i],
            d = r.base ? s[0] + r.base : s[0],
            l = a[d] || 0,
            p = "".concat(d, " ").concat(l);
          a[d] = l + 1;
          var u = t(p),
            m = {
              css: s[1],
              media: s[2],
              sourceMap: s[3],
              supports: s[4],
              layer: s[5]
            };
          if (-1 !== u) n[u].references++, n[u].updater(m);
          else {
            var f = o(m, r);
            r.byIndex = i, n.splice(i, 0, {
              identifier: p,
              updater: f,
              references: 1
            })
          }
          c.push(p)
        }
        return c
      }

      function o(e, n) {
        var t = n.domAPI(n);
        return t.update(e),
          function(n) {
            if (n) {
              if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
              t.update(e = n)
            } else t.remove()
          }
      }
      e.exports = function(e, o) {
        var a = r(e = e || [], o = o || {});
        return function(e) {
          e = e || [];
          for (var c = 0; c < a.length; c++) {
            var i = t(a[c]);
            n[i].references--
          }
          for (var s = r(e, o), d = 0; d < a.length; d++) {
            var l = t(a[d]);
            0 === n[l].references && (n[l].updater(), n.splice(l, 1))
          }
          a = s
        }
      }
    },
    569: e => {
      var n = {};
      e.exports = function(e, t) {
        var r = function(e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
              t = t.contentDocument.head
            } catch (e) {
              t = null
            }
            n[e] = t
          }
          return n[e]
        }(e);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(t)
      }
    },
    216: e => {
      e.exports = function(e) {
        var n = document.createElement("style");
        return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
      }
    },
    565: (e, n, t) => {
      e.exports = function(e) {
        var n = t.nc;
        n && e.setAttribute("nonce", n)
      }
    },
    795: e => {
      e.exports = function(e) {
        var n = e.insertStyleElement(e);
        return {
          update: function(t) {
            ! function(e, n, t) {
              var r = "";
              t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {"));
              var o = void 0 !== t.layer;
              o && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), r += t.css, o && (r += "}"), t.media && (r += "}"), t.supports && (r += "}");
              var a = t.sourceMap;
              a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleTagTransform(r, e, n.options)
            }(n, e, t)
          },
          remove: function() {
            ! function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(n)
          }
        }
      }
    },
    589: e => {
      e.exports = function(e, n) {
        if (n.styleSheet) n.styleSheet.cssText = e;
        else {
          for (; n.firstChild;) n.removeChild(n.firstChild);
          n.appendChild(document.createTextNode(e))
        }
      }
    },
    987: (e, n, t) => {
      var r = t(379),
        o = t.n(r),
        a = t(795),
        c = t.n(a),
        i = t(569),
        s = t.n(i),
        d = t(565),
        l = t.n(d),
        p = t(216),
        u = t.n(p),
        m = t(589),
        f = t.n(m),
        h = t(426),
        v = {};
      v.styleTagTransform = f(), v.setAttributes = l(), v.insert = s().bind(null, "head"), v.domAPI = c(), v.insertStyleElement = u(), o()(h.Z, v), h.Z && h.Z.locals && h.Z.locals;
      const y = [{
          description: "Complete project",
          completed: "false",
          index: 0
        }, {
          description: "Read from books",
          completed: "false",
          index: 1
        }, {
          description: "Do some sport",
          completed: "false",
          index: 2
        }],
        b = document.querySelector(".to-do-list"),
        g = document.createElement("ul"),
        k = document.createElement("li");
      k.innerHTML = "Today's To Do", k.classList.add("task"), g.appendChild(k);
      const x = document.createElement("li");
      x.innerHTML = "Add to your list...", x.classList.add("task"), x.id = "to-do-add", x.placeholder = "Add to your list", g.appendChild(x), (() => {
        for (let e = 0; e < y.length; e += 1) {
          const n = document.createElement("li");
          n.classList.add("task");
          const t = document.createElement("input");
          t.type = "checkbox", t.id = y[e].index, t.classList.add("task-completed");
          const r = document.createElement("label");
          r.for = y[e].index, r.innerHTML = y[e].description, r.classList.add("task-description"), n.appendChild(t), n.appendChild(r), g.appendChild(n)
        }
      })();
      const C = document.createElement("li");
      C.innerHTML = "Clear all completed", C.classList.add("task"), C.id = "to-do-clear", g.appendChild(C), b.appendChild(g)
    }
  },
  e => {
    e(e.s = 987)
  }
]);
