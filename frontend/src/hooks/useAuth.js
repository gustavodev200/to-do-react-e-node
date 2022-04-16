import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function registerUser(user) {
    let msgText = "Cadastro realizado com sucesso!";

    try {
      const { data, status } = await api.post("/users/register", user);

      if (status === 200) {
        await authUser(data);
      } else {
        throw new Error(data.message);
      }

      setMsgSuccess(msgText);
    } catch (error) {
      return setMsgError(error.message);
    }
  }

  async function login(user) {
    let msgText = "Login realizado com sucesso!";

    try {
      const { data, status } = await api.post("/users/login", user);

      if (status === 200) {
        await authUser(data);
      } else {
        throw new Error(data.message);
      }
      setMsgSuccess(msgText);
    } catch (error) {
      return setMsgError(error.message);
    }
  }

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));

    navigate("/");
  }

  return { loading, authenticated, registerUser, login, msgError, msgSuccess };
}
