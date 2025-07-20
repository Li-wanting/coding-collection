const ScheduleTask = require("./scheduleTask");

const sTask = new ScheduleTask(3);

const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

const addTask = (time, name) => {
  sTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务$${name}完成`, new Date().toLocaleString());
    });
};

addTask(1000, 1);
addTask(1000, 2);
addTask(1000, 3);
addTask(1000, 4);
addTask(1000, 5);
