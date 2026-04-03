const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

// @route   POST /api/records
router.post("/", protect, authorizeRoles("admin"), createRecord);

// @route   GET /api/records
router.get("/", protect, authorizeRoles("analyst", "admin"), getRecords);

// @route   PATCH /api/records/:id
router.patch("/:id", protect, authorizeRoles("admin"), updateRecord);

// @route   DELETE /api/records/:id
router.delete("/:id", protect, authorizeRoles("admin"), deleteRecord);

module.exports = router;