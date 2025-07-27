// import localforage from "localforage";

console.log("localforage");

localforage.config({
  name: "my-localforage-app",
  storeName: "yes",
});

localforage.setItem("name", "haha").then((res) => {
  console.log("存储name", res);
});

localforage.setItem("array", [1, 2, 3, 4]).then((res) => {
  console.log("存储array");
});

setTimeout(() => {
  localforage.getItem("name").then((res) => {
    console.log("读取name", res);
  });
}, 2000);

setTimeout(() => {
  localforage.removeItem("name").then((res) => {
    console.log("删除name", res);
    localforage.getItem("array").then((res) => {
      console.log("读取array", res);
    });
  });
}, 4000);
