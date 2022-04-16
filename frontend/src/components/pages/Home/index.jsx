import React, { useState, useEffect } from "react";
import {
  ButtonTask,
  ContentOne,
  ContentTwo,
  ErrorTask,
  HeaderText,
  HomeWrapper,
  InputTask,
  Tasks,
  TaskWrapper,
} from "./styles";

import SelectTask from '../../form/SelectTask'

import { useForm } from "react-hook-form";
import api from "../../../utils/api";

const Home = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const [errorTask, setErrorTask] = useState("");

  const { register, handleSubmit } = useForm();

  const createTask = async (task, e) => {
    e.preventDefault();

    const data = await api
      .post("tasks/create", task, {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.res.data;
      });

    setErrorTask(data.message);
  };

  return (
    <HomeWrapper>
      <ContentOne>
        <HeaderText>
          <h1>WELCOME Gustavo</h1>
        </HeaderText>
        <form onSubmit={handleSubmit(createTask)}>
          <InputTask
            type="text"
            placeholder="Digite uma Tarefa"
            name="task"
            {...register("task")}
          />
          <SelectTask label="GRAU DA TASK" name ="taskpriority" {...register("taskpriority")}/>
          <ButtonTask type="submit" value="ADD" />
        </form>
      </ContentOne>
      {errorTask && <ErrorTask>{errorTask}</ErrorTask>}
      <ContentTwo>
        <Tasks>
          <TaskWrapper>
            <div>COR</div>
            <div>
              <h1>TASK</h1>
            </div>
            <div>Icons</div>
          </TaskWrapper>
        </Tasks>
      </ContentTwo>
    </HomeWrapper>
  );
};

export default Home;
