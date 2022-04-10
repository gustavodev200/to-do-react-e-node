const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Task = mongoose.model(
  "Task",
  new Schema(
    {
      task: {
        type: String,
        required: true,
      },
      checked: {
        type: Boolean,
      },
      taskpriority: {
        type: Number,
        required: true
      },
      user: Object,
    },
    { timestamps: true }
  )
);

module.exports = Task