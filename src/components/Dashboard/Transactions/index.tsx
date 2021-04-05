import React, { useState, useEffect, ChangeEvent, useCallback, HTMLAttributes } from 'react'

import { Contas, Lancamento } from '../../../types/dash-board'
import Balance from '../Balance'
import Extract from '../Extract'
import Chart from '../Charts'
import api from '../../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStore } from '../../../store'
import Loader from '../../Loader'
import { set_transaction_data } from '../../../store/dashboard/actions'

import { BalanceExtractContainer} from './style'

type TDataItem = {
  id: number
  date: string
  name: string
  result: string
  value: string
}

interface TransactionsProps extends HTMLAttributes<HTMLDivElement> {
  isMobile: boolean;
}

const Transactions: React.FC<TransactionsProps> = ({ isMobile }) => {

  const [contas, setContas] = useState<Contas>()
  const [loaded, setLoaded] = useState(true)
  const [referenceDate, setReferenceDate] = useState(1)
  // const [ lancamentos, setLancamentos ] = useState([])<any>
  const [chartData, setChartData] = useState<TDataItem[]>()

  const user = useSelector((state: ApplicationStore) => state.user)
  const dashboard = useSelector((state: ApplicationStore) => state.dashboard)

  const dispatch = useDispatch()

  const formatDate = useCallback((date: string) => {
    setLoaded(false)

    const d = new Date(date)
    let month = '' + (d.getMonth() + 1), day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2)
      month = '0' + month
    if (day.length < 2)
      day = '0' + day

    return [year, month, day].join('-')
  }, [])

  const buildData = (data: Lancamento[]) => {
    const dataChart = data.map(dt => {
      return {
        id: dt.id,
        date: dt.data,
        name: dt.descricao,
        result: dt.valor.toString().startsWith('-') ? 'sub' : 'add',
        value: dt.valor.toString().startsWith('-')
          ? dt.valor.toString().substring(1)
          : dt.valor.toString()
      }
    })
    setChartData(dataChart)
  }

  useEffect(() => {
    if (contas)
      dispatch(set_transaction_data({ accounts: contas }))
  }, [dispatch, contas])

  useEffect(() => {
    if (dashboard.transactions_data) {
      setContas(dashboard.transactions_data.accounts)
      if (dashboard.transactions_data.accounts.contaBanco.lancamentos.length) {
        buildData(dashboard.transactions_data.accounts.contaBanco.lancamentos)
      }
      return
    }

    const getDashboardValues = async () => {
      try {
        setLoaded(false)

        const date = new Date()
        const newD = new Date()
        const newDate = new Date(date.setMonth(date.getMonth() - referenceDate))
        const dateFormated = (newD.getFullYear() + "-" + ((newD.getMonth() + 1)) + "-" + (newD.getDate()))
        const newDateFormated = (newDate.getFullYear() + "-" + ((newDate.getMonth() + 1)) + "-" + (newDate.getDate()))
        const result = await api.get(`/dashboard?fim=${formatDate(dateFormated)}&inicio=${formatDate(newDateFormated)}&login=${user?.login}`, {
          headers: {
            Authorization: user?.token,
          }
        })
        setContas(result.data)
        setLoaded(true)

      } catch (err) {
        console.log(err)
      }
    }

    getDashboardValues()
  }, [referenceDate, user?.login, user?.token, formatDate, dashboard])

  const updateReference = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value > 0 && value <= 12)
      setReferenceDate(value)
  }

  if (loaded) return (
    <BalanceExtractContainer>
      {/* Componente para página principal */}

      <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito} />
  

      <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito} />
      

      <Chart data={chartData} isMobile={isMobile} />

    </BalanceExtractContainer>
  )
  else return <Loader style={{ border: '4px solid #f0f0f0' }} />

}

export default Transactions
