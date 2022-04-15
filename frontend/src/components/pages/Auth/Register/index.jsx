import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../../../../context/UserContext";
import Input from "../../../form/Input";

import SvgInitial from "../../../../assets/img/svg_initial.svg";
import { ButtonSubmit, ContentOne, ContentTwo, RegisterWrapper, TextLogo } from "./styles";
import { Link } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(Context);

  const { register, handleSubmit } = useForm();

  const onSubmit = (user, e) => {
    e.preventDefault();
    registerUser(user);
  };

  return (
    <RegisterWrapper>
      <ContentOne>
        <TextLogo>
          TO-DO <br /> List
        </TextLogo>
        <img src={SvgInitial} alt="To-do List" />
      </ContentOne>
      <ContentTwo>
        <h1>Fazer cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <ButtonSubmit type="submit" value="CADASTRAR" />
          <Link to="/login">Já tenho conta</Link>
        </form>
      </ContentTwo>
    </RegisterWrapper>
  );
};

export default Register;
