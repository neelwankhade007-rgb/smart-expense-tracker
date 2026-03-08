const pool = require("../db")

// Add expense
const addExpense = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Request body missing" })
    }

    const { amount, category, description, date } = req.body

    const result = await pool.query(
      "INSERT INTO expenses (amount, category, description, date) VALUES ($1,$2,$3,$4) RETURNING *",
      [amount, category, description, date]
    )

    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
}

// Get all expenses
const getExpenses = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM expenses")

    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
}

const analyzeExpenses = require("../services/aiService")

const generateReport = async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT category, SUM(amount) as total
      FROM expenses
      GROUP BY category
    `)

    let summary = ""

    result.rows.forEach(row => {
      summary += `${row.category}: ₹${row.total}\n`
    })

    const aiReport = await analyzeExpenses(summary)

    res.json({
      summary: result.rows,
      insights: aiReport
    })

  } catch (err) {
    console.error(err)
    res.status(500).send("AI analysis failed")
  }
}

module.exports = { addExpense, getExpenses, generateReport }