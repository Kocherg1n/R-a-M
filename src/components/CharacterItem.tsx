import React from 'react'
import {Link} from 'react-router-dom'
import cn from 'classnames'

import './CharacterItem.scss'
import {CharacterType} from '../types/types'


type CharacterListItemProps = {
    char: CharacterType
}

export const CharacterItem: React.FC<CharacterListItemProps> = ({char}): React.ReactElement => {
    const {id, name, image} = char

    const statusStyle = cn('CharacterItem__desc-status', {
        'alive': char.status === 'Alive',
        'dead': char.status === 'Dead',
    })

    return (
        <li className='CharacterItem' key={id}>
            <div className='CharacterItem__pic'>
                <img src={image} alt={name}/>
            </div>
            <div className='CharacterItem__desc'>
                <div className='CharacterItem__desc-section'>
                    <Link to={`char/${id}`}><h2>{name}</h2></Link>
                    <div>
                        <span className={statusStyle}></span>
                        <span>{`${char.status} - ${char.species}`}</span>
                    </div>
                </div>
                <div className='CharacterItem__desc-section'>
                    <h3>Location:</h3>
                    <span>{char.location.name}</span>
                </div>
                <div className='CharacterItem__desc-section'>
                    <h3>Origin:</h3>
                    <span>{char.origin.name}</span>
                </div>
            </div>
        </li>
    )
}
