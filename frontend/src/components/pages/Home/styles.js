import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const ContentTwo = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const HeaderText = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.4rem;
    color: #fff;

    span {
      font-weight: bold;
    }
  }
  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

  @media screen and (min-width: 700px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
export const InputTask = styled.input`
  width: 65%;
  height: 4rem;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

export const ButtonTask = styled.input`
  width: 15%;
  border: none;
  height: 100%;
  background-color: #fff;
  color: #6c63ff;
  border-radius: 5px;
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
  }
`;

export const Tasks = styled.div`
  width: 95%;
  height: 90%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  @media screen and (min-width: 700px) {
    width: 80%;
  }
`;

export const TaskWrapper = styled.div`
  width: 100%;
  min-height: 5rem;
  background-color: #d2d2d2;
  border-radius: 5px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  h1 {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media screen and (min-width: 700px) {
    h1 {
    font-size: 2rem;
  }
  }
`;

export const CreateTasks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DifficultyAndTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RedDifficulty = styled.div`
  background-color: #ff7979;
  border-radius: 100%;
  padding: 1.2rem;

  @media screen and (min-width: 700px) {
    padding: 1.6rem;
  }
`;

export const GreenDifficulty = styled(RedDifficulty)`
  background-color: #85cd63;
`;

export const YellowDifficulty = styled(RedDifficulty)`
  background-color: #fdff89;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconsGap = styled.div`
  margin-left: 1rem;

  a {
    display: flex;
    cursor: pointer;
    svg {
      padding: 0.5rem 0.5rem;
      background-color: #6c63ff;
      color: #fff;
      border-radius: 5px;

      &:hover {
        background-color: #7c80ff;
      }
    }
  }

  @media screen and (min-width: 700px) {
    margin-left: 3rem;
  }

`;

export const BtnIconsTask = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  background-color: #6c63ff;
  color: #fff;
  border-radius: 5px;

  &:hover {
    background-color: #7c80ff;
  }
`;

export const BtnCheckTask = styled(BtnIconsTask)`
  padding: 0.7rem 1rem;
  background-color: #85cd63;

  &:hover {
    background-color: #60cd70;
  }
`;
export const TaskWrapperChecked = styled(TaskWrapper)`
  opacity: 0.5;
  /* background-color: rgba(0,0,0, 0.5);s */
`;
