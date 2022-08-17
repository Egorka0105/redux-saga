import {takeEvery, put, call} from "redux-saga/effects"
import axios from "axios";
import {getCatsSuccess} from "../slices/firstSagaSlice";


function* workGetCatsFetch() {
    const cats = yield call(() => axios.get('https://api.thecatapi.com/v1/breeds'));
    const result = cats.data.slice(0, 10);
    yield put(getCatsSuccess(result));

}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;
