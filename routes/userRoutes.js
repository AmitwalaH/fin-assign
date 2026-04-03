const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const { getUsers, updateUser } = require("../controllers/userController");

// @route   GET /api/users
router.get("/", protect, authorizeRoles("admin"), getUsers);

// @route   PATCH /api/users/:id
router.patch("/:id", protect, authorizeRoles("admin"), updateUser);

module.exports = router;