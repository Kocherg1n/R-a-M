import {fetchCharactersWorker} from './charactersSaga'
import {expectSaga} from 'redux-saga-test-plan'
import {charactersApi} from '../api/api'
import {actions} from '../redux/actions'
import * as matchers from 'redux-saga-test-plan/matchers'

it('fetch characters', () => {
    const results = [{
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
    const info = {
        "count": 671,
        "pages": 34,
        "next": "https://rickandmortyapi.com/api/character?page=2",
        "prev": null
    }

    return expectSaga(fetchCharactersWorker)
        .provide([
            [matchers.call.fn(charactersApi.getCharacters), {results, info}],
        ])
        .put(actions.setCharacters(results, info))
        .put(actions.fetchSuccess())
        .run();
})
