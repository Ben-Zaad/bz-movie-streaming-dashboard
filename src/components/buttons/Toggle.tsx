import React, { useState } from 'react';

type ToggleProps = {
  title: string;
  defaultChecked?: Boolean;
  onChange?: (checked: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({
  defaultChecked = false,
  title,
  onChange,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);

    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <div className=''>
      <label className='cursor-pointer'>
        <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
          {title}
        </span>
        <div className='flex w-16 justify-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            value=''
            className='sr-only peer'
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
