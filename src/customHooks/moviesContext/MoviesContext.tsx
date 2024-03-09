import { createContext, useEffect, useState } from 'react';
import { isValidUrl } from '../../utils/string-utils';
import {
  getQueryParams,
  setQueryStringUrl,
} from '../../utils/url-utils';
import {
  apiGetAllMovies,
  apiGetMovieById,
} from '../../api/moviesService';
import { MovieItem } from '../../Pages/Dashboard/types';

interface MoviesProviderProps {
  children: React.ReactNode;
}

interface MoviesContext {
  moviesIsLoading: Boolean;
  movies: MovieItem[];
  filterValue: string;
  searchError: string;
  selectedMovieId: string;
  selectedMovie: MovieItem | null;
  getMovies: () => any;
  setFilterValue: (arg: string) => any;
  setSearchError: (arg: string) => any;
  selectMovie: (arg: string) => any;
}

const initialContext: MoviesContext = {
  moviesIsLoading: false,
  movies: [],
  filterValue: '',
  searchError: '',
  selectedMovieId: '',
  selectedMovie: null,
  getMovies: () => {},
  setFilterValue: (arg) => {},
  setSearchError: (arg) => {},
  selectMovie: (arg) => {},
};

export const MoviesContext =
  createContext<MoviesContext>(initialContext);

const MoviesProvider = ({
  children,
}: MoviesProviderProps) => {
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [filterValue, setFilterValue] = useState('');
  const [searchError, setSearchError] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(
    getQueryParams('selectedMovieId')
  );
  const [selectedMovie, setSeletedMovie] = useState(null);
  const [moviesIsLoading, setmoviesIsLoading] =
    useState<boolean>(false);

  const getMovies = async () => {
    setmoviesIsLoading(true);

    const res = await apiGetAllMovies().catch(
      function (error) {
        setSearchError(error.response.data.error);
      }
    );
    setMovies(res?.data);
    setmoviesIsLoading(false);
  };

  const getMovieById = async (id: string) => {
    setmoviesIsLoading(true);

    const res = await apiGetMovieById(id).catch(
      function (error) {
        setSearchError(error.response.data.error);
      }
    );
    console.log('FIND ME RES', res);
    setSeletedMovie(res?.data[0]);
    setmoviesIsLoading(false);
  };

  const selectMovie = (selectedMovieId: string) => {
    setSelectedMovieId(selectedMovieId);
    setQueryStringUrl('selectedMovieId', selectedMovieId);
    getMovieById(selectedMovieId);
  };

  useEffect(() => {
    getMovieById(selectedMovieId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        moviesIsLoading,
        movies,
        filterValue,
        searchError,
        selectedMovieId,
        selectedMovie,
        getMovies,
        setFilterValue,
        setSearchError,
        selectMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
