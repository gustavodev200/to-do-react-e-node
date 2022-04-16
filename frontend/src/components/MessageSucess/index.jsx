import styled from "styled-components";
import { MsgError } from "../InputError/styles";

const MessageSuccess = ({msgSuccess}) => {
    return ( 
        <SuccessWrapper>{msgSuccess}</SuccessWrapper>
     );
}

const SuccessWrapper = styled.span`
    color: #5555;
`
 
export default MessageSuccess;