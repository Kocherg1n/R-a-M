import { RootState } from "./store"

export const selectNextPageUrl = (state: RootState) => state.charactersReducer.info.next
// export const selectSingleCharacter = (state: RootState) => state.charactersReducer.singleCharacter
export const selectCharacters = (state: RootState) => state.charactersReducer.characters
export const selectIsLoading = (state: RootState) => state.charactersReducer.isLoading
export const selectError = (state: RootState) => state.charactersReducer.error
