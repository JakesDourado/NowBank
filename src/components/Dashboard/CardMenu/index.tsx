import React, { HTMLAttributes } from 'react'

import { BtnContainer, BtnIconDesktop, Label, BtnContainerMobile, BtnIconMobile,
    LabelMobile } from '../../../styles/DashBoardButtons'

interface ComponentProp extends HTMLAttributes<HTMLDivElement> {
    title: string;
    selected: boolean;
    isMobile: boolean;
    backgroundColor: string;
}

const CardMenu: React.FC<ComponentProp> = ( { selected, isMobile, backgroundColor, ...props } ) => {

    const getIcon = (title: string): string => {
        switch (title) {
            case 'Depósitos':
                return 'paid'
            case 'Planos':
                return 'request_quote'
            case 'Pagamentos':
                return 'payments'
            default:
                return 'account_balance'
        }
    }

    return (
        <>
            {
                isMobile
                ?
                    <BtnContainerMobile backgroundColor={backgroundColor}  { ...props } className={selected ? 'card-selected' : ''}>
                        <BtnIconMobile className="material-icons">
                            { getIcon(props.title) }
                        </BtnIconMobile>
                        <LabelMobile>{props.title}</LabelMobile>
                    </BtnContainerMobile>
                :
                    <BtnContainer backgroundColor={backgroundColor} { ...props } className={selected ? 'card-selected' : ''}>
                        <BtnIconDesktop className="material-icons icon">
                            { getIcon(props.title) }
                        </BtnIconDesktop>
                        <Label>{props.title}</Label>
                    </BtnContainer>
            }
        </>
    )
}

export default CardMenu
