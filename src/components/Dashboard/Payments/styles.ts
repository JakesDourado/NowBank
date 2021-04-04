import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100vw;
  max-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #E5E5E5;
  padding: 73px;
`

export const CardDashboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  padding: 42px;
  border-radius: 10px;

  background-color: #fdf9f9;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .container {
    width: 100%;
    height: 100%;
  }

  .header-form {
    p {
      font-size: 2rem;
    }
  }

  form {
    width: 100%;
    display: block;
    span {
        font-family: 'Concert One', cursive;
        color: red;
        text-align: center;
        margin: 0.25rem auto;
        font-size: 0.9rem;
    }
  }
  input {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    border: 0;
    border-bottom: 1px solid #9e9e9e;
    background-color: #fdf9f9;
  }

  .button-transferir {
    width: 100%;
    height: 40px;
    border: 0;
    margin-top: 30px;
    border-radius: 10px;
    color: #ffff;
    background-color: #3c92fd;
  }

  @media only screen and (max-width: 768px) {
    top: 10px;
    min-width: 90vw;
    max-height: 110vh;
  }
`
