import styled from "styled-components"

export const Repositories = styled.div`
  width: 100vw;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const PlanCards = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;

      & + a {
        margin-top: 16px;
      }

      &:hover {
        transform: translateX(10px);
      }

      div {
        strong {
          font-size: 20px;
          color: #3d3d4d;
        }
      }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    a {
      flex-direction: row;
    }
  }
`

export const AddPlans = styled.div`
  cursor: pointer;
  width: 200px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  color: #ffff;
  background-color: #3c92fd;
  display: flex;
  margin: 1.5rem auto;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`

export const CardModal = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  background: #0000008f;
`

export const CardAddPlans = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  animation: 0.8s ease 0s 1 normal forwards show;
`
export const CardExit = styled.div`
  display: flex;
  width: 50vw;
  height: 45vh;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  animation: 0.8s ease 0s 1 normal forwards show;
  flex-direction: column;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  select {
    width: 100%;
    height: 40px;
    border: 0;
    border-bottom: 1px solid #9e9e9e;
  }

  textarea {
    height: 120px;
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
  }

  label {
    font-size: 12px;
  }

  button {
    border-radius: 10px;
    color: #ffff;
    background-color: #3c92fd;
    width: 9vw;
    padding: 10px;
    border: none;
    margin-top: 20px;
  }

  /* MOBILE */
  @media only screen and (max-width: 768px) {
    width: 80vw;
    height: 70vh;
    button {
      width: 80%;
    }
  }

  @keyframes show {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`
