const Question = require('../models/question.model');

const handleGetQuestion = async (req, res) => {
  try {
      const questions = await Question.aggregate([{ $sample: { size: 20 } }]);
      // console.log(questions);
      return res.json(questions);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};


module.exports = {
    handleGetQuestion
}