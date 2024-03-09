import React from 'react';

type RatingProps = {
  rating: string;
};

export const Rating: React.FC<RatingProps> = ({
  rating,
}) => {
  return (
    <div className='flex items-center h-10'>
      {rating ? '⭐' + rating : ''}
    </div>
  );
};
