import Input from "../../../form/Input";
import {
  ButtonSubmit,
  ContentOne,
  ContentTwo,
  MessageValidation,
  RegisterWrapper,
  TextLogo,
} from "../Register/styles";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SvgInitial from "../../../../assets/img/svg_initial.svg";
import InputError from "../../../InputError";
import { useContext } from "react";
import { Context } from "../../../../context/UserContext";

const Login = () => {
  const { login, msgError } = useContext(Context);
  const schema = yup
    .object({
      email: yup
        .string()
        .email("e-mail inválido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .required("A senha é obrigatória")
        .min(6, "Por favor, Digite uma senha com no minímo 6 caracteres!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (user, e) => {
    e.preventDefault();
      login(user);
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
        <h1>Fazer Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            register={register}
            required
          />
          <MessageValidation>{errors.email?.message}</MessageValidation>
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            register={register}
            required
          />
          <MessageValidation>{errors.password?.message}</MessageValidation>
          {msgError && <InputError msgError={msgError} />}
          <ButtonSubmit type="submit" value="ENTRAR" />
          <Link to="/register">Não tenho conta</Link>
        </form>
      </ContentTwo>
    </RegisterWrapper>
  );
};

export default Login;
