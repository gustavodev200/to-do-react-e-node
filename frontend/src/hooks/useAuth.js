import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


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
      const data = await api.post("/users/register", user).then((res) => {
        return res.data;
      });

      await authUser(data);
    } catch (error) {
      msgText = (error.res.data.message)
    }
  }

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));

    navigate("/");
  }

  return { loading, authenticated, registerUser };
}
