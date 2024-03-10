import { useContext } from 'react';
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

export const MoviesDashboardPage = () => {
  const {
    moviesIsLoading,
    expandIsLoading,
    selectedMovieId,
    selectedMovie,
    selectMovie,
    searchMovies,
    sortMovies,
  } = useContext(MoviesContext);

  return (
    <div>
      <Header title='BZ Movie Dashboard' />
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
        <div className='flex flex-wrap justify-center w-5/5'>
          {moviesIsLoading ? (
            <SimpleLoader />
          ) : (
            sortMovies(searchMovies()).map(
              (movie: MovieItem) => {
                return (
                  <DashboardMovieItem
                    key={movie.id}
                    item={movie}
                    callback={selectMovie}
                  />
                );
              }
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
