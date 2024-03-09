// Sidebar.tsx
import React, { useContext } from 'react';
import { Sidebar, Menu } from 'react-pro-sidebar';
import { CustomInput } from '../input/CustomInput';
import Toggle from '../buttons/Toggle';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';

const CustomSidebar: React.FC = () => {
  const {
    filterValue,
    setFilterValue,
    setReleasedToggle,
    setRatingToggle,
  } = useContext(MoviesContext);
  return (
    <div className='flex flex-col justify-end'>
      <h1>BZ Movie Dashboard</h1>
      <div className='bg-slate-200 sm:w-3/5 md:w-3/5 xl:w-2/5 flex flex-col sm:flex-row p-4'>
        <CustomInput
          placeholder='Type here to search'
          label='Search Movie By Name, Release Year or IMDB Rating :'
          value={filterValue}
          setValue={setFilterValue}
        />
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

export default CustomSidebar;
