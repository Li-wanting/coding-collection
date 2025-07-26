// 在非严格模式下以下JS代码最终的输出是什么？

function change(obj) {
  with(obj) {
    color = 'red'
  }
}
var box = {
  size: '15*15'
}
change(box);
console.log(color);

// with 代码块内部，每个变量首先会指向 obj 对象属性，所以color = 'red' 可以等效于obj.color = red 
 
// 但是obj身上并没有color这个属性，于是去change函数的作用域寻找color但也没有找到， 
 
// 最后在全局作用域没有color的情况下，于是直接设置 全局.color = 'red' 
 
// 这就是数据泄漏的过程，经过一通操作，color泄露到全局

