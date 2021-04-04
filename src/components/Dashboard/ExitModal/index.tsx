import React, { HTMLAttributes } from 'react'

import { ExitContainer, CardExit } from './styles'

interface ExitModalProps extends HTMLAttributes<HTMLDivElement> {
    setResponse: (accepted: boolean) => void;
    isMobile: boolean
}

const ExitModal: React.FC<ExitModalProps> = ({ setResponse, isMobile, ...props }) => {
    return (
        <ExitContainer className={ isMobile ? 'is-mobile' : 'is-desktop'} {...props} >
            <CardExit>
                <h1>Tem certeza que deseja sair?</h1>

                <div>
                    <button onClick={() => setResponse(false)} >Cancelar</button>
                    <button onClick={() => setResponse(true)}  >Tenho</button>
                </div>
            </CardExit>
        </ExitContainer>
    )
}

export default ExitModal
