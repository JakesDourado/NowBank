import React, { useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import logoNow from '../../assets/logonow.png'
import CardMenu from '../../components/Dashboard/CardMenu'
import Deposit from '../../components/Dashboard/Deposit'
import Payments from '../../components/Dashboard/Payments'
import Plans from '../../components/Dashboard/Plans'
import Transactions from '../../components/Dashboard/Transactions'
import { useDispatch, useSelector } from 'react-redux'
import { remove_user } from '../../store/user/actions'
import { ApplicationStore } from '../../store'
import { change_screen } from '../../store/dashboard/actions'
import { Screen } from '../../store/dashboard/types'
import ExitModal from '../../components/Dashboard/ExitModal'
import { IoMdPower } from "react-icons/io"
import {
  DashboardContainerMobile,
  DashMainMobile,
  DashNavigationMobile,
  DashboardContainer,
  DashMain,
  DashNavigation,
  DashNavBottom
} from './styles'

import {
  BtnContainerMobile, BtnIconMobile, LabelMobile
} from '../../styles/DashBoardButtons'

const Dashboard: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const store = useSelector((state: ApplicationStore) => state.user)

  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen)

  const [user, setUser] = useState('')
  const [isExiting, setIsExiting] = useState(false)
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  const handleWindowSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (store) setUser(store.name)
  }, [store])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize)
    width < 768
      ? setIsMobile(true)
      : setIsMobile(false)
    return () => {
      window.removeEventListener('resize', handleWindowSize)
    }
  }, [])
  //Setting data accounts;
  const changeComponent = useCallback((title: Screen) => {
    dispatch(change_screen(title))
  }, [dispatch])

  const handleLogOut = useCallback((accepted: boolean) => {
    if (accepted) {
      dispatch(remove_user())

      history.push('/')
    } else {
      setIsExiting(false)
    }
  }, [dispatch, history])


  return (
    <>
      { isExiting && <ExitModal isMobile={isMobile} setResponse={handleLogOut} />}

      {
        isMobile
          ?
          <DashboardContainerMobile>

            <DashMainMobile>
              <main>
                {currentScreen === 'Transações' && <Transactions isMobile={isMobile}></Transactions>}
                {currentScreen === 'Depósitos' && <Deposit />}
                {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
                {currentScreen === 'Planos' && <Plans />}
              </main>
            </DashMainMobile>

            <DashNavigationMobile>
              <nav>
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Transações'
                  onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Depósitos'
                  onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Pagamentos'
                  onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Planos'
                  onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />

                <BtnContainerMobile backgroundColor='#7cc5ea' onClick={() => setIsExiting(true)}>
                  <BtnIconMobile className="material-icons icon">
                    logout
                    </BtnIconMobile>
                  <LabelMobile>Sair</LabelMobile>
                </BtnContainerMobile>
              </nav>
            </DashNavigationMobile>

          </DashboardContainerMobile>
          :
          <DashboardContainer>

            <DashNavigation>
              <nav>
                <ul>
                  <img style={{ width: '30%' }} src={logoNow} alt="NowBank icon" />
                </ul>
                <ul>
                  <li>
                    {user.split(' ')[0]}
                  </li>
                  <li>
                    <a onClick={() => setIsExiting(true)}><IoMdPower /></a>
                  </li>
                </ul>
              </nav>
              </DashNavigation>
            <DashNavBottom className="bottom">

              <CardMenu isMobile={isMobile}
                backgroundColor='#2a73f1'
                title='Transações'
                onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />
              <CardMenu isMobile={isMobile}
                backgroundColor='#65b865'
                title='Depósitos'
                onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
              <CardMenu isMobile={isMobile}
                backgroundColor='#eeaa17'
                title='Pagamentos'
                onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
              <CardMenu isMobile={isMobile}
                backgroundColor='#903eee'
                title='Planos'
                onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />
            </DashNavBottom>

           

            <DashMain>
              <main>
                {/* Render component by currentScreen */}
                {currentScreen === 'Transações' && <Transactions isMobile={isMobile}></Transactions>}
                {currentScreen === 'Depósitos' && <Deposit />}
                {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
                {currentScreen === 'Planos' && <Plans />}
              </main>
            </DashMain>

          </DashboardContainer>
      }
    </>
  )
}

export default Dashboard
