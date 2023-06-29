var Ox = Object.defineProperty;
var Lx = (e, n, r) => n in e ? Ox(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var vc = (e, n, r) => (Lx(e, typeof n != "symbol" ? n + "" : n, r), r);
function Mx(e, n) {
  for (var r = 0; r < n.length; r++) {
    const o = n[r];
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
function dl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qg = { exports: {} }, Io = {}, Yg = { exports: {} }, be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uh;
function Dx() {
  if (Uh)
    return be;
  Uh = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), u = Symbol.iterator;
  function p(b) {
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
  var L = A.prototype = new T();
  L.constructor = A, w(L, k.prototype), L.isPureReactComponent = !0;
  var V = Array.isArray, H = Object.prototype.hasOwnProperty, J = { current: null }, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(b, I, ne) {
    var ke, ve = {}, Oe = null, _e = null;
    if (I != null)
      for (ke in I.ref !== void 0 && (_e = I.ref), I.key !== void 0 && (Oe = "" + I.key), I)
        H.call(I, ke) && !K.hasOwnProperty(ke) && (ve[ke] = I[ke]);
    var Pe = arguments.length - 2;
    if (Pe === 1)
      ve.children = ne;
    else if (1 < Pe) {
      for (var Ae = Array(Pe), Qe = 0; Qe < Pe; Qe++)
        Ae[Qe] = arguments[Qe + 2];
      ve.children = Ae;
    }
    if (b && b.defaultProps)
      for (ke in Pe = b.defaultProps, Pe)
        ve[ke] === void 0 && (ve[ke] = Pe[ke]);
    return { $$typeof: e, type: b, key: Oe, ref: _e, props: ve, _owner: J.current };
  }
  function Z(b, I) {
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
  var pe = /\/+/g;
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
            case n:
              _e = !0;
          }
      }
    if (_e)
      return _e = b, ve = ve(_e), b = ke === "" ? "." + le(_e, 0) : ke, V(ve) ? (ne = "", b != null && (ne = b.replace(pe, "$&/") + "/"), ae(ve, I, ne, "", function(Qe) {
        return Qe;
      })) : ve != null && (Ce(ve) && (ve = Z(ve, ne + (!ve.key || _e && _e.key === ve.key ? "" : ("" + ve.key).replace(pe, "$&/") + "/") + b)), I.push(ve)), 1;
    if (_e = 0, ke = ke === "" ? "." : ke + ":", V(b))
      for (var Pe = 0; Pe < b.length; Pe++) {
        Oe = b[Pe];
        var Ae = ke + le(Oe, Pe);
        _e += ae(Oe, I, ne, Ae, ve);
      }
    else if (Ae = p(b), typeof Ae == "function")
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
  var Se = { current: null }, Y = { transition: null }, ue = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: Y, ReactCurrentOwner: J };
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
      if (I.ref !== void 0 && (Oe = I.ref, _e = J.current), I.key !== void 0 && (ve = "" + I.key), b.type && b.type.defaultProps)
        var Pe = b.type.defaultProps;
      for (Ae in I)
        H.call(I, Ae) && !K.hasOwnProperty(Ae) && (ke[Ae] = I[Ae] === void 0 && Pe !== void 0 ? Pe[Ae] : I[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1)
      ke.children = ne;
    else if (1 < Ae) {
      Pe = Array(Ae);
      for (var Qe = 0; Qe < Ae; Qe++)
        Pe[Qe] = arguments[Qe + 2];
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
    var I = Y.transition;
    Y.transition = {};
    try {
      b();
    } finally {
      Y.transition = I;
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
Yg.exports = Dx();
var N = Yg.exports;
const yn = /* @__PURE__ */ dl(N), Hh = /* @__PURE__ */ Mx({
  __proto__: null,
  default: yn
}, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wh;
function Nx() {
  if (Wh)
    return Io;
  Wh = 1;
  var e = N, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, y, g) {
    var x, u = {}, p = null, v = null;
    g !== void 0 && (p = "" + g), y.key !== void 0 && (p = "" + y.key), y.ref !== void 0 && (v = y.ref);
    for (x in y)
      o.call(y, x) && !c.hasOwnProperty(x) && (u[x] = y[x]);
    if (m && m.defaultProps)
      for (x in y = m.defaultProps, y)
        u[x] === void 0 && (u[x] = y[x]);
    return { $$typeof: n, type: m, key: p, ref: v, props: u, _owner: a.current };
  }
  return Io.Fragment = r, Io.jsx = f, Io.jsxs = f, Io;
}
Qg.exports = Nx();
var E = Qg.exports, Yc = {}, Xg = { exports: {} }, zt = {}, xc = { exports: {} }, wc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh;
function Fx() {
  return qh || (qh = 1, function(e) {
    function n(Y, ue) {
      var b = Y.length;
      Y.push(ue);
      e:
        for (; 0 < b; ) {
          var I = b - 1 >>> 1, ne = Y[I];
          if (0 < a(ne, ue))
            Y[I] = ue, Y[b] = ne, b = I;
          else
            break e;
        }
    }
    function r(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function o(Y) {
      if (Y.length === 0)
        return null;
      var ue = Y[0], b = Y.pop();
      if (b !== ue) {
        Y[0] = b;
        e:
          for (var I = 0, ne = Y.length, ke = ne >>> 1; I < ke; ) {
            var ve = 2 * (I + 1) - 1, Oe = Y[ve], _e = ve + 1, Pe = Y[_e];
            if (0 > a(Oe, b))
              _e < ne && 0 > a(Pe, Oe) ? (Y[I] = Pe, Y[_e] = b, I = _e) : (Y[I] = Oe, Y[ve] = b, I = ve);
            else if (_e < ne && 0 > a(Pe, b))
              Y[I] = Pe, Y[_e] = b, I = _e;
            else
              break e;
          }
      }
      return ue;
    }
    function a(Y, ue) {
      var b = Y.sortIndex - ue.sortIndex;
      return b !== 0 ? b : Y.id - ue.id;
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
    var y = [], g = [], x = 1, u = null, p = 3, v = !1, w = !1, S = !1, k = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function L(Y) {
      for (var ue = r(g); ue !== null; ) {
        if (ue.callback === null)
          o(g);
        else if (ue.startTime <= Y)
          o(g), ue.sortIndex = ue.expirationTime, n(y, ue);
        else
          break;
        ue = r(g);
      }
    }
    function V(Y) {
      if (S = !1, L(Y), !w)
        if (r(y) !== null)
          w = !0, Ee(H);
        else {
          var ue = r(g);
          ue !== null && Se(V, ue.startTime - Y);
        }
    }
    function H(Y, ue) {
      w = !1, S && (S = !1, T(te), te = -1), v = !0;
      var b = p;
      try {
        for (L(ue), u = r(y); u !== null && (!(u.expirationTime > ue) || Y && !Le()); ) {
          var I = u.callback;
          if (typeof I == "function") {
            u.callback = null, p = u.priorityLevel;
            var ne = I(u.expirationTime <= ue);
            ue = e.unstable_now(), typeof ne == "function" ? u.callback = ne : u === r(y) && o(y), L(ue);
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
        u = null, p = b, v = !1;
      }
    }
    var J = !1, K = null, te = -1, Z = 5, Ce = -1;
    function Le() {
      return !(e.unstable_now() - Ce < Z);
    }
    function pe() {
      if (K !== null) {
        var Y = e.unstable_now();
        Ce = Y;
        var ue = !0;
        try {
          ue = K(!0, Y);
        } finally {
          ue ? le() : (J = !1, K = null);
        }
      } else
        J = !1;
    }
    var le;
    if (typeof A == "function")
      le = function() {
        A(pe);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), ge = ae.port2;
      ae.port1.onmessage = pe, le = function() {
        ge.postMessage(null);
      };
    } else
      le = function() {
        k(pe, 0);
      };
    function Ee(Y) {
      K = Y, J || (J = !0, le());
    }
    function Se(Y, ue) {
      te = k(function() {
        Y(e.unstable_now());
      }, ue);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, e.unstable_continueExecution = function() {
      w || v || (w = !0, Ee(H));
    }, e.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return p;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(y);
    }, e.unstable_next = function(Y) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = p;
      }
      var b = p;
      p = ue;
      try {
        return Y();
      } finally {
        p = b;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(Y, ue) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var b = p;
      p = Y;
      try {
        return ue();
      } finally {
        p = b;
      }
    }, e.unstable_scheduleCallback = function(Y, ue, b) {
      var I = e.unstable_now();
      switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? I + b : I) : b = I, Y) {
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
      return ne = b + ne, Y = { id: x++, callback: ue, priorityLevel: Y, startTime: b, expirationTime: ne, sortIndex: -1 }, b > I ? (Y.sortIndex = b, n(g, Y), r(y) === null && Y === r(g) && (S ? (T(te), te = -1) : S = !0, Se(V, b - I))) : (Y.sortIndex = ne, n(y, Y), w || v || (w = !0, Ee(H))), Y;
    }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(Y) {
      var ue = p;
      return function() {
        var b = p;
        p = ue;
        try {
          return Y.apply(this, arguments);
        } finally {
          p = b;
        }
      };
    };
  }(wc)), wc;
}
var Gh;
function Ix() {
  return Gh || (Gh = 1, xc.exports = Fx()), xc.exports;
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
var Kh;
function jx() {
  if (Kh)
    return zt;
  Kh = 1;
  var e = N, n = Ix();
  function r(t) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++)
      i += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + t + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), a = {};
  function c(t, i) {
    f(t, i), f(t + "Capture", i);
  }
  function f(t, i) {
    for (a[t] = i, t = 0; t < i.length; t++)
      o.add(i[t]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, x = {}, u = {};
  function p(t) {
    return y.call(u, t) ? !0 : y.call(x, t) ? !1 : g.test(t) ? u[t] = !0 : (x[t] = !0, !1);
  }
  function v(t, i, s, l) {
    if (s !== null && s.type === 0)
      return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : s !== null ? !s.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function w(t, i, s, l) {
    if (i === null || typeof i > "u" || v(t, i, s, l))
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
  function S(t, i, s, l, d, h, _) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = t, this.type = i, this.sanitizeURL = h, this.removeEmptyString = _;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    k[t] = new S(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var i = t[0];
    k[i] = new S(i, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    k[t] = new S(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    k[t] = new S(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    k[t] = new S(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    k[t] = new S(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    k[t] = new S(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    k[t] = new S(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    k[t] = new S(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function A(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var i = t.replace(
      T,
      A
    );
    k[i] = new S(i, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var i = t.replace(T, A);
    k[i] = new S(i, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var i = t.replace(T, A);
    k[i] = new S(i, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    k[t] = new S(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    k[t] = new S(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function L(t, i, s, l) {
    var d = k.hasOwnProperty(i) ? k[i] : null;
    (d !== null ? d.type !== 0 : l || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (w(i, s, d, l) && (s = null), l || d === null ? p(i) && (s === null ? t.removeAttribute(i) : t.setAttribute(i, "" + s)) : d.mustUseProperty ? t[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (i = d.attributeName, l = d.attributeNamespace, s === null ? t.removeAttribute(i) : (d = d.type, s = d === 3 || d === 4 && s === !0 ? "" : "" + s, l ? t.setAttributeNS(l, i, s) : t.setAttribute(i, s))));
  }
  var V = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = Symbol.for("react.element"), J = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), Le = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), ge = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function ue(t) {
    return t === null || typeof t != "object" ? null : (t = Y && t[Y] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var b = Object.assign, I;
  function ne(t) {
    if (I === void 0)
      try {
        throw Error();
      } catch (s) {
        var i = s.stack.trim().match(/\n( *(at )?)/);
        I = i && i[1] || "";
      }
    return `
` + I + t;
  }
  var ke = !1;
  function ve(t, i) {
    if (!t || ke)
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
          Reflect.construct(t, [], i);
        } else {
          try {
            i.call();
          } catch (F) {
            l = F;
          }
          t.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          l = F;
        }
        t();
      }
    } catch (F) {
      if (F && l && typeof F.stack == "string") {
        for (var d = F.stack.split(`
`), h = l.stack.split(`
`), _ = d.length - 1, C = h.length - 1; 1 <= _ && 0 <= C && d[_] !== h[C]; )
          C--;
        for (; 1 <= _ && 0 <= C; _--, C--)
          if (d[_] !== h[C]) {
            if (_ !== 1 || C !== 1)
              do
                if (_--, C--, 0 > C || d[_] !== h[C]) {
                  var P = `
` + d[_].replace(" at new ", " at ");
                  return t.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", t.displayName)), P;
                }
              while (1 <= _ && 0 <= C);
            break;
          }
      }
    } finally {
      ke = !1, Error.prepareStackTrace = s;
    }
    return (t = t ? t.displayName || t.name : "") ? ne(t) : "";
  }
  function Oe(t) {
    switch (t.tag) {
      case 5:
        return ne(t.type);
      case 16:
        return ne("Lazy");
      case 13:
        return ne("Suspense");
      case 19:
        return ne("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = ve(t.type, !1), t;
      case 11:
        return t = ve(t.type.render, !1), t;
      case 1:
        return t = ve(t.type, !0), t;
      default:
        return "";
    }
  }
  function _e(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case K:
        return "Fragment";
      case J:
        return "Portal";
      case Z:
        return "Profiler";
      case te:
        return "StrictMode";
      case le:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Le:
          return (t.displayName || "Context") + ".Consumer";
        case Ce:
          return (t._context.displayName || "Context") + ".Provider";
        case pe:
          var i = t.render;
          return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ge:
          return i = t.displayName || null, i !== null ? i : _e(t.type) || "Memo";
        case Ee:
          i = t._payload, t = t._init;
          try {
            return _e(t(i));
          } catch {
          }
      }
    return null;
  }
  function Pe(t) {
    var i = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = i.render, t = t.displayName || t.name || "", i.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
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
  function Ae(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Qe(t) {
    var i = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function xn(t) {
    var i = Qe(t) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(t.constructor.prototype, i), l = "" + t[i];
    if (!t.hasOwnProperty(i) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var d = s.get, h = s.set;
      return Object.defineProperty(t, i, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(_) {
        l = "" + _, h.call(this, _);
      } }), Object.defineProperty(t, i, { enumerable: s.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(_) {
        l = "" + _;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[i];
      } };
    }
  }
  function ut(t) {
    t._valueTracker || (t._valueTracker = xn(t));
  }
  function wn(t) {
    if (!t)
      return !1;
    var i = t._valueTracker;
    if (!i)
      return !0;
    var s = i.getValue(), l = "";
    return t && (l = Qe(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== s ? (i.setValue(t), !0) : !1;
  }
  function _n(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function ti(t, i) {
    var s = i.checked;
    return b({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? t._wrapperState.initialChecked });
  }
  function Yi(t, i) {
    var s = i.defaultValue == null ? "" : i.defaultValue, l = i.checked != null ? i.checked : i.defaultChecked;
    s = Ae(i.value != null ? i.value : s), t._wrapperState = { initialChecked: l, initialValue: s, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function O(t, i) {
    i = i.checked, i != null && L(t, "checked", i, !1);
  }
  function j(t, i) {
    O(t, i);
    var s = Ae(i.value), l = i.type;
    if (s != null)
      l === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
    else if (l === "submit" || l === "reset") {
      t.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? ie(t, i.type, s) : i.hasOwnProperty("defaultValue") && ie(t, i.type, Ae(i.defaultValue)), i.checked == null && i.defaultChecked != null && (t.defaultChecked = !!i.defaultChecked);
  }
  function z(t, i, s) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var l = i.type;
      if (!(l !== "submit" && l !== "reset" || i.value !== void 0 && i.value !== null))
        return;
      i = "" + t._wrapperState.initialValue, s || i === t.value || (t.value = i), t.defaultValue = i;
    }
    s = t.name, s !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, s !== "" && (t.name = s);
  }
  function ie(t, i, s) {
    (i !== "number" || _n(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s));
  }
  var X = Array.isArray;
  function G(t, i, s, l) {
    if (t = t.options, i) {
      i = {};
      for (var d = 0; d < s.length; d++)
        i["$" + s[d]] = !0;
      for (s = 0; s < t.length; s++)
        d = i.hasOwnProperty("$" + t[s].value), t[s].selected !== d && (t[s].selected = d), d && l && (t[s].defaultSelected = !0);
    } else {
      for (s = "" + Ae(s), i = null, d = 0; d < t.length; d++) {
        if (t[d].value === s) {
          t[d].selected = !0, l && (t[d].defaultSelected = !0);
          return;
        }
        i !== null || t[d].disabled || (i = t[d]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function de(t, i) {
    if (i.dangerouslySetInnerHTML != null)
      throw Error(r(91));
    return b({}, i, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function je(t, i) {
    var s = i.value;
    if (s == null) {
      if (s = i.children, i = i.defaultValue, s != null) {
        if (i != null)
          throw Error(r(92));
        if (X(s)) {
          if (1 < s.length)
            throw Error(r(93));
          s = s[0];
        }
        i = s;
      }
      i == null && (i = ""), s = i;
    }
    t._wrapperState = { initialValue: Ae(s) };
  }
  function ze(t, i) {
    var s = Ae(i.value), l = Ae(i.defaultValue);
    s != null && (s = "" + s, s !== t.value && (t.value = s), i.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)), l != null && (t.defaultValue = "" + l);
  }
  function Nt(t) {
    var i = t.textContent;
    i === t._wrapperState.initialValue && i !== "" && i !== null && (t.value = i);
  }
  function ni(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vn(t, i) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? ni(i) : t === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var an, ri = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(i, s, l, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(i, s, l, d);
      });
    } : t;
  }(function(t, i) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = i;
    else {
      for (an = an || document.createElement("div"), an.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>", i = an.firstChild; t.firstChild; )
        t.removeChild(t.firstChild);
      for (; i.firstChild; )
        t.appendChild(i.firstChild);
    }
  });
  function Sn(t, i) {
    if (i) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = i;
        return;
      }
    }
    t.textContent = i;
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
  Object.keys(Bn).forEach(function(t) {
    Nr.forEach(function(i) {
      i = i + t.charAt(0).toUpperCase() + t.substring(1), Bn[i] = Bn[t];
    });
  });
  function ys(t, i, s) {
    return i == null || typeof i == "boolean" || i === "" ? "" : s || typeof i != "number" || i === 0 || Bn.hasOwnProperty(t) && Bn[t] ? ("" + i).trim() : i + "px";
  }
  function W(t, i) {
    t = t.style;
    for (var s in i)
      if (i.hasOwnProperty(s)) {
        var l = s.indexOf("--") === 0, d = ys(s, i[s], l);
        s === "float" && (s = "cssFloat"), l ? t.setProperty(s, d) : t[s] = d;
      }
  }
  var xe = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Be(t, i) {
    if (i) {
      if (xe[t] && (i.children != null || i.dangerouslySetInnerHTML != null))
        throw Error(r(137, t));
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
  function vt(t, i) {
    if (t.indexOf("-") === -1)
      return typeof i.is == "string";
    switch (t) {
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
  function zn(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ir = null, Tt = null, Ct = null;
  function Xi(t) {
    if (t = So(t)) {
      if (typeof ir != "function")
        throw Error(r(280));
      var i = t.stateNode;
      i && (i = zs(i), ir(t.stateNode, t.type, i));
    }
  }
  function vs(t) {
    Tt ? Ct ? Ct.push(t) : Ct = [t] : Tt = t;
  }
  function Ji() {
    if (Tt) {
      var t = Tt, i = Ct;
      if (Ct = Tt = null, Xi(t), i)
        for (t = 0; t < i.length; t++)
          Xi(i[t]);
    }
  }
  function Zi(t, i) {
    return t(i);
  }
  function ud() {
  }
  var Nl = !1;
  function cd(t, i, s) {
    if (Nl)
      return t(i, s);
    Nl = !0;
    try {
      return Zi(t, i, s);
    } finally {
      Nl = !1, (Tt !== null || Ct !== null) && (ud(), Ji());
    }
  }
  function eo(t, i) {
    var s = t.stateNode;
    if (s === null)
      return null;
    var l = zs(s);
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
          (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
          break e;
        default:
          t = !1;
      }
    if (t)
      return null;
    if (s && typeof s != "function")
      throw Error(r(231, i, typeof s));
    return s;
  }
  var Fl = !1;
  if (m)
    try {
      var to = {};
      Object.defineProperty(to, "passive", { get: function() {
        Fl = !0;
      } }), window.addEventListener("test", to, to), window.removeEventListener("test", to, to);
    } catch {
      Fl = !1;
    }
  function Iv(t, i, s, l, d, h, _, C, P) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(s, F);
    } catch (U) {
      this.onError(U);
    }
  }
  var no = !1, xs = null, ws = !1, Il = null, jv = { onError: function(t) {
    no = !0, xs = t;
  } };
  function Vv(t, i, s, l, d, h, _, C, P) {
    no = !1, xs = null, Iv.apply(jv, arguments);
  }
  function Bv(t, i, s, l, d, h, _, C, P) {
    if (Vv.apply(this, arguments), no) {
      if (no) {
        var F = xs;
        no = !1, xs = null;
      } else
        throw Error(r(198));
      ws || (ws = !0, Il = F);
    }
  }
  function Fr(t) {
    var i = t, s = t;
    if (t.alternate)
      for (; i.return; )
        i = i.return;
    else {
      t = i;
      do
        i = t, i.flags & 4098 && (s = i.return), t = i.return;
      while (t);
    }
    return i.tag === 3 ? s : null;
  }
  function fd(t) {
    if (t.tag === 13) {
      var i = t.memoizedState;
      if (i === null && (t = t.alternate, t !== null && (i = t.memoizedState)), i !== null)
        return i.dehydrated;
    }
    return null;
  }
  function dd(t) {
    if (Fr(t) !== t)
      throw Error(r(188));
  }
  function zv(t) {
    var i = t.alternate;
    if (!i) {
      if (i = Fr(t), i === null)
        throw Error(r(188));
      return i !== t ? null : t;
    }
    for (var s = t, l = i; ; ) {
      var d = s.return;
      if (d === null)
        break;
      var h = d.alternate;
      if (h === null) {
        if (l = d.return, l !== null) {
          s = l;
          continue;
        }
        break;
      }
      if (d.child === h.child) {
        for (h = d.child; h; ) {
          if (h === s)
            return dd(d), t;
          if (h === l)
            return dd(d), i;
          h = h.sibling;
        }
        throw Error(r(188));
      }
      if (s.return !== l.return)
        s = d, l = h;
      else {
        for (var _ = !1, C = d.child; C; ) {
          if (C === s) {
            _ = !0, s = d, l = h;
            break;
          }
          if (C === l) {
            _ = !0, l = d, s = h;
            break;
          }
          C = C.sibling;
        }
        if (!_) {
          for (C = h.child; C; ) {
            if (C === s) {
              _ = !0, s = h, l = d;
              break;
            }
            if (C === l) {
              _ = !0, l = h, s = d;
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
    return s.stateNode.current === s ? t : i;
  }
  function pd(t) {
    return t = zv(t), t !== null ? hd(t) : null;
  }
  function hd(t) {
    if (t.tag === 5 || t.tag === 6)
      return t;
    for (t = t.child; t !== null; ) {
      var i = hd(t);
      if (i !== null)
        return i;
      t = t.sibling;
    }
    return null;
  }
  var md = n.unstable_scheduleCallback, gd = n.unstable_cancelCallback, $v = n.unstable_shouldYield, Uv = n.unstable_requestPaint, nt = n.unstable_now, Hv = n.unstable_getCurrentPriorityLevel, jl = n.unstable_ImmediatePriority, yd = n.unstable_UserBlockingPriority, _s = n.unstable_NormalPriority, Wv = n.unstable_LowPriority, vd = n.unstable_IdlePriority, Ss = null, kn = null;
  function qv(t) {
    if (kn && typeof kn.onCommitFiberRoot == "function")
      try {
        kn.onCommitFiberRoot(Ss, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
  }
  var ln = Math.clz32 ? Math.clz32 : Qv, Gv = Math.log, Kv = Math.LN2;
  function Qv(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Gv(t) / Kv | 0) | 0;
  }
  var ks = 64, Ts = 4194304;
  function ro(t) {
    switch (t & -t) {
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
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Cs(t, i) {
    var s = t.pendingLanes;
    if (s === 0)
      return 0;
    var l = 0, d = t.suspendedLanes, h = t.pingedLanes, _ = s & 268435455;
    if (_ !== 0) {
      var C = _ & ~d;
      C !== 0 ? l = ro(C) : (h &= _, h !== 0 && (l = ro(h)));
    } else
      _ = s & ~d, _ !== 0 ? l = ro(_) : h !== 0 && (l = ro(h));
    if (l === 0)
      return 0;
    if (i !== 0 && i !== l && !(i & d) && (d = l & -l, h = i & -i, d >= h || d === 16 && (h & 4194240) !== 0))
      return i;
    if (l & 4 && (l |= s & 16), i = t.entangledLanes, i !== 0)
      for (t = t.entanglements, i &= l; 0 < i; )
        s = 31 - ln(i), d = 1 << s, l |= t[s], i &= ~d;
    return l;
  }
  function Yv(t, i) {
    switch (t) {
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
  function Xv(t, i) {
    for (var s = t.suspendedLanes, l = t.pingedLanes, d = t.expirationTimes, h = t.pendingLanes; 0 < h; ) {
      var _ = 31 - ln(h), C = 1 << _, P = d[_];
      P === -1 ? (!(C & s) || C & l) && (d[_] = Yv(C, i)) : P <= i && (t.expiredLanes |= C), h &= ~C;
    }
  }
  function Vl(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function xd() {
    var t = ks;
    return ks <<= 1, !(ks & 4194240) && (ks = 64), t;
  }
  function Bl(t) {
    for (var i = [], s = 0; 31 > s; s++)
      i.push(t);
    return i;
  }
  function io(t, i, s) {
    t.pendingLanes |= i, i !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, i = 31 - ln(i), t[i] = s;
  }
  function Jv(t, i) {
    var s = t.pendingLanes & ~i;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= i, t.mutableReadLanes &= i, t.entangledLanes &= i, i = t.entanglements;
    var l = t.eventTimes;
    for (t = t.expirationTimes; 0 < s; ) {
      var d = 31 - ln(s), h = 1 << d;
      i[d] = 0, l[d] = -1, t[d] = -1, s &= ~h;
    }
  }
  function zl(t, i) {
    var s = t.entangledLanes |= i;
    for (t = t.entanglements; s; ) {
      var l = 31 - ln(s), d = 1 << l;
      d & i | t[l] & i && (t[l] |= i), s &= ~d;
    }
  }
  var Ve = 0;
  function wd(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var _d, $l, Sd, kd, Td, Ul = !1, Es = [], or = null, sr = null, ar = null, oo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), lr = [], Zv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Cd(t, i) {
    switch (t) {
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
  function ao(t, i, s, l, d, h) {
    return t === null || t.nativeEvent !== h ? (t = { blockedOn: i, domEventName: s, eventSystemFlags: l, nativeEvent: h, targetContainers: [d] }, i !== null && (i = So(i), i !== null && $l(i)), t) : (t.eventSystemFlags |= l, i = t.targetContainers, d !== null && i.indexOf(d) === -1 && i.push(d), t);
  }
  function e1(t, i, s, l, d) {
    switch (i) {
      case "focusin":
        return or = ao(or, t, i, s, l, d), !0;
      case "dragenter":
        return sr = ao(sr, t, i, s, l, d), !0;
      case "mouseover":
        return ar = ao(ar, t, i, s, l, d), !0;
      case "pointerover":
        var h = d.pointerId;
        return oo.set(h, ao(oo.get(h) || null, t, i, s, l, d)), !0;
      case "gotpointercapture":
        return h = d.pointerId, so.set(h, ao(so.get(h) || null, t, i, s, l, d)), !0;
    }
    return !1;
  }
  function Ed(t) {
    var i = Ir(t.target);
    if (i !== null) {
      var s = Fr(i);
      if (s !== null) {
        if (i = s.tag, i === 13) {
          if (i = fd(s), i !== null) {
            t.blockedOn = i, Td(t.priority, function() {
              Sd(s);
            });
            return;
          }
        } else if (i === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function As(t) {
    if (t.blockedOn !== null)
      return !1;
    for (var i = t.targetContainers; 0 < i.length; ) {
      var s = Wl(t.domEventName, t.eventSystemFlags, i[0], t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var l = new s.constructor(s.type, s);
        Ue = l, s.target.dispatchEvent(l), Ue = null;
      } else
        return i = So(s), i !== null && $l(i), t.blockedOn = s, !1;
      i.shift();
    }
    return !0;
  }
  function Ad(t, i, s) {
    As(t) && s.delete(i);
  }
  function t1() {
    Ul = !1, or !== null && As(or) && (or = null), sr !== null && As(sr) && (sr = null), ar !== null && As(ar) && (ar = null), oo.forEach(Ad), so.forEach(Ad);
  }
  function lo(t, i) {
    t.blockedOn === i && (t.blockedOn = null, Ul || (Ul = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, t1)));
  }
  function uo(t) {
    function i(d) {
      return lo(d, t);
    }
    if (0 < Es.length) {
      lo(Es[0], t);
      for (var s = 1; s < Es.length; s++) {
        var l = Es[s];
        l.blockedOn === t && (l.blockedOn = null);
      }
    }
    for (or !== null && lo(or, t), sr !== null && lo(sr, t), ar !== null && lo(ar, t), oo.forEach(i), so.forEach(i), s = 0; s < lr.length; s++)
      l = lr[s], l.blockedOn === t && (l.blockedOn = null);
    for (; 0 < lr.length && (s = lr[0], s.blockedOn === null); )
      Ed(s), s.blockedOn === null && lr.shift();
  }
  var ii = V.ReactCurrentBatchConfig, bs = !0;
  function n1(t, i, s, l) {
    var d = Ve, h = ii.transition;
    ii.transition = null;
    try {
      Ve = 1, Hl(t, i, s, l);
    } finally {
      Ve = d, ii.transition = h;
    }
  }
  function r1(t, i, s, l) {
    var d = Ve, h = ii.transition;
    ii.transition = null;
    try {
      Ve = 4, Hl(t, i, s, l);
    } finally {
      Ve = d, ii.transition = h;
    }
  }
  function Hl(t, i, s, l) {
    if (bs) {
      var d = Wl(t, i, s, l);
      if (d === null)
        lu(t, i, l, Ps, s), Cd(t, l);
      else if (e1(d, t, i, s, l))
        l.stopPropagation();
      else if (Cd(t, l), i & 4 && -1 < Zv.indexOf(t)) {
        for (; d !== null; ) {
          var h = So(d);
          if (h !== null && _d(h), h = Wl(t, i, s, l), h === null && lu(t, i, l, Ps, s), h === d)
            break;
          d = h;
        }
        d !== null && l.stopPropagation();
      } else
        lu(t, i, l, null, s);
    }
  }
  var Ps = null;
  function Wl(t, i, s, l) {
    if (Ps = null, t = zn(l), t = Ir(t), t !== null)
      if (i = Fr(t), i === null)
        t = null;
      else if (s = i.tag, s === 13) {
        if (t = fd(i), t !== null)
          return t;
        t = null;
      } else if (s === 3) {
        if (i.stateNode.current.memoizedState.isDehydrated)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        t = null;
      } else
        i !== t && (t = null);
    return Ps = t, null;
  }
  function bd(t) {
    switch (t) {
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
        switch (Hv()) {
          case jl:
            return 1;
          case yd:
            return 4;
          case _s:
          case Wv:
            return 16;
          case vd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ur = null, ql = null, Rs = null;
  function Pd() {
    if (Rs)
      return Rs;
    var t, i = ql, s = i.length, l, d = "value" in ur ? ur.value : ur.textContent, h = d.length;
    for (t = 0; t < s && i[t] === d[t]; t++)
      ;
    var _ = s - t;
    for (l = 1; l <= _ && i[s - l] === d[h - l]; l++)
      ;
    return Rs = d.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Os(t) {
    var i = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ls() {
    return !0;
  }
  function Rd() {
    return !1;
  }
  function Ht(t) {
    function i(s, l, d, h, _) {
      this._reactName = s, this._targetInst = d, this.type = l, this.nativeEvent = h, this.target = _, this.currentTarget = null;
      for (var C in t)
        t.hasOwnProperty(C) && (s = t[C], this[C] = s ? s(h) : h[C]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Ls : Rd, this.isPropagationStopped = Rd, this;
    }
    return b(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Ls);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Ls);
    }, persist: function() {
    }, isPersistent: Ls }), i;
  }
  var oi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Gl = Ht(oi), co = b({}, oi, { view: 0, detail: 0 }), i1 = Ht(co), Kl, Ql, fo, Ms = b({}, co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xl, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== fo && (fo && t.type === "mousemove" ? (Kl = t.screenX - fo.screenX, Ql = t.screenY - fo.screenY) : Ql = Kl = 0, fo = t), Kl);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Ql;
  } }), Od = Ht(Ms), o1 = b({}, Ms, { dataTransfer: 0 }), s1 = Ht(o1), a1 = b({}, co, { relatedTarget: 0 }), Yl = Ht(a1), l1 = b({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), u1 = Ht(l1), c1 = b({}, oi, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), f1 = Ht(c1), d1 = b({}, oi, { data: 0 }), Ld = Ht(d1), p1 = {
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
  }, h1 = {
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
  }, m1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function g1(t) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(t) : (t = m1[t]) ? !!i[t] : !1;
  }
  function Xl() {
    return g1;
  }
  var y1 = b({}, co, { key: function(t) {
    if (t.key) {
      var i = p1[t.key] || t.key;
      if (i !== "Unidentified")
        return i;
    }
    return t.type === "keypress" ? (t = Os(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? h1[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xl, charCode: function(t) {
    return t.type === "keypress" ? Os(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Os(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), v1 = Ht(y1), x1 = b({}, Ms, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Md = Ht(x1), w1 = b({}, co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xl }), _1 = Ht(w1), S1 = b({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), k1 = Ht(S1), T1 = b({}, Ms, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), C1 = Ht(T1), E1 = [9, 13, 27, 32], Jl = m && "CompositionEvent" in window, po = null;
  m && "documentMode" in document && (po = document.documentMode);
  var A1 = m && "TextEvent" in window && !po, Dd = m && (!Jl || po && 8 < po && 11 >= po), Nd = String.fromCharCode(32), Fd = !1;
  function Id(t, i) {
    switch (t) {
      case "keyup":
        return E1.indexOf(i.keyCode) !== -1;
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
  function jd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var si = !1;
  function b1(t, i) {
    switch (t) {
      case "compositionend":
        return jd(i);
      case "keypress":
        return i.which !== 32 ? null : (Fd = !0, Nd);
      case "textInput":
        return t = i.data, t === Nd && Fd ? null : t;
      default:
        return null;
    }
  }
  function P1(t, i) {
    if (si)
      return t === "compositionend" || !Jl && Id(t, i) ? (t = Pd(), Rs = ql = ur = null, si = !1, t) : null;
    switch (t) {
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
        return Dd && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var R1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Vd(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i === "input" ? !!R1[t.type] : i === "textarea";
  }
  function Bd(t, i, s, l) {
    vs(l), i = js(i, "onChange"), 0 < i.length && (s = new Gl("onChange", "change", null, s, l), t.push({ event: s, listeners: i }));
  }
  var ho = null, mo = null;
  function O1(t) {
    ip(t, 0);
  }
  function Ds(t) {
    var i = fi(t);
    if (wn(i))
      return t;
  }
  function L1(t, i) {
    if (t === "change")
      return i;
  }
  var zd = !1;
  if (m) {
    var Zl;
    if (m) {
      var eu = "oninput" in document;
      if (!eu) {
        var $d = document.createElement("div");
        $d.setAttribute("oninput", "return;"), eu = typeof $d.oninput == "function";
      }
      Zl = eu;
    } else
      Zl = !1;
    zd = Zl && (!document.documentMode || 9 < document.documentMode);
  }
  function Ud() {
    ho && (ho.detachEvent("onpropertychange", Hd), mo = ho = null);
  }
  function Hd(t) {
    if (t.propertyName === "value" && Ds(mo)) {
      var i = [];
      Bd(i, mo, t, zn(t)), cd(O1, i);
    }
  }
  function M1(t, i, s) {
    t === "focusin" ? (Ud(), ho = i, mo = s, ho.attachEvent("onpropertychange", Hd)) : t === "focusout" && Ud();
  }
  function D1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ds(mo);
  }
  function N1(t, i) {
    if (t === "click")
      return Ds(i);
  }
  function F1(t, i) {
    if (t === "input" || t === "change")
      return Ds(i);
  }
  function I1(t, i) {
    return t === i && (t !== 0 || 1 / t === 1 / i) || t !== t && i !== i;
  }
  var un = typeof Object.is == "function" ? Object.is : I1;
  function go(t, i) {
    if (un(t, i))
      return !0;
    if (typeof t != "object" || t === null || typeof i != "object" || i === null)
      return !1;
    var s = Object.keys(t), l = Object.keys(i);
    if (s.length !== l.length)
      return !1;
    for (l = 0; l < s.length; l++) {
      var d = s[l];
      if (!y.call(i, d) || !un(t[d], i[d]))
        return !1;
    }
    return !0;
  }
  function Wd(t) {
    for (; t && t.firstChild; )
      t = t.firstChild;
    return t;
  }
  function qd(t, i) {
    var s = Wd(t);
    t = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (l = t + s.textContent.length, t <= i && l >= i)
          return { node: s, offset: i - t };
        t = l;
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
      s = Wd(s);
    }
  }
  function Gd(t, i) {
    return t && i ? t === i ? !0 : t && t.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Gd(t, i.parentNode) : "contains" in t ? t.contains(i) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Kd() {
    for (var t = window, i = _n(); i instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof i.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s)
        t = i.contentWindow;
      else
        break;
      i = _n(t.document);
    }
    return i;
  }
  function tu(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i && (i === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || i === "textarea" || t.contentEditable === "true");
  }
  function j1(t) {
    var i = Kd(), s = t.focusedElem, l = t.selectionRange;
    if (i !== s && s && s.ownerDocument && Gd(s.ownerDocument.documentElement, s)) {
      if (l !== null && tu(s)) {
        if (i = l.start, t = l.end, t === void 0 && (t = i), "selectionStart" in s)
          s.selectionStart = i, s.selectionEnd = Math.min(t, s.value.length);
        else if (t = (i = s.ownerDocument || document) && i.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var d = s.textContent.length, h = Math.min(l.start, d);
          l = l.end === void 0 ? h : Math.min(l.end, d), !t.extend && h > l && (d = l, l = h, h = d), d = qd(s, h);
          var _ = qd(
            s,
            l
          );
          d && _ && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== _.node || t.focusOffset !== _.offset) && (i = i.createRange(), i.setStart(d.node, d.offset), t.removeAllRanges(), h > l ? (t.addRange(i), t.extend(_.node, _.offset)) : (i.setEnd(_.node, _.offset), t.addRange(i)));
        }
      }
      for (i = [], t = s; t = t.parentNode; )
        t.nodeType === 1 && i.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < i.length; s++)
        t = i[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var V1 = m && "documentMode" in document && 11 >= document.documentMode, ai = null, nu = null, yo = null, ru = !1;
  function Qd(t, i, s) {
    var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    ru || ai == null || ai !== _n(l) || (l = ai, "selectionStart" in l && tu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), yo && go(yo, l) || (yo = l, l = js(nu, "onSelect"), 0 < l.length && (i = new Gl("onSelect", "select", null, i, s), t.push({ event: i, listeners: l }), i.target = ai)));
  }
  function Ns(t, i) {
    var s = {};
    return s[t.toLowerCase()] = i.toLowerCase(), s["Webkit" + t] = "webkit" + i, s["Moz" + t] = "moz" + i, s;
  }
  var li = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, iu = {}, Yd = {};
  m && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);
  function Fs(t) {
    if (iu[t])
      return iu[t];
    if (!li[t])
      return t;
    var i = li[t], s;
    for (s in i)
      if (i.hasOwnProperty(s) && s in Yd)
        return iu[t] = i[s];
    return t;
  }
  var Xd = Fs("animationend"), Jd = Fs("animationiteration"), Zd = Fs("animationstart"), ep = Fs("transitionend"), tp = /* @__PURE__ */ new Map(), np = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(t, i) {
    tp.set(t, i), c(i, [t]);
  }
  for (var ou = 0; ou < np.length; ou++) {
    var su = np[ou], B1 = su.toLowerCase(), z1 = su[0].toUpperCase() + su.slice(1);
    cr(B1, "on" + z1);
  }
  cr(Xd, "onAnimationEnd"), cr(Jd, "onAnimationIteration"), cr(Zd, "onAnimationStart"), cr("dblclick", "onDoubleClick"), cr("focusin", "onFocus"), cr("focusout", "onBlur"), cr(ep, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
  function rp(t, i, s) {
    var l = t.type || "unknown-event";
    t.currentTarget = s, Bv(l, i, void 0, t), t.currentTarget = null;
  }
  function ip(t, i) {
    i = (i & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var l = t[s], d = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (i)
          for (var _ = l.length - 1; 0 <= _; _--) {
            var C = l[_], P = C.instance, F = C.currentTarget;
            if (C = C.listener, P !== h && d.isPropagationStopped())
              break e;
            rp(d, C, F), h = P;
          }
        else
          for (_ = 0; _ < l.length; _++) {
            if (C = l[_], P = C.instance, F = C.currentTarget, C = C.listener, P !== h && d.isPropagationStopped())
              break e;
            rp(d, C, F), h = P;
          }
      }
    }
    if (ws)
      throw t = Il, ws = !1, Il = null, t;
  }
  function He(t, i) {
    var s = i[hu];
    s === void 0 && (s = i[hu] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    s.has(l) || (op(i, t, 2, !1), s.add(l));
  }
  function au(t, i, s) {
    var l = 0;
    i && (l |= 4), op(s, t, l, i);
  }
  var Is = "_reactListening" + Math.random().toString(36).slice(2);
  function xo(t) {
    if (!t[Is]) {
      t[Is] = !0, o.forEach(function(s) {
        s !== "selectionchange" && ($1.has(s) || au(s, !1, t), au(s, !0, t));
      });
      var i = t.nodeType === 9 ? t : t.ownerDocument;
      i === null || i[Is] || (i[Is] = !0, au("selectionchange", !1, i));
    }
  }
  function op(t, i, s, l) {
    switch (bd(i)) {
      case 1:
        var d = n1;
        break;
      case 4:
        d = r1;
        break;
      default:
        d = Hl;
    }
    s = d.bind(null, i, s, t), d = void 0, !Fl || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (d = !0), l ? d !== void 0 ? t.addEventListener(i, s, { capture: !0, passive: d }) : t.addEventListener(i, s, !0) : d !== void 0 ? t.addEventListener(i, s, { passive: d }) : t.addEventListener(i, s, !1);
  }
  function lu(t, i, s, l, d) {
    var h = l;
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
                l = h = _;
                continue e;
              }
              C = C.parentNode;
            }
          }
          l = l.return;
        }
    cd(function() {
      var F = h, U = zn(s), q = [];
      e: {
        var $ = tp.get(t);
        if ($ !== void 0) {
          var ee = Gl, oe = t;
          switch (t) {
            case "keypress":
              if (Os(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              ee = v1;
              break;
            case "focusin":
              oe = "focus", ee = Yl;
              break;
            case "focusout":
              oe = "blur", ee = Yl;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Yl;
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
              ee = Od;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = s1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = _1;
              break;
            case Xd:
            case Jd:
            case Zd:
              ee = u1;
              break;
            case ep:
              ee = k1;
              break;
            case "scroll":
              ee = i1;
              break;
            case "wheel":
              ee = C1;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = f1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Md;
          }
          var se = (i & 4) !== 0, rt = !se && t === "scroll", M = se ? $ !== null ? $ + "Capture" : null : $;
          se = [];
          for (var R = F, D; R !== null; ) {
            D = R;
            var Q = D.stateNode;
            if (D.tag === 5 && Q !== null && (D = Q, M !== null && (Q = eo(R, M), Q != null && se.push(wo(R, Q, D)))), rt)
              break;
            R = R.return;
          }
          0 < se.length && ($ = new ee($, oe, null, s, U), q.push({ event: $, listeners: se }));
        }
      }
      if (!(i & 7)) {
        e: {
          if ($ = t === "mouseover" || t === "pointerover", ee = t === "mouseout" || t === "pointerout", $ && s !== Ue && (oe = s.relatedTarget || s.fromElement) && (Ir(oe) || oe[$n]))
            break e;
          if ((ee || $) && ($ = U.window === U ? U : ($ = U.ownerDocument) ? $.defaultView || $.parentWindow : window, ee ? (oe = s.relatedTarget || s.toElement, ee = F, oe = oe ? Ir(oe) : null, oe !== null && (rt = Fr(oe), oe !== rt || oe.tag !== 5 && oe.tag !== 6) && (oe = null)) : (ee = null, oe = F), ee !== oe)) {
            if (se = Od, Q = "onMouseLeave", M = "onMouseEnter", R = "mouse", (t === "pointerout" || t === "pointerover") && (se = Md, Q = "onPointerLeave", M = "onPointerEnter", R = "pointer"), rt = ee == null ? $ : fi(ee), D = oe == null ? $ : fi(oe), $ = new se(Q, R + "leave", ee, s, U), $.target = rt, $.relatedTarget = D, Q = null, Ir(U) === F && (se = new se(M, R + "enter", oe, s, U), se.target = D, se.relatedTarget = rt, Q = se), rt = Q, ee && oe)
              t: {
                for (se = ee, M = oe, R = 0, D = se; D; D = ui(D))
                  R++;
                for (D = 0, Q = M; Q; Q = ui(Q))
                  D++;
                for (; 0 < R - D; )
                  se = ui(se), R--;
                for (; 0 < D - R; )
                  M = ui(M), D--;
                for (; R--; ) {
                  if (se === M || M !== null && se === M.alternate)
                    break t;
                  se = ui(se), M = ui(M);
                }
                se = null;
              }
            else
              se = null;
            ee !== null && sp(q, $, ee, se, !1), oe !== null && rt !== null && sp(q, rt, oe, se, !0);
          }
        }
        e: {
          if ($ = F ? fi(F) : window, ee = $.nodeName && $.nodeName.toLowerCase(), ee === "select" || ee === "input" && $.type === "file")
            var ce = L1;
          else if (Vd($))
            if (zd)
              ce = F1;
            else {
              ce = D1;
              var he = M1;
            }
          else
            (ee = $.nodeName) && ee.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ce = N1);
          if (ce && (ce = ce(t, F))) {
            Bd(q, ce, s, U);
            break e;
          }
          he && he(t, $, F), t === "focusout" && (he = $._wrapperState) && he.controlled && $.type === "number" && ie($, "number", $.value);
        }
        switch (he = F ? fi(F) : window, t) {
          case "focusin":
            (Vd(he) || he.contentEditable === "true") && (ai = he, nu = F, yo = null);
            break;
          case "focusout":
            yo = nu = ai = null;
            break;
          case "mousedown":
            ru = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ru = !1, Qd(q, s, U);
            break;
          case "selectionchange":
            if (V1)
              break;
          case "keydown":
          case "keyup":
            Qd(q, s, U);
        }
        var me;
        if (Jl)
          e: {
            switch (t) {
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
          si ? Id(t, s) && (we = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (we = "onCompositionStart");
        we && (Dd && s.locale !== "ko" && (si || we !== "onCompositionStart" ? we === "onCompositionEnd" && si && (me = Pd()) : (ur = U, ql = "value" in ur ? ur.value : ur.textContent, si = !0)), he = js(F, we), 0 < he.length && (we = new Ld(we, t, null, s, U), q.push({ event: we, listeners: he }), me ? we.data = me : (me = jd(s), me !== null && (we.data = me)))), (me = A1 ? b1(t, s) : P1(t, s)) && (F = js(F, "onBeforeInput"), 0 < F.length && (U = new Ld("onBeforeInput", "beforeinput", null, s, U), q.push({ event: U, listeners: F }), U.data = me));
      }
      ip(q, i);
    });
  }
  function wo(t, i, s) {
    return { instance: t, listener: i, currentTarget: s };
  }
  function js(t, i) {
    for (var s = i + "Capture", l = []; t !== null; ) {
      var d = t, h = d.stateNode;
      d.tag === 5 && h !== null && (d = h, h = eo(t, s), h != null && l.unshift(wo(t, h, d)), h = eo(t, i), h != null && l.push(wo(t, h, d))), t = t.return;
    }
    return l;
  }
  function ui(t) {
    if (t === null)
      return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function sp(t, i, s, l, d) {
    for (var h = i._reactName, _ = []; s !== null && s !== l; ) {
      var C = s, P = C.alternate, F = C.stateNode;
      if (P !== null && P === l)
        break;
      C.tag === 5 && F !== null && (C = F, d ? (P = eo(s, h), P != null && _.unshift(wo(s, P, C))) : d || (P = eo(s, h), P != null && _.push(wo(s, P, C)))), s = s.return;
    }
    _.length !== 0 && t.push({ event: i, listeners: _ });
  }
  var U1 = /\r\n?/g, H1 = /\u0000|\uFFFD/g;
  function ap(t) {
    return (typeof t == "string" ? t : "" + t).replace(U1, `
`).replace(H1, "");
  }
  function Vs(t, i, s) {
    if (i = ap(i), ap(t) !== i && s)
      throw Error(r(425));
  }
  function Bs() {
  }
  var uu = null, cu = null;
  function fu(t, i) {
    return t === "textarea" || t === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var du = typeof setTimeout == "function" ? setTimeout : void 0, W1 = typeof clearTimeout == "function" ? clearTimeout : void 0, lp = typeof Promise == "function" ? Promise : void 0, q1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof lp < "u" ? function(t) {
    return lp.resolve(null).then(t).catch(G1);
  } : du;
  function G1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function pu(t, i) {
    var s = i, l = 0;
    do {
      var d = s.nextSibling;
      if (t.removeChild(s), d && d.nodeType === 8)
        if (s = d.data, s === "/$") {
          if (l === 0) {
            t.removeChild(d), uo(i);
            return;
          }
          l--;
        } else
          s !== "$" && s !== "$?" && s !== "$!" || l++;
      s = d;
    } while (s);
    uo(i);
  }
  function fr(t) {
    for (; t != null; t = t.nextSibling) {
      var i = t.nodeType;
      if (i === 1 || i === 3)
        break;
      if (i === 8) {
        if (i = t.data, i === "$" || i === "$!" || i === "$?")
          break;
        if (i === "/$")
          return null;
      }
    }
    return t;
  }
  function up(t) {
    t = t.previousSibling;
    for (var i = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (i === 0)
            return t;
          i--;
        } else
          s === "/$" && i++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var ci = Math.random().toString(36).slice(2), Tn = "__reactFiber$" + ci, _o = "__reactProps$" + ci, $n = "__reactContainer$" + ci, hu = "__reactEvents$" + ci, K1 = "__reactListeners$" + ci, Q1 = "__reactHandles$" + ci;
  function Ir(t) {
    var i = t[Tn];
    if (i)
      return i;
    for (var s = t.parentNode; s; ) {
      if (i = s[$n] || s[Tn]) {
        if (s = i.alternate, i.child !== null || s !== null && s.child !== null)
          for (t = up(t); t !== null; ) {
            if (s = t[Tn])
              return s;
            t = up(t);
          }
        return i;
      }
      t = s, s = t.parentNode;
    }
    return null;
  }
  function So(t) {
    return t = t[Tn] || t[$n], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function fi(t) {
    if (t.tag === 5 || t.tag === 6)
      return t.stateNode;
    throw Error(r(33));
  }
  function zs(t) {
    return t[_o] || null;
  }
  var mu = [], di = -1;
  function dr(t) {
    return { current: t };
  }
  function We(t) {
    0 > di || (t.current = mu[di], mu[di] = null, di--);
  }
  function $e(t, i) {
    di++, mu[di] = t.current, t.current = i;
  }
  var pr = {}, Et = dr(pr), Ft = dr(!1), jr = pr;
  function pi(t, i) {
    var s = t.type.contextTypes;
    if (!s)
      return pr;
    var l = t.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === i)
      return l.__reactInternalMemoizedMaskedChildContext;
    var d = {}, h;
    for (h in s)
      d[h] = i[h];
    return l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function It(t) {
    return t = t.childContextTypes, t != null;
  }
  function $s() {
    We(Ft), We(Et);
  }
  function cp(t, i, s) {
    if (Et.current !== pr)
      throw Error(r(168));
    $e(Et, i), $e(Ft, s);
  }
  function fp(t, i, s) {
    var l = t.stateNode;
    if (i = i.childContextTypes, typeof l.getChildContext != "function")
      return s;
    l = l.getChildContext();
    for (var d in l)
      if (!(d in i))
        throw Error(r(108, Pe(t) || "Unknown", d));
    return b({}, s, l);
  }
  function Us(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || pr, jr = Et.current, $e(Et, t), $e(Ft, Ft.current), !0;
  }
  function dp(t, i, s) {
    var l = t.stateNode;
    if (!l)
      throw Error(r(169));
    s ? (t = fp(t, i, jr), l.__reactInternalMemoizedMergedChildContext = t, We(Ft), We(Et), $e(Et, t)) : We(Ft), $e(Ft, s);
  }
  var Un = null, Hs = !1, gu = !1;
  function pp(t) {
    Un === null ? Un = [t] : Un.push(t);
  }
  function Y1(t) {
    Hs = !0, pp(t);
  }
  function hr() {
    if (!gu && Un !== null) {
      gu = !0;
      var t = 0, i = Ve;
      try {
        var s = Un;
        for (Ve = 1; t < s.length; t++) {
          var l = s[t];
          do
            l = l(!0);
          while (l !== null);
        }
        Un = null, Hs = !1;
      } catch (d) {
        throw Un !== null && (Un = Un.slice(t + 1)), md(jl, hr), d;
      } finally {
        Ve = i, gu = !1;
      }
    }
    return null;
  }
  var hi = [], mi = 0, Ws = null, qs = 0, Yt = [], Xt = 0, Vr = null, Hn = 1, Wn = "";
  function Br(t, i) {
    hi[mi++] = qs, hi[mi++] = Ws, Ws = t, qs = i;
  }
  function hp(t, i, s) {
    Yt[Xt++] = Hn, Yt[Xt++] = Wn, Yt[Xt++] = Vr, Vr = t;
    var l = Hn;
    t = Wn;
    var d = 32 - ln(l) - 1;
    l &= ~(1 << d), s += 1;
    var h = 32 - ln(i) + d;
    if (30 < h) {
      var _ = d - d % 5;
      h = (l & (1 << _) - 1).toString(32), l >>= _, d -= _, Hn = 1 << 32 - ln(i) + d | s << d | l, Wn = h + t;
    } else
      Hn = 1 << h | s << d | l, Wn = t;
  }
  function yu(t) {
    t.return !== null && (Br(t, 1), hp(t, 1, 0));
  }
  function vu(t) {
    for (; t === Ws; )
      Ws = hi[--mi], hi[mi] = null, qs = hi[--mi], hi[mi] = null;
    for (; t === Vr; )
      Vr = Yt[--Xt], Yt[Xt] = null, Wn = Yt[--Xt], Yt[Xt] = null, Hn = Yt[--Xt], Yt[Xt] = null;
  }
  var Wt = null, qt = null, qe = !1, cn = null;
  function mp(t, i) {
    var s = tn(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = i, s.return = t, i = t.deletions, i === null ? (t.deletions = [s], t.flags |= 16) : i.push(s);
  }
  function gp(t, i) {
    switch (t.tag) {
      case 5:
        var s = t.type;
        return i = i.nodeType !== 1 || s.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (t.stateNode = i, Wt = t, qt = fr(i.firstChild), !0) : !1;
      case 6:
        return i = t.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (t.stateNode = i, Wt = t, qt = null, !0) : !1;
      case 13:
        return i = i.nodeType !== 8 ? null : i, i !== null ? (s = Vr !== null ? { id: Hn, overflow: Wn } : null, t.memoizedState = { dehydrated: i, treeContext: s, retryLane: 1073741824 }, s = tn(18, null, null, 0), s.stateNode = i, s.return = t, t.child = s, Wt = t, qt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xu(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function wu(t) {
    if (qe) {
      var i = qt;
      if (i) {
        var s = i;
        if (!gp(t, i)) {
          if (xu(t))
            throw Error(r(418));
          i = fr(s.nextSibling);
          var l = Wt;
          i && gp(t, i) ? mp(l, s) : (t.flags = t.flags & -4097 | 2, qe = !1, Wt = t);
        }
      } else {
        if (xu(t))
          throw Error(r(418));
        t.flags = t.flags & -4097 | 2, qe = !1, Wt = t;
      }
    }
  }
  function yp(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
      t = t.return;
    Wt = t;
  }
  function Gs(t) {
    if (t !== Wt)
      return !1;
    if (!qe)
      return yp(t), qe = !0, !1;
    var i;
    if ((i = t.tag !== 3) && !(i = t.tag !== 5) && (i = t.type, i = i !== "head" && i !== "body" && !fu(t.type, t.memoizedProps)), i && (i = qt)) {
      if (xu(t))
        throw vp(), Error(r(418));
      for (; i; )
        mp(t, i), i = fr(i.nextSibling);
    }
    if (yp(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
        throw Error(r(317));
      e: {
        for (t = t.nextSibling, i = 0; t; ) {
          if (t.nodeType === 8) {
            var s = t.data;
            if (s === "/$") {
              if (i === 0) {
                qt = fr(t.nextSibling);
                break e;
              }
              i--;
            } else
              s !== "$" && s !== "$!" && s !== "$?" || i++;
          }
          t = t.nextSibling;
        }
        qt = null;
      }
    } else
      qt = Wt ? fr(t.stateNode.nextSibling) : null;
    return !0;
  }
  function vp() {
    for (var t = qt; t; )
      t = fr(t.nextSibling);
  }
  function gi() {
    qt = Wt = null, qe = !1;
  }
  function _u(t) {
    cn === null ? cn = [t] : cn.push(t);
  }
  var X1 = V.ReactCurrentBatchConfig;
  function fn(t, i) {
    if (t && t.defaultProps) {
      i = b({}, i), t = t.defaultProps;
      for (var s in t)
        i[s] === void 0 && (i[s] = t[s]);
      return i;
    }
    return i;
  }
  var Ks = dr(null), Qs = null, yi = null, Su = null;
  function ku() {
    Su = yi = Qs = null;
  }
  function Tu(t) {
    var i = Ks.current;
    We(Ks), t._currentValue = i;
  }
  function Cu(t, i, s) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & i) !== i ? (t.childLanes |= i, l !== null && (l.childLanes |= i)) : l !== null && (l.childLanes & i) !== i && (l.childLanes |= i), t === s)
        break;
      t = t.return;
    }
  }
  function vi(t, i) {
    Qs = t, Su = yi = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & i && (jt = !0), t.firstContext = null);
  }
  function Jt(t) {
    var i = t._currentValue;
    if (Su !== t)
      if (t = { context: t, memoizedValue: i, next: null }, yi === null) {
        if (Qs === null)
          throw Error(r(308));
        yi = t, Qs.dependencies = { lanes: 0, firstContext: t };
      } else
        yi = yi.next = t;
    return i;
  }
  var zr = null;
  function Eu(t) {
    zr === null ? zr = [t] : zr.push(t);
  }
  function xp(t, i, s, l) {
    var d = i.interleaved;
    return d === null ? (s.next = s, Eu(i)) : (s.next = d.next, d.next = s), i.interleaved = s, qn(t, l);
  }
  function qn(t, i) {
    t.lanes |= i;
    var s = t.alternate;
    for (s !== null && (s.lanes |= i), s = t, t = t.return; t !== null; )
      t.childLanes |= i, s = t.alternate, s !== null && (s.childLanes |= i), s = t, t = t.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var mr = !1;
  function Au(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wp(t, i) {
    t = t.updateQueue, i.updateQueue === t && (i.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Gn(t, i) {
    return { eventTime: t, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function gr(t, i, s) {
    var l = t.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, Me & 2) {
      var d = l.pending;
      return d === null ? i.next = i : (i.next = d.next, d.next = i), l.pending = i, qn(t, s);
    }
    return d = l.interleaved, d === null ? (i.next = i, Eu(l)) : (i.next = d.next, d.next = i), l.interleaved = i, qn(t, s);
  }
  function Ys(t, i, s) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (s & 4194240) !== 0)) {
      var l = i.lanes;
      l &= t.pendingLanes, s |= l, i.lanes = s, zl(t, s);
    }
  }
  function _p(t, i) {
    var s = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, s === l)) {
      var d = null, h = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var _ = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          h === null ? d = h = _ : h = h.next = _, s = s.next;
        } while (s !== null);
        h === null ? d = h = i : h = h.next = i;
      } else
        d = h = i;
      s = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: h, shared: l.shared, effects: l.effects }, t.updateQueue = s;
      return;
    }
    t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = i : t.next = i, s.lastBaseUpdate = i;
  }
  function Xs(t, i, s, l) {
    var d = t.updateQueue;
    mr = !1;
    var h = d.firstBaseUpdate, _ = d.lastBaseUpdate, C = d.shared.pending;
    if (C !== null) {
      d.shared.pending = null;
      var P = C, F = P.next;
      P.next = null, _ === null ? h = F : _.next = F, _ = P;
      var U = t.alternate;
      U !== null && (U = U.updateQueue, C = U.lastBaseUpdate, C !== _ && (C === null ? U.firstBaseUpdate = F : C.next = F, U.lastBaseUpdate = P));
    }
    if (h !== null) {
      var q = d.baseState;
      _ = 0, U = F = P = null, C = h;
      do {
        var $ = C.lane, ee = C.eventTime;
        if ((l & $) === $) {
          U !== null && (U = U.next = {
            eventTime: ee,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var oe = t, se = C;
            switch ($ = i, ee = s, se.tag) {
              case 1:
                if (oe = se.payload, typeof oe == "function") {
                  q = oe.call(ee, q, $);
                  break e;
                }
                q = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = se.payload, $ = typeof oe == "function" ? oe.call(ee, q, $) : oe, $ == null)
                  break e;
                q = b({}, q, $);
                break e;
              case 2:
                mr = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (t.flags |= 64, $ = d.effects, $ === null ? d.effects = [C] : $.push(C));
        } else
          ee = { eventTime: ee, lane: $, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, U === null ? (F = U = ee, P = q) : U = U.next = ee, _ |= $;
        if (C = C.next, C === null) {
          if (C = d.shared.pending, C === null)
            break;
          $ = C, C = $.next, $.next = null, d.lastBaseUpdate = $, d.shared.pending = null;
        }
      } while (1);
      if (U === null && (P = q), d.baseState = P, d.firstBaseUpdate = F, d.lastBaseUpdate = U, i = d.shared.interleaved, i !== null) {
        d = i;
        do
          _ |= d.lane, d = d.next;
        while (d !== i);
      } else
        h === null && (d.shared.lanes = 0);
      Hr |= _, t.lanes = _, t.memoizedState = q;
    }
  }
  function Sp(t, i, s) {
    if (t = i.effects, i.effects = null, t !== null)
      for (i = 0; i < t.length; i++) {
        var l = t[i], d = l.callback;
        if (d !== null) {
          if (l.callback = null, l = s, typeof d != "function")
            throw Error(r(191, d));
          d.call(l);
        }
      }
  }
  var kp = new e.Component().refs;
  function bu(t, i, s, l) {
    i = t.memoizedState, s = s(l, i), s = s == null ? i : b({}, i, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var Js = { isMounted: function(t) {
    return (t = t._reactInternals) ? Fr(t) === t : !1;
  }, enqueueSetState: function(t, i, s) {
    t = t._reactInternals;
    var l = Lt(), d = wr(t), h = Gn(l, d);
    h.payload = i, s != null && (h.callback = s), i = gr(t, h, d), i !== null && (hn(i, t, d, l), Ys(i, t, d));
  }, enqueueReplaceState: function(t, i, s) {
    t = t._reactInternals;
    var l = Lt(), d = wr(t), h = Gn(l, d);
    h.tag = 1, h.payload = i, s != null && (h.callback = s), i = gr(t, h, d), i !== null && (hn(i, t, d, l), Ys(i, t, d));
  }, enqueueForceUpdate: function(t, i) {
    t = t._reactInternals;
    var s = Lt(), l = wr(t), d = Gn(s, l);
    d.tag = 2, i != null && (d.callback = i), i = gr(t, d, l), i !== null && (hn(i, t, l, s), Ys(i, t, l));
  } };
  function Tp(t, i, s, l, d, h, _) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, h, _) : i.prototype && i.prototype.isPureReactComponent ? !go(s, l) || !go(d, h) : !0;
  }
  function Cp(t, i, s) {
    var l = !1, d = pr, h = i.contextType;
    return typeof h == "object" && h !== null ? h = Jt(h) : (d = It(i) ? jr : Et.current, l = i.contextTypes, h = (l = l != null) ? pi(t, d) : pr), i = new i(s, h), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Js, t.stateNode = i, i._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = h), i;
  }
  function Ep(t, i, s, l) {
    t = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(s, l), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(s, l), i.state !== t && Js.enqueueReplaceState(i, i.state, null);
  }
  function Pu(t, i, s, l) {
    var d = t.stateNode;
    d.props = s, d.state = t.memoizedState, d.refs = kp, Au(t);
    var h = i.contextType;
    typeof h == "object" && h !== null ? d.context = Jt(h) : (h = It(i) ? jr : Et.current, d.context = pi(t, h)), d.state = t.memoizedState, h = i.getDerivedStateFromProps, typeof h == "function" && (bu(t, i, h, s), d.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (i = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), i !== d.state && Js.enqueueReplaceState(d, d.state, null), Xs(t, s, d, l), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function ko(t, i, s) {
    if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1)
            throw Error(r(309));
          var l = s.stateNode;
        }
        if (!l)
          throw Error(r(147, t));
        var d = l, h = "" + t;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === h ? i.ref : (i = function(_) {
          var C = d.refs;
          C === kp && (C = d.refs = {}), _ === null ? delete C[h] : C[h] = _;
        }, i._stringRef = h, i);
      }
      if (typeof t != "string")
        throw Error(r(284));
      if (!s._owner)
        throw Error(r(290, t));
    }
    return t;
  }
  function Zs(t, i) {
    throw t = Object.prototype.toString.call(i), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : t));
  }
  function Ap(t) {
    var i = t._init;
    return i(t._payload);
  }
  function bp(t) {
    function i(M, R) {
      if (t) {
        var D = M.deletions;
        D === null ? (M.deletions = [R], M.flags |= 16) : D.push(R);
      }
    }
    function s(M, R) {
      if (!t)
        return null;
      for (; R !== null; )
        i(M, R), R = R.sibling;
      return null;
    }
    function l(M, R) {
      for (M = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? M.set(R.key, R) : M.set(R.index, R), R = R.sibling;
      return M;
    }
    function d(M, R) {
      return M = Sr(M, R), M.index = 0, M.sibling = null, M;
    }
    function h(M, R, D) {
      return M.index = D, t ? (D = M.alternate, D !== null ? (D = D.index, D < R ? (M.flags |= 2, R) : D) : (M.flags |= 2, R)) : (M.flags |= 1048576, R);
    }
    function _(M) {
      return t && M.alternate === null && (M.flags |= 2), M;
    }
    function C(M, R, D, Q) {
      return R === null || R.tag !== 6 ? (R = dc(D, M.mode, Q), R.return = M, R) : (R = d(R, D), R.return = M, R);
    }
    function P(M, R, D, Q) {
      var ce = D.type;
      return ce === K ? U(M, R, D.props.children, Q, D.key) : R !== null && (R.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Ee && Ap(ce) === R.type) ? (Q = d(R, D.props), Q.ref = ko(M, R, D), Q.return = M, Q) : (Q = va(D.type, D.key, D.props, null, M.mode, Q), Q.ref = ko(M, R, D), Q.return = M, Q);
    }
    function F(M, R, D, Q) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== D.containerInfo || R.stateNode.implementation !== D.implementation ? (R = pc(D, M.mode, Q), R.return = M, R) : (R = d(R, D.children || []), R.return = M, R);
    }
    function U(M, R, D, Q, ce) {
      return R === null || R.tag !== 7 ? (R = Kr(D, M.mode, Q, ce), R.return = M, R) : (R = d(R, D), R.return = M, R);
    }
    function q(M, R, D) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = dc("" + R, M.mode, D), R.return = M, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            return D = va(R.type, R.key, R.props, null, M.mode, D), D.ref = ko(M, null, R), D.return = M, D;
          case J:
            return R = pc(R, M.mode, D), R.return = M, R;
          case Ee:
            var Q = R._init;
            return q(M, Q(R._payload), D);
        }
        if (X(R) || ue(R))
          return R = Kr(R, M.mode, D, null), R.return = M, R;
        Zs(M, R);
      }
      return null;
    }
    function $(M, R, D, Q) {
      var ce = R !== null ? R.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number")
        return ce !== null ? null : C(M, R, "" + D, Q);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case H:
            return D.key === ce ? P(M, R, D, Q) : null;
          case J:
            return D.key === ce ? F(M, R, D, Q) : null;
          case Ee:
            return ce = D._init, $(
              M,
              R,
              ce(D._payload),
              Q
            );
        }
        if (X(D) || ue(D))
          return ce !== null ? null : U(M, R, D, Q, null);
        Zs(M, D);
      }
      return null;
    }
    function ee(M, R, D, Q, ce) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return M = M.get(D) || null, C(R, M, "" + Q, ce);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case H:
            return M = M.get(Q.key === null ? D : Q.key) || null, P(R, M, Q, ce);
          case J:
            return M = M.get(Q.key === null ? D : Q.key) || null, F(R, M, Q, ce);
          case Ee:
            var he = Q._init;
            return ee(M, R, D, he(Q._payload), ce);
        }
        if (X(Q) || ue(Q))
          return M = M.get(D) || null, U(R, M, Q, ce, null);
        Zs(R, Q);
      }
      return null;
    }
    function oe(M, R, D, Q) {
      for (var ce = null, he = null, me = R, we = R = 0, yt = null; me !== null && we < D.length; we++) {
        me.index > we ? (yt = me, me = null) : yt = me.sibling;
        var Ne = $(M, me, D[we], Q);
        if (Ne === null) {
          me === null && (me = yt);
          break;
        }
        t && me && Ne.alternate === null && i(M, me), R = h(Ne, R, we), he === null ? ce = Ne : he.sibling = Ne, he = Ne, me = yt;
      }
      if (we === D.length)
        return s(M, me), qe && Br(M, we), ce;
      if (me === null) {
        for (; we < D.length; we++)
          me = q(M, D[we], Q), me !== null && (R = h(me, R, we), he === null ? ce = me : he.sibling = me, he = me);
        return qe && Br(M, we), ce;
      }
      for (me = l(M, me); we < D.length; we++)
        yt = ee(me, M, we, D[we], Q), yt !== null && (t && yt.alternate !== null && me.delete(yt.key === null ? we : yt.key), R = h(yt, R, we), he === null ? ce = yt : he.sibling = yt, he = yt);
      return t && me.forEach(function(kr) {
        return i(M, kr);
      }), qe && Br(M, we), ce;
    }
    function se(M, R, D, Q) {
      var ce = ue(D);
      if (typeof ce != "function")
        throw Error(r(150));
      if (D = ce.call(D), D == null)
        throw Error(r(151));
      for (var he = ce = null, me = R, we = R = 0, yt = null, Ne = D.next(); me !== null && !Ne.done; we++, Ne = D.next()) {
        me.index > we ? (yt = me, me = null) : yt = me.sibling;
        var kr = $(M, me, Ne.value, Q);
        if (kr === null) {
          me === null && (me = yt);
          break;
        }
        t && me && kr.alternate === null && i(M, me), R = h(kr, R, we), he === null ? ce = kr : he.sibling = kr, he = kr, me = yt;
      }
      if (Ne.done)
        return s(
          M,
          me
        ), qe && Br(M, we), ce;
      if (me === null) {
        for (; !Ne.done; we++, Ne = D.next())
          Ne = q(M, Ne.value, Q), Ne !== null && (R = h(Ne, R, we), he === null ? ce = Ne : he.sibling = Ne, he = Ne);
        return qe && Br(M, we), ce;
      }
      for (me = l(M, me); !Ne.done; we++, Ne = D.next())
        Ne = ee(me, M, we, Ne.value, Q), Ne !== null && (t && Ne.alternate !== null && me.delete(Ne.key === null ? we : Ne.key), R = h(Ne, R, we), he === null ? ce = Ne : he.sibling = Ne, he = Ne);
      return t && me.forEach(function(Rx) {
        return i(M, Rx);
      }), qe && Br(M, we), ce;
    }
    function rt(M, R, D, Q) {
      if (typeof D == "object" && D !== null && D.type === K && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case H:
            e: {
              for (var ce = D.key, he = R; he !== null; ) {
                if (he.key === ce) {
                  if (ce = D.type, ce === K) {
                    if (he.tag === 7) {
                      s(M, he.sibling), R = d(he, D.props.children), R.return = M, M = R;
                      break e;
                    }
                  } else if (he.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Ee && Ap(ce) === he.type) {
                    s(M, he.sibling), R = d(he, D.props), R.ref = ko(M, he, D), R.return = M, M = R;
                    break e;
                  }
                  s(M, he);
                  break;
                } else
                  i(M, he);
                he = he.sibling;
              }
              D.type === K ? (R = Kr(D.props.children, M.mode, Q, D.key), R.return = M, M = R) : (Q = va(D.type, D.key, D.props, null, M.mode, Q), Q.ref = ko(M, R, D), Q.return = M, M = Q);
            }
            return _(M);
          case J:
            e: {
              for (he = D.key; R !== null; ) {
                if (R.key === he)
                  if (R.tag === 4 && R.stateNode.containerInfo === D.containerInfo && R.stateNode.implementation === D.implementation) {
                    s(M, R.sibling), R = d(R, D.children || []), R.return = M, M = R;
                    break e;
                  } else {
                    s(M, R);
                    break;
                  }
                else
                  i(M, R);
                R = R.sibling;
              }
              R = pc(D, M.mode, Q), R.return = M, M = R;
            }
            return _(M);
          case Ee:
            return he = D._init, rt(M, R, he(D._payload), Q);
        }
        if (X(D))
          return oe(M, R, D, Q);
        if (ue(D))
          return se(M, R, D, Q);
        Zs(M, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, R !== null && R.tag === 6 ? (s(M, R.sibling), R = d(R, D), R.return = M, M = R) : (s(M, R), R = dc(D, M.mode, Q), R.return = M, M = R), _(M)) : s(M, R);
    }
    return rt;
  }
  var xi = bp(!0), Pp = bp(!1), To = {}, Cn = dr(To), Co = dr(To), Eo = dr(To);
  function $r(t) {
    if (t === To)
      throw Error(r(174));
    return t;
  }
  function Ru(t, i) {
    switch ($e(Eo, i), $e(Co, t), $e(Cn, To), t = i.nodeType, t) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Vn(null, "");
        break;
      default:
        t = t === 8 ? i.parentNode : i, i = t.namespaceURI || null, t = t.tagName, i = Vn(i, t);
    }
    We(Cn), $e(Cn, i);
  }
  function wi() {
    We(Cn), We(Co), We(Eo);
  }
  function Rp(t) {
    $r(Eo.current);
    var i = $r(Cn.current), s = Vn(i, t.type);
    i !== s && ($e(Co, t), $e(Cn, s));
  }
  function Ou(t) {
    Co.current === t && (We(Cn), We(Co));
  }
  var Ye = dr(0);
  function ea(t) {
    for (var i = t; i !== null; ) {
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
      if (i === t)
        break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t)
          return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var Lu = [];
  function Mu() {
    for (var t = 0; t < Lu.length; t++)
      Lu[t]._workInProgressVersionPrimary = null;
    Lu.length = 0;
  }
  var ta = V.ReactCurrentDispatcher, Du = V.ReactCurrentBatchConfig, Ur = 0, Xe = null, ct = null, mt = null, na = !1, Ao = !1, bo = 0, J1 = 0;
  function At() {
    throw Error(r(321));
  }
  function Nu(t, i) {
    if (i === null)
      return !1;
    for (var s = 0; s < i.length && s < t.length; s++)
      if (!un(t[s], i[s]))
        return !1;
    return !0;
  }
  function Fu(t, i, s, l, d, h) {
    if (Ur = h, Xe = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, ta.current = t === null || t.memoizedState === null ? nx : rx, t = s(l, d), Ao) {
      h = 0;
      do {
        if (Ao = !1, bo = 0, 25 <= h)
          throw Error(r(301));
        h += 1, mt = ct = null, i.updateQueue = null, ta.current = ix, t = s(l, d);
      } while (Ao);
    }
    if (ta.current = oa, i = ct !== null && ct.next !== null, Ur = 0, mt = ct = Xe = null, na = !1, i)
      throw Error(r(300));
    return t;
  }
  function Iu() {
    var t = bo !== 0;
    return bo = 0, t;
  }
  function En() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? Xe.memoizedState = mt = t : mt = mt.next = t, mt;
  }
  function Zt() {
    if (ct === null) {
      var t = Xe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else
      t = ct.next;
    var i = mt === null ? Xe.memoizedState : mt.next;
    if (i !== null)
      mt = i, ct = t;
    else {
      if (t === null)
        throw Error(r(310));
      ct = t, t = { memoizedState: ct.memoizedState, baseState: ct.baseState, baseQueue: ct.baseQueue, queue: ct.queue, next: null }, mt === null ? Xe.memoizedState = mt = t : mt = mt.next = t;
    }
    return mt;
  }
  function Po(t, i) {
    return typeof i == "function" ? i(t) : i;
  }
  function ju(t) {
    var i = Zt(), s = i.queue;
    if (s === null)
      throw Error(r(311));
    s.lastRenderedReducer = t;
    var l = ct, d = l.baseQueue, h = s.pending;
    if (h !== null) {
      if (d !== null) {
        var _ = d.next;
        d.next = h.next, h.next = _;
      }
      l.baseQueue = d = h, s.pending = null;
    }
    if (d !== null) {
      h = d.next, l = l.baseState;
      var C = _ = null, P = null, F = h;
      do {
        var U = F.lane;
        if ((Ur & U) === U)
          P !== null && (P = P.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), l = F.hasEagerState ? F.eagerState : t(l, F.action);
        else {
          var q = {
            lane: U,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          P === null ? (C = P = q, _ = l) : P = P.next = q, Xe.lanes |= U, Hr |= U;
        }
        F = F.next;
      } while (F !== null && F !== h);
      P === null ? _ = l : P.next = C, un(l, i.memoizedState) || (jt = !0), i.memoizedState = l, i.baseState = _, i.baseQueue = P, s.lastRenderedState = l;
    }
    if (t = s.interleaved, t !== null) {
      d = t;
      do
        h = d.lane, Xe.lanes |= h, Hr |= h, d = d.next;
      while (d !== t);
    } else
      d === null && (s.lanes = 0);
    return [i.memoizedState, s.dispatch];
  }
  function Vu(t) {
    var i = Zt(), s = i.queue;
    if (s === null)
      throw Error(r(311));
    s.lastRenderedReducer = t;
    var l = s.dispatch, d = s.pending, h = i.memoizedState;
    if (d !== null) {
      s.pending = null;
      var _ = d = d.next;
      do
        h = t(h, _.action), _ = _.next;
      while (_ !== d);
      un(h, i.memoizedState) || (jt = !0), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), s.lastRenderedState = h;
    }
    return [h, l];
  }
  function Op() {
  }
  function Lp(t, i) {
    var s = Xe, l = Zt(), d = i(), h = !un(l.memoizedState, d);
    if (h && (l.memoizedState = d, jt = !0), l = l.queue, Bu(Np.bind(null, s, l, t), [t]), l.getSnapshot !== i || h || mt !== null && mt.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ro(9, Dp.bind(null, s, l, d, i), void 0, null), gt === null)
        throw Error(r(349));
      Ur & 30 || Mp(s, i, d);
    }
    return d;
  }
  function Mp(t, i, s) {
    t.flags |= 16384, t = { getSnapshot: i, value: s }, i = Xe.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Xe.updateQueue = i, i.stores = [t]) : (s = i.stores, s === null ? i.stores = [t] : s.push(t));
  }
  function Dp(t, i, s, l) {
    i.value = s, i.getSnapshot = l, Fp(i) && Ip(t);
  }
  function Np(t, i, s) {
    return s(function() {
      Fp(i) && Ip(t);
    });
  }
  function Fp(t) {
    var i = t.getSnapshot;
    t = t.value;
    try {
      var s = i();
      return !un(t, s);
    } catch {
      return !0;
    }
  }
  function Ip(t) {
    var i = qn(t, 1);
    i !== null && hn(i, t, 1, -1);
  }
  function jp(t) {
    var i = En();
    return typeof t == "function" && (t = t()), i.memoizedState = i.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Po, lastRenderedState: t }, i.queue = t, t = t.dispatch = tx.bind(null, Xe, t), [i.memoizedState, t];
  }
  function Ro(t, i, s, l) {
    return t = { tag: t, create: i, destroy: s, deps: l, next: null }, i = Xe.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Xe.updateQueue = i, i.lastEffect = t.next = t) : (s = i.lastEffect, s === null ? i.lastEffect = t.next = t : (l = s.next, s.next = t, t.next = l, i.lastEffect = t)), t;
  }
  function Vp() {
    return Zt().memoizedState;
  }
  function ra(t, i, s, l) {
    var d = En();
    Xe.flags |= t, d.memoizedState = Ro(1 | i, s, void 0, l === void 0 ? null : l);
  }
  function ia(t, i, s, l) {
    var d = Zt();
    l = l === void 0 ? null : l;
    var h = void 0;
    if (ct !== null) {
      var _ = ct.memoizedState;
      if (h = _.destroy, l !== null && Nu(l, _.deps)) {
        d.memoizedState = Ro(i, s, h, l);
        return;
      }
    }
    Xe.flags |= t, d.memoizedState = Ro(1 | i, s, h, l);
  }
  function Bp(t, i) {
    return ra(8390656, 8, t, i);
  }
  function Bu(t, i) {
    return ia(2048, 8, t, i);
  }
  function zp(t, i) {
    return ia(4, 2, t, i);
  }
  function $p(t, i) {
    return ia(4, 4, t, i);
  }
  function Up(t, i) {
    if (typeof i == "function")
      return t = t(), i(t), function() {
        i(null);
      };
    if (i != null)
      return t = t(), i.current = t, function() {
        i.current = null;
      };
  }
  function Hp(t, i, s) {
    return s = s != null ? s.concat([t]) : null, ia(4, 4, Up.bind(null, i, t), s);
  }
  function zu() {
  }
  function Wp(t, i) {
    var s = Zt();
    i = i === void 0 ? null : i;
    var l = s.memoizedState;
    return l !== null && i !== null && Nu(i, l[1]) ? l[0] : (s.memoizedState = [t, i], t);
  }
  function qp(t, i) {
    var s = Zt();
    i = i === void 0 ? null : i;
    var l = s.memoizedState;
    return l !== null && i !== null && Nu(i, l[1]) ? l[0] : (t = t(), s.memoizedState = [t, i], t);
  }
  function Gp(t, i, s) {
    return Ur & 21 ? (un(s, i) || (s = xd(), Xe.lanes |= s, Hr |= s, t.baseState = !0), i) : (t.baseState && (t.baseState = !1, jt = !0), t.memoizedState = s);
  }
  function Z1(t, i) {
    var s = Ve;
    Ve = s !== 0 && 4 > s ? s : 4, t(!0);
    var l = Du.transition;
    Du.transition = {};
    try {
      t(!1), i();
    } finally {
      Ve = s, Du.transition = l;
    }
  }
  function Kp() {
    return Zt().memoizedState;
  }
  function ex(t, i, s) {
    var l = wr(t);
    if (s = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null }, Qp(t))
      Yp(i, s);
    else if (s = xp(t, i, s, l), s !== null) {
      var d = Lt();
      hn(s, t, l, d), Xp(s, i, l);
    }
  }
  function tx(t, i, s) {
    var l = wr(t), d = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Qp(t))
      Yp(i, d);
    else {
      var h = t.alternate;
      if (t.lanes === 0 && (h === null || h.lanes === 0) && (h = i.lastRenderedReducer, h !== null))
        try {
          var _ = i.lastRenderedState, C = h(_, s);
          if (d.hasEagerState = !0, d.eagerState = C, un(C, _)) {
            var P = i.interleaved;
            P === null ? (d.next = d, Eu(i)) : (d.next = P.next, P.next = d), i.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
      s = xp(t, i, d, l), s !== null && (d = Lt(), hn(s, t, l, d), Xp(s, i, l));
    }
  }
  function Qp(t) {
    var i = t.alternate;
    return t === Xe || i !== null && i === Xe;
  }
  function Yp(t, i) {
    Ao = na = !0;
    var s = t.pending;
    s === null ? i.next = i : (i.next = s.next, s.next = i), t.pending = i;
  }
  function Xp(t, i, s) {
    if (s & 4194240) {
      var l = i.lanes;
      l &= t.pendingLanes, s |= l, i.lanes = s, zl(t, s);
    }
  }
  var oa = { readContext: Jt, useCallback: At, useContext: At, useEffect: At, useImperativeHandle: At, useInsertionEffect: At, useLayoutEffect: At, useMemo: At, useReducer: At, useRef: At, useState: At, useDebugValue: At, useDeferredValue: At, useTransition: At, useMutableSource: At, useSyncExternalStore: At, useId: At, unstable_isNewReconciler: !1 }, nx = { readContext: Jt, useCallback: function(t, i) {
    return En().memoizedState = [t, i === void 0 ? null : i], t;
  }, useContext: Jt, useEffect: Bp, useImperativeHandle: function(t, i, s) {
    return s = s != null ? s.concat([t]) : null, ra(
      4194308,
      4,
      Up.bind(null, i, t),
      s
    );
  }, useLayoutEffect: function(t, i) {
    return ra(4194308, 4, t, i);
  }, useInsertionEffect: function(t, i) {
    return ra(4, 2, t, i);
  }, useMemo: function(t, i) {
    var s = En();
    return i = i === void 0 ? null : i, t = t(), s.memoizedState = [t, i], t;
  }, useReducer: function(t, i, s) {
    var l = En();
    return i = s !== void 0 ? s(i) : i, l.memoizedState = l.baseState = i, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: i }, l.queue = t, t = t.dispatch = ex.bind(null, Xe, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var i = En();
    return t = { current: t }, i.memoizedState = t;
  }, useState: jp, useDebugValue: zu, useDeferredValue: function(t) {
    return En().memoizedState = t;
  }, useTransition: function() {
    var t = jp(!1), i = t[0];
    return t = Z1.bind(null, t[1]), En().memoizedState = t, [i, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, i, s) {
    var l = Xe, d = En();
    if (qe) {
      if (s === void 0)
        throw Error(r(407));
      s = s();
    } else {
      if (s = i(), gt === null)
        throw Error(r(349));
      Ur & 30 || Mp(l, i, s);
    }
    d.memoizedState = s;
    var h = { value: s, getSnapshot: i };
    return d.queue = h, Bp(Np.bind(
      null,
      l,
      h,
      t
    ), [t]), l.flags |= 2048, Ro(9, Dp.bind(null, l, h, s, i), void 0, null), s;
  }, useId: function() {
    var t = En(), i = gt.identifierPrefix;
    if (qe) {
      var s = Wn, l = Hn;
      s = (l & ~(1 << 32 - ln(l) - 1)).toString(32) + s, i = ":" + i + "R" + s, s = bo++, 0 < s && (i += "H" + s.toString(32)), i += ":";
    } else
      s = J1++, i = ":" + i + "r" + s.toString(32) + ":";
    return t.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, rx = {
    readContext: Jt,
    useCallback: Wp,
    useContext: Jt,
    useEffect: Bu,
    useImperativeHandle: Hp,
    useInsertionEffect: zp,
    useLayoutEffect: $p,
    useMemo: qp,
    useReducer: ju,
    useRef: Vp,
    useState: function() {
      return ju(Po);
    },
    useDebugValue: zu,
    useDeferredValue: function(t) {
      var i = Zt();
      return Gp(i, ct.memoizedState, t);
    },
    useTransition: function() {
      var t = ju(Po)[0], i = Zt().memoizedState;
      return [t, i];
    },
    useMutableSource: Op,
    useSyncExternalStore: Lp,
    useId: Kp,
    unstable_isNewReconciler: !1
  }, ix = { readContext: Jt, useCallback: Wp, useContext: Jt, useEffect: Bu, useImperativeHandle: Hp, useInsertionEffect: zp, useLayoutEffect: $p, useMemo: qp, useReducer: Vu, useRef: Vp, useState: function() {
    return Vu(Po);
  }, useDebugValue: zu, useDeferredValue: function(t) {
    var i = Zt();
    return ct === null ? i.memoizedState = t : Gp(i, ct.memoizedState, t);
  }, useTransition: function() {
    var t = Vu(Po)[0], i = Zt().memoizedState;
    return [t, i];
  }, useMutableSource: Op, useSyncExternalStore: Lp, useId: Kp, unstable_isNewReconciler: !1 };
  function _i(t, i) {
    try {
      var s = "", l = i;
      do
        s += Oe(l), l = l.return;
      while (l);
      var d = s;
    } catch (h) {
      d = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: t, source: i, stack: d, digest: null };
  }
  function $u(t, i, s) {
    return { value: t, source: null, stack: s ?? null, digest: i ?? null };
  }
  function Uu(t, i) {
    try {
      console.error(i.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var ox = typeof WeakMap == "function" ? WeakMap : Map;
  function Jp(t, i, s) {
    s = Gn(-1, s), s.tag = 3, s.payload = { element: null };
    var l = i.value;
    return s.callback = function() {
      da || (da = !0, ic = l), Uu(t, i);
    }, s;
  }
  function Zp(t, i, s) {
    s = Gn(-1, s), s.tag = 3;
    var l = t.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = i.value;
      s.payload = function() {
        return l(d);
      }, s.callback = function() {
        Uu(t, i);
      };
    }
    var h = t.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (s.callback = function() {
      Uu(t, i), typeof l != "function" && (vr === null ? vr = /* @__PURE__ */ new Set([this]) : vr.add(this));
      var _ = i.stack;
      this.componentDidCatch(i.value, { componentStack: _ !== null ? _ : "" });
    }), s;
  }
  function eh(t, i, s) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new ox();
      var d = /* @__PURE__ */ new Set();
      l.set(i, d);
    } else
      d = l.get(i), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(i, d));
    d.has(s) || (d.add(s), t = xx.bind(null, t, i, s), i.then(t, t));
  }
  function th(t) {
    do {
      var i;
      if ((i = t.tag === 13) && (i = t.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i)
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function nh(t, i, s, l, d) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = d, t) : (t === i ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (i = Gn(-1, 1), i.tag = 2, gr(s, i, 1))), s.lanes |= 1), t);
  }
  var sx = V.ReactCurrentOwner, jt = !1;
  function Ot(t, i, s, l) {
    i.child = t === null ? Pp(i, null, s, l) : xi(i, t.child, s, l);
  }
  function rh(t, i, s, l, d) {
    s = s.render;
    var h = i.ref;
    return vi(i, d), l = Fu(t, i, s, l, h, d), s = Iu(), t !== null && !jt ? (i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~d, Kn(t, i, d)) : (qe && s && yu(i), i.flags |= 1, Ot(t, i, l, d), i.child);
  }
  function ih(t, i, s, l, d) {
    if (t === null) {
      var h = s.type;
      return typeof h == "function" && !fc(h) && h.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (i.tag = 15, i.type = h, oh(t, i, h, l, d)) : (t = va(s.type, null, l, i, i.mode, d), t.ref = i.ref, t.return = i, i.child = t);
    }
    if (h = t.child, !(t.lanes & d)) {
      var _ = h.memoizedProps;
      if (s = s.compare, s = s !== null ? s : go, s(_, l) && t.ref === i.ref)
        return Kn(t, i, d);
    }
    return i.flags |= 1, t = Sr(h, l), t.ref = i.ref, t.return = i, i.child = t;
  }
  function oh(t, i, s, l, d) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (go(h, l) && t.ref === i.ref)
        if (jt = !1, i.pendingProps = l = h, (t.lanes & d) !== 0)
          t.flags & 131072 && (jt = !0);
        else
          return i.lanes = t.lanes, Kn(t, i, d);
    }
    return Hu(t, i, s, l, d);
  }
  function sh(t, i, s) {
    var l = i.pendingProps, d = l.children, h = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden")
      if (!(i.mode & 1))
        i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(ki, Gt), Gt |= s;
      else {
        if (!(s & 1073741824))
          return t = h !== null ? h.baseLanes | s : s, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, i.updateQueue = null, $e(ki, Gt), Gt |= t, null;
        i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = h !== null ? h.baseLanes : s, $e(ki, Gt), Gt |= l;
      }
    else
      h !== null ? (l = h.baseLanes | s, i.memoizedState = null) : l = s, $e(ki, Gt), Gt |= l;
    return Ot(t, i, d, s), i.child;
  }
  function ah(t, i) {
    var s = i.ref;
    (t === null && s !== null || t !== null && t.ref !== s) && (i.flags |= 512, i.flags |= 2097152);
  }
  function Hu(t, i, s, l, d) {
    var h = It(s) ? jr : Et.current;
    return h = pi(i, h), vi(i, d), s = Fu(t, i, s, l, h, d), l = Iu(), t !== null && !jt ? (i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~d, Kn(t, i, d)) : (qe && l && yu(i), i.flags |= 1, Ot(t, i, s, d), i.child);
  }
  function lh(t, i, s, l, d) {
    if (It(s)) {
      var h = !0;
      Us(i);
    } else
      h = !1;
    if (vi(i, d), i.stateNode === null)
      aa(t, i), Cp(i, s, l), Pu(i, s, l, d), l = !0;
    else if (t === null) {
      var _ = i.stateNode, C = i.memoizedProps;
      _.props = C;
      var P = _.context, F = s.contextType;
      typeof F == "object" && F !== null ? F = Jt(F) : (F = It(s) ? jr : Et.current, F = pi(i, F));
      var U = s.getDerivedStateFromProps, q = typeof U == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      q || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (C !== l || P !== F) && Ep(i, _, l, F), mr = !1;
      var $ = i.memoizedState;
      _.state = $, Xs(i, l, _, d), P = i.memoizedState, C !== l || $ !== P || Ft.current || mr ? (typeof U == "function" && (bu(i, s, U, l), P = i.memoizedState), (C = mr || Tp(i, s, C, l, $, P, F)) ? (q || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = l, i.memoizedState = P), _.props = l, _.state = P, _.context = F, l = C) : (typeof _.componentDidMount == "function" && (i.flags |= 4194308), l = !1);
    } else {
      _ = i.stateNode, wp(t, i), C = i.memoizedProps, F = i.type === i.elementType ? C : fn(i.type, C), _.props = F, q = i.pendingProps, $ = _.context, P = s.contextType, typeof P == "object" && P !== null ? P = Jt(P) : (P = It(s) ? jr : Et.current, P = pi(i, P));
      var ee = s.getDerivedStateFromProps;
      (U = typeof ee == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (C !== q || $ !== P) && Ep(i, _, l, P), mr = !1, $ = i.memoizedState, _.state = $, Xs(i, l, _, d);
      var oe = i.memoizedState;
      C !== q || $ !== oe || Ft.current || mr ? (typeof ee == "function" && (bu(i, s, ee, l), oe = i.memoizedState), (F = mr || Tp(i, s, F, l, $, oe, P) || !1) ? (U || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(l, oe, P), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(l, oe, P)), typeof _.componentDidUpdate == "function" && (i.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || C === t.memoizedProps && $ === t.memoizedState || (i.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || C === t.memoizedProps && $ === t.memoizedState || (i.flags |= 1024), i.memoizedProps = l, i.memoizedState = oe), _.props = l, _.state = oe, _.context = P, l = F) : (typeof _.componentDidUpdate != "function" || C === t.memoizedProps && $ === t.memoizedState || (i.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || C === t.memoizedProps && $ === t.memoizedState || (i.flags |= 1024), l = !1);
    }
    return Wu(t, i, s, l, h, d);
  }
  function Wu(t, i, s, l, d, h) {
    ah(t, i);
    var _ = (i.flags & 128) !== 0;
    if (!l && !_)
      return d && dp(i, s, !1), Kn(t, i, h);
    l = i.stateNode, sx.current = i;
    var C = _ && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return i.flags |= 1, t !== null && _ ? (i.child = xi(i, t.child, null, h), i.child = xi(i, null, C, h)) : Ot(t, i, C, h), i.memoizedState = l.state, d && dp(i, s, !0), i.child;
  }
  function uh(t) {
    var i = t.stateNode;
    i.pendingContext ? cp(t, i.pendingContext, i.pendingContext !== i.context) : i.context && cp(t, i.context, !1), Ru(t, i.containerInfo);
  }
  function ch(t, i, s, l, d) {
    return gi(), _u(d), i.flags |= 256, Ot(t, i, s, l), i.child;
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gu(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function fh(t, i, s) {
    var l = i.pendingProps, d = Ye.current, h = !1, _ = (i.flags & 128) !== 0, C;
    if ((C = _) || (C = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0), C ? (h = !0, i.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), $e(Ye, d & 1), t === null)
      return wu(i), t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (i.mode & 1 ? t.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (_ = l.children, t = l.fallback, h ? (l = i.mode, h = i.child, _ = { mode: "hidden", children: _ }, !(l & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = _) : h = xa(_, l, 0, null), t = Kr(t, l, s, null), h.return = i, t.return = i, h.sibling = t, i.child = h, i.child.memoizedState = Gu(s), i.memoizedState = qu, t) : Ku(i, _));
    if (d = t.memoizedState, d !== null && (C = d.dehydrated, C !== null))
      return ax(t, i, _, l, C, d, s);
    if (h) {
      h = l.fallback, _ = i.mode, d = t.child, C = d.sibling;
      var P = { mode: "hidden", children: l.children };
      return !(_ & 1) && i.child !== d ? (l = i.child, l.childLanes = 0, l.pendingProps = P, i.deletions = null) : (l = Sr(d, P), l.subtreeFlags = d.subtreeFlags & 14680064), C !== null ? h = Sr(C, h) : (h = Kr(h, _, s, null), h.flags |= 2), h.return = i, l.return = i, l.sibling = h, i.child = l, l = h, h = i.child, _ = t.child.memoizedState, _ = _ === null ? Gu(s) : { baseLanes: _.baseLanes | s, cachePool: null, transitions: _.transitions }, h.memoizedState = _, h.childLanes = t.childLanes & ~s, i.memoizedState = qu, l;
    }
    return h = t.child, t = h.sibling, l = Sr(h, { mode: "visible", children: l.children }), !(i.mode & 1) && (l.lanes = s), l.return = i, l.sibling = null, t !== null && (s = i.deletions, s === null ? (i.deletions = [t], i.flags |= 16) : s.push(t)), i.child = l, i.memoizedState = null, l;
  }
  function Ku(t, i) {
    return i = xa({ mode: "visible", children: i }, t.mode, 0, null), i.return = t, t.child = i;
  }
  function sa(t, i, s, l) {
    return l !== null && _u(l), xi(i, t.child, null, s), t = Ku(i, i.pendingProps.children), t.flags |= 2, i.memoizedState = null, t;
  }
  function ax(t, i, s, l, d, h, _) {
    if (s)
      return i.flags & 256 ? (i.flags &= -257, l = $u(Error(r(422))), sa(t, i, _, l)) : i.memoizedState !== null ? (i.child = t.child, i.flags |= 128, null) : (h = l.fallback, d = i.mode, l = xa({ mode: "visible", children: l.children }, d, 0, null), h = Kr(h, d, _, null), h.flags |= 2, l.return = i, h.return = i, l.sibling = h, i.child = l, i.mode & 1 && xi(i, t.child, null, _), i.child.memoizedState = Gu(_), i.memoizedState = qu, h);
    if (!(i.mode & 1))
      return sa(t, i, _, null);
    if (d.data === "$!") {
      if (l = d.nextSibling && d.nextSibling.dataset, l)
        var C = l.dgst;
      return l = C, h = Error(r(419)), l = $u(h, l, void 0), sa(t, i, _, l);
    }
    if (C = (_ & t.childLanes) !== 0, jt || C) {
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
        d = d & (l.suspendedLanes | _) ? 0 : d, d !== 0 && d !== h.retryLane && (h.retryLane = d, qn(t, d), hn(l, t, d, -1));
      }
      return cc(), l = $u(Error(r(421))), sa(t, i, _, l);
    }
    return d.data === "$?" ? (i.flags |= 128, i.child = t.child, i = wx.bind(null, t), d._reactRetry = i, null) : (t = h.treeContext, qt = fr(d.nextSibling), Wt = i, qe = !0, cn = null, t !== null && (Yt[Xt++] = Hn, Yt[Xt++] = Wn, Yt[Xt++] = Vr, Hn = t.id, Wn = t.overflow, Vr = i), i = Ku(i, l.children), i.flags |= 4096, i);
  }
  function dh(t, i, s) {
    t.lanes |= i;
    var l = t.alternate;
    l !== null && (l.lanes |= i), Cu(t.return, i, s);
  }
  function Qu(t, i, s, l, d) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: l, tail: s, tailMode: d } : (h.isBackwards = i, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = s, h.tailMode = d);
  }
  function ph(t, i, s) {
    var l = i.pendingProps, d = l.revealOrder, h = l.tail;
    if (Ot(t, i, l.children, s), l = Ye.current, l & 2)
      l = l & 1 | 2, i.flags |= 128;
    else {
      if (t !== null && t.flags & 128)
        e:
          for (t = i.child; t !== null; ) {
            if (t.tag === 13)
              t.memoizedState !== null && dh(t, s, i);
            else if (t.tag === 19)
              dh(t, s, i);
            else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === i)
              break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === i)
                break e;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
      l &= 1;
    }
    if ($e(Ye, l), !(i.mode & 1))
      i.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (s = i.child, d = null; s !== null; )
            t = s.alternate, t !== null && ea(t) === null && (d = s), s = s.sibling;
          s = d, s === null ? (d = i.child, i.child = null) : (d = s.sibling, s.sibling = null), Qu(i, !1, d, s, h);
          break;
        case "backwards":
          for (s = null, d = i.child, i.child = null; d !== null; ) {
            if (t = d.alternate, t !== null && ea(t) === null) {
              i.child = d;
              break;
            }
            t = d.sibling, d.sibling = s, s = d, d = t;
          }
          Qu(i, !0, s, null, h);
          break;
        case "together":
          Qu(i, !1, null, null, void 0);
          break;
        default:
          i.memoizedState = null;
      }
    return i.child;
  }
  function aa(t, i) {
    !(i.mode & 1) && t !== null && (t.alternate = null, i.alternate = null, i.flags |= 2);
  }
  function Kn(t, i, s) {
    if (t !== null && (i.dependencies = t.dependencies), Hr |= i.lanes, !(s & i.childLanes))
      return null;
    if (t !== null && i.child !== t.child)
      throw Error(r(153));
    if (i.child !== null) {
      for (t = i.child, s = Sr(t, t.pendingProps), i.child = s, s.return = i; t.sibling !== null; )
        t = t.sibling, s = s.sibling = Sr(t, t.pendingProps), s.return = i;
      s.sibling = null;
    }
    return i.child;
  }
  function lx(t, i, s) {
    switch (i.tag) {
      case 3:
        uh(i), gi();
        break;
      case 5:
        Rp(i);
        break;
      case 1:
        It(i.type) && Us(i);
        break;
      case 4:
        Ru(i, i.stateNode.containerInfo);
        break;
      case 10:
        var l = i.type._context, d = i.memoizedProps.value;
        $e(Ks, l._currentValue), l._currentValue = d;
        break;
      case 13:
        if (l = i.memoizedState, l !== null)
          return l.dehydrated !== null ? ($e(Ye, Ye.current & 1), i.flags |= 128, null) : s & i.child.childLanes ? fh(t, i, s) : ($e(Ye, Ye.current & 1), t = Kn(t, i, s), t !== null ? t.sibling : null);
        $e(Ye, Ye.current & 1);
        break;
      case 19:
        if (l = (s & i.childLanes) !== 0, t.flags & 128) {
          if (l)
            return ph(t, i, s);
          i.flags |= 128;
        }
        if (d = i.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), $e(Ye, Ye.current), l)
          break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, sh(t, i, s);
    }
    return Kn(t, i, s);
  }
  var hh, Yu, mh, gh;
  hh = function(t, i) {
    for (var s = i.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6)
        t.appendChild(s.stateNode);
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
  }, Yu = function() {
  }, mh = function(t, i, s, l) {
    var d = t.memoizedProps;
    if (d !== l) {
      t = i.stateNode, $r(Cn.current);
      var h = null;
      switch (s) {
        case "input":
          d = ti(t, d), l = ti(t, l), h = [];
          break;
        case "select":
          d = b({}, d, { value: void 0 }), l = b({}, l, { value: void 0 }), h = [];
          break;
        case "textarea":
          d = de(t, d), l = de(t, l), h = [];
          break;
        default:
          typeof d.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Bs);
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
            F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (a.hasOwnProperty(F) ? h || (h = []) : (h = h || []).push(F, null));
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
              s || (h || (h = []), h.push(
                F,
                s
              )), s = P;
          else
            F === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, C = C ? C.__html : void 0, P != null && C !== P && (h = h || []).push(F, P)) : F === "children" ? typeof P != "string" && typeof P != "number" || (h = h || []).push(F, "" + P) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (a.hasOwnProperty(F) ? (P != null && F === "onScroll" && He("scroll", t), h || C === P || (h = [])) : (h = h || []).push(F, P));
      }
      s && (h = h || []).push("style", s);
      var F = h;
      (i.updateQueue = F) && (i.flags |= 4);
    }
  }, gh = function(t, i, s, l) {
    s !== l && (i.flags |= 4);
  };
  function Oo(t, i) {
    if (!qe)
      switch (t.tailMode) {
        case "hidden":
          i = t.tail;
          for (var s = null; i !== null; )
            i.alternate !== null && (s = i), i = i.sibling;
          s === null ? t.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = t.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), s = s.sibling;
          l === null ? i || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function bt(t) {
    var i = t.alternate !== null && t.alternate.child === t.child, s = 0, l = 0;
    if (i)
      for (var d = t.child; d !== null; )
        s |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = t, d = d.sibling;
    else
      for (d = t.child; d !== null; )
        s |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = t, d = d.sibling;
    return t.subtreeFlags |= l, t.childLanes = s, i;
  }
  function ux(t, i, s) {
    var l = i.pendingProps;
    switch (vu(i), i.tag) {
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
        return It(i.type) && $s(), bt(i), null;
      case 3:
        return l = i.stateNode, wi(), We(Ft), We(Et), Mu(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Gs(i) ? i.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, cn !== null && (ac(cn), cn = null))), Yu(t, i), bt(i), null;
      case 5:
        Ou(i);
        var d = $r(Eo.current);
        if (s = i.type, t !== null && i.stateNode != null)
          mh(t, i, s, l, d), t.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!l) {
            if (i.stateNode === null)
              throw Error(r(166));
            return bt(i), null;
          }
          if (t = $r(Cn.current), Gs(i)) {
            l = i.stateNode, s = i.type;
            var h = i.memoizedProps;
            switch (l[Tn] = i, l[_o] = h, t = (i.mode & 1) !== 0, s) {
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
                Yi(l, h), He("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!h.multiple }, He("invalid", l);
                break;
              case "textarea":
                je(l, h), He("invalid", l);
            }
            Be(s, h), d = null;
            for (var _ in h)
              if (h.hasOwnProperty(_)) {
                var C = h[_];
                _ === "children" ? typeof C == "string" ? l.textContent !== C && (h.suppressHydrationWarning !== !0 && Vs(l.textContent, C, t), d = ["children", C]) : typeof C == "number" && l.textContent !== "" + C && (h.suppressHydrationWarning !== !0 && Vs(
                  l.textContent,
                  C,
                  t
                ), d = ["children", "" + C]) : a.hasOwnProperty(_) && C != null && _ === "onScroll" && He("scroll", l);
              }
            switch (s) {
              case "input":
                ut(l), z(l, h, !0);
                break;
              case "textarea":
                ut(l), Nt(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (l.onclick = Bs);
            }
            l = d, i.updateQueue = l, l !== null && (i.flags |= 4);
          } else {
            _ = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = ni(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = _.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = _.createElement(s, { is: l.is }) : (t = _.createElement(s), s === "select" && (_ = t, l.multiple ? _.multiple = !0 : l.size && (_.size = l.size))) : t = _.createElementNS(t, s), t[Tn] = i, t[_o] = l, hh(t, i, !1, !1), i.stateNode = t;
            e: {
              switch (_ = vt(s, l), s) {
                case "dialog":
                  He("cancel", t), He("close", t), d = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  He("load", t), d = l;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < vo.length; d++)
                    He(vo[d], t);
                  d = l;
                  break;
                case "source":
                  He("error", t), d = l;
                  break;
                case "img":
                case "image":
                case "link":
                  He(
                    "error",
                    t
                  ), He("load", t), d = l;
                  break;
                case "details":
                  He("toggle", t), d = l;
                  break;
                case "input":
                  Yi(t, l), d = ti(t, l), He("invalid", t);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!l.multiple }, d = b({}, l, { value: void 0 }), He("invalid", t);
                  break;
                case "textarea":
                  je(t, l), d = de(t, l), He("invalid", t);
                  break;
                default:
                  d = l;
              }
              Be(s, d), C = d;
              for (h in C)
                if (C.hasOwnProperty(h)) {
                  var P = C[h];
                  h === "style" ? W(t, P) : h === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && ri(t, P)) : h === "children" ? typeof P == "string" ? (s !== "textarea" || P !== "") && Sn(t, P) : typeof P == "number" && Sn(t, "" + P) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (a.hasOwnProperty(h) ? P != null && h === "onScroll" && He("scroll", t) : P != null && L(t, h, P, _));
                }
              switch (s) {
                case "input":
                  ut(t), z(t, l, !1);
                  break;
                case "textarea":
                  ut(t), Nt(t);
                  break;
                case "option":
                  l.value != null && t.setAttribute("value", "" + Ae(l.value));
                  break;
                case "select":
                  t.multiple = !!l.multiple, h = l.value, h != null ? G(t, !!l.multiple, h, !1) : l.defaultValue != null && G(
                    t,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (t.onclick = Bs);
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
        if (t && i.stateNode != null)
          gh(t, i, t.memoizedProps, l);
        else {
          if (typeof l != "string" && i.stateNode === null)
            throw Error(r(166));
          if (s = $r(Eo.current), $r(Cn.current), Gs(i)) {
            if (l = i.stateNode, s = i.memoizedProps, l[Tn] = i, (h = l.nodeValue !== s) && (t = Wt, t !== null))
              switch (t.tag) {
                case 3:
                  Vs(l.nodeValue, s, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 && Vs(l.nodeValue, s, (t.mode & 1) !== 0);
              }
            h && (i.flags |= 4);
          } else
            l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[Tn] = i, i.stateNode = l;
        }
        return bt(i), null;
      case 13:
        if (We(Ye), l = i.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (qe && qt !== null && i.mode & 1 && !(i.flags & 128))
            vp(), gi(), i.flags |= 98560, h = !1;
          else if (h = Gs(i), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!h)
                throw Error(r(318));
              if (h = i.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(r(317));
              h[Tn] = i;
            } else
              gi(), !(i.flags & 128) && (i.memoizedState = null), i.flags |= 4;
            bt(i), h = !1;
          } else
            cn !== null && (ac(cn), cn = null), h = !0;
          if (!h)
            return i.flags & 65536 ? i : null;
        }
        return i.flags & 128 ? (i.lanes = s, i) : (l = l !== null, l !== (t !== null && t.memoizedState !== null) && l && (i.child.flags |= 8192, i.mode & 1 && (t === null || Ye.current & 1 ? ft === 0 && (ft = 3) : cc())), i.updateQueue !== null && (i.flags |= 4), bt(i), null);
      case 4:
        return wi(), Yu(t, i), t === null && xo(i.stateNode.containerInfo), bt(i), null;
      case 10:
        return Tu(i.type._context), bt(i), null;
      case 17:
        return It(i.type) && $s(), bt(i), null;
      case 19:
        if (We(Ye), h = i.memoizedState, h === null)
          return bt(i), null;
        if (l = (i.flags & 128) !== 0, _ = h.rendering, _ === null)
          if (l)
            Oo(h, !1);
          else {
            if (ft !== 0 || t !== null && t.flags & 128)
              for (t = i.child; t !== null; ) {
                if (_ = ea(t), _ !== null) {
                  for (i.flags |= 128, Oo(h, !1), l = _.updateQueue, l !== null && (i.updateQueue = l, i.flags |= 4), i.subtreeFlags = 0, l = s, s = i.child; s !== null; )
                    h = s, t = l, h.flags &= 14680066, _ = h.alternate, _ === null ? (h.childLanes = 0, h.lanes = t, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = _.childLanes, h.lanes = _.lanes, h.child = _.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = _.memoizedProps, h.memoizedState = _.memoizedState, h.updateQueue = _.updateQueue, h.type = _.type, t = _.dependencies, h.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), s = s.sibling;
                  return $e(Ye, Ye.current & 1 | 2), i.child;
                }
                t = t.sibling;
              }
            h.tail !== null && nt() > Ti && (i.flags |= 128, l = !0, Oo(h, !1), i.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = ea(_), t !== null) {
              if (i.flags |= 128, l = !0, s = t.updateQueue, s !== null && (i.updateQueue = s, i.flags |= 4), Oo(h, !0), h.tail === null && h.tailMode === "hidden" && !_.alternate && !qe)
                return bt(i), null;
            } else
              2 * nt() - h.renderingStartTime > Ti && s !== 1073741824 && (i.flags |= 128, l = !0, Oo(h, !1), i.lanes = 4194304);
          h.isBackwards ? (_.sibling = i.child, i.child = _) : (s = h.last, s !== null ? s.sibling = _ : i.child = _, h.last = _);
        }
        return h.tail !== null ? (i = h.tail, h.rendering = i, h.tail = i.sibling, h.renderingStartTime = nt(), i.sibling = null, s = Ye.current, $e(Ye, l ? s & 1 | 2 : s & 1), i) : (bt(i), null);
      case 22:
      case 23:
        return uc(), l = i.memoizedState !== null, t !== null && t.memoizedState !== null !== l && (i.flags |= 8192), l && i.mode & 1 ? Gt & 1073741824 && (bt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : bt(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function cx(t, i) {
    switch (vu(i), i.tag) {
      case 1:
        return It(i.type) && $s(), t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 3:
        return wi(), We(Ft), We(Et), Mu(), t = i.flags, t & 65536 && !(t & 128) ? (i.flags = t & -65537 | 128, i) : null;
      case 5:
        return Ou(i), null;
      case 13:
        if (We(Ye), t = i.memoizedState, t !== null && t.dehydrated !== null) {
          if (i.alternate === null)
            throw Error(r(340));
          gi();
        }
        return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 19:
        return We(Ye), null;
      case 4:
        return wi(), null;
      case 10:
        return Tu(i.type._context), null;
      case 22:
      case 23:
        return uc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var la = !1, Pt = !1, fx = typeof WeakSet == "function" ? WeakSet : Set, re = null;
  function Si(t, i) {
    var s = t.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (l) {
          et(t, i, l);
        }
      else
        s.current = null;
  }
  function Xu(t, i, s) {
    try {
      s();
    } catch (l) {
      et(t, i, l);
    }
  }
  var yh = !1;
  function dx(t, i) {
    if (uu = bs, t = Kd(), tu(t)) {
      if ("selectionStart" in t)
        var s = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          s = (s = t.ownerDocument) && s.defaultView || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var d = l.anchorOffset, h = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, h.nodeType;
            } catch {
              s = null;
              break e;
            }
            var _ = 0, C = -1, P = -1, F = 0, U = 0, q = t, $ = null;
            t:
              for (; ; ) {
                for (var ee; q !== s || d !== 0 && q.nodeType !== 3 || (C = _ + d), q !== h || l !== 0 && q.nodeType !== 3 || (P = _ + l), q.nodeType === 3 && (_ += q.nodeValue.length), (ee = q.firstChild) !== null; )
                  $ = q, q = ee;
                for (; ; ) {
                  if (q === t)
                    break t;
                  if ($ === s && ++F === d && (C = _), $ === h && ++U === l && (P = _), (ee = q.nextSibling) !== null)
                    break;
                  q = $, $ = q.parentNode;
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
    for (cu = { focusedElem: t, selectionRange: s }, bs = !1, re = i; re !== null; )
      if (i = re, t = i.child, (i.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = i, re = t;
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
                    var se = oe.memoizedProps, rt = oe.memoizedState, M = i.stateNode, R = M.getSnapshotBeforeUpdate(i.elementType === i.type ? se : fn(i.type, se), rt);
                    M.__reactInternalSnapshotBeforeUpdate = R;
                  }
                  break;
                case 3:
                  var D = i.stateNode.containerInfo;
                  D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (Q) {
            et(i, i.return, Q);
          }
          if (t = i.sibling, t !== null) {
            t.return = i.return, re = t;
            break;
          }
          re = i.return;
        }
    return oe = yh, yh = !1, oe;
  }
  function Lo(t, i, s) {
    var l = i.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var d = l = l.next;
      do {
        if ((d.tag & t) === t) {
          var h = d.destroy;
          d.destroy = void 0, h !== void 0 && Xu(i, s, h);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function ua(t, i) {
    if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
      var s = i = i.next;
      do {
        if ((s.tag & t) === t) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== i);
    }
  }
  function Ju(t) {
    var i = t.ref;
    if (i !== null) {
      var s = t.stateNode;
      switch (t.tag) {
        case 5:
          t = s;
          break;
        default:
          t = s;
      }
      typeof i == "function" ? i(t) : i.current = t;
    }
  }
  function vh(t) {
    var i = t.alternate;
    i !== null && (t.alternate = null, vh(i)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (i = t.stateNode, i !== null && (delete i[Tn], delete i[_o], delete i[hu], delete i[K1], delete i[Q1])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function xh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function wh(t) {
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || xh(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.flags & 2 || t.child === null || t.tag === 4)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2))
          return t.stateNode;
      }
  }
  function Zu(t, i, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, i ? s.nodeType === 8 ? s.parentNode.insertBefore(t, i) : s.insertBefore(t, i) : (s.nodeType === 8 ? (i = s.parentNode, i.insertBefore(t, s)) : (i = s, i.appendChild(t)), s = s._reactRootContainer, s != null || i.onclick !== null || (i.onclick = Bs));
    else if (l !== 4 && (t = t.child, t !== null))
      for (Zu(t, i, s), t = t.sibling; t !== null; )
        Zu(t, i, s), t = t.sibling;
  }
  function ec(t, i, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, i ? s.insertBefore(t, i) : s.appendChild(t);
    else if (l !== 4 && (t = t.child, t !== null))
      for (ec(t, i, s), t = t.sibling; t !== null; )
        ec(t, i, s), t = t.sibling;
  }
  var xt = null, dn = !1;
  function yr(t, i, s) {
    for (s = s.child; s !== null; )
      _h(t, i, s), s = s.sibling;
  }
  function _h(t, i, s) {
    if (kn && typeof kn.onCommitFiberUnmount == "function")
      try {
        kn.onCommitFiberUnmount(Ss, s);
      } catch {
      }
    switch (s.tag) {
      case 5:
        Pt || Si(s, i);
      case 6:
        var l = xt, d = dn;
        xt = null, yr(t, i, s), xt = l, dn = d, xt !== null && (dn ? (t = xt, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : xt.removeChild(s.stateNode));
        break;
      case 18:
        xt !== null && (dn ? (t = xt, s = s.stateNode, t.nodeType === 8 ? pu(t.parentNode, s) : t.nodeType === 1 && pu(t, s), uo(t)) : pu(xt, s.stateNode));
        break;
      case 4:
        l = xt, d = dn, xt = s.stateNode.containerInfo, dn = !0, yr(t, i, s), xt = l, dn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          d = l = l.next;
          do {
            var h = d, _ = h.destroy;
            h = h.tag, _ !== void 0 && (h & 2 || h & 4) && Xu(s, i, _), d = d.next;
          } while (d !== l);
        }
        yr(t, i, s);
        break;
      case 1:
        if (!Pt && (Si(s, i), l = s.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount();
          } catch (C) {
            et(s, i, C);
          }
        yr(t, i, s);
        break;
      case 21:
        yr(t, i, s);
        break;
      case 22:
        s.mode & 1 ? (Pt = (l = Pt) || s.memoizedState !== null, yr(t, i, s), Pt = l) : yr(t, i, s);
        break;
      default:
        yr(t, i, s);
    }
  }
  function Sh(t) {
    var i = t.updateQueue;
    if (i !== null) {
      t.updateQueue = null;
      var s = t.stateNode;
      s === null && (s = t.stateNode = new fx()), i.forEach(function(l) {
        var d = _x.bind(null, t, l);
        s.has(l) || (s.add(l), l.then(d, d));
      });
    }
  }
  function pn(t, i) {
    var s = i.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var d = s[l];
        try {
          var h = t, _ = i, C = _;
          e:
            for (; C !== null; ) {
              switch (C.tag) {
                case 5:
                  xt = C.stateNode, dn = !1;
                  break e;
                case 3:
                  xt = C.stateNode.containerInfo, dn = !0;
                  break e;
                case 4:
                  xt = C.stateNode.containerInfo, dn = !0;
                  break e;
              }
              C = C.return;
            }
          if (xt === null)
            throw Error(r(160));
          _h(h, _, d), xt = null, dn = !1;
          var P = d.alternate;
          P !== null && (P.return = null), d.return = null;
        } catch (F) {
          et(d, i, F);
        }
      }
    if (i.subtreeFlags & 12854)
      for (i = i.child; i !== null; )
        kh(i, t), i = i.sibling;
  }
  function kh(t, i) {
    var s = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(i, t), An(t), l & 4) {
          try {
            Lo(3, t, t.return), ua(3, t);
          } catch (se) {
            et(t, t.return, se);
          }
          try {
            Lo(5, t, t.return);
          } catch (se) {
            et(t, t.return, se);
          }
        }
        break;
      case 1:
        pn(i, t), An(t), l & 512 && s !== null && Si(s, s.return);
        break;
      case 5:
        if (pn(i, t), An(t), l & 512 && s !== null && Si(s, s.return), t.flags & 32) {
          var d = t.stateNode;
          try {
            Sn(d, "");
          } catch (se) {
            et(t, t.return, se);
          }
        }
        if (l & 4 && (d = t.stateNode, d != null)) {
          var h = t.memoizedProps, _ = s !== null ? s.memoizedProps : h, C = t.type, P = t.updateQueue;
          if (t.updateQueue = null, P !== null)
            try {
              C === "input" && h.type === "radio" && h.name != null && O(d, h), vt(C, _);
              var F = vt(C, h);
              for (_ = 0; _ < P.length; _ += 2) {
                var U = P[_], q = P[_ + 1];
                U === "style" ? W(d, q) : U === "dangerouslySetInnerHTML" ? ri(d, q) : U === "children" ? Sn(d, q) : L(d, U, q, F);
              }
              switch (C) {
                case "input":
                  j(d, h);
                  break;
                case "textarea":
                  ze(d, h);
                  break;
                case "select":
                  var $ = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!h.multiple;
                  var ee = h.value;
                  ee != null ? G(d, !!h.multiple, ee, !1) : $ !== !!h.multiple && (h.defaultValue != null ? G(
                    d,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : G(d, !!h.multiple, h.multiple ? [] : "", !1));
              }
              d[_o] = h;
            } catch (se) {
              et(t, t.return, se);
            }
        }
        break;
      case 6:
        if (pn(i, t), An(t), l & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          d = t.stateNode, h = t.memoizedProps;
          try {
            d.nodeValue = h;
          } catch (se) {
            et(t, t.return, se);
          }
        }
        break;
      case 3:
        if (pn(i, t), An(t), l & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            uo(i.containerInfo);
          } catch (se) {
            et(t, t.return, se);
          }
        break;
      case 4:
        pn(i, t), An(t);
        break;
      case 13:
        pn(i, t), An(t), d = t.child, d.flags & 8192 && (h = d.memoizedState !== null, d.stateNode.isHidden = h, !h || d.alternate !== null && d.alternate.memoizedState !== null || (rc = nt())), l & 4 && Sh(t);
        break;
      case 22:
        if (U = s !== null && s.memoizedState !== null, t.mode & 1 ? (Pt = (F = Pt) || U, pn(i, t), Pt = F) : pn(i, t), An(t), l & 8192) {
          if (F = t.memoizedState !== null, (t.stateNode.isHidden = F) && !U && t.mode & 1)
            for (re = t, U = t.child; U !== null; ) {
              for (q = re = U; re !== null; ) {
                switch ($ = re, ee = $.child, $.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Lo(4, $, $.return);
                    break;
                  case 1:
                    Si($, $.return);
                    var oe = $.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      l = $, s = $.return;
                      try {
                        i = l, oe.props = i.memoizedProps, oe.state = i.memoizedState, oe.componentWillUnmount();
                      } catch (se) {
                        et(l, s, se);
                      }
                    }
                    break;
                  case 5:
                    Si($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      Eh(q);
                      continue;
                    }
                }
                ee !== null ? (ee.return = $, re = ee) : Eh(q);
              }
              U = U.sibling;
            }
          e:
            for (U = null, q = t; ; ) {
              if (q.tag === 5) {
                if (U === null) {
                  U = q;
                  try {
                    d = q.stateNode, F ? (h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (C = q.stateNode, P = q.memoizedProps.style, _ = P != null && P.hasOwnProperty("display") ? P.display : null, C.style.display = ys("display", _));
                  } catch (se) {
                    et(t, t.return, se);
                  }
                }
              } else if (q.tag === 6) {
                if (U === null)
                  try {
                    q.stateNode.nodeValue = F ? "" : q.memoizedProps;
                  } catch (se) {
                    et(t, t.return, se);
                  }
              } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === t) && q.child !== null) {
                q.child.return = q, q = q.child;
                continue;
              }
              if (q === t)
                break e;
              for (; q.sibling === null; ) {
                if (q.return === null || q.return === t)
                  break e;
                U === q && (U = null), q = q.return;
              }
              U === q && (U = null), q.sibling.return = q.return, q = q.sibling;
            }
        }
        break;
      case 19:
        pn(i, t), An(t), l & 4 && Sh(t);
        break;
      case 21:
        break;
      default:
        pn(
          i,
          t
        ), An(t);
    }
  }
  function An(t) {
    var i = t.flags;
    if (i & 2) {
      try {
        e: {
          for (var s = t.return; s !== null; ) {
            if (xh(s)) {
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
            var h = wh(t);
            ec(t, h, d);
            break;
          case 3:
          case 4:
            var _ = l.stateNode.containerInfo, C = wh(t);
            Zu(t, C, _);
            break;
          default:
            throw Error(r(161));
        }
      } catch (P) {
        et(t, t.return, P);
      }
      t.flags &= -3;
    }
    i & 4096 && (t.flags &= -4097);
  }
  function px(t, i, s) {
    re = t, Th(t);
  }
  function Th(t, i, s) {
    for (var l = (t.mode & 1) !== 0; re !== null; ) {
      var d = re, h = d.child;
      if (d.tag === 22 && l) {
        var _ = d.memoizedState !== null || la;
        if (!_) {
          var C = d.alternate, P = C !== null && C.memoizedState !== null || Pt;
          C = la;
          var F = Pt;
          if (la = _, (Pt = P) && !F)
            for (re = d; re !== null; )
              _ = re, P = _.child, _.tag === 22 && _.memoizedState !== null ? Ah(d) : P !== null ? (P.return = _, re = P) : Ah(d);
          for (; h !== null; )
            re = h, Th(h), h = h.sibling;
          re = d, la = C, Pt = F;
        }
        Ch(t);
      } else
        d.subtreeFlags & 8772 && h !== null ? (h.return = d, re = h) : Ch(t);
    }
  }
  function Ch(t) {
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
                Pt || ua(5, i);
                break;
              case 1:
                var l = i.stateNode;
                if (i.flags & 4 && !Pt)
                  if (s === null)
                    l.componentDidMount();
                  else {
                    var d = i.elementType === i.type ? s.memoizedProps : fn(i.type, s.memoizedProps);
                    l.componentDidUpdate(d, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = i.updateQueue;
                h !== null && Sp(i, h, l);
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
                  Sp(i, _, s);
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
                    var U = F.memoizedState;
                    if (U !== null) {
                      var q = U.dehydrated;
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
          Pt || i.flags & 512 && Ju(i);
        } catch ($) {
          et(i, i.return, $);
        }
      }
      if (i === t) {
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
  function Eh(t) {
    for (; re !== null; ) {
      var i = re;
      if (i === t) {
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
  function Ah(t) {
    for (; re !== null; ) {
      var i = re;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var s = i.return;
            try {
              ua(4, i);
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
            var h = i.return;
            try {
              Ju(i);
            } catch (P) {
              et(i, h, P);
            }
            break;
          case 5:
            var _ = i.return;
            try {
              Ju(i);
            } catch (P) {
              et(i, _, P);
            }
        }
      } catch (P) {
        et(i, i.return, P);
      }
      if (i === t) {
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
  var hx = Math.ceil, ca = V.ReactCurrentDispatcher, tc = V.ReactCurrentOwner, en = V.ReactCurrentBatchConfig, Me = 0, gt = null, it = null, wt = 0, Gt = 0, ki = dr(0), ft = 0, Mo = null, Hr = 0, fa = 0, nc = 0, Do = null, Vt = null, rc = 0, Ti = 1 / 0, Qn = null, da = !1, ic = null, vr = null, pa = !1, xr = null, ha = 0, No = 0, oc = null, ma = -1, ga = 0;
  function Lt() {
    return Me & 6 ? nt() : ma !== -1 ? ma : ma = nt();
  }
  function wr(t) {
    return t.mode & 1 ? Me & 2 && wt !== 0 ? wt & -wt : X1.transition !== null ? (ga === 0 && (ga = xd()), ga) : (t = Ve, t !== 0 || (t = window.event, t = t === void 0 ? 16 : bd(t.type)), t) : 1;
  }
  function hn(t, i, s, l) {
    if (50 < No)
      throw No = 0, oc = null, Error(r(185));
    io(t, s, l), (!(Me & 2) || t !== gt) && (t === gt && (!(Me & 2) && (fa |= s), ft === 4 && _r(t, wt)), Bt(t, l), s === 1 && Me === 0 && !(i.mode & 1) && (Ti = nt() + 500, Hs && hr()));
  }
  function Bt(t, i) {
    var s = t.callbackNode;
    Xv(t, i);
    var l = Cs(t, t === gt ? wt : 0);
    if (l === 0)
      s !== null && gd(s), t.callbackNode = null, t.callbackPriority = 0;
    else if (i = l & -l, t.callbackPriority !== i) {
      if (s != null && gd(s), i === 1)
        t.tag === 0 ? Y1(Ph.bind(null, t)) : pp(Ph.bind(null, t)), q1(function() {
          !(Me & 6) && hr();
        }), s = null;
      else {
        switch (wd(l)) {
          case 1:
            s = jl;
            break;
          case 4:
            s = yd;
            break;
          case 16:
            s = _s;
            break;
          case 536870912:
            s = vd;
            break;
          default:
            s = _s;
        }
        s = Ih(s, bh.bind(null, t));
      }
      t.callbackPriority = i, t.callbackNode = s;
    }
  }
  function bh(t, i) {
    if (ma = -1, ga = 0, Me & 6)
      throw Error(r(327));
    var s = t.callbackNode;
    if (Ci() && t.callbackNode !== s)
      return null;
    var l = Cs(t, t === gt ? wt : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & t.expiredLanes || i)
      i = ya(t, l);
    else {
      i = l;
      var d = Me;
      Me |= 2;
      var h = Oh();
      (gt !== t || wt !== i) && (Qn = null, Ti = nt() + 500, qr(t, i));
      do
        try {
          yx();
          break;
        } catch (C) {
          Rh(t, C);
        }
      while (1);
      ku(), ca.current = h, Me = d, it !== null ? i = 0 : (gt = null, wt = 0, i = ft);
    }
    if (i !== 0) {
      if (i === 2 && (d = Vl(t), d !== 0 && (l = d, i = sc(t, d))), i === 1)
        throw s = Mo, qr(t, 0), _r(t, l), Bt(t, nt()), s;
      if (i === 6)
        _r(t, l);
      else {
        if (d = t.current.alternate, !(l & 30) && !mx(d) && (i = ya(t, l), i === 2 && (h = Vl(t), h !== 0 && (l = h, i = sc(t, h))), i === 1))
          throw s = Mo, qr(t, 0), _r(t, l), Bt(t, nt()), s;
        switch (t.finishedWork = d, t.finishedLanes = l, i) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Gr(t, Vt, Qn);
            break;
          case 3:
            if (_r(t, l), (l & 130023424) === l && (i = rc + 500 - nt(), 10 < i)) {
              if (Cs(t, 0) !== 0)
                break;
              if (d = t.suspendedLanes, (d & l) !== l) {
                Lt(), t.pingedLanes |= t.suspendedLanes & d;
                break;
              }
              t.timeoutHandle = du(Gr.bind(null, t, Vt, Qn), i);
              break;
            }
            Gr(t, Vt, Qn);
            break;
          case 4:
            if (_r(t, l), (l & 4194240) === l)
              break;
            for (i = t.eventTimes, d = -1; 0 < l; ) {
              var _ = 31 - ln(l);
              h = 1 << _, _ = i[_], _ > d && (d = _), l &= ~h;
            }
            if (l = d, l = nt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * hx(l / 1960)) - l, 10 < l) {
              t.timeoutHandle = du(Gr.bind(null, t, Vt, Qn), l);
              break;
            }
            Gr(t, Vt, Qn);
            break;
          case 5:
            Gr(t, Vt, Qn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Bt(t, nt()), t.callbackNode === s ? bh.bind(null, t) : null;
  }
  function sc(t, i) {
    var s = Do;
    return t.current.memoizedState.isDehydrated && (qr(t, i).flags |= 256), t = ya(t, i), t !== 2 && (i = Vt, Vt = s, i !== null && ac(i)), t;
  }
  function ac(t) {
    Vt === null ? Vt = t : Vt.push.apply(Vt, t);
  }
  function mx(t) {
    for (var i = t; ; ) {
      if (i.flags & 16384) {
        var s = i.updateQueue;
        if (s !== null && (s = s.stores, s !== null))
          for (var l = 0; l < s.length; l++) {
            var d = s[l], h = d.getSnapshot;
            d = d.value;
            try {
              if (!un(h(), d))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (s = i.child, i.subtreeFlags & 16384 && s !== null)
        s.return = i, i = s;
      else {
        if (i === t)
          break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function _r(t, i) {
    for (i &= ~nc, i &= ~fa, t.suspendedLanes |= i, t.pingedLanes &= ~i, t = t.expirationTimes; 0 < i; ) {
      var s = 31 - ln(i), l = 1 << s;
      t[s] = -1, i &= ~l;
    }
  }
  function Ph(t) {
    if (Me & 6)
      throw Error(r(327));
    Ci();
    var i = Cs(t, 0);
    if (!(i & 1))
      return Bt(t, nt()), null;
    var s = ya(t, i);
    if (t.tag !== 0 && s === 2) {
      var l = Vl(t);
      l !== 0 && (i = l, s = sc(t, l));
    }
    if (s === 1)
      throw s = Mo, qr(t, 0), _r(t, i), Bt(t, nt()), s;
    if (s === 6)
      throw Error(r(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = i, Gr(t, Vt, Qn), Bt(t, nt()), null;
  }
  function lc(t, i) {
    var s = Me;
    Me |= 1;
    try {
      return t(i);
    } finally {
      Me = s, Me === 0 && (Ti = nt() + 500, Hs && hr());
    }
  }
  function Wr(t) {
    xr !== null && xr.tag === 0 && !(Me & 6) && Ci();
    var i = Me;
    Me |= 1;
    var s = en.transition, l = Ve;
    try {
      if (en.transition = null, Ve = 1, t)
        return t();
    } finally {
      Ve = l, en.transition = s, Me = i, !(Me & 6) && hr();
    }
  }
  function uc() {
    Gt = ki.current, We(ki);
  }
  function qr(t, i) {
    t.finishedWork = null, t.finishedLanes = 0;
    var s = t.timeoutHandle;
    if (s !== -1 && (t.timeoutHandle = -1, W1(s)), it !== null)
      for (s = it.return; s !== null; ) {
        var l = s;
        switch (vu(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && $s();
            break;
          case 3:
            wi(), We(Ft), We(Et), Mu();
            break;
          case 5:
            Ou(l);
            break;
          case 4:
            wi();
            break;
          case 13:
            We(Ye);
            break;
          case 19:
            We(Ye);
            break;
          case 10:
            Tu(l.type._context);
            break;
          case 22:
          case 23:
            uc();
        }
        s = s.return;
      }
    if (gt = t, it = t = Sr(t.current, null), wt = Gt = i, ft = 0, Mo = null, nc = fa = Hr = 0, Vt = Do = null, zr !== null) {
      for (i = 0; i < zr.length; i++)
        if (s = zr[i], l = s.interleaved, l !== null) {
          s.interleaved = null;
          var d = l.next, h = s.pending;
          if (h !== null) {
            var _ = h.next;
            h.next = d, l.next = _;
          }
          s.pending = l;
        }
      zr = null;
    }
    return t;
  }
  function Rh(t, i) {
    do {
      var s = it;
      try {
        if (ku(), ta.current = oa, na) {
          for (var l = Xe.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), l = l.next;
          }
          na = !1;
        }
        if (Ur = 0, mt = ct = Xe = null, Ao = !1, bo = 0, tc.current = null, s === null || s.return === null) {
          ft = 1, Mo = i, it = null;
          break;
        }
        e: {
          var h = t, _ = s.return, C = s, P = i;
          if (i = wt, C.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var F = P, U = C, q = U.tag;
            if (!(U.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var $ = U.alternate;
              $ ? (U.updateQueue = $.updateQueue, U.memoizedState = $.memoizedState, U.lanes = $.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var ee = th(_);
            if (ee !== null) {
              ee.flags &= -257, nh(ee, _, C, h, i), ee.mode & 1 && eh(h, F, i), i = ee, P = F;
              var oe = i.updateQueue;
              if (oe === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(P), i.updateQueue = se;
              } else
                oe.add(P);
              break e;
            } else {
              if (!(i & 1)) {
                eh(h, F, i), cc();
                break e;
              }
              P = Error(r(426));
            }
          } else if (qe && C.mode & 1) {
            var rt = th(_);
            if (rt !== null) {
              !(rt.flags & 65536) && (rt.flags |= 256), nh(rt, _, C, h, i), _u(_i(P, C));
              break e;
            }
          }
          h = P = _i(P, C), ft !== 4 && (ft = 2), Do === null ? Do = [h] : Do.push(h), h = _;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, i &= -i, h.lanes |= i;
                var M = Jp(h, P, i);
                _p(h, M);
                break e;
              case 1:
                C = P;
                var R = h.type, D = h.stateNode;
                if (!(h.flags & 128) && (typeof R.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (vr === null || !vr.has(D)))) {
                  h.flags |= 65536, i &= -i, h.lanes |= i;
                  var Q = Zp(h, C, i);
                  _p(h, Q);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Mh(s);
      } catch (ce) {
        i = ce, it === s && s !== null && (it = s = s.return);
        continue;
      }
      break;
    } while (1);
  }
  function Oh() {
    var t = ca.current;
    return ca.current = oa, t === null ? oa : t;
  }
  function cc() {
    (ft === 0 || ft === 3 || ft === 2) && (ft = 4), gt === null || !(Hr & 268435455) && !(fa & 268435455) || _r(gt, wt);
  }
  function ya(t, i) {
    var s = Me;
    Me |= 2;
    var l = Oh();
    (gt !== t || wt !== i) && (Qn = null, qr(t, i));
    do
      try {
        gx();
        break;
      } catch (d) {
        Rh(t, d);
      }
    while (1);
    if (ku(), Me = s, ca.current = l, it !== null)
      throw Error(r(261));
    return gt = null, wt = 0, ft;
  }
  function gx() {
    for (; it !== null; )
      Lh(it);
  }
  function yx() {
    for (; it !== null && !$v(); )
      Lh(it);
  }
  function Lh(t) {
    var i = Fh(t.alternate, t, Gt);
    t.memoizedProps = t.pendingProps, i === null ? Mh(t) : it = i, tc.current = null;
  }
  function Mh(t) {
    var i = t;
    do {
      var s = i.alternate;
      if (t = i.return, i.flags & 32768) {
        if (s = cx(s, i), s !== null) {
          s.flags &= 32767, it = s;
          return;
        }
        if (t !== null)
          t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          ft = 6, it = null;
          return;
        }
      } else if (s = ux(s, i, Gt), s !== null) {
        it = s;
        return;
      }
      if (i = i.sibling, i !== null) {
        it = i;
        return;
      }
      it = i = t;
    } while (i !== null);
    ft === 0 && (ft = 5);
  }
  function Gr(t, i, s) {
    var l = Ve, d = en.transition;
    try {
      en.transition = null, Ve = 1, vx(t, i, s, l);
    } finally {
      en.transition = d, Ve = l;
    }
    return null;
  }
  function vx(t, i, s, l) {
    do
      Ci();
    while (xr !== null);
    if (Me & 6)
      throw Error(r(327));
    s = t.finishedWork;
    var d = t.finishedLanes;
    if (s === null)
      return null;
    if (t.finishedWork = null, t.finishedLanes = 0, s === t.current)
      throw Error(r(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var h = s.lanes | s.childLanes;
    if (Jv(t, h), t === gt && (it = gt = null, wt = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || pa || (pa = !0, Ih(_s, function() {
      return Ci(), null;
    })), h = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || h) {
      h = en.transition, en.transition = null;
      var _ = Ve;
      Ve = 1;
      var C = Me;
      Me |= 4, tc.current = null, dx(t, s), kh(s, t), j1(cu), bs = !!uu, cu = uu = null, t.current = s, px(s), Uv(), Me = C, Ve = _, en.transition = h;
    } else
      t.current = s;
    if (pa && (pa = !1, xr = t, ha = d), h = t.pendingLanes, h === 0 && (vr = null), qv(s.stateNode), Bt(t, nt()), i !== null)
      for (l = t.onRecoverableError, s = 0; s < i.length; s++)
        d = i[s], l(d.value, { componentStack: d.stack, digest: d.digest });
    if (da)
      throw da = !1, t = ic, ic = null, t;
    return ha & 1 && t.tag !== 0 && Ci(), h = t.pendingLanes, h & 1 ? t === oc ? No++ : (No = 0, oc = t) : No = 0, hr(), null;
  }
  function Ci() {
    if (xr !== null) {
      var t = wd(ha), i = en.transition, s = Ve;
      try {
        if (en.transition = null, Ve = 16 > t ? 16 : t, xr === null)
          var l = !1;
        else {
          if (t = xr, xr = null, ha = 0, Me & 6)
            throw Error(r(331));
          var d = Me;
          for (Me |= 4, re = t.current; re !== null; ) {
            var h = re, _ = h.child;
            if (re.flags & 16) {
              var C = h.deletions;
              if (C !== null) {
                for (var P = 0; P < C.length; P++) {
                  var F = C[P];
                  for (re = F; re !== null; ) {
                    var U = re;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lo(8, U, h);
                    }
                    var q = U.child;
                    if (q !== null)
                      q.return = U, re = q;
                    else
                      for (; re !== null; ) {
                        U = re;
                        var $ = U.sibling, ee = U.return;
                        if (vh(U), U === F) {
                          re = null;
                          break;
                        }
                        if ($ !== null) {
                          $.return = ee, re = $;
                          break;
                        }
                        re = ee;
                      }
                  }
                }
                var oe = h.alternate;
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
                re = h;
              }
            }
            if (h.subtreeFlags & 2064 && _ !== null)
              _.return = h, re = _;
            else
              e:
                for (; re !== null; ) {
                  if (h = re, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lo(9, h, h.return);
                    }
                  var M = h.sibling;
                  if (M !== null) {
                    M.return = h.return, re = M;
                    break e;
                  }
                  re = h.return;
                }
          }
          var R = t.current;
          for (re = R; re !== null; ) {
            _ = re;
            var D = _.child;
            if (_.subtreeFlags & 2064 && D !== null)
              D.return = _, re = D;
            else
              e:
                for (_ = R; re !== null; ) {
                  if (C = re, C.flags & 2048)
                    try {
                      switch (C.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ua(9, C);
                      }
                    } catch (ce) {
                      et(C, C.return, ce);
                    }
                  if (C === _) {
                    re = null;
                    break e;
                  }
                  var Q = C.sibling;
                  if (Q !== null) {
                    Q.return = C.return, re = Q;
                    break e;
                  }
                  re = C.return;
                }
          }
          if (Me = d, hr(), kn && typeof kn.onPostCommitFiberRoot == "function")
            try {
              kn.onPostCommitFiberRoot(Ss, t);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        Ve = s, en.transition = i;
      }
    }
    return !1;
  }
  function Dh(t, i, s) {
    i = _i(s, i), i = Jp(t, i, 1), t = gr(t, i, 1), i = Lt(), t !== null && (io(t, 1, i), Bt(t, i));
  }
  function et(t, i, s) {
    if (t.tag === 3)
      Dh(t, t, s);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          Dh(i, t, s);
          break;
        } else if (i.tag === 1) {
          var l = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (vr === null || !vr.has(l))) {
            t = _i(s, t), t = Zp(i, t, 1), i = gr(i, t, 1), t = Lt(), i !== null && (io(i, 1, t), Bt(i, t));
            break;
          }
        }
        i = i.return;
      }
  }
  function xx(t, i, s) {
    var l = t.pingCache;
    l !== null && l.delete(i), i = Lt(), t.pingedLanes |= t.suspendedLanes & s, gt === t && (wt & s) === s && (ft === 4 || ft === 3 && (wt & 130023424) === wt && 500 > nt() - rc ? qr(t, 0) : nc |= s), Bt(t, i);
  }
  function Nh(t, i) {
    i === 0 && (t.mode & 1 ? (i = Ts, Ts <<= 1, !(Ts & 130023424) && (Ts = 4194304)) : i = 1);
    var s = Lt();
    t = qn(t, i), t !== null && (io(t, i, s), Bt(t, s));
  }
  function wx(t) {
    var i = t.memoizedState, s = 0;
    i !== null && (s = i.retryLane), Nh(t, s);
  }
  function _x(t, i) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, d = t.memoizedState;
        d !== null && (s = d.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(i), Nh(t, s);
  }
  var Fh;
  Fh = function(t, i, s) {
    if (t !== null)
      if (t.memoizedProps !== i.pendingProps || Ft.current)
        jt = !0;
      else {
        if (!(t.lanes & s) && !(i.flags & 128))
          return jt = !1, lx(t, i, s);
        jt = !!(t.flags & 131072);
      }
    else
      jt = !1, qe && i.flags & 1048576 && hp(i, qs, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var l = i.type;
        aa(t, i), t = i.pendingProps;
        var d = pi(i, Et.current);
        vi(i, s), d = Fu(null, i, l, t, d, s);
        var h = Iu();
        return i.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, It(l) ? (h = !0, Us(i)) : h = !1, i.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Au(i), d.updater = Js, i.stateNode = d, d._reactInternals = i, Pu(i, l, t, s), i = Wu(null, i, l, !0, h, s)) : (i.tag = 0, qe && h && yu(i), Ot(null, i, d, s), i = i.child), i;
      case 16:
        l = i.elementType;
        e: {
          switch (aa(t, i), t = i.pendingProps, d = l._init, l = d(l._payload), i.type = l, d = i.tag = kx(l), t = fn(l, t), d) {
            case 0:
              i = Hu(null, i, l, t, s);
              break e;
            case 1:
              i = lh(null, i, l, t, s);
              break e;
            case 11:
              i = rh(null, i, l, t, s);
              break e;
            case 14:
              i = ih(null, i, l, fn(l.type, t), s);
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
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), Hu(t, i, l, d, s);
      case 1:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), lh(t, i, l, d, s);
      case 3:
        e: {
          if (uh(i), t === null)
            throw Error(r(387));
          l = i.pendingProps, h = i.memoizedState, d = h.element, wp(t, i), Xs(i, l, null, s);
          var _ = i.memoizedState;
          if (l = _.element, h.isDehydrated)
            if (h = { element: l, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, i.updateQueue.baseState = h, i.memoizedState = h, i.flags & 256) {
              d = _i(Error(r(423)), i), i = ch(t, i, l, s, d);
              break e;
            } else if (l !== d) {
              d = _i(Error(r(424)), i), i = ch(t, i, l, s, d);
              break e;
            } else
              for (qt = fr(i.stateNode.containerInfo.firstChild), Wt = i, qe = !0, cn = null, s = Pp(i, null, l, s), i.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (gi(), l === d) {
              i = Kn(t, i, s);
              break e;
            }
            Ot(t, i, l, s);
          }
          i = i.child;
        }
        return i;
      case 5:
        return Rp(i), t === null && wu(i), l = i.type, d = i.pendingProps, h = t !== null ? t.memoizedProps : null, _ = d.children, fu(l, d) ? _ = null : h !== null && fu(l, h) && (i.flags |= 32), ah(t, i), Ot(t, i, _, s), i.child;
      case 6:
        return t === null && wu(i), null;
      case 13:
        return fh(t, i, s);
      case 4:
        return Ru(i, i.stateNode.containerInfo), l = i.pendingProps, t === null ? i.child = xi(i, null, l, s) : Ot(t, i, l, s), i.child;
      case 11:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), rh(t, i, l, d, s);
      case 7:
        return Ot(t, i, i.pendingProps, s), i.child;
      case 8:
        return Ot(t, i, i.pendingProps.children, s), i.child;
      case 12:
        return Ot(t, i, i.pendingProps.children, s), i.child;
      case 10:
        e: {
          if (l = i.type._context, d = i.pendingProps, h = i.memoizedProps, _ = d.value, $e(Ks, l._currentValue), l._currentValue = _, h !== null)
            if (un(h.value, _)) {
              if (h.children === d.children && !Ft.current) {
                i = Kn(t, i, s);
                break e;
              }
            } else
              for (h = i.child, h !== null && (h.return = i); h !== null; ) {
                var C = h.dependencies;
                if (C !== null) {
                  _ = h.child;
                  for (var P = C.firstContext; P !== null; ) {
                    if (P.context === l) {
                      if (h.tag === 1) {
                        P = Gn(-1, s & -s), P.tag = 2;
                        var F = h.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var U = F.pending;
                          U === null ? P.next = P : (P.next = U.next, U.next = P), F.pending = P;
                        }
                      }
                      h.lanes |= s, P = h.alternate, P !== null && (P.lanes |= s), Cu(
                        h.return,
                        s,
                        i
                      ), C.lanes |= s;
                      break;
                    }
                    P = P.next;
                  }
                } else if (h.tag === 10)
                  _ = h.type === i.type ? null : h.child;
                else if (h.tag === 18) {
                  if (_ = h.return, _ === null)
                    throw Error(r(341));
                  _.lanes |= s, C = _.alternate, C !== null && (C.lanes |= s), Cu(_, s, i), _ = h.sibling;
                } else
                  _ = h.child;
                if (_ !== null)
                  _.return = h;
                else
                  for (_ = h; _ !== null; ) {
                    if (_ === i) {
                      _ = null;
                      break;
                    }
                    if (h = _.sibling, h !== null) {
                      h.return = _.return, _ = h;
                      break;
                    }
                    _ = _.return;
                  }
                h = _;
              }
          Ot(t, i, d.children, s), i = i.child;
        }
        return i;
      case 9:
        return d = i.type, l = i.pendingProps.children, vi(i, s), d = Jt(d), l = l(d), i.flags |= 1, Ot(t, i, l, s), i.child;
      case 14:
        return l = i.type, d = fn(l, i.pendingProps), d = fn(l.type, d), ih(t, i, l, d, s);
      case 15:
        return oh(t, i, i.type, i.pendingProps, s);
      case 17:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), aa(t, i), i.tag = 1, It(l) ? (t = !0, Us(i)) : t = !1, vi(i, s), Cp(i, l, d), Pu(i, l, d, s), Wu(null, i, l, !0, t, s);
      case 19:
        return ph(t, i, s);
      case 22:
        return sh(t, i, s);
    }
    throw Error(r(156, i.tag));
  };
  function Ih(t, i) {
    return md(t, i);
  }
  function Sx(t, i, s, l) {
    this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(t, i, s, l) {
    return new Sx(t, i, s, l);
  }
  function fc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function kx(t) {
    if (typeof t == "function")
      return fc(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === pe)
        return 11;
      if (t === ge)
        return 14;
    }
    return 2;
  }
  function Sr(t, i) {
    var s = t.alternate;
    return s === null ? (s = tn(t.tag, i, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = i, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, i = t.dependencies, s.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s;
  }
  function va(t, i, s, l, d, h) {
    var _ = 2;
    if (l = t, typeof t == "function")
      fc(t) && (_ = 1);
    else if (typeof t == "string")
      _ = 5;
    else
      e:
        switch (t) {
          case K:
            return Kr(s.children, d, h, i);
          case te:
            _ = 8, d |= 8;
            break;
          case Z:
            return t = tn(12, s, i, d | 2), t.elementType = Z, t.lanes = h, t;
          case le:
            return t = tn(13, s, i, d), t.elementType = le, t.lanes = h, t;
          case ae:
            return t = tn(19, s, i, d), t.elementType = ae, t.lanes = h, t;
          case Se:
            return xa(s, d, h, i);
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Ce:
                  _ = 10;
                  break e;
                case Le:
                  _ = 9;
                  break e;
                case pe:
                  _ = 11;
                  break e;
                case ge:
                  _ = 14;
                  break e;
                case Ee:
                  _ = 16, l = null;
                  break e;
              }
            throw Error(r(130, t == null ? t : typeof t, ""));
        }
    return i = tn(_, s, i, d), i.elementType = t, i.type = l, i.lanes = h, i;
  }
  function Kr(t, i, s, l) {
    return t = tn(7, t, l, i), t.lanes = s, t;
  }
  function xa(t, i, s, l) {
    return t = tn(22, t, l, i), t.elementType = Se, t.lanes = s, t.stateNode = { isHidden: !1 }, t;
  }
  function dc(t, i, s) {
    return t = tn(6, t, null, i), t.lanes = s, t;
  }
  function pc(t, i, s) {
    return i = tn(4, t.children !== null ? t.children : [], t.key, i), i.lanes = s, i.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, i;
  }
  function Tx(t, i, s, l, d) {
    this.tag = i, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function hc(t, i, s, l, d, h, _, C, P) {
    return t = new Tx(t, i, s, C, P), i === 1 ? (i = 1, h === !0 && (i |= 8)) : i = 0, h = tn(3, null, null, i), t.current = h, h.stateNode = t, h.memoizedState = { element: l, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Au(h), t;
  }
  function Cx(t, i, s) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: l == null ? null : "" + l, children: t, containerInfo: i, implementation: s };
  }
  function jh(t) {
    if (!t)
      return pr;
    t = t._reactInternals;
    e: {
      if (Fr(t) !== t || t.tag !== 1)
        throw Error(r(170));
      var i = t;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break e;
          case 1:
            if (It(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(r(171));
    }
    if (t.tag === 1) {
      var s = t.type;
      if (It(s))
        return fp(t, s, i);
    }
    return i;
  }
  function Vh(t, i, s, l, d, h, _, C, P) {
    return t = hc(s, l, !0, t, d, h, _, C, P), t.context = jh(null), s = t.current, l = Lt(), d = wr(s), h = Gn(l, d), h.callback = i ?? null, gr(s, h, d), t.current.lanes = d, io(t, d, l), Bt(t, l), t;
  }
  function wa(t, i, s, l) {
    var d = i.current, h = Lt(), _ = wr(d);
    return s = jh(s), i.context === null ? i.context = s : i.pendingContext = s, i = Gn(h, _), i.payload = { element: t }, l = l === void 0 ? null : l, l !== null && (i.callback = l), t = gr(d, i, _), t !== null && (hn(t, d, _, h), Ys(t, d, _)), _;
  }
  function _a(t) {
    if (t = t.current, !t.child)
      return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Bh(t, i) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < i ? s : i;
    }
  }
  function mc(t, i) {
    Bh(t, i), (t = t.alternate) && Bh(t, i);
  }
  function Ex() {
    return null;
  }
  var zh = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function gc(t) {
    this._internalRoot = t;
  }
  Sa.prototype.render = gc.prototype.render = function(t) {
    var i = this._internalRoot;
    if (i === null)
      throw Error(r(409));
    wa(t, i, null, null);
  }, Sa.prototype.unmount = gc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var i = t.containerInfo;
      Wr(function() {
        wa(null, t, null, null);
      }), i[$n] = null;
    }
  };
  function Sa(t) {
    this._internalRoot = t;
  }
  Sa.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var i = kd();
      t = { blockedOn: null, target: t, priority: i };
      for (var s = 0; s < lr.length && i !== 0 && i < lr[s].priority; s++)
        ;
      lr.splice(s, 0, t), s === 0 && Ed(t);
    }
  };
  function yc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function ka(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function $h() {
  }
  function Ax(t, i, s, l, d) {
    if (d) {
      if (typeof l == "function") {
        var h = l;
        l = function() {
          var F = _a(_);
          h.call(F);
        };
      }
      var _ = Vh(i, l, t, 0, null, !1, !1, "", $h);
      return t._reactRootContainer = _, t[$n] = _.current, xo(t.nodeType === 8 ? t.parentNode : t), Wr(), _;
    }
    for (; d = t.lastChild; )
      t.removeChild(d);
    if (typeof l == "function") {
      var C = l;
      l = function() {
        var F = _a(P);
        C.call(F);
      };
    }
    var P = hc(t, 0, !1, null, null, !1, !1, "", $h);
    return t._reactRootContainer = P, t[$n] = P.current, xo(t.nodeType === 8 ? t.parentNode : t), Wr(function() {
      wa(i, P, s, l);
    }), P;
  }
  function Ta(t, i, s, l, d) {
    var h = s._reactRootContainer;
    if (h) {
      var _ = h;
      if (typeof d == "function") {
        var C = d;
        d = function() {
          var P = _a(_);
          C.call(P);
        };
      }
      wa(i, _, t, d);
    } else
      _ = Ax(s, i, t, d, l);
    return _a(_);
  }
  _d = function(t) {
    switch (t.tag) {
      case 3:
        var i = t.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var s = ro(i.pendingLanes);
          s !== 0 && (zl(i, s | 1), Bt(i, nt()), !(Me & 6) && (Ti = nt() + 500, hr()));
        }
        break;
      case 13:
        Wr(function() {
          var l = qn(t, 1);
          if (l !== null) {
            var d = Lt();
            hn(l, t, 1, d);
          }
        }), mc(t, 1);
    }
  }, $l = function(t) {
    if (t.tag === 13) {
      var i = qn(t, 134217728);
      if (i !== null) {
        var s = Lt();
        hn(i, t, 134217728, s);
      }
      mc(t, 134217728);
    }
  }, Sd = function(t) {
    if (t.tag === 13) {
      var i = wr(t), s = qn(t, i);
      if (s !== null) {
        var l = Lt();
        hn(s, t, i, l);
      }
      mc(t, i);
    }
  }, kd = function() {
    return Ve;
  }, Td = function(t, i) {
    var s = Ve;
    try {
      return Ve = t, i();
    } finally {
      Ve = s;
    }
  }, ir = function(t, i, s) {
    switch (i) {
      case "input":
        if (j(t, s), i = s.name, s.type === "radio" && i != null) {
          for (s = t; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < s.length; i++) {
            var l = s[i];
            if (l !== t && l.form === t.form) {
              var d = zs(l);
              if (!d)
                throw Error(r(90));
              wn(l), j(l, d);
            }
          }
        }
        break;
      case "textarea":
        ze(t, s);
        break;
      case "select":
        i = s.value, i != null && G(t, !!s.multiple, i, !1);
    }
  }, Zi = lc, ud = Wr;
  var bx = { usingClientEntryPoint: !1, Events: [So, fi, zs, vs, Ji, lc] }, Fo = { findFiberByHostInstance: Ir, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Px = { bundleType: Fo.bundleType, version: Fo.version, rendererPackageName: Fo.rendererPackageName, rendererConfig: Fo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = pd(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Fo.findFiberByHostInstance || Ex, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ca.isDisabled && Ca.supportsFiber)
      try {
        Ss = Ca.inject(Px), kn = Ca;
      } catch {
      }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bx, zt.createPortal = function(t, i) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yc(i))
      throw Error(r(200));
    return Cx(t, i, null, s);
  }, zt.createRoot = function(t, i) {
    if (!yc(t))
      throw Error(r(299));
    var s = !1, l = "", d = zh;
    return i != null && (i.unstable_strictMode === !0 && (s = !0), i.identifierPrefix !== void 0 && (l = i.identifierPrefix), i.onRecoverableError !== void 0 && (d = i.onRecoverableError)), i = hc(t, 1, !1, null, null, s, !1, l, d), t[$n] = i.current, xo(t.nodeType === 8 ? t.parentNode : t), new gc(i);
  }, zt.findDOMNode = function(t) {
    if (t == null)
      return null;
    if (t.nodeType === 1)
      return t;
    var i = t._reactInternals;
    if (i === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = pd(i), t = t === null ? null : t.stateNode, t;
  }, zt.flushSync = function(t) {
    return Wr(t);
  }, zt.hydrate = function(t, i, s) {
    if (!ka(i))
      throw Error(r(200));
    return Ta(null, t, i, !0, s);
  }, zt.hydrateRoot = function(t, i, s) {
    if (!yc(t))
      throw Error(r(405));
    var l = s != null && s.hydratedSources || null, d = !1, h = "", _ = zh;
    if (s != null && (s.unstable_strictMode === !0 && (d = !0), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onRecoverableError !== void 0 && (_ = s.onRecoverableError)), i = Vh(i, null, t, 1, s ?? null, d, !1, h, _), t[$n] = i.current, xo(t), l)
      for (t = 0; t < l.length; t++)
        s = l[t], d = s._getVersion, d = d(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, d] : i.mutableSourceEagerHydrationData.push(
          s,
          d
        );
    return new Sa(i);
  }, zt.render = function(t, i, s) {
    if (!ka(i))
      throw Error(r(200));
    return Ta(null, t, i, !1, s);
  }, zt.unmountComponentAtNode = function(t) {
    if (!ka(t))
      throw Error(r(40));
    return t._reactRootContainer ? (Wr(function() {
      Ta(null, null, t, !1, function() {
        t._reactRootContainer = null, t[$n] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = lc, zt.unstable_renderSubtreeIntoContainer = function(t, i, s, l) {
    if (!ka(s))
      throw Error(r(200));
    if (t == null || t._reactInternals === void 0)
      throw Error(r(38));
    return Ta(t, i, s, !1, l);
  }, zt.version = "18.2.0-next-9e3b772b8-20220608", zt;
}
function Jg() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg);
    } catch (e) {
      console.error(e);
    }
}
Jg(), Xg.exports = jx();
var Vx = Xg.exports, Qh = Vx;
Yc.createRoot = Qh.createRoot, Yc.hydrateRoot = Qh.hydrateRoot;
const pl = N.createContext({}), Bx = ({
  children: e,
  app: n,
  events: r
}) => {
  const [o, a] = N.useState(n);
  return /* @__PURE__ */ E.jsx(
    pl.Provider,
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
function zx() {
  return N.useContext(pl).settings;
}
function vn() {
  return N.useContext(pl).params;
}
function hl() {
  return N.useContext(pl).events;
}
const Zg = N.createContext({}), $x = ({
  children: e
}) => {
  const [n, r] = N.useState(!1), o = hl(), [a, c] = N.useState(!1), [f, m] = N.useState(), [y, g] = N.useState(), x = (S) => {
    f !== "messages" && m(() => "messages"), g(() => S), o.emit("conversation.opened", { conversationId: S });
  }, u = () => {
    g(() => {
    });
  }, p = () => r(() => !1), v = () => {
    r(() => !0), c(() => !0);
  }, w = () => {
    n ? p() : v();
  };
  return /* @__PURE__ */ E.jsx(
    Zg.Provider,
    {
      value: {
        isOpen: n,
        isAlreadyOpen: a,
        close: p,
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
}, In = () => N.useContext(Zg);
function Ux(e) {
  if (e.sheet)
    return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e)
      return document.styleSheets[n];
}
function Hx(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var Wx = /* @__PURE__ */ function() {
  function e(r) {
    var o = this;
    this._insertTag = function(a) {
      var c;
      o.tags.length === 0 ? o.insertionPoint ? c = o.insertionPoint.nextSibling : o.prepend ? c = o.container.firstChild : c = o.before : c = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(a, c), o.tags.push(a);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var n = e.prototype;
  return n.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, n.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Hx(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = Ux(a);
      try {
        c.insertRule(o, c.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(o));
    this.ctr++;
  }, n.flush = function() {
    this.tags.forEach(function(o) {
      return o.parentNode && o.parentNode.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Rt = "-ms-", Ka = "-moz-", Fe = "-webkit-", ey = "comm", bf = "rule", Pf = "decl", qx = "@import", ty = "@keyframes", Gx = "@layer", Kx = Math.abs, ml = String.fromCharCode, Qx = Object.assign;
function Yx(e, n) {
  return kt(e, 0) ^ 45 ? (((n << 2 ^ kt(e, 0)) << 2 ^ kt(e, 1)) << 2 ^ kt(e, 2)) << 2 ^ kt(e, 3) : 0;
}
function ny(e) {
  return e.trim();
}
function Xx(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function Ie(e, n, r) {
  return e.replace(n, r);
}
function Xc(e, n) {
  return e.indexOf(n);
}
function kt(e, n) {
  return e.charCodeAt(n) | 0;
}
function Xo(e, n, r) {
  return e.slice(n, r);
}
function Pn(e) {
  return e.length;
}
function Rf(e) {
  return e.length;
}
function Ea(e, n) {
  return n.push(e), e;
}
function Jx(e, n) {
  return e.map(n).join("");
}
var gl = 1, Bi = 1, ry = 0, $t = 0, at = 0, qi = "";
function yl(e, n, r, o, a, c, f) {
  return { value: e, root: n, parent: r, type: o, props: a, children: c, line: gl, column: Bi, length: f, return: "" };
}
function jo(e, n) {
  return Qx(yl("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function Zx() {
  return at;
}
function ew() {
  return at = $t > 0 ? kt(qi, --$t) : 0, Bi--, at === 10 && (Bi = 1, gl--), at;
}
function Kt() {
  return at = $t < ry ? kt(qi, $t++) : 0, Bi++, at === 10 && (Bi = 1, gl++), at;
}
function Mn() {
  return kt(qi, $t);
}
function Da() {
  return $t;
}
function as(e, n) {
  return Xo(qi, e, n);
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
function iy(e) {
  return gl = Bi = 1, ry = Pn(qi = e), $t = 0, [];
}
function oy(e) {
  return qi = "", e;
}
function Na(e) {
  return ny(as($t - 1, Jc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tw(e) {
  for (; (at = Mn()) && at < 33; )
    Kt();
  return Jo(e) > 2 || Jo(at) > 3 ? "" : " ";
}
function nw(e, n) {
  for (; --n && Kt() && !(at < 48 || at > 102 || at > 57 && at < 65 || at > 70 && at < 97); )
    ;
  return as(e, Da() + (n < 6 && Mn() == 32 && Kt() == 32));
}
function Jc(e) {
  for (; Kt(); )
    switch (at) {
      case e:
        return $t;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Jc(at);
        break;
      case 40:
        e === 41 && Jc(e);
        break;
      case 92:
        Kt();
        break;
    }
  return $t;
}
function rw(e, n) {
  for (; Kt() && e + at !== 47 + 10; )
    if (e + at === 42 + 42 && Mn() === 47)
      break;
  return "/*" + as(n, $t - 1) + "*" + ml(e === 47 ? e : Kt());
}
function iw(e) {
  for (; !Jo(Mn()); )
    Kt();
  return as(e, $t);
}
function ow(e) {
  return oy(Fa("", null, null, null, [""], e = iy(e), 0, [0], e));
}
function Fa(e, n, r, o, a, c, f, m, y) {
  for (var g = 0, x = 0, u = f, p = 0, v = 0, w = 0, S = 1, k = 1, T = 1, A = 0, L = "", V = a, H = c, J = o, K = L; k; )
    switch (w = A, A = Kt()) {
      case 40:
        if (w != 108 && kt(K, u - 1) == 58) {
          Xc(K += Ie(Na(A), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += Na(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += tw(w);
        break;
      case 92:
        K += nw(Da() - 1, 7);
        continue;
      case 47:
        switch (Mn()) {
          case 42:
          case 47:
            Ea(sw(rw(Kt(), Da()), n, r), y);
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
            T == -1 && (K = Ie(K, /\f/g, "")), v > 0 && Pn(K) - u && Ea(v > 32 ? Xh(K + ";", o, r, u - 1) : Xh(Ie(K, " ", "") + ";", o, r, u - 2), y);
            break;
          case 59:
            K += ";";
          default:
            if (Ea(J = Yh(K, n, r, g, x, a, m, L, V = [], H = [], u), c), A === 123)
              if (x === 0)
                Fa(K, n, J, J, V, c, u, m, H);
              else
                switch (p === 99 && kt(K, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Fa(e, J, J, o && Ea(Yh(e, J, J, 0, 0, a, m, L, a, V = [], u), H), a, H, u, m, o ? V : H);
                    break;
                  default:
                    Fa(K, J, J, J, [""], H, 0, m, H);
                }
        }
        g = x = v = 0, S = T = 1, L = K = "", u = f;
        break;
      case 58:
        u = 1 + Pn(K), v = w;
      default:
        if (S < 1) {
          if (A == 123)
            --S;
          else if (A == 125 && S++ == 0 && ew() == 125)
            continue;
        }
        switch (K += ml(A), A * S) {
          case 38:
            T = x > 0 ? 1 : (K += "\f", -1);
            break;
          case 44:
            m[g++] = (Pn(K) - 1) * T, T = 1;
            break;
          case 64:
            Mn() === 45 && (K += Na(Kt())), p = Mn(), x = u = Pn(L = K += iw(Da())), A++;
            break;
          case 45:
            w === 45 && Pn(K) == 2 && (S = 0);
        }
    }
  return c;
}
function Yh(e, n, r, o, a, c, f, m, y, g, x) {
  for (var u = a - 1, p = a === 0 ? c : [""], v = Rf(p), w = 0, S = 0, k = 0; w < o; ++w)
    for (var T = 0, A = Xo(e, u + 1, u = Kx(S = f[w])), L = e; T < v; ++T)
      (L = ny(S > 0 ? p[T] + " " + A : Ie(A, /&\f/g, p[T]))) && (y[k++] = L);
  return yl(e, n, r, a === 0 ? bf : m, y, g, x);
}
function sw(e, n, r) {
  return yl(e, n, r, ey, ml(Zx()), Xo(e, 2, -2), 0);
}
function Xh(e, n, r, o) {
  return yl(e, n, r, Pf, Xo(e, 0, o), Xo(e, o + 1, -1), o);
}
function Ii(e, n) {
  for (var r = "", o = Rf(e), a = 0; a < o; a++)
    r += n(e[a], a, e, n) || "";
  return r;
}
function aw(e, n, r, o) {
  switch (e.type) {
    case Gx:
      if (e.children.length)
        break;
    case qx:
    case Pf:
      return e.return = e.return || e.value;
    case ey:
      return "";
    case ty:
      return e.return = e.value + "{" + Ii(e.children, o) + "}";
    case bf:
      e.value = e.props.join(",");
  }
  return Pn(r = Ii(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function lw(e) {
  var n = Rf(e);
  return function(r, o, a, c) {
    for (var f = "", m = 0; m < n; m++)
      f += e[m](r, o, a, c) || "";
    return f;
  };
}
function uw(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
var Jh = function(n) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(o) {
    if (r.has(o))
      return r.get(o);
    var a = n(o);
    return r.set(o, a), a;
  };
};
function sy(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var cw = function(n, r, o) {
  for (var a = 0, c = 0; a = c, c = Mn(), a === 38 && c === 12 && (r[o] = 1), !Jo(c); )
    Kt();
  return as(n, $t);
}, fw = function(n, r) {
  var o = -1, a = 44;
  do
    switch (Jo(a)) {
      case 0:
        a === 38 && Mn() === 12 && (r[o] = 1), n[o] += cw($t - 1, r, o);
        break;
      case 2:
        n[o] += Na(a);
        break;
      case 4:
        if (a === 44) {
          n[++o] = Mn() === 58 ? "&\f" : "", r[o] = n[o].length;
          break;
        }
      default:
        n[o] += ml(a);
    }
  while (a = Kt());
  return n;
}, dw = function(n, r) {
  return oy(fw(iy(n), r));
}, Zh = /* @__PURE__ */ new WeakMap(), pw = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var r = n.value, o = n.parent, a = n.column === o.column && n.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o)
        return;
    if (!(n.props.length === 1 && r.charCodeAt(0) !== 58 && !Zh.get(o)) && !a) {
      Zh.set(n, !0);
      for (var c = [], f = dw(r, c), m = o.props, y = 0, g = 0; y < f.length; y++)
        for (var x = 0; x < m.length; x++, g++)
          n.props[g] = c[y] ? f[y].replace(/&\f/g, m[x]) : m[x] + " " + f[y];
    }
  }
}, hw = function(n) {
  if (n.type === "decl") {
    var r = n.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
};
function ay(e, n) {
  switch (Yx(e, n)) {
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
      return Fe + e + Ka + e + Rt + e + e;
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
      if (Pn(e) - 1 - n > 6)
        switch (kt(e, n + 1)) {
          case 109:
            if (kt(e, n + 4) !== 45)
              break;
          case 102:
            return Ie(e, /(.+:)(.+)-([^]+)/, "$1" + Fe + "$2-$3$1" + Ka + (kt(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xc(e, "stretch") ? ay(Ie(e, "stretch", "fill-available"), n) + e : e;
        }
      break;
    case 4949:
      if (kt(e, n + 1) !== 115)
        break;
    case 6444:
      switch (kt(e, Pn(e) - 3 - (~Xc(e, "!important") && 10))) {
        case 107:
          return Ie(e, ":", ":" + Fe) + e;
        case 101:
          return Ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Fe + (kt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Fe + "$2$3$1" + Rt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (kt(e, n + 11)) {
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
var mw = function(n, r, o, a) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Pf:
        n.return = ay(n.value, n.length);
        break;
      case ty:
        return Ii([jo(n, {
          value: Ie(n.value, "@", "@" + Fe)
        })], a);
      case bf:
        if (n.length)
          return Jx(n.props, function(c) {
            switch (Xx(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ii([jo(n, {
                  props: [Ie(c, /:(read-\w+)/, ":" + Ka + "$1")]
                })], a);
              case "::placeholder":
                return Ii([jo(n, {
                  props: [Ie(c, /:(plac\w+)/, ":" + Fe + "input-$1")]
                }), jo(n, {
                  props: [Ie(c, /:(plac\w+)/, ":" + Ka + "$1")]
                }), jo(n, {
                  props: [Ie(c, /:(plac\w+)/, Rt + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, gw = [mw], yw = function(n) {
  var r = n.key;
  if (r === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(S) {
      var k = S.getAttribute("data-emotion");
      k.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var a = n.stylisPlugins || gw, c = {}, f, m = [];
  f = n.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(S) {
      for (var k = S.getAttribute("data-emotion").split(" "), T = 1; T < k.length; T++)
        c[k[T]] = !0;
      m.push(S);
    }
  );
  var y, g = [pw, hw];
  {
    var x, u = [aw, uw(function(S) {
      x.insert(S);
    })], p = lw(g.concat(a, u)), v = function(k) {
      return Ii(ow(k), p);
    };
    y = function(k, T, A, L) {
      x = A, v(k ? k + "{" + T.styles + "}" : T.styles), L && (w.inserted[T.name] = !0);
    };
  }
  var w = {
    key: r,
    sheet: new Wx({
      key: r,
      container: f,
      nonce: n.nonce,
      speedy: n.speedy,
      prepend: n.prepend,
      insertionPoint: n.insertionPoint
    }),
    nonce: n.nonce,
    inserted: c,
    registered: {},
    insert: y
  };
  return w.sheet.hydrate(m), w;
};
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Qa.apply(this, arguments);
}
var vw = !0;
function xw(e, n, r) {
  var o = "";
  return r.split(" ").forEach(function(a) {
    e[a] !== void 0 ? n.push(e[a] + ";") : o += a + " ";
  }), o;
}
var ly = function(n, r, o) {
  var a = n.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  vw === !1) && n.registered[a] === void 0 && (n.registered[a] = r.styles);
}, ww = function(n, r, o) {
  ly(n, r, o);
  var a = n.key + "-" + r.name;
  if (n.inserted[r.name] === void 0) {
    var c = r;
    do
      n.insert(r === c ? "." + a : "", c, n.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function _w(e) {
  for (var n = 0, r, o = 0, a = e.length; a >= 4; ++o, a -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, n = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      n ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(o) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
var Sw = {
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
}, kw = /[A-Z]|^ms/g, Tw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, uy = function(n) {
  return n.charCodeAt(1) === 45;
}, em = function(n) {
  return n != null && typeof n != "boolean";
}, _c = /* @__PURE__ */ sy(function(e) {
  return uy(e) ? e : e.replace(kw, "-$&").toLowerCase();
}), tm = function(n, r) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Tw, function(o, a, c) {
          return Rn = {
            name: a,
            styles: c,
            next: Rn
          }, a;
        });
  }
  return Sw[n] !== 1 && !uy(n) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Zo(e, n, r) {
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
      return Cw(e, n, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Rn, f = r(e);
        return Rn = c, Zo(e, n, f);
      }
      break;
    }
  }
  if (n == null)
    return r;
  var m = n[r];
  return m !== void 0 ? m : r;
}
function Cw(e, n, r) {
  var o = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      o += Zo(e, n, r[a]) + ";";
  else
    for (var c in r) {
      var f = r[c];
      if (typeof f != "object")
        n != null && n[f] !== void 0 ? o += c + "{" + n[f] + "}" : em(f) && (o += _c(c) + ":" + tm(c, f) + ";");
      else if (Array.isArray(f) && typeof f[0] == "string" && (n == null || n[f[0]] === void 0))
        for (var m = 0; m < f.length; m++)
          em(f[m]) && (o += _c(c) + ":" + tm(c, f[m]) + ";");
      else {
        var y = Zo(e, n, f);
        switch (c) {
          case "animation":
          case "animationName": {
            o += _c(c) + ":" + y + ";";
            break;
          }
          default:
            o += c + "{" + y + "}";
        }
      }
    }
  return o;
}
var nm = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Rn, Ew = function(n, r, o) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var a = !0, c = "";
  Rn = void 0;
  var f = n[0];
  f == null || f.raw === void 0 ? (a = !1, c += Zo(o, r, f)) : c += f[0];
  for (var m = 1; m < n.length; m++)
    c += Zo(o, r, n[m]), a && (c += f[m]);
  nm.lastIndex = 0;
  for (var y = "", g; (g = nm.exec(c)) !== null; )
    y += "-" + // $FlowFixMe we know it's not null
    g[1];
  var x = _w(c) + y;
  return {
    name: x,
    styles: c,
    next: Rn
  };
}, Aw = function(n) {
  return n();
}, bw = Hh["useInsertionEffect"] ? Hh["useInsertionEffect"] : !1, Pw = bw || Aw, cy = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yw({
    key: "css"
  }) : null
);
cy.Provider;
var Rw = function(n) {
  return /* @__PURE__ */ N.forwardRef(function(r, o) {
    var a = N.useContext(cy);
    return n(r, a, o);
  });
}, Ya = /* @__PURE__ */ N.createContext({}), Ow = function() {
  return N.useContext(Ya);
}, Lw = function(n, r) {
  if (typeof r == "function") {
    var o = r(n);
    return o;
  }
  return Qa({}, n, r);
}, Mw = /* @__PURE__ */ Jh(function(e) {
  return Jh(function(n) {
    return Lw(e, n);
  });
}), Dw = function(n) {
  var r = N.useContext(Ya);
  return n.theme !== r && (r = Mw(r)(n.theme)), /* @__PURE__ */ N.createElement(Ya.Provider, {
    value: r
  }, n.children);
}, Nw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fw = /* @__PURE__ */ sy(
  function(e) {
    return Nw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Iw = Fw, jw = function(n) {
  return n !== "theme";
}, rm = function(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96 ? Iw : jw;
}, im = function(n, r, o) {
  var a;
  if (r) {
    var c = r.shouldForwardProp;
    a = n.__emotion_forwardProp && c ? function(f) {
      return n.__emotion_forwardProp(f) && c(f);
    } : c;
  }
  return typeof a != "function" && o && (a = n.__emotion_forwardProp), a;
}, Vw = function(n) {
  var r = n.cache, o = n.serialized, a = n.isStringTag;
  return ly(r, o, a), Pw(function() {
    return ww(r, o, a);
  }), null;
}, Bw = function e(n, r) {
  var o = n.__emotion_real === n, a = o && n.__emotion_base || n, c, f;
  r !== void 0 && (c = r.label, f = r.target);
  var m = im(n, r, o), y = m || rm(a), g = !y("as");
  return function() {
    var x = arguments, u = o && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
    if (c !== void 0 && u.push("label:" + c + ";"), x[0] == null || x[0].raw === void 0)
      u.push.apply(u, x);
    else {
      u.push(x[0][0]);
      for (var p = x.length, v = 1; v < p; v++)
        u.push(x[v], x[0][v]);
    }
    var w = Rw(function(S, k, T) {
      var A = g && S.as || a, L = "", V = [], H = S;
      if (S.theme == null) {
        H = {};
        for (var J in S)
          H[J] = S[J];
        H.theme = N.useContext(Ya);
      }
      typeof S.className == "string" ? L = xw(k.registered, V, S.className) : S.className != null && (L = S.className + " ");
      var K = Ew(u.concat(V), k.registered, H);
      L += k.key + "-" + K.name, f !== void 0 && (L += " " + f);
      var te = g && m === void 0 ? rm(A) : y, Z = {};
      for (var Ce in S)
        g && Ce === "as" || // $FlowFixMe
        te(Ce) && (Z[Ce] = S[Ce]);
      return Z.className = L, Z.ref = T, /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Vw, {
        cache: k,
        serialized: K,
        isStringTag: typeof A == "string"
      }), /* @__PURE__ */ N.createElement(A, Z));
    });
    return w.displayName = c !== void 0 ? c : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", w.defaultProps = n.defaultProps, w.__emotion_real = w, w.__emotion_base = a, w.__emotion_styles = u, w.__emotion_forwardProp = m, Object.defineProperty(w, "toString", {
      value: function() {
        return "." + f;
      }
    }), w.withComponent = function(S, k) {
      return e(S, Qa({}, r, k, {
        shouldForwardProp: im(w, k, !0)
      })).apply(void 0, u);
    }, w;
  };
}, zw = [
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
], Te = Bw.bind();
zw.forEach(function(e) {
  Te[e] = Te(e);
});
function $w(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function es(e, n) {
  return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
    return o.__proto__ = a, o;
  }, es(e, n);
}
function Uw(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, es(e, n);
}
function Zc(e) {
  return Zc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zc(e);
}
function Hw(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ww() {
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
function Ia(e, n, r) {
  return Ww() ? Ia = Reflect.construct.bind() : Ia = function(a, c, f) {
    var m = [null];
    m.push.apply(m, c);
    var y = Function.bind.apply(a, m), g = new y();
    return f && es(g, f.prototype), g;
  }, Ia.apply(null, arguments);
}
function ef(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ef = function(o) {
    if (o === null || !Hw(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(o))
        return n.get(o);
      n.set(o, a);
    }
    function a() {
      return Ia(o, arguments, Zc(this).constructor);
    }
    return a.prototype = Object.create(o.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), es(a, o);
  }, ef(e);
}
var Oi = /* @__PURE__ */ function(e) {
  Uw(n, e);
  function n(r) {
    var o;
    return o = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this, $w(o);
  }
  return n;
}(/* @__PURE__ */ ef(Error));
function Sc(e) {
  return Math.round(e * 255);
}
function qw(e, n, r) {
  return Sc(e) + "," + Sc(n) + "," + Sc(r);
}
function om(e, n, r, o) {
  if (o === void 0 && (o = qw), n === 0)
    return o(r, r, r);
  var a = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * r - 1)) * n, f = c * (1 - Math.abs(a % 2 - 1)), m = 0, y = 0, g = 0;
  a >= 0 && a < 1 ? (m = c, y = f) : a >= 1 && a < 2 ? (m = f, y = c) : a >= 2 && a < 3 ? (y = c, g = f) : a >= 3 && a < 4 ? (y = f, g = c) : a >= 4 && a < 5 ? (m = f, g = c) : a >= 5 && a < 6 && (m = c, g = f);
  var x = r - c / 2, u = m + x, p = y + x, v = g + x;
  return o(u, p, v);
}
var sm = {
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
function Gw(e) {
  if (typeof e != "string")
    return e;
  var n = e.toLowerCase();
  return sm[n] ? "#" + sm[n] : e;
}
var Kw = /^#[a-fA-F0-9]{6}$/, Qw = /^#[a-fA-F0-9]{8}$/, Yw = /^#[a-fA-F0-9]{3}$/, Xw = /^#[a-fA-F0-9]{4}$/, kc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Jw = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Zw = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, e_ = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function t_(e) {
  if (typeof e != "string")
    throw new Oi(3);
  var n = Gw(e);
  if (n.match(Kw))
    return {
      red: parseInt("" + n[1] + n[2], 16),
      green: parseInt("" + n[3] + n[4], 16),
      blue: parseInt("" + n[5] + n[6], 16)
    };
  if (n.match(Qw)) {
    var r = parseFloat((parseInt("" + n[7] + n[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + n[1] + n[2], 16),
      green: parseInt("" + n[3] + n[4], 16),
      blue: parseInt("" + n[5] + n[6], 16),
      alpha: r
    };
  }
  if (n.match(Yw))
    return {
      red: parseInt("" + n[1] + n[1], 16),
      green: parseInt("" + n[2] + n[2], 16),
      blue: parseInt("" + n[3] + n[3], 16)
    };
  if (n.match(Xw)) {
    var o = parseFloat((parseInt("" + n[4] + n[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + n[1] + n[1], 16),
      green: parseInt("" + n[2] + n[2], 16),
      blue: parseInt("" + n[3] + n[3], 16),
      alpha: o
    };
  }
  var a = kc.exec(n);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var c = Jw.exec(n.substring(0, 50));
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10),
      alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4])
    };
  var f = Zw.exec(n);
  if (f) {
    var m = parseInt("" + f[1], 10), y = parseInt("" + f[2], 10) / 100, g = parseInt("" + f[3], 10) / 100, x = "rgb(" + om(m, y, g) + ")", u = kc.exec(x);
    if (!u)
      throw new Oi(4, n, x);
    return {
      red: parseInt("" + u[1], 10),
      green: parseInt("" + u[2], 10),
      blue: parseInt("" + u[3], 10)
    };
  }
  var p = e_.exec(n.substring(0, 50));
  if (p) {
    var v = parseInt("" + p[1], 10), w = parseInt("" + p[2], 10) / 100, S = parseInt("" + p[3], 10) / 100, k = "rgb(" + om(v, w, S) + ")", T = kc.exec(k);
    if (!T)
      throw new Oi(4, n, k);
    return {
      red: parseInt("" + T[1], 10),
      green: parseInt("" + T[2], 10),
      blue: parseInt("" + T[3], 10),
      alpha: parseFloat("" + p[4]) > 1 ? parseFloat("" + p[4]) / 100 : parseFloat("" + p[4])
    };
  }
  throw new Oi(5);
}
var n_ = function(n) {
  return n.length === 7 && n[1] === n[2] && n[3] === n[4] && n[5] === n[6] ? "#" + n[1] + n[3] + n[5] : n;
}, am = n_;
function Ei(e) {
  var n = e.toString(16);
  return n.length === 1 ? "0" + n : n;
}
function lm(e, n, r) {
  if (typeof e == "number" && typeof n == "number" && typeof r == "number")
    return am("#" + Ei(e) + Ei(n) + Ei(r));
  if (typeof e == "object" && n === void 0 && r === void 0)
    return am("#" + Ei(e.red) + Ei(e.green) + Ei(e.blue));
  throw new Oi(6);
}
function zi(e, n, r, o) {
  if (typeof e == "string" && typeof n == "number") {
    var a = t_(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + n + ")";
  } else {
    if (typeof e == "number" && typeof n == "number" && typeof r == "number" && typeof o == "number")
      return o >= 1 ? lm(e, n, r) : "rgba(" + e + "," + n + "," + r + "," + o + ")";
    if (typeof e == "object" && n === void 0 && r === void 0 && o === void 0)
      return e.alpha >= 1 ? lm(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Oi(7);
}
var tt;
((e) => {
  ((n) => {
    n.BottomRight = "1", n.BottomLeft = "2", n.TopRight = "3", n.TopLeft = "4";
  })(e.ChatPosition || (e.ChatPosition = {}));
})(tt || (tt = {}));
const r_ = Te.div`
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
`, i_ = Te.div`
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
`, o_ = Te.div`
  display: flex;
  flex-direction: row;
  margin: 20px 14px;
  gap: 40px;
  align-items: flex-end;
  position: relative;
`, s_ = Te.button`
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
`, fy = N.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), vl = N.createContext({}), xl = N.createContext(null), wl = typeof document < "u", Xa = wl ? N.useLayoutEffect : N.useEffect, dy = N.createContext({ strict: !1 });
function a_(e, n, r, o) {
  const { visualElement: a } = N.useContext(vl), c = N.useContext(dy), f = N.useContext(xl), m = N.useContext(fy).reducedMotion, y = N.useRef();
  o = o || c.renderer, !y.current && o && (y.current = o(e, {
    visualState: n,
    parent: a,
    props: r,
    presenceContext: f,
    blockInitialAnimation: f ? f.initial === !1 : !1,
    reducedMotionConfig: m
  }));
  const g = y.current;
  return N.useInsertionEffect(() => {
    g && g.update(r, f);
  }), Xa(() => {
    g && g.render();
  }), N.useEffect(() => {
    g && g.updateFeatures();
  }), (window.HandoffAppearAnimations ? Xa : N.useEffect)(() => {
    g && g.animationState && g.animationState.animateChanges();
  }), g;
}
function Li(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function l_(e, n, r) {
  return N.useCallback(
    (o) => {
      o && e.mount && e.mount(o), n && (o ? n.mount(o) : n.unmount()), r && (typeof r == "function" ? r(o) : Li(r) && (r.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [n]
  );
}
function ts(e) {
  return typeof e == "string" || Array.isArray(e);
}
function _l(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Of = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Lf = ["initial", ...Of];
function Sl(e) {
  return _l(e.animate) || Lf.some((n) => ts(e[n]));
}
function py(e) {
  return !!(Sl(e) || e.variants);
}
function u_(e, n) {
  if (Sl(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || ts(r) ? r : void 0,
      animate: ts(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? n : {};
}
function c_(e) {
  const { initial: n, animate: r } = u_(e, N.useContext(vl));
  return N.useMemo(() => ({ initial: n, animate: r }), [um(n), um(r)]);
}
function um(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const cm = {
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
}, ns = {};
for (const e in cm)
  ns[e] = {
    isEnabled: (n) => cm[e].some((r) => !!n[r])
  };
function f_(e) {
  for (const n in e)
    ns[n] = {
      ...ns[n],
      ...e[n]
    };
}
const rs = N.createContext({}), hy = N.createContext({}), d_ = Symbol.for("motionComponentSymbol");
function p_({ preloadedFeatures: e, createVisualElement: n, useRender: r, useVisualState: o, Component: a }) {
  e && f_(e);
  function c(m, y) {
    let g;
    const x = {
      ...N.useContext(fy),
      ...m,
      layoutId: h_(m)
    }, { isStatic: u } = x, p = c_(m), v = o(m, u);
    if (!u && wl) {
      p.visualElement = a_(a, v, x, n);
      const w = N.useContext(hy), S = N.useContext(dy).strict;
      p.visualElement && (g = p.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        x,
        S,
        e,
        w
      ));
    }
    return N.createElement(
      vl.Provider,
      { value: p },
      g && p.visualElement ? N.createElement(g, { visualElement: p.visualElement, ...x }) : null,
      r(a, m, l_(v, p.visualElement, y), v, u, p.visualElement)
    );
  }
  const f = N.forwardRef(c);
  return f[d_] = a, f;
}
function h_({ layoutId: e }) {
  const n = N.useContext(rs).id;
  return n && e !== void 0 ? n + "-" + e : e;
}
function m_(e) {
  function n(o, a = {}) {
    return p_(e(o, a));
  }
  if (typeof Proxy > "u")
    return n;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, a) => (r.has(a) || r.set(a, n(a)), r.get(a))
  });
}
const g_ = [
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
function Mf(e) {
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
      !!(g_.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Ja = {};
function y_(e) {
  Object.assign(Ja, e);
}
const ls = [
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
], Zr = new Set(ls);
function my(e, { layout: n, layoutId: r }) {
  return Zr.has(e) || e.startsWith("origin") || (n || r !== void 0) && (!!Ja[e] || e === "opacity");
}
const Ut = (e) => !!(e && e.getVelocity), v_ = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, x_ = ls.length;
function w_(e, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, a) {
  let c = "";
  for (let f = 0; f < x_; f++) {
    const m = ls[f];
    if (e[m] !== void 0) {
      const y = v_[m] || m;
      c += `${y}(${e[m]}) `;
    }
  }
  return n && !e.z && (c += "translateZ(0)"), c = c.trim(), a ? c = a(e, o ? "" : c) : r && o && (c = "none"), c;
}
const gy = (e) => (n) => typeof n == "string" && n.startsWith(e), yy = gy("--"), tf = gy("var(--"), __ = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, S_ = (e, n) => n && typeof e == "number" ? n.transform(e) : e, Lr = (e, n, r) => Math.min(Math.max(r, e), n), ei = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Go = {
  ...ei,
  transform: (e) => Lr(0, 1, e)
}, Aa = {
  ...ei,
  default: 1
}, Ko = (e) => Math.round(e * 1e5) / 1e5, kl = /(-)?([\d]*\.?[\d])+/g, vy = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, k_ = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function us(e) {
  return typeof e == "string";
}
const cs = (e) => ({
  test: (n) => us(n) && n.endsWith(e) && n.split(" ").length === 1,
  parse: parseFloat,
  transform: (n) => `${n}${e}`
}), Cr = cs("deg"), Dn = cs("%"), ye = cs("px"), T_ = cs("vh"), C_ = cs("vw"), fm = {
  ...Dn,
  parse: (e) => Dn.parse(e) / 100,
  transform: (e) => Dn.transform(e * 100)
}, dm = {
  ...ei,
  transform: Math.round
}, xy = {
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
  scale: Aa,
  scaleX: Aa,
  scaleY: Aa,
  scaleZ: Aa,
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
  opacity: Go,
  originX: fm,
  originY: fm,
  originZ: ye,
  // Misc
  zIndex: dm,
  // SVG
  fillOpacity: Go,
  strokeOpacity: Go,
  numOctaves: dm
};
function Df(e, n, r, o) {
  const { style: a, vars: c, transform: f, transformOrigin: m } = e;
  let y = !1, g = !1, x = !0;
  for (const u in n) {
    const p = n[u];
    if (yy(u)) {
      c[u] = p;
      continue;
    }
    const v = xy[u], w = S_(p, v);
    if (Zr.has(u)) {
      if (y = !0, f[u] = w, !x)
        continue;
      p !== (v.default || 0) && (x = !1);
    } else
      u.startsWith("origin") ? (g = !0, m[u] = w) : a[u] = w;
  }
  if (n.transform || (y || o ? a.transform = w_(e.transform, r, x, o) : a.transform && (a.transform = "none")), g) {
    const { originX: u = "50%", originY: p = "50%", originZ: v = 0 } = m;
    a.transformOrigin = `${u} ${p} ${v}`;
  }
}
const Nf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function wy(e, n, r) {
  for (const o in n)
    !Ut(n[o]) && !my(o, r) && (e[o] = n[o]);
}
function E_({ transformTemplate: e }, n, r) {
  return N.useMemo(() => {
    const o = Nf();
    return Df(o, n, { enableHardwareAcceleration: !r }, e), Object.assign({}, o.vars, o.style);
  }, [n]);
}
function A_(e, n, r) {
  const o = e.style || {}, a = {};
  return wy(a, o, e), Object.assign(a, E_(e, n, r)), e.transformValues ? e.transformValues(a) : a;
}
function b_(e, n, r) {
  const o = {}, a = A_(e, n, r);
  return e.drag && e.dragListener !== !1 && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = a, o;
}
const P_ = /* @__PURE__ */ new Set([
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
function Za(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || P_.has(e);
}
let _y = (e) => !Za(e);
function R_(e) {
  e && (_y = (n) => n.startsWith("on") ? !Za(n) : e(n));
}
try {
  R_(require("@emotion/is-prop-valid").default);
} catch {
}
function O_(e, n, r) {
  const o = {};
  for (const a in e)
    a === "values" && typeof e.values == "object" || (_y(a) || r === !0 && Za(a) || !n && !Za(a) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && a.startsWith("onDrag")) && (o[a] = e[a]);
  return o;
}
function pm(e, n, r) {
  return typeof e == "string" ? e : ye.transform(n + r * e);
}
function L_(e, n, r) {
  const o = pm(n, e.x, e.width), a = pm(r, e.y, e.height);
  return `${o} ${a}`;
}
const M_ = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, D_ = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function N_(e, n, r = 1, o = 0, a = !0) {
  e.pathLength = 1;
  const c = a ? M_ : D_;
  e[c.offset] = ye.transform(-o);
  const f = ye.transform(n), m = ye.transform(r);
  e[c.array] = `${f} ${m}`;
}
function Ff(e, {
  attrX: n,
  attrY: r,
  attrScale: o,
  originX: a,
  originY: c,
  pathLength: f,
  pathSpacing: m = 1,
  pathOffset: y = 0,
  // This is object creation, which we try to avoid per-frame.
  ...g
}, x, u, p) {
  if (Df(e, g, x, p), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: v, style: w, dimensions: S } = e;
  v.transform && (S && (w.transform = v.transform), delete v.transform), S && (a !== void 0 || c !== void 0 || w.transform) && (w.transformOrigin = L_(S, a !== void 0 ? a : 0.5, c !== void 0 ? c : 0.5)), n !== void 0 && (v.x = n), r !== void 0 && (v.y = r), o !== void 0 && (v.scale = o), f !== void 0 && N_(v, f, m, y, !1);
}
const Sy = () => ({
  ...Nf(),
  attrs: {}
}), If = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function F_(e, n, r, o) {
  const a = N.useMemo(() => {
    const c = Sy();
    return Ff(c, n, { enableHardwareAcceleration: !1 }, If(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [n]);
  if (e.style) {
    const c = {};
    wy(c, e.style, e), a.style = { ...c, ...a.style };
  }
  return a;
}
function I_(e = !1) {
  return (r, o, a, { latestValues: c }, f) => {
    const y = (Mf(r) ? F_ : b_)(o, c, f, r), x = {
      ...O_(o, typeof r == "string", e),
      ...y,
      ref: a
    }, { children: u } = o, p = N.useMemo(() => Ut(u) ? u.get() : u, [u]);
    return N.createElement(r, {
      ...x,
      children: p
    });
  };
}
const jf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ky(e, { style: n, vars: r }, o, a) {
  Object.assign(e.style, n, a && a.getProjectionStyles(o));
  for (const c in r)
    e.style.setProperty(c, r[c]);
}
const Ty = /* @__PURE__ */ new Set([
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
function Cy(e, n, r, o) {
  ky(e, n, void 0, o);
  for (const a in n.attrs)
    e.setAttribute(Ty.has(a) ? a : jf(a), n.attrs[a]);
}
function Vf(e, n) {
  const { style: r } = e, o = {};
  for (const a in r)
    (Ut(r[a]) || n.style && Ut(n.style[a]) || my(a, e)) && (o[a] = r[a]);
  return o;
}
function Ey(e, n) {
  const r = Vf(e, n);
  for (const o in e)
    if (Ut(e[o]) || Ut(n[o])) {
      const a = ls.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[a] = e[o];
    }
  return r;
}
function Bf(e, n, r, o = {}, a = {}) {
  return typeof n == "function" && (n = n(r !== void 0 ? r : e.custom, o, a)), typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function" && (n = n(r !== void 0 ? r : e.custom, o, a)), n;
}
function Ay(e) {
  const n = N.useRef(null);
  return n.current === null && (n.current = e()), n.current;
}
const el = (e) => Array.isArray(e), j_ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), V_ = (e) => el(e) ? e[e.length - 1] || 0 : e;
function ja(e) {
  const n = Ut(e) ? e.get() : e;
  return j_(n) ? n.toValue() : n;
}
function B_({ scrapeMotionValuesFromProps: e, createRenderState: n, onMount: r }, o, a, c) {
  const f = {
    latestValues: z_(o, a, c, e),
    renderState: n()
  };
  return r && (f.mount = (m) => r(o, m, f)), f;
}
const by = (e) => (n, r) => {
  const o = N.useContext(vl), a = N.useContext(xl), c = () => B_(e, n, o, a);
  return r ? c() : Ay(c);
};
function z_(e, n, r, o) {
  const a = {}, c = o(e, {});
  for (const p in c)
    a[p] = ja(c[p]);
  let { initial: f, animate: m } = e;
  const y = Sl(e), g = py(e);
  n && g && !y && e.inherit !== !1 && (f === void 0 && (f = n.initial), m === void 0 && (m = n.animate));
  let x = r ? r.initial === !1 : !1;
  x = x || f === !1;
  const u = x ? m : f;
  return u && typeof u != "boolean" && !_l(u) && (Array.isArray(u) ? u : [u]).forEach((v) => {
    const w = Bf(e, v);
    if (!w)
      return;
    const { transitionEnd: S, transition: k, ...T } = w;
    for (const A in T) {
      let L = T[A];
      if (Array.isArray(L)) {
        const V = x ? L.length - 1 : 0;
        L = L[V];
      }
      L !== null && (a[A] = L);
    }
    for (const A in S)
      a[A] = S[A];
  }), a;
}
const $_ = {
  useVisualState: by({
    scrapeMotionValuesFromProps: Ey,
    createRenderState: Sy,
    onMount: (e, n, { renderState: r, latestValues: o }) => {
      try {
        r.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
      } catch {
        r.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Ff(r, o, { enableHardwareAcceleration: !1 }, If(n.tagName), e.transformTemplate), Cy(n, r);
    }
  })
}, U_ = {
  useVisualState: by({
    scrapeMotionValuesFromProps: Vf,
    createRenderState: Nf
  })
};
function H_(e, { forwardMotionProps: n = !1 }, r, o) {
  return {
    ...Mf(e) ? $_ : U_,
    preloadedFeatures: r,
    useRender: I_(n),
    createVisualElement: o,
    Component: e
  };
}
function Jn(e, n, r, o = { passive: !0 }) {
  return e.addEventListener(n, r, o), () => e.removeEventListener(n, r);
}
const Py = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Tl(e, n = "page") {
  return {
    point: {
      x: e[n + "X"],
      y: e[n + "Y"]
    }
  };
}
const W_ = (e) => (n) => Py(n) && e(n, Tl(n));
function Zn(e, n, r, o) {
  return Jn(e, n, W_(r), o);
}
const q_ = (e, n) => (r) => n(e(r)), Rr = (...e) => e.reduce(q_);
function Ry(e) {
  let n = null;
  return () => {
    const r = () => {
      n = null;
    };
    return n === null ? (n = e, r) : !1;
  };
}
const hm = Ry("dragHorizontal"), mm = Ry("dragVertical");
function Oy(e) {
  let n = !1;
  if (e === "y")
    n = mm();
  else if (e === "x")
    n = hm();
  else {
    const r = hm(), o = mm();
    r && o ? n = () => {
      r(), o();
    } : (r && r(), o && o());
  }
  return n;
}
function Ly() {
  const e = Oy(!0);
  return e ? (e(), !1) : !0;
}
class Dr {
  constructor(n) {
    this.isMounted = !1, this.node = n;
  }
  update() {
  }
}
function G_(e) {
  let n = [], r = [], o = 0, a = !1, c = !1;
  const f = /* @__PURE__ */ new WeakSet(), m = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (y, g = !1, x = !1) => {
      const u = x && a, p = u ? n : r;
      return g && f.add(y), p.indexOf(y) === -1 && (p.push(y), u && a && (o = n.length)), y;
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
      if (a = !0, [n, r] = [r, n], r.length = 0, o = n.length, o)
        for (let g = 0; g < o; g++) {
          const x = n[g];
          x(y), f.has(x) && (m.schedule(x), e());
        }
      a = !1, c && (c = !1, m.process(y));
    }
  };
  return m;
}
const Je = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, K_ = 40;
let nf = !0, is = !1;
const Cl = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], ji = Cl.reduce((e, n) => (e[n] = G_(() => is = !0), e), {}), Q_ = (e) => ji[e].process(Je), My = (e) => {
  is = !1, Je.delta = nf ? 1e3 / 60 : Math.max(Math.min(e - Je.timestamp, K_), 1), Je.timestamp = e, Je.isProcessing = !0, Cl.forEach(Q_), Je.isProcessing = !1, is && (nf = !1, requestAnimationFrame(My));
}, Y_ = () => {
  is = !0, nf = !0, Je.isProcessing || requestAnimationFrame(My);
}, Ke = Cl.reduce((e, n) => {
  const r = ji[n];
  return e[n] = (o, a = !1, c = !1) => (is || Y_(), r.schedule(o, a, c)), e;
}, {});
function nr(e) {
  Cl.forEach((n) => ji[n].cancel(e));
}
function gm(e, n) {
  const r = "pointer" + (n ? "enter" : "leave"), o = "onHover" + (n ? "Start" : "End"), a = (c, f) => {
    if (c.type === "touch" || Ly())
      return;
    const m = e.getProps();
    e.animationState && m.whileHover && e.animationState.setActive("whileHover", n), m[o] && Ke.update(() => m[o](c, f));
  };
  return Zn(e.current, r, a, {
    passive: !e.getProps()[o]
  });
}
class X_ extends Dr {
  mount() {
    this.unmount = Rr(gm(this.node, !0), gm(this.node, !1));
  }
  unmount() {
  }
}
class J_ extends Dr {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch {
      n = !0;
    }
    !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Rr(Jn(this.node.current, "focus", () => this.onFocus()), Jn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Dy = (e, n) => n ? e === n ? !0 : Dy(e, n.parentElement) : !1, dt = (e) => e;
function Tc(e, n) {
  if (!n)
    return;
  const r = new PointerEvent("pointer" + e);
  n(r, Tl(r));
}
class Z_ extends Dr {
  constructor() {
    super(...arguments), this.removeStartListeners = dt, this.removeEndListeners = dt, this.removeAccessibleListeners = dt, this.startPointerPress = (n, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const o = this.node.getProps(), c = Zn(window, "pointerup", (m, y) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: g, onTapCancel: x } = this.node.getProps();
        Ke.update(() => {
          Dy(this.node.current, m.target) ? g && g(m, y) : x && x(m, y);
        });
      }, { passive: !(o.onTap || o.onPointerUp) }), f = Zn(window, "pointercancel", (m, y) => this.cancelPress(m, y), { passive: !(o.onTapCancel || o.onPointerCancel) });
      this.removeEndListeners = Rr(c, f), this.startPress(n, r);
    }, this.startAccessiblePress = () => {
      const n = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const f = (m) => {
          m.key !== "Enter" || !this.checkPressEnd() || Tc("up", (y, g) => {
            const { onTap: x } = this.node.getProps();
            x && Ke.update(() => x(y, g));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Jn(this.node.current, "keyup", f), Tc("down", (m, y) => {
          this.startPress(m, y);
        });
      }, r = Jn(this.node.current, "keydown", n), o = () => {
        this.isPressing && Tc("cancel", (c, f) => this.cancelPress(c, f));
      }, a = Jn(this.node.current, "blur", o);
      this.removeAccessibleListeners = Rr(r, a);
    };
  }
  startPress(n, r) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: a } = this.node.getProps();
    a && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && Ke.update(() => o(n, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Ly();
  }
  cancelPress(n, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && Ke.update(() => o(n, r));
  }
  mount() {
    const n = this.node.getProps(), r = Zn(this.node.current, "pointerdown", this.startPointerPress, { passive: !(n.onTapStart || n.onPointerStart) }), o = Jn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Rr(r, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const rf = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap(), eS = (e) => {
  const n = rf.get(e.target);
  n && n(e);
}, tS = (e) => {
  e.forEach(eS);
};
function nS({ root: e, ...n }) {
  const r = e || document;
  Cc.has(r) || Cc.set(r, {});
  const o = Cc.get(r), a = JSON.stringify(n);
  return o[a] || (o[a] = new IntersectionObserver(tS, { root: e, ...n })), o[a];
}
function rS(e, n, r) {
  const o = nS(n);
  return rf.set(e, r), o.observe(e), () => {
    rf.delete(e), o.unobserve(e);
  };
}
const iS = {
  some: 0,
  all: 1
};
class oS extends Dr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(), { root: r, margin: o, amount: a = "some", once: c } = n, f = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof a == "number" ? a : iS[a]
    }, m = (y) => {
      const { isIntersecting: g } = y;
      if (this.isInView === g || (this.isInView = g, c && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: x, onViewportLeave: u } = this.node.getProps(), p = g ? x : u;
      p && p(y);
    };
    return rS(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: n, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(sS(n, r)) && this.startObserver();
  }
  unmount() {
  }
}
function sS({ viewport: e = {} }, { viewport: n = {} } = {}) {
  return (r) => e[r] !== n[r];
}
const aS = {
  inView: {
    Feature: oS
  },
  tap: {
    Feature: Z_
  },
  focus: {
    Feature: J_
  },
  hover: {
    Feature: X_
  }
};
function Ny(e, n) {
  if (!Array.isArray(n))
    return !1;
  const r = n.length;
  if (r !== e.length)
    return !1;
  for (let o = 0; o < r; o++)
    if (n[o] !== e[o])
      return !1;
  return !0;
}
function lS(e) {
  const n = {};
  return e.values.forEach((r, o) => n[o] = r.get()), n;
}
function uS(e) {
  const n = {};
  return e.values.forEach((r, o) => n[o] = r.getVelocity()), n;
}
function El(e, n, r) {
  const o = e.getProps();
  return Bf(o, n, r !== void 0 ? r : o.custom, lS(e), uS(e));
}
const cS = "framerAppearId", fS = "data-" + jf(cS);
let dS = dt, zf = dt;
const Or = (e) => e * 1e3, er = (e) => e / 1e3, pS = {
  current: !1
}, Fy = (e) => Array.isArray(e) && typeof e[0] == "number";
function Iy(e) {
  return !!(!e || typeof e == "string" && jy[e] || Fy(e) || Array.isArray(e) && e.every(Iy));
}
const Wo = ([e, n, r, o]) => `cubic-bezier(${e}, ${n}, ${r}, ${o})`, jy = {
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
function Vy(e) {
  if (e)
    return Fy(e) ? Wo(e) : Array.isArray(e) ? e.map(Vy) : jy[e];
}
function hS(e, n, r, { delay: o = 0, duration: a, repeat: c = 0, repeatType: f = "loop", ease: m, times: y } = {}) {
  const g = { [n]: r };
  y && (g.offset = y);
  const x = Vy(m);
  return Array.isArray(x) && (g.easing = x), e.animate(g, {
    delay: o,
    duration: a,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  });
}
const ym = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Ec = {}, By = {};
for (const e in ym)
  By[e] = () => (Ec[e] === void 0 && (Ec[e] = ym[e]()), Ec[e]);
function mS(e, { repeat: n, repeatType: r = "loop" }) {
  const o = n && r !== "loop" && n % 2 === 1 ? 0 : e.length - 1;
  return e[o];
}
const zy = (e, n, r) => (((1 - 3 * r + 3 * n) * e + (3 * r - 6 * n)) * e + 3 * n) * e, gS = 1e-7, yS = 12;
function vS(e, n, r, o, a) {
  let c, f, m = 0;
  do
    f = n + (r - n) / 2, c = zy(f, o, a) - e, c > 0 ? r = f : n = f;
  while (Math.abs(c) > gS && ++m < yS);
  return f;
}
function fs(e, n, r, o) {
  if (e === n && r === o)
    return dt;
  const a = (c) => vS(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : zy(a(c), n, o);
}
const xS = fs(0.42, 0, 1, 1), wS = fs(0, 0, 0.58, 1), $y = fs(0.42, 0, 0.58, 1), _S = (e) => Array.isArray(e) && typeof e[0] != "number", Uy = (e) => (n) => n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2, Hy = (e) => (n) => 1 - e(1 - n), Wy = (e) => 1 - Math.sin(Math.acos(e)), $f = Hy(Wy), SS = Uy($f), qy = fs(0.33, 1.53, 0.69, 0.99), Uf = Hy(qy), kS = Uy(Uf), TS = (e) => (e *= 2) < 1 ? 0.5 * Uf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), CS = {
  linear: dt,
  easeIn: xS,
  easeInOut: $y,
  easeOut: wS,
  circIn: Wy,
  circInOut: SS,
  circOut: $f,
  backIn: Uf,
  backInOut: kS,
  backOut: qy,
  anticipate: TS
}, vm = (e) => {
  if (Array.isArray(e)) {
    zf(e.length === 4);
    const [n, r, o, a] = e;
    return fs(n, r, o, a);
  } else if (typeof e == "string")
    return CS[e];
  return e;
}, Hf = (e, n) => (r) => !!(us(r) && k_.test(r) && r.startsWith(e) || n && Object.prototype.hasOwnProperty.call(r, n)), Gy = (e, n, r) => (o) => {
  if (!us(o))
    return o;
  const [a, c, f, m] = o.match(kl);
  return {
    [e]: parseFloat(a),
    [n]: parseFloat(c),
    [r]: parseFloat(f),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, ES = (e) => Lr(0, 255, e), Ac = {
  ...ei,
  transform: (e) => Math.round(ES(e))
}, Jr = {
  test: Hf("rgb", "red"),
  parse: Gy("red", "green", "blue"),
  transform: ({ red: e, green: n, blue: r, alpha: o = 1 }) => "rgba(" + Ac.transform(e) + ", " + Ac.transform(n) + ", " + Ac.transform(r) + ", " + Ko(Go.transform(o)) + ")"
};
function AS(e) {
  let n = "", r = "", o = "", a = "";
  return e.length > 5 ? (n = e.substring(1, 3), r = e.substring(3, 5), o = e.substring(5, 7), a = e.substring(7, 9)) : (n = e.substring(1, 2), r = e.substring(2, 3), o = e.substring(3, 4), a = e.substring(4, 5), n += n, r += r, o += o, a += a), {
    red: parseInt(n, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const of = {
  test: Hf("#"),
  parse: AS,
  transform: Jr.transform
}, Mi = {
  test: Hf("hsl", "hue"),
  parse: Gy("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: n, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + Dn.transform(Ko(n)) + ", " + Dn.transform(Ko(r)) + ", " + Ko(Go.transform(o)) + ")"
}, Mt = {
  test: (e) => Jr.test(e) || of.test(e) || Mi.test(e),
  parse: (e) => Jr.test(e) ? Jr.parse(e) : Mi.test(e) ? Mi.parse(e) : of.parse(e),
  transform: (e) => us(e) ? e : e.hasOwnProperty("red") ? Jr.transform(e) : Mi.transform(e)
}, Ze = (e, n, r) => -r * e + r * n + e;
function bc(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function bS({ hue: e, saturation: n, lightness: r, alpha: o }) {
  e /= 360, n /= 100, r /= 100;
  let a = 0, c = 0, f = 0;
  if (!n)
    a = c = f = r;
  else {
    const m = r < 0.5 ? r * (1 + n) : r + n - r * n, y = 2 * r - m;
    a = bc(y, m, e + 1 / 3), c = bc(y, m, e), f = bc(y, m, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
const Pc = (e, n, r) => {
  const o = e * e;
  return Math.sqrt(Math.max(0, r * (n * n - o) + o));
}, PS = [of, Jr, Mi], RS = (e) => PS.find((n) => n.test(e));
function xm(e) {
  const n = RS(e);
  let r = n.parse(e);
  return n === Mi && (r = bS(r)), r;
}
const Ky = (e, n) => {
  const r = xm(e), o = xm(n), a = { ...r };
  return (c) => (a.red = Pc(r.red, o.red, c), a.green = Pc(r.green, o.green, c), a.blue = Pc(r.blue, o.blue, c), a.alpha = Ze(r.alpha, o.alpha, c), Jr.transform(a));
};
function OS(e) {
  var n, r;
  return isNaN(e) && us(e) && (((n = e.match(kl)) === null || n === void 0 ? void 0 : n.length) || 0) + (((r = e.match(vy)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Qy = {
  regex: __,
  countKey: "Vars",
  token: "${v}",
  parse: dt
}, Yy = {
  regex: vy,
  countKey: "Colors",
  token: "${c}",
  parse: Mt.parse
}, Xy = {
  regex: kl,
  countKey: "Numbers",
  token: "${n}",
  parse: ei.parse
};
function Rc(e, { regex: n, countKey: r, token: o, parse: a }) {
  const c = e.tokenised.match(n);
  c && (e["num" + r] = c.length, e.tokenised = e.tokenised.replace(n, o), e.values.push(...c.map(a)));
}
function tl(e) {
  const n = e.toString(), r = {
    value: n,
    tokenised: n,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Rc(r, Qy), Rc(r, Yy), Rc(r, Xy), r;
}
function Jy(e) {
  return tl(e).values;
}
function Zy(e) {
  const { values: n, numColors: r, numVars: o, tokenised: a } = tl(e), c = n.length;
  return (f) => {
    let m = a;
    for (let y = 0; y < c; y++)
      y < o ? m = m.replace(Qy.token, f[y]) : y < o + r ? m = m.replace(Yy.token, Mt.transform(f[y])) : m = m.replace(Xy.token, Ko(f[y]));
    return m;
  };
}
const LS = (e) => typeof e == "number" ? 0 : e;
function MS(e) {
  const n = Jy(e);
  return Zy(e)(n.map(LS));
}
const Mr = {
  test: OS,
  parse: Jy,
  createTransformer: Zy,
  getAnimatableNone: MS
}, e0 = (e, n) => (r) => `${r > 0 ? n : e}`;
function t0(e, n) {
  return typeof e == "number" ? (r) => Ze(e, n, r) : Mt.test(e) ? Ky(e, n) : e.startsWith("var(") ? e0(e, n) : r0(e, n);
}
const n0 = (e, n) => {
  const r = [...e], o = r.length, a = e.map((c, f) => t0(c, n[f]));
  return (c) => {
    for (let f = 0; f < o; f++)
      r[f] = a[f](c);
    return r;
  };
}, DS = (e, n) => {
  const r = { ...e, ...n }, o = {};
  for (const a in r)
    e[a] !== void 0 && n[a] !== void 0 && (o[a] = t0(e[a], n[a]));
  return (a) => {
    for (const c in o)
      r[c] = o[c](a);
    return r;
  };
}, r0 = (e, n) => {
  const r = Mr.createTransformer(n), o = tl(e), a = tl(n);
  return o.numVars === a.numVars && o.numColors === a.numColors && o.numNumbers >= a.numNumbers ? Rr(n0(o.values, a.values), r) : e0(e, n);
}, os = (e, n, r) => {
  const o = n - e;
  return o === 0 ? 1 : (r - e) / o;
}, wm = (e, n) => (r) => Ze(e, n, r);
function NS(e) {
  return typeof e == "number" ? wm : typeof e == "string" ? Mt.test(e) ? Ky : r0 : Array.isArray(e) ? n0 : typeof e == "object" ? DS : wm;
}
function FS(e, n, r) {
  const o = [], a = r || NS(e[0]), c = e.length - 1;
  for (let f = 0; f < c; f++) {
    let m = a(e[f], e[f + 1]);
    if (n) {
      const y = Array.isArray(n) ? n[f] || dt : n;
      m = Rr(y, m);
    }
    o.push(m);
  }
  return o;
}
function i0(e, n, { clamp: r = !0, ease: o, mixer: a } = {}) {
  const c = e.length;
  if (zf(c === n.length), c === 1)
    return () => n[0];
  e[0] > e[c - 1] && (e = [...e].reverse(), n = [...n].reverse());
  const f = FS(n, o, a), m = f.length, y = (g) => {
    let x = 0;
    if (m > 1)
      for (; x < e.length - 2 && !(g < e[x + 1]); x++)
        ;
    const u = os(e[x], e[x + 1], g);
    return f[x](u);
  };
  return r ? (g) => y(Lr(e[0], e[c - 1], g)) : y;
}
function IS(e, n) {
  const r = e[e.length - 1];
  for (let o = 1; o <= n; o++) {
    const a = os(0, n, o);
    e.push(Ze(r, 1, a));
  }
}
function jS(e) {
  const n = [0];
  return IS(n, e.length - 1), n;
}
function VS(e, n) {
  return e.map((r) => r * n);
}
function BS(e, n) {
  return e.map(() => n || $y).splice(0, e.length - 1);
}
function nl({ duration: e = 300, keyframes: n, times: r, ease: o = "easeInOut" }) {
  const a = _S(o) ? o.map(vm) : vm(o), c = {
    done: !1,
    value: n[0]
  }, f = VS(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === n.length ? r : jS(n),
    e
  ), m = i0(f, n, {
    ease: Array.isArray(a) ? a : BS(n, a)
  });
  return {
    calculatedDuration: e,
    next: (y) => (c.value = m(y), c.done = y >= e, c)
  };
}
function o0(e, n) {
  return n ? e * (1e3 / n) : 0;
}
const zS = 5;
function s0(e, n, r) {
  const o = Math.max(n - zS, 0);
  return o0(r - e(o), n - o);
}
const Oc = 1e-3, $S = 0.01, _m = 10, US = 0.05, HS = 1;
function WS({ duration: e = 800, bounce: n = 0.25, velocity: r = 0, mass: o = 1 }) {
  let a, c;
  dS(e <= Or(_m));
  let f = 1 - n;
  f = Lr(US, HS, f), e = Lr($S, _m, er(e)), f < 1 ? (a = (g) => {
    const x = g * f, u = x * e, p = x - r, v = sf(g, f), w = Math.exp(-u);
    return Oc - p / v * w;
  }, c = (g) => {
    const u = g * f * e, p = u * r + r, v = Math.pow(f, 2) * Math.pow(g, 2) * e, w = Math.exp(-u), S = sf(Math.pow(g, 2), f);
    return (-a(g) + Oc > 0 ? -1 : 1) * ((p - v) * w) / S;
  }) : (a = (g) => {
    const x = Math.exp(-g * e), u = (g - r) * e + 1;
    return -Oc + x * u;
  }, c = (g) => {
    const x = Math.exp(-g * e), u = (r - g) * (e * e);
    return x * u;
  });
  const m = 5 / e, y = GS(a, c, m);
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
const qS = 12;
function GS(e, n, r) {
  let o = r;
  for (let a = 1; a < qS; a++)
    o = o - e(o) / n(o);
  return o;
}
function sf(e, n) {
  return e * Math.sqrt(1 - n * n);
}
const KS = ["duration", "bounce"], QS = ["stiffness", "damping", "mass"];
function Sm(e, n) {
  return n.some((r) => e[r] !== void 0);
}
function YS(e) {
  let n = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Sm(e, QS) && Sm(e, KS)) {
    const r = WS(e);
    n = {
      ...n,
      ...r,
      velocity: 0,
      mass: 1
    }, n.isResolvedFromDuration = !0;
  }
  return n;
}
function a0({ keyframes: e, restDelta: n, restSpeed: r, ...o }) {
  const a = e[0], c = e[e.length - 1], f = { done: !1, value: a }, { stiffness: m, damping: y, mass: g, velocity: x, duration: u, isResolvedFromDuration: p } = YS(o), v = x ? -er(x) : 0, w = y / (2 * Math.sqrt(m * g)), S = c - a, k = er(Math.sqrt(m / g)), T = Math.abs(S) < 5;
  r || (r = T ? 0.01 : 2), n || (n = T ? 5e-3 : 0.5);
  let A;
  if (w < 1) {
    const L = sf(k, w);
    A = (V) => {
      const H = Math.exp(-w * k * V);
      return c - H * ((v + w * k * S) / L * Math.sin(L * V) + S * Math.cos(L * V));
    };
  } else if (w === 1)
    A = (L) => c - Math.exp(-k * L) * (S + (v + k * S) * L);
  else {
    const L = k * Math.sqrt(w * w - 1);
    A = (V) => {
      const H = Math.exp(-w * k * V), J = Math.min(L * V, 300);
      return c - H * ((v + w * k * S) * Math.sinh(J) + L * S * Math.cosh(J)) / L;
    };
  }
  return {
    calculatedDuration: p && u || null,
    next: (L) => {
      const V = A(L);
      if (p)
        f.done = L >= u;
      else {
        let H = v;
        L !== 0 && (w < 1 ? H = s0(A, L, V) : H = 0);
        const J = Math.abs(H) <= r, K = Math.abs(c - V) <= n;
        f.done = J && K;
      }
      return f.value = f.done ? c : V, f;
    }
  };
}
function km({ keyframes: e, velocity: n = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: a = 10, bounceStiffness: c = 500, modifyTarget: f, min: m, max: y, restDelta: g = 0.5, restSpeed: x }) {
  const u = e[0], p = {
    done: !1,
    value: u
  }, v = (te) => m !== void 0 && te < m || y !== void 0 && te > y, w = (te) => m === void 0 ? y : y === void 0 || Math.abs(m - te) < Math.abs(y - te) ? m : y;
  let S = r * n;
  const k = u + S, T = f === void 0 ? k : f(k);
  T !== k && (S = T - u);
  const A = (te) => -S * Math.exp(-te / o), L = (te) => T + A(te), V = (te) => {
    const Z = A(te), Ce = L(te);
    p.done = Math.abs(Z) <= g, p.value = p.done ? T : Ce;
  };
  let H, J;
  const K = (te) => {
    v(p.value) && (H = te, J = a0({
      keyframes: [p.value, w(p.value)],
      velocity: s0(L, te, p.value),
      damping: a,
      stiffness: c,
      restDelta: g,
      restSpeed: x
    }));
  };
  return K(0), {
    calculatedDuration: null,
    next: (te) => {
      let Z = !1;
      return !J && H === void 0 && (Z = !0, V(te), K(te)), H !== void 0 && te > H ? J.next(te - H) : (!Z && V(te), p);
    }
  };
}
const XS = (e) => {
  const n = ({ timestamp: r }) => e(r);
  return {
    start: () => Ke.update(n, !0),
    stop: () => nr(n),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Je.isProcessing ? Je.timestamp : performance.now()
  };
}, Tm = 2e4;
function Cm(e) {
  let n = 0;
  const r = 50;
  let o = e.next(n);
  for (; !o.done && n < Tm; )
    n += r, o = e.next(n);
  return n >= Tm ? 1 / 0 : n;
}
const JS = {
  decay: km,
  inertia: km,
  tween: nl,
  keyframes: nl,
  spring: a0
};
function rl({ autoplay: e = !0, delay: n = 0, driver: r = XS, keyframes: o, type: a = "keyframes", repeat: c = 0, repeatDelay: f = 0, repeatType: m = "loop", onPlay: y, onStop: g, onComplete: x, onUpdate: u, ...p }) {
  let v = 1, w = !1, S, k;
  const T = () => {
    S && S(), k = new Promise((I) => {
      S = I;
    });
  };
  T();
  let A;
  const L = JS[a] || nl;
  let V;
  L !== nl && typeof o[0] != "number" && (V = i0([0, 100], o, {
    clamp: !1
  }), o = [0, 100]);
  const H = L({ ...p, keyframes: o });
  let J;
  m === "mirror" && (J = L({
    ...p,
    keyframes: [...o].reverse(),
    velocity: -(p.velocity || 0)
  }));
  let K = "idle", te = null, Z = null, Ce = null;
  H.calculatedDuration === null && c && (H.calculatedDuration = Cm(H));
  const { calculatedDuration: Le } = H;
  let pe = 1 / 0, le = 1 / 0;
  Le !== null && (pe = Le + f, le = pe * (c + 1) - f);
  let ae = 0;
  const ge = (I) => {
    if (Z === null)
      return;
    v > 0 && (Z = Math.min(Z, I)), te !== null ? ae = te : ae = (I - Z) * v;
    const ne = ae - n, ke = ne < 0;
    ae = Math.max(ne, 0), K === "finished" && te === null && (ae = le);
    let ve = ae, Oe = H;
    if (c) {
      const Qe = ae / pe;
      let xn = Math.floor(Qe), ut = Qe % 1;
      !ut && Qe >= 1 && (ut = 1), ut === 1 && xn--, xn = Math.min(xn, c + 1);
      const wn = !!(xn % 2);
      wn && (m === "reverse" ? (ut = 1 - ut, f && (ut -= f / pe)) : m === "mirror" && (Oe = J));
      let _n = Lr(0, 1, ut);
      ae > le && (_n = m === "reverse" && wn ? 1 : 0), ve = _n * pe;
    }
    const _e = ke ? { done: !1, value: o[0] } : Oe.next(ve);
    V && (_e.value = V(_e.value));
    let { done: Pe } = _e;
    !ke && Le !== null && (Pe = ae >= le);
    const Ae = te === null && (K === "finished" || K === "running" && Pe || v < 0 && ae <= 0);
    return u && u(_e.value), Ae && Y(), _e;
  }, Ee = () => {
    A && A.stop(), A = void 0;
  }, Se = () => {
    K = "idle", Ee(), T(), Z = Ce = null;
  }, Y = () => {
    K = "finished", x && x(), Ee(), T();
  }, ue = () => {
    if (w)
      return;
    A || (A = r(ge));
    const I = A.now();
    y && y(), te !== null ? Z = I - te : (!Z || K === "finished") && (Z = I), Ce = Z, te = null, K = "running", A.start();
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
      I = Or(I), ae = I, te !== null || !A || v === 0 ? te = I : Z = A.now() - I / v;
    },
    get duration() {
      const I = H.calculatedDuration === null ? Cm(H) : H.calculatedDuration;
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
    sample: (I) => (Z = 0, ge(I))
  };
  return b;
}
const ZS = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), ba = 10, ek = 2e4, tk = (e, n) => n.type === "spring" || e === "backgroundColor" || !Iy(n.ease);
function nk(e, n, { onUpdate: r, onComplete: o, ...a }) {
  if (!(By.waapi() && ZS.has(n) && !a.repeatDelay && a.repeatType !== "mirror" && a.damping !== 0 && a.type !== "inertia"))
    return !1;
  let f = !1, m, y;
  const g = () => {
    y = new Promise((T) => {
      m = T;
    });
  };
  g();
  let { keyframes: x, duration: u = 300, ease: p, times: v } = a;
  if (tk(n, a)) {
    const T = rl({
      ...a,
      repeat: 0,
      delay: 0
    });
    let A = { done: !1, value: x[0] };
    const L = [];
    let V = 0;
    for (; !A.done && V < ek; )
      A = T.sample(V), L.push(A.value), V += ba;
    v = void 0, x = L, u = V - ba, p = "linear";
  }
  const w = hS(e.owner.current, n, x, {
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
    ease: p,
    times: v
  }), S = () => w.cancel(), k = () => {
    Ke.update(S), m(), g();
  };
  return w.onfinish = () => {
    e.set(mS(x, a)), o && o(), k();
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
        const A = rl({
          ...a,
          autoplay: !1
        });
        e.setWithVelocity(A.sample(T - ba).value, A.sample(T).value, ba);
      }
      k();
    },
    complete: () => w.finish(),
    cancel: k
  };
}
function rk({ keyframes: e, delay: n, onUpdate: r, onComplete: o }) {
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
  return n ? rl({
    keyframes: [0, 1],
    duration: 0,
    delay: n,
    onComplete: a
  }) : a();
}
const ik = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, ok = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), sk = {
  type: "keyframes",
  duration: 0.8
}, ak = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, lk = (e, { keyframes: n }) => n.length > 2 ? sk : Zr.has(e) ? e.startsWith("scale") ? ok(n[1]) : ik : ak, af = (e, n) => e === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Mr.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url(")), uk = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ck(e) {
  const [n, r] = e.slice(0, -1).split("(");
  if (n === "drop-shadow")
    return e;
  const [o] = r.match(kl) || [];
  if (!o)
    return e;
  const a = r.replace(o, "");
  let c = uk.has(n) ? 1 : 0;
  return o !== r && (c *= 100), n + "(" + c + a + ")";
}
const fk = /([a-z-]*)\(.*?\)/g, lf = {
  ...Mr,
  getAnimatableNone: (e) => {
    const n = e.match(fk);
    return n ? n.map(ck).join(" ") : e;
  }
}, dk = {
  ...xy,
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
  filter: lf,
  WebkitFilter: lf
}, Wf = (e) => dk[e];
function l0(e, n) {
  let r = Wf(e);
  return r !== lf && (r = Mr), r.getAnimatableNone ? r.getAnimatableNone(n) : void 0;
}
const u0 = (e) => /^0[^.\s]+$/.test(e);
function pk(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || u0(e);
}
function hk(e, n, r, o) {
  const a = af(n, r);
  let c;
  Array.isArray(r) ? c = [...r] : c = [null, r];
  const f = o.from !== void 0 ? o.from : e.get();
  let m;
  const y = [];
  for (let g = 0; g < c.length; g++)
    c[g] === null && (c[g] = g === 0 ? f : c[g - 1]), pk(c[g]) && y.push(g), typeof c[g] == "string" && c[g] !== "none" && c[g] !== "0" && (m = c[g]);
  if (a && y.length && m)
    for (let g = 0; g < y.length; g++) {
      const x = y[g];
      c[x] = l0(n, m);
    }
  return c;
}
function mk({ when: e, delay: n, delayChildren: r, staggerChildren: o, staggerDirection: a, repeat: c, repeatType: f, repeatDelay: m, from: y, elapsed: g, ...x }) {
  return !!Object.keys(x).length;
}
function c0(e, n) {
  return e[n] || e.default || e;
}
const qf = (e, n, r, o = {}) => (a) => {
  const c = c0(o, e) || {}, f = c.delay || o.delay || 0;
  let { elapsed: m = 0 } = o;
  m = m - Or(f);
  const y = hk(n, e, r, c), g = y[0], x = y[y.length - 1], u = af(e, g), p = af(e, x);
  let v = {
    keyframes: y,
    velocity: n.getVelocity(),
    ease: "easeOut",
    ...c,
    delay: -m,
    onUpdate: (w) => {
      n.set(w), c.onUpdate && c.onUpdate(w);
    },
    onComplete: () => {
      a(), c.onComplete && c.onComplete();
    }
  };
  if (mk(c) || (v = {
    ...v,
    ...lk(e, v)
  }), v.duration && (v.duration = Or(v.duration)), v.repeatDelay && (v.repeatDelay = Or(v.repeatDelay)), !u || !p || pS.current || c.type === !1)
    return rk(v);
  if (n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate) {
    const w = nk(n, e, v);
    if (w)
      return w;
  }
  return rl(v);
};
function il(e) {
  return !!(Ut(e) && e.add);
}
const gk = (e) => /^\-?\d*\.?\d+$/.test(e);
function Gf(e, n) {
  e.indexOf(n) === -1 && e.push(n);
}
function Kf(e, n) {
  const r = e.indexOf(n);
  r > -1 && e.splice(r, 1);
}
class Qf {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return Gf(this.subscriptions, n), () => Kf(this.subscriptions, n);
  }
  notify(n, r, o) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1)
        this.subscriptions[0](n, r, o);
      else
        for (let c = 0; c < a; c++) {
          const f = this.subscriptions[c];
          f && f(n, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const yk = (e) => !isNaN(parseFloat(e));
class vk {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(n, r = {}) {
    this.version = "10.12.16", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (o, a = !0) => {
      this.prev = this.current, this.current = o;
      const { delta: c, timestamp: f } = Je;
      this.lastUpdated !== f && (this.timeDelta = c, this.lastUpdated = f, Ke.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), a && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Ke.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: o }) => {
      o !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = n, this.canTrackVelocity = yk(this.current), this.owner = r.owner;
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
  onChange(n) {
    return this.on("change", n);
  }
  on(n, r) {
    this.events[n] || (this.events[n] = new Qf());
    const o = this.events[n].add(r);
    return n === "change" ? () => {
      o(), Ke.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const n in this.events)
      this.events[n].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(n, r) {
    this.passiveEffect = n, this.stopPassiveEffect = r;
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
  set(n, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(n, r) : this.passiveEffect(n, this.updateAndNotify);
  }
  setWithVelocity(n, r, o) {
    this.set(r), this.prev = n, this.timeDelta = o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(n) {
    this.updateAndNotify(n), this.prev = n, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
      o0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  start(n) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = n(r), this.events.animationStart && this.events.animationStart.notify();
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
function $i(e, n) {
  return new vk(e, n);
}
const f0 = (e) => (n) => n.test(e), xk = {
  test: (e) => e === "auto",
  parse: (e) => e
}, d0 = [ei, ye, Dn, Cr, C_, T_, xk], Vo = (e) => d0.find(f0(e)), wk = [...d0, Mt, Mr], _k = (e) => wk.find(f0(e));
function Sk(e, n, r) {
  e.hasValue(n) ? e.getValue(n).set(r) : e.addValue(n, $i(r));
}
function kk(e, n) {
  const r = El(e, n);
  let { transitionEnd: o = {}, transition: a = {}, ...c } = r ? e.makeTargetAnimatable(r, !1) : {};
  c = { ...c, ...o };
  for (const f in c) {
    const m = V_(c[f]);
    Sk(e, f, m);
  }
}
function Tk(e, n, r) {
  var o, a;
  const c = Object.keys(n).filter((m) => !e.hasValue(m)), f = c.length;
  if (f)
    for (let m = 0; m < f; m++) {
      const y = c[m], g = n[y];
      let x = null;
      Array.isArray(g) && (x = g[0]), x === null && (x = (a = (o = r[y]) !== null && o !== void 0 ? o : e.readValue(y)) !== null && a !== void 0 ? a : n[y]), x != null && (typeof x == "string" && (gk(x) || u0(x)) ? x = parseFloat(x) : !_k(x) && Mr.test(g) && (x = l0(y, g)), e.addValue(y, $i(x, { owner: e })), r[y] === void 0 && (r[y] = x), x !== null && e.setBaseTarget(y, x));
    }
}
function Ck(e, n) {
  return n ? (n[e] || n.default || n).from : void 0;
}
function Ek(e, n, r) {
  const o = {};
  for (const a in e) {
    const c = Ck(a, n);
    if (c !== void 0)
      o[a] = c;
    else {
      const f = r.getValue(a);
      f && (o[a] = f.get());
    }
  }
  return o;
}
function Ak({ protectedKeys: e, needsAnimating: n }, r) {
  const o = e.hasOwnProperty(r) && n[r] !== !0;
  return n[r] = !1, o;
}
function p0(e, n, { delay: r = 0, transitionOverride: o, type: a } = {}) {
  let { transition: c = e.getDefaultTransition(), transitionEnd: f, ...m } = e.makeTargetAnimatable(n);
  const y = e.getValue("willChange");
  o && (c = o);
  const g = [], x = a && e.animationState && e.animationState.getState()[a];
  for (const u in m) {
    const p = e.getValue(u), v = m[u];
    if (!p || v === void 0 || x && Ak(x, u))
      continue;
    const w = { delay: r, elapsed: 0, ...c };
    if (window.HandoffAppearAnimations && !p.hasAnimated) {
      const k = e.getProps()[fS];
      k && (w.elapsed = window.HandoffAppearAnimations(k, u, p, Ke));
    }
    p.start(qf(u, p, v, e.shouldReduceMotion && Zr.has(u) ? { type: !1 } : w));
    const S = p.animation;
    il(y) && (y.add(u), S.then(() => y.remove(u))), g.push(S);
  }
  return f && Promise.all(g).then(() => {
    f && kk(e, f);
  }), g;
}
function uf(e, n, r = {}) {
  const o = El(e, n, r.custom);
  let { transition: a = e.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (a = r.transitionOverride);
  const c = o ? () => Promise.all(p0(e, o, r)) : () => Promise.resolve(), f = e.variantChildren && e.variantChildren.size ? (y = 0) => {
    const { delayChildren: g = 0, staggerChildren: x, staggerDirection: u } = a;
    return bk(e, n, g + y, x, u, r);
  } : () => Promise.resolve(), { when: m } = a;
  if (m) {
    const [y, g] = m === "beforeChildren" ? [c, f] : [f, c];
    return y().then(() => g());
  } else
    return Promise.all([c(), f(r.delay)]);
}
function bk(e, n, r = 0, o = 0, a = 1, c) {
  const f = [], m = (e.variantChildren.size - 1) * o, y = a === 1 ? (g = 0) => g * o : (g = 0) => m - g * o;
  return Array.from(e.variantChildren).sort(Pk).forEach((g, x) => {
    g.notify("AnimationStart", n), f.push(uf(g, n, {
      ...c,
      delay: r + y(x)
    }).then(() => g.notify("AnimationComplete", n)));
  }), Promise.all(f);
}
function Pk(e, n) {
  return e.sortNodePosition(n);
}
function Rk(e, n, r = {}) {
  e.notify("AnimationStart", n);
  let o;
  if (Array.isArray(n)) {
    const a = n.map((c) => uf(e, c, r));
    o = Promise.all(a);
  } else if (typeof n == "string")
    o = uf(e, n, r);
  else {
    const a = typeof n == "function" ? El(e, n, r.custom) : n;
    o = Promise.all(p0(e, a, r));
  }
  return o.then(() => e.notify("AnimationComplete", n));
}
const Ok = [...Of].reverse(), Lk = Of.length;
function Mk(e) {
  return (n) => Promise.all(n.map(({ animation: r, options: o }) => Rk(e, r, o)));
}
function Dk(e) {
  let n = Mk(e);
  const r = Fk();
  let o = !0;
  const a = (y, g) => {
    const x = El(e, g);
    if (x) {
      const { transition: u, transitionEnd: p, ...v } = x;
      y = { ...y, ...v, ...p };
    }
    return y;
  };
  function c(y) {
    n = y(e);
  }
  function f(y, g) {
    const x = e.getProps(), u = e.getVariantContext(!0) || {}, p = [], v = /* @__PURE__ */ new Set();
    let w = {}, S = 1 / 0;
    for (let T = 0; T < Lk; T++) {
      const A = Ok[T], L = r[A], V = x[A] !== void 0 ? x[A] : u[A], H = ts(V), J = A === g ? L.isActive : null;
      J === !1 && (S = T);
      let K = V === u[A] && V !== x[A] && H;
      if (K && o && e.manuallyAnimateOnMount && (K = !1), L.protectedKeys = { ...w }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && J === null || // If we didn't and don't have any defined prop for this animation type
      !V && !L.prevProp || // Or if the prop doesn't define an animation
      _l(V) || typeof V == "boolean")
        continue;
      const te = Nk(L.prevProp, V);
      let Z = te || // If we're making this variant active, we want to always make it active
      A === g && L.isActive && !K && H || // If we removed a higher-priority variant (i is in reverse order)
      T > S && H;
      const Ce = Array.isArray(V) ? V : [V];
      let Le = Ce.reduce(a, {});
      J === !1 && (Le = {});
      const { prevResolvedValues: pe = {} } = L, le = {
        ...pe,
        ...Le
      }, ae = (ge) => {
        Z = !0, v.delete(ge), L.needsAnimating[ge] = !0;
      };
      for (const ge in le) {
        const Ee = Le[ge], Se = pe[ge];
        w.hasOwnProperty(ge) || (Ee !== Se ? el(Ee) && el(Se) ? !Ny(Ee, Se) || te ? ae(ge) : L.protectedKeys[ge] = !0 : Ee !== void 0 ? ae(ge) : v.add(ge) : Ee !== void 0 && v.has(ge) ? ae(ge) : L.protectedKeys[ge] = !0);
      }
      L.prevProp = V, L.prevResolvedValues = Le, L.isActive && (w = { ...w, ...Le }), o && e.blockInitialAnimation && (Z = !1), Z && !K && p.push(...Ce.map((ge) => ({
        animation: ge,
        options: { type: A, ...y }
      })));
    }
    if (v.size) {
      const T = {};
      v.forEach((A) => {
        const L = e.getBaseTarget(A);
        L !== void 0 && (T[A] = L);
      }), p.push({ animation: T });
    }
    let k = !!p.length;
    return o && x.initial === !1 && !e.manuallyAnimateOnMount && (k = !1), o = !1, k ? n(p) : Promise.resolve();
  }
  function m(y, g, x) {
    var u;
    if (r[y].isActive === g)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((v) => {
      var w;
      return (w = v.animationState) === null || w === void 0 ? void 0 : w.setActive(y, g);
    }), r[y].isActive = g;
    const p = f(x, y);
    for (const v in r)
      r[v].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: f,
    setActive: m,
    setAnimateFunction: c,
    getState: () => r
  };
}
function Nk(e, n) {
  return typeof n == "string" ? n !== e : Array.isArray(n) ? !Ny(n, e) : !1;
}
function Qr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Fk() {
  return {
    animate: Qr(!0),
    whileInView: Qr(),
    whileHover: Qr(),
    whileTap: Qr(),
    whileDrag: Qr(),
    whileFocus: Qr(),
    exit: Qr()
  };
}
class Ik extends Dr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(n) {
    super(n), n.animationState || (n.animationState = Dk(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    this.unmount(), _l(n) && (this.unmount = n.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    n !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let jk = 0;
class Vk extends Dr {
  constructor() {
    super(...arguments), this.id = jk++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: n, onExitComplete: r, custom: o } = this.node.presenceContext, { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === a)
      return;
    const c = this.node.animationState.setActive("exit", !n, { custom: o ?? this.node.getProps().custom });
    r && !n && c.then(() => r(this.id));
  }
  mount() {
    const { register: n } = this.node.presenceContext || {};
    n && (this.unmount = n(this.id));
  }
  unmount() {
  }
}
const Bk = {
  animation: {
    Feature: Ik
  },
  exit: {
    Feature: Vk
  }
}, Em = (e, n) => Math.abs(e - n);
function zk(e, n) {
  const r = Em(e.x, n.x), o = Em(e.y, n.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class h0 {
  constructor(n, r, { transformPagePoint: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Mc(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, u = zk(g.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !u)
        return;
      const { point: p } = g, { timestamp: v } = Je;
      this.history.push({ ...p, timestamp: v });
      const { onStart: w, onMove: S } = this.handlers;
      x || (w && w(this.lastMoveEvent, g), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, g);
    }, this.handlePointerMove = (g, x) => {
      this.lastMoveEvent = g, this.lastMoveEventInfo = Lc(x, this.transformPagePoint), Ke.update(this.updatePoint, !0);
    }, this.handlePointerUp = (g, x) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: u, onSessionEnd: p } = this.handlers, v = Mc(g.type === "pointercancel" ? this.lastMoveEventInfo : Lc(x, this.transformPagePoint), this.history);
      this.startEvent && u && u(g, v), p && p(g, v);
    }, !Py(n))
      return;
    this.handlers = r, this.transformPagePoint = o;
    const a = Tl(n), c = Lc(a, this.transformPagePoint), { point: f } = c, { timestamp: m } = Je;
    this.history = [{ ...f, timestamp: m }];
    const { onSessionStart: y } = r;
    y && y(n, Mc(c, this.history)), this.removeListeners = Rr(Zn(window, "pointermove", this.handlePointerMove), Zn(window, "pointerup", this.handlePointerUp), Zn(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), nr(this.updatePoint);
  }
}
function Lc(e, n) {
  return n ? { point: n(e.point) } : e;
}
function Am(e, n) {
  return { x: e.x - n.x, y: e.y - n.y };
}
function Mc({ point: e }, n) {
  return {
    point: e,
    delta: Am(e, m0(n)),
    offset: Am(e, $k(n)),
    velocity: Uk(n, 0.1)
  };
}
function $k(e) {
  return e[0];
}
function m0(e) {
  return e[e.length - 1];
}
function Uk(e, n) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, o = null;
  const a = m0(e);
  for (; r >= 0 && (o = e[r], !(a.timestamp - o.timestamp > Or(n))); )
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
function cf(e, n = 0, r = 0.01) {
  return Math.abs(e - n) <= r;
}
function bm(e, n, r, o = 0.5) {
  e.origin = o, e.originPoint = Ze(n.min, n.max, e.origin), e.scale = Qt(r) / Qt(n), (cf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ze(r.min, r.max, e.origin) - e.originPoint, (cf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Qo(e, n, r, o) {
  bm(e.x, n.x, r.x, o ? o.originX : void 0), bm(e.y, n.y, r.y, o ? o.originY : void 0);
}
function Pm(e, n, r) {
  e.min = r.min + n.min, e.max = e.min + Qt(n);
}
function Hk(e, n, r) {
  Pm(e.x, n.x, r.x), Pm(e.y, n.y, r.y);
}
function Rm(e, n, r) {
  e.min = n.min - r.min, e.max = e.min + Qt(n);
}
function Yo(e, n, r) {
  Rm(e.x, n.x, r.x), Rm(e.y, n.y, r.y);
}
function Wk(e, { min: n, max: r }, o) {
  return n !== void 0 && e < n ? e = o ? Ze(n, e, o.min) : Math.max(e, n) : r !== void 0 && e > r && (e = o ? Ze(r, e, o.max) : Math.min(e, r)), e;
}
function Om(e, n, r) {
  return {
    min: n !== void 0 ? e.min + n : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function qk(e, { top: n, left: r, bottom: o, right: a }) {
  return {
    x: Om(e.x, r, a),
    y: Om(e.y, n, o)
  };
}
function Lm(e, n) {
  let r = n.min - e.min, o = n.max - e.max;
  return n.max - n.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
}
function Gk(e, n) {
  return {
    x: Lm(e.x, n.x),
    y: Lm(e.y, n.y)
  };
}
function Kk(e, n) {
  let r = 0.5;
  const o = Qt(e), a = Qt(n);
  return a > o ? r = os(n.min, n.max - o, e.min) : o > a && (r = os(e.min, e.max - a, n.min)), Lr(0, 1, r);
}
function Qk(e, n) {
  const r = {};
  return n.min !== void 0 && (r.min = n.min - e.min), n.max !== void 0 && (r.max = n.max - e.min), r;
}
const ff = 0.35;
function Yk(e = ff) {
  return e === !1 ? e = 0 : e === !0 && (e = ff), {
    x: Mm(e, "left", "right"),
    y: Mm(e, "top", "bottom")
  };
}
function Mm(e, n, r) {
  return {
    min: Dm(e, n),
    max: Dm(e, r)
  };
}
function Dm(e, n) {
  return typeof e == "number" ? e : e[n] || 0;
}
const Nm = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Di = () => ({
  x: Nm(),
  y: Nm()
}), Fm = () => ({ min: 0, max: 0 }), ot = () => ({
  x: Fm(),
  y: Fm()
});
function bn(e) {
  return [e("x"), e("y")];
}
function g0({ top: e, left: n, right: r, bottom: o }) {
  return {
    x: { min: n, max: r },
    y: { min: e, max: o }
  };
}
function Xk({ x: e, y: n }) {
  return { top: n.min, right: e.max, bottom: n.max, left: e.min };
}
function Jk(e, n) {
  if (!n)
    return e;
  const r = n({ x: e.left, y: e.top }), o = n({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: o.y,
    right: o.x
  };
}
function Dc(e) {
  return e === void 0 || e === 1;
}
function df({ scale: e, scaleX: n, scaleY: r }) {
  return !Dc(e) || !Dc(n) || !Dc(r);
}
function Yr(e) {
  return df(e) || y0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function y0(e) {
  return Im(e.x) || Im(e.y);
}
function Im(e) {
  return e && e !== "0%";
}
function ol(e, n, r) {
  const o = e - r, a = n * o;
  return r + a;
}
function jm(e, n, r, o, a) {
  return a !== void 0 && (e = ol(e, a, o)), ol(e, r, o) + n;
}
function pf(e, n = 0, r = 1, o, a) {
  e.min = jm(e.min, n, r, o, a), e.max = jm(e.max, n, r, o, a);
}
function v0(e, { x: n, y: r }) {
  pf(e.x, n.translate, n.scale, n.originPoint), pf(e.y, r.translate, r.scale, r.originPoint);
}
function Zk(e, n, r, o = !1) {
  const a = r.length;
  if (!a)
    return;
  n.x = n.y = 1;
  let c, f;
  for (let m = 0; m < a; m++) {
    c = r[m], f = c.projectionDelta;
    const y = c.instance;
    y && y.style && y.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && Ni(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), f && (n.x *= f.x.scale, n.y *= f.y.scale, v0(e, f)), o && Yr(c.latestValues) && Ni(e, c.latestValues));
  }
  n.x = Vm(n.x), n.y = Vm(n.y);
}
function Vm(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Ar(e, n) {
  e.min = e.min + n, e.max = e.max + n;
}
function Bm(e, n, [r, o, a]) {
  const c = n[a] !== void 0 ? n[a] : 0.5, f = Ze(e.min, e.max, c);
  pf(e, n[r], n[o], f, n.scale);
}
const eT = ["x", "scaleX", "originX"], tT = ["y", "scaleY", "originY"];
function Ni(e, n) {
  Bm(e.x, n, eT), Bm(e.y, n, tT);
}
function x0(e, n) {
  return g0(Jk(e.getBoundingClientRect(), n));
}
function nT(e, n, r) {
  const o = x0(e, r), { scroll: a } = n;
  return a && (Ar(o.x, a.offset.x), Ar(o.y, a.offset.y)), o;
}
const rT = /* @__PURE__ */ new WeakMap();
class iT {
  constructor(n) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ot(), this.visualElement = n;
  }
  start(n, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const a = (y) => {
      this.stopAnimation(), r && this.snapToCursor(Tl(y, "page").point);
    }, c = (y, g) => {
      const { drag: x, dragPropagation: u, onDragStart: p } = this.getProps();
      if (x && !u && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Oy(x), !this.openGlobalLock))
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
      }), p && Ke.update(() => p(y, g), !1, !0);
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, f = (y, g) => {
      const { dragPropagation: x, dragDirectionLock: u, onDirectionLock: p, onDrag: v } = this.getProps();
      if (!x && !this.openGlobalLock)
        return;
      const { offset: w } = g;
      if (u && this.currentDirection === null) {
        this.currentDirection = oT(w), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", g.point, w), this.updateAxis("y", g.point, w), this.visualElement.render(), v && v(y, g);
    }, m = (y, g) => this.stop(y, g);
    this.panSession = new h0(n, {
      onSessionStart: a,
      onStart: c,
      onMove: f,
      onSessionEnd: m
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(n, r) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: a } = r;
    this.startAnimation(a);
    const { onDragEnd: c } = this.getProps();
    c && Ke.update(() => c(n, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: r } = this.visualElement;
    n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(n, r, o) {
    const { drag: a } = this.getProps();
    if (!o || !Pa(n, a, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(n);
    let f = this.originPoint[n] + o[n];
    this.constraints && this.constraints[n] && (f = Wk(f, this.constraints[n], this.elastic[n])), c.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: n, dragElastic: r } = this.getProps(), { layout: o } = this.visualElement.projection || {}, a = this.constraints;
    n && Li(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = qk(o.layoutBox, n) : this.constraints = !1, this.elastic = Yk(r), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && bn((c) => {
      this.getAxisMotionValue(c) && (this.constraints[c] = Qk(o.layoutBox[c], this.constraints[c]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: r } = this.getProps();
    if (!n || !Li(n))
      return !1;
    const o = n.current, { projection: a } = this.visualElement;
    if (!a || !a.layout)
      return !1;
    const c = nT(o, a.root, this.visualElement.getTransformPagePoint());
    let f = Gk(a.layout.layoutBox, c);
    if (r) {
      const m = r(Xk(f));
      this.hasMutatedConstraints = !!m, m && (f = g0(m));
    }
    return f;
  }
  startAnimation(n) {
    const { drag: r, dragMomentum: o, dragElastic: a, dragTransition: c, dragSnapToOrigin: f, onDragTransitionEnd: m } = this.getProps(), y = this.constraints || {}, g = bn((x) => {
      if (!Pa(x, r, this.currentDirection))
        return;
      let u = y && y[x] || {};
      f && (u = { min: 0, max: 0 });
      const p = a ? 200 : 1e6, v = a ? 40 : 1e7, w = {
        type: "inertia",
        velocity: o ? n[x] : 0,
        bounceStiffness: p,
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
  startAxisValueAnimation(n, r) {
    const o = this.getAxisMotionValue(n);
    return o.start(qf(n, o, 0, r));
  }
  stopAnimation() {
    bn((n) => this.getAxisMotionValue(n).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(n) {
    const r = "_drag" + n.toUpperCase(), o = this.visualElement.getProps(), a = o[r];
    return a || this.visualElement.getValue(n, (o.initial ? o.initial[n] : void 0) || 0);
  }
  snapToCursor(n) {
    bn((r) => {
      const { drag: o } = this.getProps();
      if (!Pa(r, o, this.currentDirection))
        return;
      const { projection: a } = this.visualElement, c = this.getAxisMotionValue(r);
      if (a && a.layout) {
        const { min: f, max: m } = a.layout.layoutBox[r];
        c.set(n[r] - Ze(f, m, 0.5));
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
    const { drag: n, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!Li(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    bn((f) => {
      const m = this.getAxisMotionValue(f);
      if (m) {
        const y = m.get();
        a[f] = Kk({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), bn((f) => {
      if (!Pa(f, n, null))
        return;
      const m = this.getAxisMotionValue(f), { min: y, max: g } = this.constraints[f];
      m.set(Ze(y, g, a[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    rT.set(this.visualElement, this);
    const n = this.visualElement.current, r = Zn(n, "pointerdown", (y) => {
      const { drag: g, dragListener: x = !0 } = this.getProps();
      g && x && this.start(y);
    }), o = () => {
      const { dragConstraints: y } = this.getProps();
      Li(y) && (this.constraints = this.resolveRefConstraints());
    }, { projection: a } = this.visualElement, c = a.addEventListener("measure", o);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), o();
    const f = Jn(window, "resize", () => this.scalePositionWithinConstraints()), m = a.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: g }) => {
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
    const n = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: a = !1, dragConstraints: c = !1, dragElastic: f = ff, dragMomentum: m = !0 } = n;
    return {
      ...n,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: a,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: m
    };
  }
}
function Pa(e, n, r) {
  return (n === !0 || n === e) && (r === null || r === e);
}
function oT(e, n = 10) {
  let r = null;
  return Math.abs(e.y) > n ? r = "y" : Math.abs(e.x) > n && (r = "x"), r;
}
class sT extends Dr {
  constructor(n) {
    super(n), this.removeGroupControls = dt, this.removeListeners = dt, this.controls = new iT(n);
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || dt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const zm = (e) => (n, r) => {
  e && Ke.update(() => e(n, r));
};
class aT extends Dr {
  constructor() {
    super(...arguments), this.removePointerDownListener = dt;
  }
  onPointerDown(n) {
    this.session = new h0(n, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: n, onPanStart: r, onPan: o, onPanEnd: a } = this.node.getProps();
    return {
      onSessionStart: zm(n),
      onStart: zm(r),
      onMove: o,
      onEnd: (c, f) => {
        delete this.session, a && Ke.update(() => a(c, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zn(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function lT() {
  const e = N.useContext(xl);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = e, a = N.useId();
  return N.useEffect(() => o(a), []), !n && r ? [!1, () => r && r(a)] : [!0];
}
const Va = {
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
function $m(e, n) {
  return n.max === n.min ? 0 : e / (n.max - n.min) * 100;
}
const Bo = {
  correct: (e, n) => {
    if (!n.target)
      return e;
    if (typeof e == "string")
      if (ye.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = $m(e, n.target.x), o = $m(e, n.target.y);
    return `${r}% ${o}%`;
  }
}, uT = {
  correct: (e, { treeScale: n, projectionDelta: r }) => {
    const o = e, a = Mr.parse(e);
    if (a.length > 5)
      return o;
    const c = Mr.createTransformer(e), f = typeof a[0] != "number" ? 1 : 0, m = r.x.scale * n.x, y = r.y.scale * n.y;
    a[0 + f] /= m, a[1 + f] /= y;
    const g = Ze(m, y, 0.5);
    return typeof a[2 + f] == "number" && (a[2 + f] /= g), typeof a[3 + f] == "number" && (a[3 + f] /= g), c(a);
  }
};
class cT extends yn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: n, layoutGroup: r, switchLayoutGroup: o, layoutId: a } = this.props, { projection: c } = n;
    y_(fT), c && (r.group && r.group.add(c), o && o.register && a && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), Va.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(n) {
    const { layoutDependency: r, visualElement: o, drag: a, isPresent: c } = this.props, f = o.projection;
    return f && (f.isPresent = c, a || n.layoutDependency !== r || r === void 0 ? f.willUpdate() : this.safeToRemove(), n.isPresent !== c && (c ? f.promote() : f.relegate() || Ke.postRender(() => {
      const m = f.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n && (n.root.didUpdate(), queueMicrotask(() => {
      !n.currentAnimation && n.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: n, layoutGroup: r, switchLayoutGroup: o } = this.props, { projection: a } = n;
    a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), o && o.deregister && o.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function w0(e) {
  const [n, r] = lT(), o = N.useContext(rs);
  return yn.createElement(cT, { ...e, layoutGroup: o, switchLayoutGroup: N.useContext(hy), isPresent: n, safeToRemove: r });
}
const fT = {
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
  boxShadow: uT
}, _0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], dT = _0.length, Um = (e) => typeof e == "string" ? parseFloat(e) : e, Hm = (e) => typeof e == "number" || ye.test(e);
function pT(e, n, r, o, a, c) {
  a ? (e.opacity = Ze(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    hT(o)
  ), e.opacityExit = Ze(n.opacity !== void 0 ? n.opacity : 1, 0, mT(o))) : c && (e.opacity = Ze(n.opacity !== void 0 ? n.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
  for (let f = 0; f < dT; f++) {
    const m = `border${_0[f]}Radius`;
    let y = Wm(n, m), g = Wm(r, m);
    if (y === void 0 && g === void 0)
      continue;
    y || (y = 0), g || (g = 0), y === 0 || g === 0 || Hm(y) === Hm(g) ? (e[m] = Math.max(Ze(Um(y), Um(g), o), 0), (Dn.test(g) || Dn.test(y)) && (e[m] += "%")) : e[m] = g;
  }
  (n.rotate || r.rotate) && (e.rotate = Ze(n.rotate || 0, r.rotate || 0, o));
}
function Wm(e, n) {
  return e[n] !== void 0 ? e[n] : e.borderRadius;
}
const hT = S0(0, 0.5, $f), mT = S0(0.5, 0.95, dt);
function S0(e, n, r) {
  return (o) => o < e ? 0 : o > n ? 1 : r(os(e, n, o));
}
function qm(e, n) {
  e.min = n.min, e.max = n.max;
}
function nn(e, n) {
  qm(e.x, n.x), qm(e.y, n.y);
}
function Gm(e, n, r, o, a) {
  return e -= n, e = ol(e, 1 / r, o), a !== void 0 && (e = ol(e, 1 / a, o)), e;
}
function gT(e, n = 0, r = 1, o = 0.5, a, c = e, f = e) {
  if (Dn.test(n) && (n = parseFloat(n), n = Ze(f.min, f.max, n / 100) - f.min), typeof n != "number")
    return;
  let m = Ze(c.min, c.max, o);
  e === c && (m -= n), e.min = Gm(e.min, n, r, m, a), e.max = Gm(e.max, n, r, m, a);
}
function Km(e, n, [r, o, a], c, f) {
  gT(e, n[r], n[o], n[a], n.scale, c, f);
}
const yT = ["x", "scaleX", "originX"], vT = ["y", "scaleY", "originY"];
function Qm(e, n, r, o) {
  Km(e.x, n, yT, r ? r.x : void 0, o ? o.x : void 0), Km(e.y, n, vT, r ? r.y : void 0, o ? o.y : void 0);
}
function Ym(e) {
  return e.translate === 0 && e.scale === 1;
}
function k0(e) {
  return Ym(e.x) && Ym(e.y);
}
function hf(e, n) {
  return e.x.min === n.x.min && e.x.max === n.x.max && e.y.min === n.y.min && e.y.max === n.y.max;
}
function Xm(e) {
  return Qt(e.x) / Qt(e.y);
}
class xT {
  constructor() {
    this.members = [];
  }
  add(n) {
    Gf(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (Kf(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(n) {
    const r = this.members.findIndex((a) => n === a);
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
  promote(n, r) {
    const o = this.lead;
    if (n !== o && (this.prevLead = o, this.lead = n, n.show(), o)) {
      o.instance && o.scheduleRender(), n.scheduleRender(), n.resumeFrom = o, r && (n.resumeFrom.preserveOpacity = !0), o.snapshot && (n.snapshot = o.snapshot, n.snapshot.latestValues = o.animationValues || o.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
      const { crossfade: a } = n.options;
      a === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: r, resumingFrom: o } = n;
      r.onExitComplete && r.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((n) => {
      n.instance && n.scheduleRender(!1);
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
function Jm(e, n, r) {
  let o = "";
  const a = e.x.translate / n.x, c = e.y.translate / n.y;
  if ((a || c) && (o = `translate3d(${a}px, ${c}px, 0) `), (n.x !== 1 || n.y !== 1) && (o += `scale(${1 / n.x}, ${1 / n.y}) `), r) {
    const { rotate: y, rotateX: g, rotateY: x } = r;
    y && (o += `rotate(${y}deg) `), g && (o += `rotateX(${g}deg) `), x && (o += `rotateY(${x}deg) `);
  }
  const f = e.x.scale * n.x, m = e.y.scale * n.y;
  return (f !== 1 || m !== 1) && (o += `scale(${f}, ${m})`), o || "none";
}
const wT = (e, n) => e.depth - n.depth;
class _T {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(n) {
    Gf(this.children, n), this.isDirty = !0;
  }
  remove(n) {
    Kf(this.children, n), this.isDirty = !0;
  }
  forEach(n) {
    this.isDirty && this.children.sort(wT), this.isDirty = !1, this.children.forEach(n);
  }
}
function ST(e, n) {
  const r = performance.now(), o = ({ timestamp: a }) => {
    const c = a - r;
    c >= n && (nr(o), e(c - n));
  };
  return Ke.read(o, !0), () => nr(o);
}
function kT(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function TT(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function CT(e, n, r) {
  const o = Ut(e) ? e : $i(e);
  return o.start(qf("", o, n, r)), o.animation;
}
const Zm = ["", "X", "Y", "Z"], eg = 1e3;
let ET = 0;
const Xr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function T0({ attachResizeListener: e, defaultParent: n, measureScroll: r, checkIsScrollRoot: o, resetTransform: a }) {
  return class {
    constructor(f = {}, m = n == null ? void 0 : n()) {
      this.id = ET++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Xr.totalNodes = Xr.resolvedTargetDeltas = Xr.recalculatedProjection = 0, this.nodes.forEach(PT), this.nodes.forEach(DT), this.nodes.forEach(NT), this.nodes.forEach(RT), kT(Xr);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _T());
    }
    addEventListener(f, m) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Qf()), this.eventHandlers.get(f).add(m);
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
      this.isSVG = TT(f), this.instance = f;
      const { layoutId: y, layout: g, visualElement: x } = this.options;
      if (x && !x.current && x.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), m && (g || y) && (this.isLayoutDirty = !0), e) {
        let u;
        const p = () => this.root.updateBlockedByResize = !1;
        e(f, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = ST(p, 250), Va.hasAnimatedSinceResize && (Va.hasAnimatedSinceResize = !1, this.nodes.forEach(ng));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && x && (y || g) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: p, hasRelativeTargetChanged: v, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || x.getDefaultTransition() || BT, { onLayoutAnimationStart: k, onLayoutAnimationComplete: T } = x.getProps(), A = !this.targetLayout || !hf(this.targetLayout, w) || v, L = !p && v;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || L || p && (A || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, L);
          const V = {
            ...c0(S, "layout"),
            onPlay: k,
            onComplete: T
          };
          (x.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0, V.type = !1), this.startAnimation(V);
        } else
          p || ng(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(FT), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(tg);
        return;
      }
      this.isUpdating || this.nodes.forEach(LT), this.isUpdating = !1, this.nodes.forEach(MT), this.nodes.forEach(AT), this.nodes.forEach(bT), this.clearAllSnapshots();
      const m = performance.now();
      Je.delta = Lr(0, 1e3 / 60, m - Je.timestamp), Je.timestamp = m, Je.isProcessing = !0, ji.update.process(Je), ji.preRender.process(Je), ji.render.process(Je), Je.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(OT), this.sharedNodes.forEach(IT);
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
      const f = this.isLayoutDirty || this.shouldResetTransform, m = this.projectionDelta && !k0(this.projectionDelta), y = this.getTransformTemplate(), g = y ? y(this.latestValues, "") : void 0, x = g !== this.prevTransformTemplateValue;
      f && (m || Yr(this.latestValues) || x) && (a(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return f && (y = this.removeTransform(y)), zT(y), {
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
      nn(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y], { scroll: x, options: u } = g;
        if (g !== this.root && x && u.layoutScroll) {
          if (x.isRoot) {
            nn(m, f);
            const { scroll: p } = this.root;
            p && (Ar(m.x, -p.offset.x), Ar(m.y, -p.offset.y));
          }
          Ar(m.x, x.offset.x), Ar(m.y, x.offset.y);
        }
      }
      return m;
    }
    applyTransform(f, m = !1) {
      const y = ot();
      nn(y, f);
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        !m && x.options.layoutScroll && x.scroll && x !== x.root && Ni(y, {
          x: -x.scroll.offset.x,
          y: -x.scroll.offset.y
        }), Yr(x.latestValues) && Ni(y, x.latestValues);
      }
      return Yr(this.latestValues) && Ni(y, this.latestValues), y;
    }
    removeTransform(f) {
      const m = ot();
      nn(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!g.instance || !Yr(g.latestValues))
          continue;
        df(g.latestValues) && g.updateSnapshot();
        const x = ot(), u = g.measurePageBox();
        nn(x, u), Qm(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, x);
      }
      return Yr(this.latestValues) && Qm(m, this.latestValues), m;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Je.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var m;
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== y;
      if (!(f || g && this.isSharedProjectionDirty || this.isProjectionDirty || !((m = this.parent) === null || m === void 0) && m.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: u, layoutId: p } = this.options;
      if (!(!this.layout || !(u || p))) {
        if (this.resolvedRelativeTargetAt = Je.timestamp, !this.targetDelta && !this.relativeTarget) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ot(), this.relativeTargetOrigin = ot(), Yo(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ot(), this.targetWithTransforms = ot()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Hk(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nn(this.target, this.layout.layoutBox), v0(this.target, this.targetDelta)) : nn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ot(), this.relativeTargetOrigin = ot(), Yo(this.relativeTargetOrigin, this.target, v.target), nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Xr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || df(this.parent.latestValues) || y0(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var f;
      const m = this.getLead(), y = !!this.resumingFrom || this !== m;
      let g = !0;
      if ((this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty) && (g = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === Je.timestamp && (g = !1), g)
        return;
      const { layout: x, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(x || u))
        return;
      nn(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, v = this.treeScale.y;
      Zk(this.layoutCorrected, this.treeScale, this.path, y), m.layout && !m.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (m.target = m.layout.layoutBox);
      const { target: w } = m;
      if (!w) {
        this.projectionTransform && (this.projectionDelta = Di(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Di(), this.projectionDeltaWithTransform = Di());
      const S = this.projectionTransform;
      Qo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), this.projectionTransform = Jm(this.projectionDelta, this.treeScale), (this.projectionTransform !== S || this.treeScale.x !== p || this.treeScale.y !== v) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Xr.recalculatedProjection++;
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
      const p = ot(), v = y ? y.source : void 0, w = this.layout ? this.layout.source : void 0, S = v !== w, k = this.getStack(), T = !k || k.members.length <= 1, A = !!(S && !T && this.options.crossfade === !0 && !this.path.some(VT));
      this.animationProgress = 0;
      let L;
      this.mixTargetDelta = (V) => {
        const H = V / 1e3;
        rg(u.x, f.x, H), rg(u.y, f.y, H), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Yo(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), jT(this.relativeTarget, this.relativeTargetOrigin, p, H), L && hf(this.relativeTarget, L) && (this.isProjectionDirty = !1), L || (L = ot()), nn(L, this.relativeTarget)), S && (this.animationValues = x, pT(x, g, this.latestValues, H, A, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = H;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (nr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ke.update(() => {
        Va.hasAnimatedSinceResize = !0, this.currentAnimation = CT(0, eg, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(eg), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: m, target: y, layout: g, latestValues: x } = f;
      if (!(!m || !y || !g)) {
        if (this !== f && this.layout && g && C0(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          y = this.target || ot();
          const u = Qt(this.layout.layoutBox.x);
          y.x.min = f.target.x.min, y.x.max = y.x.min + u;
          const p = Qt(this.layout.layoutBox.y);
          y.y.min = f.target.y.min, y.y.max = y.y.min + p;
        }
        nn(m, y), Ni(m, x), Qo(this.projectionDeltaWithTransform, this.layoutCorrected, m, x);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new xT()), this.sharedNodes.get(f).add(m);
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
      for (let x = 0; x < Zm.length; x++) {
        const u = "rotate" + Zm[x];
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
        return this.needsReset = !1, g.opacity = "", g.pointerEvents = ja(f.pointerEvents) || "", g.transform = x ? x(this.latestValues, "") : "none", g;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const S = {};
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = ja(f.pointerEvents) || ""), this.hasProjected && !Yr(this.latestValues) && (S.transform = x ? x({}, "") : "none", this.hasProjected = !1), S;
      }
      const p = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), g.transform = Jm(this.projectionDeltaWithTransform, this.treeScale, p), x && (g.transform = x(p, g.transform));
      const { x: v, y: w } = this.projectionDelta;
      g.transformOrigin = `${v.origin * 100}% ${w.origin * 100}% 0`, u.animationValues ? g.opacity = u === this ? (y = (m = p.opacity) !== null && m !== void 0 ? m : this.latestValues.opacity) !== null && y !== void 0 ? y : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : g.opacity = u === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const S in Ja) {
        if (p[S] === void 0)
          continue;
        const { correct: k, applyTo: T } = Ja[S], A = g.transform === "none" ? p[S] : k(p[S], u);
        if (T) {
          const L = T.length;
          for (let V = 0; V < L; V++)
            g[T[V]] = A;
        } else
          g[S] = A;
      }
      return this.options.layoutId && (g.pointerEvents = u === this ? ja(f.pointerEvents) || "" : "none"), g;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) === null || m === void 0 ? void 0 : m.stop();
      }), this.root.nodes.forEach(tg), this.root.sharedNodes.clear();
    }
  };
}
function AT(e) {
  e.updateLayout();
}
function bT(e) {
  var n;
  const r = ((n = e.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: a } = e.layout, { animationType: c } = e.options, f = r.source !== e.layout.source;
    c === "size" ? bn((u) => {
      const p = f ? r.measuredBox[u] : r.layoutBox[u], v = Qt(p);
      p.min = o[u].min, p.max = p.min + v;
    }) : C0(c, r.layoutBox, o) && bn((u) => {
      const p = f ? r.measuredBox[u] : r.layoutBox[u], v = Qt(o[u]);
      p.max = p.min + v, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + v);
    });
    const m = Di();
    Qo(m, o, r.layoutBox);
    const y = Di();
    f ? Qo(y, e.applyTransform(a, !0), r.measuredBox) : Qo(y, o, r.layoutBox);
    const g = !k0(m);
    let x = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: p, layout: v } = u;
        if (p && v) {
          const w = ot();
          Yo(w, r.layoutBox, p.layoutBox);
          const S = ot();
          Yo(S, o, v.layoutBox), hf(w, S) || (x = !0), u.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = w, e.relativeParent = u);
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
function PT(e) {
  Xr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function RT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function OT(e) {
  e.clearSnapshot();
}
function tg(e) {
  e.clearMeasurements();
}
function LT(e) {
  e.isLayoutDirty = !1;
}
function MT(e) {
  const { visualElement: n } = e.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ng(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function DT(e) {
  e.resolveTargetDelta();
}
function NT(e) {
  e.calcProjection();
}
function FT(e) {
  e.resetRotation();
}
function IT(e) {
  e.removeLeadSnapshot();
}
function rg(e, n, r) {
  e.translate = Ze(n.translate, 0, r), e.scale = Ze(n.scale, 1, r), e.origin = n.origin, e.originPoint = n.originPoint;
}
function ig(e, n, r, o) {
  e.min = Ze(n.min, r.min, o), e.max = Ze(n.max, r.max, o);
}
function jT(e, n, r, o) {
  ig(e.x, n.x, r.x, o), ig(e.y, n.y, r.y, o);
}
function VT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const BT = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function og(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function zT(e) {
  og(e.x), og(e.y);
}
function C0(e, n, r) {
  return e === "position" || e === "preserve-aspect" && !cf(Xm(n), Xm(r), 0.2);
}
const $T = T0({
  attachResizeListener: (e, n) => Jn(e, "resize", n),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Nc = {
  current: void 0
}, E0 = T0({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Nc.current) {
      const e = new $T({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Nc.current = e;
    }
    return Nc.current;
  },
  resetTransform: (e, n) => {
    e.style.transform = n !== void 0 ? n : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), UT = {
  pan: {
    Feature: aT
  },
  drag: {
    Feature: sT,
    ProjectionNode: E0,
    MeasureLayout: w0
  }
}, HT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function WT(e) {
  const n = HT.exec(e);
  if (!n)
    return [,];
  const [, r, o] = n;
  return [r, o];
}
function mf(e, n, r = 1) {
  const [o, a] = WT(e);
  if (!o)
    return;
  const c = window.getComputedStyle(n).getPropertyValue(o);
  return c ? c.trim() : tf(a) ? mf(a, n, r + 1) : a;
}
function qT(e, { ...n }, r) {
  const o = e.current;
  if (!(o instanceof Element))
    return { target: n, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((a) => {
    const c = a.get();
    if (!tf(c))
      return;
    const f = mf(c, o);
    f && a.set(f);
  });
  for (const a in n) {
    const c = n[a];
    if (!tf(c))
      continue;
    const f = mf(c, o);
    f && (n[a] = f, r || (r = {}), r[a] === void 0 && (r[a] = c));
  }
  return { target: n, transitionEnd: r };
}
const GT = /* @__PURE__ */ new Set([
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
]), A0 = (e) => GT.has(e), KT = (e) => Object.keys(e).some(A0), sg = (e) => e === ei || e === ye, ag = (e, n) => parseFloat(e.split(", ")[n]), lg = (e, n) => (r, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const a = o.match(/^matrix3d\((.+)\)$/);
  if (a)
    return ag(a[1], n);
  {
    const c = o.match(/^matrix\((.+)\)$/);
    return c ? ag(c[1], e) : 0;
  }
}, QT = /* @__PURE__ */ new Set(["x", "y", "z"]), YT = ls.filter((e) => !QT.has(e));
function XT(e) {
  const n = [];
  return YT.forEach((r) => {
    const o = e.getValue(r);
    o !== void 0 && (n.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), n.length && e.render(), n;
}
const ug = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: n = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(n) - parseFloat(r),
  height: ({ y: e }, { paddingTop: n = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(n) - parseFloat(r),
  top: (e, { top: n }) => parseFloat(n),
  left: (e, { left: n }) => parseFloat(n),
  bottom: ({ y: e }, { top: n }) => parseFloat(n) + (e.max - e.min),
  right: ({ x: e }, { left: n }) => parseFloat(n) + (e.max - e.min),
  // Transform
  x: lg(4, 13),
  y: lg(5, 14)
}, JT = (e, n, r) => {
  const o = n.measureViewportBox(), a = n.current, c = getComputedStyle(a), { display: f } = c, m = {};
  f === "none" && n.setStaticValue("display", e.display || "block"), r.forEach((g) => {
    m[g] = ug[g](o, c);
  }), n.render();
  const y = n.measureViewportBox();
  return r.forEach((g) => {
    const x = n.getValue(g);
    x && x.jump(m[g]), e[g] = ug[g](y, c);
  }), e;
}, ZT = (e, n, r = {}, o = {}) => {
  n = { ...n }, o = { ...o };
  const a = Object.keys(n).filter(A0);
  let c = [], f = !1;
  const m = [];
  if (a.forEach((y) => {
    const g = e.getValue(y);
    if (!e.hasValue(y))
      return;
    let x = r[y], u = Vo(x);
    const p = n[y];
    let v;
    if (el(p)) {
      const w = p.length, S = p[0] === null ? 1 : 0;
      x = p[S], u = Vo(x);
      for (let k = S; k < w && p[k] !== null; k++)
        v ? zf(Vo(p[k]) === v) : v = Vo(p[k]);
    } else
      v = Vo(p);
    if (u !== v)
      if (sg(u) && sg(v)) {
        const w = g.get();
        typeof w == "string" && g.set(parseFloat(w)), typeof p == "string" ? n[y] = parseFloat(p) : Array.isArray(p) && v === ye && (n[y] = p.map(parseFloat));
      } else
        u != null && u.transform && (v != null && v.transform) && (x === 0 || p === 0) ? x === 0 ? g.set(v.transform(x)) : n[y] = u.transform(p) : (f || (c = XT(e), f = !0), m.push(y), o[y] = o[y] !== void 0 ? o[y] : n[y], g.jump(p));
  }), m.length) {
    const y = m.indexOf("height") >= 0 ? window.pageYOffset : null, g = JT(n, e, m);
    return c.length && c.forEach(([x, u]) => {
      e.getValue(x).set(u);
    }), e.render(), wl && y !== null && window.scrollTo({ top: y }), { target: g, transitionEnd: o };
  } else
    return { target: n, transitionEnd: o };
};
function eC(e, n, r, o) {
  return KT(n) ? ZT(e, n, r, o) : { target: n, transitionEnd: o };
}
const tC = (e, n, r, o) => {
  const a = qT(e, n, o);
  return n = a.target, o = a.transitionEnd, eC(e, n, r, o);
}, gf = { current: null }, b0 = { current: !1 };
function nC() {
  if (b0.current = !0, !!wl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), n = () => gf.current = e.matches;
      e.addListener(n), n();
    } else
      gf.current = !1;
}
function rC(e, n, r) {
  const { willChange: o } = n;
  for (const a in n) {
    const c = n[a], f = r[a];
    if (Ut(c))
      e.addValue(a, c), il(o) && o.add(a);
    else if (Ut(f))
      e.addValue(a, $i(c, { owner: e })), il(o) && o.remove(a);
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
    n[a] === void 0 && e.removeValue(a);
  return n;
}
const cg = /* @__PURE__ */ new WeakMap(), P0 = Object.keys(ns), iC = P0.length, fg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], oC = Lf.length;
class sC {
  constructor({ parent: n, props: r, presenceContext: o, reducedMotionConfig: a, visualState: c }, f = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ke.render(this.render, !1, !0);
    const { latestValues: m, renderState: y } = c;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = r.initial ? { ...m } : {}, this.renderState = y, this.parent = n, this.props = r, this.presenceContext = o, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = a, this.options = f, this.isControllingVariants = Sl(r), this.isVariantNode = py(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
    const { willChange: g, ...x } = this.scrapeMotionValuesFromProps(r, {});
    for (const u in x) {
      const p = x[u];
      m[u] !== void 0 && Ut(p) && (p.set(m[u], !1), il(g) && g.add(u));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(n, r) {
    return {};
  }
  mount(n) {
    this.current = n, cg.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), b0.current || nC(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    cg.delete(this.current), this.projection && this.projection.unmount(), nr(this.notifyUpdate), nr(this.render), this.valueSubscriptions.forEach((n) => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features)
      this.features[n].unmount();
    this.current = null;
  }
  bindToMotionValue(n, r) {
    const o = Zr.has(n), a = r.on("change", (f) => {
      this.latestValues[n] = f, this.props.onUpdate && Ke.update(this.notifyUpdate, !1, !0), o && this.projection && (this.projection.isTransformDirty = !0);
    }), c = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(n, () => {
      a(), c();
    });
  }
  sortNodePosition(n) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
  }
  loadFeatures({ children: n, ...r }, o, a, c) {
    let f, m;
    for (let y = 0; y < iC; y++) {
      const g = P0[y], { isEnabled: x, Feature: u, ProjectionNode: p, MeasureLayout: v } = ns[g];
      p && (f = p), x(r) && (!this.features[g] && u && (this.features[g] = new u(this)), v && (m = v));
    }
    if (!this.projection && f) {
      this.projection = new f(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: y, layout: g, drag: x, dragConstraints: u, layoutScroll: p, layoutRoot: v } = r;
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
        layoutScroll: p,
        layoutRoot: v
      });
    }
    return m;
  }
  updateFeatures() {
    for (const n in this.features) {
      const r = this.features[n];
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
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, r) {
    this.latestValues[n] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(n, r = !0) {
    return this.makeTargetAnimatableFromInstance(n, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(n, r) {
    (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let o = 0; o < fg.length; o++) {
      const a = fg[o];
      this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
      const c = n["on" + a];
      c && (this.propEventSubscriptions[a] = this.on(a, c));
    }
    this.prevMotionValues = rC(this, this.scrapeMotionValuesFromProps(n, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(n) {
    return this.props.variants ? this.props.variants[n] : void 0;
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
  getVariantContext(n = !1) {
    if (n)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const o = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (o.initial = this.props.initial), o;
    }
    const r = {};
    for (let o = 0; o < oC; o++) {
      const a = Lf[o], c = this.props[a];
      (ts(c) || c === !1) && (r[a] = c);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(n) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(n), () => r.variantChildren.delete(n);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(n, r) {
    r !== this.values.get(n) && (this.removeValue(n), this.bindToMotionValue(n, r)), this.values.set(n, r), this.latestValues[n] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(n) {
    this.values.delete(n);
    const r = this.valueSubscriptions.get(n);
    r && (r(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, r) {
    if (this.props.values && this.props.values[n])
      return this.props.values[n];
    let o = this.values.get(n);
    return o === void 0 && r !== void 0 && (o = $i(r, { owner: this }), this.addValue(n, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(n) {
    return this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.readValueFromInstance(this.current, n, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(n, r) {
    this.baseTarget[n] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(n) {
    var r;
    const { initial: o } = this.props, a = typeof o == "string" || typeof o == "object" ? (r = Bf(this.props, o)) === null || r === void 0 ? void 0 : r[n] : void 0;
    if (o && a !== void 0)
      return a;
    const c = this.getBaseTargetFromProps(this.props, n);
    return c !== void 0 && !Ut(c) ? c : this.initialValues[n] !== void 0 && a === void 0 ? void 0 : this.baseTarget[n];
  }
  on(n, r) {
    return this.events[n] || (this.events[n] = new Qf()), this.events[n].add(r);
  }
  notify(n, ...r) {
    this.events[n] && this.events[n].notify(...r);
  }
}
class R0 extends sC {
  sortInstanceNodePosition(n, r) {
    return n.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, r) {
    return n.style ? n.style[r] : void 0;
  }
  removeValueFromRenderState(n, { vars: r, style: o }) {
    delete r[n], delete o[n];
  }
  makeTargetAnimatableFromInstance({ transition: n, transitionEnd: r, ...o }, { transformValues: a }, c) {
    let f = Ek(o, n || {}, this);
    if (a && (r && (r = a(r)), o && (o = a(o)), f && (f = a(f))), c) {
      Tk(this, o, f);
      const m = tC(this, o, f, r);
      r = m.transitionEnd, o = m.target;
    }
    return {
      transition: n,
      transitionEnd: r,
      ...o
    };
  }
}
function aC(e) {
  return window.getComputedStyle(e);
}
class lC extends R0 {
  readValueFromInstance(n, r) {
    if (Zr.has(r)) {
      const o = Wf(r);
      return o && o.default || 0;
    } else {
      const o = aC(n), a = (yy(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: r }) {
    return x0(n, r);
  }
  build(n, r, o, a) {
    Df(n, r, o, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, r) {
    return Vf(n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    Ut(n) && (this.childSubscription = n.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(n, r, o, a) {
    ky(n, r, o, a);
  }
}
class uC extends R0 {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(n, r) {
    return n[r];
  }
  readValueFromInstance(n, r) {
    if (Zr.has(r)) {
      const o = Wf(r);
      return o && o.default || 0;
    }
    return r = Ty.has(r) ? r : jf(r), n.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ot();
  }
  scrapeMotionValuesFromProps(n, r) {
    return Ey(n, r);
  }
  build(n, r, o, a) {
    Ff(n, r, o, this.isSVGTag, a.transformTemplate);
  }
  renderInstance(n, r, o, a) {
    Cy(n, r, o, a);
  }
  mount(n) {
    this.isSVGTag = If(n.tagName), super.mount(n);
  }
}
const cC = (e, n) => Mf(e) ? new uC(n, { enableHardwareAcceleration: !1 }) : new lC(n, { enableHardwareAcceleration: !0 }), fC = {
  layout: {
    ProjectionNode: E0,
    MeasureLayout: w0
  }
}, dC = {
  ...Bk,
  ...aS,
  ...UT,
  ...fC
}, Ui = /* @__PURE__ */ m_((e, n) => H_(e, n, dC, cC));
function O0() {
  const e = N.useRef(!1);
  return Xa(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function L0() {
  const e = O0(), [n, r] = N.useState(0), o = N.useCallback(() => {
    e.current && r(n + 1);
  }, [n]);
  return [N.useCallback(() => Ke.postRender(o), [o]), n];
}
class pC extends N.Component {
  getSnapshotBeforeUpdate(n) {
    const r = this.props.childRef.current;
    if (r && n.isPresent && !this.props.isPresent) {
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
function hC({ children: e, isPresent: n }) {
  const r = N.useId(), o = N.useRef(null), a = N.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return N.useInsertionEffect(() => {
    const { width: c, height: f, top: m, left: y } = a.current;
    if (n || !o.current || !c || !f)
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
  }, [n]), N.createElement(pC, { isPresent: n, childRef: o, sizeRef: a }, N.cloneElement(e, { ref: o }));
}
const Fc = ({ children: e, initial: n, isPresent: r, onExitComplete: o, custom: a, presenceAffectsLayout: c, mode: f }) => {
  const m = Ay(mC), y = N.useId(), g = N.useMemo(
    () => ({
      id: y,
      initial: n,
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
  return N.useMemo(() => {
    m.forEach((x, u) => m.set(u, !1));
  }, [r]), N.useEffect(() => {
    !r && !m.size && o && o();
  }, [r]), f === "popLayout" && (e = N.createElement(hC, { isPresent: r }, e)), N.createElement(xl.Provider, { value: g }, e);
};
function mC() {
  return /* @__PURE__ */ new Map();
}
function gC(e) {
  return N.useEffect(() => () => e(), []);
}
const Pi = (e) => e.key || "";
function yC(e, n) {
  e.forEach((r) => {
    const o = Pi(r);
    n.set(o, r);
  });
}
function vC(e) {
  const n = [];
  return N.Children.forEach(e, (r) => {
    N.isValidElement(r) && n.push(r);
  }), n;
}
const M0 = ({ children: e, custom: n, initial: r = !0, onExitComplete: o, exitBeforeEnter: a, presenceAffectsLayout: c = !0, mode: f = "sync" }) => {
  const m = N.useContext(rs).forceRender || L0()[0], y = O0(), g = vC(e);
  let x = g;
  const u = N.useRef(/* @__PURE__ */ new Map()).current, p = N.useRef(x), v = N.useRef(/* @__PURE__ */ new Map()).current, w = N.useRef(!0);
  if (Xa(() => {
    w.current = !1, yC(g, v), p.current = x;
  }), gC(() => {
    w.current = !0, v.clear(), u.clear();
  }), w.current)
    return N.createElement(N.Fragment, null, x.map((A) => N.createElement(Fc, { key: Pi(A), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: c, mode: f }, A)));
  x = [...x];
  const S = p.current.map(Pi), k = g.map(Pi), T = S.length;
  for (let A = 0; A < T; A++) {
    const L = S[A];
    k.indexOf(L) === -1 && !u.has(L) && u.set(L, void 0);
  }
  return f === "wait" && u.size && (x = []), u.forEach((A, L) => {
    if (k.indexOf(L) !== -1)
      return;
    const V = v.get(L);
    if (!V)
      return;
    const H = S.indexOf(L);
    let J = A;
    if (!J) {
      const K = () => {
        v.delete(L), u.delete(L);
        const te = p.current.findIndex((Z) => Z.key === L);
        if (p.current.splice(te, 1), !u.size) {
          if (p.current = g, y.current === !1)
            return;
          m(), o && o();
        }
      };
      J = N.createElement(Fc, { key: Pi(V), isPresent: !1, onExitComplete: K, custom: n, presenceAffectsLayout: c, mode: f }, V), u.set(L, J);
    }
    x.splice(H, 0, J);
  }), x = x.map((A) => {
    const L = A.key;
    return u.has(L) ? A : N.createElement(Fc, { key: Pi(A), isPresent: !0, presenceAffectsLayout: c, mode: f }, A);
  }), N.createElement(N.Fragment, null, u.size ? x : x.map((A) => N.cloneElement(A)));
}, xC = N.createContext(null), wC = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function dg() {
  const e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new WeakMap(), r = () => e.forEach(wC);
  return {
    add: (o) => {
      e.add(o), n.set(o, o.addEventListener("willUpdate", r));
    },
    remove: (o) => {
      e.delete(o);
      const a = n.get(o);
      a && (a(), n.delete(o)), r();
    },
    dirty: r
  };
}
const D0 = (e) => e === !0, _C = (e) => D0(e === !0) || e === "id", SC = ({ children: e, id: n, inherit: r = !0 }) => {
  const o = N.useContext(rs), a = N.useContext(xC), [c, f] = L0(), m = N.useRef(null), y = o.id || a;
  m.current === null && (_C(r) && y && (n = n ? y + "-" + n : y), m.current = {
    id: n,
    group: D0(r) && o.group || dg()
  });
  const g = N.useMemo(() => ({ ...m.current, forceRender: c }), [f]);
  return N.createElement(rs.Provider, { value: g }, e);
}, kC = Te(Ui.div)`
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
`, TC = Te.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #eee;
  /* border-top: 1px solid ${(e) => e.theme.colors.primary}; */
`, CC = Te.button`
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
`, ds = () => /* @__PURE__ */ E.jsx(
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
), Yf = () => /* @__PURE__ */ E.jsx(
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
), EC = () => /* @__PURE__ */ E.jsx(
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
), AC = () => /* @__PURE__ */ E.jsx(
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
), bC = Te.div`
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
`, PC = Te.div`
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
`, RC = Te.div`
  background: linear-gradient(180deg, transparent, white);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
var ps = (e) => e.type === "checkbox", Fi = (e) => e instanceof Date, Dt = (e) => e == null;
const N0 = (e) => typeof e == "object";
var pt = (e) => !Dt(e) && !Array.isArray(e) && N0(e) && !Fi(e), OC = (e) => pt(e) && e.target ? ps(e.target) ? e.target.checked : e.target.value : e, LC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, MC = (e, n) => e.has(LC(n)), DC = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return pt(n) && n.hasOwnProperty("isPrototypeOf");
}, Xf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Er(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(Xf && (e instanceof Blob || e instanceof FileList)) && (r || pt(e)))
    if (n = r ? [] : {}, !r && !DC(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = Er(e[o]));
  else
    return e;
  return n;
}
var hs = (e) => Array.isArray(e) ? e.filter(Boolean) : [], st = (e) => e === void 0, fe = (e, n, r) => {
  if (!n || !pt(e))
    return r;
  const o = hs(n.split(/[,[\].]+?/)).reduce((a, c) => Dt(a) ? a : a[c], e);
  return st(o) || o === e ? st(e[n]) ? r : e[n] : o;
};
const pg = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, gn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Yn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
yn.createContext(null);
var NC = (e, n, r, o = !0) => {
  const a = {
    defaultValues: n._defaultValues
  };
  for (const c in e)
    Object.defineProperty(a, c, {
      get: () => {
        const f = c;
        return n._proxyFormState[f] !== gn.all && (n._proxyFormState[f] = !o || gn.all), r && (r[f] = !0), e[f];
      }
    });
  return a;
}, rn = (e) => pt(e) && !Object.keys(e).length, FC = (e, n, r, o) => {
  r(e);
  const { name: a, ...c } = e;
  return rn(c) || Object.keys(c).length >= Object.keys(n).length || Object.keys(c).find((f) => n[f] === (!o || gn.all));
}, Ic = (e) => Array.isArray(e) ? e : [e];
function IC(e) {
  const n = yn.useRef(e);
  n.current = e, yn.useEffect(() => {
    const r = !e.disabled && n.current.subject && n.current.subject.subscribe({
      next: n.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
var On = (e) => typeof e == "string", jC = (e, n, r, o, a) => On(e) ? (o && n.watch.add(e), fe(r, e, a)) : Array.isArray(e) ? e.map((c) => (o && n.watch.add(c), fe(r, c))) : (o && (n.watchAll = !0), r), Jf = (e) => /^\w*$/.test(e), F0 = (e) => hs(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ge(e, n, r) {
  let o = -1;
  const a = Jf(n) ? [n] : F0(n), c = a.length, f = c - 1;
  for (; ++o < c; ) {
    const m = a[o];
    let y = r;
    if (o !== f) {
      const g = e[m];
      y = pt(g) || Array.isArray(g) ? g : isNaN(+a[o + 1]) ? {} : [];
    }
    e[m] = y, e = e[m];
  }
  return e;
}
var VC = (e, n, r, o, a) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [o]: a || !0
  }
} : {};
const yf = (e, n, r) => {
  for (const o of r || Object.keys(e)) {
    const a = fe(e, o);
    if (a) {
      const { _f: c, ...f } = a;
      if (c && n(c.name)) {
        if (c.ref.focus) {
          c.ref.focus();
          break;
        } else if (c.refs && c.refs[0].focus) {
          c.refs[0].focus();
          break;
        }
      } else
        pt(f) && yf(f, n);
    }
  }
};
var hg = (e) => ({
  isOnSubmit: !e || e === gn.onSubmit,
  isOnBlur: e === gn.onBlur,
  isOnChange: e === gn.onChange,
  isOnAll: e === gn.all,
  isOnTouch: e === gn.onTouched
}), mg = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((o) => e.startsWith(o) && /^\.\w+/.test(e.slice(o.length)))), BC = (e, n, r) => {
  const o = hs(fe(e, r));
  return Ge(o, "root", n[r]), Ge(e, r, o), e;
}, Vi = (e) => typeof e == "boolean", Zf = (e) => e.type === "file", br = (e) => typeof e == "function", sl = (e) => {
  if (!Xf)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, Ba = (e) => On(e), ed = (e) => e.type === "radio", al = (e) => e instanceof RegExp;
const gg = {
  value: !1,
  isValid: !1
}, yg = { value: !0, isValid: !0 };
var I0 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !st(e[0].attributes.value) ? st(e[0].value) || e[0].value === "" ? yg : { value: e[0].value, isValid: !0 } : yg
    ) : gg;
  }
  return gg;
};
const vg = {
  isValid: !1,
  value: null
};
var j0 = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, vg) : vg;
function xg(e, n, r = "validate") {
  if (Ba(e) || Array.isArray(e) && e.every(Ba) || Vi(e) && !e)
    return {
      type: r,
      message: Ba(e) ? e : "",
      ref: n
    };
}
var Ai = (e) => pt(e) && !al(e) ? e : {
  value: e,
  message: ""
}, wg = async (e, n, r, o, a) => {
  const { ref: c, refs: f, required: m, maxLength: y, minLength: g, min: x, max: u, pattern: p, validate: v, name: w, valueAsNumber: S, mount: k, disabled: T } = e._f, A = fe(n, w);
  if (!k || T)
    return {};
  const L = f ? f[0] : c, V = (pe) => {
    o && L.reportValidity && (L.setCustomValidity(Vi(pe) ? "" : pe || ""), L.reportValidity());
  }, H = {}, J = ed(c), K = ps(c), te = J || K, Z = (S || Zf(c)) && st(c.value) && st(A) || sl(c) && c.value === "" || A === "" || Array.isArray(A) && !A.length, Ce = VC.bind(null, w, r, H), Le = (pe, le, ae, ge = Yn.maxLength, Ee = Yn.minLength) => {
    const Se = pe ? le : ae;
    H[w] = {
      type: pe ? ge : Ee,
      message: Se,
      ref: c,
      ...Ce(pe ? ge : Ee, Se)
    };
  };
  if (a ? !Array.isArray(A) || !A.length : m && (!te && (Z || Dt(A)) || Vi(A) && !A || K && !I0(f).isValid || J && !j0(f).isValid)) {
    const { value: pe, message: le } = Ba(m) ? { value: !!m, message: m } : Ai(m);
    if (pe && (H[w] = {
      type: Yn.required,
      message: le,
      ref: L,
      ...Ce(Yn.required, le)
    }, !r))
      return V(le), H;
  }
  if (!Z && (!Dt(x) || !Dt(u))) {
    let pe, le;
    const ae = Ai(u), ge = Ai(x);
    if (!Dt(A) && !isNaN(A)) {
      const Ee = c.valueAsNumber || A && +A;
      Dt(ae.value) || (pe = Ee > ae.value), Dt(ge.value) || (le = Ee < ge.value);
    } else {
      const Ee = c.valueAsDate || new Date(A), Se = (b) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + b), Y = c.type == "time", ue = c.type == "week";
      On(ae.value) && A && (pe = Y ? Se(A) > Se(ae.value) : ue ? A > ae.value : Ee > new Date(ae.value)), On(ge.value) && A && (le = Y ? Se(A) < Se(ge.value) : ue ? A < ge.value : Ee < new Date(ge.value));
    }
    if ((pe || le) && (Le(!!pe, ae.message, ge.message, Yn.max, Yn.min), !r))
      return V(H[w].message), H;
  }
  if ((y || g) && !Z && (On(A) || a && Array.isArray(A))) {
    const pe = Ai(y), le = Ai(g), ae = !Dt(pe.value) && A.length > +pe.value, ge = !Dt(le.value) && A.length < +le.value;
    if ((ae || ge) && (Le(ae, pe.message, le.message), !r))
      return V(H[w].message), H;
  }
  if (p && !Z && On(A)) {
    const { value: pe, message: le } = Ai(p);
    if (al(pe) && !A.match(pe) && (H[w] = {
      type: Yn.pattern,
      message: le,
      ref: c,
      ...Ce(Yn.pattern, le)
    }, !r))
      return V(le), H;
  }
  if (v) {
    if (br(v)) {
      const pe = await v(A, n), le = xg(pe, L);
      if (le && (H[w] = {
        ...le,
        ...Ce(Yn.validate, le.message)
      }, !r))
        return V(le.message), H;
    } else if (pt(v)) {
      let pe = {};
      for (const le in v) {
        if (!rn(pe) && !r)
          break;
        const ae = xg(await v[le](A, n), L, le);
        ae && (pe = {
          ...ae,
          ...Ce(le, ae.message)
        }, V(ae.message), r && (H[w] = pe));
      }
      if (!rn(pe) && (H[w] = {
        ref: L,
        ...pe
      }, !r))
        return H;
    }
  }
  return V(!0), H;
};
function zC(e, n) {
  const r = n.slice(0, -1).length;
  let o = 0;
  for (; o < r; )
    e = st(e) ? o++ : e[n[o++]];
  return e;
}
function $C(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !st(e[n]))
      return !1;
  return !0;
}
function St(e, n) {
  const r = Array.isArray(n) ? n : Jf(n) ? [n] : F0(n), o = r.length === 1 ? e : zC(e, r), a = r.length - 1, c = r[a];
  return o && delete o[c], a !== 0 && (pt(o) && rn(o) || Array.isArray(o) && $C(o)) && St(e, r.slice(0, -1)), e;
}
function jc() {
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
var ll = (e) => Dt(e) || !N0(e);
function Pr(e, n) {
  if (ll(e) || ll(n))
    return e === n;
  if (Fi(e) && Fi(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), o = Object.keys(n);
  if (r.length !== o.length)
    return !1;
  for (const a of r) {
    const c = e[a];
    if (!o.includes(a))
      return !1;
    if (a !== "ref") {
      const f = n[a];
      if (Fi(c) && Fi(f) || pt(c) && pt(f) || Array.isArray(c) && Array.isArray(f) ? !Pr(c, f) : c !== f)
        return !1;
    }
  }
  return !0;
}
var V0 = (e) => e.type === "select-multiple", UC = (e) => ed(e) || ps(e), Vc = (e) => sl(e) && e.isConnected, B0 = (e) => {
  for (const n in e)
    if (br(e[n]))
      return !0;
  return !1;
};
function ul(e, n = {}) {
  const r = Array.isArray(e);
  if (pt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || pt(e[o]) && !B0(e[o]) ? (n[o] = Array.isArray(e[o]) ? [] : {}, ul(e[o], n[o])) : Dt(e[o]) || (n[o] = !0);
  return n;
}
function z0(e, n, r) {
  const o = Array.isArray(e);
  if (pt(e) || o)
    for (const a in e)
      Array.isArray(e[a]) || pt(e[a]) && !B0(e[a]) ? st(n) || ll(r[a]) ? r[a] = Array.isArray(e[a]) ? ul(e[a], []) : { ...ul(e[a]) } : z0(e[a], Dt(n) ? {} : n[a], r[a]) : r[a] = !Pr(e[a], n[a]);
  return r;
}
var Bc = (e, n) => z0(e, n, ul(n)), $0 = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: o }) => st(e) ? e : n ? e === "" ? NaN : e && +e : r && On(e) ? new Date(e) : o ? o(e) : e;
function zc(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return Zf(n) ? n.files : ed(n) ? j0(e.refs).value : V0(n) ? [...n.selectedOptions].map(({ value: r }) => r) : ps(n) ? I0(e.refs).value : $0(st(n.value) ? e.ref.value : n.value, e);
}
var HC = (e, n, r, o) => {
  const a = {};
  for (const c of e) {
    const f = fe(n, c);
    f && Ge(a, c, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: a,
    shouldUseNativeValidation: o
  };
}, zo = (e) => st(e) ? e : al(e) ? e.source : pt(e) ? al(e.value) ? e.value.source : e.value : e, WC = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function _g(e, n, r) {
  const o = fe(e, r);
  if (o || Jf(r))
    return {
      error: o,
      name: r
    };
  const a = r.split(".");
  for (; a.length; ) {
    const c = a.join("."), f = fe(n, c), m = fe(e, c);
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
var qC = (e, n, r, o, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(n || e) : (r ? o.isOnBlur : a.isOnBlur) ? !e : (r ? o.isOnChange : a.isOnChange) ? e : !0, GC = (e, n) => !hs(fe(e, n)).length && St(e, n);
const KC = {
  mode: gn.onSubmit,
  reValidateMode: gn.onChange,
  shouldFocusError: !0
};
function QC(e = {}, n) {
  let r = {
    ...KC,
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
  }, a = {}, c = pt(r.defaultValues) || pt(r.values) ? Er(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : Er(c), m = {
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
  }, p = {
    values: jc(),
    array: jc(),
    state: jc()
  }, v = e.resetOptions && e.resetOptions.keepDirtyValues, w = hg(r.mode), S = hg(r.reValidateMode), k = r.criteriaMode === gn.all, T = (O) => (j) => {
    clearTimeout(x), x = setTimeout(O, j);
  }, A = async (O) => {
    if (u.isValid || O) {
      const j = r.resolver ? rn((await Z()).errors) : await Le(a, !0);
      j !== o.isValid && p.state.next({
        isValid: j
      });
    }
  }, L = (O) => u.isValidating && p.state.next({
    isValidating: O
  }), V = (O, j = [], z, ie, X = !0, G = !0) => {
    if (ie && z) {
      if (m.action = !0, G && Array.isArray(fe(a, O))) {
        const de = z(fe(a, O), ie.argA, ie.argB);
        X && Ge(a, O, de);
      }
      if (G && Array.isArray(fe(o.errors, O))) {
        const de = z(fe(o.errors, O), ie.argA, ie.argB);
        X && Ge(o.errors, O, de), GC(o.errors, O);
      }
      if (u.touchedFields && G && Array.isArray(fe(o.touchedFields, O))) {
        const de = z(fe(o.touchedFields, O), ie.argA, ie.argB);
        X && Ge(o.touchedFields, O, de);
      }
      u.dirtyFields && (o.dirtyFields = Bc(c, f)), p.state.next({
        name: O,
        isDirty: le(O, j),
        dirtyFields: o.dirtyFields,
        errors: o.errors,
        isValid: o.isValid
      });
    } else
      Ge(f, O, j);
  }, H = (O, j) => {
    Ge(o.errors, O, j), p.state.next({
      errors: o.errors
    });
  }, J = (O, j, z, ie) => {
    const X = fe(a, O);
    if (X) {
      const G = fe(f, O, st(z) ? fe(c, O) : z);
      st(G) || ie && ie.defaultChecked || j ? Ge(f, O, j ? G : zc(X._f)) : Ee(O, G), m.mount && A();
    }
  }, K = (O, j, z, ie, X) => {
    let G = !1, de = !1;
    const je = {
      name: O
    };
    if (!z || ie) {
      u.isDirty && (de = o.isDirty, o.isDirty = je.isDirty = le(), G = de !== je.isDirty);
      const ze = Pr(fe(c, O), j);
      de = fe(o.dirtyFields, O), ze ? St(o.dirtyFields, O) : Ge(o.dirtyFields, O, !0), je.dirtyFields = o.dirtyFields, G = G || u.dirtyFields && de !== !ze;
    }
    if (z) {
      const ze = fe(o.touchedFields, O);
      ze || (Ge(o.touchedFields, O, z), je.touchedFields = o.touchedFields, G = G || u.touchedFields && ze !== z);
    }
    return G && X && p.state.next(je), G ? je : {};
  }, te = (O, j, z, ie) => {
    const X = fe(o.errors, O), G = u.isValid && Vi(j) && o.isValid !== j;
    if (e.delayError && z ? (g = T(() => H(O, z)), g(e.delayError)) : (clearTimeout(x), g = null, z ? Ge(o.errors, O, z) : St(o.errors, O)), (z ? !Pr(X, z) : X) || !rn(ie) || G) {
      const de = {
        ...ie,
        ...G && Vi(j) ? { isValid: j } : {},
        errors: o.errors,
        name: O
      };
      o = {
        ...o,
        ...de
      }, p.state.next(de);
    }
    L(!1);
  }, Z = async (O) => r.resolver(f, r.context, HC(O || y.mount, a, r.criteriaMode, r.shouldUseNativeValidation)), Ce = async (O) => {
    const { errors: j } = await Z();
    if (O)
      for (const z of O) {
        const ie = fe(j, z);
        ie ? Ge(o.errors, z, ie) : St(o.errors, z);
      }
    else
      o.errors = j;
    return j;
  }, Le = async (O, j, z = {
    valid: !0
  }) => {
    for (const ie in O) {
      const X = O[ie];
      if (X) {
        const { _f: G, ...de } = X;
        if (G) {
          const je = y.array.has(G.name), ze = await wg(X, f, k, r.shouldUseNativeValidation && !j, je);
          if (ze[G.name] && (z.valid = !1, j))
            break;
          !j && (fe(ze, G.name) ? je ? BC(o.errors, ze, G.name) : Ge(o.errors, G.name, ze[G.name]) : St(o.errors, G.name));
        }
        de && await Le(de, j, z);
      }
    }
    return z.valid;
  }, pe = () => {
    for (const O of y.unMount) {
      const j = fe(a, O);
      j && (j._f.refs ? j._f.refs.every((z) => !Vc(z)) : !Vc(j._f.ref)) && _e(O);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, le = (O, j) => (O && j && Ge(f, O, j), !Pr(I(), c)), ae = (O, j, z) => jC(O, y, {
    ...m.mount ? f : st(j) ? c : On(O) ? { [O]: j } : j
  }, z, j), ge = (O) => hs(fe(m.mount ? f : c, O, e.shouldUnregister ? fe(c, O, []) : [])), Ee = (O, j, z = {}) => {
    const ie = fe(a, O);
    let X = j;
    if (ie) {
      const G = ie._f;
      G && (!G.disabled && Ge(f, O, $0(j, G)), X = sl(G.ref) && Dt(j) ? "" : j, V0(G.ref) ? [...G.ref.options].forEach((de) => de.selected = X.includes(de.value)) : G.refs ? ps(G.ref) ? G.refs.length > 1 ? G.refs.forEach((de) => (!de.defaultChecked || !de.disabled) && (de.checked = Array.isArray(X) ? !!X.find((je) => je === de.value) : X === de.value)) : G.refs[0] && (G.refs[0].checked = !!X) : G.refs.forEach((de) => de.checked = de.value === X) : Zf(G.ref) ? G.ref.value = "" : (G.ref.value = X, G.ref.type || p.values.next({
        name: O,
        values: { ...f }
      })));
    }
    (z.shouldDirty || z.shouldTouch) && K(O, X, z.shouldTouch, z.shouldDirty, !0), z.shouldValidate && b(O);
  }, Se = (O, j, z) => {
    for (const ie in j) {
      const X = j[ie], G = `${O}.${ie}`, de = fe(a, G);
      (y.array.has(O) || !ll(X) || de && !de._f) && !Fi(X) ? Se(G, X, z) : Ee(G, X, z);
    }
  }, Y = (O, j, z = {}) => {
    const ie = fe(a, O), X = y.array.has(O), G = Er(j);
    Ge(f, O, G), X ? (p.array.next({
      name: O,
      values: { ...f }
    }), (u.isDirty || u.dirtyFields) && z.shouldDirty && p.state.next({
      name: O,
      dirtyFields: Bc(c, f),
      isDirty: le(O, G)
    })) : ie && !ie._f && !Dt(G) ? Se(O, G, z) : Ee(O, G, z), mg(O, y) && p.state.next({ ...o }), p.values.next({
      name: O,
      values: { ...f }
    }), !m.mount && n();
  }, ue = async (O) => {
    const j = O.target;
    let z = j.name, ie = !0;
    const X = fe(a, z), G = () => j.type ? zc(X._f) : OC(O);
    if (X) {
      let de, je;
      const ze = G(), Nt = O.type === pg.BLUR || O.type === pg.FOCUS_OUT, ni = !WC(X._f) && !r.resolver && !fe(o.errors, z) && !X._f.deps || qC(Nt, fe(o.touchedFields, z), o.isSubmitted, S, w), Vn = mg(z, y, Nt);
      Ge(f, z, ze), Nt ? (X._f.onBlur && X._f.onBlur(O), g && g(0)) : X._f.onChange && X._f.onChange(O);
      const an = K(z, ze, Nt, !1), ri = !rn(an) || Vn;
      if (!Nt && p.values.next({
        name: z,
        type: O.type,
        values: { ...f }
      }), ni)
        return u.isValid && A(), ri && p.state.next({ name: z, ...Vn ? {} : an });
      if (!Nt && Vn && p.state.next({ ...o }), L(!0), r.resolver) {
        const { errors: Sn } = await Z([z]), Bn = _g(o.errors, a, z), Nr = _g(Sn, a, Bn.name || z);
        de = Nr.error, z = Nr.name, je = rn(Sn);
      } else
        de = (await wg(X, f, k, r.shouldUseNativeValidation))[z], ie = isNaN(ze) || ze === fe(f, z, ze), ie && (de ? je = !1 : u.isValid && (je = await Le(a, !0)));
      ie && (X._f.deps && b(X._f.deps), te(z, je, de, an));
    }
  }, b = async (O, j = {}) => {
    let z, ie;
    const X = Ic(O);
    if (L(!0), r.resolver) {
      const G = await Ce(st(O) ? O : X);
      z = rn(G), ie = O ? !X.some((de) => fe(G, de)) : z;
    } else
      O ? (ie = (await Promise.all(X.map(async (G) => {
        const de = fe(a, G);
        return await Le(de && de._f ? { [G]: de } : de);
      }))).every(Boolean), !(!ie && !o.isValid) && A()) : ie = z = await Le(a);
    return p.state.next({
      ...!On(O) || u.isValid && z !== o.isValid ? {} : { name: O },
      ...r.resolver || !O ? { isValid: z } : {},
      errors: o.errors,
      isValidating: !1
    }), j.shouldFocus && !ie && yf(a, (G) => G && fe(o.errors, G), O ? X : y.mount), ie;
  }, I = (O) => {
    const j = {
      ...c,
      ...m.mount ? f : {}
    };
    return st(O) ? j : On(O) ? fe(j, O) : O.map((z) => fe(j, z));
  }, ne = (O, j) => ({
    invalid: !!fe((j || o).errors, O),
    isDirty: !!fe((j || o).dirtyFields, O),
    isTouched: !!fe((j || o).touchedFields, O),
    error: fe((j || o).errors, O)
  }), ke = (O) => {
    O && Ic(O).forEach((j) => St(o.errors, j)), p.state.next({
      errors: O ? o.errors : {}
    });
  }, ve = (O, j, z) => {
    const ie = (fe(a, O, { _f: {} })._f || {}).ref;
    Ge(o.errors, O, {
      ...j,
      ref: ie
    }), p.state.next({
      name: O,
      errors: o.errors,
      isValid: !1
    }), z && z.shouldFocus && ie && ie.focus && ie.focus();
  }, Oe = (O, j) => br(O) ? p.values.subscribe({
    next: (z) => O(ae(void 0, j), z)
  }) : ae(O, j, !0), _e = (O, j = {}) => {
    for (const z of O ? Ic(O) : y.mount)
      y.mount.delete(z), y.array.delete(z), j.keepValue || (St(a, z), St(f, z)), !j.keepError && St(o.errors, z), !j.keepDirty && St(o.dirtyFields, z), !j.keepTouched && St(o.touchedFields, z), !r.shouldUnregister && !j.keepDefaultValue && St(c, z);
    p.values.next({
      values: { ...f }
    }), p.state.next({
      ...o,
      ...j.keepDirty ? { isDirty: le() } : {}
    }), !j.keepIsValid && A();
  }, Pe = (O, j = {}) => {
    let z = fe(a, O);
    const ie = Vi(j.disabled);
    return Ge(a, O, {
      ...z || {},
      _f: {
        ...z && z._f ? z._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...j
      }
    }), y.mount.add(O), z ? ie && Ge(f, O, j.disabled ? void 0 : fe(f, O, zc(z._f))) : J(O, !0, j.value), {
      ...ie ? { disabled: j.disabled } : {},
      ...r.progressive ? {
        required: !!j.required,
        min: zo(j.min),
        max: zo(j.max),
        minLength: zo(j.minLength),
        maxLength: zo(j.maxLength),
        pattern: zo(j.pattern)
      } : {},
      name: O,
      onChange: ue,
      onBlur: ue,
      ref: (X) => {
        if (X) {
          Pe(O, j), z = fe(a, O);
          const G = st(X.value) && X.querySelectorAll && X.querySelectorAll("input,select,textarea")[0] || X, de = UC(G), je = z._f.refs || [];
          if (de ? je.find((ze) => ze === G) : G === z._f.ref)
            return;
          Ge(a, O, {
            _f: {
              ...z._f,
              ...de ? {
                refs: [
                  ...je.filter(Vc),
                  G,
                  ...Array.isArray(fe(c, O)) ? [{}] : []
                ],
                ref: { type: G.type, name: O }
              } : { ref: G }
            }
          }), J(O, !1, void 0, G);
        } else
          z = fe(a, O, {}), z._f && (z._f.mount = !1), (r.shouldUnregister || j.shouldUnregister) && !(MC(y.array, O) && m.action) && y.unMount.add(O);
      }
    };
  }, Ae = () => r.shouldFocusError && yf(a, (O) => O && fe(o.errors, O), y.mount), Qe = (O, j) => async (z) => {
    z && (z.preventDefault && z.preventDefault(), z.persist && z.persist());
    let ie = Er(f);
    if (p.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: X, values: G } = await Z();
      o.errors = X, ie = G;
    } else
      await Le(a);
    St(o.errors, "root"), rn(o.errors) ? (p.state.next({
      errors: {}
    }), await O(ie, z)) : (j && await j({ ...o.errors }, z), Ae(), setTimeout(Ae)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: rn(o.errors),
      submitCount: o.submitCount + 1,
      errors: o.errors
    });
  }, xn = (O, j = {}) => {
    fe(a, O) && (st(j.defaultValue) ? Y(O, fe(c, O)) : (Y(O, j.defaultValue), Ge(c, O, j.defaultValue)), j.keepTouched || St(o.touchedFields, O), j.keepDirty || (St(o.dirtyFields, O), o.isDirty = j.defaultValue ? le(O, fe(c, O)) : le()), j.keepError || (St(o.errors, O), u.isValid && A()), p.state.next({ ...o }));
  }, ut = (O, j = {}) => {
    const z = O || c, ie = Er(z), X = O && !rn(O) ? ie : c;
    if (j.keepDefaultValues || (c = z), !j.keepValues) {
      if (j.keepDirtyValues || v)
        for (const G of y.mount)
          fe(o.dirtyFields, G) ? Ge(X, G, fe(f, G)) : Y(G, fe(X, G));
      else {
        if (Xf && st(O))
          for (const G of y.mount) {
            const de = fe(a, G);
            if (de && de._f) {
              const je = Array.isArray(de._f.refs) ? de._f.refs[0] : de._f.ref;
              if (sl(je)) {
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
      f = e.shouldUnregister ? j.keepDefaultValues ? Er(c) : {} : Er(X), p.array.next({
        values: { ...X }
      }), p.values.next({
        values: { ...X }
      });
    }
    y = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !m.mount && n(), m.mount = !u.isValid || !!j.keepIsValid, m.watch = !!e.shouldUnregister, p.state.next({
      submitCount: j.keepSubmitCount ? o.submitCount : 0,
      isDirty: j.keepDirty ? o.isDirty : !!(j.keepDefaultValues && !Pr(O, c)),
      isSubmitted: j.keepIsSubmitted ? o.isSubmitted : !1,
      dirtyFields: j.keepDirtyValues ? o.dirtyFields : j.keepDefaultValues && O ? Bc(c, O) : {},
      touchedFields: j.keepTouched ? o.touchedFields : {},
      errors: j.keepErrors ? o.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, wn = (O, j) => ut(br(O) ? O(f) : O, j);
  return {
    control: {
      register: Pe,
      unregister: _e,
      getFieldState: ne,
      handleSubmit: Qe,
      setError: ve,
      _executeSchema: Z,
      _getWatch: ae,
      _getDirty: le,
      _updateValid: A,
      _removeUnmounted: pe,
      _updateFieldArray: V,
      _getFieldArray: ge,
      _reset: ut,
      _resetDefaultValues: () => br(r.defaultValues) && r.defaultValues().then((O) => {
        wn(O, r.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (O) => {
        o = {
          ...o,
          ...O
        };
      },
      _subjects: p,
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
      set _state(O) {
        m = O;
      },
      get _defaultValues() {
        return c;
      },
      get _names() {
        return y;
      },
      set _names(O) {
        y = O;
      },
      get _formState() {
        return o;
      },
      set _formState(O) {
        o = O;
      },
      get _options() {
        return r;
      },
      set _options(O) {
        r = {
          ...r,
          ...O
        };
      }
    },
    trigger: b,
    register: Pe,
    handleSubmit: Qe,
    watch: Oe,
    setValue: Y,
    getValues: I,
    reset: wn,
    resetField: xn,
    clearErrors: ke,
    unregister: _e,
    setError: ve,
    setFocus: (O, j = {}) => {
      const z = fe(a, O), ie = z && z._f;
      if (ie) {
        const X = ie.refs ? ie.refs[0] : ie.ref;
        X.focus && (X.focus(), j.shouldSelect && X.select());
      }
    },
    getFieldState: ne
  };
}
function YC(e = {}) {
  const n = yn.useRef(), [r, o] = yn.useState({
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
  n.current || (n.current = {
    ...QC(e, () => o((c) => ({ ...c }))),
    formState: r
  });
  const a = n.current.control;
  return a._options = e, IC({
    subject: a._subjects.state,
    next: (c) => {
      FC(c, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), yn.useEffect(() => {
    e.values && (!Pr(e.values, a._defaultValues) || !Pr(e.values, a._formValues)) ? a._reset(e.values, a._options.resetOptions) : a._resetDefaultValues();
  }, [e.values, a]), yn.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), n.current.formState = NC(r, a), n.current;
}
let Ra;
const XC = new Uint8Array(16);
function JC() {
  if (!Ra && (Ra = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ra))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ra(XC);
}
const _t = [];
for (let e = 0; e < 256; ++e)
  _t.push((e + 256).toString(16).slice(1));
function ZC(e, n = 0) {
  return (_t[e[n + 0]] + _t[e[n + 1]] + _t[e[n + 2]] + _t[e[n + 3]] + "-" + _t[e[n + 4]] + _t[e[n + 5]] + "-" + _t[e[n + 6]] + _t[e[n + 7]] + "-" + _t[e[n + 8]] + _t[e[n + 9]] + "-" + _t[e[n + 10]] + _t[e[n + 11]] + _t[e[n + 12]] + _t[e[n + 13]] + _t[e[n + 14]] + _t[e[n + 15]]).toLowerCase();
}
const eE = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Sg = {
  randomUUID: eE
};
function tE(e, n, r) {
  if (Sg.randomUUID && !n && !e)
    return Sg.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || JC)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, n) {
    r = r || 0;
    for (let a = 0; a < 16; ++a)
      n[r + a] = o[a];
    return n;
  }
  return ZC(o);
}
function U0() {
  return tE();
}
function Oa(e, n, r) {
  const [o, a] = N.useState(n), c = (f) => {
    a(() => f), localStorage.setItem(e, f);
  };
  return N.useEffect(() => {
    const f = localStorage.getItem(e);
    n ? (a(() => n), localStorage.setItem(e, n)) : f ? a(() => f) : r && (localStorage.setItem(e, r), a(() => r));
  }, []), [o, c];
}
const H0 = N.createContext({}), nE = ({ children: e }) => {
  const { user_id: n, email: r, name: o, phone_number: a } = zx(), [c] = Oa("zap_desk:user_id", n, U0()), [f, m] = Oa("zap_desk:email", r), [y, g] = Oa("zap_desk:name", o), [x, u] = Oa("zap_desk:phone", a), p = N.useMemo(() => !!(f && y), [f, y]), v = async ({ email: w, name: S, phone: k }) => {
    m(w), g(S), k && u(k);
  };
  return c ? /* @__PURE__ */ E.jsx(
    H0.Provider,
    {
      value: {
        remoteId: c,
        remoteEmail: f,
        remoteName: y,
        remotePhone: x,
        isAuth: p,
        authenticate: v
      },
      children: e
    }
  ) : /* @__PURE__ */ E.jsx(E.Fragment, {});
}, Al = () => N.useContext(H0), rE = () => {
  const { authenticate: e } = Al(), { go: n } = In(), r = YC({
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    }
  }), o = async (a) => {
    console.log("on Submit", a), await e(a), n("home");
  };
  return /* @__PURE__ */ E.jsxs(bC, { children: [
    /* @__PURE__ */ E.jsx(PC, {}),
    /* @__PURE__ */ E.jsx(RC, {}),
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
}, kg = ({ message: e }) => /* @__PURE__ */ E.jsx("p", { children: e.text }), iE = ({ message: e }) => /* @__PURE__ */ E.jsxs("div", { children: [
  /* @__PURE__ */ E.jsx(
    "img",
    {
      className: "message-image",
      src: `http://localhost:3005/api/messages/${e.id}/files/${e.id}.png`
    }
  ),
  /* @__PURE__ */ E.jsx("p", { children: e.text })
] }), oE = ({ message: e }) => /* @__PURE__ */ E.jsxs("div", { children: [
  /* @__PURE__ */ E.jsx("p", { children: e.text }),
  /* @__PURE__ */ E.jsx(
    "audio",
    {
      controls: !0,
      src: `http://localhost:3005/api/messages/${e.id}/files/${e.id}.mp3`
    }
  )
] });
function W0(e) {
  const { agents: n } = vn();
  return N.useMemo(() => {
    const o = n.find((a) => a.id === e);
    return o || {
      id: "default_bot",
      name: "BOT"
      // picture_url:
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjijpU_i32lxHLhz7WX3bfIxAVweaoT8WSQ&usqp=CAU",
    };
  }, [n, e]);
}
const sE = Te(Ui.div)`
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
    padding: 9px 14px;
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

    img {
      max-width: 100%;
    }

    img.message-image {
      border-radius: 3px;
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
function q0(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: aE } = Object.prototype, { getPrototypeOf: td } = Object, bl = ((e) => (n) => {
  const r = aE.call(n);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), jn = (e) => (e = e.toLowerCase(), (n) => bl(n) === e), Pl = (e) => (n) => typeof n === e, { isArray: Gi } = Array, ss = Pl("undefined");
function lE(e) {
  return e !== null && !ss(e) && e.constructor !== null && !ss(e.constructor) && sn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const G0 = jn("ArrayBuffer");
function uE(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && G0(e.buffer), n;
}
const cE = Pl("string"), sn = Pl("function"), K0 = Pl("number"), Rl = (e) => e !== null && typeof e == "object", fE = (e) => e === !0 || e === !1, za = (e) => {
  if (bl(e) !== "object")
    return !1;
  const n = td(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, dE = jn("Date"), pE = jn("File"), hE = jn("Blob"), mE = jn("FileList"), gE = (e) => Rl(e) && sn(e.pipe), yE = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || sn(e.append) && ((n = bl(e)) === "formdata" || // detect form-data instance
  n === "object" && sn(e.toString) && e.toString() === "[object FormData]"));
}, vE = jn("URLSearchParams"), xE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ms(e, n, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, a;
  if (typeof e != "object" && (e = [e]), Gi(e))
    for (o = 0, a = e.length; o < a; o++)
      n.call(null, e[o], o, e);
  else {
    const c = r ? Object.getOwnPropertyNames(e) : Object.keys(e), f = c.length;
    let m;
    for (o = 0; o < f; o++)
      m = c[o], n.call(null, e[m], m, e);
  }
}
function Q0(e, n) {
  n = n.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, a;
  for (; o-- > 0; )
    if (a = r[o], n === a.toLowerCase())
      return a;
  return null;
}
const Y0 = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), X0 = (e) => !ss(e) && e !== Y0;
function vf() {
  const { caseless: e } = X0(this) && this || {}, n = {}, r = (o, a) => {
    const c = e && Q0(n, a) || a;
    za(n[c]) && za(o) ? n[c] = vf(n[c], o) : za(o) ? n[c] = vf({}, o) : Gi(o) ? n[c] = o.slice() : n[c] = o;
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ms(arguments[o], r);
  return n;
}
const wE = (e, n, r, { allOwnKeys: o } = {}) => (ms(n, (a, c) => {
  r && sn(a) ? e[c] = q0(a, r) : e[c] = a;
}, { allOwnKeys: o }), e), _E = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), SE = (e, n, r, o) => {
  e.prototype = Object.create(n.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), r && Object.assign(e.prototype, r);
}, kE = (e, n, r, o) => {
  let a, c, f;
  const m = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (a = Object.getOwnPropertyNames(e), c = a.length; c-- > 0; )
      f = a[c], (!o || o(f, e, n)) && !m[f] && (n[f] = e[f], m[f] = !0);
    e = r !== !1 && td(e);
  } while (e && (!r || r(e, n)) && e !== Object.prototype);
  return n;
}, TE = (e, n, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= n.length;
  const o = e.indexOf(n, r);
  return o !== -1 && o === r;
}, CE = (e) => {
  if (!e)
    return null;
  if (Gi(e))
    return e;
  let n = e.length;
  if (!K0(n))
    return null;
  const r = new Array(n);
  for (; n-- > 0; )
    r[n] = e[n];
  return r;
}, EE = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && td(Uint8Array)), AE = (e, n) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = o.next()) && !a.done; ) {
    const c = a.value;
    n.call(e, c[0], c[1]);
  }
}, bE = (e, n) => {
  let r;
  const o = [];
  for (; (r = e.exec(n)) !== null; )
    o.push(r);
  return o;
}, PE = jn("HTMLFormElement"), RE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, a) {
    return o.toUpperCase() + a;
  }
), Tg = (({ hasOwnProperty: e }) => (n, r) => e.call(n, r))(Object.prototype), OE = jn("RegExp"), J0 = (e, n) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ms(r, (a, c) => {
    n(a, c, e) !== !1 && (o[c] = a);
  }), Object.defineProperties(e, o);
}, LE = (e) => {
  J0(e, (n, r) => {
    if (sn(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (sn(o)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ME = (e, n) => {
  const r = {}, o = (a) => {
    a.forEach((c) => {
      r[c] = !0;
    });
  };
  return Gi(e) ? o(e) : o(String(e).split(n)), r;
}, DE = () => {
}, NE = (e, n) => (e = +e, Number.isFinite(e) ? e : n), $c = "abcdefghijklmnopqrstuvwxyz", Cg = "0123456789", Z0 = {
  DIGIT: Cg,
  ALPHA: $c,
  ALPHA_DIGIT: $c + $c.toUpperCase() + Cg
}, FE = (e = 16, n = Z0.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = n;
  for (; e--; )
    r += n[Math.random() * o | 0];
  return r;
};
function IE(e) {
  return !!(e && sn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const jE = (e) => {
  const n = new Array(10), r = (o, a) => {
    if (Rl(o)) {
      if (n.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        n[a] = o;
        const c = Gi(o) ? [] : {};
        return ms(o, (f, m) => {
          const y = r(f, a + 1);
          !ss(y) && (c[m] = y);
        }), n[a] = void 0, c;
      }
    }
    return o;
  };
  return r(e, 0);
}, VE = jn("AsyncFunction"), BE = (e) => e && (Rl(e) || sn(e)) && sn(e.then) && sn(e.catch), B = {
  isArray: Gi,
  isArrayBuffer: G0,
  isBuffer: lE,
  isFormData: yE,
  isArrayBufferView: uE,
  isString: cE,
  isNumber: K0,
  isBoolean: fE,
  isObject: Rl,
  isPlainObject: za,
  isUndefined: ss,
  isDate: dE,
  isFile: pE,
  isBlob: hE,
  isRegExp: OE,
  isFunction: sn,
  isStream: gE,
  isURLSearchParams: vE,
  isTypedArray: EE,
  isFileList: mE,
  forEach: ms,
  merge: vf,
  extend: wE,
  trim: xE,
  stripBOM: _E,
  inherits: SE,
  toFlatObject: kE,
  kindOf: bl,
  kindOfTest: jn,
  endsWith: TE,
  toArray: CE,
  forEachEntry: AE,
  matchAll: bE,
  isHTMLForm: PE,
  hasOwnProperty: Tg,
  hasOwnProp: Tg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: J0,
  freezeMethods: LE,
  toObjectSet: ME,
  toCamelCase: RE,
  noop: DE,
  toFiniteNumber: NE,
  findKey: Q0,
  global: Y0,
  isContextDefined: X0,
  ALPHABET: Z0,
  generateString: FE,
  isSpecCompliantForm: IE,
  toJSONObject: jE,
  isAsyncFn: VE,
  isThenable: BE
};
function De(e, n, r, o, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), r && (this.config = r), o && (this.request = o), a && (this.response = a);
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
const ev = De.prototype, tv = {};
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
  tv[e] = { value: e };
});
Object.defineProperties(De, tv);
Object.defineProperty(ev, "isAxiosError", { value: !0 });
De.from = (e, n, r, o, a, c) => {
  const f = Object.create(ev);
  return B.toFlatObject(e, f, function(y) {
    return y !== Error.prototype;
  }, (m) => m !== "isAxiosError"), De.call(f, e.message, n, r, o, a), f.cause = e, f.name = e.name, c && Object.assign(f, c), f;
};
const zE = null;
function xf(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function nv(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Eg(e, n, r) {
  return e ? e.concat(n).map(function(a, c) {
    return a = nv(a), !r && c ? "[" + a + "]" : a;
  }).join(r ? "." : "") : n;
}
function $E(e) {
  return B.isArray(e) && !e.some(xf);
}
const UE = B.toFlatObject(B, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Ol(e, n, r) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), r = B.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, k) {
    return !B.isUndefined(k[S]);
  });
  const o = r.metaTokens, a = r.visitor || x, c = r.dots, f = r.indexes, y = (r.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(n);
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
      else if (B.isArray(w) && $E(w) || (B.isFileList(w) || B.endsWith(S, "[]")) && (T = B.toArray(w)))
        return S = nv(S), T.forEach(function(L, V) {
          !(B.isUndefined(L) || L === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Eg([S], V, c) : f === null ? S : S + "[]",
            g(L)
          );
        }), !1;
    }
    return xf(w) ? !0 : (n.append(Eg(k, S, c), g(w)), !1);
  }
  const u = [], p = Object.assign(UE, {
    defaultVisitor: x,
    convertValue: g,
    isVisitable: xf
  });
  function v(w, S) {
    if (!B.isUndefined(w)) {
      if (u.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      u.push(w), B.forEach(w, function(T, A) {
        (!(B.isUndefined(T) || T === null) && a.call(
          n,
          T,
          B.isString(A) ? A.trim() : A,
          S,
          p
        )) === !0 && v(T, S ? S.concat(A) : [A]);
      }), u.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), n;
}
function Ag(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return n[o];
  });
}
function nd(e, n) {
  this._pairs = [], e && Ol(e, this, n);
}
const rv = nd.prototype;
rv.append = function(n, r) {
  this._pairs.push([n, r]);
};
rv.toString = function(n) {
  const r = n ? function(o) {
    return n.call(this, o, Ag);
  } : Ag;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function HE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function iv(e, n, r) {
  if (!n)
    return e;
  const o = r && r.encode || HE, a = r && r.serialize;
  let c;
  if (a ? c = a(n, r) : c = B.isURLSearchParams(n) ? n.toString() : new nd(n, r).toString(o), c) {
    const f = e.indexOf("#");
    f !== -1 && (e = e.slice(0, f)), e += (e.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return e;
}
class WE {
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
  use(n, r, o) {
    return this.handlers.push({
      fulfilled: n,
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
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
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
  forEach(n) {
    B.forEach(this.handlers, function(o) {
      o !== null && n(o);
    });
  }
}
const bg = WE, ov = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qE = typeof URLSearchParams < "u" ? URLSearchParams : nd, GE = typeof FormData < "u" ? FormData : null, KE = typeof Blob < "u" ? Blob : null, QE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), YE = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ln = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qE,
    FormData: GE,
    Blob: KE
  },
  isStandardBrowserEnv: QE,
  isStandardBrowserWebWorkerEnv: YE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function XE(e, n) {
  return Ol(e, new Ln.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, a, c) {
      return Ln.isNode && B.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function JE(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function ZE(e) {
  const n = {}, r = Object.keys(e);
  let o;
  const a = r.length;
  let c;
  for (o = 0; o < a; o++)
    c = r[o], n[c] = e[c];
  return n;
}
function sv(e) {
  function n(r, o, a, c) {
    let f = r[c++];
    const m = Number.isFinite(+f), y = c >= r.length;
    return f = !f && B.isArray(a) ? a.length : f, y ? (B.hasOwnProp(a, f) ? a[f] = [a[f], o] : a[f] = o, !m) : ((!a[f] || !B.isObject(a[f])) && (a[f] = []), n(r, o, a[f], c) && B.isArray(a[f]) && (a[f] = ZE(a[f])), !m);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const r = {};
    return B.forEachEntry(e, (o, a) => {
      n(JE(o), a, r, 0);
    }), r;
  }
  return null;
}
const eA = {
  "Content-Type": void 0
};
function tA(e, n, r) {
  if (B.isString(e))
    try {
      return (n || JSON.parse)(e), B.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const Ll = {
  transitional: ov,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, r) {
    const o = r.getContentType() || "", a = o.indexOf("application/json") > -1, c = B.isObject(n);
    if (c && B.isHTMLForm(n) && (n = new FormData(n)), B.isFormData(n))
      return a && a ? JSON.stringify(sv(n)) : n;
    if (B.isArrayBuffer(n) || B.isBuffer(n) || B.isStream(n) || B.isFile(n) || B.isBlob(n))
      return n;
    if (B.isArrayBufferView(n))
      return n.buffer;
    if (B.isURLSearchParams(n))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let m;
    if (c) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return XE(n, this.formSerializer).toString();
      if ((m = B.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return Ol(
          m ? { "files[]": n } : n,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return c || a ? (r.setContentType("application/json", !1), tA(n)) : n;
  }],
  transformResponse: [function(n) {
    const r = this.transitional || Ll.transitional, o = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (n && B.isString(n) && (o && !this.responseType || a)) {
      const f = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(n);
      } catch (m) {
        if (f)
          throw m.name === "SyntaxError" ? De.from(m, De.ERR_BAD_RESPONSE, this, null, this.response) : m;
      }
    }
    return n;
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
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
B.forEach(["delete", "get", "head"], function(n) {
  Ll.headers[n] = {};
});
B.forEach(["post", "put", "patch"], function(n) {
  Ll.headers[n] = B.merge(eA);
});
const rd = Ll, nA = B.toObjectSet([
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
]), rA = (e) => {
  const n = {};
  let r, o, a;
  return e && e.split(`
`).forEach(function(f) {
    a = f.indexOf(":"), r = f.substring(0, a).trim().toLowerCase(), o = f.substring(a + 1).trim(), !(!r || n[r] && nA[r]) && (r === "set-cookie" ? n[r] ? n[r].push(o) : n[r] = [o] : n[r] = n[r] ? n[r] + ", " + o : o);
  }), n;
}, Pg = Symbol("internals");
function $o(e) {
  return e && String(e).trim().toLowerCase();
}
function $a(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map($a) : String(e);
}
function iA(e) {
  const n = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    n[o[1]] = o[2];
  return n;
}
const oA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Uc(e, n, r, o, a) {
  if (B.isFunction(o))
    return o.call(this, n, r);
  if (a && (n = r), !!B.isString(n)) {
    if (B.isString(o))
      return n.indexOf(o) !== -1;
    if (B.isRegExp(o))
      return o.test(n);
  }
}
function sA(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, r, o) => r.toUpperCase() + o);
}
function aA(e, n) {
  const r = B.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(a, c, f) {
        return this[o].call(this, n, a, c, f);
      },
      configurable: !0
    });
  });
}
class Ml {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, o) {
    const a = this;
    function c(m, y, g) {
      const x = $o(y);
      if (!x)
        throw new Error("header name must be a non-empty string");
      const u = B.findKey(a, x);
      (!u || a[u] === void 0 || g === !0 || g === void 0 && a[u] !== !1) && (a[u || y] = $a(m));
    }
    const f = (m, y) => B.forEach(m, (g, x) => c(g, x, y));
    return B.isPlainObject(n) || n instanceof this.constructor ? f(n, r) : B.isString(n) && (n = n.trim()) && !oA(n) ? f(rA(n), r) : n != null && c(r, n, o), this;
  }
  get(n, r) {
    if (n = $o(n), n) {
      const o = B.findKey(this, n);
      if (o) {
        const a = this[o];
        if (!r)
          return a;
        if (r === !0)
          return iA(a);
        if (B.isFunction(r))
          return r.call(this, a, o);
        if (B.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (n = $o(n), n) {
      const o = B.findKey(this, n);
      return !!(o && this[o] !== void 0 && (!r || Uc(this, this[o], o, r)));
    }
    return !1;
  }
  delete(n, r) {
    const o = this;
    let a = !1;
    function c(f) {
      if (f = $o(f), f) {
        const m = B.findKey(o, f);
        m && (!r || Uc(o, o[m], m, r)) && (delete o[m], a = !0);
      }
    }
    return B.isArray(n) ? n.forEach(c) : c(n), a;
  }
  clear(n) {
    const r = Object.keys(this);
    let o = r.length, a = !1;
    for (; o--; ) {
      const c = r[o];
      (!n || Uc(this, this[c], c, n, !0)) && (delete this[c], a = !0);
    }
    return a;
  }
  normalize(n) {
    const r = this, o = {};
    return B.forEach(this, (a, c) => {
      const f = B.findKey(o, c);
      if (f) {
        r[f] = $a(a), delete r[c];
        return;
      }
      const m = n ? sA(c) : String(c).trim();
      m !== c && delete r[c], r[m] = $a(a), o[m] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = /* @__PURE__ */ Object.create(null);
    return B.forEach(this, (o, a) => {
      o != null && o !== !1 && (r[a] = n && B.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...r) {
    const o = new this(n);
    return r.forEach((a) => o.set(a)), o;
  }
  static accessor(n) {
    const o = (this[Pg] = this[Pg] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function c(f) {
      const m = $o(f);
      o[m] || (aA(a, f), o[m] = !0);
    }
    return B.isArray(n) ? n.forEach(c) : c(n), this;
  }
}
Ml.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.freezeMethods(Ml.prototype);
B.freezeMethods(Ml);
const tr = Ml;
function Hc(e, n) {
  const r = this || rd, o = n || r, a = tr.from(o.headers);
  let c = o.data;
  return B.forEach(e, function(m) {
    c = m.call(r, c, a.normalize(), n ? n.status : void 0);
  }), a.normalize(), c;
}
function av(e) {
  return !!(e && e.__CANCEL__);
}
function gs(e, n, r) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, n, r), this.name = "CanceledError";
}
B.inherits(gs, De, {
  __CANCEL__: !0
});
function lA(e, n, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : n(new De(
    "Request failed with status code " + r.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const uA = Ln.isStandardBrowserEnv ? (
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
function cA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fA(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function lv(e, n) {
  return e && !cA(n) ? fA(e, n) : n;
}
const dA = Ln.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let o;
    function a(c) {
      let f = c;
      return n && (r.setAttribute("href", f), f = r.href), r.setAttribute("href", f), {
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
function pA(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function hA(e, n) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let a = 0, c = 0, f;
  return n = n !== void 0 ? n : 1e3, function(y) {
    const g = Date.now(), x = o[c];
    f || (f = g), r[a] = y, o[a] = g;
    let u = c, p = 0;
    for (; u !== a; )
      p += r[u++], u = u % e;
    if (a = (a + 1) % e, a === c && (c = (c + 1) % e), g - f < n)
      return;
    const v = x && g - x;
    return v ? Math.round(p * 1e3 / v) : void 0;
  };
}
function Rg(e, n) {
  let r = 0;
  const o = hA(50, 250);
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
    x[n ? "download" : "upload"] = !0, e(x);
  };
}
const mA = typeof XMLHttpRequest < "u", gA = mA && function(e) {
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
    const x = lv(e.baseURL, e.url);
    g.open(e.method.toUpperCase(), iv(x, e.params, e.paramsSerializer), !0), g.timeout = e.timeout;
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
      lA(function(T) {
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
      const S = e.transitional || ov;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), o(new De(
        w,
        S.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        e,
        g
      )), g = null;
    }, Ln.isStandardBrowserEnv) {
      const v = (e.withCredentials || dA(x)) && e.xsrfCookieName && uA.read(e.xsrfCookieName);
      v && c.set(e.xsrfHeaderName, v);
    }
    a === void 0 && c.setContentType(null), "setRequestHeader" in g && B.forEach(c.toJSON(), function(w, S) {
      g.setRequestHeader(S, w);
    }), B.isUndefined(e.withCredentials) || (g.withCredentials = !!e.withCredentials), f && f !== "json" && (g.responseType = e.responseType), typeof e.onDownloadProgress == "function" && g.addEventListener("progress", Rg(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && g.upload && g.upload.addEventListener("progress", Rg(e.onUploadProgress)), (e.cancelToken || e.signal) && (m = (v) => {
      g && (o(!v || v.type ? new gs(null, e, g) : v), g.abort(), g = null);
    }, e.cancelToken && e.cancelToken.subscribe(m), e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m)));
    const p = pA(x);
    if (p && Ln.protocols.indexOf(p) === -1) {
      o(new De("Unsupported protocol " + p + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, Ua = {
  http: zE,
  xhr: gA
};
B.forEach(Ua, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const yA = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, o;
    for (let a = 0; a < n && (r = e[a], !(o = B.isString(r) ? Ua[r.toLowerCase()] : r)); a++)
      ;
    if (!o)
      throw o === !1 ? new De(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        B.hasOwnProp(Ua, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!B.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Ua
};
function Wc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gs(null, e);
}
function Og(e) {
  return Wc(e), e.headers = tr.from(e.headers), e.data = Hc.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yA.getAdapter(e.adapter || rd.adapter)(e).then(function(o) {
    return Wc(e), o.data = Hc.call(
      e,
      e.transformResponse,
      o
    ), o.headers = tr.from(o.headers), o;
  }, function(o) {
    return av(o) || (Wc(e), o && o.response && (o.response.data = Hc.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = tr.from(o.response.headers))), Promise.reject(o);
  });
}
const Lg = (e) => e instanceof tr ? e.toJSON() : e;
function Hi(e, n) {
  n = n || {};
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
    if (u in n)
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
    headers: (g, x) => a(Lg(g), Lg(x), !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, n)), function(x) {
    const u = y[x] || a, p = u(e[x], n[x], x);
    B.isUndefined(p) && u !== m || (r[x] = p);
  }), r;
}
const uv = "1.4.0", id = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  id[e] = function(o) {
    return typeof o === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const Mg = {};
id.transitional = function(n, r, o) {
  function a(c, f) {
    return "[Axios v" + uv + "] Transitional option '" + c + "'" + f + (o ? ". " + o : "");
  }
  return (c, f, m) => {
    if (n === !1)
      throw new De(
        a(f, " has been removed" + (r ? " in " + r : "")),
        De.ERR_DEPRECATED
      );
    return r && !Mg[f] && (Mg[f] = !0, console.warn(
      a(
        f,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(c, f, m) : !0;
  };
};
function vA(e, n, r) {
  if (typeof e != "object")
    throw new De("options must be an object", De.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let a = o.length;
  for (; a-- > 0; ) {
    const c = o[a], f = n[c];
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
const wf = {
  assertOptions: vA,
  validators: id
}, Tr = wf.validators;
class cl {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new bg(),
      response: new bg()
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
  request(n, r) {
    typeof n == "string" ? (r = r || {}, r.url = n) : r = n || {}, r = Hi(this.defaults, r);
    const { transitional: o, paramsSerializer: a, headers: c } = r;
    o !== void 0 && wf.assertOptions(o, {
      silentJSONParsing: Tr.transitional(Tr.boolean),
      forcedJSONParsing: Tr.transitional(Tr.boolean),
      clarifyTimeoutError: Tr.transitional(Tr.boolean)
    }, !1), a != null && (B.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : wf.assertOptions(a, {
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
    let x, u = 0, p;
    if (!y) {
      const w = [Og.bind(this), void 0];
      for (w.unshift.apply(w, m), w.push.apply(w, g), p = w.length, x = Promise.resolve(r); u < p; )
        x = x.then(w[u++], w[u++]);
      return x;
    }
    p = m.length;
    let v = r;
    for (u = 0; u < p; ) {
      const w = m[u++], S = m[u++];
      try {
        v = w(v);
      } catch (k) {
        S.call(this, k);
        break;
      }
    }
    try {
      x = Og.call(this, v);
    } catch (w) {
      return Promise.reject(w);
    }
    for (u = 0, p = g.length; u < p; )
      x = x.then(g[u++], g[u++]);
    return x;
  }
  getUri(n) {
    n = Hi(this.defaults, n);
    const r = lv(n.baseURL, n.url);
    return iv(r, n.params, n.paramsSerializer);
  }
}
B.forEach(["delete", "get", "head", "options"], function(n) {
  cl.prototype[n] = function(r, o) {
    return this.request(Hi(o || {}, {
      method: n,
      url: r,
      data: (o || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(n) {
  function r(o) {
    return function(c, f, m) {
      return this.request(Hi(m || {}, {
        method: n,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: f
      }));
    };
  }
  cl.prototype[n] = r(), cl.prototype[n + "Form"] = r(!0);
});
const Ha = cl;
class od {
  constructor(n) {
    if (typeof n != "function")
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
    }, n(function(c, f, m) {
      o.reason || (o.reason = new gs(c, f, m), r(o.reason));
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
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new od(function(a) {
        n = a;
      }),
      cancel: n
    };
  }
}
const xA = od;
function wA(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function _A(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const _f = {
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
Object.entries(_f).forEach(([e, n]) => {
  _f[n] = e;
});
const SA = _f;
function cv(e) {
  const n = new Ha(e), r = q0(Ha.prototype.request, n);
  return B.extend(r, Ha.prototype, n, { allOwnKeys: !0 }), B.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(a) {
    return cv(Hi(e, a));
  }, r;
}
const ht = cv(rd);
ht.Axios = Ha;
ht.CanceledError = gs;
ht.CancelToken = xA;
ht.isCancel = av;
ht.VERSION = uv;
ht.toFormData = Ol;
ht.AxiosError = De;
ht.Cancel = ht.CanceledError;
ht.all = function(n) {
  return Promise.all(n);
};
ht.spread = wA;
ht.isAxiosError = _A;
ht.mergeConfig = Hi;
ht.AxiosHeaders = tr;
ht.formToJSON = (e) => sv(B.isHTMLForm(e) ? new FormData(e) : e);
ht.HttpStatusCode = SA;
ht.default = ht;
const Dg = ht;
function Sf(e, n = new FormData(), r) {
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const a = e[o], c = r ? `${r}[${o}]` : o;
      if (a instanceof File)
        n.append(c, a);
      else if (typeof a == "object" && !(a instanceof Date) && !(a instanceof Array))
        Sf(a, n, c);
      else if (a instanceof Array)
        for (let f = 0; f < a.length; f++) {
          const m = `${c}[${f}]`;
          typeof a[f] == "object" && !(a[f] instanceof Date) && !(a[f] instanceof Array) ? Sf(a[f], n, m) : n.append(m, a[f]);
        }
      else
        n.append(c, a);
    }
  return n;
}
function fv() {
  const { remoteId: e } = Al();
  return e;
}
const dv = N.createContext({}), kA = ({ children: e, app_id: n }) => n ? /* @__PURE__ */ E.jsx(dv.Provider, { value: { sessionId: n }, children: e }) : /* @__PURE__ */ E.jsx(E.Fragment, {});
function TA() {
  return N.useContext(dv);
}
function CA() {
  const { sessionId: e } = TA();
  return e;
}
function Ki() {
  const { api_url: e } = vn(), { remoteName: n, remoteEmail: r } = Al(), o = fv(), a = CA(), c = hl();
  return {
    loadConversationsRequest: async (x) => Dg(`${e}/api/conversations/${a}/${o}`, {
      method: "get",
      params: { conversationIds: x }
    }).then((u) => u.data.data.conversations),
    loadMessagesRequest: async (x, u) => Dg(`${e}/api/conversations/${x}/messages`, {
      method: "get",
      params: { messageIds: u }
    }).then((p) => p.data.data.messages),
    createConversationRequest: async () => {
      const x = U0();
      return fetch(`${e}/api/conversations`, {
        method: "post",
        body: JSON.stringify({
          remoteId: o,
          sessionId: a,
          conversationId: x
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then((u) => u.json()).then((u) => u.data.id);
    },
    sendMessageRequest: async ({
      text: x,
      conversationId: u,
      file: p
    }) => {
      const w = {
        message: {
          text: x,
          type: (() => p ? p.type.startsWith("video") ? "video" : p.type.startsWith("audio") ? "audio" : p.type.startsWith("image") ? "image" : "document" : "text")(),
          to: `conversation:${u}`,
          from: `remote:${o}`,
          user: {
            email: r,
            name: n
          }
        },
        file: p
      }, S = Sf(w), k = await fetch(`${e}/api/messages/inbound`, {
        method: "post",
        body: S
      }).then((T) => T.json()).then((T) => T.data.message);
      return c.emit("message", { message: k }), k;
    }
  };
}
const EA = ({ message: e }) => {
  var r;
  const { sendMessageRequest: n } = Ki();
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx("div", { className: "buttons", children: (r = e.buttons) == null ? void 0 : r.map((o, a) => /* @__PURE__ */ E.jsx(
    "button",
    {
      disabled: !e.isLastMessage,
      onClick: () => {
        n({
          conversationId: e.conversationId,
          text: o.value
        });
      },
      children: o.label
    },
    a
  )) }) });
}, AA = ({ message: e }) => {
  const n = e.fromRemote, { picture_url: r, name: o } = W0(e.agentId);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(
    sE,
    {
      fromMe: n,
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
        !n && /* @__PURE__ */ E.jsx("div", { className: "avatar", title: o, children: r ? /* @__PURE__ */ E.jsx("img", { src: r }) : /* @__PURE__ */ E.jsx(Yf, {}) }),
        /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: ["message-container", `message-${e.type}`].join(" "),
            children: [
              e.type === "buttons" && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                /* @__PURE__ */ E.jsx(kg, { message: e }),
                /* @__PURE__ */ E.jsx(EA, { message: e })
              ] }),
              e.type === "text" && /* @__PURE__ */ E.jsx(kg, { message: e }),
              e.type === "image" && e._count.files > 0 && /* @__PURE__ */ E.jsx(iE, { message: e }),
              e.type === "audio" && e._count.files > 0 && /* @__PURE__ */ E.jsx(oE, { message: e })
            ]
          }
        )
      ]
    }
  ) });
}, bA = () => /* @__PURE__ */ E.jsx(
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
), PA = Te.div`
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
`, RA = Te.button`
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
`, OA = Te.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${(e) => e.theme.colors.primary};
  background: white;
`, Ng = (e) => {
  let n;
  const r = /* @__PURE__ */ new Set(), o = (y, g) => {
    const x = typeof y == "function" ? y(n) : y;
    if (!Object.is(x, n)) {
      const u = n;
      n = g ?? typeof x != "object" ? x : Object.assign({}, n, x), r.forEach((p) => p(n, u));
    }
  }, a = () => n, m = { setState: o, getState: a, subscribe: (y) => (r.add(y), () => r.delete(y)), destroy: () => {
    ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return n = e(o, a, m), m;
}, LA = (e) => e ? Ng(e) : Ng;
var pv = { exports: {} }, qc = {}, Gc = { exports: {} }, Kc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fg;
function MA() {
  if (Fg)
    return Kc;
  Fg = 1;
  var e = N;
  function n(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = e.useState, a = e.useEffect, c = e.useLayoutEffect, f = e.useDebugValue;
  function m(u, p) {
    var v = p(), w = o({ inst: { value: v, getSnapshot: p } }), S = w[0].inst, k = w[1];
    return c(function() {
      S.value = v, S.getSnapshot = p, y(S) && k({ inst: S });
    }, [u, v, p]), a(function() {
      return y(S) && k({ inst: S }), u(function() {
        y(S) && k({ inst: S });
      });
    }, [u]), f(v), v;
  }
  function y(u) {
    var p = u.getSnapshot;
    u = u.value;
    try {
      var v = p();
      return !r(u, v);
    } catch {
      return !0;
    }
  }
  function g(u, p) {
    return p();
  }
  var x = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : m;
  return Kc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x, Kc;
}
var Ig;
function DA() {
  return Ig || (Ig = 1, Gc.exports = MA()), Gc.exports;
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
var jg;
function NA() {
  if (jg)
    return qc;
  jg = 1;
  var e = N, n = DA();
  function r(g, x) {
    return g === x && (g !== 0 || 1 / g === 1 / x) || g !== g && x !== x;
  }
  var o = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, c = e.useRef, f = e.useEffect, m = e.useMemo, y = e.useDebugValue;
  return qc.useSyncExternalStoreWithSelector = function(g, x, u, p, v) {
    var w = c(null);
    if (w.current === null) {
      var S = { hasValue: !1, value: null };
      w.current = S;
    } else
      S = w.current;
    w = m(function() {
      function T(J) {
        if (!A) {
          if (A = !0, L = J, J = p(J), v !== void 0 && S.hasValue) {
            var K = S.value;
            if (v(K, J))
              return V = K;
          }
          return V = J;
        }
        if (K = V, o(L, J))
          return K;
        var te = p(J);
        return v !== void 0 && v(K, te) ? K : (L = J, V = te);
      }
      var A = !1, L, V, H = u === void 0 ? null : u;
      return [function() {
        return T(x());
      }, H === null ? void 0 : function() {
        return T(H());
      }];
    }, [x, u, p, v]);
    var k = a(g, w[0], w[1]);
    return f(function() {
      S.hasValue = !0, S.value = k;
    }, [k]), y(k), k;
  }, qc;
}
pv.exports = NA();
var FA = pv.exports;
const IA = /* @__PURE__ */ dl(FA), { useSyncExternalStoreWithSelector: jA } = IA;
function VA(e, n = e.getState, r) {
  const o = jA(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    n,
    r
  );
  return N.useDebugValue(o), o;
}
const Vg = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const n = typeof e == "function" ? LA(e) : e, r = (o, a) => VA(n, o, a);
  return Object.assign(r, n), r;
}, hv = (e) => e ? Vg(e) : Vg, rr = hv((e) => ({
  conversations: [],
  set: (n) => e({ conversations: n }),
  update: (n, r) => {
    e((o) => ({
      conversations: o.conversations.map((a) => a.id === n ? {
        ...a,
        ...r
      } : a)
    }));
  },
  add: (n) => {
    e((r) => ({
      conversations: [...r.conversations, n]
    }));
  }
})), BA = () => {
  const { removeConversation: e, conversationId: n } = In(), {
    app: { name: r }
  } = vn(), o = rr((a) => a.conversations.find((c) => c.id === n));
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(PA, { children: [
    /* @__PURE__ */ E.jsx(
      RA,
      {
        onClick: () => {
          e();
        },
        children: /* @__PURE__ */ E.jsx(bA, {})
      }
    ),
    /* @__PURE__ */ E.jsx(OA, { children: /* @__PURE__ */ E.jsx(ds, {}) }),
    /* @__PURE__ */ E.jsxs("div", { className: "header-infos", children: [
      /* @__PURE__ */ E.jsx("span", { className: "title", children: r }),
      o.isTyping && /* @__PURE__ */ E.jsx("span", { className: "subtitle", children: "Digitando..." })
    ] })
  ] }) });
}, zA = ({
  className: e,
  ...n
}) => /* @__PURE__ */ E.jsx(
  "div",
  {
    className: ["flex flex-row", e].filter((r) => !!r).join(" "),
    ...n
  }
), $A = Te.form`
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
`, UA = Te.input`
  flex: 1;
  height: 100%;
  padding-left: 20px;
  outline: none;
  font-size: 14px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`, HA = Te.button`
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
`, WA = () => /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
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
function qA(e, n = {}) {
  const r = Object.assign(
    document.createElement("input"),
    { type: "file" },
    n
  );
  r.addEventListener("change", async (o) => {
    const a = Array.from(o.target.files || []);
    await e(a);
  }), r.click();
}
const mv = hv((e) => ({
  messages: [],
  set: (n) => e({ messages: n }),
  update: (n, r) => {
    e((o) => ({
      messages: o.messages.map((a) => a.id === n ? {
        ...a,
        ...r
      } : a)
    }));
  },
  add: (n) => {
    e((r) => ({
      messages: [...r.messages, n]
    }));
  },
  updateOrCreateMany: (n) => {
    e((r) => {
      const o = [...r.messages];
      return n.forEach((a) => {
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
function gv(e) {
  const n = mv(
    (a) => a.messages.filter((c) => c.conversationId === e)
  ), r = N.useMemo(() => n.sort((a, c) => Wi(a.createdAt) - Wi(c.createdAt)).map((a, c) => ({
    ...a,
    isLastMessage: c + 1 === n.length
  })), [n]), o = N.useMemo(() => r.find((a) => a.isLastMessage), [r]);
  return {
    messages: r,
    lastMessage: o
  };
}
const GA = () => {
  const { conversationId: e } = In(), { sendMessageRequest: n } = Ki(), [r, o] = N.useState(""), [a, c] = N.useState(), [f, m] = N.useState(!1), [y, g] = N.useState("Mensagem"), x = N.useRef(setTimeout(() => {
  }, 0)), { lastMessage: u } = gv(e), p = rr((k) => {
    var A;
    return !!((A = k.conversations.find(
      (L) => L.id === e
    )) == null ? void 0 : A.isClosed);
  }), v = N.useMemo(() => (u == null ? void 0 : u.type) === "buttons" || p, [f, u, p]), w = () => {
    c(() => {
    }), o(() => ""), m(() => !1);
  }, S = async () => {
    if (!r) {
      clearTimeout(x.current), g(() => "Digite uma mensagem para enviar..."), x.current = setTimeout(
        () => g(() => "Mensagem"),
        1e3
      );
      return;
    }
    m(() => !0), await n({
      conversationId: e,
      text: r
    }), m(() => !1), w();
  };
  return N.useEffect(() => {
    g(p ? () => "Esta conversa foi encerrada" : () => "Mensagem");
  }, [p]), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(
    $A,
    {
      onSubmit: (k) => {
        k.preventDefault(), S();
      },
      children: [
        /* @__PURE__ */ E.jsx(
          UA,
          {
            placeholder: y,
            value: r,
            disabled: v,
            onChange: (k) => {
              o(() => k.target.value);
            }
          }
        ),
        /* @__PURE__ */ E.jsx(zA, { className: "buttons-container", children: /* @__PURE__ */ E.jsx(
          HA,
          {
            type: "button",
            disabled: f || v,
            onClick: () => {
              m(() => !0), qA(async ([k]) => {
                m(() => !1), await n({
                  conversationId: e,
                  text: r,
                  file: k
                });
              });
            },
            children: /* @__PURE__ */ E.jsx(WA, {})
          }
        ) })
      ]
    }
  ) });
}, KA = () => /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(GA, {}) }), QA = Te.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .page-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`, YA = Te.div`
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
function XA({
  conversationId: e,
  messagesCount: n,
  messagesListRef: r
}) {
  const o = () => {
    var a;
    (a = r.current) == null || a.scrollTo({
      top: r.current.scrollHeight,
      behavior: "smooth"
    });
  };
  N.useEffect(() => {
    e && o();
  }, [e]), N.useEffect(() => {
    n && o();
  }, [n]);
}
const JA = ({ conversationId: e }) => {
  const { messages: n } = gv(e), r = N.useRef(null);
  return XA({
    messagesListRef: r,
    messagesCount: n.length,
    conversationId: e
  }), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(QA, { children: [
    /* @__PURE__ */ E.jsx(BA, {}),
    /* @__PURE__ */ E.jsx("div", { className: "page-wrap", children: /* @__PURE__ */ E.jsx(YA, { ref: r, className: "scroll-mini", children: n.map((o, a) => /* @__PURE__ */ E.jsx(AA, { message: o }, `message.${o.id}`)) }) }),
    /* @__PURE__ */ E.jsx(KA, {})
  ] }) });
}, ZA = Te.div`
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
`, eb = Te.div`
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
`, tb = () => /* @__PURE__ */ E.jsx(
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
), nb = Te.div`
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
`, rb = Te.div`
  font-size: 20px;
  color: ${(e) => e.theme.colors.primary};
`, ib = Te.div`
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
var fl = { exports: {} };
fl.exports;
(function(e, n) {
  var r = 30, o = "...", a = 1 / 0, c = 17976931348623157e292, f = 0 / 0, m = "[object RegExp]", y = "[object Symbol]", g = /^\s+|\s+$/g, x = /\w*$/, u = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, v = /^0o[0-7]+$/i, w = "\\ud800-\\udfff", S = "\\u0300-\\u036f\\ufe20-\\ufe23", k = "\\u20d0-\\u20f0", T = "\\ufe0e\\ufe0f", A = "[" + w + "]", L = "[" + S + k + "]", V = "\\ud83c[\\udffb-\\udfff]", H = "(?:" + L + "|" + V + ")", J = "[^" + w + "]", K = "(?:\\ud83c[\\udde6-\\uddff]){2}", te = "[\\ud800-\\udbff][\\udc00-\\udfff]", Z = "\\u200d", Ce = H + "?", Le = "[" + T + "]?", pe = "(?:" + Z + "(?:" + [J, K, te].join("|") + ")" + Le + Ce + ")*", le = Le + Ce + pe, ae = "(?:" + [J + L + "?", L, K, te, A].join("|") + ")", ge = RegExp(V + "(?=" + V + ")|" + ae + le, "g"), Ee = RegExp("[" + Z + w + S + k + T + "]"), Se = parseInt, Y = typeof Xn == "object" && Xn && Xn.Object === Object && Xn, ue = typeof self == "object" && self && self.Object === Object && self, b = Y || ue || Function("return this")(), I = n && !n.nodeType && n, ne = I && !0 && e && !e.nodeType && e, ke = ne && ne.exports === I, ve = ke && Y.process, Oe = function() {
    try {
      return ve && ve.binding("util");
    } catch {
    }
  }(), _e = Oe && Oe.isRegExp, Pe = Qe("length");
  function Ae(W) {
    return W.split("");
  }
  function Qe(W) {
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
    return ut(W) ? Yi(W) : Ae(W);
  }
  function ti(W) {
    for (var xe = ge.lastIndex = 0; ge.test(W); )
      xe++;
    return xe;
  }
  function Yi(W) {
    return W.match(ge) || [];
  }
  var O = Object.prototype, j = O.toString, z = b.Symbol, ie = z ? z.prototype : void 0, X = ie ? ie.toString : void 0;
  function G(W) {
    return Nt(W) && j.call(W) == m;
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
    if (an(W))
      return X ? X.call(W) : "";
    var xe = W + "";
    return xe == "0" && 1 / W == -a ? "-0" : xe;
  }
  function ze(W, xe, Be) {
    var vt = W.length;
    return Be = Be === void 0 ? vt : Be, !xe && Be >= vt ? W : de(W, xe, Be);
  }
  function Nt(W) {
    var xe = typeof W;
    return !!W && (xe == "object" || xe == "function");
  }
  function ni(W) {
    return !!W && typeof W == "object";
  }
  var Vn = _e ? xn(_e) : G;
  function an(W) {
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
    if (an(W))
      return f;
    if (Nt(W)) {
      var xe = typeof W.valueOf == "function" ? W.valueOf() : W;
      W = Nt(xe) ? xe + "" : xe;
    }
    if (typeof W != "string")
      return W === 0 ? W : +W;
    W = W.replace(g, "");
    var Be = p.test(W);
    return Be || v.test(W) ? Se(W.slice(2), Be ? 2 : 8) : u.test(W) ? f : +W;
  }
  function Nr(W) {
    return W == null ? "" : je(W);
  }
  function ys(W, xe) {
    var Be = r, vt = o;
    if (Nt(xe)) {
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
        var Xi, vs = Ct;
        for (Ue.global || (Ue = RegExp(Ue.source, Nr(x.exec(Ue)) + "g")), Ue.lastIndex = 0; Xi = Ue.exec(vs); )
          var Ji = Xi.index;
        Ct = Ct.slice(0, Ji === void 0 ? Tt : Ji);
      }
    } else if (W.indexOf(je(Ue), Tt) != Tt) {
      var Zi = Ct.lastIndexOf(Ue);
      Zi > -1 && (Ct = Ct.slice(0, Zi));
    }
    return Ct + vt;
  }
  e.exports = ys;
})(fl, fl.exports);
var ob = fl.exports;
const sb = /* @__PURE__ */ dl(ob), Bg = ({
  conversationId: e
}) => {
  var c;
  const { selectConversation: n } = In(), r = rr(
    (f) => f.conversations.find((m) => m.id === e)
  ), o = (c = r.messages[0]) == null ? void 0 : c.text, a = N.useMemo(() => {
    const f = [
      new Date(r.updatedAt).toLocaleDateString(),
      "• ",
      new Date(r.updatedAt).toLocaleTimeString()
    ];
    return r.isTyping && f.push("•", "Digitando..."), r.isClosed && f.push("•", "Encerrada"), f;
  }, [r.updatedAt, r.isTyping]);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
    nb,
    {
      isClosed: r.isClosed,
      onClick: () => {
        r.isClosed || n(r.id);
      },
      children: /* @__PURE__ */ E.jsxs("div", { className: "item-row", children: [
        /* @__PURE__ */ E.jsx(ib, { children: /* @__PURE__ */ E.jsx(ds, {}) }),
        /* @__PURE__ */ E.jsxs("div", { className: "row-content", children: [
          /* @__PURE__ */ E.jsx(
            "span",
            {
              title: o,
              className: ["title", o ? "" : "empty"].join(" "),
              children: sb(o || "Conversa Vazia...", { length: 37 })
            }
          ),
          /* @__PURE__ */ E.jsxs("div", { className: "subtitle", children: [
            a.map((f, m) => /* @__PURE__ */ E.jsx("span", { className: "text-gray-400", children: f }, `content.${m}`)),
            /* @__PURE__ */ E.jsx("span", {})
          ] })
        ] }),
        /* @__PURE__ */ E.jsx(rb, { children: /* @__PURE__ */ E.jsx(tb, {}) })
      ] })
    }
  ) });
}, ab = ({ children: e }) => /* @__PURE__ */ E.jsx(E.Fragment, { children: e }), lb = () => {
  const { conversationId: e } = In(), n = rr((c) => c.conversations), r = N.useMemo(() => n.sort((c, f) => Wi(f.updatedAt) - Wi(c.updatedAt)), [n]), o = N.useMemo(() => r.filter((c) => c.isClosed), [r]), a = N.useMemo(() => r.filter((c) => !c.isClosed), [r]);
  return e ? /* @__PURE__ */ E.jsx(ab, { conversationId: e, children: /* @__PURE__ */ E.jsx(JA, { conversationId: e }) }) : /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(ZA, { children: [
    /* @__PURE__ */ E.jsx(eb, { children: /* @__PURE__ */ E.jsx("span", { className: "title", children: "Mensagens" }) }),
    /* @__PURE__ */ E.jsx("div", { className: "page-wrap", children: /* @__PURE__ */ E.jsxs("div", { className: "page-container scroll-mini", children: [
      a.length > 0 ? /* @__PURE__ */ E.jsxs("div", { className: "conversations-title", children: [
        /* @__PURE__ */ E.jsx("span", { children: "Conversas abertas" }),
        /* @__PURE__ */ E.jsx("span", { children: a.length })
      ] }) : null,
      a.map((c, f) => /* @__PURE__ */ E.jsx(
        Bg,
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
        Bg,
        {
          conversationId: c.id
        },
        `conversation.${c.id}.${f}`
      ))
    ] }) })
  ] }) });
}, ub = Te.div`
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
`, cb = Te.div`
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
function yv() {
  const e = rr((y) => y.conversations), n = rr((y) => y.add), { loadConversationsRequest: r, createConversationRequest: o } = Ki(), { selectConversation: a } = In(), c = hl(), f = async ({ open: y }) => o().then((g) => r([g]).then(
    ([x]) => (c.emit("conversation.created", { conversation: x }), n(x), y && a(g), x)
  ));
  return {
    conversations: N.useMemo(() => e.sort((y, g) => Wi(g.updatedAt) - Wi(y.updatedAt)), [e]),
    createConversation: f
  };
}
const fb = () => {
  const { home_blocks: e } = vn(), { createConversation: n } = yv(), { sendMessageRequest: r } = Ki();
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: e.map((o, a) => /* @__PURE__ */ E.jsxs(
    ub,
    {
      onClick: async () => {
        n({ open: !0 }).then(async (c) => {
          await r({
            conversationId: c.id,
            text: o.message
          });
        });
      },
      children: [
        /* @__PURE__ */ E.jsxs(cb, { children: [
          /* @__PURE__ */ E.jsx("span", { className: "block-title", children: o.title }),
          /* @__PURE__ */ E.jsx("span", { className: "block-description", children: o.subtitle })
        ] }),
        /* @__PURE__ */ E.jsx("div", { className: "block-icon", children: /* @__PURE__ */ E.jsx(ds, {}) })
      ]
    },
    `predefined.${a}`
  )) });
}, db = Te(Ui.div)`
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
`, pb = Te.div`
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
`, hb = Te.div`
  background: linear-gradient(180deg, transparent, white);
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
`, mb = Te.div`
  display: flex;
  flex-direction: row;
  padding: 4px 40px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 30;
`, gb = Te.button`
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
`, yb = Te.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: start;
`, vb = Te.div`
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
`, xb = Te.div`
  display: flex;
  flex-direction: row;
`, wb = Te.div`
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
`, _b = () => {
  const {
    agents: e,
    app: { name: n, is_agents_visible: r }
  } = vn(), o = N.useMemo(() => e.filter((c) => c.is_online), [e]), a = N.useMemo(() => o.length, [o]);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs(yb, { children: [
    /* @__PURE__ */ E.jsxs(vb, { children: [
      /* @__PURE__ */ E.jsx("h1", { children: n }),
      r && a > 0 && /* @__PURE__ */ E.jsxs("span", { children: [
        a,
        " ",
        a === 1 ? "atendente" : "atendentes",
        " ",
        "online"
      ] })
    ] }),
    r && /* @__PURE__ */ E.jsx(xb, { children: o.map((c, f) => /* @__PURE__ */ E.jsx(wb, { children: /* @__PURE__ */ E.jsx("img", { src: c.picture_url }) }, `agent.${f}`)) })
  ] }) });
}, Sb = Te.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`, kb = Te.span`
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`, Tb = Te.span`
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`, Cb = () => {
  const {
    headline: { title: e, subtitle: n }
  } = vn();
  return /* @__PURE__ */ E.jsxs(Sb, { children: [
    /* @__PURE__ */ E.jsx(kb, { children: e }),
    /* @__PURE__ */ E.jsx(Tb, { children: n })
  ] });
}, Eb = () => {
  const { createConversation: e } = yv();
  return /* @__PURE__ */ E.jsxs(db, { children: [
    /* @__PURE__ */ E.jsx(pb, {}),
    /* @__PURE__ */ E.jsx(hb, {}),
    /* @__PURE__ */ E.jsxs("div", { className: "page-wrap", children: [
      /* @__PURE__ */ E.jsx(_b, {}),
      /* @__PURE__ */ E.jsx(Cb, {}),
      /* @__PURE__ */ E.jsx("div", { className: "page-container", children: /* @__PURE__ */ E.jsx("div", { className: "page-content scroll-mini", children: /* @__PURE__ */ E.jsx(fb, {}) }) })
    ] }),
    /* @__PURE__ */ E.jsx(mb, { children: /* @__PURE__ */ E.jsx(
      gb,
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
    Component: () => /* @__PURE__ */ E.jsx(rE, {}),
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
    Component: () => /* @__PURE__ */ E.jsx(Eb, {}),
    state: {
      showNav: !0
    },
    button: {
      label: "Início",
      Icon: () => /* @__PURE__ */ E.jsx(EC, {}),
      ActiveIcon: () => /* @__PURE__ */ E.jsx(AC, {})
    }
  },
  {
    name: "messages",
    Component: () => /* @__PURE__ */ E.jsx(lb, {}),
    state: {
      showNav: !0
    },
    button: {
      label: "Mensagens",
      Icon: () => /* @__PURE__ */ E.jsx(ds, {}),
      ActiveIcon: () => /* @__PURE__ */ E.jsx(Yf, {})
    }
  }
], Ab = () => {
  const { page: e, go: n, conversationId: r } = In(), o = N.useMemo(() => e ? Uo.find((c) => c.name === e).Component : () => /* @__PURE__ */ E.jsx(E.Fragment, {}), [e, Uo]), a = N.useMemo(() => {
    var c, f;
    return !!((f = (c = Uo.find((m) => m.name === e)) == null ? void 0 : c.state) != null && f.showNav);
  }, [e, Uo]);
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
    kC,
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
        !r && a && /* @__PURE__ */ E.jsx(TC, { children: Uo.filter((c) => !!c.button).map((c, f) => /* @__PURE__ */ E.jsxs(
          CC,
          {
            isActive: c.name === e,
            onClick: () => {
              n(c.name);
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
}, bb = Te(Ui.div)`
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
var vv = {};
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
    var n = function() {
      this.init();
    };
    n.prototype = {
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
        var p = this || r;
        if (u = parseFloat(u), p.ctx || x(), typeof u < "u" && u >= 0 && u <= 1) {
          if (p._volume = u, p._muted)
            return p;
          p.usingWebAudio && p.masterGain.gain.setValueAtTime(u, r.ctx.currentTime);
          for (var v = 0; v < p._howls.length; v++)
            if (!p._howls[v]._webAudio)
              for (var w = p._howls[v]._getSoundIds(), S = 0; S < w.length; S++) {
                var k = p._howls[v]._soundById(w[S]);
                k && k._node && (k._node.volume = k._volume * u);
              }
          return p;
        }
        return p._volume;
      },
      /**
       * Handle muting and unmuting globally.
       * @param  {Boolean} muted Is muted or not.
       */
      mute: function(u) {
        var p = this || r;
        p.ctx || x(), p._muted = u, p.usingWebAudio && p.masterGain.gain.setValueAtTime(u ? 0 : p._volume, r.ctx.currentTime);
        for (var v = 0; v < p._howls.length; v++)
          if (!p._howls[v]._webAudio)
            for (var w = p._howls[v]._getSoundIds(), S = 0; S < w.length; S++) {
              var k = p._howls[v]._soundById(w[S]);
              k && k._node && (k._node.muted = u ? !0 : k._muted);
            }
        return p;
      },
      /**
       * Handle stopping all sounds globally.
       */
      stop: function() {
        for (var u = this || r, p = 0; p < u._howls.length; p++)
          u._howls[p].stop();
        return u;
      },
      /**
       * Unload and destroy all currently loaded Howl objects.
       * @return {Howler}
       */
      unload: function() {
        for (var u = this || r, p = u._howls.length - 1; p >= 0; p--)
          u._howls[p].unload();
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
              var p = new Audio();
              typeof p.oncanplaythrough > "u" && (u._canPlayEvent = "canplay");
            } catch {
              u.noAudio = !0;
            }
          else
            u.noAudio = !0;
        try {
          var p = new Audio();
          p.muted && (u.noAudio = !0);
        } catch {
        }
        return u.noAudio || u._setupCodecs(), u;
      },
      /**
       * Check for browser support for various codecs and cache the results.
       * @return {Howler}
       */
      _setupCodecs: function() {
        var u = this || r, p = null;
        try {
          p = typeof Audio < "u" ? new Audio() : null;
        } catch {
          return u;
        }
        if (!p || typeof p.canPlayType != "function")
          return u;
        var v = p.canPlayType("audio/mpeg;").replace(/^no$/, ""), w = u._navigator ? u._navigator.userAgent : "", S = w.match(/OPR\/([0-6].)/g), k = S && parseInt(S[0].split("/")[1], 10) < 33, T = w.indexOf("Safari") !== -1 && w.indexOf("Chrome") === -1, A = w.match(/Version\/(.*?) /), L = T && A && parseInt(A[1], 10) < 15;
        return u._codecs = {
          mp3: !!(!k && (v || p.canPlayType("audio/mp3;").replace(/^no$/, ""))),
          mpeg: !!v,
          opus: !!p.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!p.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          oga: !!p.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          wav: !!(p.canPlayType('audio/wav; codecs="1"') || p.canPlayType("audio/wav")).replace(/^no$/, ""),
          aac: !!p.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!p.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(p.canPlayType("audio/x-m4a;") || p.canPlayType("audio/m4a;") || p.canPlayType("audio/aac;")).replace(/^no$/, ""),
          m4b: !!(p.canPlayType("audio/x-m4b;") || p.canPlayType("audio/m4b;") || p.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(p.canPlayType("audio/x-mp4;") || p.canPlayType("audio/mp4;") || p.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!(!L && p.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          webm: !!(!L && p.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          dolby: !!p.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
          flac: !!(p.canPlayType("audio/x-flac;") || p.canPlayType("audio/flac;")).replace(/^no$/, "")
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
          var p = function(v) {
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
            var L = u.ctx.createBufferSource();
            L.buffer = u._scratchBuffer, L.connect(u.ctx.destination), typeof L.start > "u" ? L.noteOn(0) : L.start(0), typeof u.ctx.resume == "function" && u.ctx.resume(), L.onended = function() {
              L.disconnect(0), u._audioUnlocked = !0, document.removeEventListener("touchstart", p, !0), document.removeEventListener("touchend", p, !0), document.removeEventListener("click", p, !0), document.removeEventListener("keydown", p, !0);
              for (var V = 0; V < u._howls.length; V++)
                u._howls[V]._emit("unlock");
            };
          };
          return document.addEventListener("touchstart", p, !0), document.addEventListener("touchend", p, !0), document.addEventListener("click", p, !0), document.addEventListener("keydown", p, !0), u;
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
        var p = new Audio().play();
        return p && typeof Promise < "u" && (p instanceof Promise || typeof p.then == "function") && p.catch(function() {
          console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
        }), new Audio();
      },
      /**
       * Return an activated HTML5 Audio object to the pool.
       * @return {Howler}
       */
      _releaseHtml5Audio: function(u) {
        var p = this || r;
        return u._unlocked && p._html5AudioPool.push(u), p;
      },
      /**
       * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
       * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
       * @return {Howler}
       */
      _autoSuspend: function() {
        var u = this;
        if (!(!u.autoSuspend || !u.ctx || typeof u.ctx.suspend > "u" || !r.usingWebAudio)) {
          for (var p = 0; p < u._howls.length; p++)
            if (u._howls[p]._webAudio) {
              for (var v = 0; v < u._howls[p]._sounds.length; v++)
                if (!u._howls[p]._sounds[v]._paused)
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
            for (var p = 0; p < u._howls.length; p++)
              u._howls[p]._emit("resume");
          }), u._suspendTimer && (clearTimeout(u._suspendTimer), u._suspendTimer = null)) : u.state === "suspending" && (u._resumeAfterSuspend = !0), u;
      }
    };
    var r = new n(), o = function(u) {
      var p = this;
      if (!u.src || u.src.length === 0) {
        console.error("An array of source files must be passed with any new Howl.");
        return;
      }
      p.init(u);
    };
    o.prototype = {
      /**
       * Initialize a new Howl group object.
       * @param  {Object} o Passed in properties for this group.
       * @return {Howl}
       */
      init: function(u) {
        var p = this;
        return r.ctx || x(), p._autoplay = u.autoplay || !1, p._format = typeof u.format != "string" ? u.format : [u.format], p._html5 = u.html5 || !1, p._muted = u.mute || !1, p._loop = u.loop || !1, p._pool = u.pool || 5, p._preload = typeof u.preload == "boolean" || u.preload === "metadata" ? u.preload : !0, p._rate = u.rate || 1, p._sprite = u.sprite || {}, p._src = typeof u.src != "string" ? u.src : [u.src], p._volume = u.volume !== void 0 ? u.volume : 1, p._xhr = {
          method: u.xhr && u.xhr.method ? u.xhr.method : "GET",
          headers: u.xhr && u.xhr.headers ? u.xhr.headers : null,
          withCredentials: u.xhr && u.xhr.withCredentials ? u.xhr.withCredentials : !1
        }, p._duration = 0, p._state = "unloaded", p._sounds = [], p._endTimers = {}, p._queue = [], p._playLock = !1, p._onend = u.onend ? [{ fn: u.onend }] : [], p._onfade = u.onfade ? [{ fn: u.onfade }] : [], p._onload = u.onload ? [{ fn: u.onload }] : [], p._onloaderror = u.onloaderror ? [{ fn: u.onloaderror }] : [], p._onplayerror = u.onplayerror ? [{ fn: u.onplayerror }] : [], p._onpause = u.onpause ? [{ fn: u.onpause }] : [], p._onplay = u.onplay ? [{ fn: u.onplay }] : [], p._onstop = u.onstop ? [{ fn: u.onstop }] : [], p._onmute = u.onmute ? [{ fn: u.onmute }] : [], p._onvolume = u.onvolume ? [{ fn: u.onvolume }] : [], p._onrate = u.onrate ? [{ fn: u.onrate }] : [], p._onseek = u.onseek ? [{ fn: u.onseek }] : [], p._onunlock = u.onunlock ? [{ fn: u.onunlock }] : [], p._onresume = [], p._webAudio = r.usingWebAudio && !p._html5, typeof r.ctx < "u" && r.ctx && r.autoUnlock && r._unlockAudio(), r._howls.push(p), p._autoplay && p._queue.push({
          event: "play",
          action: function() {
            p.play();
          }
        }), p._preload && p._preload !== "none" && p.load(), p;
      },
      /**
       * Load the audio file.
       * @return {Howler}
       */
      load: function() {
        var u = this, p = null;
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
            p = u._src[v];
            break;
          }
        }
        if (!p) {
          u._emit("loaderror", null, "No codec support for selected audio sources.");
          return;
        }
        return u._src = p, u._state = "loading", window.location.protocol === "https:" && p.slice(0, 5) === "http:" && (u._html5 = !0, u._webAudio = !1), new a(u), u._webAudio && f(u), u;
      },
      /**
       * Play a sound or resume previous playback.
       * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Number}          Sound ID.
       */
      play: function(u, p) {
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
          return p || v._loadQueue("play"), T._id;
        v._webAudio && r._autoResume();
        var L = Math.max(0, T._seek > 0 ? T._seek : v._sprite[u][0] / 1e3), V = Math.max(0, (v._sprite[u][0] + v._sprite[u][1]) / 1e3 - L), H = V * 1e3 / Math.abs(T._rate), J = v._sprite[u][0] / 1e3, K = (v._sprite[u][0] + v._sprite[u][1]) / 1e3;
        T._sprite = u, T._ended = !1;
        var te = function() {
          T._paused = !1, T._seek = L, T._start = J, T._stop = K, T._loop = !!(T._loop || v._sprite[u][2]);
        };
        if (L >= K) {
          v._ended(T);
          return;
        }
        var Z = T._node;
        if (v._webAudio) {
          var Ce = function() {
            v._playLock = !1, te(), v._refreshBuffer(T);
            var ae = T._muted || v._muted ? 0 : T._volume;
            Z.gain.setValueAtTime(ae, r.ctx.currentTime), T._playStart = r.ctx.currentTime, typeof Z.bufferSource.start > "u" ? T._loop ? Z.bufferSource.noteGrainOn(0, L, 86400) : Z.bufferSource.noteGrainOn(0, L, V) : T._loop ? Z.bufferSource.start(0, L, 86400) : Z.bufferSource.start(0, L, V), H !== 1 / 0 && (v._endTimers[T._id] = setTimeout(v._ended.bind(v, T), H)), p || setTimeout(function() {
              v._emit("play", T._id), v._loadQueue();
            }, 0);
          };
          r.state === "running" && r.ctx.state !== "interrupted" ? Ce() : (v._playLock = !0, v.once("resume", Ce), v._clearTimer(T._id));
        } else {
          var Le = function() {
            Z.currentTime = L, Z.muted = T._muted || v._muted || r._muted || Z.muted, Z.volume = T._volume * r.volume(), Z.playbackRate = T._rate;
            try {
              var ae = Z.play();
              if (ae && typeof Promise < "u" && (ae instanceof Promise || typeof ae.then == "function") ? (v._playLock = !0, te(), ae.then(function() {
                v._playLock = !1, Z._unlocked = !0, p ? v._loadQueue() : v._emit("play", T._id);
              }).catch(function() {
                v._playLock = !1, v._emit("playerror", T._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), T._ended = !0, T._paused = !0;
              })) : p || (v._playLock = !1, te(), v._emit("play", T._id)), Z.playbackRate = T._rate, Z.paused) {
                v._emit("playerror", T._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                return;
              }
              u !== "__default" || T._loop ? v._endTimers[T._id] = setTimeout(v._ended.bind(v, T), H) : (v._endTimers[T._id] = function() {
                v._ended(T), Z.removeEventListener("ended", v._endTimers[T._id], !1);
              }, Z.addEventListener("ended", v._endTimers[T._id], !1));
            } catch (ge) {
              v._emit("playerror", T._id, ge);
            }
          };
          Z.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (Z.src = v._src, Z.load());
          var pe = window && window.ejecta || !Z.readyState && r._navigator.isCocoonJS;
          if (Z.readyState >= 3 || pe)
            Le();
          else {
            v._playLock = !0, v._state = "loading";
            var le = function() {
              v._state = "loaded", Le(), Z.removeEventListener(r._canPlayEvent, le, !1);
            };
            Z.addEventListener(r._canPlayEvent, le, !1), v._clearTimer(T._id);
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
        var p = this;
        if (p._state !== "loaded" || p._playLock)
          return p._queue.push({
            event: "pause",
            action: function() {
              p.pause(u);
            }
          }), p;
        for (var v = p._getSoundIds(u), w = 0; w < v.length; w++) {
          p._clearTimer(v[w]);
          var S = p._soundById(v[w]);
          if (S && !S._paused && (S._seek = p.seek(v[w]), S._rateSeek = 0, S._paused = !0, p._stopFade(v[w]), S._node))
            if (p._webAudio) {
              if (!S._node.bufferSource)
                continue;
              typeof S._node.bufferSource.stop > "u" ? S._node.bufferSource.noteOff(0) : S._node.bufferSource.stop(0), p._cleanBuffer(S._node);
            } else
              (!isNaN(S._node.duration) || S._node.duration === 1 / 0) && S._node.pause();
          arguments[1] || p._emit("pause", S ? S._id : null);
        }
        return p;
      },
      /**
       * Stop playback and reset to start.
       * @param  {Number} id The sound ID (empty to stop all in group).
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Howl}
       */
      stop: function(u, p) {
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
          k && (k._seek = k._start || 0, k._rateSeek = 0, k._paused = !0, k._ended = !0, v._stopFade(w[S]), k._node && (v._webAudio ? k._node.bufferSource && (typeof k._node.bufferSource.stop > "u" ? k._node.bufferSource.noteOff(0) : k._node.bufferSource.stop(0), v._cleanBuffer(k._node)) : (!isNaN(k._node.duration) || k._node.duration === 1 / 0) && (k._node.currentTime = k._start || 0, k._node.pause(), k._node.duration === 1 / 0 && v._clearSound(k._node))), p || v._emit("stop", k._id));
        }
        return v;
      },
      /**
       * Mute/unmute a single sound or all sounds in this Howl group.
       * @param  {Boolean} muted Set to true to mute and false to unmute.
       * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
       * @return {Howl}
       */
      mute: function(u, p) {
        var v = this;
        if (v._state !== "loaded" || v._playLock)
          return v._queue.push({
            event: "mute",
            action: function() {
              v.mute(u, p);
            }
          }), v;
        if (typeof p > "u")
          if (typeof u == "boolean")
            v._muted = u;
          else
            return v._muted;
        for (var w = v._getSoundIds(p), S = 0; S < w.length; S++) {
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
        var u = this, p = arguments, v, w;
        if (p.length === 0)
          return u._volume;
        if (p.length === 1 || p.length === 2 && typeof p[1] > "u") {
          var S = u._getSoundIds(), k = S.indexOf(p[0]);
          k >= 0 ? w = parseInt(p[0], 10) : v = parseFloat(p[0]);
        } else
          p.length >= 2 && (v = parseFloat(p[0]), w = parseInt(p[1], 10));
        var T;
        if (typeof v < "u" && v >= 0 && v <= 1) {
          if (u._state !== "loaded" || u._playLock)
            return u._queue.push({
              event: "volume",
              action: function() {
                u.volume.apply(u, p);
              }
            }), u;
          typeof w > "u" && (u._volume = v), w = u._getSoundIds(w);
          for (var A = 0; A < w.length; A++)
            T = u._soundById(w[A]), T && (T._volume = v, p[2] || u._stopFade(w[A]), u._webAudio && T._node && !T._muted ? T._node.gain.setValueAtTime(v, r.ctx.currentTime) : T._node && !T._muted && (T._node.volume = v * r.volume()), u._emit("volume", T._id));
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
      fade: function(u, p, v, w) {
        var S = this;
        if (S._state !== "loaded" || S._playLock)
          return S._queue.push({
            event: "fade",
            action: function() {
              S.fade(u, p, v, w);
            }
          }), S;
        u = Math.min(Math.max(0, parseFloat(u)), 1), p = Math.min(Math.max(0, parseFloat(p)), 1), v = parseFloat(v), S.volume(u, w);
        for (var k = S._getSoundIds(w), T = 0; T < k.length; T++) {
          var A = S._soundById(k[T]);
          if (A) {
            if (w || S._stopFade(k[T]), S._webAudio && !A._muted) {
              var L = r.ctx.currentTime, V = L + v / 1e3;
              A._volume = u, A._node.gain.setValueAtTime(u, L), A._node.gain.linearRampToValueAtTime(p, V);
            }
            S._startFadeInterval(A, u, p, v, k[T], typeof w > "u");
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
      _startFadeInterval: function(u, p, v, w, S, k) {
        var T = this, A = p, L = v - p, V = Math.abs(L / 0.01), H = Math.max(4, V > 0 ? w / V : w), J = Date.now();
        u._fadeTo = v, u._interval = setInterval(function() {
          var K = (Date.now() - J) / w;
          J = Date.now(), A += L * K, A = Math.round(A * 100) / 100, L < 0 ? A = Math.max(v, A) : A = Math.min(v, A), T._webAudio ? u._volume = A : T.volume(A, u._id, !0), k && (T._volume = A), (v < p && A <= v || v > p && A >= v) && (clearInterval(u._interval), u._interval = null, u._fadeTo = null, T.volume(v, u._id), T._emit("fade", u._id));
        }, H);
      },
      /**
       * Internal method that stops the currently playing fade when
       * a new fade starts, volume is changed or the sound is stopped.
       * @param  {Number} id The sound id.
       * @return {Howl}
       */
      _stopFade: function(u) {
        var p = this, v = p._soundById(u);
        return v && v._interval && (p._webAudio && v._node.gain.cancelScheduledValues(r.ctx.currentTime), clearInterval(v._interval), v._interval = null, p.volume(v._fadeTo, u), v._fadeTo = null, p._emit("fade", u)), p;
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
        var u = this, p = arguments, v, w, S;
        if (p.length === 0)
          return u._loop;
        if (p.length === 1)
          if (typeof p[0] == "boolean")
            v = p[0], u._loop = v;
          else
            return S = u._soundById(parseInt(p[0], 10)), S ? S._loop : !1;
        else
          p.length === 2 && (v = p[0], w = parseInt(p[1], 10));
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
        var u = this, p = arguments, v, w;
        if (p.length === 0)
          w = u._sounds[0]._id;
        else if (p.length === 1) {
          var S = u._getSoundIds(), k = S.indexOf(p[0]);
          k >= 0 ? w = parseInt(p[0], 10) : v = parseFloat(p[0]);
        } else
          p.length === 2 && (v = parseFloat(p[0]), w = parseInt(p[1], 10));
        var T;
        if (typeof v == "number") {
          if (u._state !== "loaded" || u._playLock)
            return u._queue.push({
              event: "rate",
              action: function() {
                u.rate.apply(u, p);
              }
            }), u;
          typeof w > "u" && (u._rate = v), w = u._getSoundIds(w);
          for (var A = 0; A < w.length; A++)
            if (T = u._soundById(w[A]), T) {
              u.playing(w[A]) && (T._rateSeek = u.seek(w[A]), T._playStart = u._webAudio ? r.ctx.currentTime : T._playStart), T._rate = v, u._webAudio && T._node && T._node.bufferSource ? T._node.bufferSource.playbackRate.setValueAtTime(v, r.ctx.currentTime) : T._node && (T._node.playbackRate = v);
              var L = u.seek(w[A]), V = (u._sprite[T._sprite][0] + u._sprite[T._sprite][1]) / 1e3 - L, H = V * 1e3 / Math.abs(T._rate);
              (u._endTimers[w[A]] || !T._paused) && (u._clearTimer(w[A]), u._endTimers[w[A]] = setTimeout(u._ended.bind(u, T), H)), u._emit("rate", T._id);
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
        var u = this, p = arguments, v, w;
        if (p.length === 0)
          u._sounds.length && (w = u._sounds[0]._id);
        else if (p.length === 1) {
          var S = u._getSoundIds(), k = S.indexOf(p[0]);
          k >= 0 ? w = parseInt(p[0], 10) : u._sounds.length && (w = u._sounds[0]._id, v = parseFloat(p[0]));
        } else
          p.length === 2 && (v = parseFloat(p[0]), w = parseInt(p[1], 10));
        if (typeof w > "u")
          return 0;
        if (typeof v == "number" && (u._state !== "loaded" || u._playLock))
          return u._queue.push({
            event: "seek",
            action: function() {
              u.seek.apply(u, p);
            }
          }), u;
        var T = u._soundById(w);
        if (T)
          if (typeof v == "number" && v >= 0) {
            var A = u.playing(w);
            A && u.pause(w, !0), T._seek = v, T._ended = !1, u._clearTimer(w), !u._webAudio && T._node && !isNaN(T._node.duration) && (T._node.currentTime = v);
            var L = function() {
              A && u.play(w, !0), u._emit("seek", w);
            };
            if (A && !u._webAudio) {
              var V = function() {
                u._playLock ? setTimeout(V, 0) : L();
              };
              setTimeout(V, 0);
            } else
              L();
          } else if (u._webAudio) {
            var H = u.playing(w) ? r.ctx.currentTime - T._playStart : 0, J = T._rateSeek ? T._rateSeek - T._seek : 0;
            return T._seek + (J + H * Math.abs(T._rate));
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
        var p = this;
        if (typeof u == "number") {
          var v = p._soundById(u);
          return v ? !v._paused : !1;
        }
        for (var w = 0; w < p._sounds.length; w++)
          if (!p._sounds[w]._paused)
            return !0;
        return !1;
      },
      /**
       * Get the duration of this sound. Passing a sound id will return the sprite duration.
       * @param  {Number} id The sound id to check. If none is passed, return full source duration.
       * @return {Number} Audio duration in seconds.
       */
      duration: function(u) {
        var p = this, v = p._duration, w = p._soundById(u);
        return w && (v = p._sprite[w._sprite][1] / 1e3), v;
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
        for (var u = this, p = u._sounds, v = 0; v < p.length; v++)
          p[v]._paused || u.stop(p[v]._id), u._webAudio || (u._clearSound(p[v]._node), p[v]._node.removeEventListener("error", p[v]._errorFn, !1), p[v]._node.removeEventListener(r._canPlayEvent, p[v]._loadFn, !1), p[v]._node.removeEventListener("ended", p[v]._endFn, !1), r._releaseHtml5Audio(p[v]._node)), delete p[v]._node, u._clearTimer(p[v]._id);
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
      on: function(u, p, v, w) {
        var S = this, k = S["_on" + u];
        return typeof p == "function" && k.push(w ? { id: v, fn: p, once: w } : { id: v, fn: p }), S;
      },
      /**
       * Remove a custom event. Call without parameters to remove all events.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to remove. Leave empty to remove all.
       * @param  {Number}   id    (optional) Only remove events for this sound.
       * @return {Howl}
       */
      off: function(u, p, v) {
        var w = this, S = w["_on" + u], k = 0;
        if (typeof p == "number" && (v = p, p = null), p || v)
          for (k = 0; k < S.length; k++) {
            var T = v === S[k].id;
            if (p === S[k].fn && T || !p && T) {
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
      once: function(u, p, v) {
        var w = this;
        return w.on(u, p, v, 1), w;
      },
      /**
       * Emit all events of a specific type and pass the sound id.
       * @param  {String} event Event name.
       * @param  {Number} id    Sound ID.
       * @param  {Number} msg   Message to go with event.
       * @return {Howl}
       */
      _emit: function(u, p, v) {
        for (var w = this, S = w["_on" + u], k = S.length - 1; k >= 0; k--)
          (!S[k].id || S[k].id === p || u === "load") && (setTimeout(function(T) {
            T.call(this, p, v);
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
        var p = this;
        if (p._queue.length > 0) {
          var v = p._queue[0];
          v.event === u && (p._queue.shift(), p._loadQueue()), u || v.action();
        }
        return p;
      },
      /**
       * Fired when playback ends at the end of the duration.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _ended: function(u) {
        var p = this, v = u._sprite;
        if (!p._webAudio && u._node && !u._node.paused && !u._node.ended && u._node.currentTime < u._stop)
          return setTimeout(p._ended.bind(p, u), 100), p;
        var w = !!(u._loop || p._sprite[v][2]);
        if (p._emit("end", u._id), !p._webAudio && w && p.stop(u._id, !0).play(u._id), p._webAudio && w) {
          p._emit("play", u._id), u._seek = u._start || 0, u._rateSeek = 0, u._playStart = r.ctx.currentTime;
          var S = (u._stop - u._start) * 1e3 / Math.abs(u._rate);
          p._endTimers[u._id] = setTimeout(p._ended.bind(p, u), S);
        }
        return p._webAudio && !w && (u._paused = !0, u._ended = !0, u._seek = u._start || 0, u._rateSeek = 0, p._clearTimer(u._id), p._cleanBuffer(u._node), r._autoSuspend()), !p._webAudio && !w && p.stop(u._id, !0), p;
      },
      /**
       * Clear the end timer for a sound playback.
       * @param  {Number} id The sound ID.
       * @return {Howl}
       */
      _clearTimer: function(u) {
        var p = this;
        if (p._endTimers[u]) {
          if (typeof p._endTimers[u] != "function")
            clearTimeout(p._endTimers[u]);
          else {
            var v = p._soundById(u);
            v && v._node && v._node.removeEventListener("ended", p._endTimers[u], !1);
          }
          delete p._endTimers[u];
        }
        return p;
      },
      /**
       * Return the sound identified by this ID, or return null.
       * @param  {Number} id Sound ID
       * @return {Object}    Sound object or null.
       */
      _soundById: function(u) {
        for (var p = this, v = 0; v < p._sounds.length; v++)
          if (u === p._sounds[v]._id)
            return p._sounds[v];
        return null;
      },
      /**
       * Return an inactive sound from the pool or create a new one.
       * @return {Sound} Sound playback object.
       */
      _inactiveSound: function() {
        var u = this;
        u._drain();
        for (var p = 0; p < u._sounds.length; p++)
          if (u._sounds[p]._ended)
            return u._sounds[p].reset();
        return new a(u);
      },
      /**
       * Drain excess inactive sounds from the pool.
       */
      _drain: function() {
        var u = this, p = u._pool, v = 0, w = 0;
        if (!(u._sounds.length < p)) {
          for (w = 0; w < u._sounds.length; w++)
            u._sounds[w]._ended && v++;
          for (w = u._sounds.length - 1; w >= 0; w--) {
            if (v <= p)
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
        var p = this;
        if (typeof u > "u") {
          for (var v = [], w = 0; w < p._sounds.length; w++)
            v.push(p._sounds[w]._id);
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
        var p = this;
        return u._node.bufferSource = r.ctx.createBufferSource(), u._node.bufferSource.buffer = c[p._src], u._panner ? u._node.bufferSource.connect(u._panner) : u._node.bufferSource.connect(u._node), u._node.bufferSource.loop = u._loop, u._loop && (u._node.bufferSource.loopStart = u._start || 0, u._node.bufferSource.loopEnd = u._stop || 0), u._node.bufferSource.playbackRate.setValueAtTime(u._rate, r.ctx.currentTime), p;
      },
      /**
       * Prevent memory leaks by cleaning up the buffer source after playback.
       * @param  {Object} node Sound's audio node containing the buffer source.
       * @return {Howl}
       */
      _cleanBuffer: function(u) {
        var p = this, v = r._navigator && r._navigator.vendor.indexOf("Apple") >= 0;
        if (r._scratchBuffer && u.bufferSource && (u.bufferSource.onended = null, u.bufferSource.disconnect(0), v))
          try {
            u.bufferSource.buffer = r._scratchBuffer;
          } catch {
          }
        return u.bufferSource = null, p;
      },
      /**
       * Set the source to a 0-second silence to stop any downloading (except in IE).
       * @param  {Object} node Audio node to clear.
       */
      _clearSound: function(u) {
        var p = /MSIE |Trident\//.test(r._navigator && r._navigator.userAgent);
        p || (u.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
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
        var u = this, p = u._parent;
        return u._muted = p._muted, u._loop = p._loop, u._volume = p._volume, u._rate = p._rate, u._seek = 0, u._paused = !0, u._ended = !0, u._sprite = "__default", u._id = ++r._counter, p._sounds.push(u), u.create(), u;
      },
      /**
       * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
       * @return {Sound}
       */
      create: function() {
        var u = this, p = u._parent, v = r._muted || u._muted || u._parent._muted ? 0 : u._volume;
        return p._webAudio ? (u._node = typeof r.ctx.createGain > "u" ? r.ctx.createGainNode() : r.ctx.createGain(), u._node.gain.setValueAtTime(v, r.ctx.currentTime), u._node.paused = !0, u._node.connect(r.masterGain)) : r.noAudio || (u._node = r._obtainHtml5Audio(), u._errorFn = u._errorListener.bind(u), u._node.addEventListener("error", u._errorFn, !1), u._loadFn = u._loadListener.bind(u), u._node.addEventListener(r._canPlayEvent, u._loadFn, !1), u._endFn = u._endListener.bind(u), u._node.addEventListener("ended", u._endFn, !1), u._node.src = p._src, u._node.preload = p._preload === !0 ? "auto" : p._preload, u._node.volume = v * r.volume(), u._node.load()), u;
      },
      /**
       * Reset the parameters of this sound to the original state (for recycle).
       * @return {Sound}
       */
      reset: function() {
        var u = this, p = u._parent;
        return u._muted = p._muted, u._loop = p._loop, u._volume = p._volume, u._rate = p._rate, u._seek = 0, u._rateSeek = 0, u._paused = !0, u._ended = !0, u._sprite = "__default", u._id = ++r._counter, u;
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
        var u = this, p = u._parent;
        p._duration = Math.ceil(u._node.duration * 10) / 10, Object.keys(p._sprite).length === 0 && (p._sprite = { __default: [0, p._duration * 1e3] }), p._state !== "loaded" && (p._state = "loaded", p._emit("load"), p._loadQueue()), u._node.removeEventListener(r._canPlayEvent, u._loadFn, !1);
      },
      /**
       * HTML5 Audio ended listener callback.
       */
      _endListener: function() {
        var u = this, p = u._parent;
        p._duration === 1 / 0 && (p._duration = Math.ceil(u._node.duration * 10) / 10, p._sprite.__default[1] === 1 / 0 && (p._sprite.__default[1] = p._duration * 1e3), p._ended(u)), u._node.removeEventListener("ended", u._endFn, !1);
      }
    };
    var c = {}, f = function(u) {
      var p = u._src;
      if (c[p]) {
        u._duration = c[p].duration, g(u);
        return;
      }
      if (/^data:[^;]+;base64,/.test(p)) {
        for (var v = atob(p.split(",")[1]), w = new Uint8Array(v.length), S = 0; S < v.length; ++S)
          w[S] = v.charCodeAt(S);
        y(w.buffer, u);
      } else {
        var k = new XMLHttpRequest();
        k.open(u._xhr.method, p, !0), k.withCredentials = u._xhr.withCredentials, k.responseType = "arraybuffer", u._xhr.headers && Object.keys(u._xhr.headers).forEach(function(T) {
          k.setRequestHeader(T, u._xhr.headers[T]);
        }), k.onload = function() {
          var T = (k.status + "")[0];
          if (T !== "0" && T !== "2" && T !== "3") {
            u._emit("loaderror", null, "Failed loading audio file with status: " + k.status + ".");
            return;
          }
          y(k.response, u);
        }, k.onerror = function() {
          u._webAudio && (u._html5 = !0, u._webAudio = !1, u._sounds = [], delete c[p], u.load());
        }, m(k);
      }
    }, m = function(u) {
      try {
        u.send();
      } catch {
        u.onerror();
      }
    }, y = function(u, p) {
      var v = function() {
        p._emit("loaderror", null, "Decoding audio data failed.");
      }, w = function(S) {
        S && p._sounds.length > 0 ? (c[p._src] = S, g(p, S)) : v();
      };
      typeof Promise < "u" && r.ctx.decodeAudioData.length === 1 ? r.ctx.decodeAudioData(u).then(w).catch(v) : r.ctx.decodeAudioData(u, w, v);
    }, g = function(u, p) {
      p && !u._duration && (u._duration = p.duration), Object.keys(u._sprite).length === 0 && (u._sprite = { __default: [0, u._duration * 1e3] }), u._state !== "loaded" && (u._state = "loaded", u._emit("load"), u._loadQueue());
    }, x = function() {
      if (r.usingWebAudio) {
        try {
          typeof AudioContext < "u" ? r.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? r.ctx = new webkitAudioContext() : r.usingWebAudio = !1;
        } catch {
          r.usingWebAudio = !1;
        }
        r.ctx || (r.usingWebAudio = !1);
        var u = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform), p = r._navigator && r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), v = p ? parseInt(p[1], 10) : null;
        if (u && v && v < 9) {
          var w = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
          r._navigator && !w && (r.usingWebAudio = !1);
        }
        r.usingWebAudio && (r.masterGain = typeof r.ctx.createGain > "u" ? r.ctx.createGainNode() : r.ctx.createGain(), r.masterGain.gain.setValueAtTime(r._muted ? 0 : r._volume, r.ctx.currentTime), r.masterGain.connect(r.ctx.destination)), r._setup();
      }
    };
    e.Howler = r, e.Howl = o, typeof Xn < "u" ? (Xn.HowlerGlobal = n, Xn.Howler = r, Xn.Howl = o, Xn.Sound = a) : typeof window < "u" && (window.HowlerGlobal = n, window.Howler = r, window.Howl = o, window.Sound = a);
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
            y._stereo = r, y._pos = [r, 0, 0], y._node && (y._pannerAttr.panningModel = "equalpower", (!y._panner || !y._panner.pan) && n(y, c), c === "spatial" ? typeof y._panner.positionX < "u" ? (y._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), y._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), y._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : y._panner.setPosition(r, 0, 0) : y._panner.pan.setValueAtTime(r, Howler.ctx.currentTime)), a._emit("stereo", y._id);
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
            g._pos = [r, o, a], g._node && ((!g._panner || g._panner.pan) && n(g, "spatial"), typeof g._panner.positionX < "u" ? (g._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), g._panner.positionY.setValueAtTime(o, Howler.ctx.currentTime), g._panner.positionZ.setValueAtTime(a, Howler.ctx.currentTime)) : g._panner.setPosition(r, o, a)), f._emit("pos", g._id);
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
            g._orientation = [r, o, a], g._node && (g._panner || (g._pos || (g._pos = f._pos || [0, 0, -0.5]), n(g, "spatial")), typeof g._panner.orientationX < "u" ? (g._panner.orientationX.setValueAtTime(r, Howler.ctx.currentTime), g._panner.orientationY.setValueAtTime(o, Howler.ctx.currentTime), g._panner.orientationZ.setValueAtTime(a, Howler.ctx.currentTime)) : g._panner.setOrientation(r, o, a)), f._emit("orientation", g._id);
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
          x ? (x.coneInnerAngle = g.coneInnerAngle, x.coneOuterAngle = g.coneOuterAngle, x.coneOuterGain = g.coneOuterGain, x.distanceModel = g.distanceModel, x.maxDistance = g.maxDistance, x.refDistance = g.refDistance, x.rolloffFactor = g.rolloffFactor, x.panningModel = g.panningModel) : (f._pos || (f._pos = r._pos || [0, 0, -0.5]), n(f, "spatial"));
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
    var n = function(r, o) {
      o = o || "spatial", o === "spatial" ? (r._panner = Howler.ctx.createPanner(), r._panner.coneInnerAngle = r._pannerAttr.coneInnerAngle, r._panner.coneOuterAngle = r._pannerAttr.coneOuterAngle, r._panner.coneOuterGain = r._pannerAttr.coneOuterGain, r._panner.distanceModel = r._pannerAttr.distanceModel, r._panner.maxDistance = r._pannerAttr.maxDistance, r._panner.refDistance = r._pannerAttr.refDistance, r._panner.rolloffFactor = r._pannerAttr.rolloffFactor, r._panner.panningModel = r._pannerAttr.panningModel, typeof r._panner.positionX < "u" ? (r._panner.positionX.setValueAtTime(r._pos[0], Howler.ctx.currentTime), r._panner.positionY.setValueAtTime(r._pos[1], Howler.ctx.currentTime), r._panner.positionZ.setValueAtTime(r._pos[2], Howler.ctx.currentTime)) : r._panner.setPosition(r._pos[0], r._pos[1], r._pos[2]), typeof r._panner.orientationX < "u" ? (r._panner.orientationX.setValueAtTime(r._orientation[0], Howler.ctx.currentTime), r._panner.orientationY.setValueAtTime(r._orientation[1], Howler.ctx.currentTime), r._panner.orientationZ.setValueAtTime(r._orientation[2], Howler.ctx.currentTime)) : r._panner.setOrientation(r._orientation[0], r._orientation[1], r._orientation[2])) : (r._panner = Howler.ctx.createStereoPanner(), r._panner.pan.setValueAtTime(r._stereo, Howler.ctx.currentTime)), r._panner.connect(r._node), r._paused || r._parent.pause(r._id, !0).play(r._id, !0);
    };
  })();
})(vv);
const xv = {
  playSound: async (e) => {
    const n = new vv.Howl({
      src: [e],
      autoplay: !0,
      html5: !0,
      pool: 1,
      volume: 0.3,
      onunlock: () => {
        console.log("onunlock");
      }
    });
    console.log("play audio"), n.play(), await new Promise((r) => {
      n.on("end", r);
    }), n.unload(), Howler.unload();
  }
}, Pb = () => {
  var S;
  const e = Ow(), { popup_messages: n, ringtones: r } = vn(), { isAlreadyOpen: o } = In(), [a, c] = N.useState(-1), [f, m] = N.useState(!1), [y, g] = N.useState(!1), x = W0((S = n[0]) == null ? void 0 : S.agentId), u = N.useMemo(() => n, [n]), p = N.useMemo(() => u.filter((k, T) => T <= a), [a, u]), v = N.useMemo(() => e.isTop ? -10 : 10, [e.isTop]), w = N.useCallback(
    (k) => {
      if (a >= p.length) {
        k();
        return;
      }
      c((T) => {
        const A = T + 1;
        return A === 0 && n.length > 0 && !o && xv.playSound(r.popup_message), A;
      });
    },
    [p.length, a, o, n.length]
  );
  return N.useEffect(() => {
    setTimeout(() => {
      g(() => !0);
    }, 1e3);
  }, []), N.useEffect(() => {
    if (y) {
      const k = setInterval(() => {
        w(() => clearInterval(k));
      }, 2e3);
      return () => clearInterval(k);
    }
  }, [y, w]), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(M0, { children: !o && !f && p.length > 0 && /* @__PURE__ */ E.jsx(
    bb,
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
      children: /* @__PURE__ */ E.jsx(SC, { children: /* @__PURE__ */ E.jsxs("div", { className: "popup-wrap", children: [
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
        p.map((k, T) => /* @__PURE__ */ E.jsxs(
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
`).map((A, L) => /* @__PURE__ */ E.jsx("p", { children: A }, `popup.${T}.line.${L}`)) })
            ]
          },
          `popup.${T}`
        ))
      ] }) })
    }
  ) }) });
}, Rb = () => {
  const { isOpen: e, toggle: n, go: r } = In(), { layout: o } = vn(), { isAuth: a } = Al(), { app: c } = vn();
  return N.useEffect(() => {
    !a && c.is_auth_required ? r("auth") : r("home");
  }, []), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(
    Dw,
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
      children: /* @__PURE__ */ E.jsx(r_, { children: /* @__PURE__ */ E.jsxs(i_, { isOpen: e, children: [
        /* @__PURE__ */ E.jsx(M0, { children: e && /* @__PURE__ */ E.jsx(Ab, {}) }),
        /* @__PURE__ */ E.jsxs(o_, { children: [
          /* @__PURE__ */ E.jsx(Pb, {}),
          /* @__PURE__ */ E.jsx(s_, { isOpen: e, onClick: n, children: e ? /* @__PURE__ */ E.jsx(Yf, {}) : /* @__PURE__ */ E.jsx(ds, {}) })
        ] })
      ] }) })
    }
  ) });
}, Ob = ({
  children: e
}) => {
  const { loadConversationsRequest: n } = Ki(), r = rr((o) => o.set);
  return N.useEffect(() => {
    n().then((o) => {
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
const Wa = /* @__PURE__ */ Object.create(null);
Object.keys(Fn).forEach((e) => {
  Wa[Fn[e]] = e;
});
const Lb = { type: "error", data: "parser error" }, Mb = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Db = typeof ArrayBuffer == "function", Nb = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, wv = ({ type: e, data: n }, r, o) => Mb && n instanceof Blob ? r ? o(n) : zg(n, o) : Db && (n instanceof ArrayBuffer || Nb(n)) ? r ? o(n) : zg(new Blob([n]), o) : o(Fn[e] + (n || "")), zg = (e, n) => {
  const r = new FileReader();
  return r.onload = function() {
    const o = r.result.split(",")[1];
    n("b" + (o || ""));
  }, r.readAsDataURL(e);
}, $g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < $g.length; e++)
  qo[$g.charCodeAt(e)] = e;
const Fb = (e) => {
  let n = e.length * 0.75, r = e.length, o, a = 0, c, f, m, y;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const g = new ArrayBuffer(n), x = new Uint8Array(g);
  for (o = 0; o < r; o += 4)
    c = qo[e.charCodeAt(o)], f = qo[e.charCodeAt(o + 1)], m = qo[e.charCodeAt(o + 2)], y = qo[e.charCodeAt(o + 3)], x[a++] = c << 2 | f >> 4, x[a++] = (f & 15) << 4 | m >> 2, x[a++] = (m & 3) << 6 | y & 63;
  return g;
}, Ib = typeof ArrayBuffer == "function", _v = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Sv(e, n)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: jb(e.substring(1), n)
  } : Wa[r] ? e.length > 1 ? {
    type: Wa[r],
    data: e.substring(1)
  } : {
    type: Wa[r]
  } : Lb;
}, jb = (e, n) => {
  if (Ib) {
    const r = Fb(e);
    return Sv(r, n);
  } else
    return { base64: !0, data: e };
}, Sv = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, kv = String.fromCharCode(30), Vb = (e, n) => {
  const r = e.length, o = new Array(r);
  let a = 0;
  e.forEach((c, f) => {
    wv(c, !1, (m) => {
      o[f] = m, ++a === r && n(o.join(kv));
    });
  });
}, Bb = (e, n) => {
  const r = e.split(kv), o = [];
  for (let a = 0; a < r.length; a++) {
    const c = _v(r[a], n);
    if (o.push(c), c.type === "error")
      break;
  }
  return o;
}, Tv = 4;
function lt(e) {
  if (e)
    return zb(e);
}
function zb(e) {
  for (var n in lt.prototype)
    e[n] = lt.prototype[n];
  return e;
}
lt.prototype.on = lt.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
lt.prototype.once = function(e, n) {
  function r() {
    this.off(e, r), n.apply(this, arguments);
  }
  return r.fn = n, this.on(e, r), this;
};
lt.prototype.off = lt.prototype.removeListener = lt.prototype.removeAllListeners = lt.prototype.removeEventListener = function(e, n) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var o, a = 0; a < r.length; a++)
    if (o = r[a], o === n || o.fn === n) {
      r.splice(a, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
lt.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var n = new Array(arguments.length - 1), r = this._callbacks["$" + e], o = 1; o < arguments.length; o++)
    n[o - 1] = arguments[o];
  if (r) {
    r = r.slice(0);
    for (var o = 0, a = r.length; o < a; ++o)
      r[o].apply(this, n);
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
const on = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function Cv(e, ...n) {
  return n.reduce((r, o) => (e.hasOwnProperty(o) && (r[o] = e[o]), r), {});
}
const $b = on.setTimeout, Ub = on.clearTimeout;
function Dl(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = $b.bind(on), e.clearTimeoutFn = Ub.bind(on)) : (e.setTimeoutFn = on.setTimeout.bind(on), e.clearTimeoutFn = on.clearTimeout.bind(on));
}
const Hb = 1.33;
function Wb(e) {
  return typeof e == "string" ? qb(e) : Math.ceil((e.byteLength || e.size) * Hb);
}
function qb(e) {
  let n = 0, r = 0;
  for (let o = 0, a = e.length; o < a; o++)
    n = e.charCodeAt(o), n < 128 ? r += 1 : n < 2048 ? r += 2 : n < 55296 || n >= 57344 ? r += 3 : (o++, r += 4);
  return r;
}
class Gb extends Error {
  constructor(n, r, o) {
    super(n), this.description = r, this.context = o, this.type = "TransportError";
  }
}
class Ev extends lt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, Dl(this, n), this.opts = n, this.query = n.query, this.socket = n.socket;
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
  onError(n, r, o) {
    return super.emitReserved("error", new Gb(n, r, o)), this;
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
  send(n) {
    this.readyState === "open" && this.write(n);
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
  onData(n) {
    const r = _v(n, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(n) {
    super.emitReserved("packet", n);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(n) {
    this.readyState = "closed", super.emitReserved("close", n);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(n) {
  }
}
const Av = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), kf = 64, Kb = {};
let Ug = 0, La = 0, Hg;
function Wg(e) {
  let n = "";
  do
    n = Av[e % kf] + n, e = Math.floor(e / kf);
  while (e > 0);
  return n;
}
function bv() {
  const e = Wg(+/* @__PURE__ */ new Date());
  return e !== Hg ? (Ug = 0, Hg = e) : e + "." + Wg(Ug++);
}
for (; La < kf; La++)
  Kb[Av[La]] = La;
function Pv(e) {
  let n = "";
  for (let r in e)
    e.hasOwnProperty(r) && (n.length && (n += "&"), n += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return n;
}
function Qb(e) {
  let n = {}, r = e.split("&");
  for (let o = 0, a = r.length; o < a; o++) {
    let c = r[o].split("=");
    n[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return n;
}
let Rv = !1;
try {
  Rv = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Yb = Rv;
function Ov(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || Yb))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new on[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Xb() {
}
const Jb = function() {
  return new Ov({
    xdomain: !1
  }).responseType != null;
}();
class Zb extends Ev {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(n) {
    if (super(n), this.polling = !1, typeof location < "u") {
      const o = location.protocol === "https:";
      let a = location.port;
      a || (a = o ? "443" : "80"), this.xd = typeof location < "u" && n.hostname !== location.hostname || a !== n.port, this.xs = n.secure !== o;
    }
    const r = n && n.forceBase64;
    this.supportsBinary = Jb && !r;
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
  pause(n) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", n();
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
  onData(n) {
    const r = (o) => {
      if (this.readyState === "opening" && o.type === "open" && this.onOpen(), o.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(o);
    };
    Bb(n, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const n = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? n() : this.once("open", n);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(n) {
    this.writable = !1, Vb(n, (r) => {
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
    let n = this.query || {};
    const r = this.opts.secure ? "https" : "http";
    let o = "";
    this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = bv()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port);
    const a = Pv(n), c = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (c ? "[" + this.opts.hostname + "]" : this.opts.hostname) + o + this.opts.path + (a.length ? "?" + a : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(n = {}) {
    return Object.assign(n, { xd: this.xd, xs: this.xs }, this.opts), new Nn(this.uri(), n);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(n, r) {
    const o = this.request({
      method: "POST",
      data: n
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
    const n = this.request();
    n.on("data", this.onData.bind(this)), n.on("error", (r, o) => {
      this.onError("xhr poll error", r, o);
    }), this.pollXhr = n;
  }
}
class Nn extends lt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, r) {
    super(), Dl(this, r), this.opts = r, this.method = r.method || "GET", this.uri = n, this.async = r.async !== !1, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const n = Cv(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd, n.xscheme = !!this.opts.xs;
    const r = this.xhr = new Ov(n);
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
  onError(n) {
    this.emitReserved("error", n, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(n) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = Xb, n)
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
    const n = this.xhr.responseText;
    n !== null && (this.emitReserved("data", n), this.emitReserved("success"), this.cleanup());
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
    attachEvent("onunload", qg);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in on ? "pagehide" : "unload";
    addEventListener(e, qg, !1);
  }
}
function qg() {
  for (let e in Nn.requests)
    Nn.requests.hasOwnProperty(e) && Nn.requests[e].abort();
}
const Lv = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, r) => r(n, 0))(), Ma = on.WebSocket || on.MozWebSocket, Gg = !0, eP = "arraybuffer", Kg = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class tP extends Ev {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(n) {
    super(n), this.supportsBinary = !n.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const n = this.uri(), r = this.opts.protocols, o = Kg ? {} : Cv(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
    try {
      this.ws = Gg && !Kg ? r ? new Ma(n, r) : new Ma(n) : new Ma(n, r, o);
    } catch (a) {
      return this.emitReserved("error", a);
    }
    this.ws.binaryType = this.socket.binaryType || eP, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (n) => this.onClose({
      description: "websocket connection closed",
      context: n
    }), this.ws.onmessage = (n) => this.onData(n.data), this.ws.onerror = (n) => this.onError("websocket error", n);
  }
  write(n) {
    this.writable = !1;
    for (let r = 0; r < n.length; r++) {
      const o = n[r], a = r === n.length - 1;
      wv(o, this.supportsBinary, (c) => {
        const f = {};
        try {
          Gg && this.ws.send(c);
        } catch {
        }
        a && Lv(() => {
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
    let n = this.query || {};
    const r = this.opts.secure ? "wss" : "ws";
    let o = "";
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port), this.opts.timestampRequests && (n[this.opts.timestampParam] = bv()), this.supportsBinary || (n.b64 = 1);
    const a = Pv(n), c = this.opts.hostname.indexOf(":") !== -1;
    return r + "://" + (c ? "[" + this.opts.hostname + "]" : this.opts.hostname) + o + this.opts.path + (a.length ? "?" + a : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Ma;
  }
}
const nP = {
  websocket: tP,
  polling: Zb
}, rP = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, iP = [
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
function Tf(e) {
  const n = e, r = e.indexOf("["), o = e.indexOf("]");
  r != -1 && o != -1 && (e = e.substring(0, r) + e.substring(r, o).replace(/:/g, ";") + e.substring(o, e.length));
  let a = rP.exec(e || ""), c = {}, f = 14;
  for (; f--; )
    c[iP[f]] = a[f] || "";
  return r != -1 && o != -1 && (c.source = n, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0), c.pathNames = oP(c, c.path), c.queryKey = sP(c, c.query), c;
}
function oP(e, n) {
  const r = /\/{2,9}/g, o = n.replace(r, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && o.splice(0, 1), n.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
}
function sP(e, n) {
  const r = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, a, c) {
    a && (r[a] = c);
  }), r;
}
let Mv = class Ri extends lt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, r = {}) {
    super(), this.writeBuffer = [], n && typeof n == "object" && (r = n, n = null), n ? (n = Tf(n), r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query)) : r.host && (r.hostname = Tf(r.host).host), Dl(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Qb(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
  createTransport(n) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = Tv, r.transport = n, this.id && (r.sid = this.id);
    const o = Object.assign({}, this.opts.transportOptions[n], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new nP[n](o);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let n;
    if (this.opts.rememberUpgrade && Ri.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      n = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      n = this.transports[0];
    this.readyState = "opening";
    try {
      n = this.createTransport(n);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(n) {
    this.transport && this.transport.removeAllListeners(), this.transport = n, n.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(n) {
    let r = this.createTransport(n), o = !1;
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
            const p = new Error("probe error");
            p.transport = r.name, this.emitReserved("upgradeError", p);
          }
      }));
    };
    function c() {
      o || (o = !0, x(), r.close(), r = null);
    }
    const f = (u) => {
      const p = new Error("probe error: " + u);
      p.transport = r.name, c(), this.emitReserved("upgradeError", p);
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
      let n = 0;
      const r = this.upgrades.length;
      for (; n < r; n++)
        this.probe(this.upgrades[n]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", n), this.emitReserved("heartbeat"), n.type) {
        case "open":
          this.onHandshake(JSON.parse(n.data));
          break;
        case "ping":
          this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const r = new Error("server error");
          r.code = n.data, this.onError(r);
          break;
        case "message":
          this.emitReserved("data", n.data), this.emitReserved("message", n.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(n) {
    this.emitReserved("handshake", n), this.id = n.sid, this.transport.query.sid = n.sid, this.upgrades = this.filterUpgrades(n.upgrades), this.pingInterval = n.pingInterval, this.pingTimeout = n.pingTimeout, this.maxPayload = n.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
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
      const n = this.getWritablePackets();
      this.transport.send(n), this.prevBufferLen = n.length, this.emitReserved("flush");
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
      if (a && (r += Wb(a)), o > 0 && r > this.maxPayload)
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
  write(n, r, o) {
    return this.sendPacket("message", n, r, o), this;
  }
  send(n, r, o) {
    return this.sendPacket("message", n, r, o), this;
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
  sendPacket(n, r, o, a) {
    if (typeof r == "function" && (a = r, r = void 0), typeof o == "function" && (a = o, o = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    o = o || {}, o.compress = o.compress !== !1;
    const c = {
      type: n,
      data: r,
      options: o
    };
    this.emitReserved("packetCreate", c), this.writeBuffer.push(c), a && this.once("flush", a), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const n = () => {
      this.onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), n();
    }, o = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? o() : n();
    }) : this.upgrading ? o() : n()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(n) {
    Ri.priorWebsocketSuccess = !1, this.emitReserved("error", n), this.onClose("transport error", n);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(n, r) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", n, r), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(n) {
    const r = [];
    let o = 0;
    const a = n.length;
    for (; o < a; o++)
      ~this.transports.indexOf(n[o]) && r.push(n[o]);
    return r;
  }
};
Mv.protocol = Tv;
function aP(e, n = "", r) {
  let o = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), o = Tf(e)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
  const c = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
  return o.id = o.protocol + "://" + c + ":" + o.port + n, o.href = o.protocol + "://" + c + (r && r.port === o.port ? "" : ":" + o.port), o;
}
const lP = typeof ArrayBuffer == "function", uP = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Dv = Object.prototype.toString, cP = typeof Blob == "function" || typeof Blob < "u" && Dv.call(Blob) === "[object BlobConstructor]", fP = typeof File == "function" || typeof File < "u" && Dv.call(File) === "[object FileConstructor]";
function sd(e) {
  return lP && (e instanceof ArrayBuffer || uP(e)) || cP && e instanceof Blob || fP && e instanceof File;
}
function qa(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, o = e.length; r < o; r++)
      if (qa(e[r]))
        return !0;
    return !1;
  }
  if (sd(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return qa(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && qa(e[r]))
      return !0;
  return !1;
}
function dP(e) {
  const n = [], r = e.data, o = e;
  return o.data = Cf(r, n), o.attachments = n.length, { packet: o, buffers: n };
}
function Cf(e, n) {
  if (!e)
    return e;
  if (sd(e)) {
    const r = { _placeholder: !0, num: n.length };
    return n.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let o = 0; o < e.length; o++)
      r[o] = Cf(e[o], n);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const o in e)
      Object.prototype.hasOwnProperty.call(e, o) && (r[o] = Cf(e[o], n));
    return r;
  }
  return e;
}
function pP(e, n) {
  return e.data = Ef(e.data, n), delete e.attachments, e;
}
function Ef(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = Ef(e[r], n);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Ef(e[r], n));
  return e;
}
const hP = 5;
var Re;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Re || (Re = {}));
class mP {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(n) {
    this.replacer = n;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(n) {
    return (n.type === Re.EVENT || n.type === Re.ACK) && qa(n) ? this.encodeAsBinary({
      type: n.type === Re.EVENT ? Re.BINARY_EVENT : Re.BINARY_ACK,
      nsp: n.nsp,
      data: n.data,
      id: n.id
    }) : [this.encodeAsString(n)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(n) {
    let r = "" + n.type;
    return (n.type === Re.BINARY_EVENT || n.type === Re.BINARY_ACK) && (r += n.attachments + "-"), n.nsp && n.nsp !== "/" && (r += n.nsp + ","), n.id != null && (r += n.id), n.data != null && (r += JSON.stringify(n.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const r = dP(n), o = this.encodeAsString(r.packet), a = r.buffers;
    return a.unshift(o), a;
  }
}
class ad extends lt {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(n) {
    super(), this.reviver = n;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(n) {
    let r;
    if (typeof n == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(n);
      const o = r.type === Re.BINARY_EVENT;
      o || r.type === Re.BINARY_ACK ? (r.type = o ? Re.EVENT : Re.ACK, this.reconstructor = new gP(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (sd(n) || n.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(n), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + n);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(n) {
    let r = 0;
    const o = {
      type: Number(n.charAt(0))
    };
    if (Re[o.type] === void 0)
      throw new Error("unknown packet type " + o.type);
    if (o.type === Re.BINARY_EVENT || o.type === Re.BINARY_ACK) {
      const c = r + 1;
      for (; n.charAt(++r) !== "-" && r != n.length; )
        ;
      const f = n.substring(c, r);
      if (f != Number(f) || n.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      o.attachments = Number(f);
    }
    if (n.charAt(r + 1) === "/") {
      const c = r + 1;
      for (; ++r && !(n.charAt(r) === "," || r === n.length); )
        ;
      o.nsp = n.substring(c, r);
    } else
      o.nsp = "/";
    const a = n.charAt(r + 1);
    if (a !== "" && Number(a) == a) {
      const c = r + 1;
      for (; ++r; ) {
        const f = n.charAt(r);
        if (f == null || Number(f) != f) {
          --r;
          break;
        }
        if (r === n.length)
          break;
      }
      o.id = Number(n.substring(c, r + 1));
    }
    if (n.charAt(++r)) {
      const c = this.tryParse(n.substr(r));
      if (ad.isPayloadValid(o.type, c))
        o.data = c;
      else
        throw new Error("invalid payload");
    }
    return o;
  }
  tryParse(n) {
    try {
      return JSON.parse(n, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(n, r) {
    switch (n) {
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
class gP {
  constructor(n) {
    this.packet = n, this.buffers = [], this.reconPack = n;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(n) {
    if (this.buffers.push(n), this.buffers.length === this.reconPack.attachments) {
      const r = pP(this.reconPack, this.buffers);
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
const yP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ad,
  Encoder: mP,
  get PacketType() {
    return Re;
  },
  protocol: hP
}, Symbol.toStringTag, { value: "Module" }));
function mn(e, n, r) {
  return e.on(n, r), function() {
    e.off(n, r);
  };
}
const vP = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Nv extends lt {
  /**
   * `Socket` constructor.
   */
  constructor(n, r, o) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = n, this.nsp = r, o && o.auth && (this.auth = o.auth), this._opts = Object.assign({}, o), this.io._autoConnect && this.open();
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
    const n = this.io;
    this.subs = [
      mn(n, "open", this.onopen.bind(this)),
      mn(n, "packet", this.onpacket.bind(this)),
      mn(n, "error", this.onerror.bind(this)),
      mn(n, "close", this.onclose.bind(this))
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
  send(...n) {
    return n.unshift("message"), this.emit.apply(this, n), this;
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
  emit(n, ...r) {
    if (vP.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (r.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
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
  _registerAckCallback(n, r) {
    var o;
    const a = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
    if (a === void 0) {
      this.acks[n] = r;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
      delete this.acks[n];
      for (let f = 0; f < this.sendBuffer.length; f++)
        this.sendBuffer[f].id === n && this.sendBuffer.splice(f, 1);
      r.call(this, new Error("operation has timed out"));
    }, a);
    this.acks[n] = (...f) => {
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
  emitWithAck(n, ...r) {
    const o = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((a, c) => {
      r.push((f, m) => o ? f ? c(f) : a(m) : a(f)), this.emit(n, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(n) {
    let r;
    typeof n[n.length - 1] == "function" && (r = n.pop());
    const o = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: n,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    n.push((a, ...c) => o !== this._queue[0] ? void 0 : (a !== null ? o.tryCount > this._opts.retries && (this._queue.shift(), r && r(a)) : (this._queue.shift(), r && r(null, ...c)), o.pending = !1, this._drainQueue())), this._queue.push(o), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(n = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !n || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(n) {
    n.nsp = this.nsp, this.io._packet(n);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((n) => {
      this._sendConnectPacket(n);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(n) {
    this.packet({
      type: Re.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, n) : n
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(n) {
    this.connected || this.emitReserved("connect_error", n);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(n, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", n, r);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(n) {
    if (n.nsp === this.nsp)
      switch (n.type) {
        case Re.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Re.EVENT:
        case Re.BINARY_EVENT:
          this.onevent(n);
          break;
        case Re.ACK:
        case Re.BINARY_ACK:
          this.onack(n);
          break;
        case Re.DISCONNECT:
          this.ondisconnect();
          break;
        case Re.CONNECT_ERROR:
          this.destroy();
          const o = new Error(n.data.message);
          o.data = n.data.data, this.emitReserved("connect_error", o);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(n) {
    const r = n.data || [];
    n.id != null && r.push(this.ack(n.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(n) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const o of r)
        o.apply(this, n);
    }
    super.emit.apply(this, n), this._pid && n.length && typeof n[n.length - 1] == "string" && (this._lastOffset = n[n.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(n) {
    const r = this;
    let o = !1;
    return function(...a) {
      o || (o = !0, r.packet({
        type: Re.ACK,
        id: n,
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
  onack(n) {
    const r = this.acks[n.id];
    typeof r == "function" && (r.apply(this, n.data), delete this.acks[n.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(n, r) {
    this.id = n, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((n) => this.emitEvent(n)), this.receiveBuffer = [], this.sendBuffer.forEach((n) => {
      this.notifyOutgoingListeners(n), this.packet(n);
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
    this.subs && (this.subs.forEach((n) => n()), this.subs = void 0), this.io._destroy(this);
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
  compress(n) {
    return this.flags.compress = n, this;
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
  timeout(n) {
    return this.flags.timeout = n, this;
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
  onAny(n) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(n), this;
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
  prependAny(n) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(n), this;
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
  offAny(n) {
    if (!this._anyListeners)
      return this;
    if (n) {
      const r = this._anyListeners;
      for (let o = 0; o < r.length; o++)
        if (n === r[o])
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
  onAnyOutgoing(n) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(n), this;
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
  prependAnyOutgoing(n) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(n), this;
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
  offAnyOutgoing(n) {
    if (!this._anyOutgoingListeners)
      return this;
    if (n) {
      const r = this._anyOutgoingListeners;
      for (let o = 0; o < r.length; o++)
        if (n === r[o])
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
  notifyOutgoingListeners(n) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const o of r)
        o.apply(this, n.data);
    }
  }
}
function Qi(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Qi.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), r = Math.floor(n * this.jitter * e);
    e = Math.floor(n * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
Qi.prototype.reset = function() {
  this.attempts = 0;
};
Qi.prototype.setMin = function(e) {
  this.ms = e;
};
Qi.prototype.setMax = function(e) {
  this.max = e;
};
Qi.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Af extends lt {
  constructor(n, r) {
    var o;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (r = n, n = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Dl(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((o = r.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new Qi({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = n;
    const a = r.parser || yP;
    this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(n) {
    return arguments.length ? (this._reconnection = !!n, this) : this._reconnection;
  }
  reconnectionAttempts(n) {
    return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n, this);
  }
  reconnectionDelay(n) {
    var r;
    return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n, (r = this.backoff) === null || r === void 0 || r.setMin(n), this);
  }
  randomizationFactor(n) {
    var r;
    return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n, (r = this.backoff) === null || r === void 0 || r.setJitter(n), this);
  }
  reconnectionDelayMax(n) {
    var r;
    return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n, (r = this.backoff) === null || r === void 0 || r.setMax(n), this);
  }
  timeout(n) {
    return arguments.length ? (this._timeout = n, this) : this._timeout;
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
  open(n) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Mv(this.uri, this.opts);
    const r = this.engine, o = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const a = mn(r, "open", function() {
      o.onopen(), n && n();
    }), c = mn(r, "error", (f) => {
      o.cleanup(), o._readyState = "closed", this.emitReserved("error", f), n ? n(f) : o.maybeReconnectOnOpen();
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
  connect(n) {
    return this.open(n);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const n = this.engine;
    this.subs.push(mn(n, "ping", this.onping.bind(this)), mn(n, "data", this.ondata.bind(this)), mn(n, "error", this.onerror.bind(this)), mn(n, "close", this.onclose.bind(this)), mn(this.decoder, "decoded", this.ondecoded.bind(this)));
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
  ondata(n) {
    try {
      this.decoder.add(n);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(n) {
    Lv(() => {
      this.emitReserved("packet", n);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(n) {
    this.emitReserved("error", n);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(n, r) {
    let o = this.nsps[n];
    return o ? this._autoConnect && !o.active && o.connect() : (o = new Nv(this, n, r), this.nsps[n] = o), o;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(n) {
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
  _packet(n) {
    const r = this.encoder.encode(n);
    for (let o = 0; o < r.length; o++)
      this.engine.write(r[o], n.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((n) => n()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(n, r) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", n, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const n = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const o = this.setTimeoutFn(() => {
        n.skipReconnect || (this.emitReserved("reconnect_attempt", n.backoff.attempts), !n.skipReconnect && n.open((a) => {
          a ? (n._reconnecting = !1, n.reconnect(), this.emitReserved("reconnect_error", a)) : n.onreconnect();
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
    const n = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", n);
  }
}
const Ho = {};
function Ga(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const r = aP(e, n.path || "/socket.io"), o = r.source, a = r.id, c = r.path, f = Ho[a] && c in Ho[a].nsps, m = n.forceNew || n["force new connection"] || n.multiplex === !1 || f;
  let y;
  return m ? y = new Af(o, n) : (Ho[a] || (Ho[a] = new Af(o, n)), y = Ho[a]), r.query && !n.query && (n.query = r.queryKey), y.socket(r.path, n);
}
Object.assign(Ga, {
  Manager: Af,
  Socket: Nv,
  io: Ga,
  connect: Ga
});
let bi;
function Qc(e, n, r = []) {
  const { api_url: o } = vn(), a = (c) => {
    n(c);
  };
  N.useEffect(() => (bi || (bi = Ga(o, {
    reconnectionDelayMax: 1e3 * 10
  }), bi.on("connect", () => {
    console.log("connected", bi.id);
  })), bi.on(e, a), () => {
    bi.off(e, a);
  }), [...r]);
}
const xP = ({
  children: e
}) => {
  const n = rr((v) => v.update), r = hl(), { ringtones: o } = vn(), { conversationId: a } = In(), c = fv(), { loadMessagesRequest: f, loadConversationsRequest: m } = Ki(), y = mv(
    (v) => v.updateOrCreateMany
  ), g = rr(
    (v) => v.conversations.map((w) => w.id)
  ), x = N.useCallback(
    ({ message: v }) => {
      console.log({
        conversationId: a,
        message: v.conversationId
      });
      const w = v.from === `remote:${c}`, S = v.conversationId === a, k = document.visibilityState === "visible", T = g.includes(
        v.conversationId
      );
      (!S || !k) && !w && T && xv.playSound(o.new_message), y([
        {
          ...v,
          fromRemote: w,
          agent: "bot"
        }
      ]);
    },
    [a, c, g]
  ), u = N.useCallback(
    ({ conversationId: v }) => {
      f(v).then((w) => {
        y(
          w.map((S) => ({
            ...S,
            fromRemote: S.from === `remote:${c}`,
            agent: "bot"
          }))
        );
      });
    },
    [c]
  ), p = N.useCallback(async ({ conversationId: v, messageId: w }) => {
    await Promise.all([
      await m([v]).then(
        ([S]) => {
          n(v, S);
        }
      ),
      await f(v, [w]).then(
        ([S]) => {
          S.from !== `remote:${c}` && r.emit("message", { message: S });
        }
      )
    ]);
  }, []);
  return Qc("web.conversation.typing", ({ conversationId: v, isTyping: w }) => {
    n(v, { isTyping: w });
  }), Qc("web.conversation.closed", ({ conversationId: v, isClosed: w }) => {
    n(v, { isClosed: w });
  }), Qc("web.messages.created", p, [p]), N.useEffect(() => (r.on("message", x), r.on("conversation.opened", u), () => {
    r.off("message", x), r.off("conversation.opened", u);
  }), [x, u]), /* @__PURE__ */ E.jsx(E.Fragment, { children: e });
}, wP = ({ app: e, events: n }) => /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx(Bx, { events: n, app: e, children: /* @__PURE__ */ E.jsx(nE, { children: /* @__PURE__ */ E.jsx(kA, { app_id: e.settings.app_id, children: /* @__PURE__ */ E.jsx($x, { children: /* @__PURE__ */ E.jsxs(Ob, { children: [
  /* @__PURE__ */ E.jsx(xP, {}),
  /* @__PURE__ */ E.jsx(Rb, {})
] }) }) }) }) }) });
class _P {
  constructor(n, r) {
    this.params = n, this.settings = r;
  }
}
var Fv = { exports: {} };
(function(e) {
  var n = Object.prototype.hasOwnProperty, r = "~";
  function o() {
  }
  Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (r = !1));
  function a(y, g, x) {
    this.fn = y, this.context = g, this.once = x || !1;
  }
  function c(y, g, x, u, p) {
    if (typeof x != "function")
      throw new TypeError("The listener must be a function");
    var v = new a(x, u || y, p), w = r ? r + g : g;
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
      n.call(x, u) && g.push(r ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? g.concat(Object.getOwnPropertySymbols(x)) : g;
  }, m.prototype.listeners = function(g) {
    var x = r ? r + g : g, u = this._events[x];
    if (!u)
      return [];
    if (u.fn)
      return [u.fn];
    for (var p = 0, v = u.length, w = new Array(v); p < v; p++)
      w[p] = u[p].fn;
    return w;
  }, m.prototype.listenerCount = function(g) {
    var x = r ? r + g : g, u = this._events[x];
    return u ? u.fn ? 1 : u.length : 0;
  }, m.prototype.emit = function(g, x, u, p, v, w) {
    var S = r ? r + g : g;
    if (!this._events[S])
      return !1;
    var k = this._events[S], T = arguments.length, A, L;
    if (k.fn) {
      switch (k.once && this.removeListener(g, k.fn, void 0, !0), T) {
        case 1:
          return k.fn.call(k.context), !0;
        case 2:
          return k.fn.call(k.context, x), !0;
        case 3:
          return k.fn.call(k.context, x, u), !0;
        case 4:
          return k.fn.call(k.context, x, u, p), !0;
        case 5:
          return k.fn.call(k.context, x, u, p, v), !0;
        case 6:
          return k.fn.call(k.context, x, u, p, v, w), !0;
      }
      for (L = 1, A = new Array(T - 1); L < T; L++)
        A[L - 1] = arguments[L];
      k.fn.apply(k.context, A);
    } else {
      var V = k.length, H;
      for (L = 0; L < V; L++)
        switch (k[L].once && this.removeListener(g, k[L].fn, void 0, !0), T) {
          case 1:
            k[L].fn.call(k[L].context);
            break;
          case 2:
            k[L].fn.call(k[L].context, x);
            break;
          case 3:
            k[L].fn.call(k[L].context, x, u);
            break;
          case 4:
            k[L].fn.call(k[L].context, x, u, p);
            break;
          default:
            if (!A)
              for (H = 1, A = new Array(T - 1); H < T; H++)
                A[H - 1] = arguments[H];
            k[L].fn.apply(k[L].context, A);
        }
    }
    return !0;
  }, m.prototype.on = function(g, x, u) {
    return c(this, g, x, u, !1);
  }, m.prototype.once = function(g, x, u) {
    return c(this, g, x, u, !0);
  }, m.prototype.removeListener = function(g, x, u, p) {
    var v = r ? r + g : g;
    if (!this._events[v])
      return this;
    if (!x)
      return f(this, v), this;
    var w = this._events[v];
    if (w.fn)
      w.fn === x && (!p || w.once) && (!u || w.context === u) && f(this, v);
    else {
      for (var S = 0, k = [], T = w.length; S < T; S++)
        (w[S].fn !== x || p && !w[S].once || u && w[S].context !== u) && k.push(w[S]);
      k.length ? this._events[v] = k.length === 1 ? k[0] : k : f(this, v);
    }
    return this;
  }, m.prototype.removeAllListeners = function(g) {
    var x;
    return g ? (x = r ? r + g : g, this._events[x] && f(this, x)) : (this._events = new o(), this._eventsCount = 0), this;
  }, m.prototype.off = m.prototype.removeListener, m.prototype.addListener = m.prototype.on, m.prefixed = r, m.EventEmitter = m, e.exports = m;
})(Fv);
var SP = Fv.exports;
const kP = /* @__PURE__ */ dl(SP);
class ld {
  constructor(n = "root", r) {
    vc(this, "app");
    vc(this, "events", new kP());
    this.elementId = n, this.props = r, this.app = new _P(this.props.params, this.props.settings);
  }
  async render() {
    Yc.createRoot(
      document.getElementById(this.elementId)
    ).render(
      /* @__PURE__ */ E.jsx(yn.StrictMode, { children: /* @__PURE__ */ E.jsx(wP, { app: this.app, events: this.events }) })
    );
  }
  static async load({
    app_id: n,
    url: r,
    user: o
  }) {
    var v, w, S;
    const a = `zapdesk-web-${n}`, c = r || "https://zapdesk.api.homolog.idevit.app", f = Object.assign(document.createElement("link"), {
      href: "https://cdn.jsdelivr.net/gh/deviiit/zapdesk-static-files@v1.9.0/web-chat/style.css",
      rel: "stylesheet"
    });
    document.head.append(f);
    const m = await fetch(
      `${c}/api/web/connections/${n}/configs`
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
    ), new ld(a, m);
  }
}
window.ZapDesk = ld;
export {
  ld as ZapDesk
};
