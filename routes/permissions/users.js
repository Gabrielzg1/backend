const controller = require("../../controllers/permissions/users");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:userId", controller.show);
router.post("/", controller.create);
router.put("/activity/:userId", controller.updateAppliedActivity);
router.delete("/:userId", controller.destroy);

module.exports = router;
