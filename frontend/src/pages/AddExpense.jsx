import { useState } from "react"
import { addExpense } from "../services/expenseService"

function AddExpense() {
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const expense = {
      amount,
      category,
      description,
      date
    }

    try {
      const data = await addExpense(expense)
      console.log("Saved:", data)
      alert("Expense added!")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default AddExpense