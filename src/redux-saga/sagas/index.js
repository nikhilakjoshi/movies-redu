import { all } from "redux-saga/effects";
import moviesSagas from "./moviesSaga";

export default function* rootSaga() {
    const { moviesSaga, setSearch, setSelected, clearMovies } = moviesSagas
    yield all([
        moviesSaga(),
        setSearch(),
        setSelected(),
        clearMovies()
    ])
}