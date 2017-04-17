import { SEARCHTERM_UPDATED } from './consts';

export function searchTermChanged(searchTerm) {
  return {
    type: SEARCHTERM_UPDATED,
    searchTerm,
  };
}

export function searchTermChangeds(searchTerm) {
  return {
    type: SEARCHTERM_UPDATED,
    searchTerm,
  };
}
