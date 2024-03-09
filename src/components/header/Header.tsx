import React, { useContext } from 'react';
import logo from '../../assets/images/logo192.png';
import { CustomInput } from '../input/CustomInput';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import Toggle from '../buttons/Toggle';

const Header: React.FC = () => {
  const {
    filterValue,
    setFilterValue,
    setReleasedToggle,
    setRatingToggle,
  } = useContext(MoviesContext);

  return (
    <div className='flex flex-row bg-slate-200 h-30 sticky top-0 z-10 overflow-hidden'>
      <img
        className='h-20 sm:h-32 rounded-full p-2'
        src={logo}
        alt='Logo'
      />
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
            <Toggle
              title={'Sort By Release Date'}
              onChange={setReleasedToggle}
            />
          </div>
          <div>
            <Toggle
              title={'Sort By Rating'}
              onChange={setRatingToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
