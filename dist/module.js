define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/lodash/_Symbol.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../node_modules/lodash/_apply.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_apply.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "../node_modules/lodash/_arrayLikeKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../node_modules/lodash/_baseGetTag.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../node_modules/lodash/_baseIsArguments.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../node_modules/lodash/_baseIsNative.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../node_modules/lodash/_baseIsTypedArray.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../node_modules/lodash/_baseKeysIn.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseKeysIn.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_baseRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseRest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "../node_modules/lodash/_baseSetToString.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseSetToString.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "../node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "../node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "../node_modules/lodash/_baseTimes.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../node_modules/lodash/_baseUnary.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../node_modules/lodash/_coreJsData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../node_modules/lodash/_defineProperty.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_defineProperty.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "../node_modules/lodash/_freeGlobal.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/lodash/_getNative.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../node_modules/lodash/_getRawTag.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../node_modules/lodash/_getValue.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../node_modules/lodash/_isIndex.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../node_modules/lodash/_isIterateeCall.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_isIterateeCall.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "../node_modules/lodash/_isMasked.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../node_modules/lodash/_isPrototype.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../node_modules/lodash/_nativeKeysIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeKeysIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_nodeUtil.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash/_objectToString.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../node_modules/lodash/_overRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_overRest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "../node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "../node_modules/lodash/_root.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../node_modules/lodash/_setToString.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "../node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "../node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "../node_modules/lodash/_shortOut.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_shortOut.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "../node_modules/lodash/_toSource.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../node_modules/lodash/constant.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/constant.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "../node_modules/lodash/defaults.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/defaults.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "../node_modules/lodash/_baseRest.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../node_modules/lodash/_isIterateeCall.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ "../node_modules/lodash/eq.js":
/*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../node_modules/lodash/identity.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../node_modules/lodash/isArguments.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../node_modules/lodash/isArray.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../node_modules/lodash/isArrayLike.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../node_modules/lodash/isBuffer.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash/isFunction.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../node_modules/lodash/isLength.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../node_modules/lodash/isObject.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../node_modules/lodash/isObjectLike.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../node_modules/lodash/isTypedArray.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../node_modules/lodash/keysIn.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/keysIn.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "../node_modules/lodash/stubFalse.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./ConfigEditor.tsx":
/*!**************************!*\
  !*** ./ConfigEditor.tsx ***!
  \**************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);





var ConfigEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigEditor, _super);

  function ConfigEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._onOptionsChange = function (_options) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      return onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), _options));
    };

    _this.onPathChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        path: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onTlsSkipVerifyChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        tlsSkipVerify: event.target.checked,
        skipTlsVerify: event.target.checked
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onUsernameChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        username: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onPasswordChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonData: {
          password: event.target.value
        }
      }));
    };

    _this.onResetPassword = function () {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonFields: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonFields), {
          password: false
        }),
        secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonData), {
          password: ''
        })
      }));
    };

    return _this;
  }

  ConfigEditor.prototype.render = function () {
    var options = this.props.options;
    var secureJsonFields = options.secureJsonFields;
    var Input = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Input,
        SecretFormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].SecretFormField;
    var secureJsonData = options.secureJsonData || {};
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
      className: "width-10"
    }, "Path"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "width-10"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      className: "width-20",
      value: options.jsonData.path || '',
      onChange: this.onPathChange
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
      className: "width-10"
    }, "User"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "width-10"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      className: "width-20",
      value: options.jsonData.username || '',
      onChange: this.onUsernameChange
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecretFormField, {
      isConfigured: secureJsonFields && secureJsonFields.password,
      value: secureJsonData.password || '',
      label: "Password",
      "aria-label": "Password",
      labelWidth: 10,
      inputWidth: 20,
      onReset: this.onResetPassword,
      onChange: this.onPasswordChange
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineField"], {
      label: "Skip TLS Verify"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineSwitch"], {
      value: options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify,
      checked: options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify,
      onChange: this.onTlsSkipVerifyChange
    }))))));
  };

  return ConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: QueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEditor", function() { return QueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./types.ts");






var QueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryEditor, _super);

  function QueryEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.getHostGroups = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, query, datasource, onChange, hostGroups;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              console.debug('[QueryEditor.getHostGroups]');
              _a = this.props, query = _a.query, datasource = _a.datasource, onChange = _a.onChange;
              return [4
              /*yield*/
              , datasource.getHostGroups()];

            case 1:
              hostGroups = _b.sent();

              if (hostGroups.length !== (query.hostGroups.length || 0)) {
                console.debug('hostGroups changed');
                onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
                  hostGroups: hostGroups
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.getApplications = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, query, datasource, onChange, applications;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              console.debug('[QueryEditor.getApplications]');
              _a = this.props, query = _a.query, datasource = _a.datasource, onChange = _a.onChange;
              return [4
              /*yield*/
              , datasource.getApplications()];

            case 1:
              applications = _b.sent();

              if (applications.length !== (query.applications.length || 0)) {
                console.debug('applications changed');
                onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
                  applications: applications
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.getWebApps = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, query, datasource, onChange, webApps;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              console.debug('[QueryEditor.getWebApps]');
              _a = this.props, query = _a.query, datasource = _a.datasource, onChange = _a.onChange;
              return [4
              /*yield*/
              , datasource.getWebApps()];

            case 1:
              webApps = _b.sent();

              if (webApps.length !== (query.webApps.length || 0)) {
                console.debug('webApps changed');
                onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
                  webApps: webApps
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.getApplicationMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, query, datasource, onChange, applicationMetrics;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              console.debug('[QueryEditor.getApplicationMetrics]');
              _a = this.props, query = _a.query, datasource = _a.datasource, onChange = _a.onChange;
              return [4
              /*yield*/
              , datasource.getApplicationMetrics()];

            case 1:
              applicationMetrics = _b.sent();

              if (applicationMetrics.length !== (query.applicationMetrics.length || 0)) {
                console.debug('applicationMetrics changed');
                onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
                  applicationMetrics: applicationMetrics
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.getIPMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, query, datasource, onChange, ipMetrics;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              console.debug('[QueryEditor.getIPMetrics]');
              _a = this.props, query = _a.query, datasource = _a.datasource, onChange = _a.onChange;
              return [4
              /*yield*/
              , datasource.getIPMetrics()];

            case 1:
              ipMetrics = _b.sent();

              if (ipMetrics.length !== (query.ipMetrics.length || 0)) {
                console.debug('ipMetrics changed');
                onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
                  ipMetrics: ipMetrics
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.getHostGroupMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, query, datasource, onChange, hostGroupMetrics;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              console.debug('[QueryEditor.getHostGroupMetrics]');
              _a = this.props, query = _a.query, datasource = _a.datasource, onChange = _a.onChange;
              return [4
              /*yield*/
              , datasource.getHostGroupMetrics()];

            case 1:
              hostGroupMetrics = _b.sent();

              if (hostGroupMetrics.length !== (query.hostGroupMetrics.length || 0)) {
                console.debug('hostGroupMetrics changed');
                onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
                  hostGroupMetrics: hostGroupMetrics
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.getWebAppMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, query, datasource, onChange, webAppMetrics;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              console.debug('[QueryEditor.getWebAppMetrics]');
              _a = this.props, query = _a.query, datasource = _a.datasource, onChange = _a.onChange;
              return [4
              /*yield*/
              , datasource.getWebAppMetrics()];

            case 1:
              webAppMetrics = _b.sent();

              if (webAppMetrics.length !== (query.webAppMetrics.length || 0)) {
                console.debug('webAppMetrics changed');
                onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
                  webAppMetrics: webAppMetrics
                }));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.getMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          console.debug('[QueryEditor.getMetrics]');
          this.getApplicationMetrics();
          this.getIPMetrics();
          this.getHostGroupMetrics();
          this.getWebAppMetrics();
          return [2
          /*return*/
          ];
        });
      });
    };

    _this.getOptions = function (sourceGroup) {
      console.debug("[QueryEditor.getOptions] " + sourceGroup);

      if (sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application) {
        _this.getApplications();

        _this.getApplicationMetrics();
      }

      if (sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup) {
        _this.getHostGroups();

        _this.getHostGroupMetrics();
      }

      if (sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp) {
        _this.getWebApps();

        _this.getWebAppMetrics();
      }

      if (sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ip) {
        _this.getIPMetrics();
      }
    };

    _this.onSourceGroupChange = function (v) {
      console.debug("[QueryEditor.onSourceGroupChange] " + v.label + ", " + v.value);
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;

      if (v.value !== query.sourceGroup) {
        console.debug('sourceGroup changed');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          sourceGroup: v.value
        }));
        onRunQuery();
      }
    };

    _this.onHostGroupChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onHostGroupChange] " + v.label + ", " + v.value);
      var _b = _this.props,
          onChange = _b.onChange,
          query = _b.query,
          onRunQuery = _b.onRunQuery;
      console.debug("[QueryEditor.onHostGroupChange] " + JSON.stringify(v) + ", " + query.currentHostGroup);

      if (v.value !== ((_a = query.currentHostGroup) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('currentHostGroup changed');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          currentHostGroup: v
        }));
        onRunQuery();
      }
    };

    _this.onApplicationChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onApplicationChange] " + v.label + ", " + v.value);
      var _b = _this.props,
          onChange = _b.onChange,
          query = _b.query,
          onRunQuery = _b.onRunQuery;

      if (v.value !== ((_a = query.currentApplication) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('currentApplication changed');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          currentApplication: v
        }));
        onRunQuery();
      }
    };

    _this.onWebAppChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onWebAppChange] " + v.label + ", " + v.value);
      var _b = _this.props,
          onChange = _b.onChange,
          query = _b.query,
          onRunQuery = _b.onRunQuery;

      if (v.value !== ((_a = query.currentWebApp) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('currentWebApp changed');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          currentWebApp: v
        }));
        onRunQuery();
      }
    };

    _this.onIPChange = function (e) {
      console.debug("[QueryEdior.onIPChange] " + e.currentTarget.value);
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        currentIP: e.currentTarget.value
      }));
      onRunQuery();
    };

    _this.onApplicationMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onApplicationMetricChange] " + v.label + ", " + v.value);
      var _b = _this.props,
          onChange = _b.onChange,
          query = _b.query,
          onRunQuery = _b.onRunQuery;

      if (v.value !== ((_a = query.currentApplicationMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onApplicationMetricChange] currentApplicationMetric changed');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          currentApplicationMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onHostGroupMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onHostGroupMetricChange] " + v.label + ", " + v.value);
      var _b = _this.props,
          onChange = _b.onChange,
          query = _b.query,
          onRunQuery = _b.onRunQuery;

      if (v.value !== ((_a = query.currentHostGroupMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onHostGroupMetricChange] currentHostGroupMetric changed.');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          currentHostGroupMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onWebAppMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onWebAppMetricChange] " + v.label + ", " + v.value);
      var _b = _this.props,
          onChange = _b.onChange,
          query = _b.query,
          onRunQuery = _b.onRunQuery;

      if (v.value !== ((_a = query.currentWebAppMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onWebAppMetricChange] currentWebAppMetric changed.');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          currentWebAppMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onIPMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onIPMetricChange] " + v.label + ", " + v.value);
      var _b = _this.props,
          onChange = _b.onChange,
          query = _b.query,
          onRunQuery = _b.onRunQuery;

      if (v.value !== ((_a = query.currentIPMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onIPMetricChange] currentIPMetric changed.');
        onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
          currentIPMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onTopChange = function (e) {
      console.debug("[QueryEditor.onTopChange] " + e.currentTarget.checked);
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        top: e.currentTarget.checked
      }));
      onRunQuery();
    };

    _this.onTopNChange = function (e) {
      console.debug("[QueryEditor.onTopNChange] " + e.currentTarget.value);
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        topN: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toInteger"])(e.currentTarget.value)
      }));
      onRunQuery();
    };

    _this.onAliasChange = function (v) {
      console.debug("[QueryEditor.onAliasChange] " + v.target.value);
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        alias: v.target.value
      }));
      onRunQuery();
    };

    _this.onTimeshiftChange = function (v) {
      console.debug("[QueryEditor.onTimeshiftChange] " + v.target.value);
      var _a = _this.props,
          onChange = _a.onChange,
          query = _a.query,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        timeshift: v.target.value
      }));
      onRunQuery();
    };

    _this.onGranularityChange = function (v) {
      console.debug("[QueryEditor.onGranularityChange] " + v.target.value);
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange,
          onRunQuery = _a.onRunQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        granularity: v.value
      }));
      onRunQuery();
    };

    return _this;
  }

  QueryEditor.prototype.render = function () {
    var _this = this;

    var _a, _b;

    console.debug('[QueryEditor.render]');
    var query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query, _types__WEBPACK_IMPORTED_MODULE_4__["defaultQuery"]);
    this.getOptions(query.sourceGroup);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        width: '100%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Top"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        marginTop: '8px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      value: query.top,
      checked: query.top,
      onChange: this.onTopChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.top ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "N"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      width: 16,
      value: query.topN || 0,
      onChange: this.onTopNChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Source Group"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      options: _types__WEBPACK_IMPORTED_MODULE_4__["sourceGroups"],
      value: query.sourceGroup,
      onChange: this.onSourceGroupChange
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup && !query.top ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: query.sourceGroup,
      onLoadStart: this.getHostGroups
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      value: query.currentHostGroup,
      options: query.hostGroups,
      onChange: this.onHostGroupChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application && !query.top ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: query.sourceGroup,
      onLoadStart: this.getApplications
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      value: query.currentApplication,
      options: query.applications,
      onChange: this.onApplicationChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp && !query.top ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: query.sourceGroup,
      onLoadStart: this.getWebApps
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      value: query.currentWebApp,
      options: query.webApps,
      onChange: this.onWebAppChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ip && !query.top ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: query.sourceGroup
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      value: query.currentIP || '',
      onChange: this.onIPChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Metric",
      onLoadStart: function onLoadStart() {
        return _this.getApplicationMetrics();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      options: query.applicationMetrics,
      value: query.currentApplicationMetric,
      onChange: this.onApplicationMetricChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Metric",
      onLoadStart: function onLoadStart() {
        return _this.getHostGroupMetrics();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      options: query.hostGroupMetrics,
      value: query.currentHostGroupMetric,
      onChange: this.onHostGroupMetricChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Metric",
      onLoadStart: function onLoadStart() {
        return _this.getWebAppMetrics();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      options: query.webAppMetrics,
      value: query.currentWebAppMetric,
      onChange: this.onWebAppMetricChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ip ? {
        display: 'block'
      } : {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Metric",
      onLoadStart: function onLoadStart() {
        return _this.getIPMetrics();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      width: 'auto',
      menuShouldPortal: true,
      options: query.ipMetrics,
      value: query.currentIPMetric,
      onChange: this.onIPMetricChange
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Granularity"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      menuShouldPortal: true,
      value: (_a = query.granularity) === null || _a === void 0 ? void 0 : _a.value,
      options: _types__WEBPACK_IMPORTED_MODULE_4__["granularities"],
      onChange: this.onGranularityChange
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Timeshift"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      value: ((_b = query.timeshift) === null || _b === void 0 ? void 0 : _b.toString()) || '0',
      onChange: this.onTimeshiftChange
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: query.top ? {
        display: 'none'
      } : {
        display: 'block'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
      label: "Alias"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      value: query.alias || '',
      onChange: this.onAliasChange
    })))));
  };

  return QueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/defaults */ "../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./types.ts");






var DataSource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSource, _super);

  function DataSource(instanceSettings) {
    var _a;

    var _this = _super.call(this, instanceSettings) || this;

    _this.data = [];
    _this.ipMetrics = [];
    _this.webApps = [];
    _this.webAppMetrics = [];
    _this.hostGroups = [];
    _this.hostGroupMetrics = [];
    _this.applications = [];
    _this.applicationMetrics = [];
    _this.queryTimeout = 60; // In seconds

    _this.optionsTimeout = 15; // In minutes

    _this.settings = instanceSettings;
    _this.url = _this.settings.url || '';
    _this.token = (_a = instanceSettings.jsonData.token) !== null && _a !== void 0 ? _a : '';
    _this.urls = {
      base: _this.url + '/base',
      auth: _this.url + '/auth',
      webApp: _this.url + '/webapps',
      metric: _this.url + '/aggregates',
      hostGroup: _this.url + '/hostgroups',
      application: _this.url + '/applications',
      instanceCreationSync: _this.url + '/instancecreationsync'
    };
    _this.headers = {
      'Content-Type': 'application/json'
    };
    _this.lastFetchQuery = new Date();
    _this.lastFetchMetrics = new Date();
    _this.lastFetchWebApps = new Date();
    _this.lastFetchWebAppMetrics = new Date();
    _this.lastFetchHostGroups = new Date();
    _this.lastFetchHostGroupMetrics = new Date();
    _this.lastFetchApplications = new Date();
    _this.lastFetchApplicationMetrics = new Date();
    _this.lastFetchIPMetrics = new Date();
    return _this;
  }

  DataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, Promise, function () {
      var deltaInSeconds, range, to, from, queryTimeStop, queryTimeStart, queryTimeshift, dataDef_source, dataDef_groupBy, dataDef_columns, currentMetric, dataDef_filters, promises;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        deltaInSeconds = (Date.now() - this.lastFetchQuery.getTime()) / 1000;
        console.debug("[DataSource.query] " + deltaInSeconds + " seconds since last query.");

        if (deltaInSeconds < this.queryTimeout && this.data.length > 0) {
          console.debug('[DataSource.query] Returning cached data.');
          return [2
          /*return*/
          , Promise.resolve({
            data: this.data
          })];
        } else {
          console.debug('[DataSource.query] Fetching data from server.');
          this.lastFetchQuery = new Date(Date.now());
          this.data = [];
        }

        range = options.range;
        to = range.to.valueOf();
        from = range.from.valueOf();
        queryTimeshift = 0;
        dataDef_source = {};
        dataDef_groupBy = {};
        dataDef_columns = [];
        dataDef_filters = [];
        promises = options.targets.map(function (target) {
          var _a, _b, _c, _d, _e, _f, _g, _h;

          var query = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()(target, _types__WEBPACK_IMPORTED_MODULE_4__["defaultQuery"]);
          queryTimeStart = new Date(to).getTime() / 1000;
          queryTimeStop = new Date(from).getTime() / 1000;

          if (typeof query.timeshift === "undefined" || typeof query.timeshift === "string" && query.timeshift === []) {
            query.timeshift = 0;
          }

          queryTimeshift = query.timeshift + query.timeshift * 86400 - 1 * query.timeshift;
          queryTimeStop = queryTimeStop - queryTimeshift;
          queryTimeStart = queryTimeStart - queryTimeshift;

          if (typeof queryTimeshift !== 'undefined') {
            query.timeshift = queryTimeshift;
          }

          dataDef_source = {
            "name": "aggregates"
          };

          if (query.sourceGroup == _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup) {
            // For each datapoint, data are grouped by timestamp and id of hostgroup
            dataDef_groupBy = ["start_time", "host_group.id"]; // Columns are fields queried, some are fixed value (host_group.id, host_group.name...) and some are metrics

            dataDef_columns = ["start_time", "host_group.id", "host_group.name"]; // Metric request is filtered by hortgroup selected

            dataDef_filters.push({
              "type": "STEELFILTER",
              "value": "host_group.id == " + ((_a = query.currentHostGroup) === null || _a === void 0 ? void 0 : _a.value)
            });
            dataDef_columns.push((_b = query.currentHostGroupMetric) === null || _b === void 0 ? void 0 : _b.value);
          } else if (query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application) {
            dataDef_groupBy = ["start_time", "app.id"];
            dataDef_columns = ["start_time", "app.id", "app.name"];
            dataDef_filters.push({
              "type": "STEELFILTER",
              "value": "app.id == " + ((_c = query.currentApplication) === null || _c === void 0 ? void 0 : _c.value)
            });
            dataDef_columns.push((_d = query.currentApplicationMetric) === null || _d === void 0 ? void 0 : _d.value);
          } else if (query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ip) {
            dataDef_source = {
              "name": "aggregates"
            };
            dataDef_groupBy = ["start_time"];
            dataDef_columns = ["start_time", "tcp.ip", "tcp.dns"];
            dataDef_filters.push({
              "type": "STEELFILTER",
              "value": "tcp.ip == " + query.currentIP
            });
            dataDef_columns.push((_e = query.currentIPMetric) === null || _e === void 0 ? void 0 : _e.value);
          } else if (query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp) {
            dataDef_groupBy = ["start_time", "app.id"];
            dataDef_columns = ["start_time", "app.id", "app.name"];
            dataDef_filters.push({
              "type": "STEELFILTER",
              "value": "app.id == " + ((_f = query.currentWebApp) === null || _f === void 0 ? void 0 : _f.value)
            });
            dataDef_columns.push((_g = query.currentWebAppMetric) === null || _g === void 0 ? void 0 : _g.value);
          }

          var dataDef = {
            'source': dataDef_source,
            "time": {
              "start": queryTimeStop.toString(),
              "end": queryTimeStart.toString(),
              'granularity': (_h = query.granularity) === null || _h === void 0 ? void 0 : _h.value.toString()
            },
            "group_by": dataDef_groupBy,
            "columns": dataDef_columns
          };

          if (query.top) {
            dataDef.limit = query.topN || 10;
            dataDef.top_by = [{
              "id": currentMetric === null || currentMetric === void 0 ? void 0 : currentMetric.value,
              "direction": 'desc'
            }];
            dataDef.group_by = {}; // Remove start time.

            dataDef.columns = dataDef.columns.slice(1); // Remove start time.
          } else {
            dataDef.filters = dataDef_filters;
          }

          return _this.doRequest({
            url: _this.urls.instanceCreationSync,
            data: {
              'data_defs': [dataDef]
            },
            method: 'POST'
          }).then(function (response) {
            var name;
            var _dataDef = response.data.data_defs[0];

            if (_dataDef.data === undefined) {
              _dataDef.data = [];
            }

            if (query.alias !== undefined && query.alias.trim() !== '') {
              name = query.alias;
            } else {
              name = currentMetric === null || currentMetric === void 0 ? void 0 : currentMetric.value;
            }

            var fields = [];
            var frame;

            if (query.top) {
              var removeIndices = [];

              for (var index = 0; index < _dataDef.columns.length; index++) {
                var column = _dataDef.columns[index];

                if (column.search('id') === -1) {
                  fields.push({
                    name: column.replace(/\.|_/g, " ").toUpperCase(),
                    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].other
                  });
                } else {
                  removeIndices.push(index);
                }
              }

              frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__["MutableDataFrame"]({
                refId: query.refId,
                name: name,
                fields: fields
              });

              var _loop_1 = function _loop_1(i) {
                removeIndices.forEach(function (j) {
                  _dataDef.data[i].splice(j, 1);
                });
                frame.appendRow(_dataDef.data[i]);
              };

              for (var i = 0; i < _dataDef.data.length; i++) {
                _loop_1(i);
              }
            } else {
              fields = [{
                name: "Time",
                type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].time
              }, {
                name: "Value",
                type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].number
              }];
              frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__["MutableDataFrame"]({
                refId: query.refId,
                name: name,
                fields: fields
              });

              for (var i = 0; i < _dataDef.data.length; i++) {
                var row = _dataDef.data[i];
                frame.appendRow([new Date(row[0] * 1000), row[row.length - 1]]);
              }
            } // Push data a variable for caching.


            _this.data.push(frame);

            return frame;
          });
        });
        return [2
        /*return*/
        , Promise.all(promises).then(function (data) {
          return {
            data: data
          };
        })];
      });
    });
  };

  DataSource.prototype.testDatasource = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2
        /*return*/
        , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().datasourceRequest({
          method: 'POST',
          url: this.urls.auth,
          headers: this.headers
        }).then(function (response) {
          if (response.ok === true) {
            _this.settings.jsonData.token = response.data.access_token;
            return {
              status: 'success',
              message: 'Data source is working'
            };
          } else {
            return {
              status: 'error',
              message: 'Data source is not working'
            };
          }
        })["catch"](function (error) {
          return {
            status: 'error',
            message: error.statusText
          };
        })];
      });
    });
  };

  DataSource.prototype.doRequest = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.debug("[DataSource.doRequest] " + options.method + " " + options.url);
            if (!(this.settings.jsonData.token === '' || this.settings.jsonData.token === undefined || this.settings.jsonData.token === null)) return [3
            /*break*/
            , 2];
            console.debug("[DataSource.doRequest] No token.");
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().datasourceRequest({
              method: 'POST',
              url: this.urls.auth
            }).then(function (response) {
              _this.settings.jsonData.token = response.data.access_token;
            })];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            return [2
            /*return*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().datasourceRequest(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
              headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.headers), {
                'Authorization': 'Bearer ' + this.settings.jsonData.token
              })
            }))];
        }
      });
    });
  };

  DataSource.prototype.getHostGroups = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var result, error_1;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.debug('[DataSource.getHostGroups]');
            result = [];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            if ((Date.now() - this.lastFetchHostGroups.getTime()) / 1000 / 60 < this.optionsTimeout && this.hostGroups.length > 0) {
              console.debug('[DataSource.getHostGroups] Cache hit.');
              return [2
              /*return*/
              , this.hostGroups];
            }

            return [4
            /*yield*/
            , this.doRequest({
              method: 'GET',
              url: this.urls.hostGroup
            }).then(function (response) {
              _this.hostGroups = [];

              if (typeof response !== 'undefined') {
                for (var k in response.data.items) {
                  if (response.data.items[k]["enabled"]) {
                    var hostGroup = {
                      'label': response.data.items[k]["name"],
                      'value': response.data.items[k]["id"]
                    };
                    result.push(hostGroup);

                    _this.hostGroups.push(hostGroup);
                  }
                }
              }

              _this.lastFetchHostGroups = new Date(Date.now());
            })];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _a.sent();
            console.error(error_1);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  DataSource.prototype.getApplications = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var result, error_2;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            result = [];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            if ((Date.now() - this.lastFetchApplications.getTime()) / 1000 / 60 < this.optionsTimeout && this.applications.length > 0) {
              console.debug('[DataSource.getApplications] Cache hit.');
              return [2
              /*return*/
              , this.applications];
            }

            return [4
            /*yield*/
            , this.doRequest({
              method: 'GET',
              url: this.urls.application
            }).then(function (response) {
              if (typeof response !== 'undefined') {
                _this.applications = [];

                for (var k in response.data.items) {
                  if (response.data.items[k]["enabled"]) {
                    var application = {
                      'label': response.data.items[k]["name"],
                      'value': response.data.items[k]["id"]
                    };
                    result.push(application);

                    _this.applications.push(application);
                  }
                }
              }

              _this.lastFetchApplications = new Date(Date.now());
            })];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_2 = _a.sent();
            console.error(error_2);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  DataSource.prototype.getWebApps = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var result, error_3;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            result = [];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            if ((Date.now() - this.lastFetchWebApps.getTime()) / 1000 / 60 < this.optionsTimeout && this.webApps.length > 0) {
              console.debug('[DataSource.getWebApps] Cache hit.');
              return [2
              /*return*/
              , this.webApps];
            }

            return [4
            /*yield*/
            , this.doRequest({
              method: 'GET',
              url: this.urls.webApp
            }).then(function (response) {
              if (typeof response !== 'undefined') {
                _this.webApps = [];

                for (var k in response.data.items) {
                  if (response.data.items[k]["enabled"]) {
                    var webApp = {
                      'label': response.data.items[k]["name"],
                      'value': response.data.items[k]["id"]
                    };
                    result.push(webApp);

                    _this.webApps.push(webApp);
                  }
                }
              }

              _this.lastFetchWebApps = new Date(Date.now());
            })];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_3 = _a.sent();
            console.error(error_3);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  DataSource.prototype.getApplicationMetrics = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var result, error_4;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            result = [];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            if ((Date.now() - this.lastFetchApplicationMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.applicationMetrics.length > 0) {
              console.debug('[DataSource.getApplicationMetrics] Cache hit.');
              return [2
              /*return*/
              , this.applicationMetrics];
            }

            return [4
            /*yield*/
            , this.doRequest({
              method: 'GET',
              url: this.urls.metric
            }).then(function (response) {
              if (typeof response !== 'undefined') {
                _this.applicationMetrics = [];

                for (var k in response.data.columns) {
                  var id = response.data.columns[k].id;
                  var unit = response.data.columns[k].unit;
                  var rate = response.data.columns[k].rate;
                  var label = response.data.columns[k].label;

                  if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                    if (typeof rate !== 'undefined' && unit !== 'none') {
                      label = label + " (" + unit + "/" + rate + ")";
                    } else if (typeof rate !== 'undefined') {
                      label = label + " (" + rate + ")";
                    }

                    var metric = {
                      'value': id,
                      'label': label
                    };

                    if (!id.includes('p2m') && !id.includes('m2p') && !id.includes('web') && !id.includes('_db.') && !id.includes('cxa')) {
                      result.push(metric);

                      _this.applicationMetrics.push(metric);
                    }
                  }
                }
              }

              _this.lastFetchApplicationMetrics = new Date(Date.now());
            })];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_4 = _a.sent();
            console.error(error_4);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  DataSource.prototype.getIPMetrics = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var result, error_5;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            result = [];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            if ((Date.now() - this.lastFetchIPMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.ipMetrics.length > 0) {
              console.debug('[DataSource.getIPMetrics] Cache hit.');
              return [2
              /*return*/
              , this.ipMetrics];
            }

            return [4
            /*yield*/
            , this.doRequest({
              method: 'GET',
              url: this.urls.metric
            }).then(function (response) {
              if (typeof response !== 'undefined') {
                _this.ipMetrics = [];

                for (var k in response.data.columns) {
                  var id = response.data.columns[k].id;
                  var unit = response.data.columns[k].unit;
                  var rate = response.data.columns[k].rate;
                  var label = response.data.columns[k].label;

                  if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                    if (typeof rate !== 'undefined' && unit !== 'none') {
                      label = label + " (" + unit + "/" + rate + ")";
                    } else if (typeof rate !== 'undefined') {
                      label = label + " (" + rate + ")";
                    }

                    var metric = {
                      'value': id,
                      'label': label
                    };

                    if (!id.includes('p2m') && !id.includes('m2p') && !id.includes('web') && !id.includes('_db.') && !id.includes('cxa')) {
                      result.push(metric);

                      _this.ipMetrics.push(metric);
                    }
                  }
                }
              }

              _this.lastFetchIPMetrics = new Date(Date.now());
            })];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_5 = _a.sent();
            console.error(error_5);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  DataSource.prototype.getHostGroupMetrics = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var result, error_6;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            result = [];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            if ((Date.now() - this.lastFetchHostGroupMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.hostGroupMetrics.length > 0) {
              console.debug('[DataSource.getHostGroupMetrics] Cache hit.');
              return [2
              /*return*/
              , this.hostGroupMetrics];
            }

            return [4
            /*yield*/
            , this.doRequest({
              method: 'GET',
              url: this.urls.metric
            }).then(function (response) {
              if (typeof response !== 'undefined') {
                _this.hostGroupMetrics = [];

                for (var k in response.data.columns) {
                  var id = response.data.columns[k].id;
                  var unit = response.data.columns[k].unit;
                  var rate = response.data.columns[k].rate;
                  var label = response.data.columns[k].label;

                  if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                    if (typeof rate !== 'undefined' && unit !== 'none') {
                      label = label + " (" + unit + "/" + rate + ")";
                    } else if (typeof rate !== 'undefined') {
                      label = label + " (" + rate + ")";
                    }

                    var metric = {
                      'value': id,
                      'label': label
                    };
                    result.push(metric);

                    _this.hostGroupMetrics.push(metric);
                  }
                }
              }

              _this.lastFetchHostGroupMetrics = new Date(Date.now());
            })];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_6 = _a.sent();
            console.error(error_6);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  DataSource.prototype.getWebAppMetrics = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var result, error_7;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            result = [];
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            if ((Date.now() - this.lastFetchWebAppMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.webAppMetrics.length > 0) {
              console.debug('[DataSource.getWebAppMetrics] Cache hit.');
              return [2
              /*return*/
              , this.webAppMetrics];
            }

            return [4
            /*yield*/
            , this.doRequest({
              method: 'GET',
              url: this.urls.metric
            }).then(function (response) {
              if (typeof response !== 'undefined') {
                _this.webAppMetrics = [];

                for (var k in response.data.columns) {
                  var id = response.data.columns[k].id;
                  var unit = response.data.columns[k].unit;
                  var rate = response.data.columns[k].rate;
                  var label = response.data.columns[k].label;

                  if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                    if (typeof rate !== 'undefined' && unit !== 'none') {
                      label = label + " (" + unit + "/" + rate + ")";
                    } else if (typeof rate !== 'undefined') {
                      label = label + " (" + rate + ")";
                    }

                    var metric = {
                      'value': id,
                      'label': label
                    };

                    if (id.includes('_web.')) {
                      result.push(metric);

                      _this.webAppMetrics.push(metric);
                    }
                  }
                }
              }

              _this.lastFetchWebAppMetrics = new Date(Date.now());
            })];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            error_7 = _a.sent();
            console.error(error_7);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  return DataSource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourceApi"]);



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigEditor */ "./ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__["ConfigEditor"]).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["QueryEditor"]);

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: SourceGroup, sourceGroups, granularities, findGranularity, defaultQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceGroup", function() { return SourceGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceGroups", function() { return sourceGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "granularities", function() { return granularities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findGranularity", function() { return findGranularity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQuery", function() { return defaultQuery; });
var SourceGroup;

(function (SourceGroup) {
  SourceGroup["ip"] = "IP";
  SourceGroup["webApp"] = "Web App";
  SourceGroup["hostGroup"] = "Host Group";
  SourceGroup["application"] = "Application";
})(SourceGroup || (SourceGroup = {}));

;
var sourceGroups = [{
  label: 'Application',
  value: SourceGroup.application
}, {
  label: 'Host Group',
  value: SourceGroup.hostGroup
}, {
  label: 'Web App',
  value: SourceGroup.webApp
}, {
  label: 'IP',
  value: SourceGroup.ip
}];
var granularities = [{
  "value": 60,
  "label": "60 seconds"
}, {
  "value": 300,
  "label": "5 minutes"
}, {
  "value": 3600,
  "label": "1 hour"
}, {
  "value": 21600,
  "label": "6 hours"
}, {
  "value": 86400,
  "label": "1 day"
}];
var findGranularity = function findGranularity(t) {
  return granularities.find(function (g) {
    return g.value.toString() === t;
  });
};
var defaultQuery = {
  timeshift: 0,
  granularity: granularities[0],
  sourceGroup: SourceGroup.application,
  top: false,
  topN: 10,
  webApps: [],
  webAppMetrics: [],
  hostGroups: [],
  hostGroupMetrics: [],
  applications: [],
  applicationMetrics: []
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map