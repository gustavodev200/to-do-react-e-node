import { useEffect, useState } from "react";
import { MsgError } from "./styles";

const InputError = ({ msgError }) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(true);

    setTimeout(() => {
      setVisibility(false);
    }, 4000);
  }, []);

  return visibility && <MsgError>{msgError}</MsgError>;
};

export default InputError;
