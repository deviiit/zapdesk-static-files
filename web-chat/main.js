var Kx = Object.defineProperty;
var Yx = (e, t, r) => t in e ? Kx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var wc = (e, t, r) => (Yx(e, typeof t != "symbol" ? t + "" : t, r), r);
function Qx(e, t) {
  for (var r = 0; r < t.length; r++) {
    const o = t[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const a in o)
        if (a !== "default" && !(a in e)) {
          const c = Object.getOwnPropertyDescriptor(o, a);
          c && Object.defineProperty(e, a, c.get ? c : {
            enumerable: !0,
            get: () => o[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ay = { exports: {} }, Io = {}, ly = { exports: {} }, be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zp;
function Xx() {
  if (Zp)
    return be;
  Zp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), u = Symbol.iterator;
  function h(b) {
    return b === null || typeof b != "object" ? null : (b = u && b[u] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, S = {};
  function k(b, I, ne) {
    this.props = b, this.context = I, this.refs = S, this.updater = ne || v;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(b, I) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, I, "setState");
  }, k.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function T() {
  }
  T.prototype = k.prototype;
  function A(b, I, ne) {
    this.props = b, this.context = I, this.refs = S, this.updater = ne || v;
  }
  var O = A.prototype = new T();
  O.constructor = A, w(O, k.prototype), O.isPureReactComponent = !0;
  var V = Array.isArray, $ = Object.prototype.hasOwnProperty, X = { current: null }, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(b, I, ne) {
    var ke, ve = {}, Oe = null, _e = null;
    if (I != null)
      for (ke in I.ref !== void 0 && (_e = I.ref), I.key !== void 0 && (Oe = "" + I.key), I)
        $.call(I, ke) && !K.hasOwnProperty(ke) && (ve[ke] = I[ke]);
    var Pe = arguments.length - 2;
    if (Pe === 1)
      ve.children = ne;
    else if (1 < Pe) {
      for (var Ae = Array(Pe), Ye = 0; Ye < Pe; Ye++)
        Ae[Ye] = arguments[Ye + 2];
      ve.children = Ae;
    }
    if (b && b.defaultProps)
      for (ke in Pe = b.defaultProps, Pe)
        ve[ke] === void 0 && (ve[ke] = Pe[ke]);
    return { $$typeof: e, type: b, key: Oe, ref: _e, props: ve, _owner: X.current };
  }
  function J(b, I) {
    return { $$typeof: e, type: b.type, key: I, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Ce(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }
  function Le(b) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(ne) {
      return I[ne];
    });
  }
  var he = /\/+/g;
  function le(b, I) {
    return typeof b == "object" && b !== null && b.key != null ? Le("" + b.key) : I.toString(36);
  }
  function ae(b, I, ne, ke, ve) {
    var Oe = typeof b;
    (Oe === "undefined" || Oe === "boolean") && (b = null);
    var _e = !1;
    if (b === null)
      _e = !0;
    else
      switch (Oe) {
        case "string":
        case "number":
          _e = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case e:
            case t:
              _e = !0;
          }
      }
    if (_e)
      return _e = b, ve = ve(_e), b = ke === "" ? "." + le(_e, 0) : ke, V(ve) ? (ne = "", b != null && (ne = b.replace(he, "$&/") + "/"), ae(ve, I, ne, "", function(Ye) {
        return Ye;
      })) : ve != null && (Ce(ve) && (ve = J(ve, ne + (!ve.key || _e && _e.key === ve.key ? "" : ("" + ve.key).replace(he, "$&/") + "/") + b)), I.push(ve)), 1;
    if (_e = 0, ke = ke === "" ? "." : ke + ":", V(b))
      for (var Pe = 0; Pe < b.length; Pe++) {
        Oe = b[Pe];
        var Ae = ke + le(Oe, Pe);
        _e += ae(Oe, I, ne, Ae, ve);
      }
    else if (Ae = h(b), typeof Ae == "function")
      for (b = Ae.call(b), Pe = 0; !(Oe = b.next()).done; )
        Oe = Oe.value, Ae = ke + le(Oe, Pe++), _e += ae(Oe, I, ne, Ae, ve);
    else if (Oe === "object")
      throw I = String(b), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return _e;
  }
  function ge(b, I, ne) {
    if (b == null)
      return b;
    var ke = [], ve = 0;
    return ae(b, ke, "", "", function(Oe) {
      return I.call(ne, Oe, ve++);
    }), ke;
  }
  function Ee(b) {
    if (b._status === -1) {
      var I = b._result;
      I = I(), I.then(function(ne) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ne);
      }, function(ne) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ne);
      }), b._status === -1 && (b._status = 0, b._result = I);
    }
    if (b._status === 1)
      return b._result.default;
    throw b._result;
  }
  var Se = { current: null }, Q = { transition: null }, ue = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: Q, ReactCurrentOwner: X };
  return be.Children = { map: ge, forEach: function(b, I, ne) {
    ge(b, function() {
      I.apply(this, arguments);
    }, ne);
  }, count: function(b) {
    var I = 0;
    return ge(b, function() {
      I++;
    }), I;
  }, toArray: function(b) {
    return ge(b, function(I) {
      return I;
    }) || [];
  }, only: function(b) {
    if (!Ce(b))
      throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, be.Component = k, be.Fragment = r, be.Profiler = a, be.PureComponent = A, be.StrictMode = o, be.Suspense = y, be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, be.cloneElement = function(b, I, ne) {
    if (b == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var ke = w({}, b.props), ve = b.key, Oe = b.ref, _e = b._owner;
    if (I != null) {
      if (I.ref !== void 0 && (Oe = I.ref, _e = X.current), I.key !== void 0 && (ve = "" + I.key), b.type && b.type.defaultProps)
        var Pe = b.type.defaultProps;
      for (Ae in I)
        $.call(I, Ae) && !K.hasOwnProperty(Ae) && (ke[Ae] = I[Ae] === void 0 && Pe !== void 0 ? Pe[Ae] : I[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1)
      ke.children = ne;
    else if (1 < Ae) {
      Pe = Array(Ae);
      for (var Ye = 0; Ye < Ae; Ye++)
        Pe[Ye] = arguments[Ye + 2];
      ke.children = Pe;
    }
    return { $$typeof: e, type: b.type, key: ve, ref: Oe, props: ke, _owner: _e };
  }, be.createContext = function(b) {
    return b = { $$typeof: f, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: c, _context: b }, b.Consumer = b;
  }, be.createElement = te, be.createFactory = function(b) {
    var I = te.bind(null, b);
    return I.type = b, I;
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(b) {
    return { $$typeof: m, render: b };
  }, be.isValidElement = Ce, be.lazy = function(b) {
    return { $$typeof: x, _payload: { _status: -1, _result: b }, _init: Ee };
  }, be.memo = function(b, I) {
    return { $$typeof: g, type: b, compare: I === void 0 ? null : I };
  }, be.startTransition = function(b) {
    var I = Q.transition;
    Q.transition = {};
    try {
      b();
    } finally {
      Q.transition = I;
    }
  }, be.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, be.useCallback = function(b, I) {
    return Se.current.useCallback(b, I);
  }, be.useContext = function(b) {
    return Se.current.useContext(b);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(b) {
    return Se.current.useDeferredValue(b);
  }, be.useEffect = function(b, I) {
    return Se.current.useEffect(b, I);
  }, be.useId = function() {
    return Se.current.useId();
  }, be.useImperativeHandle = function(b, I, ne) {
    return Se.current.useImperativeHandle(b, I, ne);
  }, be.useInsertionEffect = function(b, I) {
    return Se.current.useInsertionEffect(b, I);
  }, be.useLayoutEffect = function(b, I) {
    return Se.current.useLayoutEffect(b, I);
  }, be.useMemo = function(b, I) {
    return Se.current.useMemo(b, I);
  }, be.useReducer = function(b, I, ne) {
    return Se.current.useReducer(b, I, ne);
  }, be.useRef = function(b) {
    return Se.current.useRef(b);
  }, be.useState = function(b) {
    return Se.current.useState(b);
  }, be.useSyncExternalStore = function(b, I, ne) {
    return Se.current.useSyncExternalStore(b, I, ne);
  }, be.useTransition = function() {
    return Se.current.useTransition();
  }, be.version = "18.2.0", be;
}
ly.exports = Xx();
var M = ly.exports;
const vn = /* @__PURE__ */ pl(M), Jp = /* @__PURE__ */ Qx({
  __proto__: null,
  default: vn
}, [M]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;
function Zx() {
  if (em)
    return Io;
  em = 1;
  var e = M, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, y, g) {
    var x, u = {}, h = null, v = null;
    g !== void 0 && (h = "" + g), y.key !== void 0 && (h = "" + y.key), y.ref !== void 0 && (v = y.ref);
    for (x in y)
      o.call(y, x) && !c.hasOwnProperty(x) && (u[x] = y[x]);
    if (m && m.defaultProps)
      for (x in y = m.defaultProps, y)
        u[x] === void 0 && (u[x] = y[x]);
    return { $$typeof: t, type: m, key: h, ref: v, props: u, _owner: a.current };
  }
  return Io.Fragment = r, Io.jsx = f, Io.jsxs = f, Io;
}
ay.exports = Zx();
var E = ay.exports, tf = {}, uy = { exports: {} }, $t = {}, _c = { exports: {} }, Sc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function Jx() {
  return tm || (tm = 1, function(e) {
    function t(Q, ue) {
      var b = Q.length;
      Q.push(ue);
      e:
        for (; 0 < b; ) {
          var I = b - 1 >>> 1, ne = Q[I];
          if (0 < a(ne, ue))
            Q[I] = ue, Q[b] = ne, b = I;
          else
            break e;
        }
    }
    function r(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function o(Q) {
      if (Q.length === 0)
        return null;
      var ue = Q[0], b = Q.pop();
      if (b !== ue) {
        Q[0] = b;
        e:
          for (var I = 0, ne = Q.length, ke = ne >>> 1; I < ke; ) {
            var ve = 2 * (I + 1) - 1, Oe = Q[ve], _e = ve + 1, Pe = Q[_e];
            if (0 > a(Oe, b))
              _e < ne && 0 > a(Pe, Oe) ? (Q[I] = Pe, Q[_e] = b, I = _e) : (Q[I] = Oe, Q[ve] = b, I = ve);
            else if (_e < ne && 0 > a(Pe, b))
              Q[I] = Pe, Q[_e] = b, I = _e;
            else
              break e;
          }
      }
      return ue;
    }
    function a(Q, ue) {
      var b = Q.sortIndex - ue.sortIndex;
      return b !== 0 ? b : Q.id - ue.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, m = f.now();
      e.unstable_now = function() {
        return f.now() - m;
      };
    }
    var y = [], g = [], x = 1, u = null, h = 3, v = !1, w = !1, S = !1, k = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(Q) {
      for (var ue = r(g); ue !== null; ) {
        if (ue.callback === null)
          o(g);
        else if (ue.startTime <= Q)
          o(g), ue.sortIndex = ue.expirationTime, t(y, ue);
        else
          break;
        ue = r(g);
      }
    }
    function V(Q) {
      if (S = !1, O(Q), !w)
        if (r(y) !== null)
          w = !0, Ee($);
        else {
          var ue = r(g);
          ue !== null && Se(V, ue.startTime - Q);
        }
    }
    function $(Q, ue) {
      w = !1, S && (S = !1, T(te), te = -1), v = !0;
      var b = h;
      try {
        for (O(ue), u = r(y); u !== null && (!(u.expirationTime > ue) || Q && !Le()); ) {
          var I = u.callback;
          if (typeof I == "function") {
            u.callback = null, h = u.priorityLevel;
            var ne = I(u.expirationTime <= ue);
            ue = e.unstable_now(), typeof ne == "function" ? u.callback = ne : u === r(y) && o(y), O(ue);
          } else
            o(y);
          u = r(y);
        }
        if (u !== null)
          var ke = !0;
        else {
          var ve = r(g);
          ve !== null && Se(V, ve.startTime - ue), ke = !1;
        }
        return ke;
      } finally {
        u = null, h = b, v = !1;
      }
    }
    var X = !1, K = null, te = -1, J = 5, Ce = -1;
    function Le() {
      return !(e.unstable_now() - Ce < J);
    }
    function he() {
      if (K !== null) {
        var Q = e.unstable_now();
        Ce = Q;
        var ue = !0;
        try {
          ue = K(!0, Q);
        } finally {
          ue ? le() : (X = !1, K = null);
        }
      } else
        X = !1;
    }
    var le;
    if (typeof A == "function")
      le = function() {
        A(he);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), ge = ae.port2;
      ae.port1.onmessage = he, le = function() {
        ge.postMessage(null);
      };
    } else
      le = function() {
        k(he, 0);
      };
    function Ee(Q) {
      K = Q, X || (X = !0, le());
    }
    function Se(Q, ue) {
      te = k(function() {
        Q(e.unstable_now());
      }, ue);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, e.unstable_continueExecution = function() {
      w || v || (w = !0, Ee($));
    }, e.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return h;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(y);
    }, e.unstable_next = function(Q) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = h;
      }
      var b = h;
      h = ue;
      try {
        return Q();
      } finally {
        h = b;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(Q, ue) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var b = h;
      h = Q;
      try {
        return ue();
      } finally {
        h = b;
      }
    }, e.unstable_scheduleCallback = function(Q, ue, b) {
      var I = e.unstable_now();
      switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? I + b : I) : b = I, Q) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = b + ne, Q = { id: x++, callback: ue, priorityLevel: Q, startTime: b, expirationTime: ne, sortIndex: -1 }, b > I ? (Q.sortIndex = b, t(g, Q), r(y) === null && Q === r(g) && (S ? (T(te), te = -1) : S = !0, Se(V, b - I))) : (Q.sortIndex = ne, t(y, Q), w || v || (w = !0, Ee($))), Q;
    }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(Q) {
      var ue = h;
      return function() {
        var b = h;
        h = ue;
        try {
          return Q.apply(this, arguments);
        } finally {
          h = b;
        }
      };
    };
  }(Sc)), Sc;
}
var nm;
function ew() {
  return nm || (nm = 1, _c.exports = Jx()), _c.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function tw() {
  if (rm)
    return $t;
  rm = 1;
  var e = M, t = ew();
  function r(n) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++)
      i += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + n + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), a = {};
  function c(n, i) {
    f(n, i), f(n + "Capture", i);
  }
  function f(n, i) {
    for (a[n] = i, n = 0; n < i.length; n++)
      o.add(i[n]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, x = {}, u = {};
  function h(n) {
    return y.call(u, n) ? !0 : y.call(x, n) ? !1 : g.test(n) ? u[n] = !0 : (x[n] = !0, !1);
  }
  function v(n, i, s, l) {
    if (s !== null && s.type === 0)
      return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : s !== null ? !s.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function w(n, i, s, l) {
    if (i === null || typeof i > "u" || v(n, i, s, l))
      return !0;
    if (l)
      return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !i;
        case 4:
          return i === !1;
        case 5:
          return isNaN(i);
        case 6:
          return isNaN(i) || 1 > i;
      }
    return !1;
  }
  function S(n, i, s, l, d, p, _) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = n, this.type = i, this.sanitizeURL = p, this.removeEmptyString = _;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    k[n] = new S(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var i = n[0];
    k[i] = new S(i, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    k[n] = new S(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    k[n] = new S(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    k[n] = new S(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    k[n] = new S(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    k[n] = new S(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    k[n] = new S(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    k[n] = new S(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function A(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var i = n.replace(
      T,
      A
    );
    k[i] = new S(i, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var i = n.replace(T, A);
    k[i] = new S(i, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var i = n.replace(T, A);
    k[i] = new S(i, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    k[n] = new S(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    k[n] = new S(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function O(n, i, s, l) {
    var d = k.hasOwnProperty(i) ? k[i] : null;
    (d !== null ? d.type !== 0 : l || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (w(i, s, d, l) && (s = null), l || d === null ? h(i) && (s === null ? n.removeAttribute(i) : n.setAttribute(i, "" + s)) : d.mustUseProperty ? n[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (i = d.attributeName, l = d.attributeNamespace, s === null ? n.removeAttribute(i) : (d = d.type, s = d === 3 || d === 4 && s === !0 ? "" : "" + s, l ? n.setAttributeNS(l, i, s) : n.setAttribute(i, s))));
  }
  var V = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = Symbol.for("react.element"), X = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), Le = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), ge = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function ue(n) {
    return n === null || typeof n != "object" ? null : (n = Q && n[Q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var b = Object.assign, I;
  function ne(n) {
    if (I === void 0)
      try {
        throw Error();
      } catch (s) {
        var i = s.stack.trim().match(/\n( *(at )?)/);
        I = i && i[1] || "";
      }
    return `
` + I + n;
  }
  var ke = !1;
  function ve(n, i) {
    if (!n || ke)
      return "";
    ke = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (i)
        if (i = function() {
          throw Error();
        }, Object.defineProperty(i.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(i, []);
          } catch (F) {
            var l = F;
          }
          Reflect.construct(n, [], i);
        } else {
          try {
            i.call();
          } catch (F) {
            l = F;
          }
          n.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          l = F;
        }
        n();
      }
    } catch (F) {
      if (F && l && typeof F.stack == "string") {
        for (var d = F.stack.split(`
`), p = l.stack.split(`
`), _ = d.length - 1, C = p.length - 1; 1 <= _ && 0 <= C && d[_] !== p[C]; )
          C--;
        for (; 1 <= _ && 0 <= C; _--, C--)
          if (d[_] !== p[C]) {
            if (_ !== 1 || C !== 1)
              do
                if (_--, C--, 0 > C || d[_] !== p[C]) {
                  var P = `
` + d[_].replace(" at new ", " at ");
                  return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
                }
              while (1 <= _ && 0 <= C);
            break;
          }
      }
    } finally {
      ke = !1, Error.prepareStackTrace = s;
    }
    return (n = n ? n.displayName || n.name : "") ? ne(n) : "";
  }
  function Oe(n) {
    switch (n.tag) {
      case 5:
        return ne(n.type);
      case 16:
        return ne("Lazy");
      case 13:
        return ne("Suspense");
      case 19:
        return ne("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ve(n.type, !1), n;
      case 11:
        return n = ve(n.type.render, !1), n;
      case 1:
        return n = ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function _e(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case K:
        return "Fragment";
      case X:
        return "Portal";
      case J:
        return "Profiler";
      case te:
        return "StrictMode";
      case le:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Le:
          return (n.displayName || "Context") + ".Consumer";
        case Ce:
          return (n._context.displayName || "Context") + ".Provider";
        case he:
          var i = n.render;
          return n = n.displayName, n || (n = i.displayName || i.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case ge:
          return i = n.displayName || null, i !== null ? i : _e(n.type) || "Memo";
        case Ee:
          i = n._payload, n = n._init;
          try {
            return _e(n(i));
          } catch {
          }
      }
    return null;
  }
  function Pe(n) {
    var i = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = i.render, n = n.displayName || n.name || "", i.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return i;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _e(i);
      case 8:
        return i === te ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof i == "function")
          return i.displayName || i.name || null;
        if (typeof i == "string")
          return i;
    }
    return null;
  }
  function Ae(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ye(n) {
    var i = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function xn(n) {
    var i = Ye(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, i), l = "" + n[i];
    if (!n.hasOwnProperty(i) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var d = s.get, p = s.set;
      return Object.defineProperty(n, i, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(_) {
        l = "" + _, p.call(this, _);
      } }), Object.defineProperty(n, i, { enumerable: s.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(_) {
        l = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[i];
      } };
    }
  }
  function ut(n) {
    n._valueTracker || (n._valueTracker = xn(n));
  }
  function wn(n) {
    if (!n)
      return !1;
    var i = n._valueTracker;
    if (!i)
      return !0;
    var s = i.getValue(), l = "";
    return n && (l = Ye(n) ? n.checked ? "true" : "false" : n.value), n = l, n !== s ? (i.setValue(n), !0) : !1;
  }
  function _n(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ti(n, i) {
    var s = i.checked;
    return b({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? n._wrapperState.initialChecked });
  }
  function Qi(n, i) {
    var s = i.defaultValue == null ? "" : i.defaultValue, l = i.checked != null ? i.checked : i.defaultChecked;
    s = Ae(i.value != null ? i.value : s), n._wrapperState = { initialChecked: l, initialValue: s, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function L(n, i) {
    i = i.checked, i != null && O(n, "checked", i, !1);
  }
  function j(n, i) {
    L(n, i);
    var s = Ae(i.value), l = i.type;
    if (s != null)
      l === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? ie(n, i.type, s) : i.hasOwnProperty("defaultValue") && ie(n, i.type, Ae(i.defaultValue)), i.checked == null && i.defaultChecked != null && (n.defaultChecked = !!i.defaultChecked);
  }
  function z(n, i, s) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var l = i.type;
      if (!(l !== "submit" && l !== "reset" || i.value !== void 0 && i.value !== null))
        return;
      i = "" + n._wrapperState.initialValue, s || i === n.value || (n.value = i), n.defaultValue = i;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function ie(n, i, s) {
    (i !== "number" || _n(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  var Z = Array.isArray;
  function G(n, i, s, l) {
    if (n = n.options, i) {
      i = {};
      for (var d = 0; d < s.length; d++)
        i["$" + s[d]] = !0;
      for (s = 0; s < n.length; s++)
        d = i.hasOwnProperty("$" + n[s].value), n[s].selected !== d && (n[s].selected = d), d && l && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + Ae(s), i = null, d = 0; d < n.length; d++) {
        if (n[d].value === s) {
          n[d].selected = !0, l && (n[d].defaultSelected = !0);
          return;
        }
        i !== null || n[d].disabled || (i = n[d]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function de(n, i) {
    if (i.dangerouslySetInnerHTML != null)
      throw Error(r(91));
    return b({}, i, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function je(n, i) {
    var s = i.value;
    if (s == null) {
      if (s = i.children, i = i.defaultValue, s != null) {
        if (i != null)
          throw Error(r(92));
        if (Z(s)) {
          if (1 < s.length)
            throw Error(r(93));
          s = s[0];
        }
        i = s;
      }
      i == null && (i = ""), s = i;
    }
    n._wrapperState = { initialValue: Ae(s) };
  }
  function ze(n, i) {
    var s = Ae(i.value), l = Ae(i.defaultValue);
    s != null && (s = "" + s, s !== n.value && (n.value = s), i.defaultValue == null && n.defaultValue !== s && (n.defaultValue = s)), l != null && (n.defaultValue = "" + l);
  }
  function Ft(n) {
    var i = n.textContent;
    i === n._wrapperState.initialValue && i !== "" && i !== null && (n.value = i);
  }
  function ni(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vn(n, i) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ni(i) : n === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ln, ri = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(i, s, l, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(i, s, l, d);
      });
    } : n;
  }(function(n, i) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = i;
    else {
      for (ln = ln || document.createElement("div"), ln.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>", i = ln.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; i.firstChild; )
        n.appendChild(i.firstChild);
    }
  });
  function Sn(n, i) {
    if (i) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = i;
        return;
      }
    }
    n.textContent = i;
  }
  var Bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Nr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function(n) {
    Nr.forEach(function(i) {
      i = i + n.charAt(0).toUpperCase() + n.substring(1), Bn[i] = Bn[n];
    });
  });
  function vs(n, i, s) {
    return i == null || typeof i == "boolean" || i === "" ? "" : s || typeof i != "number" || i === 0 || Bn.hasOwnProperty(n) && Bn[n] ? ("" + i).trim() : i + "px";
  }
  function W(n, i) {
    n = n.style;
    for (var s in i)
      if (i.hasOwnProperty(s)) {
        var l = s.indexOf("--") === 0, d = vs(s, i[s], l);
        s === "float" && (s = "cssFloat"), l ? n.setProperty(s, d) : n[s] = d;
      }
  }
  var xe = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Be(n, i) {
    if (i) {
      if (xe[n] && (i.children != null || i.dangerouslySetInnerHTML != null))
        throw Error(r(137, n));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null)
          throw Error(r(60));
        if (typeof i.dangerouslySetInnerHTML != "object" || !("__html" in i.dangerouslySetInnerHTML))
          throw Error(r(61));
      }
      if (i.style != null && typeof i.style != "object")
        throw Error(r(62));
    }
  }
  function vt(n, i) {
    if (n.indexOf("-") === -1)
      return typeof i.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ue = null;
  function zn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var ir = null, Tt = null, Ct = null;
  function Xi(n) {
    if (n = So(n)) {
      if (typeof ir != "function")
        throw Error(r(280));
      var i = n.stateNode;
      i && (i = $s(i), ir(n.stateNode, n.type, i));
    }
  }
  function xs(n) {
    Tt ? Ct ? Ct.push(n) : Ct = [n] : Tt = n;
  }
  function Zi() {
    if (Tt) {
      var n = Tt, i = Ct;
      if (Ct = Tt = null, Xi(n), i)
        for (n = 0; n < i.length; n++)
          Xi(i[n]);
    }
  }
  function Ji(n, i) {
    return n(i);
  }
  function vd() {
  }
  var Il = !1;
  function xd(n, i, s) {
    if (Il)
      return n(i, s);
    Il = !0;
    try {
      return Ji(n, i, s);
    } finally {
      Il = !1, (Tt !== null || Ct !== null) && (vd(), Zi());
    }
  }
  function eo(n, i) {
    var s = n.stateNode;
    if (s === null)
      return null;
    var l = $s(s);
    if (l === null)
      return null;
    s = l[i];
    e:
      switch (i) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (n = n.type, l = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !l;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (s && typeof s != "function")
      throw Error(r(231, i, typeof s));
    return s;
  }
  var jl = !1;
  if (m)
    try {
      var to = {};
      Object.defineProperty(to, "passive", { get: function() {
        jl = !0;
      } }), window.addEventListener("test", to, to), window.removeEventListener("test", to, to);
    } catch {
      jl = !1;
    }
  function e1(n, i, s, l, d, p, _, C, P) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(s, F);
    } catch (H) {
      this.onError(H);
    }
  }
  var no = !1, ws = null, _s = !1, Vl = null, t1 = { onError: function(n) {
    no = !0, ws = n;
  } };
  function n1(n, i, s, l, d, p, _, C, P) {
    no = !1, ws = null, e1.apply(t1, arguments);
  }
  function r1(n, i, s, l, d, p, _, C, P) {
    if (n1.apply(this, arguments), no) {
      if (no) {
        var F = ws;
        no = !1, ws = null;
      } else
        throw Error(r(198));
      _s || (_s = !0, Vl = F);
    }
  }
  function Fr(n) {
    var i = n, s = n;
    if (n.alternate)
      for (; i.return; )
        i = i.return;
    else {
      n = i;
      do
        i = n, i.flags & 4098 && (s = i.return), n = i.return;
      while (n);
    }
    return i.tag === 3 ? s : null;
  }
  function wd(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (i === null && (n = n.alternate, n !== null && (i = n.memoizedState)), i !== null)
        return i.dehydrated;
    }
    return null;
  }
  function _d(n) {
    if (Fr(n) !== n)
      throw Error(r(188));
  }
  function i1(n) {
    var i = n.alternate;
    if (!i) {
      if (i = Fr(n), i === null)
        throw Error(r(188));
      return i !== n ? null : n;
    }
    for (var s = n, l = i; ; ) {
      var d = s.return;
      if (d === null)
        break;
      var p = d.alternate;
      if (p === null) {
        if (l = d.return, l !== null) {
          s = l;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === s)
            return _d(d), n;
          if (p === l)
            return _d(d), i;
          p = p.sibling;
        }
        throw Error(r(188));
      }
      if (s.return !== l.return)
        s = d, l = p;
      else {
        for (var _ = !1, C = d.child; C; ) {
          if (C === s) {
            _ = !0, s = d, l = p;
            break;
          }
          if (C === l) {
            _ = !0, l = d, s = p;
            break;
          }
          C = C.sibling;
        }
        if (!_) {
          for (C = p.child; C; ) {
            if (C === s) {
              _ = !0, s = p, l = d;
              break;
            }
            if (C === l) {
              _ = !0, l = p, s = d;
              break;
            }
            C = C.sibling;
          }
          if (!_)
            throw Error(r(189));
        }
      }
      if (s.alternate !== l)
        throw Error(r(190));
    }
    if (s.tag !== 3)
      throw Error(r(188));
    return s.stateNode.current === s ? n : i;
  }
  function Sd(n) {
    return n = i1(n), n !== null ? kd(n) : null;
  }
  function kd(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var i = kd(n);
      if (i !== null)
        return i;
      n = n.sibling;
    }
    return null;
  }
  var Td = t.unstable_scheduleCallback, Cd = t.unstable_cancelCallback, o1 = t.unstable_shouldYield, s1 = t.unstable_requestPaint, nt = t.unstable_now, a1 = t.unstable_getCurrentPriorityLevel, Bl = t.unstable_ImmediatePriority, Ed = t.unstable_UserBlockingPriority, Ss = t.unstable_NormalPriority, l1 = t.unstable_LowPriority, Ad = t.unstable_IdlePriority, ks = null, kn = null;
  function u1(n) {
    if (kn && typeof kn.onCommitFiberRoot == "function")
      try {
        kn.onCommitFiberRoot(ks, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var un = Math.clz32 ? Math.clz32 : d1, c1 = Math.log, f1 = Math.LN2;
  function d1(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (c1(n) / f1 | 0) | 0;
  }
  var Ts = 64, Cs = 4194304;
  function ro(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Es(n, i) {
    var s = n.pendingLanes;
    if (s === 0)
      return 0;
    var l = 0, d = n.suspendedLanes, p = n.pingedLanes, _ = s & 268435455;
    if (_ !== 0) {
      var C = _ & ~d;
      C !== 0 ? l = ro(C) : (p &= _, p !== 0 && (l = ro(p)));
    } else
      _ = s & ~d, _ !== 0 ? l = ro(_) : p !== 0 && (l = ro(p));
    if (l === 0)
      return 0;
    if (i !== 0 && i !== l && !(i & d) && (d = l & -l, p = i & -i, d >= p || d === 16 && (p & 4194240) !== 0))
      return i;
    if (l & 4 && (l |= s & 16), i = n.entangledLanes, i !== 0)
      for (n = n.entanglements, i &= l; 0 < i; )
        s = 31 - un(i), d = 1 << s, l |= n[s], i &= ~d;
    return l;
  }
  function h1(n, i) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return i + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function p1(n, i) {
    for (var s = n.suspendedLanes, l = n.pingedLanes, d = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var _ = 31 - un(p), C = 1 << _, P = d[_];
      P === -1 ? (!(C & s) || C & l) && (d[_] = h1(C, i)) : P <= i && (n.expiredLanes |= C), p &= ~C;
    }
  }
  function zl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function bd() {
    var n = Ts;
    return Ts <<= 1, !(Ts & 4194240) && (Ts = 64), n;
  }
  function $l(n) {
    for (var i = [], s = 0; 31 > s; s++)
      i.push(n);
    return i;
  }
  function io(n, i, s) {
    n.pendingLanes |= i, i !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, i = 31 - un(i), n[i] = s;
  }
  function m1(n, i) {
    var s = n.pendingLanes & ~i;
    n.pendingLanes = i, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= i, n.mutableReadLanes &= i, n.entangledLanes &= i, i = n.entanglements;
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < s; ) {
      var d = 31 - un(s), p = 1 << d;
      i[d] = 0, l[d] = -1, n[d] = -1, s &= ~p;
    }
  }
  function Ul(n, i) {
    var s = n.entangledLanes |= i;
    for (n = n.entanglements; s; ) {
      var l = 31 - un(s), d = 1 << l;
      d & i | n[l] & i && (n[l] |= i), s &= ~d;
    }
  }
  var Ve = 0;
  function Pd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Rd, Hl, Od, Ld, Md, Wl = !1, As = [], or = null, sr = null, ar = null, oo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), lr = [], g1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Dd(n, i) {
    switch (n) {
      case "focusin":
      case "focusout":
        or = null;
        break;
      case "dragenter":
      case "dragleave":
        sr = null;
        break;
      case "mouseover":
      case "mouseout":
        ar = null;
        break;
      case "pointerover":
      case "pointerout":
        oo.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        so.delete(i.pointerId);
    }
  }
  function ao(n, i, s, l, d, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: i, domEventName: s, eventSystemFlags: l, nativeEvent: p, targetContainers: [d] }, i !== null && (i = So(i), i !== null && Hl(i)), n) : (n.eventSystemFlags |= l, i = n.targetContainers, d !== null && i.indexOf(d) === -1 && i.push(d), n);
  }
  function y1(n, i, s, l, d) {
    switch (i) {
      case "focusin":
        return or = ao(or, n, i, s, l, d), !0;
      case "dragenter":
        return sr = ao(sr, n, i, s, l, d), !0;
      case "mouseover":
        return ar = ao(ar, n, i, s, l, d), !0;
      case "pointerover":
        var p = d.pointerId;
        return oo.set(p, ao(oo.get(p) || null, n, i, s, l, d)), !0;
      case "gotpointercapture":
        return p = d.pointerId, so.set(p, ao(so.get(p) || null, n, i, s, l, d)), !0;
    }
    return !1;
  }
  function Nd(n) {
    var i = Ir(n.target);
    if (i !== null) {
      var s = Fr(i);
      if (s !== null) {
        if (i = s.tag, i === 13) {
          if (i = wd(s), i !== null) {
            n.blockedOn = i, Md(n.priority, function() {
              Od(s);
            });
            return;
          }
        } else if (i === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function bs(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var i = n.targetContainers; 0 < i.length; ) {
      var s = Gl(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var l = new s.constructor(s.type, s);
        Ue = l, s.target.dispatchEvent(l), Ue = null;
      } else
        return i = So(s), i !== null && Hl(i), n.blockedOn = s, !1;
      i.shift();
    }
    return !0;
  }
  function Fd(n, i, s) {
    bs(n) && s.delete(i);
  }
  function v1() {
    Wl = !1, or !== null && bs(or) && (or = null), sr !== null && bs(sr) && (sr = null), ar !== null && bs(ar) && (ar = null), oo.forEach(Fd), so.forEach(Fd);
  }
  function lo(n, i) {
    n.blockedOn === i && (n.blockedOn = null, Wl || (Wl = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, v1)));
  }
  function uo(n) {
    function i(d) {
      return lo(d, n);
    }
    if (0 < As.length) {
      lo(As[0], n);
      for (var s = 1; s < As.length; s++) {
        var l = As[s];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (or !== null && lo(or, n), sr !== null && lo(sr, n), ar !== null && lo(ar, n), oo.forEach(i), so.forEach(i), s = 0; s < lr.length; s++)
      l = lr[s], l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < lr.length && (s = lr[0], s.blockedOn === null); )
      Nd(s), s.blockedOn === null && lr.shift();
  }
  var ii = V.ReactCurrentBatchConfig, Ps = !0;
  function x1(n, i, s, l) {
    var d = Ve, p = ii.transition;
    ii.transition = null;
    try {
      Ve = 1, ql(n, i, s, l);
    } finally {
      Ve = d, ii.transition = p;
    }
  }
  function w1(n, i, s, l) {
    var d = Ve, p = ii.transition;
    ii.transition = null;
    try {
      Ve = 4, ql(n, i, s, l);
    } finally {
      Ve = d, ii.transition = p;
    }
  }
  function ql(n, i, s, l) {
    if (Ps) {
      var d = Gl(n, i, s, l);
      if (d === null)
        cu(n, i, l, Rs, s), Dd(n, l);
      else if (y1(d, n, i, s, l))
        l.stopPropagation();
      else if (Dd(n, l), i & 4 && -1 < g1.indexOf(n)) {
        for (; d !== null; ) {
          var p = So(d);
          if (p !== null && Rd(p), p = Gl(n, i, s, l), p === null && cu(n, i, l, Rs, s), p === d)
            break;
          d = p;
        }
        d !== null && l.stopPropagation();
      } else
        cu(n, i, l, null, s);
    }
  }
  var Rs = null;
  function Gl(n, i, s, l) {
    if (Rs = null, n = zn(l), n = Ir(n), n !== null)
      if (i = Fr(n), i === null)
        n = null;
      else if (s = i.tag, s === 13) {
        if (n = wd(i), n !== null)
          return n;
        n = null;
      } else if (s === 3) {
        if (i.stateNode.current.memoizedState.isDehydrated)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        n = null;
      } else
        i !== n && (n = null);
    return Rs = n, null;
  }
  function Id(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (a1()) {
          case Bl:
            return 1;
          case Ed:
            return 4;
          case Ss:
          case l1:
            return 16;
          case Ad:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ur = null, Kl = null, Os = null;
  function jd() {
    if (Os)
      return Os;
    var n, i = Kl, s = i.length, l, d = "value" in ur ? ur.value : ur.textContent, p = d.length;
    for (n = 0; n < s && i[n] === d[n]; n++)
      ;
    var _ = s - n;
    for (l = 1; l <= _ && i[s - l] === d[p - l]; l++)
      ;
    return Os = d.slice(n, 1 < l ? 1 - l : void 0);
  }
  function Ls(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ms() {
    return !0;
  }
  function Vd() {
    return !1;
  }
  function Wt(n) {
    function i(s, l, d, p, _) {
      this._reactName = s, this._targetInst = d, this.type = l, this.nativeEvent = p, this.target = _, this.currentTarget = null;
      for (var C in n)
        n.hasOwnProperty(C) && (s = n[C], this[C] = s ? s(p) : p[C]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Ms : Vd, this.isPropagationStopped = Vd, this;
    }
    return b(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Ms);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Ms);
    }, persist: function() {
    }, isPersistent: Ms }), i;
  }
  var oi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Yl = Wt(oi), co = b({}, oi, { view: 0, detail: 0 }), _1 = Wt(co), Ql, Xl, fo, Ds = b({}, co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Jl, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== fo && (fo && n.type === "mousemove" ? (Ql = n.screenX - fo.screenX, Xl = n.screenY - fo.screenY) : Xl = Ql = 0, fo = n), Ql);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xl;
  } }), Bd = Wt(Ds), S1 = b({}, Ds, { dataTransfer: 0 }), k1 = Wt(S1), T1 = b({}, co, { relatedTarget: 0 }), Zl = Wt(T1), C1 = b({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), E1 = Wt(C1), A1 = b({}, oi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), b1 = Wt(A1), P1 = b({}, oi, { data: 0 }), zd = Wt(P1), R1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, O1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, L1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function M1(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = L1[n]) ? !!i[n] : !1;
  }
  function Jl() {
    return M1;
  }
  var D1 = b({}, co, { key: function(n) {
    if (n.key) {
      var i = R1[n.key] || n.key;
      if (i !== "Unidentified")
        return i;
    }
    return n.type === "keypress" ? (n = Ls(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? O1[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Jl, charCode: function(n) {
    return n.type === "keypress" ? Ls(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ls(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), N1 = Wt(D1), F1 = b({}, Ds, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $d = Wt(F1), I1 = b({}, co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Jl }), j1 = Wt(I1), V1 = b({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), B1 = Wt(V1), z1 = b({}, Ds, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $1 = Wt(z1), U1 = [9, 13, 27, 32], eu = m && "CompositionEvent" in window, ho = null;
  m && "documentMode" in document && (ho = document.documentMode);
  var H1 = m && "TextEvent" in window && !ho, Ud = m && (!eu || ho && 8 < ho && 11 >= ho), Hd = String.fromCharCode(32), Wd = !1;
  function qd(n, i) {
    switch (n) {
      case "keyup":
        return U1.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gd(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var si = !1;
  function W1(n, i) {
    switch (n) {
      case "compositionend":
        return Gd(i);
      case "keypress":
        return i.which !== 32 ? null : (Wd = !0, Hd);
      case "textInput":
        return n = i.data, n === Hd && Wd ? null : n;
      default:
        return null;
    }
  }
  function q1(n, i) {
    if (si)
      return n === "compositionend" || !eu && qd(n, i) ? (n = jd(), Os = Kl = ur = null, si = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length)
            return i.char;
          if (i.which)
            return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Ud && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var G1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kd(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!G1[n.type] : i === "textarea";
  }
  function Yd(n, i, s, l) {
    xs(l), i = Vs(i, "onChange"), 0 < i.length && (s = new Yl("onChange", "change", null, s, l), n.push({ event: s, listeners: i }));
  }
  var po = null, mo = null;
  function K1(n) {
    hh(n, 0);
  }
  function Ns(n) {
    var i = fi(n);
    if (wn(i))
      return n;
  }
  function Y1(n, i) {
    if (n === "change")
      return i;
  }
  var Qd = !1;
  if (m) {
    var tu;
    if (m) {
      var nu = "oninput" in document;
      if (!nu) {
        var Xd = document.createElement("div");
        Xd.setAttribute("oninput", "return;"), nu = typeof Xd.oninput == "function";
      }
      tu = nu;
    } else
      tu = !1;
    Qd = tu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zd() {
    po && (po.detachEvent("onpropertychange", Jd), mo = po = null);
  }
  function Jd(n) {
    if (n.propertyName === "value" && Ns(mo)) {
      var i = [];
      Yd(i, mo, n, zn(n)), xd(K1, i);
    }
  }
  function Q1(n, i, s) {
    n === "focusin" ? (Zd(), po = i, mo = s, po.attachEvent("onpropertychange", Jd)) : n === "focusout" && Zd();
  }
  function X1(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ns(mo);
  }
  function Z1(n, i) {
    if (n === "click")
      return Ns(i);
  }
  function J1(n, i) {
    if (n === "input" || n === "change")
      return Ns(i);
  }
  function ex(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var cn = typeof Object.is == "function" ? Object.is : ex;
  function go(n, i) {
    if (cn(n, i))
      return !0;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null)
      return !1;
    var s = Object.keys(n), l = Object.keys(i);
    if (s.length !== l.length)
      return !1;
    for (l = 0; l < s.length; l++) {
      var d = s[l];
      if (!y.call(i, d) || !cn(n[d], i[d]))
        return !1;
    }
    return !0;
  }
  function eh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function th(n, i) {
    var s = eh(n);
    n = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (l = n + s.textContent.length, n <= i && l >= i)
          return { node: s, offset: i - n };
        n = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = eh(s);
    }
  }
  function nh(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? nh(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function rh() {
    for (var n = window, i = _n(); i instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof i.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s)
        n = i.contentWindow;
      else
        break;
      i = _n(n.document);
    }
    return i;
  }
  function ru(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i && (i === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || i === "textarea" || n.contentEditable === "true");
  }
  function tx(n) {
    var i = rh(), s = n.focusedElem, l = n.selectionRange;
    if (i !== s && s && s.ownerDocument && nh(s.ownerDocument.documentElement, s)) {
      if (l !== null && ru(s)) {
        if (i = l.start, n = l.end, n === void 0 && (n = i), "selectionStart" in s)
          s.selectionStart = i, s.selectionEnd = Math.min(n, s.value.length);
        else if (n = (i = s.ownerDocument || document) && i.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = s.textContent.length, p = Math.min(l.start, d);
          l = l.end === void 0 ? p : Math.min(l.end, d), !n.extend && p > l && (d = l, l = p, p = d), d = th(s, p);
          var _ = th(
            s,
            l
          );
          d && _ && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (i = i.createRange(), i.setStart(d.node, d.offset), n.removeAllRanges(), p > l ? (n.addRange(i), n.extend(_.node, _.offset)) : (i.setEnd(_.node, _.offset), n.addRange(i)));
        }
      }
      for (i = [], n = s; n = n.parentNode; )
        n.nodeType === 1 && i.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < i.length; s++)
        n = i[s], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var nx = m && "documentMode" in document && 11 >= document.documentMode, ai = null, iu = null, yo = null, ou = !1;
  function ih(n, i, s) {
    var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    ou || ai == null || ai !== _n(l) || (l = ai, "selectionStart" in l && ru(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), yo && go(yo, l) || (yo = l, l = Vs(iu, "onSelect"), 0 < l.length && (i = new Yl("onSelect", "select", null, i, s), n.push({ event: i, listeners: l }), i.target = ai)));
  }
  function Fs(n, i) {
    var s = {};
    return s[n.toLowerCase()] = i.toLowerCase(), s["Webkit" + n] = "webkit" + i, s["Moz" + n] = "moz" + i, s;
  }
  var li = { animationend: Fs("Animation", "AnimationEnd"), animationiteration: Fs("Animation", "AnimationIteration"), animationstart: Fs("Animation", "AnimationStart"), transitionend: Fs("Transition", "TransitionEnd") }, su = {}, oh = {};
  m && (oh = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);
  function Is(n) {
    if (su[n])
      return su[n];
    if (!li[n])
      return n;
    var i = li[n], s;
    for (s in i)
      if (i.hasOwnProperty(s) && s in oh)
        return su[n] = i[s];
    return n;
  }
  var sh = Is("animationend"), ah = Is("animationiteration"), lh = Is("animationstart"), uh = Is("transitionend"), ch = /* @__PURE__ */ new Map(), fh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(n, i) {
    ch.set(n, i), c(i, [n]);
  }
  for (var au = 0; au < fh.length; au++) {
    var lu = fh[au], rx = lu.toLowerCase(), ix = lu[0].toUpperCase() + lu.slice(1);
    cr(rx, "on" + ix);
  }
  cr(sh, "onAnimationEnd"), cr(ah, "onAnimationIteration"), cr(lh, "onAnimationStart"), cr("dblclick", "onDoubleClick"), cr("focusin", "onFocus"), cr("focusout", "onBlur"), cr(uh, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ox = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
  function dh(n, i, s) {
    var l = n.type || "unknown-event";
    n.currentTarget = s, r1(l, i, void 0, n), n.currentTarget = null;
  }
  function hh(n, i) {
    i = (i & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var l = n[s], d = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (i)
          for (var _ = l.length - 1; 0 <= _; _--) {
            var C = l[_], P = C.instance, F = C.currentTarget;
            if (C = C.listener, P !== p && d.isPropagationStopped())
              break e;
            dh(d, C, F), p = P;
          }
        else
          for (_ = 0; _ < l.length; _++) {
            if (C = l[_], P = C.instance, F = C.currentTarget, C = C.listener, P !== p && d.isPropagationStopped())
              break e;
            dh(d, C, F), p = P;
          }
      }
    }
    if (_s)
      throw n = Vl, _s = !1, Vl = null, n;
  }
  function He(n, i) {
    var s = i[gu];
    s === void 0 && (s = i[gu] = /* @__PURE__ */ new Set());
    var l = n + "__bubble";
    s.has(l) || (ph(i, n, 2, !1), s.add(l));
  }
  function uu(n, i, s) {
    var l = 0;
    i && (l |= 4), ph(s, n, l, i);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function xo(n) {
    if (!n[js]) {
      n[js] = !0, o.forEach(function(s) {
        s !== "selectionchange" && (ox.has(s) || uu(s, !1, n), uu(s, !0, n));
      });
      var i = n.nodeType === 9 ? n : n.ownerDocument;
      i === null || i[js] || (i[js] = !0, uu("selectionchange", !1, i));
    }
  }
  function ph(n, i, s, l) {
    switch (Id(i)) {
      case 1:
        var d = x1;
        break;
      case 4:
        d = w1;
        break;
      default:
        d = ql;
    }
    s = d.bind(null, i, s, n), d = void 0, !jl || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (d = !0), l ? d !== void 0 ? n.addEventListener(i, s, { capture: !0, passive: d }) : n.addEventListener(i, s, !0) : d !== void 0 ? n.addEventListener(i, s, { passive: d }) : n.addEventListener(i, s, !1);
  }
  function cu(n, i, s, l, d) {
    var p = l;
    if (!(i & 1) && !(i & 2) && l !== null)
      e:
        for (; ; ) {
          if (l === null)
            return;
          var _ = l.tag;
          if (_ === 3 || _ === 4) {
            var C = l.stateNode.containerInfo;
            if (C === d || C.nodeType === 8 && C.parentNode === d)
              break;
            if (_ === 4)
              for (_ = l.return; _ !== null; ) {
                var P = _.tag;
                if ((P === 3 || P === 4) && (P = _.stateNode.containerInfo, P === d || P.nodeType === 8 && P.parentNode === d))
                  return;
                _ = _.return;
              }
            for (; C !== null; ) {
              if (_ = Ir(C), _ === null)
                return;
              if (P = _.tag, P === 5 || P === 6) {
                l = p = _;
                continue e;
              }
              C = C.parentNode;
            }
          }
          l = l.return;
        }
    xd(function() {
      var F = p, H = zn(s), q = [];
      e: {
        var U = ch.get(n);
        if (U !== void 0) {
          var ee = Yl, oe = n;
          switch (n) {
            case "keypress":
              if (Ls(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              ee = N1;
              break;
            case "focusin":
              oe = "focus", ee = Zl;
              break;
            case "focusout":
              oe = "blur", ee = Zl;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Zl;
              break;
            case "click":
              if (s.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = k1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = j1;
              break;
            case sh:
            case ah:
            case lh:
              ee = E1;
              break;
            case uh:
              ee = B1;
              break;
            case "scroll":
              ee = _1;
              break;
            case "wheel":
              ee = $1;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = b1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = $d;
          }
          var se = (i & 4) !== 0, rt = !se && n === "scroll", D = se ? U !== null ? U + "Capture" : null : U;
          se = [];
          for (var R = F, N; R !== null; ) {
            N = R;
            var Y = N.stateNode;
            if (N.tag === 5 && Y !== null && (N = Y, D !== null && (Y = eo(R, D), Y != null && se.push(wo(R, Y, N)))), rt)
              break;
            R = R.return;
          }
          0 < se.length && (U = new ee(U, oe, null, s, H), q.push({ event: U, listeners: se }));
        }
      }
      if (!(i & 7)) {
        e: {
          if (U = n === "mouseover" || n === "pointerover", ee = n === "mouseout" || n === "pointerout", U && s !== Ue && (oe = s.relatedTarget || s.fromElement) && (Ir(oe) || oe[$n]))
            break e;
          if ((ee || U) && (U = H.window === H ? H : (U = H.ownerDocument) ? U.defaultView || U.parentWindow : window, ee ? (oe = s.relatedTarget || s.toElement, ee = F, oe = oe ? Ir(oe) : null, oe !== null && (rt = Fr(oe), oe !== rt || oe.tag !== 5 && oe.tag !== 6) && (oe = null)) : (ee = null, oe = F), ee !== oe)) {
            if (se = Bd, Y = "onMouseLeave", D = "onMouseEnter", R = "mouse", (n === "pointerout" || n === "pointerover") && (se = $d, Y = "onPointerLeave", D = "onPointerEnter", R = "pointer"), rt = ee == null ? U : fi(ee), N = oe == null ? U : fi(oe), U = new se(Y, R + "leave", ee, s, H), U.target = rt, U.relatedTarget = N, Y = null, Ir(H) === F && (se = new se(D, R + "enter", oe, s, H), se.target = N, se.relatedTarget = rt, Y = se), rt = Y, ee && oe)
              t: {
                for (se = ee, D = oe, R = 0, N = se; N; N = ui(N))
                  R++;
                for (N = 0, Y = D; Y; Y = ui(Y))
                  N++;
                for (; 0 < R - N; )
                  se = ui(se), R--;
                for (; 0 < N - R; )
                  D = ui(D), N--;
                for (; R--; ) {
                  if (se === D || D !== null && se === D.alternate)
                    break t;
                  se = ui(se), D = ui(D);
                }
                se = null;
              }
            else
              se = null;
            ee !== null && mh(q, U, ee, se, !1), oe !== null && rt !== null && mh(q, rt, oe, se, !0);
          }
        }
        e: {
          if (U = F ? fi(F) : window, ee = U.nodeName && U.nodeName.toLowerCase(), ee === "select" || ee === "input" && U.type === "file")
            var ce = Y1;
          else if (Kd(U))
            if (Qd)
              ce = J1;
            else {
              ce = X1;
              var pe = Q1;
            }
          else
            (ee = U.nodeName) && ee.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (ce = Z1);
          if (ce && (ce = ce(n, F))) {
            Yd(q, ce, s, H);
            break e;
          }
          pe && pe(n, U, F), n === "focusout" && (pe = U._wrapperState) && pe.controlled && U.type === "number" && ie(U, "number", U.value);
        }
        switch (pe = F ? fi(F) : window, n) {
          case "focusin":
            (Kd(pe) || pe.contentEditable === "true") && (ai = pe, iu = F, yo = null);
            break;
          case "focusout":
            yo = iu = ai = null;
            break;
          case "mousedown":
            ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ou = !1, ih(q, s, H);
            break;
          case "selectionchange":
            if (nx)
              break;
          case "keydown":
          case "keyup":
            ih(q, s, H);
        }
        var me;
        if (eu)
          e: {
            switch (n) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          si ? qd(n, s) && (we = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (we = "onCompositionStart");
        we && (Ud && s.locale !== "ko" && (si || we !== "onCompositionStart" ? we === "onCompositionEnd" && si && (me = jd()) : (ur = H, Kl = "value" in ur ? ur.value : ur.textContent, si = !0)), pe = Vs(F, we), 0 < pe.length && (we = new zd(we, n, null, s, H), q.push({ event: we, listeners: pe }), me ? we.data = me : (me = Gd(s), me !== null && (we.data = me)))), (me = H1 ? W1(n, s) : q1(n, s)) && (F = Vs(F, "onBeforeInput"), 0 < F.length && (H = new zd("onBeforeInput", "beforeinput", null, s, H), q.push({ event: H, listeners: F }), H.data = me));
      }
      hh(q, i);
    });
  }
  function wo(n, i, s) {
    return { instance: n, listener: i, currentTarget: s };
  }
  function Vs(n, i) {
    for (var s = i + "Capture", l = []; n !== null; ) {
      var d = n, p = d.stateNode;
      d.tag === 5 && p !== null && (d = p, p = eo(n, s), p != null && l.unshift(wo(n, p, d)), p = eo(n, i), p != null && l.push(wo(n, p, d))), n = n.return;
    }
    return l;
  }
  function ui(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function mh(n, i, s, l, d) {
    for (var p = i._reactName, _ = []; s !== null && s !== l; ) {
      var C = s, P = C.alternate, F = C.stateNode;
      if (P !== null && P === l)
        break;
      C.tag === 5 && F !== null && (C = F, d ? (P = eo(s, p), P != null && _.unshift(wo(s, P, C))) : d || (P = eo(s, p), P != null && _.push(wo(s, P, C)))), s = s.return;
    }
    _.length !== 0 && n.push({ event: i, listeners: _ });
  }
  var sx = /\r\n?/g, ax = /\u0000|\uFFFD/g;
  function gh(n) {
    return (typeof n == "string" ? n : "" + n).replace(sx, `
`).replace(ax, "");
  }
  function Bs(n, i, s) {
    if (i = gh(i), gh(n) !== i && s)
      throw Error(r(425));
  }
  function zs() {
  }
  var fu = null, du = null;
  function hu(n, i) {
    return n === "textarea" || n === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var pu = typeof setTimeout == "function" ? setTimeout : void 0, lx = typeof clearTimeout == "function" ? clearTimeout : void 0, yh = typeof Promise == "function" ? Promise : void 0, ux = typeof queueMicrotask == "function" ? queueMicrotask : typeof yh < "u" ? function(n) {
    return yh.resolve(null).then(n).catch(cx);
  } : pu;
  function cx(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function mu(n, i) {
    var s = i, l = 0;
    do {
      var d = s.nextSibling;
      if (n.removeChild(s), d && d.nodeType === 8)
        if (s = d.data, s === "/$") {
          if (l === 0) {
            n.removeChild(d), uo(i);
            return;
          }
          l--;
        } else
          s !== "$" && s !== "$?" && s !== "$!" || l++;
      s = d;
    } while (s);
    uo(i);
  }
  function fr(n) {
    for (; n != null; n = n.nextSibling) {
      var i = n.nodeType;
      if (i === 1 || i === 3)
        break;
      if (i === 8) {
        if (i = n.data, i === "$" || i === "$!" || i === "$?")
          break;
        if (i === "/$")
          return null;
      }
    }
    return n;
  }
  function vh(n) {
    n = n.previousSibling;
    for (var i = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (i === 0)
            return n;
          i--;
        } else
          s === "/$" && i++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ci = Math.random().toString(36).slice(2), Tn = "__reactFiber$" + ci, _o = "__reactProps$" + ci, $n = "__reactContainer$" + ci, gu = "__reactEvents$" + ci, fx = "__reactListeners$" + ci, dx = "__reactHandles$" + ci;
  function Ir(n) {
    var i = n[Tn];
    if (i)
      return i;
    for (var s = n.parentNode; s; ) {
      if (i = s[$n] || s[Tn]) {
        if (s = i.alternate, i.child !== null || s !== null && s.child !== null)
          for (n = vh(n); n !== null; ) {
            if (s = n[Tn])
              return s;
            n = vh(n);
          }
        return i;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function So(n) {
    return n = n[Tn] || n[$n], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fi(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(r(33));
  }
  function $s(n) {
    return n[_o] || null;
  }
  var yu = [], di = -1;
  function dr(n) {
    return { current: n };
  }
  function We(n) {
    0 > di || (n.current = yu[di], yu[di] = null, di--);
  }
  function $e(n, i) {
    di++, yu[di] = n.current, n.current = i;
  }
  var hr = {}, Et = dr(hr), It = dr(!1), jr = hr;
  function hi(n, i) {
    var s = n.type.contextTypes;
    if (!s)
      return hr;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === i)
      return l.__reactInternalMemoizedMaskedChildContext;
    var d = {}, p;
    for (p in s)
      d[p] = i[p];
    return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = i, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function jt(n) {
    return n = n.childContextTypes, n != null;
  }
  function Us() {
    We(It), We(Et);
  }
  function xh(n, i, s) {
    if (Et.current !== hr)
      throw Error(r(168));
    $e(Et, i), $e(It, s);
  }
  function wh(n, i, s) {
    var l = n.stateNode;
    if (i = i.childContextTypes, typeof l.getChildContext != "function")
      return s;
    l = l.getChildContext();
    for (var d in l)
      if (!(d in i))
        throw Error(r(108, Pe(n) || "Unknown", d));
    return b({}, s, l);
  }
  function Hs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || hr, jr = Et.current, $e(Et, n), $e(It, It.current), !0;
  }
  function _h(n, i, s) {
    var l = n.stateNode;
    if (!l)
      throw Error(r(169));
    s ? (n = wh(n, i, jr), l.__reactInternalMemoizedMergedChildContext = n, We(It), We(Et), $e(Et, n)) : We(It), $e(It, s);
  }
  var Un = null, Ws = !1, vu = !1;
  function Sh(n) {
    Un === null ? Un = [n] : Un.push(n);
  }
  function hx(n) {
    Ws = !0, Sh(n);
  }
  function pr() {
    if (!vu && Un !== null) {
      vu = !0;
      var n = 0, i = Ve;
      try {
        var s = Un;
        for (Ve = 1; n < s.length; n++) {
          var l = s[n];
          do
            l = l(!0);
          while (l !== null);
        }
        Un = null, Ws = !1;
      } catch (d) {
        throw Un !== null && (Un = Un.slice(n + 1)), Td(Bl, pr), d;
      } finally {
        Ve = i, vu = !1;
      }
    }
    return null;
  }
  var pi = [], mi = 0, qs = null, Gs = 0, Xt = [], Zt = 0, Vr = null, Hn = 1, Wn = "";
  function Br(n, i) {
    pi[mi++] = Gs, pi[mi++] = qs, qs = n, Gs = i;
  }
  function kh(n, i, s) {
    Xt[Zt++] = Hn, Xt[Zt++] = Wn, Xt[Zt++] = Vr, Vr = n;
    var l = Hn;
    n = Wn;
    var d = 32 - un(l) - 1;
    l &= ~(1 << d), s += 1;
    var p = 32 - un(i) + d;
    if (30 < p) {
      var _ = d - d % 5;
      p = (l & (1 << _) - 1).toString(32), l >>= _, d -= _, Hn = 1 << 32 - un(i) + d | s << d | l, Wn = p + n;
    } else
      Hn = 1 << p | s << d | l, Wn = n;
  }
  function xu(n) {
    n.return !== null && (Br(n, 1), kh(n, 1, 0));
  }
  function wu(n) {
    for (; n === qs; )
      qs = pi[--mi], pi[mi] = null, Gs = pi[--mi], pi[mi] = null;
    for (; n === Vr; )
      Vr = Xt[--Zt], Xt[Zt] = null, Wn = Xt[--Zt], Xt[Zt] = null, Hn = Xt[--Zt], Xt[Zt] = null;
  }
  var qt = null, Gt = null, qe = !1, fn = null;
  function Th(n, i) {
    var s = nn(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = i, s.return = n, i = n.deletions, i === null ? (n.deletions = [s], n.flags |= 16) : i.push(s);
  }
  function Ch(n, i) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return i = i.nodeType !== 1 || s.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (n.stateNode = i, qt = n, Gt = fr(i.firstChild), !0) : !1;
      case 6:
        return i = n.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (n.stateNode = i, qt = n, Gt = null, !0) : !1;
      case 13:
        return i = i.nodeType !== 8 ? null : i, i !== null ? (s = Vr !== null ? { id: Hn, overflow: Wn } : null, n.memoizedState = { dehydrated: i, treeContext: s, retryLane: 1073741824 }, s = nn(18, null, null, 0), s.stateNode = i, s.return = n, n.child = s, qt = n, Gt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _u(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Su(n) {
    if (qe) {
      var i = Gt;
      if (i) {
        var s = i;
        if (!Ch(n, i)) {
          if (_u(n))
            throw Error(r(418));
          i = fr(s.nextSibling);
          var l = qt;
          i && Ch(n, i) ? Th(l, s) : (n.flags = n.flags & -4097 | 2, qe = !1, qt = n);
        }
      } else {
        if (_u(n))
          throw Error(r(418));
        n.flags = n.flags & -4097 | 2, qe = !1, qt = n;
      }
    }
  }
  function Eh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    qt = n;
  }
  function Ks(n) {
    if (n !== qt)
      return !1;
    if (!qe)
      return Eh(n), qe = !0, !1;
    var i;
    if ((i = n.tag !== 3) && !(i = n.tag !== 5) && (i = n.type, i = i !== "head" && i !== "body" && !hu(n.type, n.memoizedProps)), i && (i = Gt)) {
      if (_u(n))
        throw Ah(), Error(r(418));
      for (; i; )
        Th(n, i), i = fr(i.nextSibling);
    }
    if (Eh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(r(317));
      e: {
        for (n = n.nextSibling, i = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (i === 0) {
                Gt = fr(n.nextSibling);
                break e;
              }
              i--;
            } else
              s !== "$" && s !== "$!" && s !== "$?" || i++;
          }
          n = n.nextSibling;
        }
        Gt = null;
      }
    } else
      Gt = qt ? fr(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ah() {
    for (var n = Gt; n; )
      n = fr(n.nextSibling);
  }
  function gi() {
    Gt = qt = null, qe = !1;
  }
  function ku(n) {
    fn === null ? fn = [n] : fn.push(n);
  }
  var px = V.ReactCurrentBatchConfig;
  function dn(n, i) {
    if (n && n.defaultProps) {
      i = b({}, i), n = n.defaultProps;
      for (var s in n)
        i[s] === void 0 && (i[s] = n[s]);
      return i;
    }
    return i;
  }
  var Ys = dr(null), Qs = null, yi = null, Tu = null;
  function Cu() {
    Tu = yi = Qs = null;
  }
  function Eu(n) {
    var i = Ys.current;
    We(Ys), n._currentValue = i;
  }
  function Au(n, i, s) {
    for (; n !== null; ) {
      var l = n.alternate;
      if ((n.childLanes & i) !== i ? (n.childLanes |= i, l !== null && (l.childLanes |= i)) : l !== null && (l.childLanes & i) !== i && (l.childLanes |= i), n === s)
        break;
      n = n.return;
    }
  }
  function vi(n, i) {
    Qs = n, Tu = yi = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & i && (Vt = !0), n.firstContext = null);
  }
  function Jt(n) {
    var i = n._currentValue;
    if (Tu !== n)
      if (n = { context: n, memoizedValue: i, next: null }, yi === null) {
        if (Qs === null)
          throw Error(r(308));
        yi = n, Qs.dependencies = { lanes: 0, firstContext: n };
      } else
        yi = yi.next = n;
    return i;
  }
  var zr = null;
  function bu(n) {
    zr === null ? zr = [n] : zr.push(n);
  }
  function bh(n, i, s, l) {
    var d = i.interleaved;
    return d === null ? (s.next = s, bu(i)) : (s.next = d.next, d.next = s), i.interleaved = s, qn(n, l);
  }
  function qn(n, i) {
    n.lanes |= i;
    var s = n.alternate;
    for (s !== null && (s.lanes |= i), s = n, n = n.return; n !== null; )
      n.childLanes |= i, s = n.alternate, s !== null && (s.childLanes |= i), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var mr = !1;
  function Pu(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ph(n, i) {
    n = n.updateQueue, i.updateQueue === n && (i.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gn(n, i) {
    return { eventTime: n, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function gr(n, i, s) {
    var l = n.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, Me & 2) {
      var d = l.pending;
      return d === null ? i.next = i : (i.next = d.next, d.next = i), l.pending = i, qn(n, s);
    }
    return d = l.interleaved, d === null ? (i.next = i, bu(l)) : (i.next = d.next, d.next = i), l.interleaved = i, qn(n, s);
  }
  function Xs(n, i, s) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (s & 4194240) !== 0)) {
      var l = i.lanes;
      l &= n.pendingLanes, s |= l, i.lanes = s, Ul(n, s);
    }
  }
  function Rh(n, i) {
    var s = n.updateQueue, l = n.alternate;
    if (l !== null && (l = l.updateQueue, s === l)) {
      var d = null, p = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var _ = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          p === null ? d = p = _ : p = p.next = _, s = s.next;
        } while (s !== null);
        p === null ? d = p = i : p = p.next = i;
      } else
        d = p = i;
      s = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: p, shared: l.shared, effects: l.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = i : n.next = i, s.lastBaseUpdate = i;
  }
  function Zs(n, i, s, l) {
    var d = n.updateQueue;
    mr = !1;
    var p = d.firstBaseUpdate, _ = d.lastBaseUpdate, C = d.shared.pending;
    if (C !== null) {
      d.shared.pending = null;
      var P = C, F = P.next;
      P.next = null, _ === null ? p = F : _.next = F, _ = P;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, C = H.lastBaseUpdate, C !== _ && (C === null ? H.firstBaseUpdate = F : C.next = F, H.lastBaseUpdate = P));
    }
    if (p !== null) {
      var q = d.baseState;
      _ = 0, H = F = P = null, C = p;
      do {
        var U = C.lane, ee = C.eventTime;
        if ((l & U) === U) {
          H !== null && (H = H.next = {
            eventTime: ee,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var oe = n, se = C;
            switch (U = i, ee = s, se.tag) {
              case 1:
                if (oe = se.payload, typeof oe == "function") {
                  q = oe.call(ee, q, U);
                  break e;
                }
                q = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = se.payload, U = typeof oe == "function" ? oe.call(ee, q, U) : oe, U == null)
                  break e;
                q = b({}, q, U);
                break e;
              case 2:
                mr = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (n.flags |= 64, U = d.effects, U === null ? d.effects = [C] : U.push(C));
        } else
          ee = { eventTime: ee, lane: U, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, H === null ? (F = H = ee, P = q) : H = H.next = ee, _ |= U;
        if (C = C.next, C === null) {
          if (C = d.shared.pending, C === null)
            break;
          U = C, C = U.next, U.next = null, d.lastBaseUpdate = U, d.shared.pending = null;
        }
      } while (1);
      if (H === null && (P = q), d.baseState = P, d.firstBaseUpdate = F, d.lastBaseUpdate = H, i = d.shared.interleaved, i !== null) {
        d = i;
        do
          _ |= d.lane, d = d.next;
        while (d !== i);
      } else
        p === null && (d.shared.lanes = 0);
      Hr |= _, n.lanes = _, n.memoizedState = q;
    }
  }
  function Oh(n, i, s) {
    if (n = i.effects, i.effects = null, n !== null)
      for (i = 0; i < n.length; i++) {
        var l = n[i], d = l.callback;
        if (d !== null) {
          if (l.callback = null, l = s, typeof d != "function")
            throw Error(r(191, d));
          d.call(l);
        }
      }
  }
  var Lh = new e.Component().refs;
  function Ru(n, i, s, l) {
    i = n.memoizedState, s = s(l, i), s = s == null ? i : b({}, i, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var Js = { isMounted: function(n) {
    return (n = n._reactInternals) ? Fr(n) === n : !1;
  }, enqueueSetState: function(n, i, s) {
    n = n._reactInternals;
    var l = Lt(), d = wr(n), p = Gn(l, d);
    p.payload = i, s != null && (p.callback = s), i = gr(n, p, d), i !== null && (mn(i, n, d, l), Xs(i, n, d));
  }, enqueueReplaceState: function(n, i, s) {
    n = n._reactInternals;
    var l = Lt(), d = wr(n), p = Gn(l, d);
    p.tag = 1, p.payload = i, s != null && (p.callback = s), i = gr(n, p, d), i !== null && (mn(i, n, d, l), Xs(i, n, d));
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var s = Lt(), l = wr(n), d = Gn(s, l);
    d.tag = 2, i != null && (d.callback = i), i = gr(n, d, l), i !== null && (mn(i, n, l, s), Xs(i, n, l));
  } };
  function Mh(n, i, s, l, d, p, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, p, _) : i.prototype && i.prototype.isPureReactComponent ? !go(s, l) || !go(d, p) : !0;
  }
  function Dh(n, i, s) {
    var l = !1, d = hr, p = i.contextType;
    return typeof p == "object" && p !== null ? p = Jt(p) : (d = jt(i) ? jr : Et.current, l = i.contextTypes, p = (l = l != null) ? hi(n, d) : hr), i = new i(s, p), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Js, n.stateNode = i, i._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = p), i;
  }
  function Nh(n, i, s, l) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(s, l), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(s, l), i.state !== n && Js.enqueueReplaceState(i, i.state, null);
  }
  function Ou(n, i, s, l) {
    var d = n.stateNode;
    d.props = s, d.state = n.memoizedState, d.refs = Lh, Pu(n);
    var p = i.contextType;
    typeof p == "object" && p !== null ? d.context = Jt(p) : (p = jt(i) ? jr : Et.current, d.context = hi(n, p)), d.state = n.memoizedState, p = i.getDerivedStateFromProps, typeof p == "function" && (Ru(n, i, p, s), d.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (i = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), i !== d.state && Js.enqueueReplaceState(d, d.state, null), Zs(n, s, d, l), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ko(n, i, s) {
    if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1)
            throw Error(r(309));
          var l = s.stateNode;
        }
        if (!l)
          throw Error(r(147, n));
        var d = l, p = "" + n;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === p ? i.ref : (i = function(_) {
          var C = d.refs;
          C === Lh && (C = d.refs = {}), _ === null ? delete C[p] : C[p] = _;
        }, i._stringRef = p, i);
      }
      if (typeof n != "string")
        throw Error(r(284));
      if (!s._owner)
        throw Error(r(290, n));
    }
    return n;
  }
  function ea(n, i) {
    throw n = Object.prototype.toString.call(i), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : n));
  }
  function Fh(n) {
    var i = n._init;
    return i(n._payload);
  }
  function Ih(n) {
    function i(D, R) {
      if (n) {
        var N = D.deletions;
        N === null ? (D.deletions = [R], D.flags |= 16) : N.push(R);
      }
    }
    function s(D, R) {
      if (!n)
        return null;
      for (; R !== null; )
        i(D, R), R = R.sibling;
      return null;
    }
    function l(D, R) {
      for (D = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? D.set(R.key, R) : D.set(R.index, R), R = R.sibling;
      return D;
    }
    function d(D, R) {
      return D = Sr(D, R), D.index = 0, D.sibling = null, D;
    }
    function p(D, R, N) {
      return D.index = N, n ? (N = D.alternate, N !== null ? (N = N.index, N < R ? (D.flags |= 2, R) : N) : (D.flags |= 2, R)) : (D.flags |= 1048576, R);
    }
    function _(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function C(D, R, N, Y) {
      return R === null || R.tag !== 6 ? (R = pc(N, D.mode, Y), R.return = D, R) : (R = d(R, N), R.return = D, R);
    }
    function P(D, R, N, Y) {
      var ce = N.type;
      return ce === K ? H(D, R, N.props.children, Y, N.key) : R !== null && (R.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Ee && Fh(ce) === R.type) ? (Y = d(R, N.props), Y.ref = ko(D, R, N), Y.return = D, Y) : (Y = xa(N.type, N.key, N.props, null, D.mode, Y), Y.ref = ko(D, R, N), Y.return = D, Y);
    }
    function F(D, R, N, Y) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== N.containerInfo || R.stateNode.implementation !== N.implementation ? (R = mc(N, D.mode, Y), R.return = D, R) : (R = d(R, N.children || []), R.return = D, R);
    }
    function H(D, R, N, Y, ce) {
      return R === null || R.tag !== 7 ? (R = Kr(N, D.mode, Y, ce), R.return = D, R) : (R = d(R, N), R.return = D, R);
    }
    function q(D, R, N) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = pc("" + R, D.mode, N), R.return = D, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case $:
            return N = xa(R.type, R.key, R.props, null, D.mode, N), N.ref = ko(D, null, R), N.return = D, N;
          case X:
            return R = mc(R, D.mode, N), R.return = D, R;
          case Ee:
            var Y = R._init;
            return q(D, Y(R._payload), N);
        }
        if (Z(R) || ue(R))
          return R = Kr(R, D.mode, N, null), R.return = D, R;
        ea(D, R);
      }
      return null;
    }
    function U(D, R, N, Y) {
      var ce = R !== null ? R.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return ce !== null ? null : C(D, R, "" + N, Y);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case $:
            return N.key === ce ? P(D, R, N, Y) : null;
          case X:
            return N.key === ce ? F(D, R, N, Y) : null;
          case Ee:
            return ce = N._init, U(
              D,
              R,
              ce(N._payload),
              Y
            );
        }
        if (Z(N) || ue(N))
          return ce !== null ? null : H(D, R, N, Y, null);
        ea(D, N);
      }
      return null;
    }
    function ee(D, R, N, Y, ce) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number")
        return D = D.get(N) || null, C(R, D, "" + Y, ce);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case $:
            return D = D.get(Y.key === null ? N : Y.key) || null, P(R, D, Y, ce);
          case X:
            return D = D.get(Y.key === null ? N : Y.key) || null, F(R, D, Y, ce);
          case Ee:
            var pe = Y._init;
            return ee(D, R, N, pe(Y._payload), ce);
        }
        if (Z(Y) || ue(Y))
          return D = D.get(N) || null, H(R, D, Y, ce, null);
        ea(R, Y);
      }
      return null;
    }
    function oe(D, R, N, Y) {
      for (var ce = null, pe = null, me = R, we = R = 0, yt = null; me !== null && we < N.length; we++) {
        me.index > we ? (yt = me, me = null) : yt = me.sibling;
        var Ne = U(D, me, N[we], Y);
        if (Ne === null) {
          me === null && (me = yt);
          break;
        }
        n && me && Ne.alternate === null && i(D, me), R = p(Ne, R, we), pe === null ? ce = Ne : pe.sibling = Ne, pe = Ne, me = yt;
      }
      if (we === N.length)
        return s(D, me), qe && Br(D, we), ce;
      if (me === null) {
        for (; we < N.length; we++)
          me = q(D, N[we], Y), me !== null && (R = p(me, R, we), pe === null ? ce = me : pe.sibling = me, pe = me);
        return qe && Br(D, we), ce;
      }
      for (me = l(D, me); we < N.length; we++)
        yt = ee(me, D, we, N[we], Y), yt !== null && (n && yt.alternate !== null && me.delete(yt.key === null ? we : yt.key), R = p(yt, R, we), pe === null ? ce = yt : pe.sibling = yt, pe = yt);
      return n && me.forEach(function(kr) {
        return i(D, kr);
      }), qe && Br(D, we), ce;
    }
    function se(D, R, N, Y) {
      var ce = ue(N);
      if (typeof ce != "function")
        throw Error(r(150));
      if (N = ce.call(N), N == null)
        throw Error(r(151));
      for (var pe = ce = null, me = R, we = R = 0, yt = null, Ne = N.next(); me !== null && !Ne.done; we++, Ne = N.next()) {
        me.index > we ? (yt = me, me = null) : yt = me.sibling;
        var kr = U(D, me, Ne.value, Y);
        if (kr === null) {
          me === null && (me = yt);
          break;
        }
        n && me && kr.alternate === null && i(D, me), R = p(kr, R, we), pe === null ? ce = kr : pe.sibling = kr, pe = kr, me = yt;
      }
      if (Ne.done)
        return s(
          D,
          me
        ), qe && Br(D, we), ce;
      if (me === null) {
        for (; !Ne.done; we++, Ne = N.next())
          Ne = q(D, Ne.value, Y), Ne !== null && (R = p(Ne, R, we), pe === null ? ce = Ne : pe.sibling = Ne, pe = Ne);
        return qe && Br(D, we), ce;
      }
      for (me = l(D, me); !Ne.done; we++, Ne = N.next())
        Ne = ee(me, D, we, Ne.value, Y), Ne !== null && (n && Ne.alternate !== null && me.delete(Ne.key === null ? we : Ne.key), R = p(Ne, R, we), pe === null ? ce = Ne : pe.sibling = Ne, pe = Ne);
      return n && me.forEach(function(Gx) {
        return i(D, Gx);
      }), qe && Br(D, we), ce;
    }
    function rt(D, R, N, Y) {
      if (typeof N == "object" && N !== null && N.type === K && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case $:
            e: {
              for (var ce = N.key, pe = R; pe !== null; ) {
                if (pe.key === ce) {
                  if (ce = N.type, ce === K) {
                    if (pe.tag === 7) {
                      s(D, pe.sibling), R = d(pe, N.props.children), R.return = D, D = R;
                      break e;
                    }
                  } else if (pe.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Ee && Fh(ce) === pe.type) {
                    s(D, pe.sibling), R = d(pe, N.props), R.ref = ko(D, pe, N), R.return = D, D = R;
                    break e;
                  }
                  s(D, pe);
                  break;
                } else
                  i(D, pe);
                pe = pe.sibling;
              }
              N.type === K ? (R = Kr(N.props.children, D.mode, Y, N.key), R.return = D, D = R) : (Y = xa(N.type, N.key, N.props, null, D.mode, Y), Y.ref = ko(D, R, N), Y.return = D, D = Y);
            }
            return _(D);
          case X:
            e: {
              for (pe = N.key; R !== null; ) {
                if (R.key === pe)
                  if (R.tag === 4 && R.stateNode.containerInfo === N.containerInfo && R.stateNode.implementation === N.implementation) {
                    s(D, R.sibling), R = d(R, N.children || []), R.return = D, D = R;
                    break e;
                  } else {
                    s(D, R);
                    break;
                  }
                else
                  i(D, R);
                R = R.sibling;
              }
              R = mc(N, D.mode, Y), R.return = D, D = R;
            }
            return _(D);
          case Ee:
            return pe = N._init, rt(D, R, pe(N._payload), Y);
        }
        if (Z(N))
          return oe(D, R, N, Y);
        if (ue(N))
          return se(D, R, N, Y);
        ea(D, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, R !== null && R.tag === 6 ? (s(D, R.sibling), R = d(R, N), R.return = D, D = R) : (s(D, R), R = pc(N, D.mode, Y), R.return = D, D = R), _(D)) : s(D, R);
    }
    return rt;
  }
  var xi = Ih(!0), jh = Ih(!1), To = {}, Cn = dr(To), Co = dr(To), Eo = dr(To);
  function $r(n) {
    if (n === To)
      throw Error(r(174));
    return n;
  }
  function Lu(n, i) {
    switch ($e(Eo, i), $e(Co, n), $e(Cn, To), n = i.nodeType, n) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Vn(null, "");
        break;
      default:
        n = n === 8 ? i.parentNode : i, i = n.namespaceURI || null, n = n.tagName, i = Vn(i, n);
    }
    We(Cn), $e(Cn, i);
  }
  function wi() {
    We(Cn), We(Co), We(Eo);
  }
  function Vh(n) {
    $r(Eo.current);
    var i = $r(Cn.current), s = Vn(i, n.type);
    i !== s && ($e(Co, n), $e(Cn, s));
  }
  function Mu(n) {
    Co.current === n && (We(Cn), We(Co));
  }
  var Qe = dr(0);
  function ta(n) {
    for (var i = n; i !== null; ) {
      if (i.tag === 13) {
        var s = i.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!"))
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if (i.flags & 128)
          return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === n)
        break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n)
          return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var Du = [];
  function Nu() {
    for (var n = 0; n < Du.length; n++)
      Du[n]._workInProgressVersionPrimary = null;
    Du.length = 0;
  }
  var na = V.ReactCurrentDispatcher, Fu = V.ReactCurrentBatchConfig, Ur = 0, Xe = null, ct = null, mt = null, ra = !1, Ao = !1, bo = 0, mx = 0;
  function At() {
    throw Error(r(321));
  }
  function Iu(n, i) {
    if (i === null)
      return !1;
    for (var s = 0; s < i.length && s < n.length; s++)
      if (!cn(n[s], i[s]))
        return !1;
    return !0;
  }
  function ju(n, i, s, l, d, p) {
    if (Ur = p, Xe = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, na.current = n === null || n.memoizedState === null ? xx : wx, n = s(l, d), Ao) {
      p = 0;
      do {
        if (Ao = !1, bo = 0, 25 <= p)
          throw Error(r(301));
        p += 1, mt = ct = null, i.updateQueue = null, na.current = _x, n = s(l, d);
      } while (Ao);
    }
    if (na.current = sa, i = ct !== null && ct.next !== null, Ur = 0, mt = ct = Xe = null, ra = !1, i)
      throw Error(r(300));
    return n;
  }
  function Vu() {
    var n = bo !== 0;
    return bo = 0, n;
  }
  function En() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? Xe.memoizedState = mt = n : mt = mt.next = n, mt;
  }
  function en() {
    if (ct === null) {
      var n = Xe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ct.next;
    var i = mt === null ? Xe.memoizedState : mt.next;
    if (i !== null)
      mt = i, ct = n;
    else {
      if (n === null)
        throw Error(r(310));
      ct = n, n = { memoizedState: ct.memoizedState, baseState: ct.baseState, baseQueue: ct.baseQueue, queue: ct.queue, next: null }, mt === null ? Xe.memoizedState = mt = n : mt = mt.next = n;
    }
    return mt;
  }
  function Po(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function Bu(n) {
    var i = en(), s = i.queue;
    if (s === null)
      throw Error(r(311));
    s.lastRenderedReducer = n;
    var l = ct, d = l.baseQueue, p = s.pending;
    if (p !== null) {
      if (d !== null) {
        var _ = d.next;
        d.next = p.next, p.next = _;
      }
      l.baseQueue = d = p, s.pending = null;
    }
    if (d !== null) {
      p = d.next, l = l.baseState;
      var C = _ = null, P = null, F = p;
      do {
        var H = F.lane;
        if ((Ur & H) === H)
          P !== null && (P = P.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), l = F.hasEagerState ? F.eagerState : n(l, F.action);
        else {
          var q = {
            lane: H,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          P === null ? (C = P = q, _ = l) : P = P.next = q, Xe.lanes |= H, Hr |= H;
        }
        F = F.next;
      } while (F !== null && F !== p);
      P === null ? _ = l : P.next = C, cn(l, i.memoizedState) || (Vt = !0), i.memoizedState = l, i.baseState = _, i.baseQueue = P, s.lastRenderedState = l;
    }
    if (n = s.interleaved, n !== null) {
      d = n;
      do
        p = d.lane, Xe.lanes |= p, Hr |= p, d = d.next;
      while (d !== n);
    } else
      d === null && (s.lanes = 0);
    return [i.memoizedState, s.dispatch];
  }
  function zu(n) {
    var i = en(), s = i.queue;
    if (s === null)
      throw Error(r(311));
    s.lastRenderedReducer = n;
    var l = s.dispatch, d = s.pending, p = i.memoizedState;
    if (d !== null) {
      s.pending = null;
      var _ = d = d.next;
      do
        p = n(p, _.action), _ = _.next;
      while (_ !== d);
      cn(p, i.memoizedState) || (Vt = !0), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), s.lastRenderedState = p;
    }
    return [p, l];
  }
  function Bh() {
  }
  function zh(n, i) {
    var s = Xe, l = en(), d = i(), p = !cn(l.memoizedState, d);
    if (p && (l.memoizedState = d, Vt = !0), l = l.queue, $u(Hh.bind(null, s, l, n), [n]), l.getSnapshot !== i || p || mt !== null && mt.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ro(9, Uh.bind(null, s, l, d, i), void 0, null), gt === null)
        throw Error(r(349));
      Ur & 30 || $h(s, i, d);
    }
    return d;
  }
  function $h(n, i, s) {
    n.flags |= 16384, n = { getSnapshot: i, value: s }, i = Xe.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Xe.updateQueue = i, i.stores = [n]) : (s = i.stores, s === null ? i.stores = [n] : s.push(n));
  }
  function Uh(n, i, s, l) {
    i.value = s, i.getSnapshot = l, Wh(i) && qh(n);
  }
  function Hh(n, i, s) {
    return s(function() {
      Wh(i) && qh(n);
    });
  }
  function Wh(n) {
    var i = n.getSnapshot;
    n = n.value;
    try {
      var s = i();
      return !cn(n, s);
    } catch {
      return !0;
    }
  }
  function qh(n) {
    var i = qn(n, 1);
    i !== null && mn(i, n, 1, -1);
  }
  function Gh(n) {
    var i = En();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Po, lastRenderedState: n }, i.queue = n, n = n.dispatch = vx.bind(null, Xe, n), [i.memoizedState, n];
  }
  function Ro(n, i, s, l) {
    return n = { tag: n, create: i, destroy: s, deps: l, next: null }, i = Xe.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Xe.updateQueue = i, i.lastEffect = n.next = n) : (s = i.lastEffect, s === null ? i.lastEffect = n.next = n : (l = s.next, s.next = n, n.next = l, i.lastEffect = n)), n;
  }
  function Kh() {
    return en().memoizedState;
  }
  function ia(n, i, s, l) {
    var d = En();
    Xe.flags |= n, d.memoizedState = Ro(1 | i, s, void 0, l === void 0 ? null : l);
  }
  function oa(n, i, s, l) {
    var d = en();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (ct !== null) {
      var _ = ct.memoizedState;
      if (p = _.destroy, l !== null && Iu(l, _.deps)) {
        d.memoizedState = Ro(i, s, p, l);
        return;
      }
    }
    Xe.flags |= n, d.memoizedState = Ro(1 | i, s, p, l);
  }
  function Yh(n, i) {
    return ia(8390656, 8, n, i);
  }
  function $u(n, i) {
    return oa(2048, 8, n, i);
  }
  function Qh(n, i) {
    return oa(4, 2, n, i);
  }
  function Xh(n, i) {
    return oa(4, 4, n, i);
  }
  function Zh(n, i) {
    if (typeof i == "function")
      return n = n(), i(n), function() {
        i(null);
      };
    if (i != null)
      return n = n(), i.current = n, function() {
        i.current = null;
      };
  }
  function Jh(n, i, s) {
    return s = s != null ? s.concat([n]) : null, oa(4, 4, Zh.bind(null, i, n), s);
  }
  function Uu() {
  }
  function ep(n, i) {
    var s = en();
    i = i === void 0 ? null : i;
    var l = s.memoizedState;
    return l !== null && i !== null && Iu(i, l[1]) ? l[0] : (s.memoizedState = [n, i], n);
  }
  function tp(n, i) {
    var s = en();
    i = i === void 0 ? null : i;
    var l = s.memoizedState;
    return l !== null && i !== null && Iu(i, l[1]) ? l[0] : (n = n(), s.memoizedState = [n, i], n);
  }
  function np(n, i, s) {
    return Ur & 21 ? (cn(s, i) || (s = bd(), Xe.lanes |= s, Hr |= s, n.baseState = !0), i) : (n.baseState && (n.baseState = !1, Vt = !0), n.memoizedState = s);
  }
  function gx(n, i) {
    var s = Ve;
    Ve = s !== 0 && 4 > s ? s : 4, n(!0);
    var l = Fu.transition;
    Fu.transition = {};
    try {
      n(!1), i();
    } finally {
      Ve = s, Fu.transition = l;
    }
  }
  function rp() {
    return en().memoizedState;
  }
  function yx(n, i, s) {
    var l = wr(n);
    if (s = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null }, ip(n))
      op(i, s);
    else if (s = bh(n, i, s, l), s !== null) {
      var d = Lt();
      mn(s, n, l, d), sp(s, i, l);
    }
  }
  function vx(n, i, s) {
    var l = wr(n), d = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (ip(n))
      op(i, d);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = i.lastRenderedReducer, p !== null))
        try {
          var _ = i.lastRenderedState, C = p(_, s);
          if (d.hasEagerState = !0, d.eagerState = C, cn(C, _)) {
            var P = i.interleaved;
            P === null ? (d.next = d, bu(i)) : (d.next = P.next, P.next = d), i.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
      s = bh(n, i, d, l), s !== null && (d = Lt(), mn(s, n, l, d), sp(s, i, l));
    }
  }
  function ip(n) {
    var i = n.alternate;
    return n === Xe || i !== null && i === Xe;
  }
  function op(n, i) {
    Ao = ra = !0;
    var s = n.pending;
    s === null ? i.next = i : (i.next = s.next, s.next = i), n.pending = i;
  }
  function sp(n, i, s) {
    if (s & 4194240) {
      var l = i.lanes;
      l &= n.pendingLanes, s |= l, i.lanes = s, Ul(n, s);
    }
  }
  var sa = { readContext: Jt, useCallback: At, useContext: At, useEffect: At, useImperativeHandle: At, useInsertionEffect: At, useLayoutEffect: At, useMemo: At, useReducer: At, useRef: At, useState: At, useDebugValue: At, useDeferredValue: At, useTransition: At, useMutableSource: At, useSyncExternalStore: At, useId: At, unstable_isNewReconciler: !1 }, xx = { readContext: Jt, useCallback: function(n, i) {
    return En().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: Jt, useEffect: Yh, useImperativeHandle: function(n, i, s) {
    return s = s != null ? s.concat([n]) : null, ia(
      4194308,
      4,
      Zh.bind(null, i, n),
      s
    );
  }, useLayoutEffect: function(n, i) {
    return ia(4194308, 4, n, i);
  }, useInsertionEffect: function(n, i) {
    return ia(4, 2, n, i);
  }, useMemo: function(n, i) {
    var s = En();
    return i = i === void 0 ? null : i, n = n(), s.memoizedState = [n, i], n;
  }, useReducer: function(n, i, s) {
    var l = En();
    return i = s !== void 0 ? s(i) : i, l.memoizedState = l.baseState = i, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, l.queue = n, n = n.dispatch = yx.bind(null, Xe, n), [l.memoizedState, n];
  }, useRef: function(n) {
    var i = En();
    return n = { current: n }, i.memoizedState = n;
  }, useState: Gh, useDebugValue: Uu, useDeferredValue: function(n) {
    return En().memoizedState = n;
  }, useTransition: function() {
    var n = Gh(!1), i = n[0];
    return n = gx.bind(null, n[1]), En().memoizedState = n, [i, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, i, s) {
    var l = Xe, d = En();
    if (qe) {
      if (s === void 0)
        throw Error(r(407));
      s = s();
    } else {
      if (s = i(), gt === null)
        throw Error(r(349));
      Ur & 30 || $h(l, i, s);
    }
    d.memoizedState = s;
    var p = { value: s, getSnapshot: i };
    return d.queue = p, Yh(Hh.bind(
      null,
      l,
      p,
      n
    ), [n]), l.flags |= 2048, Ro(9, Uh.bind(null, l, p, s, i), void 0, null), s;
  }, useId: function() {
    var n = En(), i = gt.identifierPrefix;
    if (qe) {
      var s = Wn, l = Hn;
      s = (l & ~(1 << 32 - un(l) - 1)).toString(32) + s, i = ":" + i + "R" + s, s = bo++, 0 < s && (i += "H" + s.toString(32)), i += ":";
    } else
      s = mx++, i = ":" + i + "r" + s.toString(32) + ":";
    return n.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, wx = {
    readContext: Jt,
    useCallback: ep,
    useContext: Jt,
    useEffect: $u,
    useImperativeHandle: Jh,
    useInsertionEffect: Qh,
    useLayoutEffect: Xh,
    useMemo: tp,
    useReducer: Bu,
    useRef: Kh,
    useState: function() {
      return Bu(Po);
    },
    useDebugValue: Uu,
    useDeferredValue: function(n) {
      var i = en();
      return np(i, ct.memoizedState, n);
    },
    useTransition: function() {
      var n = Bu(Po)[0], i = en().memoizedState;
      return [n, i];
    },
    useMutableSource: Bh,
    useSyncExternalStore: zh,
    useId: rp,
    unstable_isNewReconciler: !1
  }, _x = { readContext: Jt, useCallback: ep, useContext: Jt, useEffect: $u, useImperativeHandle: Jh, useInsertionEffect: Qh, useLayoutEffect: Xh, useMemo: tp, useReducer: zu, useRef: Kh, useState: function() {
    return zu(Po);
  }, useDebugValue: Uu, useDeferredValue: function(n) {
    var i = en();
    return ct === null ? i.memoizedState = n : np(i, ct.memoizedState, n);
  }, useTransition: function() {
    var n = zu(Po)[0], i = en().memoizedState;
    return [n, i];
  }, useMutableSource: Bh, useSyncExternalStore: zh, useId: rp, unstable_isNewReconciler: !1 };
  function _i(n, i) {
    try {
      var s = "", l = i;
      do
        s += Oe(l), l = l.return;
      while (l);
      var d = s;
    } catch (p) {
      d = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: i, stack: d, digest: null };
  }
  function Hu(n, i, s) {
    return { value: n, source: null, stack: s ?? null, digest: i ?? null };
  }
  function Wu(n, i) {
    try {
      console.error(i.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var Sx = typeof WeakMap == "function" ? WeakMap : Map;
  function ap(n, i, s) {
    s = Gn(-1, s), s.tag = 3, s.payload = { element: null };
    var l = i.value;
    return s.callback = function() {
      ha || (ha = !0, sc = l), Wu(n, i);
    }, s;
  }
  function lp(n, i, s) {
    s = Gn(-1, s), s.tag = 3;
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = i.value;
      s.payload = function() {
        return l(d);
      }, s.callback = function() {
        Wu(n, i);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (s.callback = function() {
      Wu(n, i), typeof l != "function" && (vr === null ? vr = /* @__PURE__ */ new Set([this]) : vr.add(this));
      var _ = i.stack;
      this.componentDidCatch(i.value, { componentStack: _ !== null ? _ : "" });
    }), s;
  }
  function up(n, i, s) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new Sx();
      var d = /* @__PURE__ */ new Set();
      l.set(i, d);
    } else
      d = l.get(i), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(i, d));
    d.has(s) || (d.add(s), n = Fx.bind(null, n, i, s), i.then(n, n));
  }
  function cp(n) {
    do {
      var i;
      if ((i = n.tag === 13) && (i = n.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function fp(n, i, s, l, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === i ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (i = Gn(-1, 1), i.tag = 2, gr(s, i, 1))), s.lanes |= 1), n);
  }
  var kx = V.ReactCurrentOwner, Vt = !1;
  function Ot(n, i, s, l) {
    i.child = n === null ? jh(i, null, s, l) : xi(i, n.child, s, l);
  }
  function dp(n, i, s, l, d) {
    s = s.render;
    var p = i.ref;
    return vi(i, d), l = ju(n, i, s, l, p, d), s = Vu(), n !== null && !Vt ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~d, Kn(n, i, d)) : (qe && s && xu(i), i.flags |= 1, Ot(n, i, l, d), i.child);
  }
  function hp(n, i, s, l, d) {
    if (n === null) {
      var p = s.type;
      return typeof p == "function" && !hc(p) && p.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (i.tag = 15, i.type = p, pp(n, i, p, l, d)) : (n = xa(s.type, null, l, i, i.mode, d), n.ref = i.ref, n.return = i, i.child = n);
    }
    if (p = n.child, !(n.lanes & d)) {
      var _ = p.memoizedProps;
      if (s = s.compare, s = s !== null ? s : go, s(_, l) && n.ref === i.ref)
        return Kn(n, i, d);
    }
    return i.flags |= 1, n = Sr(p, l), n.ref = i.ref, n.return = i, i.child = n;
  }
  function pp(n, i, s, l, d) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (go(p, l) && n.ref === i.ref)
        if (Vt = !1, i.pendingProps = l = p, (n.lanes & d) !== 0)
          n.flags & 131072 && (Vt = !0);
        else
          return i.lanes = n.lanes, Kn(n, i, d);
    }
    return qu(n, i, s, l, d);
  }
  function mp(n, i, s) {
    var l = i.pendingProps, d = l.children, p = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if (!(i.mode & 1))
        i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(ki, Kt), Kt |= s;
      else {
        if (!(s & 1073741824))
          return n = p !== null ? p.baseLanes | s : s, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, i.updateQueue = null, $e(ki, Kt), Kt |= n, null;
        i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = p !== null ? p.baseLanes : s, $e(ki, Kt), Kt |= l;
      }
    else
      p !== null ? (l = p.baseLanes | s, i.memoizedState = null) : l = s, $e(ki, Kt), Kt |= l;
    return Ot(n, i, d, s), i.child;
  }
  function gp(n, i) {
    var s = i.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (i.flags |= 512, i.flags |= 2097152);
  }
  function qu(n, i, s, l, d) {
    var p = jt(s) ? jr : Et.current;
    return p = hi(i, p), vi(i, d), s = ju(n, i, s, l, p, d), l = Vu(), n !== null && !Vt ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~d, Kn(n, i, d)) : (qe && l && xu(i), i.flags |= 1, Ot(n, i, s, d), i.child);
  }
  function yp(n, i, s, l, d) {
    if (jt(s)) {
      var p = !0;
      Hs(i);
    } else
      p = !1;
    if (vi(i, d), i.stateNode === null)
      la(n, i), Dh(i, s, l), Ou(i, s, l, d), l = !0;
    else if (n === null) {
      var _ = i.stateNode, C = i.memoizedProps;
      _.props = C;
      var P = _.context, F = s.contextType;
      typeof F == "object" && F !== null ? F = Jt(F) : (F = jt(s) ? jr : Et.current, F = hi(i, F));
      var H = s.getDerivedStateFromProps, q = typeof H == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      q || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (C !== l || P !== F) && Nh(i, _, l, F), mr = !1;
      var U = i.memoizedState;
      _.state = U, Zs(i, l, _, d), P = i.memoizedState, C !== l || U !== P || It.current || mr ? (typeof H == "function" && (Ru(i, s, H, l), P = i.memoizedState), (C = mr || Mh(i, s, C, l, U, P, F)) ? (q || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = l, i.memoizedState = P), _.props = l, _.state = P, _.context = F, l = C) : (typeof _.componentDidMount == "function" && (i.flags |= 4194308), l = !1);
    } else {
      _ = i.stateNode, Ph(n, i), C = i.memoizedProps, F = i.type === i.elementType ? C : dn(i.type, C), _.props = F, q = i.pendingProps, U = _.context, P = s.contextType, typeof P == "object" && P !== null ? P = Jt(P) : (P = jt(s) ? jr : Et.current, P = hi(i, P));
      var ee = s.getDerivedStateFromProps;
      (H = typeof ee == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (C !== q || U !== P) && Nh(i, _, l, P), mr = !1, U = i.memoizedState, _.state = U, Zs(i, l, _, d);
      var oe = i.memoizedState;
      C !== q || U !== oe || It.current || mr ? (typeof ee == "function" && (Ru(i, s, ee, l), oe = i.memoizedState), (F = mr || Mh(i, s, F, l, U, oe, P) || !1) ? (H || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(l, oe, P), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(l, oe, P)), typeof _.componentDidUpdate == "function" && (i.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || C === n.memoizedProps && U === n.memoizedState || (i.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && U === n.memoizedState || (i.flags |= 1024), i.memoizedProps = l, i.memoizedState = oe), _.props = l, _.state = oe, _.context = P, l = F) : (typeof _.componentDidUpdate != "function" || C === n.memoizedProps && U === n.memoizedState || (i.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && U === n.memoizedState || (i.flags |= 1024), l = !1);
    }
    return Gu(n, i, s, l, p, d);
  }
  function Gu(n, i, s, l, d, p) {
    gp(n, i);
    var _ = (i.flags & 128) !== 0;
    if (!l && !_)
      return d && _h(i, s, !1), Kn(n, i, p);
    l = i.stateNode, kx.current = i;
    var C = _ && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return i.flags |= 1, n !== null && _ ? (i.child = xi(i, n.child, null, p), i.child = xi(i, null, C, p)) : Ot(n, i, C, p), i.memoizedState = l.state, d && _h(i, s, !0), i.child;
  }
  function vp(n) {
    var i = n.stateNode;
    i.pendingContext ? xh(n, i.pendingContext, i.pendingContext !== i.context) : i.context && xh(n, i.context, !1), Lu(n, i.containerInfo);
  }
  function xp(n, i, s, l, d) {
    return gi(), ku(d), i.flags |= 256, Ot(n, i, s, l), i.child;
  }
  var Ku = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function wp(n, i, s) {
    var l = i.pendingProps, d = Qe.current, p = !1, _ = (i.flags & 128) !== 0, C;
    if ((C = _) || (C = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), C ? (p = !0, i.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), $e(Qe, d & 1), n === null)
      return Su(i), n = i.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (i.mode & 1 ? n.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (_ = l.children, n = l.fallback, p ? (l = i.mode, p = i.child, _ = { mode: "hidden", children: _ }, !(l & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = _) : p = wa(_, l, 0, null), n = Kr(n, l, s, null), p.return = i, n.return = i, p.sibling = n, i.child = p, i.child.memoizedState = Yu(s), i.memoizedState = Ku, n) : Qu(i, _));
    if (d = n.memoizedState, d !== null && (C = d.dehydrated, C !== null))
      return Tx(n, i, _, l, C, d, s);
    if (p) {
      p = l.fallback, _ = i.mode, d = n.child, C = d.sibling;
      var P = { mode: "hidden", children: l.children };
      return !(_ & 1) && i.child !== d ? (l = i.child, l.childLanes = 0, l.pendingProps = P, i.deletions = null) : (l = Sr(d, P), l.subtreeFlags = d.subtreeFlags & 14680064), C !== null ? p = Sr(C, p) : (p = Kr(p, _, s, null), p.flags |= 2), p.return = i, l.return = i, l.sibling = p, i.child = l, l = p, p = i.child, _ = n.child.memoizedState, _ = _ === null ? Yu(s) : { baseLanes: _.baseLanes | s, cachePool: null, transitions: _.transitions }, p.memoizedState = _, p.childLanes = n.childLanes & ~s, i.memoizedState = Ku, l;
    }
    return p = n.child, n = p.sibling, l = Sr(p, { mode: "visible", children: l.children }), !(i.mode & 1) && (l.lanes = s), l.return = i, l.sibling = null, n !== null && (s = i.deletions, s === null ? (i.deletions = [n], i.flags |= 16) : s.push(n)), i.child = l, i.memoizedState = null, l;
  }
  function Qu(n, i) {
    return i = wa({ mode: "visible", children: i }, n.mode, 0, null), i.return = n, n.child = i;
  }
  function aa(n, i, s, l) {
    return l !== null && ku(l), xi(i, n.child, null, s), n = Qu(i, i.pendingProps.children), n.flags |= 2, i.memoizedState = null, n;
  }
  function Tx(n, i, s, l, d, p, _) {
    if (s)
      return i.flags & 256 ? (i.flags &= -257, l = Hu(Error(r(422))), aa(n, i, _, l)) : i.memoizedState !== null ? (i.child = n.child, i.flags |= 128, null) : (p = l.fallback, d = i.mode, l = wa({ mode: "visible", children: l.children }, d, 0, null), p = Kr(p, d, _, null), p.flags |= 2, l.return = i, p.return = i, l.sibling = p, i.child = l, i.mode & 1 && xi(i, n.child, null, _), i.child.memoizedState = Yu(_), i.memoizedState = Ku, p);
    if (!(i.mode & 1))
      return aa(n, i, _, null);
    if (d.data === "$!") {
      if (l = d.nextSibling && d.nextSibling.dataset, l)
        var C = l.dgst;
      return l = C, p = Error(r(419)), l = Hu(p, l, void 0), aa(n, i, _, l);
    }
    if (C = (_ & n.childLanes) !== 0, Vt || C) {
      if (l = gt, l !== null) {
        switch (_ & -_) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = d & (l.suspendedLanes | _) ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, qn(n, d), mn(l, n, d, -1));
      }
      return dc(), l = Hu(Error(r(421))), aa(n, i, _, l);
    }
    return d.data === "$?" ? (i.flags |= 128, i.child = n.child, i = Ix.bind(null, n), d._reactRetry = i, null) : (n = p.treeContext, Gt = fr(d.nextSibling), qt = i, qe = !0, fn = null, n !== null && (Xt[Zt++] = Hn, Xt[Zt++] = Wn, Xt[Zt++] = Vr, Hn = n.id, Wn = n.overflow, Vr = i), i = Qu(i, l.children), i.flags |= 4096, i);
  }
  function _p(n, i, s) {
    n.lanes |= i;
    var l = n.alternate;
    l !== null && (l.lanes |= i), Au(n.return, i, s);
  }
  function Xu(n, i, s, l, d) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: l, tail: s, tailMode: d } : (p.isBackwards = i, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = s, p.tailMode = d);
  }
  function Sp(n, i, s) {
    var l = i.pendingProps, d = l.revealOrder, p = l.tail;
    if (Ot(n, i, l.children, s), l = Qe.current, l & 2)
      l = l & 1 | 2, i.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = i.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && _p(n, s, i);
            else if (n.tag === 19)
              _p(n, s, i);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === i)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === i)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      l &= 1;
    }
    if ($e(Qe, l), !(i.mode & 1))
      i.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (s = i.child, d = null; s !== null; )
            n = s.alternate, n !== null && ta(n) === null && (d = s), s = s.sibling;
          s = d, s === null ? (d = i.child, i.child = null) : (d = s.sibling, s.sibling = null), Xu(i, !1, d, s, p);
          break;
        case "backwards":
          for (s = null, d = i.child, i.child = null; d !== null; ) {
            if (n = d.alternate, n !== null && ta(n) === null) {
              i.child = d;
              break;
            }
            n = d.sibling, d.sibling = s, s = d, d = n;
          }
          Xu(i, !0, s, null, p);
          break;
        case "together":
          Xu(i, !1, null, null, void 0);
          break;
        default:
          i.memoizedState = null;
      }
    return i.child;
  }
  function la(n, i) {
    !(i.mode & 1) && n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2);
  }
  function Kn(n, i, s) {
    if (n !== null && (i.dependencies = n.dependencies), Hr |= i.lanes, !(s & i.childLanes))
      return null;
    if (n !== null && i.child !== n.child)
      throw Error(r(153));
    if (i.child !== null) {
      for (n = i.child, s = Sr(n, n.pendingProps), i.child = s, s.return = i; n.sibling !== null; )
        n = n.sibling, s = s.sibling = Sr(n, n.pendingProps), s.return = i;
      s.sibling = null;
    }
    return i.child;
  }
  function Cx(n, i, s) {
    switch (i.tag) {
      case 3:
        vp(i), gi();
        break;
      case 5:
        Vh(i);
        break;
      case 1:
        jt(i.type) && Hs(i);
        break;
      case 4:
        Lu(i, i.stateNode.containerInfo);
        break;
      case 10:
        var l = i.type._context, d = i.memoizedProps.value;
        $e(Ys, l._currentValue), l._currentValue = d;
        break;
      case 13:
        if (l = i.memoizedState, l !== null)
          return l.dehydrated !== null ? ($e(Qe, Qe.current & 1), i.flags |= 128, null) : s & i.child.childLanes ? wp(n, i, s) : ($e(Qe, Qe.current & 1), n = Kn(n, i, s), n !== null ? n.sibling : null);
        $e(Qe, Qe.current & 1);
        break;
      case 19:
        if (l = (s & i.childLanes) !== 0, n.flags & 128) {
          if (l)
            return Sp(n, i, s);
          i.flags |= 128;
        }
        if (d = i.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), $e(Qe, Qe.current), l)
          break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, mp(n, i, s);
    }
    return Kn(n, i, s);
  }
  var kp, Zu, Tp, Cp;
  kp = function(n, i) {
    for (var s = i.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6)
        n.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === i)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === i)
          return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, Zu = function() {
  }, Tp = function(n, i, s, l) {
    var d = n.memoizedProps;
    if (d !== l) {
      n = i.stateNode, $r(Cn.current);
      var p = null;
      switch (s) {
        case "input":
          d = ti(n, d), l = ti(n, l), p = [];
          break;
        case "select":
          d = b({}, d, { value: void 0 }), l = b({}, l, { value: void 0 }), p = [];
          break;
        case "textarea":
          d = de(n, d), l = de(n, l), p = [];
          break;
        default:
          typeof d.onClick != "function" && typeof l.onClick == "function" && (n.onclick = zs);
      }
      Be(s, l);
      var _;
      s = null;
      for (F in d)
        if (!l.hasOwnProperty(F) && d.hasOwnProperty(F) && d[F] != null)
          if (F === "style") {
            var C = d[F];
            for (_ in C)
              C.hasOwnProperty(_) && (s || (s = {}), s[_] = "");
          } else
            F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (a.hasOwnProperty(F) ? p || (p = []) : (p = p || []).push(F, null));
      for (F in l) {
        var P = l[F];
        if (C = d != null ? d[F] : void 0, l.hasOwnProperty(F) && P !== C && (P != null || C != null))
          if (F === "style")
            if (C) {
              for (_ in C)
                !C.hasOwnProperty(_) || P && P.hasOwnProperty(_) || (s || (s = {}), s[_] = "");
              for (_ in P)
                P.hasOwnProperty(_) && C[_] !== P[_] && (s || (s = {}), s[_] = P[_]);
            } else
              s || (p || (p = []), p.push(
                F,
                s
              )), s = P;
          else
            F === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, C = C ? C.__html : void 0, P != null && C !== P && (p = p || []).push(F, P)) : F === "children" ? typeof P != "string" && typeof P != "number" || (p = p || []).push(F, "" + P) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (a.hasOwnProperty(F) ? (P != null && F === "onScroll" && He("scroll", n), p || C === P || (p = [])) : (p = p || []).push(F, P));
      }
      s && (p = p || []).push("style", s);
      var F = p;
      (i.updateQueue = F) && (i.flags |= 4);
    }
  }, Cp = function(n, i, s, l) {
    s !== l && (i.flags |= 4);
  };
  function Oo(n, i) {
    if (!qe)
      switch (n.tailMode) {
        case "hidden":
          i = n.tail;
          for (var s = null; i !== null; )
            i.alternate !== null && (s = i), i = i.sibling;
          s === null ? n.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = n.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), s = s.sibling;
          l === null ? i || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null;
      }
  }
  function bt(n) {
    var i = n.alternate !== null && n.alternate.child === n.child, s = 0, l = 0;
    if (i)
      for (var d = n.child; d !== null; )
        s |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        s |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= l, n.childLanes = s, i;
  }
  function Ex(n, i, s) {
    var l = i.pendingProps;
    switch (wu(i), i.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bt(i), null;
      case 1:
        return jt(i.type) && Us(), bt(i), null;
      case 3:
        return l = i.stateNode, wi(), We(It), We(Et), Nu(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (Ks(i) ? i.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, fn !== null && (uc(fn), fn = null))), Zu(n, i), bt(i), null;
      case 5:
        Mu(i);
        var d = $r(Eo.current);
        if (s = i.type, n !== null && i.stateNode != null)
          Tp(n, i, s, l, d), n.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!l) {
            if (i.stateNode === null)
              throw Error(r(166));
            return bt(i), null;
          }
          if (n = $r(Cn.current), Ks(i)) {
            l = i.stateNode, s = i.type;
            var p = i.memoizedProps;
            switch (l[Tn] = i, l[_o] = p, n = (i.mode & 1) !== 0, s) {
              case "dialog":
                He("cancel", l), He("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                He("load", l);
                break;
              case "video":
              case "audio":
                for (d = 0; d < vo.length; d++)
                  He(vo[d], l);
                break;
              case "source":
                He("error", l);
                break;
              case "img":
              case "image":
              case "link":
                He(
                  "error",
                  l
                ), He("load", l);
                break;
              case "details":
                He("toggle", l);
                break;
              case "input":
                Qi(l, p), He("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!p.multiple }, He("invalid", l);
                break;
              case "textarea":
                je(l, p), He("invalid", l);
            }
            Be(s, p), d = null;
            for (var _ in p)
              if (p.hasOwnProperty(_)) {
                var C = p[_];
                _ === "children" ? typeof C == "string" ? l.textContent !== C && (p.suppressHydrationWarning !== !0 && Bs(l.textContent, C, n), d = ["children", C]) : typeof C == "number" && l.textContent !== "" + C && (p.suppressHydrationWarning !== !0 && Bs(
                  l.textContent,
                  C,
                  n
                ), d = ["children", "" + C]) : a.hasOwnProperty(_) && C != null && _ === "onScroll" && He("scroll", l);
              }
            switch (s) {
              case "input":
                ut(l), z(l, p, !0);
                break;
              case "textarea":
                ut(l), Ft(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (l.onclick = zs);
            }
            l = d, i.updateQueue = l, l !== null && (i.flags |= 4);
          } else {
            _ = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ni(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = _.createElement(s, { is: l.is }) : (n = _.createElement(s), s === "select" && (_ = n, l.multiple ? _.multiple = !0 : l.size && (_.size = l.size))) : n = _.createElementNS(n, s), n[Tn] = i, n[_o] = l, kp(n, i, !1, !1), i.stateNode = n;
            e: {
              switch (_ = vt(s, l), s) {
                case "dialog":
                  He("cancel", n), He("close", n), d = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  He("load", n), d = l;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < vo.length; d++)
                    He(vo[d], n);
                  d = l;
                  break;
                case "source":
                  He("error", n), d = l;
                  break;
                case "img":
                case "image":
                case "link":
                  He(
                    "error",
                    n
                  ), He("load", n), d = l;
                  break;
                case "details":
                  He("toggle", n), d = l;
                  break;
                case "input":
                  Qi(n, l), d = ti(n, l), He("invalid", n);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!l.multiple }, d = b({}, l, { value: void 0 }), He("invalid", n);
                  break;
                case "textarea":
                  je(n, l), d = de(n, l), He("invalid", n);
                  break;
                default:
                  d = l;
              }
              Be(s, d), C = d;
              for (p in C)
                if (C.hasOwnProperty(p)) {
                  var P = C[p];
                  p === "style" ? W(n, P) : p === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && ri(n, P)) : p === "children" ? typeof P == "string" ? (s !== "textarea" || P !== "") && Sn(n, P) : typeof P == "number" && Sn(n, "" + P) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? P != null && p === "onScroll" && He("scroll", n) : P != null && O(n, p, P, _));
                }
              switch (s) {
                case "input":
                  ut(n), z(n, l, !1);
                  break;
                case "textarea":
                  ut(n), Ft(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + Ae(l.value));
                  break;
                case "select":
                  n.multiple = !!l.multiple, p = l.value, p != null ? G(n, !!l.multiple, p, !1) : l.defaultValue != null && G(
                    n,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = zs);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (i.flags |= 4);
          }
          i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
        }
        return bt(i), null;
      case 6:
        if (n && i.stateNode != null)
          Cp(n, i, n.memoizedProps, l);
        else {
          if (typeof l != "string" && i.stateNode === null)
            throw Error(r(166));
          if (s = $r(Eo.current), $r(Cn.current), Ks(i)) {
            if (l = i.stateNode, s = i.memoizedProps, l[Tn] = i, (p = l.nodeValue !== s) && (n = qt, n !== null))
              switch (n.tag) {
                case 3:
                  Bs(l.nodeValue, s, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Bs(l.nodeValue, s, (n.mode & 1) !== 0);
              }
            p && (i.flags |= 4);
          } else
            l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[Tn] = i, i.stateNode = l;
        }
        return bt(i), null;
      case 13:
        if (We(Qe), l = i.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (qe && Gt !== null && i.mode & 1 && !(i.flags & 128))
            Ah(), gi(), i.flags |= 98560, p = !1;
          else if (p = Ks(i), l !== null && l.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(r(318));
              if (p = i.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(r(317));
              p[Tn] = i;
            } else
              gi(), !(i.flags & 128) && (i.memoizedState = null), i.flags |= 4;
            bt(i), p = !1;
          } else
            fn !== null && (uc(fn), fn = null), p = !0;
          if (!p)
            return i.flags & 65536 ? i : null;
        }
        return i.flags & 128 ? (i.lanes = s, i) : (l = l !== null, l !== (n !== null && n.memoizedState !== null) && l && (i.child.flags |= 8192, i.mode & 1 && (n === null || Qe.current & 1 ? ft === 0 && (ft = 3) : dc())), i.updateQueue !== null && (i.flags |= 4), bt(i), null);
      case 4:
        return wi(), Zu(n, i), n === null && xo(i.stateNode.containerInfo), bt(i), null;
      case 10:
        return Eu(i.type._context), bt(i), null;
      case 17:
        return jt(i.type) && Us(), bt(i), null;
      case 19:
        if (We(Qe), p = i.memoizedState, p === null)
          return bt(i), null;
        if (l = (i.flags & 128) !== 0, _ = p.rendering, _ === null)
          if (l)
            Oo(p, !1);
          else {
            if (ft !== 0 || n !== null && n.flags & 128)
              for (n = i.child; n !== null; ) {
                if (_ = ta(n), _ !== null) {
                  for (i.flags |= 128, Oo(p, !1), l = _.updateQueue, l !== null && (i.updateQueue = l, i.flags |= 4), i.subtreeFlags = 0, l = s, s = i.child; s !== null; )
                    p = s, n = l, p.flags &= 14680066, _ = p.alternate, _ === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = _.childLanes, p.lanes = _.lanes, p.child = _.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = _.memoizedProps, p.memoizedState = _.memoizedState, p.updateQueue = _.updateQueue, p.type = _.type, n = _.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
                  return $e(Qe, Qe.current & 1 | 2), i.child;
                }
                n = n.sibling;
              }
            p.tail !== null && nt() > Ti && (i.flags |= 128, l = !0, Oo(p, !1), i.lanes = 4194304);
          }
        else {
          if (!l)
            if (n = ta(_), n !== null) {
              if (i.flags |= 128, l = !0, s = n.updateQueue, s !== null && (i.updateQueue = s, i.flags |= 4), Oo(p, !0), p.tail === null && p.tailMode === "hidden" && !_.alternate && !qe)
                return bt(i), null;
            } else
              2 * nt() - p.renderingStartTime > Ti && s !== 1073741824 && (i.flags |= 128, l = !0, Oo(p, !1), i.lanes = 4194304);
          p.isBackwards ? (_.sibling = i.child, i.child = _) : (s = p.last, s !== null ? s.sibling = _ : i.child = _, p.last = _);
        }
        return p.tail !== null ? (i = p.tail, p.rendering = i, p.tail = i.sibling, p.renderingStartTime = nt(), i.sibling = null, s = Qe.current, $e(Qe, l ? s & 1 | 2 : s & 1), i) : (bt(i), null);
      case 22:
      case 23:
        return fc(), l = i.memoizedState !== null, n !== null && n.memoizedState !== null !== l && (i.flags |= 8192), l && i.mode & 1 ? Kt & 1073741824 && (bt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : bt(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function Ax(n, i) {
    switch (wu(i), i.tag) {
      case 1:
        return jt(i.type) && Us(), n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 3:
        return wi(), We(It), We(Et), Nu(), n = i.flags, n & 65536 && !(n & 128) ? (i.flags = n & -65537 | 128, i) : null;
      case 5:
        return Mu(i), null;
      case 13:
        if (We(Qe), n = i.memoizedState, n !== null && n.dehydrated !== null) {
          if (i.alternate === null)
            throw Error(r(340));
          gi();
        }
        return n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 19:
        return We(Qe), null;
      case 4:
        return wi(), null;
      case 10:
        return Eu(i.type._context), null;
      case 22:
      case 23:
        return fc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ua = !1, Pt = !1, bx = typeof WeakSet == "function" ? WeakSet : Set, re = null;
  function Si(n, i) {
    var s = n.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (l) {
          et(n, i, l);
        }
      else
        s.current = null;
  }
  function Ju(n, i, s) {
    try {
      s();
    } catch (l) {
      et(n, i, l);
    }
  }
  var Ep = !1;
  function Px(n, i) {
    if (fu = Ps, n = rh(), ru(n)) {
      if ("selectionStart" in n)
        var s = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          s = (s = n.ownerDocument) && s.defaultView || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var d = l.anchorOffset, p = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, p.nodeType;
            } catch {
              s = null;
              break e;
            }
            var _ = 0, C = -1, P = -1, F = 0, H = 0, q = n, U = null;
            t:
              for (; ; ) {
                for (var ee; q !== s || d !== 0 && q.nodeType !== 3 || (C = _ + d), q !== p || l !== 0 && q.nodeType !== 3 || (P = _ + l), q.nodeType === 3 && (_ += q.nodeValue.length), (ee = q.firstChild) !== null; )
                  U = q, q = ee;
                for (; ; ) {
                  if (q === n)
                    break t;
                  if (U === s && ++F === d && (C = _), U === p && ++H === l && (P = _), (ee = q.nextSibling) !== null)
                    break;
                  q = U, U = q.parentNode;
                }
                q = ee;
              }
            s = C === -1 || P === -1 ? null : { start: C, end: P };
          } else
            s = null;
        }
      s = s || { start: 0, end: 0 };
    } else
      s = null;
    for (du = { focusedElem: n, selectionRange: s }, Ps = !1, re = i; re !== null; )
      if (i = re, n = i.child, (i.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = i, re = n;
      else
        for (; re !== null; ) {
          i = re;
          try {
            var oe = i.alternate;
            if (i.flags & 1024)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var se = oe.memoizedProps, rt = oe.memoizedState, D = i.stateNode, R = D.getSnapshotBeforeUpdate(i.elementType === i.type ? se : dn(i.type, se), rt);
                    D.__reactInternalSnapshotBeforeUpdate = R;
                  }
                  break;
                case 3:
                  var N = i.stateNode.containerInfo;
                  N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (Y) {
            et(i, i.return, Y);
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, re = n;
            break;
          }
          re = i.return;
        }
    return oe = Ep, Ep = !1, oe;
  }
  function Lo(n, i, s) {
    var l = i.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var d = l = l.next;
      do {
        if ((d.tag & n) === n) {
          var p = d.destroy;
          d.destroy = void 0, p !== void 0 && Ju(i, s, p);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function ca(n, i) {
    if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
      var s = i = i.next;
      do {
        if ((s.tag & n) === n) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== i);
    }
  }
  function ec(n) {
    var i = n.ref;
    if (i !== null) {
      var s = n.stateNode;
      switch (n.tag) {
        case 5:
          n = s;
          break;
        default:
          n = s;
      }
      typeof i == "function" ? i(n) : i.current = n;
    }
  }
  function Ap(n) {
    var i = n.alternate;
    i !== null && (n.alternate = null, Ap(i)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (i = n.stateNode, i !== null && (delete i[Tn], delete i[_o], delete i[gu], delete i[fx], delete i[dx])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function bp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Pp(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || bp(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function tc(n, i, s) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, i ? s.nodeType === 8 ? s.parentNode.insertBefore(n, i) : s.insertBefore(n, i) : (s.nodeType === 8 ? (i = s.parentNode, i.insertBefore(n, s)) : (i = s, i.appendChild(n)), s = s._reactRootContainer, s != null || i.onclick !== null || (i.onclick = zs));
    else if (l !== 4 && (n = n.child, n !== null))
      for (tc(n, i, s), n = n.sibling; n !== null; )
        tc(n, i, s), n = n.sibling;
  }
  function nc(n, i, s) {
    var l = n.tag;
    if (l === 5 || l === 6)
      n = n.stateNode, i ? s.insertBefore(n, i) : s.appendChild(n);
    else if (l !== 4 && (n = n.child, n !== null))
      for (nc(n, i, s), n = n.sibling; n !== null; )
        nc(n, i, s), n = n.sibling;
  }
  var xt = null, hn = !1;
  function yr(n, i, s) {
    for (s = s.child; s !== null; )
      Rp(n, i, s), s = s.sibling;
  }
  function Rp(n, i, s) {
    if (kn && typeof kn.onCommitFiberUnmount == "function")
      try {
        kn.onCommitFiberUnmount(ks, s);
      } catch {
      }
    switch (s.tag) {
      case 5:
        Pt || Si(s, i);
      case 6:
        var l = xt, d = hn;
        xt = null, yr(n, i, s), xt = l, hn = d, xt !== null && (hn ? (n = xt, s = s.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(s) : n.removeChild(s)) : xt.removeChild(s.stateNode));
        break;
      case 18:
        xt !== null && (hn ? (n = xt, s = s.stateNode, n.nodeType === 8 ? mu(n.parentNode, s) : n.nodeType === 1 && mu(n, s), uo(n)) : mu(xt, s.stateNode));
        break;
      case 4:
        l = xt, d = hn, xt = s.stateNode.containerInfo, hn = !0, yr(n, i, s), xt = l, hn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          d = l = l.next;
          do {
            var p = d, _ = p.destroy;
            p = p.tag, _ !== void 0 && (p & 2 || p & 4) && Ju(s, i, _), d = d.next;
          } while (d !== l);
        }
        yr(n, i, s);
        break;
      case 1:
        if (!Pt && (Si(s, i), l = s.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount();
          } catch (C) {
            et(s, i, C);
          }
        yr(n, i, s);
        break;
      case 21:
        yr(n, i, s);
        break;
      case 22:
        s.mode & 1 ? (Pt = (l = Pt) || s.memoizedState !== null, yr(n, i, s), Pt = l) : yr(n, i, s);
        break;
      default:
        yr(n, i, s);
    }
  }
  function Op(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new bx()), i.forEach(function(l) {
        var d = jx.bind(null, n, l);
        s.has(l) || (s.add(l), l.then(d, d));
      });
    }
  }
  function pn(n, i) {
    var s = i.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var d = s[l];
        try {
          var p = n, _ = i, C = _;
          e:
            for (; C !== null; ) {
              switch (C.tag) {
                case 5:
                  xt = C.stateNode, hn = !1;
                  break e;
                case 3:
                  xt = C.stateNode.containerInfo, hn = !0;
                  break e;
                case 4:
                  xt = C.stateNode.containerInfo, hn = !0;
                  break e;
              }
              C = C.return;
            }
          if (xt === null)
            throw Error(r(160));
          Rp(p, _, d), xt = null, hn = !1;
          var P = d.alternate;
          P !== null && (P.return = null), d.return = null;
        } catch (F) {
          et(d, i, F);
        }
      }
    if (i.subtreeFlags & 12854)
      for (i = i.child; i !== null; )
        Lp(i, n), i = i.sibling;
  }
  function Lp(n, i) {
    var s = n.alternate, l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(i, n), An(n), l & 4) {
          try {
            Lo(3, n, n.return), ca(3, n);
          } catch (se) {
            et(n, n.return, se);
          }
          try {
            Lo(5, n, n.return);
          } catch (se) {
            et(n, n.return, se);
          }
        }
        break;
      case 1:
        pn(i, n), An(n), l & 512 && s !== null && Si(s, s.return);
        break;
      case 5:
        if (pn(i, n), An(n), l & 512 && s !== null && Si(s, s.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            Sn(d, "");
          } catch (se) {
            et(n, n.return, se);
          }
        }
        if (l & 4 && (d = n.stateNode, d != null)) {
          var p = n.memoizedProps, _ = s !== null ? s.memoizedProps : p, C = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null)
            try {
              C === "input" && p.type === "radio" && p.name != null && L(d, p), vt(C, _);
              var F = vt(C, p);
              for (_ = 0; _ < P.length; _ += 2) {
                var H = P[_], q = P[_ + 1];
                H === "style" ? W(d, q) : H === "dangerouslySetInnerHTML" ? ri(d, q) : H === "children" ? Sn(d, q) : O(d, H, q, F);
              }
              switch (C) {
                case "input":
                  j(d, p);
                  break;
                case "textarea":
                  ze(d, p);
                  break;
                case "select":
                  var U = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var ee = p.value;
                  ee != null ? G(d, !!p.multiple, ee, !1) : U !== !!p.multiple && (p.defaultValue != null ? G(
                    d,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : G(d, !!p.multiple, p.multiple ? [] : "", !1));
              }
              d[_o] = p;
            } catch (se) {
              et(n, n.return, se);
            }
        }
        break;
      case 6:
        if (pn(i, n), An(n), l & 4) {
          if (n.stateNode === null)
            throw Error(r(162));
          d = n.stateNode, p = n.memoizedProps;
          try {
            d.nodeValue = p;
          } catch (se) {
            et(n, n.return, se);
          }
        }
        break;
      case 3:
        if (pn(i, n), An(n), l & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            uo(i.containerInfo);
          } catch (se) {
            et(n, n.return, se);
          }
        break;
      case 4:
        pn(i, n), An(n);
        break;
      case 13:
        pn(i, n), An(n), d = n.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (oc = nt())), l & 4 && Op(n);
        break;
      case 22:
        if (H = s !== null && s.memoizedState !== null, n.mode & 1 ? (Pt = (F = Pt) || H, pn(i, n), Pt = F) : pn(i, n), An(n), l & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !H && n.mode & 1)
            for (re = n, H = n.child; H !== null; ) {
              for (q = re = H; re !== null; ) {
                switch (U = re, ee = U.child, U.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Lo(4, U, U.return);
                    break;
                  case 1:
                    Si(U, U.return);
                    var oe = U.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      l = U, s = U.return;
                      try {
                        i = l, oe.props = i.memoizedProps, oe.state = i.memoizedState, oe.componentWillUnmount();
                      } catch (se) {
                        et(l, s, se);
                      }
                    }
                    break;
                  case 5:
                    Si(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      Np(q);
                      continue;
                    }
                }
                ee !== null ? (ee.return = U, re = ee) : Np(q);
              }
              H = H.sibling;
            }
          e:
            for (H = null, q = n; ; ) {
              if (q.tag === 5) {
                if (H === null) {
                  H = q;
                  try {
                    d = q.stateNode, F ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (C = q.stateNode, P = q.memoizedProps.style, _ = P != null && P.hasOwnProperty("display") ? P.display : null, C.style.display = vs("display", _));
                  } catch (se) {
                    et(n, n.return, se);
                  }
                }
              } else if (q.tag === 6) {
                if (H === null)
                  try {
                    q.stateNode.nodeValue = F ? "" : q.memoizedProps;
                  } catch (se) {
                    et(n, n.return, se);
                  }
              } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
                q.child.return = q, q = q.child;
                continue;
              }
              if (q === n)
                break e;
              for (; q.sibling === null; ) {
                if (q.return === null || q.return === n)
                  break e;
                H === q && (H = null), q = q.return;
              }
              H === q && (H = null), q.sibling.return = q.return, q = q.sibling;
            }
        }
        break;
      case 19:
        pn(i, n), An(n), l & 4 && Op(n);
        break;
      case 21:
        break;
      default:
        pn(
          i,
          n
        ), An(n);
    }
  }
  function An(n) {
    var i = n.flags;
    if (i & 2) {
      try {
        e: {
          for (var s = n.return; s !== null; ) {
            if (bp(s)) {
              var l = s;
              break e;
            }
            s = s.return;
          }
          throw Error(r(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (Sn(d, ""), l.flags &= -33);
            var p = Pp(n);
            nc(n, p, d);
            break;
          case 3:
          case 4:
            var _ = l.stateNode.containerInfo, C = Pp(n);
            tc(n, C, _);
            break;
          default:
            throw Error(r(161));
        }
      } catch (P) {
        et(n, n.return, P);
      }
      n.flags &= -3;
    }
    i & 4096 && (n.flags &= -4097);
  }
  function Rx(n, i, s) {
    re = n, Mp(n);
  }
  function Mp(n, i, s) {
    for (var l = (n.mode & 1) !== 0; re !== null; ) {
      var d = re, p = d.child;
      if (d.tag === 22 && l) {
        var _ = d.memoizedState !== null || ua;
        if (!_) {
          var C = d.alternate, P = C !== null && C.memoizedState !== null || Pt;
          C = ua;
          var F = Pt;
          if (ua = _, (Pt = P) && !F)
            for (re = d; re !== null; )
              _ = re, P = _.child, _.tag === 22 && _.memoizedState !== null ? Fp(d) : P !== null ? (P.return = _, re = P) : Fp(d);
          for (; p !== null; )
            re = p, Mp(p), p = p.sibling;
          re = d, ua = C, Pt = F;
        }
        Dp(n);
      } else
        d.subtreeFlags & 8772 && p !== null ? (p.return = d, re = p) : Dp(n);
    }
  }
  function Dp(n) {
    for (; re !== null; ) {
      var i = re;
      if (i.flags & 8772) {
        var s = i.alternate;
        try {
          if (i.flags & 8772)
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Pt || ca(5, i);
                break;
              case 1:
                var l = i.stateNode;
                if (i.flags & 4 && !Pt)
                  if (s === null)
                    l.componentDidMount();
                  else {
                    var d = i.elementType === i.type ? s.memoizedProps : dn(i.type, s.memoizedProps);
                    l.componentDidUpdate(d, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = i.updateQueue;
                p !== null && Oh(i, p, l);
                break;
              case 3:
                var _ = i.updateQueue;
                if (_ !== null) {
                  if (s = null, i.child !== null)
                    switch (i.child.tag) {
                      case 5:
                        s = i.child.stateNode;
                        break;
                      case 1:
                        s = i.child.stateNode;
                    }
                  Oh(i, _, s);
                }
                break;
              case 5:
                var C = i.stateNode;
                if (s === null && i.flags & 4) {
                  s = C;
                  var P = i.memoizedProps;
                  switch (i.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      P.autoFocus && s.focus();
                      break;
                    case "img":
                      P.src && (s.src = P.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (i.memoizedState === null) {
                  var F = i.alternate;
                  if (F !== null) {
                    var H = F.memoizedState;
                    if (H !== null) {
                      var q = H.dehydrated;
                      q !== null && uo(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          Pt || i.flags & 512 && ec(i);
        } catch (U) {
          et(i, i.return, U);
        }
      }
      if (i === n) {
        re = null;
        break;
      }
      if (s = i.sibling, s !== null) {
        s.return = i.return, re = s;
        break;
      }
      re = i.return;
    }
  }
  function Np(n) {
    for (; re !== null; ) {
      var i = re;
      if (i === n) {
        re = null;
        break;
      }
      var s = i.sibling;
      if (s !== null) {
        s.return = i.return, re = s;
        break;
      }
      re = i.return;
    }
  }
  function Fp(n) {
    for (; re !== null; ) {
      var i = re;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var s = i.return;
            try {
              ca(4, i);
            } catch (P) {
              et(i, s, P);
            }
            break;
          case 1:
            var l = i.stateNode;
            if (typeof l.componentDidMount == "function") {
              var d = i.return;
              try {
                l.componentDidMount();
              } catch (P) {
                et(i, d, P);
              }
            }
            var p = i.return;
            try {
              ec(i);
            } catch (P) {
              et(i, p, P);
            }
            break;
          case 5:
            var _ = i.return;
            try {
              ec(i);
            } catch (P) {
              et(i, _, P);
            }
        }
      } catch (P) {
        et(i, i.return, P);
      }
      if (i === n) {
        re = null;
        break;
      }
      var C = i.sibling;
      if (C !== null) {
        C.return = i.return, re = C;
        break;
      }
      re = i.return;
    }
  }
  var Ox = Math.ceil, fa = V.ReactCurrentDispatcher, rc = V.ReactCurrentOwner, tn = V.ReactCurrentBatchConfig, Me = 0, gt = null, it = null, wt = 0, Kt = 0, ki = dr(0), ft = 0, Mo = null, Hr = 0, da = 0, ic = 0, Do = null, Bt = null, oc = 0, Ti = 1 / 0, Yn = null, ha = !1, sc = null, vr = null, pa = !1, xr = null, ma = 0, No = 0, ac = null, ga = -1, ya = 0;
  function Lt() {
    return Me & 6 ? nt() : ga !== -1 ? ga : ga = nt();
  }
  function wr(n) {
    return n.mode & 1 ? Me & 2 && wt !== 0 ? wt & -wt : px.transition !== null ? (ya === 0 && (ya = bd()), ya) : (n = Ve, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Id(n.type)), n) : 1;
  }
  function mn(n, i, s, l) {
    if (50 < No)
      throw No = 0, ac = null, Error(r(185));
    io(n, s, l), (!(Me & 2) || n !== gt) && (n === gt && (!(Me & 2) && (da |= s), ft === 4 && _r(n, wt)), zt(n, l), s === 1 && Me === 0 && !(i.mode & 1) && (Ti = nt() + 500, Ws && pr()));
  }
  function zt(n, i) {
    var s = n.callbackNode;
    p1(n, i);
    var l = Es(n, n === gt ? wt : 0);
    if (l === 0)
      s !== null && Cd(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (i = l & -l, n.callbackPriority !== i) {
      if (s != null && Cd(s), i === 1)
        n.tag === 0 ? hx(jp.bind(null, n)) : Sh(jp.bind(null, n)), ux(function() {
          !(Me & 6) && pr();
        }), s = null;
      else {
        switch (Pd(l)) {
          case 1:
            s = Bl;
            break;
          case 4:
            s = Ed;
            break;
          case 16:
            s = Ss;
            break;
          case 536870912:
            s = Ad;
            break;
          default:
            s = Ss;
        }
        s = qp(s, Ip.bind(null, n));
      }
      n.callbackPriority = i, n.callbackNode = s;
    }
  }
  function Ip(n, i) {
    if (ga = -1, ya = 0, Me & 6)
      throw Error(r(327));
    var s = n.callbackNode;
    if (Ci() && n.callbackNode !== s)
      return null;
    var l = Es(n, n === gt ? wt : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & n.expiredLanes || i)
      i = va(n, l);
    else {
      i = l;
      var d = Me;
      Me |= 2;
      var p = Bp();
      (gt !== n || wt !== i) && (Yn = null, Ti = nt() + 500, qr(n, i));
      do
        try {
          Dx();
          break;
        } catch (C) {
          Vp(n, C);
        }
      while (1);
      Cu(), fa.current = p, Me = d, it !== null ? i = 0 : (gt = null, wt = 0, i = ft);
    }
    if (i !== 0) {
      if (i === 2 && (d = zl(n), d !== 0 && (l = d, i = lc(n, d))), i === 1)
        throw s = Mo, qr(n, 0), _r(n, l), zt(n, nt()), s;
      if (i === 6)
        _r(n, l);
      else {
        if (d = n.current.alternate, !(l & 30) && !Lx(d) && (i = va(n, l), i === 2 && (p = zl(n), p !== 0 && (l = p, i = lc(n, p))), i === 1))
          throw s = Mo, qr(n, 0), _r(n, l), zt(n, nt()), s;
        switch (n.finishedWork = d, n.finishedLanes = l, i) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Gr(n, Bt, Yn);
            break;
          case 3:
            if (_r(n, l), (l & 130023424) === l && (i = oc + 500 - nt(), 10 < i)) {
              if (Es(n, 0) !== 0)
                break;
              if (d = n.suspendedLanes, (d & l) !== l) {
                Lt(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = pu(Gr.bind(null, n, Bt, Yn), i);
              break;
            }
            Gr(n, Bt, Yn);
            break;
          case 4:
            if (_r(n, l), (l & 4194240) === l)
              break;
            for (i = n.eventTimes, d = -1; 0 < l; ) {
              var _ = 31 - un(l);
              p = 1 << _, _ = i[_], _ > d && (d = _), l &= ~p;
            }
            if (l = d, l = nt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Ox(l / 1960)) - l, 10 < l) {
              n.timeoutHandle = pu(Gr.bind(null, n, Bt, Yn), l);
              break;
            }
            Gr(n, Bt, Yn);
            break;
          case 5:
            Gr(n, Bt, Yn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return zt(n, nt()), n.callbackNode === s ? Ip.bind(null, n) : null;
  }
  function lc(n, i) {
    var s = Do;
    return n.current.memoizedState.isDehydrated && (qr(n, i).flags |= 256), n = va(n, i), n !== 2 && (i = Bt, Bt = s, i !== null && uc(i)), n;
  }
  function uc(n) {
    Bt === null ? Bt = n : Bt.push.apply(Bt, n);
  }
  function Lx(n) {
    for (var i = n; ; ) {
      if (i.flags & 16384) {
        var s = i.updateQueue;
        if (s !== null && (s = s.stores, s !== null))
          for (var l = 0; l < s.length; l++) {
            var d = s[l], p = d.getSnapshot;
            d = d.value;
            try {
              if (!cn(p(), d))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (s = i.child, i.subtreeFlags & 16384 && s !== null)
        s.return = i, i = s;
      else {
        if (i === n)
          break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === n)
            return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function _r(n, i) {
    for (i &= ~ic, i &= ~da, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var s = 31 - un(i), l = 1 << s;
      n[s] = -1, i &= ~l;
    }
  }
  function jp(n) {
    if (Me & 6)
      throw Error(r(327));
    Ci();
    var i = Es(n, 0);
    if (!(i & 1))
      return zt(n, nt()), null;
    var s = va(n, i);
    if (n.tag !== 0 && s === 2) {
      var l = zl(n);
      l !== 0 && (i = l, s = lc(n, l));
    }
    if (s === 1)
      throw s = Mo, qr(n, 0), _r(n, i), zt(n, nt()), s;
    if (s === 6)
      throw Error(r(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, Gr(n, Bt, Yn), zt(n, nt()), null;
  }
  function cc(n, i) {
    var s = Me;
    Me |= 1;
    try {
      return n(i);
    } finally {
      Me = s, Me === 0 && (Ti = nt() + 500, Ws && pr());
    }
  }
  function Wr(n) {
    xr !== null && xr.tag === 0 && !(Me & 6) && Ci();
    var i = Me;
    Me |= 1;
    var s = tn.transition, l = Ve;
    try {
      if (tn.transition = null, Ve = 1, n)
        return n();
    } finally {
      Ve = l, tn.transition = s, Me = i, !(Me & 6) && pr();
    }
  }
  function fc() {
    Kt = ki.current, We(ki);
  }
  function qr(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, lx(s)), it !== null)
      for (s = it.return; s !== null; ) {
        var l = s;
        switch (wu(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Us();
            break;
          case 3:
            wi(), We(It), We(Et), Nu();
            break;
          case 5:
            Mu(l);
            break;
          case 4:
            wi();
            break;
          case 13:
            We(Qe);
            break;
          case 19:
            We(Qe);
            break;
          case 10:
            Eu(l.type._context);
            break;
          case 22:
          case 23:
            fc();
        }
        s = s.return;
      }
    if (gt = n, it = n = Sr(n.current, null), wt = Kt = i, ft = 0, Mo = null, ic = da = Hr = 0, Bt = Do = null, zr !== null) {
      for (i = 0; i < zr.length; i++)
        if (s = zr[i], l = s.interleaved, l !== null) {
          s.interleaved = null;
          var d = l.next, p = s.pending;
          if (p !== null) {
            var _ = p.next;
            p.next = d, l.next = _;
          }
          s.pending = l;
        }
      zr = null;
    }
    return n;
  }
  function Vp(n, i) {
    do {
      var s = it;
      try {
        if (Cu(), na.current = sa, ra) {
          for (var l = Xe.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), l = l.next;
          }
          ra = !1;
        }
        if (Ur = 0, mt = ct = Xe = null, Ao = !1, bo = 0, rc.current = null, s === null || s.return === null) {
          ft = 1, Mo = i, it = null;
          break;
        }
        e: {
          var p = n, _ = s.return, C = s, P = i;
          if (i = wt, C.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var F = P, H = C, q = H.tag;
            if (!(H.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var U = H.alternate;
              U ? (H.updateQueue = U.updateQueue, H.memoizedState = U.memoizedState, H.lanes = U.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var ee = cp(_);
            if (ee !== null) {
              ee.flags &= -257, fp(ee, _, C, p, i), ee.mode & 1 && up(p, F, i), i = ee, P = F;
              var oe = i.updateQueue;
              if (oe === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(P), i.updateQueue = se;
              } else
                oe.add(P);
              break e;
            } else {
              if (!(i & 1)) {
                up(p, F, i), dc();
                break e;
              }
              P = Error(r(426));
            }
          } else if (qe && C.mode & 1) {
            var rt = cp(_);
            if (rt !== null) {
              !(rt.flags & 65536) && (rt.flags |= 256), fp(rt, _, C, p, i), ku(_i(P, C));
              break e;
            }
          }
          p = P = _i(P, C), ft !== 4 && (ft = 2), Do === null ? Do = [p] : Do.push(p), p = _;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, i &= -i, p.lanes |= i;
                var D = ap(p, P, i);
                Rh(p, D);
                break e;
              case 1:
                C = P;
                var R = p.type, N = p.stateNode;
                if (!(p.flags & 128) && (typeof R.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (vr === null || !vr.has(N)))) {
                  p.flags |= 65536, i &= -i, p.lanes |= i;
                  var Y = lp(p, C, i);
                  Rh(p, Y);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        $p(s);
      } catch (ce) {
        i = ce, it === s && s !== null && (it = s = s.return);
        continue;
      }
      break;
    } while (1);
  }
  function Bp() {
    var n = fa.current;
    return fa.current = sa, n === null ? sa : n;
  }
  function dc() {
    (ft === 0 || ft === 3 || ft === 2) && (ft = 4), gt === null || !(Hr & 268435455) && !(da & 268435455) || _r(gt, wt);
  }
  function va(n, i) {
    var s = Me;
    Me |= 2;
    var l = Bp();
    (gt !== n || wt !== i) && (Yn = null, qr(n, i));
    do
      try {
        Mx();
        break;
      } catch (d) {
        Vp(n, d);
      }
    while (1);
    if (Cu(), Me = s, fa.current = l, it !== null)
      throw Error(r(261));
    return gt = null, wt = 0, ft;
  }
  function Mx() {
    for (; it !== null; )
      zp(it);
  }
  function Dx() {
    for (; it !== null && !o1(); )
      zp(it);
  }
  function zp(n) {
    var i = Wp(n.alternate, n, Kt);
    n.memoizedProps = n.pendingProps, i === null ? $p(n) : it = i, rc.current = null;
  }
  function $p(n) {
    var i = n;
    do {
      var s = i.alternate;
      if (n = i.return, i.flags & 32768) {
        if (s = Ax(s, i), s !== null) {
          s.flags &= 32767, it = s;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ft = 6, it = null;
          return;
        }
      } else if (s = Ex(s, i, Kt), s !== null) {
        it = s;
        return;
      }
      if (i = i.sibling, i !== null) {
        it = i;
        return;
      }
      it = i = n;
    } while (i !== null);
    ft === 0 && (ft = 5);
  }
  function Gr(n, i, s) {
    var l = Ve, d = tn.transition;
    try {
      tn.transition = null, Ve = 1, Nx(n, i, s, l);
    } finally {
      tn.transition = d, Ve = l;
    }
    return null;
  }
  function Nx(n, i, s, l) {
    do
      Ci();
    while (xr !== null);
    if (Me & 6)
      throw Error(r(327));
    s = n.finishedWork;
    var d = n.finishedLanes;
    if (s === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current)
      throw Error(r(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = s.lanes | s.childLanes;
    if (m1(n, p), n === gt && (it = gt = null, wt = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || pa || (pa = !0, qp(Ss, function() {
      return Ci(), null;
    })), p = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || p) {
      p = tn.transition, tn.transition = null;
      var _ = Ve;
      Ve = 1;
      var C = Me;
      Me |= 4, rc.current = null, Px(n, s), Lp(s, n), tx(du), Ps = !!fu, du = fu = null, n.current = s, Rx(s), s1(), Me = C, Ve = _, tn.transition = p;
    } else
      n.current = s;
    if (pa && (pa = !1, xr = n, ma = d), p = n.pendingLanes, p === 0 && (vr = null), u1(s.stateNode), zt(n, nt()), i !== null)
      for (l = n.onRecoverableError, s = 0; s < i.length; s++)
        d = i[s], l(d.value, { componentStack: d.stack, digest: d.digest });
    if (ha)
      throw ha = !1, n = sc, sc = null, n;
    return ma & 1 && n.tag !== 0 && Ci(), p = n.pendingLanes, p & 1 ? n === ac ? No++ : (No = 0, ac = n) : No = 0, pr(), null;
  }
  function Ci() {
    if (xr !== null) {
      var n = Pd(ma), i = tn.transition, s = Ve;
      try {
        if (tn.transition = null, Ve = 16 > n ? 16 : n, xr === null)
          var l = !1;
        else {
          if (n = xr, xr = null, ma = 0, Me & 6)
            throw Error(r(331));
          var d = Me;
          for (Me |= 4, re = n.current; re !== null; ) {
            var p = re, _ = p.child;
            if (re.flags & 16) {
              var C = p.deletions;
              if (C !== null) {
                for (var P = 0; P < C.length; P++) {
                  var F = C[P];
                  for (re = F; re !== null; ) {
                    var H = re;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lo(8, H, p);
                    }
                    var q = H.child;
                    if (q !== null)
                      q.return = H, re = q;
                    else
                      for (; re !== null; ) {
                        H = re;
                        var U = H.sibling, ee = H.return;
                        if (Ap(H), H === F) {
                          re = null;
                          break;
                        }
                        if (U !== null) {
                          U.return = ee, re = U;
                          break;
                        }
                        re = ee;
                      }
                  }
                }
                var oe = p.alternate;
                if (oe !== null) {
                  var se = oe.child;
                  if (se !== null) {
                    oe.child = null;
                    do {
                      var rt = se.sibling;
                      se.sibling = null, se = rt;
                    } while (se !== null);
                  }
                }
                re = p;
              }
            }
            if (p.subtreeFlags & 2064 && _ !== null)
              _.return = p, re = _;
            else
              e:
                for (; re !== null; ) {
                  if (p = re, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lo(9, p, p.return);
                    }
                  var D = p.sibling;
                  if (D !== null) {
                    D.return = p.return, re = D;
                    break e;
                  }
                  re = p.return;
                }
          }
          var R = n.current;
          for (re = R; re !== null; ) {
            _ = re;
            var N = _.child;
            if (_.subtreeFlags & 2064 && N !== null)
              N.return = _, re = N;
            else
              e:
                for (_ = R; re !== null; ) {
                  if (C = re, C.flags & 2048)
                    try {
                      switch (C.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ca(9, C);
                      }
                    } catch (ce) {
                      et(C, C.return, ce);
                    }
                  if (C === _) {
                    re = null;
                    break e;
                  }
                  var Y = C.sibling;
                  if (Y !== null) {
                    Y.return = C.return, re = Y;
                    break e;
                  }
                  re = C.return;
                }
          }
          if (Me = d, pr(), kn && typeof kn.onPostCommitFiberRoot == "function")
            try {
              kn.onPostCommitFiberRoot(ks, n);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        Ve = s, tn.transition = i;
      }
    }
    return !1;
  }
  function Up(n, i, s) {
    i = _i(s, i), i = ap(n, i, 1), n = gr(n, i, 1), i = Lt(), n !== null && (io(n, 1, i), zt(n, i));
  }
  function et(n, i, s) {
    if (n.tag === 3)
      Up(n, n, s);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          Up(i, n, s);
          break;
        } else if (i.tag === 1) {
          var l = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (vr === null || !vr.has(l))) {
            n = _i(s, n), n = lp(i, n, 1), i = gr(i, n, 1), n = Lt(), i !== null && (io(i, 1, n), zt(i, n));
            break;
          }
        }
        i = i.return;
      }
  }
  function Fx(n, i, s) {
    var l = n.pingCache;
    l !== null && l.delete(i), i = Lt(), n.pingedLanes |= n.suspendedLanes & s, gt === n && (wt & s) === s && (ft === 4 || ft === 3 && (wt & 130023424) === wt && 500 > nt() - oc ? qr(n, 0) : ic |= s), zt(n, i);
  }
  function Hp(n, i) {
    i === 0 && (n.mode & 1 ? (i = Cs, Cs <<= 1, !(Cs & 130023424) && (Cs = 4194304)) : i = 1);
    var s = Lt();
    n = qn(n, i), n !== null && (io(n, i, s), zt(n, s));
  }
  function Ix(n) {
    var i = n.memoizedState, s = 0;
    i !== null && (s = i.retryLane), Hp(n, s);
  }
  function jx(n, i) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode, d = n.memoizedState;
        d !== null && (s = d.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(i), Hp(n, s);
  }
  var Wp;
  Wp = function(n, i, s) {
    if (n !== null)
      if (n.memoizedProps !== i.pendingProps || It.current)
        Vt = !0;
      else {
        if (!(n.lanes & s) && !(i.flags & 128))
          return Vt = !1, Cx(n, i, s);
        Vt = !!(n.flags & 131072);
      }
    else
      Vt = !1, qe && i.flags & 1048576 && kh(i, Gs, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var l = i.type;
        la(n, i), n = i.pendingProps;
        var d = hi(i, Et.current);
        vi(i, s), d = ju(null, i, l, n, d, s);
        var p = Vu();
        return i.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, jt(l) ? (p = !0, Hs(i)) : p = !1, i.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Pu(i), d.updater = Js, i.stateNode = d, d._reactInternals = i, Ou(i, l, n, s), i = Gu(null, i, l, !0, p, s)) : (i.tag = 0, qe && p && xu(i), Ot(null, i, d, s), i = i.child), i;
      case 16:
        l = i.elementType;
        e: {
          switch (la(n, i), n = i.pendingProps, d = l._init, l = d(l._payload), i.type = l, d = i.tag = Bx(l), n = dn(l, n), d) {
            case 0:
              i = qu(null, i, l, n, s);
              break e;
            case 1:
              i = yp(null, i, l, n, s);
              break e;
            case 11:
              i = dp(null, i, l, n, s);
              break e;
            case 14:
              i = hp(null, i, l, dn(l.type, n), s);
              break e;
          }
          throw Error(r(
            306,
            l,
            ""
          ));
        }
        return i;
      case 0:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : dn(l, d), qu(n, i, l, d, s);
      case 1:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : dn(l, d), yp(n, i, l, d, s);
      case 3:
        e: {
          if (vp(i), n === null)
            throw Error(r(387));
          l = i.pendingProps, p = i.memoizedState, d = p.element, Ph(n, i), Zs(i, l, null, s);
          var _ = i.memoizedState;
          if (l = _.element, p.isDehydrated)
            if (p = { element: l, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, i.updateQueue.baseState = p, i.memoizedState = p, i.flags & 256) {
              d = _i(Error(r(423)), i), i = xp(n, i, l, s, d);
              break e;
            } else if (l !== d) {
              d = _i(Error(r(424)), i), i = xp(n, i, l, s, d);
              break e;
            } else
              for (Gt = fr(i.stateNode.containerInfo.firstChild), qt = i, qe = !0, fn = null, s = jh(i, null, l, s), i.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (gi(), l === d) {
              i = Kn(n, i, s);
              break e;
            }
            Ot(n, i, l, s);
          }
          i = i.child;
        }
        return i;
      case 5:
        return Vh(i), n === null && Su(i), l = i.type, d = i.pendingProps, p = n !== null ? n.memoizedProps : null, _ = d.children, hu(l, d) ? _ = null : p !== null && hu(l, p) && (i.flags |= 32), gp(n, i), Ot(n, i, _, s), i.child;
      case 6:
        return n === null && Su(i), null;
      case 13:
        return wp(n, i, s);
      case 4:
        return Lu(i, i.stateNode.containerInfo), l = i.pendingProps, n === null ? i.child = xi(i, null, l, s) : Ot(n, i, l, s), i.child;
      case 11:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : dn(l, d), dp(n, i, l, d, s);
      case 7:
        return Ot(n, i, i.pendingProps, s), i.child;
      case 8:
        return Ot(n, i, i.pendingProps.children, s), i.child;
      case 12:
        return Ot(n, i, i.pendingProps.children, s), i.child;
      case 10:
        e: {
          if (l = i.type._context, d = i.pendingProps, p = i.memoizedProps, _ = d.value, $e(Ys, l._currentValue), l._currentValue = _, p !== null)
            if (cn(p.value, _)) {
              if (p.children === d.children && !It.current) {
                i = Kn(n, i, s);
                break e;
              }
            } else
              for (p = i.child, p !== null && (p.return = i); p !== null; ) {
                var C = p.dependencies;
                if (C !== null) {
                  _ = p.child;
                  for (var P = C.firstContext; P !== null; ) {
                    if (P.context === l) {
                      if (p.tag === 1) {
                        P = Gn(-1, s & -s), P.tag = 2;
                        var F = p.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var H = F.pending;
                          H === null ? P.next = P : (P.next = H.next, H.next = P), F.pending = P;
                        }
                      }
                      p.lanes |= s, P = p.alternate, P !== null && (P.lanes |= s), Au(
                        p.return,
                        s,
                        i
                      ), C.lanes |= s;
                      break;
                    }
                    P = P.next;
                  }
                } else if (p.tag === 10)
                  _ = p.type === i.type ? null : p.child;
                else if (p.tag === 18) {
                  if (_ = p.return, _ === null)
                    throw Error(r(341));
                  _.lanes |= s, C = _.alternate, C !== null && (C.lanes |= s), Au(_, s, i), _ = p.sibling;
                } else
                  _ = p.child;
                if (_ !== null)
                  _.return = p;
                else
                  for (_ = p; _ !== null; ) {
                    if (_ === i) {
                      _ = null;
                      break;
                    }
                    if (p = _.sibling, p !== null) {
                      p.return = _.return, _ = p;
                      break;
                    }
                    _ = _.return;
                  }
                p = _;
              }
          Ot(n, i, d.children, s), i = i.child;
        }
        return i;
      case 9:
        return d = i.type, l = i.pendingProps.children, vi(i, s), d = Jt(d), l = l(d), i.flags |= 1, Ot(n, i, l, s), i.child;
      case 14:
        return l = i.type, d = dn(l, i.pendingProps), d = dn(l.type, d), hp(n, i, l, d, s);
      case 15:
        return pp(n, i, i.type, i.pendingProps, s);
      case 17:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : dn(l, d), la(n, i), i.tag = 1, jt(l) ? (n = !0, Hs(i)) : n = !1, vi(i, s), Dh(i, l, d), Ou(i, l, d, s), Gu(null, i, l, !0, n, s);
      case 19:
        return Sp(n, i, s);
      case 22:
        return mp(n, i, s);
    }
    throw Error(r(156, i.tag));
  };
  function qp(n, i) {
    return Td(n, i);
  }
  function Vx(n, i, s, l) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(n, i, s, l) {
    return new Vx(n, i, s, l);
  }
  function hc(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Bx(n) {
    if (typeof n == "function")
      return hc(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === he)
        return 11;
      if (n === ge)
        return 14;
    }
    return 2;
  }
  function Sr(n, i) {
    var s = n.alternate;
    return s === null ? (s = nn(n.tag, i, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = i, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, i = n.dependencies, s.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function xa(n, i, s, l, d, p) {
    var _ = 2;
    if (l = n, typeof n == "function")
      hc(n) && (_ = 1);
    else if (typeof n == "string")
      _ = 5;
    else
      e:
        switch (n) {
          case K:
            return Kr(s.children, d, p, i);
          case te:
            _ = 8, d |= 8;
            break;
          case J:
            return n = nn(12, s, i, d | 2), n.elementType = J, n.lanes = p, n;
          case le:
            return n = nn(13, s, i, d), n.elementType = le, n.lanes = p, n;
          case ae:
            return n = nn(19, s, i, d), n.elementType = ae, n.lanes = p, n;
          case Se:
            return wa(s, d, p, i);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ce:
                  _ = 10;
                  break e;
                case Le:
                  _ = 9;
                  break e;
                case he:
                  _ = 11;
                  break e;
                case ge:
                  _ = 14;
                  break e;
                case Ee:
                  _ = 16, l = null;
                  break e;
              }
            throw Error(r(130, n == null ? n : typeof n, ""));
        }
    return i = nn(_, s, i, d), i.elementType = n, i.type = l, i.lanes = p, i;
  }
  function Kr(n, i, s, l) {
    return n = nn(7, n, l, i), n.lanes = s, n;
  }
  function wa(n, i, s, l) {
    return n = nn(22, n, l, i), n.elementType = Se, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function pc(n, i, s) {
    return n = nn(6, n, null, i), n.lanes = s, n;
  }
  function mc(n, i, s) {
    return i = nn(4, n.children !== null ? n.children : [], n.key, i), i.lanes = s, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function zx(n, i, s, l, d) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function gc(n, i, s, l, d, p, _, C, P) {
    return n = new zx(n, i, s, C, P), i === 1 ? (i = 1, p === !0 && (i |= 8)) : i = 0, p = nn(3, null, null, i), n.current = p, p.stateNode = n, p.memoizedState = { element: l, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pu(p), n;
  }
  function $x(n, i, s) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: X, key: l == null ? null : "" + l, children: n, containerInfo: i, implementation: s };
  }
  function Gp(n) {
    if (!n)
      return hr;
    n = n._reactInternals;
    e: {
      if (Fr(n) !== n || n.tag !== 1)
        throw Error(r(170));
      var i = n;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break e;
          case 1:
            if (jt(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(r(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (jt(s))
        return wh(n, s, i);
    }
    return i;
  }
  function Kp(n, i, s, l, d, p, _, C, P) {
    return n = gc(s, l, !0, n, d, p, _, C, P), n.context = Gp(null), s = n.current, l = Lt(), d = wr(s), p = Gn(l, d), p.callback = i ?? null, gr(s, p, d), n.current.lanes = d, io(n, d, l), zt(n, l), n;
  }
  function _a(n, i, s, l) {
    var d = i.current, p = Lt(), _ = wr(d);
    return s = Gp(s), i.context === null ? i.context = s : i.pendingContext = s, i = Gn(p, _), i.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (i.callback = l), n = gr(d, i, _), n !== null && (mn(n, d, _, p), Xs(n, d, _)), _;
  }
  function Sa(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Yp(n, i) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < i ? s : i;
    }
  }
  function yc(n, i) {
    Yp(n, i), (n = n.alternate) && Yp(n, i);
  }
  function Ux() {
    return null;
  }
  var Qp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function vc(n) {
    this._internalRoot = n;
  }
  ka.prototype.render = vc.prototype.render = function(n) {
    var i = this._internalRoot;
    if (i === null)
      throw Error(r(409));
    _a(n, i, null, null);
  }, ka.prototype.unmount = vc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var i = n.containerInfo;
      Wr(function() {
        _a(null, n, null, null);
      }), i[$n] = null;
    }
  };
  function ka(n) {
    this._internalRoot = n;
  }
  ka.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var i = Ld();
      n = { blockedOn: null, target: n, priority: i };
      for (var s = 0; s < lr.length && i !== 0 && i < lr[s].priority; s++)
        ;
      lr.splice(s, 0, n), s === 0 && Nd(n);
    }
  };
  function xc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ta(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Xp() {
  }
  function Hx(n, i, s, l, d) {
    if (d) {
      if (typeof l == "function") {
        var p = l;
        l = function() {
          var F = Sa(_);
          p.call(F);
        };
      }
      var _ = Kp(i, l, n, 0, null, !1, !1, "", Xp);
      return n._reactRootContainer = _, n[$n] = _.current, xo(n.nodeType === 8 ? n.parentNode : n), Wr(), _;
    }
    for (; d = n.lastChild; )
      n.removeChild(d);
    if (typeof l == "function") {
      var C = l;
      l = function() {
        var F = Sa(P);
        C.call(F);
      };
    }
    var P = gc(n, 0, !1, null, null, !1, !1, "", Xp);
    return n._reactRootContainer = P, n[$n] = P.current, xo(n.nodeType === 8 ? n.parentNode : n), Wr(function() {
      _a(i, P, s, l);
    }), P;
  }
  function Ca(n, i, s, l, d) {
    var p = s._reactRootContainer;
    if (p) {
      var _ = p;
      if (typeof d == "function") {
        var C = d;
        d = function() {
          var P = Sa(_);
          C.call(P);
        };
      }
      _a(i, _, n, d);
    } else
      _ = Hx(s, i, n, d, l);
    return Sa(_);
  }
  Rd = function(n) {
    switch (n.tag) {
      case 3:
        var i = n.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var s = ro(i.pendingLanes);
          s !== 0 && (Ul(i, s | 1), zt(i, nt()), !(Me & 6) && (Ti = nt() + 500, pr()));
        }
        break;
      case 13:
        Wr(function() {
          var l = qn(n, 1);
          if (l !== null) {
            var d = Lt();
            mn(l, n, 1, d);
          }
        }), yc(n, 1);
    }
  }, Hl = function(n) {
    if (n.tag === 13) {
      var i = qn(n, 134217728);
      if (i !== null) {
        var s = Lt();
        mn(i, n, 134217728, s);
      }
      yc(n, 134217728);
    }
  }, Od = function(n) {
    if (n.tag === 13) {
      var i = wr(n), s = qn(n, i);
      if (s !== null) {
        var l = Lt();
        mn(s, n, i, l);
      }
      yc(n, i);
    }
  }, Ld = function() {
    return Ve;
  }, Md = function(n, i) {
    var s = Ve;
    try {
      return Ve = n, i();
    } finally {
      Ve = s;
    }
  }, ir = function(n, i, s) {
    switch (i) {
      case "input":
        if (j(n, s), i = s.name, s.type === "radio" && i != null) {
          for (s = n; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < s.length; i++) {
            var l = s[i];
            if (l !== n && l.form === n.form) {
              var d = $s(l);
              if (!d)
                throw Error(r(90));
              wn(l), j(l, d);
            }
          }
        }
        break;
      case "textarea":
        ze(n, s);
        break;
      case "select":
        i = s.value, i != null && G(n, !!s.multiple, i, !1);
    }
  }, Ji = cc, vd = Wr;
  var Wx = { usingClientEntryPoint: !1, Events: [So, fi, $s, xs, Zi, cc] }, Fo = { findFiberByHostInstance: Ir, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, qx = { bundleType: Fo.bundleType, version: Fo.version, rendererPackageName: Fo.rendererPackageName, rendererConfig: Fo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Sd(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Fo.findFiberByHostInstance || Ux, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ea.isDisabled && Ea.supportsFiber)
      try {
        ks = Ea.inject(qx), kn = Ea;
      } catch {
      }
  }
  return $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wx, $t.createPortal = function(n, i) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xc(i))
      throw Error(r(200));
    return $x(n, i, null, s);
  }, $t.createRoot = function(n, i) {
    if (!xc(n))
      throw Error(r(299));
    var s = !1, l = "", d = Qp;
    return i != null && (i.unstable_strictMode === !0 && (s = !0), i.identifierPrefix !== void 0 && (l = i.identifierPrefix), i.onRecoverableError !== void 0 && (d = i.onRecoverableError)), i = gc(n, 1, !1, null, null, s, !1, l, d), n[$n] = i.current, xo(n.nodeType === 8 ? n.parentNode : n), new vc(i);
  }, $t.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
    return n = Sd(i), n = n === null ? null : n.stateNode, n;
  }, $t.flushSync = function(n) {
    return Wr(n);
  }, $t.hydrate = function(n, i, s) {
    if (!Ta(i))
      throw Error(r(200));
    return Ca(null, n, i, !0, s);
  }, $t.hydrateRoot = function(n, i, s) {
    if (!xc(n))
      throw Error(r(405));
    var l = s != null && s.hydratedSources || null, d = !1, p = "", _ = Qp;
    if (s != null && (s.unstable_strictMode === !0 && (d = !0), s.identifierPrefix !== void 0 && (p = s.identifierPrefix), s.onRecoverableError !== void 0 && (_ = s.onRecoverableError)), i = Kp(i, null, n, 1, s ?? null, d, !1, p, _), n[$n] = i.current, xo(n), l)
      for (n = 0; n < l.length; n++)
        s = l[n], d = s._getVersion, d = d(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, d] : i.mutableSourceEagerHydrationData.push(
          s,
          d
        );
    return new ka(i);
  }, $t.render = function(n, i, s) {
    if (!Ta(i))
      throw Error(r(200));
    return Ca(null, n, i, !1, s);
  }, $t.unmountComponentAtNode = function(n) {
    if (!Ta(n))
      throw Error(r(40));
    return n._reactRootContainer ? (Wr(function() {
      Ca(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$n] = null;
      });
    }), !0) : !1;
  }, $t.unstable_batchedUpdates = cc, $t.unstable_renderSubtreeIntoContainer = function(n, i, s, l) {
    if (!Ta(s))
      throw Error(r(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(r(38));
    return Ca(n, i, s, !1, l);
  }, $t.version = "18.2.0-next-9e3b772b8-20220608", $t;
}
function cy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cy);
    } catch (e) {
      console.error(e);
    }
}
cy(), uy.exports = tw();
var nw = uy.exports, im = nw;
tf.createRoot = im.createRoot, tf.hydrateRoot = im.hydrateRoot;
const ml = M.createContext({}), rw = ({
  children: e,
  app: t,
  events: r
}) => {
  const [o, a] = M.useState(t);
  return /* @__PURE__ */ E.jsx(
    ml.Provider,
    {
      value: {
        params: o.params,
        settings: o.settings,
        events: r
      },
      children: e
    }
  );
};
function iw() {
  return M.useContext(ml).settings;
}
function Nt() {
  return M.useContext(ml).params;
}
function gl() {
  return M.useContext(ml).events;
}
const fy = M.createContext({}), ow = ({
  children: e
}) => {
  const [t, r] = M.useState(!1), o = gl(), [a, c] = M.useState(!1), [f, m] = M.useState(), [y, g] = M.useState(), x = (S) => {
    f !== "messages" && m(() => "messages"), g(() => S), o.emit("conversation.opened", { conversationId: S });
  }, u = () => {
    g(() => {
    });
  }, h = () => r(() => !1), v = () => {
    r(() => !0), c(() => !0);
  }, w = () => {
    t ? h() : v();
  };
  return /* @__PURE__ */ E.jsx(
    fy.Provider,
    {
      value: {
        isOpen: t,
        isAlreadyOpen: a,
        close: h,
        open: v,
        toggle: w,
        page: f,
        go: m,
        conversationId: y,
        selectConversation: x,
        removeConversation: u
      },
      children: e
    }
  );
}, In = () => M.useContext(fy);
function sw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function aw(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var lw = /* @__PURE__ */ function() {
  function e(r) {
    var o = this;
    this._insertTag = function(a) {
      var c;
      o.tags.length === 0 ? o.insertionPoint ? c = o.insertionPoint.nextSibling : o.prepend ? c = o.container.firstChild : c = o.before : c = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(a, c), o.tags.push(a);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(aw(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = sw(a);
      try {
        c.insertRule(o, c.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(o));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(o) {
      return o.parentNode && o.parentNode.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Rt = "-ms-", Ya = "-moz-", Fe = "-webkit-", dy = "comm", Nf = "rule", Ff = "decl", uw = "@import", hy = "@keyframes", cw = "@layer", fw = Math.abs, yl = String.fromCharCode, dw = Object.assign;
function hw(e, t) {
  return kt(e, 0) ^ 45 ? (((t << 2 ^ kt(e, 0)) << 2 ^ kt(e, 1)) << 2 ^ kt(e, 2)) << 2 ^ kt(e, 3) : 0;
}
function py(e) {
  return e.trim();
}
function pw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ie(e, t, r) {
  return e.replace(t, r);
}
function nf(e, t) {
  return e.indexOf(t);
}
function kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zo(e, t, r) {
  return e.slice(t, r);
}
function Pn(e) {
  return e.length;
}
function If(e) {
  return e.length;
}
function Aa(e, t) {
  return t.push(e), e;
}
function mw(e, t) {
  return e.map(t).join("");
}
var vl = 1, Bi = 1, my = 0, Ut = 0, at = 0, qi = "";
function xl(e, t, r, o, a, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: c, line: vl, column: Bi, length: f, return: "" };
}
function jo(e, t) {
  return dw(xl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function gw() {
  return at;
}
function yw() {
  return at = Ut > 0 ? kt(qi, --Ut) : 0, Bi--, at === 10 && (Bi = 1, vl--), at;
}
function Yt() {
  return at = Ut < my ? kt(qi, Ut++) : 0, Bi++, at === 10 && (Bi = 1, vl++), at;
}
function Mn() {
  return kt(qi, Ut);
}
function Na() {
  return Ut;
}
function ls(e, t) {
  return Zo(qi, e, t);
}
function Jo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gy(e) {
  return vl = Bi = 1, my = Pn(qi = e), Ut = 0, [];
}
function yy(e) {
  return qi = "", e;
}
function Fa(e) {
  return py(ls(Ut - 1, rf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vw(e) {
  for (; (at = Mn()) && at < 33; )
    Yt();
  return Jo(e) > 2 || Jo(at) > 3 ? "" : " ";
}
function xw(e, t) {
  for (; --t && Yt() && !(at < 48 || at > 102 || at > 57 && at < 65 || at > 70 && at < 97); )
    ;
  return ls(e, Na() + (t < 6 && Mn() == 32 && Yt() == 32));
}
function rf(e) {
  for (; Yt(); )
    switch (at) {
      case e:
        return Ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && rf(at);
        break;
      case 40:
        e === 41 && rf(e);
        break;
      case 92:
        Yt();
        break;
    }
  return Ut;
}
function ww(e, t) {
  for (; Yt() && e + at !== 47 + 10; )
    if (e + at === 42 + 42 && Mn() === 47)
      break;
  return "/*" + ls(t, Ut - 1) + "*" + yl(e === 47 ? e : Yt());
}
function _w(e) {
  for (; !Jo(Mn()); )
    Yt();
  return ls(e, Ut);
}
function Sw(e) {
  return yy(Ia("", null, null, null, [""], e = gy(e), 0, [0], e));
}
function Ia(e, t, r, o, a, c, f, m, y) {
  for (var g = 0, x = 0, u = f, h = 0, v = 0, w = 0, S = 1, k = 1, T = 1, A = 0, O = "", V = a, $ = c, X = o, K = O; k; )
    switch (w = A, A = Yt()) {
      case 40:
        if (w != 108 && kt(K, u - 1) == 58) {
          nf(K += Ie(Fa(A), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += Fa(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += vw(w);
        break;
      case 92:
        K += xw(Na() - 1, 7);
        continue;
      case 47:
        switch (Mn()) {
          case 42:
          case 47:
            Aa(kw(ww(Yt(), Na()), t, r), y);
            break;
          default:
            K += "/";
        }
        break;
      case 123 * S:
        m[g++] = Pn(K) * T;
      case 125 * S:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            k = 0;
          case 59 + x:
            T == -1 && (K = Ie(K, /\f/g, "")), v > 0 && Pn(K) - u && Aa(v > 32 ? sm(K + ";", o, r, u - 1) : sm(Ie(K, " ", "") + ";", o, r, u - 2), y);
            break;
          case 59:
            K += ";";
          default:
            if (Aa(X = om(K, t, r, g, x, a, m, O, V = [], $ = [], u), c), A === 123)
              if (x === 0)
                Ia(K, t, X, X, V, c, u, m, $);
              else
                switch (h === 99 && kt(K, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ia(e, X, X, o && Aa(om(e, X, X, 0, 0, a, m, O, a, V = [], u), $), a, $, u, m, o ? V : $);
                    break;
                  default:
                    Ia(K, X, X, X, [""], $, 0, m, $);
                }
        }
        g = x = v = 0, S = T = 1, O = K = "", u = f;
        break;
      case 58:
        u = 1 + Pn(K), v = w;
      default:
        if (S < 1) {
          if (A == 123)
            --S;
          else if (A == 125 && S++ == 0 && yw() == 125)
            continue;
        }
        switch (K += yl(A), A * S) {
          case 38:
            T = x > 0 ? 1 : (K += "\f", -1);
            break;
          case 44:
            m[g++] = (Pn(K) - 1) * T, T = 1;
            break;
          case 64:
            Mn() === 45 && (K += Fa(Yt())), h = Mn(), x = u = Pn(O = K += _w(Na())), A++;
            break;
          case 45:
            w === 45 && Pn(K) == 2 && (S = 0);
        }
    }
  return c;
}
function om(e, t, r, o, a, c, f, m, y, g, x) {
  for (var u = a - 1, h = a === 0 ? c : [""], v = If(h), w = 0, S = 0, k = 0; w < o; ++w)
    for (var T = 0, A = Zo(e, u + 1, u = fw(S = f[w])), O = e; T < v; ++T)
      (O = py(S > 0 ? h[T] + " " + A : Ie(A, /&\f/g, h[T]))) && (y[k++] = O);
  return xl(e, t, r, a === 0 ? Nf : m, y, g, x);
}
function kw(e, t, r) {
  return xl(e, t, r, dy, yl(gw()), Zo(e, 2, -2), 0);
}
function sm(e, t, r, o) {
  return xl(e, t, r, Ff, Zo(e, 0, o), Zo(e, o + 1, -1), o);
}
function Ii(e, t) {
  for (var r = "", o = If(e), a = 0; a < o; a++)
    r += t(e[a], a, e, t) || "";
  return r;
}
function Tw(e, t, r, o) {
  switch (e.type) {
    case cw:
      if (e.children.length)
        break;
    case uw:
    case Ff:
      return e.return = e.return || e.value;
    case dy:
      return "";
    case hy:
      return e.return = e.value + "{" + Ii(e.children, o) + "}";
    case Nf:
      e.value = e.props.join(",");
  }
  return Pn(r = Ii(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Cw(e) {
  var t = If(e);
  return function(r, o, a, c) {
    for (var f = "", m = 0; m < t; m++)
      f += e[m](r, o, a, c) || "";
    return f;
  };
}
function Ew(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var am = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(o) {
    if (r.has(o))
      return r.get(o);
    var a = t(o);
    return r.set(o, a), a;
  };
};
function vy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Aw = function(t, r, o) {
  for (var a = 0, c = 0; a = c, c = Mn(), a === 38 && c === 12 && (r[o] = 1), !Jo(c); )
    Yt();
  return ls(t, Ut);
}, bw = function(t, r) {
  var o = -1, a = 44;
  do
    switch (Jo(a)) {
      case 0:
        a === 38 && Mn() === 12 && (r[o] = 1), t[o] += Aw(Ut - 1, r, o);
        break;
      case 2:
        t[o] += Fa(a);
        break;
      case 4:
        if (a === 44) {
          t[++o] = Mn() === 58 ? "&\f" : "", r[o] = t[o].length;
          break;
        }
      default:
        t[o] += yl(a);
    }
  while (a = Yt());
  return t;
}, Pw = function(t, r) {
  return yy(bw(gy(t), r));
}, lm = /* @__PURE__ */ new WeakMap(), Rw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, o = t.parent, a = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !lm.get(o)) && !a) {
      lm.set(t, !0);
      for (var c = [], f = Pw(r, c), m = o.props, y = 0, g = 0; y < f.length; y++)
        for (var x = 0; x < m.length; x++, g++)
          t.props[g] = c[y] ? f[y].replace(/&\f/g, m[x]) : m[x] + " " + f[y];
    }
  }
}, Ow = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function xy(e, t) {
  switch (hw(e, t)) {
    case 5103:
      return Fe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Fe + e + Ya + e + Rt + e + e;
    case 6828:
    case 4268:
      return Fe + e + Rt + e + e;
    case 6165:
      return Fe + e + Rt + "flex-" + e + e;
    case 5187:
      return Fe + e + Ie(e, /(\w+).+(:[^]+)/, Fe + "box-$1$2" + Rt + "flex-$1$2") + e;
    case 5443:
      return Fe + e + Rt + "flex-item-" + Ie(e, /flex-|-self/, "") + e;
    case 4675:
      return Fe + e + Rt + "flex-line-pack" + Ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Fe + e + Rt + Ie(e, "shrink", "negative") + e;
    case 5292:
      return Fe + e + Rt + Ie(e, "basis", "preferred-size") + e;
    case 6060:
      return Fe + "box-" + Ie(e, "-grow", "") + Fe + e + Rt + Ie(e, "grow", "positive") + e;
    case 4554:
      return Fe + Ie(e, /([^-])(transform)/g, "$1" + Fe + "$2") + e;
    case 6187:
      return Ie(Ie(Ie(e, /(zoom-|grab)/, Fe + "$1"), /(image-set)/, Fe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ie(e, /(image-set\([^]*)/, Fe + "$1$`$1");
    case 4968:
      return Ie(Ie(e, /(.+:)(flex-)?(.*)/, Fe + "box-pack:$3" + Rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Fe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ie(e, /(.+)-inline(.+)/, Fe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pn(e) - 1 - t > 6)
        switch (kt(e, t + 1)) {
          case 109:
            if (kt(e, t + 4) !== 45)
              break;
          case 102:
            return Ie(e, /(.+:)(.+)-([^]+)/, "$1" + Fe + "$2-$3$1" + Ya + (kt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~nf(e, "stretch") ? xy(Ie(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (kt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (kt(e, Pn(e) - 3 - (~nf(e, "!important") && 10))) {
        case 107:
          return Ie(e, ":", ":" + Fe) + e;
        case 101:
          return Ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Fe + (kt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Fe + "$2$3$1" + Rt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (kt(e, t + 11)) {
        case 114:
          return Fe + e + Rt + Ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Fe + e + Rt + Ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Fe + e + Rt + Ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Fe + e + Rt + e + e;
  }
  return e;
}
var Lw = function(t, r, o, a) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ff:
        t.return = xy(t.value, t.length);
        break;
      case hy:
        return Ii([jo(t, {
          value: Ie(t.value, "@", "@" + Fe)
        })], a);
      case Nf:
        if (t.length)
          return mw(t.props, function(c) {
            switch (pw(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ii([jo(t, {
                  props: [Ie(c, /:(read-\w+)/, ":" + Ya + "$1")]
                })], a);
              case "::placeholder":
                return Ii([jo(t, {
                  props: [Ie(c, /:(plac\w+)/, ":" + Fe + "input-$1")]
                }), jo(t, {
                  props: [Ie(c, /:(plac\w+)/, ":" + Ya + "$1")]
                }), jo(t, {
                  props: [Ie(c, /:(plac\w+)/, Rt + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Mw = [Lw], Dw = function(t) {
  var r = t.key;
  if (r === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(S) {
      var k = S.getAttribute("data-emotion");
      k.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var a = t.stylisPlugins || Mw, c = {}, f, m = [];
  f = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(S) {
      for (var k = S.getAttribute("data-emotion").split(" "), T = 1; T < k.length; T++)
        c[k[T]] = !0;
      m.push(S);
    }
  );
  var y, g = [Rw, Ow];
  {
    var x, u = [Tw, Ew(function(S) {
      x.insert(S);
    })], h = Cw(g.concat(a, u)), v = function(k) {
      return Ii(Sw(k), h);
    };
    y = function(k, T, A, O) {
      x = A, v(k ? k + "{" + T.styles + "}" : T.styles), O && (w.inserted[T.name] = !0);
    };
  }
  var w = {
    key: r,
    sheet: new lw({
      key: r,
      container: f,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: c,
    registered: {},
    insert: y
  };
  return w.sheet.hydrate(m), w;
};
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Qa.apply(this, arguments);
}
var Nw = !0;
function Fw(e, t, r) {
  var o = "";
  return r.split(" ").forEach(function(a) {
    e[a] !== void 0 ? t.push(e[a] + ";") : o += a + " ";
  }), o;
}
var wy = function(t, r, o) {
  var a = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Nw === !1) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
}, Iw = function(t, r, o) {
  wy(t, r, o);
  var a = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var c = r;
    do
      t.insert(r === c ? "." + a : "", c, t.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function jw(e) {
  for (var t = 0, r, o = 0, a = e.length; a >= 4; ++o, a -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Vw = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Bw = /[A-Z]|^ms/g, zw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _y = function(t) {
  return t.charCodeAt(1) === 45;
}, um = function(t) {
  return t != null && typeof t != "boolean";
}, kc = /* @__PURE__ */ vy(function(e) {
  return _y(e) ? e : e.replace(Bw, "-$&").toLowerCase();
}), cm = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(zw, function(o, a, c) {
          return Rn = {
            name: a,
            styles: c,
            next: Rn
          }, a;
        });
  }
  return Vw[t] !== 1 && !_y(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function es(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Rn = {
          name: r.name,
          styles: r.styles,
          next: Rn
        }, r.name;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            Rn = {
              name: o.name,
              styles: o.styles,
              next: Rn
            }, o = o.next;
        var a = r.styles + ";";
        return a;
      }
      return $w(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Rn, f = r(e);
        return Rn = c, es(e, t, f);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var m = t[r];
  return m !== void 0 ? m : r;
}
function $w(e, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      o += es(e, t, r[a]) + ";";
  else
    for (var c in r) {
      var f = r[c];
      if (typeof f != "object")
        t != null && t[f] !== void 0 ? o += c + "{" + t[f] + "}" : um(f) && (o += kc(c) + ":" + cm(c, f) + ";");
      else if (Array.isArray(f) && typeof f[0] == "string" && (t == null || t[f[0]] === void 0))
        for (var m = 0; m < f.length; m++)
          um(f[m]) && (o += kc(c) + ":" + cm(c, f[m]) + ";");
      else {
        var y = es(e, t, f);
        switch (c) {
          case "animation":
          case "animationName": {
            o += kc(c) + ":" + y + ";";
            break;
          }
          default:
            o += c + "{" + y + "}";
        }
      }
    }
  return o;
}
var fm = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Rn, Uw = function(t, r, o) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var a = !0, c = "";
  Rn = void 0;
  var f = t[0];
  f == null || f.raw === void 0 ? (a = !1, c += es(o, r, f)) : c += f[0];
  for (var m = 1; m < t.length; m++)
    c += es(o, r, t[m]), a && (c += f[m]);
  fm.lastIndex = 0;
  for (var y = "", g; (g = fm.exec(c)) !== null; )
    y += "-" + // $FlowFixMe we know it's not null
    g[1];
  var x = jw(c) + y;
  return {
    name: x,
    styles: c,
    next: Rn
  };
}, Hw = function(t) {
  return t();
}, Ww = Jp["useInsertionEffect"] ? Jp["useInsertionEffect"] : !1, qw = Ww || Hw, Sy = /* @__PURE__ */ M.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Dw({
    key: "css"
  }) : null
);
Sy.Provider;
var Gw = function(t) {
  return /* @__PURE__ */ M.forwardRef(function(r, o) {
    var a = M.useContext(Sy);
    return t(r, a, o);
  });
}, Xa = /* @__PURE__ */ M.createContext({}), Kw = function() {
  return M.useContext(Xa);
}, Yw = function(t, r) {
  if (typeof r == "function") {
    var o = r(t);
    return o;
  }
  return Qa({}, t, r);
}, Qw = /* @__PURE__ */ am(function(e) {
  return am(function(t) {
    return Yw(e, t);
  });
}), Xw = function(t) {
  var r = M.useContext(Xa);
  return t.theme !== r && (r = Qw(r)(t.theme)), /* @__PURE__ */ M.createElement(Xa.Provider, {
    value: r
  }, t.children);
}, Zw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jw = /* @__PURE__ */ vy(
  function(e) {
    return Zw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), e_ = Jw, t_ = function(t) {
  return t !== "theme";
}, dm = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? e_ : t_;
}, hm = function(t, r, o) {
  var a;
  if (r) {
    var c = r.shouldForwardProp;
    a = t.__emotion_forwardProp && c ? function(f) {
      return t.__emotion_forwardProp(f) && c(f);
    } : c;
  }
  return typeof a != "function" && o && (a = t.__emotion_forwardProp), a;
}, n_ = function(t) {
  var r = t.cache, o = t.serialized, a = t.isStringTag;
  return wy(r, o, a), qw(function() {
    return Iw(r, o, a);
  }), null;
}, r_ = function e(t, r) {
  var o = t.__emotion_real === t, a = o && t.__emotion_base || t, c, f;
  r !== void 0 && (c = r.label, f = r.target);
  var m = hm(t, r, o), y = m || dm(a), g = !y("as");
  return function() {
    var x = arguments, u = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (c !== void 0 && u.push("label:" + c + ";"), x[0] == null || x[0].raw === void 0)
      u.push.apply(u, x);
    else {
      u.push(x[0][0]);
      for (var h = x.length, v = 1; v < h; v++)
        u.push(x[v], x[0][v]);
    }
    var w = Gw(function(S, k, T) {
      var A = g && S.as || a, O = "", V = [], $ = S;
      if (S.theme == null) {
        $ = {};
        for (var X in S)
          $[X] = S[X];
        $.theme = M.useContext(Xa);
      }
      typeof S.className == "string" ? O = Fw(k.registered, V, S.className) : S.className != null && (O = S.className + " ");
      var K = Uw(u.concat(V), k.registered, $);
      O += k.key + "-" + K.name, f !== void 0 && (O += " " + f);
      var te = g && m === void 0 ? dm(A) : y, J = {};
      for (var Ce in S)
        g && Ce === "as" || // $FlowFixMe
        te(Ce) && (J[Ce] = S[Ce]);
      return J.className = O, J.ref = T, /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(n_, {
        cache: k,
        serialized: K,
        isStringTag: typeof A == "string"
      }), /* @__PURE__ */ M.createElement(A, J));
    });
    return w.displayName = c !== void 0 ? c : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = a, w.__emotion_styles = u, w.__emotion_forwardProp = m, Object.defineProperty(w, "toString", {
      value: function() {
        return "." + f;
      }
    }), w.withComponent = function(S, k) {
      return e(S, Qa({}, r, k, {
        shouldForwardProp: hm(w, k, !0)
      })).apply(void 0, u);
    }, w;
  };
}, i_ = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Te = r_.bind();
i_.forEach(function(e) {
  Te[e] = Te(e);
});
function o_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ts(e, t) {
  return ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
    return o.__proto__ = a, o;
  }, ts(e, t);
}
function s_(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ts(e, t);
}
function of(e) {
  return of = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, of(e);
}
function a_(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function l_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ja(e, t, r) {
  return l_() ? ja = Reflect.construct.bind() : ja = function(a, c, f) {
    var m = [null];
    m.push.apply(m, c);
    var y = Function.bind.apply(a, m), g = new y();
    return f && ts(g, f.prototype), g;
  }, ja.apply(null, arguments);
}
function sf(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return sf = function(o) {
    if (o === null || !a_(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o))
        return t.get(o);
      t.set(o, a);
    }
    function a() {
      return ja(o, arguments, of(this).constructor);
    }
    return a.prototype = Object.create(o.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ts(a, o);
  }, sf(e);
}
var Oi = /* @__PURE__ */ function(e) {
  s_(t, e);
  function t(r) {
    var o;
    return o = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this, o_(o);
  }
  return t;
}(/* @__PURE__ */ sf(Error));
function Tc(e) {
  return Math.round(e * 255);
}
function u_(e, t, r) {
  return Tc(e) + "," + Tc(t) + "," + Tc(r);
}
function pm(e, t, r, o) {
  if (o === void 0 && (o = u_), t === 0)
    return o(r, r, r);
  var a = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * r - 1)) * t, f = c * (1 - Math.abs(a % 2 - 1)), m = 0, y = 0, g = 0;
  a >= 0 && a < 1 ? (m = c, y = f) : a >= 1 && a < 2 ? (m = f, y = c) : a >= 2 && a < 3 ? (y = c, g = f) : a >= 3 && a < 4 ? (y = f, g = c) : a >= 4 && a < 5 ? (m = f, g = c) : a >= 5 && a < 6 && (m = c, g = f);
  var x = r - c / 2, u = m + x, h = y + x, v = g + x;
  return o(u, h, v);
}
var mm = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function c_(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return mm[t] ? "#" + mm[t] : e;
}
var f_ = /^#[a-fA-F0-9]{6}$/, d_ = /^#[a-fA-F0-9]{8}$/, h_ = /^#[a-fA-F0-9]{3}$/, p_ = /^#[a-fA-F0-9]{4}$/, Cc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, m_ = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, g_ = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, y_ = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function v_(e) {
  if (typeof e != "string")
    throw new Oi(3);
  var t = c_(e);
  if (t.match(f_))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(d_)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(h_))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(p_)) {
    var o = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: o
    };
  }
  var a = Cc.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var c = m_.exec(t.substring(0, 50));
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10),
      alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4])
    };
  var f = g_.exec(t);
  if (f) {
    var m = parseInt("" + f[1], 10), y = parseInt("" + f[2], 10) / 100, g = parseInt("" + f[3], 10) / 100, x = "rgb(" + pm(m, y, g) + ")", u = Cc.exec(x);
    if (!u)
      throw new Oi(4, t, x);
    return {
      red: parseInt("" + u[1], 10),
      green: parseInt("" + u[2], 10),
      blue: parseInt("" + u[3], 10)
    };
  }
  var h = y_.exec(t.substring(0, 50));
  if (h) {
    var v = parseInt("" + h[1], 10), w = parseInt("" + h[2], 10) / 100, S = parseInt("" + h[3], 10) / 100, k = "rgb(" + pm(v, w, S) + ")", T = Cc.exec(k);
    if (!T)
      throw new Oi(4, t, k);
    return {
      red: parseInt("" + T[1], 10),
      green: parseInt("" + T[2], 10),
      blue: parseInt("" + T[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4])
    };
  }
  throw new Oi(5);
}
var x_ = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, gm = x_;
function Ei(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ym(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return gm("#" + Ei(e) + Ei(t) + Ei(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return gm("#" + Ei(e.red) + Ei(e.green) + Ei(e.blue));
  throw new Oi(6);
}
function zi(e, t, r, o) {
  if (typeof e == "string" && typeof t == "number") {
    var a = v_(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof o == "number")
      return o >= 1 ? ym(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + o + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && o === void 0)
      return e.alpha >= 1 ? ym(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Oi(7);
}
var tt;
((e) => {
  ((t) => {
    t.BottomRight = "1", t.BottomLeft = "2", t.TopRight = "3", t.TopLeft = "4";
  })(e.ChatPosition || (e.ChatPosition = {}));
})(tt || (tt = {}));
const w_ = Te.div`
  position: fixed;
  right: ${(e) => [tt.ChatPosition.BottomRight, tt.ChatPosition.TopRight].includes(
  e.theme.position
) ? "0" : "unset"};
  bottom: ${(e) => [tt.ChatPosition.BottomRight, tt.ChatPosition.BottomLeft].includes(
  e.theme.position
) ? "0" : "unset"};
  left: ${(e) => [tt.ChatPosition.BottomLeft, tt.ChatPosition.TopLeft].includes(
  e.theme.position
) ? "0" : "unset"};
  top: ${(e) => [tt.ChatPosition.TopRight, tt.ChatPosition.TopLeft].includes(
  e.theme.position
) ? "0" : "unset"};
`, __ = Te.div`
  display: flex;
  flex-direction: ${(e) => [tt.ChatPosition.TopLeft, tt.ChatPosition.TopRight].includes(
  e.theme.position
) ? "column-reverse" : "column"};
  margin: 0 10px;
  font-family: "Plus Jakarta Sans";

  * {
    box-sizing: border-box;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    font-family: "Plus Jakarta Sans";
    /* background: transparent; */
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    font-family: "Plus Jakarta Sans";
  }

  p {
    margin: 0;
  }

  .scroll-mini {
    outline: none;
  }
  .scroll-mini::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  .scroll-mini::-webkit-scrollbar-track {
    height: 8px;
    width: 8px;
  }
  .scroll-mini::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    /* background-color: ${(e) => e.theme.colors.secondary}; */
  }
`, S_ = Te.div`
  display: flex;
  flex-direction: row;
  margin: 20px 14px;
  gap: 40px;
  align-items: flex-end;
  position: relative;
`, k_ = Te.button`
  border-radius: 50%;
  margin-left: ${(e) => [tt.ChatPosition.TopLeft, tt.ChatPosition.BottomLeft].includes(
  e.theme.position
) ? "unset" : "auto"};
  /* margin-left: auto; */
  width: 52px;
  height: 52px;
  background-color: ${(e) => e.isOpen ? e.theme.colors.secondary : e.theme.colors.primary};
  position: relative;
  z-index: 2000;
  box-shadow: 0 7px 10px
    ${(e) => zi(
  e.isOpen ? e.theme.colors.secondary : e.theme.colors.primary,
  0.6
)};
  transition: scale 0.6s ease-in-out, background-color 0.3s ease-in-out,
    box-shadow 0.5s ease-in-out;
  position: relative;
  scale: ${(e) => e.isOpen ? 0.95 : 1};

  :active {
    scale: 0.9;
    transition: scale 0.1s ease-in-out, background-color 0.2s ease-in-out,
      box-shadow 0.5s ease-in-out;
  }

  svg {
    font-size: 28px;
    color: white;
  }

  .el {
    width: 20%;
    height: 20%;
    background: transparent;
    border: 1px solid white;
    position: absolute;

    :nth-of-type(1) {
      left: 20%;
      top: 20%;
    }
    :nth-of-type(2) {
      left: 55%;
      top: 20%;
    }
    :nth-of-type(3) {
      left: 55%;
      top: 55%;
    }
    :nth-of-type(4) {
      left: 20%;
      top: 55%;
    }
  }
`, ky = M.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), wl = M.createContext({}), _l = M.createContext(null), Sl = typeof document < "u", Za = Sl ? M.useLayoutEffect : M.useEffect, Ty = M.createContext({ strict: !1 });
function T_(e, t, r, o) {
  const { visualElement: a } = M.useContext(wl), c = M.useContext(Ty), f = M.useContext(_l), m = M.useContext(ky).reducedMotion, y = M.useRef();
  o = o || c.renderer, !y.current && o && (y.current = o(e, {
    visualState: t,
    parent: a,
    props: r,
    presenceContext: f,
    blockInitialAnimation: f ? f.initial === !1 : !1,
    reducedMotionConfig: m
  }));
  const g = y.current;
  return M.useInsertionEffect(() => {
    g && g.update(r, f);
  }), Za(() => {
    g && g.render();
  }), M.useEffect(() => {
    g && g.updateFeatures();
  }), (window.HandoffAppearAnimations ? Za : M.useEffect)(() => {
    g && g.animationState && g.animationState.animateChanges();
  }), g;
}
function Li(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function C_(e, t, r) {
  return M.useCallback(
    (o) => {
      o && e.mount && e.mount(o), t && (o ? t.mount(o) : t.unmount()), r && (typeof r == "function" ? r(o) : Li(r) && (r.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ns(e) {
  return typeof e == "string" || Array.isArray(e);
}
function kl(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const jf = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Vf = ["initial", ...jf];
function Tl(e) {
  return kl(e.animate) || Vf.some((t) => ns(e[t]));
}
function Cy(e) {
  return !!(Tl(e) || e.variants);
}
function E_(e, t) {
  if (Tl(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || ns(r) ? r : void 0,
      animate: ns(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function A_(e) {
  const { initial: t, animate: r } = E_(e, M.useContext(wl));
  return M.useMemo(() => ({ initial: t, animate: r }), [vm(t), vm(r)]);
}
function vm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xm = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, rs = {};
for (const e in xm)
  rs[e] = {
    isEnabled: (t) => xm[e].some((r) => !!t[r])
  };
function b_(e) {
  for (const t in e)
    rs[t] = {
      ...rs[t],
      ...e[t]
    };
}
const is = M.createContext({}), Ey = M.createContext({}), P_ = Symbol.for("motionComponentSymbol");
function R_({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: o, Component: a }) {
  e && b_(e);
  function c(m, y) {
    let g;
    const x = {
      ...M.useContext(ky),
      ...m,
      layoutId: O_(m)
    }, { isStatic: u } = x, h = A_(m), v = o(m, u);
    if (!u && Sl) {
      h.visualElement = T_(a, v, x, t);
      const w = M.useContext(Ey), S = M.useContext(Ty).strict;
      h.visualElement && (g = h.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        x,
        S,
        e,
        w
      ));
    }
    return M.createElement(
      wl.Provider,
      { value: h },
      g && h.visualElement ? M.createElement(g, { visualElement: h.visualElement, ...x }) : null,
      r(a, m, C_(v, h.visualElement, y), v, u, h.visualElement)
    );
  }
  const f = M.forwardRef(c);
  return f[P_] = a, f;
}
function O_({ layoutId: e }) {
  const t = M.useContext(is).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function L_(e) {
  function t(o, a = {}) {
    return R_(e(o, a));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, a) => (r.has(a) || r.set(a, t(a)), r.get(a))
  });
}
const M_ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Bf(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(M_.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Ja = {};
function D_(e) {
  Object.assign(Ja, e);
}
const us = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Jr = new Set(us);
function Ay(e, { layout: t, layoutId: r }) {
  return Jr.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Ja[e] || e === "opacity");
}
const Ht = (e) => !!(e && e.getVelocity), N_ = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, F_ = us.length;
function I_(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, o, a) {
  let c = "";
  for (let f = 0; f < F_; f++) {
    const m = us[f];
    if (e[m] !== void 0) {
      const y = N_[m] || m;
      c += `${y}(${e[m]}) `;
    }
  }
  return t && !e.z && (c += "translateZ(0)"), c = c.trim(), a ? c = a(e, o ? "" : c) : r && o && (c = "none"), c;
}
const by = (e) => (t) => typeof t == "string" && t.startsWith(e), Py = by("--"), af = by("var(--"), j_ = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, V_ = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Lr = (e, t, r) => Math.min(Math.max(r, e), t), ei = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ko = {
  ...ei,
  transform: (e) => Lr(0, 1, e)
}, ba = {
  ...ei,
  default: 1
}, Yo = (e) => Math.round(e * 1e5) / 1e5, Cl = /(-)?([\d]*\.?[\d])+/g, Ry = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, B_ = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function cs(e) {
  return typeof e == "string";
}
const fs = (e) => ({
  test: (t) => cs(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Cr = fs("deg"), Dn = fs("%"), ye = fs("px"), z_ = fs("vh"), $_ = fs("vw"), wm = {
  ...Dn,
  parse: (e) => Dn.parse(e) / 100,
  transform: (e) => Dn.transform(e * 100)
}, _m = {
  ...ei,
  transform: Math.round
}, Oy = {
  // Border props
  borderWidth: ye,
  borderTopWidth: ye,
  borderRightWidth: ye,
  borderBottomWidth: ye,
  borderLeftWidth: ye,
  borderRadius: ye,
  radius: ye,
  borderTopLeftRadius: ye,
  borderTopRightRadius: ye,
  borderBottomRightRadius: ye,
  borderBottomLeftRadius: ye,
  // Positioning props
  width: ye,
  maxWidth: ye,
  height: ye,
  maxHeight: ye,
  size: ye,
  top: ye,
  right: ye,
  bottom: ye,
  left: ye,
  // Spacing props
  padding: ye,
  paddingTop: ye,
  paddingRight: ye,
  paddingBottom: ye,
  paddingLeft: ye,
  margin: ye,
  marginTop: ye,
  marginRight: ye,
  marginBottom: ye,
  marginLeft: ye,
  // Transform props
  rotate: Cr,
  rotateX: Cr,
  rotateY: Cr,
  rotateZ: Cr,
  scale: ba,
  scaleX: ba,
  scaleY: ba,
  scaleZ: ba,
  skew: Cr,
  skewX: Cr,
  skewY: Cr,
  distance: ye,
  translateX: ye,
  translateY: ye,
  translateZ: ye,
  x: ye,
  y: ye,
  z: ye,
  perspective: ye,
  transformPerspective: ye,
  opacity: Ko,
  originX: wm,
  originY: wm,
  originZ: ye,
  // Misc
  zIndex: _m,
  // SVG
  fillOpacity: Ko,
  strokeOpacity: Ko,
  numOctaves: _m
};
function zf(e, t, r, o) {
  const { style: a, vars: c, transform: f, transformOrigin: m } = e;
  let y = !1, g = !1, x = !0;
  for (const u in t) {
    const h = t[u];
    if (Py(u)) {
      c[u] = h;
      continue;
    }
    const v = Oy[u], w = V_(h, v);
    if (Jr.has(u)) {
      if (y = !0, f[u] = w, !x)
        continue;
      h !== (v.default || 0) && (x = !1);
    } else
      u.startsWith("origin") ? (g = !0, m[u] = w) : a[u] = w;
  }
  if (t.transform || (y || o ? a.transform = I_(e.transform, r, x, o) : a.transform && (a.transform = "none")), g) {
    const { originX: u = "50%", originY: h = "50%", originZ: v = 0 } = m;
    a.transformOrigin = `${u} ${h} ${v}`;
  }
}
const $f = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ly(e, t, r) {
  for (const o in t)
    !Ht(t[o]) && !Ay(o, r) && (e[o] = t[o]);
}
function U_({ transformTemplate: e }, t, r) {
  return M.useMemo(() => {
    const o = $f();
    return zf(o, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, o.vars, o.style);
  }, [t]);
}
function H_(e, t, r) {
  const o = e.style || {}, a = {};
  return Ly(a, o, e), Object.assign(a, U_(e, t, r)), e.transformValues ? e.transformValues(a) : a;
}
function W_(e, t, r) {
  const o = {}, a = H_(e, t, r);
  return e.drag && e.dragListener !== !1 && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = a, o;
}
const q_ = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function el(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || q_.has(e);
}
let My = (e) => !el(e);
function G_(e) {
  e && (My = (t) => t.startsWith("on") ? !el(t) : e(t));
}
try {
  G_(require("@emotion/is-prop-valid").default);
} catch {
}
function K_(e, t, r) {
  const o = {};
  for (const a in e)
    a === "values" && typeof e.values == "object" || (My(a) || r === !0 && el(a) || !t && !el(a) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && a.startsWith("onDrag")) && (o[a] = e[a]);
  return o;
}
function Sm(e, t, r) {
  return typeof e == "string" ? e : ye.transform(t + r * e);
}
function Y_(e, t, r) {
  const o = Sm(t, e.x, e.width), a = Sm(r, e.y, e.height);
  return `${o} ${a}`;
}
const Q_ = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, X_ = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Z_(e, t, r = 1, o = 0, a = !0) {
  e.pathLength = 1;
  const c = a ? Q_ : X_;
  e[c.offset] = ye.transform(-o);
  const f = ye.transform(t), m = ye.transform(r);
  e[c.array] = `${f} ${m}`;
}
function Uf(e, {
  attrX: t,
  attrY: r,
  attrScale: o,
  originX: a,
  originY: c,
  pathLength: f,
  pathSpacing: m = 1,
  pathOffset: y = 0,
  // This is object creation, which we try to avoid per-frame.
  ...g
}, x, u, h) {
  if (zf(e, g, x, h), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: v, style: w, dimensions: S } = e;
  v.transform && (S && (w.transform = v.transform), delete v.transform), S && (a !== void 0 || c !== void 0 || w.transform) && (w.transformOrigin = Y_(S, a !== void 0 ? a : 0.5, c !== void 0 ? c : 0.5)), t !== void 0 && (v.x = t), r !== void 0 && (v.y = r), o !== void 0 && (v.scale = o), f !== void 0 && Z_(v, f, m, y, !1);
}
const Dy = () => ({
  ...$f(),
  attrs: {}
}), Hf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function J_(e, t, r, o) {
  const a = M.useMemo(() => {
    const c = Dy();
    return Uf(c, t, { enableHardwareAcceleration: !1 }, Hf(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [t]);
  if (e.style) {
    const c = {};
    Ly(c, e.style, e), a.style = { ...c, ...a.style };
  }
  return a;
}
function eS(e = !1) {
  return (r, o, a, { latestValues: c }, f) => {
    const y = (Bf(r) ? J_ : W_)(o, c, f, r), x = {
      ...K_(o, typeof r == "string", e),
      ...y,
      ref: a
    }, { children: u } = o, h = M.useMemo(() => Ht(u) ? u.get() : u, [u]);
    return M.createElement(r, {
      ...x,
      children: h
    });
  };
}
const Wf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Ny(e, { style: t, vars: r }, o, a) {
  Object.assign(e.style, t, a && a.getProjectionStyles(o));
  for (const c in r)
    e.style.setProperty(c, r[c]);
}
const Fy = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Iy(e, t, r, o) {
  Ny(e, t, void 0, o);
  for (const a in t.attrs)
    e.setAttribute(Fy.has(a) ? a : Wf(a), t.attrs[a]);
}
function qf(e, t) {
  const { style: r } = e, o = {};
  for (const a in r)
    (Ht(r[a]) || t.style && Ht(t.style[a]) || Ay(a, e)) && (o[a] = r[a]);
  return o;
}
function jy(e, t) {
  const r = qf(e, t);
  for (const o in e)
    if (Ht(e[o]) || Ht(t[o])) {
      const a = us.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[a] = e[o];
    }
  return r;
}
function Gf(e, t, r, o = {}, a = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, o, a)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, o, a)), t;
}
function Vy(e) {
  const t = M.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const tl = (e) => Array.isArray(e), tS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), nS = (e) => tl(e) ? e[e.length - 1] || 0 : e;
function Va(e) {
  const t = Ht(e) ? e.get() : e;
  return tS(t) ? t.toValue() : t;
}
function rS({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, o, a, c) {
  const f = {
    latestValues: iS(o, a, c, e),
    renderState: t()
  };
  return r && (f.mount = (m) => r(o, m, f)), f;
}
const By = (e) => (t, r) => {
  const o = M.useContext(wl), a = M.useContext(_l), c = () => rS(e, t, o, a);
  return r ? c() : Vy(c);
};
function iS(e, t, r, o) {
  const a = {}, c = o(e, {});
  for (const h in c)
    a[h] = Va(c[h]);
  let { initial: f, animate: m } = e;
  const y = Tl(e), g = Cy(e);
  t && g && !y && e.inherit !== !1 && (f === void 0 && (f = t.initial), m === void 0 && (m = t.animate));
  let x = r ? r.initial === !1 : !1;
  x = x || f === !1;
  const u = x ? m : f;
  return u && typeof u != "boolean" && !kl(u) && (Array.isArray(u) ? u : [u]).forEach((v) => {
    const w = Gf(e, v);
    if (!w)
      return;
    const { transitionEnd: S, transition: k, ...T } = w;
    for (const A in T) {
      let O = T[A];
      if (Array.isArray(O)) {
        const V = x ? O.length - 1 : 0;
        O = O[V];
      }
      O !== null && (a[A] = O);
    }
    for (const A in S)
      a[A] = S[A];
  }), a;
}
const oS = {
  useVisualState: By({
    scrapeMotionValuesFromProps: jy,
    createRenderState: Dy,
    onMount: (e, t, { renderState: r, latestValues: o }) => {
      try {
        r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        r.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Uf(r, o, { enableHardwareAcceleration: !1 }, Hf(t.tagName), e.transformTemplate), Iy(t, r);
    }
  })
}, sS = {
  useVisualState: By({
    scrapeMotionValuesFromProps: qf,
    createRenderState: $f
  })
};
function aS(e, { forwardMotionProps: t = !1 }, r, o) {
  return {
    ...Bf(e) ? oS : sS,
    preloadedFeatures: r,
    useRender: eS(t),
    createVisualElement: o,
    Component: e
  };
}
function Zn(e, t, r, o = { passive: !0 }) {
  return e.addEventListener(t, r, o), () => e.removeEventListener(t, r);
}
const zy = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function El(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const lS = (e) => (t) => zy(t) && e(t, El(t));
function Jn(e, t, r, o) {
  return Zn(e, t, lS(r), o);
}
const uS = (e, t) => (r) => t(e(r)), Rr = (...e) => e.reduce(uS);
function $y(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const km = $y("dragHorizontal"), Tm = $y("dragVertical");
function Uy(e) {
  let t = !1;
  if (e === "y")
    t = Tm();
  else if (e === "x")
    t = km();
  else {
    const r = km(), o = Tm();
    r && o ? t = () => {
      r(), o();
    } : (r && r(), o && o());
  }
  return t;
}
function Hy() {
  const e = Uy(!0);
  return e ? (e(), !1) : !0;
}
class Dr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function cS(e) {
  let t = [], r = [], o = 0, a = !1, c = !1;
  const f = /* @__PURE__ */ new WeakSet(), m = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (y, g = !1, x = !1) => {
      const u = x && a, h = u ? t : r;
      return g && f.add(y), h.indexOf(y) === -1 && (h.push(y), u && a && (o = t.length)), y;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (y) => {
      const g = r.indexOf(y);
      g !== -1 && r.splice(g, 1), f.delete(y);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (y) => {
      if (a) {
        c = !0;
        return;
      }
      if (a = !0, [t, r] = [r, t], r.length = 0, o = t.length, o)
        for (let g = 0; g < o; g++) {
          const x = t[g];
          x(y), f.has(x) && (m.schedule(x), e());
        }
      a = !1, c && (c = !1, m.process(y));
    }
  };
  return m;
}
const Ze = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, fS = 40;
let lf = !0, os = !1;
const Al = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], ji = Al.reduce((e, t) => (e[t] = cS(() => os = !0), e), {}), dS = (e) => ji[e].process(Ze), Wy = (e) => {
  os = !1, Ze.delta = lf ? 1e3 / 60 : Math.max(Math.min(e - Ze.timestamp, fS), 1), Ze.timestamp = e, Ze.isProcessing = !0, Al.forEach(dS), Ze.isProcessing = !1, os && (lf = !1, requestAnimationFrame(Wy));
}, hS = () => {
  os = !0, lf = !0, Ze.isProcessing || requestAnimationFrame(Wy);
}, Ke = Al.reduce((e, t) => {
  const r = ji[t];
  return e[t] = (o, a = !1, c = !1) => (os || hS(), r.schedule(o, a, c)), e;
}, {});
function nr(e) {
  Al.forEach((t) => ji[t].cancel(e));
}
function Cm(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), o = "onHover" + (t ? "Start" : "End"), a = (c, f) => {
    if (c.type === "touch" || Hy())
      return;
    const m = e.getProps();
    e.animationState && m.whileHover && e.animationState.setActive("whileHover", t), m[o] && Ke.update(() => m[o](c, f));
  };
  return Jn(e.current, r, a, {
    passive: !e.getProps()[o]
  });
}
class pS extends Dr {
  mount() {
    this.unmount = Rr(Cm(this.node, !0), Cm(this.node, !1));
  }
  unmount() {
  }
}
class mS extends Dr {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Rr(Zn(this.node.current, "focus", () => this.onFocus()), Zn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const qy = (e, t) => t ? e === t ? !0 : qy(e, t.parentElement) : !1, dt = (e) => e;
function Ec(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, El(r));
}
class gS extends Dr {
  constructor() {
    super(...arguments), this.removeStartListeners = dt, this.removeEndListeners = dt, this.removeAccessibleListeners = dt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const o = this.node.getProps(), c = Jn(window, "pointerup", (m, y) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: g, onTapCancel: x } = this.node.getProps();
        Ke.update(() => {
          qy(this.node.current, m.target) ? g && g(m, y) : x && x(m, y);
        });
      }, { passive: !(o.onTap || o.onPointerUp) }), f = Jn(window, "pointercancel", (m, y) => this.cancelPress(m, y), { passive: !(o.onTapCancel || o.onPointerCancel) });
      this.removeEndListeners = Rr(c, f), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const f = (m) => {
          m.key !== "Enter" || !this.checkPressEnd() || Ec("up", (y, g) => {
            const { onTap: x } = this.node.getProps();
            x && Ke.update(() => x(y, g));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Zn(this.node.current, "keyup", f), Ec("down", (m, y) => {
          this.startPress(m, y);
        });
      }, r = Zn(this.node.current, "keydown", t), o = () => {
        this.isPressing && Ec("cancel", (c, f) => this.cancelPress(c, f));
      }, a = Zn(this.node.current, "blur", o);
      this.removeAccessibleListeners = Rr(r, a);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: a } = this.node.getProps();
    a && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && Ke.update(() => o(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Hy();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && Ke.update(() => o(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Jn(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), o = Zn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Rr(r, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const uf = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), yS = (e) => {
  const t = uf.get(e.target);
  t && t(e);
}, vS = (e) => {
  e.forEach(yS);
};
function xS({ root: e, ...t }) {
  const r = e || document;
  Ac.has(r) || Ac.set(r, {});
  const o = Ac.get(r), a = JSON.stringify(t);
  return o[a] || (o[a] = new IntersectionObserver(vS, { root: e, ...t })), o[a];
}
function wS(e, t, r) {
  const o = xS(t);
  return uf.set(e, r), o.observe(e), () => {
    uf.delete(e), o.unobserve(e);
  };
}
const _S = {
  some: 0,
  all: 1
};
class SS extends Dr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: o, amount: a = "some", once: c } = t, f = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof a == "number" ? a : _S[a]
    }, m = (y) => {
      const { isIntersecting: g } = y;
      if (this.isInView === g || (this.isInView = g, c && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: x, onViewportLeave: u } = this.node.getProps(), h = g ? x : u;
      h && h(y);
    };
    return wS(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(kS(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function kS({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const TS = {
  inView: {
    Feature: SS
  },
  tap: {
    Feature: gS
  },
  focus: {
    Feature: mS
  },
  hover: {
    Feature: pS
  }
};
function Gy(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let o = 0; o < r; o++)
    if (t[o] !== e[o])
      return !1;
  return !0;
}
function CS(e) {
  const t = {};
  return e.values.forEach((r, o) => t[o] = r.get()), t;
}
function ES(e) {
  const t = {};
  return e.values.forEach((r, o) => t[o] = r.getVelocity()), t;
}
function bl(e, t, r) {
  const o = e.getProps();
  return Gf(o, t, r !== void 0 ? r : o.custom, CS(e), ES(e));
}
const AS = "framerAppearId", bS = "data-" + Wf(AS);
let PS = dt, Kf = dt;
const Or = (e) => e * 1e3, er = (e) => e / 1e3, RS = {
  current: !1
}, Ky = (e) => Array.isArray(e) && typeof e[0] == "number";
function Yy(e) {
  return !!(!e || typeof e == "string" && Qy[e] || Ky(e) || Array.isArray(e) && e.every(Yy));
}
const Wo = ([e, t, r, o]) => `cubic-bezier(${e}, ${t}, ${r}, ${o})`, Qy = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Wo([0, 0.65, 0.55, 1]),
  circOut: Wo([0.55, 0, 1, 0.45]),
  backIn: Wo([0.31, 0.01, 0.66, -0.59]),
  backOut: Wo([0.33, 1.53, 0.69, 0.99])
};
function Xy(e) {
  if (e)
    return Ky(e) ? Wo(e) : Array.isArray(e) ? e.map(Xy) : Qy[e];
}
function OS(e, t, r, { delay: o = 0, duration: a, repeat: c = 0, repeatType: f = "loop", ease: m, times: y } = {}) {
  const g = { [t]: r };
  y && (g.offset = y);
  const x = Xy(m);
  return Array.isArray(x) && (g.easing = x), e.animate(g, {
    delay: o,
    duration: a,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  });
}
const Em = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, bc = {}, Zy = {};
for (const e in Em)
  Zy[e] = () => (bc[e] === void 0 && (bc[e] = Em[e]()), bc[e]);
function LS(e, { repeat: t, repeatType: r = "loop" }) {
  const o = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[o];
}
const Jy = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, MS = 1e-7, DS = 12;
function NS(e, t, r, o, a) {
  let c, f, m = 0;
  do
    f = t + (r - t) / 2, c = Jy(f, o, a) - e, c > 0 ? r = f : t = f;
  while (Math.abs(c) > MS && ++m < DS);
  return f;
}
function ds(e, t, r, o) {
  if (e === t && r === o)
    return dt;
  const a = (c) => NS(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : Jy(a(c), t, o);
}
const FS = ds(0.42, 0, 1, 1), IS = ds(0, 0, 0.58, 1), e0 = ds(0.42, 0, 0.58, 1), jS = (e) => Array.isArray(e) && typeof e[0] != "number", t0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, n0 = (e) => (t) => 1 - e(1 - t), r0 = (e) => 1 - Math.sin(Math.acos(e)), Yf = n0(r0), VS = t0(Yf), i0 = ds(0.33, 1.53, 0.69, 0.99), Qf = n0(i0), BS = t0(Qf), zS = (e) => (e *= 2) < 1 ? 0.5 * Qf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), $S = {
  linear: dt,
  easeIn: FS,
  easeInOut: e0,
  easeOut: IS,
  circIn: r0,
  circInOut: VS,
  circOut: Yf,
  backIn: Qf,
  backInOut: BS,
  backOut: i0,
  anticipate: zS
}, Am = (e) => {
  if (Array.isArray(e)) {
    Kf(e.length === 4);
    const [t, r, o, a] = e;
    return ds(t, r, o, a);
  } else if (typeof e == "string")
    return $S[e];
  return e;
}, Xf = (e, t) => (r) => !!(cs(r) && B_.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), o0 = (e, t, r) => (o) => {
  if (!cs(o))
    return o;
  const [a, c, f, m] = o.match(Cl);
  return {
    [e]: parseFloat(a),
    [t]: parseFloat(c),
    [r]: parseFloat(f),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, US = (e) => Lr(0, 255, e), Pc = {
  ...ei,
  transform: (e) => Math.round(US(e))
}, Zr = {
  test: Xf("rgb", "red"),
  parse: o0("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: o = 1 }) => "rgba(" + Pc.transform(e) + ", " + Pc.transform(t) + ", " + Pc.transform(r) + ", " + Yo(Ko.transform(o)) + ")"
};
function HS(e) {
  let t = "", r = "", o = "", a = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), o = e.substring(5, 7), a = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), o = e.substring(3, 4), a = e.substring(4, 5), t += t, r += r, o += o, a += a), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const cf = {
  test: Xf("#"),
  parse: HS,
  transform: Zr.transform
}, Mi = {
  test: Xf("hsl", "hue"),
  parse: o0("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + Dn.transform(Yo(t)) + ", " + Dn.transform(Yo(r)) + ", " + Yo(Ko.transform(o)) + ")"
}, Mt = {
  test: (e) => Zr.test(e) || cf.test(e) || Mi.test(e),
  parse: (e) => Zr.test(e) ? Zr.parse(e) : Mi.test(e) ? Mi.parse(e) : cf.parse(e),
  transform: (e) => cs(e) ? e : e.hasOwnProperty("red") ? Zr.transform(e) : Mi.transform(e)
}, Je = (e, t, r) => -r * e + r * t + e;
function Rc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function WS({ hue: e, saturation: t, lightness: r, alpha: o }) {
  e /= 360, t /= 100, r /= 100;
  let a = 0, c = 0, f = 0;
  if (!t)
    a = c = f = r;
  else {
    const m = r < 0.5 ? r * (1 + t) : r + t - r * t, y = 2 * r - m;
    a = Rc(y, m, e + 1 / 3), c = Rc(y, m, e), f = Rc(y, m, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
const Oc = (e, t, r) => {
  const o = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - o) + o));
}, qS = [cf, Zr, Mi], GS = (e) => qS.find((t) => t.test(e));
function bm(e) {
  const t = GS(e);
  let r = t.parse(e);
  return t === Mi && (r = WS(r)), r;
}
const s0 = (e, t) => {
  const r = bm(e), o = bm(t), a = { ...r };
  return (c) => (a.red = Oc(r.red, o.red, c), a.green = Oc(r.green, o.green, c), a.blue = Oc(r.blue, o.blue, c), a.alpha = Je(r.alpha, o.alpha, c), Zr.transform(a));
};
function KS(e) {
  var t, r;
  return isNaN(e) && cs(e) && (((t = e.match(Cl)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Ry)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const a0 = {
  regex: j_,
  countKey: "Vars",
  token: "${v}",
  parse: dt
}, l0 = {
  regex: Ry,
  countKey: "Colors",
  token: "${c}",
  parse: Mt.parse
}, u0 = {
  regex: Cl,
  countKey: "Numbers",
  token: "${n}",
  parse: ei.parse
};
function Lc(e, { regex: t, countKey: r, token: o, parse: a }) {
  const c = e.tokenised.match(t);
  c && (e["num" + r] = c.length, e.tokenised = e.tokenised.replace(t, o), e.values.push(...c.map(a)));
}
function nl(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Lc(r, a0), Lc(r, l0), Lc(r, u0), r;
}
function c0(e) {
  return nl(e).values;
}
function f0(e) {
  const { values: t, numColors: r, numVars: o, tokenised: a } = nl(e), c = t.length;
  return (f) => {
    let m = a;
    for (let y = 0; y < c; y++)
      y < o ? m = m.replace(a0.token, f[y]) : y < o + r ? m = m.replace(l0.token, Mt.transform(f[y])) : m = m.replace(u0.token, Yo(f[y]));
    return m;
  };
}
const YS = (e) => typeof e == "number" ? 0 : e;
function QS(e) {
  const t = c0(e);
  return f0(e)(t.map(YS));
}
const Mr = {
  test: KS,
  parse: c0,
  createTransformer: f0,
  getAnimatableNone: QS
}, d0 = (e, t) => (r) => `${r > 0 ? t : e}`;
function h0(e, t) {
  return typeof e == "number" ? (r) => Je(e, t, r) : Mt.test(e) ? s0(e, t) : e.startsWith("var(") ? d0(e, t) : m0(e, t);
}
const p0 = (e, t) => {
  const r = [...e], o = r.length, a = e.map((c, f) => h0(c, t[f]));
  return (c) => {
    for (let f = 0; f < o; f++)
      r[f] = a[f](c);
    return r;
  };
}, XS = (e, t) => {
  const r = { ...e, ...t }, o = {};
  for (const a in r)
    e[a] !== void 0 && t[a] !== void 0 && (o[a] = h0(e[a], t[a]));
  return (a) => {
    for (const c in o)
      r[c] = o[c](a);
    return r;
  };
}, m0 = (e, t) => {
  const r = Mr.createTransformer(t), o = nl(e), a = nl(t);
  return o.numVars === a.numVars && o.numColors === a.numColors && o.numNumbers >= a.numNumbers ? Rr(p0(o.values, a.values), r) : d0(e, t);
}, ss = (e, t, r) => {
  const o = t - e;
  return o === 0 ? 1 : (r - e) / o;
}, Pm = (e, t) => (r) => Je(e, t, r);
function ZS(e) {
  return typeof e == "number" ? Pm : typeof e == "string" ? Mt.test(e) ? s0 : m0 : Array.isArray(e) ? p0 : typeof e == "object" ? XS : Pm;
}
function JS(e, t, r) {
  const o = [], a = r || ZS(e[0]), c = e.length - 1;
  for (let f = 0; f < c; f++) {
    let m = a(e[f], e[f + 1]);
    if (t) {
      const y = Array.isArray(t) ? t[f] || dt : t;
      m = Rr(y, m);
    }
    o.push(m);
  }
  return o;
}
function g0(e, t, { clamp: r = !0, ease: o, mixer: a } = {}) {
  const c = e.length;
  if (Kf(c === t.length), c === 1)
    return () => t[0];
  e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const f = JS(t, o, a), m = f.length, y = (g) => {
    let x = 0;
    if (m > 1)
      for (; x < e.length - 2 && !(g < e[x + 1]); x++)
        ;
    const u = ss(e[x], e[x + 1], g);
    return f[x](u);
  };
  return r ? (g) => y(Lr(e[0], e[c - 1], g)) : y;
}
function ek(e, t) {
  const r = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const a = ss(0, t, o);
    e.push(Je(r, 1, a));
  }
}
function tk(e) {
  const t = [0];
  return ek(t, e.length - 1), t;
}
function nk(e, t) {
  return e.map((r) => r * t);
}
function rk(e, t) {
  return e.map(() => t || e0).splice(0, e.length - 1);
}
function rl({ duration: e = 300, keyframes: t, times: r, ease: o = "easeInOut" }) {
  const a = jS(o) ? o.map(Am) : Am(o), c = {
    done: !1,
    value: t[0]
  }, f = nk(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : tk(t),
    e
  ), m = g0(f, t, {
    ease: Array.isArray(a) ? a : rk(t, a)
  });
  return {
    calculatedDuration: e,
    next: (y) => (c.value = m(y), c.done = y >= e, c)
  };
}
function y0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ik = 5;
function v0(e, t, r) {
  const o = Math.max(t - ik, 0);
  return y0(r - e(o), t - o);
}
const Mc = 1e-3, ok = 0.01, Rm = 10, sk = 0.05, ak = 1;
function lk({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: o = 1 }) {
  let a, c;
  PS(e <= Or(Rm));
  let f = 1 - t;
  f = Lr(sk, ak, f), e = Lr(ok, Rm, er(e)), f < 1 ? (a = (g) => {
    const x = g * f, u = x * e, h = x - r, v = ff(g, f), w = Math.exp(-u);
    return Mc - h / v * w;
  }, c = (g) => {
    const u = g * f * e, h = u * r + r, v = Math.pow(f, 2) * Math.pow(g, 2) * e, w = Math.exp(-u), S = ff(Math.pow(g, 2), f);
    return (-a(g) + Mc > 0 ? -1 : 1) * ((h - v) * w) / S;
  }) : (a = (g) => {
    const x = Math.exp(-g * e), u = (g - r) * e + 1;
    return -Mc + x * u;
  }, c = (g) => {
    const x = Math.exp(-g * e), u = (r - g) * (e * e);
    return x * u;
  });
  const m = 5 / e, y = ck(a, c, m);
  if (e = Or(e), isNaN(y))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const g = Math.pow(y, 2) * o;
    return {
      stiffness: g,
      damping: f * 2 * Math.sqrt(o * g),
      duration: e
    };
  }
}
const uk = 12;
function ck(e, t, r) {
  let o = r;
  for (let a = 1; a < uk; a++)
    o = o - e(o) / t(o);
  return o;
}
function ff(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const fk = ["duration", "bounce"], dk = ["stiffness", "damping", "mass"];
function Om(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function hk(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Om(e, dk) && Om(e, fk)) {
    const r = lk(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function x0({ keyframes: e, restDelta: t, restSpeed: r, ...o }) {
  const a = e[0], c = e[e.length - 1], f = { done: !1, value: a }, { stiffness: m, damping: y, mass: g, velocity: x, duration: u, isResolvedFromDuration: h } = hk(o), v = x ? -er(x) : 0, w = y / (2 * Math.sqrt(m * g)), S = c - a, k = er(Math.sqrt(m / g)), T = Math.abs(S) < 5;
  r || (r = T ? 0.01 : 2), t || (t = T ? 5e-3 : 0.5);
  let A;
  if (w < 1) {
    const O = ff(k, w);
    A = (V) => {
      const $ = Math.exp(-w * k * V);
      return c - $ * ((v + w * k * S) / O * Math.sin(O * V) + S * Math.cos(O * V));
    };
  } else if (w === 1)
    A = (O) => c - Math.exp(-k * O) * (S + (v + k * S) * O);
  else {
    const O = k * Math.sqrt(w * w - 1);
    A = (V) => {
      const $ = Math.exp(-w * k * V), X = Math.min(O * V, 300);
      return c - $ * ((v + w * k * S) * Math.sinh(X) + O * S * Math.cosh(X)) / O;
    };
  }
  return {
    calculatedDuration: h && u || null,
    next: (O) => {
      const V = A(O);
      if (h)
        f.done = O >= u;
      else {
        let $ = v;
        O !== 0 && (w < 1 ? $ = v0(A, O, V) : $ = 0);
        const X = Math.abs($) <= r, K = Math.abs(c - V) <= t;
        f.done = X && K;
      }
      return f.value = f.done ? c : V, f;
    }
  };
}
function Lm({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: a = 10, bounceStiffness: c = 500, modifyTarget: f, min: m, max: y, restDelta: g = 0.5, restSpeed: x }) {
  const u = e[0], h = {
    done: !1,
    value: u
  }, v = (te) => m !== void 0 && te < m || y !== void 0 && te > y, w = (te) => m === void 0 ? y : y === void 0 || Math.abs(m - te) < Math.abs(y - te) ? m : y;
  let S = r * t;
  const k = u + S, T = f === void 0 ? k : f(k);
  T !== k && (S = T - u);
  const A = (te) => -S * Math.exp(-te / o), O = (te) => T + A(te), V = (te) => {
    const J = A(te), Ce = O(te);
    h.done = Math.abs(J) <= g, h.value = h.done ? T : Ce;
  };
  let $, X;
  const K = (te) => {
    v(h.value) && ($ = te, X = x0({
      keyframes: [h.value, w(h.value)],
      velocity: v0(O, te, h.value),
      damping: a,
      stiffness: c,
      restDelta: g,
      restSpeed: x
    }));
  };
  return K(0), {
    calculatedDuration: null,
    next: (te) => {
      let J = !1;
      return !X && $ === void 0 && (J = !0, V(te), K(te)), $ !== void 0 && te > $ ? X.next(te - $) : (!J && V(te), h);
    }
  };
}
const pk = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => Ke.update(t, !0),
    stop: () => nr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ze.isProcessing ? Ze.timestamp : performance.now()
  };
}, Mm = 2e4;
function Dm(e) {
  let t = 0;
  const r = 50;
  let o = e.next(t);
  for (; !o.done && t < Mm; )
    t += r, o = e.next(t);
  return t >= Mm ? 1 / 0 : t;
}
const mk = {
  decay: Lm,
  inertia: Lm,
  tween: rl,
  keyframes: rl,
  spring: x0
};
function il({ autoplay: e = !0, delay: t = 0, driver: r = pk, keyframes: o, type: a = "keyframes", repeat: c = 0, repeatDelay: f = 0, repeatType: m = "loop", onPlay: y, onStop: g, onComplete: x, onUpdate: u, ...h }) {
  let v = 1, w = !1, S, k;
  const T = () => {
    S && S(), k = new Promise((I) => {
      S = I;
    });
  };
  T();
  let A;
  const O = mk[a] || rl;
  let V;
  O !== rl && typeof o[0] != "number" && (V = g0([0, 100], o, {
    clamp: !1
  }), o = [0, 100]);
  const $ = O({ ...h, keyframes: o });
  let X;
  m === "mirror" && (X = O({
    ...h,
    keyframes: [...o].reverse(),
    velocity: -(h.velocity || 0)
  }));
  let K = "idle", te = null, J = null, Ce = null;
  $.calculatedDuration === null && c && ($.calculatedDuration = Dm($));
  const { calculatedDuration: Le } = $;
  let he = 1 / 0, le = 1 / 0;
  Le !== null && (he = Le + f, le = he * (c + 1) - f);
  let ae = 0;
  const ge = (I) => {
    if (J === null)
      return;
    v > 0 && (J = Math.min(J, I)), te !== null ? ae = te : ae = (I - J) * v;
    const ne = ae - t, ke = ne < 0;
    ae = Math.max(ne, 0), K === "finished" && te === null && (ae = le);
    let ve = ae, Oe = $;
    if (c) {
      const Ye = ae / he;
      let xn = Math.floor(Ye), ut = Ye % 1;
      !ut && Ye >= 1 && (ut = 1), ut === 1 && xn--, xn = Math.min(xn, c + 1);
      const wn = !!(xn % 2);
      wn && (m === "reverse" ? (ut = 1 - ut, f && (ut -= f / he)) : m === "mirror" && (Oe = X));
      let _n = Lr(0, 1, ut);
      ae > le && (_n = m === "reverse" && wn ? 1 : 0), ve = _n * he;
    }
    const _e = ke ? { done: !1, value: o[0] } : Oe.next(ve);
    V && (_e.value = V(_e.value));
    let { done: Pe } = _e;
    !ke && Le !== null && (Pe = ae >= le);
    const Ae = te === null && (K === "finished" || K === "running" && Pe || v < 0 && ae <= 0);
    return u && u(_e.value), Ae && Q(), _e;
  }, Ee = () => {
    A && A.stop(), A = void 0;
  }, Se = () => {
    K = "idle", Ee(), T(), J = Ce = null;
  }, Q = () => {
    K = "finished", x && x(), Ee(), T();
  }, ue = () => {
    if (w)
      return;
    A || (A = r(ge));
    const I = A.now();
    y && y(), te !== null ? J = I - te : (!J || K === "finished") && (J = I), Ce = J, te = null, K = "running", A.start();
  };
  e && ue();
  const b = {
    then(I, ne) {
      return k.then(I, ne);
    },
    get time() {
      return er(ae);
    },
    set time(I) {
      I = Or(I), ae = I, te !== null || !A || v === 0 ? te = I : J = A.now() - I / v;
    },
    get duration() {
      const I = $.calculatedDuration === null ? Dm($) : $.calculatedDuration;
      return er(I);
    },
    get speed() {
      return v;
    },
    set speed(I) {
      I === v || !A || (v = I, b.time = er(ae));
    },
    get state() {
      return K;
    },
    play: ue,
    pause: () => {
      K = "paused", te = ae;
    },
    stop: () => {
      w = !0, K !== "idle" && (K = "idle", g && g(), Se());
    },
    cancel: () => {
      Ce !== null && ge(Ce), Se();
    },
    complete: () => {
      K = "finished";
    },
    sample: (I) => (J = 0, ge(I))
  };
  return b;
}
const gk = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Pa = 10, yk = 2e4, vk = (e, t) => t.type === "spring" || e === "backgroundColor" || !Yy(t.ease);
function xk(e, t, { onUpdate: r, onComplete: o, ...a }) {
  if (!(Zy.waapi() && gk.has(t) && !a.repeatDelay && a.repeatType !== "mirror" && a.damping !== 0 && a.type !== "inertia"))
    return !1;
  let f = !1, m, y;
  const g = () => {
    y = new Promise((T) => {
      m = T;
    });
  };
  g();
  let { keyframes: x, duration: u = 300, ease: h, times: v } = a;
  if (vk(t, a)) {
    const T = il({
      ...a,
      repeat: 0,
      delay: 0
    });
    let A = { done: !1, value: x[0] };
    const O = [];
    let V = 0;
    for (; !A.done && V < yk; )
      A = T.sample(V), O.push(A.value), V += Pa;
    v = void 0, x = O, u = V - Pa, h = "linear";
  }
  const w = OS(e.owner.current, t, x, {
    ...a,
    duration: u,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: h,
    times: v
  }), S = () => w.cancel(), k = () => {
    Ke.update(S), m(), g();
  };
  return w.onfinish = () => {
    e.set(LS(x, a)), o && o(), k();
  }, {
    then(T, A) {
      return y.then(T, A);
    },
    get time() {
      return er(w.currentTime || 0);
    },
    set time(T) {
      w.currentTime = Or(T);
    },
    get speed() {
      return w.playbackRate;
    },
    set speed(T) {
      w.playbackRate = T;
    },
    get duration() {
      return er(u);
    },
    play: () => {
      f || (w.play(), nr(S));
    },
    pause: () => w.pause(),
    stop: () => {
      if (f = !0, w.playState === "idle")
        return;
      const { currentTime: T } = w;
      if (T) {
        const A = il({
          ...a,
          autoplay: !1
        });
        e.setWithVelocity(A.sample(T - Pa).value, A.sample(T).value, Pa);
      }
      k();
    },
    complete: () => w.finish(),
    cancel: k
  };
}
function wk({ keyframes: e, delay: t, onUpdate: r, onComplete: o }) {
  const a = () => (r && r(e[e.length - 1]), o && o(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: dt,
    pause: dt,
    stop: dt,
    then: (c) => (c(), Promise.resolve()),
    cancel: dt,
    complete: dt
  });
  return t ? il({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: a
  }) : a();
}
const _k = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Sk = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), kk = {
  type: "keyframes",
  duration: 0.8
}, Tk = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ck = (e, { keyframes: t }) => t.length > 2 ? kk : Jr.has(e) ? e.startsWith("scale") ? Sk(t[1]) : _k : Tk, df = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Mr.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Ek = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ak(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = r.match(Cl) || [];
  if (!o)
    return e;
  const a = r.replace(o, "");
  let c = Ek.has(t) ? 1 : 0;
  return o !== r && (c *= 100), t + "(" + c + a + ")";
}
const bk = /([a-z-]*)\(.*?\)/g, hf = {
  ...Mr,
  getAnimatableNone: (e) => {
    const t = e.match(bk);
    return t ? t.map(Ak).join(" ") : e;
  }
}, Pk = {
  ...Oy,
  // Color props
  color: Mt,
  backgroundColor: Mt,
  outlineColor: Mt,
  fill: Mt,
  stroke: Mt,
  // Border props
  borderColor: Mt,
  borderTopColor: Mt,
  borderRightColor: Mt,
  borderBottomColor: Mt,
  borderLeftColor: Mt,
  filter: hf,
  WebkitFilter: hf
}, Zf = (e) => Pk[e];
function w0(e, t) {
  let r = Zf(e);
  return r !== hf && (r = Mr), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const _0 = (e) => /^0[^.\s]+$/.test(e);
function Rk(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || _0(e);
}
function Ok(e, t, r, o) {
  const a = df(t, r);
  let c;
  Array.isArray(r) ? c = [...r] : c = [null, r];
  const f = o.from !== void 0 ? o.from : e.get();
  let m;
  const y = [];
  for (let g = 0; g < c.length; g++)
    c[g] === null && (c[g] = g === 0 ? f : c[g - 1]), Rk(c[g]) && y.push(g), typeof c[g] == "string" && c[g] !== "none" && c[g] !== "0" && (m = c[g]);
  if (a && y.length && m)
    for (let g = 0; g < y.length; g++) {
      const x = y[g];
      c[x] = w0(t, m);
    }
  return c;
}
function Lk({ when: e, delay: t, delayChildren: r, staggerChildren: o, staggerDirection: a, repeat: c, repeatType: f, repeatDelay: m, from: y, elapsed: g, ...x }) {
  return !!Object.keys(x).length;
}
function S0(e, t) {
  return e[t] || e.default || e;
}
const Jf = (e, t, r, o = {}) => (a) => {
  const c = S0(o, e) || {}, f = c.delay || o.delay || 0;
  let { elapsed: m = 0 } = o;
  m = m - Or(f);
  const y = Ok(t, e, r, c), g = y[0], x = y[y.length - 1], u = df(e, g), h = df(e, x);
  let v = {
    keyframes: y,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...c,
    delay: -m,
    onUpdate: (w) => {
      t.set(w), c.onUpdate && c.onUpdate(w);
    },
    onComplete: () => {
      a(), c.onComplete && c.onComplete();
    }
  };
  if (Lk(c) || (v = {
    ...v,
    ...Ck(e, v)
  }), v.duration && (v.duration = Or(v.duration)), v.repeatDelay && (v.repeatDelay = Or(v.repeatDelay)), !u || !h || RS.current || c.type === !1)
    return wk(v);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const w = xk(t, e, v);
    if (w)
      return w;
  }
  return il(v);
};
function ol(e) {
  return !!(Ht(e) && e.add);
}
const Mk = (e) => /^\-?\d*\.?\d+$/.test(e);
function ed(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function td(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class nd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ed(this.subscriptions, t), () => td(this.subscriptions, t);
  }
  notify(t, r, o) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1)
        this.subscriptions[0](t, r, o);
      else
        for (let c = 0; c < a; c++) {
          const f = this.subscriptions[c];
          f && f(t, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Dk = (e) => !isNaN(parseFloat(e));
class Nk {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.12.16", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (o, a = !0) => {
      this.prev = this.current, this.current = o;
      const { delta: c, timestamp: f } = Ze;
      this.lastUpdated !== f && (this.timeDelta = c, this.lastUpdated = f, Ke.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), a && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Ke.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: o }) => {
      o !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Dk(this.current), this.owner = r.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new nd());
    const o = this.events[t].add(r);
    return t === "change" ? () => {
      o(), Ke.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, o) {
    this.set(r), this.prev = t, this.timeDelta = o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      y0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function $i(e, t) {
  return new Nk(e, t);
}
const k0 = (e) => (t) => t.test(e), Fk = {
  test: (e) => e === "auto",
  parse: (e) => e
}, T0 = [ei, ye, Dn, Cr, $_, z_, Fk], Vo = (e) => T0.find(k0(e)), Ik = [...T0, Mt, Mr], jk = (e) => Ik.find(k0(e));
function Vk(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, $i(r));
}
function Bk(e, t) {
  const r = bl(e, t);
  let { transitionEnd: o = {}, transition: a = {}, ...c } = r ? e.makeTargetAnimatable(r, !1) : {};
  c = { ...c, ...o };
  for (const f in c) {
    const m = nS(c[f]);
    Vk(e, f, m);
  }
}
function zk(e, t, r) {
  var o, a;
  const c = Object.keys(t).filter((m) => !e.hasValue(m)), f = c.length;
  if (f)
    for (let m = 0; m < f; m++) {
      const y = c[m], g = t[y];
      let x = null;
      Array.isArray(g) && (x = g[0]), x === null && (x = (a = (o = r[y]) !== null && o !== void 0 ? o : e.readValue(y)) !== null && a !== void 0 ? a : t[y]), x != null && (typeof x == "string" && (Mk(x) || _0(x)) ? x = parseFloat(x) : !jk(x) && Mr.test(g) && (x = w0(y, g)), e.addValue(y, $i(x, { owner: e })), r[y] === void 0 && (r[y] = x), x !== null && e.setBaseTarget(y, x));
    }
}
function $k(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Uk(e, t, r) {
  const o = {};
  for (const a in e) {
    const c = $k(a, t);
    if (c !== void 0)
      o[a] = c;
    else {
      const f = r.getValue(a);
      f && (o[a] = f.get());
    }
  }
  return o;
}
function Hk({ protectedKeys: e, needsAnimating: t }, r) {
  const o = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, o;
}
function C0(e, t, { delay: r = 0, transitionOverride: o, type: a } = {}) {
  let { transition: c = e.getDefaultTransition(), transitionEnd: f, ...m } = e.makeTargetAnimatable(t);
  const y = e.getValue("willChange");
  o && (c = o);
  const g = [], x = a && e.animationState && e.animationState.getState()[a];
  for (const u in m) {
    const h = e.getValue(u), v = m[u];
    if (!h || v === void 0 || x && Hk(x, u))
      continue;
    const w = { delay: r, elapsed: 0, ...c };
    if (window.HandoffAppearAnimations && !h.hasAnimated) {
      const k = e.getProps()[bS];
      k && (w.elapsed = window.HandoffAppearAnimations(k, u, h, Ke));
    }
    h.start(Jf(u, h, v, e.shouldReduceMotion && Jr.has(u) ? { type: !1 } : w));
    const S = h.animation;
    ol(y) && (y.add(u), S.then(() => y.remove(u))), g.push(S);
  }
  return f && Promise.all(g).then(() => {
    f && Bk(e, f);
  }), g;
}
function pf(e, t, r = {}) {
  const o = bl(e, t, r.custom);
  let { transition: a = e.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (a = r.transitionOverride);
  const c = o ? () => Promise.all(C0(e, o, r)) : () => Promise.resolve(), f = e.variantChildren && e.variantChildren.size ? (y = 0) => {
    const { delayChildren: g = 0, staggerChildren: x, staggerDirection: u } = a;
    return Wk(e, t, g + y, x, u, r);
  } : () => Promise.resolve(), { when: m } = a;
  if (m) {
    const [y, g] = m === "beforeChildren" ? [c, f] : [f, c];
    return y().then(() => g());
  } else
    return Promise.all([c(), f(r.delay)]);
}
function Wk(e, t, r = 0, o = 0, a = 1, c) {
  const f = [], m = (e.variantChildren.size - 1) * o, y = a === 1 ? (g = 0) => g * o : (g = 0) => m - g * o;
  return Array.from(e.variantChildren).sort(qk).forEach((g, x) => {
    g.notify("AnimationStart", t), f.push(pf(g, t, {
      ...c,
      delay: r + y(x)
    }).then(() => g.notify("AnimationComplete", t)));
  }), Promise.all(f);
}
function qk(e, t) {
  return e.sortNodePosition(t);
}
function Gk(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const a = t.map((c) => pf(e, c, r));
    o = Promise.all(a);
  } else if (typeof t == "string")
    o = pf(e, t, r);
  else {
    const a = typeof t == "function" ? bl(e, t, r.custom) : t;
    o = Promise.all(C0(e, a, r));
  }
  return o.then(() => e.notify("AnimationComplete", t));
}
const Kk = [...jf].reverse(), Yk = jf.length;
function Qk(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: o }) => Gk(e, r, o)));
}
function Xk(e) {
  let t = Qk(e);
  const r = Jk();
  let o = !0;
  const a = (y, g) => {
    const x = bl(e, g);
    if (x) {
      const { transition: u, transitionEnd: h, ...v } = x;
      y = { ...y, ...v, ...h };
    }
    return y;
  };
  function c(y) {
    t = y(e);
  }
  function f(y, g) {
    const x = e.getProps(), u = e.getVariantContext(!0) || {}, h = [], v = /* @__PURE__ */ new Set();
    let w = {}, S = 1 / 0;
    for (let T = 0; T < Yk; T++) {
      const A = Kk[T], O = r[A], V = x[A] !== void 0 ? x[A] : u[A], $ = ns(V), X = A === g ? O.isActive : null;
      X === !1 && (S = T);
      let K = V === u[A] && V !== x[A] && $;
      if (K && o && e.manuallyAnimateOnMount && (K = !1), O.protectedKeys = { ...w }, // If it isn't active and hasn't *just* been set as inactive
      !O.isActive && X === null || // If we didn't and don't have any defined prop for this animation type
      !V && !O.prevProp || // Or if the prop doesn't define an animation
      kl(V) || typeof V == "boolean")
        continue;
      const te = Zk(O.prevProp, V);
      let J = te || // If we're making this variant active, we want to always make it active
      A === g && O.isActive && !K && $ || // If we removed a higher-priority variant (i is in reverse order)
      T > S && $;
      const Ce = Array.isArray(V) ? V : [V];
      let Le = Ce.reduce(a, {});
      X === !1 && (Le = {});
      const { prevResolvedValues: he = {} } = O, le = {
        ...he,
        ...Le
      }, ae = (ge) => {
        J = !0, v.delete(ge), O.needsAnimating[ge] = !0;
      };
      for (const ge in le) {
        const Ee = Le[ge], Se = he[ge];
        w.hasOwnProperty(ge) || (Ee !== Se ? tl(Ee) && tl(Se) ? !Gy(Ee, Se) || te ? ae(ge) : O.protectedKeys[ge] = !0 : Ee !== void 0 ? ae(ge) : v.add(ge) : Ee !== void 0 && v.has(ge) ? ae(ge) : O.protectedKeys[ge] = !0);
      }
      O.prevProp = V, O.prevResolvedValues = Le, O.isActive && (w = { ...w, ...Le }), o && e.blockInitialAnimation && (J = !1), J && !K && h.push(...Ce.map((ge) => ({
        animation: ge,
        options: { type: A, ...y }
      })));
    }
    if (v.size) {
      const T = {};
      v.forEach((A) => {
        const O = e.getBaseTarget(A);
        O !== void 0 && (T[A] = O);
      }), h.push({ animation: T });
    }
    let k = !!h.length;
    return o && x.initial === !1 && !e.manuallyAnimateOnMount && (k = !1), o = !1, k ? t(h) : Promise.resolve();
  }
  function m(y, g, x) {
    var u;
    if (r[y].isActive === g)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((v) => {
      var w;
      return (w = v.animationState) === null || w === void 0 ? void 0 : w.setActive(y, g);
    }), r[y].isActive = g;
    const h = f(x, y);
    for (const v in r)
      r[v].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: f,
    setActive: m,
    setAnimateFunction: c,
    getState: () => r
  };
}
function Zk(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Gy(t, e) : !1;
}
function Yr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Jk() {
  return {
    animate: Yr(!0),
    whileInView: Yr(),
    whileHover: Yr(),
    whileTap: Yr(),
    whileDrag: Yr(),
    whileFocus: Yr(),
    exit: Yr()
  };
}
class eT extends Dr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Xk(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), kl(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let tT = 0;
class nT extends Dr {
  constructor() {
    super(...arguments), this.id = tT++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: o } = this.node.presenceContext, { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === a)
      return;
    const c = this.node.animationState.setActive("exit", !t, { custom: o ?? this.node.getProps().custom });
    r && !t && c.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const rT = {
  animation: {
    Feature: eT
  },
  exit: {
    Feature: nT
  }
}, Nm = (e, t) => Math.abs(e - t);
function iT(e, t) {
  const r = Nm(e.x, t.x), o = Nm(e.y, t.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class E0 {
  constructor(t, r, { transformPagePoint: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Nc(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, u = iT(g.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !u)
        return;
      const { point: h } = g, { timestamp: v } = Ze;
      this.history.push({ ...h, timestamp: v });
      const { onStart: w, onMove: S } = this.handlers;
      x || (w && w(this.lastMoveEvent, g), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, g);
    }, this.handlePointerMove = (g, x) => {
      this.lastMoveEvent = g, this.lastMoveEventInfo = Dc(x, this.transformPagePoint), Ke.update(this.updatePoint, !0);
    }, this.handlePointerUp = (g, x) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: u, onSessionEnd: h } = this.handlers, v = Nc(g.type === "pointercancel" ? this.lastMoveEventInfo : Dc(x, this.transformPagePoint), this.history);
      this.startEvent && u && u(g, v), h && h(g, v);
    }, !zy(t))
      return;
    this.handlers = r, this.transformPagePoint = o;
    const a = El(t), c = Dc(a, this.transformPagePoint), { point: f } = c, { timestamp: m } = Ze;
    this.history = [{ ...f, timestamp: m }];
    const { onSessionStart: y } = r;
    y && y(t, Nc(c, this.history)), this.removeListeners = Rr(Jn(window, "pointermove", this.handlePointerMove), Jn(window, "pointerup", this.handlePointerUp), Jn(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), nr(this.updatePoint);
  }
}
function Dc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Fm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Nc({ point: e }, t) {
  return {
    point: e,
    delta: Fm(e, A0(t)),
    offset: Fm(e, oT(t)),
    velocity: sT(t, 0.1)
  };
}
function oT(e) {
  return e[0];
}
function A0(e) {
  return e[e.length - 1];
}
function sT(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, o = null;
  const a = A0(e);
  for (; r >= 0 && (o = e[r], !(a.timestamp - o.timestamp > Or(t))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  const c = er(a.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (a.x - o.x) / c,
    y: (a.y - o.y) / c
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function Qt(e) {
  return e.max - e.min;
}
function mf(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Im(e, t, r, o = 0.5) {
  e.origin = o, e.originPoint = Je(t.min, t.max, e.origin), e.scale = Qt(r) / Qt(t), (mf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Je(r.min, r.max, e.origin) - e.originPoint, (mf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Qo(e, t, r, o) {
  Im(e.x, t.x, r.x, o ? o.originX : void 0), Im(e.y, t.y, r.y, o ? o.originY : void 0);
}
function jm(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Qt(t);
}
function aT(e, t, r) {
  jm(e.x, t.x, r.x), jm(e.y, t.y, r.y);
}
function Vm(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Qt(t);
}
function Xo(e, t, r) {
  Vm(e.x, t.x, r.x), Vm(e.y, t.y, r.y);
}
function lT(e, { min: t, max: r }, o) {
  return t !== void 0 && e < t ? e = o ? Je(t, e, o.min) : Math.max(e, t) : r !== void 0 && e > r && (e = o ? Je(r, e, o.max) : Math.min(e, r)), e;
}
function Bm(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function uT(e, { top: t, left: r, bottom: o, right: a }) {
  return {
    x: Bm(e.x, r, a),
    y: Bm(e.y, t, o)
  };
}
function zm(e, t) {
  let r = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
}
function cT(e, t) {
  return {
    x: zm(e.x, t.x),
    y: zm(e.y, t.y)
  };
}
function fT(e, t) {
  let r = 0.5;
  const o = Qt(e), a = Qt(t);
  return a > o ? r = ss(t.min, t.max - o, e.min) : o > a && (r = ss(e.min, e.max - a, t.min)), Lr(0, 1, r);
}
function dT(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const gf = 0.35;
function hT(e = gf) {
  return e === !1 ? e = 0 : e === !0 && (e = gf), {
    x: $m(e, "left", "right"),
    y: $m(e, "top", "bottom")
  };
}
function $m(e, t, r) {
  return {
    min: Um(e, t),
    max: Um(e, r)
  };
}
function Um(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Hm = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Di = () => ({
  x: Hm(),
  y: Hm()
}), Wm = () => ({ min: 0, max: 0 }), ot = () => ({
  x: Wm(),
  y: Wm()
});
function bn(e) {
  return [e("x"), e("y")];
}
function b0({ top: e, left: t, right: r, bottom: o }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: o }
  };
}
function pT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function mT(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), o = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: o.y,
    right: o.x
  };
}
function Fc(e) {
  return e === void 0 || e === 1;
}
function yf({ scale: e, scaleX: t, scaleY: r }) {
  return !Fc(e) || !Fc(t) || !Fc(r);
}
function Qr(e) {
  return yf(e) || P0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function P0(e) {
  return qm(e.x) || qm(e.y);
}
function qm(e) {
  return e && e !== "0%";
}
function sl(e, t, r) {
  const o = e - r, a = t * o;
  return r + a;
}
function Gm(e, t, r, o, a) {
  return a !== void 0 && (e = sl(e, a, o)), sl(e, r, o) + t;
}
function vf(e, t = 0, r = 1, o, a) {
  e.min = Gm(e.min, t, r, o, a), e.max = Gm(e.max, t, r, o, a);
}
function R0(e, { x: t, y: r }) {
  vf(e.x, t.translate, t.scale, t.originPoint), vf(e.y, r.translate, r.scale, r.originPoint);
}
function gT(e, t, r, o = !1) {
  const a = r.length;
  if (!a)
    return;
  t.x = t.y = 1;
  let c, f;
  for (let m = 0; m < a; m++) {
    c = r[m], f = c.projectionDelta;
    const y = c.instance;
    y && y.style && y.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && Ni(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), f && (t.x *= f.x.scale, t.y *= f.y.scale, R0(e, f)), o && Qr(c.latestValues) && Ni(e, c.latestValues));
  }
  t.x = Km(t.x), t.y = Km(t.y);
}
function Km(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Ar(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ym(e, t, [r, o, a]) {
  const c = t[a] !== void 0 ? t[a] : 0.5, f = Je(e.min, e.max, c);
  vf(e, t[r], t[o], f, t.scale);
}
const yT = ["x", "scaleX", "originX"], vT = ["y", "scaleY", "originY"];
function Ni(e, t) {
  Ym(e.x, t, yT), Ym(e.y, t, vT);
}
function O0(e, t) {
  return b0(mT(e.getBoundingClientRect(), t));
}
function xT(e, t, r) {
  const o = O0(e, r), { scroll: a } = t;
  return a && (Ar(o.x, a.offset.x), Ar(o.y, a.offset.y)), o;
}
const wT = /* @__PURE__ */ new WeakMap();
class _T {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ot(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const a = (y) => {
      this.stopAnimation(), r && this.snapToCursor(El(y, "page").point);
    }, c = (y, g) => {
      const { drag: x, dragPropagation: u, onDragStart: h } = this.getProps();
      if (x && !u && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Uy(x), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), bn((w) => {
        let S = this.getAxisMotionValue(w).get() || 0;
        if (Dn.test(S)) {
          const { projection: k } = this.visualElement;
          if (k && k.layout) {
            const T = k.layout.layoutBox[w];
            T && (S = Qt(T) * (parseFloat(S) / 100));
          }
        }
        this.originPoint[w] = S;
      }), h && Ke.update(() => h(y, g), !1, !0);
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, f = (y, g) => {
      const { dragPropagation: x, dragDirectionLock: u, onDirectionLock: h, onDrag: v } = this.getProps();
      if (!x && !this.openGlobalLock)
        return;
      const { offset: w } = g;
      if (u && this.currentDirection === null) {
        this.currentDirection = ST(w), this.currentDirection !== null && h && h(this.currentDirection);
        return;
      }
      this.updateAxis("x", g.point, w), this.updateAxis("y", g.point, w), this.visualElement.render(), v && v(y, g);
    }, m = (y, g) => this.stop(y, g);
    this.panSession = new E0(t, {
      onSessionStart: a,
      onStart: c,
      onMove: f,
      onSessionEnd: m
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, r) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: a } = r;
    this.startAnimation(a);
    const { onDragEnd: c } = this.getProps();
    c && Ke.update(() => c(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, o) {
    const { drag: a } = this.getProps();
    if (!o || !Ra(t, a, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(t);
    let f = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (f = lT(f, this.constraints[t], this.elastic[t])), c.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: o } = this.visualElement.projection || {}, a = this.constraints;
    t && Li(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && o ? this.constraints = uT(o.layoutBox, t) : this.constraints = !1, this.elastic = hT(r), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && bn((c) => {
      this.getAxisMotionValue(c) && (this.constraints[c] = dT(o.layoutBox[c], this.constraints[c]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Li(t))
      return !1;
    const o = t.current, { projection: a } = this.visualElement;
    if (!a || !a.layout)
      return !1;
    const c = xT(o, a.root, this.visualElement.getTransformPagePoint());
    let f = cT(a.layout.layoutBox, c);
    if (r) {
      const m = r(pT(f));
      this.hasMutatedConstraints = !!m, m && (f = b0(m));
    }
    return f;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: o, dragElastic: a, dragTransition: c, dragSnapToOrigin: f, onDragTransitionEnd: m } = this.getProps(), y = this.constraints || {}, g = bn((x) => {
      if (!Ra(x, r, this.currentDirection))
        return;
      let u = y && y[x] || {};
      f && (u = { min: 0, max: 0 });
      const h = a ? 200 : 1e6, v = a ? 40 : 1e7, w = {
        type: "inertia",
        velocity: o ? t[x] : 0,
        bounceStiffness: h,
        bounceDamping: v,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...u
      };
      return this.startAxisValueAnimation(x, w);
    });
    return Promise.all(g).then(m);
  }
  startAxisValueAnimation(t, r) {
    const o = this.getAxisMotionValue(t);
    return o.start(Jf(t, o, 0, r));
  }
  stopAnimation() {
    bn((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), o = this.visualElement.getProps(), a = o[r];
    return a || this.visualElement.getValue(t, (o.initial ? o.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    bn((r) => {
      const { drag: o } = this.getProps();
      if (!Ra(r, o, this.currentDirection))
        return;
      const { projection: a } = this.visualElement, c = this.getAxisMotionValue(r);
      if (a && a.layout) {
        const { min: f, max: m } = a.layout.layoutBox[r];
        c.set(t[r] - Je(f, m, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!Li(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    bn((f) => {
      const m = this.getAxisMotionValue(f);
      if (m) {
        const y = m.get();
        a[f] = fT({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), bn((f) => {
      if (!Ra(f, t, null))
        return;
      const m = this.getAxisMotionValue(f), { min: y, max: g } = this.constraints[f];
      m.set(Je(y, g, a[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    wT.set(this.visualElement, this);
    const t = this.visualElement.current, r = Jn(t, "pointerdown", (y) => {
      const { drag: g, dragListener: x = !0 } = this.getProps();
      g && x && this.start(y);
    }), o = () => {
      const { dragConstraints: y } = this.getProps();
      Li(y) && (this.constraints = this.resolveRefConstraints());
    }, { projection: a } = this.visualElement, c = a.addEventListener("measure", o);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), o();
    const f = Zn(window, "resize", () => this.scalePositionWithinConstraints()), m = a.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: g }) => {
      this.isDragging && g && (bn((x) => {
        const u = this.getAxisMotionValue(x);
        u && (this.originPoint[x] += y[x].translate, u.set(u.get() + y[x].translate));
      }), this.visualElement.render());
    });
    return () => {
      f(), r(), c(), m && m();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: a = !1, dragConstraints: c = !1, dragElastic: f = gf, dragMomentum: m = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: a,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: m
    };
  }
}
function Ra(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function ST(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class kT extends Dr {
  constructor(t) {
    super(t), this.removeGroupControls = dt, this.removeListeners = dt, this.controls = new _T(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || dt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qm = (e) => (t, r) => {
  e && Ke.update(() => e(t, r));
};
class TT extends Dr {
  constructor() {
    super(...arguments), this.removePointerDownListener = dt;
  }
  onPointerDown(t) {
    this.session = new E0(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: o, onPanEnd: a } = this.node.getProps();
    return {
      onSessionStart: Qm(t),
      onStart: Qm(r),
      onMove: o,
      onEnd: (c, f) => {
        delete this.session, a && Ke.update(() => a(c, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Jn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function CT() {
  const e = M.useContext(_l);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: o } = e, a = M.useId();
  return M.useEffect(() => o(a), []), !t && r ? [!1, () => r && r(a)] : [!0];
}
const Ba = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Xm(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Bo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ye.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Xm(e, t.target.x), o = Xm(e, t.target.y);
    return `${r}% ${o}%`;
  }
}, ET = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const o = e, a = Mr.parse(e);
    if (a.length > 5)
      return o;
    const c = Mr.createTransformer(e), f = typeof a[0] != "number" ? 1 : 0, m = r.x.scale * t.x, y = r.y.scale * t.y;
    a[0 + f] /= m, a[1 + f] /= y;
    const g = Je(m, y, 0.5);
    return typeof a[2 + f] == "number" && (a[2 + f] /= g), typeof a[3 + f] == "number" && (a[3 + f] /= g), c(a);
  }
};
class AT extends vn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: o, layoutId: a } = this.props, { projection: c } = t;
    D_(bT), c && (r.group && r.group.add(c), o && o.register && a && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), Ba.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: o, drag: a, isPresent: c } = this.props, f = o.projection;
    return f && (f.isPresent = c, a || t.layoutDependency !== r || r === void 0 ? f.willUpdate() : this.safeToRemove(), t.isPresent !== c && (c ? f.promote() : f.relegate() || Ke.postRender(() => {
      const m = f.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: o } = this.props, { projection: a } = t;
    a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), o && o.deregister && o.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function L0(e) {
  const [t, r] = CT(), o = M.useContext(is);
  return vn.createElement(AT, { ...e, layoutGroup: o, switchLayoutGroup: M.useContext(Ey), isPresent: t, safeToRemove: r });
}
const bT = {
  borderRadius: {
    ...Bo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Bo,
  borderTopRightRadius: Bo,
  borderBottomLeftRadius: Bo,
  borderBottomRightRadius: Bo,
  boxShadow: ET
}, M0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], PT = M0.length, Zm = (e) => typeof e == "string" ? parseFloat(e) : e, Jm = (e) => typeof e == "number" || ye.test(e);
function RT(e, t, r, o, a, c) {
  a ? (e.opacity = Je(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    OT(o)
  ), e.opacityExit = Je(t.opacity !== void 0 ? t.opacity : 1, 0, LT(o))) : c && (e.opacity = Je(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
  for (let f = 0; f < PT; f++) {
    const m = `border${M0[f]}Radius`;
    let y = eg(t, m), g = eg(r, m);
    if (y === void 0 && g === void 0)
      continue;
    y || (y = 0), g || (g = 0), y === 0 || g === 0 || Jm(y) === Jm(g) ? (e[m] = Math.max(Je(Zm(y), Zm(g), o), 0), (Dn.test(g) || Dn.test(y)) && (e[m] += "%")) : e[m] = g;
  }
  (t.rotate || r.rotate) && (e.rotate = Je(t.rotate || 0, r.rotate || 0, o));
}
function eg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const OT = D0(0, 0.5, Yf), LT = D0(0.5, 0.95, dt);
function D0(e, t, r) {
  return (o) => o < e ? 0 : o > t ? 1 : r(ss(e, t, o));
}
function tg(e, t) {
  e.min = t.min, e.max = t.max;
}
function rn(e, t) {
  tg(e.x, t.x), tg(e.y, t.y);
}
function ng(e, t, r, o, a) {
  return e -= t, e = sl(e, 1 / r, o), a !== void 0 && (e = sl(e, 1 / a, o)), e;
}
function MT(e, t = 0, r = 1, o = 0.5, a, c = e, f = e) {
  if (Dn.test(t) && (t = parseFloat(t), t = Je(f.min, f.max, t / 100) - f.min), typeof t != "number")
    return;
  let m = Je(c.min, c.max, o);
  e === c && (m -= t), e.min = ng(e.min, t, r, m, a), e.max = ng(e.max, t, r, m, a);
}
function rg(e, t, [r, o, a], c, f) {
  MT(e, t[r], t[o], t[a], t.scale, c, f);
}
const DT = ["x", "scaleX", "originX"], NT = ["y", "scaleY", "originY"];
function ig(e, t, r, o) {
  rg(e.x, t, DT, r ? r.x : void 0, o ? o.x : void 0), rg(e.y, t, NT, r ? r.y : void 0, o ? o.y : void 0);
}
function og(e) {
  return e.translate === 0 && e.scale === 1;
}
function N0(e) {
  return og(e.x) && og(e.y);
}
function xf(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function sg(e) {
  return Qt(e.x) / Qt(e.y);
}
class FT {
  constructor() {
    this.members = [];
  }
  add(t) {
    ed(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (td(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((a) => t === a);
    if (r === 0)
      return !1;
    let o;
    for (let a = r; a >= 0; a--) {
      const c = this.members[a];
      if (c.isPresent !== !1) {
        o = c;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(t, r) {
    const o = this.lead;
    if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
      o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, r && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: a } = t.options;
      a === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: o } = t;
      r.onExitComplete && r.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ag(e, t, r) {
  let o = "";
  const a = e.x.translate / t.x, c = e.y.translate / t.y;
  if ((a || c) && (o = `translate3d(${a}px, ${c}px, 0) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: y, rotateX: g, rotateY: x } = r;
    y && (o += `rotate(${y}deg) `), g && (o += `rotateX(${g}deg) `), x && (o += `rotateY(${x}deg) `);
  }
  const f = e.x.scale * t.x, m = e.y.scale * t.y;
  return (f !== 1 || m !== 1) && (o += `scale(${f}, ${m})`), o || "none";
}
const IT = (e, t) => e.depth - t.depth;
class jT {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ed(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    td(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(IT), this.isDirty = !1, this.children.forEach(t);
  }
}
function VT(e, t) {
  const r = performance.now(), o = ({ timestamp: a }) => {
    const c = a - r;
    c >= t && (nr(o), e(c - t));
  };
  return Ke.read(o, !0), () => nr(o);
}
function BT(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function zT(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function $T(e, t, r) {
  const o = Ht(e) ? e : $i(e);
  return o.start(Jf("", o, t, r)), o.animation;
}
const lg = ["", "X", "Y", "Z"], ug = 1e3;
let UT = 0;
const Xr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function F0({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: o, resetTransform: a }) {
  return class {
    constructor(f = {}, m = t == null ? void 0 : t()) {
      this.id = UT++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Xr.totalNodes = Xr.resolvedTargetDeltas = Xr.recalculatedProjection = 0, this.nodes.forEach(qT), this.nodes.forEach(XT), this.nodes.forEach(ZT), this.nodes.forEach(GT), BT(Xr);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jT());
    }
    addEventListener(f, m) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new nd()), this.eventHandlers.get(f).add(m);
    }
    notifyListeners(f, ...m) {
      const y = this.eventHandlers.get(f);
      y && y.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    /**
     * Lifecycles
     */
    mount(f, m = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = zT(f), this.instance = f;
      const { layoutId: y, layout: g, visualElement: x } = this.options;
      if (x && !x.current && x.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), m && (g || y) && (this.isLayoutDirty = !0), e) {
        let u;
        const h = () => this.root.updateBlockedByResize = !1;
        e(f, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = VT(h, 250), Ba.hasAnimatedSinceResize && (Ba.hasAnimatedSinceResize = !1, this.nodes.forEach(fg));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && x && (y || g) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeTargetChanged: v, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || x.getDefaultTransition() || rC, { onLayoutAnimationStart: k, onLayoutAnimationComplete: T } = x.getProps(), A = !this.targetLayout || !xf(this.targetLayout, w) || v, O = !h && v;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || O || h && (A || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, O);
          const V = {
            ...S0(S, "layout"),
            onPlay: k,
            onComplete: T
          };
          (x.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0, V.type = !1), this.startAnimation(V);
        } else
          h || fg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, nr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(JT), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const u = this.path[x];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: m, layout: y } = this.options;
      if (m === void 0 && !y)
        return;
      const g = this.getTransformTemplate();
      this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(cg);
        return;
      }
      this.isUpdating || this.nodes.forEach(YT), this.isUpdating = !1, this.nodes.forEach(QT), this.nodes.forEach(HT), this.nodes.forEach(WT), this.clearAllSnapshots();
      const m = performance.now();
      Ze.delta = Lr(0, 1e3 / 60, m - Ze.timestamp), Ze.timestamp = m, Ze.isProcessing = !0, ji.update.process(Ze), ji.preRender.process(Ze), ji.render.process(Ze), Ze.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(KT), this.sharedNodes.forEach(eC);
    }
    scheduleUpdateProjection() {
      Ke.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Ke.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++)
          this.path[y].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ot(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m && m.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (m = !1), m && (this.scroll = {
        animationId: this.root.animationId,
        phase: f,
        isRoot: o(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!a)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform, m = this.projectionDelta && !N0(this.projectionDelta), y = this.getTransformTemplate(), g = y ? y(this.latestValues, "") : void 0, x = g !== this.prevTransformTemplateValue;
      f && (m || Qr(this.latestValues) || x) && (a(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return f && (y = this.removeTransform(y)), iC(y), {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: y,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f)
        return ot();
      const m = f.measureViewportBox(), { scroll: y } = this.root;
      return y && (Ar(m.x, y.offset.x), Ar(m.y, y.offset.y)), m;
    }
    removeElementScroll(f) {
      const m = ot();
      rn(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y], { scroll: x, options: u } = g;
        if (g !== this.root && x && u.layoutScroll) {
          if (x.isRoot) {
            rn(m, f);
            const { scroll: h } = this.root;
            h && (Ar(m.x, -h.offset.x), Ar(m.y, -h.offset.y));
          }
          Ar(m.x, x.offset.x), Ar(m.y, x.offset.y);
        }
      }
      return m;
    }
    applyTransform(f, m = !1) {
      const y = ot();
      rn(y, f);
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        !m && x.options.layoutScroll && x.scroll && x !== x.root && Ni(y, {
          x: -x.scroll.offset.x,
          y: -x.scroll.offset.y
        }), Qr(x.latestValues) && Ni(y, x.latestValues);
      }
      return Qr(this.latestValues) && Ni(y, this.latestValues), y;
    }
    removeTransform(f) {
      const m = ot();
      rn(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!g.instance || !Qr(g.latestValues))
          continue;
        yf(g.latestValues) && g.updateSnapshot();
        const x = ot(), u = g.measurePageBox();
        rn(x, u), ig(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, x);
      }
      return Qr(this.latestValues) && ig(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ze.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var m;
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== y;
      if (!(f || g && this.isSharedProjectionDirty || this.isProjectionDirty || !((m = this.parent) === null || m === void 0) && m.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (this.resolvedRelativeTargetAt = Ze.timestamp, !this.targetDelta && !this.relativeTarget) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ot(), this.relativeTargetOrigin = ot(), Xo(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), rn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ot(), this.targetWithTransforms = ot()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), aT(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rn(this.target, this.layout.layoutBox), R0(this.target, this.targetDelta)) : rn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ot(), this.relativeTargetOrigin = ot(), Xo(this.relativeTargetOrigin, this.target, v.target), rn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Xr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || yf(this.parent.latestValues) || P0(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var f;
      const m = this.getLead(), y = !!this.resumingFrom || this !== m;
      let g = !0;
      if ((this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty) && (g = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === Ze.timestamp && (g = !1), g)
        return;
      const { layout: x, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(x || u))
        return;
      rn(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, v = this.treeScale.y;
      gT(this.layoutCorrected, this.treeScale, this.path, y), m.layout && !m.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (m.target = m.layout.layoutBox);
      const { target: w } = m;
      if (!w) {
        this.projectionTransform && (this.projectionDelta = Di(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Di(), this.projectionDeltaWithTransform = Di());
      const S = this.projectionTransform;
      Qo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), this.projectionTransform = ag(this.projectionDelta, this.treeScale), (this.projectionTransform !== S || this.treeScale.x !== h || this.treeScale.y !== v) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Xr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), f) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(f, m = !1) {
      const y = this.snapshot, g = y ? y.latestValues : {}, x = { ...this.latestValues }, u = Di();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const h = ot(), v = y ? y.source : void 0, w = this.layout ? this.layout.source : void 0, S = v !== w, k = this.getStack(), T = !k || k.members.length <= 1, A = !!(S && !T && this.options.crossfade === !0 && !this.path.some(nC));
      this.animationProgress = 0;
      let O;
      this.mixTargetDelta = (V) => {
        const $ = V / 1e3;
        dg(u.x, f.x, $), dg(u.y, f.y, $), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xo(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), tC(this.relativeTarget, this.relativeTargetOrigin, h, $), O && xf(this.relativeTarget, O) && (this.isProjectionDirty = !1), O || (O = ot()), rn(O, this.relativeTarget)), S && (this.animationValues = x, RT(x, g, this.latestValues, $, A, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = $;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (nr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ke.update(() => {
        Ba.hasAnimatedSinceResize = !0, this.currentAnimation = $T(0, ug, {
          ...f,
          onUpdate: (m) => {
            this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ug), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: m, target: y, layout: g, latestValues: x } = f;
      if (!(!m || !y || !g)) {
        if (this !== f && this.layout && g && I0(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          y = this.target || ot();
          const u = Qt(this.layout.layoutBox.x);
          y.x.min = f.target.x.min, y.x.max = y.x.min + u;
          const h = Qt(this.layout.layoutBox.y);
          y.y.min = f.target.y.min, y.y.max = y.y.min + h;
        }
        rn(m, y), Ni(m, x), Qo(this.projectionDeltaWithTransform, this.layoutCorrected, m, x);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new FT()), this.sharedNodes.get(f).add(m);
      const g = m.options.initialPromotionConfig;
      m.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(m) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var f;
      const { layoutId: m } = this.options;
      return m ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.lead) || this : this;
    }
    getPrevLead() {
      var f;
      const { layoutId: m } = this.options;
      return m ? (f = this.getStack()) === null || f === void 0 ? void 0 : f.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: y } = {}) {
      const g = this.getStack();
      g && g.promote(this, y), f && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: f } = this.options;
      if (!f)
        return;
      let m = !1;
      const { latestValues: y } = f;
      if ((y.rotate || y.rotateX || y.rotateY || y.rotateZ) && (m = !0), !m)
        return;
      const g = {};
      for (let x = 0; x < lg.length; x++) {
        const u = "rotate" + lg[x];
        y[u] && (g[u] = y[u], f.setStaticValue(u, 0));
      }
      f.render();
      for (const x in g)
        f.setStaticValue(x, g[x]);
      f.scheduleRender();
    }
    getProjectionStyles(f = {}) {
      var m, y;
      const g = {};
      if (!this.instance || this.isSVG)
        return g;
      if (this.isVisible)
        g.visibility = "";
      else
        return { visibility: "hidden" };
      const x = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, g.opacity = "", g.pointerEvents = Va(f.pointerEvents) || "", g.transform = x ? x(this.latestValues, "") : "none", g;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const S = {};
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = Va(f.pointerEvents) || ""), this.hasProjected && !Qr(this.latestValues) && (S.transform = x ? x({}, "") : "none", this.hasProjected = !1), S;
      }
      const h = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), g.transform = ag(this.projectionDeltaWithTransform, this.treeScale, h), x && (g.transform = x(h, g.transform));
      const { x: v, y: w } = this.projectionDelta;
      g.transformOrigin = `${v.origin * 100}% ${w.origin * 100}% 0`, u.animationValues ? g.opacity = u === this ? (y = (m = h.opacity) !== null && m !== void 0 ? m : this.latestValues.opacity) !== null && y !== void 0 ? y : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : g.opacity = u === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const S in Ja) {
        if (h[S] === void 0)
          continue;
        const { correct: k, applyTo: T } = Ja[S], A = g.transform === "none" ? h[S] : k(h[S], u);
        if (T) {
          const O = T.length;
          for (let V = 0; V < O; V++)
            g[T[V]] = A;
        } else
          g[S] = A;
      }
      return this.options.layoutId && (g.pointerEvents = u === this ? Va(f.pointerEvents) || "" : "none"), g;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) === null || m === void 0 ? void 0 : m.stop();
      }), this.root.nodes.forEach(cg), this.root.sharedNodes.clear();
    }
  };
}
function HT(e) {
  e.updateLayout();
}
function WT(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: a } = e.layout, { animationType: c } = e.options, f = r.source !== e.layout.source;
    c === "size" ? bn((u) => {
      const h = f ? r.measuredBox[u] : r.layoutBox[u], v = Qt(h);
      h.min = o[u].min, h.max = h.min + v;
    }) : I0(c, r.layoutBox, o) && bn((u) => {
      const h = f ? r.measuredBox[u] : r.layoutBox[u], v = Qt(o[u]);
      h.max = h.min + v, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + v);
    });
    const m = Di();
    Qo(m, o, r.layoutBox);
    const y = Di();
    f ? Qo(y, e.applyTransform(a, !0), r.measuredBox) : Qo(y, o, r.layoutBox);
    const g = !N0(m);
    let x = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: v } = u;
        if (h && v) {
          const w = ot();
          Xo(w, r.layoutBox, h.layoutBox);
          const S = ot();
          Xo(S, o, v.layoutBox), xf(w, S) || (x = !0), u.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = w, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: r,
      delta: y,
      layoutDelta: m,
      hasLayoutChanged: g,
      hasRelativeTargetChanged: x
    });
  } else if (e.isLead()) {
    const { onExitComplete: o } = e.options;
    o && o();
  }
  e.options.transition = void 0;
}
function qT(e) {
  Xr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function GT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function KT(e) {
  e.clearSnapshot();
}
function cg(e) {
  e.clearMeasurements();
}
function YT(e) {
  e.isLayoutDirty = !1;
}
function QT(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function fg(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function XT(e) {
  e.resolveTargetDelta();
}
function ZT(e) {
  e.calcProjection();
}
function JT(e) {
  e.resetRotation();
}
function eC(e) {
  e.removeLeadSnapshot();
}
function dg(e, t, r) {
  e.translate = Je(t.translate, 0, r), e.scale = Je(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function hg(e, t, r, o) {
  e.min = Je(t.min, r.min, o), e.max = Je(t.max, r.max, o);
}
function tC(e, t, r, o) {
  hg(e.x, t.x, r.x, o), hg(e.y, t.y, r.y, o);
}
function nC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const rC = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function pg(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function iC(e) {
  pg(e.x), pg(e.y);
}
function I0(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !mf(sg(t), sg(r), 0.2);
}
const oC = F0({
  attachResizeListener: (e, t) => Zn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ic = {
  current: void 0
}, j0 = F0({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ic.current) {
      const e = new oC({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ic.current = e;
    }
    return Ic.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), sC = {
  pan: {
    Feature: TT
  },
  drag: {
    Feature: kT,
    ProjectionNode: j0,
    MeasureLayout: L0
  }
}, aC = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function lC(e) {
  const t = aC.exec(e);
  if (!t)
    return [,];
  const [, r, o] = t;
  return [r, o];
}
function wf(e, t, r = 1) {
  const [o, a] = lC(e);
  if (!o)
    return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  return c ? c.trim() : af(a) ? wf(a, t, r + 1) : a;
}
function uC(e, { ...t }, r) {
  const o = e.current;
  if (!(o instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((a) => {
    const c = a.get();
    if (!af(c))
      return;
    const f = wf(c, o);
    f && a.set(f);
  });
  for (const a in t) {
    const c = t[a];
    if (!af(c))
      continue;
    const f = wf(c, o);
    f && (t[a] = f, r || (r = {}), r[a] === void 0 && (r[a] = c));
  }
  return { target: t, transitionEnd: r };
}
const cC = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), V0 = (e) => cC.has(e), fC = (e) => Object.keys(e).some(V0), mg = (e) => e === ei || e === ye, gg = (e, t) => parseFloat(e.split(", ")[t]), yg = (e, t) => (r, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const a = o.match(/^matrix3d\((.+)\)$/);
  if (a)
    return gg(a[1], t);
  {
    const c = o.match(/^matrix\((.+)\)$/);
    return c ? gg(c[1], e) : 0;
  }
}, dC = /* @__PURE__ */ new Set(["x", "y", "z"]), hC = us.filter((e) => !dC.has(e));
function pC(e) {
  const t = [];
  return hC.forEach((r) => {
    const o = e.getValue(r);
    o !== void 0 && (t.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const vg = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: yg(4, 13),
  y: yg(5, 14)
}, mC = (e, t, r) => {
  const o = t.measureViewportBox(), a = t.current, c = getComputedStyle(a), { display: f } = c, m = {};
  f === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((g) => {
    m[g] = vg[g](o, c);
  }), t.render();
  const y = t.measureViewportBox();
  return r.forEach((g) => {
    const x = t.getValue(g);
    x && x.jump(m[g]), e[g] = vg[g](y, c);
  }), e;
}, gC = (e, t, r = {}, o = {}) => {
  t = { ...t }, o = { ...o };
  const a = Object.keys(t).filter(V0);
  let c = [], f = !1;
  const m = [];
  if (a.forEach((y) => {
    const g = e.getValue(y);
    if (!e.hasValue(y))
      return;
    let x = r[y], u = Vo(x);
    const h = t[y];
    let v;
    if (tl(h)) {
      const w = h.length, S = h[0] === null ? 1 : 0;
      x = h[S], u = Vo(x);
      for (let k = S; k < w && h[k] !== null; k++)
        v ? Kf(Vo(h[k]) === v) : v = Vo(h[k]);
    } else
      v = Vo(h);
    if (u !== v)
      if (mg(u) && mg(v)) {
        const w = g.get();
        typeof w == "string" && g.set(parseFloat(w)), typeof h == "string" ? t[y] = parseFloat(h) : Array.isArray(h) && v === ye && (t[y] = h.map(parseFloat));
      } else
        u != null && u.transform && (v != null && v.transform) && (x === 0 || h === 0) ? x === 0 ? g.set(v.transform(x)) : t[y] = u.transform(h) : (f || (c = pC(e), f = !0), m.push(y), o[y] = o[y] !== void 0 ? o[y] : t[y], g.jump(h));
  }), m.length) {
    const y = m.indexOf("height") >= 0 ? window.pageYOffset : null, g = mC(t, e, m);
    return c.length && c.forEach(([x, u]) => {
      e.getValue(x).set(u);
    }), e.render(), Sl && y !== null && window.scrollTo({ top: y }), { target: g, transitionEnd: o };
  } else
    return { target: t, transitionEnd: o };
};
function yC(e, t, r, o) {
  return fC(t) ? gC(e, t, r, o) : { target: t, transitionEnd: o };
}
const vC = (e, t, r, o) => {
  const a = uC(e, t, o);
  return t = a.target, o = a.transitionEnd, yC(e, t, r, o);
}, _f = { current: null }, B0 = { current: !1 };
function xC() {
  if (B0.current = !0, !!Sl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => _f.current = e.matches;
      e.addListener(t), t();
    } else
      _f.current = !1;
}
function wC(e, t, r) {
  const { willChange: o } = t;
  for (const a in t) {
    const c = t[a], f = r[a];
    if (Ht(c))
      e.addValue(a, c), ol(o) && o.add(a);
    else if (Ht(f))
      e.addValue(a, $i(c, { owner: e })), ol(o) && o.remove(a);
    else if (f !== c)
      if (e.hasValue(a)) {
        const m = e.getValue(a);
        !m.hasAnimated && m.set(c);
      } else {
        const m = e.getStaticValue(a);
        e.addValue(a, $i(m !== void 0 ? m : c, { owner: e }));
      }
  }
  for (const a in r)
    t[a] === void 0 && e.removeValue(a);
  return t;
}
const xg = /* @__PURE__ */ new WeakMap(), z0 = Object.keys(rs), _C = z0.length, wg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], SC = Vf.length;
class kC {
  constructor({ parent: t, props: r, presenceContext: o, reducedMotionConfig: a, visualState: c }, f = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ke.render(this.render, !1, !0);
    const { latestValues: m, renderState: y } = c;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = r.initial ? { ...m } : {}, this.renderState = y, this.parent = t, this.props = r, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = a, this.options = f, this.isControllingVariants = Tl(r), this.isVariantNode = Cy(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: g, ...x } = this.scrapeMotionValuesFromProps(r, {});
    for (const u in x) {
      const h = x[u];
      m[u] !== void 0 && Ht(h) && (h.set(m[u], !1), ol(g) && g.add(u));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, xg.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), B0.current || xC(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : _f.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    xg.delete(this.current), this.projection && this.projection.unmount(), nr(this.notifyUpdate), nr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const o = Jr.has(t), a = r.on("change", (f) => {
      this.latestValues[t] = f, this.props.onUpdate && Ke.update(this.notifyUpdate, !1, !0), o && this.projection && (this.projection.isTransformDirty = !0);
    }), c = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      a(), c();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, o, a, c) {
    let f, m;
    for (let y = 0; y < _C; y++) {
      const g = z0[y], { isEnabled: x, Feature: u, ProjectionNode: h, MeasureLayout: v } = rs[g];
      h && (f = h), x(r) && (!this.features[g] && u && (this.features[g] = new u(this)), v && (m = v));
    }
    if (!this.projection && f) {
      this.projection = new f(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: y, layout: g, drag: x, dragConstraints: u, layoutScroll: h, layoutRoot: v } = r;
      this.projection.setOptions({
        layoutId: y,
        layout: g,
        alwaysMeasureLayout: !!x || u && Li(u),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof g == "string" ? g : "both",
        initialPromotionConfig: c,
        layoutScroll: h,
        layoutRoot: v
      });
    }
    return m;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ot();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let o = 0; o < wg.length; o++) {
      const a = wg[o];
      this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
      const c = t["on" + a];
      c && (this.propEventSubscriptions[a] = this.on(a, c));
    }
    this.prevMotionValues = wC(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const o = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (o.initial = this.props.initial), o;
    }
    const r = {};
    for (let o = 0; o < SC; o++) {
      const a = Vf[o], c = this.props[a];
      (ns(c) || c === !1) && (r[a] = c);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let o = this.values.get(t);
    return o === void 0 && r !== void 0 && (o = $i(r, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: o } = this.props, a = typeof o == "string" || typeof o == "object" ? (r = Gf(this.props, o)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (o && a !== void 0)
      return a;
    const c = this.getBaseTargetFromProps(this.props, t);
    return c !== void 0 && !Ht(c) ? c : this.initialValues[t] !== void 0 && a === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new nd()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class $0 extends kC {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: o }) {
    delete r[t], delete o[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...o }, { transformValues: a }, c) {
    let f = Uk(o, t || {}, this);
    if (a && (r && (r = a(r)), o && (o = a(o)), f && (f = a(f))), c) {
      zk(this, o, f);
      const m = vC(this, o, f, r);
      r = m.transitionEnd, o = m.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...o
    };
  }
}
function TC(e) {
  return window.getComputedStyle(e);
}
class CC extends $0 {
  readValueFromInstance(t, r) {
    if (Jr.has(r)) {
      const o = Zf(r);
      return o && o.default || 0;
    } else {
      const o = TC(t), a = (Py(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return O0(t, r);
  }
  build(t, r, o, a) {
    zf(t, r, o, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return qf(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ht(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, o, a) {
    Ny(t, r, o, a);
  }
}
class EC extends $0 {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Jr.has(r)) {
      const o = Zf(r);
      return o && o.default || 0;
    }
    return r = Fy.has(r) ? r : Wf(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ot();
  }
  scrapeMotionValuesFromProps(t, r) {
    return jy(t, r);
  }
  build(t, r, o, a) {
    Uf(t, r, o, this.isSVGTag, a.transformTemplate);
  }
  renderInstance(t, r, o, a) {
    Iy(t, r, o, a);
  }
  mount(t) {
    this.isSVGTag = Hf(t.tagName), super.mount(t);
  }
}
const AC = (e, t) => Bf(e) ? new EC(t, { enableHardwareAcceleration: !1 }) : new CC(t, { enableHardwareAcceleration: !0 }), bC = {
  layout: {
    ProjectionNode: j0,
    MeasureLayout: L0
  }
}, PC = {
  ...rT,
  ...TS,
  ...sC,
  ...bC
}, Ui = /* @__PURE__ */ L_((e, t) => aS(e, t, PC, AC));
function U0() {
  const e = M.useRef(!1);
  return Za(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function H0() {
  const e = U0(), [t, r] = M.useState(0), o = M.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [M.useCallback(() => Ke.postRender(o), [o]), t];
}
class RC extends M.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const o = this.props.sizeRef.current;
      o.height = r.offsetHeight || 0, o.width = r.offsetWidth || 0, o.top = r.offsetTop, o.left = r.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function OC({ children: e, isPresent: t }) {
  const r = M.useId(), o = M.useRef(null), a = M.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return M.useInsertionEffect(() => {
    const { width: c, height: f, top: m, left: y } = a.current;
    if (t || !o.current || !c || !f)
      return;
    o.current.dataset.motionPopId = r;
    const g = document.createElement("style");
    return document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${m}px !important;
            left: ${y}px !important;
          }
        `), () => {
      document.head.removeChild(g);
    };
  }, [t]), M.createElement(RC, { isPresent: t, childRef: o, sizeRef: a }, M.cloneElement(e, { ref: o }));
}
const jc = ({ children: e, initial: t, isPresent: r, onExitComplete: o, custom: a, presenceAffectsLayout: c, mode: f }) => {
  const m = Vy(LC), y = M.useId(), g = M.useMemo(
    () => ({
      id: y,
      initial: t,
      isPresent: r,
      custom: a,
      onExitComplete: (x) => {
        m.set(x, !0);
        for (const u of m.values())
          if (!u)
            return;
        o && o();
      },
      register: (x) => (m.set(x, !1), () => m.delete(x))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    c ? void 0 : [r]
  );
  return M.useMemo(() => {
    m.forEach((x, u) => m.set(u, !1));
  }, [r]), M.useEffect(() => {
    !r && !m.size && o && o();
  }, [r]), f === "popLayout" && (e = M.createElement(OC, { isPresent: r }, e)), M.createElement(_l.Provider, { value: g }, e);
};
function LC() {
  return /* @__PURE__ */ new Map();
}
function MC(e) {
  return M.useEffect(() => () => e(), []);
}
const Pi = (e) => e.key || "";
function DC(e, t) {
  e.forEach((r) => {
    const o = Pi(r);
    t.set(o, r);
  });
}
function NC(e) {
  const t = [];
  return M.Children.forEach(e, (r) => {
    M.isValidElement(r) && t.push(r);
  }), t;
}
const W0 = ({ children: e, custom: t, initial: r = !0, onExitComplete: o, exitBeforeEnter: a, presenceAffectsLayout: c = !0, mode: f = "sync" }) => {
  const m = M.useContext(is).forceRender || H0()[0], y = U0(), g = NC(e);
  let x = g;
  const u = M.useRef(/* @__PURE__ */ new Map()).current, h = M.useRef(x), v = M.useRef(/* @__PURE__ */ new Map()).current, w = M.useRef(!0);
  if (Za(() => {
    w.current = !1, DC(g, v), h.current = x;
  }), MC(() => {
    w.current = !0, v.clear(), u.clear();
  }), w.current)
    return M.createElement(M.Fragment, null, x.map((A) => M.createElement(jc, { key: Pi(A), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: c, mode: f }, A)));
  x = [...x];
  const S = h.current.map(Pi), k = g.map(Pi), T = S.length;
  for (let A = 0; A < T; A++) {
    const O = S[A];
    k.indexOf(O) === -1 && !u.has(O) && u.set(O, void 0);
  }
  return f === "wait" && u.size && (x = []), u.forEach((A, O) => {
    if (k.indexOf(O) !== -1)
      return;
    const V = v.get(O);
    if (!V)
      return;
    const $ = S.indexOf(O);
    let X = A;
    if (!X) {
      const K = () => {
        v.delete(O), u.delete(O);
        const te = h.current.findIndex((J) => J.key === O);
        if (h.current.splice(te, 1), !u.size) {
          if (h.current = g, y.current === !1)
            return;
          m(), o && o();
        }
      };
      X = M.createElement(jc, { key: Pi(V), isPresent: !1, onExitComplete: K, custom: t, presenceAffectsLayout: c, mode: f }, V), u.set(O, X);
    }
    x.splice($, 0, X);
  }), x = x.map((A) => {
    const O = A.key;
    return u.has(O) ? A : M.createElement(jc, { key: Pi(A), isPresent: !0, presenceAffectsLayout: c, mode: f }, A);
  }), M.createElement(M.Fragment, null, u.size ? x : x.map((A) => M.cloneElement(A)));
}, FC = M.createContext(null), IC = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function _g() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), r = () => e.forEach(IC);
  return {
    add: (o) => {
      e.add(o), t.set(o, o.addEventListener("willUpdate", r));
    },
    remove: (o) => {
      e.delete(o);
      const a = t.get(o);
      a && (a(), t.delete(o)), r();
    },
    dirty: r
  };
}
const q0 = (e) => e === !0, jC = (e) => q0(e === !0) || e === "id", VC = ({ children: e, id: t, inherit: r = !0 }) => {
  const o = M.useContext(is), a = M.useContext(FC), [c, f] = H0(), m = M.useRef(null), y = o.id || a;
  m.current === null && (jC(r) && y && (t = t ? y + "-" + t : y), m.current = {
    id: t,
    group: q0(r) && o.group || _g()
  });
  const g = M.useMemo(() => ({ ...m.current, forceRender: c }), [f]);
  return M.createElement(is.Provider, { value: g }, e);
}, BC = Te(Ui.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  /* border: 1px solid ${(e) => e.theme.colors.primary}; */
  width: 400px;
  height: 700px;
  /* min-height: 700px; */
  max-height: calc(100vh - 100px);
  max-width: calc(100vw - 20px);
  /* flex: 1; */
  background-color: white;
  box-shadow: 0 40px 30px -10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: calc(100vw - 20px);
    height: calc(100vh - 100px);
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;

    .page-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`, zC = Te.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #eee;
  /* border-top: 1px solid ${(e) => e.theme.colors.primary}; */
`, $C = Te.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 10px 0;
  background: transparent;
  color: ${(e) => e.isActive ? e.theme.colors.primary : "#000"};

  svg {
    font-size: 34px;
  }

  span {
    font-size: 12px;
  }
`, hs = () => /* @__PURE__ */ E.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E.jsxs("g", { children: [
      /* @__PURE__ */ E.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ E.jsx("path", { d: "M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" })
    ] })
  }
), rd = () => /* @__PURE__ */ E.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E.jsxs("g", { children: [
      /* @__PURE__ */ E.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ E.jsx("path", { d: "M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z" })
    ] })
  }
), UC = () => /* @__PURE__ */ E.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E.jsxs("g", { children: [
      /* @__PURE__ */ E.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ E.jsx("path", { d: "M6 19h12V9.157l-6-5.454-6 5.454V19zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM7.5 13h2a2.5 2.5 0 1 0 5 0h2a4.5 4.5 0 1 1-9 0z" })
    ] })
  }
), HC = () => /* @__PURE__ */ E.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E.jsxs("g", { children: [
      /* @__PURE__ */ E.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ E.jsx("path", { d: "M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM7.5 13a4.5 4.5 0 1 0 9 0h-2a2.5 2.5 0 1 1-5 0h-2z" })
    ] })
  }
), WC = Te.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* padding: 20px; */
    /* gap: 60px; */

    .headline {
      padding: 20px;
      display: flex;
      flex-direction: column;
      color: white;

      .title {
        font-size: 24px;
        font-weight: 700;
      }
    }

    .auth-container {
      width: 100%;
      flex: 1;
      background-color: #fff;
      position: relative;
      margin: auto;
      border-radius: 10px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

      .auth-header {
        padding: 10px 10px;
        display: flex;
        flex-direction: column;

        .title {
          font-size: 26px;
          font-weight: 300;
          text-align: center;
          line-height: 1.5;
          user-select: none;
        }
      }

      .auth-content {
        padding: 10px 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .input-container {
          display: flex;
          flex-direction: column;
          gap: 5px;

          .label {
            font-size: 12px;
            font-weight: 700;
            color: #999;
          }

          input {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            font-size: 14px;
            font-weight: 700;
            color: #333;
            background-color: #ddd;
          }
        }

        .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;

          .button-submit {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 60px;
            border-radius: 100px;
            scale: 0.9;
            box-shadow: 0 7px 10px
              ${(e) => zi(e.theme.colors.secondary, 0.6)};
            background-image: linear-gradient(
              45deg,
              ${(e) => e.theme.colors.primary},
              ${(e) => e.theme.colors.primary},
              ${(e) => e.theme.colors.secondary},
              ${(e) => e.theme.colors.secondary}
            );
            background-size: 200%;
            background-position: 30% 100%;
            color: white;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: background-position 0.2s ease-in-out,
              box-shadow 0.2s ease-in-out, scale 0.1s ease-in-out;

            &:hover,
            &:focus {
              transition: background-position 0.2s ease-in-out,
                box-shadow 0.2s ease-in-out, scale 0.5s ease-in-out;
              scale: 1;
              background-position: 100% 0%;
              box-shadow: 0 7px 10px
                ${(e) => zi(e.theme.colors.secondary, 0.8)};
            }

            :active {
              scale: 0.98;
            }
          }
        }
      }
    }
  }
`, qC = Te.div`
  background: linear-gradient(
    45deg,
    ${(e) => e.theme.colors.primary},
    ${(e) => e.theme.colors.secondary}
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`, GC = Te.div`
  background: linear-gradient(180deg, transparent, white);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
var ps = (e) => e.type === "checkbox", Fi = (e) => e instanceof Date, Dt = (e) => e == null;
const G0 = (e) => typeof e == "object";
var ht = (e) => !Dt(e) && !Array.isArray(e) && G0(e) && !Fi(e), KC = (e) => ht(e) && e.target ? ps(e.target) ? e.target.checked : e.target.value : e, YC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, QC = (e, t) => e.has(YC(t)), XC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ht(t) && t.hasOwnProperty("isPrototypeOf");
}, id = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Er(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(id && (e instanceof Blob || e instanceof FileList)) && (r || ht(e)))
    if (t = r ? [] : {}, !r && !XC(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = Er(e[o]));
  else
    return e;
  return t;
}
var ms = (e) => Array.isArray(e) ? e.filter(Boolean) : [], st = (e) => e === void 0, fe = (e, t, r) => {
  if (!t || !ht(e))
    return r;
  const o = ms(t.split(/[,[\].]+?/)).reduce((a, c) => Dt(a) ? a : a[c], e);
  return st(o) || o === e ? st(e[t]) ? r : e[t] : o;
};
const Sg = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, yn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Qn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
vn.createContext(null);
var ZC = (e, t, r, o = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const c in e)
    Object.defineProperty(a, c, {
      get: () => {
        const f = c;
        return t._proxyFormState[f] !== yn.all && (t._proxyFormState[f] = !o || yn.all), r && (r[f] = !0), e[f];
      }
    });
  return a;
}, on = (e) => ht(e) && !Object.keys(e).length, JC = (e, t, r, o) => {
  r(e);
  const { name: a, ...c } = e;
  return on(c) || Object.keys(c).length >= Object.keys(t).length || Object.keys(c).find((f) => t[f] === (!o || yn.all));
}, Vc = (e) => Array.isArray(e) ? e : [e];
function eE(e) {
  const t = vn.useRef(e);
  t.current = e, vn.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
var On = (e) => typeof e == "string", tE = (e, t, r, o, a) => On(e) ? (o && t.watch.add(e), fe(r, e, a)) : Array.isArray(e) ? e.map((c) => (o && t.watch.add(c), fe(r, c))) : (o && (t.watchAll = !0), r), od = (e) => /^\w*$/.test(e), K0 = (e) => ms(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ge(e, t, r) {
  let o = -1;
  const a = od(t) ? [t] : K0(t), c = a.length, f = c - 1;
  for (; ++o < c; ) {
    const m = a[o];
    let y = r;
    if (o !== f) {
      const g = e[m];
      y = ht(g) || Array.isArray(g) ? g : isNaN(+a[o + 1]) ? {} : [];
    }
    e[m] = y, e = e[m];
  }
  return e;
}
var nE = (e, t, r, o, a) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [o]: a || !0
  }
} : {};
const Sf = (e, t, r) => {
  for (const o of r || Object.keys(e)) {
    const a = fe(e, o);
    if (a) {
      const { _f: c, ...f } = a;
      if (c && t(c.name)) {
        if (c.ref.focus) {
          c.ref.focus();
          break;
        } else if (c.refs && c.refs[0].focus) {
          c.refs[0].focus();
          break;
        }
      } else
        ht(f) && Sf(f, t);
    }
  }
};
var kg = (e) => ({
  isOnSubmit: !e || e === yn.onSubmit,
  isOnBlur: e === yn.onBlur,
  isOnChange: e === yn.onChange,
  isOnAll: e === yn.all,
  isOnTouch: e === yn.onTouched
}), Tg = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((o) => e.startsWith(o) && /^\.\w+/.test(e.slice(o.length)))), rE = (e, t, r) => {
  const o = ms(fe(e, r));
  return Ge(o, "root", t[r]), Ge(e, r, o), e;
}, Vi = (e) => typeof e == "boolean", sd = (e) => e.type === "file", br = (e) => typeof e == "function", al = (e) => {
  if (!id)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, za = (e) => On(e), ad = (e) => e.type === "radio", ll = (e) => e instanceof RegExp;
const Cg = {
  value: !1,
  isValid: !1
}, Eg = { value: !0, isValid: !0 };
var Y0 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !st(e[0].attributes.value) ? st(e[0].value) || e[0].value === "" ? Eg : { value: e[0].value, isValid: !0 } : Eg
    ) : Cg;
  }
  return Cg;
};
const Ag = {
  isValid: !1,
  value: null
};
var Q0 = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Ag) : Ag;
function bg(e, t, r = "validate") {
  if (za(e) || Array.isArray(e) && e.every(za) || Vi(e) && !e)
    return {
      type: r,
      message: za(e) ? e : "",
      ref: t
    };
}
var Ai = (e) => ht(e) && !ll(e) ? e : {
  value: e,
  message: ""
}, Pg = async (e, t, r, o, a) => {
  const { ref: c, refs: f, required: m, maxLength: y, minLength: g, min: x, max: u, pattern: h, validate: v, name: w, valueAsNumber: S, mount: k, disabled: T } = e._f, A = fe(t, w);
  if (!k || T)
    return {};
  const O = f ? f[0] : c, V = (he) => {
    o && O.reportValidity && (O.setCustomValidity(Vi(he) ? "" : he || ""), O.reportValidity());
  }, $ = {}, X = ad(c), K = ps(c), te = X || K, J = (S || sd(c)) && st(c.value) && st(A) || al(c) && c.value === "" || A === "" || Array.isArray(A) && !A.length, Ce = nE.bind(null, w, r, $), Le = (he, le, ae, ge = Qn.maxLength, Ee = Qn.minLength) => {
    const Se = he ? le : ae;
    $[w] = {
      type: he ? ge : Ee,
      message: Se,
      ref: c,
      ...Ce(he ? ge : Ee, Se)
    };
  };
  if (a ? !Array.isArray(A) || !A.length : m && (!te && (J || Dt(A)) || Vi(A) && !A || K && !Y0(f).isValid || X && !Q0(f).isValid)) {
    const { value: he, message: le } = za(m) ? { value: !!m, message: m } : Ai(m);
    if (he && ($[w] = {
      type: Qn.required,
      message: le,
      ref: O,
      ...Ce(Qn.required, le)
    }, !r))
      return V(le), $;
  }
  if (!J && (!Dt(x) || !Dt(u))) {
    let he, le;
    const ae = Ai(u), ge = Ai(x);
    if (!Dt(A) && !isNaN(A)) {
      const Ee = c.valueAsNumber || A && +A;
      Dt(ae.value) || (he = Ee > ae.value), Dt(ge.value) || (le = Ee < ge.value);
    } else {
      const Ee = c.valueAsDate || new Date(A), Se = (b) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + b), Q = c.type == "time", ue = c.type == "week";
      On(ae.value) && A && (he = Q ? Se(A) > Se(ae.value) : ue ? A > ae.value : Ee > new Date(ae.value)), On(ge.value) && A && (le = Q ? Se(A) < Se(ge.value) : ue ? A < ge.value : Ee < new Date(ge.value));
    }
    if ((he || le) && (Le(!!he, ae.message, ge.message, Qn.max, Qn.min), !r))
      return V($[w].message), $;
  }
  if ((y || g) && !J && (On(A) || a && Array.isArray(A))) {
    const he = Ai(y), le = Ai(g), ae = !Dt(he.value) && A.length > +he.value, ge = !Dt(le.value) && A.length < +le.value;
    if ((ae || ge) && (Le(ae, he.message, le.message), !r))
      return V($[w].message), $;
  }
  if (h && !J && On(A)) {
    const { value: he, message: le } = Ai(h);
    if (ll(he) && !A.match(he) && ($[w] = {
      type: Qn.pattern,
      message: le,
      ref: c,
      ...Ce(Qn.pattern, le)
    }, !r))
      return V(le), $;
  }
  if (v) {
    if (br(v)) {
      const he = await v(A, t), le = bg(he, O);
      if (le && ($[w] = {
        ...le,
        ...Ce(Qn.validate, le.message)
      }, !r))
        return V(le.message), $;
    } else if (ht(v)) {
      let he = {};
      for (const le in v) {
        if (!on(he) && !r)
          break;
        const ae = bg(await v[le](A, t), O, le);
        ae && (he = {
          ...ae,
          ...Ce(le, ae.message)
        }, V(ae.message), r && ($[w] = he));
      }
      if (!on(he) && ($[w] = {
        ref: O,
        ...he
      }, !r))
        return $;
    }
  }
  return V(!0), $;
};
function iE(e, t) {
  const r = t.slice(0, -1).length;
  let o = 0;
  for (; o < r; )
    e = st(e) ? o++ : e[t[o++]];
  return e;
}
function oE(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !st(e[t]))
      return !1;
  return !0;
}
function St(e, t) {
  const r = Array.isArray(t) ? t : od(t) ? [t] : K0(t), o = r.length === 1 ? e : iE(e, r), a = r.length - 1, c = r[a];
  return o && delete o[c], a !== 0 && (ht(o) && on(o) || Array.isArray(o) && oE(o)) && St(e, r.slice(0, -1)), e;
}
function Bc() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (a) => {
      for (const c of e)
        c.next && c.next(a);
    },
    subscribe: (a) => (e.push(a), {
      unsubscribe: () => {
        e = e.filter((c) => c !== a);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var ul = (e) => Dt(e) || !G0(e);
function Pr(e, t) {
  if (ul(e) || ul(t))
    return e === t;
  if (Fi(e) && Fi(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  for (const a of r) {
    const c = e[a];
    if (!o.includes(a))
      return !1;
    if (a !== "ref") {
      const f = t[a];
      if (Fi(c) && Fi(f) || ht(c) && ht(f) || Array.isArray(c) && Array.isArray(f) ? !Pr(c, f) : c !== f)
        return !1;
    }
  }
  return !0;
}
var X0 = (e) => e.type === "select-multiple", sE = (e) => ad(e) || ps(e), zc = (e) => al(e) && e.isConnected, Z0 = (e) => {
  for (const t in e)
    if (br(e[t]))
      return !0;
  return !1;
};
function cl(e, t = {}) {
  const r = Array.isArray(e);
  if (ht(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || ht(e[o]) && !Z0(e[o]) ? (t[o] = Array.isArray(e[o]) ? [] : {}, cl(e[o], t[o])) : Dt(e[o]) || (t[o] = !0);
  return t;
}
function J0(e, t, r) {
  const o = Array.isArray(e);
  if (ht(e) || o)
    for (const a in e)
      Array.isArray(e[a]) || ht(e[a]) && !Z0(e[a]) ? st(t) || ul(r[a]) ? r[a] = Array.isArray(e[a]) ? cl(e[a], []) : { ...cl(e[a]) } : J0(e[a], Dt(t) ? {} : t[a], r[a]) : r[a] = !Pr(e[a], t[a]);
  return r;
}
var $c = (e, t) => J0(e, t, cl(t)), ev = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: o }) => st(e) ? e : t ? e === "" ? NaN : e && +e : r && On(e) ? new Date(e) : o ? o(e) : e;
function Uc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return sd(t) ? t.files : ad(t) ? Q0(e.refs).value : X0(t) ? [...t.selectedOptions].map(({ value: r }) => r) : ps(t) ? Y0(e.refs).value : ev(st(t.value) ? e.ref.value : t.value, e);
}
var aE = (e, t, r, o) => {
  const a = {};
  for (const c of e) {
    const f = fe(t, c);
    f && Ge(a, c, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: a,
    shouldUseNativeValidation: o
  };
}, zo = (e) => st(e) ? e : ll(e) ? e.source : ht(e) ? ll(e.value) ? e.value.source : e.value : e, lE = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Rg(e, t, r) {
  const o = fe(e, r);
  if (o || od(r))
    return {
      error: o,
      name: r
    };
  const a = r.split(".");
  for (; a.length; ) {
    const c = a.join("."), f = fe(t, c), m = fe(e, c);
    if (f && !Array.isArray(f) && r !== c)
      return { name: r };
    if (m && m.type)
      return {
        name: c,
        error: m
      };
    a.pop();
  }
  return {
    name: r
  };
}
var uE = (e, t, r, o, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(t || e) : (r ? o.isOnBlur : a.isOnBlur) ? !e : (r ? o.isOnChange : a.isOnChange) ? e : !0, cE = (e, t) => !ms(fe(e, t)).length && St(e, t);
const fE = {
  mode: yn.onSubmit,
  reValidateMode: yn.onChange,
  shouldFocusError: !0
};
function dE(e = {}, t) {
  let r = {
    ...fE,
    ...e
  }, o = {
    submitCount: 0,
    isDirty: !1,
    isLoading: br(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, a = {}, c = ht(r.defaultValues) || ht(r.values) ? Er(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : Er(c), m = {
    action: !1,
    mount: !1,
    watch: !1
  }, y = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, g, x = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, h = {
    values: Bc(),
    array: Bc(),
    state: Bc()
  }, v = e.resetOptions && e.resetOptions.keepDirtyValues, w = kg(r.mode), S = kg(r.reValidateMode), k = r.criteriaMode === yn.all, T = (L) => (j) => {
    clearTimeout(x), x = setTimeout(L, j);
  }, A = async (L) => {
    if (u.isValid || L) {
      const j = r.resolver ? on((await J()).errors) : await Le(a, !0);
      j !== o.isValid && h.state.next({
        isValid: j
      });
    }
  }, O = (L) => u.isValidating && h.state.next({
    isValidating: L
  }), V = (L, j = [], z, ie, Z = !0, G = !0) => {
    if (ie && z) {
      if (m.action = !0, G && Array.isArray(fe(a, L))) {
        const de = z(fe(a, L), ie.argA, ie.argB);
        Z && Ge(a, L, de);
      }
      if (G && Array.isArray(fe(o.errors, L))) {
        const de = z(fe(o.errors, L), ie.argA, ie.argB);
        Z && Ge(o.errors, L, de), cE(o.errors, L);
      }
      if (u.touchedFields && G && Array.isArray(fe(o.touchedFields, L))) {
        const de = z(fe(o.touchedFields, L), ie.argA, ie.argB);
        Z && Ge(o.touchedFields, L, de);
      }
      u.dirtyFields && (o.dirtyFields = $c(c, f)), h.state.next({
        name: L,
        isDirty: le(L, j),
        dirtyFields: o.dirtyFields,
        errors: o.errors,
        isValid: o.isValid
      });
    } else
      Ge(f, L, j);
  }, $ = (L, j) => {
    Ge(o.errors, L, j), h.state.next({
      errors: o.errors
    });
  }, X = (L, j, z, ie) => {
    const Z = fe(a, L);
    if (Z) {
      const G = fe(f, L, st(z) ? fe(c, L) : z);
      st(G) || ie && ie.defaultChecked || j ? Ge(f, L, j ? G : Uc(Z._f)) : Ee(L, G), m.mount && A();
    }
  }, K = (L, j, z, ie, Z) => {
    let G = !1, de = !1;
    const je = {
      name: L
    };
    if (!z || ie) {
      u.isDirty && (de = o.isDirty, o.isDirty = je.isDirty = le(), G = de !== je.isDirty);
      const ze = Pr(fe(c, L), j);
      de = fe(o.dirtyFields, L), ze ? St(o.dirtyFields, L) : Ge(o.dirtyFields, L, !0), je.dirtyFields = o.dirtyFields, G = G || u.dirtyFields && de !== !ze;
    }
    if (z) {
      const ze = fe(o.touchedFields, L);
      ze || (Ge(o.touchedFields, L, z), je.touchedFields = o.touchedFields, G = G || u.touchedFields && ze !== z);
    }
    return G && Z && h.state.next(je), G ? je : {};
  }, te = (L, j, z, ie) => {
    const Z = fe(o.errors, L), G = u.isValid && Vi(j) && o.isValid !== j;
    if (e.delayError && z ? (g = T(() => $(L, z)), g(e.delayError)) : (clearTimeout(x), g = null, z ? Ge(o.errors, L, z) : St(o.errors, L)), (z ? !Pr(Z, z) : Z) || !on(ie) || G) {
      const de = {
        ...ie,
        ...G && Vi(j) ? { isValid: j } : {},
        errors: o.errors,
        name: L
      };
      o = {
        ...o,
        ...de
      }, h.state.next(de);
    }
    O(!1);
  }, J = async (L) => r.resolver(f, r.context, aE(L || y.mount, a, r.criteriaMode, r.shouldUseNativeValidation)), Ce = async (L) => {
    const { errors: j } = await J();
    if (L)
      for (const z of L) {
        const ie = fe(j, z);
        ie ? Ge(o.errors, z, ie) : St(o.errors, z);
      }
    else
      o.errors = j;
    return j;
  }, Le = async (L, j, z = {
    valid: !0
  }) => {
    for (const ie in L) {
      const Z = L[ie];
      if (Z) {
        const { _f: G, ...de } = Z;
        if (G) {
          const je = y.array.has(G.name), ze = await Pg(Z, f, k, r.shouldUseNativeValidation && !j, je);
          if (ze[G.name] && (z.valid = !1, j))
            break;
          !j && (fe(ze, G.name) ? je ? rE(o.errors, ze, G.name) : Ge(o.errors, G.name, ze[G.name]) : St(o.errors, G.name));
        }
        de && await Le(de, j, z);
      }
    }
    return z.valid;
  }, he = () => {
    for (const L of y.unMount) {
      const j = fe(a, L);
      j && (j._f.refs ? j._f.refs.every((z) => !zc(z)) : !zc(j._f.ref)) && _e(L);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, le = (L, j) => (L && j && Ge(f, L, j), !Pr(I(), c)), ae = (L, j, z) => tE(L, y, {
    ...m.mount ? f : st(j) ? c : On(L) ? { [L]: j } : j
  }, z, j), ge = (L) => ms(fe(m.mount ? f : c, L, e.shouldUnregister ? fe(c, L, []) : [])), Ee = (L, j, z = {}) => {
    const ie = fe(a, L);
    let Z = j;
    if (ie) {
      const G = ie._f;
      G && (!G.disabled && Ge(f, L, ev(j, G)), Z = al(G.ref) && Dt(j) ? "" : j, X0(G.ref) ? [...G.ref.options].forEach((de) => de.selected = Z.includes(de.value)) : G.refs ? ps(G.ref) ? G.refs.length > 1 ? G.refs.forEach((de) => (!de.defaultChecked || !de.disabled) && (de.checked = Array.isArray(Z) ? !!Z.find((je) => je === de.value) : Z === de.value)) : G.refs[0] && (G.refs[0].checked = !!Z) : G.refs.forEach((de) => de.checked = de.value === Z) : sd(G.ref) ? G.ref.value = "" : (G.ref.value = Z, G.ref.type || h.values.next({
        name: L,
        values: { ...f }
      })));
    }
    (z.shouldDirty || z.shouldTouch) && K(L, Z, z.shouldTouch, z.shouldDirty, !0), z.shouldValidate && b(L);
  }, Se = (L, j, z) => {
    for (const ie in j) {
      const Z = j[ie], G = `${L}.${ie}`, de = fe(a, G);
      (y.array.has(L) || !ul(Z) || de && !de._f) && !Fi(Z) ? Se(G, Z, z) : Ee(G, Z, z);
    }
  }, Q = (L, j, z = {}) => {
    const ie = fe(a, L), Z = y.array.has(L), G = Er(j);
    Ge(f, L, G), Z ? (h.array.next({
      name: L,
      values: { ...f }
    }), (u.isDirty || u.dirtyFields) && z.shouldDirty && h.state.next({
      name: L,
      dirtyFields: $c(c, f),
      isDirty: le(L, G)
    })) : ie && !ie._f && !Dt(G) ? Se(L, G, z) : Ee(L, G, z), Tg(L, y) && h.state.next({ ...o }), h.values.next({
      name: L,
      values: { ...f }
    }), !m.mount && t();
  }, ue = async (L) => {
    const j = L.target;
    let z = j.name, ie = !0;
    const Z = fe(a, z), G = () => j.type ? Uc(Z._f) : KC(L);
    if (Z) {
      let de, je;
      const ze = G(), Ft = L.type === Sg.BLUR || L.type === Sg.FOCUS_OUT, ni = !lE(Z._f) && !r.resolver && !fe(o.errors, z) && !Z._f.deps || uE(Ft, fe(o.touchedFields, z), o.isSubmitted, S, w), Vn = Tg(z, y, Ft);
      Ge(f, z, ze), Ft ? (Z._f.onBlur && Z._f.onBlur(L), g && g(0)) : Z._f.onChange && Z._f.onChange(L);
      const ln = K(z, ze, Ft, !1), ri = !on(ln) || Vn;
      if (!Ft && h.values.next({
        name: z,
        type: L.type,
        values: { ...f }
      }), ni)
        return u.isValid && A(), ri && h.state.next({ name: z, ...Vn ? {} : ln });
      if (!Ft && Vn && h.state.next({ ...o }), O(!0), r.resolver) {
        const { errors: Sn } = await J([z]), Bn = Rg(o.errors, a, z), Nr = Rg(Sn, a, Bn.name || z);
        de = Nr.error, z = Nr.name, je = on(Sn);
      } else
        de = (await Pg(Z, f, k, r.shouldUseNativeValidation))[z], ie = isNaN(ze) || ze === fe(f, z, ze), ie && (de ? je = !1 : u.isValid && (je = await Le(a, !0)));
      ie && (Z._f.deps && b(Z._f.deps), te(z, je, de, ln));
    }
  }, b = async (L, j = {}) => {
    let z, ie;
    const Z = Vc(L);
    if (O(!0), r.resolver) {
      const G = await Ce(st(L) ? L : Z);
      z = on(G), ie = L ? !Z.some((de) => fe(G, de)) : z;
    } else
      L ? (ie = (await Promise.all(Z.map(async (G) => {
        const de = fe(a, G);
        return await Le(de && de._f ? { [G]: de } : de);
      }))).every(Boolean), !(!ie && !o.isValid) && A()) : ie = z = await Le(a);
    return h.state.next({
      ...!On(L) || u.isValid && z !== o.isValid ? {} : { name: L },
      ...r.resolver || !L ? { isValid: z } : {},
      errors: o.errors,
      isValidating: !1
    }), j.shouldFocus && !ie && Sf(a, (G) => G && fe(o.errors, G), L ? Z : y.mount), ie;
  }, I = (L) => {
    const j = {
      ...c,
      ...m.mount ? f : {}
    };
    return st(L) ? j : On(L) ? fe(j, L) : L.map((z) => fe(j, z));
  }, ne = (L, j) => ({
    invalid: !!fe((j || o).errors, L),
    isDirty: !!fe((j || o).dirtyFields, L),
    isTouched: !!fe((j || o).touchedFields, L),
    error: fe((j || o).errors, L)
  }), ke = (L) => {
    L && Vc(L).forEach((j) => St(o.errors, j)), h.state.next({
      errors: L ? o.errors : {}
    });
  }, ve = (L, j, z) => {
    const ie = (fe(a, L, { _f: {} })._f || {}).ref;
    Ge(o.errors, L, {
      ...j,
      ref: ie
    }), h.state.next({
      name: L,
      errors: o.errors,
      isValid: !1
    }), z && z.shouldFocus && ie && ie.focus && ie.focus();
  }, Oe = (L, j) => br(L) ? h.values.subscribe({
    next: (z) => L(ae(void 0, j), z)
  }) : ae(L, j, !0), _e = (L, j = {}) => {
    for (const z of L ? Vc(L) : y.mount)
      y.mount.delete(z), y.array.delete(z), j.keepValue || (St(a, z), St(f, z)), !j.keepError && St(o.errors, z), !j.keepDirty && St(o.dirtyFields, z), !j.keepTouched && St(o.touchedFields, z), !r.shouldUnregister && !j.keepDefaultValue && St(c, z);
    h.values.next({
      values: { ...f }
    }), h.state.next({
      ...o,
      ...j.keepDirty ? { isDirty: le() } : {}
    }), !j.keepIsValid && A();
  }, Pe = (L, j = {}) => {
    let z = fe(a, L);
    const ie = Vi(j.disabled);
    return Ge(a, L, {
      ...z || {},
      _f: {
        ...z && z._f ? z._f : { ref: { name: L } },
        name: L,
        mount: !0,
        ...j
      }
    }), y.mount.add(L), z ? ie && Ge(f, L, j.disabled ? void 0 : fe(f, L, Uc(z._f))) : X(L, !0, j.value), {
      ...ie ? { disabled: j.disabled } : {},
      ...r.progressive ? {
        required: !!j.required,
        min: zo(j.min),
        max: zo(j.max),
        minLength: zo(j.minLength),
        maxLength: zo(j.maxLength),
        pattern: zo(j.pattern)
      } : {},
      name: L,
      onChange: ue,
      onBlur: ue,
      ref: (Z) => {
        if (Z) {
          Pe(L, j), z = fe(a, L);
          const G = st(Z.value) && Z.querySelectorAll && Z.querySelectorAll("input,select,textarea")[0] || Z, de = sE(G), je = z._f.refs || [];
          if (de ? je.find((ze) => ze === G) : G === z._f.ref)
            return;
          Ge(a, L, {
            _f: {
              ...z._f,
              ...de ? {
                refs: [
                  ...je.filter(zc),
                  G,
                  ...Array.isArray(fe(c, L)) ? [{}] : []
                ],
                ref: { type: G.type, name: L }
              } : { ref: G }
            }
          }), X(L, !1, void 0, G);
        } else
          z = fe(a, L, {}), z._f && (z._f.mount = !1), (r.shouldUnregister || j.shouldUnregister) && !(QC(y.array, L) && m.action) && y.unMount.add(L);
      }
    };
  }, Ae = () => r.shouldFocusError && Sf(a, (L) => L && fe(o.errors, L), y.mount), Ye = (L, j) => async (z) => {
    z && (z.preventDefault && z.preventDefault(), z.persist && z.persist());
    let ie = Er(f);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: Z, values: G } = await J();
      o.errors = Z, ie = G;
    } else
      await Le(a);
    St(o.errors, "root"), on(o.errors) ? (h.state.next({
      errors: {}
    }), await L(ie, z)) : (j && await j({ ...o.errors }, z), Ae(), setTimeout(Ae)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: on(o.errors),
      submitCount: o.submitCount + 1,
      errors: o.errors
    });
  }, xn = (L, j = {}) => {
    fe(a, L) && (st(j.defaultValue) ? Q(L, fe(c, L)) : (Q(L, j.defaultValue), Ge(c, L, j.defaultValue)), j.keepTouched || St(o.touchedFields, L), j.keepDirty || (St(o.dirtyFields, L), o.isDirty = j.defaultValue ? le(L, fe(c, L)) : le()), j.keepError || (St(o.errors, L), u.isValid && A()), h.state.next({ ...o }));
  }, ut = (L, j = {}) => {
    const z = L || c, ie = Er(z), Z = L && !on(L) ? ie : c;
    if (j.keepDefaultValues || (c = z), !j.keepValues) {
      if (j.keepDirtyValues || v)
        for (const G of y.mount)
          fe(o.dirtyFields, G) ? Ge(Z, G, fe(f, G)) : Q(G, fe(Z, G));
      else {
        if (id && st(L))
          for (const G of y.mount) {
            const de = fe(a, G);
            if (de && de._f) {
              const je = Array.isArray(de._f.refs) ? de._f.refs[0] : de._f.ref;
              if (al(je)) {
                const ze = je.closest("form");
                if (ze) {
                  ze.reset();
                  break;
                }
              }
            }
          }
        a = {};
      }
      f = e.shouldUnregister ? j.keepDefaultValues ? Er(c) : {} : Er(Z), h.array.next({
        values: { ...Z }
      }), h.values.next({
        values: { ...Z }
      });
    }
    y = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !m.mount && t(), m.mount = !u.isValid || !!j.keepIsValid, m.watch = !!e.shouldUnregister, h.state.next({
      submitCount: j.keepSubmitCount ? o.submitCount : 0,
      isDirty: j.keepDirty ? o.isDirty : !!(j.keepDefaultValues && !Pr(L, c)),
      isSubmitted: j.keepIsSubmitted ? o.isSubmitted : !1,
      dirtyFields: j.keepDirtyValues ? o.dirtyFields : j.keepDefaultValues && L ? $c(c, L) : {},
      touchedFields: j.keepTouched ? o.touchedFields : {},
      errors: j.keepErrors ? o.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, wn = (L, j) => ut(br(L) ? L(f) : L, j);
  return {
    control: {
      register: Pe,
      unregister: _e,
      getFieldState: ne,
      handleSubmit: Ye,
      setError: ve,
      _executeSchema: J,
      _getWatch: ae,
      _getDirty: le,
      _updateValid: A,
      _removeUnmounted: he,
      _updateFieldArray: V,
      _getFieldArray: ge,
      _reset: ut,
      _resetDefaultValues: () => br(r.defaultValues) && r.defaultValues().then((L) => {
        wn(L, r.resetOptions), h.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (L) => {
        o = {
          ...o,
          ...L
        };
      },
      _subjects: h,
      _proxyFormState: u,
      get _fields() {
        return a;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return m;
      },
      set _state(L) {
        m = L;
      },
      get _defaultValues() {
        return c;
      },
      get _names() {
        return y;
      },
      set _names(L) {
        y = L;
      },
      get _formState() {
        return o;
      },
      set _formState(L) {
        o = L;
      },
      get _options() {
        return r;
      },
      set _options(L) {
        r = {
          ...r,
          ...L
        };
      }
    },
    trigger: b,
    register: Pe,
    handleSubmit: Ye,
    watch: Oe,
    setValue: Q,
    getValues: I,
    reset: wn,
    resetField: xn,
    clearErrors: ke,
    unregister: _e,
    setError: ve,
    setFocus: (L, j = {}) => {
      const z = fe(a, L), ie = z && z._f;
      if (ie) {
        const Z = ie.refs ? ie.refs[0] : ie.ref;
        Z.focus && (Z.focus(), j.shouldSelect && Z.select());
      }
    },
    getFieldState: ne
  };
}
function hE(e = {}) {
  const t = vn.useRef(), [r, o] = vn.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: br(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: br(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...dE(e, () => o((c) => ({ ...c }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, eE({
    subject: a._subjects.state,
    next: (c) => {
      JC(c, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), vn.useEffect(() => {
    e.values && (!Pr(e.values, a._defaultValues) || !Pr(e.values, a._formValues)) ? a._reset(e.values, a._options.resetOptions) : a._resetDefaultValues();
  }, [e.values, a]), vn.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = ZC(r, a), t.current;
}
let Oa;
const pE = new Uint8Array(16);
function mE() {
  if (!Oa && (Oa = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Oa))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Oa(pE);
}
const _t = [];
for (let e = 0; e < 256; ++e)
  _t.push((e + 256).toString(16).slice(1));
function gE(e, t = 0) {
  return (_t[e[t + 0]] + _t[e[t + 1]] + _t[e[t + 2]] + _t[e[t + 3]] + "-" + _t[e[t + 4]] + _t[e[t + 5]] + "-" + _t[e[t + 6]] + _t[e[t + 7]] + "-" + _t[e[t + 8]] + _t[e[t + 9]] + "-" + _t[e[t + 10]] + _t[e[t + 11]] + _t[e[t + 12]] + _t[e[t + 13]] + _t[e[t + 14]] + _t[e[t + 15]]).toLowerCase();
}
const yE = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Og = {
  randomUUID: yE
};
function vE(e, t, r) {
  if (Og.randomUUID && !t && !e)
    return Og.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || mE)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
    r = r || 0;
    for (let a = 0; a < 16; ++a)
      t[r + a] = o[a];
    return t;
  }
  return gE(o);
}
function tv() {
  return vE();
}
function La(e, t, r) {
  const [o, a] = M.useState(t), c = (f) => {
    a(() => f), localStorage.setItem(e, f);
  };
  return M.useEffect(() => {
    const f = localStorage.getItem(e);
    t ? (a(() => t), localStorage.setItem(e, t)) : f ? a(() => f) : r && (localStorage.setItem(e, r), a(() => r));
  }, []), [o, c];
}
const nv = M.createContext({}), xE = ({ children: e }) => {
  const { user_id: t, email: r, name: o, phone_number: a } = iw(), [c] = La("zap_desk:user_id", t, tv()), [f, m] = La("zap_desk:email", r), [y, g] = La("zap_desk:name", o), [x, u] = La("zap_desk:phone", a), h = M.useMemo(() => !!(f && y), [f, y]), v = async ({ email: w, name: S, phone: k }) => {
    m(w), g(S), k && u(k);
  };
  return c ? /* @__PURE__ */ E.jsx(
    nv.Provider,
    {
      value: {
        remoteId: c,
        remoteEmail: f,
        remoteName: y,
        remotePhone: x,
        isAuth: h,
        authenticate: v
      },
      children: e
    }
  ) : /* @__PURE__ */ E.jsx(E.Fragment, {});
}, Pl = () => M.useContext(nv), wE = () => {
  const { authenticate: e } = Pl(), { go: t } = In(), r = hE({
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    }
  }), o = async (a) => {
    console.log("on Submit", a), await e(a), t("home");
  };
  return /* @__PURE__ */ E.jsxs(WC, { children: [
    /* @__PURE__ */ E.jsx(qC, {}),
    /* @__PURE__ */ E.jsx(GC, {}),
    /* @__PURE__ */ E.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "headline", children: [
        /* @__PURE__ */ E.jsx("span", { className: "title", children: "Olá 👋🏽" }),
        /* @__PURE__ */ E.jsx("span", { className: "subtitle", children: "Estamos aqui para ajudar" })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "auth-container", children: [
        /* @__PURE__ */ E.jsx("div", { className: "auth-header", children: /* @__PURE__ */ E.jsx("span", { className: "title", children: "Antes de começar, precisamos saber algumas coisas sobre você" }) }),
        /* @__PURE__ */ E.jsxs(
          "form",
          {
            className: "auth-content",
            onSubmit: r.handleSubmit(o),
            children: [
              /* @__PURE__ */ E.jsxs("div", { className: "input-container", children: [
                /* @__PURE__ */ E.jsx("label", { className: "label", children: "Nome" }),
                /* @__PURE__ */ E.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Digite seu nome",
                    required: !0,
                    ...r.register("name", { required: !0, maxLength: 80 })
                  }
                )
              ] }),
              /* @__PURE__ */ E.jsxs("div", { className: "input-container", children: [
                /* @__PURE__ */ E.jsx("label", { className: "label", children: "E-mail" }),
                /* @__PURE__ */ E.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "Digite seu e-mail",
                    required: !0,
                    ...r.register("email", { required: !0 })
                  }
                )
              ] }),
              /* @__PURE__ */ E.jsxs("div", { className: "input-container", children: [
                /* @__PURE__ */ E.jsx("label", { className: "label", children: "Telefone" }),
                /* @__PURE__ */ E.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Digite seu Telefone",
                    ...r.register("phone")
                  }
                )
              ] }),
              /* @__PURE__ */ E.jsx("div", { className: "button-container", children: /* @__PURE__ */ E.jsx("button", { className: "button-submit", children: "Iniciar Conversa" }) })
            ]
          }
        )
      ] })
    ] })
  ] });
}, Lg = ({ message: e }) => /* @__PURE__ */ E.jsx("p", { className: "message-content", children: e.text });
var _E = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#", "$", "%", "*", "+", ",", "-", ".", ":", ";", "=", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"], qo = (e) => {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r], a = _E.indexOf(o);
    t = t * 83 + a;
  }
  return t;
}, Hc = (e) => {
  let t = e / 255;
  return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}, Wc = (e) => {
  let t = Math.max(0, Math.min(1, e));
  return t <= 31308e-7 ? Math.trunc(t * 12.92 * 255 + 0.5) : Math.trunc((1.055 * Math.pow(t, 0.4166666666666667) - 0.055) * 255 + 0.5);
}, SE = (e) => e < 0 ? -1 : 1, qc = (e, t) => SE(e) * Math.pow(Math.abs(e), t), Mg = class extends Error {
  constructor(e) {
    super(e), this.name = "ValidationError", this.message = e;
  }
}, kE = (e) => {
  if (!e || e.length < 6)
    throw new Mg("The blurhash string must be at least 6 characters");
  let t = qo(e[0]), r = Math.floor(t / 9) + 1, o = t % 9 + 1;
  if (e.length !== 4 + 2 * o * r)
    throw new Mg(`blurhash length mismatch: length is ${e.length} but it should be ${4 + 2 * o * r}`);
}, TE = (e) => {
  let t = e >> 16, r = e >> 8 & 255, o = e & 255;
  return [Hc(t), Hc(r), Hc(o)];
}, CE = (e, t) => {
  let r = Math.floor(e / 361), o = Math.floor(e / 19) % 19, a = e % 19;
  return [qc((r - 9) / 9, 2) * t, qc((o - 9) / 9, 2) * t, qc((a - 9) / 9, 2) * t];
}, EE = (e, t, r, o) => {
  kE(e), o = o | 1;
  let a = qo(e[0]), c = Math.floor(a / 9) + 1, f = a % 9 + 1, m = (qo(e[1]) + 1) / 166, y = new Array(f * c);
  for (let u = 0; u < y.length; u++)
    if (u === 0) {
      let h = qo(e.substring(2, 6));
      y[u] = TE(h);
    } else {
      let h = qo(e.substring(4 + u * 2, 6 + u * 2));
      y[u] = CE(h, m * o);
    }
  let g = t * 4, x = new Uint8ClampedArray(g * r);
  for (let u = 0; u < r; u++)
    for (let h = 0; h < t; h++) {
      let v = 0, w = 0, S = 0;
      for (let O = 0; O < c; O++)
        for (let V = 0; V < f; V++) {
          let $ = Math.cos(Math.PI * h * V / t) * Math.cos(Math.PI * u * O / r), X = y[V + O * f];
          v += X[0] * $, w += X[1] * $, S += X[2] * $;
        }
      let k = Wc(v), T = Wc(w), A = Wc(S);
      x[4 * h + 0 + u * g] = k, x[4 * h + 1 + u * g] = T, x[4 * h + 2 + u * g] = A, x[4 * h + 3 + u * g] = 255;
    }
  return x;
}, AE = EE, bE = Object.defineProperty, PE = Object.defineProperties, RE = Object.getOwnPropertyDescriptors, fl = Object.getOwnPropertySymbols, rv = Object.prototype.hasOwnProperty, iv = Object.prototype.propertyIsEnumerable, Dg = (e, t, r) => t in e ? bE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, kf = (e, t) => {
  for (var r in t || (t = {}))
    rv.call(t, r) && Dg(e, r, t[r]);
  if (fl)
    for (var r of fl(t))
      iv.call(t, r) && Dg(e, r, t[r]);
  return e;
}, Tf = (e, t) => PE(e, RE(t)), ov = (e, t) => {
  var r = {};
  for (var o in e)
    rv.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && fl)
    for (var o of fl(e))
      t.indexOf(o) < 0 && iv.call(e, o) && (r[o] = e[o]);
  return r;
}, sv = class extends M.PureComponent {
  constructor() {
    super(...arguments), this.canvas = null, this.handleRef = (e) => {
      this.canvas = e, this.draw();
    }, this.draw = () => {
      let { hash: e, height: t, punch: r, width: o } = this.props;
      if (this.canvas) {
        let a = AE(e, o, t, r), c = this.canvas.getContext("2d"), f = c.createImageData(o, t);
        f.data.set(a), c.putImageData(f, 0, 0);
      }
    };
  }
  componentDidUpdate() {
    this.draw();
  }
  render() {
    let e = this.props, { hash: t, height: r, width: o } = e, a = ov(e, ["hash", "height", "width"]);
    return M.createElement("canvas", Tf(kf({}, a), { height: r, width: o, ref: this.handleRef }));
  }
};
sv.defaultProps = { height: 128, width: 128 };
var OE = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: "100%", height: "100%" }, ld = class extends M.PureComponent {
  componentDidUpdate() {
    if (this.props.resolutionX <= 0)
      throw new Error("resolutionX must be larger than zero");
    if (this.props.resolutionY <= 0)
      throw new Error("resolutionY must be larger than zero");
  }
  render() {
    let e = this.props, { hash: t, height: r, width: o, punch: a, resolutionX: c, resolutionY: f, style: m } = e, y = ov(e, ["hash", "height", "width", "punch", "resolutionX", "resolutionY", "style"]);
    return M.createElement("div", Tf(kf({}, y), { style: Tf(kf({ display: "inline-block", height: r, width: o }, m), { position: "relative" }) }), M.createElement(sv, { hash: t, height: f, width: c, punch: a, style: OE }));
  }
};
ld.defaultProps = { height: 128, width: 128, resolutionX: 32, resolutionY: 32 };
function av(e) {
  const [t, r] = M.useMemo(() => {
    if (!e || !e.width || !e.height)
      return [0, 0];
    const o = (e == null ? void 0 : e.maxWidth) || 300, a = (e == null ? void 0 : e.maxHeight) || 800, c = Math.min(o / e.width, a / e.height);
    return [e.width * c, e.height * c];
  }, [e]);
  return {
    width: t,
    height: r
  };
}
function ud(e, t, r = 0) {
  M.useEffect(() => {
    const o = new IntersectionObserver((a) => {
      a[0].isIntersecting && setTimeout(() => {
        t();
      }, r);
    });
    return o.observe(e.current), () => {
      o.disconnect();
    };
  }, []);
}
const LE = ({ message: e }) => {
  const { api_url: t } = Nt(), { file: r } = e, o = M.useRef(null), [a, c] = M.useState(void 0), f = `${t}/api/messages/${e.id}/files/${e.id}.png`, { width: m, height: y } = av({
    width: r == null ? void 0 : r.width,
    height: r == null ? void 0 : r.height,
    maxWidth: 240,
    maxHeight: 500
  }), g = async () => {
    if (!r)
      return;
    const h = await (await fetch(f)).blob(), v = URL.createObjectURL(h);
    c(() => v);
  };
  ud(
    o,
    async () => {
      a || await g();
    },
    500
  ), M.useEffect(() => () => {
    a && URL.revokeObjectURL(a);
  }, []);
  const x = M.useMemo(() => {
    if (r)
      return r.blurhash;
  }, [r]);
  return /* @__PURE__ */ E.jsxs("div", { ref: o, className: "image-container", children: [
    a && /* @__PURE__ */ E.jsx(
      "img",
      {
        className: "message-image",
        src: a,
        style: {
          width: m,
          height: y
        }
      }
    ),
    !a && x && /* @__PURE__ */ E.jsx(ld, { hash: x, style: { width: m, height: y } }),
    e.text ? /* @__PURE__ */ E.jsx("p", { children: e.text }) : null
  ] });
}, Ng = ({ message: e }) => {
  const { api_url: t } = Nt(), r = M.useRef(null), o = `${t}/api/messages/${e.id}/files/${e.id}.mp3`, [a, c] = M.useState(), f = async () => {
    c(() => o);
  };
  return ud(
    r,
    async () => {
      a || await f();
    },
    500
  ), M.useEffect(() => () => {
    c(() => {
    });
  }, []), /* @__PURE__ */ E.jsxs("div", { ref: r, className: "message-audio", children: [
    /* @__PURE__ */ E.jsx("p", { children: e.text }),
    /* @__PURE__ */ E.jsx("audio", { controls: !0, src: a })
  ] });
};
function lv(e) {
  const { agents: t } = Nt();
  return M.useMemo(() => {
    const o = t.find((a) => a.id === e);
    return o || {
      id: "default_bot",
      name: "BOT"
      // picture_url:
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjijpU_i32lxHLhz7WX3bfIxAVweaoT8WSQ&usqp=CAU",
    };
  }, [t, e]);
}
const ME = Te(Ui.div)`
  display: flex;
  flex-direction: row;
  padding-left: ${(e) => e.fromMe ? "40px" : "0"};
  padding-right: ${(e) => e.fromMe ? "0" : "40px"};
  justify-content: ${(e) => e.fromMe ? "flex-end" : "flex-start"};
  width: 100%;
  gap: 4px;
  align-items: start;

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    padding: 2px;
    background: ${(e) => e.theme.colors.secondary};
    flex-shrink: 0;
    margin-top: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      border-bottom-left-radius: 0;
    }

    svg {
      font-size: 18px;
      fill: white;
      align-self: center;
      justify-self: center;
      text-align: center;
    }
  }

  .message-container {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    padding: 4px;
    max-width: 100%;
    border-radius: 10px;
    border-bottom-right-radius: ${(e) => e.fromMe ? 0 : "10px"};
    border-bottom-left-radius: ${(e) => e.fromMe ? "10px" : 0};
    /* box-shadow: 0 10px 10px -7px rgba(0, 0, 0, 0.5); */
    background-color: ${(e) => e.fromMe ? `${e.theme.colors.secondary}` : "#eee"};
    color: ${(e) => e.fromMe ? "white" : "black"};
    /* padding: 4px; */
    border: 1px solid
      ${(e) => e.fromMe ? e.theme.colors.secondary : "#ccc"};

    /* img {
      max-width: 100%;
    } */

    .message-image,
    .image-container canvas,
    .message-video canvas,
    .message-video .message-video-player {
      border-radius: 8px;
    }

    .message-content {
      padding: 6px 12px;
    }

    .message-document {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      gap: 30px;
      padding: 0 10px;
      color: ${(e) => e.fromMe ? "white" : "black"};

      .message-document-details {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 4px 0;

        .message-document-title {
          font-size: 14px;
          font-weight: 500;
        }

        .message-document-subtitle {
          font-size: 12px;
          color: ${(e) => e.fromMe ? "rgba(255,255,255,.6)" : "#666"};
        }
      }

      .message-document-download {
        font-size: 12px;
        color: ${(e) => e.fromMe ? "white" : e.theme.colors.primary};
        text-decoration: none;
        font-weight: bold;
        padding: 10px 20px;

        &:hover {
          background-color: ${(e) => e.fromMe ? "white" : e.theme.colors.primary};
          color: ${(e) => e.fromMe ? e.theme.colors.primary : "white"};
          border-radius: 4px;
        }
      }
    }
  }

  .message-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: start;

      button {
        padding: 6px 16px;
        border-radius: 20px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 12px;

        &:not(:disabled):hover {
          background-color: ${(e) => e.theme.colors.primary};
          border: 1px solid ${(e) => e.theme.colors.primary};
          color: #fff;
        }

        &:disabled {
          opacity: 0.5;
          color: black;
          cursor: not-allowed;
        }
      }
    }
  }
`;
function uv(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: DE } = Object.prototype, { getPrototypeOf: cd } = Object, Rl = ((e) => (t) => {
  const r = DE.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), jn = (e) => (e = e.toLowerCase(), (t) => Rl(t) === e), Ol = (e) => (t) => typeof t === e, { isArray: Gi } = Array, as = Ol("undefined");
function NE(e) {
  return e !== null && !as(e) && e.constructor !== null && !as(e.constructor) && an(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const cv = jn("ArrayBuffer");
function FE(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && cv(e.buffer), t;
}
const IE = Ol("string"), an = Ol("function"), fv = Ol("number"), Ll = (e) => e !== null && typeof e == "object", jE = (e) => e === !0 || e === !1, $a = (e) => {
  if (Rl(e) !== "object")
    return !1;
  const t = cd(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, VE = jn("Date"), BE = jn("File"), zE = jn("Blob"), $E = jn("FileList"), UE = (e) => Ll(e) && an(e.pipe), HE = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || an(e.append) && ((t = Rl(e)) === "formdata" || // detect form-data instance
  t === "object" && an(e.toString) && e.toString() === "[object FormData]"));
}, WE = jn("URLSearchParams"), qE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function gs(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, a;
  if (typeof e != "object" && (e = [e]), Gi(e))
    for (o = 0, a = e.length; o < a; o++)
      t.call(null, e[o], o, e);
  else {
    const c = r ? Object.getOwnPropertyNames(e) : Object.keys(e), f = c.length;
    let m;
    for (o = 0; o < f; o++)
      m = c[o], t.call(null, e[m], m, e);
  }
}
function dv(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, a;
  for (; o-- > 0; )
    if (a = r[o], t === a.toLowerCase())
      return a;
  return null;
}
const hv = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), pv = (e) => !as(e) && e !== hv;
function Cf() {
  const { caseless: e } = pv(this) && this || {}, t = {}, r = (o, a) => {
    const c = e && dv(t, a) || a;
    $a(t[c]) && $a(o) ? t[c] = Cf(t[c], o) : $a(o) ? t[c] = Cf({}, o) : Gi(o) ? t[c] = o.slice() : t[c] = o;
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && gs(arguments[o], r);
  return t;
}
const GE = (e, t, r, { allOwnKeys: o } = {}) => (gs(t, (a, c) => {
  r && an(a) ? e[c] = uv(a, r) : e[c] = a;
}, { allOwnKeys: o }), e), KE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), YE = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, QE = (e, t, r, o) => {
  let a, c, f;
  const m = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), c = a.length; c-- > 0; )
      f = a[c], (!o || o(f, e, t)) && !m[f] && (t[f] = e[f], m[f] = !0);
    e = r !== !1 && cd(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, XE = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, ZE = (e) => {
  if (!e)
    return null;
  if (Gi(e))
    return e;
  let t = e.length;
  if (!fv(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, JE = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && cd(Uint8Array)), eA = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = o.next()) && !a.done; ) {
    const c = a.value;
    t.call(e, c[0], c[1]);
  }
}, tA = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, nA = jn("HTMLFormElement"), rA = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, a) {
    return o.toUpperCase() + a;
  }
), Fg = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), iA = jn("RegExp"), mv = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  gs(r, (a, c) => {
    t(a, c, e) !== !1 && (o[c] = a);
  }), Object.defineProperties(e, o);
}, oA = (e) => {
  mv(e, (t, r) => {
    if (an(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (an(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, sA = (e, t) => {
  const r = {}, o = (a) => {
    a.forEach((c) => {
      r[c] = !0;
    });
  };
  return Gi(e) ? o(e) : o(String(e).split(t)), r;
}, aA = () => {
}, lA = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Gc = "abcdefghijklmnopqrstuvwxyz", Ig = "0123456789", gv = {
  DIGIT: Ig,
  ALPHA: Gc,
  ALPHA_DIGIT: Gc + Gc.toUpperCase() + Ig
}, uA = (e = 16, t = gv.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function cA(e) {
  return !!(e && an(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fA = (e) => {
  const t = new Array(10), r = (o, a) => {
    if (Ll(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[a] = o;
        const c = Gi(o) ? [] : {};
        return gs(o, (f, m) => {
          const y = r(f, a + 1);
          !as(y) && (c[m] = y);
        }), t[a] = void 0, c;
      }
    }
    return o;
  };
  return r(e, 0);
}, dA = jn("AsyncFunction"), hA = (e) => e && (Ll(e) || an(e)) && an(e.then) && an(e.catch), B = {
  isArray: Gi,
  isArrayBuffer: cv,
  isBuffer: NE,
  isFormData: HE,
  isArrayBufferView: FE,
  isString: IE,
  isNumber: fv,
  isBoolean: jE,
  isObject: Ll,
  isPlainObject: $a,
  isUndefined: as,
  isDate: VE,
  isFile: BE,
  isBlob: zE,
  isRegExp: iA,
  isFunction: an,
  isStream: UE,
  isURLSearchParams: WE,
  isTypedArray: JE,
  isFileList: $E,
  forEach: gs,
  merge: Cf,
  extend: GE,
  trim: qE,
  stripBOM: KE,
  inherits: YE,
  toFlatObject: QE,
  kindOf: Rl,
  kindOfTest: jn,
  endsWith: XE,
  toArray: ZE,
  forEachEntry: eA,
  matchAll: tA,
  isHTMLForm: nA,
  hasOwnProperty: Fg,
  hasOwnProp: Fg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: mv,
  freezeMethods: oA,
  toObjectSet: sA,
  toCamelCase: rA,
  noop: aA,
  toFiniteNumber: lA,
  findKey: dv,
  global: hv,
  isContextDefined: pv,
  ALPHABET: gv,
  generateString: uA,
  isSpecCompliantForm: cA,
  toJSONObject: fA,
  isAsyncFn: dA,
  isThenable: hA
};
function De(e, t, r, o, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), a && (this.response = a);
}
B.inherits(De, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const yv = De.prototype, vv = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  vv[e] = { value: e };
});
Object.defineProperties(De, vv);
Object.defineProperty(yv, "isAxiosError", { value: !0 });
De.from = (e, t, r, o, a, c) => {
  const f = Object.create(yv);
  return B.toFlatObject(e, f, function(y) {
    return y !== Error.prototype;
  }, (m) => m !== "isAxiosError"), De.call(f, e.message, t, r, o, a), f.cause = e, f.name = e.name, c && Object.assign(f, c), f;
};
const pA = null;
function Ef(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function xv(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function jg(e, t, r) {
  return e ? e.concat(t).map(function(a, c) {
    return a = xv(a), !r && c ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function mA(e) {
  return B.isArray(e) && !e.some(Ef);
}
const gA = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ml(e, t, r) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = B.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, k) {
    return !B.isUndefined(k[S]);
  });
  const o = r.metaTokens, a = r.visitor || x, c = r.dots, f = r.indexes, y = (r.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
  if (!B.isFunction(a))
    throw new TypeError("visitor must be a function");
  function g(w) {
    if (w === null)
      return "";
    if (B.isDate(w))
      return w.toISOString();
    if (!y && B.isBlob(w))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(w) || B.isTypedArray(w) ? y && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function x(w, S, k) {
    let T = w;
    if (w && !k && typeof w == "object") {
      if (B.endsWith(S, "{}"))
        S = o ? S : S.slice(0, -2), w = JSON.stringify(w);
      else if (B.isArray(w) && mA(w) || (B.isFileList(w) || B.endsWith(S, "[]")) && (T = B.toArray(w)))
        return S = xv(S), T.forEach(function(O, V) {
          !(B.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? jg([S], V, c) : f === null ? S : S + "[]",
            g(O)
          );
        }), !1;
    }
    return Ef(w) ? !0 : (t.append(jg(k, S, c), g(w)), !1);
  }
  const u = [], h = Object.assign(gA, {
    defaultVisitor: x,
    convertValue: g,
    isVisitable: Ef
  });
  function v(w, S) {
    if (!B.isUndefined(w)) {
      if (u.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      u.push(w), B.forEach(w, function(T, A) {
        (!(B.isUndefined(T) || T === null) && a.call(
          t,
          T,
          B.isString(A) ? A.trim() : A,
          S,
          h
        )) === !0 && v(T, S ? S.concat(A) : [A]);
      }), u.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function Vg(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function fd(e, t) {
  this._pairs = [], e && Ml(e, this, t);
}
const wv = fd.prototype;
wv.append = function(t, r) {
  this._pairs.push([t, r]);
};
wv.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, Vg);
  } : Vg;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function yA(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function _v(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || yA, a = r && r.serialize;
  let c;
  if (a ? c = a(t, r) : c = B.isURLSearchParams(t) ? t.toString() : new fd(t, r).toString(o), c) {
    const f = e.indexOf("#");
    f !== -1 && (e = e.slice(0, f)), e += (e.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return e;
}
class vA {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    B.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const Bg = vA, Sv = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xA = typeof URLSearchParams < "u" ? URLSearchParams : fd, wA = typeof FormData < "u" ? FormData : null, _A = typeof Blob < "u" ? Blob : null, SA = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), kA = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ln = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xA,
    FormData: wA,
    Blob: _A
  },
  isStandardBrowserEnv: SA,
  isStandardBrowserWebWorkerEnv: kA,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function TA(e, t) {
  return Ml(e, new Ln.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, a, c) {
      return Ln.isNode && B.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function CA(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function EA(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const a = r.length;
  let c;
  for (o = 0; o < a; o++)
    c = r[o], t[c] = e[c];
  return t;
}
function kv(e) {
  function t(r, o, a, c) {
    let f = r[c++];
    const m = Number.isFinite(+f), y = c >= r.length;
    return f = !f && B.isArray(a) ? a.length : f, y ? (B.hasOwnProp(a, f) ? a[f] = [a[f], o] : a[f] = o, !m) : ((!a[f] || !B.isObject(a[f])) && (a[f] = []), t(r, o, a[f], c) && B.isArray(a[f]) && (a[f] = EA(a[f])), !m);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const r = {};
    return B.forEachEntry(e, (o, a) => {
      t(CA(o), a, r, 0);
    }), r;
  }
  return null;
}
const AA = {
  "Content-Type": void 0
};
function bA(e, t, r) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const Dl = {
  transitional: Sv,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", a = o.indexOf("application/json") > -1, c = B.isObject(t);
    if (c && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return a && a ? JSON.stringify(kv(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let m;
    if (c) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return TA(t, this.formSerializer).toString();
      if ((m = B.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return Ml(
          m ? { "files[]": t } : t,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return c || a ? (r.setContentType("application/json", !1), bA(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Dl.transitional, o = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (t && B.isString(t) && (o && !this.responseType || a)) {
      const f = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (m) {
        if (f)
          throw m.name === "SyntaxError" ? De.from(m, De.ERR_BAD_RESPONSE, this, null, this.response) : m;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ln.classes.FormData,
    Blob: Ln.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
B.forEach(["delete", "get", "head"], function(t) {
  Dl.headers[t] = {};
});
B.forEach(["post", "put", "patch"], function(t) {
  Dl.headers[t] = B.merge(AA);
});
const dd = Dl, PA = B.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), RA = (e) => {
  const t = {};
  let r, o, a;
  return e && e.split(`
`).forEach(function(f) {
    a = f.indexOf(":"), r = f.substring(0, a).trim().toLowerCase(), o = f.substring(a + 1).trim(), !(!r || t[r] && PA[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, zg = Symbol("internals");
function $o(e) {
  return e && String(e).trim().toLowerCase();
}
function Ua(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Ua) : String(e);
}
function OA(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const LA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Kc(e, t, r, o, a) {
  if (B.isFunction(o))
    return o.call(this, t, r);
  if (a && (t = r), !!B.isString(t)) {
    if (B.isString(o))
      return t.indexOf(o) !== -1;
    if (B.isRegExp(o))
      return o.test(t);
  }
}
function MA(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function DA(e, t) {
  const r = B.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(a, c, f) {
        return this[o].call(this, t, a, c, f);
      },
      configurable: !0
    });
  });
}
class Nl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const a = this;
    function c(m, y, g) {
      const x = $o(y);
      if (!x)
        throw new Error("header name must be a non-empty string");
      const u = B.findKey(a, x);
      (!u || a[u] === void 0 || g === !0 || g === void 0 && a[u] !== !1) && (a[u || y] = Ua(m));
    }
    const f = (m, y) => B.forEach(m, (g, x) => c(g, x, y));
    return B.isPlainObject(t) || t instanceof this.constructor ? f(t, r) : B.isString(t) && (t = t.trim()) && !LA(t) ? f(RA(t), r) : t != null && c(r, t, o), this;
  }
  get(t, r) {
    if (t = $o(t), t) {
      const o = B.findKey(this, t);
      if (o) {
        const a = this[o];
        if (!r)
          return a;
        if (r === !0)
          return OA(a);
        if (B.isFunction(r))
          return r.call(this, a, o);
        if (B.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = $o(t), t) {
      const o = B.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || Kc(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let a = !1;
    function c(f) {
      if (f = $o(f), f) {
        const m = B.findKey(o, f);
        m && (!r || Kc(o, o[m], m, r)) && (delete o[m], a = !0);
      }
    }
    return B.isArray(t) ? t.forEach(c) : c(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, a = !1;
    for (; o--; ) {
      const c = r[o];
      (!t || Kc(this, this[c], c, t, !0)) && (delete this[c], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, o = {};
    return B.forEach(this, (a, c) => {
      const f = B.findKey(o, c);
      if (f) {
        r[f] = Ua(a), delete r[c];
        return;
      }
      const m = t ? MA(c) : String(c).trim();
      m !== c && delete r[c], r[m] = Ua(a), o[m] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return B.forEach(this, (o, a) => {
      o != null && o !== !1 && (r[a] = t && B.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const o = new this(t);
    return r.forEach((a) => o.set(a)), o;
  }
  static accessor(t) {
    const o = (this[zg] = this[zg] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function c(f) {
      const m = $o(f);
      o[m] || (DA(a, f), o[m] = !0);
    }
    return B.isArray(t) ? t.forEach(c) : c(t), this;
  }
}
Nl.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.freezeMethods(Nl.prototype);
B.freezeMethods(Nl);
const tr = Nl;
function Yc(e, t) {
  const r = this || dd, o = t || r, a = tr.from(o.headers);
  let c = o.data;
  return B.forEach(e, function(m) {
    c = m.call(r, c, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), c;
}
function Tv(e) {
  return !!(e && e.__CANCEL__);
}
function ys(e, t, r) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, r), this.name = "CanceledError";
}
B.inherits(ys, De, {
  __CANCEL__: !0
});
function NA(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new De(
    "Request failed with status code " + r.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const FA = Ln.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, o, a, c, f, m) {
        const y = [];
        y.push(r + "=" + encodeURIComponent(o)), B.isNumber(a) && y.push("expires=" + new Date(a).toGMTString()), B.isString(c) && y.push("path=" + c), B.isString(f) && y.push("domain=" + f), m === !0 && y.push("secure"), document.cookie = y.join("; ");
      },
      read: function(r) {
        const o = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return o ? decodeURIComponent(o[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function IA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jA(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Cv(e, t) {
  return e && !IA(t) ? jA(e, t) : t;
}
const VA = Ln.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let o;
    function a(c) {
      let f = c;
      return t && (r.setAttribute("href", f), f = r.href), r.setAttribute("href", f), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return o = a(window.location.href), function(f) {
      const m = B.isString(f) ? a(f) : f;
      return m.protocol === o.protocol && m.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function BA(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function zA(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let a = 0, c = 0, f;
  return t = t !== void 0 ? t : 1e3, function(y) {
    const g = Date.now(), x = o[c];
    f || (f = g), r[a] = y, o[a] = g;
    let u = c, h = 0;
    for (; u !== a; )
      h += r[u++], u = u % e;
    if (a = (a + 1) % e, a === c && (c = (c + 1) % e), g - f < t)
      return;
    const v = x && g - x;
    return v ? Math.round(h * 1e3 / v) : void 0;
  };
}
function $g(e, t) {
  let r = 0;
  const o = zA(50, 250);
  return (a) => {
    const c = a.loaded, f = a.lengthComputable ? a.total : void 0, m = c - r, y = o(m), g = c <= f;
    r = c;
    const x = {
      loaded: c,
      total: f,
      progress: f ? c / f : void 0,
      bytes: m,
      rate: y || void 0,
      estimated: y && f && g ? (f - c) / y : void 0,
      event: a
    };
    x[t ? "download" : "upload"] = !0, e(x);
  };
}
const $A = typeof XMLHttpRequest < "u", UA = $A && function(e) {
  return new Promise(function(r, o) {
    let a = e.data;
    const c = tr.from(e.headers).normalize(), f = e.responseType;
    let m;
    function y() {
      e.cancelToken && e.cancelToken.unsubscribe(m), e.signal && e.signal.removeEventListener("abort", m);
    }
    B.isFormData(a) && (Ln.isStandardBrowserEnv || Ln.isStandardBrowserWebWorkerEnv ? c.setContentType(!1) : c.setContentType("multipart/form-data;", !1));
    let g = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      c.set("Authorization", "Basic " + btoa(v + ":" + w));
    }
    const x = Cv(e.baseURL, e.url);
    g.open(e.method.toUpperCase(), _v(x, e.params, e.paramsSerializer), !0), g.timeout = e.timeout;
    function u() {
      if (!g)
        return;
      const v = tr.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), S = {
        data: !f || f === "text" || f === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: v,
        config: e,
        request: g
      };
      NA(function(T) {
        r(T), y();
      }, function(T) {
        o(T), y();
      }, S), g = null;
    }
    if ("onloadend" in g ? g.onloadend = u : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(u);
    }, g.onabort = function() {
      g && (o(new De("Request aborted", De.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      o(new De("Network Error", De.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || Sv;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), o(new De(
        w,
        S.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        e,
        g
      )), g = null;
    }, Ln.isStandardBrowserEnv) {
      const v = (e.withCredentials || VA(x)) && e.xsrfCookieName && FA.read(e.xsrfCookieName);
      v && c.set(e.xsrfHeaderName, v);
    }
    a === void 0 && c.setContentType(null), "setRequestHeader" in g && B.forEach(c.toJSON(), function(w, S) {
      g.setRequestHeader(S, w);
    }), B.isUndefined(e.withCredentials) || (g.withCredentials = !!e.withCredentials), f && f !== "json" && (g.responseType = e.responseType), typeof e.onDownloadProgress == "function" && g.addEventListener("progress", $g(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && g.upload && g.upload.addEventListener("progress", $g(e.onUploadProgress)), (e.cancelToken || e.signal) && (m = (v) => {
      g && (o(!v || v.type ? new ys(null, e, g) : v), g.abort(), g = null);
    }, e.cancelToken && e.cancelToken.subscribe(m), e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m)));
    const h = BA(x);
    if (h && Ln.protocols.indexOf(h) === -1) {
      o(new De("Unsupported protocol " + h + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, Ha = {
  http: pA,
  xhr: UA
};
B.forEach(Ha, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const HA = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    for (let a = 0; a < t && (r = e[a], !(o = B.isString(r) ? Ha[r.toLowerCase()] : r)); a++)
      ;
    if (!o)
      throw o === !1 ? new De(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        B.hasOwnProp(Ha, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!B.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Ha
};
function Qc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ys(null, e);
}
function Ug(e) {
  return Qc(e), e.headers = tr.from(e.headers), e.data = Yc.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), HA.getAdapter(e.adapter || dd.adapter)(e).then(function(o) {
    return Qc(e), o.data = Yc.call(
      e,
      e.transformResponse,
      o
    ), o.headers = tr.from(o.headers), o;
  }, function(o) {
    return Tv(o) || (Qc(e), o && o.response && (o.response.data = Yc.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = tr.from(o.response.headers))), Promise.reject(o);
  });
}
const Hg = (e) => e instanceof tr ? e.toJSON() : e;
function Hi(e, t) {
  t = t || {};
  const r = {};
  function o(g, x, u) {
    return B.isPlainObject(g) && B.isPlainObject(x) ? B.merge.call({ caseless: u }, g, x) : B.isPlainObject(x) ? B.merge({}, x) : B.isArray(x) ? x.slice() : x;
  }
  function a(g, x, u) {
    if (B.isUndefined(x)) {
      if (!B.isUndefined(g))
        return o(void 0, g, u);
    } else
      return o(g, x, u);
  }
  function c(g, x) {
    if (!B.isUndefined(x))
      return o(void 0, x);
  }
  function f(g, x) {
    if (B.isUndefined(x)) {
      if (!B.isUndefined(g))
        return o(void 0, g);
    } else
      return o(void 0, x);
  }
  function m(g, x, u) {
    if (u in t)
      return o(g, x);
    if (u in e)
      return o(void 0, g);
  }
  const y = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: m,
    headers: (g, x) => a(Hg(g), Hg(x), !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(x) {
    const u = y[x] || a, h = u(e[x], t[x], x);
    B.isUndefined(h) && u !== m || (r[x] = h);
  }), r;
}
const Ev = "1.4.0", hd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  hd[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Wg = {};
hd.transitional = function(t, r, o) {
  function a(c, f) {
    return "[Axios v" + Ev + "] Transitional option '" + c + "'" + f + (o ? ". " + o : "");
  }
  return (c, f, m) => {
    if (t === !1)
      throw new De(
        a(f, " has been removed" + (r ? " in " + r : "")),
        De.ERR_DEPRECATED
      );
    return r && !Wg[f] && (Wg[f] = !0, console.warn(
      a(
        f,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(c, f, m) : !0;
  };
};
function WA(e, t, r) {
  if (typeof e != "object")
    throw new De("options must be an object", De.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let a = o.length;
  for (; a-- > 0; ) {
    const c = o[a], f = t[c];
    if (f) {
      const m = e[c], y = m === void 0 || f(m, c, e);
      if (y !== !0)
        throw new De("option " + c + " must be " + y, De.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new De("Unknown option " + c, De.ERR_BAD_OPTION);
  }
}
const Af = {
  assertOptions: WA,
  validators: hd
}, Tr = Af.validators;
class dl {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Bg(),
      response: new Bg()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Hi(this.defaults, r);
    const { transitional: o, paramsSerializer: a, headers: c } = r;
    o !== void 0 && Af.assertOptions(o, {
      silentJSONParsing: Tr.transitional(Tr.boolean),
      forcedJSONParsing: Tr.transitional(Tr.boolean),
      clarifyTimeoutError: Tr.transitional(Tr.boolean)
    }, !1), a != null && (B.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Af.assertOptions(a, {
      encode: Tr.function,
      serialize: Tr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f;
    f = c && B.merge(
      c.common,
      c[r.method]
    ), f && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete c[w];
      }
    ), r.headers = tr.concat(f, c);
    const m = [];
    let y = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(r) === !1 || (y = y && S.synchronous, m.unshift(S.fulfilled, S.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(S) {
      g.push(S.fulfilled, S.rejected);
    });
    let x, u = 0, h;
    if (!y) {
      const w = [Ug.bind(this), void 0];
      for (w.unshift.apply(w, m), w.push.apply(w, g), h = w.length, x = Promise.resolve(r); u < h; )
        x = x.then(w[u++], w[u++]);
      return x;
    }
    h = m.length;
    let v = r;
    for (u = 0; u < h; ) {
      const w = m[u++], S = m[u++];
      try {
        v = w(v);
      } catch (k) {
        S.call(this, k);
        break;
      }
    }
    try {
      x = Ug.call(this, v);
    } catch (w) {
      return Promise.reject(w);
    }
    for (u = 0, h = g.length; u < h; )
      x = x.then(g[u++], g[u++]);
    return x;
  }
  getUri(t) {
    t = Hi(this.defaults, t);
    const r = Cv(t.baseURL, t.url);
    return _v(r, t.params, t.paramsSerializer);
  }
}
B.forEach(["delete", "get", "head", "options"], function(t) {
  dl.prototype[t] = function(r, o) {
    return this.request(Hi(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(c, f, m) {
      return this.request(Hi(m || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: f
      }));
    };
  }
  dl.prototype[t] = r(), dl.prototype[t + "Form"] = r(!0);
});
const Wa = dl;
class pd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(c) {
      r = c;
    });
    const o = this;
    this.promise.then((a) => {
      if (!o._listeners)
        return;
      let c = o._listeners.length;
      for (; c-- > 0; )
        o._listeners[c](a);
      o._listeners = null;
    }), this.promise.then = (a) => {
      let c;
      const f = new Promise((m) => {
        o.subscribe(m), c = m;
      }).then(a);
      return f.cancel = function() {
        o.unsubscribe(c);
      }, f;
    }, t(function(c, f, m) {
      o.reason || (o.reason = new ys(c, f, m), r(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new pd(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const qA = pd;
function GA(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function KA(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const bf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(bf).forEach(([e, t]) => {
  bf[t] = e;
});
const YA = bf;
function Av(e) {
  const t = new Wa(e), r = uv(Wa.prototype.request, t);
  return B.extend(r, Wa.prototype, t, { allOwnKeys: !0 }), B.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return Av(Hi(e, a));
  }, r;
}
const pt = Av(dd);
pt.Axios = Wa;
pt.CanceledError = ys;
pt.CancelToken = qA;
pt.isCancel = Tv;
pt.VERSION = Ev;
pt.toFormData = Ml;
pt.AxiosError = De;
pt.Cancel = pt.CanceledError;
pt.all = function(t) {
  return Promise.all(t);
};
pt.spread = GA;
pt.isAxiosError = KA;
pt.mergeConfig = Hi;
pt.AxiosHeaders = tr;
pt.formToJSON = (e) => kv(B.isHTMLForm(e) ? new FormData(e) : e);
pt.HttpStatusCode = YA;
pt.default = pt;
const qg = pt;
function Pf(e, t = new FormData(), r) {
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const a = e[o], c = r ? `${r}[${o}]` : o;
      if (a instanceof File)
        t.append(c, a);
      else if (typeof a == "object" && !(a instanceof Date) && !(a instanceof Array))
        Pf(a, t, c);
      else if (a instanceof Array)
        for (let f = 0; f < a.length; f++) {
          const m = `${c}[${f}]`;
          typeof a[f] == "object" && !(a[f] instanceof Date) && !(a[f] instanceof Array) ? Pf(a[f], t, m) : t.append(m, a[f]);
        }
      else
        t.append(c, a);
    }
  return t;
}
function bv() {
  const { remoteId: e } = Pl();
  return e;
}
const Pv = M.createContext({}), QA = ({ children: e, app_id: t }) => t ? /* @__PURE__ */ E.jsx(Pv.Provider, { value: { sessionId: t }, children: e }) : /* @__PURE__ */ E.jsx(E.Fragment, {});
function XA() {
  return M.useContext(Pv);
}
function ZA() {
  const { sessionId: e } = XA();
  return e;
}
function Ki() {
  const { api_url: e } = Nt(), { remoteName: t, remoteEmail: r } = Pl(), o = bv(), a = ZA();
  return gl(), {
    loadConversationsRequest: async (g) => qg(`${e}/api/conversations/${a}/${o}`, {
      method: "get",
      params: { conversationIds: g }
    }).then((x) => x.data.data.conversations),
    loadMessagesRequest: async (g, x) => qg(`${e}/api/conversations/${g}/messages`, {
      method: "get",
      params: { messageIds: x }
    }).then((u) => u.data.data.messages),
    createConversationRequest: async () => {
      const g = tv();
      return fetch(`${e}/api/conversations`, {
        method: "post",
        body: JSON.stringify({
          remoteId: o,
          sessionId: a,
          conversationId: g
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then((x) => x.json()).then((x) => x.data.id);
    },
    sendMessageRequest: async ({
      text: g,
      conversationId: x,
      file: u
    }) => {
      const v = {
        message: {
          text: g,
          type: (() => u ? u.type.startsWith("video") ? "video" : u.type.startsWith("audio") ? "audio" : u.type.startsWith("image") ? "image" : "document" : "text")(),
          to: `conversation:${x}`,
          from: `remote:${o}`,
          user: {
            email: r,
            name: t
          }
        },
        file: u
      }, w = Pf(v);
      return await fetch(`${e}/api/messages/inbound`, {
        method: "post",
        body: w
      }).then((k) => k.json()).then((k) => k.data.message);
    }
  };
}
const JA = ({ message: e }) => {
  var r;
  const { sendMessageRequest: t } = Ki();
  return !e.buttons || e.buttons.length <= 0 ? null : /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx("div", { className: "buttons", children: (r = e.buttons) == null ? void 0 : r.map((o, a) => /* @__PURE__ */ E.jsx(
    "button",
    {
      disabled: !e.isLastMessage,
      onClick: () => {
        t({
          conversationId: e.conversationId,
          text: o.value
        });
      },
      children: o.label
    },
    a
  )) }) });
}, eb = ({ message: e }) => {
  const { file: t } = e, { api_url: r } = Nt(), [o, a] = M.useState(!1), c = M.useRef(null), f = `${r}/api/messages/${e.id}/files/${e.id}.mp4`, { width: m, height: y } = av({
    width: t == null ? void 0 : t.width,
    height: t == null ? void 0 : t.height,
    maxWidth: 240,
    maxHeight: 500
  }), g = M.useMemo(() => {
    if (t)
      return t.blurhash;
  }, [t]), x = async () => {
    a(() => !0);
  };
  return ud(
    c,
    async () => {
      o || await x();
    },
    500
  ), M.useEffect(() => () => {
    a(() => !1);
  }, []), t ? /* @__PURE__ */ E.jsxs("div", { ref: c, className: "message-video", children: [
    !o && g && /* @__PURE__ */ E.jsx(ld, { hash: g, style: { width: m, height: y } }),
    !o && !g && /* @__PURE__ */ E.jsx(
      "div",
      {
        className: "message-video-placeholder",
        style: { width: m, height: y }
      }
    ),
    o && /* @__PURE__ */ E.jsx(
      "video",
      {
        className: "message-video-player",
        src: f,
        controls: !0,
        style: { width: m, height: y }
      }
    )
  ] }) : null;
};
function tb(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, o = t < 0 ? 0 : t, a = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], c = Math.floor(Math.log(e) / Math.log(r));
  return (parseFloat((e / Math.pow(r, c)).toFixed(o)) + " " + a[c]).replace(/\./gm, ",");
}
const nb = ({ message: e }) => {
  const { file: t } = e, { api_url: r } = Nt(), o = `${r}/api/messages/${e.id}/files/${e.id}.bin`;
  return t ? /* @__PURE__ */ E.jsxs("div", { className: "message-document", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "message-document-details", children: [
      /* @__PURE__ */ E.jsx("div", { className: "message-document-title", children: "Documento" }),
      t.size && /* @__PURE__ */ E.jsx("div", { className: "message-document-subtitle", children: tb(t.size) })
    ] }),
    /* @__PURE__ */ E.jsx("a", { target: "_blank", href: o, className: "message-document-download", children: "Download" })
  ] }) : null;
}, rb = ({ message: e }) => {
  const t = e.fromMe, { picture_url: r, name: o } = lv(e.agentId);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(
    ME,
    {
      fromMe: t,
      initial: {
        opacity: 0,
        // x: message.fromRemote ? 10 : -10,
        scale: 0.98,
        y: 20
      },
      animate: {
        opacity: 1,
        // x: 0,
        scale: 1,
        y: 0
      },
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, 0.1, 0.9]
      },
      children: [
        !t && /* @__PURE__ */ E.jsx("div", { className: "avatar", title: o, children: r ? /* @__PURE__ */ E.jsx("img", { src: r }) : /* @__PURE__ */ E.jsx(rd, {}) }),
        /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: ["message-container", `message-${e.type}`].join(" "),
            children: [
              e.type === "buttons" && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                /* @__PURE__ */ E.jsx(Lg, { message: e }),
                /* @__PURE__ */ E.jsx(JA, { message: e })
              ] }),
              e.type === "text" && /* @__PURE__ */ E.jsx(Lg, { message: e }),
              e.type === "image" && e.file ? /* @__PURE__ */ E.jsx(LE, { message: e }) : null,
              e.type === "audio" && e.file ? /* @__PURE__ */ E.jsx(Ng, { message: e }) : null,
              e.type === "voice" && e.file ? /* @__PURE__ */ E.jsx(Ng, { message: e }) : null,
              e.type === "document" && e.file ? /* @__PURE__ */ E.jsx(nb, { message: e }) : null,
              e.type === "video" && e.file ? /* @__PURE__ */ E.jsx(eb, { message: e }) : null
            ]
          }
        )
      ]
    }
  ) });
}, ib = () => /* @__PURE__ */ E.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z",
        "clip-rule": "evenodd"
      }
    )
  }
), ob = Te.div`
  /* bg-orange-500 h-16 items-center px-2 text-white gap-2 */
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 10px;
  color: white;
  gap: 10px;
  background: linear-gradient(
    90deg,
    ${(e) => e.theme.colors.primary},
    ${(e) => e.theme.colors.secondary}
  );

  .header-infos {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .title {
  }

  .subtitle {
    font-size: 12px;
  }
`, sb = Te.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  background: transparent;
  color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`, ab = Te.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${(e) => e.theme.colors.primary};
  background: white;
`, Gg = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (y, g) => {
    const x = typeof y == "function" ? y(t) : y;
    if (!Object.is(x, t)) {
      const u = t;
      t = g ?? typeof x != "object" ? x : Object.assign({}, t, x), r.forEach((h) => h(t, u));
    }
  }, a = () => t, m = { setState: o, getState: a, subscribe: (y) => (r.add(y), () => r.delete(y)), destroy: () => {
    ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return t = e(o, a, m), m;
}, lb = (e) => e ? Gg(e) : Gg;
var Rv = { exports: {} }, Xc = {}, Zc = { exports: {} }, Jc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kg;
function ub() {
  if (Kg)
    return Jc;
  Kg = 1;
  var e = M;
  function t(u, h) {
    return u === h && (u !== 0 || 1 / u === 1 / h) || u !== u && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, a = e.useEffect, c = e.useLayoutEffect, f = e.useDebugValue;
  function m(u, h) {
    var v = h(), w = o({ inst: { value: v, getSnapshot: h } }), S = w[0].inst, k = w[1];
    return c(function() {
      S.value = v, S.getSnapshot = h, y(S) && k({ inst: S });
    }, [u, v, h]), a(function() {
      return y(S) && k({ inst: S }), u(function() {
        y(S) && k({ inst: S });
      });
    }, [u]), f(v), v;
  }
  function y(u) {
    var h = u.getSnapshot;
    u = u.value;
    try {
      var v = h();
      return !r(u, v);
    } catch {
      return !0;
    }
  }
  function g(u, h) {
    return h();
  }
  var x = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : m;
  return Jc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x, Jc;
}
var Yg;
function cb() {
  return Yg || (Yg = 1, Zc.exports = ub()), Zc.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qg;
function fb() {
  if (Qg)
    return Xc;
  Qg = 1;
  var e = M, t = cb();
  function r(g, x) {
    return g === x && (g !== 0 || 1 / g === 1 / x) || g !== g && x !== x;
  }
  var o = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, c = e.useRef, f = e.useEffect, m = e.useMemo, y = e.useDebugValue;
  return Xc.useSyncExternalStoreWithSelector = function(g, x, u, h, v) {
    var w = c(null);
    if (w.current === null) {
      var S = { hasValue: !1, value: null };
      w.current = S;
    } else
      S = w.current;
    w = m(function() {
      function T(X) {
        if (!A) {
          if (A = !0, O = X, X = h(X), v !== void 0 && S.hasValue) {
            var K = S.value;
            if (v(K, X))
              return V = K;
          }
          return V = X;
        }
        if (K = V, o(O, X))
          return K;
        var te = h(X);
        return v !== void 0 && v(K, te) ? K : (O = X, V = te);
      }
      var A = !1, O, V, $ = u === void 0 ? null : u;
      return [function() {
        return T(x());
      }, $ === null ? void 0 : function() {
        return T($());
      }];
    }, [x, u, h, v]);
    var k = a(g, w[0], w[1]);
    return f(function() {
      S.hasValue = !0, S.value = k;
    }, [k]), y(k), k;
  }, Xc;
}
Rv.exports = fb();
var db = Rv.exports;
const hb = /* @__PURE__ */ pl(db), { useSyncExternalStoreWithSelector: pb } = hb;
function mb(e, t = e.getState, r) {
  const o = pb(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return M.useDebugValue(o), o;
}
const Xg = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? lb(e) : e, r = (o, a) => mb(t, o, a);
  return Object.assign(r, t), r;
}, Ov = (e) => e ? Xg(e) : Xg, rr = Ov((e) => ({
  conversations: [],
  set: (t) => e({ conversations: t }),
  update: (t, r) => {
    e((o) => ({
      conversations: o.conversations.map((a) => a.id === t ? {
        ...a,
        ...r
      } : a)
    }));
  },
  add: (t) => {
    e((r) => ({
      conversations: [...r.conversations, t]
    }));
  }
})), gb = () => {
  const { removeConversation: e, conversationId: t } = In(), {
    app: { name: r }
  } = Nt(), o = rr((a) => a.conversations.find((c) => c.id === t));
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(ob, { children: [
    /* @__PURE__ */ E.jsx(
      sb,
      {
        onClick: () => {
          e();
        },
        children: /* @__PURE__ */ E.jsx(ib, {})
      }
    ),
    /* @__PURE__ */ E.jsx(ab, { children: /* @__PURE__ */ E.jsx(hs, {}) }),
    /* @__PURE__ */ E.jsxs("div", { className: "header-infos", children: [
      /* @__PURE__ */ E.jsx("span", { className: "title", children: r }),
      o.isTyping && /* @__PURE__ */ E.jsx("span", { className: "subtitle", children: "Digitando..." })
    ] })
  ] }) });
}, yb = ({
  className: e,
  ...t
}) => /* @__PURE__ */ E.jsx(
  "div",
  {
    className: ["flex flex-row", e].filter((r) => !!r).join(" "),
    ...t
  }
), vb = Te.form`
  display: flex;
  flex-direction: row;
  height: 50px;
  border-top: 1px solid #eee;
  background: #eee;
  align-items: center;

  .buttons-container {
    display: flex;
    flex-direction: row;
    gap: 4px;
    padding-right: 10px;
  }
`, xb = Te.input`
  flex: 1;
  height: 100%;
  padding-left: 20px;
  outline: none;
  font-size: 14px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`, wb = Te.button`
  width: 30px;
  height: 30px;
  background: transparent;
  color: #bfbfbf;

  &:hover(not:disabled) {
    color: black;
  }

  &:disabled {
    color: black;
    opacity: 0.1;
    cursor: not-allowed;
  }
`, _b = () => /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E.jsx("path", { d: "M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z" })
  }
) });
function Sb(e, t = {}) {
  const r = Object.assign(
    document.createElement("input"),
    { type: "file" },
    t
  );
  r.addEventListener("change", async (o) => {
    const a = Array.from(o.target.files || []);
    await e(a);
  }), r.click();
}
const Lv = Ov((e) => ({
  messages: [],
  set: (t) => e({ messages: t }),
  update: (t, r) => {
    e((o) => ({
      messages: o.messages.map((a) => a.id === t ? {
        ...a,
        ...r
      } : a)
    }));
  },
  add: (t) => {
    e((r) => ({
      messages: [...r.messages, t]
    }));
  },
  updateOrCreateMany: (t) => {
    e((r) => {
      const o = [...r.messages];
      return t.forEach((a) => {
        const c = o.findIndex((f) => f.id === a.id);
        c === -1 ? o.push(a) : o[c] = a;
      }), {
        messages: o
      };
    });
  }
}));
function Wi(e) {
  return new Date(e).getTime();
}
function Mv(e) {
  const t = Lv(
    (a) => a.messages.filter((c) => c.conversationId === e)
  ), r = M.useMemo(() => t.sort((a, c) => Wi(a.createdAt) - Wi(c.createdAt)).map((a, c) => ({
    ...a,
    isLastMessage: c + 1 === t.length
  })), [t]), o = M.useMemo(() => r.find((a) => a.isLastMessage), [r]);
  return {
    messages: r,
    lastMessage: o
  };
}
const kb = () => {
  const { conversationId: e } = In(), { sendMessageRequest: t } = Ki(), [r, o] = M.useState(""), a = M.useRef(null), [c, f] = M.useState(), [m, y] = M.useState(!1), [g, x] = M.useState("Mensagem"), u = M.useRef(setTimeout(() => {
  }, 0)), { lastMessage: h } = Mv(e), v = rr((T) => {
    var O;
    return !!((O = T.conversations.find(
      (V) => V.id === e
    )) == null ? void 0 : O.isClosed);
  }), w = M.useMemo(() => (h == null ? void 0 : h.type) === "buttons" || v || m, [m, h, v]), S = () => {
    f(() => {
    }), o(() => ""), y(() => !1);
  };
  M.useEffect(() => {
    var T;
    w || (T = a.current) == null || T.focus();
  }, [w]);
  const k = async () => {
    if (!r) {
      clearTimeout(u.current), x(() => "Digite uma mensagem para enviar..."), u.current = setTimeout(
        () => x(() => "Mensagem"),
        1e3
      );
      return;
    }
    y(() => !0), await t({
      conversationId: e,
      text: r
    }).catch(() => {
    }), y(() => !1), S();
  };
  return M.useEffect(() => {
    x(v ? () => "Esta conversa foi encerrada" : () => "Mensagem");
  }, [v]), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(
    vb,
    {
      onSubmit: (T) => {
        T.preventDefault(), k();
      },
      children: [
        /* @__PURE__ */ E.jsx(
          xb,
          {
            ref: a,
            placeholder: g,
            value: r,
            disabled: w,
            onChange: (T) => {
              o(() => T.target.value);
            }
          }
        ),
        /* @__PURE__ */ E.jsx(yb, { className: "buttons-container", children: /* @__PURE__ */ E.jsx(
          wb,
          {
            type: "button",
            disabled: w,
            onClick: () => {
              Sb(async ([T]) => {
                T && (y(() => !0), await t({
                  conversationId: e,
                  text: r,
                  file: T
                }).catch(() => {
                }), y(() => !1));
              });
            },
            children: /* @__PURE__ */ E.jsx(_b, {})
          }
        ) })
      ]
    }
  ) });
}, Tb = () => /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(kb, {}) }), Cb = Te.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .page-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`, Eb = Te.div`
  /* className="flex flex-col absolute left-0 top-0 w-full h-full overflow-y-auto scroll-mini px-6 py-2 gap-3" */
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px 20px;
  gap: 5px;
`;
function Ab({
  conversationId: e,
  messagesCount: t,
  messagesListRef: r
}) {
  const o = M.useRef(!0), a = () => {
    var c;
    (c = r.current) == null || c.scrollTo({
      top: r.current.scrollHeight,
      behavior: o.current ? "instant" : "smooth"
    });
  };
  M.useEffect(() => {
    e && (o.current = !0, a());
  }, [e]), M.useEffect(() => {
    t && (a(), o.current = !1);
  }, [t]);
}
const bb = ({ conversationId: e }) => {
  const { messages: t } = Mv(e), r = M.useRef(null);
  return Ab({
    messagesListRef: r,
    messagesCount: t.length,
    conversationId: e
  }), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(Cb, { children: [
    /* @__PURE__ */ E.jsx(gb, {}),
    /* @__PURE__ */ E.jsx("div", { className: "page-wrap", children: /* @__PURE__ */ E.jsx(Eb, { ref: r, className: "scroll-mini", children: t.map((o, a) => /* @__PURE__ */ E.jsx(rb, { message: o }, `message.${o.id}`)) }) }),
    /* @__PURE__ */ E.jsx(Tb, {})
  ] }) });
}, Pb = Te.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;

  .page-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    overflow: hidden;

    .conversations-title {
      display: flex;
      padding: 4px 10px;
      position: sticky;
      top: 0;
      background: white;
      border-bottom: 1px solid #ddd;
      z-index: 20;
      justify-content: space-between;

      > span {
        padding: 4px 30px;
        font-size: 12px;
        background: ${(e) => e.theme.colors.primary};
        color: white;
        border-radius: 999px;
        user-select: none;
      }
    }

    .page-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
`, Rb = Te.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 10px;
  color: white;
  gap: 10px;
  background: linear-gradient(
    90deg,
    ${(e) => e.theme.colors.primary},
    ${(e) => e.theme.colors.secondary}
  );

  .title {
    font-size: 16px;
    font-weight: 600;
    flex: 1;
    text-align: center;
  }
`, Ob = () => /* @__PURE__ */ E.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ E.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z",
        "clip-rule": "evenodd"
      }
    )
  }
), Lb = Te.div`
  /* className="px-4 cursor-pointer hover:bg-orange-100/80 transition-all" */
  padding: 0 20px;
  cursor: ${(e) => e.isClosed ? "not-allowed" : "pointer"};
  transition: all 0.2s ease-in-out;
  opacity: ${(e) => e.isClosed ? 0.5 : 1};

  &:hover {
    opacity: 1;
    background-color: ${(e) => e.isClosed ? "white" : zi(e.theme.colors.primary, 0.15)};
  }

  .item-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    align-items: center;

    .row-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      font-size: 14px;
      gap: 10px;
    }

    .title {
      &.empty {
        color: gray;
      }
    }

    .subtitle {
      display: flex;
      flex-direction: row;
      gap: 3px;
      font-size: 12px;
      color: gray;
    }
  }
`, Mb = Te.div`
  font-size: 20px;
  color: ${(e) => e.theme.colors.primary};
`, Db = Te.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  background: linear-gradient(
    125deg,
    ${(e) => e.theme.colors.primary} 60%,
    ${(e) => e.theme.colors.secondary}
  );
`;
var hl = { exports: {} };
hl.exports;
(function(e, t) {
  var r = 30, o = "...", a = 1 / 0, c = 17976931348623157e292, f = 0 / 0, m = "[object RegExp]", y = "[object Symbol]", g = /^\s+|\s+$/g, x = /\w*$/, u = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, v = /^0o[0-7]+$/i, w = "\\ud800-\\udfff", S = "\\u0300-\\u036f\\ufe20-\\ufe23", k = "\\u20d0-\\u20f0", T = "\\ufe0e\\ufe0f", A = "[" + w + "]", O = "[" + S + k + "]", V = "\\ud83c[\\udffb-\\udfff]", $ = "(?:" + O + "|" + V + ")", X = "[^" + w + "]", K = "(?:\\ud83c[\\udde6-\\uddff]){2}", te = "[\\ud800-\\udbff][\\udc00-\\udfff]", J = "\\u200d", Ce = $ + "?", Le = "[" + T + "]?", he = "(?:" + J + "(?:" + [X, K, te].join("|") + ")" + Le + Ce + ")*", le = Le + Ce + he, ae = "(?:" + [X + O + "?", O, K, te, A].join("|") + ")", ge = RegExp(V + "(?=" + V + ")|" + ae + le, "g"), Ee = RegExp("[" + J + w + S + k + T + "]"), Se = parseInt, Q = typeof Xn == "object" && Xn && Xn.Object === Object && Xn, ue = typeof self == "object" && self && self.Object === Object && self, b = Q || ue || Function("return this")(), I = t && !t.nodeType && t, ne = I && !0 && e && !e.nodeType && e, ke = ne && ne.exports === I, ve = ke && Q.process, Oe = function() {
    try {
      return ve && ve.binding("util");
    } catch {
    }
  }(), _e = Oe && Oe.isRegExp, Pe = Ye("length");
  function Ae(W) {
    return W.split("");
  }
  function Ye(W) {
    return function(xe) {
      return xe == null ? void 0 : xe[W];
    };
  }
  function xn(W) {
    return function(xe) {
      return W(xe);
    };
  }
  function ut(W) {
    return Ee.test(W);
  }
  function wn(W) {
    return ut(W) ? ti(W) : Pe(W);
  }
  function _n(W) {
    return ut(W) ? Qi(W) : Ae(W);
  }
  function ti(W) {
    for (var xe = ge.lastIndex = 0; ge.test(W); )
      xe++;
    return xe;
  }
  function Qi(W) {
    return W.match(ge) || [];
  }
  var L = Object.prototype, j = L.toString, z = b.Symbol, ie = z ? z.prototype : void 0, Z = ie ? ie.toString : void 0;
  function G(W) {
    return Ft(W) && j.call(W) == m;
  }
  function de(W, xe, Be) {
    var vt = -1, Ue = W.length;
    xe < 0 && (xe = -xe > Ue ? 0 : Ue + xe), Be = Be > Ue ? Ue : Be, Be < 0 && (Be += Ue), Ue = xe > Be ? 0 : Be - xe >>> 0, xe >>>= 0;
    for (var zn = Array(Ue); ++vt < Ue; )
      zn[vt] = W[vt + xe];
    return zn;
  }
  function je(W) {
    if (typeof W == "string")
      return W;
    if (ln(W))
      return Z ? Z.call(W) : "";
    var xe = W + "";
    return xe == "0" && 1 / W == -a ? "-0" : xe;
  }
  function ze(W, xe, Be) {
    var vt = W.length;
    return Be = Be === void 0 ? vt : Be, !xe && Be >= vt ? W : de(W, xe, Be);
  }
  function Ft(W) {
    var xe = typeof W;
    return !!W && (xe == "object" || xe == "function");
  }
  function ni(W) {
    return !!W && typeof W == "object";
  }
  var Vn = _e ? xn(_e) : G;
  function ln(W) {
    return typeof W == "symbol" || ni(W) && j.call(W) == y;
  }
  function ri(W) {
    if (!W)
      return W === 0 ? W : 0;
    if (W = Bn(W), W === a || W === -a) {
      var xe = W < 0 ? -1 : 1;
      return xe * c;
    }
    return W === W ? W : 0;
  }
  function Sn(W) {
    var xe = ri(W), Be = xe % 1;
    return xe === xe ? Be ? xe - Be : xe : 0;
  }
  function Bn(W) {
    if (typeof W == "number")
      return W;
    if (ln(W))
      return f;
    if (Ft(W)) {
      var xe = typeof W.valueOf == "function" ? W.valueOf() : W;
      W = Ft(xe) ? xe + "" : xe;
    }
    if (typeof W != "string")
      return W === 0 ? W : +W;
    W = W.replace(g, "");
    var Be = h.test(W);
    return Be || v.test(W) ? Se(W.slice(2), Be ? 2 : 8) : u.test(W) ? f : +W;
  }
  function Nr(W) {
    return W == null ? "" : je(W);
  }
  function vs(W, xe) {
    var Be = r, vt = o;
    if (Ft(xe)) {
      var Ue = "separator" in xe ? xe.separator : Ue;
      Be = "length" in xe ? Sn(xe.length) : Be, vt = "omission" in xe ? je(xe.omission) : vt;
    }
    W = Nr(W);
    var zn = W.length;
    if (ut(W)) {
      var ir = _n(W);
      zn = ir.length;
    }
    if (Be >= zn)
      return W;
    var Tt = Be - wn(vt);
    if (Tt < 1)
      return vt;
    var Ct = ir ? ze(ir, 0, Tt).join("") : W.slice(0, Tt);
    if (Ue === void 0)
      return Ct + vt;
    if (ir && (Tt += Ct.length - Tt), Vn(Ue)) {
      if (W.slice(Tt).search(Ue)) {
        var Xi, xs = Ct;
        for (Ue.global || (Ue = RegExp(Ue.source, Nr(x.exec(Ue)) + "g")), Ue.lastIndex = 0; Xi = Ue.exec(xs); )
          var Zi = Xi.index;
        Ct = Ct.slice(0, Zi === void 0 ? Tt : Zi);
      }
    } else if (W.indexOf(je(Ue), Tt) != Tt) {
      var Ji = Ct.lastIndexOf(Ue);
      Ji > -1 && (Ct = Ct.slice(0, Ji));
    }
    return Ct + vt;
  }
  e.exports = vs;
})(hl, hl.exports);
var Nb = hl.exports;
const Fb = /* @__PURE__ */ pl(Nb), Zg = ({
  conversationId: e
}) => {
  const { selectConversation: t } = In(), r = rr(
    (c) => c.conversations.find((f) => f.id === e)
  ), o = M.useMemo(() => {
    var m;
    const c = (m = r.messages[0]) == null ? void 0 : m.text, f = r._count.messages;
    return !c && f > 1 ? `${f} mensagens` : c;
  }, [r.messages[0]]), a = M.useMemo(() => {
    const c = [
      new Date(r.updatedAt).toLocaleDateString(),
      "• ",
      new Date(r.updatedAt).toLocaleTimeString()
    ];
    return r.isTyping && c.push("•", "Digitando..."), r.isClosed && c.push("•", "Encerrada"), c;
  }, [r.updatedAt, r.isTyping]);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
    Lb,
    {
      isClosed: r.isClosed,
      onClick: () => {
        r.isClosed || t(r.id);
      },
      children: /* @__PURE__ */ E.jsxs("div", { className: "item-row", children: [
        /* @__PURE__ */ E.jsx(Db, { children: /* @__PURE__ */ E.jsx(hs, {}) }),
        /* @__PURE__ */ E.jsxs("div", { className: "row-content", children: [
          /* @__PURE__ */ E.jsx(
            "span",
            {
              title: o,
              className: ["title", o ? "" : "empty"].join(" "),
              children: Fb(o || "Conversa Vazia...", { length: 37 })
            }
          ),
          /* @__PURE__ */ E.jsxs("div", { className: "subtitle", children: [
            a.map((c, f) => /* @__PURE__ */ E.jsx("span", { className: "text-gray-400", children: c }, `content.${f}`)),
            /* @__PURE__ */ E.jsx("span", {})
          ] })
        ] }),
        /* @__PURE__ */ E.jsx(Mb, { children: /* @__PURE__ */ E.jsx(Ob, {}) })
      ] })
    }
  ) });
}, Ib = ({ children: e }) => /* @__PURE__ */ E.jsx(E.Fragment, { children: e }), jb = () => {
  const { conversationId: e } = In(), t = rr((c) => c.conversations), r = M.useMemo(() => t.sort((c, f) => Wi(f.updatedAt) - Wi(c.updatedAt)), [t]), o = M.useMemo(() => r.filter((c) => c.isClosed), [r]), a = M.useMemo(() => r.filter((c) => !c.isClosed), [r]);
  return e ? /* @__PURE__ */ E.jsx(Ib, { conversationId: e, children: /* @__PURE__ */ E.jsx(bb, { conversationId: e }) }) : /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(Pb, { children: [
    /* @__PURE__ */ E.jsx(Rb, { children: /* @__PURE__ */ E.jsx("span", { className: "title", children: "Mensagens" }) }),
    /* @__PURE__ */ E.jsx("div", { className: "page-wrap", children: /* @__PURE__ */ E.jsxs("div", { className: "page-container scroll-mini", children: [
      a.length > 0 ? /* @__PURE__ */ E.jsxs("div", { className: "conversations-title", children: [
        /* @__PURE__ */ E.jsx("span", { children: "Conversas abertas" }),
        /* @__PURE__ */ E.jsx("span", { children: a.length })
      ] }) : null,
      a.map((c, f) => /* @__PURE__ */ E.jsx(
        Zg,
        {
          conversationId: c.id
        },
        `conversation.${c.id}.${f}`
      )),
      o.length > 0 ? /* @__PURE__ */ E.jsxs("div", { className: "conversations-title", children: [
        /* @__PURE__ */ E.jsx("span", { children: "Conversas encerradas" }),
        /* @__PURE__ */ E.jsx("span", { children: o.length })
      ] }) : null,
      o.map((c, f) => /* @__PURE__ */ E.jsx(
        Zg,
        {
          conversationId: c.id
        },
        `conversation.${c.id}.${f}`
      ))
    ] }) })
  ] }) });
}, Vb = Te.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  border-radius: 6px;
  padding: 18px 32px;
  background-color: white;
  box-shadow: 0 30px 10px -20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease-in-out;
  border: 1px solid #f1f1f1;
  align-items: center;
  gap: 6px;

  &:active {
    background-color: #eee;
  }

  :hover .block-icon {
    color: ${(e) => e.theme.colors.primary};
  }
`, Bb = Te.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;

  .block-title {
    font-size: 14px;
    font-weight: bold;
  }

  .block-description {
    font-size: 12px;
    color: #9e9e9e;
  }
`;
function Dv() {
  const e = rr((y) => y.conversations), t = rr((y) => y.add), { loadConversationsRequest: r, createConversationRequest: o } = Ki(), { selectConversation: a } = In(), c = gl(), f = async ({ open: y }) => o().then((g) => r([g]).then(
    ([x]) => (c.emit("conversation.created", { conversation: x }), t(x), y && a(g), x)
  ));
  return {
    conversations: M.useMemo(() => e.sort((y, g) => Wi(g.updatedAt) - Wi(y.updatedAt)), [e]),
    createConversation: f
  };
}
const zb = () => {
  const { home_blocks: e } = Nt(), { createConversation: t } = Dv(), { sendMessageRequest: r } = Ki();
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: e.map((o, a) => /* @__PURE__ */ E.jsxs(
    Vb,
    {
      onClick: async () => {
        t({ open: !0 }).then(async (c) => {
          await r({
            conversationId: c.id,
            text: o.message
          });
        });
      },
      children: [
        /* @__PURE__ */ E.jsxs(Bb, { children: [
          /* @__PURE__ */ E.jsx("span", { className: "block-title", children: o.title }),
          /* @__PURE__ */ E.jsx("span", { className: "block-description", children: o.subtitle })
        ] }),
        /* @__PURE__ */ E.jsx("div", { className: "block-icon", children: /* @__PURE__ */ E.jsx(hs, {}) })
      ]
    },
    `predefined.${a}`
  )) });
}, $b = Te(Ui.div)`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;

  .page-wrap {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    /* background-color: blue; */
  }

  .page-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    /* background-color: #000; */
  }

  .page-content {
    /* flex: 1;
    background: white; */
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow-y: auto;
    gap: 12px;
    padding: 10px 16px;
    padding-bottom: 100px;
    /* background-color: white; */
  }
`, Ub = Te.div`
  background: linear-gradient(
    45deg,
    ${(e) => e.theme.colors.primary},
    ${(e) => e.theme.colors.secondary}
  );
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
`, Hb = Te.div`
  background: linear-gradient(180deg, transparent, white);
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
`, Wb = Te.div`
  display: flex;
  flex-direction: row;
  padding: 4px 40px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 30;
`, qb = Te.button`
  /* px-4 py-2 rounded-full bg-orange-500 w-full text-white text-sm font-semibold */
  height: 50px;
  /* padding: 0 20px; */
  border-radius: 9999px;
  background-color: ${(e) => e.theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  color: white;
  scale: 0.95;
  box-shadow: 0 7px 10px ${(e) => zi(e.theme.colors.primary, 0.6)};
  transition: all 0.2s ease-in-out;

  :hover {
    scale: 1;
    box-shadow: 0 7px 10px ${(e) => zi(e.theme.colors.primary, 0.8)};
  }
  :active {
    scale: 0.98;
  }
`, Gb = Te.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: start;
`, Kb = Te.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    color: white;
    font-weight: bold;
  }

  span {
    color: white;
    font-size: 12px;
  }
`, Yb = Te.div`
  display: flex;
  flex-direction: row;
`, Qb = Te.div`
  width: 35px;
  height: 35px;
  background-color: ${(e) => e.theme.colors.secondary};
  border-radius: 50%;
  margin-left: -15px;
  border: 2px solid white;

  &:first-of-type {
    margin-left: 0px;
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`, Xb = () => {
  const {
    agents: e,
    app: { name: t, is_agents_visible: r }
  } = Nt(), o = M.useMemo(() => e.filter((c) => c.is_online), [e]), a = M.useMemo(() => o.length, [o]);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(Gb, { children: [
    /* @__PURE__ */ E.jsxs(Kb, { children: [
      /* @__PURE__ */ E.jsx("h1", { children: t }),
      r && a > 0 && /* @__PURE__ */ E.jsxs("span", { children: [
        a,
        " ",
        a === 1 ? "atendente" : "atendentes",
        " ",
        "online"
      ] })
    ] }),
    r && /* @__PURE__ */ E.jsx(Yb, { children: o.map((c, f) => /* @__PURE__ */ E.jsx(Qb, { children: /* @__PURE__ */ E.jsx("img", { src: c.picture_url }) }, `agent.${f}`)) })
  ] }) });
}, Zb = Te.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`, Jb = Te.span`
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`, eP = Te.span`
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`, tP = () => {
  const {
    headline: { title: e, subtitle: t }
  } = Nt();
  return /* @__PURE__ */ E.jsxs(Zb, { children: [
    /* @__PURE__ */ E.jsx(Jb, { children: e }),
    /* @__PURE__ */ E.jsx(eP, { children: t })
  ] });
}, nP = () => {
  const { createConversation: e } = Dv();
  return /* @__PURE__ */ E.jsxs($b, { children: [
    /* @__PURE__ */ E.jsx(Ub, {}),
    /* @__PURE__ */ E.jsx(Hb, {}),
    /* @__PURE__ */ E.jsxs("div", { className: "page-wrap", children: [
      /* @__PURE__ */ E.jsx(Xb, {}),
      /* @__PURE__ */ E.jsx(tP, {}),
      /* @__PURE__ */ E.jsx("div", { className: "page-container", children: /* @__PURE__ */ E.jsx("div", { className: "page-content scroll-mini", children: /* @__PURE__ */ E.jsx(zb, {}) }) })
    ] }),
    /* @__PURE__ */ E.jsx(Wb, { children: /* @__PURE__ */ E.jsx(
      qb,
      {
        onClick: () => {
          e({ open: !0 });
        },
        children: "Nos envie uma mensagem"
      }
    ) })
  ] });
}, Uo = [
  {
    name: "auth",
    Component: () => /* @__PURE__ */ E.jsx(wE, {}),
    state: {
      showNav: !1
    }
    // button: {
    //   label: "Autenticar",
    //   Icon: () => <HomeIcon />,
    //   ActiveIcon: () => <HomeIconActive />,
    // },
  },
  {
    name: "home",
    Component: () => /* @__PURE__ */ E.jsx(nP, {}),
    state: {
      showNav: !0
    },
    button: {
      label: "Início",
      Icon: () => /* @__PURE__ */ E.jsx(UC, {}),
      ActiveIcon: () => /* @__PURE__ */ E.jsx(HC, {})
    }
  },
  {
    name: "messages",
    Component: () => /* @__PURE__ */ E.jsx(jb, {}),
    state: {
      showNav: !0
    },
    button: {
      label: "Mensagens",
      Icon: () => /* @__PURE__ */ E.jsx(hs, {}),
      ActiveIcon: () => /* @__PURE__ */ E.jsx(rd, {})
    }
  }
], rP = () => {
  const { page: e, go: t, conversationId: r } = In(), o = M.useMemo(() => e ? Uo.find((c) => c.name === e).Component : () => /* @__PURE__ */ E.jsx(E.Fragment, {}), [e, Uo]), a = M.useMemo(() => {
    var c, f;
    return !!((f = (c = Uo.find((m) => m.name === e)) == null ? void 0 : c.state) != null && f.showNav);
  }, [e, Uo]);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
    BC,
    {
      initial: {
        opacity: 0,
        y: 100
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        y: 100
      },
      transition: {
        duration: 0.8,
        ease: [0.15, 0.72, 0.18, 0.99]
      },
      children: /* @__PURE__ */ E.jsxs("div", { className: "wrapper", children: [
        /* @__PURE__ */ E.jsx("div", { className: "page-content", children: /* @__PURE__ */ E.jsx(o, {}) }),
        !r && a && /* @__PURE__ */ E.jsx(zC, { children: Uo.filter((c) => !!c.button).map((c, f) => /* @__PURE__ */ E.jsxs(
          $C,
          {
            isActive: c.name === e,
            onClick: () => {
              t(c.name);
            },
            children: [
              c.name === e ? c.button.ActiveIcon() : c.button.Icon(),
              /* @__PURE__ */ E.jsx("span", { children: c.button.label })
            ]
          },
          `btn.${f}`
        )) })
      ] })
    }
  ) });
}, iP = Te(Ui.div)`
  /* flex: 1; */
  min-height: 100%;
  position: absolute;
  width: 360px;
  right: ${(e) => e.theme.isRight ? "60px" : "unset"};
  left: ${(e) => e.theme.isLeft ? "60px" : "unset"};
  /* max-width: calc(100vw - 110px); */
  /* background: #f0f; */
  user-select: none;

  .btn-close {
    position: absolute;
    padding: 0 16px;
    top: ${(e) => e.theme.isBottom ? "-40px" : "unset"};
    bottom: ${(e) => e.theme.isTop ? "-40px" : "unset"};
    /* right: 0; */
    right: ${(e) => e.theme.isLeft ? "0" : "unset"};
    left: ${(e) => e.theme.isRight ? "0" : "unset"};
    height: 30px;
    border-radius: 1000px;
    background: #f5474a;
    border: 1px solid #f5474a;
    color: white;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .popup-wrap {
    position: absolute;
    gap: 0.5rem;
    width: 100%;
    /* padding-right: 110px; */
    left: 0;
    top: ${(e) => e.theme.isTop ? "0px" : "unset"};
    bottom: ${(e) => e.theme.isBottom ? "0px" : "unset"};
    display: flex;
    flex-direction: ${(e) => e.theme.isBottom ? "column" : "column-reverse"};
    justify-content: flex-end;
    align-items: ${(e) => e.theme.isLeft ? "end" : "start"};
  }

  .popup-item {
    display: flex;
    flex-direction: ${(e) => e.theme.isLeft ? "row-reverse" : "row"};
    gap: 10px;
    /* align-items: flex-end; */
    align-items: ${(e) => e.theme.isBottom ? "flex-start" : "flex-end"};
    position: relative;

    &__avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      flex-shrink: 0;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      /* display: flex;
      flex-direction: column; */
      font-size: 0.8em;
      gap: 10px;
      background-color: #fff;
      border-radius: 8px;
      height: auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 6px 12px 6px 12px;
      color: black;
      line-height: 1.6;
    }
  }
`;
var Nv = {};
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function(e) {
  (function() {
    var t = function() {
      this.init();
    };
    t.prototype = {
      /**
       * Initialize the global Howler object.
       * @return {Howler}
       */
      init: function() {
        var u = this || r;
        return u._counter = 1e3, u._html5AudioPool = [], u.html5PoolSize = 10, u._codecs = {}, u._howls = [], u._muted = !1, u._volume = 1, u._canPlayEvent = "canplaythrough", u._navigator = typeof window < "u" && window.navigator ? window.navigator : null, u.masterGain = null, u.noAudio = !1, u.usingWebAudio = !0, u.autoSuspend = !0, u.ctx = null, u.autoUnlock = !0, u._setup(), u;
      },
      /**
       * Get/set the global volume for all sounds.
       * @param  {Float} vol Volume from 0.0 to 1.0.
       * @return {Howler/Float}     Returns self or current volume.
       */
      volume: function(u) {
        var h = this || r;
        if (u = parseFloat(u), h.ctx || x(), typeof u < "u" && u >= 0 && u <= 1) {
          if (h._volume = u, h._muted)
            return h;
          h.usingWebAudio && h.masterGain.gain.setValueAtTime(u, r.ctx.currentTime);
          for (var v = 0; v < h._howls.length; v++)
            if (!h._howls[v]._webAudio)
              for (var w = h._howls[v]._getSoundIds(), S = 0; S < w.length; S++) {
                var k = h._howls[v]._soundById(w[S]);
                k && k._node && (k._node.volume = k._volume * u);
              }
          return h;
        }
        return h._volume;
      },
      /**
       * Handle muting and unmuting globally.
       * @param  {Boolean} muted Is muted or not.
       */
      mute: function(u) {
        var h = this || r;
        h.ctx || x(), h._muted = u, h.usingWebAudio && h.masterGain.gain.setValueAtTime(u ? 0 : h._volume, r.ctx.currentTime);
        for (var v = 0; v < h._howls.length; v++)
          if (!h._howls[v]._webAudio)
            for (var w = h._howls[v]._getSoundIds(), S = 0; S < w.length; S++) {
              var k = h._howls[v]._soundById(w[S]);
              k && k._node && (k._node.muted = u ? !0 : k._muted);
            }
        return h;
      },
      /**
       * Handle stopping all sounds globally.
       */
      stop: function() {
        for (var u = this || r, h = 0; h < u._howls.length; h++)
          u._howls[h].stop();
        return u;
      },
      /**
       * Unload and destroy all currently loaded Howl objects.
       * @return {Howler}
       */
      unload: function() {
        for (var u = this || r, h = u._howls.length - 1; h >= 0; h--)
          u._howls[h].unload();
        return u.usingWebAudio && u.ctx && typeof u.ctx.close < "u" && (u.ctx.close(), u.ctx = null, x()), u;
      },
      /**
       * Check for codec support of specific extension.
       * @param  {String} ext Audio file extention.
       * @return {Boolean}
       */
      codecs: function(u) {
        return (this || r)._codecs[u.replace(/^x-/, "")];
      },
      /**
       * Setup various state values for global tracking.
       * @return {Howler}
       */
      _setup: function() {
        var u = this || r;
        if (u.state = u.ctx && u.ctx.state || "suspended", u._autoSuspend(), !u.usingWebAudio)
          if (typeof Audio < "u")
            try {
              var h = new Audio();
              typeof h.oncanplaythrough > "u" && (u._canPlayEvent = "canplay");
            } catch {
              u.noAudio = !0;
            }
          else
            u.noAudio = !0;
        try {
          var h = new Audio();
          h.muted && (u.noAudio = !0);
        } catch {
        }
        return u.noAudio || u._setupCodecs(), u;
      },
      /**
       * Check for browser support for various codecs and cache the results.
       * @return {Howler}
       */
      _setupCodecs: function() {
        var u = this || r, h = null;
        try {
          h = typeof Audio < "u" ? new Audio() : null;
        } catch {
          return u;
        }
        if (!h || typeof h.canPlayType != "function")
          return u;
        var v = h.canPlayType("audio/mpeg;").replace(/^no$/, ""), w = u._navigator ? u._navigator.userAgent : "", S = w.match(/OPR\/([0-6].)/g), k = S && parseInt(S[0].split("/")[1], 10) < 33, T = w.indexOf("Safari") !== -1 && w.indexOf("Chrome") === -1, A = w.match(/Version\/(.*?) /), O = T && A && parseInt(A[1], 10) < 15;
        return u._codecs = {
          mp3: !!(!k && (v || h.canPlayType("audio/mp3;").replace(/^no$/, ""))),
          mpeg: !!v,
          opus: !!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          oga: !!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          wav: !!(h.canPlayType('audio/wav; codecs="1"') || h.canPlayType("audio/wav")).replace(/^no$/, ""),
          aac: !!h.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!h.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(h.canPlayType("audio/x-m4a;") || h.canPlayType("audio/m4a;") || h.canPlayType("audio/aac;")).replace(/^no$/, ""),
          m4b: !!(h.canPlayType("audio/x-m4b;") || h.canPlayType("audio/m4b;") || h.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(h.canPlayType("audio/x-mp4;") || h.canPlayType("audio/mp4;") || h.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!(!O && h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          webm: !!(!O && h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          dolby: !!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
          flac: !!(h.canPlayType("audio/x-flac;") || h.canPlayType("audio/flac;")).replace(/^no$/, "")
        }, u;
      },
      /**
       * Some browsers/devices will only allow audio to be played after a user interaction.
       * Attempt to automatically unlock audio on the first user interaction.
       * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
       * @return {Howler}
       */
      _unlockAudio: function() {
        var u = this || r;
        if (!(u._audioUnlocked || !u.ctx)) {
          u._audioUnlocked = !1, u.autoUnlock = !1, !u._mobileUnloaded && u.ctx.sampleRate !== 44100 && (u._mobileUnloaded = !0, u.unload()), u._scratchBuffer = u.ctx.createBuffer(1, 1, 22050);
          var h = function(v) {
            for (; u._html5AudioPool.length < u.html5PoolSize; )
              try {
                var w = new Audio();
                w._unlocked = !0, u._releaseHtml5Audio(w);
              } catch {
                u.noAudio = !0;
                break;
              }
            for (var S = 0; S < u._howls.length; S++)
              if (!u._howls[S]._webAudio)
                for (var k = u._howls[S]._getSoundIds(), T = 0; T < k.length; T++) {
                  var A = u._howls[S]._soundById(k[T]);
                  A && A._node && !A._node._unlocked && (A._node._unlocked = !0, A._node.load());
                }
            u._autoResume();
            var O = u.ctx.createBufferSource();
            O.buffer = u._scratchBuffer, O.connect(u.ctx.destination), typeof O.start > "u" ? O.noteOn(0) : O.start(0), typeof u.ctx.resume == "function" && u.ctx.resume(), O.onended = function() {
              O.disconnect(0), u._audioUnlocked = !0, document.removeEventListener("touchstart", h, !0), document.removeEventListener("touchend", h, !0), document.removeEventListener("click", h, !0), document.removeEventListener("keydown", h, !0);
              for (var V = 0; V < u._howls.length; V++)
                u._howls[V]._emit("unlock");
            };
          };
          return document.addEventListener("touchstart", h, !0), document.addEventListener("touchend", h, !0), document.addEventListener("click", h, !0), document.addEventListener("keydown", h, !0), u;
        }
      },
      /**
       * Get an unlocked HTML5 Audio object from the pool. If none are left,
       * return a new Audio object and throw a warning.
       * @return {Audio} HTML5 Audio object.
       */
      _obtainHtml5Audio: function() {
        var u = this || r;
        if (u._html5AudioPool.length)
          return u._html5AudioPool.pop();
        var h = new Audio().play();
        return h && typeof Promise < "u" && (h instanceof Promise || typeof h.then == "function") && h.catch(function() {
          console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
        }), new Audio();
      },
      /**
       * Return an activated HTML5 Audio object to the pool.
       * @return {Howler}
       */
      _releaseHtml5Audio: function(u) {
        var h = this || r;
        return u._unlocked && h._html5AudioPool.push(u), h;
      },
      /**
       * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
       * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
       * @return {Howler}
       */
      _autoSuspend: function() {
        var u = this;
        if (!(!u.autoSuspend || !u.ctx || typeof u.ctx.suspend > "u" || !r.usingWebAudio)) {
          for (var h = 0; h < u._howls.length; h++)
            if (u._howls[h]._webAudio) {
              for (var v = 0; v < u._howls[h]._sounds.length; v++)
                if (!u._howls[h]._sounds[v]._paused)
                  return u;
            }
          return u._suspendTimer && clearTimeout(u._suspendTimer), u._suspendTimer = setTimeout(function() {
            if (u.autoSuspend) {
              u._suspendTimer = null, u.state = "suspending";
              var w = function() {
                u.state = "suspended", u._resumeAfterSuspend && (delete u._resumeAfterSuspend, u._autoResume());
              };
              u.ctx.suspend().then(w, w);
            }
          }, 3e4), u;
        }
      },
      /**
       * Automatically resume the Web Audio AudioContext when a new sound is played.
       * @return {Howler}
       */
      _autoResume: function() {
        var u = this;
        if (!(!u.ctx || typeof u.ctx.resume > "u" || !r.usingWebAudio))
          return u.state === "running" && u.ctx.state !== "interrupted" && u._suspendTimer ? (clearTimeout(u._suspendTimer), u._suspendTimer = null) : u.state === "suspended" || u.state === "running" && u.ctx.state === "interrupted" ? (u.ctx.resume().then(function() {
            u.state = "running";
            for (var h = 0; h < u._howls.length; h++)
              u._howls[h]._emit("resume");
          }), u._suspendTimer && (clearTimeout(u._suspendTimer), u._suspendTimer = null)) : u.state === "suspending" && (u._resumeAfterSuspend = !0), u;
      }
    };
    var r = new t(), o = function(u) {
      var h = this;
      if (!u.src || u.src.length === 0) {
        console.error("An array of source files must be passed with any new Howl.");
        return;
      }
      h.init(u);
    };
    o.prototype = {
      /**
       * Initialize a new Howl group object.
       * @param  {Object} o Passed in properties for this group.
       * @return {Howl}
       */
      init: function(u) {
        var h = this;
        return r.ctx || x(), h._autoplay = u.autoplay || !1, h._format = typeof u.format != "string" ? u.format : [u.format], h._html5 = u.html5 || !1, h._muted = u.mute || !1, h._loop = u.loop || !1, h._pool = u.pool || 5, h._preload = typeof u.preload == "boolean" || u.preload === "metadata" ? u.preload : !0, h._rate = u.rate || 1, h._sprite = u.sprite || {}, h._src = typeof u.src != "string" ? u.src : [u.src], h._volume = u.volume !== void 0 ? u.volume : 1, h._xhr = {
          method: u.xhr && u.xhr.method ? u.xhr.method : "GET",
          headers: u.xhr && u.xhr.headers ? u.xhr.headers : null,
          withCredentials: u.xhr && u.xhr.withCredentials ? u.xhr.withCredentials : !1
        }, h._duration = 0, h._state = "unloaded", h._sounds = [], h._endTimers = {}, h._queue = [], h._playLock = !1, h._onend = u.onend ? [{ fn: u.onend }] : [], h._onfade = u.onfade ? [{ fn: u.onfade }] : [], h._onload = u.onload ? [{ fn: u.onload }] : [], h._onloaderror = u.onloaderror ? [{ fn: u.onloaderror }] : [], h._onplayerror = u.onplayerror ? [{ fn: u.onplayerror }] : [], h._onpause = u.onpause ? [{ fn: u.onpause }] : [], h._onplay = u.onplay ? [{ fn: u.onplay }] : [], h._onstop = u.onstop ? [{ fn: u.onstop }] : [], h._onmute = u.onmute ? [{ fn: u.onmute }] : [], h._onvolume = u.onvolume ? [{ fn: u.onvolume }] : [], h._onrate = u.onrate ? [{ fn: u.onrate }] : [], h._onseek = u.onseek ? [{ fn: u.onseek }] : [], h._onunlock = u.onunlock ? [{ fn: u.onunlock }] : [], h._onresume = [], h._webAudio = r.usingWebAudio && !h._html5, typeof r.ctx < "u" && r.ctx && r.autoUnlock && r._unlockAudio(), r._howls.push(h), h._autoplay && h._queue.push({
          event: "play",
          action: function() {
            h.play();
          }
        }), h._preload && h._preload !== "none" && h.load(), h;
      },
      /**
       * Load the audio file.
       * @return {Howler}
       */
      load: function() {
        var u = this, h = null;
        if (r.noAudio) {
          u._emit("loaderror", null, "No audio support.");
          return;
        }
        typeof u._src == "string" && (u._src = [u._src]);
        for (var v = 0; v < u._src.length; v++) {
          var w, S;
          if (u._format && u._format[v])
            w = u._format[v];
          else {
            if (S = u._src[v], typeof S != "string") {
              u._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            w = /^data:audio\/([^;,]+);/i.exec(S), w || (w = /\.([^.]+)$/.exec(S.split("?", 1)[0])), w && (w = w[1].toLowerCase());
          }
          if (w || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), w && r.codecs(w)) {
            h = u._src[v];
            break;
          }
        }
        if (!h) {
          u._emit("loaderror", null, "No codec support for selected audio sources.");
          return;
        }
        return u._src = h, u._state = "loading", window.location.protocol === "https:" && h.slice(0, 5) === "http:" && (u._html5 = !0, u._webAudio = !1), new a(u), u._webAudio && f(u), u;
      },
      /**
       * Play a sound or resume previous playback.
       * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Number}          Sound ID.
       */
      play: function(u, h) {
        var v = this, w = null;
        if (typeof u == "number")
          w = u, u = null;
        else {
          if (typeof u == "string" && v._state === "loaded" && !v._sprite[u])
            return null;
          if (typeof u > "u" && (u = "__default", !v._playLock)) {
            for (var S = 0, k = 0; k < v._sounds.length; k++)
              v._sounds[k]._paused && !v._sounds[k]._ended && (S++, w = v._sounds[k]._id);
            S === 1 ? u = null : w = null;
          }
        }
        var T = w ? v._soundById(w) : v._inactiveSound();
        if (!T)
          return null;
        if (w && !u && (u = T._sprite || "__default"), v._state !== "loaded") {
          T._sprite = u, T._ended = !1;
          var A = T._id;
          return v._queue.push({
            event: "play",
            action: function() {
              v.play(A);
            }
          }), A;
        }
        if (w && !T._paused)
          return h || v._loadQueue("play"), T._id;
        v._webAudio && r._autoResume();
        var O = Math.max(0, T._seek > 0 ? T._seek : v._sprite[u][0] / 1e3), V = Math.max(0, (v._sprite[u][0] + v._sprite[u][1]) / 1e3 - O), $ = V * 1e3 / Math.abs(T._rate), X = v._sprite[u][0] / 1e3, K = (v._sprite[u][0] + v._sprite[u][1]) / 1e3;
        T._sprite = u, T._ended = !1;
        var te = function() {
          T._paused = !1, T._seek = O, T._start = X, T._stop = K, T._loop = !!(T._loop || v._sprite[u][2]);
        };
        if (O >= K) {
          v._ended(T);
          return;
        }
        var J = T._node;
        if (v._webAudio) {
          var Ce = function() {
            v._playLock = !1, te(), v._refreshBuffer(T);
            var ae = T._muted || v._muted ? 0 : T._volume;
            J.gain.setValueAtTime(ae, r.ctx.currentTime), T._playStart = r.ctx.currentTime, typeof J.bufferSource.start > "u" ? T._loop ? J.bufferSource.noteGrainOn(0, O, 86400) : J.bufferSource.noteGrainOn(0, O, V) : T._loop ? J.bufferSource.start(0, O, 86400) : J.bufferSource.start(0, O, V), $ !== 1 / 0 && (v._endTimers[T._id] = setTimeout(v._ended.bind(v, T), $)), h || setTimeout(function() {
              v._emit("play", T._id), v._loadQueue();
            }, 0);
          };
          r.state === "running" && r.ctx.state !== "interrupted" ? Ce() : (v._playLock = !0, v.once("resume", Ce), v._clearTimer(T._id));
        } else {
          var Le = function() {
            J.currentTime = O, J.muted = T._muted || v._muted || r._muted || J.muted, J.volume = T._volume * r.volume(), J.playbackRate = T._rate;
            try {
              var ae = J.play();
              if (ae && typeof Promise < "u" && (ae instanceof Promise || typeof ae.then == "function") ? (v._playLock = !0, te(), ae.then(function() {
                v._playLock = !1, J._unlocked = !0, h ? v._loadQueue() : v._emit("play", T._id);
              }).catch(function() {
                v._playLock = !1, v._emit("playerror", T._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), T._ended = !0, T._paused = !0;
              })) : h || (v._playLock = !1, te(), v._emit("play", T._id)), J.playbackRate = T._rate, J.paused) {
                v._emit("playerror", T._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                return;
              }
              u !== "__default" || T._loop ? v._endTimers[T._id] = setTimeout(v._ended.bind(v, T), $) : (v._endTimers[T._id] = function() {
                v._ended(T), J.removeEventListener("ended", v._endTimers[T._id], !1);
              }, J.addEventListener("ended", v._endTimers[T._id], !1));
            } catch (ge) {
              v._emit("playerror", T._id, ge);
            }
          };
          J.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (J.src = v._src, J.load());
          var he = window && window.ejecta || !J.readyState && r._navigator.isCocoonJS;
          if (J.readyState >= 3 || he)
            Le();
          else {
            v._playLock = !0, v._state = "loading";
            var le = function() {
              v._state = "loaded", Le(), J.removeEventListener(r._canPlayEvent, le, !1);
            };
            J.addEventListener(r._canPlayEvent, le, !1), v._clearTimer(T._id);
          }
        }
        return T._id;
      },
      /**
       * Pause playback and save current position.
       * @param  {Number} id The sound ID (empty to pause all in group).
       * @return {Howl}
       */
      pause: function(u) {
        var h = this;
        if (h._state !== "loaded" || h._playLock)
          return h._queue.push({
            event: "pause",
            action: function() {
              h.pause(u);
            }
          }), h;
        for (var v = h._getSoundIds(u), w = 0; w < v.length; w++) {
          h._clearTimer(v[w]);
          var S = h._soundById(v[w]);
          if (S && !S._paused && (S._seek = h.seek(v[w]), S._rateSeek = 0, S._paused = !0, h._stopFade(v[w]), S._node))
            if (h._webAudio) {
              if (!S._node.bufferSource)
                continue;
              typeof S._node.bufferSource.stop > "u" ? S._node.bufferSource.noteOff(0) : S._node.bufferSource.stop(0), h._cleanBuffer(S._node);
            } else
              (!isNaN(S._node.duration) || S._node.duration === 1 / 0) && S._node.pause();
          arguments[1] || h._emit("pause", S ? S._id : null);
        }
        return h;
      },
      /**
       * Stop playback and reset to start.
       * @param  {Number} id The sound ID (empty to stop all in group).
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Howl}
       */
      stop: function(u, h) {
        var v = this;
        if (v._state !== "loaded" || v._playLock)
          return v._queue.push({
            event: "stop",
            action: function() {
              v.stop(u);
            }
          }), v;
        for (var w = v._getSoundIds(u), S = 0; S < w.length; S++) {
          v._clearTimer(w[S]);
          var k = v._soundById(w[S]);
          k && (k._seek = k._start || 0, k._rateSeek = 0, k._paused = !0, k._ended = !0, v._stopFade(w[S]), k._node && (v._webAudio ? k._node.bufferSource && (typeof k._node.bufferSource.stop > "u" ? k._node.bufferSource.noteOff(0) : k._node.bufferSource.stop(0), v._cleanBuffer(k._node)) : (!isNaN(k._node.duration) || k._node.duration === 1 / 0) && (k._node.currentTime = k._start || 0, k._node.pause(), k._node.duration === 1 / 0 && v._clearSound(k._node))), h || v._emit("stop", k._id));
        }
        return v;
      },
      /**
       * Mute/unmute a single sound or all sounds in this Howl group.
       * @param  {Boolean} muted Set to true to mute and false to unmute.
       * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
       * @return {Howl}
       */
      mute: function(u, h) {
        var v = this;
        if (v._state !== "loaded" || v._playLock)
          return v._queue.push({
            event: "mute",
            action: function() {
              v.mute(u, h);
            }
          }), v;
        if (typeof h > "u")
          if (typeof u == "boolean")
            v._muted = u;
          else
            return v._muted;
        for (var w = v._getSoundIds(h), S = 0; S < w.length; S++) {
          var k = v._soundById(w[S]);
          k && (k._muted = u, k._interval && v._stopFade(k._id), v._webAudio && k._node ? k._node.gain.setValueAtTime(u ? 0 : k._volume, r.ctx.currentTime) : k._node && (k._node.muted = r._muted ? !0 : u), v._emit("mute", k._id));
        }
        return v;
      },
      /**
       * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
       *   volume() -> Returns the group's volume value.
       *   volume(id) -> Returns the sound id's current volume.
       *   volume(vol) -> Sets the volume of all sounds in this Howl group.
       *   volume(vol, id) -> Sets the volume of passed sound id.
       * @return {Howl/Number} Returns self or current volume.
       */
      volume: function() {
        var u = this, h = arguments, v, w;
        if (h.length === 0)
          return u._volume;
        if (h.length === 1 || h.length === 2 && typeof h[1] > "u") {
          var S = u._getSoundIds(), k = S.indexOf(h[0]);
          k >= 0 ? w = parseInt(h[0], 10) : v = parseFloat(h[0]);
        } else
          h.length >= 2 && (v = parseFloat(h[0]), w = parseInt(h[1], 10));
        var T;
        if (typeof v < "u" && v >= 0 && v <= 1) {
          if (u._state !== "loaded" || u._playLock)
            return u._queue.push({
              event: "volume",
              action: function() {
                u.volume.apply(u, h);
              }
            }), u;
          typeof w > "u" && (u._volume = v), w = u._getSoundIds(w);
          for (var A = 0; A < w.length; A++)
            T = u._soundById(w[A]), T && (T._volume = v, h[2] || u._stopFade(w[A]), u._webAudio && T._node && !T._muted ? T._node.gain.setValueAtTime(v, r.ctx.currentTime) : T._node && !T._muted && (T._node.volume = v * r.volume()), u._emit("volume", T._id));
        } else
          return T = w ? u._soundById(w) : u._sounds[0], T ? T._volume : 0;
        return u;
      },
      /**
       * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id (omit to fade all sounds).
       * @return {Howl}
       */
      fade: function(u, h, v, w) {
        var S = this;
        if (S._state !== "loaded" || S._playLock)
          return S._queue.push({
            event: "fade",
            action: function() {
              S.fade(u, h, v, w);
            }
          }), S;
        u = Math.min(Math.max(0, parseFloat(u)), 1), h = Math.min(Math.max(0, parseFloat(h)), 1), v = parseFloat(v), S.volume(u, w);
        for (var k = S._getSoundIds(w), T = 0; T < k.length; T++) {
          var A = S._soundById(k[T]);
          if (A) {
            if (w || S._stopFade(k[T]), S._webAudio && !A._muted) {
              var O = r.ctx.currentTime, V = O + v / 1e3;
              A._volume = u, A._node.gain.setValueAtTime(u, O), A._node.gain.linearRampToValueAtTime(h, V);
            }
            S._startFadeInterval(A, u, h, v, k[T], typeof w > "u");
          }
        }
        return S;
      },
      /**
       * Starts the internal interval to fade a sound.
       * @param  {Object} sound Reference to sound to fade.
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id to fade.
       * @param  {Boolean} isGroup   If true, set the volume on the group.
       */
      _startFadeInterval: function(u, h, v, w, S, k) {
        var T = this, A = h, O = v - h, V = Math.abs(O / 0.01), $ = Math.max(4, V > 0 ? w / V : w), X = Date.now();
        u._fadeTo = v, u._interval = setInterval(function() {
          var K = (Date.now() - X) / w;
          X = Date.now(), A += O * K, A = Math.round(A * 100) / 100, O < 0 ? A = Math.max(v, A) : A = Math.min(v, A), T._webAudio ? u._volume = A : T.volume(A, u._id, !0), k && (T._volume = A), (v < h && A <= v || v > h && A >= v) && (clearInterval(u._interval), u._interval = null, u._fadeTo = null, T.volume(v, u._id), T._emit("fade", u._id));
        }, $);
      },
      /**
       * Internal method that stops the currently playing fade when
       * a new fade starts, volume is changed or the sound is stopped.
       * @param  {Number} id The sound id.
       * @return {Howl}
       */
      _stopFade: function(u) {
        var h = this, v = h._soundById(u);
        return v && v._interval && (h._webAudio && v._node.gain.cancelScheduledValues(r.ctx.currentTime), clearInterval(v._interval), v._interval = null, h.volume(v._fadeTo, u), v._fadeTo = null, h._emit("fade", u)), h;
      },
      /**
       * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
       *   loop() -> Returns the group's loop value.
       *   loop(id) -> Returns the sound id's loop value.
       *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
       *   loop(loop, id) -> Sets the loop value of passed sound id.
       * @return {Howl/Boolean} Returns self or current loop value.
       */
      loop: function() {
        var u = this, h = arguments, v, w, S;
        if (h.length === 0)
          return u._loop;
        if (h.length === 1)
          if (typeof h[0] == "boolean")
            v = h[0], u._loop = v;
          else
            return S = u._soundById(parseInt(h[0], 10)), S ? S._loop : !1;
        else
          h.length === 2 && (v = h[0], w = parseInt(h[1], 10));
        for (var k = u._getSoundIds(w), T = 0; T < k.length; T++)
          S = u._soundById(k[T]), S && (S._loop = v, u._webAudio && S._node && S._node.bufferSource && (S._node.bufferSource.loop = v, v && (S._node.bufferSource.loopStart = S._start || 0, S._node.bufferSource.loopEnd = S._stop, u.playing(k[T]) && (u.pause(k[T], !0), u.play(k[T], !0)))));
        return u;
      },
      /**
       * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   rate() -> Returns the first sound node's current playback rate.
       *   rate(id) -> Returns the sound id's current playback rate.
       *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
       *   rate(rate, id) -> Sets the playback rate of passed sound id.
       * @return {Howl/Number} Returns self or the current playback rate.
       */
      rate: function() {
        var u = this, h = arguments, v, w;
        if (h.length === 0)
          w = u._sounds[0]._id;
        else if (h.length === 1) {
          var S = u._getSoundIds(), k = S.indexOf(h[0]);
          k >= 0 ? w = parseInt(h[0], 10) : v = parseFloat(h[0]);
        } else
          h.length === 2 && (v = parseFloat(h[0]), w = parseInt(h[1], 10));
        var T;
        if (typeof v == "number") {
          if (u._state !== "loaded" || u._playLock)
            return u._queue.push({
              event: "rate",
              action: function() {
                u.rate.apply(u, h);
              }
            }), u;
          typeof w > "u" && (u._rate = v), w = u._getSoundIds(w);
          for (var A = 0; A < w.length; A++)
            if (T = u._soundById(w[A]), T) {
              u.playing(w[A]) && (T._rateSeek = u.seek(w[A]), T._playStart = u._webAudio ? r.ctx.currentTime : T._playStart), T._rate = v, u._webAudio && T._node && T._node.bufferSource ? T._node.bufferSource.playbackRate.setValueAtTime(v, r.ctx.currentTime) : T._node && (T._node.playbackRate = v);
              var O = u.seek(w[A]), V = (u._sprite[T._sprite][0] + u._sprite[T._sprite][1]) / 1e3 - O, $ = V * 1e3 / Math.abs(T._rate);
              (u._endTimers[w[A]] || !T._paused) && (u._clearTimer(w[A]), u._endTimers[w[A]] = setTimeout(u._ended.bind(u, T), $)), u._emit("rate", T._id);
            }
        } else
          return T = u._soundById(w), T ? T._rate : u._rate;
        return u;
      },
      /**
       * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   seek() -> Returns the first sound node's current seek position.
       *   seek(id) -> Returns the sound id's current seek position.
       *   seek(seek) -> Sets the seek position of the first sound node.
       *   seek(seek, id) -> Sets the seek position of passed sound id.
       * @return {Howl/Number} Returns self or the current seek position.
       */
      seek: function() {
        var u = this, h = arguments, v, w;
        if (h.length === 0)
          u._sounds.length && (w = u._sounds[0]._id);
        else if (h.length === 1) {
          var S = u._getSoundIds(), k = S.indexOf(h[0]);
          k >= 0 ? w = parseInt(h[0], 10) : u._sounds.length && (w = u._sounds[0]._id, v = parseFloat(h[0]));
        } else
          h.length === 2 && (v = parseFloat(h[0]), w = parseInt(h[1], 10));
        if (typeof w > "u")
          return 0;
        if (typeof v == "number" && (u._state !== "loaded" || u._playLock))
          return u._queue.push({
            event: "seek",
            action: function() {
              u.seek.apply(u, h);
            }
          }), u;
        var T = u._soundById(w);
        if (T)
          if (typeof v == "number" && v >= 0) {
            var A = u.playing(w);
            A && u.pause(w, !0), T._seek = v, T._ended = !1, u._clearTimer(w), !u._webAudio && T._node && !isNaN(T._node.duration) && (T._node.currentTime = v);
            var O = function() {
              A && u.play(w, !0), u._emit("seek", w);
            };
            if (A && !u._webAudio) {
              var V = function() {
                u._playLock ? setTimeout(V, 0) : O();
              };
              setTimeout(V, 0);
            } else
              O();
          } else if (u._webAudio) {
            var $ = u.playing(w) ? r.ctx.currentTime - T._playStart : 0, X = T._rateSeek ? T._rateSeek - T._seek : 0;
            return T._seek + (X + $ * Math.abs(T._rate));
          } else
            return T._node.currentTime;
        return u;
      },
      /**
       * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
       * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
       * @return {Boolean} True if playing and false if not.
       */
      playing: function(u) {
        var h = this;
        if (typeof u == "number") {
          var v = h._soundById(u);
          return v ? !v._paused : !1;
        }
        for (var w = 0; w < h._sounds.length; w++)
          if (!h._sounds[w]._paused)
            return !0;
        return !1;
      },
      /**
       * Get the duration of this sound. Passing a sound id will return the sprite duration.
       * @param  {Number} id The sound id to check. If none is passed, return full source duration.
       * @return {Number} Audio duration in seconds.
       */
      duration: function(u) {
        var h = this, v = h._duration, w = h._soundById(u);
        return w && (v = h._sprite[w._sprite][1] / 1e3), v;
      },
      /**
       * Returns the current loaded state of this Howl.
       * @return {String} 'unloaded', 'loading', 'loaded'
       */
      state: function() {
        return this._state;
      },
      /**
       * Unload and destroy the current Howl object.
       * This will immediately stop all sound instances attached to this group.
       */
      unload: function() {
        for (var u = this, h = u._sounds, v = 0; v < h.length; v++)
          h[v]._paused || u.stop(h[v]._id), u._webAudio || (u._clearSound(h[v]._node), h[v]._node.removeEventListener("error", h[v]._errorFn, !1), h[v]._node.removeEventListener(r._canPlayEvent, h[v]._loadFn, !1), h[v]._node.removeEventListener("ended", h[v]._endFn, !1), r._releaseHtml5Audio(h[v]._node)), delete h[v]._node, u._clearTimer(h[v]._id);
        var w = r._howls.indexOf(u);
        w >= 0 && r._howls.splice(w, 1);
        var S = !0;
        for (v = 0; v < r._howls.length; v++)
          if (r._howls[v]._src === u._src || u._src.indexOf(r._howls[v]._src) >= 0) {
            S = !1;
            break;
          }
        return c && S && delete c[u._src], r.noAudio = !1, u._state = "unloaded", u._sounds = [], u = null, null;
      },
      /**
       * Listen to a custom event.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
       * @return {Howl}
       */
      on: function(u, h, v, w) {
        var S = this, k = S["_on" + u];
        return typeof h == "function" && k.push(w ? { id: v, fn: h, once: w } : { id: v, fn: h }), S;
      },
      /**
       * Remove a custom event. Call without parameters to remove all events.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to remove. Leave empty to remove all.
       * @param  {Number}   id    (optional) Only remove events for this sound.
       * @return {Howl}
       */
      off: function(u, h, v) {
        var w = this, S = w["_on" + u], k = 0;
        if (typeof h == "number" && (v = h, h = null), h || v)
          for (k = 0; k < S.length; k++) {
            var T = v === S[k].id;
            if (h === S[k].fn && T || !h && T) {
              S.splice(k, 1);
              break;
            }
          }
        else if (u)
          w["_on" + u] = [];
        else {
          var A = Object.keys(w);
          for (k = 0; k < A.length; k++)
            A[k].indexOf("_on") === 0 && Array.isArray(w[A[k]]) && (w[A[k]] = []);
        }
        return w;
      },
      /**
       * Listen to a custom event and remove it once fired.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @return {Howl}
       */
      once: function(u, h, v) {
        var w = this;
        return w.on(u, h, v, 1), w;
      },
      /**
       * Emit all events of a specific type and pass the sound id.
       * @param  {String} event Event name.
       * @param  {Number} id    Sound ID.
       * @param  {Number} msg   Message to go with event.
       * @return {Howl}
       */
      _emit: function(u, h, v) {
        for (var w = this, S = w["_on" + u], k = S.length - 1; k >= 0; k--)
          (!S[k].id || S[k].id === h || u === "load") && (setTimeout(function(T) {
            T.call(this, h, v);
          }.bind(w, S[k].fn), 0), S[k].once && w.off(u, S[k].fn, S[k].id));
        return w._loadQueue(u), w;
      },
      /**
       * Queue of actions initiated before the sound has loaded.
       * These will be called in sequence, with the next only firing
       * after the previous has finished executing (even if async like play).
       * @return {Howl}
       */
      _loadQueue: function(u) {
        var h = this;
        if (h._queue.length > 0) {
          var v = h._queue[0];
          v.event === u && (h._queue.shift(), h._loadQueue()), u || v.action();
        }
        return h;
      },
      /**
       * Fired when playback ends at the end of the duration.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _ended: function(u) {
        var h = this, v = u._sprite;
        if (!h._webAudio && u._node && !u._node.paused && !u._node.ended && u._node.currentTime < u._stop)
          return setTimeout(h._ended.bind(h, u), 100), h;
        var w = !!(u._loop || h._sprite[v][2]);
        if (h._emit("end", u._id), !h._webAudio && w && h.stop(u._id, !0).play(u._id), h._webAudio && w) {
          h._emit("play", u._id), u._seek = u._start || 0, u._rateSeek = 0, u._playStart = r.ctx.currentTime;
          var S = (u._stop - u._start) * 1e3 / Math.abs(u._rate);
          h._endTimers[u._id] = setTimeout(h._ended.bind(h, u), S);
        }
        return h._webAudio && !w && (u._paused = !0, u._ended = !0, u._seek = u._start || 0, u._rateSeek = 0, h._clearTimer(u._id), h._cleanBuffer(u._node), r._autoSuspend()), !h._webAudio && !w && h.stop(u._id, !0), h;
      },
      /**
       * Clear the end timer for a sound playback.
       * @param  {Number} id The sound ID.
       * @return {Howl}
       */
      _clearTimer: function(u) {
        var h = this;
        if (h._endTimers[u]) {
          if (typeof h._endTimers[u] != "function")
            clearTimeout(h._endTimers[u]);
          else {
            var v = h._soundById(u);
            v && v._node && v._node.removeEventListener("ended", h._endTimers[u], !1);
          }
          delete h._endTimers[u];
        }
        return h;
      },
      /**
       * Return the sound identified by this ID, or return null.
       * @param  {Number} id Sound ID
       * @return {Object}    Sound object or null.
       */
      _soundById: function(u) {
        for (var h = this, v = 0; v < h._sounds.length; v++)
          if (u === h._sounds[v]._id)
            return h._sounds[v];
        return null;
      },
      /**
       * Return an inactive sound from the pool or create a new one.
       * @return {Sound} Sound playback object.
       */
      _inactiveSound: function() {
        var u = this;
        u._drain();
        for (var h = 0; h < u._sounds.length; h++)
          if (u._sounds[h]._ended)
            return u._sounds[h].reset();
        return new a(u);
      },
      /**
       * Drain excess inactive sounds from the pool.
       */
      _drain: function() {
        var u = this, h = u._pool, v = 0, w = 0;
        if (!(u._sounds.length < h)) {
          for (w = 0; w < u._sounds.length; w++)
            u._sounds[w]._ended && v++;
          for (w = u._sounds.length - 1; w >= 0; w--) {
            if (v <= h)
              return;
            u._sounds[w]._ended && (u._webAudio && u._sounds[w]._node && u._sounds[w]._node.disconnect(0), u._sounds.splice(w, 1), v--);
          }
        }
      },
      /**
       * Get all ID's from the sounds pool.
       * @param  {Number} id Only return one ID if one is passed.
       * @return {Array}    Array of IDs.
       */
      _getSoundIds: function(u) {
        var h = this;
        if (typeof u > "u") {
          for (var v = [], w = 0; w < h._sounds.length; w++)
            v.push(h._sounds[w]._id);
          return v;
        } else
          return [u];
      },
      /**
       * Load the sound back into the buffer source.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _refreshBuffer: function(u) {
        var h = this;
        return u._node.bufferSource = r.ctx.createBufferSource(), u._node.bufferSource.buffer = c[h._src], u._panner ? u._node.bufferSource.connect(u._panner) : u._node.bufferSource.connect(u._node), u._node.bufferSource.loop = u._loop, u._loop && (u._node.bufferSource.loopStart = u._start || 0, u._node.bufferSource.loopEnd = u._stop || 0), u._node.bufferSource.playbackRate.setValueAtTime(u._rate, r.ctx.currentTime), h;
      },
      /**
       * Prevent memory leaks by cleaning up the buffer source after playback.
       * @param  {Object} node Sound's audio node containing the buffer source.
       * @return {Howl}
       */
      _cleanBuffer: function(u) {
        var h = this, v = r._navigator && r._navigator.vendor.indexOf("Apple") >= 0;
        if (r._scratchBuffer && u.bufferSource && (u.bufferSource.onended = null, u.bufferSource.disconnect(0), v))
          try {
            u.bufferSource.buffer = r._scratchBuffer;
          } catch {
          }
        return u.bufferSource = null, h;
      },
      /**
       * Set the source to a 0-second silence to stop any downloading (except in IE).
       * @param  {Object} node Audio node to clear.
       */
      _clearSound: function(u) {
        var h = /MSIE |Trident\//.test(r._navigator && r._navigator.userAgent);
        h || (u.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
      }
    };
    var a = function(u) {
      this._parent = u, this.init();
    };
    a.prototype = {
      /**
       * Initialize a new Sound object.
       * @return {Sound}
       */
      init: function() {
        var u = this, h = u._parent;
        return u._muted = h._muted, u._loop = h._loop, u._volume = h._volume, u._rate = h._rate, u._seek = 0, u._paused = !0, u._ended = !0, u._sprite = "__default", u._id = ++r._counter, h._sounds.push(u), u.create(), u;
      },
      /**
       * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
       * @return {Sound}
       */
      create: function() {
        var u = this, h = u._parent, v = r._muted || u._muted || u._parent._muted ? 0 : u._volume;
        return h._webAudio ? (u._node = typeof r.ctx.createGain > "u" ? r.ctx.createGainNode() : r.ctx.createGain(), u._node.gain.setValueAtTime(v, r.ctx.currentTime), u._node.paused = !0, u._node.connect(r.masterGain)) : r.noAudio || (u._node = r._obtainHtml5Audio(), u._errorFn = u._errorListener.bind(u), u._node.addEventListener("error", u._errorFn, !1), u._loadFn = u._loadListener.bind(u), u._node.addEventListener(r._canPlayEvent, u._loadFn, !1), u._endFn = u._endListener.bind(u), u._node.addEventListener("ended", u._endFn, !1), u._node.src = h._src, u._node.preload = h._preload === !0 ? "auto" : h._preload, u._node.volume = v * r.volume(), u._node.load()), u;
      },
      /**
       * Reset the parameters of this sound to the original state (for recycle).
       * @return {Sound}
       */
      reset: function() {
        var u = this, h = u._parent;
        return u._muted = h._muted, u._loop = h._loop, u._volume = h._volume, u._rate = h._rate, u._seek = 0, u._rateSeek = 0, u._paused = !0, u._ended = !0, u._sprite = "__default", u._id = ++r._counter, u;
      },
      /**
       * HTML5 Audio error listener callback.
       */
      _errorListener: function() {
        var u = this;
        u._parent._emit("loaderror", u._id, u._node.error ? u._node.error.code : 0), u._node.removeEventListener("error", u._errorFn, !1);
      },
      /**
       * HTML5 Audio canplaythrough listener callback.
       */
      _loadListener: function() {
        var u = this, h = u._parent;
        h._duration = Math.ceil(u._node.duration * 10) / 10, Object.keys(h._sprite).length === 0 && (h._sprite = { __default: [0, h._duration * 1e3] }), h._state !== "loaded" && (h._state = "loaded", h._emit("load"), h._loadQueue()), u._node.removeEventListener(r._canPlayEvent, u._loadFn, !1);
      },
      /**
       * HTML5 Audio ended listener callback.
       */
      _endListener: function() {
        var u = this, h = u._parent;
        h._duration === 1 / 0 && (h._duration = Math.ceil(u._node.duration * 10) / 10, h._sprite.__default[1] === 1 / 0 && (h._sprite.__default[1] = h._duration * 1e3), h._ended(u)), u._node.removeEventListener("ended", u._endFn, !1);
      }
    };
    var c = {}, f = function(u) {
      var h = u._src;
      if (c[h]) {
        u._duration = c[h].duration, g(u);
        return;
      }
      if (/^data:[^;]+;base64,/.test(h)) {
        for (var v = atob(h.split(",")[1]), w = new Uint8Array(v.length), S = 0; S < v.length; ++S)
          w[S] = v.charCodeAt(S);
        y(w.buffer, u);
      } else {
        var k = new XMLHttpRequest();
        k.open(u._xhr.method, h, !0), k.withCredentials = u._xhr.withCredentials, k.responseType = "arraybuffer", u._xhr.headers && Object.keys(u._xhr.headers).forEach(function(T) {
          k.setRequestHeader(T, u._xhr.headers[T]);
        }), k.onload = function() {
          var T = (k.status + "")[0];
          if (T !== "0" && T !== "2" && T !== "3") {
            u._emit("loaderror", null, "Failed loading audio file with status: " + k.status + ".");
            return;
          }
          y(k.response, u);
        }, k.onerror = function() {
          u._webAudio && (u._html5 = !0, u._webAudio = !1, u._sounds = [], delete c[h], u.load());
        }, m(k);
      }
    }, m = function(u) {
      try {
        u.send();
      } catch {
        u.onerror();
      }
    }, y = function(u, h) {
      var v = function() {
        h._emit("loaderror", null, "Decoding audio data failed.");
      }, w = function(S) {
        S && h._sounds.length > 0 ? (c[h._src] = S, g(h, S)) : v();
      };
      typeof Promise < "u" && r.ctx.decodeAudioData.length === 1 ? r.ctx.decodeAudioData(u).then(w).catch(v) : r.ctx.decodeAudioData(u, w, v);
    }, g = function(u, h) {
      h && !u._duration && (u._duration = h.duration), Object.keys(u._sprite).length === 0 && (u._sprite = { __default: [0, u._duration * 1e3] }), u._state !== "loaded" && (u._state = "loaded", u._emit("load"), u._loadQueue());
    }, x = function() {
      if (r.usingWebAudio) {
        try {
          typeof AudioContext < "u" ? r.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? r.ctx = new webkitAudioContext() : r.usingWebAudio = !1;
        } catch {
          r.usingWebAudio = !1;
        }
        r.ctx || (r.usingWebAudio = !1);
        var u = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform), h = r._navigator && r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), v = h ? parseInt(h[1], 10) : null;
        if (u && v && v < 9) {
          var w = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
          r._navigator && !w && (r.usingWebAudio = !1);
        }
        r.usingWebAudio && (r.masterGain = typeof r.ctx.createGain > "u" ? r.ctx.createGainNode() : r.ctx.createGain(), r.masterGain.gain.setValueAtTime(r._muted ? 0 : r._volume, r.ctx.currentTime), r.masterGain.connect(r.ctx.destination)), r._setup();
      }
    };
    e.Howler = r, e.Howl = o, typeof Xn < "u" ? (Xn.HowlerGlobal = t, Xn.Howler = r, Xn.Howl = o, Xn.Sound = a) : typeof window < "u" && (window.HowlerGlobal = t, window.Howler = r, window.Howl = o, window.Sound = a);
  })();
  /*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */
  (function() {
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(r) {
      var o = this;
      if (!o.ctx || !o.ctx.listener)
        return o;
      for (var a = o._howls.length - 1; a >= 0; a--)
        o._howls[a].stereo(r);
      return o;
    }, HowlerGlobal.prototype.pos = function(r, o, a) {
      var c = this;
      if (!c.ctx || !c.ctx.listener)
        return c;
      if (o = typeof o != "number" ? c._pos[1] : o, a = typeof a != "number" ? c._pos[2] : a, typeof r == "number")
        c._pos = [r, o, a], typeof c.ctx.listener.positionX < "u" ? (c.ctx.listener.positionX.setTargetAtTime(c._pos[0], Howler.ctx.currentTime, 0.1), c.ctx.listener.positionY.setTargetAtTime(c._pos[1], Howler.ctx.currentTime, 0.1), c.ctx.listener.positionZ.setTargetAtTime(c._pos[2], Howler.ctx.currentTime, 0.1)) : c.ctx.listener.setPosition(c._pos[0], c._pos[1], c._pos[2]);
      else
        return c._pos;
      return c;
    }, HowlerGlobal.prototype.orientation = function(r, o, a, c, f, m) {
      var y = this;
      if (!y.ctx || !y.ctx.listener)
        return y;
      var g = y._orientation;
      if (o = typeof o != "number" ? g[1] : o, a = typeof a != "number" ? g[2] : a, c = typeof c != "number" ? g[3] : c, f = typeof f != "number" ? g[4] : f, m = typeof m != "number" ? g[5] : m, typeof r == "number")
        y._orientation = [r, o, a, c, f, m], typeof y.ctx.listener.forwardX < "u" ? (y.ctx.listener.forwardX.setTargetAtTime(r, Howler.ctx.currentTime, 0.1), y.ctx.listener.forwardY.setTargetAtTime(o, Howler.ctx.currentTime, 0.1), y.ctx.listener.forwardZ.setTargetAtTime(a, Howler.ctx.currentTime, 0.1), y.ctx.listener.upX.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), y.ctx.listener.upY.setTargetAtTime(f, Howler.ctx.currentTime, 0.1), y.ctx.listener.upZ.setTargetAtTime(m, Howler.ctx.currentTime, 0.1)) : y.ctx.listener.setOrientation(r, o, a, c, f, m);
      else
        return g;
      return y;
    }, Howl.prototype.init = function(r) {
      return function(o) {
        var a = this;
        return a._orientation = o.orientation || [1, 0, 0], a._stereo = o.stereo || null, a._pos = o.pos || null, a._pannerAttr = {
          coneInnerAngle: typeof o.coneInnerAngle < "u" ? o.coneInnerAngle : 360,
          coneOuterAngle: typeof o.coneOuterAngle < "u" ? o.coneOuterAngle : 360,
          coneOuterGain: typeof o.coneOuterGain < "u" ? o.coneOuterGain : 0,
          distanceModel: typeof o.distanceModel < "u" ? o.distanceModel : "inverse",
          maxDistance: typeof o.maxDistance < "u" ? o.maxDistance : 1e4,
          panningModel: typeof o.panningModel < "u" ? o.panningModel : "HRTF",
          refDistance: typeof o.refDistance < "u" ? o.refDistance : 1,
          rolloffFactor: typeof o.rolloffFactor < "u" ? o.rolloffFactor : 1
        }, a._onstereo = o.onstereo ? [{ fn: o.onstereo }] : [], a._onpos = o.onpos ? [{ fn: o.onpos }] : [], a._onorientation = o.onorientation ? [{ fn: o.onorientation }] : [], r.call(this, o);
      };
    }(Howl.prototype.init), Howl.prototype.stereo = function(r, o) {
      var a = this;
      if (!a._webAudio)
        return a;
      if (a._state !== "loaded")
        return a._queue.push({
          event: "stereo",
          action: function() {
            a.stereo(r, o);
          }
        }), a;
      var c = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
      if (typeof o > "u")
        if (typeof r == "number")
          a._stereo = r, a._pos = [r, 0, 0];
        else
          return a._stereo;
      for (var f = a._getSoundIds(o), m = 0; m < f.length; m++) {
        var y = a._soundById(f[m]);
        if (y)
          if (typeof r == "number")
            y._stereo = r, y._pos = [r, 0, 0], y._node && (y._pannerAttr.panningModel = "equalpower", (!y._panner || !y._panner.pan) && t(y, c), c === "spatial" ? typeof y._panner.positionX < "u" ? (y._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), y._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), y._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : y._panner.setPosition(r, 0, 0) : y._panner.pan.setValueAtTime(r, Howler.ctx.currentTime)), a._emit("stereo", y._id);
          else
            return y._stereo;
      }
      return a;
    }, Howl.prototype.pos = function(r, o, a, c) {
      var f = this;
      if (!f._webAudio)
        return f;
      if (f._state !== "loaded")
        return f._queue.push({
          event: "pos",
          action: function() {
            f.pos(r, o, a, c);
          }
        }), f;
      if (o = typeof o != "number" ? 0 : o, a = typeof a != "number" ? -0.5 : a, typeof c > "u")
        if (typeof r == "number")
          f._pos = [r, o, a];
        else
          return f._pos;
      for (var m = f._getSoundIds(c), y = 0; y < m.length; y++) {
        var g = f._soundById(m[y]);
        if (g)
          if (typeof r == "number")
            g._pos = [r, o, a], g._node && ((!g._panner || g._panner.pan) && t(g, "spatial"), typeof g._panner.positionX < "u" ? (g._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), g._panner.positionY.setValueAtTime(o, Howler.ctx.currentTime), g._panner.positionZ.setValueAtTime(a, Howler.ctx.currentTime)) : g._panner.setPosition(r, o, a)), f._emit("pos", g._id);
          else
            return g._pos;
      }
      return f;
    }, Howl.prototype.orientation = function(r, o, a, c) {
      var f = this;
      if (!f._webAudio)
        return f;
      if (f._state !== "loaded")
        return f._queue.push({
          event: "orientation",
          action: function() {
            f.orientation(r, o, a, c);
          }
        }), f;
      if (o = typeof o != "number" ? f._orientation[1] : o, a = typeof a != "number" ? f._orientation[2] : a, typeof c > "u")
        if (typeof r == "number")
          f._orientation = [r, o, a];
        else
          return f._orientation;
      for (var m = f._getSoundIds(c), y = 0; y < m.length; y++) {
        var g = f._soundById(m[y]);
        if (g)
          if (typeof r == "number")
            g._orientation = [r, o, a], g._node && (g._panner || (g._pos || (g._pos = f._pos || [0, 0, -0.5]), t(g, "spatial")), typeof g._panner.orientationX < "u" ? (g._panner.orientationX.setValueAtTime(r, Howler.ctx.currentTime), g._panner.orientationY.setValueAtTime(o, Howler.ctx.currentTime), g._panner.orientationZ.setValueAtTime(a, Howler.ctx.currentTime)) : g._panner.setOrientation(r, o, a)), f._emit("orientation", g._id);
          else
            return g._orientation;
      }
      return f;
    }, Howl.prototype.pannerAttr = function() {
      var r = this, o = arguments, a, c, f;
      if (!r._webAudio)
        return r;
      if (o.length === 0)
        return r._pannerAttr;
      if (o.length === 1)
        if (typeof o[0] == "object")
          a = o[0], typeof c > "u" && (a.pannerAttr || (a.pannerAttr = {
            coneInnerAngle: a.coneInnerAngle,
            coneOuterAngle: a.coneOuterAngle,
            coneOuterGain: a.coneOuterGain,
            distanceModel: a.distanceModel,
            maxDistance: a.maxDistance,
            refDistance: a.refDistance,
            rolloffFactor: a.rolloffFactor,
            panningModel: a.panningModel
          }), r._pannerAttr = {
            coneInnerAngle: typeof a.pannerAttr.coneInnerAngle < "u" ? a.pannerAttr.coneInnerAngle : r._coneInnerAngle,
            coneOuterAngle: typeof a.pannerAttr.coneOuterAngle < "u" ? a.pannerAttr.coneOuterAngle : r._coneOuterAngle,
            coneOuterGain: typeof a.pannerAttr.coneOuterGain < "u" ? a.pannerAttr.coneOuterGain : r._coneOuterGain,
            distanceModel: typeof a.pannerAttr.distanceModel < "u" ? a.pannerAttr.distanceModel : r._distanceModel,
            maxDistance: typeof a.pannerAttr.maxDistance < "u" ? a.pannerAttr.maxDistance : r._maxDistance,
            refDistance: typeof a.pannerAttr.refDistance < "u" ? a.pannerAttr.refDistance : r._refDistance,
            rolloffFactor: typeof a.pannerAttr.rolloffFactor < "u" ? a.pannerAttr.rolloffFactor : r._rolloffFactor,
            panningModel: typeof a.pannerAttr.panningModel < "u" ? a.pannerAttr.panningModel : r._panningModel
          });
        else
          return f = r._soundById(parseInt(o[0], 10)), f ? f._pannerAttr : r._pannerAttr;
      else
        o.length === 2 && (a = o[0], c = parseInt(o[1], 10));
      for (var m = r._getSoundIds(c), y = 0; y < m.length; y++)
        if (f = r._soundById(m[y]), f) {
          var g = f._pannerAttr;
          g = {
            coneInnerAngle: typeof a.coneInnerAngle < "u" ? a.coneInnerAngle : g.coneInnerAngle,
            coneOuterAngle: typeof a.coneOuterAngle < "u" ? a.coneOuterAngle : g.coneOuterAngle,
            coneOuterGain: typeof a.coneOuterGain < "u" ? a.coneOuterGain : g.coneOuterGain,
            distanceModel: typeof a.distanceModel < "u" ? a.distanceModel : g.distanceModel,
            maxDistance: typeof a.maxDistance < "u" ? a.maxDistance : g.maxDistance,
            refDistance: typeof a.refDistance < "u" ? a.refDistance : g.refDistance,
            rolloffFactor: typeof a.rolloffFactor < "u" ? a.rolloffFactor : g.rolloffFactor,
            panningModel: typeof a.panningModel < "u" ? a.panningModel : g.panningModel
          };
          var x = f._panner;
          x ? (x.coneInnerAngle = g.coneInnerAngle, x.coneOuterAngle = g.coneOuterAngle, x.coneOuterGain = g.coneOuterGain, x.distanceModel = g.distanceModel, x.maxDistance = g.maxDistance, x.refDistance = g.refDistance, x.rolloffFactor = g.rolloffFactor, x.panningModel = g.panningModel) : (f._pos || (f._pos = r._pos || [0, 0, -0.5]), t(f, "spatial"));
        }
      return r;
    }, Sound.prototype.init = function(r) {
      return function() {
        var o = this, a = o._parent;
        o._orientation = a._orientation, o._stereo = a._stereo, o._pos = a._pos, o._pannerAttr = a._pannerAttr, r.call(this), o._stereo ? a.stereo(o._stereo) : o._pos && a.pos(o._pos[0], o._pos[1], o._pos[2], o._id);
      };
    }(Sound.prototype.init), Sound.prototype.reset = function(r) {
      return function() {
        var o = this, a = o._parent;
        return o._orientation = a._orientation, o._stereo = a._stereo, o._pos = a._pos, o._pannerAttr = a._pannerAttr, o._stereo ? a.stereo(o._stereo) : o._pos ? a.pos(o._pos[0], o._pos[1], o._pos[2], o._id) : o._panner && (o._panner.disconnect(0), o._panner = void 0, a._refreshBuffer(o)), r.call(this);
      };
    }(Sound.prototype.reset);
    var t = function(r, o) {
      o = o || "spatial", o === "spatial" ? (r._panner = Howler.ctx.createPanner(), r._panner.coneInnerAngle = r._pannerAttr.coneInnerAngle, r._panner.coneOuterAngle = r._pannerAttr.coneOuterAngle, r._panner.coneOuterGain = r._pannerAttr.coneOuterGain, r._panner.distanceModel = r._pannerAttr.distanceModel, r._panner.maxDistance = r._pannerAttr.maxDistance, r._panner.refDistance = r._pannerAttr.refDistance, r._panner.rolloffFactor = r._pannerAttr.rolloffFactor, r._panner.panningModel = r._pannerAttr.panningModel, typeof r._panner.positionX < "u" ? (r._panner.positionX.setValueAtTime(r._pos[0], Howler.ctx.currentTime), r._panner.positionY.setValueAtTime(r._pos[1], Howler.ctx.currentTime), r._panner.positionZ.setValueAtTime(r._pos[2], Howler.ctx.currentTime)) : r._panner.setPosition(r._pos[0], r._pos[1], r._pos[2]), typeof r._panner.orientationX < "u" ? (r._panner.orientationX.setValueAtTime(r._orientation[0], Howler.ctx.currentTime), r._panner.orientationY.setValueAtTime(r._orientation[1], Howler.ctx.currentTime), r._panner.orientationZ.setValueAtTime(r._orientation[2], Howler.ctx.currentTime)) : r._panner.setOrientation(r._orientation[0], r._orientation[1], r._orientation[2])) : (r._panner = Howler.ctx.createStereoPanner(), r._panner.pan.setValueAtTime(r._stereo, Howler.ctx.currentTime)), r._panner.connect(r._node), r._paused || r._parent.pause(r._id, !0).play(r._id, !0);
    };
  })();
})(Nv);
const Fv = {
  playSound: async (e) => {
    const t = new Nv.Howl({
      src: [e],
      autoplay: !0,
      html5: !0,
      pool: 1,
      volume: 0.3,
      onunlock: () => {
        console.log("onunlock");
      }
    });
    console.log("play audio"), t.play(), await new Promise((r) => {
      t.on("end", r);
    }), t.unload(), Howler.unload();
  }
}, oP = () => {
  var S;
  const e = Kw(), { popup_messages: t, ringtones: r } = Nt(), { isAlreadyOpen: o } = In(), [a, c] = M.useState(-1), [f, m] = M.useState(!1), [y, g] = M.useState(!1), x = lv((S = t[0]) == null ? void 0 : S.agentId), u = M.useMemo(() => t, [t]), h = M.useMemo(() => u.filter((k, T) => T <= a), [a, u]), v = M.useMemo(() => e.isTop ? -10 : 10, [e.isTop]), w = M.useCallback(
    (k) => {
      if (a >= h.length) {
        k();
        return;
      }
      c((T) => {
        const A = T + 1;
        return A === 0 && t.length > 0 && !o && Fv.playSound(r.popup_message), A;
      });
    },
    [h.length, a, o, t.length]
  );
  return M.useEffect(() => {
    setTimeout(() => {
      g(() => !0);
    }, 1e3);
  }, []), M.useEffect(() => {
    if (y) {
      const k = setInterval(() => {
        w(() => clearInterval(k));
      }, 2e3);
      return () => clearInterval(k);
    }
  }, [y, w]), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(W0, { children: !o && !f && h.length > 0 && /* @__PURE__ */ E.jsx(
    iP,
    {
      initial: {
        opacity: 0,
        y: v
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        y: v
      },
      transition: { duration: 0.1, ease: [0.42, 0, 0.58, 1] },
      children: /* @__PURE__ */ E.jsx(VC, { children: /* @__PURE__ */ E.jsxs("div", { className: "popup-wrap", children: [
        /* @__PURE__ */ E.jsx(
          Ui.button,
          {
            layout: !0,
            className: "btn-close",
            onClick: () => {
              m(() => !0);
            },
            initial: {
              opacity: 0,
              y: v
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              y: v
            },
            transition: a <= 0 ? void 0 : { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
            children: "Fechar"
          }
        ),
        h.map((k, T) => /* @__PURE__ */ E.jsxs(
          Ui.div,
          {
            layout: !0,
            initial: {
              opacity: 0,
              y: v
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              y: v
            },
            transition: a <= 0 ? void 0 : { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
            layoutId: `popup.${T}`,
            className: "popup-item",
            children: [
              x.picture_url && /* @__PURE__ */ E.jsx("div", { className: "popup-item__avatar", children: /* @__PURE__ */ E.jsx("img", { src: x.picture_url, alt: "avatar" }) }),
              /* @__PURE__ */ E.jsx("div", { className: "popup-item__content", children: k.message.split(`
`).map((A, O) => /* @__PURE__ */ E.jsx("p", { children: A }, `popup.${T}.line.${O}`)) })
            ]
          },
          `popup.${T}`
        ))
      ] }) })
    }
  ) }) });
}, sP = () => {
  const { isOpen: e, toggle: t, go: r } = In(), { layout: o } = Nt(), { isAuth: a } = Pl(), { app: c } = Nt();
  return M.useEffect(() => {
    !a && c.is_auth_required ? r("auth") : r("home");
  }, []), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
    Xw,
    {
      theme: {
        ...o,
        isRight: [
          tt.ChatPosition.BottomRight,
          tt.ChatPosition.TopRight
        ].includes(o.position),
        isLeft: [
          tt.ChatPosition.BottomLeft,
          tt.ChatPosition.TopLeft
        ].includes(o.position),
        isTop: [
          tt.ChatPosition.TopLeft,
          tt.ChatPosition.TopRight
        ].includes(o.position),
        isBottom: [
          tt.ChatPosition.BottomLeft,
          tt.ChatPosition.BottomRight
        ].includes(o.position)
      },
      children: /* @__PURE__ */ E.jsx(w_, { children: /* @__PURE__ */ E.jsxs(__, { isOpen: e, children: [
        /* @__PURE__ */ E.jsx(W0, { children: e && /* @__PURE__ */ E.jsx(rP, {}) }),
        /* @__PURE__ */ E.jsxs(S_, { children: [
          /* @__PURE__ */ E.jsx(oP, {}),
          /* @__PURE__ */ E.jsx(k_, { isOpen: e, onClick: t, children: e ? /* @__PURE__ */ E.jsx(rd, {}) : /* @__PURE__ */ E.jsx(hs, {}) })
        ] })
      ] }) })
    }
  ) });
}, aP = ({
  children: e
}) => {
  const { loadConversationsRequest: t } = Ki(), r = rr((o) => o.set);
  return M.useEffect(() => {
    t().then((o) => {
      r(o);
    });
  }, []), /* @__PURE__ */ E.jsx(E.Fragment, { children: e });
}, Fn = /* @__PURE__ */ Object.create(null);
Fn.open = "0";
Fn.close = "1";
Fn.ping = "2";
Fn.pong = "3";
Fn.message = "4";
Fn.upgrade = "5";
Fn.noop = "6";
const qa = /* @__PURE__ */ Object.create(null);
Object.keys(Fn).forEach((e) => {
  qa[Fn[e]] = e;
});
const lP = { type: "error", data: "parser error" }, uP = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", cP = typeof ArrayBuffer == "function", fP = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Iv = ({ type: e, data: t }, r, o) => uP && t instanceof Blob ? r ? o(t) : Jg(t, o) : cP && (t instanceof ArrayBuffer || fP(t)) ? r ? o(t) : Jg(new Blob([t]), o) : o(Fn[e] + (t || "")), Jg = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const o = r.result.split(",")[1];
    t("b" + (o || ""));
  }, r.readAsDataURL(e);
}, ey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Go = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ey.length; e++)
  Go[ey.charCodeAt(e)] = e;
const dP = (e) => {
  let t = e.length * 0.75, r = e.length, o, a = 0, c, f, m, y;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const g = new ArrayBuffer(t), x = new Uint8Array(g);
  for (o = 0; o < r; o += 4)
    c = Go[e.charCodeAt(o)], f = Go[e.charCodeAt(o + 1)], m = Go[e.charCodeAt(o + 2)], y = Go[e.charCodeAt(o + 3)], x[a++] = c << 2 | f >> 4, x[a++] = (f & 15) << 4 | m >> 2, x[a++] = (m & 3) << 6 | y & 63;
  return g;
}, hP = typeof ArrayBuffer == "function", jv = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Vv(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: pP(e.substring(1), t)
  } : qa[r] ? e.length > 1 ? {
    type: qa[r],
    data: e.substring(1)
  } : {
    type: qa[r]
  } : lP;
}, pP = (e, t) => {
  if (hP) {
    const r = dP(e);
    return Vv(r, t);
  } else
    return { base64: !0, data: e };
}, Vv = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, Bv = String.fromCharCode(30), mP = (e, t) => {
  const r = e.length, o = new Array(r);
  let a = 0;
  e.forEach((c, f) => {
    Iv(c, !1, (m) => {
      o[f] = m, ++a === r && t(o.join(Bv));
    });
  });
}, gP = (e, t) => {
  const r = e.split(Bv), o = [];
  for (let a = 0; a < r.length; a++) {
    const c = jv(r[a], t);
    if (o.push(c), c.type === "error")
      break;
  }
  return o;
}, zv = 4;
function lt(e) {
  if (e)
    return yP(e);
}
function yP(e) {
  for (var t in lt.prototype)
    e[t] = lt.prototype[t];
  return e;
}
lt.prototype.on = lt.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
lt.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
lt.prototype.off = lt.prototype.removeListener = lt.prototype.removeAllListeners = lt.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var o, a = 0; a < r.length; a++)
    if (o = r[a], o === t || o.fn === t) {
      r.splice(a, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
lt.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], o = 1; o < arguments.length; o++)
    t[o - 1] = arguments[o];
  if (r) {
    r = r.slice(0);
    for (var o = 0, a = r.length; o < a; ++o)
      r[o].apply(this, t);
  }
  return this;
};
lt.prototype.emitReserved = lt.prototype.emit;
lt.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
lt.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const sn = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function $v(e, ...t) {
  return t.reduce((r, o) => (e.hasOwnProperty(o) && (r[o] = e[o]), r), {});
}
const vP = sn.setTimeout, xP = sn.clearTimeout;
function Fl(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = vP.bind(sn), e.clearTimeoutFn = xP.bind(sn)) : (e.setTimeoutFn = sn.setTimeout.bind(sn), e.clearTimeoutFn = sn.clearTimeout.bind(sn));
}
const wP = 1.33;
function _P(e) {
  return typeof e == "string" ? SP(e) : Math.ceil((e.byteLength || e.size) * wP);
}
function SP(e) {
  let t = 0, r = 0;
  for (let o = 0, a = e.length; o < a; o++)
    t = e.charCodeAt(o), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (o++, r += 4);
  return r;
}
class kP extends Error {
  constructor(t, r, o) {
    super(t), this.description = r, this.context = o, this.type = "TransportError";
  }
}
class Uv extends lt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Fl(this, t), this.opts = t, this.query = t.query, this.socket = t.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, r, o) {
    return super.emitReserved("error", new kP(t, r, o)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const r = jv(t, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
}
const Hv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Rf = 64, TP = {};
let ty = 0, Ma = 0, ny;
function ry(e) {
  let t = "";
  do
    t = Hv[e % Rf] + t, e = Math.floor(e / Rf);
  while (e > 0);
  return t;
}
function Wv() {
  const e = ry(+/* @__PURE__ */ new Date());
  return e !== ny ? (ty = 0, ny = e) : e + "." + ry(ty++);
}
for (; Ma < Rf; Ma++)
  TP[Hv[Ma]] = Ma;
function qv(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function CP(e) {
  let t = {}, r = e.split("&");
  for (let o = 0, a = r.length; o < a; o++) {
    let c = r[o].split("=");
    t[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return t;
}
let Gv = !1;
try {
  Gv = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const EP = Gv;
function Kv(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || EP))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new sn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function AP() {
}
const bP = function() {
  return new Kv({
    xdomain: !1
  }).responseType != null;
}();
class PP extends Uv {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), this.polling = !1, typeof location < "u") {
      const o = location.protocol === "https:";
      let a = location.port;
      a || (a = o ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || a !== t.port, this.xs = t.secure !== o;
    }
    const r = t && t.forceBase64;
    this.supportsBinary = bP && !r;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this.polling || !this.writable) {
      let o = 0;
      this.polling && (o++, this.once("pollComplete", function() {
        --o || r();
      })), this.writable || (o++, this.once("drain", function() {
        --o || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const r = (o) => {
      if (this.readyState === "opening" && o.type === "open" && this.onOpen(), o.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(o);
    };
    gP(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, mP(t, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    let t = this.query || {};
    const r = this.opts.secure ? "https" : "http";
    let o = "";
    this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Wv()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port);
    const a = qv(t), c = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (c ? "[" + this.opts.hostname + "]" : this.opts.hostname) + o + this.opts.path + (a.length ? "?" + a : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(t = {}) {
    return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new Nn(this.uri(), t);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const o = this.request({
      method: "POST",
      data: t
    });
    o.on("success", r), o.on("error", (a, c) => {
      this.onError("xhr post error", a, c);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, o) => {
      this.onError("xhr poll error", r, o);
    }), this.pollXhr = t;
  }
}
class Nn extends lt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r) {
    super(), Fl(this, r), this.opts = r, this.method = r.method || "GET", this.uri = t, this.async = r.async !== !1, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const t = $v(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
    const r = this.xhr = new Kv(t);
    try {
      r.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let o in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this.opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = () => {
        r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this.data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this.onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = Nn.requestsCount++, Nn.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = AP, t)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Nn.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const t = this.xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
Nn.requestsCount = 0;
Nn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", iy);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in sn ? "pagehide" : "unload";
    addEventListener(e, iy, !1);
  }
}
function iy() {
  for (let e in Nn.requests)
    Nn.requests.hasOwnProperty(e) && Nn.requests[e].abort();
}
const Yv = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0))(), Da = sn.WebSocket || sn.MozWebSocket, oy = !0, RP = "arraybuffer", sy = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class OP extends Uv {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(t) {
    super(t), this.supportsBinary = !t.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const t = this.uri(), r = this.opts.protocols, o = sy ? {} : $v(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
    try {
      this.ws = oy && !sy ? r ? new Da(t, r) : new Da(t) : new Da(t, r, o);
    } catch (a) {
      return this.emitReserved("error", a);
    }
    this.ws.binaryType = this.socket.binaryType || RP, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const o = t[r], a = r === t.length - 1;
      Iv(o, this.supportsBinary, (c) => {
        const f = {};
        try {
          oy && this.ws.send(c);
        } catch {
        }
        a && Yv(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    let t = this.query || {};
    const r = this.opts.secure ? "wss" : "ws";
    let o = "";
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = Wv()), this.supportsBinary || (t.b64 = 1);
    const a = qv(t), c = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (c ? "[" + this.opts.hostname + "]" : this.opts.hostname) + o + this.opts.path + (a.length ? "?" + a : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Da;
  }
}
const LP = {
  websocket: OP,
  polling: PP
}, MP = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, DP = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Of(e) {
  const t = e, r = e.indexOf("["), o = e.indexOf("]");
  r != -1 && o != -1 && (e = e.substring(0, r) + e.substring(r, o).replace(/:/g, ";") + e.substring(o, e.length));
  let a = MP.exec(e || ""), c = {}, f = 14;
  for (; f--; )
    c[DP[f]] = a[f] || "";
  return r != -1 && o != -1 && (c.source = t, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0), c.pathNames = NP(c, c.path), c.queryKey = FP(c, c.query), c;
}
function NP(e, t) {
  const r = /\/{2,9}/g, o = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && o.splice(0, 1), t.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
}
function FP(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, a, c) {
    a && (r[a] = c);
  }), r;
}
let Qv = class Ri extends lt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r = {}) {
    super(), this.writeBuffer = [], t && typeof t == "object" && (r = t, t = null), t ? (t = Of(t), r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = Of(r.host).host), Fl(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !0
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = CP(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = zv, r.transport = t, this.id && (r.sid = this.id);
    const o = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new LP[t](o);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let t;
    if (this.opts.rememberUpgrade && Ri.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(t) {
    let r = this.createTransport(t), o = !1;
    Ri.priorWebsocketSuccess = !1;
    const a = () => {
      o || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (u) => {
        if (!o)
          if (u.type === "pong" && u.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Ri.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              o || this.readyState !== "closed" && (x(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = r.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function c() {
      o || (o = !0, x(), r.close(), r = null);
    }
    const f = (u) => {
      const h = new Error("probe error: " + u);
      h.transport = r.name, c(), this.emitReserved("upgradeError", h);
    };
    function m() {
      f("transport closed");
    }
    function y() {
      f("socket closed");
    }
    function g(u) {
      r && u.name !== r.name && c();
    }
    const x = () => {
      r.removeListener("open", a), r.removeListener("error", f), r.removeListener("close", m), this.off("close", y), this.off("upgrading", g);
    };
    r.once("open", a), r.once("error", f), r.once("close", m), this.once("close", y), this.once("upgrading", g), r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Ri.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let t = 0;
      const r = this.upgrades.length;
      for (; t < r; t++)
        this.probe(this.upgrades[t]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const r = new Error("server error");
          r.code = t.data, this.onError(r);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this.getWritablePackets();
      this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let o = 0; o < this.writeBuffer.length; o++) {
      const a = this.writeBuffer[o].data;
      if (a && (r += _P(a)), o > 0 && r > this.maxPayload)
        return this.writeBuffer.slice(0, o);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(t, r, o) {
    return this.sendPacket("message", t, r, o), this;
  }
  send(t, r, o) {
    return this.sendPacket("message", t, r, o), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(t, r, o, a) {
    if (typeof r == "function" && (a = r, r = void 0), typeof o == "function" && (a = o, o = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    o = o || {}, o.compress = o.compress !== !1;
    const c = {
      type: t,
      data: r,
      options: o
    };
    this.emitReserved("packetCreate", c), this.writeBuffer.push(c), a && this.once("flush", a), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this.onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, o = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? o() : t();
    }) : this.upgrading ? o() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(t) {
    Ri.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(t, r) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(t) {
    const r = [];
    let o = 0;
    const a = t.length;
    for (; o < a; o++)
      ~this.transports.indexOf(t[o]) && r.push(t[o]);
    return r;
  }
};
Qv.protocol = zv;
function IP(e, t = "", r) {
  let o = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), o = Of(e)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
  const c = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
  return o.id = o.protocol + "://" + c + ":" + o.port + t, o.href = o.protocol + "://" + c + (r && r.port === o.port ? "" : ":" + o.port), o;
}
const jP = typeof ArrayBuffer == "function", VP = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Xv = Object.prototype.toString, BP = typeof Blob == "function" || typeof Blob < "u" && Xv.call(Blob) === "[object BlobConstructor]", zP = typeof File == "function" || typeof File < "u" && Xv.call(File) === "[object FileConstructor]";
function md(e) {
  return jP && (e instanceof ArrayBuffer || VP(e)) || BP && e instanceof Blob || zP && e instanceof File;
}
function Ga(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, o = e.length; r < o; r++)
      if (Ga(e[r]))
        return !0;
    return !1;
  }
  if (md(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Ga(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && Ga(e[r]))
      return !0;
  return !1;
}
function $P(e) {
  const t = [], r = e.data, o = e;
  return o.data = Lf(r, t), o.attachments = t.length, { packet: o, buffers: t };
}
function Lf(e, t) {
  if (!e)
    return e;
  if (md(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let o = 0; o < e.length; o++)
      r[o] = Lf(e[o], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const o in e)
      Object.prototype.hasOwnProperty.call(e, o) && (r[o] = Lf(e[o], t));
    return r;
  }
  return e;
}
function UP(e, t) {
  return e.data = Mf(e.data, t), delete e.attachments, e;
}
function Mf(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = Mf(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Mf(e[r], t));
  return e;
}
const HP = 5;
var Re;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Re || (Re = {}));
class WP {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === Re.EVENT || t.type === Re.ACK) && Ga(t) ? this.encodeAsBinary({
      type: t.type === Re.EVENT ? Re.BINARY_EVENT : Re.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === Re.BINARY_EVENT || t.type === Re.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = $P(t), o = this.encodeAsString(r.packet), a = r.buffers;
    return a.unshift(o), a;
  }
}
class gd extends lt {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const o = r.type === Re.BINARY_EVENT;
      o || r.type === Re.BINARY_ACK ? (r.type = o ? Re.EVENT : Re.ACK, this.reconstructor = new qP(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (md(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let r = 0;
    const o = {
      type: Number(t.charAt(0))
    };
    if (Re[o.type] === void 0)
      throw new Error("unknown packet type " + o.type);
    if (o.type === Re.BINARY_EVENT || o.type === Re.BINARY_ACK) {
      const c = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const f = t.substring(c, r);
      if (f != Number(f) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      o.attachments = Number(f);
    }
    if (t.charAt(r + 1) === "/") {
      const c = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      o.nsp = t.substring(c, r);
    } else
      o.nsp = "/";
    const a = t.charAt(r + 1);
    if (a !== "" && Number(a) == a) {
      const c = r + 1;
      for (; ++r; ) {
        const f = t.charAt(r);
        if (f == null || Number(f) != f) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      o.id = Number(t.substring(c, r + 1));
    }
    if (t.charAt(++r)) {
      const c = this.tryParse(t.substr(r));
      if (gd.isPayloadValid(o.type, c))
        o.data = c;
      else
        throw new Error("invalid payload");
    }
    return o;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case Re.CONNECT:
        return typeof r == "object";
      case Re.DISCONNECT:
        return r === void 0;
      case Re.CONNECT_ERROR:
        return typeof r == "string" || typeof r == "object";
      case Re.EVENT:
      case Re.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "string" || typeof r[0] == "number");
      case Re.ACK:
      case Re.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class qP {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const r = UP(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const GP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: gd,
  Encoder: WP,
  get PacketType() {
    return Re;
  },
  protocol: HP
}, Symbol.toStringTag, { value: "Module" }));
function gn(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const KP = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Zv extends lt {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, o) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, o && o.auth && (this.auth = o.auth), this._opts = Object.assign({}, o), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      gn(t, "open", this.onopen.bind(this)),
      gn(t, "packet", this.onpacket.bind(this)),
      gn(t, "error", this.onerror.bind(this)),
      gn(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...r) {
    if (KP.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: Re.EVENT,
      data: r
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const f = this.ids++, m = r.pop();
      this._registerAckCallback(f, m), o.id = f;
    }
    const a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!a || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var o;
    const a = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
    if (a === void 0) {
      this.acks[t] = r;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let f = 0; f < this.sendBuffer.length; f++)
        this.sendBuffer[f].id === t && this.sendBuffer.splice(f, 1);
      r.call(this, new Error("operation has timed out"));
    }, a);
    this.acks[t] = (...f) => {
      this.io.clearTimeoutFn(c), r.apply(this, [null, ...f]);
    };
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...r) {
    const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((a, c) => {
      r.push((f, m) => o ? f ? c(f) : a(m) : a(f)), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const o = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((a, ...c) => o !== this._queue[0] ? void 0 : (a !== null ? o.tryCount > this._opts.retries && (this._queue.shift(), r && r(a)) : (this._queue.shift(), r && r(null, ...c)), o.pending = !1, this._drainQueue())), this._queue.push(o), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: Re.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case Re.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Re.EVENT:
        case Re.BINARY_EVENT:
          this.onevent(t);
          break;
        case Re.ACK:
        case Re.BINARY_ACK:
          this.onack(t);
          break;
        case Re.DISCONNECT:
          this.ondisconnect();
          break;
        case Re.CONNECT_ERROR:
          this.destroy();
          const o = new Error(t.data.message);
          o.data = t.data.data, this.emitReserved("connect_error", o);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const o of r)
        o.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let o = !1;
    return function(...a) {
      o || (o = !0, r.packet({
        type: Re.ACK,
        id: t,
        data: a
      }));
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const r = this.acks[t.id];
    typeof r == "function" && (r.apply(this, t.data), delete this.acks[t.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: Re.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const r = this._anyListeners;
      for (let o = 0; o < r.length; o++)
        if (t === r[o])
          return r.splice(o, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const r = this._anyOutgoingListeners;
      for (let o = 0; o < r.length; o++)
        if (t === r[o])
          return r.splice(o, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const o of r)
        o.apply(this, t.data);
    }
  }
}
function Yi(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Yi.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
Yi.prototype.reset = function() {
  this.attempts = 0;
};
Yi.prototype.setMin = function(e) {
  this.ms = e;
};
Yi.prototype.setMax = function(e) {
  this.max = e;
};
Yi.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Df extends lt {
  constructor(t, r) {
    var o;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Fl(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((o = r.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new Yi({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const a = r.parser || GP;
    this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Qv(this.uri, this.opts);
    const r = this.engine, o = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const a = gn(r, "open", function() {
      o.onopen(), t && t();
    }), c = gn(r, "error", (f) => {
      o.cleanup(), o._readyState = "closed", this.emitReserved("error", f), t ? t(f) : o.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const f = this._timeout;
      f === 0 && a();
      const m = this.setTimeoutFn(() => {
        a(), r.close(), r.emit("error", new Error("timeout"));
      }, f);
      this.opts.autoUnref && m.unref(), this.subs.push(function() {
        clearTimeout(m);
      });
    }
    return this.subs.push(a), this.subs.push(c), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(gn(t, "ping", this.onping.bind(this)), gn(t, "data", this.ondata.bind(this)), gn(t, "error", this.onerror.bind(this)), gn(t, "close", this.onclose.bind(this)), gn(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    Yv(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, r) {
    let o = this.nsps[t];
    return o ? this._autoConnect && !o.active && o.connect() : (o = new Zv(this, t, r), this.nsps[t] = o), o;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const o of r)
      if (this.nsps[o].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let o = 0; o < r.length; o++)
      this.engine.write(r[o], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(t, r) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const o = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((a) => {
          a ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", a)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && o.unref(), this.subs.push(function() {
        clearTimeout(o);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Ho = {};
function Ka(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = IP(e, t.path || "/socket.io"), o = r.source, a = r.id, c = r.path, f = Ho[a] && c in Ho[a].nsps, m = t.forceNew || t["force new connection"] || t.multiplex === !1 || f;
  let y;
  return m ? y = new Df(o, t) : (Ho[a] || (Ho[a] = new Df(o, t)), y = Ho[a]), r.query && !t.query && (t.query = r.queryKey), y.socket(r.path, t);
}
Object.assign(Ka, {
  Manager: Df,
  Socket: Zv,
  io: Ka,
  connect: Ka
});
let bi;
function ef(e, t, r = []) {
  const { api_url: o } = Nt(), a = (c) => {
    t(c);
  };
  M.useEffect(() => (bi || (bi = Ka(o, {
    reconnectionDelayMax: 1e3 * 10
  }), bi.on("connect", () => {
    console.log("connected", bi.id);
  })), bi.on(e, a), () => {
    bi.off(e, a);
  }), [...r]);
}
const YP = ({
  children: e
}) => {
  const t = rr((v) => v.update), r = gl(), { ringtones: o } = Nt(), { conversationId: a } = In(), c = bv(), { loadMessagesRequest: f, loadConversationsRequest: m } = Ki(), y = Lv(
    (v) => v.updateOrCreateMany
  ), g = rr(
    (v) => v.conversations.map((w) => w.id)
  ), x = M.useCallback(
    ({ message: v }) => {
      console.log({
        conversationId: a,
        message: v.conversationId
      });
      const w = v.fromMe, S = v.conversationId === a, k = document.visibilityState === "visible", T = g.includes(
        v.conversationId
      );
      (!S || !k) && !w && T && Fv.playSound(o.new_message), y([v]);
    },
    [a, c, g]
  ), u = M.useCallback(
    ({ conversationId: v }) => {
      f(v).then((w) => {
        y(w);
      });
    },
    [c]
  ), h = M.useCallback(async ({ conversationId: v, messageId: w }) => {
    await Promise.all([
      await m([v]).then(
        ([S]) => {
          t(v, S);
        }
      ),
      await f(v, [w]).then(
        ([S]) => {
          r.emit("message", { message: S });
        }
      )
    ]);
  }, []);
  return ef("web.conversation.typing", ({ conversationId: v, isTyping: w }) => {
    t(v, { isTyping: w });
  }), ef("web.conversation.closed", ({ conversationId: v, isClosed: w }) => {
    t(v, { isClosed: w });
  }), ef("web.messages.created", h, [h]), M.useEffect(() => (r.on("message", x), r.on("conversation.opened", u), () => {
    r.off("message", x), r.off("conversation.opened", u);
  }), [x, u]), /* @__PURE__ */ E.jsx(E.Fragment, { children: e });
}, QP = ({ app: e, events: t }) => /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(rw, { events: t, app: e, children: /* @__PURE__ */ E.jsx(xE, { children: /* @__PURE__ */ E.jsx(QA, { app_id: e.settings.app_id, children: /* @__PURE__ */ E.jsx(ow, { children: /* @__PURE__ */ E.jsxs(aP, { children: [
  /* @__PURE__ */ E.jsx(YP, {}),
  /* @__PURE__ */ E.jsx(sP, {})
] }) }) }) }) }) });
class XP {
  constructor(t, r) {
    this.params = t, this.settings = r;
  }
}
var Jv = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function o() {
  }
  Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (r = !1));
  function a(y, g, x) {
    this.fn = y, this.context = g, this.once = x || !1;
  }
  function c(y, g, x, u, h) {
    if (typeof x != "function")
      throw new TypeError("The listener must be a function");
    var v = new a(x, u || y, h), w = r ? r + g : g;
    return y._events[w] ? y._events[w].fn ? y._events[w] = [y._events[w], v] : y._events[w].push(v) : (y._events[w] = v, y._eventsCount++), y;
  }
  function f(y, g) {
    --y._eventsCount === 0 ? y._events = new o() : delete y._events[g];
  }
  function m() {
    this._events = new o(), this._eventsCount = 0;
  }
  m.prototype.eventNames = function() {
    var g = [], x, u;
    if (this._eventsCount === 0)
      return g;
    for (u in x = this._events)
      t.call(x, u) && g.push(r ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? g.concat(Object.getOwnPropertySymbols(x)) : g;
  }, m.prototype.listeners = function(g) {
    var x = r ? r + g : g, u = this._events[x];
    if (!u)
      return [];
    if (u.fn)
      return [u.fn];
    for (var h = 0, v = u.length, w = new Array(v); h < v; h++)
      w[h] = u[h].fn;
    return w;
  }, m.prototype.listenerCount = function(g) {
    var x = r ? r + g : g, u = this._events[x];
    return u ? u.fn ? 1 : u.length : 0;
  }, m.prototype.emit = function(g, x, u, h, v, w) {
    var S = r ? r + g : g;
    if (!this._events[S])
      return !1;
    var k = this._events[S], T = arguments.length, A, O;
    if (k.fn) {
      switch (k.once && this.removeListener(g, k.fn, void 0, !0), T) {
        case 1:
          return k.fn.call(k.context), !0;
        case 2:
          return k.fn.call(k.context, x), !0;
        case 3:
          return k.fn.call(k.context, x, u), !0;
        case 4:
          return k.fn.call(k.context, x, u, h), !0;
        case 5:
          return k.fn.call(k.context, x, u, h, v), !0;
        case 6:
          return k.fn.call(k.context, x, u, h, v, w), !0;
      }
      for (O = 1, A = new Array(T - 1); O < T; O++)
        A[O - 1] = arguments[O];
      k.fn.apply(k.context, A);
    } else {
      var V = k.length, $;
      for (O = 0; O < V; O++)
        switch (k[O].once && this.removeListener(g, k[O].fn, void 0, !0), T) {
          case 1:
            k[O].fn.call(k[O].context);
            break;
          case 2:
            k[O].fn.call(k[O].context, x);
            break;
          case 3:
            k[O].fn.call(k[O].context, x, u);
            break;
          case 4:
            k[O].fn.call(k[O].context, x, u, h);
            break;
          default:
            if (!A)
              for ($ = 1, A = new Array(T - 1); $ < T; $++)
                A[$ - 1] = arguments[$];
            k[O].fn.apply(k[O].context, A);
        }
    }
    return !0;
  }, m.prototype.on = function(g, x, u) {
    return c(this, g, x, u, !1);
  }, m.prototype.once = function(g, x, u) {
    return c(this, g, x, u, !0);
  }, m.prototype.removeListener = function(g, x, u, h) {
    var v = r ? r + g : g;
    if (!this._events[v])
      return this;
    if (!x)
      return f(this, v), this;
    var w = this._events[v];
    if (w.fn)
      w.fn === x && (!h || w.once) && (!u || w.context === u) && f(this, v);
    else {
      for (var S = 0, k = [], T = w.length; S < T; S++)
        (w[S].fn !== x || h && !w[S].once || u && w[S].context !== u) && k.push(w[S]);
      k.length ? this._events[v] = k.length === 1 ? k[0] : k : f(this, v);
    }
    return this;
  }, m.prototype.removeAllListeners = function(g) {
    var x;
    return g ? (x = r ? r + g : g, this._events[x] && f(this, x)) : (this._events = new o(), this._eventsCount = 0), this;
  }, m.prototype.off = m.prototype.removeListener, m.prototype.addListener = m.prototype.on, m.prefixed = r, m.EventEmitter = m, e.exports = m;
})(Jv);
var ZP = Jv.exports;
const JP = /* @__PURE__ */ pl(ZP);
class yd {
  constructor(t = "root", r) {
    wc(this, "app");
    wc(this, "events", new JP());
    this.elementId = t, this.props = r, this.app = new XP(this.props.params, this.props.settings);
  }
  async render() {
    tf.createRoot(
      document.getElementById(this.elementId)
    ).render(
      /* @__PURE__ */ E.jsx(vn.StrictMode, { children: /* @__PURE__ */ E.jsx(QP, { app: this.app, events: this.events }) })
    );
  }
  static async load({
    app_id: t,
    url: r,
    user: o
  }) {
    var v, w, S;
    const a = `zapdesk-web-${t}`, c = r || "https://zapdesk.api.homolog.idevit.app", f = Object.assign(document.createElement("link"), {
      href: "https://cdn.jsdelivr.net/gh/deviiit/zapdesk-static-files@v1.12.0/web-chat/style.css",
      rel: "stylesheet"
    });
    document.head.append(f);
    const m = await fetch(
      `${c}/api/web/connections/${t}/configs`
    ).then((k) => k.json()).then((k) => k.data.configs).then((k) => k).catch(() => {
    }), y = (o == null ? void 0 : o.user_id) || m.settings.user_id || void 0, g = (o == null ? void 0 : o.name) || ((v = m.settings) == null ? void 0 : v.name) || void 0, x = (o == null ? void 0 : o.email) || ((w = m.settings) == null ? void 0 : w.email) || void 0, u = (o == null ? void 0 : o.phone_number) || ((S = m.settings) == null ? void 0 : S.phone_number) || void 0;
    return m.settings = {
      app_id: m.settings.app_id,
      name: g,
      email: x,
      user_id: y,
      phone_number: u
    }, document.body.appendChild(
      Object.assign(document.createElement("div"), {
        id: a
      })
    ), new yd(a, m);
  }
}
window.ZapDesk = yd;
export {
  yd as ZapDesk
};
