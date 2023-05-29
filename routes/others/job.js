const controller = require("../../controllers/others/jobs");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:jobId", controller.show);
router.post("/", controller.create);

module.exports = router;
