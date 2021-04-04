import styled from 'styled-components'

export const LoginContainer = styled.div`
  background: #7cc5ea;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 90vh;
  padding-top: 2rem;
  margin: 0;
  @media only screen and (min-width: 768px) {
    width: 99vw;
  }
`

export const CardLoginForm = styled.div`
  margin-top: 4rem;
  justify-self: center;
  justify-content: center;
  width: 80vw;
  height: 56vh;
  min-height: 50vh;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  animation: 0.8s ease 0s 1 normal forwards enterRight;
  h3 {
    color:#696969;
    font-family: 'Concert One', cursive;
    padding-bottom: 1rem;
  }
  button {
      cursor: pointer;
      background:#7CC5EA;
      border-radius: 20px;
      height: 40px;
      max-height: 50%;
      border: none;
      width: 80%;
      margin: 1.5rem auto 0.5rem;
      font-family: Roboto;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      color: white;
      transition:0.5s;
          &:hover {
            color: white;
            background:#7ceadb;
          }
          &:disabled {
            background: #c1c1c1;
          }
  }
  input {
      margin-top: 1rem;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid rgb(135, 134, 134);
      width: 100%;
      padding: 10px 32px 10px 14px;
      font-size: 14px;
  }
  a {
    color: #5983b1;
    padding-top: 1rem;
    padding-bottom: 0.25rem;
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .loader {
    margin: 0.5rem auto;
  }

  /* Desktop */
  @media only screen and (min-width: 768px) {
    width: 25vw;
    max-width: 50vw;
    height: 40vh;
    min-height: 30vh;
  }
  a {
    padding-top: 1.5rem;
    padding-bottom: 0.25rem;
    font-size: 14px;
  }

  /* Animation enterRight */
  @keyframes enterRight {
    0% {
      position: relative;
      left: -50px;
      opacity: 0.4;
      }
    100% {
      position: relative;
      left: 0;
      opacity: 1;
    }
  }
`
