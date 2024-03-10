import { useContext } from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import { BackToTopButton } from '../../components/buttons/BackToTopButton';
import { DashboardMovieItem } from './DashboardMovieItem';
import { MovieItem } from '../../types/types';
import Popup from '../../components/popups/Popup';
import { PopupMovieItem } from './PopupMovieItem';
import Header from '../header/Header';
import { SimpleLoader } from '../../components/loaders/SimpleLoader';
import CustomSidebar from '../sidebar/Searchbar';
import PageTitle from '../../components/text/PageTitle';

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
    <div className='overflow-x-hidden'>
      <Header title='BZ Movie Dashboard' />
      <PageTitle title='Explore Your Next Movies And TV Shows'></PageTitle>
      <CustomSidebar />
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
      <BackToTopButton />
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
  );
};
