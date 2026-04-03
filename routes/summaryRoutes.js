const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const { getSummary } = require("../controllers/summaryController");

// @route   GET /api/summary
router.get(
  "/",
  protect,
  authorizeRoles("viewer", "analyst", "admin"),
  getSummary,
);

module.exports = router;
