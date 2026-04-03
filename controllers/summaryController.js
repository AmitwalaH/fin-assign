const Financial = require("../models/Financial");

// GET /api/summary
const getSummary = async (req, res) => {
  try {
    const records = await Financial.find();

    let totalIncome = 0;
    let totalExpense = 0;
    let netBalance = 0;
    const categoryTotals = {};

    const totalLen = records.length;

    for (let i = 0; i < totalLen; i++) {
      const record = records[i];

      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }

      if (!categoryTotals[record.category]) {
        categoryTotals[record.category] = 0;
      }

      categoryTotals[record.category] += record.amount;
    }

    netBalance = totalIncome - totalExpense;

    const recordSort = records.sort((a, b) => b.date - a.date);

    const recentTransactions = recordSort.slice(0, 5);

    res.json({
      success: true,
      data: {
        totalIncome,
        totalExpense,
        netBalance,
        categoryTotals,
        recentTransactions,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
