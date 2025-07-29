// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

function lengthOfLongestSubstring(s){
    let strSet = new Set();
    const lengthArr = [];

    for (let char of s) {
        if (strSet.has(char)) {
            // 如果遇到重复字符，先存一份当前不重复子串的长度
            lengthArr.push(strSet.size)
            // 遇到重复字符，就移除 从上一个该字符开始之前的字符串
            // 比如dbacb,删除db，保留acb放到下一轮的比较
            strSet = new Set([...strSet].slice([...strSet].indexOf(char) + 1))
        }
        strSet.add(char)
    }
    lengthArr.push(strSet.size)
    return Math.max(...lengthArr)
};


console.log('lengthOfLongestSubstring',lengthOfLongestSubstring('abcabcbb'));
