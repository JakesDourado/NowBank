import React, { HTMLAttributes } from 'react'

import { Loading } from '../../styles/Shared'
interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode
}

const Loader: React.FC<LoaderProps> = (props) => <Loading { ...props } className="loader" />

export default Loader
