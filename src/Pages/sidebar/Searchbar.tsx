// Sidebar.tsx
import React, { useContext } from 'react';
import { CustomInput } from '../../components/input/CustomInput';
import Toggle from '../../components/buttons/Toggle';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';

const Searchbar: React.FC = () => {
  const {
    filterValue,
    setFilterValue,
    setReleasedToggle,
    setRatingToggle,
  } = useContext(MoviesContext);
  return (
    <div className='flex flex-col justify-end xl:w-full bg-slate-200'>
      <div className='flex flex-col sm:flex-row p-4'>
        <div className='w-3/12'>
          <CustomInput
            placeholder='Type here to search'
            label='Search Movie By Name, Release Year or IMDB Rating :'
            value={filterValue}
            setValue={setFilterValue}
          />
        </div>
        <div className=''>
          <h3>Sort By:</h3>
          <div className='flex flex-row'>
            <Toggle
              title={'Release Date'}
              onChange={setReleasedToggle}
            />
            <Toggle
              title={'Rating'}
              onChange={setRatingToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;