const router = require("express").Router();
const { updateStats, getStats } = require("../controllers/statsController");

router.post("/update", updateStats);
router.get("/:user", getStats);

module.exports = router;
