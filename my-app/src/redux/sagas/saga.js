import {takeEvery, put, call} from "redux-saga/effects"
import axios from "axios";

async function getPeople() {
    const result = await axios.get("https://swapi.dev/api/people");
    return result.data;
}

export function* workerSaga() {
    const data = yield call(getPeople);
    console.log(data)
    yield put({type: 'SET_PEOPLE', payload: data.results})
}


export function* watchClickSaga() {

    yield takeEvery("click", workerSaga);
}


export default function* rootSaga() {
    yield watchClickSaga();
}
