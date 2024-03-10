import { searchMovies, sortMovies } from './movies-utils';

describe('searchMovies', () => {
  it('filters movies based on title', () => {
    const movies = [
      {
        title: 'The Matrix',
        rating: '5',
        released: '1999-03-31',
      },
      {
        title: 'Inception',
        rating: '4.5',
        released: '2010-07-16',
      },
    ];
    const filterValue = 'Matrix';
    const setSearchError = jest.fn();

    const result = searchMovies(
      movies,
      filterValue,
      setSearchError
    );

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('The Matrix');
    expect(setSearchError).toHaveBeenCalled();
  });

  it('sets searchError when no movies match the filterValue', () => {
    const movies = [
      {
        title: 'The Matrix',
        rating: '5',
        released: '1999-03-31',
      },
      {
        title: 'Inception',
        rating: '4.5',
        released: '2010-07-16',
      },
    ];
    const filterValue = 'Nonexistent';
    const setSearchError = jest.fn();

    const result = searchMovies(
      movies,
      filterValue,
      setSearchError
    );

    expect(result).toHaveLength(0);
    expect(setSearchError).toHaveBeenCalledWith(
      'Sorry, No Item matches this inpus, try typing something else'
    );
  });
});

describe('sortMovies', () => {
  it('sorts movies by category when the toggle is true', () => {
    const movies = [
      {
        title: 'Inception',
        rating: '4.5',
        released: '2010-07-16',
      },
      {
        title: 'The Matrix',
        rating: '5',
        released: '1999-03-31',
      },
    ];
    const togglesArray = [
      { toggle: true, category: 'title' },
      { toggle: false, category: 'rating' },
    ];

    const result = sortMovies(movies, togglesArray);

    expect(result[0].title).toBe('Inception');
    expect(result[1].title).toBe('The Matrix');
  });

  it('does not sort movies when the toggle is false', () => {
    const movies = [
      {
        title: 'Inception',
        rating: '4.5',
        released: '2010-07-16',
      },
      {
        title: 'The Matrix',
        rating: '5',
        released: '1999-03-31',
      },
    ];
    const togglesArray = [
      { toggle: false, category: 'title' },
      { toggle: false, category: 'rating' },
    ];

    const result = sortMovies(movies, togglesArray);

    expect(result[0].title).toBe('Inception');
    expect(result[1].title).toBe('The Matrix');
  });
});
