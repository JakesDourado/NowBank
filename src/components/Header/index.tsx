import React from 'react'
import Logo from '../Logo'

import { HeaderContainer } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo />
      </div>
    </HeaderContainer>
  )
}

export default Header
