const controller = require("../../controllers/others/jobs");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.get("/company/:id", controller.getJobs);
router.post("/", controller.create);

module.exports = router;
