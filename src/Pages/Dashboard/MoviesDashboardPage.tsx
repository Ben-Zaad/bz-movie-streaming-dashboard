import { useContext } from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import { CustomInput } from '../../components/input/CustomInput';
import { InputError } from '../../components/errors/InputError';
import { BackToTopButton } from '../../components/buttons/BackToTopButton';
import { DashboardMovieItem } from './DashboardMovieItem';
import { MovieItem } from './types';

export const MoviesDashboardPage = () => {
  const {
    movies,
    filterValue,
    setFilterValue,
    getMovies,
    searchError,
    setSearchError,
    isLoading,
  } = useContext(MoviesContext);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchError('');
    getMovies();
  };

  return (
    <div>
      <CustomInput
        label='Search Movie By Name'
        value={filterValue}
        setValue={setFilterValue}
        isLoading={isLoading}
        handleSearch={handleSearch}
      />
      <InputError searchError={searchError} />
      <BackToTopButton />
      <div className='flex flex-wrap justify-center	w-5/5	'>
        {movies
          // .sort(function (a, b) {
          //   return (
          //     new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
          //   );
          // })
          .map((movie: MovieItem) => {
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
