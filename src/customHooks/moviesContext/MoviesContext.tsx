import { createContext, useEffect, useState } from 'react';
import {
  getQueryParams,
  setQueryStringUrl,
} from '../../utils/url-utils';
import {
  apiGetAllMovies,
  apiGetMovieById,
} from '../../api/moviesService';
import {
  IMoviesContext,
  MovieItem,
} from '../../types/types';

interface MoviesProviderProps {
  children: React.ReactNode;
}

const initialContext: IMoviesContext = {
  moviesIsLoading: false,
  expandIsLoading: false,
  releasedToggle: false,
  ratingToggle: false,
  movies: [],
  filterValue: '',
  searchError: '',
  apiError: '',
  selectedMovieId: '',
  selectedMovie: null,
  setFilterValue: (arg: string) => {},
  setSearchError: (arg: string) => {},
  selectMovie: (arg: string) => {},
  setReleasedToggle: () => {},
  setRatingToggle: () => {},
};

export const MoviesContext =
  createContext<IMoviesContext>(initialContext);

const MoviesProvider = ({
  children,
}: MoviesProviderProps) => {
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [filterValue, setFilterValue] = useState('');
  const [searchError, setSearchError] = useState('');
  const [apiError, setApiError] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(
    getQueryParams('selectedMovieId')
  );
  const [selectedMovie, setSeletedMovie] = useState(null);
  const [moviesIsLoading, setmoviesIsLoading] =
    useState<boolean>(false);
  const [expandIsLoading, setExpandIsLoading] =
    useState<boolean>(false);

  const [releasedToggle, setReleasedToggle] =
    useState<boolean>(false);
  const [ratingToggle, setRatingToggle] =
    useState<boolean>(false);

  const getMovies = async () => {
    setmoviesIsLoading(true);
    setApiError('');

    const res = await apiGetAllMovies().catch(
      function (error) {
        setApiError(error?.message);
      }
    );

    res?.data && setMovies(res?.data);
    setmoviesIsLoading(false);
  };

  const getMovieById = async (id: string) => {
    if (id) {
      setExpandIsLoading(true);
      setApiError('');
      setSeletedMovie(null);

      const res = await apiGetMovieById(id).catch(
        function (error) {
          setApiError(error.response.data.error);
        }
      );

      res?.data && setSeletedMovie(res?.data[0]);
      setExpandIsLoading(false);
    }
  };

  const selectMovie = (selectedMovieId: string) => {
    getMovieById(selectedMovieId);
    setSelectedMovieId(selectedMovieId);
    setQueryStringUrl('selectedMovieId', selectedMovieId);
    setExpandIsLoading(false);
  };

  useEffect(() => {
    selectedMovieId && getMovieById(selectedMovieId);
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
        expandIsLoading,
        movies,
        filterValue,
        searchError,
        apiError,
        selectedMovieId,
        selectedMovie,
        ratingToggle,
        releasedToggle,
        setFilterValue,
        setSearchError,
        selectMovie,
        setReleasedToggle,
        setRatingToggle,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
