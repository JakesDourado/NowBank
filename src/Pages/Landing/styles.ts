import styled from 'styled-components'
import img from "../../assets/feliz.png"
import ImgCellPhone from '../../assets/landing-3.png'

export const BannerMargin = styled.div`
    margin: 0px auto;
    width: 100vw;
    height: 80vh;
    padding: 0px 16px;
    background: #7CC5EA;
    @media(max-width: 600px) {
        width: 100vw;
        height: 100vh;
  }
`
export const LogoImg = styled.div`
    div {
        display:flex;
        justify-content:center;
    }
    img {
     width:100%;
    }
    p{
        font-family: 'Concert One', cursive;
        font-size: 2.2rem;
        margin-top:20px;
        color:#696969;
        }
        @media(max-width: 600px) {
            p{font-size: 1.3rem;}
            }
`
export const StyleMargTop = styled.div`
    border-bottom: 80px solid  #7CC5EA;
    border-right: 100vw solid transparent;
    border-left: 0 solid transparent;
    @media(max-width: 600px) {
        border-bottom: none;
  }

`
export const StyleMargBotton = styled.div`
    border-top: 80px solid  #7CC5EA;
    width: 0;
    height: 0;
    border-right: 0 solid transparent;
    border-left: 100vw  solid transparent;
    @media(max-width: 600px) {
        border-top: none;
  }
`
export const Banner = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
    @media(max-width: 600px) {
        display: block;
        margin: 0 auto;

    }

`
export const CardAcess = styled.div`
    display:flex;
    justify-content:flex-end;
    button{
        cursor: pointer;
        height: 40px;
        color:#7CC5EA;
        font-family: 'Concert One', cursive;
        font-size: 1.5rem;
        background:none;
        border: none;
        border-radius:20px;
        padding: 10px;
        margin: 10px 10px -80px 0;
        transition:0.1s;
        transition:0.5s;
            &:hover{
            color: white;
            background:#7ceadb;
            }
        }
        @media(max-width: 600px) {
            margin: 10px 10px 80px 0;
  }
`
export const CardCadLogin = styled.div`
    margin-top:20px;
    width: 350px;
    max-width: 100%;
    min-height: 450px;
    background: white;
    border-radius: 8px;
    padding: 40px 46px;
    animation: 0.8s ease 0s 1 normal forwards enterLeft;
    span {
        font-family: 'Concert One', cursive;
        color: red;
        text-align: center;
        margin: 0.25rem auto;
        font-size: 0.9rem;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .loader {
            margin: 0.5rem auto;
        }
    }
    h2 {
        color:#696969;
        font-family: 'Concert One', cursive;
    }
    button{
        cursor: pointer;
        background:#7CC5EA;
        border-radius: 20px;
        height: 40px;
        width: 80%;
        border: none;
        margin: 1.5rem auto 0.5rem;
        font-family: Roboto;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        color: white;
        transition:0.5s;
            &:hover{
            color: white;
            background:#7ceadb;
            }
            &:disabled {
                background: #c1c1c1;
            }
    }
    input{
        margin-top: 20px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-image: initial;
        border-bottom: 1px solid rgb(135, 134, 134);
        width: 100%;
        padding: 10px 32px 10px 14px;
        font-size: 14px;
    }

    @media(max-width: 600px) {
        margin: 10px auto;
    }

    @keyframes enterLeft {
    0% {
      position: relative;
      right: -80px;
      opacity: 0.4;
      }
    100% {
      position: relative;
      right: 0;
      opacity: 1;
    }
  }
`

export const CardMargin = styled.div`
    margin: 0px auto;
    width: 100vw;
    height: 100vh;
    padding: 0px 16px;


`
export const Section = styled.div`
    display:flex;
    align-items:center;
    background-image: url(${img});
    background-size:55%;
    height: 100vh;
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position:right bottom;
    div{
        width: 50%;
    }
    p{
        text-align: center;
        font-size:2rem;
        }
    button{
        cursor: pointer;
        background: #7CC5EA;
        width: 50%;
        height: 47.66px;
        display: block;
        margin-left: auto;
        margin-right: auto;

        font-size: 1.5rem;
        font-family: Roboto;
        color: white;
        border-radius: 20px;
        border: none;
        margin-top: 40px;
        transition:0.2s;
            &:hover{
            color: white;
            background:#95d4db ;
            }
}
@media(max-width: 600px) {

    background-image: none;

    height: 100vh;
    width: 100%;
    div{
        width: 80%;
        margin: auto auto;
    }
    p{
        text-align: center;
        font-size:1.7rem;
        }
    button{
        cursor: pointer;
        background: #7CC5EA;
        height: 40px;
        width: 80%;
        display: block;
        border: none;
        margin-left: auto;
        margin-right: auto;

        font-size: 1.2rem;
        font-family: Roboto;
        color: white;
        border-radius: 20px;
        margin-top: 40px;
        transition:0.2s;
            &:hover{
            color: white;
            background:#95d4db ;
            }
}

  }

`
export const CardSection = styled.section`

    margin: 0px auto;
    width: 100vw;
    height: 100vh;
    padding: 0px 16px;
    background: linear-gradient(340deg,  rgb(19, 184, 235) 20%, rgb(67, 238, 238)  55%, rgb(122, 243, 217) 60%, rgb(197, 248, 237) 100% );
    color:yellow;

        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

            h1{
                font-size:6rem;
                font-family: 'Londrina Shadow', cursive;
                font-weight:bold;
                grid-column:2/4;
                margin: auto 0;

            }
            p{

                font-size:30px;
                color:#696969;
               font-weight:bold;
               grid-column:2/3;
            }
            span{
                font-size: 150px;
                font-weight:bold;
                grid-column:3/5;
                margin: 0 auto;
                 }

@media(max-width: 600px) {

    display:grid;
        grid-template-columns: 1fr;
        grid-template-areas:"h1 h1"  "p p" "span span";

            h1{
                font-size:4rem;
                grid-area: h1;
                text-align: center;
            }
            p{
                grid-area: span;
                text-align: center;
            }
            span{

               grid-area: p ;
               font-size:4.5rem;
                 }
}
`
export const CardFooter = styled.div`
margin: 0 auto;
max-width:1200px;

padding:20px;
background-image: url(${ImgCellPhone});
    background-repeat: no-repeat;
    background-position:right bottom;
    background-size:25%;
    width: 100vw;
    height: 60vh;
ul{
    display:flex;
    justify-content:center;
    margin-bottom:20%;
    li{
        padding:10px;
    }
}

footer{

    display:flex;
    justify-content:space-around;

    div{
        h1{
            color: #CDAD00;
            margin: 20px 0 30px 0;
            }
        }
    }
li{
    list-style:none;
}
a{
    color: #CDAD00;
     text-decoration:none;
     }

     @media(max-width: 950px) {
        background-image: none;
        height: 30vh;
        ul{
            text-align: center;
            margin-bottom:10px;
        li{
            padding:10px;
            }
        }
        footer{

            display:flex;
            justify-content:center;

             p{
                text-align: center;
                padding-bottom:10px;
             }
   }

     }


`
