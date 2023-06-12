const controller = require("../../controllers/others/training");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.create);
router.put("/add/:id", controller.updateStudents);
router.put("/remove/:id", controller.removeStudent);
router.put("/:traningId", controller.nextStage);

module.exports = router;
