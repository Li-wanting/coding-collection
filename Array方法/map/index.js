Array.prototype._map = function (Fn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = Fn(this[i], i, this);
  }
  return newArr;
};
