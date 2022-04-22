import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import TaskForm from "../form/TaskForm";

const EditTasks = () => {
  const [myTask, setMyTask] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/tasks/${id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`,
      })
      .then((res) => {
          console.log(res.data.tasks)
        return setMyTask(res.data.tasks);
      });
  }, [token, id]);

  return (
    <section>
      <div>
        <h1>Editando Tarefa</h1>
      </div>
      <TaskForm taskData={myTask}/>
    </section>
  );
};

export default EditTasks;
