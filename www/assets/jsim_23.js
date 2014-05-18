!function(a, b) {
    function c(a) {
        var b = a.length, c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = fb.expando + Math.random();
    }
    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType) if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), 
        d = a.getAttribute(e), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d;
            } catch (f) {}
            pb.set(a, c, d);
        } else d = b;
        return d;
    }
    function g() {
        return !0;
    }
    function h() {
        return !1;
    }
    function i() {
        try {
            return T.activeElement;
        } catch (a) {}
    }
    function j(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function k(a, b, c) {
        if (fb.isFunction(b)) return fb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return fb.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Cb.test(b)) return fb.filter(b, a, c);
            b = fb.filter(b, a);
        }
        return fb.grep(a, function(a) {
            return bb.call(b, a) >= 0 !== c;
        });
    }
    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++) qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"));
    }
    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) fb.event.add(b, e, j[e][c]);
            }
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i));
        }
    }
    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([ a ], d) : d;
    }
    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function s(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--; ) if (b = _b[e] + c, 
        b in a) return b;
        return d;
    }
    function t(a, b) {
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a);
    }
    function u(b) {
        return a.getComputedStyle(b, null);
    }
    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), 
        (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function w(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fb.css(a, c + $b[f], !0, e)), 
        d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), 
        "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g;
    }
    function y(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = u(a), g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e)) return e;
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function z(a) {
        var b = T, c = Xb[a];
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c;
    }
    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body), d = fb.css(c[0], "display");
        return c.remove(), d;
    }
    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b)) fb.each(b, function(b, e) {
            c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== fb.type(b)) d(a, b); else for (e in b) B(a + "[" + e + "]", b[e], c, d);
    }
    function C(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function D(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a;
    }
    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; ) j.shift(), 
        e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e) for (f in i) if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break;
        }
        if (j[0] in d) g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break;
                }
                h || (h = f);
            }
            g = g || h;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0;
    }
    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function H() {
        return setTimeout(function() {
            Bc = b;
        }), Bc = fb.now();
    }
    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function J(a, b, c) {
        var d, e, f = 0, g = Gc.length, h = fb.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: fb.extend({}, b),
            opts: fb.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Bc || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++) if (d = Gc[f].call(j, a, k, j.opts)) return d;
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        fb.fx.timer(fb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function K(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function L(a, c, d) {
        var e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && t(a), o = qb.get(a, "fxshow");
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, 
        j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j();
        }), i.unqueued++, k.always(function() {
            k.always(function() {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [ m.overflow, m.overflowX, m.overflowY ], 
        "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), 
        d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2];
        }));
        for (e in c) if (f = c[e], Dc.exec(f)) {
            if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                if ("show" !== f || !o || o[e] === b) continue;
                n = !0;
            }
            l[e] = o && o[e] || fb.style(a, e);
        }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), 
            n ? fb(a).show() : k.done(function() {
                fb(a).hide();
            }), k.done(function() {
                var b;
                qb.remove(a, "fxshow");
                for (b in l) fb.style(a, b, l[b]);
            });
            for (e in l) h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, 
            h.start = "width" === e || "height" === e ? 1 : 0));
        }
    }
    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e);
    }
    function N(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var P, Q, R = typeof b, S = a.location, T = a.document, U = T.documentElement, V = a.jQuery, W = a.$, X = {}, Y = [], Z = "2.0.2", $ = Y.concat, _ = Y.push, ab = Y.slice, bb = Y.indexOf, cb = X.toString, db = X.hasOwnProperty, eb = Z.trim, fb = function(a, b) {
        return new fb.fn.init(a, b, P);
    }, gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, hb = /\S+/g, ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, kb = /^-ms-/, lb = /-([\da-z])/gi, mb = function(a, b) {
        return b.toUpperCase();
    }, nb = function() {
        T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), 
        fb.ready();
    };
    fb.fn = fb.prototype = {
        jquery: Z,
        constructor: fb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : ib.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), 
                    jb.test(e[1]) && fb.isPlainObject(c)) for (e in c) fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), 
                this.context = T, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), fb.makeArray(a, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ab.call(this);
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = fb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return fb.each(this, a, b);
        },
        ready: function(a) {
            return fb.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(ab.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(fb.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: _,
        sort: [].sort,
        splice: [].splice
    }, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), 
        j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c], 
        e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, 
        g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        return h;
    }, fb.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fb.readyWait++ : fb.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [ fb ]), 
            fb.fn.trigger && fb(T).trigger("ready").off("ready")));
        },
        isFunction: function(a) {
            return "function" === fb.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a)) return !1;
            try {
                if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (b) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw new Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || T;
            var d = jb.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = fb.buildFragment([ a ], b, e), e && fb(e).remove(), 
            fb.merge([], d.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(a) {
            var c, d;
            if (!a || "string" != typeof a) return null;
            try {
                d = new DOMParser(), c = d.parseFromString(a, "text/xml");
            } catch (e) {
                c = b;
            }
            return (!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), 
            c;
        },
        noop: function() {},
        globalEval: function(a) {
            var b, c = eval;
            a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), 
            b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(kb, "ms-").replace(lb, mb);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : eb.call(a);
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [ a ] : a) : _.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : bb.call(b, a, c);
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else for (;c[f] !== b; ) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a) e = b(a[f], f, d), 
            null != e && (i[i.length] = e);
            return $.apply([], i);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), 
            f = function() {
                return a.apply(c || this, e.concat(ab.call(arguments)));
            }, f.guid = a.guid = a.guid || fb.guid++, f) : b;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === fb.type(d)) {
                f = !0;
                for (i in d) fb.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), 
            c = null) : (k = c, c = function(a, b, c) {
                return k.call(fb(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: Date.now,
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), fb.ready.promise = function(b) {
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), 
        a.addEventListener("load", nb, !1))), Q.promise(b);
    }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        X["[object " + b + "]"] = b.toLowerCase();
    }), P = fb(T), function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n;
            if ((b ? b.ownerDocument || b : S) !== K && J(b), b = b || K, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (M && !d) {
                if (e = xb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && Q(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return eb.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && B.getElementsByClassName && b.getElementsByClassName) return eb.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (B.qsa && (!N || !N.test(a))) {
                    if (l = k = R, m = b, n = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = p(a), (k = b.getAttribute("id")) ? l = k.replace(Ab, "\\$&") : b.setAttribute("id", l), 
                        l = "[id='" + l + "'] ", i = j.length; i--; ) j[i] = l + q(j[i]);
                        m = rb.test(a) && b.parentNode || b, n = j.join(",");
                    }
                    if (n) try {
                        return eb.apply(c, m.querySelectorAll(n)), c;
                    } catch (o) {} finally {
                        k || b.removeAttribute("id");
                    }
                }
            }
            return y(a.replace(ob, "$1"), b, c, d);
        }
        function d(a) {
            return wb.test(a + "");
        }
        function e() {
            function a(c, d) {
                return b.push(c += " ") > D.cacheLength && delete a[b.shift()], a[c] = d;
            }
            var b = [];
            return a;
        }
        function f(a) {
            return a[R] = !0, a;
        }
        function g(a) {
            var b = K.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function h(a, b, c) {
            a = a.split("|");
            for (var d, e = a.length, f = c ? null : b; e--; ) (d = D.attrHandle[a[e]]) && d !== b || (D.attrHandle[a[e]] = f);
        }
        function i(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : a[b] === !0 ? b.toLowerCase() : null;
        }
        function j(a, b) {
            return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }
        function k(a) {
            return "input" === a.nodeName.toLowerCase() ? a.defaultValue : void 0;
        }
        function l(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || _) - (~a.sourceIndex || _);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function m(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function n(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function o(a) {
            return f(function(b) {
                return b = +b, f(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function p(a, b) {
            var d, e, f, g, h, i, j, k = W[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = D.preFilter; h; ) {
                (!d || (e = pb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = qb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ob, " ")
                }), h = h.slice(d.length));
                for (g in D.filter) !(e = vb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return b ? h.length : h ? c.error(a) : W(a, i).slice(0);
        }
        function q(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function r(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = U++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = T + " " + f;
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) if (j = b[R] || (b[R] = {}), 
                (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === C) return h === !0;
                } else if (i = j[d] = [ k ], i[1] = a(b, c, g) || C, i[1] === !0) return !0;
            };
        }
        function s(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function t(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function u(a, b, c, d, e, g) {
            return d && !d[R] && (d = u(d)), e && !e[R] && (e = u(e, g)), f(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || x(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : t(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = t(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && (j = e ? hb.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = t(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : eb.apply(g, r);
            });
        }
        function v(a) {
            for (var b, c, d, e = a.length, f = D.relative[a[0].type], g = f || D.relative[" "], h = f ? 1 : 0, i = r(function(a) {
                return a === b;
            }, g, !0), j = r(function(a) {
                return hb.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== H) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = D.relative[a[h].type]) k = [ r(s(k), c) ]; else {
                if (c = D.filter[a[h].type].apply(null, a[h].matches), c[R]) {
                    for (d = ++h; e > d && !D.relative[a[d].type]; d++) ;
                    return u(h > 1 && s(k), h > 1 && q(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ob, "$1"), c, d > h && v(a.slice(h, d)), e > d && v(a = a.slice(d)), e > d && q(a));
                }
                k.push(c);
            }
            return s(k);
        }
        function w(a, b) {
            var d = 0, e = b.length > 0, g = a.length > 0, h = function(f, h, i, j, k) {
                var l, m, n, o = [], p = 0, q = "0", r = f && [], s = null != k, u = H, v = f || g && D.find.TAG("*", k && h.parentNode || h), w = T += null == u ? 1 : Math.random() || .1;
                for (s && (H = h !== K && h, C = d); null != (l = v[q]); q++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; ) if (n(l, h, i)) {
                            j.push(l);
                            break;
                        }
                        s && (T = w, C = ++d);
                    }
                    e && ((l = !n && l) && p--, f && r.push(l));
                }
                if (p += q, e && q !== p) {
                    for (m = 0; n = b[m++]; ) n(r, o, h, i);
                    if (f) {
                        if (p > 0) for (;q--; ) r[q] || o[q] || (o[q] = cb.call(j));
                        o = t(o);
                    }
                    eb.apply(j, o), s && !f && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
                }
                return s && (T = w, H = u), r;
            };
            return e ? f(h) : h;
        }
        function x(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d;
        }
        function y(a, b, c, d) {
            var e, f, g, h, i, j = p(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && B.getById && 9 === b.nodeType && M && D.relative[f[1].type]) {
                    if (b = (D.find.ID(g.matches[0].replace(Bb, Cb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length);
                }
                for (e = vb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !D.relative[h = g.type]); ) if ((i = D.find[h]) && (d = i(g.matches[0].replace(Bb, Cb), rb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && q(f), !a) return eb.apply(c, d), c;
                    break;
                }
            }
            return G(a, j)(d, b, !M, c, rb.test(a)), c;
        }
        function z() {}
        var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = "sizzle" + -new Date(), S = a.document, T = 0, U = 0, V = e(), W = e(), X = e(), Y = !1, Z = function() {
            return 0;
        }, $ = typeof b, _ = 1 << 31, ab = {}.hasOwnProperty, bb = [], cb = bb.pop, db = bb.push, eb = bb.push, gb = bb.slice, hb = bb.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, ib = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", jb = "[\\x20\\t\\r\\n\\f]", kb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", lb = kb.replace("w", "w#"), mb = "\\[" + jb + "*(" + kb + ")" + jb + "*(?:([*^$|!~]?=)" + jb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + lb + ")|)|)" + jb + "*\\]", nb = ":(" + kb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + mb.replace(3, 8) + ")*)|.*)\\)|)", ob = new RegExp("^" + jb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + jb + "+$", "g"), pb = new RegExp("^" + jb + "*," + jb + "*"), qb = new RegExp("^" + jb + "*([>+~]|" + jb + ")" + jb + "*"), rb = new RegExp(jb + "*[+~]"), sb = new RegExp("=" + jb + "*([^\\]'\"]*)" + jb + "*\\]", "g"), tb = new RegExp(nb), ub = new RegExp("^" + lb + "$"), vb = {
            ID: new RegExp("^#(" + kb + ")"),
            CLASS: new RegExp("^\\.(" + kb + ")"),
            TAG: new RegExp("^(" + kb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + mb),
            PSEUDO: new RegExp("^" + nb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + jb + "*(even|odd|(([+-]|)(\\d*)n|)" + jb + "*(?:([+-]|)" + jb + "*(\\d+)|))" + jb + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ib + ")$", "i"),
            needsContext: new RegExp("^" + jb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + jb + "*((?:-\\d)?\\d*)" + jb + "*\\)|)(?=[^-]|$)", "i")
        }, wb = /^[^{]+\{\s*\[native \w/, xb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yb = /^(?:input|select|textarea|button)$/i, zb = /^h\d$/i, Ab = /'|\\/g, Bb = new RegExp("\\\\([\\da-f]{1,6}" + jb + "?|(" + jb + ")|.)", "ig"), Cb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };
        try {
            eb.apply(bb = gb.call(S.childNodes), S.childNodes), bb[S.childNodes.length].nodeType;
        } catch (Db) {
            eb = {
                apply: bb.length ? function(a, b) {
                    db.apply(a, gb.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        F = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, B = c.support = {}, J = c.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : S, c = b.parentWindow;
            return b !== K && 9 === b.nodeType && b.documentElement ? (K = b, L = b.documentElement, 
            M = !F(b), c && c.frameElement && c.attachEvent("onbeforeunload", function() {
                J();
            }), B.attributes = g(function(a) {
                return a.innerHTML = "<a href='#'></a>", h("type|href|height|width", j, "#" === a.firstChild.getAttribute("href")), 
                h(ib, i, null == a.getAttribute("disabled")), a.className = "i", !a.getAttribute("className");
            }), B.input = g(function(a) {
                return a.innerHTML = "<input>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
            }), h("value", k, B.attributes && B.input), B.getElementsByTagName = g(function(a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length;
            }), B.getElementsByClassName = g(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), B.getById = g(function(a) {
                return L.appendChild(a).id = R, !b.getElementsByName || !b.getElementsByName(R).length;
            }), B.getById ? (D.find.ID = function(a, b) {
                if (typeof b.getElementById !== $ && M) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, D.filter.ID = function(a) {
                var b = a.replace(Bb, Cb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete D.find.ID, D.filter.ID = function(a) {
                var b = a.replace(Bb, Cb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== $ && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), D.find.TAG = B.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== $ ? b.getElementsByTagName(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, D.find.CLASS = B.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== $ && M ? b.getElementsByClassName(a) : void 0;
            }, O = [], N = [], (B.qsa = d(b.querySelectorAll)) && (g(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || N.push("\\[" + jb + "*(?:value|" + ib + ")"), 
                a.querySelectorAll(":checked").length || N.push(":checked");
            }), g(function(a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && N.push("[*^$]=" + jb + "*(?:''|\"\")"), 
                a.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                N.push(",.*:");
            })), (B.matchesSelector = d(P = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function(a) {
                B.disconnectedMatch = P.call(a, "div"), P.call(a, "[s!='']:x"), O.push("!=", nb);
            }), N = N.length && new RegExp(N.join("|")), O = O.length && new RegExp(O.join("|")), 
            Q = d(L.contains) || L.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B.sortDetached = g(function(a) {
                return 1 & a.compareDocumentPosition(b.createElement("div"));
            }), Z = L.compareDocumentPosition ? function(a, c) {
                if (a === c) return Y = !0, 0;
                var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                return d ? 1 & d || !B.sortDetached && c.compareDocumentPosition(a) === d ? a === b || Q(S, a) ? -1 : c === b || Q(S, c) ? 1 : I ? hb.call(I, a) - hb.call(I, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, c) {
                var d, e = 0, f = a.parentNode, g = c.parentNode, h = [ a ], i = [ c ];
                if (a === c) return Y = !0, 0;
                if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : I ? hb.call(I, a) - hb.call(I, c) : 0;
                if (f === g) return l(a, c);
                for (d = a; d = d.parentNode; ) h.unshift(d);
                for (d = c; d = d.parentNode; ) i.unshift(d);
                for (;h[e] === i[e]; ) e++;
                return e ? l(h[e], i[e]) : h[e] === S ? -1 : i[e] === S ? 1 : 0;
            }, b) : K;
        }, c.matches = function(a, b) {
            return c(a, null, null, b);
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== K && J(a), b = b.replace(sb, "='$1']"), !(!B.matchesSelector || !M || O && O.test(b) || N && N.test(b))) try {
                var d = P.call(a, b);
                if (d || B.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return c(b, K, null, [ a ]).length > 0;
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== K && J(a), Q(a, b);
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== K && J(a);
            var d = D.attrHandle[c.toLowerCase()], e = d && ab.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !M) : b;
            return e === b ? B.attributes || !M ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e;
        }, c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (Y = !B.detectDuplicates, I = !B.sortStable && a.slice(0), a.sort(Z), Y) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return a;
        }, E = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += E(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d]; d++) c += E(b);
            return c;
        }, D = c.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: vb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(Bb, Cb), a[3] = (a[4] || a[5] || "").replace(Bb, Cb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return vb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && tb.test(d) && (c = p(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), 
                    a[2] = d.slice(0, c)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(Bb, Cb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = V[a + " "];
                    return b || (b = new RegExp("(^|" + jb + ")" + a + "(" + jb + "|$)")) && V(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== $ && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[R] || (q[R] = {}), j = k[a] || [], n = j[0] === T && j[1], m = j[0] === T && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ T, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[R] || (b[R] = {}))[a]) && j[0] === T) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[R] || (l[R] = {}))[a] = [ T, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var d, e = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[R] ? e(b) : e.length > 1 ? (d = [ a, a, "", b ], D.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) d = hb.call(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, d);
                    }) : e;
                }
            },
            pseudos: {
                not: f(function(a) {
                    var b = [], c = [], d = G(a.replace(ob, "$1"));
                    return d[R] ? f(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: f(function(a) {
                    return function(b) {
                        return c(a, b).length > 0;
                    };
                }),
                contains: f(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || E(b)).indexOf(a) > -1;
                    };
                }),
                lang: f(function(a) {
                    return ub.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(Bb, Cb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === L;
                },
                focus: function(a) {
                    return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !D.pseudos.empty(a);
                },
                header: function(a) {
                    return zb.test(a.nodeName);
                },
                input: function(a) {
                    return yb.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                first: o(function() {
                    return [ 0 ];
                }),
                last: o(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: o(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: o(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: o(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        };
        for (A in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) D.pseudos[A] = m(A);
        for (A in {
            submit: !0,
            reset: !0
        }) D.pseudos[A] = n(A);
        G = c.compile = function(a, b) {
            var c, d = [], e = [], f = X[a + " "];
            if (!f) {
                for (b || (b = p(a)), c = b.length; c--; ) f = v(b[c]), f[R] ? d.push(f) : e.push(f);
                f = X(a, w(e, d));
            }
            return f;
        }, D.pseudos.nth = D.pseudos.eq, z.prototype = D.filters = D.pseudos, D.setFilters = new z(), 
        B.sortStable = R.split("").sort(Z).join("") === R, J(), [ 0, 0 ].sort(Z), B.detectDuplicates = Y, 
        fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, 
        fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains;
    }(a);
    var ob = {};
    fb.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++) if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable());
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        fb.each(b, function(b, c) {
                            var e = fb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c);
                        });
                    }(arguments), f ? h = j.length : c && (g = b, l(c));
                }
                return this;
            },
            remove: function() {
                return j && fb.each(arguments, function(a, b) {
                    for (var c; (c = fb.inArray(b, j, c)) > -1; ) j.splice(c, 1), f && (h >= c && h--, 
                    i >= c && i--);
                }), this;
            },
            has: function(a) {
                return a ? fb.inArray(a, j) > -1 : !(!j || !j.length);
            },
            empty: function() {
                return j = [], h = 0, this;
            },
            disable: function() {
                return j = k = c = b, this;
            },
            disabled: function() {
                return !j;
            },
            lock: function() {
                return k = b, c || m.disable(), this;
            },
            locked: function() {
                return !k;
            },
            fireWith: function(a, b) {
                return b = b || [], b = [ a, b.slice ? b.slice() : b ], !j || e && !k || (f ? k.push(b) : l(b)), 
                this;
            },
            fire: function() {
                return m.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!e;
            }
        };
        return m;
    }, fb.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", fb.Callbacks("once memory"), "resolved" ], [ "reject", "fail", fb.Callbacks("once memory"), "rejected" ], [ "notify", "progress", fb.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return fb.Deferred(function(c) {
                        fb.each(b, function(b, f) {
                            var g = f[0], h = fb.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? fb.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, fb.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = ab.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    }), fb.support = function(b) {
        var c = T.createElement("input"), d = T.createDocumentFragment(), e = T.createElement("div"), f = T.createElement("select"), g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, 
        b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, 
        b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, 
        c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, 
        c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function() {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            fb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === e.offsetWidth;
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                width: "4px"
            }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, 
            d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            g.removeChild(c));
        }), b) : b;
    }({});
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0;
    }, e.prototype = {
        key: function(a) {
            if (!e.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, fb.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (fb.isEmptyObject(f)) fb.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c];
        },
        access: function(a, c, d) {
            return c === b || c && "string" == typeof c && d === b ? this.get(a, c) : (this.set(a, c, d), 
            d !== b ? d : c);
        },
        remove: function(a, c) {
            var d, e, f, g = this.key(a), h = this.cache[g];
            if (c === b) this.cache[g] = {}; else {
                fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [ c, f ] : (e = f, 
                e = e in h ? [ e ] : e.match(hb) || [])), d = e.length;
                for (;d--; ) delete h[e[d]];
            }
        },
        hasData: function(a) {
            return !fb.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    }, pb = new e(), qb = new e(), fb.extend({
        acceptData: e.accepts,
        hasData: function(a) {
            return pb.hasData(a) || qb.hasData(a);
        },
        data: function(a, b, c) {
            return pb.access(a, b, c);
        },
        removeData: function(a, b) {
            pb.remove(a, b);
        },
        _data: function(a, b, c) {
            return qb.access(a, b, c);
        },
        _removeData: function(a, b) {
            qb.remove(a, b);
        }
    }), fb.fn.extend({
        data: function(a, c) {
            var d, e, g = this[0], h = 0, i = null;
            if (a === b) {
                if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), 
                    f(g, e, i[e]));
                    qb.set(g, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof a ? this.each(function() {
                pb.set(this, a);
            }) : fb.access(this, function(c) {
                var d, e = fb.camelCase(a);
                if (g && c === b) {
                    if (d = pb.get(g, a), d !== b) return d;
                    if (d = pb.get(g, e), d !== b) return d;
                    if (d = f(g, e, b), d !== b) return d;
                } else this.each(function() {
                    var d = pb.get(this, e);
                    pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c);
                });
            }, null, c, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                pb.remove(this, a);
            });
        }
    }), fb.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function() {
                fb.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return qb.get(a, c) || qb.access(a, c, {
                empty: fb.Callbacks("once memory").add(function() {
                    qb.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), fb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = fb.queue(this, a, c);
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                fb.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = fb.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; ) d = qb.get(g[h], a + "queueHooks"), 
            d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var tb, ub, vb = /[\t\r\n\f]/g, wb = /\r/g, xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({
        attr: function(a, b) {
            return fb.access(this, fb.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                fb.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return fb.access(this, fb.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fb.propFix[a] || a];
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                c.className = fb.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                c.className = a ? fb.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return this.each(fb.isFunction(a) ? function(c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var e, f = 0, g = fb(this), h = b, i = a.match(hb) || []; e = i[f++]; ) h = d ? h : !g.hasClass(e), 
                g[h ? "addClass" : "removeClass"](e); else (c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length) return e = fb.isFunction(a), this.each(function(d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function(a) {
                        return null == a ? "" : a + "";
                    })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f));
                });
                if (f) return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], 
                c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d);
            }
        }
    }), fb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = fb(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), 
            e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), 
            null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), 
            d) : void fb.removeAttr(a, c));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(hb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, 
            f = fb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function(a, c, e) {
            var f = fb.expr.attrHandle[c], g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fb.expr.attrHandle[c] = f, g;
        };
    }), fb.support.optSelected || (fb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), fb.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        fb.propFix[this.toLowerCase()] = this;
    }), fb.each([ "radio", "checkbox" ], function() {
        fb.valHooks[this] = {
            set: function(a, b) {
                return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0;
            }
        }, fb.support.checkOn || (fb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Ab = /^(?:focusinfocus|focusoutblur)$/, Bb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), 
                (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                    return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments);
                }, h.elem = a), c = (c || "").match(hb) || [ "" ], k = c.length; k--; ) i = Bb.exec(c[k]) || [], 
                o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, 
                o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && fb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), 
                m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                fb.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(hb) || [ "" ], j = b.length; j--; ) if (h = Bb.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    g = f = m.length; f--; ) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) fb.event.remove(a, n + b[j], c, d, !0);
                fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"));
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [ e || T ], o = db.call(c, "type") ? c.type : c, p = db.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), 
            o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), 
            c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            c.result = b, c.target || (c.target = e), d = null == d ? [ c ] : fb.makeArray(d, [ c ]), 
            m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fb.isWindow(e)) {
                    for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), 
                    i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a);
                }
                for (g = 0; (h = n[g++]) && !c.isPropagationStopped(); ) c.type = g > 1 ? j : m.bindType || o, 
                l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), 
                l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], 
                i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), 
                c.result;
            }
        },
        dispatch: function(a) {
            a = fb.event.fix(a);
            var c, d, e, f, g, h = [], i = ab.call(arguments), j = (qb.get(this, "events") || {})[a.type] || [], k = fb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j !== this; j = j.parentNode || this) if (j.disabled !== !0 || "click" !== a.type) {
                for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [ j ]).length), 
                e[f] && e.push(g);
                e.length && h.push({
                    elem: j,
                    handlers: e
                });
            }
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, 
                e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), 
                a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), 
                a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[fb.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return fb.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = fb.extend(new fb.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, fb.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, fb.Event = function(a, b) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, 
        b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), void (this[fb.expando] = !0)) : new fb.Event(a, b);
    }, fb.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation();
        }
    }, fb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), fb.support.focusinBubbles || fb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0);
        };
        fb.event.special[b] = {
            setup: function() {
                0 === c++ && T.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && T.removeEventListener(a, d, !0);
            }
        };
    }), fb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this;
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, 
            d = b) : (e = d, d = c, c = b)), e === !1) e = h; else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return fb().off(a), g.apply(this, arguments);
            }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                fb.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), 
            this.each(function() {
                fb.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                fb.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fb.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Cb = /^.[^:#\[\.,]*$/, Db = /^(?:parents|prev(?:Until|All))/, Eb = fb.expr.match.needsContext, Fb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fb.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(fb(a).filter(function() {
                for (b = 0; e > b; b++) if (fb.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) fb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        has: function(a) {
            var b = fb(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (fb.contains(this, b[a])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0));
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1));
        },
        is: function(a) {
            return !!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length;
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [ a ] : a), d = fb.merge(this.get(), c);
            return this.pushStack(fb.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), fb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return fb.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return fb.dir(a, "parentNode", c);
        },
        next: function(a) {
            return j(a, "nextSibling");
        },
        prev: function(a) {
            return j(a, "previousSibling");
        },
        nextAll: function(a) {
            return fb.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return fb.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return fb.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return fb.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return fb.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return fb.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || fb.merge([], a.childNodes);
        }
    }, function(a, b) {
        fb.fn[a] = function(c, d) {
            var e = fb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), 
            this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e);
        };
    }), fb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [ d ] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                return 1 === a.nodeType;
            }));
        },
        dir: function(a, c, d) {
            for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (f && fb(a).is(d)) break;
                e.push(a);
            }
            return e;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Hb = /<([\w:]+)/, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /^(?:checkbox|radio)$/i, Lb = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, Nb = /^true\/(.*)/, Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, 
    Pb.th = Pb.td, fb.fn.extend({
        text: function(a) {
            return fb.access(this, function(a) {
                return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fb.cleanData(q(c)), 
            c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fb.cleanData(q(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fb.clone(this, a, b);
            });
        },
        html: function(a) {
            return fb.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Gb, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), 
                        c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = fb.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d));
            }, !0), b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b, c) {
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, o = k - 1, p = a[0], r = fb.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p)) return this.each(function(d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c);
            });
            if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 
            1 === d.childNodes.length && (d = e), e)) {
                for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fb.clone(h, !0, !0), 
                g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++) h = f[j], 
                Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")));
            }
            return this;
        }
    }), fb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fb.fn[a] = function(a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            fb(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d);
        };
    }), fb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = fb.contains(a.ownerDocument, a);
            if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a))) for (g = q(h), 
            f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
            if (b) if (c) for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]); else p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++) if (e = a[k], 
            e || 0 === e) if ("object" === fb.type(e)) fb.merge(n, e.nodeType ? [ e ] : e); else if (Ib.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.firstChild;
                fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = "";
            } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++]; ) if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), 
            f = q(m.appendChild(e), "script"), i && o(f), c)) for (j = 0; e = f[j++]; ) Mb.test(e.type || "") && c.push(e);
            return m;
        },
        cleanData: function(a) {
            for (var c, d, f, g, h, i, j = fb.event.special, k = 0; (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length) for (i = 0; (g = f[i]) !== b; i++) j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                    qb.cache[h] && delete qb.cache[h];
                }
                delete pb.cache[d[pb.expando]];
            }
        },
        _evalUrl: function(a) {
            return fb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), fb.fn.extend({
        wrapAll: function(a) {
            var b;
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(fb.isFunction(a) ? function(b) {
                fb(this).wrapInner(a.call(this, b));
            } : function() {
                var b = fb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = fb.isFunction(a);
            return this.each(function(c) {
                fb(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + gb + ")(.*)$", "i"), Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + gb + ")", "i"), Xb = {
        BODY: "block"
    }, Yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Zb = {
        letterSpacing: 0,
        fontWeight: 400
    }, $b = [ "Top", "Right", "Bottom", "Left" ], _b = [ "Webkit", "O", "Moz", "ms" ];
    fb.fn.extend({
        css: function(a, c) {
            return fb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (fb.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fb.css(a, c[h], !1, e);
                    return g;
                }
                return d !== b ? fb.style(a, c, d) : fb.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : t(this)) ? fb(this).show() : fb(this).hide();
            });
        }
    }), fb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Qb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = fb.camelCase(c), j = a.style;
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
                d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, 
                "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), 
                g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), 
                fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0);
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = fb.camelCase(c);
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
            h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), 
            "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f;
        }
    }), Qb = function(a, c, d) {
        var e, f, g, h = d || u(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), 
        Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }, fb.each([ "height", "width" ], function(a, b) {
        fb.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function() {
                    return y(a, b, d);
                }) : y(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && u(a);
                return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), fb(function() {
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? fb.swap(a, {
                    display: "inline-block"
                }, Qb, [ a, "marginRight" ]) : void 0;
            }
        }), !fb.support.pixelPosition && fb.fn.position && fb.each([ "top", "left" ], function(a, b) {
            fb.cssHooks[b] = {
                get: function(a, c) {
                    return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0;
                }
            };
        });
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, fb.expr.filters.visible = function(a) {
        return !fb.expr.filters.hidden(a);
    }), fb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Tb.test(a) || (fb.cssHooks[a + b].set = w);
    });
    var ac = /%20/g, bc = /\[\]$/, cc = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({
        serialize: function() {
            return fb.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a));
            }).map(function(a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(cc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(cc, "\r\n")
                };
            }).get();
        }
    }), fb.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a)) fb.each(a, function() {
            f(this.name, this.value);
        }); else for (d in a) B(d, a[d], c, f);
        return e.join("&").replace(ac, "+");
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), fb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var fc, gc, hc = fb.now(), ic = /\?/, jc = /#.*$/, kc = /([?&])_=[^&]*/, lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nc = /^(?:GET|HEAD)$/, oc = /^\/\//, pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qc = fb.fn.load, rc = {}, sc = {}, tc = "*/".concat("*");
    try {
        gc = S.href;
    } catch (uc) {
        gc = T.createElement("a"), gc.href = "", gc = gc.href;
    }
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function(a, c, d) {
        if ("string" != typeof a && qc) return qc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function(a) {
            g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a);
        }).complete(d && function(a, b) {
            h.each(d, g || [ a.responseText, b, a ]);
        }), this;
    }, fb.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        fb.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), fb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gc,
            type: "GET",
            isLocal: mc.test(fc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fb.parseJSON,
                "text xml": fb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a);
        },
        ajaxPrefilter: C(rc),
        ajaxTransport: C(sc),
        ajax: function(a, c) {
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), 
                j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), 
                v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), 
                w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [ w, m, j ? l : s ]), 
                q.fireWith(n, [ w, x ]), k && (o.trigger("ajaxComplete", [ w, m ]), --fb.active || fb.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event, p = fb.Deferred(), q = fb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!h) for (h = {}; b = lc.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [ r[b], a[b] ]; else w.always(a[w.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    return e && e.abort(b), d(0, b), this;
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [ "" ], 
            null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), 
            D(rc, m, c, w), 2 === u) return w;
            k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), 
            m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), 
            m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), 
            fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (e = D(sc, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [ w, m ]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, e.send(s, d);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return fb.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return fb.get(a, b, c, "script");
        }
    }), fb.each([ "get", "post" ], function(a, c) {
        fb[c] = function(a, d, e, f) {
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), fb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fb.globalEval(a), a;
            }
        }
    }), fb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), fb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fb("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), T.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var vc = [], wc = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = vc.pop() || fb.expando + "_" + hc++;
            return this[a] = !0, a;
        }
    }), fb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || fb.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), 
            h = g = b;
        }), "script") : void 0;
    }), fb.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var xc = fb.ajaxSettings.xhr(), yc = {
        0: 200,
        1223: 204
    }, zc = 0, Ac = {};
    a.ActiveXObject && fb(a).on("unload", function() {
        for (var a in Ac) Ac[a]();
        Ac = b;
    }), fb.support.cors = !!xc && "withCredentials" in xc, fb.support.ajax = xc = !!xc, 
    fb.ajaxTransport(function(a) {
        var c;
        return fb.support.cors || xc && !a.crossDomain ? {
            send: function(d, e) {
                var f, g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (f in a.xhrFields) h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d) h.setRequestHeader(f, d[f]);
                c = function(a) {
                    return function() {
                        c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                            text: h.responseText
                        } : b, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null);
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/, Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"), Fc = /queueHooks$/, Gc = [ L ], Hc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ec.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    fb.Animation = fb.extend(J, {
        tweener: function(a, b) {
            fb.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Gc.unshift(a) : Gc.push(a);
        }
    }), fb.Tween = M, M.prototype = {
        constructor: M,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : M.propHooks._default.set(this), this;
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, fb.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e);
        };
    }), fb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function() {
                var b = J(this, fb.extend({}, a), f);
                (e || qb.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = fb.timers, g = qb.get(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                (b || !d) && fb.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = qb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
                for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), fb.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), fb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {
            complete: c || !c && b || fb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fb.isFunction(b) && b
        };
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue);
        }, d;
    }, fb.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function() {
        var a, c = fb.timers, d = 0;
        for (Bc = fb.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b;
    }, fb.fx.timer = function(a) {
        a() && fb.timers.push(a) && fb.fx.start();
    }, fb.fx.interval = 13, fb.fx.start = function() {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval));
    }, fb.fx.stop = function() {
        clearInterval(Cc), Cc = null;
    }, fb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function(a) {
        return fb.grep(fb.timers, function(b) {
            return a === b.elem;
        }).length;
    }), fb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            fb.offset.setOffset(this, a, b);
        });
        var c, d, e = this[0], f = {
            top: 0,
            left: 0
        }, g = e && e.ownerDocument;
        if (g) return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), 
        d = O(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f;
    }, fb.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), 
            i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, fb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), 
                d.left += fb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fb.css(c, "marginTop", !0),
                    left: b.left - d.left - fb.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position"); ) a = a.offsetParent;
                return a || U;
            });
        }
    }), fb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function(f) {
            return fb.access(this, function(c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : void (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g);
            }, c, f, arguments.length, null);
        };
    }), fb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        fb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            fb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function(c, d, e) {
                    var f;
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), fb.fn.size = function() {
        return this.length;
    }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function() {
        return fb;
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb);
}(window), function() {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function(a) {
        return a instanceof x ? a : this instanceof x ? void (this._wrapped = a) : new x(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), 
    exports._ = x) : a._ = x, x.VERSION = "1.4.4";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a) if (l && a.forEach === l) a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return;
        } else for (var g in a) if (x.has(a, g) && b.call(d, a[g], g, a) === c) return;
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d[d.length] = b.call(c, a, e, f);
        }), d);
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), 
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), 
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length;
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0;
        }), d;
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a);
        }), d);
    }, x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e);
        }, c);
    }, x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c;
        }), !!e);
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0;
        }), !!e);
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b;
        });
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c);
        });
    }, x.pluck = function(a, b) {
        return x.map(a, function(a) {
            return a[b];
        });
    }, x.where = function(a, b, c) {
        return x.isEmpty(b) ? c ? null : [] : x[c ? "find" : "filter"](a, function(a) {
            for (var c in b) if (b[c] !== a[c]) return !1;
            return !0;
        });
    }, x.findWhere = function(a, b) {
        return x.where(a, b, !0);
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return -1 / 0;
        var d = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a;
        }), d;
    };
    var B = function(a) {
        return x.isFunction(a) ? a : function(b) {
            return b[a];
        };
    };
    x.sortBy = function(a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1;
            }
            return a.index < b.index ? -1 : 1;
        }), "value");
    };
    var C = function(a, b, c, d) {
        var e = {}, f = B(b || x.identity);
        return y(a, function(b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b);
        }), e;
    };
    x.groupBy = function(a, b, c) {
        return C(a, b, c, function(a, b, c) {
            (x.has(a, b) ? a[b] : a[b] = []).push(c);
        });
    }, x.countBy = function(a, b, c) {
        return C(a, b, c, function(a, b) {
            x.has(a, b) || (a[b] = 0), a[b]++;
        });
    }, x.sortedIndex = function(a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h;
        }
        return f;
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : [];
    }, x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length;
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b);
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b));
    }, x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0));
    }, x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b);
    }, x.compact = function(a) {
        return x.filter(a, x.identity);
    };
    var D = function(a, b, c) {
        return y(a, function(a) {
            x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a);
        }), c;
    };
    x.flatten = function(a, b) {
        return D(a, b, []);
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1));
    }, x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]));
        }), f;
    }, x.union = function() {
        return x.uniq(i.apply(d, arguments));
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.indexOf(b, a) >= 0;
            });
        });
    }, x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a);
        });
    }, x.zip = function() {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = new Array(b), d = 0; b > d; d++) c[d] = x.pluck(a, "" + d);
        return c;
    }, x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c;
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c;
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (;e > d; d++) if (a[d] === b) return d;
        return -1;
    }, x.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; ) if (a[e] === b) return e;
        return -1;
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; ) f[e++] = a, 
        a += c;
        return f;
    }, x.bind = function(a, b) {
        if (a.bind === w && w) return w.apply(a, h.call(arguments, 1));
        var c = h.call(arguments, 2);
        return function() {
            return a.apply(b, c.concat(h.call(arguments)));
        };
    }, x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(h.call(arguments)));
        };
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        return 0 === b.length && (b = x.functions(a)), y(b, function(b) {
            a[b] = x.bind(a[b], a);
        }), a;
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity), function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments);
        };
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, x.defer = function(a) {
        return x.delay.apply(x, [ a, 1 ].concat(h.call(arguments, 1)));
    }, x.throttle = function(a, b) {
        var c, d, e, f, g = 0, h = function() {
            g = new Date(), e = null, f = a.apply(c, d);
        };
        return function() {
            var i = new Date(), j = b - (i - g);
            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), 
            f;
        };
    }, x.debounce = function(a, b, c) {
        var d, e;
        return function() {
            var f = this, g = arguments, h = function() {
                d = null, c || (e = a.apply(f, g));
            }, i = c && !d;
            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e;
        };
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b);
        };
    }, x.wrap = function(a, b) {
        return function() {
            var c = [ a ];
            return g.apply(c, arguments), b.apply(this, c);
        };
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [ a[c].apply(this, b) ];
            return b[0];
        };
    }, x.after = function(a, b) {
        return 0 >= a ? b() : function() {
            return --a < 1 ? b.apply(this, arguments) : void 0;
        };
    }, x.keys = v || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && (b[b.length] = c);
        return b;
    }, x.values = function(a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push(a[c]);
        return b;
    }, x.pairs = function(a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push([ c, a[c] ]);
        return b;
    }, x.invert = function(a) {
        var b = {};
        for (var c in a) x.has(a, c) && (b[a[c]] = c);
        return b;
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort();
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) a[c] = b[c];
        }), a;
    }, x.pick = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c]);
        }), b;
    }, x.omit = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b;
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) null == a[c] && (a[c] = b[c]);
        }), a;
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a;
    }, x.tap = function(a, b) {
        return b(a), a;
    };
    var E = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--; ) if (c[f] == a) return d[f] == b;
        c.push(a), d.push(b);
        var g = 0, h = !0;
        if ("[object Array]" == e) {
            if (g = a.length, h = g == b.length) for (;g-- && (h = E(a[g], b[g], c, d)); ) ;
        } else {
            var i = a.constructor, k = b.constructor;
            if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k)) return !1;
            for (var l in a) if (x.has(a, l) && (g++, !(h = x.has(b, l) && E(a[l], b[l], c, d)))) break;
            if (h) {
                for (l in b) if (x.has(b, l) && !g--) break;
                h = !g;
            }
        }
        return c.pop(), d.pop(), h;
    };
    x.isEqual = function(a, b) {
        return E(a, b, [], []);
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return !1;
        return !0;
    }, x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType);
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a);
    }, x.isObject = function(a) {
        return a === Object(a);
    }, y([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"));
    }), "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a;
    }), x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    }, x.isNaN = function(a) {
        return x.isNumber(a) && a != +a;
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a);
    }, x.isNull = function(a) {
        return null === a;
    }, x.isUndefined = function(a) {
        return void 0 === a;
    }, x.has = function(a, b) {
        return k.call(a, b);
    }, x.noConflict = function() {
        return a._ = b, this;
    }, x.identity = function(a) {
        return a;
    }, x.times = function(a, b, c) {
        for (var d = Array(a), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d;
    }, x.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
    };
    var F = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    F.unescape = x.invert(F.escape);
    var G = {
        escape: new RegExp("[" + x.keys(F.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(F.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(G[a], function(b) {
                return F[a][b];
            });
        };
    }), x.result = function(a, b) {
        if (null == a) return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c;
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [ this._wrapped ];
                return g.apply(a, arguments), L.call(this, c.apply(x, a));
            };
        });
    };
    var H = 0;
    x.uniqueId = function(a) {
        var b = ++H + "";
        return a ? a + b : b;
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/, J = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, K = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([ (c.escape || I).source, (c.interpolate || I).source, (c.evaluate || I).source ].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(K, function(a) {
                return "\\" + J[a];
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), 
            e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b;
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g);
        } catch (h) {
            throw h.source = g, h;
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x);
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i;
    }, x.chain = function(a) {
        return x(a).chain();
    };
    var L = function(a) {
        return this._chain ? x(a).chain() : a;
    };
    x.mixin(x), y([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], 
            L.call(this, c);
        };
    }), y([ "concat", "join", "slice" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return L.call(this, b.apply(this._wrapped, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), function() {
    var a, b = this, c = b.Backbone, d = [], e = d.push, f = d.slice, g = d.splice;
    a = "undefined" != typeof exports ? exports : b.Backbone = {}, a.VERSION = "1.0.0";
    var h = b._;
    h || "undefined" == typeof require || (h = require("underscore")), a.$ = b.jQuery || b.Zepto || b.ender || b.$, 
    a.noConflict = function() {
        return b.Backbone = c, this;
    }, a.emulateHTTP = !1, a.emulateJSON = !1;
    var i = a.Events = {
        on: function(a, b, c) {
            if (!k(this, "on", a, [ b, c ]) || !b) return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }), this;
        },
        once: function(a, b, c) {
            if (!k(this, "once", a, [ b, c ]) || !b) return this;
            var d = this, e = h.once(function() {
                d.off(a, e), b.apply(this, arguments);
            });
            return e._callback = b, this.on(a, e, c);
        },
        off: function(a, b, c) {
            var d, e, f, g, i, j, l, m;
            if (!this._events || !k(this, "off", a, [ b, c ])) return this;
            if (!a && !b && !c) return this._events = {}, this;
            for (g = a ? [ a ] : h.keys(this._events), i = 0, j = g.length; j > i; i++) if (a = g[i], 
            f = this._events[a]) {
                if (this._events[a] = d = [], b || c) for (l = 0, m = f.length; m > l; l++) e = f[l], 
                (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) && d.push(e);
                d.length || delete this._events[a];
            }
            return this;
        },
        trigger: function(a) {
            if (!this._events) return this;
            var b = f.call(arguments, 1);
            if (!k(this, "trigger", a, b)) return this;
            var c = this._events[a], d = this._events.all;
            return c && l(c, b), d && l(d, arguments), this;
        },
        stopListening: function(a, b, c) {
            var d = this._listeners;
            if (!d) return this;
            var e = !b && !c;
            "object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
            for (var f in d) d[f].off(b, c, this), e && delete this._listeners[f];
            return this;
        }
    }, j = /\s+/, k = function(a, b, c, d) {
        if (!c) return !0;
        if ("object" == typeof c) {
            for (var e in c) a[b].apply(a, [ e, c[e] ].concat(d));
            return !1;
        }
        if (j.test(c)) {
            for (var f = c.split(j), g = 0, h = f.length; h > g; g++) a[b].apply(a, [ f[g] ].concat(d));
            return !1;
        }
        return !0;
    }, l = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
          case 0:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx);
            return;

          case 1:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f);
            return;

          case 2:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f, g);
            return;

          case 3:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f, g, h);
            return;

          default:
            for (;++d < e; ) (c = a[d]).callback.apply(c.ctx, b);
        }
    }, m = {
        listenTo: "on",
        listenToOnce: "once"
    };
    h.each(m, function(a, b) {
        i[b] = function(b, c, d) {
            var e = this._listeners || (this._listeners = {}), f = b._listenerId || (b._listenerId = h.uniqueId("l"));
            return e[f] = b, "object" == typeof c && (d = this), b[a](c, d, this), this;
        };
    }), i.bind = i.on, i.unbind = i.off, h.extend(a, i);
    var n = a.Model = function(a, b) {
        var c, d = a || {};
        b || (b = {}), this.cid = h.uniqueId("c"), this.attributes = {}, h.extend(this, h.pick(b, o)), 
        b.parse && (d = this.parse(d, b) || {}), (c = h.result(this, "defaults")) && (d = h.defaults({}, d, c)), 
        this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments);
    }, o = [ "url", "urlRoot", "collection" ];
    h.extend(n.prototype, i, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return h.clone(this.attributes);
        },
        sync: function() {
            return a.sync.apply(this, arguments);
        },
        get: function(a) {
            return this.attributes[a];
        },
        escape: function(a) {
            return h.escape(this.get(a));
        },
        has: function(a) {
            return null != this.get(a);
        },
        set: function(a, b, c) {
            var d, e, f, g, i, j, k, l;
            if (null == a) return this;
            if ("object" == typeof a ? (e = a, c = b) : (e = {})[a] = b, c || (c = {}), !this._validate(e, c)) return !1;
            f = c.unset, i = c.silent, g = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = h.clone(this.attributes), 
            this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in e && (this.id = e[this.idAttribute]);
            for (d in e) b = e[d], h.isEqual(l[d], b) || g.push(d), h.isEqual(k[d], b) ? delete this.changed[d] : this.changed[d] = b, 
            f ? delete l[d] : l[d] = b;
            if (!i) {
                g.length && (this._pending = !0);
                for (var m = 0, n = g.length; n > m; m++) this.trigger("change:" + g[m], this, l[g[m]], c);
            }
            if (j) return this;
            if (!i) for (;this._pending; ) this._pending = !1, this.trigger("change", this, c);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(a, b) {
            return this.set(a, void 0, h.extend({}, b, {
                unset: !0
            }));
        },
        clear: function(a) {
            var b = {};
            for (var c in this.attributes) b[c] = void 0;
            return this.set(b, h.extend({}, a, {
                unset: !0
            }));
        },
        hasChanged: function(a) {
            return null == a ? !h.isEmpty(this.changed) : h.has(this.changed, a);
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? h.clone(this.changed) : !1;
            var b, c = !1, d = this._changing ? this._previousAttributes : this.attributes;
            for (var e in a) h.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
            return c;
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null;
        },
        previousAttributes: function() {
            return h.clone(this._previousAttributes);
        },
        fetch: function(a) {
            a = a ? h.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = this, c = a.success;
            return a.success = function(d) {
                return b.set(b.parse(d, a), a) ? (c && c(b, d, a), void b.trigger("sync", b, d, a)) : !1;
            }, L(this, a), this.sync("read", this, a);
        },
        save: function(a, b, c) {
            var d, e, f, g = this.attributes;
            if (null == a || "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, !(!d || c && c.wait || this.set(d, c))) return !1;
            if (c = h.extend({
                validate: !0
            }, c), !this._validate(d, c)) return !1;
            d && c.wait && (this.attributes = h.extend({}, g, d)), void 0 === c.parse && (c.parse = !0);
            var i = this, j = c.success;
            return c.success = function(a) {
                i.attributes = g;
                var b = i.parse(a, c);
                return c.wait && (b = h.extend(d || {}, b)), h.isObject(b) && !i.set(b, c) ? !1 : (j && j(i, a, c), 
                void i.trigger("sync", i, a, c));
            }, L(this, c), e = this.isNew() ? "create" : c.patch ? "patch" : "update", "patch" === e && (c.attrs = d), 
            f = this.sync(e, this, c), d && c.wait && (this.attributes = g), f;
        },
        destroy: function(a) {
            a = a ? h.clone(a) : {};
            var b = this, c = a.success, d = function() {
                b.trigger("destroy", b, b.collection, a);
            };
            if (a.success = function(e) {
                (a.wait || b.isNew()) && d(), c && c(b, e, a), b.isNew() || b.trigger("sync", b, e, a);
            }, this.isNew()) return a.success(), !1;
            L(this, a);
            var e = this.sync("delete", this, a);
            return a.wait || d(), e;
        },
        url: function() {
            var a = h.result(this, "urlRoot") || h.result(this.collection, "url") || K();
            return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(a) {
            return a;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return null == this.id;
        },
        isValid: function(a) {
            return this._validate({}, h.extend(a || {}, {
                validate: !0
            }));
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate) return !0;
            a = h.extend({}, this.attributes, a);
            var c = this.validationError = this.validate(a, b) || null;
            return c ? (this.trigger("invalid", this, c, h.extend(b || {}, {
                validationError: c
            })), !1) : !0;
        }
    });
    var p = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    h.each(p, function(a) {
        n.prototype[a] = function() {
            var b = f.call(arguments);
            return b.unshift(this.attributes), h[a].apply(h, b);
        };
    });
    var q = a.Collection = function(a, b) {
        b || (b = {}), b.url && (this.url = b.url), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), 
        this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, h.extend({
            silent: !0
        }, b));
    }, r = {
        add: !0,
        remove: !0,
        merge: !0
    }, s = {
        add: !0,
        merge: !1,
        remove: !1
    };
    h.extend(q.prototype, i, {
        model: n,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a);
            });
        },
        sync: function() {
            return a.sync.apply(this, arguments);
        },
        add: function(a, b) {
            return this.set(a, h.defaults(b || {}, s));
        },
        remove: function(a, b) {
            a = h.isArray(a) ? a.slice() : [ a ], b || (b = {});
            var c, d, e, f;
            for (c = 0, d = a.length; d > c; c++) f = this.get(a[c]), f && (delete this._byId[f.id], 
            delete this._byId[f.cid], e = this.indexOf(f), this.models.splice(e, 1), this.length--, 
            b.silent || (b.index = e, f.trigger("remove", f, this, b)), this._removeReference(f));
            return this;
        },
        set: function(a, b) {
            b = h.defaults(b || {}, r), b.parse && (a = this.parse(a, b)), h.isArray(a) || (a = a ? [ a ] : []);
            var c, d, f, i, j, k = b.at, l = this.comparator && null == k && b.sort !== !1, m = h.isString(this.comparator) ? this.comparator : null, n = [], o = [], p = {};
            for (c = 0, d = a.length; d > c; c++) (f = this._prepareModel(a[c], b)) && ((i = this.get(f)) ? (b.remove && (p[i.cid] = !0), 
            b.merge && (i.set(f.attributes, b), l && !j && i.hasChanged(m) && (j = !0))) : b.add && (n.push(f), 
            f.on("all", this._onModelEvent, this), this._byId[f.cid] = f, null != f.id && (this._byId[f.id] = f)));
            if (b.remove) {
                for (c = 0, d = this.length; d > c; ++c) p[(f = this.models[c]).cid] || o.push(f);
                o.length && this.remove(o, b);
            }
            if (n.length && (l && (j = !0), this.length += n.length, null != k ? g.apply(this.models, [ k, 0 ].concat(n)) : e.apply(this.models, n)), 
            j && this.sort({
                silent: !0
            }), b.silent) return this;
            for (c = 0, d = n.length; d > c; c++) (f = n[c]).trigger("add", f, this, b);
            return j && this.trigger("sort", this, b), this;
        },
        reset: function(a, b) {
            b || (b = {});
            for (var c = 0, d = this.models.length; d > c; c++) this._removeReference(this.models[c]);
            return b.previousModels = this.models, this._reset(), this.add(a, h.extend({
                silent: !0
            }, b)), b.silent || this.trigger("reset", this, b), this;
        },
        push: function(a, b) {
            return a = this._prepareModel(a, b), this.add(a, h.extend({
                at: this.length
            }, b)), a;
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a), b;
        },
        unshift: function(a, b) {
            return a = this._prepareModel(a, b), this.add(a, h.extend({
                at: 0
            }, b)), a;
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a), b;
        },
        slice: function(a, b) {
            return this.models.slice(a, b);
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a.cid || a];
        },
        at: function(a) {
            return this.models[a];
        },
        where: function(a, b) {
            return h.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a) if (a[c] !== b.get(c)) return !1;
                return !0;
            });
        },
        findWhere: function(a) {
            return this.where(a, !0);
        },
        sort: function(a) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}), h.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(h.bind(this.comparator, this)), 
            a.silent || this.trigger("sort", this, a), this;
        },
        sortedIndex: function(a, b, c) {
            b || (b = this.comparator);
            var d = h.isFunction(b) ? b : function(a) {
                return a.get(b);
            };
            return h.sortedIndex(this.models, a, d, c);
        },
        pluck: function(a) {
            return h.invoke(this.models, "get", a);
        },
        fetch: function(a) {
            a = a ? h.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = a.success, c = this;
            return a.success = function(d) {
                var e = a.reset ? "reset" : "set";
                c[e](d, a), b && b(c, d, a), c.trigger("sync", c, d, a);
            }, L(this, a), this.sync("read", this, a);
        },
        create: function(a, b) {
            if (b = b ? h.clone(b) : {}, !(a = this._prepareModel(a, b))) return !1;
            b.wait || this.add(a, b);
            var c = this, d = b.success;
            return b.success = function(e) {
                b.wait && c.add(a, b), d && d(a, e, b);
            }, a.save(null, b), a;
        },
        parse: function(a) {
            return a;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(a, b) {
            if (a instanceof n) return a.collection || (a.collection = this), a;
            b || (b = {}), b.collection = this;
            var c = new this.model(a, b);
            return c._validate(a, b) ? c : (this.trigger("invalid", this, a, b), !1);
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), 
            b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], 
            null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments));
        }
    });
    var t = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain" ];
    h.each(t, function(a) {
        q.prototype[a] = function() {
            var b = f.call(arguments);
            return b.unshift(this.models), h[a].apply(h, b);
        };
    });
    var u = [ "groupBy", "countBy", "sortBy" ];
    h.each(u, function(a) {
        q.prototype[a] = function(b, c) {
            var d = h.isFunction(b) ? b : function(a) {
                return a.get(b);
            };
            return h[a](this.models, d, c);
        };
    });
    var v = a.View = function(a) {
        this.cid = h.uniqueId("view"), this._configure(a || {}), this._ensureElement(), 
        this.initialize.apply(this, arguments), this.delegateEvents();
    }, w = /^(\S+)\s*(.*)$/, x = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    h.extend(v.prototype, i, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this;
        },
        setElement: function(b, c) {
            return this.$el && this.undelegateEvents(), this.$el = b instanceof a.$ ? b : a.$(b), 
            this.el = this.$el[0], c !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(a) {
            if (!a && !(a = h.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var b in a) {
                var c = a[b];
                if (h.isFunction(c) || (c = this[a[b]]), c) {
                    var d = b.match(w), e = d[1], f = d[2];
                    c = h.bind(c, this), e += ".delegateEvents" + this.cid, "" === f ? this.$el.on(e, c) : this.$el.on(e, f, c);
                }
            }
            return this;
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this;
        },
        _configure: function(a) {
            this.options && (a = h.extend({}, h.result(this, "options"), a)), h.extend(this, h.pick(a, x)), 
            this.options = a;
        },
        _ensureElement: function() {
            if (this.el) this.setElement(h.result(this, "el"), !1); else {
                var b = h.extend({}, h.result(this, "attributes"));
                this.id && (b.id = h.result(this, "id")), this.className && (b["class"] = h.result(this, "className"));
                var c = a.$("<" + h.result(this, "tagName") + ">").attr(b);
                this.setElement(c, !1);
            }
        }
    }), a.sync = function(b, c, d) {
        var e = y[b];
        h.defaults(d || (d = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON
        });
        var f = {
            type: e,
            dataType: "json"
        };
        if (d.url || (f.url = h.result(c, "url") || K()), null != d.data || !c || "create" !== b && "update" !== b && "patch" !== b || (f.contentType = "application/json", 
        f.data = JSON.stringify(d.attrs || c.toJSON(d))), d.emulateJSON && (f.contentType = "application/x-www-form-urlencoded", 
        f.data = f.data ? {
            model: f.data
        } : {}), d.emulateHTTP && ("PUT" === e || "DELETE" === e || "PATCH" === e)) {
            f.type = "POST", d.emulateJSON && (f.data._method = e);
            var g = d.beforeSend;
            d.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", e), g ? g.apply(this, arguments) : void 0;
            };
        }
        "GET" === f.type || d.emulateJSON || (f.processData = !1), "PATCH" !== f.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (f.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
        });
        var i = d.xhr = a.ajax(h.extend(f, d));
        return c.trigger("request", c, i, d), i;
    };
    var y = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments);
    };
    var z = a.Router = function(a) {
        a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, A = /\((.*?)\)/g, B = /(\(\?)?:\w+/g, C = /\*\w+/g, D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    h.extend(z.prototype, i, {
        initialize: function() {},
        route: function(b, c, d) {
            h.isRegExp(b) || (b = this._routeToRegExp(b)), h.isFunction(c) && (d = c, c = ""), 
            d || (d = this[c]);
            var e = this;
            return a.history.route(b, function(f) {
                var g = e._extractParameters(b, f);
                d && d.apply(e, g), e.trigger.apply(e, [ "route:" + c ].concat(g)), e.trigger("route", c, g), 
                a.history.trigger("route", e, c, g);
            }), this;
        },
        navigate: function(b, c) {
            return a.history.navigate(b, c), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = h.result(this, "routes");
                for (var a, b = h.keys(this.routes); null != (a = b.pop()); ) this.route(a, this.routes[a]);
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(D, "\\$&").replace(A, "(?:$1)?").replace(B, function(a, b) {
                return b ? a : "([^/]+)";
            }).replace(C, "(.*?)"), new RegExp("^" + a + "$");
        },
        _extractParameters: function(a, b) {
            var c = a.exec(b).slice(1);
            return h.map(c, function(a) {
                return a ? decodeURIComponent(a) : null;
            });
        }
    });
    var E = a.History = function() {
        this.handlers = [], h.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, F = /^[#\/]|\s+$/g, G = /^\/+|\/+$/g, H = /msie [\w.]+/, I = /\/$/;
    E.started = !1, h.extend(E.prototype, i, {
        interval: 50,
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : "";
        },
        getFragment: function(a, b) {
            if (null == a) if (this._hasPushState || !this._wantsHashChange || b) {
                a = this.location.pathname;
                var c = this.root.replace(I, "");
                a.indexOf(c) || (a = a.substr(c.length));
            } else a = this.getHash();
            return a.replace(F, "");
        },
        start: function(b) {
            if (E.started) throw new Error("Backbone.history has already been started");
            E.started = !0, this.options = h.extend({}, {
                root: "/"
            }, this.options, b), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
            this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var c = this.getFragment(), d = document.documentMode, e = H.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(G, "/"), e && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, 
            this.navigate(c)), this._hasPushState ? a.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !e ? a.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            this.fragment = c;
            var f = this.location, g = f.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !g ? (this.fragment = this.getFragment(null, !0), 
            this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && g && f.hash && (this.fragment = this.getHash().replace(F, ""), 
            this.history.replaceState({}, document.title, this.root + this.fragment + f.search)), 
            this.options.silent ? void 0 : this.loadUrl());
        },
        stop: function() {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), 
            E.started = !1;
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            });
        },
        checkUrl: function() {
            var a = this.getFragment();
            return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))), 
            a === this.fragment ? !1 : (this.iframe && this.navigate(a), void (this.loadUrl() || this.loadUrl(this.getHash())));
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a), c = h.any(this.handlers, function(a) {
                return a.route.test(b) ? (a.callback(b), !0) : void 0;
            });
            return c;
        },
        navigate: function(a, b) {
            if (!E.started) return !1;
            if (b && b !== !0 || (b = {
                trigger: b
            }), a = this.getFragment(a || ""), this.fragment !== a) {
                this.fragment = a;
                var c = this.root + a;
                if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c); else {
                    if (!this._wantsHashChange) return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), 
                    this._updateHash(this.iframe.location, a, b.replace));
                }
                b.trigger && this.loadUrl(a);
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b);
            } else a.hash = "#" + b;
        }
    }), a.history = new E();
    var J = function(a, b) {
        var c, d = this;
        c = a && h.has(a, "constructor") ? a.constructor : function() {
            return d.apply(this, arguments);
        }, h.extend(c, d, b);
        var e = function() {
            this.constructor = c;
        };
        return e.prototype = d.prototype, c.prototype = new e(), a && h.extend(c.prototype, a), 
        c.__super__ = d.prototype, c;
    };
    n.extend = q.extend = z.extend = v.extend = E.extend = J;
    var K = function() {
        throw new Error('A "url" property or function must be specified');
    }, L = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b), a.trigger("error", a, d, b);
        };
    };
}.call(this), !function(a) {
    "use strict";
    a(function() {
        a.support.transition = function() {
            var a = function() {
                var a, b = document.createElement("bootstrap"), c = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (a in c) if (void 0 !== b.style[a]) return c[a];
            }();
            return a && {
                end: a
            };
        }();
    });
}(window.jQuery), !function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]', c = function(c) {
        a(c).on("click", b, this.close);
    };
    c.prototype.close = function(b) {
        function c() {
            d.trigger("closed").remove();
        }
        var d, e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), d = a(f), b && b.preventDefault(), 
        d.length || (d = e.hasClass("alert") ? e : e.parent()), d.trigger(b = a.Event("close")), 
        b.isDefaultPrevented() || (d.removeClass("in"), a.support.transition && d.hasClass("fade") ? d.on(a.support.transition.end, c) : c());
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("alert");
            e || d.data("alert", e = new c(this)), "string" == typeof b && e[b].call(d);
        });
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this;
    }, a(document).on("click.alert.data-api", b, c.prototype.close);
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c);
    };
    b.prototype.setState = function(a) {
        var b = "disabled", c = this.$element, d = c.data(), e = c.is("input") ? "val" : "html";
        a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), 
        setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b);
        }, 0);
    }, b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons-radio"]');
        a && a.find(".active").removeClass("active"), this.$element.toggleClass("active");
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("button"), f = "object" == typeof c && c;
            e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c);
        });
    }, a.fn.button.defaults = {
        loadingText: "loading..."
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this;
    }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle");
    });
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
    };
    b.prototype = {
        cycle: function(b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
            this;
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
            this.$items.index(this.$active);
        },
        to: function(b) {
            var c = this.getActiveIndex(), d = this;
            if (!(b > this.$items.length - 1 || 0 > b)) return this.sliding ? this.$element.one("slid", function() {
                d.to(b);
            }) : c == b ? this.pause().cycle() : this.slide(b > c ? "next" : "prev", a(this.$items[b]));
        },
        pause: function(b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), 
            this.cycle(!0)), clearInterval(this.interval), this.interval = null, this;
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next");
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev");
        },
        slide: function(b, c) {
            var d, e = this.$element.find(".item.active"), f = c || e[b](), g = this.interval, h = "next" == b ? "left" : "right", i = "next" == b ? "first" : "last", j = this;
            if (this.sliding = !0, g && this.pause(), f = f.length ? f : this.$element.find(".item")[i](), 
            d = a.Event("slide", {
                relatedTarget: f[0],
                direction: h
            }), !f.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
                this.$element.one("slid", function() {
                    var b = a(j.$indicators.children()[j.getActiveIndex()]);
                    b && b.addClass("active");
                })), a.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), this.$element.one(a.support.transition.end, function() {
                        f.removeClass([ b, h ].join(" ")).addClass("active"), e.removeClass([ "active", h ].join(" ")), 
                        j.sliding = !1, setTimeout(function() {
                            j.$element.trigger("slid");
                        }, 0);
                    });
                } else {
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger("slid");
                }
                return g && this.cycle(), this;
            }
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("carousel"), f = a.extend({}, a.fn.carousel.defaults, "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }, a.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this;
    }, a(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d, e = a(this), f = a(e.attr("data-target") || (c = e.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), g = a.extend({}, f.data(), e.data());
        f.carousel(g), (d = e.attr("data-slide-to")) && f.data("carousel").pause().to(d).cycle(), 
        b.preventDefault();
    });
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), 
        this.options.toggle && this.toggle();
    };
    b.prototype = {
        constructor: b,
        dimension: function() {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height";
        },
        show: function() {
            var b, c, d, e;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (b = this.dimension(), c = a.camelCase([ "scroll", b ].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in"), 
                d && d.length) {
                    if (e = d.data("collapse"), e && e.transitioning) return;
                    d.collapse("hide"), e || d.data("collapse", null);
                }
                this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c]);
            }
        },
        hide: function() {
            var b;
            !this.transitioning && this.$element.hasClass("in") && (b = this.dimension(), this.reset(this.$element[b]()), 
            this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0));
        },
        reset: function(a) {
            var b = this.dimension();
            return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[null !== a ? "addClass" : "removeClass"]("collapse"), 
            this;
        },
        transition: function(b, c, d) {
            var e = this, f = function() {
                "show" == c.type && e.reset(), e.transitioning = 0, e.$element.trigger(d);
            };
            this.$element.trigger(c), c.isDefaultPrevented() || (this.transitioning = 1, this.$element[b]("in"), 
            a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f());
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
        }
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("collapse"), f = a.extend({}, a.fn.collapse.defaults, d.data(), "object" == typeof c && c);
            e || d.data("collapse", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.collapse.defaults = {
        toggle: !0
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this;
    }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e).data("collapse") ? "toggle" : d.data();
        d[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f);
    });
}(window.jQuery), !function(a) {
    "use strict";
    function b() {
        a(".dropdown-backdrop").remove(), a(d).each(function() {
            c(a(this)).removeClass("open");
        });
    }
    function c(b) {
        var c, d = b.attr("data-target");
        return d || (d = b.attr("href"), d = d && /#/.test(d) && d.replace(/.*(?=#[^\s]*$)/, "")), 
        c = d && a(d), c && c.length || (c = b.parent()), c;
    }
    var d = "[data-toggle=dropdown]", e = function(b) {
        var c = a(b).on("click.dropdown.data-api", this.toggle);
        a("html").on("click.dropdown.data-api", function() {
            c.parent().removeClass("open");
        });
    };
    e.prototype = {
        constructor: e,
        toggle: function() {
            var d, e, f = a(this);
            if (!f.is(".disabled, :disabled")) return d = c(f), e = d.hasClass("open"), b(), 
            e || ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", b), 
            d.toggleClass("open")), f.focus(), !1;
        },
        keydown: function(b) {
            var e, f, g, h, i;
            if (/(38|40|27)/.test(b.keyCode) && (e = a(this), b.preventDefault(), b.stopPropagation(), 
            !e.is(".disabled, :disabled"))) {
                if (g = c(e), h = g.hasClass("open"), !h || h && 27 == b.keyCode) return 27 == b.which && g.find(d).focus(), 
                e.click();
                f = a("[role=menu] li:not(.divider):visible a", g), f.length && (i = f.index(f.filter(":focus")), 
                38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < f.length - 1 && i++, ~i || (i = 0), 
                f.eq(i).focus());
            }
        }
    };
    var f = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("dropdown");
            d || c.data("dropdown", d = new e(this)), "string" == typeof b && d[b].call(c);
        });
    }, a.fn.dropdown.Constructor = e, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = f, this;
    }, a(document).on("click.dropdown.data-api", b).on("click.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.dropdown.data-api", d, e.prototype.toggle).on("keydown.dropdown.data-api", d + ", [role=menu]", e.prototype.keydown);
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), 
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    b.prototype = {
        constructor: b,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]();
        },
        show: function() {
            var b = this, c = a.Event("show");
            this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, 
            this.escape(), this.backdrop(function() {
                var c = a.support.transition && b.$element.hasClass("fade");
                b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), 
                c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), 
                b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                    b.$element.focus().trigger("shown");
                }) : b.$element.focus().trigger("shown");
            }));
        },
        hide: function(b) {
            b && b.preventDefault();
            b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, 
            this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), 
            a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal());
        },
        enforceFocus: function() {
            var b = this;
            a(document).on("focusin.modal", function(a) {
                b.$element[0] === a.target || b.$element.has(a.target).length || b.$element.focus();
            });
        },
        escape: function() {
            var a = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
                27 == b.which && a.hide();
            }) : this.isShown || this.$element.off("keyup.dismiss.modal");
        },
        hideWithTransition: function() {
            var b = this, c = setTimeout(function() {
                b.$element.off(a.support.transition.end), b.hideModal();
            }, 500);
            this.$element.one(a.support.transition.end, function() {
                clearTimeout(c), b.hideModal();
            });
        },
        hideModal: function() {
            var a = this;
            this.$element.hide(), this.backdrop(function() {
                a.removeBackdrop(), a.$element.trigger("hidden");
            });
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
        },
        backdrop: function(b) {
            var c = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var d = a.support.transition && c;
                if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), 
                this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), 
                d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                d ? this.$backdrop.one(a.support.transition.end, b) : b();
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b();
        }
    };
    var c = a.fn.modal;
    a.fn.modal = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("modal"), f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
            e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show();
        });
    }, a.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this;
    }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        b.preventDefault(), e.modal(f).one("hide", function() {
            c.focus();
        });
    });
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("tooltip", a, b);
    };
    b.prototype = {
        constructor: b,
        init: function(b, c, d) {
            var e, f, g, h, i;
            for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, 
            g = this.options.trigger.split(" "), i = g.length; i--; ) h = g[i], "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus", 
            f = "hover" == h ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
            this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(b) {
            return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b;
        },
        enter: function(b) {
            var c, d = a.fn[this.type].defaults, e = {};
            return this._options && a.each(this._options, function(a, b) {
                d[a] != b && (e[a] = b);
            }, this), c = a(b.currentTarget)[this.type](e).data(this.type), c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), 
            c.hoverState = "in", void (this.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show();
            }, c.options.delay.show))) : c.show();
        },
        leave: function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", 
            void (this.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide();
            }, c.options.delay.hide))) : c.hide();
        },
        show: function() {
            var b, c, d, e, f, g, h = a.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), 
                f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, 
                b.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), 
                c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
                  case "bottom":
                    g = {
                        top: c.top + c.height,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;

                  case "top":
                    g = {
                        top: c.top - e,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;

                  case "left":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left - d
                    };
                    break;

                  case "right":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left + c.width
                    };
                }
                this.applyPlacement(g, f), this.$element.trigger("shown");
            }
        },
        applyPlacement: function(a, b) {
            var c, d, e, f, g = this.tip(), h = g[0].offsetWidth, i = g[0].offsetHeight;
            g.offset(a).addClass(b).addClass("in"), c = g[0].offsetWidth, d = g[0].offsetHeight, 
            "top" == b && d != i && (a.top = a.top + i - d, f = !0), "bottom" == b || "top" == b ? (e = 0, 
            a.left < 0 && (e = -2 * a.left, a.left = 0, g.offset(a), c = g[0].offsetWidth, d = g[0].offsetHeight), 
            this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"), f && g.offset(a);
        },
        replaceArrow: function(a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
        },
        setContent: function() {
            var a = this.tip(), b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
        },
        hide: function() {
            function b() {
                var b = setTimeout(function() {
                    c.off(a.support.transition.end).detach();
                }, 500);
                c.one(a.support.transition.end, function() {
                    clearTimeout(b), c.detach();
                });
            }
            var c = this.tip(), d = a.Event("hide");
            return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), 
            a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(), this.$element.trigger("hidden"), 
            this);
        },
        fixTitle: function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
        },
        hasContent: function() {
            return this.getTitle();
        },
        getPosition: function() {
            var b = this.$element[0];
            return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                width: b.offsetWidth,
                height: b.offsetHeight
            }, this.$element.offset());
        },
        getTitle: function() {
            var a, b = this.$element, c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
        },
        tip: function() {
            return this.$tip = this.$tip || a(this.options.template);
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
        },
        enable: function() {
            this.enabled = !0;
        },
        disable: function() {
            this.enabled = !1;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        },
        toggle: function(b) {
            var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
            c.tip().hasClass("in") ? c.hide() : c.show();
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("tooltip"), f = "object" == typeof c && c;
            e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this;
    };
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b);
    };
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
        constructor: b,
        setContent: function() {
            var a = this.tip(), b = this.getTitle(), c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), 
            a.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var a, b = this.$element, c = this.options;
            return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr("data-content");
        },
        tip: function() {
            return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    });
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("popover"), f = "object" == typeof c && c;
            e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this;
    };
}(window.jQuery), !function(a) {
    "use strict";
    function b(b, c) {
        var d, e = a.proxy(this.process, this), f = a(a(b).is("body") ? window : b);
        this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = f.on("scroll.scroll-spy.data-api", e), 
        this.selector = (this.options.target || (d = a(b).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.$body = a("body"), this.refresh(), this.process();
    }
    b.prototype = {
        constructor: b,
        refresh: function() {
            var b, c = this;
            this.offsets = a([]), this.targets = a([]), b = this.$body.find(this.selector).map(function() {
                var b = a(this), d = b.data("target") || b.attr("href"), e = /^#\w/.test(d) && a(d);
                return e && e.length && [ [ e.position().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), d ] ] || null;
            }).sort(function(a, b) {
                return a[0] - b[0];
            }).each(function() {
                c.offsets.push(this[0]), c.targets.push(this[1]);
            });
        },
        process: function() {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
            if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
            for (a = e.length; a--; ) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
        },
        activate: function(b) {
            var c, d;
            this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), 
            d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', 
            c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), 
            c.trigger("activate");
        }
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("scrollspy"), f = "object" == typeof c && c;
            e || d.data("scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
        offset: 10
    }, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data());
        });
    });
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b);
    };
    b.prototype = {
        constructor: b,
        show: function() {
            var b, c, d, e = this.element, f = e.closest("ul:not(.dropdown-menu)"), g = e.attr("data-target");
            g || (g = e.attr("href"), g = g && g.replace(/.*(?=#[^\s]*$)/, "")), e.parent("li").hasClass("active") || (b = f.find(".active:last a")[0], 
            d = a.Event("show", {
                relatedTarget: b
            }), e.trigger(d), d.isDefaultPrevented() || (c = a(g), this.activate(e.parent("li"), f), 
            this.activate(c, c.parent(), function() {
                e.trigger({
                    type: "shown",
                    relatedTarget: b
                });
            })));
        },
        activate: function(b, c, d) {
            function e() {
                f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
                b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), 
                b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
            }
            var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
            g ? f.one(a.support.transition.end, e) : e(), f.removeClass("in");
        }
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("tab");
            e || d.data("tab", e = new b(this)), "string" == typeof c && e[c]();
        });
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this;
    }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show");
    });
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, 
        this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, 
        this.updater = this.options.updater || this.updater, this.source = this.options.source, 
        this.$menu = a(this.options.menu), this.shown = !1, this.listen();
    };
    b.prototype = {
        constructor: b,
        select: function() {
            var a = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(a)).change(), this.hide();
        },
        updater: function(a) {
            return a;
        },
        show: function() {
            var b = a.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: b.top + b.height,
                left: b.left
            }).show(), this.shown = !0, this;
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this;
        },
        lookup: function() {
            var b;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (b = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, 
            b ? this.process(b) : this);
        },
        process: function(b) {
            var c = this;
            return b = a.grep(b, function(a) {
                return c.matcher(a);
            }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
        },
        matcher: function(a) {
            return ~a.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(a) {
            for (var b, c = [], d = [], e = []; b = a.shift(); ) b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
            return c.concat(d, e);
        },
        highlighter: function(a) {
            var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
                return "<strong>" + b + "</strong>";
            });
        },
        render: function(b) {
            var c = this;
            return b = a(b).map(function(b, d) {
                return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), 
                b[0];
            }), b.first().addClass("active"), this.$menu.html(b), this;
        },
        next: function() {
            var b = this.$menu.find(".active").removeClass("active"), c = b.next();
            c.length || (c = a(this.$menu.find("li")[0])), c.addClass("active");
        },
        prev: function() {
            var a = this.$menu.find(".active").removeClass("active"), b = a.prev();
            b.length || (b = this.$menu.find("li").last()), b.addClass("active");
        },
        listen: function() {
            this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), 
            this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), 
            this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this));
        },
        eventSupported: function(a) {
            var b = a in this.$element;
            return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), 
            b;
        },
        move: function(a) {
            if (this.shown) {
                switch (a.keyCode) {
                  case 9:
                  case 13:
                  case 27:
                    a.preventDefault();
                    break;

                  case 38:
                    a.preventDefault(), this.prev();
                    break;

                  case 40:
                    a.preventDefault(), this.next();
                }
                a.stopPropagation();
            }
        },
        keydown: function(b) {
            this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [ 40, 38, 9, 13, 27 ]), this.move(b);
        },
        keypress: function(a) {
            this.suppressKeyPressRepeat || this.move(a);
        },
        keyup: function(a) {
            switch (a.keyCode) {
              case 40:
              case 38:
              case 16:
              case 17:
              case 18:
                break;

              case 9:
              case 13:
                if (!this.shown) return;
                this.select();
                break;

              case 27:
                if (!this.shown) return;
                this.hide();
                break;

              default:
                this.lookup();
            }
            a.stopPropagation(), a.preventDefault();
        },
        focus: function() {
            this.focused = !0;
        },
        blur: function() {
            this.focused = !1, !this.mousedover && this.shown && this.hide();
        },
        click: function(a) {
            a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus();
        },
        mouseenter: function(b) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active");
        },
        mouseleave: function() {
            this.mousedover = !1, !this.focused && this.shown && this.hide();
        }
    };
    var c = a.fn.typeahead;
    a.fn.typeahead = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("typeahead"), f = "object" == typeof c && c;
            e || d.data("typeahead", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function() {
        return a.fn.typeahead = c, this;
    }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
        var b = a(this);
        b.data("typeahead") || b.typeahead(b.data());
    });
}(window.jQuery), !function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function() {
            setTimeout(a.proxy(this.checkPosition, this), 1);
        }, this)), this.$element = a(b), this.checkPosition();
    };
    b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b, c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.bottom, h = f.top, i = "affix affix-top affix-bottom";
            "object" != typeof f && (g = h = f), "function" == typeof h && (h = f.top()), "function" == typeof g && (g = f.bottom()), 
            b = null != this.unpin && d + this.unpin <= e.top ? !1 : null != g && e.top + this.$element.height() >= c - g ? "bottom" : null != h && h >= d ? "top" : !1, 
            this.affixed !== b && (this.affixed = b, this.unpin = "bottom" == b ? e.top - d : null, 
            this.$element.removeClass(i).addClass("affix" + (b ? "-" + b : "")));
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("affix"), f = "object" == typeof c && c;
            e || d.data("affix", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
        offset: 0
    }, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), 
            c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
        });
    });
}(window.jQuery), function(a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], 
        !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b);
    }
    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility");
        }).length;
    }
    var e = 0, f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b);
                    }, c);
                }) : b.apply(this, arguments);
            };
        }(a.fn.focus),
        scrollParent: function() {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b;
        },
        zIndex: function(c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) for (var d, e, f = a(this[0]); f.length && f[0] !== document; ) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), 
                !isNaN(e) && 0 !== e)) return e;
                f = f.parent();
            }
            return 0;
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e);
            });
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && a(this).removeAttr("id");
            });
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b);
            };
        }) : function(b, c, d) {
            return !!a.data(b, d[3]);
        },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")));
        },
        tabbable: function(b) {
            var d = a.attr(b, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && c(b, !e);
        }
    }), a("<a>").outerWidth(1).jquery || a.each([ "Width", "Height" ], function(c, d) {
        function e(b, c, d, e) {
            return a.each(f, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), 
                e && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
            }), c;
        }
        var f = "Width" === d ? [ "Left", "Right" ] : [ "Top", "Bottom" ], g = d.toLowerCase(), h = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + d] = function(c) {
            return c === b ? h["inner" + d].call(this) : this.each(function() {
                a(this).css(g, e(this, c) + "px");
            });
        }, a.fn["outer" + d] = function(b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                a(this).css(g, e(this, b, !0, c) + "px");
            });
        };
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
        };
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), 
    a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([ c, d[e] ]);
            },
            call: function(a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (d = 0; e.length > d; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c);
            }
        },
        hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e);
        }
    });
}(jQuery), function(a, b) {
    var c = 0, d = Array.prototype.slice, e = a.cleanData;
    a.cleanData = function(b) {
        for (var c, d = 0; null != (c = b[d]); d++) try {
            a(c).triggerHandler("remove");
        } catch (f) {}
        e(b);
    }, a.widget = function(c, d, e) {
        var f, g, h, i, j = {}, k = c.split(".")[0];
        c = c.split(".")[1], f = k + "-" + c, e || (e = d, d = a.Widget), a.expr[":"][f.toLowerCase()] = function(b) {
            return !!a.data(b, f);
        }, a[k] = a[k] || {}, g = a[k][c], h = a[k][c] = function(a, c) {
            return this._createWidget ? (arguments.length && this._createWidget(a, c), b) : new h(a, c);
        }, a.extend(h, g, {
            version: e.version,
            _proto: a.extend({}, e),
            _childConstructors: []
        }), i = new d(), i.options = a.widget.extend({}, i.options), a.each(e, function(c, e) {
            return a.isFunction(e) ? (j[c] = function() {
                var a = function() {
                    return d.prototype[c].apply(this, arguments);
                }, b = function(a) {
                    return d.prototype[c].apply(this, a);
                };
                return function() {
                    var c, d = this._super, f = this._superApply;
                    return this._super = a, this._superApply = b, c = e.apply(this, arguments), this._super = d, 
                    this._superApply = f, c;
                };
            }(), b) : (j[c] = e, b);
        }), h.prototype = a.widget.extend(i, {
            widgetEventPrefix: g ? i.widgetEventPrefix : c
        }, j, {
            constructor: h,
            namespace: k,
            widgetName: c,
            widgetFullName: f
        }), g ? (a.each(g._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, h, c._proto);
        }), delete g._childConstructors) : d._childConstructors.push(h), a.widget.bridge(c, h);
    }, a.widget.extend = function(c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++) for (e in g[h]) f = g[h][e], 
        g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
        return c;
    }, a.widget.bridge = function(c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function(g) {
            var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [ g ].concat(i)) : g, this.each(h ? function() {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, 
                !1) : b) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'");
            } : function() {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this));
            }), j;
        };
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), 
            this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy();
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), 
            this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: a.noop,
        widget: function() {
            return this.element;
        },
        option: function(c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof c) if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; e.length - 1 > g; g++) f[e[g]] = f[e[g]] || {}, 
                f = f[e[g]];
                if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                f[c] = d;
            } else {
                if (d === b) return this.options[c] === b ? null : this.options[c];
                h[c] = d;
            }
            return this._setOptions(h), this;
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this;
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), 
            this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), 
            this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _on: function(c, d, e) {
            var f, g = this;
            "boolean" != typeof c && (e = d, d = c, c = !1), e ? (d = f = a(d), this.bindings = this.bindings.add(d)) : (e = d, 
            d = this.element, f = this.widget()), a.each(e, function(e, h) {
                function i() {
                    return c || g.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof h ? g[h] : h).apply(g, arguments) : b;
                }
                "string" != typeof h && (i.guid = h.guid = h.guid || i.guid || a.guid++);
                var j = e.match(/^(\w+)\s*(.*)$/), k = j[1] + g.eventNamespace, l = j[2];
                l ? f.delegate(l, k, i) : d.bind(k, i);
            });
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            a.unbind(b).undelegate(b);
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments);
            }
            var d = this;
            return setTimeout(c, b || 0);
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), 
            c.target = this.element[0], f = c.originalEvent) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [ c ].concat(d)) === !1 || c.isDefaultPrevented());
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c();
            });
        };
    });
}(jQuery), function(a) {
    var b = !1;
    a(document).mouseup(function() {
        b = !1;
    }), a.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a);
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), 
                c.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, 
                !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a);
                }, this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a);
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                c.preventDefault(), b = !0, !0)) : !0;
            }
        },
        _mouseMove: function(b) {
            return a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), 
            b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, 
            this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted);
        },
        _mouseUp: function(b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(b)), !1;
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
}(jQuery), function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), 
            this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), 
            this._mouseInit();
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), 
            this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body");
            }), !0) : !1);
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), 
            this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), 
            this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), 
            this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), 
            this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), 
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
        },
        _mouseDrag: function(b, c) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), 
            this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), 
            !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position;
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
        },
        _mouseStop: function(b) {
            var c = this, d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), 
            this.dropped && (d = this.dropped, this.dropped = !1), "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear();
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1;
        },
        _mouseUp: function(b) {
            return a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this);
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), 
            this;
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0;
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [ b ])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), 
            d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), 
            d;
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            return e.containment ? "window" === e.containment ? void (this.containment = [ a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : "document" === e.containment ? void (this.containment = [ 0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), 
            c = a(e.containment), d = c[0], void (d && (b = "hidden" !== c.css("overflow"), 
            this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relative_container = c))) : void (this.containment = null);
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }), {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * d
            };
        },
        _generatePosition: function(b) {
            var c, d, e, f, g = this.options, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = b.pageX, j = b.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), 
            c = [ this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top ]) : c = this.containment, 
            b.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), 
            b.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), 
            b.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, 
            j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, 
            f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, 
            i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)), 
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1;
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [ c, d ]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), 
            a.Widget.prototype._trigger.call(this, b, c, d);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c) {
            var d = a(this).data("ui-draggable"), e = d.options, f = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [], a(e.connectToSortable).each(function() {
                var c = a.data(this, "ui-sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f));
            });
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable"), e = a.extend({}, c, {
                item: d.element
            });
            a.each(d.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, 
                this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), 
                this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e));
            });
        },
        drag: function(b, c) {
            var d = a(this).data("ui-draggable"), e = this;
            a.each(d.sortables, function() {
                var f = !1, g = this;
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, 
                this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, 
                a.each(d.sortables, function() {
                    return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, 
                    this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), 
                    f;
                })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), 
                this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return c.helper[0];
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), 
                this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, 
                this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, 
                this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, 
                d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, 
                this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, 
                this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), 
                this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, 
                this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), 
                d._trigger("fromSortable", b), d.dropped = !1);
            });
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var b = a("body"), c = a(this).data("ui-draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor);
        },
        stop: function() {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor);
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity);
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity);
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset());
        },
        drag: function(b) {
            var c = a(this).data("ui-draggable"), d = c.options, e = !1;
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), 
            d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), 
            d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), 
            e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b);
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var b = a(this).data("ui-draggable"), c = b.options;
            b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function() {
                var c = a(this), d = c.offset();
                this !== b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                });
            });
        },
        drag: function(b, c) {
            var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"), o = n.options, p = o.snapTolerance, q = c.offset.left, r = q + n.helperProportions.width, s = c.offset.top, t = s + n.helperProportions.height;
            for (l = n.snapElements.length - 1; l >= 0; l--) h = n.snapElements[l].left, i = h + n.snapElements[l].width, 
            j = n.snapElements[l].top, k = j + n.snapElements[l].height, h - p > r || q > i + p || j - p > t || s > k + p || !a.contains(n.snapElements[l].item.ownerDocument, n.snapElements[l].item) ? (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = !1) : ("inner" !== o.snapMode && (d = p >= Math.abs(j - t), 
            e = p >= Math.abs(k - s), f = p >= Math.abs(h - r), g = p >= Math.abs(i - q), d && (c.position.top = n._convertPositionTo("relative", {
                top: j - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h - n.helperProportions.width
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = p >= Math.abs(j - s), 
            e = p >= Math.abs(k - t), f = p >= Math.abs(h - q), g = p >= Math.abs(i - r), d && (c.position.top = n._convertPositionTo("relative", {
                top: j,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i - n.helperProportions.width
            }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = d || e || f || g || m);
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var b, c = this.data("ui-draggable").options, d = a.makeArray(a(c.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
            });
            d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function(c) {
                a(this).css("zIndex", b + c);
            }), this.css("zIndex", b + d.length));
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex);
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex);
        }
    });
}(jQuery), function(a) {
    function b(a, b, c) {
        return a > b && b + c > a;
    }
    a.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var b = this.options, c = b.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c);
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], 
            a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable");
        },
        _destroy: function() {
            for (var b = 0, c = a.ui.ddmanager.droppables[this.options.scope]; c.length > b; b++) c[b] === this && c.splice(b, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function(b, c) {
            "accept" === b && (this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c);
            }), a.Widget.prototype._setOption.apply(this, arguments);
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c));
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            c && this._trigger("deactivate", b, this.ui(c));
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), 
            this._trigger("over", b, this.ui(c)));
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), 
            this._trigger("out", b, this.ui(c)));
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current, e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var b = a.data(this, "ui-droppable");
                return b.options.greedy && !b.options.disabled && b.options.scope === d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                    offset: b.element.offset()
                }), b.options.tolerance) ? (e = !0, !1) : void 0;
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), 
            this.element) : !1) : !1;
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            };
        }
    }), a.ui.intersect = function(a, c, d) {
        if (!c.offset) return !1;
        var e, f, g = (a.positionAbs || a.position.absolute).left, h = g + a.helperProportions.width, i = (a.positionAbs || a.position.absolute).top, j = i + a.helperProportions.height, k = c.offset.left, l = k + c.proportions.width, m = c.offset.top, n = m + c.proportions.height;
        switch (d) {
          case "fit":
            return g >= k && l >= h && i >= m && n >= j;

          case "intersect":
            return g + a.helperProportions.width / 2 > k && l > h - a.helperProportions.width / 2 && i + a.helperProportions.height / 2 > m && n > j - a.helperProportions.height / 2;

          case "pointer":
            return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, 
            f = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, 
            b(f, m, c.proportions.height) && b(e, k, c.proportions.width);

          case "touch":
            return (i >= m && n >= i || j >= m && n >= j || m > i && j > n) && (g >= k && l >= g || h >= k && l >= h || k > g && h > l);

          default:
            return !1;
        }
    }, a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; f.length > d; d++) if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                for (e = 0; h.length > e; e++) if (h[e] === f[d].element[0]) {
                    f[d].proportions.height = 0;
                    continue a;
                }
                f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), 
                f[d].offset = f[d].element.offset(), f[d].proportions = {
                    width: f[d].element[0].offsetWidth,
                    height: f[d].element[0].offsetHeight
                });
            }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, c)));
            }), d;
        },
        dragStart: function(b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
            });
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a.data(this, "ui-droppable").options.scope === e;
                    }), f.length && (d = a.data(f[0], "ui-droppable"), d.greedyChild = "isover" === h)), 
                    d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, 
                    this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), 
                    d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)));
                }
            });
        },
        dragStop: function(b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
        }
    };
}(jQuery), window.CodeMirror = function() {
    "use strict";
    function a(c, d) {
        if (!(this instanceof a)) return new a(c, d);
        this.options = d = d || {};
        for (var e in bf) !d.hasOwnProperty(e) && bf.hasOwnProperty(e) && (d[e] = bf[e]);
        m(d);
        var f = "string" == typeof d.value ? 0 : d.value.first, g = this.display = b(c, f);
        g.wrapper.CodeMirror = this, j(this), d.autofocus && !Je && mb(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            draggingText: !1,
            highlight: new Rd()
        }, h(this), d.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap");
        var i = d.value;
        "string" == typeof i && (i = new of(d.value, d.mode)), eb(this, jd)(this, i), we && setTimeout($d(lb, this, !0), 20), 
        ob(this);
        var k;
        try {
            k = document.activeElement == g.input;
        } catch (l) {}
        k || d.autofocus && !Je ? setTimeout($d(Eb, this), 20) : Fb(this), eb(this, function() {
            for (var a in af) af.propertyIsEnumerable(a) && af[a](this, d[a], cf);
            for (var b = 0; b < gf.length; ++b) gf[b](this);
        })();
    }
    function b(a, b) {
        var c = {}, d = c.input = be("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");
        return ze ? d.style.width = "1000px" : d.setAttribute("wrap", "off"), Ie && (d.style.border = "1px solid black"), 
        d.setAttribute("autocorrect", "off"), d.setAttribute("autocapitalize", "off"), d.setAttribute("spellcheck", "false"), 
        c.inputDiv = be("div", [ d ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), 
        c.scrollbarH = be("div", [ be("div", null, null, "height: 1px") ], "CodeMirror-hscrollbar"), 
        c.scrollbarV = be("div", [ be("div", null, null, "width: 1px") ], "CodeMirror-vscrollbar"), 
        c.scrollbarFiller = be("div", null, "CodeMirror-scrollbar-filler"), c.gutterFiller = be("div", null, "CodeMirror-gutter-filler"), 
        c.lineDiv = be("div", null, "CodeMirror-code"), c.selectionDiv = be("div", null, null, "position: relative; z-index: 1"), 
        c.cursor = be("div", " ", "CodeMirror-cursor"), c.otherCursor = be("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"), 
        c.measure = be("div", null, "CodeMirror-measure"), c.lineSpace = be("div", [ c.measure, c.selectionDiv, c.lineDiv, c.cursor, c.otherCursor ], null, "position: relative; outline: none"), 
        c.mover = be("div", [ be("div", [ c.lineSpace ], "CodeMirror-lines") ], null, "position: relative"), 
        c.sizer = be("div", [ c.mover ], "CodeMirror-sizer"), c.heightForcer = be("div", null, null, "position: absolute; height: " + tf + "px; width: 1px;"), 
        c.gutters = be("div", null, "CodeMirror-gutters"), c.lineGutter = null, c.scroller = be("div", [ c.sizer, c.heightForcer, c.gutters ], "CodeMirror-scroll"), 
        c.scroller.setAttribute("tabIndex", "-1"), c.wrapper = be("div", [ c.inputDiv, c.scrollbarH, c.scrollbarV, c.scrollbarFiller, c.gutterFiller, c.scroller ], "CodeMirror"), 
        xe && (c.gutters.style.zIndex = -1, c.scroller.style.paddingRight = 0), a.appendChild ? a.appendChild(c.wrapper) : a(c.wrapper), 
        Ie && (d.style.width = "0px"), ze || (c.scroller.draggable = !0), Ee ? (c.inputDiv.style.height = "1px", 
        c.inputDiv.style.position = "absolute") : xe && (c.scrollbarH.style.minWidth = c.scrollbarV.style.minWidth = "18px"), 
        c.viewOffset = c.lastSizeC = 0, c.showingFrom = c.showingTo = b, c.lineNumWidth = c.lineNumInnerWidth = c.lineNumChars = null, 
        c.prevInput = "", c.alignWidgets = !1, c.pollingFast = !1, c.poll = new Rd(), c.cachedCharWidth = c.cachedTextHeight = null, 
        c.measureLineCache = [], c.measureLineCachePos = 0, c.inaccurateSelection = !1, 
        c.maxLine = null, c.maxLineLength = 0, c.maxLineChanged = !1, c.wheelDX = c.wheelDY = c.wheelStartX = c.wheelStartY = null, 
        c;
    }
    function c(b) {
        b.doc.mode = a.getMode(b.options, b.doc.modeOption), b.doc.iter(function(a) {
            a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null);
        }), b.doc.frontier = b.doc.first, F(b, 100), b.state.modeGen++, b.curOp && hb(b);
    }
    function d(a) {
        a.options.lineWrapping ? (a.display.wrapper.className += " CodeMirror-wrap", a.display.sizer.style.minWidth = "") : (a.display.wrapper.className = a.display.wrapper.className.replace(" CodeMirror-wrap", ""), 
        l(a)), f(a), hb(a), S(a), setTimeout(function() {
            n(a);
        }, 100);
    }
    function e(a) {
        var b = ab(a.display), c = a.options.lineWrapping, d = c && Math.max(5, a.display.scroller.clientWidth / bb(a.display) - 3);
        return function(e) {
            return Mc(a.doc, e) ? 0 : c ? (Math.ceil(e.text.length / d) || 1) * b : b;
        };
    }
    function f(a) {
        var b = a.doc, c = e(a);
        b.iter(function(a) {
            var b = c(a);
            b != a.height && nd(a, b);
        });
    }
    function g(a) {
        var b = jf[a.options.keyMap], c = b.style;
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (c ? " cm-keymap-" + c : ""), 
        a.state.disableInput = b.disableInput;
    }
    function h(a) {
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), 
        S(a);
    }
    function i(a) {
        j(a), hb(a), setTimeout(function() {
            p(a);
        }, 20);
    }
    function j(a) {
        var b = a.display.gutters, c = a.options.gutters;
        ce(b);
        for (var d = 0; d < c.length; ++d) {
            var e = c[d], f = b.appendChild(be("div", null, "CodeMirror-gutter " + e));
            "CodeMirror-linenumbers" == e && (a.display.lineGutter = f, f.style.width = (a.display.lineNumWidth || 1) + "px");
        }
        b.style.display = d ? "" : "none";
    }
    function k(a, b) {
        if (0 == b.height) return 0;
        for (var c, d = b.text.length, e = b; c = Jc(e); ) {
            var f = c.find();
            e = kd(a, f.from.line), d += f.from.ch - f.to.ch;
        }
        for (e = b; c = Kc(e); ) {
            var f = c.find();
            d -= e.text.length - f.from.ch, e = kd(a, f.to.line), d += e.text.length - f.to.ch;
        }
        return d;
    }
    function l(a) {
        var b = a.display, c = a.doc;
        b.maxLine = kd(c, c.first), b.maxLineLength = k(c, b.maxLine), b.maxLineChanged = !0, 
        c.iter(function(a) {
            var d = k(c, a);
            d > b.maxLineLength && (b.maxLineLength = d, b.maxLine = a);
        });
    }
    function m(a) {
        for (var b = !1, c = 0; c < a.gutters.length; ++c) "CodeMirror-linenumbers" == a.gutters[c] && (a.lineNumbers ? b = !0 : a.gutters.splice(c--, 1));
        !b && a.lineNumbers && a.gutters.push("CodeMirror-linenumbers");
    }
    function n(a) {
        var b = a.display, c = a.doc.height, d = c + K(b);
        b.sizer.style.minHeight = b.heightForcer.style.top = d + "px", b.gutters.style.height = Math.max(d, b.scroller.clientHeight - tf) + "px";
        var e = Math.max(d, b.scroller.scrollHeight), f = b.scroller.scrollWidth > b.scroller.clientWidth + 1, g = e > b.scroller.clientHeight + 1;
        g ? (b.scrollbarV.style.display = "block", b.scrollbarV.style.bottom = f ? he(b.measure) + "px" : "0", 
        b.scrollbarV.firstChild.style.height = e - b.scroller.clientHeight + b.scrollbarV.clientHeight + "px") : b.scrollbarV.style.display = "", 
        f ? (b.scrollbarH.style.display = "block", b.scrollbarH.style.right = g ? he(b.measure) + "px" : "0", 
        b.scrollbarH.firstChild.style.width = b.scroller.scrollWidth - b.scroller.clientWidth + b.scrollbarH.clientWidth + "px") : b.scrollbarH.style.display = "", 
        f && g ? (b.scrollbarFiller.style.display = "block", b.scrollbarFiller.style.height = b.scrollbarFiller.style.width = he(b.measure) + "px") : b.scrollbarFiller.style.display = "", 
        f && a.options.coverGutterNextToScrollbar && a.options.fixedGutter ? (b.gutterFiller.style.display = "block", 
        b.gutterFiller.style.height = he(b.measure) + "px", b.gutterFiller.style.width = b.gutters.offsetWidth + "px") : b.gutterFiller.style.display = "", 
        Fe && 0 === he(b.measure) && (b.scrollbarV.style.minWidth = b.scrollbarH.style.minHeight = Ge ? "18px" : "12px");
    }
    function o(a, b, c) {
        var d = a.scroller.scrollTop, e = a.wrapper.clientHeight;
        "number" == typeof c ? d = c : c && (d = c.top, e = c.bottom - c.top), d = Math.floor(d - J(a));
        var f = Math.ceil(d + e);
        return {
            from: pd(b, d),
            to: pd(b, f)
        };
    }
    function p(a) {
        var b = a.display;
        if (b.alignWidgets || b.gutters.firstChild && a.options.fixedGutter) {
            for (var c = s(b) - b.scroller.scrollLeft + a.doc.scrollLeft, d = b.gutters.offsetWidth, e = c + "px", f = b.lineDiv.firstChild; f; f = f.nextSibling) if (f.alignable) for (var g = 0, h = f.alignable; g < h.length; ++g) h[g].style.left = e;
            a.options.fixedGutter && (b.gutters.style.left = c + d + "px");
        }
    }
    function q(a) {
        if (!a.options.lineNumbers) return !1;
        var b = a.doc, c = r(a.options, b.first + b.size - 1), d = a.display;
        if (c.length != d.lineNumChars) {
            var e = d.measure.appendChild(be("div", [ be("div", c) ], "CodeMirror-linenumber CodeMirror-gutter-elt")), f = e.firstChild.offsetWidth, g = e.offsetWidth - f;
            return d.lineGutter.style.width = "", d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g), 
            d.lineNumWidth = d.lineNumInnerWidth + g, d.lineNumChars = d.lineNumInnerWidth ? c.length : -1, 
            d.lineGutter.style.width = d.lineNumWidth + "px", !0;
        }
        return !1;
    }
    function r(a, b) {
        return String(a.lineNumberFormatter(b + a.firstLineNumber));
    }
    function s(a) {
        return fe(a.scroller).left - fe(a.sizer).left;
    }
    function t(a, b, c) {
        for (var d, e = a.display.showingFrom, f = a.display.showingTo, g = o(a.display, a.doc, c); u(a, b, g) && (d = !0, 
        B(a), n(a), c && (c = Math.min(a.display.scroller.scrollHeight - a.display.scroller.clientHeight, "number" == typeof c ? c : c.top)), 
        g = o(a.display, a.doc, c), !(g.from >= a.display.showingFrom && g.to <= a.display.showingTo)); ) b = [];
        return d && (Nd(a, "update", a), (a.display.showingFrom != e || a.display.showingTo != f) && Nd(a, "viewportChange", a, a.display.showingFrom, a.display.showingTo)), 
        d;
    }
    function u(a, b, c) {
        var d = a.display, e = a.doc;
        if (!d.wrapper.clientWidth) return d.showingFrom = d.showingTo = e.first, void (d.viewOffset = 0);
        if (!(0 == b.length && c.from > d.showingFrom && c.to < d.showingTo)) {
            q(a) && (b = [ {
                from: e.first,
                to: e.first + e.size
            } ]);
            var f = d.sizer.style.marginLeft = d.gutters.offsetWidth + "px";
            d.scrollbarH.style.left = a.options.fixedGutter ? f : "0";
            var g = 1 / 0;
            if (a.options.lineNumbers) for (var h = 0; h < b.length; ++h) if (b[h].diff) {
                g = b[h].from;
                break;
            }
            var i = e.first + e.size, j = Math.max(c.from - a.options.viewportMargin, e.first), k = Math.min(i, c.to + a.options.viewportMargin);
            if (d.showingFrom < j && j - d.showingFrom < 20 && (j = Math.max(e.first, d.showingFrom)), 
            d.showingTo > k && d.showingTo - k < 20 && (k = Math.min(i, d.showingTo)), Te) for (j = od(Lc(e, kd(e, j))); i > k && Mc(e, kd(e, k)); ) ++k;
            var l = [ {
                from: Math.max(d.showingFrom, e.first),
                to: Math.min(d.showingTo, i)
            } ];
            if (l = l[0].from >= l[0].to ? [] : w(l, b), Te) for (var h = 0; h < l.length; ++h) for (var m, n = l[h]; m = Kc(kd(e, n.to - 1)); ) {
                var o = m.find().from.line;
                if (!(o > n.from)) {
                    l.splice(h--, 1);
                    break;
                }
                n.to = o;
            }
            for (var p = 0, h = 0; h < l.length; ++h) {
                var n = l[h];
                n.from < j && (n.from = j), n.to > k && (n.to = k), n.from >= n.to ? l.splice(h--, 1) : p += n.to - n.from;
            }
            if (p == k - j && j == d.showingFrom && k == d.showingTo) return void v(a);
            l.sort(function(a, b) {
                return a.from - b.from;
            });
            try {
                var r = document.activeElement;
            } catch (s) {}
            .7 * (k - j) > p && (d.lineDiv.style.display = "none"), y(a, j, k, l, g), d.lineDiv.style.display = "", 
            r && document.activeElement != r && r.offsetHeight && r.focus();
            var t = j != d.showingFrom || k != d.showingTo || d.lastSizeC != d.wrapper.clientHeight;
            t && (d.lastSizeC = d.wrapper.clientHeight, F(a, 400)), d.showingFrom = j, d.showingTo = k;
            for (var u, x = d.lineDiv.offsetTop, z = d.lineDiv.firstChild; z; z = z.nextSibling) if (z.lineObj) {
                if (xe) {
                    var A = z.offsetTop + z.offsetHeight;
                    u = A - x, x = A;
                } else {
                    var B = fe(z);
                    u = B.bottom - B.top;
                }
                var C = z.lineObj.height - u;
                if (2 > u && (u = ab(d)), C > .001 || -.001 > C) {
                    nd(z.lineObj, u);
                    var D = z.lineObj.widgets;
                    if (D) for (var h = 0; h < D.length; ++h) D[h].height = D[h].node.offsetHeight;
                }
            }
            return v(a), !0;
        }
    }
    function v(a) {
        var b = a.display.viewOffset = qd(a, kd(a.doc, a.display.showingFrom));
        a.display.mover.style.top = b + "px";
    }
    function w(a, b) {
        for (var c = 0, d = b.length || 0; d > c; ++c) {
            for (var e = b[c], f = [], g = e.diff || 0, h = 0, i = a.length; i > h; ++h) {
                var j = a[h];
                e.to <= j.from && e.diff ? f.push({
                    from: j.from + g,
                    to: j.to + g
                }) : e.to <= j.from || e.from >= j.to ? f.push(j) : (e.from > j.from && f.push({
                    from: j.from,
                    to: e.from
                }), e.to < j.to && f.push({
                    from: e.to + g,
                    to: j.to + g
                }));
            }
            a = f;
        }
        return a;
    }
    function x(a) {
        for (var b = a.display, c = {}, d = {}, e = b.gutters.firstChild, f = 0; e; e = e.nextSibling, 
        ++f) c[a.options.gutters[f]] = e.offsetLeft, d[a.options.gutters[f]] = e.offsetWidth;
        return {
            fixedPos: s(b),
            gutterTotalWidth: b.gutters.offsetWidth,
            gutterLeft: c,
            gutterWidth: d,
            wrapperWidth: b.wrapper.clientWidth
        };
    }
    function y(a, b, c, d, e) {
        function f(b) {
            var c = b.nextSibling;
            return ze && Ke && a.display.currentWheelTarget == b ? (b.style.display = "none", 
            b.lineObj = null) : b.parentNode.removeChild(b), c;
        }
        var g = x(a), h = a.display, i = a.options.lineNumbers;
        d.length || ze && a.display.currentWheelTarget || ce(h.lineDiv);
        var j = h.lineDiv, k = j.firstChild, l = d.shift(), m = b;
        for (a.doc.iter(b, c, function(b) {
            if (l && l.to == m && (l = d.shift()), Mc(a.doc, b)) {
                if (0 != b.height && nd(b, 0), b.widgets && k.previousSibling) for (var c = 0; c < b.widgets.length; ++c) {
                    var h = b.widgets[c];
                    if (h.showIfHidden) {
                        var n = k.previousSibling;
                        if (/pre/i.test(n.nodeName)) {
                            var o = be("div", null, null, "position: relative");
                            n.parentNode.replaceChild(o, n), o.appendChild(n), n = o;
                        }
                        var p = n.appendChild(be("div", [ h.node ], "CodeMirror-linewidget"));
                        h.handleMouseEvents || (p.ignoreEvents = !0), A(h, p, n, g);
                    }
                }
            } else if (l && l.from <= m && l.to > m) {
                for (;k.lineObj != b; ) k = f(k);
                i && m >= e && k.lineNumber && ee(k.lineNumber, r(a.options, m)), k = k.nextSibling;
            } else {
                if (b.widgets) for (var q, s = 0, t = k; t && 20 > s; ++s, t = t.nextSibling) if (t.lineObj == b && /div/i.test(t.nodeName)) {
                    q = t;
                    break;
                }
                var u = z(a, b, m, g, q);
                if (u != q) j.insertBefore(u, k); else {
                    for (;k != q; ) k = f(k);
                    k = k.nextSibling;
                }
                u.lineObj = b;
            }
            ++m;
        }); k; ) k = f(k);
    }
    function z(a, b, c, d, e) {
        var f, g = _c(a, b), h = b.gutterMarkers, i = a.display;
        if (!(a.options.lineNumbers || h || b.bgClass || b.wrapClass || b.widgets)) return g;
        if (e) {
            e.alignable = null;
            for (var j, k = !0, l = 0, m = null, n = e.firstChild; n; n = j) if (j = n.nextSibling, 
            /\bCodeMirror-linewidget\b/.test(n.className)) {
                for (var o = 0, p = !0; o < b.widgets.length; ++o) {
                    var q = b.widgets[o];
                    if (q.above || (m = n, p = !1), q.node == n.firstChild) {
                        A(q, n, e, d), ++l;
                        break;
                    }
                }
                if (o == b.widgets.length) {
                    k = !1;
                    break;
                }
            } else e.removeChild(n);
            e.insertBefore(g, m), k && l == b.widgets.length && (f = e, e.className = b.wrapClass || "");
        }
        if (f || (f = be("div", null, b.wrapClass, "position: relative"), f.appendChild(g)), 
        b.bgClass && f.insertBefore(be("div", null, b.bgClass + " CodeMirror-linebackground"), f.firstChild), 
        a.options.lineNumbers || h) {
            var s = f.insertBefore(be("div", null, null, "position: absolute; left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px"), f.firstChild);
            if (a.options.fixedGutter && (f.alignable || (f.alignable = [])).push(s), !a.options.lineNumbers || h && h["CodeMirror-linenumbers"] || (f.lineNumber = s.appendChild(be("div", r(a.options, c), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + d.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + i.lineNumInnerWidth + "px"))), 
            h) for (var t = 0; t < a.options.gutters.length; ++t) {
                var u = a.options.gutters[t], v = h.hasOwnProperty(u) && h[u];
                v && s.appendChild(be("div", [ v ], "CodeMirror-gutter-elt", "left: " + d.gutterLeft[u] + "px; width: " + d.gutterWidth[u] + "px"));
            }
        }
        if (xe && (f.style.zIndex = 2), b.widgets && f != e) for (var o = 0, w = b.widgets; o < w.length; ++o) {
            var q = w[o], x = be("div", [ q.node ], "CodeMirror-linewidget");
            q.handleMouseEvents || (x.ignoreEvents = !0), A(q, x, f, d), q.above ? f.insertBefore(x, a.options.lineNumbers && 0 != b.height ? s : g) : f.appendChild(x), 
            Nd(q, "redraw");
        }
        return f;
    }
    function A(a, b, c, d) {
        if (a.noHScroll) {
            (c.alignable || (c.alignable = [])).push(b);
            var e = d.wrapperWidth;
            b.style.left = d.fixedPos + "px", a.coverGutter || (e -= d.gutterTotalWidth, b.style.paddingLeft = d.gutterTotalWidth + "px"), 
            b.style.width = e + "px";
        }
        a.coverGutter && (b.style.zIndex = 5, b.style.position = "relative", a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"));
    }
    function B(a) {
        var b = a.display, c = Sb(a.doc.sel.from, a.doc.sel.to);
        if (c || a.options.showCursorWhenSelecting ? C(a) : b.cursor.style.display = b.otherCursor.style.display = "none", 
        c ? b.selectionDiv.style.display = "none" : D(a), a.options.moveInputWithCursor) {
            var d = Y(a, a.doc.sel.head, "div"), e = fe(b.wrapper), f = fe(b.lineDiv);
            b.inputDiv.style.top = Math.max(0, Math.min(b.wrapper.clientHeight - 10, d.top + f.top - e.top)) + "px", 
            b.inputDiv.style.left = Math.max(0, Math.min(b.wrapper.clientWidth - 10, d.left + f.left - e.left)) + "px";
        }
    }
    function C(a) {
        var b = a.display, c = Y(a, a.doc.sel.head, "div");
        b.cursor.style.left = c.left + "px", b.cursor.style.top = c.top + "px", b.cursor.style.height = Math.max(0, c.bottom - c.top) * a.options.cursorHeight + "px", 
        b.cursor.style.display = "", c.other ? (b.otherCursor.style.display = "", b.otherCursor.style.left = c.other.left + "px", 
        b.otherCursor.style.top = c.other.top + "px", b.otherCursor.style.height = .85 * (c.other.bottom - c.other.top) + "px") : b.otherCursor.style.display = "none";
    }
    function D(a) {
        function b(a, b, c, d) {
            0 > b && (b = 0), g.appendChild(be("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (null == c ? h - a : c) + "px; height: " + (d - b) + "px"));
        }
        function c(c, d, f) {
            function g(b, d) {
                return X(a, Rb(c, b), "div", l, d);
            }
            var j, k, l = kd(e, c), m = l.text.length;
            return je(rd(l), d || 0, null == f ? m : f, function(a, c, e) {
                var l, n, o, p = g(a, "left");
                if (a == c) l = p, n = o = p.left; else {
                    if (l = g(c - 1, "right"), "rtl" == e) {
                        var q = p;
                        p = l, l = q;
                    }
                    n = p.left, o = l.right;
                }
                null == d && 0 == a && (n = i), l.top - p.top > 3 && (b(n, p.top, null, p.bottom), 
                n = i, p.bottom < l.top && b(n, p.bottom, null, l.top)), null == f && c == m && (o = h), 
                (!j || p.top < j.top || p.top == j.top && p.left < j.left) && (j = p), (!k || l.bottom > k.bottom || l.bottom == k.bottom && l.right > k.right) && (k = l), 
                i + 1 > n && (n = i), b(n, l.top, o - n, l.bottom);
            }), {
                start: j,
                end: k
            };
        }
        var d = a.display, e = a.doc, f = a.doc.sel, g = document.createDocumentFragment(), h = d.lineSpace.offsetWidth, i = L(a.display);
        if (f.from.line == f.to.line) c(f.from.line, f.from.ch, f.to.ch); else {
            var j = kd(e, f.from.line), k = kd(e, f.to.line), l = Lc(e, j) == Lc(e, k), m = c(f.from.line, f.from.ch, l ? j.text.length : null).end, n = c(f.to.line, l ? 0 : null, f.to.ch).start;
            l && (m.top < n.top - 2 ? (b(m.right, m.top, null, m.bottom), b(i, n.top, n.left, n.bottom)) : b(m.right, m.top, n.left - m.right, m.bottom)), 
            m.bottom < n.top && b(i, m.bottom, null, n.top);
        }
        de(d.selectionDiv, g), d.selectionDiv.style.display = "";
    }
    function E(a) {
        if (a.state.focused) {
            var b = a.display;
            clearInterval(b.blinker);
            var c = !0;
            b.cursor.style.visibility = b.otherCursor.style.visibility = "", b.blinker = setInterval(function() {
                b.cursor.style.visibility = b.otherCursor.style.visibility = (c = !c) ? "" : "hidden";
            }, a.options.cursorBlinkRate);
        }
    }
    function F(a, b) {
        a.doc.mode.startState && a.doc.frontier < a.display.showingTo && a.state.highlight.set(b, $d(G, a));
    }
    function G(a) {
        var b = a.doc;
        if (b.frontier < b.first && (b.frontier = b.first), !(b.frontier >= a.display.showingTo)) {
            var c, d = +new Date() + a.options.workTime, e = pc(b.mode, I(a, b.frontier)), f = [];
            b.iter(b.frontier, Math.min(b.first + b.size, a.display.showingTo + 500), function(g) {
                if (b.frontier >= a.display.showingFrom) {
                    var h = g.styles;
                    g.styles = Xc(a, g, e);
                    for (var i = !h || h.length != g.styles.length, j = 0; !i && j < h.length; ++j) i = h[j] != g.styles[j];
                    i && (c && c.end == b.frontier ? c.end++ : f.push(c = {
                        start: b.frontier,
                        end: b.frontier + 1
                    })), g.stateAfter = pc(b.mode, e);
                } else Zc(a, g, e), g.stateAfter = b.frontier % 5 == 0 ? pc(b.mode, e) : null;
                return ++b.frontier, +new Date() > d ? (F(a, a.options.workDelay), !0) : void 0;
            }), f.length && eb(a, function() {
                for (var a = 0; a < f.length; ++a) hb(this, f[a].start, f[a].end);
            })();
        }
    }
    function H(a, b, c) {
        for (var d, e, f = a.doc, g = b, h = b - 100; g > h; --g) {
            if (g <= f.first) return f.first;
            var i = kd(f, g - 1);
            if (i.stateAfter && (!c || g <= f.frontier)) return g;
            var j = Sd(i.text, null, a.options.tabSize);
            (null == e || d > j) && (e = g - 1, d = j);
        }
        return e;
    }
    function I(a, b, c) {
        var d = a.doc, e = a.display;
        if (!d.mode.startState) return !0;
        var f = H(a, b, c), g = f > d.first && kd(d, f - 1).stateAfter;
        return g = g ? pc(d.mode, g) : qc(d.mode), d.iter(f, b, function(c) {
            Zc(a, c, g);
            var h = f == b - 1 || f % 5 == 0 || f >= e.showingFrom && f < e.showingTo;
            c.stateAfter = h ? pc(d.mode, g) : null, ++f;
        }), g;
    }
    function J(a) {
        return a.lineSpace.offsetTop;
    }
    function K(a) {
        return a.mover.offsetHeight - a.lineSpace.offsetHeight;
    }
    function L(a) {
        var b = de(a.measure, be("pre", null, null, "text-align: left")).appendChild(be("span", "x"));
        return b.offsetLeft;
    }
    function M(a, b, c, d, e) {
        var f = -1;
        d = d || P(a, b);
        for (var g = c; ;g += f) {
            var h = d[g];
            if (h) break;
            0 > f && 0 == g && (f = 1);
        }
        var i = (c > g || "right" == e) && null != h.topRight;
        return {
            left: c > g ? h.right : h.left,
            right: g > c ? h.left : h.right,
            top: i ? h.topRight : h.top,
            bottom: i ? h.bottomRight : h.bottom
        };
    }
    function N(a, b) {
        for (var c = a.display.measureLineCache, d = 0; d < c.length; ++d) {
            var e = c[d];
            if (e.text == b.text && e.markedSpans == b.markedSpans && a.display.scroller.clientWidth == e.width && e.classes == b.textClass + "|" + b.bgClass + "|" + b.wrapClass) return e;
        }
    }
    function O(a, b) {
        var c = N(a, b);
        c && (c.text = c.measure = c.markedSpans = null);
    }
    function P(a, b) {
        var c = N(a, b);
        if (c) return c.measure;
        var d = Q(a, b), e = a.display.measureLineCache, f = {
            text: b.text,
            width: a.display.scroller.clientWidth,
            markedSpans: b.markedSpans,
            measure: d,
            classes: b.textClass + "|" + b.bgClass + "|" + b.wrapClass
        };
        return 16 == e.length ? e[++a.display.measureLineCachePos % 16] = f : e.push(f), 
        d;
    }
    function Q(a, b) {
        function c(a, b) {
            b > q && (b = q), 0 > a && (a = 0);
            for (var c = 0; c < o.length; c += 2) {
                var d = o[c], e = o[c + 1];
                if (!(d > b || a > e) && (a >= d && e >= b || d >= a && b >= e || Math.min(b, e) - Math.max(a, d) >= b - a >> 1)) return o[c] = Math.min(a, d), 
                o[c + 1] = Math.max(b, e), c;
            }
            return o.push(a, b), c;
        }
        var d = a.display, e = Zd(b.text.length), f = _c(a, b, e);
        if (we && !xe && !a.options.lineWrapping && f.childNodes.length > 100) {
            for (var g = document.createDocumentFragment(), h = 10, i = f.childNodes.length, j = 0, k = Math.ceil(i / h); k > j; ++j) {
                for (var l = be("div", null, null, "display: inline-block"), m = 0; h > m && i; ++m) l.appendChild(f.firstChild), 
                --i;
                g.appendChild(l);
            }
            f.appendChild(g);
        }
        de(d.measure, f);
        var n = fe(d.lineDiv), o = [], p = Zd(b.text.length), q = f.offsetHeight;
        ye && d.measure.first != f && de(d.measure, f);
        for (var r, j = 0; j < e.length; ++j) if (r = e[j]) {
            var s, t = r;
            if (/\bCodeMirror-widget\b/.test(r.className) && r.getClientRects) {
                1 == r.firstChild.nodeType && (t = r.firstChild);
                var u = t.getClientRects(), v = u[0], w = u[u.length - 1];
                if (u.length > 1) {
                    var x = c(v.top - n.top, v.bottom - n.top), y = c(w.top - n.top, w.bottom - n.top);
                    p[j] = {
                        left: v.left - n.left,
                        right: w.right - n.left,
                        top: x,
                        topRight: y
                    };
                    continue;
                }
            }
            s = fe(t);
            var z = c(s.top - n.top, s.bottom - n.top), A = s.right;
            r.measureRight && (A = fe(r.measureRight).left), p[j] = {
                left: s.left - n.left,
                right: A - n.left,
                top: z
            };
        }
        for (var r, j = 0; j < p.length; ++j) if (r = p[j]) {
            var B = r.top, C = r.topRight;
            r.top = o[B], r.bottom = o[B + 1], null != C && (r.topRight = o[C], r.bottomRight = o[C + 1]);
        }
        return p;
    }
    function R(a, b) {
        var c = !1;
        if (b.markedSpans) for (var d = 0; d < b.markedSpans; ++d) {
            var e = b.markedSpans[d];
            !e.collapsed || null != e.to && e.to != b.text.length || (c = !0);
        }
        var f = !c && N(a, b);
        if (f) return M(a, b, b.text.length, f.measure, "right").right;
        var g = _c(a, b), h = g.appendChild(ie(a.display.measure));
        return de(a.display.measure, g), fe(h).right - fe(a.display.lineDiv).left;
    }
    function S(a) {
        a.display.measureLineCache.length = a.display.measureLineCachePos = 0, a.display.cachedCharWidth = a.display.cachedTextHeight = null, 
        a.options.lineWrapping || (a.display.maxLineChanged = !0), a.display.lineNumChars = null;
    }
    function T() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }
    function U() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }
    function V(a, b, c, d) {
        if (b.widgets) for (var e = 0; e < b.widgets.length; ++e) if (b.widgets[e].above) {
            var f = Rc(b.widgets[e]);
            c.top += f, c.bottom += f;
        }
        if ("line" == d) return c;
        d || (d = "local");
        var g = qd(a, b);
        if ("local" == d ? g += J(a.display) : g -= a.display.viewOffset, "page" == d || "window" == d) {
            var h = fe(a.display.lineSpace);
            g += h.top + ("window" == d ? 0 : U());
            var i = h.left + ("window" == d ? 0 : T());
            c.left += i, c.right += i;
        }
        return c.top += g, c.bottom += g, c;
    }
    function W(a, b, c) {
        if ("div" == c) return b;
        var d = b.left, e = b.top;
        if ("page" == c) d -= T(), e -= U(); else if ("local" == c || !c) {
            var f = fe(a.display.sizer);
            d += f.left, e += f.top;
        }
        var g = fe(a.display.lineSpace);
        return {
            left: d - g.left,
            top: e - g.top
        };
    }
    function X(a, b, c, d, e) {
        return d || (d = kd(a.doc, b.line)), V(a, d, M(a, d, b.ch, null, e), c);
    }
    function Y(a, b, c, d, e) {
        function f(b, f) {
            var g = M(a, d, b, e, f ? "right" : "left");
            return f ? g.left = g.right : g.right = g.left, V(a, d, g, c);
        }
        function g(a, b) {
            var c = h[b], d = c.level % 2;
            return a == ke(c) && b && c.level < h[b - 1].level ? (c = h[--b], a = le(c) - (c.level % 2 ? 0 : 1), 
            d = !0) : a == le(c) && b < h.length - 1 && c.level < h[b + 1].level && (c = h[++b], 
            a = ke(c) - c.level % 2, d = !1), d && a == c.to && a > c.from ? f(a - 1) : f(a, d);
        }
        d = d || kd(a.doc, b.line), e || (e = P(a, d));
        var h = rd(d), i = b.ch;
        if (!h) return f(i);
        var j = re(h, i), k = g(i, j);
        return null != Ff && (k.other = g(i, Ff)), k;
    }
    function Z(a, b, c, d) {
        var e = new Rb(a, b);
        return e.xRel = d, c && (e.outside = !0), e;
    }
    function $(a, b, c) {
        var d = a.doc;
        if (c += a.display.viewOffset, 0 > c) return Z(d.first, 0, !0, -1);
        var e = pd(d, c), f = d.first + d.size - 1;
        if (e > f) return Z(d.first + d.size - 1, kd(d, f).text.length, !0, 1);
        for (0 > b && (b = 0); ;) {
            var g = kd(d, e), h = _(a, g, e, b, c), i = Kc(g), j = i && i.find();
            if (!i || !(h.ch > j.from.ch || h.ch == j.from.ch && h.xRel > 0)) return h;
            e = j.to.line;
        }
    }
    function _(a, b, c, d, e) {
        function f(d) {
            var e = Y(a, Rb(c, d), "line", b, j);
            return h = !0, g > e.bottom ? e.left - i : g < e.top ? e.left + i : (h = !1, e.left);
        }
        var g = e - qd(a, b), h = !1, i = 2 * a.display.wrapper.clientWidth, j = P(a, b), k = rd(b), l = b.text.length, m = me(b), n = ne(b), o = f(m), p = h, q = f(n), r = h;
        if (d > q) return Z(c, n, r, 1);
        for (;;) {
            if (k ? n == m || n == te(b, m, 1) : 1 >= n - m) {
                for (var s = o > d || q - d >= d - o ? m : n, t = d - (s == m ? o : q); xf.test(b.text.charAt(s)); ) ++s;
                var u = Z(c, s, s == m ? p : r, 0 > t ? -1 : t ? 1 : 0);
                return u;
            }
            var v = Math.ceil(l / 2), w = m + v;
            if (k) {
                w = m;
                for (var x = 0; v > x; ++x) w = te(b, w, 1);
            }
            var y = f(w);
            y > d ? (n = w, q = y, (r = h) && (q += 1e3), l = v) : (m = w, o = y, p = h, l -= v);
        }
    }
    function ab(a) {
        if (null != a.cachedTextHeight) return a.cachedTextHeight;
        if (null == Ne) {
            Ne = be("pre");
            for (var b = 0; 49 > b; ++b) Ne.appendChild(document.createTextNode("x")), Ne.appendChild(be("br"));
            Ne.appendChild(document.createTextNode("x"));
        }
        de(a.measure, Ne);
        var c = Ne.offsetHeight / 50;
        return c > 3 && (a.cachedTextHeight = c), ce(a.measure), c || 1;
    }
    function bb(a) {
        if (null != a.cachedCharWidth) return a.cachedCharWidth;
        var b = be("span", "x"), c = be("pre", [ b ]);
        de(a.measure, c);
        var d = b.offsetWidth;
        return d > 2 && (a.cachedCharWidth = d), d || 10;
    }
    function cb(a) {
        a.curOp = {
            changes: [],
            updateInput: null,
            userSelChange: null,
            textChanged: null,
            selectionChanged: !1,
            cursorActivity: !1,
            updateMaxLine: !1,
            updateScrollPos: !1,
            id: ++Ue
        }, sf++ || (rf = []);
    }
    function db(a) {
        var b = a.curOp, c = a.doc, d = a.display;
        if (a.curOp = null, b.updateMaxLine && l(a), d.maxLineChanged && !a.options.lineWrapping && d.maxLine) {
            var e = R(a, d.maxLine);
            d.sizer.style.minWidth = Math.max(0, e + 3 + tf) + "px", d.maxLineChanged = !1;
            var f = Math.max(0, d.sizer.offsetLeft + d.sizer.offsetWidth - d.scroller.clientWidth);
            f < c.scrollLeft && !b.updateScrollPos && wb(a, Math.min(d.scroller.scrollLeft, f), !0);
        }
        var g, h;
        if (b.updateScrollPos) g = b.updateScrollPos; else if (b.selectionChanged && d.scroller.clientHeight) {
            var i = Y(a, c.sel.head);
            g = fc(a, i.left, i.top, i.left, i.bottom);
        }
        (b.changes.length || g && null != g.scrollTop) && (h = t(a, b.changes, g && g.scrollTop), 
        a.display.scroller.offsetHeight && (a.doc.scrollTop = a.display.scroller.scrollTop)), 
        !h && b.selectionChanged && B(a), b.updateScrollPos ? (d.scroller.scrollTop = d.scrollbarV.scrollTop = c.scrollTop = g.scrollTop, 
        d.scroller.scrollLeft = d.scrollbarH.scrollLeft = c.scrollLeft = g.scrollLeft, p(a), 
        b.scrollToPos && dc(a, Wb(a.doc, b.scrollToPos), b.scrollToPosMargin)) : g && cc(a), 
        b.selectionChanged && E(a), a.state.focused && b.updateInput && lb(a, b.userSelChange);
        var j = b.maybeHiddenMarkers, k = b.maybeUnhiddenMarkers;
        if (j) for (var m = 0; m < j.length; ++m) j[m].lines.length || Md(j[m], "hide");
        if (k) for (var m = 0; m < k.length; ++m) k[m].lines.length && Md(k[m], "unhide");
        var n;
        if (--sf || (n = rf, rf = null), b.textChanged && Md(a, "change", a, b.textChanged), 
        b.cursorActivity && Md(a, "cursorActivity", a), n) for (var m = 0; m < n.length; ++m) n[m]();
    }
    function eb(a, b) {
        return function() {
            var c = a || this, d = !c.curOp;
            d && cb(c);
            try {
                var e = b.apply(c, arguments);
            } finally {
                d && db(c);
            }
            return e;
        };
    }
    function fb(a) {
        return function() {
            var b, c = this.cm && !this.cm.curOp;
            c && cb(this.cm);
            try {
                b = a.apply(this, arguments);
            } finally {
                c && db(this.cm);
            }
            return b;
        };
    }
    function gb(a, b) {
        var c, d = !a.curOp;
        d && cb(a);
        try {
            c = b();
        } finally {
            d && db(a);
        }
        return c;
    }
    function hb(a, b, c, d) {
        null == b && (b = a.doc.first), null == c && (c = a.doc.first + a.doc.size), a.curOp.changes.push({
            from: b,
            to: c,
            diff: d
        });
    }
    function ib(a) {
        a.display.pollingFast || a.display.poll.set(a.options.pollInterval, function() {
            kb(a), a.state.focused && ib(a);
        });
    }
    function jb(a) {
        function b() {
            var d = kb(a);
            d || c ? (a.display.pollingFast = !1, ib(a)) : (c = !0, a.display.poll.set(60, b));
        }
        var c = !1;
        a.display.pollingFast = !0, a.display.poll.set(20, b);
    }
    function kb(a) {
        var b = a.display.input, c = a.display.prevInput, d = a.doc, e = d.sel;
        if (!a.state.focused || Cf(b) || nb(a) || a.state.disableInput) return !1;
        var f = b.value;
        if (f == c && Sb(e.from, e.to)) return !1;
        if (we && !ye && a.display.inputHasSelection === f) return lb(a, !0), !1;
        var g = !a.curOp;
        g && cb(a), e.shift = !1;
        for (var h = 0, i = Math.min(c.length, f.length); i > h && c.charCodeAt(h) == f.charCodeAt(h); ) ++h;
        var j = e.from, k = e.to;
        h < c.length ? j = Rb(j.line, j.ch - (c.length - h)) : a.state.overwrite && Sb(j, k) && !a.state.pasteIncoming && (k = Rb(k.line, Math.min(kd(d, k.line).text.length, k.ch + (f.length - h))));
        var l = a.curOp.updateInput, m = {
            from: j,
            to: k,
            text: Bf(f.slice(h)),
            origin: a.state.pasteIncoming ? "paste" : "+input"
        };
        return Kb(a.doc, m, "end"), a.curOp.updateInput = l, Nd(a, "inputRead", a, m), f.length > 1e3 || f.indexOf("\n") > -1 ? b.value = a.display.prevInput = "" : a.display.prevInput = f, 
        g && db(a), a.state.pasteIncoming = !1, !0;
    }
    function lb(a, b) {
        var c, d, e = a.doc;
        if (Sb(e.sel.from, e.sel.to)) b && (a.display.prevInput = a.display.input.value = "", 
        we && !ye && (a.display.inputHasSelection = null)); else {
            a.display.prevInput = "", c = Df && (e.sel.to.line - e.sel.from.line > 100 || (d = a.getSelection()).length > 1e3);
            var f = c ? "-" : d || a.getSelection();
            a.display.input.value = f, a.state.focused && Vd(a.display.input), we && !ye && (a.display.inputHasSelection = f);
        }
        a.display.inaccurateSelection = c;
    }
    function mb(a) {
        "nocursor" == a.options.readOnly || Je && document.activeElement == a.display.input || a.display.input.focus();
    }
    function nb(a) {
        return a.options.readOnly || a.doc.cantEdit;
    }
    function ob(a) {
        function b() {
            a.state.focused && setTimeout($d(mb, a), 0);
        }
        function c() {
            null == h && (h = setTimeout(function() {
                h = null, g.cachedCharWidth = g.cachedTextHeight = zf = null, S(a), gb(a, $d(hb, a));
            }, 100));
        }
        function d() {
            for (var a = g.wrapper.parentNode; a && a != document.body; a = a.parentNode) ;
            a ? setTimeout(d, 5e3) : Ld(window, "resize", c);
        }
        function e(b) {
            Od(a, b) || a.options.onDragEvent && a.options.onDragEvent(a, Dd(b)) || Hd(b);
        }
        function f() {
            g.inaccurateSelection && (g.prevInput = "", g.inaccurateSelection = !1, g.input.value = a.getSelection(), 
            Vd(g.input));
        }
        var g = a.display;
        Kd(g.scroller, "mousedown", eb(a, rb)), we ? Kd(g.scroller, "dblclick", eb(a, function(b) {
            if (!Od(a, b)) {
                var c = qb(a, b);
                if (c && !sb(a, b) && !pb(a.display, b)) {
                    Ed(b);
                    var d = mc(kd(a.doc, c.line).text, c);
                    Zb(a.doc, d.from, d.to);
                }
            }
        })) : Kd(g.scroller, "dblclick", function(b) {
            Od(a, b) || Ed(b);
        }), Kd(g.lineSpace, "selectstart", function(a) {
            pb(g, a) || Ed(a);
        }), Re || Kd(g.scroller, "contextmenu", function(b) {
            Gb(a, b);
        }), Kd(g.scroller, "scroll", function() {
            g.scroller.clientHeight && (vb(a, g.scroller.scrollTop), wb(a, g.scroller.scrollLeft, !0), 
            Md(a, "scroll", a));
        }), Kd(g.scrollbarV, "scroll", function() {
            g.scroller.clientHeight && vb(a, g.scrollbarV.scrollTop);
        }), Kd(g.scrollbarH, "scroll", function() {
            g.scroller.clientHeight && wb(a, g.scrollbarH.scrollLeft);
        }), Kd(g.scroller, "mousewheel", function(b) {
            xb(a, b);
        }), Kd(g.scroller, "DOMMouseScroll", function(b) {
            xb(a, b);
        }), Kd(g.scrollbarH, "mousedown", b), Kd(g.scrollbarV, "mousedown", b), Kd(g.wrapper, "scroll", function() {
            g.wrapper.scrollTop = g.wrapper.scrollLeft = 0;
        });
        var h;
        Kd(window, "resize", c), setTimeout(d, 5e3), Kd(g.input, "keyup", eb(a, function(b) {
            Od(a, b) || a.options.onKeyEvent && a.options.onKeyEvent(a, Dd(b)) || 16 == b.keyCode && (a.doc.sel.shift = !1);
        })), Kd(g.input, "input", $d(jb, a)), Kd(g.input, "keydown", eb(a, Cb)), Kd(g.input, "keypress", eb(a, Db)), 
        Kd(g.input, "focus", $d(Eb, a)), Kd(g.input, "blur", $d(Fb, a)), a.options.dragDrop && (Kd(g.scroller, "dragstart", function(b) {
            ub(a, b);
        }), Kd(g.scroller, "dragenter", e), Kd(g.scroller, "dragover", e), Kd(g.scroller, "drop", eb(a, tb))), 
        Kd(g.scroller, "paste", function(b) {
            pb(g, b) || (mb(a), jb(a));
        }), Kd(g.input, "paste", function() {
            a.state.pasteIncoming = !0, jb(a);
        }), Kd(g.input, "cut", f), Kd(g.input, "copy", f), Ee && Kd(g.sizer, "mouseup", function() {
            document.activeElement == g.input && g.input.blur(), mb(a);
        });
    }
    function pb(a, b) {
        for (var c = Id(b); c != a.wrapper; c = c.parentNode) if (!c || c.ignoreEvents || c.parentNode == a.sizer && c != a.mover) return !0;
    }
    function qb(a, b, c) {
        var d = a.display;
        if (!c) {
            var e = Id(b);
            if (e == d.scrollbarH || e == d.scrollbarH.firstChild || e == d.scrollbarV || e == d.scrollbarV.firstChild || e == d.scrollbarFiller || e == d.gutterFiller) return null;
        }
        var f, g, h = fe(d.lineSpace);
        try {
            f = b.clientX, g = b.clientY;
        } catch (b) {
            return null;
        }
        return $(a, f - h.left, g - h.top);
    }
    function rb(a) {
        function b(a) {
            if (!Sb(r, a)) {
                if (r = a, "single" == k) return void Zb(e.doc, Wb(g, i), a);
                if (p = Wb(g, p), q = Wb(g, q), "double" == k) {
                    var b = mc(kd(g, a.line).text, a);
                    Tb(a, p) ? Zb(e.doc, b.from, q) : Zb(e.doc, p, b.to);
                } else "triple" == k && (Tb(a, p) ? Zb(e.doc, q, Wb(g, Rb(a.line, 0))) : Zb(e.doc, p, Wb(g, Rb(a.line + 1, 0))));
            }
        }
        function c(a) {
            var d = ++t, h = qb(e, a, !0);
            if (h) if (Sb(h, m)) {
                var i = a.clientY < s.top ? -20 : a.clientY > s.bottom ? 20 : 0;
                i && setTimeout(eb(e, function() {
                    t == d && (f.scroller.scrollTop += i, c(a));
                }), 50);
            } else {
                e.state.focused || Eb(e), m = h, b(h);
                var j = o(f, g);
                (h.line >= j.to || h.line < j.from) && setTimeout(eb(e, function() {
                    t == d && c(a);
                }), 150);
            }
        }
        function d(a) {
            t = 1 / 0, Ed(a), mb(e), Ld(document, "mousemove", u), Ld(document, "mouseup", v);
        }
        if (!Od(this, a)) {
            var e = this, f = e.display, g = e.doc, h = g.sel;
            if (h.shift = a.shiftKey, pb(f, a)) return void (ze || (f.scroller.draggable = !1, 
            setTimeout(function() {
                f.scroller.draggable = !0;
            }, 100)));
            if (!sb(e, a)) {
                var i = qb(e, a);
                switch (Jd(a)) {
                  case 3:
                    return void (Re && Gb.call(e, e, a));

                  case 2:
                    return i && Zb(e.doc, i), setTimeout($d(mb, e), 20), void Ed(a);
                }
                if (!i) return void (Id(a) == f.scroller && Ed(a));
                e.state.focused || Eb(e);
                var j = +new Date(), k = "single";
                if (Pe && Pe.time > j - 400 && Sb(Pe.pos, i)) k = "triple", Ed(a), setTimeout($d(mb, e), 20), 
                nc(e, i.line); else if (Oe && Oe.time > j - 400 && Sb(Oe.pos, i)) {
                    k = "double", Pe = {
                        time: j,
                        pos: i
                    }, Ed(a);
                    var l = mc(kd(g, i.line).text, i);
                    Zb(e.doc, l.from, l.to);
                } else Oe = {
                    time: j,
                    pos: i
                };
                var m = i;
                if (e.options.dragDrop && yf && !nb(e) && !Sb(h.from, h.to) && !Tb(i, h.from) && !Tb(h.to, i) && "single" == k) {
                    var n = eb(e, function(b) {
                        ze && (f.scroller.draggable = !1), e.state.draggingText = !1, Ld(document, "mouseup", n), 
                        Ld(f.scroller, "drop", n), Math.abs(a.clientX - b.clientX) + Math.abs(a.clientY - b.clientY) < 10 && (Ed(b), 
                        Zb(e.doc, i), mb(e));
                    });
                    return ze && (f.scroller.draggable = !0), e.state.draggingText = n, f.scroller.dragDrop && f.scroller.dragDrop(), 
                    Kd(document, "mouseup", n), void Kd(f.scroller, "drop", n);
                }
                Ed(a), "single" == k && Zb(e.doc, Wb(g, i));
                var p = h.from, q = h.to, r = i, s = fe(f.wrapper), t = 0, u = eb(e, function(a) {
                    we || Jd(a) ? c(a) : d(a);
                }), v = eb(e, d);
                Kd(document, "mousemove", u), Kd(document, "mouseup", v);
            }
        }
    }
    function sb(a, b) {
        var c = a.display;
        try {
            var d = b.clientX, e = b.clientY;
        } catch (b) {
            return !1;
        }
        if (d >= Math.floor(fe(c.gutters).right)) return !1;
        if (Ed(b), !Qd(a, "gutterClick")) return !0;
        var f = fe(c.lineDiv);
        if (e > f.bottom) return !0;
        e -= f.top - c.viewOffset;
        for (var g = 0; g < a.options.gutters.length; ++g) {
            var h = c.gutters.childNodes[g];
            if (h && fe(h).right >= d) {
                var i = pd(a.doc, e), j = a.options.gutters[g];
                Nd(a, "gutterClick", a, i, j, b);
                break;
            }
        }
        return !0;
    }
    function tb(a) {
        var b = this;
        if (!(Od(b, a) || pb(b.display, a) || b.options.onDragEvent && b.options.onDragEvent(b, Dd(a)))) {
            Ed(a), we && (Ve = +new Date());
            var c = qb(b, a, !0), d = a.dataTransfer.files;
            if (c && !nb(b)) if (d && d.length && window.FileReader && window.File) for (var e = d.length, f = Array(e), g = 0, h = function(a, d) {
                var h = new FileReader();
                h.onload = function() {
                    f[d] = h.result, ++g == e && (c = Wb(b.doc, c), Kb(b.doc, {
                        from: c,
                        to: c,
                        text: Bf(f.join("\n")),
                        origin: "paste"
                    }, "around"));
                }, h.readAsText(a);
            }, i = 0; e > i; ++i) h(d[i], i); else {
                if (b.state.draggingText && !Tb(c, b.doc.sel.from) && !Tb(b.doc.sel.to, c)) return b.state.draggingText(a), 
                void setTimeout($d(mb, b), 20);
                try {
                    var f = a.dataTransfer.getData("Text");
                    if (f) {
                        var j = b.doc.sel.from, k = b.doc.sel.to;
                        _b(b.doc, c, c), b.state.draggingText && Qb(b.doc, "", j, k, "paste"), b.replaceSelection(f, null, "paste"), 
                        mb(b), Eb(b);
                    }
                } catch (a) {}
            }
        }
    }
    function ub(a, b) {
        if (we && (!a.state.draggingText || +new Date() - Ve < 100)) return void Hd(b);
        if (!Od(a, b) && !pb(a.display, b)) {
            var c = a.getSelection();
            if (b.dataTransfer.setData("Text", c), b.dataTransfer.setDragImage && !De) {
                var d = be("img", null, null, "position: fixed; left: 0; top: 0;");
                Ce && (d.width = d.height = 1, a.display.wrapper.appendChild(d), d._top = d.offsetTop), 
                b.dataTransfer.setDragImage(d, 0, 0), Ce && d.parentNode.removeChild(d);
            }
        }
    }
    function vb(a, b) {
        Math.abs(a.doc.scrollTop - b) < 2 || (a.doc.scrollTop = b, ve || t(a, [], b), a.display.scroller.scrollTop != b && (a.display.scroller.scrollTop = b), 
        a.display.scrollbarV.scrollTop != b && (a.display.scrollbarV.scrollTop = b), ve && t(a, []), 
        F(a, 100));
    }
    function wb(a, b, c) {
        (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) || (b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth), 
        a.doc.scrollLeft = b, p(a), a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b), 
        a.display.scrollbarH.scrollLeft != b && (a.display.scrollbarH.scrollLeft = b));
    }
    function xb(a, b) {
        var c = b.wheelDeltaX, d = b.wheelDeltaY;
        null == c && b.detail && b.axis == b.HORIZONTAL_AXIS && (c = b.detail), null == d && b.detail && b.axis == b.VERTICAL_AXIS ? d = b.detail : null == d && (d = b.wheelDelta);
        var e = a.display, f = e.scroller;
        if (c && f.scrollWidth > f.clientWidth || d && f.scrollHeight > f.clientHeight) {
            if (d && Ke && ze) for (var g = b.target; g != f; g = g.parentNode) if (g.lineObj) {
                a.display.currentWheelTarget = g;
                break;
            }
            if (c && !ve && !Ce && null != Xe) return d && vb(a, Math.max(0, Math.min(f.scrollTop + d * Xe, f.scrollHeight - f.clientHeight))), 
            wb(a, Math.max(0, Math.min(f.scrollLeft + c * Xe, f.scrollWidth - f.clientWidth))), 
            Ed(b), void (e.wheelStartX = null);
            if (d && null != Xe) {
                var h = d * Xe, i = a.doc.scrollTop, j = i + e.wrapper.clientHeight;
                0 > h ? i = Math.max(0, i + h - 50) : j = Math.min(a.doc.height, j + h + 50), t(a, [], {
                    top: i,
                    bottom: j
                });
            }
            20 > We && (null == e.wheelStartX ? (e.wheelStartX = f.scrollLeft, e.wheelStartY = f.scrollTop, 
            e.wheelDX = c, e.wheelDY = d, setTimeout(function() {
                if (null != e.wheelStartX) {
                    var a = f.scrollLeft - e.wheelStartX, b = f.scrollTop - e.wheelStartY, c = b && e.wheelDY && b / e.wheelDY || a && e.wheelDX && a / e.wheelDX;
                    e.wheelStartX = e.wheelStartY = null, c && (Xe = (Xe * We + c) / (We + 1), ++We);
                }
            }, 200)) : (e.wheelDX += c, e.wheelDY += d));
        }
    }
    function yb(a, b, c) {
        if ("string" == typeof b && (b = hf[b], !b)) return !1;
        a.display.pollingFast && kb(a) && (a.display.pollingFast = !1);
        var d = a.doc, e = d.sel.shift, f = !1;
        try {
            nb(a) && (a.state.suppressEdits = !0), c && (d.sel.shift = !1), f = b(a) != uf;
        } finally {
            d.sel.shift = e, a.state.suppressEdits = !1;
        }
        return f;
    }
    function zb(a) {
        var b = a.state.keyMaps.slice(0);
        return a.options.extraKeys && b.push(a.options.extraKeys), b.push(a.options.keyMap), 
        b;
    }
    function Ab(a, b) {
        var c = rc(a.options.keyMap), d = c.auto;
        clearTimeout(Ye), d && !tc(b) && (Ye = setTimeout(function() {
            rc(a.options.keyMap) == c && (a.options.keyMap = d.call ? d.call(null, a) : d, g(a));
        }, 50));
        var e = uc(b, !0), f = !1;
        if (!e) return !1;
        var h = zb(a);
        return f = b.shiftKey ? sc("Shift-" + e, h, function(b) {
            return yb(a, b, !0);
        }) || sc(e, h, function(b) {
            return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? yb(a, b) : void 0;
        }) : sc(e, h, function(b) {
            return yb(a, b);
        }), f && (Ed(b), E(a), ye && (b.oldKeyCode = b.keyCode, b.keyCode = 0), Nd(a, "keyHandled", a, e, b)), 
        f;
    }
    function Bb(a, b, c) {
        var d = sc("'" + c + "'", zb(a), function(b) {
            return yb(a, b, !0);
        });
        return d && (Ed(b), E(a), Nd(a, "keyHandled", a, "'" + c + "'", b)), d;
    }
    function Cb(a) {
        var b = this;
        if (b.state.focused || Eb(b), we && 27 == a.keyCode && (a.returnValue = !1), !(Od(b, a) || b.options.onKeyEvent && b.options.onKeyEvent(b, Dd(a)))) {
            var c = a.keyCode;
            b.doc.sel.shift = 16 == c || a.shiftKey;
            var d = Ab(b, a);
            Ce && ($e = d ? c : null, !d && 88 == c && !Df && (Ke ? a.metaKey : a.ctrlKey) && b.replaceSelection(""));
        }
    }
    function Db(a) {
        var b = this;
        if (!(Od(b, a) || b.options.onKeyEvent && b.options.onKeyEvent(b, Dd(a)))) {
            var c = a.keyCode, d = a.charCode;
            if (Ce && c == $e) return $e = null, void Ed(a);
            if (!(Ce && (!a.which || a.which < 10) || Ee) || !Ab(b, a)) {
                var e = String.fromCharCode(null == d ? c : d);
                this.options.electricChars && this.doc.mode.electricChars && this.options.smartIndent && !nb(this) && this.doc.mode.electricChars.indexOf(e) > -1 && setTimeout(eb(b, function() {
                    ic(b, b.doc.sel.to.line, "smart");
                }), 75), Bb(b, a, e) || (we && !ye && (b.display.inputHasSelection = null), jb(b));
            }
        }
    }
    function Eb(a) {
        "nocursor" != a.options.readOnly && (a.state.focused || (Md(a, "focus", a), a.state.focused = !0, 
        -1 == a.display.wrapper.className.search(/\bCodeMirror-focused\b/) && (a.display.wrapper.className += " CodeMirror-focused"), 
        lb(a, !0)), ib(a), E(a));
    }
    function Fb(a) {
        a.state.focused && (Md(a, "blur", a), a.state.focused = !1, a.display.wrapper.className = a.display.wrapper.className.replace(" CodeMirror-focused", "")), 
        clearInterval(a.display.blinker), setTimeout(function() {
            a.state.focused || (a.doc.sel.shift = !1);
        }, 150);
    }
    function Gb(a, b) {
        function c() {
            if (null != e.input.selectionStart) {
                var a = e.input.value = " " + (Sb(f.from, f.to) ? "" : e.input.value);
                e.prevInput = " ", e.input.selectionStart = 1, e.input.selectionEnd = a.length;
            }
        }
        function d() {
            if (e.inputDiv.style.position = "relative", e.input.style.cssText = i, ye && (e.scrollbarV.scrollTop = e.scroller.scrollTop = h), 
            ib(a), null != e.input.selectionStart) {
                (!we || ye) && c(), clearTimeout(Ze);
                var b = 0, d = function() {
                    " " == e.prevInput && 0 == e.input.selectionStart ? eb(a, hf.selectAll)(a) : b++ < 10 ? Ze = setTimeout(d, 500) : lb(a);
                };
                Ze = setTimeout(d, 200);
            }
        }
        var e = a.display, f = a.doc.sel;
        if (!pb(e, b)) {
            var g = qb(a, b), h = e.scroller.scrollTop;
            if (g && !Ce) {
                (Sb(f.from, f.to) || Tb(g, f.from) || !Tb(g, f.to)) && eb(a, _b)(a.doc, g, g);
                var i = e.input.style.cssText;
                if (e.inputDiv.style.position = "absolute", e.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (b.clientY - 5) + "px; left: " + (b.clientX - 5) + "px; z-index: 1000; background: white; outline: none;border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);", 
                mb(a), lb(a, !0), Sb(f.from, f.to) && (e.input.value = e.prevInput = " "), we && !ye && c(), 
                Re) {
                    Hd(b);
                    var j = function() {
                        Ld(window, "mouseup", j), setTimeout(d, 20);
                    };
                    Kd(window, "mouseup", j);
                } else setTimeout(d, 50);
            }
        }
    }
    function Hb(a, b, c) {
        if (!Tb(b.from, c)) return Wb(a, c);
        var d = b.text.length - 1 - (b.to.line - b.from.line);
        if (c.line > b.to.line + d) {
            var e = c.line - d, f = a.first + a.size - 1;
            return e > f ? Rb(f, kd(a, f).text.length) : Xb(c, kd(a, e).text.length);
        }
        if (c.line == b.to.line + d) return Xb(c, Ud(b.text).length + (1 == b.text.length ? b.from.ch : 0) + kd(a, b.to.line).text.length - b.to.ch);
        var g = c.line - b.from.line;
        return Xb(c, b.text[g].length + (g ? 0 : b.from.ch));
    }
    function Ib(a, b, c) {
        if (c && "object" == typeof c) return {
            anchor: Hb(a, b, c.anchor),
            head: Hb(a, b, c.head)
        };
        if ("start" == c) return {
            anchor: b.from,
            head: b.from
        };
        var d = _e(b);
        if ("around" == c) return {
            anchor: b.from,
            head: d
        };
        if ("end" == c) return {
            anchor: d,
            head: d
        };
        var e = function(a) {
            if (Tb(a, b.from)) return a;
            if (!Tb(b.to, a)) return d;
            var c = a.line + b.text.length - (b.to.line - b.from.line) - 1, e = a.ch;
            return a.line == b.to.line && (e += d.ch - b.to.ch), Rb(c, e);
        };
        return {
            anchor: e(a.sel.anchor),
            head: e(a.sel.head)
        };
    }
    function Jb(a, b, c) {
        var d = {
            canceled: !1,
            from: b.from,
            to: b.to,
            text: b.text,
            origin: b.origin,
            cancel: function() {
                this.canceled = !0;
            }
        };
        return c && (d.update = function(b, c, d, e) {
            b && (this.from = Wb(a, b)), c && (this.to = Wb(a, c)), d && (this.text = d), void 0 !== e && (this.origin = e);
        }), Md(a, "beforeChange", a, d), a.cm && Md(a.cm, "beforeChange", a.cm, d), d.canceled ? null : {
            from: d.from,
            to: d.to,
            text: d.text,
            origin: d.origin
        };
    }
    function Kb(a, b, c, d) {
        if (a.cm) {
            if (!a.cm.curOp) return eb(a.cm, Kb)(a, b, c, d);
            if (a.cm.state.suppressEdits) return;
        }
        if (!(Qd(a, "beforeChange") || a.cm && Qd(a.cm, "beforeChange")) || (b = Jb(a, b, !0))) {
            var e = Se && !d && Hc(a, b.from, b.to);
            if (e) {
                for (var f = e.length - 1; f >= 1; --f) Lb(a, {
                    from: e[f].from,
                    to: e[f].to,
                    text: [ "" ]
                });
                e.length && Lb(a, {
                    from: e[0].from,
                    to: e[0].to,
                    text: b.text
                }, c);
            } else Lb(a, b, c);
        }
    }
    function Lb(a, b, c) {
        var d = Ib(a, b, c);
        vd(a, b, d, a.cm ? a.cm.curOp.id : 0 / 0), Ob(a, b, d, Fc(a, b));
        var e = [];
        id(a, function(a, c) {
            c || -1 != Wd(e, a.history) || (Bd(a.history, b), e.push(a.history)), Ob(a, b, null, Fc(a, b));
        });
    }
    function Mb(a, b) {
        if (!a.cm || !a.cm.state.suppressEdits) {
            var c = a.history, d = ("undo" == b ? c.done : c.undone).pop();
            if (d) {
                var e = {
                    changes: [],
                    anchorBefore: d.anchorAfter,
                    headBefore: d.headAfter,
                    anchorAfter: d.anchorBefore,
                    headAfter: d.headBefore,
                    generation: c.generation
                };
                ("undo" == b ? c.undone : c.done).push(e), c.generation = d.generation || ++c.maxGeneration;
                for (var f = Qd(a, "beforeChange") || a.cm && Qd(a.cm, "beforeChange"), g = d.changes.length - 1; g >= 0; --g) {
                    var h = d.changes[g];
                    if (h.origin = b, f && !Jb(a, h, !1)) return void (("undo" == b ? c.done : c.undone).length = 0);
                    e.changes.push(ud(a, h));
                    var i = g ? Ib(a, h, null) : {
                        anchor: d.anchorBefore,
                        head: d.headBefore
                    };
                    Ob(a, h, i, Gc(a, h));
                    var j = [];
                    id(a, function(a, b) {
                        b || -1 != Wd(j, a.history) || (Bd(a.history, h), j.push(a.history)), Ob(a, h, null, Gc(a, h));
                    });
                }
            }
        }
    }
    function Nb(a, b) {
        function c(a) {
            return Rb(a.line + b, a.ch);
        }
        a.first += b, a.cm && hb(a.cm, a.first, a.first, b), a.sel.head = c(a.sel.head), 
        a.sel.anchor = c(a.sel.anchor), a.sel.from = c(a.sel.from), a.sel.to = c(a.sel.to);
    }
    function Ob(a, b, c, d) {
        if (a.cm && !a.cm.curOp) return eb(a.cm, Ob)(a, b, c, d);
        if (b.to.line < a.first) return void Nb(a, b.text.length - 1 - (b.to.line - b.from.line));
        if (!(b.from.line > a.lastLine())) {
            if (b.from.line < a.first) {
                var e = b.text.length - 1 - (a.first - b.from.line);
                Nb(a, e), b = {
                    from: Rb(a.first, 0),
                    to: Rb(b.to.line + e, b.to.ch),
                    text: [ Ud(b.text) ],
                    origin: b.origin
                };
            }
            var f = a.lastLine();
            b.to.line > f && (b = {
                from: b.from,
                to: Rb(f, kd(a, f).text.length),
                text: [ b.text[0] ],
                origin: b.origin
            }), b.removed = ld(a, b.from, b.to), c || (c = Ib(a, b, null)), a.cm ? Pb(a.cm, b, d, c) : fd(a, b, d, c);
        }
    }
    function Pb(a, b, c, d) {
        var f = a.doc, g = a.display, h = b.from, i = b.to, j = !1, l = h.line;
        a.options.lineWrapping || (l = od(Lc(f, kd(f, h.line))), f.iter(l, i.line + 1, function(a) {
            return a == g.maxLine ? (j = !0, !0) : void 0;
        })), Tb(f.sel.head, b.from) || Tb(b.to, f.sel.head) || (a.curOp.cursorActivity = !0), 
        fd(f, b, c, d, e(a)), a.options.lineWrapping || (f.iter(l, h.line + b.text.length, function(a) {
            var b = k(f, a);
            b > g.maxLineLength && (g.maxLine = a, g.maxLineLength = b, g.maxLineChanged = !0, 
            j = !1);
        }), j && (a.curOp.updateMaxLine = !0)), f.frontier = Math.min(f.frontier, h.line), 
        F(a, 400);
        var m = b.text.length - (i.line - h.line) - 1;
        if (hb(a, h.line, i.line + 1, m), Qd(a, "change")) {
            var n = {
                from: h,
                to: i,
                text: b.text,
                removed: b.removed,
                origin: b.origin
            };
            if (a.curOp.textChanged) {
                for (var o = a.curOp.textChanged; o.next; o = o.next) ;
                o.next = n;
            } else a.curOp.textChanged = n;
        }
    }
    function Qb(a, b, c, d, e) {
        if (d || (d = c), Tb(d, c)) {
            var f = d;
            d = c, c = f;
        }
        "string" == typeof b && (b = Bf(b)), Kb(a, {
            from: c,
            to: d,
            text: b,
            origin: e
        }, null);
    }
    function Rb(a, b) {
        return this instanceof Rb ? (this.line = a, void (this.ch = b)) : new Rb(a, b);
    }
    function Sb(a, b) {
        return a.line == b.line && a.ch == b.ch;
    }
    function Tb(a, b) {
        return a.line < b.line || a.line == b.line && a.ch < b.ch;
    }
    function Ub(a) {
        return Rb(a.line, a.ch);
    }
    function Vb(a, b) {
        return Math.max(a.first, Math.min(b, a.first + a.size - 1));
    }
    function Wb(a, b) {
        if (b.line < a.first) return Rb(a.first, 0);
        var c = a.first + a.size - 1;
        return b.line > c ? Rb(c, kd(a, c).text.length) : Xb(b, kd(a, b.line).text.length);
    }
    function Xb(a, b) {
        var c = a.ch;
        return null == c || c > b ? Rb(a.line, b) : 0 > c ? Rb(a.line, 0) : a;
    }
    function Yb(a, b) {
        return b >= a.first && b < a.first + a.size;
    }
    function Zb(a, b, c, d) {
        if (a.sel.shift || a.sel.extend) {
            var e = a.sel.anchor;
            if (c) {
                var f = Tb(b, e);
                f != Tb(c, e) ? (e = b, b = c) : f != Tb(b, c) && (b = c);
            }
            _b(a, e, b, d);
        } else _b(a, b, c || b, d);
        a.cm && (a.cm.curOp.userSelChange = !0);
    }
    function $b(a, b, c) {
        var d = {
            anchor: b,
            head: c
        };
        return Md(a, "beforeSelectionChange", a, d), a.cm && Md(a.cm, "beforeSelectionChange", a.cm, d), 
        d.anchor = Wb(a, d.anchor), d.head = Wb(a, d.head), d;
    }
    function _b(a, b, c, d, e) {
        if (!e && Qd(a, "beforeSelectionChange") || a.cm && Qd(a.cm, "beforeSelectionChange")) {
            var f = $b(a, b, c);
            c = f.head, b = f.anchor;
        }
        var g = a.sel;
        if (g.goalColumn = null, (e || !Sb(b, g.anchor)) && (b = bc(a, b, d, "push" != e)), 
        (e || !Sb(c, g.head)) && (c = bc(a, c, d, "push" != e)), !Sb(g.anchor, b) || !Sb(g.head, c)) {
            g.anchor = b, g.head = c;
            var h = Tb(c, b);
            g.from = h ? c : b, g.to = h ? b : c, a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = a.cm.curOp.cursorActivity = !0), 
            Nd(a, "cursorActivity", a);
        }
    }
    function ac(a) {
        _b(a.doc, a.doc.sel.from, a.doc.sel.to, null, "push");
    }
    function bc(a, b, c, d) {
        var e = !1, f = b, g = c || 1;
        a.cantEdit = !1;
        a: for (;;) {
            var h = kd(a, f.line);
            if (h.markedSpans) for (var i = 0; i < h.markedSpans.length; ++i) {
                var j = h.markedSpans[i], k = j.marker;
                if ((null == j.from || (k.inclusiveLeft ? j.from <= f.ch : j.from < f.ch)) && (null == j.to || (k.inclusiveRight ? j.to >= f.ch : j.to > f.ch))) {
                    if (d && (Md(k, "beforeCursorEnter"), k.explicitlyCleared)) {
                        if (h.markedSpans) {
                            --i;
                            continue;
                        }
                        break;
                    }
                    if (!k.atomic) continue;
                    var l = k.find()[0 > g ? "from" : "to"];
                    if (Sb(l, f) && (l.ch += g, l.ch < 0 ? l = l.line > a.first ? Wb(a, Rb(l.line - 1)) : null : l.ch > h.text.length && (l = l.line < a.first + a.size - 1 ? Rb(l.line + 1, 0) : null), 
                    !l)) {
                        if (e) return d ? (a.cantEdit = !0, Rb(a.first, 0)) : bc(a, b, c, !0);
                        e = !0, l = b, g = -g;
                    }
                    f = l;
                    continue a;
                }
            }
            return f;
        }
    }
    function cc(a) {
        var b = dc(a, a.doc.sel.head, a.options.cursorScrollMargin);
        if (a.state.focused) {
            var c = a.display, d = fe(c.sizer), e = null;
            if (b.top + d.top < 0 ? e = !0 : b.bottom + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1), 
            null != e && !He) {
                var f = "none" == c.cursor.style.display;
                f && (c.cursor.style.display = "", c.cursor.style.left = b.left + "px", c.cursor.style.top = b.top - c.viewOffset + "px"), 
                c.cursor.scrollIntoView(e), f && (c.cursor.style.display = "none");
            }
        }
    }
    function dc(a, b, c) {
        for (null == c && (c = 0); ;) {
            var d = !1, e = Y(a, b), f = fc(a, e.left, e.top - c, e.left, e.bottom + c), g = a.doc.scrollTop, h = a.doc.scrollLeft;
            if (null != f.scrollTop && (vb(a, f.scrollTop), Math.abs(a.doc.scrollTop - g) > 1 && (d = !0)), 
            null != f.scrollLeft && (wb(a, f.scrollLeft), Math.abs(a.doc.scrollLeft - h) > 1 && (d = !0)), 
            !d) return e;
        }
    }
    function ec(a, b, c, d, e) {
        var f = fc(a, b, c, d, e);
        null != f.scrollTop && vb(a, f.scrollTop), null != f.scrollLeft && wb(a, f.scrollLeft);
    }
    function fc(a, b, c, d, e) {
        var f = a.display, g = ab(a.display);
        0 > c && (c = 0);
        var h = f.scroller.clientHeight - tf, i = f.scroller.scrollTop, j = {}, k = a.doc.height + K(f), l = g > c, m = e > k - g;
        if (i > c) j.scrollTop = l ? 0 : c; else if (e > i + h) {
            var n = Math.min(c, (m ? k : e) - h);
            n != i && (j.scrollTop = n);
        }
        var o = f.scroller.clientWidth - tf, p = f.scroller.scrollLeft;
        b += f.gutters.offsetWidth, d += f.gutters.offsetWidth;
        var q = f.gutters.offsetWidth, r = q + 10 > b;
        return p + q > b || r ? (r && (b = 0), j.scrollLeft = Math.max(0, b - 10 - q)) : d > o + p - 3 && (j.scrollLeft = d + 10 - o), 
        j;
    }
    function gc(a, b, c) {
        a.curOp.updateScrollPos = {
            scrollLeft: null == b ? a.doc.scrollLeft : b,
            scrollTop: null == c ? a.doc.scrollTop : c
        };
    }
    function hc(a, b, c) {
        var d = a.curOp.updateScrollPos || (a.curOp.updateScrollPos = {
            scrollLeft: a.doc.scrollLeft,
            scrollTop: a.doc.scrollTop
        }), e = a.display.scroller;
        d.scrollTop = Math.max(0, Math.min(e.scrollHeight - e.clientHeight, d.scrollTop + c)), 
        d.scrollLeft = Math.max(0, Math.min(e.scrollWidth - e.clientWidth, d.scrollLeft + b));
    }
    function ic(a, b, c, d) {
        var e = a.doc;
        if (null == c && (c = "add"), "smart" == c) if (a.doc.mode.indent) var f = I(a, b); else c = "prev";
        var g, h = a.options.tabSize, i = kd(e, b), j = Sd(i.text, null, h), k = i.text.match(/^\s*/)[0];
        if ("smart" == c && (g = a.doc.mode.indent(f, i.text.slice(k.length), i.text), g == uf)) {
            if (!d) return;
            c = "prev";
        }
        "prev" == c ? g = b > e.first ? Sd(kd(e, b - 1).text, null, h) : 0 : "add" == c ? g = j + a.options.indentUnit : "subtract" == c ? g = j - a.options.indentUnit : "number" == typeof c && (g = j + c), 
        g = Math.max(0, g);
        var l = "", m = 0;
        if (a.options.indentWithTabs) for (var n = Math.floor(g / h); n; --n) m += h, l += "	";
        g > m && (l += Td(g - m)), l != k && Qb(a.doc, l, Rb(b, 0), Rb(b, k.length), "+input"), 
        i.stateAfter = null;
    }
    function jc(a, b, c) {
        var d = b, e = b, f = a.doc;
        return "number" == typeof b ? e = kd(f, Vb(f, b)) : d = od(b), null == d ? null : c(e, d) ? (hb(a, d, d + 1), 
        e) : null;
    }
    function kc(a, b, c, d, e) {
        function f() {
            var b = h + c;
            return b < a.first || b >= a.first + a.size ? l = !1 : (h = b, k = kd(a, b));
        }
        function g(a) {
            var b = (e ? te : ue)(k, i, c, !0);
            if (null == b) {
                if (a || !f()) return l = !1;
                i = e ? (0 > c ? ne : me)(k) : 0 > c ? k.text.length : 0;
            } else i = b;
            return !0;
        }
        var h = b.line, i = b.ch, j = c, k = kd(a, h), l = !0;
        if ("char" == d) g(); else if ("column" == d) g(!0); else if ("word" == d || "group" == d) for (var m = null, n = "group" == d, o = !0; !(0 > c) || g(!o); o = !1) {
            var p = k.text.charAt(i) || "\n", q = _d(p) ? "w" : n ? /\s/.test(p) ? null : "p" : null;
            if (m && m != q) {
                0 > c && (c = 1, g());
                break;
            }
            if (q && (m = q), c > 0 && !g(!o)) break;
        }
        var r = bc(a, Rb(h, i), j, !0);
        return l || (r.hitSide = !0), r;
    }
    function lc(a, b, c, d) {
        var e, f = a.doc, g = b.left;
        if ("page" == d) {
            var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            e = b.top + c * (h - (0 > c ? 1.5 : .5) * ab(a.display));
        } else "line" == d && (e = c > 0 ? b.bottom + 3 : b.top - 3);
        for (;;) {
            var i = $(a, g, e);
            if (!i.outside) break;
            if (0 > c ? 0 >= e : e >= f.height) {
                i.hitSide = !0;
                break;
            }
            e += 5 * c;
        }
        return i;
    }
    function mc(a, b) {
        var c = b.ch, d = b.ch;
        if (a) {
            b.xRel < 0 || d == a.length ? --c : ++d;
            for (var e = a.charAt(c), f = _d(e) ? _d : /\s/.test(e) ? function(a) {
                return /\s/.test(a);
            } : function(a) {
                return !/\s/.test(a) && !_d(a);
            }; c > 0 && f(a.charAt(c - 1)); ) --c;
            for (;d < a.length && f(a.charAt(d)); ) ++d;
        }
        return {
            from: Rb(b.line, c),
            to: Rb(b.line, d)
        };
    }
    function nc(a, b) {
        Zb(a.doc, Rb(b, 0), Wb(a.doc, Rb(b + 1, 0)));
    }
    function oc(b, c, d, e) {
        a.defaults[b] = c, d && (af[b] = e ? function(a, b, c) {
            c != cf && d(a, b, c);
        } : d);
    }
    function pc(a, b) {
        if (b === !0) return b;
        if (a.copyState) return a.copyState(b);
        var c = {};
        for (var d in b) {
            var e = b[d];
            e instanceof Array && (e = e.concat([])), c[d] = e;
        }
        return c;
    }
    function qc(a, b, c) {
        return a.startState ? a.startState(b, c) : !0;
    }
    function rc(a) {
        return "string" == typeof a ? jf[a] : a;
    }
    function sc(a, b, c) {
        function d(b) {
            b = rc(b);
            var e = b[a];
            if (e === !1) return "stop";
            if (null != e && c(e)) return !0;
            if (b.nofallthrough) return "stop";
            var f = b.fallthrough;
            if (null == f) return !1;
            if ("[object Array]" != Object.prototype.toString.call(f)) return d(f);
            for (var g = 0, h = f.length; h > g; ++g) {
                var i = d(f[g]);
                if (i) return i;
            }
            return !1;
        }
        for (var e = 0; e < b.length; ++e) {
            var f = d(b[e]);
            if (f) return "stop" != f;
        }
    }
    function tc(a) {
        var b = Ef[a.keyCode];
        return "Ctrl" == b || "Alt" == b || "Shift" == b || "Mod" == b;
    }
    function uc(a, b) {
        if (Ce && 34 == a.keyCode && a["char"]) return !1;
        var c = Ef[a.keyCode];
        return null == c || a.altGraphKey ? !1 : (a.altKey && (c = "Alt-" + c), (Qe ? a.metaKey : a.ctrlKey) && (c = "Ctrl-" + c), 
        (Qe ? a.ctrlKey : a.metaKey) && (c = "Cmd-" + c), !b && a.shiftKey && (c = "Shift-" + c), 
        c);
    }
    function vc(a, b) {
        this.pos = this.start = 0, this.string = a, this.tabSize = b || 8, this.lastColumnPos = this.lastColumnValue = 0;
    }
    function wc(a, b) {
        this.lines = [], this.type = b, this.doc = a;
    }
    function xc(a, b, c, d, e) {
        if (d && d.shared) return zc(a, b, c, d, e);
        if (a.cm && !a.cm.curOp) return eb(a.cm, xc)(a, b, c, d, e);
        var f = new wc(a, e);
        if ("range" == e && !Tb(b, c)) return f;
        d && Yd(d, f), f.replacedWith && (f.collapsed = !0, f.replacedWith = be("span", [ f.replacedWith ], "CodeMirror-widget"), 
        d.handleMouseEvents || (f.replacedWith.ignoreEvents = !0)), f.collapsed && (Te = !0), 
        f.addToHistory && vd(a, {
            from: b,
            to: c,
            origin: "markText"
        }, {
            head: a.sel.head,
            anchor: a.sel.anchor
        }, 0 / 0);
        var g, h, i, j = b.line, k = 0, l = a.cm;
        if (a.iter(j, c.line + 1, function(d) {
            l && f.collapsed && !l.options.lineWrapping && Lc(a, d) == l.display.maxLine && (i = !0);
            var e = {
                from: null,
                to: null,
                marker: f
            };
            k += d.text.length, j == b.line && (e.from = b.ch, k -= b.ch), j == c.line && (e.to = c.ch, 
            k -= d.text.length - c.ch), f.collapsed && (j == c.line && (h = Ic(d, c.ch)), j == b.line ? g = Ic(d, b.ch) : nd(d, 0)), 
            Cc(d, e), ++j;
        }), f.collapsed && a.iter(b.line, c.line + 1, function(b) {
            Mc(a, b) && nd(b, 0);
        }), f.clearOnEnter && Kd(f, "beforeCursorEnter", function() {
            f.clear();
        }), f.readOnly && (Se = !0, (a.history.done.length || a.history.undone.length) && a.clearHistory()), 
        f.collapsed) {
            if (g != h) throw new Error("Inserting collapsed marker overlapping an existing one");
            f.size = k, f.atomic = !0;
        }
        return l && (i && (l.curOp.updateMaxLine = !0), (f.className || f.startStyle || f.endStyle || f.collapsed) && hb(l, b.line, c.line + 1), 
        f.atomic && ac(l)), f;
    }
    function yc(a, b) {
        this.markers = a, this.primary = b;
        for (var c = 0, d = this; c < a.length; ++c) a[c].parent = this, Kd(a[c], "clear", function() {
            d.clear();
        });
    }
    function zc(a, b, c, d, e) {
        d = Yd(d), d.shared = !1;
        var f = [ xc(a, b, c, d, e) ], g = f[0], h = d.replacedWith;
        return id(a, function(a) {
            h && (d.replacedWith = h.cloneNode(!0)), f.push(xc(a, Wb(a, b), Wb(a, c), d, e));
            for (var i = 0; i < a.linked.length; ++i) if (a.linked[i].isParent) return;
            g = Ud(f);
        }), new yc(f, g);
    }
    function Ac(a, b) {
        if (a) for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d.marker == b) return d;
        }
    }
    function Bc(a, b) {
        for (var c, d = 0; d < a.length; ++d) a[d] != b && (c || (c = [])).push(a[d]);
        return c;
    }
    function Cc(a, b) {
        a.markedSpans = a.markedSpans ? a.markedSpans.concat([ b ]) : [ b ], b.marker.attachLine(a);
    }
    function Dc(a, b, c) {
        if (a) for (var d, e = 0; e < a.length; ++e) {
            var f = a[e], g = f.marker, h = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
            if (h || "bookmark" == g.type && f.from == b && (!c || !f.marker.insertLeft)) {
                var i = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                (d || (d = [])).push({
                    from: f.from,
                    to: i ? null : f.to,
                    marker: g
                });
            }
        }
        return d;
    }
    function Ec(a, b, c) {
        if (a) for (var d, e = 0; e < a.length; ++e) {
            var f = a[e], g = f.marker, h = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
            if (h || "bookmark" == g.type && f.from == b && (!c || f.marker.insertLeft)) {
                var i = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                (d || (d = [])).push({
                    from: i ? null : f.from - b,
                    to: null == f.to ? null : f.to - b,
                    marker: g
                });
            }
        }
        return d;
    }
    function Fc(a, b) {
        var c = Yb(a, b.from.line) && kd(a, b.from.line).markedSpans, d = Yb(a, b.to.line) && kd(a, b.to.line).markedSpans;
        if (!c && !d) return null;
        var e = b.from.ch, f = b.to.ch, g = Sb(b.from, b.to), h = Dc(c, e, g), i = Ec(d, f, g), j = 1 == b.text.length, k = Ud(b.text).length + (j ? e : 0);
        if (h) for (var l = 0; l < h.length; ++l) {
            var m = h[l];
            if (null == m.to) {
                var n = Ac(i, m.marker);
                n ? j && (m.to = null == n.to ? null : n.to + k) : m.to = e;
            }
        }
        if (i) for (var l = 0; l < i.length; ++l) {
            var m = i[l];
            if (null != m.to && (m.to += k), null == m.from) {
                var n = Ac(h, m.marker);
                n || (m.from = k, j && (h || (h = [])).push(m));
            } else m.from += k, j && (h || (h = [])).push(m);
        }
        if (j && h) {
            for (var l = 0; l < h.length; ++l) null != h[l].from && h[l].from == h[l].to && "bookmark" != h[l].marker.type && h.splice(l--, 1);
            h.length || (h = null);
        }
        var o = [ h ];
        if (!j) {
            var p, q = b.text.length - 2;
            if (q > 0 && h) for (var l = 0; l < h.length; ++l) null == h[l].to && (p || (p = [])).push({
                from: null,
                to: null,
                marker: h[l].marker
            });
            for (var l = 0; q > l; ++l) o.push(p);
            o.push(i);
        }
        return o;
    }
    function Gc(a, b) {
        var c = xd(a, b), d = Fc(a, b);
        if (!c) return d;
        if (!d) return c;
        for (var e = 0; e < c.length; ++e) {
            var f = c[e], g = d[e];
            if (f && g) a: for (var h = 0; h < g.length; ++h) {
                for (var i = g[h], j = 0; j < f.length; ++j) if (f[j].marker == i.marker) continue a;
                f.push(i);
            } else g && (c[e] = g);
        }
        return c;
    }
    function Hc(a, b, c) {
        var d = null;
        if (a.iter(b.line, c.line + 1, function(a) {
            if (a.markedSpans) for (var b = 0; b < a.markedSpans.length; ++b) {
                var c = a.markedSpans[b].marker;
                !c.readOnly || d && -1 != Wd(d, c) || (d || (d = [])).push(c);
            }
        }), !d) return null;
        for (var e = [ {
            from: b,
            to: c
        } ], f = 0; f < d.length; ++f) for (var g = d[f], h = g.find(), i = 0; i < e.length; ++i) {
            var j = e[i];
            if (!Tb(j.to, h.from) && !Tb(h.to, j.from)) {
                var k = [ i, 1 ];
                (Tb(j.from, h.from) || !g.inclusiveLeft && Sb(j.from, h.from)) && k.push({
                    from: j.from,
                    to: h.from
                }), (Tb(h.to, j.to) || !g.inclusiveRight && Sb(j.to, h.to)) && k.push({
                    from: h.to,
                    to: j.to
                }), e.splice.apply(e, k), i += k.length - 1;
            }
        }
        return e;
    }
    function Ic(a, b) {
        var c, d = Te && a.markedSpans;
        if (d) for (var e, f = 0; f < d.length; ++f) e = d[f], e.marker.collapsed && (null == e.from || e.from < b) && (null == e.to || e.to > b) && (!c || c.width < e.marker.width) && (c = e.marker);
        return c;
    }
    function Jc(a) {
        return Ic(a, -1);
    }
    function Kc(a) {
        return Ic(a, a.text.length + 1);
    }
    function Lc(a, b) {
        for (var c; c = Jc(b); ) b = kd(a, c.find().from.line);
        return b;
    }
    function Mc(a, b) {
        var c = Te && b.markedSpans;
        if (c) for (var d, e = 0; e < c.length; ++e) if (d = c[e], d.marker.collapsed) {
            if (null == d.from) return !0;
            if (!d.marker.replacedWith && 0 == d.from && d.marker.inclusiveLeft && Nc(a, b, d)) return !0;
        }
    }
    function Nc(a, b, c) {
        if (null == c.to) {
            var d = c.marker.find().to, e = kd(a, d.line);
            return Nc(a, e, Ac(e.markedSpans, c.marker));
        }
        if (c.marker.inclusiveRight && c.to == b.text.length) return !0;
        for (var f, g = 0; g < b.markedSpans.length; ++g) if (f = b.markedSpans[g], f.marker.collapsed && !f.marker.replacedWith && f.from == c.to && (f.marker.inclusiveLeft || c.marker.inclusiveRight) && Nc(a, b, f)) return !0;
    }
    function Oc(a) {
        var b = a.markedSpans;
        if (b) {
            for (var c = 0; c < b.length; ++c) b[c].marker.detachLine(a);
            a.markedSpans = null;
        }
    }
    function Pc(a, b) {
        if (b) {
            for (var c = 0; c < b.length; ++c) b[c].marker.attachLine(a);
            a.markedSpans = b;
        }
    }
    function Qc(a) {
        return function() {
            var b = !this.cm.curOp;
            b && cb(this.cm);
            try {
                var c = a.apply(this, arguments);
            } finally {
                b && db(this.cm);
            }
            return c;
        };
    }
    function Rc(a) {
        return null != a.height ? a.height : (a.node.parentNode && 1 == a.node.parentNode.nodeType || de(a.cm.display.measure, be("div", [ a.node ], null, "position: relative")), 
        a.height = a.node.offsetHeight);
    }
    function Sc(a, b, c, d) {
        var e = new kf(a, c, d);
        return e.noHScroll && (a.display.alignWidgets = !0), jc(a, b, function(b) {
            if ((b.widgets || (b.widgets = [])).push(e), e.line = b, !Mc(a.doc, b) || e.showIfHidden) {
                var c = qd(a, b) < a.display.scroller.scrollTop;
                nd(b, b.height + Rc(e)), c && hc(a, 0, e.height);
            }
            return !0;
        }), e;
    }
    function Tc(a, b, c) {
        var d = {
            text: a
        };
        return Pc(d, b), d.height = c ? c(d) : 1, d;
    }
    function Uc(a, b, c, d) {
        a.text = b, a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null), 
        null != a.order && (a.order = null), Oc(a), Pc(a, c);
        var e = d ? d(a) : 1;
        e != a.height && nd(a, e);
    }
    function Vc(a) {
        a.parent = null, Oc(a);
    }
    function Wc(a, b, c, d, e) {
        var f = c.flattenSpans;
        null == f && (f = a.options.flattenSpans);
        var g, h = 0, i = null, j = new vc(b, a.options.tabSize);
        for ("" == b && c.blankLine && c.blankLine(d); !j.eol(); ) j.pos > a.options.maxHighlightLength ? (f = !1, 
        j.pos = Math.min(b.length, j.start + 5e4), g = null) : g = c.token(j, d), f && i == g || (h < j.start && e(j.start, i), 
        h = j.start, i = g), j.start = j.pos;
        h < j.pos && e(j.pos, i);
    }
    function Xc(a, b, c) {
        var d = [ a.state.modeGen ];
        Wc(a, b.text, a.doc.mode, c, function(a, b) {
            d.push(a, b);
        });
        for (var e = 0; e < a.state.overlays.length; ++e) {
            var f = a.state.overlays[e], g = 1, h = 0;
            Wc(a, b.text, f.mode, !0, function(a, b) {
                for (var c = g; a > h; ) {
                    var e = d[g];
                    e > a && d.splice(g, 1, a, d[g + 1], e), g += 2, h = Math.min(a, e);
                }
                if (b) if (f.opaque) d.splice(c, g - c, a, b), g = c + 2; else for (;g > c; c += 2) {
                    var i = d[c + 1];
                    d[c + 1] = i ? i + " " + b : b;
                }
            });
        }
        return d;
    }
    function Yc(a, b) {
        return b.styles && b.styles[0] == a.state.modeGen || (b.styles = Xc(a, b, b.stateAfter = I(a, od(b)))), 
        b.styles;
    }
    function Zc(a, b, c) {
        var d = a.doc.mode, e = new vc(b.text, a.options.tabSize);
        for ("" == b.text && d.blankLine && d.blankLine(c); !e.eol() && e.pos <= a.options.maxHighlightLength; ) d.token(e, c), 
        e.start = e.pos;
    }
    function $c(a) {
        return a ? lf[a] || (lf[a] = "cm-" + a.replace(/ +/g, " cm-")) : null;
    }
    function _c(a, b, c) {
        for (var d, e = b, f = !0; d = Jc(e); ) e = kd(a.doc, d.find().from.line);
        var g = {
            pre: be("pre"),
            col: 0,
            pos: 0,
            display: !c,
            measure: null,
            measuredSomething: !1,
            cm: a
        };
        e.textClass && (g.pre.className = e.textClass);
        do {
            e.text && (f = !1), g.measure = e == b && c, g.pos = 0, g.addToken = g.measure ? bd : ad, 
            (we || ze) && a.getOption("lineWrapping") && (g.addToken = cd(g.addToken));
            var h = ed(e, g, Yc(a, e));
            c && e == b && !g.measuredSomething && (c[0] = g.pre.appendChild(ie(a.display.measure)), 
            g.measuredSomething = !0), h && (e = kd(a.doc, h.to.line));
        } while (h);
        !c || g.measuredSomething || c[0] || (c[0] = g.pre.appendChild(f ? be("span", " ") : ie(a.display.measure))), 
        g.pre.firstChild || Mc(a.doc, b) || g.pre.appendChild(document.createTextNode(" "));
        var i;
        if (c && we && (i = rd(e))) {
            var j = i.length - 1;
            i[j].from == i[j].to && --j;
            var k = i[j], l = i[j - 1];
            if (k.from + 1 == k.to && l && k.level < l.level) {
                var m = c[g.pos - 1];
                m && m.parentNode.insertBefore(m.measureRight = ie(a.display.measure), m.nextSibling);
            }
        }
        return Md(a, "renderLine", a, b, g.pre), g.pre;
    }
    function ad(a, b, c, d, e) {
        if (b) {
            if (mf.test(b)) for (var f = document.createDocumentFragment(), g = 0; ;) {
                mf.lastIndex = g;
                var h = mf.exec(b), i = h ? h.index - g : b.length - g;
                if (i && (f.appendChild(document.createTextNode(b.slice(g, g + i))), a.col += i), 
                !h) break;
                if (g += i + 1, "	" == h[0]) {
                    var j = a.cm.options.tabSize, k = j - a.col % j;
                    f.appendChild(be("span", Td(k), "cm-tab")), a.col += k;
                } else {
                    var l = be("span", "•", "cm-invalidchar");
                    l.title = "\\u" + h[0].charCodeAt(0).toString(16), f.appendChild(l), a.col += 1;
                }
            } else {
                a.col += b.length;
                var f = document.createTextNode(b);
            }
            if (c || d || e || a.measure) {
                var m = c || "";
                return d && (m += d), e && (m += e), a.pre.appendChild(be("span", [ f ], m));
            }
            a.pre.appendChild(f);
        }
    }
    function bd(a, b, c, d, e) {
        for (var f = a.cm.options.lineWrapping, g = 0; g < b.length; ++g) {
            var h = b.charAt(g), i = 0 == g;
            h >= "���" && "���" > h && g < b.length - 1 ? (h = b.slice(g, g + 2), ++g) : g && f && ge(b, g) && a.pre.appendChild(be("wbr"));
            var j = a.measure[a.pos] = ad(a, h, c, i && d, g == b.length - 1 && e);
            we && f && " " == h && g && !/\s/.test(b.charAt(g - 1)) && g < b.length - 1 && !/\s/.test(b.charAt(g + 1)) && (j.style.whiteSpace = "normal"), 
            a.pos += h.length;
        }
        b.length && (a.measuredSomething = !0);
    }
    function cd(a) {
        function b(a) {
            for (var b = " ", c = 0; c < a.length - 2; ++c) b += c % 2 ? " " : " ";
            return b += " ";
        }
        return function(c, d, e, f, g) {
            return a(c, d.replace(/ {3,}/, b), e, f, g);
        };
    }
    function dd(a, b, c) {
        c && (a.display || (c = c.cloneNode(!0)), a.measure && (a.measure[a.pos] = b ? c : a.pre.appendChild(ie(a.cm.display.measure)), 
        a.measuredSomething = !0), a.pre.appendChild(c)), a.pos += b;
    }
    function ed(a, b, c) {
        var d = a.markedSpans, e = a.text, f = 0;
        if (d) for (var g, h, i, j, k, l = e.length, m = 0, n = 1, o = "", p = 0; ;) {
            if (p == m) {
                h = i = j = "", k = null, p = 1 / 0;
                for (var q = null, r = 0; r < d.length; ++r) {
                    var s = d[r], t = s.marker;
                    s.from <= m && (null == s.to || s.to > m) ? (null != s.to && p > s.to && (p = s.to, 
                    i = ""), t.className && (h += " " + t.className), t.startStyle && s.from == m && (j += " " + t.startStyle), 
                    t.endStyle && s.to == p && (i += " " + t.endStyle), t.collapsed && (!k || k.marker.size < t.size) && (k = s)) : s.from > m && p > s.from && (p = s.from), 
                    "bookmark" == t.type && s.from == m && t.replacedWith && (q = t.replacedWith);
                }
                if (k && (k.from || 0) == m && (dd(b, (null == k.to ? l : k.to) - m, null != k.from && k.marker.replacedWith), 
                null == k.to)) return k.marker.find();
                q && !k && dd(b, 0, q);
            }
            if (m >= l) break;
            for (var u = Math.min(l, p); ;) {
                if (o) {
                    var v = m + o.length;
                    if (!k) {
                        var w = v > u ? o.slice(0, u - m) : o;
                        b.addToken(b, w, g ? g + h : h, j, m + w.length == p ? i : "");
                    }
                    if (v >= u) {
                        o = o.slice(u - m), m = u;
                        break;
                    }
                    m = v, j = "";
                }
                o = e.slice(f, f = c[n++]), g = $c(c[n++]);
            }
        } else for (var n = 1; n < c.length; n += 2) b.addToken(b, e.slice(f, f = c[n]), $c(c[n + 1]));
    }
    function fd(a, b, c, d, e) {
        function f(a) {
            return c ? c[a] : null;
        }
        function g(a, c, d) {
            Uc(a, c, d, e), Nd(a, "change", a, b);
        }
        var h = b.from, i = b.to, j = b.text, k = kd(a, h.line), l = kd(a, i.line), m = Ud(j), n = f(j.length - 1), o = i.line - h.line;
        if (0 == h.ch && 0 == i.ch && "" == m) {
            for (var p = 0, q = j.length - 1, r = []; q > p; ++p) r.push(Tc(j[p], f(p), e));
            g(l, l.text, n), o && a.remove(h.line, o), r.length && a.insert(h.line, r);
        } else if (k == l) if (1 == j.length) g(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n); else {
            for (var r = [], p = 1, q = j.length - 1; q > p; ++p) r.push(Tc(j[p], f(p), e));
            r.push(Tc(m + k.text.slice(i.ch), n, e)), g(k, k.text.slice(0, h.ch) + j[0], f(0)), 
            a.insert(h.line + 1, r);
        } else if (1 == j.length) g(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), f(0)), 
        a.remove(h.line + 1, o); else {
            g(k, k.text.slice(0, h.ch) + j[0], f(0)), g(l, m + l.text.slice(i.ch), n);
            for (var p = 1, q = j.length - 1, r = []; q > p; ++p) r.push(Tc(j[p], f(p), e));
            o > 1 && a.remove(h.line + 1, o - 1), a.insert(h.line + 1, r);
        }
        Nd(a, "change", a, b), _b(a, d.anchor, d.head, null, !0);
    }
    function gd(a) {
        this.lines = a, this.parent = null;
        for (var b = 0, c = a.length, d = 0; c > b; ++b) a[b].parent = this, d += a[b].height;
        this.height = d;
    }
    function hd(a) {
        this.children = a;
        for (var b = 0, c = 0, d = 0, e = a.length; e > d; ++d) {
            var f = a[d];
            b += f.chunkSize(), c += f.height, f.parent = this;
        }
        this.size = b, this.height = c, this.parent = null;
    }
    function id(a, b, c) {
        function d(a, e, f) {
            if (a.linked) for (var g = 0; g < a.linked.length; ++g) {
                var h = a.linked[g];
                if (h.doc != e) {
                    var i = f && h.sharedHist;
                    (!c || i) && (b(h.doc, i), d(h.doc, a, i));
                }
            }
        }
        d(a, null, !0);
    }
    function jd(a, b) {
        if (b.cm) throw new Error("This document is already in use.");
        a.doc = b, b.cm = a, f(a), c(a), a.options.lineWrapping || l(a), a.options.mode = b.modeOption, 
        hb(a);
    }
    function kd(a, b) {
        for (b -= a.first; !a.lines; ) for (var c = 0; ;++c) {
            var d = a.children[c], e = d.chunkSize();
            if (e > b) {
                a = d;
                break;
            }
            b -= e;
        }
        return a.lines[b];
    }
    function ld(a, b, c) {
        var d = [], e = b.line;
        return a.iter(b.line, c.line + 1, function(a) {
            var f = a.text;
            e == c.line && (f = f.slice(0, c.ch)), e == b.line && (f = f.slice(b.ch)), d.push(f), 
            ++e;
        }), d;
    }
    function md(a, b, c) {
        var d = [];
        return a.iter(b, c, function(a) {
            d.push(a.text);
        }), d;
    }
    function nd(a, b) {
        for (var c = b - a.height, d = a; d; d = d.parent) d.height += c;
    }
    function od(a) {
        if (null == a.parent) return null;
        for (var b = a.parent, c = Wd(b.lines, a), d = b.parent; d; b = d, d = d.parent) for (var e = 0; d.children[e] != b; ++e) c += d.children[e].chunkSize();
        return c + b.first;
    }
    function pd(a, b) {
        var c = a.first;
        a: do {
            for (var d = 0, e = a.children.length; e > d; ++d) {
                var f = a.children[d], g = f.height;
                if (g > b) {
                    a = f;
                    continue a;
                }
                b -= g, c += f.chunkSize();
            }
            return c;
        } while (!a.lines);
        for (var d = 0, e = a.lines.length; e > d; ++d) {
            var h = a.lines[d], i = h.height;
            if (i > b) break;
            b -= i;
        }
        return c + d;
    }
    function qd(a, b) {
        b = Lc(a.doc, b);
        for (var c = 0, d = b.parent, e = 0; e < d.lines.length; ++e) {
            var f = d.lines[e];
            if (f == b) break;
            c += f.height;
        }
        for (var g = d.parent; g; d = g, g = d.parent) for (var e = 0; e < g.children.length; ++e) {
            var h = g.children[e];
            if (h == d) break;
            c += h.height;
        }
        return c;
    }
    function rd(a) {
        var b = a.order;
        return null == b && (b = a.order = Gf(a.text)), b;
    }
    function sd(a) {
        return {
            done: [],
            undone: [],
            undoDepth: 1 / 0,
            lastTime: 0,
            lastOp: null,
            lastOrigin: null,
            generation: a || 1,
            maxGeneration: a || 1
        };
    }
    function td(a, b, c, d) {
        var e = b["spans_" + a.id], f = 0;
        a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function(c) {
            c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans), ++f;
        });
    }
    function ud(a, b) {
        var c = {
            from: b.from,
            to: _e(b),
            text: ld(a, b.from, b.to)
        };
        return td(a, c, b.from.line, b.to.line + 1), id(a, function(a) {
            td(a, c, b.from.line, b.to.line + 1);
        }, !0), c;
    }
    function vd(a, b, c, d) {
        var e = a.history;
        e.undone.length = 0;
        var f = +new Date(), g = Ud(e.done);
        if (g && (e.lastOp == d || e.lastOrigin == b.origin && b.origin && ("+" == b.origin.charAt(0) && a.cm && e.lastTime > f - a.cm.options.historyEventDelay || "*" == b.origin.charAt(0)))) {
            var h = Ud(g.changes);
            Sb(b.from, b.to) && Sb(b.from, h.to) ? h.to = _e(b) : g.changes.push(ud(a, b)), 
            g.anchorAfter = c.anchor, g.headAfter = c.head;
        } else for (g = {
            changes: [ ud(a, b) ],
            generation: e.generation,
            anchorBefore: a.sel.anchor,
            headBefore: a.sel.head,
            anchorAfter: c.anchor,
            headAfter: c.head
        }, e.done.push(g), e.generation = ++e.maxGeneration; e.done.length > e.undoDepth; ) e.done.shift();
        e.lastTime = f, e.lastOp = d, e.lastOrigin = b.origin;
    }
    function wd(a) {
        if (!a) return null;
        for (var b, c = 0; c < a.length; ++c) a[c].marker.explicitlyCleared ? b || (b = a.slice(0, c)) : b && b.push(a[c]);
        return b ? b.length ? b : null : a;
    }
    function xd(a, b) {
        var c = b["spans_" + a.id];
        if (!c) return null;
        for (var d = 0, e = []; d < b.text.length; ++d) e.push(wd(c[d]));
        return e;
    }
    function yd(a, b) {
        for (var c = 0, d = []; c < a.length; ++c) {
            var e = a[c], f = e.changes, g = [];
            d.push({
                changes: g,
                anchorBefore: e.anchorBefore,
                headBefore: e.headBefore,
                anchorAfter: e.anchorAfter,
                headAfter: e.headAfter
            });
            for (var h = 0; h < f.length; ++h) {
                var i, j = f[h];
                if (g.push({
                    from: j.from,
                    to: j.to,
                    text: j.text
                }), b) for (var k in j) (i = k.match(/^spans_(\d+)$/)) && Wd(b, Number(i[1])) > -1 && (Ud(g)[k] = j[k], 
                delete j[k]);
            }
        }
        return d;
    }
    function zd(a, b, c, d) {
        c < a.line ? a.line += d : b < a.line && (a.line = b, a.ch = 0);
    }
    function Ad(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            for (var f = a[e], g = !0, h = 0; h < f.changes.length; ++h) {
                var i = f.changes[h];
                if (f.copied || (i.from = Ub(i.from), i.to = Ub(i.to)), c < i.from.line) i.from.line += d, 
                i.to.line += d; else if (b <= i.to.line) {
                    g = !1;
                    break;
                }
            }
            f.copied || (f.anchorBefore = Ub(f.anchorBefore), f.headBefore = Ub(f.headBefore), 
            f.anchorAfter = Ub(f.anchorAfter), f.readAfter = Ub(f.headAfter), f.copied = !0), 
            g ? (zd(f.anchorBefore), zd(f.headBefore), zd(f.anchorAfter), zd(f.headAfter)) : (a.splice(0, e + 1), 
            e = 0);
        }
    }
    function Bd(a, b) {
        var c = b.from.line, d = b.to.line, e = b.text.length - (d - c) - 1;
        Ad(a.done, c, d, e), Ad(a.undone, c, d, e);
    }
    function Cd() {
        Hd(this);
    }
    function Dd(a) {
        return a.stop || (a.stop = Cd), a;
    }
    function Ed(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
    }
    function Fd(a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
    }
    function Gd(a) {
        return null != a.defaultPrevented ? a.defaultPrevented : 0 == a.returnValue;
    }
    function Hd(a) {
        Ed(a), Fd(a);
    }
    function Id(a) {
        return a.target || a.srcElement;
    }
    function Jd(a) {
        var b = a.which;
        return null == b && (1 & a.button ? b = 1 : 2 & a.button ? b = 3 : 4 & a.button && (b = 2)), 
        Ke && a.ctrlKey && 1 == b && (b = 3), b;
    }
    function Kd(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1); else if (a.attachEvent) a.attachEvent("on" + b, c); else {
            var d = a._handlers || (a._handlers = {}), e = d[b] || (d[b] = []);
            e.push(c);
        }
    }
    function Ld(a, b, c) {
        if (a.removeEventListener) a.removeEventListener(b, c, !1); else if (a.detachEvent) a.detachEvent("on" + b, c); else {
            var d = a._handlers && a._handlers[b];
            if (!d) return;
            for (var e = 0; e < d.length; ++e) if (d[e] == c) {
                d.splice(e, 1);
                break;
            }
        }
    }
    function Md(a, b) {
        var c = a._handlers && a._handlers[b];
        if (c) for (var d = Array.prototype.slice.call(arguments, 2), e = 0; e < c.length; ++e) c[e].apply(null, d);
    }
    function Nd(a, b) {
        function c(a) {
            return function() {
                a.apply(null, e);
            };
        }
        var d = a._handlers && a._handlers[b];
        if (d) {
            var e = Array.prototype.slice.call(arguments, 2);
            rf || (++sf, rf = [], setTimeout(Pd, 0));
            for (var f = 0; f < d.length; ++f) rf.push(c(d[f]));
        }
    }
    function Od(a, b) {
        return Md(a, b.type, a, b), Gd(b);
    }
    function Pd() {
        --sf;
        var a = rf;
        rf = null;
        for (var b = 0; b < a.length; ++b) a[b]();
    }
    function Qd(a, b) {
        var c = a._handlers && a._handlers[b];
        return c && c.length > 0;
    }
    function Rd() {
        this.id = null;
    }
    function Sd(a, b, c, d, e) {
        null == b && (b = a.search(/[^\s\u00a0]/), -1 == b && (b = a.length));
        for (var f = d || 0, g = e || 0; b > f; ++f) "	" == a.charAt(f) ? g += c - g % c : ++g;
        return g;
    }
    function Td(a) {
        for (;vf.length <= a; ) vf.push(Ud(vf) + " ");
        return vf[a];
    }
    function Ud(a) {
        return a[a.length - 1];
    }
    function Vd(a) {
        if (Ie) a.selectionStart = 0, a.selectionEnd = a.value.length; else try {
            a.select();
        } catch (b) {}
    }
    function Wd(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0, d = a.length; d > c; ++c) if (a[c] == b) return c;
        return -1;
    }
    function Xd(a, b) {
        function c() {}
        c.prototype = a;
        var d = new c();
        return b && Yd(b, d), d;
    }
    function Yd(a, b) {
        b || (b = {});
        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b;
    }
    function Zd(a) {
        for (var b = [], c = 0; a > c; ++c) b.push(void 0);
        return b;
    }
    function $d(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function() {
            return a.apply(null, b);
        };
    }
    function _d(a) {
        return /\w/.test(a) || a > "" && (a.toUpperCase() != a.toLowerCase() || wf.test(a));
    }
    function ae(a) {
        for (var b in a) if (a.hasOwnProperty(b) && a[b]) return !1;
        return !0;
    }
    function be(a, b, c, d) {
        var e = document.createElement(a);
        if (c && (e.className = c), d && (e.style.cssText = d), "string" == typeof b) ee(e, b); else if (b) for (var f = 0; f < b.length; ++f) e.appendChild(b[f]);
        return e;
    }
    function ce(a) {
        for (var b = a.childNodes.length; b > 0; --b) a.removeChild(a.firstChild);
        return a;
    }
    function de(a, b) {
        return ce(a).appendChild(b);
    }
    function ee(a, b) {
        ye ? (a.innerHTML = "", a.appendChild(document.createTextNode(b))) : a.textContent = b;
    }
    function fe(a) {
        return a.getBoundingClientRect();
    }
    function ge() {
        return !1;
    }
    function he(a) {
        if (null != zf) return zf;
        var b = be("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
        return de(a, b), b.offsetWidth && (zf = b.offsetHeight - b.clientHeight), zf || 0;
    }
    function ie(a) {
        if (null == Af) {
            var b = be("span", "​");
            de(a, be("span", [ b, document.createTextNode("x") ])), 0 != a.firstChild.offsetHeight && (Af = b.offsetWidth <= 1 && b.offsetHeight > 2 && !xe);
        }
        return Af ? be("span", "​") : be("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
    }
    function je(a, b, c, d) {
        if (!a) return d(b, c, "ltr");
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            (f.from < c && f.to > b || b == c && f.to == b) && d(Math.max(f.from, b), Math.min(f.to, c), 1 == f.level ? "rtl" : "ltr");
        }
    }
    function ke(a) {
        return a.level % 2 ? a.to : a.from;
    }
    function le(a) {
        return a.level % 2 ? a.from : a.to;
    }
    function me(a) {
        var b = rd(a);
        return b ? ke(b[0]) : 0;
    }
    function ne(a) {
        var b = rd(a);
        return b ? le(Ud(b)) : a.text.length;
    }
    function oe(a, b) {
        var c = kd(a.doc, b), d = Lc(a.doc, c);
        d != c && (b = od(d));
        var e = rd(d), f = e ? e[0].level % 2 ? ne(d) : me(d) : 0;
        return Rb(b, f);
    }
    function pe(a, b) {
        for (var c, d; c = Kc(d = kd(a.doc, b)); ) b = c.find().to.line;
        var e = rd(d), f = e ? e[0].level % 2 ? me(d) : ne(d) : d.text.length;
        return Rb(b, f);
    }
    function qe(a, b, c) {
        var d = a[0].level;
        return b == d ? !0 : c == d ? !1 : c > b;
    }
    function re(a, b) {
        for (var c, d = 0; d < a.length; ++d) {
            var e = a[d];
            if (e.from < b && e.to > b) return Ff = null, d;
            if (e.from == b || e.to == b) {
                if (null != c) return qe(a, e.level, a[c].level) ? (Ff = c, d) : (Ff = d, c);
                c = d;
            }
        }
        return Ff = null, c;
    }
    function se(a, b, c, d) {
        if (!d) return b + c;
        do b += c; while (b > 0 && xf.test(a.text.charAt(b)));
        return b;
    }
    function te(a, b, c, d) {
        var e = rd(a);
        if (!e) return ue(a, b, c, d);
        for (var f = re(e, b), g = e[f], h = se(a, b, g.level % 2 ? -c : c, d); ;) {
            if (h > g.from && h < g.to) return h;
            if (h == g.from || h == g.to) return re(e, h) == f ? h : (g = e[f += c], c > 0 == g.level % 2 ? g.to : g.from);
            if (g = e[f += c], !g) return null;
            h = c > 0 == g.level % 2 ? se(a, g.to, -1, d) : se(a, g.from, 1, d);
        }
    }
    function ue(a, b, c, d) {
        var e = b + c;
        if (d) for (;e > 0 && xf.test(a.text.charAt(e)); ) e += c;
        return 0 > e || e > a.text.length ? null : e;
    }
    var ve = /gecko\/\d/i.test(navigator.userAgent), we = /MSIE \d/.test(navigator.userAgent), xe = we && (null == document.documentMode || document.documentMode < 8), ye = we && (null == document.documentMode || document.documentMode < 9), ze = /WebKit\//.test(navigator.userAgent), Ae = ze && /Qt\/\d+\.\d+/.test(navigator.userAgent), Be = /Chrome\//.test(navigator.userAgent), Ce = /Opera\//.test(navigator.userAgent), De = /Apple Computer/.test(navigator.vendor), Ee = /KHTML\//.test(navigator.userAgent), Fe = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent), Ge = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), He = /PhantomJS/.test(navigator.userAgent), Ie = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), Je = Ie || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), Ke = Ie || /Mac/.test(navigator.platform), Le = /windows/i.test(navigator.platform), Me = Ce && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    Me && (Me = Number(Me[1]));
    var Ne, Oe, Pe, Qe = Ke && (Ae || Ce && (null == Me || 12.11 > Me)), Re = ve || we && !ye, Se = !1, Te = !1, Ue = 0, Ve = 0, We = 0, Xe = null;
    we ? Xe = -.53 : ve ? Xe = 15 : Be ? Xe = -.7 : De && (Xe = -1 / 3);
    var Ye, Ze, $e = null, _e = a.changeEnd = function(a) {
        return a.text ? Rb(a.from.line + a.text.length - 1, Ud(a.text).length + (1 == a.text.length ? a.from.ch : 0)) : a.to;
    };
    a.Pos = Rb, a.prototype = {
        constructor: a,
        focus: function() {
            window.focus(), mb(this), Eb(this), jb(this);
        },
        setOption: function(a, b) {
            var c = this.options, d = c[a];
            (c[a] != b || "mode" == a) && (c[a] = b, af.hasOwnProperty(a) && eb(this, af[a])(this, b, d));
        },
        getOption: function(a) {
            return this.options[a];
        },
        getDoc: function() {
            return this.doc;
        },
        addKeyMap: function(a, b) {
            this.state.keyMaps[b ? "push" : "unshift"](a);
        },
        removeKeyMap: function(a) {
            for (var b = this.state.keyMaps, c = 0; c < b.length; ++c) if (("string" == typeof a ? b[c].name : b[c]) == a) return b.splice(c, 1), 
            !0;
        },
        addOverlay: eb(null, function(b, c) {
            var d = b.token ? b : a.getMode(this.options, b);
            if (d.startState) throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({
                mode: d,
                modeSpec: b,
                opaque: c && c.opaque
            }), this.state.modeGen++, hb(this);
        }),
        removeOverlay: eb(null, function(a) {
            for (var b = this.state.overlays, c = 0; c < b.length; ++c) {
                var d = b[c].modeSpec;
                if (d == a || "string" == typeof a && d.name == a) return b.splice(c, 1), this.state.modeGen++, 
                void hb(this);
            }
        }),
        indentLine: eb(null, function(a, b, c) {
            "string" != typeof b && "number" != typeof b && (b = null == b ? this.options.smartIndent ? "smart" : "prev" : b ? "add" : "subtract"), 
            Yb(this.doc, a) && ic(this, a, b, c);
        }),
        indentSelection: eb(null, function(a) {
            var b = this.doc.sel;
            if (Sb(b.from, b.to)) return ic(this, b.from.line, a);
            for (var c = b.to.line - (b.to.ch ? 0 : 1), d = b.from.line; c >= d; ++d) ic(this, d, a);
        }),
        getTokenAt: function(a, b) {
            var c = this.doc;
            a = Wb(c, a);
            for (var d = I(this, a.line, b), e = this.doc.mode, f = kd(c, a.line), g = new vc(f.text, this.options.tabSize); g.pos < a.ch && !g.eol(); ) {
                g.start = g.pos;
                var h = e.token(g, d);
            }
            return {
                start: g.start,
                end: g.pos,
                string: g.current(),
                className: h || null,
                type: h || null,
                state: d
            };
        },
        getTokenTypeAt: function(a) {
            a = Wb(this.doc, a);
            for (var b = Yc(this, kd(this.doc, a.line)), c = 0, d = (b.length - 1) / 2, e = a.ch; ;) {
                var f = c + d >> 1;
                if ((f ? b[2 * f - 1] : 0) >= e) d = f; else {
                    if (!(b[2 * f + 1] < e)) return b[2 * f + 2];
                    c = f + 1;
                }
            }
        },
        getStateAfter: function(a, b) {
            var c = this.doc;
            return a = Vb(c, null == a ? c.first + c.size - 1 : a), I(this, a + 1, b);
        },
        cursorCoords: function(a, b) {
            var c, d = this.doc.sel;
            return c = null == a ? d.head : "object" == typeof a ? Wb(this.doc, a) : a ? d.from : d.to, 
            Y(this, c, b || "page");
        },
        charCoords: function(a, b) {
            return X(this, Wb(this.doc, a), b || "page");
        },
        coordsChar: function(a, b) {
            return a = W(this, a, b || "page"), $(this, a.left, a.top);
        },
        lineAtHeight: function(a, b) {
            return a = W(this, {
                top: a,
                left: 0
            }, b || "page").top, pd(this.doc, a + this.display.viewOffset);
        },
        heightAtLine: function(a, b) {
            var c = !1, d = this.doc.first + this.doc.size - 1;
            a < this.doc.first ? a = this.doc.first : a > d && (a = d, c = !0);
            var e = kd(this.doc, a);
            return V(this, kd(this.doc, a), {
                top: 0,
                left: 0
            }, b || "page").top + (c ? e.height : 0);
        },
        defaultTextHeight: function() {
            return ab(this.display);
        },
        defaultCharWidth: function() {
            return bb(this.display);
        },
        setGutterMarker: eb(null, function(a, b, c) {
            return jc(this, a, function(a) {
                var d = a.gutterMarkers || (a.gutterMarkers = {});
                return d[b] = c, !c && ae(d) && (a.gutterMarkers = null), !0;
            });
        }),
        clearGutter: eb(null, function(a) {
            var b = this, c = b.doc, d = c.first;
            c.iter(function(c) {
                c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null, hb(b, d, d + 1), 
                ae(c.gutterMarkers) && (c.gutterMarkers = null)), ++d;
            });
        }),
        addLineClass: eb(null, function(a, b, c) {
            return jc(this, a, function(a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "wrapClass";
                if (a[d]) {
                    if (new RegExp("(?:^|\\s)" + c + "(?:$|\\s)").test(a[d])) return !1;
                    a[d] += " " + c;
                } else a[d] = c;
                return !0;
            });
        }),
        removeLineClass: eb(null, function(a, b, c) {
            return jc(this, a, function(a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "wrapClass", e = a[d];
                if (!e) return !1;
                if (null == c) a[d] = null; else {
                    var f = e.match(new RegExp("(?:^|\\s+)" + c + "(?:$|\\s+)"));
                    if (!f) return !1;
                    var g = f.index + f[0].length;
                    a[d] = e.slice(0, f.index) + (f.index && g != e.length ? " " : "") + e.slice(g) || null;
                }
                return !0;
            });
        }),
        addLineWidget: eb(null, function(a, b, c) {
            return Sc(this, a, b, c);
        }),
        removeLineWidget: function(a) {
            a.clear();
        },
        lineInfo: function(a) {
            if ("number" == typeof a) {
                if (!Yb(this.doc, a)) return null;
                var b = a;
                if (a = kd(this.doc, a), !a) return null;
            } else {
                var b = od(a);
                if (null == b) return null;
            }
            return {
                line: b,
                handle: a,
                text: a.text,
                gutterMarkers: a.gutterMarkers,
                textClass: a.textClass,
                bgClass: a.bgClass,
                wrapClass: a.wrapClass,
                widgets: a.widgets
            };
        },
        getViewport: function() {
            return {
                from: this.display.showingFrom,
                to: this.display.showingTo
            };
        },
        addWidget: function(a, b, c, d, e) {
            var f = this.display;
            a = Y(this, Wb(this.doc, a));
            var g = a.bottom, h = a.left;
            if (b.style.position = "absolute", f.sizer.appendChild(b), "over" == d) g = a.top; else if ("above" == d || "near" == d) {
                var i = Math.max(f.wrapper.clientHeight, this.doc.height), j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
                ("above" == d || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom), 
                h + b.offsetWidth > j && (h = j - b.offsetWidth);
            }
            b.style.top = g + "px", b.style.left = b.style.right = "", "right" == e ? (h = f.sizer.clientWidth - b.offsetWidth, 
            b.style.right = "0px") : ("left" == e ? h = 0 : "middle" == e && (h = (f.sizer.clientWidth - b.offsetWidth) / 2), 
            b.style.left = h + "px"), c && ec(this, h, g, h + b.offsetWidth, g + b.offsetHeight);
        },
        triggerOnKeyDown: eb(null, Cb),
        execCommand: function(a) {
            return hf[a](this);
        },
        findPosH: function(a, b, c, d) {
            var e = 1;
            0 > b && (e = -1, b = -b);
            for (var f = 0, g = Wb(this.doc, a); b > f && (g = kc(this.doc, g, e, c, d), !g.hitSide); ++f) ;
            return g;
        },
        moveH: eb(null, function(a, b) {
            var c, d = this.doc.sel;
            c = d.shift || d.extend || Sb(d.from, d.to) ? kc(this.doc, d.head, a, b, this.options.rtlMoveVisually) : 0 > a ? d.from : d.to, 
            Zb(this.doc, c, c, a);
        }),
        deleteH: eb(null, function(a, b) {
            var c = this.doc.sel;
            Sb(c.from, c.to) ? Qb(this.doc, "", c.from, kc(this.doc, c.head, a, b, !1), "+delete") : Qb(this.doc, "", c.from, c.to, "+delete"), 
            this.curOp.userSelChange = !0;
        }),
        findPosV: function(a, b, c, d) {
            var e = 1, f = d;
            0 > b && (e = -1, b = -b);
            for (var g = 0, h = Wb(this.doc, a); b > g; ++g) {
                var i = Y(this, h, "div");
                if (null == f ? f = i.left : i.left = f, h = lc(this, i, e, c), h.hitSide) break;
            }
            return h;
        },
        moveV: eb(null, function(a, b) {
            var c = this.doc.sel, d = Y(this, c.head, "div");
            null != c.goalColumn && (d.left = c.goalColumn);
            var e = lc(this, d, a, b);
            "page" == b && hc(this, 0, X(this, e, "div").top - d.top), Zb(this.doc, e, e, a), 
            c.goalColumn = d.left;
        }),
        toggleOverwrite: function(a) {
            (null == a || a != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? this.display.cursor.className += " CodeMirror-overwrite" : this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", ""));
        },
        hasFocus: function() {
            return this.state.focused;
        },
        scrollTo: eb(null, function(a, b) {
            gc(this, a, b);
        }),
        getScrollInfo: function() {
            var a = this.display.scroller, b = tf;
            return {
                left: a.scrollLeft,
                top: a.scrollTop,
                height: a.scrollHeight - b,
                width: a.scrollWidth - b,
                clientHeight: a.clientHeight - b,
                clientWidth: a.clientWidth - b
            };
        },
        scrollIntoView: eb(null, function(a, b) {
            "number" == typeof a && (a = Rb(a, 0)), b || (b = 0);
            var c = a;
            a && null == a.line || (this.curOp.scrollToPos = a ? Wb(this.doc, a) : this.doc.sel.head, 
            this.curOp.scrollToPosMargin = b, c = Y(this, this.curOp.scrollToPos));
            var d = fc(this, c.left, c.top - b, c.right, c.bottom + b);
            gc(this, d.scrollLeft, d.scrollTop);
        }),
        setSize: function(a, b) {
            function c(a) {
                return "number" == typeof a || /^\d+$/.test(String(a)) ? a + "px" : a;
            }
            null != a && (this.display.wrapper.style.width = c(a)), null != b && (this.display.wrapper.style.height = c(b)), 
            this.refresh();
        },
        on: function(a, b) {
            Kd(this, a, b);
        },
        off: function(a, b) {
            Ld(this, a, b);
        },
        operation: function(a) {
            return gb(this, a);
        },
        refresh: eb(null, function() {
            S(this), gc(this, this.doc.scrollLeft, this.doc.scrollTop), hb(this);
        }),
        swapDoc: eb(null, function(a) {
            var b = this.doc;
            return b.cm = null, jd(this, a), S(this), lb(this, !0), gc(this, a.scrollLeft, a.scrollTop), 
            b;
        }),
        getInputField: function() {
            return this.display.input;
        },
        getWrapperElement: function() {
            return this.display.wrapper;
        },
        getScrollerElement: function() {
            return this.display.scroller;
        },
        getGutterElement: function() {
            return this.display.gutters;
        }
    };
    var af = a.optionHandlers = {}, bf = a.defaults = {}, cf = a.Init = {
        toString: function() {
            return "CodeMirror.Init";
        }
    };
    oc("value", "", function(a, b) {
        a.setValue(b);
    }, !0), oc("mode", null, function(a, b) {
        a.doc.modeOption = b, c(a);
    }, !0), oc("indentUnit", 2, c, !0), oc("indentWithTabs", !1), oc("smartIndent", !0), 
    oc("tabSize", 4, function(a) {
        c(a), S(a), hb(a);
    }, !0), oc("electricChars", !0), oc("rtlMoveVisually", !Le), oc("theme", "default", function(a) {
        h(a), i(a);
    }, !0), oc("keyMap", "default", g), oc("extraKeys", null), oc("onKeyEvent", null), 
    oc("onDragEvent", null), oc("lineWrapping", !1, d, !0), oc("gutters", [], function(a) {
        m(a.options), i(a);
    }, !0), oc("fixedGutter", !0, function(a, b) {
        a.display.gutters.style.left = b ? s(a.display) + "px" : "0", a.refresh();
    }, !0), oc("coverGutterNextToScrollbar", !1, n, !0), oc("lineNumbers", !1, function(a) {
        m(a.options), i(a);
    }, !0), oc("firstLineNumber", 1, i, !0), oc("lineNumberFormatter", function(a) {
        return a;
    }, i, !0), oc("showCursorWhenSelecting", !1, B, !0), oc("readOnly", !1, function(a, b) {
        "nocursor" == b ? (Fb(a), a.display.input.blur()) : b || lb(a, !0);
    }), oc("dragDrop", !0), oc("cursorBlinkRate", 530), oc("cursorScrollMargin", 0), 
    oc("cursorHeight", 1), oc("workTime", 100), oc("workDelay", 100), oc("flattenSpans", !0), 
    oc("pollInterval", 100), oc("undoDepth", 40, function(a, b) {
        a.doc.history.undoDepth = b;
    }), oc("historyEventDelay", 500), oc("viewportMargin", 10, function(a) {
        a.refresh();
    }, !0), oc("maxHighlightLength", 1e4, function(a) {
        c(a), a.refresh();
    }, !0), oc("moveInputWithCursor", !0, function(a, b) {
        b || (a.display.inputDiv.style.top = a.display.inputDiv.style.left = 0);
    }), oc("tabindex", null, function(a, b) {
        a.display.input.tabIndex = b || "";
    }), oc("autofocus", null);
    var df = a.modes = {}, ef = a.mimeModes = {};
    a.defineMode = function(b, c) {
        if (a.defaults.mode || "null" == b || (a.defaults.mode = b), arguments.length > 2) {
            c.dependencies = [];
            for (var d = 2; d < arguments.length; ++d) c.dependencies.push(arguments[d]);
        }
        df[b] = c;
    }, a.defineMIME = function(a, b) {
        ef[a] = b;
    }, a.resolveMode = function(b) {
        if ("string" == typeof b && ef.hasOwnProperty(b)) b = ef[b]; else if (b && "string" == typeof b.name && ef.hasOwnProperty(b.name)) {
            var c = ef[b.name];
            b = Xd(c, b), b.name = c.name;
        } else if ("string" == typeof b && /^[\w\-]+\/[\w\-]+\+xml$/.test(b)) return a.resolveMode("application/xml");
        return "string" == typeof b ? {
            name: b
        } : b || {
            name: "null"
        };
    }, a.getMode = function(b, c) {
        c = a.resolveMode(c);
        var d = df[c.name];
        if (!d) return a.getMode(b, "text/plain");
        var e = d(b, c);
        if (ff.hasOwnProperty(c.name)) {
            var f = ff[c.name];
            for (var g in f) f.hasOwnProperty(g) && (e.hasOwnProperty(g) && (e["_" + g] = e[g]), 
            e[g] = f[g]);
        }
        return e.name = c.name, e;
    }, a.defineMode("null", function() {
        return {
            token: function(a) {
                a.skipToEnd();
            }
        };
    }), a.defineMIME("text/plain", "null");
    var ff = a.modeExtensions = {};
    a.extendMode = function(a, b) {
        var c = ff.hasOwnProperty(a) ? ff[a] : ff[a] = {};
        Yd(b, c);
    }, a.defineExtension = function(b, c) {
        a.prototype[b] = c;
    }, a.defineDocExtension = function(a, b) {
        of.prototype[a] = b;
    }, a.defineOption = oc;
    var gf = [];
    a.defineInitHook = function(a) {
        gf.push(a);
    }, a.copyState = pc, a.startState = qc, a.innerMode = function(a, b) {
        for (;a.innerMode; ) {
            var c = a.innerMode(b);
            b = c.state, a = c.mode;
        }
        return c || {
            mode: a,
            state: b
        };
    };
    var hf = a.commands = {
        selectAll: function(a) {
            a.setSelection(Rb(a.firstLine(), 0), Rb(a.lastLine()));
        },
        killLine: function(a) {
            var b = a.getCursor(!0), c = a.getCursor(!1), d = !Sb(b, c);
            d || a.getLine(b.line).length != b.ch ? a.replaceRange("", b, d ? c : Rb(b.line), "+delete") : a.replaceRange("", b, Rb(b.line + 1, 0), "+delete");
        },
        deleteLine: function(a) {
            var b = a.getCursor().line;
            a.replaceRange("", Rb(b, 0), Rb(b), "+delete");
        },
        delLineLeft: function(a) {
            var b = a.getCursor();
            a.replaceRange("", Rb(b.line, 0), b, "+delete");
        },
        undo: function(a) {
            a.undo();
        },
        redo: function(a) {
            a.redo();
        },
        goDocStart: function(a) {
            a.extendSelection(Rb(a.firstLine(), 0));
        },
        goDocEnd: function(a) {
            a.extendSelection(Rb(a.lastLine()));
        },
        goLineStart: function(a) {
            a.extendSelection(oe(a, a.getCursor().line));
        },
        goLineStartSmart: function(a) {
            var b = a.getCursor(), c = oe(a, b.line), d = a.getLineHandle(c.line), e = rd(d);
            if (e && 0 != e[0].level) a.extendSelection(c); else {
                var f = Math.max(0, d.text.search(/\S/)), g = b.line == c.line && b.ch <= f && b.ch;
                a.extendSelection(Rb(c.line, g ? 0 : f));
            }
        },
        goLineEnd: function(a) {
            a.extendSelection(pe(a, a.getCursor().line));
        },
        goLineRight: function(a) {
            var b = a.charCoords(a.getCursor(), "div").top + 5;
            a.extendSelection(a.coordsChar({
                left: a.display.lineDiv.offsetWidth + 100,
                top: b
            }, "div"));
        },
        goLineLeft: function(a) {
            var b = a.charCoords(a.getCursor(), "div").top + 5;
            a.extendSelection(a.coordsChar({
                left: 0,
                top: b
            }, "div"));
        },
        goLineUp: function(a) {
            a.moveV(-1, "line");
        },
        goLineDown: function(a) {
            a.moveV(1, "line");
        },
        goPageUp: function(a) {
            a.moveV(-1, "page");
        },
        goPageDown: function(a) {
            a.moveV(1, "page");
        },
        goCharLeft: function(a) {
            a.moveH(-1, "char");
        },
        goCharRight: function(a) {
            a.moveH(1, "char");
        },
        goColumnLeft: function(a) {
            a.moveH(-1, "column");
        },
        goColumnRight: function(a) {
            a.moveH(1, "column");
        },
        goWordLeft: function(a) {
            a.moveH(-1, "word");
        },
        goGroupRight: function(a) {
            a.moveH(1, "group");
        },
        goGroupLeft: function(a) {
            a.moveH(-1, "group");
        },
        goWordRight: function(a) {
            a.moveH(1, "word");
        },
        delCharBefore: function(a) {
            a.deleteH(-1, "char");
        },
        delCharAfter: function(a) {
            a.deleteH(1, "char");
        },
        delWordBefore: function(a) {
            a.deleteH(-1, "word");
        },
        delWordAfter: function(a) {
            a.deleteH(1, "word");
        },
        delGroupBefore: function(a) {
            a.deleteH(-1, "group");
        },
        delGroupAfter: function(a) {
            a.deleteH(1, "group");
        },
        indentAuto: function(a) {
            a.indentSelection("smart");
        },
        indentMore: function(a) {
            a.indentSelection("add");
        },
        indentLess: function(a) {
            a.indentSelection("subtract");
        },
        insertTab: function(a) {
            a.replaceSelection("	", "end", "+input");
        },
        defaultTab: function(a) {
            a.somethingSelected() ? a.indentSelection("add") : a.replaceSelection("	", "end", "+input");
        },
        transposeChars: function(a) {
            var b = a.getCursor(), c = a.getLine(b.line);
            b.ch > 0 && b.ch < c.length - 1 && a.replaceRange(c.charAt(b.ch) + c.charAt(b.ch - 1), Rb(b.line, b.ch - 1), Rb(b.line, b.ch + 1));
        },
        newlineAndIndent: function(a) {
            eb(a, function() {
                a.replaceSelection("\n", "end", "+input"), a.indentLine(a.getCursor().line, null, !0);
            })();
        },
        toggleOverwrite: function(a) {
            a.toggleOverwrite();
        }
    }, jf = a.keyMap = {};
    jf.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite"
    }, jf.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Alt-Up": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Down": "goDocEnd",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        fallthrough: "basic"
    }, jf.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineStart",
        "Cmd-Right": "goLineEnd",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delLineLeft",
        fallthrough: [ "basic", "emacsy" ]
    }, jf["default"] = Ke ? jf.macDefault : jf.pcDefault, jf.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, a.lookupKey = sc, a.isModifierKey = tc, a.keyName = uc, a.fromTextArea = function(b, c) {
        function d() {
            b.value = j.getValue();
        }
        if (c || (c = {}), c.value = b.value, !c.tabindex && b.tabindex && (c.tabindex = b.tabindex), 
        !c.placeholder && b.placeholder && (c.placeholder = b.placeholder), null == c.autofocus) {
            var e = document.body;
            try {
                e = document.activeElement;
            } catch (f) {}
            c.autofocus = e == b || null != b.getAttribute("autofocus") && e == document.body;
        }
        if (b.form && (Kd(b.form, "submit", d), !c.leaveSubmitMethodAlone)) {
            var g = b.form, h = g.submit;
            try {
                var i = g.submit = function() {
                    d(), g.submit = h, g.submit(), g.submit = i;
                };
            } catch (f) {}
        }
        b.style.display = "none";
        var j = a(function(a) {
            b.parentNode.insertBefore(a, b.nextSibling);
        }, c);
        return j.save = d, j.getTextArea = function() {
            return b;
        }, j.toTextArea = function() {
            d(), b.parentNode.removeChild(j.getWrapperElement()), b.style.display = "", b.form && (Ld(b.form, "submit", d), 
            "function" == typeof b.form.submit && (b.form.submit = h));
        }, j;
    }, vc.prototype = {
        eol: function() {
            return this.pos >= this.string.length;
        },
        sol: function() {
            return 0 == this.pos;
        },
        peek: function() {
            return this.string.charAt(this.pos) || void 0;
        },
        next: function() {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0;
        },
        eat: function(a) {
            var b = this.string.charAt(this.pos);
            if ("string" == typeof a) var c = b == a; else var c = b && (a.test ? a.test(b) : a(b));
            return c ? (++this.pos, b) : void 0;
        },
        eatWhile: function(a) {
            for (var b = this.pos; this.eat(a); ) ;
            return this.pos > b;
        },
        eatSpace: function() {
            for (var a = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
            return this.pos > a;
        },
        skipToEnd: function() {
            this.pos = this.string.length;
        },
        skipTo: function(a) {
            var b = this.string.indexOf(a, this.pos);
            return b > -1 ? (this.pos = b, !0) : void 0;
        },
        backUp: function(a) {
            this.pos -= a;
        },
        column: function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = Sd(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), 
            this.lastColumnPos = this.start), this.lastColumnValue;
        },
        indentation: function() {
            return Sd(this.string, null, this.tabSize);
        },
        match: function(a, b, c) {
            if ("string" != typeof a) {
                var d = this.string.slice(this.pos).match(a);
                return d && d.index > 0 ? null : (d && b !== !1 && (this.pos += d[0].length), d);
            }
            var e = function(a) {
                return c ? a.toLowerCase() : a;
            }, f = this.string.substr(this.pos, a.length);
            return e(f) == e(a) ? (b !== !1 && (this.pos += a.length), !0) : void 0;
        },
        current: function() {
            return this.string.slice(this.start, this.pos);
        }
    }, a.StringStream = vc, a.TextMarker = wc, wc.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            var a = this.doc.cm, b = a && !a.curOp;
            b && cb(a);
            for (var c = null, d = null, e = 0; e < this.lines.length; ++e) {
                var f = this.lines[e], g = Ac(f.markedSpans, this);
                null != g.to && (d = od(f)), f.markedSpans = Bc(f.markedSpans, g), null != g.from ? c = od(f) : this.collapsed && !Mc(this.doc, f) && a && nd(f, ab(a.display));
            }
            if (a && this.collapsed && !a.options.lineWrapping) for (var e = 0; e < this.lines.length; ++e) {
                var h = Lc(a.doc, this.lines[e]), i = k(a.doc, h);
                i > a.display.maxLineLength && (a.display.maxLine = h, a.display.maxLineLength = i, 
                a.display.maxLineChanged = !0);
            }
            null != c && a && hb(a, c, d + 1), this.lines.length = 0, this.explicitlyCleared = !0, 
            this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, a && ac(a)), b && db(a), 
            Nd(this, "clear");
        }
    }, wc.prototype.find = function() {
        for (var a, b, c = 0; c < this.lines.length; ++c) {
            var d = this.lines[c], e = Ac(d.markedSpans, this);
            if (null != e.from || null != e.to) {
                var f = od(d);
                null != e.from && (a = Rb(f, e.from)), null != e.to && (b = Rb(f, e.to));
            }
        }
        return "bookmark" == this.type ? a : a && {
            from: a,
            to: b
        };
    }, wc.prototype.changed = function() {
        var a = this.find(), b = this.doc.cm;
        if (a && b) {
            var c = kd(this.doc, a.from.line);
            if (O(b, c), a.from.line >= b.display.showingFrom && a.from.line < b.display.showingTo) {
                for (var d = b.display.lineDiv.firstChild; d; d = d.nextSibling) if (d.lineObj == c) {
                    d.offsetHeight != c.height && nd(c, d.offsetHeight);
                    break;
                }
                gb(b, function() {
                    b.curOp.selectionChanged = !0;
                });
            }
        }
    }, wc.prototype.attachLine = function(a) {
        if (!this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            b.maybeHiddenMarkers && -1 != Wd(b.maybeHiddenMarkers, this) || (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(a);
    }, wc.prototype.detachLine = function(a) {
        if (this.lines.splice(Wd(this.lines, a), 1), !this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this);
        }
    }, a.SharedTextMarker = yc, yc.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var a = 0; a < this.markers.length; ++a) this.markers[a].clear();
            Nd(this, "clear");
        }
    }, yc.prototype.find = function() {
        return this.primary.find();
    };
    var kf = a.LineWidget = function(a, b, c) {
        for (var d in c) c.hasOwnProperty(d) && (this[d] = c[d]);
        this.cm = a, this.node = b;
    };
    kf.prototype.clear = Qc(function() {
        var a = this.line.widgets, b = od(this.line);
        if (null != b && a) {
            for (var c = 0; c < a.length; ++c) a[c] == this && a.splice(c--, 1);
            a.length || (this.line.widgets = null), nd(this.line, Math.max(0, this.line.height - Rc(this))), 
            hb(this.cm, b, b + 1);
        }
    }), kf.prototype.changed = Qc(function() {
        var a = this.height;
        this.height = null;
        var b = Rc(this) - a;
        if (b) {
            nd(this.line, this.line.height + b);
            var c = od(this.line);
            hb(this.cm, c, c + 1);
        }
    });
    var lf = {}, mf = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;
    gd.prototype = {
        chunkSize: function() {
            return this.lines.length;
        },
        removeInner: function(a, b) {
            for (var c = a, d = a + b; d > c; ++c) {
                var e = this.lines[c];
                this.height -= e.height, Vc(e), Nd(e, "delete");
            }
            this.lines.splice(a, b);
        },
        collapse: function(a) {
            a.splice.apply(a, [ a.length, 0 ].concat(this.lines));
        },
        insertInner: function(a, b, c) {
            this.height += c, this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
            for (var d = 0, e = b.length; e > d; ++d) b[d].parent = this;
        },
        iterN: function(a, b, c) {
            for (var d = a + b; d > a; ++a) if (c(this.lines[a])) return !0;
        }
    }, hd.prototype = {
        chunkSize: function() {
            return this.size;
        },
        removeInner: function(a, b) {
            this.size -= b;
            for (var c = 0; c < this.children.length; ++c) {
                var d = this.children[c], e = d.chunkSize();
                if (e > a) {
                    var f = Math.min(b, e - a), g = d.height;
                    if (d.removeInner(a, f), this.height -= g - d.height, e == f && (this.children.splice(c--, 1), 
                    d.parent = null), 0 == (b -= f)) break;
                    a = 0;
                } else a -= e;
            }
            if (this.size - b < 25) {
                var h = [];
                this.collapse(h), this.children = [ new gd(h) ], this.children[0].parent = this;
            }
        },
        collapse: function(a) {
            for (var b = 0, c = this.children.length; c > b; ++b) this.children[b].collapse(a);
        },
        insertInner: function(a, b, c) {
            this.size += b.length, this.height += c;
            for (var d = 0, e = this.children.length; e > d; ++d) {
                var f = this.children[d], g = f.chunkSize();
                if (g >= a) {
                    if (f.insertInner(a, b, c), f.lines && f.lines.length > 50) {
                        for (;f.lines.length > 50; ) {
                            var h = f.lines.splice(f.lines.length - 25, 25), i = new gd(h);
                            f.height -= i.height, this.children.splice(d + 1, 0, i), i.parent = this;
                        }
                        this.maybeSpill();
                    }
                    break;
                }
                a -= g;
            }
        },
        maybeSpill: function() {
            if (!(this.children.length <= 10)) {
                var a = this;
                do {
                    var b = a.children.splice(a.children.length - 5, 5), c = new hd(b);
                    if (a.parent) {
                        a.size -= c.size, a.height -= c.height;
                        var d = Wd(a.parent.children, a);
                        a.parent.children.splice(d + 1, 0, c);
                    } else {
                        var e = new hd(a.children);
                        e.parent = a, a.children = [ e, c ], a = e;
                    }
                    c.parent = a.parent;
                } while (a.children.length > 10);
                a.parent.maybeSpill();
            }
        },
        iterN: function(a, b, c) {
            for (var d = 0, e = this.children.length; e > d; ++d) {
                var f = this.children[d], g = f.chunkSize();
                if (g > a) {
                    var h = Math.min(b, g - a);
                    if (f.iterN(a, h, c)) return !0;
                    if (0 == (b -= h)) break;
                    a = 0;
                } else a -= g;
            }
        }
    };
    var nf = 0, of = a.Doc = function(a, b, c) {
        if (!(this instanceof of)) return new of(a, b, c);
        null == c && (c = 0), hd.call(this, [ new gd([ Tc("", null) ]) ]), this.first = c, 
        this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.history = sd(), this.cleanGeneration = 1, 
        this.frontier = c;
        var d = Rb(c, 0);
        this.sel = {
            from: d,
            to: d,
            head: d,
            anchor: d,
            shift: !1,
            extend: !1,
            goalColumn: null
        }, this.id = ++nf, this.modeOption = b, "string" == typeof a && (a = Bf(a)), fd(this, {
            from: d,
            to: d,
            text: a
        }, null, {
            head: d,
            anchor: d
        });
    };
    of.prototype = Xd(hd.prototype, {
        constructor: of,
        iter: function(a, b, c) {
            c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a);
        },
        insert: function(a, b) {
            for (var c = 0, d = 0, e = b.length; e > d; ++d) c += b[d].height;
            this.insertInner(a - this.first, b, c);
        },
        remove: function(a, b) {
            this.removeInner(a - this.first, b);
        },
        getValue: function(a) {
            var b = md(this, this.first, this.first + this.size);
            return a === !1 ? b : b.join(a || "\n");
        },
        setValue: function(a) {
            var b = Rb(this.first, 0), c = this.first + this.size - 1;
            Kb(this, {
                from: b,
                to: Rb(c, kd(this, c).text.length),
                text: Bf(a),
                origin: "setValue"
            }, {
                head: b,
                anchor: b
            }, !0);
        },
        replaceRange: function(a, b, c, d) {
            b = Wb(this, b), c = c ? Wb(this, c) : b, Qb(this, a, b, c, d);
        },
        getRange: function(a, b, c) {
            var d = ld(this, Wb(this, a), Wb(this, b));
            return c === !1 ? d : d.join(c || "\n");
        },
        getLine: function(a) {
            var b = this.getLineHandle(a);
            return b && b.text;
        },
        setLine: function(a, b) {
            Yb(this, a) && Qb(this, b, Rb(a, 0), Wb(this, Rb(a)));
        },
        removeLine: function(a) {
            a ? Qb(this, "", Wb(this, Rb(a - 1)), Wb(this, Rb(a))) : Qb(this, "", Rb(0, 0), Wb(this, Rb(1, 0)));
        },
        getLineHandle: function(a) {
            return Yb(this, a) ? kd(this, a) : void 0;
        },
        getLineNumber: function(a) {
            return od(a);
        },
        lineCount: function() {
            return this.size;
        },
        firstLine: function() {
            return this.first;
        },
        lastLine: function() {
            return this.first + this.size - 1;
        },
        clipPos: function(a) {
            return Wb(this, a);
        },
        getCursor: function(a) {
            var b, c = this.sel;
            return b = null == a || "head" == a ? c.head : "anchor" == a ? c.anchor : "end" == a || a === !1 ? c.to : c.from, 
            Ub(b);
        },
        somethingSelected: function() {
            return !Sb(this.sel.head, this.sel.anchor);
        },
        setCursor: fb(function(a, b, c) {
            var d = Wb(this, "number" == typeof a ? Rb(a, b || 0) : a);
            c ? Zb(this, d) : _b(this, d, d);
        }),
        setSelection: fb(function(a, b) {
            _b(this, Wb(this, a), Wb(this, b || a));
        }),
        extendSelection: fb(function(a, b) {
            Zb(this, Wb(this, a), b && Wb(this, b));
        }),
        getSelection: function(a) {
            return this.getRange(this.sel.from, this.sel.to, a);
        },
        replaceSelection: function(a, b, c) {
            Kb(this, {
                from: this.sel.from,
                to: this.sel.to,
                text: Bf(a),
                origin: c
            }, b || "around");
        },
        undo: fb(function() {
            Mb(this, "undo");
        }),
        redo: fb(function() {
            Mb(this, "redo");
        }),
        setExtending: function(a) {
            this.sel.extend = a;
        },
        historySize: function() {
            var a = this.history;
            return {
                undo: a.done.length,
                redo: a.undone.length
            };
        },
        clearHistory: function() {
            this.history = sd(this.history.maxGeneration);
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration();
        },
        changeGeneration: function() {
            return this.history.lastOp = this.history.lastOrigin = null, this.history.generation;
        },
        isClean: function(a) {
            return this.history.generation == (a || this.cleanGeneration);
        },
        getHistory: function() {
            return {
                done: yd(this.history.done),
                undone: yd(this.history.undone)
            };
        },
        setHistory: function(a) {
            var b = this.history = sd(this.history.maxGeneration);
            b.done = a.done.slice(0), b.undone = a.undone.slice(0);
        },
        markText: function(a, b, c) {
            return xc(this, Wb(this, a), Wb(this, b), c, "range");
        },
        setBookmark: function(a, b) {
            var c = {
                replacedWith: b && (null == b.nodeType ? b.widget : b),
                insertLeft: b && b.insertLeft
            };
            return a = Wb(this, a), xc(this, a, a, c, "bookmark");
        },
        findMarksAt: function(a) {
            a = Wb(this, a);
            var b = [], c = kd(this, a.line).markedSpans;
            if (c) for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                (null == e.from || e.from <= a.ch) && (null == e.to || e.to >= a.ch) && b.push(e.marker.parent || e.marker);
            }
            return b;
        },
        getAllMarks: function() {
            var a = [];
            return this.iter(function(b) {
                var c = b.markedSpans;
                if (c) for (var d = 0; d < c.length; ++d) null != c[d].from && a.push(c[d].marker);
            }), a;
        },
        posFromIndex: function(a) {
            var b, c = this.first;
            return this.iter(function(d) {
                var e = d.text.length + 1;
                return e > a ? (b = a, !0) : (a -= e, void ++c);
            }), Wb(this, Rb(c, b));
        },
        indexFromPos: function(a) {
            a = Wb(this, a);
            var b = a.ch;
            return a.line < this.first || a.ch < 0 ? 0 : (this.iter(this.first, a.line, function(a) {
                b += a.text.length + 1;
            }), b);
        },
        copy: function(a) {
            var b = new of(md(this, this.first, this.first + this.size), this.modeOption, this.first);
            return b.scrollTop = this.scrollTop, b.scrollLeft = this.scrollLeft, b.sel = {
                from: this.sel.from,
                to: this.sel.to,
                head: this.sel.head,
                anchor: this.sel.anchor,
                shift: this.sel.shift,
                extend: !1,
                goalColumn: this.sel.goalColumn
            }, a && (b.history.undoDepth = this.history.undoDepth, b.setHistory(this.getHistory())), 
            b;
        },
        linkedDoc: function(a) {
            a || (a = {});
            var b = this.first, c = this.first + this.size;
            null != a.from && a.from > b && (b = a.from), null != a.to && a.to < c && (c = a.to);
            var d = new of(md(this, b, c), a.mode || this.modeOption, b);
            return a.sharedHist && (d.history = this.history), (this.linked || (this.linked = [])).push({
                doc: d,
                sharedHist: a.sharedHist
            }), d.linked = [ {
                doc: this,
                isParent: !0,
                sharedHist: a.sharedHist
            } ], d;
        },
        unlinkDoc: function(b) {
            if (b instanceof a && (b = b.doc), this.linked) for (var c = 0; c < this.linked.length; ++c) {
                var d = this.linked[c];
                if (d.doc == b) {
                    this.linked.splice(c, 1), b.unlinkDoc(this);
                    break;
                }
            }
            if (b.history == this.history) {
                var e = [ b.id ];
                id(b, function(a) {
                    e.push(a.id);
                }, !0), b.history = sd(), b.history.done = yd(this.history.done, e), b.history.undone = yd(this.history.undone, e);
            }
        },
        iterLinkedDocs: function(a) {
            id(this, a);
        },
        getMode: function() {
            return this.mode;
        },
        getEditor: function() {
            return this.cm;
        }
    }), of.prototype.eachLine = of.prototype.iter;
    var pf = "iter insert remove copy getEditor".split(" ");
    for (var qf in of.prototype) of.prototype.hasOwnProperty(qf) && Wd(pf, qf) < 0 && (a.prototype[qf] = function(a) {
        return function() {
            return a.apply(this.doc, arguments);
        };
    }(of.prototype[qf]));
    a.e_stop = Hd, a.e_preventDefault = Ed, a.e_stopPropagation = Fd;
    var rf, sf = 0;
    a.on = Kd, a.off = Ld, a.signal = Md;
    var tf = 30, uf = a.Pass = {
        toString: function() {
            return "CodeMirror.Pass";
        }
    };
    Rd.prototype = {
        set: function(a, b) {
            clearTimeout(this.id), this.id = setTimeout(b, a);
        }
    }, a.countColumn = Sd;
    var vf = [ "" ], wf = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, xf = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;
    a.replaceGetRect = function(a) {
        fe = a;
    };
    var yf = function() {
        if (ye) return !1;
        var a = be("div");
        return "draggable" in a || "dragDrop" in a;
    }();
    ve ? ge = function(a, b) {
        return 36 == a.charCodeAt(b - 1) && 39 == a.charCodeAt(b);
    } : De && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent) ? ge = function(a, b) {
        return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(a.slice(b - 1, b + 1));
    } : ze && (ge = function(a, b) {
        return b > 1 && 45 == a.charCodeAt(b - 1) && /\w/.test(a.charAt(b - 2)) && /[^\-?\.]/.test(a.charAt(b)) ? !0 : /[~!#%&*)=+}\]|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|\u2026[\w~`@#$%\^&*(_=+{[><]/.test(a.slice(b - 1, b + 1));
    });
    var zf, Af, Bf = 3 != "\n\nb".split(/\n/).length ? function(a) {
        for (var b = 0, c = [], d = a.length; d >= b; ) {
            var e = a.indexOf("\n", b);
            -1 == e && (e = a.length);
            var f = a.slice(b, "\r" == a.charAt(e - 1) ? e - 1 : e), g = f.indexOf("\r");
            -1 != g ? (c.push(f.slice(0, g)), b += g + 1) : (c.push(f), b = e + 1);
        }
        return c;
    } : function(a) {
        return a.split(/\r\n?|\n/);
    };
    a.splitLines = Bf;
    var Cf = window.getSelection ? function(a) {
        try {
            return a.selectionStart != a.selectionEnd;
        } catch (b) {
            return !1;
        }
    } : function(a) {
        try {
            var b = a.ownerDocument.selection.createRange();
        } catch (c) {}
        return b && b.parentElement() == a ? 0 != b.compareEndPoints("StartToEnd", b) : !1;
    }, Df = function() {
        var a = be("div");
        return "oncopy" in a ? !0 : (a.setAttribute("oncopy", "return;"), "function" == typeof a.oncopy);
    }(), Ef = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        109: "-",
        107: "=",
        127: "Delete",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63276: "PageUp",
        63277: "PageDown",
        63275: "End",
        63273: "Home",
        63234: "Left",
        63232: "Up",
        63235: "Right",
        63233: "Down",
        63302: "Insert",
        63272: "Delete"
    };
    a.keyNames = Ef, function() {
        for (var a = 0; 10 > a; a++) Ef[a + 48] = String(a);
        for (var a = 65; 90 >= a; a++) Ef[a] = String.fromCharCode(a);
        for (var a = 1; 12 >= a; a++) Ef[a + 111] = Ef[a + 63235] = "F" + a;
    }();
    var Ff, Gf = function() {
        function a(a) {
            return 255 >= a ? b.charAt(a) : a >= 1424 && 1524 >= a ? "R" : a >= 1536 && 1791 >= a ? c.charAt(a - 1536) : a >= 1792 && 2220 >= a ? "r" : "L";
        }
        var b = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL", c = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr", d = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, e = /[stwN]/, f = /[LRr]/, g = /[Lb1n]/, h = /[1n]/, i = "L";
        return function(b) {
            if (!d.test(b)) return !1;
            for (var c, j = b.length, k = [], l = 0; j > l; ++l) k.push(c = a(b.charCodeAt(l)));
            for (var l = 0, m = i; j > l; ++l) {
                var c = k[l];
                "m" == c ? k[l] = m : m = c;
            }
            for (var l = 0, n = i; j > l; ++l) {
                var c = k[l];
                "1" == c && "r" == n ? k[l] = "n" : f.test(c) && (n = c, "r" == c && (k[l] = "R"));
            }
            for (var l = 1, m = k[0]; j - 1 > l; ++l) {
                var c = k[l];
                "+" == c && "1" == m && "1" == k[l + 1] ? k[l] = "1" : "," != c || m != k[l + 1] || "1" != m && "n" != m || (k[l] = m), 
                m = c;
            }
            for (var l = 0; j > l; ++l) {
                var c = k[l];
                if ("," == c) k[l] = "N"; else if ("%" == c) {
                    for (var o = l + 1; j > o && "%" == k[o]; ++o) ;
                    for (var p = l && "!" == k[l - 1] || j - 1 > o && "1" == k[o] ? "1" : "N", q = l; o > q; ++q) k[q] = p;
                    l = o - 1;
                }
            }
            for (var l = 0, n = i; j > l; ++l) {
                var c = k[l];
                "L" == n && "1" == c ? k[l] = "L" : f.test(c) && (n = c);
            }
            for (var l = 0; j > l; ++l) if (e.test(k[l])) {
                for (var o = l + 1; j > o && e.test(k[o]); ++o) ;
                for (var r = "L" == (l ? k[l - 1] : i), s = "L" == (j - 1 > o ? k[o] : i), p = r || s ? "L" : "R", q = l; o > q; ++q) k[q] = p;
                l = o - 1;
            }
            for (var t, u = [], l = 0; j > l; ) if (g.test(k[l])) {
                var v = l;
                for (++l; j > l && g.test(k[l]); ++l) ;
                u.push({
                    from: v,
                    to: l,
                    level: 0
                });
            } else {
                var w = l, x = u.length;
                for (++l; j > l && "L" != k[l]; ++l) ;
                for (var q = w; l > q; ) if (h.test(k[q])) {
                    q > w && u.splice(x, 0, {
                        from: w,
                        to: q,
                        level: 1
                    });
                    var y = q;
                    for (++q; l > q && h.test(k[q]); ++q) ;
                    u.splice(x, 0, {
                        from: y,
                        to: q,
                        level: 2
                    }), w = q;
                } else ++q;
                l > w && u.splice(x, 0, {
                    from: w,
                    to: l,
                    level: 1
                });
            }
            return 1 == u[0].level && (t = b.match(/^\s+/)) && (u[0].from = t[0].length, u.unshift({
                from: 0,
                to: t[0].length,
                level: 0
            })), 1 == Ud(u).level && (t = b.match(/\s+$/)) && (Ud(u).to -= t[0].length, u.push({
                from: j - t[0].length,
                to: j,
                level: 0
            })), u[0].level != Ud(u).level && u.push({
                from: j,
                to: j,
                level: u[0].level
            }), u;
        };
    }();
    return a.version = "3.14.0", a;
}(), function() {
    function a() {
        this.rootNode = new b("", !0), this.insert = function(a, b) {
            this._insertInternal(a, this.rootNode, b);
        }, this._insertInternal = function(a, b, c) {
            b.isStringSubNode(a) ? this._addNodeOrRecurse(a, b, c) : a == b.getKey() ? this._makeNodeDataNode(a, b, c) : b.isStringPartialMatch(a) ? this._splitNode(a, b, c) : this._addNodeAsChild(a, b, c);
        }, this._addNodeOrRecurse = function(a, c, d) {
            for (var e = !1, f = c.getMatchingPortionOfString(a), g = 0; g < c.getChildren().length; g++) if (c.getChildren()[g].getKey().startsWith(f.charAt(0))) {
                e = !0, this._insertInternal(f, c.getChildren()[g], d);
                break;
            }
            if (e === !1) {
                var h = new b(f);
                h.setReal(!0), h.setValue(d), c.addChild(h);
            }
        }, this._makeNodeDataNode = function(a, b, c) {
            if (b.getIsReal()) throw "Duplicate key";
            b.setReal(!0), b.setValue(c);
        }, this._addNodeAsChild = function(a, b, c) {
            alert("This doesn't ever seem to be called. If you see this alert, you just found a case where it is. You now have reason to remove this alert.");
            var d = b.deepCopy();
            d.setKey(b.getMatchingPortionOfNodeKey(a)), b.setKey(a), b.setReal(!0), b.setValue(c), 
            b.addChild(d);
        }, this._splitNode = function(a, c, d) {
            var e = c.deepCopy();
            if (e.setKey(c.getMatchingPortionOfNodeKey(a)), c.setKey(c.getUnmatchingPortionOfString(a)), 
            c.setReal(!1), c.clearChildren(), c.addChild(e), c.getNumberOfMatchingCharacters(a) < a.length) {
                var f = new b();
                f.setKey(c.getMatchingPortionOfString(a)), f.setReal(!0), f.setValue(d), c.addChild(f);
            } else c.setValue(d), c.setReal(!0);
        }, this.search = function(a, b) {
            var d = new c();
            return d.result = [], d.visit = function(a, b, c) {
                c.getIsReal() && this.result.push(c.value);
            }, d.shouldVisit = function(a, c) {
                return c.getKey().startsWith(a) && this.result.length < b;
            }, d.shouldRecurse = function() {
                return this.result.length < b;
            }, d.shouldVisitChild = function(a, c) {
                return c.getKey().startsWith(a.charAt(0)) && this.result.length < b;
            }, this.visit(a, d), d.result;
        }, this.find = function(a) {
            var b = new c();
            return b.visit = function(a, b, c) {
                c.getIsReal() && (this.result = c.value);
            }, b.shouldVisit = function(a, b) {
                return a == b.getKey();
            }, b.shouldRecurse = function(a, b) {
                return b.isStringSubNode(a);
            }, b.shouldVisitChild = function(a, b) {
                return b.getKey().startsWith(a.charAt(0));
            }, this.shouldBreakAfterFindingChild = function() {
                return !0;
            }, this.visit(a, b), b.result;
        }, this.visit = function(a, b) {
            this._visitInternal(a, b, null, this.rootNode);
        }, this._visitInternal = function(a, b, c, d) {
            if (b.shouldVisit(a, d) && b.visit(a, c, d), b.shouldRecurse(a, d)) for (var e = d.getMatchingPortionOfString(a), f = 0; f < d.getChildren().length && (!b.shouldVisitChild(e, d.getChildren()[f]) || (this._visitInternal(e, b, d, d.getChildren()[f]), 
            !b.shouldBreakAfterFindingChild())); f++) ;
        }, this.getNumberOfRealNodes = function() {
            var a = new c();
            return a.result = 0, a.visit = function(a, b, c) {
                c.getIsReal() && this.result++;
            }, a.shouldVisit = function() {
                return !0;
            }, a.shouldRecurse = function() {
                return !0;
            }, a.shouldVisitChild = function() {
                return !0;
            }, this.visit("", a), a.result;
        }, this.getNumberOfNodes = function() {
            var a = new c();
            return a.result = 0, a.visit = function() {
                this.result++;
            }, a.shouldVisit = function() {
                return !0;
            }, a.shouldRecurse = function() {
                return !0;
            }, a.shouldVisitChild = function() {
                return !0;
            }, this.visit("", a), a.result;
        };
    }
    function b(a) {
        this.children = [], this.key = a, this.isReal, this.value, this.deepCopy = function() {
            var a = new b();
            return a.setKey(this.getKey()), a.children = this.getChildren(), a.setReal(this.getIsReal()), 
            a.setValue(this.getValue()), a;
        }, this.setReal = function(a) {
            this.isReal = a;
        }, this.getIsReal = function() {
            return this.isReal;
        }, this.getValue = function() {
            return this.value;
        }, this.setValue = function(a) {
            this.value = a;
        }, this.addChild = function(a) {
            this.children.push(a);
        }, this.getKey = function() {
            return this.key;
        }, this.setKey = function(a) {
            this.key = a;
        }, this.isRoot = function() {
            return "" === this.key;
        }, this.getChildren = function() {
            return this.children;
        }, this.clearChildren = function() {
            this.children = [];
        }, this.getNumberOfMatchingCharacters = function(a) {
            for (var b = 0; b < a.length && b < this.key.length && a.charAt(b) == this.key.charAt(b); ) b++;
            return b;
        }, this.isStringSubNode = function(a) {
            return this.isRoot() ? !0 : this.getNumberOfMatchingCharacters(a) < a.length && this.getNumberOfMatchingCharacters(a) >= this.key.length;
        }, this.isStringPartialMatch = function(a) {
            return this.getNumberOfMatchingCharacters(a) > 0 && this.getNumberOfMatchingCharacters(a) < this.key.length;
        }, this.getMatchingPortionOfString = function(a) {
            return a.substring(this.getNumberOfMatchingCharacters(a));
        }, this.getMatchingPortionOfNodeKey = function(a) {
            return this.key.substring(this.getNumberOfMatchingCharacters(a));
        }, this.getUnmatchingPortionOfString = function(a) {
            return a.substring(0, this.getNumberOfMatchingCharacters(a));
        };
    }
    function c() {
        this.getResult = function() {
            return this.result;
        }, this.shouldBreakAfterFindingChild = function() {
            return !1;
        };
    }
    String.prototype.startsWith = function(a) {
        return 0 === this.indexOf(a);
    }, Array.prototype.contains = function(a) {
        return -1 !== self.indexOf(a);
    }, window.RadixTree = a;
}(), function() {
    function a(a, b, c) {
        var d, e = a.getWrapperElement();
        return d = e.appendChild(document.createElement("div")), d.className = c ? "CodeMirror-dialog CodeMirror-dialog-bottom" : "CodeMirror-dialog CodeMirror-dialog-top", 
        d.innerHTML = b, d;
    }
    CodeMirror.defineExtension("openDialog", function(b, c, d) {
        function e() {
            h || (h = !0, g.parentNode.removeChild(g));
        }
        var f, g = a(this, b, d && d.bottom), h = !1, i = this, j = g.getElementsByTagName("input")[0];
        return j ? (CodeMirror.on(j, "keydown", function(a) {
            d && d.onKeyDown && d.onKeyDown(a, j.value, e) || (13 == a.keyCode || 27 == a.keyCode) && (CodeMirror.e_stop(a), 
            e(), i.focus(), 13 == a.keyCode && c(j.value));
        }), d && d.onKeyUp && CodeMirror.on(j, "keyup", function(a) {
            d.onKeyUp(a, j.value, e);
        }), d && d.value && (j.value = d.value), j.focus(), CodeMirror.on(j, "blur", e)) : (f = g.getElementsByTagName("button")[0]) && (CodeMirror.on(f, "click", function() {
            e(), i.focus();
        }), f.focus(), CodeMirror.on(f, "blur", e)), e;
    }), CodeMirror.defineExtension("openConfirm", function(b, c, d) {
        function e() {
            h || (h = !0, f.parentNode.removeChild(f), i.focus());
        }
        var f = a(this, b, d && d.bottom), g = f.getElementsByTagName("button"), h = !1, i = this, j = 1;
        g[0].focus();
        for (var k = 0; k < g.length; ++k) {
            var l = g[k];
            !function(a) {
                CodeMirror.on(l, "click", function(b) {
                    CodeMirror.e_preventDefault(b), e(), a && a(i);
                });
            }(c[k]), CodeMirror.on(l, "blur", function() {
                --j, setTimeout(function() {
                    0 >= j && e();
                }, 200);
            }), CodeMirror.on(l, "focus", function() {
                ++j;
            });
        }
    });
}(), function() {
    function a(a, c, d, e) {
        if (this.atOccurrence = !1, this.doc = a, null == e && "string" == typeof c && (e = !1), 
        d = d ? a.clipPos(d) : b(0, 0), this.pos = {
            from: d,
            to: d
        }, "string" != typeof c) c.global || (c = new RegExp(c.source, c.ignoreCase ? "ig" : "g")), 
        this.matches = function(d, e) {
            if (d) {
                c.lastIndex = 0;
                for (var f, g, h = a.getLine(e.line).slice(0, e.ch), i = 0; ;) {
                    c.lastIndex = i;
                    var j = c.exec(h);
                    if (!j) break;
                    if (f = j, g = f.index, i = f.index + (f[0].length || 1), i == h.length) break;
                }
                var k = f && f[0].length || 0;
                k || (0 == g && 0 == h.length ? f = void 0 : g != a.getLine(e.line).length && k++);
            } else {
                c.lastIndex = e.ch;
                var h = a.getLine(e.line), f = c.exec(h), k = f && f[0].length || 0, g = f && f.index;
                g + k == h.length || k || (k = 1);
            }
            return f && k ? {
                from: b(e.line, g),
                to: b(e.line, g + k),
                match: f
            } : void 0;
        }; else {
            e && (c = c.toLowerCase());
            var f = e ? function(a) {
                return a.toLowerCase();
            } : function(a) {
                return a;
            }, g = c.split("\n");
            this.matches = 1 == g.length ? c.length ? function(d, e) {
                var g, h = f(a.getLine(e.line)), i = c.length;
                return (d ? e.ch >= i && -1 != (g = h.lastIndexOf(c, e.ch - i)) : -1 != (g = h.indexOf(c, e.ch))) ? {
                    from: b(e.line, g),
                    to: b(e.line, g + i)
                } : void 0;
            } : function() {} : function(c, d) {
                var e = d.line, h = c ? g.length - 1 : 0, i = g[h], j = f(a.getLine(e)), k = c ? j.indexOf(i) + i.length : j.lastIndexOf(i);
                if (!(c ? k >= d.ch || k != i.length : k <= d.ch || k != j.length - i.length)) for (;;) {
                    if (c ? !e : e == a.lineCount() - 1) return;
                    if (j = f(a.getLine(e += c ? -1 : 1)), i = g[c ? --h : ++h], !(h > 0 && h < g.length - 1)) {
                        var l = c ? j.lastIndexOf(i) : j.indexOf(i) + i.length;
                        if (c ? l != j.length - i.length : l != i.length) return;
                        var m = b(d.line, k), n = b(e, l);
                        return {
                            from: c ? n : m,
                            to: c ? m : n
                        };
                    }
                    if (j != i) return;
                }
            };
        }
    }
    var b = CodeMirror.Pos;
    a.prototype = {
        findNext: function() {
            return this.find(!1);
        },
        findPrevious: function() {
            return this.find(!0);
        },
        find: function(a) {
            function c(a) {
                var c = b(a, 0);
                return d.pos = {
                    from: c,
                    to: c
                }, d.atOccurrence = !1, !1;
            }
            for (var d = this, e = this.doc.clipPos(a ? this.pos.from : this.pos.to); ;) {
                if (this.pos = this.matches(a, e)) return this.pos.from && this.pos.to || console.log(this.matches, this.pos), 
                this.atOccurrence = !0, this.pos.match || !0;
                if (a) {
                    if (!e.line) return c(0);
                    e = b(e.line - 1, this.doc.getLine(e.line - 1).length);
                } else {
                    var f = this.doc.lineCount();
                    if (e.line == f - 1) return c(f);
                    e = b(e.line + 1, 0);
                }
            }
        },
        from: function() {
            return this.atOccurrence ? this.pos.from : void 0;
        },
        to: function() {
            return this.atOccurrence ? this.pos.to : void 0;
        },
        replace: function(a) {
            if (this.atOccurrence) {
                var c = CodeMirror.splitLines(a);
                this.doc.replaceRange(c, this.pos.from, this.pos.to), this.pos.to = b(this.pos.from.line + c.length - 1, c[c.length - 1].length + (1 == c.length ? this.pos.from.ch : 0));
            }
        }
    }, CodeMirror.defineExtension("getSearchCursor", function(b, c, d) {
        return new a(this.doc, b, c, d);
    }), CodeMirror.defineDocExtension("getSearchCursor", function(b, c, d) {
        return new a(this, b, c, d);
    });
}(), function() {
    function a(a) {
        return "string" == typeof a ? {
            token: function(b) {
                return b.match(a) ? "searching" : (b.next(), void (b.skipTo(a.charAt(0)) || b.skipToEnd()));
            }
        } : {
            token: function(b) {
                if (b.match(a)) return "searching";
                for (;!b.eol() && (b.next(), !b.match(a, !1)); ) ;
            }
        };
    }
    function b() {
        this.posFrom = this.posTo = this.query = null, this.overlay = null;
    }
    function c(a) {
        return a.state.search || (a.state.search = new b());
    }
    function d(a, b, c) {
        return a.getSearchCursor(b, c, "string" == typeof b && b == b.toLowerCase());
    }
    function e(a, b, c, d) {
        a.openDialog ? a.openDialog(b, d) : d(prompt(c, ""));
    }
    function f(a, b, c, d) {
        a.openConfirm ? a.openConfirm(b, d) : confirm(c) && d[0]();
    }
    function g(a) {
        var b = a.match(/^\/(.*)\/([a-z]*)$/);
        return b ? new RegExp(b[1], -1 == b[2].indexOf("i") ? "" : "i") : a;
    }
    function h(b, d) {
        var f = c(b);
        return f.query ? i(b, d) : void e(b, l, "Search for:", function(c) {
            b.operation(function() {
                c && !f.query && (f.query = g(c), b.removeOverlay(f.overlay), f.overlay = a(f.query), 
                b.addOverlay(f.overlay), f.posFrom = f.posTo = b.getCursor(), i(b, d));
            });
        });
    }
    function i(a, b) {
        a.operation(function() {
            var e = c(a), f = d(a, e.query, b ? e.posFrom : e.posTo);
            (f.find(b) || (f = d(a, e.query, b ? CodeMirror.Pos(a.lastLine()) : CodeMirror.Pos(a.firstLine(), 0)), 
            f.find(b))) && (a.setSelection(f.from(), f.to()), e.posFrom = f.from(), e.posTo = f.to());
        });
    }
    function j(a) {
        a.operation(function() {
            var b = c(a);
            b.query && (b.query = null, a.removeOverlay(b.overlay));
        });
    }
    function k(a, b) {
        e(a, m, "Replace:", function(c) {
            c && (c = g(c), e(a, n, "Replace with:", function(e) {
                if (b) a.operation(function() {
                    for (var b = d(a, c); b.findNext(); ) if ("string" != typeof c) {
                        var f = a.getRange(b.from(), b.to()).match(c);
                        b.replace(e.replace(/\$(\d)/, function(a, b) {
                            return f[b];
                        }));
                    } else b.replace(e);
                }); else {
                    j(a);
                    var g = d(a, c, a.getCursor()), h = function() {
                        var b, e = g.from();
                        !(b = g.findNext()) && (g = d(a, c), !(b = g.findNext()) || e && g.from().line == e.line && g.from().ch == e.ch) || (a.setSelection(g.from(), g.to()), 
                        f(a, o, "Replace?", [ function() {
                            i(b);
                        }, h ]));
                    }, i = function(a) {
                        g.replace("string" == typeof c ? e : e.replace(/\$(\d)/, function(b, c) {
                            return a[c];
                        })), h();
                    };
                    h();
                }
            }));
        });
    }
    var l = 'Search: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>', m = 'Replace: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>', n = 'With: <input type="text" style="width: 10em"/>', o = "Replace? <button>Yes</button> <button>No</button> <button>Stop</button>";
    CodeMirror.commands.find = function(a) {
        j(a), h(a);
    }, CodeMirror.commands.findNext = h, CodeMirror.commands.findPrev = function(a) {
        h(a, !0);
    }, CodeMirror.commands.clearSearch = j, CodeMirror.commands.replace = k, CodeMirror.commands.replaceAll = function(a) {
        k(a, !0);
    };
}(), function() {
    function a(a) {
        "object" == typeof a && (this.minChars = a.minChars, this.style = a.style, this.showToken = a.showToken), 
        null == this.style && (this.style = g), null == this.minChars && (this.minChars = f), 
        this.overlay = this.timeout = null;
    }
    function b(a) {
        var b = a.state.matchHighlighter;
        clearTimeout(b.timeout), b.timeout = setTimeout(function() {
            c(a);
        }, 100);
    }
    function c(a) {
        a.operation(function() {
            var b = a.state.matchHighlighter;
            if (b.overlay && (a.removeOverlay(b.overlay), b.overlay = null), !a.somethingSelected() && b.showToken) {
                var c = a.getTokenAt(a.getCursor()).string;
                return void (/\w/.test(c) && a.addOverlay(b.overlay = e(c, !0, b.style)));
            }
            if (a.getCursor("head").line == a.getCursor("anchor").line) {
                var d = a.getSelection().replace(/^\s+|\s+$/g, "");
                d.length >= b.minChars && a.addOverlay(b.overlay = e(d, !1, b.style));
            }
        });
    }
    function d(a) {
        return (a.start || /.\b./.test(a.string.slice(a.start - 1, a.start + 1))) && (a.pos == a.string.length || /.\b./.test(a.string.slice(a.pos - 1, a.pos + 1)));
    }
    function e(a, b, c) {
        return {
            token: function(e) {
                return !e.match(a) || b && !d(e) ? (e.next(), void (e.skipTo(a.charAt(0)) || e.skipToEnd())) : c;
            }
        };
    }
    var f = 2, g = "matchhighlight";
    CodeMirror.defineOption("highlightSelectionMatches", !1, function(d, e, f) {
        if (f && f != CodeMirror.Init) {
            var g = d.state.matchHighlighter.overlay;
            g && d.removeOverlay(g), clearTimeout(d.state.matchHighlighter.timeout), d.state.matchHighlighter = null, 
            d.off("cursorActivity", b);
        }
        e && (d.state.matchHighlighter = new a(e), c(d), d.on("cursorActivity", b));
    });
}(), function() {
    function a(a, b, c) {
        function d(b, c, d) {
            if (b.text) {
                var g = m ? 0 : b.text.length - 1, i = m ? b.text.length : -1;
                if (b.text.length > h) return null;
                for (null != d && (g = d + n); g != i; g += n) {
                    var j = b.text.charAt(g);
                    if (r.test(j) && a.getTokenTypeAt(e(c, g + 1)) == p) {
                        var k = f[j];
                        if (">" == k.charAt(1) == m) q.push(j); else {
                            if (q.pop() != k.charAt(0)) return {
                                pos: g,
                                match: !1
                            };
                            if (!q.length) return {
                                pos: g,
                                match: !0
                            };
                        }
                    }
                }
            }
        }
        var g = a.state.matchBrackets, h = g && g.maxScanLineLength || 1e4, i = b || a.getCursor(), j = a.getLineHandle(i.line), k = i.ch - 1, l = k >= 0 && f[j.text.charAt(k)] || f[j.text.charAt(++k)];
        if (!l) return null;
        var m = ">" == l.charAt(1), n = m ? 1 : -1;
        if (c && m != (k == i.ch)) return null;
        for (var o, p = a.getTokenTypeAt(e(i.line, k + 1)), q = [ j.text.charAt(k) ], r = /[(){}[\]]/, s = i.line, t = m ? Math.min(s + 100, a.lineCount()) : Math.max(-1, s - 100); s != t && !(o = s == i.line ? d(j, s, k) : d(a.getLineHandle(s), s)); s += n) ;
        return {
            from: e(i.line, k),
            to: o && e(s, o.pos),
            match: o && o.match,
            forward: m
        };
    }
    function b(b, c) {
        var f = b.state.matchBrackets.maxHighlightLineLength || 1e3, g = a(b);
        if (!(!g || b.getLine(g.from.line).length > f || g.to && b.getLine(g.to.line).length > f)) {
            var h = g.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket", i = b.markText(g.from, e(g.from.line, g.from.ch + 1), {
                className: h
            }), j = g.to && b.markText(g.to, e(g.to.line, g.to.ch + 1), {
                className: h
            });
            d && b.state.focused && b.display.input.focus();
            var k = function() {
                b.operation(function() {
                    i.clear(), j && j.clear();
                });
            };
            return c ? void setTimeout(k, 800) : k;
        }
    }
    function c(a) {
        a.operation(function() {
            g && (g(), g = null), a.somethingSelected() || (g = b(a, !1));
        });
    }
    var d = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8), e = CodeMirror.Pos, f = {
        "(": ")>",
        ")": "(<",
        "[": "]>",
        "]": "[<",
        "{": "}>",
        "}": "{<"
    }, g = null;
    CodeMirror.defineOption("matchBrackets", !1, function(a, b, d) {
        d && d != CodeMirror.Init && a.off("cursorActivity", c), b && (a.state.matchBrackets = "object" == typeof b ? b : {}, 
        a.on("cursorActivity", c));
    }), CodeMirror.defineExtension("matchBrackets", function() {
        b(this, !0);
    }), CodeMirror.defineExtension("findMatchingBracket", function(b, c) {
        return a(this, b, c);
    });
}(), function() {
    function a(a, b) {
        var c = a.getRange(CodeMirror.Pos(b.line, b.ch - 1), CodeMirror.Pos(b.line, b.ch + 1));
        return 2 == c.length ? c : null;
    }
    function b(b) {
        for (var c = {
            name: "autoCloseBrackets",
            Backspace: function(c) {
                if (c.somethingSelected()) return CodeMirror.Pass;
                var d = c.getCursor(), e = a(c, d);
                return e && b.indexOf(e) % 2 == 0 ? void c.replaceRange("", CodeMirror.Pos(d.line, d.ch - 1), CodeMirror.Pos(d.line, d.ch + 1)) : CodeMirror.Pass;
            }
        }, d = "", e = 0; e < b.length; e += 2) (function(a, b) {
            function e(c) {
                var d = c.getSelection();
                c.replaceSelection(a + d + b);
            }
            function g(a) {
                var c = a.getCursor(), d = a.getRange(c, CodeMirror.Pos(c.line, c.ch + 1));
                return d != b || a.somethingSelected() ? CodeMirror.Pass : void a.execCommand("goCharRight");
            }
            a != b && (d += b), c["'" + a + "'"] = function(c) {
                if ("'" == a && "comment" == c.getTokenAt(c.getCursor()).type) return CodeMirror.Pass;
                if (c.somethingSelected()) return e(c);
                if (a != b || g(c) == CodeMirror.Pass) {
                    var h = c.getCursor(), i = CodeMirror.Pos(h.line, h.ch + 1), j = c.getLine(h.line), k = j.charAt(h.ch);
                    return j.length == h.ch || d.indexOf(k) >= 0 || f.test(k) ? void c.replaceSelection(a + b, {
                        head: i,
                        anchor: i
                    }) : CodeMirror.Pass;
                }
            }, a != b && (c["'" + b + "'"] = g);
        })(b.charAt(e), b.charAt(e + 1));
        return c;
    }
    function c(b) {
        return function(c) {
            var d = c.getCursor(), e = a(c, d);
            return e && b.indexOf(e) % 2 == 0 ? void c.operation(function() {
                var a = CodeMirror.Pos(d.line + 1, 0);
                c.replaceSelection("\n\n", {
                    anchor: a,
                    head: a
                }, "+input"), c.indentLine(d.line + 1, null, !0), c.indentLine(d.line + 2, null, !0);
            }) : CodeMirror.Pass;
        };
    }
    var d = "()[]{}''\"\"", e = "[]{}", f = /\s/;
    CodeMirror.defineOption("autoCloseBrackets", !1, function(a, f, g) {
        if (g != CodeMirror.Init && g && a.removeKeyMap("autoCloseBrackets"), f) {
            var h = d, i = e;
            "string" == typeof f ? h = f : "object" == typeof f && (null != f.pairs && (h = f.pairs), 
            null != f.explode && (i = f.explode));
            var j = b(h);
            i && (j.Enter = c(i)), a.addKeyMap(j);
        }
    });
}(), CodeMirror.defineOption("showTrailingSpace", !1, function(a, b, c) {
    c == CodeMirror.Init && (c = !1), c && !b ? a.removeOverlay("trailingspace") : !c && b && a.addOverlay({
        token: function(a) {
            for (var b = a.string.length, c = b; c && /\s/.test(a.string.charAt(c - 1)); --c) ;
            return c > a.pos ? (a.pos = c, null) : (a.pos = b, "trailingspace");
        },
        name: "trailingspace"
    });
}), function() {
    "use strict";
    function a(a) {
        var b = a.search(c);
        return -1 == b ? 0 : b;
    }
    var b = {}, c = /[^\s\u00a0]/, d = CodeMirror.Pos;
    CodeMirror.commands.toggleComment = function(a) {
        var b = a.getCursor("start"), c = a.getCursor("end");
        a.uncomment(b, c) || a.lineComment(b, c);
    }, CodeMirror.defineExtension("lineComment", function(e, f, g) {
        g || (g = b);
        var h = this, i = CodeMirror.innerMode(h.getMode(), h.getTokenAt(e).state).mode, j = g.lineComment || i.lineComment;
        if (!j) return void ((g.blockCommentStart || i.blockCommentStart) && (g.fullLines = !0, 
        h.blockComment(e, f, g)));
        var k = h.getLine(e.line);
        if (null != k) {
            var l = Math.min(0 != f.ch || f.line == e.line ? f.line + 1 : f.line, h.lastLine() + 1), m = null == g.padding ? " " : g.padding, n = g.commentBlankLines || e.line == f.line;
            h.operation(function() {
                if (g.indent) for (var b = k.slice(0, a(k)), f = e.line; l > f; ++f) {
                    var i = h.getLine(f), o = b.length;
                    (n || c.test(i)) && (i.slice(0, o) != b && (o = a(i)), h.replaceRange(b + j + m, d(f, 0), d(f, o)));
                } else for (var f = e.line; l > f; ++f) (n || c.test(h.getLine(f))) && h.replaceRange(j + m, d(f, 0));
            });
        }
    }), CodeMirror.defineExtension("blockComment", function(a, e, f) {
        f || (f = b);
        var g = this, h = CodeMirror.innerMode(g.getMode(), g.getTokenAt(a).state).mode, i = f.blockCommentStart || h.blockCommentStart, j = f.blockCommentEnd || h.blockCommentEnd;
        if (!i || !j) return void ((f.lineComment || h.lineComment) && 0 != f.fullLines && g.lineComment(a, e, f));
        var k = Math.min(e.line, g.lastLine());
        k != a.line && 0 == e.ch && c.test(g.getLine(k)) && --k;
        var l = null == f.padding ? " " : f.padding;
        a.line > k || g.operation(function() {
            if (0 != f.fullLines) {
                var b = c.test(g.getLine(k));
                g.replaceRange(l + j, d(k)), g.replaceRange(i + l, d(a.line, 0));
                var m = f.blockCommentLead || h.blockCommentLead;
                if (null != m) for (var n = a.line + 1; k >= n; ++n) (n != k || b) && g.replaceRange(m + l, d(n, 0));
            } else g.replaceRange(j, e), g.replaceRange(i, a);
        });
    }), CodeMirror.defineExtension("uncomment", function(a, e, f) {
        f || (f = b);
        var g, h = this, i = CodeMirror.innerMode(h.getMode(), h.getTokenAt(a).state).mode, j = Math.min(e.line, h.lastLine()), k = Math.min(a.line, j), l = f.lineComment || i.lineComment, m = [], n = null == f.padding ? " " : f.padding;
        a: if (l) {
            for (var o = k; j >= o; ++o) {
                var p = h.getLine(o), q = p.indexOf(l);
                if (-1 == q && (o != j || o == k) && c.test(p)) break a;
                if (o != k && q > -1 && c.test(p.slice(0, q))) break a;
                m.push(p);
            }
            if (h.operation(function() {
                for (var a = k; j >= a; ++a) {
                    var b = m[a - k], c = b.indexOf(l), e = c + l.length;
                    0 > c || (b.slice(e, e + n.length) == n && (e += n.length), g = !0, h.replaceRange("", d(a, c), d(a, e)));
                }
            }), g) return !0;
        }
        var r = f.blockCommentStart || i.blockCommentStart, s = f.blockCommentEnd || i.blockCommentEnd;
        if (!r || !s) return !1;
        var t = f.blockCommentLead || i.blockCommentLead, u = h.getLine(k), v = j == k ? u : h.getLine(j), w = u.indexOf(r), x = v.lastIndexOf(s);
        return -1 == x && k != j && (v = h.getLine(--j), x = v.lastIndexOf(s)), -1 == w || -1 == x ? !1 : (h.operation(function() {
            h.replaceRange("", d(j, x - (n && v.slice(x - n.length, x) == n ? n.length : 0)), d(j, x + s.length));
            var a = w + r.length;
            if (n && u.slice(a, a + n.length) == n && (a += n.length), h.replaceRange("", d(k, w), d(k, a)), 
            t) for (var b = k + 1; j >= b; ++b) {
                var e = h.getLine(b), f = e.indexOf(t);
                if (-1 != f && !c.test(e.slice(0, f))) {
                    var g = f + t.length;
                    n && e.slice(g, g + n.length) == n && (g += n.length), h.replaceRange("", d(b, f), d(b, g));
                }
            }
        }), !0);
    });
}(), function() {
    "use strict";
    function a(a) {
        "activeLine" in a.state && (a.removeLineClass(a.state.activeLine, "wrap", c), a.removeLineClass(a.state.activeLine, "background", d));
    }
    function b(b) {
        var e = b.getLineHandle(b.getCursor().line);
        b.state.activeLine != e && (a(b), b.addLineClass(e, "wrap", c), b.addLineClass(e, "background", d), 
        b.state.activeLine = e);
    }
    var c = "CodeMirror-activeline", d = "CodeMirror-activeline-background";
    CodeMirror.defineOption("styleActiveLine", !1, function(c, d, e) {
        var f = e && e != CodeMirror.Init;
        d && !f ? (b(c), c.on("cursorActivity", b)) : !d && f && (c.off("cursorActivity", b), 
        a(c), delete c.state.activeLine);
    });
}(), function() {
    "use strict";
    function a(a) {
        a.operation(function() {
            g(a);
        });
    }
    function b(a) {
        a.state.markedSelection.length && a.operation(function() {
            e(a);
        });
    }
    function c(a, b) {
        return a.line - b.line || a.ch - b.ch;
    }
    function d(a, b, d, e) {
        if (0 != c(b, d)) for (var f = a.state.markedSelection, g = a.state.markedSelectionStyle, j = b.line; ;) {
            var k = j == b.line ? b : i(j, 0), l = j + h, m = l >= d.line, n = m ? d : i(l, 0), o = a.markText(k, n, {
                className: g
            });
            if (null == e ? f.push(o) : f.splice(e++, 0, o), m) break;
            j = l;
        }
    }
    function e(a) {
        for (var b = a.state.markedSelection, c = 0; c < b.length; ++c) b[c].clear();
        b.length = 0;
    }
    function f(a) {
        e(a);
        var b = a.getCursor("start"), c = a.getCursor("end");
        d(a, b, c);
    }
    function g(a) {
        var b = a.getCursor("start"), g = a.getCursor("end");
        if (0 == c(b, g)) return e(a);
        var i = a.state.markedSelection;
        if (!i.length) return d(a, b, g);
        var j = i[0].find(), k = i[i.length - 1].find();
        if (!j || !k || g.line - b.line < h || c(b, k.to) >= 0 || c(g, j.from) <= 0) return f(a);
        for (;c(b, j.from) > 0; ) i.shift().clear(), j = i[0].find();
        for (c(b, j.from) < 0 && (j.to.line - b.line < h ? (i.shift().clear(), d(a, b, j.to, 0)) : d(a, b, j.from, 0)); c(g, k.to) < 0; ) i.pop().clear(), 
        k = i[i.length - 1].find();
        c(g, k.to) > 0 && (g.line - k.from.line < h ? (i.pop().clear(), d(a, k.from, g)) : d(a, k.to, g));
    }
    CodeMirror.defineOption("styleSelectedText", !1, function(c, d, g) {
        var h = g && g != CodeMirror.Init;
        d && !h ? (c.state.markedSelection = [], c.state.markedSelectionStyle = "string" == typeof d ? d : "CodeMirror-selectedtext", 
        f(c), c.on("cursorActivity", a), c.on("change", b)) : !d && h && (c.off("cursorActivity", a), 
        c.off("change", b), e(c), c.state.markedSelection = c.state.markedSelectionStyle = null);
    });
    var h = 8, i = CodeMirror.Pos;
}(), function() {
    "use strict";
    function a(a, b, c) {
        this.cm = a, this.getHints = b, this.options = c, this.widget = this.onClose = null;
    }
    function b(a) {
        return "string" == typeof a ? a : a.text;
    }
    function c(a, b) {
        function c(a, c) {
            var f;
            f = "string" != typeof c ? function(a) {
                return c(a, b);
            } : d.hasOwnProperty(c) ? d[c] : c, e[a] = f;
        }
        var d = {
            Up: function() {
                b.moveFocus(-1);
            },
            Down: function() {
                b.moveFocus(1);
            },
            PageUp: function() {
                b.moveFocus(-b.menuSize());
            },
            PageDown: function() {
                b.moveFocus(b.menuSize());
            },
            Home: function() {
                b.setFocus(0);
            },
            End: function() {
                b.setFocus(b.length);
            },
            Enter: b.pick,
            Tab: b.pick,
            Esc: b.close
        }, e = a.customKeys ? {} : d;
        if (a.customKeys) for (var f in a.customKeys) a.customKeys.hasOwnProperty(f) && c(f, a.customKeys[f]);
        if (a.extraKeys) for (var f in a.extraKeys) a.extraKeys.hasOwnProperty(f) && c(f, a.extraKeys[f]);
        return e;
    }
    function d(a, d) {
        this.completion = a, this.data = d;
        var e = this, f = a.cm, g = a.options, h = this.hints = document.createElement("ul");
        h.className = "CodeMirror-hints", this.selectedHint = 0;
        for (var i = d.list, j = 0; j < i.length; ++j) {
            var k = h.appendChild(document.createElement("li")), l = i[j], m = "CodeMirror-hint" + (j ? "" : " CodeMirror-hint-active");
            null != l.className && (m = l.className + " " + m), k.className = m, l.render ? l.render(k, d, l) : k.appendChild(document.createTextNode(l.displayText || b(l))), 
            k.hintId = j;
        }
        var n = f.cursorCoords(g.alignWithWord !== !1 ? d.from : null), o = n.left, p = n.bottom, q = !0;
        h.style.left = o + "px", h.style.top = p + "px";
        var r = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth), s = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), t = h.getBoundingClientRect(), u = t.right - r, v = t.bottom - s;
        if (u > 0 && (t.right - t.left > r && (h.style.width = r - 5 + "px", u -= t.right - t.left - r), 
        h.style.left = (o = n.left - u) + "px"), v > 0) {
            var w = t.bottom - t.top;
            t.top - (n.bottom - n.top) - w > 0 ? (v = w + (n.bottom - n.top), q = !1) : w > s && (h.style.height = s - 5 + "px", 
            v -= w - s), h.style.top = (p = n.bottom - v) + "px";
        }
        if ((g.container || document.body).appendChild(h), f.addKeyMap(this.keyMap = c(g, {
            moveFocus: function(a) {
                e.changeActive(e.selectedHint + a);
            },
            setFocus: function(a) {
                e.changeActive(a);
            },
            menuSize: function() {
                return e.screenAmount();
            },
            length: i.length,
            close: function() {
                a.close();
            },
            pick: function() {
                e.pick();
            }
        })), g.closeOnUnfocus !== !1) {
            var x;
            f.on("blur", this.onBlur = function() {
                x = setTimeout(function() {
                    a.close();
                }, 100);
            }), f.on("focus", this.onFocus = function() {
                clearTimeout(x);
            });
        }
        var y = f.getScrollInfo();
        return f.on("scroll", this.onScroll = function() {
            var b = f.getScrollInfo(), c = f.getWrapperElement().getBoundingClientRect(), d = p + y.top - b.top, e = d - (window.pageYOffset || (document.documentElement || document.body).scrollTop);
            return q || (e += h.offsetHeight), e <= c.top || e >= c.bottom ? a.close() : (h.style.top = d + "px", 
            void (h.style.left = o + y.left - b.left + "px"));
        }), CodeMirror.on(h, "dblclick", function(a) {
            var b = a.target || a.srcElement;
            null != b.hintId && (e.changeActive(b.hintId), e.pick());
        }), CodeMirror.on(h, "click", function(a) {
            var b = a.target || a.srcElement;
            null != b.hintId && e.changeActive(b.hintId);
        }), CodeMirror.on(h, "mousedown", function() {
            setTimeout(function() {
                f.focus();
            }, 20);
        }), CodeMirror.signal(d, "select", i[0], h.firstChild), !0;
    }
    CodeMirror.showHint = function(b, c, d) {
        if (!b.somethingSelected() && (null == c && (c = b.getHelper(b.getCursor(), "hint")), 
        null != c)) {
            b.state.completionActive && b.state.completionActive.close();
            var e = b.state.completionActive = new a(b, c, d || {});
            return CodeMirror.signal(b, "startCompletion", b), e.options.async ? void c(b, function(a) {
                e.showHints(a);
            }, e.options) : e.showHints(c(b, e.options));
        }
    }, a.prototype = {
        close: function() {
            this.active() && (this.cm.state.completionActive = null, this.widget && this.widget.close(), 
            this.onClose && this.onClose(), CodeMirror.signal(this.cm, "endCompletion", this.cm));
        },
        active: function() {
            return this.cm.state.completionActive == this;
        },
        pick: function(a, c) {
            var d = a.list[c];
            d.hint ? d.hint(this.cm, a, d) : this.cm.replaceRange(b(d), a.from, a.to), this.close();
        },
        showHints: function(a) {
            return a && a.list.length && this.active() ? void (0 != this.options.completeSingle && 1 == a.list.length ? this.pick(a, 0) : this.showWidget(a)) : this.close();
        },
        showWidget: function(a) {
            function b() {
                h || (h = !0, j.close(), j.cm.off("cursorActivity", g), CodeMirror.signal(a, "close"));
            }
            function c() {
                return h ? !0 : j.widget ? void 0 : (b(), !0);
            }
            function e() {
                c() || (CodeMirror.signal(a, "update"), j.options.async ? j.getHints(j.cm, f, j.options) : f(j.getHints(j.cm, j.options)));
            }
            function f(e) {
                if (a = e, !c()) {
                    if (!a || !a.list.length) return b();
                    j.widget.close(), j.widget = new d(j, a);
                }
            }
            function g() {
                clearTimeout(i);
                var a = j.cm.getCursor(), b = j.cm.getLine(a.line);
                a.line != l.line || b.length - a.ch != m - l.ch || a.ch < l.ch || j.cm.somethingSelected() || a.ch && k.test(b.charAt(a.ch - 1)) ? j.close() : i = setTimeout(e, 170);
            }
            this.widget = new d(this, a), CodeMirror.signal(a, "shown");
            var h, i = null, j = this, k = this.options.closeCharacters || /[\s()\[\]{};:>,]/, l = this.cm.getCursor(), m = this.cm.getLine(l.line).length;
            this.cm.on("cursorActivity", g), this.onClose = b;
        }
    }, d.prototype = {
        close: function() {
            if (this.completion.widget == this) {
                this.completion.widget = null, this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
                var a = this.completion.cm;
                this.completion.options.closeOnUnfocus !== !1 && (a.off("blur", this.onBlur), a.off("focus", this.onFocus)), 
                a.off("scroll", this.onScroll);
            }
        },
        pick: function() {
            this.completion.pick(this.data, this.selectedHint);
        },
        changeActive: function(a) {
            if (a = Math.max(0, Math.min(a, this.data.list.length - 1)), this.selectedHint != a) {
                var b = this.hints.childNodes[this.selectedHint];
                b.className = b.className.replace(" CodeMirror-hint-active", ""), b = this.hints.childNodes[this.selectedHint = a], 
                b.className += " CodeMirror-hint-active", b.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = b.offsetTop - 3 : b.offsetTop + b.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = b.offsetTop + b.offsetHeight - this.hints.clientHeight + 3), 
                CodeMirror.signal(this.data, "select", this.data.list[this.selectedHint], b);
            }
        },
        screenAmount: function() {
            return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
        }
    };
}();

var Toolbar = function(a) {
    var b = $(a), c = $('<div class="btn-toolbar">');
    this.addButtonGroup = function(a) {
        var b = $('<div class="btn-group">');
        return _.each(a, function(a) {
            a.render(b);
        }), c.append(b), b;
    };
    var d = function() {
        b.append(c);
    };
    d();
}, ToolbarButton = function(a, b, c, d) {
    var e = this, f = c, g = a, h = b, i = null;
    e.render = function(a) {
        i && (i.remove(), i.data("button", null), i = null), i = $('<button class="btn">'), 
        d && i.addClass(d), e.setLabel(g), f && i.tooltip({
            title: f,
            placement: "top",
            delay: 100,
            container: "body"
        }), h && i.click(h), i.data("button", e), a.append(i);
    }, e.disable = function() {
        i.attr("disabled", "disabled"), i.tooltip("hide");
    }, e.enable = function() {
        i.removeAttr("disabled");
    }, e.setLabel = function(a) {
        g = a, /^icon-/.test(a) && (a = $("<i>").addClass(a)), i.empty().append(a);
    }, e.setID = function(a) {
        i.attr("id", a);
    };
}, Editor = function(a, b) {
    var c, d, e, f = 30, g = this, h = $(a), i = null, j = b, k = null, l = 0, m = new Editor.Autocomplete(this, b), n = null, o = null, p = !1, q = null, r = {}, s = [];
    _.extend(this, Backbone.Events), this.addButtonGroup = function(a) {
        return d.addButtonGroup(a);
    }, this.focusTab = function(a) {
        t(r[a]);
    }, this.unfocusTab = function(a) {
        u(r[a]);
    }, this.closeTab = function(a) {
        v(r[a]);
    }, this.closeAllTabs = function(a) {
        _.each(r, function(b) {
            v(b, a);
        });
    }, this.metadata_count = function(a, b) {
        var c = F(b);
        c && (c.metadata[a] = (c.metadata[a] || 0) + 1);
    }, this.content = function(a, b) {
        var c = F(b);
        return c ? (a && this.metadata_count(a), I(c), c.cm.getValue()) : null;
    }, this.metadata = function(a) {
        var b = F(a);
        return b ? b.metadata : null;
    }, this.markErrorLine = function(a, b, c, d) {
        var e = F(a);
        if (!e) return !1;
        var f = e.cm;
        f.addLineClass(c, "background", "cm-error-line"), f.addLineWidget(c, w(b), {
            noHScroll: !0,
            handleMouseEvents: !0
        }), t(e), f.scrollIntoView({
            line: c,
            ch: d
        }, 40), f.setCursor({
            line: c,
            ch: d
        });
        var g = f.lineInfo(c).handle;
        s.push({
            filename: a,
            handle: g
        });
    }, this.clearErrors = function() {
        _.each(s, function(a) {
            if (r[a.filename]) {
                var b = r[a.filename].cm, c = b.lineInfo(a.handle);
                if (!c) return;
                b.removeLineClass(c.handle, "background", "cm-error-line"), _.each(c.widgets, function(a) {
                    a.clear();
                });
            }
        }), s = [];
    }, this.addLineClass = function(a, b, c) {
        var d = F(a);
        if (!d) return !1;
        var e = d.cm.addLineClass(b, "background", c);
        return {
            clear: function() {
                d.cm.removeLineClass(e, "background", c);
            }
        };
    }, this.showLine = function(a, b, c) {
        var d = F(a);
        return d ? (d.cm.scrollIntoView({
            line: b,
            chr: 0 | c
        }), !0) : !1;
    }, this.redraw = function() {
        i && i.cm.refresh();
    }, this.getFile = function(a, b, c) {
        _.has(r, a) ? b({
            name: a,
            data: r[a].cm.getValue(),
            metadata: r[a].metadata,
            autosave: void 0,
            shared: !1
        }) : FileSystem.getFile(a, b, c);
    }, this.openFile = function(a, b, c) {
        return _.has(r, a) ? void t(r[a]) : void FileSystem.getFile(a, function(a) {
            g.openTab(a.name, a.data, b, a.autosave, a.shared, a.metadata), c && c(a.name, a.data);
        }, function() {
            PassiveAlert("Failed to open " + a);
        });
    }, this.openTab = function(a, b, c, d, j, m) {
        if (_.has(r, a)) return void t(r[a]);
        var n = !0;
        a || (n = !1, a = "*untitled " + ++l);
        var o = _.uniqueId("edit_tab"), p = $("<div>", {
            "class": "tab-pane",
            id: o
        }).hide(), q = x(p, b, !!j), s = $("<li>"), w = {
            el: p,
            tab: s,
            cm: q,
            hasLocation: n,
            name: a,
            generation: q.changeGeneration(),
            autosaveGeneration: q.changeGeneration(),
            isAutosaving: !1,
            n: 0,
            autosaved: d || null,
            metadata: m || {},
            readonly: j
        }, A = a, B = $("<a>", {
            href: "#" + o
        }).text(A).click(function(a) {
            a.preventDefault(), t(w);
        });
        s.append(B), j && B.append('<span style="color:red"> (read only)</span>');
        var C = $('<button class="close">&times;</button>').click(function(a) {
            a.preventDefault(), a.stopPropagation(), v(w);
        }).css({
            "margin-top": -2,
            "margin-left": 5,
            "margin-right": -7
        }).on("mouseenter", z).on("mouseleave", function() {
            y(w);
        });
        q.on("change", function(b, c) {
            w.metadata.changes = (w.metadata.changes || 0) + 1, y(w), g.trigger("change", a, c);
        }), q.on("cursorActivity", function() {
            w.n++, w.n >= f && (w.n = 0, I(w));
        }), B.append(C), e.append(s), N(), h.append(p), (!_.size(r) || c) && (u(i), t(w)), 
        r[a] = w, K(), k && g.setHeight(k), $(window).resize();
    }, this.currentFilename = function() {
        return i ? i.name : null;
    }, this.currentTab = this.currentFilename, this.filenames = function() {
        return _.pluck(r, "name");
    }, this.setHeight = function(a) {
        if (i) {
            k = a, h.height(a);
            var b = i.el.position().top;
            _.each(r, function(c) {
                c.cm.getWrapperElement().style.height = a - b + "px", c.cm.refresh();
            });
        }
    }, this.blur = function() {
        i && i.cm.getInputField().blur();
    };
    var t = function(a) {
        a.tab.find("a").tab("show"), i && i.el.hide(), a.el.show().addClass("active"), a.cm.refresh(), 
        a.cm.focus(), i = a, a.autosaved && a.autosaved.contents ? o.show() : o.hide(), 
        a.readonly ? n.hide() : n.show();
    }, u = function(a) {
        a && (a.el.removeClass("active").hide(), a.tab.removeClass("active"));
    }, v = function(a, b) {
        if (a) {
            if (!a.cm.isClean(a.generation) && !b) {
                var c = new ModalDialog();
                return c.setTitle("Unsaved document"), c.setContent("<p><strong>Do you want to save the changes you made to " + a.name + "?</strong></p><p>Your changes will be lost if you don't save them.</p>"), 
                c.addButton("Don't save", function() {
                    v(a, !0), c.dismiss();
                }, "btn-danger"), c.addButton("Cancel", "dismiss"), c.addButton("Save", function() {
                    H(), v(a, !0), c.dismiss();
                }, "btn-primary"), void c.show();
            }
            var d = a.tab.prev();
            if (d.length || (d = a.tab.next()), d.length) {
                var e = _.find(_.values(r), function(a) {
                    return a.tab[0] == d[0];
                });
                e ? t(e) : o.hide();
            } else o.hide();
            delete r[a.name], a.el.remove(), a.tab.remove(), K();
        }
    }, w = function(a) {
        var b = $('<div class="cm-error-widget">'), c = $("<span>");
        return c.text(a).appendTo(b), b[0];
    }, x = function(a, b, c) {
        var d = new CodeMirror(a[0], {
            indentUint: 4,
            lineNumbers: !0,
            electricChars: !0,
            matchBrackets: !0,
            autoCloseBrackets: "tsim" != j,
            smartIndent: !0,
            indentWithTabs: !0,
            styleActiveLine: !0,
            value: b,
            tabindex: -1,
            mode: j,
            readOnly: c,
            extraKeys: {
                Tab: function() {
                    for (var a = d.getAllMarks(), b = d.getCursor(), c = null, e = null, f = 1 / 0, g = a.length - 1; g >= 0; g--) {
                        var h = a[g], i = h.find();
                        if (void 0 !== i && b.line >= i.from.line - 5 && (b.line < i.from.line || b.ch <= i.from.ch)) {
                            var j = 1e4 * (i.from.line - b.line) + (i.from.ch - b.ch);
                            f > j && (c = i, e = h, f = j);
                        }
                    }
                    return null === c ? CodeMirror.Pass : (e.clear(), void m.selectPlaceholder(d, c));
                }
            }
        });
        return d.on("change", _.debounce(CodeMirror.commands.autocomplete, 800, !1)), d;
    }, y = function(a) {
        var b = a.tab.find(".close");
        b.text(a.cm.isClean(a.generation) ? "×" : "●");
    }, z = function() {
        $(this).text("×");
    }, A = function() {
        i && H();
    }, B = function() {
        _.each(r, function(a) {
            a.cm.isClean(a.generation) || H(a);
        });
    };
    this.get_all_documents = function() {
        var a = {};
        for (var b in r) if (_.has(r, b)) {
            var c = r[b];
            a[b] = c.cm.getValue();
        }
        return a;
    };
    var C = function() {
        if (i) {
            var a = i;
            FileSystem.getBackup(a.name, function(b) {
                a.cm.setValue(b.data), a.metadata = b.metadata;
            }, function() {
                PassiveAlert("Revert failed; unable to load old version.", "error");
            });
        }
    }, D = function() {
        i && (i.cm.setValue(i.autosaved.contents), i.metadata = i.autosaved.metadata, E(i));
    }, E = function(a) {
        a.autosaved = null, i == a && o.hide();
    }, F = function(a) {
        var b;
        return b = a ? r[a] : i, b ? b : !1;
    }, G = function() {
        c = $("<div>"), d = new Toolbar(c), n = g.addButtonGroup([ new ToolbarButton("Save", A, "Save current file"), new ToolbarButton("Save All", B, "Save all open buffers"), new ToolbarButton("Revert", C, "Revert the current buffer to an earlier state.") ]), 
        o = g.addButtonGroup([ new ToolbarButton("Restore Autosave", D, "There is an autosaved document more recent than your last save.", "btn-warning") ]).hide(), 
        h.append(c), h.css("position", "relative"), e = $('<ul class="nav nav-tabs">'), 
        h.append(e), $(window).on("beforeunload", J), Editor.IsSetUp || (CodeMirror.commands.save = function() {
            H();
        }, CodeMirror.commands.autocomplete = function(a) {
            CodeMirror.showHint(a, m.complete, {
                completeSingle: !1
            });
        }, CodeMirror.keyMap.macDefault["Cmd-/"] = "toggleComment", CodeMirror.keyMap.pcDefault["Ctrl-/"] = "toggleComment", 
        CodeMirror.keyMap.macDefault["Ctrl-Space"] = "autocomplete", CodeMirror.keyMap.pcDefault["Ctrl-Space"] = "autocomplete", 
        Editor.IsSetUp = !0), L() || M();
    }, H = function(a) {
        return a || (a = i), a ? void FileSystem.saveFile(a.name, a.cm.getValue(), function() {
            a.generation = a.cm.changeGeneration(), a.autosaveGeneration = a.generation, E(a), 
            y(a);
        }, void 0, a.metadata) : !1;
    }, I = function(a) {
        if (!a.cm.isClean(a.autosaveGeneration) && !a.isAutosaving) {
            a.isAutosaving = !0, E(a);
            var b = a.cm.changeGeneration();
            FileSystem.makeAutoSave(a.name, a.cm.getValue(), function() {
                a.isAutosaving = !1, a.autosaveGeneration = b;
            }, function() {
                a.isAutosaving = !1, console.warn("Autosave failed.");
            }, a.metadata);
        }
    }, J = function() {
        for (var a in r) if (_.has(r, a)) {
            var b = r[a];
            if (!b.cm.isClean(b.generation)) return "You have unsaved files. If you leave the page you will lose your unsaved work.";
        }
    }, K = function() {
        localStorage["6004_" + j + "_tabs"] = JSON.stringify(g.filenames());
    }, L = function() {
        var a = localStorage["6004_" + j + "_tabs"];
        return a ? (a = JSON.parse(a), _.each(a, function(a) {
            g.openFile(a, !1);
        }), !!a.length) : !1;
    }, M = function() {
        if (_.isEmpty(r)) {
            var a = "To create a file or folder, hover over the desired parent folder on the left and click the new file or new folder icons. To open a file or folder, single click it in the list on the left. You can move files by dragging them from their existing location to the desired one.";
            q = $('<div class="editor-tips">').html(a), h.append(q), p = !0;
        }
    }, N = function() {
        p && (p = !1, q.remove());
    };
    G();
};

Editor.Completions = {}, Editor.IsSetUp = !1;

var ModalDialog = function() {
    var a = this, b = null, c = null, d = null, e = null, f = null, g = null;
    this.setTitle = function(a) {
        return c.text(a), this;
    }, this.setContent = function(a) {
        return d.html(a), this;
    }, this.setText = function(a) {
        var b = $("<p>").text(a);
        return d.empty().append(b), this;
    }, this.addButton = function(b, c, d) {
        var e = $('<a href="#" class="btn">').text(b);
        if ("dismiss" === c) e.attr("data-dismiss", "modal"); else {
            if (!_.isFunction(c)) throw new Error("Button added with illegal callback!");
            e.click(function() {
                c(a);
            });
        }
        return d && e.addClass(d), g.append(e), this;
    }, this.inputBox = function(c) {
        var d = $("<div>").appendTo(e);
        c.label && (e.addClass("form-horizontal"), d.addClass("control-group"));
        var f = $('<input type="text">').appendTo(d);
        if (c.label) {
            $("<label>").addClass("control-label").text(c.label).appendTo(d);
            {
                $("<div>").addClass("controls").appendTo(d).append(f);
            }
        }
        if (c.placeholder && f.attr("placeholder", c.placeholder), c.type && f.attr("type", c.type), 
        c.prefix && (d.addClass("input-prepend"), $('<span class="add-on">').text(c.prefix).prependTo(d)), 
        c.suffix && (d.addClass("input-append"), $('<span class="add-on">').text(c.suffix).appendTo(d)), 
        c.callback && f.keypress(function(b) {
            var d = b.which || b.keyCode;
            13 == d && (c.callback(a), b.preventDefault());
        }), c.typeahead) {
            var g = c.typeahead;
            _.isFunction(g) ? g = {
                source: g
            } : _.isArray(g) && (g = {
                source: g
            }), b.find(".modal-body").css("overflow-y", "visible"), f.typeahead(g);
        }
    }, this.inputContent = function(a) {
        return a || (a = 0), e.find("input").eq(a) ? e.find("input").eq(a).val() : null;
    }, this.clearInput = function() {
        e.clear();
    }, this.showError = function(a, b, c) {
        c || (c = "alert-error"), f.empty();
        var d = $('<div class="alert">').addClass(c);
        b ? d.html(a) : d.text(a), d.appendTo(f);
    }, this.show = function() {
        return ModalDialog.LastModal && ModalDialog.LastModal.remove(), ModalDialog.LastModal = b.appendTo("body").modal("show"), 
        this;
    }, this.dismiss = function() {
        return b.modal("hide"), this;
    }, this.setWidth = function(a) {
        b.css("width", a);
    }, this.noFocus = function() {
        b.off("shown");
    }, this.find = function(a) {
        return b.find(a);
    };
    var h = function() {
        b = $('            <div class="modal hide fade">                <div class="modal-header">                    <button class="close" data-dismiss="modal">&times;</button>                    <h3>Title</h3>                </div>                <div class="modal-body">                    <div class="modal-error">                    </div>                    <div class="body-holder"></div>                    <form class="modal-input">                    </form>                </div>                <div class="modal-footer">                </div>            </div>'), 
        c = b.find("h3"), d = b.find(".body-holder"), e = b.find(".modal-input"), g = b.find(".modal-footer"), 
        f = b.find(".modal-error"), b.on("shown", function() {
            e.find("input").first().focus();
        });
    };
    h();
};

ModalDialog.LastModal = null, function() {
    var a = this, b = function(a, b) {
        var c, d = this, e = ($(a), []), f = [], g = 0, h = 0;
        _.extend(this, Backbone.Events), this.addPane = function(a) {
            if (e.length) {
                var b = $("<div>").addClass("split-splitter").css({
                    height: g
                }).appendTo(c).append("<div>");
                f.push(b), i(f.length - 1);
            }
            var d = $("<div>").addClass("split-holder").css({
                height: g,
                width: 0
            }).append($(a)).appendTo(c);
            e.push(d);
        }, this.setPaneWidth = function(a, b) {
            var c = e[a].width();
            b = Math.floor(b), e[a].css({
                width: b
            }), a + 1 < e.length && e[a + 1].css({
                width: e[a + 1].width() + (c - b)
            }), d.trigger("resize", d.currentState());
        };
        var i = function(a) {
            var b = f[a];
            b.mousedown(function(b) {
                var c = b.clientX, f = e[a].width(), g = e[a + 1].width();
                $("body").mousemove(function(b) {
                    $("body").css({
                        cursor: "col-resize"
                    });
                    var h = b.clientX - c, i = Math.min(Math.max(0, f + h), g + f), j = Math.min(Math.max(0, g - h), g + f);
                    30 > i ? (j += i, i = 0) : 30 > j && (i += j, j = 0), e[a].css({
                        width: i
                    }), e[a + 1].css({
                        width: j
                    }), b.preventDefault(), d.trigger("resize", _.map(e, function(a) {
                        return a.width();
                    }));
                }), $("body").mouseup(function() {
                    $("body").off("mouseup"), $("body").off("mousemove"), $("body").css({
                        cursor: "auto"
                    }), b.preventDefault();
                }), b.preventDefault();
            });
        };
        this.currentState = function() {
            return _.map(e, function(a) {
                return a.width();
            });
        };
        var j = function() {
            var a = 5, b = 11, c = $(".xblock-6004").innerWidth() - b * (e.length - 1) - a;
            return 2 * Math.floor(c / 2);
        };
        this.window_width = j;
        var k = function(a) {
            c = $("#split-container");
            var b = $(".xblock-6004").innerHeight() - c.offset().top - 10;
            g = b, c.css("height", b), _.each(a, function(a) {
                d.addPane(a);
            });
            var i = j(), k = e.length ? Math.floor(i / e.length) : 0;
            h = e.length * k, _.each(_.range(e.length), function(a) {
                d.setPaneWidth(a, k);
            }), $(window).resize(function() {
                for (var a = j(), b = e.length - 1; b >= 0; b--) if (e[b].width() > 0) {
                    var d = h - a, g = Math.max(0, e[b].width() - d);
                    if (h -= Math.min(e[b].width(), d), e[b].css({
                        width: g
                    }), j >= h) break;
                }
                var i = $(".xblock-6004").innerHeight() - c.offset().top;
                _.each(e, function(a) {
                    a.css({
                        height: i - 10
                    });
                }), _.each(f, function(a) {
                    a.css({
                        height: i
                    });
                }), c.css({
                    height: i
                });
            });
        };
        k(b);
    };
    a.SplitPane = b;
}();

var PassiveAlert = function(a, b) {
    var c = $("#header-alert-holder"), d = $("<div>").addClass("alert fade in").text(a);
    b && d.addClass("alert-" + b), d.append('<a class="close" data-dismiss="alert" href="#">&times;</a>'), 
    c.empty().append(d), d.alert(), setTimeout(function() {
        d.alert("close");
    }, 1e4);
};

Editor.Autocomplete = function(a, b) {
    var c = null, d = null, e = null, f = CodeMirror.Pos, g = function() {
        return Editor.Completions[b] ? (d = Editor.Completions[b].Settings, c = new RadixTree(), 
        void _.each(Editor.Completions[b].Terms, function(a) {
            var b;
            b = _.isString(a) ? a.toLowerCase() : a.term ? a.term[0].toLowerCase() : a[0].toLowerCase(), 
            c.insert(b, a);
        })) : void console.warn("No autocomplete available for " + b);
    }, h = function(a, b, c, d) {
        c.off("beforeSelectionChange", e);
        var f = c.getRange(d.anchor, d.head), g = c.getRange(a.from, a.to);
        g == b ? j(c, a.from, a.to) : ("'" == f[0] && "'" == f[f.length - 1] || '"' == f[0] && '"' == f[f.length - 1]) && (d.anchor.ch += 1, 
        d.head.ch -= 1);
    }, i = function(a, b, c) {
        var c = a.getRange(b.from, b.to);
        a.setSelection(b.from, b.to), e = _.partial(h, b, c), a.on("beforeSelectionChange", e);
    }, j = function(a, b, c) {
        var d = a.markText(b, c, {
            className: "cm-autofilled",
            inclusiveLeft: !1,
            inclusiveRight: !1,
            atomic: !0,
            startStyle: "cm-autofilled-start",
            endStyle: "cm-autofilled-end"
        });
        return CodeMirror.on(d, "beforeCursorEnter", function() {
            var b = d.find();
            d.clear(), setTimeout(function() {
                i(a, b);
            }, 50);
        }), d;
    }, k = function(a, b, c) {
        a.replaceRange(c.text, b.from, b.to);
        var d = b.from.ch + c.name.length + c.settings.paramListStart.length, e = d, f = null, g = null;
        _.each(c.params, function(e) {
            var h = [ {
                line: b.from.line,
                ch: d
            }, {
                line: b.from.line,
                ch: d + e.length
            } ], i = j(a, h[0], h[1]);
            null === f && (f = h), null === g && (g = i), d += e.length + c.settings.paramSpacer.length;
        }), null === f ? a.setSelection({
            ch: e,
            line: b.from.line
        }) : (g.clear(), i(a, {
            from: f[0],
            to: f[1]
        }));
    }, l = function(a, b, c) {
        var d = $("<span>");
        d.append(document.createTextNode(c.name)), d.append($('<span class="muted">').append(c.settings.paramListStart + c.params.join(c.settings.paramSpacer) + c.settings.paramListEnd)), 
        a.appendChild(d[0]);
    }, m = function(a) {
        for (var b = c.search(a.string.toLowerCase(), 15), e = [], f = b.length - 1; f >= 0; f--) {
            var g = b[f], h = g.settings ? g.settings : d;
            if (!h.filter || (g = h.filter(g, a), g !== !1)) if (g.term && (g = g.term), _.isString(b[f])) e.push({
                text: b[f]
            }); else for (var i = g[0], j = g.length - 1; j >= 1; j--) {
                var m = g[j];
                e.push({
                    text: i + h.paramListStart + m.join(h.paramSpacer) + h.paramListEnd,
                    params: m,
                    name: i,
                    hint: k,
                    render: l,
                    settings: h
                });
            }
        }
        return e;
    };
    this.complete = function(a) {
        var b = a.getTokenAt(a.getCursor()), c = [];
        return "" !== b.string && (c = m(b)), {
            list: c,
            from: f(a.getCursor().line, b.start),
            to: f(a.getCursor().line, b.end)
        };
    }, this.selectPlaceholder = function(a, b) {
        i(a, b);
    }, g();
}, $(function() {
    var a = function(a) {
        var b = a.match(/(Chrome|Version|Firefox)\/([0-9]+)/);
        if (!b) return !1;
        var c = b[1], d = parseInt(b[2], 10);
        return "Chrome" === c && d >= 28 || "Version" == c && d >= 6 || "Firefox" == c && d >= 23;
    }, b = function() {
        $('            <div class="modal hide fade">                <div class="modal-header">                    <button class="close" data-dismiss="modal">&times;</button>                    <h3>Unsupported Browser</h3>                </div>                <div class="modal-body">                    <p>You are attempting to use an unsupported web browser.  We recommend                    using Chrome, but the latest versions of Firefox or Safari should also                    work.<p>You can simply close this window if you want to try the tools                    on your current browser.                </div>            </div>').modal();
    }, c = function() {
        var c = a(navigator.userAgent);
        c || b();
    };
    c();
});

var xblock_unique_id, FileSystem = function() {
    function a(a) {
        E = a;
    }
    function b(a, b, c) {
        E && (b.user = E);
        try {
            if (void 0 !== xblock_unique_id) return b._path = a, void top.window.xblock_handler[xblock_unique_id]("user_file", b, c);
        } catch (d) {}
        var e = $(location).attr("host");
        "localhost" == e ? (b._path = a, a = y) : "6004.mit.edu" == e ? (b._path = a, a = A) : a = w, 
        $.ajax(a, {
            type: "POST",
            dataType: "json",
            data: b,
            xhrFields: {
                withCredentials: !0
            },
            success: function(a) {
                c && c(a);
            },
            error: function(a, b, d) {
                c && c({
                    _error: "Server " + b + " " + d
                });
            }
        });
    }
    function c(a, b, c, d) {
        if (void 0 !== xblock_unique_id) return void top.window.xblock_handler[xblock_unique_id]("get_resource", {
            path: a
        }, function(a) {
            if (void 0 === a._error) {
                if (c) {
                    var e = a.data;
                    "json" == b && (e = JSON.parse(e)), c(e);
                }
            } else d ? d(a._error) : console.warn(a._error);
        });
        var e = $(location).attr("host");
        e = "localhost" == e ? z : "6004.mit.edu" == e ? B : x, $.ajax(e + a, {
            type: "GET",
            dataType: b,
            success: function(a) {
                c(a);
            },
            error: function(a, b, c) {
                d ? d("Server " + b + " " + c) : console.warn(response._error);
            }
        });
    }
    function d(a) {
        function c(c) {
            var d = c.inputContent(0), e = c.inputContent(1);
            b("/user/validate", {
                _user: d,
                _password: e
            }, function(b) {
                void 0 === b._error ? (c.dismiss(), b._user && (d = b._user), sessionStorage.setItem("user", d), 
                a(d)) : c.showError(b._error);
            });
        }
        try {
            if (void 0 !== top.window.studentId) return sessionStorage.setItem("user", top.window.studentId), 
            void a(top.window.studentId);
        } catch (d) {}
        var e = sessionStorage.getItem("user");
        if (e) return void a(e);
        var f = $(location).attr("host");
        if ("6004.mit.edu" == f || "localhost" == f || void 0 !== xblock_unique_id) return void b("/user/validate", {}, function(b) {
            void 0 === b._error && (sessionStorage.setItem("user", b._user), sessionStorage.setItem("username", b._username), 
            a(b._user));
        });
        var g = new ModalDialog();
        g.setTitle("Sign In"), g.inputBox({
            label: "Email",
            type: "email",
            callback: c
        }), g.inputBox({
            label: "Password",
            type: "password",
            callback: c
        }), g.addButton("Dismiss", "dismiss"), g.addButton("Submit", function() {
            c(g);
        }, "btn-primary"), g.show();
    }
    function e(a, b) {
        var c = {
            name: b || "???",
            path: "",
            folders: {},
            files: {}
        };
        return a.sort(), $.each(a, function(a, b) {
            var d = c, e = b.split("/");
            $.each(e, function(a, b) {
                if (a == e.length - 1) b.length > 0 && (d.files[b] = {
                    name: b,
                    path: "" != d.path ? d.path + "/" + b : b
                }); else {
                    var c = d.folders[b];
                    void 0 === c && (c = {
                        name: b,
                        path: "" != d.path ? d.path + "/" + b : b,
                        folders: {},
                        files: {}
                    }, d.folders[b] = c, D.push(c.path)), d = c;
                }
            });
        }), c;
    }
    function f(a, c) {
        d(function() {
            b("/file/", {
                action: "list"
            }, function(b) {
                if (void 0 === b._error) {
                    C = b.list;
                    var d = e(b.list);
                    a(d, b._user, b.users);
                } else c ? c(b._error) : console.warn(b._error);
            });
        });
    }
    function g(a, b) {
        c("/shared.json", "json", function(b) {
            a(e(b.list, "shared"));
        }, b);
    }
    function h() {
        return sessionStorage.getItem("user") || "???";
    }
    function i() {
        return sessionStorage.getItem("username") || "???";
    }
    function j(a) {
        return -1 != D.indexOf(a);
    }
    function k(a, c, d) {
        b("/file/" + a + "/", {
            action: "folder"
        }, function(b) {
            b._error ? d ? d(b._error) : console.warn(b._error) : (-1 == D.indexOf(a) && D.push(a), 
            c());
        });
    }
    function l(a) {
        return -1 != C.indexOf(a);
    }
    function m(a, c, d, e) {
        b("/file/" + a, {
            action: "save",
            contents: c
        }, function(b) {
            b._error ? e ? e(b._error) : console.warn(b._error) : (-1 == C.indexOf(a) && C.push(a), 
            d({
                name: a,
                data: c
            }));
        });
    }
    function n(a, c, d) {
        b("/file/" + a, {
            action: "delete"
        }, function(b) {
            if (b._error) d ? d(b._error) : console.warn(b._error); else {
                var e = C.indexOf(a);
                -1 != e && C.splice(e, 1), c();
            }
        });
    }
    function o(a, c, d, e) {
        b("/file/" + a, {
            action: "rename",
            path: c
        }, function(b) {
            if (b._error) e ? e(b._error) : console.warn(b._error); else {
                var f = C.indexOf(a);
                -1 != f && C.splice(f, 1), f = C.indexOf(c), -1 == f && C.push(c), r(c, d, e);
            }
        });
    }
    function p(a) {
        var b = void 0;
        if (a && a.substring(0, F.length) == F) {
            var c = a.indexOf("\n");
            -1 != c && (b = JSON.parse(a.substring(F.length, c)), a = a.substring(c + 1, a.length));
        }
        return {
            contents: a,
            metadata: b
        };
    }
    function q(a, b) {
        return b && (a = F + JSON.stringify(b) + "\n" + (a || "")), a;
    }
    function r(a, d, e) {
        a.match(/^\/shared/) ? c(a, "text", function(b) {
            d({
                name: a,
                data: b,
                shared: !0
            });
        }, e) : b("/file/" + a, {
            action: "load"
        }, function(b) {
            if (b._error) e ? e(b._error) : console.warn(b._error); else {
                var c = p(b.file), f = p(b.autosave), g = E && E != sessionStorage.getItem("user").split("@")[0];
                d({
                    name: a,
                    data: c.contents,
                    metadata: c.metadata,
                    autosave: f,
                    shared: g
                });
            }
        });
    }
    function s(a, c, d) {
        b("/file/" + a, {
            action: "load"
        }, function(b) {
            if (b._error || void 0 === b.backup) d ? d(b._error) : console.warn(b._error); else {
                var e = p(b.backup);
                c({
                    name: a,
                    data: e.contents,
                    metadata: e.metadata
                });
            }
        });
    }
    function t(a, c, d, e, f) {
        c = q(c, f), b("/file/" + a, {
            action: "autosave",
            contents: c
        }, function(b) {
            b._error ? e ? e(b._error) : console.warn(b._error) : d({
                name: a,
                data: c
            });
        });
    }
    function u(a, c, d, e, f) {
        c = q(c, f), b("/file/" + a, {
            action: "save",
            contents: c
        }, function(b) {
            b._error ? e ? e(b._error) : console.warn(b._error) : d({
                name: a,
                data: c
            });
        });
    }
    function v() {
        try {
            if (void 0 !== xblock_unique_id) return top.window.xblock_url[xblock_unique_id]("download_zip");
        } catch (a) {}
        var b = $(location).attr("host");
        return "localhost" == b ? y + "?_path=/file&action=zip" : "6004.mit.edu" == b ? A + "?_path=/file&action=zip" : w + "/file?action=zip";
    }
    var w = "https://mit-6004x.appspot.com", x = "http://computationstructures.org/labs", y = "http://localhost/~cjt/6.004x/server/cgibin_file_server.py", z = "http://localhost/~cjt/6.004x/server", A = "https://6004.mit.edu/coursewarex/cgibin_file_serverx.py", B = "https://6004.mit.edu/coursewarex", C = [], D = [], E = void 0, F = "//metadata ";
    return {
        getFileList: f,
        getSharedFileList: g,
        getUserName: h,
        getUserFullName: i,
        set_user_attribute: a,
        isFolder: j,
        newFolder: k,
        isFile: l,
        newFile: m,
        deleteFile: n,
        renameFile: o,
        getBackup: s,
        getFile: r,
        makeAutoSave: t,
        saveFile: u,
        downloadZipURL: v
    };
}(), Folders = function() {
    function a(a) {
        a = a || function(a) {
            return a;
        }, b(function(b) {
            a(b);
        });
    }
    function b(b, g, h) {
        function j(a, b, c, d) {
            var e = $("<span>").addClass("btn btn-link hover_button pull-right " + c);
            return $("<i>").addClass(a).appendTo(e), d && (e.tooltip({
                title: d,
                delay: {
                    show: 100,
                    hide: 0
                },
                container: "body"
            }), e.on("show", function(a) {
                a.stopPropagation();
            }), e.on("hide", function(a) {
                a.stopPropagation();
            })), e.click(function(a) {
                e.tooltip("hide"), a.stopPropagation();
                var c = $(a.currentTarget).parents("li").attr("data-path");
                b && b(c, $(a.currentTarget).parents("li"));
            }), e;
        }
        function o(b, c, g) {
            s++;
            var h = (b.path, _.sortBy(b.files, name)), p = _.sortBy(b.folders, name);
            _.each(p, function(b) {
                var d = b.name, h = b.path, i = "collapse" + h.replace(/(\/|\s)/g, "_");
                1 == s && (name = "");
                var p = h;
                1 == s && (p = "");
                var q = n("folder_contents").attr({
                    "data-path": p
                }), t = $("<li>").addClass("folder_name").attr({
                    "data-toggle": "collapse",
                    href: "#" + i,
                    "data-path": p
                });
                1 === s && t.addClass("root_folder_name"), q.append(t);
                var u = $("<i>").addClass("icon-chevron-down pull-left open_indicator").addClass(i).css("height", 16);
                if (t.append(u), 1 == s && g) {
                    var w, x = $("<select>"), y = d.split("@")[0];
                    $.each(g, function(a, b) {
                        w = $("<option>" + b + "</option>"), b == y && w.attr("selected", "yes"), x.append(w);
                    }), t.append(x), x.on("change", function() {
                        r.closeAllTabs(!0), FileSystem.set_user_attribute(x.val()), a(), D.collapse("show");
                    });
                } else t.append($("<span>").text(d));
                var z = j("icon-file", k, "folder_button", "New File"), A = j("icon-folder-open", l, "folder_button", "New Folder"), B = j("icon-trash", m, "folder_button", "Delete Folder"), C = n("folder_button_div");
                C.append(z, A), t.on("click", function() {
                    D.collapse("toggle");
                }), s > 1 && C.append(B), t.append(C), void 0 === v[i] && (v[i] = s > 1);
                var D = $("<ul>").addClass("collapse").attr("id", i);
                v[i] ? u.toggleClass("icon-chevron-down icon-chevron-right") : D.addClass("in"), 
                D.on("show", function(a) {
                    u.toggleClass("icon-chevron-down icon-chevron-right"), v[$(a.currentTarget).attr("id")] = !1, 
                    f(), a.stopPropagation();
                }), D.on("hide", function(a) {
                    u.toggleClass("icon-chevron-down icon-chevron-right"), v[$(a.currentTarget).attr("id")] = !0, 
                    f(), a.stopPropagation();
                }), Object.keys(b.folders).length > 0 || Object.keys(b.files).length > 0 ? o(b, D) : D.append(n("muted").text("[empty folder]")), 
                q.append(D), c.append(q), q.droppable({
                    accept: ".file_name",
                    activeClass: "active_drop",
                    greedy: !0,
                    hoverClass: "hover_drop",
                    tolerance: "pointer",
                    activate: function() {},
                    drop: function(b, c) {
                        var d = c.draggable.data("path"), f = $(b.target).data("path"), g = d.split("/").pop();
                        "" != f && (g = f + "/" + g), FileSystem.renameFile(d, g, function(b) {
                            e(b), a();
                        });
                    }
                });
            }), _.each(h, function(a) {
                function b(a) {
                    var b = $(a.currentTarget), c = $("<div>").append(b.text()).addClass("dragging_div file_name");
                    return c;
                }
                var e = a.name, f = a.path, g = $("<li>").addClass("file_name").attr("data-path", f).append($("<span>" + e + "</span>")), h = j("icon-trash", m, "file_button", "Delete"), k = j("icon-pencil", i, "file_button", "Rename"), l = n("file_button_div");
                l.append(k, h), g.append(l), g.click(function() {
                    d(f);
                }), c.append(g), g.draggable({
                    containment: ".xblock-6004",
                    appendTo: ".xblock-6004",
                    cursor: "move",
                    delay: 300,
                    helper: b,
                    distance: 10,
                    revert: "invalid",
                    zIndex: 100,
                    cursorAt: {
                        left: 20
                    },
                    drag: function() {}
                });
            });
        }
        function p(a, b) {
            t++;
            var c = (a.path, _.sortBy(a.files, name)), e = _.sortBy(a.folders, name);
            _.each(e, function(a) {
                var c = a.name, d = a.path, e = "shared_collapse" + d.replace(/(\/|\s)/g, "_"), g = d;
                1 == t && (name = "", g = "");
                var h = n("folder_contents shared_folder_contents").attr({
                    "data-path": g
                }), i = $("<li>").addClass("folder_name shared_folder_name").attr({
                    "data-toggle": "collapse",
                    href: "#" + e,
                    "data-path": g
                });
                1 == t && i.addClass("shared_root_folder_name"), h.append(i);
                var j = $("<i>").addClass("icon-chevron-down pull-left open_indicator").addClass(e).css("height", 16);
                i.append(j).append($("<span>").text(c)), i.on("click", function() {
                    k.collapse("toggle");
                }), void 0 === v[e] && (v[e] = t > 1);
                var k = $("<ul>").addClass("collapse").attr("id", e);
                v[e] ? j.toggleClass("icon-chevron-down icon-chevron-right") : k.addClass("in"), 
                k.on("show", function(a) {
                    j.toggleClass("icon-chevron-down icon-chevron-right"), v[$(a.currentTarget).attr("id")] = !1, 
                    f(), a.stopPropagation();
                }), k.on("hide", function(a) {
                    j.toggleClass("icon-chevron-down icon-chevron-right"), v[$(a.currentTarget).attr("id")] = !0, 
                    f(), a.stopPropagation();
                }), Object.keys(a.folders).length > 0 || Object.keys(a.files).length > 0 ? p(a, k) : k.append(n("muted").text("[empty folder]")), 
                h.append(k), b.append(h);
            }), _.each(c, function(a) {
                var c = a.name, e = "/shared/" + a.path, f = $("<li>").addClass("file_name shared_file_name").attr("data-path", e).append($("<span>" + c + "</span>"));
                f.click(function() {
                    d(e);
                }), b.append(f);
            });
        }
        g = g || q.find(".file_paths"), h = h || q.find(".shared_file_paths"), FileSystem.getFileList(function(a, c, d) {
            g.empty();
            var e = {
                path: "",
                name: c,
                folders: {
                    root: {
                        name: c,
                        path: "",
                        folders: a.folders,
                        files: a.files
                    }
                }
            };
            o(e, g, d), FileSystem.getSharedFileList(function(a) {
                h.empty();
                var b = {
                    path: "",
                    name: "shared",
                    folders: {
                        shared: {
                            name: "shared",
                            path: "",
                            folders: a.folders,
                            files: a.files
                        }
                    }
                };
                p(b, h);
            }), b(!0);
        }, function(a, d, e) {
            console.log(d), console.log(e), c(), b(!1);
        });
        var s = 0, t = 0;
    }
    function c() {
        alert("there is no server online");
    }
    function d(a) {
        r.openFile(a, !0, f);
    }
    function e(a) {
        r.openTab(a.name, a.data, !0), f();
    }
    function f() {
        var a = {
            collapsedFolders: v
        };
        localStorage.setItem("6004folderspref" + s, JSON.stringify(a));
    }
    function g(a, b) {
        return b.length > 0 && !a.test(b);
    }
    function h(a, b, c, d, e, f, g) {
        g = g || "Warning", c = c || function(a) {
            return a.length > 0;
        }, d = d || "type here";
        var h = !1, i = !0, j = !1;
        if (e = e || parseInt(b.width() - 60), w) return !1;
        w = !0;
        var k = $("<div>").addClass("text-input input-append control-group input_file_name").css({
            "margin-bottom": 0
        }), l = $("<input>").addClass("new_text input_file_name").width(e).attr({
            type: "text",
            placeholder: d,
            "border-color": "gray"
        }), m = $("<button>").addClass("add-on btn btn-danger").append("&times;"), n = $("<div>").attr("id", "tooltip_content"), o = {
            showError: function(a) {
                n.text(a), l.attr("data-content", String(n[0].outerHTML)), k.addClass("error"), 
                j || (l.popover("show"), $("#tooltip_content").on("click", function(a) {
                    clearTimeout(p), l.popover("hide"), l.focus(), a.stopPropagation();
                })), h = !1;
            },
            hideError: function() {
                k.removeClass("error"), j && l.popover("hide");
            },
            destroy: function() {
                i = !0, l.popover("destroy"), k.detach(), w = !1, f && f();
            }
        };
        m.on("click", function() {
            clearTimeout(p), o.destroy();
        }), l.on("keyup", function(b) {
            var d = b.which || b.keyCode, e = l.val();
            i = !0, 13 == d ? (a(e, o), b.preventDefault()) : 27 == d && o.destroy(), c(e, o) ? (o.hideError(), 
            h = !0) : h = !1;
        });
        var p;
        l.on("focusout", function() {
            p = setTimeout(function() {
                !i && c(l.val(), o) && a(l.val(), o);
            }, 100);
        }), l.popover({
            placement: "bottom",
            trigger: "manual",
            container: "body",
            html: !0
        }), l.popover().on("show", function(a) {
            j = !0, a.stopPropagation();
        }), l.popover().on("hide", function(a) {
            j = !1, a.stopPropagation();
        });
        var q = d;
        return l.val(q), o.hideError(), k.append(l, m), $(b).prepend(k), $(b).off("click"), 
        l.focus(), l.select(), !0;
    }
    function i(b, c) {
        function d(a, b) {
            if (!g(t, a)) return b.showError('File names cannot be empty or contain \\, / , : , " , < , > , | , ? , * , or ~'), 
            !1;
            var c = i + a;
            return FileSystem.isFile(c) ? c.substring(c.lastIndexOf("/") + 1) !== j ? (b.showError("file already exists "), 
            !1) : c : c;
        }
        function f() {
            c.html(l), a();
        }
        var i = b.substring(0, b.lastIndexOf("/") + 1), j = b.substring(b.lastIndexOf("/") + 1), k = function(c, f) {
            var g = d(c, f);
            return g ? void FileSystem.renameFile(b, g, function(b) {
                return e(b), f.destroy(), a(), !0;
            }) : !1;
        }, l = c.html(), m = c.width() - 30;
        c.html(""), h(k, c, d, j, m, f);
    }
    function j(a, b, c, d, e) {
        var f = function(a, d) {
            var e = b(a, d);
            e && c(e, d);
        }, g = $($(a).attr("href"));
        g.hasClass("in") || g.collapse("show"), h(f, g, b, e);
    }
    function k(b, c) {
        function d(b, c) {
            var d = {
                name: b,
                data: ""
            };
            FileSystem.newFile(d.name, d.data, function(b) {
                return "/" == b.name[0] && (b.name = b.name.slice(1)), e(b), c.destroy(), a(), !0;
            });
        }
        function f(a, c) {
            if (!g(t, a)) return c.showError('File names cannot be empty or contain \\, / , : , " , < , > , | , ? , * , or ~'), 
            !1;
            var d = "" != b ? b + "/" + a : a;
            return FileSystem.isFile(d) ? (c.showError(" file already exists "), !1) : d;
        }
        j(c, f, d, "New File", "new file");
    }
    function l(b, c) {
        function d(a, c) {
            if (!g(u, a)) return c.showError('Folder names cannot contain ., \\, /, :, ", <, >, |, ?, or *'), 
            !1;
            var d = "" != b ? b + "/" + a : a;
            return FileSystem.isFolder(d) ? (c.showError(d + " is already a folder; please choose another name."), 
            !1) : d;
        }
        function e(b, c) {
            FileSystem.newFolder(b, function() {
                c.destroy(), a();
            });
        }
        j(c, d, e, "New Folder", "new folder");
    }
    function m(b) {
        var c = new ModalDialog();
        c.setTitle("Delete File"), c.setText("Are you sure you want to delete " + b + "?"), 
        c.addButton("Cancel", "dismiss"), c.addButton("Delete", function() {
            FileSystem.deleteFile(b, function() {
                r.closeTab(b), f(), a(), c.dismiss();
            });
        }, "btn-danger"), c.show();
    }
    function n(a) {
        return a || (a = ""), $("<div></div>").addClass(a);
    }
    function o(b) {
        var c = new Toolbar(b);
        c.addButtonGroup([ new ToolbarButton("icon-refresh", function() {
            a();
        }, "Refresh") ]);
        var d = new ToolbarButton("", void 0, "");
        d.render = function(a) {
            var b = $('<a class="btn" href="' + FileSystem.downloadZipURL() + '"><i class="icon-download"></i></a>');
            b.tooltip({
                title: "Download Zip archive",
                placement: "top",
                delay: 100,
                container: "body"
            }), a.append(b);
        }, c.addButtonGroup([ d ]);
    }
    function p(b, c, d) {
        function e() {
            return $("#split-container").parent().height();
        }
        q = $(b), r = c, s = d;
        var f = n("button_div");
        o(f);
        var g = n("sidebar-nav folders_div"), h = $("<ul>").addClass("file_paths nav nav-list nav-stacked"), i = $("<ul>").addClass("shared_file_paths nav nav-list nav-stacked");
        g.height(e() - g.offset().top - 10), $(window).on("resize", function() {
            g.height(e() - g.offset().top - 10);
        }), g.append(h, i);
        var j = JSON.parse(localStorage.getItem("6004folderspref" + s));
        j && j.collapsedFolders && (v = j.collapsedFolders);
        FileSystem.getUserName();
        q.append(f), q.append(g), a(function(a) {
            a || console.warn("failed refresh");
        });
    }
    var q, r, s, t = /(<|>|\:|\"|\||\/|\\|\?|\*|~)/, u = /(<|>|\:|\"|\||\/|\\|\?|\*|~|\.)/, v = {}, w = !1;
    return {
        setup: p,
        refresh: a
    };
}();

!function() {
    CodeMirror.defineMode("jsim", function() {
        var a = function(a, b) {
            if (!b.in_multi_line_comment) {
                if (!a.match("/*")) return !1;
                b.in_multi_line_comment = !0;
            }
            return b.in_multi_line_comment && (a.match(/^.*\*\//) ? b.in_multi_line_comment = !1 : a.skipToEnd()), 
            !0;
        }, b = function(a) {
            for (var b = !1; ;) if (b) a.next(), b = !1; else {
                if (!a.skipTo("\\")) return a.skipTo('"') ? (a.next(), !0) : (a.skipToEnd(), !1);
                a.next(), b = !0;
            }
        };
        return {
            lineComment: "//",
            blockCommentStart: "/*",
            blockCommentEnd: " */",
            blockCommentLead: "  *",
            startState: function() {
                return {
                    in_multi_line_comment: !1,
                    last_state: null,
                    sol: !1,
                    in_args: !1,
                    subckt_name: !1
                };
            },
            token: function(c, d) {
                if (c.sol() && (d.sol = !0), !c.eatSpace()) {
                    if (a(c, d)) return "comment";
                    if (d.sol) {
                        if (d.sol = !1, "+" == c.peek()) return c.next(), "string" == d.last_state ? (b(c, d) && (d.last_state = null), 
                        "string") : "keyword";
                        d.in_args = !1, d.subckt_name = !1;
                    }
                    if (d.sol = !1, d.last_state = null, c.match("//")) return c.skipToEnd(), "comment";
                    if (d.in_args) {
                        if (d.subckt_name = !1, c.match('"')) return b(c, d) || (d.last_state = "string"), 
                        "string";
                        if (c.match(/^(?:[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x[0-9a-f]+|0b[01]+|0[0-7]+)(?:[a-zA-Z]+)?/i)) return "number";
                        if (c.match(/^[+*\/-]/)) return "operator";
                        if (c.match(/[a-z0-9_:\$\[\]\.#]+/i)) return "variable-2";
                        if (c.match(/^[()]/)) return "bracket";
                        if (c.match(",")) return;
                        if (c.match("=")) return "operator";
                    } else {
                        if (d.subckt_name) return c.match(/^[a-zA-Z_][a-zA-Z0-9_]*/), d.in_args = !0, "variable";
                        if (c.match(/^\.(checkoff|connect|dc|ac|end|ends|global|include|mverify|options|plot|plotdef|subckt|tran|verify)\b/i)) return d.in_args = !0, 
                        "keyword";
                        if (c.match(/^[WRNPCLVIO][a-z0-9_:\$\[\]\.]+/i)) return d.in_args = !0, "variable-3";
                        if (c.match(/^[GX][a-z0-9_:\$\[\]\.]+/i)) return d.subckt_name = !0, "variable-3";
                    }
                    return c.eatWhile(/^[^\s()]/) || c.eatWhile(/^[^\s]/) || c.skipToEnd(), "error";
                }
            }
        };
    });
    var a = {
        paramListStart: "",
        paramSpacer: " ",
        paramListEnd: "",
        filter: function(a, b) {
            return b.state.in_args || b.state.subckt_name || b.state.in_multi_line_comment ? !1 : a;
        }
    }, b = {
        paramListStart: " ",
        paramSpacer: " ",
        paramListEnd: "",
        filter: function(a, b) {
            return b.state.subckt_name ? a : !1;
        }
    }, c = {
        paramListStart: " ",
        paramSpacer: " ",
        paramListEnd: "",
        filter: function(a, b) {
            return b.state.in_args && b.string != a.term[0] || b.state.subckt_name || b.state.in_multi_line_comment ? !1 : a;
        }
    }, d = {
        paramListStart: "(",
        paramSpacer: ", ",
        paramListEnd: ")",
        filter: function(a, b) {
            return b.state.in_args && !b.state.subckt_name ? a : !1;
        }
    };
    Editor.Completions.jsim = {
        Settings: b,
        Terms: [ [ "constant0", [ "nodes..." ] ], [ "constant1", [ "nodes..." ] ], [ "inverter", [ "in", "out" ] ], [ "inverter_2", [ "in", "out" ] ], [ "inverter_4", [ "in", "out" ] ], [ "inverter_8", [ "in", "out" ] ], [ "buffer", [ "in", "out" ] ], [ "buffer_2", [ "in", "out" ] ], [ "buffer_4", [ "in", "out" ] ], [ "buffer_8", [ "in", "out" ] ], [ "tristate", [ "e", "in", "out" ] ], [ "tristate_2", [ "e", "in", "out" ] ], [ "tristate_4", [ "e", "in", "out" ] ], [ "tristate_8", [ "e", "in", "out" ] ], [ "and2", [ "a", "b", "out" ] ], [ "and3", [ "a", "b", "c", "out" ] ], [ "and4", [ "a", "b", "c", "d", "out" ] ], [ "nand2", [ "a", "b", "out" ] ], [ "nand3", [ "a", "b", "c", "out" ] ], [ "nand4", [ "a", "b", "c", "d", "out" ] ], [ "or2", [ "a", "b", "out" ] ], [ "or3", [ "a", "b", "c", "out" ] ], [ "or4", [ "a", "b", "c", "d", "out" ] ], [ "nor2", [ "a", "b", "out" ] ], [ "nor3", [ "a", "b", "c", "out" ] ], [ "nor4", [ "a", "b", "c", "d", "out" ] ], [ "xor2", [ "a", "b", "out" ] ], [ "xnor2", [ "a", "b", "out" ] ], [ "mux2", [ "s", "d0", "d1", "out" ] ], [ "mux4", [ "s0", "s1", "d0", "d1", "d2", "d3", "out" ] ], [ "dreg", [ "in", "clk", "out" ] ], [ "$memory", [ "width=w", "nlocations=nloc", "options..." ] ], {
            settings: a,
            term: [ "C", [ "id", "n+", "n-", "capacitance" ] ]
        }, {
            settings: a,
            term: [ "L", [ "id", "n+", "n-", "inductance" ] ]
        }, {
            settings: a,
            term: [ "R", [ "id", "n+", "n-", "resistance" ] ]
        }, {
            settings: a,
            term: [ "I", [ "id", "n+", "n-", "current" ] ]
        }, {
            settings: a,
            term: [ "V", [ "id", "n+", "n-", "voltage" ] ]
        }, {
            settings: a,
            term: [ "W", [ "id", "nodes...", "fn", "data..." ] ]
        }, {
            settings: a,
            term: [ "P", [ "id", "drain", "gate", "source" ] ]
        }, {
            settings: a,
            term: [ "N", [ "id", "drain", "gate", "source" ] ]
        }, {
            settings: a,
            term: [ "O", [ "id", "n+", "n-", "output", "a" ] ]
        }, {
            settings: c,
            term: [ ".connect", [ "nodes..." ] ]
        }, {
            settings: c,
            term: [ ".dc", [ "source1", "start1", "step2", "source2", "start2", "stop2", "step2" ] ]
        }, {
            settings: c,
            term: [ ".global", [ "nodes..." ] ]
        }, {
            settings: c,
            term: [ ".include", [ "filename" ] ]
        }, {
            settings: c,
            term: [ ".option", [ "option" ] ]
        }, {
            settings: c,
            term: [ ".plot", [ "things..." ] ]
        }, {
            settings: c,
            term: [ ".plotdef", [ "name", "labels..." ] ]
        }, {
            settings: c,
            term: [ ".subckt", [ "name", "nodes..." ] ]
        }, {
            settings: c,
            term: [ ".temp", [ "temperature" ] ]
        }, {
            settings: c,
            term: [ ".tran", [ "time" ] ]
        }, {
            settings: d,
            term: [ "nrz", [ "vlow", "vhigh", "tperiod", "tdelay", "trise", "tfall" ] ]
        }, {
            settings: d,
            term: [ "pulse", [ "vA", "vB", "tdelay", "tAtoB", "tstable" ] ]
        }, {
            settings: d,
            term: [ "pwl", [ "t1", "v1", "t2", "v2..." ] ]
        } ]
    };
}();

var Parser = function() {
    function a(a, b) {
        this.message = a, this.line = b.line, this.column = b.column, this.filename = b.origin_file;
    }
    function b(d) {
        for (var e = /\[\d+:\d+(:-?\d+)?\]/, f = /#\d+$/, g = []; d.length > 0; ) {
            var h, i, j, k = d[0], l = [], m = [];
            if ("name" == k.type) if (null !== (i = f.exec(k.token))) {
                var n = parseInt(i[0].slice(1)), o = k.token.slice(0, i.index);
                for (j = 0; n > j; j += 1) l.push({
                    token: o,
                    line: k.line,
                    type: "name",
                    column: k.column,
                    origin_file: k.origin_file
                });
                l = b(l), g = g.concat(l), d.shift();
            } else if (null !== (h = e.exec(k.token))) {
                var p, q = h[0], r = k.token.slice(0, h.index), s = h.index + q.length, t = k.token.slice(s);
                try {
                    p = c(q);
                } catch (u) {
                    throw new a(u, k);
                }
                for (j = 0; j < p.length; j += 1) {
                    var v = {
                        token: r + p[j] + t,
                        line: k.line,
                        type: "name",
                        column: k.column,
                        origin_file: k.origin_file
                    };
                    m.push(v);
                }
                m = b(m), g = g.concat(m), d.shift();
            } else g.push(d.shift()); else g.push(d.shift());
        }
        return g;
    }
    function c(a) {
        var b, c = a.match(/\d+/g), d = parseInt(c[0]), e = parseInt(c[1]), f = !1;
        if (c.length > 2) {
            if (b = parseInt(c[2]), d > e && (b *= -1), 0 === b) throw "Invalid iterator";
        } else b = e > d ? 1 : -1;
        0 > b && (f = !0), f && (d *= -1, e *= -1, b *= -1);
        for (var g = [], h = d; e >= h; ) {
            var i;
            i = f ? -1 * h : h, g.push("[" + i + "]"), h += b;
        }
        return g;
    }
    function d(a) {
        var b;
        if (b = a.match(/^\s*([\-+]?)0x([0-9a-fA-F_]+)\s*$/)) return parseInt(b[1] + b[2].replace("_", ""), 16);
        if (b = a.match(/^\s*([\-+]?)0b([01_]+)\s*$/)) return parseInt(b[1] + b[2].replace("_", ""), 2);
        if (b = a.match(/^\s*([\-+]?)0([0-7_]+)\s*$/)) return parseInt(b[1] + b[2].replace("_", ""), 8);
        if (b = a.match(/^\s*[\-+]?[0-9]*(\.([0-9]+)?)?([eE][\-+]?[0-9]+)?\s*$/)) return parseFloat(b[0]);
        if (b = a.match(/^\s*([\-+]?[0-9]*(\.?([0-9]+)))([A-Za-z]+)/)) {
            var c = parseFloat(b[1]), d = b[4][0];
            return "P" == d ? c *= 1e15 : "t" == d || "T" == d ? c *= 1e12 : "g" == d || "G" == d ? c *= 1e9 : "M" == d ? c *= 1e6 : "k" == d || "K" == d ? c *= 1e3 : "m" == d ? c *= .001 : "u" == d || "U" == d ? c *= 1e-6 : "n" == d || "N" == d ? c *= 1e-9 : "p" == d ? c *= 1e-12 : "f" == d || "F" == d ? c *= 1e-15 : ("a" == d || "A" == d) && (c *= 1e-18), 
            c;
        }
        throw "Number expected";
    }
    function e(a, b) {
        T = [ "gnd" ], U = [], V = {}, W = [], Z = [], ab = {}, _ = [ {
            type: "ground",
            connections: {
                gnd: "gnd"
            },
            properties: {}
        } ], X = {
            _top_level_: {
                name: "_top_level_",
                ports: [],
                properties: {},
                devices: []
            }
        }, Y = X._top_level_;
        for (var c = 0, d = 0; c < a.length; ) {
            if ("\n" == a[c].type) {
                if (c > d) {
                    var e = a.slice(d, c);
                    if ("control" == e[0].type) f(e); else {
                        var g = p(e);
                        g instanceof Array ? Y.devices = Y.devices.concat(g) : Y.devices.push(g);
                    }
                }
                d = c + 1;
            }
            c += 1;
        }
        return L("", {
            type: "instance",
            ports: [],
            connections: [],
            properties: {
                name: "_top_level_",
                instanceOf: "_top_level_"
            }
        }, _), {
            globals: T,
            options: V,
            plots: U,
            plotdefs: ab,
            analyses: W,
            netlist: _,
            sources: b
        };
    }
    function f(b) {
        switch (b[0].token.toLowerCase()) {
          case ".connect":
            g(b);
            break;

          case ".global":
            h(b);
            break;

          case ".options":
            k(b);
            break;

          case ".plot":
            i(b);
            break;

          case ".plotdef":
            j(b);
            break;

          case ".tran":
            if ("_top_level_" != Y.name) throw new a("Analyses not allowed inside subcircuit definitons", b[0]);
            l(b);
            break;

          case ".dc":
            if ("_top_level_" != Y.name) throw new a("Analyses not allowed inside subcircuit definitons", b[0]);
            m(b);
            break;

          case ".ac":
            if ("_top_level_" != Y.name) throw new a("Analyses not allowed inside subcircuit definitons", b[0]);
            n(b);
            break;

          case ".subckt":
            if ("_top_level_" != Y.name) throw new a("Nested subcircuits not allowed", b[0]);
            Y = o(b);
            break;

          case ".ends":
            if ("_top_level_" == Y.name) throw new a(".ends statement without matching .subckt", b[0]);
            Y = X._top_level_;
            break;

          case ".checkoff":
            q(b);
            break;

          case ".verify":
            r(b);
            break;

          case ".mverify":
            s(b);
            break;

          default:
            throw new a("Invalid control statement", b[0]);
        }
    }
    function g(b) {
        for (var c = {
            type: "connect",
            ports: [],
            connections: [],
            properties: {}
        }, d = 1; d < b.length; d += 1) {
            if ("name" != b[d].type) throw new a("Node name expected.", b[d]);
            c.connections.push(b[d].token), c.ports.push(b[d].token);
        }
        c.properties.name = "connect_" + c.connections.join("_"), Y.devices.push(c);
    }
    function h(b) {
        if (b.shift(), 0 === b.length) throw new a("No global nodes specified", b[0]);
        for (var c = 0; c < b.length; c += 1) {
            if ("name" != b[c].type) throw new a("Node name expected", b[c]);
            T.push(b[c].token);
        }
    }
    function i(b) {
        for (var c, d = [], e = !1, f = 1; f < b.length; f += 1) if (b[f + 1] && "(" == b[f + 1].token) e = !0, 
        c = {
            type: b[f].token,
            args: []
        }; else if (e) if (")" == b[f].token) e = !1, d.push(c); else {
            if ("name" != b[f].type && "(" != b[f].token && "," != b[f].token) throw new a("Node name expected.", b[f]);
            if ("(" == b[f].token || "," == b[f].token) continue;
            c.args.push(b[f].token);
        } else {
            if ("name" != b[f].type) throw new a("Node name expected.", b[f]);
            d.push({
                type: void 0,
                args: [ b[f].token ]
            });
        }
        if (d.length > 0) return U.push(d), d;
        throw new a("No nodes specified.", b[0]);
    }
    function j(b) {
        if ("name" != b[1].type) throw new a("Invalid plot definition name", b[1]);
        var c = b.slice(2).map(function(a) {
            return a.token;
        });
        ab[b[1].token] = c;
    }
    function k(b) {
        for (b.shift(); b.length > 0; ) {
            if (b.length < 3) throw new a("Assignment expected", b[0]);
            if ("=" != b[1].token) throw new a("Assignment expected", b[0]);
            if ("number" != b[2].type) throw new a("Number expected", b[2].line, b[2].column);
            V[b[0].token] = b[2].token, b = b.slice(3);
        }
    }
    function l(b) {
        var c = {
            type: "tran",
            parameters: {},
            token: b[0]
        };
        if (2 != b.length) throw new a("One argument expected: .tran tstop", b[1]);
        if ("number" != b[1].type) throw new a("Number expected", b[1]);
        c.parameters.tstop = b[1].token, W.push(c);
    }
    function m(b) {
        b.shift();
        var c = {
            type: "dc",
            parameters: {
                sweep1: {},
                sweep2: {}
            },
            token: b[0]
        }, d = [ "source", "start", "stop", "step" ];
        if (2 != b.length && 4 != b.length && 8 != b.length) throw new a("Four or eight parameters expected: [src1, start1, stop1, step1], [src2, start2, stop2, step2]", b[0]);
        var e;
        if (b.length >= 4) {
            if ("name" != b[0].type) throw new a("Node name expected", b[0]);
            for (c.parameters.sweep1.source = b[0].token, e = 1; 3 >= e; e += 1) {
                if ("number" != b[e].type) throw new a("Number expectd.", b[e]);
                c.parameters.sweep1[d[e]] = b[e].token;
            }
        }
        if (8 == b.length) {
            if ("name" != b[4].type) throw new a("Node name expected", b[4]);
            for (c.parameters.sweep2.source = b[4].token, e = 1; 3 >= e; e += 1) {
                if ("number" != b[e + 4].type) throw new a("Number expectd.", b[e + 4]);
                c.parameters.sweep2[d[e]] = b[e + 4].token;
            }
        }
        W.push(c);
    }
    function n(b) {
        var c = {
            type: "ac",
            parameters: {},
            token: b[0]
        };
        if (4 != b.length) throw new a("Three arguments expected: .ac ac_source_name fstart fstop", b[0]);
        if ("name" != b[1].type) throw new a("Node name expected", b[1]);
        c.parameters.ac_source_name = b[1].token;
        for (var d = [ null, null, "fstart", "fstop" ], e = 2; 3 >= e; e += 1) {
            if ("number" != b[e].type) throw new a("Number expected", b[e]);
            c.parameters[d[e]] = b[e].token;
        }
        W.push(c);
    }
    function o(b) {
        b.shift();
        var c = {
            name: b[0].token,
            ports: [],
            properties: {},
            devices: []
        };
        if ("_top_level_" == b[0].token) throw new a("Reserved name", b[0]);
        for (b.shift(); b.length > 0; ) if (b.length > 1 && "=" == b[1].token) {
            if (b.length < 3) throw new a("Assignment expected", b[1]);
            if ("number" != b[2].type) throw new a("Number expected.", b[2]);
            c.properties[b[0].token] = b[2].token, b = b.slice(3);
        } else c.ports.push(b.shift().token);
        return X[c.name] = c, c;
    }
    function p(b) {
        var c, d = b[0];
        if ("name" != d.type) throw new a("Invalid device type", b[0]);
        switch (d.token[0].toUpperCase()) {
          case "R":
            c = t(b);
            break;

          case "C":
            c = u(b);
            break;

          case "L":
            c = v(b);
            break;

          case "P":
            c = x(b);
            break;

          case "N":
            c = y(b);
            break;

          case "V":
            c = A(b);
            break;

          case "I":
            c = B(b);
            break;

          case "O":
            c = D(b);
            break;

          case "W":
            var e = E(b);
            return e;

          case "X":
            c = G(b);
            break;

          case "G":
            c = J(b);
            break;

          default:
            throw new a("Invalid device type", b[0]);
        }
        return c.line = b[0].line, c.file = b[0].origin_file, c;
    }
    function q(b) {
        if ("string" != b[1].type) throw new a("Server name expected.", b[1]);
        if ("string" != b[2].type) throw new a("Assignment name expected.", b[2]);
        var c = {
            server: {
                name: b[1].token,
                token: b[1]
            },
            assignment: {
                name: b[2].token,
                token: b[2]
            },
            checksum: {
                value: b[3].token,
                token: b[3]
            }
        };
        Checkoff.setCheckoffStatement(c);
    }
    function r(b) {
        for (var c, d, e = [], f = 1, g = {
            type: void 0,
            args: []
        }, h = !1; ;) {
            if (f >= b.length) throw new a("No verify function specified: 'periodic' or 'tvpairs' expected.", b[0]);
            if (b[f + 1] && "(" == b[f + 1].token) {
                if (h = !0, "name" != b[f].type) throw new a("Invalid function name.", b[f]);
                g.type = b[f].token, d = b[f], f += 2;
            } else if (h) {
                if (")" == b[f].token) {
                    h = !1, c = b.slice(f + 1);
                    break;
                }
                "," != b[f].token && g.args.push(b[f].token), f += 1;
            } else {
                if ("name" != b[f].type) throw new a("Node name expected.", b[f]);
                e.push(b[f].token), f += 1;
            }
        }
        if (0 !== c.length) {
            var i = [];
            if ("tvpairs" == g.type) for (f = 0; f < c.length; f += 2) i.push({
                time: c[f].token,
                value: c[f + 1].token
            }); else {
                if ("periodic" != g.type) throw new a("Invalid verify function: 'periodic' or 'tvpairs' expected", d);
                var j = g.args[0];
                for (f = 0; f < c.length; f += 1) i.push({
                    time: j,
                    value: c[f].token
                }), j += g.args[1];
            }
            var k = {
                nodes: e,
                token: d,
                values: i,
                display_base: c[0].base
            };
            Checkoff.addVerify(k);
        }
    }
    function s(b) {
        var c = {
            type: "memory"
        };
        if ("name" != b[1].type) throw new a("Memory name expected.", b[1]);
        if (c.mem_name = b[1].token, "number" != b[2].type) throw new a("Number expected.", b[2]);
        if (c.startaddress = b[2].token, c.startaddress < 0) throw "Invalid memory start address.";
        c.contents = [];
        for (var d = 3; d < b.length; d += 1) {
            if ("number" != b[d].type) throw new a("Number expected.", b[d]);
            c.contents.push(b[d].token);
        }
        c.display_base = 16, c.token = b[0], Checkoff.addVerify(c);
    }
    function t(a) {
        return w(a, "resistor");
    }
    function u(a) {
        return w(a, "capacitor");
    }
    function v(a) {
        return w(a, "inductor");
    }
    function w(b, c) {
        if (4 != b.length) throw new a("Linear devices expect 3 arguments.", b[0]);
        for (var d = {
            type: c,
            ports: [ "n1", "n2" ],
            connections: [],
            properties: {
                name: b[0].token
            }
        }, e = 1; 3 > e; e += 1) {
            if ("name" != b[e].type) throw new a("Node name expected", b[e]);
            d.connections.push(b[e].token);
        }
        if ("number" != b[3].type) throw new a("Number expected", b[3].line, b[3].column);
        return d.properties.value = b[3].token, d;
    }
    function x(a) {
        return z(a, "pfet");
    }
    function y(a) {
        return z(a, "nfet");
    }
    function z(b, c) {
        var d = {
            type: c,
            ports: [ "D", "G", "S" ],
            connections: [],
            properties: {
                name: b[0].token,
                L: 1,
                W: 8
            }
        };
        b.shift();
        var e = b.length, f = b.length;
        if ("=" == b[e - 2].token) {
            if ("L" != b[e - 3].token.toUpperCase() && "W" != b[e - 3].token.toUpperCase()) throw new a("Mosfet has no property " + b[e - 3].token, b[e - 3]);
            if (f -= 3, "number" != b[e - 1].type) throw new a("Number expected.", b[e - 1]);
            if (d.properties[b[e - 3].token.toUpperCase()] = b[e - 1].token, void 0 !== b[e - 5] && "=" == b[e - 5].token) {
                if ("number" != b[e - 4].type) throw new a("Number expected", b[e - 4].line, b[e - 4].column);
                if ("L" != b[e - 6].token.toUpperCase() && "W" != b[e - 6].token.toUpperCase()) throw new a("Mosfet has no property " + b[e - 6].token, b[e - 6]);
                f -= 3;
            }
        }
        for (var g = 0; f > g; g += 1) {
            if ("name" != b[g].type) throw new a("Node name expected", b[g]);
            d.connections.push(b[g].token);
        }
        return d;
    }
    function A(a) {
        return C(a, "voltage source");
    }
    function B(a) {
        return C(a, "current source");
    }
    function C(b, c) {
        for (var d = {
            type: c,
            ports: [ "nplus", "nminus" ],
            connections: [],
            properties: {
                name: b[0].token
            }
        }, e = 1; 2 >= e; e += 1) if ("name" != b[e].type) throw new a("Node name expected", b[e]);
        d.connections.push(b[1].token), d.connections.push(b[2].token);
        var f = {
            args: []
        };
        if (b[4] && "(" == b[4].token) {
            if ("name" != b[3].type) throw new a("Invalid source function name.", b[3]);
            f.type = b[3].token;
            for (var e = 5; e < b.length; ) if ("," != b[e].token) {
                if (")" == b[e].token) break;
                if ("number" != b[e].type) throw new a("Number expected.", b[e]);
                f.args.push(b[e].token), e += 1;
            } else e += 1;
        } else {
            if (f.type = "dc", "number" != b[3].type) throw new a("Number expected.", b[3]);
            f.args.push(b[3].token);
        }
        return d.properties.value = f, d;
    }
    function D(b) {
        var c = {
            type: "opamp",
            ports: [ "nplus", "nminus", "output", "gnd" ],
            connections: [],
            properties: {
                name: b[0].token
            }
        };
        if ("number" != b[b.length - 1].type) throw new a("Number expected.", b[b.length - 1]);
        c.properties.A = b[b.length - 1].token;
        for (var d = 1; d < b.length - 1; d += 1) {
            if ("name" != b[d].type) throw new a("Node name expected.", b[d]);
            c.connections.push(b[d].token);
        }
        return c;
    }
    function E(b) {
        for (var c = [], d = {
            name: "nrz",
            args: []
        }, e = !1, f = [], g = 1; ;) {
            if (g >= b.length) throw new a("No W function specified.", b[0]);
            if (b[g + 1] && "(" == b[g + 1].token) {
                if ("name" != b[g].type || "nrz" != b[g].token.toLowerCase()) throw new a("Invalid W function: nrz expected.", b[g]);
                g += 2, e = !0;
            }
            if (e) {
                if (!b[g]) break;
                if ("," == b[g].token) {
                    g += 1;
                    continue;
                }
                if (")" == b[g].token) {
                    c = b.slice(g + 1);
                    break;
                }
                if ("number" != b[g].type) throw new a("Number expected.", b[g]);
                d.args.push(b[g].token), g += 1;
            } else {
                if ("name" != b[g].type) throw new a("Node name expected.", b[g]);
                f.push(b[g].token), g += 1;
            }
        }
        var h = c.map(function(a) {
            return a.token;
        });
        return F(f, d.args, h, b[0]);
    }
    function F(a, b, c, d) {
        for (var e = [], f = [], g = [], h = [ "vlow", "vhigh", "tperiod", "tdelay", "trise", "tfall" ], i = {}, j = 0; j < b.length; j += 1) i[h[j]] = b[j];
        for (var k = 0; k < c.length; k += 1) for (e.push(i.tdelay + i.tperiod * k), f[k] = c[k].toString(2).split(""); f[k].length < a.length; ) f[k].unshift("0");
        for (var l = {}, m = 0; m < a.length; m += 1) {
            var n = a[m];
            l[n] = [];
            for (var o = 0; o < e.length; o += 1) l[n].push(f[o][m]);
            var p = [ 0, 0 ];
            for (o = 0; o < e.length; o += 1) {
                var q, r = p[p.length - 1];
                q = "0" == l[n][o] ? i.vlow : i.vhigh;
                var s = q > r ? i.trise : i.tfall;
                p.push(e[o], r, e[o] + s, q);
            }
            var t = {
                type: "voltage source",
                ports: [ "nplus", "nminus" ],
                connections: [ a[m], "gnd" ],
                properties: {
                    name: d.token + "_" + a[m],
                    value: {
                        type: "pwl",
                        args: p
                    }
                },
                line: d.line,
                file: d.origin_file
            };
            g.push(t);
        }
        return g;
    }
    function G(b) {
        if (b.length < 2) throw new a("Malformed instance statement", b[0]);
        for (var c = b[1].token, d = {
            type: "instance",
            connections: [],
            ports: [],
            properties: {
                instanceOf: c,
                name: b[0].token
            }
        }, e = 2; e < b.length; ) if (b[e + 1] && "=" == b[e + 1].token) {
            if ("name" != b[e].type) throw new a("Invalid property name.", b[e]);
            if (!b[e + 2]) throw new a("Incomplete assignment statement.", b[e + 1]);
            if ("number" != b[e + 2].type) throw new a("Number expected.", b[e + 2]);
            d.properties[b[e].token] = b[e + 2].token, e += 3;
        } else {
            if ("name" != b[e].type) throw new a("Node name expected.", b[e]);
            d.connections.push(b[e].token), e += 1;
        }
        return d;
    }
    function H(b) {
        function c(b) {
            var c = b.shift();
            if ("name" != c.type) throw new a("Node name expected.", c);
            return c.token;
        }
        var d = {
            type: "memory",
            ports: [],
            connections: [],
            properties: {
                name: b[0].token
            }
        };
        b.shift(), b.shift();
        for (var e = 0, f = [], g = !1; e < b.length; ) if (b[e + 1] && "=" == b[e + 1].token) {
            if ("name" != b[e].type) throw new a("Invalid property name.", b[e]);
            if (!b[e + 2]) throw new a("Incomplete assignment statement.", b[e + 1]);
            switch (b[e].token.toLowerCase()) {
              case "width":
              case "nlocations":
                if ("number" != b[e + 2].type) throw new a("Number expected.", b[e + 2]);
                d.properties[b[e].token.toLowerCase()] = b[e + 2].token, e += 3;
                break;

              case "file":
                if ("string" != b[e + 2].type) throw new a("Invalid filename.", b[e + 2]);
                d.properties.contents = [];
                var h = b[e + 2].token;
                FileSystem.getFile(h, function(a) {
                    I(d, a.data, prop[0]);
                }, function() {
                    error_cb(new a("Could not get file " + h, prop[2]));
                });
                break;

              case "contents":
                d.properties.contents = [], g = !0, e += 3;
            }
        } else if (g) {
            if ("(" == b[e].token) {
                e += 1;
                continue;
            }
            if (")" == b[e].token) {
                e += 1, g = !1;
                continue;
            }
            if ("number" != b[e].type) throw new a("Number expected.", b[e]);
            d.properties.contents.push(b[e].token), e += 1;
        } else {
            if ("name" != b[e].type) throw new a("Node name expected.", b[e]);
            f.push(b[e]), e += 1;
        }
        if (void 0 === d.properties.width) throw new a("Memory width must be specified.", b[0]);
        if (void 0 === d.properties.nlocations) throw new a("Number of memory locations must be specified.", b[0]);
        var i = Math.ceil(Math.log(d.properties.nlocations) / Math.LN2), j = d.properties.width, k = 3 + i + j;
        if (f.length % k !== 0) throw new a("Invalid memory port specification. Each port should have " + k + " parameters: oe clk wen <" + i + " address signals> <" + j + " data signals>", f[0]);
        d.properties.ports = [];
        for (var l; f.length > 0; ) {
            l = {}, l.oe = c(f), l.clk = c(f), l.wen = c(f), l.addr = [];
            for (var m = 0; i > m; m += 1) l.addr.push(c(f));
            l.data = [];
            for (var n = 0; j > n; n += 1) l.data.push(c(f));
            d.properties.ports.push(l);
        }
        return d;
    }
    function I(b, c, e) {
        for (var f = c.split(/\s+/), g = [], h = 0; h < f.length; h += 1) try {
            g.push(d(f[h]));
        } catch (i) {
            throw new a("Number expected in memory file.", e);
        }
        b.properties.contents = g.slice(0);
    }
    function J(b) {
        if ("memory" == b[1].token) {
            var c = H(b);
            return c;
        }
        var d = [];
        if (b.length >= 4) try {
            for (;"=" == b[b.length - 2].token; ) d.push(b.slice(-3)), b = b.slice(0, -3);
        } catch (e) {}
        for (var f = {
            type: b[1].token,
            connections: [],
            ports: [],
            properties: {
                name: b[0].token
            }
        }, g = 2; g < b.length; g += 1) {
            if ("name" != b[g].type) throw new a("Node name expected", b[g]);
            f.connections.push(b[g].token), f.ports.push(b[g].token);
        }
        for (g = 0; g < d.length; g += 1) {
            if ("number" != d[g][2].type) throw new a("Number expected", d[2].line, d[2].column);
            f.properties[d[g][0].token] = d[g][2].token;
        }
        return f;
    }
    function K(b, c, d, e) {
        function f(a) {
            if (-1 != T.indexOf(a)) return a;
            var c = d.ports.indexOf(a);
            return -1 != c ? d.connections[c] : b + a;
        }
        b && (b += ".");
        var g;
        if ("instance" == c.type) {
            if (!(c.properties.instanceOf in X)) throw new a("Can't find definition for subcircuit " + c.properties.instanceOf + ".", {
                line: c.line,
                column: 0,
                origin_file: c.file
            });
            c.ports = X[c.properties.instanceOf].ports;
            var h = X[c.properties.instanceOf].properties;
            for (g in h) g in c.properties || (c.properties[g] = h[g]);
        }
        var i = {};
        for (g in c.properties) i[g] = c.properties[g];
        var j;
        if ("memory" == c.type) j = 1, $.each(i.ports, function(a, b) {
            b.clk = f(b.clk), b.wen = f(b.wen), b.oe = f(b.oe), $.each(b.addr, function(a, c) {
                b.addr[a] = f(c);
            }), $.each(b.data, function(a, c) {
                b.data[a] = f(c);
            });
        }); else {
            var k = c.ports.length, l = c.connections.length;
            if (l % k !== 0) throw new a("Expected a multiple of " + k + " connections", {
                line: c.line,
                column: 0,
                origin_file: c.file
            });
            j = l / k;
        }
        for (var m = [], n = c.connections.slice(0); n.length > 0; ) m.push(n.splice(0, j));
        for (var o, p, q = 0; j > q; q += 1) {
            o = {}, p = [];
            for (var r = 0; r < m.length; r += 1) {
                var s = m[r][q];
                p.push(f(s));
            }
            o.properties = {};
            for (g in i) o.properties[g] = i[g];
            var t = b + o.properties.name;
            if (1 != j && (t += "_" + q), o.properties.name = t, o.type = c.type, -1 != Z.indexOf(o.properties.name)) throw new a("Duplicate device name: " + o.properties.name, {
                line: c.line,
                column: 0,
                origin_file: c.file
            });
            if (Z.push(o.properties.name), "instance" != c.type) {
                o.connections = {};
                for (var u = 0; k > u; u += 1) o.connections[c.ports[u]] = p[u];
                e.push(o);
            } else o.connections = p.slice(0), o.ports = c.ports.slice(0), L(o.properties.name, o, e);
        }
    }
    function L(a, b, c) {
        var d;
        for (d = 0; d < b.ports.length; d += 1) {
            var e = b.ports[d], f = b.connections[d];
            c.push({
                type: "connect",
                connections: [ f, a + "." + e ],
                properties: {}
            });
        }
        var g = X[b.properties.instanceOf];
        for (d = 0; d < g.devices.length; d += 1) K(a, g.devices[d], b, c);
    }
    function M(a, b, c, d, f) {
        N(a, b, c, function(a, b) {
            d(e(a, b));
        }, function(a) {
            f(a);
        });
    }
    function N(c, e, f, g, h) {
        function i() {
            for (var c, e, f, i, j = n[n.length - 1], l = !1; void 0 !== j; ) if (c = j.pattern.exec(j.contents), 
            null != c) if (i = c[0], p.test(i) || r.test(i)) c = i.split("\n"), j.line_number += c.length - 1, 
            j.line_offset = c[c.length - 1].length; else if (q.test(i)) j.pattern.lastIndex -= 1; else {
                if (o.test(i)) i = i.slice(1, -1), e = "string"; else if (t.test(i)) e = "name"; else if (u.test(i)) e = "number", 
                f = /^0x/.test(i) ? "hex" : /^0b/.test(i) ? "bin" : /^0/.test(i) && !/^0$/.test(i) ? "oct" : "dec"; else if (s.test(i)) {
                    if (e = "control", ".include" == i) {
                        l = !0;
                        continue;
                    }
                } else e = "=" == i ? "equals" : "\n" == i ? "\n" : void 0;
                var w = {
                    token: i,
                    line: j.line_number,
                    column: c.index - j.line_offset,
                    type: e,
                    origin_file: j.filename
                };
                if ("/*" == i) return void h(new a("Unclosed comment", w));
                if ("number" == e) try {
                    w.token = d(i), w.base = f;
                } catch (x) {
                    return void h(new a(x, w));
                } else {
                    if (l) {
                        if (k(i, w)) return;
                        l = !1;
                        continue;
                    }
                    "\n" == i && (j.line_number += 1, j.line_offset = c.index + 1);
                }
                m.push(w);
            } else n.pop(), j = n[n.length - 1];
            try {
                m = b(m), g(m, v);
            } catch (x) {
                return void h(x);
            }
        }
        function j(a, b, c) {
            v.push({
                file: a,
                content: b,
                metadata: c
            });
            var d = /"(\\.|[^"])*"|\/\*(.|\n)*?\*\/|\/\/.*\n|\n+[\t ]*\+|-?[\w:\-\.$#\[\]]+|=|\(|\)|,|\/\*|\n/g;
            n.push({
                contents: b + "\n",
                filename: a,
                line_number: 1,
                line_offset: 0,
                pattern: d
            });
        }
        function k(b, d) {
            return -1 != l.indexOf(b) ? (h(new a("File included more than once", d)), !1) : (l.push(b), 
            void 0 === c ? h(new a("Could not get file", d)) : c.getFile(b, function(a) {
                j(b, a.data, a.metadata), i();
            }, function() {
                h(new a("Could not get file", d));
            }), !0);
        }
        var l = [], m = [], n = [], o = /^"(\\.|[^"])*"/, p = /^\/\*(.|\n)*?\*\//, q = /^\/\/.*\n/, r = /^\n+[\t ]*\+/, s = /^\..+/, t = /^([A-Za-z_$][\w$:\[\]\.]*)/, u = /^(([+-]?\d*\.?)|(0[xX])|(0[bB]))\d+(([eE]-?\d+)|[A-Za-z_]*)/, v = [];
        j(f, e, c ? c.metadata() : void 0), i();
    }
    function O(a, b) {
        N(void 0, a, "", function(a) {
            a.splice(0, 0, {}), a.pop(), b(i(a));
        }, function() {
            b(void 0);
        });
    }
    function P(a) {
        for (var b, c, d, e, f = 0; f < a.length; f += 1) {
            var g = a[f].match(/([\w$\.]*)\[(\d+)\]/);
            if (null != g && (void 0 == b || b == g[1])) {
                b = g[1];
                var h = parseInt(g[2]);
                if (void 0 === c) {
                    c = d = h;
                    continue;
                }
                var i = h - d;
                if (d = h, void 0 === e) {
                    e = i;
                    continue;
                }
                if (e == i) continue;
            }
            b = void 0;
            break;
        }
        if (b && c && e) {
            var j = b + "[" + c + ":" + d;
            1 != e && -1 != e && (j += ":" + Math.abs(e)), j += "]", a = [ j ];
        }
        return a;
    }
    function Q(a) {
        var b = {};
        b.fun = a.type, b.args = a.args, b.period = 0, b.value = function() {
            return 0;
        };
        var c, d, e, f, g, h, i;
        if ("dc" == b.fun) {
            var j = S(b.args, 0, 0);
            b.args = [ j ], b.value = function() {
                return j;
            };
        } else if ("impulse" == b.fun) {
            var k = S(b.args, 0, 1), l = Math.abs(S(b.args, 2, 1e-9));
            b.args = [ k, l ], R(b, [ 0, 0, l / 2, k, l, 0 ], !1);
        } else if ("step" == b.fun) c = S(b.args, 0, 0), d = S(b.args, 1, 1), g = Math.max(0, S(b.args, 2, 0)), 
        h = Math.abs(S(b.args, 3, 1e-10)), b.args = [ c, d, g, h ], R(b, [ g, c, g + h, d ], !1); else if ("square" == b.fun) {
            c = S(b.args, 0, 0), d = S(b.args, 1, 1), e = Math.abs(S(b.args, 2, 1));
            var m = Math.min(100, Math.abs(S(b.args, 3, 50))), n = Math.abs(S(b.args, 4, 1e-10));
            b.args = [ c, d, e, m, n ], f = 0 === e ? 1 / 0 : 1 / e;
            var o = .01 * m * (f - 2 * n);
            R(b, [ 0, c, o, c, o + n, d, 2 * o + n, d, 2 * n + 2 * o, c, f, c ], !0);
        } else if ("clock" == b.fun) {
            c = S(b.args, 0, 0), d = S(b.args, 1, 1), f = Math.abs(S(b.args, 2, 1e-7));
            var m = Math.min(100, Math.abs(S(b.args, 3, 50))), n = Math.abs(S(b.args, 4, 1e-10));
            b.args = [ c, d, f, m, n ];
            var o = .01 * m * (f - 2 * n);
            R(b, [ 0, c, o, c, o + n, d, 2 * o + n, d, 2 * n + 2 * o, c, f, c ], !0);
        } else if ("triangle" == b.fun) c = S(b.args, 0, 0), d = S(b.args, 1, 1), e = Math.abs(S(b.args, 2, 1)), 
        b.args = [ c, d, e ], f = 0 === e ? 1 / 0 : 1 / e, R(b, [ 0, c, f / 2, d, f, c ], !0); else if ("pwl" == b.fun || "pwl_repeating" == b.fun) R(b, b.args, "pwl_repeating" == b.fun); else if ("pulse" == b.fun) {
            c = S(b.args, 0, 0), d = S(b.args, 1, 1), g = Math.max(0, S(b.args, 2, 0));
            var p = Math.abs(S(b.args, 3, 1e9));
            h = Math.abs(S(b.args, 4, 1e-10)), i = Math.abs(S(b.args, 5, 1e-10)), f = Math.abs(S(b.args, 6, 1e9)), 
            b.args = [ c, d, g, h, i, p, f ];
            var q = g, r = q + h, s = r + p, t = s + i;
            R(b, [ q, c, r, d, s, d, t, c, f, c ], !0);
        } else if ("sin" == b.fun) {
            e = Math.abs(S(b.args, 0, 1)), b.period = 1 / e;
            var u = S(b.args, 1, 0), v = S(b.args, 2, 1);
            g = Math.max(0, S(b.args, 3, 0));
            var w = S(b.args, 4, 0);
            b.args = [ u, v, e, g, w ], w /= 360, b.value = function(a) {
                return g > a ? u + v * Math.sin(2 * Math.PI * w) : u + v * Math.sin(2 * Math.PI * (e * (a - g) + w));
            };
        }
        return b.dc = b.value(0), b;
    }
    function R(a, b, c) {
        var d = b.length;
        a.tvpairs = b, c && (a.period = b[d - 2]), d % 2 == 1 && (d -= 1), a.value = 2 >= d ? function() {
            return 2 == d ? b[1] : 0;
        } : function(a) {
            c && (a = Math.fmod(a, b[d - 2]));
            var e = b[0], f = b[1];
            if (a > e) for (var g, h, i = 2; d > i; i += 2) {
                if (g = b[i], h = b[i + 1], g > e && g > a) return f + (h - f) * (a - e) / (g - e);
                e = g, f = h;
            }
            return f;
        };
    }
    function S(a, b, c) {
        var d = a[b];
        return void 0 === d && (d = c), d;
    }
    var T, U, V, W, X, Y, Z, _, ab;
    return Math.fmod = function(a, b) {
        var c = Math.floor(a / b);
        return a - c * b;
    }, {
        parse: M,
        parse_plot: O,
        iterator_notation: P,
        CustomError: a,
        parse_source: Q
    };
}(), cktsim = function() {
    function a(a) {
        $.each(a, function(a, b) {
            var c = [];
            for (var d in b.connections) c.push(d + "=" + b.connections[d]);
            var e = [];
            for (var f in b.properties) e.push(f + "=" + JSON.stringify(b.properties[f]));
            console.log(b.type + " " + c.join(" ") + "; " + e.join(" "));
        });
    }
    function b(a, b, c, d) {
        if (a.length > 0) {
            var f, g, h, i, j, k, l, m, p, q, r = new e(a, d);
            if (void 0 !== b.source) {
                if (f = r.device_map[b.source], !(f instanceof n || f instanceof o)) throw "Device not independent source in DC sweep: " + b.source;
                g = b.start, h = b.stop, i = b.step, i = h >= g ? Math.abs(i) : -Math.abs(i), j = f.src;
            }
            if (void 0 !== c.source) {
                if (k = r.device_map[c.source], !(k instanceof n || k instanceof o)) throw "Device not independent source in DC sweep: " + c.source;
                l = c.start, m = c.stop, p = c.step, p = m >= l ? Math.abs(p) : -Math.abs(p), q = k.src;
            }
            for (var s = g, t = l, u = {
                _sweep1_: [],
                _network_: r
            }, v = []; ;) {
                void 0 !== f && (f.src = Parser.parse_source({
                    type: "dc",
                    args: [ s ]
                })), void 0 !== k && (k.src = Parser.parse_source({
                    type: "dc",
                    args: [ t ]
                }));
                var w = r.dc();
                for (var x in w) "_network_" != x && (void 0 === u[x] && (u[x] = []), u[x].push(w[x]));
                if (u._sweep1_.push(s), u._sweep2_ = t, void 0 === s) break;
                if (s == h) {
                    if (void 0 === t) break;
                    if (v.push(u), t == m) {
                        u = v;
                        break;
                    }
                    u = {
                        _sweep1_: [],
                        _network_: r
                    }, s = g, t += p, (p > 0 && t > m || 0 > p && m > t) && (t = m);
                } else s += i, (i > 0 && s > h || 0 > i && h > s) && (s = h);
            }
            return void 0 !== j && (f.src = j), void 0 !== q && (k.src = q), u;
        }
        return void 0;
    }
    function c(a, b, c, d, f) {
        var g = 50;
        if (a.length > 0) {
            var h = new e(a, f);
            return h.ac(g, b, c, d);
        }
        return void 0;
    }
    function d(a, b, c, d, f) {
        if (a.length > 0 && void 0 !== b) {
            var g = new e(a, f), h = {};
            h.probe_names = c, h.update_interval = 250, h.finish = function(a) {
                d(void 0, a._network_);
            }, h.stop_requested = !1, h.update = function(a) {
                d(a, void 0) && (h.stop_requested = !0);
            }, g.tran_start(h, 100, 0, b);
        }
        return void 0;
    }
    function e(a, b) {
        b.v_abstol && (y = b.v_abstol), b.i_abstol && (z = b.ia_abstol, I = Math.sqrt(z)), 
        b.reltol && (G = b.reltol, J = Math.sqrt(G)), this.node_map = {}, this.ntypes = [], 
        this.initial_conditions = [], this.devices = [], this.device_map = {}, this.voltage_sources = [], 
        this.current_sources = [], this.finalized = !1, this.diddc = !1, this.node_index = -1, 
        this.periods = 1, void 0 !== a && this.load_netlist(a);
    }
    function f(a, b) {
        for (var c = new Array(a), d = a - 1; d >= 0; d -= 1) {
            c[d] = new Array(b);
            for (var e = b - 1; e >= 0; e -= 1) c[d][e] = 0;
        }
        return c;
    }
    function g(a, b, c, d) {
        var e = a.length, f = a[0].length;
        if (e != c.length || f != b.length) throw "Rows of M mismatched to b or cols mismatch to x.";
        for (var g = 0; e > g; g += 1) {
            for (var h = 0, i = 0; f > i; i += 1) h += a[g][i] * b[i];
            c[g] = d * h;
        }
    }
    function h(a, b, c, d, e) {
        var f, g, h = a.length, i = a[0].length;
        if (h > b.length || i > b[0].length) throw "Row or columns of A to large for B";
        if (h > e.length || i > e[0].length) throw "Row or columns of A to large for C";
        if ("number" == typeof c && "number" == typeof d) for (f = 0; h > f; f += 1) for (g = 0; i > g; g += 1) e[f][g] = c * a[f][g] + d * b[f][g]; else if ("number" == typeof d && c instanceof Array) for (f = 0; h > f; f += 1) for (g = 0; i > g; g += 1) e[f][g] = c[f] * a[f][g] + d * b[f][g]; else {
            if (!(typeof d instanceof Array && c instanceof Array)) throw "scalea and scaleb must be scalars or Arrays";
            for (f = 0; h > f; f += 1) for (g = 0; i > g; g += 1) e[f][g] = c[f] * a[f][g] + d[f] * b[f][g];
        }
    }
    function i(a, b) {
        var c = a.length, d = a[0].length;
        if (c > b.length || d > b[0].length) throw "Rows or cols > rows or cols of dest";
        for (var e = 0; c > e; e += 1) for (var f = 0; d > f; f += 1) b[e][f] = a[e][f];
    }
    function j(a) {
        var b, c, d, e, g, h = a.length, j = a[0].length, k = f(h, j);
        i(a, k);
        var l = 0;
        for (e = h - 1; e >= 0; e -= 1) for (g = h - 1; g >= 0; g -= 1) Math.abs(k[e][g]) > l && (l = Math.abs(k[e][g]));
        var m = 0, n = 0;
        for (e = 0; h > e; e += 1) for (g = n; j > g; g += 1) {
            var o = Math.abs(k[e][g]), p = e;
            for (c = e + 1; h > c; c += 1) b = Math.abs(k[c][g]), b > o && (o = b, p = c);
            if (Math.abs(o) > A * l) {
                for (n = g + 1, m += 1, b = k[e], k[e] = k[p], k[p] = b, c = e + 1; h > c; c += 1) if (b = k[c][g] / k[e][g], 
                0 !== b) for (d = g; j > d; d += 1) k[c][d] -= k[e][d] * b;
                break;
            }
        }
        return m;
    }
    function k(a, b) {
        var c, d, e, f, g = a.length, h = a[0].length;
        if (null !== b) for (c = g - 1; c >= 0; c -= 1) a[c][h - 1] = b[c];
        var i = 0, j = g - 1;
        for (c = 0; g > c; c += 1) {
            var k = c, l = 0;
            for (d = c; g > d; d += 1) {
                f = a[d];
                var m = 0;
                for (e = h - 2; e >= 0; e -= 1) m += f[e] * f[e];
                (c == d || m > l) && (k = d, l = m);
            }
            if (k > c) {
                var n = a[c];
                a[c] = a[k], a[k] = n;
            }
            var o = Math.sqrt(l);
            0 === c && (i = o);
            var p;
            if (!(o > i * A)) {
                j = c - 1;
                break;
            }
            for (p = 1 / o, f = a[c], e = h - 1; e >= 0; e -= 1) f[e] *= p;
            for (d = c + 1; g > d; d += 1) {
                var q = a[d], r = 0;
                for (e = h - 2; e >= 0; e -= 1) r += f[e] * q[e];
                for (e = h - 1; e >= 0; e -= 1) q[e] -= r * f[e];
            }
        }
        var s = new Array(h - 1);
        for (e = h - 2; e >= 0; e -= 1) s[e] = 0;
        for (c = j; c >= 0; c -= 1) for (f = a[c], e = h - 2; e >= 0; e -= 1) s[e] += f[e] * f[h - 1];
        return s;
    }
    function l(a, b) {
        var c, d, e, f = a.length;
        if (null !== b) for (var g = 0; f > g; g += 1) a[g][f] = b[g];
        for (var h = 0; f > h; h += 1) {
            var i = Math.abs(a[h][h]), j = h;
            for (d = h + 1; f > d; d += 1) c = Math.abs(a[d][h]), c > i && (i = c, j = d);
            for (0 === i ? a[h][h] = A : (c = a[h], a[h] = a[j], a[j] = c), d = h + 1; f > d; d += 1) if (c = a[d][h] / a[h][h], 
            0 !== c) for (e = h; f >= e; e += 1) a[d][e] -= a[h][e] * c;
        }
        var k = new Array(f);
        for (d = f - 1; d >= 0; d -= 1) {
            for (c = a[d][f], e = f - 1; e > d; e -= 1) c -= a[d][e] * k[e];
            k[d] = c / a[d][d];
        }
        return k;
    }
    function m() {}
    function n(a, b, c, d) {
        m.call(this), this.src = Parser.parse_source(d), this.npos = a, this.nneg = b, this.branch = c;
    }
    function o(a, b, c) {
        m.call(this), this.src = Parser.parse_source(c), this.npos = a, this.nneg = b;
    }
    function p(a, b, c) {
        m.call(this), this.n1 = a, this.n2 = b, this.g = 1 / c;
    }
    function q(a, b, c, d) {
        m.call(this), this.anode = a, this.cathode = b, this.area = c, this.type = d, this.is = 1e-14, 
        this.ais = this.area * this.is, this.vt = "normal" == d ? .0258 : 1e-4, this.exp_arg_max = 50, 
        this.exp_max = Math.exp(this.exp_arg_max);
    }
    function r(a, b, c) {
        m.call(this), this.n1 = a, this.n2 = b, this.value = c;
    }
    function s(a, b, c, d) {
        m.call(this), this.n1 = a, this.n2 = b, this.branch = c, this.value = d;
    }
    function t(a, b, c, d, e, f, g) {
        m.call(this), this.np = a, this.nn = b, this.no = c, this.ng = d, this.branch = e, 
        this.gain = f, this.name = g;
    }
    function u(a, b, c, d, e, f, g) {
        if ("n" != g && "p" != g) throw f + " fet type is not n or p";
        m.call(this), this.d = a, this.g = b, this.s = c, this.name = f, this.W = d, this.L = e, 
        this.ratio = d / e, this.type_sign = "n" == g ? 1 : -1, this.vt = .5, this.kp = "n" == g ? 12e-5 : 25e-6, 
        this.beta = this.kp * this.ratio, this.lambda = .05, this.g_leak = 1e-8 * this.beta;
    }
    var v = 0, w = 1, x = .3, y = 1e-6, z = 1e-12, A = 1e-12, B = 1e3, C = 20, D = 2, E = 8, F = 4, G = 1e-4, H = 10, I = Math.sqrt(z), J = Math.sqrt(G);
    e.prototype.history = function(a) {
        return void 0 === this.result || void 0 === this.result[a] ? void 0 : {
            xvalues: this.result._xvalues_,
            yvalues: this.result[a]
        };
    }, e.prototype.result_type = function() {
        return "analog";
    }, e.prototype.node_list = function() {
        var a = [];
        for (var b in this.results) a.push(b);
        return a;
    }, e.prototype.gnd_node = function() {
        return -1;
    }, e.prototype.node = function(a, b, c) {
        return this.node_index += 1, a && (this.node_map[a] = this.node_index), this.ntypes.push(b), 
        this.initial_conditions.push(c), this.node_index;
    }, e.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0, this.N = this.node_index + 1;
            for (var a = this.devices.length - 1; a >= 0; a -= 1) this.devices[a].finalize(this);
            for (this.matrix = f(this.N, this.N + 1), this.Gl = f(this.N, this.N), this.G = f(this.N, this.N), 
            this.C = f(this.N, this.N), this.soln_max = new Array(this.N), this.abstol = new Array(this.N), 
            this.solution = new Array(this.N), this.rhs = new Array(this.N), a = this.N - 1; a >= 0; a -= 1) this.soln_max[a] = 0, 
            this.abstol[a] = this.ntypes[a] == v ? y : z, this.solution[a] = 0, this.rhs[a] = 0;
            for (a = this.devices.length - 1; a >= 0; a -= 1) this.devices[a].load_linear(this);
            var b = this.voltage_sources.length;
            if (b > 0) {
                var c = f(b, this.N);
                for (a = b - 1; a >= 0; a -= 1) for (var d = this.voltage_sources[a].branch, e = this.N - 1; e >= 0; e -= 1) c[a][e] = this.Gl[d][e];
                var g = j(c);
                if (b > g) throw "Warning!!! Circuit has a voltage source loop or a source or current probe shorted by a wire, please remove the source or the wire causing the short.";
            }
        }
        return !0;
    }, e.prototype.load_netlist = function(a) {
        var b, c, d, e, f, g;
        for (b = a.length - 1; b >= 0; b -= 1) "ground" == a[b].type && (f = a[b].connections, 
        this.node_map[f.gnd] = this.gnd_node());
        var h = {};
        for (b = a.length - 1; b >= 0; b -= 1) if ("connect" == a[b].type) {
            if (f = a[b].connections, f.length <= 1) continue;
            var i = f[0];
            for (c = 1; c < f.length; c += 1) if (d = f[c], void 0 !== this.node_map[d]) {
                i = d;
                break;
            }
            for (;void 0 !== h[i]; ) i = h[i];
            for (c = 1; c < f.length; c += 1) {
                for (d = f[c]; void 0 !== h[d]; ) d = h[d];
                h[d] = i;
            }
        }
        var j = !1;
        for (this.counts = {}, b = a.length - 1; b >= 0; b -= 1) {
            e = a[b];
            var k = e.type;
            f = e.connections;
            var l = e.properties;
            this.counts[k] = (this.counts[k] || 0) + 1;
            for (d in f) {
                for (g = f[d]; void 0 !== h[g]; ) g = h[g];
                var m = this.node_map[g];
                void 0 === m ? m = this.node(g, v) : m == this.gnd_node() && (j = !0), f[d] = m;
            }
            var n = l.name;
            switch (k) {
              case "resistor":
                this.r(f.n1, f.n2, l.value, n);
                break;

              case "diode":
                this.d(f.anode, f.cathode, l.area, l.type, n);
                break;

              case "capacitor":
                this.c(f.n1, f.n2, l.value, n);
                break;

              case "inductor":
                break;

              case "voltage source":
                this.v(f.nplus, f.nminus, l.value, n);
                break;

              case "current source":
                this.i(f.nplus, f.nminus, l.value, n);
                break;

              case "opamp":
                this.opamp(f.nplus, f.nminus, f.output, f.gnd, l.A, n);
                break;

              case "nfet":
                this.n(f.D, f.G, f.S, l.W, l.L, n);
                break;

              case "pfet":
                this.p(f.D, f.G, f.S, l.W, l.L, n);
                break;

              case "ground":
                break;

              case "connect":
                break;

              default:
                throw "Unrecognized device type " + k;
            }
        }
        if (!j) throw "Please make at least one connection to ground (node gnd)";
        for (g in h) {
            for (d = g; void 0 !== h[d]; ) d = h[d];
            b = this.node_map[d], void 0 !== b && (this.node_map[g] = b);
        }
        this.find_cmos_gates();
        var o = (this.node_index + 1).toString() + " nodes";
        this.size = 0;
        for (var p in this.counts) o += ", " + this.counts[p].toString() + " " + p, this.size += this.counts[p];
    }, e.prototype.find_cmos_gates = function() {
        var a = {};
        $.each(this.devices, function(b, c) {
            c instanceof u && (void 0 === a[c.d] && (a[c.d] = []), a[c.d].push(c), void 0 === a[c.s] && (a[c.s] = []), 
            a[c.s].push(c));
        });
        var b = [];
        $.each(a, function(a, c) {
            var d = !1, e = !1;
            $.each(c, function(a, b) {
                1 == b.type_sign ? d = !0 : e = !0;
            }), d && e && b.push(a);
        }), this.counts.cmos_gates = b.length;
    }, e.prototype.find_solution = function(a, b) {
        for (var c, d, e, f = this.solution, g = this.rhs, h = [], i = 0, j = !1, l = 0, m = 0; b > m; m += 1) {
            var n;
            for (a.call(this, f, g), e = 0, n = this.N - 1; n >= 0; n -= 1) this.ntypes[n] == v && (e += Math.abs(g[n]));
            if (m > 0 && j === !1 && e > i) {
                for (n = this.N - 1; n >= 0; n -= 1) f[n] -= h[n];
                m -= 1, j = !0;
            } else h = k(this.matrix, g), i > e ? l += 1 : l = 0, l > 10 && (j = !1, l = 0), 
            i = e;
            for ((0 === m || e > c) && (c = e), d = b - 1 > m && e > I + J * c ? !1 : !0, n = this.N - 1; n >= 0; n -= 1) {
                j && this.ntypes[n] == v && (h[n] = h[n] > x ? x : h[n], h[n] = h[n] < -x ? -x : h[n]), 
                f[n] += h[n];
                var o = this.abstol[n] + G * this.soln_max[n];
                Math.abs(h[n]) > o && (d = !1, this.problem_node = n);
            }
            if (d === !0) {
                for (n = this.N - 1; n >= 0; n -= 1) Math.abs(f[n]) > this.soln_max[n] && (this.soln_max[n] = Math.abs(f[n]));
                return m + 1;
            }
        }
        return void 0;
    }, e.prototype.load_dc = function(a, b) {
        g(this.Gl, a, b, -1), i(this.Gl, this.G);
        for (var c = this.devices.length - 1; c >= 0; c -= 1) this.devices[c].load_dc(this, a, b);
        i(this.G, this.matrix);
    }, e.prototype.dc = function() {
        if (this.finalize() === !1) return void 0;
        var a = this.find_solution(e.prototype.load_dc, B);
        if ("undefined" == typeof a) throw this.current_sources.length > 0 ? "Newton Method Failed, do your current sources have a conductive path to ground?" : "Newton Method Failed, it may be your circuit or it may be our simulator.";
        this.diddc = !0, this.result = {};
        for (var b in this.node_map) {
            var c = this.node_map[b];
            this.result[b] = -1 == c ? 0 : this.solution[c];
        }
        for (var d = this.voltage_sources.length - 1; d >= 0; d -= 1) {
            var f = this.voltage_sources[d];
            this.result["I(" + f.name + ")"] = this.solution[f.branch];
        }
        return this.result._network_ = this, this.result;
    }, e.prototype.tran_start = function(a, b, c, d) {
        var e;
        for (this.diddc === !1 ? void 0 === this.dc() && (this.finalized = !1, this.finalize() === !1 && a.finish(void 0)) : this.finalize() === !1 && a.finish(void 0), 
        this.response = new Array(this.N + 1), e = this.N; e >= 0; e -= 1) this.response[e] = [];
        for (this.old3sol = new Array(this.N), this.old3q = new Array(this.N), this.old2sol = new Array(this.N), 
        this.old2q = new Array(this.N), this.oldsol = new Array(this.N), this.oldq = new Array(this.N), 
        this.q = new Array(this.N), this.oldc = new Array(this.N), this.c = new Array(this.N), 
        this.alpha0 = 1, this.alpha1 = 0, this.alpha2 = 0, this.beta0 = new Array(this.N), 
        this.beta1 = new Array(this.N), this.ar = this.algebraic(this.C), this.ltecheck = new Array(this.N), 
        e = this.N; e >= 0; e -= 1) this.ltecheck[e] = 0 === this.ar[e];
        for (var f in this.node_map) {
            var g = this.node_map[f];
            for (e = a.probe_names.length - 1; e >= 0; e -= 1) if (f == a.probe_names[e]) {
                this.ltecheck[g] = !0;
                break;
            }
        }
        var h, i = d - c;
        for (e = this.voltage_sources.length - 1; e >= 0; e -= 1) h = this.voltage_sources[e].src.period, 
        h > 0 && (i = Math.min(i, h));
        for (e = this.current_sources.length - 1; e >= 0; e -= 1) h = this.current_sources[e].src.period, 
        h > 0 && (i = Math.min(i, h));
        for (this.periods = Math.ceil((d - c) / i), this.max_nsteps = 5e4 * this.periods, 
        this.time = c, this.max_step = (d - c) / (this.periods * b), this.min_step = this.max_step / 1e8, 
        this.new_step = this.max_step / 1e6, this.oldt = this.time - this.new_step, this.load_tran(this.solution, this.rhs), 
        e = this.N - 1; e >= 0; e -= 1) this.old3sol[e] = this.solution[e], this.old2sol[e] = this.solution[e], 
        this.oldsol[e] = this.solution[e], this.old3q[e] = this.q[e], this.old2q[e] = this.q[e], 
        this.oldq[e] = this.q[e], this.oldc[e] = this.c[e];
        this.tstart = c, this.tstop = d, this.progress = a, this.step_index = -3, this.tran_steps(new Date().getTime() + a.update_interval);
    }, e.prototype.pick_step = function() {
        for (var a = 1 / E, b = D, c = this.time - this.oldt, d = this.time - this.old2t, e = this.time - this.old3t, f = this.oldt - this.old2t, g = this.oldt - this.old3t, h = this.old2t - this.old3t, i = d * e / (f * g), j = c * e / (-f * h), k = c * d / (g * h), l = .5 * (this.time - this.oldt) / (this.time - this.old3t), m = 0, n = this.N - 1; n >= 0; n -= 1) if (this.ltecheck[n]) {
            var o = i * this.oldsol[n] + j * this.old2sol[n] + k * this.old3sol[n], p = Math.abs(this.solution[n] - o) * l, q = p / (H * (this.abstol[n] + G * this.soln_max[n]));
            m = Math.max(m, q);
        }
        var r, s = 1 / Math.pow(m, 1 / 3);
        return 1 > s ? (s = Math.max(s, a), r = .75 * (this.time - this.oldt) * s, r = Math.max(r, this.min_step)) : (s = Math.min(s, b), 
        r = s > 1.2 ? (this.time - this.oldt) * s / 1.2 : this.time - this.oldt, r = Math.min(r, this.max_step)), 
        r;
    }, e.prototype.load_tran = function(a, b) {
        g(this.Gl, a, this.c, -1), i(this.Gl, this.G);
        for (var c = this.devices.length - 1; c >= 0; c -= 1) this.devices[c].load_tran(this, a, this.c, this.time);
        for (g(this.C, a, this.q, 1), c = this.N - 1; c >= 0; c -= 1) {
            var d = this.alpha0 * this.q[c] + this.alpha1 * this.oldq[c] + this.alpha2 * this.old2q[c];
            b[c] = this.beta0[c] * this.c[c] + this.beta1[c] * this.oldc[c] - d;
        }
        h(this.G, this.C, this.beta0, this.alpha0, this.matrix);
    }, e.prototype.tran_steps = function(a) {
        var b;
        if (!this.progress.stop_requested) for (;this.step_index < this.max_nsteps; ) {
            for (b = this.N - 1; b >= 0; b -= 1) this.step_index >= 0 && this.response[b].push(this.solution[b]), 
            this.oldc[b] = this.c[b], this.old3sol[b] = this.old2sol[b], this.old2sol[b] = this.oldsol[b], 
            this.oldsol[b] = this.solution[b], this.old3q[b] = this.oldq[b], this.old2q[b] = this.oldq[b], 
            this.oldq[b] = this.q[b];
            if (this.step_index < 0) this.old3t = this.old2t - (this.oldt - this.old2t), this.old2t = this.oldt - (this.tstart - this.oldt), 
            this.oldt = this.tstart - (this.time - this.oldt), this.time = this.tstart, this._beta0 = 1, 
            this._beta1 = 0; else {
                if (this.response[this.N].push(this.time), this.old3t = this.old2t, this.old2t = this.oldt, 
                this.oldt = this.time, this.time >= this.tstop) break;
                this.time + this.new_step > this.tstop ? this.time = this.tstop : this.time += this.time + 1.5 * this.new_step > this.tstop ? 2 / 3 * (this.tstop - this.time) : this.new_step, 
                this._beta0 = .5, this._beta1 = .5;
            }
            for (b = this.N - 1; b >= 0; b -= 1) this.beta0[b] = this._beta0 + this.ar[b] * this._beta1, 
            this.beta1[b] = (1 - this.ar[b]) * this._beta1;
            for (;;) {
                if (this.alpha0 = 1 / (this.time - this.oldt), this.alpha1 = -this.alpha0, this.alpha2 = 0, 
                this.time - this.oldt < 1e-4 * this.tstop) for (b = this.N - 1; b >= 0; b -= 1) this.beta0[b] = 1, 
                this.beta1[b] = 0;
                var c = this.find_solution(e.prototype.load_tran, C);
                if (void 0 !== c && (this.step_index <= 0 || this.time - this.oldt < (1 + G) * this.min_step)) {
                    this.step_index > 0 && (this.new_step = D * this.min_step);
                    break;
                }
                if (void 0 === c) this.time = this.oldt + (this.time - this.oldt) / F; else {
                    if (this.new_step = this.pick_step(), !(this.new_step < (1 - G) * (this.time - this.oldt))) break;
                    this.time = this.oldt + this.new_step;
                }
            }
            this.step_index += 1;
            var d = new Date().getTime();
            if (d >= a) {
                var f = Math.round(100 * (this.time - this.tstart) / (this.tstop - this.tstart));
                this.progress.update(f);
                var g = this;
                return void setTimeout(function() {
                    g.tran_steps(d + g.progress.update_interval);
                }, 1);
            }
        }
        this.result = {};
        for (var h in this.node_map) {
            var i = this.node_map[h];
            this.result[h] = -1 == i ? 0 : this.response[i];
        }
        for (b = this.voltage_sources.length - 1; b >= 0; b -= 1) {
            var j = this.voltage_sources[b];
            this.result["I(" + j.name + ")"] = this.response[j.branch];
        }
        this.result._xvalues_ = this.response[this.N], this.result._network_ = this, this.progress.finish(this.result);
    }, e.prototype.ac = function(a, b, c, d) {
        var e;
        if (void 0 === this.dc()) return void 0;
        var g = this.N, h = this.G, i = this.C, j = f(2 * g, 2 * g + 1);
        if (void 0 === this.device_map[d]) throw "AC analysis refers to unknown source " + d;
        this.device_map[d].load_ac(this, this.rhs);
        var k = new Array(2 * g + 1);
        for (e = 2 * g; e >= 0; e -= 1) k[e] = [];
        var m = Math.exp(Math.LN10 / a), n = new Array(g);
        for (e = g - 1; e >= 0; e -= 1) n[e] = 0;
        var o = b;
        for (c *= 1.0001; c >= o; ) {
            var p = 2 * Math.PI * o;
            for (k[2 * g].push(o), e = g - 1; e >= 0; e -= 1) {
                j[e][2 * g] = this.rhs[e], j[e + g][2 * g] = 0;
                for (var q = g - 1; q >= 0; q -= 1) j[e][q] = h[e][q], j[e + g][q + g] = h[e][q], 
                j[e][q + g] = -p * i[e][q], j[e + g][q] = p * i[e][q];
            }
            var r = l(j, null);
            for (e = g - 1; e >= 0; e -= 1) {
                var s = Math.sqrt(r[e] * r[e] + r[e + g] * r[e + g]);
                k[e].push(s);
                var t = 180 * (Math.atan2(r[e + g], r[e]) / Math.PI), u = k[e + g], v = u.length;
                if (v > 1) {
                    var w = t + n[e] - u[v - 1];
                    w > 90 ? n[e] -= 360 : -90 > w && (n[e] += 360);
                }
                k[e + g].push(t + n[e]);
            }
            o *= m;
        }
        this.result = {};
        for (var x in this.node_map) {
            var y = this.node_map[x];
            this.result[x] = {
                magnitude: -1 == y ? 0 : k[y],
                phase: -1 == y ? 0 : k[y + g]
            };
        }
        return this.result._frequencies_ = k[2 * g], this.result._network_ = this, this.result;
    }, e.prototype.add_device = function(a, b) {
        return this.devices.push(a), a.name = b, b && (this.device_map[b] = a), a;
    }, e.prototype.r = function(a, b, c, d) {
        if (0 !== c) {
            var e = new p(a, b, c);
            return this.add_device(e, d);
        }
        return this.v(a, b, "0", d);
    }, e.prototype.d = function(a, b, c, d, e) {
        if (0 !== c) {
            var f = new q(a, b, c, d);
            return this.add_device(f, e);
        }
        return void 0;
    }, e.prototype.c = function(a, b, c, d) {
        var e = new r(a, b, c);
        return this.add_device(e, d);
    }, e.prototype.l = function(a, b, c, d) {
        var e = this.node(void 0, w), f = new s(a, b, e, c);
        return this.add_device(f, d);
    }, e.prototype.v = function(a, b, c, d) {
        var e = this.node(void 0, w), f = new n(a, b, e, c);
        return this.voltage_sources.push(f), this.add_device(f, d);
    }, e.prototype.i = function(a, b, c, d) {
        var e = new o(a, b, c);
        return this.current_sources.push(e), this.add_device(e, d);
    }, e.prototype.opamp = function(a, b, c, d, e, f) {
        var g = this.node(void 0, w), h = new t(a, b, c, d, g, e, f);
        return this.add_device(h, f);
    }, e.prototype.n = function(a, b, c, d, e, f) {
        var g = new u(a, b, c, d, e, f, "n");
        return this.add_device(g, f);
    }, e.prototype.p = function(a, b, c, d, e, f) {
        var g = new u(a, b, c, d, e, f, "p");
        return this.add_device(g, f);
    }, e.prototype.add_two_terminal = function(a, b, c, d) {
        a >= 0 ? (d[a][a] += c, b >= 0 && (d[a][b] -= c, d[b][a] -= c, d[b][b] += c)) : b >= 0 && (d[b][b] += c);
    }, e.prototype.get_two_terminal = function(a, b, c) {
        var d = 0;
        return a >= 0 && (d = c[a]), b >= 0 && (d -= c[b]), d;
    }, e.prototype.add_conductance_l = function(a, b, c) {
        this.add_two_terminal(a, b, c, this.Gl);
    }, e.prototype.add_conductance = function(a, b, c) {
        this.add_two_terminal(a, b, c, this.G);
    }, e.prototype.add_capacitance = function(a, b, c) {
        this.add_two_terminal(a, b, c, this.C);
    }, e.prototype.add_to_Gl = function(a, b, c) {
        a >= 0 && b >= 0 && (this.Gl[a][b] += c);
    }, e.prototype.add_to_G = function(a, b, c) {
        a >= 0 && b >= 0 && (this.G[a][b] += c);
    }, e.prototype.add_to_C = function(a, b, c) {
        a >= 0 && b >= 0 && (this.C[a][b] += c);
    }, e.prototype.add_to_rhs = function(a, b, c) {
        a >= 0 && (c[a] += b);
    }, e.prototype.algebraic = function(a) {
        var b = a.length, c = f(b, b);
        i(a, c);
        for (var d, e = j(c), g = new Array(b), h = 0; b > h; h += 1) {
            for (d = b - 1; d >= 0; d -= 1) c[h][d] = 0;
            if (j(c) == e) g[h] = 1; else {
                for (d = b - 1; d >= 0; d -= 1) c[h][d] = a[h][d];
                g[h] = 0;
            }
        }
        return g;
    }, m.prototype.finalize = function() {}, m.prototype.load_linear = function() {}, 
    m.prototype.load_dc = function() {}, m.prototype.load_tran = function() {}, m.prototype.load_ac = function() {}, 
    n.prototype = new m(), n.prototype.constructor = n, n.prototype.load_linear = function(a) {
        a.add_to_Gl(this.branch, this.npos, 1), a.add_to_Gl(this.branch, this.nneg, -1), 
        a.add_to_Gl(this.npos, this.branch, 1), a.add_to_Gl(this.nneg, this.branch, -1);
    }, n.prototype.load_dc = function(a, b, c) {
        a.add_to_rhs(this.branch, this.src.dc, c);
    }, n.prototype.load_tran = function(a, b, c, d) {
        a.add_to_rhs(this.branch, this.src.value(d), c);
    }, n.prototype.load_ac = function(a, b) {
        a.add_to_rhs(this.branch, 1, b);
    }, o.prototype = new m(), o.prototype.constructor = o, o.prototype.load_linear = function() {}, 
    o.prototype.load_dc = function(a, b, c) {
        var d = this.src.dc;
        a.add_to_rhs(this.npos, -d, c), a.add_to_rhs(this.nneg, d, c);
    }, o.prototype.load_tran = function(a, b, c, d) {
        var e = this.src.value(d);
        a.add_to_rhs(this.npos, -e, c), a.add_to_rhs(this.nneg, e, c);
    }, o.prototype.load_ac = function(a, b) {
        a.add_to_rhs(this.npos, -1, b), a.add_to_rhs(this.nneg, 1, b);
    }, p.prototype = new m(), p.prototype.constructor = p, p.prototype.load_linear = function(a) {
        a.add_conductance_l(this.n1, this.n2, this.g);
    }, p.prototype.load_dc = function() {}, p.prototype.load_tran = function() {}, p.prototype.load_ac = function() {}, 
    q.prototype = new m(), q.prototype.constructor = q, q.prototype.load_linear = function() {}, 
    q.prototype.load_dc = function(a, b, c) {
        var d, e, f = a.get_two_terminal(this.anode, this.cathode, b), g = f / this.vt, h = Math.abs(g), i = h - this.exp_arg_max;
        if (i > 0) {
            var j = 1 + i + .5 * i * i;
            d = this.exp_max * j, e = this.exp_max * (1 + i);
        } else d = Math.exp(h), e = d;
        0 > g && (d = 1 / d, e = d * e * d);
        var k = this.ais * (d - 1), l = this.ais * (e / this.vt);
        a.add_to_rhs(this.anode, -k, c), a.add_to_rhs(this.cathode, k, c), a.add_conductance(this.anode, this.cathode, l);
    }, q.prototype.load_tran = function(a, b, c) {
        this.load_dc(a, b, c);
    }, q.prototype.load_ac = function() {}, r.prototype = new m(), r.prototype.constructor = r, 
    r.prototype.load_linear = function(a) {
        a.add_capacitance(this.n1, this.n2, this.value);
    }, r.prototype.load_dc = function() {}, r.prototype.load_ac = function() {}, r.prototype.load_tran = function() {}, 
    s.prototype = new m(), s.prototype.constructor = s, s.prototype.load_linear = function(a) {
        a.add_to_Gl(this.n1, this.branch, 1), a.add_to_Gl(this.n2, this.branch, -1), a.add_to_Gl(this.branch, this.n1, -1), 
        a.add_to_Gl(this.branch, this.n2, 1), a.add_to_C(this.branch, this.branch, this.value);
    }, s.prototype.load_dc = function() {}, s.prototype.load_ac = function() {}, s.prototype.load_tran = function() {}, 
    t.prototype = new m(), t.prototype.constructor = t, t.prototype.load_linear = function(a) {
        var b = 1 / this.gain;
        a.add_to_Gl(this.no, this.branch, 1), a.add_to_Gl(this.ng, this.branch, -1), a.add_to_Gl(this.branch, this.no, b), 
        a.add_to_Gl(this.branch, this.ng, -b), a.add_to_Gl(this.branch, this.np, -1), a.add_to_Gl(this.branch, this.nn, 1);
    }, t.prototype.load_dc = function() {}, t.prototype.load_ac = function() {}, t.prototype.load_tran = function() {}, 
    u.prototype = new m(), u.prototype.constructor = u, u.prototype.load_linear = function(a) {
        a.add_conductance_l(this.d, this.s, this.g_leak);
        var b = .25 * this.W, c = 1;
        a.add_capacitance(this.d, a.gnd_node(), 2e-15 * b * c + 5e-16 * (b + 2 * c)), a.add_capacitance(this.s, a.gnd_node(), 2e-15 * b * c + 5e-16 * (b + 2 * c)), 
        c = .25 * this.L, a.add_capacitance(this.g, a.gnd_node(), 6e-15 * b * c);
    }, u.prototype.load_dc = function(a, b, c) {
        var d = this.type_sign * a.get_two_terminal(this.d, this.s, b);
        if (0 > d) {
            var e = this.d;
            this.d = this.s, this.s = e, d = this.type_sign * a.get_two_terminal(this.d, this.s, b);
        }
        var f, g, h, i = this.type_sign * a.get_two_terminal(this.g, this.s, b), j = i - this.vt;
        j > 0 && (d > j ? (f = this.beta * (1 + this.lambda * d) * j, g = .5 * this.type_sign * f * j, 
        h = .5 * this.beta * j * j * this.lambda) : (f = this.beta * (1 + this.lambda * d), 
        g = this.type_sign * f * d * (j - .5 * d), h = f * (j - d) + this.beta * this.lambda * d * (j - .5 * d), 
        f *= d), a.add_to_rhs(this.d, -g, c), a.add_to_rhs(this.s, g, c), a.add_conductance(this.d, this.s, h), 
        a.add_to_G(this.s, this.s, f), a.add_to_G(this.d, this.s, -f), a.add_to_G(this.d, this.g, f), 
        a.add_to_G(this.s, this.g, -f));
    }, u.prototype.load_tran = function(a, b, c) {
        this.load_dc(a, b, c);
    }, u.prototype.load_ac = function() {};
    var K = {
        Circuit: e,
        dc_analysis: b,
        ac_analysis: c,
        transient_analysis: d,
        print_netlist: a
    };
    return K;
}(), gatesim = function() {
    function a() {
        return p;
    }
    function b() {
        throw "Sorry, no DC analysis with gate-level simulation";
    }
    function c() {
        throw "Sorry, no AC analysis with gate-level simulation";
    }
    function d(a, b, c, d, e) {
        if (a.length > 0 && void 0 !== b) {
            var g = new f(a, e), h = {};
            h.update_interval = 250, h.finish = function(a) {
                d(void 0, g, a);
            }, h.stop_requested = !1, h.update = function(a) {
                d(a, void 0, void 0) && (h.stop_requested = !0);
            }, g.initialize(h, b);
            try {
                g.simulate(new Date().getTime() + g.progress.update_interval);
            } catch (i) {
                if ("string" != typeof i) throw i;
                h.finish(i);
            }
        }
    }
    function e(a, b, c) {
        function d(a, b, d, e) {
            if (0 == d.length) return e;
            e += "<p><hr><p>", e += "Worst-case t<sub>PD</sub> from " + a + " to " + b + "\n", 
            d.sort(function(a, b) {
                return b.pd_sum - a.pd_sum;
            });
            for (var f = 0; c > f && f < d.length; f += 1) i = d[f], e += "<p>  t<sub>PD</sub> from " + i.get_tpd_source().name + " to " + i.name + " (" + (1e9 * i.pd_sum).toFixed(3) + "ns):", 
            e += " <button onclick=\"$('#detail" + k + '\').toggle()">Details</button>\n<div id="detail' + k + '" style="display:none;">', 
            e += i.describe_tpd(), e += "<br></div>", k += 1;
            return e;
        }
        void 0 === c && (c = 10);
        var e, g = new f(a, b);
        try {
            e = g.get_timing_info();
        } catch (h) {
            return "\n\nOops, timing analysis failed:\n" + h;
        }
        var i, j, k = 0, l = "";
        return $.each(e.clocks, function(a, b) {
            var c = [];
            j = [], $.each(b.fanouts, function(a, d) {
                if (i = d.get_clock_info(b), void 0 !== i) {
                    var e = i.get_tpd_source().node;
                    e == b && j.push(i), !e.is_input() && i.cd_sum < 0 && c.push(i);
                }
            }), l = d(b.name + "↑", b.name + "↑", j, l), c.length > 0 && (l += "<p><hr><p>", 
            l += "Hold-time violations for " + b.name + "↑:\n", $.each(c, function(a, b) {
                l += "\n  tCD from " + b.get_tcd_source().name + " to " + b.cd_link.name + " violates hold time by " + (1e9 * b.cd_sum).toFixed(3) + "ns:\n", 
                l += b.describe_tcd();
            })), j = [], $.each(e.timing, function(a, c) {
                c.get_tpd_source().node == b && c.node.is_output() && j.push(c);
            }), l = d(b.name + "↑", "top-level outputs", j, l);
        }), j = [], $.each(e.timing, function(a, b) {
            b.node.is_output() && !b.get_tpd_source().node.clock && j.push(b);
        }), l = d("inputs", "top-level outputs", j, l);
    }
    function f(a, b) {
        this.N = 0, this.node_map = {}, this.aliases = {}, this.nodes = [], this.devices = [], 
        this.device_map = {}, this.event_queue = new h(), this.options = b, this.debug_level = b.debug || 0, 
        void 0 !== a && this.load_netlist(a, b);
    }
    function g(a, b, c, d) {
        this.time = a, this.type = b, this.node = c, this.v = d;
    }
    function h() {
        this.nodes = [];
    }
    function i(a, b) {
        this.name = a, this.network = b, this.drivers = [], this.driver = void 0, this.fanouts = [], 
        this.capacitance = 0;
    }
    function j(a, b, c, d) {
        this.type = "voltage source", this.network = a, this.name = b, this.output = c, 
        this.vil = a.options.vil || .1, this.vih = a.options.vih || .9;
        var e = Parser.parse_source(d.value);
        if ("sin" == e.fun) throw "Can't use sin() sources in gate-level simulation";
        if ("dc" == e.fun) this.tvpairs = [ 0, e.args[0] ], this.period = 0; else if (this.tvpairs = e.tvpairs, 
        this.period = e.period, 0 !== this.period) {
            this.tvpairs = this.tvpairs.slice(0);
            for (var f = 0; f < e.tvpairs.length; f += 2) this.tvpairs.push(e.tvpairs[f] + this.period), 
            this.tvpairs.push(e.tvpairs[f + 1]);
        }
        this.initial_value = this.tvpairs[1] <= this.vil ? s : this.tvpairs[1] >= this.vih ? t : u, 
        c.add_fanout(this), c.add_driver(this), a.add_component(this);
    }
    function k(a, b, c, d, e, f, g) {
        this.network = a, this.type = b, this.name = c, this.table = d, this.inputs = e, 
        this.output = f, this.properties = g, this.size = g.size || 0, this.lenient = void 0 === g.lenient ? !0 : 0 !== g.lenient, 
        e.length < 2 && (this.lenient = !0), this.cout = g.cout || 0, this.cin = g.cin || 0, 
        this.tcd = g.tcd || 0, this.tpdf = g.tpdf || g.tpd || 0, this.tpdr = g.tpdr || g.tpd || 0, 
        this.tr = g.tr || 0, this.tf = g.tf || 0;
        for (var h = 0; h < e.length; h += 1) e[h].add_fanout(this);
        f.add_driver(this);
        var i = e[0], j = e[1], k = e[2], l = e[3], m = e[4], n = e[5];
        this.logic_eval = 0 === e.length ? function() {
            return d[4];
        } : 1 == e.length ? function() {
            return d[i.v][4];
        } : 2 == e.length ? function() {
            return d[i.v][j.v][4];
        } : 3 == e.length ? function() {
            return d[i.v][j.v][k.v][4];
        } : 4 == e.length ? function() {
            return d[i.v][j.v][k.v][l.v][4];
        } : 5 == e.length ? function() {
            return d[i.v][j.v][k.v][l.v][m.v][4];
        } : 6 == e.length ? function() {
            return "mux4" == b && (i.v >= u || j.v >= u) ? i.v >= u ? j.v >= u ? k.v == l.v && k.v == m.v && k.v == n.v ? k.v : u : j.v == s ? k.v == l.v ? k.v : u : m.v == n.v ? m.v : u : i.v == s ? k.v == m.v ? k.v : u : l.v == n.v ? l.v : u : d[i.v][j.v][k.v][l.v][m.v][n.v][4];
        } : function() {
            for (var a = d, b = 0; b < e.length; b += 1) a = a[e[b].v];
            return a[4];
        }, a.add_component(this);
    }
    function l(a, b, c, d, e) {
        this.network = a, this.name = b, this.type = c, this.size = e.size || 0, this.d = d.d, 
        this.clk = d.clk, this.q = d.q, this.d.add_fanout(this), this.clk.add_fanout(this), 
        this.q.add_driver(this), "dreg" == c && (this.clk.clock = !0), this.gate_open = "dlatch" == c ? t : s, 
        this.gate_closed = "dlatch" == c ? s : t, this.properties = e, this.lenient = void 0 === e.lenient ? !1 : 0 !== e.lenient, 
        this.cout = e.cout || 0, this.cin = e.cin || 0, this.tcd = e.tcd || 0, this.tpdf = e.tpdf || e.tpd || 0, 
        this.tpdr = e.tpdr || e.tpd || 0, this.tr = e.tr || 0, this.tf = e.tf || 0, this.ts = e.ts || 0, 
        this.th = e.th || 0, a.add_component(this);
    }
    function m(a, b, c, d) {
        var e = this;
        if (e.type = "memory", e.network = a, e.name = b, e.width = c.width, void 0 === e.width || e.width <= 0) throw "Memory " + b + " must have width > 0.";
        if (e.nlocations = c.nlocations, void 0 === e.nlocations || e.nlocations <= 0) throw "Memory " + b + " must have > 0 locations.";
        e.contents = c.contents, e.lenient = void 0 === c.lenient ? !0 : 0 !== c.lenient, 
        e.cout = c.cout || d.mem_cout || 0, e.cin = c.cin || d.mem_cin || 1e-13, e.tcd = c.tcd || d.mem_tcd || 2e-10, 
        e.tr = c.tr || d.mem_tr || 1e3, e.tf = c.tf || d.mem_tf || 1e3, e.ts = c.ts || d.mem_ts || 2 * e.tcd, 
        e.th = c.th || d.mem_th || e.tcd, e.nlocations > 1024 ? (e.tpdf = c.tpdf || c.tpd || d.mem_tpdf_dram || d.mem_tpd_dram || 4e-8, 
        e.tpdr = c.tpdr || c.tpd || d.mem_tpdr_dram || d.mem_tpd_dram || 4e-7) : e.nlocations > 128 ? (e.tpdf = c.tpdf || c.tpd || d.mem_tpdf_sram || d.mem_tpd_sram || 2e-9, 
        e.tpdr = c.tpdr || c.tpd || d.mem_tpdr_sram || d.mem_tpd_sram || 2e-9) : (e.tpdf = c.tpdf || c.tpd || d.mem_tpdf_regfile || d.mem_tpd_regfile || 1e-10, 
        e.tpdr = c.tpdr || c.tpd || d.mem_tpdr_regfile || d.mem_tpd_regfile || 1e-10), e.ports = c.ports || [], 
        e.tristate_outputs = [], e.n_read_ports = 0, e.n_write_ports = 0, e.naddr = 0, $.each(e.ports, function(b, c) {
            c.clk.add_fanout(e), c.wen.add_fanout(e), c.oe.add_fanout(e), $.each(c.addr, function(a, b) {
                b.add_fanout(e);
            }), e.naddr = c.addr.length, (c.clk != a.gnd || c.wen != a.gnd) && (e.n_write_ports += 1, 
            c.write_port = !0, $.each(c.data, function(a, b) {
                b.add_fanout(e);
            })), c.oe != a.gnd && (e.n_read_ports += 1, c.read_port = !0, $.each(c.data, function(a, b) {
                b.add_driver(e), -1 == e.tristate_outputs.indexOf(b) && e.tristate_outputs.push(b);
            }));
        }), e.bits = new Uint8Array(e.nlocations * e.width);
        var f;
        f = 1 == e.n_read_ports && 0 == e.n_write_ports ? 0 : e.nlocations <= 1024 ? d.mem_size_sram || 5 : 0, 
        f += e.ports.length * (d.mem_size_access || 1), e.size = e.nlocations * e.width * f, 
        e.size += e.ports.length * e.naddr * (d.mem_size_address_buffer || 20), e.size += e.ports.length * e.naddr * (d.mem_size_address_decoder || 20), 
        e.size += e.n_read_ports * e.width * (d.mem_size_output_buffer || 30), e.size += e.n_write_ports * e.width * (d.mem_size_write_buffer || 20), 
        a.add_component(this);
    }
    function n(a, b, c, d, e) {
        this.name = a, this.node = b, this.device = c, this.cd_sum = 0, this.cd_link = void 0, 
        this.pd_sum = 0, this.pd_link = void 0, this.tcd = d || 0, this.tpd = e || 0;
    }
    function o(a, b, c) {
        for (var d = a.toFixed(c); d.length < b; ) d = " " + d;
        return d;
    }
    var p;
    f.prototype.unalias = function(a) {
        for (;void 0 !== this.aliases[a]; ) a = this.aliases[a];
        return a;
    }, f.prototype.make_alias = function(a, b) {
        if (a = this.unalias(a), b = this.unalias(b), a != b) {
            var c, d, e = -1 == a.indexOf("."), f = -1 == b.indexOf(".");
            "gnd" == a ? (c = a, d = b) : "gnd" == b ? (c = b, d = a) : e && !f ? (c = a, d = b) : f && !e ? (c = b, 
            d = a) : a.length <= b.length ? (c = a, d = b) : (c = b, d = a), this.aliases[d] = c;
        }
    }, f.prototype.node = function(a) {
        a = this.unalias(a);
        var b = this.node_map[a];
        return void 0 === b && (b = new i(a, this), this.node_map[a] = b, this.nodes.push(b), 
        this.N += 1), b;
    }, f.prototype.load_netlist = function(a, b) {
        p = this;
        var c = this;
        c.N = 0, c.node_map = {}, c.aliases = {}, c.nodes = [], c.devices = [], c.device_map = {}, 
        c.size = 0, c.counts = {}, c.sizes = {}, c.gnd = c.node("gnd"), c.devices.push(new j(c, "gnd", c.gnd, {
            name: "gnd",
            value: {
                type: "dc",
                args: []
            }
        })), $.each(a, function(a, b) {
            "ground" == b.type && (c.node_map[b.connections.gnd] = c.gnd);
        }), $.each(a, function(a, b) {
            if ("connect" == b.type) {
                var d = [];
                $.each(b.connections, function(a, b) {
                    d.push(b);
                });
                for (var e = 1; e < d.length; e += 1) c.make_alias(d[0], d[e]);
            }
        }), $.each(a, function(a, d) {
            var e, f = d.type;
            if ("ground" != f && "connect" != f) {
                var g = d.connections, h = d.properties, i = h.name;
                for (var n in g) g[n] = c.node(g[n]);
                if (f in cb) {
                    var o = cb[f], p = [];
                    $.each(o[0], function(a, b) {
                        p.push(g[b]);
                    }), new k(c, f, i, o[2], p, g[o[1]], h);
                } else if ("dreg" == f || "dlatch" == f || "dlatchn" == f) new l(c, i, f, g, h); else if ("memory" == f) $.each(h.ports, function(a, b) {
                    $.each(b.addr, function(a, d) {
                        b.addr[a] = c.node(d);
                    }), $.each(b.data, function(a, d) {
                        b.data[a] = c.node(d);
                    }), b.data_out = b.data.slice(0), b.clk = c.node(b.clk), b.wen = c.node(b.wen), 
                    b.oe = c.node(b.oe);
                }), new m(c, i, h, b); else if ("constant0" == f || "constant1" == f) {
                    if (e = g.z, e.drivers.length > 0) return;
                    e.v = "constant0" == f ? s : t, new k(c, f, i, "constant0" == f ? y : z, [], e, h);
                } else {
                    if ("voltage source" != f) throw "Unrecognized gate: " + f;
                    if (e = g.nplus, e.drivers.length > 0) return;
                    new j(c, i, e, h);
                }
            }
        }), $.each(c.node_map, function(a, b) {
            b.finalize();
        });
    }, f.prototype.report = function() {
        var a = this, b = $("<div></div>"), c = 1e-10 / (1e-12 * a.size * a.time);
        b.append("Benmark: " + c.toFixed(2));
        var d = void 0, e = void 0, f = void 0;
        $.each(a.devices, function(a, b) {
            b.min_setup && (void 0 === d || b.min_setup < d) && (d = b.min_setup, e = b.min_setup_time, 
            f = b.name);
        }), d && b.append("<p>Min observed setup time: " + (1e9 * d).toFixed(2) + "ns at time=" + (1e9 * e).toFixed(0) + "ns for device " + f);
        var g = $('<table class="size-table"><tr><th>Component</th><th>Count</th><th>Size (μ²)</th></tr></table>');
        g.append('<tr><td><i>nodes</i></td><td class="number">' + this.N + "</td><td></td></tr>");
        var h = 0, i = [];
        $.each(a.counts, function(a, b) {
            i.push(a), h += b;
        }), i.sort();
        var j, h = 0;
        return $.each(i, function(b, c) {
            h += a.counts[c], j = a.sizes[c], void 0 === j && (j = ""), g.append("<tr><td>" + c + '</td><td class="number">' + a.counts[c] + '</td><td class="number">' + j + "</td></tr>");
        }), g.append('<tr><td><b>Totals</b></td><td class="number"><b>' + h + '</b></td><td class="number"><b>' + a.size + "</b></td></tr>"), 
        b.append("<p>", g), b;
    }, f.prototype.add_component = function(a) {
        var b = a.type;
        this.devices.push(a), this.counts[b] = (this.counts[b] || 0) + 1, a.name && (this.device_map[a.name] = a), 
        a.size && (this.size += a.size, this.sizes[b] = (this.sizes[b] || 0) + a.size);
    }, f.prototype.initialize = function(a, b) {
        this.progress = a, this.tstop = b, this.event_queue.clear(), this.time = 0;
        var c;
        for (c = 0; c < this.nodes.length; c += 1) this.nodes[c].initialize();
        for (c = 0; c < this.devices.length; c += 1) this.devices[c].initialize();
    }, f.prototype.simulate = function(a) {
        var b = 0;
        if (!this.progress.stop_requested) {
            for (;this.time < this.tstop && !this.event_queue.empty(); ) {
                var c = this.event_queue.pop();
                if (this.time = c.time, c.node.process_event(c), !(++b < 1e3)) {
                    b = 0;
                    var d = new Date().getTime();
                    if (d >= a) {
                        var e = Math.round(100 * this.time / this.tstop);
                        this.progress.update(e);
                        var f = this;
                        return void setTimeout(function() {
                            try {
                                f.simulate(d + f.progress.update_interval);
                            } catch (a) {
                                if ("string" != typeof a) throw a;
                                f.progress.finish(a);
                            }
                        }, 1);
                    }
                }
            }
            this.time = this.tstop;
        }
        this.progress.finish(void 0);
    }, f.prototype.add_event = function(a, b, c, d) {
        var e = new g(a, b, c, d);
        return this.event_queue.push(e), this.debug_level > 2 && console.log("add " + "cp"[b] + " event: " + c.name + "->" + "01XZ"[d] + " @ " + a), 
        e;
    }, f.prototype.remove_event = function(a) {
        this.event_queue.removeItem(a), this.debug_level > 2 && console.log("remove " + "cp"[a.type] + " event: " + a.node.name + "->" + "01XZ"[a.v] + " @ " + a.time);
    }, f.prototype.history = function(a) {
        a = this.unalias(a);
        var b = this.node_map[a];
        return void 0 === b ? void 0 : (b.times[b.times.length - 1] != this.time && (b.times.push(this.time), 
        b.values.push(b.v)), {
            xvalues: b.times,
            yvalues: b.values
        });
    }, f.prototype.get_memory = function(a) {
        var b = this.device_map[a];
        return void 0 !== b && "memory" == b.type ? b.get_contents() : void 0;
    }, f.prototype.result_type = function() {
        return "digital";
    }, f.prototype.node_list = function() {
        var a = [];
        for (var b in this.node_map) a.push(b);
        return a;
    }, f.prototype.get_timing_info = function() {
        var a = [], b = {};
        return $.each(this.node_map, function(c, d) {
            d.clock && a.push(d), b[c] = d.get_timing_info();
        }), {
            clocks: a,
            timing: b
        };
    };
    var q = 0, r = 1;
    h.prototype.assert = function() {
        var a, b, c = this.nodes.length;
        for (a = 0; c > a; a += 1) {
            if (b = 2 * a + 1, c > b && this.nodes[a].time > this.nodes[b].time) throw "heap error 1";
            if (c > b + 1 && this.nodes[a].time > this.nodes[b + 1].time) throw "heap error 2";
        }
    }, h.prototype.cmplt = function(a, b) {
        return a.time < b.time;
    }, h.prototype._siftdown = function(a, b) {
        var c, d, e;
        for (c = this.nodes[b]; b > a && (e = b - 1 >> 1, d = this.nodes[e], this.cmplt(c, d)); ) this.nodes[b] = d, 
        b = e;
        this.nodes[b] = c;
    }, h.prototype._siftup = function(a) {
        var b, c, d, e, f;
        for (c = this.nodes.length, f = a, d = this.nodes[a], b = 2 * a + 1; c > b; ) e = b + 1, 
        c > e && !this.cmplt(this.nodes[b], this.nodes[e]) && (b = e), this.nodes[a] = this.nodes[b], 
        a = b, b = 2 * a + 1;
        this.nodes[a] = d, this._siftdown(f, a);
    }, h.prototype.push = function(a) {
        this.nodes.push(a), this._siftdown(0, this.nodes.length - 1);
    }, h.prototype.pop = function() {
        var a, b;
        return a = this.nodes.pop(), this.nodes.length ? (b = this.nodes[0], this.nodes[0] = a, 
        this._siftup(0)) : b = a, b;
    }, h.prototype.peek = function() {
        return this.nodes[0];
    }, h.prototype.contains = function(a) {
        return -1 !== this.nodes.indexOf(a);
    }, h.prototype.updateItem = function(a) {
        var b = this.nodes.indexOf(a);
        -1 != b && (this._siftdown(0, b), this._siftup(b));
    }, h.prototype.removeItem = function(a) {
        var b = this.nodes.indexOf(a);
        if (-1 != b) {
            var c = this.nodes.pop();
            a !== c && (this.nodes[b] = c, this._siftdown(0, b), this._siftup(b));
        }
    }, h.prototype.clear = function() {
        return this.nodes = [];
    }, h.prototype.empty = function() {
        return 0 === this.nodes.length;
    }, h.prototype.size = function() {
        return this.nodes.length;
    };
    var s = 0, t = 1, u = 2, v = 3, w = 0, x = 0;
    i.prototype.initialize = function() {
        this.v = u, this.times = [ 0 ], this.values = [ u ], this.cd_event = void 0, this.pd_event = void 0, 
        this.clock = !1, this.timing_info = void 0, this.in_progress = !1;
    }, i.prototype.add_fanout = function(a) {
        -1 == this.fanouts.indexOf(a) && this.fanouts.push(a);
    }, i.prototype.add_driver = function(a) {
        this.drivers.push(a);
    }, i.prototype.process_event = function(a) {
        a == this.cd_event ? this.cd_event = void 0 : a == this.pd_event ? this.pd_event = void 0 : console.log("unknown event!", this.name, this.network.time), 
        this.v != a.v && (this.times.push(a.time), this.values.push(a.v)), this.network.debug_level > 0 && console.log(this.name + ": " + "01XZ"[this.v] + "->" + "01XZ"[a.v] + " @ " + a.time + [ " contamination", " propagation" ][a.type]), 
        this.v = a.v;
        for (var b = this.fanouts.length - 1; b >= 0; b -= 1) this.network.debug_level > 1 && console.log("Evaluating (" + "cp"[a.type] + ") " + this.fanouts[b].name + " @ " + a.time), 
        this.fanouts[b].process_event(a, this);
    }, i.prototype.last_event_time = function() {
        return this.times[this.times.length - 1];
    }, i.prototype.finalize = function() {
        if (void 0 !== this.drivers && void 0 === this.driver) {
            var a = this.drivers.length, b = this.fanouts.length;
            if (0 !== a) {
                0 === this.capacitance && (this.capacitance = x + w * (a + b));
                var c, d;
                for (c = 0; a > c; c += 1) this.capacitance += this.drivers[c].capacitance(this);
                for (c = 0; b > c; c += 1) this.capacitance += this.fanouts[c].capacitance(this);
                if (1 == a) return this.driver = this.drivers[0], void (this.drivers = void 0);
                var e = [];
                for (c = 0; a > c; c += 1) {
                    if (d = this.drivers[c], !d.tristate(this)) {
                        for (var f = "Node " + this.name + " connects to more than one non-tristate output.  See devices: \n", g = 0; a > g; g += 1) f += this.drivers[g].name + "\n";
                        throw f;
                    }
                    var h = this.network.node(this.name + "$" + c.toString());
                    h.capacitance = this.capacitance, e.push(h), d.change_output_node(this, h), h.driver = d;
                }
                this.capacitance = 0, this.driver = new k(this.network, "BUS", this.name + "%bus", J, e, this, {}, !0), 
                this.drivers = void 0;
            } else if (b > 0) throw "Node " + this.name + " is not connected to any output.";
        }
    }, i.prototype.c_event = function(a) {
        var b = this.network.time + a;
        if (this.pd_event && this.pd_event.time >= b && (this.network.remove_event(this.pd_event), 
        this.pd_event = void 0), this.cd_event) {
            if (this.cd_event.time <= b) return;
            this.network.remove_event(this.cd_event);
        }
        this.cd_event = this.network.add_event(b, q, this, u);
    }, i.prototype.p_event = function(a, b, c, d) {
        var e = this.network.time + a + c * this.capacitance;
        if (this.pd_event) {
            if (d && this.pd_event.v == b && e >= this.pd_event.time) return;
            this.network.remove_event(this.pd_event);
        }
        this.pd_event = this.network.add_event(e, r, this, b);
    }, i.prototype.is_input = function() {
        return void 0 === this.driver || this.driver instanceof j;
    }, i.prototype.is_output = function() {
        return 0 === this.fanouts.length && void 0 !== this.driver && !(this.driver instanceof j) && -1 == this.name.indexOf(".");
    }, i.prototype.get_timing_info = function() {
        if (void 0 === this.timing_info) if (this.is_input()) this.timing_info = new n(this.name, this); else {
            if (this.in_progress) throw "Combinational cycle detected:\n  " + this.name;
            try {
                this.in_progress = !0, this.timing_info = this.driver.get_timing_info(this), this.in_progress = !1;
            } catch (a) {
                throw this.in_progress = !1, a + "\n  " + this.name;
            }
        }
        return this.timing_info;
    }, j.prototype.change_output_node = function(a, b) {
        this.output == a && (this.output = b);
    }, j.prototype.initialize = function() {
        this.initial_value != u && this.output.p_event(0, this.initial_value, 0, !1);
    }, j.prototype.capacitance = function() {
        return 0;
    }, j.prototype.tristate = function() {
        return !1;
    }, j.prototype.process_event = function(a) {
        var b, c = this.network.time;
        a.type == r && (b = this.next_contamination_time(c), b >= 0 && this.output.c_event(b - c), 
        b = this.next_propagation_time(c), b.time > 0 && this.output.p_event(b.time - c, b.value, 0, !1));
    }, j.prototype.next_contamination_time = function(a) {
        a += 1e-13;
        var b = a, c = 0;
        0 !== this.period && (b = Math.fmod(b, this.period), c = a - b);
        for (var d, e = 0, f = 0, g = this.tvpairs.length, h = 0; g > h; h += 2) {
            var i = this.tvpairs[h], j = this.tvpairs[h + 1];
            if (h > 0 && i >= b) if (f >= this.vih && j < this.vih) {
                if (d = e + (i - e) * (this.vih - f) / (j - f), d > b) return c + d;
            } else if (f <= this.vil && j > this.vil && (d = e + (i - e) * (this.vil - f) / (j - f), 
            d > b)) return c + d;
            e = i, f = j;
        }
        return -1;
    }, j.prototype.next_propagation_time = function(a) {
        a += 1e-13;
        var b = a, c = 0;
        0 !== this.period && (b = Math.fmod(b, this.period), c = a - b);
        for (var d, e = 0, f = 0, g = this.tvpairs.length, h = 0; g > h; h += 2) {
            var i = this.tvpairs[h], j = this.tvpairs[h + 1];
            if (h > 0 && i >= b) if (f < this.vih && j >= this.vih) {
                if (d = e + (i - e) * (this.vih - f) / (j - f), d > b) return {
                    time: c + d,
                    value: t
                };
            } else if (f > this.vil && j <= this.vil && (d = e + (i - e) * (this.vil - f) / (j - f), 
            d > b)) return {
                time: c + d,
                value: s
            };
            e = i, f = j;
        }
        return {
            time: -1
        };
    }, j.prototype.get_clock_info = function() {
        return void 0;
    };
    var y = [];
    y.push(y, y, y, y, 0);
    var z = [];
    z.push(z, z, z, z, 1);
    var A = [];
    A.push(A, A, A, A, 2);
    var B = [];
    B.push(B, B, B, B, 3);
    var C = [ y, z, A, A, 2 ], D = [ C, C, C, C, 2 ], E = [ D, D, D, D, 2 ], F = [ E, E, E, E, 2 ], G = [ y, A, A, A, 2 ], H = [ A, z, A, A, 2 ], I = [ G, H, A, A, 2 ], J = [], K = [], L = [];
    J.push(K, L, A, J, 3), K.push(K, A, A, K, 0), L.push(A, L, A, L, 1);
    var M = [ B, C, A, A, 2 ], N = [];
    N.push(y, N, N, N, 2);
    var O = [];
    O.push(y, O, N, N, 1);
    var P = [];
    P.push(z, P, P, P, 2);
    var Q = [];
    Q.push(z, Q, P, P, 0);
    var R = [];
    R.push(R, z, R, R, 2);
    var S = [];
    S.push(S, z, R, R, 0);
    var T = [];
    T.push(T, y, T, T, 2);
    var U = [];
    U.push(U, y, T, T, 1);
    var V = [], W = [];
    V.push(V, W, A, A, 0), W.push(W, V, A, A, 1);
    var X = [], Y = [];
    X.push(X, Y, A, A, 1), Y.push(Y, X, A, A, 0);
    var Z = [ C, D, I, I, 2 ], _ = [ C, E, I, I, 2 ], ab = [ D, F, I, I, 2 ], bb = [ _, ab, I, I, 2 ], cb = {
        and2: [ [ "a", "b" ], "z", O ],
        and3: [ [ "a", "b", "c" ], "z", O ],
        and4: [ [ "a", "b", "c", "d" ], "z", O ],
        buffer: [ [ "a" ], "z", O ],
        inv: [ [ "a" ], "z", Q ],
        mux2: [ [ "s", "d0", "d1" ], "z", Z ],
        mux4: [ [ "s0", "s1", "d0", "d1", "d2", "d3" ], "z", bb ],
        nand2: [ [ "a", "b" ], "z", Q ],
        nand3: [ [ "a", "b", "c" ], "z", Q ],
        nand4: [ [ "a", "b", "c", "d" ], "z", Q ],
        nor2: [ [ "a", "b" ], "z", U ],
        nor3: [ [ "a", "b", "c" ], "z", U ],
        nor4: [ [ "a", "b", "c", "d" ], "z", U ],
        or2: [ [ "a", "b" ], "z", S ],
        or3: [ [ "a", "b", "c" ], "z", S ],
        or4: [ [ "a", "b", "c", "d" ], "z", S ],
        tristate: [ [ "e", "a" ], "z", M ],
        xor2: [ [ "a", "b" ], "z", V ],
        xnor2: [ [ "a", "b" ], "z", X ]
    };
    k.prototype.change_output_node = function(a, b) {
        this.output == a && (this.output = b);
    }, k.prototype.initialize = function() {
        if (0 === this.inputs.length) {
            var a = this.logic_eval();
            this.output.p_event(0, a, 0, !1);
        }
    }, k.prototype.capacitance = function(a) {
        for (var b = 0, c = 0; c < this.inputs.length; c += 1) this.inputs[c] == a && (b += this.cin);
        return this.output == a && (b += this.cout), b;
    }, k.prototype.tristate = function(a) {
        return this.output == a && this.table == M ? !0 : !1;
    }, k.prototype.describe = function(a) {
        for (var b = [], c = 0; c < this.inputs.length; c += 1) b.push(this.inputs[c].name + "=" + "01XZ".charAt(this.inputs[c].v));
        var d = "01XZ".charAt(this.logic_eval());
        console.log((a || "") + this.name + ":" + this.type + "(" + b.join(",") + ")=" + d + " @ " + (1e9 * this.network.time).toFixed(3)), 
        console.log("    output " + this.output.name + "=" + "01XZ".charAt(this.output.v) + " @ " + (1e9 * this.output.last_event_time()).toFixed(3));
    }, k.prototype.process_event = function(a) {
        var b, c = this.output;
        if (a.type == q) {
            if (this.lenient) if (b = this.logic_eval(), void 0 === c.pd_event) {
                if (void 0 === c.cd_event && b == c.v) return;
            } else if (b == c.pd_event.v) return;
            c.c_event(this.tcd);
        } else if (a.type == r) {
            b = this.logic_eval();
            var d, e;
            b == t ? (e = this.tpdr, d = this.tr) : b == s ? (e = this.tpdf, d = this.tf) : (e = Math.min(this.tpdr, this.tpdf), 
            d = 0), c.p_event(e, b, d, this.lenient);
        }
    }, k.prototype.get_timing_info = function(a) {
        for (var b = this.tpdr + this.tr * a.capacitance, c = this.tpdf + this.tf * a.capacitance, d = new n(a.name, a, this, this.tcd, Math.max(b, c)), e = 0; e < this.inputs.length; e += 1) d.set_delays(this.inputs[e].get_timing_info());
        return d;
    }, k.prototype.get_clock_info = function() {
        return void 0;
    }, l.prototype.change_output_node = function(a, b) {
        this.q == a && (this.q = b);
    }, l.prototype.initialize = function() {
        this.min_setup = void 0, this.min_setup_time = void 0, this.state = u;
    }, l.prototype.capacitance = function(a) {
        var b = 0;
        return this.q == a && (b += this.cout), this.d == a && (b += this.cin), this.clk == a && (b += this.cin), 
        b;
    }, l.prototype.tristate = function() {
        return !1;
    }, l.prototype.process_event = function(a, b) {
        if ("dreg" == this.type) {
            if (a.type != r) return;
            if (this.clk.v == s) this.state = this.d.v; else if (this.clk == b) if (this.clk.v == t) {
                var c = this.network.time, d = this.d.last_event_time();
                if (void 0 !== d && c > 0) {
                    var e = c - d;
                    (void 0 === this.min_setup || e < this.min_setup) && (this.min_setup = e, this.min_setup_time = c);
                }
                this.lenient && this.state == this.q.v || this.q.c_event(this.tcd), this.q.p_event(this.state == s ? this.tpdf : this.tpdr, this.state, this.state == s ? this.tf : this.tr, this.lenient);
            } else this.lenient && this.state == this.d.v || (this.state = u), this.lenient && this.state == this.q.v || this.q.p_event(Math.min(this.tpdf, this.tpdr), u, 0, this.lenient);
        } else {
            var f = this.clk.v == this.gate_closed ? this.state : this.clk.v == this.gate_open ? this.d.v : this.lenient && this.d.v == this.state ? this.state : u;
            if (this.clk.v == this.gate_open && (this.state = f), a.type == q) {
                if (this.lenient) if (void 0 == this.q.pd_event) {
                    if (void 0 == this.q.cd_event && f == this.q.v) return;
                } else if (f == this.q.pd_event.v) return;
                this.q.c_event(this.tcd);
            } else if (a.type == r && (!this.lenient || f != this.q.v || void 0 !== this.q.cd_event || void 0 !== this.q.pd_event)) {
                var g, h;
                f == t ? (h = this.tpdr, g = this.tr) : f == s ? (h = this.tpdf, g = this.tf) : (h = Math.min(this.tpdr, this.tpdf), 
                g = 0), this.q.p_event(h, f, g, this.lenient);
            }
        }
    }, l.prototype.get_timing_info = function(a) {
        var b = this.tpdr + this.tr * a.capacitance, c = this.tpdf + this.tf * a.capacitance, d = new n(a.name, a, this, this.tcd, Math.max(b, c)), e = $.extend({}, this.clk.get_timing_info());
        return e.name = e.name + "↑", d.set_delays(e), "dreg" != this.type && d.set_delays(this.d.get_timing_info()), 
        d;
    }, l.prototype.get_clock_info = function(a) {
        if ("dreg" == this.type) {
            var b = new n(a.name + "↑", a, this, -this.th, this.ts);
            return b.set_delays(this.d.get_timing_info()), b;
        }
        return void 0;
    }, m.prototype.change_output_node = function(a, b) {
        $.each(this.ports, function(c, d) {
            $.each(d.data_out, function(c, e) {
                e == a && (d.data_out[c] = b);
            });
        });
    }, m.prototype.get_contents = function() {
        for (var a = [], b = 0; b < this.nlocations; b += 1) {
            for (var c = 0, d = 0; d < this.width; d += 1) {
                var e = this.bits[b * this.width + (this.width - 1 - d)];
                if (e == u) {
                    c = void 0;
                    break;
                }
                c *= 2, e == t && (c += 1);
            }
            a[b] = c;
        }
        return a;
    }, m.prototype.clear_memory = function() {
        for (var a = this.nlocations * this.width, b = 0; a > b; b += 1) this.bits[b] = u;
    }, m.prototype.initialize = function() {
        if (this.min_setup = void 0, this.min_setup_time = void 0, this.clear_memory(), 
        void 0 !== this.contents) for (var a = Math.min(this.nlocations, this.contents.length), b = 0; a > b; b += 1) for (var c = this.contents[b], d = 0; d < this.width; d += 1, 
        c >>= 1) this.bits[b * this.width + d] = 1 & c;
    }, m.prototype.update_from_node = function(a) {
        var b = this.network.time;
        if (b > 0) {
            var c = a.last_event_time();
            if (void 0 !== c) {
                var d = b - c;
                (void 0 === this.min_setup || d < this.min_setup) && (this.min_setup = d, this.min_setup_time = b);
            }
        }
    }, m.prototype.update_min_setup = function(a) {
        this.update_from_node(a.wen);
        var b;
        for (b = 0; b < this.naddr; b += 1) this.update_from_node(a.addr[b]);
        for (b = 0; b < this.width; b += 1) this.update_from_node(a.data[b]);
    }, m.prototype.address = function(a) {
        for (var b, c, d = 0, e = 0; e < this.naddr; e += 1) b = a.addr[e], c = b.v, c == u || c == v ? d = -1 : d >= 0 && (d *= 2, 
        c == t && (d += 1));
        return d;
    }, m.prototype.active_read_port = function(a, b) {
        return a.read_port ? b == a.oe ? !0 : a.oe.v != s && -1 != a.addr.indexOf(b) ? !0 : !1 : !1;
    }, m.prototype.update_read_port = function(a) {
        for (var b = this.address(a), c = M[a.oe.v], d = 0; d < this.width; d += 1) {
            var e = this.width - 1 - d, f = 0 > b || b >= this.nlocations ? u : this.bits[b * this.width + e];
            f = c[f][4];
            var g, h;
            f == t ? (h = this.tpdr, g = this.tr) : f == s ? (h = this.tpdf, g = this.tf) : f == v ? (h = 0, 
            g = 0) : (h = Math.min(this.tpdr, this.tpdf), g = 0), a.data_out[d].p_event(h, f, g, this.lenient);
        }
    }, m.prototype.location_changed = function(a) {
        for (var b = 0; b < this.ports.length; b += 1) {
            var c = this.ports[b];
            if (c.read_port && c.oe.v != s) {
                var d = this.address(c);
                (0 > a || 0 > d || d == a) && this.update_read_port(c);
            }
        }
    }, m.prototype.active_write_port = function(a, b) {
        return a.write_port ? 0 === this.network.time ? !1 : b == a.clk && a.clk.v != s && a.wen.v != s ? !0 : !1 : !1;
    }, m.prototype.capacitance = function(a) {
        var b = this, c = 0;
        return $.each(b.ports, function(d, e) {
            e.clk == a && (c += b.cin), e.wen == a && (c += b.cin), e.oe == a && (c += b.cin), 
            $.each(e.addr, function(d, e) {
                e == a && (c += b.cin);
            }), $.each(e.data, function(d, f) {
                f == a && ((e.clk != b.network.gnd || e.wen != b.network.gnd) && (c += b.cin), e.oe != b.network.gnd && (c += b.cout));
            });
        }), c;
    }, m.prototype.tristate = function(a) {
        return -1 != this.tristate_outputs.indexOf(a);
    }, m.prototype.process_event = function(a, b) {
        var c, d, e;
        if (a.type == q) {
            for (c = 0; c < this.ports.length; c += 1) if (e = this.ports[c], this.active_read_port(e, b)) for (d = 0; d < this.width; d += 1) e.data[d].c_event(this.tcd);
        } else if (a.type == r) for (c = 0; c < this.ports.length; c += 1) if (e = this.ports[c], 
        this.active_read_port(e, b) && this.update_read_port(e), this.active_write_port(e, b)) {
            var f = this.address(e), g = e.clk.v == t && e.wen.v == t;
            if (0 > f) this.clear_memory(); else if (f < this.nlocations) for (d = 0; d < this.width; d += 1) {
                var h = g ? e.data[d].v : u;
                this.bits[f * this.width + (this.width - 1) - d] = h;
            }
            this.location_changed(f), this.update_min_setup(e);
        }
    }, m.prototype.get_timing_info = function(a) {
        for (var b = this.tpdr + this.tr * a.capacitance, c = this.tpdf + this.tf * a.capacitance, d = new n(a.name, a, this, this.tcd, Math.max(b, c)), e = 0; e < this.ports.length; e += 1) {
            var f = this.ports[e];
            if (f.read_port && -1 != f.data_out.indexOf(a)) {
                d.set_delays(f.oe.get_timing_info());
                for (var g = 0; g < this.naddr; g += 1) d.set_delays(f.addr[g].get_timing_info());
            }
        }
        return d;
    }, m.prototype.get_clock_info = function(a) {
        var b, c, d, e;
        for (c = 0; c < this.ports.length; c += 1) if (e = this.ports[c], e.write_port && e.clk == a) {
            for (void 0 === b && (b = new n(a.name + "↑", a, this, -this.th, this.ts)), b.set_delays(e.wen.get_timing_info()), 
            d = 0; d < this.naddr; d += 1) b.set_delays(e.addr[d].get_timing_info());
            for (d = 0; d < this.width; d += 1) b.set_delays(e.data[d].get_timing_info());
        }
        return b;
    }, n.prototype.get_tcd_source = function() {
        for (var a = this; void 0 !== a.cd_link; ) a = a.cd_link;
        return {
            node: a.node,
            name: a.name
        };
    }, n.prototype.get_tpd_source = function() {
        for (var a = this; void 0 !== a.pd_link; ) a = a.pd_link;
        return {
            node: a.node,
            name: a.name
        };
    }, n.prototype.set_delays = function(a) {
        var b;
        b = a.cd_sum + this.tcd, (void 0 === this.cd_link || b < this.cd_sum) && (this.cd_link = a, 
        this.cd_sum = b), b = a.pd_sum + this.tpd, (void 0 === this.pd_link || b > this.pd_sum) && (this.pd_link = a, 
        this.pd_sum = b);
    }, n.prototype.describe_tpd = function() {
        var a;
        a = void 0 !== this.pd_link ? this.pd_link.describe_tpd() : "";
        var b = void 0 !== this.device ? " [" + this.device.name + " " + this.device.type + "]" : "";
        return a += "    + " + o(1e9 * this.tpd, 6, 3) + "ns = " + o(1e9 * this.pd_sum, 6, 3) + "ns " + this.name + b + "\n";
    }, n.prototype.describe_tcd = function() {
        var a;
        a = void 0 !== this.cd_link ? this.cd_link.describe_tcd() : "";
        var b = void 0 !== this.device ? " [" + this.device.name + "]" : "";
        return a += "    " + (this.tcd < 0 ? "-" : "+"), a += " " + o(1e9 * Math.abs(this.tcd), 6, 3) + "ns = " + o(1e9 * this.cd_sum, 6, 3) + "ns " + this.name + b + "\n";
    };
    var db = {
        dc_analysis: b,
        ac_analysis: c,
        transient_analysis: d,
        timing_analysis: e,
        get_last_network: a
    };
    return db;
}(), Checkoff = function() {
    function a() {
        s = [], t = null, u = null;
    }
    function b(a) {
        s.push(a);
    }
    function c(a) {
        t = a;
    }
    function d(a, b, c) {
        u = a, v = b, w = c;
    }
    function e(a) {
        r = a;
    }
    function f(a) {
        var b = new ModalDialog();
        return b.setTitle("Checkoff Failed!"), b.setContent("<div class='text-error'>" + a + "</div>"), 
        b.addButton("Dismiss", "dismiss"), b;
    }
    function g(a) {
        var b = $.extend({}, a);
        b.given = b.given.replace(/<.*?>/g, ""), b.buffers = JSON.stringify(n()), b.assignment = t.assignment.name, 
        $.post("https://6004.mit.edu/coursewarex/report_error.py", b);
    }
    function h() {
        var a;
        if (!u) return a = new f("No results to verify. Did you run the simulation?"), void a.show();
        if (null === t) return a = new f("No checkoff requested. Did you include the appropriate 'labXcheckoff.jsim' file?"), 
        void a.show();
        var b;
        try {
            k();
        } catch (c) {
            if (!(c instanceof j)) throw c;
            b = c;
        }
        if (void 0 === b) {
            var d = new ModalDialog();
            d.setTitle("Checkoff Succeeded!"), d.setText("Verification succeeded!"), d.addButton("Dismiss", "dismiss"), 
            0 != t.checksum.value && d.addButton("Submit", function() {
                q(d);
            }, "btn-primary"), d.show();
        } else "Verify error" == b.msg ? (a = new ModalDialog(), a.setTitle("Checkoff Failed!"), 
        a.setContent("<p><div class='text-error'>Node value verification error:</div></p><p><table class='table'><tr><td>Node(s):</td><td>" + b.nodes + "</tr><tr><td>Time (ns):</td><td>" + Math.floor(1e9 * b.time) + "</td></tr> <tr><td>Expected:</td><td><tt>" + b.exp + "</tt></td></tr><tr><td>Actual:</td><td><tt>" + b.given + "</tt></td></tr></table></p>"), 
        a.addButton("Dismiss", "dismiss"), a.show(), g(b)) : "Verify memory error" == b.msg ? (a = new ModalDialog(), 
        a.setTitle("Checkoff Failed!"), a.setContent("<p><div class='text-error'>Memory verification error:</div></p><p><table class='table'><tr><td>Memory:</td><td>" + b.nodes + "</tr><tr><td>Location:</td><td>0x" + b.time.toString(16) + "</td></tr> <tr><td>Expected:</td><td><tt>" + b.exp + "</tt></td></tr><tr><td>Actual:</td><td><tt>" + b.given + "</tt></td></tr></table></p>"), 
        a.addButton("Dismiss", "dismiss"), a.show(), g(b)) : (a = new f(b.msg), a.show());
    }
    function i(a, b) {
        for (var c, d = 0, e = a.length - 1; e > d; ) c = d + e >> 1, c == d && (c = e), 
        a[c] <= b ? d = c : e = c - 1;
        return d;
    }
    function j(a, b, c, d, e) {
        this.msg = a, this.time = b, this.nodes = c, this.exp = d, this.given = e;
    }
    function k() {
        var a = 2536038, b = {}, c = [], d = [];
        $.each(s, function(e, f) {
            return "memory" == f.type ? void (a = a + l(f) << 0) : ($.each(f.nodes, function(a, c) {
                var e = u.history(c);
                if (void 0 === e) throw new j("No results for node " + c);
                if (d.push(c), "analog" == u.result_type()) {
                    var f = v.vil || .2, g = v.vih || .8;
                    e.yvalues = e.yvalues.map(function(a) {
                        return f > a ? 0 : a >= g ? 1 : 2;
                    });
                }
                b[c] = e;
            }), void $.each(f.values, function(b, d) {
                var e = 1e-12 * Math.round(1e12 * d.time);
                c.push({
                    time: e,
                    nodes: f.nodes,
                    expected: d.value
                }), a = a + (b + 1) * (Math.floor(1e12 * d.time) + d.value) << 0;
            }));
        }), c.sort(function(a, b) {
            if (a.time != b.time) return a.time - b.time;
            var c = d.indexOf(a.nodes[0]), e = d.indexOf(b.nodes[0]);
            return c - e;
        }), $.each(c, function(a, c) {
            for (var d = c.nodes.map(function(a) {
                var d = b[a];
                if (void 0 === d) return void 0;
                var e = i(d.xvalues, c.time);
                return d.yvalues[e];
            }), e = !1, f = d.length - 1, g = c.expected, h = 0; h < d.length; h += 1) {
                if (d[f - h] != (1 & g)) {
                    e = !0;
                    break;
                }
                g >>= 1;
            }
            if (e) {
                for (var k = [], l = [], m = 0; m < d.length; m += 1) {
                    var n = "01XZ"[d[m]], g = "01"[c.expected >> f - m & 1];
                    k.push(g), l.push(n != g ? '<span class="wrong">' + n + "</span>" : n);
                }
                throw new j("Verify error", c.time, Parser.iterator_notation(c.nodes), k.join(""), l.join(""));
            }
        });
        var e = t.checksum.value;
        if (0 != e && a != e) throw new j("<font size=5>Verification error...</font><p><p>It appears that the checkoff information has been modified in some way.  Please verify that you are using the official checkoff file; contact the course staff if you can't resolve the problem.<p>" + a);
    }
    function l(a) {
        var b = u.get_memory(a.mem_name), c = 0;
        if (void 0 === b) throw new j("Cannot get contents of memory " + a.mem_name);
        for (var d = a.startaddress, e = 0; e < a.contents.length; e += 1) {
            var f = b[d + e];
            if (a.contents[e] != f) {
                var g = 16 == a.display_base ? "0x" : 2 == a.display_base ? "0b" : "";
                throw new j("Verify memory error", d + e, a.mem_name, g + a.contents[e].toString(a.display_base), void 0 !== f ? g + f.toString(a.display_base) : "undefined");
            }
            c += (e + 1) * (d + e + f);
        }
        return c;
    }
    function m() {
        return _.map(w, function(a) {
            if (0 == a.file.indexOf("/shared")) return "";
            var b = "============== source: " + a.file;
            return a.metadata && (b += " metadata: " + JSON.stringify(a.metadata)), b + "\n" + a.content + "\n==============\n";
        }).join("");
    }
    function n() {
        return _.map(w, function(a) {
            return 0 == a.file.indexOf("/shared") ? {} : {
                file: a.file,
                content: a.content,
                metadata: a.metadata
            };
        });
    }
    function o(a) {
        var b = a.inputContent(0), c = a.inputContent(1), d = a.inputContent(2), e = a.find(".advice").map(function(a, b) {
            return $(b).val();
        }), f = [];
        $.each(e, function(a, b) {
            f.push(b);
        }), a.dismiss();
        var g = t.server.name, h = t.checksum.value, i = t.assignment.name, j = function(a, b) {
            var c = new ModalDialog();
            a ? (c.setTitle("Checkoff complete"), c.setContent(b)) : (c.setTitle("Checkoff failed"), 
            c.setContent("There was an error communicating with the server.")), c.addButton("Dismiss", "dismiss"), 
            c.show();
        };
        $.post(g, {
            username: b,
            userpassword: c,
            sender: b,
            pcheckoff: i,
            collaboration: d,
            checksum: h,
            size: u.size,
            counts: JSON.stringify(u.counts || {}),
            figure_of_merit: 1e-10 / (1e-12 * u.size * u.time),
            time: u.time,
            version: $("title").text(),
            advice: JSON.stringify(f),
            circuits: m()
        }).done(function(a) {
            j(!0, a);
        }).fail(function() {
            j(!1);
        });
    }
    function p(a, b) {
        if ("Lab #2" == b) {
            var c = {
                png: "/ssldocs/images/lab2_1.png",
                gates: 24,
                fets: 114
            }, d = {
                png: "/ssldocs/images/lab2_8.png",
                gates: 21,
                fets: 96
            }, e = [ {
                png: "/ssldocs/images/lab2_2.png",
                gates: 42,
                fets: 150
            }, {
                png: "/ssldocs/images/lab2_3.png",
                gates: 27,
                fets: 126
            }, {
                png: "/ssldocs/images/lab2_4.png",
                gates: 33,
                fets: 132
            }, {
                png: "/ssldocs/images/lab2_6.png",
                gates: 36,
                fets: 144
            }, {
                png: "/ssldocs/images/lab2_9.png",
                gates: 36,
                fets: 132
            } ], f = FileSystem.getUserName().charCodeAt(0) % e.length, g = u.counts.nfet + u.counts.pfet, h = $('<div style="font: 14px Geogia,serif;"></div>');
            h.append("Your design has a total of <b>" + g + "</b> mosfets.  For comparison, the graph below shows the number of designs submitted in a previous semester (y-axis) vs. their mosfet count (x-axis)."), 
            h.append('<br><br><img src="/ssldocs/images/lab2_15.jpg">'), h.append("<br><br>Below we will ask you to compare your design with a few other designs submitted previously."), 
            h.append("  First, for reference, here's your JSim code:"), h.append('<br><br><textarea style="font: 12px/1.25 monospace; width:95%;" rows="10" readonly=1>' + w[0].content + "</textarea><br>"), 
            g > c.fets ? (h.append('<br><br><img src="' + c.png + '" style="margin-left: 5px; width:50%; float: right;"></center>'), 
            h.append("<b>Comparison #1:</b> <br><br>If we used the design shown at the right for the FA module,"), 
            h.append(" a 3-bit adder would require only <b>" + c.fets + "</b> mosfets, smaller than your"), 
            h.append(" design by " + (g - c.fets) + " mosfets."), h.append("<br><br>Imagine you're an LA in a future semester of 6.004 and a student"), 
            h.append(" submits a solution like yours.  What advice would you give them"), h.append(" on how to make their solution as good as the one in"), 
            h.append(" the figure to the right?"), h.append('<br style="clear:right;"><br><textarea class="advice" style="font: 12px/1.25 monospace; width:95%;" rows="10">... enter your advice here</textarea>'), 
            h.append('<input type=hidden class="advice" name="example" value="example=expected">')) : (h.append('<br><br><img src="' + e[f].png + '" style="margin-left: 5px; width:50%; float: right;"></center>'), 
            h.append("<b>Comparison #1:</b> <br><br>If we used the design shown at the right for the FA module,"), 
            h.append(" a 3-bit adder would require <b>" + e[f].fets + "</b> mosfets, larger than your"), 
            h.append(" design by " + (e[f].fets - g) + " mosfets."), h.append("<br><br>Imagine you're an LA in a future semester of 6.004 and a student"), 
            h.append(" submits a solution like the shown on the right.  What advice would you give them"), 
            h.append(" on how to make their solution as good as yours?"), h.append('<br style="clear:right;"><br><textarea class="advice" style="font: 12px/1.25 monospace; width:95%;" rows="10">... enter your advice here</textarea>'), 
            h.append('<input type=hidden class="advice" name="example" value="example=' + f + '">')), 
            g > d.fets && (h.append('<br><br><img src="' + d.png + '" style="margin-left: 5px; width:50%; float: right;"></center>'), 
            h.append("<b>Comparison #2:</b> <br><br>If we used the design shown at the right for the FA module,"), 
            h.append(" a 3-bit adder would require only <b>" + d.fets + "</b> mosfets, smaller than your"), 
            h.append(" design by " + (g - d.fets) + " mosfets."), h.append("<br><br>Imagine you're an LA in a future semester of 6.004 and a student"), 
            h.append(" submits a solution like yours.  What advice would you give them"), h.append(" on how to make their solution as good as the one in"), 
            h.append(" the figure to the right?"), h.append('<br style="clear:right;"><br><textarea class="advice" style="font: 12px/1.25 monospace; width:95%;" rows="10">... enter your advice here</textarea>')), 
            h.append("<br><hr><br>To complete your submission, please enter your Athena name, your 6.004"), 
            h.append("online password and list any collaborators."), a.setContent(h), a.noFocus(), 
            a.setWidth("750px");
        }
    }
    function q(a) {
        a.dismiss();
        var b = new ModalDialog();
        b.setTitle("Submit Lab"), p(b, t.assignment.name), b.inputBox({
            label: "Username",
            callback: o
        }), b.inputBox({
            label: "Password",
            type: "password",
            callback: o
        }), b.inputBox({
            label: "Collaborators",
            callback: o
        }), b.addButton("Dismiss", "dismiss"), b.addButton("Submit", function() {
            o(b);
        }, "btn-primary"), b.show();
    }
    var r, s = [], t = null, u = null, v = null, w = [];
    return {
        reset: a,
        setResults: d,
        testResults: h,
        addVerify: b,
        setCheckoffStatement: c,
        setEditor: e
    };
}(), Simulator = function() {
    function a(a, c, d, e, f, g) {
        Parser.parse(a, c, d, function(a) {
            b(a, e, g);
        }, f, !0);
    }
    function b(a, b, c) {
        function d(a, c, d) {
            function e(a) {
                h.hide(), b.prepend('<div class="alert alert-danger">Simulation error: ' + a + '.<button class="close" data-dismiss="alert">&times;</button></div>'), 
                console.log(a.stack);
            }
            if (u.text("Performing Transient Analysis... " + a + "%"), l.tooltip("hide"), d) e(d); else if (c) {
                h.hide(), o = c, Checkoff.setResults(o, r, t);
                try {
                    g(f, c);
                } catch (i) {
                    e(i);
                }
            }
            return k;
        }
        b.empty(), q = b;
        var e = a.netlist, f = a.plots;
        if (m = a.analyses, r = a.options, p = a.plotdefs, s = c, t = a.sources, 0 === e.length) return void b.prepend('<div class="alert alert-danger"> Empty netlist.<button class="close" data-dismiss="alert">&times;</button></div>');
        if (0 === m.length) return void b.prepend('<div class="alert alert-danger"> No analyses requested.<button class="close" data-dismiss="alert">&times;</button></div>');
        if (0 === f.length) return void b.prepend('<div class="alert alert-danger"> No plots requested.<button class="close" data-dismiss="alert">&times;</button></div>');
        var h = $("<div><span></span></br></div>");
        b.append(h), h.hide();
        var k = !1, l = $('<button class="btn btn-danger">Halt</button>');
        l.tooltip({
            title: "Halt Simulation",
            delay: 100,
            container: "body"
        }), l.on("click", function() {
            k = !0;
        }), h.append(l);
        try {
            switch (n = m[0], n.type) {
              case "tran":
                h.show();
                var u = h.find("span");
                try {
                    "device" == s ? cktsim.transient_analysis(e, n.parameters.tstop, [], d, r) : gatesim.transient_analysis(e, n.parameters.tstop, [], d, r);
                } catch (v) {
                    h.hide(), b.prepend('<div class="alert alert-danger">Simulation error: ' + v + '.<button class="close" data-dismiss="alert">&times;</button></div>'), 
                    console.log(v.stack);
                }
                break;

              case "ac":
                if ("device" == s) try {
                    o = cktsim.ac_analysis(e, n.parameters.fstart, n.parameters.fstop, n.parameters.ac_source_name, r), 
                    i(f);
                } catch (v) {
                    b.prepend('<div class="alert alert-danger">Simulation error: ' + v + '.<button class="close" data-dismiss="alert">&times;</button></div>'), 
                    console.log(v.stack);
                } else b.prepend('<div class="alert alert-danger">No AC analysis in gate-level simulation.<button class="close" data-dismiss="alert">&times;</button></div>');
                break;

              case "dc":
                if ("device" == s) try {
                    o = cktsim.dc_analysis(e, n.parameters.sweep1, n.parameters.sweep2, r), j(f);
                } catch (v) {
                    b.prepend('<div class="alert alert-danger">Simulation error: ' + v + '.<button class="close" data-dismiss="alert">&times;</button></div>'), 
                    console.log(v.stack);
                } else b.prepend('<div class="alert alert-danger">No DC analysis in gate-level simulation.<button class="close" data-dismiss="alert">&times;</button></div>');
            }
        } catch (v) {
            throw new Parser.CustomError(v, n.token);
        }
    }
    function c(a) {
        var b = $('<div class="alert alert-danger">' + a + '<button class="close" type="button" data-dismiss="alert">&times;                    </button></div>');
        return b;
    }
    function d(a, b, c) {
        return b || (b = .6), c || (c = 2.7), b > a ? "0" : a > c ? "1" : "X";
    }
    function e(a, b, c) {
        for (var e = 0; e < a.length; e += 1) a[e] = d(a[e], b, c);
        for (var f = []; a.length > 0; ) f.unshift(a.splice(-4, 4));
        for (var g = 0; g < f.length; g += 1) if (-1 != f[g].indexOf("X")) f[g] = "X"; else {
            var h = f[g].join("");
            h = parseInt(h, 2).toString(16), f[g] = h;
        }
        return "0x" + f.join("").toUpperCase();
    }
    function f() {
        var a = $("#simulation-pane");
        a.height($("#editor-pane").height()), $(".timing-analysis").height(a.height());
        var b = $(".plot-container");
        b.length > 0 && b[0].resize(b[0], a.width(), a.height());
    }
    function g(a, b) {
        function d(a) {
            for (var d = {
                xvalues: [],
                yvalues: [],
                name: [],
                color: [],
                xunits: "s",
                yunits: "gate" == s ? "" : "V",
                type: []
            }, e = 0; e < a.length; e += 1) {
                var f = a[e], g = b.history(f);
                if (void 0 === g) return void q.prepend(c("No values for " + f));
                d.xvalues.push(g.xvalues), d.yvalues.push(g.yvalues), d.name.push(f), d.color.push(u[e % u.length]), 
                f.length > 2 && "I" == f[0] && "(" == f[1] && (d.yunits = "A"), d.type.push("gate" == s ? "digital" : "analog");
            }
            return d.xvalues.length > 0 ? d : void 0;
        }
        function e(a) {
            $.each(a, function(a, b) {
                var c = d(b.args);
                if (void 0 !== c) {
                    var e = b.type;
                    if (void 0 !== e) {
                        var f, h, i, j, k, l, m, n, o, q, s = [], t = [], u = r.vil || .2, v = r.vih || .8, w = c.xvalues.length;
                        for (h = 0; w > h; h += 1) {
                            for (m = c.xvalues[h], n = c.yvalues[h], o = m.length, q = c.type[h], f = 0, l = void 0, 
                            i = 0; o > i; i += 1) if (j = m[i], k = n[i], "analog" == q && (k = u >= k ? 0 : k >= v ? 1 : 2), 
                            i == o - 1 || k != l) {
                                for (;f < s.length && !(s[f] >= j); ) t[f][h] = l, f += 1;
                                if (s[f] == j) t[f][h] = k; else {
                                    var x;
                                    x = f > 0 ? t[f - 1].slice(0) : new Array(), x[h] = k, s.splice(f, 0, j), t.splice(f, 0, x);
                                }
                                l = k;
                            }
                            for (;f < s.length; ) t[f][h] = l, f += 1;
                        }
                        for (i = 0; i < t.length; i += 1) {
                            for (n = t[i], k = 0, h = 0; w > h; h += 1) if (f = n[h], 0 === f || 1 == f) k = 2 * k + f; else {
                                if (3 != f) {
                                    k = void 0;
                                    break;
                                }
                                k = -1;
                            }
                            if (void 0 !== k) if (0 > k) k = -1; else if (e in p) {
                                var y = p[e][k];
                                k = y ? y : "0x" + ("0000000000000000" + k.toString(16)).substr(-Math.ceil(w / 4));
                            } else {
                                if ("L" != e) throw "No definition for plot function " + e;
                                k = "0x" + ("0000000000000000" + k.toString(16)).substr(-Math.ceil(w / 4));
                            }
                            t[i] = k;
                        }
                        var z = Parser.iterator_notation(b.args);
                        c.xvalues = [ s ], c.yvalues = [ t ], c.type = [ "string" ], c.yunits = "", c.name = [ e + "(" + z.join(",") + ")" ];
                    }
                    g.push(c);
                }
            });
        }
        q.empty();
        var g = [];
        if ($.each(a, function(a, b) {
            e(b);
        }), g.add_plot = function(a) {
            try {
                Parser.parse_plot(a, function(a) {
                    if (a) {
                        if (a.length > 1) {
                            var b = [ {
                                type: "L",
                                args: []
                            } ];
                            $.each(a, function(a, c) {
                                b[0].args.push(c.args[0]);
                            }), a = b;
                        }
                        try {
                            e(a);
                        } catch (d) {
                            q.prepend(c("Can't plot node: " + d));
                        }
                    }
                });
            } catch (b) {
                q.prepend(c("Can't plot node: " + b));
            }
        }, 0 !== g.length) {
            var i = plot.graph(g);
            if (q.append(i), b.report) {
                var j = $('<button style="margin-left:10px;">Stats</button>');
                $(".plot-toolbar").append(j), j.on("click", function() {
                    h(b);
                });
            }
            f();
        }
    }
    function h(a) {
        if (a.report) {
            var b = new ModalDialog();
            b.setTitle("Simulation Results"), b.setContent(a.report()), b.show();
        }
    }
    function i(a) {
        var b = o;
        if (void 0 === b) return void q.prepend('<div class="alert alert-danger">No results from the simulation..<button class="close" data-dismiss="alert">&times;</button></div>');
        var c = b._frequencies_.map(function(a) {
            return Math.log(a) / Math.LN10;
        }), d = [];
        if ($.each(a, function(a, e) {
            var f = {
                xvalues: [],
                yvalues: [],
                name: [],
                color: [],
                type: [],
                xunits: "",
                xlabel: "Frequency (log Hz)",
                yunits: "dB",
                ylabel: "Magnitude (dB)"
            }, g = {
                xvalues: [],
                yvalues: [],
                name: [],
                color: [],
                type: [],
                xunits: "",
                xlabel: "Frequency (log Hz)",
                yunits: "°",
                ylabel: "Phase (deg)"
            };
            d.push(f), d.push(g), $.each(e, function(a, d) {
                var e = d.args[0];
                if (void 0 === b[e] || 0 === b[e].magnitude || 0 === b[e].phase) throw "No values to plot for node " + e;
                f.xvalues.push(c), f.yvalues.push(b[e].magnitude.map(function(a) {
                    return 20 * Math.log(a) / Math.LN10;
                })), f.name.push(e), f.color.push(u[a % u.length]), f.type.push("analog"), g.xvalues.push(c), 
                g.yvalues.push(b[e].phase), g.name.push(e), g.color.push(u[a % u.length]), g.type.push("analog");
            });
        }), 0 !== d.length) {
            var e = plot.graph(d);
            q.empty(), q.append(e), f();
        }
    }
    function j(a) {
        var b = o;
        if (void 0 === b) return void q.prepend('<div class="alert alert-danger">No results from the simulation..<button class="close" data-dismiss="alert">&times;</button></div>');
        var c = n, d = c.parameters.sweep1, e = c.parameters.sweep2;
        if (void 0 !== d.source) {
            var g = [];
            if ($.each(a, function(a, c) {
                var d = {
                    xvalues: [],
                    yvalues: [],
                    name: [],
                    color: [],
                    xunits: "V",
                    yunits: "",
                    type: []
                };
                g.push(d), $.each(c, function(a, c) {
                    var f = c.args[0];
                    "I" == c.type && (f = "I(" + f + ")");
                    for (var g = 0; ;) {
                        var h, i, j;
                        if (void 0 === e.source ? (h = b[f], i = b._sweep1_) : (h = b[g][f], i = b[g]._sweep1_, 
                        j = b[g]._sweep2_, g += 1), void 0 === h) throw "No values to plot for node " + f;
                        var k = f.length > 2 && "I" == f[0] && "(" == f[1], l = k ? f : "Node " + f, m = u[a % u.length];
                        if (void 0 !== e.source && (l += " with " + e.source + "=" + plot.engineering_notation(j, 2), 
                        m = u[g % u.length]), d.yunits = k ? "A" : "V", d.name.push(l), d.color.push(m), 
                        d.type.push("analog"), d.xvalues.push(i), d.yvalues.push(h), void 0 === e.source || g >= b.length) break;
                    }
                });
            }), 0 !== g.length) {
                var h = plot.graph(g);
                q.empty(), q.append(h), f();
            }
        }
    }
    function k(a, b, c, d, e) {
        Parser.parse(a, b, c, function(a) {
            l(c, a, d);
        }, e, !0);
    }
    function l(a, b, c) {
        c.empty(), q = c;
        var d = b.netlist;
        if (r = b.options, 0 === d.length) return void c.prepend('<div class="alert alert-danger"> Empty netlist.<button class="close" data-dismiss="alert">&times;</button></div>');
        try {
            var e = gatesim.timing_analysis(d, r), g = "<b>Timing analysis for " + a + " at " + new Date().toTimeString() + "</b>";
            c.prepend($('<div class="timing-analysis"></div>').append(g, e));
        } catch (h) {
            return void c.prepend('<div class="alert alert-danger">' + h + '<button class="close" data-dismiss="alert">&times;</button></div>');
        }
        f();
    }
    var m, n, o, p, q, r, s, t;
    $(window).resize(f);
    var u = [ "#268bd2", "#dc322f", "#859900", "#b58900", "#6c71c4", "#d33682", "#2aa198" ];
    return {
        simulate: a,
        hex_logic: e,
        resize: f,
        timing_analysis: k
    };
}(), plot = function() {
    function a(a, b, c) {
        var d, e = Math.log((b - a) / Math.max(1, c)) / Math.LN10, f = Math.floor(e), g = Math.pow(10, e - f);
        d = g >= 4.99 ? 5 : g >= 1.99 ? 2 : 1, d *= Math.pow(10, f);
        var h = Math.floor(a / d) * d;
        return a > h && (h += d), [ h, d ];
    }
    function b(a) {
        function b(b, d) {
            a.sel0 = void 0, void 0 === d && (d = a[0].left);
            var e = a[0], f = e.datax(d), g = f - (d - e.left) / e.wplot * b;
            a.xstart = Math.max(a.xmin, g), a.xend = a.xstart + b, a.xend > a.xmax && (a.xstart = Math.max(a.xmin, a.xstart - (a.xend - a.xmax)), 
            a.xend = a.xmax), c(h[0], h.width(), h.height());
        }
        function f(d) {
            d.dataseries = a, $.each(d.xvalues, function(b, c) {
                (void 0 === a.xmin || c[0] < a.xmin) && (a.xmin = c[0]), (void 0 === a.xmax || c[c.length - 1] > a.xmax) && (a.xmax = c[c.length - 1]);
            });
            var f, i;
            if ($.each(d.yvalues, function(a, b) {
                "analog" == d.type[a] && $.each(b, function(a, b) {
                    (void 0 === f || f > b) && (f = b), (void 0 === i || b > i) && (i = b);
                });
            }), void 0 === f && (f = 0, i = 1), f == i) 0 === f ? (f = -.5, i = .5) : (f = f > 0 ? .9 * f : 1.1 * f, 
            i = i > 0 ? 1.1 * i : .9 * i); else {
                var j = .2 * (i - f);
                f -= j, i += j;
            }
            d.ymin = f, d.ymax = i, d.canvas = $('<canvas class="plot-canvas"></canvas>'), d.canvas[0].plot_dataset = d, 
            d.canvas.on("click", function(b) {
                var e = d.canvas.offset(), f = b.pageX - e.left, g = b.pageY - e.top;
                f >= 5.5 && 15.5 >= f && g >= 5.5 && 15.5 >= g && (a.splice(a.indexOf(d), 1), d.canvas.remove(), 
                c(h[0], h.width(), h.height()));
            }), d.canvas.on("dblclick", function(a) {
                var c = d.canvas.offset(), e = a.pageX - c.left, f = a.pageY - c.top;
                if (e >= d.left && e <= d.left + d.wplot && f >= d.top && f <= d.top + d.hplot) {
                    var g = d.dataseries.xend - d.dataseries.xstart;
                    a.shiftKey ? b(2 * g, e) : b(g / 2, e);
                }
            }), d.canvas.on("mouseenter", function() {
                d.canvas.focus();
            }), d.canvas.on("mouseleave", function() {
                d.canvas.blur();
            }), d.canvas.on("keypress", function(a) {
                if (37 == a.which) g(1); else {
                    if (39 != a.which) return;
                    g(-1);
                }
                a.prevent_default();
            }), d.canvas.on("mousewheel", function(a) {
                var b = d.canvas.offset(), c = a.pageX - b.left, e = a.pageY - b.top;
                c >= d.left && c <= d.left + d.wplot && e >= d.top && e <= d.top + d.hplot && (a.preventDefault(), 
                g(a.originalEvent.wheelDelta > 0 ? -1 : 1));
            }), d.canvas.on("mousedown", function(b) {
                var c = d.canvas.offset(), f = b.pageX - c.left, g = b.pageY - c.top;
                f >= d.left && f <= d.left + d.wplot && g >= d.top && g <= d.top + d.hplot && (a.sel0 = a.cursor, 
                a.sel1 = void 0, a.sel = !0), $(document).on("mouseup", function() {
                    $(document).unbind("mouseup"), a.sel = void 0, e(a);
                });
            }), d.canvas.on("mousemove", function(b) {
                var c = d.canvas.offset(), f = b.pageX - c.left, g = b.pageY - c.top;
                f >= d.left && f <= d.left + d.wplot && g >= d.top && g <= d.top + d.hplot ? (a.cursor = Math.floor(f) + .5, 
                a.sel && (a.sel1 = a.cursor)) : a.cursor = void 0, e(a);
            }), d.bg_image = $("<canvas></canvas>");
            var k = d.canvas[0].getContext("2d"), l = window.devicePixelRatio || 1, m = k.webkitBackingStorePixelRatio || k.mozBackingStorePixelRatio || k.msBackingStorePixelRatio || k.oBackingStorePixelRatio || k.backingStorePixelRatio || 1;
            d.pixelRatio = l / m, d.canvas.insertBefore(h.find(".plot-scrollbar-wrapper"));
        }
        function g(b) {
            if (!s.is(":hidden")) {
                var c = (a.xmax - a.xmin) / t.width(), f = a.xend - a.xstart;
                a.xstart = Math.max(a.xmin, a.xstart + b * c), a.xend = a.xstart + f, a.xend > a.xmax && (a.xend = a.xmax, 
                a.xstart = a.xend - f), s.css("margin-left", (a.xstart - a.xmin) / c), $.each(a, function(a, b) {
                    d(b);
                }), e(a);
            }
        }
        var h = $('<div class="plot-container"></div>');
        h[0].dataseries = a, a.container = h[0];
        var i = $('<div class="plot-toolbar"></div>'), j = $('<img class="plot-tool" id="zoom">').attr("src", o), k = $('<img class="plot-tool plot-tool-enabled" id="zoomin">').attr("src", p), l = $('<img class="plot-tool" id="zoomout">').attr("src", q), m = $('<img class="plot-tool" id="zoomsel">').attr("src", r);
        if (i.append(j, k, l, m), a.add_plot) {
            i.append('<div class="plot-tool-spacer"></div>Add plot: ');
            var n = $('<input type="text" size="20" style="margin-bottom:0" id="add-plot">');
            i.append(n), n.on("keypress", function(b) {
                13 == b.which && (a.add_plot(n.val()), $.each(a, function(a, b) {
                    void 0 === b.dataseries && f(b);
                }), c(h[0], h.width(), h.height()));
            });
        }
        h.append(i), h.append('<div class="plot-scrollbar-wrapper"><div class="plot-scrollbar"><div class="plot-scrollbar-thumb"></div></div></div>'), 
        j.on("click", function() {
            j.hasClass("plot-tool-enabled") && (a.sel0 = void 0, a.xstart = a.xmin, a.xend = a.xmax, 
            c(h[0], h.width(), h.height()));
        }), k.on("click", function() {
            k.hasClass("plot-tool-enabled") && b((a.xend - a.xstart) / 2);
        }), l.on("click", function() {
            l.hasClass("plot-tool-enabled") && b(2 * (a.xend - a.xstart));
        }), m.on("click", function() {
            if (m.hasClass("plot-tool-enabled") && a.sel0 && a.sel1) {
                var b = a[0].datax(a.sel0), d = a[0].datax(a.sel1);
                a.xstart = Math.min(b, d), a.xend = Math.max(b, d), a.sel0 = void 0, a.sel1 = void 0, 
                c(h[0], h.width(), h.height());
            }
        }), $.each(a, function(a, b) {
            f(b);
        }), a.xstart = a.xmin, a.xend = a.xmax, a.cursor = void 0;
        var s = h.find(".plot-scrollbar-thumb"), t = h.find(".plot-scrollbar");
        return s.on("mousedown", function(a) {
            var b = a.pageX;
            $(document).on("mousemove", function(a) {
                g(a.pageX - b), b = a.pageX;
            }), $(document).on("mouseup", function() {
                $(document).unbind("mousemove"), $(document).unbind("mouseup");
            });
        }), h[0].resize = c, c(h[0], 400, 300), h[0];
    }
    function c(a, b, c) {
        var f = a.dataseries, g = 55.5, h = 19.5, i = 5.5, j = 15.5;
        b = Math.max(150 + g + h, b);
        var k = Math.max(30 + i + j, Math.floor((c - 60) / f.length));
        $(a).width(b), $(a).height(c), $.each(f, function(a, c) {
            c.canvas.width(b), c.canvas.height(k), c.canvas[0].width = b * c.pixelRatio, c.canvas[0].height = k * c.pixelRatio, 
            c.canvas[0].getContext("2d").scale(c.pixelRatio, c.pixelRatio), c.bg_image[0].width = b * c.pixelRatio, 
            c.bg_image[0].height = k * c.pixelRatio, c.bg_image[0].getContext("2d").scale(c.pixelRatio, c.pixelRatio), 
            void 0 !== c.ylabel && (g = 70.5), void 0 !== c.xlabel && (j = 35.5);
        }), $(a).find(".plot-scrollbar").css("margin-left", g).css("margin-right", h);
        var l = b - g - h, m = k - i - j, n = (f.xend - f.xstart) / l;
        $.each(f, function(a, b) {
            var c = (b.ymax - b.ymin) / m;
            b.plotx = function(a) {
                return (a - f.xstart) / n + g;
            }, b.ploty = function(a) {
                return i + (m - (a - b.ymin) / c);
            }, b.datax = function(a) {
                return (a - g) * n + f.xstart;
            }, b.left = g, b.top = i, b.wplot = l, b.hplot = m, d(b);
        }), e(f);
        var o = f.xstart == f.xmin && f.xend == f.xmax;
        if ($(a).find("#zoom").toggleClass("plot-tool-enabled", !o), $(a).find("#zoomout").toggleClass("plot-tool-enabled", !o), 
        $(a).find(".plot-scrollbar-thumb").toggle(!o), !o) {
            var p = $(a).find(".plot-scrollbar-thumb"), q = (f.xmax - f.xmin) / l, r = (f.xend - f.xstart) / q, s = (f.xstart - f.xmin) / q;
            p.css("width", r), p.css("margin-left", s);
        }
    }
    function d(b) {
        var c = b.dataseries.xstart, d = b.dataseries.xend, e = a(c, d, b.wplot / 100);
        e.push(d);
        var i = b.bg_image[0].getContext("2d");
        i.clearRect(0, 0, b.bg_image[0].width, b.bg_image[0].height), i.fillStyle = j, i.fillRect(b.left, b.top, b.wplot, b.hplot), 
        i.strokeStyle = k, i.fillStyle = h, i.font = l, i.textAlign = "center", i.textBaseline = "top";
        var o, p, q = b.xunits || "";
        for (o = e[0]; o < e[2]; o += e[1]) p = Math.floor(b.plotx(o)) + .5, i.beginPath(), 
        i.moveTo(p, b.top), i.lineTo(p, b.top + b.hplot), i.stroke(), i.fillText(g(o, 2) + q, p, b.top + b.hplot);
        var r = a(b.ymin, b.ymax, b.hplot / 100);
        for (i.textAlign = "right", i.textBaseline = "middle", o = r[0]; o < b.ymax; o += r[1]) p = Math.floor(b.ploty(o)) + .5, 
        i.beginPath(), i.moveTo(b.left, p), i.lineTo(b.left + b.wplot, p), i.stroke(), i.fillText(g(o, 2) + b.yunits, b.left - 2, p);
        i.font = m, b.xlabel && (i.textAlign = "center", i.textBaseline = "bottom", i.fillText(b.xlabel, b.left + b.wplot / 2, b.bg_image[0].height - 5)), 
        b.ylabel && (i.save(), i.textAlign = "center", i.textBaseline = "top", i.translate(10, b.top + b.hplot / 2), 
        i.rotate(-Math.PI / 2), i.fillText(b.ylabel, 0, 0), i.restore()), i.save(), i.beginPath(), 
        i.rect(b.left, b.top, b.wplot, b.hplot), i.clip();
        for (var s = 0; s < b.xvalues.length; s += 1) {
            var t, u, v, w, x = b.xvalues[s], y = b.yvalues[s], z = f(x, c), A = x[z];
            if (i.strokeStyle = b.color[s] || "#268bd2", i.fillStyle = i.strokeStyle, i.lineWidth = 2, 
            "analog" == b.type[s]) {
                for (t = b.plotx(A), u = b.ploty(y[z]), i.beginPath(), i.moveTo(t, u); d >= A && (z += 1, 
                !(z > x.length)) && (A = x[z], void 0 !== A); ) {
                    var B = b.plotx(A), C = b.ploty(y[z]);
                    i.lineTo(B, C), t = B, u = C, z % 100 == 99 && (i.stroke(), i.beginPath(), i.moveTo(t, u));
                }
                i.stroke();
            } else if ("digital" == b.type[s]) {
                v = b.ploty(0), w = b.ploty(1);
                var D = (v + w) / 2;
                for (t = b.plotx(A), u = y[z], i.beginPath(); d >= A && (z += 1, !(z > x.length)) && (A = x[z], 
                void 0 !== A); ) {
                    var B = b.plotx(A);
                    2 != u ? (u = 0 == u ? v : 1 == u ? w : D, i.moveTo(t, u), i.lineTo(B, u)) : i.rect(t, v, B - t, w - v), 
                    t = B, u = y[z], z % 100 == 99 && (i.stroke(), i.fill(), i.beginPath());
                }
                i.stroke(), i.fill();
            } else if ("string" == b.type[s]) {
                v = b.ploty(0), w = b.ploty(1);
                var E, F = (v + w) / 2;
                for (i.font = n, i.lineWidth = 1, i.textAlign = "center", i.textBaseline = "middle", 
                t = b.plotx(A), u = y[z]; d >= A && (z += 1, !(z > x.length)) && (A = x[z], void 0 !== A); ) {
                    var B = b.plotx(A);
                    if ("number" == typeof u) i.beginPath(), i.moveTo(t, F), i.lineTo(B, F), i.stroke(); else if (i.strokeRect(t, v, B - t, w - v), 
                    void 0 === u) i.fillRect(t, v, B - t, w - v); else {
                        E = i.measureText(u).width;
                        var G = Math.max(b.left, t), H = Math.min(b.left + b.wplot, B);
                        H - G > E && i.fillText(u, (G + H) / 2, F);
                    }
                    t = B, u = y[z];
                }
            }
        }
        i.restore(), i.lineWidth = 1, i.strokeStyle = h, i.strokeRect(b.left, b.top, b.wplot, b.hplot), 
        i.strokeRect(5.5, 5.5, 10, 10), i.beginPath(), i.moveTo(7.5, 7.5), i.lineTo(13.5, 13.5), 
        i.moveTo(13.5, 7.5), i.lineTo(7.5, 13.5), i.stroke();
        var I = b.left, J = b.top;
        b.legend_right = [], b.legend_top = [];
        for (var s = 0; s < b.xvalues.length; s += 1) {
            var E = i.measureText(b.name[s]).width;
            i.globalAlpha = .7, i.fillStyle = j, i.fillRect(I, J, E + 30, 20), i.globalAlpha = 1, 
            i.fillStyle = b.color[s], i.fillRect(I + 5, J + 5, 10, 10), i.strokeRect(I + 5, J + 5, 10, 10), 
            i.fillStyle = h, i.textAlign = "left", i.textBaseline = "bottom", i.fillText(b.name[s], I + 20, J + 18), 
            b.legend_right.push(I + 20 + E), b.legend_top.push(J), J += 15;
        }
    }
    function e(a) {
        $(a.container).find("#zoomsel").toggleClass("plot-tool-enabled", void 0 !== a.sel0 && void 0 !== a.sel1), 
        $.each(a, function(b, c) {
            var d = c.canvas[0].getContext("2d");
            if (d.clearRect(0, 0, c.canvas.width(), c.canvas.height()), d.drawImage(c.bg_image[0], 0, 0, c.canvas.width(), c.canvas.height()), 
            a.sel0 && a.sel1) {
                d.fillStyle = "rgba(207,191,194,0.4)";
                var e = Math.min(a.sel0, a.sel1), k = Math.abs(a.sel0 - a.sel1);
                if (d.fillRect(e, c.top, k, c.hplot), d.strokeStyle = "rgba(207,191,194,0.8)", d.lineWidth = 1, 
                d.beginPath(), d.moveTo(e, c.top), d.lineTo(e, c.top + c.hplot), d.moveTo(e + k, c.top), 
                d.lineTo(e + k, c.top + c.hplot), d.stroke(), a.sel0 !== a.sel1) {
                    d.fillStyle = "rgb(207,191,194)", d.font = l, d.textAlign = "left", d.textBaseline = "top";
                    var n = Math.abs(c.datax(a.sel0) - c.datax(a.sel1));
                    d.fillText("dx=" + g(n, 3), e + k + 2, c.top);
                }
            }
            if (void 0 !== a.cursor) {
                d.lineWidth = 1, d.strokeStyle = h, d.beginPath(), d.moveTo(a.cursor, c.top), d.lineTo(a.cursor, c.top + c.hplot), 
                d.stroke();
                var o = c.datax(a.cursor), p = g(o, 4);
                if (c.xunits && (p += c.xunits), d.font = l, d.textAlign = "center", d.textBaseline = "top", 
                d.fillStyle = i, d.fillText("██████", a.cursor, c.top + c.hplot), d.fillStyle = h, 
                d.fillText(p, a.cursor, c.top + c.hplot), "analog" == c.type[0]) for (var q = 0; q < c.xvalues.length; q += 1) {
                    var r = c.xvalues[q], s = c.yvalues[q], t = f(r, o), u = r[t], v = s[t], w = r[t + 1] || u, x = s[t + 1] || v, y = v;
                    u != w && (y = v + (o - u) / (w - u) * (x - v));
                    var z = c.plotx(o), A = c.ploty(y);
                    d.strokeStyle = c.color[q] || "#268bd2", d.beginPath(), d.arc(z, A, 5, 0, 2 * Math.PI), 
                    d.stroke();
                    var B = c.legend_right[q], C = c.legend_top[q];
                    p = "=" + g(y, 2) + c.yunits, d.font = m;
                    var D = d.measureText(p).width;
                    d.fillStyle = j, d.globalAlpha = .7, d.fillRect(B, C, D + 5, 20), d.textAlign = "left", 
                    d.textBaseline = "bottom", d.fillStyle = h, d.globalAlpha = 1, d.fillText(p, B, C + 18);
                }
            }
        });
    }
    function f(a, b) {
        for (var c, d = 0, e = a.length - 1; e > d; ) c = d + e >> 1, c == d && (c = e), 
        a[c] <= b ? d = c : e = c - 1;
        return d;
    }
    function g(a, b, c) {
        if (0 === a) return "0";
        if (void 0 === a) return "undefined";
        void 0 === c && (c = !0);
        var d = 0 > a ? -1 : 1, e = Math.log(d * a) / Math.LN10, f = Math.floor(e / 3), g = d * Math.pow(10, e - 3 * f), h = g.toFixed(b), i = h.length, j = h.indexOf(".");
        if (-1 != j) {
            if (b > 0 && (j += b + 1, j > i && (j = i), c)) {
                for (;"0" == h.charAt(j - 1); ) j -= 1;
                "." == h.charAt(j - 1) && (j -= 1);
            }
            i > j && (h = h.substring(0, j));
        }
        switch (f) {
          case -5:
            return h + "f";

          case -4:
            return h + "p";

          case -3:
            return h + "n";

          case -2:
            return h + "u";

          case -1:
            return h + "m";

          case 0:
            return h;

          case 1:
            return h + "K";

          case 2:
            return h + "M";

          case 3:
            return h + "G";
        }
        return a.toPrecision(b);
    }
    var h = "rgb(0,0,0)", i = "rgb(238,238,238)", j = "rgb(255,255,255)", k = "rgb(220,220,220)", l = "8pt sans-serif", m = "10pt sans-serif", n = '8pt Consolas,"Courier New",monospace', o = "data:image/gif;base64,R0lGODlhEAAQAMT/AAAAAP///zAwYT09bpGRqZ6et5iYsKWlvbi40MzM5cXF3czM5OHh5tTU2fDw84uMom49DbWKcfLy8g0NDcDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABQALAAAAAAQABAAAAVZICWOZFlOwCQF5pg2TDMJbDs1DqI8g2TjOsSC0DMBGEGF4UAz3RQ6wiFRLEkmj8WyUC0FBAMpNdWiBCQD8DWCKq98lEkEAiiTAJB53S7Cz/kuECuAIzWEJCEAIf5PQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgA7", p = "data:image/gif;base64,R0lGODlhEAAQAMT/AAAAAP///zAwYT09boSEnIqKopiYsJ6etqurxL+/18XF3dnZ8sXF0OHh5tTU2ePj5piZr2EwAMKXfg0NDcDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABQALAAAAAAQABAAAAVXICWOZFkCE2CWaeMwwLCKQPNMBCQEa/0UAEXiIFhNHKmkYcA7MQgKwMGw2PUgiYkBsWuWBoJpNTWjBATgAECCKgfelHVkUh5NIpJ5XXTP7/kRcH9mgyUhADshACH+T0NvcHlyaWdodCAyMDAwIGJ5IFN1biBNaWNyb3N5c3RlbXMsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4NCkpMRiBHUiBWZXIgMS4wDQoAOw==", q = "data:image/gif;base64,R0lGODlhEAAQAMT/AAAAAP///zAwYT09bn19lYSEnJGRqZ6et5iYsJ6etqWlvbi40MzM5cXF3czM5Li4w+Hh5tTU2fDw84uMom49DbWKcQ0NDcDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABcALAAAAAAQABAAAAVX4CWOZFlagGWWaQQ9lrCKViQVxjQEay0RjYXDMFgBIKmkQsA7PQyLhEHB2PUmDoTisGuWBINpNTW7BAbggKWCKgfelzUFUB4BKJV5XXTP7/kUcH9mgyUhADshACH+T0NvcHlyaWdodCAyMDAwIGJ5IFN1biBNaWNyb3N5c3RlbXMsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4NCkpMRiBHUiBWZXIgMS4wDQoAOw==", r = "data:image/gif;base64,R0lGODlhEAAQAIQBAAAAAP///zAwYT09bpGRqZ6et5iYsKWlvbi40MzM5cXF3czM5OHh5tTU2fDw84uMom49DbWKcfLy8g0NDf///////////////////////////////////////////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEAAB8ALAAAAAAQABAAAAVY4CeOZFlOwCQF5pg2TDMJbIsCODBIdgMgCgSAsDMBGICgAnCgmSY+IAGQKJYkt5y1FBAMCIdqqvUJSAZebARFXvE+kwgEQCYBIHJ6XXSX710QK38jNYMkIQA7";
    return {
        graph: b,
        tick_interval: a,
        engineering_notation: g
    };
}();

JSim = {}, $(function() {
    function a() {
        $("#split_pane").click(), h.clearErrors(), Checkoff.reset();
        var a = h.content("simulate");
        if (a) {
            var b = h.currentTab();
            Simulator.simulate(h, a, b, $("#simulation-pane"), d, "device");
        }
    }
    function b() {
        $("#split_pane").click(), h.clearErrors(), Checkoff.reset();
        var a = h.content("simulate");
        if (a) {
            var b = h.currentTab();
            Simulator.simulate(h, a, b, $("#simulation-pane"), d, "gate");
        }
    }
    function c() {
        $("#split_pane").click(), h.clearErrors();
        var a = h.content("analyze");
        if (a) {
            var b = h.currentTab();
            Simulator.timing_analysis(h, a, b, $("#simulation-pane"), d);
        }
    }
    function d(a) {
        if (!(a instanceof Parser.CustomError)) throw a;
        -1 == h.filenames().indexOf(a.filename) ? h.openFile(a.filename, !0, function(b) {
            h.markErrorLine(b, a.message, a.line - 1, a.column);
        }) : h.markErrorLine(a.filename, a.message, a.line - 1, a.column);
    }
    function e() {
        return $(".xblock-6004").innerHeight();
    }
    var f = new SplitPane("#split-container", [ "#filetree", "#editor-pane", "#simulation-pane" ]);
    $(".global-controls").append('<span style="margin-right:10px;">' + $("title").text() + "</span>"), 
    f.setPaneWidth(0, 200), f.setPaneWidth(1, f.window_width() - 200), f.setPaneWidth(2, 0), 
    $("#maximise_editor").click(function() {
        f.setPaneWidth(0, 200), f.setPaneWidth(1, f.window_width() - 200), f.setPaneWidth(2, 0);
    }), $("#split_pane").click(function() {
        var a = f.window_width();
        f.setPaneWidth(0, 0), f.setPaneWidth(1, a / 2), f.setPaneWidth(2, a / 2);
    }), $("#maximise_simulation").click(function() {
        f.setPaneWidth(0, 0), f.setPaneWidth(1, 0), f.setPaneWidth(2, f.window_width());
    }), f.on("resize", function(a) {
        0 === a[2] ? $("#maximise_editor").addClass("active").siblings().removeClass("active") : 0 === a[0] && 0 === a[1] ? $("#maximise_simulation").addClass("active").siblings().removeClass("active") : $("#split_pane").addClass("active").siblings().removeClass("active"), 
        0 === a[1] && h.blur(), Simulator.resize();
    });
    var g = "jsim", h = new Editor("#editor", g);
    Folders.setup("#filetree", h, g), h.addButtonGroup([ new ToolbarButton('<img src="simulate.png" style="position:relative;bottom:1px">', a, "Device-level Simulation"), new ToolbarButton('<img src="gatesim.png" style="position:relative;bottom:2px">', b, "Gate-level Simulation"), new ToolbarButton('<img src="timing_analysis.png" style="position:relative;bottom:2px">', c, "Timing Analysis") ]), 
    h.addButtonGroup([ new ToolbarButton("Checkoff", function() {
        try {
            Checkoff.testResults(), h.metadata_count("checkoff");
        } catch (a) {
            d(a);
        }
    }, "Checkoff") ]), Checkoff.setEditor(h);
    var i = function() {
        h.setHeight(e() - $(".btn-toolbar").height() - $(".nav-tabs").height());
    };
    i(), $(window).resize(i);
});