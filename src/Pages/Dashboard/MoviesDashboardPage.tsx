import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import { CustomInput } from '../../components/input/CustomInput';
import { InputError } from '../../components/errors/InputError';
import { BackToTopButton } from '../../components/buttons/BackToTopButton';
import { DashboardMovieItem } from './DashboardMovieItem';
import { MovieItem } from './types';
import Popup from '../../components/popups/Popup';
import { PopupMovieItem } from './PopupMovieItem';

import logo from '../../assets/images/logo192.png';

export const MoviesDashboardPage = () => {
  const {
    movies,
    filterValue,
    searchError,
    isLoading,
    selectedMovieId,
    selectedMovie,
    setFilterValue,
    getMovies,
    setSearchError,
    selectMovie,
  } = useContext(MoviesContext);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchError('');
    getMovies();
  };

  return (
    <div>
      {selectedMovieId && selectedMovie?.id && (
        <Popup
          isOpen={!!selectedMovie.id}
          onClose={() => selectMovie('')}
          // Apply custom style for mobile
        >
          <PopupMovieItem
            title={selectedMovie.title}
            id={selectedMovie.id}
            image={selectedMovie.image}
            synopsis={selectedMovie.synopsis}
            rating={selectedMovie.rating}
            type={selectedMovie.type}
            released={selectedMovie.released}
            runtime={selectedMovie.runtime}
            largeimage={selectedMovie.largeimage}
            unogsdate={selectedMovie.unogsdate}
            imdbid={selectedMovie.imdbid}
            download={selectedMovie.download}
          />
        </Popup>
      )}

      <div className='flex flex-row bg-slate-200 h-30'>
        <img
          className='w-20 h-20 rounded-full p-2'
          src={logo}
        />
        <div className='flex flex-col justify-end	'>
          <h1>BZ Movie Dashboard</h1>
          <CustomInput
            label='Search Movie By Name'
            value={filterValue}
            setValue={setFilterValue}
            isLoading={isLoading}
            handleSearch={handleSearch}
          />
          <InputError searchError={searchError} />
        </div>
      </div>
      <BackToTopButton />
      <div className='flex flex-wrap justify-center w-5/5'>
        {movies.map((movie: MovieItem) => {
          return (
            <DashboardMovieItem
              key={movie.id}
              title={movie.title}
              id={movie.id}
              image={movie.image}
              synopsis={movie.synopsis}
              rating={movie.rating}
              type={movie.type}
              released={movie.released}
              runtime={movie.runtime}
              largeimage={movie.largeimage}
              unogsdate={movie.unogsdate}
              imdbid={movie.imdbid}
              download={movie.download}
            />
          );
        })}
      </div>
    </div>
  );
};
