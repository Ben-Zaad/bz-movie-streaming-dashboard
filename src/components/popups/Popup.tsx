import React from 'react';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  returnText: string;
  children: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  returnText,
}) => {
  const handlePopupClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} bg-gray-800 bg-opacity-50 z-50`}
    >
      <div className='bg-white sm:w-5/6 md:w-3/5 lg:w-2/4 xl:w-3/5 p-6 mx-auto mt-20 rounded-md shadow-md sm:mt-20 sm:rounded-none sm:rounded-b-md'>
        <div className='content'>{children}</div>
        <div className='mt-4'>
          <button
            onClick={handlePopupClose}
            className='text-gray-600 hover:text-gray-800 focus:outline-none'
          >
            ⬅️{returnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
