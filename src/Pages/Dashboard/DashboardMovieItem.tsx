import { timePassedFromNow } from '../../utils/date-utils';
import { MovieItem } from './types';

export const DashboardMovieItem = (
  feedProps: MovieItem
) => {
  const {
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
  return (
    <div
      // to={`/movies/${id}`}
      className='block bg-white border border-gray-300 rounded-md overflow-hidden shadow-md w-64 m-4 hover:shadow-lg'
    >
      <img
        src={image}
        alt={title}
        className='w-full h-auto'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>
          {title}
        </h2>
        <p className='text-gray-600 mb-2'>{synopsis}</p>
        <div className='text-gray-700 mb-2'>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Released:</strong> {released}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime}
          </p>
          <p>
            <strong>IMDb ID:</strong> {imdbid}
          </p>
        </div>
        <p className='text-gray-500 text-sm'>
          Released on: {released}
        </p>
      </div>
    </div>
  );
};
