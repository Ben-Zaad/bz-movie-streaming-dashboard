import React, { useContext } from 'react';
import logo from '../../assets/images/logo192.png';
import { CustomInput } from '../input/CustomInput';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';

const Header: React.FC = () => {
  const { filterValue, moviesIsLoading, setFilterValue } =
    useContext(MoviesContext);

  return (
    <div className='flex flex-row bg-slate-200 h-30 sticky top-0 z-10 sm:w-5/6 md:w-3/5 lg:w-2/4 xl:w-full'>
      <img
        className='w-20 h-20 rounded-full p-2'
        src={logo}
        alt='Logo'
      />
      <div className='flex flex-col justify-end'>
        <h1>BZ Movie Dashboard</h1>
        <div className='bg-slate-600 '>
          <CustomInput
            label='Search Movie By Name'
            value={filterValue}
            setValue={setFilterValue}
            isLoading={moviesIsLoading}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
