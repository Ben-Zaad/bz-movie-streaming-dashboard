import { MovieItem } from './types';
import { useContext } from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import { Rating } from '../../components/ui/Rating';

export const DashboardMovieItem = (
  feedProps: MovieItem
) => {
  const {
    id,
    title,
    type,
    image,
    largeimage,
    synopsis,
    rating,
    released,
    runtime,
    unogsdate,
    imdbid,
    download,
  } = feedProps;
  const { selectMovie } = useContext(MoviesContext);

  return (
    <div
      onClick={() => selectMovie(id)}
      className='block bg-white border border-gray-300 rounded-md overflow-hidden shadow-md w-64 m-4 hover:shadow-lg'
    >
      <img
        src={image}
        alt={title}
        className='w-full h-auto cursor-pointer'
      />
      <div className='p-4 flex flex-col min-h-36'>
        <h2 className='text-lg font-semibold mb-2 '>
          {title} ({released})
        </h2>
        <div className='flex-grow flex items-end'>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};
