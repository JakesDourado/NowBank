import store from '../store'
import jwt from 'jsonwebtoken'
import { remove_user, set_user } from '../store/user/actions'
import { hide_dashboard_data } from '../store/dashboard/actions'

import { TokenPayload } from '../types/user'

const updateReduxState = (): undefined => {
    const localToken = localStorage.getItem('@token_user')
    const localName = localStorage.getItem('@user_name')
    const hideDashboardData = localStorage.getItem('@hide_dashboard_display')

    if (hideDashboardData) {
        hideDashboardData === 'yes'
            ? store.dispatch( hide_dashboard_data(true))
            : store.dispatch( hide_dashboard_data(false))
    }

    if ( !localName || !localToken ) {
        store.dispatch( remove_user() )
        return
    }

    const onlyToken = localToken.split(' ')[1]
    const tokenPayload = jwt.decode(onlyToken) as TokenPayload

    store.dispatch( set_user({
        login: tokenPayload.sub,
        name: localName,
        token: localToken
    }))
}

export default updateReduxState
