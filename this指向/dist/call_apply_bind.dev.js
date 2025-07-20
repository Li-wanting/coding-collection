"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var obj = {
  a: 1
};

function func(val1, val2) {
  console.log(this);
  console.log(val1, val2);
} // func.call(obj, 2, 3);
// 使用原型链，将_call存在Function.prototype中，这样所有函数调用时都可以使用到_call


Function.prototype.myCall = function (context) {
  var _context;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  // 判断context，如果为null或者undefined，直接指向window
  context = context || window;
  args = args || []; // 给context新增一个独一无二的属性以免覆盖原有属性

  var key = Symbol("key"); // 生成唯一值

  context[key] = this; // this->func  context[key]=func
  // 然后对于这样的一个调用_call的函数，我们可能有返回值，所以必须用变量收集起来。

  var result = (_context = context)[key].apply(_context, _toConsumableArray(args)); // 删除临时属性


  delete context[key];
  return result;
};

Function.prototype.myApply = function (context, args) {
  args = args || [];
  var key = Symbol("key"); // 生成唯一值

  context[key] = this; // this->func  context[key]=func

  var result = context[key].apply(context, _toConsumableArray(args));
  delete context[key];
  return result;
}; // bind 方法返回一个新的函数，这个函数与调用 bind 方法的原始函数相同，但有以下特性：
// this 值被永久设置为 bind 方法的第一个参数。
// 当新函数被调用时，提供的参数会按照 bind 方法传递的参数列表顺序，加在新函数调用时的参数列表之前。


Function.prototype.myBind = function (context) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var fn = this;
  return function _target() {
    for (var _len3 = arguments.length, subArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      subArgs[_key3] = arguments[_key3];
    }

    var allArgs = [].concat(args, subArgs); // 是否通过new来调用的

    if (this instanceof _target ? this.constructor : void 0) {
      return new fn(allArgs);
    }

    return fn.apply(context, allArgs);
  };
}; // func.myCall(obj, 2, 3)


func.myApply(obj, [2, 3]);
func.myBind(obj, 2, 3);
console.log(obj);