import React from 'react'
import { useHistory } from 'react-router-dom'

// import LogoSRC from '../../assets/main-logo.png'
import LogoSRC from '../../assets/logonow.png'
import { LogoHeader } from './styles'

const Logo: React.FC = () => {
    const history = useHistory()

    return (
        <LogoHeader onClick={ () => history.push('/') } src={ LogoSRC } alt="Logo principal" />
    )
}

export default Logo
