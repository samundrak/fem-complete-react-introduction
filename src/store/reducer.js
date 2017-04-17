import { SEARCHTERM_UPDATED, SEARCH_SUCCESS, SEARCH_FAILED } from './consts';
import State from './state';

export default (state = State, actions) => {
  let newState = {};
  switch (actions.type) {
    case SEARCHTERM_UPDATED:
      Object.assign(newState, state, { searchTerm: actions.searchTerm });
      break;
    case SEARCH_SUCCESS:
    case SEARCH_FAILED:
      Object.assign(newState, state, { videos: actions.videos });
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};
