import axios from 'axios';
import { SEARCH, DETAIL, RELATED_VIDEOS } from './index';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

export function search(options) {
  return instance.get(SEARCH, { params: options });
}
export function getDefaultVideos() {
  return search({ q: 'nepali movies' });
}
export function getVideoDetails(videoId) {
  return instance.get(DETAIL(videoId));
}
export function getRelatedVideos(videoId) {
  return instance.get(RELATED_VIDEOS(videoId));
}
