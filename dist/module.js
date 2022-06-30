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
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ConfigEditor = /*#__PURE__*/function (_PureComponent) {
  _inherits(ConfigEditor, _PureComponent);

  var _super = _createSuper(ConfigEditor);

  function ConfigEditor() {
    var _this;

    _classCallCheck(this, ConfigEditor);

    _this = _super.apply(this, arguments);

    _this._onOptionsChange = function (_options) {
      var _this$props = _this.props,
          onOptionsChange = _this$props.onOptionsChange,
          options = _this$props.options;
      return onOptionsChange(Object.assign(Object.assign({}, options), _options));
    };

    _this.onPathChange = function (event) {
      var _this$props2 = _this.props,
          onOptionsChange = _this$props2.onOptionsChange,
          options = _this$props2.options;
      var jsonData = Object.assign(Object.assign({}, options.jsonData), {
        path: event.target.value
      });
      onOptionsChange(Object.assign(Object.assign({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onTlsSkipVerifyChange = function (event) {
      var _this$props3 = _this.props,
          onOptionsChange = _this$props3.onOptionsChange,
          options = _this$props3.options;
      var jsonData = Object.assign(Object.assign({}, options.jsonData), {
        tlsSkipVerify: event.target.checked,
        skipTlsVerify: event.target.checked
      });
      onOptionsChange(Object.assign(Object.assign({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onUsernameChange = function (event) {
      var _this$props4 = _this.props,
          onOptionsChange = _this$props4.onOptionsChange,
          options = _this$props4.options;
      var jsonData = Object.assign(Object.assign({}, options.jsonData), {
        username: event.target.value
      });
      onOptionsChange(Object.assign(Object.assign({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onPasswordChange = function (event) {
      var _this$props5 = _this.props,
          onOptionsChange = _this$props5.onOptionsChange,
          options = _this$props5.options;
      onOptionsChange(Object.assign(Object.assign({}, options), {
        secureJsonData: {
          password: event.target.value
        }
      }));
    };

    _this.onResetPassword = function () {
      var _this$props6 = _this.props,
          onOptionsChange = _this$props6.onOptionsChange,
          options = _this$props6.options;
      onOptionsChange(Object.assign(Object.assign({}, options), {
        secureJsonFields: Object.assign(Object.assign({}, options.secureJsonFields), {
          password: false
        }),
        secureJsonData: Object.assign(Object.assign({}, options.secureJsonData), {
          password: ''
        })
      }));
    };

    return _this;
  }

  _createClass(ConfigEditor, [{
    key: "render",
    value: function render() {
      var options = this.props.options;
      var secureJsonFields = options.secureJsonFields;
      var Input = _grafana_ui__WEBPACK_IMPORTED_MODULE_1__["LegacyForms"].Input,
          SecretFormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_1__["LegacyForms"].SecretFormField;
      var secureJsonData = options.secureJsonData || {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["InlineFormLabel"], {
        className: "width-10"
      }, "Path"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.jsonData.path || '',
        onChange: this.onPathChange
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["InlineFormLabel"], {
        className: "width-10"
      }, "User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.jsonData.username || '',
        onChange: this.onUsernameChange
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecretFormField, {
        isConfigured: secureJsonFields && secureJsonFields.password,
        value: secureJsonData.password || '',
        label: "Password",
        "aria-label": "Password",
        labelWidth: 10,
        inputWidth: 20,
        onReset: this.onResetPassword,
        onChange: this.onPasswordChange
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["InlineField"], {
        label: "Skip TLS Verify"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["InlineSwitch"], {
        value: options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify,
        checked: options.jsonData.tlsSkipVerify || options.jsonData.skipTlsVerify,
        onChange: this.onTlsSkipVerifyChange
      }))))));
    }
  }]);

  return ConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var QueryEditor = /*#__PURE__*/function (_PureComponent) {
  _inherits(QueryEditor, _PureComponent);

  var _super = _createSuper(QueryEditor);

  function QueryEditor() {
    var _this;

    _classCallCheck(this, QueryEditor);

    _this = _super.apply(this, arguments);

    _this.getHostGroups = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$props, query, datasource, onChange, hostGroups;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.debug('[QueryEditor.getHostGroups]');
                _this$props = this.props, query = _this$props.query, datasource = _this$props.datasource, onChange = _this$props.onChange;
                _context.next = 4;
                return datasource.getHostGroups();

              case 4:
                hostGroups = _context.sent;

                if (hostGroups.length !== (query.hostGroups.length || 0)) {
                  console.debug('hostGroups changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    hostGroups: hostGroups
                  }));
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    _this.getApplications = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this$props2, query, datasource, onChange, applications;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.debug('[QueryEditor.getApplications]');
                _this$props2 = this.props, query = _this$props2.query, datasource = _this$props2.datasource, onChange = _this$props2.onChange;
                _context2.next = 4;
                return datasource.getApplications();

              case 4:
                applications = _context2.sent;

                if (applications.length !== (query.applications.length || 0)) {
                  console.debug('applications changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    applications: applications
                  }));
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    };

    _this.getWebApps = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this$props3, query, datasource, onChange, webApps;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.debug('[QueryEditor.getWebApps]');
                _this$props3 = this.props, query = _this$props3.query, datasource = _this$props3.datasource, onChange = _this$props3.onChange;
                _context3.next = 4;
                return datasource.getWebApps();

              case 4:
                webApps = _context3.sent;

                if (webApps.length !== (query.webApps.length || 0)) {
                  console.debug('webApps changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    webApps: webApps
                  }));
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    };

    _this.getApplicationMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _a, _this$props4, query, datasource, onChange, applicationMetrics;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.debug('[QueryEditor.getApplicationMetrics]');
                _this$props4 = this.props, query = _this$props4.query, datasource = _this$props4.datasource, onChange = _this$props4.onChange;
                _context4.next = 4;
                return datasource.getApplicationMetrics();

              case 4:
                applicationMetrics = _context4.sent;

                if (applicationMetrics.length !== (((_a = query.applicationMetrics) === null || _a === void 0 ? void 0 : _a.length) || 0)) {
                  console.debug('applicationMetrics changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    applicationMetrics: applicationMetrics
                  }));
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    };

    _this.getIPMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _b, _this$props5, query, datasource, onChange, ipMetrics;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.debug('[QueryEditor.getIPMetrics]');
                _this$props5 = this.props, query = _this$props5.query, datasource = _this$props5.datasource, onChange = _this$props5.onChange;
                _context5.next = 4;
                return datasource.getIPMetrics();

              case 4:
                ipMetrics = _context5.sent;

                if (ipMetrics.length !== (((_b = query.ipMetrics) === null || _b === void 0 ? void 0 : _b.length) || 0)) {
                  console.debug('ipMetrics changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    ipMetrics: ipMetrics
                  }));
                }

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    };

    _this.getHostGroupMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _c, _this$props6, query, datasource, onChange, hostGroupMetrics;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.debug('[QueryEditor.getHostGroupMetrics]');
                _this$props6 = this.props, query = _this$props6.query, datasource = _this$props6.datasource, onChange = _this$props6.onChange;
                _context6.next = 4;
                return datasource.getHostGroupMetrics();

              case 4:
                hostGroupMetrics = _context6.sent;

                if (hostGroupMetrics.length !== (((_c = query.hostGroupMetrics) === null || _c === void 0 ? void 0 : _c.length) || 0)) {
                  console.debug('hostGroupMetrics changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    hostGroupMetrics: hostGroupMetrics
                  }));
                }

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    };

    _this.getWebAppMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _d, _this$props7, query, datasource, onChange, webAppMetrics;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.debug('[QueryEditor.getWebAppMetrics]');
                _this$props7 = this.props, query = _this$props7.query, datasource = _this$props7.datasource, onChange = _this$props7.onChange;
                _context7.next = 4;
                return datasource.getWebAppMetrics();

              case 4:
                webAppMetrics = _context7.sent;

                if (webAppMetrics.length !== (((_d = query.webAppMetrics) === null || _d === void 0 ? void 0 : _d.length) || 0)) {
                  console.debug('webAppMetrics changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    webAppMetrics: webAppMetrics
                  }));
                }

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    };

    _this.getTopMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _e, _this$props8, query, datasource, onChange, topMetrics;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.debug('[QueryEditor.getTopMetrics]');
                _this$props8 = this.props, query = _this$props8.query, datasource = _this$props8.datasource, onChange = _this$props8.onChange;
                _context8.next = 4;
                return datasource.getTopMetrics(query.sourceGroup);

              case 4:
                topMetrics = _context8.sent;

                if (topMetrics.length !== (((_e = query.topMetrics) === null || _e === void 0 ? void 0 : _e.length) || 0)) {
                  console.debug('topMetrics changed');
                  onChange(Object.assign(Object.assign({}, query), {
                    topMetrics: topMetrics
                  }));
                }

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    };

    _this.getMetrics = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                console.debug('[QueryEditor.getMetrics]');
                this.getApplicationMetrics();
                this.getIPMetrics();
                this.getHostGroupMetrics();
                this.getWebAppMetrics();
                this.getTopMetrics();

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    };

    _this.getOptions = function (sourceGroup) {
      console.debug("[QueryEditor.getOptions] ".concat(sourceGroup));

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

      _this.getTopMetrics();
    };

    _this.onSourceGroupChange = function (v) {
      console.debug("[QueryEditor.onSourceGroupChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props9 = _this.props,
          onChange = _this$props9.onChange,
          query = _this$props9.query,
          onRunQuery = _this$props9.onRunQuery;

      if (v.value !== query.sourceGroup) {
        console.debug('sourceGroup changed');
        onChange(Object.assign(Object.assign({}, query), {
          sourceGroup: v.value
        }));
        onRunQuery();
      }
    };

    _this.onHostGroupChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onHostGroupChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props10 = _this.props,
          onChange = _this$props10.onChange,
          query = _this$props10.query,
          onRunQuery = _this$props10.onRunQuery;

      if (v.value !== ((_a = query.currentHostGroup) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('currentHostGroup changed');
        onChange(Object.assign(Object.assign({}, query), {
          currentHostGroup: v
        }));
        onRunQuery();
      }
    };

    _this.onApplicationChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onApplicationChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props11 = _this.props,
          onChange = _this$props11.onChange,
          query = _this$props11.query,
          onRunQuery = _this$props11.onRunQuery;

      if (v.value !== ((_a = query.currentApplication) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('currentApplication changed');
        onChange(Object.assign(Object.assign({}, query), {
          currentApplication: v
        }));
        onRunQuery();
      }
    };

    _this.onWebAppChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onWebAppChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props12 = _this.props,
          onChange = _this$props12.onChange,
          query = _this$props12.query,
          onRunQuery = _this$props12.onRunQuery;

      if (v.value !== ((_a = query.currentWebApp) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('currentWebApp changed');
        onChange(Object.assign(Object.assign({}, query), {
          currentWebApp: v
        }));
        onRunQuery();
      }
    };

    _this.onIPChange = function (e) {
      console.debug("[QueryEditor.onIPChange] ".concat(e.target.value));
      console.debug(e);
      var _this$props13 = _this.props,
          onChange = _this$props13.onChange,
          query = _this$props13.query,
          onRunQuery = _this$props13.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        currentIP: e.target.value
      }));
      onRunQuery();
    };

    _this.onApplicationMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onApplicationMetricChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props14 = _this.props,
          onChange = _this$props14.onChange,
          query = _this$props14.query,
          onRunQuery = _this$props14.onRunQuery;

      if (v.value !== ((_a = query.currentApplicationMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onApplicationMetricChange] currentApplicationMetric changed');
        onChange(Object.assign(Object.assign({}, query), {
          currentApplicationMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onHostGroupMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onHostGroupMetricChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props15 = _this.props,
          onChange = _this$props15.onChange,
          query = _this$props15.query,
          onRunQuery = _this$props15.onRunQuery;

      if (v.value !== ((_a = query.currentHostGroupMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onHostGroupMetricChange] currentHostGroupMetric changed.');
        onChange(Object.assign(Object.assign({}, query), {
          currentHostGroupMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onWebAppMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onWebAppMetricChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props16 = _this.props,
          onChange = _this$props16.onChange,
          query = _this$props16.query,
          onRunQuery = _this$props16.onRunQuery;

      if (v.value !== ((_a = query.currentWebAppMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onWebAppMetricChange] currentWebAppMetric changed.');
        onChange(Object.assign(Object.assign({}, query), {
          currentWebAppMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onIPMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onIPMetricChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props17 = _this.props,
          onChange = _this$props17.onChange,
          query = _this$props17.query,
          onRunQuery = _this$props17.onRunQuery;

      if (v.value !== ((_a = query.currentIPMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onIPMetricChange] currentIPMetric changed.');
        onChange(Object.assign(Object.assign({}, query), {
          currentIPMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onExpirationTimeChange = function (e) {
      console.debug("[QueryEditor.onExpirationTimeChange] ".concat(e.target.value));
      var _this$props18 = _this.props,
          onChange = _this$props18.onChange,
          query = _this$props18.query,
          onRunQuery = _this$props18.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        expirationTime: e.target.value
      }));
      onRunQuery();
    };

    _this.onTopMetricChange = function (v) {
      var _a;

      console.debug("[QueryEditor.onTopMetricChange] ".concat(v.label, ", ").concat(v.value));
      var _this$props19 = _this.props,
          onChange = _this$props19.onChange,
          query = _this$props19.query,
          onRunQuery = _this$props19.onRunQuery;

      if (v.value !== ((_a = query.currentTopMetric) === null || _a === void 0 ? void 0 : _a.value)) {
        console.debug('[QueryEditor.onTopMetricChange] currentTopMetric changed.');
        onChange(Object.assign(Object.assign({}, query), {
          currentTopMetric: v
        }));
        onRunQuery();
      }
    };

    _this.onTopChange = function (e) {
      console.debug("[QueryEditor.onTopChange] ".concat(e.currentTarget.checked));
      var _this$props20 = _this.props,
          onChange = _this$props20.onChange,
          query = _this$props20.query,
          onRunQuery = _this$props20.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        top: e.currentTarget.checked
      }));
      onRunQuery();
    };

    _this.onTopGraphChange = function (e) {
      console.debug("[QueryEditor.onTopGraphChange] ".concat(e.currentTarget.checked));
      var _this$props21 = _this.props,
          onChange = _this$props21.onChange,
          query = _this$props21.query,
          onRunQuery = _this$props21.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        topGraph: e.currentTarget.checked
      }));
      onRunQuery();
    };

    _this.onTopNChange = function (e) {
      console.debug("[QueryEditor.onTopNChange] ".concat(e.currentTarget.value));
      var _this$props22 = _this.props,
          onChange = _this$props22.onChange,
          query = _this$props22.query,
          onRunQuery = _this$props22.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        topN: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toInteger"])(e.currentTarget.value)
      }));
      onRunQuery();
    };

    _this.onAliasChange = function (v) {
      console.debug("[QueryEditor.onAliasChange] ".concat(v.target.value));
      var _this$props23 = _this.props,
          onChange = _this$props23.onChange,
          query = _this$props23.query,
          onRunQuery = _this$props23.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        alias: v.target.value
      }));
      onRunQuery();
    };

    _this.onTimeshiftChange = function (v) {
      console.debug("[QueryEditor.onTimeshiftChange] ".concat(v.target.value));
      var _this$props24 = _this.props,
          onChange = _this$props24.onChange,
          query = _this$props24.query,
          onRunQuery = _this$props24.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        timeshift: v.target.value
      }));
      onRunQuery();
    };

    _this.onGranularityChange = function (v) {
      console.debug("[QueryEditor.onGranularityChange] ".concat(JSON.stringify(v)));
      var _this$props25 = _this.props,
          query = _this$props25.query,
          onChange = _this$props25.onChange,
          onRunQuery = _this$props25.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        granularity: v
      }));
      onRunQuery();
    };

    _this.onSSLColumnsChange = function (v) {
      console.debug("[QueryEditor.onSSLColumnsChange]");
      var _this$props26 = _this.props,
          onChange = _this$props26.onChange,
          query = _this$props26.query,
          onRunQuery = _this$props26.onRunQuery;
      onChange(Object.assign(Object.assign({}, query), {
        currentSSLKeyColumns: v
      }));
      onRunQuery();
    };

    return _this;
  }

  _createClass(QueryEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a, _b, _c, _d;

      console.debug('[QueryEditor.render]');
      var query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query, _types__WEBPACK_IMPORTED_MODULE_4__["defaultQuery"]);
      this.getOptions(query.sourceGroup);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Source Group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["sourceGroups"],
        value: query.sourceGroup,
        onChange: this.onSourceGroupChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.top ? {
          display: 'none'
        } : {
          display: 'block'
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
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getHostGroupMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.hostGroupMetrics,
        value: query.currentHostGroupMetric,
        onChange: this.onHostGroupMetricChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Top"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        value: query.top,
        checked: query.top,
        onChange: this.onTopChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "N"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        disabled: !query.top,
        width: 16,
        value: query.topN || 0,
        onChange: this.onTopNChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "Graph"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        disabled: !query.top,
        value: query.topGraph,
        checked: query.topGraph,
        onChange: this.onTopGraphChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !(query.top && query.topGraph),
        label: "Top Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getTopMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.topMetrics,
        value: query.currentTopMetric,
        onChange: this.onTopMetricChange,
        disabled: !(query.top && query.topGraph)
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Granularity"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        menuShouldPortal: true,
        value: (_a = query.granularity) === null || _a === void 0 ? void 0 : _a.value,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["granularities"],
        onChange: this.onGranularityChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Alias"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        value: query.alias || '',
        onChange: this.onAliasChange
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Source Group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["sourceGroups"],
        value: query.sourceGroup,
        onChange: this.onSourceGroupChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.top ? {
          display: 'none'
        } : {
          display: 'block'
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
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getApplicationMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.applicationMetrics,
        value: query.currentApplicationMetric,
        onChange: this.onApplicationMetricChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Top"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        value: query.top,
        checked: query.top,
        onChange: this.onTopChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "N"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        disabled: !query.top,
        width: 16,
        value: query.topN || 0,
        onChange: this.onTopNChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "Graph"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        disabled: !query.top,
        value: query.topGraph,
        checked: query.topGraph,
        onChange: this.onTopGraphChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !(query.top && query.topGraph),
        label: "Top Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getTopMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.topMetrics,
        value: query.currentTopMetric,
        onChange: this.onTopMetricChange,
        disabled: !(query.top && query.topGraph)
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Granularity"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        menuShouldPortal: true,
        value: (_b = query.granularity) === null || _b === void 0 ? void 0 : _b.value,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["granularities"],
        onChange: this.onGranularityChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Alias"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        value: query.alias || '',
        onChange: this.onAliasChange
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Source Group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["sourceGroups"],
        value: query.sourceGroup,
        onChange: this.onSourceGroupChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.top ? {
          display: 'none'
        } : {
          display: 'block'
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
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getWebAppMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.webAppMetrics,
        value: query.currentWebAppMetric,
        onChange: this.onWebAppMetricChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Top"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        value: query.top,
        checked: query.top,
        onChange: this.onTopChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "N"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        disabled: !query.top,
        width: 16,
        value: query.topN || 0,
        onChange: this.onTopNChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "Graph"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        disabled: !query.top,
        value: query.topGraph,
        checked: query.topGraph,
        onChange: this.onTopGraphChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !(query.top && query.topGraph),
        label: "Top Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getTopMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.topMetrics,
        value: query.currentTopMetric,
        onChange: this.onTopMetricChange,
        disabled: !(query.top && query.topGraph)
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Granularity"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        menuShouldPortal: true,
        value: (_c = query.granularity) === null || _c === void 0 ? void 0 : _c.value,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["granularities"],
        onChange: this.onGranularityChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Alias"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        value: query.alias || '',
        onChange: this.onAliasChange
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ip ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Source Group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["sourceGroups"],
        value: query.sourceGroup,
        onChange: this.onSourceGroupChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.top ? {
          display: 'none'
        } : {
          display: 'block'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: query.sourceGroup
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        value: query.currentIP,
        onChange: this.onIPChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getIPMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.ipMetrics,
        value: query.currentIPMetric,
        onChange: this.onIPMetricChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "Top"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        value: query.top,
        checked: query.top,
        onChange: this.onTopChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "N"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        disabled: !query.top,
        width: 16,
        value: query.topN || 0,
        onChange: this.onTopNChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !query.top,
        label: "Graph"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginTop: '8px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        disabled: !query.top,
        value: query.topGraph,
        checked: query.topGraph,
        onChange: this.onTopGraphChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        disabled: !(query.top && query.topGraph),
        label: "Top Metric",
        onLoadStart: function onLoadStart() {
          return _this2.getTopMetrics();
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: query.topMetrics,
        value: query.currentTopMetric,
        onChange: this.onTopMetricChange,
        disabled: !(query.top && query.topGraph)
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Granularity"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        menuShouldPortal: true,
        value: (_d = query.granularity) === null || _d === void 0 ? void 0 : _d.value,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["granularities"],
        onChange: this.onGranularityChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Alias"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        value: query.alias || '',
        onChange: this.onAliasChange
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ssl ? {
          display: 'block'
        } : {
          display: 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Source Group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        width: 'auto',
        menuShouldPortal: true,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["sourceGroups"],
        value: query.sourceGroup,
        onChange: this.onSourceGroupChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "If expiration time is less than",
        tooltip: "Write -1 for all"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        value: query.expirationTime,
        onChange: this.onExpirationTimeChange
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFieldRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineField"], {
        label: "Columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["MultiSelect"], {
        width: 'auto',
        menuShouldPortal: true,
        options: _types__WEBPACK_IMPORTED_MODULE_4__["sslKeyColumns"],
        value: query.currentSSLKeyColumns,
        onChange: this.onSSLColumnsChange
      })))));
    }
  }]);

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var DataSource = /*#__PURE__*/function (_DataSourceApi) {
  _inherits(DataSource, _DataSourceApi);

  var _super = _createSuper(DataSource);

  function DataSource(instanceSettings) {
    var _this;

    _classCallCheck(this, DataSource);

    var _a;

    _this = _super.call(this, instanceSettings);
    _this.data = [];
    _this.sslKeys = [];
    _this.ipMetrics = [];
    _this.topMetrics = [];
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
      ssl: _this.url + '/ssl',
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
    _this.lastFetchSSLKeys = new Date();
    return _this;
  }

  _createClass(DataSource, [{
    key: "topngraphquery",
    value: function topngraphquery(target, start, end, granularity) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dataDef_groupBy, dataDef_topBy, dataDef_columns, tops, filterIN, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dataDef_topBy = [];
                dataDef_columns = [];
                dataDef_topBy = [{
                  "direction": "desc",
                  "id": target.currentTopMetric.value
                }];

                if (!(target.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application)) {
                  _context.next = 8;
                  break;
                }

                dataDef_columns = ["app.id", "app.name"];
                dataDef_groupBy = ["start_time", "app.id"];
                _context.next = 24;
                break;

              case 8:
                if (!(target.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup)) {
                  _context.next = 13;
                  break;
                }

                dataDef_columns = ["host_group.id", "host_group.name"];
                dataDef_groupBy = ["start_time", "host_group.id"];
                _context.next = 24;
                break;

              case 13:
                if (!(target.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp)) {
                  _context.next = 18;
                  break;
                }

                dataDef_columns = ["app.id", "app.name"];
                dataDef_groupBy = ["start_time", "app.id"];
                _context.next = 24;
                break;

              case 18:
                if (!(target.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ip)) {
                  _context.next = 23;
                  break;
                }

                dataDef_columns = ["tcp.ip", "tcp.dns"];
                dataDef_groupBy = ["start_time", "tcp.ip"];
                _context.next = 24;
                break;

              case 23:
                throw new Error("Unknown source group");

              case 24:
                dataDef_columns.push(target.currentTopMetric.value);
                tops = [];
                filterIN = "";
                _context.next = 29;
                return this.doRequest({
                  method: "POST",
                  url: this.urls.instanceCreationSync,
                  data: {
                    "data_defs": [{
                      "source": {
                        "name": "aggregates"
                      },
                      "time": {
                        "start": start.toString(),
                        "end": end.toString(),
                        "granularity": granularity.toString()
                      },
                      "top_by": dataDef_topBy,
                      "columns": dataDef_columns,
                      "limit": target.topN || 10
                    }]
                  }
                }).then(function (response) {
                  var topNResponse;

                  if (response.data.data_defs[0].hasOwnProperty("data")) {
                    topNResponse = response.data.data_defs[0].data;
                  } else {
                    topNResponse = [];
                  }

                  for (var index = 0; index < topNResponse.length; index++) {
                    tops.push(topNResponse[index][1]);

                    if (index === topNResponse.length - 1) {
                      filterIN += "'".concat(topNResponse[index][0], "'");
                    } else {
                      filterIN += "'".concat(topNResponse[index][0], "', ");
                    }
                  }

                  return filterIN;
                });

              case 29:
                // Insert 'start_time' into first index of columns.
                dataDef_columns.unshift("start_time");
                _context.next = 32;
                return this.doRequest({
                  method: 'POST',
                  url: this.urls.instanceCreationSync,
                  data: {
                    "data_defs": [{
                      "source": {
                        "name": "aggregates"
                      },
                      "time": {
                        "start": start.toString(),
                        "end": end.toString(),
                        "granularity": granularity.toString()
                      },
                      "group_by": dataDef_groupBy,
                      "columns": dataDef_columns,
                      "filters": [{
                        "type": "STEELFILTER",
                        "value": "".concat(dataDef_columns[1], " IN (").concat(filterIN, ")")
                      }]
                    }]
                  }
                }).then(function (response) {
                  if (response.data.data_defs[0].hasOwnProperty("data")) {
                    return response.data;
                  } else {
                    return [];
                  }
                });

              case 32:
                result = _context.sent;
                return _context.abrupt("return", {
                  tops: tops,
                  result: result
                });

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "query",
    value: function query(options) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var range, to, from, end, start, granularity, dataDef_source, dataDef_groupBy, dataDef_columns, currentMetric, dataDef_filters, promises;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                range = options.range;
                to = range.to.valueOf();
                from = range.from.valueOf();
                dataDef_source = {};
                dataDef_groupBy = {};
                dataDef_columns = [];
                dataDef_filters = [];
                promises = options.targets.map(function (target) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  var query = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()(target, _types__WEBPACK_IMPORTED_MODULE_4__["defaultQuery"]);
                  end = new Date(to).getTime() / 1000;
                  start = new Date(from).getTime() / 1000;
                  granularity = query.granularity;

                  if ((granularity === null || granularity === void 0 ? void 0 : granularity.value) === 0) {
                    // Means Auto
                    var timeDiff = (end - start) / 60; // In minutes 

                    if (timeDiff < 60) {
                      granularity = _types__WEBPACK_IMPORTED_MODULE_4__["granularities"][1];
                    } else if (timeDiff < 60 * 6) {
                      granularity = _types__WEBPACK_IMPORTED_MODULE_4__["granularities"][2];
                    } else if (timeDiff < 60 * 24 * 5) {
                      granularity = _types__WEBPACK_IMPORTED_MODULE_4__["granularities"][3];
                    } else if (timeDiff < 60 * 24 * 60) {
                      granularity = _types__WEBPACK_IMPORTED_MODULE_4__["granularities"][4];
                    } else {
                      granularity = _types__WEBPACK_IMPORTED_MODULE_4__["granularities"][5];
                    }
                  }

                  dataDef_source = {
                    "name": "aggregates"
                  };

                  if (query.sourceGroup == _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ssl) {
                    return _this2.getSSLKeys().then(function (items) {
                      var frame;
                      var fields = [];

                      for (var index = 0; index < query.currentSSLKeyColumns.length; index++) {
                        fields.push({
                          type: query.currentSSLKeyColumns[index].type,
                          name: query.currentSSLKeyColumns[index].label,
                          value: query.currentSSLKeyColumns[index].value
                        });
                      }

                      frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__["MutableDataFrame"]({
                        fields: fields,
                        name: 'SSL Keys',
                        refId: query.refId
                      });

                      for (var i = 0; i < items.length; i++) {
                        var row = [];
                        var item = items[i];

                        if (item["valid_from"] >= new Date(start * 1000) && item["valid_to"] <= new Date(end * 1000)) {
                          item["expiration_time"] = parseInt(((item["valid_to"].getTime() - new Date().getTime()) / (1000 * 3600 * 24)).toString(), 10);

                          if (query.expirationTime > -1) {
                            if (item["expiration_time"] < query.expirationTime) {
                              for (var _index = 0; _index < fields.length; _index++) {
                                row.push(item[fields[_index].value]);
                              }

                              frame.appendRow(row);
                            }
                          } else {
                            for (var _index2 = 0; _index2 < fields.length; _index2++) {
                              row.push(item[fields[_index2].value]);
                            }

                            frame.appendRow(row);
                          }
                        }
                      }

                      return frame;
                    });
                  } else if (query.sourceGroup == _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup) {
                    // For each datapoint, data are grouped by timestamp and id of hostgroup
                    dataDef_groupBy = ["start_time", "host_group.id"]; // Columns are fields queried, some are fixed value (host_group.id, host_group.name...) and some are metrics

                    dataDef_columns = ["start_time", "host_group.id", "host_group.name"]; // Metric request is filtered by hortgroup selected

                    dataDef_filters.push({
                      "type": "STEELFILTER",
                      "value": "host_group.id == " + ((_a = query.currentHostGroup) === null || _a === void 0 ? void 0 : _a.value)
                    });
                    dataDef_columns.push((_b = query.currentHostGroupMetric) === null || _b === void 0 ? void 0 : _b.value);
                    currentMetric = query.currentHostGroupMetric;
                  } else if (query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application) {
                    dataDef_groupBy = ["start_time", "app.id"];
                    dataDef_columns = ["start_time", "app.id", "app.name"];
                    dataDef_filters.push({
                      "type": "STEELFILTER",
                      "value": "app.id == " + ((_c = query.currentApplication) === null || _c === void 0 ? void 0 : _c.value)
                    });
                    dataDef_columns.push((_d = query.currentApplicationMetric) === null || _d === void 0 ? void 0 : _d.value);
                    currentMetric = query.currentApplicationMetric;
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
                    currentMetric = query.currentIPMetric;
                  } else if (query.sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp) {
                    dataDef_groupBy = ["start_time", "app.id"];
                    dataDef_columns = ["start_time", "app.id", "app.name"];
                    dataDef_filters.push({
                      "type": "STEELFILTER",
                      "value": "app.id == " + ((_f = query.currentWebApp) === null || _f === void 0 ? void 0 : _f.value)
                    });
                    dataDef_columns.push((_g = query.currentWebAppMetric) === null || _g === void 0 ? void 0 : _g.value);
                    currentMetric = query.currentWebAppMetric;
                  } else {
                    throw new Error("Unknown source group");
                  }

                  var dataDef = {
                    'source': dataDef_source,
                    "time": {
                      "end": end.toString(),
                      "start": start.toString(),
                      'granularity': granularity === null || granularity === void 0 ? void 0 : granularity.value.toString()
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

                    if (query.topGraph) {
                      return _this2.topngraphquery(query, start, end, 0).then(function (data) {
                        var _a;

                        var name;
                        var tops = data.tops;
                        var result = data.result;
                        var dataDef = result.data_defs[0];

                        if (!dataDef.hasOwnProperty('data')) {
                          dataDef.data = [];
                        }

                        if (query.alias !== undefined && query.alias.trim() !== '') {
                          name = query.alias;
                        } else {
                          name = (_a = query.currentTopMetric) === null || _a === void 0 ? void 0 : _a.label;
                        }

                        var fields = [{
                          name: "Time",
                          type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].time,
                          values: []
                        }];

                        for (var index = 0; index < tops.length; index++) {
                          fields.push({
                            name: tops[index],
                            type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].number,
                            values: []
                          });
                        }

                        var frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__["MutableDataFrame"]({
                          name: name,
                          fields: fields,
                          refId: query.refId
                        });

                        for (var i = 0; i < dataDef.data.length; i++) {
                          var row = [];
                          var datum = dataDef.data[i];
                          row.push(new Date(datum[0] * 1000));

                          for (var _index3 = 0; _index3 < tops.length; _index3++) {
                            if (tops[_index3] === datum[2]) {
                              row.push(datum[datum.length - 1]);
                            } else {
                              row.push(null);
                            }
                          }

                          frame.appendRow(row);
                        }

                        return frame;
                      });
                    }
                  } else {
                    dataDef.filters = dataDef_filters;
                  }

                  return _this2.doRequest({
                    url: _this2.urls.instanceCreationSync,
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
                            name: column,
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

                      var _loop = function _loop(i) {
                        removeIndices.forEach(function (j) {
                          _dataDef.data[i].splice(j, 1);
                        });
                        frame.appendRow(_dataDef.data[i]);
                      };

                      for (var i = 0; i < _dataDef.data.length; i++) {
                        _loop(i);
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

                      for (var _i = 0; _i < _dataDef.data.length; _i++) {
                        var row = _dataDef.data[_i];
                        frame.appendRow([new Date(row[0] * 1000), row[row.length - 1]]);
                      }
                    } // Push data a variable for caching.


                    _this2.data.push(frame);

                    return frame;
                  });
                });
                return _context2.abrupt("return", Promise.all(promises).then(function (data) {
                  return {
                    data: data
                  };
                }));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "testDatasource",
    value: function testDatasource() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().datasourceRequest({
                  method: 'POST',
                  url: this.urls.auth,
                  headers: this.headers
                }).then(function (response) {
                  if (response.ok === true) {
                    _this3.settings.jsonData.token = response.data.access_token;
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
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "doRequest",
    value: function doRequest(options) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.debug("[DataSource.doRequest] ".concat(options.method, " ").concat(options.url));

                if (!(this.settings.jsonData.token === '' || this.settings.jsonData.token === undefined || this.settings.jsonData.token === null)) {
                  _context4.next = 5;
                  break;
                }

                console.debug("[DataSource.doRequest] No token.");
                _context4.next = 5;
                return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().datasourceRequest({
                  method: 'POST',
                  url: this.urls.auth
                }).then(function (response) {
                  _this4.settings.jsonData.token = response.data.access_token;
                });

              case 5:
                return _context4.abrupt("return", Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().datasourceRequest(Object.assign(Object.assign({}, options), {
                  headers: Object.assign(Object.assign({}, this.headers), {
                    'Authorization': 'Bearer ' + this.settings.jsonData.token
                  })
                })));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "getHostGroups",
    value: function getHostGroups() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this5 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.debug('[DataSource.getHostGroups]');
                result = [];
                _context5.prev = 2;

                if (!((Date.now() - this.lastFetchHostGroups.getTime()) / 1000 / 60 < this.optionsTimeout && this.hostGroups.length > 0)) {
                  _context5.next = 6;
                  break;
                }

                console.debug('[DataSource.getHostGroups] Cache hit.');
                return _context5.abrupt("return", this.hostGroups);

              case 6:
                _context5.next = 8;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.hostGroup
                }).then(function (response) {
                  _this5.hostGroups = [];

                  if (typeof response !== 'undefined') {
                    for (var k in response.data.items) {
                      if (response.data.items[k]["enabled"]) {
                        var hostGroup = {
                          'label': response.data.items[k]["name"],
                          'value': response.data.items[k]["id"]
                        };
                        result.push(hostGroup);

                        _this5.hostGroups.push(hostGroup);
                      }
                    }
                  }

                  _this5.lastFetchHostGroups = new Date(Date.now());
                });

              case 8:
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](2);
                console.error(_context5.t0);

              case 13:
                return _context5.abrupt("return", result);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 10]]);
      }));
    }
  }, {
    key: "getApplications",
    value: function getApplications() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this6 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = [];
                _context6.prev = 1;

                if (!((Date.now() - this.lastFetchApplications.getTime()) / 1000 / 60 < this.optionsTimeout && this.applications.length > 0)) {
                  _context6.next = 5;
                  break;
                }

                console.debug('[DataSource.getApplications] Cache hit.');
                return _context6.abrupt("return", this.applications);

              case 5:
                _context6.next = 7;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.application
                }).then(function (response) {
                  if (typeof response !== 'undefined') {
                    _this6.applications = [];

                    for (var k in response.data.items) {
                      if (response.data.items[k]["enabled"]) {
                        var application = {
                          'label': response.data.items[k]["name"],
                          'value': response.data.items[k]["id"]
                        };
                        result.push(application);

                        _this6.applications.push(application);
                      }
                    }
                  }

                  _this6.lastFetchApplications = new Date(Date.now());
                });

              case 7:
                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);
                console.error(_context6.t0);

              case 12:
                return _context6.abrupt("return", result);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 9]]);
      }));
    }
  }, {
    key: "getWebApps",
    value: function getWebApps() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _this7 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = [];
                _context7.prev = 1;

                if (!((Date.now() - this.lastFetchWebApps.getTime()) / 1000 / 60 < this.optionsTimeout && this.webApps.length > 0)) {
                  _context7.next = 5;
                  break;
                }

                console.debug('[DataSource.getWebApps] Cache hit.');
                return _context7.abrupt("return", this.webApps);

              case 5:
                _context7.next = 7;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.webApp
                }).then(function (response) {
                  if (typeof response !== 'undefined') {
                    _this7.webApps = [];

                    for (var k in response.data.items) {
                      if (response.data.items[k]["enabled"]) {
                        var webApp = {
                          'label': response.data.items[k]["name"],
                          'value': response.data.items[k]["id"]
                        };
                        result.push(webApp);

                        _this7.webApps.push(webApp);
                      }
                    }
                  }

                  _this7.lastFetchWebApps = new Date(Date.now());
                });

              case 7:
                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);
                console.error(_context7.t0);

              case 12:
                return _context7.abrupt("return", result);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 9]]);
      }));
    }
  }, {
    key: "getTopMetrics",
    value: function getTopMetrics(sourceGroup) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].application)) {
                  _context8.next = 6;
                  break;
                }

                _context8.next = 3;
                return this.getApplicationMetrics();

              case 3:
                this.topMetrics = _context8.sent;
                _context8.next = 25;
                break;

              case 6:
                if (!(sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].hostGroup)) {
                  _context8.next = 12;
                  break;
                }

                _context8.next = 9;
                return this.getHostGroupMetrics();

              case 9:
                this.topMetrics = _context8.sent;
                _context8.next = 25;
                break;

              case 12:
                if (!(sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].webApp)) {
                  _context8.next = 18;
                  break;
                }

                _context8.next = 15;
                return this.getWebAppMetrics();

              case 15:
                this.topMetrics = _context8.sent;
                _context8.next = 25;
                break;

              case 18:
                if (!(sourceGroup === _types__WEBPACK_IMPORTED_MODULE_4__["SourceGroup"].ip)) {
                  _context8.next = 24;
                  break;
                }

                _context8.next = 21;
                return this.getIPMetrics();

              case 21:
                this.topMetrics = _context8.sent;
                _context8.next = 25;
                break;

              case 24:
                throw new Error('Unknown source group');

              case 25:
                return _context8.abrupt("return", this.topMetrics);

              case 26:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "getApplicationMetrics",
    value: function getApplicationMetrics() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var _this8 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                result = [];
                _context9.prev = 1;

                if (!((Date.now() - this.lastFetchApplicationMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.applicationMetrics.length > 0)) {
                  _context9.next = 5;
                  break;
                }

                console.debug('[DataSource.getApplicationMetrics] Cache hit.');
                return _context9.abrupt("return", this.applicationMetrics);

              case 5:
                _context9.next = 7;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.metric
                }).then(function (response) {
                  if (typeof response !== 'undefined') {
                    _this8.applicationMetrics = [];

                    for (var k in response.data.columns) {
                      var id = response.data.columns[k].id;
                      var unit = response.data.columns[k].unit;
                      var rate = response.data.columns[k].rate;
                      var label = response.data.columns[k].label;

                      if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                        if (typeof rate !== 'undefined' && unit !== 'none') {
                          label = "".concat(label, " (").concat(unit, "/").concat(rate, ")");
                        } else if (typeof rate !== 'undefined') {
                          label = "".concat(label, " (").concat(rate, ")");
                        }

                        var metric = {
                          'value': id,
                          'label': label
                        };

                        if (!id.includes('p2m') && !id.includes('m2p') && !id.includes('web') && !id.includes('_db.') && !id.includes('cxa')) {
                          result.push(metric);

                          _this8.applicationMetrics.push(metric);
                        }
                      }
                    }
                  }

                  _this8.lastFetchApplicationMetrics = new Date(Date.now());
                });

              case 7:
                _context9.next = 12;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](1);
                console.error(_context9.t0);

              case 12:
                return _context9.abrupt("return", result);

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 9]]);
      }));
    }
  }, {
    key: "getIPMetrics",
    value: function getIPMetrics() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var _this9 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                result = [];
                _context10.prev = 1;

                if (!((Date.now() - this.lastFetchIPMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.ipMetrics.length > 0)) {
                  _context10.next = 5;
                  break;
                }

                console.debug('[DataSource.getIPMetrics] Cache hit.');
                return _context10.abrupt("return", this.ipMetrics);

              case 5:
                _context10.next = 7;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.metric
                }).then(function (response) {
                  if (typeof response !== 'undefined') {
                    _this9.ipMetrics = [];

                    for (var k in response.data.columns) {
                      var id = response.data.columns[k].id;
                      var unit = response.data.columns[k].unit;
                      var rate = response.data.columns[k].rate;
                      var label = response.data.columns[k].label;

                      if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                        if (typeof rate !== 'undefined' && unit !== 'none') {
                          label = "".concat(label, " (").concat(unit, "/").concat(rate, ")");
                        } else if (typeof rate !== 'undefined') {
                          label = "".concat(label, " (").concat(rate, ")");
                        }

                        var metric = {
                          'value': id,
                          'label': label
                        };

                        if (!id.includes('p2m') && !id.includes('m2p') && !id.includes('web') && !id.includes('_db.') && !id.includes('cxa')) {
                          result.push(metric);

                          _this9.ipMetrics.push(metric);
                        }
                      }
                    }
                  }

                  _this9.lastFetchIPMetrics = new Date(Date.now());
                });

              case 7:
                _context10.next = 12;
                break;

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](1);
                console.error(_context10.t0);

              case 12:
                return _context10.abrupt("return", result);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 9]]);
      }));
    }
  }, {
    key: "getHostGroupMetrics",
    value: function getHostGroupMetrics() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var _this10 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                result = [];
                _context11.prev = 1;

                if (!((Date.now() - this.lastFetchHostGroupMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.hostGroupMetrics.length > 0)) {
                  _context11.next = 5;
                  break;
                }

                console.debug('[DataSource.getHostGroupMetrics] Cache hit.');
                return _context11.abrupt("return", this.hostGroupMetrics);

              case 5:
                _context11.next = 7;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.metric
                }).then(function (response) {
                  if (typeof response !== 'undefined') {
                    _this10.hostGroupMetrics = [];

                    for (var k in response.data.columns) {
                      var id = response.data.columns[k].id;
                      var unit = response.data.columns[k].unit;
                      var rate = response.data.columns[k].rate;
                      var label = response.data.columns[k].label;

                      if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                        if (typeof rate !== 'undefined' && unit !== 'none') {
                          label = "".concat(label, " (").concat(unit, "/").concat(rate, ")");
                        } else if (typeof rate !== 'undefined') {
                          label = "".concat(label, " (").concat(rate, ")");
                        }

                        var metric = {
                          'value': id,
                          'label': label
                        };
                        result.push(metric);

                        _this10.hostGroupMetrics.push(metric);
                      }
                    }
                  }

                  _this10.lastFetchHostGroupMetrics = new Date(Date.now());
                });

              case 7:
                _context11.next = 12;
                break;

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](1);
                console.error(_context11.t0);

              case 12:
                return _context11.abrupt("return", result);

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 9]]);
      }));
    }
  }, {
    key: "getWebAppMetrics",
    value: function getWebAppMetrics() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _this11 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                result = [];
                _context12.prev = 1;

                if (!((Date.now() - this.lastFetchWebAppMetrics.getTime()) / 1000 / 60 < this.optionsTimeout && this.webAppMetrics.length > 0)) {
                  _context12.next = 5;
                  break;
                }

                console.debug('[DataSource.getWebAppMetrics] Cache hit.');
                return _context12.abrupt("return", this.webAppMetrics);

              case 5:
                _context12.next = 7;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.metric
                }).then(function (response) {
                  if (typeof response !== 'undefined') {
                    _this11.webAppMetrics = [];

                    for (var k in response.data.columns) {
                      var id = response.data.columns[k].id;
                      var unit = response.data.columns[k].unit;
                      var rate = response.data.columns[k].rate;
                      var label = response.data.columns[k].label;

                      if (!id.endsWith('.id') && !id.endsWith('_id') && !id.endsWith('.id') && !id.endsWith('.name') && !id.endsWith('_name') && !id.endsWith('.ip') && !id.endsWith('_ip') && !id.endsWith('.url') && !id.endsWith('_url') && !id.endsWith('.type') && !id.endsWith('_type') && !id.endsWith('.dns') && !id.endsWith('_dns') && !id.endsWith('start_time') && !id.endsWith('end_time') && !id.includes('rtp')) {
                        if (typeof rate !== 'undefined' && unit !== 'none') {
                          label = "".concat(label, " (").concat(unit, "/").concat(rate, ")");
                        } else if (typeof rate !== 'undefined') {
                          label = "".concat(label, " (").concat(rate, ")");
                        }

                        var metric = {
                          'value': id,
                          'label': label
                        };

                        if (id.includes('_web.')) {
                          result.push(metric);

                          _this11.webAppMetrics.push(metric);
                        }
                      }
                    }
                  }

                  _this11.lastFetchWebAppMetrics = new Date(Date.now());
                });

              case 7:
                _context12.next = 12;
                break;

              case 9:
                _context12.prev = 9;
                _context12.t0 = _context12["catch"](1);
                console.error(_context12.t0);

              case 12:
                return _context12.abrupt("return", result);

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 9]]);
      }));
    }
  }, {
    key: "getSSLKeys",
    value: function getSSLKeys() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var _this12 = this;

        var result;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                result = [];
                _context13.prev = 1;
                console.info('[DataSource.getSSLKeys]');

                if (!((Date.now() - this.lastFetchSSLKeys.getTime()) / 1000 / 60 < this.optionsTimeout && this.sslKeys.length > 0)) {
                  _context13.next = 6;
                  break;
                }

                console.debug('[DataSource.getSSLKeys] Cache hit.');
                return _context13.abrupt("return", this.sslKeys);

              case 6:
                _context13.next = 8;
                return this.doRequest({
                  method: 'GET',
                  url: this.urls.ssl
                }).then(function (response) {
                  if (typeof response !== 'undefined') {
                    _this12.sslKeys = [];

                    for (var index = 0; index < response.data.items.length; index++) {
                      var item = response.data.items[index];
                      var sslKey = {
                        "status": item.status,
                        "subject.common_name": item.subject.common_name,
                        "subject.organization": item.subject.organization,
                        "issuer.common_name": item.issuer.common_name,
                        "issuer.organization": item.issuer.organization,
                        "serial_number": item.serial_number.toString(),
                        "valid_from": new Date(item.valid_from * 1000),
                        "valid_to": new Date(item.valid_to * 1000),
                        "first_seen": new Date(item.first_seen * 1000),
                        "last_seen": new Date(item.last_seen * 1000)
                      };
                      result.push(sslKey);

                      _this12.sslKeys.push(sslKey);
                    }
                  }

                  _this12.lastFetchSSLKeys = new Date(Date.now());
                });

              case 8:
                _context13.next = 13;
                break;

              case 10:
                _context13.prev = 10;
                _context13.t0 = _context13["catch"](1);
                console.error(_context13.t0);

              case 13:
                return _context13.abrupt("return", result);

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[1, 10]]);
      }));
    }
  }]);

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
/*! exports provided: SourceGroup, sourceGroups, granularities, sslKeyColumns, findGranularity, defaultQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceGroup", function() { return SourceGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceGroups", function() { return sourceGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "granularities", function() { return granularities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sslKeyColumns", function() { return sslKeyColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findGranularity", function() { return findGranularity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultQuery", function() { return defaultQuery; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);

var SourceGroup;

(function (SourceGroup) {
  SourceGroup["ip"] = "IP";
  SourceGroup["webApp"] = "Web App";
  SourceGroup["hostGroup"] = "Host Group";
  SourceGroup["application"] = "Application";
  SourceGroup["ssl"] = "SSL";
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
}, {
  label: 'SSL',
  value: SourceGroup.ssl
}];
var granularities = [{
  "value": 0,
  "label": "Auto"
}, {
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
var sslKeyColumns = [{
  "label": "Status",
  "value": "status",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string
}, {
  "label": "Subject Common Name",
  "value": "subject.common_name",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string
}, {
  "label": "Subject Organization",
  "value": "subject.organization",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string
}, {
  "label": "Issuer Common Name",
  "value": "issuer.common_name",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string
}, {
  "label": "Issuer Organization",
  "value": "issuer.organization",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string
}, {
  "label": "Valid From",
  "value": "valid_from",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time
}, {
  "label": "Valid To",
  "value": "valid_to",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time
}, {
  "label": "First Seen",
  "value": "first_seen",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time
}, {
  "label": "Last Seen",
  "value": "last_seen",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time
}, {
  "label": "Expiration Time",
  "value": "expiration_time",
  "type": _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number
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
  topGraph: false,
  sslKeys: [],
  currentSSLKeyColumns: sslKeyColumns,
  expirationTime: -1,
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