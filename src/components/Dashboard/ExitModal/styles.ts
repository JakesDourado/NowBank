import styled from "styled-components"

export const ExitContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: #0000008f;
  animation: 0.8s ease 0s 1 normal forwards show;
  /* Animation show */
  @keyframes show {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  h1 {
    color: #696969;
    font-family: "Concert One", cursive;
    padding-bottom: 1rem;
  }
`

export const CardExit = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 80vw;
  height: 45vh;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  animation: 0.8s ease 0s 1 normal forwards show;
  flex-direction: column;
  text-align: center;
  button {
    cursor: pointer;
    background: #7cc5ea;
    border-radius: 20px;
    height: 48px;
    width: 70%;
    border: none;
    margin: 1rem auto 1rem;
    font-family: Roboto;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: white;
    transition: 0.5s;
    &:hover {
      color: white;
      background: #7ceadb;
    }
    &:disabled {
      background: #c1c1c1;
    }
  }
  /* Animation show */
  @keyframes show {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  /* Desktop */
  @media only screen and (min-width: 768px) {
    width: 30vw;
    max-width: 50vw;
    height: 40vh;
    min-height: 30vh;
  }
  a {
    padding-top: 1.5rem;
    padding-bottom: 0.25rem;
    font-size: 14px;
  }
`
