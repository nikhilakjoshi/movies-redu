import { call, put, takeEvery , } from "redux-saga/effects";
import axios from "axios"
import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILED } from "./../types";
import { api_key } from "./key";

const baseapiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&include_adult=false`

function getApi(action) {
    return axios.get(baseapiUrl+`&query=${action.query}&page=${action.page}`).then(resp => resp.data.results)
}

function* fetchMovies(action) {
    try{
        const movies = yield call(getApi, action)
        yield put({ type: FETCH_MOVIES_SUCCESS , movies: movies })
    } catch(e) {
        yield put({ type: FETCH_MOVIES_FAILED, message: e.message })
    }

}

function* moviesSaga() {
    yield takeEvery(FETCH_MOVIES, fetchMovies)
}

export default moviesSaga