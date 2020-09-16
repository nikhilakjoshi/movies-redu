import { all } from "redux-saga/effects";
import moviesSagas from "./moviesSaga";

export default function* rootSaga() {
    const { moviesSaga, setSearch, setSelected } = moviesSagas
    yield all([
        moviesSaga(),
        setSearch(),
        setSelected(),
    ])
}