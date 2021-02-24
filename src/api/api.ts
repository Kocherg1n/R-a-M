import axios from 'axios'
import {CharacterType} from '../types/types'

export const charactersApi = {
    getCharacters: () => {
        return axios.get<Array<CharacterType>>('https://rickandmortyapi.com/api/character').then(({data}) => data)
    },
    getMoreCharacters: (url: string) => {
        return axios.get<Array<CharacterType>>(url).then(({data}) => data)
    },
    getSingleCharacter: (id: number) => {
        return axios.get<CharacterType>(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => data)
    }
}
