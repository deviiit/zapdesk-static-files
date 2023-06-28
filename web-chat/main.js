var Rx = Object.defineProperty;
var Ox = (e, n, r) => n in e ? Rx(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var yc = (e, n, r) => (Ox(e, typeof n != "symbol" ? n + "" : n, r), r);
function Lx(e, n) {
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
var Yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kg = { exports: {} }, Io = {}, Qg = { exports: {} }, be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $h;
function Dx() {
  if ($h)
    return be;
  $h = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), u = Symbol.iterator;
  function p(b) {
    return b === null || typeof b != "object" ? null : (b = u && b[u] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, S = {};
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
  function C(b, I, ne) {
    this.props = b, this.context = I, this.refs = S, this.updater = ne || v;
  }
  var L = C.prototype = new T();
  L.constructor = C, _(L, k.prototype), L.isPureReactComponent = !0;
  var j = Array.isArray, H = Object.prototype.hasOwnProperty, Z = { current: null }, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(b, I, ne) {
    var ke, ve = {}, Oe = null, we = null;
    if (I != null)
      for (ke in I.ref !== void 0 && (we = I.ref), I.key !== void 0 && (Oe = "" + I.key), I)
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
    return { $$typeof: e, type: b, key: Oe, ref: we, props: ve, _owner: Z.current };
  }
  function J(b, I) {
    return { $$typeof: e, type: b.type, key: I, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Ee(b) {
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
    var we = !1;
    if (b === null)
      we = !0;
    else
      switch (Oe) {
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case e:
            case n:
              we = !0;
          }
      }
    if (we)
      return we = b, ve = ve(we), b = ke === "" ? "." + le(we, 0) : ke, j(ve) ? (ne = "", b != null && (ne = b.replace(pe, "$&/") + "/"), ae(ve, I, ne, "", function(Qe) {
        return Qe;
      })) : ve != null && (Ee(ve) && (ve = J(ve, ne + (!ve.key || we && we.key === ve.key ? "" : ("" + ve.key).replace(pe, "$&/") + "/") + b)), I.push(ve)), 1;
    if (we = 0, ke = ke === "" ? "." : ke + ":", j(b))
      for (var Pe = 0; Pe < b.length; Pe++) {
        Oe = b[Pe];
        var Ae = ke + le(Oe, Pe);
        we += ae(Oe, I, ne, Ae, ve);
      }
    else if (Ae = p(b), typeof Ae == "function")
      for (b = Ae.call(b), Pe = 0; !(Oe = b.next()).done; )
        Oe = Oe.value, Ae = ke + le(Oe, Pe++), we += ae(Oe, I, ne, Ae, ve);
    else if (Oe === "object")
      throw I = String(b), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return we;
  }
  function ge(b, I, ne) {
    if (b == null)
      return b;
    var ke = [], ve = 0;
    return ae(b, ke, "", "", function(Oe) {
      return I.call(ne, Oe, ve++);
    }), ke;
  }
  function Ce(b) {
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
  var Se = { current: null }, X = { transition: null }, ue = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: X, ReactCurrentOwner: Z };
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
    if (!Ee(b))
      throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, be.Component = k, be.Fragment = r, be.Profiler = a, be.PureComponent = C, be.StrictMode = o, be.Suspense = y, be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, be.cloneElement = function(b, I, ne) {
    if (b == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var ke = _({}, b.props), ve = b.key, Oe = b.ref, we = b._owner;
    if (I != null) {
      if (I.ref !== void 0 && (Oe = I.ref, we = Z.current), I.key !== void 0 && (ve = "" + I.key), b.type && b.type.defaultProps)
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
    return { $$typeof: e, type: b.type, key: ve, ref: Oe, props: ke, _owner: we };
  }, be.createContext = function(b) {
    return b = { $$typeof: f, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: c, _context: b }, b.Consumer = b;
  }, be.createElement = te, be.createFactory = function(b) {
    var I = te.bind(null, b);
    return I.type = b, I;
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(b) {
    return { $$typeof: m, render: b };
  }, be.isValidElement = Ee, be.lazy = function(b) {
    return { $$typeof: x, _payload: { _status: -1, _result: b }, _init: Ce };
  }, be.memo = function(b, I) {
    return { $$typeof: g, type: b, compare: I === void 0 ? null : I };
  }, be.startTransition = function(b) {
    var I = X.transition;
    X.transition = {};
    try {
      b();
    } finally {
      X.transition = I;
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
Qg.exports = Dx();
var N = Qg.exports;
const yn = /* @__PURE__ */ fl(N), Hh = /* @__PURE__ */ Lx({
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
function Mx() {
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
Kg.exports = Mx();
var A = Kg.exports, Qc = {}, Xg = { exports: {} }, Bt = {}, vc = { exports: {} }, xc = {};
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
function Nx() {
  return qh || (qh = 1, function(e) {
    function n(X, ue) {
      var b = X.length;
      X.push(ue);
      e:
        for (; 0 < b; ) {
          var I = b - 1 >>> 1, ne = X[I];
          if (0 < a(ne, ue))
            X[I] = ue, X[b] = ne, b = I;
          else
            break e;
        }
    }
    function r(X) {
      return X.length === 0 ? null : X[0];
    }
    function o(X) {
      if (X.length === 0)
        return null;
      var ue = X[0], b = X.pop();
      if (b !== ue) {
        X[0] = b;
        e:
          for (var I = 0, ne = X.length, ke = ne >>> 1; I < ke; ) {
            var ve = 2 * (I + 1) - 1, Oe = X[ve], we = ve + 1, Pe = X[we];
            if (0 > a(Oe, b))
              we < ne && 0 > a(Pe, Oe) ? (X[I] = Pe, X[we] = b, I = we) : (X[I] = Oe, X[ve] = b, I = ve);
            else if (we < ne && 0 > a(Pe, b))
              X[I] = Pe, X[we] = b, I = we;
            else
              break e;
          }
      }
      return ue;
    }
    function a(X, ue) {
      var b = X.sortIndex - ue.sortIndex;
      return b !== 0 ? b : X.id - ue.id;
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
    var y = [], g = [], x = 1, u = null, p = 3, v = !1, _ = !1, S = !1, k = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function L(X) {
      for (var ue = r(g); ue !== null; ) {
        if (ue.callback === null)
          o(g);
        else if (ue.startTime <= X)
          o(g), ue.sortIndex = ue.expirationTime, n(y, ue);
        else
          break;
        ue = r(g);
      }
    }
    function j(X) {
      if (S = !1, L(X), !_)
        if (r(y) !== null)
          _ = !0, Ce(H);
        else {
          var ue = r(g);
          ue !== null && Se(j, ue.startTime - X);
        }
    }
    function H(X, ue) {
      _ = !1, S && (S = !1, T(te), te = -1), v = !0;
      var b = p;
      try {
        for (L(ue), u = r(y); u !== null && (!(u.expirationTime > ue) || X && !Le()); ) {
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
          ve !== null && Se(j, ve.startTime - ue), ke = !1;
        }
        return ke;
      } finally {
        u = null, p = b, v = !1;
      }
    }
    var Z = !1, K = null, te = -1, J = 5, Ee = -1;
    function Le() {
      return !(e.unstable_now() - Ee < J);
    }
    function pe() {
      if (K !== null) {
        var X = e.unstable_now();
        Ee = X;
        var ue = !0;
        try {
          ue = K(!0, X);
        } finally {
          ue ? le() : (Z = !1, K = null);
        }
      } else
        Z = !1;
    }
    var le;
    if (typeof C == "function")
      le = function() {
        C(pe);
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
    function Ce(X) {
      K = X, Z || (Z = !0, le());
    }
    function Se(X, ue) {
      te = k(function() {
        X(e.unstable_now());
      }, ue);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, e.unstable_continueExecution = function() {
      _ || v || (_ = !0, Ce(H));
    }, e.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < X ? Math.floor(1e3 / X) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return p;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(y);
    }, e.unstable_next = function(X) {
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
        return X();
      } finally {
        p = b;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(X, ue) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var b = p;
      p = X;
      try {
        return ue();
      } finally {
        p = b;
      }
    }, e.unstable_scheduleCallback = function(X, ue, b) {
      var I = e.unstable_now();
      switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? I + b : I) : b = I, X) {
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
      return ne = b + ne, X = { id: x++, callback: ue, priorityLevel: X, startTime: b, expirationTime: ne, sortIndex: -1 }, b > I ? (X.sortIndex = b, n(g, X), r(y) === null && X === r(g) && (S ? (T(te), te = -1) : S = !0, Se(j, b - I))) : (X.sortIndex = ne, n(y, X), _ || v || (_ = !0, Ce(H))), X;
    }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(X) {
      var ue = p;
      return function() {
        var b = p;
        p = ue;
        try {
          return X.apply(this, arguments);
        } finally {
          p = b;
        }
      };
    };
  }(xc)), xc;
}
var Gh;
function Fx() {
  return Gh || (Gh = 1, vc.exports = Nx()), vc.exports;
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
function Ix() {
  if (Kh)
    return Bt;
  Kh = 1;
  var e = N, n = Fx();
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
  function _(t, i, s, l) {
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
  function S(t, i, s, l, d, h, w) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = t, this.type = i, this.sanitizeURL = h, this.removeEmptyString = w;
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
  function C(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var i = t.replace(
      T,
      C
    );
    k[i] = new S(i, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var i = t.replace(T, C);
    k[i] = new S(i, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var i = t.replace(T, C);
    k[i] = new S(i, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    k[t] = new S(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    k[t] = new S(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function L(t, i, s, l) {
    var d = k.hasOwnProperty(i) ? k[i] : null;
    (d !== null ? d.type !== 0 : l || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (_(i, s, d, l) && (s = null), l || d === null ? p(i) && (s === null ? t.removeAttribute(i) : t.setAttribute(i, "" + s)) : d.mustUseProperty ? t[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (i = d.attributeName, l = d.attributeNamespace, s === null ? t.removeAttribute(i) : (d = d.type, s = d === 3 || d === 4 && s === !0 ? "" : "" + s, l ? t.setAttributeNS(l, i, s) : t.setAttribute(i, s))));
  }
  var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = Symbol.for("react.element"), Z = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), Ee = Symbol.for("react.provider"), Le = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), ge = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function ue(t) {
    return t === null || typeof t != "object" ? null : (t = X && t[X] || t["@@iterator"], typeof t == "function" ? t : null);
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
`), w = d.length - 1, E = h.length - 1; 1 <= w && 0 <= E && d[w] !== h[E]; )
          E--;
        for (; 1 <= w && 0 <= E; w--, E--)
          if (d[w] !== h[E]) {
            if (w !== 1 || E !== 1)
              do
                if (w--, E--, 0 > E || d[w] !== h[E]) {
                  var P = `
` + d[w].replace(" at new ", " at ");
                  return t.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", t.displayName)), P;
                }
              while (1 <= w && 0 <= E);
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
  function we(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case K:
        return "Fragment";
      case Z:
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
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Le:
          return (t.displayName || "Context") + ".Consumer";
        case Ee:
          return (t._context.displayName || "Context") + ".Provider";
        case pe:
          var i = t.render;
          return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ge:
          return i = t.displayName || null, i !== null ? i : we(t.type) || "Memo";
        case Ce:
          i = t._payload, t = t._init;
          try {
            return we(t(i));
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
        return we(i);
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
      }, set: function(w) {
        l = "" + w, h.call(this, w);
      } }), Object.defineProperty(t, i, { enumerable: s.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(w) {
        l = "" + w;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[i];
      } };
    }
  }
  function lt(t) {
    t._valueTracker || (t._valueTracker = xn(t));
  }
  function _n(t) {
    if (!t)
      return !1;
    var i = t._valueTracker;
    if (!i)
      return !0;
    var s = i.getValue(), l = "";
    return t && (l = Qe(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== s ? (i.setValue(t), !0) : !1;
  }
  function wn(t) {
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
  function Xi(t, i) {
    var s = i.defaultValue == null ? "" : i.defaultValue, l = i.checked != null ? i.checked : i.defaultChecked;
    s = Ae(i.value != null ? i.value : s), t._wrapperState = { initialChecked: l, initialValue: s, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function O(t, i) {
    i = i.checked, i != null && L(t, "checked", i, !1);
  }
  function V(t, i) {
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
    (i !== "number" || wn(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s));
  }
  var Y = Array.isArray;
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
  function Ve(t, i) {
    var s = i.value;
    if (s == null) {
      if (s = i.children, i = i.defaultValue, s != null) {
        if (i != null)
          throw Error(r(92));
        if (Y(s)) {
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
  function Mt(t) {
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
  function jn(t, i) {
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
  function yt(t, i) {
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
  var $e = null;
  function zn(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ir = null, kt = null, Tt = null;
  function Yi(t) {
    if (t = So(t)) {
      if (typeof ir != "function")
        throw Error(r(280));
      var i = t.stateNode;
      i && (i = zs(i), ir(t.stateNode, t.type, i));
    }
  }
  function vs(t) {
    kt ? Tt ? Tt.push(t) : Tt = [t] : kt = t;
  }
  function Zi() {
    if (kt) {
      var t = kt, i = Tt;
      if (Tt = kt = null, Yi(t), i)
        for (t = 0; t < i.length; t++)
          Yi(i[t]);
    }
  }
  function Ji(t, i) {
    return t(i);
  }
  function ud() {
  }
  var Ml = !1;
  function cd(t, i, s) {
    if (Ml)
      return t(i, s);
    Ml = !0;
    try {
      return Ji(t, i, s);
    } finally {
      Ml = !1, (kt !== null || Tt !== null) && (ud(), Zi());
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
  var Nl = !1;
  if (m)
    try {
      var to = {};
      Object.defineProperty(to, "passive", { get: function() {
        Nl = !0;
      } }), window.addEventListener("test", to, to), window.removeEventListener("test", to, to);
    } catch {
      Nl = !1;
    }
  function Fv(t, i, s, l, d, h, w, E, P) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(s, F);
    } catch ($) {
      this.onError($);
    }
  }
  var no = !1, xs = null, _s = !1, Fl = null, Iv = { onError: function(t) {
    no = !0, xs = t;
  } };
  function Vv(t, i, s, l, d, h, w, E, P) {
    no = !1, xs = null, Fv.apply(Iv, arguments);
  }
  function jv(t, i, s, l, d, h, w, E, P) {
    if (Vv.apply(this, arguments), no) {
      if (no) {
        var F = xs;
        no = !1, xs = null;
      } else
        throw Error(r(198));
      _s || (_s = !0, Fl = F);
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
  function Bv(t) {
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
        for (var w = !1, E = d.child; E; ) {
          if (E === s) {
            w = !0, s = d, l = h;
            break;
          }
          if (E === l) {
            w = !0, l = d, s = h;
            break;
          }
          E = E.sibling;
        }
        if (!w) {
          for (E = h.child; E; ) {
            if (E === s) {
              w = !0, s = h, l = d;
              break;
            }
            if (E === l) {
              w = !0, l = h, s = d;
              break;
            }
            E = E.sibling;
          }
          if (!w)
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
    return t = Bv(t), t !== null ? hd(t) : null;
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
  var md = n.unstable_scheduleCallback, gd = n.unstable_cancelCallback, zv = n.unstable_shouldYield, Uv = n.unstable_requestPaint, tt = n.unstable_now, $v = n.unstable_getCurrentPriorityLevel, Il = n.unstable_ImmediatePriority, yd = n.unstable_UserBlockingPriority, ws = n.unstable_NormalPriority, Hv = n.unstable_LowPriority, vd = n.unstable_IdlePriority, Ss = null, kn = null;
  function Wv(t) {
    if (kn && typeof kn.onCommitFiberRoot == "function")
      try {
        kn.onCommitFiberRoot(Ss, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
  }
  var ln = Math.clz32 ? Math.clz32 : Kv, qv = Math.log, Gv = Math.LN2;
  function Kv(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (qv(t) / Gv | 0) | 0;
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
  function Es(t, i) {
    var s = t.pendingLanes;
    if (s === 0)
      return 0;
    var l = 0, d = t.suspendedLanes, h = t.pingedLanes, w = s & 268435455;
    if (w !== 0) {
      var E = w & ~d;
      E !== 0 ? l = ro(E) : (h &= w, h !== 0 && (l = ro(h)));
    } else
      w = s & ~d, w !== 0 ? l = ro(w) : h !== 0 && (l = ro(h));
    if (l === 0)
      return 0;
    if (i !== 0 && i !== l && !(i & d) && (d = l & -l, h = i & -i, d >= h || d === 16 && (h & 4194240) !== 0))
      return i;
    if (l & 4 && (l |= s & 16), i = t.entangledLanes, i !== 0)
      for (t = t.entanglements, i &= l; 0 < i; )
        s = 31 - ln(i), d = 1 << s, l |= t[s], i &= ~d;
    return l;
  }
  function Qv(t, i) {
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
      var w = 31 - ln(h), E = 1 << w, P = d[w];
      P === -1 ? (!(E & s) || E & l) && (d[w] = Qv(E, i)) : P <= i && (t.expiredLanes |= E), h &= ~E;
    }
  }
  function Vl(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function xd() {
    var t = ks;
    return ks <<= 1, !(ks & 4194240) && (ks = 64), t;
  }
  function jl(t) {
    for (var i = [], s = 0; 31 > s; s++)
      i.push(t);
    return i;
  }
  function io(t, i, s) {
    t.pendingLanes |= i, i !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, i = 31 - ln(i), t[i] = s;
  }
  function Yv(t, i) {
    var s = t.pendingLanes & ~i;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= i, t.mutableReadLanes &= i, t.entangledLanes &= i, i = t.entanglements;
    var l = t.eventTimes;
    for (t = t.expirationTimes; 0 < s; ) {
      var d = 31 - ln(s), h = 1 << d;
      i[d] = 0, l[d] = -1, t[d] = -1, s &= ~h;
    }
  }
  function Bl(t, i) {
    var s = t.entangledLanes |= i;
    for (t = t.entanglements; s; ) {
      var l = 31 - ln(s), d = 1 << l;
      d & i | t[l] & i && (t[l] |= i), s &= ~d;
    }
  }
  var je = 0;
  function _d(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wd, zl, Sd, kd, Td, Ul = !1, Cs = [], or = null, sr = null, ar = null, oo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), lr = [], Zv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ed(t, i) {
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
    return t === null || t.nativeEvent !== h ? (t = { blockedOn: i, domEventName: s, eventSystemFlags: l, nativeEvent: h, targetContainers: [d] }, i !== null && (i = So(i), i !== null && zl(i)), t) : (t.eventSystemFlags |= l, i = t.targetContainers, d !== null && i.indexOf(d) === -1 && i.push(d), t);
  }
  function Jv(t, i, s, l, d) {
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
  function Cd(t) {
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
      var s = Hl(t.domEventName, t.eventSystemFlags, i[0], t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var l = new s.constructor(s.type, s);
        $e = l, s.target.dispatchEvent(l), $e = null;
      } else
        return i = So(s), i !== null && zl(i), t.blockedOn = s, !1;
      i.shift();
    }
    return !0;
  }
  function Ad(t, i, s) {
    As(t) && s.delete(i);
  }
  function e1() {
    Ul = !1, or !== null && As(or) && (or = null), sr !== null && As(sr) && (sr = null), ar !== null && As(ar) && (ar = null), oo.forEach(Ad), so.forEach(Ad);
  }
  function lo(t, i) {
    t.blockedOn === i && (t.blockedOn = null, Ul || (Ul = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, e1)));
  }
  function uo(t) {
    function i(d) {
      return lo(d, t);
    }
    if (0 < Cs.length) {
      lo(Cs[0], t);
      for (var s = 1; s < Cs.length; s++) {
        var l = Cs[s];
        l.blockedOn === t && (l.blockedOn = null);
      }
    }
    for (or !== null && lo(or, t), sr !== null && lo(sr, t), ar !== null && lo(ar, t), oo.forEach(i), so.forEach(i), s = 0; s < lr.length; s++)
      l = lr[s], l.blockedOn === t && (l.blockedOn = null);
    for (; 0 < lr.length && (s = lr[0], s.blockedOn === null); )
      Cd(s), s.blockedOn === null && lr.shift();
  }
  var ii = j.ReactCurrentBatchConfig, bs = !0;
  function t1(t, i, s, l) {
    var d = je, h = ii.transition;
    ii.transition = null;
    try {
      je = 1, $l(t, i, s, l);
    } finally {
      je = d, ii.transition = h;
    }
  }
  function n1(t, i, s, l) {
    var d = je, h = ii.transition;
    ii.transition = null;
    try {
      je = 4, $l(t, i, s, l);
    } finally {
      je = d, ii.transition = h;
    }
  }
  function $l(t, i, s, l) {
    if (bs) {
      var d = Hl(t, i, s, l);
      if (d === null)
        au(t, i, l, Ps, s), Ed(t, l);
      else if (Jv(d, t, i, s, l))
        l.stopPropagation();
      else if (Ed(t, l), i & 4 && -1 < Zv.indexOf(t)) {
        for (; d !== null; ) {
          var h = So(d);
          if (h !== null && wd(h), h = Hl(t, i, s, l), h === null && au(t, i, l, Ps, s), h === d)
            break;
          d = h;
        }
        d !== null && l.stopPropagation();
      } else
        au(t, i, l, null, s);
    }
  }
  var Ps = null;
  function Hl(t, i, s, l) {
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
        switch ($v()) {
          case Il:
            return 1;
          case yd:
            return 4;
          case ws:
          case Hv:
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
  var ur = null, Wl = null, Rs = null;
  function Pd() {
    if (Rs)
      return Rs;
    var t, i = Wl, s = i.length, l, d = "value" in ur ? ur.value : ur.textContent, h = d.length;
    for (t = 0; t < s && i[t] === d[t]; t++)
      ;
    var w = s - t;
    for (l = 1; l <= w && i[s - l] === d[h - l]; l++)
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
    function i(s, l, d, h, w) {
      this._reactName = s, this._targetInst = d, this.type = l, this.nativeEvent = h, this.target = w, this.currentTarget = null;
      for (var E in t)
        t.hasOwnProperty(E) && (s = t[E], this[E] = s ? s(h) : h[E]);
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
  }, defaultPrevented: 0, isTrusted: 0 }, ql = Ht(oi), co = b({}, oi, { view: 0, detail: 0 }), r1 = Ht(co), Gl, Kl, fo, Ds = b({}, co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xl, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== fo && (fo && t.type === "mousemove" ? (Gl = t.screenX - fo.screenX, Kl = t.screenY - fo.screenY) : Kl = Gl = 0, fo = t), Gl);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Kl;
  } }), Od = Ht(Ds), i1 = b({}, Ds, { dataTransfer: 0 }), o1 = Ht(i1), s1 = b({}, co, { relatedTarget: 0 }), Ql = Ht(s1), a1 = b({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), l1 = Ht(a1), u1 = b({}, oi, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), c1 = Ht(u1), f1 = b({}, oi, { data: 0 }), Ld = Ht(f1), d1 = {
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
  }, p1 = {
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
  }, h1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function m1(t) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(t) : (t = h1[t]) ? !!i[t] : !1;
  }
  function Xl() {
    return m1;
  }
  var g1 = b({}, co, { key: function(t) {
    if (t.key) {
      var i = d1[t.key] || t.key;
      if (i !== "Unidentified")
        return i;
    }
    return t.type === "keypress" ? (t = Os(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? p1[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xl, charCode: function(t) {
    return t.type === "keypress" ? Os(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Os(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), y1 = Ht(g1), v1 = b({}, Ds, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dd = Ht(v1), x1 = b({}, co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xl }), _1 = Ht(x1), w1 = b({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), S1 = Ht(w1), k1 = b({}, Ds, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), T1 = Ht(k1), E1 = [9, 13, 27, 32], Yl = m && "CompositionEvent" in window, po = null;
  m && "documentMode" in document && (po = document.documentMode);
  var C1 = m && "TextEvent" in window && !po, Md = m && (!Yl || po && 8 < po && 11 >= po), Nd = String.fromCharCode(32), Fd = !1;
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
  function Vd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var si = !1;
  function A1(t, i) {
    switch (t) {
      case "compositionend":
        return Vd(i);
      case "keypress":
        return i.which !== 32 ? null : (Fd = !0, Nd);
      case "textInput":
        return t = i.data, t === Nd && Fd ? null : t;
      default:
        return null;
    }
  }
  function b1(t, i) {
    if (si)
      return t === "compositionend" || !Yl && Id(t, i) ? (t = Pd(), Rs = Wl = ur = null, si = !1, t) : null;
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
        return Md && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var P1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function jd(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i === "input" ? !!P1[t.type] : i === "textarea";
  }
  function Bd(t, i, s, l) {
    vs(l), i = Vs(i, "onChange"), 0 < i.length && (s = new ql("onChange", "change", null, s, l), t.push({ event: s, listeners: i }));
  }
  var ho = null, mo = null;
  function R1(t) {
    ip(t, 0);
  }
  function Ms(t) {
    var i = fi(t);
    if (_n(i))
      return t;
  }
  function O1(t, i) {
    if (t === "change")
      return i;
  }
  var zd = !1;
  if (m) {
    var Zl;
    if (m) {
      var Jl = "oninput" in document;
      if (!Jl) {
        var Ud = document.createElement("div");
        Ud.setAttribute("oninput", "return;"), Jl = typeof Ud.oninput == "function";
      }
      Zl = Jl;
    } else
      Zl = !1;
    zd = Zl && (!document.documentMode || 9 < document.documentMode);
  }
  function $d() {
    ho && (ho.detachEvent("onpropertychange", Hd), mo = ho = null);
  }
  function Hd(t) {
    if (t.propertyName === "value" && Ms(mo)) {
      var i = [];
      Bd(i, mo, t, zn(t)), cd(R1, i);
    }
  }
  function L1(t, i, s) {
    t === "focusin" ? ($d(), ho = i, mo = s, ho.attachEvent("onpropertychange", Hd)) : t === "focusout" && $d();
  }
  function D1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ms(mo);
  }
  function M1(t, i) {
    if (t === "click")
      return Ms(i);
  }
  function N1(t, i) {
    if (t === "input" || t === "change")
      return Ms(i);
  }
  function F1(t, i) {
    return t === i && (t !== 0 || 1 / t === 1 / i) || t !== t && i !== i;
  }
  var un = typeof Object.is == "function" ? Object.is : F1;
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
    for (var t = window, i = wn(); i instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof i.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s)
        t = i.contentWindow;
      else
        break;
      i = wn(t.document);
    }
    return i;
  }
  function eu(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i && (i === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || i === "textarea" || t.contentEditable === "true");
  }
  function I1(t) {
    var i = Kd(), s = t.focusedElem, l = t.selectionRange;
    if (i !== s && s && s.ownerDocument && Gd(s.ownerDocument.documentElement, s)) {
      if (l !== null && eu(s)) {
        if (i = l.start, t = l.end, t === void 0 && (t = i), "selectionStart" in s)
          s.selectionStart = i, s.selectionEnd = Math.min(t, s.value.length);
        else if (t = (i = s.ownerDocument || document) && i.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var d = s.textContent.length, h = Math.min(l.start, d);
          l = l.end === void 0 ? h : Math.min(l.end, d), !t.extend && h > l && (d = l, l = h, h = d), d = qd(s, h);
          var w = qd(
            s,
            l
          );
          d && w && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== w.node || t.focusOffset !== w.offset) && (i = i.createRange(), i.setStart(d.node, d.offset), t.removeAllRanges(), h > l ? (t.addRange(i), t.extend(w.node, w.offset)) : (i.setEnd(w.node, w.offset), t.addRange(i)));
        }
      }
      for (i = [], t = s; t = t.parentNode; )
        t.nodeType === 1 && i.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < i.length; s++)
        t = i[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var V1 = m && "documentMode" in document && 11 >= document.documentMode, ai = null, tu = null, yo = null, nu = !1;
  function Qd(t, i, s) {
    var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    nu || ai == null || ai !== wn(l) || (l = ai, "selectionStart" in l && eu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), yo && go(yo, l) || (yo = l, l = Vs(tu, "onSelect"), 0 < l.length && (i = new ql("onSelect", "select", null, i, s), t.push({ event: i, listeners: l }), i.target = ai)));
  }
  function Ns(t, i) {
    var s = {};
    return s[t.toLowerCase()] = i.toLowerCase(), s["Webkit" + t] = "webkit" + i, s["Moz" + t] = "moz" + i, s;
  }
  var li = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, ru = {}, Xd = {};
  m && (Xd = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);
  function Fs(t) {
    if (ru[t])
      return ru[t];
    if (!li[t])
      return t;
    var i = li[t], s;
    for (s in i)
      if (i.hasOwnProperty(s) && s in Xd)
        return ru[t] = i[s];
    return t;
  }
  var Yd = Fs("animationend"), Zd = Fs("animationiteration"), Jd = Fs("animationstart"), ep = Fs("transitionend"), tp = /* @__PURE__ */ new Map(), np = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(t, i) {
    tp.set(t, i), c(i, [t]);
  }
  for (var iu = 0; iu < np.length; iu++) {
    var ou = np[iu], j1 = ou.toLowerCase(), B1 = ou[0].toUpperCase() + ou.slice(1);
    cr(j1, "on" + B1);
  }
  cr(Yd, "onAnimationEnd"), cr(Zd, "onAnimationIteration"), cr(Jd, "onAnimationStart"), cr("dblclick", "onDoubleClick"), cr("focusin", "onFocus"), cr("focusout", "onBlur"), cr(ep, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), z1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
  function rp(t, i, s) {
    var l = t.type || "unknown-event";
    t.currentTarget = s, jv(l, i, void 0, t), t.currentTarget = null;
  }
  function ip(t, i) {
    i = (i & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var l = t[s], d = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (i)
          for (var w = l.length - 1; 0 <= w; w--) {
            var E = l[w], P = E.instance, F = E.currentTarget;
            if (E = E.listener, P !== h && d.isPropagationStopped())
              break e;
            rp(d, E, F), h = P;
          }
        else
          for (w = 0; w < l.length; w++) {
            if (E = l[w], P = E.instance, F = E.currentTarget, E = E.listener, P !== h && d.isPropagationStopped())
              break e;
            rp(d, E, F), h = P;
          }
      }
    }
    if (_s)
      throw t = Fl, _s = !1, Fl = null, t;
  }
  function He(t, i) {
    var s = i[pu];
    s === void 0 && (s = i[pu] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    s.has(l) || (op(i, t, 2, !1), s.add(l));
  }
  function su(t, i, s) {
    var l = 0;
    i && (l |= 4), op(s, t, l, i);
  }
  var Is = "_reactListening" + Math.random().toString(36).slice(2);
  function xo(t) {
    if (!t[Is]) {
      t[Is] = !0, o.forEach(function(s) {
        s !== "selectionchange" && (z1.has(s) || su(s, !1, t), su(s, !0, t));
      });
      var i = t.nodeType === 9 ? t : t.ownerDocument;
      i === null || i[Is] || (i[Is] = !0, su("selectionchange", !1, i));
    }
  }
  function op(t, i, s, l) {
    switch (bd(i)) {
      case 1:
        var d = t1;
        break;
      case 4:
        d = n1;
        break;
      default:
        d = $l;
    }
    s = d.bind(null, i, s, t), d = void 0, !Nl || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (d = !0), l ? d !== void 0 ? t.addEventListener(i, s, { capture: !0, passive: d }) : t.addEventListener(i, s, !0) : d !== void 0 ? t.addEventListener(i, s, { passive: d }) : t.addEventListener(i, s, !1);
  }
  function au(t, i, s, l, d) {
    var h = l;
    if (!(i & 1) && !(i & 2) && l !== null)
      e:
        for (; ; ) {
          if (l === null)
            return;
          var w = l.tag;
          if (w === 3 || w === 4) {
            var E = l.stateNode.containerInfo;
            if (E === d || E.nodeType === 8 && E.parentNode === d)
              break;
            if (w === 4)
              for (w = l.return; w !== null; ) {
                var P = w.tag;
                if ((P === 3 || P === 4) && (P = w.stateNode.containerInfo, P === d || P.nodeType === 8 && P.parentNode === d))
                  return;
                w = w.return;
              }
            for (; E !== null; ) {
              if (w = Ir(E), w === null)
                return;
              if (P = w.tag, P === 5 || P === 6) {
                l = h = w;
                continue e;
              }
              E = E.parentNode;
            }
          }
          l = l.return;
        }
    cd(function() {
      var F = h, $ = zn(s), q = [];
      e: {
        var U = tp.get(t);
        if (U !== void 0) {
          var ee = ql, oe = t;
          switch (t) {
            case "keypress":
              if (Os(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              ee = y1;
              break;
            case "focusin":
              oe = "focus", ee = Ql;
              break;
            case "focusout":
              oe = "blur", ee = Ql;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Ql;
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
              ee = o1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = _1;
              break;
            case Yd:
            case Zd:
            case Jd:
              ee = l1;
              break;
            case ep:
              ee = S1;
              break;
            case "scroll":
              ee = r1;
              break;
            case "wheel":
              ee = T1;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = c1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = Dd;
          }
          var se = (i & 4) !== 0, nt = !se && t === "scroll", D = se ? U !== null ? U + "Capture" : null : U;
          se = [];
          for (var R = F, M; R !== null; ) {
            M = R;
            var Q = M.stateNode;
            if (M.tag === 5 && Q !== null && (M = Q, D !== null && (Q = eo(R, D), Q != null && se.push(_o(R, Q, M)))), nt)
              break;
            R = R.return;
          }
          0 < se.length && (U = new ee(U, oe, null, s, $), q.push({ event: U, listeners: se }));
        }
      }
      if (!(i & 7)) {
        e: {
          if (U = t === "mouseover" || t === "pointerover", ee = t === "mouseout" || t === "pointerout", U && s !== $e && (oe = s.relatedTarget || s.fromElement) && (Ir(oe) || oe[Un]))
            break e;
          if ((ee || U) && (U = $.window === $ ? $ : (U = $.ownerDocument) ? U.defaultView || U.parentWindow : window, ee ? (oe = s.relatedTarget || s.toElement, ee = F, oe = oe ? Ir(oe) : null, oe !== null && (nt = Fr(oe), oe !== nt || oe.tag !== 5 && oe.tag !== 6) && (oe = null)) : (ee = null, oe = F), ee !== oe)) {
            if (se = Od, Q = "onMouseLeave", D = "onMouseEnter", R = "mouse", (t === "pointerout" || t === "pointerover") && (se = Dd, Q = "onPointerLeave", D = "onPointerEnter", R = "pointer"), nt = ee == null ? U : fi(ee), M = oe == null ? U : fi(oe), U = new se(Q, R + "leave", ee, s, $), U.target = nt, U.relatedTarget = M, Q = null, Ir($) === F && (se = new se(D, R + "enter", oe, s, $), se.target = M, se.relatedTarget = nt, Q = se), nt = Q, ee && oe)
              t: {
                for (se = ee, D = oe, R = 0, M = se; M; M = ui(M))
                  R++;
                for (M = 0, Q = D; Q; Q = ui(Q))
                  M++;
                for (; 0 < R - M; )
                  se = ui(se), R--;
                for (; 0 < M - R; )
                  D = ui(D), M--;
                for (; R--; ) {
                  if (se === D || D !== null && se === D.alternate)
                    break t;
                  se = ui(se), D = ui(D);
                }
                se = null;
              }
            else
              se = null;
            ee !== null && sp(q, U, ee, se, !1), oe !== null && nt !== null && sp(q, nt, oe, se, !0);
          }
        }
        e: {
          if (U = F ? fi(F) : window, ee = U.nodeName && U.nodeName.toLowerCase(), ee === "select" || ee === "input" && U.type === "file")
            var ce = O1;
          else if (jd(U))
            if (zd)
              ce = N1;
            else {
              ce = D1;
              var he = L1;
            }
          else
            (ee = U.nodeName) && ee.toLowerCase() === "input" && (U.type === "checkbox" || U.type === "radio") && (ce = M1);
          if (ce && (ce = ce(t, F))) {
            Bd(q, ce, s, $);
            break e;
          }
          he && he(t, U, F), t === "focusout" && (he = U._wrapperState) && he.controlled && U.type === "number" && ie(U, "number", U.value);
        }
        switch (he = F ? fi(F) : window, t) {
          case "focusin":
            (jd(he) || he.contentEditable === "true") && (ai = he, tu = F, yo = null);
            break;
          case "focusout":
            yo = tu = ai = null;
            break;
          case "mousedown":
            nu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nu = !1, Qd(q, s, $);
            break;
          case "selectionchange":
            if (V1)
              break;
          case "keydown":
          case "keyup":
            Qd(q, s, $);
        }
        var me;
        if (Yl)
          e: {
            switch (t) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          si ? Id(t, s) && (_e = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Md && s.locale !== "ko" && (si || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && si && (me = Pd()) : (ur = $, Wl = "value" in ur ? ur.value : ur.textContent, si = !0)), he = Vs(F, _e), 0 < he.length && (_e = new Ld(_e, t, null, s, $), q.push({ event: _e, listeners: he }), me ? _e.data = me : (me = Vd(s), me !== null && (_e.data = me)))), (me = C1 ? A1(t, s) : b1(t, s)) && (F = Vs(F, "onBeforeInput"), 0 < F.length && ($ = new Ld("onBeforeInput", "beforeinput", null, s, $), q.push({ event: $, listeners: F }), $.data = me));
      }
      ip(q, i);
    });
  }
  function _o(t, i, s) {
    return { instance: t, listener: i, currentTarget: s };
  }
  function Vs(t, i) {
    for (var s = i + "Capture", l = []; t !== null; ) {
      var d = t, h = d.stateNode;
      d.tag === 5 && h !== null && (d = h, h = eo(t, s), h != null && l.unshift(_o(t, h, d)), h = eo(t, i), h != null && l.push(_o(t, h, d))), t = t.return;
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
    for (var h = i._reactName, w = []; s !== null && s !== l; ) {
      var E = s, P = E.alternate, F = E.stateNode;
      if (P !== null && P === l)
        break;
      E.tag === 5 && F !== null && (E = F, d ? (P = eo(s, h), P != null && w.unshift(_o(s, P, E))) : d || (P = eo(s, h), P != null && w.push(_o(s, P, E)))), s = s.return;
    }
    w.length !== 0 && t.push({ event: i, listeners: w });
  }
  var U1 = /\r\n?/g, $1 = /\u0000|\uFFFD/g;
  function ap(t) {
    return (typeof t == "string" ? t : "" + t).replace(U1, `
`).replace($1, "");
  }
  function js(t, i, s) {
    if (i = ap(i), ap(t) !== i && s)
      throw Error(r(425));
  }
  function Bs() {
  }
  var lu = null, uu = null;
  function cu(t, i) {
    return t === "textarea" || t === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var fu = typeof setTimeout == "function" ? setTimeout : void 0, H1 = typeof clearTimeout == "function" ? clearTimeout : void 0, lp = typeof Promise == "function" ? Promise : void 0, W1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof lp < "u" ? function(t) {
    return lp.resolve(null).then(t).catch(q1);
  } : fu;
  function q1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function du(t, i) {
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
  var ci = Math.random().toString(36).slice(2), Tn = "__reactFiber$" + ci, wo = "__reactProps$" + ci, Un = "__reactContainer$" + ci, pu = "__reactEvents$" + ci, G1 = "__reactListeners$" + ci, K1 = "__reactHandles$" + ci;
  function Ir(t) {
    var i = t[Tn];
    if (i)
      return i;
    for (var s = t.parentNode; s; ) {
      if (i = s[Un] || s[Tn]) {
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
    return t = t[Tn] || t[Un], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function fi(t) {
    if (t.tag === 5 || t.tag === 6)
      return t.stateNode;
    throw Error(r(33));
  }
  function zs(t) {
    return t[wo] || null;
  }
  var hu = [], di = -1;
  function dr(t) {
    return { current: t };
  }
  function We(t) {
    0 > di || (t.current = hu[di], hu[di] = null, di--);
  }
  function Ue(t, i) {
    di++, hu[di] = t.current, t.current = i;
  }
  var pr = {}, Et = dr(pr), Nt = dr(!1), Vr = pr;
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
  function Ft(t) {
    return t = t.childContextTypes, t != null;
  }
  function Us() {
    We(Nt), We(Et);
  }
  function cp(t, i, s) {
    if (Et.current !== pr)
      throw Error(r(168));
    Ue(Et, i), Ue(Nt, s);
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
  function $s(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || pr, Vr = Et.current, Ue(Et, t), Ue(Nt, Nt.current), !0;
  }
  function dp(t, i, s) {
    var l = t.stateNode;
    if (!l)
      throw Error(r(169));
    s ? (t = fp(t, i, Vr), l.__reactInternalMemoizedMergedChildContext = t, We(Nt), We(Et), Ue(Et, t)) : We(Nt), Ue(Nt, s);
  }
  var $n = null, Hs = !1, mu = !1;
  function pp(t) {
    $n === null ? $n = [t] : $n.push(t);
  }
  function Q1(t) {
    Hs = !0, pp(t);
  }
  function hr() {
    if (!mu && $n !== null) {
      mu = !0;
      var t = 0, i = je;
      try {
        var s = $n;
        for (je = 1; t < s.length; t++) {
          var l = s[t];
          do
            l = l(!0);
          while (l !== null);
        }
        $n = null, Hs = !1;
      } catch (d) {
        throw $n !== null && ($n = $n.slice(t + 1)), md(Il, hr), d;
      } finally {
        je = i, mu = !1;
      }
    }
    return null;
  }
  var hi = [], mi = 0, Ws = null, qs = 0, Xt = [], Yt = 0, jr = null, Hn = 1, Wn = "";
  function Br(t, i) {
    hi[mi++] = qs, hi[mi++] = Ws, Ws = t, qs = i;
  }
  function hp(t, i, s) {
    Xt[Yt++] = Hn, Xt[Yt++] = Wn, Xt[Yt++] = jr, jr = t;
    var l = Hn;
    t = Wn;
    var d = 32 - ln(l) - 1;
    l &= ~(1 << d), s += 1;
    var h = 32 - ln(i) + d;
    if (30 < h) {
      var w = d - d % 5;
      h = (l & (1 << w) - 1).toString(32), l >>= w, d -= w, Hn = 1 << 32 - ln(i) + d | s << d | l, Wn = h + t;
    } else
      Hn = 1 << h | s << d | l, Wn = t;
  }
  function gu(t) {
    t.return !== null && (Br(t, 1), hp(t, 1, 0));
  }
  function yu(t) {
    for (; t === Ws; )
      Ws = hi[--mi], hi[mi] = null, qs = hi[--mi], hi[mi] = null;
    for (; t === jr; )
      jr = Xt[--Yt], Xt[Yt] = null, Wn = Xt[--Yt], Xt[Yt] = null, Hn = Xt[--Yt], Xt[Yt] = null;
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
        return i = i.nodeType !== 8 ? null : i, i !== null ? (s = jr !== null ? { id: Hn, overflow: Wn } : null, t.memoizedState = { dehydrated: i, treeContext: s, retryLane: 1073741824 }, s = tn(18, null, null, 0), s.stateNode = i, s.return = t, t.child = s, Wt = t, qt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vu(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function xu(t) {
    if (qe) {
      var i = qt;
      if (i) {
        var s = i;
        if (!gp(t, i)) {
          if (vu(t))
            throw Error(r(418));
          i = fr(s.nextSibling);
          var l = Wt;
          i && gp(t, i) ? mp(l, s) : (t.flags = t.flags & -4097 | 2, qe = !1, Wt = t);
        }
      } else {
        if (vu(t))
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
    if ((i = t.tag !== 3) && !(i = t.tag !== 5) && (i = t.type, i = i !== "head" && i !== "body" && !cu(t.type, t.memoizedProps)), i && (i = qt)) {
      if (vu(t))
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
  var X1 = j.ReactCurrentBatchConfig;
  function fn(t, i) {
    if (t && t.defaultProps) {
      i = b({}, i), t = t.defaultProps;
      for (var s in t)
        i[s] === void 0 && (i[s] = t[s]);
      return i;
    }
    return i;
  }
  var Ks = dr(null), Qs = null, yi = null, wu = null;
  function Su() {
    wu = yi = Qs = null;
  }
  function ku(t) {
    var i = Ks.current;
    We(Ks), t._currentValue = i;
  }
  function Tu(t, i, s) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & i) !== i ? (t.childLanes |= i, l !== null && (l.childLanes |= i)) : l !== null && (l.childLanes & i) !== i && (l.childLanes |= i), t === s)
        break;
      t = t.return;
    }
  }
  function vi(t, i) {
    Qs = t, wu = yi = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & i && (It = !0), t.firstContext = null);
  }
  function Zt(t) {
    var i = t._currentValue;
    if (wu !== t)
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
  function Cu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function _p(t, i) {
    t = t.updateQueue, i.updateQueue === t && (i.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Gn(t, i) {
    return { eventTime: t, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function gr(t, i, s) {
    var l = t.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, De & 2) {
      var d = l.pending;
      return d === null ? i.next = i : (i.next = d.next, d.next = i), l.pending = i, qn(t, s);
    }
    return d = l.interleaved, d === null ? (i.next = i, Eu(l)) : (i.next = d.next, d.next = i), l.interleaved = i, qn(t, s);
  }
  function Xs(t, i, s) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (s & 4194240) !== 0)) {
      var l = i.lanes;
      l &= t.pendingLanes, s |= l, i.lanes = s, Bl(t, s);
    }
  }
  function wp(t, i) {
    var s = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, s === l)) {
      var d = null, h = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var w = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          h === null ? d = h = w : h = h.next = w, s = s.next;
        } while (s !== null);
        h === null ? d = h = i : h = h.next = i;
      } else
        d = h = i;
      s = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: h, shared: l.shared, effects: l.effects }, t.updateQueue = s;
      return;
    }
    t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = i : t.next = i, s.lastBaseUpdate = i;
  }
  function Ys(t, i, s, l) {
    var d = t.updateQueue;
    mr = !1;
    var h = d.firstBaseUpdate, w = d.lastBaseUpdate, E = d.shared.pending;
    if (E !== null) {
      d.shared.pending = null;
      var P = E, F = P.next;
      P.next = null, w === null ? h = F : w.next = F, w = P;
      var $ = t.alternate;
      $ !== null && ($ = $.updateQueue, E = $.lastBaseUpdate, E !== w && (E === null ? $.firstBaseUpdate = F : E.next = F, $.lastBaseUpdate = P));
    }
    if (h !== null) {
      var q = d.baseState;
      w = 0, $ = F = P = null, E = h;
      do {
        var U = E.lane, ee = E.eventTime;
        if ((l & U) === U) {
          $ !== null && ($ = $.next = {
            eventTime: ee,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var oe = t, se = E;
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
          E.callback !== null && E.lane !== 0 && (t.flags |= 64, U = d.effects, U === null ? d.effects = [E] : U.push(E));
        } else
          ee = { eventTime: ee, lane: U, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, $ === null ? (F = $ = ee, P = q) : $ = $.next = ee, w |= U;
        if (E = E.next, E === null) {
          if (E = d.shared.pending, E === null)
            break;
          U = E, E = U.next, U.next = null, d.lastBaseUpdate = U, d.shared.pending = null;
        }
      } while (1);
      if ($ === null && (P = q), d.baseState = P, d.firstBaseUpdate = F, d.lastBaseUpdate = $, i = d.shared.interleaved, i !== null) {
        d = i;
        do
          w |= d.lane, d = d.next;
        while (d !== i);
      } else
        h === null && (d.shared.lanes = 0);
      Hr |= w, t.lanes = w, t.memoizedState = q;
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
  function Au(t, i, s, l) {
    i = t.memoizedState, s = s(l, i), s = s == null ? i : b({}, i, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var Zs = { isMounted: function(t) {
    return (t = t._reactInternals) ? Fr(t) === t : !1;
  }, enqueueSetState: function(t, i, s) {
    t = t._reactInternals;
    var l = Ot(), d = _r(t), h = Gn(l, d);
    h.payload = i, s != null && (h.callback = s), i = gr(t, h, d), i !== null && (hn(i, t, d, l), Xs(i, t, d));
  }, enqueueReplaceState: function(t, i, s) {
    t = t._reactInternals;
    var l = Ot(), d = _r(t), h = Gn(l, d);
    h.tag = 1, h.payload = i, s != null && (h.callback = s), i = gr(t, h, d), i !== null && (hn(i, t, d, l), Xs(i, t, d));
  }, enqueueForceUpdate: function(t, i) {
    t = t._reactInternals;
    var s = Ot(), l = _r(t), d = Gn(s, l);
    d.tag = 2, i != null && (d.callback = i), i = gr(t, d, l), i !== null && (hn(i, t, l, s), Xs(i, t, l));
  } };
  function Tp(t, i, s, l, d, h, w) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, h, w) : i.prototype && i.prototype.isPureReactComponent ? !go(s, l) || !go(d, h) : !0;
  }
  function Ep(t, i, s) {
    var l = !1, d = pr, h = i.contextType;
    return typeof h == "object" && h !== null ? h = Zt(h) : (d = Ft(i) ? Vr : Et.current, l = i.contextTypes, h = (l = l != null) ? pi(t, d) : pr), i = new i(s, h), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Zs, t.stateNode = i, i._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = h), i;
  }
  function Cp(t, i, s, l) {
    t = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(s, l), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(s, l), i.state !== t && Zs.enqueueReplaceState(i, i.state, null);
  }
  function bu(t, i, s, l) {
    var d = t.stateNode;
    d.props = s, d.state = t.memoizedState, d.refs = kp, Cu(t);
    var h = i.contextType;
    typeof h == "object" && h !== null ? d.context = Zt(h) : (h = Ft(i) ? Vr : Et.current, d.context = pi(t, h)), d.state = t.memoizedState, h = i.getDerivedStateFromProps, typeof h == "function" && (Au(t, i, h, s), d.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (i = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), i !== d.state && Zs.enqueueReplaceState(d, d.state, null), Ys(t, s, d, l), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
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
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === h ? i.ref : (i = function(w) {
          var E = d.refs;
          E === kp && (E = d.refs = {}), w === null ? delete E[h] : E[h] = w;
        }, i._stringRef = h, i);
      }
      if (typeof t != "string")
        throw Error(r(284));
      if (!s._owner)
        throw Error(r(290, t));
    }
    return t;
  }
  function Js(t, i) {
    throw t = Object.prototype.toString.call(i), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : t));
  }
  function Ap(t) {
    var i = t._init;
    return i(t._payload);
  }
  function bp(t) {
    function i(D, R) {
      if (t) {
        var M = D.deletions;
        M === null ? (D.deletions = [R], D.flags |= 16) : M.push(R);
      }
    }
    function s(D, R) {
      if (!t)
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
    function h(D, R, M) {
      return D.index = M, t ? (M = D.alternate, M !== null ? (M = M.index, M < R ? (D.flags |= 2, R) : M) : (D.flags |= 2, R)) : (D.flags |= 1048576, R);
    }
    function w(D) {
      return t && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, R, M, Q) {
      return R === null || R.tag !== 6 ? (R = fc(M, D.mode, Q), R.return = D, R) : (R = d(R, M), R.return = D, R);
    }
    function P(D, R, M, Q) {
      var ce = M.type;
      return ce === K ? $(D, R, M.props.children, Q, M.key) : R !== null && (R.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Ce && Ap(ce) === R.type) ? (Q = d(R, M.props), Q.ref = ko(D, R, M), Q.return = D, Q) : (Q = va(M.type, M.key, M.props, null, D.mode, Q), Q.ref = ko(D, R, M), Q.return = D, Q);
    }
    function F(D, R, M, Q) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== M.containerInfo || R.stateNode.implementation !== M.implementation ? (R = dc(M, D.mode, Q), R.return = D, R) : (R = d(R, M.children || []), R.return = D, R);
    }
    function $(D, R, M, Q, ce) {
      return R === null || R.tag !== 7 ? (R = Kr(M, D.mode, Q, ce), R.return = D, R) : (R = d(R, M), R.return = D, R);
    }
    function q(D, R, M) {
      if (typeof R == "string" && R !== "" || typeof R == "number")
        return R = fc("" + R, D.mode, M), R.return = D, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            return M = va(R.type, R.key, R.props, null, D.mode, M), M.ref = ko(D, null, R), M.return = D, M;
          case Z:
            return R = dc(R, D.mode, M), R.return = D, R;
          case Ce:
            var Q = R._init;
            return q(D, Q(R._payload), M);
        }
        if (Y(R) || ue(R))
          return R = Kr(R, D.mode, M, null), R.return = D, R;
        Js(D, R);
      }
      return null;
    }
    function U(D, R, M, Q) {
      var ce = R !== null ? R.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return ce !== null ? null : E(D, R, "" + M, Q);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case H:
            return M.key === ce ? P(D, R, M, Q) : null;
          case Z:
            return M.key === ce ? F(D, R, M, Q) : null;
          case Ce:
            return ce = M._init, U(
              D,
              R,
              ce(M._payload),
              Q
            );
        }
        if (Y(M) || ue(M))
          return ce !== null ? null : $(D, R, M, Q, null);
        Js(D, M);
      }
      return null;
    }
    function ee(D, R, M, Q, ce) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return D = D.get(M) || null, E(R, D, "" + Q, ce);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case H:
            return D = D.get(Q.key === null ? M : Q.key) || null, P(R, D, Q, ce);
          case Z:
            return D = D.get(Q.key === null ? M : Q.key) || null, F(R, D, Q, ce);
          case Ce:
            var he = Q._init;
            return ee(D, R, M, he(Q._payload), ce);
        }
        if (Y(Q) || ue(Q))
          return D = D.get(M) || null, $(R, D, Q, ce, null);
        Js(R, Q);
      }
      return null;
    }
    function oe(D, R, M, Q) {
      for (var ce = null, he = null, me = R, _e = R = 0, gt = null; me !== null && _e < M.length; _e++) {
        me.index > _e ? (gt = me, me = null) : gt = me.sibling;
        var Ne = U(D, me, M[_e], Q);
        if (Ne === null) {
          me === null && (me = gt);
          break;
        }
        t && me && Ne.alternate === null && i(D, me), R = h(Ne, R, _e), he === null ? ce = Ne : he.sibling = Ne, he = Ne, me = gt;
      }
      if (_e === M.length)
        return s(D, me), qe && Br(D, _e), ce;
      if (me === null) {
        for (; _e < M.length; _e++)
          me = q(D, M[_e], Q), me !== null && (R = h(me, R, _e), he === null ? ce = me : he.sibling = me, he = me);
        return qe && Br(D, _e), ce;
      }
      for (me = l(D, me); _e < M.length; _e++)
        gt = ee(me, D, _e, M[_e], Q), gt !== null && (t && gt.alternate !== null && me.delete(gt.key === null ? _e : gt.key), R = h(gt, R, _e), he === null ? ce = gt : he.sibling = gt, he = gt);
      return t && me.forEach(function(kr) {
        return i(D, kr);
      }), qe && Br(D, _e), ce;
    }
    function se(D, R, M, Q) {
      var ce = ue(M);
      if (typeof ce != "function")
        throw Error(r(150));
      if (M = ce.call(M), M == null)
        throw Error(r(151));
      for (var he = ce = null, me = R, _e = R = 0, gt = null, Ne = M.next(); me !== null && !Ne.done; _e++, Ne = M.next()) {
        me.index > _e ? (gt = me, me = null) : gt = me.sibling;
        var kr = U(D, me, Ne.value, Q);
        if (kr === null) {
          me === null && (me = gt);
          break;
        }
        t && me && kr.alternate === null && i(D, me), R = h(kr, R, _e), he === null ? ce = kr : he.sibling = kr, he = kr, me = gt;
      }
      if (Ne.done)
        return s(
          D,
          me
        ), qe && Br(D, _e), ce;
      if (me === null) {
        for (; !Ne.done; _e++, Ne = M.next())
          Ne = q(D, Ne.value, Q), Ne !== null && (R = h(Ne, R, _e), he === null ? ce = Ne : he.sibling = Ne, he = Ne);
        return qe && Br(D, _e), ce;
      }
      for (me = l(D, me); !Ne.done; _e++, Ne = M.next())
        Ne = ee(me, D, _e, Ne.value, Q), Ne !== null && (t && Ne.alternate !== null && me.delete(Ne.key === null ? _e : Ne.key), R = h(Ne, R, _e), he === null ? ce = Ne : he.sibling = Ne, he = Ne);
      return t && me.forEach(function(Px) {
        return i(D, Px);
      }), qe && Br(D, _e), ce;
    }
    function nt(D, R, M, Q) {
      if (typeof M == "object" && M !== null && M.type === K && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case H:
            e: {
              for (var ce = M.key, he = R; he !== null; ) {
                if (he.key === ce) {
                  if (ce = M.type, ce === K) {
                    if (he.tag === 7) {
                      s(D, he.sibling), R = d(he, M.props.children), R.return = D, D = R;
                      break e;
                    }
                  } else if (he.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Ce && Ap(ce) === he.type) {
                    s(D, he.sibling), R = d(he, M.props), R.ref = ko(D, he, M), R.return = D, D = R;
                    break e;
                  }
                  s(D, he);
                  break;
                } else
                  i(D, he);
                he = he.sibling;
              }
              M.type === K ? (R = Kr(M.props.children, D.mode, Q, M.key), R.return = D, D = R) : (Q = va(M.type, M.key, M.props, null, D.mode, Q), Q.ref = ko(D, R, M), Q.return = D, D = Q);
            }
            return w(D);
          case Z:
            e: {
              for (he = M.key; R !== null; ) {
                if (R.key === he)
                  if (R.tag === 4 && R.stateNode.containerInfo === M.containerInfo && R.stateNode.implementation === M.implementation) {
                    s(D, R.sibling), R = d(R, M.children || []), R.return = D, D = R;
                    break e;
                  } else {
                    s(D, R);
                    break;
                  }
                else
                  i(D, R);
                R = R.sibling;
              }
              R = dc(M, D.mode, Q), R.return = D, D = R;
            }
            return w(D);
          case Ce:
            return he = M._init, nt(D, R, he(M._payload), Q);
        }
        if (Y(M))
          return oe(D, R, M, Q);
        if (ue(M))
          return se(D, R, M, Q);
        Js(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, R !== null && R.tag === 6 ? (s(D, R.sibling), R = d(R, M), R.return = D, D = R) : (s(D, R), R = fc(M, D.mode, Q), R.return = D, D = R), w(D)) : s(D, R);
    }
    return nt;
  }
  var xi = bp(!0), Pp = bp(!1), To = {}, En = dr(To), Eo = dr(To), Co = dr(To);
  function Ur(t) {
    if (t === To)
      throw Error(r(174));
    return t;
  }
  function Pu(t, i) {
    switch (Ue(Co, i), Ue(Eo, t), Ue(En, To), t = i.nodeType, t) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : jn(null, "");
        break;
      default:
        t = t === 8 ? i.parentNode : i, i = t.namespaceURI || null, t = t.tagName, i = jn(i, t);
    }
    We(En), Ue(En, i);
  }
  function _i() {
    We(En), We(Eo), We(Co);
  }
  function Rp(t) {
    Ur(Co.current);
    var i = Ur(En.current), s = jn(i, t.type);
    i !== s && (Ue(Eo, t), Ue(En, s));
  }
  function Ru(t) {
    Eo.current === t && (We(En), We(Eo));
  }
  var Xe = dr(0);
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
  var Ou = [];
  function Lu() {
    for (var t = 0; t < Ou.length; t++)
      Ou[t]._workInProgressVersionPrimary = null;
    Ou.length = 0;
  }
  var ta = j.ReactCurrentDispatcher, Du = j.ReactCurrentBatchConfig, $r = 0, Ye = null, ut = null, ht = null, na = !1, Ao = !1, bo = 0, Y1 = 0;
  function Ct() {
    throw Error(r(321));
  }
  function Mu(t, i) {
    if (i === null)
      return !1;
    for (var s = 0; s < i.length && s < t.length; s++)
      if (!un(t[s], i[s]))
        return !1;
    return !0;
  }
  function Nu(t, i, s, l, d, h) {
    if ($r = h, Ye = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, ta.current = t === null || t.memoizedState === null ? tx : nx, t = s(l, d), Ao) {
      h = 0;
      do {
        if (Ao = !1, bo = 0, 25 <= h)
          throw Error(r(301));
        h += 1, ht = ut = null, i.updateQueue = null, ta.current = rx, t = s(l, d);
      } while (Ao);
    }
    if (ta.current = oa, i = ut !== null && ut.next !== null, $r = 0, ht = ut = Ye = null, na = !1, i)
      throw Error(r(300));
    return t;
  }
  function Fu() {
    var t = bo !== 0;
    return bo = 0, t;
  }
  function Cn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ht === null ? Ye.memoizedState = ht = t : ht = ht.next = t, ht;
  }
  function Jt() {
    if (ut === null) {
      var t = Ye.alternate;
      t = t !== null ? t.memoizedState : null;
    } else
      t = ut.next;
    var i = ht === null ? Ye.memoizedState : ht.next;
    if (i !== null)
      ht = i, ut = t;
    else {
      if (t === null)
        throw Error(r(310));
      ut = t, t = { memoizedState: ut.memoizedState, baseState: ut.baseState, baseQueue: ut.baseQueue, queue: ut.queue, next: null }, ht === null ? Ye.memoizedState = ht = t : ht = ht.next = t;
    }
    return ht;
  }
  function Po(t, i) {
    return typeof i == "function" ? i(t) : i;
  }
  function Iu(t) {
    var i = Jt(), s = i.queue;
    if (s === null)
      throw Error(r(311));
    s.lastRenderedReducer = t;
    var l = ut, d = l.baseQueue, h = s.pending;
    if (h !== null) {
      if (d !== null) {
        var w = d.next;
        d.next = h.next, h.next = w;
      }
      l.baseQueue = d = h, s.pending = null;
    }
    if (d !== null) {
      h = d.next, l = l.baseState;
      var E = w = null, P = null, F = h;
      do {
        var $ = F.lane;
        if (($r & $) === $)
          P !== null && (P = P.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), l = F.hasEagerState ? F.eagerState : t(l, F.action);
        else {
          var q = {
            lane: $,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          P === null ? (E = P = q, w = l) : P = P.next = q, Ye.lanes |= $, Hr |= $;
        }
        F = F.next;
      } while (F !== null && F !== h);
      P === null ? w = l : P.next = E, un(l, i.memoizedState) || (It = !0), i.memoizedState = l, i.baseState = w, i.baseQueue = P, s.lastRenderedState = l;
    }
    if (t = s.interleaved, t !== null) {
      d = t;
      do
        h = d.lane, Ye.lanes |= h, Hr |= h, d = d.next;
      while (d !== t);
    } else
      d === null && (s.lanes = 0);
    return [i.memoizedState, s.dispatch];
  }
  function Vu(t) {
    var i = Jt(), s = i.queue;
    if (s === null)
      throw Error(r(311));
    s.lastRenderedReducer = t;
    var l = s.dispatch, d = s.pending, h = i.memoizedState;
    if (d !== null) {
      s.pending = null;
      var w = d = d.next;
      do
        h = t(h, w.action), w = w.next;
      while (w !== d);
      un(h, i.memoizedState) || (It = !0), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), s.lastRenderedState = h;
    }
    return [h, l];
  }
  function Op() {
  }
  function Lp(t, i) {
    var s = Ye, l = Jt(), d = i(), h = !un(l.memoizedState, d);
    if (h && (l.memoizedState = d, It = !0), l = l.queue, ju(Np.bind(null, s, l, t), [t]), l.getSnapshot !== i || h || ht !== null && ht.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ro(9, Mp.bind(null, s, l, d, i), void 0, null), mt === null)
        throw Error(r(349));
      $r & 30 || Dp(s, i, d);
    }
    return d;
  }
  function Dp(t, i, s) {
    t.flags |= 16384, t = { getSnapshot: i, value: s }, i = Ye.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ye.updateQueue = i, i.stores = [t]) : (s = i.stores, s === null ? i.stores = [t] : s.push(t));
  }
  function Mp(t, i, s, l) {
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
  function Vp(t) {
    var i = Cn();
    return typeof t == "function" && (t = t()), i.memoizedState = i.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Po, lastRenderedState: t }, i.queue = t, t = t.dispatch = ex.bind(null, Ye, t), [i.memoizedState, t];
  }
  function Ro(t, i, s, l) {
    return t = { tag: t, create: i, destroy: s, deps: l, next: null }, i = Ye.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ye.updateQueue = i, i.lastEffect = t.next = t) : (s = i.lastEffect, s === null ? i.lastEffect = t.next = t : (l = s.next, s.next = t, t.next = l, i.lastEffect = t)), t;
  }
  function jp() {
    return Jt().memoizedState;
  }
  function ra(t, i, s, l) {
    var d = Cn();
    Ye.flags |= t, d.memoizedState = Ro(1 | i, s, void 0, l === void 0 ? null : l);
  }
  function ia(t, i, s, l) {
    var d = Jt();
    l = l === void 0 ? null : l;
    var h = void 0;
    if (ut !== null) {
      var w = ut.memoizedState;
      if (h = w.destroy, l !== null && Mu(l, w.deps)) {
        d.memoizedState = Ro(i, s, h, l);
        return;
      }
    }
    Ye.flags |= t, d.memoizedState = Ro(1 | i, s, h, l);
  }
  function Bp(t, i) {
    return ra(8390656, 8, t, i);
  }
  function ju(t, i) {
    return ia(2048, 8, t, i);
  }
  function zp(t, i) {
    return ia(4, 2, t, i);
  }
  function Up(t, i) {
    return ia(4, 4, t, i);
  }
  function $p(t, i) {
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
    return s = s != null ? s.concat([t]) : null, ia(4, 4, $p.bind(null, i, t), s);
  }
  function Bu() {
  }
  function Wp(t, i) {
    var s = Jt();
    i = i === void 0 ? null : i;
    var l = s.memoizedState;
    return l !== null && i !== null && Mu(i, l[1]) ? l[0] : (s.memoizedState = [t, i], t);
  }
  function qp(t, i) {
    var s = Jt();
    i = i === void 0 ? null : i;
    var l = s.memoizedState;
    return l !== null && i !== null && Mu(i, l[1]) ? l[0] : (t = t(), s.memoizedState = [t, i], t);
  }
  function Gp(t, i, s) {
    return $r & 21 ? (un(s, i) || (s = xd(), Ye.lanes |= s, Hr |= s, t.baseState = !0), i) : (t.baseState && (t.baseState = !1, It = !0), t.memoizedState = s);
  }
  function Z1(t, i) {
    var s = je;
    je = s !== 0 && 4 > s ? s : 4, t(!0);
    var l = Du.transition;
    Du.transition = {};
    try {
      t(!1), i();
    } finally {
      je = s, Du.transition = l;
    }
  }
  function Kp() {
    return Jt().memoizedState;
  }
  function J1(t, i, s) {
    var l = _r(t);
    if (s = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null }, Qp(t))
      Xp(i, s);
    else if (s = xp(t, i, s, l), s !== null) {
      var d = Ot();
      hn(s, t, l, d), Yp(s, i, l);
    }
  }
  function ex(t, i, s) {
    var l = _r(t), d = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Qp(t))
      Xp(i, d);
    else {
      var h = t.alternate;
      if (t.lanes === 0 && (h === null || h.lanes === 0) && (h = i.lastRenderedReducer, h !== null))
        try {
          var w = i.lastRenderedState, E = h(w, s);
          if (d.hasEagerState = !0, d.eagerState = E, un(E, w)) {
            var P = i.interleaved;
            P === null ? (d.next = d, Eu(i)) : (d.next = P.next, P.next = d), i.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
      s = xp(t, i, d, l), s !== null && (d = Ot(), hn(s, t, l, d), Yp(s, i, l));
    }
  }
  function Qp(t) {
    var i = t.alternate;
    return t === Ye || i !== null && i === Ye;
  }
  function Xp(t, i) {
    Ao = na = !0;
    var s = t.pending;
    s === null ? i.next = i : (i.next = s.next, s.next = i), t.pending = i;
  }
  function Yp(t, i, s) {
    if (s & 4194240) {
      var l = i.lanes;
      l &= t.pendingLanes, s |= l, i.lanes = s, Bl(t, s);
    }
  }
  var oa = { readContext: Zt, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, tx = { readContext: Zt, useCallback: function(t, i) {
    return Cn().memoizedState = [t, i === void 0 ? null : i], t;
  }, useContext: Zt, useEffect: Bp, useImperativeHandle: function(t, i, s) {
    return s = s != null ? s.concat([t]) : null, ra(
      4194308,
      4,
      $p.bind(null, i, t),
      s
    );
  }, useLayoutEffect: function(t, i) {
    return ra(4194308, 4, t, i);
  }, useInsertionEffect: function(t, i) {
    return ra(4, 2, t, i);
  }, useMemo: function(t, i) {
    var s = Cn();
    return i = i === void 0 ? null : i, t = t(), s.memoizedState = [t, i], t;
  }, useReducer: function(t, i, s) {
    var l = Cn();
    return i = s !== void 0 ? s(i) : i, l.memoizedState = l.baseState = i, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: i }, l.queue = t, t = t.dispatch = J1.bind(null, Ye, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var i = Cn();
    return t = { current: t }, i.memoizedState = t;
  }, useState: Vp, useDebugValue: Bu, useDeferredValue: function(t) {
    return Cn().memoizedState = t;
  }, useTransition: function() {
    var t = Vp(!1), i = t[0];
    return t = Z1.bind(null, t[1]), Cn().memoizedState = t, [i, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, i, s) {
    var l = Ye, d = Cn();
    if (qe) {
      if (s === void 0)
        throw Error(r(407));
      s = s();
    } else {
      if (s = i(), mt === null)
        throw Error(r(349));
      $r & 30 || Dp(l, i, s);
    }
    d.memoizedState = s;
    var h = { value: s, getSnapshot: i };
    return d.queue = h, Bp(Np.bind(
      null,
      l,
      h,
      t
    ), [t]), l.flags |= 2048, Ro(9, Mp.bind(null, l, h, s, i), void 0, null), s;
  }, useId: function() {
    var t = Cn(), i = mt.identifierPrefix;
    if (qe) {
      var s = Wn, l = Hn;
      s = (l & ~(1 << 32 - ln(l) - 1)).toString(32) + s, i = ":" + i + "R" + s, s = bo++, 0 < s && (i += "H" + s.toString(32)), i += ":";
    } else
      s = Y1++, i = ":" + i + "r" + s.toString(32) + ":";
    return t.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, nx = {
    readContext: Zt,
    useCallback: Wp,
    useContext: Zt,
    useEffect: ju,
    useImperativeHandle: Hp,
    useInsertionEffect: zp,
    useLayoutEffect: Up,
    useMemo: qp,
    useReducer: Iu,
    useRef: jp,
    useState: function() {
      return Iu(Po);
    },
    useDebugValue: Bu,
    useDeferredValue: function(t) {
      var i = Jt();
      return Gp(i, ut.memoizedState, t);
    },
    useTransition: function() {
      var t = Iu(Po)[0], i = Jt().memoizedState;
      return [t, i];
    },
    useMutableSource: Op,
    useSyncExternalStore: Lp,
    useId: Kp,
    unstable_isNewReconciler: !1
  }, rx = { readContext: Zt, useCallback: Wp, useContext: Zt, useEffect: ju, useImperativeHandle: Hp, useInsertionEffect: zp, useLayoutEffect: Up, useMemo: qp, useReducer: Vu, useRef: jp, useState: function() {
    return Vu(Po);
  }, useDebugValue: Bu, useDeferredValue: function(t) {
    var i = Jt();
    return ut === null ? i.memoizedState = t : Gp(i, ut.memoizedState, t);
  }, useTransition: function() {
    var t = Vu(Po)[0], i = Jt().memoizedState;
    return [t, i];
  }, useMutableSource: Op, useSyncExternalStore: Lp, useId: Kp, unstable_isNewReconciler: !1 };
  function wi(t, i) {
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
  function zu(t, i, s) {
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
  var ix = typeof WeakMap == "function" ? WeakMap : Map;
  function Zp(t, i, s) {
    s = Gn(-1, s), s.tag = 3, s.payload = { element: null };
    var l = i.value;
    return s.callback = function() {
      da || (da = !0, rc = l), Uu(t, i);
    }, s;
  }
  function Jp(t, i, s) {
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
      var w = i.stack;
      this.componentDidCatch(i.value, { componentStack: w !== null ? w : "" });
    }), s;
  }
  function eh(t, i, s) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new ix();
      var d = /* @__PURE__ */ new Set();
      l.set(i, d);
    } else
      d = l.get(i), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(i, d));
    d.has(s) || (d.add(s), t = vx.bind(null, t, i, s), i.then(t, t));
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
  var ox = j.ReactCurrentOwner, It = !1;
  function Rt(t, i, s, l) {
    i.child = t === null ? Pp(i, null, s, l) : xi(i, t.child, s, l);
  }
  function rh(t, i, s, l, d) {
    s = s.render;
    var h = i.ref;
    return vi(i, d), l = Nu(t, i, s, l, h, d), s = Fu(), t !== null && !It ? (i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~d, Kn(t, i, d)) : (qe && s && gu(i), i.flags |= 1, Rt(t, i, l, d), i.child);
  }
  function ih(t, i, s, l, d) {
    if (t === null) {
      var h = s.type;
      return typeof h == "function" && !cc(h) && h.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (i.tag = 15, i.type = h, oh(t, i, h, l, d)) : (t = va(s.type, null, l, i, i.mode, d), t.ref = i.ref, t.return = i, i.child = t);
    }
    if (h = t.child, !(t.lanes & d)) {
      var w = h.memoizedProps;
      if (s = s.compare, s = s !== null ? s : go, s(w, l) && t.ref === i.ref)
        return Kn(t, i, d);
    }
    return i.flags |= 1, t = Sr(h, l), t.ref = i.ref, t.return = i, i.child = t;
  }
  function oh(t, i, s, l, d) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (go(h, l) && t.ref === i.ref)
        if (It = !1, i.pendingProps = l = h, (t.lanes & d) !== 0)
          t.flags & 131072 && (It = !0);
        else
          return i.lanes = t.lanes, Kn(t, i, d);
    }
    return $u(t, i, s, l, d);
  }
  function sh(t, i, s) {
    var l = i.pendingProps, d = l.children, h = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden")
      if (!(i.mode & 1))
        i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ue(ki, Gt), Gt |= s;
      else {
        if (!(s & 1073741824))
          return t = h !== null ? h.baseLanes | s : s, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, i.updateQueue = null, Ue(ki, Gt), Gt |= t, null;
        i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = h !== null ? h.baseLanes : s, Ue(ki, Gt), Gt |= l;
      }
    else
      h !== null ? (l = h.baseLanes | s, i.memoizedState = null) : l = s, Ue(ki, Gt), Gt |= l;
    return Rt(t, i, d, s), i.child;
  }
  function ah(t, i) {
    var s = i.ref;
    (t === null && s !== null || t !== null && t.ref !== s) && (i.flags |= 512, i.flags |= 2097152);
  }
  function $u(t, i, s, l, d) {
    var h = Ft(s) ? Vr : Et.current;
    return h = pi(i, h), vi(i, d), s = Nu(t, i, s, l, h, d), l = Fu(), t !== null && !It ? (i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~d, Kn(t, i, d)) : (qe && l && gu(i), i.flags |= 1, Rt(t, i, s, d), i.child);
  }
  function lh(t, i, s, l, d) {
    if (Ft(s)) {
      var h = !0;
      $s(i);
    } else
      h = !1;
    if (vi(i, d), i.stateNode === null)
      aa(t, i), Ep(i, s, l), bu(i, s, l, d), l = !0;
    else if (t === null) {
      var w = i.stateNode, E = i.memoizedProps;
      w.props = E;
      var P = w.context, F = s.contextType;
      typeof F == "object" && F !== null ? F = Zt(F) : (F = Ft(s) ? Vr : Et.current, F = pi(i, F));
      var $ = s.getDerivedStateFromProps, q = typeof $ == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      q || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (E !== l || P !== F) && Cp(i, w, l, F), mr = !1;
      var U = i.memoizedState;
      w.state = U, Ys(i, l, w, d), P = i.memoizedState, E !== l || U !== P || Nt.current || mr ? (typeof $ == "function" && (Au(i, s, $, l), P = i.memoizedState), (E = mr || Tp(i, s, E, l, U, P, F)) ? (q || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = l, i.memoizedState = P), w.props = l, w.state = P, w.context = F, l = E) : (typeof w.componentDidMount == "function" && (i.flags |= 4194308), l = !1);
    } else {
      w = i.stateNode, _p(t, i), E = i.memoizedProps, F = i.type === i.elementType ? E : fn(i.type, E), w.props = F, q = i.pendingProps, U = w.context, P = s.contextType, typeof P == "object" && P !== null ? P = Zt(P) : (P = Ft(s) ? Vr : Et.current, P = pi(i, P));
      var ee = s.getDerivedStateFromProps;
      ($ = typeof ee == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (E !== q || U !== P) && Cp(i, w, l, P), mr = !1, U = i.memoizedState, w.state = U, Ys(i, l, w, d);
      var oe = i.memoizedState;
      E !== q || U !== oe || Nt.current || mr ? (typeof ee == "function" && (Au(i, s, ee, l), oe = i.memoizedState), (F = mr || Tp(i, s, F, l, U, oe, P) || !1) ? ($ || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(l, oe, P), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(l, oe, P)), typeof w.componentDidUpdate == "function" && (i.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || E === t.memoizedProps && U === t.memoizedState || (i.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || E === t.memoizedProps && U === t.memoizedState || (i.flags |= 1024), i.memoizedProps = l, i.memoizedState = oe), w.props = l, w.state = oe, w.context = P, l = F) : (typeof w.componentDidUpdate != "function" || E === t.memoizedProps && U === t.memoizedState || (i.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || E === t.memoizedProps && U === t.memoizedState || (i.flags |= 1024), l = !1);
    }
    return Hu(t, i, s, l, h, d);
  }
  function Hu(t, i, s, l, d, h) {
    ah(t, i);
    var w = (i.flags & 128) !== 0;
    if (!l && !w)
      return d && dp(i, s, !1), Kn(t, i, h);
    l = i.stateNode, ox.current = i;
    var E = w && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return i.flags |= 1, t !== null && w ? (i.child = xi(i, t.child, null, h), i.child = xi(i, null, E, h)) : Rt(t, i, E, h), i.memoizedState = l.state, d && dp(i, s, !0), i.child;
  }
  function uh(t) {
    var i = t.stateNode;
    i.pendingContext ? cp(t, i.pendingContext, i.pendingContext !== i.context) : i.context && cp(t, i.context, !1), Pu(t, i.containerInfo);
  }
  function ch(t, i, s, l, d) {
    return gi(), _u(d), i.flags |= 256, Rt(t, i, s, l), i.child;
  }
  var Wu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function fh(t, i, s) {
    var l = i.pendingProps, d = Xe.current, h = !1, w = (i.flags & 128) !== 0, E;
    if ((E = w) || (E = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0), E ? (h = !0, i.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), Ue(Xe, d & 1), t === null)
      return xu(i), t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (i.mode & 1 ? t.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (w = l.children, t = l.fallback, h ? (l = i.mode, h = i.child, w = { mode: "hidden", children: w }, !(l & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = w) : h = xa(w, l, 0, null), t = Kr(t, l, s, null), h.return = i, t.return = i, h.sibling = t, i.child = h, i.child.memoizedState = qu(s), i.memoizedState = Wu, t) : Gu(i, w));
    if (d = t.memoizedState, d !== null && (E = d.dehydrated, E !== null))
      return sx(t, i, w, l, E, d, s);
    if (h) {
      h = l.fallback, w = i.mode, d = t.child, E = d.sibling;
      var P = { mode: "hidden", children: l.children };
      return !(w & 1) && i.child !== d ? (l = i.child, l.childLanes = 0, l.pendingProps = P, i.deletions = null) : (l = Sr(d, P), l.subtreeFlags = d.subtreeFlags & 14680064), E !== null ? h = Sr(E, h) : (h = Kr(h, w, s, null), h.flags |= 2), h.return = i, l.return = i, l.sibling = h, i.child = l, l = h, h = i.child, w = t.child.memoizedState, w = w === null ? qu(s) : { baseLanes: w.baseLanes | s, cachePool: null, transitions: w.transitions }, h.memoizedState = w, h.childLanes = t.childLanes & ~s, i.memoizedState = Wu, l;
    }
    return h = t.child, t = h.sibling, l = Sr(h, { mode: "visible", children: l.children }), !(i.mode & 1) && (l.lanes = s), l.return = i, l.sibling = null, t !== null && (s = i.deletions, s === null ? (i.deletions = [t], i.flags |= 16) : s.push(t)), i.child = l, i.memoizedState = null, l;
  }
  function Gu(t, i) {
    return i = xa({ mode: "visible", children: i }, t.mode, 0, null), i.return = t, t.child = i;
  }
  function sa(t, i, s, l) {
    return l !== null && _u(l), xi(i, t.child, null, s), t = Gu(i, i.pendingProps.children), t.flags |= 2, i.memoizedState = null, t;
  }
  function sx(t, i, s, l, d, h, w) {
    if (s)
      return i.flags & 256 ? (i.flags &= -257, l = zu(Error(r(422))), sa(t, i, w, l)) : i.memoizedState !== null ? (i.child = t.child, i.flags |= 128, null) : (h = l.fallback, d = i.mode, l = xa({ mode: "visible", children: l.children }, d, 0, null), h = Kr(h, d, w, null), h.flags |= 2, l.return = i, h.return = i, l.sibling = h, i.child = l, i.mode & 1 && xi(i, t.child, null, w), i.child.memoizedState = qu(w), i.memoizedState = Wu, h);
    if (!(i.mode & 1))
      return sa(t, i, w, null);
    if (d.data === "$!") {
      if (l = d.nextSibling && d.nextSibling.dataset, l)
        var E = l.dgst;
      return l = E, h = Error(r(419)), l = zu(h, l, void 0), sa(t, i, w, l);
    }
    if (E = (w & t.childLanes) !== 0, It || E) {
      if (l = mt, l !== null) {
        switch (w & -w) {
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
        d = d & (l.suspendedLanes | w) ? 0 : d, d !== 0 && d !== h.retryLane && (h.retryLane = d, qn(t, d), hn(l, t, d, -1));
      }
      return uc(), l = zu(Error(r(421))), sa(t, i, w, l);
    }
    return d.data === "$?" ? (i.flags |= 128, i.child = t.child, i = xx.bind(null, t), d._reactRetry = i, null) : (t = h.treeContext, qt = fr(d.nextSibling), Wt = i, qe = !0, cn = null, t !== null && (Xt[Yt++] = Hn, Xt[Yt++] = Wn, Xt[Yt++] = jr, Hn = t.id, Wn = t.overflow, jr = i), i = Gu(i, l.children), i.flags |= 4096, i);
  }
  function dh(t, i, s) {
    t.lanes |= i;
    var l = t.alternate;
    l !== null && (l.lanes |= i), Tu(t.return, i, s);
  }
  function Ku(t, i, s, l, d) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: l, tail: s, tailMode: d } : (h.isBackwards = i, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = s, h.tailMode = d);
  }
  function ph(t, i, s) {
    var l = i.pendingProps, d = l.revealOrder, h = l.tail;
    if (Rt(t, i, l.children, s), l = Xe.current, l & 2)
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
    if (Ue(Xe, l), !(i.mode & 1))
      i.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (s = i.child, d = null; s !== null; )
            t = s.alternate, t !== null && ea(t) === null && (d = s), s = s.sibling;
          s = d, s === null ? (d = i.child, i.child = null) : (d = s.sibling, s.sibling = null), Ku(i, !1, d, s, h);
          break;
        case "backwards":
          for (s = null, d = i.child, i.child = null; d !== null; ) {
            if (t = d.alternate, t !== null && ea(t) === null) {
              i.child = d;
              break;
            }
            t = d.sibling, d.sibling = s, s = d, d = t;
          }
          Ku(i, !0, s, null, h);
          break;
        case "together":
          Ku(i, !1, null, null, void 0);
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
  function ax(t, i, s) {
    switch (i.tag) {
      case 3:
        uh(i), gi();
        break;
      case 5:
        Rp(i);
        break;
      case 1:
        Ft(i.type) && $s(i);
        break;
      case 4:
        Pu(i, i.stateNode.containerInfo);
        break;
      case 10:
        var l = i.type._context, d = i.memoizedProps.value;
        Ue(Ks, l._currentValue), l._currentValue = d;
        break;
      case 13:
        if (l = i.memoizedState, l !== null)
          return l.dehydrated !== null ? (Ue(Xe, Xe.current & 1), i.flags |= 128, null) : s & i.child.childLanes ? fh(t, i, s) : (Ue(Xe, Xe.current & 1), t = Kn(t, i, s), t !== null ? t.sibling : null);
        Ue(Xe, Xe.current & 1);
        break;
      case 19:
        if (l = (s & i.childLanes) !== 0, t.flags & 128) {
          if (l)
            return ph(t, i, s);
          i.flags |= 128;
        }
        if (d = i.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ue(Xe, Xe.current), l)
          break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, sh(t, i, s);
    }
    return Kn(t, i, s);
  }
  var hh, Qu, mh, gh;
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
  }, Qu = function() {
  }, mh = function(t, i, s, l) {
    var d = t.memoizedProps;
    if (d !== l) {
      t = i.stateNode, Ur(En.current);
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
      var w;
      s = null;
      for (F in d)
        if (!l.hasOwnProperty(F) && d.hasOwnProperty(F) && d[F] != null)
          if (F === "style") {
            var E = d[F];
            for (w in E)
              E.hasOwnProperty(w) && (s || (s = {}), s[w] = "");
          } else
            F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (a.hasOwnProperty(F) ? h || (h = []) : (h = h || []).push(F, null));
      for (F in l) {
        var P = l[F];
        if (E = d != null ? d[F] : void 0, l.hasOwnProperty(F) && P !== E && (P != null || E != null))
          if (F === "style")
            if (E) {
              for (w in E)
                !E.hasOwnProperty(w) || P && P.hasOwnProperty(w) || (s || (s = {}), s[w] = "");
              for (w in P)
                P.hasOwnProperty(w) && E[w] !== P[w] && (s || (s = {}), s[w] = P[w]);
            } else
              s || (h || (h = []), h.push(
                F,
                s
              )), s = P;
          else
            F === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, E = E ? E.__html : void 0, P != null && E !== P && (h = h || []).push(F, P)) : F === "children" ? typeof P != "string" && typeof P != "number" || (h = h || []).push(F, "" + P) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (a.hasOwnProperty(F) ? (P != null && F === "onScroll" && He("scroll", t), h || E === P || (h = [])) : (h = h || []).push(F, P));
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
  function At(t) {
    var i = t.alternate !== null && t.alternate.child === t.child, s = 0, l = 0;
    if (i)
      for (var d = t.child; d !== null; )
        s |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = t, d = d.sibling;
    else
      for (d = t.child; d !== null; )
        s |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = t, d = d.sibling;
    return t.subtreeFlags |= l, t.childLanes = s, i;
  }
  function lx(t, i, s) {
    var l = i.pendingProps;
    switch (yu(i), i.tag) {
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
        return At(i), null;
      case 1:
        return Ft(i.type) && Us(), At(i), null;
      case 3:
        return l = i.stateNode, _i(), We(Nt), We(Et), Lu(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Gs(i) ? i.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, cn !== null && (sc(cn), cn = null))), Qu(t, i), At(i), null;
      case 5:
        Ru(i);
        var d = Ur(Co.current);
        if (s = i.type, t !== null && i.stateNode != null)
          mh(t, i, s, l, d), t.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!l) {
            if (i.stateNode === null)
              throw Error(r(166));
            return At(i), null;
          }
          if (t = Ur(En.current), Gs(i)) {
            l = i.stateNode, s = i.type;
            var h = i.memoizedProps;
            switch (l[Tn] = i, l[wo] = h, t = (i.mode & 1) !== 0, s) {
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
                Xi(l, h), He("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!h.multiple }, He("invalid", l);
                break;
              case "textarea":
                Ve(l, h), He("invalid", l);
            }
            Be(s, h), d = null;
            for (var w in h)
              if (h.hasOwnProperty(w)) {
                var E = h[w];
                w === "children" ? typeof E == "string" ? l.textContent !== E && (h.suppressHydrationWarning !== !0 && js(l.textContent, E, t), d = ["children", E]) : typeof E == "number" && l.textContent !== "" + E && (h.suppressHydrationWarning !== !0 && js(
                  l.textContent,
                  E,
                  t
                ), d = ["children", "" + E]) : a.hasOwnProperty(w) && E != null && w === "onScroll" && He("scroll", l);
              }
            switch (s) {
              case "input":
                lt(l), z(l, h, !0);
                break;
              case "textarea":
                lt(l), Mt(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (l.onclick = Bs);
            }
            l = d, i.updateQueue = l, l !== null && (i.flags |= 4);
          } else {
            w = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = ni(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = w.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = w.createElement(s, { is: l.is }) : (t = w.createElement(s), s === "select" && (w = t, l.multiple ? w.multiple = !0 : l.size && (w.size = l.size))) : t = w.createElementNS(t, s), t[Tn] = i, t[wo] = l, hh(t, i, !1, !1), i.stateNode = t;
            e: {
              switch (w = yt(s, l), s) {
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
                  Xi(t, l), d = ti(t, l), He("invalid", t);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!l.multiple }, d = b({}, l, { value: void 0 }), He("invalid", t);
                  break;
                case "textarea":
                  Ve(t, l), d = de(t, l), He("invalid", t);
                  break;
                default:
                  d = l;
              }
              Be(s, d), E = d;
              for (h in E)
                if (E.hasOwnProperty(h)) {
                  var P = E[h];
                  h === "style" ? W(t, P) : h === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && ri(t, P)) : h === "children" ? typeof P == "string" ? (s !== "textarea" || P !== "") && Sn(t, P) : typeof P == "number" && Sn(t, "" + P) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (a.hasOwnProperty(h) ? P != null && h === "onScroll" && He("scroll", t) : P != null && L(t, h, P, w));
                }
              switch (s) {
                case "input":
                  lt(t), z(t, l, !1);
                  break;
                case "textarea":
                  lt(t), Mt(t);
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
        return At(i), null;
      case 6:
        if (t && i.stateNode != null)
          gh(t, i, t.memoizedProps, l);
        else {
          if (typeof l != "string" && i.stateNode === null)
            throw Error(r(166));
          if (s = Ur(Co.current), Ur(En.current), Gs(i)) {
            if (l = i.stateNode, s = i.memoizedProps, l[Tn] = i, (h = l.nodeValue !== s) && (t = Wt, t !== null))
              switch (t.tag) {
                case 3:
                  js(l.nodeValue, s, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 && js(l.nodeValue, s, (t.mode & 1) !== 0);
              }
            h && (i.flags |= 4);
          } else
            l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[Tn] = i, i.stateNode = l;
        }
        return At(i), null;
      case 13:
        if (We(Xe), l = i.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
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
            At(i), h = !1;
          } else
            cn !== null && (sc(cn), cn = null), h = !0;
          if (!h)
            return i.flags & 65536 ? i : null;
        }
        return i.flags & 128 ? (i.lanes = s, i) : (l = l !== null, l !== (t !== null && t.memoizedState !== null) && l && (i.child.flags |= 8192, i.mode & 1 && (t === null || Xe.current & 1 ? ct === 0 && (ct = 3) : uc())), i.updateQueue !== null && (i.flags |= 4), At(i), null);
      case 4:
        return _i(), Qu(t, i), t === null && xo(i.stateNode.containerInfo), At(i), null;
      case 10:
        return ku(i.type._context), At(i), null;
      case 17:
        return Ft(i.type) && Us(), At(i), null;
      case 19:
        if (We(Xe), h = i.memoizedState, h === null)
          return At(i), null;
        if (l = (i.flags & 128) !== 0, w = h.rendering, w === null)
          if (l)
            Oo(h, !1);
          else {
            if (ct !== 0 || t !== null && t.flags & 128)
              for (t = i.child; t !== null; ) {
                if (w = ea(t), w !== null) {
                  for (i.flags |= 128, Oo(h, !1), l = w.updateQueue, l !== null && (i.updateQueue = l, i.flags |= 4), i.subtreeFlags = 0, l = s, s = i.child; s !== null; )
                    h = s, t = l, h.flags &= 14680066, w = h.alternate, w === null ? (h.childLanes = 0, h.lanes = t, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = w.childLanes, h.lanes = w.lanes, h.child = w.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = w.memoizedProps, h.memoizedState = w.memoizedState, h.updateQueue = w.updateQueue, h.type = w.type, t = w.dependencies, h.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), s = s.sibling;
                  return Ue(Xe, Xe.current & 1 | 2), i.child;
                }
                t = t.sibling;
              }
            h.tail !== null && tt() > Ti && (i.flags |= 128, l = !0, Oo(h, !1), i.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = ea(w), t !== null) {
              if (i.flags |= 128, l = !0, s = t.updateQueue, s !== null && (i.updateQueue = s, i.flags |= 4), Oo(h, !0), h.tail === null && h.tailMode === "hidden" && !w.alternate && !qe)
                return At(i), null;
            } else
              2 * tt() - h.renderingStartTime > Ti && s !== 1073741824 && (i.flags |= 128, l = !0, Oo(h, !1), i.lanes = 4194304);
          h.isBackwards ? (w.sibling = i.child, i.child = w) : (s = h.last, s !== null ? s.sibling = w : i.child = w, h.last = w);
        }
        return h.tail !== null ? (i = h.tail, h.rendering = i, h.tail = i.sibling, h.renderingStartTime = tt(), i.sibling = null, s = Xe.current, Ue(Xe, l ? s & 1 | 2 : s & 1), i) : (At(i), null);
      case 22:
      case 23:
        return lc(), l = i.memoizedState !== null, t !== null && t.memoizedState !== null !== l && (i.flags |= 8192), l && i.mode & 1 ? Gt & 1073741824 && (At(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : At(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function ux(t, i) {
    switch (yu(i), i.tag) {
      case 1:
        return Ft(i.type) && Us(), t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 3:
        return _i(), We(Nt), We(Et), Lu(), t = i.flags, t & 65536 && !(t & 128) ? (i.flags = t & -65537 | 128, i) : null;
      case 5:
        return Ru(i), null;
      case 13:
        if (We(Xe), t = i.memoizedState, t !== null && t.dehydrated !== null) {
          if (i.alternate === null)
            throw Error(r(340));
          gi();
        }
        return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 19:
        return We(Xe), null;
      case 4:
        return _i(), null;
      case 10:
        return ku(i.type._context), null;
      case 22:
      case 23:
        return lc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var la = !1, bt = !1, cx = typeof WeakSet == "function" ? WeakSet : Set, re = null;
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
  function fx(t, i) {
    if (lu = bs, t = Kd(), eu(t)) {
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
            var w = 0, E = -1, P = -1, F = 0, $ = 0, q = t, U = null;
            t:
              for (; ; ) {
                for (var ee; q !== s || d !== 0 && q.nodeType !== 3 || (E = w + d), q !== h || l !== 0 && q.nodeType !== 3 || (P = w + l), q.nodeType === 3 && (w += q.nodeValue.length), (ee = q.firstChild) !== null; )
                  U = q, q = ee;
                for (; ; ) {
                  if (q === t)
                    break t;
                  if (U === s && ++F === d && (E = w), U === h && ++$ === l && (P = w), (ee = q.nextSibling) !== null)
                    break;
                  q = U, U = q.parentNode;
                }
                q = ee;
              }
            s = E === -1 || P === -1 ? null : { start: E, end: P };
          } else
            s = null;
        }
      s = s || { start: 0, end: 0 };
    } else
      s = null;
    for (uu = { focusedElem: t, selectionRange: s }, bs = !1, re = i; re !== null; )
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
                    var se = oe.memoizedProps, nt = oe.memoizedState, D = i.stateNode, R = D.getSnapshotBeforeUpdate(i.elementType === i.type ? se : fn(i.type, se), nt);
                    D.__reactInternalSnapshotBeforeUpdate = R;
                  }
                  break;
                case 3:
                  var M = i.stateNode.containerInfo;
                  M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
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
  function Yu(t) {
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
    i !== null && (t.alternate = null, vh(i)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (i = t.stateNode, i !== null && (delete i[Tn], delete i[wo], delete i[pu], delete i[G1], delete i[K1])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function xh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function _h(t) {
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
  function Ju(t, i, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, i ? s.insertBefore(t, i) : s.appendChild(t);
    else if (l !== 4 && (t = t.child, t !== null))
      for (Ju(t, i, s), t = t.sibling; t !== null; )
        Ju(t, i, s), t = t.sibling;
  }
  var vt = null, dn = !1;
  function yr(t, i, s) {
    for (s = s.child; s !== null; )
      wh(t, i, s), s = s.sibling;
  }
  function wh(t, i, s) {
    if (kn && typeof kn.onCommitFiberUnmount == "function")
      try {
        kn.onCommitFiberUnmount(Ss, s);
      } catch {
      }
    switch (s.tag) {
      case 5:
        bt || Si(s, i);
      case 6:
        var l = vt, d = dn;
        vt = null, yr(t, i, s), vt = l, dn = d, vt !== null && (dn ? (t = vt, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : vt.removeChild(s.stateNode));
        break;
      case 18:
        vt !== null && (dn ? (t = vt, s = s.stateNode, t.nodeType === 8 ? du(t.parentNode, s) : t.nodeType === 1 && du(t, s), uo(t)) : du(vt, s.stateNode));
        break;
      case 4:
        l = vt, d = dn, vt = s.stateNode.containerInfo, dn = !0, yr(t, i, s), vt = l, dn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!bt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          d = l = l.next;
          do {
            var h = d, w = h.destroy;
            h = h.tag, w !== void 0 && (h & 2 || h & 4) && Xu(s, i, w), d = d.next;
          } while (d !== l);
        }
        yr(t, i, s);
        break;
      case 1:
        if (!bt && (Si(s, i), l = s.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount();
          } catch (E) {
            et(s, i, E);
          }
        yr(t, i, s);
        break;
      case 21:
        yr(t, i, s);
        break;
      case 22:
        s.mode & 1 ? (bt = (l = bt) || s.memoizedState !== null, yr(t, i, s), bt = l) : yr(t, i, s);
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
      s === null && (s = t.stateNode = new cx()), i.forEach(function(l) {
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
          var h = t, w = i, E = w;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  vt = E.stateNode, dn = !1;
                  break e;
                case 3:
                  vt = E.stateNode.containerInfo, dn = !0;
                  break e;
                case 4:
                  vt = E.stateNode.containerInfo, dn = !0;
                  break e;
              }
              E = E.return;
            }
          if (vt === null)
            throw Error(r(160));
          wh(h, w, d), vt = null, dn = !1;
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
          var h = t.memoizedProps, w = s !== null ? s.memoizedProps : h, E = t.type, P = t.updateQueue;
          if (t.updateQueue = null, P !== null)
            try {
              E === "input" && h.type === "radio" && h.name != null && O(d, h), yt(E, w);
              var F = yt(E, h);
              for (w = 0; w < P.length; w += 2) {
                var $ = P[w], q = P[w + 1];
                $ === "style" ? W(d, q) : $ === "dangerouslySetInnerHTML" ? ri(d, q) : $ === "children" ? Sn(d, q) : L(d, $, q, F);
              }
              switch (E) {
                case "input":
                  V(d, h);
                  break;
                case "textarea":
                  ze(d, h);
                  break;
                case "select":
                  var U = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!h.multiple;
                  var ee = h.value;
                  ee != null ? G(d, !!h.multiple, ee, !1) : U !== !!h.multiple && (h.defaultValue != null ? G(
                    d,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : G(d, !!h.multiple, h.multiple ? [] : "", !1));
              }
              d[wo] = h;
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
        pn(i, t), An(t), d = t.child, d.flags & 8192 && (h = d.memoizedState !== null, d.stateNode.isHidden = h, !h || d.alternate !== null && d.alternate.memoizedState !== null || (nc = tt())), l & 4 && Sh(t);
        break;
      case 22:
        if ($ = s !== null && s.memoizedState !== null, t.mode & 1 ? (bt = (F = bt) || $, pn(i, t), bt = F) : pn(i, t), An(t), l & 8192) {
          if (F = t.memoizedState !== null, (t.stateNode.isHidden = F) && !$ && t.mode & 1)
            for (re = t, $ = t.child; $ !== null; ) {
              for (q = re = $; re !== null; ) {
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
                      Ch(q);
                      continue;
                    }
                }
                ee !== null ? (ee.return = U, re = ee) : Ch(q);
              }
              $ = $.sibling;
            }
          e:
            for ($ = null, q = t; ; ) {
              if (q.tag === 5) {
                if ($ === null) {
                  $ = q;
                  try {
                    d = q.stateNode, F ? (h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (E = q.stateNode, P = q.memoizedProps.style, w = P != null && P.hasOwnProperty("display") ? P.display : null, E.style.display = ys("display", w));
                  } catch (se) {
                    et(t, t.return, se);
                  }
                }
              } else if (q.tag === 6) {
                if ($ === null)
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
                $ === q && ($ = null), q = q.return;
              }
              $ === q && ($ = null), q.sibling.return = q.return, q = q.sibling;
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
            var h = _h(t);
            Ju(t, h, d);
            break;
          case 3:
          case 4:
            var w = l.stateNode.containerInfo, E = _h(t);
            Zu(t, E, w);
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
  function dx(t, i, s) {
    re = t, Th(t);
  }
  function Th(t, i, s) {
    for (var l = (t.mode & 1) !== 0; re !== null; ) {
      var d = re, h = d.child;
      if (d.tag === 22 && l) {
        var w = d.memoizedState !== null || la;
        if (!w) {
          var E = d.alternate, P = E !== null && E.memoizedState !== null || bt;
          E = la;
          var F = bt;
          if (la = w, (bt = P) && !F)
            for (re = d; re !== null; )
              w = re, P = w.child, w.tag === 22 && w.memoizedState !== null ? Ah(d) : P !== null ? (P.return = w, re = P) : Ah(d);
          for (; h !== null; )
            re = h, Th(h), h = h.sibling;
          re = d, la = E, bt = F;
        }
        Eh(t);
      } else
        d.subtreeFlags & 8772 && h !== null ? (h.return = d, re = h) : Eh(t);
    }
  }
  function Eh(t) {
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
                bt || ua(5, i);
                break;
              case 1:
                var l = i.stateNode;
                if (i.flags & 4 && !bt)
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
                var w = i.updateQueue;
                if (w !== null) {
                  if (s = null, i.child !== null)
                    switch (i.child.tag) {
                      case 5:
                        s = i.child.stateNode;
                        break;
                      case 1:
                        s = i.child.stateNode;
                    }
                  Sp(i, w, s);
                }
                break;
              case 5:
                var E = i.stateNode;
                if (s === null && i.flags & 4) {
                  s = E;
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
                    var $ = F.memoizedState;
                    if ($ !== null) {
                      var q = $.dehydrated;
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
          bt || i.flags & 512 && Yu(i);
        } catch (U) {
          et(i, i.return, U);
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
  function Ch(t) {
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
              Yu(i);
            } catch (P) {
              et(i, h, P);
            }
            break;
          case 5:
            var w = i.return;
            try {
              Yu(i);
            } catch (P) {
              et(i, w, P);
            }
        }
      } catch (P) {
        et(i, i.return, P);
      }
      if (i === t) {
        re = null;
        break;
      }
      var E = i.sibling;
      if (E !== null) {
        E.return = i.return, re = E;
        break;
      }
      re = i.return;
    }
  }
  var px = Math.ceil, ca = j.ReactCurrentDispatcher, ec = j.ReactCurrentOwner, en = j.ReactCurrentBatchConfig, De = 0, mt = null, rt = null, xt = 0, Gt = 0, ki = dr(0), ct = 0, Do = null, Hr = 0, fa = 0, tc = 0, Mo = null, Vt = null, nc = 0, Ti = 1 / 0, Qn = null, da = !1, rc = null, vr = null, pa = !1, xr = null, ha = 0, No = 0, ic = null, ma = -1, ga = 0;
  function Ot() {
    return De & 6 ? tt() : ma !== -1 ? ma : ma = tt();
  }
  function _r(t) {
    return t.mode & 1 ? De & 2 && xt !== 0 ? xt & -xt : X1.transition !== null ? (ga === 0 && (ga = xd()), ga) : (t = je, t !== 0 || (t = window.event, t = t === void 0 ? 16 : bd(t.type)), t) : 1;
  }
  function hn(t, i, s, l) {
    if (50 < No)
      throw No = 0, ic = null, Error(r(185));
    io(t, s, l), (!(De & 2) || t !== mt) && (t === mt && (!(De & 2) && (fa |= s), ct === 4 && wr(t, xt)), jt(t, l), s === 1 && De === 0 && !(i.mode & 1) && (Ti = tt() + 500, Hs && hr()));
  }
  function jt(t, i) {
    var s = t.callbackNode;
    Xv(t, i);
    var l = Es(t, t === mt ? xt : 0);
    if (l === 0)
      s !== null && gd(s), t.callbackNode = null, t.callbackPriority = 0;
    else if (i = l & -l, t.callbackPriority !== i) {
      if (s != null && gd(s), i === 1)
        t.tag === 0 ? Q1(Ph.bind(null, t)) : pp(Ph.bind(null, t)), W1(function() {
          !(De & 6) && hr();
        }), s = null;
      else {
        switch (_d(l)) {
          case 1:
            s = Il;
            break;
          case 4:
            s = yd;
            break;
          case 16:
            s = ws;
            break;
          case 536870912:
            s = vd;
            break;
          default:
            s = ws;
        }
        s = Ih(s, bh.bind(null, t));
      }
      t.callbackPriority = i, t.callbackNode = s;
    }
  }
  function bh(t, i) {
    if (ma = -1, ga = 0, De & 6)
      throw Error(r(327));
    var s = t.callbackNode;
    if (Ei() && t.callbackNode !== s)
      return null;
    var l = Es(t, t === mt ? xt : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & t.expiredLanes || i)
      i = ya(t, l);
    else {
      i = l;
      var d = De;
      De |= 2;
      var h = Oh();
      (mt !== t || xt !== i) && (Qn = null, Ti = tt() + 500, qr(t, i));
      do
        try {
          gx();
          break;
        } catch (E) {
          Rh(t, E);
        }
      while (1);
      Su(), ca.current = h, De = d, rt !== null ? i = 0 : (mt = null, xt = 0, i = ct);
    }
    if (i !== 0) {
      if (i === 2 && (d = Vl(t), d !== 0 && (l = d, i = oc(t, d))), i === 1)
        throw s = Do, qr(t, 0), wr(t, l), jt(t, tt()), s;
      if (i === 6)
        wr(t, l);
      else {
        if (d = t.current.alternate, !(l & 30) && !hx(d) && (i = ya(t, l), i === 2 && (h = Vl(t), h !== 0 && (l = h, i = oc(t, h))), i === 1))
          throw s = Do, qr(t, 0), wr(t, l), jt(t, tt()), s;
        switch (t.finishedWork = d, t.finishedLanes = l, i) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Gr(t, Vt, Qn);
            break;
          case 3:
            if (wr(t, l), (l & 130023424) === l && (i = nc + 500 - tt(), 10 < i)) {
              if (Es(t, 0) !== 0)
                break;
              if (d = t.suspendedLanes, (d & l) !== l) {
                Ot(), t.pingedLanes |= t.suspendedLanes & d;
                break;
              }
              t.timeoutHandle = fu(Gr.bind(null, t, Vt, Qn), i);
              break;
            }
            Gr(t, Vt, Qn);
            break;
          case 4:
            if (wr(t, l), (l & 4194240) === l)
              break;
            for (i = t.eventTimes, d = -1; 0 < l; ) {
              var w = 31 - ln(l);
              h = 1 << w, w = i[w], w > d && (d = w), l &= ~h;
            }
            if (l = d, l = tt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * px(l / 1960)) - l, 10 < l) {
              t.timeoutHandle = fu(Gr.bind(null, t, Vt, Qn), l);
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
    return jt(t, tt()), t.callbackNode === s ? bh.bind(null, t) : null;
  }
  function oc(t, i) {
    var s = Mo;
    return t.current.memoizedState.isDehydrated && (qr(t, i).flags |= 256), t = ya(t, i), t !== 2 && (i = Vt, Vt = s, i !== null && sc(i)), t;
  }
  function sc(t) {
    Vt === null ? Vt = t : Vt.push.apply(Vt, t);
  }
  function hx(t) {
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
  function wr(t, i) {
    for (i &= ~tc, i &= ~fa, t.suspendedLanes |= i, t.pingedLanes &= ~i, t = t.expirationTimes; 0 < i; ) {
      var s = 31 - ln(i), l = 1 << s;
      t[s] = -1, i &= ~l;
    }
  }
  function Ph(t) {
    if (De & 6)
      throw Error(r(327));
    Ei();
    var i = Es(t, 0);
    if (!(i & 1))
      return jt(t, tt()), null;
    var s = ya(t, i);
    if (t.tag !== 0 && s === 2) {
      var l = Vl(t);
      l !== 0 && (i = l, s = oc(t, l));
    }
    if (s === 1)
      throw s = Do, qr(t, 0), wr(t, i), jt(t, tt()), s;
    if (s === 6)
      throw Error(r(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = i, Gr(t, Vt, Qn), jt(t, tt()), null;
  }
  function ac(t, i) {
    var s = De;
    De |= 1;
    try {
      return t(i);
    } finally {
      De = s, De === 0 && (Ti = tt() + 500, Hs && hr());
    }
  }
  function Wr(t) {
    xr !== null && xr.tag === 0 && !(De & 6) && Ei();
    var i = De;
    De |= 1;
    var s = en.transition, l = je;
    try {
      if (en.transition = null, je = 1, t)
        return t();
    } finally {
      je = l, en.transition = s, De = i, !(De & 6) && hr();
    }
  }
  function lc() {
    Gt = ki.current, We(ki);
  }
  function qr(t, i) {
    t.finishedWork = null, t.finishedLanes = 0;
    var s = t.timeoutHandle;
    if (s !== -1 && (t.timeoutHandle = -1, H1(s)), rt !== null)
      for (s = rt.return; s !== null; ) {
        var l = s;
        switch (yu(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && Us();
            break;
          case 3:
            _i(), We(Nt), We(Et), Lu();
            break;
          case 5:
            Ru(l);
            break;
          case 4:
            _i();
            break;
          case 13:
            We(Xe);
            break;
          case 19:
            We(Xe);
            break;
          case 10:
            ku(l.type._context);
            break;
          case 22:
          case 23:
            lc();
        }
        s = s.return;
      }
    if (mt = t, rt = t = Sr(t.current, null), xt = Gt = i, ct = 0, Do = null, tc = fa = Hr = 0, Vt = Mo = null, zr !== null) {
      for (i = 0; i < zr.length; i++)
        if (s = zr[i], l = s.interleaved, l !== null) {
          s.interleaved = null;
          var d = l.next, h = s.pending;
          if (h !== null) {
            var w = h.next;
            h.next = d, l.next = w;
          }
          s.pending = l;
        }
      zr = null;
    }
    return t;
  }
  function Rh(t, i) {
    do {
      var s = rt;
      try {
        if (Su(), ta.current = oa, na) {
          for (var l = Ye.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), l = l.next;
          }
          na = !1;
        }
        if ($r = 0, ht = ut = Ye = null, Ao = !1, bo = 0, ec.current = null, s === null || s.return === null) {
          ct = 1, Do = i, rt = null;
          break;
        }
        e: {
          var h = t, w = s.return, E = s, P = i;
          if (i = xt, E.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var F = P, $ = E, q = $.tag;
            if (!($.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var U = $.alternate;
              U ? ($.updateQueue = U.updateQueue, $.memoizedState = U.memoizedState, $.lanes = U.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var ee = th(w);
            if (ee !== null) {
              ee.flags &= -257, nh(ee, w, E, h, i), ee.mode & 1 && eh(h, F, i), i = ee, P = F;
              var oe = i.updateQueue;
              if (oe === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(P), i.updateQueue = se;
              } else
                oe.add(P);
              break e;
            } else {
              if (!(i & 1)) {
                eh(h, F, i), uc();
                break e;
              }
              P = Error(r(426));
            }
          } else if (qe && E.mode & 1) {
            var nt = th(w);
            if (nt !== null) {
              !(nt.flags & 65536) && (nt.flags |= 256), nh(nt, w, E, h, i), _u(wi(P, E));
              break e;
            }
          }
          h = P = wi(P, E), ct !== 4 && (ct = 2), Mo === null ? Mo = [h] : Mo.push(h), h = w;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, i &= -i, h.lanes |= i;
                var D = Zp(h, P, i);
                wp(h, D);
                break e;
              case 1:
                E = P;
                var R = h.type, M = h.stateNode;
                if (!(h.flags & 128) && (typeof R.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (vr === null || !vr.has(M)))) {
                  h.flags |= 65536, i &= -i, h.lanes |= i;
                  var Q = Jp(h, E, i);
                  wp(h, Q);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Dh(s);
      } catch (ce) {
        i = ce, rt === s && s !== null && (rt = s = s.return);
        continue;
      }
      break;
    } while (1);
  }
  function Oh() {
    var t = ca.current;
    return ca.current = oa, t === null ? oa : t;
  }
  function uc() {
    (ct === 0 || ct === 3 || ct === 2) && (ct = 4), mt === null || !(Hr & 268435455) && !(fa & 268435455) || wr(mt, xt);
  }
  function ya(t, i) {
    var s = De;
    De |= 2;
    var l = Oh();
    (mt !== t || xt !== i) && (Qn = null, qr(t, i));
    do
      try {
        mx();
        break;
      } catch (d) {
        Rh(t, d);
      }
    while (1);
    if (Su(), De = s, ca.current = l, rt !== null)
      throw Error(r(261));
    return mt = null, xt = 0, ct;
  }
  function mx() {
    for (; rt !== null; )
      Lh(rt);
  }
  function gx() {
    for (; rt !== null && !zv(); )
      Lh(rt);
  }
  function Lh(t) {
    var i = Fh(t.alternate, t, Gt);
    t.memoizedProps = t.pendingProps, i === null ? Dh(t) : rt = i, ec.current = null;
  }
  function Dh(t) {
    var i = t;
    do {
      var s = i.alternate;
      if (t = i.return, i.flags & 32768) {
        if (s = ux(s, i), s !== null) {
          s.flags &= 32767, rt = s;
          return;
        }
        if (t !== null)
          t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          ct = 6, rt = null;
          return;
        }
      } else if (s = lx(s, i, Gt), s !== null) {
        rt = s;
        return;
      }
      if (i = i.sibling, i !== null) {
        rt = i;
        return;
      }
      rt = i = t;
    } while (i !== null);
    ct === 0 && (ct = 5);
  }
  function Gr(t, i, s) {
    var l = je, d = en.transition;
    try {
      en.transition = null, je = 1, yx(t, i, s, l);
    } finally {
      en.transition = d, je = l;
    }
    return null;
  }
  function yx(t, i, s, l) {
    do
      Ei();
    while (xr !== null);
    if (De & 6)
      throw Error(r(327));
    s = t.finishedWork;
    var d = t.finishedLanes;
    if (s === null)
      return null;
    if (t.finishedWork = null, t.finishedLanes = 0, s === t.current)
      throw Error(r(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var h = s.lanes | s.childLanes;
    if (Yv(t, h), t === mt && (rt = mt = null, xt = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || pa || (pa = !0, Ih(ws, function() {
      return Ei(), null;
    })), h = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || h) {
      h = en.transition, en.transition = null;
      var w = je;
      je = 1;
      var E = De;
      De |= 4, ec.current = null, fx(t, s), kh(s, t), I1(uu), bs = !!lu, uu = lu = null, t.current = s, dx(s), Uv(), De = E, je = w, en.transition = h;
    } else
      t.current = s;
    if (pa && (pa = !1, xr = t, ha = d), h = t.pendingLanes, h === 0 && (vr = null), Wv(s.stateNode), jt(t, tt()), i !== null)
      for (l = t.onRecoverableError, s = 0; s < i.length; s++)
        d = i[s], l(d.value, { componentStack: d.stack, digest: d.digest });
    if (da)
      throw da = !1, t = rc, rc = null, t;
    return ha & 1 && t.tag !== 0 && Ei(), h = t.pendingLanes, h & 1 ? t === ic ? No++ : (No = 0, ic = t) : No = 0, hr(), null;
  }
  function Ei() {
    if (xr !== null) {
      var t = _d(ha), i = en.transition, s = je;
      try {
        if (en.transition = null, je = 16 > t ? 16 : t, xr === null)
          var l = !1;
        else {
          if (t = xr, xr = null, ha = 0, De & 6)
            throw Error(r(331));
          var d = De;
          for (De |= 4, re = t.current; re !== null; ) {
            var h = re, w = h.child;
            if (re.flags & 16) {
              var E = h.deletions;
              if (E !== null) {
                for (var P = 0; P < E.length; P++) {
                  var F = E[P];
                  for (re = F; re !== null; ) {
                    var $ = re;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Lo(8, $, h);
                    }
                    var q = $.child;
                    if (q !== null)
                      q.return = $, re = q;
                    else
                      for (; re !== null; ) {
                        $ = re;
                        var U = $.sibling, ee = $.return;
                        if (vh($), $ === F) {
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
                var oe = h.alternate;
                if (oe !== null) {
                  var se = oe.child;
                  if (se !== null) {
                    oe.child = null;
                    do {
                      var nt = se.sibling;
                      se.sibling = null, se = nt;
                    } while (se !== null);
                  }
                }
                re = h;
              }
            }
            if (h.subtreeFlags & 2064 && w !== null)
              w.return = h, re = w;
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
                  var D = h.sibling;
                  if (D !== null) {
                    D.return = h.return, re = D;
                    break e;
                  }
                  re = h.return;
                }
          }
          var R = t.current;
          for (re = R; re !== null; ) {
            w = re;
            var M = w.child;
            if (w.subtreeFlags & 2064 && M !== null)
              M.return = w, re = M;
            else
              e:
                for (w = R; re !== null; ) {
                  if (E = re, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ua(9, E);
                      }
                    } catch (ce) {
                      et(E, E.return, ce);
                    }
                  if (E === w) {
                    re = null;
                    break e;
                  }
                  var Q = E.sibling;
                  if (Q !== null) {
                    Q.return = E.return, re = Q;
                    break e;
                  }
                  re = E.return;
                }
          }
          if (De = d, hr(), kn && typeof kn.onPostCommitFiberRoot == "function")
            try {
              kn.onPostCommitFiberRoot(Ss, t);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        je = s, en.transition = i;
      }
    }
    return !1;
  }
  function Mh(t, i, s) {
    i = wi(s, i), i = Zp(t, i, 1), t = gr(t, i, 1), i = Ot(), t !== null && (io(t, 1, i), jt(t, i));
  }
  function et(t, i, s) {
    if (t.tag === 3)
      Mh(t, t, s);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          Mh(i, t, s);
          break;
        } else if (i.tag === 1) {
          var l = i.stateNode;
          if (typeof i.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (vr === null || !vr.has(l))) {
            t = wi(s, t), t = Jp(i, t, 1), i = gr(i, t, 1), t = Ot(), i !== null && (io(i, 1, t), jt(i, t));
            break;
          }
        }
        i = i.return;
      }
  }
  function vx(t, i, s) {
    var l = t.pingCache;
    l !== null && l.delete(i), i = Ot(), t.pingedLanes |= t.suspendedLanes & s, mt === t && (xt & s) === s && (ct === 4 || ct === 3 && (xt & 130023424) === xt && 500 > tt() - nc ? qr(t, 0) : tc |= s), jt(t, i);
  }
  function Nh(t, i) {
    i === 0 && (t.mode & 1 ? (i = Ts, Ts <<= 1, !(Ts & 130023424) && (Ts = 4194304)) : i = 1);
    var s = Ot();
    t = qn(t, i), t !== null && (io(t, i, s), jt(t, s));
  }
  function xx(t) {
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
      if (t.memoizedProps !== i.pendingProps || Nt.current)
        It = !0;
      else {
        if (!(t.lanes & s) && !(i.flags & 128))
          return It = !1, ax(t, i, s);
        It = !!(t.flags & 131072);
      }
    else
      It = !1, qe && i.flags & 1048576 && hp(i, qs, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var l = i.type;
        aa(t, i), t = i.pendingProps;
        var d = pi(i, Et.current);
        vi(i, s), d = Nu(null, i, l, t, d, s);
        var h = Fu();
        return i.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Ft(l) ? (h = !0, $s(i)) : h = !1, i.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Cu(i), d.updater = Zs, i.stateNode = d, d._reactInternals = i, bu(i, l, t, s), i = Hu(null, i, l, !0, h, s)) : (i.tag = 0, qe && h && gu(i), Rt(null, i, d, s), i = i.child), i;
      case 16:
        l = i.elementType;
        e: {
          switch (aa(t, i), t = i.pendingProps, d = l._init, l = d(l._payload), i.type = l, d = i.tag = Sx(l), t = fn(l, t), d) {
            case 0:
              i = $u(null, i, l, t, s);
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
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), $u(t, i, l, d, s);
      case 1:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), lh(t, i, l, d, s);
      case 3:
        e: {
          if (uh(i), t === null)
            throw Error(r(387));
          l = i.pendingProps, h = i.memoizedState, d = h.element, _p(t, i), Ys(i, l, null, s);
          var w = i.memoizedState;
          if (l = w.element, h.isDehydrated)
            if (h = { element: l, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, i.updateQueue.baseState = h, i.memoizedState = h, i.flags & 256) {
              d = wi(Error(r(423)), i), i = ch(t, i, l, s, d);
              break e;
            } else if (l !== d) {
              d = wi(Error(r(424)), i), i = ch(t, i, l, s, d);
              break e;
            } else
              for (qt = fr(i.stateNode.containerInfo.firstChild), Wt = i, qe = !0, cn = null, s = Pp(i, null, l, s), i.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (gi(), l === d) {
              i = Kn(t, i, s);
              break e;
            }
            Rt(t, i, l, s);
          }
          i = i.child;
        }
        return i;
      case 5:
        return Rp(i), t === null && xu(i), l = i.type, d = i.pendingProps, h = t !== null ? t.memoizedProps : null, w = d.children, cu(l, d) ? w = null : h !== null && cu(l, h) && (i.flags |= 32), ah(t, i), Rt(t, i, w, s), i.child;
      case 6:
        return t === null && xu(i), null;
      case 13:
        return fh(t, i, s);
      case 4:
        return Pu(i, i.stateNode.containerInfo), l = i.pendingProps, t === null ? i.child = xi(i, null, l, s) : Rt(t, i, l, s), i.child;
      case 11:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), rh(t, i, l, d, s);
      case 7:
        return Rt(t, i, i.pendingProps, s), i.child;
      case 8:
        return Rt(t, i, i.pendingProps.children, s), i.child;
      case 12:
        return Rt(t, i, i.pendingProps.children, s), i.child;
      case 10:
        e: {
          if (l = i.type._context, d = i.pendingProps, h = i.memoizedProps, w = d.value, Ue(Ks, l._currentValue), l._currentValue = w, h !== null)
            if (un(h.value, w)) {
              if (h.children === d.children && !Nt.current) {
                i = Kn(t, i, s);
                break e;
              }
            } else
              for (h = i.child, h !== null && (h.return = i); h !== null; ) {
                var E = h.dependencies;
                if (E !== null) {
                  w = h.child;
                  for (var P = E.firstContext; P !== null; ) {
                    if (P.context === l) {
                      if (h.tag === 1) {
                        P = Gn(-1, s & -s), P.tag = 2;
                        var F = h.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var $ = F.pending;
                          $ === null ? P.next = P : (P.next = $.next, $.next = P), F.pending = P;
                        }
                      }
                      h.lanes |= s, P = h.alternate, P !== null && (P.lanes |= s), Tu(
                        h.return,
                        s,
                        i
                      ), E.lanes |= s;
                      break;
                    }
                    P = P.next;
                  }
                } else if (h.tag === 10)
                  w = h.type === i.type ? null : h.child;
                else if (h.tag === 18) {
                  if (w = h.return, w === null)
                    throw Error(r(341));
                  w.lanes |= s, E = w.alternate, E !== null && (E.lanes |= s), Tu(w, s, i), w = h.sibling;
                } else
                  w = h.child;
                if (w !== null)
                  w.return = h;
                else
                  for (w = h; w !== null; ) {
                    if (w === i) {
                      w = null;
                      break;
                    }
                    if (h = w.sibling, h !== null) {
                      h.return = w.return, w = h;
                      break;
                    }
                    w = w.return;
                  }
                h = w;
              }
          Rt(t, i, d.children, s), i = i.child;
        }
        return i;
      case 9:
        return d = i.type, l = i.pendingProps.children, vi(i, s), d = Zt(d), l = l(d), i.flags |= 1, Rt(t, i, l, s), i.child;
      case 14:
        return l = i.type, d = fn(l, i.pendingProps), d = fn(l.type, d), ih(t, i, l, d, s);
      case 15:
        return oh(t, i, i.type, i.pendingProps, s);
      case 17:
        return l = i.type, d = i.pendingProps, d = i.elementType === l ? d : fn(l, d), aa(t, i), i.tag = 1, Ft(l) ? (t = !0, $s(i)) : t = !1, vi(i, s), Ep(i, l, d), bu(i, l, d, s), Hu(null, i, l, !0, t, s);
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
  function wx(t, i, s, l) {
    this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(t, i, s, l) {
    return new wx(t, i, s, l);
  }
  function cc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Sx(t) {
    if (typeof t == "function")
      return cc(t) ? 1 : 0;
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
    var w = 2;
    if (l = t, typeof t == "function")
      cc(t) && (w = 1);
    else if (typeof t == "string")
      w = 5;
    else
      e:
        switch (t) {
          case K:
            return Kr(s.children, d, h, i);
          case te:
            w = 8, d |= 8;
            break;
          case J:
            return t = tn(12, s, i, d | 2), t.elementType = J, t.lanes = h, t;
          case le:
            return t = tn(13, s, i, d), t.elementType = le, t.lanes = h, t;
          case ae:
            return t = tn(19, s, i, d), t.elementType = ae, t.lanes = h, t;
          case Se:
            return xa(s, d, h, i);
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Ee:
                  w = 10;
                  break e;
                case Le:
                  w = 9;
                  break e;
                case pe:
                  w = 11;
                  break e;
                case ge:
                  w = 14;
                  break e;
                case Ce:
                  w = 16, l = null;
                  break e;
              }
            throw Error(r(130, t == null ? t : typeof t, ""));
        }
    return i = tn(w, s, i, d), i.elementType = t, i.type = l, i.lanes = h, i;
  }
  function Kr(t, i, s, l) {
    return t = tn(7, t, l, i), t.lanes = s, t;
  }
  function xa(t, i, s, l) {
    return t = tn(22, t, l, i), t.elementType = Se, t.lanes = s, t.stateNode = { isHidden: !1 }, t;
  }
  function fc(t, i, s) {
    return t = tn(6, t, null, i), t.lanes = s, t;
  }
  function dc(t, i, s) {
    return i = tn(4, t.children !== null ? t.children : [], t.key, i), i.lanes = s, i.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, i;
  }
  function kx(t, i, s, l, d) {
    this.tag = i, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jl(0), this.expirationTimes = jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jl(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function pc(t, i, s, l, d, h, w, E, P) {
    return t = new kx(t, i, s, E, P), i === 1 ? (i = 1, h === !0 && (i |= 8)) : i = 0, h = tn(3, null, null, i), t.current = h, h.stateNode = t, h.memoizedState = { element: l, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cu(h), t;
  }
  function Tx(t, i, s) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Z, key: l == null ? null : "" + l, children: t, containerInfo: i, implementation: s };
  }
  function Vh(t) {
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
            if (Ft(i.type)) {
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
      if (Ft(s))
        return fp(t, s, i);
    }
    return i;
  }
  function jh(t, i, s, l, d, h, w, E, P) {
    return t = pc(s, l, !0, t, d, h, w, E, P), t.context = Vh(null), s = t.current, l = Ot(), d = _r(s), h = Gn(l, d), h.callback = i ?? null, gr(s, h, d), t.current.lanes = d, io(t, d, l), jt(t, l), t;
  }
  function _a(t, i, s, l) {
    var d = i.current, h = Ot(), w = _r(d);
    return s = Vh(s), i.context === null ? i.context = s : i.pendingContext = s, i = Gn(h, w), i.payload = { element: t }, l = l === void 0 ? null : l, l !== null && (i.callback = l), t = gr(d, i, w), t !== null && (hn(t, d, w, h), Xs(t, d, w)), w;
  }
  function wa(t) {
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
  function hc(t, i) {
    Bh(t, i), (t = t.alternate) && Bh(t, i);
  }
  function Ex() {
    return null;
  }
  var zh = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function mc(t) {
    this._internalRoot = t;
  }
  Sa.prototype.render = mc.prototype.render = function(t) {
    var i = this._internalRoot;
    if (i === null)
      throw Error(r(409));
    _a(t, i, null, null);
  }, Sa.prototype.unmount = mc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var i = t.containerInfo;
      Wr(function() {
        _a(null, t, null, null);
      }), i[Un] = null;
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
      lr.splice(s, 0, t), s === 0 && Cd(t);
    }
  };
  function gc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function ka(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function Uh() {
  }
  function Cx(t, i, s, l, d) {
    if (d) {
      if (typeof l == "function") {
        var h = l;
        l = function() {
          var F = wa(w);
          h.call(F);
        };
      }
      var w = jh(i, l, t, 0, null, !1, !1, "", Uh);
      return t._reactRootContainer = w, t[Un] = w.current, xo(t.nodeType === 8 ? t.parentNode : t), Wr(), w;
    }
    for (; d = t.lastChild; )
      t.removeChild(d);
    if (typeof l == "function") {
      var E = l;
      l = function() {
        var F = wa(P);
        E.call(F);
      };
    }
    var P = pc(t, 0, !1, null, null, !1, !1, "", Uh);
    return t._reactRootContainer = P, t[Un] = P.current, xo(t.nodeType === 8 ? t.parentNode : t), Wr(function() {
      _a(i, P, s, l);
    }), P;
  }
  function Ta(t, i, s, l, d) {
    var h = s._reactRootContainer;
    if (h) {
      var w = h;
      if (typeof d == "function") {
        var E = d;
        d = function() {
          var P = wa(w);
          E.call(P);
        };
      }
      _a(i, w, t, d);
    } else
      w = Cx(s, i, t, d, l);
    return wa(w);
  }
  wd = function(t) {
    switch (t.tag) {
      case 3:
        var i = t.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var s = ro(i.pendingLanes);
          s !== 0 && (Bl(i, s | 1), jt(i, tt()), !(De & 6) && (Ti = tt() + 500, hr()));
        }
        break;
      case 13:
        Wr(function() {
          var l = qn(t, 1);
          if (l !== null) {
            var d = Ot();
            hn(l, t, 1, d);
          }
        }), hc(t, 1);
    }
  }, zl = function(t) {
    if (t.tag === 13) {
      var i = qn(t, 134217728);
      if (i !== null) {
        var s = Ot();
        hn(i, t, 134217728, s);
      }
      hc(t, 134217728);
    }
  }, Sd = function(t) {
    if (t.tag === 13) {
      var i = _r(t), s = qn(t, i);
      if (s !== null) {
        var l = Ot();
        hn(s, t, i, l);
      }
      hc(t, i);
    }
  }, kd = function() {
    return je;
  }, Td = function(t, i) {
    var s = je;
    try {
      return je = t, i();
    } finally {
      je = s;
    }
  }, ir = function(t, i, s) {
    switch (i) {
      case "input":
        if (V(t, s), i = s.name, s.type === "radio" && i != null) {
          for (s = t; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < s.length; i++) {
            var l = s[i];
            if (l !== t && l.form === t.form) {
              var d = zs(l);
              if (!d)
                throw Error(r(90));
              _n(l), V(l, d);
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
  }, Ji = ac, ud = Wr;
  var Ax = { usingClientEntryPoint: !1, Events: [So, fi, zs, vs, Zi, ac] }, Fo = { findFiberByHostInstance: Ir, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, bx = { bundleType: Fo.bundleType, version: Fo.version, rendererPackageName: Fo.rendererPackageName, rendererConfig: Fo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: j.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = pd(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Fo.findFiberByHostInstance || Ex, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ea.isDisabled && Ea.supportsFiber)
      try {
        Ss = Ea.inject(bx), kn = Ea;
      } catch {
      }
  }
  return Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ax, Bt.createPortal = function(t, i) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gc(i))
      throw Error(r(200));
    return Tx(t, i, null, s);
  }, Bt.createRoot = function(t, i) {
    if (!gc(t))
      throw Error(r(299));
    var s = !1, l = "", d = zh;
    return i != null && (i.unstable_strictMode === !0 && (s = !0), i.identifierPrefix !== void 0 && (l = i.identifierPrefix), i.onRecoverableError !== void 0 && (d = i.onRecoverableError)), i = pc(t, 1, !1, null, null, s, !1, l, d), t[Un] = i.current, xo(t.nodeType === 8 ? t.parentNode : t), new mc(i);
  }, Bt.findDOMNode = function(t) {
    if (t == null)
      return null;
    if (t.nodeType === 1)
      return t;
    var i = t._reactInternals;
    if (i === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = pd(i), t = t === null ? null : t.stateNode, t;
  }, Bt.flushSync = function(t) {
    return Wr(t);
  }, Bt.hydrate = function(t, i, s) {
    if (!ka(i))
      throw Error(r(200));
    return Ta(null, t, i, !0, s);
  }, Bt.hydrateRoot = function(t, i, s) {
    if (!gc(t))
      throw Error(r(405));
    var l = s != null && s.hydratedSources || null, d = !1, h = "", w = zh;
    if (s != null && (s.unstable_strictMode === !0 && (d = !0), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), i = jh(i, null, t, 1, s ?? null, d, !1, h, w), t[Un] = i.current, xo(t), l)
      for (t = 0; t < l.length; t++)
        s = l[t], d = s._getVersion, d = d(s._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [s, d] : i.mutableSourceEagerHydrationData.push(
          s,
          d
        );
    return new Sa(i);
  }, Bt.render = function(t, i, s) {
    if (!ka(i))
      throw Error(r(200));
    return Ta(null, t, i, !1, s);
  }, Bt.unmountComponentAtNode = function(t) {
    if (!ka(t))
      throw Error(r(40));
    return t._reactRootContainer ? (Wr(function() {
      Ta(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Un] = null;
      });
    }), !0) : !1;
  }, Bt.unstable_batchedUpdates = ac, Bt.unstable_renderSubtreeIntoContainer = function(t, i, s, l) {
    if (!ka(s))
      throw Error(r(200));
    if (t == null || t._reactInternals === void 0)
      throw Error(r(38));
    return Ta(t, i, s, !1, l);
  }, Bt.version = "18.2.0-next-9e3b772b8-20220608", Bt;
}
function Yg() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yg);
    } catch (e) {
      console.error(e);
    }
}
Yg(), Xg.exports = Ix();
var Vx = Xg.exports, Qh = Vx;
Qc.createRoot = Qh.createRoot, Qc.hydrateRoot = Qh.hydrateRoot;
const dl = N.createContext({}), jx = ({
  children: e,
  app: n,
  events: r
}) => {
  const [o, a] = N.useState(n);
  return /* @__PURE__ */ A.jsx(
    dl.Provider,
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
function Bx() {
  return N.useContext(dl).settings;
}
function vn() {
  return N.useContext(dl).params;
}
function pl() {
  return N.useContext(dl).events;
}
const Zg = N.createContext({}), zx = ({
  children: e
}) => {
  const [n, r] = N.useState(!1), o = pl(), [a, c] = N.useState(!1), [f, m] = N.useState(), [y, g] = N.useState(), x = (S) => {
    f !== "messages" && m(() => "messages"), g(() => S), o.emit("conversation.opened", { conversationId: S });
  }, u = () => {
    g(() => {
    });
  }, p = () => r(() => !1), v = () => {
    r(() => !0), c(() => !0);
  }, _ = () => {
    n ? p() : v();
  };
  return /* @__PURE__ */ A.jsx(
    Zg.Provider,
    {
      value: {
        isOpen: n,
        isAlreadyOpen: a,
        close: p,
        open: v,
        toggle: _,
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
function $x(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var Hx = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($x(this));
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
}(), Pt = "-ms-", Ka = "-moz-", Fe = "-webkit-", Jg = "comm", bf = "rule", Pf = "decl", Wx = "@import", ey = "@keyframes", qx = "@layer", Gx = Math.abs, hl = String.fromCharCode, Kx = Object.assign;
function Qx(e, n) {
  return St(e, 0) ^ 45 ? (((n << 2 ^ St(e, 0)) << 2 ^ St(e, 1)) << 2 ^ St(e, 2)) << 2 ^ St(e, 3) : 0;
}
function ty(e) {
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
function St(e, n) {
  return e.charCodeAt(n) | 0;
}
function Yo(e, n, r) {
  return e.slice(n, r);
}
function Pn(e) {
  return e.length;
}
function Rf(e) {
  return e.length;
}
function Ca(e, n) {
  return n.push(e), e;
}
function Yx(e, n) {
  return e.map(n).join("");
}
var ml = 1, Bi = 1, ny = 0, Ut = 0, st = 0, qi = "";
function gl(e, n, r, o, a, c, f) {
  return { value: e, root: n, parent: r, type: o, props: a, children: c, line: ml, column: Bi, length: f, return: "" };
}
function Vo(e, n) {
  return Kx(gl("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function Zx() {
  return st;
}
function Jx() {
  return st = Ut > 0 ? St(qi, --Ut) : 0, Bi--, st === 10 && (Bi = 1, ml--), st;
}
function Kt() {
  return st = Ut < ny ? St(qi, Ut++) : 0, Bi++, st === 10 && (Bi = 1, ml++), st;
}
function Dn() {
  return St(qi, Ut);
}
function Ma() {
  return Ut;
}
function as(e, n) {
  return Yo(qi, e, n);
}
function Zo(e) {
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
function ry(e) {
  return ml = Bi = 1, ny = Pn(qi = e), Ut = 0, [];
}
function iy(e) {
  return qi = "", e;
}
function Na(e) {
  return ty(as(Ut - 1, Yc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function e_(e) {
  for (; (st = Dn()) && st < 33; )
    Kt();
  return Zo(e) > 2 || Zo(st) > 3 ? "" : " ";
}
function t_(e, n) {
  for (; --n && Kt() && !(st < 48 || st > 102 || st > 57 && st < 65 || st > 70 && st < 97); )
    ;
  return as(e, Ma() + (n < 6 && Dn() == 32 && Kt() == 32));
}
function Yc(e) {
  for (; Kt(); )
    switch (st) {
      case e:
        return Ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yc(st);
        break;
      case 40:
        e === 41 && Yc(e);
        break;
      case 92:
        Kt();
        break;
    }
  return Ut;
}
function n_(e, n) {
  for (; Kt() && e + st !== 47 + 10; )
    if (e + st === 42 + 42 && Dn() === 47)
      break;
  return "/*" + as(n, Ut - 1) + "*" + hl(e === 47 ? e : Kt());
}
function r_(e) {
  for (; !Zo(Dn()); )
    Kt();
  return as(e, Ut);
}
function i_(e) {
  return iy(Fa("", null, null, null, [""], e = ry(e), 0, [0], e));
}
function Fa(e, n, r, o, a, c, f, m, y) {
  for (var g = 0, x = 0, u = f, p = 0, v = 0, _ = 0, S = 1, k = 1, T = 1, C = 0, L = "", j = a, H = c, Z = o, K = L; k; )
    switch (_ = C, C = Kt()) {
      case 40:
        if (_ != 108 && St(K, u - 1) == 58) {
          Xc(K += Ie(Na(C), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += Na(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += e_(_);
        break;
      case 92:
        K += t_(Ma() - 1, 7);
        continue;
      case 47:
        switch (Dn()) {
          case 42:
          case 47:
            Ca(o_(n_(Kt(), Ma()), n, r), y);
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
        switch (C) {
          case 0:
          case 125:
            k = 0;
          case 59 + x:
            T == -1 && (K = Ie(K, /\f/g, "")), v > 0 && Pn(K) - u && Ca(v > 32 ? Yh(K + ";", o, r, u - 1) : Yh(Ie(K, " ", "") + ";", o, r, u - 2), y);
            break;
          case 59:
            K += ";";
          default:
            if (Ca(Z = Xh(K, n, r, g, x, a, m, L, j = [], H = [], u), c), C === 123)
              if (x === 0)
                Fa(K, n, Z, Z, j, c, u, m, H);
              else
                switch (p === 99 && St(K, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Fa(e, Z, Z, o && Ca(Xh(e, Z, Z, 0, 0, a, m, L, a, j = [], u), H), a, H, u, m, o ? j : H);
                    break;
                  default:
                    Fa(K, Z, Z, Z, [""], H, 0, m, H);
                }
        }
        g = x = v = 0, S = T = 1, L = K = "", u = f;
        break;
      case 58:
        u = 1 + Pn(K), v = _;
      default:
        if (S < 1) {
          if (C == 123)
            --S;
          else if (C == 125 && S++ == 0 && Jx() == 125)
            continue;
        }
        switch (K += hl(C), C * S) {
          case 38:
            T = x > 0 ? 1 : (K += "\f", -1);
            break;
          case 44:
            m[g++] = (Pn(K) - 1) * T, T = 1;
            break;
          case 64:
            Dn() === 45 && (K += Na(Kt())), p = Dn(), x = u = Pn(L = K += r_(Ma())), C++;
            break;
          case 45:
            _ === 45 && Pn(K) == 2 && (S = 0);
        }
    }
  return c;
}
function Xh(e, n, r, o, a, c, f, m, y, g, x) {
  for (var u = a - 1, p = a === 0 ? c : [""], v = Rf(p), _ = 0, S = 0, k = 0; _ < o; ++_)
    for (var T = 0, C = Yo(e, u + 1, u = Gx(S = f[_])), L = e; T < v; ++T)
      (L = ty(S > 0 ? p[T] + " " + C : Ie(C, /&\f/g, p[T]))) && (y[k++] = L);
  return gl(e, n, r, a === 0 ? bf : m, y, g, x);
}
function o_(e, n, r) {
  return gl(e, n, r, Jg, hl(Zx()), Yo(e, 2, -2), 0);
}
function Yh(e, n, r, o) {
  return gl(e, n, r, Pf, Yo(e, 0, o), Yo(e, o + 1, -1), o);
}
function Ii(e, n) {
  for (var r = "", o = Rf(e), a = 0; a < o; a++)
    r += n(e[a], a, e, n) || "";
  return r;
}
function s_(e, n, r, o) {
  switch (e.type) {
    case qx:
      if (e.children.length)
        break;
    case Wx:
    case Pf:
      return e.return = e.return || e.value;
    case Jg:
      return "";
    case ey:
      return e.return = e.value + "{" + Ii(e.children, o) + "}";
    case bf:
      e.value = e.props.join(",");
  }
  return Pn(r = Ii(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function a_(e) {
  var n = Rf(e);
  return function(r, o, a, c) {
    for (var f = "", m = 0; m < n; m++)
      f += e[m](r, o, a, c) || "";
    return f;
  };
}
function l_(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
var Zh = function(n) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(o) {
    if (r.has(o))
      return r.get(o);
    var a = n(o);
    return r.set(o, a), a;
  };
};
function oy(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var u_ = function(n, r, o) {
  for (var a = 0, c = 0; a = c, c = Dn(), a === 38 && c === 12 && (r[o] = 1), !Zo(c); )
    Kt();
  return as(n, Ut);
}, c_ = function(n, r) {
  var o = -1, a = 44;
  do
    switch (Zo(a)) {
      case 0:
        a === 38 && Dn() === 12 && (r[o] = 1), n[o] += u_(Ut - 1, r, o);
        break;
      case 2:
        n[o] += Na(a);
        break;
      case 4:
        if (a === 44) {
          n[++o] = Dn() === 58 ? "&\f" : "", r[o] = n[o].length;
          break;
        }
      default:
        n[o] += hl(a);
    }
  while (a = Kt());
  return n;
}, f_ = function(n, r) {
  return iy(c_(ry(n), r));
}, Jh = /* @__PURE__ */ new WeakMap(), d_ = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var r = n.value, o = n.parent, a = n.column === o.column && n.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o)
        return;
    if (!(n.props.length === 1 && r.charCodeAt(0) !== 58 && !Jh.get(o)) && !a) {
      Jh.set(n, !0);
      for (var c = [], f = f_(r, c), m = o.props, y = 0, g = 0; y < f.length; y++)
        for (var x = 0; x < m.length; x++, g++)
          n.props[g] = c[y] ? f[y].replace(/&\f/g, m[x]) : m[x] + " " + f[y];
    }
  }
}, p_ = function(n) {
  if (n.type === "decl") {
    var r = n.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
};
function sy(e, n) {
  switch (Qx(e, n)) {
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
      return Fe + e + Ka + e + Pt + e + e;
    case 6828:
    case 4268:
      return Fe + e + Pt + e + e;
    case 6165:
      return Fe + e + Pt + "flex-" + e + e;
    case 5187:
      return Fe + e + Ie(e, /(\w+).+(:[^]+)/, Fe + "box-$1$2" + Pt + "flex-$1$2") + e;
    case 5443:
      return Fe + e + Pt + "flex-item-" + Ie(e, /flex-|-self/, "") + e;
    case 4675:
      return Fe + e + Pt + "flex-line-pack" + Ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Fe + e + Pt + Ie(e, "shrink", "negative") + e;
    case 5292:
      return Fe + e + Pt + Ie(e, "basis", "preferred-size") + e;
    case 6060:
      return Fe + "box-" + Ie(e, "-grow", "") + Fe + e + Pt + Ie(e, "grow", "positive") + e;
    case 4554:
      return Fe + Ie(e, /([^-])(transform)/g, "$1" + Fe + "$2") + e;
    case 6187:
      return Ie(Ie(Ie(e, /(zoom-|grab)/, Fe + "$1"), /(image-set)/, Fe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ie(e, /(image-set\([^]*)/, Fe + "$1$`$1");
    case 4968:
      return Ie(Ie(e, /(.+:)(flex-)?(.*)/, Fe + "box-pack:$3" + Pt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Fe + e + e;
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
        switch (St(e, n + 1)) {
          case 109:
            if (St(e, n + 4) !== 45)
              break;
          case 102:
            return Ie(e, /(.+:)(.+)-([^]+)/, "$1" + Fe + "$2-$3$1" + Ka + (St(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xc(e, "stretch") ? sy(Ie(e, "stretch", "fill-available"), n) + e : e;
        }
      break;
    case 4949:
      if (St(e, n + 1) !== 115)
        break;
    case 6444:
      switch (St(e, Pn(e) - 3 - (~Xc(e, "!important") && 10))) {
        case 107:
          return Ie(e, ":", ":" + Fe) + e;
        case 101:
          return Ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Fe + (St(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Fe + "$2$3$1" + Pt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (St(e, n + 11)) {
        case 114:
          return Fe + e + Pt + Ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Fe + e + Pt + Ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Fe + e + Pt + Ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Fe + e + Pt + e + e;
  }
  return e;
}
var h_ = function(n, r, o, a) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Pf:
        n.return = sy(n.value, n.length);
        break;
      case ey:
        return Ii([Vo(n, {
          value: Ie(n.value, "@", "@" + Fe)
        })], a);
      case bf:
        if (n.length)
          return Yx(n.props, function(c) {
            switch (Xx(c, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ii([Vo(n, {
                  props: [Ie(c, /:(read-\w+)/, ":" + Ka + "$1")]
                })], a);
              case "::placeholder":
                return Ii([Vo(n, {
                  props: [Ie(c, /:(plac\w+)/, ":" + Fe + "input-$1")]
                }), Vo(n, {
                  props: [Ie(c, /:(plac\w+)/, ":" + Ka + "$1")]
                }), Vo(n, {
                  props: [Ie(c, /:(plac\w+)/, Pt + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, m_ = [h_], g_ = function(n) {
  var r = n.key;
  if (r === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(S) {
      var k = S.getAttribute("data-emotion");
      k.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var a = n.stylisPlugins || m_, c = {}, f, m = [];
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
  var y, g = [d_, p_];
  {
    var x, u = [s_, l_(function(S) {
      x.insert(S);
    })], p = a_(g.concat(a, u)), v = function(k) {
      return Ii(i_(k), p);
    };
    y = function(k, T, C, L) {
      x = C, v(k ? k + "{" + T.styles + "}" : T.styles), L && (_.inserted[T.name] = !0);
    };
  }
  var _ = {
    key: r,
    sheet: new Hx({
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
  return _.sheet.hydrate(m), _;
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
var y_ = !0;
function v_(e, n, r) {
  var o = "";
  return r.split(" ").forEach(function(a) {
    e[a] !== void 0 ? n.push(e[a] + ";") : o += a + " ";
  }), o;
}
var ay = function(n, r, o) {
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
  y_ === !1) && n.registered[a] === void 0 && (n.registered[a] = r.styles);
}, x_ = function(n, r, o) {
  ay(n, r, o);
  var a = n.key + "-" + r.name;
  if (n.inserted[r.name] === void 0) {
    var c = r;
    do
      n.insert(r === c ? "." + a : "", c, n.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function __(e) {
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
var w_ = {
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
}, S_ = /[A-Z]|^ms/g, k_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ly = function(n) {
  return n.charCodeAt(1) === 45;
}, em = function(n) {
  return n != null && typeof n != "boolean";
}, _c = /* @__PURE__ */ oy(function(e) {
  return ly(e) ? e : e.replace(S_, "-$&").toLowerCase();
}), tm = function(n, r) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(k_, function(o, a, c) {
          return Rn = {
            name: a,
            styles: c,
            next: Rn
          }, a;
        });
  }
  return w_[n] !== 1 && !ly(n) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Jo(e, n, r) {
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
      return T_(e, n, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = Rn, f = r(e);
        return Rn = c, Jo(e, n, f);
      }
      break;
    }
  }
  if (n == null)
    return r;
  var m = n[r];
  return m !== void 0 ? m : r;
}
function T_(e, n, r) {
  var o = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      o += Jo(e, n, r[a]) + ";";
  else
    for (var c in r) {
      var f = r[c];
      if (typeof f != "object")
        n != null && n[f] !== void 0 ? o += c + "{" + n[f] + "}" : em(f) && (o += _c(c) + ":" + tm(c, f) + ";");
      else if (Array.isArray(f) && typeof f[0] == "string" && (n == null || n[f[0]] === void 0))
        for (var m = 0; m < f.length; m++)
          em(f[m]) && (o += _c(c) + ":" + tm(c, f[m]) + ";");
      else {
        var y = Jo(e, n, f);
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
var nm = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Rn, E_ = function(n, r, o) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var a = !0, c = "";
  Rn = void 0;
  var f = n[0];
  f == null || f.raw === void 0 ? (a = !1, c += Jo(o, r, f)) : c += f[0];
  for (var m = 1; m < n.length; m++)
    c += Jo(o, r, n[m]), a && (c += f[m]);
  nm.lastIndex = 0;
  for (var y = "", g; (g = nm.exec(c)) !== null; )
    y += "-" + // $FlowFixMe we know it's not null
    g[1];
  var x = __(c) + y;
  return {
    name: x,
    styles: c,
    next: Rn
  };
}, C_ = function(n) {
  return n();
}, A_ = Hh["useInsertionEffect"] ? Hh["useInsertionEffect"] : !1, b_ = A_ || C_, uy = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ g_({
    key: "css"
  }) : null
);
uy.Provider;
var P_ = function(n) {
  return /* @__PURE__ */ N.forwardRef(function(r, o) {
    var a = N.useContext(uy);
    return n(r, a, o);
  });
}, Zc = /* @__PURE__ */ N.createContext({}), R_ = function(n, r) {
  if (typeof r == "function") {
    var o = r(n);
    return o;
  }
  return Qa({}, n, r);
}, O_ = /* @__PURE__ */ Zh(function(e) {
  return Zh(function(n) {
    return R_(e, n);
  });
}), L_ = function(n) {
  var r = N.useContext(Zc);
  return n.theme !== r && (r = O_(r)(n.theme)), /* @__PURE__ */ N.createElement(Zc.Provider, {
    value: r
  }, n.children);
}, D_ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, M_ = /* @__PURE__ */ oy(
  function(e) {
    return D_.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), N_ = M_, F_ = function(n) {
  return n !== "theme";
}, rm = function(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96 ? N_ : F_;
}, im = function(n, r, o) {
  var a;
  if (r) {
    var c = r.shouldForwardProp;
    a = n.__emotion_forwardProp && c ? function(f) {
      return n.__emotion_forwardProp(f) && c(f);
    } : c;
  }
  return typeof a != "function" && o && (a = n.__emotion_forwardProp), a;
}, I_ = function(n) {
  var r = n.cache, o = n.serialized, a = n.isStringTag;
  return ay(r, o, a), b_(function() {
    return x_(r, o, a);
  }), null;
}, V_ = function e(n, r) {
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
    var _ = P_(function(S, k, T) {
      var C = g && S.as || a, L = "", j = [], H = S;
      if (S.theme == null) {
        H = {};
        for (var Z in S)
          H[Z] = S[Z];
        H.theme = N.useContext(Zc);
      }
      typeof S.className == "string" ? L = v_(k.registered, j, S.className) : S.className != null && (L = S.className + " ");
      var K = E_(u.concat(j), k.registered, H);
      L += k.key + "-" + K.name, f !== void 0 && (L += " " + f);
      var te = g && m === void 0 ? rm(C) : y, J = {};
      for (var Ee in S)
        g && Ee === "as" || // $FlowFixMe
        te(Ee) && (J[Ee] = S[Ee]);
      return J.className = L, J.ref = T, /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(I_, {
        cache: k,
        serialized: K,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ N.createElement(C, J));
    });
    return _.displayName = c !== void 0 ? c : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", _.defaultProps = n.defaultProps, _.__emotion_real = _, _.__emotion_base = a, _.__emotion_styles = u, _.__emotion_forwardProp = m, Object.defineProperty(_, "toString", {
      value: function() {
        return "." + f;
      }
    }), _.withComponent = function(S, k) {
      return e(S, Qa({}, r, k, {
        shouldForwardProp: im(_, k, !0)
      })).apply(void 0, u);
    }, _;
  };
}, j_ = [
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
], Te = V_.bind();
j_.forEach(function(e) {
  Te[e] = Te(e);
});
function B_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function es(e, n) {
  return es = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
    return o.__proto__ = a, o;
  }, es(e, n);
}
function z_(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, es(e, n);
}
function Jc(e) {
  return Jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Jc(e);
}
function U_(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function $_() {
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
  return $_() ? Ia = Reflect.construct.bind() : Ia = function(a, c, f) {
    var m = [null];
    m.push.apply(m, c);
    var y = Function.bind.apply(a, m), g = new y();
    return f && es(g, f.prototype), g;
  }, Ia.apply(null, arguments);
}
function ef(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ef = function(o) {
    if (o === null || !U_(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(o))
        return n.get(o);
      n.set(o, a);
    }
    function a() {
      return Ia(o, arguments, Jc(this).constructor);
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
  z_(n, e);
  function n(r) {
    var o;
    return o = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this, B_(o);
  }
  return n;
}(/* @__PURE__ */ ef(Error));
function wc(e) {
  return Math.round(e * 255);
}
function H_(e, n, r) {
  return wc(e) + "," + wc(n) + "," + wc(r);
}
function om(e, n, r, o) {
  if (o === void 0 && (o = H_), n === 0)
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
function W_(e) {
  if (typeof e != "string")
    return e;
  var n = e.toLowerCase();
  return sm[n] ? "#" + sm[n] : e;
}
var q_ = /^#[a-fA-F0-9]{6}$/, G_ = /^#[a-fA-F0-9]{8}$/, K_ = /^#[a-fA-F0-9]{3}$/, Q_ = /^#[a-fA-F0-9]{4}$/, Sc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, X_ = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Y_ = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Z_ = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function J_(e) {
  if (typeof e != "string")
    throw new Oi(3);
  var n = W_(e);
  if (n.match(q_))
    return {
      red: parseInt("" + n[1] + n[2], 16),
      green: parseInt("" + n[3] + n[4], 16),
      blue: parseInt("" + n[5] + n[6], 16)
    };
  if (n.match(G_)) {
    var r = parseFloat((parseInt("" + n[7] + n[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + n[1] + n[2], 16),
      green: parseInt("" + n[3] + n[4], 16),
      blue: parseInt("" + n[5] + n[6], 16),
      alpha: r
    };
  }
  if (n.match(K_))
    return {
      red: parseInt("" + n[1] + n[1], 16),
      green: parseInt("" + n[2] + n[2], 16),
      blue: parseInt("" + n[3] + n[3], 16)
    };
  if (n.match(Q_)) {
    var o = parseFloat((parseInt("" + n[4] + n[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + n[1] + n[1], 16),
      green: parseInt("" + n[2] + n[2], 16),
      blue: parseInt("" + n[3] + n[3], 16),
      alpha: o
    };
  }
  var a = Sc.exec(n);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var c = X_.exec(n.substring(0, 50));
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10),
      alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4])
    };
  var f = Y_.exec(n);
  if (f) {
    var m = parseInt("" + f[1], 10), y = parseInt("" + f[2], 10) / 100, g = parseInt("" + f[3], 10) / 100, x = "rgb(" + om(m, y, g) + ")", u = Sc.exec(x);
    if (!u)
      throw new Oi(4, n, x);
    return {
      red: parseInt("" + u[1], 10),
      green: parseInt("" + u[2], 10),
      blue: parseInt("" + u[3], 10)
    };
  }
  var p = Z_.exec(n.substring(0, 50));
  if (p) {
    var v = parseInt("" + p[1], 10), _ = parseInt("" + p[2], 10) / 100, S = parseInt("" + p[3], 10) / 100, k = "rgb(" + om(v, _, S) + ")", T = Sc.exec(k);
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
var ew = function(n) {
  return n.length === 7 && n[1] === n[2] && n[3] === n[4] && n[5] === n[6] ? "#" + n[1] + n[3] + n[5] : n;
}, am = ew;
function Ci(e) {
  var n = e.toString(16);
  return n.length === 1 ? "0" + n : n;
}
function lm(e, n, r) {
  if (typeof e == "number" && typeof n == "number" && typeof r == "number")
    return am("#" + Ci(e) + Ci(n) + Ci(r));
  if (typeof e == "object" && n === void 0 && r === void 0)
    return am("#" + Ci(e.red) + Ci(e.green) + Ci(e.blue));
  throw new Oi(6);
}
function zi(e, n, r, o) {
  if (typeof e == "string" && typeof n == "number") {
    var a = J_(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + n + ")";
  } else {
    if (typeof e == "number" && typeof n == "number" && typeof r == "number" && typeof o == "number")
      return o >= 1 ? lm(e, n, r) : "rgba(" + e + "," + n + "," + r + "," + o + ")";
    if (typeof e == "object" && n === void 0 && r === void 0 && o === void 0)
      return e.alpha >= 1 ? lm(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Oi(7);
}
var zt;
((e) => {
  ((n) => {
    n.BottomRight = "1", n.BottomLeft = "2", n.TopRight = "3", n.TopLeft = "4";
  })(e.ChatPosition || (e.ChatPosition = {}));
})(zt || (zt = {}));
const tw = Te.div`
  position: fixed;
  right: ${(e) => [zt.ChatPosition.BottomRight, zt.ChatPosition.TopRight].includes(
  e.theme.position
) ? "0" : "unset"};
  bottom: ${(e) => [zt.ChatPosition.BottomRight, zt.ChatPosition.BottomLeft].includes(
  e.theme.position
) ? "0" : "unset"};
  left: ${(e) => [zt.ChatPosition.BottomLeft, zt.ChatPosition.TopLeft].includes(
  e.theme.position
) ? "0" : "unset"};
  top: ${(e) => [zt.ChatPosition.TopRight, zt.ChatPosition.TopLeft].includes(
  e.theme.position
) ? "0" : "unset"};
`, nw = Te.div`
  display: flex;
  flex-direction: ${(e) => [zt.ChatPosition.TopLeft, zt.ChatPosition.TopRight].includes(
  e.theme.position
) ? "column-reverse" : "column"};
  margin: 0 10px;
  font-family: "Noto Sans";

  * {
    box-sizing: border-box;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    font-family: "Noto Sans";
    /* background: transparent; */
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    font-family: "Noto Sans";
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
`, rw = Te.div`
  display: flex;
  flex-direction: row;
  margin: 20px 14px;
  gap: 40px;
  align-items: flex-end;
  position: relative;
`, iw = Te.button`
  border-radius: 50%;
  margin-left: ${(e) => [zt.ChatPosition.TopLeft, zt.ChatPosition.BottomLeft].includes(
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
`, cy = N.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), yl = N.createContext({}), vl = N.createContext(null), xl = typeof document < "u", Xa = xl ? N.useLayoutEffect : N.useEffect, fy = N.createContext({ strict: !1 });
function ow(e, n, r, o) {
  const { visualElement: a } = N.useContext(yl), c = N.useContext(fy), f = N.useContext(vl), m = N.useContext(cy).reducedMotion, y = N.useRef();
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
function sw(e, n, r) {
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
function wl(e) {
  return _l(e.animate) || Lf.some((n) => ts(e[n]));
}
function dy(e) {
  return !!(wl(e) || e.variants);
}
function aw(e, n) {
  if (wl(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || ts(r) ? r : void 0,
      animate: ts(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? n : {};
}
function lw(e) {
  const { initial: n, animate: r } = aw(e, N.useContext(yl));
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
function uw(e) {
  for (const n in e)
    ns[n] = {
      ...ns[n],
      ...e[n]
    };
}
const rs = N.createContext({}), py = N.createContext({}), cw = Symbol.for("motionComponentSymbol");
function fw({ preloadedFeatures: e, createVisualElement: n, useRender: r, useVisualState: o, Component: a }) {
  e && uw(e);
  function c(m, y) {
    let g;
    const x = {
      ...N.useContext(cy),
      ...m,
      layoutId: dw(m)
    }, { isStatic: u } = x, p = lw(m), v = o(m, u);
    if (!u && xl) {
      p.visualElement = ow(a, v, x, n);
      const _ = N.useContext(py), S = N.useContext(fy).strict;
      p.visualElement && (g = p.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        x,
        S,
        e,
        _
      ));
    }
    return N.createElement(
      yl.Provider,
      { value: p },
      g && p.visualElement ? N.createElement(g, { visualElement: p.visualElement, ...x }) : null,
      r(a, m, sw(v, p.visualElement, y), v, u, p.visualElement)
    );
  }
  const f = N.forwardRef(c);
  return f[cw] = a, f;
}
function dw({ layoutId: e }) {
  const n = N.useContext(rs).id;
  return n && e !== void 0 ? n + "-" + e : e;
}
function pw(e) {
  function n(o, a = {}) {
    return fw(e(o, a));
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
const hw = [
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
function Df(e) {
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
      !!(hw.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Ya = {};
function mw(e) {
  Object.assign(Ya, e);
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
], Jr = new Set(ls);
function hy(e, { layout: n, layoutId: r }) {
  return Jr.has(e) || e.startsWith("origin") || (n || r !== void 0) && (!!Ya[e] || e === "opacity");
}
const $t = (e) => !!(e && e.getVelocity), gw = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, yw = ls.length;
function vw(e, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, a) {
  let c = "";
  for (let f = 0; f < yw; f++) {
    const m = ls[f];
    if (e[m] !== void 0) {
      const y = gw[m] || m;
      c += `${y}(${e[m]}) `;
    }
  }
  return n && !e.z && (c += "translateZ(0)"), c = c.trim(), a ? c = a(e, o ? "" : c) : r && o && (c = "none"), c;
}
const my = (e) => (n) => typeof n == "string" && n.startsWith(e), gy = my("--"), tf = my("var(--"), xw = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, _w = (e, n) => n && typeof e == "number" ? n.transform(e) : e, Lr = (e, n, r) => Math.min(Math.max(r, e), n), ei = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Go = {
  ...ei,
  transform: (e) => Lr(0, 1, e)
}, Aa = {
  ...ei,
  default: 1
}, Ko = (e) => Math.round(e * 1e5) / 1e5, Sl = /(-)?([\d]*\.?[\d])+/g, yy = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ww = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function us(e) {
  return typeof e == "string";
}
const cs = (e) => ({
  test: (n) => us(n) && n.endsWith(e) && n.split(" ").length === 1,
  parse: parseFloat,
  transform: (n) => `${n}${e}`
}), Er = cs("deg"), Mn = cs("%"), ye = cs("px"), Sw = cs("vh"), kw = cs("vw"), fm = {
  ...Mn,
  parse: (e) => Mn.parse(e) / 100,
  transform: (e) => Mn.transform(e * 100)
}, dm = {
  ...ei,
  transform: Math.round
}, vy = {
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
  rotate: Er,
  rotateX: Er,
  rotateY: Er,
  rotateZ: Er,
  scale: Aa,
  scaleX: Aa,
  scaleY: Aa,
  scaleZ: Aa,
  skew: Er,
  skewX: Er,
  skewY: Er,
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
function Mf(e, n, r, o) {
  const { style: a, vars: c, transform: f, transformOrigin: m } = e;
  let y = !1, g = !1, x = !0;
  for (const u in n) {
    const p = n[u];
    if (gy(u)) {
      c[u] = p;
      continue;
    }
    const v = vy[u], _ = _w(p, v);
    if (Jr.has(u)) {
      if (y = !0, f[u] = _, !x)
        continue;
      p !== (v.default || 0) && (x = !1);
    } else
      u.startsWith("origin") ? (g = !0, m[u] = _) : a[u] = _;
  }
  if (n.transform || (y || o ? a.transform = vw(e.transform, r, x, o) : a.transform && (a.transform = "none")), g) {
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
function xy(e, n, r) {
  for (const o in n)
    !$t(n[o]) && !hy(o, r) && (e[o] = n[o]);
}
function Tw({ transformTemplate: e }, n, r) {
  return N.useMemo(() => {
    const o = Nf();
    return Mf(o, n, { enableHardwareAcceleration: !r }, e), Object.assign({}, o.vars, o.style);
  }, [n]);
}
function Ew(e, n, r) {
  const o = e.style || {}, a = {};
  return xy(a, o, e), Object.assign(a, Tw(e, n, r)), e.transformValues ? e.transformValues(a) : a;
}
function Cw(e, n, r) {
  const o = {}, a = Ew(e, n, r);
  return e.drag && e.dragListener !== !1 && (o.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = a, o;
}
const Aw = /* @__PURE__ */ new Set([
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
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Aw.has(e);
}
let _y = (e) => !Za(e);
function bw(e) {
  e && (_y = (n) => n.startsWith("on") ? !Za(n) : e(n));
}
try {
  bw(require("@emotion/is-prop-valid").default);
} catch {
}
function Pw(e, n, r) {
  const o = {};
  for (const a in e)
    a === "values" && typeof e.values == "object" || (_y(a) || r === !0 && Za(a) || !n && !Za(a) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && a.startsWith("onDrag")) && (o[a] = e[a]);
  return o;
}
function pm(e, n, r) {
  return typeof e == "string" ? e : ye.transform(n + r * e);
}
function Rw(e, n, r) {
  const o = pm(n, e.x, e.width), a = pm(r, e.y, e.height);
  return `${o} ${a}`;
}
const Ow = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Lw = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Dw(e, n, r = 1, o = 0, a = !0) {
  e.pathLength = 1;
  const c = a ? Ow : Lw;
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
  if (Mf(e, g, x, p), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: v, style: _, dimensions: S } = e;
  v.transform && (S && (_.transform = v.transform), delete v.transform), S && (a !== void 0 || c !== void 0 || _.transform) && (_.transformOrigin = Rw(S, a !== void 0 ? a : 0.5, c !== void 0 ? c : 0.5)), n !== void 0 && (v.x = n), r !== void 0 && (v.y = r), o !== void 0 && (v.scale = o), f !== void 0 && Dw(v, f, m, y, !1);
}
const wy = () => ({
  ...Nf(),
  attrs: {}
}), If = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Mw(e, n, r, o) {
  const a = N.useMemo(() => {
    const c = wy();
    return Ff(c, n, { enableHardwareAcceleration: !1 }, If(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [n]);
  if (e.style) {
    const c = {};
    xy(c, e.style, e), a.style = { ...c, ...a.style };
  }
  return a;
}
function Nw(e = !1) {
  return (r, o, a, { latestValues: c }, f) => {
    const y = (Df(r) ? Mw : Cw)(o, c, f, r), x = {
      ...Pw(o, typeof r == "string", e),
      ...y,
      ref: a
    }, { children: u } = o, p = N.useMemo(() => $t(u) ? u.get() : u, [u]);
    return N.createElement(r, {
      ...x,
      children: p
    });
  };
}
const Vf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Sy(e, { style: n, vars: r }, o, a) {
  Object.assign(e.style, n, a && a.getProjectionStyles(o));
  for (const c in r)
    e.style.setProperty(c, r[c]);
}
const ky = /* @__PURE__ */ new Set([
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
function Ty(e, n, r, o) {
  Sy(e, n, void 0, o);
  for (const a in n.attrs)
    e.setAttribute(ky.has(a) ? a : Vf(a), n.attrs[a]);
}
function jf(e, n) {
  const { style: r } = e, o = {};
  for (const a in r)
    ($t(r[a]) || n.style && $t(n.style[a]) || hy(a, e)) && (o[a] = r[a]);
  return o;
}
function Ey(e, n) {
  const r = jf(e, n);
  for (const o in e)
    if ($t(e[o]) || $t(n[o])) {
      const a = ls.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[a] = e[o];
    }
  return r;
}
function Bf(e, n, r, o = {}, a = {}) {
  return typeof n == "function" && (n = n(r !== void 0 ? r : e.custom, o, a)), typeof n == "string" && (n = e.variants && e.variants[n]), typeof n == "function" && (n = n(r !== void 0 ? r : e.custom, o, a)), n;
}
function Cy(e) {
  const n = N.useRef(null);
  return n.current === null && (n.current = e()), n.current;
}
const Ja = (e) => Array.isArray(e), Fw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Iw = (e) => Ja(e) ? e[e.length - 1] || 0 : e;
function Va(e) {
  const n = $t(e) ? e.get() : e;
  return Fw(n) ? n.toValue() : n;
}
function Vw({ scrapeMotionValuesFromProps: e, createRenderState: n, onMount: r }, o, a, c) {
  const f = {
    latestValues: jw(o, a, c, e),
    renderState: n()
  };
  return r && (f.mount = (m) => r(o, m, f)), f;
}
const Ay = (e) => (n, r) => {
  const o = N.useContext(yl), a = N.useContext(vl), c = () => Vw(e, n, o, a);
  return r ? c() : Cy(c);
};
function jw(e, n, r, o) {
  const a = {}, c = o(e, {});
  for (const p in c)
    a[p] = Va(c[p]);
  let { initial: f, animate: m } = e;
  const y = wl(e), g = dy(e);
  n && g && !y && e.inherit !== !1 && (f === void 0 && (f = n.initial), m === void 0 && (m = n.animate));
  let x = r ? r.initial === !1 : !1;
  x = x || f === !1;
  const u = x ? m : f;
  return u && typeof u != "boolean" && !_l(u) && (Array.isArray(u) ? u : [u]).forEach((v) => {
    const _ = Bf(e, v);
    if (!_)
      return;
    const { transitionEnd: S, transition: k, ...T } = _;
    for (const C in T) {
      let L = T[C];
      if (Array.isArray(L)) {
        const j = x ? L.length - 1 : 0;
        L = L[j];
      }
      L !== null && (a[C] = L);
    }
    for (const C in S)
      a[C] = S[C];
  }), a;
}
const Bw = {
  useVisualState: Ay({
    scrapeMotionValuesFromProps: Ey,
    createRenderState: wy,
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
      Ff(r, o, { enableHardwareAcceleration: !1 }, If(n.tagName), e.transformTemplate), Ty(n, r);
    }
  })
}, zw = {
  useVisualState: Ay({
    scrapeMotionValuesFromProps: jf,
    createRenderState: Nf
  })
};
function Uw(e, { forwardMotionProps: n = !1 }, r, o) {
  return {
    ...Df(e) ? Bw : zw,
    preloadedFeatures: r,
    useRender: Nw(n),
    createVisualElement: o,
    Component: e
  };
}
function Zn(e, n, r, o = { passive: !0 }) {
  return e.addEventListener(n, r, o), () => e.removeEventListener(n, r);
}
const by = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function kl(e, n = "page") {
  return {
    point: {
      x: e[n + "X"],
      y: e[n + "Y"]
    }
  };
}
const $w = (e) => (n) => by(n) && e(n, kl(n));
function Jn(e, n, r, o) {
  return Zn(e, n, $w(r), o);
}
const Hw = (e, n) => (r) => n(e(r)), Rr = (...e) => e.reduce(Hw);
function Py(e) {
  let n = null;
  return () => {
    const r = () => {
      n = null;
    };
    return n === null ? (n = e, r) : !1;
  };
}
const hm = Py("dragHorizontal"), mm = Py("dragVertical");
function Ry(e) {
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
function Oy() {
  const e = Ry(!0);
  return e ? (e(), !1) : !0;
}
class Mr {
  constructor(n) {
    this.isMounted = !1, this.node = n;
  }
  update() {
  }
}
function Ww(e) {
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
const Ze = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, qw = 40;
let nf = !0, is = !1;
const Tl = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Vi = Tl.reduce((e, n) => (e[n] = Ww(() => is = !0), e), {}), Gw = (e) => Vi[e].process(Ze), Ly = (e) => {
  is = !1, Ze.delta = nf ? 1e3 / 60 : Math.max(Math.min(e - Ze.timestamp, qw), 1), Ze.timestamp = e, Ze.isProcessing = !0, Tl.forEach(Gw), Ze.isProcessing = !1, is && (nf = !1, requestAnimationFrame(Ly));
}, Kw = () => {
  is = !0, nf = !0, Ze.isProcessing || requestAnimationFrame(Ly);
}, Ke = Tl.reduce((e, n) => {
  const r = Vi[n];
  return e[n] = (o, a = !1, c = !1) => (is || Kw(), r.schedule(o, a, c)), e;
}, {});
function nr(e) {
  Tl.forEach((n) => Vi[n].cancel(e));
}
function gm(e, n) {
  const r = "pointer" + (n ? "enter" : "leave"), o = "onHover" + (n ? "Start" : "End"), a = (c, f) => {
    if (c.type === "touch" || Oy())
      return;
    const m = e.getProps();
    e.animationState && m.whileHover && e.animationState.setActive("whileHover", n), m[o] && Ke.update(() => m[o](c, f));
  };
  return Jn(e.current, r, a, {
    passive: !e.getProps()[o]
  });
}
class Qw extends Mr {
  mount() {
    this.unmount = Rr(gm(this.node, !0), gm(this.node, !1));
  }
  unmount() {
  }
}
class Xw extends Mr {
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
    this.unmount = Rr(Zn(this.node.current, "focus", () => this.onFocus()), Zn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Dy = (e, n) => n ? e === n ? !0 : Dy(e, n.parentElement) : !1, ft = (e) => e;
function kc(e, n) {
  if (!n)
    return;
  const r = new PointerEvent("pointer" + e);
  n(r, kl(r));
}
class Yw extends Mr {
  constructor() {
    super(...arguments), this.removeStartListeners = ft, this.removeEndListeners = ft, this.removeAccessibleListeners = ft, this.startPointerPress = (n, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const o = this.node.getProps(), c = Jn(window, "pointerup", (m, y) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: g, onTapCancel: x } = this.node.getProps();
        Ke.update(() => {
          Dy(this.node.current, m.target) ? g && g(m, y) : x && x(m, y);
        });
      }, { passive: !(o.onTap || o.onPointerUp) }), f = Jn(window, "pointercancel", (m, y) => this.cancelPress(m, y), { passive: !(o.onTapCancel || o.onPointerCancel) });
      this.removeEndListeners = Rr(c, f), this.startPress(n, r);
    }, this.startAccessiblePress = () => {
      const n = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const f = (m) => {
          m.key !== "Enter" || !this.checkPressEnd() || kc("up", (y, g) => {
            const { onTap: x } = this.node.getProps();
            x && Ke.update(() => x(y, g));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Zn(this.node.current, "keyup", f), kc("down", (m, y) => {
          this.startPress(m, y);
        });
      }, r = Zn(this.node.current, "keydown", n), o = () => {
        this.isPressing && kc("cancel", (c, f) => this.cancelPress(c, f));
      }, a = Zn(this.node.current, "blur", o);
      this.removeAccessibleListeners = Rr(r, a);
    };
  }
  startPress(n, r) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: a } = this.node.getProps();
    a && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && Ke.update(() => o(n, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Oy();
  }
  cancelPress(n, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && Ke.update(() => o(n, r));
  }
  mount() {
    const n = this.node.getProps(), r = Jn(this.node.current, "pointerdown", this.startPointerPress, { passive: !(n.onTapStart || n.onPointerStart) }), o = Zn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Rr(r, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const rf = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap(), Zw = (e) => {
  const n = rf.get(e.target);
  n && n(e);
}, Jw = (e) => {
  e.forEach(Zw);
};
function eS({ root: e, ...n }) {
  const r = e || document;
  Tc.has(r) || Tc.set(r, {});
  const o = Tc.get(r), a = JSON.stringify(n);
  return o[a] || (o[a] = new IntersectionObserver(Jw, { root: e, ...n })), o[a];
}
function tS(e, n, r) {
  const o = eS(n);
  return rf.set(e, r), o.observe(e), () => {
    rf.delete(e), o.unobserve(e);
  };
}
const nS = {
  some: 0,
  all: 1
};
class rS extends Mr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(), { root: r, margin: o, amount: a = "some", once: c } = n, f = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof a == "number" ? a : nS[a]
    }, m = (y) => {
      const { isIntersecting: g } = y;
      if (this.isInView === g || (this.isInView = g, c && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: x, onViewportLeave: u } = this.node.getProps(), p = g ? x : u;
      p && p(y);
    };
    return tS(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: n, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(iS(n, r)) && this.startObserver();
  }
  unmount() {
  }
}
function iS({ viewport: e = {} }, { viewport: n = {} } = {}) {
  return (r) => e[r] !== n[r];
}
const oS = {
  inView: {
    Feature: rS
  },
  tap: {
    Feature: Yw
  },
  focus: {
    Feature: Xw
  },
  hover: {
    Feature: Qw
  }
};
function My(e, n) {
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
function sS(e) {
  const n = {};
  return e.values.forEach((r, o) => n[o] = r.get()), n;
}
function aS(e) {
  const n = {};
  return e.values.forEach((r, o) => n[o] = r.getVelocity()), n;
}
function El(e, n, r) {
  const o = e.getProps();
  return Bf(o, n, r !== void 0 ? r : o.custom, sS(e), aS(e));
}
const lS = "framerAppearId", uS = "data-" + Vf(lS);
let cS = ft, zf = ft;
const Or = (e) => e * 1e3, er = (e) => e / 1e3, fS = {
  current: !1
}, Ny = (e) => Array.isArray(e) && typeof e[0] == "number";
function Fy(e) {
  return !!(!e || typeof e == "string" && Iy[e] || Ny(e) || Array.isArray(e) && e.every(Fy));
}
const Wo = ([e, n, r, o]) => `cubic-bezier(${e}, ${n}, ${r}, ${o})`, Iy = {
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
    return Ny(e) ? Wo(e) : Array.isArray(e) ? e.map(Vy) : Iy[e];
}
function dS(e, n, r, { delay: o = 0, duration: a, repeat: c = 0, repeatType: f = "loop", ease: m, times: y } = {}) {
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
}, Ec = {}, jy = {};
for (const e in ym)
  jy[e] = () => (Ec[e] === void 0 && (Ec[e] = ym[e]()), Ec[e]);
function pS(e, { repeat: n, repeatType: r = "loop" }) {
  const o = n && r !== "loop" && n % 2 === 1 ? 0 : e.length - 1;
  return e[o];
}
const By = (e, n, r) => (((1 - 3 * r + 3 * n) * e + (3 * r - 6 * n)) * e + 3 * n) * e, hS = 1e-7, mS = 12;
function gS(e, n, r, o, a) {
  let c, f, m = 0;
  do
    f = n + (r - n) / 2, c = By(f, o, a) - e, c > 0 ? r = f : n = f;
  while (Math.abs(c) > hS && ++m < mS);
  return f;
}
function fs(e, n, r, o) {
  if (e === n && r === o)
    return ft;
  const a = (c) => gS(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : By(a(c), n, o);
}
const yS = fs(0.42, 0, 1, 1), vS = fs(0, 0, 0.58, 1), zy = fs(0.42, 0, 0.58, 1), xS = (e) => Array.isArray(e) && typeof e[0] != "number", Uy = (e) => (n) => n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2, $y = (e) => (n) => 1 - e(1 - n), Hy = (e) => 1 - Math.sin(Math.acos(e)), Uf = $y(Hy), _S = Uy(Uf), Wy = fs(0.33, 1.53, 0.69, 0.99), $f = $y(Wy), wS = Uy($f), SS = (e) => (e *= 2) < 1 ? 0.5 * $f(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), kS = {
  linear: ft,
  easeIn: yS,
  easeInOut: zy,
  easeOut: vS,
  circIn: Hy,
  circInOut: _S,
  circOut: Uf,
  backIn: $f,
  backInOut: wS,
  backOut: Wy,
  anticipate: SS
}, vm = (e) => {
  if (Array.isArray(e)) {
    zf(e.length === 4);
    const [n, r, o, a] = e;
    return fs(n, r, o, a);
  } else if (typeof e == "string")
    return kS[e];
  return e;
}, Hf = (e, n) => (r) => !!(us(r) && ww.test(r) && r.startsWith(e) || n && Object.prototype.hasOwnProperty.call(r, n)), qy = (e, n, r) => (o) => {
  if (!us(o))
    return o;
  const [a, c, f, m] = o.match(Sl);
  return {
    [e]: parseFloat(a),
    [n]: parseFloat(c),
    [r]: parseFloat(f),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, TS = (e) => Lr(0, 255, e), Cc = {
  ...ei,
  transform: (e) => Math.round(TS(e))
}, Zr = {
  test: Hf("rgb", "red"),
  parse: qy("red", "green", "blue"),
  transform: ({ red: e, green: n, blue: r, alpha: o = 1 }) => "rgba(" + Cc.transform(e) + ", " + Cc.transform(n) + ", " + Cc.transform(r) + ", " + Ko(Go.transform(o)) + ")"
};
function ES(e) {
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
  parse: ES,
  transform: Zr.transform
}, Di = {
  test: Hf("hsl", "hue"),
  parse: qy("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: n, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + Mn.transform(Ko(n)) + ", " + Mn.transform(Ko(r)) + ", " + Ko(Go.transform(o)) + ")"
}, Lt = {
  test: (e) => Zr.test(e) || of.test(e) || Di.test(e),
  parse: (e) => Zr.test(e) ? Zr.parse(e) : Di.test(e) ? Di.parse(e) : of.parse(e),
  transform: (e) => us(e) ? e : e.hasOwnProperty("red") ? Zr.transform(e) : Di.transform(e)
}, Je = (e, n, r) => -r * e + r * n + e;
function Ac(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function CS({ hue: e, saturation: n, lightness: r, alpha: o }) {
  e /= 360, n /= 100, r /= 100;
  let a = 0, c = 0, f = 0;
  if (!n)
    a = c = f = r;
  else {
    const m = r < 0.5 ? r * (1 + n) : r + n - r * n, y = 2 * r - m;
    a = Ac(y, m, e + 1 / 3), c = Ac(y, m, e), f = Ac(y, m, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
const bc = (e, n, r) => {
  const o = e * e;
  return Math.sqrt(Math.max(0, r * (n * n - o) + o));
}, AS = [of, Zr, Di], bS = (e) => AS.find((n) => n.test(e));
function xm(e) {
  const n = bS(e);
  let r = n.parse(e);
  return n === Di && (r = CS(r)), r;
}
const Gy = (e, n) => {
  const r = xm(e), o = xm(n), a = { ...r };
  return (c) => (a.red = bc(r.red, o.red, c), a.green = bc(r.green, o.green, c), a.blue = bc(r.blue, o.blue, c), a.alpha = Je(r.alpha, o.alpha, c), Zr.transform(a));
};
function PS(e) {
  var n, r;
  return isNaN(e) && us(e) && (((n = e.match(Sl)) === null || n === void 0 ? void 0 : n.length) || 0) + (((r = e.match(yy)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Ky = {
  regex: xw,
  countKey: "Vars",
  token: "${v}",
  parse: ft
}, Qy = {
  regex: yy,
  countKey: "Colors",
  token: "${c}",
  parse: Lt.parse
}, Xy = {
  regex: Sl,
  countKey: "Numbers",
  token: "${n}",
  parse: ei.parse
};
function Pc(e, { regex: n, countKey: r, token: o, parse: a }) {
  const c = e.tokenised.match(n);
  c && (e["num" + r] = c.length, e.tokenised = e.tokenised.replace(n, o), e.values.push(...c.map(a)));
}
function el(e) {
  const n = e.toString(), r = {
    value: n,
    tokenised: n,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Pc(r, Ky), Pc(r, Qy), Pc(r, Xy), r;
}
function Yy(e) {
  return el(e).values;
}
function Zy(e) {
  const { values: n, numColors: r, numVars: o, tokenised: a } = el(e), c = n.length;
  return (f) => {
    let m = a;
    for (let y = 0; y < c; y++)
      y < o ? m = m.replace(Ky.token, f[y]) : y < o + r ? m = m.replace(Qy.token, Lt.transform(f[y])) : m = m.replace(Xy.token, Ko(f[y]));
    return m;
  };
}
const RS = (e) => typeof e == "number" ? 0 : e;
function OS(e) {
  const n = Yy(e);
  return Zy(e)(n.map(RS));
}
const Dr = {
  test: PS,
  parse: Yy,
  createTransformer: Zy,
  getAnimatableNone: OS
}, Jy = (e, n) => (r) => `${r > 0 ? n : e}`;
function e0(e, n) {
  return typeof e == "number" ? (r) => Je(e, n, r) : Lt.test(e) ? Gy(e, n) : e.startsWith("var(") ? Jy(e, n) : n0(e, n);
}
const t0 = (e, n) => {
  const r = [...e], o = r.length, a = e.map((c, f) => e0(c, n[f]));
  return (c) => {
    for (let f = 0; f < o; f++)
      r[f] = a[f](c);
    return r;
  };
}, LS = (e, n) => {
  const r = { ...e, ...n }, o = {};
  for (const a in r)
    e[a] !== void 0 && n[a] !== void 0 && (o[a] = e0(e[a], n[a]));
  return (a) => {
    for (const c in o)
      r[c] = o[c](a);
    return r;
  };
}, n0 = (e, n) => {
  const r = Dr.createTransformer(n), o = el(e), a = el(n);
  return o.numVars === a.numVars && o.numColors === a.numColors && o.numNumbers >= a.numNumbers ? Rr(t0(o.values, a.values), r) : Jy(e, n);
}, os = (e, n, r) => {
  const o = n - e;
  return o === 0 ? 1 : (r - e) / o;
}, _m = (e, n) => (r) => Je(e, n, r);
function DS(e) {
  return typeof e == "number" ? _m : typeof e == "string" ? Lt.test(e) ? Gy : n0 : Array.isArray(e) ? t0 : typeof e == "object" ? LS : _m;
}
function MS(e, n, r) {
  const o = [], a = r || DS(e[0]), c = e.length - 1;
  for (let f = 0; f < c; f++) {
    let m = a(e[f], e[f + 1]);
    if (n) {
      const y = Array.isArray(n) ? n[f] || ft : n;
      m = Rr(y, m);
    }
    o.push(m);
  }
  return o;
}
function r0(e, n, { clamp: r = !0, ease: o, mixer: a } = {}) {
  const c = e.length;
  if (zf(c === n.length), c === 1)
    return () => n[0];
  e[0] > e[c - 1] && (e = [...e].reverse(), n = [...n].reverse());
  const f = MS(n, o, a), m = f.length, y = (g) => {
    let x = 0;
    if (m > 1)
      for (; x < e.length - 2 && !(g < e[x + 1]); x++)
        ;
    const u = os(e[x], e[x + 1], g);
    return f[x](u);
  };
  return r ? (g) => y(Lr(e[0], e[c - 1], g)) : y;
}
function NS(e, n) {
  const r = e[e.length - 1];
  for (let o = 1; o <= n; o++) {
    const a = os(0, n, o);
    e.push(Je(r, 1, a));
  }
}
function FS(e) {
  const n = [0];
  return NS(n, e.length - 1), n;
}
function IS(e, n) {
  return e.map((r) => r * n);
}
function VS(e, n) {
  return e.map(() => n || zy).splice(0, e.length - 1);
}
function tl({ duration: e = 300, keyframes: n, times: r, ease: o = "easeInOut" }) {
  const a = xS(o) ? o.map(vm) : vm(o), c = {
    done: !1,
    value: n[0]
  }, f = IS(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === n.length ? r : FS(n),
    e
  ), m = r0(f, n, {
    ease: Array.isArray(a) ? a : VS(n, a)
  });
  return {
    calculatedDuration: e,
    next: (y) => (c.value = m(y), c.done = y >= e, c)
  };
}
function i0(e, n) {
  return n ? e * (1e3 / n) : 0;
}
const jS = 5;
function o0(e, n, r) {
  const o = Math.max(n - jS, 0);
  return i0(r - e(o), n - o);
}
const Rc = 1e-3, BS = 0.01, wm = 10, zS = 0.05, US = 1;
function $S({ duration: e = 800, bounce: n = 0.25, velocity: r = 0, mass: o = 1 }) {
  let a, c;
  cS(e <= Or(wm));
  let f = 1 - n;
  f = Lr(zS, US, f), e = Lr(BS, wm, er(e)), f < 1 ? (a = (g) => {
    const x = g * f, u = x * e, p = x - r, v = sf(g, f), _ = Math.exp(-u);
    return Rc - p / v * _;
  }, c = (g) => {
    const u = g * f * e, p = u * r + r, v = Math.pow(f, 2) * Math.pow(g, 2) * e, _ = Math.exp(-u), S = sf(Math.pow(g, 2), f);
    return (-a(g) + Rc > 0 ? -1 : 1) * ((p - v) * _) / S;
  }) : (a = (g) => {
    const x = Math.exp(-g * e), u = (g - r) * e + 1;
    return -Rc + x * u;
  }, c = (g) => {
    const x = Math.exp(-g * e), u = (r - g) * (e * e);
    return x * u;
  });
  const m = 5 / e, y = WS(a, c, m);
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
const HS = 12;
function WS(e, n, r) {
  let o = r;
  for (let a = 1; a < HS; a++)
    o = o - e(o) / n(o);
  return o;
}
function sf(e, n) {
  return e * Math.sqrt(1 - n * n);
}
const qS = ["duration", "bounce"], GS = ["stiffness", "damping", "mass"];
function Sm(e, n) {
  return n.some((r) => e[r] !== void 0);
}
function KS(e) {
  let n = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Sm(e, GS) && Sm(e, qS)) {
    const r = $S(e);
    n = {
      ...n,
      ...r,
      velocity: 0,
      mass: 1
    }, n.isResolvedFromDuration = !0;
  }
  return n;
}
function s0({ keyframes: e, restDelta: n, restSpeed: r, ...o }) {
  const a = e[0], c = e[e.length - 1], f = { done: !1, value: a }, { stiffness: m, damping: y, mass: g, velocity: x, duration: u, isResolvedFromDuration: p } = KS(o), v = x ? -er(x) : 0, _ = y / (2 * Math.sqrt(m * g)), S = c - a, k = er(Math.sqrt(m / g)), T = Math.abs(S) < 5;
  r || (r = T ? 0.01 : 2), n || (n = T ? 5e-3 : 0.5);
  let C;
  if (_ < 1) {
    const L = sf(k, _);
    C = (j) => {
      const H = Math.exp(-_ * k * j);
      return c - H * ((v + _ * k * S) / L * Math.sin(L * j) + S * Math.cos(L * j));
    };
  } else if (_ === 1)
    C = (L) => c - Math.exp(-k * L) * (S + (v + k * S) * L);
  else {
    const L = k * Math.sqrt(_ * _ - 1);
    C = (j) => {
      const H = Math.exp(-_ * k * j), Z = Math.min(L * j, 300);
      return c - H * ((v + _ * k * S) * Math.sinh(Z) + L * S * Math.cosh(Z)) / L;
    };
  }
  return {
    calculatedDuration: p && u || null,
    next: (L) => {
      const j = C(L);
      if (p)
        f.done = L >= u;
      else {
        let H = v;
        L !== 0 && (_ < 1 ? H = o0(C, L, j) : H = 0);
        const Z = Math.abs(H) <= r, K = Math.abs(c - j) <= n;
        f.done = Z && K;
      }
      return f.value = f.done ? c : j, f;
    }
  };
}
function km({ keyframes: e, velocity: n = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: a = 10, bounceStiffness: c = 500, modifyTarget: f, min: m, max: y, restDelta: g = 0.5, restSpeed: x }) {
  const u = e[0], p = {
    done: !1,
    value: u
  }, v = (te) => m !== void 0 && te < m || y !== void 0 && te > y, _ = (te) => m === void 0 ? y : y === void 0 || Math.abs(m - te) < Math.abs(y - te) ? m : y;
  let S = r * n;
  const k = u + S, T = f === void 0 ? k : f(k);
  T !== k && (S = T - u);
  const C = (te) => -S * Math.exp(-te / o), L = (te) => T + C(te), j = (te) => {
    const J = C(te), Ee = L(te);
    p.done = Math.abs(J) <= g, p.value = p.done ? T : Ee;
  };
  let H, Z;
  const K = (te) => {
    v(p.value) && (H = te, Z = s0({
      keyframes: [p.value, _(p.value)],
      velocity: o0(L, te, p.value),
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
      return !Z && H === void 0 && (J = !0, j(te), K(te)), H !== void 0 && te > H ? Z.next(te - H) : (!J && j(te), p);
    }
  };
}
const QS = (e) => {
  const n = ({ timestamp: r }) => e(r);
  return {
    start: () => Ke.update(n, !0),
    stop: () => nr(n),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ze.isProcessing ? Ze.timestamp : performance.now()
  };
}, Tm = 2e4;
function Em(e) {
  let n = 0;
  const r = 50;
  let o = e.next(n);
  for (; !o.done && n < Tm; )
    n += r, o = e.next(n);
  return n >= Tm ? 1 / 0 : n;
}
const XS = {
  decay: km,
  inertia: km,
  tween: tl,
  keyframes: tl,
  spring: s0
};
function nl({ autoplay: e = !0, delay: n = 0, driver: r = QS, keyframes: o, type: a = "keyframes", repeat: c = 0, repeatDelay: f = 0, repeatType: m = "loop", onPlay: y, onStop: g, onComplete: x, onUpdate: u, ...p }) {
  let v = 1, _ = !1, S, k;
  const T = () => {
    S && S(), k = new Promise((I) => {
      S = I;
    });
  };
  T();
  let C;
  const L = XS[a] || tl;
  let j;
  L !== tl && typeof o[0] != "number" && (j = r0([0, 100], o, {
    clamp: !1
  }), o = [0, 100]);
  const H = L({ ...p, keyframes: o });
  let Z;
  m === "mirror" && (Z = L({
    ...p,
    keyframes: [...o].reverse(),
    velocity: -(p.velocity || 0)
  }));
  let K = "idle", te = null, J = null, Ee = null;
  H.calculatedDuration === null && c && (H.calculatedDuration = Em(H));
  const { calculatedDuration: Le } = H;
  let pe = 1 / 0, le = 1 / 0;
  Le !== null && (pe = Le + f, le = pe * (c + 1) - f);
  let ae = 0;
  const ge = (I) => {
    if (J === null)
      return;
    v > 0 && (J = Math.min(J, I)), te !== null ? ae = te : ae = (I - J) * v;
    const ne = ae - n, ke = ne < 0;
    ae = Math.max(ne, 0), K === "finished" && te === null && (ae = le);
    let ve = ae, Oe = H;
    if (c) {
      const Qe = ae / pe;
      let xn = Math.floor(Qe), lt = Qe % 1;
      !lt && Qe >= 1 && (lt = 1), lt === 1 && xn--, xn = Math.min(xn, c + 1);
      const _n = !!(xn % 2);
      _n && (m === "reverse" ? (lt = 1 - lt, f && (lt -= f / pe)) : m === "mirror" && (Oe = Z));
      let wn = Lr(0, 1, lt);
      ae > le && (wn = m === "reverse" && _n ? 1 : 0), ve = wn * pe;
    }
    const we = ke ? { done: !1, value: o[0] } : Oe.next(ve);
    j && (we.value = j(we.value));
    let { done: Pe } = we;
    !ke && Le !== null && (Pe = ae >= le);
    const Ae = te === null && (K === "finished" || K === "running" && Pe || v < 0 && ae <= 0);
    return u && u(we.value), Ae && X(), we;
  }, Ce = () => {
    C && C.stop(), C = void 0;
  }, Se = () => {
    K = "idle", Ce(), T(), J = Ee = null;
  }, X = () => {
    K = "finished", x && x(), Ce(), T();
  }, ue = () => {
    if (_)
      return;
    C || (C = r(ge));
    const I = C.now();
    y && y(), te !== null ? J = I - te : (!J || K === "finished") && (J = I), Ee = J, te = null, K = "running", C.start();
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
      I = Or(I), ae = I, te !== null || !C || v === 0 ? te = I : J = C.now() - I / v;
    },
    get duration() {
      const I = H.calculatedDuration === null ? Em(H) : H.calculatedDuration;
      return er(I);
    },
    get speed() {
      return v;
    },
    set speed(I) {
      I === v || !C || (v = I, b.time = er(ae));
    },
    get state() {
      return K;
    },
    play: ue,
    pause: () => {
      K = "paused", te = ae;
    },
    stop: () => {
      _ = !0, K !== "idle" && (K = "idle", g && g(), Se());
    },
    cancel: () => {
      Ee !== null && ge(Ee), Se();
    },
    complete: () => {
      K = "finished";
    },
    sample: (I) => (J = 0, ge(I))
  };
  return b;
}
const YS = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), ba = 10, ZS = 2e4, JS = (e, n) => n.type === "spring" || e === "backgroundColor" || !Fy(n.ease);
function ek(e, n, { onUpdate: r, onComplete: o, ...a }) {
  if (!(jy.waapi() && YS.has(n) && !a.repeatDelay && a.repeatType !== "mirror" && a.damping !== 0 && a.type !== "inertia"))
    return !1;
  let f = !1, m, y;
  const g = () => {
    y = new Promise((T) => {
      m = T;
    });
  };
  g();
  let { keyframes: x, duration: u = 300, ease: p, times: v } = a;
  if (JS(n, a)) {
    const T = nl({
      ...a,
      repeat: 0,
      delay: 0
    });
    let C = { done: !1, value: x[0] };
    const L = [];
    let j = 0;
    for (; !C.done && j < ZS; )
      C = T.sample(j), L.push(C.value), j += ba;
    v = void 0, x = L, u = j - ba, p = "linear";
  }
  const _ = dS(e.owner.current, n, x, {
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
  }), S = () => _.cancel(), k = () => {
    Ke.update(S), m(), g();
  };
  return _.onfinish = () => {
    e.set(pS(x, a)), o && o(), k();
  }, {
    then(T, C) {
      return y.then(T, C);
    },
    get time() {
      return er(_.currentTime || 0);
    },
    set time(T) {
      _.currentTime = Or(T);
    },
    get speed() {
      return _.playbackRate;
    },
    set speed(T) {
      _.playbackRate = T;
    },
    get duration() {
      return er(u);
    },
    play: () => {
      f || (_.play(), nr(S));
    },
    pause: () => _.pause(),
    stop: () => {
      if (f = !0, _.playState === "idle")
        return;
      const { currentTime: T } = _;
      if (T) {
        const C = nl({
          ...a,
          autoplay: !1
        });
        e.setWithVelocity(C.sample(T - ba).value, C.sample(T).value, ba);
      }
      k();
    },
    complete: () => _.finish(),
    cancel: k
  };
}
function tk({ keyframes: e, delay: n, onUpdate: r, onComplete: o }) {
  const a = () => (r && r(e[e.length - 1]), o && o(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: ft,
    pause: ft,
    stop: ft,
    then: (c) => (c(), Promise.resolve()),
    cancel: ft,
    complete: ft
  });
  return n ? nl({
    keyframes: [0, 1],
    duration: 0,
    delay: n,
    onComplete: a
  }) : a();
}
const nk = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, rk = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ik = {
  type: "keyframes",
  duration: 0.8
}, ok = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, sk = (e, { keyframes: n }) => n.length > 2 ? ik : Jr.has(e) ? e.startsWith("scale") ? rk(n[1]) : nk : ok, af = (e, n) => e === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Dr.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url(")), ak = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function lk(e) {
  const [n, r] = e.slice(0, -1).split("(");
  if (n === "drop-shadow")
    return e;
  const [o] = r.match(Sl) || [];
  if (!o)
    return e;
  const a = r.replace(o, "");
  let c = ak.has(n) ? 1 : 0;
  return o !== r && (c *= 100), n + "(" + c + a + ")";
}
const uk = /([a-z-]*)\(.*?\)/g, lf = {
  ...Dr,
  getAnimatableNone: (e) => {
    const n = e.match(uk);
    return n ? n.map(lk).join(" ") : e;
  }
}, ck = {
  ...vy,
  // Color props
  color: Lt,
  backgroundColor: Lt,
  outlineColor: Lt,
  fill: Lt,
  stroke: Lt,
  // Border props
  borderColor: Lt,
  borderTopColor: Lt,
  borderRightColor: Lt,
  borderBottomColor: Lt,
  borderLeftColor: Lt,
  filter: lf,
  WebkitFilter: lf
}, Wf = (e) => ck[e];
function a0(e, n) {
  let r = Wf(e);
  return r !== lf && (r = Dr), r.getAnimatableNone ? r.getAnimatableNone(n) : void 0;
}
const l0 = (e) => /^0[^.\s]+$/.test(e);
function fk(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || l0(e);
}
function dk(e, n, r, o) {
  const a = af(n, r);
  let c;
  Array.isArray(r) ? c = [...r] : c = [null, r];
  const f = o.from !== void 0 ? o.from : e.get();
  let m;
  const y = [];
  for (let g = 0; g < c.length; g++)
    c[g] === null && (c[g] = g === 0 ? f : c[g - 1]), fk(c[g]) && y.push(g), typeof c[g] == "string" && c[g] !== "none" && c[g] !== "0" && (m = c[g]);
  if (a && y.length && m)
    for (let g = 0; g < y.length; g++) {
      const x = y[g];
      c[x] = a0(n, m);
    }
  return c;
}
function pk({ when: e, delay: n, delayChildren: r, staggerChildren: o, staggerDirection: a, repeat: c, repeatType: f, repeatDelay: m, from: y, elapsed: g, ...x }) {
  return !!Object.keys(x).length;
}
function u0(e, n) {
  return e[n] || e.default || e;
}
const qf = (e, n, r, o = {}) => (a) => {
  const c = u0(o, e) || {}, f = c.delay || o.delay || 0;
  let { elapsed: m = 0 } = o;
  m = m - Or(f);
  const y = dk(n, e, r, c), g = y[0], x = y[y.length - 1], u = af(e, g), p = af(e, x);
  let v = {
    keyframes: y,
    velocity: n.getVelocity(),
    ease: "easeOut",
    ...c,
    delay: -m,
    onUpdate: (_) => {
      n.set(_), c.onUpdate && c.onUpdate(_);
    },
    onComplete: () => {
      a(), c.onComplete && c.onComplete();
    }
  };
  if (pk(c) || (v = {
    ...v,
    ...sk(e, v)
  }), v.duration && (v.duration = Or(v.duration)), v.repeatDelay && (v.repeatDelay = Or(v.repeatDelay)), !u || !p || fS.current || c.type === !1)
    return tk(v);
  if (n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate) {
    const _ = ek(n, e, v);
    if (_)
      return _;
  }
  return nl(v);
};
function rl(e) {
  return !!($t(e) && e.add);
}
const hk = (e) => /^\-?\d*\.?\d+$/.test(e);
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
const mk = (e) => !isNaN(parseFloat(e));
class gk {
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
      const { delta: c, timestamp: f } = Ze;
      this.lastUpdated !== f && (this.timeDelta = c, this.lastUpdated = f, Ke.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), a && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Ke.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: o }) => {
      o !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = n, this.canTrackVelocity = mk(this.current), this.owner = r.owner;
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
      i0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Ui(e, n) {
  return new gk(e, n);
}
const c0 = (e) => (n) => n.test(e), yk = {
  test: (e) => e === "auto",
  parse: (e) => e
}, f0 = [ei, ye, Mn, Er, kw, Sw, yk], jo = (e) => f0.find(c0(e)), vk = [...f0, Lt, Dr], xk = (e) => vk.find(c0(e));
function _k(e, n, r) {
  e.hasValue(n) ? e.getValue(n).set(r) : e.addValue(n, Ui(r));
}
function wk(e, n) {
  const r = El(e, n);
  let { transitionEnd: o = {}, transition: a = {}, ...c } = r ? e.makeTargetAnimatable(r, !1) : {};
  c = { ...c, ...o };
  for (const f in c) {
    const m = Iw(c[f]);
    _k(e, f, m);
  }
}
function Sk(e, n, r) {
  var o, a;
  const c = Object.keys(n).filter((m) => !e.hasValue(m)), f = c.length;
  if (f)
    for (let m = 0; m < f; m++) {
      const y = c[m], g = n[y];
      let x = null;
      Array.isArray(g) && (x = g[0]), x === null && (x = (a = (o = r[y]) !== null && o !== void 0 ? o : e.readValue(y)) !== null && a !== void 0 ? a : n[y]), x != null && (typeof x == "string" && (hk(x) || l0(x)) ? x = parseFloat(x) : !xk(x) && Dr.test(g) && (x = a0(y, g)), e.addValue(y, Ui(x, { owner: e })), r[y] === void 0 && (r[y] = x), x !== null && e.setBaseTarget(y, x));
    }
}
function kk(e, n) {
  return n ? (n[e] || n.default || n).from : void 0;
}
function Tk(e, n, r) {
  const o = {};
  for (const a in e) {
    const c = kk(a, n);
    if (c !== void 0)
      o[a] = c;
    else {
      const f = r.getValue(a);
      f && (o[a] = f.get());
    }
  }
  return o;
}
function Ek({ protectedKeys: e, needsAnimating: n }, r) {
  const o = e.hasOwnProperty(r) && n[r] !== !0;
  return n[r] = !1, o;
}
function d0(e, n, { delay: r = 0, transitionOverride: o, type: a } = {}) {
  let { transition: c = e.getDefaultTransition(), transitionEnd: f, ...m } = e.makeTargetAnimatable(n);
  const y = e.getValue("willChange");
  o && (c = o);
  const g = [], x = a && e.animationState && e.animationState.getState()[a];
  for (const u in m) {
    const p = e.getValue(u), v = m[u];
    if (!p || v === void 0 || x && Ek(x, u))
      continue;
    const _ = { delay: r, elapsed: 0, ...c };
    if (window.HandoffAppearAnimations && !p.hasAnimated) {
      const k = e.getProps()[uS];
      k && (_.elapsed = window.HandoffAppearAnimations(k, u, p, Ke));
    }
    p.start(qf(u, p, v, e.shouldReduceMotion && Jr.has(u) ? { type: !1 } : _));
    const S = p.animation;
    rl(y) && (y.add(u), S.then(() => y.remove(u))), g.push(S);
  }
  return f && Promise.all(g).then(() => {
    f && wk(e, f);
  }), g;
}
function uf(e, n, r = {}) {
  const o = El(e, n, r.custom);
  let { transition: a = e.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (a = r.transitionOverride);
  const c = o ? () => Promise.all(d0(e, o, r)) : () => Promise.resolve(), f = e.variantChildren && e.variantChildren.size ? (y = 0) => {
    const { delayChildren: g = 0, staggerChildren: x, staggerDirection: u } = a;
    return Ck(e, n, g + y, x, u, r);
  } : () => Promise.resolve(), { when: m } = a;
  if (m) {
    const [y, g] = m === "beforeChildren" ? [c, f] : [f, c];
    return y().then(() => g());
  } else
    return Promise.all([c(), f(r.delay)]);
}
function Ck(e, n, r = 0, o = 0, a = 1, c) {
  const f = [], m = (e.variantChildren.size - 1) * o, y = a === 1 ? (g = 0) => g * o : (g = 0) => m - g * o;
  return Array.from(e.variantChildren).sort(Ak).forEach((g, x) => {
    g.notify("AnimationStart", n), f.push(uf(g, n, {
      ...c,
      delay: r + y(x)
    }).then(() => g.notify("AnimationComplete", n)));
  }), Promise.all(f);
}
function Ak(e, n) {
  return e.sortNodePosition(n);
}
function bk(e, n, r = {}) {
  e.notify("AnimationStart", n);
  let o;
  if (Array.isArray(n)) {
    const a = n.map((c) => uf(e, c, r));
    o = Promise.all(a);
  } else if (typeof n == "string")
    o = uf(e, n, r);
  else {
    const a = typeof n == "function" ? El(e, n, r.custom) : n;
    o = Promise.all(d0(e, a, r));
  }
  return o.then(() => e.notify("AnimationComplete", n));
}
const Pk = [...Of].reverse(), Rk = Of.length;
function Ok(e) {
  return (n) => Promise.all(n.map(({ animation: r, options: o }) => bk(e, r, o)));
}
function Lk(e) {
  let n = Ok(e);
  const r = Mk();
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
    let _ = {}, S = 1 / 0;
    for (let T = 0; T < Rk; T++) {
      const C = Pk[T], L = r[C], j = x[C] !== void 0 ? x[C] : u[C], H = ts(j), Z = C === g ? L.isActive : null;
      Z === !1 && (S = T);
      let K = j === u[C] && j !== x[C] && H;
      if (K && o && e.manuallyAnimateOnMount && (K = !1), L.protectedKeys = { ..._ }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && Z === null || // If we didn't and don't have any defined prop for this animation type
      !j && !L.prevProp || // Or if the prop doesn't define an animation
      _l(j) || typeof j == "boolean")
        continue;
      const te = Dk(L.prevProp, j);
      let J = te || // If we're making this variant active, we want to always make it active
      C === g && L.isActive && !K && H || // If we removed a higher-priority variant (i is in reverse order)
      T > S && H;
      const Ee = Array.isArray(j) ? j : [j];
      let Le = Ee.reduce(a, {});
      Z === !1 && (Le = {});
      const { prevResolvedValues: pe = {} } = L, le = {
        ...pe,
        ...Le
      }, ae = (ge) => {
        J = !0, v.delete(ge), L.needsAnimating[ge] = !0;
      };
      for (const ge in le) {
        const Ce = Le[ge], Se = pe[ge];
        _.hasOwnProperty(ge) || (Ce !== Se ? Ja(Ce) && Ja(Se) ? !My(Ce, Se) || te ? ae(ge) : L.protectedKeys[ge] = !0 : Ce !== void 0 ? ae(ge) : v.add(ge) : Ce !== void 0 && v.has(ge) ? ae(ge) : L.protectedKeys[ge] = !0);
      }
      L.prevProp = j, L.prevResolvedValues = Le, L.isActive && (_ = { ..._, ...Le }), o && e.blockInitialAnimation && (J = !1), J && !K && p.push(...Ee.map((ge) => ({
        animation: ge,
        options: { type: C, ...y }
      })));
    }
    if (v.size) {
      const T = {};
      v.forEach((C) => {
        const L = e.getBaseTarget(C);
        L !== void 0 && (T[C] = L);
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
      var _;
      return (_ = v.animationState) === null || _ === void 0 ? void 0 : _.setActive(y, g);
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
function Dk(e, n) {
  return typeof n == "string" ? n !== e : Array.isArray(n) ? !My(n, e) : !1;
}
function Qr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Mk() {
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
class Nk extends Mr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(n) {
    super(n), n.animationState || (n.animationState = Lk(n));
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
let Fk = 0;
class Ik extends Mr {
  constructor() {
    super(...arguments), this.id = Fk++;
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
const Vk = {
  animation: {
    Feature: Nk
  },
  exit: {
    Feature: Ik
  }
}, Cm = (e, n) => Math.abs(e - n);
function jk(e, n) {
  const r = Cm(e.x, n.x), o = Cm(e.y, n.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class p0 {
  constructor(n, r, { transformPagePoint: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Lc(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, u = jk(g.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !u)
        return;
      const { point: p } = g, { timestamp: v } = Ze;
      this.history.push({ ...p, timestamp: v });
      const { onStart: _, onMove: S } = this.handlers;
      x || (_ && _(this.lastMoveEvent, g), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, g);
    }, this.handlePointerMove = (g, x) => {
      this.lastMoveEvent = g, this.lastMoveEventInfo = Oc(x, this.transformPagePoint), Ke.update(this.updatePoint, !0);
    }, this.handlePointerUp = (g, x) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: u, onSessionEnd: p } = this.handlers, v = Lc(g.type === "pointercancel" ? this.lastMoveEventInfo : Oc(x, this.transformPagePoint), this.history);
      this.startEvent && u && u(g, v), p && p(g, v);
    }, !by(n))
      return;
    this.handlers = r, this.transformPagePoint = o;
    const a = kl(n), c = Oc(a, this.transformPagePoint), { point: f } = c, { timestamp: m } = Ze;
    this.history = [{ ...f, timestamp: m }];
    const { onSessionStart: y } = r;
    y && y(n, Lc(c, this.history)), this.removeListeners = Rr(Jn(window, "pointermove", this.handlePointerMove), Jn(window, "pointerup", this.handlePointerUp), Jn(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), nr(this.updatePoint);
  }
}
function Oc(e, n) {
  return n ? { point: n(e.point) } : e;
}
function Am(e, n) {
  return { x: e.x - n.x, y: e.y - n.y };
}
function Lc({ point: e }, n) {
  return {
    point: e,
    delta: Am(e, h0(n)),
    offset: Am(e, Bk(n)),
    velocity: zk(n, 0.1)
  };
}
function Bk(e) {
  return e[0];
}
function h0(e) {
  return e[e.length - 1];
}
function zk(e, n) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, o = null;
  const a = h0(e);
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
  e.origin = o, e.originPoint = Je(n.min, n.max, e.origin), e.scale = Qt(r) / Qt(n), (cf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Je(r.min, r.max, e.origin) - e.originPoint, (cf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Qo(e, n, r, o) {
  bm(e.x, n.x, r.x, o ? o.originX : void 0), bm(e.y, n.y, r.y, o ? o.originY : void 0);
}
function Pm(e, n, r) {
  e.min = r.min + n.min, e.max = e.min + Qt(n);
}
function Uk(e, n, r) {
  Pm(e.x, n.x, r.x), Pm(e.y, n.y, r.y);
}
function Rm(e, n, r) {
  e.min = n.min - r.min, e.max = e.min + Qt(n);
}
function Xo(e, n, r) {
  Rm(e.x, n.x, r.x), Rm(e.y, n.y, r.y);
}
function $k(e, { min: n, max: r }, o) {
  return n !== void 0 && e < n ? e = o ? Je(n, e, o.min) : Math.max(e, n) : r !== void 0 && e > r && (e = o ? Je(r, e, o.max) : Math.min(e, r)), e;
}
function Om(e, n, r) {
  return {
    min: n !== void 0 ? e.min + n : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function Hk(e, { top: n, left: r, bottom: o, right: a }) {
  return {
    x: Om(e.x, r, a),
    y: Om(e.y, n, o)
  };
}
function Lm(e, n) {
  let r = n.min - e.min, o = n.max - e.max;
  return n.max - n.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
}
function Wk(e, n) {
  return {
    x: Lm(e.x, n.x),
    y: Lm(e.y, n.y)
  };
}
function qk(e, n) {
  let r = 0.5;
  const o = Qt(e), a = Qt(n);
  return a > o ? r = os(n.min, n.max - o, e.min) : o > a && (r = os(e.min, e.max - a, n.min)), Lr(0, 1, r);
}
function Gk(e, n) {
  const r = {};
  return n.min !== void 0 && (r.min = n.min - e.min), n.max !== void 0 && (r.max = n.max - e.min), r;
}
const ff = 0.35;
function Kk(e = ff) {
  return e === !1 ? e = 0 : e === !0 && (e = ff), {
    x: Dm(e, "left", "right"),
    y: Dm(e, "top", "bottom")
  };
}
function Dm(e, n, r) {
  return {
    min: Mm(e, n),
    max: Mm(e, r)
  };
}
function Mm(e, n) {
  return typeof e == "number" ? e : e[n] || 0;
}
const Nm = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Mi = () => ({
  x: Nm(),
  y: Nm()
}), Fm = () => ({ min: 0, max: 0 }), it = () => ({
  x: Fm(),
  y: Fm()
});
function bn(e) {
  return [e("x"), e("y")];
}
function m0({ top: e, left: n, right: r, bottom: o }) {
  return {
    x: { min: n, max: r },
    y: { min: e, max: o }
  };
}
function Qk({ x: e, y: n }) {
  return { top: n.min, right: e.max, bottom: n.max, left: e.min };
}
function Xk(e, n) {
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
function Xr(e) {
  return df(e) || g0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function g0(e) {
  return Im(e.x) || Im(e.y);
}
function Im(e) {
  return e && e !== "0%";
}
function il(e, n, r) {
  const o = e - r, a = n * o;
  return r + a;
}
function Vm(e, n, r, o, a) {
  return a !== void 0 && (e = il(e, a, o)), il(e, r, o) + n;
}
function pf(e, n = 0, r = 1, o, a) {
  e.min = Vm(e.min, n, r, o, a), e.max = Vm(e.max, n, r, o, a);
}
function y0(e, { x: n, y: r }) {
  pf(e.x, n.translate, n.scale, n.originPoint), pf(e.y, r.translate, r.scale, r.originPoint);
}
function Yk(e, n, r, o = !1) {
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
    }), f && (n.x *= f.x.scale, n.y *= f.y.scale, y0(e, f)), o && Xr(c.latestValues) && Ni(e, c.latestValues));
  }
  n.x = jm(n.x), n.y = jm(n.y);
}
function jm(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Ar(e, n) {
  e.min = e.min + n, e.max = e.max + n;
}
function Bm(e, n, [r, o, a]) {
  const c = n[a] !== void 0 ? n[a] : 0.5, f = Je(e.min, e.max, c);
  pf(e, n[r], n[o], f, n.scale);
}
const Zk = ["x", "scaleX", "originX"], Jk = ["y", "scaleY", "originY"];
function Ni(e, n) {
  Bm(e.x, n, Zk), Bm(e.y, n, Jk);
}
function v0(e, n) {
  return m0(Xk(e.getBoundingClientRect(), n));
}
function eT(e, n, r) {
  const o = v0(e, r), { scroll: a } = n;
  return a && (Ar(o.x, a.offset.x), Ar(o.y, a.offset.y)), o;
}
const tT = /* @__PURE__ */ new WeakMap();
class nT {
  constructor(n) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = it(), this.visualElement = n;
  }
  start(n, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const a = (y) => {
      this.stopAnimation(), r && this.snapToCursor(kl(y, "page").point);
    }, c = (y, g) => {
      const { drag: x, dragPropagation: u, onDragStart: p } = this.getProps();
      if (x && !u && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ry(x), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), bn((_) => {
        let S = this.getAxisMotionValue(_).get() || 0;
        if (Mn.test(S)) {
          const { projection: k } = this.visualElement;
          if (k && k.layout) {
            const T = k.layout.layoutBox[_];
            T && (S = Qt(T) * (parseFloat(S) / 100));
          }
        }
        this.originPoint[_] = S;
      }), p && Ke.update(() => p(y, g), !1, !0);
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, f = (y, g) => {
      const { dragPropagation: x, dragDirectionLock: u, onDirectionLock: p, onDrag: v } = this.getProps();
      if (!x && !this.openGlobalLock)
        return;
      const { offset: _ } = g;
      if (u && this.currentDirection === null) {
        this.currentDirection = rT(_), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", g.point, _), this.updateAxis("y", g.point, _), this.visualElement.render(), v && v(y, g);
    }, m = (y, g) => this.stop(y, g);
    this.panSession = new p0(n, {
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
    this.constraints && this.constraints[n] && (f = $k(f, this.constraints[n], this.elastic[n])), c.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: n, dragElastic: r } = this.getProps(), { layout: o } = this.visualElement.projection || {}, a = this.constraints;
    n && Li(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = Hk(o.layoutBox, n) : this.constraints = !1, this.elastic = Kk(r), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && bn((c) => {
      this.getAxisMotionValue(c) && (this.constraints[c] = Gk(o.layoutBox[c], this.constraints[c]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: r } = this.getProps();
    if (!n || !Li(n))
      return !1;
    const o = n.current, { projection: a } = this.visualElement;
    if (!a || !a.layout)
      return !1;
    const c = eT(o, a.root, this.visualElement.getTransformPagePoint());
    let f = Wk(a.layout.layoutBox, c);
    if (r) {
      const m = r(Qk(f));
      this.hasMutatedConstraints = !!m, m && (f = m0(m));
    }
    return f;
  }
  startAnimation(n) {
    const { drag: r, dragMomentum: o, dragElastic: a, dragTransition: c, dragSnapToOrigin: f, onDragTransitionEnd: m } = this.getProps(), y = this.constraints || {}, g = bn((x) => {
      if (!Pa(x, r, this.currentDirection))
        return;
      let u = y && y[x] || {};
      f && (u = { min: 0, max: 0 });
      const p = a ? 200 : 1e6, v = a ? 40 : 1e7, _ = {
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
      return this.startAxisValueAnimation(x, _);
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
        c.set(n[r] - Je(f, m, 0.5));
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
        a[f] = qk({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), bn((f) => {
      if (!Pa(f, n, null))
        return;
      const m = this.getAxisMotionValue(f), { min: y, max: g } = this.constraints[f];
      m.set(Je(y, g, a[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    tT.set(this.visualElement, this);
    const n = this.visualElement.current, r = Jn(n, "pointerdown", (y) => {
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
function rT(e, n = 10) {
  let r = null;
  return Math.abs(e.y) > n ? r = "y" : Math.abs(e.x) > n && (r = "x"), r;
}
class iT extends Mr {
  constructor(n) {
    super(n), this.removeGroupControls = ft, this.removeListeners = ft, this.controls = new nT(n);
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ft;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const zm = (e) => (n, r) => {
  e && Ke.update(() => e(n, r));
};
class oT extends Mr {
  constructor() {
    super(...arguments), this.removePointerDownListener = ft;
  }
  onPointerDown(n) {
    this.session = new p0(n, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
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
    this.removePointerDownListener = Jn(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function sT() {
  const e = N.useContext(vl);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = e, a = N.useId();
  return N.useEffect(() => o(a), []), !n && r ? [!1, () => r && r(a)] : [!0];
}
const ja = {
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
function Um(e, n) {
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
    const r = Um(e, n.target.x), o = Um(e, n.target.y);
    return `${r}% ${o}%`;
  }
}, aT = {
  correct: (e, { treeScale: n, projectionDelta: r }) => {
    const o = e, a = Dr.parse(e);
    if (a.length > 5)
      return o;
    const c = Dr.createTransformer(e), f = typeof a[0] != "number" ? 1 : 0, m = r.x.scale * n.x, y = r.y.scale * n.y;
    a[0 + f] /= m, a[1 + f] /= y;
    const g = Je(m, y, 0.5);
    return typeof a[2 + f] == "number" && (a[2 + f] /= g), typeof a[3 + f] == "number" && (a[3 + f] /= g), c(a);
  }
};
class lT extends yn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: n, layoutGroup: r, switchLayoutGroup: o, layoutId: a } = this.props, { projection: c } = n;
    mw(uT), c && (r.group && r.group.add(c), o && o.register && a && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), ja.hasEverUpdated = !0;
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
function x0(e) {
  const [n, r] = sT(), o = N.useContext(rs);
  return yn.createElement(lT, { ...e, layoutGroup: o, switchLayoutGroup: N.useContext(py), isPresent: n, safeToRemove: r });
}
const uT = {
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
  boxShadow: aT
}, _0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], cT = _0.length, $m = (e) => typeof e == "string" ? parseFloat(e) : e, Hm = (e) => typeof e == "number" || ye.test(e);
function fT(e, n, r, o, a, c) {
  a ? (e.opacity = Je(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    dT(o)
  ), e.opacityExit = Je(n.opacity !== void 0 ? n.opacity : 1, 0, pT(o))) : c && (e.opacity = Je(n.opacity !== void 0 ? n.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
  for (let f = 0; f < cT; f++) {
    const m = `border${_0[f]}Radius`;
    let y = Wm(n, m), g = Wm(r, m);
    if (y === void 0 && g === void 0)
      continue;
    y || (y = 0), g || (g = 0), y === 0 || g === 0 || Hm(y) === Hm(g) ? (e[m] = Math.max(Je($m(y), $m(g), o), 0), (Mn.test(g) || Mn.test(y)) && (e[m] += "%")) : e[m] = g;
  }
  (n.rotate || r.rotate) && (e.rotate = Je(n.rotate || 0, r.rotate || 0, o));
}
function Wm(e, n) {
  return e[n] !== void 0 ? e[n] : e.borderRadius;
}
const dT = w0(0, 0.5, Uf), pT = w0(0.5, 0.95, ft);
function w0(e, n, r) {
  return (o) => o < e ? 0 : o > n ? 1 : r(os(e, n, o));
}
function qm(e, n) {
  e.min = n.min, e.max = n.max;
}
function nn(e, n) {
  qm(e.x, n.x), qm(e.y, n.y);
}
function Gm(e, n, r, o, a) {
  return e -= n, e = il(e, 1 / r, o), a !== void 0 && (e = il(e, 1 / a, o)), e;
}
function hT(e, n = 0, r = 1, o = 0.5, a, c = e, f = e) {
  if (Mn.test(n) && (n = parseFloat(n), n = Je(f.min, f.max, n / 100) - f.min), typeof n != "number")
    return;
  let m = Je(c.min, c.max, o);
  e === c && (m -= n), e.min = Gm(e.min, n, r, m, a), e.max = Gm(e.max, n, r, m, a);
}
function Km(e, n, [r, o, a], c, f) {
  hT(e, n[r], n[o], n[a], n.scale, c, f);
}
const mT = ["x", "scaleX", "originX"], gT = ["y", "scaleY", "originY"];
function Qm(e, n, r, o) {
  Km(e.x, n, mT, r ? r.x : void 0, o ? o.x : void 0), Km(e.y, n, gT, r ? r.y : void 0, o ? o.y : void 0);
}
function Xm(e) {
  return e.translate === 0 && e.scale === 1;
}
function S0(e) {
  return Xm(e.x) && Xm(e.y);
}
function hf(e, n) {
  return e.x.min === n.x.min && e.x.max === n.x.max && e.y.min === n.y.min && e.y.max === n.y.max;
}
function Ym(e) {
  return Qt(e.x) / Qt(e.y);
}
class yT {
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
function Zm(e, n, r) {
  let o = "";
  const a = e.x.translate / n.x, c = e.y.translate / n.y;
  if ((a || c) && (o = `translate3d(${a}px, ${c}px, 0) `), (n.x !== 1 || n.y !== 1) && (o += `scale(${1 / n.x}, ${1 / n.y}) `), r) {
    const { rotate: y, rotateX: g, rotateY: x } = r;
    y && (o += `rotate(${y}deg) `), g && (o += `rotateX(${g}deg) `), x && (o += `rotateY(${x}deg) `);
  }
  const f = e.x.scale * n.x, m = e.y.scale * n.y;
  return (f !== 1 || m !== 1) && (o += `scale(${f}, ${m})`), o || "none";
}
const vT = (e, n) => e.depth - n.depth;
class xT {
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
    this.isDirty && this.children.sort(vT), this.isDirty = !1, this.children.forEach(n);
  }
}
function _T(e, n) {
  const r = performance.now(), o = ({ timestamp: a }) => {
    const c = a - r;
    c >= n && (nr(o), e(c - n));
  };
  return Ke.read(o, !0), () => nr(o);
}
function wT(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function ST(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function kT(e, n, r) {
  const o = $t(e) ? e : Ui(e);
  return o.start(qf("", o, n, r)), o.animation;
}
const Jm = ["", "X", "Y", "Z"], eg = 1e3;
let TT = 0;
const Yr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function k0({ attachResizeListener: e, defaultParent: n, measureScroll: r, checkIsScrollRoot: o, resetTransform: a }) {
  return class {
    constructor(f = {}, m = n == null ? void 0 : n()) {
      this.id = TT++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Yr.totalNodes = Yr.resolvedTargetDeltas = Yr.recalculatedProjection = 0, this.nodes.forEach(AT), this.nodes.forEach(LT), this.nodes.forEach(DT), this.nodes.forEach(bT), wT(Yr);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xT());
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
      this.isSVG = ST(f), this.instance = f;
      const { layoutId: y, layout: g, visualElement: x } = this.options;
      if (x && !x.current && x.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), m && (g || y) && (this.isLayoutDirty = !0), e) {
        let u;
        const p = () => this.root.updateBlockedByResize = !1;
        e(f, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = _T(p, 250), ja.hasAnimatedSinceResize && (ja.hasAnimatedSinceResize = !1, this.nodes.forEach(ng));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && x && (y || g) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: p, hasRelativeTargetChanged: v, layout: _ }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || x.getDefaultTransition() || VT, { onLayoutAnimationStart: k, onLayoutAnimationComplete: T } = x.getProps(), C = !this.targetLayout || !hf(this.targetLayout, _) || v, L = !p && v;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || L || p && (C || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, L);
          const j = {
            ...u0(S, "layout"),
            onPlay: k,
            onComplete: T
          };
          (x.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0, j.type = !1), this.startAnimation(j);
        } else
          p || ng(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = _;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(MT), this.animationId++);
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
      this.isUpdating || this.nodes.forEach(RT), this.isUpdating = !1, this.nodes.forEach(OT), this.nodes.forEach(ET), this.nodes.forEach(CT), this.clearAllSnapshots();
      const m = performance.now();
      Ze.delta = Lr(0, 1e3 / 60, m - Ze.timestamp), Ze.timestamp = m, Ze.isProcessing = !0, Vi.update.process(Ze), Vi.preRender.process(Ze), Vi.render.process(Ze), Ze.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(PT), this.sharedNodes.forEach(NT);
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
      this.layout = this.measure(!1), this.layoutCorrected = it(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const f = this.isLayoutDirty || this.shouldResetTransform, m = this.projectionDelta && !S0(this.projectionDelta), y = this.getTransformTemplate(), g = y ? y(this.latestValues, "") : void 0, x = g !== this.prevTransformTemplateValue;
      f && (m || Xr(this.latestValues) || x) && (a(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return f && (y = this.removeTransform(y)), jT(y), {
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
        return it();
      const m = f.measureViewportBox(), { scroll: y } = this.root;
      return y && (Ar(m.x, y.offset.x), Ar(m.y, y.offset.y)), m;
    }
    removeElementScroll(f) {
      const m = it();
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
      const y = it();
      nn(y, f);
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        !m && x.options.layoutScroll && x.scroll && x !== x.root && Ni(y, {
          x: -x.scroll.offset.x,
          y: -x.scroll.offset.y
        }), Xr(x.latestValues) && Ni(y, x.latestValues);
      }
      return Xr(this.latestValues) && Ni(y, this.latestValues), y;
    }
    removeTransform(f) {
      const m = it();
      nn(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!g.instance || !Xr(g.latestValues))
          continue;
        df(g.latestValues) && g.updateSnapshot();
        const x = it(), u = g.measurePageBox();
        nn(x, u), Qm(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, x);
      }
      return Xr(this.latestValues) && Qm(m, this.latestValues), m;
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
      const { layout: u, layoutId: p } = this.options;
      if (!(!this.layout || !(u || p))) {
        if (this.resolvedRelativeTargetAt = Ze.timestamp, !this.targetDelta && !this.relativeTarget) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = it(), this.relativeTargetOrigin = it(), Xo(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = it(), this.targetWithTransforms = it()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Uk(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nn(this.target, this.layout.layoutBox), y0(this.target, this.targetDelta)) : nn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = it(), this.relativeTargetOrigin = it(), Xo(this.relativeTargetOrigin, this.target, v.target), nn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Yr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || df(this.parent.latestValues) || g0(this.parent.latestValues)))
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
      nn(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, v = this.treeScale.y;
      Yk(this.layoutCorrected, this.treeScale, this.path, y), m.layout && !m.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (m.target = m.layout.layoutBox);
      const { target: _ } = m;
      if (!_) {
        this.projectionTransform && (this.projectionDelta = Mi(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Mi(), this.projectionDeltaWithTransform = Mi());
      const S = this.projectionTransform;
      Qo(this.projectionDelta, this.layoutCorrected, _, this.latestValues), this.projectionTransform = Zm(this.projectionDelta, this.treeScale), (this.projectionTransform !== S || this.treeScale.x !== p || this.treeScale.y !== v) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", _)), Yr.recalculatedProjection++;
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
      const y = this.snapshot, g = y ? y.latestValues : {}, x = { ...this.latestValues }, u = Mi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const p = it(), v = y ? y.source : void 0, _ = this.layout ? this.layout.source : void 0, S = v !== _, k = this.getStack(), T = !k || k.members.length <= 1, C = !!(S && !T && this.options.crossfade === !0 && !this.path.some(IT));
      this.animationProgress = 0;
      let L;
      this.mixTargetDelta = (j) => {
        const H = j / 1e3;
        rg(u.x, f.x, H), rg(u.y, f.y, H), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xo(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), FT(this.relativeTarget, this.relativeTargetOrigin, p, H), L && hf(this.relativeTarget, L) && (this.isProjectionDirty = !1), L || (L = it()), nn(L, this.relativeTarget)), S && (this.animationValues = x, fT(x, g, this.latestValues, H, C, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = H;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (nr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ke.update(() => {
        ja.hasAnimatedSinceResize = !0, this.currentAnimation = kT(0, eg, {
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
        if (this !== f && this.layout && g && T0(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          y = this.target || it();
          const u = Qt(this.layout.layoutBox.x);
          y.x.min = f.target.x.min, y.x.max = y.x.min + u;
          const p = Qt(this.layout.layoutBox.y);
          y.y.min = f.target.y.min, y.y.max = y.y.min + p;
        }
        nn(m, y), Ni(m, x), Qo(this.projectionDeltaWithTransform, this.layoutCorrected, m, x);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new yT()), this.sharedNodes.get(f).add(m);
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
      for (let x = 0; x < Jm.length; x++) {
        const u = "rotate" + Jm[x];
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
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = Va(f.pointerEvents) || ""), this.hasProjected && !Xr(this.latestValues) && (S.transform = x ? x({}, "") : "none", this.hasProjected = !1), S;
      }
      const p = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), g.transform = Zm(this.projectionDeltaWithTransform, this.treeScale, p), x && (g.transform = x(p, g.transform));
      const { x: v, y: _ } = this.projectionDelta;
      g.transformOrigin = `${v.origin * 100}% ${_.origin * 100}% 0`, u.animationValues ? g.opacity = u === this ? (y = (m = p.opacity) !== null && m !== void 0 ? m : this.latestValues.opacity) !== null && y !== void 0 ? y : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : g.opacity = u === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const S in Ya) {
        if (p[S] === void 0)
          continue;
        const { correct: k, applyTo: T } = Ya[S], C = g.transform === "none" ? p[S] : k(p[S], u);
        if (T) {
          const L = T.length;
          for (let j = 0; j < L; j++)
            g[T[j]] = C;
        } else
          g[S] = C;
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
      }), this.root.nodes.forEach(tg), this.root.sharedNodes.clear();
    }
  };
}
function ET(e) {
  e.updateLayout();
}
function CT(e) {
  var n;
  const r = ((n = e.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: a } = e.layout, { animationType: c } = e.options, f = r.source !== e.layout.source;
    c === "size" ? bn((u) => {
      const p = f ? r.measuredBox[u] : r.layoutBox[u], v = Qt(p);
      p.min = o[u].min, p.max = p.min + v;
    }) : T0(c, r.layoutBox, o) && bn((u) => {
      const p = f ? r.measuredBox[u] : r.layoutBox[u], v = Qt(o[u]);
      p.max = p.min + v, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + v);
    });
    const m = Mi();
    Qo(m, o, r.layoutBox);
    const y = Mi();
    f ? Qo(y, e.applyTransform(a, !0), r.measuredBox) : Qo(y, o, r.layoutBox);
    const g = !S0(m);
    let x = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: p, layout: v } = u;
        if (p && v) {
          const _ = it();
          Xo(_, r.layoutBox, p.layoutBox);
          const S = it();
          Xo(S, o, v.layoutBox), hf(_, S) || (x = !0), u.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = _, e.relativeParent = u);
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
function AT(e) {
  Yr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function bT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function PT(e) {
  e.clearSnapshot();
}
function tg(e) {
  e.clearMeasurements();
}
function RT(e) {
  e.isLayoutDirty = !1;
}
function OT(e) {
  const { visualElement: n } = e.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ng(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function LT(e) {
  e.resolveTargetDelta();
}
function DT(e) {
  e.calcProjection();
}
function MT(e) {
  e.resetRotation();
}
function NT(e) {
  e.removeLeadSnapshot();
}
function rg(e, n, r) {
  e.translate = Je(n.translate, 0, r), e.scale = Je(n.scale, 1, r), e.origin = n.origin, e.originPoint = n.originPoint;
}
function ig(e, n, r, o) {
  e.min = Je(n.min, r.min, o), e.max = Je(n.max, r.max, o);
}
function FT(e, n, r, o) {
  ig(e.x, n.x, r.x, o), ig(e.y, n.y, r.y, o);
}
function IT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const VT = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function og(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function jT(e) {
  og(e.x), og(e.y);
}
function T0(e, n, r) {
  return e === "position" || e === "preserve-aspect" && !cf(Ym(n), Ym(r), 0.2);
}
const BT = k0({
  attachResizeListener: (e, n) => Zn(e, "resize", n),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Mc = {
  current: void 0
}, E0 = k0({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Mc.current) {
      const e = new BT({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Mc.current = e;
    }
    return Mc.current;
  },
  resetTransform: (e, n) => {
    e.style.transform = n !== void 0 ? n : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), zT = {
  pan: {
    Feature: oT
  },
  drag: {
    Feature: iT,
    ProjectionNode: E0,
    MeasureLayout: x0
  }
}, UT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function $T(e) {
  const n = UT.exec(e);
  if (!n)
    return [,];
  const [, r, o] = n;
  return [r, o];
}
function mf(e, n, r = 1) {
  const [o, a] = $T(e);
  if (!o)
    return;
  const c = window.getComputedStyle(n).getPropertyValue(o);
  return c ? c.trim() : tf(a) ? mf(a, n, r + 1) : a;
}
function HT(e, { ...n }, r) {
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
const WT = /* @__PURE__ */ new Set([
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
]), C0 = (e) => WT.has(e), qT = (e) => Object.keys(e).some(C0), sg = (e) => e === ei || e === ye, ag = (e, n) => parseFloat(e.split(", ")[n]), lg = (e, n) => (r, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const a = o.match(/^matrix3d\((.+)\)$/);
  if (a)
    return ag(a[1], n);
  {
    const c = o.match(/^matrix\((.+)\)$/);
    return c ? ag(c[1], e) : 0;
  }
}, GT = /* @__PURE__ */ new Set(["x", "y", "z"]), KT = ls.filter((e) => !GT.has(e));
function QT(e) {
  const n = [];
  return KT.forEach((r) => {
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
}, XT = (e, n, r) => {
  const o = n.measureViewportBox(), a = n.current, c = getComputedStyle(a), { display: f } = c, m = {};
  f === "none" && n.setStaticValue("display", e.display || "block"), r.forEach((g) => {
    m[g] = ug[g](o, c);
  }), n.render();
  const y = n.measureViewportBox();
  return r.forEach((g) => {
    const x = n.getValue(g);
    x && x.jump(m[g]), e[g] = ug[g](y, c);
  }), e;
}, YT = (e, n, r = {}, o = {}) => {
  n = { ...n }, o = { ...o };
  const a = Object.keys(n).filter(C0);
  let c = [], f = !1;
  const m = [];
  if (a.forEach((y) => {
    const g = e.getValue(y);
    if (!e.hasValue(y))
      return;
    let x = r[y], u = jo(x);
    const p = n[y];
    let v;
    if (Ja(p)) {
      const _ = p.length, S = p[0] === null ? 1 : 0;
      x = p[S], u = jo(x);
      for (let k = S; k < _ && p[k] !== null; k++)
        v ? zf(jo(p[k]) === v) : v = jo(p[k]);
    } else
      v = jo(p);
    if (u !== v)
      if (sg(u) && sg(v)) {
        const _ = g.get();
        typeof _ == "string" && g.set(parseFloat(_)), typeof p == "string" ? n[y] = parseFloat(p) : Array.isArray(p) && v === ye && (n[y] = p.map(parseFloat));
      } else
        u != null && u.transform && (v != null && v.transform) && (x === 0 || p === 0) ? x === 0 ? g.set(v.transform(x)) : n[y] = u.transform(p) : (f || (c = QT(e), f = !0), m.push(y), o[y] = o[y] !== void 0 ? o[y] : n[y], g.jump(p));
  }), m.length) {
    const y = m.indexOf("height") >= 0 ? window.pageYOffset : null, g = XT(n, e, m);
    return c.length && c.forEach(([x, u]) => {
      e.getValue(x).set(u);
    }), e.render(), xl && y !== null && window.scrollTo({ top: y }), { target: g, transitionEnd: o };
  } else
    return { target: n, transitionEnd: o };
};
function ZT(e, n, r, o) {
  return qT(n) ? YT(e, n, r, o) : { target: n, transitionEnd: o };
}
const JT = (e, n, r, o) => {
  const a = HT(e, n, o);
  return n = a.target, o = a.transitionEnd, ZT(e, n, r, o);
}, gf = { current: null }, A0 = { current: !1 };
function eE() {
  if (A0.current = !0, !!xl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), n = () => gf.current = e.matches;
      e.addListener(n), n();
    } else
      gf.current = !1;
}
function tE(e, n, r) {
  const { willChange: o } = n;
  for (const a in n) {
    const c = n[a], f = r[a];
    if ($t(c))
      e.addValue(a, c), rl(o) && o.add(a);
    else if ($t(f))
      e.addValue(a, Ui(c, { owner: e })), rl(o) && o.remove(a);
    else if (f !== c)
      if (e.hasValue(a)) {
        const m = e.getValue(a);
        !m.hasAnimated && m.set(c);
      } else {
        const m = e.getStaticValue(a);
        e.addValue(a, Ui(m !== void 0 ? m : c, { owner: e }));
      }
  }
  for (const a in r)
    n[a] === void 0 && e.removeValue(a);
  return n;
}
const cg = /* @__PURE__ */ new WeakMap(), b0 = Object.keys(ns), nE = b0.length, fg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], rE = Lf.length;
class iE {
  constructor({ parent: n, props: r, presenceContext: o, reducedMotionConfig: a, visualState: c }, f = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ke.render(this.render, !1, !0);
    const { latestValues: m, renderState: y } = c;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = r.initial ? { ...m } : {}, this.renderState = y, this.parent = n, this.props = r, this.presenceContext = o, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = a, this.options = f, this.isControllingVariants = wl(r), this.isVariantNode = dy(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
    const { willChange: g, ...x } = this.scrapeMotionValuesFromProps(r, {});
    for (const u in x) {
      const p = x[u];
      m[u] !== void 0 && $t(p) && (p.set(m[u], !1), rl(g) && g.add(u));
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
    this.current = n, cg.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), A0.current || eE(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
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
    const o = Jr.has(n), a = r.on("change", (f) => {
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
    for (let y = 0; y < nE; y++) {
      const g = b0[y], { isEnabled: x, Feature: u, ProjectionNode: p, MeasureLayout: v } = ns[g];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : it();
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
    this.prevMotionValues = tE(this, this.scrapeMotionValuesFromProps(n, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let o = 0; o < rE; o++) {
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
    return o === void 0 && r !== void 0 && (o = Ui(r, { owner: this }), this.addValue(n, o)), o;
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
    return c !== void 0 && !$t(c) ? c : this.initialValues[n] !== void 0 && a === void 0 ? void 0 : this.baseTarget[n];
  }
  on(n, r) {
    return this.events[n] || (this.events[n] = new Qf()), this.events[n].add(r);
  }
  notify(n, ...r) {
    this.events[n] && this.events[n].notify(...r);
  }
}
class P0 extends iE {
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
    let f = Tk(o, n || {}, this);
    if (a && (r && (r = a(r)), o && (o = a(o)), f && (f = a(f))), c) {
      Sk(this, o, f);
      const m = JT(this, o, f, r);
      r = m.transitionEnd, o = m.target;
    }
    return {
      transition: n,
      transitionEnd: r,
      ...o
    };
  }
}
function oE(e) {
  return window.getComputedStyle(e);
}
class sE extends P0 {
  readValueFromInstance(n, r) {
    if (Jr.has(r)) {
      const o = Wf(r);
      return o && o.default || 0;
    } else {
      const o = oE(n), a = (gy(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: r }) {
    return v0(n, r);
  }
  build(n, r, o, a) {
    Mf(n, r, o, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, r) {
    return jf(n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    $t(n) && (this.childSubscription = n.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(n, r, o, a) {
    Sy(n, r, o, a);
  }
}
class aE extends P0 {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(n, r) {
    return n[r];
  }
  readValueFromInstance(n, r) {
    if (Jr.has(r)) {
      const o = Wf(r);
      return o && o.default || 0;
    }
    return r = ky.has(r) ? r : Vf(r), n.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return it();
  }
  scrapeMotionValuesFromProps(n, r) {
    return Ey(n, r);
  }
  build(n, r, o, a) {
    Ff(n, r, o, this.isSVGTag, a.transformTemplate);
  }
  renderInstance(n, r, o, a) {
    Ty(n, r, o, a);
  }
  mount(n) {
    this.isSVGTag = If(n.tagName), super.mount(n);
  }
}
const lE = (e, n) => Df(e) ? new aE(n, { enableHardwareAcceleration: !1 }) : new sE(n, { enableHardwareAcceleration: !0 }), uE = {
  layout: {
    ProjectionNode: E0,
    MeasureLayout: x0
  }
}, cE = {
  ...Vk,
  ...oS,
  ...zT,
  ...uE
}, $i = /* @__PURE__ */ pw((e, n) => Uw(e, n, cE, lE));
function R0() {
  const e = N.useRef(!1);
  return Xa(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function O0() {
  const e = R0(), [n, r] = N.useState(0), o = N.useCallback(() => {
    e.current && r(n + 1);
  }, [n]);
  return [N.useCallback(() => Ke.postRender(o), [o]), n];
}
class fE extends N.Component {
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
function dE({ children: e, isPresent: n }) {
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
  }, [n]), N.createElement(fE, { isPresent: n, childRef: o, sizeRef: a }, N.cloneElement(e, { ref: o }));
}
const Nc = ({ children: e, initial: n, isPresent: r, onExitComplete: o, custom: a, presenceAffectsLayout: c, mode: f }) => {
  const m = Cy(pE), y = N.useId(), g = N.useMemo(
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
  }, [r]), f === "popLayout" && (e = N.createElement(dE, { isPresent: r }, e)), N.createElement(vl.Provider, { value: g }, e);
};
function pE() {
  return /* @__PURE__ */ new Map();
}
function hE(e) {
  return N.useEffect(() => () => e(), []);
}
const Pi = (e) => e.key || "";
function mE(e, n) {
  e.forEach((r) => {
    const o = Pi(r);
    n.set(o, r);
  });
}
function gE(e) {
  const n = [];
  return N.Children.forEach(e, (r) => {
    N.isValidElement(r) && n.push(r);
  }), n;
}
const L0 = ({ children: e, custom: n, initial: r = !0, onExitComplete: o, exitBeforeEnter: a, presenceAffectsLayout: c = !0, mode: f = "sync" }) => {
  const m = N.useContext(rs).forceRender || O0()[0], y = R0(), g = gE(e);
  let x = g;
  const u = N.useRef(/* @__PURE__ */ new Map()).current, p = N.useRef(x), v = N.useRef(/* @__PURE__ */ new Map()).current, _ = N.useRef(!0);
  if (Xa(() => {
    _.current = !1, mE(g, v), p.current = x;
  }), hE(() => {
    _.current = !0, v.clear(), u.clear();
  }), _.current)
    return N.createElement(N.Fragment, null, x.map((C) => N.createElement(Nc, { key: Pi(C), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: c, mode: f }, C)));
  x = [...x];
  const S = p.current.map(Pi), k = g.map(Pi), T = S.length;
  for (let C = 0; C < T; C++) {
    const L = S[C];
    k.indexOf(L) === -1 && !u.has(L) && u.set(L, void 0);
  }
  return f === "wait" && u.size && (x = []), u.forEach((C, L) => {
    if (k.indexOf(L) !== -1)
      return;
    const j = v.get(L);
    if (!j)
      return;
    const H = S.indexOf(L);
    let Z = C;
    if (!Z) {
      const K = () => {
        v.delete(L), u.delete(L);
        const te = p.current.findIndex((J) => J.key === L);
        if (p.current.splice(te, 1), !u.size) {
          if (p.current = g, y.current === !1)
            return;
          m(), o && o();
        }
      };
      Z = N.createElement(Nc, { key: Pi(j), isPresent: !1, onExitComplete: K, custom: n, presenceAffectsLayout: c, mode: f }, j), u.set(L, Z);
    }
    x.splice(H, 0, Z);
  }), x = x.map((C) => {
    const L = C.key;
    return u.has(L) ? C : N.createElement(Nc, { key: Pi(C), isPresent: !0, presenceAffectsLayout: c, mode: f }, C);
  }), N.createElement(N.Fragment, null, u.size ? x : x.map((C) => N.cloneElement(C)));
}, yE = N.createContext(null), vE = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function dg() {
  const e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new WeakMap(), r = () => e.forEach(vE);
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
const D0 = (e) => e === !0, xE = (e) => D0(e === !0) || e === "id", _E = ({ children: e, id: n, inherit: r = !0 }) => {
  const o = N.useContext(rs), a = N.useContext(yE), [c, f] = O0(), m = N.useRef(null), y = o.id || a;
  m.current === null && (xE(r) && y && (n = n ? y + "-" + n : y), m.current = {
    id: n,
    group: D0(r) && o.group || dg()
  });
  const g = N.useMemo(() => ({ ...m.current, forceRender: c }), [f]);
  return N.createElement(rs.Provider, { value: g }, e);
}, wE = Te($i.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  /* border: 1px solid ${(e) => e.theme.colors.primary}; */
  width: 400px;
  height: 700px;
  /* min-height: 700px; */
  max-height: 80vh;
  max-width: 95vw;
  /* flex: 1; */
  background-color: white;
  box-shadow: 0 40px 30px -10px rgba(0, 0, 0, 0.3);

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
`, SE = Te.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #eee;
  /* border-top: 1px solid ${(e) => e.theme.colors.primary}; */
`, kE = Te.button`
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
`, ds = () => /* @__PURE__ */ A.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ A.jsxs("g", { children: [
      /* @__PURE__ */ A.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ A.jsx("path", { d: "M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" })
    ] })
  }
), Xf = () => /* @__PURE__ */ A.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ A.jsxs("g", { children: [
      /* @__PURE__ */ A.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ A.jsx("path", { d: "M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z" })
    ] })
  }
), TE = () => /* @__PURE__ */ A.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ A.jsxs("g", { children: [
      /* @__PURE__ */ A.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ A.jsx("path", { d: "M6 19h12V9.157l-6-5.454-6 5.454V19zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM7.5 13h2a2.5 2.5 0 1 0 5 0h2a4.5 4.5 0 1 1-9 0z" })
    ] })
  }
), EE = () => /* @__PURE__ */ A.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ A.jsxs("g", { children: [
      /* @__PURE__ */ A.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ A.jsx("path", { d: "M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM7.5 13a4.5 4.5 0 1 0 9 0h-2a2.5 2.5 0 1 1-5 0h-2z" })
    ] })
  }
), CE = Te.div`
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
`, AE = Te.div`
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
`, bE = Te.div`
  background: linear-gradient(180deg, transparent, white);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
var ps = (e) => e.type === "checkbox", Fi = (e) => e instanceof Date, Dt = (e) => e == null;
const M0 = (e) => typeof e == "object";
var dt = (e) => !Dt(e) && !Array.isArray(e) && M0(e) && !Fi(e), PE = (e) => dt(e) && e.target ? ps(e.target) ? e.target.checked : e.target.value : e, RE = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, OE = (e, n) => e.has(RE(n)), LE = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return dt(n) && n.hasOwnProperty("isPrototypeOf");
}, Yf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Cr(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(Yf && (e instanceof Blob || e instanceof FileList)) && (r || dt(e)))
    if (n = r ? [] : {}, !r && !LE(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = Cr(e[o]));
  else
    return e;
  return n;
}
var hs = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ot = (e) => e === void 0, fe = (e, n, r) => {
  if (!n || !dt(e))
    return r;
  const o = hs(n.split(/[,[\].]+?/)).reduce((a, c) => Dt(a) ? a : a[c], e);
  return ot(o) || o === e ? ot(e[n]) ? r : e[n] : o;
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
}, Xn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
yn.createContext(null);
var DE = (e, n, r, o = !0) => {
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
}, rn = (e) => dt(e) && !Object.keys(e).length, ME = (e, n, r, o) => {
  r(e);
  const { name: a, ...c } = e;
  return rn(c) || Object.keys(c).length >= Object.keys(n).length || Object.keys(c).find((f) => n[f] === (!o || gn.all));
}, Fc = (e) => Array.isArray(e) ? e : [e];
function NE(e) {
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
var On = (e) => typeof e == "string", FE = (e, n, r, o, a) => On(e) ? (o && n.watch.add(e), fe(r, e, a)) : Array.isArray(e) ? e.map((c) => (o && n.watch.add(c), fe(r, c))) : (o && (n.watchAll = !0), r), Zf = (e) => /^\w*$/.test(e), N0 = (e) => hs(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Ge(e, n, r) {
  let o = -1;
  const a = Zf(n) ? [n] : N0(n), c = a.length, f = c - 1;
  for (; ++o < c; ) {
    const m = a[o];
    let y = r;
    if (o !== f) {
      const g = e[m];
      y = dt(g) || Array.isArray(g) ? g : isNaN(+a[o + 1]) ? {} : [];
    }
    e[m] = y, e = e[m];
  }
  return e;
}
var IE = (e, n, r, o, a) => n ? {
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
        dt(f) && yf(f, n);
    }
  }
};
var hg = (e) => ({
  isOnSubmit: !e || e === gn.onSubmit,
  isOnBlur: e === gn.onBlur,
  isOnChange: e === gn.onChange,
  isOnAll: e === gn.all,
  isOnTouch: e === gn.onTouched
}), mg = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((o) => e.startsWith(o) && /^\.\w+/.test(e.slice(o.length)))), VE = (e, n, r) => {
  const o = hs(fe(e, r));
  return Ge(o, "root", n[r]), Ge(e, r, o), e;
}, ji = (e) => typeof e == "boolean", Jf = (e) => e.type === "file", br = (e) => typeof e == "function", ol = (e) => {
  if (!Yf)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, Ba = (e) => On(e), ed = (e) => e.type === "radio", sl = (e) => e instanceof RegExp;
const gg = {
  value: !1,
  isValid: !1
}, yg = { value: !0, isValid: !0 };
var F0 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ot(e[0].attributes.value) ? ot(e[0].value) || e[0].value === "" ? yg : { value: e[0].value, isValid: !0 } : yg
    ) : gg;
  }
  return gg;
};
const vg = {
  isValid: !1,
  value: null
};
var I0 = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, vg) : vg;
function xg(e, n, r = "validate") {
  if (Ba(e) || Array.isArray(e) && e.every(Ba) || ji(e) && !e)
    return {
      type: r,
      message: Ba(e) ? e : "",
      ref: n
    };
}
var Ai = (e) => dt(e) && !sl(e) ? e : {
  value: e,
  message: ""
}, _g = async (e, n, r, o, a) => {
  const { ref: c, refs: f, required: m, maxLength: y, minLength: g, min: x, max: u, pattern: p, validate: v, name: _, valueAsNumber: S, mount: k, disabled: T } = e._f, C = fe(n, _);
  if (!k || T)
    return {};
  const L = f ? f[0] : c, j = (pe) => {
    o && L.reportValidity && (L.setCustomValidity(ji(pe) ? "" : pe || ""), L.reportValidity());
  }, H = {}, Z = ed(c), K = ps(c), te = Z || K, J = (S || Jf(c)) && ot(c.value) && ot(C) || ol(c) && c.value === "" || C === "" || Array.isArray(C) && !C.length, Ee = IE.bind(null, _, r, H), Le = (pe, le, ae, ge = Xn.maxLength, Ce = Xn.minLength) => {
    const Se = pe ? le : ae;
    H[_] = {
      type: pe ? ge : Ce,
      message: Se,
      ref: c,
      ...Ee(pe ? ge : Ce, Se)
    };
  };
  if (a ? !Array.isArray(C) || !C.length : m && (!te && (J || Dt(C)) || ji(C) && !C || K && !F0(f).isValid || Z && !I0(f).isValid)) {
    const { value: pe, message: le } = Ba(m) ? { value: !!m, message: m } : Ai(m);
    if (pe && (H[_] = {
      type: Xn.required,
      message: le,
      ref: L,
      ...Ee(Xn.required, le)
    }, !r))
      return j(le), H;
  }
  if (!J && (!Dt(x) || !Dt(u))) {
    let pe, le;
    const ae = Ai(u), ge = Ai(x);
    if (!Dt(C) && !isNaN(C)) {
      const Ce = c.valueAsNumber || C && +C;
      Dt(ae.value) || (pe = Ce > ae.value), Dt(ge.value) || (le = Ce < ge.value);
    } else {
      const Ce = c.valueAsDate || new Date(C), Se = (b) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + b), X = c.type == "time", ue = c.type == "week";
      On(ae.value) && C && (pe = X ? Se(C) > Se(ae.value) : ue ? C > ae.value : Ce > new Date(ae.value)), On(ge.value) && C && (le = X ? Se(C) < Se(ge.value) : ue ? C < ge.value : Ce < new Date(ge.value));
    }
    if ((pe || le) && (Le(!!pe, ae.message, ge.message, Xn.max, Xn.min), !r))
      return j(H[_].message), H;
  }
  if ((y || g) && !J && (On(C) || a && Array.isArray(C))) {
    const pe = Ai(y), le = Ai(g), ae = !Dt(pe.value) && C.length > +pe.value, ge = !Dt(le.value) && C.length < +le.value;
    if ((ae || ge) && (Le(ae, pe.message, le.message), !r))
      return j(H[_].message), H;
  }
  if (p && !J && On(C)) {
    const { value: pe, message: le } = Ai(p);
    if (sl(pe) && !C.match(pe) && (H[_] = {
      type: Xn.pattern,
      message: le,
      ref: c,
      ...Ee(Xn.pattern, le)
    }, !r))
      return j(le), H;
  }
  if (v) {
    if (br(v)) {
      const pe = await v(C, n), le = xg(pe, L);
      if (le && (H[_] = {
        ...le,
        ...Ee(Xn.validate, le.message)
      }, !r))
        return j(le.message), H;
    } else if (dt(v)) {
      let pe = {};
      for (const le in v) {
        if (!rn(pe) && !r)
          break;
        const ae = xg(await v[le](C, n), L, le);
        ae && (pe = {
          ...ae,
          ...Ee(le, ae.message)
        }, j(ae.message), r && (H[_] = pe));
      }
      if (!rn(pe) && (H[_] = {
        ref: L,
        ...pe
      }, !r))
        return H;
    }
  }
  return j(!0), H;
};
function jE(e, n) {
  const r = n.slice(0, -1).length;
  let o = 0;
  for (; o < r; )
    e = ot(e) ? o++ : e[n[o++]];
  return e;
}
function BE(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !ot(e[n]))
      return !1;
  return !0;
}
function wt(e, n) {
  const r = Array.isArray(n) ? n : Zf(n) ? [n] : N0(n), o = r.length === 1 ? e : jE(e, r), a = r.length - 1, c = r[a];
  return o && delete o[c], a !== 0 && (dt(o) && rn(o) || Array.isArray(o) && BE(o)) && wt(e, r.slice(0, -1)), e;
}
function Ic() {
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
var al = (e) => Dt(e) || !M0(e);
function Pr(e, n) {
  if (al(e) || al(n))
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
      if (Fi(c) && Fi(f) || dt(c) && dt(f) || Array.isArray(c) && Array.isArray(f) ? !Pr(c, f) : c !== f)
        return !1;
    }
  }
  return !0;
}
var V0 = (e) => e.type === "select-multiple", zE = (e) => ed(e) || ps(e), Vc = (e) => ol(e) && e.isConnected, j0 = (e) => {
  for (const n in e)
    if (br(e[n]))
      return !0;
  return !1;
};
function ll(e, n = {}) {
  const r = Array.isArray(e);
  if (dt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || dt(e[o]) && !j0(e[o]) ? (n[o] = Array.isArray(e[o]) ? [] : {}, ll(e[o], n[o])) : Dt(e[o]) || (n[o] = !0);
  return n;
}
function B0(e, n, r) {
  const o = Array.isArray(e);
  if (dt(e) || o)
    for (const a in e)
      Array.isArray(e[a]) || dt(e[a]) && !j0(e[a]) ? ot(n) || al(r[a]) ? r[a] = Array.isArray(e[a]) ? ll(e[a], []) : { ...ll(e[a]) } : B0(e[a], Dt(n) ? {} : n[a], r[a]) : r[a] = !Pr(e[a], n[a]);
  return r;
}
var jc = (e, n) => B0(e, n, ll(n)), z0 = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: o }) => ot(e) ? e : n ? e === "" ? NaN : e && +e : r && On(e) ? new Date(e) : o ? o(e) : e;
function Bc(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return Jf(n) ? n.files : ed(n) ? I0(e.refs).value : V0(n) ? [...n.selectedOptions].map(({ value: r }) => r) : ps(n) ? F0(e.refs).value : z0(ot(n.value) ? e.ref.value : n.value, e);
}
var UE = (e, n, r, o) => {
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
}, zo = (e) => ot(e) ? e : sl(e) ? e.source : dt(e) ? sl(e.value) ? e.value.source : e.value : e, $E = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function wg(e, n, r) {
  const o = fe(e, r);
  if (o || Zf(r))
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
var HE = (e, n, r, o, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(n || e) : (r ? o.isOnBlur : a.isOnBlur) ? !e : (r ? o.isOnChange : a.isOnChange) ? e : !0, WE = (e, n) => !hs(fe(e, n)).length && wt(e, n);
const qE = {
  mode: gn.onSubmit,
  reValidateMode: gn.onChange,
  shouldFocusError: !0
};
function GE(e = {}, n) {
  let r = {
    ...qE,
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
  }, a = {}, c = dt(r.defaultValues) || dt(r.values) ? Cr(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : Cr(c), m = {
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
    values: Ic(),
    array: Ic(),
    state: Ic()
  }, v = e.resetOptions && e.resetOptions.keepDirtyValues, _ = hg(r.mode), S = hg(r.reValidateMode), k = r.criteriaMode === gn.all, T = (O) => (V) => {
    clearTimeout(x), x = setTimeout(O, V);
  }, C = async (O) => {
    if (u.isValid || O) {
      const V = r.resolver ? rn((await J()).errors) : await Le(a, !0);
      V !== o.isValid && p.state.next({
        isValid: V
      });
    }
  }, L = (O) => u.isValidating && p.state.next({
    isValidating: O
  }), j = (O, V = [], z, ie, Y = !0, G = !0) => {
    if (ie && z) {
      if (m.action = !0, G && Array.isArray(fe(a, O))) {
        const de = z(fe(a, O), ie.argA, ie.argB);
        Y && Ge(a, O, de);
      }
      if (G && Array.isArray(fe(o.errors, O))) {
        const de = z(fe(o.errors, O), ie.argA, ie.argB);
        Y && Ge(o.errors, O, de), WE(o.errors, O);
      }
      if (u.touchedFields && G && Array.isArray(fe(o.touchedFields, O))) {
        const de = z(fe(o.touchedFields, O), ie.argA, ie.argB);
        Y && Ge(o.touchedFields, O, de);
      }
      u.dirtyFields && (o.dirtyFields = jc(c, f)), p.state.next({
        name: O,
        isDirty: le(O, V),
        dirtyFields: o.dirtyFields,
        errors: o.errors,
        isValid: o.isValid
      });
    } else
      Ge(f, O, V);
  }, H = (O, V) => {
    Ge(o.errors, O, V), p.state.next({
      errors: o.errors
    });
  }, Z = (O, V, z, ie) => {
    const Y = fe(a, O);
    if (Y) {
      const G = fe(f, O, ot(z) ? fe(c, O) : z);
      ot(G) || ie && ie.defaultChecked || V ? Ge(f, O, V ? G : Bc(Y._f)) : Ce(O, G), m.mount && C();
    }
  }, K = (O, V, z, ie, Y) => {
    let G = !1, de = !1;
    const Ve = {
      name: O
    };
    if (!z || ie) {
      u.isDirty && (de = o.isDirty, o.isDirty = Ve.isDirty = le(), G = de !== Ve.isDirty);
      const ze = Pr(fe(c, O), V);
      de = fe(o.dirtyFields, O), ze ? wt(o.dirtyFields, O) : Ge(o.dirtyFields, O, !0), Ve.dirtyFields = o.dirtyFields, G = G || u.dirtyFields && de !== !ze;
    }
    if (z) {
      const ze = fe(o.touchedFields, O);
      ze || (Ge(o.touchedFields, O, z), Ve.touchedFields = o.touchedFields, G = G || u.touchedFields && ze !== z);
    }
    return G && Y && p.state.next(Ve), G ? Ve : {};
  }, te = (O, V, z, ie) => {
    const Y = fe(o.errors, O), G = u.isValid && ji(V) && o.isValid !== V;
    if (e.delayError && z ? (g = T(() => H(O, z)), g(e.delayError)) : (clearTimeout(x), g = null, z ? Ge(o.errors, O, z) : wt(o.errors, O)), (z ? !Pr(Y, z) : Y) || !rn(ie) || G) {
      const de = {
        ...ie,
        ...G && ji(V) ? { isValid: V } : {},
        errors: o.errors,
        name: O
      };
      o = {
        ...o,
        ...de
      }, p.state.next(de);
    }
    L(!1);
  }, J = async (O) => r.resolver(f, r.context, UE(O || y.mount, a, r.criteriaMode, r.shouldUseNativeValidation)), Ee = async (O) => {
    const { errors: V } = await J();
    if (O)
      for (const z of O) {
        const ie = fe(V, z);
        ie ? Ge(o.errors, z, ie) : wt(o.errors, z);
      }
    else
      o.errors = V;
    return V;
  }, Le = async (O, V, z = {
    valid: !0
  }) => {
    for (const ie in O) {
      const Y = O[ie];
      if (Y) {
        const { _f: G, ...de } = Y;
        if (G) {
          const Ve = y.array.has(G.name), ze = await _g(Y, f, k, r.shouldUseNativeValidation && !V, Ve);
          if (ze[G.name] && (z.valid = !1, V))
            break;
          !V && (fe(ze, G.name) ? Ve ? VE(o.errors, ze, G.name) : Ge(o.errors, G.name, ze[G.name]) : wt(o.errors, G.name));
        }
        de && await Le(de, V, z);
      }
    }
    return z.valid;
  }, pe = () => {
    for (const O of y.unMount) {
      const V = fe(a, O);
      V && (V._f.refs ? V._f.refs.every((z) => !Vc(z)) : !Vc(V._f.ref)) && we(O);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, le = (O, V) => (O && V && Ge(f, O, V), !Pr(I(), c)), ae = (O, V, z) => FE(O, y, {
    ...m.mount ? f : ot(V) ? c : On(O) ? { [O]: V } : V
  }, z, V), ge = (O) => hs(fe(m.mount ? f : c, O, e.shouldUnregister ? fe(c, O, []) : [])), Ce = (O, V, z = {}) => {
    const ie = fe(a, O);
    let Y = V;
    if (ie) {
      const G = ie._f;
      G && (!G.disabled && Ge(f, O, z0(V, G)), Y = ol(G.ref) && Dt(V) ? "" : V, V0(G.ref) ? [...G.ref.options].forEach((de) => de.selected = Y.includes(de.value)) : G.refs ? ps(G.ref) ? G.refs.length > 1 ? G.refs.forEach((de) => (!de.defaultChecked || !de.disabled) && (de.checked = Array.isArray(Y) ? !!Y.find((Ve) => Ve === de.value) : Y === de.value)) : G.refs[0] && (G.refs[0].checked = !!Y) : G.refs.forEach((de) => de.checked = de.value === Y) : Jf(G.ref) ? G.ref.value = "" : (G.ref.value = Y, G.ref.type || p.values.next({
        name: O,
        values: { ...f }
      })));
    }
    (z.shouldDirty || z.shouldTouch) && K(O, Y, z.shouldTouch, z.shouldDirty, !0), z.shouldValidate && b(O);
  }, Se = (O, V, z) => {
    for (const ie in V) {
      const Y = V[ie], G = `${O}.${ie}`, de = fe(a, G);
      (y.array.has(O) || !al(Y) || de && !de._f) && !Fi(Y) ? Se(G, Y, z) : Ce(G, Y, z);
    }
  }, X = (O, V, z = {}) => {
    const ie = fe(a, O), Y = y.array.has(O), G = Cr(V);
    Ge(f, O, G), Y ? (p.array.next({
      name: O,
      values: { ...f }
    }), (u.isDirty || u.dirtyFields) && z.shouldDirty && p.state.next({
      name: O,
      dirtyFields: jc(c, f),
      isDirty: le(O, G)
    })) : ie && !ie._f && !Dt(G) ? Se(O, G, z) : Ce(O, G, z), mg(O, y) && p.state.next({ ...o }), p.values.next({
      name: O,
      values: { ...f }
    }), !m.mount && n();
  }, ue = async (O) => {
    const V = O.target;
    let z = V.name, ie = !0;
    const Y = fe(a, z), G = () => V.type ? Bc(Y._f) : PE(O);
    if (Y) {
      let de, Ve;
      const ze = G(), Mt = O.type === pg.BLUR || O.type === pg.FOCUS_OUT, ni = !$E(Y._f) && !r.resolver && !fe(o.errors, z) && !Y._f.deps || HE(Mt, fe(o.touchedFields, z), o.isSubmitted, S, _), jn = mg(z, y, Mt);
      Ge(f, z, ze), Mt ? (Y._f.onBlur && Y._f.onBlur(O), g && g(0)) : Y._f.onChange && Y._f.onChange(O);
      const an = K(z, ze, Mt, !1), ri = !rn(an) || jn;
      if (!Mt && p.values.next({
        name: z,
        type: O.type,
        values: { ...f }
      }), ni)
        return u.isValid && C(), ri && p.state.next({ name: z, ...jn ? {} : an });
      if (!Mt && jn && p.state.next({ ...o }), L(!0), r.resolver) {
        const { errors: Sn } = await J([z]), Bn = wg(o.errors, a, z), Nr = wg(Sn, a, Bn.name || z);
        de = Nr.error, z = Nr.name, Ve = rn(Sn);
      } else
        de = (await _g(Y, f, k, r.shouldUseNativeValidation))[z], ie = isNaN(ze) || ze === fe(f, z, ze), ie && (de ? Ve = !1 : u.isValid && (Ve = await Le(a, !0)));
      ie && (Y._f.deps && b(Y._f.deps), te(z, Ve, de, an));
    }
  }, b = async (O, V = {}) => {
    let z, ie;
    const Y = Fc(O);
    if (L(!0), r.resolver) {
      const G = await Ee(ot(O) ? O : Y);
      z = rn(G), ie = O ? !Y.some((de) => fe(G, de)) : z;
    } else
      O ? (ie = (await Promise.all(Y.map(async (G) => {
        const de = fe(a, G);
        return await Le(de && de._f ? { [G]: de } : de);
      }))).every(Boolean), !(!ie && !o.isValid) && C()) : ie = z = await Le(a);
    return p.state.next({
      ...!On(O) || u.isValid && z !== o.isValid ? {} : { name: O },
      ...r.resolver || !O ? { isValid: z } : {},
      errors: o.errors,
      isValidating: !1
    }), V.shouldFocus && !ie && yf(a, (G) => G && fe(o.errors, G), O ? Y : y.mount), ie;
  }, I = (O) => {
    const V = {
      ...c,
      ...m.mount ? f : {}
    };
    return ot(O) ? V : On(O) ? fe(V, O) : O.map((z) => fe(V, z));
  }, ne = (O, V) => ({
    invalid: !!fe((V || o).errors, O),
    isDirty: !!fe((V || o).dirtyFields, O),
    isTouched: !!fe((V || o).touchedFields, O),
    error: fe((V || o).errors, O)
  }), ke = (O) => {
    O && Fc(O).forEach((V) => wt(o.errors, V)), p.state.next({
      errors: O ? o.errors : {}
    });
  }, ve = (O, V, z) => {
    const ie = (fe(a, O, { _f: {} })._f || {}).ref;
    Ge(o.errors, O, {
      ...V,
      ref: ie
    }), p.state.next({
      name: O,
      errors: o.errors,
      isValid: !1
    }), z && z.shouldFocus && ie && ie.focus && ie.focus();
  }, Oe = (O, V) => br(O) ? p.values.subscribe({
    next: (z) => O(ae(void 0, V), z)
  }) : ae(O, V, !0), we = (O, V = {}) => {
    for (const z of O ? Fc(O) : y.mount)
      y.mount.delete(z), y.array.delete(z), V.keepValue || (wt(a, z), wt(f, z)), !V.keepError && wt(o.errors, z), !V.keepDirty && wt(o.dirtyFields, z), !V.keepTouched && wt(o.touchedFields, z), !r.shouldUnregister && !V.keepDefaultValue && wt(c, z);
    p.values.next({
      values: { ...f }
    }), p.state.next({
      ...o,
      ...V.keepDirty ? { isDirty: le() } : {}
    }), !V.keepIsValid && C();
  }, Pe = (O, V = {}) => {
    let z = fe(a, O);
    const ie = ji(V.disabled);
    return Ge(a, O, {
      ...z || {},
      _f: {
        ...z && z._f ? z._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...V
      }
    }), y.mount.add(O), z ? ie && Ge(f, O, V.disabled ? void 0 : fe(f, O, Bc(z._f))) : Z(O, !0, V.value), {
      ...ie ? { disabled: V.disabled } : {},
      ...r.progressive ? {
        required: !!V.required,
        min: zo(V.min),
        max: zo(V.max),
        minLength: zo(V.minLength),
        maxLength: zo(V.maxLength),
        pattern: zo(V.pattern)
      } : {},
      name: O,
      onChange: ue,
      onBlur: ue,
      ref: (Y) => {
        if (Y) {
          Pe(O, V), z = fe(a, O);
          const G = ot(Y.value) && Y.querySelectorAll && Y.querySelectorAll("input,select,textarea")[0] || Y, de = zE(G), Ve = z._f.refs || [];
          if (de ? Ve.find((ze) => ze === G) : G === z._f.ref)
            return;
          Ge(a, O, {
            _f: {
              ...z._f,
              ...de ? {
                refs: [
                  ...Ve.filter(Vc),
                  G,
                  ...Array.isArray(fe(c, O)) ? [{}] : []
                ],
                ref: { type: G.type, name: O }
              } : { ref: G }
            }
          }), Z(O, !1, void 0, G);
        } else
          z = fe(a, O, {}), z._f && (z._f.mount = !1), (r.shouldUnregister || V.shouldUnregister) && !(OE(y.array, O) && m.action) && y.unMount.add(O);
      }
    };
  }, Ae = () => r.shouldFocusError && yf(a, (O) => O && fe(o.errors, O), y.mount), Qe = (O, V) => async (z) => {
    z && (z.preventDefault && z.preventDefault(), z.persist && z.persist());
    let ie = Cr(f);
    if (p.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: Y, values: G } = await J();
      o.errors = Y, ie = G;
    } else
      await Le(a);
    wt(o.errors, "root"), rn(o.errors) ? (p.state.next({
      errors: {}
    }), await O(ie, z)) : (V && await V({ ...o.errors }, z), Ae(), setTimeout(Ae)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: rn(o.errors),
      submitCount: o.submitCount + 1,
      errors: o.errors
    });
  }, xn = (O, V = {}) => {
    fe(a, O) && (ot(V.defaultValue) ? X(O, fe(c, O)) : (X(O, V.defaultValue), Ge(c, O, V.defaultValue)), V.keepTouched || wt(o.touchedFields, O), V.keepDirty || (wt(o.dirtyFields, O), o.isDirty = V.defaultValue ? le(O, fe(c, O)) : le()), V.keepError || (wt(o.errors, O), u.isValid && C()), p.state.next({ ...o }));
  }, lt = (O, V = {}) => {
    const z = O || c, ie = Cr(z), Y = O && !rn(O) ? ie : c;
    if (V.keepDefaultValues || (c = z), !V.keepValues) {
      if (V.keepDirtyValues || v)
        for (const G of y.mount)
          fe(o.dirtyFields, G) ? Ge(Y, G, fe(f, G)) : X(G, fe(Y, G));
      else {
        if (Yf && ot(O))
          for (const G of y.mount) {
            const de = fe(a, G);
            if (de && de._f) {
              const Ve = Array.isArray(de._f.refs) ? de._f.refs[0] : de._f.ref;
              if (ol(Ve)) {
                const ze = Ve.closest("form");
                if (ze) {
                  ze.reset();
                  break;
                }
              }
            }
          }
        a = {};
      }
      f = e.shouldUnregister ? V.keepDefaultValues ? Cr(c) : {} : Cr(Y), p.array.next({
        values: { ...Y }
      }), p.values.next({
        values: { ...Y }
      });
    }
    y = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !m.mount && n(), m.mount = !u.isValid || !!V.keepIsValid, m.watch = !!e.shouldUnregister, p.state.next({
      submitCount: V.keepSubmitCount ? o.submitCount : 0,
      isDirty: V.keepDirty ? o.isDirty : !!(V.keepDefaultValues && !Pr(O, c)),
      isSubmitted: V.keepIsSubmitted ? o.isSubmitted : !1,
      dirtyFields: V.keepDirtyValues ? o.dirtyFields : V.keepDefaultValues && O ? jc(c, O) : {},
      touchedFields: V.keepTouched ? o.touchedFields : {},
      errors: V.keepErrors ? o.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, _n = (O, V) => lt(br(O) ? O(f) : O, V);
  return {
    control: {
      register: Pe,
      unregister: we,
      getFieldState: ne,
      handleSubmit: Qe,
      setError: ve,
      _executeSchema: J,
      _getWatch: ae,
      _getDirty: le,
      _updateValid: C,
      _removeUnmounted: pe,
      _updateFieldArray: j,
      _getFieldArray: ge,
      _reset: lt,
      _resetDefaultValues: () => br(r.defaultValues) && r.defaultValues().then((O) => {
        _n(O, r.resetOptions), p.state.next({
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
    setValue: X,
    getValues: I,
    reset: _n,
    resetField: xn,
    clearErrors: ke,
    unregister: we,
    setError: ve,
    setFocus: (O, V = {}) => {
      const z = fe(a, O), ie = z && z._f;
      if (ie) {
        const Y = ie.refs ? ie.refs[0] : ie.ref;
        Y.focus && (Y.focus(), V.shouldSelect && Y.select());
      }
    },
    getFieldState: ne
  };
}
function KE(e = {}) {
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
    ...GE(e, () => o((c) => ({ ...c }))),
    formState: r
  });
  const a = n.current.control;
  return a._options = e, NE({
    subject: a._subjects.state,
    next: (c) => {
      ME(c, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), yn.useEffect(() => {
    e.values && (!Pr(e.values, a._defaultValues) || !Pr(e.values, a._formValues)) ? a._reset(e.values, a._options.resetOptions) : a._resetDefaultValues();
  }, [e.values, a]), yn.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), n.current.formState = DE(r, a), n.current;
}
let Ra;
const QE = new Uint8Array(16);
function XE() {
  if (!Ra && (Ra = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ra))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ra(QE);
}
const _t = [];
for (let e = 0; e < 256; ++e)
  _t.push((e + 256).toString(16).slice(1));
function YE(e, n = 0) {
  return (_t[e[n + 0]] + _t[e[n + 1]] + _t[e[n + 2]] + _t[e[n + 3]] + "-" + _t[e[n + 4]] + _t[e[n + 5]] + "-" + _t[e[n + 6]] + _t[e[n + 7]] + "-" + _t[e[n + 8]] + _t[e[n + 9]] + "-" + _t[e[n + 10]] + _t[e[n + 11]] + _t[e[n + 12]] + _t[e[n + 13]] + _t[e[n + 14]] + _t[e[n + 15]]).toLowerCase();
}
const ZE = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Sg = {
  randomUUID: ZE
};
function JE(e, n, r) {
  if (Sg.randomUUID && !n && !e)
    return Sg.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || XE)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, n) {
    r = r || 0;
    for (let a = 0; a < 16; ++a)
      n[r + a] = o[a];
    return n;
  }
  return YE(o);
}
function U0() {
  return JE();
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
const $0 = N.createContext({}), eC = ({ children: e }) => {
  const { user_id: n, email: r, name: o, phone_number: a } = Bx(), [c] = Oa("zap_desk:user_id", n, U0()), [f, m] = Oa("zap_desk:email", r), [y, g] = Oa("zap_desk:name", o), [x, u] = Oa("zap_desk:phone", a), p = N.useMemo(() => !!(f && y), [f, y]), v = async ({ email: _, name: S, phone: k }) => {
    m(_), g(S), k && u(k);
  };
  return c ? /* @__PURE__ */ A.jsx(
    $0.Provider,
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
  ) : /* @__PURE__ */ A.jsx(A.Fragment, {});
}, Cl = () => N.useContext($0), tC = () => {
  const { authenticate: e } = Cl(), { go: n } = In(), r = KE({
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    }
  }), o = async (a) => {
    console.log("on Submit", a), await e(a), n("home");
  };
  return /* @__PURE__ */ A.jsxs(CE, { children: [
    /* @__PURE__ */ A.jsx(AE, {}),
    /* @__PURE__ */ A.jsx(bE, {}),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "headline", children: [
        /* @__PURE__ */ A.jsx("span", { className: "title", children: "Olá 👋🏽" }),
        /* @__PURE__ */ A.jsx("span", { className: "subtitle", children: "Estamos aqui para ajudar" })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "auth-container", children: [
        /* @__PURE__ */ A.jsx("div", { className: "auth-header", children: /* @__PURE__ */ A.jsx("span", { className: "title", children: "Antes de começar, precisamos saber algumas coisas sobre você" }) }),
        /* @__PURE__ */ A.jsxs(
          "form",
          {
            className: "auth-content",
            onSubmit: r.handleSubmit(o),
            children: [
              /* @__PURE__ */ A.jsxs("div", { className: "input-container", children: [
                /* @__PURE__ */ A.jsx("label", { className: "label", children: "Nome" }),
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Digite seu nome",
                    required: !0,
                    ...r.register("name", { required: !0, maxLength: 80 })
                  }
                )
              ] }),
              /* @__PURE__ */ A.jsxs("div", { className: "input-container", children: [
                /* @__PURE__ */ A.jsx("label", { className: "label", children: "E-mail" }),
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "Digite seu e-mail",
                    required: !0,
                    ...r.register("email", { required: !0 })
                  }
                )
              ] }),
              /* @__PURE__ */ A.jsxs("div", { className: "input-container", children: [
                /* @__PURE__ */ A.jsx("label", { className: "label", children: "Telefone" }),
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Digite seu Telefone",
                    ...r.register("phone")
                  }
                )
              ] }),
              /* @__PURE__ */ A.jsx("div", { className: "button-container", children: /* @__PURE__ */ A.jsx("button", { className: "button-submit", children: "Iniciar Conversa" }) })
            ]
          }
        )
      ] })
    ] })
  ] });
}, kg = ({ message: e }) => /* @__PURE__ */ A.jsx("p", { children: e.text }), nC = ({ message: e }) => /* @__PURE__ */ A.jsxs("div", { children: [
  /* @__PURE__ */ A.jsx(
    "img",
    {
      className: "message-image",
      src: `http://localhost:3005/api/messages/${e.id}/files/${e.id}.png`
    }
  ),
  /* @__PURE__ */ A.jsx("p", { children: e.text })
] }), rC = ({ message: e }) => /* @__PURE__ */ A.jsxs("div", { children: [
  /* @__PURE__ */ A.jsx("p", { children: e.text }),
  /* @__PURE__ */ A.jsx(
    "audio",
    {
      controls: !0,
      src: `http://localhost:3005/api/messages/${e.id}/files/${e.id}.mp3`
    }
  )
] });
function H0(e) {
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
const iC = Te($i.div)`
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
function W0(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: oC } = Object.prototype, { getPrototypeOf: td } = Object, Al = ((e) => (n) => {
  const r = oC.call(n);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Vn = (e) => (e = e.toLowerCase(), (n) => Al(n) === e), bl = (e) => (n) => typeof n === e, { isArray: Gi } = Array, ss = bl("undefined");
function sC(e) {
  return e !== null && !ss(e) && e.constructor !== null && !ss(e.constructor) && sn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const q0 = Vn("ArrayBuffer");
function aC(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && q0(e.buffer), n;
}
const lC = bl("string"), sn = bl("function"), G0 = bl("number"), Pl = (e) => e !== null && typeof e == "object", uC = (e) => e === !0 || e === !1, za = (e) => {
  if (Al(e) !== "object")
    return !1;
  const n = td(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, cC = Vn("Date"), fC = Vn("File"), dC = Vn("Blob"), pC = Vn("FileList"), hC = (e) => Pl(e) && sn(e.pipe), mC = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || sn(e.append) && ((n = Al(e)) === "formdata" || // detect form-data instance
  n === "object" && sn(e.toString) && e.toString() === "[object FormData]"));
}, gC = Vn("URLSearchParams"), yC = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function K0(e, n) {
  n = n.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, a;
  for (; o-- > 0; )
    if (a = r[o], n === a.toLowerCase())
      return a;
  return null;
}
const Q0 = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), X0 = (e) => !ss(e) && e !== Q0;
function vf() {
  const { caseless: e } = X0(this) && this || {}, n = {}, r = (o, a) => {
    const c = e && K0(n, a) || a;
    za(n[c]) && za(o) ? n[c] = vf(n[c], o) : za(o) ? n[c] = vf({}, o) : Gi(o) ? n[c] = o.slice() : n[c] = o;
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ms(arguments[o], r);
  return n;
}
const vC = (e, n, r, { allOwnKeys: o } = {}) => (ms(n, (a, c) => {
  r && sn(a) ? e[c] = W0(a, r) : e[c] = a;
}, { allOwnKeys: o }), e), xC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), _C = (e, n, r, o) => {
  e.prototype = Object.create(n.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), r && Object.assign(e.prototype, r);
}, wC = (e, n, r, o) => {
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
}, SC = (e, n, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= n.length;
  const o = e.indexOf(n, r);
  return o !== -1 && o === r;
}, kC = (e) => {
  if (!e)
    return null;
  if (Gi(e))
    return e;
  let n = e.length;
  if (!G0(n))
    return null;
  const r = new Array(n);
  for (; n-- > 0; )
    r[n] = e[n];
  return r;
}, TC = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && td(Uint8Array)), EC = (e, n) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = o.next()) && !a.done; ) {
    const c = a.value;
    n.call(e, c[0], c[1]);
  }
}, CC = (e, n) => {
  let r;
  const o = [];
  for (; (r = e.exec(n)) !== null; )
    o.push(r);
  return o;
}, AC = Vn("HTMLFormElement"), bC = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, a) {
    return o.toUpperCase() + a;
  }
), Tg = (({ hasOwnProperty: e }) => (n, r) => e.call(n, r))(Object.prototype), PC = Vn("RegExp"), Y0 = (e, n) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ms(r, (a, c) => {
    n(a, c, e) !== !1 && (o[c] = a);
  }), Object.defineProperties(e, o);
}, RC = (e) => {
  Y0(e, (n, r) => {
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
}, OC = (e, n) => {
  const r = {}, o = (a) => {
    a.forEach((c) => {
      r[c] = !0;
    });
  };
  return Gi(e) ? o(e) : o(String(e).split(n)), r;
}, LC = () => {
}, DC = (e, n) => (e = +e, Number.isFinite(e) ? e : n), zc = "abcdefghijklmnopqrstuvwxyz", Eg = "0123456789", Z0 = {
  DIGIT: Eg,
  ALPHA: zc,
  ALPHA_DIGIT: zc + zc.toUpperCase() + Eg
}, MC = (e = 16, n = Z0.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = n;
  for (; e--; )
    r += n[Math.random() * o | 0];
  return r;
};
function NC(e) {
  return !!(e && sn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const FC = (e) => {
  const n = new Array(10), r = (o, a) => {
    if (Pl(o)) {
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
}, IC = Vn("AsyncFunction"), VC = (e) => e && (Pl(e) || sn(e)) && sn(e.then) && sn(e.catch), B = {
  isArray: Gi,
  isArrayBuffer: q0,
  isBuffer: sC,
  isFormData: mC,
  isArrayBufferView: aC,
  isString: lC,
  isNumber: G0,
  isBoolean: uC,
  isObject: Pl,
  isPlainObject: za,
  isUndefined: ss,
  isDate: cC,
  isFile: fC,
  isBlob: dC,
  isRegExp: PC,
  isFunction: sn,
  isStream: hC,
  isURLSearchParams: gC,
  isTypedArray: TC,
  isFileList: pC,
  forEach: ms,
  merge: vf,
  extend: vC,
  trim: yC,
  stripBOM: xC,
  inherits: _C,
  toFlatObject: wC,
  kindOf: Al,
  kindOfTest: Vn,
  endsWith: SC,
  toArray: kC,
  forEachEntry: EC,
  matchAll: CC,
  isHTMLForm: AC,
  hasOwnProperty: Tg,
  hasOwnProp: Tg,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Y0,
  freezeMethods: RC,
  toObjectSet: OC,
  toCamelCase: bC,
  noop: LC,
  toFiniteNumber: DC,
  findKey: K0,
  global: Q0,
  isContextDefined: X0,
  ALPHABET: Z0,
  generateString: MC,
  isSpecCompliantForm: NC,
  toJSONObject: FC,
  isAsyncFn: IC,
  isThenable: VC
};
function Me(e, n, r, o, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), r && (this.config = r), o && (this.request = o), a && (this.response = a);
}
B.inherits(Me, Error, {
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
const J0 = Me.prototype, ev = {};
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
  ev[e] = { value: e };
});
Object.defineProperties(Me, ev);
Object.defineProperty(J0, "isAxiosError", { value: !0 });
Me.from = (e, n, r, o, a, c) => {
  const f = Object.create(J0);
  return B.toFlatObject(e, f, function(y) {
    return y !== Error.prototype;
  }, (m) => m !== "isAxiosError"), Me.call(f, e.message, n, r, o, a), f.cause = e, f.name = e.name, c && Object.assign(f, c), f;
};
const jC = null;
function xf(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function tv(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Cg(e, n, r) {
  return e ? e.concat(n).map(function(a, c) {
    return a = tv(a), !r && c ? "[" + a + "]" : a;
  }).join(r ? "." : "") : n;
}
function BC(e) {
  return B.isArray(e) && !e.some(xf);
}
const zC = B.toFlatObject(B, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Rl(e, n, r) {
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
  function g(_) {
    if (_ === null)
      return "";
    if (B.isDate(_))
      return _.toISOString();
    if (!y && B.isBlob(_))
      throw new Me("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(_) || B.isTypedArray(_) ? y && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function x(_, S, k) {
    let T = _;
    if (_ && !k && typeof _ == "object") {
      if (B.endsWith(S, "{}"))
        S = o ? S : S.slice(0, -2), _ = JSON.stringify(_);
      else if (B.isArray(_) && BC(_) || (B.isFileList(_) || B.endsWith(S, "[]")) && (T = B.toArray(_)))
        return S = tv(S), T.forEach(function(L, j) {
          !(B.isUndefined(L) || L === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Cg([S], j, c) : f === null ? S : S + "[]",
            g(L)
          );
        }), !1;
    }
    return xf(_) ? !0 : (n.append(Cg(k, S, c), g(_)), !1);
  }
  const u = [], p = Object.assign(zC, {
    defaultVisitor: x,
    convertValue: g,
    isVisitable: xf
  });
  function v(_, S) {
    if (!B.isUndefined(_)) {
      if (u.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      u.push(_), B.forEach(_, function(T, C) {
        (!(B.isUndefined(T) || T === null) && a.call(
          n,
          T,
          B.isString(C) ? C.trim() : C,
          S,
          p
        )) === !0 && v(T, S ? S.concat(C) : [C]);
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
  this._pairs = [], e && Rl(e, this, n);
}
const nv = nd.prototype;
nv.append = function(n, r) {
  this._pairs.push([n, r]);
};
nv.toString = function(n) {
  const r = n ? function(o) {
    return n.call(this, o, Ag);
  } : Ag;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function UC(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function rv(e, n, r) {
  if (!n)
    return e;
  const o = r && r.encode || UC, a = r && r.serialize;
  let c;
  if (a ? c = a(n, r) : c = B.isURLSearchParams(n) ? n.toString() : new nd(n, r).toString(o), c) {
    const f = e.indexOf("#");
    f !== -1 && (e = e.slice(0, f)), e += (e.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return e;
}
class $C {
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
const bg = $C, iv = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, HC = typeof URLSearchParams < "u" ? URLSearchParams : nd, WC = typeof FormData < "u" ? FormData : null, qC = typeof Blob < "u" ? Blob : null, GC = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), KC = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ln = {
  isBrowser: !0,
  classes: {
    URLSearchParams: HC,
    FormData: WC,
    Blob: qC
  },
  isStandardBrowserEnv: GC,
  isStandardBrowserWebWorkerEnv: KC,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function QC(e, n) {
  return Rl(e, new Ln.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, a, c) {
      return Ln.isNode && B.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function XC(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function YC(e) {
  const n = {}, r = Object.keys(e);
  let o;
  const a = r.length;
  let c;
  for (o = 0; o < a; o++)
    c = r[o], n[c] = e[c];
  return n;
}
function ov(e) {
  function n(r, o, a, c) {
    let f = r[c++];
    const m = Number.isFinite(+f), y = c >= r.length;
    return f = !f && B.isArray(a) ? a.length : f, y ? (B.hasOwnProp(a, f) ? a[f] = [a[f], o] : a[f] = o, !m) : ((!a[f] || !B.isObject(a[f])) && (a[f] = []), n(r, o, a[f], c) && B.isArray(a[f]) && (a[f] = YC(a[f])), !m);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const r = {};
    return B.forEachEntry(e, (o, a) => {
      n(XC(o), a, r, 0);
    }), r;
  }
  return null;
}
const ZC = {
  "Content-Type": void 0
};
function JC(e, n, r) {
  if (B.isString(e))
    try {
      return (n || JSON.parse)(e), B.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const Ol = {
  transitional: iv,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, r) {
    const o = r.getContentType() || "", a = o.indexOf("application/json") > -1, c = B.isObject(n);
    if (c && B.isHTMLForm(n) && (n = new FormData(n)), B.isFormData(n))
      return a && a ? JSON.stringify(ov(n)) : n;
    if (B.isArrayBuffer(n) || B.isBuffer(n) || B.isStream(n) || B.isFile(n) || B.isBlob(n))
      return n;
    if (B.isArrayBufferView(n))
      return n.buffer;
    if (B.isURLSearchParams(n))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let m;
    if (c) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return QC(n, this.formSerializer).toString();
      if ((m = B.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
        const y = this.env && this.env.FormData;
        return Rl(
          m ? { "files[]": n } : n,
          y && new y(),
          this.formSerializer
        );
      }
    }
    return c || a ? (r.setContentType("application/json", !1), JC(n)) : n;
  }],
  transformResponse: [function(n) {
    const r = this.transitional || Ol.transitional, o = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (n && B.isString(n) && (o && !this.responseType || a)) {
      const f = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(n);
      } catch (m) {
        if (f)
          throw m.name === "SyntaxError" ? Me.from(m, Me.ERR_BAD_RESPONSE, this, null, this.response) : m;
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
  Ol.headers[n] = {};
});
B.forEach(["post", "put", "patch"], function(n) {
  Ol.headers[n] = B.merge(ZC);
});
const rd = Ol, eA = B.toObjectSet([
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
]), tA = (e) => {
  const n = {};
  let r, o, a;
  return e && e.split(`
`).forEach(function(f) {
    a = f.indexOf(":"), r = f.substring(0, a).trim().toLowerCase(), o = f.substring(a + 1).trim(), !(!r || n[r] && eA[r]) && (r === "set-cookie" ? n[r] ? n[r].push(o) : n[r] = [o] : n[r] = n[r] ? n[r] + ", " + o : o);
  }), n;
}, Pg = Symbol("internals");
function Uo(e) {
  return e && String(e).trim().toLowerCase();
}
function Ua(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Ua) : String(e);
}
function nA(e) {
  const n = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    n[o[1]] = o[2];
  return n;
}
const rA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function iA(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, r, o) => r.toUpperCase() + o);
}
function oA(e, n) {
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
class Ll {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, o) {
    const a = this;
    function c(m, y, g) {
      const x = Uo(y);
      if (!x)
        throw new Error("header name must be a non-empty string");
      const u = B.findKey(a, x);
      (!u || a[u] === void 0 || g === !0 || g === void 0 && a[u] !== !1) && (a[u || y] = Ua(m));
    }
    const f = (m, y) => B.forEach(m, (g, x) => c(g, x, y));
    return B.isPlainObject(n) || n instanceof this.constructor ? f(n, r) : B.isString(n) && (n = n.trim()) && !rA(n) ? f(tA(n), r) : n != null && c(r, n, o), this;
  }
  get(n, r) {
    if (n = Uo(n), n) {
      const o = B.findKey(this, n);
      if (o) {
        const a = this[o];
        if (!r)
          return a;
        if (r === !0)
          return nA(a);
        if (B.isFunction(r))
          return r.call(this, a, o);
        if (B.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (n = Uo(n), n) {
      const o = B.findKey(this, n);
      return !!(o && this[o] !== void 0 && (!r || Uc(this, this[o], o, r)));
    }
    return !1;
  }
  delete(n, r) {
    const o = this;
    let a = !1;
    function c(f) {
      if (f = Uo(f), f) {
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
        r[f] = Ua(a), delete r[c];
        return;
      }
      const m = n ? iA(c) : String(c).trim();
      m !== c && delete r[c], r[m] = Ua(a), o[m] = !0;
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
      const m = Uo(f);
      o[m] || (oA(a, f), o[m] = !0);
    }
    return B.isArray(n) ? n.forEach(c) : c(n), this;
  }
}
Ll.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.freezeMethods(Ll.prototype);
B.freezeMethods(Ll);
const tr = Ll;
function $c(e, n) {
  const r = this || rd, o = n || r, a = tr.from(o.headers);
  let c = o.data;
  return B.forEach(e, function(m) {
    c = m.call(r, c, a.normalize(), n ? n.status : void 0);
  }), a.normalize(), c;
}
function sv(e) {
  return !!(e && e.__CANCEL__);
}
function gs(e, n, r) {
  Me.call(this, e ?? "canceled", Me.ERR_CANCELED, n, r), this.name = "CanceledError";
}
B.inherits(gs, Me, {
  __CANCEL__: !0
});
function sA(e, n, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : n(new Me(
    "Request failed with status code " + r.status,
    [Me.ERR_BAD_REQUEST, Me.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const aA = Ln.isStandardBrowserEnv ? (
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
function lA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uA(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function av(e, n) {
  return e && !lA(n) ? uA(e, n) : n;
}
const cA = Ln.isStandardBrowserEnv ? (
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
function fA(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function dA(e, n) {
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
  const o = dA(50, 250);
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
const pA = typeof XMLHttpRequest < "u", hA = pA && function(e) {
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
      const v = e.auth.username || "", _ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      c.set("Authorization", "Basic " + btoa(v + ":" + _));
    }
    const x = av(e.baseURL, e.url);
    g.open(e.method.toUpperCase(), rv(x, e.params, e.paramsSerializer), !0), g.timeout = e.timeout;
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
      sA(function(T) {
        r(T), y();
      }, function(T) {
        o(T), y();
      }, S), g = null;
    }
    if ("onloadend" in g ? g.onloadend = u : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(u);
    }, g.onabort = function() {
      g && (o(new Me("Request aborted", Me.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      o(new Me("Network Error", Me.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let _ = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || iv;
      e.timeoutErrorMessage && (_ = e.timeoutErrorMessage), o(new Me(
        _,
        S.clarifyTimeoutError ? Me.ETIMEDOUT : Me.ECONNABORTED,
        e,
        g
      )), g = null;
    }, Ln.isStandardBrowserEnv) {
      const v = (e.withCredentials || cA(x)) && e.xsrfCookieName && aA.read(e.xsrfCookieName);
      v && c.set(e.xsrfHeaderName, v);
    }
    a === void 0 && c.setContentType(null), "setRequestHeader" in g && B.forEach(c.toJSON(), function(_, S) {
      g.setRequestHeader(S, _);
    }), B.isUndefined(e.withCredentials) || (g.withCredentials = !!e.withCredentials), f && f !== "json" && (g.responseType = e.responseType), typeof e.onDownloadProgress == "function" && g.addEventListener("progress", Rg(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && g.upload && g.upload.addEventListener("progress", Rg(e.onUploadProgress)), (e.cancelToken || e.signal) && (m = (v) => {
      g && (o(!v || v.type ? new gs(null, e, g) : v), g.abort(), g = null);
    }, e.cancelToken && e.cancelToken.subscribe(m), e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m)));
    const p = fA(x);
    if (p && Ln.protocols.indexOf(p) === -1) {
      o(new Me("Unsupported protocol " + p + ":", Me.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, $a = {
  http: jC,
  xhr: hA
};
B.forEach($a, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const mA = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, o;
    for (let a = 0; a < n && (r = e[a], !(o = B.isString(r) ? $a[r.toLowerCase()] : r)); a++)
      ;
    if (!o)
      throw o === !1 ? new Me(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        B.hasOwnProp($a, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!B.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: $a
};
function Hc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gs(null, e);
}
function Og(e) {
  return Hc(e), e.headers = tr.from(e.headers), e.data = $c.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), mA.getAdapter(e.adapter || rd.adapter)(e).then(function(o) {
    return Hc(e), o.data = $c.call(
      e,
      e.transformResponse,
      o
    ), o.headers = tr.from(o.headers), o;
  }, function(o) {
    return sv(o) || (Hc(e), o && o.response && (o.response.data = $c.call(
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
const lv = "1.4.0", id = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  id[e] = function(o) {
    return typeof o === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const Dg = {};
id.transitional = function(n, r, o) {
  function a(c, f) {
    return "[Axios v" + lv + "] Transitional option '" + c + "'" + f + (o ? ". " + o : "");
  }
  return (c, f, m) => {
    if (n === !1)
      throw new Me(
        a(f, " has been removed" + (r ? " in " + r : "")),
        Me.ERR_DEPRECATED
      );
    return r && !Dg[f] && (Dg[f] = !0, console.warn(
      a(
        f,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(c, f, m) : !0;
  };
};
function gA(e, n, r) {
  if (typeof e != "object")
    throw new Me("options must be an object", Me.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let a = o.length;
  for (; a-- > 0; ) {
    const c = o[a], f = n[c];
    if (f) {
      const m = e[c], y = m === void 0 || f(m, c, e);
      if (y !== !0)
        throw new Me("option " + c + " must be " + y, Me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Me("Unknown option " + c, Me.ERR_BAD_OPTION);
  }
}
const _f = {
  assertOptions: gA,
  validators: id
}, Tr = _f.validators;
class ul {
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
    o !== void 0 && _f.assertOptions(o, {
      silentJSONParsing: Tr.transitional(Tr.boolean),
      forcedJSONParsing: Tr.transitional(Tr.boolean),
      clarifyTimeoutError: Tr.transitional(Tr.boolean)
    }, !1), a != null && (B.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : _f.assertOptions(a, {
      encode: Tr.function,
      serialize: Tr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f;
    f = c && B.merge(
      c.common,
      c[r.method]
    ), f && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete c[_];
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
      const _ = [Og.bind(this), void 0];
      for (_.unshift.apply(_, m), _.push.apply(_, g), p = _.length, x = Promise.resolve(r); u < p; )
        x = x.then(_[u++], _[u++]);
      return x;
    }
    p = m.length;
    let v = r;
    for (u = 0; u < p; ) {
      const _ = m[u++], S = m[u++];
      try {
        v = _(v);
      } catch (k) {
        S.call(this, k);
        break;
      }
    }
    try {
      x = Og.call(this, v);
    } catch (_) {
      return Promise.reject(_);
    }
    for (u = 0, p = g.length; u < p; )
      x = x.then(g[u++], g[u++]);
    return x;
  }
  getUri(n) {
    n = Hi(this.defaults, n);
    const r = av(n.baseURL, n.url);
    return rv(r, n.params, n.paramsSerializer);
  }
}
B.forEach(["delete", "get", "head", "options"], function(n) {
  ul.prototype[n] = function(r, o) {
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
  ul.prototype[n] = r(), ul.prototype[n + "Form"] = r(!0);
});
const Ha = ul;
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
const yA = od;
function vA(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function xA(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const wf = {
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
Object.entries(wf).forEach(([e, n]) => {
  wf[n] = e;
});
const _A = wf;
function uv(e) {
  const n = new Ha(e), r = W0(Ha.prototype.request, n);
  return B.extend(r, Ha.prototype, n, { allOwnKeys: !0 }), B.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(a) {
    return uv(Hi(e, a));
  }, r;
}
const pt = uv(rd);
pt.Axios = Ha;
pt.CanceledError = gs;
pt.CancelToken = yA;
pt.isCancel = sv;
pt.VERSION = lv;
pt.toFormData = Rl;
pt.AxiosError = Me;
pt.Cancel = pt.CanceledError;
pt.all = function(n) {
  return Promise.all(n);
};
pt.spread = vA;
pt.isAxiosError = xA;
pt.mergeConfig = Hi;
pt.AxiosHeaders = tr;
pt.formToJSON = (e) => ov(B.isHTMLForm(e) ? new FormData(e) : e);
pt.HttpStatusCode = _A;
pt.default = pt;
const Mg = pt;
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
function cv() {
  const { remoteId: e } = Cl();
  return e;
}
const fv = N.createContext({}), wA = ({ children: e, app_id: n }) => n ? /* @__PURE__ */ A.jsx(fv.Provider, { value: { sessionId: n }, children: e }) : /* @__PURE__ */ A.jsx(A.Fragment, {});
function SA() {
  return N.useContext(fv);
}
function kA() {
  const { sessionId: e } = SA();
  return e;
}
function Ki() {
  const { api_url: e } = vn(), { remoteName: n, remoteEmail: r } = Cl(), o = cv(), a = kA(), c = pl();
  return {
    loadConversationsRequest: async (x) => Mg(`${e}/api/conversations/${a}/${o}`, {
      method: "get",
      params: { conversationIds: x }
    }).then((u) => u.data.data.conversations),
    loadMessagesRequest: async (x, u) => Mg(`${e}/api/conversations/${x}/messages`, {
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
      const _ = {
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
      }, S = Sf(_), k = await fetch(`${e}/api/messages/inbound`, {
        method: "post",
        body: S
      }).then((T) => T.json()).then((T) => T.data.message);
      return c.emit("message", { message: k }), k;
    }
  };
}
const TA = ({ message: e }) => {
  var r;
  const { sendMessageRequest: n } = Ki();
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx("div", { className: "buttons", children: (r = e.buttons) == null ? void 0 : r.map((o, a) => /* @__PURE__ */ A.jsx(
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
}, EA = ({ message: e }) => {
  const n = e.fromRemote, { picture_url: r, name: o } = H0(e.agentId);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsxs(
    iC,
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
        !n && /* @__PURE__ */ A.jsx("div", { className: "avatar", title: o, children: r ? /* @__PURE__ */ A.jsx("img", { src: r }) : /* @__PURE__ */ A.jsx(Xf, {}) }),
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: ["message-container", `message-${e.type}`].join(" "),
            children: [
              e.type === "buttons" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
                /* @__PURE__ */ A.jsx(kg, { message: e }),
                /* @__PURE__ */ A.jsx(TA, { message: e })
              ] }),
              e.type === "text" && /* @__PURE__ */ A.jsx(kg, { message: e }),
              e.type === "image" && e._count.files > 0 && /* @__PURE__ */ A.jsx(nC, { message: e }),
              e.type === "audio" && e._count.files > 0 && /* @__PURE__ */ A.jsx(rC, { message: e })
            ]
          }
        )
      ]
    }
  ) });
}, CA = () => /* @__PURE__ */ A.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ A.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z",
        "clip-rule": "evenodd"
      }
    )
  }
), AA = Te.div`
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
`, bA = Te.button`
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
`, PA = Te.div`
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
}, RA = (e) => e ? Ng(e) : Ng;
var dv = { exports: {} }, Wc = {}, qc = { exports: {} }, Gc = {};
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
function OA() {
  if (Fg)
    return Gc;
  Fg = 1;
  var e = N;
  function n(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = e.useState, a = e.useEffect, c = e.useLayoutEffect, f = e.useDebugValue;
  function m(u, p) {
    var v = p(), _ = o({ inst: { value: v, getSnapshot: p } }), S = _[0].inst, k = _[1];
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
  return Gc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x, Gc;
}
var Ig;
function LA() {
  return Ig || (Ig = 1, qc.exports = OA()), qc.exports;
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
var Vg;
function DA() {
  if (Vg)
    return Wc;
  Vg = 1;
  var e = N, n = LA();
  function r(g, x) {
    return g === x && (g !== 0 || 1 / g === 1 / x) || g !== g && x !== x;
  }
  var o = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, c = e.useRef, f = e.useEffect, m = e.useMemo, y = e.useDebugValue;
  return Wc.useSyncExternalStoreWithSelector = function(g, x, u, p, v) {
    var _ = c(null);
    if (_.current === null) {
      var S = { hasValue: !1, value: null };
      _.current = S;
    } else
      S = _.current;
    _ = m(function() {
      function T(Z) {
        if (!C) {
          if (C = !0, L = Z, Z = p(Z), v !== void 0 && S.hasValue) {
            var K = S.value;
            if (v(K, Z))
              return j = K;
          }
          return j = Z;
        }
        if (K = j, o(L, Z))
          return K;
        var te = p(Z);
        return v !== void 0 && v(K, te) ? K : (L = Z, j = te);
      }
      var C = !1, L, j, H = u === void 0 ? null : u;
      return [function() {
        return T(x());
      }, H === null ? void 0 : function() {
        return T(H());
      }];
    }, [x, u, p, v]);
    var k = a(g, _[0], _[1]);
    return f(function() {
      S.hasValue = !0, S.value = k;
    }, [k]), y(k), k;
  }, Wc;
}
dv.exports = DA();
var MA = dv.exports;
const NA = /* @__PURE__ */ fl(MA), { useSyncExternalStoreWithSelector: FA } = NA;
function IA(e, n = e.getState, r) {
  const o = FA(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    n,
    r
  );
  return N.useDebugValue(o), o;
}
const jg = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const n = typeof e == "function" ? RA(e) : e, r = (o, a) => IA(n, o, a);
  return Object.assign(r, n), r;
}, pv = (e) => e ? jg(e) : jg, rr = pv((e) => ({
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
})), VA = () => {
  const { removeConversation: e, conversationId: n } = In(), {
    app: { name: r }
  } = vn(), o = rr((a) => a.conversations.find((c) => c.id === n));
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsxs(AA, { children: [
    /* @__PURE__ */ A.jsx(
      bA,
      {
        onClick: () => {
          e();
        },
        children: /* @__PURE__ */ A.jsx(CA, {})
      }
    ),
    /* @__PURE__ */ A.jsx(PA, { children: /* @__PURE__ */ A.jsx(ds, {}) }),
    /* @__PURE__ */ A.jsxs("div", { className: "header-infos", children: [
      /* @__PURE__ */ A.jsx("span", { className: "title", children: r }),
      o.isTyping && /* @__PURE__ */ A.jsx("span", { className: "subtitle", children: "Digitando..." })
    ] })
  ] }) });
}, jA = ({
  className: e,
  ...n
}) => /* @__PURE__ */ A.jsx(
  "div",
  {
    className: ["flex flex-row", e].filter((r) => !!r).join(" "),
    ...n
  }
), BA = Te.form`
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
`, zA = Te.input`
  flex: 1;
  height: 100%;
  padding-left: 20px;
  outline: none;
  font-size: 14px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`, UA = Te.button`
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
`, $A = () => /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(
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
    children: /* @__PURE__ */ A.jsx("path", { d: "M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z" })
  }
) });
function HA(e, n = {}) {
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
const hv = pv((e) => ({
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
function mv(e) {
  const n = hv(
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
const WA = () => {
  const { conversationId: e } = In(), { sendMessageRequest: n } = Ki(), [r, o] = N.useState(""), [a, c] = N.useState(), [f, m] = N.useState(!1), [y, g] = N.useState("Mensagem"), x = N.useRef(setTimeout(() => {
  }, 0)), { lastMessage: u } = mv(e), p = rr((k) => {
    var C;
    return !!((C = k.conversations.find(
      (L) => L.id === e
    )) == null ? void 0 : C.isClosed);
  }), v = N.useMemo(() => (u == null ? void 0 : u.type) === "buttons" || p, [f, u, p]), _ = () => {
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
    }), m(() => !1), _();
  };
  return N.useEffect(() => {
    g(p ? () => "Esta conversa foi encerrada" : () => "Mensagem");
  }, [p]), /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsxs(
    BA,
    {
      onSubmit: (k) => {
        k.preventDefault(), S();
      },
      children: [
        /* @__PURE__ */ A.jsx(
          zA,
          {
            placeholder: y,
            value: r,
            disabled: v,
            onChange: (k) => {
              o(() => k.target.value);
            }
          }
        ),
        /* @__PURE__ */ A.jsx(jA, { className: "buttons-container", children: /* @__PURE__ */ A.jsx(
          UA,
          {
            type: "button",
            disabled: f || v,
            onClick: () => {
              m(() => !0), HA(async ([k]) => {
                m(() => !1), await n({
                  conversationId: e,
                  text: r,
                  file: k
                });
              });
            },
            children: /* @__PURE__ */ A.jsx($A, {})
          }
        ) })
      ]
    }
  ) });
}, qA = () => /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(WA, {}) }), GA = Te.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .page-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`, KA = Te.div`
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
function QA({
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
const XA = ({ conversationId: e }) => {
  const { messages: n } = mv(e), r = N.useRef(null);
  return QA({
    messagesListRef: r,
    messagesCount: n.length,
    conversationId: e
  }), /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsxs(GA, { children: [
    /* @__PURE__ */ A.jsx(VA, {}),
    /* @__PURE__ */ A.jsx("div", { className: "page-wrap", children: /* @__PURE__ */ A.jsx(KA, { ref: r, className: "scroll-mini", children: n.map((o, a) => /* @__PURE__ */ A.jsx(EA, { message: o }, `message.${o.id}`)) }) }),
    /* @__PURE__ */ A.jsx(qA, {})
  ] }) });
}, YA = Te.div`
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

    .page-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
`, ZA = Te.div`
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
`, JA = () => /* @__PURE__ */ A.jsx(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ A.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z",
        "clip-rule": "evenodd"
      }
    )
  }
), eb = Te.div`
  /* className="px-4 cursor-pointer hover:bg-orange-100/80 transition-all" */
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(e) => zi(e.theme.colors.primary, 0.15)};
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
      gap: 2px;
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
    }
  }
`, tb = Te.div`
  font-size: 20px;
  color: ${(e) => e.theme.colors.primary};
`, nb = Te.div`
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
var cl = { exports: {} };
cl.exports;
(function(e, n) {
  var r = 30, o = "...", a = 1 / 0, c = 17976931348623157e292, f = 0 / 0, m = "[object RegExp]", y = "[object Symbol]", g = /^\s+|\s+$/g, x = /\w*$/, u = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, v = /^0o[0-7]+$/i, _ = "\\ud800-\\udfff", S = "\\u0300-\\u036f\\ufe20-\\ufe23", k = "\\u20d0-\\u20f0", T = "\\ufe0e\\ufe0f", C = "[" + _ + "]", L = "[" + S + k + "]", j = "\\ud83c[\\udffb-\\udfff]", H = "(?:" + L + "|" + j + ")", Z = "[^" + _ + "]", K = "(?:\\ud83c[\\udde6-\\uddff]){2}", te = "[\\ud800-\\udbff][\\udc00-\\udfff]", J = "\\u200d", Ee = H + "?", Le = "[" + T + "]?", pe = "(?:" + J + "(?:" + [Z, K, te].join("|") + ")" + Le + Ee + ")*", le = Le + Ee + pe, ae = "(?:" + [Z + L + "?", L, K, te, C].join("|") + ")", ge = RegExp(j + "(?=" + j + ")|" + ae + le, "g"), Ce = RegExp("[" + J + _ + S + k + T + "]"), Se = parseInt, X = typeof Yn == "object" && Yn && Yn.Object === Object && Yn, ue = typeof self == "object" && self && self.Object === Object && self, b = X || ue || Function("return this")(), I = n && !n.nodeType && n, ne = I && !0 && e && !e.nodeType && e, ke = ne && ne.exports === I, ve = ke && X.process, Oe = function() {
    try {
      return ve && ve.binding("util");
    } catch {
    }
  }(), we = Oe && Oe.isRegExp, Pe = Qe("length");
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
  function lt(W) {
    return Ce.test(W);
  }
  function _n(W) {
    return lt(W) ? ti(W) : Pe(W);
  }
  function wn(W) {
    return lt(W) ? Xi(W) : Ae(W);
  }
  function ti(W) {
    for (var xe = ge.lastIndex = 0; ge.test(W); )
      xe++;
    return xe;
  }
  function Xi(W) {
    return W.match(ge) || [];
  }
  var O = Object.prototype, V = O.toString, z = b.Symbol, ie = z ? z.prototype : void 0, Y = ie ? ie.toString : void 0;
  function G(W) {
    return Mt(W) && V.call(W) == m;
  }
  function de(W, xe, Be) {
    var yt = -1, $e = W.length;
    xe < 0 && (xe = -xe > $e ? 0 : $e + xe), Be = Be > $e ? $e : Be, Be < 0 && (Be += $e), $e = xe > Be ? 0 : Be - xe >>> 0, xe >>>= 0;
    for (var zn = Array($e); ++yt < $e; )
      zn[yt] = W[yt + xe];
    return zn;
  }
  function Ve(W) {
    if (typeof W == "string")
      return W;
    if (an(W))
      return Y ? Y.call(W) : "";
    var xe = W + "";
    return xe == "0" && 1 / W == -a ? "-0" : xe;
  }
  function ze(W, xe, Be) {
    var yt = W.length;
    return Be = Be === void 0 ? yt : Be, !xe && Be >= yt ? W : de(W, xe, Be);
  }
  function Mt(W) {
    var xe = typeof W;
    return !!W && (xe == "object" || xe == "function");
  }
  function ni(W) {
    return !!W && typeof W == "object";
  }
  var jn = we ? xn(we) : G;
  function an(W) {
    return typeof W == "symbol" || ni(W) && V.call(W) == y;
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
    if (Mt(W)) {
      var xe = typeof W.valueOf == "function" ? W.valueOf() : W;
      W = Mt(xe) ? xe + "" : xe;
    }
    if (typeof W != "string")
      return W === 0 ? W : +W;
    W = W.replace(g, "");
    var Be = p.test(W);
    return Be || v.test(W) ? Se(W.slice(2), Be ? 2 : 8) : u.test(W) ? f : +W;
  }
  function Nr(W) {
    return W == null ? "" : Ve(W);
  }
  function ys(W, xe) {
    var Be = r, yt = o;
    if (Mt(xe)) {
      var $e = "separator" in xe ? xe.separator : $e;
      Be = "length" in xe ? Sn(xe.length) : Be, yt = "omission" in xe ? Ve(xe.omission) : yt;
    }
    W = Nr(W);
    var zn = W.length;
    if (lt(W)) {
      var ir = wn(W);
      zn = ir.length;
    }
    if (Be >= zn)
      return W;
    var kt = Be - _n(yt);
    if (kt < 1)
      return yt;
    var Tt = ir ? ze(ir, 0, kt).join("") : W.slice(0, kt);
    if ($e === void 0)
      return Tt + yt;
    if (ir && (kt += Tt.length - kt), jn($e)) {
      if (W.slice(kt).search($e)) {
        var Yi, vs = Tt;
        for ($e.global || ($e = RegExp($e.source, Nr(x.exec($e)) + "g")), $e.lastIndex = 0; Yi = $e.exec(vs); )
          var Zi = Yi.index;
        Tt = Tt.slice(0, Zi === void 0 ? kt : Zi);
      }
    } else if (W.indexOf(Ve($e), kt) != kt) {
      var Ji = Tt.lastIndexOf($e);
      Ji > -1 && (Tt = Tt.slice(0, Ji));
    }
    return Tt + yt;
  }
  e.exports = ys;
})(cl, cl.exports);
var rb = cl.exports;
const ib = /* @__PURE__ */ fl(rb), ob = ({
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
    return r.isTyping && f.push("• ", "Digitando..."), f;
  }, [r.updatedAt, r.isTyping]);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(
    eb,
    {
      onClick: () => {
        n(r.id);
      },
      children: /* @__PURE__ */ A.jsxs("div", { className: "item-row", children: [
        /* @__PURE__ */ A.jsx(nb, { children: /* @__PURE__ */ A.jsx(ds, {}) }),
        /* @__PURE__ */ A.jsxs("div", { className: "row-content", children: [
          /* @__PURE__ */ A.jsx(
            "span",
            {
              title: o,
              className: ["title", o ? "" : "empty"].join(" "),
              children: ib(o || "Conversa Vazia...", { length: 39 })
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "subtitle", children: a.map((f, m) => /* @__PURE__ */ A.jsx("span", { className: "text-gray-400", children: f }, `content.${m}`)) })
        ] }),
        /* @__PURE__ */ A.jsx(tb, { children: /* @__PURE__ */ A.jsx(JA, {}) })
      ] })
    }
  ) });
}, sb = ({ children: e }) => /* @__PURE__ */ A.jsx(A.Fragment, { children: e }), ab = () => {
  const { conversationId: e } = In(), n = rr((o) => o.conversations), r = N.useMemo(() => n.sort((o, a) => Wi(a.updatedAt) - Wi(o.updatedAt)), [n]);
  return e ? /* @__PURE__ */ A.jsx(sb, { conversationId: e, children: /* @__PURE__ */ A.jsx(XA, { conversationId: e }) }) : /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsxs(YA, { children: [
    /* @__PURE__ */ A.jsx(ZA, { children: /* @__PURE__ */ A.jsx("span", { className: "title", children: "Mensagens" }) }),
    /* @__PURE__ */ A.jsx("div", { className: "page-wrap", children: /* @__PURE__ */ A.jsx("div", { className: "page-container scroll-mini", children: r.map((o, a) => /* @__PURE__ */ A.jsx(
      ob,
      {
        conversationId: o.id
      },
      `conversation.${o.id}.${a}`
    )) }) })
  ] }) });
}, lb = Te.div`
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
`, ub = Te.div`
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
function gv() {
  const e = rr((y) => y.conversations), n = rr((y) => y.add), { loadConversationsRequest: r, createConversationRequest: o } = Ki(), { selectConversation: a } = In(), c = pl(), f = async ({ open: y }) => o().then((g) => r([g]).then(
    ([x]) => (c.emit("conversation.created", { conversation: x }), n(x), y && a(g), x)
  ));
  return {
    conversations: N.useMemo(() => e.sort((y, g) => Wi(g.updatedAt) - Wi(y.updatedAt)), [e]),
    createConversation: f
  };
}
const cb = () => {
  const { home_blocks: e } = vn(), { createConversation: n } = gv(), { sendMessageRequest: r } = Ki();
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: e.map((o, a) => /* @__PURE__ */ A.jsxs(
    lb,
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
        /* @__PURE__ */ A.jsxs(ub, { children: [
          /* @__PURE__ */ A.jsx("span", { className: "block-title", children: o.title }),
          /* @__PURE__ */ A.jsx("span", { className: "block-description", children: o.subtitle })
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "block-icon", children: /* @__PURE__ */ A.jsx(ds, {}) })
      ]
    },
    `predefined.${a}`
  )) });
}, fb = Te($i.div)`
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
`, db = Te.div`
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
`, pb = Te.div`
  background: linear-gradient(180deg, transparent, white);
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
`, hb = Te.div`
  display: flex;
  flex-direction: row;
  padding: 4px 40px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 30;
`, mb = Te.button`
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
`, gb = Te.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: start;
`, yb = Te.div`
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
`, vb = Te.div`
  display: flex;
  flex-direction: row;
`, xb = Te.div`
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
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsxs(gb, { children: [
    /* @__PURE__ */ A.jsxs(yb, { children: [
      /* @__PURE__ */ A.jsx("h1", { children: n }),
      r && a > 0 && /* @__PURE__ */ A.jsxs("span", { children: [
        a,
        " ",
        a === 1 ? "atendente" : "atendentes",
        " ",
        "online"
      ] })
    ] }),
    r && /* @__PURE__ */ A.jsx(vb, { children: o.map((c, f) => /* @__PURE__ */ A.jsx(xb, { children: /* @__PURE__ */ A.jsx("img", { src: c.picture_url }) }, `agent.${f}`)) })
  ] }) });
}, wb = Te.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`, Sb = Te.span`
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`, kb = Te.span`
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`, Tb = () => {
  const {
    headline: { title: e, subtitle: n }
  } = vn();
  return /* @__PURE__ */ A.jsxs(wb, { children: [
    /* @__PURE__ */ A.jsx(Sb, { children: e }),
    /* @__PURE__ */ A.jsx(kb, { children: n })
  ] });
}, Eb = () => {
  const { createConversation: e } = gv();
  return /* @__PURE__ */ A.jsxs(fb, { children: [
    /* @__PURE__ */ A.jsx(db, {}),
    /* @__PURE__ */ A.jsx(pb, {}),
    /* @__PURE__ */ A.jsxs("div", { className: "page-wrap", children: [
      /* @__PURE__ */ A.jsx(_b, {}),
      /* @__PURE__ */ A.jsx(Tb, {}),
      /* @__PURE__ */ A.jsx("div", { className: "page-container", children: /* @__PURE__ */ A.jsx("div", { className: "page-content scroll-mini", children: /* @__PURE__ */ A.jsx(cb, {}) }) })
    ] }),
    /* @__PURE__ */ A.jsx(hb, { children: /* @__PURE__ */ A.jsx(
      mb,
      {
        onClick: () => {
          e({ open: !0 });
        },
        children: "Nos envie uma mensagem"
      }
    ) })
  ] });
}, $o = [
  {
    name: "auth",
    Component: () => /* @__PURE__ */ A.jsx(tC, {}),
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
    Component: () => /* @__PURE__ */ A.jsx(Eb, {}),
    state: {
      showNav: !0
    },
    button: {
      label: "Início",
      Icon: () => /* @__PURE__ */ A.jsx(TE, {}),
      ActiveIcon: () => /* @__PURE__ */ A.jsx(EE, {})
    }
  },
  {
    name: "messages",
    Component: () => /* @__PURE__ */ A.jsx(ab, {}),
    state: {
      showNav: !0
    },
    button: {
      label: "Mensagens",
      Icon: () => /* @__PURE__ */ A.jsx(ds, {}),
      ActiveIcon: () => /* @__PURE__ */ A.jsx(Xf, {})
    }
  }
], Cb = () => {
  const { page: e, go: n, conversationId: r } = In(), o = N.useMemo(() => e ? $o.find((c) => c.name === e).Component : () => /* @__PURE__ */ A.jsx(A.Fragment, {}), [e, $o]), a = N.useMemo(() => {
    var c, f;
    return !!((f = (c = $o.find((m) => m.name === e)) == null ? void 0 : c.state) != null && f.showNav);
  }, [e, $o]);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(
    wE,
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
      children: /* @__PURE__ */ A.jsxs("div", { className: "wrapper", children: [
        /* @__PURE__ */ A.jsx("div", { className: "page-content", children: /* @__PURE__ */ A.jsx(o, {}) }),
        !r && a && /* @__PURE__ */ A.jsx(SE, { children: $o.filter((c) => !!c.button).map((c, f) => /* @__PURE__ */ A.jsxs(
          kE,
          {
            isActive: c.name === e,
            onClick: () => {
              n(c.name);
            },
            children: [
              c.name === e ? c.button.ActiveIcon() : c.button.Icon(),
              /* @__PURE__ */ A.jsx("span", { children: c.button.label })
            ]
          },
          `btn.${f}`
        )) })
      ] })
    }
  ) });
}, Ab = Te($i.div)`
  flex: 1;
  min-height: 100%;
  /* background-color: #000; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  gap: 20px;
  position: absolute;
  width: 380px;
  right: 120px;
  user-select: none;

  .btn-close {
    position: absolute;
    padding: 0 16px;
    top: -40px;
    right: 0;
    height: 30px;
    border-radius: 1000px;
    background: #f5474a;
    border: 1px solid #f5474a;
    color: white;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .popup-item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    align-items: flex-end;

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
      display: flex;
      flex-direction: column;
      font-size: 14px;
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
var yv = {};
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
              for (var _ = p._howls[v]._getSoundIds(), S = 0; S < _.length; S++) {
                var k = p._howls[v]._soundById(_[S]);
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
            for (var _ = p._howls[v]._getSoundIds(), S = 0; S < _.length; S++) {
              var k = p._howls[v]._soundById(_[S]);
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
        var v = p.canPlayType("audio/mpeg;").replace(/^no$/, ""), _ = u._navigator ? u._navigator.userAgent : "", S = _.match(/OPR\/([0-6].)/g), k = S && parseInt(S[0].split("/")[1], 10) < 33, T = _.indexOf("Safari") !== -1 && _.indexOf("Chrome") === -1, C = _.match(/Version\/(.*?) /), L = T && C && parseInt(C[1], 10) < 15;
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
                var _ = new Audio();
                _._unlocked = !0, u._releaseHtml5Audio(_);
              } catch {
                u.noAudio = !0;
                break;
              }
            for (var S = 0; S < u._howls.length; S++)
              if (!u._howls[S]._webAudio)
                for (var k = u._howls[S]._getSoundIds(), T = 0; T < k.length; T++) {
                  var C = u._howls[S]._soundById(k[T]);
                  C && C._node && !C._node._unlocked && (C._node._unlocked = !0, C._node.load());
                }
            u._autoResume();
            var L = u.ctx.createBufferSource();
            L.buffer = u._scratchBuffer, L.connect(u.ctx.destination), typeof L.start > "u" ? L.noteOn(0) : L.start(0), typeof u.ctx.resume == "function" && u.ctx.resume(), L.onended = function() {
              L.disconnect(0), u._audioUnlocked = !0, document.removeEventListener("touchstart", p, !0), document.removeEventListener("touchend", p, !0), document.removeEventListener("click", p, !0), document.removeEventListener("keydown", p, !0);
              for (var j = 0; j < u._howls.length; j++)
                u._howls[j]._emit("unlock");
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
              var _ = function() {
                u.state = "suspended", u._resumeAfterSuspend && (delete u._resumeAfterSuspend, u._autoResume());
              };
              u.ctx.suspend().then(_, _);
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
          var _, S;
          if (u._format && u._format[v])
            _ = u._format[v];
          else {
            if (S = u._src[v], typeof S != "string") {
              u._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            _ = /^data:audio\/([^;,]+);/i.exec(S), _ || (_ = /\.([^.]+)$/.exec(S.split("?", 1)[0])), _ && (_ = _[1].toLowerCase());
          }
          if (_ || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), _ && r.codecs(_)) {
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
        var v = this, _ = null;
        if (typeof u == "number")
          _ = u, u = null;
        else {
          if (typeof u == "string" && v._state === "loaded" && !v._sprite[u])
            return null;
          if (typeof u > "u" && (u = "__default", !v._playLock)) {
            for (var S = 0, k = 0; k < v._sounds.length; k++)
              v._sounds[k]._paused && !v._sounds[k]._ended && (S++, _ = v._sounds[k]._id);
            S === 1 ? u = null : _ = null;
          }
        }
        var T = _ ? v._soundById(_) : v._inactiveSound();
        if (!T)
          return null;
        if (_ && !u && (u = T._sprite || "__default"), v._state !== "loaded") {
          T._sprite = u, T._ended = !1;
          var C = T._id;
          return v._queue.push({
            event: "play",
            action: function() {
              v.play(C);
            }
          }), C;
        }
        if (_ && !T._paused)
          return p || v._loadQueue("play"), T._id;
        v._webAudio && r._autoResume();
        var L = Math.max(0, T._seek > 0 ? T._seek : v._sprite[u][0] / 1e3), j = Math.max(0, (v._sprite[u][0] + v._sprite[u][1]) / 1e3 - L), H = j * 1e3 / Math.abs(T._rate), Z = v._sprite[u][0] / 1e3, K = (v._sprite[u][0] + v._sprite[u][1]) / 1e3;
        T._sprite = u, T._ended = !1;
        var te = function() {
          T._paused = !1, T._seek = L, T._start = Z, T._stop = K, T._loop = !!(T._loop || v._sprite[u][2]);
        };
        if (L >= K) {
          v._ended(T);
          return;
        }
        var J = T._node;
        if (v._webAudio) {
          var Ee = function() {
            v._playLock = !1, te(), v._refreshBuffer(T);
            var ae = T._muted || v._muted ? 0 : T._volume;
            J.gain.setValueAtTime(ae, r.ctx.currentTime), T._playStart = r.ctx.currentTime, typeof J.bufferSource.start > "u" ? T._loop ? J.bufferSource.noteGrainOn(0, L, 86400) : J.bufferSource.noteGrainOn(0, L, j) : T._loop ? J.bufferSource.start(0, L, 86400) : J.bufferSource.start(0, L, j), H !== 1 / 0 && (v._endTimers[T._id] = setTimeout(v._ended.bind(v, T), H)), p || setTimeout(function() {
              v._emit("play", T._id), v._loadQueue();
            }, 0);
          };
          r.state === "running" && r.ctx.state !== "interrupted" ? Ee() : (v._playLock = !0, v.once("resume", Ee), v._clearTimer(T._id));
        } else {
          var Le = function() {
            J.currentTime = L, J.muted = T._muted || v._muted || r._muted || J.muted, J.volume = T._volume * r.volume(), J.playbackRate = T._rate;
            try {
              var ae = J.play();
              if (ae && typeof Promise < "u" && (ae instanceof Promise || typeof ae.then == "function") ? (v._playLock = !0, te(), ae.then(function() {
                v._playLock = !1, J._unlocked = !0, p ? v._loadQueue() : v._emit("play", T._id);
              }).catch(function() {
                v._playLock = !1, v._emit("playerror", T._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), T._ended = !0, T._paused = !0;
              })) : p || (v._playLock = !1, te(), v._emit("play", T._id)), J.playbackRate = T._rate, J.paused) {
                v._emit("playerror", T._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                return;
              }
              u !== "__default" || T._loop ? v._endTimers[T._id] = setTimeout(v._ended.bind(v, T), H) : (v._endTimers[T._id] = function() {
                v._ended(T), J.removeEventListener("ended", v._endTimers[T._id], !1);
              }, J.addEventListener("ended", v._endTimers[T._id], !1));
            } catch (ge) {
              v._emit("playerror", T._id, ge);
            }
          };
          J.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (J.src = v._src, J.load());
          var pe = window && window.ejecta || !J.readyState && r._navigator.isCocoonJS;
          if (J.readyState >= 3 || pe)
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
        var p = this;
        if (p._state !== "loaded" || p._playLock)
          return p._queue.push({
            event: "pause",
            action: function() {
              p.pause(u);
            }
          }), p;
        for (var v = p._getSoundIds(u), _ = 0; _ < v.length; _++) {
          p._clearTimer(v[_]);
          var S = p._soundById(v[_]);
          if (S && !S._paused && (S._seek = p.seek(v[_]), S._rateSeek = 0, S._paused = !0, p._stopFade(v[_]), S._node))
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
        for (var _ = v._getSoundIds(u), S = 0; S < _.length; S++) {
          v._clearTimer(_[S]);
          var k = v._soundById(_[S]);
          k && (k._seek = k._start || 0, k._rateSeek = 0, k._paused = !0, k._ended = !0, v._stopFade(_[S]), k._node && (v._webAudio ? k._node.bufferSource && (typeof k._node.bufferSource.stop > "u" ? k._node.bufferSource.noteOff(0) : k._node.bufferSource.stop(0), v._cleanBuffer(k._node)) : (!isNaN(k._node.duration) || k._node.duration === 1 / 0) && (k._node.currentTime = k._start || 0, k._node.pause(), k._node.duration === 1 / 0 && v._clearSound(k._node))), p || v._emit("stop", k._id));
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
        for (var _ = v._getSoundIds(p), S = 0; S < _.length; S++) {
          var k = v._soundById(_[S]);
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
        var u = this, p = arguments, v, _;
        if (p.length === 0)
          return u._volume;
        if (p.length === 1 || p.length === 2 && typeof p[1] > "u") {
          var S = u._getSoundIds(), k = S.indexOf(p[0]);
          k >= 0 ? _ = parseInt(p[0], 10) : v = parseFloat(p[0]);
        } else
          p.length >= 2 && (v = parseFloat(p[0]), _ = parseInt(p[1], 10));
        var T;
        if (typeof v < "u" && v >= 0 && v <= 1) {
          if (u._state !== "loaded" || u._playLock)
            return u._queue.push({
              event: "volume",
              action: function() {
                u.volume.apply(u, p);
              }
            }), u;
          typeof _ > "u" && (u._volume = v), _ = u._getSoundIds(_);
          for (var C = 0; C < _.length; C++)
            T = u._soundById(_[C]), T && (T._volume = v, p[2] || u._stopFade(_[C]), u._webAudio && T._node && !T._muted ? T._node.gain.setValueAtTime(v, r.ctx.currentTime) : T._node && !T._muted && (T._node.volume = v * r.volume()), u._emit("volume", T._id));
        } else
          return T = _ ? u._soundById(_) : u._sounds[0], T ? T._volume : 0;
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
      fade: function(u, p, v, _) {
        var S = this;
        if (S._state !== "loaded" || S._playLock)
          return S._queue.push({
            event: "fade",
            action: function() {
              S.fade(u, p, v, _);
            }
          }), S;
        u = Math.min(Math.max(0, parseFloat(u)), 1), p = Math.min(Math.max(0, parseFloat(p)), 1), v = parseFloat(v), S.volume(u, _);
        for (var k = S._getSoundIds(_), T = 0; T < k.length; T++) {
          var C = S._soundById(k[T]);
          if (C) {
            if (_ || S._stopFade(k[T]), S._webAudio && !C._muted) {
              var L = r.ctx.currentTime, j = L + v / 1e3;
              C._volume = u, C._node.gain.setValueAtTime(u, L), C._node.gain.linearRampToValueAtTime(p, j);
            }
            S._startFadeInterval(C, u, p, v, k[T], typeof _ > "u");
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
      _startFadeInterval: function(u, p, v, _, S, k) {
        var T = this, C = p, L = v - p, j = Math.abs(L / 0.01), H = Math.max(4, j > 0 ? _ / j : _), Z = Date.now();
        u._fadeTo = v, u._interval = setInterval(function() {
          var K = (Date.now() - Z) / _;
          Z = Date.now(), C += L * K, C = Math.round(C * 100) / 100, L < 0 ? C = Math.max(v, C) : C = Math.min(v, C), T._webAudio ? u._volume = C : T.volume(C, u._id, !0), k && (T._volume = C), (v < p && C <= v || v > p && C >= v) && (clearInterval(u._interval), u._interval = null, u._fadeTo = null, T.volume(v, u._id), T._emit("fade", u._id));
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
        var u = this, p = arguments, v, _, S;
        if (p.length === 0)
          return u._loop;
        if (p.length === 1)
          if (typeof p[0] == "boolean")
            v = p[0], u._loop = v;
          else
            return S = u._soundById(parseInt(p[0], 10)), S ? S._loop : !1;
        else
          p.length === 2 && (v = p[0], _ = parseInt(p[1], 10));
        for (var k = u._getSoundIds(_), T = 0; T < k.length; T++)
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
        var u = this, p = arguments, v, _;
        if (p.length === 0)
          _ = u._sounds[0]._id;
        else if (p.length === 1) {
          var S = u._getSoundIds(), k = S.indexOf(p[0]);
          k >= 0 ? _ = parseInt(p[0], 10) : v = parseFloat(p[0]);
        } else
          p.length === 2 && (v = parseFloat(p[0]), _ = parseInt(p[1], 10));
        var T;
        if (typeof v == "number") {
          if (u._state !== "loaded" || u._playLock)
            return u._queue.push({
              event: "rate",
              action: function() {
                u.rate.apply(u, p);
              }
            }), u;
          typeof _ > "u" && (u._rate = v), _ = u._getSoundIds(_);
          for (var C = 0; C < _.length; C++)
            if (T = u._soundById(_[C]), T) {
              u.playing(_[C]) && (T._rateSeek = u.seek(_[C]), T._playStart = u._webAudio ? r.ctx.currentTime : T._playStart), T._rate = v, u._webAudio && T._node && T._node.bufferSource ? T._node.bufferSource.playbackRate.setValueAtTime(v, r.ctx.currentTime) : T._node && (T._node.playbackRate = v);
              var L = u.seek(_[C]), j = (u._sprite[T._sprite][0] + u._sprite[T._sprite][1]) / 1e3 - L, H = j * 1e3 / Math.abs(T._rate);
              (u._endTimers[_[C]] || !T._paused) && (u._clearTimer(_[C]), u._endTimers[_[C]] = setTimeout(u._ended.bind(u, T), H)), u._emit("rate", T._id);
            }
        } else
          return T = u._soundById(_), T ? T._rate : u._rate;
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
        var u = this, p = arguments, v, _;
        if (p.length === 0)
          u._sounds.length && (_ = u._sounds[0]._id);
        else if (p.length === 1) {
          var S = u._getSoundIds(), k = S.indexOf(p[0]);
          k >= 0 ? _ = parseInt(p[0], 10) : u._sounds.length && (_ = u._sounds[0]._id, v = parseFloat(p[0]));
        } else
          p.length === 2 && (v = parseFloat(p[0]), _ = parseInt(p[1], 10));
        if (typeof _ > "u")
          return 0;
        if (typeof v == "number" && (u._state !== "loaded" || u._playLock))
          return u._queue.push({
            event: "seek",
            action: function() {
              u.seek.apply(u, p);
            }
          }), u;
        var T = u._soundById(_);
        if (T)
          if (typeof v == "number" && v >= 0) {
            var C = u.playing(_);
            C && u.pause(_, !0), T._seek = v, T._ended = !1, u._clearTimer(_), !u._webAudio && T._node && !isNaN(T._node.duration) && (T._node.currentTime = v);
            var L = function() {
              C && u.play(_, !0), u._emit("seek", _);
            };
            if (C && !u._webAudio) {
              var j = function() {
                u._playLock ? setTimeout(j, 0) : L();
              };
              setTimeout(j, 0);
            } else
              L();
          } else if (u._webAudio) {
            var H = u.playing(_) ? r.ctx.currentTime - T._playStart : 0, Z = T._rateSeek ? T._rateSeek - T._seek : 0;
            return T._seek + (Z + H * Math.abs(T._rate));
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
        for (var _ = 0; _ < p._sounds.length; _++)
          if (!p._sounds[_]._paused)
            return !0;
        return !1;
      },
      /**
       * Get the duration of this sound. Passing a sound id will return the sprite duration.
       * @param  {Number} id The sound id to check. If none is passed, return full source duration.
       * @return {Number} Audio duration in seconds.
       */
      duration: function(u) {
        var p = this, v = p._duration, _ = p._soundById(u);
        return _ && (v = p._sprite[_._sprite][1] / 1e3), v;
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
        var _ = r._howls.indexOf(u);
        _ >= 0 && r._howls.splice(_, 1);
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
      on: function(u, p, v, _) {
        var S = this, k = S["_on" + u];
        return typeof p == "function" && k.push(_ ? { id: v, fn: p, once: _ } : { id: v, fn: p }), S;
      },
      /**
       * Remove a custom event. Call without parameters to remove all events.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to remove. Leave empty to remove all.
       * @param  {Number}   id    (optional) Only remove events for this sound.
       * @return {Howl}
       */
      off: function(u, p, v) {
        var _ = this, S = _["_on" + u], k = 0;
        if (typeof p == "number" && (v = p, p = null), p || v)
          for (k = 0; k < S.length; k++) {
            var T = v === S[k].id;
            if (p === S[k].fn && T || !p && T) {
              S.splice(k, 1);
              break;
            }
          }
        else if (u)
          _["_on" + u] = [];
        else {
          var C = Object.keys(_);
          for (k = 0; k < C.length; k++)
            C[k].indexOf("_on") === 0 && Array.isArray(_[C[k]]) && (_[C[k]] = []);
        }
        return _;
      },
      /**
       * Listen to a custom event and remove it once fired.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @return {Howl}
       */
      once: function(u, p, v) {
        var _ = this;
        return _.on(u, p, v, 1), _;
      },
      /**
       * Emit all events of a specific type and pass the sound id.
       * @param  {String} event Event name.
       * @param  {Number} id    Sound ID.
       * @param  {Number} msg   Message to go with event.
       * @return {Howl}
       */
      _emit: function(u, p, v) {
        for (var _ = this, S = _["_on" + u], k = S.length - 1; k >= 0; k--)
          (!S[k].id || S[k].id === p || u === "load") && (setTimeout(function(T) {
            T.call(this, p, v);
          }.bind(_, S[k].fn), 0), S[k].once && _.off(u, S[k].fn, S[k].id));
        return _._loadQueue(u), _;
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
        var _ = !!(u._loop || p._sprite[v][2]);
        if (p._emit("end", u._id), !p._webAudio && _ && p.stop(u._id, !0).play(u._id), p._webAudio && _) {
          p._emit("play", u._id), u._seek = u._start || 0, u._rateSeek = 0, u._playStart = r.ctx.currentTime;
          var S = (u._stop - u._start) * 1e3 / Math.abs(u._rate);
          p._endTimers[u._id] = setTimeout(p._ended.bind(p, u), S);
        }
        return p._webAudio && !_ && (u._paused = !0, u._ended = !0, u._seek = u._start || 0, u._rateSeek = 0, p._clearTimer(u._id), p._cleanBuffer(u._node), r._autoSuspend()), !p._webAudio && !_ && p.stop(u._id, !0), p;
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
        var u = this, p = u._pool, v = 0, _ = 0;
        if (!(u._sounds.length < p)) {
          for (_ = 0; _ < u._sounds.length; _++)
            u._sounds[_]._ended && v++;
          for (_ = u._sounds.length - 1; _ >= 0; _--) {
            if (v <= p)
              return;
            u._sounds[_]._ended && (u._webAudio && u._sounds[_]._node && u._sounds[_]._node.disconnect(0), u._sounds.splice(_, 1), v--);
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
          for (var v = [], _ = 0; _ < p._sounds.length; _++)
            v.push(p._sounds[_]._id);
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
        for (var v = atob(p.split(",")[1]), _ = new Uint8Array(v.length), S = 0; S < v.length; ++S)
          _[S] = v.charCodeAt(S);
        y(_.buffer, u);
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
      }, _ = function(S) {
        S && p._sounds.length > 0 ? (c[p._src] = S, g(p, S)) : v();
      };
      typeof Promise < "u" && r.ctx.decodeAudioData.length === 1 ? r.ctx.decodeAudioData(u).then(_).catch(v) : r.ctx.decodeAudioData(u, _, v);
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
          var _ = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
          r._navigator && !_ && (r.usingWebAudio = !1);
        }
        r.usingWebAudio && (r.masterGain = typeof r.ctx.createGain > "u" ? r.ctx.createGainNode() : r.ctx.createGain(), r.masterGain.gain.setValueAtTime(r._muted ? 0 : r._volume, r.ctx.currentTime), r.masterGain.connect(r.ctx.destination)), r._setup();
      }
    };
    e.Howler = r, e.Howl = o, typeof Yn < "u" ? (Yn.HowlerGlobal = n, Yn.Howler = r, Yn.Howl = o, Yn.Sound = a) : typeof window < "u" && (window.HowlerGlobal = n, window.Howler = r, window.Howl = o, window.Sound = a);
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
})(yv);
const vv = {
  playSound: async (e) => {
    const n = new yv.Howl({
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
}, bb = () => {
  var v;
  const { popup_messages: e, ringtones: n } = vn(), { isAlreadyOpen: r } = In(), [o, a] = N.useState(-1), [c, f] = N.useState(!1), [m, y] = N.useState(!1), g = H0((v = e[0]) == null ? void 0 : v.agentId), x = N.useMemo(() => e, [e]), u = N.useMemo(() => x.filter((_, S) => S <= o), [o, x]), p = N.useCallback(
    (_) => {
      if (o >= u.length) {
        _();
        return;
      }
      a((S) => {
        const k = S + 1;
        return k === 0 && e.length > 0 && !r && vv.playSound(n.popup_message), k;
      });
    },
    [u.length, o, r, e.length]
  );
  return N.useEffect(() => {
    setTimeout(() => {
      y(() => !0);
    }, 4e3);
  }, []), N.useEffect(() => {
    if (m) {
      const _ = setInterval(() => {
        p(() => clearInterval(_));
      }, 2e3);
      return () => clearInterval(_);
    }
  }, [m, p]), /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(L0, { children: !r && !c && u.length > 0 && /* @__PURE__ */ A.jsx(
    Ab,
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
      transition: { duration: 0.1, ease: [0.42, 0, 0.58, 1] },
      children: /* @__PURE__ */ A.jsxs(_E, { children: [
        /* @__PURE__ */ A.jsx(
          $i.button,
          {
            layout: !0,
            className: "btn-close",
            onClick: () => {
              f(() => !0);
            },
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
            children: "Fechar"
          }
        ),
        u.map((_, S) => /* @__PURE__ */ A.jsxs(
          $i.div,
          {
            layout: !0,
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
            transition: o <= 0 ? void 0 : { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
            className: "popup-item",
            children: [
              g.picture_url && /* @__PURE__ */ A.jsx("div", { className: "popup-item__avatar", children: /* @__PURE__ */ A.jsx("img", { src: g.picture_url, alt: "avatar" }) }),
              /* @__PURE__ */ A.jsx("div", { className: "popup-item__content", children: _.message.split(`
`).map((k, T) => /* @__PURE__ */ A.jsx("p", { children: k }, `popup.${S}.line.${T}`)) })
            ]
          },
          `popup.${S}`
        ))
      ] })
    }
  ) }) });
}, Pb = () => {
  const { isOpen: e, toggle: n, go: r } = In(), { layout: o } = vn(), { isAuth: a } = Cl(), { app: c } = vn();
  return N.useEffect(() => {
    !a && c.is_auth_required ? r("auth") : r("home");
  }, []), /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(L_, { theme: o, children: /* @__PURE__ */ A.jsx(tw, { children: /* @__PURE__ */ A.jsxs(nw, { isOpen: e, children: [
    /* @__PURE__ */ A.jsx(L0, { children: e && /* @__PURE__ */ A.jsx(Cb, {}) }),
    /* @__PURE__ */ A.jsxs(rw, { children: [
      /* @__PURE__ */ A.jsx(bb, {}),
      /* @__PURE__ */ A.jsx(iw, { isOpen: e, onClick: n, children: e ? /* @__PURE__ */ A.jsx(Xf, {}) : /* @__PURE__ */ A.jsx(ds, {}) })
    ] })
  ] }) }) }) });
}, Rb = ({
  children: e
}) => {
  const { loadConversationsRequest: n } = Ki(), r = rr((o) => o.set);
  return N.useEffect(() => {
    n().then((o) => {
      r(o);
    });
  }, []), /* @__PURE__ */ A.jsx(A.Fragment, { children: e });
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
const Ob = { type: "error", data: "parser error" }, Lb = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Db = typeof ArrayBuffer == "function", Mb = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, xv = ({ type: e, data: n }, r, o) => Lb && n instanceof Blob ? r ? o(n) : Bg(n, o) : Db && (n instanceof ArrayBuffer || Mb(n)) ? r ? o(n) : Bg(new Blob([n]), o) : o(Fn[e] + (n || "")), Bg = (e, n) => {
  const r = new FileReader();
  return r.onload = function() {
    const o = r.result.split(",")[1];
    n("b" + (o || ""));
  }, r.readAsDataURL(e);
}, zg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < zg.length; e++)
  qo[zg.charCodeAt(e)] = e;
const Nb = (e) => {
  let n = e.length * 0.75, r = e.length, o, a = 0, c, f, m, y;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const g = new ArrayBuffer(n), x = new Uint8Array(g);
  for (o = 0; o < r; o += 4)
    c = qo[e.charCodeAt(o)], f = qo[e.charCodeAt(o + 1)], m = qo[e.charCodeAt(o + 2)], y = qo[e.charCodeAt(o + 3)], x[a++] = c << 2 | f >> 4, x[a++] = (f & 15) << 4 | m >> 2, x[a++] = (m & 3) << 6 | y & 63;
  return g;
}, Fb = typeof ArrayBuffer == "function", _v = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: wv(e, n)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: Ib(e.substring(1), n)
  } : Wa[r] ? e.length > 1 ? {
    type: Wa[r],
    data: e.substring(1)
  } : {
    type: Wa[r]
  } : Ob;
}, Ib = (e, n) => {
  if (Fb) {
    const r = Nb(e);
    return wv(r, n);
  } else
    return { base64: !0, data: e };
}, wv = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, Sv = String.fromCharCode(30), Vb = (e, n) => {
  const r = e.length, o = new Array(r);
  let a = 0;
  e.forEach((c, f) => {
    xv(c, !1, (m) => {
      o[f] = m, ++a === r && n(o.join(Sv));
    });
  });
}, jb = (e, n) => {
  const r = e.split(Sv), o = [];
  for (let a = 0; a < r.length; a++) {
    const c = _v(r[a], n);
    if (o.push(c), c.type === "error")
      break;
  }
  return o;
}, kv = 4;
function at(e) {
  if (e)
    return Bb(e);
}
function Bb(e) {
  for (var n in at.prototype)
    e[n] = at.prototype[n];
  return e;
}
at.prototype.on = at.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
at.prototype.once = function(e, n) {
  function r() {
    this.off(e, r), n.apply(this, arguments);
  }
  return r.fn = n, this.on(e, r), this;
};
at.prototype.off = at.prototype.removeListener = at.prototype.removeAllListeners = at.prototype.removeEventListener = function(e, n) {
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
at.prototype.emit = function(e) {
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
at.prototype.emitReserved = at.prototype.emit;
at.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
at.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const on = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function Tv(e, ...n) {
  return n.reduce((r, o) => (e.hasOwnProperty(o) && (r[o] = e[o]), r), {});
}
const zb = on.setTimeout, Ub = on.clearTimeout;
function Dl(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = zb.bind(on), e.clearTimeoutFn = Ub.bind(on)) : (e.setTimeoutFn = on.setTimeout.bind(on), e.clearTimeoutFn = on.clearTimeout.bind(on));
}
const $b = 1.33;
function Hb(e) {
  return typeof e == "string" ? Wb(e) : Math.ceil((e.byteLength || e.size) * $b);
}
function Wb(e) {
  let n = 0, r = 0;
  for (let o = 0, a = e.length; o < a; o++)
    n = e.charCodeAt(o), n < 128 ? r += 1 : n < 2048 ? r += 2 : n < 55296 || n >= 57344 ? r += 3 : (o++, r += 4);
  return r;
}
class qb extends Error {
  constructor(n, r, o) {
    super(n), this.description = r, this.context = o, this.type = "TransportError";
  }
}
class Ev extends at {
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
    return super.emitReserved("error", new qb(n, r, o)), this;
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
const Cv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), kf = 64, Gb = {};
let Ug = 0, La = 0, $g;
function Hg(e) {
  let n = "";
  do
    n = Cv[e % kf] + n, e = Math.floor(e / kf);
  while (e > 0);
  return n;
}
function Av() {
  const e = Hg(+/* @__PURE__ */ new Date());
  return e !== $g ? (Ug = 0, $g = e) : e + "." + Hg(Ug++);
}
for (; La < kf; La++)
  Gb[Cv[La]] = La;
function bv(e) {
  let n = "";
  for (let r in e)
    e.hasOwnProperty(r) && (n.length && (n += "&"), n += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return n;
}
function Kb(e) {
  let n = {}, r = e.split("&");
  for (let o = 0, a = r.length; o < a; o++) {
    let c = r[o].split("=");
    n[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return n;
}
let Pv = !1;
try {
  Pv = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Qb = Pv;
function Rv(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || Qb))
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
const Yb = function() {
  return new Rv({
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
    this.supportsBinary = Yb && !r;
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
    jb(n, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Av()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.opts.port && (r === "https" && Number(this.opts.port) !== 443 || r === "http" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port);
    const a = bv(n), c = this.opts.hostname.indexOf(":") !== -1;
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
class Nn extends at {
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
    const n = Tv(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd, n.xscheme = !!this.opts.xs;
    const r = this.xhr = new Rv(n);
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
    attachEvent("onunload", Wg);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in on ? "pagehide" : "unload";
    addEventListener(e, Wg, !1);
  }
}
function Wg() {
  for (let e in Nn.requests)
    Nn.requests.hasOwnProperty(e) && Nn.requests[e].abort();
}
const Ov = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, r) => r(n, 0))(), Da = on.WebSocket || on.MozWebSocket, qg = !0, Jb = "arraybuffer", Gg = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class eP extends Ev {
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
    const n = this.uri(), r = this.opts.protocols, o = Gg ? {} : Tv(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
    try {
      this.ws = qg && !Gg ? r ? new Da(n, r) : new Da(n) : new Da(n, r, o);
    } catch (a) {
      return this.emitReserved("error", a);
    }
    this.ws.binaryType = this.socket.binaryType || Jb, this.addEventListeners();
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
      xv(o, this.supportsBinary, (c) => {
        const f = {};
        try {
          qg && this.ws.send(c);
        } catch {
        }
        a && Ov(() => {
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
    this.opts.port && (r === "wss" && Number(this.opts.port) !== 443 || r === "ws" && Number(this.opts.port) !== 80) && (o = ":" + this.opts.port), this.opts.timestampRequests && (n[this.opts.timestampParam] = Av()), this.supportsBinary || (n.b64 = 1);
    const a = bv(n), c = this.opts.hostname.indexOf(":") !== -1;
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
const tP = {
  websocket: eP,
  polling: Zb
}, nP = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, rP = [
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
  let a = nP.exec(e || ""), c = {}, f = 14;
  for (; f--; )
    c[rP[f]] = a[f] || "";
  return r != -1 && o != -1 && (c.source = n, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0), c.pathNames = iP(c, c.path), c.queryKey = oP(c, c.query), c;
}
function iP(e, n) {
  const r = /\/{2,9}/g, o = n.replace(r, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && o.splice(0, 1), n.slice(-1) == "/" && o.splice(o.length - 1, 1), o;
}
function oP(e, n) {
  const r = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, a, c) {
    a && (r[a] = c);
  }), r;
}
let Lv = class Ri extends at {
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Kb(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    r.EIO = kv, r.transport = n, this.id && (r.sid = this.id);
    const o = Object.assign({}, this.opts.transportOptions[n], this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new tP[n](o);
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
      if (a && (r += Hb(a)), o > 0 && r > this.maxPayload)
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
Lv.protocol = kv;
function sP(e, n = "", r) {
  let o = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), o = Tf(e)), o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")), o.path = o.path || "/";
  const c = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
  return o.id = o.protocol + "://" + c + ":" + o.port + n, o.href = o.protocol + "://" + c + (r && r.port === o.port ? "" : ":" + o.port), o;
}
const aP = typeof ArrayBuffer == "function", lP = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Dv = Object.prototype.toString, uP = typeof Blob == "function" || typeof Blob < "u" && Dv.call(Blob) === "[object BlobConstructor]", cP = typeof File == "function" || typeof File < "u" && Dv.call(File) === "[object FileConstructor]";
function sd(e) {
  return aP && (e instanceof ArrayBuffer || lP(e)) || uP && e instanceof Blob || cP && e instanceof File;
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
function fP(e) {
  const n = [], r = e.data, o = e;
  return o.data = Ef(r, n), o.attachments = n.length, { packet: o, buffers: n };
}
function Ef(e, n) {
  if (!e)
    return e;
  if (sd(e)) {
    const r = { _placeholder: !0, num: n.length };
    return n.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let o = 0; o < e.length; o++)
      r[o] = Ef(e[o], n);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const o in e)
      Object.prototype.hasOwnProperty.call(e, o) && (r[o] = Ef(e[o], n));
    return r;
  }
  return e;
}
function dP(e, n) {
  return e.data = Cf(e.data, n), delete e.attachments, e;
}
function Cf(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = Cf(e[r], n);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Cf(e[r], n));
  return e;
}
const pP = 5;
var Re;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Re || (Re = {}));
class hP {
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
    const r = fP(n), o = this.encodeAsString(r.packet), a = r.buffers;
    return a.unshift(o), a;
  }
}
class ad extends at {
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
      o || r.type === Re.BINARY_ACK ? (r.type = o ? Re.EVENT : Re.ACK, this.reconstructor = new mP(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
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
class mP {
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
      const r = dP(this.reconPack, this.buffers);
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
const gP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ad,
  Encoder: hP,
  get PacketType() {
    return Re;
  },
  protocol: pP
}, Symbol.toStringTag, { value: "Module" }));
function mn(e, n, r) {
  return e.on(n, r), function() {
    e.off(n, r);
  };
}
const yP = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Mv extends at {
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
    if (yP.hasOwnProperty(n))
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
class Af extends at {
  constructor(n, r) {
    var o;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (r = n, n = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Dl(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((o = r.randomizationFactor) !== null && o !== void 0 ? o : 0.5), this.backoff = new Qi({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = n;
    const a = r.parser || gP;
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
    this.engine = new Lv(this.uri, this.opts);
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
    Ov(() => {
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
    return o ? this._autoConnect && !o.active && o.connect() : (o = new Mv(this, n, r), this.nsps[n] = o), o;
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
  const r = sP(e, n.path || "/socket.io"), o = r.source, a = r.id, c = r.path, f = Ho[a] && c in Ho[a].nsps, m = n.forceNew || n["force new connection"] || n.multiplex === !1 || f;
  let y;
  return m ? y = new Af(o, n) : (Ho[a] || (Ho[a] = new Af(o, n)), y = Ho[a]), r.query && !n.query && (n.query = r.queryKey), y.socket(r.path, n);
}
Object.assign(Ga, {
  Manager: Af,
  Socket: Mv,
  io: Ga,
  connect: Ga
});
let bi;
function Kc(e, n, r = []) {
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
const vP = ({
  children: e
}) => {
  const n = rr((v) => v.update), r = pl(), { ringtones: o } = vn(), { conversationId: a } = In(), c = cv(), { loadMessagesRequest: f, loadConversationsRequest: m } = Ki(), y = hv(
    (v) => v.updateOrCreateMany
  ), g = rr(
    (v) => v.conversations.map((_) => _.id)
  ), x = N.useCallback(
    ({ message: v }) => {
      console.log({
        conversationId: a,
        message: v.conversationId
      });
      const _ = v.from === `remote:${c}`, S = v.conversationId === a, k = document.visibilityState === "visible", T = g.includes(
        v.conversationId
      );
      (!S || !k) && !_ && T && vv.playSound(o.new_message), y([
        {
          ...v,
          fromRemote: _,
          agent: "bot"
        }
      ]);
    },
    [a, c, g]
  ), u = N.useCallback(
    ({ conversationId: v }) => {
      f(v).then((_) => {
        y(
          _.map((S) => ({
            ...S,
            fromRemote: S.from === `remote:${c}`,
            agent: "bot"
          }))
        );
      });
    },
    [c]
  ), p = N.useCallback(async ({ conversationId: v, messageId: _ }) => {
    await Promise.all([
      await m([v]).then(
        ([S]) => {
          n(v, S);
        }
      ),
      await f(v, [_]).then(
        ([S]) => {
          S.from !== `remote:${c}` && r.emit("message", { message: S });
        }
      )
    ]);
  }, []);
  return Kc("web.conversation.typing", ({ conversationId: v, isTyping: _ }) => {
    n(v, { isTyping: _ });
  }), Kc("web.conversation.closed", ({ conversationId: v, isClosed: _ }) => {
    n(v, { isClosed: _ });
  }), Kc("web.messages.created", p, [p]), N.useEffect(() => (r.on("message", x), r.on("conversation.opened", u), () => {
    r.off("message", x), r.off("conversation.opened", u);
  }), [x, u]), /* @__PURE__ */ A.jsx(A.Fragment, { children: e });
}, xP = ({ app: e, events: n }) => /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx(jx, { events: n, app: e, children: /* @__PURE__ */ A.jsx(eC, { children: /* @__PURE__ */ A.jsx(wA, { app_id: e.settings.app_id, children: /* @__PURE__ */ A.jsx(zx, { children: /* @__PURE__ */ A.jsxs(Rb, { children: [
  /* @__PURE__ */ A.jsx(vP, {}),
  /* @__PURE__ */ A.jsx(Pb, {})
] }) }) }) }) }) });
class _P {
  constructor(n, r) {
    this.params = n, this.settings = r;
  }
}
var Nv = { exports: {} };
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
    var v = new a(x, u || y, p), _ = r ? r + g : g;
    return y._events[_] ? y._events[_].fn ? y._events[_] = [y._events[_], v] : y._events[_].push(v) : (y._events[_] = v, y._eventsCount++), y;
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
    for (var p = 0, v = u.length, _ = new Array(v); p < v; p++)
      _[p] = u[p].fn;
    return _;
  }, m.prototype.listenerCount = function(g) {
    var x = r ? r + g : g, u = this._events[x];
    return u ? u.fn ? 1 : u.length : 0;
  }, m.prototype.emit = function(g, x, u, p, v, _) {
    var S = r ? r + g : g;
    if (!this._events[S])
      return !1;
    var k = this._events[S], T = arguments.length, C, L;
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
          return k.fn.call(k.context, x, u, p, v, _), !0;
      }
      for (L = 1, C = new Array(T - 1); L < T; L++)
        C[L - 1] = arguments[L];
      k.fn.apply(k.context, C);
    } else {
      var j = k.length, H;
      for (L = 0; L < j; L++)
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
            if (!C)
              for (H = 1, C = new Array(T - 1); H < T; H++)
                C[H - 1] = arguments[H];
            k[L].fn.apply(k[L].context, C);
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
    var _ = this._events[v];
    if (_.fn)
      _.fn === x && (!p || _.once) && (!u || _.context === u) && f(this, v);
    else {
      for (var S = 0, k = [], T = _.length; S < T; S++)
        (_[S].fn !== x || p && !_[S].once || u && _[S].context !== u) && k.push(_[S]);
      k.length ? this._events[v] = k.length === 1 ? k[0] : k : f(this, v);
    }
    return this;
  }, m.prototype.removeAllListeners = function(g) {
    var x;
    return g ? (x = r ? r + g : g, this._events[x] && f(this, x)) : (this._events = new o(), this._eventsCount = 0), this;
  }, m.prototype.off = m.prototype.removeListener, m.prototype.addListener = m.prototype.on, m.prefixed = r, m.EventEmitter = m, e.exports = m;
})(Nv);
var wP = Nv.exports;
const SP = /* @__PURE__ */ fl(wP);
class ld {
  constructor(n = "root", r) {
    yc(this, "app");
    yc(this, "events", new SP());
    this.elementId = n, this.props = r, this.app = new _P(this.props.params, this.props.settings);
  }
  async render() {
    Qc.createRoot(
      document.getElementById(this.elementId)
    ).render(
      /* @__PURE__ */ A.jsx(yn.StrictMode, { children: /* @__PURE__ */ A.jsx(xP, { app: this.app, events: this.events }) })
    );
  }
  static async load({
    app_id: n,
    url: r,
    user: o
  }) {
    var v, _, S;
    const a = `zapdesk-web-${n}`, c = r || "https://zapdesk.api.homolog.idevit.app", f = Object.assign(document.createElement("link"), {
      href: "https://cdn.jsdelivr.net/gh/deviiit/zapdesk-static-files@main/web-chat/style.css",
      rel: "stylesheet"
    });
    document.head.append(f);
    const m = await fetch(
      `${c}/api/web/connections/${n}/configs`
    ).then((k) => k.json()).then((k) => k.data.configs).then((k) => k).catch(() => {
    }), y = (o == null ? void 0 : o.user_id) || m.settings.user_id || void 0, g = (o == null ? void 0 : o.name) || ((v = m.settings) == null ? void 0 : v.name) || void 0, x = (o == null ? void 0 : o.email) || ((_ = m.settings) == null ? void 0 : _.email) || (o == null ? void 0 : o.email) || void 0, u = (o == null ? void 0 : o.phone_number) || ((S = m.settings) == null ? void 0 : S.phone_number) || void 0;
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
