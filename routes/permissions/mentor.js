const controller = require("../../controllers/permissions/mentor");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:mentorId", controller.show);
router.post("/", controller.create);
router.delete("/:mentorId", controller.destroy);

module.exports = router;
