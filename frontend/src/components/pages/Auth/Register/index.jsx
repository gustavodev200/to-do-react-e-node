import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Context } from "../../../../context/UserContext";
import Input from "../../../form/Input";

import SvgInitial from "../../../../assets/img/svg_initial.svg";
import {
  ButtonSubmit,
  ContentOne,
  ContentTwo,
  MessageError,
  RegisterWrapper,
  TextLogo,
} from "./styles";
import { Link } from "react-router-dom";
import InputError from "../../../InputError";

const Register = () => {
  const { registerUser } = useContext(Context);
  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup
        .string()
        .email("e-mail inválido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .required("A senha é obrigatória")
        .min(6, "Por favor, Digite uma senha com no minímo 6 caracteres!"),
      confirmpassword: yup
        .string()
        .required("A confirmação de senha é obrigatória")
        .oneOf(
          [yup.ref("password"), null],
          "A confirmação de senha deve ser igual a senha"
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onError = (error) => {};

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
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            register={register}
            required
          />
          {errors?.name?.type && <InputError field='email'/>}
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            register={register}
            required
          />
          {errors?.email?.type && <InputError field='email'/>}
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            register={register}
            required
          />
          {errors?.password?.type && <InputError field='password'/>}
          <Input
            type="password"
            name="confirmpassword"
            placeholder="Confirmação de senha"
            register={register}
            required
          />
          {errors?.confirmpassword?.type && <InputError field='confirmpassword'/>}
          <ButtonSubmit type="submit" value="CADASTRAR" />
          <Link to="/login">Já tenho conta</Link>
        </form>
      </ContentTwo>
    </RegisterWrapper>
  );
};

export default Register;
