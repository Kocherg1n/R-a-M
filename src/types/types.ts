export type CharacterType = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: OriginType
    location: LocationType
    image: string
    episode: Array<string>
    url: string
    created: string
}

export type InfoType = {
    count: number
    pages: number
    next: null | string
    prev: null | string
}

export type FetchSingleCharacterType = {
    type: 'FETCH_SINGLE_CHARACTER',
    payload: number
}

type OriginType = {
    name: string
    url: string
}

type LocationType = {
    name: string
    url: string
}

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
