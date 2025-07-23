// 最近最少使用算法
class LRU {
  #limit = 0;
  #map = new Map();
  constructor(limit) {
    this.#limit = limit;
  }
  get(key) {
    if (!this.#map.has(key)) {
      return;
    }
    const value = this.#map.get(key);
    this.#map.delete(key);
    this.#map.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.#map.has(key)) {
      this.#map.delete(key);
    }
    this.#map.set(key, value);
    if (this.#map.size > this.#limit) {
      // 拿到第一个key
      const firstKey = this.#map.keys().next().value;
      // 删除第一个key
      this.#map.delete(firstKey);
    }
  }
}
