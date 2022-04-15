import styled from "styled-components";

export const RegisterWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentOne = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  background-color: #6c63ff;

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    img {
      width: 50%;
    }
  }
`;

export const ContentTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  h1 {
    width: 80%;
    text-align: start;
    font-size: 2.9rem;
    font-weight: normal;
    color: #2f2e41;

    @media screen and (min-width: 700px) {
      width: 50%;
      font-size: 4rem;
    }
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 700px) {
      width: 50%;
    }
  }

  a {
    font-size: 0.8rem;
    margin: 1.5rem 0 6rem 0;
    font-size: 1.5rem;
    color: #6c63ff;
  }
`;

export const TextLogo = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 8rem;
  font-family: "Seymour One", sans-serif;
`;

export const ButtonSubmit = styled.input`
  border: none;
  width: 100%;
  padding: 1.5rem;
  background-color: #6c63ff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 3rem;
`;