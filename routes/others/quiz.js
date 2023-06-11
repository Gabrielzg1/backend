const controller = require("../../controllers/others/quiz");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.create);

module.exports = router;
