const controller = require("../../controllers/others/training");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:traningId", controller.show);
router.post("/", controller.create);
router.put("/:traningId", controller.updateStudents);

module.exports = router;
