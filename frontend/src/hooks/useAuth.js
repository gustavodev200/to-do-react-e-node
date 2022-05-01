import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import 'antd/dist/antd.min.css'
import { message } from "antd";

export default function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      navigate("/")
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

      // setMsgSuccess(msgText);
    } catch (error) {
      return setMsgError(error.message);
    }

    setMsgSuccess(message.success(msgText, [2.5]));
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
      // setMsgSuccess(msgText);
    } catch (error) {
      return setMsgError(error.message);
    }
    setMsgSuccess(message.success(msgText, [2.5]));
  }

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    setToken(JSON.stringify(data.token))
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    navigate("/");
  }

  async function logout() {
    let msgText = "Logout realizado com sucesso!";

    setAuthenticated(false);
    localStorage.removeItem("token")
    api.defaults.headers.Authorization = undefined;
    setToken('')
    navigate("/login");

    setMsgSuccess(msgText);
  }

  return { loading, authenticated, registerUser, login, msgError, msgSuccess, logout, token };
}
