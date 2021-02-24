import {put, takeEvery, call, select} from 'redux-saga/effects'
import {selectNextPageUrl} from '../redux/seletors'
import {charactersApi} from '../api/api'
import {actions} from '../redux/actions'
import {FetchSingleCharacterType} from '../types/types'


export function* fetchCharactersWorker() {
    try {
        const {results, info} = yield call(charactersApi.getCharacters)
        yield put(actions.setCharacters(results, info))
        yield put(actions.fetchSuccess())
    } catch (e) {
        yield put(actions.fetchFailed())
    }
}

export function* fetchMoreCharactersWorker() {
    try {
        const url = yield select(selectNextPageUrl)
        if (url !== null) {
            const {results, info} = yield call(charactersApi.getMoreCharacters, url)
            yield put(actions.setMoreCharacters(results, info))
            yield put(actions.fetchSuccess())
        }
    } catch (e) {
        yield put(actions.fetchFailed())
    }
}

export function* fetchSingleCharacterWorker({payload: id}: FetchSingleCharacterType) {
    try {
        const char = yield call(charactersApi.getSingleCharacter, id)
        yield put(actions.setSingleCharacter(char))
        yield put(actions.fetchSuccess())
    } catch (e) {
        yield put(actions.fetchFailed())
    }
}

export function* charactersWatcher() {
    yield takeEvery('FETCH_CHARACTERS', fetchCharactersWorker)
    yield takeEvery('FETCH_MORE_CHARACTERS', fetchMoreCharactersWorker)
    yield takeEvery('FETCH_SINGLE_CHARACTER', fetchSingleCharacterWorker)
}
