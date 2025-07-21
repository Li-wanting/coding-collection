const express = require("express");
const app = express();
const PORT = 3000;

app.get("/sse", (request, response) => {
  response.setHeader("Content-Type", "text/event-stream");
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Connection", "keep-alive");
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.write(`data: 初始连接成功 at ${new Date().toLocaleTimeString()}\n\n`);

  const timer = setInterval(() => {
    response.write(`data: 当前时间 ${new Date().toLocaleTimeString()}\n\n`);
  }, 2000);

  request.on("close", () => {
    clearInterval(timer);
    console.log("连接断开");
  });
});

app.listen(PORT, () => {
  console.log(`SSE 服务器运行在 http://localhost:${PORT}`);
});
