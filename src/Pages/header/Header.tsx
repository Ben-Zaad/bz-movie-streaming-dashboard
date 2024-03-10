import React from 'react';
import logo from '../../assets/images/logo192.png';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className='flex flex-row bg-slate-200 h-30 sticky top-0 z-10 overflow-hidden'>
      <img
        className='h-20 sm:h-24 rounded-full p-2'
        src={logo}
        alt='Logo'
      />
      <h1 className='py-9 px-3'>{props.title}</h1>
    </div>
  );
};

export default Header;
