import React from 'react'

import pixIcon from '../../../assets/svgs/pix-icon.svg'

interface ComponentProp {
    title: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    func: Function;
}

const CardMenuMobile: React.FC<ComponentProp> = ( props ) => {

    const changeComponent = () => {
        props.func(props.title)
    }

    return (
        <>
            <div onClick={changeComponent}>
                <p>Mobile!</p>
                <img src={pixIcon} alt="pix icon" />
                <span>{props.title}</span>
            </div>
        </>
    )
}

export default CardMenuMobile
