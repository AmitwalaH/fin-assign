const Financial = require("../models/Financial");

// POST /api/records
const createRecord = async (req, res) => {
  const { amount, type, category, date, description } = req.body;

  try {
    const record = await Financial.create({
      amount,
      type,
      category,
      date,
      description,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      data: record,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET /api/records
const getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let query = {};

    if (type) {
      query.type = type;
    }

    if (category) {
      query.category = category;
    }

    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    const records = await Financial.find(query).sort({ date: -1 });

    res.json({
      success: true,
      data: records,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// PATCH /api/records/:id
const updateRecord = async (req, res) => {
  try {
    const record = await Financial.findById(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    const { amount, type, category, date, description } = req.body;

    if (amount) record.amount = amount;
    if (type) record.type = type;
    if (category) record.category = category;
    if (date) record.date = date;
    if (description) record.description = description;

    await record.save();

    res.json({
      success: true,
      data: record,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// DELETE /api/records/:id
const deleteRecord = async (req, res) => {
  try {
    const record = await Financial.findById(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    await record.deleteOne();

    res.json({
      success: true,
      message: "Record deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting record:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
};
