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
  releasedToggle: Boolean,
  ratingToggle: Boolean
) => {
  let sortedArray = movies;
  if (releasedToggle) {
    sortedArray = sortArrayByCategory(
      sortedArray,
      'released'
    );
  }
  if (ratingToggle) {
    sortedArray = sortArrayByCategory(
      sortedArray,
      'rating'
    );
  }
  return sortedArray;
};
