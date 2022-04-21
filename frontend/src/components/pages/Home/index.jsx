import React, { useState, useEffect } from "react";
import {
  ButtonTask,
  ContentOne,
  ContentTwo,
  CreateTasks,
  DifficultyAndTask,
  GreenDifficulty,
  HeaderText,
  HomeWrapper,
  IconsGap,
  IconsWrapper,
  InputTask,
  RedDifficulty,
  Tasks,
  TaskWrapper,
  YellowDifficulty,
} from "./styles";

import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

import Select from "../../form/SelectTask";

import { useForm } from "react-hook-form";
import api from "../../../utils/api";

import "antd/dist/antd.css";
import { message } from "antd";

const Home = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    api
      .get("/tasks/mytasks", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data.tasks);
        setMyTasks(res.data.tasks);
      });
  }, [token]);

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

  return (
    <HomeWrapper>
      <ContentOne>
        <HeaderText>
          <h1>WELCOME user</h1>
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
              <TaskWrapper key={mytask._id}>
                <DifficultyAndTask>
                  {mytask.taskpriority === 1 && (
                    <GreenDifficulty></GreenDifficulty>
                  )}
                  {mytask.taskpriority === 2 && (
                    <YellowDifficulty></YellowDifficulty>
                  )}
                  {mytask.taskpriority === 3 && <RedDifficulty></RedDifficulty>}
                  <h1>{mytask.task}</h1>
                </DifficultyAndTask>
                <IconsWrapper>
                  <IconsGap>
                    <RiDeleteBin6Line fontSize="20"/>
                  </IconsGap>
                  <IconsGap>
                    <AiOutlineEdit fontSize="20"/>
                  </IconsGap>
                  <IconsGap>
                    <FiCheck fontSize="20"/>
                  </IconsGap>
                </IconsWrapper>
              </TaskWrapper>
            ))}
        </Tasks>
      </ContentTwo>
    </HomeWrapper>
  );
};

export default Home;
