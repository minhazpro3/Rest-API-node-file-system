const { readFileSync } = require("fs");
const config = require("../users.json");
const fs = require("fs");

// GET ALL USERS
module.exports.getUsers = (req, res) => {
  // sync data read
  //   const data = readFileSync("users.json");
  //   console.log(JSON.parse(data));
  //     res.send(JSON.parse(data));

  // async data read
  fs.readFile("users.json", (err, data) => {
    if (data) {
      res.send(data);
      res.end();
    }
  });
};

// ADD USERS
module.exports.saveUsers = (req, res) => {
  // const newUser = JSON.parse(req.body);
  // fs.readFile("users.json", "utf8", function (err, data) {
  //   data = JSON.parse(data);
  //   //Step 3: append user variable to list
  //   data.push(newUser);
  //   console.log(data);
  //   res.end(JSON.stringify(data));
  // });
};

// get user with ID
module.exports.getUsersWithId = (req, res) => {
  const id = req.params.id;
  // sync data read
  const data = readFileSync("users.json");
  const users = JSON.parse(data);
  var user = users["user" + req.params.id];
  res.send(user);
  res.end();

  // async data read
  // fs.readFile("users.json", (err, data) => {
  //   if (data) {
  //     var users = JSON.parse(data);
  //     var user = users["user" + req.params.id];
  //     res.send(user);
  //     console.log(user);
  //     res.end();
  //   }
  // });
};

module.exports.deleteUser = (req, res) => {
  const id = req.params.id;
  // sync data read
  //   const data = readFileSync("users.json");
  //   console.log(JSON.parse(data));
  //     res.send(JSON.parse(data));

  // async data read
  fs.readFile("users.json", (err, data) => {
    if (data) {
      data = JSON.parse(data);
      delete data["user" + id];
      res.send(data);
      console.log(data);
      res.end();
    }
  });
};
