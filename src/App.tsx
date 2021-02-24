import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {actions} from './redux/actions'
import {Banner} from './components/Banner'
import {CharacterList} from './components/CharacterList'
import {CharacterSingle} from './components/CharacterSingle'
import {selectCharacters, selectError} from './redux/seletors'
import {SimpleError} from './components/SimpleError'


export const App: React.FC = (): React.ReactElement => {
    const characters = useSelector(selectCharacters)
    const error = useSelector(selectError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchCharacters())
    }, [dispatch])

    return (
        <div className='App'>
            <Banner/>
            <main className='MainContent'>
                <Switch>
                    <Route path='/' exact component={() => <CharacterList characters={characters}/>}/>
                    <Route path='/char/:charId' component={CharacterSingle}/>
                </Switch>
            </main>
            {error && <SimpleError/>}
        </div>
    )
}
