import styled from 'styled-components'

export const CardContainer = styled.div`
max-width: 1320px;
margin: 0 auto;



ul{
    max-width: 1200px;
    width: 80vw;
    box-shadow: 5px 5px 10px rgb(211 205 205);
    margin: 0 auto;
    border-radius: 0 0 5px 5px  ;
   
  

div{
    max-width: 1200px;
    margin: 0 auto;
   
    border-radius: 0 0 5px 5px  ;
    
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
        border: 1px solid rgba(0,0,0,.125);
       
       
       
       
        }
    p{
        color:#67676b;
        font-size: 1.1rem;
        }
}
}

`

export const CardDashboard = styled.div`


border-radius: 0 0 3px 3px  ;
border: 1px solid rgba(0,0,0,.125);
padding:20px;
height: 300px;
border-top:none;
overflow-y: scroll;
background: white;

div{
    display:flex;
    justify-content:space-between;

    
  li{
      list-style:none;
    width:300px;

    margin:20px 0 0 10px;
    p{
        color:#67676b;
        font-size: 1.2rem;
        }
  }

   
}


/*
    .title {
        display: flex;
        //margin: 0.25rem 0 1rem 0;
        p {
           // margin: 0.5rem 0 0 0.75rem;
        }
        img {
           // margin-left: 0.5rem;
        }
    }
    p {
       // margin-left: 0.75em;
    }
    h3 {
       // margin-left: 0.75em;
    }

  
  */
`
