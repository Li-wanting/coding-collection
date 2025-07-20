Array.prototype._reduce = function (Fn, initial = undefined) {
  let result = initial === undefined ? this[0] : initial;
  const startIndex = initial === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    result = Fn(result, this[i], i, this);
  }
  return result;
};

const arr = [-2,-1,0,1,3];
const res =  arr._reduce((left,right)=>left+right);
console.log('res',res);
