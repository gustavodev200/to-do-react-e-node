const Task = require("../models/Task");

const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const ObejectId = require("mongoose").Types.ObjectId;

module.exports = class TaskController {
  static async createTasks(req, res) {
    const { task, taskpriority } = req.body;

    const checked = false;

    if (!task) {
      res
        .status(422)
        .json({ message: "A tarefa é obrigatória, Por favor digite algo... " });
      return;
    }

    if (!taskpriority) {
      res
        .status(422)
        .json({ message: "O grau de dificuldade da Tarefa é obrigatória" });
      return;
    }
    //get task owner
    const token = getToken(req);
    const user = await getUserByToken(token);

    //create a task
    const tasks = new Task({
      task,
      taskpriority,
      checked,
      user: {
        _id: user.id,
        name: user.name,
      },
    });

    try {
      const newTask = await tasks.save();
      res.status(200).json({ message: "Tarefa criada com sucesso!", newTask });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};
