import { message } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import Loading from "../Loading";
import { PopupContent, PopupWrapper, TitleHeader } from "./styles";

const EditTasks = () => {
  const [myTask, setMyTask] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();
  const { id } = useParams();
  const [removeLoading, setRemoveLoading] = useState(false)


  function handleChange(e) {
    return setMyTask({ ...myTask, [e.target.name]: e.target.value });
  }

  function handlePriority(e) {
    setMyTask({
      ...myTask,
      taskpriority: e.target.options[e.target.selectedIndex].value,
    });
  }

  useEffect(() => {
    api
      .get(`/tasks/${id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`,
      })
      .then((res) => {
        setMyTask(res.data.tasks);
        setRemoveLoading(true)
      });
  }, [token, id]);

  async function updateTask(myTask) {
    console.log(myTask);
    await api
      .patch(`tasks/${myTask._id}`, myTask, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        message.success("Tarefa atualizada com sucesso", [2.5]);
        console.log(response.data);
        navigate("/");
        return response.data;
      })
      .catch((error) => {
        message.error(error.message, [2.5]);
        return error.response.data;
      });
  }

  const submit = (e) => {
    e.preventDefault();
    updateTask(myTask);
  };

  return (
    <PopupWrapper>
      <PopupContent>
        <TitleHeader>
          <h1>Editando Tarefa</h1>
          <Link to={"/"}>Home</Link>
        </TitleHeader>
        <form onSubmit={submit}>
          <label>TAREFA:</label>
          <input
            type="text"
            name="task"
            onChange={handleChange}
            value={myTask.task || ""}
          />
          <label>DIFICULDADE DA TAREFA:</label>
          <select
            name="taskpriority"
            onChange={handlePriority}
            value={myTask.taskpriority || ""}
          >
            <option value="1">FÁCIL </option>
            <option value="2">MÉDIA</option>
            <option value="3">DIFÍCIL</option>
          </select>
          <input type="submit" value="EDITAR" />
        </form>
        {!removeLoading && <Loading />}
      </PopupContent>
    </PopupWrapper>
  );
};

export default EditTasks;
