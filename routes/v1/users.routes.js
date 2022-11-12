const express = require("express");
const {
  getUsers,
  saveUsers,
  getUsersWithId,
  deleteUser,
} = require("../../middleware/users.controller");
const router = express.Router();

router.route("/").get(getUsers);
// router.route("/").post(saveUsers);
router.route("/:id").get(getUsersWithId);
router.route("/:id").delete(deleteUser);

module.exports = router;
