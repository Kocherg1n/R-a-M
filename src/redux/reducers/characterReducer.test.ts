import {actions} from '../actions'
import {charactersReducer} from './characterReducer'
import {CharacterType, InfoType} from '../../types/types'

const initialState = {
    info: {} as InfoType,
    characters: [] as Array<CharacterType>,
    singleCharacter: null as CharacterType | null,
    error: false,
    isLoading: false
}
const characters = [{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}]
const character = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}
const info = {
    "count": 671,
    "pages": 34,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
}

it('characters & info should be added', () => {
    const action = actions.setCharacters(characters, info)
    const state = initialState
    const newState = charactersReducer(state, action)

    expect(newState.info).toBe(info)
    expect(newState.characters).toBe(characters)
})

it('should be added new info and one characters to current characters', () => {
    const action = actions.setMoreCharacters(characters, info)
    const state = {
        info: {} as InfoType,
        characters: [{
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        }] as Array<CharacterType>,
        singleCharacter: null as CharacterType | null,
        error: false,
        isLoading: false
    }
    const newState = charactersReducer(state, action)

    expect(newState.info).toBe(info)
    expect(newState.characters.length).toBe(2)
})

it('should be added single character', () => {
    const action = actions.setSingleCharacter(character)
    const state = initialState
    const newState = charactersReducer(state, action)

    expect(newState.singleCharacter).toBe(character)
})

it('single character should be NULL', () => {
    const action = actions.clearSingleCharacter()
    const state = {
        info: {} as InfoType,
        characters: [{
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        }] as Array<CharacterType>,
        singleCharacter: null as CharacterType | null,
        error: false,
        isLoading: false
    }
    const newState = charactersReducer(state, action)

    expect(newState.singleCharacter).toBe(null)
})

it('error & isLoading should be false', () => {
    const action = actions.fetchSuccess()
    const state = initialState
    const newState = charactersReducer(state, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.error).toBe(false)
})

it('error should be true', () => {
    const action = actions.fetchFailed()
    const state = initialState
    const newState = charactersReducer(state, action)

    expect(newState.isLoading).toBe(false)
    expect(newState.error).toBe(true)
})
