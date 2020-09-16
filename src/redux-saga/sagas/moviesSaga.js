import { call, put, takeEvery , } from "redux-saga/effects";
import axios from "axios"
import { 
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILED,
    SET_SEARCH,
    SET_SEARCH_SUCCESS, 
    SET_SELECTED_MOVIE_SUCCESS,
    SET_SELECTED_MOVIE
} from "./../types";
import { api_key } from "./key";

// const baseapiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&include_adult=false`
const baseapiUrl = `https://api.themoviedb.org/3`

function getApi(action) {
    return axios.get(`${baseapiUrl}${action.endpoint}?api_key=${api_key}&language=en-US&include_adult=false&query=${action.query}&page=${action.page}`).then(resp => resp.data.results)
}

function* fetchMovies(action) {
    try{
        const movies = yield call(getApi, action)
        yield put({ type: FETCH_MOVIES_SUCCESS , movies: movies })
    } catch(e) {
        yield put({ type: FETCH_MOVIES_FAILED, message: e.message })
    }
}

function* setSearchf(action) {
    yield put({ type: SET_SEARCH_SUCCESS, srchTxt: action.string })
}

function* setSel(action) {
    console.log(action)
    yield put({ type: SET_SELECTED_MOVIE_SUCCESS, selectedMovie: action.movie })
}

function* moviesSaga() {
    yield takeEvery(FETCH_MOVIES, fetchMovies)
}
function* setSearch() {
    yield takeEvery( SET_SEARCH, setSearchf )
}
function* setSelected() {
    yield takeEvery( SET_SELECTED_MOVIE, setSel )
}

const moviesSagas =  {
    moviesSaga,
    setSearch,
    setSelected
}

export default moviesSagas 