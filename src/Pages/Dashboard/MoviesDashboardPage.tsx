import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import { BackToTopButton } from '../../components/buttons/BackToTopButton';
import { DashboardMovieItem } from './items/DashboardMovieItem';
import { MovieItem } from '../../types/types';
import Popup from '../../components/popups/Popup';
import { PopupMovieItem } from './items/PopupMovieItem';
import Header from './header/Header';
import { SimpleLoader } from '../../components/loaders/SimpleLoader';
import Searchbar from './searchbar/Searchbar';
import PageTitle from '../../components/text/PageTitle';
import Footer from './footer/Footer';
import { InputError } from '../../components/errors/InputError';
import {
  searchMovies,
  sortMovies,
} from '../../utils/movies-utils';

export const MoviesDashboardPage = () => {
  const {
    movies,
    filterValue,
    moviesIsLoading,
    expandIsLoading,
    selectedMovieId,
    selectedMovie,
    searchError,
    apiError,
    releasedToggle,
    ratingToggle,
    selectMovie,
    setSearchError,
  } = useContext(MoviesContext);

  const [filteredMovies, setFiltedMovies] =
    useState(movies);

  useEffect(() => {
    setFiltedMovies(
      sortMovies(
        searchMovies(movies, filterValue, setSearchError),
        [
          { toggle: releasedToggle, category: 'released' },
          { toggle: ratingToggle, category: 'rating' },
        ]
      )
    );
  }, [filterValue, releasedToggle, ratingToggle]);

  return (
    <div>
      <Header title='BZ Movie Dashboard' />
      <InputError errorMessage={apiError} />
      <div>
        <BackToTopButton />
        <PageTitle title='Explore Your Next Movies And TV Shows'></PageTitle>
        <Searchbar />
        {selectedMovieId && selectedMovie?.id && (
          <Popup
            isOpen={!!selectedMovie.id}
            onClose={() => selectMovie('')}
            returnText='Back To List'
          >
            <PopupMovieItem
              item={selectedMovie}
              isLoading={expandIsLoading}
            />
          </Popup>
        )}
        <div className='flex flex-wrap justify-center w-5/5 sm:min-h-64 xl:min-h-72'>
          {moviesIsLoading ? (
            <SimpleLoader />
          ) : (
            (filteredMovies.length > 0 ||
            searchError.length > 0
              ? filteredMovies
              : movies
            ).map((movie: MovieItem) => {
              return (
                <DashboardMovieItem
                  key={movie.id}
                  item={movie}
                  callback={selectMovie}
                />
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
