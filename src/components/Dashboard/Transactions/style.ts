import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  width: 100vw;
  max-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #E5E5E5;
  padding: 73px;

`

export const MonthConatiner = styled.div`
  display: flex;
  color: white;
  align-self: flex-end;
  margin: 40px 0 20px 0;

  input {
    background: transparent;
    border-radius: 2px;
    border: 1px solid #68DE5A;
    color: white;
    height:24px;
    padding: 2px;
    width: 40px;
    margin-left: 10px;
    font-size: 14px;
  }
`

export const BalanceExtractContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  color: #3f3f3f;
  line-height: 1.7rem;
  font-family: 'Concert One', cursive;
  input {
    margin-left: 1rem;
  }
  @media only screen and (min-width: 768px) {
    width: inherit;
  }
`
