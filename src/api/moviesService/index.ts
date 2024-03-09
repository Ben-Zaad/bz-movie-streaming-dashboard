import axios from 'axios';
import { BASE_CONFIG } from '../../config';

export const apiGetAllMovies = async () => {
  return axios.get(`${BASE_CONFIG.API}/movies`);
};

export const apiGetMovieById = async (movieId: string) => {
  return axios.get(`${BASE_CONFIG.API}/movies/${movieId}`);
};
