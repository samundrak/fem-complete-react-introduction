import { SEARCHTERM_UPDATED } from './consts';
import State from './state';

export default (state = State, actions) => {
  let newState = {};
  switch (actions.type) {
    case SEARCHTERM_UPDATED:
      Object.assign(newState, state, { searchTerm: actions.searchTerm });
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};
