const obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name);
  }
};

const name = 'Global';

const getName = obj.getName;

obj.getName();  // 输出是什么？
getName();      // 输出是什么？

setTimeout(obj.getName, 0);  // 输出是什么？
setTimeout(function() {
  obj.getName();
}, 0);                       // 输出是什么？