import { useState, useEffect } from 'react';
import { TopArrowSvg } from '../../assets/svg/arrow-svg';

export const BackToTopButton = (): JSX.Element => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior =
      'smooth';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          type='button'
          onClick={backToTop}
          className={` ${
            showButton ? `inline-block` : `hidden`
          } fixed bottom-[40px] right-[40px] p-3 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-slate-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out`}
        >
          <TopArrowSvg />
        </button>
      )}
    </>
  );
};
