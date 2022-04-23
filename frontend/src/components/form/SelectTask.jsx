import React from "react";
import styled from "styled-components";

import circle_red from "../../assets/img/circle_red.svg";

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <LabelWrapper>{label}</LabelWrapper>
    <SelectWrapper name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="1">FÁCIL </option>
      <option value="2">MÉDIA</option>
      <option value="3">DIFÍCIL</option>
    </SelectWrapper>
  </>
));

const LabelWrapper = styled.label`
  width: 80%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: start;
  color: #fff;
`;

const SelectWrapper = styled.select`
  width: 80%;
  height: 3rem;
  border-radius: 5px;
  background-color: #fff;
  border: none;
  color: #2f2e41;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  outline: none;
  font-size: 1.3rem;

  option {
    border: none;
    font-weight: bold;
    border-radius: 5px;
  }
`;

export default Select;
