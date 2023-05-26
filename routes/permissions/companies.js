const controller = require("../../controllers/permissions/companies");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:adminId", controller.show);
router.post("/", controller.create);

module.exports = router;
