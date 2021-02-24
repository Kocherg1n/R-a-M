import {CharacterType, InfoType} from '../../types/types'
import {ActionTypes} from '../actions'

const initialState = {
    info: {} as InfoType,
    characters: [] as Array<CharacterType>,
    singleCharacter: null as CharacterType | null,
    error: false,
    isLoading: false
}

type InitialStateType = typeof initialState
export const charactersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_CHARACTERS': {
            return {
                ...state,
                characters: action.payload.characters,
                info: action.payload.info
            }
        }
        case 'SET_MORE_CHARACTERS': {
            return {
                ...state,
                characters: [...state.characters, ...action.payload.characters],
                info: action.payload.info,
            }
        }
        case 'SET_SINGLE_CHARACTER': {
            return {
                ...state,
                singleCharacter: action.payload
            }
        }
        case 'CLEAR_SINGLE_CHARACTER': {
            return {
                ...state,
                singleCharacter: null
            }
        }
        case 'FETCH_CHARACTERS': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'FETCH_MORE_CHARACTERS': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'FETCH_SINGLE_CHARACTER': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'FETCH_SUCCESS': {
            return {
                ...state,
                error: false,
                isLoading: false
            }
        }
        case 'FETCH_FAILED': {
            return {
                ...state,
                error: true,
                isLoading: false
            }
        }
        default:
            return state
    }
}
