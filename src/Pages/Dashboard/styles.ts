import styled from 'styled-components'

export const DashboardContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 3rem 0;
  min-height: 99vh;
`

export const DashMainMobile = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
  height: 100vh;
  overflow-y: auto;
`

export const DashNavigationMobile= styled.div`
  position: fixed;
  bottom: 0;
  background: #7cc5ea;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.75);
  nav {
    z-index: 2;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    padding: 0.15rem;
    height: 90px;
    overflow: auto;
    div {
      padding: 0.1rem;
    }
    button {
      height: 4rem;
      background: transparent;
      border: none;
      padding: 0 0.5rem;
    }
  }
`

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DashMain = styled.div`
  display: flex;
  width: 100%;
`

export const DashNavBottom = styled.div`

max-width: 1320px;
  display: flex;
  justify-content: center;
    flex-wrap: wrap;
    margin: 60px auto 0 auto;
    -webkit-flex-wrap: wrap;
  
/*
margin-top: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  div {
      padding: 0 1rem;
  }*/
`

export const DashNavigation = styled.div`
  background:#7CC5EA;
  width: 100vw;
  box-shadow: 5px 5px 10px rgb(211, 205, 205);
  nav {
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin: 10px;
      ul {
        display:flex;
        align-items:center;
        li {
          list-style:none;
          color:white;
          font-size:1.6rem;
          margin: 0 20px;
          a {
              cursor: pointer;
              padding:10px 10px 0 10px;
              border-radius:5px;
              transition:0.15s;
            svg {
                margin-top:5px;
              } &:hover{
            background:#1da0e2;
          }
          }
        }
    }
  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .bottom {
    border: 2px solid red;
  }
}


  /**
  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .bottom {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    div {
      padding: 1rem;
    }
    button {
      height: 4rem;
      border: none;
      padding: 0 0.5rem;
  }
    }*/
`
