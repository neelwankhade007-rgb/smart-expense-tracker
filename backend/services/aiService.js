const { GoogleGenerativeAI } = require("@google/generative-ai")
require("dotenv").config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function analyzeExpenses(summary) {

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-8b"
    })

    const prompt = `
You are a financial assistant.

Analyze the following expense data:

${summary}

Provide:
- biggest spending category
- spending pattern
- suggestions to reduce expenses
`

    const result = await model.generateContent(prompt)

    const response = result.response.text()

    return response

  } catch (error) {

    console.error("Gemini Error:", error)

    return "AI analysis failed."

  }
}

module.exports = analyzeExpenses