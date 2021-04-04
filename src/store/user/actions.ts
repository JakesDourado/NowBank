import { Action, action } from 'typesafe-actions'
import { UserActions, UserData } from './types'

export const set_user = (user: UserData): Action => action(UserActions.SET_USER, user)

export const remove_user = (): Action => action(UserActions.REMOVE_USER)
