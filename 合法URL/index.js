
// 该方法的本质是让浏览器尝试解析给定的URL，如果元素的href属性最终和输入的URL一致，那么这个URL被认为是合法的。
// const isURL=(url)=>{
//     const a = document.createElement('a')
//     a.href = url;
//     return a.href === url;
// }


// 利用URL类，创建url对象，如果不能创建则说明不符合url规范
const isURL =(url)=>{
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}


const url = "https://www.cnblogs.com/xym0710/p/14455491.html"

console.log('isURL',isURL(url));


