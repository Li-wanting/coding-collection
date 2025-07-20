/*
实现一个函数 compareVersion(version1: string, version2: string): number，比较两个版本号字符串。
	•	如果 version1 > version2，返回 1
	•	如果 version1 < version2，返回 -1
	•	如果两者相等，返回 0

例如：   
"1.0.1" > "1.0.0"
"1.01" == "1.001"
"1.0" < "1.0.1"

注意：
	•	每个子版本号之间由 . 分隔
	•	子版本号可以有前导 0
	•	版本号可以长度不等：如 "1.0" 与 "1.0.0" 视为相等（末尾 0 不影响大小）
 */

const compareVersion = (version1, version2) => {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  const len = Math.max(arr1.length, arr2.length);

  for (let index = 0; index < len; index++) {
    const n1 = Number(arr1[index]) || 0;
    const n2 = Number(arr2[index]) || 0;

    if (n1 > n2) {
      return 1;
    }
    if (n1 < n2) {
      return -1;
    }
  }
  return 0;
};

/*
含有预发布版本号的比较
例如： 
'1.0.0-alpha'<'1.0.0-beta'
'1.0.0-beta.1'>'1.0.0-beta'
'1.0.0'>'1.0.0-rc.1'
'1.0.0-alpha.1'=='1.0.0-alpha.1'
*/
const compareVersionPreRelease = (version1, version2) => {
  const [main1, pre1] = version1.split("-");
  const [main2, pre2] = version2.split("-");
  // 先比较 版本号的前半部分
  const main1Arr = main1.split(".");
  const main2Arr = main2.split(".");

  const maxMainLen = Math.max(main1Arr.length, main2Arr.length);

  for (let index = 0; index < maxMainLen; index++) {
    const Num1 = main1Arr[index] || 0;
    const Num2 = main2Arr[index] || 0;

    if (Num1 > Num2) {
      return 1;
    }
    if (Num1 < Num2) {
      return -1;
    }
  }

  // 两个版本号都没有预发布版本号
  if (!pre1 && !pre2) return 0;

  // 没有预发布版本号的版本 较高
  if (!pre2) return -1;
  if (!pre1) return 1;

  const pre1Arr = pre1.split(".");
  const pre2Arr = pre2.split(".");

  const maxPreLen = Math.max(pre1Arr.length, pre2Arr.length);

  for (let index = 0; index < maxPreLen; index++) {
    const Num1 = pre1Arr[index] || 0;
    const Num2 = pre2Arr[index] || 0;

    if (Num1 > Num2) {
      return 1;
    }
    if (Num1 < Num2) {
      return -1;
    }
  }

  return 0;
};

const ans = compareVersion("1.01", "1.001");
console.log("ans", ans);
