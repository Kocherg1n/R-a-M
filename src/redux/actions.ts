import {CharacterType, InferActionsTypes, InfoType} from '../types/types'

export type ActionTypes = InferActionsTypes<typeof actions>
export const actions = {
    setCharacters: (characters: Array<CharacterType>, info: InfoType) => ({type: 'SET_CHARACTERS',payload: {characters, info}} as const),
    setMoreCharacters: (characters: Array<CharacterType>, info: InfoType) => ({type: 'SET_MORE_CHARACTERS',payload: {characters, info}} as const),
    setSingleCharacter: (character: CharacterType) => ({type: 'SET_SINGLE_CHARACTER', payload: character} as const),
    clearSingleCharacter: () => ({type: 'CLEAR_SINGLE_CHARACTER'} as const),
    fetchCharacters: () => ({type: 'FETCH_CHARACTERS',} as const),
    fetchMoreCharacters: () => ({type: 'FETCH_MORE_CHARACTERS',} as const),
    fetchSuccess: () => ({type: 'FETCH_SUCCESS',} as const),
    fetchFailed: () => ({type: 'FETCH_FAILED',} as const),
    fetchSingleCharacter: (id: number) => ({type: 'FETCH_SINGLE_CHARACTER', payload: id} as const),
}
