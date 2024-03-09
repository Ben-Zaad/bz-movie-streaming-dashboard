import DOMPurify from 'dompurify';

import { timePassedFromNow } from '../../utils/date-utils';
import { MovieItem } from './types';
import { useContext } from 'react';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';

/*
DOMPurify sanitizes HTML and prevents XSS attacks.
You can feed DOMPurify with string full of dirty HTML
and it will return a string with clean HTML
*/
const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};

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
  const sanitizedSynopsis = sanitizeHTML(synopsis);
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
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>
          {title}
        </h2>
        <div
          className='text-gray-600 mb-2'
          dangerouslySetInnerHTML={{
            __html: sanitizedSynopsis,
          }}
        />
        <div className='text-gray-700 mb-2'>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Released:</strong>{' '}
            {/* <ReleaseDate date={released} /> */}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime}
          </p>
        </div>
      </div>
    </div>
  );
};
