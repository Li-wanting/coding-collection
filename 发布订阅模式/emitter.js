// 基本发布订阅模式参考:
// https://www.bilibili.com/video/BV1fZeJeeEUH?spm_id_from=333.788.videopod.sections&vd_source=c131eeeb332288fe67cd9bdb649e875a


// 未来事件逻辑参考: 
// https://www.bilibili.com/video/BV1iBzSYBEur?spm_id_from=333.788.videopod.sections&vd_source=c131eeeb332288fe67cd9bdb649e875a
class EventEmitter {
  constructor() {
    this.eventBus = {};
    this.futureEventBus = {};
  }

  // 订阅
  on = (EventName, callback) => {
    if (!this.eventBus[EventName]) {
      this.eventBus[EventName] = new Set();
    }
    this.eventBus[EventName].add(callback);

    // 如果有未来事件则执行
    // if (this.futureEventBus[EventName]) {
    //   this.futureEventBus[EventName].forEach((args)=>callback(...args));
    //   delete this.futureEventBus[EventName];
    // }
  };

  // 发布
  emit = (EventName, ...args) => {
    if (this.eventBus[EventName]) {
      this.eventBus[EventName].forEach((fn) => fn(...args));
      return
    }
    // 未来事件加入等待执行
    // if (!this.futureEventBus[EventName]) {
    //   this.futureEventBus[EventName] = [];
    // }
    // this.futureEventBus[EventName].push(args)
  };

  // 退订
  off = (EventName, callback) => {
    this.eventBus[EventName].delete(callback);
  };

  // 订阅一次
  once = (EventName, callback) => {
    const handler = (...args) => {
      callback(...args);
      this.off(EventName, handler);
    };
    this.on(EventName, handler);
  };

  // 移除所有订阅
  removeAllListener = (EventName) => {
    if (EventName) {
      delete this.eventBus[EventName];
      return;
    }
    this.eventBus = {};
  };

 

}

export const event = new EventEmitter();
