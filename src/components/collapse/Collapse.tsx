import React, { ReactNode, useState } from 'react';
import { XSvg } from '../../assets/svg/x-svg';
import { ExpandSvg } from '../../assets/svg/expand-svg';

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
    <div className='p-2 mb-2 rounded'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={toggleCollapse}
      >
        <h3 className='text-lg font-semibold'>
          {isCollapsed ? closeTitle : openTitle}
        </h3>
        <span className='transform rotate-0'>
          {isCollapsed ? <XSvg /> : <ExpandSvg />}
        </span>
      </div>
      {isCollapsed && (
        <div className='mt-2 pt-2'>{children}</div>
      )}
    </div>
  );
};

export default Collapse;
