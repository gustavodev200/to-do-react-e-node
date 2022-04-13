import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../../../../context/UserContext";
import Input from "../../../form/Input";

const Register = () => {
//   const [user, setUser] = useState({});
//   const { registerUser } = useContext(Context);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registre-se</h1>
        <Input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          register={register}
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </section>
  );
};

export default Register;
