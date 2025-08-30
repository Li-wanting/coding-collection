const request = require("./interceptors");

const getUsers = async () => {
  const res = await request({
    url: "/users",
    method: "get",
  });
  console.log("res", res);
};

getUsers();
