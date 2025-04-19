const {
  getAllUsers,
  creatUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", creatUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
