import styled from "styled-components";

const Input = ({ type, name, placeholder, register, required }) => {
  return (
    <InputWrapper
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, { required })}
    />
  );
};

const InputWrapper = styled.input`
  width: 100%;
  height: 4.5rem;
  outline: none;
  border: none;
  border-left: 5px solid #6c63ff;
  border-radius: 2px;
  margin-bottom: 2.3rem;
  font-size: 1.5rem;

  @media screen and (min-width: 700px) {
    height: 5rem;
    }
`;

export default Input;
