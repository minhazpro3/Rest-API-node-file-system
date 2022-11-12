const express = require("express");
const { getUsers } = require("../../middleware/users.controller");
const router = express.Router();

router.route("/").get(getUsers);

module.exports = router;
