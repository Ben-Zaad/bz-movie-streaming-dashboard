import React from 'react';

type RatingProps = {
  rating: string;
};

export const Rating: React.FC<RatingProps> = ({
  rating,
}) => {
  return (
    <div className='font-medium text-xl'>
      {rating ? '⭐' + rating : ''}
    </div>
  );
};
