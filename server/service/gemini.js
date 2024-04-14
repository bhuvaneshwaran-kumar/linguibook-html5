const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_AI_KEY } = require("../constants");

const safetySettings = ["violence", "hate_speech", "sexually_suggestive_content", "threat", "profanity", "bullying"];

class GenerativeAI {
  constructor(apiKey) {
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateText(prompt, model = "gemini-pro") {
    const thisModel = this.genAI.getGenerativeModel({ model });
    const result = await thisModel.generateContent(prompt, { safety_settings: safetySettings });
    const response = await result.response;
    return response.text();
  }
}
const geminiAi = new GenerativeAI(GEMINI_AI_KEY)

module.exports = geminiAi;
