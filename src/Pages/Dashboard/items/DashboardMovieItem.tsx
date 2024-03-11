import { MovieItem } from '../../../types/types';
import { Rating } from '../../../components/ui/Rating';

type DashboardMovieItemProps = {
  item: MovieItem;
  callback: (arg: any) => any;
};

export const DashboardMovieItem = (
  feedProps: DashboardMovieItemProps
) => {
  const { id, title, rating, released, image } =
    feedProps.item;

  return (
    <div
      onClick={() => feedProps.callback(id)}
      className='block bg-white border border-gray-300 rounded-md overflow-hidden shadow-md w-64 m-4 hover:shadow-lg cursor-pointer'
      title='Click to expand'
    >
      <img
        src={image}
        alt={title}
        className='w-full h-72 object-cover'
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
