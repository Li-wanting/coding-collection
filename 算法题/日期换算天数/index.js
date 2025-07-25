//题目： 给定日期字符串，换算出日期对应一年中的第几天

// 方法一： 用Date对象计算
const getDay1 = (date) => {
  const newDate = new Date(date);
  const startDay = new Date(newDate.getFullYear(), 0, 0);
  const diff =
    newDate -
    startDay +
    (newDate.getTimezoneOffset() - startDay.getTimezoneOffset()) * 60 * 1000;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log("newDate", newDate, startDay, diff, day);
  return day;
};

// 闰年：能被 4 整除但不能被 100 整除，或能被 400 整除的年份是闰年。

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// 方法二：手写换算逻辑
const getDay2 = (date) => {
  const [year, month, day] = date.split("-");

  const map = new Map([
    [1, 31],
    [2, isLeapYear(year) ? 29 : 28],
    [3, 31],
    [4, 30],
    [5, 31],
    [6, 30],
    [7, 31],
    [8, 31],
    [9, 30],
    [10, 31],
    [11, 30],
    [12, 31],
  ]);

  let days = Number(day);

  for (let index = 1; index < month; index++) {
    days = days + map.get(index);
  }
  return days;
};

const day1 = getDay1("2025-8-13");
const day2 = getDay2("2025-8-13");
console.log("day1,day2", day1, day2);
