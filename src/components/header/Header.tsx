import React, { useContext } from 'react';
import logo from '../../assets/images/logo192.png';
import { CustomInput } from '../input/CustomInput';
import { MoviesContext } from '../../customHooks/moviesContext/MoviesContext';
import Toggle from '../buttons/Toggle';
import CustomSidebar from '../sidebar/CustomSidebar';

const Header: React.FC = () => {
  return (
    <div className='flex flex-row bg-slate-200 h-30 sticky top-0 z-10 overflow-hidden'>
      <img
        className='h-20 sm:h-32 rounded-full p-2'
        src={logo}
        alt='Logo'
      />
      <CustomSidebar />
    </div>
  );
};

export default Header;
