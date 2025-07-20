var name = 'Global';

const obj = {
  name: 'Obj',
  getName: function () {
    return this.name;
  }
};

const getName1 = obj.getName;
console.log(getName1());        // ①
console.log(obj.getName());     // ②

const obj2 = {
  name: 'Obj2',
  getName: obj.getName
};

console.log(obj2.getName());    // ③