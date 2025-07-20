Object.prototype.myCreateObject=function(proto){
    // 创建一个临时对象
    let obj = new Object();
    // 将该临时对象的原型指向对象参数
    Object.setPrototypeOf(obj,proto);
    //返回该临时对象的实例
    return obj
}
const test =()=>{
    return 1
}
const obj = Object.myCreateObject(test);
console.log('obj',obj);
