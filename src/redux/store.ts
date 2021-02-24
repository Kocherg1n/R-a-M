import {combineReducers, createStore} from 'redux'
import {charactersReducer} from './reducers/characterReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {charactersWatcher} from '../sagas/charactersSaga'


export const rootReducer = combineReducers({
    charactersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(charactersWatcher)
