import React from 'react';

type RatingProps = {
  rating: string;
  maxRating?: string;
};

export const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating,
}) => {
  return (
    <div className='flex items-center h-10 text-2xl	'>
      {rating ? '⭐' + rating : ''}
      {rating && maxRating && '/' + maxRating}
    </div>
  );
};
