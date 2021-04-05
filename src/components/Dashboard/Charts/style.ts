import styled from 'styled-components'

export const CardContainer = styled.div`
 max-width: 1320px;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    margin: 20px auto;
   
`

export const Card = styled.div`
     max-width: 1200px;
   width: 80vw;
    
    margin: 20px 25px 10px 25px;
    box-shadow: 5px 5px 10px rgb(211 205 205);
    background: white;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    @media (max-width: 750px) {
        width: 20rem;
        } //colocar essa parte no scrow
        header{
        background:#f8f8f8;
        border-bottom: 1px solid rgba(0,0,0,.125);
        padding: 12px 25px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        color:#67676b;
        font-weight: bold;
        font-size: 20px;
        border-radius: 3px 3px 0 0 ;
        }
    p{
        color:#67676b;
        font-size: 1.5rem;
        }
/*
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
    height: 400px;*/
`

export const CardDashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
 
 
  background:white;
  height: 300px;


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
