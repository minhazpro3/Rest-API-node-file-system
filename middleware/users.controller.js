const { readFileSync } = require("fs");
const config = require("../users.json");

module.exports.getUsers = (req, res) => {
  const data = readFileSync("users.json");
  console.log(JSON.parse(data));
  res.send(JSON.parse(data));
};
