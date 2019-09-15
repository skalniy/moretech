const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  answers: [
    {
      createdAt: { type: Date, default: Date.now },
      isFinal: Boolean,
      result: Boolean,
      text: String,
      user: String,
    }
  ],
  createdAt: { type: Date, default: Date.now },
  deadline: Date,
  completedDate: Date,
  description: String,
  partitipants: [
    {
      login: String,
      isRequired: Boolean,
    }
  ],
  status: { type: String, enum: ['completed', 'open', 'precompleted'] },
  result: Boolean,
  title: String,
});

module.exports = mongoose.model('Poll', PollSchema);
