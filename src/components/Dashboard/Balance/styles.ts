import styled from 'styled-components'

export const BalanceContainer = styled.div`
    width:100vw;
    margin: 0 auto 0px auto;
    padding: 0 20px;
`
export const IdentificaUser = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 2.2px solid #e0e0e0;
    color:#67676b;
        p{
            margin: 20px 0 0 20px;
            }

        div{
            padding:10px 10px 5px 10px;
            margin: 20px 10px 0 0;
            border-radius:8px;
            span{
                color:#307fa7;
                }
            &:hover{
                background:#7cc5ea;
                span{
                    color:white;
                    }
                }       
            }
`
export const CardMenuWeb = styled.div`
    max-width: 1320px;
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    justify-content:space-evenly;
`
export const CardDesc = styled.div`
    width: 35rem;
    height: 15rem;
    margin: 20px 25px 10px 25px;
    box-shadow: 5px 5px 10px rgb(211 205 205);
    background: white;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    @media (max-width: 750px) {
        width: 20rem;
        }
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
    section{
    
    flex: 1 1 auto;
    height: 11.44rem;
    border-radius: 0 0 3px 3px;
    min-height: 1px;
    padding: 1.25rem;
    background: white;

        p{
            color:#67676b;
            font-size: 1rem;
            padding:5px;
            }
        h3{
            color:#67676b;
            font-size: 1.5rem;
            display: flex;
            justify-content: flex-end;
            padding:5px;
            }
        span{
        display:flex;
        justify-content:center;
            h3{
                color:#67676b;
                font-size: 1.5rem;
                position: absolute;
                }
                svg{
                    opacity: 0.5;
                    font-size: 8em;
                    transform: rotate(-10deg);
                    margin-top: -50px;
                    color:white;
                    }
            }
        }   
        .hide {
            background: gray;
            color: gray;
            border-radius: 5px;
            width: 80%;
            transition: all 0.2s;
            }
`
