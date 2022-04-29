import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../context/UserContext";

import {
  BtnCheckTask,
  BtnIconsTask,
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
  TaskWrapperChecked,
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
import { useCallback } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Loading from "../../Loading";

const Home = () => {
  const [myTasks, setMyTasks] = useState([]);
  const { logout, token } = useContext(Context);
  const userDecodificado = jwt_decode(token);
  const [removeLoading, setRemoveLoading] = useState(false)


  const getMyTasks = useCallback(() => {
    api
      .get("/tasks/mytasks", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        setMyTasks(res.data.tasks);
        setRemoveLoading(true)
      });
  }, [token]);

  const checkedTask = async (id) => {
    await api
      .patch(`/tasks/checked/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setMyTasks(
          myTasks.map((task) =>
            task._id === id ? { ...task, checked: true } : task
          )
        );
        message.success("Tarefa finalizada com sucesso", [2.5]);
        getMyTasks();
        setRemoveLoading(true)
        return response.data;
      })
      .catch((error) => {
        return message.error(error.response.data, [2.5]);
      });
  };

  const removeTask = async (id) => {
    await api
      .delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedTasks = myTasks.filter((task) => task._id !== id);
        setMyTasks(updatedTasks);
        setRemoveLoading(true)
        message.success("Tarefa deletada com sucesso", [2.5]);
        return response.data;
      })
      .catch((error) => {
        return message.error(error.response.data, [2.5]);
      });
  };

  useEffect(() => {
    getMyTasks();
  }, [getMyTasks]);

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
        setRemoveLoading(true)
        getMyTasks();
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
          <div>
            <h1>
              WELCOME <span>{userDecodificado.name}</span>
            </h1>
          </div>
          <div>
            <p onClick={logout}>Sair</p>
          </div>
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
            myTasks.map((mytask) =>
              mytask.checked === false ? (
                <TaskWrapper key={mytask._id}>
                  <DifficultyAndTask>
                    {mytask.taskpriority === 1 && (
                      <GreenDifficulty></GreenDifficulty>
                    )}
                    {mytask.taskpriority === 2 && (
                      <YellowDifficulty></YellowDifficulty>
                    )}
                    {mytask.taskpriority === 3 && (
                      <RedDifficulty></RedDifficulty>
                    )}
                    <h1>{mytask.task}</h1>
                  </DifficultyAndTask>
                  <IconsWrapper>
                    <IconsGap>
                      <BtnIconsTask onClick={() => removeTask(mytask._id)}>
                        <RiDeleteBin6Line fontSize="20" />
                      </BtnIconsTask>
                    </IconsGap>
                    <IconsGap>
                      <Link to={`/${mytask._id}`}>
                        <AiOutlineEdit fontSize="29" />
                      </Link>
                    </IconsGap>
                    <IconsGap>
                      <BtnCheckTask onClick={() => checkedTask(mytask._id)}>
                        <FiCheck fontSize="20" />
                      </BtnCheckTask>
                    </IconsGap>
                  </IconsWrapper>
                </TaskWrapper>
              ) : (
                <TaskWrapperChecked key={mytask._id}>
                  <DifficultyAndTask>
                    {mytask.taskpriority === 1 && (
                      <GreenDifficulty></GreenDifficulty>
                    )}
                    {mytask.taskpriority === 2 && (
                      <YellowDifficulty></YellowDifficulty>
                    )}
                    {mytask.taskpriority === 3 && (
                      <RedDifficulty></RedDifficulty>
                    )}
                    <h1>{mytask.task}</h1>
                  </DifficultyAndTask>
                  <IconsWrapper>
                    <IconsGap>
                      <BtnIconsTask onClick={() => removeTask(mytask._id)}>
                        <RiDeleteBin6Line fontSize="20" />
                      </BtnIconsTask>
                    </IconsGap>
                    {/* <IconsGap>
                      <BtnCheckTask onClick={() => checkedTask(mytask._id)}>
                        <FiCheck fontSize="20" />
                      </BtnCheckTask>
                    </IconsGap> */}
                  </IconsWrapper>
                </TaskWrapperChecked>
              )
            )}
          {!removeLoading && <Loading />}
        </Tasks>
      </ContentTwo>
    </HomeWrapper>
  );
};

export default Home;
