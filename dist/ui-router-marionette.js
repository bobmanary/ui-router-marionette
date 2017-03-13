(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("underscore"), require("backbone.marionette"));
	else if(typeof define === 'function' && define.amd)
		define("UIRouterMarionette", ["underscore", "backbone.marionette"], factory);
	else if(typeof exports === 'object')
		exports["UIRouterMarionette"] = factory(require("underscore"), require("backbone.marionette"));
	else
		root["UIRouterMarionette"] = factory(root["_"], root["Marionette"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_74__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $q, Router, UILayoutMn2, UISref, UISrefActive, UIViewMarionette, _, ref, ref1;
	
	_ = __webpack_require__(2);
	
	$q = __webpack_require__(3).$q;
	
	ref = __webpack_require__(59), UIViewMarionette = ref.UIViewMarionette, Router = ref.Router;
	
	ref1 = __webpack_require__(76), UISref = ref1.UISref, UISrefActive = ref1.UISrefActive;
	
	UILayoutMn2 = __webpack_require__(77);
	
	_.extend(exports, {
	  Router: Router,
	  UISref: UISref,
	  UISrefActive: UISrefActive,
	  UILayoutMn2: UILayoutMn2,
	  UIViewMarionette: UIViewMarionette,
	  $q: $q
	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @coreapi
	 * @module common
	 */ /** */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	__export(__webpack_require__(51));
	__export(__webpack_require__(52));
	__export(__webpack_require__(53));
	__export(__webpack_require__(54));
	__export(__webpack_require__(55));
	__export(__webpack_require__(56));
	__export(__webpack_require__(57));
	__export(__webpack_require__(48));
	__export(__webpack_require__(27));
	__export(__webpack_require__(58));
	//# sourceMappingURL=index.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module common */ /** for typedoc */
	__export(__webpack_require__(5));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(7));
	__export(__webpack_require__(6));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(14));
	//# sourceMappingURL=index.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Random utility functions used in the UI-Router code
	 *
	 * These functions are exported, but are subject to change without notice.
	 *
	 * @preferred
	 * @module common
	 */ /** for typedoc */
	"use strict";
	var predicates_1 = __webpack_require__(6);
	var hof_1 = __webpack_require__(7);
	var coreservices_1 = __webpack_require__(8);
	var w = typeof window === 'undefined' ? {} : window;
	var angular = w.angular || {};
	exports.fromJson = angular.fromJson || JSON.parse.bind(JSON);
	exports.toJson = angular.toJson || JSON.stringify.bind(JSON);
	exports.copy = angular.copy || _copy;
	exports.forEach = angular.forEach || _forEach;
	exports.extend = angular.extend || _extend;
	exports.equals = angular.equals || _equals;
	exports.identity = function (x) { return x; };
	exports.noop = function () { return undefined; };
	/**
	 * Builds proxy functions on the `to` object which pass through to the `from` object.
	 *
	 * For each key in `fnNames`, creates a proxy function on the `to` object.
	 * The proxy function calls the real function on the `from` object.
	 *
	 *
	 * #### Example:
	 * This example creates an new class instance whose functions are prebound to the new'd object.
	 * ```js
	 * class Foo {
	 *   constructor(data) {
	 *     // Binds all functions from Foo.prototype to 'this',
	 *     // then copies them to 'this'
	 *     bindFunctions(Foo.prototype, this, this);
	 *     this.data = data;
	 *   }
	 *
	 *   log() {
	 *     console.log(this.data);
	 *   }
	 * }
	 *
	 * let myFoo = new Foo([1,2,3]);
	 * var logit = myFoo.log;
	 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
	 * ```
	 *
	 * #### Example:
	 * This example creates a bound version of a service function, and copies it to another object
	 * ```
	 *
	 * var SomeService = {
	 *   this.data = [3, 4, 5];
	 *   this.log = function() {
	 *     console.log(this.data);
	 *   }
	 * }
	 *
	 * // Constructor fn
	 * function OtherThing() {
	 *   // Binds all functions from SomeService to SomeService,
	 *   // then copies them to 'this'
	 *   bindFunctions(SomeService, this, SomeService);
	 * }
	 *
	 * let myOtherThing = new OtherThing();
	 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
	 * ```
	 *
	 * @param source A function that returns the source object which contains the original functions to be bound
	 * @param target A function that returns the target object which will receive the bound functions
	 * @param bind A function that returns the object which the functions will be bound to
	 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
	 * @param latebind If true, the binding of the function is delayed until the first time it's invoked
	 */
	function createProxyFunctions(source, target, bind, fnNames, latebind) {
	    if (latebind === void 0) { latebind = false; }
	    var bindFunction = function (fnName) {
	        return source()[fnName].bind(bind());
	    };
	    var makeLateRebindFn = function (fnName) { return function lateRebindFunction() {
	        target[fnName] = bindFunction(fnName);
	        return target[fnName].apply(null, arguments);
	    }; };
	    fnNames = fnNames || Object.keys(source());
	    return fnNames.reduce(function (acc, name) {
	        acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
	        return acc;
	    }, target);
	}
	exports.createProxyFunctions = createProxyFunctions;
	/**
	 * prototypal inheritance helper.
	 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
	 */
	exports.inherit = function (parent, extra) {
	    return exports.extend(new (exports.extend(function () { }, { prototype: parent }))(), extra);
	};
	/**
	 * Given an arguments object, converts the arguments at index idx and above to an array.
	 * This is similar to es6 rest parameters.
	 *
	 * Optionally, the argument at index idx may itself already be an array.
	 *
	 * For example,
	 * given either:
	 *        arguments = [ obj, "foo", "bar" ]
	 * or:
	 *        arguments = [ obj, ["foo", "bar"] ]
	 * then:
	 *        restArgs(arguments, 1) == ["foo", "bar"]
	 *
	 * This allows functions like pick() to be implemented such that it allows either a bunch
	 * of string arguments (like es6 rest parameters), or a single array of strings:
	 *
	 * given:
	 *        var obj = { foo: 1, bar: 2, baz: 3 };
	 * then:
	 *        pick(obj, "foo", "bar");   // returns { foo: 1, bar: 2 }
	 *        pick(obj, ["foo", "bar"]); // returns { foo: 1, bar: 2 }
	 */
	var restArgs = function (args, idx) {
	    if (idx === void 0) { idx = 0; }
	    return Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(args, idx));
	};
	/** Given an array, returns true if the object is found in the array, (using indexOf) */
	exports.inArray = hof_1.curry(_inArray);
	function _inArray(array, obj) {
	    return array.indexOf(obj) !== -1;
	}
	exports._inArray = _inArray;
	/**
	 * Given an array, and an item, if the item is found in the array, it removes it (in-place).
	 * The same array is returned
	 */
	exports.removeFrom = hof_1.curry(_removeFrom);
	function _removeFrom(array, obj) {
	    var idx = array.indexOf(obj);
	    if (idx >= 0)
	        array.splice(idx, 1);
	    return array;
	}
	exports._removeFrom = _removeFrom;
	/** pushes a values to an array and returns the value */
	exports.pushTo = hof_1.curry(_pushTo);
	function _pushTo(arr, val) {
	    return (arr.push(val), val);
	}
	exports._pushTo = _pushTo;
	/** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
	exports.deregAll = function (functions) {
	    return functions.slice().forEach(function (fn) {
	        typeof fn === 'function' && fn();
	        exports.removeFrom(functions, fn);
	    });
	};
	/**
	 * Applies a set of defaults to an options object.  The options object is filtered
	 * to only those properties of the objects in the defaultsList.
	 * Earlier objects in the defaultsList take precedence when applying defaults.
	 */
	function defaults(opts) {
	    if (opts === void 0) { opts = {}; }
	    var defaultsList = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        defaultsList[_i - 1] = arguments[_i];
	    }
	    var defaults = merge.apply(null, [{}].concat(defaultsList));
	    return exports.extend({}, defaults, pick(opts || {}, Object.keys(defaults)));
	}
	exports.defaults = defaults;
	/**
	 * Merges properties from the list of objects to the destination object.
	 * If a property already exists in the destination object, then it is not overwritten.
	 */
	function merge(dst) {
	    var objs = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        objs[_i - 1] = arguments[_i];
	    }
	    exports.forEach(objs, function (obj) {
	        exports.forEach(obj, function (value, key) {
	            if (!dst.hasOwnProperty(key))
	                dst[key] = value;
	        });
	    });
	    return dst;
	}
	exports.merge = merge;
	/** Reduce function that merges each element of the list into a single object, using extend */
	exports.mergeR = function (memo, item) { return exports.extend(memo, item); };
	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	    var path = [];
	    for (var n in first.path) {
	        if (first.path[n] !== second.path[n])
	            break;
	        path.push(first.path[n]);
	    }
	    return path;
	}
	exports.ancestors = ancestors;
	function pickOmitImpl(predicate, obj) {
	    var keys = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        keys[_i - 2] = arguments[_i];
	    }
	    var objCopy = {};
	    for (var key in obj) {
	        if (predicate(keys, key))
	            objCopy[key] = obj[key];
	    }
	    return objCopy;
	}
	/** Return a copy of the object only containing the whitelisted properties. */
	function pick(obj) {
	    return pickOmitImpl.apply(null, [exports.inArray].concat(restArgs(arguments)));
	}
	exports.pick = pick;
	/** Return a copy of the object omitting the blacklisted properties. */
	function omit(obj) {
	    var notInArray = function (array, item) { return !exports.inArray(array, item); };
	    return pickOmitImpl.apply(null, [notInArray].concat(restArgs(arguments)));
	}
	exports.omit = omit;
	/**
	 * Maps an array, or object to a property (by name)
	 */
	function pluck(collection, propName) {
	    return map(collection, hof_1.prop(propName));
	}
	exports.pluck = pluck;
	/** Filters an Array or an Object's properties based on a predicate */
	function filter(collection, callback) {
	    var arr = predicates_1.isArray(collection), result = arr ? [] : {};
	    var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return result[key] = x; };
	    exports.forEach(collection, function (item, i) {
	        if (callback(item, i))
	            accept(item, i);
	    });
	    return result;
	}
	exports.filter = filter;
	/** Finds an object from an array, or a property of an object, that matches a predicate */
	function find(collection, callback) {
	    var result;
	    exports.forEach(collection, function (item, i) {
	        if (result)
	            return;
	        if (callback(item, i))
	            result = item;
	    });
	    return result;
	}
	exports.find = find;
	/** Given an object, returns a new object, where each property is transformed by the callback function */
	exports.mapObj = map;
	/** Maps an array or object properties using a callback function */
	function map(collection, callback) {
	    var result = predicates_1.isArray(collection) ? [] : {};
	    exports.forEach(collection, function (item, i) { return result[i] = callback(item, i); });
	    return result;
	}
	exports.map = map;
	/**
	 * Given an object, return its enumerable property values
	 *
	 * @example
	 * ```
	 *
	 * let foo = { a: 1, b: 2, c: 3 }
	 * let vals = values(foo); // [ 1, 2, 3 ]
	 * ```
	 */
	exports.values = function (obj) {
	    return Object.keys(obj).map(function (key) { return obj[key]; });
	};
	/**
	 * Reduce function that returns true if all of the values are truthy.
	 *
	 * @example
	 * ```
	 *
	 * let vals = [ 1, true, {}, "hello world"];
	 * vals.reduce(allTrueR, true); // true
	 *
	 * vals.push(0);
	 * vals.reduce(allTrueR, true); // false
	 * ```
	 */
	exports.allTrueR = function (memo, elem) { return memo && elem; };
	/**
	 * Reduce function that returns true if any of the values are truthy.
	 *
	 *  * @example
	 * ```
	 *
	 * let vals = [ 0, null, undefined ];
	 * vals.reduce(anyTrueR, true); // false
	 *
	 * vals.push("hello world");
	 * vals.reduce(anyTrueR, true); // true
	 * ```
	 */
	exports.anyTrueR = function (memo, elem) { return memo || elem; };
	/**
	 * Reduce function which un-nests a single level of arrays
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
	 * ```
	 */
	exports.unnestR = function (memo, elem) { return memo.concat(elem); };
	/**
	 * Reduce function which recursively un-nests all arrays
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
	 * ```
	 */
	exports.flattenR = function (memo, elem) {
	    return predicates_1.isArray(elem) ? memo.concat(elem.reduce(exports.flattenR, [])) : pushR(memo, elem);
	};
	/**
	 * Reduce function that pushes an object to an array, then returns the array.
	 * Mostly just for [[flattenR]] and [[uniqR]]
	 */
	function pushR(arr, obj) {
	    arr.push(obj);
	    return arr;
	}
	exports.pushR = pushR;
	/** Reduce function that filters out duplicates */
	exports.uniqR = function (acc, token) {
	    return exports.inArray(acc, token) ? acc : pushR(acc, token);
	};
	/**
	 * Return a new array with a single level of arrays unnested.
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
	 * ```
	 */
	exports.unnest = function (arr) { return arr.reduce(exports.unnestR, []); };
	/**
	 * Return a completely flattened version of an array.
	 *
	 * @example
	 * ```
	 *
	 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
	 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
	 * ```
	 */
	exports.flatten = function (arr) { return arr.reduce(exports.flattenR, []); };
	/**
	 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
	 * @example
	 * ```
	 *
	 * let isNumber = (obj) => typeof(obj) === 'number';
	 * let allNumbers = [ 1, 2, 3, 4, 5 ];
	 * allNumbers.filter(assertPredicate(isNumber)); //OK
	 *
	 * let oneString = [ 1, 2, 3, 4, "5" ];
	 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
	 * ```
	 */
	exports.assertPredicate = assertFn;
	/**
	 * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
	 * @example
	 * ```
	 *
	 * var data = { foo: 1, bar: 2 };
	 *
	 * let keys = [ 'foo', 'bar' ]
	 * let values = keys.map(assertMap(key => data[key], "Key not found"));
	 * // values is [1, 2]
	 *
	 * let keys = [ 'foo', 'bar', 'baz' ]
	 * let values = keys.map(assertMap(key => data[key], "Key not found"));
	 * // throws Error("Key not found")
	 * ```
	 */
	exports.assertMap = assertFn;
	function assertFn(predicateOrMap, errMsg) {
	    if (errMsg === void 0) { errMsg = "assert failure"; }
	    return function (obj) {
	        var result = predicateOrMap(obj);
	        if (!result) {
	            throw new Error(predicates_1.isFunction(errMsg) ? errMsg(obj) : errMsg);
	        }
	        return result;
	    };
	}
	exports.assertFn = assertFn;
	/**
	 * Like _.pairs: Given an object, returns an array of key/value pairs
	 *
	 * @example
	 * ```
	 *
	 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
	 * ```
	 */
	exports.pairs = function (obj) {
	    return Object.keys(obj).map(function (key) { return [key, obj[key]]; });
	};
	/**
	 * Given two or more parallel arrays, returns an array of tuples where
	 * each tuple is composed of [ a[i], b[i], ... z[i] ]
	 *
	 * @example
	 * ```
	 *
	 * let foo = [ 0, 2, 4, 6 ];
	 * let bar = [ 1, 3, 5, 7 ];
	 * let baz = [ 10, 30, 50, 70 ];
	 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
	 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
	 * ```
	 */
	function arrayTuples() {
	    var arrayArgs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        arrayArgs[_i] = arguments[_i];
	    }
	    if (arrayArgs.length === 0)
	        return [];
	    var length = arrayArgs.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
	    return Array.apply(null, Array(length)).map(function (ignored, idx) { return arrayArgs.map(function (arr) { return arr[idx]; }); });
	}
	exports.arrayTuples = arrayTuples;
	/**
	 * Reduce function which builds an object from an array of [key, value] pairs.
	 *
	 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
	 *
	 * Each keyValueTuple should be an array with values [ key: string, value: any ]
	 *
	 * @example
	 * ```
	 *
	 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
	 *
	 * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
	 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
	 *
	 * // Or, more simply:
	 * var pairsToObj = pairs.reduce(applyPairs, {})
	 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
	 * ```
	 */
	function applyPairs(memo, keyValTuple) {
	    var key, value;
	    if (predicates_1.isArray(keyValTuple))
	        key = keyValTuple[0], value = keyValTuple[1];
	    if (!predicates_1.isString(key))
	        throw new Error("invalid parameters to applyPairs");
	    memo[key] = value;
	    return memo;
	}
	exports.applyPairs = applyPairs;
	/** Get the last element of an array */
	function tail(arr) {
	    return arr.length && arr[arr.length - 1] || undefined;
	}
	exports.tail = tail;
	/**
	 * shallow copy from src to dest
	 *
	 * note: This is a shallow copy, while angular.copy is a deep copy.
	 * ui-router uses `copy` only to make copies of state parameters.
	 */
	function _copy(src, dest) {
	    if (dest)
	        Object.keys(dest).forEach(function (key) { return delete dest[key]; });
	    if (!dest)
	        dest = {};
	    return exports.extend(dest, src);
	}
	/** Naive forEach implementation works with Objects or Arrays */
	function _forEach(obj, cb, _this) {
	    if (predicates_1.isArray(obj))
	        return obj.forEach(cb, _this);
	    Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
	}
	function _copyProps(to, from) {
	    Object.keys(from).forEach(function (key) { return to[key] = from[key]; });
	    return to;
	}
	function _extend(toObj) {
	    return restArgs(arguments, 1).filter(exports.identity).reduce(_copyProps, toObj);
	}
	function _equals(o1, o2) {
	    if (o1 === o2)
	        return true;
	    if (o1 === null || o2 === null)
	        return false;
	    if (o1 !== o1 && o2 !== o2)
	        return true; // NaN === NaN
	    var t1 = typeof o1, t2 = typeof o2;
	    if (t1 !== t2 || t1 !== 'object')
	        return false;
	    var tup = [o1, o2];
	    if (hof_1.all(predicates_1.isArray)(tup))
	        return _arraysEq(o1, o2);
	    if (hof_1.all(predicates_1.isDate)(tup))
	        return o1.getTime() === o2.getTime();
	    if (hof_1.all(predicates_1.isRegExp)(tup))
	        return o1.toString() === o2.toString();
	    if (hof_1.all(predicates_1.isFunction)(tup))
	        return true; // meh
	    var predicates = [predicates_1.isFunction, predicates_1.isArray, predicates_1.isDate, predicates_1.isRegExp];
	    if (predicates.map(hof_1.any).reduce(function (b, fn) { return b || !!fn(tup); }, false))
	        return false;
	    var key, keys = {};
	    for (key in o1) {
	        if (!_equals(o1[key], o2[key]))
	            return false;
	        keys[key] = true;
	    }
	    for (key in o2) {
	        if (!keys[key])
	            return false;
	    }
	    return true;
	}
	function _arraysEq(a1, a2) {
	    if (a1.length !== a2.length)
	        return false;
	    return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
	}
	/**
	 * Create a sort function
	 *
	 * Creates a sort function which sorts by a numeric property.
	 *
	 * The `propFn` should return the property as a number which can be sorted.
	 *
	 * #### Example:
	 * This example returns the `priority` prop.
	 * ```js
	 * var sortfn = sortBy(obj => obj.priority)
	 * // equivalent to:
	 * var longhandSortFn = (a, b) => a.priority - b.priority;
	 * ```
	 *
	 * #### Example:
	 * This example uses [[prop]]
	 * ```js
	 * var sortfn = sortBy(prop('priority'))
	 * ```
	 *
	 * The `checkFn` can be used to exclude objects from sorting.
	 *
	 * #### Example:
	 * This example only sorts objects with type === 'FOO'
	 * ```js
	 * var sortfn = sortBy(prop('priority'), propEq('type', 'FOO'))
	 * ```
	 *
	 * @param propFn a function that returns the property (as a number)
	 * @param checkFn a predicate
	 *
	 * @return a sort function like: `(a, b) => (checkFn(a) && checkFn(b)) ? propFn(a) - propFn(b) : 0`
	 */
	exports.sortBy = function (propFn, checkFn) {
	    if (checkFn === void 0) { checkFn = hof_1.val(true); }
	    return function (a, b) {
	        return (checkFn(a) && checkFn(b)) ? propFn(a) - propFn(b) : 0;
	    };
	};
	/**
	 * Composes a list of sort functions
	 *
	 * Creates a sort function composed of multiple sort functions.
	 * Each sort function is invoked in series.
	 * The first sort function to return non-zero "wins".
	 *
	 * @param sortFns list of sort functions
	 */
	exports.composeSort = function () {
	    var sortFns = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        sortFns[_i] = arguments[_i];
	    }
	    return function (a, b) {
	        return sortFns.reduce(function (prev, fn) { return prev || fn(a, b); }, 0);
	    };
	};
	// issue #2676
	exports.silenceUncaughtInPromise = function (promise) {
	    return promise.catch(function (e) { return 0; }) && promise;
	};
	exports.silentRejection = function (error) {
	    return exports.silenceUncaughtInPromise(coreservices_1.services.$q.reject(error));
	};
	//# sourceMappingURL=common.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** Predicates
	 *
	 * These predicates return true/false based on the input.
	 * Although these functions are exported, they are subject to change without notice.
	 *
	 * @module common_predicates
	 */ /** */
	var hof_1 = __webpack_require__(7);
	var toStr = Object.prototype.toString;
	var tis = function (t) { return function (x) { return typeof (x) === t; }; };
	exports.isUndefined = tis('undefined');
	exports.isDefined = hof_1.not(exports.isUndefined);
	exports.isNull = function (o) { return o === null; };
	exports.isNullOrUndefined = hof_1.or(exports.isNull, exports.isUndefined);
	exports.isFunction = tis('function');
	exports.isNumber = tis('number');
	exports.isString = tis('string');
	exports.isObject = function (x) { return x !== null && typeof x === 'object'; };
	exports.isArray = Array.isArray;
	exports.isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
	exports.isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
	/**
	 * Predicate which checks if a value is injectable
	 *
	 * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
	 * where all the elements in the array are Strings, except the last one, which is a Function
	 */
	function isInjectable(val) {
	    if (exports.isArray(val) && val.length) {
	        var head = val.slice(0, -1), tail = val.slice(-1);
	        return !(head.filter(hof_1.not(exports.isString)).length || tail.filter(hof_1.not(exports.isFunction)).length);
	    }
	    return exports.isFunction(val);
	}
	exports.isInjectable = isInjectable;
	/**
	 * Predicate which checks if a value looks like a Promise
	 *
	 * It is probably a Promise if it's an object, and it has a `then` property which is a Function
	 */
	exports.isPromise = hof_1.and(exports.isObject, hof_1.pipe(hof_1.prop('then'), exports.isFunction));
	//# sourceMappingURL=predicates.js.map

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Higher order functions
	 *
	 * These utility functions are exported, but are subject to change without notice.
	 *
	 * @module common_hof
	 */ /** */
	"use strict";
	/**
	 * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
	 *
	 * Given a function with N parameters, returns a new function that supports partial application.
	 * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
	 * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
	 * accept more parameters until all N parameters have been supplied.
	 *
	 *
	 * This contrived example uses a partially applied function as an predicate, which returns true
	 * if an object is found in both arrays.
	 * @example
	 * ```
	 * // returns true if an object is in both of the two arrays
	 * function inBoth(array1, array2, object) {
	 *   return array1.indexOf(object) !== -1 &&
	 *          array2.indexOf(object) !== 1;
	 * }
	 * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
	 * let foos = [obj1, obj3]
	 * let bars = [obj3, obj4, obj5]
	 *
	 * // A curried "copy" of inBoth
	 * let curriedInBoth = curry(inBoth);
	 * // Partially apply both the array1 and array2
	 * let inFoosAndBars = curriedInBoth(foos, bars);
	 *
	 * // Supply the final argument; since all arguments are
	 * // supplied, the original inBoth function is then called.
	 * let obj1InBoth = inFoosAndBars(obj1); // false
	 *
	 * // Use the inFoosAndBars as a predicate.
	 * // Filter, on each iteration, supplies the final argument
	 * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
	 * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
	 *
	 * ```
	 *
	 * Stolen from: http://stackoverflow.com/questions/4394747/javascript-curry-function
	 *
	 * @param fn
	 * @returns {*|function(): (*|any)}
	 */
	function curry(fn) {
	    var initial_args = [].slice.apply(arguments, [1]);
	    var func_args_length = fn.length;
	    function curried(args) {
	        if (args.length >= func_args_length)
	            return fn.apply(null, args);
	        return function () {
	            return curried(args.concat([].slice.apply(arguments)));
	        };
	    }
	    return curried(initial_args);
	}
	exports.curry = curry;
	/**
	 * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
	 * given: f(x), g(x), h(x)
	 * let composed = compose(f,g,h)
	 * then, composed is: f(g(h(x)))
	 */
	function compose() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	        var i = start, result = args[start].apply(this, arguments);
	        while (i--)
	            result = args[i].call(this, result);
	        return result;
	    };
	}
	exports.compose = compose;
	/**
	 * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
	 * given: f(x), g(x), h(x)
	 * let piped = pipe(f,g,h);
	 * then, piped is: h(g(f(x)))
	 */
	function pipe() {
	    var funcs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        funcs[_i] = arguments[_i];
	    }
	    return compose.apply(null, [].slice.call(arguments).reverse());
	}
	exports.pipe = pipe;
	/**
	 * Given a property name, returns a function that returns that property from an object
	 * let obj = { foo: 1, name: "blarg" };
	 * let getName = prop("name");
	 * getName(obj) === "blarg"
	 */
	exports.prop = function (name) {
	    return function (obj) { return obj && obj[name]; };
	};
	/**
	 * Given a property name and a value, returns a function that returns a boolean based on whether
	 * the passed object has a property that matches the value
	 * let obj = { foo: 1, name: "blarg" };
	 * let getName = propEq("name", "blarg");
	 * getName(obj) === true
	 */
	exports.propEq = curry(function (name, val, obj) { return obj && obj[name] === val; });
	/**
	 * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
	 * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
	 * let getName = prop("nestedObj.name");
	 * getName(obj) === "blarg"
	 * let propNotFound = prop("this.property.doesnt.exist");
	 * propNotFound(obj) === undefined
	 */
	exports.parse = function (name) {
	    return pipe.apply(null, name.split(".").map(exports.prop));
	};
	/**
	 * Given a function that returns a truthy or falsey value, returns a
	 * function that returns the opposite (falsey or truthy) value given the same inputs
	 */
	exports.not = function (fn) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return !fn.apply(null, args);
	    };
	};
	/**
	 * Given two functions that return truthy or falsey values, returns a function that returns truthy
	 * if both functions return truthy for the given arguments
	 */
	function and(fn1, fn2) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return fn1.apply(null, args) && fn2.apply(null, args);
	    };
	}
	exports.and = and;
	/**
	 * Given two functions that return truthy or falsey values, returns a function that returns truthy
	 * if at least one of the functions returns truthy for the given arguments
	 */
	function or(fn1, fn2) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        return fn1.apply(null, args) || fn2.apply(null, args);
	    };
	}
	exports.or = or;
	/**
	 * Check if all the elements of an array match a predicate function
	 *
	 * @param fn1 a predicate function `fn1`
	 * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
	 */
	exports.all = function (fn1) {
	    return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); };
	};
	exports.any = function (fn1) {
	    return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); };
	};
	/** Given a class, returns a Predicate function that returns true if the object is of that class */
	exports.is = function (ctor) {
	    return function (obj) {
	        return (obj != null && obj.constructor === ctor || obj instanceof ctor);
	    };
	};
	/** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
	exports.eq = function (val) { return function (other) {
	    return val === other;
	}; };
	/** Given a value, returns a function which returns the value */
	exports.val = function (v) { return function () { return v; }; };
	function invoke(fnName, args) {
	    return function (obj) {
	        return obj[fnName].apply(obj, args);
	    };
	}
	exports.invoke = invoke;
	/**
	 * Sorta like Pattern Matching (a functional programming conditional construct)
	 *
	 * See http://c2.com/cgi/wiki?PatternMatching
	 *
	 * This is a conditional construct which allows a series of predicates and output functions
	 * to be checked and then applied.  Each predicate receives the input.  If the predicate
	 * returns truthy, then its matching output function (mapping function) is provided with
	 * the input and, then the result is returned.
	 *
	 * Each combination (2-tuple) of predicate + output function should be placed in an array
	 * of size 2: [ predicate, mapFn ]
	 *
	 * These 2-tuples should be put in an outer array.
	 *
	 * @example
	 * ```
	 *
	 * // Here's a 2-tuple where the first element is the isString predicate
	 * // and the second element is a function that returns a description of the input
	 * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
	 *
	 * // Second tuple: predicate "isNumber", mapfn returns a description
	 * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
	 *
	 * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
	 *
	 * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
	 *
	 * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
	 *
	 * console.log(descriptionOf(undefined)); // 'notdefined'
	 * console.log(descriptionOf(55)); // '(55) That's a number!'
	 * console.log(descriptionOf("foo")); // 'Here's your string foo'
	 * ```
	 *
	 * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
	 * with a Predicate and a mapping/output function
	 * @returns {function(any): *}
	 */
	function pattern(struct) {
	    return function (x) {
	        for (var i = 0; i < struct.length; i++) {
	            if (struct[i][0](x))
	                return struct[i][1](x);
	        }
	    };
	}
	exports.pattern = pattern;
	//# sourceMappingURL=hof.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	exports.notImplemented = function (fnname) { return function () {
	    throw new Error(fnname + "(): No coreservices implementation for UI-Router is loaded.");
	}; };
	var services = {
	    $q: undefined,
	    $injector: undefined,
	};
	exports.services = services;
	//# sourceMappingURL=coreservices.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @coreapi
	 * @module core
	 */
	/**
	 * Matches state names using glob-like pattern strings.
	 *
	 * Globs can be used in specific APIs including:
	 *
	 * - [[StateService.is]]
	 * - [[StateService.includes]]
	 * - The first argument to Hook Registration functions like [[TransitionService.onStart]]
	 *    - [[HookMatchCriteria]] and [[HookMatchCriterion]]
	 *
	 * A `Glob` string is a pattern which matches state names.
	 * Nested state names are split into segments (separated by a dot) when processing.
	 * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
	 *
	 * Globs work according to the following rules:
	 *
	 * ### Exact match:
	 *
	 * The glob `'A.B'` matches the state named exactly `'A.B'`.
	 *
	 * | Glob        |Matches states named|Does not match state named|
	 * |:------------|:--------------------|:---------------------|
	 * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
	 * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
	 * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
	 *
	 * ### Single star (`*`)
	 *
	 * A single star (`*`) is a wildcard that matches exactly one segment.
	 *
	 * | Glob        |Matches states named  |Does not match state named |
	 * |:------------|:---------------------|:--------------------------|
	 * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
	 * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
	 * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
	 *
	 * ### Double star (`**`)
	 *
	 * A double star (`'**'`) is a wildcard that matches *zero or more segments*
	 *
	 * | Glob        |Matches states named                           |Does not match state named         |
	 * |:------------|:----------------------------------------------|:----------------------------------|
	 * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
	 * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
	 * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
	 * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
	 *
	 */
	var Glob = (function () {
	    function Glob(text) {
	        this.text = text;
	        this.glob = text.split('.');
	        var regexpString = this.text.split('.')
	            .map(function (seg) {
	            if (seg === '**')
	                return '(?:|(?:\\.[^.]*)*)';
	            if (seg === '*')
	                return '\\.[^.]*';
	            return '\\.' + seg;
	        }).join('');
	        this.regexp = new RegExp("^" + regexpString + "$");
	    }
	    Glob.prototype.matches = function (name) {
	        return this.regexp.test('.' + name);
	    };
	    /** @deprecated whats the point? */
	    Glob.is = function (text) {
	        return text.indexOf('*') > -1;
	    };
	    /** @deprecated whats the point? */
	    Glob.fromString = function (text) {
	        if (!this.is(text))
	            return null;
	        return new Glob(text);
	    };
	    return Glob;
	}());
	exports.Glob = Glob;
	//# sourceMappingURL=glob.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * @module common
	 */ /** for typedoc */
	"use strict";
	var Queue = (function () {
	    function Queue(_items, _limit) {
	        if (_items === void 0) { _items = []; }
	        if (_limit === void 0) { _limit = null; }
	        this._items = _items;
	        this._limit = _limit;
	    }
	    Queue.prototype.enqueue = function (item) {
	        var items = this._items;
	        items.push(item);
	        if (this._limit && items.length > this._limit)
	            items.shift();
	        return item;
	    };
	    Queue.prototype.dequeue = function () {
	        if (this.size())
	            return this._items.splice(0, 1)[0];
	    };
	    Queue.prototype.clear = function () {
	        var current = this._items;
	        this._items = [];
	        return current;
	    };
	    Queue.prototype.size = function () {
	        return this._items.length;
	    };
	    Queue.prototype.remove = function (item) {
	        var idx = this._items.indexOf(item);
	        return idx > -1 && this._items.splice(idx, 1)[0];
	    };
	    Queue.prototype.peekTail = function () {
	        return this._items[this._items.length - 1];
	    };
	    Queue.prototype.peekHead = function () {
	        if (this.size())
	            return this._items[0];
	    };
	    return Queue;
	}());
	exports.Queue = Queue;
	//# sourceMappingURL=queue.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Functions that manipulate strings
	 *
	 * Although these functions are exported, they are subject to change without notice.
	 *
	 * @module common_strings
	 */ /** */
	"use strict";
	var predicates_1 = __webpack_require__(6);
	var rejectFactory_1 = __webpack_require__(12);
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var transition_1 = __webpack_require__(13);
	var resolvable_1 = __webpack_require__(24);
	/**
	 * Returns a string shortened to a maximum length
	 *
	 * If the string is already less than the `max` length, return the string.
	 * Else return the string, shortened to `max - 3` and append three dots ("...").
	 *
	 * @param max the maximum length of the string to return
	 * @param str the input string
	 */
	function maxLength(max, str) {
	    if (str.length <= max)
	        return str;
	    return str.substr(0, max - 3) + "...";
	}
	exports.maxLength = maxLength;
	/**
	 * Returns a string, with spaces added to the end, up to a desired str length
	 *
	 * If the string is already longer than the desired length, return the string.
	 * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
	 *
	 * @param length the desired length of the string to return
	 * @param str the input string
	 */
	function padString(length, str) {
	    while (str.length < length)
	        str += " ";
	    return str;
	}
	exports.padString = padString;
	function kebobString(camelCase) {
	    return camelCase
	        .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
	        .replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); }); // replace rest
	}
	exports.kebobString = kebobString;
	function _toJson(obj) {
	    return JSON.stringify(obj);
	}
	function _fromJson(json) {
	    return predicates_1.isString(json) ? JSON.parse(json) : json;
	}
	function promiseToString(p) {
	    return "Promise(" + JSON.stringify(p) + ")";
	}
	function functionToString(fn) {
	    var fnStr = fnToString(fn);
	    var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
	    var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
	    var fnName = fn['name'] || "";
	    if (fnName && toStr.match(/function \(/)) {
	        return 'function ' + fnName + toStr.substr(9);
	    }
	    return toStr;
	}
	exports.functionToString = functionToString;
	function fnToString(fn) {
	    var _fn = predicates_1.isArray(fn) ? fn.slice(-1)[0] : fn;
	    return _fn && _fn.toString() || "undefined";
	}
	exports.fnToString = fnToString;
	var stringifyPatternFn = null;
	var stringifyPattern = function (value) {
	    var isTransitionRejectionPromise = rejectFactory_1.Rejection.isTransitionRejectionPromise;
	    stringifyPatternFn = stringifyPatternFn || hof_1.pattern([
	        [hof_1.not(predicates_1.isDefined), hof_1.val("undefined")],
	        [predicates_1.isNull, hof_1.val("null")],
	        [predicates_1.isPromise, hof_1.val("[Promise]")],
	        [isTransitionRejectionPromise, function (x) { return x._transitionRejection.toString(); }],
	        [hof_1.is(rejectFactory_1.Rejection), hof_1.invoke("toString")],
	        [hof_1.is(transition_1.Transition), hof_1.invoke("toString")],
	        [hof_1.is(resolvable_1.Resolvable), hof_1.invoke("toString")],
	        [predicates_1.isInjectable, functionToString],
	        [hof_1.val(true), common_1.identity]
	    ]);
	    return stringifyPatternFn(value);
	};
	function stringify(o) {
	    var seen = [];
	    function format(val) {
	        if (predicates_1.isObject(val)) {
	            if (seen.indexOf(val) !== -1)
	                return '[circular ref]';
	            seen.push(val);
	        }
	        return stringifyPattern(val);
	    }
	    return JSON.stringify(o, function (key, val) { return format(val); }).replace(/\\"/g, '"');
	}
	exports.stringify = stringify;
	/** Returns a function that splits a string on a character or substring */
	exports.beforeAfterSubstr = function (char) { return function (str) {
	    if (!str)
	        return ["", ""];
	    var idx = str.indexOf(char);
	    if (idx === -1)
	        return [str, ""];
	    return [str.substr(0, idx), str.substr(idx + 1)];
	}; };
	/**
	 * Splits on a delimiter, but returns the delimiters in the array
	 *
	 * #### Example:
	 * ```js
	 * var splitOnSlashes = splitOnDelim('/');
	 * splitOnSlashes("/foo"); // ["/", "foo"]
	 * splitOnSlashes("/foo/"); // ["/", "foo", "/"]
	 * ```
	 */
	function splitOnDelim(delim) {
	    var re = new RegExp("(" + delim + ")", "g");
	    return function (str) {
	        return str.split(re).filter(common_1.identity);
	    };
	}
	exports.splitOnDelim = splitOnDelim;
	;
	/**
	 * Reduce fn that joins neighboring strings
	 *
	 * Given an array of strings, returns a new array
	 * where all neighboring strings have been joined.
	 *
	 * #### Example:
	 * ```js
	 * let arr = ["foo", "bar", 1, "baz", "", "qux" ];
	 * arr.reduce(joinNeighborsR, []) // ["foobar", 1, "bazqux" ]
	 * ```
	 */
	function joinNeighborsR(acc, x) {
	    if (predicates_1.isString(common_1.tail(acc)) && predicates_1.isString(x))
	        return acc.slice(0, -1).concat(common_1.tail(acc) + x);
	    return common_1.pushR(acc, x);
	}
	exports.joinNeighborsR = joinNeighborsR;
	;
	//# sourceMappingURL=strings.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @coreapi
	 * @module transition
	 */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(5);
	var strings_1 = __webpack_require__(11);
	var RejectType;
	(function (RejectType) {
	    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
	    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
	    RejectType[RejectType["INVALID"] = 4] = "INVALID";
	    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
	    RejectType[RejectType["ERROR"] = 6] = "ERROR";
	})(RejectType = exports.RejectType || (exports.RejectType = {}));
	var Rejection = (function () {
	    function Rejection(type, message, detail) {
	        this.type = type;
	        this.message = message;
	        this.detail = detail;
	    }
	    Rejection.prototype.toString = function () {
	        var detailString = function (d) {
	            return d && d.toString !== Object.prototype.toString ? d.toString() : strings_1.stringify(d);
	        };
	        var type = this.type, message = this.message, detail = detailString(this.detail);
	        return "TransitionRejection(type: " + type + ", message: " + message + ", detail: " + detail + ")";
	    };
	    Rejection.prototype.toPromise = function () {
	        return common_1.extend(common_1.silentRejection(this), { _transitionRejection: this });
	    };
	    /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
	    Rejection.isTransitionRejectionPromise = function (obj) {
	        return obj && (typeof obj.then === 'function') && obj._transitionRejection instanceof Rejection;
	    };
	    /** Returns a TransitionRejection due to transition superseded */
	    Rejection.superseded = function (detail, options) {
	        var message = "The transition has been superseded by a different transition";
	        var rejection = new Rejection(RejectType.SUPERSEDED, message, detail);
	        if (options && options.redirected) {
	            rejection.redirected = true;
	        }
	        return rejection;
	    };
	    /** Returns a TransitionRejection due to redirected transition */
	    Rejection.redirected = function (detail) {
	        return Rejection.superseded(detail, { redirected: true });
	    };
	    /** Returns a TransitionRejection due to invalid transition */
	    Rejection.invalid = function (detail) {
	        var message = "This transition is invalid";
	        return new Rejection(RejectType.INVALID, message, detail);
	    };
	    /** Returns a TransitionRejection due to ignored transition */
	    Rejection.ignored = function (detail) {
	        var message = "The transition was ignored";
	        return new Rejection(RejectType.IGNORED, message, detail);
	    };
	    /** Returns a TransitionRejection due to aborted transition */
	    Rejection.aborted = function (detail) {
	        // TODO think about how to encapsulate an Error() object
	        var message = "The transition has been aborted";
	        return new Rejection(RejectType.ABORTED, message, detail);
	    };
	    /** Returns a TransitionRejection due to aborted transition */
	    Rejection.errored = function (detail) {
	        // TODO think about how to encapsulate an Error() object
	        var message = "The transition errored";
	        return new Rejection(RejectType.ERROR, message, detail);
	    };
	    return Rejection;
	}());
	exports.Rejection = Rejection;
	//# sourceMappingURL=rejectFactory.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var trace_1 = __webpack_require__(14);
	var coreservices_1 = __webpack_require__(8);
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var hof_1 = __webpack_require__(7);
	var interface_1 = __webpack_require__(15);
	var transitionHook_1 = __webpack_require__(16);
	var hookRegistry_1 = __webpack_require__(18);
	var hookBuilder_1 = __webpack_require__(19);
	var node_1 = __webpack_require__(20);
	var pathFactory_1 = __webpack_require__(23);
	var targetState_1 = __webpack_require__(17);
	var param_1 = __webpack_require__(21);
	var resolvable_1 = __webpack_require__(24);
	var rejectFactory_1 = __webpack_require__(12);
	var resolveContext_1 = __webpack_require__(25);
	var router_1 = __webpack_require__(27);
	/** @hidden */
	var stateSelf = hof_1.prop("self");
	/**
	 * Represents a transition between two states.
	 *
	 * When navigating to a state, we are transitioning **from** the current state **to** the new state.
	 *
	 * This object contains all contextual information about the to/from states, parameters, resolves.
	 * It has information about all states being entered and exited as a result of the transition.
	 */
	var Transition = (function () {
	    /**
	     * Creates a new Transition object.
	     *
	     * If the target state is not valid, an error is thrown.
	     *
	     * @internalapi
	     *
	     * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
	     *        encapsulates the "from state".
	     * @param targetState The target state and parameters being transitioned to (also, the transition options)
	     * @param router The [[UIRouter]] instance
	     */
	    function Transition(fromPath, targetState, router) {
	        var _this = this;
	        /** @hidden */
	        this._deferred = coreservices_1.services.$q.defer();
	        /**
	         * This promise is resolved or rejected based on the outcome of the Transition.
	         *
	         * When the transition is successful, the promise is resolved
	         * When the transition is unsuccessful, the promise is rejected with the [[Rejection]] or javascript error
	         */
	        this.promise = this._deferred.promise;
	        /** @hidden Holds the hook registration functions such as those passed to Transition.onStart() */
	        this._registeredHooks = {};
	        /**
	         * Checks if this transition is currently active/running.
	         */
	        this.isActive = function () { return _this === _this._options.current(); };
	        this.router = router;
	        this._targetState = targetState;
	        if (!targetState.valid()) {
	            throw new Error(targetState.error());
	        }
	        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
	        this._options = common_1.extend({ current: hof_1.val(this) }, targetState.options());
	        this.$id = router.transitionService._transitionCount++;
	        var toPath = pathFactory_1.PathFactory.buildToPath(fromPath, targetState);
	        this._treeChanges = pathFactory_1.PathFactory.treeChanges(fromPath, toPath, this._options.reloadState);
	        this.createTransitionHookRegFns();
	        var onCreateHooks = this.hookBuilder().buildHooksForPhase(interface_1.TransitionHookPhase.CREATE);
	        transitionHook_1.TransitionHook.runAllHooks(onCreateHooks);
	        this.applyViewConfigs(router);
	        this.applyRootResolvables(router);
	    }
	    /** @hidden */
	    Transition.prototype.onBefore = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    Transition.prototype.onStart = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    Transition.prototype.onExit = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    Transition.prototype.onRetain = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    Transition.prototype.onEnter = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    Transition.prototype.onFinish = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    Transition.prototype.onSuccess = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    Transition.prototype.onError = function (criteria, callback, options) { return; };
	    /** @hidden
	     * Creates the transition-level hook registration functions
	     * (which can then be used to register hooks)
	     */
	    Transition.prototype.createTransitionHookRegFns = function () {
	        var _this = this;
	        this.router.transitionService._pluginapi._getEvents()
	            .filter(function (type) { return type.hookPhase !== interface_1.TransitionHookPhase.CREATE; })
	            .forEach(function (type) { return hookRegistry_1.makeEvent(_this, _this.router.transitionService, type); });
	    };
	    /** @internalapi */
	    Transition.prototype.getHooks = function (hookName) {
	        return this._registeredHooks[hookName];
	    };
	    Transition.prototype.applyViewConfigs = function (router) {
	        var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
	        pathFactory_1.PathFactory.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
	    };
	    Transition.prototype.applyRootResolvables = function (router) {
	        var _this = this;
	        var rootResolvables = [
	            new resolvable_1.Resolvable(router_1.UIRouter, function () { return router; }, [], undefined, router),
	            new resolvable_1.Resolvable(Transition, function () { return _this; }, [], undefined, this),
	            new resolvable_1.Resolvable('$transition$', function () { return _this; }, [], undefined, this),
	            new resolvable_1.Resolvable('$stateParams', function () { return _this.params(); }, [], undefined, this.params())
	        ];
	        var rootNode = this._treeChanges.to[0];
	        var context = new resolveContext_1.ResolveContext(this._treeChanges.to);
	        context.addResolvables(rootResolvables, rootNode.state);
	    };
	    /**
	     * @internalapi
	     *
	     * @returns the internal from [State] object
	     */
	    Transition.prototype.$from = function () {
	        return common_1.tail(this._treeChanges.from).state;
	    };
	    /**
	     * @internalapi
	     *
	     * @returns the internal to [State] object
	     */
	    Transition.prototype.$to = function () {
	        return common_1.tail(this._treeChanges.to).state;
	    };
	    /**
	     * Returns the "from state"
	     *
	     * Returns the state that the transition is coming *from*.
	     *
	     * @returns The state declaration object for the Transition's ("from state").
	     */
	    Transition.prototype.from = function () {
	        return this.$from().self;
	    };
	    /**
	     * Returns the "to state"
	     *
	     * Returns the state that the transition is going *to*.
	     *
	     * @returns The state declaration object for the Transition's target state ("to state").
	     */
	    Transition.prototype.to = function () {
	        return this.$to().self;
	    };
	    /**
	     * Gets the Target State
	     *
	     * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]] as a single object.
	     *
	     * @returns the [[TargetState]] of this Transition
	     */
	    Transition.prototype.targetState = function () {
	        return this._targetState;
	    };
	    /**
	     * Determines whether two transitions are equivalent.
	     */
	    Transition.prototype.is = function (compare) {
	        if (compare instanceof Transition) {
	            // TODO: Also compare parameters
	            return this.is({ to: compare.$to().name, from: compare.$from().name });
	        }
	        return !((compare.to && !hookRegistry_1.matchState(this.$to(), compare.to)) ||
	            (compare.from && !hookRegistry_1.matchState(this.$from(), compare.from)));
	    };
	    Transition.prototype.params = function (pathname) {
	        if (pathname === void 0) { pathname = "to"; }
	        return Object.freeze(this._treeChanges[pathname].map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {}));
	    };
	    /**
	     * Creates a [[UIInjector]] Dependency Injector
	     *
	     * Returns a Dependency Injector for the Transition's target state (to state).
	     * The injector provides resolve values which the target state has access to.
	     *
	     * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
	     *
	     * #### Example:
	     * ```js
	     * .onEnter({ entering: 'myState' }, trans => {
	     *   var myResolveValue = trans.injector().get('myResolve');
	     *   // Inject a global service from the global/native injector (if it exists)
	     *   var MyService = trans.injector().get('MyService');
	     * })
	     * ```
	     *
	     * In some cases (such as `onBefore`), you may need access to some resolve data but it has not yet been fetched.
	     * You can use [[UIInjector.getAsync]] to get a promise for the data.
	     * #### Example:
	     * ```js
	     * .onBefore({}, trans => {
	     *   return trans.injector().getAsync('myResolve').then(myResolveValue =>
	     *     return myResolveValue !== 'ABORT';
	     *   });
	     * });
	     * ```
	     *
	     * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
	     * This can be useful if both a parent state `foo` and a child state `foo.bar` have both defined a resolve such as `data`.
	     * #### Example:
	     * ```js
	     * .onEnter({ to: 'foo.bar' }, trans => {
	     *   // returns result of `foo` state's `data` resolve
	     *   // even though `foo.bar` also has a `data` resolve
	     *   var fooData = trans.injector('foo').get('data');
	     * });
	     * ```
	     *
	     * If you need resolve data from the exiting states, pass `'from'` as `pathName`.
	     * The resolve data from the `from` path will be returned.
	     * #### Example:
	     * ```js
	     * .onExit({ exiting: 'foo.bar' }, trans => {
	     *   // Gets the resolve value of `data` from the exiting state.
	     *   var fooData = trans.injector(null, 'foo.bar').get('data');
	     * });
	     * ```
	     *
	     *
	     * @param state Limits the resolves provided to only the resolves the provided state has access to.
	     * @param pathName Default: `'to'`: Chooses the path for which to create the injector. Use this to access resolves for `exiting` states.
	     *
	     * @returns a [[UIInjector]]
	     */
	    Transition.prototype.injector = function (state, pathName) {
	        if (pathName === void 0) { pathName = "to"; }
	        var path = this._treeChanges[pathName];
	        if (state)
	            path = pathFactory_1.PathFactory.subPath(path, function (node) { return node.state === state || node.state.name === state; });
	        return new resolveContext_1.ResolveContext(path).injector();
	    };
	    /**
	     * Gets all available resolve tokens (keys)
	     *
	     * This method can be used in conjunction with [[injector]] to inspect the resolve values
	     * available to the Transition.
	     *
	     * This returns all the tokens defined on [[StateDeclaration.resolve]] blocks, for the states
	     * in the Transition's [[TreeChanges.to]] path.
	     *
	     * #### Example:
	     * This example logs all resolve values
	     * ```js
	     * let tokens = trans.getResolveTokens();
	     * tokens.forEach(token => console.log(token + " = " + trans.injector().get(token)));
	     * ```
	     *
	     * #### Example:
	     * This example creates promises for each resolve value.
	     * This triggers fetches of resolves (if any have not yet been fetched).
	     * When all promises have all settled, it logs the resolve values.
	     * ```js
	     * let tokens = trans.getResolveTokens();
	     * let promise = tokens.map(token => trans.injector().getAsync(token));
	     * Promise.all(promises).then(values => console.log("Resolved values: " + values));
	     * ```
	     *
	     * Note: Angular 1 users whould use `$q.all()`
	     *
	     * @param pathname resolve context's path name (e.g., `to` or `from`)
	     *
	     * @returns an array of resolve tokens (keys)
	     */
	    Transition.prototype.getResolveTokens = function (pathname) {
	        if (pathname === void 0) { pathname = "to"; }
	        return new resolveContext_1.ResolveContext(this._treeChanges[pathname]).getTokens();
	    };
	    /**
	     * Dynamically adds a new [[Resolvable]] (i.e., [[StateDeclaration.resolve]]) to this transition.
	     *
	     * #### Example:
	     * ```js
	     * transitionService.onBefore({}, transition => {
	     *   transition.addResolvable({
	     *     token: 'myResolve',
	     *     deps: ['MyService'],
	     *     resolveFn: myService => myService.getData()
	     *   });
	     * });
	     * ```
	     *
	     * @param resolvable a [[ResolvableLiteral]] object (or a [[Resolvable]])
	     * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
	     */
	    Transition.prototype.addResolvable = function (resolvable, state) {
	        if (state === void 0) { state = ""; }
	        resolvable = hof_1.is(resolvable_1.Resolvable)(resolvable) ? resolvable : new resolvable_1.Resolvable(resolvable);
	        var stateName = (typeof state === "string") ? state : state.name;
	        var topath = this._treeChanges.to;
	        var targetNode = common_1.find(topath, function (node) { return node.state.name === stateName; });
	        var resolveContext = new resolveContext_1.ResolveContext(topath);
	        resolveContext.addResolvables([resolvable], targetNode.state);
	    };
	    /**
	     * Gets the transition from which this transition was redirected.
	     *
	     * If the current transition is a redirect, this method returns the transition that was redirected.
	     *
	     * #### Example:
	     * ```js
	     * let transitionA = $state.go('A').transition
	     * transitionA.onStart({}, () => $state.target('B'));
	     * $transitions.onSuccess({ to: 'B' }, (trans) => {
	     *   trans.to().name === 'B'; // true
	     *   trans.redirectedFrom() === transitionA; // true
	     * });
	     * ```
	     *
	     * @returns The previous Transition, or null if this Transition is not the result of a redirection
	     */
	    Transition.prototype.redirectedFrom = function () {
	        return this._options.redirectedFrom || null;
	    };
	    /**
	     * Gets the original transition in a redirect chain
	     *
	     * A transition might belong to a long chain of multiple redirects.
	     * This method walks the [[redirectedFrom]] chain back to the original (first) transition in the chain.
	     *
	     * #### Example:
	     * ```js
	     * // states
	     * registry.register({ name: 'A', redirectTo: 'B' });
	     * registry.register({ name: 'B', redirectTo: 'C' });
	     * registry.register({ name: 'C', redirectTo: 'D' });
	     * registry.register({ name: 'D' });
	     *
	     * let transitionA = $state.go('A').transition
	     *
	     * $transitions.onSuccess({ to: 'D' }, (trans) => {
	     *   trans.to().name === 'D'; // true
	     *   trans.redirectedFrom().to().name === 'C'; // true
	     *   trans.originalTransition() === transitionA; // true
	     *   trans.originalTransition().to().name === 'A'; // true
	     * });
	     * ```
	     *
	     * @returns The original Transition that started a redirect chain
	     */
	    Transition.prototype.originalTransition = function () {
	        var rf = this.redirectedFrom();
	        return (rf && rf.originalTransition()) || this;
	    };
	    /**
	     * Get the transition options
	     *
	     * @returns the options for this Transition.
	     */
	    Transition.prototype.options = function () {
	        return this._options;
	    };
	    /**
	     * Gets the states being entered.
	     *
	     * @returns an array of states that will be entered during this transition.
	     */
	    Transition.prototype.entering = function () {
	        return common_1.map(this._treeChanges.entering, hof_1.prop('state')).map(stateSelf);
	    };
	    /**
	     * Gets the states being exited.
	     *
	     * @returns an array of states that will be exited during this transition.
	     */
	    Transition.prototype.exiting = function () {
	        return common_1.map(this._treeChanges.exiting, hof_1.prop('state')).map(stateSelf).reverse();
	    };
	    /**
	     * Gets the states being retained.
	     *
	     * @returns an array of states that are already entered from a previous Transition, that will not be
	     *    exited during this Transition
	     */
	    Transition.prototype.retained = function () {
	        return common_1.map(this._treeChanges.retained, hof_1.prop('state')).map(stateSelf);
	    };
	    /**
	     * Get the [[ViewConfig]]s associated with this Transition
	     *
	     * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
	     * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
	     *
	     * @param pathname the name of the path to fetch views for:
	     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
	     * @param state If provided, only returns the `ViewConfig`s for a single state in the path
	     *
	     * @returns a list of ViewConfig objects for the given path.
	     */
	    Transition.prototype.views = function (pathname, state) {
	        if (pathname === void 0) { pathname = "entering"; }
	        var path = this._treeChanges[pathname];
	        path = !state ? path : path.filter(hof_1.propEq('state', state));
	        return path.map(hof_1.prop("views")).filter(common_1.identity).reduce(common_1.unnestR, []);
	    };
	    Transition.prototype.treeChanges = function (pathname) {
	        return pathname ? this._treeChanges[pathname] : this._treeChanges;
	    };
	    /**
	     * Creates a new transition that is a redirection of the current one.
	     *
	     * This transition can be returned from a [[TransitionService]] hook to
	     * redirect a transition to a new state and/or set of parameters.
	     *
	     * @internalapi
	     *
	     * @returns Returns a new [[Transition]] instance.
	     */
	    Transition.prototype.redirect = function (targetState) {
	        var redirects = 1, trans = this;
	        while ((trans = trans.redirectedFrom()) != null) {
	            if (++redirects > 20)
	                throw new Error("Too many consecutive Transition redirects (20+)");
	        }
	        var redirectOpts = { redirectedFrom: this, source: "redirect" };
	        // If the original transition was caused by URL sync, then use { location: 'replace' }
	        // on the new transition (unless  the target state explicitly specifies location)
	        if (this.options().source === 'url') {
	            redirectOpts.location = 'replace';
	        }
	        var newOptions = common_1.extend({}, this.options(), targetState.options(), redirectOpts);
	        targetState = new targetState_1.TargetState(targetState.identifier(), targetState.$state(), targetState.params(), newOptions);
	        var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
	        var originalEnteringNodes = this._treeChanges.entering;
	        var redirectEnteringNodes = newTransition._treeChanges.entering;
	        // --- Re-use resolve data from original transition ---
	        // When redirecting from a parent state to a child state where the parent parameter values haven't changed
	        // (because of the redirect), the resolves fetched by the original transition are still valid in the
	        // redirected transition.
	        //
	        // This allows you to define a redirect on a parent state which depends on an async resolve value.
	        // You can wait for the resolve, then redirect to a child state based on the result.
	        // The redirected transition does not have to re-fetch the resolve.
	        // ---------------------------------------------------------
	        var nodeIsReloading = function (reloadState) { return function (node) {
	            return reloadState && node.state.includes[reloadState.name];
	        }; };
	        // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
	        var matchingEnteringNodes = node_1.PathNode.matching(redirectEnteringNodes, originalEnteringNodes)
	            .filter(hof_1.not(nodeIsReloading(targetState.options().reloadState)));
	        // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
	        matchingEnteringNodes.forEach(function (node, idx) {
	            node.resolvables = originalEnteringNodes[idx].resolvables;
	        });
	        return newTransition;
	    };
	    /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
	    Transition.prototype._changedParams = function () {
	        var tc = this._treeChanges;
	        /** Return undefined if it's not a "dynamic" transition, for the following reasons */
	        // If user explicitly wants a reload
	        if (this._options.reload)
	            return undefined;
	        // If any states are exiting or entering
	        if (tc.exiting.length || tc.entering.length)
	            return undefined;
	        // If to/from path lengths differ
	        if (tc.to.length !== tc.from.length)
	            return undefined;
	        // If the to/from paths are different
	        var pathsDiffer = common_1.arrayTuples(tc.to, tc.from)
	            .map(function (tuple) { return tuple[0].state !== tuple[1].state; })
	            .reduce(common_1.anyTrueR, false);
	        if (pathsDiffer)
	            return undefined;
	        // Find any parameter values that differ
	        var nodeSchemas = tc.to.map(function (node) { return node.paramSchema; });
	        var _a = [tc.to, tc.from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _a[0], fromValues = _a[1];
	        var tuples = common_1.arrayTuples(nodeSchemas, toValues, fromValues);
	        return tuples.map(function (_a) {
	            var schema = _a[0], toVals = _a[1], fromVals = _a[2];
	            return param_1.Param.changed(schema, toVals, fromVals);
	        }).reduce(common_1.unnestR, []);
	    };
	    /**
	     * Returns true if the transition is dynamic.
	     *
	     * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
	     *
	     * @returns true if the Transition is dynamic
	     */
	    Transition.prototype.dynamic = function () {
	        var changes = this._changedParams();
	        return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(common_1.anyTrueR, false);
	    };
	    /**
	     * Returns true if the transition is ignored.
	     *
	     * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
	     *
	     * @returns true if the Transition is ignored.
	     */
	    Transition.prototype.ignored = function () {
	        var changes = this._changedParams();
	        return !changes ? false : changes.length === 0;
	    };
	    /**
	     * @hidden
	     */
	    Transition.prototype.hookBuilder = function () {
	        return new hookBuilder_1.HookBuilder(this);
	    };
	    /**
	     * Runs the transition
	     *
	     * This method is generally called from the [[StateService.transitionTo]]
	     *
	     * @internalapi
	     *
	     * @returns a promise for a successful transition.
	     */
	    Transition.prototype.run = function () {
	        var _this = this;
	        var runAllHooks = transitionHook_1.TransitionHook.runAllHooks;
	        var hookBuilder = this.hookBuilder();
	        var globals = this.router.globals;
	        globals.transitionHistory.enqueue(this);
	        var onBeforeHooks = hookBuilder.buildHooksForPhase(interface_1.TransitionHookPhase.BEFORE);
	        var syncResult = transitionHook_1.TransitionHook.runOnBeforeHooks(onBeforeHooks);
	        if (rejectFactory_1.Rejection.isTransitionRejectionPromise(syncResult)) {
	            syncResult.catch(function () { return 0; }); // issue #2676
	            var rejectReason = syncResult._transitionRejection;
	            this._deferred.reject(rejectReason);
	            return this.promise;
	        }
	        if (!this.valid()) {
	            var error = new Error(this.error());
	            this._deferred.reject(error);
	            return this.promise;
	        }
	        if (this.ignored()) {
	            trace_1.trace.traceTransitionIgnored(this);
	            this._deferred.reject(rejectFactory_1.Rejection.ignored());
	            return this.promise;
	        }
	        // When the chain is complete, then resolve or reject the deferred
	        var transitionSuccess = function () {
	            trace_1.trace.traceSuccess(_this.$to(), _this);
	            _this.success = true;
	            _this._deferred.resolve(_this.to());
	            var onSuccessHooks = hookBuilder.buildHooksForPhase(interface_1.TransitionHookPhase.SUCCESS);
	            runAllHooks(onSuccessHooks);
	        };
	        var transitionError = function (reason) {
	            trace_1.trace.traceError(reason, _this);
	            _this.success = false;
	            _this._deferred.reject(reason);
	            _this._error = reason;
	            var onErrorHooks = hookBuilder.buildHooksForPhase(interface_1.TransitionHookPhase.ERROR);
	            runAllHooks(onErrorHooks);
	        };
	        trace_1.trace.traceTransitionStart(this);
	        // Chain the next hook off the previous
	        var appendHookToChain = function (prev, nextHook) {
	            return prev.then(function () { return nextHook.invokeHook(); });
	        };
	        // Run the hooks, then resolve or reject the overall deferred in the .then() handler
	        var asyncHooks = hookBuilder.buildHooksForPhase(interface_1.TransitionHookPhase.ASYNC);
	        asyncHooks.reduce(appendHookToChain, syncResult)
	            .then(transitionSuccess, transitionError);
	        return this.promise;
	    };
	    /**
	     * Checks if the Transition is valid
	     *
	     * @returns true if the Transition is valid
	     */
	    Transition.prototype.valid = function () {
	        return !this.error() || this.success !== undefined;
	    };
	    /**
	     * The Transition error reason.
	     *
	     * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
	     * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
	     *
	     * @returns an error message explaining why the transition is invalid, or the reason the transition failed.
	     */
	    Transition.prototype.error = function () {
	        var state = this.$to();
	        if (state.self.abstract)
	            return "Cannot transition to abstract state '" + state.name + "'";
	        if (!param_1.Param.validates(state.parameters(), this.params()))
	            return "Param values not valid for state '" + state.name + "'";
	        if (this.success === false)
	            return this._error;
	    };
	    /**
	     * A string representation of the Transition
	     *
	     * @returns A string representation of the Transition
	     */
	    Transition.prototype.toString = function () {
	        var fromStateOrName = this.from();
	        var toStateOrName = this.to();
	        var avoidEmptyHash = function (params) {
	            return (params["#"] !== null && params["#"] !== undefined) ? params : common_1.omit(params, "#");
	        };
	        // (X) means the to state is invalid.
	        var id = this.$id, from = predicates_1.isObject(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = common_1.toJson(avoidEmptyHash(this._treeChanges.from.map(hof_1.prop('paramValues')).reduce(common_1.mergeR, {}))), toValid = this.valid() ? "" : "(X) ", to = predicates_1.isObject(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = common_1.toJson(avoidEmptyHash(this.params()));
	        return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
	    };
	    return Transition;
	}());
	/** @hidden */
	Transition.diToken = Transition;
	exports.Transition = Transition;
	//# sourceMappingURL=transition.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * # Transition tracing (debug)
	 *
	 * Enable transition tracing to print transition information to the console,
	 * in order to help debug your application.
	 * Tracing logs detailed information about each Transition to your console.
	 *
	 * To enable tracing, import the [[Trace]] singleton and enable one or more categories.
	 *
	 * ### ES6
	 * ```js
	 * import {trace} from "ui-router-ng2"; // or "angular-ui-router"
	 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
	 * ```
	 *
	 * ### CJS
	 * ```js
	 * let trace = require("angular-ui-router").trace; // or "ui-router-ng2"
	 * trace.enable("TRANSITION", "VIEWCONFIG");
	 * ```
	 *
	 * ### Globals
	 * ```js
	 * let trace = window["angular-ui-router"].trace; // or "ui-router-ng2"
	 * trace.enable(); // Trace everything (very verbose)
	 * ```
	 *
	 * ### Angular 1:
	 * ```js
	 * app.run($trace => $trace.enable());
	 * ```
	 *
	 * @coreapi
	 * @module trace
	 */ /** for typedoc */
	var hof_1 = __webpack_require__(7);
	var predicates_1 = __webpack_require__(6);
	var strings_1 = __webpack_require__(11);
	/** @hidden */
	function uiViewString(viewData) {
	    if (!viewData)
	        return 'ui-view (defunct)';
	    return "[ui-view#" + viewData.id + " tag " +
	        ("in template from '" + (viewData.creationContext && viewData.creationContext.name || '(root)') + "' state]: ") +
	        ("fqn: '" + viewData.fqn + "', ") +
	        ("name: '" + viewData.name + "@" + viewData.creationContext + "')");
	}
	/** @hidden */
	var viewConfigString = function (viewConfig) {
	    return "[ViewConfig#" + viewConfig.$id + " from '" + (viewConfig.viewDecl.$context.name || '(root)') + "' state]: target ui-view: '" + viewConfig.viewDecl.$uiViewName + "@" + viewConfig.viewDecl.$uiViewContextAnchor + "'";
	};
	/** @hidden */
	function normalizedCat(input) {
	    return predicates_1.isNumber(input) ? Category[input] : Category[Category[input]];
	}
	/**
	 * Trace categories Enum
	 *
	 * Enable or disable a category using [[Trace.enable]] or [[Trace.disable]]
	 *
	 * `trace.enable(Category.TRANSITION)`
	 *
	 * These can also be provided using a matching string, or position ordinal
	 *
	 * `trace.enable("TRANSITION")`
	 *
	 * `trace.enable(1)`
	 */
	var Category;
	(function (Category) {
	    Category[Category["RESOLVE"] = 0] = "RESOLVE";
	    Category[Category["TRANSITION"] = 1] = "TRANSITION";
	    Category[Category["HOOK"] = 2] = "HOOK";
	    Category[Category["UIVIEW"] = 3] = "UIVIEW";
	    Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
	})(Category = exports.Category || (exports.Category = {}));
	/**
	 * Prints UI-Router Transition trace information to the console.
	 */
	var Trace = (function () {
	    /** @hidden */
	    function Trace() {
	        /** @hidden */
	        this._enabled = {};
	        this.approximateDigests = 0;
	    }
	    /** @hidden */
	    Trace.prototype._set = function (enabled, categories) {
	        var _this = this;
	        if (!categories.length) {
	            categories = Object.keys(Category)
	                .map(function (k) { return parseInt(k, 10); })
	                .filter(function (k) { return !isNaN(k); })
	                .map(function (key) { return Category[key]; });
	        }
	        categories.map(normalizedCat).forEach(function (category) { return _this._enabled[category] = enabled; });
	    };
	    /**
	     * Enables a trace [[Category]]
	     *
	     * ```js
	     * trace.enable("TRANSITION");
	     * ```
	     *
	     * @param categories categories to enable. If `categories` is omitted, all categories are enabled.
	     *        Also takes strings (category name) or ordinal (category position)
	     */
	    Trace.prototype.enable = function () {
	        var categories = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            categories[_i] = arguments[_i];
	        }
	        this._set(true, categories);
	    };
	    /**
	     * Disables a trace [[Category]]
	     *
	     * ```js
	     * trace.disable("VIEWCONFIG");
	     * ```
	     *
	     * @param categories categories to disable. If `categories` is omitted, all categories are disabled.
	     *        Also takes strings (category name) or ordinal (category position)
	     */
	    Trace.prototype.disable = function () {
	        var categories = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            categories[_i] = arguments[_i];
	        }
	        this._set(false, categories);
	    };
	    /**
	     * Retrieves the enabled stateus of a [[Category]]
	     *
	     * ```js
	     * trace.enabled("VIEWCONFIG"); // true or false
	     * ```
	     *
	     * @returns boolean true if the category is enabled
	     */
	    Trace.prototype.enabled = function (category) {
	        return !!this._enabled[normalizedCat(category)];
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceTransitionStart = function (trans) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = trans.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(trans);
	        console.log("Transition #" + tid + " r" + trans.router.$id + ": Started  -> " + transitionStr);
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceTransitionIgnored = function (trans) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = trans && trans.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(trans);
	        console.log("Transition #" + tid + " r" + trans.router.$id + ": Ignored  <> " + transitionStr);
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceHookInvocation = function (step, trans, options) {
	        if (!this.enabled(Category.HOOK))
	            return;
	        var tid = hof_1.parse("transition.$id")(options), digest = this.approximateDigests, event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.functionToString(step.registeredHook.callback);
	        console.log("Transition #" + tid + " r" + trans.router.$id + ":   Hook -> " + event + " context: " + context + ", " + strings_1.maxLength(200, name));
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceHookResult = function (hookResult, trans, transitionOptions) {
	        if (!this.enabled(Category.HOOK))
	            return;
	        var tid = hof_1.parse("transition.$id")(transitionOptions), digest = this.approximateDigests, hookResultStr = strings_1.stringify(hookResult);
	        console.log("Transition #" + tid + " r" + trans.router.$id + ":   <- Hook returned: " + strings_1.maxLength(200, hookResultStr));
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceResolvePath = function (path, when, trans) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        var tid = trans && trans.$id, digest = this.approximateDigests, pathStr = path && path.toString();
	        console.log("Transition #" + tid + " r" + trans.router.$id + ":         Resolving " + pathStr + " (" + when + ")");
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
	        if (!this.enabled(Category.RESOLVE))
	            return;
	        var tid = trans && trans.$id, digest = this.approximateDigests, resolvableStr = resolvable && resolvable.toString(), result = strings_1.stringify(resolvable.data);
	        console.log("Transition #" + tid + " r" + trans.router.$id + ":               <- Resolved  " + resolvableStr + " to: " + strings_1.maxLength(200, result));
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceError = function (reason, trans) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = trans && trans.$id, digest = this.approximateDigests, transitionStr = strings_1.stringify(trans);
	        console.log("Transition #" + tid + " r" + trans.router.$id + ": <- Rejected " + transitionStr + ", reason: " + reason);
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceSuccess = function (finalState, trans) {
	        if (!this.enabled(Category.TRANSITION))
	            return;
	        var tid = trans && trans.$id, digest = this.approximateDigests, state = finalState.name, transitionStr = strings_1.stringify(trans);
	        console.log("Transition #" + tid + " r" + trans.router.$id + ": <- Success  " + transitionStr + ", final state: " + state);
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
	        if (extra === void 0) { extra = ""; }
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        console.log("ui-view: " + strings_1.padString(30, event) + " " + uiViewString(viewData) + extra);
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        this.traceUIViewEvent("Updating", viewData, " with ViewConfig from context='" + context + "'");
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceUIViewFill = function (viewData, html) {
	        if (!this.enabled(Category.UIVIEW))
	            return;
	        this.traceUIViewEvent("Fill", viewData, " with: " + strings_1.maxLength(200, html));
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
	        if (!this.enabled(Category.VIEWCONFIG))
	            return;
	        console.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
	    };
	    /** @internalapi called by ui-router code */
	    Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
	        if (!this.enabled(Category.VIEWCONFIG))
	            return;
	        console.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
	    };
	    return Trace;
	}());
	exports.Trace = Trace;
	/**
	 * The [[Trace]] singleton
	 *
	 * #### Example:
	 * ```js
	 * import {trace} from "angular-ui-router";
	 * trace.enable(1, 5);
	 * ```
	 */
	var trace = new Trace();
	exports.trace = trace;
	//# sourceMappingURL=trace.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var TransitionHookPhase;
	(function (TransitionHookPhase) {
	    TransitionHookPhase[TransitionHookPhase["CREATE"] = 0] = "CREATE";
	    TransitionHookPhase[TransitionHookPhase["BEFORE"] = 1] = "BEFORE";
	    TransitionHookPhase[TransitionHookPhase["ASYNC"] = 2] = "ASYNC";
	    TransitionHookPhase[TransitionHookPhase["SUCCESS"] = 3] = "SUCCESS";
	    TransitionHookPhase[TransitionHookPhase["ERROR"] = 4] = "ERROR";
	})(TransitionHookPhase = exports.TransitionHookPhase || (exports.TransitionHookPhase = {}));
	var TransitionHookScope;
	(function (TransitionHookScope) {
	    TransitionHookScope[TransitionHookScope["TRANSITION"] = 0] = "TRANSITION";
	    TransitionHookScope[TransitionHookScope["STATE"] = 1] = "STATE";
	})(TransitionHookScope = exports.TransitionHookScope || (exports.TransitionHookScope = {}));
	//# sourceMappingURL=interface.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(5);
	var strings_1 = __webpack_require__(11);
	var predicates_1 = __webpack_require__(6);
	var hof_1 = __webpack_require__(7);
	var trace_1 = __webpack_require__(14);
	var coreservices_1 = __webpack_require__(8);
	var rejectFactory_1 = __webpack_require__(12);
	var targetState_1 = __webpack_require__(17);
	var defaultOptions = {
	    current: common_1.noop,
	    transition: null,
	    traceData: {},
	    bind: null
	};
	/** @hidden */
	var TransitionHook = (function () {
	    function TransitionHook(transition, stateContext, registeredHook, options) {
	        var _this = this;
	        this.transition = transition;
	        this.stateContext = stateContext;
	        this.registeredHook = registeredHook;
	        this.options = options;
	        this.stateService = function () { return _this.transition.router.stateService; };
	        this.rejectIfSuperseded = function () {
	            return _this.registeredHook.eventType.rejectIfSuperseded && _this.options.current() !== _this.options.transition;
	        };
	        this.options = common_1.defaults(options, defaultOptions);
	    }
	    TransitionHook.prototype.invokeHook = function () {
	        var hook = this.registeredHook;
	        if (hook._deregistered)
	            return;
	        var options = this.options;
	        trace_1.trace.traceHookInvocation(this, this.transition, options);
	        if (this.rejectIfSuperseded()) {
	            return rejectFactory_1.Rejection.superseded(options.current()).toPromise();
	        }
	        var cb = hook.callback;
	        var bind = this.options.bind;
	        var trans = this.transition;
	        var state = this.stateContext;
	        var errorHandler = hook.eventType.getErrorHandler(this);
	        var resultHandler = hook.eventType.getResultHandler(this);
	        resultHandler = resultHandler || common_1.identity;
	        if (!errorHandler) {
	            return resultHandler(cb.call(bind, trans, state));
	        }
	        try {
	            return resultHandler(cb.call(bind, trans, state));
	        }
	        catch (error) {
	            return errorHandler(error);
	        }
	    };
	    /**
	     * This method handles the return value of a Transition Hook.
	     *
	     * A hook can return false (cancel), a TargetState (redirect),
	     * or a promise (which may later resolve to false or a redirect)
	     *
	     * This also handles "transition superseded" -- when a new transition
	     * was started while the hook was still running
	     */
	    TransitionHook.prototype.handleHookResult = function (result) {
	        // This transition is no longer current.
	        // Another transition started while this hook was still running.
	        if (this.rejectIfSuperseded()) {
	            // Abort this transition
	            return rejectFactory_1.Rejection.superseded(this.options.current()).toPromise();
	        }
	        // Hook returned a promise
	        if (predicates_1.isPromise(result)) {
	            // Wait for the promise, then reprocess the resolved value
	            return result.then(this.handleHookResult.bind(this));
	        }
	        trace_1.trace.traceHookResult(result, this.transition, this.options);
	        // Hook returned false
	        if (result === false) {
	            // Abort this Transition
	            return rejectFactory_1.Rejection.aborted("Hook aborted transition").toPromise();
	        }
	        var isTargetState = hof_1.is(targetState_1.TargetState);
	        // hook returned a TargetState
	        if (isTargetState(result)) {
	            // Halt the current Transition and start a redirected Transition (to the TargetState).
	            return rejectFactory_1.Rejection.redirected(result).toPromise();
	        }
	    };
	    TransitionHook.prototype.toString = function () {
	        var _a = this, options = _a.options, registeredHook = _a.registeredHook;
	        var event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.fnToString(registeredHook.callback);
	        return event + " context: " + context + ", " + strings_1.maxLength(200, name);
	    };
	    /**
	     * Run all TransitionHooks, ignoring their return value.
	     */
	    TransitionHook.runAllHooks = function (hooks) {
	        hooks.forEach(function (hook) { return hook.invokeHook(); });
	    };
	    /**
	     * Given an array of TransitionHooks, runs each one synchronously and sequentially.
	     * Should any hook return a Rejection synchronously, the remaining hooks will not run.
	     *
	     * Returns a promise chain composed of any promises returned from each hook.invokeStep() call
	     */
	    TransitionHook.runOnBeforeHooks = function (hooks) {
	        var results = [];
	        for (var _i = 0, hooks_1 = hooks; _i < hooks_1.length; _i++) {
	            var hook = hooks_1[_i];
	            var hookResult = hook.invokeHook();
	            if (rejectFactory_1.Rejection.isTransitionRejectionPromise(hookResult)) {
	                // Break on first thrown error or false/TargetState
	                return hookResult;
	            }
	            results.push(hookResult);
	        }
	        return results
	            .filter(predicates_1.isPromise)
	            .reduce(function (chain, promise) { return chain.then(hof_1.val(promise)); }, coreservices_1.services.$q.when());
	    };
	    return TransitionHook;
	}());
	TransitionHook.HANDLE_RESULT = function (hook) {
	    return function (result) {
	        return hook.handleHookResult(result);
	    };
	};
	TransitionHook.IGNORE_RESULT = function (hook) {
	    return function (result) { return undefined; };
	};
	TransitionHook.LOG_ERROR = function (hook) {
	    return function (error) {
	        return (hook.stateService().defaultErrorHandler()(error), undefined);
	    };
	};
	TransitionHook.REJECT_ERROR = function (hook) {
	    return function (error) {
	        return rejectFactory_1.Rejection.errored(error).toPromise();
	    };
	};
	TransitionHook.THROW_ERROR = function (hook) {
	    return undefined;
	};
	exports.TransitionHook = TransitionHook;
	//# sourceMappingURL=transitionHook.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @coreapi
	 * @module state
	 */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	/**
	 * Encapsulate the target (destination) state/params/options of a [[Transition]].
	 *
	 * This class is frequently used to redirect a transition to a new destination.
	 *
	 * See:
	 *
	 * - [[HookResult]]
	 * - [[TransitionHookFn]]
	 * - [[TransitionService.onStart]]
	 *
	 * To create a `TargetState`, use [[StateService.target]].
	 *
	 * ---
	 *
	 * This class wraps:
	 *
	 * 1) an identifier for a state
	 * 2) a set of parameters
	 * 3) and transition options
	 * 4) the registered state object (the [[StateDeclaration]])
	 *
	 * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
	 * either be a *state object* (a [[StateDeclaration]] or [[State]]) or a *state name* (a string).
	 * The `TargetState` class normalizes those options.
	 *
	 * A `TargetState` may be valid (the state being targeted exists in the registry)
	 * or invalid (the state being targeted is not registered).
	 */
	var TargetState = (function () {
	    /**
	     * The TargetState constructor
	     *
	     * Note: Do not construct a `TargetState` manually.
	     * To create a `TargetState`, use the [[StateService.target]] factory method.
	     *
	     * @param _identifier An identifier for a state.
	     *    Either a fully-qualified state name, or the object used to define the state.
	     * @param _definition The internal state representation, if exists.
	     * @param _params Parameters for the target state
	     * @param _options Transition options.
	     *
	     * @internalapi
	     */
	    function TargetState(_identifier, _definition, _params, _options) {
	        if (_options === void 0) { _options = {}; }
	        this._identifier = _identifier;
	        this._definition = _definition;
	        this._options = _options;
	        this._params = _params || {};
	    }
	    /** The name of the state this object targets */
	    TargetState.prototype.name = function () {
	        return this._definition && this._definition.name || this._identifier;
	    };
	    /** The identifier used when creating this TargetState */
	    TargetState.prototype.identifier = function () {
	        return this._identifier;
	    };
	    /** The target parameter values */
	    TargetState.prototype.params = function () {
	        return this._params;
	    };
	    /** The internal state object (if it was found) */
	    TargetState.prototype.$state = function () {
	        return this._definition;
	    };
	    /** The internal state declaration (if it was found) */
	    TargetState.prototype.state = function () {
	        return this._definition && this._definition.self;
	    };
	    /** The target options */
	    TargetState.prototype.options = function () {
	        return this._options;
	    };
	    /** True if the target state was found */
	    TargetState.prototype.exists = function () {
	        return !!(this._definition && this._definition.self);
	    };
	    /** True if the object is valid */
	    TargetState.prototype.valid = function () {
	        return !this.error();
	    };
	    /** If the object is invalid, returns the reason why */
	    TargetState.prototype.error = function () {
	        var base = this.options().relative;
	        if (!this._definition && !!base) {
	            var stateName = base.name ? base.name : base;
	            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
	        }
	        if (!this._definition)
	            return "No such state '" + this.name() + "'";
	        if (!this._definition.self)
	            return "State '" + this.name() + "' has an invalid definition";
	    };
	    TargetState.prototype.toString = function () {
	        return "'" + this.name() + "'" + common_1.toJson(this.params());
	    };
	    return TargetState;
	}());
	/** Returns true if the object has a state property that might be a state or state name */
	TargetState.isDef = function (obj) {
	    return obj && obj.state && (predicates_1.isString(obj.state) || predicates_1.isString(obj.state.name));
	};
	exports.TargetState = TargetState;
	//# sourceMappingURL=targetState.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module transition
	 */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var interface_1 = __webpack_require__(15); // has or is using
	var glob_1 = __webpack_require__(9);
	/**
	 * Determines if the given state matches the matchCriteria
	 *
	 * @hidden
	 *
	 * @param state a State Object to test against
	 * @param criterion
	 * - If a string, matchState uses the string as a glob-matcher against the state name
	 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
	 *   and returns a positive match if any of the globs match.
	 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
	 * @returns {boolean}
	 */
	function matchState(state, criterion) {
	    var toMatch = predicates_1.isString(criterion) ? [criterion] : criterion;
	    function matchGlobs(_state) {
	        var globStrings = toMatch;
	        for (var i = 0; i < globStrings.length; i++) {
	            var glob = new glob_1.Glob(globStrings[i]);
	            if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
	                return true;
	            }
	        }
	        return false;
	    }
	    var matchFn = (predicates_1.isFunction(toMatch) ? toMatch : matchGlobs);
	    return !!matchFn(state);
	}
	exports.matchState = matchState;
	/**
	 * @internalapi
	 * The registration data for a registered transition hook
	 */
	var RegisteredHook = (function () {
	    function RegisteredHook(tranSvc, eventType, callback, matchCriteria, options) {
	        if (options === void 0) { options = {}; }
	        this.tranSvc = tranSvc;
	        this.eventType = eventType;
	        this.callback = callback;
	        this.matchCriteria = matchCriteria;
	        this.priority = options.priority || 0;
	        this.bind = options.bind || null;
	        this._deregistered = false;
	    }
	    /**
	     * Gets the matching [[PathNode]]s
	     *
	     * Given an array of [[PathNode]]s, and a [[HookMatchCriterion]], returns an array containing
	     * the [[PathNode]]s that the criteria matches, or `null` if there were no matching nodes.
	     *
	     * Returning `null` is significant to distinguish between the default
	     * "match-all criterion value" of `true` compared to a `() => true` function,
	     * when the nodes is an empty array.
	     *
	     * This is useful to allow a transition match criteria of `entering: true`
	     * to still match a transition, even when `entering === []`.  Contrast that
	     * with `entering: (state) => true` which only matches when a state is actually
	     * being entered.
	     */
	    RegisteredHook.prototype._matchingNodes = function (nodes, criterion) {
	        if (criterion === true)
	            return nodes;
	        var matching = nodes.filter(function (node) { return matchState(node.state, criterion); });
	        return matching.length ? matching : null;
	    };
	    /**
	     * Gets the default match criteria (all `true`)
	     *
	     * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
	     *
	     * ```js
	     * {
	     *   to: true,
	     *   from: true,
	     *   entering: true,
	     *   exiting: true,
	     *   retained: true,
	     * }
	     */
	    RegisteredHook.prototype._getDefaultMatchCriteria = function () {
	        return common_1.map(this.tranSvc._pluginapi._getPathTypes(), function () { return true; });
	    };
	    /**
	     * Gets matching nodes as [[IMatchingNodes]]
	     *
	     * Create a IMatchingNodes object from the TransitionHookTypes that is roughly equivalent to:
	     *
	     * ```js
	     * let matches: IMatchingNodes = {
	     *   to:       _matchingNodes([tail(treeChanges.to)],   mc.to),
	     *   from:     _matchingNodes([tail(treeChanges.from)], mc.from),
	     *   exiting:  _matchingNodes(treeChanges.exiting,      mc.exiting),
	     *   retained: _matchingNodes(treeChanges.retained,     mc.retained),
	     *   entering: _matchingNodes(treeChanges.entering,     mc.entering),
	     * };
	     * ```
	     */
	    RegisteredHook.prototype._getMatchingNodes = function (treeChanges) {
	        var _this = this;
	        var criteria = common_1.extend(this._getDefaultMatchCriteria(), this.matchCriteria);
	        var paths = common_1.values(this.tranSvc._pluginapi._getPathTypes());
	        return paths.reduce(function (mn, pathtype) {
	            // STATE scope criteria matches against every node in the path.
	            // TRANSITION scope criteria matches against only the last node in the path
	            var isStateHook = pathtype.scope === interface_1.TransitionHookScope.STATE;
	            var path = treeChanges[pathtype.name] || [];
	            var nodes = isStateHook ? path : [common_1.tail(path)];
	            mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name]);
	            return mn;
	        }, {});
	    };
	    /**
	     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
	     *
	     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
	     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
	     */
	    RegisteredHook.prototype.matches = function (treeChanges) {
	        var matches = this._getMatchingNodes(treeChanges);
	        // Check if all the criteria matched the TreeChanges object
	        var allMatched = common_1.values(matches).every(common_1.identity);
	        return allMatched ? matches : null;
	    };
	    return RegisteredHook;
	}());
	exports.RegisteredHook = RegisteredHook;
	/** @hidden Return a registration function of the requested type. */
	function makeEvent(registry, transitionService, eventType) {
	    // Create the object which holds the registered transition hooks.
	    var _registeredHooks = registry._registeredHooks = (registry._registeredHooks || {});
	    var hooks = _registeredHooks[eventType.name] = [];
	    // Create hook registration function on the IHookRegistry for the event
	    registry[eventType.name] = hookRegistrationFn;
	    function hookRegistrationFn(matchObject, callback, options) {
	        if (options === void 0) { options = {}; }
	        var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, options);
	        hooks.push(registeredHook);
	        return function deregisterEventHook() {
	            registeredHook._deregistered = true;
	            common_1.removeFrom(hooks)(registeredHook);
	        };
	    }
	    return hookRegistrationFn;
	}
	exports.makeEvent = makeEvent;
	//# sourceMappingURL=hookRegistry.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @coreapi
	 * @module transition
	 */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var interface_1 = __webpack_require__(15);
	var transitionHook_1 = __webpack_require__(16);
	/**
	 * This class returns applicable TransitionHooks for a specific Transition instance.
	 *
	 * Hooks ([[RegisteredHook]]) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
	 * myTransition.onEnter(...).  The HookBuilder finds matching RegisteredHooks (where the match criteria is
	 * determined by the type of hook)
	 *
	 * The HookBuilder also converts RegisteredHooks objects to TransitionHook objects, which are used to run a Transition.
	 *
	 * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
	 * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
	 * in the Transition class, so we must also provide the Transition's _treeChanges)
	 *
	 */
	var HookBuilder = (function () {
	    function HookBuilder(transition) {
	        this.transition = transition;
	        this.treeChanges = transition.treeChanges();
	        this.transitionOptions = transition.options();
	        this.toState = common_1.tail(this.treeChanges.to).state;
	        this.fromState = common_1.tail(this.treeChanges.from).state;
	        this.$transitions = transition.router.transitionService;
	        this.baseHookOptions = {
	            transition: transition,
	            current: transition.options().current
	        };
	    }
	    HookBuilder.prototype.buildHooksForPhase = function (phase) {
	        var _this = this;
	        return this.$transitions._pluginapi._getEvents(phase)
	            .map(function (type) { return _this.buildHooks(type); })
	            .reduce(common_1.unnestR, [])
	            .filter(common_1.identity);
	    };
	    /**
	     * Returns an array of newly built TransitionHook objects.
	     *
	     * - Finds all RegisteredHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
	     * - Finds [[PathNode]] (or `PathNode[]`) to use as the TransitionHook context(s)
	     * - For each of the [[PathNode]]s, creates a TransitionHook
	     *
	     * @param hookType the type of the hook registration function, e.g., 'onEnter', 'onFinish'.
	     */
	    HookBuilder.prototype.buildHooks = function (hookType) {
	        var _this = this;
	        // Find all the matching registered hooks for a given hook type
	        var matchingHooks = this.getMatchingHooks(hookType, this.treeChanges);
	        if (!matchingHooks)
	            return [];
	        var makeTransitionHooks = function (hook) {
	            // Fetch the Nodes that caused this hook to match.
	            var matches = hook.matches(_this.treeChanges);
	            // Select the PathNode[] that will be used as TransitionHook context objects
	            var matchingNodes = matches[hookType.criteriaMatchPath.name];
	            // Return an array of HookTuples
	            return matchingNodes.map(function (node) {
	                var _options = common_1.extend({
	                    bind: hook.bind,
	                    traceData: { hookType: hookType.name, context: node }
	                }, _this.baseHookOptions);
	                var state = hookType.criteriaMatchPath.scope === interface_1.TransitionHookScope.STATE ? node.state : null;
	                var transitionHook = new transitionHook_1.TransitionHook(_this.transition, state, hook, _options);
	                return { hook: hook, node: node, transitionHook: transitionHook };
	            });
	        };
	        return matchingHooks.map(makeTransitionHooks)
	            .reduce(common_1.unnestR, [])
	            .sort(tupleSort(hookType.reverseSort))
	            .map(function (tuple) { return tuple.transitionHook; });
	    };
	    /**
	     * Finds all RegisteredHooks from:
	     * - The Transition object instance hook registry
	     * - The TransitionService ($transitions) global hook registry
	     *
	     * which matched:
	     * - the eventType
	     * - the matchCriteria (to, from, exiting, retained, entering)
	     *
	     * @returns an array of matched [[RegisteredHook]]s
	     */
	    HookBuilder.prototype.getMatchingHooks = function (hookType, treeChanges) {
	        var isCreate = hookType.hookPhase === interface_1.TransitionHookPhase.CREATE;
	        // Instance and Global hook registries
	        var registries = isCreate ? [this.$transitions] : [this.transition, this.$transitions];
	        return registries.map(function (reg) { return reg.getHooks(hookType.name); }) // Get named hooks from registries
	            .filter(common_1.assertPredicate(predicates_1.isArray, "broken event named: " + hookType.name)) // Sanity check
	            .reduce(common_1.unnestR, []) // Un-nest RegisteredHook[][] to RegisteredHook[] array
	            .filter(function (hook) { return hook.matches(treeChanges); }); // Only those satisfying matchCriteria
	    };
	    return HookBuilder;
	}());
	exports.HookBuilder = HookBuilder;
	/**
	 * A factory for a sort function for HookTuples.
	 *
	 * The sort function first compares the PathNode depth (how deep in the state tree a node is), then compares
	 * the EventHook priority.
	 *
	 * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
	 * @returns a tuple sort function
	 */
	function tupleSort(reverseDepthSort) {
	    if (reverseDepthSort === void 0) { reverseDepthSort = false; }
	    return function nodeDepthThenPriority(l, r) {
	        var factor = reverseDepthSort ? -1 : 1;
	        var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
	        return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
	    };
	}
	//# sourceMappingURL=hookBuilder.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module path */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var param_1 = __webpack_require__(21);
	/**
	 * A node in a [[TreeChanges]] path
	 *
	 * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
	 * Each PathNode corresponds to a state being entered, exited, or retained.
	 * The stateful information includes parameter values and resolve data.
	 */
	var PathNode = (function () {
	    function PathNode(stateOrPath) {
	        if (stateOrPath instanceof PathNode) {
	            var node = stateOrPath;
	            this.state = node.state;
	            this.paramSchema = node.paramSchema.slice();
	            this.paramValues = common_1.extend({}, node.paramValues);
	            this.resolvables = node.resolvables.slice();
	            this.views = node.views && node.views.slice();
	        }
	        else {
	            var state = stateOrPath;
	            this.state = state;
	            this.paramSchema = state.parameters({ inherit: false });
	            this.paramValues = {};
	            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
	        }
	    }
	    /** Sets [[paramValues]] for the node, from the values of an object hash */
	    PathNode.prototype.applyRawParams = function (params) {
	        var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
	        this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return common_1.applyPairs(memo, getParamVal(pDef)); }, {});
	        return this;
	    };
	    /** Gets a specific [[Param]] metadata that belongs to the node */
	    PathNode.prototype.parameter = function (name) {
	        return common_1.find(this.paramSchema, hof_1.propEq("id", name));
	    };
	    /**
	     * @returns true if the state and parameter values for another PathNode are
	     * equal to the state and param values for this PathNode
	     */
	    PathNode.prototype.equals = function (node, keys) {
	        var _this = this;
	        if (keys === void 0) { keys = this.paramSchema.map(function (p) { return p.id; }); }
	        var paramValsEq = function (key) {
	            return _this.parameter(key).type.equals(_this.paramValues[key], node.paramValues[key]);
	        };
	        return this.state === node.state && keys.map(paramValsEq).reduce(common_1.allTrueR, true);
	    };
	    /** Returns a clone of the PathNode */
	    PathNode.clone = function (node) {
	        return new PathNode(node);
	    };
	    /**
	     * Returns a new path which is a subpath of the first path which matched the second path.
	     *
	     * The new path starts from root and contains any nodes that match the nodes in the second path.
	     * Nodes are compared using their state property and parameter values.
	     *
	     * @param pathA the first path
	     * @param pathB the second path
	     * @param ignoreDynamicParams don't compare dynamic parameter values
	     */
	    PathNode.matching = function (pathA, pathB, ignoreDynamicParams) {
	        if (ignoreDynamicParams === void 0) { ignoreDynamicParams = true; }
	        var matching = [];
	        for (var i = 0; i < pathA.length && i < pathB.length; i++) {
	            var a = pathA[i], b = pathB[i];
	            if (a.state !== b.state)
	                break;
	            var changedParams = param_1.Param.changed(a.paramSchema, a.paramValues, b.paramValues)
	                .filter(function (param) { return !(ignoreDynamicParams && param.dynamic); });
	            if (changedParams.length)
	                break;
	            matching.push(a);
	        }
	        return matching;
	    };
	    return PathNode;
	}());
	exports.PathNode = PathNode;
	//# sourceMappingURL=node.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module params
	 */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var predicates_1 = __webpack_require__(6);
	var coreservices_1 = __webpack_require__(8);
	var paramType_1 = __webpack_require__(22);
	var hasOwn = Object.prototype.hasOwnProperty;
	var isShorthand = function (cfg) {
	    return ["value", "type", "squash", "array", "dynamic"].filter(hasOwn.bind(cfg || {})).length === 0;
	};
	var DefType;
	(function (DefType) {
	    DefType[DefType["PATH"] = 0] = "PATH";
	    DefType[DefType["SEARCH"] = 1] = "SEARCH";
	    DefType[DefType["CONFIG"] = 2] = "CONFIG";
	})(DefType = exports.DefType || (exports.DefType = {}));
	function unwrapShorthand(cfg) {
	    cfg = isShorthand(cfg) && { value: cfg } || cfg;
	    return common_1.extend(cfg, {
	        $$fn: predicates_1.isInjectable(cfg.value) ? cfg.value : function () { return cfg.value; }
	    });
	}
	function getType(cfg, urlType, location, id, paramTypes) {
	    if (cfg.type && urlType && urlType.name !== 'string')
	        throw new Error("Param '" + id + "' has two type configurations.");
	    if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
	        return paramTypes.type(cfg.type);
	    if (urlType)
	        return urlType;
	    if (!cfg.type) {
	        var type = location === DefType.CONFIG ? "any" :
	            location === DefType.PATH ? "path" :
	                location === DefType.SEARCH ? "query" : "string";
	        return paramTypes.type(type);
	    }
	    return cfg.type instanceof paramType_1.ParamType ? cfg.type : paramTypes.type(cfg.type);
	}
	/**
	 * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	 */
	function getSquashPolicy(config, isOptional, defaultPolicy) {
	    var squash = config.squash;
	    if (!isOptional || squash === false)
	        return false;
	    if (!predicates_1.isDefined(squash) || squash == null)
	        return defaultPolicy;
	    if (squash === true || predicates_1.isString(squash))
	        return squash;
	    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	}
	function getReplace(config, arrayMode, isOptional, squash) {
	    var replace, configuredKeys, defaultPolicy = [
	        { from: "", to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	    ];
	    replace = predicates_1.isArray(config.replace) ? config.replace : [];
	    if (predicates_1.isString(squash))
	        replace.push({ from: squash, to: undefined });
	    configuredKeys = common_1.map(replace, hof_1.prop("from"));
	    return common_1.filter(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
	}
	var Param = (function () {
	    function Param(id, type, config, location, urlMatcherFactory) {
	        config = unwrapShorthand(config);
	        type = getType(config, type, location, id, urlMatcherFactory.paramTypes);
	        var arrayMode = getArrayMode();
	        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
	        var isOptional = config.value !== undefined || location === DefType.SEARCH;
	        var dynamic = predicates_1.isDefined(config.dynamic) ? !!config.dynamic : !!type.dynamic;
	        var raw = predicates_1.isDefined(config.raw) ? !!config.raw : !!type.raw;
	        var squash = getSquashPolicy(config, isOptional, urlMatcherFactory.defaultSquashPolicy());
	        var replace = getReplace(config, arrayMode, isOptional, squash);
	        var inherit = predicates_1.isDefined(config.inherit) ? !!config.inherit : !!type.inherit;
	        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	        function getArrayMode() {
	            var arrayDefaults = { array: (location === DefType.SEARCH ? "auto" : false) };
	            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	            return common_1.extend(arrayDefaults, arrayParamNomenclature, config).array;
	        }
	        common_1.extend(this, { id: id, type: type, location: location, isOptional: isOptional, dynamic: dynamic, raw: raw, squash: squash, replace: replace, inherit: inherit, array: arrayMode, config: config, });
	    }
	    Param.prototype.isDefaultValue = function (value) {
	        return this.isOptional && this.type.equals(this.value(), value);
	    };
	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    Param.prototype.value = function (value) {
	        var _this = this;
	        /**
	         * [Internal] Get the default value of a parameter, which may be an injectable function.
	         */
	        var $$getDefaultValue = function () {
	            if (!coreservices_1.services.$injector)
	                throw new Error("Injectable functions cannot be called at configuration time");
	            var defaultValue = coreservices_1.services.$injector.invoke(_this.config.$$fn);
	            if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
	                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
	            return defaultValue;
	        };
	        var $replace = function (val) {
	            var replacement = common_1.map(common_1.filter(_this.replace, hof_1.propEq('from', val)), hof_1.prop("to"));
	            return replacement.length ? replacement[0] : val;
	        };
	        value = $replace(value);
	        return !predicates_1.isDefined(value) ? $$getDefaultValue() : this.type.$normalize(value);
	    };
	    Param.prototype.isSearch = function () {
	        return this.location === DefType.SEARCH;
	    };
	    Param.prototype.validates = function (value) {
	        // There was no parameter value, but the param is optional
	        if ((!predicates_1.isDefined(value) || value === null) && this.isOptional)
	            return true;
	        // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
	        var normalized = this.type.$normalize(value);
	        if (!this.type.is(normalized))
	            return false;
	        // The value was of the correct type, but when encoded, did not match the ParamType's regexp
	        var encoded = this.type.encode(normalized);
	        return !(predicates_1.isString(encoded) && !this.type.pattern.exec(encoded));
	    };
	    Param.prototype.toString = function () {
	        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
	    };
	    Param.values = function (params, values) {
	        if (values === void 0) { values = {}; }
	        return params.map(function (param) { return [param.id, param.value(values[param.id])]; }).reduce(common_1.applyPairs, {});
	    };
	    /**
	     * Finds [[Param]] objects which have different param values
	     *
	     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
	     *
	     * @param params: The list of Param objects to filter
	     * @param values1: The first set of parameter values
	     * @param values2: the second set of parameter values
	     *
	     * @returns any Param objects whose values were different between values1 and values2
	     */
	    Param.changed = function (params, values1, values2) {
	        if (values1 === void 0) { values1 = {}; }
	        if (values2 === void 0) { values2 = {}; }
	        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
	    };
	    /**
	     * Checks if two param value objects are equal (for a set of [[Param]] objects)
	     *
	     * @param params The list of [[Param]] objects to check
	     * @param values1 The first set of param values
	     * @param values2 The second set of param values
	     *
	     * @returns true if the param values in values1 and values2 are equal
	     */
	    Param.equals = function (params, values1, values2) {
	        if (values1 === void 0) { values1 = {}; }
	        if (values2 === void 0) { values2 = {}; }
	        return Param.changed(params, values1, values2).length === 0;
	    };
	    /** Returns true if a the parameter values are valid, according to the Param definitions */
	    Param.validates = function (params, values) {
	        if (values === void 0) { values = {}; }
	        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(common_1.allTrueR, true);
	    };
	    return Param;
	}());
	exports.Param = Param;
	//# sourceMappingURL=param.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	/**
	 * An internal class which implements [[ParamTypeDefinition]].
	 *
	 * A [[ParamTypeDefinition]] is a plain javascript object used to register custom parameter types.
	 * When a param type definition is registered, an instance of this class is created internally.
	 *
	 * This class has naive implementations for all the [[ParamTypeDefinition]] methods.
	 *
	 * Used by [[UrlMatcher]] when matching or formatting URLs, or comparing and validating parameter values.
	 *
	 * #### Example:
	 * ```js
	 * var paramTypeDef = {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 *
	 * var paramType = new ParamType(paramTypeDef);
	 * ```
	 * @internalapi
	 */
	var ParamType = (function () {
	    /**
	     * @param def  A configuration object which contains the custom type definition.  The object's
	     *        properties will override the default methods and/or pattern in `ParamType`'s public interface.
	     * @returns a new ParamType object
	     */
	    function ParamType(def) {
	        /** @inheritdoc */
	        this.pattern = /.*/;
	        /** @inheritdoc */
	        this.inherit = true;
	        common_1.extend(this, def);
	    }
	    // consider these four methods to be "abstract methods" that should be overridden
	    /** @inheritdoc */
	    ParamType.prototype.is = function (val, key) { return true; };
	    /** @inheritdoc */
	    ParamType.prototype.encode = function (val, key) { return val; };
	    /** @inheritdoc */
	    ParamType.prototype.decode = function (val, key) { return val; };
	    /** @inheritdoc */
	    ParamType.prototype.equals = function (a, b) { return a == b; };
	    ParamType.prototype.$subPattern = function () {
	        var sub = this.pattern.toString();
	        return sub.substr(1, sub.length - 2);
	    };
	    ParamType.prototype.toString = function () {
	        return "{ParamType:" + this.name + "}";
	    };
	    /** Given an encoded string, or a decoded object, returns a decoded object */
	    ParamType.prototype.$normalize = function (val) {
	        return this.is(val) ? val : this.decode(val);
	    };
	    /**
	     * Wraps an existing custom ParamType as an array of ParamType, depending on 'mode'.
	     * e.g.:
	     * - urlmatcher pattern "/path?{queryParam[]:int}"
	     * - url: "/path?queryParam=1&queryParam=2
	     * - $stateParams.queryParam will be [1, 2]
	     * if `mode` is "auto", then
	     * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	     * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	     */
	    ParamType.prototype.$asArray = function (mode, isSearch) {
	        if (!mode)
	            return this;
	        if (mode === "auto" && !isSearch)
	            throw new Error("'auto' array mode is for query parameters only");
	        return new ArrayType(this, mode);
	    };
	    return ParamType;
	}());
	exports.ParamType = ParamType;
	/**
	 * Wraps up a `ParamType` object to handle array values.
	 * @internalapi
	 */
	function ArrayType(type, mode) {
	    var _this = this;
	    // Wrap non-array value as array
	    function arrayWrap(val) {
	        return predicates_1.isArray(val) ? val : (predicates_1.isDefined(val) ? [val] : []);
	    }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	        switch (val.length) {
	            case 0: return undefined;
	            case 1: return mode === "auto" ? val[0] : val;
	            default: return val;
	        }
	    }
	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	        return function handleArray(val) {
	            if (predicates_1.isArray(val) && val.length === 0)
	                return val;
	            var arr = arrayWrap(val);
	            var result = common_1.map(arr, callback);
	            return (allTruthyMode === true) ? common_1.filter(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
	        };
	    }
	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	        return function handleArray(val1, val2) {
	            var left = arrayWrap(val1), right = arrayWrap(val2);
	            if (left.length !== right.length)
	                return false;
	            for (var i = 0; i < left.length; i++) {
	                if (!callback(left[i], right[i]))
	                    return false;
	            }
	            return true;
	        };
	    }
	    ['encode', 'decode', 'equals', '$normalize'].forEach(function (name) {
	        var paramTypeFn = type[name].bind(type);
	        var wrapperFn = name === 'equals' ? arrayEqualsHandler : arrayHandler;
	        _this[name] = wrapperFn(paramTypeFn);
	    });
	    common_1.extend(this, {
	        dynamic: type.dynamic,
	        name: type.name,
	        pattern: type.pattern,
	        inherit: type.inherit,
	        is: arrayHandler(type.is.bind(type), true),
	        $arrayMode: mode
	    });
	}
	//# sourceMappingURL=paramType.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/** @module path */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var targetState_1 = __webpack_require__(17);
	var node_1 = __webpack_require__(20);
	/**
	 * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
	 */
	var PathFactory = (function () {
	    function PathFactory() {
	    }
	    /** Given a PathNode[], create an TargetState */
	    PathFactory.makeTargetState = function (path) {
	        var state = common_1.tail(path).state;
	        return new targetState_1.TargetState(state, state, path.map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {}));
	    };
	    PathFactory.buildPath = function (targetState) {
	        var toParams = targetState.params();
	        return targetState.$state().path.map(function (state) { return new node_1.PathNode(state).applyRawParams(toParams); });
	    };
	    /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
	    PathFactory.buildToPath = function (fromPath, targetState) {
	        var toPath = PathFactory.buildPath(targetState);
	        if (targetState.options().inherit) {
	            return PathFactory.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
	        }
	        return toPath;
	    };
	    /**
	     * Creates ViewConfig objects and adds to nodes.
	     *
	     * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
	     */
	    PathFactory.applyViewConfigs = function ($view, path, states) {
	        // Only apply the viewConfigs to the nodes for the given states
	        path.filter(function (node) { return common_1.inArray(states, node.state); }).forEach(function (node) {
	            var viewDecls = common_1.values(node.state.views || {});
	            var subPath = PathFactory.subPath(path, function (n) { return n === node; });
	            var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
	            node.views = viewConfigs.reduce(common_1.unnestR, []);
	        });
	    };
	    /**
	     * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
	     *
	     * For a parameter in a node to be inherited from the from path:
	     * - The toPath's node must have a matching node in the fromPath (by state).
	     * - The parameter name must not be found in the toKeys parameter array.
	     *
	     * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
	     * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
	     * it is not inherited from the fromPath.
	     */
	    PathFactory.inheritParams = function (fromPath, toPath, toKeys) {
	        if (toKeys === void 0) { toKeys = []; }
	        function nodeParamVals(path, state) {
	            var node = common_1.find(path, hof_1.propEq('state', state));
	            return common_1.extend({}, node && node.paramValues);
	        }
	        var noInherit = fromPath.map(function (node) { return node.paramSchema; })
	            .reduce(common_1.unnestR, [])
	            .filter(function (param) { return !param.inherit; })
	            .map(hof_1.prop('id'));
	        /**
	         * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
	         * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
	         */
	        function makeInheritedParamsNode(toNode) {
	            // All param values for the node (may include default key/vals, when key was not found in toParams)
	            var toParamVals = common_1.extend({}, toNode && toNode.paramValues);
	            // limited to only those keys found in toParams
	            var incomingParamVals = common_1.pick(toParamVals, toKeys);
	            toParamVals = common_1.omit(toParamVals, toKeys);
	            var fromParamVals = common_1.omit(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
	            // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
	            var ownParamVals = common_1.extend(toParamVals, fromParamVals, incomingParamVals);
	            return new node_1.PathNode(toNode.state).applyRawParams(ownParamVals);
	        }
	        // The param keys specified by the incoming toParams
	        return toPath.map(makeInheritedParamsNode);
	    };
	    /**
	     * Computes the tree changes (entering, exiting) between a fromPath and toPath.
	     */
	    PathFactory.treeChanges = function (fromPath, toPath, reloadState) {
	        var keep = 0, max = Math.min(fromPath.length, toPath.length);
	        var staticParams = function (state) {
	            return state.parameters({ inherit: false }).filter(hof_1.not(hof_1.prop('dynamic'))).map(hof_1.prop('id'));
	        };
	        var nodesMatch = function (node1, node2) {
	            return node1.equals(node2, staticParams(node1.state));
	        };
	        while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
	            keep++;
	        }
	        /** Given a retained node, return a new node which uses the to node's param values */
	        function applyToParams(retainedNode, idx) {
	            var cloned = node_1.PathNode.clone(retainedNode);
	            cloned.paramValues = toPath[idx].paramValues;
	            return cloned;
	        }
	        var from, retained, exiting, entering, to;
	        from = fromPath;
	        retained = from.slice(0, keep);
	        exiting = from.slice(keep);
	        // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
	        var retainedWithToParams = retained.map(applyToParams);
	        entering = toPath.slice(keep);
	        to = (retainedWithToParams).concat(entering);
	        return { from: from, to: to, retained: retained, exiting: exiting, entering: entering };
	    };
	    /**
	     * Return a subpath of a path, which stops at the first matching node
	     *
	     * Given an array of nodes, returns a subset of the array starting from the first node,
	     * stopping when the first node matches the predicate.
	     *
	     * @param path a path of [[PathNode]]s
	     * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
	     * @returns a subpath up to the matching node, or undefined if no match is found
	     */
	    PathFactory.subPath = function (path, predicate) {
	        var node = common_1.find(path, predicate);
	        var elementIdx = path.indexOf(node);
	        return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
	    };
	    return PathFactory;
	}());
	/** Gets the raw parameter values from a path */
	PathFactory.paramValues = function (path) { return path.reduce(function (acc, node) { return common_1.extend(acc, node.paramValues); }, {}); };
	exports.PathFactory = PathFactory;
	//# sourceMappingURL=pathFactory.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module resolve
	 */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var coreservices_1 = __webpack_require__(8);
	var trace_1 = __webpack_require__(14);
	var strings_1 = __webpack_require__(11);
	var predicates_1 = __webpack_require__(6);
	// TODO: explicitly make this user configurable
	exports.defaultResolvePolicy = {
	    when: "LAZY",
	    async: "WAIT"
	};
	/**
	 * The basic building block for the resolve system.
	 *
	 * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
	 * and the unwrapped-when-complete (.data) result of the resolveFn.
	 *
	 * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
	 * resolveFn) and returns the resulting promise.
	 *
	 * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
	 * parameter to those fns.
	 */
	var Resolvable = (function () {
	    function Resolvable(arg1, resolveFn, deps, policy, data) {
	        this.resolved = false;
	        this.promise = undefined;
	        if (arg1 instanceof Resolvable) {
	            common_1.extend(this, arg1);
	        }
	        else if (predicates_1.isFunction(resolveFn)) {
	            if (arg1 == null || arg1 == undefined)
	                throw new Error("new Resolvable(): token argument is required");
	            if (!predicates_1.isFunction(resolveFn))
	                throw new Error("new Resolvable(): resolveFn argument must be a function");
	            this.token = arg1;
	            this.policy = policy;
	            this.resolveFn = resolveFn;
	            this.deps = deps || [];
	            this.data = data;
	            this.resolved = data !== undefined;
	            this.promise = this.resolved ? coreservices_1.services.$q.when(this.data) : undefined;
	        }
	        else if (predicates_1.isObject(arg1) && arg1.token && predicates_1.isFunction(arg1.resolveFn)) {
	            var literal = arg1;
	            return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
	        }
	    }
	    Resolvable.prototype.getPolicy = function (state) {
	        var thisPolicy = this.policy || {};
	        var statePolicy = state && state.resolvePolicy || {};
	        return {
	            when: thisPolicy.when || statePolicy.when || exports.defaultResolvePolicy.when,
	            async: thisPolicy.async || statePolicy.async || exports.defaultResolvePolicy.async,
	        };
	    };
	    /**
	     * Asynchronously resolve this Resolvable's data
	     *
	     * Given a ResolveContext that this Resolvable is found in:
	     * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
	     * and update the Resolvable's state
	     */
	    Resolvable.prototype.resolve = function (resolveContext, trans) {
	        var _this = this;
	        var $q = coreservices_1.services.$q;
	        // Gets all dependencies from ResolveContext and wait for them to be resolved
	        var getResolvableDependencies = function () {
	            return $q.all(resolveContext.getDependencies(_this).map(function (r) {
	                return r.get(resolveContext, trans);
	            }));
	        };
	        // Invokes the resolve function passing the resolved dependencies as arguments
	        var invokeResolveFn = function (resolvedDeps) {
	            return _this.resolveFn.apply(null, resolvedDeps);
	        };
	        /**
	         * For RXWAIT policy:
	         *
	         * Given an observable returned from a resolve function:
	         * - enables .cache() mode (this allows multicast subscribers)
	         * - then calls toPromise() (this triggers subscribe() and thus fetches)
	         * - Waits for the promise, then return the cached observable (not the first emitted value).
	         */
	        var waitForRx = function (observable$) {
	            var cached = observable$.cache(1);
	            return cached.take(1).toPromise().then(function () { return cached; });
	        };
	        // If the resolve policy is RXWAIT, wait for the observable to emit something. otherwise pass through.
	        var node = resolveContext.findNode(this);
	        var state = node && node.state;
	        var maybeWaitForRx = this.getPolicy(state).async === "RXWAIT" ? waitForRx : common_1.identity;
	        // After the final value has been resolved, update the state of the Resolvable
	        var applyResolvedValue = function (resolvedValue) {
	            _this.data = resolvedValue;
	            _this.resolved = true;
	            trace_1.trace.traceResolvableResolved(_this, trans);
	            return _this.data;
	        };
	        // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
	        return this.promise = $q.when()
	            .then(getResolvableDependencies)
	            .then(invokeResolveFn)
	            .then(maybeWaitForRx)
	            .then(applyResolvedValue);
	    };
	    /**
	     * Gets a promise for this Resolvable's data.
	     *
	     * Fetches the data and returns a promise.
	     * Returns the existing promise if it has already been fetched once.
	     */
	    Resolvable.prototype.get = function (resolveContext, trans) {
	        return this.promise || this.resolve(resolveContext, trans);
	    };
	    Resolvable.prototype.toString = function () {
	        return "Resolvable(token: " + strings_1.stringify(this.token) + ", requires: [" + this.deps.map(strings_1.stringify) + "])";
	    };
	    Resolvable.prototype.clone = function () {
	        return new Resolvable(this);
	    };
	    return Resolvable;
	}());
	Resolvable.fromData = function (token, data) {
	    return new Resolvable(token, function () { return data; }, null, null, data);
	};
	exports.Resolvable = Resolvable;
	//# sourceMappingURL=resolvable.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module resolve */
	/** for typedoc */
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var trace_1 = __webpack_require__(14);
	var coreservices_1 = __webpack_require__(8);
	var interface_1 = __webpack_require__(26);
	var resolvable_1 = __webpack_require__(24);
	var pathFactory_1 = __webpack_require__(23);
	var strings_1 = __webpack_require__(11);
	var when = interface_1.resolvePolicies.when;
	var ALL_WHENS = [when.EAGER, when.LAZY];
	var EAGER_WHENS = [when.EAGER];
	exports.NATIVE_INJECTOR_TOKEN = "Native Injector";
	/**
	 * Encapsulates Depenency Injection for a path of nodes
	 *
	 * UI-Router states are organized as a tree.
	 * A nested state has a path of ancestors to the root of the tree.
	 * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
	 * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
	 *
	 * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
	 */
	var ResolveContext = (function () {
	    function ResolveContext(_path) {
	        this._path = _path;
	    }
	    /** Gets all the tokens found in the resolve context, de-duplicated */
	    ResolveContext.prototype.getTokens = function () {
	        return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(common_1.uniqR, []);
	    };
	    /**
	     * Gets the Resolvable that matches the token
	     *
	     * Gets the last Resolvable that matches the token in this context, or undefined.
	     * Throws an error if it doesn't exist in the ResolveContext
	     */
	    ResolveContext.prototype.getResolvable = function (token) {
	        var matching = this._path.map(function (node) { return node.resolvables; })
	            .reduce(common_1.unnestR, [])
	            .filter(function (r) { return r.token === token; });
	        return common_1.tail(matching);
	    };
	    /** Returns the [[ResolvePolicy]] for the given [[Resolvable]] */
	    ResolveContext.prototype.getPolicy = function (resolvable) {
	        var node = this.findNode(resolvable);
	        return resolvable.getPolicy(node.state);
	    };
	    /**
	     * Returns a ResolveContext that includes a portion of this one
	     *
	     * Given a state, this method creates a new ResolveContext from this one.
	     * The new context starts at the first node (root) and stops at the node for the `state` parameter.
	     *
	     * #### Why
	     *
	     * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
	     * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
	     * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
	     * This method is used to create a narrower context when injecting ancestor nodes.
	     *
	     * @example
	     * `let ABCD = new ResolveContext([A, B, C, D]);`
	     *
	     * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
	     * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
	     * However, `B` should only be able to access resolvables from `A`, `B`.
	     *
	     * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
	     * `let AB = ABCD.subcontext(a)`
	     */
	    ResolveContext.prototype.subContext = function (state) {
	        return new ResolveContext(pathFactory_1.PathFactory.subPath(this._path, function (node) { return node.state === state; }));
	    };
	    /**
	     * Adds Resolvables to the node that matches the state
	     *
	     * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
	     * The resolvable is added to the node matching the `state` parameter.
	     *
	     * These new resolvables are not automatically fetched.
	     * The calling code should either fetch them, fetch something that depends on them,
	     * or rely on [[resolvePath]] being called when some state is being entered.
	     *
	     * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
	     *
	     * @param newResolvables the new Resolvables
	     * @param state Used to find the node to put the resolvable on
	     */
	    ResolveContext.prototype.addResolvables = function (newResolvables, state) {
	        var node = common_1.find(this._path, hof_1.propEq('state', state));
	        var keys = newResolvables.map(function (r) { return r.token; });
	        node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
	    };
	    /**
	     * Returns a promise for an array of resolved path Element promises
	     *
	     * @param when
	     * @param trans
	     * @returns {Promise<any>|any}
	     */
	    ResolveContext.prototype.resolvePath = function (when, trans) {
	        var _this = this;
	        if (when === void 0) { when = "LAZY"; }
	        // This option determines which 'when' policy Resolvables we are about to fetch.
	        var whenOption = common_1.inArray(ALL_WHENS, when) ? when : "LAZY";
	        // If the caller specified EAGER, only the EAGER Resolvables are fetched.
	        // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
	        var matchedWhens = whenOption === interface_1.resolvePolicies.when.EAGER ? EAGER_WHENS : ALL_WHENS;
	        // get the subpath to the state argument, if provided
	        trace_1.trace.traceResolvePath(this._path, when, trans);
	        var matchesPolicy = function (acceptedVals, whenOrAsync) {
	            return function (resolvable) {
	                return common_1.inArray(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
	            };
	        };
	        // Trigger all the (matching) Resolvables in the path
	        // Reduce all the "WAIT" Resolvables into an array
	        var promises = this._path.reduce(function (acc, node) {
	            var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, 'when'));
	            var nowait = nodeResolvables.filter(matchesPolicy(['NOWAIT'], 'async'));
	            var wait = nodeResolvables.filter(hof_1.not(matchesPolicy(['NOWAIT'], 'async')));
	            // For the matching Resolvables, start their async fetch process.
	            var subContext = _this.subContext(node.state);
	            var getResult = function (r) { return r.get(subContext, trans)
	                .then(function (value) { return ({ token: r.token, value: value }); }); };
	            nowait.forEach(getResult);
	            return acc.concat(wait.map(getResult));
	        }, []);
	        // Wait for all the "WAIT" resolvables
	        return coreservices_1.services.$q.all(promises);
	    };
	    ResolveContext.prototype.injector = function () {
	        return this._injector || (this._injector = new UIInjectorImpl(this));
	    };
	    ResolveContext.prototype.findNode = function (resolvable) {
	        return common_1.find(this._path, function (node) { return common_1.inArray(node.resolvables, resolvable); });
	    };
	    /**
	     * Gets the async dependencies of a Resolvable
	     *
	     * Given a Resolvable, returns its dependencies as a Resolvable[]
	     */
	    ResolveContext.prototype.getDependencies = function (resolvable) {
	        var _this = this;
	        var node = this.findNode(resolvable);
	        // Find which other resolvables are "visible" to the `resolvable` argument
	        // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
	        var subPath = pathFactory_1.PathFactory.subPath(this._path, function (x) { return x === node; }) || this._path;
	        var availableResolvables = subPath
	            .reduce(function (acc, node) { return acc.concat(node.resolvables); }, []) //all of subpath's resolvables
	            .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
	        var getDependency = function (token) {
	            var matching = availableResolvables.filter(function (r) { return r.token === token; });
	            if (matching.length)
	                return common_1.tail(matching);
	            var fromInjector = _this.injector().getNative(token);
	            if (!fromInjector) {
	                throw new Error("Could not find Dependency Injection token: " + strings_1.stringify(token));
	            }
	            return new resolvable_1.Resolvable(token, function () { return fromInjector; }, [], fromInjector);
	        };
	        return resolvable.deps.map(getDependency);
	    };
	    return ResolveContext;
	}());
	exports.ResolveContext = ResolveContext;
	var UIInjectorImpl = (function () {
	    function UIInjectorImpl(context) {
	        this.context = context;
	        this.native = this.get(exports.NATIVE_INJECTOR_TOKEN) || coreservices_1.services.$injector;
	    }
	    UIInjectorImpl.prototype.get = function (token) {
	        var resolvable = this.context.getResolvable(token);
	        if (resolvable) {
	            if (this.context.getPolicy(resolvable).async === 'NOWAIT') {
	                return resolvable.get(this.context);
	            }
	            if (!resolvable.resolved) {
	                throw new Error("Resolvable async .get() not complete:" + strings_1.stringify(resolvable.token));
	            }
	            return resolvable.data;
	        }
	        return this.native && this.native.get(token);
	    };
	    UIInjectorImpl.prototype.getAsync = function (token) {
	        var resolvable = this.context.getResolvable(token);
	        if (resolvable)
	            return resolvable.get(this.context);
	        return coreservices_1.services.$q.when(this.native.get(token));
	    };
	    UIInjectorImpl.prototype.getNative = function (token) {
	        return this.native && this.native.get(token);
	    };
	    return UIInjectorImpl;
	}());
	//# sourceMappingURL=resolveContext.js.map

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	/** @internalapi */
	exports.resolvePolicies = {
	    when: {
	        LAZY: "LAZY",
	        EAGER: "EAGER"
	    },
	    async: {
	        WAIT: "WAIT",
	        NOWAIT: "NOWAIT",
	        RXWAIT: "RXWAIT"
	    }
	};
	//# sourceMappingURL=interface.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module core
	 */ /** */
	var urlMatcherFactory_1 = __webpack_require__(28);
	var urlRouter_1 = __webpack_require__(31);
	var transitionService_1 = __webpack_require__(34);
	var view_1 = __webpack_require__(42);
	var stateRegistry_1 = __webpack_require__(43);
	var stateService_1 = __webpack_require__(47);
	var globals_1 = __webpack_require__(48);
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var urlService_1 = __webpack_require__(50);
	var trace_1 = __webpack_require__(14);
	/** @hidden */
	var _routerInstance = 0;
	/**
	 * The master class used to instantiate an instance of UI-Router.
	 *
	 * UI-Router (for each specific framework) will create an instance of this class during bootstrap.
	 * This class instantiates and wires the UI-Router services together.
	 *
	 * After a new instance of the UIRouter class is created, it should be configured for your app.
	 * For instance, app states should be registered with the [[UIRouter.stateRegistry]].
	 *
	 * ---
	 *
	 * Normally the framework code will bootstrap UI-Router.
	 * If you are bootstrapping UIRouter manually, tell it to monitor the URL by calling
	 * [[UrlService.listen]] then [[UrlService.sync]].
	 */
	var UIRouter = (function () {
	    /**
	     * Creates a new `UIRouter` object
	     *
	     * @param locationService a [[LocationServices]] implementation
	     * @param locationConfig a [[LocationConfig]] implementation
	     * @internalapi
	     */
	    function UIRouter(locationService, locationConfig) {
	        if (locationService === void 0) { locationService = urlService_1.UrlService.locationServiceStub; }
	        if (locationConfig === void 0) { locationConfig = urlService_1.UrlService.locationConfigStub; }
	        this.locationService = locationService;
	        this.locationConfig = locationConfig;
	        /** @hidden */
	        this.$id = _routerInstance++;
	        /** Provides trace information to the console */
	        this.trace = trace_1.trace;
	        /** Provides services related to ui-view synchronization */
	        this.viewService = new view_1.ViewService();
	        /** Provides services related to Transitions */
	        this.transitionService = new transitionService_1.TransitionService(this);
	        /** Global router state */
	        this.globals = new globals_1.Globals(this.transitionService);
	        /**
	         * Deprecated for public use. Use [[urlService]] instead.
	         * @deprecated
	         */
	        this.urlMatcherFactory = new urlMatcherFactory_1.UrlMatcherFactory();
	        /**
	         * Deprecated for public use. Use [[urlService]] instead.
	         * @deprecated
	         */
	        this.urlRouter = new urlRouter_1.UrlRouter(this);
	        /** Provides a registry for states, and related registration services */
	        this.stateRegistry = new stateRegistry_1.StateRegistry(this);
	        /** Provides services related to states */
	        this.stateService = new stateService_1.StateService(this);
	        /** Provides services related to the URL */
	        this.urlService = new urlService_1.UrlService(this);
	        /** @hidden */
	        this._disposables = [];
	        /** @hidden */
	        this._plugins = {};
	        this.viewService._pluginapi._rootViewContext(this.stateRegistry.root());
	        this.globals.$current = this.stateRegistry.root();
	        this.globals.current = this.globals.$current.self;
	        this.disposable(this.transitionService);
	        this.disposable(this.urlRouter);
	        this.disposable(this.stateRegistry);
	        this.disposable(locationService);
	        this.disposable(locationConfig);
	    }
	    /** Registers an object to be notified when the router is disposed */
	    UIRouter.prototype.disposable = function (disposable) {
	        this._disposables.push(disposable);
	    };
	    /**
	     * Disposes this router instance
	     *
	     * When called, clears resources retained by the router by calling `dispose(this)` on all
	     * registered [[disposable]] objects.
	     *
	     * Or, if a `disposable` object is provided, calls `dispose(this)` on that object only.
	     *
	     * @param disposable (optional) the disposable to dispose
	     */
	    UIRouter.prototype.dispose = function (disposable) {
	        var _this = this;
	        if (disposable && predicates_1.isFunction(disposable.dispose)) {
	            disposable.dispose(this);
	            return undefined;
	        }
	        this._disposables.slice().forEach(function (d) {
	            try {
	                typeof d.dispose === 'function' && d.dispose(_this);
	                common_1.removeFrom(_this._disposables, d);
	            }
	            catch (ignored) { }
	        });
	    };
	    /**
	     * Adds a plugin to UI-Router
	     *
	     * This method adds a UI-Router Plugin.
	     * A plugin can enhance or change UI-Router behavior using any public API.
	     *
	     * #### Example:
	     * ```js
	     * import { MyCoolPlugin } from "ui-router-cool-plugin";
	     *
	     * var plugin = router.addPlugin(MyCoolPlugin);
	     * ```
	     *
	     * ### Plugin authoring
	     *
	     * A plugin is simply a class (or constructor function) which accepts a [[UIRouter]] instance and (optionally) an options object.
	     *
	     * The plugin can implement its functionality using any of the public APIs of [[UIRouter]].
	     * For example, it may configure router options or add a Transition Hook.
	     *
	     * The plugin can then be published as a separate module.
	     *
	     * #### Example:
	     * ```js
	     * export class MyAuthPlugin implements UIRouterPlugin {
	     *   constructor(router: UIRouter, options: any) {
	     *     this.name = "MyAuthPlugin";
	     *     let $transitions = router.transitionService;
	     *     let $state = router.stateService;
	     *
	     *     let authCriteria = {
	     *       to: (state) => state.data && state.data.requiresAuth
	     *     };
	     *
	     *     function authHook(transition: Transition) {
	     *       let authService = transition.injector().get('AuthService');
	     *       if (!authService.isAuthenticated()) {
	     *         return $state.target('login');
	     *       }
	     *     }
	     *
	     *     $transitions.onStart(authCriteria, authHook);
	     *   }
	     * }
	     * ```
	     *
	     * @param plugin one of:
	     *        - a plugin class which implements [[UIRouterPlugin]]
	     *        - a constructor function for a [[UIRouterPlugin]] which accepts a [[UIRouter]] instance
	     *        - a factory function which accepts a [[UIRouter]] instance and returns a [[UIRouterPlugin]] instance
	     * @param options options to pass to the plugin class/factory
	     * @returns the registered plugin instance
	     */
	    UIRouter.prototype.plugin = function (plugin, options) {
	        if (options === void 0) { options = {}; }
	        var pluginInstance = new plugin(this, options);
	        if (!pluginInstance.name)
	            throw new Error("Required property `name` missing on plugin: " + pluginInstance);
	        this._disposables.push(pluginInstance);
	        return this._plugins[pluginInstance.name] = pluginInstance;
	    };
	    UIRouter.prototype.getPlugin = function (pluginName) {
	        return pluginName ? this._plugins[pluginName] : common_1.values(this._plugins);
	    };
	    return UIRouter;
	}());
	exports.UIRouter = UIRouter;
	//# sourceMappingURL=router.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module url
	 */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var urlMatcher_1 = __webpack_require__(29);
	var param_1 = __webpack_require__(21);
	var paramTypes_1 = __webpack_require__(30);
	/**
	 * Factory for [[UrlMatcher]] instances.
	 *
	 * The factory is available to ng1 services as
	 * `$urlMatcherFactor` or ng1 providers as `$urlMatcherFactoryProvider`.
	 */
	var UrlMatcherFactory = (function () {
	    function UrlMatcherFactory() {
	        var _this = this;
	        /** @hidden */ this.paramTypes = new paramTypes_1.ParamTypes();
	        /** @hidden */ this._isCaseInsensitive = false;
	        /** @hidden */ this._isStrictMode = true;
	        /** @hidden */ this._defaultSquashPolicy = false;
	        /** @hidden */
	        this._getConfig = function (config) {
	            return common_1.extend({ strict: _this._isStrictMode, caseInsensitive: _this._isCaseInsensitive }, config);
	        };
	        /** @internalapi Creates a new [[Param]] for a given location (DefType) */
	        this.paramFactory = {
	            /** Creates a new [[Param]] from a CONFIG block */
	            fromConfig: function (id, type, config) {
	                return new param_1.Param(id, type, config, param_1.DefType.CONFIG, _this);
	            },
	            /** Creates a new [[Param]] from a url PATH */
	            fromPath: function (id, type, config) {
	                return new param_1.Param(id, type, config, param_1.DefType.PATH, _this);
	            },
	            /** Creates a new [[Param]] from a url SEARCH */
	            fromSearch: function (id, type, config) {
	                return new param_1.Param(id, type, config, param_1.DefType.SEARCH, _this);
	            },
	        };
	        common_1.extend(this, { UrlMatcher: urlMatcher_1.UrlMatcher, Param: param_1.Param });
	    }
	    /** @inheritdoc */
	    UrlMatcherFactory.prototype.caseInsensitive = function (value) {
	        return this._isCaseInsensitive = predicates_1.isDefined(value) ? value : this._isCaseInsensitive;
	    };
	    /** @inheritdoc */
	    UrlMatcherFactory.prototype.strictMode = function (value) {
	        return this._isStrictMode = predicates_1.isDefined(value) ? value : this._isStrictMode;
	    };
	    /** @inheritdoc */
	    UrlMatcherFactory.prototype.defaultSquashPolicy = function (value) {
	        if (predicates_1.isDefined(value) && value !== true && value !== false && !predicates_1.isString(value))
	            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	        return this._defaultSquashPolicy = predicates_1.isDefined(value) ? value : this._defaultSquashPolicy;
	    };
	    /**
	     * Creates a [[UrlMatcher]] for the specified pattern.
	     *
	     * @param pattern  The URL pattern.
	     * @param config  The config object hash.
	     * @returns The UrlMatcher.
	     */
	    UrlMatcherFactory.prototype.compile = function (pattern, config) {
	        return new urlMatcher_1.UrlMatcher(pattern, this.paramTypes, this.paramFactory, this._getConfig(config));
	    };
	    /**
	     * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
	     *
	     * @param object  The object to perform the type check against.
	     * @returns `true` if the object matches the `UrlMatcher` interface, by
	     *          implementing all the same methods.
	     */
	    UrlMatcherFactory.prototype.isMatcher = function (object) {
	        // TODO: typeof?
	        if (!predicates_1.isObject(object))
	            return false;
	        var result = true;
	        common_1.forEach(urlMatcher_1.UrlMatcher.prototype, function (val, name) {
	            if (predicates_1.isFunction(val))
	                result = result && (predicates_1.isDefined(object[name]) && predicates_1.isFunction(object[name]));
	        });
	        return result;
	    };
	    ;
	    /**
	     * Creates and registers a custom [[ParamType]] object
	     *
	     * A [[ParamType]] can be used to generate URLs with typed parameters.
	     *
	     * @param name  The type name.
	     * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
	     * @param definitionFn A function that is injected before the app runtime starts.
	     *        The result of this function should be a [[ParamTypeDefinition]].
	     *        The result is merged into the existing `definition`.
	     *        See [[ParamType]] for information on the values accepted.
	     *
	     * @returns - if a type was registered: the [[UrlMatcherFactory]]
	     *   - if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
	     *
	     * Note: Register custom types *before using them* in a state definition.
	     *
	     * See [[ParamTypeDefinition]] for examples
	     */
	    UrlMatcherFactory.prototype.type = function (name, definition, definitionFn) {
	        var type = this.paramTypes.type(name, definition, definitionFn);
	        return !predicates_1.isDefined(definition) ? type : this;
	    };
	    ;
	    /** @hidden */
	    UrlMatcherFactory.prototype.$get = function () {
	        this.paramTypes.enqueue = false;
	        this.paramTypes._flushTypeQueue();
	        return this;
	    };
	    ;
	    /** @internalapi */
	    UrlMatcherFactory.prototype.dispose = function () {
	        this.paramTypes.dispose();
	    };
	    return UrlMatcherFactory;
	}());
	exports.UrlMatcherFactory = UrlMatcherFactory;
	//# sourceMappingURL=urlMatcherFactory.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module url
	 */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var predicates_1 = __webpack_require__(6);
	var param_1 = __webpack_require__(21);
	var strings_1 = __webpack_require__(11);
	/** @hidden */
	function quoteRegExp(string, param) {
	    var surroundPattern = ['', ''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!param)
	        return result;
	    switch (param.squash) {
	        case false:
	            surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
	            break;
	        case true:
	            result = result.replace(/\/$/, '');
	            surroundPattern = ['(?:\/(', ')|\/)?'];
	            break;
	        default:
	            surroundPattern = ["(" + param.squash + "|", ')?'];
	            break;
	    }
	    return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
	}
	/** @hidden */
	var memoizeTo = function (obj, prop, fn) {
	    return obj[prop] = obj[prop] || fn();
	};
	/**
	 * Matches URLs against patterns.
	 *
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL.
	 *
	 * A URL pattern consists of a path pattern, optionally followed by '?' and a list of search (query)
	 * parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by [[UrlMatcher.exec]].
	 *
	 * - *Path parameters* are defined using curly brace placeholders (`/somepath/{param}`)
	 * or colon placeholders (`/somePath/:param`).
	 *
	 * - *A parameter RegExp* may be defined for a param after a colon
	 * (`/somePath/{param:[a-zA-Z0-9]+}`) in a curly brace placeholder.
	 * The regexp must match for the url to be matched.
	 * Should the regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Note: a RegExp parameter will encode its value using either [[ParamTypes.path]] or [[ParamTypes.query]].
	 *
	 * - *Custom parameter types* may also be specified after a colon (`/somePath/{param:int}`) in curly brace parameters.
	 *   See [[UrlMatcherFactory.type]] for more information.
	 *
	 * - *Catch-all parameters* are defined using an asterisk placeholder (`/somepath/*catchallparam`).
	 *   A catch-all * parameter value will contain the remainder of the URL.
	 *
	 * ---
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters).
	 * A path parameter matches any number of characters other than '/'. For catch-all
	 * placeholders the path parameter matches any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` ParamType matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 */
	var UrlMatcher = (function () {
	    /**
	     * @param pattern The pattern to compile into a matcher.
	     * @param paramTypes The [[ParamTypes]] registry
	     * @param config  A configuration object
	     * - `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	     * - `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	     */
	    function UrlMatcher(pattern, paramTypes, paramFactory, config) {
	        var _this = this;
	        this.config = config;
	        /** @hidden */
	        this._cache = { path: [this], parent: null, pattern: null };
	        /** @hidden */
	        this._children = [];
	        /** @hidden */
	        this._params = [];
	        /** @hidden */
	        this._segments = [];
	        /** @hidden */
	        this._compiled = [];
	        this.pattern = pattern;
	        this.config = common_1.defaults(this.config, {
	            params: {},
	            strict: true,
	            caseInsensitive: false,
	            paramMap: common_1.identity
	        });
	        // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	        //   '*' name
	        //   ':' name
	        //   '{' name '}'
	        //   '{' name ':' regexp '}'
	        // The regular expression is somewhat complicated due to the need to allow curly braces
	        // inside the regular expression. The placeholder regexp breaks down as follows:
	        //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	        //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	        //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	        //    [^{}\\]+                       - anything other than curly braces or backslash
	        //    \\.                            - a backslash escape
	        //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	        var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, last = 0, m, patterns = [];
	        var checkParamErrors = function (id) {
	            if (!UrlMatcher.nameValidator.test(id))
	                throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	            if (common_1.find(_this._params, hof_1.propEq('id', id)))
	                throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	        };
	        // Split into static segments separated by path parameter placeholders.
	        // The number of segments is always 1 more than the number of parameters.
	        var matchDetails = function (m, isSearch) {
	            // IE[78] returns '' for unmatched groups instead of null
	            var id = m[2] || m[3];
	            var regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '.*' : null);
	            var makeRegexpType = function (regexp) { return common_1.inherit(paramTypes.type(isSearch ? "query" : "path"), {
	                pattern: new RegExp(regexp, _this.config.caseInsensitive ? 'i' : undefined)
	            }); };
	            return {
	                id: id,
	                regexp: regexp,
	                cfg: _this.config.params[id],
	                segment: pattern.substring(last, m.index),
	                type: !regexp ? null : paramTypes.type(regexp) || makeRegexpType(regexp)
	            };
	        };
	        var p, segment;
	        while ((m = placeholder.exec(pattern))) {
	            p = matchDetails(m, false);
	            if (p.segment.indexOf('?') >= 0)
	                break; // we're into the search part
	            checkParamErrors(p.id);
	            this._params.push(paramFactory.fromPath(p.id, p.type, this.config.paramMap(p.cfg, false)));
	            this._segments.push(p.segment);
	            patterns.push([p.segment, common_1.tail(this._params)]);
	            last = placeholder.lastIndex;
	        }
	        segment = pattern.substring(last);
	        // Find any search parameter names and remove them from the last segment
	        var i = segment.indexOf('?');
	        if (i >= 0) {
	            var search = segment.substring(i);
	            segment = segment.substring(0, i);
	            if (search.length > 0) {
	                last = 0;
	                while ((m = searchPlaceholder.exec(search))) {
	                    p = matchDetails(m, true);
	                    checkParamErrors(p.id);
	                    this._params.push(paramFactory.fromSearch(p.id, p.type, this.config.paramMap(p.cfg, true)));
	                    last = placeholder.lastIndex;
	                }
	            }
	        }
	        this._segments.push(segment);
	        this._compiled = patterns.map(function (pattern) { return quoteRegExp.apply(null, pattern); }).concat(quoteRegExp(segment));
	    }
	    /**
	     * Creates a new concatenated UrlMatcher
	     *
	     * Builds a new UrlMatcher by appending another UrlMatcher to this one.
	     *
	     * @param url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
	     */
	    UrlMatcher.prototype.append = function (url) {
	        this._children.push(url);
	        url._cache = {
	            path: this._cache.path.concat(url),
	            parent: this,
	            pattern: null,
	        };
	        return url;
	    };
	    /** @hidden */
	    UrlMatcher.prototype.isRoot = function () {
	        return this._cache.path[0] === this;
	    };
	    /** Returns the input pattern string */
	    UrlMatcher.prototype.toString = function () {
	        return this.pattern;
	    };
	    /**
	     * Tests the specified url/path against this matcher.
	     *
	     * Tests if the given url matches this matcher's pattern, and returns an object containing the captured
	     * parameter values.  Returns null if the path does not match.
	     *
	     * The returned object contains the values
	     * of any search parameters that are mentioned in the pattern, but their value may be null if
	     * they are not present in `search`. This means that search parameters are always treated
	     * as optional.
	     *
	     * #### Example:
	     * ```js
	     * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	     *   x: '1', q: 'hello'
	     * });
	     * // returns { id: 'bob', q: 'hello', r: null }
	     * ```
	     *
	     * @param path    The URL path to match, e.g. `$location.path()`.
	     * @param search  URL search parameters, e.g. `$location.search()`.
	     * @param hash    URL hash e.g. `$location.hash()`.
	     * @param options
	     *
	     * @returns The captured parameter values.
	     */
	    UrlMatcher.prototype.exec = function (path, search, hash, options) {
	        var _this = this;
	        if (search === void 0) { search = {}; }
	        if (options === void 0) { options = {}; }
	        var match = memoizeTo(this._cache, 'pattern', function () {
	            return new RegExp([
	                '^',
	                common_1.unnest(_this._cache.path.map(hof_1.prop('_compiled'))).join(''),
	                _this.config.strict === false ? '\/?' : '',
	                '$'
	            ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
	        }).exec(path);
	        if (!match)
	            return null;
	        //options = defaults(options, { isolate: false });
	        var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values = {};
	        if (nPathSegments !== match.length - 1)
	            throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
	        function decodePathArray(string) {
	            var reverseString = function (str) { return str.split("").reverse().join(""); };
	            var unquoteDashes = function (str) { return str.replace(/\\-/g, "-"); };
	            var split = reverseString(string).split(/-(?!\\)/);
	            var allReversed = common_1.map(split, reverseString);
	            return common_1.map(allReversed, unquoteDashes).reverse();
	        }
	        for (var i = 0; i < nPathSegments; i++) {
	            var param = pathParams[i];
	            var value = match[i + 1];
	            // if the param value matches a pre-replace pair, replace the value before decoding.
	            for (var j = 0; j < param.replace.length; j++) {
	                if (param.replace[j].from === value)
	                    value = param.replace[j].to;
	            }
	            if (value && param.array === true)
	                value = decodePathArray(value);
	            if (predicates_1.isDefined(value))
	                value = param.type.decode(value);
	            values[param.id] = param.value(value);
	        }
	        searchParams.forEach(function (param) {
	            var value = search[param.id];
	            for (var j = 0; j < param.replace.length; j++) {
	                if (param.replace[j].from === value)
	                    value = param.replace[j].to;
	            }
	            if (predicates_1.isDefined(value))
	                value = param.type.decode(value);
	            values[param.id] = param.value(value);
	        });
	        if (hash)
	            values["#"] = hash;
	        return values;
	    };
	    /**
	     * @hidden
	     * Returns all the [[Param]] objects of all path and search parameters of this pattern in order of appearance.
	     *
	     * @returns {Array.<Param>}  An array of [[Param]] objects. Must be treated as read-only. If the
	     *    pattern has no parameters, an empty array is returned.
	     */
	    UrlMatcher.prototype.parameters = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        if (opts.inherit === false)
	            return this._params;
	        return common_1.unnest(this._cache.path.map(hof_1.prop('_params')));
	    };
	    /**
	     * @hidden
	     * Returns a single parameter from this UrlMatcher by id
	     *
	     * @param id
	     * @param opts
	     * @returns {T|Param|any|boolean|UrlMatcher|null}
	     */
	    UrlMatcher.prototype.parameter = function (id, opts) {
	        if (opts === void 0) { opts = {}; }
	        var parent = this._cache.parent;
	        return (common_1.find(this._params, hof_1.propEq('id', id)) ||
	            (opts.inherit !== false && parent && parent.parameter(id, opts)) ||
	            null);
	    };
	    /**
	     * Validates the input parameter values against this UrlMatcher
	     *
	     * Checks an object hash of parameters to validate their correctness according to the parameter
	     * types of this `UrlMatcher`.
	     *
	     * @param params The object hash of parameters to validate.
	     * @returns Returns `true` if `params` validates, otherwise `false`.
	     */
	    UrlMatcher.prototype.validates = function (params) {
	        var _this = this;
	        var validParamVal = function (param, val) {
	            return !param || param.validates(val);
	        };
	        return common_1.pairs(params || {}).map(function (_a) {
	            var key = _a[0], val = _a[1];
	            return validParamVal(_this.parameter(key), val);
	        }).reduce(common_1.allTrueR, true);
	    };
	    /**
	     * Given a set of parameter values, creates a URL from this UrlMatcher.
	     *
	     * Creates a URL that matches this pattern by substituting the specified values
	     * for the path and search parameters.
	     *
	     * #### Example:
	     * ```js
	     * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	     * // returns '/user/bob?q=yes'
	     * ```
	     *
	     * @param values  the values to substitute for the parameters in this pattern.
	     * @returns the formatted URL (path and optionally search part).
	     */
	    UrlMatcher.prototype.format = function (values) {
	        if (values === void 0) { values = {}; }
	        if (!this.validates(values))
	            return null;
	        // Build the full path of UrlMatchers (including all parent UrlMatchers)
	        var urlMatchers = this._cache.path;
	        // Extract all the static segments and Params into an ordered array
	        var pathSegmentsAndParams = urlMatchers.map(UrlMatcher.pathSegmentsAndParams).reduce(common_1.unnestR, []);
	        // Extract the query params into a separate array
	        var queryParams = urlMatchers.map(UrlMatcher.queryParams).reduce(common_1.unnestR, []);
	        /**
	         * Given a Param,
	         * Applies the parameter value, then returns details about it
	         */
	        function getDetails(param) {
	            // Normalize to typed value
	            var value = param.value(values[param.id]);
	            var isDefaultValue = param.isDefaultValue(value);
	            // Check if we're in squash mode for the parameter
	            var squash = isDefaultValue ? param.squash : false;
	            // Allow the Parameter's Type to encode the value
	            var encoded = param.type.encode(value);
	            return { param: param, value: value, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
	        }
	        // Build up the path-portion from the list of static segments and parameters
	        var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
	            // The element is a static segment (a raw string); just append it
	            if (predicates_1.isString(x))
	                return acc + x;
	            // Otherwise, it's a Param.  Fetch details about the parameter value
	            var _a = getDetails(x), squash = _a.squash, encoded = _a.encoded, param = _a.param;
	            // If squash is === true, try to remove a slash from the path
	            if (squash === true)
	                return (acc.match(/\/$/)) ? acc.slice(0, -1) : acc;
	            // If squash is a string, use the string for the param value
	            if (predicates_1.isString(squash))
	                return acc + squash;
	            if (squash !== false)
	                return acc; // ?
	            if (encoded == null)
	                return acc;
	            // If this parameter value is an array, encode the value using encodeDashes
	            if (predicates_1.isArray(encoded))
	                return acc + common_1.map(encoded, UrlMatcher.encodeDashes).join("-");
	            // If the parameter type is "raw", then do not encodeURIComponent
	            if (param.raw)
	                return acc + encoded;
	            // Encode the value
	            return acc + encodeURIComponent(encoded);
	        }, "");
	        // Build the query string by applying parameter values (array or regular)
	        // then mapping to key=value, then flattening and joining using "&"
	        var queryString = queryParams.map(function (param) {
	            var _a = getDetails(param), squash = _a.squash, encoded = _a.encoded, isDefaultValue = _a.isDefaultValue;
	            if (encoded == null || (isDefaultValue && squash !== false))
	                return;
	            if (!predicates_1.isArray(encoded))
	                encoded = [encoded];
	            if (encoded.length === 0)
	                return;
	            if (!param.raw)
	                encoded = common_1.map(encoded, encodeURIComponent);
	            return encoded.map(function (val) { return param.id + "=" + val; });
	        }).filter(common_1.identity).reduce(common_1.unnestR, []).join("&");
	        // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
	        return pathString + (queryString ? "?" + queryString : "") + (values["#"] ? "#" + values["#"] : "");
	    };
	    /** @hidden */
	    UrlMatcher.encodeDashes = function (str) {
	        return encodeURIComponent(str).replace(/-/g, function (c) { return "%5C%" + c.charCodeAt(0).toString(16).toUpperCase(); });
	    };
	    /** @hidden Given a matcher, return an array with the matcher's path segments and path params, in order */
	    UrlMatcher.pathSegmentsAndParams = function (matcher) {
	        var staticSegments = matcher._segments;
	        var pathParams = matcher._params.filter(function (p) { return p.location === param_1.DefType.PATH; });
	        return common_1.arrayTuples(staticSegments, pathParams.concat(undefined))
	            .reduce(common_1.unnestR, [])
	            .filter(function (x) { return x !== "" && predicates_1.isDefined(x); });
	    };
	    /** @hidden Given a matcher, return an array with the matcher's query params */
	    UrlMatcher.queryParams = function (matcher) {
	        return matcher._params.filter(function (p) { return p.location === param_1.DefType.SEARCH; });
	    };
	    /**
	     * Compare two UrlMatchers
	     *
	     * This comparison function converts a UrlMatcher into static and dynamic path segments.
	     * Each static path segment is a static string between a path separator (slash character).
	     * Each dynamic segment is a path parameter.
	     *
	     * The comparison function sorts static segments before dynamic ones.
	     */
	    UrlMatcher.compare = function (a, b) {
	        var splitOnSlash = strings_1.splitOnDelim('/');
	        /**
	         * Turn a UrlMatcher and all its parent matchers into an array
	         * of slash literals '/', string literals, and Param objects
	         *
	         * This example matcher matches strings like "/foo/:param/tail":
	         * var matcher = $umf.compile("/foo").append($umf.compile("/:param")).append($umf.compile("/")).append($umf.compile("tail"));
	         * var result = segments(matcher); // [ '/', 'foo', '/', Param, '/', 'tail' ]
	         *
	         */
	        var segments = function (matcher) {
	            return matcher._cache.path.map(UrlMatcher.pathSegmentsAndParams)
	                .reduce(common_1.unnestR, [])
	                .reduce(strings_1.joinNeighborsR, [])
	                .map(function (x) { return predicates_1.isString(x) ? splitOnSlash(x) : x; })
	                .reduce(common_1.unnestR, []);
	        };
	        var aSegments = segments(a), bSegments = segments(b);
	        // console.table( { aSegments, bSegments });
	        // Sort slashes first, then static strings, the Params
	        var weight = hof_1.pattern([
	            [hof_1.eq("/"), hof_1.val(1)],
	            [predicates_1.isString, hof_1.val(2)],
	            [hof_1.is(param_1.Param), hof_1.val(3)]
	        ]);
	        var pairs = common_1.arrayTuples(aSegments.map(weight), bSegments.map(weight));
	        // console.table(pairs);
	        return pairs.reduce(function (cmp, weightPair) { return cmp !== 0 ? cmp : weightPair[0] - weightPair[1]; }, 0);
	    };
	    return UrlMatcher;
	}());
	/** @hidden */
	UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
	exports.UrlMatcher = UrlMatcher;
	//# sourceMappingURL=urlMatcher.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module params
	 */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var hof_1 = __webpack_require__(7);
	var coreservices_1 = __webpack_require__(8);
	var paramType_1 = __webpack_require__(22);
	/**
	 * A registry for parameter types.
	 *
	 * This registry manages the built-in (and custom) parameter types.
	 *
	 * The built-in parameter types are:
	 *
	 * - [[string]]
	 * - [[path]]
	 * - [[query]]
	 * - [[hash]]
	 * - [[int]]
	 * - [[bool]]
	 * - [[date]]
	 * - [[json]]
	 * - [[any]]
	 */
	var ParamTypes = (function () {
	    /** @internalapi */
	    function ParamTypes() {
	        /** @hidden */
	        this.enqueue = true;
	        /** @hidden */
	        this.typeQueue = [];
	        /** @internalapi */
	        this.defaultTypes = common_1.pick(ParamTypes.prototype, "hash", "string", "query", "path", "int", "bool", "date", "json", "any");
	        // Register default types. Store them in the prototype of this.types.
	        var makeType = function (definition, name) {
	            return new paramType_1.ParamType(common_1.extend({ name: name }, definition));
	        };
	        this.types = common_1.inherit(common_1.map(this.defaultTypes, makeType), {});
	    }
	    /** @internalapi */
	    ParamTypes.prototype.dispose = function () {
	        this.types = {};
	    };
	    /**
	     * Registers a parameter type
	     *
	     * End users should call [[UrlMatcherFactory.type]], which delegates to this method.
	     */
	    ParamTypes.prototype.type = function (name, definition, definitionFn) {
	        if (!predicates_1.isDefined(definition))
	            return this.types[name];
	        if (this.types.hasOwnProperty(name))
	            throw new Error("A type named '" + name + "' has already been defined.");
	        this.types[name] = new paramType_1.ParamType(common_1.extend({ name: name }, definition));
	        if (definitionFn) {
	            this.typeQueue.push({ name: name, def: definitionFn });
	            if (!this.enqueue)
	                this._flushTypeQueue();
	        }
	        return this;
	    };
	    /** @internalapi */
	    ParamTypes.prototype._flushTypeQueue = function () {
	        while (this.typeQueue.length) {
	            var type = this.typeQueue.shift();
	            if (type.pattern)
	                throw new Error("You cannot override a type's .pattern at runtime.");
	            common_1.extend(this.types[type.name], coreservices_1.services.$injector.invoke(type.def));
	        }
	    };
	    return ParamTypes;
	}());
	exports.ParamTypes = ParamTypes;
	/** @hidden */
	function initDefaultTypes() {
	    var makeDefaultType = function (def) {
	        var valToString = function (val) {
	            return val != null ? val.toString() : val;
	        };
	        var defaultTypeBase = {
	            encode: valToString,
	            decode: valToString,
	            is: hof_1.is(String),
	            pattern: /.*/,
	            equals: function (a, b) { return a == b; },
	        };
	        return common_1.extend({}, defaultTypeBase, def);
	    };
	    // Default Parameter Type Definitions
	    common_1.extend(ParamTypes.prototype, {
	        string: makeDefaultType({}),
	        path: makeDefaultType({
	            pattern: /[^/]*/,
	        }),
	        query: makeDefaultType({}),
	        hash: makeDefaultType({
	            inherit: false,
	        }),
	        int: makeDefaultType({
	            decode: function (val) { return parseInt(val, 10); },
	            is: function (val) {
	                return !predicates_1.isNullOrUndefined(val) && this.decode(val.toString()) === val;
	            },
	            pattern: /-?\d+/,
	        }),
	        bool: makeDefaultType({
	            encode: function (val) { return val && 1 || 0; },
	            decode: function (val) { return parseInt(val, 10) !== 0; },
	            is: hof_1.is(Boolean),
	            pattern: /0|1/
	        }),
	        date: makeDefaultType({
	            encode: function (val) {
	                return !this.is(val) ? undefined : [
	                    val.getFullYear(),
	                    ('0' + (val.getMonth() + 1)).slice(-2),
	                    ('0' + val.getDate()).slice(-2)
	                ].join("-");
	            },
	            decode: function (val) {
	                if (this.is(val))
	                    return val;
	                var match = this.capture.exec(val);
	                return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	            },
	            is: function (val) { return val instanceof Date && !isNaN(val.valueOf()); },
	            equals: function (l, r) {
	                return ['getFullYear', 'getMonth', 'getDate']
	                    .reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
	            },
	            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	        }),
	        json: makeDefaultType({
	            encode: common_1.toJson,
	            decode: common_1.fromJson,
	            is: hof_1.is(Object),
	            equals: common_1.equals,
	            pattern: /[^/]*/
	        }),
	        // does not encode/decode
	        any: makeDefaultType({
	            encode: common_1.identity,
	            decode: common_1.identity,
	            is: function () { return true; },
	            equals: common_1.equals,
	        }),
	    });
	}
	initDefaultTypes();
	//# sourceMappingURL=paramTypes.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module url
	 */
	/** for typedoc */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var urlMatcher_1 = __webpack_require__(29);
	var hof_1 = __webpack_require__(7);
	var urlRule_1 = __webpack_require__(32);
	var targetState_1 = __webpack_require__(17);
	/** @hidden */
	function appendBasePath(url, isHtml5, absolute, baseHref) {
	    if (baseHref === '/')
	        return url;
	    if (isHtml5)
	        return baseHref.slice(0, -1) + url;
	    if (absolute)
	        return baseHref.slice(1) + url;
	    return url;
	}
	/** @hidden */
	var getMatcher = hof_1.prop("urlMatcher");
	/**
	 * Default rule priority sorting function.
	 *
	 * Sorts rules by:
	 *
	 * - Explicit priority (set rule priority using [[UrlRulesApi.when]])
	 * - Rule type (STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1)
	 * - `UrlMatcher` specificity ([[UrlMatcher.compare]]): works for STATE and URLMATCHER types to pick the most specific rule.
	 * - Registration order (for rule types other than STATE and URLMATCHER)
	 *
	 * @coreapi
	 */
	var defaultRuleSortFn;
	defaultRuleSortFn = common_1.composeSort(common_1.sortBy(hof_1.pipe(hof_1.prop("priority"), function (x) { return -x; })), common_1.sortBy(hof_1.pipe(hof_1.prop("type"), function (type) { return ({ "STATE": 4, "URLMATCHER": 4, "REGEXP": 3, "RAW": 2, "OTHER": 1 })[type]; })), function (a, b) { return (getMatcher(a) && getMatcher(b)) ? urlMatcher_1.UrlMatcher.compare(getMatcher(a), getMatcher(b)) : 0; }, common_1.sortBy(hof_1.prop("$id"), common_1.inArray(["REGEXP", "RAW", "OTHER"])));
	/**
	 * Updates URL and responds to URL changes
	 *
	 * ### Deprecation warning:
	 * This class is now considered to be an internal API
	 * Use the [[UrlService]] instead.
	 * For configuring URL rules, use the [[UrlRulesApi]] which can be found as [[UrlService.rules]].
	 *
	 * This class updates the URL when the state changes.
	 * It also responds to changes in the URL.
	 */
	var UrlRouter = (function () {
	    /** @hidden */
	    function UrlRouter(router) {
	        /** @hidden */ this._sortFn = defaultRuleSortFn;
	        /** @hidden */ this._rules = [];
	        /** @hidden */ this.interceptDeferred = false;
	        /** @hidden */ this._id = 0;
	        this._router = router;
	        this.urlRuleFactory = new urlRule_1.UrlRuleFactory(router);
	        common_1.createProxyFunctions(hof_1.val(UrlRouter.prototype), this, hof_1.val(this));
	    }
	    /** @internalapi */
	    UrlRouter.prototype.dispose = function () {
	        this.listen(false);
	        this._rules = [];
	        delete this._otherwiseFn;
	    };
	    /** @inheritdoc */
	    UrlRouter.prototype.sort = function (compareFn) {
	        this._rules.sort(this._sortFn = compareFn || this._sortFn);
	    };
	    /**
	     * Given a URL, check all rules and return the best [[MatchResult]]
	     * @param url
	     * @returns {MatchResult}
	     */
	    UrlRouter.prototype.match = function (url) {
	        var _this = this;
	        url = common_1.extend({ path: '', search: {}, hash: '' }, url);
	        var rules = this.rules();
	        if (this._otherwiseFn)
	            rules.push(this._otherwiseFn);
	        // Checks a single rule. Returns { rule: rule, match: match, weight: weight } if it matched, or undefined
	        var checkRule = function (rule) {
	            var match = rule.match(url, _this._router);
	            return match && { match: match, rule: rule, weight: rule.matchPriority(match) };
	        };
	        // The rules are pre-sorted.
	        // - Find the first matching rule.
	        // - Find any other matching rule that sorted *exactly the same*, according to `.sort()`.
	        // - Choose the rule with the highest match weight.
	        var best;
	        for (var i = 0; i < rules.length; i++) {
	            // Stop when there is a 'best' rule and the next rule sorts differently than it.
	            if (best && this._sortFn(rules[i], best.rule) !== 0)
	                break;
	            var current = checkRule(rules[i]);
	            // Pick the best MatchResult
	            best = (!best || current && current.weight > best.weight) ? current : best;
	        }
	        return best;
	    };
	    /** @inheritdoc */
	    UrlRouter.prototype.sync = function (evt) {
	        if (evt && evt.defaultPrevented)
	            return;
	        var router = this._router, $url = router.urlService, $state = router.stateService;
	        var url = {
	            path: $url.path(), search: $url.search(), hash: $url.hash()
	        };
	        var best = this.match(url);
	        var applyResult = hof_1.pattern([
	            [predicates_1.isString, function (newurl) { return $url.url(newurl, true); }],
	            [targetState_1.TargetState.isDef, function (def) { return $state.go(def.state, def.params, def.options); }],
	            [hof_1.is(targetState_1.TargetState), function (target) { return $state.go(target.state(), target.params(), target.options()); }],
	        ]);
	        applyResult(best && best.rule.handler(best.match, url, router));
	    };
	    /** @inheritdoc */
	    UrlRouter.prototype.listen = function (enabled) {
	        var _this = this;
	        if (enabled === false) {
	            this._stopFn && this._stopFn();
	            delete this._stopFn;
	        }
	        else {
	            return this._stopFn = this._stopFn || this._router.urlService.onChange(function (evt) { return _this.sync(evt); });
	        }
	    };
	    /**
	     * Internal API.
	     * @internalapi
	     */
	    UrlRouter.prototype.update = function (read) {
	        var $url = this._router.locationService;
	        if (read) {
	            this.location = $url.path();
	            return;
	        }
	        if ($url.path() === this.location)
	            return;
	        $url.url(this.location, true);
	    };
	    /**
	     * Internal API.
	     *
	     * Pushes a new location to the browser history.
	     *
	     * @internalapi
	     * @param urlMatcher
	     * @param params
	     * @param options
	     */
	    UrlRouter.prototype.push = function (urlMatcher, params, options) {
	        var replace = options && !!options.replace;
	        this._router.urlService.url(urlMatcher.format(params || {}), replace);
	    };
	    /**
	     * Builds and returns a URL with interpolated parameters
	     *
	     * #### Example:
	     * ```js
	     * matcher = $umf.compile("/about/:person");
	     * params = { person: "bob" };
	     * $bob = $urlRouter.href(matcher, params);
	     * // $bob == "/about/bob";
	     * ```
	     *
	     * @param urlMatcher The [[UrlMatcher]] object which is used as the template of the URL to generate.
	     * @param params An object of parameter values to fill the matcher's required parameters.
	     * @param options Options object. The options are:
	     *
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     *
	     * @returns Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	     */
	    UrlRouter.prototype.href = function (urlMatcher, params, options) {
	        if (!urlMatcher.validates(params))
	            return null;
	        var url = urlMatcher.format(params);
	        options = options || { absolute: false };
	        var cfg = this._router.urlService.config;
	        var isHtml5 = cfg.html5Mode();
	        if (!isHtml5 && url !== null) {
	            url = "#" + cfg.hashPrefix() + url;
	        }
	        url = appendBasePath(url, isHtml5, options.absolute, cfg.baseHref());
	        if (!options.absolute || !url) {
	            return url;
	        }
	        var slash = (!isHtml5 && url ? '/' : ''), port = cfg.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);
	        return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
	    };
	    /**
	     * Manually adds a URL Rule.
	     *
	     * Usually, a url rule is added using [[StateDeclaration.url]] or [[when]].
	     * This api can be used directly for more control (to register a [[BaseUrlRule]], for example).
	     * Rules can be created using [[UrlRouter.urlRuleFactory]], or create manually as simple objects.
	     *
	     * A rule should have a `match` function which returns truthy if the rule matched.
	     * It should also have a `handler` function which is invoked if the rule is the best match.
	     *
	     * @return a function that deregisters the rule
	     */
	    UrlRouter.prototype.rule = function (rule) {
	        var _this = this;
	        if (!urlRule_1.UrlRuleFactory.isUrlRule(rule))
	            throw new Error("invalid rule");
	        rule.$id = this._id++;
	        rule.priority = rule.priority || 0;
	        this._rules.push(rule);
	        this.sort();
	        return function () { return _this.removeRule(rule); };
	    };
	    /** @inheritdoc */
	    UrlRouter.prototype.removeRule = function (rule) {
	        common_1.removeFrom(this._rules, rule);
	        this.sort();
	    };
	    /** @inheritdoc */
	    UrlRouter.prototype.rules = function () { return this._rules.slice(); };
	    /** @inheritdoc */
	    UrlRouter.prototype.otherwise = function (handler) {
	        if (!predicates_1.isFunction(handler) && !predicates_1.isString(handler) && !hof_1.is(targetState_1.TargetState)(handler) && !targetState_1.TargetState.isDef(handler)) {
	            throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
	        }
	        var handlerFn = predicates_1.isFunction(handler) ? handler : hof_1.val(handler);
	        this._otherwiseFn = this.urlRuleFactory.create(hof_1.val(true), handlerFn);
	        this.sort();
	    };
	    ;
	    /** @inheritdoc */
	    UrlRouter.prototype.when = function (matcher, handler, options) {
	        var rule = this.urlRuleFactory.create(matcher, handler);
	        if (predicates_1.isDefined(options && options.priority))
	            rule.priority = options.priority;
	        this.rule(rule);
	        return rule;
	    };
	    ;
	    /** @inheritdoc */
	    UrlRouter.prototype.deferIntercept = function (defer) {
	        if (defer === undefined)
	            defer = true;
	        this.interceptDeferred = defer;
	    };
	    ;
	    return UrlRouter;
	}());
	exports.UrlRouter = UrlRouter;
	//# sourceMappingURL=urlRouter.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module url
	 */ /** */
	var urlMatcher_1 = __webpack_require__(29);
	var predicates_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var stateObject_1 = __webpack_require__(33);
	/**
	 * Creates a [[UrlRule]]
	 *
	 * Creates a [[UrlRule]] from a:
	 *
	 * - `string`
	 * - [[UrlMatcher]]
	 * - `RegExp`
	 * - [[State]]
	 * @internalapi
	 */
	var UrlRuleFactory = (function () {
	    function UrlRuleFactory(router) {
	        this.router = router;
	    }
	    UrlRuleFactory.prototype.compile = function (str) {
	        return this.router.urlMatcherFactory.compile(str);
	    };
	    UrlRuleFactory.prototype.create = function (what, handler) {
	        var _this = this;
	        var makeRule = hof_1.pattern([
	            [predicates_1.isString, function (_what) { return makeRule(_this.compile(_what)); }],
	            [hof_1.is(urlMatcher_1.UrlMatcher), function (_what) { return _this.fromUrlMatcher(_what, handler); }],
	            [hof_1.is(stateObject_1.State), function (_what) { return _this.fromState(_what, _this.router); }],
	            [hof_1.is(RegExp), function (_what) { return _this.fromRegExp(_what, handler); }],
	            [predicates_1.isFunction, function (_what) { return new BaseUrlRule(_what, handler); }],
	        ]);
	        var rule = makeRule(what);
	        if (!rule)
	            throw new Error("invalid 'what' in when()");
	        return rule;
	    };
	    /**
	     * A UrlRule which matches based on a UrlMatcher
	     *
	     * The `handler` may be either a `string`, a [[UrlRuleHandlerFn]] or another [[UrlMatcher]]
	     *
	     * ## Handler as a function
	     *
	     * If `handler` is a function, the function is invoked with:
	     *
	     * - matched parameter values ([[RawParams]] from [[UrlMatcher.exec]])
	     * - url: the current Url ([[UrlParts]])
	     * - router: the router object ([[UIRouter]])
	     *
	     * #### Example:
	     * ```js
	     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
	     * var rule = factory.fromUrlMatcher(urlMatcher, match => "/home/" + match.fooId + "/" + match.barId);
	     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
	     * var result = rule.handler(match); // '/home/123/456'
	     * ```
	     *
	     * ## Handler as UrlMatcher
	     *
	     * If `handler` is a UrlMatcher, the handler matcher is used to create the new url.
	     * The `handler` UrlMatcher is formatted using the matched param from the first matcher.
	     * The url is replaced with the result.
	     *
	     * #### Example:
	     * ```js
	     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
	     * var handler = $umf.compile("/home/:fooId/:barId");
	     * var rule = factory.fromUrlMatcher(urlMatcher, handler);
	     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
	     * var result = rule.handler(match); // '/home/123/456'
	     * ```
	     */
	    UrlRuleFactory.prototype.fromUrlMatcher = function (urlMatcher, handler) {
	        var _handler = handler;
	        if (predicates_1.isString(handler))
	            handler = this.router.urlMatcherFactory.compile(handler);
	        if (hof_1.is(urlMatcher_1.UrlMatcher)(handler))
	            _handler = function (match) { return handler.format(match); };
	        function match(url) {
	            var match = urlMatcher.exec(url.path, url.search, url.hash);
	            return urlMatcher.validates(match) && match;
	        }
	        // Prioritize URLs, lowest to highest:
	        // - Some optional URL parameters, but none matched
	        // - No optional parameters in URL
	        // - Some optional parameters, some matched
	        // - Some optional parameters, all matched
	        function matchPriority(params) {
	            var optional = urlMatcher.parameters().filter(function (param) { return param.isOptional; });
	            if (!optional.length)
	                return 0.000001;
	            var matched = optional.filter(function (param) { return params[param.id]; });
	            return matched.length / optional.length;
	        }
	        var details = { urlMatcher: urlMatcher, matchPriority: matchPriority, type: "URLMATCHER" };
	        return common_1.extend(new BaseUrlRule(match, _handler), details);
	    };
	    /**
	     * A UrlRule which matches a state by its url
	     *
	     * #### Example:
	     * ```js
	     * var rule = factory.fromState($state.get('foo'), router);
	     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
	     * var result = rule.handler(match);
	     * // Starts a transition to 'foo' with params: { fooId: '123', barId: '456' }
	     * ```
	     */
	    UrlRuleFactory.prototype.fromState = function (state, router) {
	        /**
	         * Handles match by transitioning to matched state
	         *
	         * First checks if the router should start a new transition.
	         * A new transition is not required if the current state's URL
	         * and the new URL are already identical
	         */
	        var handler = function (match) {
	            var $state = router.stateService;
	            var globals = router.globals;
	            if ($state.href(state, match) !== $state.href(globals.current, globals.params)) {
	                $state.transitionTo(state, match, { inherit: true, source: "url" });
	            }
	        };
	        var details = { state: state, type: "STATE" };
	        return common_1.extend(this.fromUrlMatcher(state.url, handler), details);
	    };
	    /**
	     * A UrlRule which matches based on a regular expression
	     *
	     * The `handler` may be either a [[UrlRuleHandlerFn]] or a string.
	     *
	     * ## Handler as a function
	     *
	     * If `handler` is a function, the function is invoked with:
	     *
	     * - regexp match array (from `regexp`)
	     * - url: the current Url ([[UrlParts]])
	     * - router: the router object ([[UIRouter]])
	     *
	     * #### Example:
	     * ```js
	     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, match => "/home/" + match[1])
	     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
	     * var result = rule.handler(match); // '/home/bar'
	     * ```
	     *
	     * ## Handler as string
	     *
	     * If `handler` is a string, the url is *replaced by the string* when the Rule is invoked.
	     * The string is first interpolated using `string.replace()` style pattern.
	     *
	     * #### Example:
	     * ```js
	     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, "/home/$1")
	     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
	     * var result = rule.handler(match); // '/home/bar'
	     * ```
	     */
	    UrlRuleFactory.prototype.fromRegExp = function (regexp, handler) {
	        if (regexp.global || regexp.sticky)
	            throw new Error("Rule RegExp must not be global or sticky");
	        /**
	         * If handler is a string, the url will be replaced by the string.
	         * If the string has any String.replace() style variables in it (like `$2`),
	         * they will be replaced by the captures from [[match]]
	         */
	        var redirectUrlTo = function (match) {
	            // Interpolates matched values into $1 $2, etc using a String.replace()-style pattern
	            return handler.replace(/\$(\$|\d{1,2})/, function (m, what) {
	                return match[what === '$' ? 0 : Number(what)];
	            });
	        };
	        var _handler = predicates_1.isString(handler) ? redirectUrlTo : handler;
	        var match = function (url) {
	            return regexp.exec(url.path);
	        };
	        var details = { regexp: regexp, type: "REGEXP" };
	        return common_1.extend(new BaseUrlRule(match, _handler), details);
	    };
	    return UrlRuleFactory;
	}());
	UrlRuleFactory.isUrlRule = function (obj) {
	    return obj && ['type', 'match', 'handler'].every(function (key) { return predicates_1.isDefined(obj[key]); });
	};
	exports.UrlRuleFactory = UrlRuleFactory;
	/**
	 * A base rule which calls `match`
	 *
	 * The value from the `match` function is passed through to the `handler`.
	 * @internalapi
	 */
	var BaseUrlRule = (function () {
	    function BaseUrlRule(match, handler) {
	        var _this = this;
	        this.match = match;
	        this.type = "RAW";
	        this.matchPriority = function (match) { return 0 - _this.$id; };
	        this.handler = handler || common_1.identity;
	    }
	    return BaseUrlRule;
	}());
	exports.BaseUrlRule = BaseUrlRule;
	//# sourceMappingURL=urlRule.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @coreapi
	 * @module state
	 */ /** for typedoc */
	"use strict";
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	/**
	 * Internal representation of a UI-Router state.
	 *
	 * Instances of this class are created when a [[StateDeclaration]] is registered with the [[StateRegistry]].
	 *
	 * A registered [[StateDeclaration]] is augmented with a getter ([[StateDeclaration.$$state]]) which returns the corresponding [[State]] object.
	 *
	 * This class prototypally inherits from the corresponding [[StateDeclaration]].
	 * Each of its own properties (i.e., `hasOwnProperty`) are built using builders from the [[StateBuilder]].
	 */
	var State = (function () {
	    function State(config) {
	        common_1.extend(this, config);
	        // Object.freeze(this);
	    }
	    /**
	     * Returns true if the provided parameter is the same state.
	     *
	     * Compares the identity of the state against the passed value, which is either an object
	     * reference to the actual `State` instance, the original definition object passed to
	     * `$stateProvider.state()`, or the fully-qualified name.
	     *
	     * @param ref Can be one of (a) a `State` instance, (b) an object that was passed
	     *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
	     * @returns Returns `true` if `ref` matches the current `State` instance.
	     */
	    State.prototype.is = function (ref) {
	        return this === ref || this.self === ref || this.fqn() === ref;
	    };
	    /**
	     * @deprecated this does not properly handle dot notation
	     * @returns Returns a dot-separated name of the state.
	     */
	    State.prototype.fqn = function () {
	        if (!this.parent || !(this.parent instanceof this.constructor))
	            return this.name;
	        var name = this.parent.fqn();
	        return name ? name + "." + this.name : this.name;
	    };
	    /**
	     * Returns the root node of this state's tree.
	     *
	     * @returns The root of this state's tree.
	     */
	    State.prototype.root = function () {
	        return this.parent && this.parent.root() || this;
	    };
	    /**
	     * Gets the state's `Param`eters
	     *
	     * Gets [[Param]] information that is owned by the state.
	     * If `opts.inherit` is true, it also includes the ancestor states' [[Param]] information.
	     * If `opts.matchingKeys` exists, returns only `Param`s whose `id` is a key on the `matchingKeys` object
	     *
	     * @param opts options
	     */
	    State.prototype.parameters = function (opts) {
	        opts = common_1.defaults(opts, { inherit: true, matchingKeys: null });
	        var inherited = opts.inherit && this.parent && this.parent.parameters() || [];
	        return inherited.concat(common_1.values(this.params))
	            .filter(function (param) { return !opts.matchingKeys || opts.matchingKeys.hasOwnProperty(param.id); });
	    };
	    /**
	     * Returns a single [[Param]] that is owned by the state
	     *
	     * If `opts.inherit` is true, it also searches the ancestor states` [[Param]] information.
	     * @param id the name of the [[Param]] to return
	     * @param opts options
	     */
	    State.prototype.parameter = function (id, opts) {
	        if (opts === void 0) { opts = {}; }
	        return (this.url && this.url.parameter(id, opts) ||
	            common_1.find(common_1.values(this.params), hof_1.propEq('id', id)) ||
	            opts.inherit && this.parent && this.parent.parameter(id));
	    };
	    State.prototype.toString = function () {
	        return this.fqn();
	    };
	    return State;
	}());
	exports.State = State;
	//# sourceMappingURL=stateObject.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module transition
	 */ /** for typedoc */
	var interface_1 = __webpack_require__(15);
	var transition_1 = __webpack_require__(13);
	var hookRegistry_1 = __webpack_require__(18);
	var resolve_1 = __webpack_require__(35);
	var views_1 = __webpack_require__(36);
	var url_1 = __webpack_require__(37);
	var redirectTo_1 = __webpack_require__(38);
	var onEnterExitRetain_1 = __webpack_require__(39);
	var lazyLoad_1 = __webpack_require__(40);
	var transitionEventType_1 = __webpack_require__(41);
	var transitionHook_1 = __webpack_require__(16);
	var predicates_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	/**
	 * The default [[Transition]] options.
	 *
	 * Include this object when applying custom defaults:
	 * let reloadOpts = { reload: true, notify: true }
	 * let options = defaults(theirOpts, customDefaults, defaultOptions);
	 */
	exports.defaultTransOpts = {
	    location: true,
	    relative: null,
	    inherit: false,
	    notify: true,
	    reload: false,
	    custom: {},
	    current: function () { return null; },
	    source: "unknown"
	};
	/**
	 * This class provides services related to Transitions.
	 *
	 * - Most importantly, it allows global Transition Hooks to be registered.
	 * - It allows the default transition error handler to be set.
	 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
	 *
	 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
	 */
	var TransitionService = (function () {
	    /** @hidden */
	    function TransitionService(_router) {
	        /** @hidden */
	        this._transitionCount = 0;
	        /** @hidden The transition hook types, such as `onEnter`, `onStart`, etc */
	        this._eventTypes = [];
	        /** @hidden The registered transition hooks */
	        this._registeredHooks = {};
	        /** @hidden The  paths on a criteria object */
	        this._criteriaPaths = {};
	        this._router = _router;
	        this.$view = _router.viewService;
	        this._deregisterHookFns = {};
	        this._pluginapi = common_1.createProxyFunctions(hof_1.val(this), {}, hof_1.val(this), [
	            '_definePathType',
	            '_defineEvent',
	            '_getPathTypes',
	            '_getEvents',
	            'getHooks',
	        ]);
	        this._defineDefaultPaths();
	        this._defineDefaultEvents();
	        this._registerDefaultTransitionHooks();
	    }
	    /**
	     * Registers a [[TransitionHookFn]], called *while a transition is being constructed*.
	     *
	     * Registers a transition lifecycle hook, which is invoked during transition construction.
	     *
	     * This low level hook should only be used by plugins.
	     * This can be a useful time for plugins to add resolves or mutate the transition as needed.
	     * The Sticky States plugin uses this hook to modify the treechanges.
	     *
	     * ### Lifecycle
	     *
	     * `onCreate` hooks are invoked *while a transition is being constructed*.
	     *
	     * ### Return value
	     *
	     * The hook's return value is ignored
	     *
	     * @internalapi
	     * @param criteria defines which Transitions the Hook should be invoked for.
	     * @param callback the hook function which will be invoked.
	     * @param options the registration options
	     * @returns a function which deregisters the hook.
	     */
	    TransitionService.prototype.onCreate = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onBefore = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onStart = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onExit = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onRetain = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onEnter = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onFinish = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onSuccess = function (criteria, callback, options) { return; };
	    /** @inheritdoc */
	    TransitionService.prototype.onError = function (criteria, callback, options) { return; };
	    /**
	     * dispose
	     * @internalapi
	     */
	    TransitionService.prototype.dispose = function (router) {
	        delete router.globals.transition;
	        common_1.values(this._registeredHooks).forEach(function (hooksArray) { return hooksArray.forEach(function (hook) {
	            hook._deregistered = true;
	            common_1.removeFrom(hooksArray, hook);
	        }); });
	    };
	    /**
	     * Creates a new [[Transition]] object
	     *
	     * This is a factory function for creating new Transition objects.
	     * It is used internally by the [[StateService]] and should generally not be called by application code.
	     *
	     * @param fromPath the path to the current state (the from state)
	     * @param targetState the target state (destination)
	     * @returns a Transition
	     */
	    TransitionService.prototype.create = function (fromPath, targetState) {
	        return new transition_1.Transition(fromPath, targetState, this._router);
	    };
	    /** @hidden */
	    TransitionService.prototype._defineDefaultEvents = function () {
	        var Phase = interface_1.TransitionHookPhase;
	        var TH = transitionHook_1.TransitionHook;
	        var paths = this._criteriaPaths;
	        this._defineEvent("onCreate", Phase.CREATE, 0, paths.to, false, TH.IGNORE_RESULT, TH.THROW_ERROR, false);
	        this._defineEvent("onBefore", Phase.BEFORE, 0, paths.to, false, TH.HANDLE_RESULT);
	        this._defineEvent("onStart", Phase.ASYNC, 0, paths.to);
	        this._defineEvent("onExit", Phase.ASYNC, 100, paths.exiting, true);
	        this._defineEvent("onRetain", Phase.ASYNC, 200, paths.retained);
	        this._defineEvent("onEnter", Phase.ASYNC, 300, paths.entering);
	        this._defineEvent("onFinish", Phase.ASYNC, 400, paths.to);
	        this._defineEvent("onSuccess", Phase.SUCCESS, 0, paths.to, false, TH.IGNORE_RESULT, TH.LOG_ERROR, false);
	        this._defineEvent("onError", Phase.ERROR, 0, paths.to, false, TH.IGNORE_RESULT, TH.LOG_ERROR, false);
	    };
	    /** @hidden */
	    TransitionService.prototype._defineDefaultPaths = function () {
	        var STATE = interface_1.TransitionHookScope.STATE, TRANSITION = interface_1.TransitionHookScope.TRANSITION;
	        this._definePathType("to", TRANSITION);
	        this._definePathType("from", TRANSITION);
	        this._definePathType("exiting", STATE);
	        this._definePathType("retained", STATE);
	        this._definePathType("entering", STATE);
	    };
	    /** @hidden */
	    TransitionService.prototype._defineEvent = function (name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, rejectIfSuperseded) {
	        if (reverseSort === void 0) { reverseSort = false; }
	        if (getResultHandler === void 0) { getResultHandler = transitionHook_1.TransitionHook.HANDLE_RESULT; }
	        if (getErrorHandler === void 0) { getErrorHandler = transitionHook_1.TransitionHook.REJECT_ERROR; }
	        if (rejectIfSuperseded === void 0) { rejectIfSuperseded = true; }
	        var eventType = new transitionEventType_1.TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, rejectIfSuperseded);
	        this._eventTypes.push(eventType);
	        hookRegistry_1.makeEvent(this, this, eventType);
	    };
	    ;
	    /** @hidden */
	    TransitionService.prototype._getEvents = function (phase) {
	        var transitionHookTypes = predicates_1.isDefined(phase) ?
	            this._eventTypes.filter(function (type) { return type.hookPhase === phase; }) :
	            this._eventTypes.slice();
	        return transitionHookTypes.sort(function (l, r) {
	            var cmpByPhase = l.hookPhase - r.hookPhase;
	            return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
	        });
	    };
	    /**
	     * Adds a Path to be used as a criterion against a TreeChanges path
	     *
	     * For example: the `exiting` path in [[HookMatchCriteria]] is a STATE scoped path.
	     * It was defined by calling `defineTreeChangesCriterion('exiting', TransitionHookScope.STATE)`
	     * Each state in the exiting path is checked against the criteria and returned as part of the match.
	     *
	     * Another example: the `to` path in [[HookMatchCriteria]] is a TRANSITION scoped path.
	     * It was defined by calling `defineTreeChangesCriterion('to', TransitionHookScope.TRANSITION)`
	     * Only the tail of the `to` path is checked against the criteria and returned as part of the match.
	     *
	     * @hidden
	     */
	    TransitionService.prototype._definePathType = function (name, hookScope) {
	        this._criteriaPaths[name] = { name: name, scope: hookScope };
	    };
	    /** * @hidden */
	    TransitionService.prototype._getPathTypes = function () {
	        return this._criteriaPaths;
	    };
	    /** @hidden */
	    TransitionService.prototype.getHooks = function (hookName) {
	        return this._registeredHooks[hookName];
	    };
	    /** @hidden */
	    TransitionService.prototype._registerDefaultTransitionHooks = function () {
	        var fns = this._deregisterHookFns;
	        // Wire up redirectTo hook
	        fns.redirectTo = redirectTo_1.registerRedirectToHook(this);
	        // Wire up onExit/Retain/Enter state hooks
	        fns.onExit = onEnterExitRetain_1.registerOnExitHook(this);
	        fns.onRetain = onEnterExitRetain_1.registerOnRetainHook(this);
	        fns.onEnter = onEnterExitRetain_1.registerOnEnterHook(this);
	        // Wire up Resolve hooks
	        fns.eagerResolve = resolve_1.registerEagerResolvePath(this);
	        fns.lazyResolve = resolve_1.registerLazyResolveState(this);
	        // Wire up the View management hooks
	        fns.loadViews = views_1.registerLoadEnteringViews(this);
	        fns.activateViews = views_1.registerActivateViews(this);
	        // After globals.current is updated at priority: 10000
	        fns.updateUrl = url_1.registerUpdateUrl(this);
	        // Lazy load state trees
	        fns.lazyLoad = lazyLoad_1.registerLazyLoadHook(this);
	    };
	    return TransitionService;
	}());
	exports.TransitionService = TransitionService;
	//# sourceMappingURL=transitionService.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module hooks */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var resolveContext_1 = __webpack_require__(25);
	var hof_1 = __webpack_require__(7);
	/**
	 * A [[TransitionHookFn]] which resolves all EAGER Resolvables in the To Path
	 *
	 * Registered using `transitionService.onStart({}, eagerResolvePath);`
	 *
	 * When a Transition starts, this hook resolves all the EAGER Resolvables, which the transition then waits for.
	 *
	 * See [[StateDeclaration.resolve]]
	 */
	var eagerResolvePath = function (trans) {
	    return new resolveContext_1.ResolveContext(trans.treeChanges().to)
	        .resolvePath("EAGER", trans)
	        .then(common_1.noop);
	};
	exports.registerEagerResolvePath = function (transitionService) {
	    return transitionService.onStart({}, eagerResolvePath, { priority: 1000 });
	};
	/**
	 * A [[TransitionHookFn]] which resolves all LAZY Resolvables for the state (and all its ancestors) in the To Path
	 *
	 * Registered using `transitionService.onEnter({ entering: () => true }, lazyResolveState);`
	 *
	 * When a State is being entered, this hook resolves all the Resolvables for this state, which the transition then waits for.
	 *
	 * See [[StateDeclaration.resolve]]
	 */
	var lazyResolveState = function (trans, state) {
	    return new resolveContext_1.ResolveContext(trans.treeChanges().to)
	        .subContext(state)
	        .resolvePath("LAZY", trans)
	        .then(common_1.noop);
	};
	exports.registerLazyResolveState = function (transitionService) {
	    return transitionService.onEnter({ entering: hof_1.val(true) }, lazyResolveState, { priority: 1000 });
	};
	//# sourceMappingURL=resolve.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module hooks */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var coreservices_1 = __webpack_require__(8);
	/**
	 * A [[TransitionHookFn]] which waits for the views to load
	 *
	 * Registered using `transitionService.onStart({}, loadEnteringViews);`
	 *
	 * Allows the views to do async work in [[ViewConfig.load]] before the transition continues.
	 * In angular 1, this includes loading the templates.
	 */
	var loadEnteringViews = function (transition) {
	    var $q = coreservices_1.services.$q;
	    var enteringViews = transition.views("entering");
	    if (!enteringViews.length)
	        return;
	    return $q.all(enteringViews.map(function (view) { return $q.when(view.load()); })).then(common_1.noop);
	};
	exports.registerLoadEnteringViews = function (transitionService) {
	    return transitionService.onFinish({}, loadEnteringViews);
	};
	/**
	 * A [[TransitionHookFn]] which activates the new views when a transition is successful.
	 *
	 * Registered using `transitionService.onSuccess({}, activateViews);`
	 *
	 * After a transition is complete, this hook deactivates the old views from the previous state,
	 * and activates the new views from the destination state.
	 *
	 * See [[ViewService]]
	 */
	var activateViews = function (transition) {
	    var enteringViews = transition.views("entering");
	    var exitingViews = transition.views("exiting");
	    if (!enteringViews.length && !exitingViews.length)
	        return;
	    var $view = transition.router.viewService;
	    exitingViews.forEach(function (vc) { return $view.deactivateViewConfig(vc); });
	    enteringViews.forEach(function (vc) { return $view.activateViewConfig(vc); });
	    $view.sync();
	};
	exports.registerActivateViews = function (transitionService) {
	    return transitionService.onSuccess({}, activateViews);
	};
	//# sourceMappingURL=views.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * A [[TransitionHookFn]] which updates the URL after a successful transition
	 *
	 * Registered using `transitionService.onSuccess({}, updateUrl);`
	 */
	var updateUrl = function (transition) {
	    var options = transition.options();
	    var $state = transition.router.stateService;
	    var $urlRouter = transition.router.urlRouter;
	    // Dont update the url in these situations:
	    // The transition was triggered by a URL sync (options.source === 'url')
	    // The user doesn't want the url to update (options.location === false)
	    // The destination state, and all parents have no navigable url
	    if (options.source !== 'url' && options.location && $state.$current.navigable) {
	        var urlOptions = { replace: options.location === 'replace' };
	        $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
	    }
	    $urlRouter.update(true);
	};
	exports.registerUpdateUrl = function (transitionService) {
	    return transitionService.onSuccess({}, updateUrl, { priority: 9999 });
	};
	//# sourceMappingURL=url.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module hooks */ /** */
	var predicates_1 = __webpack_require__(6);
	var coreservices_1 = __webpack_require__(8);
	var targetState_1 = __webpack_require__(17);
	/**
	 * A [[TransitionHookFn]] that redirects to a different state or params
	 *
	 * Registered using `transitionService.onStart({ to: (state) => !!state.redirectTo }, redirectHook);`
	 *
	 * See [[StateDeclaration.redirectTo]]
	 */
	var redirectToHook = function (trans) {
	    var redirect = trans.to().redirectTo;
	    if (!redirect)
	        return;
	    var $state = trans.router.stateService;
	    function handleResult(result) {
	        if (!result)
	            return;
	        if (result instanceof targetState_1.TargetState)
	            return result;
	        if (predicates_1.isString(result))
	            return $state.target(result, trans.params(), trans.options());
	        if (result['state'] || result['params'])
	            return $state.target(result['state'] || trans.to(), result['params'] || trans.params(), trans.options());
	    }
	    if (predicates_1.isFunction(redirect)) {
	        return coreservices_1.services.$q.when(redirect(trans)).then(handleResult);
	    }
	    return handleResult(redirect);
	};
	exports.registerRedirectToHook = function (transitionService) {
	    return transitionService.onStart({ to: function (state) { return !!state.redirectTo; } }, redirectToHook);
	};
	//# sourceMappingURL=redirectTo.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * A factory which creates an onEnter, onExit or onRetain transition hook function
	 *
	 * The returned function invokes the (for instance) state.onEnter hook when the
	 * state is being entered.
	 *
	 * @hidden
	 */
	function makeEnterExitRetainHook(hookName) {
	    return function (transition, state) {
	        var hookFn = state[hookName];
	        return hookFn(transition, state);
	    };
	}
	/**
	 * The [[TransitionStateHookFn]] for onExit
	 *
	 * When the state is being exited, the state's .onExit function is invoked.
	 *
	 * Registered using `transitionService.onExit({ exiting: (state) => !!state.onExit }, onExitHook);`
	 *
	 * See: [[IHookRegistry.onExit]]
	 */
	var onExitHook = makeEnterExitRetainHook('onExit');
	exports.registerOnExitHook = function (transitionService) {
	    return transitionService.onExit({ exiting: function (state) { return !!state.onExit; } }, onExitHook);
	};
	/**
	 * The [[TransitionStateHookFn]] for onRetain
	 *
	 * When the state was already entered, and is not being exited or re-entered, the state's .onRetain function is invoked.
	 *
	 * Registered using `transitionService.onRetain({ retained: (state) => !!state.onRetain }, onRetainHook);`
	 *
	 * See: [[IHookRegistry.onRetain]]
	 */
	var onRetainHook = makeEnterExitRetainHook('onRetain');
	exports.registerOnRetainHook = function (transitionService) {
	    return transitionService.onRetain({ retained: function (state) { return !!state.onRetain; } }, onRetainHook);
	};
	/**
	 * The [[TransitionStateHookFn]] for onEnter
	 *
	 * When the state is being entered, the state's .onEnter function is invoked.
	 *
	 * Registered using `transitionService.onEnter({ entering: (state) => !!state.onEnter }, onEnterHook);`
	 *
	 * See: [[IHookRegistry.onEnter]]
	 */
	var onEnterHook = makeEnterExitRetainHook('onEnter');
	exports.registerOnEnterHook = function (transitionService) {
	    return transitionService.onEnter({ entering: function (state) { return !!state.onEnter; } }, onEnterHook);
	};
	//# sourceMappingURL=onEnterExitRetain.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var coreservices_1 = __webpack_require__(8);
	/**
	 * A [[TransitionHookFn]] that performs lazy loading
	 *
	 * When entering a state "abc" which has a `lazyLoad` function defined:
	 * - Invoke the `lazyLoad` function (unless it is already in process)
	 *   - Flag the hook function as "in process"
	 *   - The function should return a promise (that resolves when lazy loading is complete)
	 * - Wait for the promise to settle
	 *   - If the promise resolves to a [[LazyLoadResult]], then register those states
	 *   - Flag the hook function as "not in process"
	 * - If the hook was successful
	 *   - Remove the `lazyLoad` function from the state declaration
	 * - If all the hooks were successful
	 *   - Retry the transition (by returning a TargetState)
	 *
	 * ```
	 * .state('abc', {
	 *   component: 'fooComponent',
	 *   lazyLoad: () => System.import('./fooComponent')
	 *   });
	 * ```
	 *
	 * See [[StateDeclaration.lazyLoad]]
	 */
	var lazyLoadHook = function (transition) {
	    var router = transition.router;
	    function retryTransition() {
	        if (transition.originalTransition().options().source !== 'url') {
	            // The original transition was not triggered via url sync
	            // The lazy state should be loaded now, so re-try the original transition
	            var orig = transition.targetState();
	            return router.stateService.target(orig.identifier(), orig.params(), orig.options());
	        }
	        // The original transition was triggered via url sync
	        // Run the URL rules and find the best match
	        var $url = router.urlService;
	        var result = $url.match($url.parts());
	        var rule = result && result.rule;
	        // If the best match is a state, redirect the transition (instead
	        // of calling sync() which supersedes the current transition)
	        if (rule && rule.type === "STATE") {
	            var state = rule.state;
	            var params = result.match;
	            return router.stateService.target(state, params, transition.options());
	        }
	        // No matching state found, so let .sync() choose the best non-state match/otherwise
	        router.urlService.sync();
	    }
	    var promises = transition.entering()
	        .filter(function (state) { return !!state.$$state().lazyLoad; })
	        .map(function (state) { return lazyLoadState(transition, state); });
	    return coreservices_1.services.$q.all(promises).then(retryTransition);
	};
	exports.registerLazyLoadHook = function (transitionService) {
	    return transitionService.onBefore({ entering: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
	};
	/**
	 * Invokes a state's lazy load function
	 *
	 * @param transition a Transition context
	 * @param state the state to lazy load
	 * @returns A promise for the lazy load result
	 */
	function lazyLoadState(transition, state) {
	    var lazyLoadFn = state.$$state().lazyLoad;
	    // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
	    var promise = lazyLoadFn['_promise'];
	    if (!promise) {
	        var success = function (result) {
	            delete state.lazyLoad;
	            delete state.$$state().lazyLoad;
	            delete lazyLoadFn['_promise'];
	            return result;
	        };
	        var error = function (err) {
	            delete lazyLoadFn['_promise'];
	            return coreservices_1.services.$q.reject(err);
	        };
	        promise = lazyLoadFn['_promise'] =
	            coreservices_1.services.$q.when(lazyLoadFn(transition, state))
	                .then(updateStateRegistry)
	                .then(success, error);
	    }
	    /** Register any lazy loaded state definitions */
	    function updateStateRegistry(result) {
	        if (result && Array.isArray(result.states)) {
	            result.states.forEach(function (state) { return transition.router.stateRegistry.register(state); });
	        }
	        return result;
	    }
	    return promise;
	}
	exports.lazyLoadState = lazyLoadState;
	//# sourceMappingURL=lazyLoad.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var transitionHook_1 = __webpack_require__(16);
	/**
	 * This class defines a type of hook, such as `onBefore` or `onEnter`.
	 * Plugins can define custom hook types, such as sticky states does for `onInactive`.
	 *
	 * @interalapi
	 */
	var TransitionEventType = (function () {
	    function TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, rejectIfSuperseded) {
	        if (reverseSort === void 0) { reverseSort = false; }
	        if (getResultHandler === void 0) { getResultHandler = transitionHook_1.TransitionHook.HANDLE_RESULT; }
	        if (getErrorHandler === void 0) { getErrorHandler = transitionHook_1.TransitionHook.REJECT_ERROR; }
	        if (rejectIfSuperseded === void 0) { rejectIfSuperseded = true; }
	        this.name = name;
	        this.hookPhase = hookPhase;
	        this.hookOrder = hookOrder;
	        this.criteriaMatchPath = criteriaMatchPath;
	        this.reverseSort = reverseSort;
	        this.getResultHandler = getResultHandler;
	        this.getErrorHandler = getErrorHandler;
	        this.rejectIfSuperseded = rejectIfSuperseded;
	    }
	    return TransitionEventType;
	}());
	exports.TransitionEventType = TransitionEventType;
	//# sourceMappingURL=transitionEventType.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module view
	 */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var predicates_1 = __webpack_require__(6);
	var trace_1 = __webpack_require__(14);
	/**
	 * The View service
	 *
	 * This service pairs existing `ui-view` components (which live in the DOM)
	 * with view configs (from the state declaration objects: [[StateDeclaration.views]]).
	 *
	 * - After a successful Transition, the views from the newly entered states are activated via [[activateViewConfig]].
	 *   The views from exited states are deactivated via [[deactivateViewConfig]].
	 *   (See: the [[registerActivateViews]] Transition Hook)
	 *
	 * - As `ui-view` components pop in and out of existence, they register themselves using [[registerUIView]].
	 *
	 * - When the [[sync]] function is called, the registered `ui-view`(s) ([[ActiveUIView]])
	 * are configured with the matching [[ViewConfig]](s)
	 *
	 */
	var ViewService = (function () {
	    function ViewService() {
	        var _this = this;
	        this._uiViews = [];
	        this._viewConfigs = [];
	        this._viewConfigFactories = {};
	        this._pluginapi = {
	            _rootViewContext: this._rootViewContext.bind(this),
	            _viewConfigFactory: this._viewConfigFactory.bind(this),
	            _registeredUIViews: function () { return _this._uiViews; },
	            _activeViewConfigs: function () { return _this._viewConfigs; },
	        };
	    }
	    ViewService.prototype._rootViewContext = function (context) {
	        return this._rootContext = context || this._rootContext;
	    };
	    ;
	    ViewService.prototype._viewConfigFactory = function (viewType, factory) {
	        this._viewConfigFactories[viewType] = factory;
	    };
	    ViewService.prototype.createViewConfig = function (path, decl) {
	        var cfgFactory = this._viewConfigFactories[decl.$type];
	        if (!cfgFactory)
	            throw new Error("ViewService: No view config factory registered for type " + decl.$type);
	        var cfgs = cfgFactory(path, decl);
	        return predicates_1.isArray(cfgs) ? cfgs : [cfgs];
	    };
	    /**
	     * Deactivates a ViewConfig.
	     *
	     * This function deactivates a `ViewConfig`.
	     * After calling [[sync]], it will un-pair from any `ui-view` with which it is currently paired.
	     *
	     * @param viewConfig The ViewConfig view to deregister.
	     */
	    ViewService.prototype.deactivateViewConfig = function (viewConfig) {
	        trace_1.trace.traceViewServiceEvent("<- Removing", viewConfig);
	        common_1.removeFrom(this._viewConfigs, viewConfig);
	    };
	    ViewService.prototype.activateViewConfig = function (viewConfig) {
	        trace_1.trace.traceViewServiceEvent("-> Registering", viewConfig);
	        this._viewConfigs.push(viewConfig);
	    };
	    ViewService.prototype.sync = function () {
	        var _this = this;
	        var uiViewsByFqn = this._uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(common_1.applyPairs, {});
	        // Return the number of dots in the fully qualified name
	        function uiViewDepth(uiView) {
	            return uiView.fqn.split(".").length;
	        }
	        // Return the ViewConfig's context's depth in the context tree.
	        function viewConfigDepth(config) {
	            var context = config.viewDecl.$context, count = 0;
	            while (++count && context.parent)
	                context = context.parent;
	            return count;
	        }
	        // Given a depth function, returns a compare function which can return either ascending or descending order
	        var depthCompare = hof_1.curry(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
	        var matchingConfigPair = function (uiView) {
	            var matchingConfigs = _this._viewConfigs.filter(ViewService.matches(uiViewsByFqn, uiView));
	            if (matchingConfigs.length > 1) {
	                // This is OK.  Child states can target a ui-view that the parent state also targets (the child wins)
	                // Sort by depth and return the match from the deepest child
	                // console.log(`Multiple matching view configs for ${uiView.fqn}`, matchingConfigs);
	                matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
	            }
	            return [uiView, matchingConfigs[0]];
	        };
	        var configureUIView = function (_a) {
	            var uiView = _a[0], viewConfig = _a[1];
	            // If a parent ui-view is reconfigured, it could destroy child ui-views.
	            // Before configuring a child ui-view, make sure it's still in the active uiViews array.
	            if (_this._uiViews.indexOf(uiView) !== -1)
	                uiView.configUpdated(viewConfig);
	        };
	        this._uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair).forEach(configureUIView);
	    };
	    ;
	    /**
	     * Registers a `ui-view` component
	     *
	     * When a `ui-view` component is created, it uses this method to register itself.
	     * After registration the [[sync]] method is used to ensure all `ui-view` are configured with the proper [[ViewConfig]].
	     *
	     * Note: the `ui-view` component uses the `ViewConfig` to determine what view should be loaded inside the `ui-view`,
	     * and what the view's state context is.
	     *
	     * Note: There is no corresponding `deregisterUIView`.
	     *       A `ui-view` should hang on to the return value of `registerUIView` and invoke it to deregister itself.
	     *
	     * @param uiView The metadata for a UIView
	     * @return a de-registration function used when the view is destroyed.
	     */
	    ViewService.prototype.registerUIView = function (uiView) {
	        trace_1.trace.traceViewServiceUIViewEvent("-> Registering", uiView);
	        var uiViews = this._uiViews;
	        var fqnMatches = function (uiv) { return uiv.fqn === uiView.fqn; };
	        if (uiViews.filter(fqnMatches).length)
	            trace_1.trace.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", uiView);
	        uiViews.push(uiView);
	        this.sync();
	        return function () {
	            var idx = uiViews.indexOf(uiView);
	            if (idx === -1) {
	                trace_1.trace.traceViewServiceUIViewEvent("Tried removing non-registered uiView", uiView);
	                return;
	            }
	            trace_1.trace.traceViewServiceUIViewEvent("<- Deregistering", uiView);
	            common_1.removeFrom(uiViews)(uiView);
	        };
	    };
	    ;
	    /**
	     * Returns the list of views currently available on the page, by fully-qualified name.
	     *
	     * @return {Array} Returns an array of fully-qualified view names.
	     */
	    ViewService.prototype.available = function () {
	        return this._uiViews.map(hof_1.prop("fqn"));
	    };
	    /**
	     * Returns the list of views on the page containing loaded content.
	     *
	     * @return {Array} Returns an array of fully-qualified view names.
	     */
	    ViewService.prototype.active = function () {
	        return this._uiViews.filter(hof_1.prop("$config")).map(hof_1.prop("name"));
	    };
	    /**
	     * Normalizes a view's name from a state.views configuration block.
	     *
	     * This should be used by a framework implementation to calculate the values for
	     * [[_ViewDeclaration.$uiViewName]] and [[_ViewDeclaration.$uiViewContextAnchor]].
	     *
	     * @param context the context object (state declaration) that the view belongs to
	     * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
	     *
	     * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
	     */
	    ViewService.normalizeUIViewTarget = function (context, rawViewName) {
	        if (rawViewName === void 0) { rawViewName = ""; }
	        // TODO: Validate incoming view name with a regexp to allow:
	        // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
	        // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
	        var viewAtContext = rawViewName.split("@");
	        var uiViewName = viewAtContext[0] || "$default"; // default to unnamed view
	        var uiViewContextAnchor = predicates_1.isString(viewAtContext[1]) ? viewAtContext[1] : "^"; // default to parent context
	        // Handle relative view-name sugar syntax.
	        // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
	        var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
	        if (relativeViewNameSugar) {
	            // Clobbers existing contextAnchor (rawViewName validation will fix this)
	            uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
	            uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
	        }
	        if (uiViewName.charAt(0) === '!') {
	            uiViewName = uiViewName.substr(1);
	            uiViewContextAnchor = ""; // target absolutely from root
	        }
	        // handle parent relative targeting "^.^.^"
	        var relativeMatch = /^(\^(?:\.\^)*)$/;
	        if (relativeMatch.exec(uiViewContextAnchor)) {
	            var anchor = uiViewContextAnchor.split(".").reduce((function (anchor, x) { return anchor.parent; }), context);
	            uiViewContextAnchor = anchor.name;
	        }
	        else if (uiViewContextAnchor === '.') {
	            uiViewContextAnchor = context.name;
	        }
	        return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
	    };
	    return ViewService;
	}());
	/**
	 * Given a ui-view and a ViewConfig, determines if they "match".
	 *
	 * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
	 * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
	 *
	 * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
	 * can be a segmented ui-view path, describing a portion of a ui-view fqn.
	 *
	 * In order for a ui-view to match ViewConfig, ui-view's $type must match the ViewConfig's $type
	 *
	 * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
	 * - the ui-view's name matches the ViewConfig's target name
	 * - the ui-view's context matches the ViewConfig's anchor
	 *
	 * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
	 * - There exists a parent ui-view where:
	 *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
	 *    - the parent ui-view's context matches the ViewConfig's anchor
	 * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
	 *
	 * Example:
	 *
	 * DOM:
	 * <ui-view>                        <!-- created in the root context (name: "") -->
	 *   <ui-view name="foo">                <!-- created in the context named: "A"      -->
	 *     <ui-view>                    <!-- created in the context named: "A.B"    -->
	 *       <ui-view name="bar">            <!-- created in the context named: "A.B.C"  -->
	 *       </ui-view>
	 *     </ui-view>
	 *   </ui-view>
	 * </ui-view>
	 *
	 * uiViews: [
	 *  { fqn: "$default",                  creationContext: { name: "" } },
	 *  { fqn: "$default.foo",              creationContext: { name: "A" } },
	 *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
	 *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
	 * ]
	 *
	 * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
	 *
	 * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
	 * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
	 * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
	 * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
	 *
	 * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
	 * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
	 * - There exists a parent ui-view (which has fqn: "$default.foo") where:
	 *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
	 *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
	 * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
	 *   the tail of the ui-view's fqn "default.bar"
	 *
	 * @internalapi
	 */
	ViewService.matches = function (uiViewsByFqn, uiView) { return function (viewConfig) {
	    // Don't supply an ng1 ui-view with an ng2 ViewConfig, etc
	    if (uiView.$type !== viewConfig.viewDecl.$type)
	        return false;
	    // Split names apart from both viewConfig and uiView into segments
	    var vc = viewConfig.viewDecl;
	    var vcSegments = vc.$uiViewName.split(".");
	    var uivSegments = uiView.fqn.split(".");
	    // Check if the tails of the segment arrays match. ex, these arrays' tails match:
	    // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
	    if (!common_1.equals(vcSegments, uivSegments.slice(0 - vcSegments.length)))
	        return false;
	    // Now check if the fqn ending at the first segment of the viewConfig matches the context:
	    // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
	    var negOffset = (1 - vcSegments.length) || undefined;
	    var fqnToFirstSegment = uivSegments.slice(0, negOffset).join(".");
	    var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
	    return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
	}; };
	exports.ViewService = ViewService;
	//# sourceMappingURL=view.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @coreapi
	 * @module state
	 */ /** for typedoc */
	"use strict";
	var stateMatcher_1 = __webpack_require__(44);
	var stateBuilder_1 = __webpack_require__(45);
	var stateQueueManager_1 = __webpack_require__(46);
	var common_1 = __webpack_require__(5);
	var hof_1 = __webpack_require__(7);
	var StateRegistry = (function () {
	    /** @internalapi */
	    function StateRegistry(_router) {
	        this._router = _router;
	        this.states = {};
	        this.listeners = [];
	        this.matcher = new stateMatcher_1.StateMatcher(this.states);
	        this.builder = new stateBuilder_1.StateBuilder(this.matcher, _router.urlMatcherFactory);
	        this.stateQueue = new stateQueueManager_1.StateQueueManager(this, _router.urlRouter, this.states, this.builder, this.listeners);
	        this._registerRoot();
	    }
	    /** @internalapi */
	    StateRegistry.prototype._registerRoot = function () {
	        var rootStateDef = {
	            name: '',
	            url: '^',
	            views: null,
	            params: {
	                '#': { value: null, type: 'hash', dynamic: true }
	            },
	            abstract: true
	        };
	        var _root = this._root = this.stateQueue.register(rootStateDef);
	        _root.navigable = null;
	    };
	    /** @internalapi */
	    StateRegistry.prototype.dispose = function () {
	        var _this = this;
	        this.stateQueue.dispose();
	        this.listeners = [];
	        this.get().forEach(function (state) { return _this.get(state) && _this.deregister(state); });
	    };
	    /**
	     * Listen for a State Registry events
	     *
	     * Adds a callback that is invoked when states are registered or deregistered with the StateRegistry.
	     *
	     * #### Example:
	     * ```js
	     * let allStates = registry.get();
	     *
	     * // Later, invoke deregisterFn() to remove the listener
	     * let deregisterFn = registry.onStatesChanged((event, states) => {
	     *   switch(event) {
	     *     case: 'registered':
	     *       states.forEach(state => allStates.push(state));
	     *       break;
	     *     case: 'deregistered':
	     *       states.forEach(state => {
	     *         let idx = allStates.indexOf(state);
	     *         if (idx !== -1) allStates.splice(idx, 1);
	     *       });
	     *       break;
	     *   }
	     * });
	     * ```
	     *
	     * @param listener a callback function invoked when the registered states changes.
	     *        The function receives two parameters, `event` and `state`.
	     *        See [[StateRegistryListener]]
	     * @return a function that deregisters the listener
	     */
	    StateRegistry.prototype.onStatesChanged = function (listener) {
	        this.listeners.push(listener);
	        return function deregisterListener() {
	            common_1.removeFrom(this.listeners)(listener);
	        }.bind(this);
	    };
	    /**
	     * Gets the implicit root state
	     *
	     * Gets the root of the state tree.
	     * The root state is implicitly created by UI-Router.
	     * Note: this returns the internal [[State]] representation, not a [[StateDeclaration]]
	     *
	     * @return the root [[State]]
	     */
	    StateRegistry.prototype.root = function () {
	        return this._root;
	    };
	    /**
	     * Adds a state to the registry
	     *
	     * Registers a [[StateDeclaration]] or queues it for registration.
	     *
	     * Note: a state will be queued if the state's parent isn't yet registered.
	     *
	     * @param stateDefinition the definition of the state to register.
	     * @returns the internal [[State]] object.
	     *          If the state was successfully registered, then the object is fully built (See: [[StateBuilder]]).
	     *          If the state was only queued, then the object is not fully built.
	     */
	    StateRegistry.prototype.register = function (stateDefinition) {
	        return this.stateQueue.register(stateDefinition);
	    };
	    /** @hidden */
	    StateRegistry.prototype._deregisterTree = function (state) {
	        var _this = this;
	        var all = this.get().map(function (s) { return s.$$state(); });
	        var getChildren = function (states) {
	            var children = all.filter(function (s) { return states.indexOf(s.parent) !== -1; });
	            return children.length === 0 ? children : children.concat(getChildren(children));
	        };
	        var children = getChildren([state]);
	        var deregistered = [state].concat(children).reverse();
	        deregistered.forEach(function (state) {
	            var $ur = _this._router.urlRouter;
	            // Remove URL rule
	            $ur.rules().filter(hof_1.propEq("state", state)).forEach($ur.removeRule.bind($ur));
	            // Remove state from registry
	            delete _this.states[state.name];
	        });
	        return deregistered;
	    };
	    /**
	     * Removes a state from the registry
	     *
	     * This removes a state from the registry.
	     * If the state has children, they are are also removed from the registry.
	     *
	     * @param stateOrName the state's name or object representation
	     * @returns {State[]} a list of removed states
	     */
	    StateRegistry.prototype.deregister = function (stateOrName) {
	        var _state = this.get(stateOrName);
	        if (!_state)
	            throw new Error("Can't deregister state; not found: " + stateOrName);
	        var deregisteredStates = this._deregisterTree(_state.$$state());
	        this.listeners.forEach(function (listener) { return listener("deregistered", deregisteredStates.map(function (s) { return s.self; })); });
	        return deregisteredStates;
	    };
	    StateRegistry.prototype.get = function (stateOrName, base) {
	        var _this = this;
	        if (arguments.length === 0)
	            return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
	        var found = this.matcher.find(stateOrName, base);
	        return found && found.self || null;
	    };
	    StateRegistry.prototype.decorator = function (name, func) {
	        return this.builder.builder(name, func);
	    };
	    return StateRegistry;
	}());
	exports.StateRegistry = StateRegistry;
	//# sourceMappingURL=stateRegistry.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var predicates_1 = __webpack_require__(6);
	var glob_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(5);
	var StateMatcher = (function () {
	    function StateMatcher(_states) {
	        this._states = _states;
	    }
	    StateMatcher.prototype.isRelative = function (stateName) {
	        stateName = stateName || "";
	        return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	    };
	    StateMatcher.prototype.find = function (stateOrName, base) {
	        if (!stateOrName && stateOrName !== "")
	            return undefined;
	        var isStr = predicates_1.isString(stateOrName);
	        var name = isStr ? stateOrName : stateOrName.name;
	        if (this.isRelative(name))
	            name = this.resolvePath(name, base);
	        var state = this._states[name];
	        if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	            return state;
	        }
	        else if (isStr) {
	            var matches = common_1.values(this._states)
	                .filter(function (state) { return new glob_1.Glob(state.name).matches(name); });
	            if (matches.length > 1) {
	                console.log("stateMatcher.find: Found multiple matches for " + name + " using glob: ", matches.map(function (match) { return match.name; }));
	            }
	            return matches[0];
	        }
	        return undefined;
	    };
	    StateMatcher.prototype.resolvePath = function (name, base) {
	        if (!base)
	            throw new Error("No reference point given for path '" + name + "'");
	        var baseState = this.find(base);
	        var splitName = name.split("."), i = 0, pathLength = splitName.length, current = baseState;
	        for (; i < pathLength; i++) {
	            if (splitName[i] === "" && i === 0) {
	                current = baseState;
	                continue;
	            }
	            if (splitName[i] === "^") {
	                if (!current.parent)
	                    throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
	                current = current.parent;
	                continue;
	            }
	            break;
	        }
	        var relName = splitName.slice(i).join(".");
	        return current.name + (current.name && relName ? "." : "") + relName;
	    };
	    return StateMatcher;
	}());
	exports.StateMatcher = StateMatcher;
	//# sourceMappingURL=stateMatcher.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var strings_1 = __webpack_require__(11);
	var hof_1 = __webpack_require__(7);
	var resolvable_1 = __webpack_require__(24);
	var coreservices_1 = __webpack_require__(8);
	var parseUrl = function (url) {
	    if (!predicates_1.isString(url))
	        return false;
	    var root = url.charAt(0) === '^';
	    return { val: root ? url.substring(1) : url, root: root };
	};
	function nameBuilder(state) {
	    return state.name;
	}
	function selfBuilder(state) {
	    state.self.$$state = function () { return state; };
	    return state.self;
	}
	function dataBuilder(state) {
	    if (state.parent && state.parent.data) {
	        state.data = state.self.data = common_1.inherit(state.parent.data, state.data);
	    }
	    return state.data;
	}
	var getUrlBuilder = function ($urlMatcherFactoryProvider, root) {
	    return function urlBuilder(state) {
	        var stateDec = state;
	        // For future states, i.e., states whose name ends with `.**`,
	        // match anything that starts with the url prefix
	        if (stateDec && stateDec.url && stateDec.name && stateDec.name.match(/\.\*\*$/)) {
	            stateDec.url += "{remainder:any}"; // match any path (.*)
	        }
	        var parsed = parseUrl(stateDec.url), parent = state.parent;
	        var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, {
	            params: state.params || {},
	            paramMap: function (paramConfig, isSearch) {
	                if (stateDec.reloadOnSearch === false && isSearch)
	                    paramConfig = common_1.extend(paramConfig || {}, { dynamic: true });
	                return paramConfig;
	            }
	        });
	        if (!url)
	            return null;
	        if (!$urlMatcherFactoryProvider.isMatcher(url))
	            throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	        return (parsed && parsed.root) ? url : ((parent && parent.navigable) || root()).url.append(url);
	    };
	};
	var getNavigableBuilder = function (isRoot) {
	    return function navigableBuilder(state) {
	        return !isRoot(state) && state.url ? state : (state.parent ? state.parent.navigable : null);
	    };
	};
	var getParamsBuilder = function (paramFactory) {
	    return function paramsBuilder(state) {
	        var makeConfigParam = function (config, id) { return paramFactory.fromConfig(id, null, config); };
	        var urlParams = (state.url && state.url.parameters({ inherit: false })) || [];
	        var nonUrlParams = common_1.values(common_1.mapObj(common_1.omit(state.params || {}, urlParams.map(hof_1.prop('id'))), makeConfigParam));
	        return urlParams.concat(nonUrlParams).map(function (p) { return [p.id, p]; }).reduce(common_1.applyPairs, {});
	    };
	};
	function pathBuilder(state) {
	    return state.parent ? state.parent.path.concat(state) : [state];
	}
	function includesBuilder(state) {
	    var includes = state.parent ? common_1.extend({}, state.parent.includes) : {};
	    includes[state.name] = true;
	    return includes;
	}
	/**
	 * This is a [[StateBuilder.builder]] function for the `resolve:` block on a [[StateDeclaration]].
	 *
	 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
	 * validates the `resolve` property and converts it to a [[Resolvable]] array.
	 *
	 * resolve: input value can be:
	 *
	 * {
	 *   // analyzed but not injected
	 *   myFooResolve: function() { return "myFooData"; },
	 *
	 *   // function.toString() parsed, "DependencyName" dep as string (not min-safe)
	 *   myBarResolve: function(DependencyName) { return DependencyName.fetchSomethingAsPromise() },
	 *
	 *   // Array split; "DependencyName" dep as string
	 *   myBazResolve: [ "DependencyName", function(dep) { return dep.fetchSomethingAsPromise() },
	 *
	 *   // Array split; DependencyType dep as token (compared using ===)
	 *   myQuxResolve: [ DependencyType, function(dep) { return dep.fetchSometingAsPromise() },
	 *
	 *   // val.$inject used as deps
	 *   // where:
	 *   //     corgeResolve.$inject = ["DependencyName"];
	 *   //     function corgeResolve(dep) { dep.fetchSometingAsPromise() }
	 *   // then "DependencyName" dep as string
	 *   myCorgeResolve: corgeResolve,
	 *
	 *  // inject service by name
	 *  // When a string is found, desugar creating a resolve that injects the named service
	 *   myGraultResolve: "SomeService"
	 * }
	 *
	 * or:
	 *
	 * [
	 *   new Resolvable("myFooResolve", function() { return "myFooData" }),
	 *   new Resolvable("myBarResolve", function(dep) { return dep.fetchSomethingAsPromise() }, [ "DependencyName" ]),
	 *   { provide: "myBazResolve", useFactory: function(dep) { dep.fetchSomethingAsPromise() }, deps: [ "DependencyName" ] }
	 * ]
	 */
	function resolvablesBuilder(state) {
	    /** convert resolve: {} and resolvePolicy: {} objects to an array of tuples */
	    var objects2Tuples = function (resolveObj, resolvePolicies) {
	        return Object.keys(resolveObj || {}).map(function (token) { return ({ token: token, val: resolveObj[token], deps: undefined, policy: resolvePolicies[token] }); });
	    };
	    /** fetch DI annotations from a function or ng1-style array */
	    var annotate = function (fn) {
	        var $injector = coreservices_1.services.$injector;
	        // ng1 doesn't have an $injector until runtime.
	        // If the $injector doesn't exist, use "deferred" literal as a
	        // marker indicating they should be annotated when runtime starts
	        return fn['$inject'] || ($injector && $injector.annotate(fn, $injector.strictDi)) || "deferred";
	    };
	    /** true if the object has both `token` and `resolveFn`, and is probably a [[ResolveLiteral]] */
	    var isResolveLiteral = function (obj) { return !!(obj.token && obj.resolveFn); };
	    /** true if the object looks like a provide literal, or a ng2 Provider */
	    var isLikeNg2Provider = function (obj) { return !!((obj.provide || obj.token) && (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass)); };
	    /** true if the object looks like a tuple from obj2Tuples */
	    var isTupleFromObj = function (obj) { return !!(obj && obj.val && (predicates_1.isString(obj.val) || predicates_1.isArray(obj.val) || predicates_1.isFunction(obj.val))); };
	    /** extracts the token from a Provider or provide literal */
	    var token = function (p) { return p.provide || p.token; };
	    /** Given a literal resolve or provider object, returns a Resolvable */
	    var literal2Resolvable = hof_1.pattern([
	        [hof_1.prop('resolveFn'), function (p) { return new resolvable_1.Resolvable(token(p), p.resolveFn, p.deps, p.policy); }],
	        [hof_1.prop('useFactory'), function (p) { return new resolvable_1.Resolvable(token(p), p.useFactory, (p.deps || p.dependencies), p.policy); }],
	        [hof_1.prop('useClass'), function (p) { return new resolvable_1.Resolvable(token(p), function () { return new p.useClass(); }, [], p.policy); }],
	        [hof_1.prop('useValue'), function (p) { return new resolvable_1.Resolvable(token(p), function () { return p.useValue; }, [], p.policy, p.useValue); }],
	        [hof_1.prop('useExisting'), function (p) { return new resolvable_1.Resolvable(token(p), common_1.identity, [p.useExisting], p.policy); }],
	    ]);
	    var tuple2Resolvable = hof_1.pattern([
	        [hof_1.pipe(hof_1.prop("val"), predicates_1.isString), function (tuple) { return new resolvable_1.Resolvable(tuple.token, common_1.identity, [tuple.val], tuple.policy); }],
	        [hof_1.pipe(hof_1.prop("val"), predicates_1.isArray), function (tuple) { return new resolvable_1.Resolvable(tuple.token, common_1.tail(tuple.val), tuple.val.slice(0, -1), tuple.policy); }],
	        [hof_1.pipe(hof_1.prop("val"), predicates_1.isFunction), function (tuple) { return new resolvable_1.Resolvable(tuple.token, tuple.val, annotate(tuple.val), tuple.policy); }],
	    ]);
	    var item2Resolvable = hof_1.pattern([
	        [hof_1.is(resolvable_1.Resolvable), function (r) { return r; }],
	        [isResolveLiteral, literal2Resolvable],
	        [isLikeNg2Provider, literal2Resolvable],
	        [isTupleFromObj, tuple2Resolvable],
	        [hof_1.val(true), function (obj) { throw new Error("Invalid resolve value: " + strings_1.stringify(obj)); }]
	    ]);
	    // If resolveBlock is already an array, use it as-is.
	    // Otherwise, assume it's an object and convert to an Array of tuples
	    var decl = state.resolve;
	    var items = predicates_1.isArray(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
	    return items.map(item2Resolvable);
	}
	exports.resolvablesBuilder = resolvablesBuilder;
	/**
	 * @internalapi A internal global service
	 *
	 * StateBuilder is a factory for the internal [[State]] objects.
	 *
	 * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
	 * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
	 * [[State]] object, which has an API and is used internally.
	 *
	 * Custom properties or API may be added to the internal [[State]] object by registering a decorator function
	 * using the [[builder]] method.
	 */
	var StateBuilder = (function () {
	    function StateBuilder(matcher, urlMatcherFactory) {
	        this.matcher = matcher;
	        var self = this;
	        var root = function () { return matcher.find(""); };
	        var isRoot = function (state) { return state.name === ""; };
	        function parentBuilder(state) {
	            if (isRoot(state))
	                return null;
	            return matcher.find(self.parentName(state)) || root();
	        }
	        this.builders = {
	            name: [nameBuilder],
	            self: [selfBuilder],
	            parent: [parentBuilder],
	            data: [dataBuilder],
	            // Build a URLMatcher if necessary, either via a relative or absolute URL
	            url: [getUrlBuilder(urlMatcherFactory, root)],
	            // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	            navigable: [getNavigableBuilder(isRoot)],
	            params: [getParamsBuilder(urlMatcherFactory.paramFactory)],
	            // Each framework-specific ui-router implementation should define its own `views` builder
	            // e.g., src/ng1/statebuilders/views.ts
	            views: [],
	            // Keep a full path from the root down to this state as this is needed for state activation.
	            path: [pathBuilder],
	            // Speed up $state.includes() as it's used a lot
	            includes: [includesBuilder],
	            resolvables: [resolvablesBuilder]
	        };
	    }
	    /**
	     * Registers a [[BuilderFunction]] for a specific [[State]] property (e.g., `parent`, `url`, or `path`).
	     * More than one BuilderFunction can be registered for a given property.
	     *
	     * The BuilderFunction(s) will be used to define the property on any subsequently built [[State]] objects.
	     *
	     * @param name The name of the State property being registered for.
	     * @param fn The BuilderFunction which will be used to build the State property
	     * @returns a function which deregisters the BuilderFunction
	     */
	    StateBuilder.prototype.builder = function (name, fn) {
	        var builders = this.builders;
	        var array = builders[name] || [];
	        // Backwards compat: if only one builder exists, return it, else return whole arary.
	        if (predicates_1.isString(name) && !predicates_1.isDefined(fn))
	            return array.length > 1 ? array : array[0];
	        if (!predicates_1.isString(name) || !predicates_1.isFunction(fn))
	            return;
	        builders[name] = array;
	        builders[name].push(fn);
	        return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) && null; };
	    };
	    /**
	     * Builds all of the properties on an essentially blank State object, returning a State object which has all its
	     * properties and API built.
	     *
	     * @param state an uninitialized State object
	     * @returns the built State object
	     */
	    StateBuilder.prototype.build = function (state) {
	        var _a = this, matcher = _a.matcher, builders = _a.builders;
	        var parent = this.parentName(state);
	        if (parent && !matcher.find(parent))
	            return null;
	        for (var key in builders) {
	            if (!builders.hasOwnProperty(key))
	                continue;
	            var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, common_1.noop);
	            state[key] = chain(state);
	        }
	        return state;
	    };
	    StateBuilder.prototype.parentName = function (state) {
	        var name = state.name || "";
	        var segments = name.split('.');
	        if (segments.length > 1) {
	            if (state.parent) {
	                throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + name + ")");
	            }
	            var lastSegment = segments.pop();
	            if (lastSegment === '**')
	                segments.pop();
	            return segments.join(".");
	        }
	        if (!state.parent)
	            return "";
	        return predicates_1.isString(state.parent) ? state.parent : state.parent.name;
	    };
	    StateBuilder.prototype.name = function (state) {
	        var name = state.name;
	        if (name.indexOf('.') !== -1 || !state.parent)
	            return name;
	        var parentName = predicates_1.isString(state.parent) ? state.parent : state.parent.name;
	        return parentName ? parentName + "." + name : name;
	    };
	    return StateBuilder;
	}());
	exports.StateBuilder = StateBuilder;
	//# sourceMappingURL=stateBuilder.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module state */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var stateObject_1 = __webpack_require__(33);
	/** @internalapi */
	var StateQueueManager = (function () {
	    function StateQueueManager($registry, $urlRouter, states, builder, listeners) {
	        this.$registry = $registry;
	        this.$urlRouter = $urlRouter;
	        this.states = states;
	        this.builder = builder;
	        this.listeners = listeners;
	        this.queue = [];
	    }
	    /** @internalapi */
	    StateQueueManager.prototype.dispose = function () {
	        this.queue = [];
	    };
	    StateQueueManager.prototype.register = function (config) {
	        var _a = this, states = _a.states, queue = _a.queue;
	        // Wrap a new object around the state so we can store our private details easily.
	        // @TODO: state = new State(extend({}, config, { ... }))
	        var state = common_1.inherit(new stateObject_1.State(), common_1.extend({}, config, {
	            self: config,
	            resolve: config.resolve || [],
	            toString: function () { return config.name; }
	        }));
	        if (!predicates_1.isString(state.name))
	            throw new Error("State must have a valid name");
	        if (states.hasOwnProperty(state.name) || common_1.pluck(queue, 'name').indexOf(state.name) !== -1)
	            throw new Error("State '" + state.name + "' is already defined");
	        queue.push(state);
	        this.flush();
	        return state;
	    };
	    StateQueueManager.prototype.flush = function () {
	        var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
	        var registered = [], // states that got registered
	        orphans = [], // states that don't yet have a parent registered
	        previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
	        while (queue.length > 0) {
	            var state = queue.shift();
	            var result = builder.build(state);
	            var orphanIdx = orphans.indexOf(state);
	            if (result) {
	                var existingState = this.$registry.get(state.name);
	                if (existingState && existingState.name === state.name) {
	                    throw new Error("State '" + state.name + "' is already defined");
	                }
	                if (existingState && existingState.name === state.name + ".**") {
	                    // Remove future state of the same name
	                    this.$registry.deregister(existingState);
	                }
	                states[state.name] = state;
	                this.attachRoute(state);
	                if (orphanIdx >= 0)
	                    orphans.splice(orphanIdx, 1);
	                registered.push(state);
	                continue;
	            }
	            var prev = previousQueueLength[state.name];
	            previousQueueLength[state.name] = queue.length;
	            if (orphanIdx >= 0 && prev === queue.length) {
	                // Wait until two consecutive iterations where no additional states were dequeued successfully.
	                // throw new Error(`Cannot register orphaned state '${state.name}'`);
	                queue.push(state);
	                return states;
	            }
	            else if (orphanIdx < 0) {
	                orphans.push(state);
	            }
	            queue.push(state);
	        }
	        if (registered.length) {
	            this.listeners.forEach(function (listener) { return listener("registered", registered.map(function (s) { return s.self; })); });
	        }
	        return states;
	    };
	    StateQueueManager.prototype.attachRoute = function (state) {
	        if (state.abstract || !state.url)
	            return;
	        this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(state));
	    };
	    return StateQueueManager;
	}());
	exports.StateQueueManager = StateQueueManager;
	//# sourceMappingURL=stateQueueManager.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module state
	 */ /** */
	var common_1 = __webpack_require__(5);
	var predicates_1 = __webpack_require__(6);
	var queue_1 = __webpack_require__(10);
	var coreservices_1 = __webpack_require__(8);
	var pathFactory_1 = __webpack_require__(23);
	var node_1 = __webpack_require__(20);
	var transitionService_1 = __webpack_require__(34);
	var rejectFactory_1 = __webpack_require__(12);
	var targetState_1 = __webpack_require__(17);
	var param_1 = __webpack_require__(21);
	var glob_1 = __webpack_require__(9);
	var resolveContext_1 = __webpack_require__(25);
	var lazyLoad_1 = __webpack_require__(40);
	var hof_1 = __webpack_require__(7);
	/**
	 * Provides state related service functions
	 *
	 * This class provides services related to ui-router states.
	 * An instance of this class is located on the global [[UIRouter]] object.
	 */
	var StateService = (function () {
	    /** @internalapi */
	    function StateService(router) {
	        this.router = router;
	        /** @internalapi */
	        this.invalidCallbacks = [];
	        /** @hidden */
	        this._defaultErrorHandler = function $defaultErrorHandler($error$) {
	            if ($error$ instanceof Error && $error$.stack) {
	                console.error($error$);
	                console.error($error$.stack);
	            }
	            else if ($error$ instanceof rejectFactory_1.Rejection) {
	                console.error($error$.toString());
	                if ($error$.detail && $error$.detail.stack)
	                    console.error($error$.detail.stack);
	            }
	            else {
	                console.error($error$);
	            }
	        };
	        var getters = ['current', '$current', 'params', 'transition'];
	        var boundFns = Object.keys(StateService.prototype).filter(hof_1.not(common_1.inArray(getters)));
	        common_1.createProxyFunctions(hof_1.val(StateService.prototype), this, hof_1.val(this), boundFns);
	    }
	    Object.defineProperty(StateService.prototype, "transition", {
	        /**
	         * The [[Transition]] currently in progress (or null)
	         *
	         * This is a passthrough through to [[UIRouterGlobals.transition]]
	         */
	        get: function () { return this.router.globals.transition; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "params", {
	        /**
	         * The latest successful state parameters
	         *
	         * This is a passthrough through to [[UIRouterGlobals.params]]
	         */
	        get: function () { return this.router.globals.params; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "current", {
	        /**
	         * The current [[StateDeclaration]]
	         *
	         * This is a passthrough through to [[UIRouterGlobals.current]]
	         */
	        get: function () { return this.router.globals.current; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(StateService.prototype, "$current", {
	        /**
	         * The current [[State]]
	         *
	         * This is a passthrough through to [[UIRouterGlobals.$current]]
	         */
	        get: function () { return this.router.globals.$current; },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internalapi */
	    StateService.prototype.dispose = function () {
	        this.defaultErrorHandler(common_1.noop);
	        this.invalidCallbacks = [];
	    };
	    /**
	     * Handler for when [[transitionTo]] is called with an invalid state.
	     *
	     * Invokes the [[onInvalid]] callbacks, in natural order.
	     * Each callback's return value is checked in sequence until one of them returns an instance of TargetState.
	     * The results of the callbacks are wrapped in $q.when(), so the callbacks may return promises.
	     *
	     * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and the result returned.
	     *
	     * @internalapi
	     */
	    StateService.prototype._handleInvalidTargetState = function (fromPath, toState) {
	        var _this = this;
	        var fromState = pathFactory_1.PathFactory.makeTargetState(fromPath);
	        var globals = this.router.globals;
	        var latestThing = function () { return globals.transitionHistory.peekTail(); };
	        var latest = latestThing();
	        var callbackQueue = new queue_1.Queue(this.invalidCallbacks.slice());
	        var injector = new resolveContext_1.ResolveContext(fromPath).injector();
	        var checkForRedirect = function (result) {
	            if (!(result instanceof targetState_1.TargetState)) {
	                return;
	            }
	            var target = result;
	            // Recreate the TargetState, in case the state is now defined.
	            target = _this.target(target.identifier(), target.params(), target.options());
	            if (!target.valid())
	                return rejectFactory_1.Rejection.invalid(target.error()).toPromise();
	            if (latestThing() !== latest)
	                return rejectFactory_1.Rejection.superseded().toPromise();
	            return _this.transitionTo(target.identifier(), target.params(), target.options());
	        };
	        function invokeNextCallback() {
	            var nextCallback = callbackQueue.dequeue();
	            if (nextCallback === undefined)
	                return rejectFactory_1.Rejection.invalid(toState.error()).toPromise();
	            var callbackResult = coreservices_1.services.$q.when(nextCallback(toState, fromState, injector));
	            return callbackResult.then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
	        }
	        return invokeNextCallback();
	    };
	    /**
	     * Registers an Invalid State handler
	     *
	     * Registers a [[OnInvalidCallback]] function to be invoked when [[StateService.transitionTo]]
	     * has been called with an invalid state reference parameter
	     *
	     * Example:
	     * ```js
	     * stateService.onInvalid(function(to, from, injector) {
	     *   if (to.name() === 'foo') {
	     *     let lazyLoader = injector.get('LazyLoadService');
	     *     return lazyLoader.load('foo')
	     *         .then(() => stateService.target('foo'));
	     *   }
	     * });
	     * ```
	     *
	     * @param {function} callback invoked when the toState is invalid
	     *   This function receives the (invalid) toState, the fromState, and an injector.
	     *   The function may optionally return a [[TargetState]] or a Promise for a TargetState.
	     *   If one is returned, it is treated as a redirect.
	     *
	     * @returns a function which deregisters the callback
	     */
	    StateService.prototype.onInvalid = function (callback) {
	        this.invalidCallbacks.push(callback);
	        return function deregisterListener() {
	            common_1.removeFrom(this.invalidCallbacks)(callback);
	        }.bind(this);
	    };
	    /**
	     * Reloads the current state
	     *
	     * A method that force reloads the current state, or a partial state hierarchy.
	     * All resolves are re-resolved, and components reinstantiated.
	     *
	     * #### Example:
	     * ```js
	     * let app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * ```
	     *
	     * Note: `reload()` is just an alias for:
	     *
	     * ```js
	     * $state.transitionTo($state.current, $state.params, {
	     *   reload: true, inherit: false
	     * });
	     * ```
	     *
	     * @param reloadState A state name or a state object.
	     *    If present, this state and all its children will be reloaded, but ancestors will not reload.
	     *
	     * #### Example:
	     * ```js
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
	     * //and current state is 'contacts.detail.item'
	     * let app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and nested 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * ```
	     *
	     * @returns A promise representing the state of the new transition. See [[StateService.go]]
	     */
	    StateService.prototype.reload = function (reloadState) {
	        return this.transitionTo(this.current, this.params, {
	            reload: predicates_1.isDefined(reloadState) ? reloadState : true,
	            inherit: false,
	            notify: false
	        });
	    };
	    ;
	    /**
	     * Transition to a different state or parameters
	     *
	     * Convenience method for transitioning to a new state.
	     *
	     * `$state.go` calls `$state.transitionTo` internally but automatically sets options to
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`.
	     * This allows you to easily use an absolute or relative to path and specify
	     * only the parameters you'd like to update (while letting unspecified parameters
	     * inherit from the currently active ancestor states).
	     *
	     * #### Example:
	     * ```js
	     * let app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * ```
	     *
	     *
	     * @param to Absolute state name, state object, or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param params A map of the parameters that will be sent to the state, will populate $stateParams.
	     *
	     *    Any parameters that are not specified will be inherited from currently defined parameters (because of `inherit: true`).
	     *    This allows, for example, going to a sibling state that shares parameters specified in a parent state.
	     *
	     *    Parameter inheritance only works between common ancestor states, I.e.
	     *    transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     *    will get you all current parameters, etc.
	     *
	     * @param options Transition options
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * - Possible success values:
	     *    - $state.current
	     *
	     * - Possible rejection reasons:
	     *   - transition superseded - when a newer transition has been started after this one
	     *   - transition aborted - when the transition is cancelled by a Transition Hook returning `false`
	     *   - transition failed - when a transition hook errors
	     *   - resolve error - when a resolve has errored or rejected
	     *
	     */
	    StateService.prototype.go = function (to, params, options) {
	        var defautGoOpts = { relative: this.$current, inherit: true };
	        var transOpts = common_1.defaults(options, defautGoOpts, transitionService_1.defaultTransOpts);
	        return this.transitionTo(to, params, transOpts);
	    };
	    ;
	    /**
	     * Creates a [[TargetState]]
	     *
	     * This is a factory method for creating a TargetState
	     *
	     * This may be returned from a Transition Hook to redirect a transition, for example.
	     */
	    StateService.prototype.target = function (identifier, params, options) {
	        if (options === void 0) { options = {}; }
	        // If we're reloading, find the state object to reload from
	        if (predicates_1.isObject(options.reload) && !options.reload.name)
	            throw new Error('Invalid reload state object');
	        var reg = this.router.stateRegistry;
	        options.reloadState = options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
	        if (options.reload && !options.reloadState)
	            throw new Error("No such reload state '" + (predicates_1.isString(options.reload) ? options.reload : options.reload.name) + "'");
	        var stateDefinition = reg.matcher.find(identifier, options.relative);
	        return new targetState_1.TargetState(identifier, stateDefinition, params, options);
	    };
	    ;
	    StateService.prototype.getCurrentPath = function () {
	        var _this = this;
	        var globals = this.router.globals;
	        var latestSuccess = globals.successfulTransitions.peekTail();
	        var rootPath = function () { return [new node_1.PathNode(_this.router.stateRegistry.root())]; };
	        return latestSuccess ? latestSuccess.treeChanges().to : rootPath();
	    };
	    /**
	     * Low-level method for transitioning to a new state.
	     *
	     * The [[go]] method (which uses `transitionTo` internally) is recommended in most situations.
	     *
	     * #### Example:
	     * ```js
	     * let app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * ```
	     *
	     * @param to State name or state object.
	     * @param toParams A map of the parameters that will be sent to the state,
	     *      will populate $stateParams.
	     * @param options Transition options
	     *
	     * @returns A promise representing the state of the new transition. See [[go]]
	     */
	    StateService.prototype.transitionTo = function (to, toParams, options) {
	        var _this = this;
	        if (toParams === void 0) { toParams = {}; }
	        if (options === void 0) { options = {}; }
	        var router = this.router;
	        var globals = router.globals;
	        var transHistory = globals.transitionHistory;
	        options = common_1.defaults(options, transitionService_1.defaultTransOpts);
	        options = common_1.extend(options, { current: transHistory.peekTail.bind(transHistory) });
	        var ref = this.target(to, toParams, options);
	        var currentPath = this.getCurrentPath();
	        if (!ref.exists())
	            return this._handleInvalidTargetState(currentPath, ref);
	        if (!ref.valid())
	            return common_1.silentRejection(ref.error());
	        /**
	         * Special handling for Ignored, Aborted, and Redirected transitions
	         *
	         * The semantics for the transition.run() promise and the StateService.transitionTo()
	         * promise differ. For instance, the run() promise may be rejected because it was
	         * IGNORED, but the transitionTo() promise is resolved because from the user perspective
	         * no error occurred.  Likewise, the transition.run() promise may be rejected because of
	         * a Redirect, but the transitionTo() promise is chained to the new Transition's promise.
	         */
	        var rejectedTransitionHandler = function (transition) { return function (error) {
	            if (error instanceof rejectFactory_1.Rejection) {
	                if (error.type === rejectFactory_1.RejectType.IGNORED) {
	                    // Consider ignored `Transition.run()` as a successful `transitionTo`
	                    router.urlRouter.update();
	                    return coreservices_1.services.$q.when(globals.current);
	                }
	                var detail = error.detail;
	                if (error.type === rejectFactory_1.RejectType.SUPERSEDED && error.redirected && detail instanceof targetState_1.TargetState) {
	                    // If `Transition.run()` was redirected, allow the `transitionTo()` promise to resolve successfully
	                    // by returning the promise for the new (redirect) `Transition.run()`.
	                    var redirect = transition.redirect(detail);
	                    return redirect.run().catch(rejectedTransitionHandler(redirect));
	                }
	                if (error.type === rejectFactory_1.RejectType.ABORTED) {
	                    router.urlRouter.update();
	                }
	            }
	            var errorHandler = _this.defaultErrorHandler();
	            errorHandler(error);
	            return coreservices_1.services.$q.reject(error);
	        }; };
	        var transition = this.router.transitionService.create(currentPath, ref);
	        var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
	        common_1.silenceUncaughtInPromise(transitionToPromise); // issue #2676
	        // Return a promise for the transition, which also has the transition object on it.
	        return common_1.extend(transitionToPromise, { transition: transition });
	    };
	    ;
	    /**
	     * Checks if the current state *is* the provided state
	     *
	     * Similar to [[includes]] but only checks for the full state name.
	     * If params is supplied then it will be tested for strict equality against the current
	     * active params object, so all params must match with none missing and no extras.
	     *
	     * #### Example:
	     * ```js
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     * ```
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * ```html
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * ```
	     *
	     * @param stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param options An options object. The options are:
	     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     *     test relative to `options.relative` state (or name).
	     *
	     * @returns Returns true if it is the state.
	     */
	    StateService.prototype.is = function (stateOrName, params, options) {
	        options = common_1.defaults(options, { relative: this.$current });
	        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
	        if (!predicates_1.isDefined(state))
	            return undefined;
	        if (this.$current !== state)
	            return false;
	        if (!params)
	            return true;
	        var schema = state.parameters({ inherit: true, matchingKeys: params });
	        return param_1.Param.equals(schema, param_1.Param.values(schema, params), this.params);
	    };
	    ;
	    /**
	     * Checks if the current state *includes* the provided state
	     *
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * #### Example when `$state.$current.name === 'contacts.details.item'`
	     * ```js
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     * ```
	     *
	     * #### Glob Examples when `* $state.$current.name === 'contacts.details.item.url'`:
	     * ```js
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * ```
	     *
	     * @param stateOrName A partial name, relative name, glob pattern,
	     *   or state object to be searched for within the current state name.
	     * @param params A param object, e.g. `{sectionId: section.id}`,
	     *   that you'd like to test against the current active state.
	     * @param options An options object. The options are:
	     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     *     test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    StateService.prototype.includes = function (stateOrName, params, options) {
	        options = common_1.defaults(options, { relative: this.$current });
	        var glob = predicates_1.isString(stateOrName) && glob_1.Glob.fromString(stateOrName);
	        if (glob) {
	            if (!glob.matches(this.$current.name))
	                return false;
	            stateOrName = this.$current.name;
	        }
	        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
	        if (!predicates_1.isDefined(state))
	            return undefined;
	        if (!predicates_1.isDefined(include[state.name]))
	            return false;
	        if (!params)
	            return true;
	        var schema = state.parameters({ inherit: true, matchingKeys: params });
	        return param_1.Param.equals(schema, param_1.Param.values(schema, params), this.params);
	    };
	    ;
	    /**
	     * Generates a URL for a state and parameters
	     *
	     * Returns the url for the given state populated with the given params.
	     *
	     * #### Example:
	     * ```js
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * ```
	     *
	     * @param stateOrName The state name or state object you'd like to generate a url from.
	     * @param params An object of parameter values to fill the state's required parameters.
	     * @param options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'),
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     *
	     * @returns {string} compiled state url
	     */
	    StateService.prototype.href = function (stateOrName, params, options) {
	        var defaultHrefOpts = {
	            lossy: true,
	            inherit: true,
	            absolute: false,
	            relative: this.$current
	        };
	        options = common_1.defaults(options, defaultHrefOpts);
	        params = params || {};
	        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
	        if (!predicates_1.isDefined(state))
	            return null;
	        if (options.inherit)
	            params = this.params.$inherit(params, this.$current, state);
	        var nav = (state && options.lossy) ? state.navigable : state;
	        if (!nav || nav.url === undefined || nav.url === null) {
	            return null;
	        }
	        return this.router.urlRouter.href(nav.url, param_1.Param.values(state.parameters(), params), {
	            absolute: options.absolute
	        });
	    };
	    ;
	    /**
	     * Sets or gets the default [[transitionTo]] error handler.
	     *
	     * The error handler is called when a [[Transition]] is rejected or when any error occurred during the Transition.
	     * This includes errors caused by resolves and transition hooks.
	     *
	     * Note:
	     * This handler does not receive certain Transition rejections.
	     * Redirected and Ignored Transitions are not considered to be errors by [[StateService.transitionTo]].
	     *
	     * The built-in default error handler logs the error to the console.
	     *
	     * You can provide your own custom handler.
	     *
	     * #### Example:
	     * ```js
	     * stateService.defaultErrorHandler(function() {
	     *   // Do not log transitionTo errors
	     * });
	     * ```
	     *
	     * @param handler a global error handler function
	     * @returns the current global error handler
	     */
	    StateService.prototype.defaultErrorHandler = function (handler) {
	        return this._defaultErrorHandler = handler || this._defaultErrorHandler;
	    };
	    StateService.prototype.get = function (stateOrName, base) {
	        var reg = this.router.stateRegistry;
	        if (arguments.length === 0)
	            return reg.get();
	        return reg.get(stateOrName, base || this.$current);
	    };
	    /**
	     * Lazy loads a state
	     *
	     * Explicitly runs a state's [[StateDeclaration.lazyLoad]] function.
	     *
	     * @param stateOrName the state that should be lazy loaded
	     * @param transition the optional Transition context to use (if the lazyLoad function requires an injector, etc)
	     * Note: If no transition is provided, a noop transition is created using the from the current state to the current state.
	     * This noop transition is not actually run.
	     *
	     * @returns a promise to lazy load
	     */
	    StateService.prototype.lazyLoad = function (stateOrName, transition) {
	        var state = this.get(stateOrName);
	        if (!state || !state.lazyLoad)
	            throw new Error("Can not lazy load " + stateOrName);
	        var currentPath = this.getCurrentPath();
	        var target = pathFactory_1.PathFactory.makeTargetState(currentPath);
	        transition = transition || this.router.transitionService.create(currentPath, target);
	        return lazyLoad_1.lazyLoadState(transition, state);
	    };
	    return StateService;
	}());
	exports.StateService = StateService;
	//# sourceMappingURL=stateService.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @coreapi
	 * @module core
	 */ /** */
	var stateParams_1 = __webpack_require__(49);
	var queue_1 = __webpack_require__(10);
	var common_1 = __webpack_require__(5);
	/**
	 * Global router state
	 *
	 * This is where we hold the global mutable state such as current state, current
	 * params, current transition, etc.
	 */
	var Globals = (function () {
	    /** @hidden */
	    function Globals(transitionService) {
	        var _this = this;
	        /** @inheritdoc */
	        this.params = new stateParams_1.StateParams();
	        /** @internalapi */
	        this.transitionHistory = new queue_1.Queue([], 1);
	        /** @internalapi */
	        this.successfulTransitions = new queue_1.Queue([], 1);
	        // TODO: This probably belongs in a hooks/globals.ts
	        var beforeNewTransition = function ($transition$) {
	            _this.transition = $transition$;
	            _this.transitionHistory.enqueue($transition$);
	            var updateGlobalState = function () {
	                _this.successfulTransitions.enqueue($transition$);
	                _this.$current = $transition$.$to();
	                _this.current = _this.$current.self;
	                common_1.copy($transition$.params(), _this.params);
	            };
	            $transition$.onSuccess({}, updateGlobalState, { priority: 10000 });
	            var clearCurrentTransition = function () { if (_this.transition === $transition$)
	                _this.transition = null; };
	            $transition$.promise.then(clearCurrentTransition, clearCurrentTransition);
	        };
	        transitionService.onBefore({}, beforeNewTransition);
	    }
	    return Globals;
	}());
	exports.Globals = Globals;
	//# sourceMappingURL=globals.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/** @module params */ /** for typedoc */
	var common_1 = __webpack_require__(5);
	var StateParams = (function () {
	    function StateParams(params) {
	        if (params === void 0) { params = {}; }
	        common_1.extend(this, params);
	    }
	    /**
	     * Merges a set of parameters with all parameters inherited between the common parents of the
	     * current state and a given destination state.
	     *
	     * @param {Object} newParams The set of parameters which will be composited with inherited params.
	     * @param {Object} $current Internal definition of object representing the current state.
	     * @param {Object} $to Internal definition of object representing state to transition to.
	     */
	    StateParams.prototype.$inherit = function (newParams, $current, $to) {
	        var parents = common_1.ancestors($current, $to), parentParams, inherited = {}, inheritList = [];
	        for (var i in parents) {
	            if (!parents[i] || !parents[i].params)
	                continue;
	            parentParams = Object.keys(parents[i].params);
	            if (!parentParams.length)
	                continue;
	            for (var j in parentParams) {
	                if (inheritList.indexOf(parentParams[j]) >= 0)
	                    continue;
	                inheritList.push(parentParams[j]);
	                inherited[parentParams[j]] = this[parentParams[j]];
	            }
	        }
	        return common_1.extend({}, inherited, newParams);
	    };
	    ;
	    return StateParams;
	}());
	exports.StateParams = StateParams;
	//# sourceMappingURL=stateParams.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @coreapi
	 * @module url
	 */ /** */
	"use strict";
	var coreservices_1 = __webpack_require__(8);
	var common_1 = __webpack_require__(5);
	/** @hidden */
	var makeStub = function (keys) {
	    return keys.reduce(function (acc, key) { return (acc[key] = coreservices_1.notImplemented(key), acc); }, { dispose: common_1.noop });
	};
	/** @hidden */ var locationServicesFns = ["url", "path", "search", "hash", "onChange"];
	/** @hidden */ var locationConfigFns = ["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"];
	/** @hidden */ var umfFns = ["type", "caseInsensitive", "strictMode", "defaultSquashPolicy"];
	/** @hidden */ var rulesFns = ["sort", "when", "otherwise", "rules", "rule", "removeRule"];
	/** @hidden */ var syncFns = ["deferIntercept", "listen", "sync", "match"];
	/**
	 * API for URL management
	 */
	var UrlService = (function () {
	    /** @hidden */
	    function UrlService(router, lateBind) {
	        if (lateBind === void 0) { lateBind = true; }
	        this.router = router;
	        this.rules = {};
	        this.config = {};
	        // proxy function calls from UrlService to the LocationService/LocationConfig
	        var locationServices = function () { return router.locationService; };
	        common_1.createProxyFunctions(locationServices, this, locationServices, locationServicesFns, lateBind);
	        var locationConfig = function () { return router.locationConfig; };
	        common_1.createProxyFunctions(locationConfig, this.config, locationConfig, locationConfigFns, lateBind);
	        var umf = function () { return router.urlMatcherFactory; };
	        common_1.createProxyFunctions(umf, this.config, umf, umfFns);
	        var urlRouter = function () { return router.urlRouter; };
	        common_1.createProxyFunctions(urlRouter, this.rules, urlRouter, rulesFns);
	        common_1.createProxyFunctions(urlRouter, this, urlRouter, syncFns);
	    }
	    UrlService.prototype.url = function (newurl, replace, state) { return; };
	    ;
	    /** @inheritdoc */
	    UrlService.prototype.path = function () { return; };
	    ;
	    /** @inheritdoc */
	    UrlService.prototype.search = function () { return; };
	    ;
	    /** @inheritdoc */
	    UrlService.prototype.hash = function () { return; };
	    ;
	    /** @inheritdoc */
	    UrlService.prototype.onChange = function (callback) { return; };
	    ;
	    /**
	     * Returns the current URL parts
	     *
	     * This method returns the current URL components as a [[UrlParts]] object.
	     *
	     * @returns the current url parts
	     */
	    UrlService.prototype.parts = function () {
	        return { path: this.path(), search: this.search(), hash: this.hash() };
	    };
	    UrlService.prototype.dispose = function () { };
	    /** @inheritdoc */
	    UrlService.prototype.sync = function (evt) { return; };
	    /** @inheritdoc */
	    UrlService.prototype.listen = function (enabled) { return; };
	    ;
	    /** @inheritdoc */
	    UrlService.prototype.deferIntercept = function (defer) { return; };
	    /** @inheritdoc */
	    UrlService.prototype.match = function (urlParts) { return; };
	    return UrlService;
	}());
	/** @hidden */
	UrlService.locationServiceStub = makeStub(locationServicesFns);
	/** @hidden */
	UrlService.locationConfigStub = makeStub(locationConfigFns);
	exports.UrlService = UrlService;
	//# sourceMappingURL=urlService.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(21));
	__export(__webpack_require__(30));
	__export(__webpack_require__(49));
	__export(__webpack_require__(22));
	//# sourceMappingURL=index.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module path */ /** for typedoc */
	__export(__webpack_require__(20));
	__export(__webpack_require__(23));
	//# sourceMappingURL=index.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/** @module resolve */ /** for typedoc */
	__export(__webpack_require__(26));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	//# sourceMappingURL=index.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(45));
	__export(__webpack_require__(33));
	__export(__webpack_require__(44));
	__export(__webpack_require__(46));
	__export(__webpack_require__(43));
	__export(__webpack_require__(47));
	__export(__webpack_require__(17));
	//# sourceMappingURL=index.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * # Transition subsystem
	 *
	 * This module contains APIs related to a Transition.
	 *
	 * See:
	 * - [[TransitionService]]
	 * - [[Transition]]
	 * - [[HookFn]], [[TransitionHookFn]], [[TransitionStateHookFn]], [[HookMatchCriteria]], [[HookResult]]
	 *
	 * @coreapi
	 * @preferred
	 * @module transition
	 */ /** for typedoc */
	__export(__webpack_require__(15));
	__export(__webpack_require__(19));
	__export(__webpack_require__(18));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(16));
	__export(__webpack_require__(41));
	__export(__webpack_require__(34));
	//# sourceMappingURL=index.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(29));
	__export(__webpack_require__(28));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(50));
	//# sourceMappingURL=index.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(42));
	//# sourceMappingURL=index.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * # Core classes and interfaces
	 *
	 * The classes and interfaces that are core to ui-router and do not belong
	 * to a more specific subsystem (such as resolve).
	 *
	 * @coreapi
	 * @preferred
	 * @module core
	 */ /** for typedoc */
	"use strict";
	/** @internalapi */
	var UIRouterPluginBase = (function () {
	    function UIRouterPluginBase() {
	    }
	    UIRouterPluginBase.prototype.dispose = function (router) { };
	    return UIRouterPluginBase;
	}());
	exports.UIRouterPluginBase = UIRouterPluginBase;
	//# sourceMappingURL=interface.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var MnViewConfig, UIRouter, UIRouterMarionette, UIViewMarionette, getStateHookBuilder, hashLocationPlugin, mnViewsBuilder, ref, ref1, routerInstance, servicesPlugin, viewConfigFactory,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty,
	  slice = [].slice;
	
	UIRouter = __webpack_require__(3).UIRouter;
	
	ref = __webpack_require__(60), mnViewsBuilder = ref.mnViewsBuilder, MnViewConfig = ref.MnViewConfig;
	
	ref1 = __webpack_require__(61), hashLocationPlugin = ref1.hashLocationPlugin, servicesPlugin = ref1.servicesPlugin;
	
	UIViewMarionette = __webpack_require__(73).UIViewMarionette;
	
	getStateHookBuilder = __webpack_require__(75);
	
	routerInstance = null;
	
	viewConfigFactory = function(node, config) {
	  return new MnViewConfig(node, config);
	};
	
	UIRouterMarionette = (function(superClass) {
	  extend(UIRouterMarionette, superClass);
	
	  UIRouterMarionette.getInstance = function() {
	    return routerInstance || (routerInstance = new this);
	  };
	
	  function UIRouterMarionette() {
	    UIRouterMarionette.__super__.constructor.apply(this, arguments);
	    this._started = false;
	    this.viewService._pluginapi._viewConfigFactory('backbone', viewConfigFactory);
	    this.plugin(servicesPlugin);
	    this.plugin(hashLocationPlugin);
	    this.stateRegistry.decorator("views", mnViewsBuilder);
	    this.stateRegistry.decorator("onExit", getStateHookBuilder("onExit"));
	    this.stateRegistry.decorator("onRetain", getStateHookBuilder("onRetain"));
	    this.stateRegistry.decorator("onEnter", getStateHookBuilder("onEnter"));
	    routerInstance = this;
	  }
	
	  UIRouterMarionette.prototype.addState = function(def) {
	    this.stateRegistry.register(def);
	    return this;
	  };
	
	  UIRouterMarionette.prototype.start = function(rootRegion) {
	    this.rootRegion = rootRegion;
	    if (this._started) {
	      throw new Error("Router was already started");
	    }
	    this.rootRegion.uiView = new UIViewMarionette(this, null, this.rootRegion, "");
	    this.rootRegion.uiView.register();
	    this.urlMatcherFactory.$get();
	    this.urlService.listen();
	    this.urlService.sync();
	    this._started = true;
	    return this;
	  };
	
	  UIRouterMarionette.prototype.beforeBackboneRoute = function(beforeRouteCallback) {
	    var originalRoute, uiRouter;
	    if (typeof beforeRouteCallback !== 'function') {
	      return;
	    }
	    originalRoute = Backbone.Router.prototype.route;
	    uiRouter = this;
	    return Backbone.Router.prototype.route = function(route, name, originalCallback) {
	      var bbRouter, wrappedCallback;
	      bbRouter = this;
	      wrappedCallback = function() {
	        var result, routeParams;
	        routeParams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	        result = beforeRouteCallback.call(uiRouter, route, name, routeParams, uiRouter.stateService);
	        if (_.isFunction(result != null ? result.then : void 0)) {
	          return result.then(function() {
	            return originalCallback.apply(bbRouter, routeParams);
	          });
	        } else {
	          return originalCallback.apply(bbRouter, routeParams);
	        }
	      };
	      return originalRoute.call(bbRouter, route, name, wrappedCallback);
	    };
	  };
	
	  return UIRouterMarionette;
	
	})(UIRouter);
	
	exports.UIViewMarionette = UIViewMarionette;
	
	exports.Router = UIRouterMarionette;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var MnViewConfig, Resolvable, ResolveContext, ViewService, hasAnyKey, ref, services, viewConfigId;
	
	ref = __webpack_require__(3), services = ref.services, ViewService = ref.ViewService, ResolveContext = ref.ResolveContext, Resolvable = ref.Resolvable;
	
	viewConfigId = 0;
	
	hasAnyKey = function(keys, obj) {
	  return _.reduce(keys, (function(memo, key) {
	    return memo || (obj[key] != null);
	  }), false);
	};
	
	exports.mnViewsBuilder = function(state) {
	  var keys, views, viewsObject;
	  if (!state.parent) {
	    return;
	  }
	  keys = ['view', 'controller'];
	  views = {};
	  viewsObject = state.views || {
	    $default: _.pick(state, keys)
	  };
	  _.each(viewsObject, function(config, name) {
	    var normalized;
	    name = name || '$default';
	    config.resolveAs = config.resolveAs || '$resolve';
	    config.$type = 'backbone';
	    config.$context = state;
	    config.$name = name;
	    normalized = ViewService.normalizeUIViewTarget(config.$context, config.$name);
	    config.$uiViewName = normalized.uiViewName;
	    config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
	    return views[name] = config;
	  });
	  return views;
	};
	
	exports.MnViewConfig = MnViewConfig = (function() {
	  function MnViewConfig(path, viewDecl) {
	    this.path = path;
	    this.viewDecl = viewDecl;
	    this.loaded = true;
	    this.$id = viewConfigId++;
	  }
	
	  MnViewConfig.prototype.load = function() {
	    return services.$q.when(this);
	  };
	
	  return MnViewConfig;

	})();


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(62));
	//# sourceMappingURL=vanilla.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * Naive, pure JS implementation of core ui-router services
	 *
	 *
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	__export(__webpack_require__(63));
	__export(__webpack_require__(64));
	__export(__webpack_require__(65));
	__export(__webpack_require__(67));
	__export(__webpack_require__(68));
	__export(__webpack_require__(69));
	__export(__webpack_require__(70));
	__export(__webpack_require__(71));
	__export(__webpack_require__(72));
	//# sourceMappingURL=index.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	var index_1 = __webpack_require__(4);
	/**
	 * An angular1-like promise api
	 *
	 * This object implements four methods similar to the
	 * [angular 1 promise api](https://docs.angularjs.org/api/ng/service/$q)
	 *
	 * UI-Router evolved from an angular 1 library to a framework agnostic library.
	 * However, some of the `ui-router-core` code uses these ng1 style APIs to support ng1 style dependency injection.
	 *
	 * This API provides native ES6 promise support wrapped as a $q-like API.
	 * Internally, UI-Router uses this $q object to perform promise operations.
	 * The `angular-ui-router` (ui-router for angular 1) uses the $q API provided by angular.
	 *
	 * $q-like promise api
	 */
	exports.$q = {
	    /** Normalizes a value as a promise */
	    when: function (val) { return new Promise(function (resolve, reject) { return resolve(val); }); },
	    /** Normalizes a value as a promise rejection */
	    reject: function (val) { return new Promise(function (resolve, reject) { reject(val); }); },
	    /** @returns a deferred object, which has `resolve` and `reject` functions */
	    defer: function () {
	        var deferred = {};
	        deferred.promise = new Promise(function (resolve, reject) {
	            deferred.resolve = resolve;
	            deferred.reject = reject;
	        });
	        return deferred;
	    },
	    /** Like Promise.all(), but also supports object key/promise notation like $q */
	    all: function (promises) {
	        if (index_1.isArray(promises)) {
	            return new Promise(function (resolve, reject) {
	                var results = [];
	                promises.reduce(function (wait4, promise) { return wait4.then(function () { return promise.then(function (val) { return results.push(val); }); }); }, exports.$q.when())
	                    .then(function () { resolve(results); }, reject);
	            });
	        }
	        if (index_1.isObject(promises)) {
	            // Convert promises map to promises array.
	            // When each promise resolves, map it to a tuple { key: key, val: val }
	            var chain = Object.keys(promises)
	                .map(function (key) { return promises[key].then(function (val) { return ({ key: key, val: val }); }); });
	            // Then wait for all promises to resolve, and convert them back to an object
	            return exports.$q.all(chain).then(function (values) {
	                return values.reduce(function (acc, tuple) { acc[tuple.key] = tuple.val; return acc; }, {});
	            });
	        }
	    }
	};
	//# sourceMappingURL=$q.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	var index_1 = __webpack_require__(4);
	// globally available injectables
	var globals = {};
	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
	var ARGUMENT_NAMES = /([^\s,]+)/g;
	/**
	 * A basic angular1-like injector api
	 *
	 * This object implements four methods similar to the
	 * [angular 1 dependency injector](https://docs.angularjs.org/api/auto/service/$injector)
	 *
	 * UI-Router evolved from an angular 1 library to a framework agnostic library.
	 * However, some of the `ui-router-core` code uses these ng1 style APIs to support ng1 style dependency injection.
	 *
	 * This object provides a naive implementation of a globally scoped dependency injection system.
	 * It supports the following DI approaches:
	 *
	 * ### Function parameter names
	 *
	 * A function's `.toString()` is called, and the parameter names are parsed.
	 * This only works when the parameter names aren't "mangled" by a minifier such as UglifyJS.
	 *
	 * ```js
	 * function injectedFunction(FooService, BarService) {
	 *   // FooService and BarService are injected
	 * }
	 * ```
	 *
	 * ### Function annotation
	 *
	 * A function may be annotated with an array of dependency names as the `$inject` property.
	 *
	 * ```js
	 * injectedFunction.$inject = [ 'FooService', 'BarService' ];
	 * function injectedFunction(fs, bs) {
	 *   // FooService and BarService are injected as fs and bs parameters
	 * }
	 * ```
	 *
	 * ### Array notation
	 *
	 * An array provides the names of the dependencies to inject (as strings).
	 * The function is the last element of the array.
	 *
	 * ```js
	 * [ 'FooService', 'BarService', function (fs, bs) {
	 *   // FooService and BarService are injected as fs and bs parameters
	 * }]
	 * ```
	 *
	 * @type {$InjectorLike}
	 */
	exports.$injector = {
	    /** Gets an object from DI based on a string token */
	    get: function (name) { return globals[name]; },
	    /** Returns true if an object named `name` exists in global DI */
	    has: function (name) { return exports.$injector.get(name) != null; },
	    /**
	     * Injects a function
	     *
	     * @param fn the function to inject
	     * @param context the function's `this` binding
	     * @param locals An object with additional DI tokens and values, such as `{ someToken: { foo: 1 } }`
	     */
	    invoke: function (fn, context, locals) {
	        var all = index_1.extend({}, globals, locals || {});
	        var params = exports.$injector.annotate(fn);
	        var ensureExist = index_1.assertPredicate(function (key) { return all.hasOwnProperty(key); }, function (key) { return "DI can't find injectable: '" + key + "'"; });
	        var args = params.filter(ensureExist).map(function (x) { return all[x]; });
	        if (index_1.isFunction(fn))
	            return fn.apply(context, args);
	        else
	            return fn.slice(-1)[0].apply(context, args);
	    },
	    /**
	     * Returns a function's dependencies
	     *
	     * Analyzes a function (or array) and returns an array of DI tokens that the function requires.
	     * @return an array of `string`s
	     */
	    annotate: function (fn) {
	        if (!index_1.isInjectable(fn))
	            throw new Error("Not an injectable function: " + fn);
	        if (fn && fn.$inject)
	            return fn.$inject;
	        if (index_1.isArray(fn))
	            return fn.slice(0, -1);
	        var fnStr = fn.toString().replace(STRIP_COMMENTS, '');
	        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
	        return result || [];
	    }
	};
	//# sourceMappingURL=$injector.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @internalapi
	 * @module vanilla
	 */ /** */
	"use strict";
	var utils_1 = __webpack_require__(66);
	var predicates_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(5);
	/** A base `LocationServices` */
	var BaseLocationServices = (function () {
	    function BaseLocationServices(router, fireAfterUpdate) {
	        var _this = this;
	        this.fireAfterUpdate = fireAfterUpdate;
	        this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
	        this._listeners = [];
	        this.hash = function () { return utils_1.parseUrl(_this._get()).hash; };
	        this.path = function () { return utils_1.parseUrl(_this._get()).path; };
	        this.search = function () { return utils_1.getParams(utils_1.parseUrl(_this._get()).search); };
	        this._location = window && window.location;
	        this._history = window && window.history;
	    }
	    BaseLocationServices.prototype.url = function (url, replace) {
	        if (replace === void 0) { replace = true; }
	        if (predicates_1.isDefined(url) && url !== this._get()) {
	            this._set(null, null, url, replace);
	            if (this.fireAfterUpdate) {
	                var evt_1 = common_1.extend(new Event("locationchange"), { url: url });
	                this._listeners.forEach(function (cb) { return cb(evt_1); });
	            }
	        }
	        return utils_1.buildUrl(this);
	    };
	    BaseLocationServices.prototype.onChange = function (cb) {
	        var _this = this;
	        this._listeners.push(cb);
	        return function () { return common_1.removeFrom(_this._listeners, cb); };
	    };
	    BaseLocationServices.prototype.dispose = function (router) {
	        common_1.deregAll(this._listeners);
	    };
	    return BaseLocationServices;
	}());
	exports.BaseLocationServices = BaseLocationServices;
	//# sourceMappingURL=baseLocationService.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	var index_1 = __webpack_require__(4);
	var common_1 = __webpack_require__(5);
	var beforeAfterSubstr = function (char) { return function (str) {
	    if (!str)
	        return ["", ""];
	    var idx = str.indexOf(char);
	    if (idx === -1)
	        return [str, ""];
	    return [str.substr(0, idx), str.substr(idx + 1)];
	}; };
	exports.splitHash = beforeAfterSubstr("#");
	exports.splitQuery = beforeAfterSubstr("?");
	exports.splitEqual = beforeAfterSubstr("=");
	exports.trimHashVal = function (str) { return str ? str.replace(/^#/, "") : ""; };
	exports.keyValsToObjectR = function (accum, _a) {
	    var key = _a[0], val = _a[1];
	    if (!accum.hasOwnProperty(key)) {
	        accum[key] = val;
	    }
	    else if (index_1.isArray(accum[key])) {
	        accum[key].push(val);
	    }
	    else {
	        accum[key] = [accum[key], val];
	    }
	    return accum;
	};
	exports.getParams = function (queryString) {
	    return queryString.split("&").filter(common_1.identity).map(exports.splitEqual).reduce(exports.keyValsToObjectR, {});
	};
	function parseUrl(url) {
	    var orEmptyString = function (x) { return x || ""; };
	    var _a = exports.splitHash(url).map(orEmptyString), beforehash = _a[0], hash = _a[1];
	    var _b = exports.splitQuery(beforehash).map(orEmptyString), path = _b[0], search = _b[1];
	    return { path: path, search: search, hash: hash, url: url };
	}
	exports.parseUrl = parseUrl;
	exports.buildUrl = function (loc) {
	    var path = loc.path();
	    var searchObject = loc.search();
	    var hash = loc.hash();
	    var search = Object.keys(searchObject).map(function (key) {
	        var param = searchObject[key];
	        var vals = index_1.isArray(param) ? param : [param];
	        return vals.map(function (val) { return key + "=" + val; });
	    }).reduce(common_1.unnestR, []).join("&");
	    return path + (search ? "?" + search : "") + (hash ? "#" + hash : "");
	};
	function locationPluginFactory(name, isHtml5, serviceClass, configurationClass) {
	    return function (router) {
	        var service = router.locationService = new serviceClass(router);
	        var configuration = router.locationConfig = new configurationClass(router, isHtml5);
	        function dispose(router) {
	            router.dispose(service);
	            router.dispose(configuration);
	        }
	        return { name: name, service: service, configuration: configuration, dispose: dispose };
	    };
	}
	exports.locationPluginFactory = locationPluginFactory;
	//# sourceMappingURL=utils.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	var utils_1 = __webpack_require__(66);
	var baseLocationService_1 = __webpack_require__(65);
	/** A `LocationServices` that uses the browser hash "#" to get/set the current location */
	var HashLocationService = (function (_super) {
	    __extends(HashLocationService, _super);
	    function HashLocationService(router) {
	        var _this = _super.call(this, router, false) || this;
	        window.addEventListener('hashchange', _this._listener, false);
	        return _this;
	    }
	    HashLocationService.prototype._get = function () {
	        return utils_1.trimHashVal(this._location.hash);
	    };
	    HashLocationService.prototype._set = function (state, title, url, replace) {
	        this._location.hash = url;
	    };
	    HashLocationService.prototype.dispose = function (router) {
	        _super.prototype.dispose.call(this, router);
	        window.removeEventListener('hashchange', this._listener);
	    };
	    return HashLocationService;
	}(baseLocationService_1.BaseLocationServices));
	exports.HashLocationService = HashLocationService;
	//# sourceMappingURL=hashLocationService.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	var baseLocationService_1 = __webpack_require__(65);
	/** A `LocationServices` that gets/sets the current location from an in-memory object */
	var MemoryLocationService = (function (_super) {
	    __extends(MemoryLocationService, _super);
	    function MemoryLocationService(router) {
	        return _super.call(this, router, true) || this;
	    }
	    MemoryLocationService.prototype._get = function () {
	        return this._url;
	    };
	    MemoryLocationService.prototype._set = function (state, title, url, replace) {
	        this._url = url;
	    };
	    return MemoryLocationService;
	}(baseLocationService_1.BaseLocationServices));
	exports.MemoryLocationService = MemoryLocationService;
	//# sourceMappingURL=memoryLocationService.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var utils_1 = __webpack_require__(66);
	var baseLocationService_1 = __webpack_require__(65);
	/**
	 * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
	 *
	 * Uses `history.pushState` and `history.replaceState`
	 */
	var PushStateLocationService = (function (_super) {
	    __extends(PushStateLocationService, _super);
	    function PushStateLocationService(router) {
	        var _this = _super.call(this, router, true) || this;
	        _this._config = router.urlService.config;
	        window.addEventListener("popstate", _this._listener, false);
	        return _this;
	    }
	    ;
	    PushStateLocationService.prototype._get = function () {
	        var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
	        search = utils_1.splitQuery(search)[1]; // strip ? if found
	        hash = utils_1.splitHash(hash)[1]; // strip # if found
	        return pathname + (search ? "?" + search : "") + (hash ? "$" + search : "");
	    };
	    PushStateLocationService.prototype._set = function (state, title, url, replace) {
	        var _a = this, _config = _a._config, _history = _a._history;
	        var fullUrl = _config.baseHref() + url;
	        if (replace) {
	            _history.replaceState(state, title, fullUrl);
	        }
	        else {
	            _history.pushState(state, title, fullUrl);
	        }
	    };
	    PushStateLocationService.prototype.dispose = function (router) {
	        _super.prototype.dispose.call(this, router);
	        window.removeEventListener("popstate", this._listener);
	    };
	    return PushStateLocationService;
	}(baseLocationService_1.BaseLocationServices));
	exports.PushStateLocationService = PushStateLocationService;
	//# sourceMappingURL=pushStateLocationService.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var predicates_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(5);
	/** A `LocationConfig` mock that gets/sets all config from an in-memory object */
	var MemoryLocationConfig = (function () {
	    function MemoryLocationConfig() {
	        var _this = this;
	        this._baseHref = '';
	        this._port = 80;
	        this._protocol = "http";
	        this._host = "localhost";
	        this._hashPrefix = "";
	        this.port = function () { return _this._port; };
	        this.protocol = function () { return _this._protocol; };
	        this.host = function () { return _this._host; };
	        this.baseHref = function () { return _this._baseHref; };
	        this.html5Mode = function () { return false; };
	        this.hashPrefix = function (newval) { return predicates_1.isDefined(newval) ? _this._hashPrefix = newval : _this._hashPrefix; };
	        this.dispose = common_1.noop;
	    }
	    return MemoryLocationConfig;
	}());
	exports.MemoryLocationConfig = MemoryLocationConfig;
	//# sourceMappingURL=memoryLocationConfig.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	var predicates_1 = __webpack_require__(6);
	/** A `LocationConfig` that delegates to the browser's `location` object */
	var BrowserLocationConfig = (function () {
	    function BrowserLocationConfig(router, _isHtml5) {
	        if (_isHtml5 === void 0) { _isHtml5 = false; }
	        this._isHtml5 = _isHtml5;
	        this._baseHref = undefined;
	        this._hashPrefix = "";
	    }
	    BrowserLocationConfig.prototype.port = function () {
	        return parseInt(location.port);
	    };
	    BrowserLocationConfig.prototype.protocol = function () {
	        return location.protocol;
	    };
	    BrowserLocationConfig.prototype.host = function () {
	        return location.host;
	    };
	    BrowserLocationConfig.prototype.html5Mode = function () {
	        return this._isHtml5;
	    };
	    BrowserLocationConfig.prototype.hashPrefix = function (newprefix) {
	        return predicates_1.isDefined(newprefix) ? this._hashPrefix = newprefix : this._hashPrefix;
	    };
	    ;
	    BrowserLocationConfig.prototype.baseHref = function (href) {
	        return predicates_1.isDefined(href) ? this._baseHref = href : this._baseHref || this.applyDocumentBaseHref();
	    };
	    BrowserLocationConfig.prototype.applyDocumentBaseHref = function () {
	        var baseTags = document.getElementsByTagName("base");
	        return this._baseHref = baseTags.length ? baseTags[0].href.substr(location.origin.length) : "";
	    };
	    BrowserLocationConfig.prototype.dispose = function () { };
	    return BrowserLocationConfig;
	}());
	exports.BrowserLocationConfig = BrowserLocationConfig;
	//# sourceMappingURL=browserLocationConfig.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * @internalapi
	 * @module vanilla
	 */
	/** */
	var browserLocationConfig_1 = __webpack_require__(71);
	var hashLocationService_1 = __webpack_require__(67);
	var utils_1 = __webpack_require__(66);
	var pushStateLocationService_1 = __webpack_require__(69);
	var memoryLocationService_1 = __webpack_require__(68);
	var memoryLocationConfig_1 = __webpack_require__(70);
	var _injector_1 = __webpack_require__(64);
	var _q_1 = __webpack_require__(63);
	var coreservices_1 = __webpack_require__(8);
	function servicesPlugin(router) {
	    coreservices_1.services.$injector = _injector_1.$injector;
	    coreservices_1.services.$q = _q_1.$q;
	    return { name: "vanilla.services", $q: _q_1.$q, $injector: _injector_1.$injector, dispose: function () { return null; } };
	}
	exports.servicesPlugin = servicesPlugin;
	/** A `UIRouterPlugin` uses the browser hash to get/set the current location */
	exports.hashLocationPlugin = utils_1.locationPluginFactory('vanilla.hashBangLocation', false, hashLocationService_1.HashLocationService, browserLocationConfig_1.BrowserLocationConfig);
	/** A `UIRouterPlugin` that gets/sets the current location using the browser's `location` and `history` apis */
	exports.pushStateLocationPlugin = utils_1.locationPluginFactory("vanilla.pushStateLocation", true, pushStateLocationService_1.PushStateLocationService, browserLocationConfig_1.BrowserLocationConfig);
	/** A `UIRouterPlugin` that gets/sets the current location from an in-memory object */
	exports.memoryLocationPlugin = utils_1.locationPluginFactory("vanilla.memoryLocation", false, memoryLocationService_1.MemoryLocationService, memoryLocationConfig_1.MemoryLocationConfig);
	//# sourceMappingURL=plugins.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var Mn, ResolveContext, UIViewMarionette, id,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	id = 0;
	
	Mn = __webpack_require__(74);
	
	ResolveContext = __webpack_require__(3).ResolveContext;
	
	exports.UIViewMarionette = UIViewMarionette = (function(superClass) {
	  extend(UIViewMarionette, superClass);
	
	  function UIViewMarionette() {
	    return UIViewMarionette.__super__.constructor.apply(this, arguments);
	  }
	
	  UIViewMarionette.prototype.initialize = function(router, mnLayout, mnRegion, mnRegionName) {
	    var name, parentContext, parentFqn, ref, ref1, ref2, ref3, ref4, ref5, ref6;
	    this.router = router;
	    this.mnRegion = mnRegion;
	    this.listenTo(mnLayout, "before:destroy", this.destroy);
	    name = mnRegionName || '$default';
	    parentContext = mnLayout != null ? (ref = mnLayout.parent) != null ? (ref1 = ref.uiView) != null ? (ref2 = ref1.activeUIView.config) != null ? (ref3 = ref2.viewDecl) != null ? ref3.$context : void 0 : void 0 : void 0 : void 0 : void 0;
	    parentFqn = mnLayout != null ? (ref4 = mnLayout.parent) != null ? (ref5 = ref4.uiView) != null ? (ref6 = ref5.activeUIView) != null ? ref6.fqn : void 0 : void 0 : void 0 : void 0;
	    return this.activeUIView = {
	      $type: 'backbone',
	      id: id++,
	      name: name,
	      fqn: parentFqn ? parentFqn + "." + name : name,
	      creationContext: parentContext || this.router.stateRegistry.root(),
	      configUpdated: (function(_this) {
	        return function(config) {
	          return _this.onConfigUpdated(config);
	        };
	      })(this),
	      config: void 0
	    };
	  };
	
	  UIViewMarionette.prototype.register = function() {
	    return this.deregister = this.router.viewService.registerUIView(this.activeUIView);
	  };
	
	  UIViewMarionette.prototype.onConfigUpdated = function(newConfig) {
	    if (!newConfig) {
	      return this.clearPreviousConfig();
	    }
	    if (newConfig.viewDecl.$type !== 'backbone') {
	      return;
	    }
	    if (this.activeUIView.config === newConfig) {
	      return;
	    }
	    return this.updateView(newConfig);
	  };
	
	  UIViewMarionette.prototype.updateView = function(newConfig) {
	    var controller, resolved, state, view;
	    this.activeUIView.config = newConfig;
	    resolved = this.getResolved(newConfig);
	    view = this.getView(newConfig, {
	      resolved: resolved
	    });
	    controller = this.getController(newConfig, {
	      resolved: resolved,
	      view: view
	    });
	    if (view != null) {
	      this.mnRegion.show(view);
	      if (controller != null) {
	        controller.triggerMethod("ui:view:show");
	        this.listenToOnce(view, "destroy", function() {
	          return controller.destroy();
	        });
	      }
	    }
	    state = newConfig.path[newConfig.path.length - 1].state.self;
	    return this.registerEventCallbacks(state, view, controller);
	  };
	
	  UIViewMarionette.prototype.getResolved = function(config) {
	    var context, i, key, keys, len, resolved;
	    context = new ResolveContext(config.path);
	    resolved = {};
	    keys = _.filter(context.getTokens(), function(token) {
	      return typeof token === 'string';
	    });
	    for (i = 0, len = keys.length; i < len; i++) {
	      key = keys[i];
	      resolved[key] = context.getResolvable(key).data;
	    }
	    return resolved;
	  };
	
	  UIViewMarionette.prototype.getView = function(config, viewOptions) {
	    var ref, view;
	    if ((config != null ? (ref = config.viewDecl) != null ? ref.view : void 0 : void 0) != null) {
	      return view = new config.viewDecl.view(viewOptions);
	    }
	  };
	
	  UIViewMarionette.prototype.getController = function(config, controllerOptions) {
	    var ref;
	    if ((config != null ? (ref = config.viewDecl) != null ? ref.controller : void 0 : void 0) != null) {
	      return new config.viewDecl.controller(controllerOptions);
	    }
	  };
	
	  UIViewMarionette.prototype.registerEventCallbacks = function(state, view, controller) {
	    var criteria;
	    criteria = {
	      exiting: state.name
	    };
	    if (view != null) {
	      this.registerExitCallback(view, criteria);
	    }
	    if (controller != null) {
	      return this.registerExitCallback(controller, criteria);
	    }
	  };
	
	  UIViewMarionette.prototype.registerExitCallback = function(component, criteria) {
	    var deregisterFn;
	    if (typeof component.uiCanExit === 'function') {
	      deregisterFn = this.router.transitionService.onBefore(criteria, component.uiCanExit, {
	        bind: component
	      });
	      return component.on("destroy", function() {
	        return console.log("dregistering uiCanExit for " + criteria.exiting) && deregisterFn();
	      });
	    }
	  };
	
	  UIViewMarionette.prototype.clearPreviousConfig = function() {
	    var ref;
	    this.mnRegion.empty();
	    (this.activeUIView.view != null) && ((ref = this.activeUIView.controller) != null ? ref.triggerMethod('view:destroyed') : void 0);
	    return this.activeUIView.config = void 0;
	  };
	
	  UIViewMarionette.prototype.onBeforeDestroy = function() {
	    return typeof this.deregister === "function" ? this.deregister() : void 0;
	  };
	
	  return UIViewMarionette;
	
	})(Mn.Object);


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var ResolveContext, getLocals, getStateHookBuilder;
	
	ResolveContext = __webpack_require__(3).ResolveContext;
	
	getLocals = function(resolveContext) {
	  var i, key, len, resolvable, tokens, tuples, waitPolicy;
	  tokens = _.filter(resolveContext.getTokens(), function(token) {
	    return typeof token === 'string';
	  });
	  tuples = {};
	  for (i = 0, len = tokens.length; i < len; i++) {
	    key = tokens[i];
	    resolvable = resolveContext.getResolvable(key);
	    waitPolicy = resolveContext.getPolicy(resolvable).async;
	    tuples[key] = waitPolicy === 'NOWAIT' ? resolvable.promise : resolvable.data;
	  }
	  return tuples;
	};
	
	module.exports = getStateHookBuilder = function(hookName) {
	  return function(state, parentFn) {
	    var decoratedHook, hook, pathname;
	    hook = state[hookName];
	    pathname = hookName === 'onExit' ? 'from' : 'to';
	    decoratedHook = function(transition, state) {
	      var locals, resolveContext;
	      resolveContext = new ResolveContext(transition.treeChanges(pathname));
	      locals = getLocals(resolveContext);
	      return hook(transition, state, locals);
	    };
	    if (hook != null) {
	      return decoratedHook;
	    }
	  };
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Mn, Router, UISref, UISrefActive,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	Mn = __webpack_require__(74);
	
	Router = __webpack_require__(59).Router;
	
	exports.UISref = UISref = (function(superClass) {
	  extend(UISref, superClass);
	
	  function UISref() {
	    return UISref.__super__.constructor.apply(this, arguments);
	  }
	
	  UISref.prototype.ui = {
	    sref: '[ui-sref]'
	  };
	
	  UISref.prototype.events = {
	    'click @ui.ref': 'onClickLink'
	  };
	
	  UISref.prototype.onClickLink = function() {};
	
	  UISref.prototype.onAttach = function() {
	    var router;
	    router = Router.getInstance();
	    return this.ui.sref.each(function(i, e) {
	      var params, state, url;
	      e = $(e);
	      state = e.attr('ui-sref');
	      try {
	        params = JSON.parse(e.attr('ui-sparams'));
	      } catch (error) {}
	      url = router.stateService.href(state, params);
	      e.attr('href', url);
	      return e.click(function(event) {
	        var button;
	        button = event.which;
	        if (button > 1 || event.shiftKey || event.metaKey || event.altKey || event.ctrlKey || e.attr('target')) {
	          return;
	        }
	        router.stateService.go(state, params);
	        return event.preventDefault();
	      });
	    });
	  };
	
	  return UISref;
	
	})(Mn.Behavior);
	
	exports.UISrefActive = UISrefActive = (function(superClass) {
	  extend(UISrefActive, superClass);
	
	  function UISrefActive() {
	    return UISrefActive.__super__.constructor.apply(this, arguments);
	  }
	
	  UISrefActive.prototype.ui = {
	    active: '[ui-sref-active]'
	  };
	
	  UISrefActive.prototype.defaults = {
	    activeClasses: 'ui-state-active',
	    applyToRoot: false,
	    modelStateField: 'state'
	  };
	
	  UISrefActive.prototype.initialize = function() {
	    this.router = Router.getInstance();
	    return this.deregister = this.router.transitionService.onSuccess({}, (function(_this) {
	      return function(transition) {
	        return _this.onStateChange();
	      };
	    })(this));
	  };
	
	  UISrefActive.prototype.onRender = function() {
	    return this.onStateChange();
	  };
	
	  UISrefActive.prototype.onStateChange = function() {
	    var classFn, compareState, ref;
	    if (this.getOption('applyToRoot')) {
	      compareState = (ref = this.view.model) != null ? ref.get(this.getOption('modelStateField')) : void 0;
	      if (compareState != null) {
	        classFn = this.router.stateService.includes(compareState) ? 'addClass' : 'removeClass';
	        this.$el[classFn](this.options.activeClasses);
	      }
	    }
	    return this.ui.active.each((function(_this) {
	      return function(i, el) {
	        var $el, params;
	        $el = $(el);
	        params = $el.attr('ui-sparams');
	        if (params) {
	          params = JSON.parse(params);
	        }
	        compareState = $el.attr('ui-sref-active') || $el.attr('ui-sref');
	        classFn = _this.router.stateService.includes(compareState, params) ? 'addClass' : 'removeClass';
	        return $el[classFn](_this.options.activeClasses);
	      };
	    })(this));
	  };
	
	  UISrefActive.prototype.onBeforeDestroy = function() {
	    return this.deregister();
	  };
	
	  UISrefActive.prototype.removeListeners = function() {
	    return this.ui.active.off('ui:state:change');
	  };
	
	  return UISrefActive;
	
	})(Mn.Behavior);


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Mn, Router, UILayoutMn2, UIViewMarionette,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	UIViewMarionette = __webpack_require__(73).UIViewMarionette;
	
	Router = __webpack_require__(59).Router;
	
	Mn = __webpack_require__(74);
	
	module.exports = UILayoutMn2 = (function(superClass) {
	  extend(UILayoutMn2, superClass);
	
	  function UILayoutMn2() {
	    UILayoutMn2.__super__.constructor.apply(this, arguments);
	    this.on("attach", this.onAttachUI);
	    this.on("before:destroy", this.onBeforeDestroyUI);
	  }
	
	  UILayoutMn2.prototype.regions = {
	    "$default": "[ui-view]"
	  };
	
	  UILayoutMn2.prototype.onAttachUI = function(me, parentRegion) {
	    var ref, region, regionName;
	    this.parent = parentRegion;
	    ref = this.regions;
	    for (regionName in ref) {
	      if (!hasProp.call(ref, regionName)) continue;
	      region = ref[regionName];
	      this[regionName].uiView = new UIViewMarionette(Router.getInstance(), this, this[regionName], regionName);
	      this[regionName].uiView.register();
	    }
	  };
	
	  UILayoutMn2.prototype.onBeforeDestroyUI = function() {
	    return this.parent = null;
	  };
	
	  return UILayoutMn2;
	
	})(Mn.LayoutView);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ui-router-marionette.js.map