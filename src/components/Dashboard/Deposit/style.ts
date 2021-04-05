import styled from "styled-components"

export const Container = styled.div`
 width: 100vw;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    margin: 20px auto;



`


export const Card = styled.div`

max-width: 1200px;
   width: 80vw;
    
   margin: 20px auto;
    box-shadow: 5px 5px 10px rgb(211 205 205);
    background: white;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
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
  

  form {
    width: 100%;
    display: block;
    padding:20px;
    
  }
  input {
    width: 100%;
    height: 60px;
 
    border: 0;
    border-bottom: 1px solid #9e9e9e;
    background-color: white;
    &:hover{
      border-bottom: 2px solid blue;
    
    }
  }

  .button-Deposit {
    width: 100%;
    height: 40px;
    border: 0;
    margin-top: 30px;
    border-radius: 10px;
    color: #ffff;
    background-color: #7CC5EA;
  
  }

  @media only screen and (max-width: 768px) {
    top: 10px;
    min-width: 90vw;
    max-height: 110vh;
  }
`


export const ChangeButton = styled.button`
  width: 50%;
    height: 40px;
    border: 0;
  
    border-radius: 10px;
    color: #ffff;
    background-color: #7CC5EA;
    .material-icons {
      margin-left: 0.5rem;
      vertical-align: middle;
    }
    @media only screen and (min-width: 768px) {
      width: 25%;
    }

`
export const FormContainer = styled.button`
padding:20px;
`


