import { useContext } from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import { CustomInput } from '../../components/input/CustomInput';
import { InputError } from '../../components/errors/InputError';
import { BackToTopButton } from '../../components/buttons/BackToTopButton';
import { DashboardMovieItem } from './DashboardMovieItem';

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
      {
        movies
          .sort(function (a, b) {
            return (
              new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
            );
          })
          .map((article: any) => {
            return (
              <DashboardMovieItem
                key={article.title}
                title={article.title}
                link={article.link}
                date={article.isoDate}
                creator={article.creator}
                content={article.content}
                content2={article.content2}
                contentSnippet={article.contentSnippet}
                image={article?.image?.$?.url}
              />
            );
          })}
    </div>
  );
};
