const controller = require("../../controllers/permissions/users");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:userId", controller.show);
router.post("/", controller.create);
router.put("/activity/applied/:userId", controller.updateAppliedActivity);
router.put("/activity/finished/:userId", controller.updateFinishedActivity);
router.put("/activity/desapprove/:userId", controller.updateDisapproveActivity);

router.delete("/:userId", controller.destroy);

module.exports = router;