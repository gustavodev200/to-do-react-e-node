import { message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { useForm } from "react-hook-form";

const EditTasks = () => {
  const [myTask, setMyTask] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  // function handleChange(e) {
  //   setMyTask({ ...myTask, [e.target.name]: e.target.value });
  // }

  useEffect(() => {
    api
      .get(`/tasks/${id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`,
      })
      .then((res) => {
        return setMyTask(res.data.tasks);
      });
  }, [token, id]);

  async function updateTask(myTask, e) {
    e.preventDefault();

    const data = await api
      .patch(`tasks/${myTask._id}`, myTask, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        message.success("Tarefa atualizada com sucesso", [2.5]);
        return response.data;
      })
      .catch((error) => {
        message.error(error.message, [2.5]);
        return error.response.data;
      });
  }

  // const submit = (e) => {
  //   e.preventDefault();
  //   updateTask(myTask);
  // };

  return (
    <section>
      <div>
        <h1>Editando Tarefa</h1>
      </div>
      <form onSubmit={handleSubmit(updateTask)}>
        <input
          // type="text"
          // name="task"
          // onChange={handleChange}
          type="text"
          name="task"
          {...register("task")}
        />
        <div>
          <label>DIFICULDADE DA TAREFA:</label>
        </div>
        <select {...register("taskpriority")}>
          <option value="1">TAREFA FÁCIL </option>
          <option value="2">TAREFA MÉDIA</option>
          <option value="3">TAREFA DIFÍCIL</option>
        </select>
        <input type="submit" value="Editar" />
      </form>
    </section>
  );
};

export default EditTasks;
