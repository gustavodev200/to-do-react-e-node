const ObjectId = require("mongoose").Types.ObjectId;
const Task = require("../models/Task");

const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");

module.exports = class TaskController {
  static async createTasks(req, res) {
    const { task, taskpriority } = req.body;

    let checked = false;

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

  static async removeTasks(req, res) {
    const id = req.params.id;

    // // check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    //check if task exist in my database
    const task = await Task.findOne({ _id: id });

    if (!task) {
      res.status(404).json({ message: "Tarefa não encontrada!" });
      return;
    }

    //check if logged in user registered the task
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (task.user._id.toString() !== user._id.toString()) {
      res.status(422).json({
        message:
          "Houve um problema em processar a sua solicitação, tente novamente mais tarde!",
      });
      return;
    }

    await Task.findByIdAndRemove(id);

    res.status(200).json({ message: "Tarefa removida com sucesso!" });
  }

  static async editTasks(req, res) {
    const id = req.params.id;

    const { task, taskpriority } = req.body;

    const updateData = {};

    //check if task exists
    const tasks = await Task.findOne({ _id: id });

    if (!tasks) {
      res.status(404).json({ message: "Tarefa não encontrada!" });
      return;
    }

    //check if logged in user registered the task
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (tasks.user._id.toString() !== user._id.toString()) {
      res.status(422).json({
        message:
          "Houve um problema em processar a sua solicitação, tente novamente mais tarde!",
      });
      return;
    }

    if (!task) {
      res
        .status(422)
        .json({ message: "A tarefa é obrigatória, Por favor digite algo... " });
      return;
    } else {
      updateData.task = task;
    }

    if (!taskpriority) {
      res
        .status(422)
        .json({ message: "O grau de dificuldade da Tarefa é obrigatória" });
      return;
    } else {
      updateData.taskpriority = taskpriority;
    }

    await Task.findByIdAndUpdate(id, updateData);

    res.status(200).json({ message: "Tarefa atualizada com sucesso!" });
  }

  static async getAllUserTasks(req, res) {
    //get user from token
    const token = getToken(req);
    const user = await getUserByToken(token);

    const tasks = await Task.find({})

    res.status(200).json({ tasks });
  }

  static async checkedTasks(req, res) {
    const id = req.params.id;

    const { checked } = req.body;

    const updateData = {};

    //check if task exists
    const tasks = await Task.findOne({ _id: id });

    if (!tasks) {
      res.status(404).json({ message: "Tarefa não encontrada!" });
      return;
    }

    //check if logged in user registered the task
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (tasks.user._id.toString() !== user._id.toString()) {
      res.status(422).json({
        message:
          "Houve um problema em processar a sua solicitação, tente novamente mais tarde!",
      });
      return;
    }

    updateDgetAllUserTasksask.findByIdAndUpdate(id, updateData);

    res.status(200).json({ message: "Tarefa atualizada com sucesso!" });
  }
};
