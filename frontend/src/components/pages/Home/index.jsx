import React, { useState, useEffect } from "react";
import {
  ButtonTask,
  ContentOne,
  ContentTwo,
  CreateTasks,
  HeaderText,
  HomeWrapper,
  InputTask,
  Tasks,
  TaskWrapper,
} from "./styles";

import Select from "../../form/SelectTask";

import { useForm } from "react-hook-form";
import api from "../../../utils/api";

import "antd/dist/antd.css";
import { message } from "antd";

const Home = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const [myTasks, setMyTasks] = useState([]);

  const { register, handleSubmit } = useForm();

  const createTask = async (task, e) => {
    e.preventDefault();

    let msgText = "Tarefa criada com sucesso!";

    try {
      const { data, status } = await api.post("tasks/create", task, {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      });

      if (status === 200) {
        message.success(msgText, [2.5]);
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return message.error(error.message, [2.5]);
    }
  };

  useEffect(() => {
    api
      .get("/tasks/mytasks", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data.tasks)
        setMyTasks(res.data.tasks);
      });
  }, [token]);

  return (
    <HomeWrapper>
      <ContentOne>
        <HeaderText>
          <h1>WELCOME Gustavo</h1>
        </HeaderText>
        <form onSubmit={handleSubmit(createTask)}>
          <CreateTasks>
            <InputTask
              type="text"
              placeholder="Digite uma Tarefa"
              name="task"
              {...register("task")}
            />
            <ButtonTask type="submit" value="ADD" />
          </CreateTasks>
          <Select
            label="DIFICULDADE DA TAREFA:"
            name="taskpriority"
            {...register("taskpriority")}
          />
        </form>
      </ContentOne>

      <ContentTwo>
        <Tasks>
          {myTasks.length > 0 &&
            myTasks.map((mytask) => (
              <TaskWrapper key={mytask.id}>
                <p>GRAU</p>
                <h1>{mytask.task}</h1>
                <div>ICONS</div>
              </TaskWrapper>
            ))}
        </Tasks>
      </ContentTwo>
    </HomeWrapper>
  );
};

export default Home;
