const controller = require("../../controllers/permissions/companies");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.create);
router.post("/login", controller.login);

module.exports = router;
