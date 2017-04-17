import { SEARCHTERM_UPDATED, SEARCH_FAILED, SEARCH_SUCCESS } from './consts';
import { search } from '../api/calls';

export function searchTermChanged(searchTerm) {
  return {
    type: SEARCHTERM_UPDATED,
    searchTerm,
  };
}
export function searchSuccess(videos) {
  return {
    type: SEARCH_SUCCESS,
    videos,
  };
}
export function searchFailed() {
  return {
    type: SEARCH_FAILED,
    videos: [],
  };
}

export function searchVideos(searchTerm) {
  return dispatch => (
    search({ q: searchTerm })
      .then((response) => {
        dispatch(searchSuccess(response.data.items));
      })
      .catch(() => {
        dispatch(searchFailed());
      })
  );
}
