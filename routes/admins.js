const controller = require("../controllers/admins");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:adminId", controller.show);
router.post("/", controller.create);

module.exports = router;
