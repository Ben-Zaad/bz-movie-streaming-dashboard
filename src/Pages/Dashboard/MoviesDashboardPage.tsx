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
import Header from '../../components/header/Header';

export const MoviesDashboardPage = () => {
  const {
    movies,
    filterValue,
    searchError,
    moviesIsLoading,
    selectedMovieId,
    selectedMovie,
    setFilterValue,
    getMovies,
    setSearchError,
    selectMovie,
  } = useContext(MoviesContext);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchError('');
    getMovies();
  };

  return (
    <div>
      <Header />
      {selectedMovieId && selectedMovie?.id && (
        <Popup
          isOpen={!!selectedMovie.id}
          onClose={() => selectMovie('')}
          returnText='Back To List'
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
