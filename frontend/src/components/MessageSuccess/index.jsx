import { useEffect, useState } from "react";
import styled from "styled-components";

const MessageSuccess = ({ successTask }) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(true);

    setTimeout(() => {
      setVisibility(false);
    }, 4000);
  }, []);
  return visibility && <SuccessWrapper>{successTask}</SuccessWrapper>;
};

const SuccessWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  width: 80%;
  height: 4rem;
  border-radius: 5px;
  background-color: #2ef598;
  color: #000;
  margin-top: .5rem;
`;

export default MessageSuccess;
