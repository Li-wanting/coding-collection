const axios = require("axios");

// axios.<method> 能够提供自动完成和参数类型推断功能
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { data, status } = response;
    return {
      data,
      status,
    };
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

module.exports = instance;
