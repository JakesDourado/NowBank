import { Reducer } from 'redux'
import { Plano } from '../../types/dash-board'
import { DashboardActions, DashboardData, Screen, Transactions, HideDashboardData } from './types'

const INITIAL_STATE: DashboardData = {
    current_screen: 'Transações',
    hide_dashboard_data: false
}

const reducer: Reducer<DashboardData> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DashboardActions.CHANGE_SCREEN: {
            const screenToChange = action.payload as Screen
            return { ...state, current_screen: screenToChange }
        }
        case DashboardActions.INSERT_TRANSACTION_DATA: {
            const dataToChange = action.payload as Transactions
            return { ...state, transactions_data: dataToChange }
        }
        case DashboardActions.INSERT_PLANS_DATA: {
            const plasnToChange = action.payload as Plano[]
            return { ...state, plans_data: plasnToChange }
        }
        case DashboardActions.HIDE_DASHBOARD_DATA: {
            const dataToChange = action.payload as HideDashboardData
            dataToChange
            ? localStorage.setItem('@hide_dashboard_display', 'yes')
            : localStorage.setItem('@hide_dashboard_display', 'no')

            return { ...state, hide_dashboard_data: dataToChange}
        }
        default:
            return state
    }
}

export default reducer
