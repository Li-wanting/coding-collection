const obj = {
  a: 1,
};

function func(val1, val2) {
  console.log(this);
  console.log(val1, val2);
}

// func.call(obj, 2, 3);
 // 使用原型链，将_call存在Function.prototype中，这样所有函数调用时都可以使用到_call
Function.prototype.myCall = function (context, ...args) {
  // 判断context，如果为null或者undefined，直接指向window
  context=context||window
  args = args || [];

  // 给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol("key"); // 生成唯一值
  context[key] = this; // this->func  context[key]=func

  // 然后对于这样的一个调用_call的函数，我们可能有返回值，所以必须用变量收集起来。
  const result = context[key](...args);
  
  // 删除临时属性
  delete context[key];

  return result;
};

Function.prototype.myApply = function (context, args) {
  args = args || [];

  const key = Symbol("key"); // 生成唯一值
  context[key] = this; // this->func  context[key]=func
  const result = context[key](...args);
  delete context[key];

  return result;
};

// bind 方法返回一个新的函数，这个函数与调用 bind 方法的原始函数相同，但有以下特性：
// this 值被永久设置为 bind 方法的第一个参数。
// 当新函数被调用时，提供的参数会按照 bind 方法传递的参数列表顺序，加在新函数调用时的参数列表之前。
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...subArgs) {
    const allArgs = [...args, ...subArgs];
    // 是否通过new来调用的
    if (new.target) {
      return new fn(allArgs);
    }
    return fn.apply(context, allArgs);
  };
};

// func.myCall(obj, 2, 3)
func.myApply(obj, [2, 3]);
func.myBind(obj, 2, 3);

console.log(obj);
