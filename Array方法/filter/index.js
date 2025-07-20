Array.prototype._filter = function (Fn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!!Fn(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
