import React, { ReactNode, useState } from 'react';

type CollapseProps = {
  openTitle: string;
  closeTitle: string;
  children: ReactNode;
};

const Collapse: React.FC<CollapseProps> = ({
  openTitle,
  closeTitle,
  children,
}) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className='border border-gray-300 p-2 mb-2 rounded'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={toggleCollapse}
      >
        <h3 className='text-lg font-semibold'>
          {isCollapsed ? closeTitle : openTitle}
        </h3>
        <span>
          {isCollapsed ? (
            <svg
              className='w-4 h-4 text-gray-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          ) : (
            <svg
              className='w-4 h-4 text-gray-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          )}
        </span>
      </div>
      {isCollapsed && (
        <div className='mt-2 border-t border-gray-300 pt-2'>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
