import styled from "styled-components";

export const HomeWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContentOne = styled.div`
    width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #6c63ff;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
export const ContentTwo = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const HeaderText = styled.div`
    width: 80%;

    h1 {
        font-size: 2rem;
        color: #fff;
    }

`
export const InputTask = styled.input`
    width: 65%;
    height: 4rem;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
`

export const ButtonTask = styled.input`
    border: none;
    background-color: #fff;
    color: #6c63ff;
    border-radius: 5px;
    margin-left: .5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #d2d2d2;
    }
`

export const Tasks = styled.div`
    width: 95%;
    height: 95%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    
`

export const TaskWrapper = styled.div`
    width: 80%;
    height: 5rem;
    background-color: #d2d2d2;
    border-radius: 5px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
`
export const ErrorTask = styled.p`
    width: 80%;
    border-radius: 5px;
    padding: .5rem 0;
    background-color: #ff3737;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1rem;
    margin-top: .5rem;
`