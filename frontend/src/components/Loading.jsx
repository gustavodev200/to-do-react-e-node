import styled from "styled-components";
import loading from '../assets/img/loading.gif'

const Loading = () => {
    return ( 
        <LoadingWrapper>
            <ImgLoader src={loading} alt="Loading" />
        </LoadingWrapper>
     );
}

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgLoader = styled.img`
    width: 60px;
`

export default Loading;