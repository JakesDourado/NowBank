import React, { useState, useEffect } from 'react'
import currentIcon from '../../../assets/svgs/current-icon.svg'
import creditIcon from '../../../assets/svgs/credit-card-icon.svg'
import { Conta } from '../../../types/dash-board'
import { ApplicationStore } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'
import { hide_dashboard_data } from '../../../store/dashboard/actions'
import { BalanceContainer, IdentificaUser, CardDashboard, BalanceMiddle } from './styles'

interface Total {
  banco: number,
  credito: number,
}

interface AccountProps {
  contaBanco?: Conta,
  contaCredito?: Conta,
}

const Balance: React.FC<AccountProps> = (props) => {
  const [contaBanco, setContaBanco] = useState<Conta>()
  const [contaCredito, setContaCredito] = useState<Conta>()
  const [totalTransactions, setTotalTransactions] = useState<Total>({
    banco: 0,
    credito: 0,
  })
  const [user, setUser] = useState('')
  const [hide, setHide] = useState(false)
  const store = useSelector((state: ApplicationStore) => state.user)
  const storeDataDisplay = useSelector((state: ApplicationStore) => state.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    if (store) setUser(store.name)
    if (storeDataDisplay?.hide_dashboard_data) {
      setHide(storeDataDisplay.hide_dashboard_data)
    }
  }, [store])

  useEffect(() => {
    setContaBanco(props.contaBanco)
    setContaCredito(props.contaCredito)
    setTotalTransactions({
      banco: 0,
      credito: 0,
    })
    contaBanco?.lancamentos.forEach(lancamento => {
      setTotalTransactions((previewState) => ({
        ...previewState,
        banco: previewState.banco += lancamento.valor
      }))
    })

    contaCredito?.lancamentos.forEach(lancamento => {
      setTotalTransactions((previewState) => ({
        ...previewState,
        credito: previewState.credito += lancamento.valor
      })
      )
    })
  }, [contaBanco?.lancamentos, contaCredito?.lancamentos, props.contaBanco, props.contaCredito])

  const hideOrShowInformations = () => {
    if (hide) {
      setHide(false)
      dispatch(hide_dashboard_data(false))
    } else {
      setHide(true)
      dispatch(hide_dashboard_data(true))
    }
  }

  return (
    <BalanceContainer className="balance-container">
        <IdentificaUser>
          <p>Olá <strong>{user.split(' ')[0]}</strong>, seja bem-vindo(a)!</p>
          <div>
            { !hide
              ? <span className="material-icons" onClick={() => hideOrShowInformations()}>
                  visibility
                </span>
              : <span className="material-icons" onClick={() => hideOrShowInformations()}>
                  visibility_off
                </span>
            }
          </div>
        </IdentificaUser>

        <BalanceMiddle>
          <CardDashboard className="nachos">
            <div className='title'>
              <img src={currentIcon} alt="current icon" />
              <p>Conta</p>
            </div>
            <p>Saldo disponivel</p>
            <h3 className={`value acccount ${hide ? 'hide' : ''}`} title={contaBanco?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}>{contaBanco?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            <div>
              <p>Transações</p>
              <h3 className={hide ? 'hide' : ''} title={totalTransactions.banco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}>{totalTransactions.banco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            </div>
          </CardDashboard>

          <CardDashboard>
            {/*  */}
            <div className='title'>
              <img src={creditIcon} alt="current icon" />
              <p>Conta Crédito</p>
            </div>
            <p>Fatura atual</p>
            <h3 className={`value credit ${hide ? 'hide' : ''}`} title={contaCredito?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}>{contaCredito?.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            <div>
              <p>Limite Disponivel</p>
              <h3 className={hide ? 'hide' : ''} title={totalTransactions.credito.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
              }>{totalTransactions.credito.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            </div>
          </CardDashboard>

        </BalanceMiddle>

    </BalanceContainer>
  )
}

export default Balance
