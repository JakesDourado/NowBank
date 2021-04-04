import { Action, action } from 'typesafe-actions'
import { Plano } from '../../types/dash-board'
import { DashboardActions, Screen, Transactions, HideDashboardData } from './types'

export const change_screen = (screen: Screen): Action => action( DashboardActions.CHANGE_SCREEN, screen )

export const set_transaction_data = (data: Transactions | undefined): Action => action( DashboardActions.INSERT_TRANSACTION_DATA, data )

export const set_plans_data = (data: Plano[]): Action => action( DashboardActions.INSERT_PLANS_DATA, data )

export const hide_dashboard_data = (data: HideDashboardData): Action => action(DashboardActions.HIDE_DASHBOARD_DATA, data)
