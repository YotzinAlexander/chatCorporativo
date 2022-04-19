(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/config-bb99b659.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/config-bb99b659.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, d, g, i, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configFromURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return configFromSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setupPlatforms; });
var getPlatforms = function (win) { return setupPlatforms(win); };
var isPlatform = function (winOrPlatform, platform) {
    if (typeof winOrPlatform === 'string') {
        platform = winOrPlatform;
        winOrPlatform = undefined;
    }
    return getPlatforms(winOrPlatform).includes(platform);
};
var setupPlatforms = function (win) {
    if (win === void 0) { win = window; }
    win.Ionic = win.Ionic || {};
    var platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        platforms.forEach(function (p) { return win.document.documentElement.classList.add("plt-" + p); });
    }
    return platforms;
};
var detectPlatforms = function (win) { return Object.keys(PLATFORMS_MAP).filter(function (p) { return PLATFORMS_MAP[p](win); }); };
var isMobileWeb = function (win) { return isMobile(win) && !isHybrid(win); };
var isIpad = function (win) { return testUserAgent(win, /iPad/i); };
var isIphone = function (win) { return testUserAgent(win, /iPhone/i); };
var isIOS = function (win) { return testUserAgent(win, /iPad|iPhone|iPod/i); };
var isAndroid = function (win) { return testUserAgent(win, /android|sink/i); };
var isAndroidTablet = function (win) {
    return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
var isPhablet = function (win) {
    var width = win.innerWidth;
    var height = win.innerHeight;
    var smallest = Math.min(width, height);
    var largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
};
var isTablet = function (win) {
    var width = win.innerWidth;
    var height = win.innerHeight;
    var smallest = Math.min(width, height);
    var largest = Math.max(width, height);
    return (isIpad(win) ||
        isAndroidTablet(win) ||
        ((smallest > 460 && smallest < 820) &&
            (largest > 780 && largest < 1400)));
};
var isMobile = function (win) { return matchMedia(win, '(any-pointer:coarse)'); };
var isDesktop = function (win) { return !isMobile(win); };
var isHybrid = function (win) { return isCordova(win) || isCapacitorNative(win); };
var isCordova = function (win) { return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']); };
var isCapacitorNative = function (win) {
    var capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
};
var isElectron = function (win) { return testUserAgent(win, /electron/i); };
var isPWA = function (win) { return win.matchMedia ? (win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone) : false; };
var testUserAgent = function (win, expr) { return win.navigator && win.navigator.userAgent ? expr.test(win.navigator.userAgent) : false; };
var matchMedia = function (win, query) { return win.matchMedia ? win.matchMedia(query).matches : false; };
var PLATFORMS_MAP = {
    'ipad': isIpad,
    'iphone': isIphone,
    'ios': isIOS,
    'android': isAndroid,
    'phablet': isPhablet,
    'tablet': isTablet,
    'cordova': isCordova,
    'capacitor': isCapacitorNative,
    'electron': isElectron,
    'pwa': isPWA,
    'mobile': isMobile,
    'mobileweb': isMobileWeb,
    'desktop': isDesktop,
    'hybrid': isHybrid
};
var Config = /** @class */ (function () {
    function Config() {
        this.m = new Map();
    }
    Config.prototype.reset = function (configObj) {
        this.m = new Map(Object.entries(configObj));
    };
    Config.prototype.get = function (key, fallback) {
        var value = this.m.get(key);
        return (value !== undefined) ? value : fallback;
    };
    Config.prototype.getBoolean = function (key, fallback) {
        if (fallback === void 0) { fallback = false; }
        var val = this.m.get(key);
        if (val === undefined) {
            return fallback;
        }
        if (typeof val === 'string') {
            return val === 'true';
        }
        return !!val;
    };
    Config.prototype.getNumber = function (key, fallback) {
        var val = parseFloat(this.m.get(key));
        return isNaN(val) ? (fallback !== undefined ? fallback : NaN) : val;
    };
    Config.prototype.set = function (key, value) {
        this.m.set(key, value);
    };
    return Config;
}());
var config = /*@__PURE__*/ new Config();
var configFromSession = function (win) {
    try {
        var configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
        return configStr !== null ? JSON.parse(configStr) : {};
    }
    catch (e) {
        return {};
    }
};
var saveConfig = function (win, c) {
    try {
        win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
    }
    catch (e) {
        return;
    }
};
var configFromURL = function (win) {
    var configObj = {};
    win.location.search.slice(1)
        .split('&')
        .map(function (entry) { return entry.split('='); })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [decodeURIComponent(key), decodeURIComponent(value)];
    })
        .filter(function (_a) {
        var key = _a[0];
        return startsWith(key, IONIC_PREFIX);
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key.slice(IONIC_PREFIX.length), value];
    })
        .forEach(function (_a) {
        var key = _a[0], value = _a[1];
        configObj[key] = value;
    });
    return configObj;
};
var startsWith = function (input, search) {
    return input.substr(0, search.length) === search;
};
var IONIC_PREFIX = 'ionic:';
var IONIC_SESSION_KEY = 'ionic-persist-config';



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/constants-94c4865f.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/constants-94c4865f.js ***!
  \*********************************************************************/
/*! exports provided: L, a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_WILL_UNLOAD; });
var LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
var LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
var LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
var LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
var LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/core-13ed1ad7.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/core-13ed1ad7.js ***!
  \****************************************************************/
/*! exports provided: H, a, b, c, d, e, f, g, h, i, j, k, p, r, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getIonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return readTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getAssetPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return writeTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-bb99b659.js */ "./node_modules/@ionic/core/dist/esm-es5/config-bb99b659.js");
var _this = undefined;


var NAMESPACE = 'ionic';
var queueCongestion = 0;
var queuePending = false;
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsListenerOptions = /*@__PURE__*/ (function () {
    var supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get: function () { supportsListenerOptions = true; }
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var moduleCache = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = ((typeof cmpMeta.$lazyBundleIds$ !== 'string')
        ? cmpMeta.$lazyBundleIds$[hostRef.$modeName$]
        : cmpMeta.$lazyBundleIds$);
    var module = moduleCache.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var styles = new Map();
var cssVarShim = /*@__PURE__*/ win.__stencil_cssshim;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
var readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
/**
 * Namespaces
 */
var SVG_NS = 'http://www.w3.org/2000/svg';
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
var getDynamicImportFunction = function (namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
};
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() | css-shim-3ea8955c-3ea8955c-js */ "css-shim-3ea8955c-3ea8955c-js").then(__webpack_require__.t.bind(null, /*! ./css-shim-3ea8955c-3ea8955c.js */ "./node_modules/@ionic/core/dist/esm-es5/css-shim-3ea8955c-3ea8955c.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var importMeta, regex, scriptElm, opts, resourcesUrl;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                regex = new RegExp("/" + NAMESPACE + "(\\.esm)?\\.js($|\\?|#)");
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (regex.test(s.src) ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                opts = scriptElm['data-opts'];
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Object.assign({}, opts, { resourcesUrl: new URL('.', importMeta).href })];
            case 1:
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() | dom-59290340-59290340-js */ "dom-59290340-59290340-js").then(__webpack_require__.t.bind(null, /*! ./dom-59290340-59290340.js */ "./node_modules/@ionic/core/dist/esm-es5/dom-59290340-59290340.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, Object.assign({}, opts, { resourcesUrl: resourcesUrl.href })];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/v8/issues/detail?id=9558 for more info
        win[importFunctionName] = new Function('w', "return import(w);//" + Math.random());
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var CONTENT_REF_ID = 'r';
var ORG_LOCATION_ID = 'o';
var SLOT_NODE_ID = 's';
var TEXT_NODE_ID = 't';
var HYDRATED_CLASS = 'hydrated';
var HYDRATE_ID = 's-id';
var HYDRATE_CHILD_ID = 'c-id';
var XLINK_NS = 'http://www.w3.org/1999/xlink';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$, mode);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (!style) {
        scopeId = getScopeId(cmpMeta.$tagName$);
        style = styles.get(scopeId);
    }
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                if (styleContainerNode.host && (styleElm = styleContainerNode.firstElementChild) && styleElm.tagName === 'STYLE') {
                    // This is only happening on native shadow-dom, do not needs CSS var shim
                    styleElm.innerHTML = style;
                }
                else {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var scopeId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + ((mode) ? tagName + '-' + mode : tagName); };
var convertScopedToShadow = function (css) { return css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var slotName;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class') {
        var classList_1 = elm.classList;
        parseClassList(oldValue).forEach(function (cls) { return classList_1.remove(cls); });
        parseClassList(newValue).forEach(function (cls) { return classList_1.add(cls); });
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                if (!elm.tagName.includes('-')) {
                    var n = newValue == null ? '' : newValue;
                    // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                    if (elm[memberName] !== n) {
                        elm[memberName] = n;
                    }
                }
                else {
                    elm[memberName] = newValue;
                }
            }
            catch (e) { }
        }
        /**
         * Need to manually update attribute if:
         * - memberName is not an attribute
         * - if we are rendering the host element in order to reflect attribute
         * - if it's a SVG, since properties might not work in <svg>
         * - if the newValue is null/undefined or 'false'.
         */
        var isXlinkNs = isSvg && (memberName !== (memberName = memberName.replace(/^xlink\:?/, ''))) ? true : false;
        if (newValue == null || newValue === false) {
            if (isXlinkNs) {
                elm.removeAttributeNS(XLINK_NS, toLowerCase(memberName));
            }
            else {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            if (isXlinkNs) {
                elm.setAttributeNS(XLINK_NS, toLowerCase(memberName), newValue);
            }
            else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(/\s+/).filter(function (c) { return c; }); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    var oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (((isSvgMode || newVNode.$tag$ === 'svg'))
            ? doc.createElementNS(SVG_NS, newVNode.$tag$)
            : doc.createElement((newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        {
            isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (newVNode.$elm$.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
var putBackInOriginalLocation = function (parentElm, recursive) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    var oldSlotChildNodes = parentElm.childNodes;
    for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        var childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = function (node) {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    var defaultHolder;
    {
        // test if we're rendering an svg element, or still rendering nodes inside of one
        // only add this to the when the compiler sees we're using an svg somewhere
        isSvgMode = elm &&
            isDef(elm.parentNode) &&
            elm.ownerSVGElement !== undefined;
        isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
    }
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if (newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
    if (isSvgMode && newVNode.$tag$ === 'svg') {
        isSvgMode = false;
    }
};
var updateFallbackSlotVisibility = function (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var relocateNodes = [];
var relocateSlotContent = function (elm) {
    // tslint:disable-next-line: prefer-const
    var childNodes = elm.childNodes;
    var ilen = childNodes.length;
    var i = 0;
    var j = 0;
    var nodeType = 0;
    var childNode;
    var node;
    var hostContentNodes;
    var slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(function (r) { return r.$nodeToRelocate$ === node; })) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    hostTagName = toLowerCase(hostElm.tagName);
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(function (_a) {
            var propName = _a[0], attribute = _a[1];
            return rootVnode.$attrs$[attribute] = hostElm[propName];
        });
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                if (!relocateNode.$nodeToRelocate$['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    var orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.$nodeToRelocate$;
                    relocateNode.$nodeToRelocate$.parentNode.insertBefore((relocateNode.$nodeToRelocate$['s-ol'] = orgLocationNode), relocateNode.$nodeToRelocate$);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                var parentNodeRef = relocateNode.$slotRefNode$.parentNode;
                var insertBeforeNode = relocateNode.$slotRefNode$.nextSibling;
                var orgLocationNode = relocateNode.$nodeToRelocate$['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    var refNode = orgLocationNode['s-nr'];
                    if (refNode &&
                        refNode['s-sn'] === relocateNode.$nodeToRelocate$['s-sn'] &&
                        parentNodeRef === refNode.parentNode) {
                        refNode = refNode.nextSibling;
                        if (!refNode || !refNode['s-nr']) {
                            insertBeforeNode = refNode;
                            break;
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.$nodeToRelocate$.parentNode) ||
                    (relocateNode.$nodeToRelocate$.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.$nodeToRelocate$ !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.$nodeToRelocate$, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    var instance = hostRef.$lazyInstance$;
    var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
    var promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
        }
        if (hostRef.$queuedListeners$) {
            hostRef.$queuedListeners$.forEach(function (_a) {
                var methodName = _a[0], event = _a[1];
                return safeCall(instance, methodName, event);
            });
            hostRef.$queuedListeners$ = null;
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        {
            promise = safeCall(instance, 'componentWillUpdate');
        }
    }
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, (instance.render && instance.render()));
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
        else {
            {
                // we've already loaded this component
                // fire off the user's componentDidUpdate method (if one was provided)
                // componentDidUpdate runs AFTER render() has been called
                // and all child components have finished updating
                safeCall(instance, 'componentDidUpdate');
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var forceUpdate = function (elm, cmpMeta) {
    {
        var hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
var appDidLoad = function () {
    // on appload
    // we have finish the first big initial render
    {
        doc.documentElement.classList.add(HYDRATED_CLASS);
    }
    {
        plt.$flags$ |= 2 /* appLoaded */;
    }
};
var safeCall = function (instance, method, arg) {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if (((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if ((flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                    var propName = attrNameToPropName_1.get(attrName);
                    _this[propName] = newValue === null && typeof _this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
var addEventListeners = function (elm, hostRef, listeners) {
    hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || [];
    var removeFns = listeners.map(function (_a) {
        var flags = _a[0], name = _a[1], method = _a[2];
        var target = (getHostListenerTarget(elm, flags));
        var handler = hostListenerProxy(hostRef, method);
        var opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return function () { return plt.rel(target, name, handler, opts); };
    });
    return function () { return removeFns.forEach(function (fn) { return fn(); }); };
};
var hostListenerProxy = function (hostRef, methodName) {
    return function (ev) {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                hostRef.$queuedListeners$.push([methodName, ev]);
            }
        }
    };
};
var getHostListenerTarget = function (elm, flags) {
    if (flags & 4 /* TargetDocument */)
        return doc;
    if (flags & 8 /* TargetWindow */)
        return win;
    if (flags & 32 /* TargetBody */)
        return doc.body;
    if (flags & 16 /* TargetParent */)
        return elm.parentElement;
    return elm;
};
var hostListenerOpts = function (flags) { return supportsListenerOptions ?
    {
        'passive': (flags & 1 /* Passive */) !== 0,
        'capture': (flags & 2 /* Capture */) !== 0,
    }
    : (flags & 2 /* Capture */) !== 0; };
var initializeClientHydrate = function (hostElm, tagName, hostId, hostRef) {
    var shadowRoot = hostElm.shadowRoot;
    var childRenderNodes = [];
    var slotNodes = [];
    var shadowRootNodes = (shadowRoot ? [] : null);
    var vnode = hostRef.$vnode$ = {
        $flags$: 0,
        $tag$: tagName
    };
    if (!plt.$orgLocNodes$) {
        initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = new Map());
    }
    hostElm[HYDRATE_ID] = hostId;
    hostElm.removeAttribute(HYDRATE_ID);
    clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
    childRenderNodes.forEach(function (c) {
        var orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
        var orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
        var node = c.$elm$;
        if (orgLocationNode && (orgLocationNode['s-sd'] || c.$hostId$ === '0')) {
            orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
        }
        if (!shadowRoot) {
            node['s-hn'] = tagName;
            if (orgLocationNode) {
                node['s-ol'] = orgLocationNode;
                node['s-ol']['s-nr'] = node;
            }
        }
        plt.$orgLocNodes$.delete(orgLocationId);
    });
    if (shadowRoot) {
        shadowRootNodes.forEach(function (shadowRootNode) {
            if (shadowRootNode) {
                shadowRoot.appendChild(shadowRootNode);
            }
        });
    }
};
var clientHydrate = function (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) {
    var childNodeType;
    var childIdSplt;
    var childVNode;
    var i;
    if (node.nodeType === 1 /* ElementNode */) {
        childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
        if (childNodeType) {
            // got the node data from the element's attribute
            // `${hostId}.${nodeId}.${depth}.${index}`
            childIdSplt = childNodeType.split('.');
            if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                childVNode = {
                    $flags$: 0,
                    $hostId$: childIdSplt[0],
                    $nodeId$: childIdSplt[1],
                    $depth$: childIdSplt[2],
                    $index$: childIdSplt[3],
                    $tag$: toLowerCase(node.tagName),
                    $elm$: node
                };
                childRenderNodes.push(childVNode);
                node.removeAttribute(HYDRATE_CHILD_ID);
                // this is a new child vnode
                // so ensure its parent vnode has the vchildren array
                if (!parentVNode.$children$) {
                    parentVNode.$children$ = [];
                }
                // add our child vnode to a specific index of the vnode's children
                parentVNode.$children$[childVNode.$index$] = childVNode;
                // this is now the new parent vnode for all the next child checks
                parentVNode = childVNode;
                if (shadowRootNodes && childVNode.$depth$ === '0') {
                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                }
            }
        }
        // recursively drill down, end to start so we can remove nodes
        for (i = node.childNodes.length - 1; i >= 0; i--) {
            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
        }
        if (node.shadowRoot) {
            // keep drilling down through the shadow root nodes
            for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
        childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
            // comment node for either the host id or a 0 host id
            childNodeType = childIdSplt[0];
            childVNode = {
                $flags$: 0,
                $hostId$: childIdSplt[1],
                $nodeId$: childIdSplt[2],
                $depth$: childIdSplt[3],
                $index$: childIdSplt[4],
                $elm$: node
            };
            if (childNodeType === TEXT_NODE_ID) {
                childVNode.$elm$ = node.nextSibling;
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
                    childVNode.$text$ = childVNode.$elm$.textContent;
                    childRenderNodes.push(childVNode);
                    // remove the text comment since it's no longer needed
                    node.remove();
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                    if (shadowRootNodes && childVNode.$depth$ === '0') {
                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                    }
                }
            }
            else if (childVNode.$hostId$ === hostId) {
                // this comment node is specifcally for this host id
                if (childNodeType === SLOT_NODE_ID) {
                    // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                    childVNode.$tag$ = 'slot';
                    if (childIdSplt[5]) {
                        node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                    }
                    else {
                        node['s-sn'] = '';
                    }
                    node['s-sr'] = true;
                    if (shadowRootNodes) {
                        // browser support shadowRoot and this is a shadow dom component
                        // create an actual slot element
                        childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                        if (childVNode.$name$) {
                            // add the slot name attribute
                            childVNode.$elm$.setAttribute('name', childVNode.$name$);
                        }
                        // insert the new slot element before the slot comment
                        node.parentNode.insertBefore(childVNode.$elm$, node);
                        // remove the slot comment since it's not needed for shadow
                        node.remove();
                        if (childVNode.$depth$ === '0') {
                            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                        }
                    }
                    slotNodes.push(childVNode);
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                }
                else if (childNodeType === CONTENT_REF_ID) {
                    // `${CONTENT_REF_ID}.${hostId}`;
                    if (shadowRootNodes) {
                        // remove the content ref comment since it's not needed for shadow
                        node.remove();
                    }
                    else {
                        hostElm['s-cr'] = node;
                        node['s-cn'] = true;
                    }
                }
            }
        }
    }
    else if (parentVNode && parentVNode.$tag$ === 'style') {
        parentVNode.$children$ = [{
                $index$: '0',
                $text$: node.textContent,
                $elm$: node
            }];
    }
};
var initializeDocumentHydrate = function (node, orgLocNodes) {
    if (node.nodeType === 1 /* ElementNode */) {
        var i = 0;
        for (; i < node.childNodes.length; i++) {
            initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
        }
        if (node.shadowRoot) {
            for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
                initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
            }
        }
    }
    else if (node.nodeType === 8 /* CommentNode */) {
        var childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[0] === ORG_LOCATION_ID) {
            orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
            node.nodeValue = '';
            // useful to know if the original location is
            // the root light-dom of a shadow dom component
            node['s-sd'] = (childIdSplt[3] === '');
        }
    }
};
var modeResolutionChain = [];
var computeMode = function (elm) { return modeResolutionChain.map(function (h) { return h(elm); }).find(function (m) { return !!m; }); };
// Public
var setMode = function (handler) { return modeResolutionChain.push(handler); };
var getMode = function (ref) { return getHostRef(ref).$modeName$; };
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var scopeId_1, style_1, ancestorComponent, schedule;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 5];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                if (hostRef.$modeName$ == null) {
                    // initializeComponent
                    // looks like mode wasn't set as a property directly yet
                    // first check if there's an attribute
                    // next check the app's global
                    hostRef.$modeName$ = typeof cmpMeta.$lazyBundleIds$ !== 'string' ? computeMode(elm) : '';
                }
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta, hostRef);
                if (!Cstr.then) return [3 /*break*/, 2];
                return [4 /*yield*/, Cstr];
            case 1:
                // Await creates a micro-task avoid if possible
                Cstr = _a.sent();
                _a.label = 2;
            case 2:
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                {
                    hostRef.$flags$ |= 128 /* isWatchReady */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                scopeId_1 = getScopeId(cmpMeta.$tagName$, hostRef.$modeName$);
                if (!(!styles.has(scopeId_1) && Cstr.style)) return [3 /*break*/, 5];
                style_1 = Cstr.style;
                if (typeof style_1 !== 'string') {
                    style_1 = style_1[hostRef.$modeName$];
                }
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 4]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() | shadow-css-9e778f69-c68d0961-js */ "shadow-css-9e778f69-c68d0961-js").then(__webpack_require__.bind(null, /*! ./shadow-css-9e778f69-c68d0961.js */ "./node_modules/@ionic/core/dist/esm-es5/shadow-css-9e778f69-c68d0961.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 3:
                style_1 = _a.sent();
                _a.label = 4;
            case 4:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                _a.label = 5;
            case 5:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                if (ancestorComponent && ancestorComponent['s-lr'] === false && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
    {
        safeCall(instance, 'connectedCallback');
    }
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef_2 = getHostRef(elm);
        if (cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef_2.$rmListeners$ = addEventListeners(elm, hostRef_2, cmpMeta.$listeners$);
        }
        if (!(hostRef_2.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef_2.$flags$ |= 1 /* hasConnected */;
            var hostId = void 0;
            {
                hostId = elm.getAttribute(HYDRATE_ID);
                if (hostId) {
                    if (supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        var scopeId_2 = addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode'));
                        elm.classList.remove(scopeId_2 + '-h');
                        elm.classList.remove(scopeId_2 + '-s');
                    }
                    initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef_2);
                }
            }
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                    (cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id')) || (ancestorComponent['s-init'] && ancestorComponent['s-lr'] === false)) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef_2.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(function () { return initializeComponent(elm, hostRef_2, cmpMeta); });
            }
        }
        fireConnectedCallback(hostRef_2.$lazyInstance$);
    }
};
var setContentReference = function (elm, contentRefElm) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    contentRefElm = elm['s-cr'] = doc.createComment('');
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        var instance = hostRef.$lazyInstance$;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$();
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
        {
            safeCall(instance, 'componentDidUnload');
        }
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    var appLoadFallback;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    {
        // If the app is already hydrated there is not point to disable the
        // async queue. This will improve the first input delay
        plt.$flags$ |= 2 /* appLoaded */;
    }
    {
        var styles_1 = doc.querySelectorAll('style[s-id]');
        var globalStyles = '';
        var i = 0;
        for (; i < styles_1.length; i++) {
            globalStyles += styles_1[i].innerHTML;
        }
        for (i = 0; i < styles_1.length; i++) {
            var styleElm = styles_1[i];
            registerStyle(styleElm.getAttribute(HYDRATE_ID), globalStyles + convertScopedToShadow(styleElm.innerHTML), true);
        }
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                var _this = this;
                if (appLoadFallback) {
                    clearTimeout(appLoadFallback);
                    appLoadFallback = null;
                }
                plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
            };
            class_1.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                forceUpdate(this, cmpMeta);
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
    // Fallback appLoad event
    plt.jmp(function () { return appLoadFallback = setTimeout(appDidLoad, 30); });
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) {
            return elm.dispatchEvent(new (CustomEvent)(name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail: detail
            }));
        }
    };
};
var getAssetPath = function (path) {
    var assetUrl = new URL(path, plt.$resourcesUrl$);
    return (assetUrl.origin !== win.location.origin)
        ? assetUrl.href
        : assetUrl.pathname;
};
var getConnect = function (_ref, tagName) {
    var componentOnReady = function () {
        var elm = doc.querySelector(tagName);
        if (!elm) {
            elm = doc.createElement(tagName);
            doc.body.appendChild(elm);
        }
        return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
    };
    var create = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return componentOnReady()
            .then(function (el) { return el.create.apply(el, args); });
    };
    return {
        create: create,
        componentOnReady: componentOnReady,
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };
var mode;
var getIonMode = function (ref) {
    return (ref && getMode(ref)) || mode;
};
var global0 = function () {
    var doc = document;
    var win = window;
    var Ionic = win.Ionic = win.Ionic || {};
    // Setup platforms
    Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["s"])(win);
    // create the Ionic.config from raw config object (if it exists)
    // and convert Ionic.config into a ConfigApi that has a get() fn
    var configObj = Object.assign({}, Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["c"])(win), { persistConfig: false }, Ionic.config, Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["a"])(win));
    _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["b"].reset(configObj);
    if (_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('persistConfig')) {
        Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["d"])(win, configObj);
    }
    // first see if the mode was set as an attribute on <html>
    // which could have been set by the user, or by prerendering
    // otherwise get the mode via config settings, and fallback to md
    Ionic.config = _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["b"];
    Ionic.mode = mode = _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('mode', (doc.documentElement.getAttribute('mode')) || (Object(_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["i"])(win, 'ios') ? 'ios' : 'md'));
    _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["b"].set('mode', mode);
    doc.documentElement.setAttribute('mode', mode);
    doc.documentElement.classList.add(mode);
    if (_config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing')) {
        _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_1__["b"].set('animated', false);
    }
    setMode(function (elm) { return elm.mode = elm.mode || elm.getAttribute('mode') || mode; });
};
var global1 = function () {
    setMode(function (el) { return el.tagName === 'ION-ICON' ? el.mode || el.getAttribute('mode') : null; });
};
var globals = function () {
    global0();
    global1();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-90d0df24.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-90d0df24.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-00265c49.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-00265c49.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var el;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (delegate) {
                    return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                }
                if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                    throw new Error('framework delegate is missing');
                }
                el = (typeof component === 'string')
                    ? container.ownerDocument && container.ownerDocument.createElement(component)
                    : component;
                if (cssClasses) {
                    cssClasses.forEach(function (c) { return el.classList.add(c); });
                }
                if (componentProps) {
                    Object.assign(el, componentProps);
                }
                container.appendChild(el);
                if (!el.componentOnReady) return [3 /*break*/, 2];
                return [4 /*yield*/, el.componentOnReady()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, el];
        }
    });
}); };
var detachComponent = function (delegate, element) {
    if (element) {
        if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/helpers-c90aaa66.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/helpers-c90aaa66.js ***!
  \*******************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-63698b4d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-63698b4d.js ***!
  \*****************************************************************/
/*! exports provided: d, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-13ed1ad7.js */ "./node_modules/@ionic/core/dist/esm-es5/core-13ed1ad7.js");
/* harmony import */ var _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants-94c4865f.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-94c4865f.js");
var _this = undefined;



var iosTransitionAnimation = function () { return Promise.all(/*! import() | ios-transition-5c2f00df-js */[__webpack_require__.e("default~ios-transition-5c2f00df-js~md-transition-e0e9d421-js"), __webpack_require__.e("ios-transition-5c2f00df-js")]).then(__webpack_require__.bind(null, /*! ./ios.transition-5c2f00df.js */ "./node_modules/@ionic/core/dist/esm-es5/ios.transition-5c2f00df.js")); };
var mdTransitionAnimation = function () { return Promise.all(/*! import() | md-transition-e0e9d421-js */[__webpack_require__.e("default~ios-transition-5c2f00df-js~md-transition-e0e9d421-js"), __webpack_require__.e("md-transition-e0e9d421-js")]).then(__webpack_require__.bind(null, /*! ./md.transition-e0e9d421.js */ "./node_modules/@ionic/core/dist/esm-es5/md.transition-e0e9d421.js")); };
var transition = function (opts) {
    return new Promise(function (resolve, reject) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
            beforeTransition(opts);
            runTransition(opts).then(function (result) {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, function (error) {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
var beforeTransition = function (opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
var runTransition = function (opts) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var animationBuilder, ani;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getAnimationBuilder(opts)];
            case 1:
                animationBuilder = _a.sent();
                ani = (animationBuilder)
                    ? animation(animationBuilder, opts)
                    : noAnimation(opts);
                return [2 /*return*/, ani];
        }
    });
}); };
var afterTransition = function (opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
var getAnimationBuilder = function (opts) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var getAnimation, _a;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
                    return [2 /*return*/, undefined];
                }
                if (opts.animationBuilder) {
                    return [2 /*return*/, opts.animationBuilder];
                }
                if (!(opts.mode === 'ios')) return [3 /*break*/, 2];
                return [4 /*yield*/, iosTransitionAnimation()];
            case 1:
                _a = (_b.sent()).iosTransitionAnimation;
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, mdTransitionAnimation()];
            case 3:
                _a = (_b.sent()).mdTransitionAnimation;
                _b.label = 4;
            case 4:
                getAnimation = _a;
                return [2 /*return*/, getAnimation];
        }
    });
}); };
var animation = function (animationBuilder, opts) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var trans, err_1, didComplete;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, waitForReady(opts, true)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, __webpack_require__.e(/*! import() | index-f98adfdd-js */ "index-f98adfdd-js").then(__webpack_require__.bind(null, /*! ./index-f98adfdd.js */ "./node_modules/@ionic/core/dist/esm-es5/index-f98adfdd.js")).then(function (mod) { return mod.create(animationBuilder, opts.baseEl, opts); })];
            case 3:
                trans = _a.sent();
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                trans = animationBuilder(opts.baseEl, opts);
                return [3 /*break*/, 5];
            case 5:
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                return [4 /*yield*/, playTransition(trans, opts)];
            case 6:
                didComplete = _a.sent();
                // TODO: Remove AnimationBuilder
                trans.hasCompleted = didComplete;
                if (opts.progressCallback) {
                    opts.progressCallback(undefined);
                }
                if (trans.hasCompleted) {
                    fireDidEvents(opts.enteringEl, opts.leavingEl);
                }
                return [2 /*return*/, {
                        hasCompleted: trans.hasCompleted,
                        animation: trans
                    }];
        }
    });
}); };
var noAnimation = function (opts) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var enteringEl, leavingEl;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                return [4 /*yield*/, waitForReady(opts, false)];
            case 1:
                _a.sent();
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return [2 /*return*/, {
                        hasCompleted: true
                    }];
        }
    });
}); };
var waitForReady = function (opts, defaultDeep) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var deep, promises;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [
                    deepReady(opts.enteringEl),
                    deepReady(opts.leavingEl),
                ] : [
                    shallowReady(opts.enteringEl),
                    shallowReady(opts.leavingEl),
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                _a.sent();
                return [4 /*yield*/, notifyViewReady(opts.viewIsReady, opts.enteringEl)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var notifyViewReady = function (viewIsReady, enteringEl) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!viewIsReady) return [3 /*break*/, 2];
                return [4 /*yield*/, viewIsReady(enteringEl)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
var playTransition = function (trans, opts) {
    var progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    var promise = new Promise(function (resolve) { return trans.onFinish(resolve); });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
var fireWillEvents = function (enteringEl, leavingEl) {
    lifecycle(leavingEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
    lifecycle(enteringEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_2__["L"]);
};
var fireDidEvents = function (enteringEl, leavingEl) {
    lifecycle(enteringEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
    lifecycle(leavingEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_2__["c"]);
};
var lifecycle = function (el, eventName) {
    if (el) {
        var ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
var shallowReady = function (el) {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
var deepReady = function (el) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var element, stencilEl;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                element = el;
                if (!element) return [3 /*break*/, 4];
                if (!(element.componentOnReady != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, element.componentOnReady()];
            case 1:
                stencilEl = _a.sent();
                if (stencilEl != null) {
                    return [2 /*return*/];
                }
                _a.label = 2;
            case 2: return [4 /*yield*/, Promise.all(Array.from(element.children).map(deepReady))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var setPageHidden = function (el, hidden) {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
var setZIndex = function (enteringEl, leavingEl, direction) {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-nav_4.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-nav_4.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_nav, ion_nav_pop, ion_nav_push, ion_nav_set_root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_pop", function() { return NavPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_push", function() { return NavPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_set_root", function() { return NavSetRoot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-13ed1ad7.js */ "./node_modules/@ionic/core/dist/esm-es5/core-13ed1ad7.js");
/* harmony import */ var _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-bb99b659.js */ "./node_modules/@ionic/core/dist/esm-es5/config-bb99b659.js");
/* harmony import */ var _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-94c4865f.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-94c4865f.js");
/* harmony import */ var _helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-c90aaa66.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-c90aaa66.js");
/* harmony import */ var _framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework-delegate-00265c49.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-00265c49.js");
/* harmony import */ var _index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-63698b4d.js */ "./node_modules/@ionic/core/dist/esm-es5/index-63698b4d.js");
/* harmony import */ var _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-90d0df24.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-90d0df24.js");








var VIEW_STATE_NEW = 1;
var VIEW_STATE_ATTACHED = 2;
var VIEW_STATE_DESTROYED = 3;
var ViewController = /** @class */ (function () {
    function ViewController(component, params) {
        this.component = component;
        this.params = params;
        this.state = VIEW_STATE_NEW;
    }
    ViewController.prototype.init = function (container) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var component, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.state = VIEW_STATE_ATTACHED;
                        if (!!this.element) return [3 /*break*/, 2];
                        component = this.component;
                        _a = this;
                        return [4 /*yield*/, Object(_framework_delegate_00265c49_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params)];
                    case 1:
                        _a.element = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * DOM WRITE
     */
    ViewController.prototype._destroy = function () {
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
        var element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = VIEW_STATE_DESTROYED;
    };
    return ViewController;
}());
var matches = function (view, id, params) {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    var currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    var keysA = Object.keys(currentParams);
    var keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
        var key = keysA_1[_i];
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
};
var convertToView = function (page, params) {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
};
var convertToViews = function (pages) {
    return pages.map(function (page) {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(function (v) { return v !== null; });
};
var Nav = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.transInstr = [];
        this.animationEnabled = true;
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        /**
         * If `true`, the nav should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionNavDidChange", 3);
    }
    class_1.prototype.swipeGestureChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    };
    class_1.prototype.rootChanged = function () {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
        }
    };
    class_1.prototype.componentWillLoad = function () {
        this.useRouter =
            !!document.querySelector('ion-router') &&
                !this.el.closest('[no-router]');
        if (this.swipeGesture === undefined) {
            var mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
            this.swipeGesture = _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('swipeBackEnabled', mode === 'ios');
        }
        this.ionNavWillLoad.emit();
    };
    class_1.prototype.componentDidLoad = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.rootChanged();
                        _a = this;
                        return [4 /*yield*/, __webpack_require__.e(/*! import() | swipe-back-78383f2a-js */ "swipe-back-78383f2a-js").then(__webpack_require__.bind(null, /*! ./swipe-back-78383f2a.js */ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-78383f2a.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
                        this.swipeGestureChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUnload = function () {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            Object(_index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        // release swipe back gesture and transition
        this.transInstr.length = this.views.length = 0;
        this.destroyed = true;
    };
    /**
     * Push a new component onto the current navigation stack. Pass any additional
     * information along as an object. This additional information is accessible
     * through NavParams.
     *
     * @param component The component to push onto the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.push = function (component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    /**
     * Inserts a component into the navigation stack at the specified index.
     * This is useful to add a component at any point in the navigation stack.
     *
     * @param insertIndex The index to insert the component at in the stack.
     * @param component The component to insert into the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.insert = function (insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    /**
     * Inserts an array of components into the navigation stack at the specified index.
     * The last component in the array will become instantiated as a view, and animate
     * in to become the active view.
     *
     * @param insertIndex The index to insert the components at in the stack.
     * @param insertComponents The components to insert into the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.insertPages = function (insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts: opts
        }, done);
    };
    /**
     * Pop a component off of the navigation stack. Navigates back from the current
     * component.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.pop = function (opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts
        }, done);
    };
    /**
     * Pop to a specific index in the navigation stack.
     *
     * @param indexOrViewCtrl The index or view controller to pop to.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.popTo = function (indexOrViewCtrl, opts, done) {
        var tiConfig = {
            removeStart: -1,
            removeCount: -1,
            opts: opts
        };
        if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
            tiConfig.removeView = indexOrViewCtrl;
            tiConfig.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === 'number') {
            tiConfig.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(tiConfig, done);
    };
    /**
     * Navigate back to the root of the stack, no matter how far back that is.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.popToRoot = function (opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: opts
        }, done);
    };
    /**
     * Removes a component from the navigation stack at the specified index.
     *
     * @param startIndex The number to begin removal at.
     * @param removeCount The number of components to remove.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.removeIndex = function (startIndex, removeCount, opts, done) {
        if (removeCount === void 0) { removeCount = 1; }
        return this.queueTrns({
            removeStart: startIndex,
            removeCount: removeCount,
            opts: opts
        }, done);
    };
    /**
     * Set the root for the current navigation stack to a component.
     *
     * @param component The component to set as the root of the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.setRoot = function (component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    };
    /**
     * Set the views of the current navigation stack and navigate to the last view.
     * By default animations are disabled, but they can be enabled by passing options
     * to the navigation controller. Navigation parameters can also be passed to the
     * individual pages in the array.
     *
     * @param views The list of views to set as the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.setPages = function (views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        // if animation wasn't set to true then default it to NOT animate
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts: opts
        }, done);
    };
    /** @internal */
    class_1.prototype.setRouteId = function (id, params, direction) {
        var _this = this;
        var active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        var resolve;
        var promise = new Promise(function (r) { return (resolve = r); });
        var finish;
        var commonOpts = {
            updateURL: false,
            viewIsReady: function (enteringEl) {
                var mark;
                var p = new Promise(function (r) { return (mark = r); });
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    mark();
                                    return [4 /*yield*/, finish];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                });
                return p;
            }
        };
        if (direction === 'root') {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            var viewController = this.views.find(function (v) { return matches(v, id, params); });
            if (viewController) {
                finish = this.popTo(viewController, Object.assign({}, commonOpts, { direction: 'back' }));
            }
            else if (direction === 'forward') {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === 'back') {
                finish = this.setRoot(id, params, Object.assign({}, commonOpts, { direction: 'back', animated: true }));
            }
        }
        return promise;
    };
    /** @internal */
    class_1.prototype.getRouteId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var active;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                active = this.getActiveSync();
                return [2 /*return*/, active
                        ? {
                            id: active.element.tagName,
                            params: active.params,
                            element: active.element
                        }
                        : undefined];
            });
        });
    };
    /**
     * Get the active view.
     */
    class_1.prototype.getActive = function () {
        return Promise.resolve(this.getActiveSync());
    };
    /**
     * Get the view at the specified index.
     *
     * @param index The index of the view.
     */
    class_1.prototype.getByIndex = function (index) {
        return Promise.resolve(this.views[index]);
    };
    /**
     * Returns `true` if the current view can go back.
     *
     * @param view The view to check.
     */
    class_1.prototype.canGoBack = function (view) {
        return Promise.resolve(this.canGoBackSync(view));
    };
    /**
     * Get the previous view.
     *
     * @param view The view to get.
     */
    class_1.prototype.getPrevious = function (view) {
        return Promise.resolve(this.getPreviousSync(view));
    };
    class_1.prototype.getLength = function () {
        return this.views.length;
    };
    class_1.prototype.getActiveSync = function () {
        return this.views[this.views.length - 1];
    };
    class_1.prototype.canGoBackSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        return !!(view && this.getPreviousSync(view));
    };
    class_1.prototype.getPreviousSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        if (!view) {
            return undefined;
        }
        var views = this.views;
        var index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    };
    // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
    // 1. _nextTrns(): consumes the next transition in the queue
    // 2. _viewInit(): initializes enteringView if required
    // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
    // 4. _postViewInit(): add/remove the views from the navigation stack
    // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
    // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
    // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
    // 8. _transitionFinish(): called once the transition finishes
    // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.
    class_1.prototype.queueTrns = function (ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        var promise = new Promise(function (resolve, reject) {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        // Normalize empty
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        // Enqueue transition instruction
        this.transInstr.push(ti);
        // if there isn't a transition already happening
        // then this will kick off this transition
        this.nextTrns();
        return promise;
    };
    class_1.prototype.success = function (result, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            var router = document.querySelector('ion-router');
            if (router) {
                var direction = result.direction === 'back' ? 'back' : 'forward';
                router.navChanged(direction);
            }
        }
    };
    class_1.prototype.failed = function (rejectReason, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    };
    class_1.prototype.fireError = function (rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    };
    class_1.prototype.nextTrns = function () {
        // this is the framework's bread 'n butta function
        // only one transition is allowed at any given time
        if (this.isTransitioning) {
            return false;
        }
        // there is no transition happening right now
        // get the next instruction
        var ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    };
    class_1.prototype.runTransition = function (ti) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var leavingView, enteringView, requiresTransition, result, _a, rejectReason_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        // set that this nav is actively transitioning
                        this.ionNavWillChange.emit();
                        this.isTransitioning = true;
                        this.prepareTI(ti);
                        leavingView = this.getActiveSync();
                        enteringView = this.getEnteringView(ti, leavingView);
                        if (!leavingView && !enteringView) {
                            throw new Error('no views in the stack to be removed');
                        }
                        if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) return [3 /*break*/, 2];
                        return [4 /*yield*/, enteringView.init(this.el)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        this.postViewInit(enteringView, leavingView, ti);
                        requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                            enteringView !== leavingView;
                        if (!requiresTransition) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.transition(enteringView, leavingView, ti)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = {
                            // transition is not required, so we are already done!
                            // they're inserting/removing the views somewhere in the middle or
                            // beginning, so visually nothing needs to animate/transition
                            // resolve immediately because there's no animation that's happening
                            hasCompleted: true,
                            requiresTransition: false
                        };
                        _b.label = 5;
                    case 5:
                        result = _a;
                        this.success(result, ti);
                        this.ionNavDidChange.emit();
                        return [3 /*break*/, 7];
                    case 6:
                        rejectReason_1 = _b.sent();
                        this.failed(rejectReason_1, ti);
                        return [3 /*break*/, 7];
                    case 7:
                        this.isTransitioning = false;
                        this.nextTrns();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.prepareTI = function (ti) {
        var viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(ti.removeStart !== undefined, 'removeView needs removeStart');
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(ti.removeCount !== undefined, 'removeView needs removeCount');
            var index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error('removeView was not found');
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            // allow -1 to be passed in to auto push it on the end
            // and clean up the index if it's larger then the size of the stack
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        var insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(insertViews.length > 0, 'length can not be zero');
        var viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
        }
        // Check all the inserted view are correct
        for (var _i = 0, viewControllers_1 = viewControllers; _i < viewControllers_1.length; _i++) {
            var view = viewControllers_1[_i];
            view.delegate = ti.opts.delegate;
            var nav = view.nav;
            if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
            }
            if (view.state === VIEW_STATE_DESTROYED) {
                throw new Error('inserted view was already destroyed');
            }
        }
        ti.insertViews = viewControllers;
    };
    class_1.prototype.getEnteringView = function (ti, leavingView) {
        var insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            // grab the very last view of the views to be inserted
            // and initialize it as the new entering view
            return insertViews[insertViews.length - 1];
        }
        var removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            var views = this.views;
            var removeEnd = removeStart + ti.removeCount;
            for (var i = views.length - 1; i >= 0; i--) {
                var view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    };
    class_1.prototype.postViewInit = function (enteringView, leavingView, ti) {
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(ti.resolve, 'resolve must be valid');
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(ti.reject, 'reject must be valid');
        var opts = ti.opts;
        var insertViews = ti.insertViews;
        var removeStart = ti.removeStart;
        var removeCount = ti.removeCount;
        var destroyQueue;
        // there are views to remove
        if (removeStart !== undefined && removeCount !== undefined) {
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(removeStart >= 0, 'removeStart can not be negative');
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (var i = 0; i < removeCount; i++) {
                var view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            // default the direction to "back"
            opts.direction = opts.direction || 'back';
        }
        var finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0) {
            console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
            throw new Error('navigation stack needs at least one root page');
        }
        // At this point the transition can not be rejected, any throw should be an error
        // there are views to insert
        if (insertViews) {
            // add the views to the
            var insertIndex = ti.insertStart;
            for (var _i = 0, insertViews_1 = insertViews; _i < insertViews_1.length; _i++) {
                var view = insertViews_1[_i];
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || 'forward';
            }
        }
        // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        // let's make sure, callbacks are zoned
        if (destroyQueue && destroyQueue.length > 0) {
            for (var _a = 0, destroyQueue_1 = destroyQueue; _a < destroyQueue_1.length; _a++) {
                var view = destroyQueue_1[_a];
                Object(_index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__["b"]);
                Object(_index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__["c"]);
                Object(_index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
            }
            // once all lifecycle events has been delivered, we can safely detroy the views
            for (var _b = 0, destroyQueue_2 = destroyQueue; _b < destroyQueue_2.length; _b++) {
                var view = destroyQueue_2[_b];
                this.destroyView(view);
            }
        }
    };
    class_1.prototype.transition = function (enteringView, leavingView, ti) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, hasCompleted;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = ti.opts;
                        progressCallback = opts.progressAnimation
                            ? function (ani) { return _this.sbAni = ani; }
                            : undefined;
                        mode = Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
                        enteringEl = enteringView.element;
                        leavingEl = leavingView && leavingView.element;
                        animationOpts = Object.assign({ mode: mode, showGoBack: this.canGoBackSync(enteringView), baseEl: this.el, animationBuilder: this.animation || opts.animationBuilder || _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('navAnimation'), progressCallback: progressCallback, animated: this.animated && _config_bb99b659_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('animated', true), enteringEl: enteringEl,
                            leavingEl: leavingEl }, opts);
                        return [4 /*yield*/, Object(_index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__["t"])(animationOpts)];
                    case 1:
                        hasCompleted = (_a.sent()).hasCompleted;
                        return [2 /*return*/, this.transitionFinish(hasCompleted, enteringView, leavingView, opts)];
                }
            });
        });
    };
    class_1.prototype.transitionFinish = function (hasCompleted, enteringView, leavingView, opts) {
        var cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted: hasCompleted,
            requiresTransition: true,
            enteringView: enteringView,
            leavingView: leavingView,
            direction: opts.direction
        };
    };
    class_1.prototype.insertViewAt = function (view, index) {
        var views = this.views;
        var existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            // this view is already in the stack!!
            // move it to its new location
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(!view.nav, 'nav is used');
            // this is a new view to add to the stack
            // create the new entering view
            view.nav = this;
            // insert the entering view into the correct index in the stack
            views.splice(index, 0, view);
        }
    };
    class_1.prototype.removeView = function (view) {
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
        var views = this.views;
        var index = views.indexOf(view);
        Object(_helpers_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["b"])(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    };
    class_1.prototype.destroyView = function (view) {
        view._destroy();
        this.removeView(view);
    };
    /**
     * DOM WRITE
     */
    class_1.prototype.cleanup = function (activeView) {
        // ok, cleanup time!! Destroy all of the views that are
        // INACTIVE and come after the active view
        // only do this if the views exist, though
        if (this.destroyed) {
            return;
        }
        var views = this.views;
        var activeViewIndex = views.indexOf(activeView);
        for (var i = views.length - 1; i >= 0; i--) {
            var view = views[i];
            var element = view.element;
            if (i > activeViewIndex) {
                // this view comes after the active view
                // let's unload it
                Object(_index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__["l"])(element, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                // this view comes before the active view
                // and it is not a portal then ensure it is hidden
                Object(_index_63698b4d_js__WEBPACK_IMPORTED_MODULE_6__["s"])(element, true);
            }
        }
    };
    class_1.prototype.canStart = function () {
        return (!!this.swipeGesture &&
            !this.isTransitioning &&
            this.transInstr.length === 0 &&
            this.animationEnabled &&
            this.canGoBackSync());
    };
    class_1.prototype.onStart = function () {
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: {
                direction: 'back',
                progressAnimation: true
            }
        }, undefined);
    };
    class_1.prototype.onMove = function (stepValue) {
        if (this.sbAni) {
            this.sbAni.progressStep(stepValue);
        }
    };
    class_1.prototype.onEnd = function (shouldComplete, stepValue, dur) {
        var _this = this;
        if (this.sbAni) {
            this.animationEnabled = false;
            this.sbAni.onFinish(function () {
                _this.animationEnabled = true;
            }, { oneTimeCallback: true });
            // Account for rounding errors in JS
            var newStepValue = (shouldComplete) ? -0.001 : 0.001;
            /**
             * Animation will be reversed here, so need to
             * reverse the easing curve as well
             *
             * Additionally, we need to account for the time relative
             * to the new easing curve, as `stepValue` is going to be given
             * in terms of a linear curve.
             */
            if (!shouldComplete) {
                this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                newStepValue += Object(_cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.68, 0.28), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), stepValue);
            }
            else {
                newStepValue += Object(_cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.32, 0.72), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 1), new _cubic_bezier_90d0df24_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), stepValue);
            }
            this.sbAni.progressEnd(shouldComplete, newStepValue, dur);
        }
    };
    class_1.prototype.render = function () {
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "swipeGesture": ["swipeGestureChanged"],
                "root": ["rootChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var NavPop = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.pop = function () {
            var nav = _this.el.closest('ion-nav');
            if (nav) {
                nav.pop({ skipIfBusy: true });
            }
        };
    }
    class_2.prototype.render = function () {
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.pop }));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var NavPush = /** @class */ (function () {
    function class_3(hostRef) {
        var _this = this;
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.push = function () {
            var nav = _this.el.closest('ion-nav');
            var toPush = _this.component;
            if (nav && toPush !== undefined) {
                nav.push(toPush, _this.componentProps, { skipIfBusy: true });
            }
        };
    }
    class_3.prototype.render = function () {
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.push }));
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var NavSetRoot = /** @class */ (function () {
    function class_4(hostRef) {
        var _this = this;
        Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.setRoot = function () {
            var nav = _this.el.closest('ion-nav');
            var toPush = _this.component;
            if (nav && toPush !== undefined) {
                nav.setRoot(toPush, _this.componentProps, { skipIfBusy: true });
            }
        };
    }
    class_4.prototype.render = function () {
        return (Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.setRoot }));
    };
    Object.defineProperty(class_4.prototype, "el", {
        get: function () { return Object(_core_13ed1ad7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());



/***/ })

}]);
//# sourceMappingURL=1-es5.js.map