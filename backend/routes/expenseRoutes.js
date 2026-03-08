const express = require("express")
const router = express.Router()

const { addExpense, getExpenses, generateReport } = require("../controllers/expenseController")

router.post("/expenses", addExpense)

router.get("/expenses", getExpenses)

router.get("/report", generateReport)

module.exports = router