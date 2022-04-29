import styled from "styled-components";

export const PopupWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6c63ff;
`;

export const PopupContent = styled.div`
  width: 90%;
  height: 50%;
  background-color: #d2d2d2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: #2f2e41;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 70%;

    input {
      width: 100%;
      height: 5rem;
      border: none;
      border-radius: 5px;
      background-color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
      padding: 0 1rem;
      margin: 1rem 0;
    }

    input[type="submit"] {
      background-color: #6c63ff;
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        background-color: #7c80ff;
      }
    }

    label {
      font-size: 1.5rem;
      width: 100%;
      font-weight: bold;
      text-align: start;
    }

    select {
      width: 100%;
      border: none;
      height: 3.5rem;
      background-color: #fff;
      font-size: 1rem;
      font-weight: bold;
      outline: none;
      border-radius: 5px;

      option {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 700px) {
    width: 50%;
    height: 50%;

    input[type="submit"] {
      margin-top: 8%;
    }
  }
`;

export const TitleHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #7c80ff;
    padding: 0.6rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #7c80ff;
    }
  }
`;
