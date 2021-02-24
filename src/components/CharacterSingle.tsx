import React, {useEffect} from 'react'
import {RouteComponentProps, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import './CharacterSingle.scss'
import {actions} from '../redux/actions'
import {Loader} from './Loader'
import {RootState} from '../redux/store'

type ParamType = {
    charId: string
}

export const CharacterSingle: React.FC<RouteComponentProps> = (): React.ReactElement => {
    const {name, image, origin, location} = useSelector((state: RootState) => ({
        name: state.charactersReducer.singleCharacter?.name,
        image: state.charactersReducer.singleCharacter?.image,
        origin: state.charactersReducer.singleCharacter?.origin,
        location: state.charactersReducer.singleCharacter?.location,
    }))
    const {charId} = useParams<ParamType>()
    const dispatch = useDispatch()

    useEffect(() => {
        if (charId) {
            dispatch(actions.fetchSingleCharacter(+charId))
        }
        return () => {
            dispatch(actions.clearSingleCharacter())
            dispatch(actions.fetchSuccess())
        }
    }, [charId, dispatch])

    return (
        <>
            {(name && image && origin && location)
                ? (<div className='CharacterSingle'>
                        <div className='CharacterSingle__pic'>
                            <img src={image} alt={name}/>
                        </div>
                        <div className='CharacterSingle__desc'>
                            <div><h1>{name}</h1></div>
                            <div>Origin: {origin.name}</div>
                            <div>Location: {location.name}</div>
                        </div>
                    </div>
                ) : <Loader/>}
        </>
    )
}
