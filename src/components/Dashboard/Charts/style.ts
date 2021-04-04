import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    color: #3f3f3f;
    line-height: 1.7rem;
    font-family: 'Concert One', cursive;
    @media only screen and (min-width: 768px) {
        width: 99%;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    padding: 0.5rem;
    width: 85%;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: #1d385699 1px 1px 4px 1px;
    height: 400px;
`

export const CardDashboard = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  width: 90%;
  background-color: #f9f9f9;
  height: 300px;
  overflow-x: auto;

    .title {
        display: flex;
        margin: 0.25rem 0 1rem 0;
        p {
            margin: 0.5rem 0 0 0.75rem;
        }
        img {
            margin-left: 0.5rem;
        }
    }
    p {
        margin-left: 0.75em;
    }
    h3 {
        margin-left: 0.75em;
    }

    .title-container {
        display: flex;
        margin: 0.5rem 0 1rem 0;
        p {
            margin-top: 0.2rem;
        }
    }
    .receipts {
        img {
            margin: 0.25rem;
        }
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
`
