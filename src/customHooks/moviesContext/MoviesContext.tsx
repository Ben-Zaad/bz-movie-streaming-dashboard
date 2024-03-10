import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import {
  getQueryParams,
  setQueryStringUrl,
} from '../../utils/url-utils';
import {
  apiGetAllMovies,
  apiGetMovieById,
} from '../../api/moviesService';
import { MovieItem } from '../../types/types';

interface MoviesProviderProps {
  children: React.ReactNode;
}

interface MoviesContext {
  moviesIsLoading: Boolean;
  expandIsLoading: Boolean;
  movies: MovieItem[];
  filterValue: string;
  searchError: string;
  selectedMovieId: string;
  selectedMovie: MovieItem | null;
  getMovies: () => any;
  setFilterValue: (arg: string) => any;
  setSearchError: (arg: string) => any;
  selectMovie: (arg: string) => any;
  searchMovies: () => MovieItem[];
  setReleasedToggle: Dispatch<SetStateAction<boolean>>;
  setRatingToggle: Dispatch<SetStateAction<boolean>>;
  sortMovies: (movies: MovieItem[]) => MovieItem[];
}

const initialContext: MoviesContext = {
  moviesIsLoading: false,
  expandIsLoading: false,
  movies: [],
  filterValue: '',
  searchError: '',
  selectedMovieId: '',
  selectedMovie: null,
  getMovies: () => {},
  setFilterValue: (arg) => {},
  setSearchError: (arg) => {},
  selectMovie: (arg) => {},
  searchMovies: () => {
    return [];
  },
  setReleasedToggle: () => {},
  setRatingToggle: () => {},
  sortMovies: (movies) => {
    return [];
  },
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
  const [expandIsLoading, setExpandIsLoading] =
    useState<boolean>(false);

  const [releasedToggle, setReleasedToggle] =
    useState<boolean>(false);
  const [ratingToggle, setRatingToggle] =
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
    setExpandIsLoading(true);
    setSeletedMovie(null);
    const res = await apiGetMovieById(id).catch(
      function (error) {
        setSearchError(error.response.data.error);
      }
    );
    setSeletedMovie(res?.data[0]);
    setExpandIsLoading(false);
  };

  const selectMovie = (selectedMovieId: string) => {
    getMovieById(selectedMovieId);
    setSelectedMovieId(selectedMovieId);
    setQueryStringUrl('selectedMovieId', selectedMovieId);
    setExpandIsLoading(false);
  };

  const searchMovies = () => {
    setSearchError('');
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .includes(filterValue.toLowerCase()) ||
        movie.rating === filterValue ||
        movie.released.includes(filterValue)
      );
    });
    if (filteredMovies.length === 0) {
      setSearchError(
        'Sorry, No Item matches this inpus, try typing something else'
      );
    }
    return filteredMovies;
  };

  const sortMovies = (movies: MovieItem[]) => {
    let sortedArray = movies;
    if (releasedToggle) {
      sortedArray = sortedArray.sort((movie1, movie2) => {
        return (
          Number(movie2.released) - Number(movie1.released)
        );
      });
    }
    if (ratingToggle) {
      sortedArray = sortedArray.sort((movie1, movie2) => {
        return (
          Number(movie2.rating) - Number(movie1.rating)
        );
      });
    }
    return sortedArray;
  };

  useEffect(() => {}, []);

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
        expandIsLoading,
        movies,
        filterValue,
        searchError,
        selectedMovieId,
        selectedMovie,
        getMovies,
        setFilterValue,
        setSearchError,
        selectMovie,
        searchMovies,
        setReleasedToggle,
        setRatingToggle,
        sortMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
