import axios from 'axios';
import { SEARCH } from './index';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

export function search(options) {
  return instance.get(SEARCH, { params: options });
}
export function getDefaultVideos() {
  return search({ q: 'new hollywood trailers' });
}
