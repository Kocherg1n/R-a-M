import React from 'react'
import './SimpleError.scss'

type SimpleErrorType = {
    error?: string
}

export const SimpleError: React.FC<SimpleErrorType> = ({error = 'Some error...'}) => {

    return (
    <div className='SimpleError'>
        <span>{error}</span>
    </div>
)}
