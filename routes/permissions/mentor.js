const controller = require("../../controllers/permissions/mentor");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.create);
router.delete("/:mentorId", controller.destroy);
router.post("/login", controller.login);
router.put("/addTraining/:id", controller.addTraining);

module.exports = router;
