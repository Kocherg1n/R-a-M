import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import './CharacterList.scss'
import {CharacterType} from '../types/types'
import {actions} from '../redux/actions'
import {scrollIsBottom} from '../helpers'
import {CharacterItem} from './CharacterItem'
import {Loader} from './Loader'
import {selectIsLoading, selectNextPageUrl} from '../redux/seletors'


type CharacterListProps = {
    characters: Array<CharacterType>,
}

export const CharacterList: React.FC<CharacterListProps> = ({characters}): React.ReactElement => {
    const nextPageUrl = useSelector(selectNextPageUrl)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()

    const scrollHandler = (): void => {
        if (scrollIsBottom() && nextPageUrl) {
            dispatch(actions.fetchMoreCharacters())
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [dispatch, nextPageUrl])


    return (
        <>
            <ul className='CharacterList'>
                {characters.map((char) => <CharacterItem key={char.id} char={char}/>)}
            </ul>
            {nextPageUrl && isLoading && <Loader/>}
        </>
    )
}
