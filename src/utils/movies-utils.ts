import { sortArrayByCategory } from './array-utils';

export const searchMovies = (
  movies: any[],
  filterValue: string,
  setSearchError: (arg: string) => {}
) => {
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
  if (filteredMovies.length === 0 && filterValue) {
    setSearchError(
      'Sorry, No Item matches this inpus, try typing something else'
    );
  }
  return filteredMovies;
};

export const sortMovies = (
  movies: any[],
  togglesArray: any[]
) => {
  let sortedArray = movies;

  togglesArray.forEach(
    (el: { toggle: Boolean; category: string }) => {
      if (el.toggle) {
        sortedArray = sortArrayByCategory(
          sortedArray,
          el.category
        );
      }
    }
  );

  return sortedArray;
};
