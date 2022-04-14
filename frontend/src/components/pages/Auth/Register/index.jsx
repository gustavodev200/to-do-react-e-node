import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../../../../context/UserContext";
import Input from "../../../form/Input";

const Register = () => {
  const { registerUser } = useContext(Context);

  const { register, handleSubmit } = useForm();

  const onSubmit = (user, e) => {
    e.preventDefault();
    registerUser(user);
  };

  return (
    <section>
      <div>
        <h1>IMG</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registre-se</h1>
        <Input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          register={register}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          register={register}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          register={register}
          required
        />
        <Input
          type="password"
          name="confirmpassword"
          placeholder="Confirmação de senha"
          register={register}
          required
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </section>
  );
};

export default Register;
