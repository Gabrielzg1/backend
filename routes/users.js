const controller = require("../controllers/users");
const router = require("express").Router();

router.get("/", controller.getUsers);
router.get("/:userId", controller.getUser);
router.post("/", controller.createUser);
router.delete("/:userId", controller.deleteUser);

module.exports = router;
