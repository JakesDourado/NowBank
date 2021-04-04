import React, { useEffect } from 'react'
import Routes from './routes'

import GlobalStyle from './styles/GlobalStyles'

import { checkIsAuth } from './services/getIsAuth'
import updateReduxState from './services/updateReduxState'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
// import './customToast.css'

const App: React.FC = () => {
  useEffect( () => {
    checkIsAuth()
    updateReduxState()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </>
  )
}

export default App
