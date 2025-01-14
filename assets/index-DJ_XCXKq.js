;(function () {
  const i = document.createElement('link').relList
  if (i && i.supports && i.supports('modulepreload')) return
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) l(u)
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === 'childList')
        for (const f of d.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && l(f)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(u) {
    const d = {}
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : u.crossOrigin === 'anonymous'
        ? (d.credentials = 'omit')
        : (d.credentials = 'same-origin'),
      d
    )
  }
  function l(u) {
    if (u.ep) return
    u.ep = !0
    const d = s(u)
    fetch(u.href, d)
  }
})()
function Na(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
    ? n.default
    : n
}
var ql = { exports: {} },
  si = {},
  Zl = { exports: {} },
  oe = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad
function oy() {
  if (ad) return oe
  ad = 1
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    l = Symbol.for('react.strict_mode'),
    u = Symbol.for('react.profiler'),
    d = Symbol.for('react.provider'),
    f = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    w = Symbol.iterator
  function P(E) {
    return E === null || typeof E != 'object'
      ? null
      : ((E = (w && E[w]) || E['@@iterator']),
        typeof E == 'function' ? E : null)
  }
  var D = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    C = {}
  function A(E, V, se) {
    ;(this.props = E),
      (this.context = V),
      (this.refs = C),
      (this.updater = se || D)
  }
  ;(A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (E, V) {
      if (typeof E != 'object' && typeof E != 'function' && E != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, E, V, 'setState')
    }),
    (A.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, 'forceUpdate')
    })
  function N() {}
  N.prototype = A.prototype
  function z(E, V, se) {
    ;(this.props = E),
      (this.context = V),
      (this.refs = C),
      (this.updater = se || D)
  }
  var B = (z.prototype = new N())
  ;(B.constructor = z), k(B, A.prototype), (B.isPureReactComponent = !0)
  var G = Array.isArray,
    U = Object.prototype.hasOwnProperty,
    b = { current: null },
    ie = { key: !0, ref: !0, __self: !0, __source: !0 }
  function q(E, V, se) {
    var le,
      ue = {},
      ce = null,
      me = null
    if (V != null)
      for (le in (V.ref !== void 0 && (me = V.ref),
      V.key !== void 0 && (ce = '' + V.key),
      V))
        U.call(V, le) && !ie.hasOwnProperty(le) && (ue[le] = V[le])
    var de = arguments.length - 2
    if (de === 1) ue.children = se
    else if (1 < de) {
      for (var Se = Array(de), lt = 0; lt < de; lt++) Se[lt] = arguments[lt + 2]
      ue.children = Se
    }
    if (E && E.defaultProps)
      for (le in ((de = E.defaultProps), de))
        ue[le] === void 0 && (ue[le] = de[le])
    return {
      $$typeof: n,
      type: E,
      key: ce,
      ref: me,
      props: ue,
      _owner: b.current,
    }
  }
  function pe(E, V) {
    return {
      $$typeof: n,
      type: E.type,
      key: V,
      ref: E.ref,
      props: E.props,
      _owner: E._owner,
    }
  }
  function we(E) {
    return typeof E == 'object' && E !== null && E.$$typeof === n
  }
  function Ue(E) {
    var V = { '=': '=0', ':': '=2' }
    return (
      '$' +
      E.replace(/[=:]/g, function (se) {
        return V[se]
      })
    )
  }
  var Oe = /\/+/g
  function De(E, V) {
    return typeof E == 'object' && E !== null && E.key != null
      ? Ue('' + E.key)
      : V.toString(36)
  }
  function Le(E, V, se, le, ue) {
    var ce = typeof E
    ;(ce === 'undefined' || ce === 'boolean') && (E = null)
    var me = !1
    if (E === null) me = !0
    else
      switch (ce) {
        case 'string':
        case 'number':
          me = !0
          break
        case 'object':
          switch (E.$$typeof) {
            case n:
            case i:
              me = !0
          }
      }
    if (me)
      return (
        (me = E),
        (ue = ue(me)),
        (E = le === '' ? '.' + De(me, 0) : le),
        G(ue)
          ? ((se = ''),
            E != null && (se = E.replace(Oe, '$&/') + '/'),
            Le(ue, V, se, '', function (lt) {
              return lt
            }))
          : ue != null &&
            (we(ue) &&
              (ue = pe(
                ue,
                se +
                  (!ue.key || (me && me.key === ue.key)
                    ? ''
                    : ('' + ue.key).replace(Oe, '$&/') + '/') +
                  E
              )),
            V.push(ue)),
        1
      )
    if (((me = 0), (le = le === '' ? '.' : le + ':'), G(E)))
      for (var de = 0; de < E.length; de++) {
        ce = E[de]
        var Se = le + De(ce, de)
        me += Le(ce, V, se, Se, ue)
      }
    else if (((Se = P(E)), typeof Se == 'function'))
      for (E = Se.call(E), de = 0; !(ce = E.next()).done; )
        (ce = ce.value), (Se = le + De(ce, de++)), (me += Le(ce, V, se, Se, ue))
    else if (ce === 'object')
      throw (
        ((V = String(E)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (V === '[object Object]'
              ? 'object with keys {' + Object.keys(E).join(', ') + '}'
              : V) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    return me
  }
  function et(E, V, se) {
    if (E == null) return E
    var le = [],
      ue = 0
    return (
      Le(E, le, '', '', function (ce) {
        return V.call(se, ce, ue++)
      }),
      le
    )
  }
  function Ie(E) {
    if (E._status === -1) {
      var V = E._result
      ;(V = V()),
        V.then(
          function (se) {
            ;(E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = se))
          },
          function (se) {
            ;(E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = se))
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = V))
    }
    if (E._status === 1) return E._result.default
    throw E._result
  }
  var re = { current: null },
    F = { transition: null },
    Z = {
      ReactCurrentDispatcher: re,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: b,
    }
  function $() {
    throw Error('act(...) is not supported in production builds of React.')
  }
  return (
    (oe.Children = {
      map: et,
      forEach: function (E, V, se) {
        et(
          E,
          function () {
            V.apply(this, arguments)
          },
          se
        )
      },
      count: function (E) {
        var V = 0
        return (
          et(E, function () {
            V++
          }),
          V
        )
      },
      toArray: function (E) {
        return (
          et(E, function (V) {
            return V
          }) || []
        )
      },
      only: function (E) {
        if (!we(E))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return E
      },
    }),
    (oe.Component = A),
    (oe.Fragment = s),
    (oe.Profiler = u),
    (oe.PureComponent = z),
    (oe.StrictMode = l),
    (oe.Suspense = m),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (oe.act = $),
    (oe.cloneElement = function (E, V, se) {
      if (E == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            E +
            '.'
        )
      var le = k({}, E.props),
        ue = E.key,
        ce = E.ref,
        me = E._owner
      if (V != null) {
        if (
          (V.ref !== void 0 && ((ce = V.ref), (me = b.current)),
          V.key !== void 0 && (ue = '' + V.key),
          E.type && E.type.defaultProps)
        )
          var de = E.type.defaultProps
        for (Se in V)
          U.call(V, Se) &&
            !ie.hasOwnProperty(Se) &&
            (le[Se] = V[Se] === void 0 && de !== void 0 ? de[Se] : V[Se])
      }
      var Se = arguments.length - 2
      if (Se === 1) le.children = se
      else if (1 < Se) {
        de = Array(Se)
        for (var lt = 0; lt < Se; lt++) de[lt] = arguments[lt + 2]
        le.children = de
      }
      return {
        $$typeof: n,
        type: E.type,
        key: ue,
        ref: ce,
        props: le,
        _owner: me,
      }
    }),
    (oe.createContext = function (E) {
      return (
        (E = {
          $$typeof: f,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (E.Provider = { $$typeof: d, _context: E }),
        (E.Consumer = E)
      )
    }),
    (oe.createElement = q),
    (oe.createFactory = function (E) {
      var V = q.bind(null, E)
      return (V.type = E), V
    }),
    (oe.createRef = function () {
      return { current: null }
    }),
    (oe.forwardRef = function (E) {
      return { $$typeof: p, render: E }
    }),
    (oe.isValidElement = we),
    (oe.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: Ie }
    }),
    (oe.memo = function (E, V) {
      return { $$typeof: y, type: E, compare: V === void 0 ? null : V }
    }),
    (oe.startTransition = function (E) {
      var V = F.transition
      F.transition = {}
      try {
        E()
      } finally {
        F.transition = V
      }
    }),
    (oe.unstable_act = $),
    (oe.useCallback = function (E, V) {
      return re.current.useCallback(E, V)
    }),
    (oe.useContext = function (E) {
      return re.current.useContext(E)
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (E) {
      return re.current.useDeferredValue(E)
    }),
    (oe.useEffect = function (E, V) {
      return re.current.useEffect(E, V)
    }),
    (oe.useId = function () {
      return re.current.useId()
    }),
    (oe.useImperativeHandle = function (E, V, se) {
      return re.current.useImperativeHandle(E, V, se)
    }),
    (oe.useInsertionEffect = function (E, V) {
      return re.current.useInsertionEffect(E, V)
    }),
    (oe.useLayoutEffect = function (E, V) {
      return re.current.useLayoutEffect(E, V)
    }),
    (oe.useMemo = function (E, V) {
      return re.current.useMemo(E, V)
    }),
    (oe.useReducer = function (E, V, se) {
      return re.current.useReducer(E, V, se)
    }),
    (oe.useRef = function (E) {
      return re.current.useRef(E)
    }),
    (oe.useState = function (E) {
      return re.current.useState(E)
    }),
    (oe.useSyncExternalStore = function (E, V, se) {
      return re.current.useSyncExternalStore(E, V, se)
    }),
    (oe.useTransition = function () {
      return re.current.useTransition()
    }),
    (oe.version = '18.3.1'),
    oe
  )
}
var ud
function Da() {
  return ud || ((ud = 1), (Zl.exports = oy())), Zl.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd
function ly() {
  if (cd) return si
  cd = 1
  var n = Da(),
    i = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    l = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 }
  function f(p, m, y) {
    var v,
      w = {},
      P = null,
      D = null
    y !== void 0 && (P = '' + y),
      m.key !== void 0 && (P = '' + m.key),
      m.ref !== void 0 && (D = m.ref)
    for (v in m) l.call(m, v) && !d.hasOwnProperty(v) && (w[v] = m[v])
    if (p && p.defaultProps)
      for (v in ((m = p.defaultProps), m)) w[v] === void 0 && (w[v] = m[v])
    return { $$typeof: i, type: p, key: P, ref: D, props: w, _owner: u.current }
  }
  return (si.Fragment = s), (si.jsx = f), (si.jsxs = f), si
}
var fd
function ay() {
  return fd || ((fd = 1), (ql.exports = ly())), ql.exports
}
var g = ay(),
  W = Da()
const _t = Na(W)
var Ls = {},
  bl = { exports: {} },
  ot = {},
  Jl = { exports: {} },
  ea = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd
function uy() {
  return (
    dd ||
      ((dd = 1),
      (function (n) {
        function i(F, Z) {
          var $ = F.length
          F.push(Z)
          e: for (; 0 < $; ) {
            var E = ($ - 1) >>> 1,
              V = F[E]
            if (0 < u(V, Z)) (F[E] = Z), (F[$] = V), ($ = E)
            else break e
          }
        }
        function s(F) {
          return F.length === 0 ? null : F[0]
        }
        function l(F) {
          if (F.length === 0) return null
          var Z = F[0],
            $ = F.pop()
          if ($ !== Z) {
            F[0] = $
            e: for (var E = 0, V = F.length, se = V >>> 1; E < se; ) {
              var le = 2 * (E + 1) - 1,
                ue = F[le],
                ce = le + 1,
                me = F[ce]
              if (0 > u(ue, $))
                ce < V && 0 > u(me, ue)
                  ? ((F[E] = me), (F[ce] = $), (E = ce))
                  : ((F[E] = ue), (F[le] = $), (E = le))
              else if (ce < V && 0 > u(me, $))
                (F[E] = me), (F[ce] = $), (E = ce)
              else break e
            }
          }
          return Z
        }
        function u(F, Z) {
          var $ = F.sortIndex - Z.sortIndex
          return $ !== 0 ? $ : F.id - Z.id
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var d = performance
          n.unstable_now = function () {
            return d.now()
          }
        } else {
          var f = Date,
            p = f.now()
          n.unstable_now = function () {
            return f.now() - p
          }
        }
        var m = [],
          y = [],
          v = 1,
          w = null,
          P = 3,
          D = !1,
          k = !1,
          C = !1,
          A = typeof setTimeout == 'function' ? setTimeout : null,
          N = typeof clearTimeout == 'function' ? clearTimeout : null,
          z = typeof setImmediate < 'u' ? setImmediate : null
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function B(F) {
          for (var Z = s(y); Z !== null; ) {
            if (Z.callback === null) l(y)
            else if (Z.startTime <= F)
              l(y), (Z.sortIndex = Z.expirationTime), i(m, Z)
            else break
            Z = s(y)
          }
        }
        function G(F) {
          if (((C = !1), B(F), !k))
            if (s(m) !== null) (k = !0), Ie(U)
            else {
              var Z = s(y)
              Z !== null && re(G, Z.startTime - F)
            }
        }
        function U(F, Z) {
          ;(k = !1), C && ((C = !1), N(q), (q = -1)), (D = !0)
          var $ = P
          try {
            for (
              B(Z), w = s(m);
              w !== null && (!(w.expirationTime > Z) || (F && !Ue()));

            ) {
              var E = w.callback
              if (typeof E == 'function') {
                ;(w.callback = null), (P = w.priorityLevel)
                var V = E(w.expirationTime <= Z)
                ;(Z = n.unstable_now()),
                  typeof V == 'function'
                    ? (w.callback = V)
                    : w === s(m) && l(m),
                  B(Z)
              } else l(m)
              w = s(m)
            }
            if (w !== null) var se = !0
            else {
              var le = s(y)
              le !== null && re(G, le.startTime - Z), (se = !1)
            }
            return se
          } finally {
            ;(w = null), (P = $), (D = !1)
          }
        }
        var b = !1,
          ie = null,
          q = -1,
          pe = 5,
          we = -1
        function Ue() {
          return !(n.unstable_now() - we < pe)
        }
        function Oe() {
          if (ie !== null) {
            var F = n.unstable_now()
            we = F
            var Z = !0
            try {
              Z = ie(!0, F)
            } finally {
              Z ? De() : ((b = !1), (ie = null))
            }
          } else b = !1
        }
        var De
        if (typeof z == 'function')
          De = function () {
            z(Oe)
          }
        else if (typeof MessageChannel < 'u') {
          var Le = new MessageChannel(),
            et = Le.port2
          ;(Le.port1.onmessage = Oe),
            (De = function () {
              et.postMessage(null)
            })
        } else
          De = function () {
            A(Oe, 0)
          }
        function Ie(F) {
          ;(ie = F), b || ((b = !0), De())
        }
        function re(F, Z) {
          q = A(function () {
            F(n.unstable_now())
          }, Z)
        }
        ;(n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null
          }),
          (n.unstable_continueExecution = function () {
            k || D || ((k = !0), Ie(U))
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (pe = 0 < F ? Math.floor(1e3 / F) : 5)
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return P
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m)
          }),
          (n.unstable_next = function (F) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var Z = 3
                break
              default:
                Z = P
            }
            var $ = P
            P = Z
            try {
              return F()
            } finally {
              P = $
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, Z) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                F = 3
            }
            var $ = P
            P = F
            try {
              return Z()
            } finally {
              P = $
            }
          }),
          (n.unstable_scheduleCallback = function (F, Z, $) {
            var E = n.unstable_now()
            switch (
              (typeof $ == 'object' && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == 'number' && 0 < $ ? E + $ : E))
                : ($ = E),
              F)
            ) {
              case 1:
                var V = -1
                break
              case 2:
                V = 250
                break
              case 5:
                V = 1073741823
                break
              case 4:
                V = 1e4
                break
              default:
                V = 5e3
            }
            return (
              (V = $ + V),
              (F = {
                id: v++,
                callback: Z,
                priorityLevel: F,
                startTime: $,
                expirationTime: V,
                sortIndex: -1,
              }),
              $ > E
                ? ((F.sortIndex = $),
                  i(y, F),
                  s(m) === null &&
                    F === s(y) &&
                    (C ? (N(q), (q = -1)) : (C = !0), re(G, $ - E)))
                : ((F.sortIndex = V), i(m, F), k || D || ((k = !0), Ie(U))),
              F
            )
          }),
          (n.unstable_shouldYield = Ue),
          (n.unstable_wrapCallback = function (F) {
            var Z = P
            return function () {
              var $ = P
              P = Z
              try {
                return F.apply(this, arguments)
              } finally {
                P = $
              }
            }
          })
      })(ea)),
    ea
  )
}
var hd
function cy() {
  return hd || ((hd = 1), (Jl.exports = uy())), Jl.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd
function fy() {
  if (pd) return ot
  pd = 1
  var n = Da(),
    i = cy()
  function s(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r])
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  var l = new Set(),
    u = {}
  function d(e, t) {
    f(e, t), f(e + 'Capture', t)
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e])
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    w = {}
  function P(e) {
    return m.call(w, e)
      ? !0
      : m.call(v, e)
      ? !1
      : y.test(e)
      ? (w[e] = !0)
      : ((v[e] = !0), !1)
  }
  function D(e, t, r, o) {
    if (r !== null && r.type === 0) return !1
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return o
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
      default:
        return !1
    }
  }
  function k(e, t, r, o) {
    if (t === null || typeof t > 'u' || D(e, t, r, o)) return !0
    if (o) return !1
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t
        case 4:
          return t === !1
        case 5:
          return isNaN(t)
        case 6:
          return isNaN(t) || 1 > t
      }
    return !1
  }
  function C(e, t, r, o, a, c, h) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = h)
  }
  var A = {}
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      A[e] = new C(e, 0, !1, e, null, !1, !1)
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0]
      A[t] = new C(t, 1, !1, e[1], null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      e
    ) {
      A[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      A[e] = new C(e, 2, !1, e, null, !1, !1)
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        A[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1)
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      A[e] = new C(e, 3, !0, e, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (e) {
      A[e] = new C(e, 4, !1, e, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      A[e] = new C(e, 6, !1, e, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      A[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
  var N = /[\-:]([a-z])/g
  function z(e) {
    return e[1].toUpperCase()
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(N, z)
      A[t] = new C(t, 1, !1, e, null, !1, !1)
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(N, z)
        A[t] = new C(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(N, z)
      A[t] = new C(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      A[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }),
    (A.xlinkHref = new C(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      A[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
  function B(e, t, r, o) {
    var a = A.hasOwnProperty(t) ? A[t] : null
    ;(a !== null
      ? a.type !== 0
      : o ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (k(t, r, a, o) && (r = null),
      o || a === null
        ? P(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : '') : r)
        : ((t = a.attributeName),
          (o = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? '' : '' + r),
              o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))))
  }
  var G = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    U = Symbol.for('react.element'),
    b = Symbol.for('react.portal'),
    ie = Symbol.for('react.fragment'),
    q = Symbol.for('react.strict_mode'),
    pe = Symbol.for('react.profiler'),
    we = Symbol.for('react.provider'),
    Ue = Symbol.for('react.context'),
    Oe = Symbol.for('react.forward_ref'),
    De = Symbol.for('react.suspense'),
    Le = Symbol.for('react.suspense_list'),
    et = Symbol.for('react.memo'),
    Ie = Symbol.for('react.lazy'),
    re = Symbol.for('react.offscreen'),
    F = Symbol.iterator
  function Z(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (F && e[F]) || e['@@iterator']),
        typeof e == 'function' ? e : null)
  }
  var $ = Object.assign,
    E
  function V(e) {
    if (E === void 0)
      try {
        throw Error()
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/)
        E = (t && t[1]) || ''
      }
    return (
      `
` +
      E +
      e
    )
  }
  var se = !1
  function le(e, t) {
    if (!e || se) return ''
    se = !0
    var r = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (R) {
            var o = R
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (R) {
            o = R
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (R) {
          o = R
        }
        e()
      }
    } catch (R) {
      if (R && o && typeof R.stack == 'string') {
        for (
          var a = R.stack.split(`
`),
            c = o.stack.split(`
`),
            h = a.length - 1,
            x = c.length - 1;
          1 <= h && 0 <= x && a[h] !== c[x];

        )
          x--
        for (; 1 <= h && 0 <= x; h--, x--)
          if (a[h] !== c[x]) {
            if (h !== 1 || x !== 1)
              do
                if ((h--, x--, 0 > x || a[h] !== c[x])) {
                  var S =
                    `
` + a[h].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      S.includes('<anonymous>') &&
                      (S = S.replace('<anonymous>', e.displayName)),
                    S
                  )
                }
              while (1 <= h && 0 <= x)
            break
          }
      }
    } finally {
      ;(se = !1), (Error.prepareStackTrace = r)
    }
    return (e = e ? e.displayName || e.name : '') ? V(e) : ''
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return V(e.type)
      case 16:
        return V('Lazy')
      case 13:
        return V('Suspense')
      case 19:
        return V('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (e = le(e.type, !1)), e
      case 11:
        return (e = le(e.type.render, !1)), e
      case 1:
        return (e = le(e.type, !0)), e
      default:
        return ''
    }
  }
  function ce(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case ie:
        return 'Fragment'
      case b:
        return 'Portal'
      case pe:
        return 'Profiler'
      case q:
        return 'StrictMode'
      case De:
        return 'Suspense'
      case Le:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ue:
          return (e.displayName || 'Context') + '.Consumer'
        case we:
          return (e._context.displayName || 'Context') + '.Provider'
        case Oe:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case et:
          return (
            (t = e.displayName || null), t !== null ? t : ce(e.type) || 'Memo'
          )
        case Ie:
          ;(t = e._payload), (e = e._init)
          try {
            return ce(e(t))
          } catch {}
      }
    return null
  }
  function me(e) {
    var t = e.type
    switch (e.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (t.displayName || 'Context') + '.Consumer'
      case 10:
        return (t._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        )
      case 7:
        return 'Fragment'
      case 5:
        return t
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return ce(t)
      case 8:
        return t === q ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null
        if (typeof t == 'string') return t
    }
    return null
  }
  function de(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function Se(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    )
  }
  function lt(e) {
    var t = Se(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = '' + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var a = r.get,
        c = r.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this)
          },
          set: function (h) {
            ;(o = '' + h), c.call(this, h)
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o
          },
          setValue: function (h) {
            o = '' + h
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function Ti(e) {
    e._valueTracker || (e._valueTracker = lt(e))
  }
  function hu(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var r = t.getValue(),
      o = ''
    return (
      e && (o = Se(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    )
  }
  function Ci(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function no(e, t) {
    var r = t.checked
    return $({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    })
  }
  function pu(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked
    ;(r = de(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      })
  }
  function mu(e, t) {
    ;(t = t.checked), t != null && B(e, 'checked', t, !1)
  }
  function ro(e, t) {
    mu(e, t)
    var r = de(t.value),
      o = t.type
    if (r != null)
      o === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r)
    else if (o === 'submit' || o === 'reset') {
      e.removeAttribute('value')
      return
    }
    t.hasOwnProperty('value')
      ? io(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && io(e, t.type, de(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked)
  }
  function gu(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var o = t.type
      if (
        !(
          (o !== 'submit' && o !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return
      ;(t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r)
  }
  function io(e, t, r) {
    ;(t !== 'number' || Ci(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
  }
  var wr = Array.isArray
  function Fn(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {}
      for (var a = 0; a < r.length; a++) t['$' + r[a]] = !0
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && o && (e[r].defaultSelected = !0)
    } else {
      for (r = '' + de(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          ;(e[a].selected = !0), o && (e[a].defaultSelected = !0)
          return
        }
        t !== null || e[a].disabled || (t = e[a])
      }
      t !== null && (t.selected = !0)
    }
  }
  function so(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91))
    return $({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    })
  }
  function yu(e, t) {
    var r = t.value
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92))
        if (wr(r)) {
          if (1 < r.length) throw Error(s(93))
          r = r[0]
        }
        t = r
      }
      t == null && (t = ''), (r = t)
    }
    e._wrapperState = { initialValue: de(r) }
  }
  function vu(e, t) {
    var r = de(t.value),
      o = de(t.defaultValue)
    r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = '' + o)
  }
  function xu(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t)
  }
  function wu(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function oo(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? wu(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
  }
  var ki,
    Su = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, a)
            })
          }
        : e
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t
      else {
        for (
          ki = ki || document.createElement('div'),
            ki.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = ki.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    })
  function Sr(e, t) {
    if (t) {
      var r = e.firstChild
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var Pr = {
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
      strokeWidth: !0,
    },
    fm = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(Pr).forEach(function (e) {
    fm.forEach(function (t) {
      ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pr[t] = Pr[e])
    })
  })
  function Pu(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (Pr.hasOwnProperty(e) && Pr[e])
      ? ('' + t).trim()
      : t + 'px'
  }
  function Tu(e, t) {
    e = e.style
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf('--') === 0,
          a = Pu(r, t[r], o)
        r === 'float' && (r = 'cssFloat'), o ? e.setProperty(r, a) : (e[r] = a)
      }
  }
  var dm = $(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  )
  function lo(e, t) {
    if (t) {
      if (dm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e))
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60))
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61))
      }
      if (t.style != null && typeof t.style != 'object') throw Error(s(62))
    }
  }
  function ao(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var uo = null
  function co(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var fo = null,
    zn = null,
    Bn = null
  function Cu(e) {
    if ((e = $r(e))) {
      if (typeof fo != 'function') throw Error(s(280))
      var t = e.stateNode
      t && ((t = Xi(t)), fo(e.stateNode, e.type, t))
    }
  }
  function ku(e) {
    zn ? (Bn ? Bn.push(e) : (Bn = [e])) : (zn = e)
  }
  function Eu() {
    if (zn) {
      var e = zn,
        t = Bn
      if (((Bn = zn = null), Cu(e), t)) for (e = 0; e < t.length; e++) Cu(t[e])
    }
  }
  function ju(e, t) {
    return e(t)
  }
  function Mu() {}
  var ho = !1
  function Au(e, t, r) {
    if (ho) return e(t, r)
    ho = !0
    try {
      return ju(e, t, r)
    } finally {
      ;(ho = !1), (zn !== null || Bn !== null) && (Mu(), Eu())
    }
  }
  function Tr(e, t) {
    var r = e.stateNode
    if (r === null) return null
    var o = Xi(r)
    if (o === null) return null
    r = o[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !o)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (r && typeof r != 'function') throw Error(s(231, t, typeof r))
    return r
  }
  var po = !1
  if (p)
    try {
      var Cr = {}
      Object.defineProperty(Cr, 'passive', {
        get: function () {
          po = !0
        },
      }),
        window.addEventListener('test', Cr, Cr),
        window.removeEventListener('test', Cr, Cr)
    } catch {
      po = !1
    }
  function hm(e, t, r, o, a, c, h, x, S) {
    var R = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(r, R)
    } catch (_) {
      this.onError(_)
    }
  }
  var kr = !1,
    Ei = null,
    ji = !1,
    mo = null,
    pm = {
      onError: function (e) {
        ;(kr = !0), (Ei = e)
      },
    }
  function mm(e, t, r, o, a, c, h, x, S) {
    ;(kr = !1), (Ei = null), hm.apply(pm, arguments)
  }
  function gm(e, t, r, o, a, c, h, x, S) {
    if ((mm.apply(this, arguments), kr)) {
      if (kr) {
        var R = Ei
        ;(kr = !1), (Ei = null)
      } else throw Error(s(198))
      ji || ((ji = !0), (mo = R))
    }
  }
  function xn(e) {
    var t = e,
      r = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? r : null
  }
  function Ru(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function Nu(e) {
    if (xn(e) !== e) throw Error(s(188))
  }
  function ym(e) {
    var t = e.alternate
    if (!t) {
      if (((t = xn(e)), t === null)) throw Error(s(188))
      return t !== e ? null : e
    }
    for (var r = e, o = t; ; ) {
      var a = r.return
      if (a === null) break
      var c = a.alternate
      if (c === null) {
        if (((o = a.return), o !== null)) {
          r = o
          continue
        }
        break
      }
      if (a.child === c.child) {
        for (c = a.child; c; ) {
          if (c === r) return Nu(a), e
          if (c === o) return Nu(a), t
          c = c.sibling
        }
        throw Error(s(188))
      }
      if (r.return !== o.return) (r = a), (o = c)
      else {
        for (var h = !1, x = a.child; x; ) {
          if (x === r) {
            ;(h = !0), (r = a), (o = c)
            break
          }
          if (x === o) {
            ;(h = !0), (o = a), (r = c)
            break
          }
          x = x.sibling
        }
        if (!h) {
          for (x = c.child; x; ) {
            if (x === r) {
              ;(h = !0), (r = c), (o = a)
              break
            }
            if (x === o) {
              ;(h = !0), (o = c), (r = a)
              break
            }
            x = x.sibling
          }
          if (!h) throw Error(s(189))
        }
      }
      if (r.alternate !== o) throw Error(s(190))
    }
    if (r.tag !== 3) throw Error(s(188))
    return r.stateNode.current === r ? e : t
  }
  function Du(e) {
    return (e = ym(e)), e !== null ? Lu(e) : null
  }
  function Lu(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var t = Lu(e)
      if (t !== null) return t
      e = e.sibling
    }
    return null
  }
  var Vu = i.unstable_scheduleCallback,
    _u = i.unstable_cancelCallback,
    vm = i.unstable_shouldYield,
    xm = i.unstable_requestPaint,
    Me = i.unstable_now,
    wm = i.unstable_getCurrentPriorityLevel,
    go = i.unstable_ImmediatePriority,
    Ou = i.unstable_UserBlockingPriority,
    Mi = i.unstable_NormalPriority,
    Sm = i.unstable_LowPriority,
    Iu = i.unstable_IdlePriority,
    Ai = null,
    Rt = null
  function Pm(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == 'function')
      try {
        Rt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var Pt = Math.clz32 ? Math.clz32 : km,
    Tm = Math.log,
    Cm = Math.LN2
  function km(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Tm(e) / Cm) | 0)) | 0
  }
  var Ri = 64,
    Ni = 4194304
  function Er(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
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
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function Di(e, t) {
    var r = e.pendingLanes
    if (r === 0) return 0
    var o = 0,
      a = e.suspendedLanes,
      c = e.pingedLanes,
      h = r & 268435455
    if (h !== 0) {
      var x = h & ~a
      x !== 0 ? (o = Er(x)) : ((c &= h), c !== 0 && (o = Er(c)))
    } else (h = r & ~a), h !== 0 ? (o = Er(h)) : c !== 0 && (o = Er(c))
    if (o === 0) return 0
    if (
      t !== 0 &&
      t !== o &&
      !(t & a) &&
      ((a = o & -o), (c = t & -t), a >= c || (a === 16 && (c & 4194240) !== 0))
    )
      return t
    if ((o & 4 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        (r = 31 - Pt(t)), (a = 1 << r), (o |= e[r]), (t &= ~a)
    return o
  }
  function Em(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250
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
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function jm(e, t) {
    for (
      var r = e.suspendedLanes,
        o = e.pingedLanes,
        a = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var h = 31 - Pt(c),
        x = 1 << h,
        S = a[h]
      S === -1
        ? (!(x & r) || x & o) && (a[h] = Em(x, t))
        : S <= t && (e.expiredLanes |= x),
        (c &= ~x)
    }
  }
  function yo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
  }
  function Fu() {
    var e = Ri
    return (Ri <<= 1), !(Ri & 4194240) && (Ri = 64), e
  }
  function vo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e)
    return t
  }
  function jr(e, t, r) {
    ;(e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Pt(t)),
      (e[t] = r)
  }
  function Mm(e, t) {
    var r = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements)
    var o = e.eventTimes
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Pt(r),
        c = 1 << a
      ;(t[a] = 0), (o[a] = -1), (e[a] = -1), (r &= ~c)
    }
  }
  function xo(e, t) {
    var r = (e.entangledLanes |= t)
    for (e = e.entanglements; r; ) {
      var o = 31 - Pt(r),
        a = 1 << o
      ;(a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a)
    }
  }
  var he = 0
  function zu(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  }
  var Bu,
    wo,
    Uu,
    Wu,
    Hu,
    So = !1,
    Li = [],
    Qt = null,
    qt = null,
    Zt = null,
    Mr = new Map(),
    Ar = new Map(),
    bt = [],
    Am =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )
  function $u(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Qt = null
        break
      case 'dragenter':
      case 'dragleave':
        qt = null
        break
      case 'mouseover':
      case 'mouseout':
        Zt = null
        break
      case 'pointerover':
      case 'pointerout':
        Mr.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ar.delete(t.pointerId)
    }
  }
  function Rr(e, t, r, o, a, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: c,
          targetContainers: [a],
        }),
        t !== null && ((t = $r(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e)
  }
  function Rm(e, t, r, o, a) {
    switch (t) {
      case 'focusin':
        return (Qt = Rr(Qt, e, t, r, o, a)), !0
      case 'dragenter':
        return (qt = Rr(qt, e, t, r, o, a)), !0
      case 'mouseover':
        return (Zt = Rr(Zt, e, t, r, o, a)), !0
      case 'pointerover':
        var c = a.pointerId
        return Mr.set(c, Rr(Mr.get(c) || null, e, t, r, o, a)), !0
      case 'gotpointercapture':
        return (
          (c = a.pointerId), Ar.set(c, Rr(Ar.get(c) || null, e, t, r, o, a)), !0
        )
    }
    return !1
  }
  function Ku(e) {
    var t = wn(e.target)
    if (t !== null) {
      var r = xn(t)
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Ru(r)), t !== null)) {
            ;(e.blockedOn = t),
              Hu(e.priority, function () {
                Uu(r)
              })
            return
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Vi(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = To(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (r === null) {
        r = e.nativeEvent
        var o = new r.constructor(r.type, r)
        ;(uo = o), r.target.dispatchEvent(o), (uo = null)
      } else return (t = $r(r)), t !== null && wo(t), (e.blockedOn = r), !1
      t.shift()
    }
    return !0
  }
  function Yu(e, t, r) {
    Vi(e) && r.delete(t)
  }
  function Nm() {
    ;(So = !1),
      Qt !== null && Vi(Qt) && (Qt = null),
      qt !== null && Vi(qt) && (qt = null),
      Zt !== null && Vi(Zt) && (Zt = null),
      Mr.forEach(Yu),
      Ar.forEach(Yu)
  }
  function Nr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So ||
        ((So = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Nm)))
  }
  function Dr(e) {
    function t(a) {
      return Nr(a, e)
    }
    if (0 < Li.length) {
      Nr(Li[0], e)
      for (var r = 1; r < Li.length; r++) {
        var o = Li[r]
        o.blockedOn === e && (o.blockedOn = null)
      }
    }
    for (
      Qt !== null && Nr(Qt, e),
        qt !== null && Nr(qt, e),
        Zt !== null && Nr(Zt, e),
        Mr.forEach(t),
        Ar.forEach(t),
        r = 0;
      r < bt.length;
      r++
    )
      (o = bt[r]), o.blockedOn === e && (o.blockedOn = null)
    for (; 0 < bt.length && ((r = bt[0]), r.blockedOn === null); )
      Ku(r), r.blockedOn === null && bt.shift()
  }
  var Un = G.ReactCurrentBatchConfig,
    _i = !0
  function Dm(e, t, r, o) {
    var a = he,
      c = Un.transition
    Un.transition = null
    try {
      ;(he = 1), Po(e, t, r, o)
    } finally {
      ;(he = a), (Un.transition = c)
    }
  }
  function Lm(e, t, r, o) {
    var a = he,
      c = Un.transition
    Un.transition = null
    try {
      ;(he = 4), Po(e, t, r, o)
    } finally {
      ;(he = a), (Un.transition = c)
    }
  }
  function Po(e, t, r, o) {
    if (_i) {
      var a = To(e, t, r, o)
      if (a === null) Bo(e, t, o, Oi, r), $u(e, o)
      else if (Rm(a, e, t, r, o)) o.stopPropagation()
      else if (($u(e, o), t & 4 && -1 < Am.indexOf(e))) {
        for (; a !== null; ) {
          var c = $r(a)
          if (
            (c !== null && Bu(c),
            (c = To(e, t, r, o)),
            c === null && Bo(e, t, o, Oi, r),
            c === a)
          )
            break
          a = c
        }
        a !== null && o.stopPropagation()
      } else Bo(e, t, o, null, r)
    }
  }
  var Oi = null
  function To(e, t, r, o) {
    if (((Oi = null), (e = co(o)), (e = wn(e)), e !== null))
      if (((t = xn(e)), t === null)) e = null
      else if (((r = t.tag), r === 13)) {
        if (((e = Ru(t)), e !== null)) return e
        e = null
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    return (Oi = e), null
  }
  function Gu(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (wm()) {
          case go:
            return 1
          case Ou:
            return 4
          case Mi:
          case Sm:
            return 16
          case Iu:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var Jt = null,
    Co = null,
    Ii = null
  function Xu() {
    if (Ii) return Ii
    var e,
      t = Co,
      r = t.length,
      o,
      a = 'value' in Jt ? Jt.value : Jt.textContent,
      c = a.length
    for (e = 0; e < r && t[e] === a[e]; e++);
    var h = r - e
    for (o = 1; o <= h && t[r - o] === a[c - o]; o++);
    return (Ii = a.slice(e, 1 < o ? 1 - o : void 0))
  }
  function Fi(e) {
    var t = e.keyCode
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function zi() {
    return !0
  }
  function Qu() {
    return !1
  }
  function at(e) {
    function t(r, o, a, c, h) {
      ;(this._reactName = r),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = c),
        (this.target = h),
        (this.currentTarget = null)
      for (var x in e)
        e.hasOwnProperty(x) && ((r = e[x]), (this[x] = r ? r(c) : c[x]))
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? zi
          : Qu),
        (this.isPropagationStopped = Qu),
        this
      )
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var r = this.nativeEvent
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = zi))
        },
        stopPropagation: function () {
          var r = this.nativeEvent
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = zi))
        },
        persist: function () {},
        isPersistent: zi,
      }),
      t
    )
  }
  var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ko = at(Wn),
    Lr = $({}, Wn, { view: 0, detail: 0 }),
    Vm = at(Lr),
    Eo,
    jo,
    Vr,
    Bi = $({}, Lr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ao,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Vr &&
              (Vr && e.type === 'mousemove'
                ? ((Eo = e.screenX - Vr.screenX), (jo = e.screenY - Vr.screenY))
                : (jo = Eo = 0),
              (Vr = e)),
            Eo)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : jo
      },
    }),
    qu = at(Bi),
    _m = $({}, Bi, { dataTransfer: 0 }),
    Om = at(_m),
    Im = $({}, Lr, { relatedTarget: 0 }),
    Mo = at(Im),
    Fm = $({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zm = at(Fm),
    Bm = $({}, Wn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    Um = at(Bm),
    Wm = $({}, Wn, { data: 0 }),
    Zu = at(Wm),
    Hm = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    $m = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Km = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function Ym(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Km[e])
      ? !!t[e]
      : !1
  }
  function Ao() {
    return Ym
  }
  var Gm = $({}, Lr, {
      key: function (e) {
        if (e.key) {
          var t = Hm[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = Fi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? $m[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ao,
      charCode: function (e) {
        return e.type === 'keypress' ? Fi(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Fi(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    Xm = at(Gm),
    Qm = $({}, Bi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    bu = at(Qm),
    qm = $({}, Lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ao,
    }),
    Zm = at(qm),
    bm = $({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jm = at(bm),
    eg = $({}, Bi, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    tg = at(eg),
    ng = [9, 13, 27, 32],
    Ro = p && 'CompositionEvent' in window,
    _r = null
  p && 'documentMode' in document && (_r = document.documentMode)
  var rg = p && 'TextEvent' in window && !_r,
    Ju = p && (!Ro || (_r && 8 < _r && 11 >= _r)),
    ec = ' ',
    tc = !1
  function nc(e, t) {
    switch (e) {
      case 'keyup':
        return ng.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function rc(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var Hn = !1
  function ig(e, t) {
    switch (e) {
      case 'compositionend':
        return rc(t)
      case 'keypress':
        return t.which !== 32 ? null : ((tc = !0), ec)
      case 'textInput':
        return (e = t.data), e === ec && tc ? null : e
      default:
        return null
    }
  }
  function sg(e, t) {
    if (Hn)
      return e === 'compositionend' || (!Ro && nc(e, t))
        ? ((e = Xu()), (Ii = Co = Jt = null), (Hn = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return Ju && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var og = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!og[e.type] : t === 'textarea'
  }
  function sc(e, t, r, o) {
    ku(o),
      (t = Ki(t, 'onChange')),
      0 < t.length &&
        ((r = new ko('onChange', 'change', null, r, o)),
        e.push({ event: r, listeners: t }))
  }
  var Or = null,
    Ir = null
  function lg(e) {
    Tc(e, 0)
  }
  function Ui(e) {
    var t = Xn(e)
    if (hu(t)) return e
  }
  function ag(e, t) {
    if (e === 'change') return t
  }
  var oc = !1
  if (p) {
    var No
    if (p) {
      var Do = 'oninput' in document
      if (!Do) {
        var lc = document.createElement('div')
        lc.setAttribute('oninput', 'return;'),
          (Do = typeof lc.oninput == 'function')
      }
      No = Do
    } else No = !1
    oc = No && (!document.documentMode || 9 < document.documentMode)
  }
  function ac() {
    Or && (Or.detachEvent('onpropertychange', uc), (Ir = Or = null))
  }
  function uc(e) {
    if (e.propertyName === 'value' && Ui(Ir)) {
      var t = []
      sc(t, Ir, e, co(e)), Au(lg, t)
    }
  }
  function ug(e, t, r) {
    e === 'focusin'
      ? (ac(), (Or = t), (Ir = r), Or.attachEvent('onpropertychange', uc))
      : e === 'focusout' && ac()
  }
  function cg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Ui(Ir)
  }
  function fg(e, t) {
    if (e === 'click') return Ui(t)
  }
  function dg(e, t) {
    if (e === 'input' || e === 'change') return Ui(t)
  }
  function hg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var Tt = typeof Object.is == 'function' ? Object.is : hg
  function Fr(e, t) {
    if (Tt(e, t)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var r = Object.keys(e),
      o = Object.keys(t)
    if (r.length !== o.length) return !1
    for (o = 0; o < r.length; o++) {
      var a = r[o]
      if (!m.call(t, a) || !Tt(e[a], t[a])) return !1
    }
    return !0
  }
  function cc(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function fc(e, t) {
    var r = cc(e)
    e = 0
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t))
          return { node: r, offset: t - e }
        e = o
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling
            break e
          }
          r = r.parentNode
        }
        r = void 0
      }
      r = cc(r)
    }
  }
  function dc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? dc(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
  }
  function hc() {
    for (var e = window, t = Ci(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string'
      } catch {
        r = !1
      }
      if (r) e = t.contentWindow
      else break
      t = Ci(e.document)
    }
    return t
  }
  function Lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  function pg(e) {
    var t = hc(),
      r = e.focusedElem,
      o = e.selectionRange
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      dc(r.ownerDocument.documentElement, r)
    ) {
      if (o !== null && Lo(r)) {
        if (
          ((t = o.start),
          (e = o.end),
          e === void 0 && (e = t),
          'selectionStart' in r)
        )
          (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length))
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection()
          var a = r.textContent.length,
            c = Math.min(o.start, a)
          ;(o = o.end === void 0 ? c : Math.min(o.end, a)),
            !e.extend && c > o && ((a = o), (o = c), (c = a)),
            (a = fc(r, c))
          var h = fc(r, o)
          a &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            c > o
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)))
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top)
    }
  }
  var mg = p && 'documentMode' in document && 11 >= document.documentMode,
    $n = null,
    Vo = null,
    zr = null,
    _o = !1
  function pc(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
    _o ||
      $n == null ||
      $n !== Ci(o) ||
      ((o = $n),
      'selectionStart' in o && Lo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (zr && Fr(zr, o)) ||
        ((zr = o),
        (o = Ki(Vo, 'onSelect')),
        0 < o.length &&
          ((t = new ko('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = $n))))
  }
  function Wi(e, t) {
    var r = {}
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    )
  }
  var Kn = {
      animationend: Wi('Animation', 'AnimationEnd'),
      animationiteration: Wi('Animation', 'AnimationIteration'),
      animationstart: Wi('Animation', 'AnimationStart'),
      transitionend: Wi('Transition', 'TransitionEnd'),
    },
    Oo = {},
    mc = {}
  p &&
    ((mc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Kn.animationend.animation,
      delete Kn.animationiteration.animation,
      delete Kn.animationstart.animation),
    'TransitionEvent' in window || delete Kn.transitionend.transition)
  function Hi(e) {
    if (Oo[e]) return Oo[e]
    if (!Kn[e]) return e
    var t = Kn[e],
      r
    for (r in t) if (t.hasOwnProperty(r) && r in mc) return (Oo[e] = t[r])
    return e
  }
  var gc = Hi('animationend'),
    yc = Hi('animationiteration'),
    vc = Hi('animationstart'),
    xc = Hi('transitionend'),
    wc = new Map(),
    Sc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  function en(e, t) {
    wc.set(e, t), d(t, [e])
  }
  for (var Io = 0; Io < Sc.length; Io++) {
    var Fo = Sc[Io],
      gg = Fo.toLowerCase(),
      yg = Fo[0].toUpperCase() + Fo.slice(1)
    en(gg, 'on' + yg)
  }
  en(gc, 'onAnimationEnd'),
    en(yc, 'onAnimationIteration'),
    en(vc, 'onAnimationStart'),
    en('dblclick', 'onDoubleClick'),
    en('focusin', 'onFocus'),
    en('focusout', 'onBlur'),
    en(xc, 'onTransitionEnd'),
    f('onMouseEnter', ['mouseout', 'mouseover']),
    f('onMouseLeave', ['mouseout', 'mouseover']),
    f('onPointerEnter', ['pointerout', 'pointerover']),
    f('onPointerLeave', ['pointerout', 'pointerover']),
    d(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    d(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    d('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    d(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    d(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    d(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var Br =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    vg = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(Br)
    )
  function Pc(e, t, r) {
    var o = e.type || 'unknown-event'
    ;(e.currentTarget = r), gm(o, t, void 0, e), (e.currentTarget = null)
  }
  function Tc(e, t) {
    t = (t & 4) !== 0
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        a = o.event
      o = o.listeners
      e: {
        var c = void 0
        if (t)
          for (var h = o.length - 1; 0 <= h; h--) {
            var x = o[h],
              S = x.instance,
              R = x.currentTarget
            if (((x = x.listener), S !== c && a.isPropagationStopped())) break e
            Pc(a, x, R), (c = S)
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((x = o[h]),
              (S = x.instance),
              (R = x.currentTarget),
              (x = x.listener),
              S !== c && a.isPropagationStopped())
            )
              break e
            Pc(a, x, R), (c = S)
          }
      }
    }
    if (ji) throw ((e = mo), (ji = !1), (mo = null), e)
  }
  function ye(e, t) {
    var r = t[Yo]
    r === void 0 && (r = t[Yo] = new Set())
    var o = e + '__bubble'
    r.has(o) || (Cc(t, e, 2, !1), r.add(o))
  }
  function zo(e, t, r) {
    var o = 0
    t && (o |= 4), Cc(r, e, o, t)
  }
  var $i = '_reactListening' + Math.random().toString(36).slice(2)
  function Ur(e) {
    if (!e[$i]) {
      ;(e[$i] = !0),
        l.forEach(function (r) {
          r !== 'selectionchange' && (vg.has(r) || zo(r, !1, e), zo(r, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[$i] || ((t[$i] = !0), zo('selectionchange', !1, t))
    }
  }
  function Cc(e, t, r, o) {
    switch (Gu(t)) {
      case 1:
        var a = Dm
        break
      case 4:
        a = Lm
        break
      default:
        a = Po
    }
    ;(r = a.bind(null, t, r, e)),
      (a = void 0),
      !po ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1)
  }
  function Bo(e, t, r, o, a) {
    var c = o
    if (!(t & 1) && !(t & 2) && o !== null)
      e: for (;;) {
        if (o === null) return
        var h = o.tag
        if (h === 3 || h === 4) {
          var x = o.stateNode.containerInfo
          if (x === a || (x.nodeType === 8 && x.parentNode === a)) break
          if (h === 4)
            for (h = o.return; h !== null; ) {
              var S = h.tag
              if (
                (S === 3 || S === 4) &&
                ((S = h.stateNode.containerInfo),
                S === a || (S.nodeType === 8 && S.parentNode === a))
              )
                return
              h = h.return
            }
          for (; x !== null; ) {
            if (((h = wn(x)), h === null)) return
            if (((S = h.tag), S === 5 || S === 6)) {
              o = c = h
              continue e
            }
            x = x.parentNode
          }
        }
        o = o.return
      }
    Au(function () {
      var R = c,
        _ = co(r),
        O = []
      e: {
        var L = wc.get(e)
        if (L !== void 0) {
          var H = ko,
            Y = e
          switch (e) {
            case 'keypress':
              if (Fi(r) === 0) break e
            case 'keydown':
            case 'keyup':
              H = Xm
              break
            case 'focusin':
              ;(Y = 'focus'), (H = Mo)
              break
            case 'focusout':
              ;(Y = 'blur'), (H = Mo)
              break
            case 'beforeblur':
            case 'afterblur':
              H = Mo
              break
            case 'click':
              if (r.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              H = qu
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              H = Om
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              H = Zm
              break
            case gc:
            case yc:
            case vc:
              H = zm
              break
            case xc:
              H = Jm
              break
            case 'scroll':
              H = Vm
              break
            case 'wheel':
              H = tg
              break
            case 'copy':
            case 'cut':
            case 'paste':
              H = Um
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              H = bu
          }
          var X = (t & 4) !== 0,
            Ae = !X && e === 'scroll',
            j = X ? (L !== null ? L + 'Capture' : null) : L
          X = []
          for (var T = R, M; T !== null; ) {
            M = T
            var I = M.stateNode
            if (
              (M.tag === 5 &&
                I !== null &&
                ((M = I),
                j !== null &&
                  ((I = Tr(T, j)), I != null && X.push(Wr(T, I, M)))),
              Ae)
            )
              break
            T = T.return
          }
          0 < X.length &&
            ((L = new H(L, Y, null, r, _)), O.push({ event: L, listeners: X }))
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((L = e === 'mouseover' || e === 'pointerover'),
            (H = e === 'mouseout' || e === 'pointerout'),
            L &&
              r !== uo &&
              (Y = r.relatedTarget || r.fromElement) &&
              (wn(Y) || Y[Ft]))
          )
            break e
          if (
            (H || L) &&
            ((L =
              _.window === _
                ? _
                : (L = _.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            H
              ? ((Y = r.relatedTarget || r.toElement),
                (H = R),
                (Y = Y ? wn(Y) : null),
                Y !== null &&
                  ((Ae = xn(Y)), Y !== Ae || (Y.tag !== 5 && Y.tag !== 6)) &&
                  (Y = null))
              : ((H = null), (Y = R)),
            H !== Y)
          ) {
            if (
              ((X = qu),
              (I = 'onMouseLeave'),
              (j = 'onMouseEnter'),
              (T = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((X = bu),
                (I = 'onPointerLeave'),
                (j = 'onPointerEnter'),
                (T = 'pointer')),
              (Ae = H == null ? L : Xn(H)),
              (M = Y == null ? L : Xn(Y)),
              (L = new X(I, T + 'leave', H, r, _)),
              (L.target = Ae),
              (L.relatedTarget = M),
              (I = null),
              wn(_) === R &&
                ((X = new X(j, T + 'enter', Y, r, _)),
                (X.target = M),
                (X.relatedTarget = Ae),
                (I = X)),
              (Ae = I),
              H && Y)
            )
              t: {
                for (X = H, j = Y, T = 0, M = X; M; M = Yn(M)) T++
                for (M = 0, I = j; I; I = Yn(I)) M++
                for (; 0 < T - M; ) (X = Yn(X)), T--
                for (; 0 < M - T; ) (j = Yn(j)), M--
                for (; T--; ) {
                  if (X === j || (j !== null && X === j.alternate)) break t
                  ;(X = Yn(X)), (j = Yn(j))
                }
                X = null
              }
            else X = null
            H !== null && kc(O, L, H, X, !1),
              Y !== null && Ae !== null && kc(O, Ae, Y, X, !0)
          }
        }
        e: {
          if (
            ((L = R ? Xn(R) : window),
            (H = L.nodeName && L.nodeName.toLowerCase()),
            H === 'select' || (H === 'input' && L.type === 'file'))
          )
            var Q = ag
          else if (ic(L))
            if (oc) Q = dg
            else {
              Q = cg
              var J = ug
            }
          else
            (H = L.nodeName) &&
              H.toLowerCase() === 'input' &&
              (L.type === 'checkbox' || L.type === 'radio') &&
              (Q = fg)
          if (Q && (Q = Q(e, R))) {
            sc(O, Q, r, _)
            break e
          }
          J && J(e, L, R),
            e === 'focusout' &&
              (J = L._wrapperState) &&
              J.controlled &&
              L.type === 'number' &&
              io(L, 'number', L.value)
        }
        switch (((J = R ? Xn(R) : window), e)) {
          case 'focusin':
            ;(ic(J) || J.contentEditable === 'true') &&
              (($n = J), (Vo = R), (zr = null))
            break
          case 'focusout':
            zr = Vo = $n = null
            break
          case 'mousedown':
            _o = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(_o = !1), pc(O, r, _)
            break
          case 'selectionchange':
            if (mg) break
          case 'keydown':
          case 'keyup':
            pc(O, r, _)
        }
        var ee
        if (Ro)
          e: {
            switch (e) {
              case 'compositionstart':
                var ne = 'onCompositionStart'
                break e
              case 'compositionend':
                ne = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                ne = 'onCompositionUpdate'
                break e
            }
            ne = void 0
          }
        else
          Hn
            ? nc(e, r) && (ne = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (ne = 'onCompositionStart')
        ne &&
          (Ju &&
            r.locale !== 'ko' &&
            (Hn || ne !== 'onCompositionStart'
              ? ne === 'onCompositionEnd' && Hn && (ee = Xu())
              : ((Jt = _),
                (Co = 'value' in Jt ? Jt.value : Jt.textContent),
                (Hn = !0))),
          (J = Ki(R, ne)),
          0 < J.length &&
            ((ne = new Zu(ne, e, null, r, _)),
            O.push({ event: ne, listeners: J }),
            ee
              ? (ne.data = ee)
              : ((ee = rc(r)), ee !== null && (ne.data = ee)))),
          (ee = rg ? ig(e, r) : sg(e, r)) &&
            ((R = Ki(R, 'onBeforeInput')),
            0 < R.length &&
              ((_ = new Zu('onBeforeInput', 'beforeinput', null, r, _)),
              O.push({ event: _, listeners: R }),
              (_.data = ee)))
      }
      Tc(O, t)
    })
  }
  function Wr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r }
  }
  function Ki(e, t) {
    for (var r = t + 'Capture', o = []; e !== null; ) {
      var a = e,
        c = a.stateNode
      a.tag === 5 &&
        c !== null &&
        ((a = c),
        (c = Tr(e, r)),
        c != null && o.unshift(Wr(e, c, a)),
        (c = Tr(e, t)),
        c != null && o.push(Wr(e, c, a))),
        (e = e.return)
    }
    return o
  }
  function Yn(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function kc(e, t, r, o, a) {
    for (var c = t._reactName, h = []; r !== null && r !== o; ) {
      var x = r,
        S = x.alternate,
        R = x.stateNode
      if (S !== null && S === o) break
      x.tag === 5 &&
        R !== null &&
        ((x = R),
        a
          ? ((S = Tr(r, c)), S != null && h.unshift(Wr(r, S, x)))
          : a || ((S = Tr(r, c)), S != null && h.push(Wr(r, S, x)))),
        (r = r.return)
    }
    h.length !== 0 && e.push({ event: t, listeners: h })
  }
  var xg = /\r\n?/g,
    wg = /\u0000|\uFFFD/g
  function Ec(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        xg,
        `
`
      )
      .replace(wg, '')
  }
  function Yi(e, t, r) {
    if (((t = Ec(t)), Ec(e) !== t && r)) throw Error(s(425))
  }
  function Gi() {}
  var Uo = null,
    Wo = null
  function Ho(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var $o = typeof setTimeout == 'function' ? setTimeout : void 0,
    Sg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    jc = typeof Promise == 'function' ? Promise : void 0,
    Pg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof jc < 'u'
        ? function (e) {
            return jc.resolve(null).then(e).catch(Tg)
          }
        : $o
  function Tg(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Ko(e, t) {
    var r = t,
      o = 0
    do {
      var a = r.nextSibling
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === '/$')) {
          if (o === 0) {
            e.removeChild(a), Dr(t)
            return
          }
          o--
        } else (r !== '$' && r !== '$?' && r !== '$!') || o++
      r = a
    } while (r)
    Dr(t)
  }
  function tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
        if (t === '/$') return null
      }
    }
    return e
  }
  function Mc(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e
          t--
        } else r === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var Gn = Math.random().toString(36).slice(2),
    Nt = '__reactFiber$' + Gn,
    Hr = '__reactProps$' + Gn,
    Ft = '__reactContainer$' + Gn,
    Yo = '__reactEvents$' + Gn,
    Cg = '__reactListeners$' + Gn,
    kg = '__reactHandles$' + Gn
  function wn(e) {
    var t = e[Nt]
    if (t) return t
    for (var r = e.parentNode; r; ) {
      if ((t = r[Ft] || r[Nt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Mc(e); e !== null; ) {
            if ((r = e[Nt])) return r
            e = Mc(e)
          }
        return t
      }
      ;(e = r), (r = e.parentNode)
    }
    return null
  }
  function $r(e) {
    return (
      (e = e[Nt] || e[Ft]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    )
  }
  function Xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(s(33))
  }
  function Xi(e) {
    return e[Hr] || null
  }
  var Go = [],
    Qn = -1
  function nn(e) {
    return { current: e }
  }
  function ve(e) {
    0 > Qn || ((e.current = Go[Qn]), (Go[Qn] = null), Qn--)
  }
  function ge(e, t) {
    Qn++, (Go[Qn] = e.current), (e.current = t)
  }
  var rn = {},
    Ye = nn(rn),
    tt = nn(!1),
    Sn = rn
  function qn(e, t) {
    var r = e.type.contextTypes
    if (!r) return rn
    var o = e.stateNode
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext
    var a = {},
      c
    for (c in r) a[c] = t[c]
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    )
  }
  function nt(e) {
    return (e = e.childContextTypes), e != null
  }
  function Qi() {
    ve(tt), ve(Ye)
  }
  function Ac(e, t, r) {
    if (Ye.current !== rn) throw Error(s(168))
    ge(Ye, t), ge(tt, r)
  }
  function Rc(e, t, r) {
    var o = e.stateNode
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function'))
      return r
    o = o.getChildContext()
    for (var a in o) if (!(a in t)) throw Error(s(108, me(e) || 'Unknown', a))
    return $({}, r, o)
  }
  function qi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        rn),
      (Sn = Ye.current),
      ge(Ye, e),
      ge(tt, tt.current),
      !0
    )
  }
  function Nc(e, t, r) {
    var o = e.stateNode
    if (!o) throw Error(s(169))
    r
      ? ((e = Rc(e, t, Sn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        ve(tt),
        ve(Ye),
        ge(Ye, e))
      : ve(tt),
      ge(tt, r)
  }
  var zt = null,
    Zi = !1,
    Xo = !1
  function Dc(e) {
    zt === null ? (zt = [e]) : zt.push(e)
  }
  function Eg(e) {
    ;(Zi = !0), Dc(e)
  }
  function sn() {
    if (!Xo && zt !== null) {
      Xo = !0
      var e = 0,
        t = he
      try {
        var r = zt
        for (he = 1; e < r.length; e++) {
          var o = r[e]
          do o = o(!0)
          while (o !== null)
        }
        ;(zt = null), (Zi = !1)
      } catch (a) {
        throw (zt !== null && (zt = zt.slice(e + 1)), Vu(go, sn), a)
      } finally {
        ;(he = t), (Xo = !1)
      }
    }
    return null
  }
  var Zn = [],
    bn = 0,
    bi = null,
    Ji = 0,
    pt = [],
    mt = 0,
    Pn = null,
    Bt = 1,
    Ut = ''
  function Tn(e, t) {
    ;(Zn[bn++] = Ji), (Zn[bn++] = bi), (bi = e), (Ji = t)
  }
  function Lc(e, t, r) {
    ;(pt[mt++] = Bt), (pt[mt++] = Ut), (pt[mt++] = Pn), (Pn = e)
    var o = Bt
    e = Ut
    var a = 32 - Pt(o) - 1
    ;(o &= ~(1 << a)), (r += 1)
    var c = 32 - Pt(t) + a
    if (30 < c) {
      var h = a - (a % 5)
      ;(c = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (a -= h),
        (Bt = (1 << (32 - Pt(t) + a)) | (r << a) | o),
        (Ut = c + e)
    } else (Bt = (1 << c) | (r << a) | o), (Ut = e)
  }
  function Qo(e) {
    e.return !== null && (Tn(e, 1), Lc(e, 1, 0))
  }
  function qo(e) {
    for (; e === bi; )
      (bi = Zn[--bn]), (Zn[bn] = null), (Ji = Zn[--bn]), (Zn[bn] = null)
    for (; e === Pn; )
      (Pn = pt[--mt]),
        (pt[mt] = null),
        (Ut = pt[--mt]),
        (pt[mt] = null),
        (Bt = pt[--mt]),
        (pt[mt] = null)
  }
  var ut = null,
    ct = null,
    Pe = !1,
    Ct = null
  function Vc(e, t) {
    var r = xt(5, null, null, 0)
    ;(r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
  }
  function _c(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ut = e), (ct = tn(t.firstChild)), !0)
            : !1
        )
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ut = e), (ct = null), !0) : !1
        )
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Pn !== null ? { id: Bt, overflow: Ut } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = xt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ut = e),
              (ct = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function Zo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function bo(e) {
    if (Pe) {
      var t = ct
      if (t) {
        var r = t
        if (!_c(e, t)) {
          if (Zo(e)) throw Error(s(418))
          t = tn(r.nextSibling)
          var o = ut
          t && _c(e, t)
            ? Vc(o, r)
            : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (ut = e))
        }
      } else {
        if (Zo(e)) throw Error(s(418))
        ;(e.flags = (e.flags & -4097) | 2), (Pe = !1), (ut = e)
      }
    }
  }
  function Oc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return
    ut = e
  }
  function es(e) {
    if (e !== ut) return !1
    if (!Pe) return Oc(e), (Pe = !0), !1
    var t
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !Ho(e.type, e.memoizedProps))),
      t && (t = ct))
    ) {
      if (Zo(e)) throw (Ic(), Error(s(418)))
      for (; t; ) Vc(e, t), (t = tn(t.nextSibling))
    }
    if ((Oc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data
            if (r === '/$') {
              if (t === 0) {
                ct = tn(e.nextSibling)
                break e
              }
              t--
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++
          }
          e = e.nextSibling
        }
        ct = null
      }
    } else ct = ut ? tn(e.stateNode.nextSibling) : null
    return !0
  }
  function Ic() {
    for (var e = ct; e; ) e = tn(e.nextSibling)
  }
  function Jn() {
    ;(ct = ut = null), (Pe = !1)
  }
  function Jo(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e)
  }
  var jg = G.ReactCurrentBatchConfig
  function Kr(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(s(309))
          var o = r.stateNode
        }
        if (!o) throw Error(s(147, e))
        var a = o,
          c = '' + e
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (h) {
              var x = a.refs
              h === null ? delete x[c] : (x[c] = h)
            }),
            (t._stringRef = c),
            t)
      }
      if (typeof e != 'string') throw Error(s(284))
      if (!r._owner) throw Error(s(290, e))
    }
    return e
  }
  function ts(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    )
  }
  function Fc(e) {
    var t = e._init
    return t(e._payload)
  }
  function zc(e) {
    function t(j, T) {
      if (e) {
        var M = j.deletions
        M === null ? ((j.deletions = [T]), (j.flags |= 16)) : M.push(T)
      }
    }
    function r(j, T) {
      if (!e) return null
      for (; T !== null; ) t(j, T), (T = T.sibling)
      return null
    }
    function o(j, T) {
      for (j = new Map(); T !== null; )
        T.key !== null ? j.set(T.key, T) : j.set(T.index, T), (T = T.sibling)
      return j
    }
    function a(j, T) {
      return (j = hn(j, T)), (j.index = 0), (j.sibling = null), j
    }
    function c(j, T, M) {
      return (
        (j.index = M),
        e
          ? ((M = j.alternate),
            M !== null
              ? ((M = M.index), M < T ? ((j.flags |= 2), T) : M)
              : ((j.flags |= 2), T))
          : ((j.flags |= 1048576), T)
      )
    }
    function h(j) {
      return e && j.alternate === null && (j.flags |= 2), j
    }
    function x(j, T, M, I) {
      return T === null || T.tag !== 6
        ? ((T = $l(M, j.mode, I)), (T.return = j), T)
        : ((T = a(T, M)), (T.return = j), T)
    }
    function S(j, T, M, I) {
      var Q = M.type
      return Q === ie
        ? _(j, T, M.props.children, I, M.key)
        : T !== null &&
          (T.elementType === Q ||
            (typeof Q == 'object' &&
              Q !== null &&
              Q.$$typeof === Ie &&
              Fc(Q) === T.type))
        ? ((I = a(T, M.props)), (I.ref = Kr(j, T, M)), (I.return = j), I)
        : ((I = ks(M.type, M.key, M.props, null, j.mode, I)),
          (I.ref = Kr(j, T, M)),
          (I.return = j),
          I)
    }
    function R(j, T, M, I) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== M.containerInfo ||
        T.stateNode.implementation !== M.implementation
        ? ((T = Kl(M, j.mode, I)), (T.return = j), T)
        : ((T = a(T, M.children || [])), (T.return = j), T)
    }
    function _(j, T, M, I, Q) {
      return T === null || T.tag !== 7
        ? ((T = Nn(M, j.mode, I, Q)), (T.return = j), T)
        : ((T = a(T, M)), (T.return = j), T)
    }
    function O(j, T, M) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number')
        return (T = $l('' + T, j.mode, M)), (T.return = j), T
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case U:
            return (
              (M = ks(T.type, T.key, T.props, null, j.mode, M)),
              (M.ref = Kr(j, null, T)),
              (M.return = j),
              M
            )
          case b:
            return (T = Kl(T, j.mode, M)), (T.return = j), T
          case Ie:
            var I = T._init
            return O(j, I(T._payload), M)
        }
        if (wr(T) || Z(T))
          return (T = Nn(T, j.mode, M, null)), (T.return = j), T
        ts(j, T)
      }
      return null
    }
    function L(j, T, M, I) {
      var Q = T !== null ? T.key : null
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return Q !== null ? null : x(j, T, '' + M, I)
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case U:
            return M.key === Q ? S(j, T, M, I) : null
          case b:
            return M.key === Q ? R(j, T, M, I) : null
          case Ie:
            return (Q = M._init), L(j, T, Q(M._payload), I)
        }
        if (wr(M) || Z(M)) return Q !== null ? null : _(j, T, M, I, null)
        ts(j, M)
      }
      return null
    }
    function H(j, T, M, I, Q) {
      if ((typeof I == 'string' && I !== '') || typeof I == 'number')
        return (j = j.get(M) || null), x(T, j, '' + I, Q)
      if (typeof I == 'object' && I !== null) {
        switch (I.$$typeof) {
          case U:
            return (
              (j = j.get(I.key === null ? M : I.key) || null), S(T, j, I, Q)
            )
          case b:
            return (
              (j = j.get(I.key === null ? M : I.key) || null), R(T, j, I, Q)
            )
          case Ie:
            var J = I._init
            return H(j, T, M, J(I._payload), Q)
        }
        if (wr(I) || Z(I)) return (j = j.get(M) || null), _(T, j, I, Q, null)
        ts(T, I)
      }
      return null
    }
    function Y(j, T, M, I) {
      for (
        var Q = null, J = null, ee = T, ne = (T = 0), Be = null;
        ee !== null && ne < M.length;
        ne++
      ) {
        ee.index > ne ? ((Be = ee), (ee = null)) : (Be = ee.sibling)
        var fe = L(j, ee, M[ne], I)
        if (fe === null) {
          ee === null && (ee = Be)
          break
        }
        e && ee && fe.alternate === null && t(j, ee),
          (T = c(fe, T, ne)),
          J === null ? (Q = fe) : (J.sibling = fe),
          (J = fe),
          (ee = Be)
      }
      if (ne === M.length) return r(j, ee), Pe && Tn(j, ne), Q
      if (ee === null) {
        for (; ne < M.length; ne++)
          (ee = O(j, M[ne], I)),
            ee !== null &&
              ((T = c(ee, T, ne)),
              J === null ? (Q = ee) : (J.sibling = ee),
              (J = ee))
        return Pe && Tn(j, ne), Q
      }
      for (ee = o(j, ee); ne < M.length; ne++)
        (Be = H(ee, j, ne, M[ne], I)),
          Be !== null &&
            (e &&
              Be.alternate !== null &&
              ee.delete(Be.key === null ? ne : Be.key),
            (T = c(Be, T, ne)),
            J === null ? (Q = Be) : (J.sibling = Be),
            (J = Be))
      return (
        e &&
          ee.forEach(function (pn) {
            return t(j, pn)
          }),
        Pe && Tn(j, ne),
        Q
      )
    }
    function X(j, T, M, I) {
      var Q = Z(M)
      if (typeof Q != 'function') throw Error(s(150))
      if (((M = Q.call(M)), M == null)) throw Error(s(151))
      for (
        var J = (Q = null), ee = T, ne = (T = 0), Be = null, fe = M.next();
        ee !== null && !fe.done;
        ne++, fe = M.next()
      ) {
        ee.index > ne ? ((Be = ee), (ee = null)) : (Be = ee.sibling)
        var pn = L(j, ee, fe.value, I)
        if (pn === null) {
          ee === null && (ee = Be)
          break
        }
        e && ee && pn.alternate === null && t(j, ee),
          (T = c(pn, T, ne)),
          J === null ? (Q = pn) : (J.sibling = pn),
          (J = pn),
          (ee = Be)
      }
      if (fe.done) return r(j, ee), Pe && Tn(j, ne), Q
      if (ee === null) {
        for (; !fe.done; ne++, fe = M.next())
          (fe = O(j, fe.value, I)),
            fe !== null &&
              ((T = c(fe, T, ne)),
              J === null ? (Q = fe) : (J.sibling = fe),
              (J = fe))
        return Pe && Tn(j, ne), Q
      }
      for (ee = o(j, ee); !fe.done; ne++, fe = M.next())
        (fe = H(ee, j, ne, fe.value, I)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              ee.delete(fe.key === null ? ne : fe.key),
            (T = c(fe, T, ne)),
            J === null ? (Q = fe) : (J.sibling = fe),
            (J = fe))
      return (
        e &&
          ee.forEach(function (sy) {
            return t(j, sy)
          }),
        Pe && Tn(j, ne),
        Q
      )
    }
    function Ae(j, T, M, I) {
      if (
        (typeof M == 'object' &&
          M !== null &&
          M.type === ie &&
          M.key === null &&
          (M = M.props.children),
        typeof M == 'object' && M !== null)
      ) {
        switch (M.$$typeof) {
          case U:
            e: {
              for (var Q = M.key, J = T; J !== null; ) {
                if (J.key === Q) {
                  if (((Q = M.type), Q === ie)) {
                    if (J.tag === 7) {
                      r(j, J.sibling),
                        (T = a(J, M.props.children)),
                        (T.return = j),
                        (j = T)
                      break e
                    }
                  } else if (
                    J.elementType === Q ||
                    (typeof Q == 'object' &&
                      Q !== null &&
                      Q.$$typeof === Ie &&
                      Fc(Q) === J.type)
                  ) {
                    r(j, J.sibling),
                      (T = a(J, M.props)),
                      (T.ref = Kr(j, J, M)),
                      (T.return = j),
                      (j = T)
                    break e
                  }
                  r(j, J)
                  break
                } else t(j, J)
                J = J.sibling
              }
              M.type === ie
                ? ((T = Nn(M.props.children, j.mode, I, M.key)),
                  (T.return = j),
                  (j = T))
                : ((I = ks(M.type, M.key, M.props, null, j.mode, I)),
                  (I.ref = Kr(j, T, M)),
                  (I.return = j),
                  (j = I))
            }
            return h(j)
          case b:
            e: {
              for (J = M.key; T !== null; ) {
                if (T.key === J)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === M.containerInfo &&
                    T.stateNode.implementation === M.implementation
                  ) {
                    r(j, T.sibling),
                      (T = a(T, M.children || [])),
                      (T.return = j),
                      (j = T)
                    break e
                  } else {
                    r(j, T)
                    break
                  }
                else t(j, T)
                T = T.sibling
              }
              ;(T = Kl(M, j.mode, I)), (T.return = j), (j = T)
            }
            return h(j)
          case Ie:
            return (J = M._init), Ae(j, T, J(M._payload), I)
        }
        if (wr(M)) return Y(j, T, M, I)
        if (Z(M)) return X(j, T, M, I)
        ts(j, M)
      }
      return (typeof M == 'string' && M !== '') || typeof M == 'number'
        ? ((M = '' + M),
          T !== null && T.tag === 6
            ? (r(j, T.sibling), (T = a(T, M)), (T.return = j), (j = T))
            : (r(j, T), (T = $l(M, j.mode, I)), (T.return = j), (j = T)),
          h(j))
        : r(j, T)
    }
    return Ae
  }
  var er = zc(!0),
    Bc = zc(!1),
    ns = nn(null),
    rs = null,
    tr = null,
    el = null
  function tl() {
    el = tr = rs = null
  }
  function nl(e) {
    var t = ns.current
    ve(ns), (e._currentValue = t)
  }
  function rl(e, t, r) {
    for (; e !== null; ) {
      var o = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
      )
        break
      e = e.return
    }
  }
  function nr(e, t) {
    ;(rs = e),
      (el = tr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (rt = !0), (e.firstContext = null))
  }
  function gt(e) {
    var t = e._currentValue
    if (el !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), tr === null)) {
        if (rs === null) throw Error(s(308))
        ;(tr = e), (rs.dependencies = { lanes: 0, firstContext: e })
      } else tr = tr.next = e
    return t
  }
  var Cn = null
  function il(e) {
    Cn === null ? (Cn = [e]) : Cn.push(e)
  }
  function Uc(e, t, r, o) {
    var a = t.interleaved
    return (
      a === null ? ((r.next = r), il(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Wt(e, o)
    )
  }
  function Wt(e, t) {
    e.lanes |= t
    var r = e.alternate
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return)
    return r.tag === 3 ? r.stateNode : null
  }
  var on = !1
  function sl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function Wc(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        })
  }
  function Ht(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function ln(e, t, r) {
    var o = e.updateQueue
    if (o === null) return null
    if (((o = o.shared), ae & 2)) {
      var a = o.pending
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Wt(e, r)
      )
    }
    return (
      (a = o.interleaved),
      a === null ? ((t.next = t), il(o)) : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Wt(e, r)
    )
  }
  function is(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var o = t.lanes
      ;(o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r)
    }
  }
  function Hc(e, t) {
    var r = e.updateQueue,
      o = e.alternate
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var a = null,
        c = null
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var h = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }
          c === null ? (a = c = h) : (c = c.next = h), (r = r.next)
        } while (r !== null)
        c === null ? (a = c = t) : (c = c.next = t)
      } else a = c = t
      ;(r = {
        baseState: o.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: c,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = r)
      return
    }
    ;(e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t)
  }
  function ss(e, t, r, o) {
    var a = e.updateQueue
    on = !1
    var c = a.firstBaseUpdate,
      h = a.lastBaseUpdate,
      x = a.shared.pending
    if (x !== null) {
      a.shared.pending = null
      var S = x,
        R = S.next
      ;(S.next = null), h === null ? (c = R) : (h.next = R), (h = S)
      var _ = e.alternate
      _ !== null &&
        ((_ = _.updateQueue),
        (x = _.lastBaseUpdate),
        x !== h &&
          (x === null ? (_.firstBaseUpdate = R) : (x.next = R),
          (_.lastBaseUpdate = S)))
    }
    if (c !== null) {
      var O = a.baseState
      ;(h = 0), (_ = R = S = null), (x = c)
      do {
        var L = x.lane,
          H = x.eventTime
        if ((o & L) === L) {
          _ !== null &&
            (_ = _.next =
              {
                eventTime: H,
                lane: 0,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null,
              })
          e: {
            var Y = e,
              X = x
            switch (((L = t), (H = r), X.tag)) {
              case 1:
                if (((Y = X.payload), typeof Y == 'function')) {
                  O = Y.call(H, O, L)
                  break e
                }
                O = Y
                break e
              case 3:
                Y.flags = (Y.flags & -65537) | 128
              case 0:
                if (
                  ((Y = X.payload),
                  (L = typeof Y == 'function' ? Y.call(H, O, L) : Y),
                  L == null)
                )
                  break e
                O = $({}, O, L)
                break e
              case 2:
                on = !0
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64),
            (L = a.effects),
            L === null ? (a.effects = [x]) : L.push(x))
        } else
          (H = {
            eventTime: H,
            lane: L,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            _ === null ? ((R = _ = H), (S = O)) : (_ = _.next = H),
            (h |= L)
        if (((x = x.next), x === null)) {
          if (((x = a.shared.pending), x === null)) break
          ;(L = x),
            (x = L.next),
            (L.next = null),
            (a.lastBaseUpdate = L),
            (a.shared.pending = null)
        }
      } while (!0)
      if (
        (_ === null && (S = O),
        (a.baseState = S),
        (a.firstBaseUpdate = R),
        (a.lastBaseUpdate = _),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t
        do (h |= a.lane), (a = a.next)
        while (a !== t)
      } else c === null && (a.shared.lanes = 0)
      ;(jn |= h), (e.lanes = h), (e.memoizedState = O)
    }
  }
  function $c(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          a = o.callback
        if (a !== null) {
          if (((o.callback = null), (o = r), typeof a != 'function'))
            throw Error(s(191, a))
          a.call(o)
        }
      }
  }
  var Yr = {},
    Dt = nn(Yr),
    Gr = nn(Yr),
    Xr = nn(Yr)
  function kn(e) {
    if (e === Yr) throw Error(s(174))
    return e
  }
  function ol(e, t) {
    switch ((ge(Xr, t), ge(Gr, e), ge(Dt, Yr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oo(null, '')
        break
      default:
        ;(e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = oo(t, e))
    }
    ve(Dt), ge(Dt, t)
  }
  function rr() {
    ve(Dt), ve(Gr), ve(Xr)
  }
  function Kc(e) {
    kn(Xr.current)
    var t = kn(Dt.current),
      r = oo(t, e.type)
    t !== r && (ge(Gr, e), ge(Dt, r))
  }
  function ll(e) {
    Gr.current === e && (ve(Dt), ve(Gr))
  }
  var Te = nn(0)
  function os(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  var al = []
  function ul() {
    for (var e = 0; e < al.length; e++)
      al[e]._workInProgressVersionPrimary = null
    al.length = 0
  }
  var ls = G.ReactCurrentDispatcher,
    cl = G.ReactCurrentBatchConfig,
    En = 0,
    Ce = null,
    Ve = null,
    Fe = null,
    as = !1,
    Qr = !1,
    qr = 0,
    Mg = 0
  function Ge() {
    throw Error(s(321))
  }
  function fl(e, t) {
    if (t === null) return !1
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Tt(e[r], t[r])) return !1
    return !0
  }
  function dl(e, t, r, o, a, c) {
    if (
      ((En = c),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ls.current = e === null || e.memoizedState === null ? Dg : Lg),
      (e = r(o, a)),
      Qr)
    ) {
      c = 0
      do {
        if (((Qr = !1), (qr = 0), 25 <= c)) throw Error(s(301))
        ;(c += 1),
          (Fe = Ve = null),
          (t.updateQueue = null),
          (ls.current = Vg),
          (e = r(o, a))
      } while (Qr)
    }
    if (
      ((ls.current = fs),
      (t = Ve !== null && Ve.next !== null),
      (En = 0),
      (Fe = Ve = Ce = null),
      (as = !1),
      t)
    )
      throw Error(s(300))
    return e
  }
  function hl() {
    var e = qr !== 0
    return (qr = 0), e
  }
  function Lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return Fe === null ? (Ce.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe
  }
  function yt() {
    if (Ve === null) {
      var e = Ce.alternate
      e = e !== null ? e.memoizedState : null
    } else e = Ve.next
    var t = Fe === null ? Ce.memoizedState : Fe.next
    if (t !== null) (Fe = t), (Ve = e)
    else {
      if (e === null) throw Error(s(310))
      ;(Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        Fe === null ? (Ce.memoizedState = Fe = e) : (Fe = Fe.next = e)
    }
    return Fe
  }
  function Zr(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function pl(e) {
    var t = yt(),
      r = t.queue
    if (r === null) throw Error(s(311))
    r.lastRenderedReducer = e
    var o = Ve,
      a = o.baseQueue,
      c = r.pending
    if (c !== null) {
      if (a !== null) {
        var h = a.next
        ;(a.next = c.next), (c.next = h)
      }
      ;(o.baseQueue = a = c), (r.pending = null)
    }
    if (a !== null) {
      ;(c = a.next), (o = o.baseState)
      var x = (h = null),
        S = null,
        R = c
      do {
        var _ = R.lane
        if ((En & _) === _)
          S !== null &&
            (S = S.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (o = R.hasEagerState ? R.eagerState : e(o, R.action))
        else {
          var O = {
            lane: _,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }
          S === null ? ((x = S = O), (h = o)) : (S = S.next = O),
            (Ce.lanes |= _),
            (jn |= _)
        }
        R = R.next
      } while (R !== null && R !== c)
      S === null ? (h = o) : (S.next = x),
        Tt(o, t.memoizedState) || (rt = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = S),
        (r.lastRenderedState = o)
    }
    if (((e = r.interleaved), e !== null)) {
      a = e
      do (c = a.lane), (Ce.lanes |= c), (jn |= c), (a = a.next)
      while (a !== e)
    } else a === null && (r.lanes = 0)
    return [t.memoizedState, r.dispatch]
  }
  function ml(e) {
    var t = yt(),
      r = t.queue
    if (r === null) throw Error(s(311))
    r.lastRenderedReducer = e
    var o = r.dispatch,
      a = r.pending,
      c = t.memoizedState
    if (a !== null) {
      r.pending = null
      var h = (a = a.next)
      do (c = e(c, h.action)), (h = h.next)
      while (h !== a)
      Tt(c, t.memoizedState) || (rt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c)
    }
    return [c, o]
  }
  function Yc() {}
  function Gc(e, t) {
    var r = Ce,
      o = yt(),
      a = t(),
      c = !Tt(o.memoizedState, a)
    if (
      (c && ((o.memoizedState = a), (rt = !0)),
      (o = o.queue),
      gl(qc.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || c || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        br(9, Qc.bind(null, r, o, a, t), void 0, null),
        ze === null)
      )
        throw Error(s(349))
      En & 30 || Xc(r, t, a)
    }
    return a
  }
  function Xc(e, t, r) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
  }
  function Qc(e, t, r, o) {
    ;(t.value = r), (t.getSnapshot = o), Zc(t) && bc(e)
  }
  function qc(e, t, r) {
    return r(function () {
      Zc(t) && bc(e)
    })
  }
  function Zc(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var r = t()
      return !Tt(e, r)
    } catch {
      return !0
    }
  }
  function bc(e) {
    var t = Wt(e, 1)
    t !== null && Mt(t, e, 1, -1)
  }
  function Jc(e) {
    var t = Lt()
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ng.bind(null, Ce, e)),
      [t.memoizedState, e]
    )
  }
  function br(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    )
  }
  function ef() {
    return yt().memoizedState
  }
  function us(e, t, r, o) {
    var a = Lt()
    ;(Ce.flags |= e),
      (a.memoizedState = br(1 | t, r, void 0, o === void 0 ? null : o))
  }
  function cs(e, t, r, o) {
    var a = yt()
    o = o === void 0 ? null : o
    var c = void 0
    if (Ve !== null) {
      var h = Ve.memoizedState
      if (((c = h.destroy), o !== null && fl(o, h.deps))) {
        a.memoizedState = br(t, r, c, o)
        return
      }
    }
    ;(Ce.flags |= e), (a.memoizedState = br(1 | t, r, c, o))
  }
  function tf(e, t) {
    return us(8390656, 8, e, t)
  }
  function gl(e, t) {
    return cs(2048, 8, e, t)
  }
  function nf(e, t) {
    return cs(4, 2, e, t)
  }
  function rf(e, t) {
    return cs(4, 4, e, t)
  }
  function sf(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null)
        }
      )
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function of(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), cs(4, 4, sf.bind(null, t, e), r)
    )
  }
  function yl() {}
  function lf(e, t) {
    var r = yt()
    t = t === void 0 ? null : t
    var o = r.memoizedState
    return o !== null && t !== null && fl(t, o[1])
      ? o[0]
      : ((r.memoizedState = [e, t]), e)
  }
  function af(e, t) {
    var r = yt()
    t = t === void 0 ? null : t
    var o = r.memoizedState
    return o !== null && t !== null && fl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e)
  }
  function uf(e, t, r) {
    return En & 21
      ? (Tt(r, t) ||
          ((r = Fu()), (Ce.lanes |= r), (jn |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = r))
  }
  function Ag(e, t) {
    var r = he
    ;(he = r !== 0 && 4 > r ? r : 4), e(!0)
    var o = cl.transition
    cl.transition = {}
    try {
      e(!1), t()
    } finally {
      ;(he = r), (cl.transition = o)
    }
  }
  function cf() {
    return yt().memoizedState
  }
  function Rg(e, t, r) {
    var o = fn(e)
    if (
      ((r = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ff(e))
    )
      df(t, r)
    else if (((r = Uc(e, t, r, o)), r !== null)) {
      var a = Je()
      Mt(r, e, o, a), hf(r, t, o)
    }
  }
  function Ng(e, t, r) {
    var o = fn(e),
      a = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (ff(e)) df(t, a)
    else {
      var c = e.alternate
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var h = t.lastRenderedState,
            x = c(h, r)
          if (((a.hasEagerState = !0), (a.eagerState = x), Tt(x, h))) {
            var S = t.interleaved
            S === null
              ? ((a.next = a), il(t))
              : ((a.next = S.next), (S.next = a)),
              (t.interleaved = a)
            return
          }
        } catch {
        } finally {
        }
      ;(r = Uc(e, t, a, o)),
        r !== null && ((a = Je()), Mt(r, e, o, a), hf(r, t, o))
    }
  }
  function ff(e) {
    var t = e.alternate
    return e === Ce || (t !== null && t === Ce)
  }
  function df(e, t) {
    Qr = as = !0
    var r = e.pending
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t)
  }
  function hf(e, t, r) {
    if (r & 4194240) {
      var o = t.lanes
      ;(o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r)
    }
  }
  var fs = {
      readContext: gt,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useInsertionEffect: Ge,
      useLayoutEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useMutableSource: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      unstable_isNewReconciler: !1,
    },
    Dg = {
      readContext: gt,
      useCallback: function (e, t) {
        return (Lt().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: gt,
      useEffect: tf,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          us(4194308, 4, sf.bind(null, t, e), r)
        )
      },
      useLayoutEffect: function (e, t) {
        return us(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        return us(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var r = Lt()
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        )
      },
      useReducer: function (e, t, r) {
        var o = Lt()
        return (
          (t = r !== void 0 ? r(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Rg.bind(null, Ce, e)),
          [o.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = Lt()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: Jc,
      useDebugValue: yl,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e)
      },
      useTransition: function () {
        var e = Jc(!1),
          t = e[0]
        return (e = Ag.bind(null, e[1])), (Lt().memoizedState = e), [t, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = Ce,
          a = Lt()
        if (Pe) {
          if (r === void 0) throw Error(s(407))
          r = r()
        } else {
          if (((r = t()), ze === null)) throw Error(s(349))
          En & 30 || Xc(o, t, r)
        }
        a.memoizedState = r
        var c = { value: r, getSnapshot: t }
        return (
          (a.queue = c),
          tf(qc.bind(null, o, c, e), [e]),
          (o.flags |= 2048),
          br(9, Qc.bind(null, o, c, r, t), void 0, null),
          r
        )
      },
      useId: function () {
        var e = Lt(),
          t = ze.identifierPrefix
        if (Pe) {
          var r = Ut,
            o = Bt
          ;(r = (o & ~(1 << (32 - Pt(o) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = qr++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':')
        } else (r = Mg++), (t = ':' + t + 'r' + r.toString(32) + ':')
        return (e.memoizedState = t)
      },
      unstable_isNewReconciler: !1,
    },
    Lg = {
      readContext: gt,
      useCallback: lf,
      useContext: gt,
      useEffect: gl,
      useImperativeHandle: of,
      useInsertionEffect: nf,
      useLayoutEffect: rf,
      useMemo: af,
      useReducer: pl,
      useRef: ef,
      useState: function () {
        return pl(Zr)
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = yt()
        return uf(t, Ve.memoizedState, e)
      },
      useTransition: function () {
        var e = pl(Zr)[0],
          t = yt().memoizedState
        return [e, t]
      },
      useMutableSource: Yc,
      useSyncExternalStore: Gc,
      useId: cf,
      unstable_isNewReconciler: !1,
    },
    Vg = {
      readContext: gt,
      useCallback: lf,
      useContext: gt,
      useEffect: gl,
      useImperativeHandle: of,
      useInsertionEffect: nf,
      useLayoutEffect: rf,
      useMemo: af,
      useReducer: ml,
      useRef: ef,
      useState: function () {
        return ml(Zr)
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = yt()
        return Ve === null ? (t.memoizedState = e) : uf(t, Ve.memoizedState, e)
      },
      useTransition: function () {
        var e = ml(Zr)[0],
          t = yt().memoizedState
        return [e, t]
      },
      useMutableSource: Yc,
      useSyncExternalStore: Gc,
      useId: cf,
      unstable_isNewReconciler: !1,
    }
  function kt(e, t) {
    if (e && e.defaultProps) {
      ;(t = $({}, t)), (e = e.defaultProps)
      for (var r in e) t[r] === void 0 && (t[r] = e[r])
      return t
    }
    return t
  }
  function vl(e, t, r, o) {
    ;(t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : $({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r)
  }
  var ds = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? xn(e) === e : !1
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals
      var o = Je(),
        a = fn(e),
        c = Ht(o, a)
      ;(c.payload = t),
        r != null && (c.callback = r),
        (t = ln(e, c, a)),
        t !== null && (Mt(t, e, a, o), is(t, e, a))
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals
      var o = Je(),
        a = fn(e),
        c = Ht(o, a)
      ;(c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = ln(e, c, a)),
        t !== null && (Mt(t, e, a, o), is(t, e, a))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var r = Je(),
        o = fn(e),
        a = Ht(r, o)
      ;(a.tag = 2),
        t != null && (a.callback = t),
        (t = ln(e, a, o)),
        t !== null && (Mt(t, e, o, r), is(t, e, o))
    },
  }
  function pf(e, t, r, o, a, c, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, c, h)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Fr(r, o) || !Fr(a, c)
        : !0
    )
  }
  function mf(e, t, r) {
    var o = !1,
      a = rn,
      c = t.contextType
    return (
      typeof c == 'object' && c !== null
        ? (c = gt(c))
        : ((a = nt(t) ? Sn : Ye.current),
          (o = t.contextTypes),
          (c = (o = o != null) ? qn(e, a) : rn)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ds),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    )
  }
  function gf(e, t, r, o) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && ds.enqueueReplaceState(t, t.state, null)
  }
  function xl(e, t, r, o) {
    var a = e.stateNode
    ;(a.props = r), (a.state = e.memoizedState), (a.refs = {}), sl(e)
    var c = t.contextType
    typeof c == 'object' && c !== null
      ? (a.context = gt(c))
      : ((c = nt(t) ? Sn : Ye.current), (a.context = qn(e, c))),
      (a.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == 'function' && (vl(e, t, c, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function' ||
        (typeof a.UNSAFE_componentWillMount != 'function' &&
          typeof a.componentWillMount != 'function') ||
        ((t = a.state),
        typeof a.componentWillMount == 'function' && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == 'function' &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && ds.enqueueReplaceState(a, a.state, null),
        ss(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function' && (e.flags |= 4194308)
  }
  function ir(e, t) {
    try {
      var r = '',
        o = t
      do (r += ue(o)), (o = o.return)
      while (o)
      var a = r
    } catch (c) {
      a =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack
    }
    return { value: e, source: t, stack: a, digest: null }
  }
  function wl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null }
  }
  function Sl(e, t) {
    try {
      console.error(t.value)
    } catch (r) {
      setTimeout(function () {
        throw r
      })
    }
  }
  var _g = typeof WeakMap == 'function' ? WeakMap : Map
  function yf(e, t, r) {
    ;(r = Ht(-1, r)), (r.tag = 3), (r.payload = { element: null })
    var o = t.value
    return (
      (r.callback = function () {
        xs || ((xs = !0), (Ol = o)), Sl(e, t)
      }),
      r
    )
  }
  function vf(e, t, r) {
    ;(r = Ht(-1, r)), (r.tag = 3)
    var o = e.type.getDerivedStateFromError
    if (typeof o == 'function') {
      var a = t.value
      ;(r.payload = function () {
        return o(a)
      }),
        (r.callback = function () {
          Sl(e, t)
        })
    }
    var c = e.stateNode
    return (
      c !== null &&
        typeof c.componentDidCatch == 'function' &&
        (r.callback = function () {
          Sl(e, t),
            typeof o != 'function' &&
              (un === null ? (un = new Set([this])) : un.add(this))
          var h = t.stack
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : '',
          })
        }),
      r
    )
  }
  function xf(e, t, r) {
    var o = e.pingCache
    if (o === null) {
      o = e.pingCache = new _g()
      var a = new Set()
      o.set(t, a)
    } else (a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a))
    a.has(r) || (a.add(r), (e = Qg.bind(null, e, t, r)), t.then(e, e))
  }
  function wf(e) {
    do {
      var t
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e
      e = e.return
    } while (e !== null)
    return null
  }
  function Sf(e, t, r, o, a) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Ht(-1, 1)), (t.tag = 2), ln(r, t, 1))),
            (r.lanes |= 1)),
        e)
  }
  var Og = G.ReactCurrentOwner,
    rt = !1
  function be(e, t, r, o) {
    t.child = e === null ? Bc(t, null, r, o) : er(t, e.child, r, o)
  }
  function Pf(e, t, r, o, a) {
    r = r.render
    var c = t.ref
    return (
      nr(t, a),
      (o = dl(e, t, r, o, c, a)),
      (r = hl()),
      e !== null && !rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $t(e, t, a))
        : (Pe && r && Qo(t), (t.flags |= 1), be(e, t, o, a), t.child)
    )
  }
  function Tf(e, t, r, o, a) {
    if (e === null) {
      var c = r.type
      return typeof c == 'function' &&
        !Hl(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Cf(e, t, c, o, a))
        : ((e = ks(r.type, null, o, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((c = e.child), !(e.lanes & a))) {
      var h = c.memoizedProps
      if (
        ((r = r.compare), (r = r !== null ? r : Fr), r(h, o) && e.ref === t.ref)
      )
        return $t(e, t, a)
    }
    return (
      (t.flags |= 1),
      (e = hn(c, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function Cf(e, t, r, o, a) {
    if (e !== null) {
      var c = e.memoizedProps
      if (Fr(c, o) && e.ref === t.ref)
        if (((rt = !1), (t.pendingProps = o = c), (e.lanes & a) !== 0))
          e.flags & 131072 && (rt = !0)
        else return (t.lanes = e.lanes), $t(e, t, a)
    }
    return Pl(e, t, r, o, a)
  }
  function kf(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      c = e !== null ? e.memoizedState : null
    if (o.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ge(or, ft),
          (ft |= r)
      else {
        if (!(r & 1073741824))
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ge(or, ft),
            (ft |= e),
            null
          )
        ;(t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = c !== null ? c.baseLanes : r),
          ge(or, ft),
          (ft |= o)
      }
    else
      c !== null ? ((o = c.baseLanes | r), (t.memoizedState = null)) : (o = r),
        ge(or, ft),
        (ft |= o)
    return be(e, t, a, r), t.child
  }
  function Ef(e, t) {
    var r = t.ref
    ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152))
  }
  function Pl(e, t, r, o, a) {
    var c = nt(r) ? Sn : Ye.current
    return (
      (c = qn(t, c)),
      nr(t, a),
      (r = dl(e, t, r, o, c, a)),
      (o = hl()),
      e !== null && !rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $t(e, t, a))
        : (Pe && o && Qo(t), (t.flags |= 1), be(e, t, r, a), t.child)
    )
  }
  function jf(e, t, r, o, a) {
    if (nt(r)) {
      var c = !0
      qi(t)
    } else c = !1
    if ((nr(t, a), t.stateNode === null))
      ps(e, t), mf(t, r, o), xl(t, r, o, a), (o = !0)
    else if (e === null) {
      var h = t.stateNode,
        x = t.memoizedProps
      h.props = x
      var S = h.context,
        R = r.contextType
      typeof R == 'object' && R !== null
        ? (R = gt(R))
        : ((R = nt(r) ? Sn : Ye.current), (R = qn(t, R)))
      var _ = r.getDerivedStateFromProps,
        O =
          typeof _ == 'function' ||
          typeof h.getSnapshotBeforeUpdate == 'function'
      O ||
        (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof h.componentWillReceiveProps != 'function') ||
        ((x !== o || S !== R) && gf(t, h, o, R)),
        (on = !1)
      var L = t.memoizedState
      ;(h.state = L),
        ss(t, o, h, a),
        (S = t.memoizedState),
        x !== o || L !== S || tt.current || on
          ? (typeof _ == 'function' && (vl(t, r, _, o), (S = t.memoizedState)),
            (x = on || pf(t, r, x, o, L, S, R))
              ? (O ||
                  (typeof h.UNSAFE_componentWillMount != 'function' &&
                    typeof h.componentWillMount != 'function') ||
                  (typeof h.componentWillMount == 'function' &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == 'function' &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = S)),
            (h.props = o),
            (h.state = S),
            (h.context = R),
            (o = x))
          : (typeof h.componentDidMount == 'function' && (t.flags |= 4194308),
            (o = !1))
    } else {
      ;(h = t.stateNode),
        Wc(e, t),
        (x = t.memoizedProps),
        (R = t.type === t.elementType ? x : kt(t.type, x)),
        (h.props = R),
        (O = t.pendingProps),
        (L = h.context),
        (S = r.contextType),
        typeof S == 'object' && S !== null
          ? (S = gt(S))
          : ((S = nt(r) ? Sn : Ye.current), (S = qn(t, S)))
      var H = r.getDerivedStateFromProps
      ;(_ =
        typeof H == 'function' ||
        typeof h.getSnapshotBeforeUpdate == 'function') ||
        (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof h.componentWillReceiveProps != 'function') ||
        ((x !== O || L !== S) && gf(t, h, o, S)),
        (on = !1),
        (L = t.memoizedState),
        (h.state = L),
        ss(t, o, h, a)
      var Y = t.memoizedState
      x !== O || L !== Y || tt.current || on
        ? (typeof H == 'function' && (vl(t, r, H, o), (Y = t.memoizedState)),
          (R = on || pf(t, r, R, o, L, Y, S) || !1)
            ? (_ ||
                (typeof h.UNSAFE_componentWillUpdate != 'function' &&
                  typeof h.componentWillUpdate != 'function') ||
                (typeof h.componentWillUpdate == 'function' &&
                  h.componentWillUpdate(o, Y, S),
                typeof h.UNSAFE_componentWillUpdate == 'function' &&
                  h.UNSAFE_componentWillUpdate(o, Y, S)),
              typeof h.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != 'function' ||
                (x === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != 'function' ||
                (x === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = Y)),
          (h.props = o),
          (h.state = Y),
          (h.context = S),
          (o = R))
        : (typeof h.componentDidUpdate != 'function' ||
            (x === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != 'function' ||
            (x === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1))
    }
    return Tl(e, t, r, o, c, a)
  }
  function Tl(e, t, r, o, a, c) {
    Ef(e, t)
    var h = (t.flags & 128) !== 0
    if (!o && !h) return a && Nc(t, r, !1), $t(e, t, c)
    ;(o = t.stateNode), (Og.current = t)
    var x =
      h && typeof r.getDerivedStateFromError != 'function' ? null : o.render()
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = er(t, e.child, null, c)), (t.child = er(t, null, x, c)))
        : be(e, t, x, c),
      (t.memoizedState = o.state),
      a && Nc(t, r, !0),
      t.child
    )
  }
  function Mf(e) {
    var t = e.stateNode
    t.pendingContext
      ? Ac(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ac(e, t.context, !1),
      ol(e, t.containerInfo)
  }
  function Af(e, t, r, o, a) {
    return Jn(), Jo(a), (t.flags |= 256), be(e, t, r, o), t.child
  }
  var Cl = { dehydrated: null, treeContext: null, retryLane: 0 }
  function kl(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function Rf(e, t, r) {
    var o = t.pendingProps,
      a = Te.current,
      c = !1,
      h = (t.flags & 128) !== 0,
      x
    if (
      ((x = h) ||
        (x = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      x
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      ge(Te, a & 1),
      e === null)
    )
      return (
        bo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((h = o.children),
            (e = o.fallback),
            c
              ? ((o = t.mode),
                (c = t.child),
                (h = { mode: 'hidden', children: h }),
                !(o & 1) && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = h))
                  : (c = Es(h, o, 0, null)),
                (e = Nn(e, o, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = kl(r)),
                (t.memoizedState = Cl),
                e)
              : El(t, h))
      )
    if (((a = e.memoizedState), a !== null && ((x = a.dehydrated), x !== null)))
      return Ig(e, t, h, o, x, a, r)
    if (c) {
      ;(c = o.fallback), (h = t.mode), (a = e.child), (x = a.sibling)
      var S = { mode: 'hidden', children: o.children }
      return (
        !(h & 1) && t.child !== a
          ? ((o = t.child),
            (o.childLanes = 0),
            (o.pendingProps = S),
            (t.deletions = null))
          : ((o = hn(a, S)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
        x !== null ? (c = hn(x, c)) : ((c = Nn(c, h, r, null)), (c.flags |= 2)),
        (c.return = t),
        (o.return = t),
        (o.sibling = c),
        (t.child = o),
        (o = c),
        (c = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? kl(r)
            : {
                baseLanes: h.baseLanes | r,
                cachePool: null,
                transitions: h.transitions,
              }),
        (c.memoizedState = h),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = Cl),
        o
      )
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (o = hn(c, { mode: 'visible', children: o.children })),
      !(t.mode & 1) && (o.lanes = r),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    )
  }
  function El(e, t) {
    return (
      (t = Es({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    )
  }
  function hs(e, t, r, o) {
    return (
      o !== null && Jo(o),
      er(t, e.child, null, r),
      (e = El(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function Ig(e, t, r, o, a, c, h) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = wl(Error(s(422)))), hs(e, t, h, o))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = o.fallback),
          (a = t.mode),
          (o = Es({ mode: 'visible', children: o.children }, a, 0, null)),
          (c = Nn(c, a, h, null)),
          (c.flags |= 2),
          (o.return = t),
          (c.return = t),
          (o.sibling = c),
          (t.child = o),
          t.mode & 1 && er(t, e.child, null, h),
          (t.child.memoizedState = kl(h)),
          (t.memoizedState = Cl),
          c)
    if (!(t.mode & 1)) return hs(e, t, h, null)
    if (a.data === '$!') {
      if (((o = a.nextSibling && a.nextSibling.dataset), o)) var x = o.dgst
      return (
        (o = x), (c = Error(s(419))), (o = wl(c, o, void 0)), hs(e, t, h, o)
      )
    }
    if (((x = (h & e.childLanes) !== 0), rt || x)) {
      if (((o = ze), o !== null)) {
        switch (h & -h) {
          case 4:
            a = 2
            break
          case 16:
            a = 8
            break
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
            a = 32
            break
          case 536870912:
            a = 268435456
            break
          default:
            a = 0
        }
        ;(a = a & (o.suspendedLanes | h) ? 0 : a),
          a !== 0 &&
            a !== c.retryLane &&
            ((c.retryLane = a), Wt(e, a), Mt(o, e, a, -1))
      }
      return Wl(), (o = wl(Error(s(421)))), hs(e, t, h, o)
    }
    return a.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = qg.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (ct = tn(a.nextSibling)),
        (ut = t),
        (Pe = !0),
        (Ct = null),
        e !== null &&
          ((pt[mt++] = Bt),
          (pt[mt++] = Ut),
          (pt[mt++] = Pn),
          (Bt = e.id),
          (Ut = e.overflow),
          (Pn = t)),
        (t = El(t, o.children)),
        (t.flags |= 4096),
        t)
  }
  function Nf(e, t, r) {
    e.lanes |= t
    var o = e.alternate
    o !== null && (o.lanes |= t), rl(e.return, t, r)
  }
  function jl(e, t, r, o, a) {
    var c = e.memoizedState
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: a,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = o),
        (c.tail = r),
        (c.tailMode = a))
  }
  function Df(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      c = o.tail
    if ((be(e, t, o.children, r), (o = Te.current), o & 2))
      (o = (o & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Nf(e, r, t)
          else if (e.tag === 19) Nf(e, r, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      o &= 1
    }
    if ((ge(Te, o), !(t.mode & 1))) t.memoizedState = null
    else
      switch (a) {
        case 'forwards':
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && os(e) === null && (a = r),
              (r = r.sibling)
          ;(r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            jl(t, !1, a, r, c)
          break
        case 'backwards':
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && os(e) === null)) {
              t.child = a
              break
            }
            ;(e = a.sibling), (a.sibling = r), (r = a), (a = e)
          }
          jl(t, !0, r, null, c)
          break
        case 'together':
          jl(t, !1, null, null, void 0)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function ps(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
  }
  function $t(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (jn |= t.lanes),
      !(r & t.childLanes))
    )
      return null
    if (e !== null && t.child !== e.child) throw Error(s(153))
    if (t.child !== null) {
      for (
        e = t.child, r = hn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (r = r.sibling = hn(e, e.pendingProps)), (r.return = t)
      r.sibling = null
    }
    return t.child
  }
  function Fg(e, t, r) {
    switch (t.tag) {
      case 3:
        Mf(t), Jn()
        break
      case 5:
        Kc(t)
        break
      case 1:
        nt(t.type) && qi(t)
        break
      case 4:
        ol(t, t.stateNode.containerInfo)
        break
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value
        ge(ns, o._currentValue), (o._currentValue = a)
        break
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (ge(Te, Te.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Rf(e, t, r)
            : (ge(Te, Te.current & 1),
              (e = $t(e, t, r)),
              e !== null ? e.sibling : null)
        ge(Te, Te.current & 1)
        break
      case 19:
        if (((o = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (o) return Df(e, t, r)
          t.flags |= 128
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          ge(Te, Te.current),
          o)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), kf(e, t, r)
    }
    return $t(e, t, r)
  }
  var Lf, Ml, Vf, _f
  ;(Lf = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
      else if (r.tag !== 4 && r.child !== null) {
        ;(r.child.return = r), (r = r.child)
        continue
      }
      if (r === t) break
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return
        r = r.return
      }
      ;(r.sibling.return = r.return), (r = r.sibling)
    }
  }),
    (Ml = function () {}),
    (Vf = function (e, t, r, o) {
      var a = e.memoizedProps
      if (a !== o) {
        ;(e = t.stateNode), kn(Dt.current)
        var c = null
        switch (r) {
          case 'input':
            ;(a = no(e, a)), (o = no(e, o)), (c = [])
            break
          case 'select':
            ;(a = $({}, a, { value: void 0 })),
              (o = $({}, o, { value: void 0 })),
              (c = [])
            break
          case 'textarea':
            ;(a = so(e, a)), (o = so(e, o)), (c = [])
            break
          default:
            typeof a.onClick != 'function' &&
              typeof o.onClick == 'function' &&
              (e.onclick = Gi)
        }
        lo(r, o)
        var h
        r = null
        for (R in a)
          if (!o.hasOwnProperty(R) && a.hasOwnProperty(R) && a[R] != null)
            if (R === 'style') {
              var x = a[R]
              for (h in x) x.hasOwnProperty(h) && (r || (r = {}), (r[h] = ''))
            } else
              R !== 'dangerouslySetInnerHTML' &&
                R !== 'children' &&
                R !== 'suppressContentEditableWarning' &&
                R !== 'suppressHydrationWarning' &&
                R !== 'autoFocus' &&
                (u.hasOwnProperty(R)
                  ? c || (c = [])
                  : (c = c || []).push(R, null))
        for (R in o) {
          var S = o[R]
          if (
            ((x = a != null ? a[R] : void 0),
            o.hasOwnProperty(R) && S !== x && (S != null || x != null))
          )
            if (R === 'style')
              if (x) {
                for (h in x)
                  !x.hasOwnProperty(h) ||
                    (S && S.hasOwnProperty(h)) ||
                    (r || (r = {}), (r[h] = ''))
                for (h in S)
                  S.hasOwnProperty(h) &&
                    x[h] !== S[h] &&
                    (r || (r = {}), (r[h] = S[h]))
              } else r || (c || (c = []), c.push(R, r)), (r = S)
            else
              R === 'dangerouslySetInnerHTML'
                ? ((S = S ? S.__html : void 0),
                  (x = x ? x.__html : void 0),
                  S != null && x !== S && (c = c || []).push(R, S))
                : R === 'children'
                ? (typeof S != 'string' && typeof S != 'number') ||
                  (c = c || []).push(R, '' + S)
                : R !== 'suppressContentEditableWarning' &&
                  R !== 'suppressHydrationWarning' &&
                  (u.hasOwnProperty(R)
                    ? (S != null && R === 'onScroll' && ye('scroll', e),
                      c || x === S || (c = []))
                    : (c = c || []).push(R, S))
        }
        r && (c = c || []).push('style', r)
        var R = c
        ;(t.updateQueue = R) && (t.flags |= 4)
      }
    }),
    (_f = function (e, t, r, o) {
      r !== o && (t.flags |= 4)
    })
  function Jr(e, t) {
    if (!Pe)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling)
          r === null ? (e.tail = null) : (r.sibling = null)
          break
        case 'collapsed':
          r = e.tail
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling)
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null)
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags & 14680064),
          (o |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling)
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags),
          (o |= a.flags),
          (a.return = e),
          (a = a.sibling)
    return (e.subtreeFlags |= o), (e.childLanes = r), t
  }
  function zg(e, t, r) {
    var o = t.pendingProps
    switch ((qo(t), t.tag)) {
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
        return Xe(t), null
      case 1:
        return nt(t.type) && Qi(), Xe(t), null
      case 3:
        return (
          (o = t.stateNode),
          rr(),
          ve(tt),
          ve(Ye),
          ul(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (es(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Ct !== null && (zl(Ct), (Ct = null)))),
          Ml(e, t),
          Xe(t),
          null
        )
      case 5:
        ll(t)
        var a = kn(Xr.current)
        if (((r = t.type), e !== null && t.stateNode != null))
          Vf(e, t, r, o, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166))
            return Xe(t), null
          }
          if (((e = kn(Dt.current)), es(t))) {
            ;(o = t.stateNode), (r = t.type)
            var c = t.memoizedProps
            switch (((o[Nt] = t), (o[Hr] = c), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                ye('cancel', o), ye('close', o)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ye('load', o)
                break
              case 'video':
              case 'audio':
                for (a = 0; a < Br.length; a++) ye(Br[a], o)
                break
              case 'source':
                ye('error', o)
                break
              case 'img':
              case 'image':
              case 'link':
                ye('error', o), ye('load', o)
                break
              case 'details':
                ye('toggle', o)
                break
              case 'input':
                pu(o, c), ye('invalid', o)
                break
              case 'select':
                ;(o._wrapperState = { wasMultiple: !!c.multiple }),
                  ye('invalid', o)
                break
              case 'textarea':
                yu(o, c), ye('invalid', o)
            }
            lo(r, c), (a = null)
            for (var h in c)
              if (c.hasOwnProperty(h)) {
                var x = c[h]
                h === 'children'
                  ? typeof x == 'string'
                    ? o.textContent !== x &&
                      (c.suppressHydrationWarning !== !0 &&
                        Yi(o.textContent, x, e),
                      (a = ['children', x]))
                    : typeof x == 'number' &&
                      o.textContent !== '' + x &&
                      (c.suppressHydrationWarning !== !0 &&
                        Yi(o.textContent, x, e),
                      (a = ['children', '' + x]))
                  : u.hasOwnProperty(h) &&
                    x != null &&
                    h === 'onScroll' &&
                    ye('scroll', o)
              }
            switch (r) {
              case 'input':
                Ti(o), gu(o, c, !0)
                break
              case 'textarea':
                Ti(o), xu(o)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof c.onClick == 'function' && (o.onclick = Gi)
            }
            ;(o = a), (t.updateQueue = o), o !== null && (t.flags |= 4)
          } else {
            ;(h = a.nodeType === 9 ? a : a.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = wu(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = h.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == 'string'
                  ? (e = h.createElement(r, { is: o.is }))
                  : ((e = h.createElement(r)),
                    r === 'select' &&
                      ((h = e),
                      o.multiple
                        ? (h.multiple = !0)
                        : o.size && (h.size = o.size)))
                : (e = h.createElementNS(e, r)),
              (e[Nt] = t),
              (e[Hr] = o),
              Lf(e, t, !1, !1),
              (t.stateNode = e)
            e: {
              switch (((h = ao(r, o)), r)) {
                case 'dialog':
                  ye('cancel', e), ye('close', e), (a = o)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  ye('load', e), (a = o)
                  break
                case 'video':
                case 'audio':
                  for (a = 0; a < Br.length; a++) ye(Br[a], e)
                  a = o
                  break
                case 'source':
                  ye('error', e), (a = o)
                  break
                case 'img':
                case 'image':
                case 'link':
                  ye('error', e), ye('load', e), (a = o)
                  break
                case 'details':
                  ye('toggle', e), (a = o)
                  break
                case 'input':
                  pu(e, o), (a = no(e, o)), ye('invalid', e)
                  break
                case 'option':
                  a = o
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!o.multiple }),
                    (a = $({}, o, { value: void 0 })),
                    ye('invalid', e)
                  break
                case 'textarea':
                  yu(e, o), (a = so(e, o)), ye('invalid', e)
                  break
                default:
                  a = o
              }
              lo(r, a), (x = a)
              for (c in x)
                if (x.hasOwnProperty(c)) {
                  var S = x[c]
                  c === 'style'
                    ? Tu(e, S)
                    : c === 'dangerouslySetInnerHTML'
                    ? ((S = S ? S.__html : void 0), S != null && Su(e, S))
                    : c === 'children'
                    ? typeof S == 'string'
                      ? (r !== 'textarea' || S !== '') && Sr(e, S)
                      : typeof S == 'number' && Sr(e, '' + S)
                    : c !== 'suppressContentEditableWarning' &&
                      c !== 'suppressHydrationWarning' &&
                      c !== 'autoFocus' &&
                      (u.hasOwnProperty(c)
                        ? S != null && c === 'onScroll' && ye('scroll', e)
                        : S != null && B(e, c, S, h))
                }
              switch (r) {
                case 'input':
                  Ti(e), gu(e, o, !1)
                  break
                case 'textarea':
                  Ti(e), xu(e)
                  break
                case 'option':
                  o.value != null && e.setAttribute('value', '' + de(o.value))
                  break
                case 'select':
                  ;(e.multiple = !!o.multiple),
                    (c = o.value),
                    c != null
                      ? Fn(e, !!o.multiple, c, !1)
                      : o.defaultValue != null &&
                        Fn(e, !!o.multiple, o.defaultValue, !0)
                  break
                default:
                  typeof a.onClick == 'function' && (e.onclick = Gi)
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  o = !!o.autoFocus
                  break e
                case 'img':
                  o = !0
                  break e
                default:
                  o = !1
              }
            }
            o && (t.flags |= 4)
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
        }
        return Xe(t), null
      case 6:
        if (e && t.stateNode != null) _f(e, t, e.memoizedProps, o)
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(s(166))
          if (((r = kn(Xr.current)), kn(Dt.current), es(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Nt] = t),
              (c = o.nodeValue !== r) && ((e = ut), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Yi(o.nodeValue, r, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Yi(o.nodeValue, r, (e.mode & 1) !== 0)
              }
            c && (t.flags |= 4)
          } else
            (o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[Nt] = t),
              (t.stateNode = o)
        }
        return Xe(t), null
      case 13:
        if (
          (ve(Te),
          (o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Pe && ct !== null && t.mode & 1 && !(t.flags & 128))
            Ic(), Jn(), (t.flags |= 98560), (c = !1)
          else if (((c = es(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318))
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(s(317))
              c[Nt] = t
            } else
              Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
            Xe(t), (c = !1)
          } else Ct !== null && (zl(Ct), (Ct = null)), (c = !0)
          if (!c) return t.flags & 65536 ? t : null
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Te.current & 1 ? _e === 0 && (_e = 3) : Wl())),
            t.updateQueue !== null && (t.flags |= 4),
            Xe(t),
            null)
      case 4:
        return (
          rr(),
          Ml(e, t),
          e === null && Ur(t.stateNode.containerInfo),
          Xe(t),
          null
        )
      case 10:
        return nl(t.type._context), Xe(t), null
      case 17:
        return nt(t.type) && Qi(), Xe(t), null
      case 19:
        if ((ve(Te), (c = t.memoizedState), c === null)) return Xe(t), null
        if (((o = (t.flags & 128) !== 0), (h = c.rendering), h === null))
          if (o) Jr(c, !1)
          else {
            if (_e !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((h = os(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Jr(c, !1),
                      o = h.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = o),
                      (c.flags &= 14680066),
                      (h = c.alternate),
                      h === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = h.childLanes),
                          (c.lanes = h.lanes),
                          (c.child = h.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = h.memoizedProps),
                          (c.memoizedState = h.memoizedState),
                          (c.updateQueue = h.updateQueue),
                          (c.type = h.type),
                          (e = h.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling)
                  return ge(Te, (Te.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            c.tail !== null &&
              Me() > lr &&
              ((t.flags |= 128), (o = !0), Jr(c, !1), (t.lanes = 4194304))
          }
        else {
          if (!o)
            if (((e = os(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Jr(c, !0),
                c.tail === null &&
                  c.tailMode === 'hidden' &&
                  !h.alternate &&
                  !Pe)
              )
                return Xe(t), null
            } else
              2 * Me() - c.renderingStartTime > lr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Jr(c, !1), (t.lanes = 4194304))
          c.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((r = c.last),
              r !== null ? (r.sibling = h) : (t.child = h),
              (c.last = h))
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Me()),
            (t.sibling = null),
            (r = Te.current),
            ge(Te, o ? (r & 1) | 2 : r & 1),
            t)
          : (Xe(t), null)
      case 22:
      case 23:
        return (
          Ul(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && t.mode & 1
            ? ft & 1073741824 &&
              (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Xe(t),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(s(156, t.tag))
  }
  function Bg(e, t) {
    switch ((qo(t), t.tag)) {
      case 1:
        return (
          nt(t.type) && Qi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          rr(),
          ve(tt),
          ve(Ye),
          ul(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 5:
        return ll(t), null
      case 13:
        if (
          (ve(Te), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340))
          Jn()
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return ve(Te), null
      case 4:
        return rr(), null
      case 10:
        return nl(t.type._context), null
      case 22:
      case 23:
        return Ul(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var ms = !1,
    Qe = !1,
    Ug = typeof WeakSet == 'function' ? WeakSet : Set,
    K = null
  function sr(e, t) {
    var r = e.ref
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null)
        } catch (o) {
          Ee(e, t, o)
        }
      else r.current = null
  }
  function Al(e, t, r) {
    try {
      r()
    } catch (o) {
      Ee(e, t, o)
    }
  }
  var Of = !1
  function Wg(e, t) {
    if (((Uo = _i), (e = hc()), Lo(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window
          var o = r.getSelection && r.getSelection()
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode
            var a = o.anchorOffset,
              c = o.focusNode
            o = o.focusOffset
            try {
              r.nodeType, c.nodeType
            } catch {
              r = null
              break e
            }
            var h = 0,
              x = -1,
              S = -1,
              R = 0,
              _ = 0,
              O = e,
              L = null
            t: for (;;) {
              for (
                var H;
                O !== r || (a !== 0 && O.nodeType !== 3) || (x = h + a),
                  O !== c || (o !== 0 && O.nodeType !== 3) || (S = h + o),
                  O.nodeType === 3 && (h += O.nodeValue.length),
                  (H = O.firstChild) !== null;

              )
                (L = O), (O = H)
              for (;;) {
                if (O === e) break t
                if (
                  (L === r && ++R === a && (x = h),
                  L === c && ++_ === o && (S = h),
                  (H = O.nextSibling) !== null)
                )
                  break
                ;(O = L), (L = O.parentNode)
              }
              O = H
            }
            r = x === -1 || S === -1 ? null : { start: x, end: S }
          } else r = null
        }
      r = r || { start: 0, end: 0 }
    } else r = null
    for (
      Wo = { focusedElem: e, selectionRange: r }, _i = !1, K = t;
      K !== null;

    )
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (K = e)
      else
        for (; K !== null; ) {
          t = K
          try {
            var Y = t.alternate
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (Y !== null) {
                    var X = Y.memoizedProps,
                      Ae = Y.memoizedState,
                      j = t.stateNode,
                      T = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? X : kt(t.type, X),
                        Ae
                      )
                    j.__reactInternalSnapshotBeforeUpdate = T
                  }
                  break
                case 3:
                  var M = t.stateNode.containerInfo
                  M.nodeType === 1
                    ? (M.textContent = '')
                    : M.nodeType === 9 &&
                      M.documentElement &&
                      M.removeChild(M.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(s(163))
              }
          } catch (I) {
            Ee(t, t.return, I)
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (K = e)
            break
          }
          K = t.return
        }
    return (Y = Of), (Of = !1), Y
  }
  function ei(e, t, r) {
    var o = t.updateQueue
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next)
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy
          ;(a.destroy = void 0), c !== void 0 && Al(t, r, c)
        }
        a = a.next
      } while (a !== o)
    }
  }
  function gs(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next)
      do {
        if ((r.tag & e) === e) {
          var o = r.create
          r.destroy = o()
        }
        r = r.next
      } while (r !== t)
    }
  }
  function Rl(e) {
    var t = e.ref
    if (t !== null) {
      var r = e.stateNode
      switch (e.tag) {
        case 5:
          e = r
          break
        default:
          e = r
      }
      typeof t == 'function' ? t(e) : (t.current = e)
    }
  }
  function If(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), If(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Nt],
          delete t[Hr],
          delete t[Yo],
          delete t[Cg],
          delete t[kg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  function Ff(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function zf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ff(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function Nl(e, t, r) {
    var o = e.tag
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Gi))
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Nl(e, t, r), e = e.sibling; e !== null; )
        Nl(e, t, r), (e = e.sibling)
  }
  function Dl(e, t, r) {
    var o = e.tag
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Dl(e, t, r), e = e.sibling; e !== null; )
        Dl(e, t, r), (e = e.sibling)
  }
  var We = null,
    Et = !1
  function an(e, t, r) {
    for (r = r.child; r !== null; ) Bf(e, t, r), (r = r.sibling)
  }
  function Bf(e, t, r) {
    if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
      try {
        Rt.onCommitFiberUnmount(Ai, r)
      } catch {}
    switch (r.tag) {
      case 5:
        Qe || sr(r, t)
      case 6:
        var o = We,
          a = Et
        ;(We = null),
          an(e, t, r),
          (We = o),
          (Et = a),
          We !== null &&
            (Et
              ? ((e = We),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : We.removeChild(r.stateNode))
        break
      case 18:
        We !== null &&
          (Et
            ? ((e = We),
              (r = r.stateNode),
              e.nodeType === 8
                ? Ko(e.parentNode, r)
                : e.nodeType === 1 && Ko(e, r),
              Dr(e))
            : Ko(We, r.stateNode))
        break
      case 4:
        ;(o = We),
          (a = Et),
          (We = r.stateNode.containerInfo),
          (Et = !0),
          an(e, t, r),
          (We = o),
          (Et = a)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Qe &&
          ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          a = o = o.next
          do {
            var c = a,
              h = c.destroy
            ;(c = c.tag),
              h !== void 0 && (c & 2 || c & 4) && Al(r, t, h),
              (a = a.next)
          } while (a !== o)
        }
        an(e, t, r)
        break
      case 1:
        if (
          !Qe &&
          (sr(r, t),
          (o = r.stateNode),
          typeof o.componentWillUnmount == 'function')
        )
          try {
            ;(o.props = r.memoizedProps),
              (o.state = r.memoizedState),
              o.componentWillUnmount()
          } catch (x) {
            Ee(r, t, x)
          }
        an(e, t, r)
        break
      case 21:
        an(e, t, r)
        break
      case 22:
        r.mode & 1
          ? ((Qe = (o = Qe) || r.memoizedState !== null), an(e, t, r), (Qe = o))
          : an(e, t, r)
        break
      default:
        an(e, t, r)
    }
  }
  function Uf(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var r = e.stateNode
      r === null && (r = e.stateNode = new Ug()),
        t.forEach(function (o) {
          var a = Zg.bind(null, e, o)
          r.has(o) || (r.add(o), o.then(a, a))
        })
    }
  }
  function jt(e, t) {
    var r = t.deletions
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var a = r[o]
        try {
          var c = e,
            h = t,
            x = h
          e: for (; x !== null; ) {
            switch (x.tag) {
              case 5:
                ;(We = x.stateNode), (Et = !1)
                break e
              case 3:
                ;(We = x.stateNode.containerInfo), (Et = !0)
                break e
              case 4:
                ;(We = x.stateNode.containerInfo), (Et = !0)
                break e
            }
            x = x.return
          }
          if (We === null) throw Error(s(160))
          Bf(c, h, a), (We = null), (Et = !1)
          var S = a.alternate
          S !== null && (S.return = null), (a.return = null)
        } catch (R) {
          Ee(a, t, R)
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Wf(t, e), (t = t.sibling)
  }
  function Wf(e, t) {
    var r = e.alternate,
      o = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((jt(t, e), Vt(e), o & 4)) {
          try {
            ei(3, e, e.return), gs(3, e)
          } catch (X) {
            Ee(e, e.return, X)
          }
          try {
            ei(5, e, e.return)
          } catch (X) {
            Ee(e, e.return, X)
          }
        }
        break
      case 1:
        jt(t, e), Vt(e), o & 512 && r !== null && sr(r, r.return)
        break
      case 5:
        if (
          (jt(t, e),
          Vt(e),
          o & 512 && r !== null && sr(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode
          try {
            Sr(a, '')
          } catch (X) {
            Ee(e, e.return, X)
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var c = e.memoizedProps,
            h = r !== null ? r.memoizedProps : c,
            x = e.type,
            S = e.updateQueue
          if (((e.updateQueue = null), S !== null))
            try {
              x === 'input' && c.type === 'radio' && c.name != null && mu(a, c),
                ao(x, h)
              var R = ao(x, c)
              for (h = 0; h < S.length; h += 2) {
                var _ = S[h],
                  O = S[h + 1]
                _ === 'style'
                  ? Tu(a, O)
                  : _ === 'dangerouslySetInnerHTML'
                  ? Su(a, O)
                  : _ === 'children'
                  ? Sr(a, O)
                  : B(a, _, O, R)
              }
              switch (x) {
                case 'input':
                  ro(a, c)
                  break
                case 'textarea':
                  vu(a, c)
                  break
                case 'select':
                  var L = a._wrapperState.wasMultiple
                  a._wrapperState.wasMultiple = !!c.multiple
                  var H = c.value
                  H != null
                    ? Fn(a, !!c.multiple, H, !1)
                    : L !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Fn(a, !!c.multiple, c.defaultValue, !0)
                        : Fn(a, !!c.multiple, c.multiple ? [] : '', !1))
              }
              a[Hr] = c
            } catch (X) {
              Ee(e, e.return, X)
            }
        }
        break
      case 6:
        if ((jt(t, e), Vt(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162))
          ;(a = e.stateNode), (c = e.memoizedProps)
          try {
            a.nodeValue = c
          } catch (X) {
            Ee(e, e.return, X)
          }
        }
        break
      case 3:
        if (
          (jt(t, e), Vt(e), o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Dr(t.containerInfo)
          } catch (X) {
            Ee(e, e.return, X)
          }
        break
      case 4:
        jt(t, e), Vt(e)
        break
      case 13:
        jt(t, e),
          Vt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((c = a.memoizedState !== null),
            (a.stateNode.isHidden = c),
            !c ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (_l = Me())),
          o & 4 && Uf(e)
        break
      case 22:
        if (
          ((_ = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Qe = (R = Qe) || _), jt(t, e), (Qe = R)) : jt(t, e),
          Vt(e),
          o & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null),
            (e.stateNode.isHidden = R) && !_ && e.mode & 1)
          )
            for (K = e, _ = e.child; _ !== null; ) {
              for (O = K = _; K !== null; ) {
                switch (((L = K), (H = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ei(4, L, L.return)
                    break
                  case 1:
                    sr(L, L.return)
                    var Y = L.stateNode
                    if (typeof Y.componentWillUnmount == 'function') {
                      ;(o = L), (r = L.return)
                      try {
                        ;(t = o),
                          (Y.props = t.memoizedProps),
                          (Y.state = t.memoizedState),
                          Y.componentWillUnmount()
                      } catch (X) {
                        Ee(o, r, X)
                      }
                    }
                    break
                  case 5:
                    sr(L, L.return)
                    break
                  case 22:
                    if (L.memoizedState !== null) {
                      Kf(O)
                      continue
                    }
                }
                H !== null ? ((H.return = L), (K = H)) : Kf(O)
              }
              _ = _.sibling
            }
          e: for (_ = null, O = e; ; ) {
            if (O.tag === 5) {
              if (_ === null) {
                _ = O
                try {
                  ;(a = O.stateNode),
                    R
                      ? ((c = a.style),
                        typeof c.setProperty == 'function'
                          ? c.setProperty('display', 'none', 'important')
                          : (c.display = 'none'))
                      : ((x = O.stateNode),
                        (S = O.memoizedProps.style),
                        (h =
                          S != null && S.hasOwnProperty('display')
                            ? S.display
                            : null),
                        (x.style.display = Pu('display', h)))
                } catch (X) {
                  Ee(e, e.return, X)
                }
              }
            } else if (O.tag === 6) {
              if (_ === null)
                try {
                  O.stateNode.nodeValue = R ? '' : O.memoizedProps
                } catch (X) {
                  Ee(e, e.return, X)
                }
            } else if (
              ((O.tag !== 22 && O.tag !== 23) ||
                O.memoizedState === null ||
                O === e) &&
              O.child !== null
            ) {
              ;(O.child.return = O), (O = O.child)
              continue
            }
            if (O === e) break e
            for (; O.sibling === null; ) {
              if (O.return === null || O.return === e) break e
              _ === O && (_ = null), (O = O.return)
            }
            _ === O && (_ = null),
              (O.sibling.return = O.return),
              (O = O.sibling)
          }
        }
        break
      case 19:
        jt(t, e), Vt(e), o & 4 && Uf(e)
        break
      case 21:
        break
      default:
        jt(t, e), Vt(e)
    }
  }
  function Vt(e) {
    var t = e.flags
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Ff(r)) {
              var o = r
              break e
            }
            r = r.return
          }
          throw Error(s(160))
        }
        switch (o.tag) {
          case 5:
            var a = o.stateNode
            o.flags & 32 && (Sr(a, ''), (o.flags &= -33))
            var c = zf(e)
            Dl(e, c, a)
            break
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              x = zf(e)
            Nl(e, x, h)
            break
          default:
            throw Error(s(161))
        }
      } catch (S) {
        Ee(e, e.return, S)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function Hg(e, t, r) {
    ;(K = e), Hf(e)
  }
  function Hf(e, t, r) {
    for (var o = (e.mode & 1) !== 0; K !== null; ) {
      var a = K,
        c = a.child
      if (a.tag === 22 && o) {
        var h = a.memoizedState !== null || ms
        if (!h) {
          var x = a.alternate,
            S = (x !== null && x.memoizedState !== null) || Qe
          x = ms
          var R = Qe
          if (((ms = h), (Qe = S) && !R))
            for (K = a; K !== null; )
              (h = K),
                (S = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? Yf(a)
                  : S !== null
                  ? ((S.return = h), (K = S))
                  : Yf(a)
          for (; c !== null; ) (K = c), Hf(c), (c = c.sibling)
          ;(K = a), (ms = x), (Qe = R)
        }
        $f(e)
      } else
        a.subtreeFlags & 8772 && c !== null ? ((c.return = a), (K = c)) : $f(e)
    }
  }
  function $f(e) {
    for (; K !== null; ) {
      var t = K
      if (t.flags & 8772) {
        var r = t.alternate
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Qe || gs(5, t)
                break
              case 1:
                var o = t.stateNode
                if (t.flags & 4 && !Qe)
                  if (r === null) o.componentDidMount()
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : kt(t.type, r.memoizedProps)
                    o.componentDidUpdate(
                      a,
                      r.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate
                    )
                  }
                var c = t.updateQueue
                c !== null && $c(t, c, o)
                break
              case 3:
                var h = t.updateQueue
                if (h !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode
                        break
                      case 1:
                        r = t.child.stateNode
                    }
                  $c(t, h, r)
                }
                break
              case 5:
                var x = t.stateNode
                if (r === null && t.flags & 4) {
                  r = x
                  var S = t.memoizedProps
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      S.autoFocus && r.focus()
                      break
                    case 'img':
                      S.src && (r.src = S.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (t.memoizedState === null) {
                  var R = t.alternate
                  if (R !== null) {
                    var _ = R.memoizedState
                    if (_ !== null) {
                      var O = _.dehydrated
                      O !== null && Dr(O)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(s(163))
            }
          Qe || (t.flags & 512 && Rl(t))
        } catch (L) {
          Ee(t, t.return, L)
        }
      }
      if (t === e) {
        K = null
        break
      }
      if (((r = t.sibling), r !== null)) {
        ;(r.return = t.return), (K = r)
        break
      }
      K = t.return
    }
  }
  function Kf(e) {
    for (; K !== null; ) {
      var t = K
      if (t === e) {
        K = null
        break
      }
      var r = t.sibling
      if (r !== null) {
        ;(r.return = t.return), (K = r)
        break
      }
      K = t.return
    }
  }
  function Yf(e) {
    for (; K !== null; ) {
      var t = K
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return
            try {
              gs(4, t)
            } catch (S) {
              Ee(t, r, S)
            }
            break
          case 1:
            var o = t.stateNode
            if (typeof o.componentDidMount == 'function') {
              var a = t.return
              try {
                o.componentDidMount()
              } catch (S) {
                Ee(t, a, S)
              }
            }
            var c = t.return
            try {
              Rl(t)
            } catch (S) {
              Ee(t, c, S)
            }
            break
          case 5:
            var h = t.return
            try {
              Rl(t)
            } catch (S) {
              Ee(t, h, S)
            }
        }
      } catch (S) {
        Ee(t, t.return, S)
      }
      if (t === e) {
        K = null
        break
      }
      var x = t.sibling
      if (x !== null) {
        ;(x.return = t.return), (K = x)
        break
      }
      K = t.return
    }
  }
  var $g = Math.ceil,
    ys = G.ReactCurrentDispatcher,
    Ll = G.ReactCurrentOwner,
    vt = G.ReactCurrentBatchConfig,
    ae = 0,
    ze = null,
    Ne = null,
    He = 0,
    ft = 0,
    or = nn(0),
    _e = 0,
    ti = null,
    jn = 0,
    vs = 0,
    Vl = 0,
    ni = null,
    it = null,
    _l = 0,
    lr = 1 / 0,
    Kt = null,
    xs = !1,
    Ol = null,
    un = null,
    ws = !1,
    cn = null,
    Ss = 0,
    ri = 0,
    Il = null,
    Ps = -1,
    Ts = 0
  function Je() {
    return ae & 6 ? Me() : Ps !== -1 ? Ps : (Ps = Me())
  }
  function fn(e) {
    return e.mode & 1
      ? ae & 2 && He !== 0
        ? He & -He
        : jg.transition !== null
        ? (Ts === 0 && (Ts = Fu()), Ts)
        : ((e = he),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gu(e.type))),
          e)
      : 1
  }
  function Mt(e, t, r, o) {
    if (50 < ri) throw ((ri = 0), (Il = null), Error(s(185)))
    jr(e, r, o),
      (!(ae & 2) || e !== ze) &&
        (e === ze && (!(ae & 2) && (vs |= r), _e === 4 && dn(e, He)),
        st(e, o),
        r === 1 && ae === 0 && !(t.mode & 1) && ((lr = Me() + 500), Zi && sn()))
  }
  function st(e, t) {
    var r = e.callbackNode
    jm(e, t)
    var o = Di(e, e === ze ? He : 0)
    if (o === 0)
      r !== null && _u(r), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && _u(r), t === 1))
        e.tag === 0 ? Eg(Xf.bind(null, e)) : Dc(Xf.bind(null, e)),
          Pg(function () {
            !(ae & 6) && sn()
          }),
          (r = null)
      else {
        switch (zu(o)) {
          case 1:
            r = go
            break
          case 4:
            r = Ou
            break
          case 16:
            r = Mi
            break
          case 536870912:
            r = Iu
            break
          default:
            r = Mi
        }
        r = nd(r, Gf.bind(null, e))
      }
      ;(e.callbackPriority = t), (e.callbackNode = r)
    }
  }
  function Gf(e, t) {
    if (((Ps = -1), (Ts = 0), ae & 6)) throw Error(s(327))
    var r = e.callbackNode
    if (ar() && e.callbackNode !== r) return null
    var o = Di(e, e === ze ? He : 0)
    if (o === 0) return null
    if (o & 30 || o & e.expiredLanes || t) t = Cs(e, o)
    else {
      t = o
      var a = ae
      ae |= 2
      var c = qf()
      ;(ze !== e || He !== t) && ((Kt = null), (lr = Me() + 500), An(e, t))
      do
        try {
          Gg()
          break
        } catch (x) {
          Qf(e, x)
        }
      while (!0)
      tl(),
        (ys.current = c),
        (ae = a),
        Ne !== null ? (t = 0) : ((ze = null), (He = 0), (t = _e))
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = yo(e)), a !== 0 && ((o = a), (t = Fl(e, a)))),
        t === 1)
      )
        throw ((r = ti), An(e, 0), dn(e, o), st(e, Me()), r)
      if (t === 6) dn(e, o)
      else {
        if (
          ((a = e.current.alternate),
          !(o & 30) &&
            !Kg(a) &&
            ((t = Cs(e, o)),
            t === 2 && ((c = yo(e)), c !== 0 && ((o = c), (t = Fl(e, c)))),
            t === 1))
        )
          throw ((r = ti), An(e, 0), dn(e, o), st(e, Me()), r)
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345))
          case 2:
            Rn(e, it, Kt)
            break
          case 3:
            if (
              (dn(e, o),
              (o & 130023424) === o && ((t = _l + 500 - Me()), 10 < t))
            ) {
              if (Di(e, 0) !== 0) break
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                Je(), (e.pingedLanes |= e.suspendedLanes & a)
                break
              }
              e.timeoutHandle = $o(Rn.bind(null, e, it, Kt), t)
              break
            }
            Rn(e, it, Kt)
            break
          case 4:
            if ((dn(e, o), (o & 4194240) === o)) break
            for (t = e.eventTimes, a = -1; 0 < o; ) {
              var h = 31 - Pt(o)
              ;(c = 1 << h), (h = t[h]), h > a && (a = h), (o &= ~c)
            }
            if (
              ((o = a),
              (o = Me() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                  ? 480
                  : 1080 > o
                  ? 1080
                  : 1920 > o
                  ? 1920
                  : 3e3 > o
                  ? 3e3
                  : 4320 > o
                  ? 4320
                  : 1960 * $g(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = $o(Rn.bind(null, e, it, Kt), o)
              break
            }
            Rn(e, it, Kt)
            break
          case 5:
            Rn(e, it, Kt)
            break
          default:
            throw Error(s(329))
        }
      }
    }
    return st(e, Me()), e.callbackNode === r ? Gf.bind(null, e) : null
  }
  function Fl(e, t) {
    var r = ni
    return (
      e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
      (e = Cs(e, t)),
      e !== 2 && ((t = it), (it = r), t !== null && zl(t)),
      e
    )
  }
  function zl(e) {
    it === null ? (it = e) : it.push.apply(it, e)
  }
  function Kg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              c = a.getSnapshot
            a = a.value
            try {
              if (!Tt(c(), a)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function dn(e, t) {
    for (
      t &= ~Vl,
        t &= ~vs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Pt(t),
        o = 1 << r
      ;(e[r] = -1), (t &= ~o)
    }
  }
  function Xf(e) {
    if (ae & 6) throw Error(s(327))
    ar()
    var t = Di(e, 0)
    if (!(t & 1)) return st(e, Me()), null
    var r = Cs(e, t)
    if (e.tag !== 0 && r === 2) {
      var o = yo(e)
      o !== 0 && ((t = o), (r = Fl(e, o)))
    }
    if (r === 1) throw ((r = ti), An(e, 0), dn(e, t), st(e, Me()), r)
    if (r === 6) throw Error(s(345))
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Rn(e, it, Kt),
      st(e, Me()),
      null
    )
  }
  function Bl(e, t) {
    var r = ae
    ae |= 1
    try {
      return e(t)
    } finally {
      ;(ae = r), ae === 0 && ((lr = Me() + 500), Zi && sn())
    }
  }
  function Mn(e) {
    cn !== null && cn.tag === 0 && !(ae & 6) && ar()
    var t = ae
    ae |= 1
    var r = vt.transition,
      o = he
    try {
      if (((vt.transition = null), (he = 1), e)) return e()
    } finally {
      ;(he = o), (vt.transition = r), (ae = t), !(ae & 6) && sn()
    }
  }
  function Ul() {
    ;(ft = or.current), ve(or)
  }
  function An(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var r = e.timeoutHandle
    if ((r !== -1 && ((e.timeoutHandle = -1), Sg(r)), Ne !== null))
      for (r = Ne.return; r !== null; ) {
        var o = r
        switch ((qo(o), o.tag)) {
          case 1:
            ;(o = o.type.childContextTypes), o != null && Qi()
            break
          case 3:
            rr(), ve(tt), ve(Ye), ul()
            break
          case 5:
            ll(o)
            break
          case 4:
            rr()
            break
          case 13:
            ve(Te)
            break
          case 19:
            ve(Te)
            break
          case 10:
            nl(o.type._context)
            break
          case 22:
          case 23:
            Ul()
        }
        r = r.return
      }
    if (
      ((ze = e),
      (Ne = e = hn(e.current, null)),
      (He = ft = t),
      (_e = 0),
      (ti = null),
      (Vl = vs = jn = 0),
      (it = ni = null),
      Cn !== null)
    ) {
      for (t = 0; t < Cn.length; t++)
        if (((r = Cn[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null
          var a = o.next,
            c = r.pending
          if (c !== null) {
            var h = c.next
            ;(c.next = a), (o.next = h)
          }
          r.pending = o
        }
      Cn = null
    }
    return e
  }
  function Qf(e, t) {
    do {
      var r = Ne
      try {
        if ((tl(), (ls.current = fs), as)) {
          for (var o = Ce.memoizedState; o !== null; ) {
            var a = o.queue
            a !== null && (a.pending = null), (o = o.next)
          }
          as = !1
        }
        if (
          ((En = 0),
          (Fe = Ve = Ce = null),
          (Qr = !1),
          (qr = 0),
          (Ll.current = null),
          r === null || r.return === null)
        ) {
          ;(_e = 1), (ti = t), (Ne = null)
          break
        }
        e: {
          var c = e,
            h = r.return,
            x = r,
            S = t
          if (
            ((t = He),
            (x.flags |= 32768),
            S !== null && typeof S == 'object' && typeof S.then == 'function')
          ) {
            var R = S,
              _ = x,
              O = _.tag
            if (!(_.mode & 1) && (O === 0 || O === 11 || O === 15)) {
              var L = _.alternate
              L
                ? ((_.updateQueue = L.updateQueue),
                  (_.memoizedState = L.memoizedState),
                  (_.lanes = L.lanes))
                : ((_.updateQueue = null), (_.memoizedState = null))
            }
            var H = wf(h)
            if (H !== null) {
              ;(H.flags &= -257),
                Sf(H, h, x, c, t),
                H.mode & 1 && xf(c, R, t),
                (t = H),
                (S = R)
              var Y = t.updateQueue
              if (Y === null) {
                var X = new Set()
                X.add(S), (t.updateQueue = X)
              } else Y.add(S)
              break e
            } else {
              if (!(t & 1)) {
                xf(c, R, t), Wl()
                break e
              }
              S = Error(s(426))
            }
          } else if (Pe && x.mode & 1) {
            var Ae = wf(h)
            if (Ae !== null) {
              !(Ae.flags & 65536) && (Ae.flags |= 256),
                Sf(Ae, h, x, c, t),
                Jo(ir(S, x))
              break e
            }
          }
          ;(c = S = ir(S, x)),
            _e !== 4 && (_e = 2),
            ni === null ? (ni = [c]) : ni.push(c),
            (c = h)
          do {
            switch (c.tag) {
              case 3:
                ;(c.flags |= 65536), (t &= -t), (c.lanes |= t)
                var j = yf(c, S, t)
                Hc(c, j)
                break e
              case 1:
                x = S
                var T = c.type,
                  M = c.stateNode
                if (
                  !(c.flags & 128) &&
                  (typeof T.getDerivedStateFromError == 'function' ||
                    (M !== null &&
                      typeof M.componentDidCatch == 'function' &&
                      (un === null || !un.has(M))))
                ) {
                  ;(c.flags |= 65536), (t &= -t), (c.lanes |= t)
                  var I = vf(c, x, t)
                  Hc(c, I)
                  break e
                }
            }
            c = c.return
          } while (c !== null)
        }
        bf(r)
      } catch (Q) {
        ;(t = Q), Ne === r && r !== null && (Ne = r = r.return)
        continue
      }
      break
    } while (!0)
  }
  function qf() {
    var e = ys.current
    return (ys.current = fs), e === null ? fs : e
  }
  function Wl() {
    ;(_e === 0 || _e === 3 || _e === 2) && (_e = 4),
      ze === null || (!(jn & 268435455) && !(vs & 268435455)) || dn(ze, He)
  }
  function Cs(e, t) {
    var r = ae
    ae |= 2
    var o = qf()
    ;(ze !== e || He !== t) && ((Kt = null), An(e, t))
    do
      try {
        Yg()
        break
      } catch (a) {
        Qf(e, a)
      }
    while (!0)
    if ((tl(), (ae = r), (ys.current = o), Ne !== null)) throw Error(s(261))
    return (ze = null), (He = 0), _e
  }
  function Yg() {
    for (; Ne !== null; ) Zf(Ne)
  }
  function Gg() {
    for (; Ne !== null && !vm(); ) Zf(Ne)
  }
  function Zf(e) {
    var t = td(e.alternate, e, ft)
    ;(e.memoizedProps = e.pendingProps),
      t === null ? bf(e) : (Ne = t),
      (Ll.current = null)
  }
  function bf(e) {
    var t = e
    do {
      var r = t.alternate
      if (((e = t.return), t.flags & 32768)) {
        if (((r = Bg(r, t)), r !== null)) {
          ;(r.flags &= 32767), (Ne = r)
          return
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        else {
          ;(_e = 6), (Ne = null)
          return
        }
      } else if (((r = zg(r, t, ft)), r !== null)) {
        Ne = r
        return
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t
        return
      }
      Ne = t = e
    } while (t !== null)
    _e === 0 && (_e = 5)
  }
  function Rn(e, t, r) {
    var o = he,
      a = vt.transition
    try {
      ;(vt.transition = null), (he = 1), Xg(e, t, r, o)
    } finally {
      ;(vt.transition = a), (he = o)
    }
    return null
  }
  function Xg(e, t, r, o) {
    do ar()
    while (cn !== null)
    if (ae & 6) throw Error(s(327))
    r = e.finishedWork
    var a = e.finishedLanes
    if (r === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(s(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var c = r.lanes | r.childLanes
    if (
      (Mm(e, c),
      e === ze && ((Ne = ze = null), (He = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        ws ||
        ((ws = !0),
        nd(Mi, function () {
          return ar(), null
        })),
      (c = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || c)
    ) {
      ;(c = vt.transition), (vt.transition = null)
      var h = he
      he = 1
      var x = ae
      ;(ae |= 4),
        (Ll.current = null),
        Wg(e, r),
        Wf(r, e),
        pg(Wo),
        (_i = !!Uo),
        (Wo = Uo = null),
        (e.current = r),
        Hg(r),
        xm(),
        (ae = x),
        (he = h),
        (vt.transition = c)
    } else e.current = r
    if (
      (ws && ((ws = !1), (cn = e), (Ss = a)),
      (c = e.pendingLanes),
      c === 0 && (un = null),
      Pm(r.stateNode),
      st(e, Me()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), o(a.value, { componentStack: a.stack, digest: a.digest })
    if (xs) throw ((xs = !1), (e = Ol), (Ol = null), e)
    return (
      Ss & 1 && e.tag !== 0 && ar(),
      (c = e.pendingLanes),
      c & 1 ? (e === Il ? ri++ : ((ri = 0), (Il = e))) : (ri = 0),
      sn(),
      null
    )
  }
  function ar() {
    if (cn !== null) {
      var e = zu(Ss),
        t = vt.transition,
        r = he
      try {
        if (((vt.transition = null), (he = 16 > e ? 16 : e), cn === null))
          var o = !1
        else {
          if (((e = cn), (cn = null), (Ss = 0), ae & 6)) throw Error(s(331))
          var a = ae
          for (ae |= 4, K = e.current; K !== null; ) {
            var c = K,
              h = c.child
            if (K.flags & 16) {
              var x = c.deletions
              if (x !== null) {
                for (var S = 0; S < x.length; S++) {
                  var R = x[S]
                  for (K = R; K !== null; ) {
                    var _ = K
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ei(8, _, c)
                    }
                    var O = _.child
                    if (O !== null) (O.return = _), (K = O)
                    else
                      for (; K !== null; ) {
                        _ = K
                        var L = _.sibling,
                          H = _.return
                        if ((If(_), _ === R)) {
                          K = null
                          break
                        }
                        if (L !== null) {
                          ;(L.return = H), (K = L)
                          break
                        }
                        K = H
                      }
                  }
                }
                var Y = c.alternate
                if (Y !== null) {
                  var X = Y.child
                  if (X !== null) {
                    Y.child = null
                    do {
                      var Ae = X.sibling
                      ;(X.sibling = null), (X = Ae)
                    } while (X !== null)
                  }
                }
                K = c
              }
            }
            if (c.subtreeFlags & 2064 && h !== null) (h.return = c), (K = h)
            else
              e: for (; K !== null; ) {
                if (((c = K), c.flags & 2048))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(9, c, c.return)
                  }
                var j = c.sibling
                if (j !== null) {
                  ;(j.return = c.return), (K = j)
                  break e
                }
                K = c.return
              }
          }
          var T = e.current
          for (K = T; K !== null; ) {
            h = K
            var M = h.child
            if (h.subtreeFlags & 2064 && M !== null) (M.return = h), (K = M)
            else
              e: for (h = T; K !== null; ) {
                if (((x = K), x.flags & 2048))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gs(9, x)
                    }
                  } catch (Q) {
                    Ee(x, x.return, Q)
                  }
                if (x === h) {
                  K = null
                  break e
                }
                var I = x.sibling
                if (I !== null) {
                  ;(I.return = x.return), (K = I)
                  break e
                }
                K = x.return
              }
          }
          if (
            ((ae = a),
            sn(),
            Rt && typeof Rt.onPostCommitFiberRoot == 'function')
          )
            try {
              Rt.onPostCommitFiberRoot(Ai, e)
            } catch {}
          o = !0
        }
        return o
      } finally {
        ;(he = r), (vt.transition = t)
      }
    }
    return !1
  }
  function Jf(e, t, r) {
    ;(t = ir(r, t)),
      (t = yf(e, t, 1)),
      (e = ln(e, t, 1)),
      (t = Je()),
      e !== null && (jr(e, 1, t), st(e, t))
  }
  function Ee(e, t, r) {
    if (e.tag === 3) Jf(e, e, r)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jf(t, e, r)
          break
        } else if (t.tag === 1) {
          var o = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' &&
              (un === null || !un.has(o)))
          ) {
            ;(e = ir(r, e)),
              (e = vf(t, e, 1)),
              (t = ln(t, e, 1)),
              (e = Je()),
              t !== null && (jr(t, 1, e), st(t, e))
            break
          }
        }
        t = t.return
      }
  }
  function Qg(e, t, r) {
    var o = e.pingCache
    o !== null && o.delete(t),
      (t = Je()),
      (e.pingedLanes |= e.suspendedLanes & r),
      ze === e &&
        (He & r) === r &&
        (_e === 4 || (_e === 3 && (He & 130023424) === He && 500 > Me() - _l)
          ? An(e, 0)
          : (Vl |= r)),
      st(e, t)
  }
  function ed(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Ni), (Ni <<= 1), !(Ni & 130023424) && (Ni = 4194304))
        : (t = 1))
    var r = Je()
    ;(e = Wt(e, t)), e !== null && (jr(e, t, r), st(e, r))
  }
  function qg(e) {
    var t = e.memoizedState,
      r = 0
    t !== null && (r = t.retryLane), ed(e, r)
  }
  function Zg(e, t) {
    var r = 0
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          a = e.memoizedState
        a !== null && (r = a.retryLane)
        break
      case 19:
        o = e.stateNode
        break
      default:
        throw Error(s(314))
    }
    o !== null && o.delete(t), ed(e, r)
  }
  var td
  td = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || tt.current) rt = !0
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (rt = !1), Fg(e, t, r)
        rt = !!(e.flags & 131072)
      }
    else (rt = !1), Pe && t.flags & 1048576 && Lc(t, Ji, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type
        ps(e, t), (e = t.pendingProps)
        var a = qn(t, Ye.current)
        nr(t, r), (a = dl(null, t, o, e, a, r))
        var c = hl()
        return (
          (t.flags |= 1),
          typeof a == 'object' &&
          a !== null &&
          typeof a.render == 'function' &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              nt(o) ? ((c = !0), qi(t)) : (c = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              sl(t),
              (a.updater = ds),
              (t.stateNode = a),
              (a._reactInternals = t),
              xl(t, o, e, r),
              (t = Tl(null, t, o, !0, c, r)))
            : ((t.tag = 0), Pe && c && Qo(t), be(null, t, a, r), (t = t.child)),
          t
        )
      case 16:
        o = t.elementType
        e: {
          switch (
            (ps(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = Jg(o)),
            (e = kt(o, e)),
            a)
          ) {
            case 0:
              t = Pl(null, t, o, e, r)
              break e
            case 1:
              t = jf(null, t, o, e, r)
              break e
            case 11:
              t = Pf(null, t, o, e, r)
              break e
            case 14:
              t = Tf(null, t, o, kt(o.type, e), r)
              break e
          }
          throw Error(s(306, o, ''))
        }
        return t
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : kt(o, a)),
          Pl(e, t, o, a, r)
        )
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : kt(o, a)),
          jf(e, t, o, a, r)
        )
      case 3:
        e: {
          if ((Mf(t), e === null)) throw Error(s(387))
          ;(o = t.pendingProps),
            (c = t.memoizedState),
            (a = c.element),
            Wc(e, t),
            ss(t, o, null, r)
          var h = t.memoizedState
          if (((o = h.element), c.isDehydrated))
            if (
              ((c = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              ;(a = ir(Error(s(423)), t)), (t = Af(e, t, o, r, a))
              break e
            } else if (o !== a) {
              ;(a = ir(Error(s(424)), t)), (t = Af(e, t, o, r, a))
              break e
            } else
              for (
                ct = tn(t.stateNode.containerInfo.firstChild),
                  ut = t,
                  Pe = !0,
                  Ct = null,
                  r = Bc(t, null, o, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
          else {
            if ((Jn(), o === a)) {
              t = $t(e, t, r)
              break e
            }
            be(e, t, o, r)
          }
          t = t.child
        }
        return t
      case 5:
        return (
          Kc(t),
          e === null && bo(t),
          (o = t.type),
          (a = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (h = a.children),
          Ho(o, a) ? (h = null) : c !== null && Ho(o, c) && (t.flags |= 32),
          Ef(e, t),
          be(e, t, h, r),
          t.child
        )
      case 6:
        return e === null && bo(t), null
      case 13:
        return Rf(e, t, r)
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = er(t, null, o, r)) : be(e, t, o, r),
          t.child
        )
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : kt(o, a)),
          Pf(e, t, o, a, r)
        )
      case 7:
        return be(e, t, t.pendingProps, r), t.child
      case 8:
        return be(e, t, t.pendingProps.children, r), t.child
      case 12:
        return be(e, t, t.pendingProps.children, r), t.child
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (a = t.pendingProps),
            (c = t.memoizedProps),
            (h = a.value),
            ge(ns, o._currentValue),
            (o._currentValue = h),
            c !== null)
          )
            if (Tt(c.value, h)) {
              if (c.children === a.children && !tt.current) {
                t = $t(e, t, r)
                break e
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var x = c.dependencies
                if (x !== null) {
                  h = c.child
                  for (var S = x.firstContext; S !== null; ) {
                    if (S.context === o) {
                      if (c.tag === 1) {
                        ;(S = Ht(-1, r & -r)), (S.tag = 2)
                        var R = c.updateQueue
                        if (R !== null) {
                          R = R.shared
                          var _ = R.pending
                          _ === null
                            ? (S.next = S)
                            : ((S.next = _.next), (_.next = S)),
                            (R.pending = S)
                        }
                      }
                      ;(c.lanes |= r),
                        (S = c.alternate),
                        S !== null && (S.lanes |= r),
                        rl(c.return, r, t),
                        (x.lanes |= r)
                      break
                    }
                    S = S.next
                  }
                } else if (c.tag === 10) h = c.type === t.type ? null : c.child
                else if (c.tag === 18) {
                  if (((h = c.return), h === null)) throw Error(s(341))
                  ;(h.lanes |= r),
                    (x = h.alternate),
                    x !== null && (x.lanes |= r),
                    rl(h, r, t),
                    (h = c.sibling)
                } else h = c.child
                if (h !== null) h.return = c
                else
                  for (h = c; h !== null; ) {
                    if (h === t) {
                      h = null
                      break
                    }
                    if (((c = h.sibling), c !== null)) {
                      ;(c.return = h.return), (h = c)
                      break
                    }
                    h = h.return
                  }
                c = h
              }
          be(e, t, a.children, r), (t = t.child)
        }
        return t
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          nr(t, r),
          (a = gt(a)),
          (o = o(a)),
          (t.flags |= 1),
          be(e, t, o, r),
          t.child
        )
      case 14:
        return (
          (o = t.type),
          (a = kt(o, t.pendingProps)),
          (a = kt(o.type, a)),
          Tf(e, t, o, a, r)
        )
      case 15:
        return Cf(e, t, t.type, t.pendingProps, r)
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : kt(o, a)),
          ps(e, t),
          (t.tag = 1),
          nt(o) ? ((e = !0), qi(t)) : (e = !1),
          nr(t, r),
          mf(t, o, a),
          xl(t, o, a, r),
          Tl(null, t, o, !0, e, r)
        )
      case 19:
        return Df(e, t, r)
      case 22:
        return kf(e, t, r)
    }
    throw Error(s(156, t.tag))
  }
  function nd(e, t) {
    return Vu(e, t)
  }
  function bg(e, t, r, o) {
    ;(this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function xt(e, t, r, o) {
    return new bg(e, t, r, o)
  }
  function Hl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function Jg(e) {
    if (typeof e == 'function') return Hl(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === Oe)) return 11
      if (e === et) return 14
    }
    return 2
  }
  function hn(e, t) {
    var r = e.alternate
    return (
      r === null
        ? ((r = xt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    )
  }
  function ks(e, t, r, o, a, c) {
    var h = 2
    if (((o = e), typeof e == 'function')) Hl(e) && (h = 1)
    else if (typeof e == 'string') h = 5
    else
      e: switch (e) {
        case ie:
          return Nn(r.children, a, c, t)
        case q:
          ;(h = 8), (a |= 8)
          break
        case pe:
          return (
            (e = xt(12, r, t, a | 2)), (e.elementType = pe), (e.lanes = c), e
          )
        case De:
          return (e = xt(13, r, t, a)), (e.elementType = De), (e.lanes = c), e
        case Le:
          return (e = xt(19, r, t, a)), (e.elementType = Le), (e.lanes = c), e
        case re:
          return Es(r, a, c, t)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case we:
                h = 10
                break e
              case Ue:
                h = 9
                break e
              case Oe:
                h = 11
                break e
              case et:
                h = 14
                break e
              case Ie:
                ;(h = 16), (o = null)
                break e
            }
          throw Error(s(130, e == null ? e : typeof e, ''))
      }
    return (
      (t = xt(h, r, t, a)), (t.elementType = e), (t.type = o), (t.lanes = c), t
    )
  }
  function Nn(e, t, r, o) {
    return (e = xt(7, e, o, t)), (e.lanes = r), e
  }
  function Es(e, t, r, o) {
    return (
      (e = xt(22, e, o, t)),
      (e.elementType = re),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    )
  }
  function $l(e, t, r) {
    return (e = xt(6, e, null, t)), (e.lanes = r), e
  }
  function Kl(e, t, r) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  function ey(e, t, r, o, a) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vo(0)),
      (this.expirationTimes = vo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null)
  }
  function Yl(e, t, r, o, a, c, h, x, S) {
    return (
      (e = new ey(e, t, r, x, S)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = xt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      sl(c),
      e
    )
  }
  function ty(e, t, r) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: b,
      key: o == null ? null : '' + o,
      children: e,
      containerInfo: t,
      implementation: r,
    }
  }
  function rd(e) {
    if (!e) return rn
    e = e._reactInternals
    e: {
      if (xn(e) !== e || e.tag !== 1) throw Error(s(170))
      var t = e
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context
            break e
          case 1:
            if (nt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        t = t.return
      } while (t !== null)
      throw Error(s(171))
    }
    if (e.tag === 1) {
      var r = e.type
      if (nt(r)) return Rc(e, r, t)
    }
    return t
  }
  function id(e, t, r, o, a, c, h, x, S) {
    return (
      (e = Yl(r, o, !0, e, a, c, h, x, S)),
      (e.context = rd(null)),
      (r = e.current),
      (o = Je()),
      (a = fn(r)),
      (c = Ht(o, a)),
      (c.callback = t ?? null),
      ln(r, c, a),
      (e.current.lanes = a),
      jr(e, a, o),
      st(e, o),
      e
    )
  }
  function js(e, t, r, o) {
    var a = t.current,
      c = Je(),
      h = fn(a)
    return (
      (r = rd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Ht(c, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = ln(a, t, h)),
      e !== null && (Mt(e, a, h, c), is(e, a, h)),
      h
    )
  }
  function Ms(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function sd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane
      e.retryLane = r !== 0 && r < t ? r : t
    }
  }
  function Gl(e, t) {
    sd(e, t), (e = e.alternate) && sd(e, t)
  }
  var od =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function Xl(e) {
    this._internalRoot = e
  }
  ;(As.prototype.render = Xl.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(s(409))
      js(e, t, null, null)
    }),
    (As.prototype.unmount = Xl.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          Mn(function () {
            js(null, e, null, null)
          }),
            (t[Ft] = null)
        }
      })
  function As(e) {
    this._internalRoot = e
  }
  As.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Wu()
      e = { blockedOn: null, target: e, priority: t }
      for (var r = 0; r < bt.length && t !== 0 && t < bt[r].priority; r++);
      bt.splice(r, 0, e), r === 0 && Ku(e)
    }
  }
  function Ql(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function Rs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    )
  }
  function ld() {}
  function ny(e, t, r, o, a) {
    if (a) {
      if (typeof o == 'function') {
        var c = o
        o = function () {
          var R = Ms(h)
          c.call(R)
        }
      }
      var h = id(t, o, e, 0, null, !1, !1, '', ld)
      return (
        (e._reactRootContainer = h),
        (e[Ft] = h.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        Mn(),
        h
      )
    }
    for (; (a = e.lastChild); ) e.removeChild(a)
    if (typeof o == 'function') {
      var x = o
      o = function () {
        var R = Ms(S)
        x.call(R)
      }
    }
    var S = Yl(e, 0, !1, null, null, !1, !1, '', ld)
    return (
      (e._reactRootContainer = S),
      (e[Ft] = S.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      Mn(function () {
        js(t, S, r, o)
      }),
      S
    )
  }
  function Ns(e, t, r, o, a) {
    var c = r._reactRootContainer
    if (c) {
      var h = c
      if (typeof a == 'function') {
        var x = a
        a = function () {
          var S = Ms(h)
          x.call(S)
        }
      }
      js(t, h, e, a)
    } else h = ny(r, t, e, a, o)
    return Ms(h)
  }
  ;(Bu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes)
          r !== 0 &&
            (xo(t, r | 1), st(t, Me()), !(ae & 6) && ((lr = Me() + 500), sn()))
        }
        break
      case 13:
        Mn(function () {
          var o = Wt(e, 1)
          if (o !== null) {
            var a = Je()
            Mt(o, e, 1, a)
          }
        }),
          Gl(e, 1)
    }
  }),
    (wo = function (e) {
      if (e.tag === 13) {
        var t = Wt(e, 134217728)
        if (t !== null) {
          var r = Je()
          Mt(t, e, 134217728, r)
        }
        Gl(e, 134217728)
      }
    }),
    (Uu = function (e) {
      if (e.tag === 13) {
        var t = fn(e),
          r = Wt(e, t)
        if (r !== null) {
          var o = Je()
          Mt(r, e, t, o)
        }
        Gl(e, t)
      }
    }),
    (Wu = function () {
      return he
    }),
    (Hu = function (e, t) {
      var r = he
      try {
        return (he = e), t()
      } finally {
        he = r
      }
    }),
    (fo = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((ro(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode
            for (
              r = r.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t]
              if (o !== e && o.form === e.form) {
                var a = Xi(o)
                if (!a) throw Error(s(90))
                hu(o), ro(o, a)
              }
            }
          }
          break
        case 'textarea':
          vu(e, r)
          break
        case 'select':
          ;(t = r.value), t != null && Fn(e, !!r.multiple, t, !1)
      }
    }),
    (ju = Bl),
    (Mu = Mn)
  var ry = { usingClientEntryPoint: !1, Events: [$r, Xn, Xi, ku, Eu, Bl] },
    ii = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    iy = {
      bundleType: ii.bundleType,
      version: ii.version,
      rendererPackageName: ii.rendererPackageName,
      rendererConfig: ii.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: G.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Du(e)), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: ii.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        ;(Ai = Ds.inject(iy)), (Rt = Ds)
      } catch {}
  }
  return (
    (ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ry),
    (ot.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!Ql(t)) throw Error(s(200))
      return ty(e, t, null, r)
    }),
    (ot.createRoot = function (e, t) {
      if (!Ql(e)) throw Error(s(299))
      var r = !1,
        o = '',
        a = od
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Yl(e, 1, !1, null, null, r, !1, o, a)),
        (e[Ft] = t.current),
        Ur(e.nodeType === 8 ? e.parentNode : e),
        new Xl(t)
      )
    }),
    (ot.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)))
      return (e = Du(t)), (e = e === null ? null : e.stateNode), e
    }),
    (ot.flushSync = function (e) {
      return Mn(e)
    }),
    (ot.hydrate = function (e, t, r) {
      if (!Rs(t)) throw Error(s(200))
      return Ns(null, e, t, !0, r)
    }),
    (ot.hydrateRoot = function (e, t, r) {
      if (!Ql(e)) throw Error(s(405))
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        c = '',
        h = od
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (h = r.onRecoverableError)),
        (t = id(t, null, e, 1, r ?? null, a, !1, c, h)),
        (e[Ft] = t.current),
        Ur(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          (r = o[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a)
      return new As(t)
    }),
    (ot.render = function (e, t, r) {
      if (!Rs(t)) throw Error(s(200))
      return Ns(null, e, t, !1, r)
    }),
    (ot.unmountComponentAtNode = function (e) {
      if (!Rs(e)) throw Error(s(40))
      return e._reactRootContainer
        ? (Mn(function () {
            Ns(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[Ft] = null)
            })
          }),
          !0)
        : !1
    }),
    (ot.unstable_batchedUpdates = Bl),
    (ot.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Rs(r)) throw Error(s(200))
      if (e == null || e._reactInternals === void 0) throw Error(s(38))
      return Ns(e, t, r, !1, o)
    }),
    (ot.version = '18.3.1-next-f1338f8080-20240426'),
    ot
  )
}
var md
function dy() {
  if (md) return bl.exports
  md = 1
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
      } catch (i) {
        console.error(i)
      }
  }
  return n(), (bl.exports = fy()), bl.exports
}
var gd
function hy() {
  if (gd) return Ls
  gd = 1
  var n = dy()
  return (Ls.createRoot = n.createRoot), (Ls.hydrateRoot = n.hydrateRoot), Ls
}
var py = hy()
const my = Na(py)
function ha() {
  return (
    (ha = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i]
            for (var l in s)
              Object.prototype.hasOwnProperty.call(s, l) && (n[l] = s[l])
          }
          return n
        }),
    ha.apply(this, arguments)
  )
}
var gy = {
    strings: [
      'These are the default values...',
      'You know what you should do?',
      'Use your own!',
      'Have a great day!',
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    loop: !1,
    loopCount: 1 / 0,
    showCursor: !0,
    cursorChar: '|',
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: 'html',
    onBegin: function (n) {},
    onComplete: function (n) {},
    preStringTyped: function (n, i) {},
    onStringTyped: function (n, i) {},
    onLastStringBackspaced: function (n) {},
    onTypingPaused: function (n, i) {},
    onTypingResumed: function (n, i) {},
    onReset: function (n) {},
    onStop: function (n, i) {},
    onStart: function (n, i) {},
    onDestroy: function (n) {},
  },
  yy = new ((function () {
    function n() {}
    var i = n.prototype
    return (
      (i.load = function (s, l, u) {
        if (
          ((s.el = typeof u == 'string' ? document.querySelector(u) : u),
          (s.options = ha({}, gy, l)),
          (s.isInput = s.el.tagName.toLowerCase() === 'input'),
          (s.attr = s.options.attr),
          (s.bindInputFocusEvents = s.options.bindInputFocusEvents),
          (s.showCursor = !s.isInput && s.options.showCursor),
          (s.cursorChar = s.options.cursorChar),
          (s.cursorBlinking = !0),
          (s.elContent = s.attr ? s.el.getAttribute(s.attr) : s.el.textContent),
          (s.contentType = s.options.contentType),
          (s.typeSpeed = s.options.typeSpeed),
          (s.startDelay = s.options.startDelay),
          (s.backSpeed = s.options.backSpeed),
          (s.smartBackspace = s.options.smartBackspace),
          (s.backDelay = s.options.backDelay),
          (s.fadeOut = s.options.fadeOut),
          (s.fadeOutClass = s.options.fadeOutClass),
          (s.fadeOutDelay = s.options.fadeOutDelay),
          (s.isPaused = !1),
          (s.strings = s.options.strings.map(function (y) {
            return y.trim()
          })),
          (s.stringsElement =
            typeof s.options.stringsElement == 'string'
              ? document.querySelector(s.options.stringsElement)
              : s.options.stringsElement),
          s.stringsElement)
        ) {
          ;(s.strings = []),
            (s.stringsElement.style.cssText =
              'clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;')
          var d = Array.prototype.slice.apply(s.stringsElement.children),
            f = d.length
          if (f)
            for (var p = 0; p < f; p += 1) s.strings.push(d[p].innerHTML.trim())
        }
        for (var m in ((s.strPos = 0),
        (s.currentElContent = this.getCurrentElContent(s)),
        s.currentElContent &&
          s.currentElContent.length > 0 &&
          ((s.strPos = s.currentElContent.length - 1),
          s.strings.unshift(s.currentElContent)),
        (s.sequence = []),
        s.strings))
          s.sequence[m] = m
        ;(s.arrayPos = 0),
          (s.stopNum = 0),
          (s.loop = s.options.loop),
          (s.loopCount = s.options.loopCount),
          (s.curLoop = 0),
          (s.shuffle = s.options.shuffle),
          (s.pause = {
            status: !1,
            typewrite: !0,
            curString: '',
            curStrPos: 0,
          }),
          (s.typingComplete = !1),
          (s.autoInsertCss = s.options.autoInsertCss),
          s.autoInsertCss &&
            (this.appendCursorAnimationCss(s),
            this.appendFadeOutAnimationCss(s))
      }),
      (i.getCurrentElContent = function (s) {
        return s.attr
          ? s.el.getAttribute(s.attr)
          : s.isInput
          ? s.el.value
          : s.contentType === 'html'
          ? s.el.innerHTML
          : s.el.textContent
      }),
      (i.appendCursorAnimationCss = function (s) {
        var l = 'data-typed-js-cursor-css'
        if (s.showCursor && !document.querySelector('[' + l + ']')) {
          var u = document.createElement('style')
          u.setAttribute(l, 'true'),
            (u.innerHTML = `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),
            document.body.appendChild(u)
        }
      }),
      (i.appendFadeOutAnimationCss = function (s) {
        var l = 'data-typed-fadeout-js-css'
        if (s.fadeOut && !document.querySelector('[' + l + ']')) {
          var u = document.createElement('style')
          u.setAttribute(l, 'true'),
            (u.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),
            document.body.appendChild(u)
        }
      }),
      n
    )
  })())(),
  yd = new ((function () {
    function n() {}
    var i = n.prototype
    return (
      (i.typeHtmlChars = function (s, l, u) {
        if (u.contentType !== 'html') return l
        var d = s.substring(l).charAt(0)
        if (d === '<' || d === '&') {
          var f
          for (
            f = d === '<' ? '>' : ';';
            s.substring(l + 1).charAt(0) !== f && !(1 + ++l > s.length);

          );
          l++
        }
        return l
      }),
      (i.backSpaceHtmlChars = function (s, l, u) {
        if (u.contentType !== 'html') return l
        var d = s.substring(l).charAt(0)
        if (d === '>' || d === ';') {
          var f
          for (
            f = d === '>' ? '<' : '&';
            s.substring(l - 1).charAt(0) !== f && !(--l < 0);

          );
          l--
        }
        return l
      }),
      n
    )
  })())(),
  vy = (function () {
    function n(s, l) {
      yy.load(this, l, s), this.begin()
    }
    var i = n.prototype
    return (
      (i.toggle = function () {
        this.pause.status ? this.start() : this.stop()
      }),
      (i.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this))
      }),
      (i.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)))
      }),
      (i.destroy = function () {
        this.reset(!1), this.options.onDestroy(this)
      }),
      (i.reset = function (s) {
        s === void 0 && (s = !0),
          clearInterval(this.timeout),
          this.replaceText(''),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          s && (this.insertCursor(), this.options.onReset(this), this.begin())
      }),
      (i.begin = function () {
        var s = this
        this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            s.strPos === 0
              ? s.typewrite(s.strings[s.sequence[s.arrayPos]], s.strPos)
              : s.backspace(s.strings[s.sequence[s.arrayPos]], s.strPos)
          }, this.startDelay))
      }),
      (i.typewrite = function (s, l) {
        var u = this
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass))
        var d = this.humanizer(this.typeSpeed),
          f = 1
        this.pause.status !== !0
          ? (this.timeout = setTimeout(function () {
              l = yd.typeHtmlChars(s, l, u)
              var p = 0,
                m = s.substring(l)
              if (m.charAt(0) === '^' && /^\^\d+/.test(m)) {
                var y = 1
                ;(y += (m = /\d+/.exec(m)[0]).length),
                  (p = parseInt(m)),
                  (u.temporaryPause = !0),
                  u.options.onTypingPaused(u.arrayPos, u),
                  (s = s.substring(0, l) + s.substring(l + y)),
                  u.toggleBlinking(!0)
              }
              if (m.charAt(0) === '`') {
                for (
                  ;
                  s.substring(l + f).charAt(0) !== '`' &&
                  (f++, !(l + f > s.length));

                );
                var v = s.substring(0, l),
                  w = s.substring(v.length + 1, l + f),
                  P = s.substring(l + f + 1)
                ;(s = v + w + P), f--
              }
              u.timeout = setTimeout(function () {
                u.toggleBlinking(!1),
                  l >= s.length ? u.doneTyping(s, l) : u.keepTyping(s, l, f),
                  u.temporaryPause &&
                    ((u.temporaryPause = !1),
                    u.options.onTypingResumed(u.arrayPos, u))
              }, p)
            }, d))
          : this.setPauseStatus(s, l, !0)
      }),
      (i.keepTyping = function (s, l, u) {
        l === 0 &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this))
        var d = s.substring(0, (l += u))
        this.replaceText(d), this.typewrite(s, l)
      }),
      (i.doneTyping = function (s, l) {
        var u = this
        this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            this.loop === !1 || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              u.backspace(s, l)
            }, this.backDelay))
      }),
      (i.backspace = function (s, l) {
        var u = this
        if (this.pause.status !== !0) {
          if (this.fadeOut) return this.initFadeOut()
          this.toggleBlinking(!1)
          var d = this.humanizer(this.backSpeed)
          this.timeout = setTimeout(function () {
            l = yd.backSpaceHtmlChars(s, l, u)
            var f = s.substring(0, l)
            if ((u.replaceText(f), u.smartBackspace)) {
              var p = u.strings[u.arrayPos + 1]
              u.stopNum = p && f === p.substring(0, l) ? l : 0
            }
            l > u.stopNum
              ? (l--, u.backspace(s, l))
              : l <= u.stopNum &&
                (u.arrayPos++,
                u.arrayPos === u.strings.length
                  ? ((u.arrayPos = 0),
                    u.options.onLastStringBackspaced(),
                    u.shuffleStringsIfNeeded(),
                    u.begin())
                  : u.typewrite(u.strings[u.sequence[u.arrayPos]], l))
          }, d)
        } else this.setPauseStatus(s, l, !1)
      }),
      (i.complete = function () {
        this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0)
      }),
      (i.setPauseStatus = function (s, l, u) {
        ;(this.pause.typewrite = u),
          (this.pause.curString = s),
          (this.pause.curStrPos = l)
      }),
      (i.toggleBlinking = function (s) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== s &&
              ((this.cursorBlinking = s),
              s
                ? this.cursor.classList.add('typed-cursor--blink')
                : this.cursor.classList.remove('typed-cursor--blink'))))
      }),
      (i.humanizer = function (s) {
        return Math.round((Math.random() * s) / 2) + s
      }),
      (i.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5
          }))
      }),
      (i.initFadeOut = function () {
        var s = this
        return (
          (this.el.className += ' ' + this.fadeOutClass),
          this.cursor && (this.cursor.className += ' ' + this.fadeOutClass),
          setTimeout(function () {
            s.arrayPos++,
              s.replaceText(''),
              s.strings.length > s.arrayPos
                ? s.typewrite(s.strings[s.sequence[s.arrayPos]], 0)
                : (s.typewrite(s.strings[0], 0), (s.arrayPos = 0))
          }, this.fadeOutDelay)
        )
      }),
      (i.replaceText = function (s) {
        this.attr
          ? this.el.setAttribute(this.attr, s)
          : this.isInput
          ? (this.el.value = s)
          : this.contentType === 'html'
          ? (this.el.innerHTML = s)
          : (this.el.textContent = s)
      }),
      (i.bindFocusEvents = function () {
        var s = this
        this.isInput &&
          (this.el.addEventListener('focus', function (l) {
            s.stop()
          }),
          this.el.addEventListener('blur', function (l) {
            ;(s.el.value && s.el.value.length !== 0) || s.start()
          }))
      }),
      (i.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement('span')),
            (this.cursor.className = 'typed-cursor'),
            this.cursor.setAttribute('aria-hidden', !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling
              )))
      }),
      n
    )
  })()
const La = W.createContext({})
function Va(n) {
  const i = W.useRef(null)
  return i.current === null && (i.current = n()), i.current
}
const Qs = W.createContext(null),
  _a = W.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: 'never',
  })
class xy extends W.Component {
  getSnapshotBeforeUpdate(i) {
    const s = this.props.childRef.current
    if (s && i.isPresent && !this.props.isPresent) {
      const l = this.props.sizeRef.current
      ;(l.height = s.offsetHeight || 0),
        (l.width = s.offsetWidth || 0),
        (l.top = s.offsetTop),
        (l.left = s.offsetLeft)
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}
function wy({ children: n, isPresent: i }) {
  const s = W.useId(),
    l = W.useRef(null),
    u = W.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: d } = W.useContext(_a)
  return (
    W.useInsertionEffect(() => {
      const { width: f, height: p, top: m, left: y } = u.current
      if (i || !l.current || !f || !p) return
      l.current.dataset.motionPopId = s
      const v = document.createElement('style')
      return (
        d && (v.nonce = d),
        document.head.appendChild(v),
        v.sheet &&
          v.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            top: ${m}px !important;
            left: ${y}px !important;
          }
        `),
        () => {
          document.head.removeChild(v)
        }
      )
    }, [i]),
    g.jsx(xy, {
      isPresent: i,
      childRef: l,
      sizeRef: u,
      children: W.cloneElement(n, { ref: l }),
    })
  )
}
const Sy = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: l,
  custom: u,
  presenceAffectsLayout: d,
  mode: f,
}) => {
  const p = Va(Py),
    m = W.useId(),
    y = W.useCallback(
      (w) => {
        p.set(w, !0)
        for (const P of p.values()) if (!P) return
        l && l()
      },
      [p, l]
    ),
    v = W.useMemo(
      () => ({
        id: m,
        initial: i,
        isPresent: s,
        custom: u,
        onExitComplete: y,
        register: (w) => (p.set(w, !1), () => p.delete(w)),
      }),
      d ? [Math.random(), y] : [s, y]
    )
  return (
    W.useMemo(() => {
      p.forEach((w, P) => p.set(P, !1))
    }, [s]),
    W.useEffect(() => {
      !s && !p.size && l && l()
    }, [s]),
    f === 'popLayout' && (n = g.jsx(wy, { isPresent: s, children: n })),
    g.jsx(Qs.Provider, { value: v, children: n })
  )
}
function Py() {
  return new Map()
}
function Oh(n = !0) {
  const i = W.useContext(Qs)
  if (i === null) return [!0, null]
  const { isPresent: s, onExitComplete: l, register: u } = i,
    d = W.useId()
  W.useEffect(() => {
    n && u(d)
  }, [n])
  const f = W.useCallback(() => n && l && l(d), [d, l, n])
  return !s && l ? [!1, f] : [!0]
}
const Vs = (n) => n.key || ''
function vd(n) {
  const i = []
  return (
    W.Children.forEach(n, (s) => {
      W.isValidElement(s) && i.push(s)
    }),
    i
  )
}
const Oa = typeof window < 'u',
  Ih = Oa ? W.useLayoutEffect : W.useEffect,
  Ty = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: l,
    presenceAffectsLayout: u = !0,
    mode: d = 'sync',
    propagate: f = !1,
  }) => {
    const [p, m] = Oh(f),
      y = W.useMemo(() => vd(n), [n]),
      v = f && !p ? [] : y.map(Vs),
      w = W.useRef(!0),
      P = W.useRef(y),
      D = Va(() => new Map()),
      [k, C] = W.useState(y),
      [A, N] = W.useState(y)
    Ih(() => {
      ;(w.current = !1), (P.current = y)
      for (let G = 0; G < A.length; G++) {
        const U = Vs(A[G])
        v.includes(U) ? D.delete(U) : D.get(U) !== !0 && D.set(U, !1)
      }
    }, [A, v.length, v.join('-')])
    const z = []
    if (y !== k) {
      let G = [...y]
      for (let U = 0; U < A.length; U++) {
        const b = A[U],
          ie = Vs(b)
        v.includes(ie) || (G.splice(U, 0, b), z.push(b))
      }
      d === 'wait' && z.length && (G = z), N(vd(G)), C(y)
      return
    }
    const { forceRender: B } = W.useContext(La)
    return g.jsx(g.Fragment, {
      children: A.map((G) => {
        const U = Vs(G),
          b = f && !p ? !1 : y === A || v.includes(U),
          ie = () => {
            if (D.has(U)) D.set(U, !0)
            else return
            let q = !0
            D.forEach((pe) => {
              pe || (q = !1)
            }),
              q &&
                (B == null || B(),
                N(P.current),
                f && (m == null || m()),
                l && l())
          }
        return g.jsx(
          Sy,
          {
            isPresent: b,
            initial: !w.current || s ? void 0 : !1,
            custom: b ? void 0 : i,
            presenceAffectsLayout: u,
            mode: d,
            onExitComplete: b ? void 0 : ie,
            children: G,
          },
          U
        )
      }),
    })
  },
  dt = (n) => n
let pa = dt
function Ia(n) {
  let i
  return () => (i === void 0 && (i = n()), i)
}
const mr = (n, i, s) => {
    const l = i - n
    return l === 0 ? 1 : (s - n) / l
  },
  Yt = (n) => n * 1e3,
  Gt = (n) => n / 1e3,
  Cy = { skipAnimations: !1, useManualTiming: !1 }
function ky(n) {
  let i = new Set(),
    s = new Set(),
    l = !1,
    u = !1
  const d = new WeakSet()
  let f = { delta: 0, timestamp: 0, isProcessing: !1 }
  function p(y) {
    d.has(y) && (m.schedule(y), n()), y(f)
  }
  const m = {
    schedule: (y, v = !1, w = !1) => {
      const D = w && l ? i : s
      return v && d.add(y), D.has(y) || D.add(y), y
    },
    cancel: (y) => {
      s.delete(y), d.delete(y)
    },
    process: (y) => {
      if (((f = y), l)) {
        u = !0
        return
      }
      ;(l = !0),
        ([i, s] = [s, i]),
        i.forEach(p),
        i.clear(),
        (l = !1),
        u && ((u = !1), m.process(y))
    },
  }
  return m
}
const _s = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  Ey = 40
function Fh(n, i) {
  let s = !1,
    l = !0
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = _s.reduce((N, z) => ((N[z] = ky(d)), N), {}),
    {
      read: p,
      resolveKeyframes: m,
      update: y,
      preRender: v,
      render: w,
      postRender: P,
    } = f,
    D = () => {
      const N = performance.now()
      ;(s = !1),
        (u.delta = l ? 1e3 / 60 : Math.max(Math.min(N - u.timestamp, Ey), 1)),
        (u.timestamp = N),
        (u.isProcessing = !0),
        p.process(u),
        m.process(u),
        y.process(u),
        v.process(u),
        w.process(u),
        P.process(u),
        (u.isProcessing = !1),
        s && i && ((l = !1), n(D))
    },
    k = () => {
      ;(s = !0), (l = !0), u.isProcessing || n(D)
    }
  return {
    schedule: _s.reduce((N, z) => {
      const B = f[z]
      return (N[z] = (G, U = !1, b = !1) => (s || k(), B.schedule(G, U, b))), N
    }, {}),
    cancel: (N) => {
      for (let z = 0; z < _s.length; z++) f[_s[z]].cancel(N)
    },
    state: u,
    steps: f,
  }
}
const {
    schedule: xe,
    cancel: gn,
    state: $e,
    steps: ta,
  } = Fh(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : dt, !0),
  zh = W.createContext({ strict: !1 }),
  xd = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  gr = {}
for (const n in xd) gr[n] = { isEnabled: (i) => xd[n].some((s) => !!i[s]) }
function jy(n) {
  for (const i in n) gr[i] = { ...gr[i], ...n[i] }
}
const My = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
])
function Ws(n) {
  return (
    n.startsWith('while') ||
    (n.startsWith('drag') && n !== 'draggable') ||
    n.startsWith('layout') ||
    n.startsWith('onTap') ||
    n.startsWith('onPan') ||
    n.startsWith('onLayout') ||
    My.has(n)
  )
}
let Bh = (n) => !Ws(n)
function Ay(n) {
  n && (Bh = (i) => (i.startsWith('on') ? !Ws(i) : n(i)))
}
try {
  Ay(require('@emotion/is-prop-valid').default)
} catch {}
function Ry(n, i, s) {
  const l = {}
  for (const u in n)
    (u === 'values' && typeof n.values == 'object') ||
      ((Bh(u) ||
        (s === !0 && Ws(u)) ||
        (!i && !Ws(u)) ||
        (n.draggable && u.startsWith('onDrag'))) &&
        (l[u] = n[u]))
  return l
}
function Ny(n) {
  if (typeof Proxy > 'u') return n
  const i = new Map(),
    s = (...l) => n(...l)
  return new Proxy(s, {
    get: (l, u) =>
      u === 'create' ? n : (i.has(u) || i.set(u, n(u)), i.get(u)),
  })
}
const qs = W.createContext({})
function pi(n) {
  return typeof n == 'string' || Array.isArray(n)
}
function Zs(n) {
  return n !== null && typeof n == 'object' && typeof n.start == 'function'
}
const Fa = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  za = ['initial', ...Fa]
function bs(n) {
  return Zs(n.animate) || za.some((i) => pi(n[i]))
}
function Uh(n) {
  return !!(bs(n) || n.variants)
}
function Dy(n, i) {
  if (bs(n)) {
    const { initial: s, animate: l } = n
    return {
      initial: s === !1 || pi(s) ? s : void 0,
      animate: pi(l) ? l : void 0,
    }
  }
  return n.inherit !== !1 ? i : {}
}
function Ly(n) {
  const { initial: i, animate: s } = Dy(n, W.useContext(qs))
  return W.useMemo(() => ({ initial: i, animate: s }), [wd(i), wd(s)])
}
function wd(n) {
  return Array.isArray(n) ? n.join(' ') : n
}
const Vy = Symbol.for('motionComponentSymbol')
function ur(n) {
  return (
    n &&
    typeof n == 'object' &&
    Object.prototype.hasOwnProperty.call(n, 'current')
  )
}
function _y(n, i, s) {
  return W.useCallback(
    (l) => {
      l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        s && (typeof s == 'function' ? s(l) : ur(s) && (s.current = l))
    },
    [i]
  )
}
const Ba = (n) => n.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  Oy = 'framerAppearId',
  Wh = 'data-' + Ba(Oy),
  { schedule: Ua, cancel: ow } = Fh(queueMicrotask, !1),
  Hh = W.createContext({})
function Iy(n, i, s, l, u) {
  var d, f
  const { visualElement: p } = W.useContext(qs),
    m = W.useContext(zh),
    y = W.useContext(Qs),
    v = W.useContext(_a).reducedMotion,
    w = W.useRef(null)
  ;(l = l || m.renderer),
    !w.current &&
      l &&
      (w.current = l(n, {
        visualState: i,
        parent: p,
        props: s,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: v,
      }))
  const P = w.current,
    D = W.useContext(Hh)
  P &&
    !P.projection &&
    u &&
    (P.type === 'html' || P.type === 'svg') &&
    Fy(w.current, s, u, D)
  const k = W.useRef(!1)
  W.useInsertionEffect(() => {
    P && k.current && P.update(s, y)
  })
  const C = s[Wh],
    A = W.useRef(
      !!C &&
        !(
          !((d = window.MotionHandoffIsComplete) === null || d === void 0) &&
          d.call(window, C)
        ) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, C))
    )
  return (
    Ih(() => {
      P &&
        ((k.current = !0),
        (window.MotionIsMounted = !0),
        P.updateFeatures(),
        Ua.render(P.render),
        A.current && P.animationState && P.animationState.animateChanges())
    }),
    W.useEffect(() => {
      P &&
        (!A.current && P.animationState && P.animationState.animateChanges(),
        A.current &&
          (queueMicrotask(() => {
            var N
            ;(N = window.MotionHandoffMarkAsComplete) === null ||
              N === void 0 ||
              N.call(window, C)
          }),
          (A.current = !1)))
    }),
    P
  )
}
function Fy(n, i, s, l) {
  const {
    layoutId: u,
    layout: d,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: y,
  } = i
  ;(n.projection = new s(
    n.latestValues,
    i['data-framer-portal-id'] ? void 0 : $h(n.parent)
  )),
    n.projection.setOptions({
      layoutId: u,
      layout: d,
      alwaysMeasureLayout: !!f || (p && ur(p)),
      visualElement: n,
      animationType: typeof d == 'string' ? d : 'both',
      initialPromotionConfig: l,
      layoutScroll: m,
      layoutRoot: y,
    })
}
function $h(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : $h(n.parent)
}
function zy({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: l,
  Component: u,
}) {
  var d, f
  n && jy(n)
  function p(y, v) {
    let w
    const P = { ...W.useContext(_a), ...y, layoutId: By(y) },
      { isStatic: D } = P,
      k = Ly(y),
      C = l(y, D)
    if (!D && Oa) {
      Uy()
      const A = Wy(P)
      ;(w = A.MeasureLayout),
        (k.visualElement = Iy(u, C, P, i, A.ProjectionNode))
    }
    return g.jsxs(qs.Provider, {
      value: k,
      children: [
        w && k.visualElement
          ? g.jsx(w, { visualElement: k.visualElement, ...P })
          : null,
        s(u, y, _y(C, k.visualElement, v), C, D, k.visualElement),
      ],
    })
  }
  p.displayName = `motion.${
    typeof u == 'string'
      ? u
      : `create(${
          (f = (d = u.displayName) !== null && d !== void 0 ? d : u.name) !==
            null && f !== void 0
            ? f
            : ''
        })`
  }`
  const m = W.forwardRef(p)
  return (m[Vy] = u), m
}
function By({ layoutId: n }) {
  const i = W.useContext(La).id
  return i && n !== void 0 ? i + '-' + n : n
}
function Uy(n, i) {
  W.useContext(zh).strict
}
function Wy(n) {
  const { drag: i, layout: s } = gr
  if (!i && !s) return {}
  const l = { ...i, ...s }
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n))
        ? l.MeasureLayout
        : void 0,
    ProjectionNode: l.ProjectionNode,
  }
}
const Hy = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
]
function Wa(n) {
  return typeof n != 'string' || n.includes('-')
    ? !1
    : !!(Hy.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function Sd(n) {
  const i = [{}, {}]
  return (
    n == null ||
      n.values.forEach((s, l) => {
        ;(i[0][l] = s.get()), (i[1][l] = s.getVelocity())
      }),
    i
  )
}
function Ha(n, i, s, l) {
  if (typeof i == 'function') {
    const [u, d] = Sd(l)
    i = i(s !== void 0 ? s : n.custom, u, d)
  }
  if (
    (typeof i == 'string' && (i = n.variants && n.variants[i]),
    typeof i == 'function')
  ) {
    const [u, d] = Sd(l)
    i = i(s !== void 0 ? s : n.custom, u, d)
  }
  return i
}
const ma = (n) => Array.isArray(n),
  $y = (n) => !!(n && typeof n == 'object' && n.mix && n.toValue),
  Ky = (n) => (ma(n) ? n[n.length - 1] || 0 : n),
  Ze = (n) => !!(n && n.getVelocity)
function Fs(n) {
  const i = Ze(n) ? n.get() : n
  return $y(i) ? i.toValue() : i
}
function Yy(
  { scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s },
  l,
  u,
  d
) {
  const f = { latestValues: Gy(l, u, d, n), renderState: i() }
  return (
    s &&
      ((f.onMount = (p) => s({ props: l, current: p, ...f })),
      (f.onUpdate = (p) => s(p))),
    f
  )
}
const Kh = (n) => (i, s) => {
  const l = W.useContext(qs),
    u = W.useContext(Qs),
    d = () => Yy(n, i, l, u)
  return s ? d() : Va(d)
}
function Gy(n, i, s, l) {
  const u = {},
    d = l(n, {})
  for (const P in d) u[P] = Fs(d[P])
  let { initial: f, animate: p } = n
  const m = bs(n),
    y = Uh(n)
  i &&
    y &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate))
  let v = s ? s.initial === !1 : !1
  v = v || f === !1
  const w = v ? p : f
  if (w && typeof w != 'boolean' && !Zs(w)) {
    const P = Array.isArray(w) ? w : [w]
    for (let D = 0; D < P.length; D++) {
      const k = Ha(n, P[D])
      if (k) {
        const { transitionEnd: C, transition: A, ...N } = k
        for (const z in N) {
          let B = N[z]
          if (Array.isArray(B)) {
            const G = v ? B.length - 1 : 0
            B = B[G]
          }
          B !== null && (u[z] = B)
        }
        for (const z in C) u[z] = C[z]
      }
    }
  }
  return u
}
const vr = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  In = new Set(vr),
  Yh = (n) => (i) => typeof i == 'string' && i.startsWith(n),
  Gh = Yh('--'),
  Xy = Yh('var(--'),
  $a = (n) => (Xy(n) ? Qy.test(n.split('/*')[0].trim()) : !1),
  Qy =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Xh = (n, i) => (i && typeof n == 'number' ? i.transform(n) : n),
  Xt = (n, i, s) => (s > i ? i : s < n ? n : s),
  xr = {
    test: (n) => typeof n == 'number',
    parse: parseFloat,
    transform: (n) => n,
  },
  mi = { ...xr, transform: (n) => Xt(0, 1, n) },
  Os = { ...xr, default: 1 },
  xi = (n) => ({
    test: (i) =>
      typeof i == 'string' && i.endsWith(n) && i.split(' ').length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  mn = xi('deg'),
  Ot = xi('%'),
  te = xi('px'),
  qy = xi('vh'),
  Zy = xi('vw'),
  Pd = {
    ...Ot,
    parse: (n) => Ot.parse(n) / 100,
    transform: (n) => Ot.transform(n * 100),
  },
  by = {
    borderWidth: te,
    borderTopWidth: te,
    borderRightWidth: te,
    borderBottomWidth: te,
    borderLeftWidth: te,
    borderRadius: te,
    radius: te,
    borderTopLeftRadius: te,
    borderTopRightRadius: te,
    borderBottomRightRadius: te,
    borderBottomLeftRadius: te,
    width: te,
    maxWidth: te,
    height: te,
    maxHeight: te,
    top: te,
    right: te,
    bottom: te,
    left: te,
    padding: te,
    paddingTop: te,
    paddingRight: te,
    paddingBottom: te,
    paddingLeft: te,
    margin: te,
    marginTop: te,
    marginRight: te,
    marginBottom: te,
    marginLeft: te,
    backgroundPositionX: te,
    backgroundPositionY: te,
  },
  Jy = {
    rotate: mn,
    rotateX: mn,
    rotateY: mn,
    rotateZ: mn,
    scale: Os,
    scaleX: Os,
    scaleY: Os,
    scaleZ: Os,
    skew: mn,
    skewX: mn,
    skewY: mn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: mi,
    originX: Pd,
    originY: Pd,
    originZ: te,
  },
  Td = { ...xr, transform: Math.round },
  Ka = {
    ...by,
    ...Jy,
    zIndex: Td,
    size: te,
    fillOpacity: mi,
    strokeOpacity: mi,
    numOctaves: Td,
  },
  ev = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  tv = vr.length
function nv(n, i, s) {
  let l = '',
    u = !0
  for (let d = 0; d < tv; d++) {
    const f = vr[d],
      p = n[f]
    if (p === void 0) continue
    let m = !0
    if (
      (typeof p == 'number'
        ? (m = p === (f.startsWith('scale') ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || s)
    ) {
      const y = Xh(p, Ka[f])
      if (!m) {
        u = !1
        const v = ev[f] || f
        l += `${v}(${y}) `
      }
      s && (i[f] = y)
    }
  }
  return (l = l.trim()), s ? (l = s(i, u ? '' : l)) : u && (l = 'none'), l
}
function Ya(n, i, s) {
  const { style: l, vars: u, transformOrigin: d } = n
  let f = !1,
    p = !1
  for (const m in i) {
    const y = i[m]
    if (In.has(m)) {
      f = !0
      continue
    } else if (Gh(m)) {
      u[m] = y
      continue
    } else {
      const v = Xh(y, Ka[m])
      m.startsWith('origin') ? ((p = !0), (d[m] = v)) : (l[m] = v)
    }
  }
  if (
    (i.transform ||
      (f || s
        ? (l.transform = nv(i, n.transform, s))
        : l.transform && (l.transform = 'none')),
    p)
  ) {
    const { originX: m = '50%', originY: y = '50%', originZ: v = 0 } = d
    l.transformOrigin = `${m} ${y} ${v}`
  }
}
function Cd(n, i, s) {
  return typeof n == 'string' ? n : te.transform(i + s * n)
}
function rv(n, i, s) {
  const l = Cd(i, n.x, n.width),
    u = Cd(s, n.y, n.height)
  return `${l} ${u}`
}
const iv = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  sv = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function ov(n, i, s = 1, l = 0, u = !0) {
  n.pathLength = 1
  const d = u ? iv : sv
  n[d.offset] = te.transform(-l)
  const f = te.transform(i),
    p = te.transform(s)
  n[d.array] = `${f} ${p}`
}
function Ga(
  n,
  {
    attrX: i,
    attrY: s,
    attrScale: l,
    originX: u,
    originY: d,
    pathLength: f,
    pathSpacing: p = 1,
    pathOffset: m = 0,
    ...y
  },
  v,
  w
) {
  if ((Ya(n, y, w), v)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox)
    return
  }
  ;(n.attrs = n.style), (n.style = {})
  const { attrs: P, style: D, dimensions: k } = n
  P.transform && (k && (D.transform = P.transform), delete P.transform),
    k &&
      (u !== void 0 || d !== void 0 || D.transform) &&
      (D.transformOrigin = rv(
        k,
        u !== void 0 ? u : 0.5,
        d !== void 0 ? d : 0.5
      )),
    i !== void 0 && (P.x = i),
    s !== void 0 && (P.y = s),
    l !== void 0 && (P.scale = l),
    f !== void 0 && ov(P, f, p, m, !1)
}
const Xa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Qh = () => ({ ...Xa(), attrs: {} }),
  Qa = (n) => typeof n == 'string' && n.toLowerCase() === 'svg'
function qh(n, { style: i, vars: s }, l, u) {
  Object.assign(n.style, i, u && u.getProjectionStyles(l))
  for (const d in s) n.style.setProperty(d, s[d])
}
const Zh = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
])
function bh(n, i, s, l) {
  qh(n, i, void 0, l)
  for (const u in i.attrs) n.setAttribute(Zh.has(u) ? u : Ba(u), i.attrs[u])
}
const Hs = {}
function lv(n) {
  Object.assign(Hs, n)
}
function Jh(n, { layout: i, layoutId: s }) {
  return (
    In.has(n) ||
    n.startsWith('origin') ||
    ((i || s !== void 0) && (!!Hs[n] || n === 'opacity'))
  )
}
function qa(n, i, s) {
  var l
  const { style: u } = n,
    d = {}
  for (const f in u)
    (Ze(u[f]) ||
      (i.style && Ze(i.style[f])) ||
      Jh(f, n) ||
      ((l = s == null ? void 0 : s.getValue(f)) === null || l === void 0
        ? void 0
        : l.liveStyle) !== void 0) &&
      (d[f] = u[f])
  return d
}
function ep(n, i, s) {
  const l = qa(n, i, s)
  for (const u in n)
    if (Ze(n[u]) || Ze(i[u])) {
      const d =
        vr.indexOf(u) !== -1
          ? 'attr' + u.charAt(0).toUpperCase() + u.substring(1)
          : u
      l[d] = n[u]
    }
  return l
}
function av(n, i) {
  try {
    i.dimensions =
      typeof n.getBBox == 'function' ? n.getBBox() : n.getBoundingClientRect()
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 }
  }
}
const kd = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
  uv = {
    useVisualState: Kh({
      scrapeMotionValuesFromProps: ep,
      createRenderState: Qh,
      onUpdate: ({
        props: n,
        prevProps: i,
        current: s,
        renderState: l,
        latestValues: u,
      }) => {
        if (!s) return
        let d = !!n.drag
        if (!d) {
          for (const p in u)
            if (In.has(p)) {
              d = !0
              break
            }
        }
        if (!d) return
        let f = !i
        if (i)
          for (let p = 0; p < kd.length; p++) {
            const m = kd[p]
            n[m] !== i[m] && (f = !0)
          }
        f &&
          (xe.read(() => av(s, l)),
          xe.render(() => {
            Ga(l, u, Qa(s.tagName), n.transformTemplate), bh(s, l)
          }))
      },
    }),
  },
  cv = {
    useVisualState: Kh({
      scrapeMotionValuesFromProps: qa,
      createRenderState: Xa,
    }),
  }
function tp(n, i, s) {
  for (const l in i) !Ze(i[l]) && !Jh(l, s) && (n[l] = i[l])
}
function fv({ transformTemplate: n }, i) {
  return W.useMemo(() => {
    const s = Xa()
    return Ya(s, i, n), Object.assign({}, s.vars, s.style)
  }, [i])
}
function dv(n, i) {
  const s = n.style || {},
    l = {}
  return tp(l, s, n), Object.assign(l, fv(n, i)), l
}
function hv(n, i) {
  const s = {},
    l = dv(n, i)
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((s.draggable = !1),
      (l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = 'none'),
      (l.touchAction =
        n.drag === !0 ? 'none' : `pan-${n.drag === 'x' ? 'y' : 'x'}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (s.tabIndex = 0),
    (s.style = l),
    s
  )
}
function pv(n, i, s, l) {
  const u = W.useMemo(() => {
    const d = Qh()
    return (
      Ga(d, i, Qa(l), n.transformTemplate),
      { ...d.attrs, style: { ...d.style } }
    )
  }, [i])
  if (n.style) {
    const d = {}
    tp(d, n.style, n), (u.style = { ...d, ...u.style })
  }
  return u
}
function mv(n = !1) {
  return (s, l, u, { latestValues: d }, f) => {
    const m = (Wa(s) ? pv : hv)(l, d, f, s),
      y = Ry(l, typeof s == 'string', n),
      v = s !== W.Fragment ? { ...y, ...m, ref: u } : {},
      { children: w } = l,
      P = W.useMemo(() => (Ze(w) ? w.get() : w), [w])
    return W.createElement(s, { ...v, children: P })
  }
}
function gv(n, i) {
  return function (l, { forwardMotionProps: u } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Wa(l) ? uv : cv),
      preloadedFeatures: n,
      useRender: mv(u),
      createVisualElement: i,
      Component: l,
    }
    return zy(f)
  }
}
function np(n, i) {
  if (!Array.isArray(i)) return !1
  const s = i.length
  if (s !== n.length) return !1
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1
  return !0
}
function Js(n, i, s) {
  const l = n.getProps()
  return Ha(l, i, s !== void 0 ? s : l.custom, n)
}
const yv = Ia(() => window.ScrollTimeline !== void 0)
class vv {
  constructor(i) {
    ;(this.stop = () => this.runAll('stop')),
      (this.animations = i.filter(Boolean))
  }
  get finished() {
    return Promise.all(
      this.animations.map((i) => ('finished' in i ? i.finished : i))
    )
  }
  getAll(i) {
    return this.animations[0][i]
  }
  setAll(i, s) {
    for (let l = 0; l < this.animations.length; l++) this.animations[l][i] = s
  }
  attachTimeline(i, s) {
    const l = this.animations.map((u) => {
      if (yv() && u.attachTimeline) return u.attachTimeline(i)
      if (typeof s == 'function') return s(u)
    })
    return () => {
      l.forEach((u, d) => {
        u && u(), this.animations[d].stop()
      })
    }
  }
  get time() {
    return this.getAll('time')
  }
  set time(i) {
    this.setAll('time', i)
  }
  get speed() {
    return this.getAll('speed')
  }
  set speed(i) {
    this.setAll('speed', i)
  }
  get startTime() {
    return this.getAll('startTime')
  }
  get duration() {
    let i = 0
    for (let s = 0; s < this.animations.length; s++)
      i = Math.max(i, this.animations[s].duration)
    return i
  }
  runAll(i) {
    this.animations.forEach((s) => s[i]())
  }
  flatten() {
    this.runAll('flatten')
  }
  play() {
    this.runAll('play')
  }
  pause() {
    this.runAll('pause')
  }
  cancel() {
    this.runAll('cancel')
  }
  complete() {
    this.runAll('complete')
  }
}
class xv extends vv {
  then(i, s) {
    return Promise.all(this.animations).then(i).catch(s)
  }
}
function Za(n, i) {
  return n ? n[i] || n.default || n : void 0
}
const ga = 2e4
function rp(n) {
  let i = 0
  const s = 50
  let l = n.next(i)
  for (; !l.done && i < ga; ) (i += s), (l = n.next(i))
  return i >= ga ? 1 / 0 : i
}
function ba(n) {
  return typeof n == 'function'
}
function Ed(n, i) {
  ;(n.timeline = i), (n.onfinish = null)
}
const Ja = (n) => Array.isArray(n) && typeof n[0] == 'number',
  wv = { linearEasing: void 0 }
function Sv(n, i) {
  const s = Ia(n)
  return () => {
    var l
    return (l = wv[i]) !== null && l !== void 0 ? l : s()
  }
}
const $s = Sv(() => {
    try {
      document
        .createElement('div')
        .animate({ opacity: 0 }, { easing: 'linear(0, 1)' })
    } catch {
      return !1
    }
    return !0
  }, 'linearEasing'),
  ip = (n, i, s = 10) => {
    let l = ''
    const u = Math.max(Math.round(i / s), 2)
    for (let d = 0; d < u; d++) l += n(mr(0, u - 1, d)) + ', '
    return `linear(${l.substring(0, l.length - 2)})`
  }
function sp(n) {
  return !!(
    (typeof n == 'function' && $s()) ||
    !n ||
    (typeof n == 'string' && (n in ya || $s())) ||
    Ja(n) ||
    (Array.isArray(n) && n.every(sp))
  )
}
const li = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  ya = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: li([0, 0.65, 0.55, 1]),
    circOut: li([0.55, 0, 1, 0.45]),
    backIn: li([0.31, 0.01, 0.66, -0.59]),
    backOut: li([0.33, 1.53, 0.69, 0.99]),
  }
function op(n, i) {
  if (n)
    return typeof n == 'function' && $s()
      ? ip(n, i)
      : Ja(n)
      ? li(n)
      : Array.isArray(n)
      ? n.map((s) => op(s, i) || ya.easeOut)
      : ya[n]
}
const At = { x: !1, y: !1 }
function lp() {
  return At.x || At.y
}
function ap(n, i, s) {
  var l
  if (n instanceof Element) return [n]
  if (typeof n == 'string') {
    let u = document
    const d = (l = void 0) !== null && l !== void 0 ? l : u.querySelectorAll(n)
    return d ? Array.from(d) : []
  }
  return Array.from(n)
}
function up(n, i) {
  const s = ap(n),
    l = new AbortController(),
    u = { passive: !0, ...i, signal: l.signal }
  return [s, u, () => l.abort()]
}
function jd(n) {
  return (i) => {
    i.pointerType === 'touch' || lp() || n(i)
  }
}
function Pv(n, i, s = {}) {
  const [l, u, d] = up(n, s),
    f = jd((p) => {
      const { target: m } = p,
        y = i(p)
      if (typeof y != 'function' || !m) return
      const v = jd((w) => {
        y(w), m.removeEventListener('pointerleave', v)
      })
      m.addEventListener('pointerleave', v, u)
    })
  return (
    l.forEach((p) => {
      p.addEventListener('pointerenter', f, u)
    }),
    d
  )
}
const cp = (n, i) => (i ? (n === i ? !0 : cp(n, i.parentElement)) : !1),
  eu = (n) =>
    n.pointerType === 'mouse'
      ? typeof n.button != 'number' || n.button <= 0
      : n.isPrimary !== !1,
  Tv = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A'])
function Cv(n) {
  return Tv.has(n.tagName) || n.tabIndex !== -1
}
const ai = new WeakSet()
function Md(n) {
  return (i) => {
    i.key === 'Enter' && n(i)
  }
}
function na(n, i) {
  n.dispatchEvent(
    new PointerEvent('pointer' + i, { isPrimary: !0, bubbles: !0 })
  )
}
const kv = (n, i) => {
  const s = n.currentTarget
  if (!s) return
  const l = Md(() => {
    if (ai.has(s)) return
    na(s, 'down')
    const u = Md(() => {
        na(s, 'up')
      }),
      d = () => na(s, 'cancel')
    s.addEventListener('keyup', u, i), s.addEventListener('blur', d, i)
  })
  s.addEventListener('keydown', l, i),
    s.addEventListener('blur', () => s.removeEventListener('keydown', l), i)
}
function Ad(n) {
  return eu(n) && !lp()
}
function Ev(n, i, s = {}) {
  const [l, u, d] = up(n, s),
    f = (p) => {
      const m = p.currentTarget
      if (!Ad(p) || ai.has(m)) return
      ai.add(m)
      const y = i(p),
        v = (D, k) => {
          window.removeEventListener('pointerup', w),
            window.removeEventListener('pointercancel', P),
            !(!Ad(D) || !ai.has(m)) &&
              (ai.delete(m), typeof y == 'function' && y(D, { success: k }))
        },
        w = (D) => {
          v(D, s.useGlobalTarget || cp(m, D.target))
        },
        P = (D) => {
          v(D, !1)
        }
      window.addEventListener('pointerup', w, u),
        window.addEventListener('pointercancel', P, u)
    }
  return (
    l.forEach((p) => {
      !Cv(p) && p.getAttribute('tabindex') === null && (p.tabIndex = 0),
        (s.useGlobalTarget ? window : p).addEventListener('pointerdown', f, u),
        p.addEventListener('focus', (y) => kv(y, u), u)
    }),
    d
  )
}
function jv(n) {
  return n === 'x' || n === 'y'
    ? At[n]
      ? null
      : ((At[n] = !0),
        () => {
          At[n] = !1
        })
    : At.x || At.y
    ? null
    : ((At.x = At.y = !0),
      () => {
        At.x = At.y = !1
      })
}
const fp = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', ...vr])
let zs
function Mv() {
  zs = void 0
}
const It = {
  now: () => (
    zs === void 0 &&
      It.set(
        $e.isProcessing || Cy.useManualTiming ? $e.timestamp : performance.now()
      ),
    zs
  ),
  set: (n) => {
    ;(zs = n), queueMicrotask(Mv)
  },
}
function tu(n, i) {
  n.indexOf(i) === -1 && n.push(i)
}
function nu(n, i) {
  const s = n.indexOf(i)
  s > -1 && n.splice(s, 1)
}
class ru {
  constructor() {
    this.subscriptions = []
  }
  add(i) {
    return tu(this.subscriptions, i), () => nu(this.subscriptions, i)
  }
  notify(i, s, l) {
    const u = this.subscriptions.length
    if (u)
      if (u === 1) this.subscriptions[0](i, s, l)
      else
        for (let d = 0; d < u; d++) {
          const f = this.subscriptions[d]
          f && f(i, s, l)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
function dp(n, i) {
  return i ? n * (1e3 / i) : 0
}
const Rd = 30,
  Av = (n) => !isNaN(parseFloat(n))
class Rv {
  constructor(i, s = {}) {
    ;(this.version = '11.18.0'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l, u = !0) => {
        const d = It.now()
        this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          u &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current)
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner)
  }
  setCurrent(i) {
    ;(this.current = i),
      (this.updatedAt = It.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = Av(this.current))
  }
  setPrevFrameValue(i = this.current) {
    ;(this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt)
  }
  onChange(i) {
    return this.on('change', i)
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new ru())
    const l = this.events[i].add(s)
    return i === 'change'
      ? () => {
          l(),
            xe.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : l
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear()
  }
  attach(i, s) {
    ;(this.passiveEffect = i), (this.stopPassiveEffect = s)
  }
  set(i, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(i, s)
      : this.passiveEffect(i, this.updateAndNotify)
  }
  setWithVelocity(i, s, l) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - l)
  }
  jump(i, s = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const i = It.now()
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Rd
    )
      return 0
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Rd)
    return dp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        ;(this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      })
    )
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function gi(n, i) {
  return new Rv(n, i)
}
function Nv(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, gi(s))
}
function Dv(n, i) {
  const s = Js(n, i)
  let { transitionEnd: l = {}, transition: u = {}, ...d } = s || {}
  d = { ...d, ...l }
  for (const f in d) {
    const p = Ky(d[f])
    Nv(n, f, p)
  }
}
function Lv(n) {
  return !!(Ze(n) && n.add)
}
function va(n, i) {
  const s = n.getValue('willChange')
  if (Lv(s)) return s.add(i)
}
function hp(n) {
  return n.props[Wh]
}
const pp = (n, i, s) =>
    (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Vv = 1e-7,
  _v = 12
function Ov(n, i, s, l, u) {
  let d,
    f,
    p = 0
  do (f = i + (s - i) / 2), (d = pp(f, l, u) - n), d > 0 ? (s = f) : (i = f)
  while (Math.abs(d) > Vv && ++p < _v)
  return f
}
function wi(n, i, s, l) {
  if (n === i && s === l) return dt
  const u = (d) => Ov(d, 0, 1, n, s)
  return (d) => (d === 0 || d === 1 ? d : pp(u(d), i, l))
}
const mp = (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2,
  gp = (n) => (i) => 1 - n(1 - i),
  yp = wi(0.33, 1.53, 0.69, 0.99),
  iu = gp(yp),
  vp = mp(iu),
  xp = (n) =>
    (n *= 2) < 1 ? 0.5 * iu(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  su = (n) => 1 - Math.sin(Math.acos(n)),
  wp = gp(su),
  Sp = mp(su),
  Pp = (n) => /^0[^.\s]+$/u.test(n)
function Iv(n) {
  return typeof n == 'number'
    ? n === 0
    : n !== null
    ? n === 'none' || n === '0' || Pp(n)
    : !0
}
const ci = (n) => Math.round(n * 1e5) / 1e5,
  ou = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
function Fv(n) {
  return n == null
}
const zv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  lu = (n, i) => (s) =>
    !!(
      (typeof s == 'string' && zv.test(s) && s.startsWith(n)) ||
      (i && !Fv(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  Tp = (n, i, s) => (l) => {
    if (typeof l != 'string') return l
    const [u, d, f, p] = l.match(ou)
    return {
      [n]: parseFloat(u),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    }
  },
  Bv = (n) => Xt(0, 255, n),
  ra = { ...xr, transform: (n) => Math.round(Bv(n)) },
  _n = {
    test: lu('rgb', 'red'),
    parse: Tp('red', 'green', 'blue'),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      'rgba(' +
      ra.transform(n) +
      ', ' +
      ra.transform(i) +
      ', ' +
      ra.transform(s) +
      ', ' +
      ci(mi.transform(l)) +
      ')',
  }
function Uv(n) {
  let i = '',
    s = '',
    l = '',
    u = ''
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (l = n.substring(5, 7)),
        (u = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (l = n.substring(3, 4)),
        (u = n.substring(4, 5)),
        (i += i),
        (s += s),
        (l += l),
        (u += u)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(l, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  )
}
const xa = { test: lu('#'), parse: Uv, transform: _n.transform },
  cr = {
    test: lu('hsl', 'hue'),
    parse: Tp('hue', 'saturation', 'lightness'),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      'hsla(' +
      Math.round(n) +
      ', ' +
      Ot.transform(ci(i)) +
      ', ' +
      Ot.transform(ci(s)) +
      ', ' +
      ci(mi.transform(l)) +
      ')',
  },
  qe = {
    test: (n) => _n.test(n) || xa.test(n) || cr.test(n),
    parse: (n) =>
      _n.test(n) ? _n.parse(n) : cr.test(n) ? cr.parse(n) : xa.parse(n),
    transform: (n) =>
      typeof n == 'string'
        ? n
        : n.hasOwnProperty('red')
        ? _n.transform(n)
        : cr.transform(n),
  },
  Wv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
function Hv(n) {
  var i, s
  return (
    isNaN(n) &&
    typeof n == 'string' &&
    (((i = n.match(ou)) === null || i === void 0 ? void 0 : i.length) || 0) +
      (((s = n.match(Wv)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  )
}
const Cp = 'number',
  kp = 'color',
  $v = 'var',
  Kv = 'var(',
  Nd = '${}',
  Yv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function yi(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    u = []
  let d = 0
  const p = i
    .replace(
      Yv,
      (m) => (
        qe.test(m)
          ? (l.color.push(d), u.push(kp), s.push(qe.parse(m)))
          : m.startsWith(Kv)
          ? (l.var.push(d), u.push($v), s.push(m))
          : (l.number.push(d), u.push(Cp), s.push(parseFloat(m))),
        ++d,
        Nd
      )
    )
    .split(Nd)
  return { values: s, split: p, indexes: l, types: u }
}
function Ep(n) {
  return yi(n).values
}
function jp(n) {
  const { split: i, types: s } = yi(n),
    l = i.length
  return (u) => {
    let d = ''
    for (let f = 0; f < l; f++)
      if (((d += i[f]), u[f] !== void 0)) {
        const p = s[f]
        p === Cp
          ? (d += ci(u[f]))
          : p === kp
          ? (d += qe.transform(u[f]))
          : (d += u[f])
      }
    return d
  }
}
const Gv = (n) => (typeof n == 'number' ? 0 : n)
function Xv(n) {
  const i = Ep(n)
  return jp(n)(i.map(Gv))
}
const yn = {
    test: Hv,
    parse: Ep,
    createTransformer: jp,
    getAnimatableNone: Xv,
  },
  Qv = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function qv(n) {
  const [i, s] = n.slice(0, -1).split('(')
  if (i === 'drop-shadow') return n
  const [l] = s.match(ou) || []
  if (!l) return n
  const u = s.replace(l, '')
  let d = Qv.has(i) ? 1 : 0
  return l !== s && (d *= 100), i + '(' + d + u + ')'
}
const Zv = /\b([a-z-]*)\(.*?\)/gu,
  wa = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(Zv)
      return i ? i.map(qv).join(' ') : n
    },
  },
  bv = {
    ...Ka,
    color: qe,
    backgroundColor: qe,
    outlineColor: qe,
    fill: qe,
    stroke: qe,
    borderColor: qe,
    borderTopColor: qe,
    borderRightColor: qe,
    borderBottomColor: qe,
    borderLeftColor: qe,
    filter: wa,
    WebkitFilter: wa,
  },
  au = (n) => bv[n]
function Mp(n, i) {
  let s = au(n)
  return (
    s !== wa && (s = yn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
  )
}
const Jv = new Set(['auto', 'none', '0'])
function e0(n, i, s) {
  let l = 0,
    u
  for (; l < n.length && !u; ) {
    const d = n[l]
    typeof d == 'string' && !Jv.has(d) && yi(d).values.length && (u = n[l]), l++
  }
  if (u && s) for (const d of i) n[d] = Mp(s, u)
}
const Dd = (n) => n === xr || n === te,
  Ld = (n, i) => parseFloat(n.split(', ')[i]),
  Vd =
    (n, i) =>
    (s, { transform: l }) => {
      if (l === 'none' || !l) return 0
      const u = l.match(/^matrix3d\((.+)\)$/u)
      if (u) return Ld(u[1], i)
      {
        const d = l.match(/^matrix\((.+)\)$/u)
        return d ? Ld(d[1], n) : 0
      }
    },
  t0 = new Set(['x', 'y', 'z']),
  n0 = vr.filter((n) => !t0.has(n))
function r0(n) {
  const i = []
  return (
    n0.forEach((s) => {
      const l = n.getValue(s)
      l !== void 0 &&
        (i.push([s, l.get()]), l.set(s.startsWith('scale') ? 1 : 0))
    }),
    i
  )
}
const yr = {
  width: ({ x: n }, { paddingLeft: i = '0', paddingRight: s = '0' }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = '0', paddingBottom: s = '0' }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: Vd(4, 13),
  y: Vd(5, 14),
}
yr.translateX = yr.x
yr.translateY = yr.y
const On = new Set()
let Sa = !1,
  Pa = !1
function Ap() {
  if (Pa) {
    const n = Array.from(On).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map()
    i.forEach((l) => {
      const u = r0(l)
      u.length && (s.set(l, u), l.render())
    }),
      n.forEach((l) => l.measureInitialState()),
      i.forEach((l) => {
        l.render()
        const u = s.get(l)
        u &&
          u.forEach(([d, f]) => {
            var p
            ;(p = l.getValue(d)) === null || p === void 0 || p.set(f)
          })
      }),
      n.forEach((l) => l.measureEndState()),
      n.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY)
      })
  }
  ;(Pa = !1), (Sa = !1), On.forEach((n) => n.complete()), On.clear()
}
function Rp() {
  On.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Pa = !0)
  })
}
function i0() {
  Rp(), Ap()
}
class uu {
  constructor(i, s, l, u, d, f = !1) {
    ;(this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = l),
      (this.motionValue = u),
      (this.element = d),
      (this.isAsync = f)
  }
  scheduleResolve() {
    ;(this.isScheduled = !0),
      this.isAsync
        ? (On.add(this),
          Sa || ((Sa = !0), xe.read(Rp), xe.resolveKeyframes(Ap)))
        : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: s, element: l, motionValue: u } = this
    for (let d = 0; d < i.length; d++)
      if (i[d] === null)
        if (d === 0) {
          const f = u == null ? void 0 : u.get(),
            p = i[i.length - 1]
          if (f !== void 0) i[0] = f
          else if (l && s) {
            const m = l.readValue(s, p)
            m != null && (i[0] = m)
          }
          i[0] === void 0 && (i[0] = p), u && f === void 0 && u.set(i[0])
        } else i[d] = i[d - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ;(this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      On.delete(this)
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), On.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const Np = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  s0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function o0(n) {
  const i = s0.exec(n)
  if (!i) return [,]
  const [, s, l, u] = i
  return [`--${s ?? l}`, u]
}
function Dp(n, i, s = 1) {
  const [l, u] = o0(n)
  if (!l) return
  const d = window.getComputedStyle(i).getPropertyValue(l)
  if (d) {
    const f = d.trim()
    return Np(f) ? parseFloat(f) : f
  }
  return $a(u) ? Dp(u, i, s + 1) : u
}
const Lp = (n) => (i) => i.test(n),
  l0 = { test: (n) => n === 'auto', parse: (n) => n },
  Vp = [xr, te, Ot, mn, Zy, qy, l0],
  _d = (n) => Vp.find(Lp(n))
class _p extends uu {
  constructor(i, s, l, u, d) {
    super(i, s, l, u, d, !0)
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this
    if (!s || !s.current) return
    super.readKeyframes()
    for (let m = 0; m < i.length; m++) {
      let y = i[m]
      if (typeof y == 'string' && ((y = y.trim()), $a(y))) {
        const v = Dp(y, s.current)
        v !== void 0 && (i[m] = v),
          m === i.length - 1 && (this.finalKeyframe = y)
      }
    }
    if ((this.resolveNoneKeyframes(), !fp.has(l) || i.length !== 2)) return
    const [u, d] = i,
      f = _d(u),
      p = _d(d)
    if (f !== p)
      if (Dd(f) && Dd(p))
        for (let m = 0; m < i.length; m++) {
          const y = i[m]
          typeof y == 'string' && (i[m] = parseFloat(y))
        }
      else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = []
    for (let u = 0; u < i.length; u++) Iv(i[u]) && l.push(u)
    l.length && e0(i, l, s)
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this
    if (!i || !i.current) return
    l === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = yr[l](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
      (s[0] = this.measuredOrigin)
    const u = s[s.length - 1]
    u !== void 0 && i.getValue(l, u).jump(u, !1)
  }
  measureEndState() {
    var i
    const { element: s, name: l, unresolvedKeyframes: u } = this
    if (!s || !s.current) return
    const d = s.getValue(l)
    d && d.jump(this.measuredOrigin, !1)
    const f = u.length - 1,
      p = u[f]
    ;(u[f] = yr[l](s.measureViewportBox(), window.getComputedStyle(s.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((i = this.removedTransforms) === null || i === void 0) &&
        i.length &&
        this.removedTransforms.forEach(([m, y]) => {
          s.getValue(m).set(y)
        }),
      this.resolveNoneKeyframes()
  }
}
const Od = (n, i) =>
  i === 'zIndex'
    ? !1
    : !!(
        typeof n == 'number' ||
        Array.isArray(n) ||
        (typeof n == 'string' &&
          (yn.test(n) || n === '0') &&
          !n.startsWith('url('))
      )
function a0(n) {
  const i = n[0]
  if (n.length === 1) return !0
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0
}
function u0(n, i, s, l) {
  const u = n[0]
  if (u === null) return !1
  if (i === 'display' || i === 'visibility') return !0
  const d = n[n.length - 1],
    f = Od(u, i),
    p = Od(d, i)
  return !f || !p ? !1 : a0(n) || ((s === 'spring' || ba(s)) && l)
}
const c0 = (n) => n !== null
function eo(n, { repeat: i, repeatType: s = 'loop' }, l) {
  const u = n.filter(c0),
    d = i && s !== 'loop' && i % 2 === 1 ? 0 : u.length - 1
  return !d || l === void 0 ? u[d] : l
}
const f0 = 40
class Op {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: l = 'keyframes',
    repeat: u = 0,
    repeatDelay: d = 0,
    repeatType: f = 'loop',
    ...p
  }) {
    ;(this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = It.now()),
      (this.options = {
        autoplay: i,
        delay: s,
        type: l,
        repeat: u,
        repeatDelay: d,
        repeatType: f,
        ...p,
      }),
      this.updateFinishedPromise()
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > f0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && i0(), this._resolved
  }
  onKeyframesResolved(i, s) {
    ;(this.resolvedAt = It.now()), (this.hasAttemptedResolve = !0)
    const {
      name: l,
      type: u,
      velocity: d,
      delay: f,
      onComplete: p,
      onUpdate: m,
      isGenerator: y,
    } = this.options
    if (!y && !u0(i, l, u, d))
      if (f) this.options.duration = 0
      else {
        m == null || m(eo(i, this.options, s)),
          p == null || p(),
          this.resolveFinishedPromise()
        return
      }
    const v = this.initPlayback(i, s)
    v !== !1 &&
      ((this._resolved = { keyframes: i, finalKeyframe: s, ...v }),
      this.onPostResolved())
  }
  onPostResolved() {}
  then(i, s) {
    return this.currentFinishedPromise.then(i, s)
  }
  flatten() {
    ;(this.options.type = 'keyframes'), (this.options.ease = 'linear')
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((i) => {
      this.resolveFinishedPromise = i
    })
  }
}
const ke = (n, i, s) => n + (i - n) * s
function ia(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? n + (i - n) * 6 * s
      : s < 1 / 2
      ? i
      : s < 2 / 3
      ? n + (i - n) * (2 / 3 - s) * 6
      : n
  )
}
function d0({ hue: n, saturation: i, lightness: s, alpha: l }) {
  ;(n /= 360), (i /= 100), (s /= 100)
  let u = 0,
    d = 0,
    f = 0
  if (!i) u = d = f = s
  else {
    const p = s < 0.5 ? s * (1 + i) : s + i - s * i,
      m = 2 * s - p
    ;(u = ia(m, p, n + 1 / 3)), (d = ia(m, p, n)), (f = ia(m, p, n - 1 / 3))
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: l,
  }
}
function Ks(n, i) {
  return (s) => (s > 0 ? i : n)
}
const sa = (n, i, s) => {
    const l = n * n,
      u = s * (i * i - l) + l
    return u < 0 ? 0 : Math.sqrt(u)
  },
  h0 = [xa, _n, cr],
  p0 = (n) => h0.find((i) => i.test(n))
function Id(n) {
  const i = p0(n)
  if (!i) return !1
  let s = i.parse(n)
  return i === cr && (s = d0(s)), s
}
const Fd = (n, i) => {
    const s = Id(n),
      l = Id(i)
    if (!s || !l) return Ks(n, i)
    const u = { ...s }
    return (d) => (
      (u.red = sa(s.red, l.red, d)),
      (u.green = sa(s.green, l.green, d)),
      (u.blue = sa(s.blue, l.blue, d)),
      (u.alpha = ke(s.alpha, l.alpha, d)),
      _n.transform(u)
    )
  },
  m0 = (n, i) => (s) => i(n(s)),
  Si = (...n) => n.reduce(m0),
  Ta = new Set(['none', 'hidden'])
function g0(n, i) {
  return Ta.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n)
}
function y0(n, i) {
  return (s) => ke(n, i, s)
}
function cu(n) {
  return typeof n == 'number'
    ? y0
    : typeof n == 'string'
    ? $a(n)
      ? Ks
      : qe.test(n)
      ? Fd
      : w0
    : Array.isArray(n)
    ? Ip
    : typeof n == 'object'
    ? qe.test(n)
      ? Fd
      : v0
    : Ks
}
function Ip(n, i) {
  const s = [...n],
    l = s.length,
    u = n.map((d, f) => cu(d)(d, i[f]))
  return (d) => {
    for (let f = 0; f < l; f++) s[f] = u[f](d)
    return s
  }
}
function v0(n, i) {
  const s = { ...n, ...i },
    l = {}
  for (const u in s)
    n[u] !== void 0 && i[u] !== void 0 && (l[u] = cu(n[u])(n[u], i[u]))
  return (u) => {
    for (const d in l) s[d] = l[d](u)
    return s
  }
}
function x0(n, i) {
  var s
  const l = [],
    u = { color: 0, var: 0, number: 0 }
  for (let d = 0; d < i.values.length; d++) {
    const f = i.types[d],
      p = n.indexes[f][u[f]],
      m = (s = n.values[p]) !== null && s !== void 0 ? s : 0
    ;(l[d] = m), u[f]++
  }
  return l
}
const w0 = (n, i) => {
  const s = yn.createTransformer(i),
    l = yi(n),
    u = yi(i)
  return l.indexes.var.length === u.indexes.var.length &&
    l.indexes.color.length === u.indexes.color.length &&
    l.indexes.number.length >= u.indexes.number.length
    ? (Ta.has(n) && !u.values.length) || (Ta.has(i) && !l.values.length)
      ? g0(n, i)
      : Si(Ip(x0(l, u), u.values), s)
    : Ks(n, i)
}
function Fp(n, i, s) {
  return typeof n == 'number' && typeof i == 'number' && typeof s == 'number'
    ? ke(n, i, s)
    : cu(n)(n, i)
}
const S0 = 5
function zp(n, i, s) {
  const l = Math.max(i - S0, 0)
  return dp(s - n(l), i - l)
}
const je = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  zd = 0.001
function P0({
  duration: n = je.duration,
  bounce: i = je.bounce,
  velocity: s = je.velocity,
  mass: l = je.mass,
}) {
  let u,
    d,
    f = 1 - i
  ;(f = Xt(je.minDamping, je.maxDamping, f)),
    (n = Xt(je.minDuration, je.maxDuration, Gt(n))),
    f < 1
      ? ((u = (y) => {
          const v = y * f,
            w = v * n,
            P = v - s,
            D = Ca(y, f),
            k = Math.exp(-w)
          return zd - (P / D) * k
        }),
        (d = (y) => {
          const w = y * f * n,
            P = w * s + s,
            D = Math.pow(f, 2) * Math.pow(y, 2) * n,
            k = Math.exp(-w),
            C = Ca(Math.pow(y, 2), f)
          return ((-u(y) + zd > 0 ? -1 : 1) * ((P - D) * k)) / C
        }))
      : ((u = (y) => {
          const v = Math.exp(-y * n),
            w = (y - s) * n + 1
          return -0.001 + v * w
        }),
        (d = (y) => {
          const v = Math.exp(-y * n),
            w = (s - y) * (n * n)
          return v * w
        }))
  const p = 5 / n,
    m = C0(u, d, p)
  if (((n = Yt(n)), isNaN(m)))
    return { stiffness: je.stiffness, damping: je.damping, duration: n }
  {
    const y = Math.pow(m, 2) * l
    return { stiffness: y, damping: f * 2 * Math.sqrt(l * y), duration: n }
  }
}
const T0 = 12
function C0(n, i, s) {
  let l = s
  for (let u = 1; u < T0; u++) l = l - n(l) / i(l)
  return l
}
function Ca(n, i) {
  return n * Math.sqrt(1 - i * i)
}
const k0 = ['duration', 'bounce'],
  E0 = ['stiffness', 'damping', 'mass']
function Bd(n, i) {
  return i.some((s) => n[s] !== void 0)
}
function j0(n) {
  let i = {
    velocity: je.velocity,
    stiffness: je.stiffness,
    damping: je.damping,
    mass: je.mass,
    isResolvedFromDuration: !1,
    ...n,
  }
  if (!Bd(n, E0) && Bd(n, k0))
    if (n.visualDuration) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        u = l * l,
        d = 2 * Xt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u)
      i = { ...i, mass: je.mass, stiffness: u, damping: d }
    } else {
      const s = P0(n)
      ;(i = { ...i, ...s, mass: je.mass }), (i.isResolvedFromDuration = !0)
    }
  return i
}
function Bp(n = je.visualDuration, i = je.bounce) {
  const s =
    typeof n != 'object'
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n
  let { restSpeed: l, restDelta: u } = s
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: v,
      duration: w,
      velocity: P,
      isResolvedFromDuration: D,
    } = j0({ ...s, velocity: -Gt(s.velocity || 0) }),
    k = P || 0,
    C = y / (2 * Math.sqrt(m * v)),
    A = f - d,
    N = Gt(Math.sqrt(m / v)),
    z = Math.abs(A) < 5
  l || (l = z ? je.restSpeed.granular : je.restSpeed.default),
    u || (u = z ? je.restDelta.granular : je.restDelta.default)
  let B
  if (C < 1) {
    const U = Ca(N, C)
    B = (b) => {
      const ie = Math.exp(-C * N * b)
      return (
        f - ie * (((k + C * N * A) / U) * Math.sin(U * b) + A * Math.cos(U * b))
      )
    }
  } else if (C === 1) B = (U) => f - Math.exp(-N * U) * (A + (k + N * A) * U)
  else {
    const U = N * Math.sqrt(C * C - 1)
    B = (b) => {
      const ie = Math.exp(-C * N * b),
        q = Math.min(U * b, 300)
      return (
        f - (ie * ((k + C * N * A) * Math.sinh(q) + U * A * Math.cosh(q))) / U
      )
    }
  }
  const G = {
    calculatedDuration: (D && w) || null,
    next: (U) => {
      const b = B(U)
      if (D) p.done = U >= w
      else {
        let ie = 0
        C < 1 && (ie = U === 0 ? Yt(k) : zp(B, U, b))
        const q = Math.abs(ie) <= l,
          pe = Math.abs(f - b) <= u
        p.done = q && pe
      }
      return (p.value = p.done ? f : b), p
    },
    toString: () => {
      const U = Math.min(rp(G), ga),
        b = ip((ie) => G.next(U * ie).value, U, 30)
      return U + 'ms ' + b
    },
  }
  return G
}
function Ud({
  keyframes: n,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: l = 325,
  bounceDamping: u = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: y = 0.5,
  restSpeed: v,
}) {
  const w = n[0],
    P = { done: !1, value: w },
    D = (q) => (p !== void 0 && q < p) || (m !== void 0 && q > m),
    k = (q) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - q) < Math.abs(m - q)
        ? p
        : m
  let C = s * i
  const A = w + C,
    N = f === void 0 ? A : f(A)
  N !== A && (C = N - w)
  const z = (q) => -C * Math.exp(-q / l),
    B = (q) => N + z(q),
    G = (q) => {
      const pe = z(q),
        we = B(q)
      ;(P.done = Math.abs(pe) <= y), (P.value = P.done ? N : we)
    }
  let U, b
  const ie = (q) => {
    D(P.value) &&
      ((U = q),
      (b = Bp({
        keyframes: [P.value, k(P.value)],
        velocity: zp(B, q, P.value),
        damping: u,
        stiffness: d,
        restDelta: y,
        restSpeed: v,
      })))
  }
  return (
    ie(0),
    {
      calculatedDuration: null,
      next: (q) => {
        let pe = !1
        return (
          !b && U === void 0 && ((pe = !0), G(q), ie(q)),
          U !== void 0 && q >= U ? b.next(q - U) : (!pe && G(q), P)
        )
      },
    }
  )
}
const M0 = wi(0.42, 0, 1, 1),
  A0 = wi(0, 0, 0.58, 1),
  Up = wi(0.42, 0, 0.58, 1),
  R0 = (n) => Array.isArray(n) && typeof n[0] != 'number',
  Wd = {
    linear: dt,
    easeIn: M0,
    easeInOut: Up,
    easeOut: A0,
    circIn: su,
    circInOut: Sp,
    circOut: wp,
    backIn: iu,
    backInOut: vp,
    backOut: yp,
    anticipate: xp,
  },
  Hd = (n) => {
    if (Ja(n)) {
      pa(n.length === 4)
      const [i, s, l, u] = n
      return wi(i, s, l, u)
    } else if (typeof n == 'string') return pa(Wd[n] !== void 0), Wd[n]
    return n
  }
function N0(n, i, s) {
  const l = [],
    u = s || Fp,
    d = n.length - 1
  for (let f = 0; f < d; f++) {
    let p = u(n[f], n[f + 1])
    if (i) {
      const m = Array.isArray(i) ? i[f] || dt : i
      p = Si(m, p)
    }
    l.push(p)
  }
  return l
}
function D0(n, i, { clamp: s = !0, ease: l, mixer: u } = {}) {
  const d = n.length
  if ((pa(d === i.length), d === 1)) return () => i[0]
  if (d === 2 && i[0] === i[1]) return () => i[1]
  const f = n[0] === n[1]
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()))
  const p = N0(i, l, u),
    m = p.length,
    y = (v) => {
      if (f && v < n[0]) return i[0]
      let w = 0
      if (m > 1) for (; w < n.length - 2 && !(v < n[w + 1]); w++);
      const P = mr(n[w], n[w + 1], v)
      return p[w](P)
    }
  return s ? (v) => y(Xt(n[0], n[d - 1], v)) : y
}
function L0(n, i) {
  const s = n[n.length - 1]
  for (let l = 1; l <= i; l++) {
    const u = mr(0, i, l)
    n.push(ke(s, 1, u))
  }
}
function V0(n) {
  const i = [0]
  return L0(i, n.length - 1), i
}
function _0(n, i) {
  return n.map((s) => s * i)
}
function O0(n, i) {
  return n.map(() => i || Up).splice(0, n.length - 1)
}
function Ys({
  duration: n = 300,
  keyframes: i,
  times: s,
  ease: l = 'easeInOut',
}) {
  const u = R0(l) ? l.map(Hd) : Hd(l),
    d = { done: !1, value: i[0] },
    f = _0(s && s.length === i.length ? s : V0(i), n),
    p = D0(f, i, { ease: Array.isArray(u) ? u : O0(i, u) })
  return {
    calculatedDuration: n,
    next: (m) => ((d.value = p(m)), (d.done = m >= n), d),
  }
}
const I0 = (n) => {
    const i = ({ timestamp: s }) => n(s)
    return {
      start: () => xe.update(i, !0),
      stop: () => gn(i),
      now: () => ($e.isProcessing ? $e.timestamp : It.now()),
    }
  },
  F0 = { decay: Ud, inertia: Ud, tween: Ys, keyframes: Ys, spring: Bp },
  z0 = (n) => n / 100
class fu extends Op {
  constructor(i) {
    super(i),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')
        )
          return
        this.teardown()
        const { onStop: m } = this.options
        m && m()
      })
    const { name: s, motionValue: l, element: u, keyframes: d } = this.options,
      f = (u == null ? void 0 : u.KeyframeResolver) || uu,
      p = (m, y) => this.onKeyframesResolved(m, y)
    ;(this.resolver = new f(d, p, s, l, u)), this.resolver.scheduleResolve()
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        )
  }
  initPlayback(i) {
    const {
        type: s = 'keyframes',
        repeat: l = 0,
        repeatDelay: u = 0,
        repeatType: d,
        velocity: f = 0,
      } = this.options,
      p = ba(s) ? s : F0[s] || Ys
    let m, y
    p !== Ys &&
      typeof i[0] != 'number' &&
      ((m = Si(z0, Fp(i[0], i[1]))), (i = [0, 100]))
    const v = p({ ...this.options, keyframes: i })
    d === 'mirror' &&
      (y = p({ ...this.options, keyframes: [...i].reverse(), velocity: -f })),
      v.calculatedDuration === null && (v.calculatedDuration = rp(v))
    const { calculatedDuration: w } = v,
      P = w + u,
      D = P * (l + 1) - u
    return {
      generator: v,
      mirroredGenerator: y,
      mapPercentToKeyframes: m,
      calculatedDuration: w,
      resolvedDuration: P,
      totalDuration: D,
    }
  }
  onPostResolved() {
    const { autoplay: i = !0 } = this.options
    this.play(),
      this.pendingPlayState === 'paused' || !i
        ? this.pause()
        : (this.state = this.pendingPlayState)
  }
  tick(i, s = !1) {
    const { resolved: l } = this
    if (!l) {
      const { keyframes: q } = this.options
      return { done: !0, value: q[q.length - 1] }
    }
    const {
      finalKeyframe: u,
      generator: d,
      mirroredGenerator: f,
      mapPercentToKeyframes: p,
      keyframes: m,
      calculatedDuration: y,
      totalDuration: v,
      resolvedDuration: w,
    } = l
    if (this.startTime === null) return d.next(0)
    const {
      delay: P,
      repeat: D,
      repeatType: k,
      repeatDelay: C,
      onUpdate: A,
    } = this.options
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - v / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(i - this.startTime) * this.speed)
    const N = this.currentTime - P * (this.speed >= 0 ? 1 : -1),
      z = this.speed >= 0 ? N < 0 : N > v
    ;(this.currentTime = Math.max(N, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = v)
    let B = this.currentTime,
      G = d
    if (D) {
      const q = Math.min(this.currentTime, v) / w
      let pe = Math.floor(q),
        we = q % 1
      !we && q >= 1 && (we = 1),
        we === 1 && pe--,
        (pe = Math.min(pe, D + 1)),
        !!(pe % 2) &&
          (k === 'reverse'
            ? ((we = 1 - we), C && (we -= C / w))
            : k === 'mirror' && (G = f)),
        (B = Xt(0, 1, we) * w)
    }
    const U = z ? { done: !1, value: m[0] } : G.next(B)
    p && (U.value = p(U.value))
    let { done: b } = U
    !z &&
      y !== null &&
      (b = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0)
    const ie =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && b))
    return (
      ie && u !== void 0 && (U.value = eo(m, this.options, u)),
      A && A(U.value),
      ie && this.finish(),
      U
    )
  }
  get duration() {
    const { resolved: i } = this
    return i ? Gt(i.calculatedDuration) : 0
  }
  get time() {
    return Gt(this.currentTime)
  }
  set time(i) {
    ;(i = Yt(i)),
      (this.currentTime = i),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = i)
        : this.driver && (this.startTime = this.driver.now() - i / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(i) {
    const s = this.playbackSpeed !== i
    ;(this.playbackSpeed = i), s && (this.time = Gt(this.currentTime))
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = 'running'
      return
    }
    if (this.isStopped) return
    const { driver: i = I0, onPlay: s, startTime: l } = this.options
    this.driver || (this.driver = i((d) => this.tick(d))), s && s()
    const u = this.driver.now()
    this.holdTime !== null
      ? (this.startTime = u - this.holdTime)
      : this.startTime
      ? this.state === 'finished' && (this.startTime = u)
      : (this.startTime = l ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start()
  }
  pause() {
    var i
    if (!this._resolved) {
      this.pendingPlayState = 'paused'
      return
    }
    ;(this.state = 'paused'),
      (this.holdTime = (i = this.currentTime) !== null && i !== void 0 ? i : 0)
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null)
  }
  finish() {
    this.teardown(), (this.state = 'finished')
    const { onComplete: i } = this.options
    i && i()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise()
  }
  teardown() {
    ;(this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0))
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0)
  }
}
const B0 = new Set(['opacity', 'clipPath', 'filter', 'transform'])
function U0(
  n,
  i,
  s,
  {
    delay: l = 0,
    duration: u = 300,
    repeat: d = 0,
    repeatType: f = 'loop',
    ease: p = 'easeInOut',
    times: m,
  } = {}
) {
  const y = { [i]: s }
  m && (y.offset = m)
  const v = op(p, u)
  return (
    Array.isArray(v) && (y.easing = v),
    n.animate(y, {
      delay: l,
      duration: u,
      easing: Array.isArray(v) ? 'linear' : v,
      fill: 'both',
      iterations: d + 1,
      direction: f === 'reverse' ? 'alternate' : 'normal',
    })
  )
}
const W0 = Ia(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  Gs = 10,
  H0 = 2e4
function $0(n) {
  return ba(n.type) || n.type === 'spring' || !sp(n.ease)
}
function K0(n, i) {
  const s = new fu({ ...i, keyframes: n, repeat: 0, delay: 0, isGenerator: !0 })
  let l = { done: !1, value: n[0] }
  const u = []
  let d = 0
  for (; !l.done && d < H0; ) (l = s.sample(d)), u.push(l.value), (d += Gs)
  return { times: void 0, keyframes: u, duration: d - Gs, ease: 'linear' }
}
const Wp = { anticipate: xp, backInOut: vp, circInOut: Sp }
function Y0(n) {
  return n in Wp
}
class $d extends Op {
  constructor(i) {
    super(i)
    const { name: s, motionValue: l, element: u, keyframes: d } = this.options
    ;(this.resolver = new _p(
      d,
      (f, p) => this.onKeyframesResolved(f, p),
      s,
      l,
      u
    )),
      this.resolver.scheduleResolve()
  }
  initPlayback(i, s) {
    var l
    let {
      duration: u = 300,
      times: d,
      ease: f,
      type: p,
      motionValue: m,
      name: y,
      startTime: v,
    } = this.options
    if (!(!((l = m.owner) === null || l === void 0) && l.current)) return !1
    if (
      (typeof f == 'string' && $s() && Y0(f) && (f = Wp[f]), $0(this.options))
    ) {
      const {
          onComplete: P,
          onUpdate: D,
          motionValue: k,
          element: C,
          ...A
        } = this.options,
        N = K0(i, A)
      ;(i = N.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (u = N.duration),
        (d = N.times),
        (f = N.ease),
        (p = 'keyframes')
    }
    const w = U0(m.owner.current, y, i, {
      ...this.options,
      duration: u,
      times: d,
      ease: f,
    })
    return (
      (w.startTime = v ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Ed(w, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (w.onfinish = () => {
            const { onComplete: P } = this.options
            m.set(eo(i, this.options, s)),
              P && P(),
              this.cancel(),
              this.resolveFinishedPromise()
          }),
      { animation: w, duration: u, times: d, type: p, ease: f, keyframes: i }
    )
  }
  get duration() {
    const { resolved: i } = this
    if (!i) return 0
    const { duration: s } = i
    return Gt(s)
  }
  get time() {
    const { resolved: i } = this
    if (!i) return 0
    const { animation: s } = i
    return Gt(s.currentTime || 0)
  }
  set time(i) {
    const { resolved: s } = this
    if (!s) return
    const { animation: l } = s
    l.currentTime = Yt(i)
  }
  get speed() {
    const { resolved: i } = this
    if (!i) return 1
    const { animation: s } = i
    return s.playbackRate
  }
  set speed(i) {
    const { resolved: s } = this
    if (!s) return
    const { animation: l } = s
    l.playbackRate = i
  }
  get state() {
    const { resolved: i } = this
    if (!i) return 'idle'
    const { animation: s } = i
    return s.playState
  }
  get startTime() {
    const { resolved: i } = this
    if (!i) return null
    const { animation: s } = i
    return s.startTime
  }
  attachTimeline(i) {
    if (!this._resolved) this.pendingTimeline = i
    else {
      const { resolved: s } = this
      if (!s) return dt
      const { animation: l } = s
      Ed(l, i)
    }
    return dt
  }
  play() {
    if (this.isStopped) return
    const { resolved: i } = this
    if (!i) return
    const { animation: s } = i
    s.playState === 'finished' && this.updateFinishedPromise(), s.play()
  }
  pause() {
    const { resolved: i } = this
    if (!i) return
    const { animation: s } = i
    s.pause()
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return
    this.resolveFinishedPromise(), this.updateFinishedPromise()
    const { resolved: i } = this
    if (!i) return
    const {
      animation: s,
      keyframes: l,
      duration: u,
      type: d,
      ease: f,
      times: p,
    } = i
    if (s.playState === 'idle' || s.playState === 'finished') return
    if (this.time) {
      const {
          motionValue: y,
          onUpdate: v,
          onComplete: w,
          element: P,
          ...D
        } = this.options,
        k = new fu({
          ...D,
          keyframes: l,
          duration: u,
          type: d,
          ease: f,
          times: p,
          isGenerator: !0,
        }),
        C = Yt(this.time)
      y.setWithVelocity(k.sample(C - Gs).value, k.sample(C).value, Gs)
    }
    const { onStop: m } = this.options
    m && m(), this.cancel()
  }
  complete() {
    const { resolved: i } = this
    i && i.animation.finish()
  }
  cancel() {
    const { resolved: i } = this
    i && i.animation.cancel()
  }
  static supports(i) {
    const {
      motionValue: s,
      name: l,
      repeatDelay: u,
      repeatType: d,
      damping: f,
      type: p,
    } = i
    return (
      W0() &&
      l &&
      B0.has(l) &&
      s &&
      s.owner &&
      s.owner.current instanceof HTMLElement &&
      !s.owner.getProps().onUpdate &&
      !u &&
      d !== 'mirror' &&
      f !== 0 &&
      p !== 'inertia'
    )
  }
}
const G0 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  X0 = (n) => ({
    type: 'spring',
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Q0 = { type: 'keyframes', duration: 0.8 },
  q0 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Z0 = (n, { keyframes: i }) =>
    i.length > 2 ? Q0 : In.has(n) ? (n.startsWith('scale') ? X0(i[1]) : G0) : q0
function b0({
  when: n,
  delay: i,
  delayChildren: s,
  staggerChildren: l,
  staggerDirection: u,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: y,
  ...v
}) {
  return !!Object.keys(v).length
}
const du =
  (n, i, s, l = {}, u, d) =>
  (f) => {
    const p = Za(l, n) || {},
      m = p.delay || l.delay || 0
    let { elapsed: y = 0 } = l
    y = y - Yt(m)
    let v = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: 'easeOut',
      velocity: i.getVelocity(),
      ...p,
      delay: -y,
      onUpdate: (P) => {
        i.set(P), p.onUpdate && p.onUpdate(P)
      },
      onComplete: () => {
        f(), p.onComplete && p.onComplete()
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : u,
    }
    b0(p) || (v = { ...v, ...Z0(n, v) }),
      v.duration && (v.duration = Yt(v.duration)),
      v.repeatDelay && (v.repeatDelay = Yt(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from)
    let w = !1
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (w = !0)),
      w && !d && i.get() !== void 0)
    ) {
      const P = eo(v.keyframes, p)
      if (P !== void 0)
        return (
          xe.update(() => {
            v.onUpdate(P), v.onComplete()
          }),
          new xv([])
        )
    }
    return !d && $d.supports(v) ? new $d(v) : new fu(v)
  }
function J0({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0
  return (i[s] = !1), l
}
function Hp(n, i, { delay: s = 0, transitionOverride: l, type: u } = {}) {
  var d
  let { transition: f = n.getDefaultTransition(), transitionEnd: p, ...m } = i
  l && (f = l)
  const y = [],
    v = u && n.animationState && n.animationState.getState()[u]
  for (const w in m) {
    const P = n.getValue(
        w,
        (d = n.latestValues[w]) !== null && d !== void 0 ? d : null
      ),
      D = m[w]
    if (D === void 0 || (v && J0(v, w))) continue
    const k = { delay: s, ...Za(f || {}, w) }
    let C = !1
    if (window.MotionHandoffAnimation) {
      const N = hp(n)
      if (N) {
        const z = window.MotionHandoffAnimation(N, w, xe)
        z !== null && ((k.startTime = z), (C = !0))
      }
    }
    va(n, w),
      P.start(
        du(w, P, D, n.shouldReduceMotion && fp.has(w) ? { type: !1 } : k, n, C)
      )
    const A = P.animation
    A && y.push(A)
  }
  return (
    p &&
      Promise.all(y).then(() => {
        xe.update(() => {
          p && Dv(n, p)
        })
      }),
    y
  )
}
function ka(n, i, s = {}) {
  var l
  const u = Js(
    n,
    i,
    s.type === 'exit'
      ? (l = n.presenceContext) === null || l === void 0
        ? void 0
        : l.custom
      : void 0
  )
  let { transition: d = n.getDefaultTransition() || {} } = u || {}
  s.transitionOverride && (d = s.transitionOverride)
  const f = u ? () => Promise.all(Hp(n, u, s)) : () => Promise.resolve(),
    p =
      n.variantChildren && n.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: w,
              staggerDirection: P,
            } = d
            return ex(n, i, v + y, w, P, s)
          }
        : () => Promise.resolve(),
    { when: m } = d
  if (m) {
    const [y, v] = m === 'beforeChildren' ? [f, p] : [p, f]
    return y().then(() => v())
  } else return Promise.all([f(), p(s.delay)])
}
function ex(n, i, s = 0, l = 0, u = 1, d) {
  const f = [],
    p = (n.variantChildren.size - 1) * l,
    m = u === 1 ? (y = 0) => y * l : (y = 0) => p - y * l
  return (
    Array.from(n.variantChildren)
      .sort(tx)
      .forEach((y, v) => {
        y.notify('AnimationStart', i),
          f.push(
            ka(y, i, { ...d, delay: s + m(v) }).then(() =>
              y.notify('AnimationComplete', i)
            )
          )
      }),
    Promise.all(f)
  )
}
function tx(n, i) {
  return n.sortNodePosition(i)
}
function nx(n, i, s = {}) {
  n.notify('AnimationStart', i)
  let l
  if (Array.isArray(i)) {
    const u = i.map((d) => ka(n, d, s))
    l = Promise.all(u)
  } else if (typeof i == 'string') l = ka(n, i, s)
  else {
    const u = typeof i == 'function' ? Js(n, i, s.custom) : i
    l = Promise.all(Hp(n, u, s))
  }
  return l.then(() => {
    n.notify('AnimationComplete', i)
  })
}
const rx = za.length
function $p(n) {
  if (!n) return
  if (!n.isControllingVariants) {
    const s = n.parent ? $p(n.parent) || {} : {}
    return n.props.initial !== void 0 && (s.initial = n.props.initial), s
  }
  const i = {}
  for (let s = 0; s < rx; s++) {
    const l = za[s],
      u = n.props[l]
    ;(pi(u) || u === !1) && (i[l] = u)
  }
  return i
}
const ix = [...Fa].reverse(),
  sx = Fa.length
function ox(n) {
  return (i) =>
    Promise.all(i.map(({ animation: s, options: l }) => nx(n, s, l)))
}
function lx(n) {
  let i = ox(n),
    s = Kd(),
    l = !0
  const u = (m) => (y, v) => {
    var w
    const P = Js(
      n,
      v,
      m === 'exit'
        ? (w = n.presenceContext) === null || w === void 0
          ? void 0
          : w.custom
        : void 0
    )
    if (P) {
      const { transition: D, transitionEnd: k, ...C } = P
      y = { ...y, ...C, ...k }
    }
    return y
  }
  function d(m) {
    i = m(n)
  }
  function f(m) {
    const { props: y } = n,
      v = $p(n.parent) || {},
      w = [],
      P = new Set()
    let D = {},
      k = 1 / 0
    for (let A = 0; A < sx; A++) {
      const N = ix[A],
        z = s[N],
        B = y[N] !== void 0 ? y[N] : v[N],
        G = pi(B),
        U = N === m ? z.isActive : null
      U === !1 && (k = A)
      let b = B === v[N] && B !== y[N] && G
      if (
        (b && l && n.manuallyAnimateOnMount && (b = !1),
        (z.protectedKeys = { ...D }),
        (!z.isActive && U === null) ||
          (!B && !z.prevProp) ||
          Zs(B) ||
          typeof B == 'boolean')
      )
        continue
      const ie = ax(z.prevProp, B)
      let q = ie || (N === m && z.isActive && !b && G) || (A > k && G),
        pe = !1
      const we = Array.isArray(B) ? B : [B]
      let Ue = we.reduce(u(N), {})
      U === !1 && (Ue = {})
      const { prevResolvedValues: Oe = {} } = z,
        De = { ...Oe, ...Ue },
        Le = (re) => {
          ;(q = !0),
            P.has(re) && ((pe = !0), P.delete(re)),
            (z.needsAnimating[re] = !0)
          const F = n.getValue(re)
          F && (F.liveStyle = !1)
        }
      for (const re in De) {
        const F = Ue[re],
          Z = Oe[re]
        if (D.hasOwnProperty(re)) continue
        let $ = !1
        ma(F) && ma(Z) ? ($ = !np(F, Z)) : ($ = F !== Z),
          $
            ? F != null
              ? Le(re)
              : P.add(re)
            : F !== void 0 && P.has(re)
            ? Le(re)
            : (z.protectedKeys[re] = !0)
      }
      ;(z.prevProp = B),
        (z.prevResolvedValues = Ue),
        z.isActive && (D = { ...D, ...Ue }),
        l && n.blockInitialAnimation && (q = !1),
        q &&
          (!(b && ie) || pe) &&
          w.push(...we.map((re) => ({ animation: re, options: { type: N } })))
    }
    if (P.size) {
      const A = {}
      P.forEach((N) => {
        const z = n.getBaseTarget(N),
          B = n.getValue(N)
        B && (B.liveStyle = !0), (A[N] = z ?? null)
      }),
        w.push({ animation: A })
    }
    let C = !!w.length
    return (
      l &&
        (y.initial === !1 || y.initial === y.animate) &&
        !n.manuallyAnimateOnMount &&
        (C = !1),
      (l = !1),
      C ? i(w) : Promise.resolve()
    )
  }
  function p(m, y) {
    var v
    if (s[m].isActive === y) return Promise.resolve()
    ;(v = n.variantChildren) === null ||
      v === void 0 ||
      v.forEach((P) => {
        var D
        return (D = P.animationState) === null || D === void 0
          ? void 0
          : D.setActive(m, y)
      }),
      (s[m].isActive = y)
    const w = f(m)
    for (const P in s) s[P].protectedKeys = {}
    return w
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => s,
    reset: () => {
      ;(s = Kd()), (l = !0)
    },
  }
}
function ax(n, i) {
  return typeof i == 'string' ? i !== n : Array.isArray(i) ? !np(i, n) : !1
}
function Dn(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  }
}
function Kd() {
  return {
    animate: Dn(!0),
    whileInView: Dn(),
    whileHover: Dn(),
    whileTap: Dn(),
    whileDrag: Dn(),
    whileFocus: Dn(),
    exit: Dn(),
  }
}
class vn {
  constructor(i) {
    ;(this.isMounted = !1), (this.node = i)
  }
  update() {}
}
class ux extends vn {
  constructor(i) {
    super(i), i.animationState || (i.animationState = lx(i))
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps()
    Zs(i) && (this.unmountControls = i.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {}
    i !== s && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var i
    this.node.animationState.reset(),
      (i = this.unmountControls) === null || i === void 0 || i.call(this)
  }
}
let cx = 0
class fx extends vn {
  constructor() {
    super(...arguments), (this.id = cx++)
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || i === l) return
    const u = this.node.animationState.setActive('exit', !i)
    s && !i && u.then(() => s(this.id))
  }
  mount() {
    const { register: i } = this.node.presenceContext || {}
    i && (this.unmount = i(this.id))
  }
  unmount() {}
}
const dx = { animation: { Feature: ux }, exit: { Feature: fx } }
function vi(n, i, s, l = { passive: !0 }) {
  return n.addEventListener(i, s, l), () => n.removeEventListener(i, s)
}
function Pi(n) {
  return { point: { x: n.pageX, y: n.pageY } }
}
const hx = (n) => (i) => eu(i) && n(i, Pi(i))
function fi(n, i, s, l) {
  return vi(n, i, hx(s), l)
}
const Yd = (n, i) => Math.abs(n - i)
function px(n, i) {
  const s = Yd(n.x, i.x),
    l = Yd(n.y, i.y)
  return Math.sqrt(s ** 2 + l ** 2)
}
class Kp {
  constructor(
    i,
    s,
    { transformPagePoint: l, contextWindow: u, dragSnapToOrigin: d = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const w = la(this.lastMoveEventInfo, this.history),
          P = this.startEvent !== null,
          D = px(w.offset, { x: 0, y: 0 }) >= 3
        if (!P && !D) return
        const { point: k } = w,
          { timestamp: C } = $e
        this.history.push({ ...k, timestamp: C })
        const { onStart: A, onMove: N } = this.handlers
        P ||
          (A && A(this.lastMoveEvent, w),
          (this.startEvent = this.lastMoveEvent)),
          N && N(this.lastMoveEvent, w)
      }),
      (this.handlePointerMove = (w, P) => {
        ;(this.lastMoveEvent = w),
          (this.lastMoveEventInfo = oa(P, this.transformPagePoint)),
          xe.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (w, P) => {
        this.end()
        const { onEnd: D, onSessionEnd: k, resumeAnimation: C } = this.handlers
        if (
          (this.dragSnapToOrigin && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return
        const A = la(
          w.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : oa(P, this.transformPagePoint),
          this.history
        )
        this.startEvent && D && D(w, A), k && k(w, A)
      }),
      !eu(i))
    )
      return
    ;(this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.contextWindow = u || window)
    const f = Pi(i),
      p = oa(f, this.transformPagePoint),
      { point: m } = p,
      { timestamp: y } = $e
    this.history = [{ ...m, timestamp: y }]
    const { onSessionStart: v } = s
    v && v(i, la(p, this.history)),
      (this.removeListeners = Si(
        fi(this.contextWindow, 'pointermove', this.handlePointerMove),
        fi(this.contextWindow, 'pointerup', this.handlePointerUp),
        fi(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(i) {
    this.handlers = i
  }
  end() {
    this.removeListeners && this.removeListeners(), gn(this.updatePoint)
  }
}
function oa(n, i) {
  return i ? { point: i(n.point) } : n
}
function Gd(n, i) {
  return { x: n.x - i.x, y: n.y - i.y }
}
function la({ point: n }, i) {
  return {
    point: n,
    delta: Gd(n, Yp(i)),
    offset: Gd(n, mx(i)),
    velocity: gx(i, 0.1),
  }
}
function mx(n) {
  return n[0]
}
function Yp(n) {
  return n[n.length - 1]
}
function gx(n, i) {
  if (n.length < 2) return { x: 0, y: 0 }
  let s = n.length - 1,
    l = null
  const u = Yp(n)
  for (; s >= 0 && ((l = n[s]), !(u.timestamp - l.timestamp > Yt(i))); ) s--
  if (!l) return { x: 0, y: 0 }
  const d = Gt(u.timestamp - l.timestamp)
  if (d === 0) return { x: 0, y: 0 }
  const f = { x: (u.x - l.x) / d, y: (u.y - l.y) / d }
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}
const Gp = 1e-4,
  yx = 1 - Gp,
  vx = 1 + Gp,
  Xp = 0.01,
  xx = 0 - Xp,
  wx = 0 + Xp
function ht(n) {
  return n.max - n.min
}
function Sx(n, i, s) {
  return Math.abs(n - i) <= s
}
function Xd(n, i, s, l = 0.5) {
  ;(n.origin = l),
    (n.originPoint = ke(i.min, i.max, n.origin)),
    (n.scale = ht(s) / ht(i)),
    (n.translate = ke(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= yx && n.scale <= vx) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= xx && n.translate <= wx) || isNaN(n.translate)) &&
      (n.translate = 0)
}
function di(n, i, s, l) {
  Xd(n.x, i.x, s.x, l ? l.originX : void 0),
    Xd(n.y, i.y, s.y, l ? l.originY : void 0)
}
function Qd(n, i, s) {
  ;(n.min = s.min + i.min), (n.max = n.min + ht(i))
}
function Px(n, i, s) {
  Qd(n.x, i.x, s.x), Qd(n.y, i.y, s.y)
}
function qd(n, i, s) {
  ;(n.min = i.min - s.min), (n.max = n.min + ht(i))
}
function hi(n, i, s) {
  qd(n.x, i.x, s.x), qd(n.y, i.y, s.y)
}
function Tx(n, { min: i, max: s }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? ke(i, n, l.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = l ? ke(s, n, l.max) : Math.min(n, s)),
    n
  )
}
function Zd(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  }
}
function Cx(n, { top: i, left: s, bottom: l, right: u }) {
  return { x: Zd(n.x, s, u), y: Zd(n.y, i, l) }
}
function bd(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max
  return i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l }
}
function kx(n, i) {
  return { x: bd(n.x, i.x), y: bd(n.y, i.y) }
}
function Ex(n, i) {
  let s = 0.5
  const l = ht(n),
    u = ht(i)
  return (
    u > l
      ? (s = mr(i.min, i.max - l, n.min))
      : l > u && (s = mr(n.min, n.max - u, i.min)),
    Xt(0, 1, s)
  )
}
function jx(n, i) {
  const s = {}
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  )
}
const Ea = 0.35
function Mx(n = Ea) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ea),
    { x: Jd(n, 'left', 'right'), y: Jd(n, 'top', 'bottom') }
  )
}
function Jd(n, i, s) {
  return { min: eh(n, i), max: eh(n, s) }
}
function eh(n, i) {
  return typeof n == 'number' ? n : n[i] || 0
}
const th = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fr = () => ({ x: th(), y: th() }),
  nh = () => ({ min: 0, max: 0 }),
  Re = () => ({ x: nh(), y: nh() })
function St(n) {
  return [n('x'), n('y')]
}
function Qp({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } }
}
function Ax({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min }
}
function Rx(n, i) {
  if (!i) return n
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom })
  return { top: s.y, left: s.x, bottom: l.y, right: l.x }
}
function aa(n) {
  return n === void 0 || n === 1
}
function ja({ scale: n, scaleX: i, scaleY: s }) {
  return !aa(n) || !aa(i) || !aa(s)
}
function Ln(n) {
  return (
    ja(n) ||
    qp(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  )
}
function qp(n) {
  return rh(n.x) || rh(n.y)
}
function rh(n) {
  return n && n !== '0%'
}
function Xs(n, i, s) {
  const l = n - s,
    u = i * l
  return s + u
}
function ih(n, i, s, l, u) {
  return u !== void 0 && (n = Xs(n, u, l)), Xs(n, s, l) + i
}
function Ma(n, i = 0, s = 1, l, u) {
  ;(n.min = ih(n.min, i, s, l, u)), (n.max = ih(n.max, i, s, l, u))
}
function Zp(n, { x: i, y: s }) {
  Ma(n.x, i.translate, i.scale, i.originPoint),
    Ma(n.y, s.translate, s.scale, s.originPoint)
}
const sh = 0.999999999999,
  oh = 1.0000000000001
function Nx(n, i, s, l = !1) {
  const u = s.length
  if (!u) return
  i.x = i.y = 1
  let d, f
  for (let p = 0; p < u; p++) {
    ;(d = s[p]), (f = d.projectionDelta)
    const { visualElement: m } = d.options
    ;(m && m.props.style && m.props.style.display === 'contents') ||
      (l &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        hr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Zp(n, f)),
      l && Ln(d.latestValues) && hr(n, d.latestValues))
  }
  i.x < oh && i.x > sh && (i.x = 1), i.y < oh && i.y > sh && (i.y = 1)
}
function dr(n, i) {
  ;(n.min = n.min + i), (n.max = n.max + i)
}
function lh(n, i, s, l, u = 0.5) {
  const d = ke(n.min, n.max, u)
  Ma(n, i, s, d, l)
}
function hr(n, i) {
  lh(n.x, i.x, i.scaleX, i.scale, i.originX),
    lh(n.y, i.y, i.scaleY, i.scale, i.originY)
}
function bp(n, i) {
  return Qp(Rx(n.getBoundingClientRect(), i))
}
function Dx(n, i, s) {
  const l = bp(n, s),
    { scroll: u } = i
  return u && (dr(l.x, u.offset.x), dr(l.y, u.offset.y)), l
}
const Jp = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Lx = new WeakMap()
class Vx {
  constructor(i) {
    ;(this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Re()),
      (this.visualElement = i)
  }
  start(i, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: l } = this.visualElement
    if (l && l.isPresent === !1) return
    const u = (v) => {
        const { dragSnapToOrigin: w } = this.getProps()
        w ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(Pi(v).point)
      },
      d = (v, w) => {
        const { drag: P, dragPropagation: D, onDragStart: k } = this.getProps()
        if (
          P &&
          !D &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = jv(P)),
          !this.openDragLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          St((A) => {
            let N = this.getAxisMotionValue(A).get() || 0
            if (Ot.test(N)) {
              const { projection: z } = this.visualElement
              if (z && z.layout) {
                const B = z.layout.layoutBox[A]
                B && (N = ht(B) * (parseFloat(N) / 100))
              }
            }
            this.originPoint[A] = N
          }),
          k && xe.postRender(() => k(v, w)),
          va(this.visualElement, 'transform')
        const { animationState: C } = this.visualElement
        C && C.setActive('whileDrag', !0)
      },
      f = (v, w) => {
        const {
          dragPropagation: P,
          dragDirectionLock: D,
          onDirectionLock: k,
          onDrag: C,
        } = this.getProps()
        if (!P && !this.openDragLock) return
        const { offset: A } = w
        if (D && this.currentDirection === null) {
          ;(this.currentDirection = _x(A)),
            this.currentDirection !== null && k && k(this.currentDirection)
          return
        }
        this.updateAxis('x', w.point, A),
          this.updateAxis('y', w.point, A),
          this.visualElement.render(),
          C && C(v, w)
      },
      p = (v, w) => this.stop(v, w),
      m = () =>
        St((v) => {
          var w
          return (
            this.getAnimationState(v) === 'paused' &&
            ((w = this.getAxisMotionValue(v).animation) === null || w === void 0
              ? void 0
              : w.play())
          )
        }),
      { dragSnapToOrigin: y } = this.getProps()
    this.panSession = new Kp(
      i,
      {
        onSessionStart: u,
        onStart: d,
        onMove: f,
        onSessionEnd: p,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        contextWindow: Jp(this.visualElement),
      }
    )
  }
  stop(i, s) {
    const l = this.isDragging
    if ((this.cancel(), !l)) return
    const { velocity: u } = s
    this.startAnimation(u)
    const { onDragEnd: d } = this.getProps()
    d && xe.postRender(() => d(i, s))
  }
  cancel() {
    this.isDragging = !1
    const { projection: i, animationState: s } = this.visualElement
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: l } = this.getProps()
    !l &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive('whileDrag', !1)
  }
  updateAxis(i, s, l) {
    const { drag: u } = this.getProps()
    if (!l || !Is(i, u, this.currentDirection)) return
    const d = this.getAxisMotionValue(i)
    let f = this.originPoint[i] + l[i]
    this.constraints &&
      this.constraints[i] &&
      (f = Tx(f, this.constraints[i], this.elastic[i])),
      d.set(f)
  }
  resolveConstraints() {
    var i
    const { dragConstraints: s, dragElastic: l } = this.getProps(),
      u =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) === null || i === void 0
          ? void 0
          : i.layout,
      d = this.constraints
    s && ur(s)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : s && u
      ? (this.constraints = Cx(u.layoutBox, s))
      : (this.constraints = !1),
      (this.elastic = Mx(l)),
      d !== this.constraints &&
        u &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        St((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = jx(u.layoutBox[f], this.constraints[f]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps()
    if (!i || !ur(i)) return !1
    const l = i.current,
      { projection: u } = this.visualElement
    if (!u || !u.layout) return !1
    const d = Dx(l, u.root, this.visualElement.getTransformPagePoint())
    let f = kx(u.layout.layoutBox, d)
    if (s) {
      const p = s(Ax(f))
      ;(this.hasMutatedConstraints = !!p), p && (f = Qp(p))
    }
    return f
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: l,
        dragElastic: u,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      y = St((v) => {
        if (!Is(v, s, this.currentDirection)) return
        let w = m[v] || {}
        f && (w = { min: 0, max: 0 })
        const P = u ? 200 : 1e6,
          D = u ? 40 : 1e7,
          k = {
            type: 'inertia',
            velocity: l ? i[v] : 0,
            bounceStiffness: P,
            bounceDamping: D,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...w,
          }
        return this.startAxisValueAnimation(v, k)
      })
    return Promise.all(y).then(p)
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i)
    return (
      va(this.visualElement, i), l.start(du(i, l, 0, s, this.visualElement, !1))
    )
  }
  stopAnimation() {
    St((i) => this.getAxisMotionValue(i).stop())
  }
  pauseAnimation() {
    St((i) => {
      var s
      return (s = this.getAxisMotionValue(i).animation) === null || s === void 0
        ? void 0
        : s.pause()
    })
  }
  getAnimationState(i) {
    var s
    return (s = this.getAxisMotionValue(i).animation) === null || s === void 0
      ? void 0
      : s.state
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      l = this.visualElement.getProps(),
      u = l[s]
    return (
      u ||
      this.visualElement.getValue(i, (l.initial ? l.initial[i] : void 0) || 0)
    )
  }
  snapToCursor(i) {
    St((s) => {
      const { drag: l } = this.getProps()
      if (!Is(s, l, this.currentDirection)) return
      const { projection: u } = this.visualElement,
        d = this.getAxisMotionValue(s)
      if (u && u.layout) {
        const { min: f, max: p } = u.layout.layoutBox[s]
        d.set(i[s] - ke(f, p, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: l } = this.visualElement
    if (!ur(s) || !l || !this.constraints) return
    this.stopAnimation()
    const u = { x: 0, y: 0 }
    St((f) => {
      const p = this.getAxisMotionValue(f)
      if (p && this.constraints !== !1) {
        const m = p.get()
        u[f] = Ex({ min: m, max: m }, this.constraints[f])
      }
    })
    const { transformTemplate: d } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = d ? d({}, '') : 'none'),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      St((f) => {
        if (!Is(f, i, null)) return
        const p = this.getAxisMotionValue(f),
          { min: m, max: y } = this.constraints[f]
        p.set(ke(m, y, u[f]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    Lx.set(this.visualElement, this)
    const i = this.visualElement.current,
      s = fi(i, 'pointerdown', (m) => {
        const { drag: y, dragListener: v = !0 } = this.getProps()
        y && v && this.start(m)
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps()
        ur(m) && m.current && (this.constraints = this.resolveRefConstraints())
      },
      { projection: u } = this.visualElement,
      d = u.addEventListener('measure', l)
    u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
      xe.read(l)
    const f = vi(window, 'resize', () => this.scalePositionWithinConstraints()),
      p = u.addEventListener(
        'didUpdate',
        ({ delta: m, hasLayoutChanged: y }) => {
          this.isDragging &&
            y &&
            (St((v) => {
              const w = this.getAxisMotionValue(v)
              w &&
                ((this.originPoint[v] += m[v].translate),
                w.set(w.get() + m[v].translate))
            }),
            this.visualElement.render())
        }
      )
    return () => {
      f(), s(), d(), p && p()
    }
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: u = !1,
        dragConstraints: d = !1,
        dragElastic: f = Ea,
        dragMomentum: p = !0,
      } = i
    return {
      ...i,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: u,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    }
  }
}
function Is(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n)
}
function _x(n, i = 10) {
  let s = null
  return Math.abs(n.y) > i ? (s = 'y') : Math.abs(n.x) > i && (s = 'x'), s
}
class Ox extends vn {
  constructor(i) {
    super(i),
      (this.removeGroupControls = dt),
      (this.removeListeners = dt),
      (this.controls = new Vx(i))
  }
  mount() {
    const { dragControls: i } = this.node.getProps()
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || dt)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const ah = (n) => (i, s) => {
  n && xe.postRender(() => n(i, s))
}
class Ix extends vn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = dt)
  }
  onPointerDown(i) {
    this.session = new Kp(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Jp(this.node),
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: s,
      onPan: l,
      onPanEnd: u,
    } = this.node.getProps()
    return {
      onSessionStart: ah(i),
      onStart: ah(s),
      onMove: l,
      onEnd: (d, f) => {
        delete this.session, u && xe.postRender(() => u(d, f))
      },
    }
  }
  mount() {
    this.removePointerDownListener = fi(this.node.current, 'pointerdown', (i) =>
      this.onPointerDown(i)
    )
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
const Bs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function uh(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100
}
const oi = {
    correct: (n, i) => {
      if (!i.target) return n
      if (typeof n == 'string')
        if (te.test(n)) n = parseFloat(n)
        else return n
      const s = uh(n, i.target.x),
        l = uh(n, i.target.y)
      return `${s}% ${l}%`
    },
  },
  Fx = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        u = yn.parse(n)
      if (u.length > 5) return l
      const d = yn.createTransformer(n),
        f = typeof u[0] != 'number' ? 1 : 0,
        p = s.x.scale * i.x,
        m = s.y.scale * i.y
      ;(u[0 + f] /= p), (u[1 + f] /= m)
      const y = ke(p, m, 0.5)
      return (
        typeof u[2 + f] == 'number' && (u[2 + f] /= y),
        typeof u[3 + f] == 'number' && (u[3 + f] /= y),
        d(u)
      )
    },
  }
class zx extends W.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: l,
        layoutId: u,
      } = this.props,
      { projection: d } = i
    lv(Bx),
      d &&
        (s.group && s.group.add(d),
        l && l.register && u && l.register(d),
        d.root.didUpdate(),
        d.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Bs.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: s,
        visualElement: l,
        drag: u,
        isPresent: d,
      } = this.props,
      f = l.projection
    return (
      f &&
        ((f.isPresent = d),
        u || i.layoutDependency !== s || s === void 0
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              xe.postRender(() => {
                const p = f.getStack()
                ;(!p || !p.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement
    i &&
      (i.root.didUpdate(),
      Ua.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove()
      }))
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: l,
      } = this.props,
      { projection: u } = i
    u &&
      (u.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(u),
      l && l.deregister && l.deregister(u))
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props
    i && i()
  }
  render() {
    return null
  }
}
function em(n) {
  const [i, s] = Oh(),
    l = W.useContext(La)
  return g.jsx(zx, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: W.useContext(Hh),
    isPresent: i,
    safeToRemove: s,
  })
}
const Bx = {
  borderRadius: {
    ...oi,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: oi,
  borderTopRightRadius: oi,
  borderBottomLeftRadius: oi,
  borderBottomRightRadius: oi,
  boxShadow: Fx,
}
function Ux(n, i, s) {
  const l = Ze(n) ? n : gi(n)
  return l.start(du('', l, i, s)), l.animation
}
function Wx(n) {
  return n instanceof SVGElement && n.tagName !== 'svg'
}
const Hx = (n, i) => n.depth - i.depth
class $x {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(i) {
    tu(this.children, i), (this.isDirty = !0)
  }
  remove(i) {
    nu(this.children, i), (this.isDirty = !0)
  }
  forEach(i) {
    this.isDirty && this.children.sort(Hx),
      (this.isDirty = !1),
      this.children.forEach(i)
  }
}
function Kx(n, i) {
  const s = It.now(),
    l = ({ timestamp: u }) => {
      const d = u - s
      d >= i && (gn(l), n(d - i))
    }
  return xe.read(l, !0), () => gn(l)
}
const tm = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Yx = tm.length,
  ch = (n) => (typeof n == 'string' ? parseFloat(n) : n),
  fh = (n) => typeof n == 'number' || te.test(n)
function Gx(n, i, s, l, u, d) {
  u
    ? ((n.opacity = ke(0, s.opacity !== void 0 ? s.opacity : 1, Xx(l))),
      (n.opacityExit = ke(i.opacity !== void 0 ? i.opacity : 1, 0, Qx(l))))
    : d &&
      (n.opacity = ke(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        l
      ))
  for (let f = 0; f < Yx; f++) {
    const p = `border${tm[f]}Radius`
    let m = dh(i, p),
      y = dh(s, p)
    if (m === void 0 && y === void 0) continue
    m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || fh(m) === fh(y)
        ? ((n[p] = Math.max(ke(ch(m), ch(y), l), 0)),
          (Ot.test(y) || Ot.test(m)) && (n[p] += '%'))
        : (n[p] = y)
  }
  ;(i.rotate || s.rotate) && (n.rotate = ke(i.rotate || 0, s.rotate || 0, l))
}
function dh(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius
}
const Xx = nm(0, 0.5, wp),
  Qx = nm(0.5, 0.95, dt)
function nm(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(mr(n, i, l)))
}
function hh(n, i) {
  ;(n.min = i.min), (n.max = i.max)
}
function wt(n, i) {
  hh(n.x, i.x), hh(n.y, i.y)
}
function ph(n, i) {
  ;(n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin)
}
function mh(n, i, s, l, u) {
  return (
    (n -= i), (n = Xs(n, 1 / s, l)), u !== void 0 && (n = Xs(n, 1 / u, l)), n
  )
}
function qx(n, i = 0, s = 1, l = 0.5, u, d = n, f = n) {
  if (
    (Ot.test(i) &&
      ((i = parseFloat(i)), (i = ke(f.min, f.max, i / 100) - f.min)),
    typeof i != 'number')
  )
    return
  let p = ke(d.min, d.max, l)
  n === d && (p -= i),
    (n.min = mh(n.min, i, s, p, u)),
    (n.max = mh(n.max, i, s, p, u))
}
function gh(n, i, [s, l, u], d, f) {
  qx(n, i[s], i[l], i[u], i.scale, d, f)
}
const Zx = ['x', 'scaleX', 'originX'],
  bx = ['y', 'scaleY', 'originY']
function yh(n, i, s, l) {
  gh(n.x, i, Zx, s ? s.x : void 0, l ? l.x : void 0),
    gh(n.y, i, bx, s ? s.y : void 0, l ? l.y : void 0)
}
function vh(n) {
  return n.translate === 0 && n.scale === 1
}
function rm(n) {
  return vh(n.x) && vh(n.y)
}
function xh(n, i) {
  return n.min === i.min && n.max === i.max
}
function Jx(n, i) {
  return xh(n.x, i.x) && xh(n.y, i.y)
}
function wh(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  )
}
function im(n, i) {
  return wh(n.x, i.x) && wh(n.y, i.y)
}
function Sh(n) {
  return ht(n.x) / ht(n.y)
}
function Ph(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  )
}
class e1 {
  constructor() {
    this.members = []
  }
  add(i) {
    tu(this.members, i), i.scheduleRender()
  }
  remove(i) {
    if (
      (nu(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const s = this.members[this.members.length - 1]
      s && this.promote(s)
    }
  }
  relegate(i) {
    const s = this.members.findIndex((u) => i === u)
    if (s === 0) return !1
    let l
    for (let u = s; u >= 0; u--) {
      const d = this.members[u]
      if (d.isPresent !== !1) {
        l = d
        break
      }
    }
    return l ? (this.promote(l), !0) : !1
  }
  promote(i, s) {
    const l = this.lead
    if (i !== l && ((this.prevLead = l), (this.lead = i), i.show(), l)) {
      l.instance && l.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = l),
        s && (i.resumeFrom.preserveOpacity = !0),
        l.snapshot &&
          ((i.snapshot = l.snapshot),
          (i.snapshot.latestValues = l.animationValues || l.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0)
      const { crossfade: u } = i.options
      u === !1 && l.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: l } = i
      s.onExitComplete && s.onExitComplete(),
        l && l.options.onExitComplete && l.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function t1(n, i, s) {
  let l = ''
  const u = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0
  if (
    ((u || d || f) && (l = `translate3d(${u}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const {
      transformPerspective: y,
      rotate: v,
      rotateX: w,
      rotateY: P,
      skewX: D,
      skewY: k,
    } = s
    y && (l = `perspective(${y}px) ${l}`),
      v && (l += `rotate(${v}deg) `),
      w && (l += `rotateX(${w}deg) `),
      P && (l += `rotateY(${P}deg) `),
      D && (l += `skewX(${D}deg) `),
      k && (l += `skewY(${k}deg) `)
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y
  return (p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`), l || 'none'
}
const Vn = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ui = typeof window < 'u' && window.MotionDebug !== void 0,
  ua = ['', 'X', 'Y', 'Z'],
  n1 = { visibility: 'hidden' },
  Th = 1e3
let r1 = 0
function ca(n, i, s, l) {
  const { latestValues: u } = i
  u[n] && ((s[n] = u[n]), i.setStaticValue(n, 0), l && (l[n] = 0))
}
function sm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return
  const { visualElement: i } = n.options
  if (!i) return
  const s = hp(i)
  if (window.MotionHasOptimisedAnimation(s, 'transform')) {
    const { layout: u, layoutId: d } = n.options
    window.MotionCancelOptimisedAnimation(s, 'transform', xe, !(u || d))
  }
  const { parent: l } = n
  l && !l.hasCheckedOptimisedAppear && sm(l)
}
function om({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: u,
}) {
  return class {
    constructor(f = {}, p = i == null ? void 0 : i()) {
      ;(this.id = r1++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(this.projectionUpdateScheduled = !1),
            ui &&
              (Vn.totalNodes =
                Vn.resolvedTargetDeltas =
                Vn.recalculatedProjection =
                  0),
            this.nodes.forEach(o1),
            this.nodes.forEach(f1),
            this.nodes.forEach(d1),
            this.nodes.forEach(l1),
            ui && window.MotionDebug.record(Vn)
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0)
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0
      this.root === this && (this.nodes = new $x())
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new ru()),
        this.eventHandlers.get(f).add(p)
      )
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f)
      m && m.notify(...p)
    }
    hasListeners(f) {
      return this.eventHandlers.has(f)
    }
    mount(f, p = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = Wx(f)), (this.instance = f)
      const { layoutId: m, layout: y, visualElement: v } = this.options
      if (
        (v && !v.current && v.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (y || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let w
        const P = () => (this.root.updateBlockedByResize = !1)
        n(f, () => {
          ;(this.root.updateBlockedByResize = !0),
            w && w(),
            (w = Kx(P, 250)),
            Bs.hasAnimatedSinceResize &&
              ((Bs.hasAnimatedSinceResize = !1), this.nodes.forEach(kh))
        })
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || y) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: w,
              hasLayoutChanged: P,
              hasRelativeTargetChanged: D,
              layout: k,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const C =
                  this.options.transition || v.getDefaultTransition() || y1,
                { onLayoutAnimationStart: A, onLayoutAnimationComplete: N } =
                  v.getProps(),
                z = !this.targetLayout || !im(this.targetLayout, k) || D,
                B = !P && D
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                B ||
                (P && (z || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(w, B)
                const G = { ...Za(C, 'layout'), onPlay: A, onComplete: N }
                ;(v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((G.delay = 0), (G.type = !1)),
                  this.startAnimation(G)
              } else
                P || kh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete()
              this.targetLayout = k
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const f = this.getStack()
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        gn(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      )
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(h1),
        this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options
      return f && f.getProps().transformTemplate
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          sm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return
      this.isLayoutDirty = !0
      for (let v = 0; v < this.path.length; v++) {
        const w = this.path[v]
        ;(w.shouldResetTransform = !0),
          w.updateScroll('snapshot'),
          w.options.layoutRoot && w.willUpdate(!1)
      }
      const { layoutId: p, layout: m } = this.options
      if (p === void 0 && !m) return
      const y = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = y
        ? y(this.latestValues, '')
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners('willUpdate')
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ch)
        return
      }
      this.isUpdating || this.nodes.forEach(u1),
        (this.isUpdating = !1),
        this.nodes.forEach(c1),
        this.nodes.forEach(i1),
        this.nodes.forEach(s1),
        this.clearAllSnapshots()
      const p = It.now()
      ;($e.delta = Xt(0, 1e3 / 60, p - $e.timestamp)),
        ($e.timestamp = p),
        ($e.isProcessing = !0),
        ta.update.process($e),
        ta.preRender.process($e),
        ta.render.process($e),
        ($e.isProcessing = !1)
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ua.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(a1), this.sharedNodes.forEach(p1)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        xe.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      xe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll()
      const f = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = Re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: p } = this.options
      p &&
        p.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        )
    }
    updateScroll(f = 'measure') {
      let p = !!(this.options.layoutScroll && this.instance)
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p)
      ) {
        const m = l(this.instance)
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        }
      }
    }
    resetTransform() {
      if (!u) return
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !rm(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, '') : void 0,
        v = y !== this.prevTransformTemplateValue
      f &&
        (p || Ln(this.latestValues) || v) &&
        (u(this.instance, y),
        (this.shouldResetTransform = !1),
        this.scheduleRender())
    }
    measure(f = !0) {
      const p = this.measurePageBox()
      let m = this.removeElementScroll(p)
      return (
        f && (m = this.removeTransform(m)),
        v1(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      var f
      const { visualElement: p } = this.options
      if (!p) return Re()
      const m = p.measureViewportBox()
      if (
        !(
          ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) ||
          this.path.some(x1)
        )
      ) {
        const { scroll: v } = this.root
        v && (dr(m.x, v.offset.x), dr(m.y, v.offset.y))
      }
      return m
    }
    removeElementScroll(f) {
      var p
      const m = Re()
      if (
        (wt(m, f), !((p = this.scroll) === null || p === void 0) && p.wasRoot)
      )
        return m
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y],
          { scroll: w, options: P } = v
        v !== this.root &&
          w &&
          P.layoutScroll &&
          (w.wasRoot && wt(m, f), dr(m.x, w.offset.x), dr(m.y, w.offset.y))
      }
      return m
    }
    applyTransform(f, p = !1) {
      const m = Re()
      wt(m, f)
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y]
        !p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          hr(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Ln(v.latestValues) && hr(m, v.latestValues)
      }
      return Ln(this.latestValues) && hr(m, this.latestValues), m
    }
    removeTransform(f) {
      const p = Re()
      wt(p, f)
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m]
        if (!y.instance || !Ln(y.latestValues)) continue
        ja(y.latestValues) && y.updateSnapshot()
        const v = Re(),
          w = y.measurePageBox()
        wt(v, w),
          yh(p, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, v)
      }
      return Ln(this.latestValues) && yh(p, this.latestValues), p
    }
    setTargetDelta(f) {
      ;(this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0)
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== $e.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(f = !1) {
      var p
      const m = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty)
      const y = !!this.resumingFrom || this !== m
      if (
        !(
          f ||
          (y && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((p = this.parent) === null || p === void 0) &&
            p.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return
      const { layout: w, layoutId: P } = this.options
      if (!(!this.layout || !(w || P))) {
        if (
          ((this.resolvedRelativeTargetAt = $e.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const D = this.getClosestProjectingParent()
          D && D.layout && this.animationProgress !== 1
            ? ((this.relativeParent = D),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Re()),
              (this.relativeTargetOrigin = Re()),
              hi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                D.layout.layoutBox
              ),
              wt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Re()), (this.targetWithTransforms = Re())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Px(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : wt(this.target, this.layout.layoutBox),
                Zp(this.target, this.targetDelta))
              : wt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const D = this.getClosestProjectingParent()
            D &&
            !!D.resumingFrom == !!this.resumingFrom &&
            !D.options.layoutScroll &&
            D.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = D),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Re()),
                (this.relativeTargetOrigin = Re()),
                hi(this.relativeTargetOrigin, this.target, D.target),
                wt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          ui && Vn.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ja(this.parent.latestValues) ||
          qp(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      )
    }
    calcProjection() {
      var f
      const p = this.getLead(),
        m = !!this.resumingFrom || this !== p
      let y = !0
      if (
        ((this.isProjectionDirty ||
          (!((f = this.parent) === null || f === void 0) &&
            f.isProjectionDirty)) &&
          (y = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === $e.timestamp && (y = !1),
        y)
      )
        return
      const { layout: v, layoutId: w } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || w))
      )
        return
      wt(this.layoutCorrected, this.layout.layoutBox)
      const P = this.treeScale.x,
        D = this.treeScale.y
      Nx(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Re()))
      const { target: k } = p
      if (!k) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender())
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ph(this.prevProjectionDelta.x, this.projectionDelta.x),
          ph(this.prevProjectionDelta.y, this.projectionDelta.y)),
        di(this.projectionDelta, this.layoutCorrected, k, this.latestValues),
        (this.treeScale.x !== P ||
          this.treeScale.y !== D ||
          !Ph(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ph(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', k)),
        ui && Vn.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(f = !0) {
      var p
      if (
        ((p = this.options.visualElement) === null ||
          p === void 0 ||
          p.scheduleRender(),
        f)
      ) {
        const m = this.getStack()
        m && m.scheduleRender()
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      ;(this.prevProjectionDelta = fr()),
        (this.projectionDelta = fr()),
        (this.projectionDeltaWithTransform = fr())
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        y = m ? m.latestValues : {},
        v = { ...this.latestValues },
        w = fr()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p)
      const P = Re(),
        D = m ? m.source : void 0,
        k = this.layout ? this.layout.source : void 0,
        C = D !== k,
        A = this.getStack(),
        N = !A || A.members.length <= 1,
        z = !!(C && !N && this.options.crossfade === !0 && !this.path.some(g1))
      this.animationProgress = 0
      let B
      ;(this.mixTargetDelta = (G) => {
        const U = G / 1e3
        Eh(w.x, f.x, U),
          Eh(w.y, f.y, U),
          this.setTargetDelta(w),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hi(P, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            m1(this.relativeTarget, this.relativeTargetOrigin, P, U),
            B && Jx(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = Re()),
            wt(B, this.relativeTarget)),
          C &&
            ((this.animationValues = v), Gx(v, y, this.latestValues, U, z, N)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = U)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(f) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xe.update(() => {
          ;(Bs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Ux(0, Th, {
              ...f,
              onUpdate: (p) => {
                this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p)
              },
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation()
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const f = this.getStack()
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Th),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const f = this.getLead()
      let { targetWithTransforms: p, target: m, layout: y, latestValues: v } = f
      if (!(!p || !m || !y)) {
        if (
          this !== f &&
          this.layout &&
          y &&
          lm(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || Re()
          const w = ht(this.layout.layoutBox.x)
          ;(m.x.min = f.target.x.min), (m.x.max = m.x.min + w)
          const P = ht(this.layout.layoutBox.y)
          ;(m.y.min = f.target.y.min), (m.y.max = m.y.min + P)
        }
        wt(p, m),
          hr(p, v),
          di(this.projectionDeltaWithTransform, this.layoutCorrected, p, v)
      }
    }
    registerSharedNode(f, p) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new e1()),
        this.sharedNodes.get(f).add(p)
      const y = p.options.initialPromotionConfig
      p.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity
            ? y.shouldPreserveFollowOpacity(p)
            : void 0,
      })
    }
    isLead() {
      const f = this.getStack()
      return f ? f.lead === this : !0
    }
    getLead() {
      var f
      const { layoutId: p } = this.options
      return p
        ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.lead) ||
            this
        : this
    }
    getPrevLead() {
      var f
      const { layoutId: p } = this.options
      return p
        ? (f = this.getStack()) === null || f === void 0
          ? void 0
          : f.prevLead
        : void 0
    }
    getStack() {
      const { layoutId: f } = this.options
      if (f) return this.root.sharedNodes.get(f)
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const y = this.getStack()
      y && y.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p })
    }
    relegate() {
      const f = this.getStack()
      return f ? f.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options
      if (!f) return
      let p = !1
      const { latestValues: m } = f
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return
      const y = {}
      m.z && ca('z', f, y, this.animationValues)
      for (let v = 0; v < ua.length; v++)
        ca(`rotate${ua[v]}`, f, y, this.animationValues),
          ca(`skew${ua[v]}`, f, y, this.animationValues)
      f.render()
      for (const v in y)
        f.setStaticValue(v, y[v]),
          this.animationValues && (this.animationValues[v] = y[v])
      f.scheduleRender()
    }
    getProjectionStyles(f) {
      var p, m
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return n1
      const y = { visibility: '' },
        v = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (y.opacity = ''),
          (y.pointerEvents = Fs(f == null ? void 0 : f.pointerEvents) || ''),
          (y.transform = v ? v(this.latestValues, '') : 'none'),
          y
        )
      const w = this.getLead()
      if (!this.projectionDelta || !this.layout || !w.target) {
        const C = {}
        return (
          this.options.layoutId &&
            ((C.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (C.pointerEvents = Fs(f == null ? void 0 : f.pointerEvents) || '')),
          this.hasProjected &&
            !Ln(this.latestValues) &&
            ((C.transform = v ? v({}, '') : 'none'), (this.hasProjected = !1)),
          C
        )
      }
      const P = w.animationValues || w.latestValues
      this.applyTransformsToTarget(),
        (y.transform = t1(
          this.projectionDeltaWithTransform,
          this.treeScale,
          P
        )),
        v && (y.transform = v(P, y.transform))
      const { x: D, y: k } = this.projectionDelta
      ;(y.transformOrigin = `${D.origin * 100}% ${k.origin * 100}% 0`),
        w.animationValues
          ? (y.opacity =
              w === this
                ? (m =
                    (p = P.opacity) !== null && p !== void 0
                      ? p
                      : this.latestValues.opacity) !== null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : P.opacityExit)
          : (y.opacity =
              w === this
                ? P.opacity !== void 0
                  ? P.opacity
                  : ''
                : P.opacityExit !== void 0
                ? P.opacityExit
                : 0)
      for (const C in Hs) {
        if (P[C] === void 0) continue
        const { correct: A, applyTo: N } = Hs[C],
          z = y.transform === 'none' ? P[C] : A(P[C], w)
        if (N) {
          const B = N.length
          for (let G = 0; G < B; G++) y[N[G]] = z
        } else y[C] = z
      }
      return (
        this.options.layoutId &&
          (y.pointerEvents =
            w === this
              ? Fs(f == null ? void 0 : f.pointerEvents) || ''
              : 'none'),
        y
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var p
        return (p = f.currentAnimation) === null || p === void 0
          ? void 0
          : p.stop()
      }),
        this.root.nodes.forEach(Ch),
        this.root.sharedNodes.clear()
    }
  }
}
function i1(n) {
  n.updateLayout()
}
function s1(n) {
  var i
  const s =
    ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) ||
    n.snapshot
  if (n.isLead() && n.layout && s && n.hasListeners('didUpdate')) {
    const { layoutBox: l, measuredBox: u } = n.layout,
      { animationType: d } = n.options,
      f = s.source !== n.layout.source
    d === 'size'
      ? St((w) => {
          const P = f ? s.measuredBox[w] : s.layoutBox[w],
            D = ht(P)
          ;(P.min = l[w].min), (P.max = P.min + D)
        })
      : lm(d, s.layoutBox, l) &&
        St((w) => {
          const P = f ? s.measuredBox[w] : s.layoutBox[w],
            D = ht(l[w])
          ;(P.max = P.min + D),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[w].max = n.relativeTarget[w].min + D))
        })
    const p = fr()
    di(p, l, s.layoutBox)
    const m = fr()
    f ? di(m, n.applyTransform(u, !0), s.measuredBox) : di(m, l, s.layoutBox)
    const y = !rm(p)
    let v = !1
    if (!n.resumeFrom) {
      const w = n.getClosestProjectingParent()
      if (w && !w.resumeFrom) {
        const { snapshot: P, layout: D } = w
        if (P && D) {
          const k = Re()
          hi(k, s.layoutBox, P.layoutBox)
          const C = Re()
          hi(C, l, D.layoutBox),
            im(k, C) || (v = !0),
            w.options.layoutRoot &&
              ((n.relativeTarget = C),
              (n.relativeTargetOrigin = k),
              (n.relativeParent = w))
        }
      }
    }
    n.notifyListeners('didUpdate', {
      layout: l,
      snapshot: s,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: y,
      hasRelativeTargetChanged: v,
    })
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options
    l && l()
  }
  n.options.transition = void 0
}
function o1(n) {
  ui && Vn.totalNodes++,
    n.parent &&
      (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
      n.isSharedProjectionDirty ||
        (n.isSharedProjectionDirty = !!(
          n.isProjectionDirty ||
          n.parent.isProjectionDirty ||
          n.parent.isSharedProjectionDirty
        )),
      n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function l1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function a1(n) {
  n.clearSnapshot()
}
function Ch(n) {
  n.clearMeasurements()
}
function u1(n) {
  n.isLayoutDirty = !1
}
function c1(n) {
  const { visualElement: i } = n.options
  i && i.getProps().onBeforeLayoutMeasure && i.notify('BeforeLayoutMeasure'),
    n.resetTransform()
}
function kh(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0)
}
function f1(n) {
  n.resolveTargetDelta()
}
function d1(n) {
  n.calcProjection()
}
function h1(n) {
  n.resetSkewAndRotation()
}
function p1(n) {
  n.removeLeadSnapshot()
}
function Eh(n, i, s) {
  ;(n.translate = ke(i.translate, 0, s)),
    (n.scale = ke(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint)
}
function jh(n, i, s, l) {
  ;(n.min = ke(i.min, s.min, l)), (n.max = ke(i.max, s.max, l))
}
function m1(n, i, s, l) {
  jh(n.x, i.x, s.x, l), jh(n.y, i.y, s.y, l)
}
function g1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0
}
const y1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Mh = (n) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  Ah = Mh('applewebkit/') && !Mh('chrome/') ? Math.round : dt
function Rh(n) {
  ;(n.min = Ah(n.min)), (n.max = Ah(n.max))
}
function v1(n) {
  Rh(n.x), Rh(n.y)
}
function lm(n, i, s) {
  return n === 'position' || (n === 'preserve-aspect' && !Sx(Sh(i), Sh(s), 0.2))
}
function x1(n) {
  var i
  return (
    n !== n.root &&
    ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot)
  )
}
const w1 = om({
    attachResizeListener: (n, i) => vi(n, 'resize', i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fa = { current: void 0 },
  am = om({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!fa.current) {
        const n = new w1({})
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (fa.current = n)
      }
      return fa.current
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : 'none'
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === 'fixed',
  }),
  S1 = {
    pan: { Feature: Ix },
    drag: { Feature: Ox, ProjectionNode: am, MeasureLayout: em },
  }
function Nh(n, i, s) {
  const { props: l } = n
  n.animationState &&
    l.whileHover &&
    n.animationState.setActive('whileHover', s === 'Start')
  const u = 'onHover' + s,
    d = l[u]
  d && xe.postRender(() => d(i, Pi(i)))
}
class P1 extends vn {
  mount() {
    const { current: i } = this.node
    i &&
      (this.unmount = Pv(
        i,
        (s) => (Nh(this.node, s, 'Start'), (l) => Nh(this.node, l, 'End'))
      ))
  }
  unmount() {}
}
class T1 extends vn {
  constructor() {
    super(...arguments), (this.isActive = !1)
  }
  onFocus() {
    let i = !1
    try {
      i = this.node.current.matches(':focus-visible')
    } catch {
      i = !0
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1))
  }
  mount() {
    this.unmount = Si(
      vi(this.node.current, 'focus', () => this.onFocus()),
      vi(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
function Dh(n, i, s) {
  const { props: l } = n
  n.animationState &&
    l.whileTap &&
    n.animationState.setActive('whileTap', s === 'Start')
  const u = 'onTap' + (s === 'End' ? '' : s),
    d = l[u]
  d && xe.postRender(() => d(i, Pi(i)))
}
class C1 extends vn {
  mount() {
    const { current: i } = this.node
    i &&
      (this.unmount = Ev(
        i,
        (s) => (
          Dh(this.node, s, 'Start'),
          (l, { success: u }) => Dh(this.node, l, u ? 'End' : 'Cancel')
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ))
  }
  unmount() {}
}
const Aa = new WeakMap(),
  da = new WeakMap(),
  k1 = (n) => {
    const i = Aa.get(n.target)
    i && i(n)
  },
  E1 = (n) => {
    n.forEach(k1)
  }
function j1({ root: n, ...i }) {
  const s = n || document
  da.has(s) || da.set(s, {})
  const l = da.get(s),
    u = JSON.stringify(i)
  return l[u] || (l[u] = new IntersectionObserver(E1, { root: n, ...i })), l[u]
}
function M1(n, i, s) {
  const l = j1(i)
  return (
    Aa.set(n, s),
    l.observe(n),
    () => {
      Aa.delete(n), l.unobserve(n)
    }
  )
}
const A1 = { some: 0, all: 1 }
class R1 extends vn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver() {
    this.unmount()
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: l, amount: u = 'some', once: d } = i,
      f = {
        root: s ? s.current : void 0,
        rootMargin: l,
        threshold: typeof u == 'number' ? u : A1[u],
      },
      p = (m) => {
        const { isIntersecting: y } = m
        if (
          this.isInView === y ||
          ((this.isInView = y), d && !y && this.hasEnteredView)
        )
          return
        y && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', y)
        const { onViewportEnter: v, onViewportLeave: w } = this.node.getProps(),
          P = y ? v : w
        P && P(m)
      }
    return M1(this.node.current, f, p)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: i, prevProps: s } = this.node
    ;['amount', 'margin', 'root'].some(N1(i, s)) && this.startObserver()
  }
  unmount() {}
}
function N1({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s]
}
const D1 = {
    inView: { Feature: R1 },
    tap: { Feature: C1 },
    focus: { Feature: T1 },
    hover: { Feature: P1 },
  },
  L1 = { layout: { ProjectionNode: am, MeasureLayout: em } },
  Ra = { current: null },
  um = { current: !1 }
function V1() {
  if (((um.current = !0), !!Oa))
    if (window.matchMedia) {
      const n = window.matchMedia('(prefers-reduced-motion)'),
        i = () => (Ra.current = n.matches)
      n.addListener(i), i()
    } else Ra.current = !1
}
const _1 = [...Vp, qe, yn],
  O1 = (n) => _1.find(Lp(n)),
  Lh = new WeakMap()
function I1(n, i, s) {
  for (const l in i) {
    const u = i[l],
      d = s[l]
    if (Ze(u)) n.addValue(l, u)
    else if (Ze(d)) n.addValue(l, gi(u, { owner: n }))
    else if (d !== u)
      if (n.hasValue(l)) {
        const f = n.getValue(l)
        f.liveStyle === !0 ? f.jump(u) : f.hasAnimated || f.set(u)
      } else {
        const f = n.getStaticValue(l)
        n.addValue(l, gi(f !== void 0 ? f : u, { owner: n }))
      }
  }
  for (const l in s) i[l] === void 0 && n.removeValue(l)
  return i
}
const Vh = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
]
class F1 {
  scrapeMotionValuesFromProps(i, s, l) {
    return {}
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: l,
      reducedMotionConfig: u,
      blockInitialAnimation: d,
      visualState: f,
    },
    p = {}
  ) {
    ;(this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = uu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ))
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const D = It.now()
        this.renderScheduledAt < D &&
          ((this.renderScheduledAt = D), xe.render(this.render, !1, !0))
      })
    const { latestValues: m, renderState: y, onUpdate: v } = f
    ;(this.onUpdate = v),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = y),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = bs(s)),
      (this.isVariantNode = Uh(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current))
    const { willChange: w, ...P } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this
    )
    for (const D in P) {
      const k = P[D]
      m[D] !== void 0 && Ze(k) && k.set(m[D], !1)
    }
  }
  mount(i) {
    ;(this.current = i),
      Lh.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      um.current || V1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Ra.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    Lh.delete(this.current),
      this.projection && this.projection.unmount(),
      gn(this.notifyUpdate),
      gn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const i in this.events) this.events[i].clear()
    for (const i in this.features) {
      const s = this.features[i]
      s && (s.unmount(), (s.isMounted = !1))
    }
    this.current = null
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)()
    const l = In.has(i),
      u = s.on('change', (p) => {
        ;(this.latestValues[i] = p),
          this.props.onUpdate && xe.preRender(this.notifyUpdate),
          l && this.projection && (this.projection.isTransformDirty = !0)
      }),
      d = s.on('renderRequest', this.scheduleRender)
    let f
    window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        u(), d(), f && f(), s.owner && s.stop()
      })
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current)
  }
  updateFeatures() {
    let i = 'animation'
    for (i in gr) {
      const s = gr[i]
      if (!s) continue
      const { isEnabled: l, Feature: u } = s
      if (
        (!this.features[i] &&
          u &&
          l(this.props) &&
          (this.features[i] = new u(this)),
        this.features[i])
      ) {
        const d = this.features[i]
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0))
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Re()
  }
  getStaticValue(i) {
    return this.latestValues[i]
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s
  }
  update(i, s) {
    ;(i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s)
    for (let l = 0; l < Vh.length; l++) {
      const u = Vh[l]
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](),
        delete this.propEventSubscriptions[u])
      const d = 'on' + u,
        f = i[d]
      f && (this.propEventSubscriptions[u] = this.on(u, f))
    }
    ;(this.prevMotionValues = I1(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this)
  }
  getProps() {
    return this.props
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode()
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(i),
        () => s.variantChildren.delete(i)
      )
  }
  addValue(i, s) {
    const l = this.values.get(i)
    s !== l &&
      (l && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      (this.latestValues[i] = s.get()))
  }
  removeValue(i) {
    this.values.delete(i)
    const s = this.valueSubscriptions.get(i)
    s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState)
  }
  hasValue(i) {
    return this.values.has(i)
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i]) return this.props.values[i]
    let l = this.values.get(i)
    return (
      l === void 0 &&
        s !== void 0 &&
        ((l = gi(s === null ? void 0 : s, { owner: this })),
        this.addValue(i, l)),
      l
    )
  }
  readValue(i, s) {
    var l
    let u =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (l = this.getBaseTargetFromProps(this.props, i)) !== null &&
          l !== void 0
        ? l
        : this.readValueFromInstance(this.current, i, this.options)
    return (
      u != null &&
        (typeof u == 'string' && (Np(u) || Pp(u))
          ? (u = parseFloat(u))
          : !O1(u) && yn.test(s) && (u = Mp(i, s)),
        this.setBaseTarget(i, Ze(u) ? u.get() : u)),
      Ze(u) ? u.get() : u
    )
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s
  }
  getBaseTarget(i) {
    var s
    const { initial: l } = this.props
    let u
    if (typeof l == 'string' || typeof l == 'object') {
      const f = Ha(
        this.props,
        l,
        (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom
      )
      f && (u = f[i])
    }
    if (l && u !== void 0) return u
    const d = this.getBaseTargetFromProps(this.props, i)
    return d !== void 0 && !Ze(d)
      ? d
      : this.initialValues[i] !== void 0 && u === void 0
      ? void 0
      : this.baseTarget[i]
  }
  on(i, s) {
    return this.events[i] || (this.events[i] = new ru()), this.events[i].add(s)
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s)
  }
}
class cm extends F1 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = _p)
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0
  }
  removeValueFromRenderState(i, { vars: s, style: l }) {
    delete s[i], delete l[i]
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription)
    const { children: i } = this.props
    Ze(i) &&
      (this.childSubscription = i.on('change', (s) => {
        this.current && (this.current.textContent = `${s}`)
      }))
  }
}
function z1(n) {
  return window.getComputedStyle(n)
}
class B1 extends cm {
  constructor() {
    super(...arguments), (this.type = 'html'), (this.renderInstance = qh)
  }
  readValueFromInstance(i, s) {
    if (In.has(s)) {
      const l = au(s)
      return (l && l.default) || 0
    } else {
      const l = z1(i),
        u = (Gh(s) ? l.getPropertyValue(s) : l[s]) || 0
      return typeof u == 'string' ? u.trim() : u
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return bp(i, s)
  }
  build(i, s, l) {
    Ya(i, s, l.transformTemplate)
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return qa(i, s, l)
  }
}
class U1 extends cm {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Re)
  }
  getBaseTargetFromProps(i, s) {
    return i[s]
  }
  readValueFromInstance(i, s) {
    if (In.has(s)) {
      const l = au(s)
      return (l && l.default) || 0
    }
    return (s = Zh.has(s) ? s : Ba(s)), i.getAttribute(s)
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return ep(i, s, l)
  }
  build(i, s, l) {
    Ga(i, s, this.isSVGTag, l.transformTemplate)
  }
  renderInstance(i, s, l, u) {
    bh(i, s, l, u)
  }
  mount(i) {
    ;(this.isSVGTag = Qa(i.tagName)), super.mount(i)
  }
}
const W1 = (n, i) =>
    Wa(n) ? new U1(i) : new B1(i, { allowProjection: n !== W.Fragment }),
  H1 = gv({ ...dx, ...D1, ...S1, ...L1 }, W1),
  Ke = Ny(H1),
  $1 = { some: 0, all: 1 }
function K1(n, i, { root: s, margin: l, amount: u = 'some' } = {}) {
  const d = ap(n),
    f = new WeakMap(),
    p = (y) => {
      y.forEach((v) => {
        const w = f.get(v.target)
        if (v.isIntersecting !== !!w)
          if (v.isIntersecting) {
            const P = i(v)
            typeof P == 'function' ? f.set(v.target, P) : m.unobserve(v.target)
          } else typeof w == 'function' && (w(v), f.delete(v.target))
      })
    },
    m = new IntersectionObserver(p, {
      root: s,
      rootMargin: l,
      threshold: typeof u == 'number' ? u : $1[u],
    })
  return d.forEach((y) => m.observe(y)), () => m.disconnect()
}
function to(n, { root: i, margin: s, amount: l, once: u = !1 } = {}) {
  const [d, f] = W.useState(!1)
  return (
    W.useEffect(() => {
      if (!n.current || (u && d)) return
      const p = () => (f(!0), u ? void 0 : () => f(!1)),
        m = { root: (i && i.current) || void 0, margin: s, amount: l }
      return K1(n.current, p, m)
    }, [i, n, s, u, l]),
    d
  )
}
function Y1() {
  function n() {
    const l = _t.useRef(null)
    return (
      _t.useEffect(() => {
        const u = new vy(l.current, {
          strings: ['你好', '我是<b>彭瀚翔</b>'],
          typeSpeed: 150,
          backSpeed: 150,
          showCursor: !1,
          backDelay: 1500,
          startDelay: 1e3,
        })
        return () => {
          u.destroy()
        }
      }, []),
      g.jsx('li', { ref: l })
    )
  }
  function i() {
    const l = [
      '人工智能 | 推荐策略 | 数据',
      '本人目前就读于南京大学新闻与传播专业数字营销传播方向专业硕士，主修数据分析、人工智能和数字营销。希望通过学习，能够在未来进入人工智能和推荐策略领域工作。本个人网站主要用于个人经历和项目经历的介绍和记录',
    ]
    return g.jsx(g.Fragment, {
      children: l.map((u, d) =>
        g.jsx(
          Ke.li,
          {
            animate: { opacity: 1, y: 0 },
            initial: { opacity: 0, y: 75 },
            transition: { type: 'spring', visualDuration: 0.8, bounce: 0 },
            children: u,
          },
          d
        )
      ),
    })
  }
  function s() {
    return g.jsx(Ke.span, {
      className: 'iconfont icon-xiajiantou',
      animate: { opacity: 0.8, y: 0 },
      initial: { opacity: 0, y: 12 },
      transition: {
        duration: 0.85,
        repeat: 1 / 0,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    })
  }
  return g.jsxs('div', {
    className: 'preface',
    children: [
      g.jsxs('ul', {
        className: 'preface-content-container',
        children: [g.jsx(n, {}), g.jsx(i, {})],
      }),
      g.jsx('div', { className: 'arrow', children: g.jsx(s, {}) }),
    ],
  })
}
function G1() {
  const n = _t.useRef(null),
    [i, s] = _t.useState(window.scrollY)
  return (
    _t.useEffect(() => {
      const l = () => {
        s(window.scrollY)
      }
      return (
        window.addEventListener('scroll', l),
        () => {
          window.removeEventListener('scroll', l)
        }
      )
    }, []),
    _t.useEffect(() => {
      const l = window.innerHeight / 100
      i > l * 50
        ? (n.current.style.height = '7vh')
        : (n.current.style.height = '10vh')
    }, [i]),
    g.jsxs('div', {
      ref: n,
      className: 'navigation',
      children: [
        g.jsxs('div', {
          className: 'logo-container',
          onClick: () => {
            window.scrollTo({ top: 0 })
          },
          children: [g.jsx('div', { className: 'logo' }), 'CecilPeng'],
        }),
        g.jsx('div', {
          className: 'navigation-menu',
          children: g.jsxs('ul', {
            children: [
              g.jsx('li', {
                children: g.jsx('a', { href: '#aboutme', children: '关于我' }),
              }),
              g.jsx('li', {
                children: g.jsx('a', {
                  href: '#working',
                  children: '工作经历',
                }),
              }),
              g.jsx('li', {
                children: g.jsx('a', {
                  href: '#program',
                  children: '项目作品',
                }),
              }),
              g.jsx('li', {
                children: g.jsx('a', {
                  href: '#contact',
                  children: '联系方式',
                }),
              }),
            ],
          }),
        }),
        g.jsxs('div', {
          className: 'menu-toggle-container',
          children: [
            g.jsx('div', { className: 'menu-toggle', children: '待做清单' }),
            g.jsxs('ul', {
              className: 'todolist',
              children: [
                g.jsx('li', { children: '1. 英文版' }),
                g.jsx('li', { children: '2. 摄影集' }),
                g.jsx('li', { children: '3. 循环轮播图的悬停功能' }),
                g.jsx('li', {
                  children:
                    '4. 将数据分析作业和爬虫整合至项目作品，并添加筛选功能',
                }),
                g.jsx('li', { children: '5. 响应式' }),
              ],
            }),
          ],
        }),
      ],
    })
  )
}
var Us = { exports: {} },
  X1 = Us.exports,
  _h
function Q1() {
  return (
    _h ||
      ((_h = 1),
      (function (n, i) {
        ;(function (s, l) {
          n.exports = l()
        })(typeof self < 'u' ? self : X1, () =>
          (() => {
            var s = {
                d: (k, C) => {
                  for (var A in C)
                    s.o(C, A) &&
                      !s.o(k, A) &&
                      Object.defineProperty(k, A, { enumerable: !0, get: C[A] })
                },
                o: (k, C) => Object.prototype.hasOwnProperty.call(k, C),
                r: (k) => {
                  typeof Symbol < 'u' &&
                    Symbol.toStringTag &&
                    Object.defineProperty(k, Symbol.toStringTag, {
                      value: 'Module',
                    }),
                    Object.defineProperty(k, '__esModule', { value: !0 })
                },
              },
              l = {}
            function u(k, C) {
              return (
                k == null && (k = 0),
                C == null && (C = 1),
                k + Math.random() * (C - k)
              )
            }
            s.r(l),
              s.d(l, { default: () => D }),
              (Number.prototype.clamp = function (k, C) {
                return Math.min(Math.max(this, k), C)
              })
            function d(k) {
              for (; k.children && k.children.length > 0; )
                d(k.children[0]), k.remove(k.children[0])
              k.geometry && k.geometry.dispose(),
                k.material &&
                  (Object.keys(k.material).forEach((C) => {
                    k.material[C] &&
                      k.material[C] !== null &&
                      typeof k.material[C].dispose == 'function' &&
                      k.material[C].dispose()
                  }),
                  k.material.dispose())
            }
            const f = typeof window == 'object'
            let p = (f && window.THREE) || {}
            f && !window.VANTA && (window.VANTA = {})
            const m = (f && window.VANTA) || {}
            ;(m.register = (k, C) => (m[k] = (A) => new C(A))),
              (m.version = '0.5.24')
            const y = function () {
              return (
                Array.prototype.unshift.call(arguments, '[VANTA]'),
                console.error.apply(this, arguments)
              )
            }
            m.VantaBase = class {
              constructor(k = {}) {
                if (!f) return !1
                ;(m.current = this),
                  (this.windowMouseMoveWrapper =
                    this.windowMouseMoveWrapper.bind(this)),
                  (this.windowTouchWrapper =
                    this.windowTouchWrapper.bind(this)),
                  (this.windowGyroWrapper = this.windowGyroWrapper.bind(this)),
                  (this.resize = this.resize.bind(this)),
                  (this.animationLoop = this.animationLoop.bind(this)),
                  (this.restart = this.restart.bind(this))
                const C =
                  typeof this.getDefaultOptions == 'function'
                    ? this.getDefaultOptions()
                    : this.defaultOptions
                if (
                  ((this.options = Object.assign(
                    {
                      mouseControls: !0,
                      touchControls: !0,
                      gyroControls: !1,
                      minHeight: 200,
                      minWidth: 200,
                      scale: 1,
                      scaleMobile: 1,
                    },
                    C
                  )),
                  (k instanceof HTMLElement || typeof k == 'string') &&
                    (k = { el: k }),
                  Object.assign(this.options, k),
                  this.options.THREE && (p = this.options.THREE),
                  (this.el = this.options.el),
                  this.el == null)
                )
                  y('Instance needs "el" param!')
                else if (!(this.options.el instanceof HTMLElement)) {
                  const B = this.el
                  if (
                    ((this.el = ((A = B), document.querySelector(A))), !this.el)
                  )
                    return void y('Cannot find element', B)
                }
                var A, N
                this.prepareEl(), this.initThree(), this.setSize()
                try {
                  this.init()
                } catch (B) {
                  return (
                    y('Init error', B),
                    this.renderer &&
                      this.renderer.domElement &&
                      this.el.removeChild(this.renderer.domElement),
                    void (
                      this.options.backgroundColor &&
                      (console.log('[VANTA] Falling back to backgroundColor'),
                      (this.el.style.background =
                        ((N = this.options.backgroundColor),
                        typeof N == 'number'
                          ? '#' + ('00000' + N.toString(16)).slice(-6)
                          : N)))
                    )
                  )
                }
                this.initMouse(), this.resize(), this.animationLoop()
                const z = window.addEventListener
                z('resize', this.resize),
                  window.requestAnimationFrame(this.resize),
                  this.options.mouseControls &&
                    (z('scroll', this.windowMouseMoveWrapper),
                    z('mousemove', this.windowMouseMoveWrapper)),
                  this.options.touchControls &&
                    (z('touchstart', this.windowTouchWrapper),
                    z('touchmove', this.windowTouchWrapper)),
                  this.options.gyroControls &&
                    z('deviceorientation', this.windowGyroWrapper)
              }
              setOptions(k = {}) {
                Object.assign(this.options, k), this.triggerMouseMove()
              }
              prepareEl() {
                let k, C
                if (typeof Node < 'u' && Node.TEXT_NODE)
                  for (k = 0; k < this.el.childNodes.length; k++) {
                    const A = this.el.childNodes[k]
                    if (A.nodeType === Node.TEXT_NODE) {
                      const N = document.createElement('span')
                      ;(N.textContent = A.textContent),
                        A.parentElement.insertBefore(N, A),
                        A.remove()
                    }
                  }
                for (k = 0; k < this.el.children.length; k++)
                  (C = this.el.children[k]),
                    getComputedStyle(C).position === 'static' &&
                      (C.style.position = 'relative'),
                    getComputedStyle(C).zIndex === 'auto' &&
                      (C.style.zIndex = 1)
                getComputedStyle(this.el).position === 'static' &&
                  (this.el.style.position = 'relative')
              }
              applyCanvasStyles(k, C = {}) {
                Object.assign(k.style, {
                  position: 'absolute',
                  zIndex: 0,
                  top: 0,
                  left: 0,
                  background: '',
                }),
                  Object.assign(k.style, C),
                  k.classList.add('vanta-canvas')
              }
              initThree() {
                p.WebGLRenderer
                  ? ((this.renderer = new p.WebGLRenderer({
                      alpha: !0,
                      antialias: !0,
                    })),
                    this.el.appendChild(this.renderer.domElement),
                    this.applyCanvasStyles(this.renderer.domElement),
                    isNaN(this.options.backgroundAlpha) &&
                      (this.options.backgroundAlpha = 1),
                    (this.scene = new p.Scene()))
                  : console.warn('[VANTA] No THREE defined on window')
              }
              getCanvasElement() {
                return this.renderer
                  ? this.renderer.domElement
                  : this.p5renderer
                  ? this.p5renderer.canvas
                  : void 0
              }
              getCanvasRect() {
                const k = this.getCanvasElement()
                return !!k && k.getBoundingClientRect()
              }
              windowMouseMoveWrapper(k) {
                const C = this.getCanvasRect()
                if (!C) return !1
                const A = k.clientX - C.left,
                  N = k.clientY - C.top
                A >= 0 &&
                  N >= 0 &&
                  A <= C.width &&
                  N <= C.height &&
                  ((this.mouseX = A),
                  (this.mouseY = N),
                  this.options.mouseEase || this.triggerMouseMove(A, N))
              }
              windowTouchWrapper(k) {
                const C = this.getCanvasRect()
                if (!C) return !1
                if (k.touches.length === 1) {
                  const A = k.touches[0].clientX - C.left,
                    N = k.touches[0].clientY - C.top
                  A >= 0 &&
                    N >= 0 &&
                    A <= C.width &&
                    N <= C.height &&
                    ((this.mouseX = A),
                    (this.mouseY = N),
                    this.options.mouseEase || this.triggerMouseMove(A, N))
                }
              }
              windowGyroWrapper(k) {
                const C = this.getCanvasRect()
                if (!C) return !1
                const A = Math.round(2 * k.alpha) - C.left,
                  N = Math.round(2 * k.beta) - C.top
                A >= 0 &&
                  N >= 0 &&
                  A <= C.width &&
                  N <= C.height &&
                  ((this.mouseX = A),
                  (this.mouseY = N),
                  this.options.mouseEase || this.triggerMouseMove(A, N))
              }
              triggerMouseMove(k, C) {
                k === void 0 &&
                  C === void 0 &&
                  (this.options.mouseEase
                    ? ((k = this.mouseEaseX), (C = this.mouseEaseY))
                    : ((k = this.mouseX), (C = this.mouseY))),
                  this.uniforms &&
                    ((this.uniforms.iMouse.value.x = k / this.scale),
                    (this.uniforms.iMouse.value.y = C / this.scale))
                const A = k / this.width,
                  N = C / this.height
                typeof this.onMouseMove == 'function' && this.onMouseMove(A, N)
              }
              setSize() {
                this.scale || (this.scale = 1),
                  typeof navigator < 'u' &&
                  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                    window.innerWidth < 600) &&
                  this.options.scaleMobile
                    ? (this.scale = this.options.scaleMobile)
                    : this.options.scale && (this.scale = this.options.scale),
                  (this.width = Math.max(
                    this.el.offsetWidth,
                    this.options.minWidth
                  )),
                  (this.height = Math.max(
                    this.el.offsetHeight,
                    this.options.minHeight
                  ))
              }
              initMouse() {
                ;((!this.mouseX && !this.mouseY) ||
                  (this.mouseX === this.options.minWidth / 2 &&
                    this.mouseY === this.options.minHeight / 2)) &&
                  ((this.mouseX = this.width / 2),
                  (this.mouseY = this.height / 2),
                  this.triggerMouseMove(this.mouseX, this.mouseY))
              }
              resize() {
                this.setSize(),
                  this.camera &&
                    ((this.camera.aspect = this.width / this.height),
                    typeof this.camera.updateProjectionMatrix == 'function' &&
                      this.camera.updateProjectionMatrix()),
                  this.renderer &&
                    (this.renderer.setSize(this.width, this.height),
                    this.renderer.setPixelRatio(
                      window.devicePixelRatio / this.scale
                    )),
                  typeof this.onResize == 'function' && this.onResize()
              }
              isOnScreen() {
                const k = this.el.offsetHeight,
                  C = this.el.getBoundingClientRect(),
                  A =
                    window.pageYOffset ||
                    (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                    ).scrollTop,
                  N = C.top + A
                return N - window.innerHeight <= A && A <= N + k
              }
              animationLoop() {
                this.t || (this.t = 0), this.t2 || (this.t2 = 0)
                const k = performance.now()
                if (this.prevNow) {
                  let C = (k - this.prevNow) / 16.666666666666668
                  ;(C = Math.max(0.2, Math.min(C, 5))),
                    (this.t += C),
                    (this.t2 += (this.options.speed || 1) * C),
                    this.uniforms &&
                      (this.uniforms.iTime.value = 0.016667 * this.t2)
                }
                return (
                  (this.prevNow = k),
                  this.options.mouseEase &&
                    ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
                    (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
                    Math.abs(this.mouseEaseX - this.mouseX) +
                      Math.abs(this.mouseEaseY - this.mouseY) >
                      0.1 &&
                      ((this.mouseEaseX +=
                        0.05 * (this.mouseX - this.mouseEaseX)),
                      (this.mouseEaseY +=
                        0.05 * (this.mouseY - this.mouseEaseY)),
                      this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
                  (this.isOnScreen() || this.options.forceAnimate) &&
                    (typeof this.onUpdate == 'function' && this.onUpdate(),
                    this.scene &&
                      this.camera &&
                      (this.renderer.render(this.scene, this.camera),
                      this.renderer.setClearColor(
                        this.options.backgroundColor,
                        this.options.backgroundAlpha
                      )),
                    this.fps && this.fps.update && this.fps.update(),
                    typeof this.afterRender == 'function' &&
                      this.afterRender()),
                  (this.req = window.requestAnimationFrame(this.animationLoop))
                )
              }
              restart() {
                if (this.scene)
                  for (; this.scene.children.length; )
                    this.scene.remove(this.scene.children[0])
                typeof this.onRestart == 'function' && this.onRestart(),
                  this.init()
              }
              init() {
                typeof this.onInit == 'function' && this.onInit()
              }
              destroy() {
                typeof this.onDestroy == 'function' && this.onDestroy()
                const k = window.removeEventListener
                k('touchstart', this.windowTouchWrapper),
                  k('touchmove', this.windowTouchWrapper),
                  k('scroll', this.windowMouseMoveWrapper),
                  k('mousemove', this.windowMouseMoveWrapper),
                  k('deviceorientation', this.windowGyroWrapper),
                  k('resize', this.resize),
                  window.cancelAnimationFrame(this.req)
                const C = this.scene
                C && C.children && d(C),
                  this.renderer &&
                    (this.renderer.domElement &&
                      this.el.removeChild(this.renderer.domElement),
                    (this.renderer = null),
                    (this.scene = null)),
                  m.current === this && (m.current = null)
              }
            }
            const v = m.VantaBase
            let w = typeof window == 'object' && window.THREE
            class P extends v {
              static initClass() {
                this.prototype.defaultOptions = {
                  color: 16746528,
                  color2: 16746528,
                  backgroundColor: 2236962,
                  size: 3,
                  spacing: 35,
                  showLines: !0,
                }
              }
              onInit() {
                var C = (this.camera = new w.PerspectiveCamera(
                  50,
                  this.width / this.height,
                  0.1,
                  5e3
                ))
                ;(C.position.x = 0),
                  (C.position.y = 250),
                  (C.position.z = 50),
                  (C.tx = 0),
                  (C.ty = 50),
                  (C.tz = 350),
                  C.lookAt(0, 0, 0),
                  this.scene.add(C)
                var A,
                  N,
                  z,
                  B,
                  G,
                  U,
                  b,
                  ie = (this.starsGeometry = new w.BufferGeometry()),
                  q = this.options.spacing
                const pe = []
                for (A = z = -30; z <= 30; A = ++z)
                  for (N = B = -30; B <= 30; N = ++B)
                    ((G = new w.Vector3()).x = A * q + q / 2),
                      (G.y = u(0, 5) - 150),
                      (G.z = N * q + q / 2),
                      pe.push(G)
                if (
                  (ie.setFromPoints(pe),
                  (U = new w.PointsMaterial({
                    color: this.options.color,
                    size: this.options.size,
                  })),
                  (b = this.starField = new w.Points(ie, U)),
                  this.scene.add(b),
                  this.options.showLines)
                ) {
                  var we = new w.LineBasicMaterial({
                      color: this.options.color2,
                    }),
                    Ue = new w.BufferGeometry()
                  const Z = []
                  for (A = 0; A < 200; A++) {
                    var Oe = u(40, 60),
                      De = Oe + u(12, 20),
                      Le = u(-1, 1),
                      et = Math.sqrt(1 - Le * Le),
                      Ie = u(0, 2 * Math.PI),
                      re = Math.sin(Ie) * et,
                      F = Math.cos(Ie) * et
                    Z.push(new w.Vector3(F * Oe, re * Oe, Le * Oe)),
                      Z.push(new w.Vector3(F * De, re * De, Le * De))
                  }
                  Ue.setFromPoints(Z),
                    (this.linesMesh = new w.LineSegments(Ue, we)),
                    this.scene.add(this.linesMesh)
                }
              }
              onUpdate() {
                const C = this.starsGeometry
                this.starField
                for (
                  var A = 0;
                  A < C.attributes.position.array.length;
                  A += 3
                ) {
                  const B = C.attributes.position.array[A],
                    G = C.attributes.position.array[A + 1],
                    U = C.attributes.position.array[A + 2],
                    b = G + 0.1 * Math.sin(0.02 * U + 0.015 * B + 0.02 * this.t)
                  C.attributes.position.array[A + 1] = b
                }
                C.attributes.position.setUsage(w.DynamicDrawUsage),
                  C.computeVertexNormals(),
                  (C.attributes.position.needsUpdate = !0)
                const N = this.camera,
                  z = 0.003
                ;(N.position.x += (N.tx - N.position.x) * z),
                  (N.position.y += (N.ty - N.position.y) * z),
                  (N.position.z += (N.tz - N.position.z) * z),
                  N.lookAt(0, 0, 0),
                  this.linesMesh &&
                    ((this.linesMesh.rotation.z += 0.002),
                    (this.linesMesh.rotation.x += 8e-4),
                    (this.linesMesh.rotation.y += 5e-4))
              }
              onMouseMove(C, A) {
                ;(this.camera.tx = 100 * (C - 0.5)),
                  (this.camera.ty = 50 + 50 * A)
              }
              onRestart() {
                this.scene.remove(this.starField)
              }
            }
            P.initClass()
            const D = m.register('DOTS', P)
            return l
          })()
        )
      })(Us)),
    Us.exports
  )
}
var q1 = Q1()
const Z1 = Na(q1),
  b1 = () => {
    const [n, i] = W.useState(null),
      s = W.useRef(null)
    return (
      W.useEffect(() => {
        if (!n) {
          i(
            Z1({
              el: s.current,
              width: window.innerWidth,
              height: window.innerHeight,
              size: 3,
              spacing: 35,
              color: 5612987,
              backgroundColor: 1579032,
              showLines: !0,
            })
          )
          const l = () => {
            n && n.resize()
          }
          return (
            window.addEventListener('resize', l),
            () => {
              window.removeEventListener('resize', l)
            }
          )
        }
        return () => {
          n && n.destroy()
        }
      }, [n]),
      g.jsx('div', {
        className: 'background-container',
        id: 'background-container',
        children: g.jsx('div', { ref: s, className: 'background-content' }),
      })
    )
  },
  J1 = '/assets/3342f2fff552146dc29c2095754c022-CtBrpevJ.jpg',
  pr = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: 'easeInOut' },
  }
function ew() {
  const n = W.useRef(null),
    i = to(n, { once: !0, amount: 0.5 })
  function s() {
    return g.jsx(g.Fragment, {
      children: g.jsxs(Ke.ul, {
        animate: { x: ['0%', '-54%'] },
        transition: { duration: 10, repeat: 1 / 0, ease: 'linear' },
        children: [
          g.jsx('li', { children: '数据分析' }),
          g.jsx('li', { children: '数据可视化' }),
          g.jsx('li', { children: '原型设计' }),
          g.jsx('li', { children: '内容生产' }),
          g.jsx('li', { children: '用户研究' }),
          g.jsx('li', { children: '数据分析' }),
          g.jsx('li', { children: '数据可视化' }),
          g.jsx('li', { children: '原型设计' }),
          g.jsx('li', { children: '内容生产' }),
          g.jsx('li', { children: '用户研究' }),
          g.jsx('li', { children: '数据分析' }),
          g.jsx('li', { children: '数据可视化' }),
          g.jsx('li', { children: '原型设计' }),
          g.jsx('li', { children: '内容生产' }),
          g.jsx('li', { children: '用户研究' }),
          g.jsx('li', { children: '数据分析' }),
          g.jsx('li', { children: '数据可视化' }),
          g.jsx('li', { children: '原型设计' }),
          g.jsx('li', { children: '内容生产' }),
          g.jsx('li', { children: '用户研究' }),
        ],
      }),
    })
  }
  return g.jsx('div', {
    ref: n,
    className: 'aboutme',
    id: 'aboutme',
    children:
      i &&
      g.jsxs(g.Fragment, {
        children: [
          g.jsxs(Ke.div, {
            className: 'self-introduction-container',
            ...pr,
            children: [
              g.jsx('div', {
                className: 'self-image',
                style: { backgroundImage: `url(${J1})` },
              }),
              g.jsx('div', {
                className: 'self-name',
                children: g.jsx('b', { children: '彭瀚翔' }),
              }),
              g.jsx('div', {
                className: 'contact-menu',
                children: g.jsxs('ul', {
                  children: [
                    g.jsx('li', {
                      children: g.jsx('a', {
                        href: 'mailto:cecilpeng@foxmail.com',
                        children: g.jsx('span', {
                          className: 'iconfont icon-youxiang',
                        }),
                      }),
                    }),
                    g.jsx('li', {
                      children: g.jsx('a', {
                        href: 'https://github.com/CecilDx',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: g.jsx('span', {
                          className: 'iconfont icon-github',
                        }),
                      }),
                    }),
                    g.jsx('li', {
                      children: g.jsx('a', {
                        href: 'https://www.xiaohongshu.com/user/profile/648ec8a8000000001001c31d',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: g.jsx('span', {
                          className: 'iconfont icon-a-redbook',
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          g.jsxs(Ke.div, {
            className: 'aboutme-container',
            ...pr,
            children: [
              g.jsxs('div', {
                className: 'edu-titles',
                children: [
                  g.jsx('span', { children: '教育经历' }),
                  g.jsx('a', {
                    href: './file/彭瀚翔 南京大学 一周内到岗 18862185321.pdf',
                    children: g.jsx('div', {
                      className: 'get-resume',
                      children: '查看简历',
                    }),
                  }),
                ],
              }),
              g.jsxs('ul', {
                className: 'aboutme-items',
                children: [
                  g.jsxs('li', {
                    children: [
                      g.jsxs('div', {
                        className: 'top',
                        children: [
                          g.jsx('div', { children: '01' }),
                          g.jsx('div', { children: '2024 ~ 2027' }),
                        ],
                      }),
                      g.jsx('div', {
                        className: 'university',
                        children: g.jsx('span', {
                          children: '南京大学 | 数字营销传播 | 硕士',
                        }),
                      }),
                      g.jsx('div', {
                        className: 'experience',
                        children: g.jsx('span', {
                          children:
                            '主攻推荐策略、人工智能和数字营销领域，目标通过学习能够使用计算和数据方法为产品和营销问题提供解决方案',
                        }),
                      }),
                    ],
                  }),
                  g.jsxs('li', {
                    children: [
                      g.jsxs('div', {
                        className: 'top',
                        children: [
                          g.jsx('div', { children: '02' }),
                          g.jsx('div', { children: '2020 ~ 2023' }),
                        ],
                      }),
                      g.jsx('div', {
                        className: 'university',
                        children: g.jsx('span', {
                          children: '苏州大学 | 网络与新媒体 | 学士',
                        }),
                      }),
                      g.jsx('div', {
                        className: 'experience',
                        children: g.jsx('span', {
                          children:
                            '绩点排名第一，主要学习社会研究方法、数据分析、网页设计和视频图像处理等',
                        }),
                      }),
                    ],
                  }),
                  g.jsxs('li', {
                    children: [
                      g.jsxs('div', {
                        className: 'top',
                        children: [
                          g.jsx('div', { children: '03' }),
                          g.jsx('div', { children: '2018 ~ 2020' }),
                        ],
                      }),
                      g.jsx('div', {
                        className: 'university',
                        children: g.jsx('span', {
                          children: '苏州大学 | 生物技术 | 转专业',
                        }),
                      }),
                      g.jsx('div', {
                        className: 'experience',
                        children: g.jsx('span', { children: '绩点排名前 30%' }),
                      }),
                    ],
                  }),
                  g.jsx('li', {
                    children: g.jsxs('div', {
                      className: 'year-experience',
                      children: [
                        g.jsx('div', {
                          className: 'year-experience-top',
                          children: g.jsx('span', { children: '工作经验' }),
                        }),
                        g.jsx('div', {
                          className: 'year-experience-content',
                          children: '实习阶段',
                        }),
                      ],
                    }),
                  }),
                  g.jsx('li', {
                    children: g.jsxs('div', {
                      className: 'awards',
                      children: [
                        g.jsx('div', {
                          className: 'awards-top',
                          children: g.jsx('span', { children: '获奖情况' }),
                        }),
                        g.jsxs('ul', {
                          children: [
                            g.jsx('div', {
                              children: '中国大学生广告艺术节学院奖银奖',
                            }),
                            g.jsx('div', {
                              children: '全国大学生广告艺术大赛省级二等奖',
                            }),
                            g.jsx('div', {
                              children:
                                '“互联网+”大学生创新创业大赛省级三等奖……',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          g.jsxs(Ke.div, {
            className: 'skills-container',
            ...pr,
            children: [
              g.jsx('div', {
                className: 'skills-titles',
                children: g.jsx('span', { children: '个人能力' }),
              }),
              g.jsxs('ul', {
                children: [
                  g.jsx('li', {
                    className: 'self-ability-container',
                    children: g.jsx(s, {}),
                  }),
                  g.jsx('li', {
                    className: 'self-skills-container',
                    children: g.jsxs(Ke.ul, {
                      animate: { x: ['-163%', '0%'] },
                      transition: {
                        duration: 25,
                        repeat: 1 / 0,
                        ease: 'linear',
                      },
                      children: [
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-python',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Python' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-mysql' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'MySQL' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-SPSSfenxi',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'SPSS' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-tableau',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Tableau' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-H' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'HTML' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-scss' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'SCSS' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-javascript',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'JavaScript' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-react' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'React' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-logo' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: '即时设计' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-axure' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Axure' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-stable-diffusion',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'ComfyUI' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-MiniMax',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'HailuoAI' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-Adobe-Photoshop',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Adobe Photoshop' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-Adobe-Premiere',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Adobe Premier' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-davinciresolve',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'DaVinci Resolve' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-python',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Python' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-mysql' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'MySQL' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-SPSSfenxi',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'SPSS' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-tableau',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Tableau' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-H' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'HTML' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-scss' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'SCSS' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-javascript',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'JavaScript' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-react' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'React' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-logo' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: '即时设计' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', { className: 'iconfont icon-axure' }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Axure' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-stable-diffusion',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'ComfyUI' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-MiniMax',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'HailuoAI' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-Adobe-Photoshop',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Adobe Photoshop' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-Adobe-Premiere',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'Adobe Premier' }),
                          ],
                        }),
                        g.jsxs('li', {
                          children: [
                            g.jsx('span', {
                              className: 'iconfont icon-davinciresolve',
                            }),
                            g.jsx('br', {}),
                            g.jsx('span', { children: 'DaVinci Resolve' }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
  })
}
function tw() {
  const n = W.useRef(null),
    i = to(n, { once: !0, amount: 0.5 }),
    [s, l] = W.useState(!1),
    u = W.useRef(null),
    d = W.useRef(null)
  W.useEffect(() => {
    u.current &&
      (s
        ? ((u.current.style.height = '0%'),
          (u.current.style.opacity = '0'),
          (d.current.style.height = '100%'))
        : ((u.current.style.height = '70%'),
          (u.current.style.opacity = '1'),
          (d.current.style.height = '0%')))
  }, [s])
  const f = W.useRef([])
  function p(m) {
    f.current.forEach((y) => {
      ;(m !== '全部') & (y.getAttribute('data-category') !== m)
        ? (y.style.display = 'none')
        : (y.style.display = 'flex')
    })
  }
  return g.jsx('div', {
    ref: n,
    className: 'working',
    id: 'working',
    children:
      i &&
      g.jsxs(g.Fragment, {
        children: [
          g.jsxs(Ke.div, {
            className: 'work-titles',
            ...pr,
            children: [
              g.jsx('div', { children: '工作经历' }),
              g.jsxs('ul', {
                className: 'work-type',
                children: [
                  g.jsx('li', { onClick: () => p('全部'), children: '全部' }),
                  g.jsx('li', { onClick: () => p('运营'), children: '运营' }),
                ],
              }),
            ],
          }),
          g.jsx(Ke.ul, {
            className: 'work-container',
            ...pr,
            children: g.jsxs('li', {
              ref: (m) => (f.current[0] = m),
              className: 'job-item',
              'data-category': '运营',
              children: [
                g.jsxs('div', {
                  className: 'work-top',
                  children: [
                    g.jsx('div', { className: 'workno', children: '01' }),
                    g.jsxs('div', {
                      className: 'maintoggle',
                      onClick: () => l(!s),
                      children: [
                        g.jsx('span', {
                          style: {
                            display: 'inline-block',
                            width: s ? '0%' : '100%',
                            opacity: s ? '0' : '1',
                          },
                          children: '详情',
                        }),
                        g.jsx('span', {
                          style: {
                            display: 'inline-block',
                            width: s ? '100%' : '0%',
                            opacity: s ? '1' : '0',
                          },
                          children: '收起',
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsx('div', {
                  ref: u,
                  className: 'work-img',
                  style: {
                    transition:
                      'height 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  },
                }),
                g.jsxs('ul', {
                  className: 'work-introduction',
                  children: [
                    g.jsx('li', { children: '上海视璞文化传媒有限公司' }),
                    g.jsx('li', { children: '2020.11 ~ 2021.06' }),
                    g.jsx('li', { children: '内容运营' }),
                    g.jsx('li', {
                      className: 'work-introduction-main',
                      style: {
                        transition:
                          'height 0.3s ease-in-out, opacity 0.3s ease-in-out',
                      },
                      children: g.jsxs('ul', {
                        ref: d,
                        children: [
                          g.jsx('li', {
                            children:
                              '【业务背景】需要为荣耀、华为等品牌创作广告脚本，并为某校新媒体运营项目的投标设计策划案',
                          }),
                          g.jsx('li', {
                            children:
                              '【业务目标】根据产品画像，通过用户洞察撰写高质量广告脚本，提升品牌在电商平台的短视频广告效果；以 PPT 的形式设计新媒体运营投标策划案，帮助公司中标',
                          }),
                          g.jsxs('li', {
                            children: [
                              '【工作内容】用户洞察 + 内容创作 + 投标策划案设计，要求个人具备跨领域的沟通协作与创意执行能力',
                              g.jsxs('ol', {
                                children: [
                                  g.jsx('li', {
                                    children:
                                      '内容创作：基于时尚、性价比和拍摄等产品关键词，对电商平台用户“刷”的浏览习惯以及“性价比”、“日常记录”等需求进行洞察，撰写 50+ 条短视频广告脚本，瞄准目标用户痛点，保证 10 秒内快速而集中地展示关键卖点，最大限度地抓住用户眼球，保证视频完播率和复播率，提升品牌推广效果',
                                  }),
                                  g.jsx('li', {
                                    children:
                                      '媒体运营投标策划：从“痛点—方案”的逻辑切入完成整体策划，设计并制作 20+ 页 PPT，分析媒体运营现状与不足，包括采访布景、视觉效果等问题，展示公司在人员配置、结构化运营等方面的优势',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g.jsx('li', {
                            children:
                              '【业务结果】撰写的广告脚本通过率达 80% 以上，成功应用于淘宝平台推广，获得品牌继续合作的意向；设计的投标 PPT 获得评标人员的高度评价，帮助公司成功中标',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
  })
}
function nw() {
  const n = _t.useRef(null),
    i = to(n, { once: !0, amount: 0.5 }),
    s = {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.75, ease: 'easeInOut', delay: 0.5 },
    },
    [l, u] = _t.useState(!0),
    d = () => {
      u((p) => !p)
    },
    f = window.innerHeight / 100
  return g.jsx('div', {
    ref: n,
    className: 'program',
    id: 'program',
    children:
      i &&
      g.jsx(g.Fragment, {
        children: g.jsxs('div', {
          className: 'prog-container',
          transition: { duration: 0.5, ease: 'easeInOut' },
          children: [
            g.jsx(Ke.div, {
              className: 'prog-titles',
              ...pr,
              children: g.jsx('span', { children: '项目作品' }),
            }),
            g.jsx(Ke.div, {
              className: 'prog-container-main',
              ...s,
              children: g.jsx('ul', {
                className: 'prog-items',
                children: g.jsxs('li', {
                  children: [
                    g.jsxs('div', {
                      className: 'prog-item-top',
                      children: [
                        g.jsx('div', {
                          className: 'prog-item-no',
                          children: g.jsx('i', { children: '01' }),
                        }),
                        g.jsx('div', {
                          className: 'prog-item-title',
                          children:
                            '城乡学龄前儿童数字媒介使用对其社会情绪发展影响的比较研究',
                        }),
                        g.jsx('div', {
                          className: 'prog-item-time',
                          children: '2020.11 ~ 2021.04',
                        }),
                      ],
                    }),
                    g.jsx('div', { className: 'seperate-line' }),
                    g.jsx(Ke.span, {
                      className: `iconfont ${
                        l ? 'icon-jiahao' : 'icon-jianhao'
                      }`,
                      animate: { rotate: l ? 0 : 180, y: -17 },
                      transition: { duration: 0.75, ease: 'circOut' },
                      onClick: d,
                      style: { transformOrigin: 'center', translateY: 0 },
                    }),
                    g.jsx(Ty, {
                      mode: 'sync',
                      children:
                        !l &&
                        g.jsxs(Ke.ul, {
                          className: 'prog-item-content',
                          id: 'prog-item-content',
                          initial: { height: 0 * f },
                          animate: { height: 22 * f },
                          exit: { height: 0 * f },
                          transition: { duration: 0.25, ease: 'easeIn' },
                          children: [
                            g.jsx('li', {
                              children:
                                '【项目背景】该江苏省社科基金青年项目（项目编号：19SHC008）由导师主导，要求通过数据分析研究城乡学龄前儿童在数字媒介使用方面的差异',
                            }),
                            g.jsx('li', {
                              children:
                                '【项目目标】将复杂的数据转化为直观的统计趋势和显著性关系，清晰呈现城乡儿童媒介使用的核心差异',
                            }),
                            g.jsxs('li', {
                              children: [
                                '【工作内容】数据分析：使用 SPSS 进行描述性统计和卡方检验',
                                g.jsxs('ul', {
                                  children: [
                                    g.jsx('li', {
                                      children:
                                        '描述性统计：对数据进行描述性统计分析，展示城乡学龄前儿童数字媒介使用情况等基本趋势',
                                    }),
                                    g.jsx('li', {
                                      children:
                                        '显著性检验：使用卡方检验，分析城乡学龄前儿童在数字媒介使用时长和使用种类等方面的显著性差异',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            g.jsx('li', {
                              children:
                                '【项目结果】通过卡方检验和描述性统计，发现了家庭经济状况、父母教育水平等因素对儿童媒介使用时长与种类的显著影响，提供了城乡差异的实证数据，为学前教育和家庭教育政策提供参考',
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
  })
}
function rw() {
  const n = _t.useRef(null),
    i = to(n, { once: !0, amount: 0.5 }),
    s = {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
    }
  return g.jsx('div', {
    ref: n,
    children:
      i &&
      g.jsxs(Ke.div, {
        className: 'contact',
        id: 'contact',
        animate: {
          background: [
            'linear-gradient(0deg, #332f71, #00539a)',
            'linear-gradient(36deg, #00539a, #0076b7)',
            'linear-gradient(72deg, #0076b7, #0098c3)',
            'linear-gradient(108deg, #0098c3, #00b9bf)',
            'linear-gradient(144deg, #00b9bf, #00d7af)',
            'linear-gradient(180deg, #00b9bf, #00d7af)',
            'linear-gradient(216deg, #0098c3, #00b9bf)',
            'linear-gradient(252deg, #0076b7, #0098c3)',
            'linear-gradient(288deg, #00539a, #0076b7)',
            'linear-gradient(360deg, #332f71, #00539a)',
          ],
        },
        transition: { duration: 20, repeat: 1 / 0, ease: 'linear' },
        children: [
          g.jsxs(Ke.div, {
            className: 'contact-top',
            ...s,
            children: [
              g.jsx('div', {
                className: 'contact-title',
                children: '联系方式',
              }),
              g.jsx('div', {
                className: 'backtofirst',
                onClick: () => {
                  window.scrollTo({ top: 0 })
                },
                children: '>>> 返回首页',
              }),
            ],
          }),
          g.jsxs(Ke.ul, {
            ...s,
            children: [
              g.jsxs('li', {
                children: [
                  g.jsx('div', { children: '邮箱' }),
                  g.jsx('div', { children: 'cecilpeng@foxmail.com' }),
                ],
              }),
              g.jsxs('li', {
                children: [
                  g.jsx('div', { children: '地址' }),
                  g.jsx('div', { children: '江苏省南京市栖霞区仙林大道163号' }),
                ],
              }),
              g.jsxs('li', {
                children: [
                  g.jsx('div', { children: '邮编' }),
                  g.jsx('div', { children: '210000' }),
                ],
              }),
            ],
          }),
          g.jsx(Ke.span, { ...s, children: '© 彭瀚翔' }),
        ],
      }),
  })
}
window.onload = function () {
  window.location.hash && ((window.location.hash = ''), window.scrollTo(0, 0))
}
function iw() {
  return g.jsxs('div', {
    className: 'content-main',
    id: 'content-main',
    children: [g.jsx(Y1, {}), g.jsx(ew, {}), g.jsx(tw, {}), g.jsx(nw, {})],
  })
}
const sw = my.createRoot(document.querySelector('#root'))
sw.render(
  g.jsxs(_t.StrictMode, {
    children: [g.jsx(G1, {}), g.jsx(b1, {}), g.jsx(iw, {}), g.jsx(rw, {})],
  })
)
