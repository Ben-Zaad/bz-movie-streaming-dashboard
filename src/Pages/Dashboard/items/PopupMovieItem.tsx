import React from 'react';
import { MovieItem } from '../../../types/types';
import { SimpleLoader } from '../../../components/loaders/SimpleLoader';
import { sanitizeHTML } from '../../../utils/html-utils';
import { Rating } from '../../../components/ui/Rating';
import { formatTimeDuration } from '../../../utils/string-utils';

type PopupMovieItemProps = {
  item: MovieItem;
  isLoading: Boolean;
};

export const PopupMovieItem: React.FC<
  PopupMovieItemProps
> = (feedProps) => {
  const {
    title,
    type,
    largeimage,
    synopsis,
    rating,
    runtime,
  } = feedProps.item;

  const sanitizedSynopsis = sanitizeHTML(synopsis);

  return (
    <>
      {feedProps.isLoading ? (
        <SimpleLoader />
      ) : (
        <div className='flex flex-col bg-white border border-gray-300 rounded-md overflow-hidden shadow-md w-5/6 m-4 hover:shadow-lg sm:flex-row'>
          <div className='sm:w-1/2 overflow-hidden'>
            <img
              src={largeimage}
              alt={title}
              className='w-screen h-1/6 sm:h-full object-cover border border-gray-300 p-2'
            />
          </div>
          <div className='flex flex-col w-full p-4 sm:w-1/2'>
            <h2 className='text-lg font-semibold mb-2'>
              {title}
            </h2>
            <div className='text-l'>
              {formatTimeDuration(runtime)}
            </div>
            <div
              className='text-gray-600 mb-2 overflow-auto pt-2'
              dangerouslySetInnerHTML={{
                __html: sanitizedSynopsis,
              }}
            />
            <div className='text-gray-700 mb-2'>
              <div className=''>
                <Rating rating={rating} maxRating='10' />
              </div>
              <p>
                <strong>Type:</strong> {type}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
