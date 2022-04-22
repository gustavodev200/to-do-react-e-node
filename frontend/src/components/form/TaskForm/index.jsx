import { useState } from "react";

import { useForm } from "react-hook-form";

import { InputTask } from "../../pages/Home/styles";
import Select from "../SelectTask";

const TaskForm = ({ taskData}) => {
  const [taskEdit] = useState(taskData || {});
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(taskEdit);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <InputTask
        type="text"
        placeholder="Digite uma Tarefa"
        name="task"
        {...register("task")}
        value={taskEdit.task || ""}
      />
      <Select
        label="DIFICULDADE DA TAREFA:"
        name="taskpriority"
        {...register("taskpriority")}
        value={taskEdit.taskpriority || ""}
      />
    </form>
  );
};

export default TaskForm;
