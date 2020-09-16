import { FETCH_MOVIES } from "./../types"

export function getMovies({ query, page }) {
  return { 
    type: FETCH_MOVIES,
    query,
    page
  }
}