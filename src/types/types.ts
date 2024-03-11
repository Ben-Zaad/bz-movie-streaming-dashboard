import { Dispatch, SetStateAction } from 'react';

export interface IMoviesContext {
  moviesIsLoading: Boolean;
  expandIsLoading: Boolean;
  releasedToggle: Boolean;
  ratingToggle: Boolean;
  movies: MovieItem[];
  filterValue: string;
  searchError: string;
  apiError: string;
  selectedMovieId: string;
  selectedMovie: MovieItem | null;
  setFilterValue: (arg: string) => any;
  setSearchError: (arg: string) => any;
  selectMovie: (arg: string) => any;
  setReleasedToggle: Dispatch<SetStateAction<boolean>>;
  setRatingToggle: Dispatch<SetStateAction<boolean>>;
}

export type MovieItem = {
  id: string;
  title: string;
  image: string;
  synopsis: string;
  rating: string;
  type: string;
  released: string;
  runtime: string;
  largeimage: string;
  unogsdate: string;
  imdbid: string;
  download: string;
};
