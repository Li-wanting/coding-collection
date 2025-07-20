import { event } from "./emitter.js";

setTimeout(() => {
  event.emit("change", 3);
}, 1000);

setTimeout(() => {
  event.off("change", callback1);
}, 2000);

setTimeout(() => {
  event.emit("change", 4);
}, 3000);

const callback1 = (value) => {
  console.log("on-value-1", value);
};
const callback2 = (value) => {
  console.log("on-value-2", value);
};
const callback3 = (value) => {
  console.log("on-value-3", value);
};

event.on("change", callback1);

event.on("change", callback2);

event.once("change", callback3);

