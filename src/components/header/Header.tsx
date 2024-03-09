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
    <div className='flex flex-row bg-slate-200 h-30 sticky top-0 z-10 sm:w-screen'>
      <img
        className='w-20 h-20 rounded-full p-2'
        src={logo}
        alt='Logo'
      />
      <div className='flex flex-col justify-end'>
        <h1>BZ Movie Dashboard</h1>
        <div className='bg-slate-200 flex flex-col p-4'>
          <CustomInput
            placeholder='Type here to search'
            label='Search Movie By Name, Release Year or IMDB Rating :'
            value={filterValue}
            setValue={setFilterValue}
          />
          <div className='flex flex-row w-5/5'>
            <Toggle
              title={'Sort By Release Date'}
              onChange={setReleasedToggle}
            />
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
