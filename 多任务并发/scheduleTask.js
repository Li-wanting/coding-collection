class ScheduleTask {
  constructor(limit=2) {
    this.limit = limit;
    this.runningCount = 0;
    this.taskQueue = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({
        task,
        resolve,
        reject,
      });
      this.#run();
    });
  }

  #run() {
    while (this.runningCount < this.limit && this.taskQueue.length) {
      const { task, resolve, reject } = this.taskQueue.shift();
      this.runningCount++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this.#run();
        });
    }
  }
}

module.exports = ScheduleTask;
