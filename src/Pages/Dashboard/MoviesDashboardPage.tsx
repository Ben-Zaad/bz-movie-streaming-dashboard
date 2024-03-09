import { useContext } from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import { BackToTopButton } from '../../components/buttons/BackToTopButton';
import { DashboardMovieItem } from './DashboardMovieItem';
import { MovieItem } from './types';
import Popup from '../../components/popups/Popup';
import { PopupMovieItem } from './PopupMovieItem';
import Header from '../../components/header/Header';
import { SimpleLoader } from '../../components/loaders/SimpleLoader';

export const MoviesDashboardPage = () => {
  const {
    moviesIsLoading,
    selectedMovieId,
    selectedMovie,
    selectMovie,
    searchMovies,
    sortMovies,
  } = useContext(MoviesContext);

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
        {moviesIsLoading ? (
          <SimpleLoader />
        ) : (
          sortMovies(searchMovies()).map(
            (movie: MovieItem) => {
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
            }
          )
        )}
      </div>
    </div>
  );
};
