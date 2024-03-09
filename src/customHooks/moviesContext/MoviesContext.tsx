import { createContext, useEffect, useState } from 'react';
import { isValidUrl } from '../../utils/string-utils';
import { readQueryParams, setQueryStringUrl } from '../../utils/url-utils';
import { apiGetAllMovies } from '../../api/moviesService';
import { MovieItem } from '../../Pages/Dashboard/types';


interface MoviesProviderProps {
  children: React.ReactNode;
}

interface MoviesContext {
  isLoading: Boolean;
  movies: MovieItem[];
  filterValue: string;
  searchError: string;
  getMovies: () => any;
  setFilterValue: (arg: string) => any;
  setSearchError: (arg: string) => any;
}

const initialContext: MoviesContext = {
  isLoading: false,
  movies: [],
  filterValue: '',
  searchError: '',
  getMovies: () => {},
  setFilterValue: (arg) => {},
  setSearchError: (arg) => {},
};

export const MoviesContext = createContext<MoviesContext>(initialContext);

const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [movies, setmovies] = useState<MovieItem[]>([]);
  const [filterValue, setFilterValue] = useState('');
  const [searchError, setSearchError] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovies = async () => {
    setIsLoading(true);
    
    setQueryStringUrl('selectedMovieId', selectedMovieId);
    
    const res = await apiGetAllMovies().catch(function (error) {
      setSearchError(error.response.data.error);
    });
    setmovies(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
      getMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        movies,
        filterValue,
        searchError,
        getMovies,
        setFilterValue,
        setSearchError,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
