const router = require("express").Router();
const { saveDiary, getDiary } = require("../controllers/diaryController");

router.post("/save", saveDiary);
router.get("/:user", getDiary);

module.exports = router;
